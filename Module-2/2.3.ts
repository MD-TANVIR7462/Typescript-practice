{
   //Generic data type


type genericDataType<T> = Array<T>
type genericDataTypeTuple <x,y> =[x,y]


const num : genericDataType<number> =[2,23,3,3,3,3]
const str : genericDataType<string> =["T","E","F","G"]
const Bool : genericDataType<boolean> =[true,false,false,true,false]



//generic tuple
const Dream : genericDataTypeTuple<string,string> = ["A lamborginni",'1000000000 Dollars'] 
const earning  : genericDataTypeTuple<number,number> =[2900,90000]




   //


}