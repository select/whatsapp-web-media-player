webpackJsonp([16],{113:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(343),o=i.n(r),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"play-list__import"},[i("div",{staticClass:"play-list__import-header"},[i("div",[t._v(" Import playlist ")]),t._v(" "),i("span",{staticClass:"wmp-icon-close",attrs:{title:"[Esc] Close"},on:{click:t.exit}})]),t._v(" "),i("input",{attrs:{type:"file",id:"import-playlist",title:"Import playlist from file"},on:{change:t.importPlayListHandler}}),t._v(" "),i("label",{staticClass:"button btn--blue",attrs:{for:"import-playlist"}},[t._v("from file")]),t._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:!t.importURLinput,expression:"!importURLinput"}],staticClass:"button btn--blue",on:{click:t.showImportURL}},[t._v("from web")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.importURLinput,expression:"importURLinput"}],staticClass:"play-list__import-url"},[i("span",{staticClass:"smaller"},[t._v("Import Audius, YouTube, Streamly playlists")]),t._v(" "),i("input",{staticClass:"play-list__import-url-input input--border",attrs:{type:"text",placeholder:"… https://api.myjson.com/bins/122zfl"}}),t._v(" "),i("button",{staticClass:"button btn--blue",on:{click:t._importURL}},[t._v("load")])]),t._v(" "),t.showImportOtherPlaylist?t._e():i("button",{staticClass:"button btn--blue",on:{click:function(e){t.showImportOtherPlaylist=!0}}},[t._v("other playlist")]),t._v(" "),t.showImportOtherPlaylist?i("div",[i("select",{staticClass:"play-list__other-playlist-input"},[i("option",{attrs:{value:""}},[t._v("Default")]),t._v(" "),t._l(t.sourcesOrdered,function(e){return i("option",[t._v(t._s(e))])})],2),t._v(" "),i("button",{staticClass:"button btn--blue",on:{click:t.importOtherPlayList}},[t._v("load")])]):t._e()])},l=[];s._withStripped=!0;var a={render:s,staticRenderFns:l},n=a,p=i(1),u=p(o.a,n,!1,null,null,null);u.options.__file="src/components/play-list-import.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files.");e.default=u.exports},343:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},o=i(6),s=function(t){return t&&t.__esModule?t:{default:t}}(o),l=i(0);e.default={data:function(){return{importURLinput:!1,showImportOtherPlaylist:!1}},computed:(0,l.mapState)(["sourcesOrdered"]),methods:r({},(0,l.mapActions)(["importPlayListFromString","importURL"]),{importPlayListHandler:function(t){var e=this,i=t.target.files||t.dataTransfer.files;Array.from(i).forEach(function(t){var i=new FileReader;i.onload=function(t){e.importPlayListFromString(t.target.result),e.$emit("toggleImport",!1)},i.readAsText(t)})},showImportURL:function(){this.importURLinput=!0,s.default.nextTick(function(){document.querySelector(".play-list__import-url-input").focus()})},_importURL:function(){var t=document.querySelector(".play-list__import-url-input");this.importURL({url:t.value}),t.value="",this.$emit("toggleImport",!1)},importOtherPlayList:function(){var t=document.querySelector(".play-list__other-playlist-input");this.$emit("importOtherPlayList",t.value),t.value="",this.$emit("toggleImport",!1)},exit:function(){this.importURLinput=!1,this.$emit("toggleImport",!1)}})}}});