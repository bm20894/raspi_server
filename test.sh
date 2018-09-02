#!/bin/bash

mess="hello world"
if [ $1 ]
then
	mess=$1
fi

echo $mess
