// # 解構賦值  Destructuring assignment
// # 陣列解構
  const nums = [1,2]

  const first=num[0];
  const second=num[1];
      //在ES6 可改寫成
      const [first,second]=nums;
        //or
      let first;
      let second;
      [first,second]=nums;
    //預設值
      const [first,second,third = 0]=nums;
    //忽略元素  
      const[ ,second,] = nums;
    //變數交換
      let a = 1;
      let b = 2;
      [a,b] = [b,a]
    //剩餘部分
      const nums = [1,2,3,4,];
      const [first,...others] = nums;
      //first = 1
      //others = [2,3,4]
//======================================================================
// # 物件解構
  const point = {
    x: 100,
    y: 150,
  };
  const x = point.x;
  const y = point.y;
     //在ES6 可改寫成
     const {x,y} = point;
     //預設值
     const{x,y,z=0} =point;
     //指派新名稱
     const {x:px,y:py} = point;
//======================================================================
//解構函式參數
  function distance(point){
    const {x,y} = point;
    return Math.sqrt(x * x + y * y);
  }
  // or
  function distance({x,y}){
    return Math.sqrt(x * x + y * y);
  }
  // 預設值
  function distance({x =0,y}){
    return Math.sqrt(x * x + y * y);
  }