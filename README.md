# txtStat
the interface for text character analysis.
https://github.com/YujiSODE/txtStat

>Copyright (c) 2017 Yuji SODE \<yuji.sode@gmail.com\>  
>This software is released under the MIT License.  
>See LICENSE or http://opensource.org/licenses/mit-license.php
______

Function`txtStat(FLG95)`loads text data and make a graph of frequency against the Unicode codepoints,
and returns function that returns [character analysis result](#character-analysis-result).

## Script
* `txtStat.js`

## How to use
1. To activate interface:`var y=txtStat();`  
2. To get character analysis result:`y();`  
   An [object](#character-analysis-result) is returned as a result.

## Interface
1. __Textarea:__ a text input for analysis.  
   
2. __Color input:__ a color for a graph.  
   
3. __Load__ button; it loads text data in "__Textarea__" as a set of data.  
   
4. __Analyze__ button; it analyzes all loaded text datasets and make a graph of frequency against the Unicode  
   codepoints on canvas tag. [_Optionally another canvas tag is also available to output_](#optional-settings).  
   
5. __Clear textarea__ button; it clears only "__Textarea__".  
   
6. __Reset loaded data__ button; it clears only loaded text datasets.  
   
7. __Close__ button; it closes this interface.

## Character analysis result
This is an object returned by a function, which is returned by function`txtStat(FLG95)`.  
This object has 9 values  
1. `data`: JSON formatted loaded data with a value`N`indicating a cumulative frequency of text datasets.  
   
2. `results`: a result of analysis.  
   This is an object with 4 values
   * `xMax`: the max Unicode codepoint value in datasets.
   * `xMin`: the min Unicode codepoint value in datasets.
   * `maxFreq`: the max frequency.
   * `range`: range of datasets.
   
3. `color`: color of graph.  
   
4. `log`: a timestamp.  
   
5. `xMax`: the max Unicode codepoint value in loaded text datasets.  
   This is an object with 4 values\(`x`,`x16`,`char`, and`xMaxFreq`; _see 6_\.`xMin`\).  
   
6. `xMin`: the min Unicode codepoint value in loaded text datasets.  
   `xMax`and`xMin` are objects with 4 values.
   * `x`: the Unicode codepoint value.
   * `x16`: the Unicode codepoint value in hexadecimal.
   * `char`: a character at the Unicode codepoint value.
   * `xMaxFreq`\(`xMinFreq`\): character frequency.
   
7. `dx`: true scale of x-axis.  
   
8. `dy`: true scale of y-axis.  
   
9. `lineWidth`: width of bar chart.

## Optional settings
* __Setting of function`txtStat(FLG95)`__  
  `FLG95`: true | false; 95% of canvas width is shown when `FLG95`= true  
  
* __Setting of another canvas tag to output__  
  A valid id of another canvas tag can be input when __Analyze__ button is clicked.  
  [Character analysis result](#character-analysis-result) is overwritten by result of another canvas tag when input id is valid.
* __Setting of change canvas width__  
  
