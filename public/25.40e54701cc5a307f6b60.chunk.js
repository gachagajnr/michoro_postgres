(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"00e2b3cd0e010b86d52c":function(e,t,a){(e.exports=a("0e326f80368fd0b1333e")(!1)).push([e.i,".overlay {\r\n  position: relative;\r\n  display: inline-block;\r\n  /* background: cyan; */\r\n  display: block;\r\n}\r\n\r\n.overlay > img {\r\n  vertical-align: middle;\r\n}\r\n\r\n.overlay:hover::before {\r\n  opacity: 0.23;\r\n}\r\n\r\n.profile-pic {\r\n  position: relative;\r\n  display: block;\r\n  /* width: '100%'; */\r\n}\r\n\r\n.profile-pic:hover .edit {\r\n  display: block;\r\n}\r\n\r\n.edit {\r\n  padding-top: 7px;\r\n  padding-right: 7px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  display: none;\r\n}\r\n\r\n.edit a {\r\n  color: #000;\r\n}\r\n",""])},"411d5bec1a7905a3e51e":function(e,t,a){var r=a("00e2b3cd0e010b86d52c");"string"===typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("1e4534d1d62a11482e97")(r,n);r.locals&&(e.exports=r.locals)},ad84410f17963b6e539b:function(e,t,a){"use strict";a.r(t);a("7b46ef1d59e99389ee64");var r=a("a0f6b34db73a9583097c"),n=(a("5fd8a9969a0df835644f"),a("63034cfb96424fb8b5e5")),c=(a("dafbd9b5e400eb2d6125"),a("93503d126a3bee2c83a7")),l=(a("44d31a554aec3455a02d"),a("9a9f7ee98b00fb7bb7c2")),o=a("9b138a15514959aa8913"),i=a("fc43733ec9d3f066c334"),d=a("d8b4cc19d60808c8feb8"),b=a("b706f2bde56ad8786785"),f=a("950c04bc9733ece61762"),s=a("c577048d0a992a54e27c"),m=a("ad58830e157fbad085fb"),u=a("cad699f601d1c0fc24c5"),p=a("a72b40110d9c31c9b5c5"),g=a("c4ec0be7fefbdf794ace"),E=a("6542cd13fd5dd1bcffd4"),h=a("2cc79d106f9ca49f21f6"),y=a("2af61b8c61ae2e7f9e2e"),v=a("369a2015feb3eb249252"),w=(a("8a2d1b95e05b6a321e74"),a("8af190b70a6bc55c6f1b")),x=a.n(w),k=a("0d7f0986bcd2f33d8a2a"),j=a("0a81c721557e72a0975d"),O=a("103be25b8913a0141218"),T=a("1f7eb4558e149d7a2535"),W=a("a28fc3c963a1d4d1a2e5"),z=a("d95b0cf107403b178365"),A=a("adc20f99e57c573c589c"),C=(a("8384f433e2fbf8c1e335"),a("3818add0c9bac61df642")),N=(a("c8e134b92bdff32b38c0"),a("2908b30917805c6fbf09")),D=a("96cfee79080e19c058c9"),F=a("73c491490691b18f8f8a"),L=a("17eb857c88637893cdde"),I=a("85b71a27cbcf93ff4854"),S=a("25e85fb5cb8efb54d5ce"),M=a.n(S),G=a("006b2ad2e60d1416bd70"),H=a.n(G),J=a("42993e61ed154f509e4c"),B=a("a79467e5f9517820f402"),R=a("4e9d4d8cc0aba6a3b909"),U=a("831dbff2166609c581a0"),_=a.n(U),q=Object(i.a)(function(e){return{grow:{flexGrow:1},appbar:{borderBottom:"1px solid ".concat(e.palette.divider)},title:{color:"orange",fontWeight:400,flexGrow:1,textTransform:"uppercase"}}}),K=l.a.Text,P=x.a.createElement(n.b,{size:"small",align:"center"},x.a.createElement(H.a,null)," My Artwork");function Q(e){var t=Object(w.useContext)(B.a),a=t.user,r=t.logout,c=Object(O.g)(),l=q(),o=x.a.createElement(N.a,null,x.a.createElement(N.a.Item,{onClick:function(){return r()}},"Logout"));return x.a.createElement("div",{className:l.grow},x.a.createElement(L.a,{variant:"dense",className:l.appbar},x.a.createElement("div",{style:{height:40,width:40}},x.a.createElement("img",{alt:"Logo",src:_.a,style:{height:"auto",width:"100%",maxWidth:"40px",maxHeight:"40px"}})),x.a.createElement(I.a,{className:l.title,variant:"overline",noWrap:!0},x.a.createElement(J.a,{to:"/",style:{textDecoration:"none",color:"#000",fontWeight:600}},"Michoro art")),a.isAuthenticated?x.a.createElement(x.a.Fragment,null,x.a.createElement(R.b,{do:"read",on:"NewArt",field:"artist"},x.a.createElement(n.b,{direction:"horizontal"},x.a.createElement(J.a,{to:"/myworks",style:{color:"#000",textDecoration:"none"}},P))),x.a.createElement(C.a,{overlay:o,arrow:!0},x.a.createElement(n.b,{align:"center"},"|",x.a.createElement(K,{strong:!0,style:{textTransform:"capitalize"}},a.firstname)))):x.a.createElement(n.b,null,x.a.createElement(J.a,{to:"/login",style:{color:"#000",textDecoration:"none"}},"Sign In"),x.a.createElement(J.a,{to:"/register",style:{color:"#000",textDecoration:"none"}},"Register")),x.a.createElement(F.a,{edge:"end","aria-label":"shopping cart","aria-haspopup":"true",onClick:function(){return c.push("/cart")},color:"inherit"},x.a.createElement(D.a,{badgeContent:e.cartLength,color:"error"},x.a.createElement(M.a,{style:{color:"orange"}})))))}a("411d5bec1a7905a3e51e");a.d(t,"Artist",function(){return $});var V=l.a.Text,X=Object(i.a)(function(e){return{imageDiv:{cursor:"pointer"}}}),Y=x.a.createElement(k.Helmet,null,x.a.createElement("title",null,"Artist"),x.a.createElement("meta",{name:"description",content:"Description of Artist"})),Z=x.a.createElement(r.a,null);function $(e){var t=e.fetchMyWorks,a=e.addArtToCart,r=e.myWorks,l=e.cartItems,i=e.subscribeToNewsLetter;Object(z.a)({key:"global",reducer:g.a}),Object(A.a)({key:"global",saga:y.a});var p=X(),E=Object(O.i)().id,h=Object(O.g)(),v=Object(O.h)().state.author;function k(e){a(e),h.push("/cart")}return Object(w.useEffect)(function(){t(E)},[E]),x.a.createElement("div",null,Y,x.a.createElement(Q,{cartLength:l.length}),x.a.createElement(o.a,{maxWidth:"md"},x.a.createElement(n.b,{direction:"vertical"},v.firstname?x.a.createElement(n.b,{direction:"vertical"},x.a.createElement(c.a,{size:64,style:{color:"orange",backgroundColor:"grey"}},x.a.createElement(V,{strong:!0,style:{textTransform:"capitalize",color:"white"}},v.firstname.match(/\b(\w)/g),v.lastname.match(/\b(\w)/g))),x.a.createElement(V,{style:{textTransform:"capitalize"}},v.firstname," ",v.lastname),x.a.createElement("div",{style:{background:"orange",padding:10}},x.a.createElement(n.b,{size:"large"},x.a.createElement(V,{style:{color:"white"}},"ArtWorks"),x.a.createElement(V,{style:{textTransform:"capitalize",color:"white",fontWeight:500,fontSize:20}},r.length))),x.a.createElement(V,{style:{textTransform:"capitalize"}},v.about)):null),Z,x.a.createElement(x.a.Fragment,null,r.length>0?x.a.createElement(b.a,null,r.map(function(e){return x.a.createElement("div",{className:p.imageDiv,key:e._id},x.a.createElement("div",{className:"profile-pic"},e.art?x.a.createElement(x.a.Fragment,null,x.a.createElement(f.a,{tile:e}),x.a.createElement("div",{className:"edit"},e.isSold?null:x.a.createElement(s.a,{onClick:function(){return k(e)}}))):x.a.createElement(Spin,{style:{width:100}})),x.a.createElement(m.a,{tile:e,onClick:function(){return k(e)}}))})):x.a.createElement(x.a.Fragment,null,"User has no published works"))),x.a.createElement(d.a,{children:x.a.createElement(u.a,{onSubmit:function(e,t){i(e),t.resetForm()}})}))}var ee=Object(W.b)({myWorks:Object(E.f)(),cartItems:Object(v.a)()});var te=Object(j.c)(ee,function(e){return{fetchMyWorks:function(t){return e(Object(p.e)(t))},addArtToCart:function(t){return e(Object(h.a)(t))},subscribeToNewsLetter:function(t){return e(Object(p.F)(t))}}});t.default=Object(T.d)(te)($)}}]);