'use district'; 
// 실수를 줄이기 위해 문법을 엄격하게?

//push, pop 배열 


let season=['봄','여름','가을','겨울'];

document.write(season[3]); //겨울출력


const snackBar = ['김밥','떡볶이','김말이','라면'];

document.write(snackBar[2]);
document.write(snackBar[0]);

let fruits=[]; //빈배열

fruits.push('사과');
fruits.push('딸기');
fruits.push('배');
fruits.push('수박');
fruits.push('귤');
fruits.push('오렌지');
fruits.push('자몽');
fruits.push('포도');



document.write("<br>"+fruits);

fruits[0]; //사과
fruits[7]; //포도

let result = fruits.pop();
document.write("<br>"+result);
let result2 = fruits.pop();
document.write("<br>"+result2);
//pop2번 더하면 fruits에 과일이 몇개 

document.write("<br>"+fruits);

const myNumbers = new Array(10);
myNumbers.push(10);
myNumbers[1] = 20;
myNumbers[2] = 20;
myNumbers[3] = 20;
myNumbers[4] = 20;
myNumbers[5] = 20;
myNumbers[6] = 20;
myNumbers[7] = 20;
myNumbers[8] = 20; 
myNumbers[9] = 20;

// % 나머지기호
//10%2=0   몫:5 나머지 :0
//5%2=1    몫:2 나머지:1
//3%2=1    몫:1 나머지:1
//9%2=1    몫:4 나머지:1
//나머지가 0이면 짝수, 나머지가 1이면 홀수


//++,-- (증감연산자)
let i = 0
i++; //i=i+1
document.write(i); //i=1
i++; // 2=1+1 
document.write(i); //i=2
i--; 
i--;
document.write(i); // i=0

//y=y+x => y+=x
//y=y%X => Y%=x
//+
//*
//-

document.write("<br>")
document.write(3=="3");
document.write("<br>")
document.write(3==="3");
document.write("<br>")
document.write(3===3);
document.write("<br>")
document.write("3"==="3");
document.write(3 != "3"); //false
document.write(3 !== "3"); true

typeof("3"); //문자열 3
typeof(3); //숫자형, number, 3

typeof("3"+3); //문자열 3 //33
typeof(3+3); //숫자형, number, 3//6

//(3==3) =>true
//(3==2) =>false
//(4==4) =>true
//(4 == "4") =>true
//(4 === "4") =>false
//(4=== 4) => true
//(5===3) => false
//(4 != 4) => false
//(4 ==="4") =>false
//(4 !=="4") =>true

let a = 5;

//|| or연산 : 둘중에 하나가 true면 됨
document.write("<br>")
document.write(a>5) || (a<10) //산술, 비교, 논리  //true
            // false     true
document.write("<br>")
document.write(a>5) && (a<10)  //산술, 비교, 논리  //true
            //true      true

let bl=false; 
let bo = !bl; //bo=true
document.write(bl);
document.write(bo);
document.write("<br>")
 

//연습문제 : 적정체중 
// prompt 입력 하고 결과값은 alert 또는 document.write()로 받는다?

var standardK  = prompt("당신의 신장은? 예)180")
var Aweight = (standardK-100)*0.9  ;
alert(Aweight); 
document.write("당신의 적정 체중은" + Aweight + "kg입니다.")
 














































































