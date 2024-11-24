// السلايدر التلقائي
let currentIndex = 0;

function slideImages() {
  const slider = document.querySelector('.slider-container');
  const images = slider.children;
  const totalImages = images.length;

  // تحديث موضع الصور
  currentIndex = (currentIndex + 1) % totalImages;
  const offset = -currentIndex * 100; // يحرك الصور بنسبة عرض الشاشة
  slider.style.transform = `translateX(${offset}%)`;
}

// تشغيل السلايدر كل 3 ثوانٍ
setInterval(slideImages, 3000);