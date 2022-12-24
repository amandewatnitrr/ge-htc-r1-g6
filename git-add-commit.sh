#!/bin/bash
echo "Adding and commiting files"


while [ "$1" != "" ] && [ "$1" != "-m" ]; do
	#Prints file name being added
	echo "Adding to staging area $1"
	#Adds file
	git add "$1"
	#Go next parameter
	shift
done
#if theres a -m just shift
if [ "$1" == "-m" ]
then
	shift
fi
#if the last parameter -> blank -> return error, else -> commit -> last parameter as message
if [ "$1" == "" ]
then
	echo "Error: The commit message is empty, the files where added but no commit will be performed."
else
	git commit -m "$1"
fi

# Use the command bash git-add-commit.sh . -m "Your Message" to commit to this repository