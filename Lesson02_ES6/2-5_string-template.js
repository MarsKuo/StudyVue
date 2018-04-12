// # 字串模板 String template

function greet(name){
  console.log('Hello ' , name + '!');
}
greet('Jack');
//Hello Jack

    //在es6可以改成
    //backtick
    //--插入表達式
      function greet(name){
        // console.log('Hello ' , name + '!');
        console.log(`hello, ${name}!`)
      }
      greet('Jack');
      //表達式 Expression(.....) 類似 (a+2)
      //陳述式 Statement       類似const a=2

      function greet (name , days){
        console.log(`Hello, ${name}! It's been ${days * 24} hours`)
        console.log(`Hello, ${name} ${(days<7) ? '' : 'Long time no see'}`)
      }
      greet('Jack' , 3);
//===================================================================    
    //多行字串
      const words = `ddddddddddd
      ddddddddddddddd
      dddddddddddddddddd
      ddddddddddddddddd
      bbbbbbbbbbbbbbb
      sssssssssssssss`