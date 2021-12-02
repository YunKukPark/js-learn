const nickname = '뚜비';
const interests = '방탈출,테니스,멍 때리기';

const handleEdit = (nickname, interests) => {
  const editInfo = {
    nickname,
    interests: interests.split(','),
    bio: `제 닉네임은 ${nickname}입니다. 취미는 ${interests}입니다.`,
  };

  return editInfo;
};

console.log(handleEdit(nickname, interests));
