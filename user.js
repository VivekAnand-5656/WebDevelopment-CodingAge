// // let cities = ["Deoghar","Patna","Dumka","Chandan","Taljhari"];
// // cities.forEach(city => {
// //     console.log(city);

// // });
// // cities.push("KamlaNagar");
// // console.log(cities);
// // cities.reverse();
// // console.log(cities);
// // cities.pop();
// // console.log(cities);
// // cities.shift();
// // console.log(cities);
// // cities.unshift("VijayNagar");
// // console.log(cities);
// // cities.splice(1,3,"RajpatNagar");
// // console.log(cities);
// // cities.push("Kusumdih","Arman Nager");
// // console.log(cities);
// // console.log(cities.includes("RajpatNagar"));


// // let data = [10,50,40,80];
// // let mapi = data.map(x => x*2);
// // console.log(mapi);
// // let sum =0; 
// // for(let n of mapi){
// //     sum+=n;
// // }
// // console.log(sum);

// // function fun(...nums){
// //     return nums.reduce((acc, val)=> acc+val,0);
// // }
// // console.log(fun(10,50,60));

// // Convert "123.45" to a number using different methods.
// // let str = "123.45";
// // let num = Number(str);
// // console.log(num);

// // {
// //     let num = 10
// //     const n = 50;
// //     console.log(num);
// //     console.log(n);    
// // }
// // console.log(num); // Error
// // console.log(n);  // Error

// // let num = 22;
// // let str = "22";
// // console.log(num == str); // check only value true
// // console.log(num === str); // check data type and value Output:- false


// // function fun(name = "Greet"){
// //     console.log(`Hello ${name}`);
// // }
// // fun("Vivek");

// // let arr = Array.of(10,50,20,60);
// // console.log(arr);

// // let square = (num)=>{
// //     let sqr = num*num;
// //     return sqr;
// // }
// // console.log(`Square:- ${square(5)}`);

// // function greet(name){
// //     console.log(`Hello ${name}`);
// // }
// // function use(callback){
// //     let names = "Vivan";
// //     callback(names);
// // }
// // use(greet);

// // function greet(name) {
// //   return "Hello, " + name;
// // }

// // function processUser(name, callback) {
// //   // callback is a function
// //   console.log(callback(name));
// // }

// // processUser("Vivek", greet);  // 👉 Output: Hello, Vivek




// // function multiplier(x) {
// //   return function(y) {
// //     return x * y;
// //   };
// // }

// // const double = multiplier(2);
// // console.log(double(5));  // 👉 Output: 10



// // function fun(name){
// //     console.log(`Hello ${name}`);
// // }
// // function greet(callback){
// //     let nams = "Vivek Anand";
// //     callback(nams);
// // }
// // greet(fun);

// // function maxNum(...arr){
// //     let max = arr[1];
// //     for(let i=0;i<arr.length;i++){
// //         if(arr[i] > max){
// //             max = arr[i];
// //         }
// //     }
// //     console.log(`Max:- ${max}`);
// // }
// // maxNum(10,50,20,300);

// let palindrome = ()=>{
//     let str = "madam";
//     let cop = "";
//     for(let i=str.length-1;i>=0;i--){
//         cop+=str[i];
//     }
//     if(cop===str){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(palindrome());



// let arr = [10,20,30];
// let arr2 = [40,50,60];
// let newArr = [...arr,...arr2];
// console.log(newArr);    // [ 10, 20, 30, 40, 50, 60 ]

// let arr = [10,20,40,50];
// let newArr = [...arr];
// console.log(newArr);


// let mySet = new Set([1, 2, 3]);
// let arr = Array.from(mySet);
// console.log(arr);        // Output: [1, 2, 3]




// let arr1 = Array.of(3);  
// console.log(arr1);  // [3]

// let arr2 = Array.of(1, 2, 3);
// console.log(arr2);  // [1, 2, 3]


// let arr = [[1, 2], [3, 4]];
// let flatArr = arr.flat();
// console.log(flatArr);    // Output: [1, 2, 3, 4]


// console.log(Array(3).map(x => 1));
// let arr = [10,50,20,20,10,50,30,55,60,10];
// let dupli = Array.from(new Set(arr));
// console.log(dupli);

// function removes(arr){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// } 
// let arr = [0, false, '', null, undefined, NaN, 1, 'hello'];
// console.log(removes(arr));


// let arr = [10,50,60,98,8,10,55,65,98]; 
// let secondMax = (()=>{
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i] <= arr[j]){
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }

// })
// secondMax();

// let arr = [[1, 2], [3, 4], [5, 6]];
// let flatArr = arr.flat();
// console.log(flatArr);    // Output: [1, 2, 3, 4, 5, 6]

// Access
// let obj = {
//     names : "Vivek Anand",
//     age : 21 
// } 
// console.log(obj["names"]);

// // Modify 
// obj["age"] = 22;
// console.log(obj);


// let ob = new Object();
// ob.names = "Vivan Anand";
// ob.age = 21;
// console.log(ob);




// function fun(){
//     for(let i=arr.length-1;i>=0;i--){
//         console.log(arr[i]);
//     }
// }
// fun();

// let maxNum = arr[1];
// let largest = ((ele)=>{
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > maxNum){
//             maxNum = arr[i];
//         }
//     }
//     return maxNum;
// })
// console.log("Largest Element: "+largest());




function calculate() {
    let num1 = document.querySelector("#number").value;
    let num2 = document.querySelector("#number2").value;
    let sym = document.querySelector("#sym").value;
    switch(sym){
        case '+':
            let add = Number(num1) + Number(num2);
            document.getElementById("result").innerText = "Sum: "+add;
            break;
        case '-':
            let sub = Number(num1) - Number(num2);
            document.getElementById("result").innerText = "Sum: "+sub;
            break;
        default:
            alert("Wrong input");
    }
    
    
}


