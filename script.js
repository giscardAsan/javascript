// let login = document.getElementById("login");

// login.addEventListener("click",(event) =>{

//     event.preventDefault();

//     console.log("You click on blue button");

//     let email = document.getElementById("email");
//     console.log(email.value);

//     let password = document.getElementById("Password");
//     console.log(password.value);

//     if(email.value == "name@example.com" && password.value == "22222"){
      
//         window.location.assign('home.html');

//     }else{
//         console.log("Invalid credential")
//     }
// })


var Database = [
    {
        name : "Giscard",
        password : "ak47"
    },

    {
        name : "Asante",
        password : "125"
    }
]

Database.forEach(studio =>{
     console.log(studio.image);

     let element = document.createElement("div");
     element.innerHTML = '<img src = ""'

})



function login(username, password) {
    var i = 0;
    while (i < Database.length) {
        if (username==Database[i].name && password==Database[i].password) {

            return true
            
        } 
       i++;     
    }
    
}

 

let LoginButton = document.getElementById("login");
LoginButton.onclick = (event) => {
    event.preventDefault();

    let username=document.getElementById("username");
    console.log(username.value);
    
    let password=document.getElementById("password");
    console.log(password.value);
    if (login(username.value, password.value)) {
        let element = document.createElement('div');
        


        window.location.href = "hello"
        console.log("Hi " + username.value, "your login is successfully");
        
    } else {
        console.log("wrong credential")
    }
}










// pin1 = 0;
// pin2 = 0;

// if(pin1==1 && pin2==1){
//     console.log("hi");

// }else{
//     console.log("welcome to my page")
// }



// let age;

// age =17;

// if(age >=18){

//     console.log("you can vote")
  
// }else{
//     console.log("you can't vote")
// }



// let null1 = 20000000;
// let null2 = 900000000000000;
// let null3 = 30000000000000;
// let null4 = 8822630000000;

// if (null1 > null2 && null1 > null3 && null1 > null4) {
//     console.log("the first number is the greatest");

// }else if(null2 > null3 && null2 > null4 && null2 > null1) {
//     console.log("the second number is the greatest");

// }else if(null3 > null4 && null3 > null1 && null3 > null2) {
//     console.log("the third number is greatest");
    
// }else{
//     console.log("the fourth number is the greatest");

// }

// let Option = ''

// switch(Option){
//     case 'a' : console.log("number one");
//     break;
//     case 'b' : console.log("number two");
//     break;
//     case 'c' : console.log("number three");
//     break;
//     case 'd' : console.log("number four");
//     break;
//     default : console.log("wrong login")
//     break;
// }


// let children = 100;
// let woman = 300;
// let nam =   400;

// let age =19
// let gender = "female"

// if (age < 18) {
//     console.log("you are a child,  you have received 100 cedes in your account");

// } else if(age >=18 && gender == "male") {
//     console.log("you are a man, you have received 400 cedis in your account");

// } else if(age >=18 && gender == "female") {
//     console.log("you are a woman, you have received 300 cedis in your account");

// }

// let president = true;
// let vice = true;
// let speaker = false;

// if ((president == true && vice == true && speaker == true) || (president == true && vice == true) || (president == true && speaker == true)) {
//     console.log("It successful open")

// } else {
//      console.log("at lest one personal with the president");
// }

// let children = 100;
// let man = 400;
// let woman = 300;

// let age = 16;
// let gender = "man";

// if (age < 18) {

//     console.log("you are child, you have received 100 cedis in your account");
// } else if(age >= 18 && gender == "man") {

//     console.log("you are man, you have received 400 cedis in your account");
// }else if(age >= 18 && gender == "woman") {

//     console.log("you are woman, you have received 300 cedis in yor account");
// }


                    //    (looping data)
                    // *for loop
                    // *while loop
                    // *do while loop

//  * for(initial, condition, update)
      
    // let myArray = ['ghana', 'togo','mali', 'senegal', 'nigeria', 'comoros', 'morocco', 'egypt', 'Beni', 'south Africa']
    // for(let i = 0; i < myArray.length; ++ i){

    //     console.log(myArray[i]);
    //     console.log('i == ' + i + ' + 1')
    // }


// *while loop
// let myArray = ['ghana', 'togo','mali', 'senegal', 'nigeria', 'comoros', 'morocco', 'egypt', 'Beni', 'south Africa']

//    let i = 0;
// while(i < myArray.length){
//     console.log(myArray[i]);
//     console.log('i == ' + i + ' + 1')
//     i = i + 1;
// }

 // *do while loop

// do{
//     var userinput = prompt("input your choice");

//     console.log("menu");
//     console.log("1.start the game");
//     console.log("2.pause the game");
//     console.log("3.resume the game");
//     console.log("x.quit the game");

//     switch (userinput) {

//         case "1": console.log("you have starting the game");
            
//             break;

//             case "2": console.log("you have pausing the game");
            
//             break;

//             case "3": console.log("you have resuming the game");
            
//             break;

//             case "x": console.log(" you have quitting the game");
            
//             break;
//         default: console.log("are tou okay")
//             break;
//     }


// }while(userinput != "x")


// while (1) {
//     var userinput = prompt("input your choice");
  
    
//     console.log("menu while");
//     console.log("1.start the game");
//     console.log("2.pause the game");
//     console.log("3.resume the game");
//     console.log("x.quit the game");

//    switch (erinput) {

//     case '1': console.log("game start");
        
//         break;

//         case '2': console.log("game pause");
        
//         break;

//         case '3': console.log("game resume");
        
//         break;

//         case 'x': console.log("game quitted");
        
//         break;
   

//     default: console.log("are you okay");
//         break;
//    }

//     if(userinput == "x");
//     break;
// }

                                        //  Types Of Function

// *Anonymous Function
// *Arrow Function
// *Function with a name

// Anonymous Function
// let resultA = function () {}
// var resultA = function (e) {
//     console.log("add me and you");
//     e.target.innerHTML ='<h1>loading...</h1>';
// setTimeout(() =>{
//     e.target.innerHTML ='<h1>completed</h1>';
// }, 300);

// }

// document.getElementById("login").onclick = resultA
// var login = document.getElementById("login");
// login.addEventListener("click", resultA);
 




  

// Arrow Function
// let resultB = (params) => {}






// Function with a name
// letresultC = function name(params){}



// console.log("your welcome")


// var Database = [

//     {
//         StudentNo:1,
//         name: "Asante",
//         password: "asante23@@" 
//     },
//     {
//         StudentNo:2,
//         name: "Jones",
//         password: "7722 " 
//     }
// ]


// function login(username,password) {
// var i = 0
//     while (i < Database.length ) {
     
//      if (username==Database[i].name && password==Database[i].password) {

//         return true
    
         
//      }   
//      i++;
//     }
// }


// let LoginButton = document.getElementById("login");

//     LoginButton.onclick = (event) => {
//  event.preventDefault();

//  let username=document.getElementById("username");
//  console.log(username.value);

//  let password=document.getElementById("password");
//  console.log(password.value);

// if (login(username.value, password.value)) {

//     console.log("Hi "  + username.value, "your login is successfully");
// } else{
//     console.log("wrong credential login");
// }

//     }
