cd $(dirname $0)
set -e
sh ./data/build.sh
node ./update.mjs
sh ./snap/build.sh
npx parcel build ./core  ./debug_protect ./sealant