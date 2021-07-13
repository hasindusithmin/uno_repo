const mounted = ()=>{
    let user= sessionStorage.getItem("currentuser");
    if (user == "johndoe@google.com") {
        document.getElementById("adminonly").style.display = "block";
    }
   
}

let btnElem = document.getElementById("logout");

btnElem.onclick = ()=>{
    sessionStorage.setItem("currentuser","")
    location.assign("http://localhost/webio/");
}

const dom = (dt)=>{
    let myroot = document.getElementById("root");
    let mydiv = document.createElement('div');
    mydiv.className = "my-half my-center";
    let myimg = document.createElement('img');
    myimg.src = dt["symbol"];
    myimg.alt = dt["brand"];
    mydiv.appendChild(myimg);
    myroot.appendChild(mydiv)
}

const fillroot = ()=>{
    let xhr = new XMLHttpRequest()
    xhr.onload = function () {
        let data = JSON.parse(this.response);
        for (let dt of data){
            dom(dt)
        }
    }
    xhr.open("GET","https://sheetdb.io/api/v1/fstxdk8iojlj3",true);
    xhr.send();
}

fillroot()