"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[845],{9884:function(n,t,e){e.d(t,{Z:function(){return m}});var r,i,a,o=e(2007),s=e.n(o),u=e.p+"static/media/sad-robot-623x416.d0cdef22fdf787eedafd.jpg",c=e(168),p=e(82),d=p.ZP.div(r||(r=(0,c.Z)(["\n  margin-top: 50px;\n"]))),l=p.ZP.h2(i||(i=(0,c.Z)(["\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 30px;\n"]))),x=p.ZP.img(a||(a=(0,c.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 8px;\n"]))),f=e(184),g=function(n){var t=n.error;return(0,f.jsxs)(d,{children:[(0,f.jsx)(l,{children:t}),(0,f.jsx)(x,{src:u,alt:"Sad robot",width:"400"})]})};g.prototype={error:s().string.isRequired};var m=g},6436:function(n,t,e){e.d(t,{SB:function(){return l},_k:function(){return u},fS:function(){return p},mL:function(){return c},yd:function(){return d}});var r=e(5861),i=e(4687),a=e.n(i),o=e(1243);o.Z.defaults.baseURL="https://api.themoviedb.org";var s="1fee0d3316c35113a8e2fbfdaf3cc26c",u=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/trending/movie/day",{signal:t.signal,params:{api_key:s,language:"en-US"}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(a().mark((function n(t,e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/search/movie",{signal:e.signal,params:{query:t,api_key:s}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t,e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/movie/".concat(t),{signal:e.signal,params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t,e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/movie/".concat(t,"/credits"),{signal:e.signal,params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t,e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/movie/".concat(t,"/reviews"),{signal:e.signal,params:{api_key:s,page:1}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},7890:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,i,a,o,s,u,c,p,d,l=e(5861),x=e(9439),f=e(4687),g=e.n(f),m=e(7689),h=e(6436),v=e(2791),Z=e(2007),b=e.n(Z),w=e(2753),j=e(168),y=e(82),k=y.ZP.div(r||(r=(0,j.Z)(["\n  display: flex;\n  grid-gap: 20px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n  border-top-style: groove;\n  border-bottom-style: groove;\n"]))),P=y.ZP.img(i||(i=(0,j.Z)(["\n  width: 300px;\n  height: 448px;\n  object-fit: cover;\n  border: 2px solid darkblue;\n  border-radius: 4px;\n"]))),S=y.ZP.h3(a||(a=(0,j.Z)(["\n  font-size: 24px;\n  margin: 0;\n  margin-bottom: 20px;\n"]))),_=y.ZP.p(o||(o=(0,j.Z)(["\n  margin: 0;\n  margin-bottom: 20px;\n  font-size: 18px;\n  font-weight: 600;\n"]))),R=y.ZP.p(s||(s=(0,j.Z)(["\n  margin: 0;\n  margin-bottom: 20px;\n  font-size: 18px;\n  font-weight: 600;\n"]))),z=y.ZP.span(u||(u=(0,j.Z)(["\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.3;\n"]))),q=y.ZP.p(c||(c=(0,j.Z)(["\n  margin: 0;\n  margin-bottom: 20px;\n  font-size: 18px;\n  font-weight: 600;\n"]))),A=y.ZP.ul(p||(p=(0,j.Z)(["\n  display: flex;\n  grid-gap: 20px;\n  flex-wrap: wrap;\n  margin: 0;\n  padding-left: 20px;\n"]))),U=y.ZP.li(d||(d=(0,j.Z)(["\n  margin-bottom: 10px;\n  font-size: 18px;\n  font-weight: 400;\n"]))),E=e(184),C=function(n){var t=n.poster,e=n.title,r=n.voteAverage,i=n.annotation,a=n.genres;return(0,E.jsxs)(k,{children:[t?(0,E.jsx)(P,{src:"https://image.tmdb.org/t/p/original".concat(t),alt:"Poster movie"}):(0,E.jsx)(P,{src:w,alt:"Poster movie",height:"448",width:"300"}),(0,E.jsxs)("div",{children:[(0,E.jsx)(S,{children:e}),(0,E.jsxs)(_,{children:["Score: ",(10*r).toFixed(),"%"]}),(0,E.jsxs)(R,{children:["Overview:",(0,E.jsx)(z,{children:i})]}),(0,E.jsx)(q,{children:"Genres:"}),(0,E.jsx)(A,{children:a.map((function(n){var t=n.id,e=n.name;return(0,E.jsx)(U,{children:e},t)}))})]})]})};C.prototype={title:b().string.isRequired,voteAverage:b().number.isRequired,annotation:b().string.isRequired,genres:b().arrayOf(b().exact({id:b().number.isRequired,name:b().string.isRequired}))};var F=C,H=e(1537),O=e(9884),G=e(6353),T=function(){var n,t,e=(0,v.useState)(""),r=(0,x.Z)(e,2),i=r[0],a=r[1],o=(0,v.useState)(""),s=(0,x.Z)(o,2),u=s[0],c=s[1],p=(0,v.useState)(null),d=(0,x.Z)(p,2),f=d[0],Z=d[1],b=(0,v.useState)([]),w=(0,x.Z)(b,2),j=w[0],y=w[1],k=(0,v.useState)(0),P=(0,x.Z)(k,2),S=P[0],_=P[1],R=(0,v.useState)(null),z=(0,x.Z)(R,2),q=z[0],A=z[1],U=(0,v.useState)(!1),C=(0,x.Z)(U,2),T=C[0],B=C[1],L=(0,m.UO)().movieId,D=(0,m.TH)(),I=(0,v.useRef)(null!==(n=null===(t=D.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies"),Q=(0,v.useRef)();return(0,v.useEffect)((function(){function n(){return(n=(0,l.Z)(g().mark((function n(){var t,e,r,i,o,s,u;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Q.current&&Q.current.abort(),Q.current=new AbortController,n.prev=2,A(null),B(!0),n.next=7,(0,h.fS)(L,Q);case 7:t=n.sent,e=t.data,r=e.title,i=e.poster_path,o=e.genres,s=e.overview,u=e.vote_average,a(r),c(s),Z(i),y(o),_(u),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(2),"ERR_BAD_REQUEST"!==n.t0.code&&A("Ooops! Try again!");case 19:return n.prev=19,B(!1),n.finish(19);case 22:case"end":return n.stop()}}),n,null,[[2,16,19,22]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){return Q.current.abort()}}),[L]),(0,E.jsxs)(G.or,{children:[(0,E.jsx)(G.Z7,{to:I.current,children:"Go back"}),T&&(0,E.jsx)(H.Z,{}),q&&(0,E.jsx)(O.Z,{error:q}),!T&&!q&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(F,{poster:f,title:i,voteAverage:S,annotation:u,genres:j}),(0,E.jsx)("h3",{children:"Additional information:"}),(0,E.jsxs)(G.mF,{children:[(0,E.jsx)(G.Hv,{children:(0,E.jsx)(G.jm,{to:"credits",children:"Cast"})}),(0,E.jsx)(G.Hv,{children:(0,E.jsx)(G.jm,{to:"reviews",children:"Reviews"})})]}),(0,E.jsx)(v.Suspense,{fallback:(0,E.jsx)(H.Z,{}),children:(0,E.jsx)(m.j3,{})})]})]})}},6353:function(n,t,e){e.d(t,{EG:function(){return x},Hv:function(){return m},Z7:function(){return f},jm:function(){return h},mF:function(){return g},or:function(){return l}});var r,i,a,o,s,u,c=e(168),p=e(82),d=e(1087),l=p.ZP.main(r||(r=(0,c.Z)(["\n  width: 1310px;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=p.ZP.h2(i||(i=(0,c.Z)(["\n  text-align: center;\n  font-size: 30px;\n"]))),f=(0,p.ZP)(d.rU)(a||(a=(0,c.Z)(["\n  display: block;\n  width: 150px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  text-decoration: none;\n  color: blue;\n  border: 2px solid blue;\n  border-radius: 4px;\n  transition: all 250ms linear;\n  &:hover,\n  &:focus {\n    background-color: yellow;\n    color: blue;\n    box-shadow: 2px 2px 2px #31463c6e;\n  }\n"]))),g=p.ZP.ul(o||(o=(0,c.Z)(["\n  margin-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  border-bottom-style: groove;\n"]))),m=p.ZP.li(s||(s=(0,c.Z)(["\n  margin-bottom: 0;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),h=(0,p.ZP)(d.rU)(u||(u=(0,c.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  text-decoration: none;\n  color: black;\n  transition: text-decoration 250ms linear, color 250ms linear;\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n    color: blue;\n  }\n"])))},2753:function(n,t,e){n.exports=e.p+"static/media/placeholder-612x612.316582a76dfb77346246.jpg"}}]);
//# sourceMappingURL=845.eaa70d9d.chunk.js.map