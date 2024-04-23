//Declaramos
const funcionConCallBack = (a,b,cb) =>{
    const suma = a + b;
    cb(suma);
}


//Invocamos
funcionConCallBack(1,2,(_suma)=>{
    console.log(_suma)
})