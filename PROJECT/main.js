// نظام نقاط البيع والمحاسبة - التطبيق الرئيسي
// جميع النصوص بالعربية، اتجاه RTL

// --- إدارة الجلسة وتسجيل الدخول ---
const ADMIN_PASSWORD = '1234'; // يمكنك تغيير كلمة المرور هنا

function showLogin() {
  document.getElementById('login-screen').style.display = 'block';
  document.getElementById('main-ui').style.display = 'none';
}
function showMainUI() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('main-ui').style.display = 'block';
}
function checkSession() {
  if (localStorage.getItem('session') === 'active') {
    showMainUI();
  } else {
    showLogin();
  }
}
document.getElementById('login-btn').onclick = function () {
  const pass = document.getElementById('admin-password').value;
  if (pass === ADMIN_PASSWORD) {
    localStorage.setItem('session', 'active');
    showMainUI();
    document.getElementById('admin-password').value = '';
    document.getElementById('login-error').textContent = '';
  } else {
    document.getElementById('login-error').textContent =
      'كلمة المرور غير صحيحة';
  }
};
document.getElementById('logout-btn').onclick = function () {
  localStorage.removeItem('session');
  showLogin();
};
window.onload = checkSession;

// --- التنقل بين الأقسام ---
const navBtns = document.querySelectorAll('.nav-btn');
navBtns.forEach((btn) => {
  btn.onclick = function () {
    navBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const section = btn.getAttribute('data-section');
    document
      .querySelectorAll('.section')
      .forEach((sec) => (sec.style.display = 'none'));
    document.getElementById('section-' + section).style.display = 'block';
  };
});

// --- إدارة البيانات في localStorage ---
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function loadData(key) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

// --- هياكل البيانات ---
let products = loadData('products');
let customers = loadData('customers');
let sales = loadData('sales');
let expenses = loadData('expenses');

// --- إدارة المنتجات ---
const productForm = document.getElementById('product-form');
const productIdInput = document.getElementById('product-id');
const productNameInput = document.getElementById('product-name');
const productCategoryInput = document.getElementById('product-category');
const productBarcodeInput = document.getElementById('product-barcode');
const productPriceInput = document.getElementById('product-price');
const productStockInput = document.getElementById('product-stock');
const productsTableBody = document.querySelector('#products-table tbody');
const searchProductInput = document.getElementById('search-product');
const filterCategorySelect = document.getElementById('filter-category');
const resetProductBtn = document.getElementById('reset-product');

