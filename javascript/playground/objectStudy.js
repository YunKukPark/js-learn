let person = {
  name: 'Bokchil Kim',
  DOB: 1884,
  age: () => 2021 - person.DOB,
};

// 추가
person.sayhello = () => console.log('하이');

// 수정
person.name = 'Bok Deok BBang';

// 삭제
delete person.age;

console.log(person);

async function getCoins() {
  const response = await fetch('https://api.coinpaprika.com/v1/tickers');
  if (!response.ok) throw new Error(response.error);

  const result = await response.json();
  return result;
}

getCoins().then(([...coins]) => {
  const coinIds = coins.map((coin) => coin.id);
});

const arr = [1, 56, 3, 2, 3];
console.log(arr);
arr.__proto__.name = 'yunkuk';
