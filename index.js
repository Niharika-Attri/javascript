
   // const circle = {
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     }
// };

// // factory function
// function createCircle(radius){
//     return {
//         radius:radius, 
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

// // constructor function
// function Circle(radius){
//     this.radius = radius;
//     this.draw= function(){
//         console.log('draw')
//     }
// };

// const circle = new Circle(1);


//getter and setter
// const person = {
//     firstName: 'abc',
//     lastName: 'xyz',
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value){
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// person.fullName = 'john smith';

// console.log(person)


//this keyword***********
// const video = {
//     title: 'a',
//     tags: [ 'a', 'b', 'c'],
//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log(this, tag);
//         }, this);
//     }
// }

// video.showTags();


// arrow functions
// const square = function(number){
//     return number*number;
// }

// let num = prompt('enter number to be squared');
// const square = number => number*number;
// console.log(square(num));



//arrow function and this
// const person = {
//     talk(){
//         setTimeout(() => {
//             console.log('this', this);
//         }, 1000);
        
//     }
// };
// person.talk();


//mapping
// const colours = ['red', 'green', 'blue'];
// const items = colours.map(colour => `<li> ${colour} </li>`);


//object desturcturing
// const address = {
//     street: '', 
//     city:'',
//     country:''
// };
// const{ street:st, city:c, country:co} = address;
// console.log(st);


// //spread operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// console.log(combined);

let stocks = {
   Fruits: ["strawberry", "grapes", "banana", "apple"],
   liquid: ["water", "ice"],
   holder: ["cone", "cup", "stick"],
   toppings: ["chocolate", "peanuts"]
}


// promise: an object that will produce a single value some time in the future
// "a producing code that does something that takes time"
// "a consuming code that wants the result of the producing code"
// promise -> object that links producing code and consuming code together
// let promise = new Promise(function(resolve, reject){
//    //executer
// })
// function passed to new Promise = "executor"
// new promise created -> executer runs automoatically
// it contains producing code which produces result
// resolve, reject -> callbacks provided by javascr

// let promised = new Promise(function(resolve, reject){
//    setTimeout(()=> resolve("done"), 1000);
//    reject("error")
// });


//////////error
let book = new Promise((resolve, reject)=>{
   setTimeout(() => reject("done"),1000);
});
book.then(
   function(result){console.log(result)}),

   function(error){console.log("error")}
   
// let is_shop_open = true;

// let order = (time, work) =>{

//    return new Promise((resolve, reject) => {
//        if(is_shop_open){

//            setTimeout(()=>{
//                resolve(work());
//            }, time);
           
//        }
//        else{
//            reject(console.log("shop closed"));
//        }

//    });
// };

// order(2000, ()=> console.log(`${stocks.Fruits[0]} was selected`))

// .then(()=>{
//    // return
//    return order(0000, ()=>console.log("production has stared"))
// })

// .then(() => {
//    return order(2000, ()=>console.log("the fruit was cut"))
// })

// .then(() => {
//    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
// })

// .then(()=>{
//    return order(1000, ()=>console.log("start the machine"))
// })

// .then(()=>{
//    return order(2000, ()=>{
//       console.log(`${stocks.holder[0]} was selected`)
//    })

// .then(()=>{
//    return order(3000, ()=>{
//       console.log(`${stocks.toppings[0]} was selected`)
//    })
                        
// .then(()=> {
//    return order(1000, ()=> console.log("ice cream was served"))
// })
//    })

// //catch will only work when promise is rejected
// .catch(()=>{
//    console.log("customer left"); 
// })


// })
