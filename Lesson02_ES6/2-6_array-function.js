// # 箭頭函式
var double = function(x){
  return x * 2 ;
}
//在ES6可轉換成
const double = (x) =>{
  return x * 2 ;
}
    // # 語法簡短
    // - 參數只有一個時可省略小括號，一個以上或是沒有參數都不能省略
        const double = x =>{
          return x * 2 ;
        }
    // - 內容只有一行並回傳時可接為一行
        const double = x => x * 2;
        //範例
          // 1.
            arr.map(function(elm,idx){
              return elm + idx ; 
            })
            // ArrayFuntion可改成下面
            arr.map((elm,idx) => {
              return elm + idx ; 
            })
            //or
            arr.map((elm,idx) => elm + idx);
          // 2. 
            btn.addEventListener('click',() => console.log(10));
// #自動綁定
// - 箭頭函式內部的 this 與外部相同
          const a = () => {
            console.log(this);    // 此時this等於window，因為是箭頭函示，所以this等於，當a宣告時，他外面的那個this
          }
          var b = function(){
            console.log(this);    //此時this等於b,因為非箭頭函示，所以this等於，當b宣告時，this等於b
          }
// #this (非箭頭函式心法，誰呼叫，This就是誰)
// - 直接執行： window(glblal)，
          var sayMyName = function(){
           console.log(this.name)            //此時this為windows，因為windows綁定sayMyName
          }
          sayMyName();
// - 作為物件的成員函式執行：該物件
          var teacher = {name: 'white'};
          teacher.sayMyName = sayMyName      ///此時this為teacher
// - 作為 dom 的監聽函式執行：該dom
          //<button id="btn" name = "God Damn Right">Response</button>
          btn.addEventListener('click',sayMyName);              //此時的this為Button
// - 當箭頭函式時，this代表外層函式的綁定物件
          //所以三種方式，所有的this都是windows