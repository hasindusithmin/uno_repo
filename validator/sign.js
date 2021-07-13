

// npm validator https://www.npmjs.com/package/validator




const valid_name = dt=>validator.isAlpha(dt)
const valid_nic = dt=>validator.isInt(dt)
const valid_mail = (dt)=>validator.isEmail(dt);
const valid_pword = dt=>validator.isStrongPassword(dt,{minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})


export const validate = (data)=>{
   const {firstname,lastname,nic,city,email,password} = data;
   return {
       firstname:valid_name(firstname),
       lastname:valid_name(lastname),
       nic:valid_nic(nic),
       city:valid_name(city),
       email:valid_mail(email),
       password:valid_pword(password)
   }
}