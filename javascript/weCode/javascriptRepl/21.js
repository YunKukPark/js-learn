// 강의 내용과 관련된 코드를 작성하세요.

// 이거 함정문제 : 미쿡인들은 '생일'이 지나야 한살먹는다.

function getWesternAge(birthday) {
  const now = new Date();
  const nowYear = now.getFullYear(); // 현재 항상 2021

  const isBirthdayPassed = checkBirthdayPassed(now, birthday);

  console.log(`isBirthdayPassed: ${isBirthdayPassed}`);

  if (isBirthdayPassed) {
    return nowYear - birthday.getFullYear();
  } else {
    return nowYear - birthday.getFullYear() - 1;
  }
}

const checkBirthdayPassed = (now, birthday) => {
  console.log(`birthday : ${birthday}`);
  const today = {
    month: now.getMonth() + 1,
    date: now.getDate(),
  };

  const birth = {
    month: birthday.getMonth() + 1,
    date: birthday.getDate(),
  };

  const leftedMonth = today.month - birth.month;
  console.log(today, birth);

  if (leftedMonth < 0 || (leftedMonth === 0 && today.date <= birth.date)) {
    return false;
  } else {
    return true;
  }
};

let date3 = new Date('December 1, 2019 03:24:00');

getWesternAge(date3);

// 아래의 코드는 절대로 수정하거나 삭제하지 마세요.
module.exports = { getWesternAge };
