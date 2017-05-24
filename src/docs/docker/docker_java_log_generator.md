#Docker Java log generator
This is a simple Docker container to provide Java logs with some exception stacktraces.
It's based on [log-generator](https://github.com/Febbweiss/log-generator)

The default behaviour is the following :
```
java -jar /log-generator-0.0.2.jar -n 15 -r 1000
```
The endless generated file is located in /var/log/java/app.log.


##Licences

Copyright (c) 2017 Fabrice ECAILLE aka Febbweiss

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0/gh-fork-ribbon.min.css" />
<!--[if lt IE 9]>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0/gh-fork-ribbon.ie.min.css" />
<![endif]-->
 <a class="github-fork-ribbon" href="https://github.com/Febbweiss/docker-java-log-generator" target="_blank" title="Fork me on GitHub">Fork me on GitHub</a>