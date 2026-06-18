"use strict";   //treat all js code as new js code
//alert("hello")
    // alert(3+3)   not allowed in node environment this is not browser based


let name="Shridhar"
let age=25
let isLoggedin=false
let state=null


//primitive data types
//number =>2 to power 53
//bigint 
//string => "Shridhar" 'Shridhar' `Shridhar`

//boolean => true or false
//null =>    standalone value empty value
//undefined => variable is declared but not assigned any value
//symbol => unique identifier



/*console.log(typeof name)
console.log(typeof age)
console.log(typeof isLoggedin)
console.log(typeof state)
console.log(typeof string)
*/

//Prmitive dtypes => number, string, boolean, null(empty string not 0), undefined, symbol, bigint

//reference dtypes(non primitive) => objects, arrays, functions

//stack memory => primitive dtypes are stored in stack memory -->
//  stack-> get copy of variable      var name and value are stored in stack memory
//heap => reference dtypes are stored in heap memory  -->
// reference dtypes are stored in heap memory and stack memory stores the reference to the heap memory location



/*
const id=Symbol("123")
const id2=Symbol("123")
const id3=Symbol(123)
console.log(id==id2)
console.log(id==id3)


const heros=["shridhar", "sachin", "virat"]
console.log(typeof heros)
console.log(heros instanceof Array)  //true

let myObj={name:"shridhar", age:25, isLoggedin:true}
console.log(typeof myObj)

const myFunc=function(){
    console.log("hello")
}
console.log(typeof myFunc)
console.log(myFunc)  //true
*/
 


//If the value is primitive, the variable stores the actual value.
//If the value is non-primitive, the variable stores a reference (address) to the object in the heap.



