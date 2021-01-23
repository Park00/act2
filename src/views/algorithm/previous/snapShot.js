// 배열 복사하는 문제
class Snapshot {
  constructor(array) {
    this.array = array;
    this.copyArray = [...array];제
  }
  restore() {
    return [this.copyArray];
  }
}
let array = [1, 2];
let snap = new Snapshot(array);
array[0] = 3;
array = snap.restore();
console.log(array.join()); //It should log "1,2"

array.push(4);
array = snap.restore();
console.log(array.join()); //It should log "1,2"