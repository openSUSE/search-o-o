/* Modified version of https://tutorialzine.com/2010/02/feed-widget-jquery-css-yql*/
var tabs = {
	"openSUSE News" : {
		"feed"		: "https://news.opensuse.org/feed/",
		"function"	: rss
	}
}


function showTab(key)
{
	var obj = tabs[key];
	if(!obj) return false;
	var stage = $('#tabContent');
	/* Forming the query: */
	var query = "select * from feed where url='"+obj.feed+"' LIMIT 2";
	/* Forming the URL to YQL: */
	var url = "https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(query)+"&format=json&callback=?";

	$.getJSON(url,function(data){

		stage.empty();

		/* item exists in RSS and entry in ATOM feeds: */

		$.each(data.query.results.item || data.query.results.entry,function(){
			try{
				/* Trying to call the user provided function, "this" the rest of the feed data: */
				stage.append(obj['function'](this));
		}
			catch(e){
				/* Notifying users if there are any problems with their handler functions: */
				var f_name =obj['function'].toString().match(/function\s+(\w+)\(/i);
				if(f_name) f_name = f_name[1];
				stage.append('<div>There is a problem with your '+f_name+ ' function</div>');
				return false;
			}
		})
	});
}
function rss(item)
{
	return $('<div>').html(
		' <a href="'+(item.origLink || item.link[0].href || item.link)+'" target="_blank">'+
		formatString(item.title.content || item.title)+
		'</a>'
	);
}

function formatString(str)
{
	str = str.replace(/<[^>]+>/ig,'');
	str=' '+str;
	str = str.replace(/((ftp|https?):\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?)/gm,'<a href="$1" target="_blank">$1</a>');
	return str;
}


/* Modified version of https://stackoverflow.com/a/10957943*/

function changeAction(val){
    document.getElementById('searchForm').setAttribute('action', val);
}

function changeTheme(val){
	if (val=="dark") {
		document.getElementById('dark').setAttribute("class", "box dark");
		document.getElementById('darker').setAttribute("class", "global-footer global-footer-dark");
		document.getElementById('darkest').setAttribute("class", "site-navbar site-navbar-dark py-3");
		document.getElementById('searchbox').setAttribute("class", "form-control searchbox-dark mr-2");
		}
	else if (val=="light") {
		document.getElementById('dark').setAttribute("class", "box");
		document.getElementById('darker').setAttribute("class", "global-footer");
		document.getElementById('darkest').setAttribute("class", "site-navbar py-3");
		document.getElementById('searchbox').setAttribute("class", "form-control mr-2");
		}
}

var saveclass = null;

function saveSearch(cookieValue)
{
    var sel = document.getElementById('sel');
    saveclass = saveclass ? saveclass : document.body.className;
    document.body.className = saveclass + ' ' + sel.value;
    changeAction(cookieValue)
    setCookie('search', cookieValue, 365);
}

function saveTheme(cookieValue)
{
    var theme = document.getElementById('theme');
    saveclass = saveclass ? saveclass : document.body.className;
    document.body.className = saveclass + ' ' + sel.value;
    changeTheme(cookieValue)
    setCookie('theme', cookieValue, 365);
}

function setCookie(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();

    if (nDays==null || nDays==0)
        nDays=1;

    expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString();
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0)  {
       changeAction(decodeURIComponent(c.substring(nameEQ.length, c.length)));
       return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}


document.addEventListener('DOMContentLoaded', function() {
  var sel = document.getElementById('sel');
  var theme = document.getElementById('theme');
  var selectedSearch = readCookie('search');
  var selectedTheme = readCookie('theme');

  if (selectedSearch) {
    sel.value = selectedSearch;
    changeAction(selectedSearch);
  }
  if (selectedTheme) {
    theme.value = selectedTheme;
    changeTheme(selectedTheme);
  }
});

//*****************init i18n

var lang = new Lang('en');
//languages setup - please list here all new language packs
window.lang.dynamic('ar', 'js/langpack/ar.json');
window.lang.dynamic('ast', 'js/langpack/ast.json');
window.lang.dynamic('bg', 'js/langpack/bg.json');
window.lang.dynamic('ca', 'js/langpack/ca.json');
window.lang.dynamic('cs', 'js/langpack/cs.json');
window.lang.dynamic('da', 'js/langpack/da.json');
window.lang.dynamic('de', 'js/langpack/de.json');
window.lang.dynamic('el', 'js/langpack/el.json');
window.lang.dynamic('es', 'js/langpack/es.json');
window.lang.dynamic('fa', 'js/langpack/fa.json');
window.lang.dynamic('fr', 'js/langpack/fr.json');
window.lang.dynamic('gl', 'js/langpack/gl.json');
window.lang.dynamic('id', 'js/langpack/id.json');
window.lang.dynamic('it', 'js/langpack/it.json');
window.lang.dynamic('ja', 'js/langpack/ja.json');
window.lang.dynamic('ko', 'js/langpack/ko.json');
window.lang.dynamic('lt', 'js/langpack/lt.json');
window.lang.dynamic('nl', 'js/langpack/nl.json');
window.lang.dynamic('nn', 'js/langpack/nn.json');
window.lang.dynamic('pl', 'js/langpack/pl.json');
window.lang.dynamic('pt', 'js/langpack/pt.json');
window.lang.dynamic('pt_BR', 'js/langpack/pt_BR.json');
window.lang.dynamic('ru', 'js/langpack/ru.json');
window.lang.dynamic('sk', 'js/langpack/sk.json');
window.lang.dynamic('sv', 'js/langpack/sv.json');
window.lang.dynamic('uk', 'js/langpack/uk.json');
window.lang.dynamic('zh_CN', 'js/langpack/zh_CN.json');
window.lang.dynamic('zh_TW', 'js/langpack/zh_TW.json');

//change language on click
$(document).on("change", "lang-select", function() {
  var languageSelected = $(this).data('value');
  var languageString = $(this).html();
  $("body").fadeOut(300, function() {
    window.lang.change(languageSelected);
  });

  return false;
})
$(document).ready(function(){
	$('#feedWidget').show();
	showTab('openSUSE News');
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
  document.getElementById('lang-select').value = languageCode;
});

