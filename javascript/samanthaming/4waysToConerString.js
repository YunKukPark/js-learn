{
  const string = 'Radagast';

  // Option 1
  string.split('');

  // Option 2
  [...string];

  // Option 3
  Array.from(string);

  // Option 4
  Object.assign([], string);

  // Result :
  // ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
}

{
  const string = 'hello world';

  const usingSplit = string.split('');
  const usingSpread = [...string];
  const usingArrayFrom = Array.from(string);
  const usingObjectAssign = Object.assign([], string);
}

{
  const string = 'split-by-dash';

  const usingSplit = string.split('-');
  // ['split', 'by', 'dash']
}

{
  const string = 'hello🙌';

  const usingSplit = string.split('');
  const usingObjectAssign = Object.assign([], string);

  console.log(usingSplit, usingObjectAssign);
}
