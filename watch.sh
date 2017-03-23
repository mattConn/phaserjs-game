while inotifywait -e close_write \
_preload.js \
_create.js \
_update.js; \
do sh concat.sh; done;
