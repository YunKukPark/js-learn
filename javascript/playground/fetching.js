const APIURL =
  'https://yunkukpark.github.io/js-learn/javascript/fake-server/db.json';

const htmlConsole = document.querySelector('.test');

{
  // 1. 요즘 JS방식
  fetch(APIURL)
    .then((response) => {
      // 가지고 온 데이터를 요리하고 싶으면 콜백함수 만들어서
      if (!response.ok) {
        throw new Error('님 400 아니면 500 에러남.');
      }
      return response.json(); // 데이터를 return 한다.
    })
    .then((결과) => {
      // 위에서 return 받은 데이터를 '결과' 라는 변수에 넣어서
      console.log(결과); // 결과를 출력해보자.  근데 보통 그냥 복사붙혀넣기 하는 코드니까 너무 동작원리 생각 X
    })
    .catch(() => {
      console.log('에러남');
    });
}

{
  // 2. await 문법
  async function 나는데이터를가져와() {
    const { memo: response } = await fetch(APIURL);
    if (!response.ok) {
      throw new Error('님 400 아니면 500 에러남.');
    }
    const result = await response.json();
    console.log(result);
  }
}

// 3. axios 사용
axios
  .get(APIURL)
  .then((result) => {
    const { memo } = result.data;
    console.log(memo[0]);
    htmlConsole.innerHTML = memo[0].title;
  })
  .catch((err) => console.log(`님 여기 에러남 에러 대충 이거임 => ${err}`));
