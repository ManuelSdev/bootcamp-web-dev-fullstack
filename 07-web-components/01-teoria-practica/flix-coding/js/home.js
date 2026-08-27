const privacyLinkElem = document.getElementById('privacy-link');
const privacyPopupElem = document.getElementById('privacy-popup');

privacyLinkElem.addEventListener('click', () => {
  privacyPopupElem.open = true;
});
