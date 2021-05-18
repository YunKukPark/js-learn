(() => {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    console.log(`q1. ${i}`);
  }

  console.log('\n');

  for (let i = 0; i <= 10; i++) {
    console.log(`q2. ${i}`);
    if (i > 8) {
      break;
    }
  }
})();
