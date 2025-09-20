cd $(dirname $0)
set -e
sh ./packages/data/build.sh
node ./update.mjs
sh ./packages/snap/build.sh
sh ./packages/core/build.sh
npx parcel build ./packages/debug_protect ./packages/sealant