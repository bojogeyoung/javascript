'use district';

//사용자에게 키(단위, m) 값과 체중을 입력받는다. prompt
//bmi = 체중/ (키*키)
//bmi를 출력해주세요.
//18.5-23 정상
// 23-25.00 과체중범위

let temp;//변수 선언
//값할당되어야함.
//alert ( temp);

/*
05. null 테스트
예제09: null 값으로 데이터를 초기화하는 경우

*/

// 숫자 변수 초기화
let data1 = 0;
// 문자 변수 초기화
let data2 = "";
// 불린 변수 초기화
let data3 = false;
// 객체 변수 초기화
let data4 = null;

data4 = new Date();//data4는 실제 데이터가 들어 있는 데이터의 주소를 
                    //가리키는 값이 담겨있음.

let year2 = data4.getFullYear();//실제 데이터 중에는 년도의 값이 들어 있어서 제공해주고 있음
document.write(year2);//년도의 값을 얻어왔음.
let day2 = data4.getDay();
document.write(day2);

const data5 = new Date();
const PI = 3.141592;//안변하는 값, 상수의 경우 const를 붙여서 변경되지 않도록 지정함

//<h1>태그 활용</h1>
//<h1>2024-03-11 15:20</h1>

let dayNtime = new Date();
let year = dayNtime.getFullYear();
let month = dayNtime.getMonth()+1;
//let day = dayNtime.getDay();//요일. 0일요일 1월요일 // switch하고 난 후 하자.
let day = dayNtime.getDate();
let hour = dayNtime.getHours();
let minutes = dayNtime.getMinutes();
document.write("<h1>"+year+"-" + month+"-"+day+"&nbsp;&nbsp;"+ hour+":"+minutes+"</h1>")


let a = 3.141592;
document.write(a.toFixed(2));
document.write(parseInt(a));
document.write(Math.round(a));

Math.round(a)
