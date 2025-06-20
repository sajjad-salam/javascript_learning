// ==================== attribute in dom  =========================

let test;
test = document.getElementById('dddd'); // للوصول الى عنصر باستخدام معرفه
console.log(test);
// اذا اريد اعرض اتربيوت معين
console.log(test.getAttribute('dir')); // للوصول الى اتربيوت معين
// rtl

// او اكدر مباشرة اوصل للاتربيوت
console.log(test.dir); // rtl

// ================== اذا اريد اعرض جميع الاتربيوت =========================

console.log(test.attributes);
/*
NamedNodeMap {0: class, 1: id, 2: dir, class: class, id: id, dir: dir, length: 3}0: class1: id2: dirclass: classdir: dirid: idlength: 3[[Prototype]]: NamedNodeMap

*/

// اكدر اضيف اتربيوت جديد
test.setAttribute('title', 'this is a title');

console.log(test.getAttribute('title')); // this is a title

// هل العنصر يحتوي على اتربيوت معين
console.log(test.hasAttribute('title')); // true
console.log(test.hasAttribute('class')); // true
console.log(test.hasAttribute('style')); // false

// حذف اتربيوت
test.removeAttribute('title');
console.log(test.hasAttribute('title')); // false
// اكدر احذف اتربيوت باستخدام removeAttribute
