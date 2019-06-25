document.addEventListener('DOMContentLoaded', function() {
  const goButtonElem = document.querySelector('[data-go-btn]');
  const shareButtonElem = document.querySelector('[data-share-btn]');
  if (goButtonElem) {
    goButtonElem.addEventListener('click', function() {
      document.querySelector('.screen1').setAttribute('hidden', '');
      document.querySelector('.screen2').removeAttribute('hidden');
      document.querySelector('[data-header-counter').setAttribute('hidden', '');
    });
  }
  if (shareButtonElem) {
    shareButtonElem.addEventListener('click', function() {
      document.querySelector('[data-img-container-overlay]').removeAttribute('hidden')
    })
  }
  // Fix iOS viewport bug
  const fixHeight = function() {
    document.body.style.height = window.innerHeight + 'px';
  };
  fixHeight();
  window.addEventListener('resize', function() {
    fixHeight();
  });
});
