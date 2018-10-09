
rm -rf packages
mkdir packages

for i in {1..500}; do
  cp -r ./scripts/package-template ./packages/package-$i
  sed -i "" -e "s/PACKAGE_NUM/$i/g" "./packages/package-$i/package.json"
done
