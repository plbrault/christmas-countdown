(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1831:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var s=t(7294),r=t(5152),a=t(126),i=t(5113),c=t(2809),o=t(9490);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){var t=o.Xp.fromDateTimes(e,n).toDuration(["days","hours","minutes","seconds","milliseconds"]).toObject();return t.milliseconds>0&&(t.seconds<59?t.seconds+=1:(t.minutes+=1,t.seconds=0)),t.totalSeconds=n-e,t}var m=function(){var e,n=o.ou.now(),t=n.year;if(12===n.month&&25===n.day)e={nextEvent:"CHRISTMAS",days:0,hours:0,minutes:0,seconds:0,milliseconds:0,totalSeconds:0};else if(12===n.month&&n.day>25){e=l({nextEvent:"NEW_YEAR"},d(n,o.ou.local(t+1,1,1,0,0,0)))}else if(1===n.month&&1===n.day)e={nextEvent:"NEW_YEAR",days:0,hours:0,minutes:0,seconds:0,milliseconds:0,totalSeconds:0};else{e=l({nextEvent:"CHRISTMAS"},d(n,o.ou.local(t,12,25,0,0,0)))}return e},f=t(5893),p=function(e){var n=e.isNewYear,t=e.isNewYearsEve;return(0,f.jsx)(a.Z,{className:"emojis",children:n||t?"\ud83c\udf7e\ud83c\udf7e\ud83c\udf7e":"\ud83c\udf84\ud83c\udf84\ud83c\udf84"})};function j(){var e=(0,s.useState)(m()),n=e[0],t=e[1];(0,s.useEffect)((function(){setInterval((function(){var e=m();t(e)}),100)}),[]);var r=n.nextEvent,c=n.days,o=n.hours,u=n.minutes,l=n.seconds,d=n.totalSeconds,j="CHRISTMAS"===r&&d>0,h="CHRISTMAS"===r&&0===d,v="NEW_YEAR"===r&&c>0,N="NEW_YEAR"===r&&0===c&&d>0,b="NEW_YEAR"===r&&0===d;return(0,f.jsxs)(i.Z,{className:"countdown-container",direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:[(0,f.jsxs)(a.Z,{className:"label",children:[j?"Time Left Until Christmas":"",N?"Time Left Until New Year":""]}),(0,f.jsx)(p,{isNewYear:b,isNewYearsEve:N}),(0,f.jsxs)("span",{className:"text-during-event",children:[h?"Merry Christmas!":"",v?"Happy Holidays!":"",b?"Happy New Year!":""]}),(0,f.jsx)(a.Z,{className:"time-before-next-event",children:j||N?(0,f.jsxs)(f.Fragment,{children:["CHRISTMAS"===r?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"number",children:String(c).padStart(2,"0")}),"\xa0days\xa0"]}):"",(0,f.jsx)("span",{className:"number",children:String(o).padStart(2,"0")}),"\xa0hours\xa0",(0,f.jsx)("span",{className:"number",children:String(u).padStart(2,"0")}),"\xa0minutes\xa0",(0,f.jsx)("span",{className:"number",children:String(l).padStart(2,"0")}),"\xa0seconds"]}):(0,f.jsx)(f.Fragment,{children:" "})}),(0,f.jsx)(p,{isNewYear:b,isNewYearsEve:N})]})}var h=(0,r.default)({loader:function(){return t.e(106).then(t.bind(t,1106))},loadableGenerated:{webpack:function(){return[1106]},modules:["index.js -> react-snowfall"]}},{loading:function(){return(0,f.jsx)("div",{})},ssr:!1});function v(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{}),(0,f.jsx)(j,{})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1831)}])}},function(e){e.O(0,[774,809,97,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);