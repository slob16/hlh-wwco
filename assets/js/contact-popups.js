// Contact and social destinations for the landing page.
// Use tel:+44… for phone, mailto:… for email, and full https:// social URLs.
const contactDetails = {
  phone: { title: 'Call Hannah', href: 'tel:+447527047284', detail: '07527 047284', action: 'Call Hannah' },
  whatsapp: { title: 'WhatsApp', href: 'https://wa.me/447527047284', detail: '07527 047284', action: 'Open WhatsApp' },
  email: { title: 'Email us', href: 'mailto:thewagsandwhiskersco@outlook.com', detail: 'thewagsandwhiskersco@outlook.com', action: 'Send an email' },
  facebook: { title: 'Facebook', href: 'https://www.facebook.com/p/The-Wags-Whiskers-Co-61575142536513/', detail: '', action: 'Visit Facebook' },
  instagram: { title: 'Instagram', href: 'https://www.instagram.com/thewagsandwhiskersco/', detail: '', action: 'Visit Instagram' },
  tiktok: { title: 'TikTok', href: 'https://www.tiktok.com/@thewagsandwhiskersco/', detail: '', action: 'Visit TikTok' }
};

const popup = document.getElementById('contact-popup');
const popupTitle = document.getElementById('contact-popup-title');
const popupDetail = document.getElementById('contact-popup-detail');
const popupLink = document.getElementById('contact-popup-link');
const closeButton = popup.querySelector('.pet-popup__close');
const contactButtons = document.querySelectorAll('[data-contact]');
let activeTrigger = null;

function closeContactPopup(restoreFocus = true) {
  popup.hidden = true;
  if (activeTrigger) {
    activeTrigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus) activeTrigger.focus();
  }
  activeTrigger = null;
}

contactButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (activeTrigger === button) {
      closeContactPopup();
      return;
    }
    closeContactPopup(false);
    const contact = contactDetails[button.dataset.contact];
    activeTrigger = button;
    popupTitle.textContent = contact.title;
    popupDetail.textContent = (contact.detail || (contact.href ? '' : 'Details coming soon')).replace('@', '\u200b@');
    popupDetail.hidden = !popupDetail.textContent;
    popupLink.hidden = !contact.href;
    popupLink.textContent = contact.action;
    popupLink.removeAttribute('href');
    popupLink.removeAttribute('target');
    popupLink.removeAttribute('rel');
    if (contact.href) {
      popupLink.href = contact.href;
      if (contact.href.startsWith('https://')) {
        popupLink.target = '_blank';
        popupLink.rel = 'noopener noreferrer';
      }
    }
    button.setAttribute('aria-expanded', 'true');
    popup.hidden = false;
    closeButton.focus();
  });
});

closeButton.addEventListener('click', () => closeContactPopup());
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !popup.hidden) closeContactPopup();
});
document.addEventListener('click', (event) => {
  if (!popup.hidden && !popup.contains(event.target) && !event.target.closest('[data-contact]')) {
    closeContactPopup(popup.contains(document.activeElement));
  }
});
