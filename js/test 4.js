var btns = document.getElementsByTagName('button'),
    rows = document.getElementsByTagName('tr');

btns[0].addEventListener('click', function () {
  rows[1].className = 'vc';
}, false);

btns[1].addEventListener('click', function () {
  rows[1].className = 'vh';
}, false);

btns[2].addEventListener('click', function () {
  rows[1].className = '';
}, false);
