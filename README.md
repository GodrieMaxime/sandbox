# Maxime Godrie Interview - Annalise.ai - Image Search

<img width="1474" alt="image" src="https://user-images.githubusercontent.com/24380407/176680172-1defae53-c244-43d7-bed1-548c3ffd000f.png">


## Notes for Interviewers

Hi guys,

I went with a simple approach of `create-react-app` coupled with `styled-components`. I have added `eslint` to the project as a default linter onSave. It has a set of rules that I like and find useful, I am aware that companies have different preferences. It also includes an `automated` accessibility rule to make sure developers write better code.
I went with a `token`, `components` and `patterns` approach which is what I call them at my current place of work. Each of the components or patterns have their own styling and testing files. I have setup a `card` component because I was going to make the images a little nicer and include a bit of description or maybe the amount of likes on each photo from the API. I have added a simple `loader` for feedback and also very basic error handling which could be improved of course.
The unit testing is done with `react-testing-library`, `jest` and `axe` for automated accessibility testing. The unit testing is simple, small and targets one area at the time incrementally. Although I haven't made full usage of `jest` assertions due to timeboxing to 3h or so, they would be really helpful when the project scales up. I am using test-ids when necessary, otherwise I like to target the elements by role with `getByRole` to avoid code bloating.
The project isn't using `Typescript` but just `PropTypes` as I thought it would be faster to set everything up in he 3 hours.
The API is handled with `Unsplash API` and `Axios`, I used `axios` to make sure it was a promise based HTTP client. 
I kept things simple running into the `App.js` and because the exercise said `screens` it wasn't too clear if you meant pages or not I have kept it on the same page but due to the single page application nature it can trick the user into thinking they are going to a separate part of the application. In design it is common to call `screens` different interactions that can happen on the same page.
The `.env` file is in the frontend although I would prefer to see the API calls happen on a third layer in the backend and not expose API keys. It isn't commited on Github and needs to be setup locally. Now I understand this is an interview but getting closer to production standards I won't be disclosing my personal key on the email or in the readme. I understand it's not ideal but it's best practice.
The website is `responsive` but by all means so much more needs to be done styling wise for me to be happy about it, although I understand it isn't the focus of the exercise ... `tokens`, `colors`, `sizes`, spacing should be using `rems` etc etc ...
Appart from that all the `tests` are passing and I tried to give it a little UI kick in the due time.



## TODO

- [ ] Create reusable api functions to fetch data
- [ ] Finish end to end testing
- [ ] Tokens for spacing and sizing 
- [ ] Compile tokens from YML to JS
- [ ] Pagination
- [ ] In depth browser testing
- [ ] Accessibility testing, voice over etc


## Getting Started

0. Create and `.env` file in the root of you folder and create an account on [https://unsplash.com/documentation](https://unsplash.com/documentation)
1. Add `REACT_APP_API_KEY='YOURKEY'` to the `.env` file.
2. `yarn install`
3. `yarn start`
4. open [http://localhost:3000](http://localhost:3000)

## Available Scripts

In the project directory, you can run : 

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

