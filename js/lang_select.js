(function() {
  'use strict';

  function changeLang() {
    var lang = this.value;
    var canonical = this.dataset.canonical;
    if (lang === 'en') lang = 'caudal.docs';
    else if (lang) lang = 'caudal.docs/' + lang;

    location.href = '/' + lang + "/" + canonical;
  }

  document.getElementById('lang-select').addEventListener('change', changeLang);
  document.getElementById('mobile-lang-select').addEventListener('change', changeLang);
}());
