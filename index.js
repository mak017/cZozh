document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('[data-go-btn]').addEventListener('click', function() {
    document.querySelector('.screen1').setAttribute('hidden', '');
    document.querySelector('.screen2').removeAttribute('hidden');
    document.querySelector('[data-header-counter').setAttribute('hidden', '');
  });
});
