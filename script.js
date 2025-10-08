// وظائف بسيطة: تحديث السنة تلقائياً، معالجة إرسال النموذج تجربة فقط
document.addEventListener('DOMContentLoaded', function(){
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.textContent = y;
  var el2 = document.getElementById('year2');
  if(el2) el2.textContent = y;
  var el3 = document.getElementById('year3');
  if(el3) el3.textContent = y;
});

function submitForm(e){
  e.preventDefault();
  alert('تم استلام رسالتك! (تجريبي) - رآصد سيتواصل معك قريباً');
  e.target.reset();
}
