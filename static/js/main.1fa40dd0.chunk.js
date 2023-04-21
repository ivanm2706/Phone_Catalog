(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{29:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c(24),a=c.n(r),n=c(6),i=c(3),o=c(5),l=(c(29),c(0)),d=function(){return Object(l.jsx)(n.c,{className:"logo",to:"/",replace:!0,children:Object(l.jsx)("img",{src:"./img/logo/LOGO.svg",alt:"logo"})})},u=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("footer",{className:"footer__content",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("ul",{className:"footer__list",children:[Object(l.jsx)("li",{className:"footer__item",children:Object(l.jsx)("a",{href:"https://github.com/ivanm2706",className:"footer__link",target:"_blank",rel:"noreferrer",children:"github"})}),Object(l.jsx)("li",{className:"footer__item",children:Object(l.jsx)("a",{href:"tel:+000000000",className:"footer__link",children:"contacts"})}),Object(l.jsx)("li",{className:"footer__item",children:Object(l.jsx)("a",{href:"/",className:"footer__link",children:"rights"})})]}),Object(l.jsxs)("div",{className:"footer__toTop",children:[Object(l.jsx)("span",{className:"footer__toTopTitle",children:"Back to top"}),Object(l.jsx)("button",{type:"button",className:"icon icon--up footer__buttonToTop",onClick:function(){return window.scrollTo(0,0)}})]})]})})})},j=c(9),b=c.n(j),p=["","phones","tablets","accessories"],h=function(){return Object(l.jsx)("nav",{className:"nav",children:Object(l.jsx)("ul",{className:"nav__list",children:p.map((function(e){return Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(n.c,{to:"/".concat(e),replace:!0,className:function(e){var t=e.isActive;return b()("nav__link",{"nav__link--active":t})},children:e||"home"})},e)}))})})},m=function(e,t){return Object.entries(t).forEach((function(t){var c=Object(i.a)(t,2),s=c[0],r=c[1];""===r?e.delete(s):e.set(s,r)})),e.toString()},O=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},_=function(){var e=Object(n.d)(),t=Object(i.a)(e,2),c=t[0],s=t[1],r=c.get("query")||"";return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("input",{className:"search__input",type:"text",placeholder:"Search in favorites...",value:r,onChange:function(e){s(m(c,{query:e.target.value}))}}),Object(l.jsx)(n.b,{className:b()("search__button search__button--search",{"search__button--cross":r}),to:{search:m(c,{query:""})},"data-cy":"searchDelete"})]})},x=function(e){var t=e.favoriteProductLength,c=e.storeCard;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsxs)("div",{className:"header__left",children:[Object(l.jsx)(d,{}),Object(l.jsx)(h,{})]}),Object(l.jsxs)("div",{className:"header__right",children:[Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"/favorite",element:Object(l.jsx)(_,{})}),Object(l.jsx)(o.b,{path:"/phones",element:Object(l.jsx)(_,{})}),Object(l.jsx)(o.b,{path:"/tablets",element:Object(l.jsx)(_,{})}),Object(l.jsx)(o.b,{path:"/accessories",element:Object(l.jsx)(_,{})})]}),Object(l.jsxs)("div",{className:"header__icons",children:[Object(l.jsxs)("div",{className:"header__icon",children:[Object(l.jsx)(n.c,{to:"/favorites",className:function(e){var t=e.isActive;return b()("header__link header__link--heart",{"header__link--active":t})},replace:!0}),!!t&&Object(l.jsx)("span",{className:"header__count",children:t})]}),Object(l.jsxs)("div",{className:"header__icon",children:[Object(l.jsx)(n.c,{to:"/cart",className:function(e){var t=e.isActive;return b()("header__link header__link--catalog",{"header__link--active":t})}}),!!c&&Object(l.jsx)("span",{className:"header__count",children:c})]})]})]})]})},f=function(e){var t=e.children;return Object(l.jsx)("main",{className:"main",children:Object(l.jsx)("div",{className:"container",children:t})})},v=c(4),g=c.n(v),N=c(7),P=function(e){var t=e.message;return Object(l.jsx)("div",{className:"error",children:Object(l.jsx)("h1",{children:t})})},y=function(e){var t=e.lastPage,c=e.link,s=e.type;return Object(l.jsxs)("div",{className:"history history--current","data-cy":"breadCrumbs",children:[Object(l.jsx)(n.b,{className:"history__home",to:"/",replace:!0}),c&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("span",{className:"history__arrow history__arrow--next"}),Object(l.jsx)(n.b,{className:"history__page",to:"/".concat(c),children:s})]}),Object(l.jsx)("span",{className:"history__arrow history__arrow--next"}),Object(l.jsx)("p",{className:"history__page history__page--last",children:t})]})};y.defaultProps={link:null,type:null};var k=function(){return Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("div",{className:"loader__circle"})})},C=function(e){var t=e.message;return Object(l.jsx)("div",{className:"noResult",children:Object(l.jsx)("h1",{children:t})})};var w,S=function(e){var t=e.amount,c=function(e){for(var t=[],c=1;c<=e;c+=1)t.push(c);return t}(t),s=Object(n.d)(),r=Object(i.a)(s,2),a=r[0],o=r[1],d=a.get("page")||"1",u=function(e,t){a.set(e,t.toString()),o(a)};return t<2?null:Object(l.jsxs)("div",{className:"pagination","data-cy":"pagination",children:[Object(l.jsx)("button",{onClick:function(){return u("page",+d-1)},type:"button",className:"icon icon--left pagination__button","data-cy":"paginationLeft",disabled:1===+d}),Object(l.jsx)("div",{className:"pagination__pages",children:c.map((function(e){return Object(l.jsx)("button",{type:"button",onClick:function(){return u("page",e)},className:b()("pagination__page pagination__button",{"pagination__page--active":e===Number(d)}),children:e},e)}))}),Object(l.jsx)("button",{onClick:function(){return u("page",+d+1)},type:"button",className:"icon icon--right pagination__button","data-cy":"paginationRight",disabled:+d===t})]})},F=function(e){var t=e.product,c=e.favoriteProducts,r=e.setSelectedProducts,a=e.selectedProducts,n=e.setFavorite,i=a.find((function(e){return e.id===t.id})),o=Object(s.useMemo)((function(){return t.price-t.price*t.discount/100}),[]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{className:"productCard__image",src:"./".concat(t.imageUrl),alt:t.id}),Object(l.jsx)("p",{className:"productCard__title",children:t.name}),Object(l.jsx)("div",{className:"productCard__price",children:t.discount?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"productCard__newPrice",children:"$".concat(o)}),Object(l.jsx)("p",{className:"productCard__oldPrice",children:"$".concat(t.price)})]}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{className:"productCard__newPrice",children:"$".concat(t.price)})})}),Object(l.jsxs)("div",{className:"productCard__description",children:[Object(l.jsx)("p",{className:"productCard__descriptionTitle",children:"Screen"}),Object(l.jsxs)("p",{className:"productCard__descriptionCard",children:["".concat(Number.parseFloat(t.screen)),"\u201d","  OLED"]})]}),Object(l.jsxs)("div",{className:"productCard__description",children:[Object(l.jsx)("p",{className:"productCard__descriptionTitle",children:"Capacity"}),Object(l.jsx)("p",{className:"productCard__descriptionCard",children:t.capacity&&"".concat(Number.parseFloat(t.capacity)/1e3," GB")})]}),Object(l.jsxs)("div",{className:"productCard__description",children:[Object(l.jsx)("p",{className:"productCard__descriptionTitle",children:"RAM"}),Object(l.jsx)("p",{className:"productCard__descriptionCard",children:t.ram&&"".concat(Number.parseFloat(t.ram)/1e3," GB")})]}),Object(l.jsxs)("div",{className:"productCard__buttons",children:[Object(l.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),e.stopPropagation(),r(t)},className:b()("buttonAdd productCard__button",{"buttonAdd--active":i}),children:i?"Added to cart":"Add to cart"}),Object(l.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),e.stopPropagation(),n(t)},"data-cy":"addToFavorite",className:b()("icon icon--heart productCard__like",{"icon--redHeart":c.find((function(e){var c=e.id;return t.id===c}))})})]})]})};!function(e){e.Phone="phone",e.Tablet="tablet",e.Accessory="accessory"}(w||(w={}));var A=function(e){switch(e){case w.Phone:return"phones";case w.Tablet:return"tablets";case w.Accessory:return"accessories";default:throw new Error("no case")}},T=function(e){var t=e.products,c=e.favoriteProducts,s=e.setFavorite,r=e.selectedProducts,a=e.setSelectedProducts;return Object(l.jsxs)("div",{className:"searchProducts",children:[Object(l.jsx)("p",{className:"searchProducts__subTitle",children:"".concat(t.length," results")}),Object(l.jsx)("div",{className:"searchProducts__productList",children:t.map((function(e){return Object(l.jsx)(n.b,{to:"/".concat(A(e.type),"/").concat(e.id),className:"productCard",children:Object(l.jsx)(F,{setSelectedProducts:a,selectedProducts:r,favoriteProducts:c,product:e,setFavorite:s})},e.id)}))})]})},B=function(){var e=Object(n.d)(),t=Object(i.a)(e,2),c=t[0],s=t[1],r=c.get("sortBy")||"age",a=c.get("perPage")||"All";return Object(l.jsxs)("form",{className:"form productPage__sortForm",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"form__label",children:"Sort by"}),Object(l.jsxs)("select",{onChange:function(e){c.set("sortBy",e.target.value),s(c)},className:"form__select form__select--sort",value:r,children:[Object(l.jsx)("option",{value:"age",children:"Newest"}),Object(l.jsx)("option",{value:"name",children:"Alphabetically"}),Object(l.jsx)("option",{value:"price",children:"Cheapest"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"form__label",children:"Items on page"}),Object(l.jsxs)("select",{onChange:function(e){c.set("perPage",e.target.value),c.set("page","1"),s(c)},className:"form__select form__select--itemPerPage",value:a,children:[Object(l.jsx)("option",{value:"All",children:"All"}),Object(l.jsx)("option",{value:"4",children:"4"}),Object(l.jsx)("option",{value:"8",children:"8"}),Object(l.jsx)("option",{value:"16",children:"16"})]})]})]})},E=function(){var e=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json");case 3:if(!(t=e.sent).ok){e.next=8;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:throw new Error("error");case 11:throw e.prev=11,e.t0=e.catch(0),new Error("error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:return t=e.sent,e.abrupt("return",t.filter((function(e){return e.type===w.Phone})));case 7:throw e.prev=7,e.t0=e.catch(0),new Error("error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:return t=e.sent,e.abrupt("return",t.filter((function(e){return e.type===w.Tablet})));case 7:throw e.prev=7,e.t0=e.catch(0),new Error("error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:return t=e.sent,e.abrupt("return",t.filter((function(e){return e.type===w.Accessory})));case 7:throw e.prev=7,e.t0=e.catch(0),new Error("error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(N.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate-academy.github.io/react_phone-catalog/api/products/".concat(t,".json"));case 3:if(!(c=e.sent).ok){e.next=8;break}return e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:throw new Error("error");case 11:throw e.prev=11,e.t0=e.catch(0),new Error("error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(N.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:return c=e.sent,e.abrupt("return",c.find((function(e){return e.id===t}))||null);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(N.a)(g.a.mark((function e(){var t,c,s,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:t=e.sent,c=[],s=function(){return Math.floor(Math.random()*t.length)},r=function(){c.length||c.push(t[s()]);var e=t[s()];c.some((function(t){return t.id===e.id}))||c.push(e)};do{r()}while(c.length<t.length/2);return e.abrupt("return",c);case 11:throw e.prev=11,e.t0=e.catch(0),new Error("error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),q=c(8),J=function(e,t,c,s){var r=c*(s-1),a=c*s;return Object(q.a)(e).sort((function(e,c){switch(t){case"age":case"price":return e[t]-c[t];case"name":return e[t].localeCompare(c[t]);default:return 0}})).slice(r,a)},W=function(e){var t=e.favoriteProducts,c=e.setFavorite,r=e.selectedProducts,a=e.setSelectedProducts,o=Object(s.useState)([]),d=Object(i.a)(o,2),u=d[0],j=d[1],b=Object(n.d)(),p=Object(i.a)(b,1)[0],h=Object(s.useState)(!1),m=Object(i.a)(h,2),_=m[0],x=m[1],f=Object(s.useState)(!1),v=Object(i.a)(f,2),w=v[0],E=v[1],M=p.get("sortBy")||"age",L=p.get("perPage")||"All",I=p.get("page")||"1",R=p.get("query")||"",$="All"===L?1:Math.ceil(u.length/+L),q=Object(s.useMemo)((function(){return J(u,M,+L||u.length,+I)}),[M,u,L,I]),W=function(){var e=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!1),x(!0),e.next=5,D();case 5:t=e.sent,j(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),E(!0);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){W()}),[]),_?Object(l.jsx)(k,{}):w?Object(l.jsx)(P,{message:"Something went wrong"}):u.length?R?Object(l.jsx)(T,{products:O(u,R),setSelectedProducts:a,selectedProducts:r,favoriteProducts:t,setFavorite:c}):Object(l.jsxs)("div",{className:"productPage",children:[Object(l.jsx)(y,{lastPage:"Accessories"}),Object(l.jsx)("h1",{className:"productPage__title",children:"Tablets"}),Object(l.jsx)("p",{className:"productPage__subTitle",children:"".concat(u.length," models")}),Object(l.jsx)(B,{}),Object(l.jsx)("div",{className:"productPage__productList","data-cy":"productList",children:q.map((function(e){return Object(l.jsx)(n.b,{to:"/".concat(A(e.type),"/").concat(e.id),className:"productCard","data-cy":"cardsContainer",children:Object(l.jsx)(F,{favoriteProducts:t,product:e,setFavorite:c,selectedProducts:r,setSelectedProducts:a})},e.id)}))}),Object(l.jsx)(S,{amount:$})]}):Object(l.jsx)(C,{message:"Accessories not found"})},G=function(){var e=Object(o.n)();return Object(l.jsxs)("button",{type:"button",className:"history history--back",onClick:function(){e(-1)},"data-cy":"backButton",children:[Object(l.jsx)("span",{className:"history__arrow history__arrow--back"}),Object(l.jsx)("p",{className:"history__page history__page--last",children:"Back"})]})},U=(c(32),function(e){var t=e.title,c=e.children,r=Object(s.useRef)(null),a=Object(s.useState)(0),n=Object(i.a)(a,2),o=n[0],d=n[1],u=window.innerWidth,j=272,b=Math.floor(u/j)>4?4:Math.floor(u/j),p=u>=1136?15:(u-b*j)/(b-1),h=u>=1136?1136+p:u+p,m={transform:"translate(-".concat(o,"px, 0)"),gap:"".concat(p,"px")};return Object(l.jsxs)("div",{className:"sliderProduct",children:[Object(l.jsxs)("div",{className:"sliderProduct__header",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsxs)("div",{className:"sliderProduct__buttons",children:[Object(l.jsx)("button",{type:"button",onClick:function(){d((function(e){return e-h<=0?0:e-h}))},className:"icon icon--left sliderProduct__button"}),Object(l.jsx)("button",{type:"button",onClick:function(){var e,t=(null===(e=r.current)||void 0===e?void 0:e.childNodes.length)||0,c=t*j+p*t-1,s=t*j+p*t-1-h+1;d((function(e){return e+2*h>=c?s:e+h}))},className:"icon icon--right sliderProduct__button"})]})]}),Object(l.jsx)("div",{className:"sliderProduct__container",children:Object(l.jsx)("div",{style:m,className:"sliderProduct__imageBlock",ref:r,children:c})})]})}),H=function(e){var t=e.type,c=e.link,r=e.setSelectedProducts,a=e.selectedProducts,d=e.favoriteProducts,u=e.setFavorite,j=Object(o.p)().idProduct,p=Object(s.useState)(null),h=Object(i.a)(p,2),m=h[0],O=h[1],_=Object(s.useState)(null),x=Object(i.a)(_,2),f=x[0],v=x[1],w=Object(s.useState)(!1),S=Object(i.a)(w,2),T=S[0],B=S[1],E=Object(s.useState)(!1),M=Object(i.a)(E,2),L=M[0],D=M[1],q=Object(s.useState)(""),J=Object(i.a)(q,2),W=J[0],H=J[1],Q=Object(s.useState)("blond"),Y=Object(i.a)(Q,2),z=Y[0],K=Y[1],V=Object(s.useState)(64),X=Object(i.a)(V,2),Z=X[0],ee=X[1],te=Object(s.useState)([]),ce=Object(i.a)(te,2),se=ce[0],re=ce[1],ae=Object(s.useMemo)((function(){return f?f.price-f.price*f.discount/100:0}),[f]),ne=function(){var e=Object(N.a)(g.a.mark((function e(){var t,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),D(!1),e.next=5,I(j);case 5:return t=e.sent,e.next=8,R(j);case 8:return c=e.sent,e.next=11,$();case 11:s=e.sent,O(t),v(c),H(t.images[0]),re(s),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),D(!0);case 21:return e.prev=21,B(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){ne()}),[]),T?Object(l.jsx)(k,{}):L?Object(l.jsx)(P,{message:"Can not load details"}):m?Object(l.jsxs)("div",{className:"details",children:[Object(l.jsx)(y,{type:t,link:c,lastPage:m.id}),Object(l.jsx)(G,{}),Object(l.jsx)("h1",{className:"details__title",children:m.name}),Object(l.jsxs)("div",{className:"details__content",children:[Object(l.jsxs)("div",{className:"images details__images",children:[Object(l.jsx)("div",{className:"images__blockButtons",children:m.images.map((function(e){return Object(l.jsx)("button",{type:"button",className:b()("images__button",{"images__button--active":e===W}),onClick:function(){return H(e)},children:Object(l.jsx)("img",{className:"images__imgSmall",src:"./".concat(e),alt:"product"})},e)}))}),Object(l.jsx)("div",{className:"images__blockImg",children:Object(l.jsx)("img",{src:"./".concat(W),className:"details__imgBig",alt:"product"})})]}),Object(l.jsxs)("div",{className:"details__actions",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"colors",children:[Object(l.jsx)("p",{className:"colors__title",children:"Available colors"}),Object(l.jsx)("div",{className:"colors__buttons",children:["blond","camel","grey","light"].map((function(e){return Object(l.jsx)("button",{type:"button",className:b()("colors__button",{"colors__button--active":z===e}),onClick:function(){return K(e)},children:Object(l.jsx)("div",{className:"colors__background colors__background--".concat(e)})},e)}))})]}),Object(l.jsxs)("div",{className:"capacity",children:[Object(l.jsx)("p",{className:"capacity__title",children:"Select capacity"}),Object(l.jsx)("div",{className:"capacity__buttons",children:[64,256,512].map((function(e){return Object(l.jsx)("button",{type:"button",className:b()("capacity__button",{"capacity__button--active":Z===e}),onClick:function(){return ee(e)},children:"".concat(e," GB")},e)}))})]}),Object(l.jsx)("div",{className:"prise",children:(null===f||void 0===f?void 0:f.discount)?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"prise__new",children:"$".concat(ae)}),Object(l.jsx)("p",{className:"prise__old",children:"$".concat(null===f||void 0===f?void 0:f.price)})]}):Object(l.jsx)("p",{className:"prise__new",children:"$".concat(null===f||void 0===f?void 0:f.price)})}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:b()("buttonAdd buttons__addCart",{"buttonAdd--active":a.some((function(e){return e.id===m.id}))}),onClick:function(){return r(f||null)},children:"Add to cart"}),Object(l.jsx)("button",{type:"button",className:b()("icon icon--heart buttons__like",{"icon--redHeart":d.some((function(e){return e.id===m.id}))}),onClick:function(){return u(f||null)}})]}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("div",{className:"info__block info__block--small",children:[Object(l.jsx)("p",{className:"info__title",children:"ram"}),Object(l.jsx)("p",{className:"info__description",children:m.storage.ram})]}),Object(l.jsxs)("div",{className:"info__block",children:[Object(l.jsx)("p",{className:"info__title",children:"Display"}),Object(l.jsx)("p",{className:"info__description",children:m.display.screenResolution})]}),Object(l.jsxs)("div",{className:"info__block",children:[Object(l.jsx)("p",{className:"info__title",children:"USB"}),Object(l.jsx)("p",{className:"info__description",children:m.hardware.usb})]})]})]}),Object(l.jsx)("p",{className:"details__idText",children:"ID ".concat(m.id)})]}),Object(l.jsxs)("div",{className:"details__description","data-cy":"productDescription",children:[Object(l.jsx)("h2",{className:"details__descriptionTitle",children:"About"}),Object(l.jsx)("hr",{className:"details__line"}),Object(l.jsx)("p",{className:"details__info",children:m.description})]}),Object(l.jsxs)("div",{className:"details__descriptionInfo",children:[Object(l.jsx)("h2",{className:"details__descriptionTitle",children:"Tech specs"}),Object(l.jsx)("hr",{className:"details__line"}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("div",{className:"info__block",children:[Object(l.jsx)("p",{className:"info__title",children:"RAM"}),Object(l.jsx)("p",{className:"info__description",children:m.storage.ram})]}),Object(l.jsxs)("div",{className:"info__block",children:[Object(l.jsx)("p",{className:"info__title",children:"Display"}),Object(l.jsx)("p",{className:"info__description",children:m.display.screenResolution})]}),Object(l.jsxs)("div",{className:"info__block",children:[Object(l.jsx)("p",{className:"info__title",children:"USB"}),Object(l.jsx)("p",{className:"info__description",children:m.hardware.usb})]}),Object(l.jsxs)("div",{className:"info__block",children:[Object(l.jsx)("p",{className:"info__title",children:"Battery"}),Object(l.jsx)("p",{className:"info__description",children:m.battery.type})]})]})]})]}),Object(l.jsx)(U,{title:"You may also like",children:se.map((function(e){return Object(l.jsx)(n.b,{to:"/".concat(A(e.type),"/").concat(e.id),className:"productCard",children:Object(l.jsx)(F,{setSelectedProducts:r,selectedProducts:a,favoriteProducts:d,product:e,setFavorite:u})},e.id)}))})]}):Object(l.jsx)(C,{message:"Details"})},Q=function(e){var t=e.favoriteProducts,c=e.setFavorite,s=e.selectedProducts,r=e.setSelectedProducts,a=Object(n.d)(),o=Object(i.a)(a,1)[0].get("query");return t.length?o?Object(l.jsx)(T,{products:O(t,o),setSelectedProducts:r,selectedProducts:s,favoriteProducts:t,setFavorite:c}):Object(l.jsxs)("div",{className:"productPage",children:[Object(l.jsx)(y,{lastPage:"Favourites"}),Object(l.jsx)("h1",{className:"productPage__title",children:"Favourites"}),Object(l.jsx)("p",{className:"productPage__subTitle",children:"".concat(t.length," models")}),Object(l.jsx)("div",{className:"productPage__productList",children:t.map((function(e){return Object(l.jsx)(n.b,{to:"/".concat(A(e.type),"/").concat(e.id),className:"productCard","data-cy":"cardsContainer",children:Object(l.jsx)(F,{favoriteProducts:t,product:e,setFavorite:c,selectedProducts:s,setSelectedProducts:r})},e.id)}))})]}):Object(l.jsx)(C,{message:"Favourites product not selected"})},Y=function(){return Object(l.jsxs)("div",{className:"category",children:[Object(l.jsx)("h1",{className:"category__title",children:"Shop by category"}),Object(l.jsxs)("div",{className:"category__links","data-cy":"categoryLinksContainer",children:[Object(l.jsxs)(n.b,{className:"category__link",to:"/phones",replace:!0,children:[Object(l.jsx)("img",{className:"category__image",src:".\\img\\bunners\\phones.png",alt:"category phones"}),Object(l.jsx)("p",{className:"category__subTitle",children:"Mobile phones"}),Object(l.jsx)("p",{className:"category__amountDevices",children:"".concat(6," models")})]}),Object(l.jsxs)(n.b,{className:"category__link",to:"/tablets",replace:!0,children:[Object(l.jsx)("img",{className:"category__image",src:".\\img\\bunners\\tablets.png",alt:"category tablets"}),Object(l.jsx)("p",{className:"category__subTitle",children:"Tablets"}),Object(l.jsx)("p",{className:"category__amountDevices",children:"".concat(6," models")})]}),Object(l.jsxs)(n.b,{className:"category__link",to:"/accessories",replace:!0,children:[Object(l.jsx)("img",{className:"category__image",src:".\\img\\bunners\\accessories.png",alt:"category accessories"}),Object(l.jsx)("p",{className:"category__subTitle",children:"Accessories"}),Object(l.jsx)("p",{className:"category__amountDevices",children:"".concat(6," models")})]})]})]})},z=function(e){var t=e.children,c=Object(s.useRef)(null),r=Object(s.useState)(0),a=Object(i.a)(r,2),n=a[0],o=a[1];Object(s.useEffect)((function(){var e,t,s=(null===(e=c.current)||void 0===e?void 0:e.childElementCount)||0,r=(null===(t=c.current)||void 0===t?void 0:t.clientWidth)||0,a=s*r,n=setTimeout((function(){(s||r)&&o((function(e){return e+r>=a?0:e+r}))}),5e3);return function(){clearTimeout(n)}}),[n]);var d=Object(s.useMemo)((function(){return{transform:"translate(-".concat(n,"px, 0)")}}),[n]);return Object(l.jsx)("div",{className:"slider",children:Object(l.jsxs)("div",{className:"slider__content",children:[Object(l.jsx)("button",{type:"button",onClick:function(){var e,t,s=(null===(e=c.current)||void 0===e?void 0:e.childElementCount)||0,r=(null===(t=c.current)||void 0===t?void 0:t.clientWidth)||0;(s||r)&&o((function(e){return e-r<0?s*r-r:e-r}))},className:"icon icon--left slider__button"}),Object(l.jsx)("div",{className:"slider__container",children:Object(l.jsx)("div",{ref:c,style:d,className:"slider__imageBlock",children:t})}),Object(l.jsx)("button",{type:"button",onClick:function(){var e,t,s=(null===(e=c.current)||void 0===e?void 0:e.childElementCount)||0,r=(null===(t=c.current)||void 0===t?void 0:t.clientWidth)||0;(s||r)&&o((function(e){return e+r>=s*r?0:e+r}))},className:"icon icon--right slider__button"})]})})},K=function(e){var t=e.selectedProducts,c=e.setSelectedProducts,r=e.favoriteProducts,a=e.setFavorite,o=Object(s.useState)([]),d=Object(i.a)(o,2),u=d[0],j=d[1],b=Object(s.useState)(!1),p=Object(i.a)(b,2),h=p[0],m=p[1],O=Object(s.useState)(!1),_=Object(i.a)(O,2),x=_[0],f=_[1],v=Object(s.useMemo)((function(){return u.filter((function(e){return!!e.discount})).sort((function(e,t){return t.discount-e.discount}))}),[u]),y=Object(s.useMemo)((function(){return u.filter((function(e){return!e.discount})).sort((function(e,t){return t.price-e.price}))}),[u]),C=function(){var e=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),f(!1),e.next=5,E();case 5:t=e.sent,j(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),f(!0);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){C()}),[]),x?Object(l.jsx)(P,{message:"Can`t load products"}):h?Object(l.jsx)(k,{}):Object(l.jsxs)("div",{className:"homePage",children:[Object(l.jsx)("section",{className:"homePage__section",children:Object(l.jsxs)(z,{children:[Object(l.jsx)("span",{id:"1",className:"slider__image slider__image--1"}),Object(l.jsx)("span",{id:"2",className:"slider__image slider__image--2"}),Object(l.jsx)("span",{id:"3",className:"slider__image slider__image--3"}),Object(l.jsx)("span",{id:"4",className:"slider__image slider__image--4"})]})}),Object(l.jsx)("section",{className:"homePage__section",children:Object(l.jsx)(U,{title:"Hot prices",children:v.map((function(e){return Object(l.jsx)(n.b,{to:"/".concat(A(e.type),"/").concat(e.id),className:"productCard","data-cy":"cardsContainer",children:Object(l.jsx)(F,{setSelectedProducts:c,selectedProducts:t,favoriteProducts:r,setFavorite:a,product:e})},e.id)}))})}),Object(l.jsx)("section",{className:"homePage__section",children:Object(l.jsx)(Y,{})}),Object(l.jsx)("section",{className:"homePage__section",children:Object(l.jsx)(U,{title:"Brand new models",children:y.map((function(e){return Object(l.jsx)(n.b,{to:"/".concat(A(e.type),"/").concat(e.id),className:"productCard","data-cy":"cardsContainer",children:Object(l.jsx)(F,{selectedProducts:t,setSelectedProducts:c,favoriteProducts:r,setFavorite:a,product:e})},e.id)}))})})]})},V=function(e){var t=e.setSelectedProducts,c=e.selectedProducts,r=e.favoriteProducts,a=e.setFavorite,o=Object(s.useState)([]),d=Object(i.a)(o,2),u=d[0],j=d[1],b=Object(n.d)(),p=Object(i.a)(b,1)[0],h=Object(s.useState)(!1),m=Object(i.a)(h,2),_=m[0],x=m[1],f=Object(s.useState)(!1),v=Object(i.a)(f,2),w=v[0],E=v[1],L=p.get("sortBy")||"age",D=p.get("perPage")||"All",I=p.get("page")||"1",R=p.get("query")||"",$=Object(s.useMemo)((function(){return J(u,L,+D||u.length,+I)}),[L,u,D,I]),q="All"===D?1:Math.ceil(u.length/+D),W=function(){var e=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),E(!1),e.next=5,M();case 5:t=e.sent,j(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),E(!0);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){W()}),[]),_?Object(l.jsx)(k,{}):w?Object(l.jsx)(P,{message:"Something went wrong"}):u.length?R?Object(l.jsx)(T,{products:O(u,R),setSelectedProducts:t,selectedProducts:c,favoriteProducts:r,setFavorite:a}):Object(l.jsxs)("div",{className:"productPage",children:[Object(l.jsx)(y,{lastPage:"Phone"}),Object(l.jsx)("h1",{className:"productPage__title",children:"Mobile phones"}),Object(l.jsx)("p",{className:"productPage__subTitle",children:"".concat(u.length," models")}),Object(l.jsx)(B,{}),Object(l.jsx)("div",{className:"productPage__productList","data-cy":"productList",children:$.map((function(e){return Object(l.jsx)(n.b,{to:"/".concat(A(e.type),"/").concat(e.id),className:"productCard","data-cy":"cardsContainer",children:Object(l.jsx)(F,{setSelectedProducts:t,selectedProducts:c,favoriteProducts:r,product:e,setFavorite:a})},e.id)}))}),Object(l.jsx)(S,{amount:q})]}):Object(l.jsx)(C,{message:"Phones not found"})},X=function(e){var t=e.product,c=e.onRemove,s=e.onChangeAmount,r=function(){return c(t.item)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:r,type:"button",className:"cart__buttonCross","data-cy":"cartDeleteButton"}),Object(l.jsx)("img",{src:t.item.imageUrl,alt:t.item.id,className:"cart__image"}),Object(l.jsx)("p",{className:"cart__title",children:t.item.name}),Object(l.jsxs)("div",{className:"cart__changeAmount",children:[Object(l.jsx)("button",{type:"button",className:"icon icon--minus cart__button",onClick:function(){1===t.amount?r():s(t.item.id,"incr")},disabled:0===t.amount}),Object(l.jsx)("p",{className:"cart__amount","data-cy":"productQauntity",children:t.amount}),Object(l.jsx)("button",{type:"button",className:"icon icon--plus cart__button",onClick:function(){s(t.item.id,"decr")}})]}),Object(l.jsx)("p",{className:"cart__price",children:"$".concat(t.item.price)})]})},Z=function(e){var t=e.totalPrice,c=e.totalProducts,r=Object(s.useState)(!1),a=Object(i.a)(r,2),n=a[0],o=a[1];return Object(l.jsxs)("div",{className:"totalPrice",children:[Object(l.jsxs)("div",{className:"totalPrice__priceBlock",children:[Object(l.jsx)("p",{className:"totalPrice__price","data-cy":"productQauntity",children:"$".concat(t)}),Object(l.jsx)("p",{className:"totalPrice__priceForItems",children:"Total for ".concat(c," items")})]}),Object(l.jsx)("button",{type:"button",className:"buttonAdd totalPrice__button",onClick:function(){o(!0)},children:"Checkout"}),n&&Object(l.jsx)("p",{className:"totalPrice__message",children:"We are sorry, but this feature is not implemented yet"})]})},ee=function(e){var t=e.selectedProducts,c=e.setSelectedProducts,r=Object(s.useState)((function(){return Object(q.a)(t).map((function(e){return{amount:1,item:e}}))})),a=Object(i.a)(r,2),n=a[0],o=a[1],d=Object(s.useMemo)((function(){return n.reduce((function(e,t){return e+t.item.price*t.amount}),0)}),[n]),u=Object(s.useMemo)((function(){return n.reduce((function(e,t){return e+t.amount}),0)}),[n]),j=function(e,t){o((function(c){return Object(q.a)(c).map((function(c){return e===c.item.id?{amount:"decr"===t?c.amount+1:c.amount-1,item:c.item}:c}))}))},b=function(e){c(e),o((function(t){return Object(q.a)(t).filter((function(t){return t.item.id!==e.id}))}))};return t.length?Object(l.jsxs)("div",{className:"productPage productPage--cart",children:[Object(l.jsx)(G,{}),Object(l.jsx)("h1",{className:"productPage__title",children:"Cart"}),Object(l.jsxs)("div",{className:"productPage__contentCart",children:[Object(l.jsx)("div",{className:"productPage__cartsList",children:n.map((function(e){return Object(l.jsx)("div",{className:"cart",children:Object(l.jsx)(X,{product:e,onChangeAmount:j,onRemove:b})},e.item.id)}))}),Object(l.jsx)(Z,{totalPrice:d,totalProducts:u})]})]}):Object(l.jsx)(C,{message:"Your cart is empty"})},te=function(e){var t=e.favoriteProducts,c=e.setSelectedProducts,r=e.selectedProducts,a=e.setFavorite,o=Object(s.useState)([]),d=Object(i.a)(o,2),u=d[0],j=d[1],b=Object(n.d)(),p=Object(i.a)(b,1)[0],h=Object(s.useState)(!1),m=Object(i.a)(h,2),_=m[0],x=m[1],f=Object(s.useState)(!1),v=Object(i.a)(f,2),w=v[0],E=v[1],M=p.get("sortBy")||"age",D=p.get("perPage")||"All",I=p.get("page")||"1",R=p.get("query")||"",$="All"===D?1:Math.ceil(u.length/+D),q=Object(s.useMemo)((function(){return J(u,M,+D||u.length,+I)}),[M,u,D,I]),W=function(){var e=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),E(!1),e.next=5,L();case 5:t=e.sent,j(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),E(!0);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){W()}),[]),_?Object(l.jsx)(k,{}):w?Object(l.jsx)(P,{message:"Something went wrong"}):u.length?R?Object(l.jsx)(T,{products:O(u,R),setSelectedProducts:c,selectedProducts:r,favoriteProducts:t,setFavorite:a}):Object(l.jsxs)("div",{className:"productPage",children:[Object(l.jsx)(y,{lastPage:"Tablets"}),Object(l.jsx)("h1",{className:"productPage__title",children:"Tablets"}),Object(l.jsx)("p",{className:"productPage__subTitle",children:"".concat(u.length," models")}),Object(l.jsx)(B,{}),Object(l.jsx)("div",{className:"productPage__productList","data-cy":"productList",children:q.map((function(e){return Object(l.jsx)(n.b,{to:"/".concat(A(e.type),"/").concat(e.id),className:"productCard","data-cy":"cardsContainer",children:Object(l.jsx)(F,{setSelectedProducts:c,selectedProducts:r,favoriteProducts:t,product:e,setFavorite:a})},e.id)}))}),Object(l.jsx)(S,{amount:$})]}):Object(l.jsx)(C,{message:"Tablets not found"})};c(33);function ce(e){var t=Object(s.useState)((function(){return JSON.parse(localStorage.getItem(e)||"[]")})),c=Object(i.a)(t,2),r=c[0],a=c[1];return[r,function(t){if(t)if(r.find((function(e){return e.id===t.id}))){var c=r.filter((function(e){return e.id!==t.id}));a(c),c.length?localStorage.setItem(e,JSON.stringify(c)):localStorage.removeItem(e)}else{var s=[].concat(Object(q.a)(r),[t]);a(s),localStorage.setItem(e,JSON.stringify(s))}}]}var se=function(){return Object(l.jsx)("div",{className:"notFound",children:Object(l.jsx)("h1",{children:"Page not found"})})},re=function(){var e=ce("favorite"),t=Object(i.a)(e,2),c=t[0],s=t[1],r=ce("store"),a=Object(i.a)(r,2),n=a[0],d=a[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(x,{favoriteProductLength:c.length,storeCard:n.length}),Object(l.jsx)(f,{children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"/home",element:Object(l.jsx)(o.a,{to:"/"})}),Object(l.jsx)(o.b,{path:"*",element:Object(l.jsx)(se,{})}),Object(l.jsx)(o.b,{path:"/",element:Object(l.jsx)(K,{setFavorite:s,favoriteProducts:c,selectedProducts:n,setSelectedProducts:d})}),Object(l.jsxs)(o.b,{path:"/phones",children:[Object(l.jsx)(o.b,{index:!0,element:Object(l.jsx)(V,{favoriteProducts:c,setFavorite:s,selectedProducts:n,setSelectedProducts:d})}),Object(l.jsx)(o.b,{path:"/phones/:idProduct",element:Object(l.jsx)(H,{type:"Phones",link:"phones",favoriteProducts:c,setFavorite:s,selectedProducts:n,setSelectedProducts:d})})]}),Object(l.jsxs)(o.b,{path:"/tablets",children:[Object(l.jsx)(o.b,{index:!0,element:Object(l.jsx)(te,{favoriteProducts:c,setFavorite:s,selectedProducts:n,setSelectedProducts:d})}),Object(l.jsx)(o.b,{path:"/tablets/:idProduct",element:Object(l.jsx)(H,{type:"Tablets",link:"tablets",favoriteProducts:c,setFavorite:s,selectedProducts:n,setSelectedProducts:d})})]}),Object(l.jsxs)(o.b,{path:"/accessories",children:[Object(l.jsx)(o.b,{index:!0,element:Object(l.jsx)(W,{favoriteProducts:c,setFavorite:s,selectedProducts:n,setSelectedProducts:d})}),Object(l.jsx)(o.b,{path:"/accessories/:idProduct",element:Object(l.jsx)(H,{type:"Accessories",link:"accessories",favoriteProducts:c,setFavorite:s,selectedProducts:n,setSelectedProducts:d})})]}),Object(l.jsx)(o.b,{path:"/favorites",element:Object(l.jsx)(Q,{favoriteProducts:c,setFavorite:s,selectedProducts:n,setSelectedProducts:d})}),Object(l.jsx)(o.b,{path:"/cart",element:Object(l.jsx)(ee,{selectedProducts:n,setSelectedProducts:d})})]})}),Object(l.jsx)(u,{})]})};a.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(re,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1fa40dd0.chunk.js.map