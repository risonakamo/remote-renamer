set -ex

rm -rf release
mkdir release

rm -rf build
npm run build-prod
cp -r build release

mkdir release/web
cp web/index.html release/web

cp -r assets release