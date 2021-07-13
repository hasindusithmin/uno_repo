
import { validate } from "./validator/sign.js";
import { save } from "./saveuser.js";


let sign_form = document.querySelector('#sign');
let counter = 0;
sign_form.onsubmit = (event)=>{
    event.preventDefault();
   
    if (counter > 0) {
        const NL = document.querySelectorAll(`#sign span`);
        for (let N of  NL) {
            N.textContent = "";
        }
    }
    counter++;
    let sign_data = new FormData(sign_form);
    let data_object = {}
    for (let[key,value] of sign_data) {
        data_object[`${key}`] = value;
    }
    const existemail = (email)=>{
    let myxhr = new XMLHttpRequest();
    myxhr.onload = function(){
        let emails = JSON.parse(this.response);
        if (emails.includes(email)) {
            document.querySelector('span[id=email]').innerHTML = "this email already registered";
        }
        else {
        let status =  validate(data_object);
        for (let[key,value] of Object.entries(status)) {
            if (value == false) {
                let error =  document.querySelector(`#sign span[id=${key}]`)
                error.innerHTML = `${key} is not valid`;
            }
            if (value == false && key == 'password') {
                document.querySelector('#sign span[id=password]').innerHTML = "req:minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 1"
            }
        }
        let req = Object.values(status);
        let requirement = req.map(val=>String(val))
        if (!requirement.includes("false")) {
            save(data_object);
           
        }  
        }
    }
    myxhr.open("GET","http://localhost/webio/email/",true);
    myxhr.send();
    }
    existemail(data_object["email"])
}

let log_form = document.querySelector('#log');
let count = 0;
log_form.onsubmit = (event)=>{
    event.preventDefault();
    if (count > 0) {
        const NL = document.querySelectorAll(`#log span`);
        for (let N of  NL) {
            N.textContent = "";
        }
    }
    count++;
    let log_data = new FormData(log_form);
    let data_object = {}
    for (let[key,value] of log_data) {
        data_object[`${key}`] = value;
    }
    const existemail = (email)=>{
        let myxhr = new XMLHttpRequest();
        myxhr.onload = function(){
            let emails = JSON.parse(this.response);
            if (emails.includes(email)) {
            //    console.log("registerd");
            const myfn = async()=>{
                await axios.post("http://localhost/webio/login/",data_object)
                    .then(res=>res.data)
                        .then(data=>{
                            let cyper = data;
                            
                           
                            // console.log(cyper);
                            // let bytes = CryptoJS.AES.decrypt(cyper, 'shhhh');
                            // let clear_text = bytes.toString(CryptoJS.enc.Utf8);
                            let clear = data_object["logpword"];
                            let cy = cyper.split("");
                            // console.log(cy);
                            let newcy = [];
                            for (let c of cy) {
                                if (c == "\r" || c == "\n" || c == " ") {
                                    // console.log(c);
                                }
                                else {
                                    newcy.push(c);
                                }
                            }
                            // console.log("newcy:",newcy);
                            sessionStorage.setItem("currentuser",email);
                            let pword = ""
                            for (let ncy of newcy) {
                                pword += ncy;
                            }
                            
                            if (pword == clear) {
                                location.assign('http://localhost/webio/homepage')
                            }
                            else {
                                document.querySelector('span[id=logpword]').innerHTML = "password wrong";
                            }
                        })
            }
            myfn()
            }
            else {
                document.querySelector('span[id=logmail]').innerHTML = "this email not registerd";
            }
        }
        myxhr.open("GET","http://localhost/webio/email/",true);
        myxhr.send();
    }
    existemail(data_object["logmail"]);
    
}



