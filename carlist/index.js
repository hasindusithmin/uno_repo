// {
//     "car_id": "1",
//     "brand": "acura",
//     "model": "hatchback",
//     "conditions": "unregistered",
//     "price": "18526",
//     "descriptions": "First, convert string character to ASCII value using ord() function then convert ASCII value or decimal number to a binary value using decbin() function.\r\n\r\n",
//     "images": "�PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000�\u0000\u0000\u0000�\u0004\u0003\u0000\u0000\u0000�/l�\u0000\u0000\u0000\u001bPLTEw\u0017�����f��F�z&�~6��V��v�����\u001d��\u0000\u0000\u0000\tpHYs\u0000\u0000\u000e�\u0000\u0000\u000e�\u0001�+\u000e\u001b\u0000\u0000\u0001\u0000IDATh���1o�0\u0018��1&�\t�s�!3�:�Н�\u001d\u0018��P�D��QR����\fi;������\u0006\u001c\u0003DDDDDDDDDD��I�\u0016���d��|\u0015��-������Y��&��)�\"��OZ���:\u0003��NӀ}`��!y�/-�\u0011��\u0013���4�x\u000el���AU��r��E[?�\u001c͂V״�/ �����ʣ��\u001c�8����-�>\u0016�\u0017\u0010���֟���.:/\u0007s���\t8�\u0016s�O\u0003v���P����35�-?��!�\u0015����{�F�|�O\u000b�=\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011�?�Y�%Q���\u0000\u0000\u0000\u0000IEND�B`�\u0000",
//     "image_type": "image/png"
// }
const dom = (data)=>{
    let mydiv = document.createElement('div');
    mydiv.className = "my-half";
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
    document.body.appendChild(mydiv);
}



const fetchdata = async()=>{
    await axios.get("http://localhost/webio/cars/")
        .then(res=>res.data)
            .then(data=>{
                for(let d of data) {
                    dom(d);
                }
            })
                .catch(err=>console.log(err))
}
fetchdata()