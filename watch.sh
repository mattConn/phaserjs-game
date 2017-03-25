while inotifywait -e close_write \
_*.js; \
do sh concat.sh; done;