cd $(dirname $0)
node ./update.mjs
sh ./snap/build.sh
npx parcel build ./core  ./debug_protect