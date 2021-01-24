import React from "react";

/**
 * 1. 코멘트 달기
 * 2. 내용 없으면 패스, 있으면 추가 하고 리셋
 */
function add(){
  let val = document.getElementsByClassName("textValue")[0].value;
  if(val.length === 0) return;
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(val));
  ul.appendChild(li);
  document.getElementsByClassName("textValue")[0].value = "";
}
const CommentList = (props) => {
  return (
    <div>
    <form>
      <input type="text" className="textValue"/>
      <input type="button" value="Post" onClick={add}/>
    </form>
    <ul></ul>
  </div>
  );
}

export default function Comment(){
  return (
    <CommentList />
  )
}