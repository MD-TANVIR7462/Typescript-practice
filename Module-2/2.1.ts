
//Type

type Students = {
   name: string;
   height: string;
   roll: number;
   id: number;
   adress: {
     village: string;
     city?: string;
   };
 } 

const student: Students = {
  name: "Tanvir",
  height: "5 foot 6 inches",
  roll: 1,
  id: 1221,
  adress: {
    village: "Chadpur",
    city: "Chadpur",
  },
};

//Union and intersection

type  Developer = {
   
   name : string;
   Position :"frontEnd"| "backEnd" ; //union type ( | )
   }

const tanvir : Developer = {
   name:"Tanvir",
   Position:"frontEnd"

}

type Fullstack = Developer &{skills: string[]}
const Evan : Fullstack = {
   name:"Cons",
   Position:"frontEnd",
   skills:["html,css,js,react"]


} 



const age: number = 22 //tarnery and if else
if(age>18){
   console.log("adult");

} 
else{
   console.log("not adult");
}


console.log( age === 18  ? "adult" : "not adult")


const isAuthinticated = null //nulish qualishing oparator (??) 
const result = isAuthinticated ?? "Guest"



const  unKnown = (value : unknown)=>{ //unknown type
   let strORnumber ;
   const  result = typeof value === "string"?  strORnumber="its a string" : strORnumber= "its not a string"  
   console.log(strORnumber);
}
unKnown(10);


const ErrorThrow = (value :string) : never => { //never type whitch function never returns anything we can use a never type here 

throw new Error(value);
}
console.log( ErrorThrow("Hi Im An Error") )

