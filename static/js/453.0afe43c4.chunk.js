"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[453],{8289:function(e,t,s){s.r(t),s.d(t,{default:function(){return W}});var n=s(2791),a=s(9434),l=s(3541),i="TweetElement_tweetBox__XtQgZ",o="TweetElement_mediumLine__PrWll",c="TweetElement_tweetButton__6EbJO",r="TweetElement_tweetButtonActive__CvG6P",m="TweetElement_tweetsInfo__N2sts",u="TweetElement_followInfo__0YZHe",A="TweetElement_backImage__gMNtg",g="TweetElement_logo__Fz8Sw",w="TweetElement_avatar__DDEwi",d="TweetElement_descBox__NpU+A",_=s(7105),h=s.p+"static/media/boy.caa432075c34af8ec75a.png",E=s(184),f=function(e){var t=e.tweets,s=e.followers,n=e.idTweet,f=e.isActive,T=(0,a.I0)(),x=function(){T((0,l.r)(n))};return(0,E.jsxs)("div",{className:i,children:[(0,E.jsx)("img",{className:g,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",alt:"backImage"}),(0,E.jsx)("img",{className:A,src:_,alt:"backImage"}),(0,E.jsx)("div",{className:o}),(0,E.jsx)("img",{className:w,src:h,alt:"backImage"}),(0,E.jsxs)("div",{className:d,children:[(0,E.jsxs)("p",{className:m,children:[t," TWEETS"]}),(0,E.jsxs)("p",{className:u,children:[s," FOLLOWERS"]}),f?(0,E.jsx)("button",{className:r,type:"button",onClick:x,children:"Following"}):(0,E.jsx)("button",{className:c,type:"button",onClick:x,children:"Follow"})]})]})},T=function(e){return e.auth},x=function(e){return e.tweetCard},N="TweetsList_itemList__b7oKl",v="TweetsList_tweetsItem__HHZhO",j="TweetsList_mainTweetsHeading__+aNL7",p="TweetsList_buttonBack__AzPdn",b="ButtonLoad_buttonLoad__bcZww",k=s(1686),L=s.n(k),Y=s(2270),S=s(2218),B=function(){var e=(0,a.v9)(T).items,t=(0,a.v9)(x),s=t.totalAmount,n=t.numberPage,l=(0,a.I0)();return e.length>1&&s>e.length&&(0,E.jsx)("button",{className:b,type:"button",onClick:function(){if(e.length>=s)return L().Notify.failure("You don't have more tweets");l((0,Y.Ws)()),l((0,S.u)(n))},children:" Load More"})},I=s(1087),Q=s(7689),C=function(){var e,t,s=(0,a.v9)(T).items,l=(0,Q.TH)(),i=(0,n.useRef)(null!==(e=null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(I.OL,{to:i.current,children:(0,E.jsx)("button",{className:p,children:"Go back"})}),(0,E.jsx)("h2",{className:j,children:"Tweets"}),(0,E.jsx)("ul",{className:N,children:s&&s.map((function(e){return(0,E.jsx)("li",{className:v,children:(0,E.jsx)(f,{tweets:e.tweets,followers:e.followers,idTweet:e.id,isActive:e.isActive})},e.id)}))}),(0,E.jsx)(B,{})]})},W=function(){var e=(0,a.I0)(),t=(0,a.v9)(T).items,s=(0,a.v9)(x).numberPage;return(0,n.useEffect)((function(){s<=1&&(e((0,S.u)(s)),e((0,Y.Ws)()))}),[e,s]),(0,E.jsx)(E.Fragment,{children:t.length>0&&(0,E.jsx)(C,{})})}},7105:function(e,t,s){e.exports=s.p+"static/media/design.032662a2a907475127d7.png"}}]);
//# sourceMappingURL=453.0afe43c4.chunk.js.map