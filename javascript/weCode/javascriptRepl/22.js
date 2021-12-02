// 강의 내용과 관련된 코드를 자유롭게 작성해주세요.

// Assignment
function getRandomNumber(min, max) {
  const startPoint = min; // 시작점
  const lengthOfLine = max - min; // 수직선의 길이

  return Math.random() * lengthOfLine + startPoint;
}

getRandomNumber(2, 66);

// 아래 코드는 절대 수정하지 마세요.
module.exports = { getRandomNumber };
