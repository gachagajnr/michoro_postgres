(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"8f202f8ef9815a1a71f1":function(e,t,a){var n=a("96dd30422e7939e37d39");"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("1e4534d1d62a11482e97")(n,r);n.locals&&(e.exports=n.locals)},"96dd30422e7939e37d39":function(e,t,a){(e.exports=a("0e326f80368fd0b1333e")(!1)).push([e.i,".overlay {\n  position: relative;\n  display: inline-block;\n  /* background: cyan; */\n  display: block;\n}\n\n.overlay > img {\n  vertical-align: middle;\n}\n\n.overlay:hover::before {\n  opacity: 0.23;\n}\n\n.profile-pic {\n  position: relative;\n  display: block;\n  /* width: '100%'; */\n}\n\n.profile-pic:hover .edit {\n  display: block;\n}\n\n.edit {\n  padding-top: 7px;\n  padding-right: 7px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: none;\n}\n\n.edit a {\n  color: #000;\n}\n",""])},"992f721d56b9cffa9a33":function(e,t,a){"use strict";a.r(t);a("57ed083724b519d13f5b");var n=a("e0239d13096660238942"),r=a("8af190b70a6bc55c6f1b"),c=a.n(r),o=(a("8a2d1b95e05b6a321e74"),a("0a81c721557e72a0975d")),l=(a("0d7f0986bcd2f33d8a2a"),a("a28fc3c963a1d4d1a2e5")),i=a("1f7eb4558e149d7a2535"),d=a("103be25b8913a0141218"),f=a("fc43733ec9d3f066c334"),u=a("9b138a15514959aa8913"),b=a("b1f27207ff04ebac9dd2"),s=a("13e66589a8c9c5434635"),m=a("b706f2bde56ad8786785"),p=a("950c04bc9733ece61762"),g=a("ad58830e157fbad085fb"),h=a("c577048d0a992a54e27c"),E=a("b71a11ba789fb126d25a"),y=a("1eca738fec3a62741301"),v=a("d8b4cc19d60808c8feb8"),j=a("cad699f601d1c0fc24c5"),w=a("60ead7d14fed7e819edb"),O=a("a79467e5f9517820f402"),x=a("adc20f99e57c573c589c"),k=a("d95b0cf107403b178365"),A=a("2cc79d106f9ca49f21f6"),C=a("a72b40110d9c31c9b5c5"),S=a("369a2015feb3eb249252"),N=a("6542cd13fd5dd1bcffd4"),T=a("c4ec0be7fefbdf794ace"),D=a("2af61b8c61ae2e7f9e2e"),I=(a("8f202f8ef9815a1a71f1"),a("4d21dcf4cdbc6de8d1ea")),L=(a("8384f433e2fbf8c1e335"),a("3818add0c9bac61df642")),P=(a("5fd8a9969a0df835644f"),a("63034cfb96424fb8b5e5")),z=(a("c8e134b92bdff32b38c0"),a("2908b30917805c6fbf09")),G=(a("44d31a554aec3455a02d"),a("9a9f7ee98b00fb7bb7c2")),F=a("17eb857c88637893cdde"),M=a("73c491490691b18f8f8a"),W=a("96cfee79080e19c058c9"),J=a("85b71a27cbcf93ff4854"),R=a("42993e61ed154f509e4c"),B=a("696d4c5d3f61a6a82713"),H=a.n(B),U=a("4258a29b8d537ad1fdb6"),$=a.n(U),_=a("006b2ad2e60d1416bd70"),q=a.n(_),K=a("4e9d4d8cc0aba6a3b909"),Q=(a("831dbff2166609c581a0"),Object(f.a)(function(e){return{grow:{flexGrow:1},appbar:{marginBottom:10},title:{color:"orange",fontWeight:400,flexGrow:1,textTransform:"uppercase"}}})),V=G.a.Text,X=c.a.createElement(I.a,null),Y=c.a.createElement($.a,null),Z=c.a.createElement(P.b,{size:"small",align:"center"},c.a.createElement(q.a,null)," My Artwork");function ee(e){var t=Object(r.useContext)(O.a),n=t.user,o=t.logout,l=Object(d.g)(),i=Q(),f=c.a.createElement(z.a,null,c.a.createElement(z.a.Item,{icon:X,onClick:function(){return o()}},"Logout"));return c.a.createElement("div",{className:i.grow},c.a.createElement(F.a,{className:i.appbar},c.a.createElement("div",{style:{height:40,width:40}},c.a.createElement("img",{alt:"Logo",src:a("831dbff2166609c581a0"),style:{height:"auto",width:"100%",maxWidth:"40px",maxHeight:"40px"}})),c.a.createElement(J.a,{className:i.title,variant:"overline"},c.a.createElement(R.a,{to:"/",style:{textDecoration:"none",color:"orange"}},"Michoro art")),n.isAuthenticated?c.a.createElement(P.b,null,c.a.createElement(K.b,{do:"read",on:"Profile",field:"user"},c.a.createElement(M.a,{edge:"end","aria-label":"shopping cart","aria-haspopup":"true",onClick:function(){return l.push("/profile")},color:"inherit"},Y)),c.a.createElement(K.b,{do:"read",on:"NewArt",field:"artist"},c.a.createElement(P.b,{direction:"horizontal"},c.a.createElement(R.a,{to:"/myworks",style:{color:"#000",textDecoration:"none"}},Z))),c.a.createElement(L.a,{overlay:f,arrow:!0},c.a.createElement("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},c.a.createElement(P.b,{align:"center"},"|",c.a.createElement(V,{strong:!0,style:{textTransform:"capitalize"}},n.firstname))))):c.a.createElement(P.b,null,c.a.createElement(R.a,{to:"/login",style:{color:"#000",textDecoration:"none"}},"Sign In"),c.a.createElement(R.a,{to:"/register",style:{color:"#000",textDecoration:"none"}},"Register")),c.a.createElement(M.a,{edge:"end","aria-label":"shopping cart","aria-haspopup":"true",onClick:function(){return l.push("/cart")},color:"inherit"},c.a.createElement(W.a,{badgeContent:e.cartLength,color:"error"},c.a.createElement(H.a,{style:{color:"orange"}})))))}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return ae(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"Photography",function(){return de});var ne=a("c25d3de6a26e2dd439cd"),re=Object(f.a)(function(e){return{imageDiv:{cursor:"pointer"}}}),ce=c.a.createElement(w.g,null),oe=c.a.createElement(y.a,null),le=c.a.createElement(b.a,null),ie=c.a.createElement(E.a,null);function de(e){var t=e.doGetArts,a=e.addArtToCart,o=e.doSearch,l=(e.arts,e.cart),i=e.farts,f=e.loading,b=e.subscribeToNewsLetter;Object(k.a)({key:"global",reducer:T.a}),Object(x.a)({key:"global",saga:D.a});var E=Object(d.g)(),y=re(),w=Object(r.useContext)(O.a),A=w.user,C=w.logout,S=te(Object(r.useState)(null),2),N=S[0],I=S[1];ne.parse(location.search);function L(e){a(e),E.push("/cart")}return Object(r.useEffect)(function(){t("Photography",N)},["Photography",N]),c.a.createElement("div",null,ce,oe,c.a.createElement(ee,{isAuthenticated:A.isAuthenticated,logout:function(){return C()},cartLength:l.length,onChange:function(e){o(e.target.value)}}),c.a.createElement(u.a,{maxWidth:"lg"},c.a.createElement(s.a,{onSearch:function(e){return o(e)},handleChange:function(e){I(e)}}),le,f?ie:c.a.createElement(c.a.Fragment,null,i.length>0?c.a.createElement(m.a,null,i.map(function(e){return c.a.createElement("div",{className:y.imageDiv,key:e._id},c.a.createElement("div",{className:"profile-pic"},e.art?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{tile:e}),c.a.createElement("div",{className:"edit"},e.isSold?null:c.a.createElement(h.a,{onClick:function(){return L(e)}}))):c.a.createElement(n.a,{style:{width:100}})),c.a.createElement(g.a,{tile:e,onClick:function(){return L(e)}}))})):c.a.createElement("div",{style:{margin:"auto"}},"Currently no art available. Refresh Page")),c.a.createElement(v.a,{children:c.a.createElement(j.a,{onSubmit:function(e,t){b(e),t.resetForm()}})})))}var fe=Object(l.b)({arts:Object(N.b)(),farts:Object(N.d)(),cart:Object(S.a)(),loading:Object(N.e)()});var ue=Object(o.c)(fe,function(e){return{doGetArts:function(t,a){return e(Object(C.e)(t,a))},doSearch:function(t){return e(Object(C.z)(t))},addArtToCart:function(t){return e(Object(A.a)(t))},subscribeToNewsLetter:function(t){return e(Object(C.A)(t))}}});t.default=Object(i.d)(ue,r.memo)(de)}}]);