{
  // Assignment - 다음 함수 안에 코드를 구현하세요
  function sliceCityFromAddress(address) {
    // your code here
    // 1. address 받은거 ' ' 기준으로 array에 집어넣기
    const chuncks = address.split(' ');
    const slicedValue = refindChunks(chuncks);

    return slicedValue.join(' ');
  }

  const refindChunks = (chuncks) => {
    // 1. 만약 처음에 '시'가 있다면 그대로 돌려주세요
    if (chuncks[0].indexOf('시') !== -1) return chuncks;
    // 2. 근데 처음에 '도'가 있다면 '시'를 없애주세요
    if (chuncks[0].indexOf('도') !== 1) {
      const rv = chuncks.filter((chunck) => {
        //TODO: 여기 동작원리 파악하기
        return chunck.indexOf('시') === -1;
      });
      return rv;
    }
  };

  // console.log(sliceCityFromAddress('경기도 성남시 분당구 중앙공원로 53'));
  // console.log(sliceCityFromAddress('서울특별시 강남구 중앙공원로 53'));
}

function sliceCityFromAddress(address) {
  const chuncks = address.split(' ');
  const slicedValue = chuncks.filter(
    (chunck) => chunck.indexOf('시') === -1
  );
  return slicedValue.join(' ');
}

console.log(
  sliceCityFromAddress('경기도 성남시 분당구 중앙공원로 53')
);
console.log(
  sliceCityFromAddress('서울특별시 강남구 중앙공원로 53')
);
