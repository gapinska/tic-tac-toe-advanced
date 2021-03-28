(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{54:function(e,a,t){},55:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(9),i=t.n(c),o=(t(54),t(55),t(24)),l=t(32),s=t(72),d=t(3),u=function(e){var a=e.index,t=e.onClick,r=e.value,n=e.boardSize>=10?"field-value small":"field-value";return Object(d.jsx)("div",{children:Object(d.jsx)(s.a,{elevation:3,className:"field",onClick:function(){return t(a,r)},children:Object(d.jsx)("div",{className:n,children:r})})})},j=function(){return Object(d.jsx)("div",{className:"game-info",children:Object(d.jsx)("h2",{className:"game-info-title",children:"Welcome"})})},b="X",m="O",f="TIE";var O=function(e){var a=e.gamerTurn,t=e.verdict;return Object(d.jsx)("div",{className:"game-status",children:t?Object(d.jsxs)("div",{children:["The winner: ",t]}):Object(d.jsxs)("div",{children:["Your turn: ",Object(d.jsx)("span",{children:a})]})})},p=t(110),v=function(e){var a=e.handleClickContinueGame,t=!e.status;return Object(d.jsx)(p.a,{className:"game-flow-btn",disabled:t,variant:"outlined",color:"primary",onClick:a,children:"Next round"})},y=function(e){var a=e.handleClickEndGame;return Object(d.jsx)(p.a,{className:"game-flow-btn",variant:"outlined",color:"primary",onClick:a,children:"Finish Game"})},g=function(e){var a=function(e,a){return e>a?b:a>e?m:f}(e.gamer1Score,e.gamer2Score);return Object(d.jsxs)("div",{className:"game-info",children:[Object(d.jsx)("div",{className:"game-info-title game-over-info",children:"Game Over"}),Object(d.jsxs)("div",{className:"game-info-title game-over-verdict",children:["The winner: ",Object(d.jsx)("span",{children:a})]}),Object(d.jsx)("div",{className:"game-info-title game-over-congrat",children:a!==f?"Congratulations!":"Try next time!"})]})},h=t(106),x=t(107),S=t(108),G=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}})),C=function(e){var a=e.gamer1Score,t=e.gamer2Score,r=G();return Object(d.jsx)("div",{children:Object(d.jsxs)(x.a,{position:"static",children:[Object(d.jsx)(S.a,{variant:"h6",className:r.title,children:"Tic tac toe"}),Object(d.jsxs)("div",{className:"score-board",children:[Object(d.jsxs)("div",{className:"score-board-item",children:["Gamer X: ",a]}),Object(d.jsxs)("div",{className:"score-board-item",children:["Gamer O: ",t]})]})]})})},N=n.a.memo(C),k=t(44),A=t.n(k),L={overlay:{top:"243px"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0"}},w=function(e){var a=e.isOpen;return Object(d.jsx)(A.a,{style:L,isOpen:a,ariaHideApp:!1})},z=function(e){var a=e.onClick,t=e.value;return Object(d.jsx)(s.a,{elevation:3,className:"player-btn",onClick:a,children:t})},I=function(e){var a=e.handleClickRestartGame;return Object(d.jsx)(p.a,{className:"game-flow-btn",variant:"outlined",color:"primary",onClick:a,children:"Restart Game"})},T=t(109),B="setStartGame",E="setGamer1Started",F="setContinueGameActive",R="setEndGame",W="setVerdict",J="setGamer1Score",M="setGamer2Score",P="setModalIsOpen",V="setBoardSize",X="setBoardLogic",D="setWinnerLines",H={startGame:!1,gamer1Started:!0,continueGameActive:!1,endGame:!1,boardFields:Array(9).fill(null),gamer1Turn:!0,verdict:null,gamer1Score:0,gamer2Score:0,modalIsOpen:!1,boardSize:3,boardLogic:null,winnerLines:[]},Y=t(11);function q(e){var a=function(){for(var a=Array.from(Array(e),(function(){return new Array(e).fill(null)})),t=0,r=0;r<e;r++)for(var n=0;n<e;n++)a[r][n]=t++;return a}();return{calculateWinnerLines:function(){return[].concat(Object(o.a)(a),Object(o.a)(function(a){for(var t=Array.from(Array(e),(function(){return new Array(e)})),r=0;r<e;r++)for(var n=0;n<e;n++)t[r][n]=a[n][r];return t}(a)),Object(o.a)(function(a){for(var t=Array(e),r=0;r<e;r++)t[r]=a[r][r];for(var n=Array(e),c=e-1,i=0;i<e;i++)n[i]=a[i][c],c--;return[t,n]}(a)))},createInitialBoard:function(){return Array.from(Array(e*e).fill(null))}}}function K(e,a){switch(a.type){case X:return Object(Y.a)(Object(Y.a)({},e),{},{boardLogic:q(e.boardSize)});case D:return Object(Y.a)(Object(Y.a)({},e),{},{winnerLines:e.boardLogic.calculateWinnerLines()});case J:return Object(Y.a)(Object(Y.a)({},e),{},{gamer1Score:a.payload});case M:return Object(Y.a)(Object(Y.a)({},e),{},{gamer2Score:a.payload});case W:return Object(Y.a)(Object(Y.a)({},e),{},{verdict:a.payload});case F:return Object(Y.a)(Object(Y.a)({},e),{},{continueGameActive:a.payload});case P:return Object(Y.a)(Object(Y.a)({},e),{},{modalIsOpen:a.payload});case E:return Object(Y.a)(Object(Y.a)({},e),{},{gamer1Started:!e.gamer1Started});case B:return Object(Y.a)(Object(Y.a)({},e),{},{startGame:a.payload});case V:return Object(Y.a)(Object(Y.a)({},e),{},{boardSize:a.payload});case R:return Object(Y.a)(Object(Y.a)({},e),{},{endGame:!0});default:return e}}var Q=function(){var e=Object(r.useReducer)(K,H),a=Object(l.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)(Array(9).fill(null)),i=Object(l.a)(c,2),s=i[0],p=i[1],h=Object(r.useState)(!0),x=Object(l.a)(h,2),S=x[0],G=x[1];Object(r.useEffect)((function(){n({type:X})}),[t.boardSize]),Object(r.useEffect)((function(){null!==t.boardLogic&&(n({type:D}),p(t.boardLogic.createInitialBoard(t.boardSize)))}),[t.boardLogic]),Object(r.useEffect)((function(){if(t.boardLogic){var e=function(e,a,t){var r=function(e,a,t){for(var r=0;r<a.length;r++){for(var n=a[r],c=[],i=0;i<n.length;i++)c[i]=e[n[i]];if(c.reduce((function(e,a){return e===a?e:NaN}))&&null!==c[0])return c[0];if(r===a.length-1)return null}}(e,a),n=null===r&&function(e){return!e.includes(null)}(e);return null!==r||n?n?f:r:null}(s,t.winnerLines,t.boardSize);switch(e){case b:n({type:J,payload:t.gamer1Score+1}),n({type:W,payload:e}),n({type:F,payload:!0}),n({type:P,payload:!0});break;case m:n({type:M,payload:t.gamer2Score+1}),n({type:W,payload:e}),n({type:F,payload:!0}),n({type:P,payload:!0});break;case f:n({type:W,payload:f}),n({type:F,payload:!0}),n({type:P,payload:!0});break;default:return}}}),[s]);var C=Object(r.useCallback)((function(e,a){null===a&&G((function(a){return p((function(t){var r=Object(o.a)(t);return r[e]=a?b:m,r})),!a}))}),[]),k=function(e){e!==b&&(G(!1),n({type:E})),n({type:B,payload:!0})},A=S?b:m;return Object(d.jsx)("div",{children:!t.startGame&&Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{}),Object(d.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(d.jsx)("div",{className:"form-field",children:Object(d.jsx)(T.a,{id:"outlined-search",label:"Set board size",type:"search",variant:"outlined",onChange:function(e){n({type:V,payload:parseInt(e.target.value)||3})}})})}),Object(d.jsx)("h4",{className:"game-info-title",children:"Who is going to start?"}),Object(d.jsxs)("div",{className:"btn-section",children:[Object(d.jsx)(z,{onClick:function(){return k(b)},value:b}),Object(d.jsx)(z,{onClick:function(){return k(m)},value:m})]})]})||t.startGame&&!t.endGame&&Object(d.jsxs)("div",{children:[Object(d.jsx)(N,{gamer1Score:t.gamer1Score,gamer2Score:t.gamer2Score}),Object(d.jsxs)("div",{className:"game-flow-btn-section",children:[Object(d.jsx)(v,{status:!!t.verdict,handleClickContinueGame:function(){t.continueGameActive&&(G(!t.gamer1Started),n({type:E}),p(t.boardLogic.createInitialBoard(t.boardSize)),n({type:W,payload:null}),n({type:F,payload:!0}),n({type:P,payload:!1}))}}),Object(d.jsx)(I,{handleClickRestartGame:function(){n({type:B,payload:!1}),p(Array(9).fill(null)),n({type:J,payload:0}),n({type:M,payload:0}),n({type:W,payload:null}),n({type:P,payload:!1}),n({type:V,payload:3})}}),Object(d.jsx)(y,{handleClickEndGame:function(){n({type:R})}})]}),Object(d.jsx)(O,{gamerTurn:A,verdict:t.verdict}),Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)("div",{className:"board",style:{gridTemplateColumns:"repeat(".concat(t.boardSize,", 1fr)")},children:s.map((function(e,a){return Object(d.jsx)(u,{value:e,index:a,onClick:C,boardSize:t.boardSize},a)}))})}),Object(d.jsx)(w,{isOpen:t.modalIsOpen})]})||Object(d.jsx)(g,{gamer1Score:t.gamer1Score,gamer2Score:t.gamer2Score})})};var U=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(Q,{})})},Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,112)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),r(e),n(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),Z()}},[[71,1,2]]]);
//# sourceMappingURL=main.b867ffb0.chunk.js.map