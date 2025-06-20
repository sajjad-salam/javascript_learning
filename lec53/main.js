// ==================== مشروع كارد card  =========================

let container = document.createElement('div');
container.style.textAlign = 'center';
// اضافة الصورة الى الصفحة

document.body.appendChild(container);
// اضافة الديف الرئيسية الى الصفحة

// دالة لانشاء كارد جديد
function createCard(
  name = 'عنوان الكارد',
  ageContentt = 'العمر',
  imgSrc = 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg',
  container = document.body
) {
  // العناصر
  let card = document.createElement('div'); // ديف ثانوية
  let nameElement = document.createElement('h1'); // عنوان
  let img = document.createElement('img'); // صورة
  let age = document.createElement('h2'); // عمر
  ageContentt = `العمر هو ${ageContentt}`; // محتوى العمر
  // المحتوى
  let head = document.createTextNode(name);
  let agecontent = document.createTextNode(ageContentt);
  img.src = imgSrc; // رابط الصورة الافتراضي في حال لم يتم تمرير رابط صورة
  // ربط العناصر مع المحتوى

  // اضافة الاسم والعمر الى محتوى الالمنت
  nameElement.appendChild(head);
  age.appendChild(agecontent);

  // اضافة العناصر الى الكارد
  card.appendChild(img);
  card.appendChild(nameElement);
  card.appendChild(age);

  // تنسيقات الكارد بصورة عامة
  card.style.width = '300px';
  card.style.height = '400px';
  card.style.border = '1px solid #ccc';
  card.style.borderRadius = '10px';
  card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  card.style.margin = '20px';
  card.style.padding = '20px';
  card.style.display = 'inline-block';
  card.style.backgroundColor = '#f9f9f9';
  img.style.width = '100%';
  img.style.borderRadius = '10px';
  card.style.textAlign = 'center';

  // اضافة الكارد الى الكونتينر
  container.appendChild(card);
}

for (let i = 0; i < 10; i++) {
  createCard('sajjad salam', 20 + i);
}
