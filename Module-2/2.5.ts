{//

const FunWirhGeneric = <T>(data:T):T[] =>{
   return [data]

}


const str = FunWirhGeneric("hellow im a string")
const num = FunWirhGeneric(12)
const obj = FunWirhGeneric({name : "Tanvir",Roll:486131})
console.log(str, num, obj);
   //end

}