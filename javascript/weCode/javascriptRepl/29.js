const numsInput = [100, 9, 30, 7];
const datesInput = ['2019-03-21', '2019-04-21', '2019-05-21'];

const moreThan100 = (nums) => {
  const isMoreThan100 = nums.map((num) => (num >= 100 ? true : false));
  return isMoreThan100;
};

const formatDate = (dates) => {
  return numberDate2formatDate(removedDash(dates));
};

const removedDash = (arr) => {
  return arr.map((item) => item.replace(/-/gi, ''));
};

const numberDate2formatDate = (dates) => {
  const indexOfYear = /(.{4})/;
  const indexOfMonth = /(.{8})/;
  const indexOfDay = /(.{12})/;

  const formatedDate = dates.map((date) => {
    return date
      .replace(indexOfYear, '$1년 ')
      .replace(indexOfMonth, '$1월 ')
      .replace(indexOfDay, '$1일');
  });
  return formatedDate;
};

console.log(moreThan100(numsInput));
console.log(formatDate(datesInput));
