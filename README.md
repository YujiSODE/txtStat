# txtStat
the interface for text character analysis.
https://github.com/YujiSODE/txtStat

>Copyright (c) 2017 Yuji SODE \<yuji.sode@gmail.com\>  
>This software is released under the MIT License.  
>See LICENSE or http://opensource.org/licenses/mit-license.php
______

Function`txtStat(FLG95)`loads text data and make a graph of frequency against the Unicode codepoints,
and returns function that returns character analysis result.
* `FLG95`: [optional] 95% of canvas width is shown when `FLG95`= true

## Script
* `txtStat.js`

## How to use
1. To activate interface:`var y=txtStat();`  
2. To get character analysis result:`y();`  
   An object is returned as a result.

## Interface
1. __Textarea:__ a text input for analysis.  
   
2. __Color input:__ a color for a graph.  
   
3. __Load__ button; it loads text data in "__Textarea__" as a set of data.  
   
4. __Analyze__ button; it analyzes all loaded text datasets and make a graph of frequency against the Unicode  
   codepoints on canvas tag. _Optionally another canvas tag is also available to output_.  
   
5. __Clear textarea__ button; it clears only "__Textarea__".  
   
6. __Reset loaded data__ button; it clears only loaded text datasets.  
   
7. __Close__ button; it closes this interface.

## Character analysis result
This is an object returned by a function, which returned by function`txtStat()`.  
This object has 9 values:  
1. `data`: JSON formatted loaded data with a value`N`indicating a cumulative frequency of text datasets.
2. `results`:
3. `color`: color of graph.
4. `log`:
5. `xMax`:
6. `xMin`:
7. `dx`:
8. `dy`:
9. `lineWidth`:

## Optional settings
* __Setting of function`txtStat(FLG95)`__  
  `FLG95`: [optional] true | false; 95% of canvas width is shown when `FLG95`= true  
  
* __Setting of another canvas tag to output__  
  
* __Setting of change canvas width__  
  