function renderProductsTable(list = products) {
  productsTableBody.innerHTML = '';
  if (!list.length) {
    productsTableBody.innerHTML =
      '<tr><td colspan="6">لا توجد منتجات</td></tr>';
    return;
  }
  list.forEach((prod, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${prod.name}</td>
      <td>${prod.category || '-'}</td>
      <td>${prod.barcode || '-'}</td>
      <td>${prod.price}</td>
      <td>${prod.stock}</td>
      <td>
        <button onclick="editProduct(${idx})"><i class='bi bi-pencil'></i></button>
        <button onclick="deleteProduct(${idx})"><i class='bi bi-trash'></i></button>
      </td>
    `;
    productsTableBody.appendChild(tr);
  });
}

function updateCategoryFilter() {
  const cats = [...new Set(products.map((p) => p.category).filter(Boolean))];
  filterCategorySelect.innerHTML = '<option value="">كل التصنيفات</option>';
  cats.forEach((cat) => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    filterCategorySelect.appendChild(opt);
  });
}

function resetProductForm() {
  productIdInput.value = '';
  productNameInput.value = '';
  productCategoryInput.value = '';
  productBarcodeInput.value = '';
  productPriceInput.value = '';
  productStockInput.value = '';
  productForm.querySelector('#save-product').textContent = 'حفظ المنتج';
}

window.editProduct = function (idx) {
  const prod = products[idx];
  productIdInput.value = idx;
  productNameInput.value = prod.name;
  productCategoryInput.value = prod.category;
  productBarcodeInput.value = prod.barcode;
  productPriceInput.value = prod.price;
  productStockInput.value = prod.stock;
  productForm.querySelector('#save-product').textContent = 'تعديل المنتج';
  document
    .getElementById('section-products')
    .scrollIntoView({ behavior: 'smooth' });
};

window.deleteProduct = function (idx) {
  if (confirm('هل أنت متأكد من حذف المنتج؟')) {
    products.splice(idx, 1);
    saveData('products', products);
    renderProductsTable();
    updateCategoryFilter();
  }
};

productForm.onsubmit = function (e) {
  e.preventDefault();
  const prod = {
    name: productNameInput.value.trim(),
    category: productCategoryInput.value.trim(),
    barcode: productBarcodeInput.value.trim(),
    price: parseFloat(productPriceInput.value),
    stock: parseInt(productStockInput.value),
  };
  if (!prod.name || isNaN(prod.price) || isNaN(prod.stock)) return;
  const idx = productIdInput.value;
  if (idx === '') {
    products.push(prod);
  } else {
    products[idx] = prod;
  }
  saveData('products', products);
  renderProductsTable();
  updateCategoryFilter();
  resetProductForm();
};

resetProductBtn.onclick = resetProductForm;

searchProductInput.oninput = function () {
  filterProducts();
};
filterCategorySelect.onchange = function () {
  filterProducts();
};

function filterProducts() {
  const search = searchProductInput.value.trim();
  const cat = filterCategorySelect.value;
  let list = products;
  if (cat) list = list.filter((p) => p.category === cat);
  if (search) {
    list = list.filter(
      (p) =>
        p.name.includes(search) || (p.barcode && p.barcode.includes(search))
    );
  }
  renderProductsTable(list);
}

// عند تحميل الصفحة
function initProductsSection() {
  renderProductsTable();
  updateCategoryFilter();
}

document.addEventListener('DOMContentLoaded', initProductsSection);

// --- نقطة البيع (POS) ---
const posSearchInput = document.getElementById('pos-search');
const posProductsList = document.getElementById('pos-products-list');
const posCartBody = document.getElementById('pos-cart-body');
const posTotalSpan = document.getElementById('pos-total');
const posCheckoutBtn = document.getElementById('pos-checkout');
const posInvoiceDiv = document.getElementById('pos-invoice');

let posCart = [];

function renderPosProducts(filter = '') {
  let list = products.filter((p) => p.stock > 0);
  if (filter) {
    list = list.filter(
      (p) =>
        p.name.includes(filter) || (p.barcode && p.barcode.includes(filter))
    );
  }
  posProductsList.innerHTML = '';
  if (!list.length) {
    posProductsList.innerHTML = '<div>لا توجد منتجات متاحة</div>';
    return;
  }
  list.forEach((prod, idx) => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.style = 'margin:4px 0; width:100%;';
    btn.innerHTML = `<i class='bi bi-plus-circle'></i> ${prod.name} <span style='color:#888;'>(${prod.price} ر.س)</span>`;
    btn.onclick = () => addToCart(prod.barcode || prod.name);
    posProductsList.appendChild(btn);
  });
}

function addToCart(barcodeOrName) {
  const prod = products.find(
    (p) => p.barcode === barcodeOrName || p.name === barcodeOrName
  );
  if (!prod || prod.stock < 1) return;
  const idx = posCart.findIndex(
    (item) => item.barcode === prod.barcode && prod.barcode
  );
  if (idx > -1) {
    if (posCart[idx].qty < prod.stock) posCart[idx].qty++;
  } else {
    posCart.push({
      name: prod.name,
      barcode: prod.barcode,
      price: prod.price,
      qty: 1,
    });
  }
  renderCart();
}

function renderCart() {
  posCartBody.innerHTML = '';
  let total = 0;
  posCart.forEach((item, idx) => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.name}</td>
      <td><input type='number' min='1' max='${getProductStock(item)}' value='${
      item.qty
    }' style='width:50px' onchange='updateCartQty(${idx}, this.value)'></td>
      <td>${item.price}</td>
      <td>${subtotal}</td>
      <td><button onclick='removeCartItem(${idx})'><i class='bi bi-trash'></i></button></td>
    `;
    posCartBody.appendChild(tr);
  });
  posTotalSpan.textContent = total.toFixed(2);
}

function getProductStock(item) {
  const prod = products.find(
    (p) => p.barcode === item.barcode || p.name === item.name
  );
  return prod ? prod.stock : 0;
}

