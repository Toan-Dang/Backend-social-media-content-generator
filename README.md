# Backend Social Media Content Generator

## Importance
I don't publicize my private keys for Firebase, Twilio, and Gemini API.

This is my repo FE: [Frontend Social Media Content Generator](https://github.com/Toan-Dang/social-media-content-generator)

This is all my screenshop of my website: [Screen shot](https://www.figma.com/design/wJzstV4tQZK2Thh78BR3dr/Untitled?node-id=0-1&t=I3eoSbSj8ew7PS60-1)

I have deployed my website to firebase hosting and you can test it: https://content-generator-98bba.web.app/

Because my Twilio account is in Free Trial, I can't send access codes to any phone number except those verified in my account. Please use the access code 000000 to test.

## About the Project
This project uses TypeScript + Express with Firebase Cloud Functions to run the API. I have created three modules (auth, content, profile), each module has its own controller, service, and repository. The response of the API has been customized with my format.

## To Run the Project Locally
1. At the `/functions` directory, make a `.env` file based on `.example.env`, and replace your information about Firebase, Twilio, and Gemini.
2. Run the command:
```sh
cd functions
```

3. Install node_modules:
```sh
npm install
```

4. Install Firebase CLI & login:
```sh
npm install -g firebase-tools
firebase login
```

5. Start the project:
```sh
npm run serve
```

## Project Structure

### Root Directory
- **.firebaserc**: Configuration file for Firebase projects.
- **.gitattributes**: Attributes file for Git to manage repository behaviors.
- **.gitignore**: Specifies files and directories that should be ignored by Git.
- **firebase.json**: Configuration file for Firebase CLI.
- **firestore.indexes.json**: Index configuration for Firestore.
- **firestore.rules**: Security rules for Firestore.
- **README.md**: Project's README file.

### .github/workflows
Contains GitHub Actions workflows for continuous integration and deployment:
- **firebase-hosting-merge.yml**
- **firebase-hosting-pull-request.yml**

### functions Directory
Contains the main backend code for Firebase Cloud Functions:
- **.env**: Environment variables file (not to be committed).
- **.eslintrc.js**: ESLint configuration for linting the TypeScript code.
- **.example.env**: Example environment variables file for reference.
- **.gitignore**: Specifies files and directories to be ignored by Git within the functions directory.
- **firebase-debug.log**: Log file for Firebase debugging.
- **package-lock.json**: Automatically generated file for locking dependencies versions.
- **package.json**: Lists the project dependencies and scripts.
- **tsconfig.dev.json**: TypeScript configuration file for development.
- **tsconfig.json**: TypeScript configuration file.

#### src Directory
Contains the source code of the application:
- **index.ts**: Entry point for the Firebase Cloud Functions.

##### config Directory
Contains configuration files for various services:
- **config.ts**: General configuration settings.
- **firebase.ts**: Configuration for Firebase.
- **gemini.ts**: Configuration for Gemini API.
- **twilio.ts**: Configuration for Twilio API.

##### module Directory
Contains the different modules of the application, each with its own MVC structure:

###### auth Module
Handles authentication-related functionalities:
- **auth.controller.ts**: Manages the HTTP requests for authentication.
- **auth.interface.ts**: Defines TypeScript interfaces for the authentication module.
- **auth.repository.ts**: Handles data interactions for authentication.
- **auth.routes.ts**: Defines the routes for authentication.
- **auth.service.ts**: Contains the business logic for authentication.

###### content Module
Handles content-related functionalities:
- **content.controller.ts**: Manages the HTTP requests for content.
- **content.repository.ts**: Handles data interactions for content.
- **content.routes.ts**: Defines the routes for content.
- **content.service.ts**: Contains the business logic for content.

###### profile Module
Handles profile-related functionalities:
- **profile.controller.ts**: Manages the HTTP requests for profile.
- **profile.repository.ts**: Handles data interactions for profile.
- **profile.routes.ts**: Defines the routes for profile.
- **profile.service.ts**: Contains the business logic for profile.

##### utils Directory
Contains utility functions used across the application:
- **constants.util.ts**: Defines constants used throughout the application.
- **response.utils.ts**: Utility functions for handling API responses.

This structure ensures that your project is well-organized, making it easier to maintain and scale. Each module is self-contained with its own controller, service, and repository, following the MVC (Model-View-Controller) pattern. Configuration files are separated, and utilities are centralized, promoting reusability and clean code practices.
