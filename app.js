// function fun()
// {
//     console.log('hey  🖐');
// }
// function stop()
// {
//     setTimeout(()=>{
//         console.log('right timing ⏲' )
//     },4000)
// }
// function hello()
// {
//     console.log('hello 🔥' )
// }
// fun();
// stop();
// hello();

// setImmediate(()=>{
//     console.log("Immediate")
// },5000);

// setTimeout(()=>{
//     console.log("Timeout")
// },1000);


 class solution{
    constructor(arr)
    {
        this.arr=arr;
    }
    
     sum(arr) {
        let m=new Array(arr.length).fill(0);
       
        for(let i=0;i<arr.length;i++)
        {
            for(let j=0;j<=i;j++)
            {
                m[i]+=arr[j]
            }
        }    
        return m;
    }
};

// function sum(arr) {
//     let m=[0,0,0,0];

//     for(let i=0;i<arr.length;i++)
//     {
//         for(let j=0;j<=i;j++)
//         {
//             m[i]=m[i]+arr[j]
//         }
//     }    
//     return m;
// }
const arr=[1, 3, 5, 7, 9];
let m=new solution(arr);
console.log(m)
console.log(m.sum(arr));