window.updateCartQty = function (idx, val) {
  val = parseInt(val);
  if (val < 1) val = 1;
  const stock = getProductStock(posCart[idx]);
  if (val > stock) val = stock;
  posCart[idx].qty = val;
  renderCart();
};

window.removeCartItem = function (idx) {
  posCart.splice(idx, 1);
  renderCart();
};

posSearchInput.oninput = function () {
  renderPosProducts(this.value.trim());
};

document.getElementById('pos-add-barcode').onclick = function () {
  if (posSearchInput.value.trim()) {
    addToCart(posSearchInput.value.trim());
    posSearchInput.value = '';
    renderPosProducts();
  }
};

posCheckoutBtn.onclick = function () {
  if (!posCart.length) return alert('السلة فارغة!');
  // تحقق من الكميات
  for (let item of posCart) {
    const prod = products.find(
      (p) => p.barcode === item.barcode || p.name === item.name
    );
    if (!prod || prod.stock < item.qty) {
      return alert('الكمية غير متوفرة لبعض المنتجات!');
    }
  }
  // خصم الكميات
  posCart.forEach((item) => {
    const prod = products.find(
      (p) => p.barcode === item.barcode || p.name === item.name
    );
    if (prod) prod.stock -= item.qty;
  });
  saveData('products', products);
  renderProductsTable();
  updateCategoryFilter();
  // حفظ عملية البيع
  const sale = {
    items: JSON.parse(JSON.stringify(posCart)),
    total: parseFloat(posTotalSpan.textContent),
    date: new Date().toISOString(),
  };
  sales.push(sale);
  saveData('sales', sales);
  // عرض الفاتورة
  showInvoice(sale);
  posCart = [];
  renderCart();
  renderPosProducts();
};

function showInvoice(sale) {
  let html = `<div class='neumorphic-card' style='background:#fff; color:#222;'><h4>فاتورة بيع</h4><table style='width:100%; text-align:center;'><thead><tr><th>المنتج</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th></tr></thead><tbody>`;
  sale.items.forEach((item) => {
    html += `<tr><td>${item.name}</td><td>${item.qty}</td><td>${
      item.price
    }</td><td>${(item.qty * item.price).toFixed(2)}</td></tr>`;
  });
  html += `</tbody></table><div style='margin:10px 0;'>الإجمالي: <b>${sale.total.toFixed(
    2
  )}</b> ريال</div><div>التاريخ: ${new Date(sale.date).toLocaleString(
    'ar-EG'
  )}</div>`;
  html += `<button onclick='printInvoice()'>طباعة</button></div>`;
  posInvoiceDiv.innerHTML = html;
  posInvoiceDiv.style.display = 'block';
}

window.printInvoice = function () {
  const win = window.open('', '', 'width=600,height=600');
  win.document.write(
    '<html><head><title>فاتورة بيع</title><style>body{font-family:Cairo,Tahoma,Arial,sans-serif;direction:rtl;text-align:center;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:6px;}</style></head><body>' +
      posInvoiceDiv.innerHTML +
      '</body></html>'
  );
  win.document.close();
  win.print();
  setTimeout(() => win.close(), 1000);
  posInvoiceDiv.style.display = 'none';
};

