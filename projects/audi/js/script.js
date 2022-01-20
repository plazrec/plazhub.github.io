/*
    Audi Driving Experience
    main.css
    HTML,CSS,Design Level JS Code developed by :
    Author:Prashant Sani,<saniprashant@gmail.com>
    For : The Glitch Media Pvt. Ltd., https://theglitch.in/
    Colour Codes:
    red : #bf122f;
*/


//Touch Swipe
;(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);aR=null};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if((I()||V())||(P()||aX())){if(I()||V()){bc=aF(bd,bb,l)}if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}else{if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.preventDefaultEvents===false){return}if(av.allowPageScroll===m){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));

// sweet Alert
;!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o){var a,r,s,l,i=function(e){return e&&e.__esModule?e:{"default":e}},u=o("./modules/handle-dom"),c=o("./modules/utils"),d=o("./modules/handle-swal-dom"),f=o("./modules/handle-click"),p=o("./modules/handle-key"),m=i(p),v=o("./modules/default-params"),y=i(v),h=o("./modules/set-params"),g=i(h);s=l=function(){function o(e){var t=s;return t[e]===n?y["default"][e]:t[e]}var s=arguments[0];if(u.addClass(t.body,"stop-scrolling"),d.resetInput(),s===n)return c.logStr("SweetAlert expects at least 1 attribute!"),!1;var l=c.extend({},y["default"]);switch(typeof s){case"string":l.title=s,l.text=arguments[1]||"",l.type=arguments[2]||"";break;case"object":if(s.title===n)return c.logStr('Missing "title" argument!'),!1;l.title=s.title;for(var i in y["default"])l[i]=o(i);l.confirmButtonText=l.showCancelButton?"Confirm":y["default"].confirmButtonText,l.confirmButtonText=o("confirmButtonText"),l.doneFunction=arguments[1]||null;break;default:return c.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof s),!1}g["default"](l),d.fixVerticalPosition(),d.openModal(arguments[1]);for(var p=d.getModal(),v=p.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],b=function(e){return f.handleButton(e,l,p)},w=0;w<v.length;w++)for(var C=0;C<h.length;C++){var S=h[C];v[w][S]=b}d.getOverlay().onclick=b,a=e.onkeydown;var x=function(e){return m["default"](e,l,p)};e.onkeydown=x,e.onfocus=function(){setTimeout(function(){r!==n&&(r.focus(),r=n)},0)}},s.setDefaults=l.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");c.extend(y["default"],e)},s.close=l.close=function(){var o=d.getModal();u.fadeOut(d.getOverlay(),5),u.fadeOut(o,5),u.removeClass(o,"showSweetAlert"),u.addClass(o,"hideSweetAlert"),u.removeClass(o,"visible");var s=o.querySelector(".sa-icon.sa-success");u.removeClass(s,"animate"),u.removeClass(s.querySelector(".sa-tip"),"animateSuccessTip"),u.removeClass(s.querySelector(".sa-long"),"animateSuccessLong");var l=o.querySelector(".sa-icon.sa-error");u.removeClass(l,"animateErrorIcon"),u.removeClass(l.querySelector(".sa-x-mark"),"animateXMark");var i=o.querySelector(".sa-icon.sa-warning");return u.removeClass(i,"pulseWarning"),u.removeClass(i.querySelector(".sa-body"),"pulseWarningIns"),u.removeClass(i.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");u.removeClass(o,e)},300),u.removeClass(t.body,"stop-scrolling"),e.onkeydown=a,e.previousActiveElement&&e.previousActiveElement.focus(),r=n,clearTimeout(o.timeout),!0},s.showInputError=l.showInputError=function(e){var t=d.getModal(),n=t.querySelector(".sa-input-error");u.addClass(n,"show");var o=t.querySelector(".sa-error-container");u.addClass(o,"show"),o.querySelector("p").innerHTML=e,t.querySelector("input").focus()},s.resetInputError=l.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=d.getModal(),n=t.querySelector(".sa-input-error");u.removeClass(n,"show");var o=t.querySelector(".sa-error-container");u.removeClass(o,"show")},"undefined"!=typeof e?e.sweetAlert=e.swal=s:c.logStr("SweetAlert is a frontend module!")},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#AEDEF4",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:""};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var g=o.querySelector("button.confirm"),b=o.querySelector("button.cancel");m?b.style.boxShadow="none":g.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},g=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=g},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},g=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},b=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=g,a.openModal=b,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <button class="confirm" tabIndex="1">OK</button>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],g=y[1];h&&g?(m=h,v=g):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var b=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",b),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);


function changeCarInfoSlider(index){

    if(contentObject['AudiCars'][index]['galleryImages'].length<1){
        $('#fleetGalleryOpen').hide()
    }else{
        $('#fleetGalleryOpen').show()
    }


    $('#fleet').attr('data-fleetIndex',index);

    $('.carFleetLogoActive').removeClass('carFleetLogoActive');

    $('#fleetSlider [data-slick-index='+index+']').each(function(){
        $(this).addClass('carFleetLogoActive')
    });

	$('#fleetCar').fadeOut(200,function () {
		$('<img />', {
		    "src": contentObject['AudiCars'][index]['image']
		}).load(function(){
		    $('#fleetCar').css('background-image','url('+contentObject['AudiCars'][index]['image']+')');
		    $('#fleetCar').fadeIn(200);
		});
	});



    $('#fleetCarName span').html(contentObject['AudiCars'][index]['name']);

    $('#fleetDetails').html(contentObject['AudiCars'][index]['desc']);

    //Cars Info Right
    if(contentObject['AudiCars'][index]['specifications']['engine']!=='' && contentObject['AudiCars'][index]['specifications']['engine']!==undefined){
        $('#fleetEngine').html('<span class="carsRightCol1">Engine</span>:<span class="carsRightCol2">'+contentObject['AudiCars'][index]['specifications']['engine']+'</span>');
    }
    if(contentObject['AudiCars'][index]['specifications']['powerOutput']!=='' && contentObject['AudiCars'][index]['specifications']['powerOutput']!==undefined){
        $('#fleetPowerOutput').html('<span class="carsRightCol1">Power Output</span>:<span class="carsRightCol2">'+contentObject['AudiCars'][index]['specifications']['powerOutput']+'</span>');
    }
    if(contentObject['AudiCars'][index]['specifications']['transmission']!=='' && contentObject['AudiCars'][index]['specifications']['transmission']!==undefined){
        $('#fleetTransmission').html('<span class="carsRightCol1">Transmission</span>:<span class="carsRightCol2">'+contentObject['AudiCars'][index]['specifications']['transmission']+'</span>');
    }
    if(contentObject['AudiCars'][index]['specifications']['accellaration']!=='' && contentObject['AudiCars'][index]['specifications']['accellaration']!==undefined){
        $('#fleetAcceleration').html('<span class="carsRightCol1">Acceleration 0-100km/hr</span>:<span class="carsRightCol2">'+contentObject['AudiCars'][index]['specifications']['accellaration']+'</span>');
    }


}


/* Slick 1.5.0 */
/* global window, document, define, jQuery, setInterval, clearInterval */

!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,h,e=this;if(e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,g=e.options.responsive||null,g&&g.length>-1){e.respondTo=e.options.respondTo||"window";for(h in g)g.hasOwnProperty(h)&&(e.breakpoints.push(g[h].breakpoint),e.breakpointSettings[g[h].breakpoint]=g[h].settings);e.breakpoints.sort(function(a,b){return e.options.mobileFirst===!0?a-b:b-a})}"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(e.hidden="msHidden",e.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init(),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=null!==c.options.asNavFor?a(c.options.asNavFor).slick("getSlick"):null;null!==d&&d.slideHandler(b,!0)},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().width(100/a.options.slidesPerRow+"%").css({display:"inline-block"})}},b.prototype.checkResponsive=function(b){var d,e,f,c=this,g=c.$slider.width(),h=window.innerWidth||a(window).width();if("window"===c.respondTo?f=h:"slider"===c.respondTo?f=g:"min"===c.respondTo&&(f=Math.min(h,g)),c.originalSettings.responsive&&c.originalSettings.responsive.length>-1&&null!==c.originalSettings.responsive){e=null;for(d in c.breakpoints)c.breakpoints.hasOwnProperty(d)&&(c.originalSettings.mobileFirst===!1?f<c.breakpoints[d]&&(e=c.breakpoints[d]):f>c.breakpoints[d]&&(e=c.breakpoints[d]));null!==e?null!==c.activeBreakpoint?e!==c.activeBreakpoint&&(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick():(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())):(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick():(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())):null!==c.activeBreakpoint&&(c.activeBreakpoint=null,c.options=c.originalSettings,b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||a(b.target).parent().index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c);break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).off("click.slick",b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",b.setPaused.bind(b,!0)).off("mouseleave.slick",b.setPaused.bind(b,!1)),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),b.options.autoplay===!0&&a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",b.setPaused.bind(b,!0)),b.$list.off("mouseleave.slick",b.setPaused.bind(b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},b.cleanUpEvents(),a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides&&(b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden","true").removeAttr("data-slick-index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),b.$slider.html(b.$slides)),b.cleanUpRows(),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized")},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)d=Math.ceil(a.slideCount/a.options.slidesToScroll);else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?(e=a.slideCount-a.options.slidesToShow+1,a.options.centerMode===!0&&(e=a.slideCount)):(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildRows(),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.updateArrows(),b.updateDots()),b.$slider.trigger("init",[b])},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",b.setPaused.bind(b,!0)).on("mouseleave.slick",b.setPaused.bind(b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),b.options.autoplay===!0&&a(document).on(b.visibilityChange,b.visibility.bind(b)),b.$list.on("mouseenter.slick",b.setPaused.bind(b,!0)),b.$list.on("mouseleave.slick",b.setPaused.bind(b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange.bind(b)),a(window).on("resize.slick.slick-"+b.instanceUid,b.resize.bind(b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:1},200)},d.src=c,b.css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.init(),b.changeSlide({data:{message:"index",index:c}},!1)},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:800,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(a,b,c){var d=this;d.options[a]=b,c===!0&&(d.unload(),d.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,b.autoPlayClear())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true"),c.$slides.eq(e).addClass("slick-active").attr("aria-hidden","false"),c.options.centerMode===!0&&(c.$slider.find(".slick-slide").removeClass("slick-center"),c.$slides.eq(e).addClass("slick-center")),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?i.fadeSlide(e,function(){i.postSlide(e)}):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;
if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(){var a=this;a.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):(a.paused=!1,a.autoPlay())},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

$('#fleetSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 9,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



/*! skrollr 0.6.29 (2014-11-17) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
;(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,Y(),lt=this,r=r||{},mt=r.constants||{},r.easing)for(var n in r.easing)X[n]=r.easing[n];Tt=r.edgeStrategy||"set",ft={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ut=r.forceHeight!==!1,ut&&(zt=r.scale||1),pt=r.mobileDeceleration||x,gt=r.smoothScrolling!==!1,vt=r.smoothScrollingDuration||A,ht={targetTop:lt.getScrollTop()},Kt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Kt?(ct=t.getElementById(r.skrollrBody||E),ct&&it(),j(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),lt.refresh(),kt(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Bt||e!==$t)&&(Bt=t,$t=e,_t=!0)});var i=R();return function l(){J(),St=i(l)}(),lt}var o,a,i={get:function(){return lt},init:function(e){return lt||new n(e)},VERSION:"0.6.29"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E="skrollr-body",A=200,F="start",C="end",H="center",D="bottom",I="___skrollable_id",P=/^(?:input|textarea|button|select)$/i,N=/^\s+|\s+$/g,O=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,V=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,z=/^(@?[a-z\-]+)\[(\w+)\]$/,q=/-([a-z0-9_])/g,L=function(e,t){return t.toUpperCase()},M=/[\-+]?[\d]*\.?[\d]+/g,$=/\{\?\}/g,B=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,G="",K="",Y=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(G=n.match(e)||+n==n&&t[n].match(e))break;if(!G)return G=K="",r;G=G[0],"-"===G.slice(0,1)?(K=G,G={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[G]):K="-"+G.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[G.toLowerCase()+"RequestAnimationFrame"],r=Nt();return(Kt||!t)&&(t=function(t){var n=Nt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Nt(),t()},o)}),t},U=function(){var t=e.cancelAnimationFrame||e[G.toLowerCase()+"CancelAnimationFrame"];return(Kt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},X={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,st=[],Gt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=gt,f=Tt,u=!1;if(a&&I in i&&delete i[I],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(O);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(q,L)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==F&&b!==C?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===C?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*zt))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&I in i?(x=i[I],k=st[x].styleAttr,w=st[x].classAttr):(x=i[I]=Gt++,k=i.style.cssText,w=Ht(i)),st[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[])}}}for(At(),n=0,o=e.length;o>n;n++){var E=st[e[n][I]];E!==r&&(Q(E),tt(E))}return lt},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===H&&(i-=n/2),r===D?i+=l:r===H&&(i+=l/2),i+=lt.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Nt(),o=lt.getScrollTop();return dt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:X[t.easing||k],done:t.done},dt.topDiff||(dt.done&&dt.done.call(lt,!1),dt=r),lt},n.prototype.stopAnimateTo=function(){dt&&dt.done&&dt.done.call(lt,!0),dt=r},n.prototype.isAnimatingTo=function(){return!!dt},n.prototype.isMobile=function(){return Kt},n.prototype.setScrollTop=function(t,r){return yt=r===!0,Kt?Yt=s.min(s.max(t,0),Vt):e.scrollTo(0,t),lt},n.prototype.getScrollTop=function(){return Kt?Yt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Vt},n.prototype.on=function(e,t){return ft[e]=t,lt},n.prototype.off=function(e){return delete ft[e],lt},n.prototype.destroy=function(){var e=U();e(St),xt(),Dt(o,[T],[y,b,S]);for(var t=0,n=st.length;n>t;t++)at(st[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",ct&&i.setStyle(ct,"transform","none"),lt=r,ct=r,ft=r,ut=r,Vt=0,zt=1,mt=r,pt=r,qt="down",Lt=-1,$t=0,Bt=0,_t=!1,dt=r,gt=r,vt=r,ht=r,yt=r,Gt=0,Tt=r,Kt=!1,Yt=0,bt=r};var j=function(){var n,i,l,c,d,g,v,h,y,T,b,S;kt(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,P.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),lt.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:P.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,lt.setScrollTop(Yt-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!P.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/pt),F=E*A+.5*pt*A*A,C=lt.getScrollTop()-F,H=0;C>Vt?(H=(Vt-C)/F,C=Vt):0>C&&(H=-C/F,C=0),A*=1-H,lt.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},W=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=Ft();for(c=0,f=st.length;f>c;c++)for(e=st[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(at(t),l.frame=lt.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,at(t,!0)),l.frame+=m,ut&&!l.isEnd&&l.frame>Vt&&(Vt=l.frame);for(Vt=s.max(Vt,Ct()),c=0,f=st.length;f>c;c++){for(e=st[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Vt-l.offset+m);e.keyFrames.sort(Ot)}},Z=function(e,t){for(var r=0,n=st.length;n>r;r++){var o,a,s=st[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(Et(c,p.eventType,qt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(Et(c,y.eventType,qt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":at(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=ot(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=nt(A.props[o].value,F.props[o].value,C),a=ot(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===qt?Et(c,A.eventType,qt):Et(c,F.eventType,qt),s.lastFrameIndex=E);break}}},J=function(){_t&&(_t=!1,At());var e,t,n=lt.getScrollTop(),o=Nt();if(dt)o>=dt.endTime?(n=dt.targetTop,e=dt.done,dt=r):(t=dt.easing((o-dt.startTime)/dt.duration),n=0|dt.startTop+t*dt.topDiff),lt.setScrollTop(n,!0);else if(!yt){var a=ht.targetTop-n;a&&(ht={startTop:Lt,topDiff:n-Lt,targetTop:n,startTime:Mt,endTime:Mt+vt}),ht.endTime>=o&&(t=X.sqrt((o-ht.startTime)/vt),n=0|ht.startTop+t*ht.topDiff)}if(Kt&&ct&&i.setStyle(ct,"transform","translate(0, "+-Yt+"px) "+bt),yt||Lt!==n){qt=n>Lt?"down":Lt>n?"up":qt,yt=!1;var l={curTop:n,lastTop:Lt,maxTop:Vt,direction:qt},s=ft.beforerender&&ft.beforerender.call(lt,l);s!==!1&&(Z(n,lt.getScrollTop()),Lt=n,ft.render&&ft.render.call(lt,l)),e&&e.call(lt,!1)}Mt=o},Q=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=V.exec(l.props));)a=i[1],o=i[2],n=a.match(z),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?et(o):[o.slice(1)],s[a]={value:o,easing:X[n]};l.props=s}},et=function(e){var t=[];return B.lastIndex=0,e=e.replace(B,function(e){return e.replace(M,function(e){return 100*(e/255)+"%"})}),K&&(_.lastIndex=0,e=e.replace(_,function(e){return K+e})),e=e.replace(M,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},tt=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)rt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)rt(e.keyFrames[t],n)},rt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},nt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},ot=function(e){var t=1;return $.lastIndex=0,e[0].replace($,function(){return e[t++]})},at=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=st[n[I]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ht(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},it=function(){bt="translateZ(0)",i.setStyle(ct,"transform",bt);var e=c(ct),t=e.getPropertyValue("transform"),r=e.getPropertyValue(K+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(bt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,L).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{G&&(n[G+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St,kt=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Rt.push({element:t,name:a,listener:n})},wt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},xt=function(){for(var e,t=0,r=Rt.length;r>t;t++)e=Rt[t],wt(e.element,e.name,e.listener);Rt=[]},Et=function(e,t,r){ft.keyframe&&ft.keyframe.call(lt,e,t,r)},At=function(){var e=lt.getScrollTop();Vt=0,ut&&!Kt&&(a.style.height=""),W(),ut&&!Kt&&(a.style.height=Vt+o.clientHeight+"px"),Kt?lt.setScrollTop(s.min(lt.getScrollTop(),Vt)):lt.setScrollTop(e,!0),yt=!0},Ft=function(){var e,t,r=o.clientHeight,n={};for(e in mt)t=mt[e],"function"==typeof t?t=t.call(lt):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ct=function(){var e,t=0;return ct&&(t=s.max(ct.offsetHeight,ct.scrollHeight)),e=s.max(t,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight),e-o.clientHeight},Ht=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Pt(i).replace(Pt(o[l])," ");i=It(i);for(var c=0,f=n.length;f>c;c++)-1===Pt(i).indexOf(Pt(n[c]))&&(i+=" "+n[c]);t[a]=It(i)},It=function(e){return e.replace(N,"")},Pt=function(e){return" "+e+" "},Nt=Date.now||function(){return+new Date},Ot=function(e,t){return e.frame-t.frame},Vt=0,zt=1,qt="down",Lt=-1,Mt=Nt(),$t=0,Bt=0,_t=!1,Gt=0,Kt=!1,Yt=0,Rt=[];"function"==typeof define&&define.amd?define([],function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i})(window,document);
var skrollrVar;

/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 * fork https://github.com/zuk/jquery.inview
 */
(function(e){function m(){var b=window.innerHeight;if(b)return b;var f=document.compatMode;if(f||!e.support.boxModel)b="CSS1Compat"===f?document.documentElement.clientHeight:document.body.clientHeight;return b}var n=function(b,f){function e(){null!==a?c=!0:(c=!1,b(),a=setTimeout(function(){a=null;c&&e()},f))}var c=!1,a=null;return e}(function(){var b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,f=b+m(),g=[];e.each(e.cache,function(){this.events&&this.events.inview&&
g.push(this.handle.elem)});e(g).each(function(){var c=e(this),a;a=0;for(var d=this;d;d=d.offsetParent)a+=d.offsetTop;var d=c.height(),k=a+d,d=c.data("inview")||!1,h=c.data("offset")||0,g=a>b&&k<f,l=k+h>b&&a<b,h=a-h<f&&k>f;g||l||h||a<b&&k>f?(a=h?"top":l?"bottom":"both",d&&d===a||(c.data("inview",a),c.trigger("inview",[!0,a]))):!g&&d&&(c.data("inview",!1),c.trigger("inview",[!1]))})},100);e(window).on("checkInView.inview click.inview ready.inview scroll.inview resize.inview",n)})(jQuery);


//Owl carousel 2
;!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);

var instructorNextPrevAllowed=true;


    var owlOptions = {
        items:1,
        loop:true,
        autoplayTimeout:300,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:true
    },
    qDriveSlider = $(".qDriveSlider").owlCarousel(owlOptions),
    weekenderSlider = $('.weekenderSlider').owlCarousel(owlOptions),
    womensDriveSlider = $('.womenSlider').owlCarousel(owlOptions),
    instructorThumbCarousel = $('#instructorThumbCarousel').owlCarousel({
        items:4,
        loop:false,
        navRewind:false,
        autoplayTimeout:300,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:true,
        margin:25,
        onInitialized : function(){
            $('#instructorThumbCarousel .owl-stage .active').first().addClass('instructorThumbFirst');
            $('#instructorDotsWrap div').eq(0).addClass('active')
        }
    }),
    instructorInfoSlider = $('#instructorInfoCarousel').owlCarousel({
        items:1,
        loop:false,
        navRewind:false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:true,
        onInitialized : function(){
            $('#instructorInfoCarousel .owl-prev').attr('id','instructorPrev').insertAfter('#instructorInfoCarousel')
            $('#instructorInfoCarousel .owl-next').attr('id','instructorNext').insertAfter('#instructorInfoCarousel')
        }
    });



    var isThumbClicked=false;
    $(document).on('click','#instructorThumbCarousel .owl-item',function(){
        isThumbClicked=true
        var $this = $(this);
        $('#instructorThumbCarousel .owl-item').removeClass('instructorThumbFirst')
        $this.addClass('instructorThumbFirst');
        instructorInfoSlider.trigger('to.owl.carousel',$this.find('img[data-index]').attr('data-index'),300);
        setTimeout(function(){
            isThumbClicked=false
        },150)

    });
    instructorInfoSlider.on('changed.owl.carousel', function(event) {
        if(isThumbClicked===false){
            var goToIndex = event.item.index;

            console.log(goToIndex)
            $('.instructorThumbFirst').removeClass('instructorThumbFirst');

            var adjustedGoToIndex = parseInt(goToIndex/4);
            console.log(adjustedGoToIndex)
            instructorThumbCarousel.trigger('to.owl.carousel',adjustedGoToIndex,300);

            $('#instructorThumbCarousel .owl-item').eq(goToIndex).addClass('instructorThumbFirst');

            $('#instructorDotsWrap div').removeClass('active').eq(goToIndex).addClass('active');
        }

    });

    $(document).on('click','#instructorDotsWrap div',function(event){
        var goToIndex = $(this).index()
        //console.log(goToIndex)


            var adjustedGoToIndex = parseInt(goToIndex/4);
            //console.log(adjustedGoToIndex)
            instructorThumbCarousel.trigger('to.owl.carousel',adjustedGoToIndex,300);


        instructorInfoSlider.trigger('to.owl.carousel',goToIndex);
    });



    $('#qDriveNext').click(function() {
      qDriveSlider.trigger('next.owl.carousel');
    });
    $('#qDrivePrev').click(function() {
      qDriveSlider.trigger('prev.owl.carousel', [300]);
    });
    $('#womenSliderNext').click(function() {
      womensDriveSlider.trigger('next.owl.carousel', [300]);
    });
    $('#womenSliderPrev').click(function() {
      womensDriveSlider.trigger('prev.owl.carousel', [300]);
    });
    $('#weekenderNext').click(function() {
      weekenderSlider.trigger('next.owl.carousel');
    });
    $('#weekenderPrev').click(function() {
      weekenderSlider.trigger('prev.owl.carousel', [300]);
    });






/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
* http://web.enavu.com/demos/jquerypaginationexample.html
*/

;(function($){$.fn.fitText=function(kompressor,options){var compressor=kompressor||1,settings=$.extend({'minFontSize':Number.NEGATIVE_INFINITY,'maxFontSize':Number.POSITIVE_INFINITY},options);return this.each(function(){var $this=$(this);var resizer=function(){$this.css('font-size',Math.max(Math.min($this.width()/(compressor*10),parseFloat(settings.maxFontSize)),parseFloat(settings.minFontSize)))};resizer();$(window).on('resize.fittext orientationchange.fittext',resizer)})}})(jQuery);
// function:
(function(){
    // jQuery('.sportsCarExperianceSec .mainCol1 h1, .sportsCarExperianceSec .mainCol1 h2, .weekenderSec .mainCol1 h1, .weekenderSec .mainCol1 h2, .QDriveSec .mainCol1 h1, .QDriveSec .mainCol1 h2')
    //  .fitText(1.5,{ minFontSize: '20px', maxFontSize: '55px'});

    // jQuery('.instructorsSec h1')
    //  .fitText(2,{ minFontSize: '30px', maxFontSize: '63px'});

    jQuery('#homeSecContent h1').fitText(2.3,{ minFontSize: '30px', maxFontSize: '60px'});
    jQuery('#homeSecContent h2').fitText(4.3,{ minFontSize: '15px', maxFontSize: '30px'});

})();

