// الدف الرئيسي

// هذا الكود يشتغل اذا تضغط على اي صورة ب الماوس
// document.addEventListener('DOMContentLoaded', function () {
//   console.log('DOM fully loaded and parsed');
//   let galary = document.querySelector('.galary');
//   console.log(galary);
//   // الصور داخل الgalary
//   let images = galary.querySelectorAll('.photos img');
//   // img have a name="mn"
//   let main = document.querySelector('img[name="mn"]');
//   console.log('the main is  ', main);

//   try {
//     if (!galary || !images || !main) {
//       throw new Error('One or more elements not found.');
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
//   try {
//     if (main) {
//       for (let i = 0; i < images.length; i++) {
//         images[i].addEventListener('click', function () {
//           const imgSrc = this.getAttribute('src');
//           if (imgSrc) {
//             main.src = imgSrc;
//           } else {
//             console.warn('Clicked image does not have a valid src attribute.');
//           }
//         });
//       }
//     } else {
//       console.error('Main image element with name="mn" not found.');
//     }
//   } catch (error) {
//     alert(
//       'An error occurred while setting up the event listeners: ' + error.message
//     );
//   }
// });

// هذا الكود سيعمل الآن إذا تحرك المؤشر فوق أي صورة
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
  let galary = document.querySelector('.galary');
  console.log(galary);
  // الصور داخل الgalary
  let images = galary.querySelectorAll('.photos img');
  // img have a name="mn"
  let main = document.querySelector('img[name="mn"]');
  console.log('the main is  ', main);

  try {
    if (!galary || !images || !main) {
      throw new Error('One or more elements not found.');
    }
  } catch (error) {
    console.error(error.message);
  }
  try {
    if (main) {
      for (let i = 0; i < images.length; i++) {
        // if cursor goes over any img, change main image
        images[i].addEventListener('mouseenter', function () {
          const imgSrc = this.getAttribute('src');
          if (imgSrc) {
            main.src = imgSrc;
          } else {
            console.warn('Hovered image does not have a valid src attribute.');
          }
        });
      }
    } else {
      console.error('Main image element with name="mn" not found.');
    }
  } catch (error) {
    alert(
      'An error occurred while setting up the event listeners: ' + error.message
    );
  }
});
