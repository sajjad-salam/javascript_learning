let amot = document.getElementById('usdAmount');
let convertButton = document.getElementById('convertButton');

convertButton.addEventListener('click', function () {
  let amount = parseFloat(amot.value);
  if (isNaN(amount)) {
    alert('Please enter a valid number');
    return;
  }
  let result = amount * 1.45; // تحويل الدينار الى دولار
  document.getElementById('result').innerText = result.toFixed(2) + ' $';
});
// اضافة حدث عند الضغط على زر Enter في حقل الإدخال
amot.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    convertButton.click();
  }
});
