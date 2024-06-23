// in this we've learned about a es6 js
// topics: essentials of es6 js that matters
// let and const  : variables and constantants
// arrrow fucntions : fucntions
// template literals: `` 
// default parameters : jaab ap fnc ko koi bhi value na do toh woh default value leske
// rest and spread : jo ki alag alag work krte hai
// destructing : arrays and object se data bahar nikalna in the variables
// classes : to make objects from a particular blueprint
// promises : to take care of async part of js
// asyn and await :to take care of the async js more elgantly 
// try and catch : to take care of the code when it gets work or a bug

// 1: let and const :
// let and const aap dono se variables bana skte ho but dono work krte hai differently 
// let change hoskta hai or const na change na update krskte ho aap ek bar banane ke baad let ko first time initialise krte time value dena aniwarya nhi haim pr const ko initiali krte time value dena zarrori hai

// let and const dono es6 ke part hai 
// dono braces scoped hote hai 
// dono khusko windpw me add nhi krte hai ,


// let a = 12;
// console.log(a)

// {
//     let b = 22;
//     console.log(b)
// }


// const c =   100;
// {
//     const d =1222;
//     console.log(d);
// }


// console.log(c);



//2: arrow functions : fat arrow functiom bhi kehte hai 
// es5 me 3 types ke fnc  hote hai 

// function expresssion
// functiom statement
// anonymous function


// fat arrow function: 3 type ka hote hai 
// basic fat arrow fnc
// fat arrow fnc with parmater
// fat arrow fnc with implicit return



// var fnc  = ()=>{
//     console.log("me hoo basic fat arrow fucntion")
// }
// fnc();




// var fnc2 = greet=>{
//     console.log(greet)
// }
// fnc2("helooo")





// var fnc3 = (a,b)=> console.log(a+b);
// fnc3(1,2);



// // 3:template literals : jab aap js or basic string ko ek sath likhoge toh aap ko plus use krna padhta hai toh usme bht complexity ati hai toh us ke liye ham templats literals ka use krte hau


// console.log(`helllo my name is syed samad ali and my age is ${20} and my year of studying is ${3}`)


// // 4: default parmaters: default parameters ham pass krdete hai jis kisi variables ka agrumeny na ho toh woh default paramters use krlega 

// function defaultprm(firsy, second){
//   console.log(firsy,second)

// }

// defaultprm(12,23)



// function defualtvalue(a,b ,c =30){
    
//     console.log(a,b,c);
// }


// defualtvalue(10,20)




// 5: rest and spread in javascript: 
// spread opertor hota hai ... phir jisko copy krna ho us variable ka naame.


/// spread ke mtlb hota hai saare elements ko kisi naye array yah variable mein spread krdo samete do use kehte hai spread in js yeh hota hai through the use of the spread opertor


//spread use hota hai copy yah kisi bhi location pr kuch rkhne ka
// var a = [1,2,3,4,5,6,7,8,9,10]
// var b = [...a]
// console.log(b)


// rest bhi spread ki tarah hi hota hai, bas rest use hota hai bache hui values ko ek variable me dalne ke liye...




// function restprc(a,b,c,d, ...e){
//     console.log(a,b,c,d,e)
// }

// restprc(1,2,3,4,5,6,7,8,9,10);



// 6: desructring : destruction use hota hai array or objects me data bhahar nikalne ke liye in the variables.


var e = [1, 2, 3, "helllodoston"];
var [b, c, d, e] = e;
console.log(b,c,d,e)



var obj = {
    name: "samad",
    age: 20,
}

var {age} = obj;
console.log(age)



var f = [1,2,3];
var g = [a,,c] = f;
console.log(c)


// promises : promises use hota hai async code ko chalan ke liye jaise callbacks use hota hai settimeout and setinterval ke liye ese hi promises bhi use hote hai


