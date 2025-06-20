// ==================== create element  =========================

let test;

test = document.createElement('div');
test.innerHTML = '<h3>hello world</h3>';

// اضافة المحتوى الى الصفحة
document.body.appendChild(test);

// اضافة العنصر في المكان المراد عرضة
let content = document.createElement('div');
// parent.appendChild(test);
console.log(content);
