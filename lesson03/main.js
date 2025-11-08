//call back
function sayHello() {
    // console.log('xin chao');

}

function greeting(callback) {
    callback()
}
// greeting(sayHello)
// greeting(()=>{
//     console.log(`đay cũng là xin chao nekkkkk`);

// })

function delay(ms, callback) {
    return setTimeout(() => {
        callback('đang chờ...')
    }, ms)
}

function doingCallBack() {
    console.log(1);
    delay(2000, (data) => {
        console.log(data);
        console.log(3);
        delay(2000, (data) => {
            console.log(data);
            console.log(4);
            delay(2000, (data) => {
                console.log(data);
                console.log(5);
            });
        });

    });

}
// doingCallBack();
//call back hell
//promise
const myPromise = new Promise((resolve, reject)=>{
  const isCheck = true;
  if(isCheck){
    // resolve('Thành công')
  }else{
    // reject('Thất bại')
  }
})


//myPromise
// .then((res)=>{
//     console.log(res);
//     //đồng bộ
//     return`${res}...` // các tác bất đồng bộ tiếp theo
    
// })
// .then(data=>{
//     console.log(data);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })
// .finally(()=>{
//     console.log('kết thúc');
    
// })

const getData = () => {
  fetch(`http://localhost:3000/events`)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
      // hiển thị ra danh sách
      // rendertable()
    })
    .catch(err => {
      console.log(err);
    })
}

getData();

async function getDataAsync(){
    try{
        const res = await fetch(`http://localhost:3000/events`);
        const data=await res.json();
        console.log(data);
        
    }catch(error){
        console.log(error);
        
    }
}
getDataAsync();