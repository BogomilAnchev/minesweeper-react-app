(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(4),i=t.n(c),o=(t(9),t(10),t(2)),u=t(0);var s=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(!1),i=Object(o.a)(c,2),s=i[0],l=i[1],d=Object(a.useState)(!1),m=Object(o.a)(d,2),f=m[0],h=m[1],O=Object(a.useState)(""),j=Object(o.a)(O,2),b=j[0],v=j[1],g=Object(a.useState)(":) CHOOSE A DIFFICULTY LEVEL TO START :)"),x=Object(o.a)(g,2),M=x[0],N=x[1];function p(e,n){for(var t,a,c=[],i=0;i<9;i++){for(var o=[],u=0;u<20;u++)o.push({x:i,y:u,randomNum:(t=0,a=e,Math.floor(Math.random()*(a-t+1))+t),revealed:!1,tergeted:!1,isMine:!1,numberOfMinesAroundIt:0});c.push(o)}for(var s=0;s<c.length;s++)for(var d=0;d<c[s].length;d++){for(var m=0,f=Math.max(0,s-1);f<=Math.min(c.length-1,Number(s)+1);f++)for(var O=Math.max(0,d-1);O<=Math.min(c[0].length-1,Number(d)+1);O++)0===c[f][O].randomNum&&m++;c[s][d].numberOfMinesAroundIt=m}v(n),r(c),l(!1),h(!1),N(":) YO IN THE MINES NOW! GOOD LUCK FELLA :)")}function L(e,n,a){if(0===e[n][a].numberOfMinesAroundIt)for(var r=Math.max(0,n-1);r<=Math.min(t.length-1,n+1);r++)for(var c=Math.max(0,a-1);c<=Math.min(t[0].length-1,a+1);c++)e[r][c].revealed||(e[r][c].revealed=!0,L(e,r,c))}function C(){var e=!0;t.forEach((function(n,t){n.forEach((function(n,t){0!==n.randomNum&&!1===n.revealed&&(e=!1)}))})),e&&(h(!0),N(":D CONGRATS! THERE`S NO BLOWIN YA! :D"))}return Object(u.jsxs)("main",{className:"wrapper",children:[Object(u.jsx)("h1",{children:"MINESWEEPER! ...just a bit uglier..."}),Object(u.jsx)("h2",{className:"".concat(s?"game-over":"").concat(f?"game-win":""),children:M}),b?Object(u.jsx)("h1",{children:b}):"",Object(u.jsx)("div",{className:"".concat(s?"game-over-field":"").concat(f?"game-win-field":""),children:t.map((function(e,n){return Object(u.jsx)("div",{className:"row",children:e.map((function(e,a){return Object(u.jsxs)("p",{onContextMenu:function(n){return function(e,n,a){if(e.preventDefault(),!f&&!s){var c=t.slice(0);c[n][a].targeted?c[n][a].targeted=!1:c[n][a].targeted=!0,r(c)}}(n,e.x,e.y)},onClick:t[n][a].revealed||s||f?function(){}:function(){return function(e,n){var a=t.slice(0);0===t[e][n].randomNum?(a[e][n].isMine=!0,a[e][n].revealed=!0,l(!0),N(":( BOOM! SORRY, YALL BLOWN UP BADLY :(")):a[e][n].revealed=!0,0===t[e][n].numberOfMinesAroundIt&&L(a,e,n),r(a),C()}(e.x,e.y)},className:"box ".concat(t[n][a].targeted?"target-mine":"","    \n                              ").concat(t[n][a].revealed&&!t[n][a].isMine?"revealed":""),id:"".concat(t[n][a].isMine?"mine":""),children:[e.revealed&&0!==e.numberOfMinesAroundIt?e.numberOfMinesAroundIt:" ",e.revealed&&0!==e.numberOfMinesAroundIt&&!e.isMine?Object(u.jsx)("span",{onClick:function(){return function(e,n){if(!f&&!s){for(var a=t.slice(0),c=Math.max(0,e-1);c<=Math.min(a.length-1,e+1);c++)for(var i=Math.max(0,n-1);i<=Math.min(a[0].length-1,n+1);i++)a[c][i].revealed||(0!==a[c][i].randomNum||a[c][i].targeted?0===a[c][i].randomNum||a[c][i].targeted||(a[c][i].revealed=!0):(a[c][i].isMine=!0,a[c][i].revealed=!0,l(!0),N(":( BOOM! SORRY, YALL BLOWN UP BADLY :(")),0===a[c][i].numberOfMinesAroundIt&&L(a,c,i));r(a),C()}}(e.x,e.y)},id:"cascade",children:"cascade"}):" "]},"".concat(n).concat(a))}))},n)}))}),Object(u.jsxs)("div",{children:[b?Object(u.jsx)("p",{children:"click on any diffuculty to start new game."}):"",Object(u.jsx)("button",{className:"".concat(s?"game-over-field":"").concat(f?"game-win-field":""),onClick:function(){return p(12,"Grasp the idea")},children:"Grasp the idea"}),Object(u.jsx)("button",{className:"".concat(s?"game-over-field":"").concat(f?"game-win-field":""),onClick:function(){return p(9,"Easy")},children:"Easy"}),Object(u.jsx)("button",{className:"".concat(s?"game-over-field":"").concat(f?"game-win-field":""),onClick:function(){return p(7,"Medium")},children:"Medium"}),Object(u.jsx)("button",{className:"".concat(s?"game-over-field":"").concat(f?"game-win-field":""),onClick:function(){return p(5,"Hard")},children:"Hard"}),Object(u.jsx)("button",{className:"".concat(s?"game-over-field":"").concat(f?"game-win-field":""),onClick:function(){return p(3,"Expert")},children:"Expert"})]}),!b||f||s?"":Object(u.jsx)("button",{onClick:f?function(){}:function(){for(var e=0;e<t.length;e++)for(var n=0;n<t[e].length;n++)if(0===t[e][n].randomNum){var a=t.slice(0);a[e][n].isMine=!0,r(a)}l(!0),N(":( BOOM! SORRY, YALL BLOWN UP BADLY :(")},children:"Show all the mines"}),Object(u.jsx)("section",{className:"rules",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"LEFT CLICK - to clear a square that you think is not a mine."}),Object(u.jsx)("li",{children:"RIGHT CLICK - to mark and unmark a square with orange to indicate you think a mine is there."}),Object(u.jsx)("li",{children:"CASCADE (immitates clicking both mouse buttons at the same time in the actual game) - when the computer automatically opens up surrounding squares for you. Carefull for if you didn't mark the mines right, you lose."})]})})]})};var l=function(){return Object(u.jsx)(s,{})},d=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),d()},9:function(e,n,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.420990f4.chunk.js.map