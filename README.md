# Angular with NativeScript app  - READ ME

This file is created to layout the steps for installation and starting the app as well as the most important parts of the Application explained on high level.

## Installation  

**Prerequisites**

 - Installed [Node.js](https://nodejs.org/en/)
 - Installed command line tool NativeScript CLI - `npm install -g nativescript`
 - Configure [iOS and Android requirements](https://docs.nativescript.org/angular/start/quick-setup#step-2-install-ios-and-android-requirements) 
 - Physical device Android or iOS, or emulator.



**Installation Steps**

 1. Open CLI (command line interface)
 2. Navigate to the project folder
 3. run `tns run <platform>`, can be android or ios (ex. `tns run android` or `tns run ios`)
 4. The app will run in development mode. You may have to wait a minute while your project bundles and loads for the first time.
 
## App description

- This application is built using NativeScript 7 and Angular.
- In the application has Login screen (Sign in and Sign up), where once the user logs in successfully its routed to the Home screen
- There is a home screen with bottom tabs for navigation. 
- The bottom tabs have navigation for 3 screens (List, Camera, Location)
- The List screen shows list of photos from a jsonPlaceholder API.
- The Camera screen allows the user to take a photo with the device and display the photo on the screen
- The Location screen offers a Google map
  
