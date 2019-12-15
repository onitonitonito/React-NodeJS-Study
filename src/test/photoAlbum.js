/*
*
*
*
*
*
**/

let name
let age
let tall
let src
let caption
let html_strings
let iNumber

let i = 0

const infos = [
    {
      name : 'nobody',
      age  : -1,
      tall : -1,
      src  : 'nobody.png',
      caption : 'nobody is selected! click next!'
    },{
      name : 'Freddie',
      age  : 35,
      tall : 180,
      src  : 'Freddie.png',
      caption : 'Freddie Murcury sing on the stage!'
    }, {
      name : 'AoA in the Cartoons - part.01',
      age  : 25,
      tall : 165,
      src  : 'aoaCartoon1.png',
      caption : 'AoA Cartoon-1'
    }, {
      name : 'AoA in the Cartoons - part.02',
      age  : 25,
      tall : 165,
      src  : 'aoaCartoon2.png',
      caption : 'AoA Cartoon-1'
    },
  ];


function buttonIcrease() {
  iNumber = document.getElementById("iNumber").value
  console.log('iNumber=', iNumber);
  return iNumber++
}

function showPage() {
  console.log(i, infos.length)

  name = infos[i]['name']
  age =  infos[i]['age']
  tall = infos[i]['tall']
  src =  infos[i]['src']
  caption = infos[i]['caption']

  html_strings = [
    `<div>My name is ${name}</div>`,
    `<div>Age = ${age}</div>`,
    `<div>Tall = ${tall}</div>`,
    `<img src=../_static/image/${src} width=300 alt='info'/>`,
    `<div>[Fig. ${caption}]</div>`,
    '<br /><br />',
    `<div id='iNumber'>i = ${i}</div>`,
  ];

  html_str = html_strings.join('');

  document.getElementById("ROOT").innerHTML= html_str;

}

showPage();
