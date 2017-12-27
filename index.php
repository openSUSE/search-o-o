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
		<script src="js/search_methods.js" type="text/javascript" charset="utf-8"></script>
		
		<link rel="icon" type="image/png" href="images/favico.png" />
		<title>openSUSE Search</title>
		
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
								<a class="nav-link" href="https://software.opensuse.org/">Download</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="https://software.opensuse.org/search">Software</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="https://doc.opensuse.org/">Guides</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="https://en.opensuse.org/">Wiki</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="https://forums.opensuse.org/">Forums</a>
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
							echo "<li class=\"nav-item\"><a class=\"nav-link\" href=\"\">$name</a></li>";
						else if ($slug == $site && $name = "$name")
							echo "<li class=\"nav-item\"><a class=\"nav-link active\" href=\"$slug\">$name</a></li>";
						else
							echo "<li class=\"nav-item\"><a class=\"nav-link\" href=\"$slug\">$name</a></li>";
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
								<h6>Sponsors</h6>
								<ul class="list-unstyled">
									<li><a href="https://en.opensuse.org/Sponsors"><img src="images/SUSE_Logo.svg" class="sponsor-logo-small mr-3">
									<img src="images/AMD_Logo.svg" class="sponsor-logo-small mr-3">
									<img src="images/Heinlein_Logo.png" class="sponsor-logo-small mr-3">
									<img src="images/CoreBackbone_Logo.png" class="sponsor-logo-small mr-3">
									<img src="images/B1Systems_Logo.jpg" class="sponsor-logo-small mr-3">
									<img src="images/APM_Logo.png" class="sponsor-logo-small mr-3"></a></li>
									
								</ul>
								
							</div>
							<div class="col-12 col-md-4">
							</div>
							<div class="col-12 col-md-4 text-right">
								<h6>&copy; 2011&ndash;2017</h6>
								<ul class="list-unstyled">
									<li><p>openSUSE contributors</p></li>
								</ul>
							</div>
						</div>
						
					</div>
				</footer>
			</div>
		</div>
	</body>
</html>
