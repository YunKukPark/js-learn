function getWesternAge(birthday) {
  const now = new Date();
  const isBorned = birthday.getTime() < now.getTime();
  if (!isBorned) return '님 아직 안태어났잖아요';

  const nowYear = now.getFullYear();
  const isBirthdayPassed = checkBirthdayPassed(now, birthday);
  const age = nowYear - birthday.getFullYear();

  return isBirthdayPassed ? age : age - 1;
}

const checkBirthdayPassed = (now, birthday) => {
  const today = {
    month: now.getMonth() + 1,
    date: now.getDate(),
  };

  const birth = {
    month: birthday.getMonth() + 1,
    date: birthday.getDate(),
  };

  const leftedMonth = today.month - birth.month;

  leftedMonth < 0 || (leftedMonth === 0 && today.date <= birth.date)
    ? false
    : true;
};

let date3 = new Date('December 14, 1945 03:24:00');
console.log(getWesternAge(date3));
