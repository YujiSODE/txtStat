# txtStat
the interface for text character analysis.
https://github.com/YujiSODE/txtStat

>Copyright (c) 2017 Yuji SODE \<yuji.sode@gmail.com\>  
>This software is released under the MIT License.  
>See LICENSE or http://opensource.org/licenses/mit-license.php
______

Function`txtStat(FLG95)`loads text data and make a graph of frequency against the Unicode codepoints,
and returns function that returns character analysis result.

* `FLG95`: [optional] true | false; 95% of canvas width is shown when `FLG95`= true

## Script
* `txtStat.js`
## How to use
To activate interface:`var y=txtStat();`  
To get character analysis result:`y();`
## Interface
1. __Textarea:__ a text input for analysis.
2. __Color input:__ a color for a graph.
3. __Load button:__ loading text data in __Textarea__ as a set of data.
4. __
