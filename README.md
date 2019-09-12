# Tip-calculator

Author: Dennis Krupitsky

This is small program replicating a tip calculator. The user has a simple UI in which they are prompted to enter a bill amount and percentage of tip they would like to leave. Once the submittion of data is made, the user can then see the original bill amount, tip amount based off percentage, and new bill total. The user can also switch between light/dark mode (For dark environment enthusiasts such as myself).

## Time spent
Describe the time you spent on the project.
 * Tutorials, research: 4-5 hours
 * Coding required stories: 3 hours
 * Optional and extras: 1 hour

## User stories

### Required
 * [x] User can enter total bill amount
 * [x] User can choose between at least three tip tiers (e.g. 15%, 18%, 20%) and see the total tip 
 * [x] User can see the total with tip

### Optional

 * [X] Add custom CSS to the calculator inputs
 * [X] Add a light/dark color theme toggle on the page
 * [ ] User can enter tax amount
 * [ ] Page is optimized for the viewport/browser size (i.e. scales to mobile & desktop sizes)
 * [ ] Remember the previous bill amount when the user re-opens the browser
 * [ ] Use [locale specific](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) currency and currency separators.

### Extra

 * Any extra features not mentioned?
 

## GIF Walkthrough

![Walkthrough GIF](https://media.giphy.com/media/gHVGgbjGiNz0IIc8iO/giphy.gif)


## Notes & shoutouts

This project was fun and offered a good introduction as to creating and understanding how an EmberJS project works. The UI is styled using a combination of bootstrap, custom CSS, and a bit of vanilla JS (for the night/day mode). Shoutout to Shane for providing the Ember Twiddle example, which I was able to incorporate the concept in order to make this design more modular. 


-------------------------------------------------------------------------------------------------------------------------------------

IN ORDER TO PULL AND RUN THIS PROJECT DO THE FOLLOWING

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd tip-calculator`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
