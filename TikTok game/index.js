
// //Logical Operators
// let a = 6;
// let b = 5;

// // let cond1 = a > b;
// // let cond2 = a === 5;
// // console.log("cond1 && cond2 =", cond1 && cond2);
// // console.log("cond1 || cond2 =", a < b || a === 6);
// console.log("!(6<5) = ", !(a === 6));

//Conditional Statements 

// let age = 18;

// if (age >= 18) {
//     console.log("you cad vote");
// }
// if (age < 18){
//     console.log("you Cannot vote");
// }


// let mode ="light";
// let color;

// if(mode === "dark") {
//     color = "black";
// }else{
//     color = "white";
// }
// console.log(color);

// let age = 16;

// if (age >= 18) {
//     console.log("vote");
// } else {
//     console.log("not vote");
// }

// Odd or even 

// let num = 26;

// if (num % 2 === 0){
//     console.log(num, "is even");
// }else{
//     console.log(num, "is odd");
// }

//Conditional Statements

// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }else if (mode === "blue"){
//     color = "blue";
// }else if (mode === "pink"){
//     color = "pink";
// }else {
//     color = "white";
// }

// console.log(color);

// if (mode === "dark") console.log(mode);

// Ternary Operators 

// let age = 16;

// let result = age >= 18 ? "adult" : "not adult";

// console.log(result);

// let name = prompt("hello!");
// console.log(name);

// let num = prompt("enter a number:");

// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5");

// }else {
//     console.log(num, "is Not a multiple");
// }

// let score = prompt("Enter your score (0-100):");
// let grade;

// if(score >= 90 && score <= 100){
//   grade = "A";
// }else if(score >= 70 && score <= 89){
//     grade = "B";
// }else if(score >= 60 && score <= 69){
//     grade ="C";
// }else if(score >= 50 && score <= 59){
//     grade = "D";
// }else if (score >= 0 && score <= 49){
//     grade = "F";
// }

// console.log("according to your scores, your grede was :",grade);
// Print 1 to 5

// for (let count = 1; count <= 5; count++){
//     console.log("Apna college");
// }

////Calculate sum of 1 to 5

// let sum = 0;
// let n = 100
// for (let i =1; i <= n; i++){
//     sum = sum + i;
// }

// console.log("sum = ", sum);

// for (let i = 1; i <= 5; i++){
//     console.log("i =", i);
// }
// console.log(i);
// let J = 1;
// while (J <= 15){
//     console.log("Apnar College"); J++;
// }

// let J = 20;

// do {
//     console.log("Apna College");
//     J++;
// }while (J <= 10);

////For-of loop

// let str = "JavaScript";


// let size = 0;
// for (let i of str){
//     console.log("i = ", i);
//     size++;
// }

// console.log("string size = ", size);

////for in loop


////practice Qs1
// for(let num=0; num<=100; num++){
//     console.log("num =", num);
// }

// for (let num = 0; num <=100; num++){
//     if(num % 2 !== 0){
//         console.log("num =", num);
//     }
// }
////Practice Qs2 

// let gameNum = 25;
// let userNum = prompt("Guess the game number :");

// while (userNum != gameNum){
//     userNum = prompt("you entered wrong number. Guess again : ");
// }

// console.log("congratulations, you entered the right number");

////Strings
// let str = "ApnaCollege";

// console.log(str[8]);

// ////Template Literals
// let specialString = `this is a template literal`;
// console.log(typeof specialString);

// let obj = {
//     item: "pen",
//     price:10,
// };

// console.log("the cost of", obj.item,"is", obj.price);

// let str = "ApnaCollege";
// let newStr = str.toLowerCase();
// console.log(str);
// console.log(newStr);

// let str = "01234567";
// console.log(str.slice(1, 8));
// let  str1 = "apna";
// let str2 ="College";

// let res = "I am Learning codeing from" + str1 + str2;
// console.log(res);
// let str = "IloveSradha";
// console.log(str.charAt(6));

// let fullName = prompt("enter your fullname without spaces");

// let username = "@" + fullName 
// + fullName.length;
// console.log(username);

// let marks = [76,56,54,67,87,65,43,354,];
// console.log(marks);

// let heroes = ["inronman","thore", "hulk","shaktiman", "spiderman", "antman"];

// for (let idx = 0; idx < heroes.length; idx++){
//     console.log(heroes[idx]);
// }

// let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];

// for (let city of cities){
//     console.log(city.toUpperCase());
// }

// let marks = [85,97,44,37,76,60,];

// let sum =0;

// for (let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

// let item = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of item){
    
//     let offer = val / 10;
//     item[i] = item[i] - offer;
//     console.log(`value after offer = ${item[i]}`);
//     i++;
// }

// // for (let i=0; i<item.length; i++){

// // }

// let foodItems = ["potato", "apple", "litch","tomato" ];
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("deleted", deletedItem);

// const arrowMul = (a, b) => {
//     console.log(a * b);
// }

// let arr = ["Rangpur", "Dhaka", "Syelet"];

// arr.forEach((val) => {
//     console.log(val);
// })
// let nums = [67, 42, 76];

// let newArr = nums.map((val) => {

//     return val * val;
// });

// console.log(newArr);
// nums.forEach((num) =>{
//     console.log(num*num);
// });

// let arr = [5,6,7,4,3,2,8,];

// const output = arr.reduce((prev, curr) => {
//     return prev < curr ? prev : curr;
// })

// console.log(output);

// let marks = [97, 64, 32, 49, 99, 96, 86,];

// let topers = marks.filter((val) => {
//     return val > 90;
// });

// console.log(topers);

// let n = prompt("enter a number : ");

// let arr = [];

// for (let i=1; i<=n; i++) {
//     arr[i-1] =i;
// }

// console.log(arr);


// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });

// console.log("sum =", sum);

// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
// });

// console.log("factorial = ", factorial);

// let firstEl = document.querySelector("p");
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p");
// console.dir(allEl);

// let div = document.querySelector("div");
// console.dir(div);
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from Apna College student";

// let divs = document.querySelectorAll(".box");

// let idx =1;
// for (div of divs) {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

// let btn1 = document.querySelector("#btn");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("your are inside div");
// }

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if (turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for ( let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
