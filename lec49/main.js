// ==================== الفرق بين inner , outer  =========================

let test;
test = document.getElementById('test'); // للوصول الى عنصر باستخدام معرفه
console.log(test);

// outerHTML يجيبلك العنصر كامل مع كل شيء بداخله
console.log(test.outerHTML); // <div id="test"><h3>hello world</

// innerHTML يجيبلك كل شيء داخل العنصر فقط
console.log(test.innerHTML); // <h3>hello world</h3>

// شرحها من خلال الset
test.innerHTML = '<h3>shit</h3>'; // استبدال المحتوى الداخلي للعنصر
console.log(test.innerHTML); // <h3>shit</h3>

// اذا تريد تشيل العنصر كلة
test.outerHTML = '<p>hellllls</p>';
// هنا حتى الdev راح

// inner text and outer text
innerText = test.innerText;
outerText = test.outerText;
console.log(innerText); //shit
console.log(outerText); //shit
