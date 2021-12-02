// Assignment - 다음 함수 안에 코드를 구현하세요
function findSmallestElement(arr) {
  // your code here
  if (arr.length === 0) return 0;

  let smallestValue = arr[0]; // 최소값을 넣을변수 = 초기값

  for (let i = 1; i < arr.length; i++) {
    if (smallestValue >= arr[i]) {
      smallestValue = arr[i];
    }
  }

  return smallestValue;

  // return Math.min(...arr);

  // arr => [1,0,3,...];
  // ...arr => 1, 0, 3, ... (전개연산자)
}

console.log(findSmallestElement([34, 10, 3, 4, 5]));

// 아래의 코드는 절대로 수정하거나 삭제하지 마세요.
