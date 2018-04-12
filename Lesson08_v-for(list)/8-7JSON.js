
// ====================JSON物件====================
// {
//   "name": "郭信鼎",
//   "id":"mars",
//   "bankBalance":999999,
//   "password":"1234567",
//   "handsome": null
// }



//json轉換

const data = {
  name:'point',
  x:2,
  y:4
};

//轉換特定欄位，並區隔出來
const dataJSON = JSON.stringify(data,['x','y'],'        ');
const dataJSON = JSON.stringify(data,null,2);
console.log(data);
console.log(dataJSON);
const data2 = JSON.parse(dataJSON);
console.log(data2)