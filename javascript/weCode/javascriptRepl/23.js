function getData(salesArr, reviewArr, likeArr) {
  const sumAmount = sumCount(salesArr);
  const sumReview = sumCount(reviewArr);
  const sumLike = sumCount(likeArr);
  return { sumAmount, sumReview, sumLike };
}

const sumCount = (array) => {
  const VALUE_INDEX_IN_ARRAY = 1;

  const sum = array
    .map((row) => row[VALUE_INDEX_IN_ARRAY])
    .reduce((total, curr) => total + curr, 0);

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

console.log(getData(sale, review, like));
