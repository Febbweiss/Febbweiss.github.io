#Introduction [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url]
Cloudbudget is a work-in-progress online Money-like application.

It's written using ExpressJS and provided only REST services. The web interface is in a different project [CloudBugdet-AngularJS](/development/cloudbudget_angularjs).

##Requirements
CloudBudget needs a Mongo database. Database configuration is done in the _config/db.js_ file.

The environment mode is defined by the environment variable NODE_ENV.

##Features
The following features are developed:

* API security done with JWT
* API documentation
* User log on / log in
* User deregistration
* Bank account CRUD
* Bank accounts listing
* Deposit / Bill entry CRUD
* Deposit / Bill entries listing

##Usage
To initialize the application, install all dependencies with
```
npm install
```

To launch CloudBudget, use the following command :
```
NODE_ENV=development node app.js
```

If the PORT environment variable is set, it will be used, if not, the default port is 3000.
The server configuration is done with the _config/server.js_ file.

##API documentation
The root URL is linked to the API documentation.
The API documentation is generated with apidocs into the _public_ folder. To generate it, use the following command :
```
npm run-script generate-doc
```

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0/gh-fork-ribbon.min.css" />
<!--[if lt IE 9]>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0/gh-fork-ribbon.ie.min.css" />
<![endif]-->
 <a class="github-fork-ribbon" href="https://github.com/Febbweiss/CloudBudget" target="_blank" title="Fork me on GitHub">Fork me on GitHub</a>
 
 [build-image]: https://travis-ci.org/Febbweiss/CloudBudget.svg?branch=master
[build-url]: https://travis-ci.org/Febbweiss/CloudBudget
[coverage-image]:https://coveralls.io/repos/Febbweiss/CloudBudget/badge.svg?branch=master&service=github
[coverage-url]: https://coveralls.io/github/Febbweiss/CloudBudget?branch=master