cd ..
cmd.exe /c npm run build
cd example
cmd.exe /c npx tsc
node dist/index.js
