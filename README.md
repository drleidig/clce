# clce
Common Logic Controlled English parser

* Implements John Sowa's grammar for Common Logic Controlled English
[Specification](http://www.jfsowa.com/clce/specs.htm).
* Just the parser
* Written in Scheme

## Running the Scheme version

1. Install Gambit Scheme
2. Git clone the project
3. cd to project directory
4. gsi clce-scm
5. Type in your CLCE Sentence.

## Running the Javascript Version

It is possible to run the parser in a Web browser. The Scheme sources are translated to Javascript by [Scheme2Js](http://www-sop.inria.fr/mimosa/scheme2js/)

1. Browse to the [clce.html](https://drleidig.github.io/clce/clce.html)
2. Enter your sentence into the textarea and press "Parse"
3. The parsed syntax tree is shown in the second textarea.


