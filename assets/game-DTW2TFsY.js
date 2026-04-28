(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))i(A);new MutationObserver(A=>{for(const r of A)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(A){const r={};return A.integrity&&(r.integrity=A.integrity),A.referrerPolicy&&(r.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?r.credentials="include":A.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(A){if(A.ep)return;A.ep=!0;const r=e(A);fetch(A.href,r)}})();function Za(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Ja(n){if(n.__esModule)return n;var t=n.default;if(typeof t=="function"){var e=function i(){return this instanceof i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var A=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(e,i,A.get?A:{enumerable:!0,get:function(){return n[i]}})}),e}var zo={exports:{}},Vo={exports:{}};function $a(n){return n>64&&n<91?n-65:n>96&&n<123?n-71:n>47&&n<58?n+4:n===43?62:n===47?63:0}function tc(n,t){for(var e=n.replace(/[^A-Za-z0-9\+\/]/g,""),i=e.length,A=t?Math.ceil((i*3+1>>2)/t)*t:i*3+1>>2,r=new Uint8Array(A),s,o,a=0,c=0,l=0;l<i;l++)if(o=l&3,a|=$a(e.charCodeAt(l))<<18-6*o,o===3||i-l===1){for(s=0;s<3&&c<A;s++,c++)r[c]=a>>>(16>>>s&24)&255;a=0}return r}var ec={decode:tc},nc=function(n,t){return new Promise(function(e,i){var A=new XMLHttpRequest;t&&(A.responseType=t),A.open("GET",n),A.onload=function(){A.status===200?e(A.response):i(Error(A.statusText))},A.onerror=function(){i(Error("Network Error"))},A.send()})};(function(n){var t=ec,e=nc;function i(D){return function(S){return typeof S=="string"&&D.test(S)}}function A(D,S){return typeof D=="string"?D+S:typeof D=="function"?D(S):S}function r(D,S,I,B){var y=s(S)?o:a(S)?c:l(S)?d:u(S)?f:m(S)?C:h(S)?g:M(S)?v:_(S)?N:null,z=I||{};return y?y(D,S,z):B?Promise.resolve(B):Promise.reject("Source not valid ("+S+")")}r.fetch=e;function s(D){return D instanceof ArrayBuffer}function o(D,S,I){return new Promise(function(B,y){D.decodeAudioData(S,function(z){B(z)},function(){y("Can't decode audio data ("+S.slice(0,30)+"...)")})})}var a=i(/\.(mp3|wav|ogg)(\?.*)?$/i);function c(D,S,I){var B=A(I.from,S);return r(D,r.fetch(B,"arraybuffer"),I)}function l(D){return D&&typeof D.then=="function"}function d(D,S,I){return S.then(function(B){return r(D,B,I)})}var u=Array.isArray;function f(D,S,I){return Promise.all(S.map(function(B){return r(D,B,I,B)}))}function m(D){return D&&typeof D=="object"}function C(D,S,I){var B={},y=Object.keys(S).map(function(z){if(I.only&&I.only.indexOf(z)===-1)return null;var U=S[z];return r(D,U,I,U).then(function(K){B[z]=K})});return Promise.all(y).then(function(){return B})}var h=i(/\.json(\?.*)?$/i);function g(D,S,I){var B=A(I.from,S);return r(D,r.fetch(B,"text").then(JSON.parse),I)}var M=i(/^data:audio/);function v(D,S,I){var B=S.indexOf(",");return r(D,t.decode(S.slice(B+1)).buffer,I)}var _=i(/\.js(\?.*)?$/i);function N(D,S,I){var B=A(I.from,S);return r(D,r.fetch(B,"text").then(T),I)}function T(D){var S=D.indexOf("MIDI.Soundfont.");if(S<0)throw Error("Invalid MIDI.js Soundfont format");S=D.indexOf("=",S)+2;var I=D.lastIndexOf(",");return JSON.parse(D.slice(S,I)+"}")}n.exports&&(n.exports=r),typeof window<"u"&&(window.loadAudio=r)})(Vo);var ic=Vo.exports,ko={exports:{}},Ac=rc;function rc(n){var t=n.createGain(),e=t._voltage=ac(n),i=ti(e),A=ti(e),r=ti(e);return t._startAmount=ti(A),t._endAmount=ti(r),t._multiplier=ti(i),t._multiplier.connect(t),t._startAmount.connect(t),t._endAmount.connect(t),t.value=i.gain,t.startValue=A.gain,t.endValue=r.gain,t.startValue.value=0,t.endValue.value=0,Object.defineProperties(t,sc),t}var sc={attack:{value:0,writable:!0},decay:{value:0,writable:!0},sustain:{value:1,writable:!0},release:{value:0,writable:!0},getReleaseDuration:{value:function(){return this.release}},start:{value:function(n){var t=this._multiplier.gain,e=this._startAmount.gain,i=this._endAmount.gain;this._voltage.start(n),this._decayFrom=this._decayFrom=n+this.attack,this._startedAt=n;var A=this.sustain;t.cancelScheduledValues(n),e.cancelScheduledValues(n),i.cancelScheduledValues(n),i.setValueAtTime(0,n),this.attack?(t.setValueAtTime(0,n),t.linearRampToValueAtTime(1,n+this.attack),e.setValueAtTime(1,n),e.linearRampToValueAtTime(0,n+this.attack)):(t.setValueAtTime(1,n),e.setValueAtTime(0,n)),this.decay&&t.setTargetAtTime(A,this._decayFrom,Ps(this.decay))}},stop:{value:function(n,t){t&&(n=n-this.release);var e=n+this.release;if(this.release){var i=this._multiplier.gain,A=this._startAmount.gain,r=this._endAmount.gain;i.cancelScheduledValues(n),A.cancelScheduledValues(n),r.cancelScheduledValues(n);var s=Ps(this.release);if(this.attack&&n<this._decayFrom){var o=cc(0,1,this._startedAt,this._decayFrom,n);i.linearRampToValueAtTime(o,n),A.linearRampToValueAtTime(1-o,n),A.setTargetAtTime(0,n,s)}r.setTargetAtTime(1,n,s),i.setTargetAtTime(0,n,s)}return this._voltage.stop(e),e}},onended:{get:function(){return this._voltage.onended},set:function(n){this._voltage.onended=n}}},oc=new Float32Array([1,1]);function ac(n){var t=n.createBufferSource(),e=n.createBuffer(1,2,n.sampleRate);return e.getChannelData(0).set(oc),t.buffer=e,t.loop=!0,t}function ti(n){var t=n.context.createGain();return n.connect(t),t}function Ps(n){return Math.log(n+1)/Math.log(100)}function cc(n,t,e,i,A){var r=t-n,s=i-e,o=A-e,a=o/s,c=n+a*r;return c<=n&&(c=n),c>=t&&(c=t),c}var lc=Ac,gc={},dc={gain:1,attack:.01,decay:.1,sustain:.9,release:.3,loop:!1,cents:0,loopStart:0,loopEnd:0};function uc(n,t,e){var i=!1,A=0,r={},s=n.createGain();s.gain.value=1;var o=Object.assign({},dc,e),a={context:n,out:s,opts:o};return t instanceof AudioBuffer?a.buffer=t:a.buffers=t,a.start=function(d,u,f){if(a.buffer&&d!==null)return a.start(null,d,u);var m=d?a.buffers[d]:a.buffer;if(m){if(!i){console.warn("SamplePlayer not connected to any node.");return}}else{console.warn("Buffer "+d+" not found.");return}var C=f||gc;u=Math.max(n.currentTime,u||0),a.emit("start",u,d,C);var h=l(d,m,C);return h.id=c(d,h),h.env.start(u),h.source.start(u),a.emit("started",u,h.id,h),C.duration&&h.stop(u+C.duration),h},a.play=function(d,u,f){return a.start(d,u,f)},a.stop=function(d,u){var f;return u=u||Object.keys(r),u.map(function(m){return f=r[m],f?(f.stop(d),f.id):null})},a.connect=function(d){return i=!0,s.connect(d),a},a.emit=function(d,u,f,m){a.onevent&&a.onevent(d,u,f,m);var C=a["on"+d];C&&C(u,f,m)},a;function c(d,u){return u.id=A++,r[u.id]=u,u.source.onended=function(){var f=n.currentTime;u.source.disconnect(),u.env.disconnect(),u.disconnect(),a.emit("ended",f,u.id,u)},u.id}function l(d,u,f){var m=n.createGain();return m.gain.value=0,m.connect(s),m.env=fc(n,f,o),m.env.connect(m.gain),m.source=n.createBufferSource(),m.source.buffer=u,m.source.connect(m),m.source.loop=f.loop||o.loop,m.source.playbackRate.value=pc(f.cents||o.cents),m.source.loopStart=f.loopStart||o.loopStart,m.source.loopEnd=f.loopEnd||o.loopEnd,m.stop=function(C){var h=C||n.currentTime;a.emit("stop",h,d);var g=m.env.stop(h);m.source.stop(g)},m}}function Ls(n){return typeof n=="number"}var hc=["attack","decay","sustain","release"];function fc(n,t,e){var i=lc(n),A=t.adsr||e.adsr;return hc.forEach(function(r,s){A?i[r]=A[s]:i[r]=t[r]||e[r]}),i.value.value=Ls(t.gain)?t.gain:Ls(e.gain)?e.gain:1,i}function pc(n){return n?Math.pow(2,n/1200):1}var mc=uc,Ec=function(n){return n.on=function(t,e){if(arguments.length===1&&typeof t=="function")return n.on("event",t);var i="on"+t,A=n[i];return n[i]=A?Bc(A,e):e,n},n};function Bc(n,t){return function(e,i,A,r){n(e,i,A,r),t(e,i,A,r)}}var Yo=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function Cc(){return Yo}var Ic=[0,2,4,5,7,9,11];function Wo(n,t,e){if(typeof n!="string")return null;var i=Yo.exec(n);if(!i||!t&&i[4])return null;var A={letter:i[1].toUpperCase(),acc:i[2].replace(/x/g,"##")};return A.pc=A.letter+A.acc,A.step=(A.letter.charCodeAt(0)+3)%7,A.alt=A.acc[0]==="b"?-A.acc.length:A.acc.length,A.chroma=Ic[A.step]+A.alt,i[3]&&(A.oct=+i[3],A.midi=A.chroma+12*(A.oct+1),A.freq=Xo(A.midi,e)),t&&(A.tonicOf=i[4]),A}function Xo(n,t){return Math.pow(2,(n-69)/12)*(t||440)}var Ko={parse:Wo,regex:Cc,midiToFreq:Xo},Qc=["letter","acc","pc","step","alt","chroma","oct","midi","freq"];Qc.forEach(function(n){Ko[n]=function(t){var e=Wo(t);return e&&typeof e[n]<"u"?e[n]:null}});var _c=Ko,Dc=_c,vc=function(n){return n!==null&&n!==[]&&n>=0&&n<129},xc=function(n){return vc(n)?+n:Dc.midi(n)},Sc=function(n){if(n.buffers){var t=n.opts.map,e=typeof t=="function"?t:xc,i=function(r){return r?e(r)||r:null};n.buffers=Mc(n.buffers,i);var A=n.start;n.start=function(r,s,o){var a=i(r),c=a%1;return c&&(a=Math.floor(a),o=Object.assign(o||{},{cents:Math.floor(c*100)})),A(a,s,o)}}return n};function Mc(n,t){return Object.keys(n).reduce(function(e,i){return e[t(i)]=n[i],e},{})}var yc=Array.isArray,Oc=function(n){return n&&typeof n=="object"},Tc={},bc=function(n){return n.schedule=function(t,e){var i=n.context.currentTime,A=t<i?i:t;n.emit("schedule",A,e);var r,s,o,a;return e.map(function(c){if(c)yc(c)?(r=c[0],s=c[1]):(r=c.time,s=c);else return null;return Oc(s)?(o=s.name||s.key||s.note||s.midi||null,a=s):(o=s,a=Tc),n.start(o,A+(r||0),a)})},n};function nA(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var qo={exports:{}};(function(n,t){(function(e){n.exports=e()})(function(){return function e(i,A,r){function s(c,l){if(!A[c]){if(!i[c]){var d=typeof nA=="function"&&nA;if(!l&&d)return d(c,!0);if(o)return o(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=A[c]={exports:{}};i[c][0].call(f.exports,function(m){var C=i[c][1][m];return s(C||m)},f,f.exports,e,i,A,r)}return A[c].exports}for(var o=typeof nA=="function"&&nA,a=0;a<r.length;a++)s(r[a]);return s}({1:[function(e,i,A){Object.defineProperty(A,"__esModule",{value:!0}),A.default=function(r){function s(o){if(this._event=o,this._data=o.data,this.receivedTime=o.receivedTime,this._data&&this._data.length<2){console.warn("Illegal MIDI message of length",this._data.length);return}switch(this._messageCode=o.data[0]&240,this.channel=o.data[0]&15,this._messageCode){case 128:this.messageType="noteoff",this.key=o.data[1]&127,this.velocity=o.data[2]&127;break;case 144:this.messageType="noteon",this.key=o.data[1]&127,this.velocity=o.data[2]&127;break;case 160:this.messageType="keypressure",this.key=o.data[1]&127,this.pressure=o.data[2]&127;break;case 176:this.messageType="controlchange",this.controllerNumber=o.data[1]&127,this.controllerValue=o.data[2]&127,this.controllerNumber===120&&this.controllerValue===0?this.channelModeMessage="allsoundoff":this.controllerNumber===121?this.channelModeMessage="resetallcontrollers":this.controllerNumber===122?this.controllerValue===0?this.channelModeMessage="localcontroloff":this.channelModeMessage="localcontrolon":this.controllerNumber===123&&this.controllerValue===0?this.channelModeMessage="allnotesoff":this.controllerNumber===124&&this.controllerValue===0?this.channelModeMessage="omnimodeoff":this.controllerNumber===125&&this.controllerValue===0?this.channelModeMessage="omnimodeon":this.controllerNumber===126?this.channelModeMessage="monomodeon":this.controllerNumber===127&&(this.channelModeMessage="polymodeon");break;case 192:this.messageType="programchange",this.program=o.data[1];break;case 208:this.messageType="channelpressure",this.pressure=o.data[1]&127;break;case 224:this.messageType="pitchbendchange";var a=o.data[2]&127,c=o.data[1]&127;this.pitchBend=(a<<8)+c;break}}return new s(r)},i.exports=A.default},{}]},{},[1])(1)})})(qo);var wc=qo.exports,Nc=wc,Hc=function(n){return n.listenToMidi=function(t,e){var i={},A=e||{},r=A.gain||function(s){return s/127};return t.onmidimessage=function(s){var o=s.messageType?s:Nc(s);if(o.messageType==="noteon"&&o.velocity===0&&(o.messageType="noteoff"),!(A.channel&&o.channel!==A.channel))switch(o.messageType){case"noteon":i[o.key]=n.play(o.key,0,{gain:r(o.velocity)});break;case"noteoff":i[o.key]&&(i[o.key].stop(),delete i[o.key]);break}},n},n};(function(n){var t=mc,e=Ec,i=Sc,A=bc,r=Hc;function s(o,a,c){return r(A(i(e(t(o,a,c)))))}n.exports&&(n.exports=s),typeof window<"u"&&(window.SamplePlayer=s)})(ko);var Rc=ko.exports;function Us(n,t){return Array(t+1).join(n)}function as(n){return typeof n=="number"}function Pc(n){return typeof n=="string"}function Lc(n){return typeof n<"u"}function jo(n,t){return Math.pow(2,(n-69)/12)*(t||440)}var Zo=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function Uc(){return Zo}var Fc=[0,2,4,5,7,9,11];function pn(n,t,e){if(typeof n!="string")return null;var i=Zo.exec(n);if(!i||!t&&i[4])return null;var A={letter:i[1].toUpperCase(),acc:i[2].replace(/x/g,"##")};A.pc=A.letter+A.acc,A.step=(A.letter.charCodeAt(0)+3)%7,A.alt=A.acc[0]==="b"?-A.acc.length:A.acc.length;var r=Fc[A.step]+A.alt;return A.chroma=r<0?12+r:r%12,i[3]&&(A.oct=+i[3],A.midi=r+12*(A.oct+1),A.freq=jo(A.midi,e)),t&&(A.tonicOf=i[4]),A}var Gc="CDEFGAB";function zc(n){return as(n)?n<0?Us("b",-n):Us("#",n):""}function Vc(n){return as(n)?""+n:""}function Jo(n,t,e){return n===null||typeof n>"u"?null:n.step?Jo(n.step,n.alt,n.oct):n<0||n>6?null:Gc.charAt(n)+zc(t)+Vc(e)}function $o(n){if((as(n)||Pc(n))&&n>=0&&n<128)return+n;var t=pn(n);return t&&Lc(t.midi)?t.midi:null}function kc(n,t){var e=$o(n);return e===null?null:jo(e,t)}function Yc(n){return(pn(n)||{}).letter}function Wc(n){return(pn(n)||{}).acc}function Xc(n){return(pn(n)||{}).pc}function Kc(n){return(pn(n)||{}).step}function qc(n){return(pn(n)||{}).alt}function jc(n){return(pn(n)||{}).chroma}function Zc(n){return(pn(n)||{}).oct}const Jc=Object.freeze(Object.defineProperty({__proto__:null,acc:Wc,alt:qc,build:Jo,chroma:jc,freq:kc,letter:Yc,midi:$o,oct:Zc,parse:pn,pc:Xc,regex:Uc,step:Kc},Symbol.toStringTag,{value:"Module"})),$c=Ja(Jc);var FA,Fs;function tl(){if(Fs)return FA;Fs=1;var n=$c;function t(A,r){if(console.warn("new Soundfont() is deprected"),console.log("Please use Soundfont.instrument() instead of new Soundfont().instrument()"),!(this instanceof t))return new t(A);this.nameToUrl=r||t.nameToUrl,this.ctx=A,this.instruments={},this.promises=[]}t.prototype.onready=function(A){console.warn("deprecated API"),console.log("Please use Promise.all(Soundfont.instrument(), Soundfont.instrument()).then() instead of new Soundfont().onready()"),Promise.all(this.promises).then(A)},t.prototype.instrument=function(A,r){console.warn("new Soundfont().instrument() is deprecated."),console.log("Please use Soundfont.instrument() instead.");var s=this.ctx;if(A=A||"default",A in this.instruments)return this.instruments[A];var o={name:A,play:i(s,r)};if(this.instruments[A]=o,A!=="default"){var a=t.instrument(s,A,r).then(function(c){return o.play=c.play,o});this.promises.push(a),o.onready=function(c){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),a.then(c)}}else o.onready=function(c){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),c()};return o};function e(A,r,s){return console.warn("Soundfont.loadBuffers is deprecate."),console.log("Use Soundfont.instrument(..) and get buffers properties from the result."),t.instrument(A,r,s).then(function(o){return o.buffers})}t.loadBuffers=e;function i(A,r){return r=r||{},function(s,o,a,c){console.warn("The oscillator player is deprecated."),console.log("Starting with version 0.9.0 you will have to wait until the soundfont is loaded to play sounds.");var l=s>0&&s<129?+s:n.midi(s),d=l?n.midiToFreq(l,440):null;if(d){a=a||.2,c=c||{};var u=c.destination||r.destination||A.destination,f=c.vcoType||r.vcoType||"sine",m=c.gain||r.gain||.4,C=A.createOscillator();C.type=f,C.frequency.value=d;var h=A.createGain();return h.gain.value=m,C.connect(h),h.connect(u),C.start(o),a>0&&C.stop(o+a),C}}}return t.noteToMidi=n.midi,FA=t,FA}(function(n){var t=ic,e=Rc;function i(o,a,c){if(arguments.length===1)return function(m,C){return i(o,m,C)};var l=c||{},d=l.isSoundfontURL||A,u=l.nameToUrl||r,f=d(a)?a:u(a,l.soundfont,l.format);return t(o,f,{only:l.only||l.notes}).then(function(m){var C=e(o,m,l).connect(l.destination?l.destination:o.destination);return C.url=f,C.name=a,C})}function A(o){return/\.js(\?.*)?$/i.test(o)}function r(o,a,c){return c=c==="ogg"?c:"mp3",a=a==="FluidR3_GM"?a:"MusyngKite","https://gleitz.github.io/midi-js-soundfonts/"+a+"/"+o+"-"+c+".js"}var s=tl();s.instrument=i,s.nameToUrl=r,n.exports&&(n.exports=s),typeof window<"u"&&(window.Soundfont=s)})(zo);var el=zo.exports;const cs=Za(el);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ls="172",nl=0,Gs=1,il=2,ta=1,Al=2,on=3,Sn=0,ye=1,Ye=2,Dn=0,mi=1,zs=2,Vs=3,ks=4,rl=5,Fn=100,sl=101,ol=102,al=103,cl=104,ll=200,gl=201,dl=202,ul=203,Er=204,Br=205,hl=206,fl=207,pl=208,ml=209,El=210,Bl=211,Cl=212,Il=213,Ql=214,Cr=0,Ir=1,Qr=2,Ci=3,_r=4,Dr=5,vr=6,xr=7,ea=0,_l=1,Dl=2,vn=0,vl=1,xl=2,Sl=3,Ml=4,yl=5,Ol=6,Tl=7,na=300,Ii=301,Qi=302,Sr=303,Mr=304,NA=306,yr=1e3,an=1001,Or=1002,qe=1003,bl=1004,iA=1005,Xe=1006,GA=1007,zn=1008,fn=1009,ia=1010,Aa=1011,Gi=1012,gs=1013,Wn=1014,cn=1015,Xi=1016,ds=1017,us=1018,_i=1020,ra=35902,sa=1021,oa=1022,Ke=1023,aa=1024,ca=1025,Ei=1026,Di=1027,la=1028,hs=1029,ga=1030,fs=1031,ps=1033,vA=33776,xA=33777,SA=33778,MA=33779,Tr=35840,br=35841,wr=35842,Nr=35843,Hr=36196,Rr=37492,Pr=37496,Lr=37808,Ur=37809,Fr=37810,Gr=37811,zr=37812,Vr=37813,kr=37814,Yr=37815,Wr=37816,Xr=37817,Kr=37818,qr=37819,jr=37820,Zr=37821,yA=36492,Jr=36494,$r=36495,da=36283,ts=36284,es=36285,ns=36286,wl=3200,Nl=3201,ua=0,Hl=1,_n="",Se="srgb",vi="srgb-linear",TA="linear",Kt="srgb",ei=7680,Ys=519,Rl=512,Pl=513,Ll=514,ha=515,Ul=516,Fl=517,Gl=518,zl=519,Ws=35044,Xs="300 es",ln=2e3,bA=2001;class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const A=this._listeners[t];if(A!==void 0){const r=A.indexOf(e);r!==-1&&A.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const A=i.slice(0);for(let r=0,s=A.length;r<s;r++)A[r].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zA=Math.PI/180,is=180/Math.PI;function Ki(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]).toLowerCase()}function Nt(n,t,e){return Math.max(t,Math.min(e,n))}function Vl(n,t){return(n%t+t)%t}function VA(n,t,e){return(1-e)*n+e*t}function Hi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,A=t.elements;return this.x=A[0]*e+A[3]*i+A[6],this.y=A[1]*e+A[4]*i+A[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Nt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Nt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),A=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*A+t.x,this.y=r*A+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(t,e,i,A,r,s,o,a,c){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,A,r,s,o,a,c)}set(t,e,i,A,r,s,o,a,c){const l=this.elements;return l[0]=t,l[1]=A,l[2]=o,l[3]=e,l[4]=r,l[5]=a,l[6]=i,l[7]=s,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,A=e.elements,r=this.elements,s=i[0],o=i[3],a=i[6],c=i[1],l=i[4],d=i[7],u=i[2],f=i[5],m=i[8],C=A[0],h=A[3],g=A[6],M=A[1],v=A[4],_=A[7],N=A[2],T=A[5],D=A[8];return r[0]=s*C+o*M+a*N,r[3]=s*h+o*v+a*T,r[6]=s*g+o*_+a*D,r[1]=c*C+l*M+d*N,r[4]=c*h+l*v+d*T,r[7]=c*g+l*_+d*D,r[2]=u*C+f*M+m*N,r[5]=u*h+f*v+m*T,r[8]=u*g+f*_+m*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],A=t[2],r=t[3],s=t[4],o=t[5],a=t[6],c=t[7],l=t[8];return e*s*l-e*o*c-i*r*l+i*o*a+A*r*c-A*s*a}invert(){const t=this.elements,e=t[0],i=t[1],A=t[2],r=t[3],s=t[4],o=t[5],a=t[6],c=t[7],l=t[8],d=l*s-o*c,u=o*a-l*r,f=c*r-s*a,m=e*d+i*u+A*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/m;return t[0]=d*C,t[1]=(A*c-l*i)*C,t[2]=(o*i-A*s)*C,t[3]=u*C,t[4]=(l*e-A*a)*C,t[5]=(A*r-o*e)*C,t[6]=f*C,t[7]=(i*a-c*e)*C,t[8]=(s*e-i*r)*C,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,A,r,s,o){const a=Math.cos(r),c=Math.sin(r);return this.set(i*a,i*c,-i*(a*s+c*o)+s+t,-A*c,A*a,-A*(-c*s+a*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(kA.makeScale(t,e)),this}rotate(t){return this.premultiply(kA.makeRotation(-t)),this}translate(t,e){return this.premultiply(kA.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let A=0;A<9;A++)if(e[A]!==i[A])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kA=new yt;function fa(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function zi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kl(){const n=zi("canvas");return n.style.display="block",n}const Ks={};function fi(n){n in Ks||(Ks[n]=!0,console.warn(n))}function Yl(n,t,e){return new Promise(function(i,A){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:A();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Wl(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xl(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qs=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),js=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kl(){const n={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(A,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Kt&&(A.r=gn(A.r),A.g=gn(A.g),A.b=gn(A.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(A.applyMatrix3(this.spaces[r].toXYZ),A.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Kt&&(A.r=Bi(A.r),A.g=Bi(A.g),A.b=Bi(A.b))),A},fromWorkingColorSpace:function(A,r){return this.convert(A,this.workingColorSpace,r)},toWorkingColorSpace:function(A,r){return this.convert(A,r,this.workingColorSpace)},getPrimaries:function(A){return this.spaces[A].primaries},getTransfer:function(A){return A===_n?TA:this.spaces[A].transfer},getLuminanceCoefficients:function(A,r=this.workingColorSpace){return A.fromArray(this.spaces[r].luminanceCoefficients)},define:function(A){Object.assign(this.spaces,A)},_getMatrix:function(A,r,s){return A.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(A){return this.spaces[A].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(A=this.workingColorSpace){return this.spaces[A].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vi]:{primaries:t,whitePoint:i,transfer:TA,toXYZ:qs,fromXYZ:js,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:i,transfer:Kt,toXYZ:qs,fromXYZ:js,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),n}const zt=Kl();function gn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ni;class ql{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ni===void 0&&(ni=zi("canvas")),ni.width=t.width,ni.height=t.height;const i=ni.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zi("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const A=i.getImageData(0,0,t.width,t.height),r=A.data;for(let s=0;s<r.length;s++)r[s]=gn(r[s]/255)*255;return i.putImageData(A,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gn(e[i]/255)*255):e[i]=gn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jl=0;class pa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},A=this.data;if(A!==null){let r;if(Array.isArray(A)){r=[];for(let s=0,o=A.length;s<o;s++)A[s].isDataTexture?r.push(YA(A[s].image)):r.push(YA(A[s]))}else r=YA(A);i.url=r}return e||(t.images[this.uuid]=i),i}}function YA(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ql.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zl=0;class Ce extends yi{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=an,A=an,r=Xe,s=zn,o=Ke,a=fn,c=Ce.DEFAULT_ANISOTROPY,l=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=Ki(),this.name="",this.source=new pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=A,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==na)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yr:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case Or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yr:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case Or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=na;Ce.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,A=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=A}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,A){return this.x=t,this.y=e,this.z=i,this.w=A,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,A=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*A+s[12]*r,this.y=s[1]*e+s[5]*i+s[9]*A+s[13]*r,this.z=s[2]*e+s[6]*i+s[10]*A+s[14]*r,this.w=s[3]*e+s[7]*i+s[11]*A+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,A,r;const a=t.elements,c=a[0],l=a[4],d=a[8],u=a[1],f=a[5],m=a[9],C=a[2],h=a[6],g=a[10];if(Math.abs(l-u)<.01&&Math.abs(d-C)<.01&&Math.abs(m-h)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+C)<.1&&Math.abs(m+h)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,_=(f+1)/2,N=(g+1)/2,T=(l+u)/4,D=(d+C)/4,S=(m+h)/4;return v>_&&v>N?v<.01?(i=0,A=.707106781,r=.707106781):(i=Math.sqrt(v),A=T/i,r=D/i):_>N?_<.01?(i=.707106781,A=0,r=.707106781):(A=Math.sqrt(_),i=T/A,r=S/A):N<.01?(i=.707106781,A=.707106781,r=0):(r=Math.sqrt(N),i=D/r,A=S/r),this.set(i,A,r,e),this}let M=Math.sqrt((h-m)*(h-m)+(d-C)*(d-C)+(u-l)*(u-l));return Math.abs(M)<.001&&(M=1),this.x=(h-m)/M,this.y=(d-C)/M,this.z=(u-l)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this.w=Nt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this.w=Nt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Nt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jl extends yi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const A={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ce(A,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let A=0,r=this.textures.length;A<r;A++)this.textures[A].image.width=t,this.textures[A].image.height=e,this.textures[A].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,A=t.textures.length;i<A;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new pa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Jl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ma extends Ce{constructor(t=null,e=1,i=1,A=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:A},this.magFilter=qe,this.minFilter=qe,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $l extends Ce{constructor(t=null,e=1,i=1,A=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:A},this.magFilter=qe,this.minFilter=qe,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,i=0,A=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=A}static slerpFlat(t,e,i,A,r,s,o){let a=i[A+0],c=i[A+1],l=i[A+2],d=i[A+3];const u=r[s+0],f=r[s+1],m=r[s+2],C=r[s+3];if(o===0){t[e+0]=a,t[e+1]=c,t[e+2]=l,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=C;return}if(d!==C||a!==u||c!==f||l!==m){let h=1-o;const g=a*u+c*f+l*m+d*C,M=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const N=Math.sqrt(v),T=Math.atan2(N,g*M);h=Math.sin(h*T)/N,o=Math.sin(o*T)/N}const _=o*M;if(a=a*h+u*_,c=c*h+f*_,l=l*h+m*_,d=d*h+C*_,h===1-o){const N=1/Math.sqrt(a*a+c*c+l*l+d*d);a*=N,c*=N,l*=N,d*=N}}t[e]=a,t[e+1]=c,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,A,r,s){const o=i[A],a=i[A+1],c=i[A+2],l=i[A+3],d=r[s],u=r[s+1],f=r[s+2],m=r[s+3];return t[e]=o*m+l*d+a*f-c*u,t[e+1]=a*m+l*u+c*d-o*f,t[e+2]=c*m+l*f+o*u-a*d,t[e+3]=l*m-o*d-a*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,A){return this._x=t,this._y=e,this._z=i,this._w=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,A=t._y,r=t._z,s=t._order,o=Math.cos,a=Math.sin,c=o(i/2),l=o(A/2),d=o(r/2),u=a(i/2),f=a(A/2),m=a(r/2);switch(s){case"XYZ":this._x=u*l*d+c*f*m,this._y=c*f*d-u*l*m,this._z=c*l*m+u*f*d,this._w=c*l*d-u*f*m;break;case"YXZ":this._x=u*l*d+c*f*m,this._y=c*f*d-u*l*m,this._z=c*l*m-u*f*d,this._w=c*l*d+u*f*m;break;case"ZXY":this._x=u*l*d-c*f*m,this._y=c*f*d+u*l*m,this._z=c*l*m+u*f*d,this._w=c*l*d-u*f*m;break;case"ZYX":this._x=u*l*d-c*f*m,this._y=c*f*d+u*l*m,this._z=c*l*m-u*f*d,this._w=c*l*d+u*f*m;break;case"YZX":this._x=u*l*d+c*f*m,this._y=c*f*d+u*l*m,this._z=c*l*m-u*f*d,this._w=c*l*d-u*f*m;break;case"XZY":this._x=u*l*d-c*f*m,this._y=c*f*d-u*l*m,this._z=c*l*m+u*f*d,this._w=c*l*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,A=Math.sin(i);return this._x=t.x*A,this._y=t.y*A,this._z=t.z*A,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],A=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(l-a)*f,this._y=(r-c)*f,this._z=(s-A)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(l-a)/f,this._x=.25*f,this._y=(A+s)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(A+s)/f,this._y=.25*f,this._z=(a+l)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(s-A)/f,this._x=(r+c)/f,this._y=(a+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Nt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const A=Math.min(1,e/i);return this.slerp(t,A),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,A=t._y,r=t._z,s=t._w,o=e._x,a=e._y,c=e._z,l=e._w;return this._x=i*l+s*o+A*c-r*a,this._y=A*l+s*a+r*o-i*c,this._z=r*l+s*c+i*a-A*o,this._w=s*l-i*o-A*a-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,A=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+A*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=A,this._z=r,this;const a=1-o*o;if(a<=Number.EPSILON){const f=1-e;return this._w=f*s+e*this._w,this._x=f*i+e*this._x,this._y=f*A+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(a),l=Math.atan2(c,o),d=Math.sin((1-e)*l)/c,u=Math.sin(e*l)/c;return this._w=s*d+this._w*u,this._x=i*d+this._x*u,this._y=A*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),A=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(A*Math.sin(t),A*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zs.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zs.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,A=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*A,this.y=r[1]*e+r[4]*i+r[7]*A,this.z=r[2]*e+r[5]*i+r[8]*A,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,A=this.z,r=t.elements,s=1/(r[3]*e+r[7]*i+r[11]*A+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*A+r[12])*s,this.y=(r[1]*e+r[5]*i+r[9]*A+r[13])*s,this.z=(r[2]*e+r[6]*i+r[10]*A+r[14])*s,this}applyQuaternion(t){const e=this.x,i=this.y,A=this.z,r=t.x,s=t.y,o=t.z,a=t.w,c=2*(s*A-o*i),l=2*(o*e-r*A),d=2*(r*i-s*e);return this.x=e+a*c+s*d-o*l,this.y=i+a*l+o*c-r*d,this.z=A+a*d+r*l-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,A=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*A,this.y=r[1]*e+r[5]*i+r[9]*A,this.z=r[2]*e+r[6]*i+r[10]*A,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Nt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,A=t.y,r=t.z,s=e.x,o=e.y,a=e.z;return this.x=A*a-r*o,this.y=r*s-i*a,this.z=i*o-A*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return WA.copy(this).projectOnVector(t),this.sub(WA)}reflect(t){return this.sub(WA.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Nt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,A=this.z-t.z;return e*e+i*i+A*A}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const A=Math.sin(e)*t;return this.x=A*Math.sin(i),this.y=Math.cos(e)*t,this.z=A*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),A=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=A,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const WA=new L,Zs=new qi;class ji{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,ze):ze.fromBufferAttribute(r,s),ze.applyMatrix4(t.matrixWorld),this.expandByPoint(ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),AA.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),AA.copy(i.boundingBox)),AA.applyMatrix4(t.matrixWorld),this.union(AA)}const A=t.children;for(let r=0,s=A.length;r<s;r++)this.expandByObject(A[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ze),ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ri),rA.subVectors(this.max,Ri),ii.subVectors(t.a,Ri),Ai.subVectors(t.b,Ri),ri.subVectors(t.c,Ri),mn.subVectors(Ai,ii),En.subVectors(ri,Ai),bn.subVectors(ii,ri);let e=[0,-mn.z,mn.y,0,-En.z,En.y,0,-bn.z,bn.y,mn.z,0,-mn.x,En.z,0,-En.x,bn.z,0,-bn.x,-mn.y,mn.x,0,-En.y,En.x,0,-bn.y,bn.x,0];return!XA(e,ii,Ai,ri,rA)||(e=[1,0,0,0,1,0,0,0,1],!XA(e,ii,Ai,ri,rA))?!1:(sA.crossVectors(mn,En),e=[sA.x,sA.y,sA.z],XA(e,ii,Ai,ri,rA))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const en=[new L,new L,new L,new L,new L,new L,new L,new L],ze=new L,AA=new ji,ii=new L,Ai=new L,ri=new L,mn=new L,En=new L,bn=new L,Ri=new L,rA=new L,sA=new L,wn=new L;function XA(n,t,e,i,A){for(let r=0,s=n.length-3;r<=s;r+=3){wn.fromArray(n,r);const o=A.x*Math.abs(wn.x)+A.y*Math.abs(wn.y)+A.z*Math.abs(wn.z),a=t.dot(wn),c=e.dot(wn),l=i.dot(wn);if(Math.max(-Math.max(a,c,l),Math.min(a,c,l))>o)return!1}return!0}const tg=new ji,Pi=new L,KA=new L;class ms{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):tg.setFromPoints(t).getCenter(i);let A=0;for(let r=0,s=t.length;r<s;r++)A=Math.max(A,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(A),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pi.subVectors(t,this.center);const e=Pi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),A=(i-this.radius)*.5;this.center.addScaledVector(Pi,A/i),this.radius+=A}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(KA.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pi.copy(t.center).add(KA)),this.expandByPoint(Pi.copy(t.center).sub(KA))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new L,qA=new L,oA=new L,Bn=new L,jA=new L,aA=new L,ZA=new L;class eg{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,A){qA.copy(t).add(e).multiplyScalar(.5),oA.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(qA);const r=t.distanceTo(e)*.5,s=-this.direction.dot(oA),o=Bn.dot(this.direction),a=-Bn.dot(oA),c=Bn.lengthSq(),l=Math.abs(1-s*s);let d,u,f,m;if(l>0)if(d=s*a-o,u=s*o-a,m=r*l,d>=0)if(u>=-m)if(u<=m){const C=1/l;d*=C,u*=C,f=d*(d+s*u+2*o)+u*(s*d+u+2*a)+c}else u=r,d=Math.max(0,-(s*u+o)),f=-d*d+u*(u+2*a)+c;else u=-r,d=Math.max(0,-(s*u+o)),f=-d*d+u*(u+2*a)+c;else u<=-m?(d=Math.max(0,-(-s*r+o)),u=d>0?-r:Math.min(Math.max(-r,-a),r),f=-d*d+u*(u+2*a)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-a),r),f=u*(u+2*a)+c):(d=Math.max(0,-(s*r+o)),u=d>0?r:Math.min(Math.max(-r,-a),r),f=-d*d+u*(u+2*a)+c);else u=s>0?-r:r,d=Math.max(0,-(s*u+o)),f=-d*d+u*(u+2*a)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),A&&A.copy(qA).addScaledVector(oA,u),f}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const i=nn.dot(this.direction),A=nn.dot(nn)-i*i,r=t.radius*t.radius;if(A>r)return null;const s=Math.sqrt(r-A),o=i-s,a=i+s;return a<0?null:o<0?this.at(a,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,A,r,s,o,a;const c=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,A=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,A=(t.min.x-u.x)*c),l>=0?(r=(t.min.y-u.y)*l,s=(t.max.y-u.y)*l):(r=(t.max.y-u.y)*l,s=(t.min.y-u.y)*l),i>s||r>A||((r>i||isNaN(i))&&(i=r),(s<A||isNaN(A))&&(A=s),d>=0?(o=(t.min.z-u.z)*d,a=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,a=(t.min.z-u.z)*d),i>a||o>A)||((o>i||i!==i)&&(i=o),(a<A||A!==A)&&(A=a),A<0)?null:this.at(i>=0?i:A,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,i,A,r){jA.subVectors(e,t),aA.subVectors(i,t),ZA.crossVectors(jA,aA);let s=this.direction.dot(ZA),o;if(s>0){if(A)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Bn.subVectors(this.origin,t);const a=o*this.direction.dot(aA.crossVectors(Bn,aA));if(a<0)return null;const c=o*this.direction.dot(jA.cross(Bn));if(c<0||a+c>s)return null;const l=-o*Bn.dot(ZA);return l<0?null:this.at(l/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,i,A,r,s,o,a,c,l,d,u,f,m,C,h){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,A,r,s,o,a,c,l,d,u,f,m,C,h)}set(t,e,i,A,r,s,o,a,c,l,d,u,f,m,C,h){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=A,g[1]=r,g[5]=s,g[9]=o,g[13]=a,g[2]=c,g[6]=l,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=C,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,A=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),s=1/si.setFromMatrixColumn(t,2).length();return e[0]=i[0]*A,e[1]=i[1]*A,e[2]=i[2]*A,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*s,e[9]=i[9]*s,e[10]=i[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,A=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),a=Math.cos(A),c=Math.sin(A),l=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=s*l,f=s*d,m=o*l,C=o*d;e[0]=a*l,e[4]=-a*d,e[8]=c,e[1]=f+m*c,e[5]=u-C*c,e[9]=-o*a,e[2]=C-u*c,e[6]=m+f*c,e[10]=s*a}else if(t.order==="YXZ"){const u=a*l,f=a*d,m=c*l,C=c*d;e[0]=u+C*o,e[4]=m*o-f,e[8]=s*c,e[1]=s*d,e[5]=s*l,e[9]=-o,e[2]=f*o-m,e[6]=C+u*o,e[10]=s*a}else if(t.order==="ZXY"){const u=a*l,f=a*d,m=c*l,C=c*d;e[0]=u-C*o,e[4]=-s*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=s*l,e[9]=C-u*o,e[2]=-s*c,e[6]=o,e[10]=s*a}else if(t.order==="ZYX"){const u=s*l,f=s*d,m=o*l,C=o*d;e[0]=a*l,e[4]=m*c-f,e[8]=u*c+C,e[1]=a*d,e[5]=C*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*a,e[10]=s*a}else if(t.order==="YZX"){const u=s*a,f=s*c,m=o*a,C=o*c;e[0]=a*l,e[4]=C-u*d,e[8]=m*d+f,e[1]=d,e[5]=s*l,e[9]=-o*l,e[2]=-c*l,e[6]=f*d+m,e[10]=u-C*d}else if(t.order==="XZY"){const u=s*a,f=s*c,m=o*a,C=o*c;e[0]=a*l,e[4]=-d,e[8]=c*l,e[1]=u*d+C,e[5]=s*l,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*l,e[10]=C*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ng,t,ig)}lookAt(t,e,i){const A=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),Cn.crossVectors(i,Te),Cn.lengthSq()===0&&(Math.abs(i.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),Cn.crossVectors(i,Te)),Cn.normalize(),cA.crossVectors(Te,Cn),A[0]=Cn.x,A[4]=cA.x,A[8]=Te.x,A[1]=Cn.y,A[5]=cA.y,A[9]=Te.y,A[2]=Cn.z,A[6]=cA.z,A[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,A=e.elements,r=this.elements,s=i[0],o=i[4],a=i[8],c=i[12],l=i[1],d=i[5],u=i[9],f=i[13],m=i[2],C=i[6],h=i[10],g=i[14],M=i[3],v=i[7],_=i[11],N=i[15],T=A[0],D=A[4],S=A[8],I=A[12],B=A[1],y=A[5],z=A[9],U=A[13],K=A[2],q=A[6],Y=A[10],Z=A[14],G=A[3],At=A[7],lt=A[11],Et=A[15];return r[0]=s*T+o*B+a*K+c*G,r[4]=s*D+o*y+a*q+c*At,r[8]=s*S+o*z+a*Y+c*lt,r[12]=s*I+o*U+a*Z+c*Et,r[1]=l*T+d*B+u*K+f*G,r[5]=l*D+d*y+u*q+f*At,r[9]=l*S+d*z+u*Y+f*lt,r[13]=l*I+d*U+u*Z+f*Et,r[2]=m*T+C*B+h*K+g*G,r[6]=m*D+C*y+h*q+g*At,r[10]=m*S+C*z+h*Y+g*lt,r[14]=m*I+C*U+h*Z+g*Et,r[3]=M*T+v*B+_*K+N*G,r[7]=M*D+v*y+_*q+N*At,r[11]=M*S+v*z+_*Y+N*lt,r[15]=M*I+v*U+_*Z+N*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],A=t[8],r=t[12],s=t[1],o=t[5],a=t[9],c=t[13],l=t[2],d=t[6],u=t[10],f=t[14],m=t[3],C=t[7],h=t[11],g=t[15];return m*(+r*a*d-A*c*d-r*o*u+i*c*u+A*o*f-i*a*f)+C*(+e*a*f-e*c*u+r*s*u-A*s*f+A*c*l-r*a*l)+h*(+e*c*d-e*o*f-r*s*d+i*s*f+r*o*l-i*c*l)+g*(-A*o*l-e*a*d+e*o*u+A*s*d-i*s*u+i*a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const A=this.elements;return t.isVector3?(A[12]=t.x,A[13]=t.y,A[14]=t.z):(A[12]=t,A[13]=e,A[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],A=t[2],r=t[3],s=t[4],o=t[5],a=t[6],c=t[7],l=t[8],d=t[9],u=t[10],f=t[11],m=t[12],C=t[13],h=t[14],g=t[15],M=d*h*c-C*u*c+C*a*f-o*h*f-d*a*g+o*u*g,v=m*u*c-l*h*c-m*a*f+s*h*f+l*a*g-s*u*g,_=l*C*c-m*d*c+m*o*f-s*C*f-l*o*g+s*d*g,N=m*d*a-l*C*a-m*o*u+s*C*u+l*o*h-s*d*h,T=e*M+i*v+A*_+r*N;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/T;return t[0]=M*D,t[1]=(C*u*r-d*h*r-C*A*f+i*h*f+d*A*g-i*u*g)*D,t[2]=(o*h*r-C*a*r+C*A*c-i*h*c-o*A*g+i*a*g)*D,t[3]=(d*a*r-o*u*r-d*A*c+i*u*c+o*A*f-i*a*f)*D,t[4]=v*D,t[5]=(l*h*r-m*u*r+m*A*f-e*h*f-l*A*g+e*u*g)*D,t[6]=(m*a*r-s*h*r-m*A*c+e*h*c+s*A*g-e*a*g)*D,t[7]=(s*u*r-l*a*r+l*A*c-e*u*c-s*A*f+e*a*f)*D,t[8]=_*D,t[9]=(m*d*r-l*C*r-m*i*f+e*C*f+l*i*g-e*d*g)*D,t[10]=(s*C*r-m*o*r+m*i*c-e*C*c-s*i*g+e*o*g)*D,t[11]=(l*o*r-s*d*r-l*i*c+e*d*c+s*i*f-e*o*f)*D,t[12]=N*D,t[13]=(l*C*A-m*d*A+m*i*u-e*C*u-l*i*h+e*d*h)*D,t[14]=(m*o*A-s*C*A-m*i*a+e*C*a+s*i*h-e*o*h)*D,t[15]=(s*d*A-l*o*A+l*i*a-e*d*a-s*i*u+e*o*u)*D,this}scale(t){const e=this.elements,i=t.x,A=t.y,r=t.z;return e[0]*=i,e[4]*=A,e[8]*=r,e[1]*=i,e[5]*=A,e[9]*=r,e[2]*=i,e[6]*=A,e[10]*=r,e[3]*=i,e[7]*=A,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],A=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,A))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),A=Math.sin(e),r=1-i,s=t.x,o=t.y,a=t.z,c=r*s,l=r*o;return this.set(c*s+i,c*o-A*a,c*a+A*o,0,c*o+A*a,l*o+i,l*a-A*s,0,c*a-A*o,l*a+A*s,r*a*a+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,A,r,s){return this.set(1,i,r,0,t,1,s,0,e,A,1,0,0,0,0,1),this}compose(t,e,i){const A=this.elements,r=e._x,s=e._y,o=e._z,a=e._w,c=r+r,l=s+s,d=o+o,u=r*c,f=r*l,m=r*d,C=s*l,h=s*d,g=o*d,M=a*c,v=a*l,_=a*d,N=i.x,T=i.y,D=i.z;return A[0]=(1-(C+g))*N,A[1]=(f+_)*N,A[2]=(m-v)*N,A[3]=0,A[4]=(f-_)*T,A[5]=(1-(u+g))*T,A[6]=(h+M)*T,A[7]=0,A[8]=(m+v)*D,A[9]=(h-M)*D,A[10]=(1-(u+C))*D,A[11]=0,A[12]=t.x,A[13]=t.y,A[14]=t.z,A[15]=1,this}decompose(t,e,i){const A=this.elements;let r=si.set(A[0],A[1],A[2]).length();const s=si.set(A[4],A[5],A[6]).length(),o=si.set(A[8],A[9],A[10]).length();this.determinant()<0&&(r=-r),t.x=A[12],t.y=A[13],t.z=A[14],Ve.copy(this);const c=1/r,l=1/s,d=1/o;return Ve.elements[0]*=c,Ve.elements[1]*=c,Ve.elements[2]*=c,Ve.elements[4]*=l,Ve.elements[5]*=l,Ve.elements[6]*=l,Ve.elements[8]*=d,Ve.elements[9]*=d,Ve.elements[10]*=d,e.setFromRotationMatrix(Ve),i.x=r,i.y=s,i.z=o,this}makePerspective(t,e,i,A,r,s,o=ln){const a=this.elements,c=2*r/(e-t),l=2*r/(i-A),d=(e+t)/(e-t),u=(i+A)/(i-A);let f,m;if(o===ln)f=-(s+r)/(s-r),m=-2*s*r/(s-r);else if(o===bA)f=-s/(s-r),m=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return a[0]=c,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,A,r,s,o=ln){const a=this.elements,c=1/(e-t),l=1/(i-A),d=1/(s-r),u=(e+t)*c,f=(i+A)*l;let m,C;if(o===ln)m=(s+r)*d,C=-2*d;else if(o===bA)m=r*d,C=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=C,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let A=0;A<16;A++)if(e[A]!==i[A])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const si=new L,Ve=new re,ng=new L(0,0,0),ig=new L(1,1,1),Cn=new L,cA=new L,Te=new L,Js=new re,$s=new qi;class Je{constructor(t=0,e=0,i=0,A=Je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=A}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,A=this._order){return this._x=t,this._y=e,this._z=i,this._order=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const A=t.elements,r=A[0],s=A[4],o=A[8],a=A[1],c=A[5],l=A[9],d=A[2],u=A[6],f=A[10];switch(e){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Js.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Js,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $s.setFromEuler(this),this.setFromQuaternion($s,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Je.DEFAULT_ORDER="XYZ";class Ea{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ag=0;const to=new L,oi=new qi,An=new re,lA=new L,Li=new L,rg=new L,sg=new qi,eo=new L(1,0,0),no=new L(0,1,0),io=new L(0,0,1),Ao={type:"added"},og={type:"removed"},ai={type:"childadded",child:null},JA={type:"childremoved",child:null};class Ie extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new L,e=new Je,i=new qi,A=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function s(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:A},modelViewMatrix:{value:new re},normalMatrix:{value:new yt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(eo,t)}rotateY(t){return this.rotateOnAxis(no,t)}rotateZ(t){return this.rotateOnAxis(io,t)}translateOnAxis(t,e){return to.copy(t).applyQuaternion(this.quaternion),this.position.add(to.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eo,t)}translateY(t){return this.translateOnAxis(no,t)}translateZ(t){return this.translateOnAxis(io,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?lA.copy(t):lA.set(t,e,i);const A=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Li,lA,this.up):An.lookAt(lA,Li,this.up),this.quaternion.setFromRotationMatrix(An),A&&(An.extractRotation(A.matrixWorld),oi.setFromRotationMatrix(An),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ao),ai.child=t,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(og),JA.child=t,this.dispatchEvent(JA),JA.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ao),ai.child=t,this.dispatchEvent(ai),ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,A=this.children.length;i<A;i++){const s=this.children[i].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const A=this.children;for(let r=0,s=A.length;r<s;r++)A[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,t,rg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,sg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,A=e.length;i<A;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,A=e.length;i<A;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,A=e.length;i<A;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const A=this.children;for(let r=0,s=A.length;r<s;r++)A[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const A={};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.castShadow===!0&&(A.castShadow=!0),this.receiveShadow===!0&&(A.receiveShadow=!0),this.visible===!1&&(A.visible=!1),this.frustumCulled===!1&&(A.frustumCulled=!1),this.renderOrder!==0&&(A.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(A.userData=this.userData),A.layers=this.layers.mask,A.matrix=this.matrix.toArray(),A.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(A.matrixAutoUpdate=!1),this.isInstancedMesh&&(A.type="InstancedMesh",A.count=this.count,A.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(A.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(A.type="BatchedMesh",A.perObjectFrustumCulled=this.perObjectFrustumCulled,A.sortObjects=this.sortObjects,A.drawRanges=this._drawRanges,A.reservedRanges=this._reservedRanges,A.visibility=this._visibility,A.active=this._active,A.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),A.maxInstanceCount=this._maxInstanceCount,A.maxVertexCount=this._maxVertexCount,A.maxIndexCount=this._maxIndexCount,A.geometryInitialized=this._geometryInitialized,A.geometryCount=this._geometryCount,A.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(A.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(A.boundingSphere={center:A.boundingSphere.center.toArray(),radius:A.boundingSphere.radius}),this.boundingBox!==null&&(A.boundingBox={min:A.boundingBox.min.toArray(),max:A.boundingBox.max.toArray()}));function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?A.background=this.background.toJSON():this.background.isTexture&&(A.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(A.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){A.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const d=a[c];r(t.shapes,d)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(A.bindMode=this.bindMode,A.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),A.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(t.materials,this.material[a]));A.material=o}else A.material=r(t.materials,this.material);if(this.children.length>0){A.children=[];for(let o=0;o<this.children.length;o++)A.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){A.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];A.animations.push(r(t.animations,a))}}if(e){const o=s(t.geometries),a=s(t.materials),c=s(t.textures),l=s(t.images),d=s(t.shapes),u=s(t.skeletons),f=s(t.animations),m=s(t.nodes);o.length>0&&(i.geometries=o),a.length>0&&(i.materials=a),c.length>0&&(i.textures=c),l.length>0&&(i.images=l),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=A,i;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const A=t.children[i];this.add(A.clone())}return this}}Ie.DEFAULT_UP=new L(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new L,rn=new L,$A=new L,sn=new L,ci=new L,li=new L,ro=new L,tr=new L,er=new L,nr=new L,ir=new Ae,Ar=new Ae,rr=new Ae;class We{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,A){A.subVectors(i,e),ke.subVectors(t,e),A.cross(ke);const r=A.lengthSq();return r>0?A.multiplyScalar(1/Math.sqrt(r)):A.set(0,0,0)}static getBarycoord(t,e,i,A,r){ke.subVectors(A,e),rn.subVectors(i,e),$A.subVectors(t,e);const s=ke.dot(ke),o=ke.dot(rn),a=ke.dot($A),c=rn.dot(rn),l=rn.dot($A),d=s*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*a-o*l)*u,m=(s*l-o*a)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,A){return this.getBarycoord(t,e,i,A,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(t,e,i,A,r,s,o,a){return this.getBarycoord(t,e,i,A,sn)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,sn.x),a.addScaledVector(s,sn.y),a.addScaledVector(o,sn.z),a)}static getInterpolatedAttribute(t,e,i,A,r,s){return ir.setScalar(0),Ar.setScalar(0),rr.setScalar(0),ir.fromBufferAttribute(t,e),Ar.fromBufferAttribute(t,i),rr.fromBufferAttribute(t,A),s.setScalar(0),s.addScaledVector(ir,r.x),s.addScaledVector(Ar,r.y),s.addScaledVector(rr,r.z),s}static isFrontFacing(t,e,i,A){return ke.subVectors(i,e),rn.subVectors(t,e),ke.cross(rn).dot(A)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,A){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[A]),this}setFromAttributeAndIndices(t,e,i,A){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,A),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),ke.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,A,r){return We.getInterpolation(t,this.a,this.b,this.c,e,i,A,r)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,A=this.b,r=this.c;let s,o;ci.subVectors(A,i),li.subVectors(r,i),tr.subVectors(t,i);const a=ci.dot(tr),c=li.dot(tr);if(a<=0&&c<=0)return e.copy(i);er.subVectors(t,A);const l=ci.dot(er),d=li.dot(er);if(l>=0&&d<=l)return e.copy(A);const u=a*d-l*c;if(u<=0&&a>=0&&l<=0)return s=a/(a-l),e.copy(i).addScaledVector(ci,s);nr.subVectors(t,r);const f=ci.dot(nr),m=li.dot(nr);if(m>=0&&f<=m)return e.copy(r);const C=f*c-a*m;if(C<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(li,o);const h=l*m-f*d;if(h<=0&&d-l>=0&&f-m>=0)return ro.subVectors(r,A),o=(d-l)/(d-l+(f-m)),e.copy(A).addScaledVector(ro,o);const g=1/(h+C+u);return s=C*g,o=u*g,e.copy(i).addScaledVector(ci,s).addScaledVector(li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ba={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},gA={h:0,s:0,l:0};function sr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const A=t;A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,A=zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,zt.toWorkingColorSpace(this,A),this}setHSL(t,e,i,A=zt.workingColorSpace){if(t=Vl(t,1),e=Nt(e,0,1),i=Nt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,s=2*i-r;this.r=sr(s,r,t+1/3),this.g=sr(s,r,t),this.b=sr(s,r,t-1/3)}return zt.toWorkingColorSpace(this,A),this}setStyle(t,e=Se){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let A;if(A=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=A[1],o=A[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(A=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=A[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const i=Ba[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return zt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Nt(Ee.r*255,0,255))*65536+Math.round(Nt(Ee.g*255,0,255))*256+Math.round(Nt(Ee.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=zt.workingColorSpace){zt.fromWorkingColorSpace(Ee.copy(this),e);const i=Ee.r,A=Ee.g,r=Ee.b,s=Math.max(i,A,r),o=Math.min(i,A,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const d=s-o;switch(c=l<=.5?d/(s+o):d/(2-s-o),s){case i:a=(A-r)/d+(A<r?6:0);break;case A:a=(r-i)/d+2;break;case r:a=(i-A)/d+4;break}a/=6}return t.h=a,t.s=c,t.l=l,t}getRGB(t,e=zt.workingColorSpace){return zt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Se){zt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,i=Ee.g,A=Ee.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${A.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(A*255)})`}offsetHSL(t,e,i){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(gA);const i=VA(In.h,gA.h,e),A=VA(In.s,gA.s,e),r=VA(In.l,gA.l,e);return this.setHSL(i,A,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,A=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*A,this.g=r[1]*e+r[4]*i+r[7]*A,this.b=r[2]*e+r[5]*i+r[8]*A,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Vt;Vt.NAMES=Ba;let ag=0;class Zi extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=mi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=Br,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ys,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const A=this[e];if(A===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}A&&A.isColor?A.set(i):A&&A.isVector3&&i&&i.isVector3?A.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Er&&(i.blendSrc=this.blendSrc),this.blendDst!==Br&&(i.blendDst=this.blendDst),this.blendEquation!==Fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ys&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function A(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(e){const r=A(t.textures),s=A(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const A=e.length;i=new Array(A);for(let r=0;r!==A;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jn extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new L,dA=new Wt;class Ze{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ws,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let A=0,r=this.itemSize;A<r;A++)this.array[t+A]=e.array[i+A];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)dA.fromBufferAttribute(this,e),dA.applyMatrix3(t),this.setXY(e,dA.x,dA.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,A){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),A=xe(A,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=A,this}setXYZW(t,e,i,A,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),A=xe(A,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=A,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ws&&(t.usage=this.usage),t}}class Ca extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ia extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Vn extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}let cg=0;const Pe=new re,or=new Ie,gi=new L,be=new ji,Ui=new ji,de=new L;class Zn extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fa(t)?Ia:Ca)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const A=this.attributes.tangent;return A!==void 0&&(A.transformDirection(t),A.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,i){return Pe.makeTranslation(t,e,i),this.applyMatrix4(Pe),this}scale(t,e,i){return Pe.makeScale(t,e,i),this.applyMatrix4(Pe),this}lookAt(t){return or.lookAt(t),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let A=0,r=t.length;A<r;A++){const s=t[A];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Vn(i,3))}else{const i=Math.min(t.length,e.count);for(let A=0;A<i;A++){const r=t[A];e.setXYZ(A,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,A=e.length;i<A;i++){const r=e[i];be.setFromBufferAttribute(r),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,be.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,be.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(be.min),this.boundingBox.expandByPoint(be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(be.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(de.addVectors(be.min,Ui.min),be.expandByPoint(de),de.addVectors(be.max,Ui.max),be.expandByPoint(de)):(be.expandByPoint(Ui.min),be.expandByPoint(Ui.max))}be.getCenter(i);let A=0;for(let r=0,s=t.count;r<s;r++)de.fromBufferAttribute(t,r),A=Math.max(A,i.distanceToSquared(de));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)de.fromBufferAttribute(o,c),a&&(gi.fromBufferAttribute(t,c),de.add(gi)),A=Math.max(A,i.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(A),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,A=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],a=[];for(let S=0;S<i.count;S++)o[S]=new L,a[S]=new L;const c=new L,l=new L,d=new L,u=new Wt,f=new Wt,m=new Wt,C=new L,h=new L;function g(S,I,B){c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,I),d.fromBufferAttribute(i,B),u.fromBufferAttribute(r,S),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,B),l.sub(c),d.sub(c),f.sub(u),m.sub(u);const y=1/(f.x*m.y-m.x*f.y);isFinite(y)&&(C.copy(l).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(y),h.copy(d).multiplyScalar(f.x).addScaledVector(l,-m.x).multiplyScalar(y),o[S].add(C),o[I].add(C),o[B].add(C),a[S].add(h),a[I].add(h),a[B].add(h))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let S=0,I=M.length;S<I;++S){const B=M[S],y=B.start,z=B.count;for(let U=y,K=y+z;U<K;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new L,_=new L,N=new L,T=new L;function D(S){N.fromBufferAttribute(A,S),T.copy(N);const I=o[S];v.copy(I),v.sub(N.multiplyScalar(N.dot(I))).normalize(),_.crossVectors(T,I);const y=_.dot(a[S])<0?-1:1;s.setXYZW(S,v.x,v.y,v.z,y)}for(let S=0,I=M.length;S<I;++S){const B=M[S],y=B.start,z=B.count;for(let U=y,K=y+z;U<K;U+=3)D(t.getX(U+0)),D(t.getX(U+1)),D(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const A=new L,r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),C=t.getX(u+1),h=t.getX(u+2);A.fromBufferAttribute(e,m),r.fromBufferAttribute(e,C),s.fromBufferAttribute(e,h),l.subVectors(s,r),d.subVectors(A,r),l.cross(d),o.fromBufferAttribute(i,m),a.fromBufferAttribute(i,C),c.fromBufferAttribute(i,h),o.add(l),a.add(l),c.add(l),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(C,a.x,a.y,a.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)A.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),s.fromBufferAttribute(e,u+2),l.subVectors(s,r),d.subVectors(A,r),l.cross(d),i.setXYZ(u+0,l.x,l.y,l.z),i.setXYZ(u+1,l.x,l.y,l.z),i.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(o,a){const c=o.array,l=o.itemSize,d=o.normalized,u=new c.constructor(a.length*l);let f=0,m=0;for(let C=0,h=a.length;C<h;C++){o.isInterleavedBufferAttribute?f=a[C]*o.data.stride+o.offset:f=a[C]*l;for(let g=0;g<l;g++)u[m++]=c[f++]}return new Ze(u,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zn,i=this.index.array,A=this.attributes;for(const o in A){const a=A[o],c=t(a,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,d=c.length;l<d;l++){const u=c[l],f=t(u,i);a.push(f)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const a in i){const c=i[a];t.data.attributes[a]=c.toJSON(t.data)}const A={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];l.push(f.toJSON(t.data))}l.length>0&&(A[a]=l,r=!0)}r&&(t.data.morphAttributes=A,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const A=t.attributes;for(const c in A){const l=A[c];this.setAttribute(c,l.clone(e))}const r=t.morphAttributes;for(const c in r){const l=[],d=r[c];for(let u=0,f=d.length;u<f;u++)l.push(d[u].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,l=s.length;c<l;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new re,Nn=new eg,uA=new ms,oo=new L,hA=new L,fA=new L,pA=new L,ar=new L,mA=new L,ao=new L,EA=new L;class we extends Ie{constructor(t=new Zn,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const A=e[i[0]];if(A!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=A.length;r<s;r++){const o=A[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,A=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;e.fromBufferAttribute(A,t);const o=this.morphTargetInfluences;if(r&&o){mA.set(0,0,0);for(let a=0,c=r.length;a<c;a++){const l=o[a],d=r[a];l!==0&&(ar.fromBufferAttribute(d,t),s?mA.addScaledVector(ar,l):mA.addScaledVector(ar.sub(e),l))}e.add(mA)}return e}raycast(t,e){const i=this.geometry,A=this.material,r=this.matrixWorld;A!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uA.copy(i.boundingSphere),uA.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(uA.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(uA,oo)===null||Nn.origin.distanceToSquared(oo)>(t.far-t.near)**2))&&(so.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(so),!(i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,i){let A;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,C=u.length;m<C;m++){const h=u[m],g=s[h.materialIndex],M=Math.max(h.start,f.start),v=Math.min(o.count,Math.min(h.start+h.count,f.start+f.count));for(let _=M,N=v;_<N;_+=3){const T=o.getX(_),D=o.getX(_+1),S=o.getX(_+2);A=BA(this,g,t,i,c,l,d,T,D,S),A&&(A.faceIndex=Math.floor(_/3),A.face.materialIndex=h.materialIndex,e.push(A))}}else{const m=Math.max(0,f.start),C=Math.min(o.count,f.start+f.count);for(let h=m,g=C;h<g;h+=3){const M=o.getX(h),v=o.getX(h+1),_=o.getX(h+2);A=BA(this,s,t,i,c,l,d,M,v,_),A&&(A.faceIndex=Math.floor(h/3),e.push(A))}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,C=u.length;m<C;m++){const h=u[m],g=s[h.materialIndex],M=Math.max(h.start,f.start),v=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let _=M,N=v;_<N;_+=3){const T=_,D=_+1,S=_+2;A=BA(this,g,t,i,c,l,d,T,D,S),A&&(A.faceIndex=Math.floor(_/3),A.face.materialIndex=h.materialIndex,e.push(A))}}else{const m=Math.max(0,f.start),C=Math.min(a.count,f.start+f.count);for(let h=m,g=C;h<g;h+=3){const M=h,v=h+1,_=h+2;A=BA(this,s,t,i,c,l,d,M,v,_),A&&(A.faceIndex=Math.floor(h/3),e.push(A))}}}}function lg(n,t,e,i,A,r,s,o){let a;if(t.side===ye?a=i.intersectTriangle(s,r,A,!0,o):a=i.intersectTriangle(A,r,s,t.side===Sn,o),a===null)return null;EA.copy(o),EA.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(EA);return c<e.near||c>e.far?null:{distance:c,point:EA.clone(),object:n}}function BA(n,t,e,i,A,r,s,o,a,c){n.getVertexPosition(o,hA),n.getVertexPosition(a,fA),n.getVertexPosition(c,pA);const l=lg(n,t,e,i,hA,fA,pA,ao);if(l){const d=new L;We.getBarycoord(ao,hA,fA,pA,d),A&&(l.uv=We.getInterpolatedAttribute(A,o,a,c,d,new Wt)),r&&(l.uv1=We.getInterpolatedAttribute(r,o,a,c,d,new Wt)),s&&(l.normal=We.getInterpolatedAttribute(s,o,a,c,d,new L),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const u={a:o,b:a,c,normal:new L,materialIndex:0};We.getNormal(hA,fA,pA,u.normal),l.face=u,l.barycoord=d}return l}class Oi extends Zn{constructor(t=1,e=1,i=1,A=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:A,heightSegments:r,depthSegments:s};const o=this;A=Math.floor(A),r=Math.floor(r),s=Math.floor(s);const a=[],c=[],l=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,i,e,t,s,r,0),m("z","y","x",1,-1,i,e,-t,s,r,1),m("x","z","y",1,1,t,i,e,A,s,2),m("x","z","y",1,-1,t,i,-e,A,s,3),m("x","y","z",1,-1,t,e,i,A,r,4),m("x","y","z",-1,-1,t,e,-i,A,r,5),this.setIndex(a),this.setAttribute("position",new Vn(c,3)),this.setAttribute("normal",new Vn(l,3)),this.setAttribute("uv",new Vn(d,2));function m(C,h,g,M,v,_,N,T,D,S,I){const B=_/D,y=N/S,z=_/2,U=N/2,K=T/2,q=D+1,Y=S+1;let Z=0,G=0;const At=new L;for(let lt=0;lt<Y;lt++){const Et=lt*y-U;for(let bt=0;bt<q;bt++){const qt=bt*B-z;At[C]=qt*M,At[h]=Et*v,At[g]=K,c.push(At.x,At.y,At.z),At[C]=0,At[h]=0,At[g]=T>0?1:-1,l.push(At.x,At.y,At.z),d.push(bt/D),d.push(1-lt/S),Z+=1}}for(let lt=0;lt<S;lt++)for(let Et=0;Et<D;Et++){const bt=u+Et+q*lt,qt=u+Et+q*(lt+1),k=u+(Et+1)+q*(lt+1),tt=u+(Et+1)+q*lt;a.push(bt,qt,tt),a.push(qt,k,tt),G+=6}o.addGroup(f,G,I),f+=G,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const A=n[e][i];A&&(A.isColor||A.isMatrix3||A.isMatrix4||A.isVector2||A.isVector3||A.isVector4||A.isTexture||A.isQuaternion)?A.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=A.clone():Array.isArray(A)?t[e][i]=A.slice():t[e][i]=A}}return t}function _e(n){const t={};for(let e=0;e<n.length;e++){const i=xi(n[e]);for(const A in i)t[A]=i[A]}return t}function gg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qa(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}const dg={clone:xi,merge:_e};var ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ug,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=gg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const A in this.uniforms){const s=this.uniforms[A].value;s&&s.isTexture?e.uniforms[A]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[A]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[A]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[A]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[A]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[A]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[A]={type:"m4",value:s.toArray()}:e.uniforms[A]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const A in this.extensions)this.extensions[A]===!0&&(i[A]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class _a extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new L,co=new Wt,lo=new Wt;class Le extends _a{constructor(t=50,e=1,i=.1,A=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=A,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zA*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return is*2*Math.atan(Math.tan(zA*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,co,lo),e.subVectors(lo,co)}setViewOffset(t,e,i,A,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=A,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zA*.5*this.fov)/this.zoom,i=2*e,A=this.aspect*i,r=-.5*A;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*A/a,e-=s.offsetY*i/c,A*=s.width/a,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+A,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const di=-90,ui=1;class fg extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const A=new Le(di,ui,t,e);A.layers=this.layers,this.add(A);const r=new Le(di,ui,t,e);r.layers=this.layers,this.add(r);const s=new Le(di,ui,t,e);s.layers=this.layers,this.add(s);const o=new Le(di,ui,t,e);o.layers=this.layers,this.add(o);const a=new Le(di,ui,t,e);a.layers=this.layers,this.add(a);const c=new Le(di,ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,A,r,s,o,a]=e;for(const c of e)this.remove(c);if(t===ln)i.up.set(0,1,0),i.lookAt(1,0,0),A.up.set(0,1,0),A.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===bA)i.up.set(0,-1,0),i.lookAt(-1,0,0),A.up.set(0,-1,0),A.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:A}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,c,l]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const C=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,A),t.render(e,r),t.setRenderTarget(i,1,A),t.render(e,s),t.setRenderTarget(i,2,A),t.render(e,o),t.setRenderTarget(i,3,A),t.render(e,a),t.setRenderTarget(i,4,A),t.render(e,c),i.texture.generateMipmaps=C,t.setRenderTarget(i,5,A),t.render(e,l),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Da extends Ce{constructor(t,e,i,A,r,s,o,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:Ii,super(t,e,i,A,r,s,o,a,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pg extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},A=[i,i,i,i,i,i];this.texture=new Da(A,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},A=new Oi(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ye,blending:Dn});r.uniforms.tEquirect.value=e;const s=new we(A,r),o=e.minFilter;return e.minFilter===zn&&(e.minFilter=Xe),new fg(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,i,A){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,i,A);t.setRenderTarget(r)}}class mg extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const cr=new L,Eg=new L,Bg=new yt;class Ln{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,A){return this.normal.set(t,e,i),this.constant=A,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const A=cr.subVectors(i,e).cross(Eg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(A,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(cr),A=this.normal.dot(i);if(A===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/A;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Bg.getNormalMatrix(t),A=this.coplanarPoint(cr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-A.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new ms,CA=new L;class Es{constructor(t=new Ln,e=new Ln,i=new Ln,A=new Ln,r=new Ln,s=new Ln){this.planes=[t,e,i,A,r,s]}set(t,e,i,A,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(A),o[4].copy(r),o[5].copy(s),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ln){const i=this.planes,A=t.elements,r=A[0],s=A[1],o=A[2],a=A[3],c=A[4],l=A[5],d=A[6],u=A[7],f=A[8],m=A[9],C=A[10],h=A[11],g=A[12],M=A[13],v=A[14],_=A[15];if(i[0].setComponents(a-r,u-c,h-f,_-g).normalize(),i[1].setComponents(a+r,u+c,h+f,_+g).normalize(),i[2].setComponents(a+s,u+l,h+m,_+M).normalize(),i[3].setComponents(a-s,u-l,h-m,_-M).normalize(),i[4].setComponents(a-o,u-d,h-C,_-v).normalize(),e===ln)i[5].setComponents(a+o,u+d,h+C,_+v).normalize();else if(e===bA)i[5].setComponents(o,d,C,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,i=t.center,A=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<A)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const A=e[i];if(CA.x=A.normal.x>0?t.max.x:t.min.x,CA.y=A.normal.y>0?t.max.y:t.min.y,CA.z=A.normal.z>0?t.max.z:t.min.z,A.distanceToPoint(CA)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class IA extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Cg extends Ce{constructor(t,e,i,A,r,s,o,a,c){super(t,e,i,A,r,s,o,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class va extends Ce{constructor(t,e,i,A,r,s,o,a,c,l=Ei){if(l!==Ei&&l!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===Ei&&(i=Wn),i===void 0&&l===Di&&(i=_i),super(null,A,r,s,o,a,l,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=a!==void 0?a:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ti extends Zn{constructor(t=1,e=1,i=1,A=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:A};const r=t/2,s=e/2,o=Math.floor(i),a=Math.floor(A),c=o+1,l=a+1,d=t/o,u=e/a,f=[],m=[],C=[],h=[];for(let g=0;g<l;g++){const M=g*u-s;for(let v=0;v<c;v++){const _=v*d-r;m.push(_,-M,0),C.push(0,0,1),h.push(v/o),h.push(1-g/a)}}for(let g=0;g<a;g++)for(let M=0;M<o;M++){const v=M+c*g,_=M+c*(g+1),N=M+1+c*(g+1),T=M+1+c*g;f.push(v,_,T),f.push(_,N,T)}this.setIndex(f),this.setAttribute("position",new Vn(m,3)),this.setAttribute("normal",new Vn(C,3)),this.setAttribute("uv",new Vn(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jn extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ig extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qg extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const go={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class _g{constructor(t,e,i){const A=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(l){o++,r===!1&&A.onStart!==void 0&&A.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,A.onProgress!==void 0&&A.onProgress(l,s,o),s===o&&(r=!1,A.onLoad!==void 0&&A.onLoad())},this.itemError=function(l){A.onError!==void 0&&A.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,d){return c.push(l,d),this},this.removeHandler=function(l){const d=c.indexOf(l);return d!==-1&&c.splice(d,2),this},this.getHandler=function(l){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(l))return m}return null}}}const Dg=new _g;class Bs{constructor(t){this.manager=t!==void 0?t:Dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(A,r){i.load(t,A,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";class vg extends Bs{constructor(t){super(t)}load(t,e,i,A){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=go.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=zi("img");function a(){l(),go.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){l(),A&&A(d),r.manager.itemError(t),r.manager.itemEnd(t)}function l(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class xg extends Bs{constructor(t){super(t)}load(t,e,i,A){const r=new Ce,s=new vg(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,A),r}}class xa extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const lr=new re,uo=new L,ho=new L;class Sg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;uo.setFromMatrixPosition(t.matrixWorld),e.position.copy(uo),ho.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ho),e.updateMatrixWorld(),lr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sa extends _a{constructor(t=-1,e=1,i=1,A=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=A,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,A,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=A,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,A=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=A+e,a=A-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Mg extends Sg{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yg extends xa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Mg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Og extends xa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tg extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function fo(n,t,e,i){const A=bg(i);switch(e){case sa:return n*t;case aa:return n*t;case ca:return n*t*2;case la:return n*t/A.components*A.byteLength;case hs:return n*t/A.components*A.byteLength;case ga:return n*t*2/A.components*A.byteLength;case fs:return n*t*2/A.components*A.byteLength;case oa:return n*t*3/A.components*A.byteLength;case Ke:return n*t*4/A.components*A.byteLength;case ps:return n*t*4/A.components*A.byteLength;case vA:case xA:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case SA:case MA:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case br:case Nr:return Math.max(n,16)*Math.max(t,8)/4;case Tr:case wr:return Math.max(n,8)*Math.max(t,8)/2;case Hr:case Rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ur:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case zr:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Vr:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case kr:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Wr:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Xr:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case qr:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jr:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Zr:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case yA:case Jr:case $r:return Math.ceil(n/4)*Math.ceil(t/4)*16;case da:case ts:return Math.ceil(n/4)*Math.ceil(t/4)*8;case es:case ns:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bg(n){switch(n){case fn:case ia:return{byteLength:1,components:1};case Gi:case Aa:case Xi:return{byteLength:2,components:1};case ds:case us:return{byteLength:2,components:4};case Wn:case gs:case cn:return{byteLength:4,components:1};case ra:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ls}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ls);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ma(){let n=null,t=!1,e=null,i=null;function A(r,s){e(r,s),i=n.requestAnimationFrame(A)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(A),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function wg(n){const t=new WeakMap;function e(o,a){const c=o.array,l=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(a,u),n.bufferData(a,c,l),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,a,c){const l=a.array,d=a.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,l);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],C=d[f];C.start<=m.start+m.count+1?m.count=Math.max(m.count,C.start+C.count-m.start):(++u,d[u]=C)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const C=d[f];n.bufferSubData(c,C.start*l.BYTES_PER_ELEMENT,l,C.start,C.count)}a.clearUpdateRanges()}a.onUploadCallback()}function A(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const a=t.get(o);a&&(n.deleteBuffer(a.buffer),t.delete(o))}function s(o,a){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,a));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,a),c.version=o.version}}return{get:A,remove:r,update:s}}var Ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,id=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ad=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",gd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Id=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Md=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Au=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ru=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,su=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ou=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,au=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,du=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Eu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Iu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_u=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Su=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ru=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ku=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ku=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ju=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ju=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$u=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,th=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ih=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ah=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ah=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ch=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:Ng,alphahash_pars_fragment:Hg,alphamap_fragment:Rg,alphamap_pars_fragment:Pg,alphatest_fragment:Lg,alphatest_pars_fragment:Ug,aomap_fragment:Fg,aomap_pars_fragment:Gg,batching_pars_vertex:zg,batching_vertex:Vg,begin_vertex:kg,beginnormal_vertex:Yg,bsdfs:Wg,iridescence_fragment:Xg,bumpmap_pars_fragment:Kg,clipping_planes_fragment:qg,clipping_planes_pars_fragment:jg,clipping_planes_pars_vertex:Zg,clipping_planes_vertex:Jg,color_fragment:$g,color_pars_fragment:td,color_pars_vertex:ed,color_vertex:nd,common:id,cube_uv_reflection_fragment:Ad,defaultnormal_vertex:rd,displacementmap_pars_vertex:sd,displacementmap_vertex:od,emissivemap_fragment:ad,emissivemap_pars_fragment:cd,colorspace_fragment:ld,colorspace_pars_fragment:gd,envmap_fragment:dd,envmap_common_pars_fragment:ud,envmap_pars_fragment:hd,envmap_pars_vertex:fd,envmap_physical_pars_fragment:xd,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:Ed,fog_fragment:Bd,fog_pars_fragment:Cd,gradientmap_pars_fragment:Id,lightmap_pars_fragment:Qd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:Dd,lights_pars_begin:vd,lights_toon_fragment:Sd,lights_toon_pars_fragment:Md,lights_phong_fragment:yd,lights_phong_pars_fragment:Od,lights_physical_fragment:Td,lights_physical_pars_fragment:bd,lights_fragment_begin:wd,lights_fragment_maps:Nd,lights_fragment_end:Hd,logdepthbuf_fragment:Rd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Ud,map_fragment:Fd,map_pars_fragment:Gd,map_particle_fragment:zd,map_particle_pars_fragment:Vd,metalnessmap_fragment:kd,metalnessmap_pars_fragment:Yd,morphinstance_vertex:Wd,morphcolor_vertex:Xd,morphnormal_vertex:Kd,morphtarget_pars_vertex:qd,morphtarget_vertex:jd,normal_fragment_begin:Zd,normal_fragment_maps:Jd,normal_pars_fragment:$d,normal_pars_vertex:tu,normal_vertex:eu,normalmap_pars_fragment:nu,clearcoat_normal_fragment_begin:iu,clearcoat_normal_fragment_maps:Au,clearcoat_pars_fragment:ru,iridescence_pars_fragment:su,opaque_fragment:ou,packing:au,premultiplied_alpha_fragment:cu,project_vertex:lu,dithering_fragment:gu,dithering_pars_fragment:du,roughnessmap_fragment:uu,roughnessmap_pars_fragment:hu,shadowmap_pars_fragment:fu,shadowmap_pars_vertex:pu,shadowmap_vertex:mu,shadowmask_pars_fragment:Eu,skinbase_vertex:Bu,skinning_pars_vertex:Cu,skinning_vertex:Iu,skinnormal_vertex:Qu,specularmap_fragment:_u,specularmap_pars_fragment:Du,tonemapping_fragment:vu,tonemapping_pars_fragment:xu,transmission_fragment:Su,transmission_pars_fragment:Mu,uv_pars_fragment:yu,uv_pars_vertex:Ou,uv_vertex:Tu,worldpos_vertex:bu,background_vert:wu,background_frag:Nu,backgroundCube_vert:Hu,backgroundCube_frag:Ru,cube_vert:Pu,cube_frag:Lu,depth_vert:Uu,depth_frag:Fu,distanceRGBA_vert:Gu,distanceRGBA_frag:zu,equirect_vert:Vu,equirect_frag:ku,linedashed_vert:Yu,linedashed_frag:Wu,meshbasic_vert:Xu,meshbasic_frag:Ku,meshlambert_vert:qu,meshlambert_frag:ju,meshmatcap_vert:Zu,meshmatcap_frag:Ju,meshnormal_vert:$u,meshnormal_frag:th,meshphong_vert:eh,meshphong_frag:nh,meshphysical_vert:ih,meshphysical_frag:Ah,meshtoon_vert:rh,meshtoon_frag:sh,points_vert:oh,points_frag:ah,shadow_vert:ch,shadow_frag:lh,sprite_vert:gh,sprite_frag:dh},et={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},je={basic:{uniforms:_e([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:_e([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:_e([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:_e([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:_e([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:_e([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:_e([et.points,et.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:_e([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:_e([et.common,et.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:_e([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:_e([et.sprite,et.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:_e([et.common,et.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:_e([et.lights,et.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};je.physical={uniforms:_e([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const QA={r:0,b:0,g:0},Rn=new Je,uh=new re;function hh(n,t,e,i,A,r,s){const o=new Vt(0);let a=r===!0?0:1,c,l,d=null,u=0,f=null;function m(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function C(v){let _=!1;const N=m(v);N===null?g(o,a):N&&N.isColor&&(g(N,1),_=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(v,_){const N=m(_);N&&(N.isCubeTexture||N.mapping===NA)?(l===void 0&&(l=new we(new Oi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:xi(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:ye,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,D,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),A.update(l)),Rn.copy(_.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),l.material.uniforms.envMap.value=N,l.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(uh.makeRotationFromEuler(Rn)),l.material.toneMapped=zt.getTransfer(N.colorSpace)!==Kt,(d!==N||u!==N.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=N,u=N.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new we(new Ti(2,2),new Mn({name:"BackgroundMaterial",uniforms:xi(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),A.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=zt.getTransfer(N.colorSpace)!==Kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(d!==N||u!==N.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=N,u=N.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,_){v.getRGB(QA,Qa(n)),i.buffers.color.setClear(QA.r,QA.g,QA.b,_,s)}function M(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:C,addToRenderList:h,dispose:M}}function fh(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},A=u(null);let r=A,s=!1;function o(B,y,z,U,K){let q=!1;const Y=d(U,z,y);r!==Y&&(r=Y,c(r.object)),q=f(B,U,z,K),q&&m(B,U,z,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,_(B,y,z,U),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function a(){return n.createVertexArray()}function c(B){return n.bindVertexArray(B)}function l(B){return n.deleteVertexArray(B)}function d(B,y,z){const U=z.wireframe===!0;let K=i[B.id];K===void 0&&(K={},i[B.id]=K);let q=K[y.id];q===void 0&&(q={},K[y.id]=q);let Y=q[U];return Y===void 0&&(Y=u(a()),q[U]=Y),Y}function u(B){const y=[],z=[],U=[];for(let K=0;K<e;K++)y[K]=0,z[K]=0,U[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:z,attributeDivisors:U,object:B,attributes:{},index:null}}function f(B,y,z,U){const K=r.attributes,q=y.attributes;let Y=0;const Z=z.getAttributes();for(const G in Z)if(Z[G].location>=0){const lt=K[G];let Et=q[G];if(Et===void 0&&(G==="instanceMatrix"&&B.instanceMatrix&&(Et=B.instanceMatrix),G==="instanceColor"&&B.instanceColor&&(Et=B.instanceColor)),lt===void 0||lt.attribute!==Et||Et&&lt.data!==Et.data)return!0;Y++}return r.attributesNum!==Y||r.index!==U}function m(B,y,z,U){const K={},q=y.attributes;let Y=0;const Z=z.getAttributes();for(const G in Z)if(Z[G].location>=0){let lt=q[G];lt===void 0&&(G==="instanceMatrix"&&B.instanceMatrix&&(lt=B.instanceMatrix),G==="instanceColor"&&B.instanceColor&&(lt=B.instanceColor));const Et={};Et.attribute=lt,lt&&lt.data&&(Et.data=lt.data),K[G]=Et,Y++}r.attributes=K,r.attributesNum=Y,r.index=U}function C(){const B=r.newAttributes;for(let y=0,z=B.length;y<z;y++)B[y]=0}function h(B){g(B,0)}function g(B,y){const z=r.newAttributes,U=r.enabledAttributes,K=r.attributeDivisors;z[B]=1,U[B]===0&&(n.enableVertexAttribArray(B),U[B]=1),K[B]!==y&&(n.vertexAttribDivisor(B,y),K[B]=y)}function M(){const B=r.newAttributes,y=r.enabledAttributes;for(let z=0,U=y.length;z<U;z++)y[z]!==B[z]&&(n.disableVertexAttribArray(z),y[z]=0)}function v(B,y,z,U,K,q,Y){Y===!0?n.vertexAttribIPointer(B,y,z,K,q):n.vertexAttribPointer(B,y,z,U,K,q)}function _(B,y,z,U){C();const K=U.attributes,q=z.getAttributes(),Y=y.defaultAttributeValues;for(const Z in q){const G=q[Z];if(G.location>=0){let At=K[Z];if(At===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(At=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(At=B.instanceColor)),At!==void 0){const lt=At.normalized,Et=At.itemSize,bt=t.get(At);if(bt===void 0)continue;const qt=bt.buffer,k=bt.type,tt=bt.bytesPerElement,ft=k===n.INT||k===n.UNSIGNED_INT||At.gpuType===gs;if(At.isInterleavedBufferAttribute){const rt=At.data,_t=rt.stride,xt=At.offset;if(rt.isInstancedInterleavedBuffer){for(let wt=0;wt<G.locationSize;wt++)g(G.location+wt,rt.meshPerAttribute);B.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let wt=0;wt<G.locationSize;wt++)h(G.location+wt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let wt=0;wt<G.locationSize;wt++)v(G.location+wt,Et/G.locationSize,k,lt,_t*tt,(xt+Et/G.locationSize*wt)*tt,ft)}else{if(At.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)g(G.location+rt,At.meshPerAttribute);B.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let rt=0;rt<G.locationSize;rt++)h(G.location+rt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let rt=0;rt<G.locationSize;rt++)v(G.location+rt,Et/G.locationSize,k,lt,Et*tt,Et/G.locationSize*rt*tt,ft)}}else if(Y!==void 0){const lt=Y[Z];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(G.location,lt);break;case 3:n.vertexAttrib3fv(G.location,lt);break;case 4:n.vertexAttrib4fv(G.location,lt);break;default:n.vertexAttrib1fv(G.location,lt)}}}}M()}function N(){S();for(const B in i){const y=i[B];for(const z in y){const U=y[z];for(const K in U)l(U[K].object),delete U[K];delete y[z]}delete i[B]}}function T(B){if(i[B.id]===void 0)return;const y=i[B.id];for(const z in y){const U=y[z];for(const K in U)l(U[K].object),delete U[K];delete y[z]}delete i[B.id]}function D(B){for(const y in i){const z=i[y];if(z[B.id]===void 0)continue;const U=z[B.id];for(const K in U)l(U[K].object),delete U[K];delete z[B.id]}}function S(){I(),s=!0,r!==A&&(r=A,c(r.object))}function I(){A.geometry=null,A.program=null,A.wireframe=!1}return{setup:o,reset:S,resetDefaultState:I,dispose:N,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:C,enableAttribute:h,disableUnusedAttributes:M}}function ph(n,t,e){let i;function A(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function s(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),e.update(l,i,d))}function o(c,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let f=0;for(let m=0;m<d;m++)f+=l[m];e.update(f,i,1)}function a(c,l,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)s(c[m],l[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,l,0,u,0,d);let m=0;for(let C=0;C<d;C++)m+=l[C]*u[C];e.update(m,i,1)}}this.setMode=A,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=a}function mh(n,t,e,i){let A;function r(){if(A!==void 0)return A;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");A=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else A=0;return A}function s(D){return!(D!==Ke&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const S=D===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==fn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==cn&&!S)}function a(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const l=a(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=m>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:C,maxCubemapSize:h,maxAttributes:g,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:N,maxSamples:T}}function Eh(n){const t=this;let e=null,i=0,A=!1,r=!1;const s=new Ln,o=new yt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||A;return A=u,i=d.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=l(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,C=d.clipIntersection,h=d.clipShadows,g=n.get(d);if(!A||m===null||m.length===0||r&&!h)r?l(null):c();else{const M=r?0:i,v=M*4;let _=g.clippingState||null;a.value=_,_=l(m,u,v,f);for(let N=0;N!==v;++N)_[N]=e[N];g.clippingState=_,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=M}};function c(){a.value!==e&&(a.value=e,a.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function l(d,u,f,m){const C=d!==null?d.length:0;let h=null;if(C!==0){if(h=a.value,m!==!0||h===null){const g=f+C*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(h===null||h.length<g)&&(h=new Float32Array(g));for(let v=0,_=f;v!==C;++v,_+=4)s.copy(d[v]).applyMatrix4(M,o),s.normal.toArray(h,_),h[_+3]=s.constant}a.value=h,a.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,h}}function Bh(n){let t=new WeakMap;function e(s,o){return o===Sr?s.mapping=Ii:o===Mr&&(s.mapping=Qi),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Sr||o===Mr)if(t.has(s)){const a=t.get(s).texture;return e(a,s.mapping)}else{const a=s.image;if(a&&a.height>0){const c=new pg(a.height);return c.fromEquirectangularTexture(n,s),t.set(s,c),s.addEventListener("dispose",A),e(c.texture,s.mapping)}else return null}}return s}function A(s){const o=s.target;o.removeEventListener("dispose",A);const a=t.get(o);a!==void 0&&(t.delete(o),a.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const pi=4,po=[.125,.215,.35,.446,.526,.582],Gn=20,gr=new Sa,mo=new Vt;let dr=null,ur=0,hr=0,fr=!1;const Un=(1+Math.sqrt(5))/2,hi=1/Un,Eo=[new L(-Un,hi,0),new L(Un,hi,0),new L(-hi,0,Un),new L(hi,0,Un),new L(0,Un,-hi),new L(0,Un,hi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Bo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,A=100){dr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,A,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dr,ur,hr),this._renderer.xr.enabled=fr,t.scissorTest=!1,_A(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Xi,format:Ke,colorSpace:vi,depthBuffer:!1},A=Co(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Co(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ch(r)),this._blurMaterial=Ih(r,t,e)}return A}_compileMaterial(t){const e=new we(this._lodPlanes[0],t);this._renderer.compile(e,gr)}_sceneToCubeUV(t,e,i,A){const o=new Le(90,1,e,i),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,u=l.toneMapping;l.getClearColor(mo),l.toneMapping=vn,l.autoClear=!1;const f=new jn({name:"PMREM.Background",side:ye,depthWrite:!1,depthTest:!1}),m=new we(new Oi,f);let C=!1;const h=t.background;h?h.isColor&&(f.color.copy(h),t.background=null,C=!0):(f.color.copy(mo),C=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(o.up.set(0,a[g],0),o.lookAt(c[g],0,0)):M===1?(o.up.set(0,0,a[g]),o.lookAt(0,c[g],0)):(o.up.set(0,a[g],0),o.lookAt(0,0,c[g]));const v=this._cubeSize;_A(A,M*v,g>2?v:0,v,v),l.setRenderTarget(A),C&&l.render(m,o),l.render(t,o)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=u,l.autoClear=d,t.background=h}_textureToCubeUV(t,e){const i=this._renderer,A=t.mapping===Ii||t.mapping===Qi;A?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());const r=A?this._cubemapMaterial:this._equirectMaterial,s=new we(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const a=this._cubeSize;_A(e,0,0,3*a,2*a),i.setRenderTarget(e),i.render(s,gr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const A=this._lodPlanes.length;for(let r=1;r<A;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Eo[(A-r-1)%Eo.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,A,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,i,A,"latitudinal",r),this._halfBlur(s,t,i,i,A,"longitudinal",r)}_halfBlur(t,e,i,A,r,s,o){const a=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new we(this._lodPlanes[A],c),u=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gn-1),C=r/m,h=isFinite(r)?1+Math.floor(l*C):Gn;h>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Gn}`);const g=[];let M=0;for(let D=0;D<Gn;++D){const S=D/C,I=Math.exp(-S*S/2);g.push(I),D===0?M+=I:D<h&&(M+=2*I)}for(let D=0;D<g.length;D++)g[D]=g[D]/M;u.envMap.value=t.texture,u.samples.value=h,u.weights.value=g,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-i;const _=this._sizeLods[A],N=3*_*(A>v-pi?A-v+pi:0),T=4*(this._cubeSize-_);_A(e,N,T,3*_,2*_),a.setRenderTarget(e),a.render(d,gr)}}function Ch(n){const t=[],e=[],i=[];let A=n;const r=n-pi+1+po.length;for(let s=0;s<r;s++){const o=Math.pow(2,A);e.push(o);let a=1/o;s>n-pi?a=po[s-n+pi-1]:s===0&&(a=0),i.push(a);const c=1/(o-2),l=-c,d=1+c,u=[l,l,d,l,d,d,l,l,d,d,l,d],f=6,m=6,C=3,h=2,g=1,M=new Float32Array(C*m*f),v=new Float32Array(h*m*f),_=new Float32Array(g*m*f);for(let T=0;T<f;T++){const D=T%3*2/3-1,S=T>2?0:-1,I=[D,S,0,D+2/3,S,0,D+2/3,S+1,0,D,S,0,D+2/3,S+1,0,D,S+1,0];M.set(I,C*m*T),v.set(u,h*m*T);const B=[T,T,T,T,T,T];_.set(B,g*m*T)}const N=new Zn;N.setAttribute("position",new Ze(M,C)),N.setAttribute("uv",new Ze(v,h)),N.setAttribute("faceIndex",new Ze(_,g)),t.push(N),A>pi&&A--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Co(n,t,e){const i=new Xn(n,t,e);return i.texture.mapping=NA,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _A(n,t,e,i,A){n.viewport.set(t,e,i,A),n.scissor.set(t,e,i,A)}function Ih(n,t,e){const i=new Float32Array(Gn),A=new L(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:A}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Io(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Qo(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Cs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qh(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const a=o.mapping,c=a===Sr||a===Mr,l=a===Ii||a===Qi;if(c||l){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Bo(n)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||l&&f&&A(f)?(e===null&&(e=new Bo(n)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function A(o){let a=0;const c=6;for(let l=0;l<c;l++)o[l]!==void 0&&a++;return a===c}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:s}}function _h(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let A;switch(i){case"WEBGL_depth_texture":A=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":A=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":A=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":A=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:A=n.getExtension(i)}return t[i]=A,A}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const A=e(i);return A===null&&fi("THREE.WebGLRenderer: "+i+" extension not supported."),A}}}function Dh(n,t,e,i){const A={},r=new WeakMap;function s(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",s),delete A[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return A[u.id]===!0||(u.addEventListener("dispose",s),A[u.id]=!0,e.memory.geometries++),u}function a(d){const u=d.attributes;for(const f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,m=d.attributes.position;let C=0;if(f!==null){const M=f.array;C=f.version;for(let v=0,_=M.length;v<_;v+=3){const N=M[v+0],T=M[v+1],D=M[v+2];u.push(N,T,T,D,D,N)}}else if(m!==void 0){const M=m.array;C=m.version;for(let v=0,_=M.length/3-1;v<_;v+=3){const N=v+0,T=v+1,D=v+2;u.push(N,T,T,D,D,N)}}else return;const h=new(fa(u)?Ia:Ca)(u,1);h.version=C;const g=r.get(d);g&&t.remove(g),r.set(d,h)}function l(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:a,getWireframeAttribute:l}}function vh(n,t,e){let i;function A(u){i=u}let r,s;function o(u){r=u.type,s=u.bytesPerElement}function a(u,f){n.drawElements(i,f,r,u*s),e.update(f,i,1)}function c(u,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,u*s,m),e.update(f,i,m))}function l(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,m);let h=0;for(let g=0;g<m;g++)h+=f[g];e.update(h,i,1)}function d(u,f,m,C){if(m===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<u.length;g++)c(u[g]/s,f[g],C[g]);else{h.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,C,0,m);let g=0;for(let M=0;M<m;M++)g+=f[M]*C[M];e.update(g,i,1)}}this.setMode=A,this.setIndex=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function xh(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function A(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:A,update:i}}function Sh(n,t,e){const i=new WeakMap,A=new Ae;function r(s,o,a){const c=s.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let B=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",B)};var f=B;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,C=o.morphAttributes.normal!==void 0,h=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),C===!0&&(_=2),h===!0&&(_=3);let N=o.attributes.position.count*_,T=1;N>t.maxTextureSize&&(T=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const D=new Float32Array(N*T*4*d),S=new ma(D,N,T,d);S.type=cn,S.needsUpdate=!0;const I=_*4;for(let y=0;y<d;y++){const z=g[y],U=M[y],K=v[y],q=N*T*4*y;for(let Y=0;Y<z.count;Y++){const Z=Y*I;m===!0&&(A.fromBufferAttribute(z,Y),D[q+Z+0]=A.x,D[q+Z+1]=A.y,D[q+Z+2]=A.z,D[q+Z+3]=0),C===!0&&(A.fromBufferAttribute(U,Y),D[q+Z+4]=A.x,D[q+Z+5]=A.y,D[q+Z+6]=A.z,D[q+Z+7]=0),h===!0&&(A.fromBufferAttribute(K,Y),D[q+Z+8]=A.x,D[q+Z+9]=A.y,D[q+Z+10]=A.z,D[q+Z+11]=K.itemSize===4?A.w:1)}}u={count:d,texture:S,size:new Wt(N,T)},i.set(o,u),o.addEventListener("dispose",B)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)a.getUniforms().setValue(n,"morphTexture",s.morphTexture,e);else{let m=0;for(let h=0;h<c.length;h++)m+=c[h];const C=o.morphTargetsRelative?1:1-m;a.getUniforms().setValue(n,"morphTargetBaseInfluence",C),a.getUniforms().setValue(n,"morphTargetInfluences",c)}a.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),a.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Mh(n,t,e,i){let A=new WeakMap;function r(a){const c=i.render.frame,l=a.geometry,d=t.get(a,l);if(A.get(d)!==c&&(t.update(d),A.set(d,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),A.get(a)!==c&&(e.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,n.ARRAY_BUFFER),A.set(a,c))),a.isSkinnedMesh){const u=a.skeleton;A.get(u)!==c&&(u.update(),A.set(u,c))}return d}function s(){A=new WeakMap}function o(a){const c=a.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:s}}const ya=new Ce,_o=new va(1,1),Oa=new ma,Ta=new $l,ba=new Da,Do=[],vo=[],xo=new Float32Array(16),So=new Float32Array(9),Mo=new Float32Array(4);function bi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const A=t*e;let r=Do[A];if(r===void 0&&(r=new Float32Array(A),Do[A]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=e,n[s].toArray(r,o)}return r}function le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function HA(n,t){let e=vo[t];e===void 0&&(e=new Int32Array(t),vo[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function yh(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Oh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2fv(this.addr,t),ge(e,t)}}function Th(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;n.uniform3fv(this.addr,t),ge(e,t)}}function bh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4fv(this.addr,t),ge(e,t)}}function wh(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(le(e,i))return;Mo.set(i),n.uniformMatrix2fv(this.addr,!1,Mo),ge(e,i)}}function Nh(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(le(e,i))return;So.set(i),n.uniformMatrix3fv(this.addr,!1,So),ge(e,i)}}function Hh(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(le(e,i))return;xo.set(i),n.uniformMatrix4fv(this.addr,!1,xo),ge(e,i)}}function Rh(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ph(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2iv(this.addr,t),ge(e,t)}}function Lh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;n.uniform3iv(this.addr,t),ge(e,t)}}function Uh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4iv(this.addr,t),ge(e,t)}}function Fh(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Gh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2uiv(this.addr,t),ge(e,t)}}function zh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;n.uniform3uiv(this.addr,t),ge(e,t)}}function Vh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4uiv(this.addr,t),ge(e,t)}}function kh(n,t,e){const i=this.cache,A=e.allocateTextureUnit();i[0]!==A&&(n.uniform1i(this.addr,A),i[0]=A);let r;this.type===n.SAMPLER_2D_SHADOW?(_o.compareFunction=ha,r=_o):r=ya,e.setTexture2D(t||r,A)}function Yh(n,t,e){const i=this.cache,A=e.allocateTextureUnit();i[0]!==A&&(n.uniform1i(this.addr,A),i[0]=A),e.setTexture3D(t||Ta,A)}function Wh(n,t,e){const i=this.cache,A=e.allocateTextureUnit();i[0]!==A&&(n.uniform1i(this.addr,A),i[0]=A),e.setTextureCube(t||ba,A)}function Xh(n,t,e){const i=this.cache,A=e.allocateTextureUnit();i[0]!==A&&(n.uniform1i(this.addr,A),i[0]=A),e.setTexture2DArray(t||Oa,A)}function Kh(n){switch(n){case 5126:return yh;case 35664:return Oh;case 35665:return Th;case 35666:return bh;case 35674:return wh;case 35675:return Nh;case 35676:return Hh;case 5124:case 35670:return Rh;case 35667:case 35671:return Ph;case 35668:case 35672:return Lh;case 35669:case 35673:return Uh;case 5125:return Fh;case 36294:return Gh;case 36295:return zh;case 36296:return Vh;case 35678:case 36198:case 36298:case 36306:case 35682:return kh;case 35679:case 36299:case 36307:return Yh;case 35680:case 36300:case 36308:case 36293:return Wh;case 36289:case 36303:case 36311:case 36292:return Xh}}function qh(n,t){n.uniform1fv(this.addr,t)}function jh(n,t){const e=bi(t,this.size,2);n.uniform2fv(this.addr,e)}function Zh(n,t){const e=bi(t,this.size,3);n.uniform3fv(this.addr,e)}function Jh(n,t){const e=bi(t,this.size,4);n.uniform4fv(this.addr,e)}function $h(n,t){const e=bi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function tf(n,t){const e=bi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ef(n,t){const e=bi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function nf(n,t){n.uniform1iv(this.addr,t)}function Af(n,t){n.uniform2iv(this.addr,t)}function rf(n,t){n.uniform3iv(this.addr,t)}function sf(n,t){n.uniform4iv(this.addr,t)}function of(n,t){n.uniform1uiv(this.addr,t)}function af(n,t){n.uniform2uiv(this.addr,t)}function cf(n,t){n.uniform3uiv(this.addr,t)}function lf(n,t){n.uniform4uiv(this.addr,t)}function gf(n,t,e){const i=this.cache,A=t.length,r=HA(e,A);le(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let s=0;s!==A;++s)e.setTexture2D(t[s]||ya,r[s])}function df(n,t,e){const i=this.cache,A=t.length,r=HA(e,A);le(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let s=0;s!==A;++s)e.setTexture3D(t[s]||Ta,r[s])}function uf(n,t,e){const i=this.cache,A=t.length,r=HA(e,A);le(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let s=0;s!==A;++s)e.setTextureCube(t[s]||ba,r[s])}function hf(n,t,e){const i=this.cache,A=t.length,r=HA(e,A);le(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let s=0;s!==A;++s)e.setTexture2DArray(t[s]||Oa,r[s])}function ff(n){switch(n){case 5126:return qh;case 35664:return jh;case 35665:return Zh;case 35666:return Jh;case 35674:return $h;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return Af;case 35668:case 35672:return rf;case 35669:case 35673:return sf;case 5125:return of;case 36294:return af;case 36295:return cf;case 36296:return lf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return uf;case 36289:case 36303:case 36311:case 36292:return hf}}class pf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Kh(e.type)}}class mf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ff(e.type)}}class Ef{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const A=this.seq;for(let r=0,s=A.length;r!==s;++r){const o=A[r];o.setValue(t,e[o.id],i)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function yo(n,t){n.seq.push(t),n.map[t.id]=t}function Bf(n,t,e){const i=n.name,A=i.length;for(pr.lastIndex=0;;){const r=pr.exec(i),s=pr.lastIndex;let o=r[1];const a=r[2]==="]",c=r[3];if(a&&(o=o|0),c===void 0||c==="["&&s+2===A){yo(e,c===void 0?new pf(o,n,t):new mf(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Ef(o),yo(e,d)),e=d}}}class OA{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let A=0;A<i;++A){const r=t.getActiveUniform(e,A),s=t.getUniformLocation(e,r.name);Bf(r,s,this)}}setValue(t,e,i,A){const r=this.map[e];r!==void 0&&r.setValue(t,i,A)}setOptional(t,e,i){const A=e[i];A!==void 0&&this.setValue(t,i,A)}static upload(t,e,i,A){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=i[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,A)}}static seqWithValue(t,e){const i=[];for(let A=0,r=t.length;A!==r;++A){const s=t[A];s.id in e&&i.push(s)}return i}}function Oo(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Cf=37297;let If=0;function Qf(n,t){const e=n.split(`
`),i=[],A=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=A;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return i.join(`
`)}const To=new yt;function _f(n){zt._getMatrix(To,zt.workingColorSpace,n);const t=`mat3( ${To.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(n)){case TA:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function bo(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),A=n.getShaderInfoLog(t).trim();if(i&&A==="")return"";const r=/ERROR: 0:(\d+)/.exec(A);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+A+`

`+Qf(n.getShaderSource(t),s)}else return A}function Df(n,t){const e=_f(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vf(n,t){let e;switch(t){case vl:e="Linear";break;case xl:e="Reinhard";break;case Sl:e="Cineon";break;case Ml:e="ACESFilmic";break;case Ol:e="AgX";break;case Tl:e="Neutral";break;case yl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const DA=new L;function xf(){zt.getLuminanceCoefficients(DA);const n=DA.x.toFixed(4),t=DA.y.toFixed(4),e=DA.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function Mf(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function yf(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let A=0;A<i;A++){const r=n.getActiveAttrib(t,A),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[s]={type:r.type,location:n.getAttribLocation(t,s),locationSize:o}}return e}function Fi(n){return n!==""}function wo(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function No(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Of=/^[ \t]*#include +<([\w\d./]+)>/gm;function As(n){return n.replace(Of,bf)}const Tf=new Map;function bf(n,t){let e=Tt[t];if(e===void 0){const i=Tf.get(t);if(i!==void 0)e=Tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return As(e)}const wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ho(n){return n.replace(wf,Nf)}function Nf(n,t,e,i){let A="";for(let r=parseInt(t);r<parseInt(e);r++)A+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return A}function Ro(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hf(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ta?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Al?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function Rf(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ii:case Qi:t="ENVMAP_TYPE_CUBE";break;case NA:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pf(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function Lf(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ea:t="ENVMAP_BLENDING_MULTIPLY";break;case _l:t="ENVMAP_BLENDING_MIX";break;case Dl:t="ENVMAP_BLENDING_ADD";break}return t}function Uf(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ff(n,t,e,i){const A=n.getContext(),r=e.defines;let s=e.vertexShader,o=e.fragmentShader;const a=Hf(e),c=Rf(e),l=Pf(e),d=Lf(e),u=Uf(e),f=Sf(e),m=Mf(r),C=A.createProgram();let h,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Fi).join(`
`),h.length>0&&(h+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Fi).join(`
`),g.length>0&&(g+=`
`)):(h=[Ro(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),g=[Ro(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Tt.tonemapping_pars_fragment:"",e.toneMapping!==vn?vf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,Df("linearToOutputTexel",e.outputColorSpace),xf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fi).join(`
`)),s=As(s),s=wo(s,e),s=No(s,e),o=As(o),o=wo(o,e),o=No(o,e),s=Ho(s),o=Ho(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",e.glslVersion===Xs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=M+h+s,_=M+g+o,N=Oo(A,A.VERTEX_SHADER,v),T=Oo(A,A.FRAGMENT_SHADER,_);A.attachShader(C,N),A.attachShader(C,T),e.index0AttributeName!==void 0?A.bindAttribLocation(C,0,e.index0AttributeName):e.morphTargets===!0&&A.bindAttribLocation(C,0,"position"),A.linkProgram(C);function D(y){if(n.debug.checkShaderErrors){const z=A.getProgramInfoLog(C).trim(),U=A.getShaderInfoLog(N).trim(),K=A.getShaderInfoLog(T).trim();let q=!0,Y=!0;if(A.getProgramParameter(C,A.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(A,C,N,T);else{const Z=bo(A,N,"vertex"),G=bo(A,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+A.getError()+" - VALIDATE_STATUS "+A.getProgramParameter(C,A.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+z+`
`+Z+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(U===""||K==="")&&(Y=!1);Y&&(y.diagnostics={runnable:q,programLog:z,vertexShader:{log:U,prefix:h},fragmentShader:{log:K,prefix:g}})}A.deleteShader(N),A.deleteShader(T),S=new OA(A,C),I=yf(A,C)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let I;this.getAttributes=function(){return I===void 0&&D(this),I};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=A.getProgramParameter(C,Cf)),B},this.destroy=function(){i.releaseStatesOfProgram(this),A.deleteProgram(C),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=If++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=N,this.fragmentShader=T,this}let Gf=0;class zf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,A=this._getShaderStage(e),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(A)===!1&&(s.add(A),A.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Vf(t),e.set(t,i)),i}}class Vf{constructor(t){this.id=Gf++,this.code=t,this.usedTimes=0}}function kf(n,t,e,i,A,r,s){const o=new Ea,a=new zf,c=new Set,l=[],d=A.logarithmicDepthBuffer,u=A.vertexTextures;let f=A.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(I){return c.add(I),I===0?"uv":`uv${I}`}function h(I,B,y,z,U){const K=z.fog,q=U.geometry,Y=I.isMeshStandardMaterial?z.environment:null,Z=(I.isMeshStandardMaterial?e:t).get(I.envMap||Y),G=Z&&Z.mapping===NA?Z.image.height:null,At=m[I.type];I.precision!==null&&(f=A.getMaxPrecision(I.precision),f!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",f,"instead."));const lt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Et=lt!==void 0?lt.length:0;let bt=0;q.morphAttributes.position!==void 0&&(bt=1),q.morphAttributes.normal!==void 0&&(bt=2),q.morphAttributes.color!==void 0&&(bt=3);let qt,k,tt,ft;if(At){const Xt=je[At];qt=Xt.vertexShader,k=Xt.fragmentShader}else qt=I.vertexShader,k=I.fragmentShader,a.update(I),tt=a.getVertexShaderID(I),ft=a.getFragmentShaderID(I);const rt=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),xt=U.isInstancedMesh===!0,wt=U.isBatchedMesh===!0,te=!!I.map,Lt=!!I.matcap,se=!!Z,x=!!I.aoMap,Ne=!!I.lightMap,Ht=!!I.bumpMap,Rt=!!I.normalMap,Bt=!!I.displacementMap,Zt=!!I.emissiveMap,mt=!!I.metalnessMap,Q=!!I.roughnessMap,p=I.anisotropy>0,H=I.clearcoat>0,W=I.dispersion>0,j=I.iridescence>0,V=I.sheen>0,pt=I.transmission>0,st=p&&!!I.anisotropyMap,gt=H&&!!I.clearcoatMap,Ut=H&&!!I.clearcoatNormalMap,$=H&&!!I.clearcoatRoughnessMap,dt=j&&!!I.iridescenceMap,Qt=j&&!!I.iridescenceThicknessMap,Dt=V&&!!I.sheenColorMap,ut=V&&!!I.sheenRoughnessMap,Pt=!!I.specularMap,Ot=!!I.specularColorMap,jt=!!I.specularIntensityMap,O=pt&&!!I.transmissionMap,nt=pt&&!!I.thicknessMap,F=!!I.gradientMap,X=!!I.alphaMap,at=I.alphaTest>0,ot=!!I.alphaHash,Mt=!!I.extensions;let ne=vn;I.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ne=n.toneMapping);const pe={shaderID:At,shaderType:I.type,shaderName:I.name,vertexShader:qt,fragmentShader:k,defines:I.defines,customVertexShaderID:tt,customFragmentShaderID:ft,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:f,batching:wt,batchingColor:wt&&U._colorsTexture!==null,instancing:xt,instancingColor:xt&&U.instanceColor!==null,instancingMorph:xt&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:vi,alphaToCoverage:!!I.alphaToCoverage,map:te,matcap:Lt,envMap:se,envMapMode:se&&Z.mapping,envMapCubeUVHeight:G,aoMap:x,lightMap:Ne,bumpMap:Ht,normalMap:Rt,displacementMap:u&&Bt,emissiveMap:Zt,normalMapObjectSpace:Rt&&I.normalMapType===Hl,normalMapTangentSpace:Rt&&I.normalMapType===ua,metalnessMap:mt,roughnessMap:Q,anisotropy:p,anisotropyMap:st,clearcoat:H,clearcoatMap:gt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:$,dispersion:W,iridescence:j,iridescenceMap:dt,iridescenceThicknessMap:Qt,sheen:V,sheenColorMap:Dt,sheenRoughnessMap:ut,specularMap:Pt,specularColorMap:Ot,specularIntensityMap:jt,transmission:pt,transmissionMap:O,thicknessMap:nt,gradientMap:F,opaque:I.transparent===!1&&I.blending===mi&&I.alphaToCoverage===!1,alphaMap:X,alphaTest:at,alphaHash:ot,combine:I.combine,mapUv:te&&C(I.map.channel),aoMapUv:x&&C(I.aoMap.channel),lightMapUv:Ne&&C(I.lightMap.channel),bumpMapUv:Ht&&C(I.bumpMap.channel),normalMapUv:Rt&&C(I.normalMap.channel),displacementMapUv:Bt&&C(I.displacementMap.channel),emissiveMapUv:Zt&&C(I.emissiveMap.channel),metalnessMapUv:mt&&C(I.metalnessMap.channel),roughnessMapUv:Q&&C(I.roughnessMap.channel),anisotropyMapUv:st&&C(I.anisotropyMap.channel),clearcoatMapUv:gt&&C(I.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&C(I.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&C(I.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&C(I.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&C(I.sheenColorMap.channel),sheenRoughnessMapUv:ut&&C(I.sheenRoughnessMap.channel),specularMapUv:Pt&&C(I.specularMap.channel),specularColorMapUv:Ot&&C(I.specularColorMap.channel),specularIntensityMapUv:jt&&C(I.specularIntensityMap.channel),transmissionMapUv:O&&C(I.transmissionMap.channel),thicknessMapUv:nt&&C(I.thicknessMap.channel),alphaMapUv:X&&C(I.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Rt||p),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(te||X),fog:!!K,useFog:I.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:_t,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:bt,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:I.dithering,shadowMapEnabled:n.shadowMap.enabled&&y.length>0,shadowMapType:n.shadowMap.type,toneMapping:ne,decodeVideoTexture:te&&I.map.isVideoTexture===!0&&zt.getTransfer(I.map.colorSpace)===Kt,decodeVideoTextureEmissive:Zt&&I.emissiveMap.isVideoTexture===!0&&zt.getTransfer(I.emissiveMap.colorSpace)===Kt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Ye,flipSided:I.side===ye,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Mt&&I.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&I.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function g(I){const B=[];if(I.shaderID?B.push(I.shaderID):(B.push(I.customVertexShaderID),B.push(I.customFragmentShaderID)),I.defines!==void 0)for(const y in I.defines)B.push(y),B.push(I.defines[y]);return I.isRawShaderMaterial===!1&&(M(B,I),v(B,I),B.push(n.outputColorSpace)),B.push(I.customProgramCacheKey),B.join()}function M(I,B){I.push(B.precision),I.push(B.outputColorSpace),I.push(B.envMapMode),I.push(B.envMapCubeUVHeight),I.push(B.mapUv),I.push(B.alphaMapUv),I.push(B.lightMapUv),I.push(B.aoMapUv),I.push(B.bumpMapUv),I.push(B.normalMapUv),I.push(B.displacementMapUv),I.push(B.emissiveMapUv),I.push(B.metalnessMapUv),I.push(B.roughnessMapUv),I.push(B.anisotropyMapUv),I.push(B.clearcoatMapUv),I.push(B.clearcoatNormalMapUv),I.push(B.clearcoatRoughnessMapUv),I.push(B.iridescenceMapUv),I.push(B.iridescenceThicknessMapUv),I.push(B.sheenColorMapUv),I.push(B.sheenRoughnessMapUv),I.push(B.specularMapUv),I.push(B.specularColorMapUv),I.push(B.specularIntensityMapUv),I.push(B.transmissionMapUv),I.push(B.thicknessMapUv),I.push(B.combine),I.push(B.fogExp2),I.push(B.sizeAttenuation),I.push(B.morphTargetsCount),I.push(B.morphAttributeCount),I.push(B.numDirLights),I.push(B.numPointLights),I.push(B.numSpotLights),I.push(B.numSpotLightMaps),I.push(B.numHemiLights),I.push(B.numRectAreaLights),I.push(B.numDirLightShadows),I.push(B.numPointLightShadows),I.push(B.numSpotLightShadows),I.push(B.numSpotLightShadowsWithMaps),I.push(B.numLightProbes),I.push(B.shadowMapType),I.push(B.toneMapping),I.push(B.numClippingPlanes),I.push(B.numClipIntersection),I.push(B.depthPacking)}function v(I,B){o.disableAll(),B.supportsVertexTextures&&o.enable(0),B.instancing&&o.enable(1),B.instancingColor&&o.enable(2),B.instancingMorph&&o.enable(3),B.matcap&&o.enable(4),B.envMap&&o.enable(5),B.normalMapObjectSpace&&o.enable(6),B.normalMapTangentSpace&&o.enable(7),B.clearcoat&&o.enable(8),B.iridescence&&o.enable(9),B.alphaTest&&o.enable(10),B.vertexColors&&o.enable(11),B.vertexAlphas&&o.enable(12),B.vertexUv1s&&o.enable(13),B.vertexUv2s&&o.enable(14),B.vertexUv3s&&o.enable(15),B.vertexTangents&&o.enable(16),B.anisotropy&&o.enable(17),B.alphaHash&&o.enable(18),B.batching&&o.enable(19),B.dispersion&&o.enable(20),B.batchingColor&&o.enable(21),I.push(o.mask),o.disableAll(),B.fog&&o.enable(0),B.useFog&&o.enable(1),B.flatShading&&o.enable(2),B.logarithmicDepthBuffer&&o.enable(3),B.reverseDepthBuffer&&o.enable(4),B.skinning&&o.enable(5),B.morphTargets&&o.enable(6),B.morphNormals&&o.enable(7),B.morphColors&&o.enable(8),B.premultipliedAlpha&&o.enable(9),B.shadowMapEnabled&&o.enable(10),B.doubleSided&&o.enable(11),B.flipSided&&o.enable(12),B.useDepthPacking&&o.enable(13),B.dithering&&o.enable(14),B.transmission&&o.enable(15),B.sheen&&o.enable(16),B.opaque&&o.enable(17),B.pointsUvs&&o.enable(18),B.decodeVideoTexture&&o.enable(19),B.decodeVideoTextureEmissive&&o.enable(20),B.alphaToCoverage&&o.enable(21),I.push(o.mask)}function _(I){const B=m[I.type];let y;if(B){const z=je[B];y=dg.clone(z.uniforms)}else y=I.uniforms;return y}function N(I,B){let y;for(let z=0,U=l.length;z<U;z++){const K=l[z];if(K.cacheKey===B){y=K,++y.usedTimes;break}}return y===void 0&&(y=new Ff(n,B,I,r),l.push(y)),y}function T(I){if(--I.usedTimes===0){const B=l.indexOf(I);l[B]=l[l.length-1],l.pop(),I.destroy()}}function D(I){a.remove(I)}function S(){a.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:_,acquireProgram:N,releaseProgram:T,releaseShaderCache:D,programs:l,dispose:S}}function Yf(){let n=new WeakMap;function t(s){return n.has(s)}function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function A(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:A,dispose:r}}function Wf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Po(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Lo(){const n=[];let t=0;const e=[],i=[],A=[];function r(){t=0,e.length=0,i.length=0,A.length=0}function s(d,u,f,m,C,h){let g=n[t];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:C,group:h},n[t]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=C,g.group=h),t++,g}function o(d,u,f,m,C,h){const g=s(d,u,f,m,C,h);f.transmission>0?i.push(g):f.transparent===!0?A.push(g):e.push(g)}function a(d,u,f,m,C,h){const g=s(d,u,f,m,C,h);f.transmission>0?i.unshift(g):f.transparent===!0?A.unshift(g):e.unshift(g)}function c(d,u){e.length>1&&e.sort(d||Wf),i.length>1&&i.sort(u||Po),A.length>1&&A.sort(u||Po)}function l(){for(let d=t,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:A,init:r,push:o,unshift:a,finish:l,sort:c}}function Xf(){let n=new WeakMap;function t(i,A){const r=n.get(i);let s;return r===void 0?(s=new Lo,n.set(i,[s])):A>=r.length?(s=new Lo,r.push(s)):s=r[A],s}function e(){n=new WeakMap}return{get:t,dispose:e}}function Kf(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function qf(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let jf=0;function Zf(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Jf(n){const t=new Kf,e=qf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const A=new L,r=new re,s=new re;function o(c){let l=0,d=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let f=0,m=0,C=0,h=0,g=0,M=0,v=0,_=0,N=0,T=0,D=0;c.sort(Zf);for(let I=0,B=c.length;I<B;I++){const y=c[I],z=y.color,U=y.intensity,K=y.distance,q=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)l+=z.r*U,d+=z.g*U,u+=z.b*U;else if(y.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(y.sh.coefficients[Y],U);D++}else if(y.isDirectionalLight){const Y=t.get(y);if(Y.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const Z=y.shadow,G=e.get(y);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=y.shadow.matrix,M++}i.directional[f]=Y,f++}else if(y.isSpotLight){const Y=t.get(y);Y.position.setFromMatrixPosition(y.matrixWorld),Y.color.copy(z).multiplyScalar(U),Y.distance=K,Y.coneCos=Math.cos(y.angle),Y.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),Y.decay=y.decay,i.spot[C]=Y;const Z=y.shadow;if(y.map&&(i.spotLightMap[N]=y.map,N++,Z.updateMatrices(y),y.castShadow&&T++),i.spotLightMatrix[C]=Z.matrix,y.castShadow){const G=e.get(y);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[C]=G,i.spotShadowMap[C]=q,_++}C++}else if(y.isRectAreaLight){const Y=t.get(y);Y.color.copy(z).multiplyScalar(U),Y.halfWidth.set(y.width*.5,0,0),Y.halfHeight.set(0,y.height*.5,0),i.rectArea[h]=Y,h++}else if(y.isPointLight){const Y=t.get(y);if(Y.color.copy(y.color).multiplyScalar(y.intensity),Y.distance=y.distance,Y.decay=y.decay,y.castShadow){const Z=y.shadow,G=e.get(y);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=y.shadow.matrix,v++}i.point[m]=Y,m++}else if(y.isHemisphereLight){const Y=t.get(y);Y.skyColor.copy(y.color).multiplyScalar(U),Y.groundColor.copy(y.groundColor).multiplyScalar(U),i.hemi[g]=Y,g++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=et.LTC_FLOAT_1,i.rectAreaLTC2=et.LTC_FLOAT_2):(i.rectAreaLTC1=et.LTC_HALF_1,i.rectAreaLTC2=et.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=d,i.ambient[2]=u;const S=i.hash;(S.directionalLength!==f||S.pointLength!==m||S.spotLength!==C||S.rectAreaLength!==h||S.hemiLength!==g||S.numDirectionalShadows!==M||S.numPointShadows!==v||S.numSpotShadows!==_||S.numSpotMaps!==N||S.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=C,i.rectArea.length=h,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+N-T,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,S.directionalLength=f,S.pointLength=m,S.spotLength=C,S.rectAreaLength=h,S.hemiLength=g,S.numDirectionalShadows=M,S.numPointShadows=v,S.numSpotShadows=_,S.numSpotMaps=N,S.numLightProbes=D,i.version=jf++)}function a(c,l){let d=0,u=0,f=0,m=0,C=0;const h=l.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const v=c[g];if(v.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),A.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(A),_.direction.transformDirection(h),d++}else if(v.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(h),_.direction.setFromMatrixPosition(v.matrixWorld),A.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(A),_.direction.transformDirection(h),f++}else if(v.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(h),s.identity(),r.copy(v.matrixWorld),r.premultiply(h),s.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),m++}else if(v.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(h),u++}else if(v.isHemisphereLight){const _=i.hemi[C];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(h),C++}}}return{setup:o,setupView:a,state:i}}function Uo(n){const t=new Jf(n),e=[],i=[];function A(l){c.camera=l,e.length=0,i.length=0}function r(l){e.push(l)}function s(l){i.push(l)}function o(){t.setup(e)}function a(l){t.setupView(e,l)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:A,state:c,setupLights:o,setupLightsView:a,pushLight:r,pushShadow:s}}function $f(n){let t=new WeakMap;function e(A,r=0){const s=t.get(A);let o;return s===void 0?(o=new Uo(n),t.set(A,[o])):r>=s.length?(o=new Uo(n),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ep=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function np(n,t,e){let i=new Es;const A=new Wt,r=new Wt,s=new Ae,o=new Ig({depthPacking:Nl}),a=new Qg,c={},l=e.maxTextureSize,d={[Sn]:ye,[ye]:Sn,[Ye]:Ye},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:tp,fragmentShader:ep}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Zn;m.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new we(m,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let g=this.type;this.render=function(T,D,S){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||T.length===0)return;const I=n.getRenderTarget(),B=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Dn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const U=g!==on&&this.type===on,K=g===on&&this.type!==on;for(let q=0,Y=T.length;q<Y;q++){const Z=T[q],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;A.copy(G.mapSize);const At=G.getFrameExtents();if(A.multiply(At),r.copy(G.mapSize),(A.x>l||A.y>l)&&(A.x>l&&(r.x=Math.floor(l/At.x),A.x=r.x*At.x,G.mapSize.x=r.x),A.y>l&&(r.y=Math.floor(l/At.y),A.y=r.y*At.y,G.mapSize.y=r.y)),G.map===null||U===!0||K===!0){const Et=this.type!==on?{minFilter:qe,magFilter:qe}:{};G.map!==null&&G.map.dispose(),G.map=new Xn(A.x,A.y,Et),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const lt=G.getViewportCount();for(let Et=0;Et<lt;Et++){const bt=G.getViewport(Et);s.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),z.viewport(s),G.updateMatrices(Z,Et),i=G.getFrustum(),_(D,S,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===on&&M(G,S),G.needsUpdate=!1}g=this.type,h.needsUpdate=!1,n.setRenderTarget(I,B,y)};function M(T,D){const S=t.update(C);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xn(A.x,A.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(D,null,S,u,C,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(D,null,S,f,C,null)}function v(T,D,S,I){let B=null;const y=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(y!==void 0)B=y;else if(B=S.isPointLight===!0?a:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const z=B.uuid,U=D.uuid;let K=c[z];K===void 0&&(K={},c[z]=K);let q=K[U];q===void 0&&(q=B.clone(),K[U]=q,D.addEventListener("dispose",N)),B=q}if(B.visible=D.visible,B.wireframe=D.wireframe,I===on?B.side=D.shadowSide!==null?D.shadowSide:D.side:B.side=D.shadowSide!==null?D.shadowSide:d[D.side],B.alphaMap=D.alphaMap,B.alphaTest=D.alphaTest,B.map=D.map,B.clipShadows=D.clipShadows,B.clippingPlanes=D.clippingPlanes,B.clipIntersection=D.clipIntersection,B.displacementMap=D.displacementMap,B.displacementScale=D.displacementScale,B.displacementBias=D.displacementBias,B.wireframeLinewidth=D.wireframeLinewidth,B.linewidth=D.linewidth,S.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const z=n.properties.get(B);z.light=S}return B}function _(T,D,S,I,B){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&B===on)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const U=t.update(T),K=T.material;if(Array.isArray(K)){const q=U.groups;for(let Y=0,Z=q.length;Y<Z;Y++){const G=q[Y],At=K[G.materialIndex];if(At&&At.visible){const lt=v(T,At,I,B);T.onBeforeShadow(n,T,D,S,U,lt,G),n.renderBufferDirect(S,null,U,lt,T,G),T.onAfterShadow(n,T,D,S,U,lt,G)}}}else if(K.visible){const q=v(T,K,I,B);T.onBeforeShadow(n,T,D,S,U,q,null),n.renderBufferDirect(S,null,U,q,T,null),T.onAfterShadow(n,T,D,S,U,q,null)}}const z=T.children;for(let U=0,K=z.length;U<K;U++)_(z[U],D,S,I,B)}function N(T){T.target.removeEventListener("dispose",N);for(const S in c){const I=c[S],B=T.target.uuid;B in I&&(I[B].dispose(),delete I[B])}}}const ip={[Cr]:Ir,[Qr]:vr,[_r]:xr,[Ci]:Dr,[Ir]:Cr,[vr]:Qr,[xr]:_r,[Dr]:Ci};function Ap(n,t){function e(){let O=!1;const nt=new Ae;let F=null;const X=new Ae(0,0,0,0);return{setMask:function(at){F!==at&&!O&&(n.colorMask(at,at,at,at),F=at)},setLocked:function(at){O=at},setClear:function(at,ot,Mt,ne,pe){pe===!0&&(at*=ne,ot*=ne,Mt*=ne),nt.set(at,ot,Mt,ne),X.equals(nt)===!1&&(n.clearColor(at,ot,Mt,ne),X.copy(nt))},reset:function(){O=!1,F=null,X.set(-1,0,0,0)}}}function i(){let O=!1,nt=!1,F=null,X=null,at=null;return{setReversed:function(ot){if(nt!==ot){const Mt=t.get("EXT_clip_control");nt?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT);const ne=at;at=null,this.setClear(ne)}nt=ot},getReversed:function(){return nt},setTest:function(ot){ot?rt(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(ot){F!==ot&&!O&&(n.depthMask(ot),F=ot)},setFunc:function(ot){if(nt&&(ot=ip[ot]),X!==ot){switch(ot){case Cr:n.depthFunc(n.NEVER);break;case Ir:n.depthFunc(n.ALWAYS);break;case Qr:n.depthFunc(n.LESS);break;case Ci:n.depthFunc(n.LEQUAL);break;case _r:n.depthFunc(n.EQUAL);break;case Dr:n.depthFunc(n.GEQUAL);break;case vr:n.depthFunc(n.GREATER);break;case xr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=ot}},setLocked:function(ot){O=ot},setClear:function(ot){at!==ot&&(nt&&(ot=1-ot),n.clearDepth(ot),at=ot)},reset:function(){O=!1,F=null,X=null,at=null,nt=!1}}}function A(){let O=!1,nt=null,F=null,X=null,at=null,ot=null,Mt=null,ne=null,pe=null;return{setTest:function(Xt){O||(Xt?rt(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(Xt){nt!==Xt&&!O&&(n.stencilMask(Xt),nt=Xt)},setFunc:function(Xt,Fe,tn){(F!==Xt||X!==Fe||at!==tn)&&(n.stencilFunc(Xt,Fe,tn),F=Xt,X=Fe,at=tn)},setOp:function(Xt,Fe,tn){(ot!==Xt||Mt!==Fe||ne!==tn)&&(n.stencilOp(Xt,Fe,tn),ot=Xt,Mt=Fe,ne=tn)},setLocked:function(Xt){O=Xt},setClear:function(Xt){pe!==Xt&&(n.clearStencil(Xt),pe=Xt)},reset:function(){O=!1,nt=null,F=null,X=null,at=null,ot=null,Mt=null,ne=null,pe=null}}}const r=new e,s=new i,o=new A,a=new WeakMap,c=new WeakMap;let l={},d={},u=new WeakMap,f=[],m=null,C=!1,h=null,g=null,M=null,v=null,_=null,N=null,T=null,D=new Vt(0,0,0),S=0,I=!1,B=null,y=null,z=null,U=null,K=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=Z>=2);let At=null,lt={};const Et=n.getParameter(n.SCISSOR_BOX),bt=n.getParameter(n.VIEWPORT),qt=new Ae().fromArray(Et),k=new Ae().fromArray(bt);function tt(O,nt,F,X){const at=new Uint8Array(4),ot=n.createTexture();n.bindTexture(O,ot),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Mt=0;Mt<F;Mt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(nt,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,at):n.texImage2D(nt+Mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,at);return ot}const ft={};ft[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),s.setFunc(Ci),Ht(!1),Rt(Gs),rt(n.CULL_FACE),x(Dn);function rt(O){l[O]!==!0&&(n.enable(O),l[O]=!0)}function _t(O){l[O]!==!1&&(n.disable(O),l[O]=!1)}function xt(O,nt){return d[O]!==nt?(n.bindFramebuffer(O,nt),d[O]=nt,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=nt),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=nt),!0):!1}function wt(O,nt){let F=f,X=!1;if(O){F=u.get(nt),F===void 0&&(F=[],u.set(nt,F));const at=O.textures;if(F.length!==at.length||F[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,Mt=at.length;ot<Mt;ot++)F[ot]=n.COLOR_ATTACHMENT0+ot;F.length=at.length,X=!0}}else F[0]!==n.BACK&&(F[0]=n.BACK,X=!0);X&&n.drawBuffers(F)}function te(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const Lt={[Fn]:n.FUNC_ADD,[sl]:n.FUNC_SUBTRACT,[ol]:n.FUNC_REVERSE_SUBTRACT};Lt[al]=n.MIN,Lt[cl]=n.MAX;const se={[ll]:n.ZERO,[gl]:n.ONE,[dl]:n.SRC_COLOR,[Er]:n.SRC_ALPHA,[El]:n.SRC_ALPHA_SATURATE,[pl]:n.DST_COLOR,[hl]:n.DST_ALPHA,[ul]:n.ONE_MINUS_SRC_COLOR,[Br]:n.ONE_MINUS_SRC_ALPHA,[ml]:n.ONE_MINUS_DST_COLOR,[fl]:n.ONE_MINUS_DST_ALPHA,[Bl]:n.CONSTANT_COLOR,[Cl]:n.ONE_MINUS_CONSTANT_COLOR,[Il]:n.CONSTANT_ALPHA,[Ql]:n.ONE_MINUS_CONSTANT_ALPHA};function x(O,nt,F,X,at,ot,Mt,ne,pe,Xt){if(O===Dn){C===!0&&(_t(n.BLEND),C=!1);return}if(C===!1&&(rt(n.BLEND),C=!0),O!==rl){if(O!==h||Xt!==I){if((g!==Fn||_!==Fn)&&(n.blendEquation(n.FUNC_ADD),g=Fn,_=Fn),Xt)switch(O){case mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zs:n.blendFunc(n.ONE,n.ONE);break;case Vs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ks:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ks:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,v=null,N=null,T=null,D.set(0,0,0),S=0,h=O,I=Xt}return}at=at||nt,ot=ot||F,Mt=Mt||X,(nt!==g||at!==_)&&(n.blendEquationSeparate(Lt[nt],Lt[at]),g=nt,_=at),(F!==M||X!==v||ot!==N||Mt!==T)&&(n.blendFuncSeparate(se[F],se[X],se[ot],se[Mt]),M=F,v=X,N=ot,T=Mt),(ne.equals(D)===!1||pe!==S)&&(n.blendColor(ne.r,ne.g,ne.b,pe),D.copy(ne),S=pe),h=O,I=!1}function Ne(O,nt){O.side===Ye?_t(n.CULL_FACE):rt(n.CULL_FACE);let F=O.side===ye;nt&&(F=!F),Ht(F),O.blending===mi&&O.transparent===!1?x(Dn):x(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const X=O.stencilWrite;o.setTest(X),X&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Zt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(O){B!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),B=O)}function Rt(O){O!==nl?(rt(n.CULL_FACE),O!==y&&(O===Gs?n.cullFace(n.BACK):O===il?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),y=O}function Bt(O){O!==z&&(Y&&n.lineWidth(O),z=O)}function Zt(O,nt,F){O?(rt(n.POLYGON_OFFSET_FILL),(U!==nt||K!==F)&&(n.polygonOffset(nt,F),U=nt,K=F)):_t(n.POLYGON_OFFSET_FILL)}function mt(O){O?rt(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function Q(O){O===void 0&&(O=n.TEXTURE0+q-1),At!==O&&(n.activeTexture(O),At=O)}function p(O,nt,F){F===void 0&&(At===null?F=n.TEXTURE0+q-1:F=At);let X=lt[F];X===void 0&&(X={type:void 0,texture:void 0},lt[F]=X),(X.type!==O||X.texture!==nt)&&(At!==F&&(n.activeTexture(F),At=F),n.bindTexture(O,nt||ft[O]),X.type=O,X.texture=nt)}function H(){const O=lt[At];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(O){qt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),qt.copy(O))}function ut(O){k.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),k.copy(O))}function Pt(O,nt){let F=c.get(nt);F===void 0&&(F=new WeakMap,c.set(nt,F));let X=F.get(O);X===void 0&&(X=n.getUniformBlockIndex(nt,O.name),F.set(O,X))}function Ot(O,nt){const X=c.get(nt).get(O);a.get(nt)!==X&&(n.uniformBlockBinding(nt,X,O.__bindingPointIndex),a.set(nt,X))}function jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},At=null,lt={},d={},u=new WeakMap,f=[],m=null,C=!1,h=null,g=null,M=null,v=null,_=null,N=null,T=null,D=new Vt(0,0,0),S=0,I=!1,B=null,y=null,z=null,U=null,K=null,qt.set(0,0,n.canvas.width,n.canvas.height),k.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:rt,disable:_t,bindFramebuffer:xt,drawBuffers:wt,useProgram:te,setBlending:x,setMaterial:Ne,setFlipSided:Ht,setCullFace:Rt,setLineWidth:Bt,setPolygonOffset:Zt,setScissorTest:mt,activeTexture:Q,bindTexture:p,unbindTexture:H,compressedTexImage2D:W,compressedTexImage3D:j,texImage2D:dt,texImage3D:Qt,updateUBOMapping:Pt,uniformBlockBinding:Ot,texStorage2D:Ut,texStorage3D:$,texSubImage2D:V,texSubImage3D:pt,compressedTexSubImage2D:st,compressedTexSubImage3D:gt,scissor:Dt,viewport:ut,reset:jt}}function rp(n,t,e,i,A,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,l=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(Q,p){return f?new OffscreenCanvas(Q,p):zi("canvas")}function C(Q,p,H){let W=1;const j=mt(Q);if((j.width>H||j.height>H)&&(W=H/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap||typeof VideoFrame<"u"&&Q instanceof VideoFrame){const V=Math.floor(W*j.width),pt=Math.floor(W*j.height);d===void 0&&(d=m(V,pt));const st=p?m(V,pt):d;return st.width=V,st.height=pt,st.getContext("2d").drawImage(Q,0,0,V,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+pt+")."),st}else return"data"in Q&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),Q;return Q}function h(Q){return Q.generateMipmaps}function g(Q){n.generateMipmap(Q)}function M(Q){return Q.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:Q.isWebGL3DRenderTarget?n.TEXTURE_3D:Q.isWebGLArrayRenderTarget||Q.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(Q,p,H,W,j=!1){if(Q!==null){if(n[Q]!==void 0)return n[Q];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Q+"'")}let V=p;if(p===n.RED&&(H===n.FLOAT&&(V=n.R32F),H===n.HALF_FLOAT&&(V=n.R16F),H===n.UNSIGNED_BYTE&&(V=n.R8)),p===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(V=n.R8UI),H===n.UNSIGNED_SHORT&&(V=n.R16UI),H===n.UNSIGNED_INT&&(V=n.R32UI),H===n.BYTE&&(V=n.R8I),H===n.SHORT&&(V=n.R16I),H===n.INT&&(V=n.R32I)),p===n.RG&&(H===n.FLOAT&&(V=n.RG32F),H===n.HALF_FLOAT&&(V=n.RG16F),H===n.UNSIGNED_BYTE&&(V=n.RG8)),p===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(V=n.RG8UI),H===n.UNSIGNED_SHORT&&(V=n.RG16UI),H===n.UNSIGNED_INT&&(V=n.RG32UI),H===n.BYTE&&(V=n.RG8I),H===n.SHORT&&(V=n.RG16I),H===n.INT&&(V=n.RG32I)),p===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(V=n.RGB8UI),H===n.UNSIGNED_SHORT&&(V=n.RGB16UI),H===n.UNSIGNED_INT&&(V=n.RGB32UI),H===n.BYTE&&(V=n.RGB8I),H===n.SHORT&&(V=n.RGB16I),H===n.INT&&(V=n.RGB32I)),p===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),H===n.UNSIGNED_INT&&(V=n.RGBA32UI),H===n.BYTE&&(V=n.RGBA8I),H===n.SHORT&&(V=n.RGBA16I),H===n.INT&&(V=n.RGBA32I)),p===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),p===n.RGBA){const pt=j?TA:zt.getTransfer(W);H===n.FLOAT&&(V=n.RGBA32F),H===n.HALF_FLOAT&&(V=n.RGBA16F),H===n.UNSIGNED_BYTE&&(V=pt===Kt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function _(Q,p){let H;return Q?p===null||p===Wn||p===_i?H=n.DEPTH24_STENCIL8:p===cn?H=n.DEPTH32F_STENCIL8:p===Gi&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Wn||p===_i?H=n.DEPTH_COMPONENT24:p===cn?H=n.DEPTH_COMPONENT32F:p===Gi&&(H=n.DEPTH_COMPONENT16),H}function N(Q,p){return h(Q)===!0||Q.isFramebufferTexture&&Q.minFilter!==qe&&Q.minFilter!==Xe?Math.log2(Math.max(p.width,p.height))+1:Q.mipmaps!==void 0&&Q.mipmaps.length>0?Q.mipmaps.length:Q.isCompressedTexture&&Array.isArray(Q.image)?p.mipmaps.length:1}function T(Q){const p=Q.target;p.removeEventListener("dispose",T),S(p),p.isVideoTexture&&l.delete(p)}function D(Q){const p=Q.target;p.removeEventListener("dispose",D),B(p)}function S(Q){const p=i.get(Q);if(p.__webglInit===void 0)return;const H=Q.source,W=u.get(H);if(W){const j=W[p.__cacheKey];j.usedTimes--,j.usedTimes===0&&I(Q),Object.keys(W).length===0&&u.delete(H)}i.remove(Q)}function I(Q){const p=i.get(Q);n.deleteTexture(p.__webglTexture);const H=Q.source,W=u.get(H);delete W[p.__cacheKey],s.memory.textures--}function B(Q){const p=i.get(Q);if(Q.depthTexture&&(Q.depthTexture.dispose(),i.remove(Q.depthTexture)),Q.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(p.__webglFramebuffer[W]))for(let j=0;j<p.__webglFramebuffer[W].length;j++)n.deleteFramebuffer(p.__webglFramebuffer[W][j]);else n.deleteFramebuffer(p.__webglFramebuffer[W]);p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer[W])}else{if(Array.isArray(p.__webglFramebuffer))for(let W=0;W<p.__webglFramebuffer.length;W++)n.deleteFramebuffer(p.__webglFramebuffer[W]);else n.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&n.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let W=0;W<p.__webglColorRenderbuffer.length;W++)p.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(p.__webglColorRenderbuffer[W]);p.__webglDepthRenderbuffer&&n.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const H=Q.textures;for(let W=0,j=H.length;W<j;W++){const V=i.get(H[W]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),s.memory.textures--),i.remove(H[W])}i.remove(Q)}let y=0;function z(){y=0}function U(){const Q=y;return Q>=A.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+Q+" texture units while this GPU supports only "+A.maxTextures),y+=1,Q}function K(Q){const p=[];return p.push(Q.wrapS),p.push(Q.wrapT),p.push(Q.wrapR||0),p.push(Q.magFilter),p.push(Q.minFilter),p.push(Q.anisotropy),p.push(Q.internalFormat),p.push(Q.format),p.push(Q.type),p.push(Q.generateMipmaps),p.push(Q.premultiplyAlpha),p.push(Q.flipY),p.push(Q.unpackAlignment),p.push(Q.colorSpace),p.join()}function q(Q,p){const H=i.get(Q);if(Q.isVideoTexture&&Bt(Q),Q.isRenderTargetTexture===!1&&Q.version>0&&H.__version!==Q.version){const W=Q.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(H,Q,p);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+p)}function Y(Q,p){const H=i.get(Q);if(Q.version>0&&H.__version!==Q.version){k(H,Q,p);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+p)}function Z(Q,p){const H=i.get(Q);if(Q.version>0&&H.__version!==Q.version){k(H,Q,p);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+p)}function G(Q,p){const H=i.get(Q);if(Q.version>0&&H.__version!==Q.version){tt(H,Q,p);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+p)}const At={[yr]:n.REPEAT,[an]:n.CLAMP_TO_EDGE,[Or]:n.MIRRORED_REPEAT},lt={[qe]:n.NEAREST,[bl]:n.NEAREST_MIPMAP_NEAREST,[iA]:n.NEAREST_MIPMAP_LINEAR,[Xe]:n.LINEAR,[GA]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},Et={[Rl]:n.NEVER,[zl]:n.ALWAYS,[Pl]:n.LESS,[ha]:n.LEQUAL,[Ll]:n.EQUAL,[Gl]:n.GEQUAL,[Ul]:n.GREATER,[Fl]:n.NOTEQUAL};function bt(Q,p){if(p.type===cn&&t.has("OES_texture_float_linear")===!1&&(p.magFilter===Xe||p.magFilter===GA||p.magFilter===iA||p.magFilter===zn||p.minFilter===Xe||p.minFilter===GA||p.minFilter===iA||p.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(Q,n.TEXTURE_WRAP_S,At[p.wrapS]),n.texParameteri(Q,n.TEXTURE_WRAP_T,At[p.wrapT]),(Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY)&&n.texParameteri(Q,n.TEXTURE_WRAP_R,At[p.wrapR]),n.texParameteri(Q,n.TEXTURE_MAG_FILTER,lt[p.magFilter]),n.texParameteri(Q,n.TEXTURE_MIN_FILTER,lt[p.minFilter]),p.compareFunction&&(n.texParameteri(Q,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(Q,n.TEXTURE_COMPARE_FUNC,Et[p.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===qe||p.minFilter!==iA&&p.minFilter!==zn||p.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(Q,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,A.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function qt(Q,p){let H=!1;Q.__webglInit===void 0&&(Q.__webglInit=!0,p.addEventListener("dispose",T));const W=p.source;let j=u.get(W);j===void 0&&(j={},u.set(W,j));const V=K(p);if(V!==Q.__cacheKey){j[V]===void 0&&(j[V]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,H=!0),j[V].usedTimes++;const pt=j[Q.__cacheKey];pt!==void 0&&(j[Q.__cacheKey].usedTimes--,pt.usedTimes===0&&I(p)),Q.__cacheKey=V,Q.__webglTexture=j[V].texture}return H}function k(Q,p,H){let W=n.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),p.isData3DTexture&&(W=n.TEXTURE_3D);const j=qt(Q,p),V=p.source;e.bindTexture(W,Q.__webglTexture,n.TEXTURE0+H);const pt=i.get(V);if(V.version!==pt.__version||j===!0){e.activeTexture(n.TEXTURE0+H);const st=zt.getPrimaries(zt.workingColorSpace),gt=p.colorSpace===_n?null:zt.getPrimaries(p.colorSpace),Ut=p.colorSpace===_n||st===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let $=C(p.image,!1,A.maxTextureSize);$=Zt(p,$);const dt=r.convert(p.format,p.colorSpace),Qt=r.convert(p.type);let Dt=v(p.internalFormat,dt,Qt,p.colorSpace,p.isVideoTexture);bt(W,p);let ut;const Pt=p.mipmaps,Ot=p.isVideoTexture!==!0,jt=pt.__version===void 0||j===!0,O=V.dataReady,nt=N(p,$);if(p.isDepthTexture)Dt=_(p.format===Di,p.type),jt&&(Ot?e.texStorage2D(n.TEXTURE_2D,1,Dt,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,Dt,$.width,$.height,0,dt,Qt,null));else if(p.isDataTexture)if(Pt.length>0){Ot&&jt&&e.texStorage2D(n.TEXTURE_2D,nt,Dt,Pt[0].width,Pt[0].height);for(let F=0,X=Pt.length;F<X;F++)ut=Pt[F],Ot?O&&e.texSubImage2D(n.TEXTURE_2D,F,0,0,ut.width,ut.height,dt,Qt,ut.data):e.texImage2D(n.TEXTURE_2D,F,Dt,ut.width,ut.height,0,dt,Qt,ut.data);p.generateMipmaps=!1}else Ot?(jt&&e.texStorage2D(n.TEXTURE_2D,nt,Dt,$.width,$.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,dt,Qt,$.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,$.width,$.height,0,dt,Qt,$.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Ot&&jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,nt,Dt,Pt[0].width,Pt[0].height,$.depth);for(let F=0,X=Pt.length;F<X;F++)if(ut=Pt[F],p.format!==Ke)if(dt!==null)if(Ot){if(O)if(p.layerUpdates.size>0){const at=fo(ut.width,ut.height,p.format,p.type);for(const ot of p.layerUpdates){const Mt=ut.data.subarray(ot*at/ut.data.BYTES_PER_ELEMENT,(ot+1)*at/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,ot,ut.width,ut.height,1,dt,Mt)}p.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,ut.width,ut.height,$.depth,dt,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,F,Dt,ut.width,ut.height,$.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,ut.width,ut.height,$.depth,dt,Qt,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,F,Dt,ut.width,ut.height,$.depth,0,dt,Qt,ut.data)}else{Ot&&jt&&e.texStorage2D(n.TEXTURE_2D,nt,Dt,Pt[0].width,Pt[0].height);for(let F=0,X=Pt.length;F<X;F++)ut=Pt[F],p.format!==Ke?dt!==null?Ot?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,F,0,0,ut.width,ut.height,dt,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,F,Dt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?O&&e.texSubImage2D(n.TEXTURE_2D,F,0,0,ut.width,ut.height,dt,Qt,ut.data):e.texImage2D(n.TEXTURE_2D,F,Dt,ut.width,ut.height,0,dt,Qt,ut.data)}else if(p.isDataArrayTexture)if(Ot){if(jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,nt,Dt,$.width,$.height,$.depth),O)if(p.layerUpdates.size>0){const F=fo($.width,$.height,p.format,p.type);for(const X of p.layerUpdates){const at=$.data.subarray(X*F/$.data.BYTES_PER_ELEMENT,(X+1)*F/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,$.width,$.height,1,dt,Qt,at)}p.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,dt,Qt,$.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,$.width,$.height,$.depth,0,dt,Qt,$.data);else if(p.isData3DTexture)Ot?(jt&&e.texStorage3D(n.TEXTURE_3D,nt,Dt,$.width,$.height,$.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,dt,Qt,$.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,$.width,$.height,$.depth,0,dt,Qt,$.data);else if(p.isFramebufferTexture){if(jt)if(Ot)e.texStorage2D(n.TEXTURE_2D,nt,Dt,$.width,$.height);else{let F=$.width,X=$.height;for(let at=0;at<nt;at++)e.texImage2D(n.TEXTURE_2D,at,Dt,F,X,0,dt,Qt,null),F>>=1,X>>=1}}else if(Pt.length>0){if(Ot&&jt){const F=mt(Pt[0]);e.texStorage2D(n.TEXTURE_2D,nt,Dt,F.width,F.height)}for(let F=0,X=Pt.length;F<X;F++)ut=Pt[F],Ot?O&&e.texSubImage2D(n.TEXTURE_2D,F,0,0,dt,Qt,ut):e.texImage2D(n.TEXTURE_2D,F,Dt,dt,Qt,ut);p.generateMipmaps=!1}else if(Ot){if(jt){const F=mt($);e.texStorage2D(n.TEXTURE_2D,nt,Dt,F.width,F.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,Qt,$)}else e.texImage2D(n.TEXTURE_2D,0,Dt,dt,Qt,$);h(p)&&g(W),pt.__version=V.version,p.onUpdate&&p.onUpdate(p)}Q.__version=p.version}function tt(Q,p,H){if(p.image.length!==6)return;const W=qt(Q,p),j=p.source;e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+H);const V=i.get(j);if(j.version!==V.__version||W===!0){e.activeTexture(n.TEXTURE0+H);const pt=zt.getPrimaries(zt.workingColorSpace),st=p.colorSpace===_n?null:zt.getPrimaries(p.colorSpace),gt=p.colorSpace===_n||pt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Ut=p.isCompressedTexture||p.image[0].isCompressedTexture,$=p.image[0]&&p.image[0].isDataTexture,dt=[];for(let X=0;X<6;X++)!Ut&&!$?dt[X]=C(p.image[X],!0,A.maxCubemapSize):dt[X]=$?p.image[X].image:p.image[X],dt[X]=Zt(p,dt[X]);const Qt=dt[0],Dt=r.convert(p.format,p.colorSpace),ut=r.convert(p.type),Pt=v(p.internalFormat,Dt,ut,p.colorSpace),Ot=p.isVideoTexture!==!0,jt=V.__version===void 0||W===!0,O=j.dataReady;let nt=N(p,Qt);bt(n.TEXTURE_CUBE_MAP,p);let F;if(Ut){Ot&&jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,nt,Pt,Qt.width,Qt.height);for(let X=0;X<6;X++){F=dt[X].mipmaps;for(let at=0;at<F.length;at++){const ot=F[at];p.format!==Ke?Dt!==null?Ot?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,at,0,0,ot.width,ot.height,Dt,ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,at,Pt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,at,0,0,ot.width,ot.height,Dt,ut,ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,at,Pt,ot.width,ot.height,0,Dt,ut,ot.data)}}}else{if(F=p.mipmaps,Ot&&jt){F.length>0&&nt++;const X=mt(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,nt,Pt,X.width,X.height)}for(let X=0;X<6;X++)if($){Ot?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,dt[X].width,dt[X].height,Dt,ut,dt[X].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Pt,dt[X].width,dt[X].height,0,Dt,ut,dt[X].data);for(let at=0;at<F.length;at++){const Mt=F[at].image[X].image;Ot?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,at+1,0,0,Mt.width,Mt.height,Dt,ut,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,at+1,Pt,Mt.width,Mt.height,0,Dt,ut,Mt.data)}}else{Ot?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Dt,ut,dt[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Pt,Dt,ut,dt[X]);for(let at=0;at<F.length;at++){const ot=F[at];Ot?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,at+1,0,0,Dt,ut,ot.image[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,at+1,Pt,Dt,ut,ot.image[X])}}}h(p)&&g(n.TEXTURE_CUBE_MAP),V.__version=j.version,p.onUpdate&&p.onUpdate(p)}Q.__version=p.version}function ft(Q,p,H,W,j,V){const pt=r.convert(H.format,H.colorSpace),st=r.convert(H.type),gt=v(H.internalFormat,pt,st,H.colorSpace),Ut=i.get(p),$=i.get(H);if($.__renderTarget=p,!Ut.__hasExternalTextures){const dt=Math.max(1,p.width>>V),Qt=Math.max(1,p.height>>V);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,V,gt,dt,Qt,p.depth,0,pt,st,null):e.texImage2D(j,V,gt,dt,Qt,0,pt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,Q),Rt(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,j,$.__webglTexture,0,Ht(p)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,j,$.__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(Q,p,H){if(n.bindRenderbuffer(n.RENDERBUFFER,Q),p.depthBuffer){const W=p.depthTexture,j=W&&W.isDepthTexture?W.type:null,V=_(p.stencilBuffer,j),pt=p.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=Ht(p);Rt(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,V,p.width,p.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,V,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,V,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,Q)}else{const W=p.textures;for(let j=0;j<W.length;j++){const V=W[j],pt=r.convert(V.format,V.colorSpace),st=r.convert(V.type),gt=v(V.internalFormat,pt,st,V.colorSpace),Ut=Ht(p);H&&Rt(p)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,gt,p.width,p.height):Rt(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut,gt,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,gt,p.width,p.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _t(Q,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,Q),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(p.depthTexture);W.__renderTarget=p,(!W.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),q(p.depthTexture,0);const j=W.__webglTexture,V=Ht(p);if(p.depthTexture.format===Ei)Rt(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(p.depthTexture.format===Di)Rt(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function xt(Q){const p=i.get(Q),H=Q.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==Q.depthTexture){const W=Q.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),W){const j=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),p.__depthDisposeCallback=j}p.__boundDepthTexture=W}if(Q.depthTexture&&!p.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");_t(p.__webglFramebuffer,Q)}else if(H){p.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[W]),p.__webglDepthbuffer[W]===void 0)p.__webglDepthbuffer[W]=n.createRenderbuffer(),rt(p.__webglDepthbuffer[W],Q,!1);else{const j=Q.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=p.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,V)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=n.createRenderbuffer(),rt(p.__webglDepthbuffer,Q,!1);else{const W=Q.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=p.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,j)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(Q,p,H){const W=i.get(Q);p!==void 0&&ft(W.__webglFramebuffer,Q,Q.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&xt(Q)}function te(Q){const p=Q.texture,H=i.get(Q),W=i.get(p);Q.addEventListener("dispose",D);const j=Q.textures,V=Q.isWebGLCubeRenderTarget===!0,pt=j.length>1;if(pt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=p.version,s.memory.textures++),V){H.__webglFramebuffer=[];for(let st=0;st<6;st++)if(p.mipmaps&&p.mipmaps.length>0){H.__webglFramebuffer[st]=[];for(let gt=0;gt<p.mipmaps.length;gt++)H.__webglFramebuffer[st][gt]=n.createFramebuffer()}else H.__webglFramebuffer[st]=n.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){H.__webglFramebuffer=[];for(let st=0;st<p.mipmaps.length;st++)H.__webglFramebuffer[st]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(pt)for(let st=0,gt=j.length;st<gt;st++){const Ut=i.get(j[st]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),s.memory.textures++)}if(Q.samples>0&&Rt(Q)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let st=0;st<j.length;st++){const gt=j[st];H.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[st]);const Ut=r.convert(gt.format,gt.colorSpace),$=r.convert(gt.type),dt=v(gt.internalFormat,Ut,$,gt.colorSpace,Q.isXRRenderTarget===!0),Qt=Ht(Q);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt,dt,Q.width,Q.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,H.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),Q.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(H.__webglDepthRenderbuffer,Q,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),bt(n.TEXTURE_CUBE_MAP,p);for(let st=0;st<6;st++)if(p.mipmaps&&p.mipmaps.length>0)for(let gt=0;gt<p.mipmaps.length;gt++)ft(H.__webglFramebuffer[st][gt],Q,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt);else ft(H.__webglFramebuffer[st],Q,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);h(p)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let st=0,gt=j.length;st<gt;st++){const Ut=j[st],$=i.get(Ut);e.bindTexture(n.TEXTURE_2D,$.__webglTexture),bt(n.TEXTURE_2D,Ut),ft(H.__webglFramebuffer,Q,Ut,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,0),h(Ut)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((Q.isWebGL3DRenderTarget||Q.isWebGLArrayRenderTarget)&&(st=Q.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,W.__webglTexture),bt(st,p),p.mipmaps&&p.mipmaps.length>0)for(let gt=0;gt<p.mipmaps.length;gt++)ft(H.__webglFramebuffer[gt],Q,p,n.COLOR_ATTACHMENT0,st,gt);else ft(H.__webglFramebuffer,Q,p,n.COLOR_ATTACHMENT0,st,0);h(p)&&g(st),e.unbindTexture()}Q.depthBuffer&&xt(Q)}function Lt(Q){const p=Q.textures;for(let H=0,W=p.length;H<W;H++){const j=p[H];if(h(j)){const V=M(Q),pt=i.get(j).__webglTexture;e.bindTexture(V,pt),g(V),e.unbindTexture()}}}const se=[],x=[];function Ne(Q){if(Q.samples>0){if(Rt(Q)===!1){const p=Q.textures,H=Q.width,W=Q.height;let j=n.COLOR_BUFFER_BIT;const V=Q.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(Q),st=p.length>1;if(st)for(let gt=0;gt<p.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let gt=0;gt<p.length;gt++){if(Q.resolveDepthBuffer&&(Q.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),Q.stencilBuffer&&Q.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);const Ut=i.get(p[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ut,0)}n.blitFramebuffer(0,0,H,W,0,0,H,W,j,n.NEAREST),a===!0&&(se.length=0,x.length=0,se.push(n.COLOR_ATTACHMENT0+gt),Q.depthBuffer&&Q.resolveDepthBuffer===!1&&(se.push(V),x.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let gt=0;gt<p.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);const Ut=i.get(p[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,Ut,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(Q.depthBuffer&&Q.resolveDepthBuffer===!1&&a){const p=Q.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[p])}}}function Ht(Q){return Math.min(A.maxSamples,Q.samples)}function Rt(Q){const p=i.get(Q);return Q.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function Bt(Q){const p=s.render.frame;l.get(Q)!==p&&(l.set(Q,p),Q.update())}function Zt(Q,p){const H=Q.colorSpace,W=Q.format,j=Q.type;return Q.isCompressedTexture===!0||Q.isVideoTexture===!0||H!==vi&&H!==_n&&(zt.getTransfer(H)===Kt?(W!==Ke||j!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),p}function mt(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement?(c.width=Q.naturalWidth||Q.width,c.height=Q.naturalHeight||Q.height):typeof VideoFrame<"u"&&Q instanceof VideoFrame?(c.width=Q.displayWidth,c.height=Q.displayHeight):(c.width=Q.width,c.height=Q.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=wt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Rt}function sp(n,t){function e(i,A=_n){let r;const s=zt.getTransfer(A);if(i===fn)return n.UNSIGNED_BYTE;if(i===ds)return n.UNSIGNED_SHORT_4_4_4_4;if(i===us)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ra)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ia)return n.BYTE;if(i===Aa)return n.SHORT;if(i===Gi)return n.UNSIGNED_SHORT;if(i===gs)return n.INT;if(i===Wn)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===Xi)return n.HALF_FLOAT;if(i===sa)return n.ALPHA;if(i===oa)return n.RGB;if(i===Ke)return n.RGBA;if(i===aa)return n.LUMINANCE;if(i===ca)return n.LUMINANCE_ALPHA;if(i===Ei)return n.DEPTH_COMPONENT;if(i===Di)return n.DEPTH_STENCIL;if(i===la)return n.RED;if(i===hs)return n.RED_INTEGER;if(i===ga)return n.RG;if(i===fs)return n.RG_INTEGER;if(i===ps)return n.RGBA_INTEGER;if(i===vA||i===xA||i===SA||i===MA)if(s===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===vA)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xA)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===SA)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===MA)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===vA)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xA)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===SA)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===MA)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tr||i===br||i===wr||i===Nr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===br)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hr||i===Rr||i===Pr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hr||i===Rr)return s===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lr||i===Ur||i===Fr||i===Gr||i===zr||i===Vr||i===kr||i===Yr||i===Wr||i===Xr||i===Kr||i===qr||i===jr||i===Zr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Lr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ur)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zr)return s===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yA||i===Jr||i===$r)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===yA)return s===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$r)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===da||i===ts||i===es||i===ns)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===yA)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ts)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===es)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ns)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_i?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const op={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new IA,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new IA,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new IA,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let A=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const C of t.hand.values()){const h=e.getJointPose(C,i),g=this._getHandJoint(c,C);h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=h.radius),g.visible=h!==null}const l=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=l.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(A=e.getPose(t.targetRaySpace,i),A===null&&r!==null&&(A=r),A!==null&&(o.matrix.fromArray(A.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,A.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(A.linearVelocity)):o.hasLinearVelocity=!1,A.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(A.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(op)))}return o!==null&&(o.visible=A!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new IA;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ap=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const A=new Ce,r=t.properties.get(A);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=A}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Mn({vertexShader:ap,fragmentShader:cp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new Ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gp extends yi{constructor(t,e){super();const i=this;let A=null,r=1,s=null,o="local-floor",a=1,c=null,l=null,d=null,u=null,f=null,m=null;const C=new lp,h=e.getContextAttributes();let g=null,M=null;const v=[],_=[],N=new Wt;let T=null;const D=new Le;D.viewport=new Ae;const S=new Le;S.viewport=new Ae;const I=[D,S],B=new Tg;let y=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let tt=v[k];return tt===void 0&&(tt=new mr,v[k]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(k){let tt=v[k];return tt===void 0&&(tt=new mr,v[k]=tt),tt.getGripSpace()},this.getHand=function(k){let tt=v[k];return tt===void 0&&(tt=new mr,v[k]=tt),tt.getHandSpace()};function U(k){const tt=_.indexOf(k.inputSource);if(tt===-1)return;const ft=v[tt];ft!==void 0&&(ft.update(k.inputSource,k.frame,c||s),ft.dispatchEvent({type:k.type,data:k.inputSource}))}function K(){A.removeEventListener("select",U),A.removeEventListener("selectstart",U),A.removeEventListener("selectend",U),A.removeEventListener("squeeze",U),A.removeEventListener("squeezestart",U),A.removeEventListener("squeezeend",U),A.removeEventListener("end",K),A.removeEventListener("inputsourceschange",q);for(let k=0;k<v.length;k++){const tt=_[k];tt!==null&&(_[k]=null,v[k].disconnect(tt))}y=null,z=null,C.reset(),t.setRenderTarget(g),f=null,u=null,d=null,A=null,M=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return A},this.setSession=async function(k){if(A=k,A!==null){if(g=t.getRenderTarget(),A.addEventListener("select",U),A.addEventListener("selectstart",U),A.addEventListener("selectend",U),A.addEventListener("squeeze",U),A.addEventListener("squeezestart",U),A.addEventListener("squeezeend",U),A.addEventListener("end",K),A.addEventListener("inputsourceschange",q),h.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(N),A.enabledFeatures!==void 0&&A.enabledFeatures.includes("layers")){let ft=null,rt=null,_t=null;h.depth&&(_t=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=h.stencil?Di:Ei,rt=h.stencil?_i:Wn);const xt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=new XRWebGLBinding(A,e),u=d.createProjectionLayer(xt),A.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Xn(u.textureWidth,u.textureHeight,{format:Ke,type:fn,depthTexture:new va(u.textureWidth,u.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const ft={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(A,e,ft),A.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Xn(f.framebufferWidth,f.framebufferHeight,{format:Ke,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil})}M.isXRRenderTarget=!0,this.setFoveation(a),c=null,s=await A.requestReferenceSpace(o),qt.setContext(A),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(A!==null)return A.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function q(k){for(let tt=0;tt<k.removed.length;tt++){const ft=k.removed[tt],rt=_.indexOf(ft);rt>=0&&(_[rt]=null,v[rt].disconnect(ft))}for(let tt=0;tt<k.added.length;tt++){const ft=k.added[tt];let rt=_.indexOf(ft);if(rt===-1){for(let xt=0;xt<v.length;xt++)if(xt>=_.length){_.push(ft),rt=xt;break}else if(_[xt]===null){_[xt]=ft,rt=xt;break}if(rt===-1)break}const _t=v[rt];_t&&_t.connect(ft)}}const Y=new L,Z=new L;function G(k,tt,ft){Y.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(ft.matrixWorld);const rt=Y.distanceTo(Z),_t=tt.projectionMatrix.elements,xt=ft.projectionMatrix.elements,wt=_t[14]/(_t[10]-1),te=_t[14]/(_t[10]+1),Lt=(_t[9]+1)/_t[5],se=(_t[9]-1)/_t[5],x=(_t[8]-1)/_t[0],Ne=(xt[8]+1)/xt[0],Ht=wt*x,Rt=wt*Ne,Bt=rt/(-x+Ne),Zt=Bt*-x;if(tt.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Zt),k.translateZ(Bt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),_t[10]===-1)k.projectionMatrix.copy(tt.projectionMatrix),k.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const mt=wt+Bt,Q=te+Bt,p=Ht-Zt,H=Rt+(rt-Zt),W=Lt*te/Q*mt,j=se*te/Q*mt;k.projectionMatrix.makePerspective(p,H,W,j,mt,Q),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function At(k,tt){tt===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(tt.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(A===null)return;let tt=k.near,ft=k.far;C.texture!==null&&(C.depthNear>0&&(tt=C.depthNear),C.depthFar>0&&(ft=C.depthFar)),B.near=S.near=D.near=tt,B.far=S.far=D.far=ft,(y!==B.near||z!==B.far)&&(A.updateRenderState({depthNear:B.near,depthFar:B.far}),y=B.near,z=B.far),D.layers.mask=k.layers.mask|2,S.layers.mask=k.layers.mask|4,B.layers.mask=D.layers.mask|S.layers.mask;const rt=k.parent,_t=B.cameras;At(B,rt);for(let xt=0;xt<_t.length;xt++)At(_t[xt],rt);_t.length===2?G(B,D,S):B.projectionMatrix.copy(D.projectionMatrix),lt(k,B,rt)};function lt(k,tt,ft){ft===null?k.matrix.copy(tt.matrixWorld):(k.matrix.copy(ft.matrixWorld),k.matrix.invert(),k.matrix.multiply(tt.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(tt.projectionMatrix),k.projectionMatrixInverse.copy(tt.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=is*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return a},this.setFoveation=function(k){a=k,u!==null&&(u.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(B)};let Et=null;function bt(k,tt){if(l=tt.getViewerPose(c||s),m=tt,l!==null){const ft=l.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let rt=!1;ft.length!==B.cameras.length&&(B.cameras.length=0,rt=!0);for(let xt=0;xt<ft.length;xt++){const wt=ft[xt];let te=null;if(f!==null)te=f.getViewport(wt);else{const se=d.getViewSubImage(u,wt);te=se.viewport,xt===0&&(t.setRenderTargetTextures(M,se.colorTexture,u.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(M))}let Lt=I[xt];Lt===void 0&&(Lt=new Le,Lt.layers.enable(xt),Lt.viewport=new Ae,I[xt]=Lt),Lt.matrix.fromArray(wt.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(wt.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(te.x,te.y,te.width,te.height),xt===0&&(B.matrix.copy(Lt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),rt===!0&&B.cameras.push(Lt)}const _t=A.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const xt=d.getDepthInformation(ft[0]);xt&&xt.isValid&&xt.texture&&C.init(t,xt,A.renderState)}}for(let ft=0;ft<v.length;ft++){const rt=_[ft],_t=v[ft];rt!==null&&_t!==void 0&&_t.update(rt,tt,c||s)}Et&&Et(k,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),m=null}const qt=new Ma;qt.setAnimationLoop(bt),this.setAnimationLoop=function(k){Et=k},this.dispose=function(){}}}const Pn=new Je,dp=new re;function up(n,t){function e(h,g){h.matrixAutoUpdate===!0&&h.updateMatrix(),g.value.copy(h.matrix)}function i(h,g){g.color.getRGB(h.fogColor.value,Qa(n)),g.isFog?(h.fogNear.value=g.near,h.fogFar.value=g.far):g.isFogExp2&&(h.fogDensity.value=g.density)}function A(h,g,M,v,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(h,g):g.isMeshToonMaterial?(r(h,g),d(h,g)):g.isMeshPhongMaterial?(r(h,g),l(h,g)):g.isMeshStandardMaterial?(r(h,g),u(h,g),g.isMeshPhysicalMaterial&&f(h,g,_)):g.isMeshMatcapMaterial?(r(h,g),m(h,g)):g.isMeshDepthMaterial?r(h,g):g.isMeshDistanceMaterial?(r(h,g),C(h,g)):g.isMeshNormalMaterial?r(h,g):g.isLineBasicMaterial?(s(h,g),g.isLineDashedMaterial&&o(h,g)):g.isPointsMaterial?a(h,g,M,v):g.isSpriteMaterial?c(h,g):g.isShadowMaterial?(h.color.value.copy(g.color),h.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(h,g){h.opacity.value=g.opacity,g.color&&h.diffuse.value.copy(g.color),g.emissive&&h.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(h.map.value=g.map,e(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.bumpMap&&(h.bumpMap.value=g.bumpMap,e(g.bumpMap,h.bumpMapTransform),h.bumpScale.value=g.bumpScale,g.side===ye&&(h.bumpScale.value*=-1)),g.normalMap&&(h.normalMap.value=g.normalMap,e(g.normalMap,h.normalMapTransform),h.normalScale.value.copy(g.normalScale),g.side===ye&&h.normalScale.value.negate()),g.displacementMap&&(h.displacementMap.value=g.displacementMap,e(g.displacementMap,h.displacementMapTransform),h.displacementScale.value=g.displacementScale,h.displacementBias.value=g.displacementBias),g.emissiveMap&&(h.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,h.emissiveMapTransform)),g.specularMap&&(h.specularMap.value=g.specularMap,e(g.specularMap,h.specularMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest);const M=t.get(g),v=M.envMap,_=M.envMapRotation;v&&(h.envMap.value=v,Pn.copy(_),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),h.envMapRotation.value.setFromMatrix4(dp.makeRotationFromEuler(Pn)),h.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=g.reflectivity,h.ior.value=g.ior,h.refractionRatio.value=g.refractionRatio),g.lightMap&&(h.lightMap.value=g.lightMap,h.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,h.lightMapTransform)),g.aoMap&&(h.aoMap.value=g.aoMap,h.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,h.aoMapTransform))}function s(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,g.map&&(h.map.value=g.map,e(g.map,h.mapTransform))}function o(h,g){h.dashSize.value=g.dashSize,h.totalSize.value=g.dashSize+g.gapSize,h.scale.value=g.scale}function a(h,g,M,v){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.size.value=g.size*M,h.scale.value=v*.5,g.map&&(h.map.value=g.map,e(g.map,h.uvTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function c(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.rotation.value=g.rotation,g.map&&(h.map.value=g.map,e(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function l(h,g){h.specular.value.copy(g.specular),h.shininess.value=Math.max(g.shininess,1e-4)}function d(h,g){g.gradientMap&&(h.gradientMap.value=g.gradientMap)}function u(h,g){h.metalness.value=g.metalness,g.metalnessMap&&(h.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,h.metalnessMapTransform)),h.roughness.value=g.roughness,g.roughnessMap&&(h.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,h.roughnessMapTransform)),g.envMap&&(h.envMapIntensity.value=g.envMapIntensity)}function f(h,g,M){h.ior.value=g.ior,g.sheen>0&&(h.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),h.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(h.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,h.sheenColorMapTransform)),g.sheenRoughnessMap&&(h.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,h.sheenRoughnessMapTransform))),g.clearcoat>0&&(h.clearcoat.value=g.clearcoat,h.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(h.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,h.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(h.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ye&&h.clearcoatNormalScale.value.negate())),g.dispersion>0&&(h.dispersion.value=g.dispersion),g.iridescence>0&&(h.iridescence.value=g.iridescence,h.iridescenceIOR.value=g.iridescenceIOR,h.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(h.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,h.iridescenceMapTransform)),g.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),g.transmission>0&&(h.transmission.value=g.transmission,h.transmissionSamplerMap.value=M.texture,h.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(h.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,h.transmissionMapTransform)),h.thickness.value=g.thickness,g.thicknessMap&&(h.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=g.attenuationDistance,h.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(h.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(h.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=g.specularIntensity,h.specularColor.value.copy(g.specularColor),g.specularColorMap&&(h.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,h.specularColorMapTransform)),g.specularIntensityMap&&(h.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,h.specularIntensityMapTransform))}function m(h,g){g.matcap&&(h.matcap.value=g.matcap)}function C(h,g){const M=t.get(g).light;h.referencePosition.value.setFromMatrixPosition(M.matrixWorld),h.nearDistance.value=M.shadow.camera.near,h.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:A}}function hp(n,t,e,i){let A={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function a(M,v){const _=v.program;i.uniformBlockBinding(M,_)}function c(M,v){let _=A[M.id];_===void 0&&(m(M),_=l(M),A[M.id]=_,M.addEventListener("dispose",h));const N=v.program;i.updateUBOMapping(M,N);const T=t.render.frame;r[M.id]!==T&&(u(M),r[M.id]=T)}function l(M){const v=d();M.__bindingPointIndex=v;const _=n.createBuffer(),N=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,N,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function d(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const v=A[M.id],_=M.uniforms,N=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,D=_.length;T<D;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let I=0,B=S.length;I<B;I++){const y=S[I];if(f(y,T,I,N)===!0){const z=y.__offset,U=Array.isArray(y.value)?y.value:[y.value];let K=0;for(let q=0;q<U.length;q++){const Y=U[q],Z=C(Y);typeof Y=="number"||typeof Y=="boolean"?(y.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,z+K,y.__data)):Y.isMatrix3?(y.__data[0]=Y.elements[0],y.__data[1]=Y.elements[1],y.__data[2]=Y.elements[2],y.__data[3]=0,y.__data[4]=Y.elements[3],y.__data[5]=Y.elements[4],y.__data[6]=Y.elements[5],y.__data[7]=0,y.__data[8]=Y.elements[6],y.__data[9]=Y.elements[7],y.__data[10]=Y.elements[8],y.__data[11]=0):(Y.toArray(y.__data,K),K+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,v,_,N){const T=M.value,D=v+"_"+_;if(N[D]===void 0)return typeof T=="number"||typeof T=="boolean"?N[D]=T:N[D]=T.clone(),!0;{const S=N[D];if(typeof T=="number"||typeof T=="boolean"){if(S!==T)return N[D]=T,!0}else if(S.equals(T)===!1)return S.copy(T),!0}return!1}function m(M){const v=M.uniforms;let _=0;const N=16;for(let D=0,S=v.length;D<S;D++){const I=Array.isArray(v[D])?v[D]:[v[D]];for(let B=0,y=I.length;B<y;B++){const z=I[B],U=Array.isArray(z.value)?z.value:[z.value];for(let K=0,q=U.length;K<q;K++){const Y=U[K],Z=C(Y),G=_%N,At=G%Z.boundary,lt=G+At;_+=At,lt!==0&&N-lt<Z.storage&&(_+=N-lt),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=Z.storage}}}const T=_%N;return T>0&&(_+=N-T),M.__size=_,M.__cache={},this}function C(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function h(M){const v=M.target;v.removeEventListener("dispose",h);const _=s.indexOf(v.__bindingPointIndex);s.splice(_,1),n.deleteBuffer(A[v.id]),delete A[v.id],delete r[v.id]}function g(){for(const M in A)n.deleteBuffer(A[M]);s=[],A={},r={}}return{bind:a,update:c,dispose:g}}class fp{constructor(t={}){const{canvas:e=kl(),context:i=null,depth:A=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const m=new Uint32Array(4),C=new Int32Array(4);let h=null,g=null;const M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this.toneMapping=vn,this.toneMappingExposure=1;const _=this;let N=!1,T=0,D=0,S=null,I=-1,B=null;const y=new Ae,z=new Ae;let U=null;const K=new Vt(0);let q=0,Y=e.width,Z=e.height,G=1,At=null,lt=null;const Et=new Ae(0,0,Y,Z),bt=new Ae(0,0,Y,Z);let qt=!1;const k=new Es;let tt=!1,ft=!1;this.transmissionResolutionScale=1;const rt=new re,_t=new re,xt=new L,wt=new Ae,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function se(){return S===null?G:1}let x=i;function Ne(E,b){return e.getContext(E,b)}try{const E={alpha:!0,depth:A,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ls}`),e.addEventListener("webglcontextlost",X,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",ot,!1),x===null){const b="webgl2";if(x=Ne(b,E),x===null)throw Ne(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ht,Rt,Bt,Zt,mt,Q,p,H,W,j,V,pt,st,gt,Ut,$,dt,Qt,Dt,ut,Pt,Ot,jt,O;function nt(){Ht=new _h(x),Ht.init(),Ot=new sp(x,Ht),Rt=new mh(x,Ht,t,Ot),Bt=new Ap(x,Ht),Rt.reverseDepthBuffer&&u&&Bt.buffers.depth.setReversed(!0),Zt=new xh(x),mt=new Yf,Q=new rp(x,Ht,Bt,mt,Rt,Ot,Zt),p=new Bh(_),H=new Qh(_),W=new wg(x),jt=new fh(x,W),j=new Dh(x,W,Zt,jt),V=new Mh(x,j,W,Zt),Dt=new Sh(x,Rt,Q),$=new Eh(mt),pt=new kf(_,p,H,Ht,Rt,jt,$),st=new up(_,mt),gt=new Xf,Ut=new $f(Ht),Qt=new hh(_,p,H,Bt,V,f,a),dt=new np(_,V,Rt),O=new hp(x,Zt,Rt,Bt),ut=new ph(x,Ht,Zt),Pt=new vh(x,Ht,Zt),Zt.programs=pt.programs,_.capabilities=Rt,_.extensions=Ht,_.properties=mt,_.renderLists=gt,_.shadowMap=dt,_.state=Bt,_.info=Zt}nt();const F=new gp(_,x);this.xr=F,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const E=Ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(Y,Z,!1))},this.getSize=function(E){return E.set(Y,Z)},this.setSize=function(E,b,R=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,Z=b,e.width=Math.floor(E*G),e.height=Math.floor(b*G),R===!0&&(e.style.width=E+"px",e.style.height=b+"px"),this.setViewport(0,0,E,b)},this.getDrawingBufferSize=function(E){return E.set(Y*G,Z*G).floor()},this.setDrawingBufferSize=function(E,b,R){Y=E,Z=b,G=R,e.width=Math.floor(E*R),e.height=Math.floor(b*R),this.setViewport(0,0,E,b)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,b,R,P){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,b,R,P),Bt.viewport(y.copy(Et).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(bt)},this.setScissor=function(E,b,R,P){E.isVector4?bt.set(E.x,E.y,E.z,E.w):bt.set(E,b,R,P),Bt.scissor(z.copy(bt).multiplyScalar(G).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(E){Bt.setScissorTest(qt=E)},this.setOpaqueSort=function(E){At=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(E=!0,b=!0,R=!0){let P=0;if(E){let w=!1;if(S!==null){const J=S.texture.format;w=J===ps||J===fs||J===hs}if(w){const J=S.texture.type,it=J===fn||J===Wn||J===Gi||J===_i||J===ds||J===us,ct=Qt.getClearColor(),ht=Qt.getClearAlpha(),vt=ct.r,St=ct.g,Ct=ct.b;it?(m[0]=vt,m[1]=St,m[2]=Ct,m[3]=ht,x.clearBufferuiv(x.COLOR,0,m)):(C[0]=vt,C[1]=St,C[2]=Ct,C[3]=ht,x.clearBufferiv(x.COLOR,0,C))}else P|=x.COLOR_BUFFER_BIT}b&&(P|=x.DEPTH_BUFFER_BIT),R&&(P|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",X,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Qt.dispose(),gt.dispose(),Ut.dispose(),mt.dispose(),p.dispose(),H.dispose(),V.dispose(),jt.dispose(),O.dispose(),pt.dispose(),F.dispose(),F.removeEventListener("sessionstart",Os),F.removeEventListener("sessionend",Ts),On.stop()};function X(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const E=Zt.autoReset,b=dt.enabled,R=dt.autoUpdate,P=dt.needsUpdate,w=dt.type;nt(),Zt.autoReset=E,dt.enabled=b,dt.autoUpdate=R,dt.needsUpdate=P,dt.type=w}function ot(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Mt(E){const b=E.target;b.removeEventListener("dispose",Mt),ne(b)}function ne(E){pe(E),mt.remove(E)}function pe(E){const b=mt.get(E).programs;b!==void 0&&(b.forEach(function(R){pt.releaseProgram(R)}),E.isShaderMaterial&&pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,b,R,P,w,J){b===null&&(b=te);const it=w.isMesh&&w.matrixWorld.determinant()<0,ct=Ya(E,b,R,P,w);Bt.setMaterial(P,it);let ht=R.index,vt=1;if(P.wireframe===!0){if(ht=j.getWireframeAttribute(R),ht===void 0)return;vt=2}const St=R.drawRange,Ct=R.attributes.position;let Ft=St.start*vt,kt=(St.start+St.count)*vt;J!==null&&(Ft=Math.max(Ft,J.start*vt),kt=Math.min(kt,(J.start+J.count)*vt)),ht!==null?(Ft=Math.max(Ft,0),kt=Math.min(kt,ht.count)):Ct!=null&&(Ft=Math.max(Ft,0),kt=Math.min(kt,Ct.count));const oe=kt-Ft;if(oe<0||oe===1/0)return;jt.setup(w,P,ct,R,ht);let ie,Gt=ut;if(ht!==null&&(ie=W.get(ht),Gt=Pt,Gt.setIndex(ie)),w.isMesh)P.wireframe===!0?(Bt.setLineWidth(P.wireframeLinewidth*se()),Gt.setMode(x.LINES)):Gt.setMode(x.TRIANGLES);else if(w.isLine){let It=P.linewidth;It===void 0&&(It=1),Bt.setLineWidth(It*se()),w.isLineSegments?Gt.setMode(x.LINES):w.isLineLoop?Gt.setMode(x.LINE_LOOP):Gt.setMode(x.LINE_STRIP)}else w.isPoints?Gt.setMode(x.POINTS):w.isSprite&&Gt.setMode(x.TRIANGLES);if(w.isBatchedMesh)if(w._multiDrawInstances!==null)Gt.renderMultiDrawInstances(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount,w._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Gt.renderMultiDraw(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount);else{const It=w._multiDrawStarts,he=w._multiDrawCounts,Yt=w._multiDrawCount,Ge=ht?W.get(ht).bytesPerElement:1,$n=mt.get(P).currentProgram.getUniforms();for(let Oe=0;Oe<Yt;Oe++)$n.setValue(x,"_gl_DrawID",Oe),Gt.render(It[Oe]/Ge,he[Oe])}else if(w.isInstancedMesh)Gt.renderInstances(Ft,oe,w.count);else if(R.isInstancedBufferGeometry){const It=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,he=Math.min(R.instanceCount,It);Gt.renderInstances(Ft,oe,he)}else Gt.render(Ft,oe)};function Xt(E,b,R){E.transparent===!0&&E.side===Ye&&E.forceSinglePass===!1?(E.side=ye,E.needsUpdate=!0,eA(E,b,R),E.side=Sn,E.needsUpdate=!0,eA(E,b,R),E.side=Ye):eA(E,b,R)}this.compile=function(E,b,R=null){R===null&&(R=E),g=Ut.get(R),g.init(b),v.push(g),R.traverseVisible(function(w){w.isLight&&w.layers.test(b.layers)&&(g.pushLight(w),w.castShadow&&g.pushShadow(w))}),E!==R&&E.traverseVisible(function(w){w.isLight&&w.layers.test(b.layers)&&(g.pushLight(w),w.castShadow&&g.pushShadow(w))}),g.setupLights();const P=new Set;return E.traverse(function(w){if(!(w.isMesh||w.isPoints||w.isLine||w.isSprite))return;const J=w.material;if(J)if(Array.isArray(J))for(let it=0;it<J.length;it++){const ct=J[it];Xt(ct,R,w),P.add(ct)}else Xt(J,R,w),P.add(J)}),v.pop(),g=null,P},this.compileAsync=function(E,b,R=null){const P=this.compile(E,b,R);return new Promise(w=>{function J(){if(P.forEach(function(it){mt.get(it).currentProgram.isReady()&&P.delete(it)}),P.size===0){w(E);return}setTimeout(J,10)}Ht.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Fe=null;function tn(E){Fe&&Fe(E)}function Os(){On.stop()}function Ts(){On.start()}const On=new Ma;On.setAnimationLoop(tn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(E){Fe=E,F.setAnimationLoop(E),E===null?On.stop():On.start()},F.addEventListener("sessionstart",Os),F.addEventListener("sessionend",Ts),this.render=function(E,b){if(b!==void 0&&b.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(b),b=F.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,b,S),g=Ut.get(E,v.length),g.init(b),v.push(g),_t.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),k.setFromProjectionMatrix(_t),ft=this.localClippingEnabled,tt=$.init(this.clippingPlanes,ft),h=gt.get(E,M.length),h.init(),M.push(h),F.enabled===!0&&F.isPresenting===!0){const J=_.xr.getDepthSensingMesh();J!==null&&LA(J,b,-1/0,_.sortObjects)}LA(E,b,0,_.sortObjects),h.finish(),_.sortObjects===!0&&h.sort(At,lt),Lt=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Lt&&Qt.addToRenderList(h,E),this.info.render.frame++,tt===!0&&$.beginShadows();const R=g.state.shadowsArray;dt.render(R,E,b),tt===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const P=h.opaque,w=h.transmissive;if(g.setupLights(),b.isArrayCamera){const J=b.cameras;if(w.length>0)for(let it=0,ct=J.length;it<ct;it++){const ht=J[it];ws(P,w,E,ht)}Lt&&Qt.render(E);for(let it=0,ct=J.length;it<ct;it++){const ht=J[it];bs(h,E,ht,ht.viewport)}}else w.length>0&&ws(P,w,E,b),Lt&&Qt.render(E),bs(h,E,b);S!==null&&D===0&&(Q.updateMultisampleRenderTarget(S),Q.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(_,E,b),jt.resetDefaultState(),I=-1,B=null,v.pop(),v.length>0?(g=v[v.length-1],tt===!0&&$.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,M.pop(),M.length>0?h=M[M.length-1]:h=null};function LA(E,b,R,P){if(E.visible===!1)return;if(E.layers.test(b.layers)){if(E.isGroup)R=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(b);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){P&&wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const it=V.update(E),ct=E.material;ct.visible&&h.push(E,it,ct,R,wt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||k.intersectsObject(E))){const it=V.update(E),ct=E.material;if(P&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),wt.copy(E.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),wt.copy(it.boundingSphere.center)),wt.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(ct)){const ht=it.groups;for(let vt=0,St=ht.length;vt<St;vt++){const Ct=ht[vt],Ft=ct[Ct.materialIndex];Ft&&Ft.visible&&h.push(E,it,Ft,R,wt.z,Ct)}}else ct.visible&&h.push(E,it,ct,R,wt.z,null)}}const J=E.children;for(let it=0,ct=J.length;it<ct;it++)LA(J[it],b,R,P)}function bs(E,b,R,P){const w=E.opaque,J=E.transmissive,it=E.transparent;g.setupLightsView(R),tt===!0&&$.setGlobalState(_.clippingPlanes,R),P&&Bt.viewport(y.copy(P)),w.length>0&&tA(w,b,R),J.length>0&&tA(J,b,R),it.length>0&&tA(it,b,R),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function ws(E,b,R,P){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[P.id]===void 0&&(g.state.transmissionRenderTarget[P.id]=new Xn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Xi:fn,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const J=g.state.transmissionRenderTarget[P.id],it=P.viewport||y;J.setSize(it.z*_.transmissionResolutionScale,it.w*_.transmissionResolutionScale);const ct=_.getRenderTarget();_.setRenderTarget(J),_.getClearColor(K),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),Lt&&Qt.render(R);const ht=_.toneMapping;_.toneMapping=vn;const vt=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),g.setupLightsView(P),tt===!0&&$.setGlobalState(_.clippingPlanes,P),tA(E,R,P),Q.updateMultisampleRenderTarget(J),Q.updateRenderTargetMipmap(J),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Ct=0,Ft=b.length;Ct<Ft;Ct++){const kt=b[Ct],oe=kt.object,ie=kt.geometry,Gt=kt.material,It=kt.group;if(Gt.side===Ye&&oe.layers.test(P.layers)){const he=Gt.side;Gt.side=ye,Gt.needsUpdate=!0,Ns(oe,R,P,ie,Gt,It),Gt.side=he,Gt.needsUpdate=!0,St=!0}}St===!0&&(Q.updateMultisampleRenderTarget(J),Q.updateRenderTargetMipmap(J))}_.setRenderTarget(ct),_.setClearColor(K,q),vt!==void 0&&(P.viewport=vt),_.toneMapping=ht}function tA(E,b,R){const P=b.isScene===!0?b.overrideMaterial:null;for(let w=0,J=E.length;w<J;w++){const it=E[w],ct=it.object,ht=it.geometry,vt=P===null?it.material:P,St=it.group;ct.layers.test(R.layers)&&Ns(ct,b,R,ht,vt,St)}}function Ns(E,b,R,P,w,J){E.onBeforeRender(_,b,R,P,w,J),E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),w.onBeforeRender(_,b,R,P,E,J),w.transparent===!0&&w.side===Ye&&w.forceSinglePass===!1?(w.side=ye,w.needsUpdate=!0,_.renderBufferDirect(R,b,P,w,E,J),w.side=Sn,w.needsUpdate=!0,_.renderBufferDirect(R,b,P,w,E,J),w.side=Ye):_.renderBufferDirect(R,b,P,w,E,J),E.onAfterRender(_,b,R,P,w,J)}function eA(E,b,R){b.isScene!==!0&&(b=te);const P=mt.get(E),w=g.state.lights,J=g.state.shadowsArray,it=w.state.version,ct=pt.getParameters(E,w.state,J,b,R),ht=pt.getProgramCacheKey(ct);let vt=P.programs;P.environment=E.isMeshStandardMaterial?b.environment:null,P.fog=b.fog,P.envMap=(E.isMeshStandardMaterial?H:p).get(E.envMap||P.environment),P.envMapRotation=P.environment!==null&&E.envMap===null?b.environmentRotation:E.envMapRotation,vt===void 0&&(E.addEventListener("dispose",Mt),vt=new Map,P.programs=vt);let St=vt.get(ht);if(St!==void 0){if(P.currentProgram===St&&P.lightsStateVersion===it)return Rs(E,ct),St}else ct.uniforms=pt.getUniforms(E),E.onBeforeCompile(ct,_),St=pt.acquireProgram(ct,ht),vt.set(ht,St),P.uniforms=ct.uniforms;const Ct=P.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=$.uniform),Rs(E,ct),P.needsLights=Xa(E),P.lightsStateVersion=it,P.needsLights&&(Ct.ambientLightColor.value=w.state.ambient,Ct.lightProbe.value=w.state.probe,Ct.directionalLights.value=w.state.directional,Ct.directionalLightShadows.value=w.state.directionalShadow,Ct.spotLights.value=w.state.spot,Ct.spotLightShadows.value=w.state.spotShadow,Ct.rectAreaLights.value=w.state.rectArea,Ct.ltc_1.value=w.state.rectAreaLTC1,Ct.ltc_2.value=w.state.rectAreaLTC2,Ct.pointLights.value=w.state.point,Ct.pointLightShadows.value=w.state.pointShadow,Ct.hemisphereLights.value=w.state.hemi,Ct.directionalShadowMap.value=w.state.directionalShadowMap,Ct.directionalShadowMatrix.value=w.state.directionalShadowMatrix,Ct.spotShadowMap.value=w.state.spotShadowMap,Ct.spotLightMatrix.value=w.state.spotLightMatrix,Ct.spotLightMap.value=w.state.spotLightMap,Ct.pointShadowMap.value=w.state.pointShadowMap,Ct.pointShadowMatrix.value=w.state.pointShadowMatrix),P.currentProgram=St,P.uniformsList=null,St}function Hs(E){if(E.uniformsList===null){const b=E.currentProgram.getUniforms();E.uniformsList=OA.seqWithValue(b.seq,E.uniforms)}return E.uniformsList}function Rs(E,b){const R=mt.get(E);R.outputColorSpace=b.outputColorSpace,R.batching=b.batching,R.batchingColor=b.batchingColor,R.instancing=b.instancing,R.instancingColor=b.instancingColor,R.instancingMorph=b.instancingMorph,R.skinning=b.skinning,R.morphTargets=b.morphTargets,R.morphNormals=b.morphNormals,R.morphColors=b.morphColors,R.morphTargetsCount=b.morphTargetsCount,R.numClippingPlanes=b.numClippingPlanes,R.numIntersection=b.numClipIntersection,R.vertexAlphas=b.vertexAlphas,R.vertexTangents=b.vertexTangents,R.toneMapping=b.toneMapping}function Ya(E,b,R,P,w){b.isScene!==!0&&(b=te),Q.resetTextureUnits();const J=b.fog,it=P.isMeshStandardMaterial?b.environment:null,ct=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:vi,ht=(P.isMeshStandardMaterial?H:p).get(P.envMap||it),vt=P.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,St=!!R.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),Ct=!!R.morphAttributes.position,Ft=!!R.morphAttributes.normal,kt=!!R.morphAttributes.color;let oe=vn;P.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(oe=_.toneMapping);const ie=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Gt=ie!==void 0?ie.length:0,It=mt.get(P),he=g.state.lights;if(tt===!0&&(ft===!0||E!==B)){const Qe=E===B&&P.id===I;$.setState(P,E,Qe)}let Yt=!1;P.version===It.__version?(It.needsLights&&It.lightsStateVersion!==he.state.version||It.outputColorSpace!==ct||w.isBatchedMesh&&It.batching===!1||!w.isBatchedMesh&&It.batching===!0||w.isBatchedMesh&&It.batchingColor===!0&&w.colorTexture===null||w.isBatchedMesh&&It.batchingColor===!1&&w.colorTexture!==null||w.isInstancedMesh&&It.instancing===!1||!w.isInstancedMesh&&It.instancing===!0||w.isSkinnedMesh&&It.skinning===!1||!w.isSkinnedMesh&&It.skinning===!0||w.isInstancedMesh&&It.instancingColor===!0&&w.instanceColor===null||w.isInstancedMesh&&It.instancingColor===!1&&w.instanceColor!==null||w.isInstancedMesh&&It.instancingMorph===!0&&w.morphTexture===null||w.isInstancedMesh&&It.instancingMorph===!1&&w.morphTexture!==null||It.envMap!==ht||P.fog===!0&&It.fog!==J||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==$.numPlanes||It.numIntersection!==$.numIntersection)||It.vertexAlphas!==vt||It.vertexTangents!==St||It.morphTargets!==Ct||It.morphNormals!==Ft||It.morphColors!==kt||It.toneMapping!==oe||It.morphTargetsCount!==Gt)&&(Yt=!0):(Yt=!0,It.__version=P.version);let Ge=It.currentProgram;Yt===!0&&(Ge=eA(P,b,w));let $n=!1,Oe=!1,Ni=!1;const Jt=Ge.getUniforms(),He=It.uniforms;if(Bt.useProgram(Ge.program)&&($n=!0,Oe=!0,Ni=!0),P.id!==I&&(I=P.id,Oe=!0),$n||B!==E){Bt.buffers.depth.getReversed()?(rt.copy(E.projectionMatrix),Wl(rt),Xl(rt),Jt.setValue(x,"projectionMatrix",rt)):Jt.setValue(x,"projectionMatrix",E.projectionMatrix),Jt.setValue(x,"viewMatrix",E.matrixWorldInverse);const ve=Jt.map.cameraPosition;ve!==void 0&&ve.setValue(x,xt.setFromMatrixPosition(E.matrixWorld)),Rt.logarithmicDepthBuffer&&Jt.setValue(x,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&Jt.setValue(x,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,Oe=!0,Ni=!0)}if(w.isSkinnedMesh){Jt.setOptional(x,w,"bindMatrix"),Jt.setOptional(x,w,"bindMatrixInverse");const Qe=w.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Jt.setValue(x,"boneTexture",Qe.boneTexture,Q))}w.isBatchedMesh&&(Jt.setOptional(x,w,"batchingTexture"),Jt.setValue(x,"batchingTexture",w._matricesTexture,Q),Jt.setOptional(x,w,"batchingIdTexture"),Jt.setValue(x,"batchingIdTexture",w._indirectTexture,Q),Jt.setOptional(x,w,"batchingColorTexture"),w._colorsTexture!==null&&Jt.setValue(x,"batchingColorTexture",w._colorsTexture,Q));const Re=R.morphAttributes;if((Re.position!==void 0||Re.normal!==void 0||Re.color!==void 0)&&Dt.update(w,R,Ge),(Oe||It.receiveShadow!==w.receiveShadow)&&(It.receiveShadow=w.receiveShadow,Jt.setValue(x,"receiveShadow",w.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(He.envMap.value=ht,He.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),P.isMeshStandardMaterial&&P.envMap===null&&b.environment!==null&&(He.envMapIntensity.value=b.environmentIntensity),Oe&&(Jt.setValue(x,"toneMappingExposure",_.toneMappingExposure),It.needsLights&&Wa(He,Ni),J&&P.fog===!0&&st.refreshFogUniforms(He,J),st.refreshMaterialUniforms(He,P,G,Z,g.state.transmissionRenderTarget[E.id]),OA.upload(x,Hs(It),He,Q)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(OA.upload(x,Hs(It),He,Q),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&Jt.setValue(x,"center",w.center),Jt.setValue(x,"modelViewMatrix",w.modelViewMatrix),Jt.setValue(x,"normalMatrix",w.normalMatrix),Jt.setValue(x,"modelMatrix",w.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const Qe=P.uniformsGroups;for(let ve=0,UA=Qe.length;ve<UA;ve++){const Tn=Qe[ve];O.update(Tn,Ge),O.bind(Tn,Ge)}}return Ge}function Wa(E,b){E.ambientLightColor.needsUpdate=b,E.lightProbe.needsUpdate=b,E.directionalLights.needsUpdate=b,E.directionalLightShadows.needsUpdate=b,E.pointLights.needsUpdate=b,E.pointLightShadows.needsUpdate=b,E.spotLights.needsUpdate=b,E.spotLightShadows.needsUpdate=b,E.rectAreaLights.needsUpdate=b,E.hemisphereLights.needsUpdate=b}function Xa(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,b,R){mt.get(E.texture).__webglTexture=b,mt.get(E.depthTexture).__webglTexture=R;const P=mt.get(E);P.__hasExternalTextures=!0,P.__autoAllocateDepthBuffer=R===void 0,P.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,b){const R=mt.get(E);R.__webglFramebuffer=b,R.__useDefaultFramebuffer=b===void 0};const Ka=x.createFramebuffer();this.setRenderTarget=function(E,b=0,R=0){S=E,T=b,D=R;let P=!0,w=null,J=!1,it=!1;if(E){const ht=mt.get(E);if(ht.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(x.FRAMEBUFFER,null),P=!1;else if(ht.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(ht.__hasExternalTextures)Q.rebindTextures(E,mt.get(E.texture).__webglTexture,mt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ct=E.depthTexture;if(ht.__boundDepthTexture!==Ct){if(Ct!==null&&mt.has(Ct)&&(E.width!==Ct.image.width||E.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}const vt=E.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(it=!0);const St=mt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(St[b])?w=St[b][R]:w=St[b],J=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?w=mt.get(E).__webglMultisampledFramebuffer:Array.isArray(St)?w=St[R]:w=St,y.copy(E.viewport),z.copy(E.scissor),U=E.scissorTest}else y.copy(Et).multiplyScalar(G).floor(),z.copy(bt).multiplyScalar(G).floor(),U=qt;if(R!==0&&(w=Ka),Bt.bindFramebuffer(x.FRAMEBUFFER,w)&&P&&Bt.drawBuffers(E,w),Bt.viewport(y),Bt.scissor(z),Bt.setScissorTest(U),J){const ht=mt.get(E.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+b,ht.__webglTexture,R)}else if(it){const ht=mt.get(E.texture),vt=b;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,ht.__webglTexture,R,vt)}else if(E!==null&&R!==0){const ht=mt.get(E.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,ht.__webglTexture,R)}I=-1},this.readRenderTargetPixels=function(E,b,R,P,w,J,it){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&it!==void 0&&(ct=ct[it]),ct){Bt.bindFramebuffer(x.FRAMEBUFFER,ct);try{const ht=E.texture,vt=ht.format,St=ht.type;if(!Rt.textureFormatReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=E.width-P&&R>=0&&R<=E.height-w&&x.readPixels(b,R,P,w,Ot.convert(vt),Ot.convert(St),J)}finally{const ht=S!==null?mt.get(S).__webglFramebuffer:null;Bt.bindFramebuffer(x.FRAMEBUFFER,ht)}}},this.readRenderTargetPixelsAsync=async function(E,b,R,P,w,J,it){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ct=mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&it!==void 0&&(ct=ct[it]),ct){const ht=E.texture,vt=ht.format,St=ht.type;if(!Rt.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(b>=0&&b<=E.width-P&&R>=0&&R<=E.height-w){Bt.bindFramebuffer(x.FRAMEBUFFER,ct);const Ct=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ct),x.bufferData(x.PIXEL_PACK_BUFFER,J.byteLength,x.STREAM_READ),x.readPixels(b,R,P,w,Ot.convert(vt),Ot.convert(St),0);const Ft=S!==null?mt.get(S).__webglFramebuffer:null;Bt.bindFramebuffer(x.FRAMEBUFFER,Ft);const kt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Yl(x,kt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ct),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,J),x.deleteBuffer(Ct),x.deleteSync(kt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,b=null,R=0){E.isTexture!==!0&&(fi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),b=arguments[0]||null,E=arguments[1]);const P=Math.pow(2,-R),w=Math.floor(E.image.width*P),J=Math.floor(E.image.height*P),it=b!==null?b.x:0,ct=b!==null?b.y:0;Q.setTexture2D(E,0),x.copyTexSubImage2D(x.TEXTURE_2D,R,0,0,it,ct,w,J),Bt.unbindTexture()};const qa=x.createFramebuffer(),ja=x.createFramebuffer();this.copyTextureToTexture=function(E,b,R=null,P=null,w=0,J=null){E.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture function signature has changed."),P=arguments[0]||null,E=arguments[1],b=arguments[2],J=arguments[3]||0,R=null),J===null&&(w!==0?(fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=w,w=0):J=0);let it,ct,ht,vt,St,Ct,Ft,kt,oe;const ie=E.isCompressedTexture?E.mipmaps[J]:E.image;if(R!==null)it=R.max.x-R.min.x,ct=R.max.y-R.min.y,ht=R.isBox3?R.max.z-R.min.z:1,vt=R.min.x,St=R.min.y,Ct=R.isBox3?R.min.z:0;else{const Re=Math.pow(2,-w);it=Math.floor(ie.width*Re),ct=Math.floor(ie.height*Re),E.isDataArrayTexture?ht=ie.depth:E.isData3DTexture?ht=Math.floor(ie.depth*Re):ht=1,vt=0,St=0,Ct=0}P!==null?(Ft=P.x,kt=P.y,oe=P.z):(Ft=0,kt=0,oe=0);const Gt=Ot.convert(b.format),It=Ot.convert(b.type);let he;b.isData3DTexture?(Q.setTexture3D(b,0),he=x.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(Q.setTexture2DArray(b,0),he=x.TEXTURE_2D_ARRAY):(Q.setTexture2D(b,0),he=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,b.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,b.unpackAlignment);const Yt=x.getParameter(x.UNPACK_ROW_LENGTH),Ge=x.getParameter(x.UNPACK_IMAGE_HEIGHT),$n=x.getParameter(x.UNPACK_SKIP_PIXELS),Oe=x.getParameter(x.UNPACK_SKIP_ROWS),Ni=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,ie.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ie.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,vt),x.pixelStorei(x.UNPACK_SKIP_ROWS,St),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ct);const Jt=E.isDataArrayTexture||E.isData3DTexture,He=b.isDataArrayTexture||b.isData3DTexture;if(E.isDepthTexture){const Re=mt.get(E),Qe=mt.get(b),ve=mt.get(Re.__renderTarget),UA=mt.get(Qe.__renderTarget);Bt.bindFramebuffer(x.READ_FRAMEBUFFER,ve.__webglFramebuffer),Bt.bindFramebuffer(x.DRAW_FRAMEBUFFER,UA.__webglFramebuffer);for(let Tn=0;Tn<ht;Tn++)Jt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,mt.get(E).__webglTexture,w,Ct+Tn),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,mt.get(b).__webglTexture,J,oe+Tn)),x.blitFramebuffer(vt,St,it,ct,Ft,kt,it,ct,x.DEPTH_BUFFER_BIT,x.NEAREST);Bt.bindFramebuffer(x.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(w!==0||E.isRenderTargetTexture||mt.has(E)){const Re=mt.get(E),Qe=mt.get(b);Bt.bindFramebuffer(x.READ_FRAMEBUFFER,qa),Bt.bindFramebuffer(x.DRAW_FRAMEBUFFER,ja);for(let ve=0;ve<ht;ve++)Jt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Re.__webglTexture,w,Ct+ve):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Re.__webglTexture,w),He?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Qe.__webglTexture,J,oe+ve):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Qe.__webglTexture,J),w!==0?x.blitFramebuffer(vt,St,it,ct,Ft,kt,it,ct,x.COLOR_BUFFER_BIT,x.NEAREST):He?x.copyTexSubImage3D(he,J,Ft,kt,oe+ve,vt,St,it,ct):x.copyTexSubImage2D(he,J,Ft,kt,vt,St,it,ct);Bt.bindFramebuffer(x.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else He?E.isDataTexture||E.isData3DTexture?x.texSubImage3D(he,J,Ft,kt,oe,it,ct,ht,Gt,It,ie.data):b.isCompressedArrayTexture?x.compressedTexSubImage3D(he,J,Ft,kt,oe,it,ct,ht,Gt,ie.data):x.texSubImage3D(he,J,Ft,kt,oe,it,ct,ht,Gt,It,ie):E.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,J,Ft,kt,it,ct,Gt,It,ie.data):E.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,J,Ft,kt,ie.width,ie.height,Gt,ie.data):x.texSubImage2D(x.TEXTURE_2D,J,Ft,kt,it,ct,Gt,It,ie);x.pixelStorei(x.UNPACK_ROW_LENGTH,Yt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Ge),x.pixelStorei(x.UNPACK_SKIP_PIXELS,$n),x.pixelStorei(x.UNPACK_SKIP_ROWS,Oe),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ni),J===0&&b.generateMipmaps&&x.generateMipmap(he),Bt.unbindTexture()},this.copyTextureToTexture3D=function(E,b,R=null,P=null,w=0){return E.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),R=arguments[0]||null,P=arguments[1]||null,E=arguments[2],b=arguments[3],w=arguments[4]||0),fi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,b,R,P,w)},this.initRenderTarget=function(E){mt.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),Bt.unbindTexture()},this.resetState=function(){T=0,D=0,S=null,Bt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=zt._getUnpackColorSpace()}}const xn={a:"C4",s:"G#3",d:"D4",f:"D#4",g:"E4",h:"F4",j:"F#4",k:"G4",l:"A4",ç:"A#4","]":"A#5",Enter:"B#4",q:"C5",".":"C#5",e:"D5",r:"D#5",t:"E5",y:"F5",u:"F#5",i:"G5",o:"A5",p:"B4",3:"B5",4:"E3",z:"C3",x:"C#3",c:"D3",v:"A1",hifen:"B#5",w:"F3","//":"F#3",m:"G3",n:"A3",";":"A#3",b:"B3",Shift:"B#3","'":"C2",1:"C#6",",":"D2","=":"D#2","[":"D6",5:"C6",6:"D#6",7:"E2",8:"E6",9:"G2",0:"B2","-":"B#2",2:"G#4"},pp="/piano-simulator/assets/a-mrXXo23n.png",mp="/piano-simulator/assets/b-B0fhAuiD.png",Ep="/piano-simulator/assets/c-DH34dIE8.png",Bp="/piano-simulator/assets/d-DzQQG8_S.png",Cp="/piano-simulator/assets/e-DsD8-e4N.png",Ip="data:image/png;base64,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",Qp="/piano-simulator/assets/g-BKewhe9w.png",_p="/piano-simulator/assets/h-CHUs-0PJ.png",Dp="data:image/png;base64,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A0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMA1A1iMo3ccGVvf/OxYBxcvPD/u+9wPBrAMgg4LsnHdxth3YO9YC3sGsCCW3AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIOCaASzGpfOXx5nTT4x1cOXFKwNYjj1bmydfHQDAWrPkDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAH/AGXzndUxRre/AAAAAElFTkSuQmCC",vp="/piano-simulator/assets/j-CvOr1DUT.png",xp="/piano-simulator/assets/k-k4jbOtBY.png",Sp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgzSURBVHgB7dixTYIBFEbRh2EDLW1xKhwA13AACxMXsNfK1kHcwphgia4AFf/lnOTNcPO91XazOwwAsGhXAwAsnqADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwHrgBK9fL7M093cPA1BloQNAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwHrgQtzcXg+cu/337+x/9gPHEnQuxtPn48C5e3v+mPf/g2N5uQNAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMBqu9kdBgBYNAsdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQAC/gAfKhZ8yVo0xQAAAABJRU5ErkJggg==",Mp="/piano-simulator/assets/m-y2XkMSDA.png",yp="/piano-simulator/assets/n-CpKnEIzx.png",Op="/piano-simulator/assets/o-D1tFsV0h.png",Tp="/piano-simulator/assets/p-DFBhmRaY.png",bp="/piano-simulator/assets/q-i8xLaP8H.png",wp="data:image/png;base64,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dAAIEHQACBB0AAi4bIAFeOu1t4e5OHH8xACwqUv23vjAxwMAMGtG7gAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEPAf5Hf1OlxVbusAAAAASUVORK5CYII=",Np="/piano-simulator/assets/s-CdCs_Uk6.png",Hp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA7DSURBVHgB7d1fqNf1Hcfxj8sIT2Sgx5udk2eDFI8X2mZ/LwwKo8BgeNjNQGtjUBg46mpNGbStojGGsRgjr/o32EVTiBU1Ww28UdEoLzxON4ZOd+Opi6QjYwP3+/zsbDJm4O/88fd5nccDfmghXhwvnr/35/v5fL4LNq/YeqEAAE37UgEAmifoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AARYW4Ipt2raxjHU+LRg/cKI8u2VnAbKZ0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AACwv0oe2vPlH62bLhJaUVI6PDff/znGu7nnylTJz5uEASQacvjd6xojAzBhYv8vOEecCSOwAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEWFigDx07cKL0s8HhJWVwaGlpweS5yXLq6JnCf01+er5AmgWbV2y9UIArsmnbxjLW+bRgvPPl6NktOwuQzZI7AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoEO4ZcNLCpBP0KEHk+cmC0A/EXToweSn50srBoeWFiCfoMM8IOqQT9ChB60tuV9/w6ICZBN06EFLS+7V8tXDBcgm6NCD1oI+suqmAmQTdOjBZ40FfXDYM3RIJ+jQg4kzH5eWjIwOFSCboEOPWtoYV3e52+kO2QQdenT2zCelJaN3rChALkGHHk2cbivoq25fWYBcgg49OntmorTk1g1rC5BL0KFHrW2MG1i8qDOlW3aHVIIOPWot6NWtG24pQCZBhx6dPHqmtGb92J1l4IaBAuQRdOhRndBbu9O9Lruvu29NAfIIOkxDa0fXqvWb7ipAHkGHaRg/cLy0pp5HtzkO8gg6TMOp8dOlRWPbHixAFkGHaRg/cKK0qE7p9z98bwFyCDpMQ4sb46aMbdtoxzsEEXSYpvEDfy4tqjveH/nplgJkEHSYpvGDfyqtWrdhraV3CCHoME2H9x4pLdu845tlZNVwmY88ciCJoMM01efoLV4De6nHf/VoWTbP3pe+6o6VZecffzxvv8yQR9BhBhx696PSssFOzLe/9vi8iXrdELjj1ce7E/r6MRftkEHQYQZ8sLftoFdTUU+eWOsXlu2dkG/qBH2K++1JIegwA8YPnmj2+NqlatSffmN75Ea5GvGn3/hBGe0stV+q7va//9v3FGjdNWuW3vZUAabtxmWLy823fLUkWHP36u40W2/Cmzx3vrSsPivf0Vl5qDv6r73u2v/7Z0ZGbyq/2/X7Ai0TdJgh//rHP6Oex46MDpd1963tBr3FK25ryB95bsvFC3QWf/GSeg19vZd/osGX7cAUQYcZUmOw+vaVZXA4Z2NZDWGdbOsE+5cP/9rEtP71zpeQ7/zoW92QL7uCf4tlQ4Nl3579BVq1sAAz5tAfPuxMhnlvMlu3YU33c/jdj8rbL79XjvXZHfZ1Gh+9fUV5oPMsvNcNblNvoTt2sM37+WHB5hVbLxRgRtQNVjvf/0n8rul67r6G/YO9R8rZq3QGfyri3c//bHTr1b7d+8uuJ18p0CJBhxlWl3ovPRaVrj5fr2+dGz94vPvrbOz2r1+Qlq8e7iz9D3UCvrI7Tc/Gl6bJT8+XJ+75YcSJBeYfQYcZVqf0Fw/9vMxXdXo/e/qTbujP/n2iTHR+/1knkJduOJs4fXGqr1EeuHHR579f1P3Z1d313V+/PFgGh5d0z8XP5b6E3S+8WfZ0PtAaQYdZ8MhzD3UvLKE9pnRa5WIZmAW7TXjNqqsD6+5bU6A1gg6zoC47v/Pye4U2rd/kfnfaI+gwS+qUbtm2TVNH2KAlgg6zpD6Lfeel9wttGtv2YIGWCDrMonpWu/V3pc9Xs3U0DmaLoMMsqlP6ru+7qKRV3sJGSwQdZll9taoNcm164OF7Tek0Q9BhDtQNcpbe21OPsLlPgFYIOswBS+/tulvQaYSgwxypS++vPfN6oS3LR4cdYaMJgg5zqD5Lr68gpS2OsNECQYc5Vl/P6Xl6W+oRtvqSGOhngg5zrD5Pf2bz86LemPVjroOlvwk6XAU15jsfe9HVsA2pu90dYaOfCTpcJfV94XVSF/U21CNsLpqhnwk6XEU16q89bed7K+pFM9CvBB2usn179pcd33jWpN6AOqU7wka/EnToA1PL7zbK9T9H2OhXgg59QtTb4Agb/UrQoY/UmNeon+zEnf7062deLyeP+feh/1yzZultTxWgb0yeO1/e+82+sqDUaXBloT/UL1vPP7ar7H/rUIF+JOjQp+rd7xOnPy4jq4fLwGLnn6+m8QMnOjF/sZwymdPHFmxesfVCAfrW4NDS8uhzD5VVd9hdPdfqyYM9v3irvO199jTAhA59ri7B16Nt9crYm7/2lXLtddcWZl+dyn/23V+WI/uOFmiBCR0aUqf1sW0bu9eQMjtM5bRK0KFB6zfdWca+t7EbeGbOOy+9X3a/8KZLfmiSoEPDhH1m7Nu9vxtydwDQMkGHAMJ+5eoUvu+3B7pL60JOAkGHIDXsd4/dZUf8F6ghr0vrb3c+ltZJIugQaGrzXL2m1NR+Ud21vqezrD5+8HiBRIIO4erUvu6+tWXdhrVlvqkRP/zuh51n5AdM48QTdJgnBm4Y6E7sNeypk3uN9uG9RzohP94J+RERZ14RdJinlo8Ol9HbV5RbN9xSlq8e6ga/NTXYdQqvAa9X5Z7yUhvmMUEHumrg62tBR0Zv6nyG+y7yNd4nj57pRvvk+N8u3nVvdzr8h6ADl1WDPjI61F2eHxxe2g399Z3/Nzi0pAzcuGjGg19fRvPZufPdaNerbmu469W39XWy4g1fbGEBuIzuknZnEi7lxGX/TI39wOJFndAv6v53fTPcwOe/v/zfe74T7MluvGu4ux/Pu2FaBB2Ylu7kfKYAV9mXCgDQPEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAI8G/ED7SZybtHCwAAAABJRU5ErkJggg==",Rp="/piano-simulator/assets/u-eM9M6nyh.png",Pp="/piano-simulator/assets/v-CeBqFpxw.png",Lp="/piano-simulator/assets/w-D_xJosKM.png",Up="/piano-simulator/assets/x-CtkWOado.png",Fp="/piano-simulator/assets/y-BDY8s8lX.png",Gp="/piano-simulator/assets/z-WQAkT4aj.png",zp="/piano-simulator/assets/%C3%A7-DEUmQJ8_.png",Vp="/piano-simulator/assets/0-DUoYh49L.png",kp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAguSURBVHgB7dgxUQMBFEXRHyYOoKOOEHzEQDromGGwQUMH1IigQgM9XaIhMRADe/ccE3fe2+x3h/MAAIt2MwDA4gk6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABGwHVuzz721o+Pn+nffnj4G1stABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBgO7BiTw+vw3UvX49zd387wDIIOqt2/D8NQIHLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACNvvd4TwAwKJZ6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEHAB6wQTfemhKH0AAAAASUVORK5CYII=",Yp="/piano-simulator/assets/2-jm51jYrU.png",Wp="/piano-simulator/assets/3-1wIVfeWW.png",Xp="/piano-simulator/assets/4-Bxi5JjZ6.png",Kp="/piano-simulator/assets/5-Cd0QVnvW.png",qp="/piano-simulator/assets/6-6YLPnQWp.png",jp="/piano-simulator/assets/7-D_b2H2nt.png",Zp="/piano-simulator/assets/8-wl2zqMxF.png",Jp="/piano-simulator/assets/9-JVeR01yW.png",$p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAuBSURBVHgB7d0xi+XVGYDxE0klpFIrF60U5xNsmhTaKFi5rJVDtFoxIEyqiFOvpMugsJCtEjNWBrdSEpAEYhMFC6sF7YLptArYJvdsApFk1d11Zuee5/5+cJmP8HDe/7zn/GD/kZf+OQCApd0zAIDlCToABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAT8cAA74ycXfjwu/fKno+ity78ff/jtnwbsKkGHHfHkC4+P/VefHTVf/P3LcfUXvxvXP/p0wC4TdNgBF15+ejyz+dVc//CzcfWVN29EHXadoENcNeZ//M2fx/Frbw/g3wQdwoox/+ofX43jzffyD9756wD+S9AhqhjzOVq/vH9kxA43IegQVIz5PJHPk/k8oQP/T9AhZq6lzfW0Eitp8N0EHUJqMZ+j9V/97Nfjb9c/H8C3E3QIuPdH9479w4upmFtJg9sj6LC4GfPD44Px0N65UfHOG++Oa5sfcOsEHRZWi/n8h7d569vH738ygNsj6LCoBx68bxxceTET8/mdfH4vN2KHOyPosKAZ81c3J/P7N38L5q1vc8xuJQ3unKDDYkoxnwG/9vp7VtLgBAg6LKQUcytpcLIEHRZRivlcSTvaxNyIHU6OoMMCSjG3kganQ9Bhyz28d+5GzOeK2srmafzopavj+kefDuDkCTpssUrMraTB6RN02FKPnX90/PzKpeVjPlfSjl97ewCnS9BhC8072edDKyubI/b53Ol89hQ4fYIOW6YQ8zlav7x/ZMQOd5GgwxZ58oXHx/6rz46VzRP5PJlbSYO7S9BhS1x4+enxzOa3src2IXfrG5wNQYctsHrM52h9vpJmJQ3OjqDDGVs95vPWt6uvvOl7OZwxQYcztHrMraTB9hB0OCPPHV4cTz3/xFiRlTTYPoIOZ2Cupc31tBVZSYPtJOhwl60ccytpsL0EHe6SeYXrwZVLY+/8o2NFVtJguwk63AUz5ofHB+OhvXNjNXO0Ph9WmQ+sANtL0OGUrRzzuZJ2tIm5ETtsP0GHU/TAg/fdeP70/s3f1bzzxrvj2uYHrEHQ4ZSsGvN5Gj966apb32Axgg6nYNWYz+/k83u5lTRYj6DDCVs15vPWtzlm970c1iTocIJWjPkM+LXX37OSBosTdDghD++dGwdXXlwq5lbSoEPQ4QTMmM+T+VxRW8XH739y48lTI3ZoEHT4nlaMuZU06BF0+B7mnez7hxeXifkcsc9TuZU06BF0uEMz5vOhlVVYSYM2QYc7sFrM50ra8WtvD6BL0OE2XXj56fHM5reC+Q9v87nT+ewp0CbocBtWivkcrV/ePzJihx0h6HCLVor5PJHPk7mVNNgdgg63YKWYv7UJuVvfYPcIOnyHVWJuJQ12m6DDt3ju8OJ46vknxra7/uFn4+orb/peDjtM0OEbzLW0uZ627aykAZOgw02sEPP5D29zxD7vZAcQdPiaeYXrwZVLY+/8o2ObufUN+F+CDv8xY354fDAe2js3ttkcsc/HVaykAV8n6DDWiPkM+LXX37OSBtyUoLPzHnjwvhvPn96/+but5mh9jtjnqB3gZgSdnbZCzOdK2tEm5kbswLcRdHbaY+cfGX/Z4odLvvj8y/HBNQ+rAN9N0NlpXiEDKu4ZAMDyBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQAC/gVW+/BERBsE4AAAAABJRU5ErkJggg==",tm="data:image/png;base64,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IICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIMC/AP/KU99312UrAAAAAElFTkSuQmCC",em="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhJSURBVHgB7dg9Lq0BGEXh996cxik0dGrGoNGo1Go/nYSBiE4hMQE9lUmYgITBMARfJcfK80xiZe9/Z/vXXwMA/Gn/BwD48wQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAJWAyzy9PE4/L7zg5sBfmahA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0DAaoBFnh9ep2C9vTUnl8cDtAg6LPQSCfru3o6gQ5DLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAJWAyxydHo4Bevt9QA9gg4LXd1dDMCmcrkDQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMBqgEVuz+4HYFMJOiz0/vY5AJvK5Q4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAHf2HQVI7/0o+0AAAAASUVORK5CYII=",nm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhISURBVHgB7dixLQQAGIbhn9wGotNSKywgkViCRMsgWp0F9DcEBbEAoVaJGRjBVeLee54l3nzf1tn+5fcAAGttewCAtSfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGGAld2+3w987P7ga4HcWOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAELAbIeVg+zefH1wCbQ9Ah6H75OK/P7wNsDpc7AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGyDk6OZzdvZ0peFg+DfA7QYeg04vjqRB0WI3LHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACFgOs5PrsZgD+K0GHFb08vw/Af+VyB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAgB/MDhy8GyHllwAAAABJRU5ErkJggg==",im="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgQSURBVHgB7dhBFUEBFEXRx1KFVASggCYGhgQQwkQGZcjxz9+7xFn3bo77828AgEXbDgCweIIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAG7gZV5fm9D2+lwGVgbCx0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACdgMrc78+BqBG0Fmd9+szADUudwAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACPgDLnoMxHO0PJcAAAAASUVORK5CYII=",Am="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhZSURBVHgB7dixSZ1hGIbh13BWcYc0WSL1IWXADTJBSJcikCZd7E/nAlbiAge0E60UV9AJ/u5DODfXtcTN85ztzy/eBgA4aZ8GADh5gg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABu4HFLu/+DrDt+nAz/378H1jJQgeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAgN3AYoc/VwNsezg+Dqx2tj+/eBsA4KS53AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBgN7DYl6+fB9j28vg6x9u7gZUEneW+//o2wLbrw42gs5zLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACdgOL/dz/HmDb89PrwGqCznLH2/sB4GO53AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASDgHWrpJQIP430XAAAAAElFTkSuQmCC",rm="/piano-simulator/assets/pontoVirgula-DQOy3glv.png",sm="/piano-simulator/assets/til-CRmm4Lat.png",om="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA36SURBVHgB7d0/iN/1Hcfxj61LTpIWc5kuuXQ5ucvQiFrTDhnUFKWd/NOpZ3VpxaHFTrUJhQ6NOBQqCIU6Rc1SkEtbKhiMCSSDiTSgDt5hplwvk4lQg+dof98rLtKC0OT7+Xxev8cDjuS45bbnfd7vz/f7u2V54enPCwDQta8VAKB7gg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABDg1gJ0b2b7TFk6sFBmd99e9i7uKbNzO8uuudv/87NvbNv6+dWNa1vff3Tl47J5fXPy/cdl9Z0PJ99fK+urGwXo2y3LC09/XoDuLB64oyzdu1DuObS/zC/tLv+Pq5Oor164VM6eeLusTf4F+iPo0JHhpH3w0QPl7gf2T07kd5SbYYj7youvb4V9OL0DfRB06MAQ8gefvK88NPka/j+GIexvHDtTTr58ugDtE3Ro3DBaf+r5x7f24jUMYX9u+QWndWicoEOjhpP4w7/4QXnoiftLC4Yx/InJF9Amt9yhQbsmp/HDx5+pdir/bx75+Q/Lbdu3lePPvVaA9ngOHRozjNh/97dfNxXzLzz45P3l6F8Pj7bHB746QYeGHHzku+XIq880HczhEbkjx9v+HWEaCTo0Yoj5z57/SenBEPXlI48WoB2CDg3YOwlkLzH/wsFHvleWDz9WgDYI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",am="/piano-simulator/assets/a-BQyliO_v.png",cm="/piano-simulator/assets/b-IM_sw-cK.png",lm="/piano-simulator/assets/c-CygdLUfr.png",gm="/piano-simulator/assets/d-C1wF_Enc.png",dm="/piano-simulator/assets/e-C6sF4Qws.png",um="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA2wSURBVHgB7d1NiJXXHcfxYxmlZtTFgCaQYhVcNJqWtIsRSqCNqy5sQQhk3ay6yaqbbJJNN+2mG7toV25j6KoN6EpbSBeZTQIxoVBBKxWSkc7ClwqjYO//mkmnJWq9c2fmOb/7+cBlXgxRx8X3nvP8n/PsOHXuzIMGAHTtaw0A6J6gA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIMBcA3hKB3bvac/M7WqH9y20+Z272v6v72l7Rh/re/V1/fqa+np+9P1HWb57e/zxzr3Vduf+6vjjv0Yf6/trr/re1VsrDXg0QQceqcJ8bOG5dmjvwvjzCvj6WE/r9xjb/eT/9srNlXH06+MnK5+NYy/08NCOU+fOPGjAzKvV9YujeFfAK9zj1fdjVtZDsT7wl0av+rxW+DBrBB1mWMV78cDBccgr4Ckq7EvL174MPcwCW+4wQ9aue594/khbfPZgFyvwSdQblHqVWsFf+ufDwFfob3xxzR7SCDrMgLWV+IlvHImN+KPU3/f46M1LvUpF/eL1y+JOHEGHULUaP3noaPvx6DVrEX+c9av3C6OwV9xty5PANXQIs3/3nnbym0dncjU+qZqWP3v5o3HcoVeCDiEq5K8deWl8fZzJCDs9E3TonJBPn7DTI0GHTrlGvvnqtrdffnjB8BxdEHToUE2tv/Htl6d+ahtf7Z3Rav3d0QuGTNChI7Uqf+M7L7fjBw42tlZtw7+1dN5qncHytDXoRN1H/rsfvirm26R2Q379/Z+0V8wqMFCCDgNXq/KfvrDY3vzeCdfKt1k9OW7tHnYYGgfLwIDVBPub3z0Rdc567y6YfGegBB0GqgbfrMqHpa6jO1WOoRJ0GKC6He31by02huWsSXcGTNBhYOqQmHoxPFbnDJmhOBgQMR+uOjVu2S1rDJigw0CI+bAZhmPoBB0GQMyHzTAcPRB02GZiPnyG4eiBoMM2EvM+WJ3TA0GHbVJHuYr58BmGoxeCDtugToCrh6wwfIbh6IWgwxarmP9i8UdOgOuAYTh6IuiwxV5/YdFzzDthGI6eCDpsobpm7vGn/bA6pyeCDlukttoNwfXDMBy9EXTYInXdnH4YhqM3gg5boFbmrpv3wzAcPRJ02GS22vtjGI4eCTpsMlvt/bE6p0eCDpvoleeP2GrvzNLn1wzD0aW5BmyaWd9qv3N/td25t9pujAK5PpL1vfq1OlxnfufDA3bW3vjUJYrtfBNkGI5eCTpsklkbhFsbJLtya6Vdvbky/nojK93D+xbGwT+28Nz480N7Fzb951l/3qXlaw16JOiwCWqVWdvtyWqFXeGuFW1tU9fX03Rl9P8ul9Zdz14L+/FnD44fbjNtVuf0TNBhE5wIvnZeq/APRqvYi/+4PPWIP0lFvl516Eut3hdHYZ9m3P8k6HRM0GETJK7OK+R1O9elgUyA15uJCvv6uNcbqdqin4RhOHon6DBlaZPtQwv5V1kf9wNf3Pf/tG+qbLfTO0GHKUuZbK9Inv3bR+29v3/aelKr7NMfvz9+E1JR/3/eYBmGI4GgwxTVtm/C6ryuU//qwwtdb0HXn72iXqv2J63Yrc5J4GAZmKKEa+cVt7eXzsdcT15bsf/sz79/5AlwhuFIIOgwJXWrWu/POn9ntKL9zSh+Wz29vhUq7G+N3qic/p+/X80GGIYjgaDDlLw44XT1UFTM352Bh5LUFvzP//KHLyN+0eqcEK6hw5ScPHS09WpWYr6mYl5b8PVvJuiksEKHKajt9sN7F1qP/nj105mK+XrvXe1rgh8eR9BhCuq0sh7VSvXMX5ca0D9BhynocRiuBsNqmh3IIOiwQbXdfqzDgbg6NMZ0N+QQdNigegJYb+rgmN5OgAMeT9BhgxY73G6vU+CALIIOG9Tb/ed1m5atdsgj6LABdf28t7Pbz87oLWqQTtBhA3q7fm51DrkEHTagt+12TxWDXIIOG9DT6XC1Mn/U08aA/gk6bMChjrbcP/j8WgNyCTpMaH7nrjY/t6v1YmlZ0CGZoMOEbLcDQyLoMKGettvFHPIJOkyop/vPLwk6xBN0mND+joJ+9eZKA7IJOkyolxX6nXur7cotQYd0gg4T6iXoYg6zQdBhQr3csnbFdjvMBEGHCfQ0EHfD2e0wEwQdJvDMzn4OlPEwFpgNgg4T2NPRCXF37q82IJ+gwwR6WqHbcofZIOgwgZ7OcLflDrNB0CFY3YMOzAZBhwl0c6iM6+cwMwQdAAIIOgAEEHQIZiAOZoegA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABNhx6tyZBw0G5rc/eLUN2fzOXW1+blfrwfLd243/9vbSeT8X4sw1GKADu/c0psPPEmaDLXcACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACDDXYIAuXr/chuzQ3oV2eN9C68Hy3dvtk5XPGv9x+95qgzSCziCd/vj9NmSvHXmpq6AP/ecJbJwtdwAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIMNeAp3bl5kq7eP1y68Hy3dsNyCfoMIGl5WvjF8BQ2HIHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAgH8DI1u7rjVBTXQAAAAASUVORK5CYII=",hm="/piano-simulator/assets/g-Ca4JG0lt.png",fm="/piano-simulator/assets/h-DazP1z5O.png",pm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvGSURBVHgB7d0/qF7lHcDxY4kBm9QhYCJYbIQMVm2pHa5DHWqmDrbgUju7O9elLp26dKmzWWvngk5m6dIMRahpOwQiUiGN9BY0MZAI9n0uBMRCG6GeP9/384HDvZBcuHf6nt/zPOe8973w5oXPJgBg0742AQCbJ+gAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQcGwCNu/0AyenJ089PJ39xqmj78d14v7jR18/7+ant6ebd25P12/dmD7cXVc/PpyufnQ4XT68NgHbJuiwUSPgB6cfnc5/89x04tjxe/qZ8f/GdTf0z33u397dRf3iB1eOvo7YA9si6LAhX9/F+PmzT0w/3l33GvF79dTuBmFcw9u7sL9x5R1hhw2574U3L3w2Aav2VYb8vxF22A5Bh5V77pFz00vfPpg15F/0213Uf7e7gPUSdFipMZW//N1np2d2++RrMA7S/eLSW6Z1WCmPrcEKnX3w1PTrH/xkNTEfxkG6Xx786OgwHrA+gg4rM06uj3B+8ZGzNbgb9bENAKyLU+6wIiOUL3/n2Wntxu/40C7u9tVhPUzosBJjmX0LMb/rZ+e+N/10dwHrIOiwAmPafeXp89PWjKhbfod1EHRYgbXumd+Llx4/OHrlLLAsQYeFvbibcrca82G8M/6V758/eswOWI6gw4LGUvuLgX3o05G/A7ZM0GFBpQiO19J6Rh2WI+iwkPFBKOdjB8pM6bAcQYeF/DB4OnzcpJjSYRmCDgsYe+e16fwuUzosQ9BhAU+Fp9jxtznxDvMTdFhAdTq/65kz6/lQGdgXgg4zG89t1/eZyysQsFaCDjN7bA/equZgHMxP0GFm+xC78aIZ++gwL0GHmY1PVdsHZzb8OlvYIkGHmZ3ck8l1X25cYC0EHWb20J5MricsucOsBB1mtuVPVvsyxml+YD6CDgABgg4AAYIOfCVu3rk9AfMRdJjZzU/3I3T78nfCWgg6zGxfJtfrt25MwHwEHWZ29ePDaR98YskdZiXoMLMP92ByHasQ+3LjAmsh6DCzqx/1QyfmMD9Bh5ldPrw21e3D3whrI+gws3FYrH4C/F1Bh9kJOizg4gdXpqpxw2JCh/kJOizg0j/en6rEHJYh6LCAsSRdDd8bV96ZgPkJOizk7eCy+9hK8EIZWIagw0KK8TOdw3IEHRb02p//MFWYzmFZgg4Lquylj5CbzmFZgg4L+81uSt/6c+kj5qZzWJagw8JGCH/1p7enrRpL7eXn6mErBB1WYCy9v/63S9PWjJuR1/+6vd8bigQdVuL37/1lU/vQI+avXnor/xpb2ApBhxUZQd9C1O/G3L45rIegw8qMoK95+V3MYZ2OTcDqjOX38Tjbz58+P51+4OS0FuPtdhd2e+aW2WF9TOiwUlc/OjyahNdwgnwEfBx+ey3wiB1U3ffCmxc+m4BVe+zBU4tN6+OG4nVTOayeoMOGPPfIuen87nry1MPTV2nEe3zEqxfGwHYIOmzQmNSf/9YT08GZR/+vU/vYt//j9feni3+/YiKHjRF02LgR9DGxP7W7xvdnd8vzJ44d/58/Nybv9z4+nK5/cmO6/K9r07v/vCbisGGCDkEj6CfuP/4f0/sI9s07ty2jQ5DH1iDoKNyfCjfsE4+tAUCAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwLEJWI2DM49OLz1+MG3B9Vs3plcvvTUB6yDosCInjh2fTj9wcgL4siy5A0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwLEJWI3rt25MFz+4Mm3BzTu3J2A9BB1W5PLhtaML4Muy5A4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgAB/wZ096CJ3K6uYwAAAABJRU5ErkJggg==",mm="/piano-simulator/assets/j-DzMoCNSy.png",Em="/piano-simulator/assets/k-BgRJ87Su.png",Bm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgySURBVHgB7dixSUMBFEbhq6QRrF3H1tbgAI5lZ1obWzOGAziGWERBwQ2S6r2T74M7w+G/F/dvz78DAKza5QAAqyfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAELAZOMHr3eOszXa/G4AqCx0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAjYDZ+Lm6npg6T6/D/P1cxg4lqBzNp5uHwaW7uXj/f/gWF7uABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQsBk4wXa/GwCWw0IHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4CAP8VcFxVOaMUDAAAAAElFTkSuQmCC",Cm="/piano-simulator/assets/m-CurdLkm-.png",Im="/piano-simulator/assets/n-BLesXGoR.png",Qm="/piano-simulator/assets/o-Rq53hhVA.png",_m="/piano-simulator/assets/p-C13sx-wy.png",Dm="/piano-simulator/assets/q-j4GVb7PF.png",vm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAv+SURBVHgB7d0xrJ1lHYDxT1KaSJHEGpAEgyXpoFATXerC1IkBBxdx1Vl2Fxx0cmbXVVwlkYkuLNxFolAHmxSJJFCSDmBrUkj0vJfepqG9l3uuhX7f8/1+yck597b7c//v+37n/cqP//z7/04AwKLdNwEAiyfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQcGwCmKkHjh2fHrz/+PTwVx+cHtm8Tmw+n9j8bnweHr7xvvfzsPd/bvXCzivTW1fem6BM0IF76oEbgX7ioZPTqa+d3A34eH/kgQdvCzOwP0FnFX599plp7l5++8K0c/mdqWyE+6mTj34a7BsRv3W6Bo5O0FmFM5uIzN35dy9ONSPcZ77x6PTU1x/dfTdxwxdH0IG7ZkzbZ7/5uIDDPSDowP9lLKGP17nHTls+h3tI0IGtjYCffeTx6dy3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dAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAj4H+aA+OMPp5vRAAAAAElFTkSuQmCC",xm="/piano-simulator/assets/s-Cf9bjdlQ.png",Sm="data:image/png;base64,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",Mm="/piano-simulator/assets/u-C3GyWVZJ.png",ym="/piano-simulator/assets/v-BZpEZNbL.png",Om="/piano-simulator/assets/w-BVvaBb5s.png",Tm="/piano-simulator/assets/x-CERRJ8ME.png",bm="/piano-simulator/assets/y-CjLCAlIb.png",wm="/piano-simulator/assets/z-CAfYwYsg.png",Nm="/piano-simulator/assets/%C3%A7-ppVM9JLW.png",Hm="/piano-simulator/assets/0-FohTBYpK.png",Rm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgxSURBVHgB7dgxTUMBGEXhH/IWEmakoKErDhirAwsIwEDDykia4ICVlYWZpGNroAbeed9n4uTem6ePt/MAAKt2OwDA6gk6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwDG/a+ex4aPn9/5vX7a2CrLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAhYBjZsfzwM17087ubh7n6AdRB0Nu3v9D8ABS53AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAhYBuCK/fEwwHpY6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEHABuXAUQKSNJIMAAAAASUVORK5CYII=",Pm="/piano-simulator/assets/2-BjZPb3aO.png",Lm="/piano-simulator/assets/3-Bij4PeNX.png",Um="/piano-simulator/assets/4-Dm_TVZy8.png",Fm="/piano-simulator/assets/5-BMzIV1bF.png",Gm="/piano-simulator/assets/6-nH6Xguj1.png",zm="/piano-simulator/assets/7-B53a4HeN.png",Vm="/piano-simulator/assets/8-D65fu2pK.png",km="/piano-simulator/assets/9-DYGATcvK.png",Ym="data:image/png;base64,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AAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgAB/wIksvHAR9Em+gAAAABJRU5ErkJggg==",Wm="data:image/png;base64,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6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIMC/AWioXpDGhafzAAAAAElFTkSuQmCC",Xm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhISURBVHgB7dixLYUBGIXhj1wSodYoNCqJDTQ6hYYJLGAFq9BqtMygUigNoLICI/gruffN8yzx5pyt65eHnwEANtr2AAAbT9ABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIGA1wCLPl7fD/7t5fRzgbxY6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AASsBljk6fN9CvZ3dufq+HSAFkGHhSpBP9w7EHQIcrkDQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwGqARS6OTqZgf2d3gB5Bh4Xuzs4HYF253AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgYDXAIvdvrwOwrgQdFvr4/hqAdeVyB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAgF+QJxXHOT+yIwAAAABJRU5ErkJggg==",Km="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhISURBVHgB7dixLQQAGIbhn1wjUStFbQAzaBRMYBKrMIGWil5Np5WIQiVRYoO7Su7ee54l3nzfzvnd9c8AABttdwCAjSfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGGAlt6eXw/+7uL8ZYDkLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACFgPkPL69zsf31wDbQ9Ah6OEv6C+f7wNsD5c7AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGyDk5OJyDvf0peHx7HWA5QYegs6PjqRB0WI3LHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACFgOs5OrpfgDWlaDDip4/3wdgXbncASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEg4BcQjR7xdeFPDgAAAABJRU5ErkJggg==",qm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgQSURBVHgB7dixFQEBFETRz1GclAr0pAAqkJJJdCCVqoM69u29TbwzszncL78BABZtOwDA4gk6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AATsBlbmtj8NbcfHdWBtLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAI2A2szPn9GoAaQWd1nt/PANS43AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIOAPk8cOPk0CNzwAAAAASUVORK5CYII=",jm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhZSURBVHgB7dihTZ1hGIbht83Zora2G9TU1XaDLtAVugQDoDFYcBgUigRwJ0GREMQRhAQJE/zuCwl3rmuJO8/z5c/Z8dsAAJ/a1wEAPj1BB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgIDdwGKnv/8OsO3iYT9HN5cDK1noABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwG1jsZH89wLb758PAaoLOcoIO8PFc7gAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwG1js17fvA2x7en2Zu8PjwEqCznL/fvwcYNvFw17QWc7lDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABu4HF/l+dD7Dt6fVlYDVBZ7nbw+MA8LFc7gAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABDwDvIZJ4VgQr1WAAAAAElFTkSuQmCC",Zm="/piano-simulator/assets/pontoVirgula-DUhdNEoM.png",Jm="/piano-simulator/assets/til-DzluC_eO.png",$m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA1lSURBVHgB7d0/qNbXHcfxk2KE5JoMQjSQYhUspHoLdrmBtkPj1MEEMtm12bt3SZfO7dLOdW06X0im2qGLdwpUbQfBqyCogTtoTEAD6XMuFdrQNv/0d77n87xecHkQHdze9/s95/n9nnnrvQufNQBgat9qAMD0BB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASDAgQZM7/kDB9vm4ZfbkecPtRMvHG4vPXeoHVn9dBvPHmwbq7+/+8lH+3/unw8ePdz/vLJ3e/9z9/5eA+Ym6DCp06uA95/XjhxrJ148/IX//nHgH392bxw/tf/Zo355FfeLt67tRx6YzzNvvXfhswZMoU/iZ799sm2tIt4n8qehx/3dax/sB/7Df031QH2CDhPoIT+3mqb7RN3X50voYd/evdq2b1xtQH2CDsX1tfovvv/j/1iVL6mH/Z2d903rUJygQ1F9Kj//3TPtje+cahX8cbWG/9PqB6jJpTgoqN9S//XWT4dN5f/Nz06e2V/3X/jHTgPq8T10KKav2H/7ozdLxfyxfob/mx++ub89AGoRdCjk9VdO7k/mG4WD2b8i1/+Pog61CDoU0WPeL7/NoEf97e9tNaAOQYcCjq8COUvMHzu7+gXk56+KOlQh6DBYvwD3yx+cbTPqZ+rnitzCh3Un6DBYX11XvAD3ZZ0/eWb/lxJgLEGHgfq5eX8W+8z6y19mOy6ARIIOg/Sptk+3Cfpz5fsvJ8A4gg6D9JjPvGr/vLdf3fJVNhhI0GGAPp2fDZto++r93HEX5GAUQYcBXjs697n5/1LlufOwjgQdBkj9qlef0k8/pfe0A/+foMPC+gWypLPzz0s7SoBZCDos7Cfhwds6cszlOBhA0GFhm+Er6b527896B5Yl6LCgfrs9ed3+2NbkD8uBGQk6LGhdJtejHgULixN0WNCJF9Yj6G66w/IEHRZ0fE0m9H6O7mIcLEvQYUGH1ihy1u6wLEGHBa3Ta0aff9aEDksSdFjQxhpFbh1u80Mlgg4L2nCuDDwlgg4AAQQdAAIIOgAEEHRY0N1PPmrr4sGjhw1YjqADT8WDTwUdliTosKDr9/fauvhwjbYRUIGgw4LWKXLrdLwAFQg6LGhdInf93vpsIqAKQYcF7a5J6Jyfw/IEHRbUz9DXIXYmdFieoMOC+le51mFK312jy39QhaDDwi7dvdnSuRAHyxN0WNjFW9daOit3WJ6gw8L62v3K3u2Wqsf8Y5fiYHGCDgO8e+2Dlsr5OYwh6DDA5dWEnjqlXw7ePkBlgg6DpE7pyccJUJmgwyCJU3q/3e6GO4wh6DDQ7/7216gHzZjOYRxBh4H6NNujnuLPa/CVPKhK0GGwnTs3Y87TTegwjqBDAT3os0+3brfDWIIORfx+tXrfvnG1zWodnoAHlQk6FPKHv+9Mu363boexBB2K6UHvF+Vm+vpXf9yrr6vBWIIOBfX19a923p9m6rVuh/EEHYrqE+87q6jPMK3vrMErYaG6Aw0orU+//ef1V0628yfPtCPPHWqVWLdDDYIOk/j3sJ87fqqdeOFwq2Dmm/mQxModJtOjvr1bJ6Jut0MNgg4TOn345VZBf5iMdTvUIOgwoc0iQXe7HeoQdJjMS88dKnExrk/mgg51CDpMpsp07uwcahF0mEyV83OvSoVaBB0mU2FC7+t2EzrUIugwkSrn52IO9Qg6TKTK+bl1O9Qj6DCRCufn1u1Qk6DDRCpM6GIONQk6TKLK+bl1O9Qk6DCJEy+OfxmLdTvUJegwia0jx9poYg51CTpMosKEbt0OdQk6TKCfn49+/7l1O9Qm6DCBCtO5mENtgg4TqHB+vr17tQF1CTpMYPSE3tft1+/vNaAuQYfiKpyfX7pzswG1CToUV+H8/C9ut0N5gg7FjT4/t26HOQg6FDd6QrduhzkIOhRW4fzcuh3mIOhQmNvtwJcl6FDY6Nel+u45zEPQobDTg4O+c9f5OcxC0KGojWcPDj0/v35vb3/lDsxB0KGo0dP5RZfhYCqCDkWNPj+3boe5CDoUNXJCt26H+Qg6FDT6/Ny6HeYj6FCQ2+3AVyXoUNCmdTvwFQk6FDRyQt++4WEyMCNBh2JGn59f2bvdgPkIOhQzcjq/vIq5dTvMSdChmJHn5263w7wEHYqxbge+DkGHQvr5+aiVu3U7zE3QoRAPkwG+LkGHQraOHmujWLfD3AQdChk1oVu3w/wEHYoYeX5u3Q7zE3Qowu124JsQdChi1Pm5dTtkEHQoYtSEbt0OGQQdChh5fm7dDhkEHQpwux34pgQdChh1fm7dDjkEHQoYNaFbt0MOQYcCRpyf79y5ad0OQQQdBhv1utRLd282IIegw2CjbrdfuiPokETQYbDNQev2jz992IAcgg6DjZjQrdshj6DDQJvW7cATIugw0GnrduAJEXQYaNO6HXhCBB0GWnpCf/DooXU7hBJ0GGTI7fa71u2QStBhkCG3203nEEvQYZDNAev2HefnEEvQYZDjLy77QhYxh2yCDgP06XzjwMG2JOt2yCboMMDS07l1O+Q70IAhLt661pZy/d5eA7IJOgywvXu1ATxJVu4AEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAvwTFHlSEaGWRxQAAAAASUVORK5CYII=",wa=new xg,tE=6038889,Na={a:pp,b:mp,c:Ep,d:Bp,e:Cp,f:Ip,g:Qp,h:_p,i:Dp,j:vp,k:xp,l:Sp,m:Mp,n:yp,o:Op,p:Tp,q:bp,r:wp,s:Np,t:Hp,u:Rp,v:Pp,w:Lp,x:Up,y:Fp,z:Gp,ç:zp,0:Vp,1:kp,2:Yp,3:Wp,4:Xp,5:Kp,6:qp,7:jp,8:Zp,9:Jp,agudo:$p,aspa:tm,chave_direita:em,chave_esquerda:nm,hifen:im,igual:Am,ponto_virgula:rm,til:sm,virgula:om},eE={a:am,b:cm,c:lm,d:gm,e:dm,f:um,g:hm,h:fm,i:pm,j:mm,k:Em,l:Bm,m:Cm,n:Im,o:Qm,p:_m,q:Dm,r:vm,s:xm,t:Sm,u:Mm,v:ym,w:Om,x:Tm,y:bm,z:wm,ç:Nm,0:Hm,1:Rm,2:Pm,3:Lm,4:Um,5:Fm,6:Gm,7:zm,8:Vm,9:km,agudo:Ym,aspa:Wm,chave_direita:Xm,chave_esquerda:Km,hifen:qm,igual:jm,ponto_virgula:Zm,til:Jm,virgula:$m},Ha={},RA={};for(const[n,t]of Object.entries(Na)){const e=wa.load(t);e.colorSpace=Se,Ha[n]=e}for(const[n,t]of Object.entries(eE)){const e=wa.load(t);e.colorSpace=Se,RA[n]=e}const nE=n=>{const t=Ha[n],e=[];for(let A=0;A<6;A++)A===2?e.push(new jn({map:t,transparent:!0})):e.push(new Jn({color:tE,transparent:!0,opacity:1}));return new we(new Oi(.8,.4,.8),e)},Vi={};Object.keys(Na).forEach(n=>{Vi[n]=nE(n)});const iE=[-6,-4.9,-3.8,-2.7,-1.6,-.55,.55,1.6,2.7,3.8,4.9,6],AE=-11,rE=.4,sE=[["a","q","z","1","aspa"],["s","w","x","2"],["c","d","e","3"],["r","f","v","4"],["g","t","b","5"],["h","y","n","6"],["u","j","m","7"],["k","i","8"],["o","l","9","virgula"],["p","ç","0"],["hifen","agudo","til","ponto_virgula"],["igual","chave_esquerda","chave_direita"]];sE.forEach((n,t)=>{n.forEach(e=>{Vi[e]&&(Vi[e].position.x=iE[t])})});Object.values(Vi).forEach(n=>{n.position.y=rE,n.position.z=AE});const oE=[{pitch:"E5",start_ms:1e3},{pitch:"D#5",start_ms:1250},{pitch:"E5",start_ms:1500},{pitch:"D#5",start_ms:1750},{pitch:"E5",start_ms:2e3},{pitch:"B4",start_ms:2250},{pitch:"D5",start_ms:2500},{pitch:"C5",start_ms:2750},{pitch:"A4",start_ms:3e3},{pitch:"A3",start_ms:3e3},{pitch:"C4",start_ms:3750},{pitch:"E4",start_ms:4e3},{pitch:"A4",start_ms:4250},{pitch:"B4",start_ms:4500},{pitch:"E3",start_ms:4500},{pitch:"E4",start_ms:5250},{pitch:"G#4",start_ms:5500},{pitch:"B4",start_ms:5750},{pitch:"C5",start_ms:6e3},{pitch:"A3",start_ms:6e3},{pitch:"E4",start_ms:6750},{pitch:"E5",start_ms:7e3},{pitch:"D#5",start_ms:7250},{pitch:"E5",start_ms:7500},{pitch:"D#5",start_ms:7750},{pitch:"E5",start_ms:8e3},{pitch:"B4",start_ms:8250},{pitch:"D5",start_ms:8500},{pitch:"C5",start_ms:8750},{pitch:"A4",start_ms:9e3},{pitch:"A3",start_ms:9e3},{pitch:"C4",start_ms:9750},{pitch:"E4",start_ms:1e4},{pitch:"A4",start_ms:10250},{pitch:"B4",start_ms:10500},{pitch:"E3",start_ms:10500},{pitch:"E4",start_ms:11250},{pitch:"C5",start_ms:11500},{pitch:"B4",start_ms:11750},{pitch:"A4",start_ms:12e3},{pitch:"A3",start_ms:12e3},{pitch:"B4",start_ms:12750},{pitch:"C5",start_ms:13e3},{pitch:"D5",start_ms:13250},{pitch:"E5",start_ms:13500},{pitch:"C4",start_ms:13500},{pitch:"G4",start_ms:14250},{pitch:"F5",start_ms:14500},{pitch:"E5",start_ms:14750},{pitch:"D5",start_ms:15e3},{pitch:"B3",start_ms:15e3},{pitch:"F4",start_ms:15750},{pitch:"E5",start_ms:16e3},{pitch:"D5",start_ms:16250},{pitch:"C5",start_ms:16500},{pitch:"A3",start_ms:16500},{pitch:"E4",start_ms:17250},{pitch:"D5",start_ms:17500},{pitch:"C5",start_ms:17750},{pitch:"B4",start_ms:18e3},{pitch:"G#3",start_ms:18e3},{pitch:"E5",start_ms:20500},{pitch:"D#5",start_ms:20750},{pitch:"E5",start_ms:21e3},{pitch:"D#5",start_ms:21250},{pitch:"E5",start_ms:21500},{pitch:"B4",start_ms:21750},{pitch:"D5",start_ms:22e3},{pitch:"C5",start_ms:22250},{pitch:"A4",start_ms:22500},{pitch:"A3",start_ms:22500},{pitch:"C4",start_ms:23250},{pitch:"E4",start_ms:23500},{pitch:"A4",start_ms:23750},{pitch:"B4",start_ms:24e3},{pitch:"E3",start_ms:24e3},{pitch:"E4",start_ms:24750},{pitch:"G#4",start_ms:25e3},{pitch:"B4",start_ms:25250},{pitch:"C5",start_ms:25500},{pitch:"A3",start_ms:25500},{pitch:"E4",start_ms:26250},{pitch:"E5",start_ms:26500},{pitch:"D#5",start_ms:26750},{pitch:"E5",start_ms:27e3},{pitch:"D#5",start_ms:27250},{pitch:"E5",start_ms:27500},{pitch:"B4",start_ms:27750},{pitch:"D5",start_ms:28e3},{pitch:"C5",start_ms:28250},{pitch:"A4",start_ms:28500},{pitch:"A3",start_ms:28500},{pitch:"C4",start_ms:29250},{pitch:"E4",start_ms:29500},{pitch:"A4",start_ms:29750},{pitch:"B4",start_ms:3e4},{pitch:"E3",start_ms:3e4},{pitch:"E4",start_ms:30750},{pitch:"C5",start_ms:31e3},{pitch:"B4",start_ms:31250},{pitch:"A4",start_ms:31500},{pitch:"A3",start_ms:31500}],aE=[{pitch:"E5",start_ms:0},{pitch:"A4",start_ms:1e3},{pitch:"B4",start_ms:1250},{pitch:"C5",start_ms:1500},{pitch:"D5",start_ms:1750},{pitch:"E5",start_ms:2e3},{pitch:"C5",start_ms:2750},{pitch:"E5",start_ms:3e3},{pitch:"C5",start_ms:3750},{pitch:"E5",start_ms:4e3},{pitch:"A4",start_ms:4750},{pitch:"C5",start_ms:5e3},{pitch:"A4",start_ms:5250},{pitch:"F4",start_ms:5500},{pitch:"C5",start_ms:5750},{pitch:"A4",start_ms:6e3},{pitch:"A4",start_ms:7e3},{pitch:"D5",start_ms:7250},{pitch:"C5",start_ms:7500},{pitch:"B4",start_ms:7750},{pitch:"E5",start_ms:8e3},{pitch:"A4",start_ms:9e3},{pitch:"B4",start_ms:9250},{pitch:"C5",start_ms:9500},{pitch:"D5",start_ms:9750},{pitch:"E5",start_ms:1e4},{pitch:"C5",start_ms:10750},{pitch:"E5",start_ms:11e3},{pitch:"C5",start_ms:11750},{pitch:"E5",start_ms:12e3},{pitch:"A4",start_ms:12750},{pitch:"C5",start_ms:13e3},{pitch:"A4",start_ms:13250},{pitch:"F4",start_ms:13500},{pitch:"C5",start_ms:13750},{pitch:"A4",start_ms:14e3},{pitch:"A4",start_ms:15500},{pitch:"B4",start_ms:16e3},{pitch:"C5",start_ms:16500},{pitch:"D5",start_ms:17e3},{pitch:"E5",start_ms:17500},{pitch:"F5",start_ms:17750},{pitch:"G5",start_ms:18e3},{pitch:"F5",start_ms:18750},{pitch:"E5",start_ms:19e3},{pitch:"F5",start_ms:19500},{pitch:"G5",start_ms:19750},{pitch:"A5",start_ms:2e4},{pitch:"G5",start_ms:20750},{pitch:"F5",start_ms:21e3},{pitch:"G5",start_ms:21500},{pitch:"A5",start_ms:21750},{pitch:"B5",start_ms:22e3},{pitch:"A5",start_ms:22750},{pitch:"E5",start_ms:23e3},{pitch:"C5",start_ms:23250},{pitch:"B4",start_ms:23500},{pitch:"A4",start_ms:23750},{pitch:"B4",start_ms:24e3},{pitch:"C5",start_ms:24500},{pitch:"D5",start_ms:25e3},{pitch:"E5",start_ms:25500},{pitch:"F5",start_ms:25750},{pitch:"G5",start_ms:26e3},{pitch:"F5",start_ms:26750},{pitch:"E5",start_ms:27e3},{pitch:"F5",start_ms:27500},{pitch:"G5",start_ms:27750},{pitch:"A5",start_ms:28e3},{pitch:"G5",start_ms:28750},{pitch:"F5",start_ms:29e3},{pitch:"G5",start_ms:29500},{pitch:"A5",start_ms:29750},{pitch:"B-5",start_ms:3e4},{pitch:"F5",start_ms:30750},{pitch:"D5",start_ms:31e3},{pitch:"F5",start_ms:31500},{pitch:"B5",start_ms:31750},{pitch:"B5",start_ms:32e3},{pitch:"F#5",start_ms:32750},{pitch:"B5",start_ms:33e3},{pitch:"E5",start_ms:33750},{pitch:"E5",start_ms:34e3},{pitch:"A4",start_ms:35e3},{pitch:"B4",start_ms:35250},{pitch:"C5",start_ms:35500},{pitch:"D5",start_ms:35750},{pitch:"E5",start_ms:36e3},{pitch:"C5",start_ms:36750},{pitch:"E5",start_ms:37e3},{pitch:"C5",start_ms:37750},{pitch:"E5",start_ms:38e3},{pitch:"A4",start_ms:38750},{pitch:"C5",start_ms:39e3},{pitch:"G#4",start_ms:39250},{pitch:"F4",start_ms:39500},{pitch:"C5",start_ms:39750},{pitch:"A4",start_ms:4e4},{pitch:"A4",start_ms:41e3},{pitch:"B4",start_ms:41250},{pitch:"C5",start_ms:41500},{pitch:"D5",start_ms:41750},{pitch:"E5",start_ms:42e3},{pitch:"A4",start_ms:43e3},{pitch:"B4",start_ms:43250},{pitch:"C5",start_ms:43500},{pitch:"D5",start_ms:43750},{pitch:"E5",start_ms:44e3},{pitch:"C5",start_ms:44750},{pitch:"E5",start_ms:45e3},{pitch:"C5",start_ms:45750},{pitch:"E5",start_ms:46e3},{pitch:"A4",start_ms:46750},{pitch:"C5",start_ms:47e3},{pitch:"G#4",start_ms:47250},{pitch:"F4",start_ms:47500},{pitch:"C5",start_ms:47750},{pitch:"A4",start_ms:48e3}],cE=[{pitch:"C4",start_ms:0},{pitch:"E3",start_ms:0},{pitch:"C4",start_ms:833.33},{pitch:"E3",start_ms:833.33},{pitch:"G4",start_ms:1666.67},{pitch:"E3",start_ms:1666.67},{pitch:"G4",start_ms:2500},{pitch:"E3",start_ms:2500},{pitch:"A4",start_ms:3333.33},{pitch:"F3",start_ms:3333.33},{pitch:"A4",start_ms:4166.67},{pitch:"F3",start_ms:4166.67},{pitch:"G4",start_ms:5e3},{pitch:"E3",start_ms:5e3},{pitch:"F4",start_ms:6666.67},{pitch:"D3",start_ms:6666.67},{pitch:"F4",start_ms:7500},{pitch:"D3",start_ms:7500},{pitch:"E4",start_ms:8333.33},{pitch:"C3",start_ms:8333.33},{pitch:"E4",start_ms:9166.67},{pitch:"C3",start_ms:9166.67},{pitch:"D4",start_ms:1e4},{pitch:"B2",start_ms:1e4},{pitch:"D4",start_ms:10833.33},{pitch:"B2",start_ms:10833.33},{pitch:"C4",start_ms:11666.67},{pitch:"C3",start_ms:11666.67},{pitch:"G4",start_ms:13333.33},{pitch:"E3",start_ms:13333.33},{pitch:"G4",start_ms:14166.67},{pitch:"E3",start_ms:14166.67},{pitch:"F4",start_ms:15e3},{pitch:"D3",start_ms:15e3},{pitch:"F4",start_ms:15833.33},{pitch:"D3",start_ms:15833.33},{pitch:"E4",start_ms:16666.67},{pitch:"C3",start_ms:16666.67},{pitch:"E4",start_ms:17500},{pitch:"C3",start_ms:17500},{pitch:"D4",start_ms:18333.33},{pitch:"B2",start_ms:18333.33},{pitch:"G4",start_ms:2e4},{pitch:"E3",start_ms:2e4},{pitch:"G4",start_ms:20833.33},{pitch:"E3",start_ms:20833.33},{pitch:"F4",start_ms:21666.67},{pitch:"D3",start_ms:21666.67},{pitch:"F4",start_ms:22500},{pitch:"D3",start_ms:22500},{pitch:"E4",start_ms:23333.33},{pitch:"C3",start_ms:23333.33},{pitch:"E4",start_ms:24166.67},{pitch:"C3",start_ms:24166.67},{pitch:"D4",start_ms:25e3},{pitch:"G2",start_ms:25e3},{pitch:"C4",start_ms:26666.67},{pitch:"E3",start_ms:26666.67},{pitch:"C4",start_ms:27500},{pitch:"E3",start_ms:27500},{pitch:"G4",start_ms:28333.33},{pitch:"E3",start_ms:28333.33},{pitch:"G4",start_ms:29166.67},{pitch:"E3",start_ms:29166.67},{pitch:"A4",start_ms:3e4},{pitch:"F3",start_ms:3e4},{pitch:"G3",start_ms:30416.67},{pitch:"A4",start_ms:30833.33},{pitch:"A3",start_ms:30833.33},{pitch:"B3",start_ms:31250},{pitch:"G4",start_ms:31666.67},{pitch:"C4",start_ms:31666.67},{pitch:"F4",start_ms:33333.33},{pitch:"D3",start_ms:33333.33},{pitch:"F4",start_ms:34166.67},{pitch:"A3",start_ms:34166.67},{pitch:"E4",start_ms:35e3},{pitch:"G3",start_ms:35e3},{pitch:"E4",start_ms:35833.33},{pitch:"C3",start_ms:35833.33},{pitch:"D4",start_ms:36666.67},{pitch:"G3",start_ms:36666.67},{pitch:"D4",start_ms:37500},{pitch:"G2",start_ms:37500},{pitch:"C4",start_ms:38333.33},{pitch:"C3",start_ms:38333.33}],lE=[{pitch:"C5",start_ms:0},{pitch:"C5",start_ms:250},{pitch:"C5",start_ms:500},{pitch:"B4",start_ms:1e3},{pitch:"B4",start_ms:1250},{pitch:"B4",start_ms:1500},{pitch:"A4",start_ms:2e3},{pitch:"B4",start_ms:2250},{pitch:"A4",start_ms:2500},{pitch:"E4",start_ms:2750},{pitch:"E4",start_ms:3e3},{pitch:"A4",start_ms:4e3},{pitch:"B4",start_ms:4250},{pitch:"A4",start_ms:4500},{pitch:"E4",start_ms:4750},{pitch:"E4",start_ms:5e3},{pitch:"G4",start_ms:5500},{pitch:"A4",start_ms:6e3},{pitch:"B4",start_ms:6250},{pitch:"A4",start_ms:6500},{pitch:"F4",start_ms:7e3},{pitch:"D4",start_ms:8e3},{pitch:"E4",start_ms:8250},{pitch:"F4",start_ms:8750},{pitch:"G4",start_ms:9e3},{pitch:"A4",start_ms:9250},{pitch:"G4",start_ms:9750},{pitch:"D4",start_ms:1e4},{pitch:"E4",start_ms:10250},{pitch:"F4",start_ms:10500},{pitch:"G4",start_ms:11e3},{pitch:"A4",start_ms:12500},{pitch:"G#4",start_ms:12750},{pitch:"A4",start_ms:13e3},{pitch:"G#4",start_ms:13250},{pitch:"A4",start_ms:13500},{pitch:"A4",start_ms:14e3},{pitch:"D#4",start_ms:14500},{pitch:"D#4",start_ms:14750},{pitch:"D#4",start_ms:15e3},{pitch:"C5",start_ms:16e3},{pitch:"C5",start_ms:16250},{pitch:"C5",start_ms:16500},{pitch:"B4",start_ms:17e3},{pitch:"B4",start_ms:17250},{pitch:"B4",start_ms:17500},{pitch:"A4",start_ms:18e3},{pitch:"B4",start_ms:18250},{pitch:"A4",start_ms:18500},{pitch:"E4",start_ms:18750},{pitch:"E4",start_ms:19e3},{pitch:"A4",start_ms:2e4},{pitch:"B4",start_ms:20250},{pitch:"A4",start_ms:20500},{pitch:"E4",start_ms:21e3},{pitch:"G4",start_ms:21500},{pitch:"A4",start_ms:22e3},{pitch:"B4",start_ms:22250},{pitch:"A4",start_ms:22500},{pitch:"F4",start_ms:23e3},{pitch:"D4",start_ms:24e3},{pitch:"E4",start_ms:24250},{pitch:"F4",start_ms:24750},{pitch:"G4",start_ms:25e3},{pitch:"A4",start_ms:25250},{pitch:"G4",start_ms:25750},{pitch:"D4",start_ms:26e3},{pitch:"E4",start_ms:26250},{pitch:"F4",start_ms:26500},{pitch:"G4",start_ms:27e3},{pitch:"A4",start_ms:28500},{pitch:"A4",start_ms:28750},{pitch:"B4",start_ms:29e3},{pitch:"G4",start_ms:29250},{pitch:"C5",start_ms:29750},{pitch:"C5",start_ms:3e4},{pitch:"C5",start_ms:31500},{pitch:"C5",start_ms:31750},{pitch:"C5",start_ms:32e3},{pitch:"D5",start_ms:32250},{pitch:"C5",start_ms:32750},{pitch:"C5",start_ms:33e3},{pitch:"A4",start_ms:33500},{pitch:"C5",start_ms:33750},{pitch:"C5",start_ms:34e3},{pitch:"D5",start_ms:34250},{pitch:"C5",start_ms:34750},{pitch:"C5",start_ms:35e3},{pitch:"C5",start_ms:35750},{pitch:"C5",start_ms:36e3},{pitch:"B4",start_ms:36500},{pitch:"A4",start_ms:37e3},{pitch:"G4",start_ms:37500},{pitch:"E4",start_ms:38e3},{pitch:"C5",start_ms:39500},{pitch:"C5",start_ms:39750},{pitch:"C5",start_ms:4e4},{pitch:"D5",start_ms:40250},{pitch:"C5",start_ms:40750},{pitch:"C5",start_ms:41e3},{pitch:"A4",start_ms:41500},{pitch:"C5",start_ms:41750},{pitch:"D5",start_ms:42e3},{pitch:"C5",start_ms:42750},{pitch:"C5",start_ms:43e3},{pitch:"G4",start_ms:44250},{pitch:"G4",start_ms:44500},{pitch:"A4",start_ms:45e3},{pitch:"A4",start_ms:45250},{pitch:"A4",start_ms:45500},{pitch:"A4",start_ms:45750},{pitch:"B4",start_ms:46e3},{pitch:"A4",start_ms:46250},{pitch:"G4",start_ms:46750},{pitch:"G4",start_ms:47e3},{pitch:"C5",start_ms:48e3},{pitch:"C5",start_ms:48250},{pitch:"C5",start_ms:48500},{pitch:"B4",start_ms:49e3},{pitch:"B4",start_ms:49250},{pitch:"B4",start_ms:49500},{pitch:"A4",start_ms:5e4},{pitch:"B4",start_ms:50250},{pitch:"A4",start_ms:50500},{pitch:"E4",start_ms:50750},{pitch:"E4",start_ms:51e3},{pitch:"A4",start_ms:52e3},{pitch:"B4",start_ms:52250},{pitch:"A4",start_ms:52500},{pitch:"E4",start_ms:53e3},{pitch:"G4",start_ms:53500},{pitch:"A4",start_ms:54e3},{pitch:"A4",start_ms:56e3},{pitch:"C5",start_ms:56500},{pitch:"D5",start_ms:57e3},{pitch:"D5",start_ms:57250},{pitch:"C5",start_ms:57500},{pitch:"C5",start_ms:57750},{pitch:"A-4",start_ms:58e3},{pitch:"A-4",start_ms:58250},{pitch:"C5",start_ms:58500},{pitch:"D5",start_ms:58750},{pitch:"D5",start_ms:59e3},{pitch:"C5",start_ms:60500},{pitch:"A4",start_ms:60750},{pitch:"B4",start_ms:61e3},{pitch:"A4",start_ms:61250},{pitch:"G4",start_ms:61500},{pitch:"C5",start_ms:62e3},{pitch:"C5",start_ms:64500},{pitch:"A4",start_ms:64750},{pitch:"B4",start_ms:65e3},{pitch:"A4",start_ms:65250},{pitch:"G4",start_ms:65500},{pitch:"C5",start_ms:66500},{pitch:"A4",start_ms:66750},{pitch:"B4",start_ms:67e3},{pitch:"C5",start_ms:67250},{pitch:"D5",start_ms:67500},{pitch:"C5",start_ms:68e3},{pitch:"C5",start_ms:7e4}],gE=[{pitch:"E4",start_ms:0},{pitch:"C3",start_ms:0},{pitch:"E4",start_ms:500},{pitch:"F4",start_ms:1e3},{pitch:"G4",start_ms:1500},{pitch:"G4",start_ms:2e3},{pitch:"B2",start_ms:2e3},{pitch:"F4",start_ms:2500},{pitch:"E4",start_ms:3e3},{pitch:"D4",start_ms:3500},{pitch:"C4",start_ms:4e3},{pitch:"E3",start_ms:4e3},{pitch:"C4",start_ms:4500},{pitch:"D4",start_ms:5e3},{pitch:"D3",start_ms:5e3},{pitch:"E4",start_ms:5500},{pitch:"C3",start_ms:5500},{pitch:"E4",start_ms:6e3},{pitch:"G3",start_ms:6e3},{pitch:"D4",start_ms:6750},{pitch:"D4",start_ms:7e3},{pitch:"E4",start_ms:8e3},{pitch:"C3",start_ms:8e3},{pitch:"E4",start_ms:8500},{pitch:"F4",start_ms:9e3},{pitch:"G4",start_ms:9500},{pitch:"G4",start_ms:1e4},{pitch:"B2",start_ms:1e4},{pitch:"F4",start_ms:10500},{pitch:"E4",start_ms:11e3},{pitch:"D4",start_ms:11500},{pitch:"C4",start_ms:12e3},{pitch:"E3",start_ms:12e3},{pitch:"C4",start_ms:12500},{pitch:"D4",start_ms:13e3},{pitch:"D3",start_ms:13e3},{pitch:"E4",start_ms:13500},{pitch:"C3",start_ms:13500},{pitch:"D4",start_ms:14e3},{pitch:"F3",start_ms:14e3},{pitch:"C4",start_ms:14750},{pitch:"E3",start_ms:14750},{pitch:"C4",start_ms:15e3},{pitch:"E3",start_ms:15e3},{pitch:"D4",start_ms:16e3},{pitch:"B2",start_ms:16e3},{pitch:"D4",start_ms:16500},{pitch:"E4",start_ms:17e3},{pitch:"C3",start_ms:17e3},{pitch:"C4",start_ms:17500},{pitch:"D4",start_ms:18e3},{pitch:"B2",start_ms:18e3},{pitch:"E4",start_ms:18500},{pitch:"F4",start_ms:18750},{pitch:"E4",start_ms:19e3},{pitch:"C3",start_ms:19e3},{pitch:"C4",start_ms:19500},{pitch:"D4",start_ms:2e4},{pitch:"B2",start_ms:2e4},{pitch:"E4",start_ms:20500},{pitch:"F4",start_ms:20750},{pitch:"E4",start_ms:21e3},{pitch:"G#3",start_ms:21e3},{pitch:"D4",start_ms:21500},{pitch:"C4",start_ms:22e3},{pitch:"A3",start_ms:22e3},{pitch:"D4",start_ms:22500},{pitch:"F#3",start_ms:22500},{pitch:"G3",start_ms:23e3},{pitch:"E4",start_ms:24e3},{pitch:"C3",start_ms:24e3},{pitch:"E4",start_ms:24500},{pitch:"F4",start_ms:25e3},{pitch:"G4",start_ms:25500},{pitch:"G4",start_ms:26e3},{pitch:"B2",start_ms:26e3},{pitch:"F4",start_ms:26500},{pitch:"E4",start_ms:27e3},{pitch:"D4",start_ms:27500},{pitch:"C4",start_ms:28e3},{pitch:"E3",start_ms:28e3},{pitch:"C4",start_ms:28500},{pitch:"D4",start_ms:29e3},{pitch:"D3",start_ms:29e3},{pitch:"E4",start_ms:29500},{pitch:"C3",start_ms:29500},{pitch:"D4",start_ms:3e4},{pitch:"F3",start_ms:3e4},{pitch:"C4",start_ms:30750},{pitch:"E3",start_ms:30750},{pitch:"C4",start_ms:31e3},{pitch:"E3",start_ms:31e3}],dn=new(window.AudioContext||window.webkitAudioContext);let un=null,Si=!1,ce=null,Ra=null,rs=1,Be=null,fe=null,kn=null,ss=null,$t=null,ue=0,$e=0,Ue=0;const yn=1e3;let Kn=0;function Pa(n,t="bottom-to-top"){const i=document.createElement("canvas");["left-to-right","right-to-left"].includes(t)?(i.width=256,i.height=1):(i.width=1,i.height=256);const A=i.getContext("2d");let r=0,s=0,o=0,a=0;switch(t){case"top-to-bottom":r=0,s=0,o=0,a=256;break;case"bottom-to-top":r=0,s=256,o=0,a=0;break;case"left-to-right":r=0,s=0,o=256,a=0;break;case"right-to-left":r=256,s=0,o=0,a=0;break;default:console.warn(`Direção inválida: "${t}". Usando 'bottom-to-top'.`),r=0,s=256,o=0,a=0}const c=A.createLinearGradient(r,s,o,a);c.addColorStop(0,Fo(n,0)),c.addColorStop(.7,Fo(n,.7)),A.fillStyle=c,A.fillRect(0,0,i.width,i.height);const l=new Cg(i);return l.wrapS=an,l.wrapT=an,l.minFilter=Xe,l}function Fo(n,t){const e=parseInt(n.slice(1,3),16),i=parseInt(n.slice(3,5),16),A=parseInt(n.slice(5,7),16);return`rgba(${e},${i},${A},${t})`}const dE=Pa("#E323CA","top-to-bottom");Pa("#E323CA","bottom-to-top");const Me=new mg;Me.background=new Vt(723218);const Is=new Le(85,window.innerWidth/window.innerHeight,.1,1e3);Is.position.set(0,6,3);Is.lookAt(0,1,0);const ki=new fp({antialias:!0});ki.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(ki.domElement);const uE=new Ti(13.5,2),hE=new Jn({color:14885834,side:Ye,transparent:!0,opacity:.5}),hn=new we(uE,hE);hn.rotation.x=-Math.PI/2;hn.position.z=3;Me.add(hn);const fE=new Ti(.04,9),pE=new Jn({color:14885834,map:dE,side:Ye,transparent:!0,opacity:.5,depthWrite:!1}),mE=Array.from({length:13},(n,t)=>new we(fE,pE));mE.forEach((n,t)=>{n.rotation.x=-Math.PI/2,n.position.x=[0,1.1,-1.1,2.2,-2.2,3.3,-3.3,4.4,-4.4,5.5,-5.5,6.7,-6.7][t],n.position.z=-2.5,Me.add(n)});Me.add(new Og(16777215,2));const La=new yg(16119185,4);La.position.set(0,10,0);Me.add(La);const ee=[],De=[];function Ji(n,t,e){De.push({letter:n,delay:t,speed:e,spawned:!1})}function $i(){De.forEach(n=>{n.delay*=rs,n.speed/=rs})}function EE(n,t){const e=Vi[n];if(!e)return;const i=e.geometry.clone();let A;Array.isArray(e.material)?A=e.material.map(s=>s.clone()):A=e.material.clone();const r=new we(i,A);r.position.copy(e.position),r.userData={speed:t,letter:n,hit:!1,opacity:1},Me.add(r),ee.push(r)}function qn(){fe=requestAnimationFrame(qn);const n=performance.now()-kn;if(De.forEach(t=>{n>t.delay&&!t.spawned&&(EE(t.letter,t.speed),t.spawned=!0)}),kn&&Kn>0){const t=performance.now()-kn,e=Math.min(t/Kn,1);Ds.style.width=e*100+"%",e>=1&&(PA.style.display="none")}for(let t=ee.length-1;t>=0;t--){const e=ee[t];e.position.z+=e.userData.speed;const i=hn.position.z;if(!e.userData.hit&&e.position.z>=i-.8&&ce==="autoplay"){e.userData.hit=!0;const r=e.userData.letter;Array.isArray(e.material)&&e.material.forEach((o,a)=>{if(o instanceof Jn&&o.color&&o.color.set(5355423),a===2&&o instanceof jn){const c=RA[r];c?(o.map=c,o.needsUpdate=!0):console.warn(`Textura alternativa não encontrada para: ${r}`)}});const s=xn[e.userData.letter];un&&s&&un.play(s),setTimeout(()=>{Me.children.includes(e)&&Me.remove(e);const o=ee.indexOf(e);o!==-1&&ee.splice(o,1)},400)}if(ce==="jogar"&&!e.userData.hit&&e.position.z>i+1.5){e.userData.hit=!0;const r=Ue*.05;ue=Math.max(0,ue-r),Yi(-r),Yn(),Me.remove(e),ee.splice(t,1)}}ki.render(Me,Is),ee.length===0&&De.every(t=>t.spawned)&&(ss||(ss=setTimeout(()=>{cancelAnimationFrame(fe);const t=ki.domElement;t.style.display="none";const e=document.getElementById("fimDaCena"),i=document.getElementById("pontuacaoFinal");e&&(e.style.display="flex",CE(),ce==="jogar"?(i.style.display="block",BE(),setTimeout(TE,2200)):i.style.display="none"),document.getElementById("botoesMusica").style.display="none",document.getElementById("pontuacaoContainer").style.display="none",document.getElementById("pontuacaoTitle").style.display="none",document.getElementById("pontuacao").style.display="none",document.getElementById("gameMenu").style.display="none"},1e3)))}function Qs(){fe!==null&&(cancelAnimationFrame(fe),fe=null);for(let e of ee)Me.remove(e);ee.length=0,De.length=0,kn=null,ss=null;const n=document.getElementById("rankingEntry");n&&n.remove();const t=document.getElementById("fimDaCena");t&&(t.style.display="none")}function Yn(){Wi&&(Wi.textContent=`000${Math.floor(ue)}`);const n=document.getElementById("pontuacaoBar");if(n){const t=ue/yn*100;n.style.width=t+"%"}}function BE(){const n=document.getElementById("pontuacaoFinal"),t=Math.floor(ue),e=2e3,i=performance.now();function A(r){const s=r-i,o=Math.min(s/e,1),a=Math.floor(o*t);n.textContent=a,o<1&&requestAnimationFrame(A)}requestAnimationFrame(A)}function CE(){const n=document.querySelector(".estrelas"),t=document.getElementById("fraseMotivacao");if(ce==="autoplay"){n&&(n.style.display="none"),t&&(t.style.display="none");return}n&&(n.style.display="block"),t&&(t.style.display="block");const e=document.querySelectorAll(".estrelas span"),i=Math.floor(ue);let A=1,r="Bom trabalho!";i<700?(A=1,r="Boa tentativa! Continue praticando!"):i<850?(A=2,r="Excelente desempenho! Você está quase lá!"):(A=3,r="Perfeito! Você é um maestro!"),e.forEach((s,o)=>{o<A?s.textContent="★":s.textContent="☆"}),t&&(t.textContent=r)}function Yi(n){const t=Math.round(n);if(t===0)return;const e=document.createElement("div");e.className=`floating-points ${t>=0?"positive":"negative"}`,e.textContent=t>=0?`+${t}`:`${t}`;const i=Math.random()*(window.innerWidth-200)+100,A=window.innerHeight*.3+Math.random()*200;e.style.left=i+"px",e.style.top=A+"px",document.body.appendChild(e),setTimeout(()=>{e.remove()},2e3)}function IE(n){Array.isArray(n.material)&&n.material.forEach(t=>{(t instanceof Jn||t instanceof jn)&&(t.opacity=n.userData.opacity,t.transparent=!0,t.needsUpdate=!0)})}function Ua(n){if(n.userData.opacity=Math.max(0,n.userData.opacity-1/3),IE(n),n.userData.opacity<=.05){Me.remove(n);const t=ee.indexOf(n);t!==-1&&ee.splice(t,1)}}const _s=ki.domElement,QE=document.getElementById("resetarButton"),_E=document.getElementById("voltarButton"),Wi=document.getElementById("pontuacao");document.getElementById("gameMenu");const PA=document.getElementById("progressContainer"),Ds=document.getElementById("progressBar"),DE=document.getElementById("autoplayButton"),vE=document.getElementById("jogarButton"),xE={littlestar:"Twinkle, Twinkle, Little Star - Mozart",jinglebell:"Jingle Bells - James Lord Pierpont",elvis:"Beethoven - Für Elise",bethoven:"Bethoven - Ode á Alegria",tchai:"Tchaikovsky - Lago dos Cisnes"};function os(n){return xE[n]||"Música"}const SE=localStorage.getItem("musica")||"elvis";localStorage.getItem("modo");Ra=localStorage.getItem("modoMusica")||"jogador";$t=SE;rs=Ra==="aprendiz"?1.428571:1;fe!==null&&(cancelAnimationFrame(fe),fe=null);_E.addEventListener("click",()=>{ce=null,PA.style.display="none",Wi.style.display="none",document.getElementById("pontuacaoContainer").style.display="none",document.getElementById("gameMenu").style.display="none",document.getElementById("nomeDaMusica").style.display="none",document.getElementById("botoesMusica").style.display="none",document.getElementById("botoesJogar").classList.remove("ativo"),document.getElementById("botoesAutoplay").classList.remove("ativo"),_s.style.display="none",window.location.href="selector.html"});DE.addEventListener("click",()=>{ce!=="autoplay"&&(Ds.style.width="0%",PA.style.display="flex",Wi.style.display="none",document.getElementById("pontuacaoContainer").style.display="none",document.getElementById("pontuacaoTitle").style.display="none",document.getElementById("gameMenu").style.display="flex",document.getElementById("nomeDaMusica").textContent=os($t),document.getElementById("nomeDaMusica").style.display="block",document.getElementById("botoesMusica").style.display="flex",document.getElementById("botoesAutoplay").classList.add("ativo"),document.getElementById("botoesJogar").classList.remove("ativo"),_s.style.display="inline",ce="autoplay",ue=0,Yn(),Qs(),$t==="bethoven"?Ms():$t=="tchai"?xs():$t==="littlestar"?Ss():$t==="jinglebell"?ys():vs(),kn=performance.now(),Be&&(document.removeEventListener("keydown",Be),Be=null),fe!==null&&(cancelAnimationFrame(fe),fe=null),dn.state==="suspended"&&dn.resume(),Si?qn():cs.instrument(dn,"acoustic_grand_piano",{gain:4}).then(n=>{un=n,Si=!0,qn()}))});vE.addEventListener("click",()=>{ce!=="jogar"&&(document.getElementById("gameMenu").style.display="flex",Wi.style.display="block",document.getElementById("nomeDaMusica").textContent=os($t),document.getElementById("nomeDaMusica").style.display="block",_s.style.display="inline",Ds.style.width="0%",PA.style.display="flex",document.getElementById("pontuacaoContainer").style.display="block",document.getElementById("pontuacaoTitle").style.display="block",document.getElementById("nomeDaMusica").textContent=os($t),document.getElementById("nomeDaMusica").style.display="block",document.getElementById("botoesMusica").style.display="flex",document.getElementById("botoesJogar").classList.add("ativo"),document.getElementById("botoesAutoplay").classList.remove("ativo"),ce="jogar",ue=0,Yn(),Qs(),$t==="bethoven"?Ms():$t=="tchai"?xs():$t==="littlestar"?Ss():$t==="jinglebell"?ys():vs(),kn=performance.now(),fe!==null&&(cancelAnimationFrame(fe),fe=null),Be&&document.removeEventListener("keydown",Be),Be=n=>{const t=xn[n.key];if(!t||!un)return;un.play(t);let e=!1,i=null,A=1/0;for(let r=0;r<ee.length;r++){const s=ee[r],o=xn[s.userData.letter],a=Math.abs(s.position.z-hn.position.z)<1;if(!s.userData.hit&&o===t&&a){const c=Math.abs(s.position.z-hn.position.z);c<A&&(A=c,i=s)}}if(i){i.userData.hit=!0,e=!0;const r=i.userData.letter;Array.isArray(i.material)&&i.material.forEach((s,o)=>{if(s instanceof Jn&&s.color&&s.color.set(5355423),o===2&&s instanceof jn){const a=RA[r];a?(s.map=a,s.needsUpdate=!0):console.warn(`Textura alternativa não encontrada para: ${r}`)}}),setTimeout(()=>{ue=Math.min(yn,ue+Ue),Yi(Ue),Yn(),Me.remove(i);const s=ee.indexOf(i);s!==-1&&ee.splice(s,1)},400)}if(!e){let r=null,s=1/0;for(let o=0;o<ee.length;o++){const a=ee[o],c=xn[a.userData.letter];if(!a.userData.hit&&c===t){const l=Math.abs(a.position.z-hn.position.z);l<s&&(s=l,r=a)}}if(r)Ua(r);else{const o=Ue*.1;ue=Math.max(0,ue-o),Yi(-o),Yn()}}},document.addEventListener("keydown",Be),dn.state==="suspended"&&dn.resume(),Si?qn():cs.instrument(dn,"acoustic_grand_piano",{gain:4}).then(n=>{un=n,Si=!0,qn()}))});QE.addEventListener("click",()=>{Qs(),fe!==null&&(cancelAnimationFrame(fe),fe=null),Be&&(document.removeEventListener("keydown",Be),Be=null),$t==="bethoven"?Ms():$t==="tchai"?xs():$t==="littlestar"?Ss():$t==="jinglebell"?ys():vs(),kn=performance.now(),ce==="jogar"&&(Be=n=>{const t=xn[n.key];if(!t||!un)return;un.play(t);let e=!1;for(let i=ee.length-1;i>=0;i--){const A=ee[i],r=xn[A.userData.letter],s=Math.abs(A.position.z-hn.position.z)<.4;if(!A.userData.hit&&r===t&&s){A.userData.hit=!0,e=!0;const o=A.userData.letter;Array.isArray(A.material)&&A.material.forEach((a,c)=>{if(a instanceof Jn&&a.color&&a.color.set(5355423),c===2&&a instanceof jn){const l=RA[o];l?(a.map=l,a.needsUpdate=!0):console.warn(`Textura alternativa não encontrada para: ${o}`)}}),setTimeout(()=>{ue=Math.min(yn,ue+Ue),Yi(Ue),Yn(),Me.remove(A);const a=ee.indexOf(A);a!==-1&&ee.splice(a,1)},400);break}}if(!e){let i=null,A=1/0;for(let r=0;r<ee.length;r++){const s=ee[r],o=xn[s.userData.letter];if(!s.userData.hit&&o===t){const a=Math.abs(s.position.z-hn.position.z);a<A&&(A=a,i=s)}}if(i)Ua(i);else{const r=Ue*.1;ue=Math.max(0,ue-r),Yi(-r),Yn()}}},document.addEventListener("keydown",Be)),dn.state==="suspended"&&dn.resume(),Si?qn():cs.instrument(dn,"acoustic_grand_piano",{gain:4}).then(n=>{un=n,Si=!0,qn()})});const wi={};for(const[n,t]of Object.entries(xn))wi[t]=n;async function vs(){const n=oE;for(const t of n){const e=wi[t.pitch];if(!e){console.warn(`⚠️ Sem mapeamento: ${t.pitch} (${t.start_ms}ms)`);continue}Ji(e,t.start_ms,.05)}$i(),$e=De.length,Ue=yn/$e,Kn=Math.max(...De.map(t=>t.delay))+5e3}async function xs(){const n=aE;for(const t of n){const e=wi[t.pitch];if(!e){console.warn(`⚠️ Sem mapeamento: ${t.pitch} (${t.start_ms}ms)`);continue}Ji(e,t.start_ms,.05)}$i(),$e=De.length,Ue=yn/$e,Kn=Math.max(...De.map(t=>t.delay))+5e3}async function Ss(){const n=cE;for(const t of n){const e=wi[t.pitch];if(!e){console.warn(`⚠️ Sem mapeamento: ${t.pitch} (${t.start_ms}ms)`);continue}Ji(e,t.start_ms,.05)}$i(),$e=De.length,Ue=yn/$e,Kn=Math.max(...De.map(t=>t.delay))+5e3}async function Ms(){const n=gE;for(const t of n){const e=wi[t.pitch];if(!e){console.warn(`⚠️ Sem mapeamento: ${t.pitch} (${t.start_ms}ms)`);continue}Ji(e,t.start_ms,.05)}$i(),$e=De.length,Ue=yn/$e,Kn=Math.max(...De.map(t=>t.delay))+5e3}async function ys(){const n=lE;for(const t of n){const e=wi[t.pitch];if(!e){console.warn(`⚠️ Sem mapeamento: ${t.pitch} (${t.start_ms}ms)`);continue}Ji(e,t.start_ms,.05)}$i(),$e=De.length,Ue=yn/$e,Kn=Math.max(...De.map(t=>t.delay))+5e3}const Fa=15,wA=10;function Ga(n,t){const e=localStorage.getItem("modoMusica")||"jogador";return`ranking_${n}_${t}_${e}`}function Mi(n,t){try{const e=localStorage.getItem(Ga(n,t));return e?JSON.parse(e):[]}catch{return[]}}function ME(n,t,e){localStorage.setItem(Ga(n,t),JSON.stringify(e))}function Go(n,t,e){const i=Mi(t,e);return i.length<wA?!0:n>i[i.length-1].pontuacao}function za(n,t,e,i){const A=Mi(e,i),r=n.toLowerCase(),s=A.findIndex(a=>a.nome.toLowerCase()===r);s!==-1?t>A[s].pontuacao&&(A[s].pontuacao=Math.floor(t),A[s].data=new Date().toLocaleDateString("pt-BR")):A.push({nome:n.slice(0,Fa).trim(),pontuacao:Math.floor(t),data:new Date().toLocaleDateString("pt-BR")}),A.sort((a,c)=>c.pontuacao-a.pontuacao);const o=A.slice(0,wA);return ME(e,i,o),o.findIndex(a=>a.nome.toLowerCase()===r)+1}function Va(n){const t=Mi($t,ce),e=document.getElementById("rankingLista");if(!e)return;let i='<ol id="rankingOl">';t.forEach((A,r)=>{const s=A.nome.toLowerCase()===n.toLowerCase()?" ranking-destaque":"";i+=`
            <li class="ranking-item${s}">
                <span class="ranking-pos">${r+1}º</span>
                <span class="ranking-nome">${A.nome}</span>
                <span class="ranking-pts">${A.pontuacao}</span>
                <span class="ranking-data">${A.data}</span>
            </li>`}),i+="</ol>",e.innerHTML=i}function ka(n,t){if(document.getElementById("rankingEntry"))return!1;const e=document.getElementById("fimDaCena"),i=document.getElementById("fimDaCena-buttons");if(!e||!i)return!1;const A=document.createElement("div");return A.id="rankingEntry",A.innerHTML=`
        <p id="rankingMsg">${n}</p>
        ${t?`
        <div id="rankingInputWrapper">
            <input type="text" id="rankingNomeInput" maxlength="${Fa}"
                placeholder="Seu nome" autocomplete="off" />
            <button id="rankingConfirmarBtn">Confirmar</button>
        </div>`:""}
        <div id="rankingLista"></div>
    `,e.insertBefore(A,i),!0}function yE(n){const e=Mi($t,ce).findIndex(A=>A.nome.toLowerCase()===n.toLowerCase()),i=e!==-1?`🏆 Você ficou em ${e+1}º lugar!`:"🏆 Ranking";ka(i,!1)&&Va(n)}function OE(n){if(!ka(`🏆 Você entrou no top ${n}º do ranking!`,!0))return;const t=document.getElementById("rankingNomeInput"),e=document.getElementById("rankingConfirmarBtn");t.focus(),t.addEventListener("focus",()=>{Be&&document.removeEventListener("keydown",Be)}),t.addEventListener("blur",()=>{Be&&document.addEventListener("keydown",Be)});function i(){const A=t.value.trim();if(!A){t.style.borderColor="red";return}localStorage.setItem("rankingNomeUsuario",A);const r=za(A,ue,$t,ce);document.getElementById("rankingInputWrapper").style.display="none",document.getElementById("rankingMsg").textContent=`🏆 Você ficou em ${r}º lugar!`,Va(A)}e.addEventListener("click",i),t.addEventListener("keydown",A=>{A.stopPropagation(),A.key==="Enter"&&i()})}function TE(){if(ce!=="jogar")return;const n=Math.floor(ue);if(n<=0)return;const t=localStorage.getItem("rankingNomeUsuario");if(t){const i=Mi($t,ce).find(r=>r.nome.toLowerCase()===t.toLowerCase());(!i||n>i.pontuacao)&&Go(n,$t,ce)&&za(t,n,$t,ce),yE(t);return}if(Go(n,$t,ce)){const e=Mi($t,ce),i=e.length<wA?e.length+1:wA;OE(i)}}
