---
---
/* Modified version of https://stackoverflow.com/a/10957943 */

/* changes Search Engine */

function changeAction(val){
	if ($('#searchForm').length > 0) {
		document.getElementById('searchForm').setAttribute('action', urlForSearch(val));
	}
	var sel = document.getElementById('sel');
	sel.src = imgForSearch(val);
	sel.alt = titleForSearch(val);
}

/* saves search engine in cookie */

function saveSearch(cookieValue)
{
	changeAction(cookieValue)
	setCookie('search', cookieValue, 365);
}

function urlForSearch(searchMethod) {
	{% for entry in site.data.search-engines %}
	if (searchMethod == "{{ entry.key }}") { return "{{ entry.url }}"; }
	{% endfor %}
}

function imgForSearch(searchMethod) {
	{% for entry in site.data.search-engines %}
	if (searchMethod == "{{ entry.key }}") { return "{{ "/assets/search/" | relative_url }}{{ entry.image }}"; }
	{% endfor %}
}

function titleForSearch(searchMethod) {
	{% for entry in site.data.search-engines %}
	if (searchMethod == "{{ entry.key }}") { return "{{ entry.name }}"; }
	{% endfor %}
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
	document.getElementById("searchbox").focus();
	if ($('#searchForm').length > 0) {
		var selectedSearch = readCookie('search');
		if (selectedSearch) {
			changeAction(selectedSearch);
		}
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
		layoutTemplate: '<div class="alert alert-info container text-center" role="alert">{entries}</div>',
		entryTemplate: '<a class="font-weight-bold" href="//news.opensuse.org"><span class="typcn typcn-news"></span> News:</a> <a href="{url}">{title}</a>'
	},
)
});

var lang = new Lang('en');
{% languages %}
window.lang.dynamic('@@', '/assets/js/langpack/@@.json');
{% endlanguages %}
