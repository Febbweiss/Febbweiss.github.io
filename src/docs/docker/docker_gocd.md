#Docker GoCD
GoCD is a Continuous Delivery solution. This project embedded different containers such as a server and nodes.

##Embedded containers

 1. [GoCD server](https://github.com/Febbweiss/gocd-docker/tree/master/gocd-server) - The main container based on Debian image
 2. [Cloudfoundry agent](https://github.com/Febbweiss/gocd-docker/tree/master/gocd-agent-cloudfoundry) - A node to deploy on CloudFoundry based on alpine image
 3. [Docker agent](https://github.com/Febbweiss/gocd-docker/tree/master/gocd-agent-docker) - A node to build and deploy Docker containers based on docker image
 4. [Java agent](https://github.com/Febbweiss/gocd-docker/tree/master/gocd-agent-jdk8) - A node to manage Java applications (compile / build) based on alpine-oraclejdk8 image
 5. [NodeJS agent](https://github.com/Febbweiss/gocd-docker/tree/master/gocd-agent-nodejs) - A node to manage NodeJS applications (compile / build) based on Debian image
 6. [Generic agent](https://github.com/Febbweiss/gocd-docker/tree/master/gocd-agent) - A node providing Java and NodeJS applications management based on Node image
 
##Usage
The full stack is manage with docker-compose. So, to launch it, just use
```
docker-compose up
```

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0/gh-fork-ribbon.min.css" />
<!--[if lt IE 9]>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0/gh-fork-ribbon.ie.min.css" />
<![endif]-->
 <a class="github-fork-ribbon" href="https://github.com/Febbweiss/gocd-docker" target="_blank" title="Fork me on GitHub">Fork me on GitHub</a>