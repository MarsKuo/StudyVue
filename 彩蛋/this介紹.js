//一般函式的this

// 1.直接執行 => this 等於global
// 2.如果做為物件的成員函示執行=> 該物件
// 3.如果Dom事件偵聽函式 => 該Dom
// 4.作為建構函式 => 建構出來的實例

//5 ES6箭頭函式的this
//6 Vue組件的this
//7 bind/apply-call的this

<button id="btn"></button>

//1.直接執行   =>global
console.log(this)

//2.再函式裡面的this => 要看函式怎麼執行，答案是不知道
function a() {
  console.log(this)
}
//2-1.a() => window
//2-2  作為物件的成員，this就會是這個物件
const obj = {
  name = 'object',
  a:function(){
    console.log(this);
  },
}
//obj.a()   => object

//2-3 直接執行，所以b(等於window)
const b = obj.a;
b();


//3.作為Dom的事件偵聽函式，this是button
function a() {
  console.log(this);
}
btn.addEventListenet('click', a);

//4.宣告建構函示，this就是new出來的物件
function A() {
  console.log(this);
}
const x = new A();

//test 1
function a() {
  console.log(this);
}
const obj = {}
obj.a = a;
obj.a();
//test 2   b的this是window
const obj = {
  a() {
    function b() {
      console.log(this);
    }
    b();
  }
}
obj.a();


// test 3 點button 是button
function a() {
  console.log(this);
}
const obj = { a };
btn.addEventListenet('click', obj.a);



// test4 點button，會出現button
function a() {
  console.log(this);
}
const obj = {
  b() {
    return function () {
      //a()  //window
      //console.log(this);    //btn
    }
  }
}
btn.addEventListenet('click', obj.b());

//test5
function a() {
  console.log(this);
}
const obj = {
  b() {
    return function () {
      //a()  //window
      //console.log(this);    //btn
    }
  }
}
btn.addEventListenet('click', obj.b());

//test6
function MyClass() {
  setTimeout(function)
}
const x = new MyClass();
x.addEventListener('loaded', function () {
  console.log(this);
})

// 箭頭函式裡面的this，一定等於this外面的this
const a = () => {
  console.log(this);
}
btn.addEventListener('click', a);

// 箭頭函式裡面的this，一定等於this外面的this  ==>this
const obj = {
  a: () => {
    console.log(this);
  }
}
obj.a();


// 箭頭函式裡面的this，一定等於this外面的this  ==>btn
//b裡面的this，是外面的this，因為function a要看外面的怎麼執行，這個版本是btn呼叫他，所以答案是btn
function a() {
  //console.log(this);
  const b = () => {
    console.log(this)
  }
  b();
}
btn.addEventListener('click', a);

//Vue裡面的this ，Vue實例裡面的this都是指向Vue實例
<div id="app">
  <button @click="test">btn </button>
</div >

  new Vue({
    el: '#app',
    data: { count: 0 },
    methods: {
      test() {
        console.log(this);
      },
    },
  });