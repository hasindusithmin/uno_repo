import { autocomplete } from "./auto-complete.js";

const dom = (data)=>{
    let mydiv = document.createElement('div');
    mydiv.className = "my-center";
    mydiv.id = data["car_id"];
    let myul = document.createElement('ul');
    myul.className = "my-ul";
    let desc = [];
    for (let[key,value] of Object.entries(data)) {

        if (key !== 'car_id' && key !== 'images' && key !== 'image_type') {
            desc.push(value);
        }
    }
    // console.log(desc);
    let NL = [];
    for(let de of desc) {
        let li = document.createElement('li');
        li.innerHTML = de;
        NL.push(li);
    }
    // console.log(NL);
    for (let N of NL) {
        myul.appendChild(N)
    }
    mydiv.appendChild(myul);

    let myblob =  new Blob([data["images"]],{type:data["image_type"]})
    console.log(myblob);
   
    
    let urlCreator = window.URL || window.webkitURL;
    let imageUrl = urlCreator.createObjectURL(myblob);
    console.log(imageUrl);
    let myimg = document.createElement('img');
    console.log(myimg);
    myimg.src = imageUrl;
    myimg.alt ="image" + data["car_id"];
    mydiv.appendChild(myimg);
    document.getElementById("demo").appendChild(mydiv);
}


const read_session_store = async()=>{

    const b = sessionStorage.getItem("brand")
    const m =  sessionStorage.getItem("model")
    console.log({brand:b,model:m});
    
    if (b) {
        
        await axios.post("http://localhost/webio/getspec/",{brand:b,model:m})
        .then(res=>res.data)
            .then(data=>{

                let mydata = data;
                
                for (let myobj of mydata) {
                    
                    dom(myobj);

                }

            }).catch(err=>{console.log(err)})
    }
    
}


read_session_store()


const make_auto_complete = ()=>{
    
    const xhr = new XMLHttpRequest()
    
    xhr.onload = function () {
    
        let myarr_brand = [];
        let myarr_model = ["sedan","hatchback","suv","wegon","coupe"];
        let myarr = JSON.parse(this.response);
        for (let myobj of myarr) {
        myarr_brand.push(myobj["brand"]);
        autocomplete(document.getElementById('myBrand'),myarr_brand);
        autocomplete(document.getElementById('myModel'),myarr_model);
    }

    
    }
    //handshake
    xhr.open("GET","https://sheetdb.io/api/v1/fstxdk8iojlj3",true);
    //send
    xhr.send(); 
}
if (navigator.onLine) {
    document.querySelector('#conn').innerHTML = "";
    make_auto_complete();
} else {
    document.querySelector('#conn').innerHTML = "make sure your internet connection";
}

let formElem = document.querySelector('form');

formElem.onsubmit = (event)=>{
    
    // event.preventDefault();
    let car_brand = formElem.brand.value;
    let car_model = formElem.model.value;
    
    sessionStorage.setItem("brand",car_brand);
    sessionStorage.setItem("model",car_model);

    console.log("saved");

}
