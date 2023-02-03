// Get the select button to update the language
const languageSelector = document.querySelector('#language-selector');
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const setLanguage = (language) => {
  // Get the elements with the corresponding dataset
  const elements = document.querySelectorAll(`[data-text-${language}]`);

  // Set it on localStorage
  window.localStorage.setItem('language', language);

  // Change the text and value on the language selector button
  if(language === 'ES') {
    languageSelector.innerText = 'EN';
    languageSelector.dataset.language = 'EN';
  } else {
    languageSelector.innerText = 'ES';
    languageSelector.dataset.language = 'ES';
  }

  // Run update text on the elements
  elements.forEach((element) => updateText(element, language));
}

const updateText = (element, language) => {
  // Ternary operator to get the preferred language
  const dataset = language === 'EN' ? element.dataset.textEn : element.dataset.textEs;

  switch (element.tagName) {
    case ('IMG'):
      element.alt = dataset;
      break;
    case ('INPUT'):
      element.setAttribute('placeholder', dataset);
      break;
    default:
      element.innerHTML = dataset;
      break;
  }
}

// When the input button changes, we change the language
languageSelector.addEventListener('click', (e) => setLanguage(e.currentTarget.dataset.language));