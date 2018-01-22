/* Modified version of https://stackoverflow.com/a/10957943 */

/* changes Search Engine */

function changeAction(val){
	if ($('#searchForm').length > 0) {
		document.getElementById('searchForm').setAttribute('action', val);
	}
}

/* changes Theme */

function changeTheme(val){
	if (val=="dark") {
		document.getElementById('dark').setAttribute("class", "box dark");
		document.getElementById('darker').setAttribute("class", "global-footer global-footer-dark");
		document.getElementById('darkest').setAttribute("class", "site-navbar site-navbar-dark pt-2");
		document.getElementById('searchbox').setAttribute("class", "form-control searchbox-dark mr-2");
		}
	else if (val=="light") {
		document.getElementById('dark').setAttribute("class", "box");
		document.getElementById('darker').setAttribute("class", "global-footer");
		document.getElementById('darkest').setAttribute("class", "site-navbar pt-2");
		document.getElementById('searchbox').setAttribute("class", "form-control mr-2");
		}
}

var saveclass = null;

/* saves search engine in cookie */

function saveSearch(cookieValue)
{
		var sel = document.getElementById('sel');
		saveclass = saveclass ? saveclass : document.body.className;
		document.body.className = saveclass + ' ' + sel.value;
		changeAction(cookieValue)
		setCookie('search', cookieValue, 365);
}

/* saves theme in cookie */

function saveTheme(cookieValue)
{
		var theme = document.getElementById('theme');
		saveclass = saveclass ? saveclass : document.body.className;
		document.body.className = saveclass + ' ' + sel.value;
		changeTheme(cookieValue)
		setCookie('theme', cookieValue, 365);
}

/* general function for cookie setting */

function setCookie(cookieName, cookieValue, nDays) {
		var today = new Date();
		var expire = new Date();

		if (nDays==null || nDays==0)
				nDays=1;

		expire.setTime(today.getTime() + 3600000*24*nDays);
		document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString();
}

/* general function for reading cookie */

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0)	{
			 changeAction(decodeURIComponent(c.substring(nameEQ.length, c.length)));
			 return decodeURIComponent(c.substring(nameEQ.length, c.length));
		}
	}
	return null;
}

/* function for checking changes in settings on website as they happen */

document.addEventListener('DOMContentLoaded', function() {
	var theme = document.getElementById('theme');
	var selectedTheme = readCookie('theme');
	if ($('#searchForm').length > 0) {
		var sel = document.getElementById('sel');
		var selectedSearch = readCookie('search');
		if (selectedSearch) {
			sel.value = selectedSearch;
			changeAction(selectedSearch);
		}
	}
	if (selectedTheme) {
		theme.value = selectedTheme;
		changeTheme(selectedTheme);
	}
});

/* i18n initialization */

var lang = new Lang('en');
//languages setup - please list here all new language packs
window.lang.dynamic('ar', '/assets/js/langpack/ar.json');
window.lang.dynamic('ast', '/assets/js/langpack/ast.json');
window.lang.dynamic('bg', '/assets/js/langpack/bg.json');
window.lang.dynamic('ca', '/assets/js/langpack/ca.json');
window.lang.dynamic('cs', '/assets/js/langpack/cs.json');
window.lang.dynamic('da', '/assets/js/langpack/da.json');
window.lang.dynamic('de', '/assets/js/langpack/de.json');
window.lang.dynamic('el', '/assets/js/langpack/el.json');
window.lang.dynamic('es', '/assets/js/langpack/es.json');
window.lang.dynamic('fa', '/assets/js/langpack/fa.json');
window.lang.dynamic('fr', '/assets/js/langpack/fr.json');
window.lang.dynamic('gl', '/assets/js/langpack/gl.json');
window.lang.dynamic('id', '/assets/js/langpack/id.json');
window.lang.dynamic('it', '/assets/js/langpack/it.json');
window.lang.dynamic('ja', '/assets/js/langpack/ja.json');
window.lang.dynamic('ko', '/assets/js/langpack/ko.json');
window.lang.dynamic('lt', '/assets/js/langpack/lt.json');
window.lang.dynamic('nl', '/assets/js/langpack/nl.json');
window.lang.dynamic('nn', '/assets/js/langpack/nn.json');
window.lang.dynamic('pl', '/assets/js/langpack/pl.json');
window.lang.dynamic('pt', '/assets/js/langpack/pt.json');
window.lang.dynamic('pt_BR', '/assets/js/langpack/pt_BR.json');
window.lang.dynamic('ru', '/assets/js/langpack/ru.json');
window.lang.dynamic('sk', '/assets/js/langpack/sk.json');
window.lang.dynamic('sv', '/assets/js/langpack/sv.json');
window.lang.dynamic('uk', '/assets/js/langpack/uk.json');
window.lang.dynamic('zh_CN', '/assets/js/langpack/zh_CN.json');
window.lang.dynamic('zh_TW', '/assets/js/langpack/zh_TW.json');

//change language on click
$(document).on("click", "#change-language", function() {
  var languageSelected = $(this).data('language-value');
  var languageString = $(this).html();
  $("body").fadeOut(300, function() {
    window.lang.change(languageSelected);
    $(".selected-language").html(languageString);
    $(this).fadeIn(300);
  });

  return false;
})

//check if there is a langCookie in the browser
$(document).on("ready", function(){

  var languageCode;
  var selectedLanguageName;

  if (cookieLanguage === undefined) {
    try {
      // try to use navigator.language
      languageCode = navigator.language.replace("-","_");
      window.lang.change(languageCode);
    }
    catch(err) {
      // navigator.language is not available
      if (navigator.language.length > 2) {
        try {
          // try with a more general string (for example, if navigator.language is "es-ES" then "es" is tried)
          languageCode = navigator.language.substring(0,2);
          window.lang.change(languageCode);
        }
        catch(err) {
          languageCode = "en";
        }
      }
      else {
        languageCode = "en";
      }
    }
  }
  else {
    languageCode = cookieLanguage;
  }

  selectedLanguageName = $(".languages").find("[data-language-value='" + languageCode + "']").html();
  $(".selected-language").html(selectedLanguageName);
});

/* function for checking headline on news.opensuse.org */

jQuery(function($) {
$("#rss-feeds").rss(
	"http://news.opensuse.org/feed",
	{
		limit: 1,
		ssl: true,
		layoutTemplate: "<div class=\"alert alert-info container text-center\" role=\"alert\">{entries}</div>",
		entryTemplate: '<a href="{url}">{title}</a>'
	},
)
});