;(function($){
/*******************************************************************************************/
// jquery.pajinate.js - version 0.4
// A jQuery plugin for paginating through any number of DOM elements
//
// Copyright (c) 2010, Wes Nolte (http://wesnolte.com)
// Licensed under the MIT License (MIT-LICENSE.txt)
// http://www.opensource.org/licenses/mit-license.php
// Created: 2010-04-16 | Updated: 2010-04-26
//
/*******************************************************************************************/
;$.fn.pajinate=function(options){var current_page='current_page';var items_per_page='items_per_page';var meta;var defaults={item_container_id:'.content',items_per_page:10,nav_panel_id:'.page_navigation',nav_info_id:'.info_text',num_page_links_to_display:20,start_page:0,wrap_around:false,nav_label_first:'First',nav_label_prev:'Prev',nav_label_next:'Next',nav_label_last:'Last',nav_order:["first","prev","num","next","last"],nav_label_info:'Showing {0}-{1} of {2} results',show_first_last:true,abort_on_small_lists:false,jquery_ui:false,jquery_ui_active:"ui-state-highlight",jquery_ui_default:"ui-state-default",jquery_ui_disabled:"ui-state-disabled"};var options=$.extend(defaults,options);var $item_container;var $page_container;var $items;var $nav_panels;var total_page_no_links;var jquery_ui_default_class=options.jquery_ui?options.jquery_ui_default:'';var jquery_ui_active_class=options.jquery_ui?options.jquery_ui_active:'';var jquery_ui_disabled_class=options.jquery_ui?options.jquery_ui_disabled:'';return this.each(function(){$page_container=$(this);$item_container=$(this).find(options.item_container_id);$items=$page_container.find(options.item_container_id).children();if(options.abort_on_small_lists&&options.items_per_page>=$items.size())return $page_container;meta=$page_container;meta.data(current_page,0);meta.data(items_per_page,options.items_per_page);var total_items=$item_container.children().size();var number_of_pages=Math.ceil(total_items/options.items_per_page);var more='<span class="ellipse more">...</span>';var less='<span class="ellipse less">...</span>';var first=!options.show_first_last?'':'<a class="first_link '+jquery_ui_default_class+'" href="">'+options.nav_label_first+'</a>';var last=!options.show_first_last?'':'<a class="last_link '+jquery_ui_default_class+'" href="">'+options.nav_label_last+'</a>';var navigation_html="";for(var i=0;i<options.nav_order.length;i++){switch(options.nav_order[i]){case"first":navigation_html+=first;break;case"last":navigation_html+=last;break;case"next":navigation_html+='<a class="next_link '+jquery_ui_default_class+'" href="">'+options.nav_label_next+'</a>';break;case"prev":navigation_html+='<a class="previous_link '+jquery_ui_default_class+'" href="">'+options.nav_label_prev+'</a>';break;case"num":navigation_html+=less;var current_link=0;while(number_of_pages>current_link){navigation_html+='<a class="page_link '+jquery_ui_default_class+'" href="" longdesc="'+current_link+'">'+(current_link+1)+'</a>';current_link++}navigation_html+=more;break;default:break}}$nav_panels=$page_container.find(options.nav_panel_id);$nav_panels.html(navigation_html).each(function(){$(this).find('.page_link:first').addClass('first');$(this).find('.page_link:last').addClass('last')});$nav_panels.children('.ellipse').hide();$nav_panels.find('.previous_link').next().next().addClass('active_page '+jquery_ui_active_class);$items.hide();$items.slice(0,meta.data(items_per_page)).show();total_page_no_links=$page_container.children(options.nav_panel_id+':first').children('.page_link').size();options.num_page_links_to_display=Math.min(options.num_page_links_to_display,total_page_no_links);$nav_panels.children('.page_link').hide();$nav_panels.each(function(){$(this).children('.page_link').slice(0,options.num_page_links_to_display).show()});$page_container.find('.first_link').click(function(e){e.preventDefault();movePageNumbersRight($(this),0);gotopage(0)});$page_container.find('.last_link').click(function(e){e.preventDefault();var lastPage=total_page_no_links-1;movePageNumbersLeft($(this),lastPage);gotopage(lastPage)});$page_container.find('.previous_link').click(function(e){e.preventDefault();showPrevPage($(this))});$page_container.find('.next_link').click(function(e){e.preventDefault();showNextPage($(this))});$page_container.find('.page_link').click(function(e){e.preventDefault();gotopage($(this).attr('longdesc'))});gotopage(parseInt(options.start_page));toggleMoreLess();if(!options.wrap_around)tagNextPrev()});function showPrevPage(e){new_page=parseInt(meta.data(current_page))-1;if($(e).siblings('.active_page').prev('.page_link').length==true){movePageNumbersRight(e,new_page);gotopage(new_page)}else if(options.wrap_around){gotopage(total_page_no_links-1)}};function showNextPage(e){new_page=parseInt(meta.data(current_page))+1;if($(e).siblings('.active_page').next('.page_link').length==true){movePageNumbersLeft(e,new_page);gotopage(new_page)}else if(options.wrap_around){gotopage(0)}};function gotopage(page_num){var ipp=parseInt(meta.data(items_per_page));var isLastPage=false;start_from=page_num*ipp;end_on=start_from+ipp;var items=$items.hide().slice(start_from,end_on);items.show();$page_container.find(options.nav_panel_id).children('.page_link[longdesc='+page_num+']').addClass('active_page '+jquery_ui_active_class).siblings('.active_page').removeClass('active_page '+jquery_ui_active_class);meta.data(current_page,page_num);$page_container.find(options.nav_info_id).html(options.nav_label_info.replace("{0}",start_from+1).replace("{1}",start_from+items.length).replace("{2}",$items.length));toggleMoreLess();tagNextPrev()};function movePageNumbersLeft(e,new_p){var new_page=new_p;var $current_active_link=$(e).siblings('.active_page');if($current_active_link.siblings('.page_link[longdesc='+new_page+']').css('display')=='none'){$nav_panels.each(function(){$(this).children('.page_link').hide().slice(parseInt(new_page-options.num_page_links_to_display+1),new_page+1).show()})}}function movePageNumbersRight(e,new_p){var new_page=new_p;var $current_active_link=$(e).siblings('.active_page');if($current_active_link.siblings('.page_link[longdesc='+new_page+']').css('display')=='none'){$nav_panels.each(function(){$(this).children('.page_link').hide().slice(new_page,new_page+parseInt(options.num_page_links_to_display)).show()})}}function toggleMoreLess(){if(!$nav_panels.children('.page_link:visible').hasClass('last')){$nav_panels.children('.more').show()}else{$nav_panels.children('.more').hide()}if(!$nav_panels.children('.page_link:visible').hasClass('first')){$nav_panels.children('.less').show()}else{$nav_panels.children('.less').hide()}}function tagNextPrev(){if($nav_panels.children('.last').hasClass('active_page')){$nav_panels.children('.next_link').add('.last_link').addClass('no_more '+jquery_ui_disabled_class)}else{$nav_panels.children('.next_link').add('.last_link').removeClass('no_more '+jquery_ui_disabled_class)}if($nav_panels.children('.first').hasClass('active_page')){$nav_panels.children('.previous_link').add('.first_link').addClass('no_more '+jquery_ui_disabled_class)}else{$nav_panels.children('.previous_link').add('.first_link').removeClass('no_more '+jquery_ui_disabled_class)}}}})(jQuery);

function paginateInit(){
    var noOfItems = Math.floor(winHeight/95);

    if(noOfItems<3){
        noOfItems=3
    }

    $('#sportsCarDtVenue').pajinate({
        items_per_page : noOfItems,
        nav_label_first : '<<',
        nav_label_last : '>>',
        nav_label_prev : '<',
        nav_label_next : '>'
    });
    $('#weekenderDtVenue').pajinate({
        items_per_page : noOfItems,
        nav_label_first : '<<',
        nav_label_last : '>>',
        nav_label_prev : '<',
        nav_label_next : '>'

    });
    $('#qDriveDtVenue').pajinate({
        items_per_page : noOfItems,
        nav_label_first : '<<',
        nav_label_last : '>>',
        nav_label_prev : '<',
        nav_label_next : '>'

    });
    $('#womensDriveDtVenue').pajinate({
        items_per_page : noOfItems,
        nav_label_first : '<<',
        nav_label_last : '>>',
        nav_label_prev : '<',
        nav_label_next : '>'

    });
}
paginateInit()
$(window).resize(function() {
    paginateInit()
});


$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};


