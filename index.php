#!/usr/bin/php
<?php
$sites = array("index" => "Everything",
    "wiki" => "Wiki",
    "lists" => "Lists",
    "build" => "Build Service",
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
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  
  <link rel="stylesheet" href="http://static.opensuse.org/themes/bento/css/style.css" type="text/css" media="screen" title="All" charset="utf-8" />
  <link rel="stylesheet" href="search.css" type="text/css" media="screen" title="All" charset="utf-8" />
  
  <script src="http://static.opensuse.org/themes/bento/js/jquery.js" type="text/javascript" charset="utf-8"></script>
  <script src="http://static.opensuse.org/themes/bento/js/script.js" type="text/javascript" charset="utf-8"></script>
  <script src="http://static.opensuse.org/themes/bento/js/l10n/global-navigation-data-en_US.js" type="text/javascript" charset="utf-8"></script>
  <script src="http://static.opensuse.org/themes/bento/js/global-navigation.js" type="text/javascript" charset="utf-8"></script>
  </script>
  
  <link rel="icon" type="image/png" href="http://static.opensuse.org/themes/bento/images/favicon.png" />
  <title>Search - openSUSE.org</title>
  
</head>

<body>
  <div id="header">
    <div id="header-content" class="container_12">
      <a id="header-logo" href="#home"><img src="http://static.opensuse.org/themes/bento/images/header-logo.png" width="46" height="26" alt="Header Logo" /></a>
      <ul id="global-navigation">
        <li id="item-downloads"><a href="http://opensuse.org/sitemap#downloads">Downloads</a></li>
        <li id="item-support"><a href="http://opensuse.org/sitemap#support">Support</a></li>
        <li id="item-community"><a href="http://opensuse.org/sitemap#community">Community</a></li>
        <li id="item-development"><a href="http://opensuse.org/sitemap#development">Development</a></li>
      </ul>
    </div>
  </div>

  <div id="content" class="container_16 content-wrapper">

    <div class="column grid_3 alpha">

      <div id="search_options" class="box box-shadow alpha clear-both navigation">
          <ul class="navigation">
            <?php
            foreach ($sites as $slug => $name) {
              if ($slug == $site) $name = "<em>$name</em>";
              echo "<li><a href=\"$slug.html\">$name</a></li>";
            }
            ?>
          </ul>
      </div>
    </div>

    <div class="box box-shadow grid_13 clearfix">

      <div class="grid_13 alpha omega">

<?php require("$site.tmpl.php") ?>

      </div>
    </div>

    <!-- Note: this clears floating, set in previous elements -->
    <div class="clear"></div>

  </div>
  <!-- End: Main Content Area -->

  <!-- Start: Footer -->
  <div id="footer" class="container_16">
    <div id="footer-content" class="grid_16 alpha omega">
      <p>Want to contribute to search.opensuse.org? Fork it on <a href="http://gitorious.org/search-opensuse-org/search-opensuse-org">gitorious.org</a></p>
    </div>
    <div id="footer-legal" class="border-top grid_16">
      <p>
        &copy; 2011 Novell, Inc. All rights reserved. Novell is a registered trademark and openSUSE and SUSE are trademarks of Novell, Inc. in the United States and other countries.
      </p>
    </div>

  </div>
  <!-- End: Footer -->

</body>
</html>
