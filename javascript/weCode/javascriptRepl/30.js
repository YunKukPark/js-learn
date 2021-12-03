const inputScoreObject = {
  생활속의회계: 'C',
  논리적글쓰기: 'B',
  독일문화의이해: 'B+',
  기초수학: 'D+',
  영어회화: 'C+',
  인지발달심리학: 'A+',
};

const inputRequiredClasses = [
  '영어회화',
  '기초수학',
  '공학수학',
  '컴퓨터과학개론',
];

// Assignment - 다음 함수 안에 코드를 구현하세요
const getExamResult = (scores, requiredClasses) => {
  const scoreTable = changeGradeScore(scores);

  requiredClasses.map((requiredClass) => {
    const hasClass = scoreTable[requiredClass];
    if (!hasClass) scoreTable[requiredClass] = 0;
  });

  return scoreTable;
};

const changeGradeScore = (scores) => {
  const scoreTable = {
    'A+': 4.5,
    A: 4,
    'B+': 3.5,
    B: 3,
    'C+': 2.5,
    C: 2,
    'D+': 1.5,
    D: 1,
    F: 0,
  };

  for (examClass in scores) {
    scores[examClass] = scoreTable[scores[examClass]];
  }

  return scores;
};

console.log(getExamResult(inputScoreObject, inputRequiredClasses));
