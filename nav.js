document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    if (open) {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '72px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#0c0c0f';
      nav.style.padding = '20px 32px';
      nav.style.gap = '18px';
      nav.style.borderBottom = '1px solid rgba(236,231,221,0.14)';
    } else {
      nav.style.display = 'none';
    }
  });
});
