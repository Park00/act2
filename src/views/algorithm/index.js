import React from "react";

function makesArray(){
  let numbers = [];
  let numbers2 = new Array();
  //배열을 만들 때 Array 생성자를 호출하는것 보다는 [] 기호를 이용하는 것이 효율적임
}
// 특정 구분자로 배열 만들기 split()

//얕은 복사 shallow copy, 깊은 복사 deep copy
function shallowCopy(){
  let nums = [];
  for(let i = 0; i < 10; i++){
    nums[i] = i+1;
  }
  let samenums = nums;
  nums[0] = 400;
  console.log("shallowCopy " + samenums[0]); //400 출력
}

function deepCopy(arr1, arr2){
  for(let i = 0; i < arr1.length; i++){
    arr2[i] = arr1[i]
  }
  //let arr2 = [...arr1]; ES2015부터 배열 스프레드로 딥 복사 가
}

function accessor(){
  //접근자 함수
  //값 검색하기 indexOf(), lastIndexOf()
  //배열을 문자열로 표현하기 join(), toString()
  //기존 배열을 이용해서 새 배열 만들기 concat(), splice(), slice()도 가능
}

function mutator(){
  //변형자 함수
  //배열 끝에 요소 추가 push()
  //배열 앞에 요소 추가 unshift()
  //배열 앞에 요소 삭제 shift()
  //배열 중간에 요소를 추가하거나 삭제 splice(시작 인덱스, 삭제할 요소의 개수(추가하려면 0), 배열에 추가할 요소들)
  //배열 요소 역순 정렬 reverse()
  //배열 요소 순서대로 정렬 sort()
  //pop() ?
}
function numberSort(){
  //sort() 함수는 문자열만 정렬 됨다
  let numbers = [4, 2, 5, 1, 3];
  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log(numbers);
}

function 배열을_만들지_않는_반복자_함수(){
  //반복자 함수 forEach()
  //배열의 모든 요소가 참이면 true every()
  //배열의 모든 요소가 하나라도 만족하면 some()
  //배열의 누적자 함수를 적용하는 reduce() 왼쪽에서 오른, reduceRight()쪽 오른쪽에서 왼쪽
}

function 새_배열을_반환하는_반복자_함수(){
  //map() 함수는 forEach() 함수와 비슷하지만 결과값을 새 배열로 반환한다
  //filter() 함수는 every()와 비슷하지만 결과값을 새 배열로 반환한다
}

//더글라스 크락포드의 이차원 배열 만들기
Array.matrix = function(numrows, numcols, initial){
  let arr = [];
  for(let i = 0; i < numrows; i++){
    let columns = [];
    for(let j = 0; j < numcols; j++){
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}
export default function algorithm(){
  return (
    <div>

    </div>
  )
}