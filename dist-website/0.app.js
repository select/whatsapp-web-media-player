webpackJsonp([0],{162:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},r=o(0),i=o(4);e.default={computed:n({},(0,i.mapModuleState)("matrix",["credentials","isGuest"])),methods:n({},(0,r.mapActions)(["loginMatrixWithPassword"]),{matrixLogin:function(){var t=this.$el.querySelector("#username"),e=this.$el.querySelector("#password");this.loginMatrixWithPassword({username:t.value,password:e.value}),this.$el.querySelector("#username").value="",this.$el.querySelector("#password").value=""}})}},176:function(t,e,o){"use strict";function n(t){l||o(198)}Object.defineProperty(e,"__esModule",{value:!0});var r=o(162),i=o.n(r);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);var s=o(200),l=!1,c=o(1),u=n,m=c(i.a,s.a,!1,u,null,null);m.options.__file="src/components/matrix-login.vue",e.default=m.exports},198:function(t,e,o){var n=o(199);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(3)("1518e20c",n,!1)},199:function(t,e,o){e=t.exports=o(2)(void 0),e.push([t.i,"",""])},200:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",{staticClass:"matrix-login"},[o("tr",[o("td",[t._v("Username")]),t._v(" "),o("td",[o("input",{staticClass:"input--border",attrs:{type:"text",id:"username"},domProps:{value:t.isGuest?"":t.credentials.userId}})])]),t._v(" "),t._m(0),t._v(" "),o("tr",[o("td"),t._v(" "),o("td",{staticStyle:{"text-align":"right"}},[o("a",{staticClass:"button btn--blue-ghost create-room__register",attrs:{target:"_blank",href:"https://riot.im/app/#/register"}},[t._v("Register")]),t._v(" "),o("button",{staticClass:"button btn--blue",attrs:{type:"button"},on:{click:t.matrixLogin}},[t._v("Login")])])])])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("td",[t._v("Password")]),t._v(" "),o("td",[o("input",{staticClass:"input--border",attrs:{type:"password",id:"password"}})])])}];n._withStripped=!0;var i={render:n,staticRenderFns:r};e.a=i},247:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},i=o(0),a=o(9),s=n(a),l=o(387),c=n(l),u=o(392),m=n(u),d=o(396),_=n(d),p=o(176),v=n(p),f=o(4);e.default={components:{draggable:s.default,MatrixCreateRoom:c.default,MatrixPublicRooms:m.default,MatrixConsentModal:_.default,MatrixLogin:v.default},data:function(){return{showConfirmDelte:!1,showHidden:!1}},created:function(){var t=this;this.initModule("matrix"),setTimeout(function(){t.$forceUpdate()},1e3)},methods:r({},(0,i.mapMutations)(["selectMediaSource","setShowMediumSettings","toggleMatrixRoomModal","toggleMatrixRoomDirectory","toggleMatrixLoginModal","setMatrixRoomTag","error"]),(0,i.mapActions)(["joinMatrixRoom","leaveMatrixRoom","matrixSend","initModule"]),{addMatrixRoom:function(){var t=document.querySelector(".matrix-room input");/#[\w-]+:[\w-]+\.\w{2,}/.test(t.value)?this.joinMatrixRoom({id:t.value}):this.toggleMatrixRoomModal(t.value||!0),t.value=""},dropAdd:function(t,e){var o=t.item.dataset.id;this.matrixSend({roomId:e,itemId:o})},numWatched:function(t){return t in this.sources?(this.sources[t].archive?this.sources[t].archive.length:0)+Object.keys(this.sources[t].playedMedia).length:0}}),computed:r({},(0,i.mapState)(["loadedModules","currentMediaSource","matrix"]),(0,f.mapModuleState)("matrix",["sources","sourcesOrdered","matrixLoggedIn","showMatrixLoginModal"]),{_hiddenSourcesOrdered:{get:function(){var t=this;return this.sourcesOrdered.filter(function(e){return t.sources[e].hidden})},set:function(t){this.error("not implemented")}},_sourcesOrdered:{get:function(){var t=this;return this.sourcesOrdered.filter(function(e){return!t.sources[e].hidden})},set:function(t){this.error("not implemented")}}})}},248:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},r=o(0),i=o(390),a=o(176),s=function(t){return t&&t.__esModule?t:{default:t}}(a),l=o(4);e.default={components:{MatrixLogin:s.default},data:function(){return{roomName:""}},created:function(){var t=this;this.$store.watch(function(t){return t.createMatrixRoomModal},function(){"string"==typeof t.createMatrixRoomModal&&(t.roomName=t.createMatrixRoomModal)})},methods:n({},(0,r.mapActions)(["createMatrixRoom"]),(0,r.mapMutations)(["toggleMatrixRoomModal"]),{close:function(){this.toggleMatrixRoomModal(!1)},_createMatrixRoom:function(){var t=this.$el.querySelector("#hidden-room-m").checked?"privat":"public";this.createMatrixRoom({room_alias_name:this.slugName,visibility:t,name:this.roomName+" [Audius]",topic:"Join this room at https://audius.rockdapus.org?import=#"+this.slugName+":matrix.org&type=room&title="+encodeURIComponent(this.roomName)})},matrixLogin:function(){var t=this.$el.querySelector("#username"),e=this.$el.querySelector("#password");this.loginMatrixWithPassword({username:t.value,password:e.value}),this.$el.querySelector("#username").value="",this.$el.querySelector("#password").value=""}}),computed:n({},(0,l.mapModuleState)("matrix",["createMatrixRoomModal","isGuest"]),{slugName:function(){return this.roomName.length<5?"…":(0,i.slugify)(this.roomName).slice(0,20).replace(/-$/,"")+"-audius"}})}},249:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},r=o(0),i=o(4),a=[{id:"!zKinTrtpQEyHfnIbnI:matrix.org",name:"Random"},{id:"!wkEBtQpMVXqZktQwjF:matrix.org",name:"Docu / Tech / Science [Audius]"},{id:"!sgKmJzakMmEdSCgKCE:matrix.org",name:"Electronic "},{id:"!vginOAdNcoiesrilGC:matrix.org",name:"Music Links"},{id:"!aSJNcnulrVagkddEtD:matrix.org",name:"Chillout "},{id:"!VTIhlnDdHsxZFZQNFh:matrix.org",name:"Rock"},{id:"!sgKmJzakMmEdSCgKCE:matrix.org",name:"Electronic"}];e.default={methods:n({},(0,r.mapActions)(["updatePublicRooms","joinMatrixRoom"]),(0,r.mapMutations)(["toggleMatrixRoomDirectory"]),{close:function(){this.toggleMatrixRoomDirectory(!1)}}),computed:n({},(0,i.mapModuleState)("matrix",["sources","showMatrixRoomDirectory","publicRooms"]),{filteredRoomList:function(){var t=this;return a.filter(function(e){return!(e.id in t.sources)})},filteredPublicRooms:function(){var t=this;return console.log("this.publicRooms",this.publicRooms),this.publicRooms.filter(function(e){return!(e.id in t.sources)})}})}},250:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},r=o(0),i=o(4);e.default={data:function(){return{roomName:""}},methods:n({},(0,r.mapMutations)(["toggleMatrixConsentModal"]),{close:function(){this.toggleMatrixConsentModal(!1)}}),computed:n({},(0,i.mapModuleState)("matrix",["showMatrixConsentModal","matrixConsentMessage"]))}},385:function(t,e,o){var n=o(386);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(3)("202bcb1a",n,!1)},386:function(t,e,o){e=t.exports=o(2)(void 0),e.push([t.i,"\n.matrix-room__menu {\n  display: none;\n}\n.matrix-room {\n  color: #fff;\n}\n.matrix-room .modal__body {\n    color: #707379;\n}\n.matrix-room__room-join-create:before,\n.matrix-room__room-list:before {\n  position: absolute;\n  transform: rotate(-53.4deg);\n  transform-origin: 5.8rem 3.5rem;\n  font-size: 0.8rem;\n  color: #E2E4E9;\n  pointer-events: none;\n}\n.matrix-room__room-list:before {\n  content: 'ROOMS';\n}\n.matrix-room__room-join-create:before {\n  content: 'CREATE';\n}\n.matrix-room__logging-in,\n.play-list-manager__enable-matrix {\n  width: 100%;\n  text-align: center;\n  padding: 0 0.45rem;\n  margin-top: 3.15rem;\n}\n.play-list-manager__room-suggestions {\n  margin: 0.45rem;\n  text-align: center;\n}\n.play-list-manager__room-suggestions span {\n    text-decoration: underline;\n    cursor: pointer;\n}\n.play-list-manager__room-suggestions > button.button {\n    padding: 0 0.9rem;\n    display: inline-flex;\n    align-items: center;\n}\n.play-list-manager__room-suggestions > button.button > span {\n      margin-right: 0.9rem;\n}\n.matrix-room__tag-footer {\n  display: flex;\n}\n.matrix-room__tag-footer div {\n    min-width: 4em;\n}\n.play-list-manager__show-hidden-rooms {\n  margin-left: 0.45rem;\n  text-transform: uppercase;\n  font-size: .7rem;\n  cursor: pointer;\n  text-align: center;\n}\n",""])},387:function(t,e,o){"use strict";function n(t){l||o(388)}Object.defineProperty(e,"__esModule",{value:!0});var r=o(248),i=o.n(r);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);var s=o(391),l=!1,c=o(1),u=n,m=c(i.a,s.a,!1,u,null,null);m.options.__file="src/components/matrix-create-room.vue",e.default=m.exports},388:function(t,e,o){var n=o(389);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(3)("5375142c",n,!1)},389:function(t,e,o){e=t.exports=o(2)(void 0),e.push([t.i,"\n.matrix-create input {\n  width: 100%;\n  margin-bottom: 0.45rem;\n}\n.matrix-create__group {\n  display: flex;\n  align-items: flex-end;\n}\n.create-room__register {\n  margin-bottom: 3px;\n}\n",""])},390:function(t,e,o){"use strict";function n(t){t=t.replace(/^\s+|\s+$/g,""),t=t.toLowerCase();for(var e="ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;",o="aaaaaeeeeeiiiiooooouuuunc------",n=0,r=e.length;n<r;n++)t=t.replace(new RegExp(e.charAt(n),"g"),o.charAt(n));return t=t.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}Object.defineProperty(e,"__esModule",{value:!0}),e.slugify=n},391:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.createMatrixRoomModal?o("div",{staticClass:"modal matrix-create",on:{click:t.close}},[o("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[!1!==t.isGuest?o("div",[t._v("\n\t\t\tGuest users are not allowed to create rooms. "),o("br"),t._v("\n\t\t\tPlease login or register your Riot.im account. "),o("br"),o("br"),t._v(" "),o("matrix-login")],1):o("div",[o("h3",[t._v("Create matrix room")]),t._v(" "),o("p"),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.roomName,expression:"roomName"}],staticClass:"input--border",attrs:{type:"text",placeholder:"Room name"},domProps:{value:t.roomName},on:{input:function(e){e.target.composing||(t.roomName=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"spacer"}),t._v("\n\t\t\t\t#"+t._s(t.slugName)+":matrix.org\n\t\t\t"),o("p"),t._v(" "),o("p"),t._m(0),t._v(" "),o("p"),t._v(" "),o("div",{staticClass:"modal__btn-group"},[o("button",{staticClass:"button",on:{click:t.close}},[t._v("Cancel")]),t._v(" "),o("button",{staticClass:"button btn--blue",attrs:{disabled:t.roomName.length<5,title:t.roomName.length<5?"The room name must be at least 5 characters long":""},on:{click:t._createMatrixRoom}},[t._v("create")])])])])]):t._e()},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("input",{attrs:{type:"checkbox",id:"hidden-room-m"}}),o("label",{attrs:{for:"hidden-room-m"}}),t._v("\n\t\t\t\t\tHidden\n\t\t\t\t\t"),o("span",{staticClass:"smaller"},[t._v("Not publicly listed")])])}];n._withStripped=!0;var i={render:n,staticRenderFns:r};e.a=i},392:function(t,e,o){"use strict";function n(t){l||o(393)}Object.defineProperty(e,"__esModule",{value:!0});var r=o(249),i=o.n(r);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);var s=o(395),l=!1,c=o(1),u=n,m=c(i.a,s.a,!1,u,null,null);m.options.__file="src/components/matrix-public-rooms.vue",e.default=m.exports},393:function(t,e,o){var n=o(394);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(3)("4e374fc3",n,!1)},394:function(t,e,o){e=t.exports=o(2)(void 0),e.push([t.i,"\n.matrix-create input {\n  width: 100%;\n  margin-bottom: 0.45rem;\n}\n.matrix-public-rooms__buttons {\n  display: flex;\n  flex-wrap: wrap;\n}\n.matrix-public-rooms__buttons > * {\n    margin: 0 0.45rem 0.45rem 0;\n}\n",""])},395:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showMatrixRoomDirectory?o("div",[o("div",{staticClass:"modal matrix-public-rooms",on:{click:t.close}},[o("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[o("h3",[t._v("Public rooms")]),t._v(" "),t.publicRooms&&t.publicRooms.length?t._e():o("div",{staticClass:"about-player__community-btns matrix-public-rooms__buttons"},t._l(t.filteredRoomList,function(e){return o("div",{staticClass:"button btn--blue",on:{click:function(o){t.joinMatrixRoom({id:e.id,name:e.name})}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])})),t._v(" "),t.publicRooms&&t.publicRooms.length?t._e():o("div",[o("br"),t._v("\n\t\t\t\t… press below to update rooms, it might take a while.\n\t\t\t")]),t._v(" "),o("div",{staticClass:"matrix-public-rooms__buttons"},[t._l(t.filteredPublicRooms,function(e){return o("a",{staticClass:"button btn--blue",attrs:{title:"["+e.numberOfMembers+" Members] "+e.topic},on:{click:function(o){t.joinMatrixRoom({id:e.id,name:e.name})}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])}),t._v(" "),t.publicRooms&&t.publicRooms.length&&!t.filteredPublicRooms.length?o("span",[t._v("… you joined all available rooms")]):t._e()],2),t._v(" "),o("div",{staticClass:"modal__btn-group"},[o("button",{staticClass:"button",on:{click:t.close}},[t._v("Cancel")]),t._v(" "),o("button",{staticClass:"button btn--blue-ghost",on:{click:t.updatePublicRooms}},[t._v("update room list")])])])])]):t._e()},r=[];n._withStripped=!0;var i={render:n,staticRenderFns:r};e.a=i},396:function(t,e,o){"use strict";function n(t){l||o(397)}Object.defineProperty(e,"__esModule",{value:!0});var r=o(250),i=o.n(r);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);var s=o(399),l=!1,c=o(1),u=n,m=c(i.a,s.a,!1,u,null,null);m.options.__file="src/components/matrix-consent.vue",e.default=m.exports},397:function(t,e,o){var n=o(398);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(3)("cd30864e",n,!1)},398:function(t,e,o){e=t.exports=o(2)(void 0),e.push([t.i,"\n.matrix-consent p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n",""])},399:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showMatrixConsentModal?o("div",{staticClass:"modal matrix-consent",on:{click:t.close}},[o("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[o("p",{domProps:{innerHTML:t._s(t.matrixConsentMessage)}})])]):t._e()},r=[];n._withStripped=!0;var i={render:n,staticRenderFns:r};e.a=i},400:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"matrix-room play-list-manager__wrapper"},[t.loadedModules.matrix?o("div",[t.matrixLoggedIn?t._e():o("div",{staticClass:"matrix-room__logging-in"},[t._v("\n\t\t\t  … connecting to Matrix.org\n\t\t")]),t._v(" "),t.matrixLoggedIn&&!t.sourcesOrdered.length?o("div",{staticClass:"play-list-manager__room-suggestions"},[t._v("\n\t\t\tYou did not join any rooms yet!\n\t\t\t"),o("br"),t._v(" "),o("br"),t._v(" "),o("button",{staticClass:"button btn--blue",on:{click:function(e){t.toggleMatrixRoomDirectory()}}},[o("span",{staticClass:"wmp-icon-format_list_bulleted"}),t._v("\n\t\t\t\trooms\n\t\t\t")]),t._v(" "),o("br"),t._v(" "),o("br"),t._v("\n\t\t\tOpen the room list\n\t\t\tor\n\t\t\tcreate your own room.\n\t\t")]):t._e(),t._v(" "),o("matrix-create-room"),t._v(" "),o("matrix-public-rooms"),t._v(" "),o("matrix-consent-modal"),t._v(" "),t.showMatrixLoginModal?o("div",{staticClass:"modal",on:{click:function(e){t.toggleMatrixLoginModal()}}},[o("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[t._v("\n\t\t\t\tGuest users are not allowed to join this room. "),o("br"),t._v("\n\t\t\t\tPlease login or register your "),o("b",[t._v("Riot.im account")]),t._v("."),o("br"),o("br"),t._v(" "),o("matrix-login")],1)]):t._e(),t._v(" "),t.matrixLoggedIn?o("draggable",{staticClass:"matrix-room__tags",attrs:{element:"ul",options:{animation:150,scrollSpeed:20,handle:".play-list-manager__drag-handle"}},model:{value:t._sourcesOrdered,callback:function(e){t._sourcesOrdered=e},expression:"_sourcesOrdered"}},t._l(t._sourcesOrdered,function(e){return o("draggable",{key:e,staticClass:"play-list-manager__tag-drop-zone",class:{active:t.currentMediaSource.id==e},attrs:{element:"li",options:{sort:!1,handle:".no-handle",group:{name:"lists"}}},on:{add:function(o){t.dropAdd(o,e)}}},[o("div",{staticClass:"play-list-manager__drag-handle"}),t._v(" "),o("div",{staticClass:"play-list-manager__tag-body",on:{click:function(o){t.selectMediaSource({type:"matrix",id:e})}}},[o("div",[t._v("\n\t\t\t\t\t\t"+t._s(t.matrix.sources[e].name)+"\n\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"matrix-room__tag-footer"},[o("div",[t._v(" "+t._s(t.sources[e].playList.length-Object.keys(t.sources[e].playedMedia).length)+" New ")]),t._v(" "),o("div",[t._v(" "+t._s(t.sources[e].members?t.sources[e].members.length:"?")+" Members ")])])]),t._v(" "),o("div",{staticClass:"play-list-manager__menu"},[o("span",{staticClass:"wmp-icon-mode_edit",attrs:{title:"Edit room"},on:{click:function(o){o.stopPropagation(),t.setShowMediumSettings({medium:"matrix",id:e})}}}),t._v(" "),o("span",{staticClass:"wmp-icon-close",attrs:{title:"Leave room"},on:{click:function(o){o.stopPropagation(),t.showConfirmDelte=e}}})])])})):t._e(),t._v(" "),t.matrixLoggedIn&&t._hiddenSourcesOrdered.length?o("div",[t.showHidden?o("div",[o("div",{staticClass:"play-list-manager__show-hidden-rooms",on:{click:function(e){t.showHidden=!1}}},[t._v("\n\t\t\t\t\thide\n\t\t\t\t")]),t._v(" "),o("ul",t._l(t._hiddenSourcesOrdered,function(e){return o("li",[o("div",{staticClass:"play-list-manager__tag-body",on:{click:function(o){t.selectMediaSource({type:"matrix",id:e})}}},[o("div",[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.matrix.sources[e].name)+"\n\t\t\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"matrix-room__tag-footer"},[o("div",[t._v(" "+t._s(t.sources[e].playList.length-Object.keys(t.sources[e].playedMedia).length)+" New ")]),t._v(" "),o("div",[t._v(" "+t._s(t.sources[e].members?t.sources[e].members.length:"?")+" Members ")])])]),t._v(" "),o("div",{staticClass:"play-list-manager__menu"},[o("span",{staticClass:"wmp-icon-mode_edit",attrs:{title:"Edit room"},on:{click:function(o){o.stopPropagation(),t.setShowMediumSettings({medium:"matrix",id:e})}}}),t._v(" "),o("span",{staticClass:"wmp-icon-close",attrs:{title:"Leave room"},on:{click:function(o){o.stopPropagation(),t.showConfirmDelte=e}}})])])}))]):t._e(),t._v(" "),t.showHidden?t._e():o("div",{staticClass:"play-list-manager__show-hidden-rooms",on:{click:function(e){t.showHidden=!0}}},[t._v("\n\t\t\t\tshow hidden\n\t\t\t")])]):t._e(),t._v(" "),o("ul",{staticClass:"matrix-room__tags"},[t.matrixLoggedIn?o("li",{staticClass:"play-list-manager__input"},[o("div",{staticClass:"play-list-manager__tag-body"},[o("input",{attrs:{type:"text",placeholder:"… room id or name"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addMatrixRoom(e):null}}})]),t._v(" "),o("div",{staticClass:"matrix-room__room-join-create"},[o("span",{staticClass:"wmp-icon-add",attrs:{title:"Create / join room"},on:{click:t.addMatrixRoom}})]),t._v(" "),o("div",{staticClass:"matrix-room__room-list"},[o("span",{staticClass:"wmp-icon-format_list_bulleted",attrs:{title:"Room List"},on:{click:function(e){t.toggleMatrixRoomDirectory()}}})])]):t._e()]),t._v(" "),t.showConfirmDelte?o("div",{staticClass:"modal",on:{click:function(e){t.showConfirmDelte=!1}}},[o("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[t._v("\n\t\t\t\tAre you sure you want to leave the room?\n\t\t\t\t"),o("div",{staticClass:"modal__btn-group"},[o("button",{staticClass:"button",on:{click:function(e){t.showConfirmDelte=!1}}},[t._v("Cancel")]),t._v(" "),o("button",{staticClass:"button btn--blue",on:{click:function(e){e.stopPropagation(),t.leaveMatrixRoom(t.showConfirmDelte),t.showConfirmDelte=!1}}},[t._v("Leave")])])])]):t._e()],1):t._e()])},r=[];n._withStripped=!0;var i={render:n,staticRenderFns:r};e.a=i},51:function(t,e,o){"use strict";function n(t){l||o(385)}Object.defineProperty(e,"__esModule",{value:!0});var r=o(247),i=o.n(r);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);var s=o(400),l=!1,c=o(1),u=n,m=c(i.a,s.a,!1,u,null,null);m.options.__file="src/components/matrix-room-manager.vue",e.default=m.exports}});