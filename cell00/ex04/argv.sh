if [ "$#" -eq 0 ]; then
	echo "No arguments supplied"
elif [ "$#" -gt 0 ]; then
	echo "$1"
fi
if [ "$#" -gt 1 ]; then
	echo "$2"
fi
if [ "$#" -gt 2 ]; then
	echo "$3"
fi
