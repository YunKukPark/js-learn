const inputScoreObject = {
  생활속의회계: 'C',
  논리적글쓰기: 'B',
  독일문화의이해: 'B+',
  기초수학: 'D+',
  영어회화: 'C+',
  인지발달심리학: 'A+',
  ㅋㅋ루삥뽕: 'I',
};

const inputRequiredClasses = [
  '영어회화',
  '기초수학',
  '공학수학',
  '컴퓨터과학개론',
];

// Assignment - 다음 함수 안에 코드를 구현하세요
const getExamResult = (scores, requiredClasses) => {
  const examScoreTable = Object.entries(scores);

  const convertedNumberTable = examScoreTable.map((scoreRow) => {
    return [scoreRow[0], translateGrade_2_Score(scoreRow[1])];
  });

  let scoreObject = table2object(convertedNumberTable);

  requiredClasses.forEach((requiredClass) => {
    if (!scoreObject[requiredClass]) {
      scoreObject[requiredClass] = 0;
    }
  });

  return scoreObject;
};

const translateGrade_2_Score = (grade) => {
  switch (grade) {
    case 'A+':
      return 4.5;
    case 'A':
      return 4;
    case 'B+':
      return 3.5;
    case 'B':
      return 3;
    case 'C+':
      return 2.5;
    case 'C':
      return 2;
    case 'D+':
      return 1.5;
    case 'D':
      return 1;
    case 'F':
      return 0;
    default:
      return console.error(`성적에 ${grade}라는 성적은 없습니다`);
  }
};

const table2object = (table) => {
  return table
    .map((row) => {
      const [key, value] = row;
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
};

console.log(getExamResult(inputScoreObject, inputRequiredClasses));
