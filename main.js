// // وظيفة التمرير السلس إلى قسم الخدمات عند الضغط على الزر
// function scrollToSection(sectionId) {
//     const target = document.getElementById(sectionId);
//     target.scrollIntoView({ behavior: 'smooth' });
//   }
//   // وظيفة التمرير السلس إلى قسم عند الضغط على الرابط
// function scrollToSection(sectionId) {
//     const target = document.getElementById(sectionId);
//     target.scrollIntoView({ behavior: 'smooth' });
//   }
// وظيفة التمرير السلس إلى قسم معين
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // ربط الروابط بالتمرير السلس
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();  // منع التمرير التقليدي
      scrollToSection(this.getAttribute('href').substring(1));
    });
  });
  