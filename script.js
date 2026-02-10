// let body = document.querySelector("body");

// let mode = document.querySelector('#mode');
// let currMode = "white";

// mode.addEventListener("click", () => {
//     if (currMode === "dark") {
//         currMode = "white";
//         body.classList.add('white');
//         body.classList.remove('dark');
//     } else {
//         currMode = "dark";
//         body.classList.add('dark');
//         body.classList.remove('white');
//     }
//     console.log(currMode);
// });

// const container = document.querySelector('#container');
// container.addEventListener('mouseover', () => {
//     container.classList.add("red");
//     alert("yahan aana mana hai");
// });


// class store {
//     buy() {
//         console.log("item is bought")
//     }
//     return() {
//         console.log("item is returned");
//     }
// }


// //callback hell
// // const subtract= (a, b)=>{
// //     console.log(a - b);
// // }

// // const sum = (a, b, subtract) => {
// //     setTimeout(() => {
// //         console.log(a + b);
// //         if (subtract) {
// //             subtract();
// //         }
// //     }, 2000);
// // };

// // const subtract = (a, b) => {
// //     setTimeout(()=>{
// //          console.log(a-b);
// //     },2000)
   
// // }
// // sum(10, 65,()=>{
// // subtract(10,65);
// // });

// const data= (dataId, getNextData)=>{
// setTimeout(()=>{
//     console.log("data", dataId);
//     if(getNextData){
//         getNextData();
//     }
// },2000);
// }

// data(69,()=>{
//     data(96)
// });

// const calculator=(a,b,subtract)=>{
//     setTimeout(()=>{
//         console.log(a+b);
//         if(subtract){ 
//             subtract();
//         }
//     },2000);
// }

// const subtract=(a,b,multiply)=>{
// setTimeout(()=>{
//     console.log(a-b);
//     if(multiply){
//         multiply();
//     }
// },2000);
// }

// const multiply=(a,b,divide)=>{
//     setTimeout(()=>{
//         console.log(a*b);
//         if(divide){ 
//             divide();
//         }
//     },2000);
// }

// const divide=(a,b)=>{
//     setTimeout(()=>{
//         console.log(a/b);
//     },2000);
// }

// calculator(10,20,()=>{
//     subtract(10,20,()=>{
//         multiply(10,20,()=>{
//             divide(10,20);
//         });
//     })
// });

//     const virat=document.querySelector('#virat');
//         container.after(virat);

// const info= ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("loading info...");
//     setTimeout(()=>{
//         virat.addEventListener('click',()=>{
//             alert("Virat Kohli is an Indian international cricketer and the former all-format captain of the Indian national cricket team. He is a right-handed batter and occasional right-arm medium pace bowler.")
//             console.log("button clicked");
//         });
//     //    alert("Virat Kohli is an Indian international cricketer and the former all-format captain of the Indian national cricket team. He is a right-handed batter and occasional right-arm medium pace bowler.");
//        console.log("Virat Kohli is an Indian international cricketer and the former all-format captain of the Indian national cricket team. He is a right-handed batter and occasional right-arm medium pace bowler.")
//         resolve("info loaded")
//     },5000)
// })
// }

// const v1= info()
// v1.then((res)=>{
//     console.log(res);
// });

// const getData = (dataId)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("fetching data...");
//             console.log("data", dataId)
//         },2000)
//     })
// }

// async function fetchData(){
//     console.log("fetching data1....");
//     await getData(200);
//     console.log("fetching data2....")
//     await getData(300);
//     console.log("fetching data3....")
//     await getData(400);
//     console.log("fetching data4....")
//     await getData(500);
//     console.log("fetching data5....")
//     await getData("zuhayr bhai");
//     console.log("fetching data6....")
//     await getData("cricket");
// }
// fetchData();

// //api calling

const getfact ="https://dog.ceo/api/breeds/image/random";

const fetchFact = async ()=>{
    
    const res= await fetch(getfact);
    console.log(res);
    const cricdata = await res.json();
    console.log(cricdata);  
   
    fact.innerText= cricdata.text;
}

const fact = document.querySelector('#fact');
fact.addEventListener('click', fetchFact);

const cart = document.getElementById('submit');
cart.addEventListener('click', ()=>{
   const div=document.createElement('div');
  div.innerText = "Added to Cart ✅";
  div.style.cssText = `
    position:fixed;
    top:20px;
    right:20px;
    background:#000;
    color:#fff;
    padding:10px;
    border-radius:6px;
  `;
  document.body.appendChild(div);
});