(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{317:function(t,e,n){var content=n(325);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("1b7833da",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";var o=n(317);n.n(o).a},325:function(t,e,n){(e=n(48)(!1)).push([t.i,".videocontainer{padding:10px}.videoyt{border-radius:5px;width:100%;height:56.25%;max-height:56.25%;background-size:cover;background-position:50%;transition:opacity .15s ease-in-out}.videoyt-img{width:100%;height:100%;opacity:0}.videoyt:hover{opacity:.5}.h1-video{margin:0!important;padding:0!important;font-size:1rem}.main-destacado{padding:40px 20px;background-image:linear-gradient(rgba(0,0,0,.8),var(--xpend-bg)),url(https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500);background-position:50%}.aviso_img{width:400px;height:400px;border-radius:15px}.aviso_1{display:flex;justify-content:center;align-items:center;height:400px}@media only screen and (max-width:768px){.aviso_1{display:flex;justify-content:center;align-items:center;height:150px}}.aviso-main{background:#000;padding:20px}",""]),t.exports=e},328:function(t,e,n){"use strict";n.r(e);var o=n(61),r=n.n(o),c={name:"Inicio",created:function(){this.getVideos()},data:function(){return{videos:[],site:{titulo:"Wings Records: Inicio",img:"https://wingsrecords.github.io/og-image.png",descripcion:"Sitio oficial de Wings Records."}}},methods:{getVideos:function(){var t=this;r.a.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAuHREUYFK_2PzCn3tzyttGxgiZAgMfvII&channelId=UCzuVzDEhcGenuCDFriDQ-3g&part=snippet,id&order=date&maxResults=8").then((function(e){t.videos=e.data.items}))}},head:function(){return{title:this.site.titulo,meta:[{hid:"description",name:"description",content:this.site.descripcion},{property:"og:title",content:this.site.titulo},{property:"og:image",content:this.site.img},{property:"og:description",content:this.site.descripcion},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:this.site.titulo},{name:"twitter:site",content:"@xpendmusic"},{name:"twitter:description",content:this.site.descripcion},{name:"twitter:image",content:this.site.img}]}}},d=(n(324),n(31)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("br"),n("br"),t._v(" "),n("section",{staticClass:"aviso-main"},[n("el-row",{staticClass:"x-center xf-blanco"},[n("el-col",{attrs:{xs:24,sm:12,lg:12}},[n("div",{staticClass:"aviso_1"},[n("div",[n("h1",[t._v("¡CLASSIC REMIX CONTEST!")]),t._v(" "),n("p",[t._v("En colaboracion con Xpend Music")]),t._v(" "),n("a",{staticClass:"x-btn",attrs:{href:"https://xpendmusic.com/artistas/zeckromxenial/classic-remix-contest",target:"_blank"}},[t._v("Participar")])])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:12,lg:12}},[n("img",{staticClass:"aviso_img",attrs:{src:"https://xpendmusic.com/assets/images/cover/classic-teaser.jpg",alt:""}})])],1)],1),t._v(" "),n("div",{staticClass:"container x-mt-2_5"},[n("section",{attrs:{id:"videos"}},[n("br"),n("br"),n("br"),t._v(" "),n("h1",{staticClass:"x-center"},[t._v("ÚLTIMOS LANZAMIENTOS")]),t._v(" "),n("br"),t._v(" "),n("el-row",t._l(t.videos,(function(e){return n("el-col",{key:e,attrs:{xs:24,sm:12,lg:6,xl:3}},[n("div",{staticClass:"videocontainer"},[n("a",{attrs:{href:"https://youtu.be/"+e.id.videoId,target:"_blank",title:"Ver video"}},[n("div",{staticClass:"videoyt",style:"background-image: url(https://img.youtube.com/vi/"+e.id.videoId+"/sddefault.jpg);"},[n("img",{staticClass:"videoyt-img",attrs:{src:"https://img.youtube.com/vi/"+e.id.videoId+"/mqdefault.jpg",alt:e.snippet.title}})])]),t._v(" "),n("h1",{staticClass:"h1-video"},[t._v(t._s(e.snippet.title))])])])})),1),t._v(" "),t._m(0),n("br")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"x-center"},[e("a",{attrs:{href:"https://www.youtube.com/c/wingsrecords/videos",target:"_blank"}},[e("span",{staticClass:"button--youtube"},[e("span",{staticClass:"fa fa-youtube-play"}),this._v(" Ver mas")])])])}],!1,null,null,null);e.default=component.exports}}]);