const lnbItems = document.querySelectorAll('.lnb-item');

lnbItems.forEach((item) => {
  item.addEventListener('click', function (e) {
    console.log(e.target);
    console.log(e.currentTarget);
    const value = e.currentTarget.textContent;
    console.log(value);
  });
});
