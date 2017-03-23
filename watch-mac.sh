fswatch -o _preload.js \
_create.js \
_update.js \
| xargs -n1 sh concat.sh;