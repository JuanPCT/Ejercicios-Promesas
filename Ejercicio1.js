
function sum(num1, num2) {
    return new Promise((resolve, reject) => {
        resolve(Number.parseInt(num1) + Number.parseInt(num2));
    });
}

sum(2, 3).then((sum)=>{
    console.log(sum);
}).catch()