cd $(dirname $0)
node ./update.mjs
npx parcel build ./core ./snap ./debug_protect