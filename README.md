# Log4NetReader
Angular 4 project for reading log4net mssql database tables

# Requirements
Angular cli v1.0.0
dotnet core v1.1.1

1) Edit your connection string in the api appsettings.json file, 
The project can be set up to seed your database with the correct tables 
by uncommenting the initializedatabase call in the startup.cs

open Log4NetReader.Client
run > npm install
ng build -env=prod (this will compile project and place output in dotnet core api wwwroot project)
The port for prod is 5000 and is what dotnet run runs on.

open Log4NetReader.Api
run > dotnet restore
run > dotnet run

*do not type run > with the above commands

This will have the site all running on http://localhost:5000 

Debugging and Developing
If you would like to debug the angular project run the ng serve command from the client directory
this will start the application on port 4200 (note that google chrome will not let you 
browse across ports to your api so you must start it in a less secure mode

windows run:
chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

if you are debugging in visual studio the site is set up to proxy the http request from one site to the other
click to run the site directly and do not run through iis to see the logs in console.
