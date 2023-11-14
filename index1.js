// let stocks = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"]
// }

// let is_shop_open = true;

// let order = (time, work) =>{

//     return new Promise((resolve, reject) => {
//         if(is_shop_open){

//             setTimeout(()=>{
//                 resolve(work());
//             }, time);
            
//         }
//         else{
//             reject(console.log("shop closed"));
//         }

//     });
// };

// order(2000, ()=> console.log(`${stocks.Fruits[0]}`))
// console.log("hello");