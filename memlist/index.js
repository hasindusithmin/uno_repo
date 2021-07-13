





const dom = (dt)=>{

   let root = document.getElementById("root");
   let mytr = document.createElement('tr');
   let NL = []
   let mydata = Object.values(dt); 
   for (let mydt of mydata) {
       let mytd = document.createElement('td');
       mytd.innerHTML = mydt;
       NL.push(mytd);
   }
   for (let N of NL) {
       mytr.appendChild(N);  
    }
    root.appendChild(mytr);
}





const xhr = new XMLHttpRequest();

xhr.onload = function () {
    let data = JSON.parse(this.response);
    for (let dt of data) {
      
        dom(dt)
    }
    
}

xhr.open("GET","http://localhost/webio/users/",true);


xhr.send();