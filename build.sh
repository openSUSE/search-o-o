#!/usr/bin/bash

OUTDIR="output"

mkdir -p $OUTDIR

php -f index.php | while read site; do
	php -f index.php $site > $OUTDIR/$site.html
done
