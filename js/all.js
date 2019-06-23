(function clock() {
  const root = document.documentElement;
  const secss = document.querySelector('.clock__pointers__sec');
  setInterval(() => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    const sec = s / 60 * 360;
    const min = m / 60 * 360 + s / 10; // 秒針動，分針要跟著慢慢移動
    const hour = h / 12 * 360 + m / 10; // 分針動，時針要跟著慢慢移動
    if (s === 0) { // 為了解決 transition 倒轉，另一解法直接累加deg 不歸0
      secss.removeAttribute('style', 'transition: all .3s cubic-bezier(0.82,-0.32, 0.29, 1.51)');
    } else {
      secss.setAttribute('style', 'transition: all .3s cubic-bezier(0.82,-0.32, 0.29, 1.51)');
    }

    root.style.setProperty('--sec', sec);
    root.style.setProperty('--min', min);
    root.style.setProperty('--hour', hour);
  }, 1000);
}());
