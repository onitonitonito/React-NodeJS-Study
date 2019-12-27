"use strict";
/*
*
*
*
*
*
*
**/


// 폼값 증가&감소

let textVal
let text

function form_btn(n) {
  // 폼 선택
  text = document.getElementById("text");

  // 폼 값을 숫자열로 변환
  textVal = parseInt(text.value);

  // 계산
  textVal += n;

  // 계산된 값을 바꾼다
  text.value = textVal;

  // 만약 값이 0 이하면 1로 되돌려준다,
  // 1보다 작은 수는 나타나지 않게하기 위해
  if (textVal <= 0) text.value = 1;

}
