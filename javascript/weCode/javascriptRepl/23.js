function getData(salesArr, reviewArr, likeArr) {
  const sumAmount = sumCount(salesArr);
  const sumReview = sumCount(reviewArr);
  const sumLike = sumCount(likeArr);
  return { sumAmount, sumReview, sumLike };
}

const sumCount = (array) => {
  const sum = array
    .map((row) => {
      return row[1]; // 숫자 정보만 빼기
    })
    .reduce((total, curr) => total + curr, 0); // 숫자 정보 합산

  return sum;
};

const sale = [
  ['20190401', 34],
  ['20190403', 29],
  ['20190402', 23],
];
const review = [
  ['20190328', 3],
  ['20190401', 0],
  ['20190403', 1],
];
const like = [
  ['20190328', 98],
  ['20190401', 102],
  ['20190403', 125],
];

getData(sale, review, like);
sumAmount(sale);
