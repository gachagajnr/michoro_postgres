(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"201ed76dcadf8d20a6cb":function(e,t,a){(e.exports=a("0e326f80368fd0b1333e")(!1)).push([e.i,".overlay {\n  position: relative;\n  display: inline-block;\n  /* background: cyan; */\n  display: block;\n}\n\n.overlay > img {\n  vertical-align: middle;\n}\n\n.overlay:hover::before {\n  opacity: 0.23;\n}\n\n.profile-pic {\n  position: relative;\n  display: block;\n  /* width: '100%'; */\n}\n\n.profile-pic:hover .edit {\n  display: block;\n}\n\n.edit {\n  padding-top: 7px;\n  padding-right: 7px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: none;\n}\n\n.edit a {\n  color: #000;\n}\n",""])},"4453687145ab5727ec27":function(e,t,a){"use strict";a.r(t);a("57ed083724b519d13f5b");var n=a("e0239d13096660238942"),r=a("8af190b70a6bc55c6f1b"),c=a.n(r),l=(a("8a2d1b95e05b6a321e74"),a("0a81c721557e72a0975d")),o=(a("0d7f0986bcd2f33d8a2a"),a("a28fc3c963a1d4d1a2e5")),i=a("1f7eb4558e149d7a2535"),d=a("103be25b8913a0141218"),f=a("fc43733ec9d3f066c334"),u=a("9b138a15514959aa8913"),b=a("b1f27207ff04ebac9dd2"),m=a("13e66589a8c9c5434635"),s=a("b706f2bde56ad8786785"),p=a("950c04bc9733ece61762"),g=a("ad58830e157fbad085fb"),h=a("c577048d0a992a54e27c"),E=a("b71a11ba789fb126d25a"),y=a("1eca738fec3a62741301"),v=a("d8b4cc19d60808c8feb8"),j=a("cad699f601d1c0fc24c5"),w=a("60ead7d14fed7e819edb"),O=a("a79467e5f9517820f402"),A=a("adc20f99e57c573c589c"),k=a("d95b0cf107403b178365"),x=a("2cc79d106f9ca49f21f6"),C=a("a72b40110d9c31c9b5c5"),S=a("8113359511cd270e25e9"),N=a("71d2f9a0d515b86993c4"),T=a("369a2015feb3eb249252"),L=a("6542cd13fd5dd1bcffd4"),D=a("b0bc3e68122dc9015576"),I=a("2af61b8c61ae2e7f9e2e"),z=(a("c47c407911fd1a079bf5"),a("8384f433e2fbf8c1e335"),a("3818add0c9bac61df642")),G=(a("5fd8a9969a0df835644f"),a("63034cfb96424fb8b5e5")),W=(a("c8e134b92bdff32b38c0"),a("2908b30917805c6fbf09")),F=(a("44d31a554aec3455a02d"),a("9a9f7ee98b00fb7bb7c2")),M=a("17eb857c88637893cdde"),J=a("73c491490691b18f8f8a"),B=a("96cfee79080e19c058c9"),K=a("85b71a27cbcf93ff4854"),P=a("42993e61ed154f509e4c"),R=a("25e85fb5cb8efb54d5ce"),U=a.n(R),$=a("4258a29b8d537ad1fdb6"),_=a.n($),q=a("006b2ad2e60d1416bd70"),H=a.n(q),Q=a("4e9d4d8cc0aba6a3b909"),V=(a("831dbff2166609c581a0"),Object(f.a)(function(e){return{grow:{flexGrow:1},appbar:{},title:{color:"orange",fontWeight:400,flexGrow:1,textTransform:"uppercase"}}})),X=F.a.Text,Y=c.a.createElement(_.a,null),Z=c.a.createElement(G.b,{size:"small",align:"center"},c.a.createElement(H.a,null)," My Artwork");function ee(e){var t=Object(r.useContext)(O.a),n=t.user,l=t.logout,o=Object(d.g)(),i=V(),f=c.a.createElement(W.a,null,c.a.createElement(W.a.Item,{onClick:function(){return l()}},"Logout"));return c.a.createElement("div",{className:i.grow},c.a.createElement(M.a,{className:i.appbar},c.a.createElement("div",{style:{height:40,width:40}},c.a.createElement("img",{alt:"Logo",src:a("831dbff2166609c581a0"),style:{height:"auto",width:"100%"}})),c.a.createElement(K.a,{className:i.title,variant:"overline",noWrap:!0},c.a.createElement(P.a,{to:"/",style:{textDecoration:"none",color:"orange"}},"Michoro Art")),n.isAuthenticated?c.a.createElement(G.b,null,c.a.createElement(Q.b,{do:"read",on:"Profile",field:"user"},c.a.createElement(J.a,{edge:"end","aria-label":"shopping cart","aria-haspopup":"true",onClick:function(){return o.push("/profile")},color:"inherit"},Y)),c.a.createElement(Q.b,{do:"read",on:"NewArt",field:"artist"},c.a.createElement(G.b,{direction:"horizontal"},c.a.createElement(P.a,{to:"/myworks",style:{color:"#000",textDecoration:"none"}},Z))),c.a.createElement(z.a,{overlay:f,arrow:!0},c.a.createElement("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},c.a.createElement(G.b,{align:"center"},"|",c.a.createElement(X,{strong:!0,style:{textTransform:"capitalize"}},n.firstname))))):c.a.createElement(G.b,null,c.a.createElement(P.a,{to:"/login",style:{color:"#000",textDecoration:"none"}},"Sign In"),c.a.createElement(P.a,{to:"/register",style:{color:"#000",textDecoration:"none"}},"Register")),c.a.createElement(J.a,{edge:"end","aria-label":"shopping cart","aria-haspopup":"true",onClick:function(){return o.push("/cart")},color:"inherit"},c.a.createElement(B.a,{badgeContent:e.cartLength,color:"error"},c.a.createElement(U.a,{style:{color:"orange"}})))))}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return ae(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"All",function(){return ue});a("c25d3de6a26e2dd439cd");var ne=Object(f.a)(function(e){return{imageDiv:{cursor:"pointer"}}}),re=c.a.createElement(w.h,null),ce=c.a.createElement(y.a,null),le=c.a.createElement(S.a,{item:!0,xs:12,sm:6},c.a.createElement(b.a,null)),oe=c.a.createElement(E.a,null),ie=c.a.createElement(N.a,null),de=c.a.createElement(N.a,null),fe=c.a.createElement("h3",null,"Currently no Art Available.");function ue(e){var t=e.doGetArts,a=e.addArtToCart,l=e.doSearch,o=(e.arts,e.cart),i=e.farts,f=e.loading,b=e.subscribeToNewsLetter;Object(k.a)({key:"home",reducer:D.a}),Object(A.a)({key:"home",saga:I.a});var E=Object(d.g)(),y=ne(),w=Object(r.useContext)(O.a),x=w.user,C=w.logout,N=te(Object(r.useState)(null),2),T=N[0],L=N[1];function z(e){a(e),E.push("/cart")}return Object(r.useEffect)(function(){t("All",T,"dummy")},["All",T,"dummy"]),c.a.createElement("div",null,re,ce,c.a.createElement(ee,{isAuthenticated:x.isAuthenticated,logout:function(){return C()},cartLength:o.length,onChange:function(e){l(e.target.value)}}),c.a.createElement(u.a,{maxWidth:"lg"},c.a.createElement(S.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},le,c.a.createElement(S.a,{item:!0,xs:12,sm:6},c.a.createElement(m.a,{onSearch:function(e){return l(e.target.value)},handleChange:function(e){L(e.target.value)}}))),f?oe:c.a.createElement(c.a.Fragment,null,ie,c.a.createElement("div",{style:{marginLeft:30,marginTop:20,marginBottom:20}},c.a.createElement("h2",{style:{fontWeight:400,fontSize:23}},"Shop Original Art from Artists from Kenya.")),de,i.length>0?c.a.createElement(s.a,null,i.map(function(e){return c.a.createElement("div",{className:y.imageDiv,key:e._id},c.a.createElement("div",{className:"profile-pic"},e.art?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{tile:e}),c.a.createElement("div",{className:"edit"},e.isSold?null:c.a.createElement(h.a,{onClick:function(){return z(e)}}))):c.a.createElement(n.a,{style:{width:100}})),c.a.createElement(g.a,{tile:e,onClick:function(){return z(e)}}))})):c.a.createElement("div",{style:{marginLeft:30,marginTop:20}},fe)),c.a.createElement(v.a,{children:c.a.createElement(j.a,{onSubmit:function(e,t){b(e),t.resetForm()}})})))}var be=Object(o.b)({arts:Object(L.b)(),farts:Object(L.d)(),cart:Object(T.a)(),loading:Object(L.e)()});var me=Object(l.c)(be,function(e){return{doGetArts:function(t,a,n){return e(Object(C.e)(t,a,n))},doSearch:function(t){return e(Object(C.z)(t))},addArtToCart:function(t){return e(Object(x.a)(t))},subscribeToNewsLetter:function(t){return e(Object(C.A)(t))}}});t.default=Object(i.d)(me,r.memo)(ue)},c47c407911fd1a079bf5:function(e,t,a){var n=a("201ed76dcadf8d20a6cb");"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("1e4534d1d62a11482e97")(n,r);n.locals&&(e.exports=n.locals)}}]);