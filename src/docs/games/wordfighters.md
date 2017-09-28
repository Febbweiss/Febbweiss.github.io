#Word Fighters

*Word Fighters* is a word game where you must find a maximum words to get the highscore.

##How to

When you click on the "Start" button, a combinaison of letters is generated.

The goal is to retrieve a maximum of words with these letters using your keyboard.

To validate a word, simply press the "Enter" key.

To get new letters, press the "Space" bar.
+ Easy : Search words between 3 and 7 letters
+ Medium : Search words between 3 and 6 letters
+ Hard : Search words between 4 and 7 letters
+ Extreme : No escape ! You can\'t have new letters before reach all words !
        
If you are blocked, you can switch letters but be careful : you loose 5 points per words not found !!

<object data="/demo/wordfighters/index.html" width="620" height="870">
    <embed src="/demo/wordfighters/index.html" width="620" height="870"> </embed>
    <iframe scrolling="no" frameborder="0" src="/demo/wordfighters/index.html" style="width: 620px; height: 870px; overflow:hidden;">
</iframe>
</object>

##Under the hood

Originally designed to run with a server, it's playable such as.
If running with a server, 2 modes are availables :
* 1 player : Try to beat your highscore. Include the *wordfighters_single.js* to enable the server pipe.
* 2 players : Try to defeat your opponent hitting him/her. The longest the word found is, the stongest damages are !! Include the *wordfighters_multplayer.js* to enable the server pipe.

Words dictionary is provided by the [Scrabble-Resolver](https://github.com/Febbweiss/scrabble-resolver) project.
Currently, only english and french dictionaries are provided.

##Credits

+ Graphics : Namco&trade; from "Super Puzzle Fighters 2" and "Super Gems Fighters
+ Code : Fabrice Ecaille aka Febbweiss
+ Tools : gameQuery


Copyright (c) 2013 Fabrice ECAILLE aka Febbweiss

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0/gh-fork-ribbon.min.css" />
<!--[if lt IE 9]>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0/gh-fork-ribbon.ie.min.css" />
<![endif]-->
 <a class="github-fork-ribbon" href="https://github.com/Febbweiss/wordfighters" target="_blank" title="Fork me on GitHub">Fork me on GitHub</a>