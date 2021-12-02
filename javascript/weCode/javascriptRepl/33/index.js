const passwordInput = document.getElementById('password');
const rePasswordInput = document.querySelector('#re-password');
const thisIsButton = document.getElementsByClassName('login-btn')[0];

const checkPassword = () => {
  const password = passwordInput.value;
  const rePassword = rePasswordInput.value;

  if (password !== rePassword)
    printAlertMessage('비밀번호가 일치하지 않습니다');
  if (password === rePassword) printAlertMessage('');

  console.log(`password : ${password} || rePassword: ${rePassword}`);
};

const printAlertMessage = (msg) => {
  const alert = document.querySelector('.alert');
  alert.innerHTML = msg;
  return alert.innerHTML;
};

// 첫 쓰따뜨 트리거
passwordInput.addEventListener('keyup', checkPassword);
rePasswordInput.addEventListener('keyup', checkPassword);
