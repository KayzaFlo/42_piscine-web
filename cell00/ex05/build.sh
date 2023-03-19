if [ "$#" -eq 0 ]; then
	echo "No arguments supplied"
else
	set -- $@
	set -- "${@/#/ex}"
	mkdir "$@"
fi
