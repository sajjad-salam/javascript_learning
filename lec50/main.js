// ==================== sibling - parent  =========================

let test;
// test هنا هو div
test = document.getElementById('test'); // للوصول الى عنصر باستخدام معرفه
console.log(test);

// parentElement
// الاب
console.log(test.parentElement); // <body>...</body>

// children
console.log(test.children); // HTMLCollection(1) [h3]

// firstChild
console.log(test.firstChild); // #text

// lastChild
console.log(test.lastChild); // #text

// nextSibling
console.log(test.nextSibling); // #text

// previousSibling
console.log(test.previousSibling); // #text
// firstElementChild
console.log(test.firstElementChild); // <h3>hello world</h3>
