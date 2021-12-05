const get세탁물 = (세탁물) => {
  // do something
  return 빨래모음;
};

const ready세탁 = (빨래모음) => {
  // do something (세제 넣기 등등)
  return 준비된빨래들;
};

const run세탁기 = (준비된빨래들) => 세탁된빨래들;
const dry세탁물 = (세탁된빨래들) => 건조된빨래들;

const do세탁 = dry세탁물(run세탁기(ready세탁(get세탁물('세탁물'))));
