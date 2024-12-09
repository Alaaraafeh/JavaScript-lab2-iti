// let array = [1, 2, 3, 4, 5];
// console.log(array);
// console.log(array[0]);
// console.log(array[3]);
// console.log(array.length);
// for(let i in array)
//     console.log(array[i]);
// array[4] = 44;
// // adding
// array.push("privous last");
// array.unshift("second start");
// array.push("last");
// array.unshift("start");
// array.splice(4,0,"midile", "medil medil");
// for(let i in array)
//     console.log(array[i]);
// // removing
// array.pop();
// array.shift();
// array.splice(4,1);
// for(let i in array)
//     console.log(array[i]);





// task 1 ******************************
let Name;
let phone;
let mobile;
let email;
let nameFormat = /^[A-Za-z]+$/i;
let phoneFormat = /^[0-9]{8}$/;
let mobileFormat = /^(010|011|012)[0-9]{8}$/;
let emailFormat = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/; //find @

do {
    Name = prompt("enter your name: ");
}while (! Name.match(nameFormat) )

do {
    phone = prompt("enter your phone: ");
}while (! phone.match(phoneFormat) )

do {
    mobile = prompt("enter your mobile: ");
}while (! mobile.match(mobileFormat) )

do {
    email = prompt("enter your email: ");
}while (! email.match(emailFormat) )

document.write("<h1>entering user info</h1><br><hr><br>");
document.write("<h3 style='color: blue;  display:inline;'>Welcom dear guest: </h3>"+ Name);
document.write("<br><h3 style='color: blue;  display:inline;'>your telephone number is: </h3>"+ phone);    
document.write("<br><h3 style='color: blue;  display:inline;'>your moblie number is: </h3>"+ mobile);
document.write("<br><h3 style='color: blue;  display:inline;'>your email address is: </h3>"+ email);

let date = new Date();
console.log("welcom "+Name)
console.log("today is "+date.getDay());
console.log("we are in month "+(date.getMonth()+1));




// // task 2 ********************************
// let words = "this is a JavaScript string demo";
// let array = words.split(" ");
// console.log(array);
// array.sort((a, b) => a.length - b.length);
// console.log(array);
// // let lengtharr = new Array(array.length)
// // let cont = 0
// // for(i in array){
// //     for(j in i){
        
// //     }
// // }
// let bigword = array[array.length-1];
// console.log(bigword);





// // task 3 ********************************

// let numbers;
// let numberFormat = /^[0-9]{5}$/;
// do{
//     numbers = prompt("enter your numbers: ");
// }while (! numbers.match(numberFormat))
//     document.write("<h1>sorting</h1><br><hr><br>");
//     let arr = numbers.split(""); 
//     document.write("<h3 style='color: red; display:inline;'>u've entering the values of: </h3>"+ arr);
//     document.write("<br><h3 style='color: red;  display:inline;'>ur value after being sorted dessainding: </h3>"+ arr.sort((a,b)=>b-a));
//     document.write("<br><h3 style='color: red;  display:inline;'>ur value after being sorted assinding: </h3>"+ arr.sort((a,b)=>a-b));




// task 4 ****************************************

// let redius;
// let rediusFormat = /^[0-9]+$/;
// do{
//     redius = prompt("what is the value of your circle radius: ")
// }while (! redius.match(rediusFormat))
//     let area = Math.PI*Math.pow(redius,2);
//     alert("TOtal area of the circle is "+ area)

// let num;
// let numFormat = /^[0-9]+$/;
// do{
//     num = prompt("what is the value you want to calculate its square root:")
// } while(! num.match(numFormat))
//     let sqrt = Math.sqrt(num);
//     alert("squar root of"+ num + "is "+ sqrt)

// let angle;
// let angleFormat = /^[0-9]{0,360}$/
// do{
//     angle = prompt("what is the value of angle you want to calculate its cos:")
// } while(! angle.match(angleFormat))
//     let radians = angle * Math.PI /180;
//     let cos = Math.cos(radians);
//     let roundedCos = cos.toFixed(5);

//     document.write("<h1 style='display:inline;'>cos "+angle+" is "+ roundedCos+"</h1>");

