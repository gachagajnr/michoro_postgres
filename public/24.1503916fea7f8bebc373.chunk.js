(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"201ed76dcadf8d20a6cb":function(e,t,a){(e.exports=a("0e326f80368fd0b1333e")(!1)).push([e.i,".overlay {\r\n  position: relative;\r\n  display: inline-block;\r\n  /* background: cyan; */\r\n  display: block;\r\n}\r\n\r\n.overlay > img {\r\n  vertical-align: middle;\r\n}\r\n\r\n.overlay:hover::before {\r\n  opacity: 0.23;\r\n}\r\n\r\n.profile-pic {\r\n  position: relative;\r\n  display: block;\r\n  /* width: '100%'; */\r\n}\r\n\r\n.profile-pic:hover .edit {\r\n  display: block;\r\n}\r\n\r\n.edit {\r\n  padding-top: 7px;\r\n  padding-right: 7px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  display: none;\r\n}\r\n\r\n.edit a {\r\n  color: #000;\r\n}\r\n",""])},"4453687145ab5727ec27":function(e,t,a){"use strict";a.r(t);a("57ed083724b519d13f5b");var r=a("e0239d13096660238942"),n=a("9b138a15514959aa8913"),c=a("71d2f9a0d515b86993c4"),o=a("8113359511cd270e25e9"),l=a("fc43733ec9d3f066c334"),i=a("b1f27207ff04ebac9dd2"),d=a("1eca738fec3a62741301"),f=a("d8b4cc19d60808c8feb8"),b=a("b71a11ba789fb126d25a"),u=a("b706f2bde56ad8786785"),s=a("950c04bc9733ece61762"),m=a("c577048d0a992a54e27c"),p=a("ad58830e157fbad085fb"),g=a("cad699f601d1c0fc24c5"),h=a("13e66589a8c9c5434635"),E=a("a72b40110d9c31c9b5c5"),y=a("6542cd13fd5dd1bcffd4"),v=a("2cc79d106f9ca49f21f6"),j=a("b0bc3e68122dc9015576"),O=a("2af61b8c61ae2e7f9e2e"),w=a("369a2015feb3eb249252"),A=(a("8a2d1b95e05b6a321e74"),a("8af190b70a6bc55c6f1b")),x=a.n(A),k=a("0a81c721557e72a0975d"),S=a("103be25b8913a0141218"),C=a("1f7eb4558e149d7a2535"),T=a("a28fc3c963a1d4d1a2e5"),N=a("a79467e5f9517820f402"),L=a("60ead7d14fed7e819edb"),I=a("d95b0cf107403b178365"),D=a("adc20f99e57c573c589c"),W=(a("8384f433e2fbf8c1e335"),a("3818add0c9bac61df642")),z=(a("5fd8a9969a0df835644f"),a("63034cfb96424fb8b5e5")),F=(a("c8e134b92bdff32b38c0"),a("2908b30917805c6fbf09")),G=(a("44d31a554aec3455a02d"),a("9a9f7ee98b00fb7bb7c2")),M=a("96cfee79080e19c058c9"),B=a("73c491490691b18f8f8a"),J=a("17eb857c88637893cdde"),K=a("85b71a27cbcf93ff4854"),P=a("4258a29b8d537ad1fdb6"),R=a.n(P),U=a("25e85fb5cb8efb54d5ce"),$=a.n(U),_=a("006b2ad2e60d1416bd70"),q=a.n(_),H=a("42993e61ed154f509e4c"),Q=a("4e9d4d8cc0aba6a3b909"),V=a("831dbff2166609c581a0"),X=a.n(V),Y=Object(l.a)(function(e){return{grow:{flexGrow:1},appbar:{borderBottom:"1px solid ".concat(e.palette.divider)},title:{color:"#fea73c",fontWeight:400,flexGrow:1,textTransform:"uppercase"}}}),Z=G.a.Text,ee=x.a.createElement(R.a,null),te=x.a.createElement(z.b,{size:"small",align:"center"},x.a.createElement(q.a,null)," My Artwork");function ae(e){var t=Object(A.useContext)(N.a),a=t.user,r=t.logout,n=Object(S.g)(),c=Y(),o=x.a.createElement(F.a,null,x.a.createElement(F.a.Item,{onClick:function(){return r()}},"Logout"));return x.a.createElement("div",{className:c.grow},x.a.createElement(J.a,{variant:"dense",className:c.appbar},x.a.createElement("div",{style:{height:40,width:40}},x.a.createElement("img",{alt:"Logo",src:X.a,style:{height:"auto",width:"100%"}})),x.a.createElement(K.a,{className:c.title,variant:"overline",noWrap:!0},x.a.createElement(H.a,{to:"/",style:{textDecoration:"none",color:"#000",fontWeight:600}},"Michoro Art")),a.isAuthenticated?x.a.createElement(z.b,null,x.a.createElement(Q.b,{do:"read",on:"Profile",field:"user"},x.a.createElement(B.a,{edge:"end","aria-label":"shopping cart","aria-haspopup":"true",onClick:function(){return n.push("/profile")},color:"inherit"},ee)),x.a.createElement(Q.b,{do:"read",on:"NewArt",field:"artist"},x.a.createElement(z.b,{direction:"horizontal"},x.a.createElement(H.a,{to:"/myworks",style:{color:"#000",textDecoration:"none"}},te))),x.a.createElement(W.a,{overlay:o,arrow:!0},x.a.createElement(z.b,{align:"center"},"|",x.a.createElement(Z,{strong:!0,style:{textTransform:"capitalize"}},a.firstname)))):x.a.createElement(z.b,null,x.a.createElement(H.a,{to:"/login",style:{color:"#000",textDecoration:"none"}},"Sign In"),x.a.createElement(H.a,{to:"/register",style:{color:"#000",textDecoration:"none"}},"Register")),x.a.createElement(B.a,{edge:"end","aria-label":"shopping cart","aria-haspopup":"true",onClick:function(){return n.push("/cart")},color:"inherit"},x.a.createElement(M.a,{badgeContent:e.cartLength,color:"error"},x.a.createElement($.a,{style:{color:"orange"}})))))}a("c47c407911fd1a079bf5");function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return ne(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ne(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"All",function(){return ue});var ce=Object(l.a)(function(){return{imageDiv:{cursor:"pointer"}}}),oe=x.a.createElement(L.h,null),le=x.a.createElement(d.a,null),ie=x.a.createElement(o.a,{item:!0,xs:12,sm:6},x.a.createElement(i.a,null)),de=x.a.createElement(b.a,null),fe=x.a.createElement(c.a,{variant:"inset"}),be=x.a.createElement("h3",null,"Currently no Art Available.");function ue(e){var t=e.doGetArts,a=e.addArtToCart,c=e.doSearch,l=e.cart,i=e.farts,d=e.loading,b=e.subscribeToNewsLetter;Object(I.a)({key:"home",reducer:j.a}),Object(D.a)({key:"home",saga:O.a});var E=Object(S.h)(),y=Object(S.g)(),v=ce(),w=Object(A.useContext)(N.a),k=w.user,C=w.logout,T=re(Object(A.useState)(null),2),L=T[0],W=T[1],z=re(Object(A.useState)(""),2),F=z[0],G=z[1];function M(e){a(e),y.push("/cart")}return Object(A.useEffect)(function(){t("All",L,"dummy"),G(E.state?E.state.param:"")},["All",L,"dummy"]),x.a.createElement("div",null,oe,le,x.a.createElement(ae,{isAuthenticated:k.isAuthenticated,logout:function(){return C()},cartLength:l.length,onChange:function(e){c(e.target.value)}}),x.a.createElement("div",{style:{margin:5}},x.a.createElement(o.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1,style:{padding:10}},ie,x.a.createElement(o.a,{item:!0,xs:12,sm:6},x.a.createElement(h.a,{default:F,onSearch:function(e){return c(e.target.value)},handleChange:function(e){W(e)}})))),x.a.createElement(n.a,{maxWidth:"lg"},d?de:x.a.createElement(x.a.Fragment,null,x.a.createElement("div",{style:{marginLeft:30,marginTop:20,marginBottom:20}},x.a.createElement("h2",{style:{fontWeight:400,fontSize:23}},"Shop Original Art from Artists from Kenya.")),fe,i.length>0?x.a.createElement(u.a,null,i.map(function(e){return x.a.createElement("div",{className:v.imageDiv,key:e._id},x.a.createElement("div",{className:"profile-pic"},e.art?x.a.createElement(x.a.Fragment,null,x.a.createElement(s.a,{tile:e}),x.a.createElement("div",{className:"edit"},e.isSold?null:x.a.createElement(m.a,{onClick:function(){return M(e)}}))):x.a.createElement(r.a,{style:{width:100}})),x.a.createElement(p.a,{tile:e,onClick:function(){return M(e)}}))})):x.a.createElement("div",{style:{marginLeft:30,marginTop:20}},be)),x.a.createElement(f.a,null,x.a.createElement(g.a,{onSubmit:function(e,t){b(e),t.resetForm()}}))))}var se=Object(T.b)({arts:Object(y.b)(),farts:Object(y.d)(),cart:Object(w.a)(),loading:Object(y.e)()});var me=Object(k.c)(se,function(e){return{doGetArts:function(t,a,r){return e(Object(E.h)(t,a,r))},doSearch:function(t){return e(Object(E.E)(t))},addArtToCart:function(t){return e(Object(v.a)(t))},subscribeToNewsLetter:function(t){return e(Object(E.F)(t))}}});t.default=Object(C.d)(me,A.memo)(ue)},c47c407911fd1a079bf5:function(e,t,a){var r=a("201ed76dcadf8d20a6cb");"string"===typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("1e4534d1d62a11482e97")(r,n);r.locals&&(e.exports=r.locals)}}]);