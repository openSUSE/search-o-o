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
		<script src="js/search_methods.js" type="text/javascript" charset="utf-8"></script>
		
		<link rel="icon" type="image/png" href="images/favico.png" />
		<title lang="en">openSUSE Search</title>
		
	</head>
	<body>
		<div class="box">
			<div class="line header">
				<nav id="global-navbar" class="navbar navbar-toggleable navbar-inverse bg-inverse">
					<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<a class="navbar-brand" href="#">
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
				<nav class="site-navbar py-3">
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
				<div id="feedWidget">
					<div id="tabContent">
					<p>...</p>
					</div>
				</div>
				<footer class="global-footer">
					<div class="container">
						<div class="row">
							<div class="col-12 col-md-4">
								<h6 lang="en">Sponsors</h6>
								<ul class="list-unstyled">
									<li><a href="https://en.opensuse.org/Sponsors"><img src="images/SUSE_Logo.svg" class="sponsor-logo-small mr-3">
									<img src="images/AMD_Logo.svg" class="sponsor-logo-small mr-3">
									<img src="images/Heinlein_Logo.png" class="sponsor-logo-small mr-3">
									<img src="images/CoreBackbone_Logo.png" class="sponsor-logo-small mr-3">
									<img src="images/B1Systems_Logo.jpg" class="sponsor-logo-small mr-3">
									<img src="images/APM_Logo.png" class="sponsor-logo-small mr-3"></a></li>
									
								</ul>
								
							</div>
							<div class="col-12 col-md-4 text-center">
								<h6>&copy; 2011&ndash;2017</h6>
								<ul class="list-unstyled">
									<li><p lang="en">openSUSE contributors</p></li>
								</ul>
							</div>
							<div class="col-12 col-md-4 text-right">
								<h6 lang="en">Change language</h6>
									<select class="btn btn-secondary mr-2" id="lang-select" onchange="window.lang.change(this.value);">
										<option href="#" value="ar">Arabic</option>
										<option href="#" value="ast">Asturian</option>
										<option href="#" value="bg">Bulgarian</option>
										<option href="#" value="ca">Catalan</option>
										<option href="#" value="cs">Czech</option>
										<option href="#" value="da">Danish</option>
										<option href="#" value="de">German</option>
										<option href="#" value="el">Greek</option>
										<option href="#" value="en">English</option>
										<option href="#" value="es">Español</option>
										<option href="#" value="fa">Persian</option>
										<option href="#" value="fr">French</option>
										<option href="#" value="gl">Galician</option>
										<option href="#" value="id">Indonesian</option>
										<option href="#" value="it">Italian</option>
										<option href="#" value="ja">Japanese</option>
										<option href="#" value="ko">Korean</option>
										<option href="#" value="lt">Lithuanian</option>
										<option href="#" value="nl">Dutch</option>
										<option href="#" value="nn">Norwegian Nynorsk</option>
										<option href="#" value="pl">Polski</option>
										<option href="#" value="pt_BR">Portuguese (Brazil)</option>
										<option href="#" value="pt">Portuguese</option>
										<option href="#" value="ru">Русский</option>
										<option href="#" value="sk">Slovak</option>
										<option href="#" value="sv">Swedish</option>
										<option href="#" value="uk">Ukrainian</option>
										<option href="#" value="zh_CN">中文（简体）</option>
										<option href="#" value="zh_TW">中文（繁體）</option>
									</select>
							</div>
						</div>
						
					</div>
				</footer>
			</div>
		</div>
	</body>
</html>
