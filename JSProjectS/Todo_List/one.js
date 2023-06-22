
// const getTodos=(resource)=>{
// return new Promise((resolve,reject)=>{
// const request=new XMLHttpRequest();
// request.addEventListener('readystatechange',()=>{
// if(request.readyState===4&&request.status===200)
// {
//     const data=JSON.parse(request.responseText)
//     resolve(data);
// }
// else if(request.readyState===4)
// {
//    reject('error getting resource');
// }
// });
// request.open('GET',resource);
// request.send();
// });
// };
// getTodos('todos.json').then(data=>{
//     console.log('promise resolved:',data);
//     return getTodos('todos2.json');
// }).then(data=>{
//     console.log('promise2 resolved:',data);
//     return getTodos('todos3.json');
// }).then(data=>{
//     console.log('promise3 resolved:',data);
//    }).catch(err => {
// console.log('promise rejected:',err)
// });
  


fetch('todos.json').then(response=> response.json()
).then(data=>{
    console.log(data);
}).catch((err)=>{
console.log('rejected',err);
})

