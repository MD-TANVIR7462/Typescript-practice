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
