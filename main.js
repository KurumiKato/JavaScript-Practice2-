'use strict';

// 1
{
  function double(num){
    return num * 2;
  }
  console.log(double(10));
  console.log(double(100));
}

// 2,3,4,5,6
{
  function calc(num1 = Number(), num2 = Number()) {
    // 2
    console.log(num1 + num2);

    // 3
    console.log(num1 - num2);

    // 4
    console.log(num1 * num2);
    
    // 5
    console.log(num1 / num2);
    
    // 6
    console.log(num1 % num2);
  }
  calc(100,50);
}

// 7,8,9,10,11,12
{
  function calc(num1 = Number(),num2 = Number(),num3 = Number()){
    // 7
    if(num1 === num2){
      console.log("true");
    }else{
      console.log("false");
    }

    // 8
    if(num1 !== num2){
      console.log("false");
    }else{
      console.log("true");
    }

    // 9
    if(num1 < num3){
      console.log("num1はnum3より小さい");
    }else{
      console.log("num1はnum3より小さくない");
    }

    // 10
    if(num1 <= num2){
      console.log("num1はnum2以下");
    }else{
      console.log("num1はnum2以下ではない");
    }

    // 11
    if(num3 > num1){
      console.log("num3はnum1より大きい");
    }else{
      console.log("num3はnum1より大きくない");
    }

    // 12
    if(num2 >= num3){
      console.log("num2はnum3以上");
    }else{
      console.log("num2はnum3以上ではない");
    }
  }
  calc(5,5,3.89);
}

// 13
{
  for(let i = 0;i < 100;i++){
    if(i < 50){
      console.log(i);
    }
  }
}

// 14
{
  function aisatu(){
    console.log("Hello");
  }
  aisatu();
}

// 15
{
  const coupon = (price = Number(140)) => price * 0.9;
  const resultPrice = coupon();
  console.log(resultPrice + "円です");
}

// 16
{
  function createWorld(count = Number(5),word1 = String("ABC"),word2 = String("DEF")){
    let resultWord = "";
    for(let i = 1;i <= count;i++){
      if(i % 2 == 0){
        resultWord += word2;
      }else{
        resultWord += word1;
      }
    }
    return resultWord;
  }
  console.log(createWorld());
}
