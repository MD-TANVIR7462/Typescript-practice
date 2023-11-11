
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



const age: number = 22
if(age>18){
   console.log("adult");

} 
else{
   console.log("not adult");
}


console.log( age === 18  ? "adult" : "not adult")
