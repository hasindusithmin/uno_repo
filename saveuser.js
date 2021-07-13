

export const save = async(data)=>{
    
    // let clear_text = data["password"];
    // let cyper_text = CryptoJS.AES.encrypt(clear_text, 'shhhh').toString();
    // // decry(cyper_text);
    // data["password"] = cyper_text;    
    let dt = JSON.stringify(data);
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        let mydata = this.response;
        console.log(mydata);
    }
    xhr.open("POST","http://localhost/webio/signuser/",true);
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(dt);

}
