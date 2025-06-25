// set time out and setinterval
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, (timeout = 2000)); // تشتغل هاي بعد 2000 مللي ثانية

// شلون نشيل التايم اوت

let clearTimeou = setTimeout(() => {
  console.log('Timeout');
}, (timeout = 3000));

clearTimeout(clearTimeou); // هاي تلغي التايم اوت
console.log('End');

// السيت تايم اوت تشغل الكود مرة وحدة فقط

// السيت انترفل

let i = 0;
let interval = setInterval(() => {
  console.log('Interval ' + i);
  i++;
  if (i === 5) {
    clearInterval(interval); // هاي تلغي الانترفل
  }
}, (intervalTime = 1000));
// هاي تشغل الكود كل 1000 مللي ثانية

// شلون نوقف الانترفل
// clearInterval(interval); // هاي تلغي الانترفل
