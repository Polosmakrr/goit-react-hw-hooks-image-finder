(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__qgr8s",Modal:"Modal_Modal__18DJd",image:"Modal_image__1rD_T"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem___cP52",ImageGalleryItemimage:"ImageGalleryItem_ImageGalleryItemimage__1R6rE"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2moXt"}},15:function(e,t,a){e.exports={Button:"Button_Button__2u2BT"}},21:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),i=(a(21),a(22),a(13)),s=a(4),l=a(5),u=a(7),m=a(6),h=a(9),g=a.n(h),d=a(8),b=a(1),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={queryName:""},e.handleChange=function(t){e.setState({queryName:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""===e.state.queryName.trim()?d.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"):(e.props.onSubmit(e.state.queryName),e.reset())},e}return Object(l.a)(a,[{key:"reset",value:function(){this.setState({queryName:""})}},{key:"render",value:function(){return Object(b.jsx)("header",{className:g.a.searchbar,children:Object(b.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:g.a.SearchFormbutton,children:Object(b.jsx)("span",{className:g.a.SearchFormbuttonlabel,children:"Search"})}),Object(b.jsx)("input",{onChange:this.handleChange,value:this.state.queryName,className:g.a.SearchForminput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),p=y,j=a(12),f=a.n(j),O=function(e){var t=e.nameList,a=(e.onToggleMenu,e.modalImageLoad);return Object(b.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(b.jsx)("img",{onClick:function(){return a(t.largeImageURL)},className:f.a.ImageGalleryItemimage,src:t.webformatURL,alt:t.type})})},_=a(14),S=a.n(_),v=function(e){var t=e.arrayQueryList,a=e.onToggleMenu,n=e.modalImageLoad;return Object(b.jsx)("ul",{className:S.a.ImageGallery,children:t.map((function(e,t){return Object(b.jsx)(O,{nameList:e,onToggleMenu:a,modalImageLoad:n},e.id+t)}))})},I=a(15),w=a.n(I),x=function(e){var t=e.onClick;return Object(b.jsx)("button",{onClick:function(){return t()},className:w.a.Button,type:"button",children:"Load More"})},M=a(10),L=a.n(M),k=document.querySelector("#modal-root"),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).hendleKeyDownEsc=function(t){"Escape"===t.code&&e.props.onToggleMenu()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onToggleMenu()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hendleKeyDownEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hendleKeyDownEsc)}},{key:"render",value:function(){return Object(o.createPortal)(Object(b.jsx)("div",{className:L.a.Overlay,onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:L.a.Modal,children:Object(b.jsx)("img",{className:L.a.image,src:this.props.modalImage,alt:"LargePhoto"})})}),k)}}]),a}(n.Component),F=N,C=a(16),q=a.n(C);var G=function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&key=").concat("24080783-03e8685994000525a28035f2f","&image_type=photo&orientation=horizontal&page=").concat(t,"&per_page=12")).then((function(e){return 404===e.status?Promise.reject("Oops, something went wrong"):e.json()}))},T=(a(44),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={arrayList:[],queryName:"",page:1,loading:!1,showModal:!1,largeImg:""},e.getLargeImageForModal=function(t){e.toggleModal(),e.setState({largeImg:t})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleFormSubmit=function(t){e.setState({queryName:t,arrayList:[],page:1})},e.handleClikLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;t.queryName===this.state.queryName&&t.page===this.state.page||(this.setState({loading:!0}),G(this.state.queryName,this.state.page).then((function(e){0===e.total?d.b.warn("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"):a.setState((function(t){return{arrayList:[].concat(Object(i.a)(t.arrayList),Object(i.a)(e.hits))}}))})).catch((function(e){return d.b.error("Oops, something went wrong")})).finally((function(){return a.setState({loading:!1})}))),t.arrayList!==this.state.arrayList&&1!==this.state.page&&window.scrollTo({top:document.body.clientHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{onSubmit:this.handleFormSubmit}),this.state.loading&&Object(b.jsx)(q.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100}),0!==this.state.arrayList.length&&Object(b.jsx)(v,{modalImageLoad:this.getLargeImageForModal,arrayQueryList:this.state.arrayList,onToggleMenu:this.toggleModal}),0!==this.state.arrayList.length&&Object(b.jsx)(x,{onClick:this.handleClikLoadMore}),this.state.showModal&&Object(b.jsx)(F,{onToggleMenu:this.toggleModal,modalImage:this.state.largeImg}),Object(b.jsx)(d.a,{})]})}}]),a}(n.Component)),D=T;a(45);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__23Y_V",SearchForm:"Searchbar_SearchForm__1YpyO",SearchFormbutton:"Searchbar_SearchFormbutton__1eH-e",SearchFormbuttonlabel:"Searchbar_SearchFormbuttonlabel__1Ps3w",SearchForminput:"Searchbar_SearchForminput__3Y9DO"}}},[[46,1,2]]]);
//# sourceMappingURL=main.12270e03.chunk.js.map