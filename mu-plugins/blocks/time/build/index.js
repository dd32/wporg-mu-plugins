(()=>{"use strict";var e={894:(e,t,r)=>{var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){for(var t=arguments.length,a=arguments,s=null,i=e,o=a[1].length,c=0,u=1,l=0,h=[],m=[],d="undefined"!=typeof window?window:r.g;c<o;){for(;u<t;)h[l++]=a[u++][c];if(l=0,u=1,e){if("string"==typeof e)i=d[e];else if("object"===(void 0===e?"undefined":n(e))&&e.length){if(void 0===(s="string"==typeof e[0]?d[e[0]]:e[0]))throw new Error("Object not found: "+e[0]);i="string"==typeof e[1]?s[e[1]]:e[1]}m[c++]=i.apply(s,h)}else m[c++]=h;h=[]}return m}},925:e=>{e.exports=function(e,t,r){return e>0&&e<13&&r>0&&r<32768&&t>0&&t<=new Date(r,e,0).getDate()}},205:e=>{e.exports=function(e,t){var r=void 0,n=void 0,a=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"],s=/\\?(.?)/gi,i=function(e,t){return n[e]?n[e]():t},o=function(e,t){for(e=String(e);e.length<t;)e="0"+e;return e};return n={d:function(){return o(n.j(),2)},D:function(){return n.l().slice(0,3)},j:function(){return r.getDate()},l:function(){return a[n.w()]+"day"},N:function(){return n.w()||7},S:function(){var e=n.j(),t=e%10;return t<=3&&1===parseInt(e%100/10,10)&&(t=0),["st","nd","rd"][t-1]||"th"},w:function(){return r.getDay()},z:function(){var e=new Date(n.Y(),n.n()-1,n.j()),t=new Date(n.Y(),0,1);return Math.round((e-t)/864e5)},W:function(){var e=new Date(n.Y(),n.n()-1,n.j()-n.N()+3),t=new Date(e.getFullYear(),0,4);return o(1+Math.round((e-t)/864e5/7),2)},F:function(){return a[6+n.n()]},m:function(){return o(n.n(),2)},M:function(){return n.F().slice(0,3)},n:function(){return r.getMonth()+1},t:function(){return new Date(n.Y(),n.n(),0).getDate()},L:function(){var e=n.Y();return e%4==0&e%100!=0|e%400==0},o:function(){var e=n.n(),t=n.W();return n.Y()+(12===e&&t<9?1:1===e&&t>9?-1:0)},Y:function(){return r.getFullYear()},y:function(){return n.Y().toString().slice(-2)},a:function(){return r.getHours()>11?"pm":"am"},A:function(){return n.a().toUpperCase()},B:function(){var e=3600*r.getUTCHours(),t=60*r.getUTCMinutes(),n=r.getUTCSeconds();return o(Math.floor((e+t+n+3600)/86.4)%1e3,3)},g:function(){return n.G()%12||12},G:function(){return r.getHours()},h:function(){return o(n.g(),2)},H:function(){return o(n.G(),2)},i:function(){return o(r.getMinutes(),2)},s:function(){return o(r.getSeconds(),2)},u:function(){return o(1e3*r.getMilliseconds(),6)},e:function(){throw new Error("Not supported (see source code of date() for timezone on how to add support)")},I:function(){return new Date(n.Y(),0)-Date.UTC(n.Y(),0)!=new Date(n.Y(),6)-Date.UTC(n.Y(),6)?1:0},O:function(){var e=r.getTimezoneOffset(),t=Math.abs(e);return(e>0?"-":"+")+o(100*Math.floor(t/60)+t%60,4)},P:function(){var e=n.O();return e.substr(0,3)+":"+e.substr(3,2)},T:function(){return"UTC"},Z:function(){return 60*-r.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(s,i)},r:function(){return"D, d M Y H:i:s O".replace(s,i)},U:function(){return r/1e3|0}},function(e,t){return r=void 0===t?new Date:t instanceof Date?new Date(t):new Date(1e3*t),e.replace(s,i)}(e,t)}},701:(e,t,r)=>{e.exports=function(e){var t=r(50),n=void 0;try{n=t(e)}catch(e){n=!1}if(!n)return!1;var a=new Date(1e3*n),s={};return s.year=a.getFullYear(),s.month=a.getMonth()+1,s.day=a.getDate(),s.hour=a.getHours(),s.minute=a.getMinutes(),s.second=a.getSeconds(),s.fraction=parseFloat("0."+a.getMilliseconds()),s.is_localtime=0!==a.getTimezoneOffset(),s}},169:e=>{e.exports=function(e){var t=void 0===e?new Date:e instanceof Date?new Date(e):new Date(1e3*e),r=t.getDay(),n=t.getMonth(),a=t.getFullYear(),s={};return s.seconds=t.getSeconds(),s.minutes=t.getMinutes(),s.hours=t.getHours(),s.mday=t.getDate(),s.wday=r,s.mon=n+1,s.year=a,s.yday=Math.floor((t-new Date(a,0,1))/864e5),s.weekday=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"][r]+"day",s.month=["January","February","March","April","May","June","July","August","September","October","November","December"][n],s[0]=parseInt(t.getTime()/1e3,10),s}},851:e=>{e.exports=function(e){var t,r=new Date;return e?r.getTime()/1e3:(t=r.getFullYear(),{sec:r.getUTCSeconds(),usec:1e3*r.getUTCMilliseconds(),minuteswest:r.getTimezoneOffset(),dsttime:0+(new Date(t,0)-Date.UTC(t,0)!=new Date(t,6)-Date.UTC(t,6))})}},513:(e,t,r)=>{e.exports=function(e,t){var n=r(205),a=void 0===t?new Date:t instanceof Date?new Date(t):new Date(1e3*t);return n(e,t=Date.parse(a.toUTCString().slice(0,-4))/1e3)}},408:e=>{e.exports=function(){var e=new Date,t=arguments,r=0,n=["Hours","Minutes","Seconds","Month","Date","FullYear"];for(r=0;r<n.length;r++)if(void 0===t[r])t[r]=e["getUTC"+n[r]](),t[r]+=3===r;else if(t[r]=parseInt(t[r],10),isNaN(t[r]))return!1;t[5]+=t[5]>=0?t[5]<=69?2e3:t[5]<=100?1900:0:0,e.setUTCFullYear(t[5],t[3]-1,t[4]),e.setUTCHours(t[0],t[1],t[2]);var a=e.getTime();return(a/1e3>>0)-(a<0)}},223:(e,t,r)=>{e.exports=function(e,t){var n=r(35),a=void 0===t?new Date:t instanceof Date?new Date(t):new Date(1e3*t);return n(e,t=Date.parse(a.toUTCString().slice(0,-4))/1e3)}},730:e=>{e.exports=function(e,t){if(void 0===e)throw new Error("idate() expects at least 1 parameter, 0 given");if(!e.length||e.length>1)throw new Error("idate format is one char");var r=void 0===t?new Date:t instanceof Date?new Date(t):new Date(1e3*t),n=void 0;switch(e){case"B":return Math.floor((3600*r.getUTCHours()+60*r.getUTCMinutes()+r.getUTCSeconds()+3600)/86.4)%1e3;case"d":return r.getDate();case"h":return r.getHours()%12||12;case"H":return r.getHours();case"i":return r.getMinutes();case"I":return n=r.getFullYear(),0+(new Date(n,0)-Date.UTC(n,0)!=new Date(n,6)-Date.UTC(n,6));case"L":return 3&(n=r.getFullYear())||!(n%100)&&n%400?0:1;case"m":return r.getMonth()+1;case"s":return r.getSeconds();case"t":return new Date(r.getFullYear(),r.getMonth()+1,0).getDate();case"U":return Math.round(r.getTime()/1e3);case"w":return r.getDay();case"W":return n=new Date(r.getFullYear(),r.getMonth(),r.getDate()-(r.getDay()||7)+3),1+Math.round((n-new Date(n.getFullYear(),0,4))/864e5/7);case"y":return parseInt((r.getFullYear()+"").slice(2),10);case"Y":return r.getFullYear();case"z":return Math.floor((r-new Date(r.getFullYear(),0,1))/864e5);case"Z":return 60*-r.getTimezoneOffset();default:throw new Error("Unrecognized _date format token")}}},549:(e,t,r)=>{r(925),r(205),r(701),r(169),r(851),e.exports.gmdate=r(513),r(408),r(223),r(730),r(792),r(916),r(35),r(69),e.exports.strtotime=r(50),r(316)},792:e=>{e.exports=function(e){var t=void 0,r=void 0;return"undefined"!=typeof performance&&performance.now&&performance.timing?(r=(performance.now()+performance.timing.navigationStart)/1e3,e?r:(t=0|r,Math.round(1e6*(r-t))/1e6+" "+t)):(r=(Date.now?Date.now():(new Date).getTime())/1e3,e?r:(t=0|r,Math.round(1e3*(r-t))/1e3+" "+t))}},916:e=>{e.exports=function(){var e=new Date,t=arguments,r=0,n=["Hours","Minutes","Seconds","Month","Date","FullYear"];for(r=0;r<n.length;r++)if(void 0===t[r])t[r]=e["get"+n[r]](),t[r]+=3===r;else if(t[r]=parseInt(t[r],10),isNaN(t[r]))return!1;t[5]+=t[5]>=0?t[5]<=69?2e3:t[5]<=100?1900:0:0,e.setFullYear(t[5],t[3]-1,t[4]),e.setHours(t[0],t[1],t[2]);var a=e.getTime();return(a/1e3>>0)-(a<0)}},35:(e,t,r)=>{var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e,t){var a=r(904),s="undefined"!=typeof window?window:r.g;s.$locutus=s.$locutus||{};var i=s.$locutus;a("LC_ALL",0);for(var o=function(e,t,r){for(void 0===r&&(r=10);parseInt(e,10)<r&&r>1;r/=10)e=t.toString()+e;return e.toString()},c=i.php.localeCategories.LC_TIME,u=i.php.locales[c].LC_TIME,l={a:function(e){return u.a[e.getDay()]},A:function(e){return u.A[e.getDay()]},b:function(e){return u.b[e.getMonth()]},B:function(e){return u.B[e.getMonth()]},C:function(e){return o(parseInt(e.getFullYear()/100,10),0)},d:["getDate","0"],e:["getDate"," "],g:function(e){return o(parseInt(this.G(e)/100,10),0)},G:function(e){var t=e.getFullYear(),r=parseInt(l.V(e),10),n=parseInt(l.W(e),10);return n>r?t++:0===n&&r>=52&&t--,t},H:["getHours","0"],I:function(e){var t=e.getHours()%12;return o(0===t?12:t,0)},j:function(e){var t=e-new Date(e.getFullYear()+"/1/1 GMT");t+=6e4*e.getTimezoneOffset();var r=parseInt(t/6e4/60/24,10)+1;return o(r,0,100)},k:["getHours","0"],l:function(e){var t=e.getHours()%12;return o(0===t?12:t," ")},m:function(e){return o(e.getMonth()+1,0)},M:["getMinutes","0"],p:function(e){return u.p[e.getHours()>=12?1:0]},P:function(e){return u.P[e.getHours()>=12?1:0]},s:function(e){return Date.parse(e)/1e3},S:["getSeconds","0"],u:function(e){var t=e.getDay();return 0===t?7:t},U:function(e){var t=parseInt(l.j(e),10),r=6-e.getDay(),n=parseInt((t+r)/7,10);return o(n,0)},V:function(e){var t=parseInt(l.W(e),10),r=new Date(e.getFullYear()+"/1/1").getDay(),n=t+(r>4||r<=1?0:1);return 53===n&&new Date(e.getFullYear()+"/12/31").getDay()<4?n=1:0===n&&(n=l.V(new Date(e.getFullYear()-1+"/12/31"))),o(n,0)},w:"getDay",W:function(e){var t=parseInt(l.j(e),10),r=7-l.u(e),n=parseInt((t+r)/7,10);return o(n,0,10)},y:function(e){return o(e.getFullYear()%100,0)},Y:"getFullYear",z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+o(parseInt(Math.abs(t/60),10),0)+o(t%60,0)},Z:function(e){return e.toString().replace(/^.*\(([^)]+)\)$/,"$1")},"%":function(e){return"%"}},h=void 0===t?new Date:t instanceof Date?new Date(t):new Date(1e3*t),m={c:"locale",D:"%m/%d/%y",F:"%y-%m-%d",h:"%b",n:"\n",r:"locale",R:"%H:%M",t:"\t",T:"%H:%M:%S",x:"locale",X:"locale"};e.match(/%[cDFhnrRtTxX]/);)e=e.replace(/%([cDFhnrRtTxX])/g,(function(e,t){var r=m[t];return"locale"===r?u[t]:r}));return e.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g,(function(e,t){var r=l[t];return"string"==typeof r?h[r]():"function"==typeof r?r(h):"object"===(void 0===r?"undefined":n(r))&&"string"==typeof r[0]?o(h[r[0]](),r[1]):t}))}},69:(e,t,r)=>{e.exports=function(e,t){var n=r(904),a=r(894),s={tm_sec:0,tm_min:0,tm_hour:0,tm_mday:0,tm_mon:0,tm_year:0,tm_wday:0,tm_yday:0,unparsed:""},i=0,o=0,c=0,u=!1,l=function(e,t){var r,n=s,a=e;n.tm_sec=a.getUTCSeconds(),n.tm_min=a.getUTCMinutes(),n.tm_hour=a.getUTCHours(),n.tm_mday=0===t?t:a.getUTCDate(),n.tm_mon=a.getUTCMonth(),n.tm_year=a.getUTCFullYear()-1900,n.tm_wday=0===t?a.getUTCDay()>0?a.getUTCDay()-1:6:a.getUTCDay(),r=new Date(Date.UTC(a.getUTCFullYear(),0,1)),n.tm_yday=Math.ceil((a-r)/864e5)},h=function(){var e=s;return l(new Date(Date.UTC(e.tm_year+1900,e.tm_mon,e.tm_mday||1,e.tm_hour,e.tm_min,e.tm_sec)),e.tm_mday)},m=/\S/,d=/\s/,p={c:"locale",D:"%m/%d/%y",F:"%y-%m-%d",r:"locale",R:"%H:%M",T:"%H:%M:%S",x:"locale",X:"locale"},g=function(e){return(e+"").replace(/([\\.+*?[^\]$(){}=!<>|:])/g,"\\$1")};n("LC_ALL",0);var f="undefined"!=typeof window?window:r.g;f.$locutus=f.$locutus||{};for(var y=f.$locutus,w=y.php.localeCategories.LC_TIME,b=y.php.locales[w].LC_TIME;t.match(/%[cDFhnrRtTxX]/);)t=t.replace(/%([cDFhnrRtTxX])/g,(function(e,t){var r=p[t];return"locale"===r?b[t]:r}));var x=function(t,r,n){"string"==typeof r&&(r=new RegExp("^"+r,"i"));var a=e.slice(t),s=r.exec(a);if(null===(s?n.apply(null,s):null))throw new Error("No match in string");return t+s[0].length},_=function(e,t,r){return x(e,a(g,b[t]).join("|"),(function(e){var n=b[t].search(new RegExp("^"+g(e)+"$","i"));n&&(s[r]=n[0])}))};for(i=0,o=0;i<t.length;i++)if("%"===t.charAt(i)){var v=["%","n","t"].indexOf(t.charAt(i+1));if(-1!==v){if(["%","\n","\t"].indexOf(e.charAt(o))===v){++i,++o;continue}return!1}var T=t.charAt(i+1);try{switch(T){case"a":case"A":o=_(o,T,"tm_wday");break;case"h":case"b":o=_(o,"b","tm_mon"),h();break;case"B":o=_(o,T,"tm_mon"),h();break;case"C":o=x(o,/^\d?\d/,(function(e){var t=100*(parseInt(e,10)-19);s.tm_year=t,h(),s.tm_yday||(s.tm_yday=-1)}));break;case"d":case"e":o=x(o,"d"===T?/^(0[1-9]|[1-2]\d|3[0-1])/:/^([1-2]\d|3[0-1]|[1-9])/,(function(e){var t=parseInt(e,10);s.tm_mday=t,h()}));break;case"g":case"G":case"U":case"V":case"W":case"z":case"Z":break;case"H":o=x(o,/^([0-1]\d|2[0-3])/,(function(e){var t=parseInt(e,10);s.tm_hour=t}));break;case"l":case"I":o=x(o,"l"===T?/^([1-9]|1[0-2])/:/^(0[1-9]|1[0-2])/,(function(e){var t=parseInt(e,10)-1+c;s.tm_hour=t,u=!0}));break;case"j":o=x(o,/^(00[1-9]|0[1-9]\d|[1-2]\d\d|3[0-6][0-6])/,(function(e){var t=parseInt(e,10)-1;s.tm_yday=t}));break;case"m":o=x(o,/^(0[1-9]|1[0-2])/,(function(e){var t=parseInt(e,10)-1;s.tm_mon=t,h()}));break;case"M":o=x(o,/^[0-5]\d/,(function(e){var t=parseInt(e,10);s.tm_min=t}));break;case"P":return!1;case"p":o=x(o,/^(am|pm)/i,(function(e){c=/a/.test(e)?0:12,u&&(s.tm_hour+=c)}));break;case"s":o=x(o,/^\d+/,(function(e){var t=parseInt(e,10),r=new Date(Date.UTC(1e3*t));l(r)}));break;case"S":o=x(o,/^[0-5]\d/,(function(e){var t=parseInt(e,10);s.tm_sec=t}));break;case"u":case"w":o=x(o,/^\d/,(function(e){s.tm_wday=e-("u"===T)}));break;case"y":o=x(o,/^\d?\d/,(function(e){var t=(e=parseInt(e,10))>=69?e:e+100;s.tm_year=t,h(),s.tm_yday||(s.tm_yday=-1)}));break;case"Y":o=x(o,/^\d{1,4}/,(function(e){var t=parseInt(e,10)-1900;s.tm_year=t,h(),s.tm_yday||(s.tm_yday=-1)}));break;default:throw new Error("Unrecognized formatting character in strptime()")}}catch(e){if("No match in string"===e)return!1}++i}else if(t.charAt(i)!==e.charAt(o)){if(-1!==e.charAt(o).search(d))o++,i--;else if(-1!==t.charAt(i).search(m))return!1}else o++;return s.unparsed=e.slice(o),s}},50:e=>{var t="[ \\t]+",r="[ \\t]*",n="(?:([ap])\\.?m\\.?([\\t ]|$))",a="(2[0-4]|[01]?[0-9])",s="([01][0-9]|2[0-4])",i="(0?[1-9]|1[0-2])",o="([0-5]?[0-9])",c="([0-5][0-9])",u="(60|[0-5]?[0-9])",l="(60|[0-5][0-9])",h="(?:\\.([0-9]+))",m="sunday|monday|tuesday|wednesday|thursday|friday|saturday",d="sun|mon|tue|wed|thu|fri|sat",p=m+"|"+d+"|weekdays?",g="first|second|third|fourth|fifth|sixth|seventh|eighth?|ninth|tenth|eleventh|twelfth",f="next|last|previous|this",y="(?:second|sec|minute|min|hour|day|fortnight|forthnight|month|year)s?|weeks|"+p,w="([0-9]{1,4})",b="([0-9]{4})",x="(1[0-2]|0?[0-9])",_="(0[0-9]|1[0-2])",v="(?:(3[01]|[0-2]?[0-9])(?:st|nd|rd|th)?)",T="(0[0-9]|[1-2][0-9]|3[01])",k="january|february|march|april|may|june|july|august|september|october|november|december",C="jan|feb|mar|apr|may|jun|jul|aug|sept?|oct|nov|dec",D="("+k+"|"+C+"|i[vx]|vi{0,3}|xi{0,2}|i{1,3})",E="((?:GMT)?([+-])"+a+":?"+o+"?)",M=D+"[ .\\t-]*"+v+"[,.stndrh\\t ]*";function S(e,t){switch(t=t&&t.toLowerCase()){case"a":e+=12===e?-12:0;break;case"p":e+=12!==e?12:0}return e}function N(e){var t=+e;return e.length<4&&t<100&&(t+=t<70?2e3:1900),t}function R(e){return{jan:0,january:0,i:0,feb:1,february:1,ii:1,mar:2,march:2,iii:2,apr:3,april:3,iv:3,may:4,v:4,jun:5,june:5,vi:5,jul:6,july:6,vii:6,aug:7,august:7,viii:7,sep:8,sept:8,september:8,ix:8,oct:9,october:9,x:9,nov:10,november:10,xi:10,dec:11,december:11,xii:11}[e.toLowerCase()]}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{mon:1,monday:1,tue:2,tuesday:2,wed:3,wednesday:3,thu:4,thursday:4,fri:5,friday:5,sat:6,saturday:6,sun:0,sunday:0}[e.toLowerCase()]||t}function Y(e,t){if(!(e=e&&e.match(/(?:GMT)?([+-])(\d+)(:?)(\d{0,2})/i)))return t;var r="-"===e[1]?-1:1,n=+e[2],a=+e[4];return e[4]||e[3]||(a=Math.floor(n%100),n=Math.floor(n/100)),r*(60*n+a)*60}var A={acdt:37800,acst:34200,addt:-7200,adt:-10800,aedt:39600,aest:36e3,ahdt:-32400,ahst:-36e3,akdt:-28800,akst:-32400,amt:-13840,apt:-10800,ast:-14400,awdt:32400,awst:28800,awt:-10800,bdst:7200,bdt:-36e3,bmt:-14309,bst:3600,cast:34200,cat:7200,cddt:-14400,cdt:-18e3,cemt:10800,cest:7200,cet:3600,cmt:-15408,cpt:-18e3,cst:-21600,cwt:-18e3,chst:36e3,dmt:-1521,eat:10800,eddt:-10800,edt:-14400,eest:10800,eet:7200,emt:-26248,ept:-14400,est:-18e3,ewt:-14400,ffmt:-14660,fmt:-4056,gdt:39600,gmt:0,gst:36e3,hdt:-34200,hkst:32400,hkt:28800,hmt:-19776,hpt:-34200,hst:-36e3,hwt:-34200,iddt:14400,idt:10800,imt:25025,ist:7200,jdt:36e3,jmt:8440,jst:32400,kdt:36e3,kmt:5736,kst:30600,lst:9394,mddt:-18e3,mdst:16279,mdt:-21600,mest:7200,met:3600,mmt:9017,mpt:-21600,msd:14400,msk:10800,mst:-25200,mwt:-21600,nddt:-5400,ndt:-9052,npt:-9e3,nst:-12600,nwt:-9e3,nzdt:46800,nzmt:41400,nzst:43200,pddt:-21600,pdt:-25200,pkst:21600,pkt:18e3,plmt:25590,pmt:-13236,ppmt:-17340,ppt:-25200,pst:-28800,pwt:-25200,qmt:-18840,rmt:5794,sast:7200,sdmt:-16800,sjmt:-20173,smt:-13884,sst:-39600,tbmt:10751,tmt:12344,uct:0,utc:0,wast:7200,wat:3600,wemt:7200,west:3600,wet:0,wib:25200,wita:28800,wit:32400,wmt:5040,yddt:-25200,ydt:-28800,ypt:-28800,yst:-32400,ywt:-28800,a:3600,b:7200,c:10800,d:14400,e:18e3,f:21600,g:25200,h:28800,i:32400,k:36e3,l:39600,m:43200,n:-3600,o:-7200,p:-10800,q:-14400,r:-18e3,s:-21600,t:-25200,u:-28800,v:-32400,w:-36e3,x:-39600,y:-43200,z:0},F={yesterday:{regex:/^yesterday/i,name:"yesterday",callback:function(){return this.rd-=1,this.resetTime()}},now:{regex:/^now/i,name:"now"},noon:{regex:/^noon/i,name:"noon",callback:function(){return this.resetTime()&&this.time(12,0,0,0)}},midnightOrToday:{regex:/^(midnight|today)/i,name:"midnight | today",callback:function(){return this.resetTime()}},tomorrow:{regex:/^tomorrow/i,name:"tomorrow",callback:function(){return this.rd+=1,this.resetTime()}},timestamp:{regex:/^@(-?\d+)/i,name:"timestamp",callback:function(e,t){return this.rs+=+t,this.y=1970,this.m=0,this.d=1,this.dates=0,this.resetTime()&&this.zone(0)}},firstOrLastDay:{regex:/^(first|last) day of/i,name:"firstdayof | lastdayof",callback:function(e,t){"first"===t.toLowerCase()?this.firstOrLastDayOfMonth=1:this.firstOrLastDayOfMonth=-1}},backOrFrontOf:{regex:RegExp("^(back|front) of "+a+r+n+"?","i"),name:"backof | frontof",callback:function(e,t,r,n){var a=+r,s=15;return"back"===t.toLowerCase()||(a-=1,s=45),a=S(a,n),this.resetTime()&&this.time(a,s,0,0)}},weekdayOf:{regex:RegExp("^("+g+"|"+f+")"+t+"("+m+"|"+d+")"+t+"of","i"),name:"weekdayof"},mssqltime:{regex:RegExp("^"+i+":"+c+":"+l+"[:.]([0-9]+)"+n,"i"),name:"mssqltime",callback:function(e,t,r,n,a,s){return this.time(S(+t,s),+r,+n,+a.substr(0,3))}},timeLong12:{regex:RegExp("^"+i+"[:.]"+o+"[:.]"+l+r+n,"i"),name:"timelong12",callback:function(e,t,r,n,a){return this.time(S(+t,a),+r,+n,0)}},timeShort12:{regex:RegExp("^"+i+"[:.]"+c+r+n,"i"),name:"timeshort12",callback:function(e,t,r,n){return this.time(S(+t,n),+r,0,0)}},timeTiny12:{regex:RegExp("^"+i+r+n,"i"),name:"timetiny12",callback:function(e,t,r){return this.time(S(+t,r),0,0,0)}},soap:{regex:RegExp("^"+b+"-"+_+"-"+T+"T"+s+":"+c+":"+l+h+E+"?","i"),name:"soap",callback:function(e,t,r,n,a,s,i,o,c){return this.ymd(+t,r-1,+n)&&this.time(+a,+s,+i,+o.substr(0,3))&&this.zone(Y(c))}},wddx:{regex:RegExp("^"+b+"-"+x+"-"+v+"T"+a+":"+o+":"+u),name:"wddx",callback:function(e,t,r,n,a,s,i){return this.ymd(+t,r-1,+n)&&this.time(+a,+s,+i,0)}},exif:{regex:RegExp("^"+b+":"+_+":"+T+" "+s+":"+c+":"+l,"i"),name:"exif",callback:function(e,t,r,n,a,s,i){return this.ymd(+t,r-1,+n)&&this.time(+a,+s,+i,0)}},xmlRpc:{regex:RegExp("^"+b+_+T+"T"+a+":"+c+":"+l),name:"xmlrpc",callback:function(e,t,r,n,a,s,i){return this.ymd(+t,r-1,+n)&&this.time(+a,+s,+i,0)}},xmlRpcNoColon:{regex:RegExp("^"+b+_+T+"[Tt]"+a+c+l),name:"xmlrpcnocolon",callback:function(e,t,r,n,a,s,i){return this.ymd(+t,r-1,+n)&&this.time(+a,+s,+i,0)}},clf:{regex:RegExp("^"+v+"/("+C+")/"+b+":"+s+":"+c+":"+l+t+E,"i"),name:"clf",callback:function(e,t,r,n,a,s,i,o){return this.ymd(+n,R(r),+t)&&this.time(+a,+s,+i,0)&&this.zone(Y(o))}},iso8601long:{regex:RegExp("^t?"+a+"[:.]"+o+"[:.]"+u+h,"i"),name:"iso8601long",callback:function(e,t,r,n,a){return this.time(+t,+r,+n,+a.substr(0,3))}},dateTextual:{regex:RegExp("^"+D+"[ .\\t-]*"+v+"[,.stndrh\\t ]+"+w,"i"),name:"datetextual",callback:function(e,t,r,n){return this.ymd(N(n),R(t),+r)}},pointedDate4:{regex:RegExp("^"+v+"[.\\t-]"+x+"[.-]"+b),name:"pointeddate4",callback:function(e,t,r,n){return this.ymd(+n,r-1,+t)}},pointedDate2:{regex:RegExp("^"+v+"[.\\t]"+x+"\\.([0-9]{2})"),name:"pointeddate2",callback:function(e,t,r,n){return this.ymd(N(n),r-1,+t)}},timeLong24:{regex:RegExp("^t?"+a+"[:.]"+o+"[:.]"+u),name:"timelong24",callback:function(e,t,r,n){return this.time(+t,+r,+n,0)}},dateNoColon:{regex:RegExp("^"+b+_+T),name:"datenocolon",callback:function(e,t,r,n){return this.ymd(+t,r-1,+n)}},pgydotd:{regex:RegExp("^"+b+"\\.?(00[1-9]|0[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6])"),name:"pgydotd",callback:function(e,t,r){return this.ymd(+t,0,+r)}},timeShort24:{regex:RegExp("^t?"+a+"[:.]"+o,"i"),name:"timeshort24",callback:function(e,t,r){return this.time(+t,+r,0,0)}},iso8601noColon:{regex:RegExp("^t?"+s+c+l,"i"),name:"iso8601nocolon",callback:function(e,t,r,n){return this.time(+t,+r,+n,0)}},iso8601dateSlash:{regex:RegExp("^"+b+"/"+_+"/"+T+"/"),name:"iso8601dateslash",callback:function(e,t,r,n){return this.ymd(+t,r-1,+n)}},dateSlash:{regex:RegExp("^"+b+"/"+x+"/"+v),name:"dateslash",callback:function(e,t,r,n){return this.ymd(+t,r-1,+n)}},american:{regex:RegExp("^"+x+"/"+v+"/"+w),name:"american",callback:function(e,t,r,n){return this.ymd(N(n),t-1,+r)}},americanShort:{regex:RegExp("^"+x+"/"+v),name:"americanshort",callback:function(e,t,r){return this.ymd(this.y,t-1,+r)}},gnuDateShortOrIso8601date2:{regex:RegExp("^"+w+"-"+x+"-"+v),name:"gnudateshort | iso8601date2",callback:function(e,t,r,n){return this.ymd(N(t),r-1,+n)}},iso8601date4:{regex:RegExp("^([+-]?[0-9]{4})-"+_+"-"+T),name:"iso8601date4",callback:function(e,t,r,n){return this.ymd(+t,r-1,+n)}},gnuNoColon:{regex:RegExp("^t?"+s+c,"i"),name:"gnunocolon",callback:function(e,t,r){switch(this.times){case 0:return this.time(+t,+r,0,this.f);case 1:return this.y=100*t+ +r,this.times++,!0;default:return!1}}},gnuDateShorter:{regex:RegExp("^"+b+"-"+x),name:"gnudateshorter",callback:function(e,t,r){return this.ymd(+t,r-1,1)}},pgTextReverse:{regex:RegExp("^(\\d{3,4}|[4-9]\\d|3[2-9])-("+C+")-"+T,"i"),name:"pgtextreverse",callback:function(e,t,r,n){return this.ymd(N(t),R(r),+n)}},dateFull:{regex:RegExp("^"+v+"[ \\t.-]*"+D+"[ \\t.-]*"+w,"i"),name:"datefull",callback:function(e,t,r,n){return this.ymd(N(n),R(r),+t)}},dateNoDay:{regex:RegExp("^"+D+"[ .\\t-]*"+b,"i"),name:"datenoday",callback:function(e,t,r){return this.ymd(+r,R(t),1)}},dateNoDayRev:{regex:RegExp("^"+b+"[ .\\t-]*"+D,"i"),name:"datenodayrev",callback:function(e,t,r){return this.ymd(+t,R(r),1)}},pgTextShort:{regex:RegExp("^("+C+")-"+T+"-"+w,"i"),name:"pgtextshort",callback:function(e,t,r,n){return this.ymd(N(n),R(t),+r)}},dateNoYear:{regex:RegExp("^"+M,"i"),name:"datenoyear",callback:function(e,t,r){return this.ymd(this.y,R(t),+r)}},dateNoYearRev:{regex:RegExp("^"+v+"[ .\\t-]*"+D,"i"),name:"datenoyearrev",callback:function(e,t,r){return this.ymd(this.y,R(r),+t)}},isoWeekDay:{regex:RegExp("^"+b+"-?W(0[1-9]|[1-4][0-9]|5[0-3])(?:-?([0-7]))?"),name:"isoweekday | isoweek",callback:function(e,t,r,n){if(n=n?+n:1,!this.ymd(+t,0,1))return!1;var a=new Date(this.y,this.m,this.d).getDay();a=0-(a>4?a-7:a),this.rd+=a+7*(r-1)+n}},relativeText:{regex:RegExp("^("+g+"|"+f+")"+t+"("+y+")","i"),name:"relativetext",callback:function(e,t,r){var n,a={amount:{last:-1,previous:-1,this:0,first:1,next:1,second:2,third:3,fourth:4,fifth:5,sixth:6,seventh:7,eight:8,eighth:8,ninth:9,tenth:10,eleventh:11,twelfth:12}[n=t.toLowerCase()],behavior:{this:1}[n]||0}.amount;switch(r.toLowerCase()){case"sec":case"secs":case"second":case"seconds":this.rs+=a;break;case"min":case"mins":case"minute":case"minutes":this.ri+=a;break;case"hour":case"hours":this.rh+=a;break;case"day":case"days":this.rd+=a;break;case"fortnight":case"fortnights":case"forthnight":case"forthnights":this.rd+=14*a;break;case"week":case"weeks":this.rd+=7*a;break;case"month":case"months":this.rm+=a;break;case"year":case"years":this.ry+=a;break;case"mon":case"monday":case"tue":case"tuesday":case"wed":case"wednesday":case"thu":case"thursday":case"fri":case"friday":case"sat":case"saturday":case"sun":case"sunday":this.resetTime(),this.weekday=L(r,7),this.weekdayBehavior=1,this.rd+=7*(a>0?a-1:a)}}},relative:{regex:RegExp("^([+-]*)[ \\t]*(\\d+)"+r+"("+y+"|week)","i"),name:"relative",callback:function(e,t,r,n){var a=t.replace(/[^-]/g,"").length,s=+r*Math.pow(-1,a);switch(n.toLowerCase()){case"sec":case"secs":case"second":case"seconds":this.rs+=s;break;case"min":case"mins":case"minute":case"minutes":this.ri+=s;break;case"hour":case"hours":this.rh+=s;break;case"day":case"days":this.rd+=s;break;case"fortnight":case"fortnights":case"forthnight":case"forthnights":this.rd+=14*s;break;case"week":case"weeks":this.rd+=7*s;break;case"month":case"months":this.rm+=s;break;case"year":case"years":this.ry+=s;break;case"mon":case"monday":case"tue":case"tuesday":case"wed":case"wednesday":case"thu":case"thursday":case"fri":case"friday":case"sat":case"saturday":case"sun":case"sunday":this.resetTime(),this.weekday=L(n,7),this.weekdayBehavior=1,this.rd+=7*(s>0?s-1:s)}}},dayText:{regex:RegExp("^("+p+")","i"),name:"daytext",callback:function(e,t){this.resetTime(),this.weekday=L(t,0),2!==this.weekdayBehavior&&(this.weekdayBehavior=1)}},relativeTextWeek:{regex:RegExp("^("+f+")"+t+"week","i"),name:"relativetextweek",callback:function(e,t){switch(this.weekdayBehavior=2,t.toLowerCase()){case"this":this.rd+=0;break;case"next":this.rd+=7;break;case"last":case"previous":this.rd-=7}isNaN(this.weekday)&&(this.weekday=1)}},monthFullOrMonthAbbr:{regex:RegExp("^("+k+"|"+C+")","i"),name:"monthfull | monthabbr",callback:function(e,t){return this.ymd(this.y,R(t),this.d)}},tzCorrection:{regex:RegExp("^"+E,"i"),name:"tzcorrection",callback:function(e){return this.zone(Y(e))}},tzAbbr:{regex:RegExp("^\\(?([a-zA-Z]{1,6})\\)?"),name:"tzabbr",callback:function(e,t){var r=A[t.toLowerCase()];return!isNaN(r)&&this.zone(r)}},ago:{regex:/^ago/i,name:"ago",callback:function(){this.ry=-this.ry,this.rm=-this.rm,this.rd=-this.rd,this.rh=-this.rh,this.ri=-this.ri,this.rs=-this.rs,this.rf=-this.rf}},year4:{regex:RegExp("^"+b),name:"year4",callback:function(e,t){return this.y=+t,!0}},whitespace:{regex:/^[ .,\t]+/,name:"whitespace"},dateShortWithTimeLong:{regex:RegExp("^"+M+"t?"+a+"[:.]"+o+"[:.]"+u,"i"),name:"dateshortwithtimelong",callback:function(e,t,r,n,a,s){return this.ymd(this.y,R(t),+r)&&this.time(+n,+a,+s,0)}},dateShortWithTimeLong12:{regex:RegExp("^"+M+i+"[:.]"+o+"[:.]"+l+r+n,"i"),name:"dateshortwithtimelong12",callback:function(e,t,r,n,a,s,i){return this.ymd(this.y,R(t),+r)&&this.time(S(+n,i),+a,+s,0)}},dateShortWithTimeShort:{regex:RegExp("^"+M+"t?"+a+"[:.]"+o,"i"),name:"dateshortwithtimeshort",callback:function(e,t,r,n,a){return this.ymd(this.y,R(t),+r)&&this.time(+n,+a,0,0)}},dateShortWithTimeShort12:{regex:RegExp("^"+M+i+"[:.]"+c+r+n,"i"),name:"dateshortwithtimeshort12",callback:function(e,t,r,n,a,s){return this.ymd(this.y,R(t),+r)&&this.time(S(+n,s),+a,0,0)}}},I={y:NaN,m:NaN,d:NaN,h:NaN,i:NaN,s:NaN,f:NaN,ry:0,rm:0,rd:0,rh:0,ri:0,rs:0,rf:0,weekday:NaN,weekdayBehavior:0,firstOrLastDayOfMonth:0,z:NaN,dates:0,times:0,zones:0,ymd:function(e,t,r){return!(this.dates>0||(this.dates++,this.y=e,this.m=t,this.d=r,0))},time:function(e,t,r,n){return!(this.times>0||(this.times++,this.h=e,this.i=t,this.s=r,this.f=n,0))},resetTime:function(){return this.h=0,this.i=0,this.s=0,this.f=0,this.times=0,!0},zone:function(e){return this.zones<=1&&(this.zones++,this.z=e,!0)},toDate:function(e){switch(this.dates&&!this.times&&(this.h=this.i=this.s=this.f=0),isNaN(this.y)&&(this.y=e.getFullYear()),isNaN(this.m)&&(this.m=e.getMonth()),isNaN(this.d)&&(this.d=e.getDate()),isNaN(this.h)&&(this.h=e.getHours()),isNaN(this.i)&&(this.i=e.getMinutes()),isNaN(this.s)&&(this.s=e.getSeconds()),isNaN(this.f)&&(this.f=e.getMilliseconds()),this.firstOrLastDayOfMonth){case 1:this.d=1;break;case-1:this.d=0,this.m+=1}if(!isNaN(this.weekday)){var t=new Date(e.getTime());t.setFullYear(this.y,this.m,this.d),t.setHours(this.h,this.i,this.s,this.f);var r=t.getDay();if(2===this.weekdayBehavior)0===r&&0!==this.weekday&&(this.weekday=-6),0===this.weekday&&0!==r&&(this.weekday=7),this.d-=r,this.d+=this.weekday;else{var n=this.weekday-r;(this.rd<0&&n<0||this.rd>=0&&n<=-this.weekdayBehavior)&&(n+=7),this.weekday>=0?this.d+=n:this.d-=7-(Math.abs(this.weekday)-r),this.weekday=NaN}}this.y+=this.ry,this.m+=this.rm,this.d+=this.rd,this.h+=this.rh,this.i+=this.ri,this.s+=this.rs,this.f+=this.rf,this.ry=this.rm=this.rd=0,this.rh=this.ri=this.rs=this.rf=0;var a=new Date(e.getTime());switch(a.setFullYear(this.y,this.m,this.d),a.setHours(this.h,this.i,this.s,this.f),this.firstOrLastDayOfMonth){case 1:a.setDate(1);break;case-1:a.setMonth(a.getMonth()+1,0)}return isNaN(this.z)||a.getTimezoneOffset()===this.z||(a.setUTCFullYear(a.getFullYear(),a.getMonth(),a.getDate()),a.setUTCHours(a.getHours(),a.getMinutes(),a.getSeconds()-this.z,a.getMilliseconds())),a}};e.exports=function(e,t){null==t&&(t=Math.floor(Date.now()/1e3));for(var r=[F.yesterday,F.now,F.noon,F.midnightOrToday,F.tomorrow,F.timestamp,F.firstOrLastDay,F.backOrFrontOf,F.timeTiny12,F.timeShort12,F.timeLong12,F.mssqltime,F.timeShort24,F.timeLong24,F.iso8601long,F.gnuNoColon,F.iso8601noColon,F.americanShort,F.american,F.iso8601date4,F.iso8601dateSlash,F.dateSlash,F.gnuDateShortOrIso8601date2,F.gnuDateShorter,F.dateFull,F.pointedDate4,F.pointedDate2,F.dateNoDay,F.dateNoDayRev,F.dateTextual,F.dateNoYear,F.dateNoYearRev,F.dateNoColon,F.xmlRpc,F.xmlRpcNoColon,F.soap,F.wddx,F.exif,F.pgydotd,F.isoWeekDay,F.pgTextShort,F.pgTextReverse,F.clf,F.year4,F.ago,F.dayText,F.relativeTextWeek,F.relativeText,F.monthFullOrMonthAbbr,F.tzCorrection,F.tzAbbr,F.dateShortWithTimeShort12,F.dateShortWithTimeLong12,F.dateShortWithTimeShort,F.dateShortWithTimeLong,F.relative,F.whitespace],n=Object.create(I);e.length;){for(var a=null,s=null,i=0,o=r.length;i<o;i++){var c=r[i],u=e.match(c.regex);u&&(!a||u[0].length>a[0].length)&&(a=u,s=c)}if(!s||s.callback&&!1===s.callback.apply(n,a))return!1;e=e.substr(a[0].length),s=null,a=null}return Math.floor(n.toDate(new Date(1e3*t))/1e3)}},316:e=>{e.exports=function(){return Math.floor((new Date).getTime()/1e3)}},697:e=>{e.exports=function(e){return!("undefined"!=typeof process||!process.env||!process.env[e])&&process.env[e]}},904:(e,t,r)=>{var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e,t){var a=r(697),s="",i=[],o=0,c=function e(t){if(t instanceof RegExp)return new RegExp(t);if(t instanceof Date)return new Date(t);var r={};for(var a in t)"object"===n(t[a])?r[a]=e(t[a]):r[a]=t[a];return r},u="undefined"!=typeof window?window:r.g;u.$locutus=u.$locutus||{};var l=u.$locutus;if(l.php=l.php||{},l.php.locales&&l.php.locales.fr_CA&&l.php.locales.fr_CA.LC_TIME&&l.php.locales.fr_CA.LC_TIME.x||(l.php.locales={},l.php.locales.en={LC_COLLATE:function(e,t){return e===t?0:e>t?1:-1},LC_CTYPE:{an:/^[A-Za-z\d]+$/g,al:/^[A-Za-z]+$/g,ct:/^[\u0000-\u001F\u007F]+$/g,dg:/^[\d]+$/g,gr:/^[\u0021-\u007E]+$/g,lw:/^[a-z]+$/g,pr:/^[\u0020-\u007E]+$/g,pu:/^[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+$/g,sp:/^[\f\n\r\t\v ]+$/g,up:/^[A-Z]+$/g,xd:/^[A-Fa-f\d]+$/g,CODESET:"UTF-8",lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"},LC_TIME:{a:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],B:["January","February","March","April","May","June","July","August","September","October","November","December"],c:"%a %d %b %Y %r %Z",p:["AM","PM"],P:["am","pm"],r:"%I:%M:%S %p",x:"%m/%d/%Y",X:"%r",alt_digits:"",ERA:"",ERA_YEAR:"",ERA_D_T_FMT:"",ERA_D_FMT:"",ERA_T_FMT:""},LC_MONETARY:{int_curr_symbol:"USD",currency_symbol:"$",mon_decimal_point:".",mon_thousands_sep:",",mon_grouping:[3],positive_sign:"",negative_sign:"-",int_frac_digits:2,frac_digits:2,p_cs_precedes:1,p_sep_by_space:0,n_cs_precedes:1,n_sep_by_space:0,p_sign_posn:3,n_sign_posn:0},LC_NUMERIC:{decimal_point:".",thousands_sep:",",grouping:[3]},LC_MESSAGES:{YESEXPR:"^[yY].*",NOEXPR:"^[nN].*",YESSTR:"",NOSTR:""},nplurals:function(e){return 1!==e?1:0}},l.php.locales.en_US=c(l.php.locales.en),l.php.locales.en_US.LC_TIME.c="%a %d %b %Y %r %Z",l.php.locales.en_US.LC_TIME.x="%D",l.php.locales.en_US.LC_TIME.X="%r",l.php.locales.en_US.LC_MONETARY.int_curr_symbol="USD ",l.php.locales.en_US.LC_MONETARY.p_sign_posn=1,l.php.locales.en_US.LC_MONETARY.n_sign_posn=1,l.php.locales.en_US.LC_MONETARY.mon_grouping=[3,3],l.php.locales.en_US.LC_NUMERIC.thousands_sep="",l.php.locales.en_US.LC_NUMERIC.grouping=[],l.php.locales.en_GB=c(l.php.locales.en),l.php.locales.en_GB.LC_TIME.r="%l:%M:%S %P %Z",l.php.locales.en_AU=c(l.php.locales.en_GB),l.php.locales.C=c(l.php.locales.en),l.php.locales.C.LC_CTYPE.CODESET="ANSI_X3.4-1968",l.php.locales.C.LC_MONETARY={int_curr_symbol:"",currency_symbol:"",mon_decimal_point:"",mon_thousands_sep:"",mon_grouping:[],p_cs_precedes:127,p_sep_by_space:127,n_cs_precedes:127,n_sep_by_space:127,p_sign_posn:127,n_sign_posn:127,positive_sign:"",negative_sign:"",int_frac_digits:127,frac_digits:127},l.php.locales.C.LC_NUMERIC={decimal_point:".",thousands_sep:"",grouping:[]},l.php.locales.C.LC_TIME.c="%a %b %e %H:%M:%S %Y",l.php.locales.C.LC_TIME.x="%m/%d/%y",l.php.locales.C.LC_TIME.X="%H:%M:%S",l.php.locales.C.LC_MESSAGES.YESEXPR="^[yY]",l.php.locales.C.LC_MESSAGES.NOEXPR="^[nN]",l.php.locales.fr=c(l.php.locales.en),l.php.locales.fr.nplurals=function(e){return e>1?1:0},l.php.locales.fr.LC_TIME.a=["dim","lun","mar","mer","jeu","ven","sam"],l.php.locales.fr.LC_TIME.A=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],l.php.locales.fr.LC_TIME.b=["jan","fév","mar","avr","mai","jun","jui","aoû","sep","oct","nov","déc"],l.php.locales.fr.LC_TIME.B=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],l.php.locales.fr.LC_TIME.c="%a %d %b %Y %T %Z",l.php.locales.fr.LC_TIME.p=["",""],l.php.locales.fr.LC_TIME.P=["",""],l.php.locales.fr.LC_TIME.x="%d.%m.%Y",l.php.locales.fr.LC_TIME.X="%T",l.php.locales.fr_CA=c(l.php.locales.fr),l.php.locales.fr_CA.LC_TIME.x="%Y-%m-%d"),!l.php.locale&&(l.php.locale="en_US","undefined"!=typeof window&&window.document)){var h=window.document,m="https://www.w3.org/1999/xhtml",d="https://www.w3.org/XML/1998/namespace";h.getElementsByTagNameNS&&h.getElementsByTagNameNS(m,"html")[0]?h.getElementsByTagNameNS(m,"html")[0].getAttributeNS&&h.getElementsByTagNameNS(m,"html")[0].getAttributeNS(d,"lang")?l.php.locale=h.getElementsByTagName(m,"html")[0].getAttributeNS(d,"lang"):h.getElementsByTagNameNS(m,"html")[0].lang&&(l.php.locale=h.getElementsByTagNameNS(m,"html")[0].lang):h.getElementsByTagName("html")[0]&&h.getElementsByTagName("html")[0].lang&&(l.php.locale=h.getElementsByTagName("html")[0].lang)}if(l.php.locale=l.php.locale.replace("-","_"),l.php.locale in l.php.locales||l.php.locale.replace(/_[a-zA-Z]+$/,"")in l.php.locales&&(l.php.locale=l.php.locale.replace(/_[a-zA-Z]+$/,"")),l.php.localeCategories||(l.php.localeCategories={LC_COLLATE:l.php.locale,LC_CTYPE:l.php.locale,LC_MONETARY:l.php.locale,LC_NUMERIC:l.php.locale,LC_TIME:l.php.locale,LC_MESSAGES:l.php.locale}),null===t||""===t)t=a(e)||a("LANG");else if("[object Array]"===Object.prototype.toString.call(t))for(o=0;o<t.length;o++){if(t[o]in l.php.locales){t=t[o];break}if(o===t.length-1)return!1}if("0"===t||0===t){if("LC_ALL"===e){for(s in l.php.localeCategories)i.push(s+"="+l.php.localeCategories[s]);return i.join(";")}return l.php.localeCategories[e]}if(!(t in l.php.locales))return!1;if("LC_ALL"===e)for(s in l.php.localeCategories)l.php.localeCategories[s]=t;else l.php.localeCategories[e]=t;return t}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{const e=window.React,t=window.wp.data,n=window.wp.blockEditor,a=window.wp.element,s=window.wp.richText;var i=r(549);const o=JSON.parse('{"name":"wporg/time","title":"Time","icon":"calendar"}'),{name:c,icon:u,title:l}=o;(0,s.registerFormatType)(c,{title:l,tagName:"time",className:"wporg-time",edit:({isActive:r,onChange:o,value:h})=>{const{date_gmt:m}=(0,t.useSelect)((e=>e("core/editor").getCurrentPost())),{attributes:{content:d}}=(0,t.useSelect)((e=>e("core/block-editor").getSelectedBlock())),p=(0,a.useRef)([]),g=(0,a.useCallback)((()=>{o((0,s.toggleFormat)(h,{type:c}))}));return(0,a.useEffect)((()=>{const e=(e=>{const t=document.createElement("div");t.innerHTML=e;const r=t.querySelectorAll(".wporg-time");return r.length?Array.from(r).map((e=>e.textContent)):[]})(d);if(e.length!==p.current.length)return void(p.current=e);let t=0;for(;t<e.length;){const r=e[t];if(p.current[t]!==r){const e=h.text.indexOf(r),t=e+r.length;o((0,s.removeFormat)(h,c,e,t));break}t++}p.current=e}),[d,p]),(0,e.createElement)(n.RichTextToolbarButton,{icon:u,title:l,onClick:()=>{const e=(0,s.getTextContent)((0,s.slice)(h));if(!e||r)return void g();const t=e.replace("at ","");t.replace("UTC","GMT");const n=m?(0,i.strtotime)(m):void 0,a=(0,i.strtotime)(t,n);if(!1===a||-1===a)return void g();const u=(0,i.gmdate)("c",a),l=(0,i.gmdate)("Ymd\\THi",a);o((0,s.toggleFormat)(h,{type:c,attributes:{datetime:u,"data-iso":l,style:"text-decoration: underline; text-decoration-style: dotted"}}))},isActive:r})}})})()})();