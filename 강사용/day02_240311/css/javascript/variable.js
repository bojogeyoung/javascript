'use strict';
document.write("둘리");
let a = 0;//number
console.log(typeof(a));
console.log(a);
a = 9;
console.log(a);
// 자바//int a/float b/ boolean b
let b = 2.5;//number
b = 3.14;
let c = true;
console.log( a + b);
console.log( typeof(a + b));

let str = "고길동";
console.log("고길동");
console.log(str);//콘솔창에 결과보여주기
//웹페이지에 고길동이 써줘.str변수사용
//("<br>")
document.write("<br>");
document.write(str);//웹페이지에 적는다

// 고길동이 나이는 20 <==웹페이지에 표시됨.

//고길동이는 str에 들어있음.
//나이변수 age 선언하세요

//age 에 20을 할당하세요.
let age=20;
//위의 예제처럼 출력하세요
document.write("<br>");
document.write(str + "이 나이는 "+age);
document.write(str , "이 나이는 " , age);

document.write(100>10);
let resultBool = 100>10;
document.write(resultBool);