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
		$('#geeko-img').remove();
		document.getElementById('dark').setAttribute("class", "box dark");
		document.getElementById('nav-border').setAttribute("class", "nav justify-content-center nav-tabs nav-tabs-dark");
		document.getElementById('nav-link active').setAttribute("class", "nav-link active dark-nav-active");
		document.getElementById('darker').setAttribute("class", "global-footer darker");
		document.getElementById('darkest').setAttribute("class", "site-navbar darker pt-2");
		document.getElementById('searchbox').setAttribute("class", "form-control darkest mr-2");
		}
	else if (val=="light") {
		$('#geeko-img').remove();
		document.getElementById('dark').setAttribute("class", "box");
		document.getElementById('nav-border').setAttribute("class", "nav justify-content-center nav-tabs");
		document.getElementById('nav-link active').setAttribute("class", "nav-link active");
		document.getElementById('darker').setAttribute("class", "global-footer");
		document.getElementById('darkest').setAttribute("class", "site-navbar pt-2");
		document.getElementById('searchbox').setAttribute("class", "form-control mr-2");
		}
	else if (val=="geeko") {
		$('#geeko-img').remove();
		$("#images").prepend("<div class='row' id='geeko-img'><img class='mx-auto pb-4' src='assets/images/geeko.gif'></div>");
		document.getElementById('dark').setAttribute("class", "box");
		document.getElementById('nav-border').setAttribute("class", "nav justify-content-center nav-tabs");
		document.getElementById('nav-link active').setAttribute("class", "nav-link active");
		document.getElementById('darker').setAttribute("class", "global-footer");
		document.getElementById('darkest').setAttribute("class", "site-navbar pt-2");
		document.getElementById('searchbox').setAttribute("class", "form-control mr-2");
		}
	else if (val=="counter") {
		$('#geeko-img').remove();
		$("#images").prepend("<div class='row' id='geeko-img'><img class='mx-auto pb-4 rounded' src='https://counter.opensuse.org'></div>");
		document.getElementById('dark').setAttribute("class", "box");
		document.getElementById('nav-border').setAttribute("class", "nav justify-content-center nav-tabs");
		document.getElementById('nav-link active').setAttribute("class", "nav-link active");
		document.getElementById('darker').setAttribute("class", "global-footer");
		document.getElementById('darkest').setAttribute("class", "site-navbar pt-2");
		document.getElementById('searchbox').setAttribute("class", "form-control mr-2");
		}
	if (val=="counter-dark") {
		$('#geeko-img').remove();
		$("#images").prepend("<div class='row' id='geeko-img'><img class='mx-auto pb-4 rounded' src='https://counter.opensuse.org'></div>");
		document.getElementById('dark').setAttribute("class", "box dark");
		document.getElementById('nav-border').setAttribute("class", "nav justify-content-center nav-tabs nav-tabs-dark");
		document.getElementById('nav-link active').setAttribute("class", "nav-link active dark-nav-active");
		document.getElementById('darker').setAttribute("class", "global-footer darker");
		document.getElementById('darkest').setAttribute("class", "site-navbar darker pt-2");
		document.getElementById('searchbox').setAttribute("class", "form-control darkest mr-2");
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
	document.getElementById("searchbox").focus();
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
