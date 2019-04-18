How to Make an App in React Native

Before I start going into the step by step process, I want to point out that there are two ways to build React Native apps.  One method requires using the Expo CLI, the other requiring the React Native CLI.  The Expo CLI is easier for beginners as it was what I used when I first started building native apps, however you will be limited as to what you can do since Expo is made more for beginners.  The React Native CLI is the standard React Native installation and allows for for native code modules (Swift for iOS or Java for Android).  The following step by step process that I’ll be listing will be about my experience creating an app using the React Native command line interface.  Also it would be helpful to have yarn and brew installed since I used that to install other

Step One: Install the React Native CLI using your Terminal.  I used npm so the command looked like this "npm install -g react-native-cli".

Step Two: Run the init command to create a new project.  Before running this command make sure you’re in the directory that you’d like the app to be in.  I named my app D&D so the command I ran was react-native init D&D.

Step Three: To run your app, go into the newly created directory in your Terminal and run the command "react-native run-ios" for iOS or "react-native run-android" for Android.  Keep in mind that to run the apps you need to have the respective SDKs and emulators installed for the devices you’re trying to run.  Downloading either XCode or Android Studio will provide these.

Step Four: Open the directory you created in your text editor of choice.  Make an edit to the XML-like code in the App.js file in the root of your project.  Save your file and the app the app will refresh with your changes!

Step Five: To create a multipage app, you have to install react-navigation.  Running the command "npm install —-save react-navigation" in your project directory will allow you to use this really helpful tool!  In your App.js file, import the app navigator that you’d wish to use and instantiate a new navigator object.

Initially the App.js file is the home file, but to keep your code more organized we should create an actual home page file.  After modifying the App.js file this is what it looks once the home page code is removed.

I only have 17 lines of code in the App.js file, but it allows me to tell the app where my other pages are and which one to go to first.  Since I wasn’t able to finish my design for the Home screen, I told my app to open up on my dice page.

Laying out this app was a bit difficult at first, but the attributes that you edit for styling are very similar to editing CSS with JavaScript which I have done before.  I don’t have the extra assets for my dice page yet, but the plan is for each slot to have a different dice image and on touch it will generate a random number.

