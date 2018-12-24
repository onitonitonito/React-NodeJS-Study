/* Node.js는 JavaScript 기반 서버사이드 언어
* https://namu.wiki/w/Node.js
*
* Node.js는 오픈 소스 JavaScript 엔진인 구글 V8에 비동기 이벤트 처리
* 라이브러리 libuv를 결합한 플랫폼.
* 다시 말해, JavaScript로 서버를 구축할 수 있다!
*
**/
// server.js
// http://localhost:1337

const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.end("Print HelloWorld of JS!");
}).listen(1337);

console.log('Server running at http://127.0.0.1:1337/');