function initPOSSection() {
  renderPosProducts();
  renderCart();
  posInvoiceDiv.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', initPOSSection);

// --- إدارة العملاء ---
const customerForm = document.getElementById('customer-form');
const customerIdInput = document.getElementById('customer-id');
const customerNameInput = document.getElementById('customer-name');
const customerPhoneInput = document.getElementById('customer-phone');
const customerEmailInput = document.getElementById('customer-email');
const customersTableBody = document.querySelector('#customers-table tbody');
const searchCustomerInput = document.getElementById('search-customer');
const resetCustomerBtn = document.getElementById('reset-customer');

function renderCustomersTable(list = customers) {
  customersTableBody.innerHTML = '';
  if (!list.length) {
    customersTableBody.innerHTML =
      '<tr><td colspan="4">لا يوجد عملاء</td></tr>';
    return;
  }
  list.forEach((cust, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${cust.name}</td>
      <td>${cust.phone || '-'}</td>
      <td>${cust.email || '-'}</td>
      <td>
        <button onclick="editCustomer(${idx})"><i class='bi bi-pencil'></i></button>
        <button onclick="deleteCustomer(${idx})"><i class='bi bi-trash'></i></button>
      </td>
    `;
    customersTableBody.appendChild(tr);
  });
}

function resetCustomerForm() {
  customerIdInput.value = '';
  customerNameInput.value = '';
  customerPhoneInput.value = '';
  customerEmailInput.value = '';
  customerForm.querySelector('#save-customer').textContent = 'حفظ العميل';
}

window.editCustomer = function (idx) {
  const cust = customers[idx];
  customerIdInput.value = idx;
  customerNameInput.value = cust.name;
  customerPhoneInput.value = cust.phone;
  customerEmailInput.value = cust.email;
  customerForm.querySelector('#save-customer').textContent = 'تعديل العميل';
  document
    .getElementById('section-customers')
    .scrollIntoView({ behavior: 'smooth' });
};

window.deleteCustomer = function (idx) {
  if (confirm('هل أنت متأكد من حذف العميل؟')) {
    customers.splice(idx, 1);
    saveData('customers', customers);
    renderCustomersTable();
  }
};

customerForm.onsubmit = function (e) {
  e.preventDefault();
  const cust = {
    name: customerNameInput.value.trim(),
    phone: customerPhoneInput.value.trim(),
    email: customerEmailInput.value.trim(),
  };
  if (!cust.name) return;
  const idx = customerIdInput.value;
  if (idx === '') {
    customers.push(cust);
  } else {
    customers[idx] = cust;
  }
  saveData('customers', customers);
  renderCustomersTable();
  resetCustomerForm();
};

resetCustomerBtn.onclick = resetCustomerForm;

searchCustomerInput.oninput = function () {
  filterCustomers();
};

function filterCustomers() {
  const search = searchCustomerInput.value.trim();
  let list = customers;
  if (search) {
    list = list.filter(
      (c) => c.name.includes(search) || (c.phone && c.phone.includes(search))
    );
  }
  renderCustomersTable(list);
}

function initCustomersSection() {
  renderCustomersTable();
}
document.addEventListener('DOMContentLoaded', initCustomersSection);

// --- التقارير والمصروفات ---
const reportTypeSelect = document.getElementById('report-type');
const reportDateInput = document.getElementById('report-date');
const showReportBtn = document.getElementById('show-report');
const salesReportDiv = document.getElementById('sales-report');
const expenseForm = document.getElementById('expense-form');
const expenseDescInput = document.getElementById('expense-desc');
const expenseAmountInput = document.getElementById('expense-amount');
const expensesReportDiv = document.getElementById('expenses-report');

function getDayString(date) {
  return date.toISOString().slice(0, 10);
}
function getWeekString(date) {
  const d = new Date(date);
  const first = d.getDate() - d.getDay();
  const weekStart = new Date(d.setDate(first));
  return weekStart.toISOString().slice(0, 10);
}

function filterSalesByDate(type, dateStr) {
  if (!dateStr) return [];
  if (type === 'daily') {
    return sales.filter((s) => s.date.slice(0, 10) === dateStr);
  } else {
    // weekly
    const weekStart = getWeekString(new Date(dateStr));
    return sales.filter((s) => getWeekString(new Date(s.date)) === weekStart);
  }
}

function renderSalesReport() {
  const type = reportTypeSelect.value;
  const dateStr = reportDateInput.value;
  const filtered = filterSalesByDate(type, dateStr);
  if (!filtered.length) {
    salesReportDiv.innerHTML = '<div>لا توجد مبيعات في الفترة المحددة</div>';
    return;
  }
  let total = 0;
  let html = `<div class='neumorphic-card'><h4>تقرير المبيعات (${
    type === 'daily' ? 'يومي' : 'أسبوعي'
  })</h4><table style='width:100%;text-align:center;'><thead><tr><th>التاريخ</th><th>عدد الفواتير</th><th>الإجمالي</th></tr></thead><tbody>`;
  html += `<tr><td>${
    type === 'daily'
      ? dateStr
      : 'الأسبوع بدءًا من ' + getWeekString(new Date(dateStr))
  }</td><td>${filtered.length}</td><td>${filtered
    .reduce((a, s) => a + s.total, 0)
    .toFixed(2)}</td></tr>`;
  html += '</tbody></table>';
  html += '<h5>تفاصيل الفواتير:</h5>';
  html += '<ul style="text-align:right;">';
  filtered.forEach((sale) => {
    html += `<li>فاتورة بتاريخ ${new Date(sale.date).toLocaleString(
      'ar-EG'
    )} - الإجمالي: ${sale.total.toFixed(2)} ريال</li>`;
  });
  html += '</ul></div>';
  salesReportDiv.innerHTML = html;
}

showReportBtn.onclick = renderSalesReport;

// --- المصروفات ---
function renderExpensesReport() {
  if (!expenses.length) {
    expensesReportDiv.innerHTML = '<div>لا توجد مصروفات مسجلة</div>';
    return;
  }
  let total = 0;
  let html = `<div class='neumorphic-card'><h4>سجل المصروفات</h4><table style='width:100%;text-align:center;'><thead><tr><th>التاريخ</th><th>الوصف</th><th>المبلغ</th><th>حذف</th></tr></thead><tbody>`;
  expenses.forEach((exp, idx) => {
    total += exp.amount;
    html += `<tr><td>${new Date(exp.date).toLocaleDateString(
      'ar-EG'
    )}</td><td>${exp.desc}</td><td>${exp.amount.toFixed(
      2
    )}</td><td><button onclick='deleteExpense(${idx})'><i class='bi bi-trash'></i></button></td></tr>`;
  });
  html += `</tbody></table><div style='margin-top:10px;'>إجمالي المصروفات: <b>${total.toFixed(
    2
  )}</b> ريال</div></div>`;
  expensesReportDiv.innerHTML = html;
}

window.deleteExpense = function (idx) {
  if (confirm('هل أنت متأكد من حذف المصروف؟')) {
    expenses.splice(idx, 1);
    saveData('expenses', expenses);
    renderExpensesReport();
  }
};

expenseForm.onsubmit = function (e) {
  e.preventDefault();
  const exp = {
    desc: expenseDescInput.value.trim(),
    amount: parseFloat(expenseAmountInput.value),
    date: new Date().toISOString(),
  };
  if (!exp.desc || isNaN(exp.amount)) return;
  expenses.push(exp);
  saveData('expenses', expenses);
  renderExpensesReport();
  expenseDescInput.value = '';
  expenseAmountInput.value = '';
};

function initReportsSection() {
  // افتراضي: اليوم الحالي
  const today = new Date().toISOString().slice(0, 10);
  reportDateInput.value = today;
  renderSalesReport();
  renderExpensesReport();
}
document.addEventListener('DOMContentLoaded', initReportsSection);

// --- الإعدادات: تصدير واستيراد البيانات ---
const exportBtn = document.getElementById('export-data');
const importBtn = document.getElementById('import-data');
const importFileInput = document.getElementById('import-file');
const settingsMsg = document.getElementById('settings-msg');

exportBtn.onclick = function () {
  const data = {
    products,
    customers,
    sales,
    expenses,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'pos_backup_' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  settingsMsg.textContent = 'تم تصدير البيانات بنجاح';
  setTimeout(() => (settingsMsg.textContent = ''), 3000);
};

importBtn.onclick = function () {
  importFileInput.click();
};

importFileInput.onchange = function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (!data.products || !data.customers || !data.sales || !data.expenses)
        throw new Error();
      products = data.products;
      customers = data.customers;
      sales = data.sales;
      expenses = data.expenses;
      saveData('products', products);
      saveData('customers', customers);
      saveData('sales', sales);
      saveData('expenses', expenses);
      // تحديث جميع الجداول
      renderProductsTable();
      updateCategoryFilter();
      renderCustomersTable();
      renderSalesReport();
      renderExpensesReport();
      settingsMsg.textContent = 'تم استيراد البيانات بنجاح';
      setTimeout(() => (settingsMsg.textContent = ''), 3000);
    } catch {
      settingsMsg.textContent = 'ملف غير صالح أو تنسيق خاطئ';
      setTimeout(() => (settingsMsg.textContent = ''), 4000);
    }
  };
  reader.readAsText(file);
  importFileInput.value = '';
};

// --- واجهات الأقسام (مكان الإضافة لاحقاً) ---
// 1. نقطة البيع
// 2. إدارة المنتجات
// 3. إدارة العملاء
// 4. التقارير
// 5. الإعدادات (تصدير/استيراد)

// ... سيتم إضافة الوظائف لكل قسم لاحقاً ...
