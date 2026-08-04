document.addEventListener('DOMContentLoaded', function() {
  var learnBtn = document.querySelector('.learn-more');
  var learnModal = document.getElementById('learnModal');
  var actionBtn = document.querySelector('.take-action');
  var actionModal = document.getElementById('actionModal');

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

  [learnModal, actionModal].forEach(function(modal) {
    if (!modal) return;
    var close = modal.querySelector('.modal-close');
    if (close) close.addEventListener('click', function() { closeModal(modal); });
    modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(modal); });
  });
});
