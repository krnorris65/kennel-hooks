To run this application you need to:
1. Clone this repo
1. Run `npm install` from the root directory of the application
1. If you do not have `nss-json-server` installed globally run `npm i -g nss-json-server`
2. In the `api` directory create a `kennel.json` file. Use the `kennel.json.example` for reference. You must have a collection of `users` in your JSON file for login/register to work.
3. Make sure you have two tabs/windows open 
4. In one, `cd` into the `api` directory and run `nss-json-server -X 7h -p 5002 -w kennel.json`
5. In the other, run `npm start` from the root directory