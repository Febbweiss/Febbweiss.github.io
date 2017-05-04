#Introduction [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url]
Cloudbudget-AngularJS is a work-in-progress web application for [CloudBugdet](/development/cloudbudget) written in AngularJS.

##Requirements
CloudBudget-AngularJS needs a running CloudBudget instance. The access to this instance is set in the _public/js/app.js_ file with the _HOST_ variable.


##Features
This web application covers all CloudBudget features.

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


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0/gh-fork-ribbon.min.css" />
<!--[if lt IE 9]>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0/gh-fork-ribbon.ie.min.css" />
<![endif]-->
 <a class="github-fork-ribbon" href="https://github.com/Febbweiss/CloudBudget-AngularJS" target="_blank" title="Fork me on GitHub">Fork me on GitHub</a>
 
 [build-image]: https://travis-ci.org/Febbweiss/CloudBudget-AngularJS.svg?branch=master
[build-url]: https://travis-ci.org/Febbweiss/CloudBudget-AngularJS
[coverage-image]:https://coveralls.io/repos/Febbweiss/CloudBudget-AngularJS/badge.svg?branch=master&service=github
[coverage-url]: https://coveralls.io/github/Febbweiss/CloudBudget-AngularJS?branch=master