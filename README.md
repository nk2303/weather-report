This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


Formation Project - Weather Web
Estimated time: 2 hours

Description
You will be creating a simple single-page website to see the current local weather conditions and temperature. 
The following sections explain the project in more detail. The Requirements section has a list of things you can refer to to gauge how far along you are in the project. It's very important to note that this project is testing not just the code you produce, but how you continue when you get stuck on something. Therefore, some information might be intentionally vague or open-ended, and this is on purpose. If something isn't clear and you get stuck, you can change the requirements or mocks, come up with your own assumptions, or use any third-party libraries or techniques you find online to keep going.
Tools
Getting Started: Choose React (Create-React-App https://reactjs.org/docs/create-a-new-react-app.html) or Python Flask (https://flask.palletsprojects.com/en/1.1.x/quickstart/)
Material UI: UI components that make responsive and clean layouts, React.js (https://material-ui.com/) or Bootstrap (https://fezvrasta.github.io/bootstrap-material-design/)
Location: HTML5 location integration with the browser
APIs: Weather.gov api, accessed using an existing SDK Node (https://www.npmjs.com/package/weather-gov-api) or Pip (https://pypi.org/project/noaa-sdk/)
Mocks and Resources
Mocks: The following mock has two example screens. While the mocks show plenty to get started on, they are intentionally vague to test what assumptions you make, and how you adapt the mocks to different screen sizes. See the Requirements section below for a more specific list of what to build. 
https://www.dropbox.com/s/0atauz14jedig7w/weather-web-location.png?dl=0
https://www.dropbox.com/s/mwj6cmmtsf6wo19/weather-web-latlng.png?dl=0
Weather Icons: Public Domain (license free) in SVG format. You can rename the files and integrate them into your code however you want https://www.dropbox.com/s/i9m2t5ychisnd0c/weather-icons.tar?dl=0
Requirements
1) Build a single page app that visually looks as close as possible to the mocks. 
2) Show the current temperature and appropriate weather conditions icon for a selected location.
3) Allow selecting a city from a fixed list of cities of your choosing (hardcoded list).
4) Use HTML5 location API properly to use the user's current location as an additional option to simply selecting a city.
5) Use Weather.gov API for weather information and learn how to get the current temperature and weather condition (to determine the icon) for a given location. You will have to figure out how to convert a city into a format that is accepted by the API (e.g. you might have to convert a city name to latitude and longitude) and how to read the API response and map that to the available weather conditions.
6) Bonus:
- add additional weather information, such as chance of rain, temperature range for a day, wind speed and direction, etc...
- show weather for multiple days, using your own design
- make the list of cities dynamic, perhaps using an external package or API to help
Evaluation
These are example topics we might discuss during project review. These questions are open-ended and you should not prepare specific answers, they are simply a guide to what kind of discussion to expect. 
1) Does the app look like the mocks?
2) Does the code use Material UI and can the person explain why they chose the components they did?
3) Can the person explain how and why they are storing local state/data?
4) Did the person make any helper components and can they explain how/why they made them? 
5) Are external APIs used correctly and can the person explain how they work?
6) What kinds of extra features did the person add and why did they add them?
7) Did you change any of the requirements, or make additional assumptions, and why?# weather-report
