/* Modified version of https://tutorialzine.com/2010/02/feed-widget-jquery-css-yql*/
var tabs = {
	"openSUSE News" : {
		"feed"		: "https://news.opensuse.org/feed/",
		"function"	: rss
	}
}
$(document).ready(function(){
	$('#feedWidget').show();
	showTab('openSUSE News');
});

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
var saveclass = null;

function saveSearch(cookieValue)
{
    var sel = document.getElementById('sel');
    saveclass = saveclass ? saveclass : document.body.className;
    document.body.className = saveclass + ' ' + sel.value;
    changeAction(cookieValue)
    setCookie('search', cookieValue, 365);
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
  var selectedSearch = readCookie('search');

  if (selectedSearch) {
    sel.value = selectedSearch;
    changeAction(selectedSearch);
  }
});

