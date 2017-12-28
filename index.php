#!/usr/bin/php
<?php
$sites = array("index" => "Internet",
	"wiki" => "Wiki",
	"lists" => "Lists",
	"packages" => "Packages",
	"forums" => "Forums"); 
if ($argc < 2) {
	foreach ($sites as $slug => $name) {
	echo "$slug\n";
	}
	exit();
}

$site = $argv[1]

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<base href="https://lelcp.github.io/search-o-o/" target="_top">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<link rel="stylesheet" href="css/search.css" type="text/css" media="screen" title="All" charset="utf-8" />
		<link rel="stylesheet" href="https://opensuse-zh.github.io/chameleon/css/app.css" type="text/css" media="screen" title="All" charset="utf-8" />
		<script src="https://opensuse-zh.github.io/chameleon/js/app.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/jquery-lang.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/jquery.rss.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/search_methods.js" type="text/javascript" charset="utf-8"></script>
		
		<link rel="icon" type="image/png" href="images/favico.png" />
		<title lang="en">openSUSE Search</title>
		
	</head>
	<body>
		<div id="dark" class="box">
			<div class="line header">
				<nav id="global-navbar" class="navbar navbar-toggleable navbar-inverse bg-inverse">
					<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<a class="navbar-brand" href="https://www.opensuse.org/">
						<img src="https://www.opensuse.org/build/images/opensuse-logo.png" width="48" height="30" class="d-inline-block align-top" alt="openSUSE Logo">
					</a>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item">
								<a class="nav-link" lang="en" href="https://software.opensuse.org/">Download</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" lang="en" href="https://software.opensuse.org/search">Software</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" lang="en" href="https://doc.opensuse.org/">Guides</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" lang="en" href="https://en.opensuse.org/">Wiki</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" lang="en" href="https://forums.opensuse.org/">Forums</a>
							</li>
						</ul>
					</div>
				</nav>
				<nav class="site-navbar py-3" id="darkest">
					<div class="container align-center">
						<ul class="nav justify-content-center nav-pills">
							 <?php
					foreach ($sites as $slug => $name) {
						if ($slug == "index" && $name != "$name") 
							echo "<li class=\"nav-item\"><a class=\"nav-link\" href=\"\"><h lang=\"en\">$name</h></a></li>";
						else if ($slug == $site && $name = "$name")
							echo "<li class=\"nav-item\"><a class=\"nav-link active\" href=\"$slug\"><h lang=\"en\">$name</h></a></li>";
						else
							echo "<li class=\"nav-item\"><a class=\"nav-link\" href=\"$slug\"><h lang=\"en\">$name</h></a></li>";
					}
					?>
						</ul>
					</div>
				</nav>
				</div>
			<div class="line content aligner">
				<div class="container aligner">
					<?php require("$site.tmpl.php") ?>
				</div>
				
			</div>
			<div class="line footer">
				<div id="rss-feeds"></div>
				<footer id="darker" class="global-footer">
					<div  class="container">
						<div class="row">
							<div class="col-12 col-md-4 text-md-left text-center">
								<h6 lang="en">Sponsors</h6>
								<ul class="list-unstyled">
									<li><a href="https://en.opensuse.org/Sponsors"><img src="images/SUSE_Logo.svg" class="sponsor-logo-small mr-3">
									<img src="images/AMD_Logo.svg" class="sponsor-logo-small mr-3">
									<img src="images/B1Systems_Logo.jpg" class="sponsor-logo-small mr-3"></li>
									<li><img src="images/Heinlein_Logo.png" class="sponsor-logo-small mr-3">
									<img src="images/CoreBackbone_Logo.png" class="sponsor-logo-small mr-3">
									
									<img src="images/APM_Logo.png" class="sponsor-logo-small mr-3"></a></li>
									
								</ul>
								
							</div>
							<div class="col-12 col-md-4 text-center">
								<h6>&copy; 2011&ndash;2017</h6>
								<ul class="list-unstyled">
									<li><p lang="en">openSUSE contributors</p></li>
								</ul>
							</div>
							<div class="col-12 col-md-4 text-md-right text-center">
								<h6 lang="en">Change language</h6>
									<select class="btn btn-secondary btn-sm" id="lang-select" onchange="window.lang.change(this.value);">
										<option href="#" value="ar">اللغة العربية</option>
										<option href="#" value="ast">Asturianu</option>
										<option href="#" value="bg">български език</option>
										<option href="#" value="ca">Català</option>
										<option href="#" value="cs">Čeština</option>
										<option href="#" value="da">Dansk</option>
										<option href="#" value="de">Deutsch</option>
										<option href="#" value="el">Ελληνικά</option>
										<option href="#" value="en">English</option>
										<option href="#" value="es">Español</option>
										<option href="#" value="fa">فارسی</option>
										<option href="#" value="fr">Français</option>
										<option href="#" value="gl">Galego</option>
										<option href="#" value="id">Bahasa Indonesia</option>
										<option href="#" value="it">Italiano</option>
										<option href="#" value="ja">日本語</option>
										<option href="#" value="ko">조선말</option>
										<option href="#" value="lt">Lietuvių</option>
										<option href="#" value="nl">Nederlands</option>
										<option href="#" value="nn">Nynorsk</option>
										<option href="#" value="pl">Polski</option>
										<option href="#" value="pt_BR">Português (Brasil)</option>
										<option href="#" value="pt">Português</option>
										<option href="#" value="ru">Русский</option>
										<option href="#" value="sk">Slovenčina</option>
										<option href="#" value="sv">Svenska</option>
										<option href="#" value="uk">Українська</option>
										<option href="#" value="zh_CN">中文（简体）</option>
										<option href="#" value="zh_TW">中文（繁體）</option>
									</select>
							</div>
						</div>
						
					
					</div>
				</footer>
			</div>
		</div>
			<!-- Modal -->
<div class="modal fade" id="search-config-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel" lang="en">Change search provider</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body input-group input-group-lg">
				<select id="sel" class="form-control py-0" onchange="saveSearch(this.value);">
					<option value="https://www.qwant.com/">Qwant</option>
					<option value="https://google.com/search">Google</option>
					<option value="https://duckduckgo.com/">DuckDuckGo</option>
					<option value="https://bing.com/">Bing</option>
					<option value="https://yahoo.com/search">Yahoo</option>
					<option value="https://startpage.com/do/search">Startpage</option>
				</select>
				
			</div>
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel" lang="en">Select the theme</h5>
			</div>
			<div class="modal-body input-group input-group-lg">
				<select id="theme" class="form-control py-0" onchange="saveTheme(this.value);">
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
				
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" lang="en" data-dismiss="modal">Cancel</button>
				<button type="button" class="btn btn-primary" lang="en" data-dismiss="modal">Save</button>
			</div>
		</div>
	</div>
</div>
	</body>

</html>
