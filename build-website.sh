# Delete everything in the wwwroot folder
rm -rf ./wwwroot/*

# Build the website, installing the node modules if it doesn't exist
cd ./website
if [ ! -d "node_modules" ]; then
  npm ci
fi
npm run build

# Copy the website artifact to wwwroot 
cp -r ./build/* ../wwwroot/
