#!/bin/bash
git add .

mess="Committing some more changes"
if [ $1 ]
then
	mess=$1
fi
git commit -m "$mess"
git push raspberry master
