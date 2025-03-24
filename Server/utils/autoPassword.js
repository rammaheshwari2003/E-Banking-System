let string="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890{}[]";
let strLen=string.length;

let autoPassword=()=>{
    let pass="";
    for(let i=0;i<8;i++){
        let random=Math.floor(Math.random()*strLen);
        pass+=string.charAt(random);
    }
    return pass;
}

module.exports={autoPassword};