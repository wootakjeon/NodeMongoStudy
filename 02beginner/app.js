const http = require('http');
const { hostname } = require('os');

const hostnmae = '127.0.0.1' // 로컬호스트
const port =3000;

//127.0.0.1:3000 으로 되겠지
//const 상수 여서 못바꿔요
//req : request -> 1 
//res : response -> title ,body 
const server = http.createServer((req ,res) => {
    // header ,bodtyy
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain')

    //////
    var name = 'WootakJeon';
    res.end(`${name}`);
});

server.listen(port ,hostnmae , () => {
    //console.log에 5 출력해보깅 {} 이거이용해서
    var num = 5 ; 
    //const 는 상수 , var 는 변수 

    console.log(`Server running at http://${hostname} `)
    // system.printf(..)
} );

//cd 는 change directory 폴더 와리가리

//대충 쓰면 tabe으로 자동완성 가능


///ctrl + c 꺼짐
