let body = document.querySelector("body");

let mode = document.querySelector('#mode');
let currMode = "white";

mode.addEventListener("click", () => {
    if (currMode === "dark") {
        currMode = "white";
        body.classList.add('white');
        body.classList.remove('dark');
    } else {
        currMode = "dark";
        body.classList.add('dark');
        body.classList.remove('white');
    }
    console.log(currMode);
});

const container = document.querySelector('#container');
container.addEventListener('mouseover', () => {
    container.classList.add("red");
    alert("yahan aana mana hai");
});


class store {
    buy() {
        console.log("item is bought")
    }
    return() {
        console.log("item is returned");
    }
}


//callback hell
// const subtract= (a, b)=>{
//     console.log(a - b);
// }

// const sum = (a, b, subtract) => {
//     setTimeout(() => {
//         console.log(a + b);
//         if (subtract) {
//             subtract();
//         }
//     }, 2000);
// };

// const subtract = (a, b) => {
//     setTimeout(()=>{
//          console.log(a-b);
//     },2000)
   
// }
// sum(10, 65,()=>{
// subtract(10,65);
// });

const data= (dataId, getNextData)=>{
setTimeout(()=>{
    console.log("data", dataId);
    if(getNextData){
        getNextData();
    }
},2000);
}

data(69,()=>{
    data(96)
});

const calculator=(a,b,subtract)=>{
    setTimeout(()=>{
        console.log(a+b);
        if(subtract){ 
            subtract();
        }
    },2000);
}

const subtract=(a,b,multiply)=>{
setTimeout(()=>{
    console.log(a-b);
    if(multiply){
        multiply();
    }
},2000);
}

const multiply=(a,b,divide)=>{
    setTimeout(()=>{
        console.log(a*b);
        if(divide){ 
            divide();
        }
    },2000);
}

const divide=(a,b)=>{
    setTimeout(()=>{
        console.log(a/b);
    },2000);
}

calculator(10,20,()=>{
    subtract(10,20,()=>{
        multiply(10,20,()=>{
            divide(10,20);
        });
    })
});

    const virat=document.querySelector('#virat');
        container.after(virat);

const info= ()=>{
    return new Promise((resolve,reject)=>{
        console.log("loading info...");
    setTimeout(()=>{
        virat.addEventListener('click',()=>{
            alert("Virat Kohli is an Indian international cricketer and the former all-format captain of the Indian national cricket team. He is a right-handed batter and occasional right-arm medium pace bowler.")
            console.log("button clicked");
        });
    //    alert("Virat Kohli is an Indian international cricketer and the former all-format captain of the Indian national cricket team. He is a right-handed batter and occasional right-arm medium pace bowler.");
       console.log("Virat Kohli is an Indian international cricketer and the former all-format captain of the Indian national cricket team. He is a right-handed batter and occasional right-arm medium pace bowler.")
        resolve("info loaded")
    },5000)
})
}

const v1= info()
v1.then((res)=>{
    console.log(res);
})