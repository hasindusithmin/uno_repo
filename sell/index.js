
import { autocomplete } from "./auto-complete.js";


const autocompleto = ()=>{
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        let data = JSON.parse(this.response);
        console.log(data);
        let brand = [];
        for (let dt of data) {
            brand.push(dt["brand"]);
        }
        autocomplete(document.getElementById('myBrand'),brand);
        // console.log(brand);
    }

    xhr.open("GET","https://sheetdb.io/api/v1/fstxdk8iojlj3",true);
    
    xhr.send();
}

autocompleto()

const formElem = document.getElementById("myform");

formElem.onsubmit = (event)=>{
    event.preventDefault();
    let FD = new FormData(formElem);
    let D = {};
    for(let[key,value] of FD) {
        D[`${key}`] = value;
    }
    console.log(D);
    let image_name = sessionStorage.getItem("imagename");
    let image_type = sessionStorage.getItem("imagetype");
    D["image_type"] = image_type;
    const xhr = new XMLHttpRequest();
    xhr.onload = async function () {
        let myblob = xhr.response;
        console.log(myblob);
        D["image_data"] = await myblob.text();
        // console.log(D);
        let urlCreator = window.URL || window.webkitURL;
        let imageUrl = urlCreator.createObjectURL(this.response);
        console.log(imageUrl);
        // document.querySelector('img').src = imageUrl;
        const send_data = async()=>{
            await axios.post("http://localhost/webio/saveadd/",D)
                .then(res=>res.data)
                    .then(data=>console.log(data)).catch(err=>console.log(err))
        }
        send_data();
    }
    xhr.open("GET",`http://localhost/webio/upload/photos/${image_name}`,true);
    xhr.responseType = "blob";
    xhr.send()
}




