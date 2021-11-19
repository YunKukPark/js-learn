function accessArray() {
  //아래의 코드는 수정하지마세요.
  let myPlants = [
    {
      type: 'flowers',
      list: ['rose', 'tulip', 'dandelion'],
    },
    {
      type: 'trees',
      list: ['fir', 'pine', 'birch'],
    },
  ];

  // 아래에 코드를 작성해주세요.
  const [flowers, trees] = myPlants;
  console.log(trees);

  // 아래의 코드를 수정하지마세요.
  // return foundValue;
}

accessArray();
