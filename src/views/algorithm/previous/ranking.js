/**
 * 랭킹 리스트 구하기
   1. 입력받은 K 수 만큼 리스트를 보여줌
   2. 정렬은 높은 점수 순
   3. 어떤 유저가 더 높은 랭킹 점수를 달성하면 이전 기록은 사라지고 새로운 기록 반영
   4. 어떤 유저가 이전 기록 보다 낮거나 같은 점수를 달성하면 이 기록은 무시 됨
   5. 랭킹 리스트가 총 몇 번 바뀌는지 리턴
 * @since 2021.01.23
 * @param K
 * @param user_scores
 * @returns {number}
 */
function solution(K, user_scores){
  let answer = 0;
  let scoreArr = [];
  let tampArr = [];
  let o = new Object();

  user_scores.map((v,i)=>{
    o.name = v.split(" ")[0];
    o.score = v.split(" ")[1];
    tampArr.push(o);
    o = new Object();
  })

  return answer;
}
function filterSameName(query, scoreArr) {
  return scoreArr.filter(elem=> {
    return elem.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
function filterHigherScore(query, scoreArr) {
  return scoreArr.filter(elem=> {
    return elem.score > query;
  })
}

solution(3, ["alex111 100", "cheries2 200", "coco 150", "luna 100", "alex111 120", "coco 300", "cheries2 110"]) //4
//["alex111 100", "cheries2 200", "alex111 200", "cheries2 150", "coco 50", "coco 200"] //3
//["cheries2 200", "alex111 100", "coco 150", "puyo 120"] //3