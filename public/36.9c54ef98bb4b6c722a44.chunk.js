(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"3bd3b5610a2827e91ec1":function(e,t,a){"use strict";a.r(t);a("5fd8a9969a0df835644f");var r=a("63034cfb96424fb8b5e5"),n=a("8af190b70a6bc55c6f1b"),o=a.n(n),c=(a("8a2d1b95e05b6a321e74"),a("0a81c721557e72a0975d")),i=(a("0d7f0986bcd2f33d8a2a"),a("a28fc3c963a1d4d1a2e5")),l=a("1f7eb4558e149d7a2535"),s=a("fc43733ec9d3f066c334"),m=a("9b138a15514959aa8913"),u=a("8113359511cd270e25e9"),d=a("85b71a27cbcf93ff4854"),b=a("71d2f9a0d515b86993c4"),f=a("b1f27207ff04ebac9dd2"),p=a("5c074b03d7a8b02c5e74"),g=a("cebd0e962afe78a88020"),h=a("d8b4cc19d60808c8feb8"),E=a("cad699f601d1c0fc24c5"),y=a("adc20f99e57c573c589c"),v=a("d95b0cf107403b178365"),w=a("369a2015feb3eb249252"),x=a("a72b40110d9c31c9b5c5"),A=a("c4ec0be7fefbdf794ace"),S=a("2af61b8c61ae2e7f9e2e"),j=a("a79467e5f9517820f402"),k=a("60ead7d14fed7e819edb"),O=(a("8384f433e2fbf8c1e335"),a("3818add0c9bac61df642")),T=(a("c8e134b92bdff32b38c0"),a("2908b30917805c6fbf09")),C=(a("44d31a554aec3455a02d"),a("9a9f7ee98b00fb7bb7c2")),D=a("17eb857c88637893cdde"),L=a("73c491490691b18f8f8a"),N=a("96cfee79080e19c058c9"),I=a("103be25b8913a0141218"),M=a("42993e61ed154f509e4c"),P=a("4258a29b8d537ad1fdb6"),W=a.n(P),z=a("006b2ad2e60d1416bd70"),U=a.n(z),F=a("25e85fb5cb8efb54d5ce"),G=a.n(F),R=a("4e9d4d8cc0aba6a3b909"),B=(a("831dbff2166609c581a0"),Object(s.a)(function(e){return{grow:{flexGrow:1},appbar:{},title:{color:"orange",fontWeight:400,flexGrow:1,textTransform:"uppercase"}}})),H=C.a.Text,J=o.a.createElement(W.a,null),K=o.a.createElement(r.b,{align:"center"},o.a.createElement(U.a,null)," My Artwork");function Y(e){var t=Object(n.useContext)(j.a),c=t.user,i=t.logout,l=Object(I.g)(),s=B(),m=o.a.createElement(T.a,null,o.a.createElement(T.a.Item,{onClick:function(){return i()}},"Logout"));return o.a.createElement("div",{className:s.grow},o.a.createElement(D.a,{className:s.appbar},o.a.createElement("div",{style:{height:40,width:40}},o.a.createElement("img",{alt:"Logo",src:a("831dbff2166609c581a0"),style:{height:"auto",width:"100%"}})),o.a.createElement(d.a,{className:s.title,variant:"overline",noWrap:!0},o.a.createElement(M.a,{to:"/",style:{textDecoration:"none",color:"orange"}},"Michoro art")),c.isAuthenticated?o.a.createElement(r.b,null,o.a.createElement(R.b,{do:"read",on:"Profile",field:"user"},o.a.createElement(L.a,{edge:"end","aria-label":"shopping cart","aria-haspopup":"true",onClick:function(){return l.push("/profile")},color:"inherit"},J)),o.a.createElement(R.b,{do:"read",on:"NewArt",field:"artist"},o.a.createElement(r.b,{direction:"horizontal"},o.a.createElement(M.a,{to:"/myworks",style:{color:"#000",textDecoration:"none"}},K))),o.a.createElement(O.a,{overlay:m,arrow:!0},o.a.createElement("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},o.a.createElement(r.b,{align:"center"},"|",o.a.createElement(H,{strong:!0,style:{textTransform:"capitalize"}},c.firstname))))):o.a.createElement(r.b,null,o.a.createElement(M.a,{to:"/login",style:{color:"#000",textDecoration:"none"}},"Sign In"),o.a.createElement(M.a,{to:"/register",style:{color:"#000",textDecoration:"none"}},"Register")),o.a.createElement(L.a,{edge:"end","aria-label":"shopping cart","aria-haspopup":"true",onClick:function(){return l.push("/cart")},color:"inherit"},o.a.createElement(N.a,{badgeContent:e.cartLength,color:"error"},o.a.createElement(G.a,{style:{color:"orange"}})))))}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return q(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"About",function(){return oe});var Q=Object(s.a)(function(e){return{heroContent:{padding:e.spacing(4,0,4)}}}),V=o.a.createElement(k.a,null),X=o.a.createElement(u.a,{item:!0,xs:12,sm:6},o.a.createElement(f.a,null)),Z=o.a.createElement(g.a,{post:{title:"Shop Art You Love",description:"Discover Original Paintings | Photography Experiences | Sculptures | Limited Artworks | Drawing ArtPieces | Custom Artworks and Pieces from Upcoming and Established Artists from Kenya.",image:"https://michoroarts.s3.us-east-2.amazonaws.com/art@@.png",imgText:"Shop Art on Michoro Art",linkText:"Explore\u2026"}}),_=o.a.createElement(d.a,{variant:"h5",align:"center",color:"textSecondary",component:"p"},"Discover Artworks from artists who love what they do. We provide you with the best from renowned and emerging artists from Kenya."),ee=o.a.createElement(b.a,null),te=o.a.createElement(u.a,{item:!0,xs:12,sm:6,md:4},o.a.createElement(r.b,{direction:"vertical"},o.a.createElement(d.a,{variant:"button",align:"center",component:"p"},"Original Artworks"),o.a.createElement(d.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Original artworks and pieces directly from the artist each with artist's sign ."))),ae=o.a.createElement(u.a,{item:!0,xs:12,sm:6,md:4},o.a.createElement(r.b,{direction:"vertical"},o.a.createElement(d.a,{variant:"button",align:"center",component:"p"},"Support Artists"),o.a.createElement(d.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"By purchasing art on Michoro Art you support artists who love what they do."))),re=o.a.createElement(u.a,{item:!0,xs:12,sm:6,md:4},o.a.createElement(r.b,{direction:"vertical"},o.a.createElement(d.a,{variant:"button",align:"center",component:"p"},"Free shipping"),o.a.createElement(d.a,{variant:"subtitle1",align:"center",color:"textSecondary"},"Enjoy free shipping and 100% money-back guarantee convenient return policy on all art purchased on Michoro Art"))),ne=o.a.createElement(u.a,{item:!0,xs:12,sm:8},o.a.createElement(r.b,{direction:"vertical"},o.a.createElement(r.b,{direction:"vertical"},o.a.createElement(d.a,{variant:"button",align:"start",component:"p"},"ART THAT MEETS YOUR NEEDS."),o.a.createElement(d.a,{variant:"subtitle1",align:"start",color:"textSecondary",component:"p"},"Every artwork portrays a story from the artist to the world. Discover art that meets your needs through our search and keyword mapping, size, price to find art you love.")),o.a.createElement(r.b,{direction:"vertical"},o.a.createElement(d.a,{variant:"button",align:"start",component:"p"},"Support Artists"),o.a.createElement(d.a,{variant:"subtitle1",align:"start",color:"textSecondary",component:"p"},"Discover new art everyday from our valued artists who are continuously showcasing their talents and experiences through art. We pay our artists for all artworks sold.")),o.a.createElement(r.b,{direction:"vertical"},o.a.createElement(d.a,{variant:"button",align:"start",component:"p"},"PEACEFUL SHOPPING"),o.a.createElement(d.a,{variant:"subtitle1",align:"start",color:"textSecondary",component:"p"},"Shop art you love on our platform with confidence. With our secure and safe payments and 7 day free returns policy, you enjoy a peace guaranteed shopping experience."))));function oe(e){var t=e.cart,r=e.subscribeToNewsLetter;Object(v.a)({key:"global",reducer:A.a}),Object(y.a)({key:"global",saga:S.a});var c=Q(),i=Object(n.useContext)(j.a).user,l=$(Object(n.useState)(null),2),s=(l[0],l[1]);return o.a.createElement("div",null,V,o.a.createElement(Y,{isAuthenticated:i.isAuthenticated,logout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return logout()}),cartLength:t.length}),o.a.createElement("div",{style:{margin:0}},o.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},X,o.a.createElement(u.a,{item:!0,xs:12,sm:6},o.a.createElement(p.a,{onSearch:function(e){return doSearch(e.target.value)},handleChange:function(e){s(e.target.value)}}))),Z),o.a.createElement(m.a,{maxWidth:"lg"},o.a.createElement(m.a,{maxWidth:"sm",component:"main",className:c.heroContent},_),ee,o.a.createElement(u.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center",spacing:2,style:{marginTop:20}},te,ae,re),o.a.createElement(b.a,{style:{marginTop:30}}),o.a.createElement(d.a,{style:{marginTop:30},gutterBottom:!0,variant:"h2",align:"center"},"Michoro Art"),o.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},o.a.createElement(u.a,{item:!0,xs:12,sm:4},o.a.createElement("img",{alt:"Logo",src:a("831dbff2166609c581a0"),style:{height:"auto",width:"80%"}})),ne),o.a.createElement(h.a,{children:o.a.createElement(E.a,{onSubmit:function(e,t){r(e),t.resetForm()}})})))}var ce=Object(i.b)({cart:Object(w.a)()});var ie=Object(c.c)(ce,function(e){return{subscribeToNewsLetter:function(t){return e(Object(x.A)(t))}}});t.default=Object(l.d)(ie,n.memo)(oe)}}]);