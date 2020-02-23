"use strict";
/*
* show photoes from photo information dictionary
*  - if click button or image, change to next picture
*  - numVal from div id = iNumber, check!
**/

let srcPath = '../../src/static/image/';
const infos = [
    {
      name    : 'nobody',
      age     : -1,
      tall    : -1,
      src     : srcPath + 'nobody.png',
      caption : 'nobody is selected! click next!'
    }, {
      name    : 'Freddie Murcury',
      age     : 35,
      tall    : 180,
      src     : srcPath + 'Freddie.png',
      caption : 'Freddie Murcury sing on the stage!'
    }, {
      name    : 'AoA in the Cartoons - part.01',
      age     : 25,
      tall    : 165,
      src     : srcPath + 'aoaCartoon1.png',
      caption : 'DNN creat cartoon from AoA M/V-part.01'
    }, {
      name    : 'AoA in the Cartoons - part.02',
      age     : 25,
      tall    : 165,
      src     : srcPath + 'aoaCartoon2.png',
      caption : 'to refer wesite about Cartoon DNN example'
    },
  ];

// for CHECK Number of infos
console.log('infos.len = ', infos.length, '\n\n')

function buttonIcrease() {
  // get elNumber from 'i=0' string splitted!
  let elNumber = document.getElementById("iNumber").innerText
  elNumber = elNumber.split('=')[1]
  elNumber = parseInt(elNumber);

  // If out of Range == go back to the first!
  if (elNumber >= infos.length - 1) {
    console.log('\n');
    elNumber = 0;
  } else {
    elNumber += 1
  }

  // for CHECK!
  console.log('elNumber =', elNumber)

  // return innerText restored!
  document.getElementById("iNumber").innerText = 'i=' + elNumber;

  // to update changed value!
  showPage(elNumber);
}

function showPage(i) {

  let name = infos[i]['name']
  let age =  infos[i]['age']
  let tall = infos[i]['tall']
  let src =  infos[i]['src']
  let caption = infos[i]['caption']

  let imgPath = srcPath + 'logoJS.png'

  let html_strings = [
    `<h1><img width=80 src=${imgPath} />`,
    ` Hello~! JavaScript!</h1>`,
    `<div>My name is '<b>${name}</b>'</div>`,
    `<div>Age = ${age}</div>`,
    `<div>Tall = ${tall}</div><br />`,
    `<img src=${src} width=300 alt='info' onclick='buttonIcrease()'/>`,
    `<div>[Fig.${i} ${caption}]</div>`,
    '<br /><br />',
  ];
  let html_str = html_strings.join('');

  document.getElementById("ROOT").innerHTML= html_str;
}


showPage(0);
