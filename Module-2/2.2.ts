{
  //interface
  interface Student {
    name: string;
    age: number;
  }

  const student1: Student = {
    name: "Tanvir",
    age: 23,
  };



interface GoodStudent extends Student{
   GPA :"5";
   regularity :boolean

}


const Evan :  GoodStudent ={
   name:"Tanvir Evan",
   age: 23,
   GPA:"5",
   regularity:true

}
  //end global
}
