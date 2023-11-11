{
 //type Assertion
 
 
 const data = (value :number|string)  => {
if(typeof value === 'string'){
   console.log("im a string");
}
else{
   console.log("im a any type");
}

 }
 const num = data(10)
const str = data("hellow") 

console.log({num},{str});


//
}
