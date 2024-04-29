Introduction of HTML:
   (Hypertext Markup Language) uses a markup system composed of elements which represent specific
content. Markup means that with HTML you declare what is presented to a viewer, not how it is presented. Visual
representations are defined by Cascading Style Sheets (CSS) and realized by browsers. Still existing elements that
allow for such, like e.g. font, "are entirely obsolete, and must not be used by authors"[1].
HTML is sometimes called a programming language but it has no logic, so is a markup language. HTML tags
provide semantic meaning and machine-readability to the content in the page.
An element usually consists of an opening tag (<element_name>), a closing tag (</element_name>), which contain the
element's name surrounded by angle brackets, and the content in between:
<element_name>...content...</element_name>
There are some HTML elements that don't have a closing tag or any contents. These are called void elements. Void
elements include <img>, <meta>, <link> and <input>.
Element names can be thought of as descriptive keywords for the content they contain, such as video, audio,table, footer.

Element Examples: video, audio, table, footer
Tags: <video>, <audio>, <table>, <footer>, </html>, </body>

Introduction of JSON: 
      (JavaScript Object Notation)  is a simple, text-based way to store and transmit structured data. By using a simple syntax,
the user can easily store anything from a single number through to strings, arrays, and objects using nothing but a string of plain text.
You can also nest arrays and objects, allowing you to create complex data structures.

Why use JSON? 
    * Since the JSON format is text only, it can easily be sent to and from a server, and used as a data format by any programming language.
    * For IBM MQ, setting the message's Format attribute to 'MQSTR' (String) then when the receiving application performs an 'MQGET with Convert', 
      MQ will convert the text from one CCSID to another CCSID. i.e. ASCII to EBCDIC

JSON Object Syntax:
    * Unordered sets of name/value pairs
    * Starts with { (left brace)
    * Ends with } (right brace)
    * Each name is followed by : (colon) and then its value
    * Name/value pairs are separated by , (comma).

Note : HTML referred in https://books.goalkicker.com/HTML5Book/
       JavaScript referred in https://books.goalkicker.com/JavaScriptBook/

       ********** END *********
  
      


