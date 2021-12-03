const numsInput = [100, 9, 30, 7];
const datesInput = ['2019-03-21', '2019-04-21', '2019-05-21'];

const moreThan100 = (nums) => {
  const isMoreThan100 = nums.map((num) => (num >= 100 ? true : false));
  return isMoreThan100;
};

const formatDate = (dates) => compose(insertFormat, getDateTable)(dates);

const insertFormat = (dateTable) =>
  dateTable.map((row) => `${row[0]}년 ${row[1]}월 ${row[2]}일`);

const getDateTable = (dates) => dates.map((date) => date.split('-'));

const compose = (...funcArr) =>
  funcArr.reduce(
    (prevFunc, nextFunc) =>
      (...args) =>
        nextFunc(prevFunc(...args)),
    function (k) {
      return k;
    }
  );

console.table(moreThan100(numsInput));
console.table(formatDate(datesInput));
