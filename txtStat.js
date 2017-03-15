/*txtStat
* txtStat.js
*
*    Copyright (c) 2017 Yuji SODE <yuji.sode@gmail.com>
*
*    This software is released under the MIT License.
*    See LICENSE or http://opensource.org/licenses/mit-license.php
*/
//the interface for text character analysis.
/*
* FLG95: true|false; 95% of canvas width is shown when FLG95=true
* this function returns function, that returns character analysis result
*/
function txtStat(FLG95){
    FLG95=!!FLG95;
    //============================================================================
    var slf=window,r9=slf.Math.random().toFixed(9).replace(/\./g,''),
        bd=slf.document.getElementsByTagName('body')[0],_log,fm,stat,txtA,
        i=0,B=[],_rgb='#0000ff',_data={N:0},_size,cvsFlg,cvs,cvs2Id,rm,
        //this function is element generator
        f=function(elName,elId,targetId){
            var t=slf.document.getElementById(targetId),E=slf.document.createElement(elName);
            E.id=elId;
            return t.appendChild(E);
        },
        //this function returns the decimal logarithm of a given number
        Log10=function(n){
            if(n<0){return NaN;}
            return Math.log(n)*Math.LOG10E;
        },
        //this function returns function that returns result of character count as object
        txtCnt=function(){
            //o.N is number of all characters
            var o={N:0},i=0,n=0;
            return function(txt){
                n=txt.length,i=0;
                o.N+=n;
                while(i<n){
                    //o[Unicode code point value]=[character,frequency,hexadecimal code]
                    if(!o[txt[i].codePointAt(0)]){
                        o[txt[i].codePointAt(0)]=[txt[i],1,'U+'+txt[i].codePointAt(0).toString(16)];
                    }else{
                        o[txt[i].codePointAt(0)][1]+=1;
                    }
                    i+=1;
                }
                return o;
            };
        },
        //this function returns the max and min value, and the max frequency
        //o is object
        objMax=function(o){
            //max and min: the max and min Unicode code point value in the given object
            //freq: the max frequency in the given object
            var max=0,freq=0,min=0;
            for(var el in o){
                if(el!='N'){
                    max=max<+el?+el:max;
                    freq=freq<o[el][1]?o[el][1]:freq;
                }
            }
            min=max;
            for(var el in o){
                if(el!='N'){
                    min=min>+el?+el:min;
                }
            }
            return {xMax:+max,xMin:+min,maxFreq:+freq,range:max-min+1};
        },
        //this function draws a graph, and returns log object
        getGraph=function(canvasId,data,rgb,size){
            var c=slf.document.getElementById(canvasId).getContext('2d'),
                cw=c.canvas.width,ch=c.canvas.height,i=0,d=0,
                dx=(size.range!=0)?(cw*0.95)/size.range:0,
                dy=(size.maxFreq!=0)?(ch*0.95)/size.maxFreq:0;
            d=!(dx<1)?dx:-Log10(dx);
            c.strokeStyle=rgb,c.lineWidth=d,c.beginPath();
            for(var el in data){
                if(el!='N'){
                    c.moveTo((el-size.xMin+0.5)*dx,ch),c.lineTo((el-size.xMin+0.5)*dx,ch-data[el][1]*dy);
                }
            }
            c.stroke();
            //95% line; when FLG95=true
            if(FLG95){
                c.strokeStyle='#000',c.lineWidth=1,c.setLineDash([5,10]),c.beginPath();
                c.moveTo(cw*0.95,ch),c.lineTo(cw*0.95,0);
                c.stroke(),c.setLineDash([0]);
                c.fillText('95% canvas width',cw*0.65,ch*0.1);
            }
            //returned object
            return {
                data:slf.JSON.stringify(data),
                results:size,
                color:rgb,
                log:slf.Date(),
                xMax:{x:size.xMax,x16:data[size.xMax][2],char:data[size.xMax][0]},
                xMin:{x:size.xMin,x16:data[size.xMin][2],char:data[size.xMin][0]},
                dx:dx,
                dy:dy,
                lineWidth:d
            };
        };
    //============================================================================
    bd.id='bd'+r9;
    //form
    fm=f('form','fm'+r9,bd.id);
    bd.removeAttribute('id');
    stat=txtCnt();
    //textarea for input
    txtA=f('textarea','txtA'+r9,fm.id),txtA.wrap='off';
    while(i<6){
        //input tags: button and color
        B[i]=f('input','B'+i+'_'+r9,fm.id),B[i].type=i!=0?'button':'color',B[i].value=['#0000ff','Load','Analyze','Clear textarea','Reset loaded data','Close'][i],i+=1;
    }
    //color picker
    B[0].addEventListener('change',function(){
        _rgb=B[0].value;
    },true);
    //button to load a text data
    B[1].addEventListener('click',function(){
        _data=stat(`${txtA.value}`);
    },true);
    //button to analyze all text data
    B[2].addEventListener('click',function(){
        if(_data.N>0){
            _size=objMax(_data);
            //canvas
            cvsFlg=slf.document.getElementById('txtStat_cvs'+r9);
            cvs=!cvsFlg?f('canvas','txtStat_cvs'+r9,fm.id):cvs;
            //style for canvas
            if(!cvsFlg){
                cvs.style.cssText='background:#ffff;border:1px solid #000f;width:48vw;height:48vh';
            }
            //reset canvas
            cvs.width=cvs.width;
            //draw and log
            _log=getGraph('txtStat_cvs'+r9,_data,_rgb,_size);
            //=== <optional graph: draw the graph result on another canvas> ===
            cvs2Id=slf.prompt('[optional] id of another canvas?');
            if(!!cvs2Id){
                if(!!slf.document.getElementById(cvs2Id)){
                    getGraph(cvs2Id,_data,_rgb,_size);
                }
            }
            //=== </optional graph> ===
        }
    },true);
    //button to clear textarea
    B[3].addEventListener('click',function(){
        txtA.value="";
    },true);
    //button to reset loaded text data
    B[4].addEventListener('click',function(){
        stat=txtCnt(),_data={N:0};
    },true);
    //button to close this form
    B[5].addEventListener('click',function(){
        rm=fm.parentNode.removeChild(fm),rm=null;
    },true);
    //============================================================================
    //this function returns character analysis result
    return function(){
        return _log;
    };
}