// jQuery RoyalSlider plugin. Copyright Dmitry Semenov http://dimsemenov.com
// jquery.royalslider v9.5.6
(function(n){function u(b,f){var c,a=this,e=window.navigator,g=e.userAgent.toLowerCase();a.uid=n.rsModules.uid++;a.ns=".rs"+a.uid;var d=document.createElement("div").style,h=["webkit","Moz","ms","O"],k="",l=0,r;for(c=0;c<h.length;c++)r=h[c],!k&&r+"Transform"in d&&(k=r),r=r.toLowerCase(),window.requestAnimationFrame||(window.requestAnimationFrame=window[r+"RequestAnimationFrame"],window.cancelAnimationFrame=window[r+"CancelAnimationFrame"]||window[r+"CancelRequestAnimationFrame"]);window.requestAnimationFrame||
(window.requestAnimationFrame=function(a,b){var c=(new Date).getTime(),d=Math.max(0,16-(c-l)),e=window.setTimeout(function(){a(c+d)},d);l=c+d;return e});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});a.isIPAD=g.match(/(ipad)/);a.isIOS=a.isIPAD||g.match(/(iphone|ipod)/);c=function(a){a=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||
[];return{browser:a[1]||"",version:a[2]||"0"}}(g);h={};c.browser&&(h[c.browser]=!0,h.version=c.version);h.chrome&&(h.webkit=!0);a._a=h;a.isAndroid=-1<g.indexOf("android");a.slider=n(b);a.ev=n(a);a._b=n(document);a.st=n.extend({},n.fn.royalSlider.defaults,f);a._c=a.st.transitionSpeed;a._d=0;!a.st.allowCSS3||h.webkit&&!a.st.allowCSS3OnWebkit||(c=k+(k?"T":"t"),a._e=c+"ransform"in d&&c+"ransition"in d,a._e&&(a._f=k+(k?"P":"p")+"erspective"in d));k=k.toLowerCase();a._g="-"+k+"-";a._h="vertical"===a.st.slidesOrientation?
!1:!0;a._i=a._h?"left":"top";a._j=a._h?"width":"height";a._k=-1;a._l="fade"===a.st.transitionType?!1:!0;a._l||(a.st.sliderDrag=!1,a._m=10);a._n="z-index:0; display:none; opacity:0;";a._o=0;a._p=0;a._q=0;n.each(n.rsModules,function(b,c){"uid"!==b&&c.call(a)});a.slides=[];a._r=0;(a.st.slides?n(a.st.slides):a.slider.children().detach()).each(function(){a._s(this,!0)});a.st.randomizeSlides&&a.slides.sort(function(){return.5-Math.random()});a.numSlides=a.slides.length;a._t();a.st.startSlideId?a.st.startSlideId>
a.numSlides-1&&(a.st.startSlideId=a.numSlides-1):a.st.startSlideId=0;a._o=a.staticSlideId=a.currSlideId=a._u=a.st.startSlideId;a.currSlide=a.slides[a.currSlideId];a._v=0;a.pointerMultitouch=!1;a.slider.addClass((a._h?"rsHor":"rsVer")+(a._l?"":" rsFade"));d='<div class="rsOverflow"><div class="rsContainer">';a.slidesSpacing=a.st.slidesSpacing;a._w=(a._h?a.slider.width():a.slider.height())+a.st.slidesSpacing;a._x=Boolean(0<a._y);1>=a.numSlides&&(a._z=!1);a._a1=a._z&&a._l?2===a.numSlides?1:2:0;a._b1=
6>a.numSlides?a.numSlides:6;a._c1=0;a._d1=0;a.slidesJQ=[];for(c=0;c<a.numSlides;c++)a.slidesJQ.push(n('<div style="'+(a._l?"":c!==a.currSlideId?a._n:"z-index:0;")+'" class="rsSlide "></div>'));a._e1=d=n(d+"</div></div>");var m=a.ns,k=function(b,c,d,e,f){a._j1=b+c+m;a._k1=b+d+m;a._l1=b+e+m;f&&(a._m1=b+f+m)};c=e.pointerEnabled;a.pointerEnabled=c||e.msPointerEnabled;a.pointerEnabled?(a.hasTouch=!1,a._n1=.2,a.pointerMultitouch=Boolean(1<e[(c?"m":"msM")+"axTouchPoints"]),c?k("pointer","down","move","up",
"cancel"):k("MSPointer","Down","Move","Up","Cancel")):(a.isIOS?a._j1=a._k1=a._l1=a._m1="":k("mouse","down","move","up"),"ontouchstart"in window||"createTouch"in document?(a.hasTouch=!0,a._j1+=" touchstart"+m,a._k1+=" touchmove"+m,a._l1+=" touchend"+m,a._m1+=" touchcancel"+m,a._n1=.5,a.st.sliderTouch&&(a._f1=!0)):(a.hasTouch=!1,a._n1=.2));a.st.sliderDrag&&(a._f1=!0,h.msie||h.opera?a._g1=a._h1="move":h.mozilla?(a._g1="-moz-grab",a._h1="-moz-grabbing"):h.webkit&&-1!=e.platform.indexOf("Mac")&&(a._g1=
"-webkit-grab",a._h1="-webkit-grabbing"),a._i1());a.slider.html(d);a._o1=a.st.controlsInside?a._e1:a.slider;a._p1=a._e1.children(".rsContainer");a.pointerEnabled&&a._p1.css((c?"":"-ms-")+"touch-action",a._h?"pan-y":"pan-x");a._q1=n('<div class="rsPreloader"></div>');e=a._p1.children(".rsSlide");a._r1=a.slidesJQ[a.currSlideId];a._s1=0;a._e?(a._t1="transition-property",a._u1="transition-duration",a._v1="transition-timing-function",a._w1=a._x1=a._g+"transform",a._f?(h.webkit&&!h.chrome&&a.slider.addClass("rsWebkit3d"),
a._y1="translate3d(",a._z1="px, ",a._a2="px, 0px)"):(a._y1="translate(",a._z1="px, ",a._a2="px)"),a._l?a._p1[a._g+a._t1]=a._g+"transform":(h={},h[a._g+a._t1]="opacity",h[a._g+a._u1]=a.st.transitionSpeed+"ms",h[a._g+a._v1]=a.st.css3easeInOut,e.css(h))):(a._x1="left",a._w1="top");var p;n(window).on("resize"+a.ns,function(){p&&clearTimeout(p);p=setTimeout(function(){a.updateSliderSize()},50)});a.ev.trigger("rsAfterPropsSetup");a.updateSliderSize();a.st.keyboardNavEnabled&&a._b2();a.st.arrowsNavHideOnTouch&&
(a.hasTouch||a.pointerMultitouch)&&(a.st.arrowsNav=!1);a.st.arrowsNav&&(e=a._o1,n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(e),a._c2=e.children(".rsArrowLeft").click(function(b){b.preventDefault();a.prev()}),a._d2=e.children(".rsArrowRight").click(function(b){b.preventDefault();a.next()}),a.st.arrowsNavAutoHide&&!a.hasTouch&&(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"),e.one("mousemove.arrowshover",
function(){a._c2.removeClass("rsHidden");a._d2.removeClass("rsHidden")}),e.hover(function(){a._e2||(a._c2.removeClass("rsHidden"),a._d2.removeClass("rsHidden"))},function(){a._e2||(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"))})),a.ev.on("rsOnUpdateNav",function(){a._f2()}),a._f2());if(a.hasTouch&&a.st.sliderTouch||!a.hasTouch&&a.st.sliderDrag)a._p1.on(a._j1,function(b){a._g2(b)});else a.dragSuccess=!1;var q=["rsPlayBtnIcon","rsPlayBtn","rsCloseVideoBtn","rsCloseVideoIcn"];a._p1.click(function(b){if(!a.dragSuccess){var c=
n(b.target).attr("class");if(-1!==n.inArray(c,q)&&a.toggleVideo())return!1;if(a.st.navigateByClick&&!a._h2){if(n(b.target).closest(".rsNoDrag",a._r1).length)return!0;a._i2(b)}a.ev.trigger("rsSlideClick",b)}}).on("click.rs","a",function(b){if(a.dragSuccess)return!1;a._h2=!0;setTimeout(function(){a._h2=!1},3)});a.ev.trigger("rsAfterInit")}n.rsModules||(n.rsModules={uid:0});u.prototype={constructor:u,_i2:function(b){b=b[this._h?"pageX":"pageY"]-this._j2;b>=this._q?this.next():0>b&&this.prev()},_t:function(){var b;
b=this.st.numImagesToPreload;if(this._z=this.st.loop)2===this.numSlides?(this._z=!1,this.st.loopRewind=!0):2>this.numSlides&&(this.st.loopRewind=this._z=!1);this._z&&0<b&&(4>=this.numSlides?b=1:this.st.numImagesToPreload>(this.numSlides-1)/2&&(b=Math.floor((this.numSlides-1)/2)));this._y=b},_s:function(b,f){function c(b,c){c?g.images.push(b.attr(c)):g.images.push(b.text());if(h){h=!1;g.caption="src"===c?b.attr("alt"):b.contents();g.image=g.images[0];g.videoURL=b.attr("data-rsVideo");var d=b.attr("data-rsw"),
e=b.attr("data-rsh");"undefined"!==typeof d&&!1!==d&&"undefined"!==typeof e&&!1!==e?(g.iW=parseInt(d,10),g.iH=parseInt(e,10)):a.st.imgWidth&&a.st.imgHeight&&(g.iW=a.st.imgWidth,g.iH=a.st.imgHeight)}}var a=this,e,g={},d,h=!0;b=n(b);a._k2=b;a.ev.trigger("rsBeforeParseNode",[b,g]);if(!g.stopParsing)return b=a._k2,g.id=a._r,g.contentAdded=!1,a._r++,g.images=[],g.isBig=!1,g.hasCover||(b.hasClass("rsImg")?(d=b,e=!0):(d=b.find(".rsImg"),d.length&&(e=!0)),e?(g.bigImage=d.eq(0).attr("data-rsBigImg"),d.each(function(){var a=
n(this);a.is("a")?c(a,"href"):a.is("img")?c(a,"src"):c(a)})):b.is("img")&&(b.addClass("rsImg rsMainSlideImage"),c(b,"src"))),d=b.find(".rsCaption"),d.length&&(g.caption=d.remove()),g.content=b,a.ev.trigger("rsAfterParseNode",[b,g]),f&&a.slides.push(g),0===g.images.length&&(g.isLoaded=!0,g.isRendered=!1,g.isLoading=!1,g.images=null),g},_b2:function(){var b=this,f,c,a=function(a){37===a?b.prev():39===a&&b.next()};b._b.on("keydown"+b.ns,function(e){b._l2||(c=e.keyCode,37!==c&&39!==c||f||(e.preventDefault(),
a(c),f=setInterval(function(){a(c)},700)))}).on("keyup"+b.ns,function(a){f&&(clearInterval(f),f=null)})},goTo:function(b,f){b!==this.currSlideId&&this._m2(b,this.st.transitionSpeed,!0,!f)},destroy:function(b){this.ev.trigger("rsBeforeDestroy");this._b.off("keydown"+this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1);this._p1.off(this._j1+" click");this.slider.data("royalSlider",null);n.removeData(this.slider,"royalSlider");n(window).off("resize"+this.ns);this.loadingTimeout&&clearTimeout(this.loadingTimeout);
b&&this.slider.remove();this.ev=this.slider=this.slides=null},_n2:function(b,f){function c(c,f,g){c.isAdded?(a(f,c),e(f,c)):(g||(g=d.slidesJQ[f]),c.holder?g=c.holder:(g=d.slidesJQ[f]=n(g),c.holder=g),c.appendOnLoaded=!1,e(f,c,g),a(f,c),d._p2(c,g,b),c.isAdded=!0)}function a(a,c){c.contentAdded||(d.setItemHtml(c,b),b||(c.contentAdded=!0))}function e(a,b,c){d._l&&(c||(c=d.slidesJQ[a]),c.css(d._i,(a+d._d1+p)*d._w))}function g(a){if(l){if(a>r-1)return g(a-r);if(0>a)return g(r+a)}return a}var d=this,h,
k,l=d._z,r=d.numSlides;if(!isNaN(f))return g(f);var m=d.currSlideId,p,q=b?Math.abs(d._o2-d.currSlideId)>=d.numSlides-1?0:1:d._y,s=Math.min(2,q),v=!1,u=!1,t;for(k=m;k<m+1+s;k++)if(t=g(k),(h=d.slides[t])&&(!h.isAdded||!h.positionSet)){v=!0;break}for(k=m-1;k>m-1-s;k--)if(t=g(k),(h=d.slides[t])&&(!h.isAdded||!h.positionSet)){u=!0;break}if(v)for(k=m;k<m+q+1;k++)t=g(k),p=Math.floor((d._u-(m-k))/d.numSlides)*d.numSlides,(h=d.slides[t])&&c(h,t);if(u)for(k=m-1;k>m-1-q;k--)t=g(k),p=Math.floor((d._u-(m-k))/
r)*r,(h=d.slides[t])&&c(h,t);if(!b)for(s=g(m-q),m=g(m+q),q=s>m?0:s,k=0;k<r;k++)s>m&&k>s-1||!(k<q||k>m)||(h=d.slides[k])&&h.holder&&(h.holder.detach(),h.isAdded=!1)},setItemHtml:function(b,f){var c=this,a=function(){if(!b.images)b.isRendered=!0,b.isLoaded=!0,b.isLoading=!1,d(!0);else if(!b.isLoading){var a,f;b.content.hasClass("rsImg")?(a=b.content,f=!0):a=b.content.find(".rsImg:not(img)");a&&!a.is("img")&&a.each(function(){var a=n(this),c='<img class="rsImg" src="'+(a.is("a")?a.attr("href"):a.text())+
'" />';f?b.content=n(c):a.replaceWith(c)});a=f?b.content:b.content.find("img.rsImg");k();a.eq(0).addClass("rsMainSlideImage");b.iW&&b.iH&&(b.isLoaded||c._q2(b),d());b.isLoading=!0;if(b.isBig)n("<img />").on("load.rs error.rs",function(a){n(this).off("load.rs error.rs");e([this],!0)}).attr("src",b.image);else{b.loaded=[];b.numStartedLoad=0;a=function(a){n(this).off("load.rs error.rs");b.loaded.push(this);b.loaded.length===b.numStartedLoad&&e(b.loaded,!1)};for(var g=0;g<b.images.length;g++){var h=n("<img />");
b.numStartedLoad++;h.on("load.rs error.rs",a).attr("src",b.images[g])}}}},e=function(a,c){if(a.length){var d=a[0];if(c!==b.isBig)(d=b.holder.children())&&1<d.length&&l();else if(b.iW&&b.iH)g();else if(b.iW=d.width,b.iH=d.height,b.iW&&b.iH)g();else{var e=new Image;e.onload=function(){e.width?(b.iW=e.width,b.iH=e.height,g()):setTimeout(function(){e.width&&(b.iW=e.width,b.iH=e.height);g()},1E3)};e.src=d.src}}else g()},g=function(){b.isLoaded=!0;b.isLoading=!1;d();l();h()},d=function(){if(!b.isAppended&&
c.ev){var a=c.st.visibleNearby,d=b.id-c._o;f||b.appendOnLoaded||!c.st.fadeinLoadedSlide||0!==d&&(!(a||c._r2||c._l2)||-1!==d&&1!==d)||(a={visibility:"visible",opacity:0},a[c._g+"transition"]="opacity 400ms ease-in-out",b.content.css(a),setTimeout(function(){b.content.css("opacity",1)},16));b.holder.find(".rsPreloader").length?b.holder.append(b.content):b.holder.html(b.content);b.isAppended=!0;b.isLoaded&&(c._q2(b),h());b.sizeReady||(b.sizeReady=!0,setTimeout(function(){c.ev.trigger("rsMaybeSizeReady",
b)},100))}},h=function(){!b.loadedTriggered&&c.ev&&(b.isLoaded=b.loadedTriggered=!0,b.holder.trigger("rsAfterContentSet"),c.ev.trigger("rsAfterContentSet",b))},k=function(){c.st.usePreloader&&b.holder.html(c._q1.clone())},l=function(a){c.st.usePreloader&&(a=b.holder.find(".rsPreloader"),a.length&&a.remove())};b.isLoaded?d():f?!c._l&&b.images&&b.iW&&b.iH?a():(b.holder.isWaiting=!0,k(),b.holder.slideId=-99):a()},_p2:function(b,f,c){this._p1.append(b.holder);b.appendOnLoaded=!1},_g2:function(b,f){var c=
this,a,e="touchstart"===b.type;c._s2=e;c.ev.trigger("rsDragStart");if(n(b.target).closest(".rsNoDrag",c._r1).length)return c.dragSuccess=!1,!0;!f&&c._r2&&(c._t2=!0,c._u2());c.dragSuccess=!1;if(c._l2)e&&(c._v2=!0);else{e&&(c._v2=!1);c._w2();if(e){var g=b.originalEvent.touches;if(g&&0<g.length)a=g[0],1<g.length&&(c._v2=!0);else return}else b.preventDefault(),a=b,c.pointerEnabled&&(a=a.originalEvent);c._l2=!0;c._b.on(c._k1,function(a){c._x2(a,f)}).on(c._l1,function(a){c._y2(a,f)});c._z2="";c._a3=!1;
c._b3=a.pageX;c._c3=a.pageY;c._d3=c._v=(f?c._e3:c._h)?a.pageX:a.pageY;c._f3=0;c._g3=0;c._h3=f?c._i3:c._p;c._j3=(new Date).getTime();if(e)c._e1.on(c._m1,function(a){c._y2(a,f)})}},_k3:function(b,f){if(this._l3){var c=this._m3,a=b.pageX-this._b3,e=b.pageY-this._c3,g=this._h3+a,d=this._h3+e,h=f?this._e3:this._h,g=h?g:d,d=this._z2;this._a3=!0;this._b3=b.pageX;this._c3=b.pageY;"x"===d&&0!==a?this._f3=0<a?1:-1:"y"===d&&0!==e&&(this._g3=0<e?1:-1);d=h?this._b3:this._c3;a=h?a:e;f?g>this._n3?g=this._h3+a*this._n1:
g<this._o3&&(g=this._h3+a*this._n1):this._z||(0>=this.currSlideId&&0<d-this._d3&&(g=this._h3+a*this._n1),this.currSlideId>=this.numSlides-1&&0>d-this._d3&&(g=this._h3+a*this._n1));this._h3=g;200<c-this._j3&&(this._j3=c,this._v=d);f?this._q3(this._h3):this._l&&this._p3(this._h3)}},_x2:function(b,f){var c=this,a,e="touchmove"===b.type;if(!c._s2||e){if(e){if(c._r3)return;var g=b.originalEvent.touches;if(g){if(1<g.length)return;a=g[0]}else return}else a=b,c.pointerEnabled&&(a=a.originalEvent);c._a3||
(c._e&&(f?c._s3:c._p1).css(c._g+c._u1,"0s"),function h(){c._l2&&(c._t3=requestAnimationFrame(h),c._u3&&c._k3(c._u3,f))}());if(c._l3)b.preventDefault(),c._m3=(new Date).getTime(),c._u3=a;else if(g=f?c._e3:c._h,a=Math.abs(a.pageX-c._b3)-Math.abs(a.pageY-c._c3)-(g?-7:7),7<a){if(g)b.preventDefault(),c._z2="x";else if(e){c._v3(b);return}c._l3=!0}else if(-7>a){if(!g)b.preventDefault(),c._z2="y";else if(e){c._v3(b);return}c._l3=!0}}},_v3:function(b,f){this._r3=!0;this._a3=this._l2=!1;this._y2(b)},_y2:function(b,
f){function c(a){return 100>a?100:500<a?500:a}function a(a,b){if(e._l||f)h=(-e._u-e._d1)*e._w,k=Math.abs(e._p-h),e._c=k/b,a&&(e._c+=250),e._c=c(e._c),e._x3(h,!1)}var e=this,g,d,h,k;g=-1<b.type.indexOf("touch");if(!e._s2||g)if(e._s2=!1,e.ev.trigger("rsDragRelease"),e._u3=null,e._l2=!1,e._r3=!1,e._l3=!1,e._m3=0,cancelAnimationFrame(e._t3),e._a3&&(f?e._q3(e._h3):e._l&&e._p3(e._h3)),e._b.off(e._k1).off(e._l1),g&&e._e1.off(e._m1),e._i1(),!e._a3&&!e._v2&&f&&e._w3){var l=n(b.target).closest(".rsNavItem");
l.length&&e.goTo(l.index())}else{d=f?e._e3:e._h;if(!e._a3||"y"===e._z2&&d||"x"===e._z2&&!d)if(!f&&e._t2){e._t2=!1;if(e.st.navigateByClick){e._i2(e.pointerEnabled?b.originalEvent:b);e.dragSuccess=!0;return}e.dragSuccess=!0}else{e._t2=!1;e.dragSuccess=!1;return}else e.dragSuccess=!0;e._t2=!1;e._z2="";var r=e.st.minSlideOffset;g=g?b.originalEvent.changedTouches[0]:e.pointerEnabled?b.originalEvent:b;var m=d?g.pageX:g.pageY,p=e._d3;g=e._v;var q=e.currSlideId,s=e.numSlides,v=d?e._f3:e._g3,u=e._z;Math.abs(m-
p);g=m-g;d=(new Date).getTime()-e._j3;d=Math.abs(g)/d;if(0===v||1>=s)a(!0,d);else{if(!u&&!f)if(0>=q){if(0<v){a(!0,d);return}}else if(q>=s-1&&0>v){a(!0,d);return}if(f){h=e._i3;if(h>e._n3)h=e._n3;else if(h<e._o3)h=e._o3;else{m=d*d/.006;l=-e._i3;p=e._y3-e._z3+e._i3;0<g&&m>l?(l+=e._z3/(15/(m/d*.003)),d=d*l/m,m=l):0>g&&m>p&&(p+=e._z3/(15/(m/d*.003)),d=d*p/m,m=p);l=Math.max(Math.round(d/.003),50);h+=m*(0>g?-1:1);if(h>e._n3){e._a4(h,l,!0,e._n3,200);return}if(h<e._o3){e._a4(h,l,!0,e._o3,200);return}}e._a4(h,
l,!0)}else l=function(a){var b=Math.floor(a/e._w);a-b*e._w>r&&b++;return b},p+r<m?0>v?a(!1,d):(l=l(m-p),e._m2(e.currSlideId-l,c(Math.abs(e._p-(-e._u-e._d1+l)*e._w)/d),!1,!0,!0)):p-r>m?0<v?a(!1,d):(l=l(p-m),e._m2(e.currSlideId+l,c(Math.abs(e._p-(-e._u-e._d1-l)*e._w)/d),!1,!0,!0)):a(!1,d)}}},_p3:function(b){b=this._p=b;this._e?this._p1.css(this._x1,this._y1+(this._h?b+this._z1+0:0+this._z1+b)+this._a2):this._p1.css(this._h?this._x1:this._w1,b)},updateSliderSize:function(b){var f,c;if(this.slider){if(this.st.autoScaleSlider){var a=
this.st.autoScaleSliderWidth,e=this.st.autoScaleSliderHeight;this.st.autoScaleHeight?(f=this.slider.width(),f!=this.width&&(this.slider.css("height",e/a*f),f=this.slider.width()),c=this.slider.height()):(c=this.slider.height(),c!=this.height&&(this.slider.css("width",a/e*c),c=this.slider.height()),f=this.slider.width())}else f=this.slider.width(),c=this.slider.height();if(b||f!=this.width||c!=this.height){this.width=f;this.height=c;this._b4=f;this._c4=c;this.ev.trigger("rsBeforeSizeSet");this.ev.trigger("rsAfterSizePropSet");
this._e1.css({width:this._b4,height:this._c4});this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing;this._d4=this.st.imageScalePadding;for(f=0;f<this.slides.length;f++)b=this.slides[f],b.positionSet=!1,b&&b.images&&b.isLoaded&&(b.isRendered=!1,this._q2(b));if(this._e4)for(f=0;f<this._e4.length;f++)b=this._e4[f],b.holder.css(this._i,(b.id+this._d1)*this._w);this._n2();this._l&&(this._e&&this._p1.css(this._g+"transition-duration","0s"),this._p3((-this._u-this._d1)*this._w));this.ev.trigger("rsOnUpdateNav")}this._j2=
this._e1.offset();this._j2=this._j2[this._i]}},appendSlide:function(b,f){var c=this._s(b);if(isNaN(f)||f>this.numSlides)f=this.numSlides;this.slides.splice(f,0,c);this.slidesJQ.splice(f,0,n('<div style="'+(this._l?"position:absolute;":this._n)+'" class="rsSlide"></div>'));f<=this.currSlideId&&this.currSlideId++;this.ev.trigger("rsOnAppendSlide",[c,f]);this._f4(f);f===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")},removeSlide:function(b){var f=this.slides[b];f&&(f.holder&&f.holder.remove(),
b<this.currSlideId&&this.currSlideId--,this.slides.splice(b,1),this.slidesJQ.splice(b,1),this.ev.trigger("rsOnRemoveSlide",[b]),this._f4(b),b===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))},_f4:function(b){var f=this;b=f.numSlides;b=0>=f._u?0:Math.floor(f._u/b);f.numSlides=f.slides.length;0===f.numSlides?(f.currSlideId=f._d1=f._u=0,f.currSlide=f._g4=null):f._u=b*f.numSlides+f.currSlideId;for(b=0;b<f.numSlides;b++)f.slides[b].id=b;f.currSlide=f.slides[f.currSlideId];f._r1=f.slidesJQ[f.currSlideId];
f.currSlideId>=f.numSlides?f.goTo(f.numSlides-1):0>f.currSlideId&&f.goTo(0);f._t();f._l&&f._p1.css(f._g+f._u1,"0ms");f._h4&&clearTimeout(f._h4);f._h4=setTimeout(function(){f._l&&f._p3((-f._u-f._d1)*f._w);f._n2();f._l||f._r1.css({display:"block",opacity:1})},14);f.ev.trigger("rsOnUpdateNav")},_i1:function(){this._f1&&this._l&&(this._g1?this._e1.css("cursor",this._g1):(this._e1.removeClass("grabbing-cursor"),this._e1.addClass("grab-cursor")))},_w2:function(){this._f1&&this._l&&(this._h1?this._e1.css("cursor",
this._h1):(this._e1.removeClass("grab-cursor"),this._e1.addClass("grabbing-cursor")))},next:function(b){this._m2("next",this.st.transitionSpeed,!0,!b)},prev:function(b){this._m2("prev",this.st.transitionSpeed,!0,!b)},_m2:function(b,f,c,a,e){var g=this,d,h,k;g.ev.trigger("rsBeforeMove",[b,a]);k="next"===b?g.currSlideId+1:"prev"===b?g.currSlideId-1:b=parseInt(b,10);if(!g._z){if(0>k){g._i4("left",!a);return}if(k>=g.numSlides){g._i4("right",!a);return}}g._r2&&(g._u2(!0),c=!1);h=k-g.currSlideId;k=g._o2=
g.currSlideId;var l=g.currSlideId+h;a=g._u;var n;g._z?(l=g._n2(!1,l),a+=h):a=l;g._o=l;g._g4=g.slidesJQ[g.currSlideId];g._u=a;g.currSlideId=g._o;g.currSlide=g.slides[g.currSlideId];g._r1=g.slidesJQ[g.currSlideId];var l=g.st.slidesDiff,m=Boolean(0<h);h=Math.abs(h);var p=Math.floor(k/g._y),q=Math.floor((k+(m?l:-l))/g._y),p=(m?Math.max(p,q):Math.min(p,q))*g._y+(m?g._y-1:0);p>g.numSlides-1?p=g.numSlides-1:0>p&&(p=0);k=m?p-k:k-p;k>g._y&&(k=g._y);if(h>k+l)for(g._d1+=(h-(k+l))*(m?-1:1),f*=1.4,k=0;k<g.numSlides;k++)g.slides[k].positionSet=
!1;g._c=f;g._n2(!0);e||(n=!0);d=(-a-g._d1)*g._w;n?setTimeout(function(){g._j4=!1;g._x3(d,b,!1,c);g.ev.trigger("rsOnUpdateNav")},0):(g._x3(d,b,!1,c),g.ev.trigger("rsOnUpdateNav"))},_f2:function(){this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display","none"),this._d2.css("display","none")):(this._c2.css("display","block"),this._d2.css("display","block"),this._z||this.st.loopRewind||(0===this.currSlideId?this._c2.addClass("rsArrowDisabled"):this._c2.removeClass("rsArrowDisabled"),this.currSlideId===
this.numSlides-1?this._d2.addClass("rsArrowDisabled"):this._d2.removeClass("rsArrowDisabled"))))},_x3:function(b,f,c,a,e){function g(){var a;h&&(a=h.data("rsTimeout"))&&(h!==k&&h.css({opacity:0,display:"none",zIndex:0}),clearTimeout(a),h.data("rsTimeout",""));if(a=k.data("rsTimeout"))clearTimeout(a),k.data("rsTimeout","")}var d=this,h,k,l={};isNaN(d._c)&&(d._c=400);d._p=d._h3=b;d.ev.trigger("rsBeforeAnimStart");d._e?d._l?(d._c=parseInt(d._c,10),c=d._g+d._v1,l[d._g+d._u1]=d._c+"ms",l[c]=a?n.rsCSS3Easing[d.st.easeInOut]:
n.rsCSS3Easing[d.st.easeOut],d._p1.css(l),a||!d.hasTouch?setTimeout(function(){d._p3(b)},5):d._p3(b)):(d._c=d.st.transitionSpeed,h=d._g4,k=d._r1,k.data("rsTimeout")&&k.css("opacity",0),g(),h&&h.data("rsTimeout",setTimeout(function(){l[d._g+d._u1]="0ms";l.zIndex=0;l.display="none";h.data("rsTimeout","");h.css(l);setTimeout(function(){h.css("opacity",0)},16)},d._c+60)),l.display="block",l.zIndex=d._m,l.opacity=0,l[d._g+d._u1]="0ms",l[d._g+d._v1]=n.rsCSS3Easing[d.st.easeInOut],k.css(l),k.data("rsTimeout",
setTimeout(function(){k.css(d._g+d._u1,d._c+"ms");k.data("rsTimeout",setTimeout(function(){k.css("opacity",1);k.data("rsTimeout","")},20))},20))):d._l?(l[d._h?d._x1:d._w1]=b+"px",d._p1.animate(l,d._c,a?d.st.easeInOut:d.st.easeOut)):(h=d._g4,k=d._r1,k.stop(!0,!0).css({opacity:0,display:"block",zIndex:d._m}),d._c=d.st.transitionSpeed,k.animate({opacity:1},d._c,d.st.easeInOut),g(),h&&h.data("rsTimeout",setTimeout(function(){h.stop(!0,!0).css({opacity:0,display:"none",zIndex:0})},d._c+60)));d._r2=!0;
d.loadingTimeout&&clearTimeout(d.loadingTimeout);d.loadingTimeout=e?setTimeout(function(){d.loadingTimeout=null;e.call()},d._c+60):setTimeout(function(){d.loadingTimeout=null;d._k4(f)},d._c+60)},_u2:function(b){this._r2=!1;clearTimeout(this.loadingTimeout);if(this._l)if(!this._e)this._p1.stop(!0),this._p=parseInt(this._p1.css(this._h?this._x1:this._w1),10);else{if(!b){b=this._p;var f=this._h3=this._l4();this._p1.css(this._g+this._u1,"0ms");b!==f&&this._p3(f)}}else 20<this._m?this._m=10:this._m++},
_l4:function(){var b=window.getComputedStyle(this._p1.get(0),null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i,"").split(/, |\)$/g),f=0===b[0].indexOf("matrix3d");return parseInt(b[this._h?f?12:4:f?13:5],10)},_m4:function(b,f){return this._e?this._y1+(f?b+this._z1+0:0+this._z1+b)+this._a2:b},_k4:function(b){this._l||(this._r1.css("z-index",0),this._m=10);this._r2=!1;this.staticSlideId=this.currSlideId;this._n2();this._n4=!1;this.ev.trigger("rsAfterSlideChange")},_i4:function(b,f){var c=
this,a=(-c._u-c._d1)*c._w;if(0!==c.numSlides&&!c._r2)if(c.st.loopRewind)c.goTo("left"===b?c.numSlides-1:0,f);else if(c._l){c._c=200;var e=function(){c._r2=!1};c._x3(a+("left"===b?30:-30),"",!1,!0,function(){c._r2=!1;c._x3(a,"",!1,!0,e)})}},_q2:function(b,f){if(!b.isRendered){var c=b.content,a="rsMainSlideImage",e,g=this.st.imageAlignCenter,d=this.st.imageScaleMode,h;b.videoURL&&(a="rsVideoContainer","fill"!==d?e=!0:(h=c,h.hasClass(a)||(h=h.find("."+a)),h.css({width:"100%",height:"100%"}),a="rsMainSlideImage"));
c.hasClass(a)||(c=c.find("."+a));if(c){var k=b.iW,l=b.iH;b.isRendered=!0;if("none"!==d||g){a="fill"!==d?this._d4:0;h=this._b4-2*a;var n=this._c4-2*a,m,p,q={};"fit-if-smaller"===d&&(k>h||l>n)&&(d="fit");if("fill"===d||"fit"===d)m=h/k,p=n/l,m="fill"==d?m>p?m:p:"fit"==d?m<p?m:p:1,k=Math.ceil(k*m,10),l=Math.ceil(l*m,10);"none"!==d&&(q.width=k,q.height=l,e&&c.find(".rsImg").css({width:"100%",height:"100%"}));g&&(q.marginLeft=Math.floor((h-k)/2)+a,q.marginTop=Math.floor((n-l)/2)+a);c.css(q)}}}}};n.rsProto=
u.prototype;n.fn.royalSlider=function(b){var f=arguments;return this.each(function(){var c=n(this);if("object"!==typeof b&&b){if((c=c.data("royalSlider"))&&c[b])return c[b].apply(c,Array.prototype.slice.call(f,1))}else c.data("royalSlider")||c.data("royalSlider",new u(c,b))})};n.fn.royalSlider.defaults={slidesSpacing:8,startSlideId:0,loop:!1,loopRewind:!1,numImagesToPreload:4,fadeinLoadedSlide:!0,slidesOrientation:"horizontal",transitionType:"move",transitionSpeed:600,controlNavigation:"bullets",
controlsInside:!0,arrowsNav:!0,arrowsNavAutoHide:!0,navigateByClick:!0,randomizeSlides:!1,sliderDrag:!0,sliderTouch:!0,keyboardNavEnabled:!1,fadeInAfterLoaded:!0,allowCSS3:!0,allowCSS3OnWebkit:!0,addActiveClass:!1,autoHeight:!1,easeOut:"easeOutSine",easeInOut:"easeInOutSine",minSlideOffset:10,imageScaleMode:"fit-if-smaller",imageAlignCenter:!0,imageScalePadding:4,usePreloader:!0,autoScaleSlider:!1,autoScaleSliderWidth:800,autoScaleSliderHeight:400,autoScaleHeight:!0,arrowsNavHideOnTouch:!1,globalCaption:!1,
slidesDiff:2};n.rsCSS3Easing={easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)"};n.extend(jQuery.easing,{easeInOutSine:function(b,f,c,a,e){return-a/2*(Math.cos(Math.PI*f/e)-1)+c},easeOutSine:function(b,f,c,a,e){return a*Math.sin(f/e*(Math.PI/2))+c},easeOutCubic:function(b,f,c,a,e){return a*((f=f/e-1)*f*f+1)+c}})})(jQuery,window);
// jquery.rs.bullets v1.0.1
(function(c){c.extend(c.rsProto,{_i5:function(){var a=this;"bullets"===a.st.controlNavigation&&(a.ev.one("rsAfterPropsSetup",function(){a._j5=!0;a.slider.addClass("rsWithBullets");for(var b='<div class="rsNav rsBullets">',e=0;e<a.numSlides;e++)b+='<div class="rsNavItem rsBullet"><span></span></div>';a._k5=b=c(b+"</div>");a._l5=b.appendTo(a.slider).children();a._k5.on("click.rs",".rsNavItem",function(b){a._m5||a.goTo(c(this).index())})}),a.ev.on("rsOnAppendSlide",function(b,c,d){d>=a.numSlides?a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>'):
a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(b,c){var d=a._l5.eq(c);d&&d.length&&(d.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var b=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");b=a._l5.eq(b);b.addClass("rsNavSelected");a._n5=b}))}});c.rsModules.bullets=c.rsProto._i5})(jQuery);
// jquery.rs.thumbnails v1.0.8
(function(f){f.extend(f.rsProto,{_h6:function(){var a=this;"thumbnails"===a.st.controlNavigation&&(a._i6={drag:!0,touch:!0,orientation:"horizontal",navigation:!0,arrows:!0,arrowLeft:null,arrowRight:null,spacing:4,arrowsAutoHide:!1,appendSpan:!1,transitionSpeed:600,autoCenter:!0,fitInViewport:!0,firstMargin:!0,paddingTop:0,paddingBottom:0},a.st.thumbs=f.extend({},a._i6,a.st.thumbs),a._j6=!0,!1===a.st.thumbs.firstMargin?a.st.thumbs.firstMargin=0:!0===a.st.thumbs.firstMargin&&(a.st.thumbs.firstMargin=
a.st.thumbs.spacing),a.ev.on("rsBeforeParseNode",function(a,b,c){b=f(b);c.thumbnail=b.find(".rsTmb").remove();c.thumbnail.length?c.thumbnail=f(document.createElement("div")).append(c.thumbnail).html():(c.thumbnail=b.attr("data-rsTmb"),c.thumbnail||(c.thumbnail=b.find(".rsImg").attr("data-rsTmb")),c.thumbnail=c.thumbnail?'<img src="'+c.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._k6()}),a._n5=null,a.ev.on("rsOnUpdateNav",function(){var e=f(a._l5[a.currSlideId]);e!==a._n5&&(a._n5&&
(a._n5.removeClass("rsNavSelected"),a._n5=null),a._l6&&a._m6(a.currSlideId),a._n5=e.addClass("rsNavSelected"))}),a.ev.on("rsOnAppendSlide",function(e,b,c){e="<div"+a._n6+' class="rsNavItem rsThumb">'+a._o6+b.thumbnail+"</div>";a._e&&a._s3.css(a._g+"transition-duration","0ms");c>=a.numSlides?a._s3.append(e):a._l5.eq(c).before(e);a._l5=a._s3.children();a.updateThumbsSize(!0)}),a.ev.on("rsOnRemoveSlide",function(e,b){var c=a._l5.eq(b);c&&(a._e&&a._s3.css(a._g+"transition-duration","0ms"),c.remove(),
a._l5=a._s3.children(),a.updateThumbsSize(!0))}))},_k6:function(){var a=this,e="rsThumbs",b=a.st.thumbs,c="",g,d,h=b.spacing;a._j5=!0;a._e3="vertical"===b.orientation?!1:!0;a._n6=g=h?' style="margin-'+(a._e3?"right":"bottom")+":"+h+'px;"':"";a._i3=0;a._p6=!1;a._m5=!1;a._l6=!1;a._q6=b.arrows&&b.navigation;d=a._e3?"Hor":"Ver";a.slider.addClass("rsWithThumbs rsWithThumbs"+d);c+='<div class="rsNav rsThumbs rsThumbs'+d+'"><div class="'+e+'Container">';a._o6=b.appendSpan?'<span class="thumbIco"></span>':
"";for(var k=0;k<a.numSlides;k++)d=a.slides[k],c+="<div"+g+' class="rsNavItem rsThumb">'+d.thumbnail+a._o6+"</div>";c=f(c+"</div></div>");g={};b.paddingTop&&(g[a._e3?"paddingTop":"paddingLeft"]=b.paddingTop);b.paddingBottom&&(g[a._e3?"paddingBottom":"paddingRight"]=b.paddingBottom);c.css(g);a._s3=f(c).find("."+e+"Container");a._q6&&(e+="Arrow",b.arrowLeft?a._r6=b.arrowLeft:(a._r6=f('<div class="'+e+" "+e+'Left"><div class="'+e+'Icn"></div></div>'),c.append(a._r6)),b.arrowRight?a._s6=b.arrowRight:
(a._s6=f('<div class="'+e+" "+e+'Right"><div class="'+e+'Icn"></div></div>'),c.append(a._s6)),a._r6.click(function(){var b=(Math.floor(a._i3/a._t6)+a._u6)*a._t6+a.st.thumbs.firstMargin;a._a4(b>a._n3?a._n3:b)}),a._s6.click(function(){var b=(Math.floor(a._i3/a._t6)-a._u6)*a._t6+a.st.thumbs.firstMargin;a._a4(b<a._o3?a._o3:b)}),b.arrowsAutoHide&&!a.hasTouch&&(a._r6.css("opacity",0),a._s6.css("opacity",0),c.one("mousemove.rsarrowshover",function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))}),
c.hover(function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))},function(){a._l6&&(a._r6.css("opacity",0),a._s6.css("opacity",0))})));a._k5=c;a._l5=a._s3.children();a.msEnabled&&a.st.thumbs.navigation&&a._s3.css("-ms-touch-action",a._e3?"pan-y":"pan-x");a.slider.append(c);a._w3=!0;a._v6=h;b.navigation&&a._e&&a._s3.css(a._g+"transition-property",a._g+"transform");a._k5.on("click.rs",".rsNavItem",function(b){a._m5||a.goTo(f(this).index())});a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs",
function(){a._w6=a._e3?a._c4:a._b4;a.updateThumbsSize(!0)});a.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs",function(b,c){a.updateThumbsSize(!0,c)})},updateThumbsSize:function(a,e){var b=this,c=b._l5.first(),f={},d=b._l5.length;b._t6=(b._e3?c.outerWidth():c.outerHeight())+b._v6;b._y3=d*b._t6-b._v6;f[b._e3?"width":"height"]=b._y3+b._v6;b._z3=b._e3?b._k5.width():void 0!==e?e:b._k5.height();b._w3&&(b.isFullscreen||b.st.thumbs.fitInViewport)&&(b._e3?b._c4=b._w6-b._k5.outerHeight():
b._b4=b._w6-b._k5.outerWidth());b._z3&&(b._o3=-(b._y3-b._z3)-b.st.thumbs.firstMargin,b._n3=b.st.thumbs.firstMargin,b._u6=Math.floor(b._z3/b._t6),b._y3<b._z3?(b.st.thumbs.autoCenter?b._q3((b._z3-b._y3)/2):b._q3(b._n3),b.st.thumbs.arrows&&b._r6&&(b._r6.addClass("rsThumbsArrowDisabled"),b._s6.addClass("rsThumbsArrowDisabled")),b._l6=!1,b._m5=!1,b._k5.off(b._j1)):b.st.thumbs.navigation&&!b._l6&&(b._l6=!0,!b.hasTouch&&b.st.thumbs.drag||b.hasTouch&&b.st.thumbs.touch)&&(b._m5=!0,b._k5.on(b._j1,function(a){b._g2(a,
!0)})),b._s3.css(f),a&&e&&b._m6(b.currSlideId,!0))},setThumbsOrientation:function(a,e){this._w3&&(this.st.thumbs.orientation=a,this._k5.remove(),this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"),this._k6(),this._k5.off(this._j1),e||this.updateSliderSize(!0))},_q3:function(a){this._i3=a;this._e?this._s3.css(this._x1,this._y1+(this._e3?a+this._z1+0:0+this._z1+a)+this._a2):this._s3.css(this._e3?this._x1:this._w1,a)},_a4:function(a,e,b,c,g){var d=this;if(d._l6){e||(e=d.st.thumbs.transitionSpeed);
d._i3=a;d._x6&&clearTimeout(d._x6);d._p6&&(d._e||d._s3.stop(),b=!0);var h={};d._p6=!0;d._e?(h[d._g+"transition-duration"]=e+"ms",h[d._g+"transition-timing-function"]=b?f.rsCSS3Easing[d.st.easeOut]:f.rsCSS3Easing[d.st.easeInOut],d._s3.css(h),d._q3(a)):(h[d._e3?d._x1:d._w1]=a+"px",d._s3.animate(h,e,b?"easeOutCubic":d.st.easeInOut));c&&(d._i3=c);d._y6();d._x6=setTimeout(function(){d._p6=!1;g&&(d._a4(c,g,!0),g=null)},e)}},_y6:function(){this._q6&&(this._i3===this._n3?this._r6.addClass("rsThumbsArrowDisabled"):
this._r6.removeClass("rsThumbsArrowDisabled"),this._i3===this._o3?this._s6.addClass("rsThumbsArrowDisabled"):this._s6.removeClass("rsThumbsArrowDisabled"))},_m6:function(a,e){var b=0,c,f=a*this._t6+2*this._t6-this._v6+this._n3,d=Math.floor(this._i3/this._t6);this._l6&&(this._j6&&(e=!0,this._j6=!1),f+this._i3>this._z3?(a===this.numSlides-1&&(b=1),d=-a+this._u6-2+b,c=d*this._t6+this._z3%this._t6+this._v6-this._n3):0!==a?(a-1)*this._t6<=-this._i3+this._n3&&a-1<=this.numSlides-this._u6&&(c=(-a+1)*this._t6+
this._n3):c=this._n3,c!==this._i3&&(b=void 0===c?this._i3:c,b>this._n3?this._q3(this._n3):b<this._o3?this._q3(this._o3):void 0!==c&&(e?this._q3(c):this._a4(c))),this._y6())}});f.rsModules.thumbnails=f.rsProto._h6})(jQuery);
// jquery.rs.tabs v1.0.2
(function(e){e.extend(e.rsProto,{_f6:function(){var a=this;"tabs"===a.st.controlNavigation&&(a.ev.on("rsBeforeParseNode",function(a,d,b){d=e(d);b.thumbnail=d.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=e(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=d.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=d.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._g6()}),a.ev.on("rsOnAppendSlide",
function(c,d,b){b>=a.numSlides?a._k5.append('<div class="rsNavItem rsTab">'+d.thumbnail+"</div>"):a._l5.eq(b).before('<div class="rsNavItem rsTab">'+item.thumbnail+"</div>");a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(c,d){var b=a._l5.eq(d);b&&(b.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var c=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");c=a._l5.eq(c);c.addClass("rsNavSelected");a._n5=c}))},_g6:function(){var a=this,c;a._j5=!0;c='<div class="rsNav rsTabs">';
for(var d=0;d<a.numSlides;d++)c+='<div class="rsNavItem rsTab">'+a.slides[d].thumbnail+"</div>";c=e(c+"</div>");a._k5=c;a._l5=c.children(".rsNavItem");a.slider.append(c);a._k5.click(function(b){b=e(b.target).closest(".rsNavItem");b.length&&a.goTo(b.index())})}});e.rsModules.tabs=e.rsProto._f6})(jQuery);
// jquery.rs.fullscreen v1.0.6
(function(c){c.extend(c.rsProto,{_q5:function(){var a=this;a._r5={enabled:!1,keyboardNav:!0,buttonFS:!0,nativeFS:!1,doubleTap:!0};a.st.fullscreen=c.extend({},a._r5,a.st.fullscreen);if(a.st.fullscreen.enabled)a.ev.one("rsBeforeSizeSet",function(){a._s5()})},_s5:function(){var a=this;a._t5=!a.st.keyboardNavEnabled&&a.st.fullscreen.keyboardNav;if(a.st.fullscreen.nativeFS){var b={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",
prefix:""},d=["webkit","moz","o","ms","khtml"];if("undefined"!=typeof document.cancelFullScreen)b.supportsFullScreen=!0;else for(var e=0,f=d.length;e<f;e++)if(b.prefix=d[e],"undefined"!=typeof document[b.prefix+"CancelFullScreen"]){b.supportsFullScreen=!0;break}b.supportsFullScreen?(a.nativeFS=!0,b.fullScreenEventName=b.prefix+"fullscreenchange"+a.ns,b.isFullScreen=function(){switch(this.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;default:return document[this.prefix+
"FullScreen"]}},b.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},b.cancelFullScreen=function(a){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()},a._u5=b):a._u5=!1}a.st.fullscreen.buttonFS&&(a._v5=c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs",function(){a.isFullscreen?a.exitFullscreen():a.enterFullscreen()}))},enterFullscreen:function(a){var b=
this;if(b._u5)if(a)b._u5.requestFullScreen(c("html")[0]);else{b._b.on(b._u5.fullScreenEventName,function(a){b._u5.isFullScreen()?b.enterFullscreen(!0):b.exitFullscreen(!0)});b._u5.requestFullScreen(c("html")[0]);return}if(!b._w5){b._w5=!0;b._b.on("keyup"+b.ns+"fullscreen",function(a){27===a.keyCode&&b.exitFullscreen()});b._t5&&b._b2();a=c(window);b._x5=a.scrollTop();b._y5=a.scrollLeft();b._z5=c("html").attr("style");b._a6=c("body").attr("style");b._b6=b.slider.attr("style");c("body, html").css({overflow:"hidden",
height:"100%",width:"100%",margin:"0",padding:"0"});b.slider.addClass("rsFullscreen");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!0,a.isMedLoaded=a.isLoaded,a.isMedLoading=a.isLoading,a.medImage=a.image,a.medIW=a.iW,a.medIH=a.iH,a.slideId=-99,a.bigImage!==a.medImage&&(a.sizeType="big"),a.isLoaded=a.isBigLoaded,a.isLoading=!1,a.image=a.bigImage,a.images[0]=a.bigImage,a.iW=a.bigIW,a.iH=a.bigIH,a.isAppended=a.contentAdded=!1,b._c6(a));b.isFullscreen=!0;b._w5=!1;
b.updateSliderSize();b.ev.trigger("rsEnterFullscreen")}},exitFullscreen:function(a){var b=this;if(b._u5){if(!a){b._u5.cancelFullScreen(c("html")[0]);return}b._b.off(b._u5.fullScreenEventName)}if(!b._w5){b._w5=!0;b._b.off("keyup"+b.ns+"fullscreen");b._t5&&b._b.off("keydown"+b.ns);c("html").attr("style",b._z5||"");c("body").attr("style",b._a6||"");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!1,a.slideId=-99,a.isBigLoaded=a.isLoaded,a.isBigLoading=a.isLoading,a.bigImage=
a.image,a.bigIW=a.iW,a.bigIH=a.iH,a.isLoaded=a.isMedLoaded,a.isLoading=!1,a.image=a.medImage,a.images[0]=a.medImage,a.iW=a.medIW,a.iH=a.medIH,a.isAppended=a.contentAdded=!1,b._c6(a,!0),a.bigImage!==a.medImage&&(a.sizeType="med"));b.isFullscreen=!1;a=c(window);a.scrollTop(b._x5);a.scrollLeft(b._y5);b._w5=!1;b.slider.removeClass("rsFullscreen");b.updateSliderSize();setTimeout(function(){b.updateSliderSize()},1);b.ev.trigger("rsExitFullscreen")}},_c6:function(a,b){var d=a.isLoaded||a.isLoading?'<img class="rsImg rsMainSlideImage" src="'+
a.image+'"/>':'<a class="rsImg rsMainSlideImage" href="'+a.image+'"></a>';a.content.hasClass("rsImg")?a.content=c(d):a.content.find(".rsImg").eq(0).replaceWith(d);a.isLoaded||a.isLoading||!a.holder||a.holder.html(a.content)}});c.rsModules.fullscreen=c.rsProto._q5})(jQuery);
// jquery.rs.autoplay v1.0.5
(function(b){b.extend(b.rsProto,{_x4:function(){var a=this,d;a._y4={enabled:!1,stopAtAction:!0,pauseOnHover:!0,delay:2E3};!a.st.autoPlay&&a.st.autoplay&&(a.st.autoPlay=a.st.autoplay);a.st.autoPlay=b.extend({},a._y4,a.st.autoPlay);a.st.autoPlay.enabled&&(a.ev.on("rsBeforeParseNode",function(a,c,f){c=b(c);if(d=c.attr("data-rsDelay"))f.customDelay=parseInt(d,10)}),a.ev.one("rsAfterInit",function(){a._z4()}),a.ev.on("rsBeforeDestroy",function(){a.stopAutoPlay();a.slider.off("mouseenter mouseleave");b(window).off("blur"+
a.ns+" focus"+a.ns)}))},_z4:function(){var a=this;a.startAutoPlay();a.ev.on("rsAfterContentSet",function(b,e){a._l2||a._r2||!a._a5||e!==a.currSlide||a._b5()});a.ev.on("rsDragRelease",function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.ev.on("rsAfterSlideChange",function(){a._a5&&a._c5&&(a._c5=!1,a.currSlide.isLoaded&&a._b5())});a.ev.on("rsDragStart",function(){a._a5&&(a.st.autoPlay.stopAtAction?a.stopAutoPlay():(a._c5=!0,a._d5()))});a.ev.on("rsBeforeMove",function(b,e,c){a._a5&&(c&&a.st.autoPlay.stopAtAction?
a.stopAutoPlay():(a._c5=!0,a._d5()))});a._e5=!1;a.ev.on("rsVideoStop",function(){a._a5&&(a._e5=!1,a._b5())});a.ev.on("rsVideoPlay",function(){a._a5&&(a._c5=!1,a._d5(),a._e5=!0)});b(window).on("blur"+a.ns,function(){a._a5&&(a._c5=!0,a._d5())}).on("focus"+a.ns,function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.st.autoPlay.pauseOnHover&&(a._f5=!1,a.slider.hover(function(){a._a5&&(a._c5=!1,a._d5(),a._f5=!0)},function(){a._a5&&(a._f5=!1,a._b5())}))},toggleAutoPlay:function(){this._a5?this.stopAutoPlay():
this.startAutoPlay()},startAutoPlay:function(){this._a5=!0;this.currSlide.isLoaded&&this._b5()},stopAutoPlay:function(){this._e5=this._f5=this._c5=this._a5=!1;this._d5()},_b5:function(){var a=this;a._f5||a._e5||(a._g5=!0,a._h5&&clearTimeout(a._h5),a._h5=setTimeout(function(){var b;a._z||a.st.loopRewind||(b=!0,a.st.loopRewind=!0);a.next(!0);b&&(a.st.loopRewind=!1)},a.currSlide.customDelay?a.currSlide.customDelay:a.st.autoPlay.delay))},_d5:function(){this._f5||this._e5||(this._g5=!1,this._h5&&(clearTimeout(this._h5),
this._h5=null))}});b.rsModules.autoplay=b.rsProto._x4})(jQuery);
// jquery.rs.video v1.1.3
(function(f){f.extend(f.rsProto,{_z6:function(){var a=this;a._a7={autoHideArrows:!0,autoHideControlNav:!1,autoHideBlocks:!1,autoHideCaption:!1,disableCSS3inFF:!0,youTubeCode:'<iframe src="http://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',vimeoCode:'<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'};a.st.video=f.extend({},a._a7,
a.st.video);a.ev.on("rsBeforeSizeSet",function(){a._b7&&setTimeout(function(){var b=a._r1,b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer");a._c7&&a._c7.css({width:b.width(),height:b.height()})},32)});var d=a._a.mozilla;a.ev.on("rsAfterParseNode",function(b,c,e){b=f(c);if(e.videoURL){a.st.video.disableCSS3inFF&&d&&(a._e=a._f=!1);c=f('<div class="rsVideoContainer"></div>');var g=f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');b.hasClass("rsImg")?
e.content=c.append(b).append(g):e.content.find(".rsImg").wrap(c).after(g)}});a.ev.on("rsAfterSlideChange",function(){a.stopVideo()})},toggleVideo:function(){return this._b7?this.stopVideo():this.playVideo()},playVideo:function(){var a=this;if(!a._b7){var d=a.currSlide;if(!d.videoURL)return!1;a._d7=d;var b=a._e7=d.content,d=d.videoURL,c,e;d.match(/youtu\.be/i)||d.match(/youtube\.com/i)?(e=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,(e=d.match(e))&&11==e[7].length&&
(c=e[7]),void 0!==c&&(a._c7=a.st.video.youTubeCode.replace("%id%",c))):d.match(/vimeo\.com/i)&&(e=/(www\.)?vimeo.com\/(\d+)($|\/)/,(e=d.match(e))&&(c=e[2]),void 0!==c&&(a._c7=a.st.video.vimeoCode.replace("%id%",c)));a.videoObj=f(a._c7);a.ev.trigger("rsOnCreateVideoElement",[d]);a.videoObj.length&&(a._c7=f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'),a._c7.find(".rsPreloader").after(a.videoObj),b=b.hasClass("rsVideoContainer")?
b:b.find(".rsVideoContainer"),a._c7.css({width:b.width(),height:b.height()}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv",function(b){a.stopVideo();b.preventDefault();b.stopPropagation();return!1}),b.append(a._c7),a.isIPAD&&b.addClass("rsIOSVideo"),a._f7(!1),setTimeout(function(){a._c7.addClass("rsVideoActive")},10),a.ev.trigger("rsVideoPlay"),a._b7=!0);return!0}return!1},stopVideo:function(){var a=this;return a._b7?(a.isIPAD&&a.slider.find(".rsCloseVideoBtn").remove(),a._f7(!0),setTimeout(function(){a.ev.trigger("rsOnDestroyVideoElement",
[a.videoObj]);var d=a._c7.find("iframe");if(d.length)try{d.attr("src","")}catch(b){}a._c7.remove();a._c7=null},16),a.ev.trigger("rsVideoStop"),a._b7=!1,!0):!1},_f7:function(a,d){var b=[],c=this.st.video;c.autoHideArrows&&(this._c2&&(b.push(this._c2,this._d2),this._e2=!a),this._v5&&b.push(this._v5));c.autoHideControlNav&&this._k5&&b.push(this._k5);c.autoHideBlocks&&this._d7.animBlocks&&b.push(this._d7.animBlocks);c.autoHideCaption&&this.globalCaption&&b.push(this.globalCaption);this.slider[a?"removeClass":
"addClass"]("rsVideoPlaying");if(b.length)for(c=0;c<b.length;c++)a?b[c].removeClass("rsHidden"):b[c].addClass("rsHidden")}});f.rsModules.video=f.rsProto._z6})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function(l){l.extend(l.rsProto,{_p4:function(){function m(){var g=a.currSlide;if(a.currSlide&&a.currSlide.isLoaded&&a._t4!==g){if(0<a._s4.length){for(b=0;b<a._s4.length;b++)clearTimeout(a._s4[b]);a._s4=[]}if(0<a._r4.length){var f;for(b=0;b<a._r4.length;b++)if(f=a._r4[b])a._e?(f.block.css(a._g+a._u1,"0s"),f.block.css(f.css)):f.block.stop(!0).css(f.css),a._t4=null,g.animBlocksDisplayed=!1;a._r4=[]}g.animBlocks&&(g.animBlocksDisplayed=!0,a._t4=g,a._u4(g.animBlocks))}}var a=this,b;a._q4={fadeEffect:!0,
moveEffect:"top",moveOffset:20,speed:400,easing:"easeOutSine",delay:200};a.st.block=l.extend({},a._q4,a.st.block);a._r4=[];a._s4=[];a.ev.on("rsAfterInit",function(){m()});a.ev.on("rsBeforeParseNode",function(a,b,d){b=l(b);d.animBlocks=b.find(".rsABlock").css("display","none");d.animBlocks.length||(b.hasClass("rsABlock")?d.animBlocks=b.css("display","none"):d.animBlocks=!1)});a.ev.on("rsAfterContentSet",function(b,f){f.id===a.slides[a.currSlideId].id&&setTimeout(function(){m()},a.st.fadeinLoadedSlide?
300:0)});a.ev.on("rsAfterSlideChange",function(){m()})},_v4:function(l,a){setTimeout(function(){l.css(a)},6)},_u4:function(m){var a=this,b,g,f,d,h,e,n;a._s4=[];m.each(function(m){b=l(this);g={};f={};d=null;var c=b.attr("data-move-offset"),c=c?parseInt(c,10):a.st.block.moveOffset;if(0<c&&((e=b.data("move-effect"))?(e=e.toLowerCase(),"none"===e?e=!1:"left"!==e&&"top"!==e&&"bottom"!==e&&"right"!==e&&(e=a.st.block.moveEffect,"none"===e&&(e=!1))):e=a.st.block.moveEffect,e&&"none"!==e)){var p;p="right"===
e||"left"===e?!0:!1;var k;n=!1;a._e?(k=0,h=a._x1):(p?isNaN(parseInt(b.css("right"),10))?h="left":(h="right",n=!0):isNaN(parseInt(b.css("bottom"),10))?h="top":(h="bottom",n=!0),h="margin-"+h,n&&(c=-c),a._e?k=parseInt(b.css(h),10):(k=b.data("rs-start-move-prop"),void 0===k&&(k=parseInt(b.css(h),10),isNaN(k)&&(k=0),b.data("rs-start-move-prop",k))));f[h]=a._m4("top"===e||"left"===e?k-c:k+c,p);g[h]=a._m4(k,p)}c=b.attr("data-fade-effect");if(!c)c=a.st.block.fadeEffect;else if("none"===c.toLowerCase()||
"false"===c.toLowerCase())c=!1;c&&(f.opacity=0,g.opacity=1);if(c||e)d={},d.hasFade=Boolean(c),Boolean(e)&&(d.moveProp=h,d.hasMove=!0),d.speed=b.data("speed"),isNaN(d.speed)&&(d.speed=a.st.block.speed),d.easing=b.data("easing"),d.easing||(d.easing=a.st.block.easing),d.css3Easing=l.rsCSS3Easing[d.easing],d.delay=b.data("delay"),isNaN(d.delay)&&(d.delay=a.st.block.delay*m);c={};a._e&&(c[a._g+a._u1]="0ms");c.moveProp=g.moveProp;c.opacity=g.opacity;c.display="none";a._r4.push({block:b,css:c});a._v4(b,
f);a._s4.push(setTimeout(function(b,d,c,e){return function(){b.css("display","block");if(c){var g={};if(a._e){var f="";c.hasMove&&(f+=c.moveProp);c.hasFade&&(c.hasMove&&(f+=", "),f+="opacity");g[a._g+a._t1]=f;g[a._g+a._u1]=c.speed+"ms";g[a._g+a._v1]=c.css3Easing;b.css(g);setTimeout(function(){b.css(d)},24)}else setTimeout(function(){b.animate(d,c.speed,c.easing)},16)}delete a._s4[e]}}(b,g,d,m),6>=d.delay?12:d.delay))})}});l.rsModules.animatedBlocks=l.rsProto._p4})(jQuery);
// jquery.rs.auto-height v1.0.3
(function(b){b.extend(b.rsProto,{_w4:function(){var a=this;if(a.st.autoHeight){var b,c,e,f=!0,d=function(d){e=a.slides[a.currSlideId];(b=e.holder)&&(c=b.height())&&void 0!==c&&c>(a.st.minAutoHeight||30)&&(a._c4=c,a._e||!d?a._e1.css("height",c):a._e1.stop(!0,!0).animate({height:c},a.st.transitionSpeed),a.ev.trigger("rsAutoHeightChange",c),f&&(a._e&&setTimeout(function(){a._e1.css(a._g+"transition","height "+a.st.transitionSpeed+"ms ease-in-out")},16),f=!1))};a.ev.on("rsMaybeSizeReady.rsAutoHeight",
function(a,b){e===b&&d()});a.ev.on("rsAfterContentSet.rsAutoHeight",function(a,b){e===b&&d()});a.slider.addClass("rsAutoHeight");a.ev.one("rsAfterInit",function(){setTimeout(function(){d(!1);setTimeout(function(){a.slider.append('<div style="clear:both; float: none;"></div>')},16)},16)});a.ev.on("rsBeforeAnimStart",function(){d(!0)});a.ev.on("rsBeforeSizeSet",function(){setTimeout(function(){d(!1)},16)})}}});b.rsModules.autoHeight=b.rsProto._w4})(jQuery);
// jquery.rs.global-caption v1.0
(function(b){b.extend(b.rsProto,{_d6:function(){var a=this;a.st.globalCaption&&(a.ev.on("rsAfterInit",function(){a.globalCaption=b('<div class="rsGCaption"></div>').appendTo(a.st.globalCaptionInside?a._e1:a.slider);a.globalCaption.html(a.currSlide.caption)}),a.ev.on("rsBeforeAnimStart",function(){a.globalCaption.html(a.currSlide.caption)}))}});b.rsModules.globalCaption=b.rsProto._d6})(jQuery);
// jquery.rs.active-class v1.0.1
(function(c){c.rsProto._o4=function(){var b,a=this;if(a.st.addActiveClass)a.ev.on("rsOnUpdateNav",function(){b&&clearTimeout(b);b=setTimeout(function(){a._g4&&a._g4.removeClass("rsActiveSlide");a._r1&&a._r1.addClass("rsActiveSlide");b=null},50)})};c.rsModules.activeClass=c.rsProto._o4})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function(b){b.extend(b.rsProto,{_o5:function(){var a=this,h,d,f;a._p5={enabled:!1,change:!1,prefix:""};a.st.deeplinking=b.extend({},a._p5,a.st.deeplinking);if(a.st.deeplinking.enabled){var g=a.st.deeplinking.change,e=a.st.deeplinking.prefix,c="#"+e,k=function(){var a=window.location.hash;return a&&0<a.indexOf(e)&&(a=parseInt(a.substring(c.length),10),0<=a)?a-1:-1},p=k();-1!==p&&(a.st.startSlideId=p);g&&(b(window).on("hashchange"+a.ns,function(b){h||(b=k(),0>b||(b>a.numSlides-1&&(b=a.numSlides-1),
a.goTo(b)))}),a.ev.on("rsBeforeAnimStart",function(){d&&clearTimeout(d);f&&clearTimeout(f)}),a.ev.on("rsAfterSlideChange",function(){d&&clearTimeout(d);f&&clearTimeout(f);f=setTimeout(function(){h=!0;window.location.replace((""+window.location).split("#")[0]+c+(a.currSlideId+1));d=setTimeout(function(){h=!1;d=null},60)},400)}));a.ev.on("rsBeforeDestroy",function(){d=f=null;g&&b(window).off("hashchange"+a.ns)})}}});b.rsModules.deeplinking=b.rsProto._o5})(jQuery);
(function(b,a,h){function d(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var f=document,g,e=b.event.special,c=f.documentMode,k="onhashchange"in a&&(c===h||7<c);b.fn.hashchange=function(a){return a?this.bind("hashchange",a):this.trigger("hashchange")};b.fn.hashchange.delay=50;e.hashchange=b.extend(e.hashchange,{setup:function(){if(k)return!1;b(g.start)},teardown:function(){if(k)return!1;b(g.stop)}});g=function(){function g(){var f=d(),e=q(l);f!==l?(m(l=f,e),b(a).trigger("hashchange")):
e!==l&&(location.href=location.href.replace(/#.*/,"")+e);c=setTimeout(g,b.fn.hashchange.delay)}var e={},c,l=d(),n=function(a){return a},m=n,q=n;e.start=function(){c||g()};e.stop=function(){c&&clearTimeout(c);c=h};a.attachEvent&&!a.addEventListener&&!k&&function(){var a,c;e.start=function(){a||(c=(c=b.fn.hashchange.src)&&c+d(),a=b('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){c||m(d());g()}).attr("src",c||"javascript:0").insertAfter("body")[0].contentWindow,f.onpropertychange=
function(){try{"title"===event.propertyName&&(a.document.title=f.title)}catch(b){}})};e.stop=n;q=function(){return d(a.location.href)};m=function(c,e){var d=a.document,g=b.fn.hashchange.domain;c!==e&&(d.title=f.title,d.open(),g&&d.write('<script>document.domain="'+g+'"\x3c/script>'),d.close(),a.location.hash=c)}}();return e}()})(jQuery,this);
// jquery.rs.visible-nearby v1.0.2
(function(d){d.rsProto._g7=function(){var a=this;a.st.visibleNearby&&a.st.visibleNearby.enabled&&(a._h7={enabled:!0,centerArea:.6,center:!0,breakpoint:0,breakpointCenterArea:.8,hiddenOverflow:!0,navigateByCenterClick:!1},a.st.visibleNearby=d.extend({},a._h7,a.st.visibleNearby),a.ev.one("rsAfterPropsSetup",function(){a._i7=a._e1.css("overflow","visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();a.st.visibleNearby.hiddenOverflow||a._i7.css("overflow","visible");a._o1=a.st.controlsInside?
a._i7:a.slider}),a.ev.on("rsAfterSizePropSet",function(){var b,c=a.st.visibleNearby;b=c.breakpoint&&a.width<c.breakpoint?c.breakpointCenterArea:c.centerArea;a._h?(a._b4*=b,a._i7.css({height:a._c4,width:a._b4/b}),a._d=a._b4*(1-b)/2/b):(a._c4*=b,a._i7.css({height:a._c4/b,width:a._b4}),a._d=a._c4*(1-b)/2/b);c.navigateByCenterClick||(a._q=a._h?a._b4:a._c4);c.center&&a._e1.css("margin-"+(a._h?"left":"top"),a._d)}))};d.rsModules.visibleNearby=d.rsProto._g7})(jQuery);



$(document).ready(function() {

    var $fullScrGallery =$('#fullScrGallery');

    function  initGallery () {
        $fullScrGallery.royalSlider({
          fullscreen: {
            enabled: true,
            nativeFS: true
          },
          //imageScaleMode: 'fill',
          imageScaleMode: 'fill',
          autoScaleSlider: true,
          autoScaleSliderWidth: 860,
          autoScaleSliderHeight: 520,
          loop: true,
          arrowsNav: true,
        });
    }

    initGallery()

    $(document).on('click','.galleryFilter',function(event){
            var $this = $(this);

            if(!$this.hasClass('galleryFilterActive')){
                $('.galleryFilterActive').removeClass('galleryFilterActive');
                $this.addClass('galleryFilterActive')

                var galleryToLoad = $this.attr('data-galleryFilter');


                $('#fullScrGallery').html('')

                if(galleryToLoad==='All'){
                    addGalleryImgs(contentObject['gallery']['sportsCarExperience']);
                    addGalleryImgs(contentObject['gallery']['weekender']);
                    addGalleryImgs(contentObject['gallery']['QDrive']);
                }else{
                    addGalleryImgs(contentObject['gallery'][galleryToLoad]);
                }

            }
            initGallery()
    });
});



/* Disable Click on currentLink */
$('.currLink').click(function(event){
    event.preventDefault();
    return false;
});


//Call back for PNGs for non-supporting SVG devices.
if (!Modernizr.svg) {
  $('img[src*="svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
  });
}


$(document).load(function () {
    winWidth = document.documentElement.clientWidth;
    winHeight = document.documentElement.clientWidth;
});




$(document).on('click','.tabBtnWrap button',function(event){
    event.preventDefault();


    if(!$(this).hasClass('buttonActivated')){
        var $showDiv = $($(this).attr('data-show')),
        $this = $(this),
        $mainCol2 =$this.closest('.mainCol2'),
        $mainCol1 =$this.closest('.sec').find('.mainCol1');


        if($this.attr('data-codeEval')!==''){
            eval($this.attr('data-codeEval'));
        }

        $mainCol2.find('.tabBtnWrap button').removeClass('buttonActivated');
        $this.addClass('buttonActivated');


        $mainCol1.find('.leftModules').each(function (){
            $(this).toggleClass('leftModulesVis')
        });

        $mainCol2.find('.tabContent').each(function (){
            $(this).toggleClass('tabContentVis')
        });

    }
    return false;
});

$(document).on('click','.FAQList dt',function(event){
    var $this = $(this);
    if(!$this.hasClass('FAQAnsOpen')){
        $('.FAQAnsOpen').removeClass('FAQAnsOpen');
        $this.addClass('FAQAnsOpen')
    }else{
        $this.removeClass('FAQAnsOpen');
    }

});


$(document).on('click','.playBtn',function(event){
    var $this = $(this);

    $this.addClass('playBtnHide').closest('.sec').find('.videoOverlay').hide();


});






function loadStaticContent(){
    var $FAQList = $('#FAQList'),
        FAQMinHeight;

    for(var a =0 ; a<contentObject['faq'].length; a++) {
        var $dt = $('<dt></dt>'),
            $span = $('<span></span>'),
            $dd = $('<dd></dd>');

        $dt.html(contentObject['faq'][a]['que']).append($span);
        $dd.html(contentObject['faq'][a]['ans']);

        $FAQList.append($dt).append($dd)
        FAQMinHeight = (contentObject['faq'].length*50)+400
    }

    $('#contact .wrap').css('min-height',FAQMinHeight+'px')

    //Contact
    $('#contactEmail').html('Email <br><a href="mailto:'+contentObject['contact']['email']+'">'+contentObject['contact']['email']+'</a>')
    $('#contactWebsite a').attr('href',contentObject['contact']['dealershipLink'])
}
loadStaticContent();






//var IndianStates =["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Pondicherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Tripura","Uttar Pradesh","Uttaranchal","West Bengal","Outside India"];

(function(){
    var IndianStateCities=[
        {
            "state":"Andaman and Nicobar Islands",
            "cities": ["Port Blair*"]
        },
        {
            "state":"Andhra Pradesh",
            "cities": ["Adoni","Amalapuram","Anakapalle","Anantapur","Bapatla","Bheemunipatnam","Bhimavaram","Bobbili","Chilakaluripet","Chirala","Chittoor","Dharmavaram","Eluru","Gooty","Gudivada","Gudur","Guntakal","Guntur","Hindupur","Jaggaiahpet","Jammalamadugu","Kadapa","Kadiri","Kakinada","Kandukur","Kavali","Kovvur","Kurnool","Macherla","Machilipatnam","Madanapalle","Mandapeta","Markapur","Nagari","Naidupet","Nandyal","Narasapuram","Narasaraopet","Narsipatnam","Nellore","Nidadavole","Nuzvid","Ongole","Palacole","Palasa Kasibugga","Parvathipuram","Pedana","Peddapuram","Pithapuram","Ponnur","Proddatur","Punganur","Puttur","Rajahmundry","Rajam","Rajampet","Ramachandrapuram","Rayachoti","Rayadurg","Renigunta","Repalle","Salur","Samalkot","Sattenapalle","Srikakulam","Srikalahasti","Srisailam Project (Right Flank Colony) Township","Sullurpeta","Tadepalligudem","Tadpatri","Tanuku","Tenali","Tirupati","Tiruvuru","Tuni","Uravakonda","Venkatagiri","Vijayawada","Vinukonda","Visakhapatnam","Vizianagaram","Yemmiganur","Yerraguntla"]
        },
        {
            "state":"Arunachal Pradesh",
            "cities": ["Naharlagun","Pasighat"]
        },
        {
            "state":"Assam",
            "cities": ["Barpeta","Bongaigaon City","Dhubri","Dibrugarh","Diphu","Goalpara","Guwahati","Jorhat","Karimganj","Lanka","Lumding","Mangaldoi","Mankachar","Margherita","Mariani","Marigaon","Nagaon","Nalbari","North Lakhimpur","Rangia","Sibsagar","Silapathar","Silchar","Tezpur","Tinsukia"]
        },
        {
            "state":"Bihar",
            "cities": ["Araria","Arrah","Arwal","Asarganj","Aurangabad","Bagaha","Barh","Begusarai","Bettiah","Bhabua","Bhagalpur","Buxar","Darbhanga","Dehri-on-Sone","Dumraon","Forbesganj","Gaya","Gopalganj","Hajipur","Jamalpur","Jamui","Jehanabad","Katihar","Kishanganj","Lakhisarai","Lalganj","Madhepura","Madhubani","Maharajganj","Mahnar Bazar","Makhdumpur","Maner","Manihari","Marhaura","Masaurhi","Mirganj","Mokameh","Motihari","Motipur","Munger","Murliganj","Muzaffarpur","Narkatiaganj","Naugachhia","Nawada","Nokha","Patna*","Piro","Purnia","Rafiganj","Rajgir","Ramnagar","Raxaul Bazar","Revelganj","Rosera","Saharsa","Samastipur","Sasaram","Sheikhpura","Sheohar","Sherghati","Silao","Sitamarhi","Siwan","Sonepur","Sugauli","Sultanganj","Supaul","Warisaliganj"]
        },
        {
            "state":"Chandigarh",
            "cities": ["Chandigarh*"]
        },
        {
            "state":"Chhattisgarh",
            "cities": ["Ambikapur","Bhatapara","Bhilai Nagar","Bilaspur","Chirmiri","Dalli-Rajhara","Dhamtari","Durg","Jagdalpur","Korba","Mahasamund","Manendragarh","Mungeli","Naila Janjgir","Raigarh","Raipur*","Rajnandgaon","Sakti","Tilda Newra"]
        },
        {
            "state":"Dadra and Nagar Haveli",
            "cities": ["Silvassa*"]
        },
        {
            "state":"Delhi",
            "cities": ["Delhi","New Delhi*"]
        },
        {
            "state":"Goa",
            "cities": ["Mapusa","Margao","Marmagao","Panaji*"]
        },
        {
            "state":"Gujarat",
            "cities": ["Adalaj","Ahmedabad","Amreli","Anand","Anjar","Ankleshwar","Bharuch","Bhavnagar","Bhuj","Chhapra","Deesa","Dhoraji","Godhra","Jamnagar","Kadi","Kapadvanj","Keshod","Khambhat","Lathi","Limbdi","Lunawada","Mahesana","Mahuva","Manavadar","Mandvi","Mangrol","Mansa","Mahemdabad","Modasa","Morvi","Nadiad","Navsari","Padra","Palanpur","Palitana","Pardi","Patan","Petlad","Porbandar","Radhanpur","Rajkot","Rajpipla","Rajula","Ranavav","Rapar","Salaya","Sanand","Savarkundla","Sidhpur","Sihor","Songadh","Surat","Talaja","Thangadh","Tharad","Umbergaon","Umreth","Una","Unjha","Upleta","Vadnagar","Vadodara","Valsad","Vapi","Vapi","Veraval","Vijapur","Viramgam","Visnagar","Vyara","Wadhwan","Wankaner"]
        },
        {
            "state":"Haryana",
            "cities": ["Bahadurgarh","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gohana","Gurgaon","Hansi","Hisar","Jind","Kaithal","Karnal","Ladwa","Mahendragarh","Mandi Dabwali","Narnaul","Narwana","Palwal","Panchkula","Panipat","Pehowa","Pinjore","Rania","Ratia","Rewari","Rohtak","Safidon","Samalkha","Sarsod","Shahbad","Sirsa","Sohna","Sonipat","Taraori","Thanesar","Tohana","Yamunanagar"]
        },
        {
            "state":"Himachal Pradesh",
            "cities": ["Mandi","Nahan","Palampur","Shimla*","Solan","Sundarnagar"]
        },
        {
            "state":"Jammu and Kashmir",
            "cities": ["Anantnag","Baramula","Jammu","Kathua","Punch","Rajauri","Sopore","Srinagar*","Udhampur"]
        },
        {
            "state":"Jharkhand",
            "cities": ["Adityapur","Bokaro Steel City","Chaibasa","Chatra","Chirkunda","Medininagar (Daltonganj)","Deoghar","Dhanbad","Dumka","Giridih","Gumia","Hazaribag","Jamshedpur","Jhumri Tilaiya","Lohardaga","Madhupur","Mihijam","Musabani","Pakaur","Patratu","Phusro","Ramgarh","Ranchi*","Sahibganj","Saunda","Simdega","Tenu dam-cum-Kathhara"]
        },
        {
            "state":"Karnataka",
            "cities": ["Adyar","Afzalpur","Arsikere","Athni","Bengaluru","Belagavi","Ballari","Chikkamagaluru","Davanagere","Gokak","Hubli-Dharwad","Karwar","Kolar","Lakshmeshwar","Lingsugur","Maddur","Madhugiri","Madikeri","Magadi","Mahalingapura","Malavalli","Malur","Mandya","Mangaluru","Manvi","Mudalagi","Mudabidri","Muddebihal","Mudhol","Mulbagal","Mundargi","Nanjangud","Nargund","Navalgund","Nelamangala","Pavagada","Piriyapatna","Puttur","Rabkavi Banhatti","Raayachuru","Ranebennuru","Ramanagaram","Ramdurg","Ranibennur","Robertson Pet","Ron","Sadalagi","Sagara","Sakaleshapura","Sindagi","Sanduru","Sankeshwara","Saundatti-Yellamma","Savanur","Sedam","Shahabad","Shahpur","Shiggaon","Shikaripur","Shivamogga","Surapura","Shrirangapattana","Sidlaghatta","Sindhagi","Sindhnur","Sira","Sirsi","Siruguppa","Srinivaspur","Tarikere","Tekkalakote","Terdal","Talikota","Tiptur","Tumkur","Udupi","Vijayapura","Wadi","Yadgir"]
        },
        {
            "state":"Karnatka",
            "cities": ["Mysore"]
        },
        {
            "state":"Kerala",
            "cities": ["Adoor","Alappuzha","Attingal","Chalakudy","Changanassery","Cherthala","Chittur-Thathamangalam","Guruvayoor","Kanhangad","Kannur","Kasaragod","Kayamkulam","Kochi","Kodungallur","Kollam","Kottayam","Kozhikode","Kunnamkulam","Malappuram","Mattannur","Mavelikkara","Mavoor","Muvattupuzha","Nedumangad","Neyyattinkara","Nilambur","Ottappalam","Palai","Palakkad","Panamattom","Panniyannur","Pappinisseri","Paravoor","Pathanamthitta","Peringathur","Perinthalmanna","Perumbavoor","Ponnani","Punalur","Puthuppally","Koyilandy","Shoranur","Taliparamba","Thiruvalla","Thiruvananthapuram","Thodupuzha","Thrissur","Tirur","Vaikom","Varkala","Vatakara"]
        },
        {
            "state":"Madhya Pradesh",
            "cities": ["Alirajpur","Ashok Nagar","Balaghat","Bhopal","Ganjbasoda","Gwalior","Indore","Itarsi","Jabalpur","Lahar","Maharajpur","Mahidpur","Maihar","Malaj Khand","Manasa","Manawar","Mandideep","Mandla","Mandsaur","Mauganj","Mhow Cantonment","Mhowgaon","Morena","Multai","Mundi","Murwara (Katni)","Nagda","Nainpur","Narsinghgarh","Narsinghgarh","Neemuch","Nepanagar","Niwari","Nowgong","Nowrozabad (Khodargama)","Pachore","Pali","Panagar","Pandhurna","Panna","Pasan","Pipariya","Pithampur","Porsa","Prithvipur","Raghogarh-Vijaypur","Rahatgarh","Raisen","Rajgarh","Ratlam","Rau","Rehli","Rewa","Sabalgarh","Sagar","Sanawad","Sarangpur","Sarni","Satna","Sausar","Sehore","Sendhwa","Seoni","Seoni-Malwa","Shahdol","Shajapur","Shamgarh","Sheopur","Shivpuri","Shujalpur","Sidhi","Sihora","Singrauli","Sironj","Sohagpur","Tarana","Tikamgarh","Ujjain","Umaria","Vidisha","Vijaypur","Wara Seoni"]
        },
        {
            "state":"Maharashtra",
            "cities": ["Ahmednagar","Akola","Akot","Amalner","Ambejogai","Amravati","Anjangaon","Arvi","Aurangabad","Bhiwandi","Dhule","Kalyan-Dombivali","Ichalkaranji","Kalyan-Dombivali","Karjat","Latur","Loha","Lonar","Lonavla","Mahad","Malegaon","Malkapur","Mangalvedhe","Mangrulpir","Manjlegaon","Manmad","Manwath","Mehkar","Mhaswad","Mira-Bhayandar","Morshi","Mukhed","Mul","Mumbai","Murtijapur","Nagpur","Nanded-Waghala","Nandgaon","Nandura","Nandurbar","Narkhed","Nashik","Navi Mumbai","Nawapur","Nilanga","Osmanabad","Ozar","Pachora","Paithan","Palghar","Pandharkaoda","Pandharpur","Panvel","Parbhani","Parli","Partur","Pathardi","Pathri","Patur","Pauni","Pen","Phaltan","Pulgaon","Pune","Purna","Pusad","Rahuri","Rajura","Ramtek","Ratnagiri","Raver","Risod","Sailu","Sangamner","Sangli","Sangole","Sasvad","Satana","Satara","Savner","Sawantwadi","Shahade","Shegaon","Shendurjana","Shirdi","Shirpur-Warwade","Shirur","Shrigonda","Shrirampur","Sillod","Sinnar","Solapur","Soyagaon","Talegaon Dabhade","Talode","Tasgaon","Thane","Tirora","Tuljapur","Tumsar","Uchgaon","Udgir","Umarga","Umarkhed","Umred","Uran","Uran Islampur","Vadgaon Kasba","Vaijapur","Vasai-Virar","Vita","Wadgaon Road","Wai","Wani","Wardha","Warora","Warud","Washim","Yavatmal","Yawal","Yevla"]
        },
        {
            "state":"Manipur",
            "cities": ["Imphal*","Lilong","Mayang Imphal","Thoubal"]
        },
        {
            "state":"Meghalaya",
            "cities": ["Nongstoin","Shillong*","Tura"]
        },
        {
            "state":"Mizoram",
            "cities": ["Aizawl","Lunglei","Saiha"]
        },
        {
            "state":"Nagaland",
            "cities": ["Dimapur","Kohima*","Mokokchung","Tuensang","Wokha","Zunheboto"]
        },
        {
            "state":"Odisha",
            "cities": ["Balangir","Baleshwar Town","Barbil","Bargarh","Baripada Town","Bhadrak","Bhawanipatna","Bhubaneswar*","Brahmapur","Byasanagar","Cuttack","Dhenkanal","Jatani","Jharsuguda","Kendrapara","Kendujhar","Malkangiri","Nabarangapur","Paradip","Parlakhemundi","Pattamundai","Phulabani","Puri","Rairangpur","Rajagangapur","Raurkela","Rayagada","Sambalpur","Soro","Sunabeda","Sundargarh","Talcher","Tarbha","Titlagarh"]
        },
        {
            "state":"Puducherry",
            "cities": ["Karaikal","Mahe","Pondicherry*","Yanam"]
        },
        {
            "state":"Punjab",
            "cities": ["Amritsar","Barnala","Batala","Bathinda","Dhuri","Faridkot","Fazilka","Firozpur","Firozpur Cantt.","Gobindgarh","Gurdaspur","Hoshiarpur","Jagraon","Jalandhar Cantt.","Jalandhar","Kapurthala","Khanna","Kharar","Kot Kapura","Longowal","Ludhiana","Malerkotla","Malout","Mansa","Moga","Mohali","Morinda, India","Mukerian","Muktsar","Nabha","Nakodar","Nangal","Nawanshahr","Pathankot","Patiala","Pattran","Patti","Phagwara","Phillaur","Qadian","Raikot","Rajpura","Rampura Phul","Rupnagar","Samana","Sangrur","Sirhind Fatehgarh Sahib","Sujanpur","Sunam","Talwara","Tarn Taran","Urmar Tanda","Zira","Zirakpur"]
        },
        {
            "state":"Rajasthan",
            "cities": ["Ajmer","Alwar","Bikaner","Bharatpur","Bhilwara","Jaipur*","Jodhpur","Lachhmangarh","Ladnu","Lakheri","Lalsot","Losal","Makrana","Malpura","Mandalgarh","Mandawa","Mangrol","Merta City","Mount Abu","Nadbai","Nagar","Nagaur","Nasirabad","Nathdwara","Neem-Ka-Thana","Nimbahera","Nohar","Nokha","Pali","Phalodi","Phulera","Pilani","Pilibanga","Pindwara","Pipar City","Prantij","Pratapgarh","Raisinghnagar","Rajakhera","Rajaldesar","Rajgarh (Alwar)","Rajgarh (Churu)","Rajsamand","Ramganj Mandi","Ramngarh","Ratangarh","Rawatbhata","Rawatsar","Reengus","Sadri","Sadulshahar","Sadulpur","Sagwara","Sambhar","Sanchore","Sangaria","Sardarshahar","Sawai Madhopur","Shahpura","Shahpura","Sheoganj","Sikar","Sirohi","Sojat","Sri Madhopur","Sujangarh","Sumerpur","Suratgarh","Taranagar","Todabhim","Todaraisingh","Tonk","Udaipur","Udaipurwati","Vijainagar, Ajmer"]
        },
        {
            "state":"Tamil Nadu",
            "cities": ["Arakkonam","Aruppukkottai","Chennai*","Coimbatore","Erode","Gobichettipalayam","Kancheepuram","Karur","Lalgudi","Madurai","Manachanallur","Nagapattinam","Nagercoil","Namagiripettai","Namakkal","Nandivaram-Guduvancheri","Nanjikottai","Natham","Nellikuppam","Neyveli (TS)","O' Valley","Oddanchatram","P.N.Patti","Pacode","Padmanabhapuram","Palani","Palladam","Pallapatti","Pallikonda","Panagudi","Panruti","Paramakudi","Parangipettai","Pattukkottai","Perambalur","Peravurani","Periyakulam","Periyasemur","Pernampattu","Pollachi","Polur","Ponneri","Pudukkottai","Pudupattinam","Puliyankudi","Punjaipugalur","Ranipet","Rajapalayam","Ramanathapuram","Rameshwaram","Rasipuram","Salem","Sankarankoil","Sankari","Sathyamangalam","Sattur","Shenkottai","Sholavandan","Sholingur","Sirkali","Sivaganga","Sivagiri","Sivakasi","Srivilliputhur","Surandai","Suriyampalayam","Tenkasi","Thammampatti","Thanjavur","Tharamangalam","Tharangambadi","Theni Allinagaram","Thirumangalam","Thirupuvanam","Thiruthuraipoondi","Thiruvallur","Thiruvarur","Thuraiyur","Tindivanam","Tiruchendur","Tiruchengode","Tiruchirappalli","Tirukalukundram","Tirukkoyilur","Tirunelveli","Tirupathur","Tirupathur","Tiruppur","Tiruttani","Tiruvannamalai","Tiruvethipuram","Tittakudi","Udhagamandalam","Udumalaipettai","Unnamalaikadai","Usilampatti","Uthamapalayam","Uthiramerur","Vadakkuvalliyur","Vadalur","Vadipatti","Valparai","Vandavasi","Vaniyambadi","Vedaranyam","Vellakoil","Vellore","Vikramasingapuram","Viluppuram","Virudhachalam","Virudhunagar","Viswanatham"]
        },
        {
            "state":"Telangana",
            "cities": ["Adilabad","Bellampalle","Bhadrachalam","Bhainsa","Bhongir","Bodhan","Farooqnagar","Gadwal","Hyderabad*","Jagtial","Jangaon","Kagaznagar","Kamareddy","Karimnagar","Khammam","Koratla","Kothagudem","Kyathampalle","Mahbubnagar","Mancherial","Mandamarri","Manuguru","Medak","Miryalaguda","Nagarkurnool","Narayanpet","Nirmal","Nizamabad","Palwancha","Ramagundam","Sadasivpet","Sangareddy","Siddipet","Sircilla","Suryapet","Tandur","Vikarabad","Wanaparthy","Warangal","Yellandu"]
        },
        {
            "state":"Tripura",
            "cities": ["Agartala*","Belonia","Dharmanagar","Kailasahar","Khowai","Pratapgarh","Udaipur"]
        },
        {
            "state":"Uttar Pradesh",
            "cities": ["Achhnera","Agra","Aligarh","Allahabad","Amroha","Azamgarh","Bahraich","Chandausi","Etawah","Firozabad","Fatehpur Sikri","Hapur","Hardoi *","Jhansi","Kalpi","Kanpur","Khair","Laharpur","Lakhimpur","Lal Gopalganj Nindaura","Lalitpur","Lalganj","Lar","Loni","Lucknow*","Mathura","Meerut","Modinagar","Moradabad","Nagina","Najibabad","Nakur","Nanpara","Naraura","Naugawan Sadat","Nautanwa","Nawabganj","Nehtaur","Niwai","Noida","Noorpur","Obra","Orai","Padrauna","Palia Kalan","Parasi","Phulpur","Pihani","Pilibhit","Pilkhuwa","Powayan","Pukhrayan","Puranpur","Purquazi","Purwa","Rae Bareli","Rampur","Rampur Maniharan","Rampur Maniharan","Rasra","Rath","Renukoot","Reoti","Robertsganj","Rudauli","Rudrapur","Sadabad","Safipur","Saharanpur","Sahaspur","Sahaswan","Sahawar","Sahjanwa","Saidpur","Sambhal","Samdhan","Samthar","Sandi","Sandila","Sardhana","Seohara","Shahabad, Hardoi","Shahabad, Rampur","Shahganj","Shahjahanpur","Shamli","Shamsabad, Agra","Shamsabad, Farrukhabad","Sherkot","Shikarpur, Bulandshahr","Shikohabad","Shishgarh","Siana","Sikanderpur","Sikandra Rao","Sikandrabad","Sirsaganj","Sirsi","Sitapur","Soron","Suar","Sultanpur","Sumerpur","Tanda","Thakurdwara","Thana Bhawan","Tilhar","Tirwaganj","Tulsipur","Tundla","Ujhani","Unnao","Utraula","Varanasi","Vrindavan","Warhapur","Zaidpur","Zamania"]
        },
        {
            "state":"Uttarakhand",
            "cities": ["Bageshwar","Dehradun","Haldwani-cum-Kathgodam","Hardwar","Kashipur","Manglaur","Mussoorie","Nagla","Nainital","Pauri","Pithoragarh","Ramnagar","Rishikesh","Roorkee","Rudrapur","Sitarganj","Srinagar","Tehri"]
        },
        {
            "state":"West Bengal",
            "cities": ["Adra","Alipurduar","Arambagh","Asansol","Baharampur","Balurghat","Bankura","Darjiling","English Bazar","Gangarampur","Habra","Hugli-Chinsurah","Jalpaiguri","Jhargram","Kalimpong","Kharagpur","Kolkata","Mainaguri","Malda","Mathabhanga","Medinipur","Memari","Monoharpur","Murshidabad","Nabadwip","Naihati","Panchla","Pandua","Paschim Punropara","Purulia","Raghunathpur","Raghunathganj","Raiganj","Rampurhat","Ranaghat","Sainthia","Santipur","Siliguri","Sonamukhi","Srirampore","Suri","Taki","Tamluk","Tarakeswar"]
        },
        {
            "state":"Outside India",
            "cities": ["Out of India"]
        }

    ];

    var $locationState = $('#locationState');

    for(var x=0 ; x<IndianStateCities.length; x++) {
        var $option =$('<option></option>');

        $option.attr('value',IndianStateCities[x]["state"]).html(IndianStateCities[x]["state"]).attr('style','color:black');
        $locationState.append($option)
    }

    $locationState.on('change', function() {
        var state = this.value,
            $locationCity = $('#locationCity')

        for(var x=0 ; x<IndianStateCities.length; x++) {


            if(state==='Outside India'){
                $locationCity.html('')
                $('#registerCityWrap').hide()
                return;
            }else{
                $locationCity.html('')
                $('#registerCityWrap').show()
            }

            if(IndianStateCities[x]["state"] ===state){
                var $option1 =$('<option></option>');
                    $locationCity.append($option1)

                for(var a=0 ; a<IndianStateCities[x]["cities"].length; a++) {
                    var $option =$('<option></option>');

                    $option.attr('value',IndianStateCities[x]["cities"][a]).html(IndianStateCities[x]["cities"][a]).attr('style','color:black');
                    $locationCity.append($option)

                }


                return
            }

        }
    });

})();

//Live Validations
/*$( "#name" ).blur(function() {
    var nameVal = $( "#name" ).val()
    if(nameVal=="" || nameVal=='Name'){
        $('#name').focus().next('.formVal').addClass('formValIncorrect');
    }else{
        $('#name').next('.formVal').removeClass('formValIncorrect');
    }
});
$( "#email" ).blur(function() {
    var x=$('input[name="email"]').val(),
    atpos=x.indexOf("@"),
    dotpos=x.lastIndexOf(".");
    if(x=="" || x=="Email"){
        $('input[name="email"]').focus().next('.formVal').addClass('formValIncorrect');
    }
    else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        $('input[name="email"]').focus().next('.formVal').addClass('formValIncorrect');
    }
    else{
        $('input[name="email"]').next('.formVal').removeClass('formValIncorrect');
    }
});
*/




// $("#mobile").keydown(function (e) {
//         console.log(e.keyCode)
//        // Allow: backspace, delete, tab, escape, enter and .
//        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
//             // Allow: Ctrl+A
//            (e.keyCode == 65 && e.ctrlKey === true) ||
//             // Allow: Ctrl+C
//            (e.keyCode == 67 && e.ctrlKey === true) ||
//             // Allow: Ctrl+X
//            (e.keyCode == 88 && e.ctrlKey === true) ||
//             // Allow: home, end, left, right
//            (e.keyCode >= 35 && e.keyCode <= 39)  ||

//             //Same for Mac (ccmd = keycode 91)
//            (e.keyCode == 65 && e.keyCode === 91) ||
//            (e.keyCode == 67 && e.keyCode === 91) ||
//            (e.keyCode == 88 && e.keyCode === 91) ||
//            (e.keyCode == 35 && e.keyCode === 91) ){
//                 // let it happen, don't do anything

//                 if($("#mobile").val().length>=10){
//                     return;
//                 }
//        }
//        // Ensure that it is a number and stop the keypress
//        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//            e.preventDefault();
//        }
// });

function formValSubmit(){

    $('.contactForm input[type=submit]').disableBtn(true);

    $('.formVal').removeClass('formValIncorrect')
    $('#formValText').html('')

    var nameVal= $('#name').val(),
    x=$('input[name="email"]').val(),
    atpos=x.indexOf("@"),
    dotpos=x.lastIndexOf(".");

    //Name
    if(nameVal=="" || nameVal=='Name'){
        //$('input[name="name"]').focus().next('.formVal').html('Please enter your name');
        /*swal({
              type:'error',
              title:'Please enter your name',
              allowOutsideClick:true,
              confirmButtonText:'Close',
              timer:7000
        }); */
        $('#formValText').html('Please fill all fields');
        $('#name').focus().next('.formVal').addClass('formValIncorrect');
        $('.contactForm input[type=submit]').disableBtn(false);
        return false;
    }


    //Email
    if(x=="" || x=="Email"){
        //$('input[name="email"]').focus().next('.formVal').html('Please enter your e-mail address');
        /*swal({
              type:'error',
              title:'Please enter a correct email address.',
              allowOutsideClick:true,
              confirmButtonText:'Close',
              timer:7000
        }); */
        $('#formValText').html('Please fill all fields');
        $('input[name="email"]').focus().next('.formVal').addClass('formValIncorrect');
        $('.contactForm input[type=submit]').disableBtn(false);
        return false;
    }
    else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        //$('input[name="email"]').focus().next('.formVal').html('Please enter a valid email-id');
        /*swal({
              type:'error',
              title:'Please enter a correct email address.',
              allowOutsideClick:true,
              confirmButtonText:'Close',
              timer:7000
        }); */
        $('#formValText').html('Invalid Email-id');
        $('input[name="email"]').focus().next('.formVal').addClass('formValIncorrect');
        $('.contactForm input[type=submit]').disableBtn(false);
        return false;
    }
    if($('input[name="email"]').val()==""){
        //$('input[name="email"]').focus().next('.formVal').html('Please enter your e-mail address');
        /*swal({
              type:'error',
              title:'Please enter a correct email address.',
              allowOutsideClick:true,
              confirmButtonText:'Close',
              timer:7000
        }); */
        $('#formValText').html('Please fill all fields');
        $('input[name="email"]').focus().next('.formVal').addClass('formValIncorrect');
        $('.contactForm input[type=submit]').disableBtn(false);
        return false;
    }

    //Mobile
    if($('input[name="mobile"]').val()==""){
        //$('input[name="mobile"]').focus().next('.formVal').html('Please enter your phone number');
        /*swal({
              type:'error',
              title:'Please enter your Phone No.',
              allowOutsideClick:true,
              confirmButtonText:'Close',
              timer:7000
        }); */
        $('#formValText').html('Please fill all fields');
        $('input[name="mobile"]').focus().next('.formVal').addClass('formValIncorrect');
        $('.contactForm input[type=submit]').disableBtn(false);
        return false;
    }

    //State
    if($('#locationState').val()==""){
        //$('#city').focus().next('.formVal').html('Please enter your city');
        /*swal({
              type:'error',
              title:'Please enter your State',
              allowOutsideClick:true,
              confirmButtonText:'Close',
              timer:7000
        }); */
        $('#formValText').html('Please fill all fields');
        $('#locationState').focus().next('.formVal').addClass('formValIncorrect');
        return false;
    }

    //City
    if($('#locationCity').val()==""){
        //$('#city').focus().next('.formVal').html('Please enter your city');
        /*swal({
              type:'error',
              title:'Please enter your city',
              allowOutsideClick:true,
              confirmButtonText:'Close',
              timer:7000
        });*/
        $('#formValText').html('Please fill all fields');
        $('#locationCity').focus().next('.formVal').addClass('formValIncorrect');
        return false;
    }


    //AJax Submit
    var name = $("#name").val(),
        email=$("#email").val(),
        mobile=$("#mobile").val(),
        locationState=$("#locationState").val(),
        locationCity=$("#locationCity").val();


    $.ajax({
        type: "POST",
        url: 'http://theglitch.in/fbapps/audi/Mailgun/mailgun2.php',
        data:{
            "name" : name,
            "email" : email,
            "mobile" : mobile,
            "locationState" : locationState,
            "locationCity" : locationCity
        },
        success: function(data){
          /*swal({
                type:'success',
                title:'Thank You!',
                text:'Form Submitted Successfully!',
                allowOutsideClick:true,
                confirmButtonText:'Close',
                timer:7000
          });*/
          $('#locationCity').val('')
          $('input[name="email"]').val('')
          $('#locationCity').val('')
          $('#locationCity').val('')
          $('#locationCity').val('')
          $('#locationCity').val('')
          $('#formValText').html('Thanks for registering, we\'ll get in touch with you soon');
        },
        error:function(data){
          /*swal({
                type:'error',
                title:'Error!',
                text:'Sorry! could not submit form! Please resubmit',
                allowOutsideClick:true,
                confirmButtonText:'Close',
                timer:7000
          }); */
          $('.contactForm input[type=submit]').disableBtn(false);
          console.log('error')
          $('#formValText').html('Could not submit form. Please resubmit');
        }
    });

  return false;
}






var sportsCarExperienceiFramePlayer,
    weekenderVideoiFramePlayer,
    QDriveVideoiFramePlayer,
    womenVideoiFramePlayer,
    playUTVideo,
    pauseUTVideo,
    vidTimer,
    currVideoPlaying;

//Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function progress(percent, $element) {
  var progressBarWidth = percent * $element.width() / 100;
  $element.find('div').animate({ width: progressBarWidth });
}
function showVideoProgress(event,UTPlayer,$ele){
    if (event.data == YT.PlayerState.PLAYING) {

          $ele.show();
          var playerTotalTime = UTPlayer.getDuration();

          vidTimer = setInterval(function() {
            var playerCurrentTime = UTPlayer.getCurrentTime();

            var playerTimeDifference = (playerCurrentTime / playerTotalTime) * 100;
            progress(playerTimeDifference, $ele);

          }, 300);

    } else {

          clearTimeout(vidTimer);
          $ele.hide();
    }
}
function onYouTubePlayerAPIReady() {

    var videoOptions = {
                'controls' : 0,
                'modestbranding' : 1,
                'rel' : 0,
                'showinfo' : 0,
                'iv_load_policy':3,
                'enablejsapi':1,
                'loop':1,
                'autoplay': 1,
                'html5': 1
    }

    if(isMobile.any()){
        videoOptions = {
                'showinfo' : 0,
                'iv_load_policy':3,
                'enablejsapi':1,
                'html5': 1
        }
    }

        //http://jsfiddle.net/TxaHE/1/
        //https://developers.google.com/youtube/player_parameters#controls

        window['playUTVideo'] = function (str,viaScroll){
            if(window['currVideoPlaying']=== undefined){
                if(window[str]!==undefined){
                    if(window[str].playVideo()!==undefined){
                        window[str].playVideo();
                        window['currVideoPlaying']= str
                    }else{

                    }

                }
                if(viaScroll!==undefined){
                    $('#'+str.replace('Player','')).closest('.sec').find('.videoOverlay').addClass('videoOverlayHide')
                }
            }

        }

        window['pauseUTVideo']= function (str,viaScroll){
            //console.log(window[str])

            if(window['currVideoPlaying']!== undefined){
                if(window[str]!==undefined){
                    window[str].pauseVideo();
                    window['currVideoPlaying']= undefined
                }
                if(viaScroll!==undefined){
                    $('#'+str.replace('Player','')).closest('.sec').find('.videoOverlay').removeClass('videoOverlayHide')
                }
            }


        }




        function progress(percent, $element) {
          var progressBarWidth = percent * $element.width() / 100;
          $element.find('div').animate({ width: progressBarWidth });
        }

        if(contentObject['AudiSportsCarExperience']['youtubeID']!==''){

        	var sportsCarUTID = contentObject['AudiSportsCarExperience']['youtubeID'];
            if(contentObject['AudiSportsCarExperience']['youtubeID'].indexOf(' ')!==-1){
                sportsCarUTID = sportsCarUTID.replace(' ','')
            }

        	sportsCarExperienceiFramePlayer = new YT.Player('sportsCarExperienceiFrame', {
        	    height: window.winHeight,
        	    width:  window.winWidth,
        	    playerVars: videoOptions,
        	    videoId: sportsCarUTID,
        	    events: {
        	        // call this function when player is ready to use
        	        'onReady': function(){
        	                sportsCarExperienceiFramePlayer.pauseVideo()
        	        },
        	        'onStateChange' : function(event){
        	            showVideoProgress(event,sportsCarExperienceiFramePlayer,$('#sportsCarVideoProgress'))
        	        }
        	    }
        	});
        }else{
            $('#sportsCarExperienceVideo').remove();

        }


        if(contentObject['AudiWeekender']['youtubeID']!==''){

            var weekenderUTID = contentObject['AudiWeekender']['youtubeID'];
            if(contentObject['AudiWeekender']['youtubeID'].indexOf(' ')!==-1){
                weekenderUTID = weekenderUTID.replace(' ','')
            }


        	weekenderVideoiFramePlayer = new YT.Player('weekenderVideoiFrame', {
        	    height: window.winHeight,
        	    width:  window.winWidth,
        	    playerVars: videoOptions,
        	    videoId: weekenderUTID,
        	    events: {
        	    // call this function when player is ready to use
        	        'onReady': function(){
        	            weekenderVideoiFramePlayer.pauseVideo()

        	        },
        	        'onStateChange' : function(event){
        	            showVideoProgress(event,weekenderVideoiFramePlayer,$('#weekenderVideoProgress'))
        	        }
        	    }
        	});
        }else{
            $('#weekenderVideo').remove();

        }



        if(contentObject['AudiQDrive']['youtubeID']!==''){

            var QDriveUTID = contentObject['AudiQDrive']['youtubeID'];
            if(contentObject['AudiQDrive']['youtubeID'].indexOf(' ')!==-1){
                QDriveUTID = QDriveUTID.replace(' ','')
            }

        	QDriveVideoiFramePlayer = new YT.Player('QDriveVideoiFrame', {
        	    height: window.winHeight,
        	    width:  window.winWidth,
        	    playerVars: videoOptions,
        	    videoId: QDriveUTID,
        	    events: {
        	        // call this function when player is ready to use
        	        'onReady': function(){
        	            QDriveVideoiFramePlayer.pauseVideo()

        	        },
        	        'onStateChange' : function(event){
        	            showVideoProgress(event,QDriveVideoiFramePlayer,$('#QDriveVideoProgress'))
        	        }
        	    }
        	});
        }else{
            $('#QDriveVideo').remove();
        }


        if(contentObject['AudiWomensPowerDrive']['youtubeID']!==''){

            var womensPowerDriveUTID = contentObject['AudiWomensPowerDrive']['youtubeID'];
            if(contentObject['AudiWomensPowerDrive']['youtubeID'].indexOf(' ')!==-1){
                womensPowerDriveUTID = womensPowerDriveUTID.replace(' ','')
            }

        	womenVideoiFramePlayer = new YT.Player('womenVideoiFrame', {
        	    height: window.winHeight,
        	    width:  window.winWidth,
        	    playerVars: videoOptions,
        	    videoId: womensPowerDriveUTID,
        	    events: {
        	        'onReady': function(){
        	            womenVideoiFramePlayer.pauseVideo()

        	        },
        	        'onStateChange' : function(event){
        	            showVideoProgress(event,womenVideoiFramePlayer,$('#womensDriveProgress'))
        	        }
        	    }
        	});
        }else{
            $('#womensDriveVideo').remove()

        }

}


function loadFleetGallery(index){

    $('#fleetGalleryCarName').html(contentObject['AudiCars'][index]['name']);

    var galleryArray = contentObject['AudiCars'][index]['galleryImages'],
        $fleetGalleryWrap = $('#fleetGalleryWrap'),
        $fleetGalleryCurrImg = $('#fleetGalleryCurrImg'),
        $fleetGallerySliderWrap = $('#fleetGallerySliderWrap');


    if($fleetGalleryWrap.attr('data-galleryIndex')!==''){
        if($fleetGallerySliderWrap.data('royalSlider')!=undefined){
            $fleetGallerySliderWrap.data('royalSlider').destroy();
            $fleetGallerySliderWrap.html('');
        }
        //$fleetGallerySliderWrap.trigger('destroy.owl.carousel')
    }

    $fleetGalleryWrap.attr('data-galleryIndex',parseInt(index));

    $fleetGalleryCurrImg.html('01');

    if(galleryArray.length<10){
        $('#fleetGalleryTotalImgs').html('0'+galleryArray.length);

    }else{
        $('#fleetGalleryTotalImgs').html(galleryArray.length);
    }



    for(var a =0 ; a<galleryArray.length; a++) {
        var $a= $('<a></a>');

        if(galleryArray[a].indexOf('www.youtube.com')!=-1){

            var youTubeID= window.returnUTubeID(galleryArray[a])

            $a.addClass('rsImg').attr({
                'data-rsVideo':'http://www.youtube.com/watch?v='+youTubeID,
                'href': 'http://img.youtube.com/vi/'+youTubeID+'/0.jpg'
            });
        }
        else{
            $a.addClass('rsImg').attr({
                'data-rsBigImg':galleryArray[a],
                'href': galleryArray[a]
            });

        }

        $fleetGallerySliderWrap.append($a);


    }

    $fleetGallerySliderWrap.royalSlider({
      fullscreen: {
        enabled: true,
        nativeFS: true
      },
      imageScaleMode: 'fill',
      autoScaleSlider: true,
      autoScaleSliderWidth: 860,
      autoScaleSliderHeight: 520,
      loop: true,
      arrowsNav: true,
    });


    $fleetGallerySliderWrap.data('royalSlider').ev.on('rsAfterSlideChange', function(event) {
        var indx = $fleetGallerySliderWrap.data('royalSlider').currSlideId+1;
        if(indx<10){
            indx = '0'+indx
        }
        $fleetGalleryCurrImg.html(indx);
    });


}

function openFleetGallery(index){
    $('#fleetGalleryWrap').addClass('fleetGalleryWrapVis fadeIn');
    $('#fleetGalleryWrap .wrap').addClass('bounceInDown');

    loadFleetGallery(index);
}

function closeFleetGallery(){
    if($('#fleetGalleryWrap').hasClass('fleetGalleryWrapVis')){
        $('#fleetGalleryWrap .wrap').addClass('bounceOutUp');

        setTimeout(function(){
            $('#fleetGalleryWrap').addClass('fadeOut');

            var $fleetGallerySliderWrap = $('#fleetGallerySliderWrap');
            setTimeout(function(){
                $('#fleetGalleryWrap').removeClass('fadeOut fadeIn fleetGalleryWrapVis');
                $('#fleetGalleryWrap .wrap').removeClass('bounceOutUp bounceInDown');

                $('#fleetGalleryWrap').attr('data-galleryIndex','');
                $fleetGallerySliderWrap.data('royalSlider').destroy();
                $fleetGallerySliderWrap.html('');
            },1200)
        },100)

    }
}




$(document).on('click','#fleetGalleryCarPrev',function(event){
    var indx = parseInt($('#fleetGalleryWrap').attr('data-galleryIndex'))-1;
    if(indx<0){
        indx = parseInt(contentObject['AudiCars'].length-1);
    }
    //changeCarInfoSlider(indx)
    loadFleetGallery(indx);
});

$(document).on('click','#fleetGalleryCarNext',function(event){
    var indx = parseInt($('#fleetGalleryWrap').attr('data-galleryIndex'))+1;
    if(indx>=contentObject['AudiCars'].length){
        indx = 0
    }
    //changeCarInfoSlider(indx)
    loadFleetGallery(indx)
});

$(document).on('click','#fleetGalleryClose,#fleetGalleryBack',function(event){
    closeFleetGallery()
});

$(document).on('click','#fleetGalleryOpen',function(event){
    var indx = $('#fleet').attr('data-fleetindex');
    openFleetGallery(indx);
});


changeCarInfoSlider(0)
$(document).on('click','.slick-slide',function(event){
    var indexSlide =$(this).attr('data-slick-index');
    changeCarInfoSlider(indexSlide)
});





$(document).on('click','.SlideLink',function(event){
    event.preventDefault();
    window.isAutoPlayAllowed= false
    var target = this.hash,
        $target = $(target),
        dur = Math.abs(window.pageYOffset - $target.offset().top);

        console.log(dur)
        if(dur>1400){
            dur=1500
        }
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, dur, function () {
        window.location.hash = target;
        setTimeout(function(){
            //  This
            window.isAutoPlayAllowed=true
        },10);
    });

    return false
});


$(document).ready(function() {


    function calLeftModHeight(){

        $('.eventsSec .leftModules').each(function(){
            var $this= $(this);
            $this.css('min-height','0px')
            $this.css('min-height',(parseInt(winHeight-(winWidth*aspectRatio*0.01))-$this.closest('.mainCol1').height())-100 +'px');
        });
    }

    calLeftModHeight()

    $(window).resize(function() {
        calLeftModHeight()
        if(skrollrVar!==undefined){
          skrollrVar.refresh();
        }
    });
});








// (function (lib, img, cjs) {

// var p; // shortcut to reference prototypes

// // library properties:
// lib.properties = {
//     width: 220,
//     height: 190,
//     fps: 24,
//     color: "#FFFFFF",
//     manifest: []
// };



// // symbols:



// (lib.speedIndictor = function() {
//     this.initialize();

//     // Layer 1
//     this.shape = new cjs.Shape();
//     this.shape.graphics.f("#CD2240").s().p("Aj3DyIDZjoIDmj2QAKgLAGgCQAJgCALALQALAMABAGQADAKgNAMIncHCg");
//     this.shape.setTransform(-24.9,25.1);

//     this.addChild(this.shape);
// }).prototype = p = new cjs.Container();
// p.nominalBounds = new cjs.Rectangle(-49.8,0,49.8,50.2);


// (lib.speedometer = function(mode,startPosition,loop) {
//     this.initialize(mode,startPosition,loop,{});

//     // timeline functions:
//     this.frame_0 = function() {
//         this.stop();
//     }

//     // actions tween:
//     this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(56));

//     // Layer 14
//     this.shape = new cjs.Shape();
//     this.shape.graphics.f("#000000").s().p("AAxBmQgEgCgKgLIh7iMQgKgLgBgHQgCgLALgJIARgNQAKgFALALICSCRIAHANQgEAMgKAKIgTAPQgGAFgGAAQgDAAgEgCg");
//     this.shape.setTransform(62.9,81);

//     this.shape_1 = new cjs.Shape();
//     this.shape_1.graphics.f("#1D0509").s().p("AAxBmQgEgCgKgLIh7iMQgKgLgBgHQgCgLALgJIARgNQAKgFALALICSCRIAHANQgEAMgKAKIgTAPQgGAFgGAAQgDAAgEgCg");
//     this.shape_1.setTransform(62.9,81);

//     this.shape_2 = new cjs.Shape();
//     this.shape_2.graphics.f("#3B0A12").s().p("AAxBmQgEgCgKgLIh7iMQgKgLgBgHQgCgLALgJIARgNQAKgFALALICSCRIAHANQgEAMgKAKIgTAPQgGAFgGAAQgDAAgEgCg");
//     this.shape_2.setTransform(62.9,81);

//     this.shape_3 = new cjs.Shape();
//     this.shape_3.graphics.f("#580F1B").s().p("AAxBmQgEgCgKgLIh7iMQgKgLgBgHQgCgLALgJIARgNQAKgFALALICSCRIAHANQgEAMgKAKIgTAPQgGAFgGAAQgDAAgEgCg");
//     this.shape_3.setTransform(62.9,81);

//     this.shape_4 = new cjs.Shape();
//     this.shape_4.graphics.f("#751325").s().p("AAxBmQgEgCgKgLIh7iMQgKgLgBgHQgCgLALgJIARgNQAKgFALALICSCRIAHANQgEAMgKAKIgTAPQgGAFgGAAQgDAAgEgCg");
//     this.shape_4.setTransform(62.9,81);

//     this.shape_5 = new cjs.Shape();
//     this.shape_5.graphics.f("#92182E").s().p("AAxBmQgEgCgKgLIh7iMQgKgLgBgHQgCgLALgJIARgNQAKgFALALICSCRIAHANQgEAMgKAKIgTAPQgGAFgGAAQgDAAgEgCg");
//     this.shape_5.setTransform(62.9,81);

//     this.shape_6 = new cjs.Shape();
//     this.shape_6.graphics.f("#B01D37").s().p("AAxBmQgEgCgKgLIh7iMQgKgLgBgHQgCgLALgJIARgNQAKgFALALICSCRIAHANQgEAMgKAKIgTAPQgGAFgGAAQgDAAgEgCg");
//     this.shape_6.setTransform(62.9,81);

//     this.shape_7 = new cjs.Shape();
//     this.shape_7.graphics.f("#CD2240").s().p("AAxBmQgEgCgKgLIh7iMQgKgLgBgHQgCgLALgJIARgNQAKgFALALICSCRIAHANQgEAMgKAKIgTAPQgGAFgGAAQgDAAgEgCg");
//     this.shape_7.setTransform(62.9,81);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},48).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

//     // Layer 13
//     this.shape_8 = new cjs.Shape();
//     this.shape_8.graphics.f("#000000").s().p("AA/BGIijhOQgSgIgFgHQgIgLAJgSQAJgTANgEQALgDASAIQA6AZByAuQAQAHADADQAJAHgCAOQgCAcgSALQgIAGgLAAQgLAAgOgHg");
//     this.shape_8.setTransform(85.3,50.5);

//     this.shape_9 = new cjs.Shape();
//     this.shape_9.graphics.f("#1D0509").s().p("AA/BGIijhOQgSgIgFgHQgIgLAJgSQAJgTANgEQALgDASAIQA6AZByAuQAQAHADADQAJAHgCAOQgCAcgSALQgIAGgLAAQgLAAgOgHg");
//     this.shape_9.setTransform(85.3,50.5);

//     this.shape_10 = new cjs.Shape();
//     this.shape_10.graphics.f("#3B0A12").s().p("AA/BGIijhOQgSgIgFgHQgIgLAJgSQAJgTANgEQALgDASAIQA6AZByAuQAQAHADADQAJAHgCAOQgCAcgSALQgIAGgLAAQgLAAgOgHg");
//     this.shape_10.setTransform(85.3,50.5);

//     this.shape_11 = new cjs.Shape();
//     this.shape_11.graphics.f("#580F1B").s().p("AA/BGIijhOQgSgIgFgHQgIgLAJgSQAJgTANgEQALgDASAIQA6AZByAuQAQAHADADQAJAHgCAOQgCAcgSALQgIAGgLAAQgLAAgOgHg");
//     this.shape_11.setTransform(85.3,50.5);

//     this.shape_12 = new cjs.Shape();
//     this.shape_12.graphics.f("#751325").s().p("AA/BGIijhOQgSgIgFgHQgIgLAJgSQAJgTANgEQALgDASAIQA6AZByAuQAQAHADADQAJAHgCAOQgCAcgSALQgIAGgLAAQgLAAgOgHg");
//     this.shape_12.setTransform(85.3,50.5);

//     this.shape_13 = new cjs.Shape();
//     this.shape_13.graphics.f("#92182E").s().p("AA/BGIijhOQgSgIgFgHQgIgLAJgSQAJgTANgEQALgDASAIQA6AZByAuQAQAHADADQAJAHgCAOQgCAcgSALQgIAGgLAAQgLAAgOgHg");
//     this.shape_13.setTransform(85.3,50.5);

//     this.shape_14 = new cjs.Shape();
//     this.shape_14.graphics.f("#B01D37").s().p("AA/BGIijhOQgSgIgFgHQgIgLAJgSQAJgTANgEQALgDASAIQA6AZByAuQAQAHADADQAJAHgCAOQgCAcgSALQgIAGgLAAQgLAAgOgHg");
//     this.shape_14.setTransform(85.3,50.5);

//     this.shape_15 = new cjs.Shape();
//     this.shape_15.graphics.f("#CD2240").s().p("AA/BGIijhOQgSgIgFgHQgIgLAJgSQAJgTANgEQALgDASAIQA6AZByAuQAQAHADADQAJAHgCAOQgCAcgSALQgIAGgLAAQgLAAgOgHg");
//     this.shape_15.setTransform(85.3,50.5);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},44).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(5));

//     // Layer 12
//     this.shape_16 = new cjs.Shape();
//     this.shape_16.graphics.f("#000000").s().p("ABPAlIiigJQgXgBgHgDQgNgHAAgUQgBgZAPgGQAGgDAaAAICjAAQAZgBAKAIQALAJgCAXQgCAcgHAFQgEADgPAAIgUgBg");
//     this.shape_16.setTransform(92.8,14.7);

//     this.shape_17 = new cjs.Shape();
//     this.shape_17.graphics.f("#1D0509").s().p("ABPAlIiigJQgXgBgHgDQgNgHAAgUQgBgZAPgGQAGgDAaAAICjAAQAZgBAKAIQALAJgCAXQgCAcgHAFQgEADgPAAIgUgBg");
//     this.shape_17.setTransform(92.8,14.7);

//     this.shape_18 = new cjs.Shape();
//     this.shape_18.graphics.f("#3B0A12").s().p("ABPAlIiigJQgXgBgHgDQgNgHAAgUQgBgZAPgGQAGgDAaAAICjAAQAZgBAKAIQALAJgCAXQgCAcgHAFQgEADgPAAIgUgBg");
//     this.shape_18.setTransform(92.8,14.7);

//     this.shape_19 = new cjs.Shape();
//     this.shape_19.graphics.f("#580F1B").s().p("ABPAlIiigJQgXgBgHgDQgNgHAAgUQgBgZAPgGQAGgDAaAAICjAAQAZgBAKAIQALAJgCAXQgCAcgHAFQgEADgPAAIgUgBg");
//     this.shape_19.setTransform(92.8,14.7);

//     this.shape_20 = new cjs.Shape();
//     this.shape_20.graphics.f("#751325").s().p("ABPAlIiigJQgXgBgHgDQgNgHAAgUQgBgZAPgGQAGgDAaAAICjAAQAZgBAKAIQALAJgCAXQgCAcgHAFQgEADgPAAIgUgBg");
//     this.shape_20.setTransform(92.8,14.7);

//     this.shape_21 = new cjs.Shape();
//     this.shape_21.graphics.f("#92182E").s().p("ABPAlIiigJQgXgBgHgDQgNgHAAgUQgBgZAPgGQAGgDAaAAICjAAQAZgBAKAIQALAJgCAXQgCAcgHAFQgEADgPAAIgUgBg");
//     this.shape_21.setTransform(92.8,14.7);

//     this.shape_22 = new cjs.Shape();
//     this.shape_22.graphics.f("#B01D37").s().p("ABPAlIiigJQgXgBgHgDQgNgHAAgUQgBgZAPgGQAGgDAaAAICjAAQAZgBAKAIQALAJgCAXQgCAcgHAFQgEADgPAAIgUgBg");
//     this.shape_22.setTransform(92.8,14.7);

//     this.shape_23 = new cjs.Shape();
//     this.shape_23.graphics.f("#CD2240").s().p("ABPAlIiigJQgXgBgHgDQgNgHAAgUQgBgZAPgGQAGgDAaAAICjAAQAZgBAKAIQALAJgCAXQgCAcgHAFQgEADgPAAIgUgBg");
//     this.shape_23.setTransform(92.8,14.7);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},40).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(9));

//     // Layer 11
//     this.shape_24 = new cjs.Shape();
//     this.shape_24.graphics.f("#000000").s().p("AhuA/IgJgRQgLgZATgJIC/hPQAZgKAJAcIAKAbQADAQgPAGQgqAOg9AVIhmAjIgCAAQgKAAgFgHg");
//     this.shape_24.setTransform(86.1,-19.4);

//     this.shape_25 = new cjs.Shape();
//     this.shape_25.graphics.f("#1D0509").s().p("AhuA/IgJgRQgLgZATgJIC/hPQAZgKAJAcIAKAbQADAQgPAGQgqAOg9AVIhmAjIgCAAQgKAAgFgHg");
//     this.shape_25.setTransform(86.1,-19.4);

//     this.shape_26 = new cjs.Shape();
//     this.shape_26.graphics.f("#3B0A12").s().p("AhuA/IgJgRQgLgZATgJIC/hPQAZgKAJAcIAKAbQADAQgPAGQgqAOg9AVIhmAjIgCAAQgKAAgFgHg");
//     this.shape_26.setTransform(86.1,-19.4);

//     this.shape_27 = new cjs.Shape();
//     this.shape_27.graphics.f("#580F1B").s().p("AhuA/IgJgRQgLgZATgJIC/hPQAZgKAJAcIAKAbQADAQgPAGQgqAOg9AVIhmAjIgCAAQgKAAgFgHg");
//     this.shape_27.setTransform(86.1,-19.4);

//     this.shape_28 = new cjs.Shape();
//     this.shape_28.graphics.f("#751325").s().p("AhuA/IgJgRQgLgZATgJIC/hPQAZgKAJAcIAKAbQADAQgPAGQgqAOg9AVIhmAjIgCAAQgKAAgFgHg");
//     this.shape_28.setTransform(86.1,-19.4);

//     this.shape_29 = new cjs.Shape();
//     this.shape_29.graphics.f("#92182E").s().p("AhuA/IgJgRQgLgZATgJIC/hPQAZgKAJAcIAKAbQADAQgPAGQgqAOg9AVIhmAjIgCAAQgKAAgFgHg");
//     this.shape_29.setTransform(86.1,-19.4);

//     this.shape_30 = new cjs.Shape();
//     this.shape_30.graphics.f("#B01D37").s().p("AhuA/IgJgRQgLgZATgJIC/hPQAZgKAJAcIAKAbQADAQgPAGQgqAOg9AVIhmAjIgCAAQgKAAgFgHg");
//     this.shape_30.setTransform(86.1,-19.4);

//     this.shape_31 = new cjs.Shape();
//     this.shape_31.graphics.f("#CD2240").s().p("AhuA/IgJgRQgLgZATgJIC/hPQAZgKAJAcIAKAbQADAQgPAGQgqAOg9AVIhmAjIgCAAQgKAAgFgHg");
//     this.shape_31.setTransform(86.1,-19.4);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24}]},36).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(13));

//     // Layer 10
//     this.shape_32 = new cjs.Shape();
//     this.shape_32.graphics.f("#000000").s().p("AhnBNQgFgIADgIQACgFAJgJICKiLQAWgWATAbQAEAHAOAMQAJAMgOANQgqAnhzBlIgHADIgGADQgQgFgPgVg");
//     this.shape_32.setTransform(68.1,-51.6);

//     this.shape_33 = new cjs.Shape();
//     this.shape_33.graphics.f("#1D0509").s().p("AhnBNQgFgIADgIQACgFAJgJICKiLQAWgWATAbQAEAHAOAMQAJAMgOANQgqAnhzBlIgHADIgGADQgQgFgPgVg");
//     this.shape_33.setTransform(68.1,-51.6);

//     this.shape_34 = new cjs.Shape();
//     this.shape_34.graphics.f("#3B0A12").s().p("AhnBNQgFgIADgIQACgFAJgJICKiLQAWgWATAbQAEAHAOAMQAJAMgOANQgqAnhzBlIgHADIgGADQgQgFgPgVg");
//     this.shape_34.setTransform(68.1,-51.6);

//     this.shape_35 = new cjs.Shape();
//     this.shape_35.graphics.f("#580F1B").s().p("AhnBNQgFgIADgIQACgFAJgJICKiLQAWgWATAbQAEAHAOAMQAJAMgOANQgqAnhzBlIgHADIgGADQgQgFgPgVg");
//     this.shape_35.setTransform(68.1,-51.6);

//     this.shape_36 = new cjs.Shape();
//     this.shape_36.graphics.f("#751325").s().p("AhnBNQgFgIADgIQACgFAJgJICKiLQAWgWATAbQAEAHAOAMQAJAMgOANQgqAnhzBlIgHADIgGADQgQgFgPgVg");
//     this.shape_36.setTransform(68.1,-51.6);

//     this.shape_37 = new cjs.Shape();
//     this.shape_37.graphics.f("#92182E").s().p("AhnBNQgFgIADgIQACgFAJgJICKiLQAWgWATAbQAEAHAOAMQAJAMgOANQgqAnhzBlIgHADIgGADQgQgFgPgVg");
//     this.shape_37.setTransform(68.1,-51.6);

//     this.shape_38 = new cjs.Shape();
//     this.shape_38.graphics.f("#B01D37").s().p("AhnBNQgFgIADgIQACgFAJgJICKiLQAWgWATAbQAEAHAOAMQAJAMgOANQgqAnhzBlIgHADIgGADQgQgFgPgVg");
//     this.shape_38.setTransform(68.1,-51.6);

//     this.shape_39 = new cjs.Shape();
//     this.shape_39.graphics.f("#CD2240").s().p("AhnBNQgFgIADgIQACgFAJgJICKiLQAWgWATAbQAEAHAOAMQAJAMgOANQgqAnhzBlIgHADIgGADQgQgFgPgVg");
//     this.shape_39.setTransform(68.1,-51.6);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32}]},32).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(17));

//     // Layer 9
//     this.shape_40 = new cjs.Shape();
//     this.shape_40.graphics.f("#000000").s().p("Ag5B2QgQgIgDgLQgCgJAHgQIBHisQAGgPAEgFQAIgIANAGIAbALQAPAIAEAPIgKAWIhOCkQgIARgKAFQgEACgFAAQgIAAgLgGg");
//     this.shape_40.setTransform(37.4,-71.5);

//     this.shape_41 = new cjs.Shape();
//     this.shape_41.graphics.f("#1D0509").s().p("Ag5B2QgQgIgDgLQgCgJAHgQIBHisQAGgPAEgFQAIgIANAGIAbALQAPAIAEAPIgKAWIhOCkQgIARgKAFQgEACgFAAQgIAAgLgGg");
//     this.shape_41.setTransform(37.4,-71.5);

//     this.shape_42 = new cjs.Shape();
//     this.shape_42.graphics.f("#3B0A12").s().p("Ag5B2QgQgIgDgLQgCgJAHgQIBHisQAGgPAEgFQAIgIANAGIAbALQAPAIAEAPIgKAWIhOCkQgIARgKAFQgEACgFAAQgIAAgLgGg");
//     this.shape_42.setTransform(37.4,-71.5);

//     this.shape_43 = new cjs.Shape();
//     this.shape_43.graphics.f("#580F1B").s().p("Ag5B2QgQgIgDgLQgCgJAHgQIBHisQAGgPAEgFQAIgIANAGIAbALQAPAIAEAPIgKAWIhOCkQgIARgKAFQgEACgFAAQgIAAgLgGg");
//     this.shape_43.setTransform(37.4,-71.5);

//     this.shape_44 = new cjs.Shape();
//     this.shape_44.graphics.f("#751325").s().p("Ag5B2QgQgIgDgLQgCgJAHgQIBHisQAGgPAEgFQAIgIANAGIAbALQAPAIAEAPIgKAWIhOCkQgIARgKAFQgEACgFAAQgIAAgLgGg");
//     this.shape_44.setTransform(37.4,-71.5);

//     this.shape_45 = new cjs.Shape();
//     this.shape_45.graphics.f("#92182E").s().p("Ag5B2QgQgIgDgLQgCgJAHgQIBHisQAGgPAEgFQAIgIANAGIAbALQAPAIAEAPIgKAWIhOCkQgIARgKAFQgEACgFAAQgIAAgLgGg");
//     this.shape_45.setTransform(37.4,-71.5);

//     this.shape_46 = new cjs.Shape();
//     this.shape_46.graphics.f("#B01D37").s().p("Ag5B2QgQgIgDgLQgCgJAHgQIBHisQAGgPAEgFQAIgIANAGIAbALQAPAIAEAPIgKAWIhOCkQgIARgKAFQgEACgFAAQgIAAgLgGg");
//     this.shape_46.setTransform(37.4,-71.5);

//     this.shape_47 = new cjs.Shape();
//     this.shape_47.graphics.f("#CD2240").s().p("Ag5B2QgQgIgDgLQgCgJAHgQIBHisQAGgPAEgFQAIgIANAGIAbALQAPAIAEAPIgKAWIhOCkQgIARgKAFQgEACgFAAQgIAAgLgGg");
//     this.shape_47.setTransform(37.4,-71.5);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},28).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(21));

//     // Layer 8
//     this.shape_48 = new cjs.Shape();
//     this.shape_48.graphics.f("#000000").s().p("AgHB/QgSAAgGgLQgEgHAAgSQABhygBg6QgBgYAIgKQAJgMAXABQAYABAGAPQAEAMgEAgQgGBtgBAxQgBATgHAIQgIAIgQAAIgCAAg");
//     this.shape_48.setTransform(2.7,-78.7);

//     this.shape_49 = new cjs.Shape();
//     this.shape_49.graphics.f("#1D0509").s().p("AgHB/QgSAAgGgLQgEgHAAgSQABhygBg6QgBgYAIgKQAJgMAXABQAYABAGAPQAEAMgEAgQgGBtgBAxQgBATgHAIQgIAIgQAAIgCAAg");
//     this.shape_49.setTransform(2.7,-78.7);

//     this.shape_50 = new cjs.Shape();
//     this.shape_50.graphics.f("#3B0A12").s().p("AgHB/QgSAAgGgLQgEgHAAgSQABhygBg6QgBgYAIgKQAJgMAXABQAYABAGAPQAEAMgEAgQgGBtgBAxQgBATgHAIQgIAIgQAAIgCAAg");
//     this.shape_50.setTransform(2.7,-78.7);

//     this.shape_51 = new cjs.Shape();
//     this.shape_51.graphics.f("#580F1B").s().p("AgHB/QgSAAgGgLQgEgHAAgSQABhygBg6QgBgYAIgKQAJgMAXABQAYABAGAPQAEAMgEAgQgGBtgBAxQgBATgHAIQgIAIgQAAIgCAAg");
//     this.shape_51.setTransform(2.7,-78.7);

//     this.shape_52 = new cjs.Shape();
//     this.shape_52.graphics.f("#751325").s().p("AgHB/QgSAAgGgLQgEgHAAgSQABhygBg6QgBgYAIgKQAJgMAXABQAYABAGAPQAEAMgEAgQgGBtgBAxQgBATgHAIQgIAIgQAAIgCAAg");
//     this.shape_52.setTransform(2.7,-78.7);

//     this.shape_53 = new cjs.Shape();
//     this.shape_53.graphics.f("#92182E").s().p("AgHB/QgSAAgGgLQgEgHAAgSQABhygBg6QgBgYAIgKQAJgMAXABQAYABAGAPQAEAMgEAgQgGBtgBAxQgBATgHAIQgIAIgQAAIgCAAg");
//     this.shape_53.setTransform(2.7,-78.7);

//     this.shape_54 = new cjs.Shape();
//     this.shape_54.graphics.f("#B01D37").s().p("AgHB/QgSAAgGgLQgEgHAAgSQABhygBg6QgBgYAIgKQAJgMAXABQAYABAGAPQAEAMgEAgQgGBtgBAxQgBATgHAIQgIAIgQAAIgCAAg");
//     this.shape_54.setTransform(2.7,-78.7);

//     this.shape_55 = new cjs.Shape();
//     this.shape_55.graphics.f("#CD2240").s().p("AgHB/QgSAAgGgLQgEgHAAgSQABhygBg6QgBgYAIgKQAJgMAXABQAYABAGAPQAEAMgEAgQgGBtgBAxQgBATgHAIQgIAIgQAAIgCAAg");
//     this.shape_55.setTransform(2.7,-78.7);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_48}]},24).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).wait(25));

//     // Layer 7
//     this.shape_56 = new cjs.Shape();
//     this.shape_56.graphics.f("#000000").s().p("AALBsIhNi5QgHgQAJgKQAGgHARgGQATgHAFAAQANgBAEAPIBGDMQACALgJAGIgUAJQgHADgGAAQgNAAgGgQg");
//     this.shape_56.setTransform(-32.9,-74.7);

//     this.shape_57 = new cjs.Shape();
//     this.shape_57.graphics.f("#1D0509").s().p("AALBsIhNi5QgHgQAJgKQAGgHARgGQATgHAFAAQANgBAEAPIBGDMQACALgJAGIgUAJQgHADgGAAQgNAAgGgQg");
//     this.shape_57.setTransform(-32.9,-74.7);

//     this.shape_58 = new cjs.Shape();
//     this.shape_58.graphics.f("#3B0A12").s().p("AALBsIhNi5QgHgQAJgKQAGgHARgGQATgHAFAAQANgBAEAPIBGDMQACALgJAGIgUAJQgHADgGAAQgNAAgGgQg");
//     this.shape_58.setTransform(-32.9,-74.7);

//     this.shape_59 = new cjs.Shape();
//     this.shape_59.graphics.f("#580F1B").s().p("AALBsIhNi5QgHgQAJgKQAGgHARgGQATgHAFAAQANgBAEAPIBGDMQACALgJAGIgUAJQgHADgGAAQgNAAgGgQg");
//     this.shape_59.setTransform(-32.9,-74.7);

//     this.shape_60 = new cjs.Shape();
//     this.shape_60.graphics.f("#751325").s().p("AALBsIhNi5QgHgQAJgKQAGgHARgGQATgHAFAAQANgBAEAPIBGDMQACALgJAGIgUAJQgHADgGAAQgNAAgGgQg");
//     this.shape_60.setTransform(-32.9,-74.7);

//     this.shape_61 = new cjs.Shape();
//     this.shape_61.graphics.f("#92182E").s().p("AALBsIhNi5QgHgQAJgKQAGgHARgGQATgHAFAAQANgBAEAPIBGDMQACALgJAGIgUAJQgHADgGAAQgNAAgGgQg");
//     this.shape_61.setTransform(-32.9,-74.7);

//     this.shape_62 = new cjs.Shape();
//     this.shape_62.graphics.f("#B01D37").s().p("AALBsIhNi5QgHgQAJgKQAGgHARgGQATgHAFAAQANgBAEAPIBGDMQACALgJAGIgUAJQgHADgGAAQgNAAgGgQg");
//     this.shape_62.setTransform(-32.9,-74.7);

//     this.shape_63 = new cjs.Shape();
//     this.shape_63.graphics.f("#CD2240").s().p("AALBsIhNi5QgHgQAJgKQAGgHARgGQATgHAFAAQANgBAEAPIBGDMQACALgJAGIgUAJQgHADgGAAQgNAAgGgQg");
//     this.shape_63.setTransform(-32.9,-74.7);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56}]},20).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).wait(29));

//     // Layer 6
//     this.shape_64 = new cjs.Shape();
//     this.shape_64.graphics.f("#000000").s().p("AAyBhIiOiNQgUgUAXgRQAGgFAOgPQANgKALAMQAgAhAoAvIBIBQQABABADAIQAAAKgHAIIgPANQgGAFgHAAQgJAAgJgJg");
//     this.shape_64.setTransform(-63,-53.7);

//     this.shape_65 = new cjs.Shape();
//     this.shape_65.graphics.f("#1D0509").s().p("AAyBhIiOiNQgUgUAXgRQAGgFAOgPQANgKALAMQAgAhAoAvIBIBQQABABADAIQAAAKgHAIIgPANQgGAFgHAAQgJAAgJgJg");
//     this.shape_65.setTransform(-63,-53.7);

//     this.shape_66 = new cjs.Shape();
//     this.shape_66.graphics.f("#3B0A12").s().p("AAyBhIiOiNQgUgUAXgRQAGgFAOgPQANgKALAMQAgAhAoAvIBIBQQABABADAIQAAAKgHAIIgPANQgGAFgHAAQgJAAgJgJg");
//     this.shape_66.setTransform(-63,-53.7);

//     this.shape_67 = new cjs.Shape();
//     this.shape_67.graphics.f("#580F1B").s().p("AAyBhIiOiNQgUgUAXgRQAGgFAOgPQANgKALAMQAgAhAoAvIBIBQQABABADAIQAAAKgHAIIgPANQgGAFgHAAQgJAAgJgJg");
//     this.shape_67.setTransform(-63,-53.7);

//     this.shape_68 = new cjs.Shape();
//     this.shape_68.graphics.f("#751325").s().p("AAyBhIiOiNQgUgUAXgRQAGgFAOgPQANgKALAMQAgAhAoAvIBIBQQABABADAIQAAAKgHAIIgPANQgGAFgHAAQgJAAgJgJg");
//     this.shape_68.setTransform(-63,-53.7);

//     this.shape_69 = new cjs.Shape();
//     this.shape_69.graphics.f("#92182E").s().p("AAyBhIiOiNQgUgUAXgRQAGgFAOgPQANgKALAMQAgAhAoAvIBIBQQABABADAIQAAAKgHAIIgPANQgGAFgHAAQgJAAgJgJg");
//     this.shape_69.setTransform(-63,-53.7);

//     this.shape_70 = new cjs.Shape();
//     this.shape_70.graphics.f("#B01D37").s().p("AAyBhIiOiNQgUgUAXgRQAGgFAOgPQANgKALAMQAgAhAoAvIBIBQQABABADAIQAAAKgHAIIgPANQgGAFgHAAQgJAAgJgJg");
//     this.shape_70.setTransform(-63,-53.7);

//     this.shape_71 = new cjs.Shape();
//     this.shape_71.graphics.f("#CD2240").s().p("AAyBhIiOiNQgUgUAXgRQAGgFAOgPQANgKALAMQAgAhAoAvIBIBQQABABADAIQAAAKgHAIIgPANQgGAFgHAAQgJAAgJgJg");
//     this.shape_71.setTransform(-63,-53.7);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_64}]},16).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).wait(33));

//     // Layer 5
//     this.shape_72 = new cjs.Shape();
//     this.shape_72.graphics.f("#000000").s().p("ABIBIIhWgkIhYgiQgfgKANgaIAMgaQAIgOAPgDIC2BXQAUAKAFAIQAIAMgLATQgJASgLABIgDAAQgJAAgPgGg");
//     this.shape_72.setTransform(-83.9,-25);

//     this.shape_73 = new cjs.Shape();
//     this.shape_73.graphics.f("#1D0509").s().p("ABIBIIhWgkIhYgiQgfgKANgaIAMgaQAIgOAPgDIC2BXQAUAKAFAIQAIAMgLATQgJASgLABIgDAAQgJAAgPgGg");
//     this.shape_73.setTransform(-83.9,-25);

//     this.shape_74 = new cjs.Shape();
//     this.shape_74.graphics.f("#3B0A12").s().p("ABIBIIhWgkIhYgiQgfgKANgaIAMgaQAIgOAPgDIC2BXQAUAKAFAIQAIAMgLATQgJASgLABIgDAAQgJAAgPgGg");
//     this.shape_74.setTransform(-83.9,-25);

//     this.shape_75 = new cjs.Shape();
//     this.shape_75.graphics.f("#580F1B").s().p("ABIBIIhWgkIhYgiQgfgKANgaIAMgaQAIgOAPgDIC2BXQAUAKAFAIQAIAMgLATQgJASgLABIgDAAQgJAAgPgGg");
//     this.shape_75.setTransform(-83.9,-25);

//     this.shape_76 = new cjs.Shape();
//     this.shape_76.graphics.f("#751325").s().p("ABIBIIhWgkIhYgiQgfgKANgaIAMgaQAIgOAPgDIC2BXQAUAKAFAIQAIAMgLATQgJASgLABIgDAAQgJAAgPgGg");
//     this.shape_76.setTransform(-83.9,-25);

//     this.shape_77 = new cjs.Shape();
//     this.shape_77.graphics.f("#92182E").s().p("ABIBIIhWgkIhYgiQgfgKANgaIAMgaQAIgOAPgDIC2BXQAUAKAFAIQAIAMgLATQgJASgLABIgDAAQgJAAgPgGg");
//     this.shape_77.setTransform(-83.9,-25);

//     this.shape_78 = new cjs.Shape();
//     this.shape_78.graphics.f("#B01D37").s().p("ABIBIIhWgkIhYgiQgfgKANgaIAMgaQAIgOAPgDIC2BXQAUAKAFAIQAIAMgLATQgJASgLABIgDAAQgJAAgPgGg");
//     this.shape_78.setTransform(-83.9,-25);

//     this.shape_79 = new cjs.Shape();
//     this.shape_79.graphics.f("#CD2240").s().p("ABIBIIhWgkIhYgiQgfgKANgaIAMgaQAIgOAPgDIC2BXQAUAKAFAIQAIAMgLATQgJASgLABIgDAAQgJAAgPgGg");
//     this.shape_79.setTransform(-83.9,-25);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_72}]},12).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).wait(37));

//     // Layer 4
//     this.shape_80 = new cjs.Shape();
//     this.shape_80.graphics.f("#000000").s().p("Ah3AhQgLgJABgYQABgYAMgIQAKgHAZACIBUAGIBXAEQAUABAJAGQAMAIAAATQAAAWgOAGQgHADgXAAIhUAAIAAAAIgrAAIgtABIgGAAQgTAAgJgGg");
//     this.shape_80.setTransform(-92.5,9.1);

//     this.shape_81 = new cjs.Shape();
//     this.shape_81.graphics.f("#1D0509").s().p("Ah3AhQgLgJABgYQABgYAMgIQAKgHAZACIBUAGIBXAEQAUABAJAGQAMAIAAATQAAAWgOAGQgHADgXAAIhUAAIAAAAIgrAAIgtABIgGAAQgTAAgJgGg");
//     this.shape_81.setTransform(-92.5,9.1);

//     this.shape_82 = new cjs.Shape();
//     this.shape_82.graphics.f("#3B0A12").s().p("Ah3AhQgLgJABgYQABgYAMgIQAKgHAZACIBUAGIBXAEQAUABAJAGQAMAIAAATQAAAWgOAGQgHADgXAAIhUAAIAAAAIgrAAIgtABIgGAAQgTAAgJgGg");
//     this.shape_82.setTransform(-92.5,9.1);

//     this.shape_83 = new cjs.Shape();
//     this.shape_83.graphics.f("#580F1B").s().p("Ah3AhQgLgJABgYQABgYAMgIQAKgHAZACIBUAGIBXAEQAUABAJAGQAMAIAAATQAAAWgOAGQgHADgXAAIhUAAIAAAAIgrAAIgtABIgGAAQgTAAgJgGg");
//     this.shape_83.setTransform(-92.5,9.1);

//     this.shape_84 = new cjs.Shape();
//     this.shape_84.graphics.f("#751325").s().p("Ah3AhQgLgJABgYQABgYAMgIQAKgHAZACIBUAGIBXAEQAUABAJAGQAMAIAAATQAAAWgOAGQgHADgXAAIhUAAIAAAAIgrAAIgtABIgGAAQgTAAgJgGg");
//     this.shape_84.setTransform(-92.5,9.1);

//     this.shape_85 = new cjs.Shape();
//     this.shape_85.graphics.f("#92182E").s().p("Ah3AhQgLgJABgYQABgYAMgIQAKgHAZACIBUAGIBXAEQAUABAJAGQAMAIAAATQAAAWgOAGQgHADgXAAIhUAAIAAAAIgrAAIgtABIgGAAQgTAAgJgGg");
//     this.shape_85.setTransform(-92.5,9.1);

//     this.shape_86 = new cjs.Shape();
//     this.shape_86.graphics.f("#B01D37").s().p("Ah3AhQgLgJABgYQABgYAMgIQAKgHAZACIBUAGIBXAEQAUABAJAGQAMAIAAATQAAAWgOAGQgHADgXAAIhUAAIAAAAIgrAAIgtABIgGAAQgTAAgJgGg");
//     this.shape_86.setTransform(-92.5,9.1);

//     this.shape_87 = new cjs.Shape();
//     this.shape_87.graphics.f("#CD2240").s().p("Ah3AhQgLgJABgYQABgYAMgIQAKgHAZACIBUAGIBXAEQAUABAJAGQAMAIAAATQAAAWgOAGQgHADgXAAIhUAAIAAAAIgrAAIgtABIgGAAQgTAAgJgGg");
//     this.shape_87.setTransform(-92.5,9.1);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_80}]},8).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).wait(41));

//     // Layer 3
//     this.shape_88 = new cjs.Shape();
//     this.shape_88.graphics.f("#000000").s().p("AhlBFQgIgGgIgUQgIgVABgJQADgNAVgFQA+gUB4grQAXgIAKAMQAHAIACAUQAEAOgHAHQgDADgLAFQh2Awg7AaQgLAFgJAAQgGAAgFgDg");
//     this.shape_88.setTransform(-86.8,45.4);

//     this.shape_89 = new cjs.Shape();
//     this.shape_89.graphics.f("#1D0509").s().p("AhlBFQgIgGgIgUQgIgVABgJQADgNAVgFQA+gUB4grQAXgIAKAMQAHAIACAUQAEAOgHAHQgDADgLAFQh2Awg7AaQgLAFgJAAQgGAAgFgDg");
//     this.shape_89.setTransform(-86.8,45.4);

//     this.shape_90 = new cjs.Shape();
//     this.shape_90.graphics.f("#3B0A12").s().p("AhlBFQgIgGgIgUQgIgVABgJQADgNAVgFQA+gUB4grQAXgIAKAMQAHAIACAUQAEAOgHAHQgDADgLAFQh2Awg7AaQgLAFgJAAQgGAAgFgDg");
//     this.shape_90.setTransform(-86.8,45.4);

//     this.shape_91 = new cjs.Shape();
//     this.shape_91.graphics.f("#580F1B").s().p("AhlBFQgIgGgIgUQgIgVABgJQADgNAVgFQA+gUB4grQAXgIAKAMQAHAIACAUQAEAOgHAHQgDADgLAFQh2Awg7AaQgLAFgJAAQgGAAgFgDg");
//     this.shape_91.setTransform(-86.8,45.4);

//     this.shape_92 = new cjs.Shape();
//     this.shape_92.graphics.f("#751325").s().p("AhlBFQgIgGgIgUQgIgVABgJQADgNAVgFQA+gUB4grQAXgIAKAMQAHAIACAUQAEAOgHAHQgDADgLAFQh2Awg7AaQgLAFgJAAQgGAAgFgDg");
//     this.shape_92.setTransform(-86.8,45.4);

//     this.shape_93 = new cjs.Shape();
//     this.shape_93.graphics.f("#92182E").s().p("AhlBFQgIgGgIgUQgIgVABgJQADgNAVgFQA+gUB4grQAXgIAKAMQAHAIACAUQAEAOgHAHQgDADgLAFQh2Awg7AaQgLAFgJAAQgGAAgFgDg");
//     this.shape_93.setTransform(-86.8,45.4);

//     this.shape_94 = new cjs.Shape();
//     this.shape_94.graphics.f("#B01D37").s().p("AhlBFQgIgGgIgUQgIgVABgJQADgNAVgFQA+gUB4grQAXgIAKAMQAHAIACAUQAEAOgHAHQgDADgLAFQh2Awg7AaQgLAFgJAAQgGAAgFgDg");
//     this.shape_94.setTransform(-86.8,45.4);

//     this.shape_95 = new cjs.Shape();
//     this.shape_95.graphics.f("#CD2240").s().p("AhlBFQgIgGgIgUQgIgVABgJQADgNAVgFQA+gUB4grQAXgIAKAMQAHAIACAUQAEAOgHAHQgDADgLAFQh2Awg7AaQgLAFgJAAQgGAAgFgDg");
//     this.shape_95.setTransform(-86.8,45.4);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_88}]},4).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).wait(45));

//     // Layer 2
//     this.shape_96 = new cjs.Shape();
//     this.shape_96.graphics.f("#000000").s().p("AhVBZQgHgGgNgQQgHgKAEgJQADgFAKgKICViAQANgLAKACQAJACALALQALAMACAIQACALgMALIiPCOIgQAMQgOgEgMgMg");
//     this.shape_96.setTransform(-67.7,76.5);

//     this.shape_97 = new cjs.Shape();
//     this.shape_97.graphics.f("#1D0509").s().p("AhVBZQgHgGgNgQQgHgKAEgJQADgFAKgKICViAQANgLAKACQAJACALALQALAMACAIQACALgMALIiPCOIgQAMQgOgEgMgMg");
//     this.shape_97.setTransform(-67.7,76.5);

//     this.shape_98 = new cjs.Shape();
//     this.shape_98.graphics.f("#3B0A12").s().p("AhVBZQgHgGgNgQQgHgKAEgJQADgFAKgKICViAQANgLAKACQAJACALALQALAMACAIQACALgMALIiPCOIgQAMQgOgEgMgMg");
//     this.shape_98.setTransform(-67.7,76.5);

//     this.shape_99 = new cjs.Shape();
//     this.shape_99.graphics.f("#580F1B").s().p("AhVBZQgHgGgNgQQgHgKAEgJQADgFAKgKICViAQANgLAKACQAJACALALQALAMACAIQACALgMALIiPCOIgQAMQgOgEgMgMg");
//     this.shape_99.setTransform(-67.7,76.5);

//     this.shape_100 = new cjs.Shape();
//     this.shape_100.graphics.f("#751325").s().p("AhVBZQgHgGgNgQQgHgKAEgJQADgFAKgKICViAQANgLAKACQAJACALALQALAMACAIQACALgMALIiPCOIgQAMQgOgEgMgMg");
//     this.shape_100.setTransform(-67.7,76.5);

//     this.shape_101 = new cjs.Shape();
//     this.shape_101.graphics.f("#92182E").s().p("AhVBZQgHgGgNgQQgHgKAEgJQADgFAKgKICViAQANgLAKACQAJACALALQALAMACAIQACALgMALIiPCOIgQAMQgOgEgMgMg");
//     this.shape_101.setTransform(-67.7,76.5);

//     this.shape_102 = new cjs.Shape();
//     this.shape_102.graphics.f("#B01D37").s().p("AhVBZQgHgGgNgQQgHgKAEgJQADgFAKgKICViAQANgLAKACQAJACALALQALAMACAIQACALgMALIiPCOIgQAMQgOgEgMgMg");
//     this.shape_102.setTransform(-67.7,76.5);

//     this.shape_103 = new cjs.Shape();
//     this.shape_103.graphics.f("#CD2240").s().p("AhVBZQgHgGgNgQQgHgKAEgJQADgFAKgKICViAQANgLAKACQAJACALALQALAMACAIQACALgMALIiPCOIgQAMQgOgEgMgMg");
//     this.shape_103.setTransform(-67.7,76.5);

//     this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96}]}).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).wait(49));

//     // Layer 1
//     this.instance = new lib.speedIndictor();
//     this.instance.setTransform(3.2,5.1);

//     this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:275},55).wait(1));

//     // Layer 15
//     this.shape_104 = new cjs.Shape();
//     this.shape_104.graphics.f("#000000").s().p("AKmOQQgEgCgKgLIh9iOQgKgLgBgHQgCgLALgJIARgNQAKgFALALICUCTIAHANQgEAMgKAKIgTAPQgGAFgGAAQgDAAgEgCgAr6NWQgHgGgNgRQgHgJAEgJQADgGAKgJICXiDQANgKAKACQAJABALAMQALALACAJQACAKgMAMIiRCPIgQAMQgOgEgMgLgAOUI/IilhQQgSgIgFgHQgIgLAJgSQAJgTANgEQALgDASAIQA6AZB0AwQAQAHADADQAJAHgCAOQgCAcgSALQgIAGgLAAQgLAAgOgHgAvKIKQgIgGgIgUQgIgUACgJQACgOAWgHQA9gTB7gsQAWgHALALQAHAJACAUQADANgGAHQgDAEgMAFQh4Axg7AbQgLAFgIAAQgHAAgFgEgAPvC4IikgJQgXgBgHgDQgNgHAAgWQgBgZAPgGQAGgDAaAAIClAAQAZgBAKAIQALAJgCAZQgCAcgHAFQgEADgPAAIgUgBgAwUB8QgMgJABgZQABgZAMgIQAKgHAZACIBXAGIBWAEQAVABAJAGQAMAIgBAVQAAAWgNAGQgHADgXAAIhVAAIAAAAIgsAAIgtABIgGAAQgTAAgJgGgALsiCIgIgRQgMgZAUgIIDBhRQAZgKAIAcIAKAaQAEAQgPAGQgqARg9AUIhoAkIgCAAQgKAAgGgIgAr9iwIhYgkIhYgiQgfgMANgaIAMgaQAIgOAPgDIC4BZQAUAKAFAIQAIAMgLATQgJASgLABIgDAAQgJAAgPgGgAJAm1QgFgIADgIQACgFAJgJICMiNQAWgWATAbQAEAHAOAMQAJAMgOANQgqAnh1BnIgHADIgGADQgQgFgPgVgApCm2IiRiPQgUgUAXgRQAHgFANgPQANgKALAMQAhAhApAvIBIBSQACABACAIQABAKgIAIIgOANQgGAFgHAAQgJAAgJgJgAE7pTQgQgIgDgLQgCgJAHgQIBIiuQAHgPAEgFQAIgIANAGIAbALQAPAIAEAPIgKAWIhQCmQgIARgKAFQgEACgFAAQgIAAgLgGgAk8p9IhPi7QgHgQAJgKQAGgHARgGQATgHAFAAQANgBAFAPIBHDOQACALgJAGIgUAJQgHADgGAAQgMAAgHgQgAASqSQgSAAgEgLQgEgHAAgSQABh0gBg6QgBgYAIgKQAHgMAZABQAYABAGAPQAEAMgEAgQgGBvgBAxQgBATgHAIQgIAIgSAAIgCAAg");

//     this.timeline.addTween(cjs.Tween.get(this.shape_104).wait(56));

// }).prototype = p = new cjs.MovieClip();
// p.nominalBounds = new cjs.Rectangle(-105.6,-91.4,211.3,182.9);


// // stage content:
// (lib.preloader = function(mode,startPosition,loop) {
//     this.initialize(mode,startPosition,loop,{});

//     // timeline functions:
//     this.frame_0 = function() {
//         var timeline = this;
//         var stageRef = this.getStage();

//         this.setPercent = function(value) {
//             var frame = Math.floor(value/100 * 55);
//             this.speedometer.gotoAndStop(frame);
//         }
//     }

//     // actions tween:
//     this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

//     // speedometer
//     this.speedometer = new lib.speedometer();
//     this.speedometer.setTransform(110,95);

//     this.timeline.addTween(cjs.Tween.get(this.speedometer).wait(1));

// }).prototype = p = new cjs.MovieClip();
// p.nominalBounds = new cjs.Rectangle(114.4,98.6,211.3,182.9);

// })(libPreloader = libPreloader||{}, images = images||{}, createjs = createjs||{});
// var libPreloader, images, createjs;

// var canvasPreloader, stagePreloader, exportRootPreloader;

// function initPreloader() {
//     canvasPreloader = document.getElementById("preloadCanvas");
//     exportRootPreloader = new libPreloader.preloader();

//     stagePreloader = new createjs.Stage(canvasPreloader);
//     stagePreloader.addChild(exportRootPreloader);
//     stagePreloader.update();

//     createjs.Ticker.setFPS(libPreloader.properties.fps);
//     createjs.Ticker.addEventListener("tick", stagePreloader);
// }
// initPreloader();


// PxLoader
// Github : https://github.com/thinkpixellab/PxLoader
;function PxLoaderImage(e,t,n){var r=this,i=null;this.img=new Image;this.tags=t;this.priority=n;var s=function(){if(r.img.readyState==="complete"){a();i.onLoad(r)}};var o=function(){a();i.onLoad(r)};var u=function(){a();i.onError(r)};var a=function(){r.unbind("load",o);r.unbind("readystatechange",s);r.unbind("error",u)};this.start=function(t){i=t;r.bind("load",o);r.bind("readystatechange",s);r.bind("error",u);r.img.src=e};this.checkStatus=function(){if(r.img.complete){a();i.onLoad(r)}};this.onTimeout=function(){a();if(r.img.complete){i.onLoad(r)}else{i.onTimeout(r)}};this.getName=function(){return e};this.bind=function(e,t){if(r.img.addEventListener){r.img.addEventListener(e,t,false)}else if(r.img.attachEvent){r.img.attachEvent("on"+e,t)}};this.unbind=function(e,t){if(r.img.removeEventListener){r.img.removeEventListener(e,t,false)}else if(r.img.detachEvent){r.img.detachEvent("on"+e,t)}}}(function(e){function t(e){e=e||{};this.settings=e;if(e.statusInterval==null){e.statusInterval=5e3}if(e.loggingDelay==null){e.loggingDelay=20*1e3}if(e.noProgressTimeout==null){e.noProgressTimeout=Infinity}var t=[],r=[],i,s=Date.now();var o={QUEUED:0,WAITING:1,LOADED:2,ERROR:3,TIMEOUT:4};var u=function(e){if(e==null){return[]}if(Array.isArray(e)){return e}return[e]};this.add=function(e){e.tags=new n(e.tags);if(e.priority==null){e.priority=Infinity}t.push({resource:e,status:o.QUEUED})};this.addProgressListener=function(e,t){r.push({callback:e,tags:new n(t)})};this.addCompletionListener=function(e,t){r.push({tags:new n(t),callback:function(t){if(t.completedCount===t.totalCount){e(t)}}})};var a=function(e){e=u(e);var t=function(t){var n=t.resource,r=Infinity;for(var i=0;i<n.tags.length;i++){for(var s=0;s<Math.min(e.length,r);s++){if(n.tags.all[i]===e[s]&&s<r){r=s;if(r===0){break}}if(r===0){break}}}return r};return function(e,n){var r=t(e),i=t(n);if(r<i){return-1}if(r>i){return 1}if(e.priority<n.priority){return-1}if(e.priority>n.priority){return 1}return 0}};this.start=function(e){i=Date.now();var n=a(e);t.sort(n);for(var r=0,s=t.length;r<s;r++){var u=t[r];u.status=o.WAITING;u.resource.start(this)}setTimeout(f,100)};var f=function(){var n=false,r=Date.now()-s,i=r>=e.noProgressTimeout,u=r>=e.loggingDelay;for(var a=0,l=t.length;a<l;a++){var c=t[a];if(c.status!==o.WAITING){continue}if(c.resource.checkStatus){c.resource.checkStatus()}if(c.status===o.WAITING){if(i){c.resource.onTimeout()}else{n=true}}}if(u&&n){h()}if(n){setTimeout(f,e.statusInterval)}};this.isBusy=function(){for(var e=0,n=t.length;e<n;e++){if(t[e].status===o.QUEUED||t[e].status===o.WAITING){return true}}return false};var l=function(e,n){var i=null,u,a,f,l,h;for(u=0,a=t.length;u<a;u++){if(t[u].resource===e){i=t[u];break}}if(i==null||i.status!==o.WAITING){return}i.status=n;s=Date.now();f=e.tags.length;for(u=0,a=r.length;u<a;u++){l=r[u];if(l.tags.length===0){h=true}else{h=e.tags.intersects(l.tags)}if(h){c(i,l)}}};this.onLoad=function(e){l(e,o.LOADED)};this.onError=function(e){l(e,o.ERROR)};this.onTimeout=function(e){l(e,o.TIMEOUT)};var c=function(e,n){var r=0,i=0,s,u,a,f;for(s=0,u=t.length;s<u;s++){a=t[s];f=false;if(n.tags.length===0){f=true}else{f=a.resource.tags.intersects(n.tags)}if(f){i++;if(a.status===o.LOADED||a.status===o.ERROR||a.status===o.TIMEOUT){r++}}}n.callback({resource:e.resource,loaded:e.status===o.LOADED,error:e.status===o.ERROR,timeout:e.status===o.TIMEOUT,completedCount:r,totalCount:i})};var h=this.log=function(e){if(!window.console){return}var n=Math.round((Date.now()-i)/1e3);window.console.log("PxLoader elapsed: "+n+" sec");for(var r=0,s=t.length;r<s;r++){var u=t[r];if(!e&&u.status!==o.WAITING){continue}var a="PxLoader: #"+r+" "+u.resource.getName();switch(u.status){case o.QUEUED:a+=" (Not Started)";break;case o.WAITING:a+=" (Waiting)";break;case o.LOADED:a+=" (Loaded)";break;case o.ERROR:a+=" (Error)";break;case o.TIMEOUT:a+=" (Timeout)";break}if(u.resource.tags.length>0){a+=" Tags: ["+u.resource.tags.all.join(",")+"]"}window.console.log(a)}}}function n(e){this.all=[];this.first=null;this.length=0;this.lookup={};if(e){if(Array.isArray(e)){this.all=e.slice(0)}else if(typeof e==="object"){for(var t in e){if(e.hasOwnProperty(t)){this.all.push(t)}}}else{this.all.push(e)}this.length=this.all.length;if(this.length>0){this.first=this.all[0]}for(var n=0;n<this.length;n++){this.lookup[this.all[n]]=true}}}n.prototype.intersects=function(e){if(this.length===0||e.length===0){return false}if(this.length===1&&e.length===1){return this.first===e.first}if(e.length<this.length){return e.intersects(this)}for(var t in this.lookup){if(e.lookup[t]){return true}}return false};if(typeof define==="function"&&define.amd){define("PxLoader",[],function(){return t})}e.PxLoader=t})(this);if(!Date.now){Date.now=function(){return(new Date).getTime()}}if(!Array.isArray){Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}PxLoader.prototype.addImage=function(e,t,n){var r=new PxLoaderImage(e,t,n);this.add(r);return r.img};if(typeof define==="function"&&define.amd){define("PxLoaderImage",[],function(){return PxLoaderImage})};

// function:
(function(){

    if(isMobile.any()){
        var BGsuffix =  '.png'
    }else{
        var BGsuffix =  '.svg'
    }

    var imgs=[
        'images/playBtn.png',
        'images/arrow.png',
        'images/arrow-prev.png',
        'images/register_background.jpg',
        'images/wrong-ico.png',
        'images/right-ico.png',
        'images/arrow-big.png',
        'images/track.png',
        'images/ind_map.png',
        'images/red_1.jpg',
        'images/red_2.jpg',
        'images/red_3.jpg',
        'images/red_4.jpg',
        'images/red_5.jpg',
        'images/red_6.jpg',
        'images/red_7.jpg',
        'images/red_8.jpg',
        'images/bg/q-drive'+BGsuffix,
        'images/bg/sportscar'+BGsuffix,
        'images/bg/weekender'+BGsuffix,
        'images/bg/womens-drive'+BGsuffix,
        'images/bg/instructors'+BGsuffix,
        'images/bg/contact'+BGsuffix,
        'images/bg/fleet-bg.jpg',
        contentObject['homePgImage'],

        ],
        $progressDiv = $('#preloaderProgressPercent');




    //Left hand side slider for QDrive ,Weekender ,WomensPowerDrive
    function AddSliderImgs(obj){
        for(var x=0 ; x<obj.length; x++) {
            imgs.push(obj[x])
        }
    }
    AddSliderImgs(contentObject['AudiQDrive']['sliderImages']);
    AddSliderImgs(contentObject['AudiWeekender']['sliderImages']);
    AddSliderImgs(contentObject['AudiWomensPowerDrive']['sliderImages']);

    //Gallery
    function addGalleryImgs(obj){
        for(var a =0 ; a<obj.length; a++) {
            imgs.push(obj[a])
        }
    }
    //addGalleryImgs(contentObject['gallery']['sportsCarExperience']);
    //addGalleryImgs(contentObject['gallery']['weekender']);
    //addGalleryImgs(contentObject['gallery']['QDrive']);

    //Audi Instructors
    for(var a =0 ; a<contentObject['AudiInstructors'].length; a++) {
        imgs.push(contentObject['AudiInstructors'][a]['thumb']);
        imgs.push(contentObject['AudiInstructors'][a]['image']);
    }


    //Audi Cars
    for(var s =0 ; s<contentObject['AudiCars'].length; s++) {
        imgs.push(contentObject['AudiCars'][s]['logo']);
        imgs.push(contentObject['AudiCars'][s]['image']);
    }


    var loader = new PxLoader({
        noProgressTimeout: Infinity
    });

    for (var i = 0; i < imgs.length; i++) {
        var pxImage = new PxLoaderImage(imgs[i]);

        pxImage.imageNumber = i + 1;

        loader.add(pxImage);

    };


    // callback that runs every time an image loads
    loader.addProgressListener(function(e) {
        // the event provides stats on the number of completed items
        var percentLoad = Math.floor( (e.completedCount/e.totalCount)*100 );
        $progressDiv.text(percentLoad+"%" );

        //exportRootPreloader.setPercent(percentLoad);
    });

    loader.addCompletionListener(function(e) {

        setTimeout(function(){
            $('#preloader').addClass('done');
        },100);

        if(!isMobile.any()){
            window.skrollrVar = skrollr.init({
                forceHeight: false,
            });
        }

        if(window.location.hash!==''){
            var currentHash = window.location.hash;
            console.log(currentHash)
            switch(currentHash){
                case '#home':
                case '#instructors':
                case '#fleet':
                case '#gallery':
                case '#contact':
                case '#register':
                    $('.activeNav').removeClass('activeNav');
                    $('.nav').find('a[href='+currentHash+']').addClass('activeNav');
                    if (window.addHeaderSmallClass!==undefined) { window.addHeaderSmallClass(); }
                    break;

                case '#sportsCarExperience':
                case '#weekender':
                case '#QDrive':
                case '#womensPowerDrive':
                    $('.activeNav').removeClass('activeNav');
                    $('.nav').find('a[href='+currentHash+']').addClass('activeNav');
                    $('.nav a.eventsLink').addClass('activeNav');

                    if (window.addHeaderSmallClass!==undefined) { window.addHeaderSmallClass(); }
                    break;

                default:
                    currentHash = "#home";
                    $('.activeNav').removeClass('activeNav');
                    $('.nav').find('a[href=#home]').addClass('activeNav');
            }

        }else{
            currentHash = "#home";
        }
        console.log('init Scroll')
        window.isAutoPlayAllowed=true;
        setTimeout(function () {
            window.initScrolled=true;
            enable_scroll()
        },500)

    });

    loader.start();

})();



var scrollTimer;

$(function () {

    var currentHash,
        WindowDiff = winHeight/1.6;

    window.addHeaderSmallClass = function(){
        if(!$('header').hasClass('headerSmall')){
            $('header').addClass('headerSmall');
            $('#navRegBtn').removeClass('animated bounceOutRight').addClass('animated bounceInRight');
        }
    }

    window.removeHeaderSmallClass = function() {
        if($('header').hasClass('headerSmall')){
            $('#navRegBtn').removeClass('animated bounceInRight').addClass('animated bounceOutRight');
            setTimeout(function(){
                $('.headerSmall').removeClass('headerSmall');
            },100)
        }
    }




    $(document).scroll(function () {
        //console.log('scroll')
        if(initScrolled===true){

            closeFleetGallery()

            if(scrollTimer){
                clearTimeout(scrollTimer);
                scrollTimer = null
            }

            scrollTimer = setTimeout(function(){

                if (Math.floor($(window).scrollTop()) > (winHeight/4)) {
                    addHeaderSmallClass()
                }
                else{
                    removeHeaderSmallClass()
                }

                var topDist = window.pageYOffset;

                $('[data-section]').each(function () {

                    if($(this).offset()!==undefined){
                            var distance = topDist - $(this).offset().top,
                                hash = $(this).attr('data-section');
                            // 30 is an arbitrary padding choice,
                            // if you want a precise check then use distance===0

                            // console.log($(this).attr('id'))
                            // console.log(distance);
                            // console.log(topDist - $(this).offset().top);


                            if (distance < WindowDiff && distance > -WindowDiff && currentHash != hash) {
                            //if (distance < WindowDiff  && currentHash != hash) {

                                var $a = $('.nav a[href=#'+hash+']');

                                if(history.pushState) {
                                    history.pushState(null, null, "#"+hash);
                                }
                                else {
                                    window.location.hash = hash;
                                }
                                currentHash = hash;

                                //Nav :active links
                                $('.nav a').removeClass('activeNav');
                                $('.nav li').removeClass('activeNavLI');
                                $('.eventsLink').removeClass('activeNav');

                                $a.addClass('activeNav').closest('li').addClass('activeNavLI');


                                if($a.closest('ul').hasClass('eventDD')){
                                    $('.eventsLink').addClass('activeNav');
                                }



                                return false
                            }

                    }//if this is in DOM

                }); //data-section-each


				if(!isMobile.any()){

				    if(window.BV!==undefined){
				        if(topDist>winHeight){
				            if(window.BVPlaying===true){
				                window.BVPlaying=false
				                window.BV.getPlayer().pause();
				            }
				        }else if(topDist<winHeight){
				            if(window.BVPlaying===false){
				                window.BVPlaying=true
				                window.BV.getPlayer().play();
				            }
				        }
				    }


				    if(window['currVideoPlaying']!==undefined){
				        pauseUTVideo(window['currVideoPlaying'],'viaScroll');
				    }
				    if(window.isAutoPlayAllowed){


				        if($('.sportsCarExperienceVideoSec').offset()!==undefined){
				            SportsCarDistance = topDist - $('.sportsCarExperienceVideoSec').offset().top;

				            if (SportsCarDistance < WindowDiff && SportsCarDistance > -WindowDiff) {
				                if(sportsCarExperienceiFramePlayer!==undefined){
				                    console.log('sportsCarExperienceiFramePlayer')
				                    window['playUTVideo']('sportsCarExperienceiFramePlayer','viaScroll');
				                }
				            }
				        }


				        if($('.weekenderVideoSec').offset()!==undefined){
				            weekenderDistance = topDist - $('.weekenderVideoSec').offset().top;

				            if (weekenderDistance < WindowDiff && weekenderDistance > -WindowDiff) {
				                if(weekenderVideoiFramePlayer!==undefined){
				                    //console.log('weekenderVideoiFramePlayer')
				                    window['playUTVideo']('weekenderVideoiFramePlayer','viaScroll');
				                }
				            }
				        }


				        if($('.QDriveVideoSec').offset()!==undefined){
				            QDriveDistance = topDist - $('.QDriveVideoSec').offset().top;

				            if (QDriveDistance < WindowDiff && QDriveDistance > -WindowDiff) {
				                if(QDriveVideoiFramePlayer!==undefined){
				                    //console.log('QDriveVideoiFramePlayer')
				                    window['playUTVideo']('QDriveVideoiFramePlayer','viaScroll');
				                }
				            }
				        }


				        if($('.womensDriveVideoSec').offset()!==undefined){
				            womensDriveVideoDistance = topDist - $('.womensDriveVideoSec').offset().top;

				            if (womensDriveVideoDistance < WindowDiff && womensDriveVideoDistance > -WindowDiff) {
				                if(womenVideoiFramePlayer!==undefined){
				                    //console.log('womenVideoiFramePlayer')
				                    window['playUTVideo']('womenVideoiFramePlayer','viaScroll');
				                }
				            }
				        }


				    } //Start Autoplay of Videos
				}// if not mobile

            },30)
        }

    });

});
