// es6 屬性縮寫
function aaa(x,y){
  return{
    x:x,
    y:y,
  };
}
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function aaa(x, y) {
  return {
    x,
    y
  };
}
//  es6 計算屬性
function createObj(key,value){
  const obj = {
    [key] : value,
  };
  return obj;
}
const person = createObj('name','John');
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function createObj(key,value){
  const obj = {};
  obj[key] = value;
  return obj;
}
const person = createObj('name','John');

//ES6   函示縮寫
const options = {
  name:'Option',
  level: 10,
  created(){
  },
  mounted(){
  }
}
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const options = {
  name:'Option',
  level: 10,
  created: function(){

  },
  mounted: function(){

  }
}