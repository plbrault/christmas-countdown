(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7543:function(n,s,e){"use strict";e.r(s),e.d(s,{default:function(){return h}});var r=e(7294),a=e(5152),t=e(126),c=e(5113),i=e(9490);var u=function(){var n,s=i.ou.now(),e=s.year;n=12===s.month&&s.day>=25?i.ou.local(e+1,12,25,0,0,0):i.ou.local(e,12,25,0,0,0);var r=i.Xp.fromDateTimes(s,n).toDuration(["days","hours","minutes","seconds"]).toObject();return r.seconds=Math.floor(r.seconds),r};function o(){var n=i.ou.local();return 12===n.month&&25===n.day}var l=e(5893);function d(){var n=(0,r.useState)(u),s=n[0],e=n[1],a=(0,r.useState)(o()),i=a[0],d=a[1];(0,r.useEffect)((function(){var n=setInterval((function(){o()?i||(d(!0),clearInterval(n)):e(u())}),500)}),[]);var m=s.days,h=s.hours,f=s.minutes,j=s.seconds;return(0,l.jsxs)(c.Z,{className:"christmas-countdown-container",direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:[!i&&(0,l.jsx)(t.Z,{className:"label",children:"Time Left Until Christmas"}),(0,l.jsx)(t.Z,{className:"christmas-trees",children:"\ud83c\udf84\ud83c\udf84\ud83c\udf84"}),(0,l.jsxs)(t.Z,{className:"time-before-christmas",children:[i&&(0,l.jsx)("span",{className:"merry-christmas",children:"Merry Christmas!"}),!i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"number",children:String(m).padStart(2,"0")}),"\xa0days\xa0",(0,l.jsx)("span",{className:"number",children:String(h).padStart(2,"0")}),"\xa0hours\xa0",(0,l.jsx)("span",{className:"number",children:String(f).padStart(2,"0")}),"\xa0minutes\xa0",(0,l.jsx)("span",{className:"number",children:String(j).padStart(2,"0")}),"\xa0seconds"]})]}),(0,l.jsx)(t.Z,{className:"christmas-trees",children:"\ud83c\udf84\ud83c\udf84\ud83c\udf84"})]})}var m=(0,a.default)({loader:function(){return e.e(106).then(e.bind(e,1106))},loadableGenerated:{webpack:function(){return[1106]},modules:["index.js -> react-snowfall"]}},{loading:function(){return(0,l.jsx)("div",{})},ssr:!1});function h(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{}),(0,l.jsx)(d,{})]})}},8581:function(n,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(7543)}])}},function(n){n.O(0,[774,809,97,888,179],(function(){return s=8581,n(n.s=s);var s}));var s=n.O();_N_E=s}]);