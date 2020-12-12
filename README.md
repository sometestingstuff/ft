# About

## Goal

Write a JavaScript package that is able to:
1. fetch an array of URLs which contain JSON data
1. return their contents in a promise

# Installation

```bash
git clone git@github.com:sometestingstuff/ft.git
npm install
```
## Run

```bash
npm start
```

## Tests
```bash
npn test
```

## Approach

The project structure was generated using a Webstorm template (NodeJS/Handlebars) since the job specification mentions both.
An endpoint was created (query) that responds to GET.  The endpoint can accept an optional parameter (urls=)
The query is issued and the promise is resolved with the contents of each query.

Example invocation:

```
http://localhost:3000
```

Using optional URLs parameter.  (URLs separated by a comma.)
```
http://localhost:3000/?urls=https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json,https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json

```

I chose to use a NodeJS 'api service layer' approach since I prefer this -- and not allow direct XHR from the browser. 
There are reasons for this including scalability, security, API versioning, standardisation (including error reporting...),  and so on.

## Dependencies

Other than the dependencies that were required for the Webstorm template, 
I used JEST as my test framework and Supertest for endpoint testing. The other dependency is the library below -- which is the main focus. 
 
## About the library

The library ('jy-ft-request-multiple-urls') is written (and published) as a simple NPM module (and called from the service layer). 
I (basically) used the same name as the instructions for clarity.

The library is a separate repo and can be found [HERE](https://github.com/sometestingstuff/jy-ft-request-multiple-urls)

I decided to just publish a simple module since the instructions seemed to imply a NPM module 

```javascript
require('request-multiple-urls');
```

### Using the library

It is invoked in the service layer like this:

```JavaScript
const requestMultipleUrls = require('request-multiple-urls');
. . . .
getFromUrls: ( urls ) => {
	return requestMultipleUrls.get( urls );
}

```

## Testing

I chose JEST as my test framework (I have used React for many years, and with that, JEST).
In addition, I use Supertest to test the endpoint and ensure that the results are correct.

I like to keep my tests and code together - and not have a separate tests folder.  




<hr />


Kind regards,


James Young,
December, 2020

