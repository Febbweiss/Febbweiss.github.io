#Introduction
In this section, I introduce some small Java projects

## Rabbits vs Hunter

Source : <a href="https://github.com/Febbweiss/rabbits-vs-hunter" target="_blank" title="Fork me on GitHub">GitHub repository</a>

### Goal

This projects manages a rabbit hunt.
It's possible to change some criteria such as trees, burrows and rabbits counts.


### Building

Using maven, just execute the following command :
```
mvn clean package
```

In the new _target_ folder, you will find the _rabbits-vs-hunter-[version]-jar-with-dependencies.jar_ jar file. This jar contains all dependencies.

### Running

Execute the built jar :
```
java -jar rabbits-vs-hunter-[version]-jar-with-dependencies.jar
```

## Word lister 

Source : <a href="https://github.com/Febbweiss/word-lister" target="_blank" title="Fork me on GitHub">GitHub repository</a>

### Goal

This project prints all words in a file, one per line.
All compound words and numbers are preserved (such as _byte-input_ and _-5.52%_ for example).

### Building

Using maven, just execute the following command :
```
mvn clean package
```

In the new _target_ folder, you will find the _word-lister-[version]-jar-with-dependencies.jar_ jar file. This jar contains all dependencies.

### Running

Execute the built jar with the _--help_ parameter to display the help message.
To parse a file, execute the following command :
```
java -jar word-lister-[version]-jar-with-dependencies.jar <path_to_a_file>
```