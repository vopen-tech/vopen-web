if (Test-Path ./wwwroot) {
  Remove-Item -Path ./wwwroot -Include * -Recurse
}

 # Build the UI
Push-Location ../vopen-web
& npm install
& npm run build

 # Copy the UI artifact to wwwroot 
Copy-Item -Recurse ./build -Destination ../conferences-api/wwwroot

Pop-Location 
