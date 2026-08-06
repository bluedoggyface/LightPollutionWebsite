document.addEventListener('DOMContentLoaded', function() {
  var learnBtn = document.querySelector('.learn-more');
  var learnModal = document.getElementById('learnModal');
  var actionBtn = document.querySelector('.take-action');
  var actionModal = document.getElementById('actionModal');
  var diffBtn = document.querySelector('.section-button');
  var diffImage = document.querySelector('.section-image');
  var imageA = 'images/city_skyline_light_pollution.png';
  var imageB = 'images/city_skyline_no_light_pollution.png';
  var showingPollution = true;

  function openModal(modal) {
    if (!modal) return;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  }
  function closeModal(modal) {
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }

  if (learnBtn) {
    learnBtn.addEventListener('click', function() { openModal(learnModal); });
  }
  if (actionBtn) {
    actionBtn.addEventListener('click', function() { openModal(actionModal); });
  }

  if (diffBtn && diffImage) {
    diffBtn.addEventListener('click', function() {
      diffImage.style.opacity = '0';
      setTimeout(function() {
        diffImage.src = showingPollution ? imageB : imageA;
        showingPollution = !showingPollution;
        diffImage.style.opacity = '1';
      }, 250);
    });
  }

  [learnModal, actionModal].forEach(function(modal) {
    if (!modal) return;
    var close = modal.querySelector('.modal-close');
    if (close) close.addEventListener('click', function() { closeModal(modal); });
    modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(modal); });
  });
});
