(function(){var a={};if(typeof module!="undefined"&&module.exports)module.exports=a;else if(typeof YUI!="undefined"&&YUI.add)YUI.add("central",function(b){b.Central=a},"1.0.6",{requires:[]});else if(typeof window=="object")window.Central=a;else return;var b=function(a){var b={};a.listen=function(c,d){b[c]=b[c]||[];var e=0,f=b[c];while(e<f.length&&f[e]!=f.length)e++;e==f.length&&(f[f.length]=d);return a},a.call=function(c,d){if(b[c]){var e,f=b[c];for(e=0;e<f.length;e++)try{f[e](d)}catch(g){}}return a}};a.extend=function(a){b(a);return a},a.extend(a)})()