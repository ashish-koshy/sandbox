# Sandbox - Debugging, Testing & Experimentation

This is a code sandbox to experiment with or test code.
Run `npm install` to resolve all your package dependencies.

# Executing code

Run `npm start` to run all mocha tests and validate the code.

# Debugging + testing in 'watch' mode

Add your code in typescript language along with any relavant
tests under the `src` directory. (Preferably under a folder
with a short name of the problem you want to solve).

To start debugging (following TDD - Test Driven Development):

1. To transpile and watch your TS file, execute:
   `npm run compile <path to your main.ts file>`:
   e.g: `npm run compile src/letter-box/main.ts`

2. To run the associated tests in watch mode execute the following
   in parallel inside a new CLI window:
   `npm test <path to your mocha test.js file>`:
   e.g: `npm test src/letter-box/test.js`
