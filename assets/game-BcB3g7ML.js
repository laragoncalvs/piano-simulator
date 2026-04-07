(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))n(A);new MutationObserver(A=>{for(const r of A)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(A){const r={};return A.integrity&&(r.integrity=A.integrity),A.referrerPolicy&&(r.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?r.credentials="include":A.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(A){if(A.ep)return;A.ep=!0;const r=t(A);fetch(A.href,r)}})();function La(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Ua(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var A=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,A.get?A:{enumerable:!0,get:function(){return i[n]}})}),t}var Ns={exports:{}},Hs={exports:{}};function Fa(i){return i>64&&i<91?i-65:i>96&&i<123?i-71:i>47&&i<58?i+4:i===43?62:i===47?63:0}function Ga(i,e){for(var t=i.replace(/[^A-Za-z0-9\+\/]/g,""),n=t.length,A=e?Math.ceil((n*3+1>>2)/e)*e:n*3+1>>2,r=new Uint8Array(A),s,o,a=0,c=0,l=0;l<n;l++)if(o=l&3,a|=Fa(t.charCodeAt(l))<<18-6*o,o===3||n-l===1){for(s=0;s<3&&c<A;s++,c++)r[c]=a>>>(16>>>s&24)&255;a=0}return r}var za={decode:Ga},Va=function(i,e){return new Promise(function(t,n){var A=new XMLHttpRequest;e&&(A.responseType=e),A.open("GET",i),A.onload=function(){A.status===200?t(A.response):n(Error(A.statusText))},A.onerror=function(){n(Error("Network Error"))},A.send()})};(function(i){var e=za,t=Va;function n(v){return function(M){return typeof M=="string"&&v.test(M)}}function A(v,M){return typeof v=="string"?v+M:typeof v=="function"?v(M):M}function r(v,M,Q,m){var O=s(M)?o:a(M)?c:l(M)?d:u(M)?h:E(M)?C:f(M)?g:y(M)?x:D(M)?H:null,V=Q||{};return O?O(v,M,V):m?Promise.resolve(m):Promise.reject("Source not valid ("+M+")")}r.fetch=t;function s(v){return v instanceof ArrayBuffer}function o(v,M,Q){return new Promise(function(m,O){v.decodeAudioData(M,function(V){m(V)},function(){O("Can't decode audio data ("+M.slice(0,30)+"...)")})})}var a=n(/\.(mp3|wav|ogg)(\?.*)?$/i);function c(v,M,Q){var m=A(Q.from,M);return r(v,r.fetch(m,"arraybuffer"),Q)}function l(v){return v&&typeof v.then=="function"}function d(v,M,Q){return M.then(function(m){return r(v,m,Q)})}var u=Array.isArray;function h(v,M,Q){return Promise.all(M.map(function(m){return r(v,m,Q,m)}))}function E(v){return v&&typeof v=="object"}function C(v,M,Q){var m={},O=Object.keys(M).map(function(V){if(Q.only&&Q.only.indexOf(V)===-1)return null;var F=M[V];return r(v,F,Q,F).then(function(q){m[V]=q})});return Promise.all(O).then(function(){return m})}var f=n(/\.json(\?.*)?$/i);function g(v,M,Q){var m=A(Q.from,M);return r(v,r.fetch(m,"text").then(JSON.parse),Q)}var y=n(/^data:audio/);function x(v,M,Q){var m=M.indexOf(",");return r(v,e.decode(M.slice(m+1)).buffer,Q)}var D=n(/\.js(\?.*)?$/i);function H(v,M,Q){var m=A(Q.from,M);return r(v,r.fetch(m,"text").then(b),Q)}function b(v){var M=v.indexOf("MIDI.Soundfont.");if(M<0)throw Error("Invalid MIDI.js Soundfont format");M=v.indexOf("=",M)+2;var Q=v.lastIndexOf(",");return JSON.parse(v.slice(M,Q)+"}")}i.exports&&(i.exports=r),typeof window<"u"&&(window.loadAudio=r)})(Hs);var ka=Hs.exports,Rs={exports:{}},Ya=Wa;function Wa(i){var e=i.createGain(),t=e._voltage=qa(i),n=Jn(t),A=Jn(t),r=Jn(t);return e._startAmount=Jn(A),e._endAmount=Jn(r),e._multiplier=Jn(n),e._multiplier.connect(e),e._startAmount.connect(e),e._endAmount.connect(e),e.value=n.gain,e.startValue=A.gain,e.endValue=r.gain,e.startValue.value=0,e.endValue.value=0,Object.defineProperties(e,Xa),e}var Xa={attack:{value:0,writable:!0},decay:{value:0,writable:!0},sustain:{value:1,writable:!0},release:{value:0,writable:!0},getReleaseDuration:{value:function(){return this.release}},start:{value:function(i){var e=this._multiplier.gain,t=this._startAmount.gain,n=this._endAmount.gain;this._voltage.start(i),this._decayFrom=this._decayFrom=i+this.attack,this._startedAt=i;var A=this.sustain;e.cancelScheduledValues(i),t.cancelScheduledValues(i),n.cancelScheduledValues(i),n.setValueAtTime(0,i),this.attack?(e.setValueAtTime(0,i),e.linearRampToValueAtTime(1,i+this.attack),t.setValueAtTime(1,i),t.linearRampToValueAtTime(0,i+this.attack)):(e.setValueAtTime(1,i),t.setValueAtTime(0,i)),this.decay&&e.setTargetAtTime(A,this._decayFrom,To(this.decay))}},stop:{value:function(i,e){e&&(i=i-this.release);var t=i+this.release;if(this.release){var n=this._multiplier.gain,A=this._startAmount.gain,r=this._endAmount.gain;n.cancelScheduledValues(i),A.cancelScheduledValues(i),r.cancelScheduledValues(i);var s=To(this.release);if(this.attack&&i<this._decayFrom){var o=ja(0,1,this._startedAt,this._decayFrom,i);n.linearRampToValueAtTime(o,i),A.linearRampToValueAtTime(1-o,i),A.setTargetAtTime(0,i,s)}r.setTargetAtTime(1,i,s),n.setTargetAtTime(0,i,s)}return this._voltage.stop(t),t}},onended:{get:function(){return this._voltage.onended},set:function(i){this._voltage.onended=i}}},Ka=new Float32Array([1,1]);function qa(i){var e=i.createBufferSource(),t=i.createBuffer(1,2,i.sampleRate);return t.getChannelData(0).set(Ka),e.buffer=t,e.loop=!0,e}function Jn(i){var e=i.context.createGain();return i.connect(e),e}function To(i){return Math.log(i+1)/Math.log(100)}function ja(i,e,t,n,A){var r=e-i,s=n-t,o=A-t,a=o/s,c=i+a*r;return c<=i&&(c=i),c>=e&&(c=e),c}var Za=Ya,Ja={},$a={gain:1,attack:.01,decay:.1,sustain:.9,release:.3,loop:!1,cents:0,loopStart:0,loopEnd:0};function ec(i,e,t){var n=!1,A=0,r={},s=i.createGain();s.gain.value=1;var o=Object.assign({},$a,t),a={context:i,out:s,opts:o};return e instanceof AudioBuffer?a.buffer=e:a.buffers=e,a.start=function(d,u,h){if(a.buffer&&d!==null)return a.start(null,d,u);var E=d?a.buffers[d]:a.buffer;if(E){if(!n){console.warn("SamplePlayer not connected to any node.");return}}else{console.warn("Buffer "+d+" not found.");return}var C=h||Ja;u=Math.max(i.currentTime,u||0),a.emit("start",u,d,C);var f=l(d,E,C);return f.id=c(d,f),f.env.start(u),f.source.start(u),a.emit("started",u,f.id,f),C.duration&&f.stop(u+C.duration),f},a.play=function(d,u,h){return a.start(d,u,h)},a.stop=function(d,u){var h;return u=u||Object.keys(r),u.map(function(E){return h=r[E],h?(h.stop(d),h.id):null})},a.connect=function(d){return n=!0,s.connect(d),a},a.emit=function(d,u,h,E){a.onevent&&a.onevent(d,u,h,E);var C=a["on"+d];C&&C(u,h,E)},a;function c(d,u){return u.id=A++,r[u.id]=u,u.source.onended=function(){var h=i.currentTime;u.source.disconnect(),u.env.disconnect(),u.disconnect(),a.emit("ended",h,u.id,u)},u.id}function l(d,u,h){var E=i.createGain();return E.gain.value=0,E.connect(s),E.env=nc(i,h,o),E.env.connect(E.gain),E.source=i.createBufferSource(),E.source.buffer=u,E.source.connect(E),E.source.loop=h.loop||o.loop,E.source.playbackRate.value=ic(h.cents||o.cents),E.source.loopStart=h.loopStart||o.loopStart,E.source.loopEnd=h.loopEnd||o.loopEnd,E.stop=function(C){var f=C||i.currentTime;a.emit("stop",f,d);var g=E.env.stop(f);E.source.stop(g)},E}}function bo(i){return typeof i=="number"}var tc=["attack","decay","sustain","release"];function nc(i,e,t){var n=Za(i),A=e.adsr||t.adsr;return tc.forEach(function(r,s){A?n[r]=A[s]:n[r]=e[r]||t[r]}),n.value.value=bo(e.gain)?e.gain:bo(t.gain)?t.gain:1,n}function ic(i){return i?Math.pow(2,i/1200):1}var Ac=ec,rc=function(i){return i.on=function(e,t){if(arguments.length===1&&typeof e=="function")return i.on("event",e);var n="on"+e,A=i[n];return i[n]=A?oc(A,t):t,i},i};function oc(i,e){return function(t,n,A,r){i(t,n,A,r),e(t,n,A,r)}}var Ps=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function sc(){return Ps}var ac=[0,2,4,5,7,9,11];function Ls(i,e,t){if(typeof i!="string")return null;var n=Ps.exec(i);if(!n||!e&&n[4])return null;var A={letter:n[1].toUpperCase(),acc:n[2].replace(/x/g,"##")};return A.pc=A.letter+A.acc,A.step=(A.letter.charCodeAt(0)+3)%7,A.alt=A.acc[0]==="b"?-A.acc.length:A.acc.length,A.chroma=ac[A.step]+A.alt,n[3]&&(A.oct=+n[3],A.midi=A.chroma+12*(A.oct+1),A.freq=Us(A.midi,t)),e&&(A.tonicOf=n[4]),A}function Us(i,e){return Math.pow(2,(i-69)/12)*(e||440)}var Fs={parse:Ls,regex:sc,midiToFreq:Us},cc=["letter","acc","pc","step","alt","chroma","oct","midi","freq"];cc.forEach(function(i){Fs[i]=function(e){var t=Ls(e);return t&&typeof t[i]<"u"?t[i]:null}});var lc=Fs,gc=lc,dc=function(i){return i!==null&&i!==[]&&i>=0&&i<129},uc=function(i){return dc(i)?+i:gc.midi(i)},fc=function(i){if(i.buffers){var e=i.opts.map,t=typeof e=="function"?e:uc,n=function(r){return r?t(r)||r:null};i.buffers=hc(i.buffers,n);var A=i.start;i.start=function(r,s,o){var a=n(r),c=a%1;return c&&(a=Math.floor(a),o=Object.assign(o||{},{cents:Math.floor(c*100)})),A(a,s,o)}}return i};function hc(i,e){return Object.keys(i).reduce(function(t,n){return t[e(n)]=i[n],t},{})}var pc=Array.isArray,Ec=function(i){return i&&typeof i=="object"},Bc={},mc=function(i){return i.schedule=function(e,t){var n=i.context.currentTime,A=e<n?n:e;i.emit("schedule",A,t);var r,s,o,a;return t.map(function(c){if(c)pc(c)?(r=c[0],s=c[1]):(r=c.time,s=c);else return null;return Ec(s)?(o=s.name||s.key||s.note||s.midi||null,a=s):(o=s,a=Bc),i.start(o,A+(r||0),a)})},i};function $i(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Gs={exports:{}};(function(i,e){(function(t){i.exports=t()})(function(){return function t(n,A,r){function s(c,l){if(!A[c]){if(!n[c]){var d=typeof $i=="function"&&$i;if(!l&&d)return d(c,!0);if(o)return o(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var h=A[c]={exports:{}};n[c][0].call(h.exports,function(E){var C=n[c][1][E];return s(C||E)},h,h.exports,t,n,A,r)}return A[c].exports}for(var o=typeof $i=="function"&&$i,a=0;a<r.length;a++)s(r[a]);return s}({1:[function(t,n,A){Object.defineProperty(A,"__esModule",{value:!0}),A.default=function(r){function s(o){if(this._event=o,this._data=o.data,this.receivedTime=o.receivedTime,this._data&&this._data.length<2){console.warn("Illegal MIDI message of length",this._data.length);return}switch(this._messageCode=o.data[0]&240,this.channel=o.data[0]&15,this._messageCode){case 128:this.messageType="noteoff",this.key=o.data[1]&127,this.velocity=o.data[2]&127;break;case 144:this.messageType="noteon",this.key=o.data[1]&127,this.velocity=o.data[2]&127;break;case 160:this.messageType="keypressure",this.key=o.data[1]&127,this.pressure=o.data[2]&127;break;case 176:this.messageType="controlchange",this.controllerNumber=o.data[1]&127,this.controllerValue=o.data[2]&127,this.controllerNumber===120&&this.controllerValue===0?this.channelModeMessage="allsoundoff":this.controllerNumber===121?this.channelModeMessage="resetallcontrollers":this.controllerNumber===122?this.controllerValue===0?this.channelModeMessage="localcontroloff":this.channelModeMessage="localcontrolon":this.controllerNumber===123&&this.controllerValue===0?this.channelModeMessage="allnotesoff":this.controllerNumber===124&&this.controllerValue===0?this.channelModeMessage="omnimodeoff":this.controllerNumber===125&&this.controllerValue===0?this.channelModeMessage="omnimodeon":this.controllerNumber===126?this.channelModeMessage="monomodeon":this.controllerNumber===127&&(this.channelModeMessage="polymodeon");break;case 192:this.messageType="programchange",this.program=o.data[1];break;case 208:this.messageType="channelpressure",this.pressure=o.data[1]&127;break;case 224:this.messageType="pitchbendchange";var a=o.data[2]&127,c=o.data[1]&127;this.pitchBend=(a<<8)+c;break}}return new s(r)},n.exports=A.default},{}]},{},[1])(1)})})(Gs);var Cc=Gs.exports,Qc=Cc,Ic=function(i){return i.listenToMidi=function(e,t){var n={},A=t||{},r=A.gain||function(s){return s/127};return e.onmidimessage=function(s){var o=s.messageType?s:Qc(s);if(o.messageType==="noteon"&&o.velocity===0&&(o.messageType="noteoff"),!(A.channel&&o.channel!==A.channel))switch(o.messageType){case"noteon":n[o.key]=i.play(o.key,0,{gain:r(o.velocity)});break;case"noteoff":n[o.key]&&(n[o.key].stop(),delete n[o.key]);break}},i},i};(function(i){var e=Ac,t=rc,n=fc,A=mc,r=Ic;function s(o,a,c){return r(A(n(t(e(o,a,c)))))}i.exports&&(i.exports=s),typeof window<"u"&&(window.SamplePlayer=s)})(Rs);var _c=Rs.exports;function wo(i,e){return Array(e+1).join(i)}function io(i){return typeof i=="number"}function Dc(i){return typeof i=="string"}function vc(i){return typeof i<"u"}function zs(i,e){return Math.pow(2,(i-69)/12)*(e||440)}var Vs=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function xc(){return Vs}var Sc=[0,2,4,5,7,9,11];function pn(i,e,t){if(typeof i!="string")return null;var n=Vs.exec(i);if(!n||!e&&n[4])return null;var A={letter:n[1].toUpperCase(),acc:n[2].replace(/x/g,"##")};A.pc=A.letter+A.acc,A.step=(A.letter.charCodeAt(0)+3)%7,A.alt=A.acc[0]==="b"?-A.acc.length:A.acc.length;var r=Sc[A.step]+A.alt;return A.chroma=r<0?12+r:r%12,n[3]&&(A.oct=+n[3],A.midi=r+12*(A.oct+1),A.freq=zs(A.midi,t)),e&&(A.tonicOf=n[4]),A}var Mc="CDEFGAB";function yc(i){return io(i)?i<0?wo("b",-i):wo("#",i):""}function Oc(i){return io(i)?""+i:""}function ks(i,e,t){return i===null||typeof i>"u"?null:i.step?ks(i.step,i.alt,i.oct):i<0||i>6?null:Mc.charAt(i)+yc(e)+Oc(t)}function Ys(i){if((io(i)||Dc(i))&&i>=0&&i<128)return+i;var e=pn(i);return e&&vc(e.midi)?e.midi:null}function Tc(i,e){var t=Ys(i);return t===null?null:zs(t,e)}function bc(i){return(pn(i)||{}).letter}function wc(i){return(pn(i)||{}).acc}function Nc(i){return(pn(i)||{}).pc}function Hc(i){return(pn(i)||{}).step}function Rc(i){return(pn(i)||{}).alt}function Pc(i){return(pn(i)||{}).chroma}function Lc(i){return(pn(i)||{}).oct}const Uc=Object.freeze(Object.defineProperty({__proto__:null,acc:wc,alt:Rc,build:ks,chroma:Pc,freq:Tc,letter:bc,midi:Ys,oct:Lc,parse:pn,pc:Nc,regex:xc,step:Hc},Symbol.toStringTag,{value:"Module"})),Fc=Ua(Uc);var RA,No;function Gc(){if(No)return RA;No=1;var i=Fc;function e(A,r){if(console.warn("new Soundfont() is deprected"),console.log("Please use Soundfont.instrument() instead of new Soundfont().instrument()"),!(this instanceof e))return new e(A);this.nameToUrl=r||e.nameToUrl,this.ctx=A,this.instruments={},this.promises=[]}e.prototype.onready=function(A){console.warn("deprecated API"),console.log("Please use Promise.all(Soundfont.instrument(), Soundfont.instrument()).then() instead of new Soundfont().onready()"),Promise.all(this.promises).then(A)},e.prototype.instrument=function(A,r){console.warn("new Soundfont().instrument() is deprecated."),console.log("Please use Soundfont.instrument() instead.");var s=this.ctx;if(A=A||"default",A in this.instruments)return this.instruments[A];var o={name:A,play:n(s,r)};if(this.instruments[A]=o,A!=="default"){var a=e.instrument(s,A,r).then(function(c){return o.play=c.play,o});this.promises.push(a),o.onready=function(c){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),a.then(c)}}else o.onready=function(c){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),c()};return o};function t(A,r,s){return console.warn("Soundfont.loadBuffers is deprecate."),console.log("Use Soundfont.instrument(..) and get buffers properties from the result."),e.instrument(A,r,s).then(function(o){return o.buffers})}e.loadBuffers=t;function n(A,r){return r=r||{},function(s,o,a,c){console.warn("The oscillator player is deprecated."),console.log("Starting with version 0.9.0 you will have to wait until the soundfont is loaded to play sounds.");var l=s>0&&s<129?+s:i.midi(s),d=l?i.midiToFreq(l,440):null;if(d){a=a||.2,c=c||{};var u=c.destination||r.destination||A.destination,h=c.vcoType||r.vcoType||"sine",E=c.gain||r.gain||.4,C=A.createOscillator();C.type=h,C.frequency.value=d;var f=A.createGain();return f.gain.value=E,C.connect(f),f.connect(u),C.start(o),a>0&&C.stop(o+a),C}}}return e.noteToMidi=i.midi,RA=e,RA}(function(i){var e=ka,t=_c;function n(o,a,c){if(arguments.length===1)return function(E,C){return n(o,E,C)};var l=c||{},d=l.isSoundfontURL||A,u=l.nameToUrl||r,h=d(a)?a:u(a,l.soundfont,l.format);return e(o,h,{only:l.only||l.notes}).then(function(E){var C=t(o,E,l).connect(l.destination?l.destination:o.destination);return C.url=h,C.name=a,C})}function A(o){return/\.js(\?.*)?$/i.test(o)}function r(o,a,c){return c=c==="ogg"?c:"mp3",a=a==="FluidR3_GM"?a:"MusyngKite","https://gleitz.github.io/midi-js-soundfonts/"+a+"/"+o+"-"+c+".js"}var s=Gc();s.instrument=n,s.nameToUrl=r,i.exports&&(i.exports=s),typeof window<"u"&&(window.Soundfont=s)})(Ns);var zc=Ns.exports;const Ao=La(zc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ro="172",Vc=0,Ho=1,kc=2,Ws=1,Yc=2,on=3,Sn=0,xt=1,zt=2,Dn=0,hi=1,Ro=2,Po=3,Lo=4,Wc=5,Un=100,Xc=101,Kc=102,qc=103,jc=104,Zc=200,Jc=201,$c=202,el=203,fr=204,hr=205,tl=206,nl=207,il=208,Al=209,rl=210,ol=211,sl=212,al=213,cl=214,pr=0,Er=1,Br=2,Bi=3,mr=4,Cr=5,Qr=6,Ir=7,Xs=0,ll=1,gl=2,vn=0,dl=1,ul=2,fl=3,hl=4,pl=5,El=6,Bl=7,Ks=300,mi=301,Ci=302,_r=303,Dr=304,OA=306,vr=1e3,sn=1001,xr=1002,Wt=1003,ml=1004,eA=1005,kt=1006,PA=1007,Gn=1008,hn=1009,qs=1010,js=1011,Ui=1012,oo=1013,Yn=1014,an=1015,Wi=1016,so=1017,ao=1018,Qi=1020,Zs=35902,Js=1021,$s=1022,Yt=1023,ea=1024,ta=1025,pi=1026,Ii=1027,na=1028,co=1029,ia=1030,lo=1031,go=1033,IA=33776,_A=33777,DA=33778,vA=33779,Sr=35840,Mr=35841,yr=35842,Or=35843,Tr=36196,br=37492,wr=37496,Nr=37808,Hr=37809,Rr=37810,Pr=37811,Lr=37812,Ur=37813,Fr=37814,Gr=37815,zr=37816,Vr=37817,kr=37818,Yr=37819,Wr=37820,Xr=37821,xA=36492,Kr=36494,qr=36495,Aa=36283,jr=36284,Zr=36285,Jr=36286,Cl=3200,Ql=3201,ra=0,Il=1,_n="",Dt="srgb",_i="srgb-linear",MA="linear",qe="srgb",$n=7680,Uo=519,_l=512,Dl=513,vl=514,oa=515,xl=516,Sl=517,Ml=518,yl=519,Fo=35044,Go="300 es",cn=2e3,yA=2001;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const A=this._listeners[e];if(A!==void 0){const r=A.indexOf(t);r!==-1&&A.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const A=n.slice(0);for(let r=0,s=A.length;r<s;r++)A[r].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],LA=Math.PI/180,$r=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function Ol(i,e){return(i%e+e)%e}function UA(i,e,t){return(1-t)*i+t*e}function wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,A=e.elements;return this.x=A[0]*t+A[3]*n+A[6],this.y=A[1]*t+A[4]*n+A[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),A=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*A+e.x,this.y=r*A+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,A,r,s,o,a,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,A,r,s,o,a,c)}set(e,t,n,A,r,s,o,a,c){const l=this.elements;return l[0]=e,l[1]=A,l[2]=o,l[3]=t,l[4]=r,l[5]=a,l[6]=n,l[7]=s,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,A=t.elements,r=this.elements,s=n[0],o=n[3],a=n[6],c=n[1],l=n[4],d=n[7],u=n[2],h=n[5],E=n[8],C=A[0],f=A[3],g=A[6],y=A[1],x=A[4],D=A[7],H=A[2],b=A[5],v=A[8];return r[0]=s*C+o*y+a*H,r[3]=s*f+o*x+a*b,r[6]=s*g+o*D+a*v,r[1]=c*C+l*y+d*H,r[4]=c*f+l*x+d*b,r[7]=c*g+l*D+d*v,r[2]=u*C+h*y+E*H,r[5]=u*f+h*x+E*b,r[8]=u*g+h*D+E*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],A=e[2],r=e[3],s=e[4],o=e[5],a=e[6],c=e[7],l=e[8];return t*s*l-t*o*c-n*r*l+n*o*a+A*r*c-A*s*a}invert(){const e=this.elements,t=e[0],n=e[1],A=e[2],r=e[3],s=e[4],o=e[5],a=e[6],c=e[7],l=e[8],d=l*s-o*c,u=o*a-l*r,h=c*r-s*a,E=t*d+n*u+A*h;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=d*C,e[1]=(A*c-l*n)*C,e[2]=(o*n-A*s)*C,e[3]=u*C,e[4]=(l*t-A*a)*C,e[5]=(A*r-o*t)*C,e[6]=h*C,e[7]=(n*a-c*t)*C,e[8]=(s*t-n*r)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,A,r,s,o){const a=Math.cos(r),c=Math.sin(r);return this.set(n*a,n*c,-n*(a*s+c*o)+s+e,-A*c,A*a,-A*(-c*s+a*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(FA.makeScale(e,t)),this}rotate(e){return this.premultiply(FA.makeRotation(-e)),this}translate(e,t){return this.premultiply(FA.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let A=0;A<9;A++)if(t[A]!==n[A])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const FA=new Oe;function sa(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tl(){const i=Fi("canvas");return i.style.display="block",i}const zo={};function ui(i){i in zo||(zo[i]=!0,console.warn(i))}function bl(i,e,t){return new Promise(function(n,A){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:A();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function wl(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nl(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Vo=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ko=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hl(){const i={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(A,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===qe&&(A.r=ln(A.r),A.g=ln(A.g),A.b=ln(A.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(A.applyMatrix3(this.spaces[r].toXYZ),A.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===qe&&(A.r=Ei(A.r),A.g=Ei(A.g),A.b=Ei(A.b))),A},fromWorkingColorSpace:function(A,r){return this.convert(A,this.workingColorSpace,r)},toWorkingColorSpace:function(A,r){return this.convert(A,r,this.workingColorSpace)},getPrimaries:function(A){return this.spaces[A].primaries},getTransfer:function(A){return A===_n?MA:this.spaces[A].transfer},getLuminanceCoefficients:function(A,r=this.workingColorSpace){return A.fromArray(this.spaces[r].luminanceCoefficients)},define:function(A){Object.assign(this.spaces,A)},_getMatrix:function(A,r,s){return A.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(A){return this.spaces[A].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(A=this.workingColorSpace){return this.spaces[A].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_i]:{primaries:e,whitePoint:n,transfer:MA,toXYZ:Vo,fromXYZ:ko,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:qe,toXYZ:Vo,fromXYZ:ko,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}const Ve=Hl();function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ei(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class Rl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ei===void 0&&(ei=Fi("canvas")),ei.width=e.width,ei.height=e.height;const n=ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const A=n.getImageData(0,0,e.width,e.height),r=A.data;for(let s=0;s<r.length;s++)r[s]=ln(r[s]/255)*255;return n.putImageData(A,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ln(t[n]/255)*255):t[n]=ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pl=0;class aa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},A=this.data;if(A!==null){let r;if(Array.isArray(A)){r=[];for(let s=0,o=A.length;s<o;s++)A[s].isDataTexture?r.push(GA(A[s].image)):r.push(GA(A[s]))}else r=GA(A);n.url=r}return t||(e.images[this.uuid]=n),n}}function GA(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ll=0;class Bt extends Si{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=sn,A=sn,r=kt,s=Gn,o=Yt,a=hn,c=Bt.DEFAULT_ANISOTROPY,l=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=Xi(),this.name="",this.source=new aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=A,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ks)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Ks;Bt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,A=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=A}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,A){return this.x=e,this.y=t,this.z=n,this.w=A,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,A=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*A+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*A+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*A+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*A+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,A,r;const a=e.elements,c=a[0],l=a[4],d=a[8],u=a[1],h=a[5],E=a[9],C=a[2],f=a[6],g=a[10];if(Math.abs(l-u)<.01&&Math.abs(d-C)<.01&&Math.abs(E-f)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+C)<.1&&Math.abs(E+f)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,D=(h+1)/2,H=(g+1)/2,b=(l+u)/4,v=(d+C)/4,M=(E+f)/4;return x>D&&x>H?x<.01?(n=0,A=.707106781,r=.707106781):(n=Math.sqrt(x),A=b/n,r=v/n):D>H?D<.01?(n=.707106781,A=0,r=.707106781):(A=Math.sqrt(D),n=b/A,r=M/A):H<.01?(n=.707106781,A=.707106781,r=0):(r=Math.sqrt(H),n=v/r,A=M/r),this.set(n,A,r,t),this}let y=Math.sqrt((f-E)*(f-E)+(d-C)*(d-C)+(u-l)*(u-l));return Math.abs(y)<.001&&(y=1),this.x=(f-E)/y,this.y=(d-C)/y,this.z=(u-l)/y,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ul extends Si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const A={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Bt(A,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let A=0,r=this.textures.length;A<r;A++)this.textures[A].image.width=e,this.textures[A].image.height=t,this.textures[A].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,A=e.textures.length;n<A;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new aa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends Ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ca extends Bt{constructor(e=null,t=1,n=1,A=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:A},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fl extends Bt{constructor(e=null,t=1,n=1,A=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:A},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=0,t=0,n=0,A=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=A}static slerpFlat(e,t,n,A,r,s,o){let a=n[A+0],c=n[A+1],l=n[A+2],d=n[A+3];const u=r[s+0],h=r[s+1],E=r[s+2],C=r[s+3];if(o===0){e[t+0]=a,e[t+1]=c,e[t+2]=l,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=h,e[t+2]=E,e[t+3]=C;return}if(d!==C||a!==u||c!==h||l!==E){let f=1-o;const g=a*u+c*h+l*E+d*C,y=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const H=Math.sqrt(x),b=Math.atan2(H,g*y);f=Math.sin(f*b)/H,o=Math.sin(o*b)/H}const D=o*y;if(a=a*f+u*D,c=c*f+h*D,l=l*f+E*D,d=d*f+C*D,f===1-o){const H=1/Math.sqrt(a*a+c*c+l*l+d*d);a*=H,c*=H,l*=H,d*=H}}e[t]=a,e[t+1]=c,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,A,r,s){const o=n[A],a=n[A+1],c=n[A+2],l=n[A+3],d=r[s],u=r[s+1],h=r[s+2],E=r[s+3];return e[t]=o*E+l*d+a*h-c*u,e[t+1]=a*E+l*u+c*d-o*h,e[t+2]=c*E+l*h+o*u-a*d,e[t+3]=l*E-o*d-a*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,A){return this._x=e,this._y=t,this._z=n,this._w=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,A=e._y,r=e._z,s=e._order,o=Math.cos,a=Math.sin,c=o(n/2),l=o(A/2),d=o(r/2),u=a(n/2),h=a(A/2),E=a(r/2);switch(s){case"XYZ":this._x=u*l*d+c*h*E,this._y=c*h*d-u*l*E,this._z=c*l*E+u*h*d,this._w=c*l*d-u*h*E;break;case"YXZ":this._x=u*l*d+c*h*E,this._y=c*h*d-u*l*E,this._z=c*l*E-u*h*d,this._w=c*l*d+u*h*E;break;case"ZXY":this._x=u*l*d-c*h*E,this._y=c*h*d+u*l*E,this._z=c*l*E+u*h*d,this._w=c*l*d-u*h*E;break;case"ZYX":this._x=u*l*d-c*h*E,this._y=c*h*d+u*l*E,this._z=c*l*E-u*h*d,this._w=c*l*d+u*h*E;break;case"YZX":this._x=u*l*d+c*h*E,this._y=c*h*d+u*l*E,this._z=c*l*E-u*h*d,this._w=c*l*d-u*h*E;break;case"XZY":this._x=u*l*d-c*h*E,this._y=c*h*d-u*l*E,this._z=c*l*E+u*h*d,this._w=c*l*d+u*h*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,A=Math.sin(n);return this._x=e.x*A,this._y=e.y*A,this._z=e.z*A,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],A=t[4],r=t[8],s=t[1],o=t[5],a=t[9],c=t[2],l=t[6],d=t[10],u=n+o+d;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(l-a)*h,this._y=(r-c)*h,this._z=(s-A)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(l-a)/h,this._x=.25*h,this._y=(A+s)/h,this._z=(r+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(r-c)/h,this._x=(A+s)/h,this._y=.25*h,this._z=(a+l)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(s-A)/h,this._x=(r+c)/h,this._y=(a+l)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const A=Math.min(1,t/n);return this.slerp(e,A),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,A=e._y,r=e._z,s=e._w,o=t._x,a=t._y,c=t._z,l=t._w;return this._x=n*l+s*o+A*c-r*a,this._y=A*l+s*a+r*o-n*c,this._z=r*l+s*c+n*a-A*o,this._w=s*l-n*o-A*a-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,A=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+A*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=A,this._z=r,this;const a=1-o*o;if(a<=Number.EPSILON){const h=1-t;return this._w=h*s+t*this._w,this._x=h*n+t*this._x,this._y=h*A+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(a),l=Math.atan2(c,o),d=Math.sin((1-t)*l)/c,u=Math.sin(t*l)/c;return this._w=s*d+this._w*u,this._x=n*d+this._x*u,this._y=A*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),A=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(A*Math.sin(e),A*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,A=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*A,this.y=r[1]*t+r[4]*n+r[7]*A,this.z=r[2]*t+r[5]*n+r[8]*A,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,A=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*A+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*A+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*A+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*A+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,A=this.z,r=e.x,s=e.y,o=e.z,a=e.w,c=2*(s*A-o*n),l=2*(o*t-r*A),d=2*(r*n-s*t);return this.x=t+a*c+s*d-o*l,this.y=n+a*l+o*c-r*d,this.z=A+a*d+r*l-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,A=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*A,this.y=r[1]*t+r[5]*n+r[9]*A,this.z=r[2]*t+r[6]*n+r[10]*A,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,A=e.y,r=e.z,s=t.x,o=t.y,a=t.z;return this.x=A*a-r*o,this.y=r*s-n*a,this.z=n*o-A*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zA.copy(this).projectOnVector(e),this.sub(zA)}reflect(e){return this.sub(zA.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,A=this.z-e.z;return t*t+n*n+A*A}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const A=Math.sin(t)*e;return this.x=A*Math.sin(n),this.y=Math.cos(t)*e,this.z=A*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),A=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=A,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zA=new U,Yo=new Ki;class qi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ut.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ut.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ut.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ut):Ut.fromBufferAttribute(r,s),Ut.applyMatrix4(e.matrixWorld),this.expandByPoint(Ut);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tA.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tA.copy(n.boundingBox)),tA.applyMatrix4(e.matrixWorld),this.union(tA)}const A=e.children;for(let r=0,s=A.length;r<s;r++)this.expandByObject(A[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ut),Ut.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),nA.subVectors(this.max,Ni),ti.subVectors(e.a,Ni),ni.subVectors(e.b,Ni),ii.subVectors(e.c,Ni),En.subVectors(ni,ti),Bn.subVectors(ii,ni),Tn.subVectors(ti,ii);let t=[0,-En.z,En.y,0,-Bn.z,Bn.y,0,-Tn.z,Tn.y,En.z,0,-En.x,Bn.z,0,-Bn.x,Tn.z,0,-Tn.x,-En.y,En.x,0,-Bn.y,Bn.x,0,-Tn.y,Tn.x,0];return!VA(t,ti,ni,ii,nA)||(t=[1,0,0,0,1,0,0,0,1],!VA(t,ti,ni,ii,nA))?!1:(iA.crossVectors(En,Bn),t=[iA.x,iA.y,iA.z],VA(t,ti,ni,ii,nA))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ut).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ut).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new U,new U,new U,new U,new U,new U,new U,new U],Ut=new U,tA=new qi,ti=new U,ni=new U,ii=new U,En=new U,Bn=new U,Tn=new U,Ni=new U,nA=new U,iA=new U,bn=new U;function VA(i,e,t,n,A){for(let r=0,s=i.length-3;r<=s;r+=3){bn.fromArray(i,r);const o=A.x*Math.abs(bn.x)+A.y*Math.abs(bn.y)+A.z*Math.abs(bn.z),a=e.dot(bn),c=t.dot(bn),l=n.dot(bn);if(Math.max(-Math.max(a,c,l),Math.min(a,c,l))>o)return!1}return!0}const Gl=new qi,Hi=new U,kA=new U;class uo{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gl.setFromPoints(e).getCenter(n);let A=0;for(let r=0,s=e.length;r<s;r++)A=Math.max(A,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(A),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),A=(n-this.radius)*.5;this.center.addScaledVector(Hi,A/n),this.radius+=A}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kA.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(kA)),this.expandByPoint(Hi.copy(e.center).sub(kA))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new U,YA=new U,AA=new U,mn=new U,WA=new U,rA=new U,XA=new U;class zl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.origin).addScaledVector(this.direction,t),tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,A){YA.copy(e).add(t).multiplyScalar(.5),AA.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(YA);const r=e.distanceTo(t)*.5,s=-this.direction.dot(AA),o=mn.dot(this.direction),a=-mn.dot(AA),c=mn.lengthSq(),l=Math.abs(1-s*s);let d,u,h,E;if(l>0)if(d=s*a-o,u=s*o-a,E=r*l,d>=0)if(u>=-E)if(u<=E){const C=1/l;d*=C,u*=C,h=d*(d+s*u+2*o)+u*(s*d+u+2*a)+c}else u=r,d=Math.max(0,-(s*u+o)),h=-d*d+u*(u+2*a)+c;else u=-r,d=Math.max(0,-(s*u+o)),h=-d*d+u*(u+2*a)+c;else u<=-E?(d=Math.max(0,-(-s*r+o)),u=d>0?-r:Math.min(Math.max(-r,-a),r),h=-d*d+u*(u+2*a)+c):u<=E?(d=0,u=Math.min(Math.max(-r,-a),r),h=u*(u+2*a)+c):(d=Math.max(0,-(s*r+o)),u=d>0?r:Math.min(Math.max(-r,-a),r),h=-d*d+u*(u+2*a)+c);else u=s>0?-r:r,d=Math.max(0,-(s*u+o)),h=-d*d+u*(u+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),A&&A.copy(YA).addScaledVector(AA,u),h}intersectSphere(e,t){tn.subVectors(e.center,this.origin);const n=tn.dot(this.direction),A=tn.dot(tn)-n*n,r=e.radius*e.radius;if(A>r)return null;const s=Math.sqrt(r-A),o=n-s,a=n+s;return a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,A,r,s,o,a;const c=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,A=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,A=(e.min.x-u.x)*c),l>=0?(r=(e.min.y-u.y)*l,s=(e.max.y-u.y)*l):(r=(e.max.y-u.y)*l,s=(e.min.y-u.y)*l),n>s||r>A||((r>n||isNaN(n))&&(n=r),(s<A||isNaN(A))&&(A=s),d>=0?(o=(e.min.z-u.z)*d,a=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,a=(e.min.z-u.z)*d),n>a||o>A)||((o>n||n!==n)&&(n=o),(a<A||A!==A)&&(A=a),A<0)?null:this.at(n>=0?n:A,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,n,A,r){WA.subVectors(t,e),rA.subVectors(n,e),XA.crossVectors(WA,rA);let s=this.direction.dot(XA),o;if(s>0){if(A)return null;o=1}else if(s<0)o=-1,s=-s;else return null;mn.subVectors(this.origin,e);const a=o*this.direction.dot(rA.crossVectors(mn,rA));if(a<0)return null;const c=o*this.direction.dot(WA.cross(mn));if(c<0||a+c>s)return null;const l=-o*mn.dot(XA);return l<0?null:this.at(l/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,A,r,s,o,a,c,l,d,u,h,E,C,f){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,A,r,s,o,a,c,l,d,u,h,E,C,f)}set(e,t,n,A,r,s,o,a,c,l,d,u,h,E,C,f){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=A,g[1]=r,g[5]=s,g[9]=o,g[13]=a,g[2]=c,g[6]=l,g[10]=d,g[14]=u,g[3]=h,g[7]=E,g[11]=C,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,A=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),s=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*A,t[1]=n[1]*A,t[2]=n[2]*A,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,A=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),a=Math.cos(A),c=Math.sin(A),l=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=s*l,h=s*d,E=o*l,C=o*d;t[0]=a*l,t[4]=-a*d,t[8]=c,t[1]=h+E*c,t[5]=u-C*c,t[9]=-o*a,t[2]=C-u*c,t[6]=E+h*c,t[10]=s*a}else if(e.order==="YXZ"){const u=a*l,h=a*d,E=c*l,C=c*d;t[0]=u+C*o,t[4]=E*o-h,t[8]=s*c,t[1]=s*d,t[5]=s*l,t[9]=-o,t[2]=h*o-E,t[6]=C+u*o,t[10]=s*a}else if(e.order==="ZXY"){const u=a*l,h=a*d,E=c*l,C=c*d;t[0]=u-C*o,t[4]=-s*d,t[8]=E+h*o,t[1]=h+E*o,t[5]=s*l,t[9]=C-u*o,t[2]=-s*c,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){const u=s*l,h=s*d,E=o*l,C=o*d;t[0]=a*l,t[4]=E*c-h,t[8]=u*c+C,t[1]=a*d,t[5]=C*c+u,t[9]=h*c-E,t[2]=-c,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){const u=s*a,h=s*c,E=o*a,C=o*c;t[0]=a*l,t[4]=C-u*d,t[8]=E*d+h,t[1]=d,t[5]=s*l,t[9]=-o*l,t[2]=-c*l,t[6]=h*d+E,t[10]=u-C*d}else if(e.order==="XZY"){const u=s*a,h=s*c,E=o*a,C=o*c;t[0]=a*l,t[4]=-d,t[8]=c*l,t[1]=u*d+C,t[5]=s*l,t[9]=h*d-E,t[2]=E*d-h,t[6]=o*l,t[10]=C*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vl,e,kl)}lookAt(e,t,n){const A=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),Cn.crossVectors(n,Mt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),Cn.crossVectors(n,Mt)),Cn.normalize(),oA.crossVectors(Mt,Cn),A[0]=Cn.x,A[4]=oA.x,A[8]=Mt.x,A[1]=Cn.y,A[5]=oA.y,A[9]=Mt.y,A[2]=Cn.z,A[6]=oA.z,A[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,A=t.elements,r=this.elements,s=n[0],o=n[4],a=n[8],c=n[12],l=n[1],d=n[5],u=n[9],h=n[13],E=n[2],C=n[6],f=n[10],g=n[14],y=n[3],x=n[7],D=n[11],H=n[15],b=A[0],v=A[4],M=A[8],Q=A[12],m=A[1],O=A[5],V=A[9],F=A[13],q=A[2],j=A[6],W=A[10],J=A[14],z=A[3],re=A[7],ge=A[11],me=A[15];return r[0]=s*b+o*m+a*q+c*z,r[4]=s*v+o*O+a*j+c*re,r[8]=s*M+o*V+a*W+c*ge,r[12]=s*Q+o*F+a*J+c*me,r[1]=l*b+d*m+u*q+h*z,r[5]=l*v+d*O+u*j+h*re,r[9]=l*M+d*V+u*W+h*ge,r[13]=l*Q+d*F+u*J+h*me,r[2]=E*b+C*m+f*q+g*z,r[6]=E*v+C*O+f*j+g*re,r[10]=E*M+C*V+f*W+g*ge,r[14]=E*Q+C*F+f*J+g*me,r[3]=y*b+x*m+D*q+H*z,r[7]=y*v+x*O+D*j+H*re,r[11]=y*M+x*V+D*W+H*ge,r[15]=y*Q+x*F+D*J+H*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],A=e[8],r=e[12],s=e[1],o=e[5],a=e[9],c=e[13],l=e[2],d=e[6],u=e[10],h=e[14],E=e[3],C=e[7],f=e[11],g=e[15];return E*(+r*a*d-A*c*d-r*o*u+n*c*u+A*o*h-n*a*h)+C*(+t*a*h-t*c*u+r*s*u-A*s*h+A*c*l-r*a*l)+f*(+t*c*d-t*o*h-r*s*d+n*s*h+r*o*l-n*c*l)+g*(-A*o*l-t*a*d+t*o*u+A*s*d-n*s*u+n*a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const A=this.elements;return e.isVector3?(A[12]=e.x,A[13]=e.y,A[14]=e.z):(A[12]=e,A[13]=t,A[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],A=e[2],r=e[3],s=e[4],o=e[5],a=e[6],c=e[7],l=e[8],d=e[9],u=e[10],h=e[11],E=e[12],C=e[13],f=e[14],g=e[15],y=d*f*c-C*u*c+C*a*h-o*f*h-d*a*g+o*u*g,x=E*u*c-l*f*c-E*a*h+s*f*h+l*a*g-s*u*g,D=l*C*c-E*d*c+E*o*h-s*C*h-l*o*g+s*d*g,H=E*d*a-l*C*a-E*o*u+s*C*u+l*o*f-s*d*f,b=t*y+n*x+A*D+r*H;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/b;return e[0]=y*v,e[1]=(C*u*r-d*f*r-C*A*h+n*f*h+d*A*g-n*u*g)*v,e[2]=(o*f*r-C*a*r+C*A*c-n*f*c-o*A*g+n*a*g)*v,e[3]=(d*a*r-o*u*r-d*A*c+n*u*c+o*A*h-n*a*h)*v,e[4]=x*v,e[5]=(l*f*r-E*u*r+E*A*h-t*f*h-l*A*g+t*u*g)*v,e[6]=(E*a*r-s*f*r-E*A*c+t*f*c+s*A*g-t*a*g)*v,e[7]=(s*u*r-l*a*r+l*A*c-t*u*c-s*A*h+t*a*h)*v,e[8]=D*v,e[9]=(E*d*r-l*C*r-E*n*h+t*C*h+l*n*g-t*d*g)*v,e[10]=(s*C*r-E*o*r+E*n*c-t*C*c-s*n*g+t*o*g)*v,e[11]=(l*o*r-s*d*r-l*n*c+t*d*c+s*n*h-t*o*h)*v,e[12]=H*v,e[13]=(l*C*A-E*d*A+E*n*u-t*C*u-l*n*f+t*d*f)*v,e[14]=(E*o*A-s*C*A-E*n*a+t*C*a+s*n*f-t*o*f)*v,e[15]=(s*d*A-l*o*A+l*n*a-t*d*a-s*n*u+t*o*u)*v,this}scale(e){const t=this.elements,n=e.x,A=e.y,r=e.z;return t[0]*=n,t[4]*=A,t[8]*=r,t[1]*=n,t[5]*=A,t[9]*=r,t[2]*=n,t[6]*=A,t[10]*=r,t[3]*=n,t[7]*=A,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],A=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,A))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),A=Math.sin(t),r=1-n,s=e.x,o=e.y,a=e.z,c=r*s,l=r*o;return this.set(c*s+n,c*o-A*a,c*a+A*o,0,c*o+A*a,l*o+n,l*a-A*s,0,c*a-A*o,l*a+A*s,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,A,r,s){return this.set(1,n,r,0,e,1,s,0,t,A,1,0,0,0,0,1),this}compose(e,t,n){const A=this.elements,r=t._x,s=t._y,o=t._z,a=t._w,c=r+r,l=s+s,d=o+o,u=r*c,h=r*l,E=r*d,C=s*l,f=s*d,g=o*d,y=a*c,x=a*l,D=a*d,H=n.x,b=n.y,v=n.z;return A[0]=(1-(C+g))*H,A[1]=(h+D)*H,A[2]=(E-x)*H,A[3]=0,A[4]=(h-D)*b,A[5]=(1-(u+g))*b,A[6]=(f+y)*b,A[7]=0,A[8]=(E+x)*v,A[9]=(f-y)*v,A[10]=(1-(u+C))*v,A[11]=0,A[12]=e.x,A[13]=e.y,A[14]=e.z,A[15]=1,this}decompose(e,t,n){const A=this.elements;let r=Ai.set(A[0],A[1],A[2]).length();const s=Ai.set(A[4],A[5],A[6]).length(),o=Ai.set(A[8],A[9],A[10]).length();this.determinant()<0&&(r=-r),e.x=A[12],e.y=A[13],e.z=A[14],Ft.copy(this);const c=1/r,l=1/s,d=1/o;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=l,Ft.elements[5]*=l,Ft.elements[6]*=l,Ft.elements[8]*=d,Ft.elements[9]*=d,Ft.elements[10]*=d,t.setFromRotationMatrix(Ft),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,A,r,s,o=cn){const a=this.elements,c=2*r/(t-e),l=2*r/(n-A),d=(t+e)/(t-e),u=(n+A)/(n-A);let h,E;if(o===cn)h=-(s+r)/(s-r),E=-2*s*r/(s-r);else if(o===yA)h=-s/(s-r),E=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return a[0]=c,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=E,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,A,r,s,o=cn){const a=this.elements,c=1/(t-e),l=1/(n-A),d=1/(s-r),u=(t+e)*c,h=(n+A)*l;let E,C;if(o===cn)E=(s+r)*d,C=-2*d;else if(o===yA)E=r*d,C=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=C,a[14]=-E,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let A=0;A<16;A++)if(t[A]!==n[A])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new U,Ft=new rt,Vl=new U(0,0,0),kl=new U(1,1,1),Cn=new U,oA=new U,Mt=new U,Wo=new rt,Xo=new Ki;class Zt{constructor(e=0,t=0,n=0,A=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=A}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,A=this._order){return this._x=e,this._y=t,this._z=n,this._order=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const A=e.elements,r=A[0],s=A[4],o=A[8],a=A[1],c=A[5],l=A[9],d=A[2],u=A[6],h=A[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,h),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-He(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class la{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yl=0;const Ko=new U,ri=new Ki,nn=new rt,sA=new U,Ri=new U,Wl=new U,Xl=new Ki,qo=new U(1,0,0),jo=new U(0,1,0),Zo=new U(0,0,1),Jo={type:"added"},Kl={type:"removed"},oi={type:"childadded",child:null},KA={type:"childremoved",child:null};class mt extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new U,t=new Zt,n=new Ki,A=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:A},modelViewMatrix:{value:new rt},normalMatrix:{value:new Oe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(qo,e)}rotateY(e){return this.rotateOnAxis(jo,e)}rotateZ(e){return this.rotateOnAxis(Zo,e)}translateOnAxis(e,t){return Ko.copy(e).applyQuaternion(this.quaternion),this.position.add(Ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qo,e)}translateY(e){return this.translateOnAxis(jo,e)}translateZ(e){return this.translateOnAxis(Zo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sA.copy(e):sA.set(e,t,n);const A=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Ri,sA,this.up):nn.lookAt(sA,Ri,this.up),this.quaternion.setFromRotationMatrix(nn),A&&(nn.extractRotation(A.matrixWorld),ri.setFromRotationMatrix(nn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jo),oi.child=e,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kl),KA.child=e,this.dispatchEvent(KA),KA.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jo),oi.child=e,this.dispatchEvent(oi),oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,A=this.children.length;n<A;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const A=this.children;for(let r=0,s=A.length;r<s;r++)A[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,Wl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,Xl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,A=t.length;n<A;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,A=t.length;n<A;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,A=t.length;n<A;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const A=this.children;for(let r=0,s=A.length;r<s;r++)A[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const A={};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.castShadow===!0&&(A.castShadow=!0),this.receiveShadow===!0&&(A.receiveShadow=!0),this.visible===!1&&(A.visible=!1),this.frustumCulled===!1&&(A.frustumCulled=!1),this.renderOrder!==0&&(A.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(A.userData=this.userData),A.layers=this.layers.mask,A.matrix=this.matrix.toArray(),A.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(A.matrixAutoUpdate=!1),this.isInstancedMesh&&(A.type="InstancedMesh",A.count=this.count,A.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(A.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(A.type="BatchedMesh",A.perObjectFrustumCulled=this.perObjectFrustumCulled,A.sortObjects=this.sortObjects,A.drawRanges=this._drawRanges,A.reservedRanges=this._reservedRanges,A.visibility=this._visibility,A.active=this._active,A.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),A.maxInstanceCount=this._maxInstanceCount,A.maxVertexCount=this._maxVertexCount,A.maxIndexCount=this._maxIndexCount,A.geometryInitialized=this._geometryInitialized,A.geometryCount=this._geometryCount,A.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(A.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(A.boundingSphere={center:A.boundingSphere.center.toArray(),radius:A.boundingSphere.radius}),this.boundingBox!==null&&(A.boundingBox={min:A.boundingBox.min.toArray(),max:A.boundingBox.max.toArray()}));function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?A.background=this.background.toJSON():this.background.isTexture&&(A.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(A.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){A.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const d=a[c];r(e.shapes,d)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(A.bindMode=this.bindMode,A.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),A.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(e.materials,this.material[a]));A.material=o}else A.material=r(e.materials,this.material);if(this.children.length>0){A.children=[];for(let o=0;o<this.children.length;o++)A.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){A.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];A.animations.push(r(e.animations,a))}}if(t){const o=s(e.geometries),a=s(e.materials),c=s(e.textures),l=s(e.images),d=s(e.shapes),u=s(e.skeletons),h=s(e.animations),E=s(e.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),E.length>0&&(n.nodes=E)}return n.object=A,n;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const A=e.children[n];this.add(A.clone())}return this}}mt.DEFAULT_UP=new U(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new U,An=new U,qA=new U,rn=new U,si=new U,ai=new U,$o=new U,jA=new U,ZA=new U,JA=new U,$A=new At,er=new At,tr=new At;class Vt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,A){A.subVectors(n,t),Gt.subVectors(e,t),A.cross(Gt);const r=A.lengthSq();return r>0?A.multiplyScalar(1/Math.sqrt(r)):A.set(0,0,0)}static getBarycoord(e,t,n,A,r){Gt.subVectors(A,t),An.subVectors(n,t),qA.subVectors(e,t);const s=Gt.dot(Gt),o=Gt.dot(An),a=Gt.dot(qA),c=An.dot(An),l=An.dot(qA),d=s*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,h=(c*a-o*l)*u,E=(s*l-o*a)*u;return r.set(1-h-E,E,h)}static containsPoint(e,t,n,A){return this.getBarycoord(e,t,n,A,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(e,t,n,A,r,s,o,a){return this.getBarycoord(e,t,n,A,rn)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,rn.x),a.addScaledVector(s,rn.y),a.addScaledVector(o,rn.z),a)}static getInterpolatedAttribute(e,t,n,A,r,s){return $A.setScalar(0),er.setScalar(0),tr.setScalar(0),$A.fromBufferAttribute(e,t),er.fromBufferAttribute(e,n),tr.fromBufferAttribute(e,A),s.setScalar(0),s.addScaledVector($A,r.x),s.addScaledVector(er,r.y),s.addScaledVector(tr,r.z),s}static isFrontFacing(e,t,n,A){return Gt.subVectors(n,t),An.subVectors(e,t),Gt.cross(An).dot(A)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,A){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[A]),this}setFromAttributeAndIndices(e,t,n,A){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,A),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),An.subVectors(this.a,this.b),Gt.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,A,r){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,A,r)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,A=this.b,r=this.c;let s,o;si.subVectors(A,n),ai.subVectors(r,n),jA.subVectors(e,n);const a=si.dot(jA),c=ai.dot(jA);if(a<=0&&c<=0)return t.copy(n);ZA.subVectors(e,A);const l=si.dot(ZA),d=ai.dot(ZA);if(l>=0&&d<=l)return t.copy(A);const u=a*d-l*c;if(u<=0&&a>=0&&l<=0)return s=a/(a-l),t.copy(n).addScaledVector(si,s);JA.subVectors(e,r);const h=si.dot(JA),E=ai.dot(JA);if(E>=0&&h<=E)return t.copy(r);const C=h*c-a*E;if(C<=0&&c>=0&&E<=0)return o=c/(c-E),t.copy(n).addScaledVector(ai,o);const f=l*E-h*d;if(f<=0&&d-l>=0&&h-E>=0)return $o.subVectors(r,A),o=(d-l)/(d-l+(h-E)),t.copy(A).addScaledVector($o,o);const g=1/(f+C+u);return s=C*g,o=u*g,t.copy(n).addScaledVector(si,s).addScaledVector(ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ga={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},aA={h:0,s:0,l:0};function nr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const A=e;A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,A=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,A),this}setHSL(e,t,n,A=Ve.workingColorSpace){if(e=Ol(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=nr(s,r,e+1/3),this.g=nr(s,r,e),this.b=nr(s,r,e-1/3)}return Ve.toWorkingColorSpace(this,A),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let A;if(A=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=A[1],o=A[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(A=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=A[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=ga[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ln(e.r),this.g=ln(e.g),this.b=ln(e.b),this}copyLinearToSRGB(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Ve.fromWorkingColorSpace(pt.copy(this),e),Math.round(He(pt.r*255,0,255))*65536+Math.round(He(pt.g*255,0,255))*256+Math.round(He(pt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(pt.copy(this),t);const n=pt.r,A=pt.g,r=pt.b,s=Math.max(n,A,r),o=Math.min(n,A,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const d=s-o;switch(c=l<=.5?d/(s+o):d/(2-s-o),s){case n:a=(A-r)/d+(A<r?6:0);break;case A:a=(r-n)/d+2;break;case r:a=(n-A)/d+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Dt){Ve.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,A=pt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${A.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(A*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(aA);const n=UA(Qn.h,aA.h,t),A=UA(Qn.s,aA.s,t),r=UA(Qn.l,aA.l,t);return this.setHSL(n,A,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,A=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*A,this.g=r[1]*t+r[4]*n+r[7]*A,this.b=r[2]*t+r[5]*n+r[8]*A,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new ke;ke.NAMES=ga;let ql=0;class ji extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=hi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fr,this.blendDst=hr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const A=this[t];if(A===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}A&&A.isColor?A.set(n):A&&A.isVector3&&n&&n.isVector3?A.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fr&&(n.blendSrc=this.blendSrc),this.blendDst!==hr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function A(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(t){const r=A(e.textures),s=A(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const A=t.length;n=new Array(A);for(let r=0;r!==A;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kn extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Xs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new U,cA=new Xe;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fo,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let A=0,r=this.itemSize;A<r;A++)this.array[e+A]=t.array[n+A];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cA.fromBufferAttribute(this,t),cA.applyMatrix3(e),this.setXY(t,cA.x,cA.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,A){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),A=_t(A,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=A,this}setXYZW(e,t,n,A,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),A=_t(A,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=A,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}}class da extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ua extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zn extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jl=0;const Nt=new rt,ir=new mt,ci=new U,yt=new qi,Pi=new qi,gt=new U;class qn extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sa(e)?ua:da)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const A=this.attributes.tangent;return A!==void 0&&(A.transformDirection(e),A.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return ir.lookAt(e),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let A=0,r=e.length;A<r;A++){const s=e[A];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new zn(n,3))}else{const n=Math.min(e.length,t.count);for(let A=0;A<n;A++){const r=e[A];t.setXYZ(A,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,A=t.length;n<A;n++){const r=t[n];yt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,yt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,yt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(yt.min),this.boundingBox.expandByPoint(yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(yt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(yt.min,Pi.min),yt.expandByPoint(gt),gt.addVectors(yt.max,Pi.max),yt.expandByPoint(gt)):(yt.expandByPoint(Pi.min),yt.expandByPoint(Pi.max))}yt.getCenter(n);let A=0;for(let r=0,s=e.count;r<s;r++)gt.fromBufferAttribute(e,r),A=Math.max(A,n.distanceToSquared(gt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)gt.fromBufferAttribute(o,c),a&&(ci.fromBufferAttribute(e,c),gt.add(ci)),A=Math.max(A,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(A),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,A=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],a=[];for(let M=0;M<n.count;M++)o[M]=new U,a[M]=new U;const c=new U,l=new U,d=new U,u=new Xe,h=new Xe,E=new Xe,C=new U,f=new U;function g(M,Q,m){c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,Q),d.fromBufferAttribute(n,m),u.fromBufferAttribute(r,M),h.fromBufferAttribute(r,Q),E.fromBufferAttribute(r,m),l.sub(c),d.sub(c),h.sub(u),E.sub(u);const O=1/(h.x*E.y-E.x*h.y);isFinite(O)&&(C.copy(l).multiplyScalar(E.y).addScaledVector(d,-h.y).multiplyScalar(O),f.copy(d).multiplyScalar(h.x).addScaledVector(l,-E.x).multiplyScalar(O),o[M].add(C),o[Q].add(C),o[m].add(C),a[M].add(f),a[Q].add(f),a[m].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let M=0,Q=y.length;M<Q;++M){const m=y[M],O=m.start,V=m.count;for(let F=O,q=O+V;F<q;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new U,D=new U,H=new U,b=new U;function v(M){H.fromBufferAttribute(A,M),b.copy(H);const Q=o[M];x.copy(Q),x.sub(H.multiplyScalar(H.dot(Q))).normalize(),D.crossVectors(b,Q);const O=D.dot(a[M])<0?-1:1;s.setXYZW(M,x.x,x.y,x.z,O)}for(let M=0,Q=y.length;M<Q;++M){const m=y[M],O=m.start,V=m.count;for(let F=O,q=O+V;F<q;F+=3)v(e.getX(F+0)),v(e.getX(F+1)),v(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);const A=new U,r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,d=new U;if(e)for(let u=0,h=e.count;u<h;u+=3){const E=e.getX(u+0),C=e.getX(u+1),f=e.getX(u+2);A.fromBufferAttribute(t,E),r.fromBufferAttribute(t,C),s.fromBufferAttribute(t,f),l.subVectors(s,r),d.subVectors(A,r),l.cross(d),o.fromBufferAttribute(n,E),a.fromBufferAttribute(n,C),c.fromBufferAttribute(n,f),o.add(l),a.add(l),c.add(l),n.setXYZ(E,o.x,o.y,o.z),n.setXYZ(C,a.x,a.y,a.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,h=t.count;u<h;u+=3)A.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),l.subVectors(s,r),d.subVectors(A,r),l.cross(d),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,a){const c=o.array,l=o.itemSize,d=o.normalized,u=new c.constructor(a.length*l);let h=0,E=0;for(let C=0,f=a.length;C<f;C++){o.isInterleavedBufferAttribute?h=a[C]*o.data.stride+o.offset:h=a[C]*l;for(let g=0;g<l;g++)u[E++]=c[h++]}return new qt(u,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,n=this.index.array,A=this.attributes;for(const o in A){const a=A[o],c=e(a,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,d=c.length;l<d;l++){const u=c[l],h=e(u,n);a.push(h)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a];e.data.attributes[a]=c.toJSON(e.data)}const A={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let d=0,u=c.length;d<u;d++){const h=c[d];l.push(h.toJSON(e.data))}l.length>0&&(A[a]=l,r=!0)}r&&(e.data.morphAttributes=A,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const A=e.attributes;for(const c in A){const l=A[c];this.setAttribute(c,l.clone(t))}const r=e.morphAttributes;for(const c in r){const l=[],d=r[c];for(let u=0,h=d.length;u<h;u++)l.push(d[u].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,l=s.length;c<l;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const es=new rt,wn=new zl,lA=new uo,ts=new U,gA=new U,dA=new U,uA=new U,Ar=new U,fA=new U,ns=new U,hA=new U;class Ot extends mt{constructor(e=new qn,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const A=t[n[0]];if(A!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=A.length;r<s;r++){const o=A[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,A=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(A,e);const o=this.morphTargetInfluences;if(r&&o){fA.set(0,0,0);for(let a=0,c=r.length;a<c;a++){const l=o[a],d=r[a];l!==0&&(Ar.fromBufferAttribute(d,e),s?fA.addScaledVector(Ar,l):fA.addScaledVector(Ar.sub(t),l))}t.add(fA)}return t}raycast(e,t){const n=this.geometry,A=this.material,r=this.matrixWorld;A!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lA.copy(n.boundingSphere),lA.applyMatrix4(r),wn.copy(e.ray).recast(e.near),!(lA.containsPoint(wn.origin)===!1&&(wn.intersectSphere(lA,ts)===null||wn.origin.distanceToSquared(ts)>(e.far-e.near)**2))&&(es.copy(r).invert(),wn.copy(e.ray).applyMatrix4(es),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wn)))}_computeIntersections(e,t,n){let A;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,u=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let E=0,C=u.length;E<C;E++){const f=u[E],g=s[f.materialIndex],y=Math.max(f.start,h.start),x=Math.min(o.count,Math.min(f.start+f.count,h.start+h.count));for(let D=y,H=x;D<H;D+=3){const b=o.getX(D),v=o.getX(D+1),M=o.getX(D+2);A=pA(this,g,e,n,c,l,d,b,v,M),A&&(A.faceIndex=Math.floor(D/3),A.face.materialIndex=f.materialIndex,t.push(A))}}else{const E=Math.max(0,h.start),C=Math.min(o.count,h.start+h.count);for(let f=E,g=C;f<g;f+=3){const y=o.getX(f),x=o.getX(f+1),D=o.getX(f+2);A=pA(this,s,e,n,c,l,d,y,x,D),A&&(A.faceIndex=Math.floor(f/3),t.push(A))}}else if(a!==void 0)if(Array.isArray(s))for(let E=0,C=u.length;E<C;E++){const f=u[E],g=s[f.materialIndex],y=Math.max(f.start,h.start),x=Math.min(a.count,Math.min(f.start+f.count,h.start+h.count));for(let D=y,H=x;D<H;D+=3){const b=D,v=D+1,M=D+2;A=pA(this,g,e,n,c,l,d,b,v,M),A&&(A.faceIndex=Math.floor(D/3),A.face.materialIndex=f.materialIndex,t.push(A))}}else{const E=Math.max(0,h.start),C=Math.min(a.count,h.start+h.count);for(let f=E,g=C;f<g;f+=3){const y=f,x=f+1,D=f+2;A=pA(this,s,e,n,c,l,d,y,x,D),A&&(A.faceIndex=Math.floor(f/3),t.push(A))}}}}function Zl(i,e,t,n,A,r,s,o){let a;if(e.side===xt?a=n.intersectTriangle(s,r,A,!0,o):a=n.intersectTriangle(A,r,s,e.side===Sn,o),a===null)return null;hA.copy(o),hA.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(hA);return c<t.near||c>t.far?null:{distance:c,point:hA.clone(),object:i}}function pA(i,e,t,n,A,r,s,o,a,c){i.getVertexPosition(o,gA),i.getVertexPosition(a,dA),i.getVertexPosition(c,uA);const l=Zl(i,e,t,n,gA,dA,uA,ns);if(l){const d=new U;Vt.getBarycoord(ns,gA,dA,uA,d),A&&(l.uv=Vt.getInterpolatedAttribute(A,o,a,c,d,new Xe)),r&&(l.uv1=Vt.getInterpolatedAttribute(r,o,a,c,d,new Xe)),s&&(l.normal=Vt.getInterpolatedAttribute(s,o,a,c,d,new U),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a:o,b:a,c,normal:new U,materialIndex:0};Vt.getNormal(gA,dA,uA,u.normal),l.face=u,l.barycoord=d}return l}class Mi extends qn{constructor(e=1,t=1,n=1,A=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:A,heightSegments:r,depthSegments:s};const o=this;A=Math.floor(A),r=Math.floor(r),s=Math.floor(s);const a=[],c=[],l=[],d=[];let u=0,h=0;E("z","y","x",-1,-1,n,t,e,s,r,0),E("z","y","x",1,-1,n,t,-e,s,r,1),E("x","z","y",1,1,e,n,t,A,s,2),E("x","z","y",1,-1,e,n,-t,A,s,3),E("x","y","z",1,-1,e,t,n,A,r,4),E("x","y","z",-1,-1,e,t,-n,A,r,5),this.setIndex(a),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(l,3)),this.setAttribute("uv",new zn(d,2));function E(C,f,g,y,x,D,H,b,v,M,Q){const m=D/v,O=H/M,V=D/2,F=H/2,q=b/2,j=v+1,W=M+1;let J=0,z=0;const re=new U;for(let ge=0;ge<W;ge++){const me=ge*O-F;for(let we=0;we<j;we++){const je=we*m-V;re[C]=je*y,re[f]=me*x,re[g]=q,c.push(re.x,re.y,re.z),re[C]=0,re[f]=0,re[g]=b>0?1:-1,l.push(re.x,re.y,re.z),d.push(we/v),d.push(1-ge/M),J+=1}}for(let ge=0;ge<M;ge++)for(let me=0;me<v;me++){const we=u+me+j*ge,je=u+me+j*(ge+1),Y=u+(me+1)+j*(ge+1),te=u+(me+1)+j*ge;a.push(we,je,te),a.push(je,Y,te),z+=6}o.addGroup(h,z,Q),h+=z,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const A=i[t][n];A&&(A.isColor||A.isMatrix3||A.isMatrix4||A.isVector2||A.isVector3||A.isVector4||A.isTexture||A.isQuaternion)?A.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=A.clone():Array.isArray(A)?e[t][n]=A.slice():e[t][n]=A}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=Di(i[t]);for(const A in n)e[A]=n[A]}return e}function Jl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fa(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const $l={clone:Di,merge:Qt};var eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Jl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const A in this.uniforms){const s=this.uniforms[A].value;s&&s.isTexture?t.uniforms[A]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[A]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[A]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[A]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[A]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[A]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[A]={type:"m4",value:s.toArray()}:t.uniforms[A]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const A in this.extensions)this.extensions[A]===!0&&(n[A]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ha extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new U,is=new Xe,As=new Xe;class Ht extends ha{constructor(e=50,t=1,n=.1,A=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=A,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(LA*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(LA*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,is,As),t.subVectors(As,is)}setViewOffset(e,t,n,A,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=A,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(LA*.5*this.fov)/this.zoom,n=2*t,A=this.aspect*n,r=-.5*A;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*A/a,t-=s.offsetY*n/c,A*=s.width/a,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+A,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const li=-90,gi=1;class ng extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const A=new Ht(li,gi,e,t);A.layers=this.layers,this.add(A);const r=new Ht(li,gi,e,t);r.layers=this.layers,this.add(r);const s=new Ht(li,gi,e,t);s.layers=this.layers,this.add(s);const o=new Ht(li,gi,e,t);o.layers=this.layers,this.add(o);const a=new Ht(li,gi,e,t);a.layers=this.layers,this.add(a);const c=new Ht(li,gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,A,r,s,o,a]=t;for(const c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),A.up.set(0,1,0),A.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===yA)n.up.set(0,-1,0),n.lookAt(-1,0,0),A.up.set(0,-1,0),A.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:A}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,c,l]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,A),e.render(t,r),e.setRenderTarget(n,1,A),e.render(t,s),e.setRenderTarget(n,2,A),e.render(t,o),e.setRenderTarget(n,3,A),e.render(t,a),e.setRenderTarget(n,4,A),e.render(t,c),n.texture.generateMipmaps=C,e.setRenderTarget(n,5,A),e.render(t,l),e.setRenderTarget(d,u,h),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class pa extends Bt{constructor(e,t,n,A,r,s,o,a,c,l){e=e!==void 0?e:[],t=t!==void 0?t:mi,super(e,t,n,A,r,s,o,a,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ig extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},A=[n,n,n,n,n,n];this.texture=new pa(A,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},A=new Mi(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:Dn});r.uniforms.tEquirect.value=t;const s=new Ot(A,r),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=kt),new ng(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,A){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,A);e.setRenderTarget(r)}}class Ag extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rr=new U,rg=new U,og=new Oe;class Pn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,A){return this.normal.set(e,t,n),this.constant=A,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const A=rr.subVectors(n,t).cross(rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(A,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rr),A=this.normal.dot(n);if(A===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/A;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||og.getNormalMatrix(e),A=this.coplanarPoint(rr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-A.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new uo,EA=new U;class fo{constructor(e=new Pn,t=new Pn,n=new Pn,A=new Pn,r=new Pn,s=new Pn){this.planes=[e,t,n,A,r,s]}set(e,t,n,A,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(A),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn){const n=this.planes,A=e.elements,r=A[0],s=A[1],o=A[2],a=A[3],c=A[4],l=A[5],d=A[6],u=A[7],h=A[8],E=A[9],C=A[10],f=A[11],g=A[12],y=A[13],x=A[14],D=A[15];if(n[0].setComponents(a-r,u-c,f-h,D-g).normalize(),n[1].setComponents(a+r,u+c,f+h,D+g).normalize(),n[2].setComponents(a+s,u+l,f+E,D+y).normalize(),n[3].setComponents(a-s,u-l,f-E,D-y).normalize(),n[4].setComponents(a-o,u-d,f-C,D-x).normalize(),t===cn)n[5].setComponents(a+o,u+d,f+C,D+x).normalize();else if(t===yA)n[5].setComponents(o,d,C,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,A=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<A)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const A=t[n];if(EA.x=A.normal.x>0?e.max.x:e.min.x,EA.y=A.normal.y>0?e.max.y:e.min.y,EA.z=A.normal.z>0?e.max.z:e.min.z,A.distanceToPoint(EA)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class BA extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class sg extends Bt{constructor(e,t,n,A,r,s,o,a,c){super(e,t,n,A,r,s,o,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ea extends Bt{constructor(e,t,n,A,r,s,o,a,c,l=pi){if(l!==pi&&l!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===pi&&(n=Yn),n===void 0&&l===Ii&&(n=Qi),super(null,A,r,s,o,a,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=a!==void 0?a:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yi extends qn{constructor(e=1,t=1,n=1,A=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:A};const r=e/2,s=t/2,o=Math.floor(n),a=Math.floor(A),c=o+1,l=a+1,d=e/o,u=t/a,h=[],E=[],C=[],f=[];for(let g=0;g<l;g++){const y=g*u-s;for(let x=0;x<c;x++){const D=x*d-r;E.push(D,-y,0),C.push(0,0,1),f.push(x/o),f.push(1-g/a)}}for(let g=0;g<a;g++)for(let y=0;y<o;y++){const x=y+c*g,D=y+c*(g+1),H=y+1+c*(g+1),b=y+1+c*g;h.push(x,D,b),h.push(D,H,b)}this.setIndex(h),this.setAttribute("position",new zn(E,3)),this.setAttribute("normal",new zn(C,3)),this.setAttribute("uv",new zn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.widthSegments,e.heightSegments)}}class jn extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ag extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cg extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lg{constructor(e,t,n){const A=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){o++,r===!1&&A.onStart!==void 0&&A.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,A.onProgress!==void 0&&A.onProgress(l,s,o),s===o&&(r=!1,A.onLoad!==void 0&&A.onLoad())},this.itemError=function(l){A.onError!==void 0&&A.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,d){return c.push(l,d),this},this.removeHandler=function(l){const d=c.indexOf(l);return d!==-1&&c.splice(d,2),this},this.getHandler=function(l){for(let d=0,u=c.length;d<u;d+=2){const h=c[d],E=c[d+1];if(h.global&&(h.lastIndex=0),h.test(l))return E}return null}}}const gg=new lg;class ho{constructor(e){this.manager=e!==void 0?e:gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(A,r){n.load(e,A,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ho.DEFAULT_MATERIAL_NAME="__DEFAULT";class dg extends ho{constructor(e){super(e)}load(e,t,n,A){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=rs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=Fi("img");function a(){l(),rs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){l(),A&&A(d),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ug extends ho{constructor(e){super(e)}load(e,t,n,A){const r=new Bt,s=new dg(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,A),r}}class Ba extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const or=new rt,os=new U,ss=new U;class fg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;os.setFromMatrixPosition(e.matrixWorld),t.position.copy(os),ss.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ss),t.updateMatrixWorld(),or.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(or),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(or)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ma extends ha{constructor(e=-1,t=1,n=1,A=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=A,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,A,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=A,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,A=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=A+t,a=A-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hg extends fg{constructor(){super(new ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pg extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new hg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Eg extends Ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bg extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function as(i,e,t,n){const A=mg(n);switch(t){case Js:return i*e;case ea:return i*e;case ta:return i*e*2;case na:return i*e/A.components*A.byteLength;case co:return i*e/A.components*A.byteLength;case ia:return i*e*2/A.components*A.byteLength;case lo:return i*e*2/A.components*A.byteLength;case $s:return i*e*3/A.components*A.byteLength;case Yt:return i*e*4/A.components*A.byteLength;case go:return i*e*4/A.components*A.byteLength;case IA:case _A:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case DA:case vA:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mr:case Or:return Math.max(i,16)*Math.max(e,8)/4;case Sr:case yr:return Math.max(i,8)*Math.max(e,8)/2;case Tr:case br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Lr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ur:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xA:case Kr:case qr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Aa:case jr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zr:case Jr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mg(i){switch(i){case hn:case qs:return{byteLength:1,components:1};case Ui:case js:case Wi:return{byteLength:2,components:1};case so:case ao:return{byteLength:2,components:4};case Yn:case oo:case an:return{byteLength:4,components:1};case Zs:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ca(){let i=null,e=!1,t=null,n=null;function A(r,s){t(r,s),n=i.requestAnimationFrame(A)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(A),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cg(i){const e=new WeakMap;function t(o,a){const c=o.array,l=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(a,u),i.bufferData(a,c,l),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,a,c){const l=a.array,d=a.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,l);else{d.sort((h,E)=>h.start-E.start);let u=0;for(let h=1;h<d.length;h++){const E=d[u],C=d[h];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++u,d[u]=C)}d.length=u+1;for(let h=0,E=d.length;h<E;h++){const C=d[h];i.bufferSubData(c,C.start*l.BYTES_PER_ELEMENT,l,C.start,C.count)}a.clearUpdateRanges()}a.onUploadCallback()}function A(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const a=e.get(o);a&&(i.deleteBuffer(a.buffer),e.delete(o))}function s(o,a){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,a));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,a),c.version=o.version}}return{get:A,remove:r,update:s}}var Qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ig=`#ifdef USE_ALPHAHASH
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
#endif`,_g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sg=`#ifdef USE_AOMAP
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
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yg=`#ifdef USE_BATCHING
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
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ng=`#ifdef USE_IRIDESCENCE
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
#endif`,Hg=`#ifdef USE_BUMPMAP
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kg=`#define PI 3.141592653589793
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
} // validated`,Yg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wg=`vec3 transformedNormal = objectNormal;
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
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$g=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ad=`#ifdef USE_GRADIENTMAP
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
}`,cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dd=`uniform bool receiveShadow;
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
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
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
#endif`,md=`struct PhysicalMaterial {
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
}`,Cd=`
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_d=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Od=`#if defined( USE_POINTS_UV )
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
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
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
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vd=`#ifdef USE_NORMALMAP
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
#endif`,kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Au=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ru=`float getShadowMask() {
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
}`,ou=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,su=`#ifdef USE_SKINNING
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
#endif`,au=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cu=`#ifdef USE_SKINNING
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
#endif`,lu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,du=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fu=`#ifdef USE_TRANSMISSION
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
#endif`,hu=`#ifdef USE_TRANSMISSION
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
#endif`,pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qu=`uniform sampler2D t2D;
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
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_u=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`#include <common>
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
}`,Su=`#if DEPTH_PACKING == 3200
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
}`,Mu=`#define DISTANCE
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
}`,yu=`#define DISTANCE
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
}`,Ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bu=`uniform float scale;
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
}`,wu=`uniform vec3 diffuse;
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
}`,Nu=`#include <common>
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
}`,Hu=`uniform vec3 diffuse;
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
}`,Ru=`#define LAMBERT
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
}`,Pu=`#define LAMBERT
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
}`,Lu=`#define MATCAP
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
}`,Uu=`#define MATCAP
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
}`,Fu=`#define NORMAL
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
}`,Gu=`#define NORMAL
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
}`,zu=`#define PHONG
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
}`,Vu=`#define PHONG
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
}`,ku=`#define STANDARD
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
}`,Yu=`#define STANDARD
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
}`,Wu=`#define TOON
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
}`,Xu=`#define TOON
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
}`,Ku=`uniform float size;
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
}`,qu=`uniform vec3 diffuse;
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
}`,ju=`#include <common>
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
}`,Zu=`uniform vec3 color;
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
}`,Ju=`uniform float rotation;
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
}`,$u=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:Qg,alphahash_pars_fragment:Ig,alphamap_fragment:_g,alphamap_pars_fragment:Dg,alphatest_fragment:vg,alphatest_pars_fragment:xg,aomap_fragment:Sg,aomap_pars_fragment:Mg,batching_pars_vertex:yg,batching_vertex:Og,begin_vertex:Tg,beginnormal_vertex:bg,bsdfs:wg,iridescence_fragment:Ng,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Pg,clipping_planes_pars_vertex:Lg,clipping_planes_vertex:Ug,color_fragment:Fg,color_pars_fragment:Gg,color_pars_vertex:zg,color_vertex:Vg,common:kg,cube_uv_reflection_fragment:Yg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:Kg,emissivemap_fragment:qg,emissivemap_pars_fragment:jg,colorspace_fragment:Zg,colorspace_pars_fragment:Jg,envmap_fragment:$g,envmap_common_pars_fragment:ed,envmap_pars_fragment:td,envmap_pars_vertex:nd,envmap_physical_pars_fragment:ud,envmap_vertex:id,fog_vertex:Ad,fog_pars_vertex:rd,fog_fragment:od,fog_pars_fragment:sd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:cd,lights_lambert_fragment:ld,lights_lambert_pars_fragment:gd,lights_pars_begin:dd,lights_toon_fragment:fd,lights_toon_pars_fragment:hd,lights_phong_fragment:pd,lights_phong_pars_fragment:Ed,lights_physical_fragment:Bd,lights_physical_pars_fragment:md,lights_fragment_begin:Cd,lights_fragment_maps:Qd,lights_fragment_end:Id,logdepthbuf_fragment:_d,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:xd,map_fragment:Sd,map_pars_fragment:Md,map_particle_fragment:yd,map_particle_pars_fragment:Od,metalnessmap_fragment:Td,metalnessmap_pars_fragment:bd,morphinstance_vertex:wd,morphcolor_vertex:Nd,morphnormal_vertex:Hd,morphtarget_pars_vertex:Rd,morphtarget_vertex:Pd,normal_fragment_begin:Ld,normal_fragment_maps:Ud,normal_pars_fragment:Fd,normal_pars_vertex:Gd,normal_vertex:zd,normalmap_pars_fragment:Vd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:Yd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:Xd,opaque_fragment:Kd,packing:qd,premultiplied_alpha_fragment:jd,project_vertex:Zd,dithering_fragment:Jd,dithering_pars_fragment:$d,roughnessmap_fragment:eu,roughnessmap_pars_fragment:tu,shadowmap_pars_fragment:nu,shadowmap_pars_vertex:iu,shadowmap_vertex:Au,shadowmask_pars_fragment:ru,skinbase_vertex:ou,skinning_pars_vertex:su,skinning_vertex:au,skinnormal_vertex:cu,specularmap_fragment:lu,specularmap_pars_fragment:gu,tonemapping_fragment:du,tonemapping_pars_fragment:uu,transmission_fragment:fu,transmission_pars_fragment:hu,uv_pars_fragment:pu,uv_pars_vertex:Eu,uv_vertex:Bu,worldpos_vertex:mu,background_vert:Cu,background_frag:Qu,backgroundCube_vert:Iu,backgroundCube_frag:_u,cube_vert:Du,cube_frag:vu,depth_vert:xu,depth_frag:Su,distanceRGBA_vert:Mu,distanceRGBA_frag:yu,equirect_vert:Ou,equirect_frag:Tu,linedashed_vert:bu,linedashed_frag:wu,meshbasic_vert:Nu,meshbasic_frag:Hu,meshlambert_vert:Ru,meshlambert_frag:Pu,meshmatcap_vert:Lu,meshmatcap_frag:Uu,meshnormal_vert:Fu,meshnormal_frag:Gu,meshphong_vert:zu,meshphong_frag:Vu,meshphysical_vert:ku,meshphysical_frag:Yu,meshtoon_vert:Wu,meshtoon_frag:Xu,points_vert:Ku,points_frag:qu,shadow_vert:ju,shadow_frag:Zu,sprite_vert:Ju,sprite_frag:$u},ne={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Xt={basic:{uniforms:Qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ke(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Qt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Qt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ke(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Qt([ne.points,ne.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Qt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Qt([ne.common,ne.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Qt([ne.sprite,ne.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:Qt([ne.common,ne.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:Qt([ne.lights,ne.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Xt.physical={uniforms:Qt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const mA={r:0,b:0,g:0},Hn=new Zt,ef=new rt;function tf(i,e,t,n,A,r,s){const o=new ke(0);let a=r===!0?0:1,c,l,d=null,u=0,h=null;function E(x){let D=x.isScene===!0?x.background:null;return D&&D.isTexture&&(D=(x.backgroundBlurriness>0?t:e).get(D)),D}function C(x){let D=!1;const H=E(x);H===null?g(o,a):H&&H.isColor&&(g(H,1),D=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(x,D){const H=E(D);H&&(H.isCubeTexture||H.mapping===OA)?(l===void 0&&(l=new Ot(new Mi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Di(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,v,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),A.update(l)),Hn.copy(D.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),l.material.uniforms.envMap.value=H,l.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ef.makeRotationFromEuler(Hn)),l.material.toneMapped=Ve.getTransfer(H.colorSpace)!==qe,(d!==H||u!==H.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=H,u=H.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):H&&H.isTexture&&(c===void 0&&(c=new Ot(new yi(2,2),new Mn({name:"BackgroundMaterial",uniforms:Di(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),A.update(c)),c.material.uniforms.t2D.value=H,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(H.colorSpace)!==qe,H.matrixAutoUpdate===!0&&H.updateMatrix(),c.material.uniforms.uvTransform.value.copy(H.matrix),(d!==H||u!==H.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=H,u=H.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,D){x.getRGB(mA,fa(i)),n.buffers.color.setClear(mA.r,mA.g,mA.b,D,s)}function y(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(x,D=1){o.set(x),a=D,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:C,addToRenderList:f,dispose:y}}function nf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},A=u(null);let r=A,s=!1;function o(m,O,V,F,q){let j=!1;const W=d(F,V,O);r!==W&&(r=W,c(r.object)),j=h(m,F,V,q),j&&E(m,F,V,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,D(m,O,V,F),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function a(){return i.createVertexArray()}function c(m){return i.bindVertexArray(m)}function l(m){return i.deleteVertexArray(m)}function d(m,O,V){const F=V.wireframe===!0;let q=n[m.id];q===void 0&&(q={},n[m.id]=q);let j=q[O.id];j===void 0&&(j={},q[O.id]=j);let W=j[F];return W===void 0&&(W=u(a()),j[F]=W),W}function u(m){const O=[],V=[],F=[];for(let q=0;q<t;q++)O[q]=0,V[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:F,object:m,attributes:{},index:null}}function h(m,O,V,F){const q=r.attributes,j=O.attributes;let W=0;const J=V.getAttributes();for(const z in J)if(J[z].location>=0){const ge=q[z];let me=j[z];if(me===void 0&&(z==="instanceMatrix"&&m.instanceMatrix&&(me=m.instanceMatrix),z==="instanceColor"&&m.instanceColor&&(me=m.instanceColor)),ge===void 0||ge.attribute!==me||me&&ge.data!==me.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function E(m,O,V,F){const q={},j=O.attributes;let W=0;const J=V.getAttributes();for(const z in J)if(J[z].location>=0){let ge=j[z];ge===void 0&&(z==="instanceMatrix"&&m.instanceMatrix&&(ge=m.instanceMatrix),z==="instanceColor"&&m.instanceColor&&(ge=m.instanceColor));const me={};me.attribute=ge,ge&&ge.data&&(me.data=ge.data),q[z]=me,W++}r.attributes=q,r.attributesNum=W,r.index=F}function C(){const m=r.newAttributes;for(let O=0,V=m.length;O<V;O++)m[O]=0}function f(m){g(m,0)}function g(m,O){const V=r.newAttributes,F=r.enabledAttributes,q=r.attributeDivisors;V[m]=1,F[m]===0&&(i.enableVertexAttribArray(m),F[m]=1),q[m]!==O&&(i.vertexAttribDivisor(m,O),q[m]=O)}function y(){const m=r.newAttributes,O=r.enabledAttributes;for(let V=0,F=O.length;V<F;V++)O[V]!==m[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function x(m,O,V,F,q,j,W){W===!0?i.vertexAttribIPointer(m,O,V,q,j):i.vertexAttribPointer(m,O,V,F,q,j)}function D(m,O,V,F){C();const q=F.attributes,j=V.getAttributes(),W=O.defaultAttributeValues;for(const J in j){const z=j[J];if(z.location>=0){let re=q[J];if(re===void 0&&(J==="instanceMatrix"&&m.instanceMatrix&&(re=m.instanceMatrix),J==="instanceColor"&&m.instanceColor&&(re=m.instanceColor)),re!==void 0){const ge=re.normalized,me=re.itemSize,we=e.get(re);if(we===void 0)continue;const je=we.buffer,Y=we.type,te=we.bytesPerElement,pe=Y===i.INT||Y===i.UNSIGNED_INT||re.gpuType===oo;if(re.isInterleavedBufferAttribute){const oe=re.data,De=oe.stride,Se=re.offset;if(oe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<z.locationSize;Ne++)g(z.location+Ne,oe.meshPerAttribute);m.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<z.locationSize;Ne++)f(z.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Ne=0;Ne<z.locationSize;Ne++)x(z.location+Ne,me/z.locationSize,Y,ge,De*te,(Se+me/z.locationSize*Ne)*te,pe)}else{if(re.isInstancedBufferAttribute){for(let oe=0;oe<z.locationSize;oe++)g(z.location+oe,re.meshPerAttribute);m.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let oe=0;oe<z.locationSize;oe++)f(z.location+oe);i.bindBuffer(i.ARRAY_BUFFER,je);for(let oe=0;oe<z.locationSize;oe++)x(z.location+oe,me/z.locationSize,Y,ge,me*te,me/z.locationSize*oe*te,pe)}}else if(W!==void 0){const ge=W[J];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(z.location,ge);break;case 3:i.vertexAttrib3fv(z.location,ge);break;case 4:i.vertexAttrib4fv(z.location,ge);break;default:i.vertexAttrib1fv(z.location,ge)}}}}y()}function H(){M();for(const m in n){const O=n[m];for(const V in O){const F=O[V];for(const q in F)l(F[q].object),delete F[q];delete O[V]}delete n[m]}}function b(m){if(n[m.id]===void 0)return;const O=n[m.id];for(const V in O){const F=O[V];for(const q in F)l(F[q].object),delete F[q];delete O[V]}delete n[m.id]}function v(m){for(const O in n){const V=n[O];if(V[m.id]===void 0)continue;const F=V[m.id];for(const q in F)l(F[q].object),delete F[q];delete V[m.id]}}function M(){Q(),s=!0,r!==A&&(r=A,c(r.object))}function Q(){A.geometry=null,A.program=null,A.wireframe=!1}return{setup:o,reset:M,resetDefaultState:Q,dispose:H,releaseStatesOfGeometry:b,releaseStatesOfProgram:v,initAttributes:C,enableAttribute:f,disableUnusedAttributes:y}}function Af(i,e,t){let n;function A(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function s(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let E=0;E<d;E++)h+=l[E];t.update(h,n,1)}function a(c,l,d,u){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let E=0;E<c.length;E++)s(c[E],l[E],u[E]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,l,0,u,0,d);let E=0;for(let C=0;C<d;C++)E+=l[C]*u[C];t.update(E,n,1)}}this.setMode=A,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=a}function rf(i,e,t,n){let A;function r(){if(A!==void 0)return A;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");A=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else A=0;return A}function s(v){return!(v!==Yt&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const M=v===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==hn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==an&&!M)}function a(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const l=a(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:h,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:D,vertexTextures:H,maxSamples:b}}function of(i){const e=this;let t=null,n=0,A=!1,r=!1;const s=new Pn,o=new Oe,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const h=d.length!==0||u||n!==0||A;return A=u,n=d.length,h},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=l(d,u,0)},this.setState=function(d,u,h){const E=d.clippingPlanes,C=d.clipIntersection,f=d.clipShadows,g=i.get(d);if(!A||E===null||E.length===0||r&&!f)r?l(null):c();else{const y=r?0:n,x=y*4;let D=g.clippingState||null;a.value=D,D=l(E,u,x,h);for(let H=0;H!==x;++H)D[H]=t[H];g.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=y}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(d,u,h,E){const C=d!==null?d.length:0;let f=null;if(C!==0){if(f=a.value,E!==!0||f===null){const g=h+C*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<g)&&(f=new Float32Array(g));for(let x=0,D=h;x!==C;++x,D+=4)s.copy(d[x]).applyMatrix4(y,o),s.normal.toArray(f,D),f[D+3]=s.constant}a.value=f,a.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,f}}function sf(i){let e=new WeakMap;function t(s,o){return o===_r?s.mapping=mi:o===Dr&&(s.mapping=Ci),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===_r||o===Dr)if(e.has(s)){const a=e.get(s).texture;return t(a,s.mapping)}else{const a=s.image;if(a&&a.height>0){const c=new ig(a.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",A),t(c.texture,s.mapping)}else return null}}return s}function A(s){const o=s.target;o.removeEventListener("dispose",A);const a=e.get(o);a!==void 0&&(e.delete(o),a.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const fi=4,cs=[.125,.215,.35,.446,.526,.582],Fn=20,sr=new ma,ls=new ke;let ar=null,cr=0,lr=0,gr=!1;const Ln=(1+Math.sqrt(5))/2,di=1/Ln,gs=[new U(-Ln,di,0),new U(Ln,di,0),new U(-di,0,Ln),new U(di,0,Ln),new U(0,Ln,-di),new U(0,Ln,di),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class ds{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,A=100){ar=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,A,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ar,cr,lr),this._renderer.xr.enabled=gr,e.scissorTest=!1,CA(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ar=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Wi,format:Yt,colorSpace:_i,depthBuffer:!1},A=us(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=us(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=af(r)),this._blurMaterial=cf(r,e,t)}return A}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,sr)}_sceneToCubeUV(e,t,n,A){const o=new Ht(90,1,t,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,u=l.toneMapping;l.getClearColor(ls),l.toneMapping=vn,l.autoClear=!1;const h=new Kn({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),E=new Ot(new Mi,h);let C=!1;const f=e.background;f?f.isColor&&(h.color.copy(f),e.background=null,C=!0):(h.color.copy(ls),C=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(o.up.set(0,a[g],0),o.lookAt(c[g],0,0)):y===1?(o.up.set(0,0,a[g]),o.lookAt(0,c[g],0)):(o.up.set(0,a[g],0),o.lookAt(0,0,c[g]));const x=this._cubeSize;CA(A,y*x,g>2?x:0,x,x),l.setRenderTarget(A),C&&l.render(E,o),l.render(e,o)}E.geometry.dispose(),E.material.dispose(),l.toneMapping=u,l.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,A=e.mapping===mi||e.mapping===Ci;A?(this._cubemapMaterial===null&&(this._cubemapMaterial=hs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fs());const r=A?this._cubemapMaterial:this._equirectMaterial,s=new Ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const a=this._cubeSize;CA(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(s,sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const A=this._lodPlanes.length;for(let r=1;r<A;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gs[(A-r-1)%gs.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,A,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,A,"latitudinal",r),this._halfBlur(s,e,n,n,A,"longitudinal",r)}_halfBlur(e,t,n,A,r,s,o){const a=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new Ot(this._lodPlanes[A],c),u=c.uniforms,h=this._sizeLods[n]-1,E=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Fn-1),C=r/E,f=isFinite(r)?1+Math.floor(l*C):Fn;f>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Fn}`);const g=[];let y=0;for(let v=0;v<Fn;++v){const M=v/C,Q=Math.exp(-M*M/2);g.push(Q),v===0?y+=Q:v<f&&(y+=2*Q)}for(let v=0;v<g.length;v++)g[v]=g[v]/y;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=g,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=E,u.mipInt.value=x-n;const D=this._sizeLods[A],H=3*D*(A>x-fi?A-x+fi:0),b=4*(this._cubeSize-D);CA(t,H,b,3*D,2*D),a.setRenderTarget(t),a.render(d,sr)}}function af(i){const e=[],t=[],n=[];let A=i;const r=i-fi+1+cs.length;for(let s=0;s<r;s++){const o=Math.pow(2,A);t.push(o);let a=1/o;s>i-fi?a=cs[s-i+fi-1]:s===0&&(a=0),n.push(a);const c=1/(o-2),l=-c,d=1+c,u=[l,l,d,l,d,d,l,l,d,d,l,d],h=6,E=6,C=3,f=2,g=1,y=new Float32Array(C*E*h),x=new Float32Array(f*E*h),D=new Float32Array(g*E*h);for(let b=0;b<h;b++){const v=b%3*2/3-1,M=b>2?0:-1,Q=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];y.set(Q,C*E*b),x.set(u,f*E*b);const m=[b,b,b,b,b,b];D.set(m,g*E*b)}const H=new qn;H.setAttribute("position",new qt(y,C)),H.setAttribute("uv",new qt(x,f)),H.setAttribute("faceIndex",new qt(D,g)),e.push(H),A>fi&&A--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function us(i,e,t){const n=new Wn(i,e,t);return n.texture.mapping=OA,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function CA(i,e,t,n,A){i.viewport.set(e,t,n,A),i.scissor.set(e,t,n,A)}function cf(i,e,t){const n=new Float32Array(Fn),A=new U(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:A}},vertexShader:po(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function fs(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function hs(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function po(){return`

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
	`}function lf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const a=o.mapping,c=a===_r||a===Dr,l=a===mi||a===Ci;if(c||l){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new ds(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return c&&h&&h.height>0||l&&h&&A(h)?(t===null&&(t=new ds(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function A(o){let a=0;const c=6;for(let l=0;l<c;l++)o[l]!==void 0&&a++;return a===c}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function gf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let A;switch(n){case"WEBGL_depth_texture":A=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":A=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":A=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":A=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:A=i.getExtension(n)}return e[n]=A,A}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const A=t(n);return A===null&&ui("THREE.WebGLRenderer: "+n+" extension not supported."),A}}}function df(i,e,t,n){const A={},r=new WeakMap;function s(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const E in u.attributes)e.remove(u.attributes[E]);u.removeEventListener("dispose",s),delete A[u.id];const h=r.get(u);h&&(e.remove(h),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return A[u.id]===!0||(u.addEventListener("dispose",s),A[u.id]=!0,t.memory.geometries++),u}function a(d){const u=d.attributes;for(const h in u)e.update(u[h],i.ARRAY_BUFFER)}function c(d){const u=[],h=d.index,E=d.attributes.position;let C=0;if(h!==null){const y=h.array;C=h.version;for(let x=0,D=y.length;x<D;x+=3){const H=y[x+0],b=y[x+1],v=y[x+2];u.push(H,b,b,v,v,H)}}else if(E!==void 0){const y=E.array;C=E.version;for(let x=0,D=y.length/3-1;x<D;x+=3){const H=x+0,b=x+1,v=x+2;u.push(H,b,b,v,v,H)}}else return;const f=new(sa(u)?ua:da)(u,1);f.version=C;const g=r.get(d);g&&e.remove(g),r.set(d,f)}function l(d){const u=r.get(d);if(u){const h=d.index;h!==null&&u.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:a,getWireframeAttribute:l}}function uf(i,e,t){let n;function A(u){n=u}let r,s;function o(u){r=u.type,s=u.bytesPerElement}function a(u,h){i.drawElements(n,h,r,u*s),t.update(h,n,1)}function c(u,h,E){E!==0&&(i.drawElementsInstanced(n,h,r,u*s,E),t.update(h,n,E))}function l(u,h,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,E);let f=0;for(let g=0;g<E;g++)f+=h[g];t.update(f,n,1)}function d(u,h,E,C){if(E===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u.length;g++)c(u[g]/s,h[g],C[g]);else{f.multiDrawElementsInstancedWEBGL(n,h,0,r,u,0,C,0,E);let g=0;for(let y=0;y<E;y++)g+=h[y]*C[y];t.update(g,n,1)}}this.setMode=A,this.setIndex=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function ff(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function A(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:A,update:n}}function hf(i,e,t){const n=new WeakMap,A=new At;function r(s,o,a){const c=s.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let m=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",m)};var h=m;u!==void 0&&u.texture.dispose();const E=o.morphAttributes.position!==void 0,C=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let D=0;E===!0&&(D=1),C===!0&&(D=2),f===!0&&(D=3);let H=o.attributes.position.count*D,b=1;H>e.maxTextureSize&&(b=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const v=new Float32Array(H*b*4*d),M=new ca(v,H,b,d);M.type=an,M.needsUpdate=!0;const Q=D*4;for(let O=0;O<d;O++){const V=g[O],F=y[O],q=x[O],j=H*b*4*O;for(let W=0;W<V.count;W++){const J=W*Q;E===!0&&(A.fromBufferAttribute(V,W),v[j+J+0]=A.x,v[j+J+1]=A.y,v[j+J+2]=A.z,v[j+J+3]=0),C===!0&&(A.fromBufferAttribute(F,W),v[j+J+4]=A.x,v[j+J+5]=A.y,v[j+J+6]=A.z,v[j+J+7]=0),f===!0&&(A.fromBufferAttribute(q,W),v[j+J+8]=A.x,v[j+J+9]=A.y,v[j+J+10]=A.z,v[j+J+11]=q.itemSize===4?A.w:1)}}u={count:d,texture:M,size:new Xe(H,b)},n.set(o,u),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let E=0;for(let f=0;f<c.length;f++)E+=c[f];const C=o.morphTargetsRelative?1:1-E;a.getUniforms().setValue(i,"morphTargetBaseInfluence",C),a.getUniforms().setValue(i,"morphTargetInfluences",c)}a.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),a.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function pf(i,e,t,n){let A=new WeakMap;function r(a){const c=n.render.frame,l=a.geometry,d=e.get(a,l);if(A.get(d)!==c&&(e.update(d),A.set(d,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),A.get(a)!==c&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),A.set(a,c))),a.isSkinnedMesh){const u=a.skeleton;A.get(u)!==c&&(u.update(),A.set(u,c))}return d}function s(){A=new WeakMap}function o(a){const c=a.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Qa=new Bt,ps=new Ea(1,1),Ia=new ca,_a=new Fl,Da=new pa,Es=[],Bs=[],ms=new Float32Array(16),Cs=new Float32Array(9),Qs=new Float32Array(4);function Oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const A=e*t;let r=Es[A];if(r===void 0&&(r=new Float32Array(A),Es[A]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function TA(i,e){let t=Bs[e];t===void 0&&(t=new Int32Array(e),Bs[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function Cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function Qf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ct(t,n))return;Qs.set(n),i.uniformMatrix2fv(this.addr,!1,Qs),lt(t,n)}}function If(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ct(t,n))return;Cs.set(n),i.uniformMatrix3fv(this.addr,!1,Cs),lt(t,n)}}function _f(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ct(t,n))return;ms.set(n),i.uniformMatrix4fv(this.addr,!1,ms),lt(t,n)}}function Df(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function Mf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function bf(i,e,t){const n=this.cache,A=t.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A);let r;this.type===i.SAMPLER_2D_SHADOW?(ps.compareFunction=oa,r=ps):r=Qa,t.setTexture2D(e||r,A)}function wf(i,e,t){const n=this.cache,A=t.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A),t.setTexture3D(e||_a,A)}function Nf(i,e,t){const n=this.cache,A=t.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A),t.setTextureCube(e||Da,A)}function Hf(i,e,t){const n=this.cache,A=t.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A),t.setTexture2DArray(e||Ia,A)}function Rf(i){switch(i){case 5126:return Ef;case 35664:return Bf;case 35665:return mf;case 35666:return Cf;case 35674:return Qf;case 35675:return If;case 35676:return _f;case 5124:case 35670:return Df;case 35667:case 35671:return vf;case 35668:case 35672:return xf;case 35669:case 35673:return Sf;case 5125:return Mf;case 36294:return yf;case 36295:return Of;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return bf;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return Hf}}function Pf(i,e){i.uniform1fv(this.addr,e)}function Lf(i,e){const t=Oi(e,this.size,2);i.uniform2fv(this.addr,t)}function Uf(i,e){const t=Oi(e,this.size,3);i.uniform3fv(this.addr,t)}function Ff(i,e){const t=Oi(e,this.size,4);i.uniform4fv(this.addr,t)}function Gf(i,e){const t=Oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zf(i,e){const t=Oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vf(i,e){const t=Oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kf(i,e){i.uniform1iv(this.addr,e)}function Yf(i,e){i.uniform2iv(this.addr,e)}function Wf(i,e){i.uniform3iv(this.addr,e)}function Xf(i,e){i.uniform4iv(this.addr,e)}function Kf(i,e){i.uniform1uiv(this.addr,e)}function qf(i,e){i.uniform2uiv(this.addr,e)}function jf(i,e){i.uniform3uiv(this.addr,e)}function Zf(i,e){i.uniform4uiv(this.addr,e)}function Jf(i,e,t){const n=this.cache,A=e.length,r=TA(t,A);ct(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let s=0;s!==A;++s)t.setTexture2D(e[s]||Qa,r[s])}function $f(i,e,t){const n=this.cache,A=e.length,r=TA(t,A);ct(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let s=0;s!==A;++s)t.setTexture3D(e[s]||_a,r[s])}function eh(i,e,t){const n=this.cache,A=e.length,r=TA(t,A);ct(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let s=0;s!==A;++s)t.setTextureCube(e[s]||Da,r[s])}function th(i,e,t){const n=this.cache,A=e.length,r=TA(t,A);ct(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let s=0;s!==A;++s)t.setTexture2DArray(e[s]||Ia,r[s])}function nh(i){switch(i){case 5126:return Pf;case 35664:return Lf;case 35665:return Uf;case 35666:return Ff;case 35674:return Gf;case 35675:return zf;case 35676:return Vf;case 5124:case 35670:return kf;case 35667:case 35671:return Yf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return Kf;case 36294:return qf;case 36295:return jf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return eh;case 36289:case 36303:case 36311:case 36292:return th}}class ih{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rf(t.type)}}class Ah{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nh(t.type)}}class rh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const A=this.seq;for(let r=0,s=A.length;r!==s;++r){const o=A[r];o.setValue(e,t[o.id],n)}}}const dr=/(\w+)(\])?(\[|\.)?/g;function Is(i,e){i.seq.push(e),i.map[e.id]=e}function oh(i,e,t){const n=i.name,A=n.length;for(dr.lastIndex=0;;){const r=dr.exec(n),s=dr.lastIndex;let o=r[1];const a=r[2]==="]",c=r[3];if(a&&(o=o|0),c===void 0||c==="["&&s+2===A){Is(t,c===void 0?new ih(o,i,e):new Ah(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new rh(o),Is(t,d)),t=d}}}class SA{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let A=0;A<n;++A){const r=e.getActiveUniform(t,A),s=e.getUniformLocation(t,r.name);oh(r,s,this)}}setValue(e,t,n,A){const r=this.map[t];r!==void 0&&r.setValue(e,n,A)}setOptional(e,t,n){const A=t[n];A!==void 0&&this.setValue(e,n,A)}static upload(e,t,n,A){for(let r=0,s=t.length;r!==s;++r){const o=t[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,A)}}static seqWithValue(e,t){const n=[];for(let A=0,r=e.length;A!==r;++A){const s=e[A];s.id in t&&n.push(s)}return n}}function _s(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const sh=37297;let ah=0;function ch(i,e){const t=i.split(`
`),n=[],A=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=A;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Ds=new Oe;function lh(i){Ve._getMatrix(Ds,Ve.workingColorSpace,i);const e=`mat3( ${Ds.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case MA:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vs(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),A=i.getShaderInfoLog(e).trim();if(n&&A==="")return"";const r=/ERROR: 0:(\d+)/.exec(A);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+A+`

`+ch(i.getShaderSource(e),s)}else return A}function gh(i,e){const t=lh(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dh(i,e){let t;switch(e){case dl:t="Linear";break;case ul:t="Reinhard";break;case fl:t="Cineon";break;case hl:t="ACESFilmic";break;case El:t="AgX";break;case Bl:t="Neutral";break;case pl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const QA=new U;function uh(){Ve.getLuminanceCoefficients(QA);const i=QA.x.toFixed(4),e=QA.y.toFixed(4),t=QA.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fh(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function hh(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ph(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let A=0;A<n;A++){const r=i.getActiveAttrib(e,A),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Li(i){return i!==""}function xs(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ss(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eh=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(Eh,mh)}const Bh=new Map;function mh(i,e){let t=be[e];if(t===void 0){const n=Bh.get(e);if(n!==void 0)t=be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eo(t)}const Ch=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ms(i){return i.replace(Ch,Qh)}function Qh(i,e,t,n){let A="";for(let r=parseInt(e);r<parseInt(t);r++)A+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return A}function ys(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ih(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ws?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(e="SHADOWMAP_TYPE_VSM"),e}function _h(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case Ci:e="ENVMAP_TYPE_CUBE";break;case OA:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dh(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function vh(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xs:e="ENVMAP_BLENDING_MULTIPLY";break;case ll:e="ENVMAP_BLENDING_MIX";break;case gl:e="ENVMAP_BLENDING_ADD";break}return e}function xh(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Sh(i,e,t,n){const A=i.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const a=Ih(t),c=_h(t),l=Dh(t),d=vh(t),u=xh(t),h=fh(t),E=hh(r),C=A.createProgram();let f,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Li).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Li).join(`
`),g.length>0&&(g+=`
`)):(f=[ys(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),g=[ys(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?be.tonemapping_pars_fragment:"",t.toneMapping!==vn?dh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,gh("linearToOutputTexel",t.outputColorSpace),uh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),s=eo(s),s=xs(s,t),s=Ss(s,t),o=eo(o),o=xs(o,t),o=Ss(o,t),s=Ms(s),o=Ms(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=y+f+s,D=y+g+o,H=_s(A,A.VERTEX_SHADER,x),b=_s(A,A.FRAGMENT_SHADER,D);A.attachShader(C,H),A.attachShader(C,b),t.index0AttributeName!==void 0?A.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&A.bindAttribLocation(C,0,"position"),A.linkProgram(C);function v(O){if(i.debug.checkShaderErrors){const V=A.getProgramInfoLog(C).trim(),F=A.getShaderInfoLog(H).trim(),q=A.getShaderInfoLog(b).trim();let j=!0,W=!0;if(A.getProgramParameter(C,A.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(A,C,H,b);else{const J=vs(A,H,"vertex"),z=vs(A,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+A.getError()+" - VALIDATE_STATUS "+A.getProgramParameter(C,A.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+V+`
`+J+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||q==="")&&(W=!1);W&&(O.diagnostics={runnable:j,programLog:V,vertexShader:{log:F,prefix:f},fragmentShader:{log:q,prefix:g}})}A.deleteShader(H),A.deleteShader(b),M=new SA(A,C),Q=ph(A,C)}let M;this.getUniforms=function(){return M===void 0&&v(this),M};let Q;this.getAttributes=function(){return Q===void 0&&v(this),Q};let m=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=A.getProgramParameter(C,sh)),m},this.destroy=function(){n.releaseStatesOfProgram(this),A.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ah++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=b,this}let Mh=0;class yh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,A=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(A)===!1&&(s.add(A),A.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Oh(e),t.set(e,n)),n}}class Oh{constructor(e){this.id=Mh++,this.code=e,this.usedTimes=0}}function Th(i,e,t,n,A,r,s){const o=new la,a=new yh,c=new Set,l=[],d=A.logarithmicDepthBuffer,u=A.vertexTextures;let h=A.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(Q){return c.add(Q),Q===0?"uv":`uv${Q}`}function f(Q,m,O,V,F){const q=V.fog,j=F.geometry,W=Q.isMeshStandardMaterial?V.environment:null,J=(Q.isMeshStandardMaterial?t:e).get(Q.envMap||W),z=J&&J.mapping===OA?J.image.height:null,re=E[Q.type];Q.precision!==null&&(h=A.getMaxPrecision(Q.precision),h!==Q.precision&&console.warn("THREE.WebGLProgram.getParameters:",Q.precision,"not supported, using",h,"instead."));const ge=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,me=ge!==void 0?ge.length:0;let we=0;j.morphAttributes.position!==void 0&&(we=1),j.morphAttributes.normal!==void 0&&(we=2),j.morphAttributes.color!==void 0&&(we=3);let je,Y,te,pe;if(re){const Ke=Xt[re];je=Ke.vertexShader,Y=Ke.fragmentShader}else je=Q.vertexShader,Y=Q.fragmentShader,a.update(Q),te=a.getVertexShaderID(Q),pe=a.getFragmentShaderID(Q);const oe=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Se=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,et=!!Q.map,Ue=!!Q.matcap,ot=!!J,S=!!Q.aoMap,Tt=!!Q.lightMap,Re=!!Q.bumpMap,Pe=!!Q.normalMap,Ce=!!Q.displacementMap,Je=!!Q.emissiveMap,Be=!!Q.metalnessMap,_=!!Q.roughnessMap,p=Q.anisotropy>0,R=Q.clearcoat>0,X=Q.dispersion>0,Z=Q.iridescence>0,k=Q.sheen>0,Ee=Q.transmission>0,se=p&&!!Q.anisotropyMap,de=R&&!!Q.clearcoatMap,Fe=R&&!!Q.clearcoatNormalMap,ee=R&&!!Q.clearcoatRoughnessMap,ue=Z&&!!Q.iridescenceMap,_e=Z&&!!Q.iridescenceThicknessMap,ve=k&&!!Q.sheenColorMap,fe=k&&!!Q.sheenRoughnessMap,Le=!!Q.specularMap,Te=!!Q.specularColorMap,Ze=!!Q.specularIntensityMap,T=Ee&&!!Q.transmissionMap,ie=Ee&&!!Q.thicknessMap,G=!!Q.gradientMap,K=!!Q.alphaMap,ce=Q.alphaTest>0,ae=!!Q.alphaHash,ye=!!Q.extensions;let nt=vn;Q.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(nt=i.toneMapping);const ft={shaderID:re,shaderType:Q.type,shaderName:Q.name,vertexShader:je,fragmentShader:Y,defines:Q.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:Q.isRawShaderMaterial===!0,glslVersion:Q.glslVersion,precision:h,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Se,instancingColor:Se&&F.instanceColor!==null,instancingMorph:Se&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:_i,alphaToCoverage:!!Q.alphaToCoverage,map:et,matcap:Ue,envMap:ot,envMapMode:ot&&J.mapping,envMapCubeUVHeight:z,aoMap:S,lightMap:Tt,bumpMap:Re,normalMap:Pe,displacementMap:u&&Ce,emissiveMap:Je,normalMapObjectSpace:Pe&&Q.normalMapType===Il,normalMapTangentSpace:Pe&&Q.normalMapType===ra,metalnessMap:Be,roughnessMap:_,anisotropy:p,anisotropyMap:se,clearcoat:R,clearcoatMap:de,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ee,dispersion:X,iridescence:Z,iridescenceMap:ue,iridescenceThicknessMap:_e,sheen:k,sheenColorMap:ve,sheenRoughnessMap:fe,specularMap:Le,specularColorMap:Te,specularIntensityMap:Ze,transmission:Ee,transmissionMap:T,thicknessMap:ie,gradientMap:G,opaque:Q.transparent===!1&&Q.blending===hi&&Q.alphaToCoverage===!1,alphaMap:K,alphaTest:ce,alphaHash:ae,combine:Q.combine,mapUv:et&&C(Q.map.channel),aoMapUv:S&&C(Q.aoMap.channel),lightMapUv:Tt&&C(Q.lightMap.channel),bumpMapUv:Re&&C(Q.bumpMap.channel),normalMapUv:Pe&&C(Q.normalMap.channel),displacementMapUv:Ce&&C(Q.displacementMap.channel),emissiveMapUv:Je&&C(Q.emissiveMap.channel),metalnessMapUv:Be&&C(Q.metalnessMap.channel),roughnessMapUv:_&&C(Q.roughnessMap.channel),anisotropyMapUv:se&&C(Q.anisotropyMap.channel),clearcoatMapUv:de&&C(Q.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&C(Q.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&C(Q.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&C(Q.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&C(Q.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&C(Q.sheenColorMap.channel),sheenRoughnessMapUv:fe&&C(Q.sheenRoughnessMap.channel),specularMapUv:Le&&C(Q.specularMap.channel),specularColorMapUv:Te&&C(Q.specularColorMap.channel),specularIntensityMapUv:Ze&&C(Q.specularIntensityMap.channel),transmissionMapUv:T&&C(Q.transmissionMap.channel),thicknessMapUv:ie&&C(Q.thicknessMap.channel),alphaMapUv:K&&C(Q.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Pe||p),vertexColors:Q.vertexColors,vertexAlphas:Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(et||K),fog:!!q,useFog:Q.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:Q.flatShading===!0,sizeAttenuation:Q.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:De,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:we,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:Q.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:et&&Q.map.isVideoTexture===!0&&Ve.getTransfer(Q.map.colorSpace)===qe,decodeVideoTextureEmissive:Je&&Q.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(Q.emissiveMap.colorSpace)===qe,premultipliedAlpha:Q.premultipliedAlpha,doubleSided:Q.side===zt,flipSided:Q.side===xt,useDepthPacking:Q.depthPacking>=0,depthPacking:Q.depthPacking||0,index0AttributeName:Q.index0AttributeName,extensionClipCullDistance:ye&&Q.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&Q.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:Q.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function g(Q){const m=[];if(Q.shaderID?m.push(Q.shaderID):(m.push(Q.customVertexShaderID),m.push(Q.customFragmentShaderID)),Q.defines!==void 0)for(const O in Q.defines)m.push(O),m.push(Q.defines[O]);return Q.isRawShaderMaterial===!1&&(y(m,Q),x(m,Q),m.push(i.outputColorSpace)),m.push(Q.customProgramCacheKey),m.join()}function y(Q,m){Q.push(m.precision),Q.push(m.outputColorSpace),Q.push(m.envMapMode),Q.push(m.envMapCubeUVHeight),Q.push(m.mapUv),Q.push(m.alphaMapUv),Q.push(m.lightMapUv),Q.push(m.aoMapUv),Q.push(m.bumpMapUv),Q.push(m.normalMapUv),Q.push(m.displacementMapUv),Q.push(m.emissiveMapUv),Q.push(m.metalnessMapUv),Q.push(m.roughnessMapUv),Q.push(m.anisotropyMapUv),Q.push(m.clearcoatMapUv),Q.push(m.clearcoatNormalMapUv),Q.push(m.clearcoatRoughnessMapUv),Q.push(m.iridescenceMapUv),Q.push(m.iridescenceThicknessMapUv),Q.push(m.sheenColorMapUv),Q.push(m.sheenRoughnessMapUv),Q.push(m.specularMapUv),Q.push(m.specularColorMapUv),Q.push(m.specularIntensityMapUv),Q.push(m.transmissionMapUv),Q.push(m.thicknessMapUv),Q.push(m.combine),Q.push(m.fogExp2),Q.push(m.sizeAttenuation),Q.push(m.morphTargetsCount),Q.push(m.morphAttributeCount),Q.push(m.numDirLights),Q.push(m.numPointLights),Q.push(m.numSpotLights),Q.push(m.numSpotLightMaps),Q.push(m.numHemiLights),Q.push(m.numRectAreaLights),Q.push(m.numDirLightShadows),Q.push(m.numPointLightShadows),Q.push(m.numSpotLightShadows),Q.push(m.numSpotLightShadowsWithMaps),Q.push(m.numLightProbes),Q.push(m.shadowMapType),Q.push(m.toneMapping),Q.push(m.numClippingPlanes),Q.push(m.numClipIntersection),Q.push(m.depthPacking)}function x(Q,m){o.disableAll(),m.supportsVertexTextures&&o.enable(0),m.instancing&&o.enable(1),m.instancingColor&&o.enable(2),m.instancingMorph&&o.enable(3),m.matcap&&o.enable(4),m.envMap&&o.enable(5),m.normalMapObjectSpace&&o.enable(6),m.normalMapTangentSpace&&o.enable(7),m.clearcoat&&o.enable(8),m.iridescence&&o.enable(9),m.alphaTest&&o.enable(10),m.vertexColors&&o.enable(11),m.vertexAlphas&&o.enable(12),m.vertexUv1s&&o.enable(13),m.vertexUv2s&&o.enable(14),m.vertexUv3s&&o.enable(15),m.vertexTangents&&o.enable(16),m.anisotropy&&o.enable(17),m.alphaHash&&o.enable(18),m.batching&&o.enable(19),m.dispersion&&o.enable(20),m.batchingColor&&o.enable(21),Q.push(o.mask),o.disableAll(),m.fog&&o.enable(0),m.useFog&&o.enable(1),m.flatShading&&o.enable(2),m.logarithmicDepthBuffer&&o.enable(3),m.reverseDepthBuffer&&o.enable(4),m.skinning&&o.enable(5),m.morphTargets&&o.enable(6),m.morphNormals&&o.enable(7),m.morphColors&&o.enable(8),m.premultipliedAlpha&&o.enable(9),m.shadowMapEnabled&&o.enable(10),m.doubleSided&&o.enable(11),m.flipSided&&o.enable(12),m.useDepthPacking&&o.enable(13),m.dithering&&o.enable(14),m.transmission&&o.enable(15),m.sheen&&o.enable(16),m.opaque&&o.enable(17),m.pointsUvs&&o.enable(18),m.decodeVideoTexture&&o.enable(19),m.decodeVideoTextureEmissive&&o.enable(20),m.alphaToCoverage&&o.enable(21),Q.push(o.mask)}function D(Q){const m=E[Q.type];let O;if(m){const V=Xt[m];O=$l.clone(V.uniforms)}else O=Q.uniforms;return O}function H(Q,m){let O;for(let V=0,F=l.length;V<F;V++){const q=l[V];if(q.cacheKey===m){O=q,++O.usedTimes;break}}return O===void 0&&(O=new Sh(i,m,Q,r),l.push(O)),O}function b(Q){if(--Q.usedTimes===0){const m=l.indexOf(Q);l[m]=l[l.length-1],l.pop(),Q.destroy()}}function v(Q){a.remove(Q)}function M(){a.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:b,releaseShaderCache:v,programs:l,dispose:M}}function bh(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function A(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:A,dispose:r}}function wh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Os(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ts(){const i=[];let e=0;const t=[],n=[],A=[];function r(){e=0,t.length=0,n.length=0,A.length=0}function s(d,u,h,E,C,f){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:u,material:h,groupOrder:E,renderOrder:d.renderOrder,z:C,group:f},i[e]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=h,g.groupOrder=E,g.renderOrder=d.renderOrder,g.z=C,g.group=f),e++,g}function o(d,u,h,E,C,f){const g=s(d,u,h,E,C,f);h.transmission>0?n.push(g):h.transparent===!0?A.push(g):t.push(g)}function a(d,u,h,E,C,f){const g=s(d,u,h,E,C,f);h.transmission>0?n.unshift(g):h.transparent===!0?A.unshift(g):t.unshift(g)}function c(d,u){t.length>1&&t.sort(d||wh),n.length>1&&n.sort(u||Os),A.length>1&&A.sort(u||Os)}function l(){for(let d=e,u=i.length;d<u;d++){const h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:A,init:r,push:o,unshift:a,finish:l,sort:c}}function Nh(){let i=new WeakMap;function e(n,A){const r=i.get(n);let s;return r===void 0?(s=new Ts,i.set(n,[s])):A>=r.length?(s=new Ts,r.push(s)):s=r[A],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ke};break;case"SpotLight":t={position:new U,direction:new U,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Rh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ph=0;function Lh(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Uh(i){const e=new Hh,t=Rh(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const A=new U,r=new rt,s=new rt;function o(c){let l=0,d=0,u=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let h=0,E=0,C=0,f=0,g=0,y=0,x=0,D=0,H=0,b=0,v=0;c.sort(Lh);for(let Q=0,m=c.length;Q<m;Q++){const O=c[Q],V=O.color,F=O.intensity,q=O.distance,j=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)l+=V.r*F,d+=V.g*F,u+=V.b*F;else if(O.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(O.sh.coefficients[W],F);v++}else if(O.isDirectionalLight){const W=e.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const J=O.shadow,z=t.get(O);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.directionalShadow[h]=z,n.directionalShadowMap[h]=j,n.directionalShadowMatrix[h]=O.shadow.matrix,y++}n.directional[h]=W,h++}else if(O.isSpotLight){const W=e.get(O);W.position.setFromMatrixPosition(O.matrixWorld),W.color.copy(V).multiplyScalar(F),W.distance=q,W.coneCos=Math.cos(O.angle),W.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),W.decay=O.decay,n.spot[C]=W;const J=O.shadow;if(O.map&&(n.spotLightMap[H]=O.map,H++,J.updateMatrices(O),O.castShadow&&b++),n.spotLightMatrix[C]=J.matrix,O.castShadow){const z=t.get(O);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.spotShadow[C]=z,n.spotShadowMap[C]=j,D++}C++}else if(O.isRectAreaLight){const W=e.get(O);W.color.copy(V).multiplyScalar(F),W.halfWidth.set(O.width*.5,0,0),W.halfHeight.set(0,O.height*.5,0),n.rectArea[f]=W,f++}else if(O.isPointLight){const W=e.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),W.distance=O.distance,W.decay=O.decay,O.castShadow){const J=O.shadow,z=t.get(O);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,n.pointShadow[E]=z,n.pointShadowMap[E]=j,n.pointShadowMatrix[E]=O.shadow.matrix,x++}n.point[E]=W,E++}else if(O.isHemisphereLight){const W=e.get(O);W.skyColor.copy(O.color).multiplyScalar(F),W.groundColor.copy(O.groundColor).multiplyScalar(F),n.hemi[g]=W,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=d,n.ambient[2]=u;const M=n.hash;(M.directionalLength!==h||M.pointLength!==E||M.spotLength!==C||M.rectAreaLength!==f||M.hemiLength!==g||M.numDirectionalShadows!==y||M.numPointShadows!==x||M.numSpotShadows!==D||M.numSpotMaps!==H||M.numLightProbes!==v)&&(n.directional.length=h,n.spot.length=C,n.rectArea.length=f,n.point.length=E,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=D+H-b,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=v,M.directionalLength=h,M.pointLength=E,M.spotLength=C,M.rectAreaLength=f,M.hemiLength=g,M.numDirectionalShadows=y,M.numPointShadows=x,M.numSpotShadows=D,M.numSpotMaps=H,M.numLightProbes=v,n.version=Ph++)}function a(c,l){let d=0,u=0,h=0,E=0,C=0;const f=l.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const x=c[g];if(x.isDirectionalLight){const D=n.directional[d];D.direction.setFromMatrixPosition(x.matrixWorld),A.setFromMatrixPosition(x.target.matrixWorld),D.direction.sub(A),D.direction.transformDirection(f),d++}else if(x.isSpotLight){const D=n.spot[h];D.position.setFromMatrixPosition(x.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(x.matrixWorld),A.setFromMatrixPosition(x.target.matrixWorld),D.direction.sub(A),D.direction.transformDirection(f),h++}else if(x.isRectAreaLight){const D=n.rectArea[E];D.position.setFromMatrixPosition(x.matrixWorld),D.position.applyMatrix4(f),s.identity(),r.copy(x.matrixWorld),r.premultiply(f),s.extractRotation(r),D.halfWidth.set(x.width*.5,0,0),D.halfHeight.set(0,x.height*.5,0),D.halfWidth.applyMatrix4(s),D.halfHeight.applyMatrix4(s),E++}else if(x.isPointLight){const D=n.point[u];D.position.setFromMatrixPosition(x.matrixWorld),D.position.applyMatrix4(f),u++}else if(x.isHemisphereLight){const D=n.hemi[C];D.direction.setFromMatrixPosition(x.matrixWorld),D.direction.transformDirection(f),C++}}}return{setup:o,setupView:a,state:n}}function bs(i){const e=new Uh(i),t=[],n=[];function A(l){c.camera=l,t.length=0,n.length=0}function r(l){t.push(l)}function s(l){n.push(l)}function o(){e.setup(t)}function a(l){e.setupView(t,l)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:A,state:c,setupLights:o,setupLightsView:a,pushLight:r,pushShadow:s}}function Fh(i){let e=new WeakMap;function t(A,r=0){const s=e.get(A);let o;return s===void 0?(o=new bs(i),e.set(A,[o])):r>=s.length?(o=new bs(i),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Gh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zh=`uniform sampler2D shadow_pass;
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
}`;function Vh(i,e,t){let n=new fo;const A=new Xe,r=new Xe,s=new At,o=new ag({depthPacking:Ql}),a=new cg,c={},l=t.maxTextureSize,d={[Sn]:xt,[xt]:Sn,[zt]:zt},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Gh,fragmentShader:zh}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const E=new qn;E.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ot(E,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let g=this.type;this.render=function(b,v,M){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const Q=i.getRenderTarget(),m=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Dn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=g!==on&&this.type===on,q=g===on&&this.type!==on;for(let j=0,W=b.length;j<W;j++){const J=b[j],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;A.copy(z.mapSize);const re=z.getFrameExtents();if(A.multiply(re),r.copy(z.mapSize),(A.x>l||A.y>l)&&(A.x>l&&(r.x=Math.floor(l/re.x),A.x=r.x*re.x,z.mapSize.x=r.x),A.y>l&&(r.y=Math.floor(l/re.y),A.y=r.y*re.y,z.mapSize.y=r.y)),z.map===null||F===!0||q===!0){const me=this.type!==on?{minFilter:Wt,magFilter:Wt}:{};z.map!==null&&z.map.dispose(),z.map=new Wn(A.x,A.y,me),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ge=z.getViewportCount();for(let me=0;me<ge;me++){const we=z.getViewport(me);s.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),V.viewport(s),z.updateMatrices(J,me),n=z.getFrustum(),D(v,M,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===on&&y(z,M),z.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(Q,m,O)};function y(b,v){const M=e.update(C);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Wn(A.x,A.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(v,null,M,u,C,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(v,null,M,h,C,null)}function x(b,v,M,Q){let m=null;const O=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0)m=O;else if(m=M.isPointLight===!0?a:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const V=m.uuid,F=v.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let j=q[F];j===void 0&&(j=m.clone(),q[F]=j,v.addEventListener("dispose",H)),m=j}if(m.visible=v.visible,m.wireframe=v.wireframe,Q===on?m.side=v.shadowSide!==null?v.shadowSide:v.side:m.side=v.shadowSide!==null?v.shadowSide:d[v.side],m.alphaMap=v.alphaMap,m.alphaTest=v.alphaTest,m.map=v.map,m.clipShadows=v.clipShadows,m.clippingPlanes=v.clippingPlanes,m.clipIntersection=v.clipIntersection,m.displacementMap=v.displacementMap,m.displacementScale=v.displacementScale,m.displacementBias=v.displacementBias,m.wireframeLinewidth=v.wireframeLinewidth,m.linewidth=v.linewidth,M.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const V=i.properties.get(m);V.light=M}return m}function D(b,v,M,Q,m){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&m===on)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const F=e.update(b),q=b.material;if(Array.isArray(q)){const j=F.groups;for(let W=0,J=j.length;W<J;W++){const z=j[W],re=q[z.materialIndex];if(re&&re.visible){const ge=x(b,re,Q,m);b.onBeforeShadow(i,b,v,M,F,ge,z),i.renderBufferDirect(M,null,F,ge,b,z),b.onAfterShadow(i,b,v,M,F,ge,z)}}}else if(q.visible){const j=x(b,q,Q,m);b.onBeforeShadow(i,b,v,M,F,j,null),i.renderBufferDirect(M,null,F,j,b,null),b.onAfterShadow(i,b,v,M,F,j,null)}}const V=b.children;for(let F=0,q=V.length;F<q;F++)D(V[F],v,M,Q,m)}function H(b){b.target.removeEventListener("dispose",H);for(const M in c){const Q=c[M],m=b.target.uuid;m in Q&&(Q[m].dispose(),delete Q[m])}}}const kh={[pr]:Er,[Br]:Qr,[mr]:Ir,[Bi]:Cr,[Er]:pr,[Qr]:Br,[Ir]:mr,[Cr]:Bi};function Yh(i,e){function t(){let T=!1;const ie=new At;let G=null;const K=new At(0,0,0,0);return{setMask:function(ce){G!==ce&&!T&&(i.colorMask(ce,ce,ce,ce),G=ce)},setLocked:function(ce){T=ce},setClear:function(ce,ae,ye,nt,ft){ft===!0&&(ce*=nt,ae*=nt,ye*=nt),ie.set(ce,ae,ye,nt),K.equals(ie)===!1&&(i.clearColor(ce,ae,ye,nt),K.copy(ie))},reset:function(){T=!1,G=null,K.set(-1,0,0,0)}}}function n(){let T=!1,ie=!1,G=null,K=null,ce=null;return{setReversed:function(ae){if(ie!==ae){const ye=e.get("EXT_clip_control");ie?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT);const nt=ce;ce=null,this.setClear(nt)}ie=ae},getReversed:function(){return ie},setTest:function(ae){ae?oe(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(ae){G!==ae&&!T&&(i.depthMask(ae),G=ae)},setFunc:function(ae){if(ie&&(ae=kh[ae]),K!==ae){switch(ae){case pr:i.depthFunc(i.NEVER);break;case Er:i.depthFunc(i.ALWAYS);break;case Br:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case mr:i.depthFunc(i.EQUAL);break;case Cr:i.depthFunc(i.GEQUAL);break;case Qr:i.depthFunc(i.GREATER);break;case Ir:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ae}},setLocked:function(ae){T=ae},setClear:function(ae){ce!==ae&&(ie&&(ae=1-ae),i.clearDepth(ae),ce=ae)},reset:function(){T=!1,G=null,K=null,ce=null,ie=!1}}}function A(){let T=!1,ie=null,G=null,K=null,ce=null,ae=null,ye=null,nt=null,ft=null;return{setTest:function(Ke){T||(Ke?oe(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(Ke){ie!==Ke&&!T&&(i.stencilMask(Ke),ie=Ke)},setFunc:function(Ke,Pt,$t){(G!==Ke||K!==Pt||ce!==$t)&&(i.stencilFunc(Ke,Pt,$t),G=Ke,K=Pt,ce=$t)},setOp:function(Ke,Pt,$t){(ae!==Ke||ye!==Pt||nt!==$t)&&(i.stencilOp(Ke,Pt,$t),ae=Ke,ye=Pt,nt=$t)},setLocked:function(Ke){T=Ke},setClear:function(Ke){ft!==Ke&&(i.clearStencil(Ke),ft=Ke)},reset:function(){T=!1,ie=null,G=null,K=null,ce=null,ae=null,ye=null,nt=null,ft=null}}}const r=new t,s=new n,o=new A,a=new WeakMap,c=new WeakMap;let l={},d={},u=new WeakMap,h=[],E=null,C=!1,f=null,g=null,y=null,x=null,D=null,H=null,b=null,v=new ke(0,0,0),M=0,Q=!1,m=null,O=null,V=null,F=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=J>=2);let re=null,ge={};const me=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),je=new At().fromArray(me),Y=new At().fromArray(we);function te(T,ie,G,K){const ce=new Uint8Array(4),ae=i.createTexture();i.bindTexture(T,ae),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<G;ye++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ie+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return ae}const pe={};pe[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),s.setFunc(Bi),Re(!1),Pe(Ho),oe(i.CULL_FACE),S(Dn);function oe(T){l[T]!==!0&&(i.enable(T),l[T]=!0)}function De(T){l[T]!==!1&&(i.disable(T),l[T]=!1)}function Se(T,ie){return d[T]!==ie?(i.bindFramebuffer(T,ie),d[T]=ie,T===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ie),T===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ne(T,ie){let G=h,K=!1;if(T){G=u.get(ie),G===void 0&&(G=[],u.set(ie,G));const ce=T.textures;if(G.length!==ce.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,ye=ce.length;ae<ye;ae++)G[ae]=i.COLOR_ATTACHMENT0+ae;G.length=ce.length,K=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,K=!0);K&&i.drawBuffers(G)}function et(T){return E!==T?(i.useProgram(T),E=T,!0):!1}const Ue={[Un]:i.FUNC_ADD,[Xc]:i.FUNC_SUBTRACT,[Kc]:i.FUNC_REVERSE_SUBTRACT};Ue[qc]=i.MIN,Ue[jc]=i.MAX;const ot={[Zc]:i.ZERO,[Jc]:i.ONE,[$c]:i.SRC_COLOR,[fr]:i.SRC_ALPHA,[rl]:i.SRC_ALPHA_SATURATE,[il]:i.DST_COLOR,[tl]:i.DST_ALPHA,[el]:i.ONE_MINUS_SRC_COLOR,[hr]:i.ONE_MINUS_SRC_ALPHA,[Al]:i.ONE_MINUS_DST_COLOR,[nl]:i.ONE_MINUS_DST_ALPHA,[ol]:i.CONSTANT_COLOR,[sl]:i.ONE_MINUS_CONSTANT_COLOR,[al]:i.CONSTANT_ALPHA,[cl]:i.ONE_MINUS_CONSTANT_ALPHA};function S(T,ie,G,K,ce,ae,ye,nt,ft,Ke){if(T===Dn){C===!0&&(De(i.BLEND),C=!1);return}if(C===!1&&(oe(i.BLEND),C=!0),T!==Wc){if(T!==f||Ke!==Q){if((g!==Un||D!==Un)&&(i.blendEquation(i.FUNC_ADD),g=Un,D=Un),Ke)switch(T){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFunc(i.ONE,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}y=null,x=null,H=null,b=null,v.set(0,0,0),M=0,f=T,Q=Ke}return}ce=ce||ie,ae=ae||G,ye=ye||K,(ie!==g||ce!==D)&&(i.blendEquationSeparate(Ue[ie],Ue[ce]),g=ie,D=ce),(G!==y||K!==x||ae!==H||ye!==b)&&(i.blendFuncSeparate(ot[G],ot[K],ot[ae],ot[ye]),y=G,x=K,H=ae,b=ye),(nt.equals(v)===!1||ft!==M)&&(i.blendColor(nt.r,nt.g,nt.b,ft),v.copy(nt),M=ft),f=T,Q=!1}function Tt(T,ie){T.side===zt?De(i.CULL_FACE):oe(i.CULL_FACE);let G=T.side===xt;ie&&(G=!G),Re(G),T.blending===hi&&T.transparent===!1?S(Dn):S(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),r.setMask(T.colorWrite);const K=T.stencilWrite;o.setTest(K),K&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Je(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(T){m!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),m=T)}function Pe(T){T!==Vc?(oe(i.CULL_FACE),T!==O&&(T===Ho?i.cullFace(i.BACK):T===kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),O=T}function Ce(T){T!==V&&(W&&i.lineWidth(T),V=T)}function Je(T,ie,G){T?(oe(i.POLYGON_OFFSET_FILL),(F!==ie||q!==G)&&(i.polygonOffset(ie,G),F=ie,q=G)):De(i.POLYGON_OFFSET_FILL)}function Be(T){T?oe(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function _(T){T===void 0&&(T=i.TEXTURE0+j-1),re!==T&&(i.activeTexture(T),re=T)}function p(T,ie,G){G===void 0&&(re===null?G=i.TEXTURE0+j-1:G=re);let K=ge[G];K===void 0&&(K={type:void 0,texture:void 0},ge[G]=K),(K.type!==T||K.texture!==ie)&&(re!==G&&(i.activeTexture(G),re=G),i.bindTexture(T,ie||pe[T]),K.type=T,K.texture=ie)}function R(){const T=ge[re];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function k(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Fe(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(T){je.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),je.copy(T))}function fe(T){Y.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),Y.copy(T))}function Le(T,ie){let G=c.get(ie);G===void 0&&(G=new WeakMap,c.set(ie,G));let K=G.get(T);K===void 0&&(K=i.getUniformBlockIndex(ie,T.name),G.set(T,K))}function Te(T,ie){const K=c.get(ie).get(T);a.get(ie)!==K&&(i.uniformBlockBinding(ie,K,T.__bindingPointIndex),a.set(ie,K))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},re=null,ge={},d={},u=new WeakMap,h=[],E=null,C=!1,f=null,g=null,y=null,x=null,D=null,H=null,b=null,v=new ke(0,0,0),M=0,Q=!1,m=null,O=null,V=null,F=null,q=null,je.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:oe,disable:De,bindFramebuffer:Se,drawBuffers:Ne,useProgram:et,setBlending:S,setMaterial:Tt,setFlipSided:Re,setCullFace:Pe,setLineWidth:Ce,setPolygonOffset:Je,setScissorTest:Be,activeTexture:_,bindTexture:p,unbindTexture:R,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:ue,texImage3D:_e,updateUBOMapping:Le,uniformBlockBinding:Te,texStorage2D:Fe,texStorage3D:ee,texSubImage2D:k,texSubImage3D:Ee,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:ve,viewport:fe,reset:Ze}}function Wh(i,e,t,n,A,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,l=new WeakMap;let d;const u=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(_,p){return h?new OffscreenCanvas(_,p):Fi("canvas")}function C(_,p,R){let X=1;const Z=Be(_);if((Z.width>R||Z.height>R)&&(X=R/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const k=Math.floor(X*Z.width),Ee=Math.floor(X*Z.height);d===void 0&&(d=E(k,Ee));const se=p?E(k,Ee):d;return se.width=k,se.height=Ee,se.getContext("2d").drawImage(_,0,0,k,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+k+"x"+Ee+")."),se}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),_;return _}function f(_){return _.generateMipmaps}function g(_){i.generateMipmap(_)}function y(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(_,p,R,X,Z=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let k=p;if(p===i.RED&&(R===i.FLOAT&&(k=i.R32F),R===i.HALF_FLOAT&&(k=i.R16F),R===i.UNSIGNED_BYTE&&(k=i.R8)),p===i.RED_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.R8UI),R===i.UNSIGNED_SHORT&&(k=i.R16UI),R===i.UNSIGNED_INT&&(k=i.R32UI),R===i.BYTE&&(k=i.R8I),R===i.SHORT&&(k=i.R16I),R===i.INT&&(k=i.R32I)),p===i.RG&&(R===i.FLOAT&&(k=i.RG32F),R===i.HALF_FLOAT&&(k=i.RG16F),R===i.UNSIGNED_BYTE&&(k=i.RG8)),p===i.RG_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.RG8UI),R===i.UNSIGNED_SHORT&&(k=i.RG16UI),R===i.UNSIGNED_INT&&(k=i.RG32UI),R===i.BYTE&&(k=i.RG8I),R===i.SHORT&&(k=i.RG16I),R===i.INT&&(k=i.RG32I)),p===i.RGB_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.RGB8UI),R===i.UNSIGNED_SHORT&&(k=i.RGB16UI),R===i.UNSIGNED_INT&&(k=i.RGB32UI),R===i.BYTE&&(k=i.RGB8I),R===i.SHORT&&(k=i.RGB16I),R===i.INT&&(k=i.RGB32I)),p===i.RGBA_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),R===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),R===i.UNSIGNED_INT&&(k=i.RGBA32UI),R===i.BYTE&&(k=i.RGBA8I),R===i.SHORT&&(k=i.RGBA16I),R===i.INT&&(k=i.RGBA32I)),p===i.RGB&&R===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),p===i.RGBA){const Ee=Z?MA:Ve.getTransfer(X);R===i.FLOAT&&(k=i.RGBA32F),R===i.HALF_FLOAT&&(k=i.RGBA16F),R===i.UNSIGNED_BYTE&&(k=Ee===qe?i.SRGB8_ALPHA8:i.RGBA8),R===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),R===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function D(_,p){let R;return _?p===null||p===Yn||p===Qi?R=i.DEPTH24_STENCIL8:p===an?R=i.DEPTH32F_STENCIL8:p===Ui&&(R=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Yn||p===Qi?R=i.DEPTH_COMPONENT24:p===an?R=i.DEPTH_COMPONENT32F:p===Ui&&(R=i.DEPTH_COMPONENT16),R}function H(_,p){return f(_)===!0||_.isFramebufferTexture&&_.minFilter!==Wt&&_.minFilter!==kt?Math.log2(Math.max(p.width,p.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?p.mipmaps.length:1}function b(_){const p=_.target;p.removeEventListener("dispose",b),M(p),p.isVideoTexture&&l.delete(p)}function v(_){const p=_.target;p.removeEventListener("dispose",v),m(p)}function M(_){const p=n.get(_);if(p.__webglInit===void 0)return;const R=_.source,X=u.get(R);if(X){const Z=X[p.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&Q(_),Object.keys(X).length===0&&u.delete(R)}n.remove(_)}function Q(_){const p=n.get(_);i.deleteTexture(p.__webglTexture);const R=_.source,X=u.get(R);delete X[p.__cacheKey],s.memory.textures--}function m(_){const p=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(p.__webglFramebuffer[X]))for(let Z=0;Z<p.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(p.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(p.__webglFramebuffer[X]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[X])}else{if(Array.isArray(p.__webglFramebuffer))for(let X=0;X<p.__webglFramebuffer.length;X++)i.deleteFramebuffer(p.__webglFramebuffer[X]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let X=0;X<p.__webglColorRenderbuffer.length;X++)p.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[X]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const R=_.textures;for(let X=0,Z=R.length;X<Z;X++){const k=n.get(R[X]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),s.memory.textures--),n.remove(R[X])}n.remove(_)}let O=0;function V(){O=0}function F(){const _=O;return _>=A.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+A.maxTextures),O+=1,_}function q(_){const p=[];return p.push(_.wrapS),p.push(_.wrapT),p.push(_.wrapR||0),p.push(_.magFilter),p.push(_.minFilter),p.push(_.anisotropy),p.push(_.internalFormat),p.push(_.format),p.push(_.type),p.push(_.generateMipmaps),p.push(_.premultiplyAlpha),p.push(_.flipY),p.push(_.unpackAlignment),p.push(_.colorSpace),p.join()}function j(_,p){const R=n.get(_);if(_.isVideoTexture&&Ce(_),_.isRenderTargetTexture===!1&&_.version>0&&R.__version!==_.version){const X=_.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(R,_,p);return}}t.bindTexture(i.TEXTURE_2D,R.__webglTexture,i.TEXTURE0+p)}function W(_,p){const R=n.get(_);if(_.version>0&&R.__version!==_.version){Y(R,_,p);return}t.bindTexture(i.TEXTURE_2D_ARRAY,R.__webglTexture,i.TEXTURE0+p)}function J(_,p){const R=n.get(_);if(_.version>0&&R.__version!==_.version){Y(R,_,p);return}t.bindTexture(i.TEXTURE_3D,R.__webglTexture,i.TEXTURE0+p)}function z(_,p){const R=n.get(_);if(_.version>0&&R.__version!==_.version){te(R,_,p);return}t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+p)}const re={[vr]:i.REPEAT,[sn]:i.CLAMP_TO_EDGE,[xr]:i.MIRRORED_REPEAT},ge={[Wt]:i.NEAREST,[ml]:i.NEAREST_MIPMAP_NEAREST,[eA]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[PA]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},me={[_l]:i.NEVER,[yl]:i.ALWAYS,[Dl]:i.LESS,[oa]:i.LEQUAL,[vl]:i.EQUAL,[Ml]:i.GEQUAL,[xl]:i.GREATER,[Sl]:i.NOTEQUAL};function we(_,p){if(p.type===an&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===kt||p.magFilter===PA||p.magFilter===eA||p.magFilter===Gn||p.minFilter===kt||p.minFilter===PA||p.minFilter===eA||p.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,re[p.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,re[p.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,re[p.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,ge[p.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,ge[p.minFilter]),p.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,me[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Wt||p.minFilter!==eA&&p.minFilter!==Gn||p.type===an&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,A.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function je(_,p){let R=!1;_.__webglInit===void 0&&(_.__webglInit=!0,p.addEventListener("dispose",b));const X=p.source;let Z=u.get(X);Z===void 0&&(Z={},u.set(X,Z));const k=q(p);if(k!==_.__cacheKey){Z[k]===void 0&&(Z[k]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,R=!0),Z[k].usedTimes++;const Ee=Z[_.__cacheKey];Ee!==void 0&&(Z[_.__cacheKey].usedTimes--,Ee.usedTimes===0&&Q(p)),_.__cacheKey=k,_.__webglTexture=Z[k].texture}return R}function Y(_,p,R){let X=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(X=i.TEXTURE_3D);const Z=je(_,p),k=p.source;t.bindTexture(X,_.__webglTexture,i.TEXTURE0+R);const Ee=n.get(k);if(k.version!==Ee.__version||Z===!0){t.activeTexture(i.TEXTURE0+R);const se=Ve.getPrimaries(Ve.workingColorSpace),de=p.colorSpace===_n?null:Ve.getPrimaries(p.colorSpace),Fe=p.colorSpace===_n||se===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ee=C(p.image,!1,A.maxTextureSize);ee=Je(p,ee);const ue=r.convert(p.format,p.colorSpace),_e=r.convert(p.type);let ve=x(p.internalFormat,ue,_e,p.colorSpace,p.isVideoTexture);we(X,p);let fe;const Le=p.mipmaps,Te=p.isVideoTexture!==!0,Ze=Ee.__version===void 0||Z===!0,T=k.dataReady,ie=H(p,ee);if(p.isDepthTexture)ve=D(p.format===Ii,p.type),Ze&&(Te?t.texStorage2D(i.TEXTURE_2D,1,ve,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ve,ee.width,ee.height,0,ue,_e,null));else if(p.isDataTexture)if(Le.length>0){Te&&Ze&&t.texStorage2D(i.TEXTURE_2D,ie,ve,Le[0].width,Le[0].height);for(let G=0,K=Le.length;G<K;G++)fe=Le[G],Te?T&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,fe.width,fe.height,ue,_e,fe.data):t.texImage2D(i.TEXTURE_2D,G,ve,fe.width,fe.height,0,ue,_e,fe.data);p.generateMipmaps=!1}else Te?(Ze&&t.texStorage2D(i.TEXTURE_2D,ie,ve,ee.width,ee.height),T&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,ue,_e,ee.data)):t.texImage2D(i.TEXTURE_2D,0,ve,ee.width,ee.height,0,ue,_e,ee.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Te&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,ve,Le[0].width,Le[0].height,ee.depth);for(let G=0,K=Le.length;G<K;G++)if(fe=Le[G],p.format!==Yt)if(ue!==null)if(Te){if(T)if(p.layerUpdates.size>0){const ce=as(fe.width,fe.height,p.format,p.type);for(const ae of p.layerUpdates){const ye=fe.data.subarray(ae*ce/fe.data.BYTES_PER_ELEMENT,(ae+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ae,fe.width,fe.height,1,ue,ye)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,fe.width,fe.height,ee.depth,ue,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,ve,fe.width,fe.height,ee.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?T&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,fe.width,fe.height,ee.depth,ue,_e,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,ve,fe.width,fe.height,ee.depth,0,ue,_e,fe.data)}else{Te&&Ze&&t.texStorage2D(i.TEXTURE_2D,ie,ve,Le[0].width,Le[0].height);for(let G=0,K=Le.length;G<K;G++)fe=Le[G],p.format!==Yt?ue!==null?Te?T&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,G,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?T&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,fe.width,fe.height,ue,_e,fe.data):t.texImage2D(i.TEXTURE_2D,G,ve,fe.width,fe.height,0,ue,_e,fe.data)}else if(p.isDataArrayTexture)if(Te){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,ve,ee.width,ee.height,ee.depth),T)if(p.layerUpdates.size>0){const G=as(ee.width,ee.height,p.format,p.type);for(const K of p.layerUpdates){const ce=ee.data.subarray(K*G/ee.data.BYTES_PER_ELEMENT,(K+1)*G/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ue,_e,ce)}p.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,_e,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ee.width,ee.height,ee.depth,0,ue,_e,ee.data);else if(p.isData3DTexture)Te?(Ze&&t.texStorage3D(i.TEXTURE_3D,ie,ve,ee.width,ee.height,ee.depth),T&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,_e,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ee.width,ee.height,ee.depth,0,ue,_e,ee.data);else if(p.isFramebufferTexture){if(Ze)if(Te)t.texStorage2D(i.TEXTURE_2D,ie,ve,ee.width,ee.height);else{let G=ee.width,K=ee.height;for(let ce=0;ce<ie;ce++)t.texImage2D(i.TEXTURE_2D,ce,ve,G,K,0,ue,_e,null),G>>=1,K>>=1}}else if(Le.length>0){if(Te&&Ze){const G=Be(Le[0]);t.texStorage2D(i.TEXTURE_2D,ie,ve,G.width,G.height)}for(let G=0,K=Le.length;G<K;G++)fe=Le[G],Te?T&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,ue,_e,fe):t.texImage2D(i.TEXTURE_2D,G,ve,ue,_e,fe);p.generateMipmaps=!1}else if(Te){if(Ze){const G=Be(ee);t.texStorage2D(i.TEXTURE_2D,ie,ve,G.width,G.height)}T&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,_e,ee)}else t.texImage2D(i.TEXTURE_2D,0,ve,ue,_e,ee);f(p)&&g(X),Ee.__version=k.version,p.onUpdate&&p.onUpdate(p)}_.__version=p.version}function te(_,p,R){if(p.image.length!==6)return;const X=je(_,p),Z=p.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+R);const k=n.get(Z);if(Z.version!==k.__version||X===!0){t.activeTexture(i.TEXTURE0+R);const Ee=Ve.getPrimaries(Ve.workingColorSpace),se=p.colorSpace===_n?null:Ve.getPrimaries(p.colorSpace),de=p.colorSpace===_n||Ee===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Fe=p.isCompressedTexture||p.image[0].isCompressedTexture,ee=p.image[0]&&p.image[0].isDataTexture,ue=[];for(let K=0;K<6;K++)!Fe&&!ee?ue[K]=C(p.image[K],!0,A.maxCubemapSize):ue[K]=ee?p.image[K].image:p.image[K],ue[K]=Je(p,ue[K]);const _e=ue[0],ve=r.convert(p.format,p.colorSpace),fe=r.convert(p.type),Le=x(p.internalFormat,ve,fe,p.colorSpace),Te=p.isVideoTexture!==!0,Ze=k.__version===void 0||X===!0,T=Z.dataReady;let ie=H(p,_e);we(i.TEXTURE_CUBE_MAP,p);let G;if(Fe){Te&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Le,_e.width,_e.height);for(let K=0;K<6;K++){G=ue[K].mipmaps;for(let ce=0;ce<G.length;ce++){const ae=G[ce];p.format!==Yt?ve!==null?Te?T&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,ae.width,ae.height,ve,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Le,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,ae.width,ae.height,ve,fe,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Le,ae.width,ae.height,0,ve,fe,ae.data)}}}else{if(G=p.mipmaps,Te&&Ze){G.length>0&&ie++;const K=Be(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Le,K.width,K.height)}for(let K=0;K<6;K++)if(ee){Te?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ue[K].width,ue[K].height,ve,fe,ue[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Le,ue[K].width,ue[K].height,0,ve,fe,ue[K].data);for(let ce=0;ce<G.length;ce++){const ye=G[ce].image[K].image;Te?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,ye.width,ye.height,ve,fe,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Le,ye.width,ye.height,0,ve,fe,ye.data)}}else{Te?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ve,fe,ue[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Le,ve,fe,ue[K]);for(let ce=0;ce<G.length;ce++){const ae=G[ce];Te?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,ve,fe,ae.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Le,ve,fe,ae.image[K])}}}f(p)&&g(i.TEXTURE_CUBE_MAP),k.__version=Z.version,p.onUpdate&&p.onUpdate(p)}_.__version=p.version}function pe(_,p,R,X,Z,k){const Ee=r.convert(R.format,R.colorSpace),se=r.convert(R.type),de=x(R.internalFormat,Ee,se,R.colorSpace),Fe=n.get(p),ee=n.get(R);if(ee.__renderTarget=p,!Fe.__hasExternalTextures){const ue=Math.max(1,p.width>>k),_e=Math.max(1,p.height>>k);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,k,de,ue,_e,p.depth,0,Ee,se,null):t.texImage2D(Z,k,de,ue,_e,0,Ee,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),Pe(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,ee.__webglTexture,0,Re(p)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,ee.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(_,p,R){if(i.bindRenderbuffer(i.RENDERBUFFER,_),p.depthBuffer){const X=p.depthTexture,Z=X&&X.isDepthTexture?X.type:null,k=D(p.stencilBuffer,Z),Ee=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=Re(p);Pe(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,k,p.width,p.height):R?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,k,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,k,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,_)}else{const X=p.textures;for(let Z=0;Z<X.length;Z++){const k=X[Z],Ee=r.convert(k.format,k.colorSpace),se=r.convert(k.type),de=x(k.internalFormat,Ee,se,k.colorSpace),Fe=Re(p);R&&Pe(p)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,de,p.width,p.height):Pe(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,de,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,de,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(_,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(p.depthTexture);X.__renderTarget=p,(!X.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),j(p.depthTexture,0);const Z=X.__webglTexture,k=Re(p);if(p.depthTexture.format===pi)Pe(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(p.depthTexture.format===Ii)Pe(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Se(_){const p=n.get(_),R=_.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==_.depthTexture){const X=_.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),X){const Z=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),p.__depthDisposeCallback=Z}p.__boundDepthTexture=X}if(_.depthTexture&&!p.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");De(p.__webglFramebuffer,_)}else if(R){p.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[X]),p.__webglDepthbuffer[X]===void 0)p.__webglDepthbuffer[X]=i.createRenderbuffer(),oe(p.__webglDepthbuffer[X],_,!1);else{const Z=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=p.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,k)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),oe(p.__webglDepthbuffer,_,!1);else{const X=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(_,p,R){const X=n.get(_);p!==void 0&&pe(X.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),R!==void 0&&Se(_)}function et(_){const p=_.texture,R=n.get(_),X=n.get(p);_.addEventListener("dispose",v);const Z=_.textures,k=_.isWebGLCubeRenderTarget===!0,Ee=Z.length>1;if(Ee||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=p.version,s.memory.textures++),k){R.__webglFramebuffer=[];for(let se=0;se<6;se++)if(p.mipmaps&&p.mipmaps.length>0){R.__webglFramebuffer[se]=[];for(let de=0;de<p.mipmaps.length;de++)R.__webglFramebuffer[se][de]=i.createFramebuffer()}else R.__webglFramebuffer[se]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){R.__webglFramebuffer=[];for(let se=0;se<p.mipmaps.length;se++)R.__webglFramebuffer[se]=i.createFramebuffer()}else R.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let se=0,de=Z.length;se<de;se++){const Fe=n.get(Z[se]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),s.memory.textures++)}if(_.samples>0&&Pe(_)===!1){R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const de=Z[se];R.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,R.__webglColorRenderbuffer[se]);const Fe=r.convert(de.format,de.colorSpace),ee=r.convert(de.type),ue=x(de.internalFormat,Fe,ee,de.colorSpace,_.isXRRenderTarget===!0),_e=Re(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ue,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,R.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(R.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),we(i.TEXTURE_CUBE_MAP,p);for(let se=0;se<6;se++)if(p.mipmaps&&p.mipmaps.length>0)for(let de=0;de<p.mipmaps.length;de++)pe(R.__webglFramebuffer[se][de],_,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else pe(R.__webglFramebuffer[se],_,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);f(p)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let se=0,de=Z.length;se<de;se++){const Fe=Z[se],ee=n.get(Fe);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),we(i.TEXTURE_2D,Fe),pe(R.__webglFramebuffer,_,Fe,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),f(Fe)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(se=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,X.__webglTexture),we(se,p),p.mipmaps&&p.mipmaps.length>0)for(let de=0;de<p.mipmaps.length;de++)pe(R.__webglFramebuffer[de],_,p,i.COLOR_ATTACHMENT0,se,de);else pe(R.__webglFramebuffer,_,p,i.COLOR_ATTACHMENT0,se,0);f(p)&&g(se),t.unbindTexture()}_.depthBuffer&&Se(_)}function Ue(_){const p=_.textures;for(let R=0,X=p.length;R<X;R++){const Z=p[R];if(f(Z)){const k=y(_),Ee=n.get(Z).__webglTexture;t.bindTexture(k,Ee),g(k),t.unbindTexture()}}}const ot=[],S=[];function Tt(_){if(_.samples>0){if(Pe(_)===!1){const p=_.textures,R=_.width,X=_.height;let Z=i.COLOR_BUFFER_BIT;const k=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(_),se=p.length>1;if(se)for(let de=0;de<p.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let de=0;de<p.length;de++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[de]);const Fe=n.get(p[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,R,X,0,0,R,X,Z,i.NEAREST),a===!0&&(ot.length=0,S.length=0,ot.push(i.COLOR_ATTACHMENT0+de),_.depthBuffer&&_.resolveDepthBuffer===!1&&(ot.push(k),S.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,S)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let de=0;de<p.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[de]);const Fe=n.get(p[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&a){const p=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function Re(_){return Math.min(A.maxSamples,_.samples)}function Pe(_){const p=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function Ce(_){const p=s.render.frame;l.get(_)!==p&&(l.set(_,p),_.update())}function Je(_,p){const R=_.colorSpace,X=_.format,Z=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||R!==_i&&R!==_n&&(Ve.getTransfer(R)===qe?(X!==Yt||Z!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),p}function Be(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=Ne,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Pe}function Xh(i,e){function t(n,A=_n){let r;const s=Ve.getTransfer(A);if(n===hn)return i.UNSIGNED_BYTE;if(n===so)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zs)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qs)return i.BYTE;if(n===js)return i.SHORT;if(n===Ui)return i.UNSIGNED_SHORT;if(n===oo)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===Js)return i.ALPHA;if(n===$s)return i.RGB;if(n===Yt)return i.RGBA;if(n===ea)return i.LUMINANCE;if(n===ta)return i.LUMINANCE_ALPHA;if(n===pi)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===na)return i.RED;if(n===co)return i.RED_INTEGER;if(n===ia)return i.RG;if(n===lo)return i.RG_INTEGER;if(n===go)return i.RGBA_INTEGER;if(n===IA||n===_A||n===DA||n===vA)if(s===qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===IA)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_A)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===DA)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vA)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===IA)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_A)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===DA)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vA)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sr||n===Mr||n===yr||n===Or)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tr||n===br||n===wr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tr||n===br)return s===qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nr||n===Hr||n===Rr||n===Pr||n===Lr||n===Ur||n===Fr||n===Gr||n===zr||n===Vr||n===kr||n===Yr||n===Wr||n===Xr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ur)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xA||n===Kr||n===qr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xA)return s===qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Aa||n===jr||n===Zr||n===Jr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xA)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Kh={type:"move"};class ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new BA,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new BA,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new BA,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let A=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const C of e.hand.values()){const f=t.getJointPose(C,n),g=this._getHandJoint(c,C);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}const l=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=l.position.distanceTo(d.position),h=.02,E=.005;c.inputState.pinching&&u>h+E?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-E&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(A=t.getPose(e.targetRaySpace,n),A===null&&r!==null&&(A=r),A!==null&&(o.matrix.fromArray(A.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,A.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(A.linearVelocity)):o.hasLinearVelocity=!1,A.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(A.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kh)))}return o!==null&&(o.visible=A!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new BA;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const qh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jh=`
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

}`;class Zh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const A=new Bt,r=e.properties.get(A);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=A}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mn({vertexShader:qh,fragmentShader:jh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jh extends Si{constructor(e,t){super();const n=this;let A=null,r=1,s=null,o="local-floor",a=1,c=null,l=null,d=null,u=null,h=null,E=null;const C=new Zh,f=t.getContextAttributes();let g=null,y=null;const x=[],D=[],H=new Xe;let b=null;const v=new Ht;v.viewport=new At;const M=new Ht;M.viewport=new At;const Q=[v,M],m=new Bg;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=x[Y];return te===void 0&&(te=new ur,x[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=x[Y];return te===void 0&&(te=new ur,x[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=x[Y];return te===void 0&&(te=new ur,x[Y]=te),te.getHandSpace()};function F(Y){const te=D.indexOf(Y.inputSource);if(te===-1)return;const pe=x[te];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||s),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){A.removeEventListener("select",F),A.removeEventListener("selectstart",F),A.removeEventListener("selectend",F),A.removeEventListener("squeeze",F),A.removeEventListener("squeezestart",F),A.removeEventListener("squeezeend",F),A.removeEventListener("end",q),A.removeEventListener("inputsourceschange",j);for(let Y=0;Y<x.length;Y++){const te=D[Y];te!==null&&(D[Y]=null,x[Y].disconnect(te))}O=null,V=null,C.reset(),e.setRenderTarget(g),h=null,u=null,d=null,A=null,y=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return d},this.getFrame=function(){return E},this.getSession=function(){return A},this.setSession=async function(Y){if(A=Y,A!==null){if(g=e.getRenderTarget(),A.addEventListener("select",F),A.addEventListener("selectstart",F),A.addEventListener("selectend",F),A.addEventListener("squeeze",F),A.addEventListener("squeezestart",F),A.addEventListener("squeezeend",F),A.addEventListener("end",q),A.addEventListener("inputsourceschange",j),f.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(H),A.enabledFeatures!==void 0&&A.enabledFeatures.includes("layers")){let pe=null,oe=null,De=null;f.depth&&(De=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=f.stencil?Ii:pi,oe=f.stencil?Qi:Yn);const Se={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};d=new XRWebGLBinding(A,t),u=d.createProjectionLayer(Se),A.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Wn(u.textureWidth,u.textureHeight,{format:Yt,type:hn,depthTexture:new Ea(u.textureWidth,u.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const pe={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(A,t,pe),A.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Wn(h.framebufferWidth,h.framebufferHeight,{format:Yt,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}y.isXRRenderTarget=!0,this.setFoveation(a),c=null,s=await A.requestReferenceSpace(o),je.setContext(A),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(A!==null)return A.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function j(Y){for(let te=0;te<Y.removed.length;te++){const pe=Y.removed[te],oe=D.indexOf(pe);oe>=0&&(D[oe]=null,x[oe].disconnect(pe))}for(let te=0;te<Y.added.length;te++){const pe=Y.added[te];let oe=D.indexOf(pe);if(oe===-1){for(let Se=0;Se<x.length;Se++)if(Se>=D.length){D.push(pe),oe=Se;break}else if(D[Se]===null){D[Se]=pe,oe=Se;break}if(oe===-1)break}const De=x[oe];De&&De.connect(pe)}}const W=new U,J=new U;function z(Y,te,pe){W.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);const oe=W.distanceTo(J),De=te.projectionMatrix.elements,Se=pe.projectionMatrix.elements,Ne=De[14]/(De[10]-1),et=De[14]/(De[10]+1),Ue=(De[9]+1)/De[5],ot=(De[9]-1)/De[5],S=(De[8]-1)/De[0],Tt=(Se[8]+1)/Se[0],Re=Ne*S,Pe=Ne*Tt,Ce=oe/(-S+Tt),Je=Ce*-S;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Je),Y.translateZ(Ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),De[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Be=Ne+Ce,_=et+Ce,p=Re-Je,R=Pe+(oe-Je),X=Ue*et/_*Be,Z=ot*et/_*Be;Y.projectionMatrix.makePerspective(p,R,X,Z,Be,_),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(A===null)return;let te=Y.near,pe=Y.far;C.texture!==null&&(C.depthNear>0&&(te=C.depthNear),C.depthFar>0&&(pe=C.depthFar)),m.near=M.near=v.near=te,m.far=M.far=v.far=pe,(O!==m.near||V!==m.far)&&(A.updateRenderState({depthNear:m.near,depthFar:m.far}),O=m.near,V=m.far),v.layers.mask=Y.layers.mask|2,M.layers.mask=Y.layers.mask|4,m.layers.mask=v.layers.mask|M.layers.mask;const oe=Y.parent,De=m.cameras;re(m,oe);for(let Se=0;Se<De.length;Se++)re(De[Se],oe);De.length===2?z(m,v,M):m.projectionMatrix.copy(v.projectionMatrix),ge(Y,m,oe)};function ge(Y,te,pe){pe===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$r*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(u===null&&h===null))return a},this.setFoveation=function(Y){a=Y,u!==null&&(u.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(m)};let me=null;function we(Y,te){if(l=te.getViewerPose(c||s),E=te,l!==null){const pe=l.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let oe=!1;pe.length!==m.cameras.length&&(m.cameras.length=0,oe=!0);for(let Se=0;Se<pe.length;Se++){const Ne=pe[Se];let et=null;if(h!==null)et=h.getViewport(Ne);else{const ot=d.getViewSubImage(u,Ne);et=ot.viewport,Se===0&&(e.setRenderTargetTextures(y,ot.colorTexture,u.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(y))}let Ue=Q[Se];Ue===void 0&&(Ue=new Ht,Ue.layers.enable(Se),Ue.viewport=new At,Q[Se]=Ue),Ue.matrix.fromArray(Ne.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ne.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(et.x,et.y,et.width,et.height),Se===0&&(m.matrix.copy(Ue.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),oe===!0&&m.cameras.push(Ue)}const De=A.enabledFeatures;if(De&&De.includes("depth-sensing")){const Se=d.getDepthInformation(pe[0]);Se&&Se.isValid&&Se.texture&&C.init(e,Se,A.renderState)}}for(let pe=0;pe<x.length;pe++){const oe=D[pe],De=x[pe];oe!==null&&De!==void 0&&De.update(oe,te,c||s)}me&&me(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),E=null}const je=new Ca;je.setAnimationLoop(we),this.setAnimationLoop=function(Y){me=Y},this.dispose=function(){}}}const Rn=new Zt,$h=new rt;function ep(i,e){function t(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function n(f,g){g.color.getRGB(f.fogColor.value,fa(i)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function A(f,g,y,x,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(f,g):g.isMeshToonMaterial?(r(f,g),d(f,g)):g.isMeshPhongMaterial?(r(f,g),l(f,g)):g.isMeshStandardMaterial?(r(f,g),u(f,g),g.isMeshPhysicalMaterial&&h(f,g,D)):g.isMeshMatcapMaterial?(r(f,g),E(f,g)):g.isMeshDepthMaterial?r(f,g):g.isMeshDistanceMaterial?(r(f,g),C(f,g)):g.isMeshNormalMaterial?r(f,g):g.isLineBasicMaterial?(s(f,g),g.isLineDashedMaterial&&o(f,g)):g.isPointsMaterial?a(f,g,y,x):g.isSpriteMaterial?c(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,t(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,t(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===xt&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,t(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===xt&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,t(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,t(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);const y=e.get(g),x=y.envMap,D=y.envMapRotation;x&&(f.envMap.value=x,Rn.copy(D),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),f.envMapRotation.value.setFromMatrix4($h.makeRotationFromEuler(Rn)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,f.aoMapTransform))}function s(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,t(g.map,f.mapTransform))}function o(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function a(f,g,y,x){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*y,f.scale.value=x*.5,g.map&&(f.map.value=g.map,t(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function c(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,t(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function l(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function d(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function u(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function h(f,g,y){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xt&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,f.specularIntensityMapTransform))}function E(f,g){g.matcap&&(f.matcap.value=g.matcap)}function C(f,g){const y=e.get(g).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:A}}function tp(i,e,t,n){let A={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(y,x){const D=x.program;n.uniformBlockBinding(y,D)}function c(y,x){let D=A[y.id];D===void 0&&(E(y),D=l(y),A[y.id]=D,y.addEventListener("dispose",f));const H=x.program;n.updateUBOMapping(y,H);const b=e.render.frame;r[y.id]!==b&&(u(y),r[y.id]=b)}function l(y){const x=d();y.__bindingPointIndex=x;const D=i.createBuffer(),H=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,H,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,D),D}function d(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=A[y.id],D=y.uniforms,H=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,v=D.length;b<v;b++){const M=Array.isArray(D[b])?D[b]:[D[b]];for(let Q=0,m=M.length;Q<m;Q++){const O=M[Q];if(h(O,b,Q,H)===!0){const V=O.__offset,F=Array.isArray(O.value)?O.value:[O.value];let q=0;for(let j=0;j<F.length;j++){const W=F[j],J=C(W);typeof W=="number"||typeof W=="boolean"?(O.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,V+q,O.__data)):W.isMatrix3?(O.__data[0]=W.elements[0],O.__data[1]=W.elements[1],O.__data[2]=W.elements[2],O.__data[3]=0,O.__data[4]=W.elements[3],O.__data[5]=W.elements[4],O.__data[6]=W.elements[5],O.__data[7]=0,O.__data[8]=W.elements[6],O.__data[9]=W.elements[7],O.__data[10]=W.elements[8],O.__data[11]=0):(W.toArray(O.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,x,D,H){const b=y.value,v=x+"_"+D;if(H[v]===void 0)return typeof b=="number"||typeof b=="boolean"?H[v]=b:H[v]=b.clone(),!0;{const M=H[v];if(typeof b=="number"||typeof b=="boolean"){if(M!==b)return H[v]=b,!0}else if(M.equals(b)===!1)return M.copy(b),!0}return!1}function E(y){const x=y.uniforms;let D=0;const H=16;for(let v=0,M=x.length;v<M;v++){const Q=Array.isArray(x[v])?x[v]:[x[v]];for(let m=0,O=Q.length;m<O;m++){const V=Q[m],F=Array.isArray(V.value)?V.value:[V.value];for(let q=0,j=F.length;q<j;q++){const W=F[q],J=C(W),z=D%H,re=z%J.boundary,ge=z+re;D+=re,ge!==0&&H-ge<J.storage&&(D+=H-ge),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=D,D+=J.storage}}}const b=D%H;return b>0&&(D+=H-b),y.__size=D,y.__cache={},this}function C(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function f(y){const x=y.target;x.removeEventListener("dispose",f);const D=s.indexOf(x.__bindingPointIndex);s.splice(D,1),i.deleteBuffer(A[x.id]),delete A[x.id],delete r[x.id]}function g(){for(const y in A)i.deleteBuffer(A[y]);s=[],A={},r={}}return{bind:a,update:c,dispose:g}}class np{constructor(e={}){const{canvas:t=Tl(),context:n=null,depth:A=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=s;const E=new Uint32Array(4),C=new Int32Array(4);let f=null,g=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this.toneMapping=vn,this.toneMappingExposure=1;const D=this;let H=!1,b=0,v=0,M=null,Q=-1,m=null;const O=new At,V=new At;let F=null;const q=new ke(0);let j=0,W=t.width,J=t.height,z=1,re=null,ge=null;const me=new At(0,0,W,J),we=new At(0,0,W,J);let je=!1;const Y=new fo;let te=!1,pe=!1;this.transmissionResolutionScale=1;const oe=new rt,De=new rt,Se=new U,Ne=new At,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function ot(){return M===null?z:1}let S=n;function Tt(B,w){return t.getContext(B,w)}try{const B={alpha:!0,depth:A,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ro}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",ae,!1),S===null){const w="webgl2";if(S=Tt(w,B),S===null)throw Tt(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let Re,Pe,Ce,Je,Be,_,p,R,X,Z,k,Ee,se,de,Fe,ee,ue,_e,ve,fe,Le,Te,Ze,T;function ie(){Re=new gf(S),Re.init(),Te=new Xh(S,Re),Pe=new rf(S,Re,e,Te),Ce=new Yh(S,Re),Pe.reverseDepthBuffer&&u&&Ce.buffers.depth.setReversed(!0),Je=new ff(S),Be=new bh,_=new Wh(S,Re,Ce,Be,Pe,Te,Je),p=new sf(D),R=new lf(D),X=new Cg(S),Ze=new nf(S,X),Z=new df(S,X,Je,Ze),k=new pf(S,Z,X,Je),ve=new hf(S,Pe,_),ee=new of(Be),Ee=new Th(D,p,R,Re,Pe,Ze,ee),se=new ep(D,Be),de=new Nh,Fe=new Fh(Re),_e=new tf(D,p,R,Ce,k,h,a),ue=new Vh(D,k,Pe),T=new tp(S,Je,Pe,Ce),fe=new Af(S,Re,Je),Le=new uf(S,Re,Je),Je.programs=Ee.programs,D.capabilities=Pe,D.extensions=Re,D.properties=Be,D.renderLists=de,D.shadowMap=ue,D.state=Ce,D.info=Je}ie();const G=new Jh(D,S);this.xr=G,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const B=Re.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=Re.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(B){B!==void 0&&(z=B,this.setSize(W,J,!1))},this.getSize=function(B){return B.set(W,J)},this.setSize=function(B,w,P=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=B,J=w,t.width=Math.floor(B*z),t.height=Math.floor(w*z),P===!0&&(t.style.width=B+"px",t.style.height=w+"px"),this.setViewport(0,0,B,w)},this.getDrawingBufferSize=function(B){return B.set(W*z,J*z).floor()},this.setDrawingBufferSize=function(B,w,P){W=B,J=w,z=P,t.width=Math.floor(B*P),t.height=Math.floor(w*P),this.setViewport(0,0,B,w)},this.getCurrentViewport=function(B){return B.copy(O)},this.getViewport=function(B){return B.copy(me)},this.setViewport=function(B,w,P,L){B.isVector4?me.set(B.x,B.y,B.z,B.w):me.set(B,w,P,L),Ce.viewport(O.copy(me).multiplyScalar(z).round())},this.getScissor=function(B){return B.copy(we)},this.setScissor=function(B,w,P,L){B.isVector4?we.set(B.x,B.y,B.z,B.w):we.set(B,w,P,L),Ce.scissor(V.copy(we).multiplyScalar(z).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(B){Ce.setScissorTest(je=B)},this.setOpaqueSort=function(B){re=B},this.setTransparentSort=function(B){ge=B},this.getClearColor=function(B){return B.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(B=!0,w=!0,P=!0){let L=0;if(B){let N=!1;if(M!==null){const $=M.texture.format;N=$===go||$===lo||$===co}if(N){const $=M.texture.type,Ae=$===hn||$===Yn||$===Ui||$===Qi||$===so||$===ao,le=_e.getClearColor(),he=_e.getClearAlpha(),xe=le.r,Me=le.g,Qe=le.b;Ae?(E[0]=xe,E[1]=Me,E[2]=Qe,E[3]=he,S.clearBufferuiv(S.COLOR,0,E)):(C[0]=xe,C[1]=Me,C[2]=Qe,C[3]=he,S.clearBufferiv(S.COLOR,0,C))}else L|=S.COLOR_BUFFER_BIT}w&&(L|=S.DEPTH_BUFFER_BIT),P&&(L|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),_e.dispose(),de.dispose(),Fe.dispose(),Be.dispose(),p.dispose(),R.dispose(),k.dispose(),Ze.dispose(),T.dispose(),Ee.dispose(),G.dispose(),G.removeEventListener("sessionstart",Do),G.removeEventListener("sessionend",vo),yn.stop()};function K(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const B=Je.autoReset,w=ue.enabled,P=ue.autoUpdate,L=ue.needsUpdate,N=ue.type;ie(),Je.autoReset=B,ue.enabled=w,ue.autoUpdate=P,ue.needsUpdate=L,ue.type=N}function ae(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function ye(B){const w=B.target;w.removeEventListener("dispose",ye),nt(w)}function nt(B){ft(B),Be.remove(B)}function ft(B){const w=Be.get(B).programs;w!==void 0&&(w.forEach(function(P){Ee.releaseProgram(P)}),B.isShaderMaterial&&Ee.releaseShaderCache(B))}this.renderBufferDirect=function(B,w,P,L,N,$){w===null&&(w=et);const Ae=N.isMesh&&N.matrixWorld.determinant()<0,le=ba(B,w,P,L,N);Ce.setMaterial(L,Ae);let he=P.index,xe=1;if(L.wireframe===!0){if(he=Z.getWireframeAttribute(P),he===void 0)return;xe=2}const Me=P.drawRange,Qe=P.attributes.position;let Ge=Me.start*xe,Ye=(Me.start+Me.count)*xe;$!==null&&(Ge=Math.max(Ge,$.start*xe),Ye=Math.min(Ye,($.start+$.count)*xe)),he!==null?(Ge=Math.max(Ge,0),Ye=Math.min(Ye,he.count)):Qe!=null&&(Ge=Math.max(Ge,0),Ye=Math.min(Ye,Qe.count));const st=Ye-Ge;if(st<0||st===1/0)return;Ze.setup(N,L,le,P,he);let it,ze=fe;if(he!==null&&(it=X.get(he),ze=Le,ze.setIndex(it)),N.isMesh)L.wireframe===!0?(Ce.setLineWidth(L.wireframeLinewidth*ot()),ze.setMode(S.LINES)):ze.setMode(S.TRIANGLES);else if(N.isLine){let Ie=L.linewidth;Ie===void 0&&(Ie=1),Ce.setLineWidth(Ie*ot()),N.isLineSegments?ze.setMode(S.LINES):N.isLineLoop?ze.setMode(S.LINE_LOOP):ze.setMode(S.LINE_STRIP)}else N.isPoints?ze.setMode(S.POINTS):N.isSprite&&ze.setMode(S.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ze.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))ze.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ie=N._multiDrawStarts,dt=N._multiDrawCounts,We=N._multiDrawCount,Lt=he?X.get(he).bytesPerElement:1,Zn=Be.get(L).currentProgram.getUniforms();for(let St=0;St<We;St++)Zn.setValue(S,"_gl_DrawID",St),ze.render(Ie[St]/Lt,dt[St])}else if(N.isInstancedMesh)ze.renderInstances(Ge,st,N.count);else if(P.isInstancedBufferGeometry){const Ie=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,dt=Math.min(P.instanceCount,Ie);ze.renderInstances(Ge,st,dt)}else ze.render(Ge,st)};function Ke(B,w,P){B.transparent===!0&&B.side===zt&&B.forceSinglePass===!1?(B.side=xt,B.needsUpdate=!0,Ji(B,w,P),B.side=Sn,B.needsUpdate=!0,Ji(B,w,P),B.side=zt):Ji(B,w,P)}this.compile=function(B,w,P=null){P===null&&(P=B),g=Fe.get(P),g.init(w),x.push(g),P.traverseVisible(function(N){N.isLight&&N.layers.test(w.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),B!==P&&B.traverseVisible(function(N){N.isLight&&N.layers.test(w.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights();const L=new Set;return B.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const $=N.material;if($)if(Array.isArray($))for(let Ae=0;Ae<$.length;Ae++){const le=$[Ae];Ke(le,P,N),L.add(le)}else Ke($,P,N),L.add($)}),x.pop(),g=null,L},this.compileAsync=function(B,w,P=null){const L=this.compile(B,w,P);return new Promise(N=>{function $(){if(L.forEach(function(Ae){Be.get(Ae).currentProgram.isReady()&&L.delete(Ae)}),L.size===0){N(B);return}setTimeout($,10)}Re.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Pt=null;function $t(B){Pt&&Pt(B)}function Do(){yn.stop()}function vo(){yn.start()}const yn=new Ca;yn.setAnimationLoop($t),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(B){Pt=B,G.setAnimationLoop(B),B===null?yn.stop():yn.start()},G.addEventListener("sessionstart",Do),G.addEventListener("sessionend",vo),this.render=function(B,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(w),w=G.getCamera()),B.isScene===!0&&B.onBeforeRender(D,B,w,M),g=Fe.get(B,x.length),g.init(w),x.push(g),De.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),Y.setFromProjectionMatrix(De),pe=this.localClippingEnabled,te=ee.init(this.clippingPlanes,pe),f=de.get(B,y.length),f.init(),y.push(f),G.enabled===!0&&G.isPresenting===!0){const $=D.xr.getDepthSensingMesh();$!==null&&NA($,w,-1/0,D.sortObjects)}NA(B,w,0,D.sortObjects),f.finish(),D.sortObjects===!0&&f.sort(re,ge),Ue=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ue&&_e.addToRenderList(f,B),this.info.render.frame++,te===!0&&ee.beginShadows();const P=g.state.shadowsArray;ue.render(P,B,w),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=f.opaque,N=f.transmissive;if(g.setupLights(),w.isArrayCamera){const $=w.cameras;if(N.length>0)for(let Ae=0,le=$.length;Ae<le;Ae++){const he=$[Ae];So(L,N,B,he)}Ue&&_e.render(B);for(let Ae=0,le=$.length;Ae<le;Ae++){const he=$[Ae];xo(f,B,he,he.viewport)}}else N.length>0&&So(L,N,B,w),Ue&&_e.render(B),xo(f,B,w);M!==null&&v===0&&(_.updateMultisampleRenderTarget(M),_.updateRenderTargetMipmap(M)),B.isScene===!0&&B.onAfterRender(D,B,w),Ze.resetDefaultState(),Q=-1,m=null,x.pop(),x.length>0?(g=x[x.length-1],te===!0&&ee.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?f=y[y.length-1]:f=null};function NA(B,w,P,L){if(B.visible===!1)return;if(B.layers.test(w.layers)){if(B.isGroup)P=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(w);else if(B.isLight)g.pushLight(B),B.castShadow&&g.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||Y.intersectsSprite(B)){L&&Ne.setFromMatrixPosition(B.matrixWorld).applyMatrix4(De);const Ae=k.update(B),le=B.material;le.visible&&f.push(B,Ae,le,P,Ne.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||Y.intersectsObject(B))){const Ae=k.update(B),le=B.material;if(L&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Ne.copy(B.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ne.copy(Ae.boundingSphere.center)),Ne.applyMatrix4(B.matrixWorld).applyMatrix4(De)),Array.isArray(le)){const he=Ae.groups;for(let xe=0,Me=he.length;xe<Me;xe++){const Qe=he[xe],Ge=le[Qe.materialIndex];Ge&&Ge.visible&&f.push(B,Ae,Ge,P,Ne.z,Qe)}}else le.visible&&f.push(B,Ae,le,P,Ne.z,null)}}const $=B.children;for(let Ae=0,le=$.length;Ae<le;Ae++)NA($[Ae],w,P,L)}function xo(B,w,P,L){const N=B.opaque,$=B.transmissive,Ae=B.transparent;g.setupLightsView(P),te===!0&&ee.setGlobalState(D.clippingPlanes,P),L&&Ce.viewport(O.copy(L)),N.length>0&&Zi(N,w,P),$.length>0&&Zi($,w,P),Ae.length>0&&Zi(Ae,w,P),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function So(B,w,P,L){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[L.id]===void 0&&(g.state.transmissionRenderTarget[L.id]=new Wn(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?Wi:hn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const $=g.state.transmissionRenderTarget[L.id],Ae=L.viewport||O;$.setSize(Ae.z*D.transmissionResolutionScale,Ae.w*D.transmissionResolutionScale);const le=D.getRenderTarget();D.setRenderTarget($),D.getClearColor(q),j=D.getClearAlpha(),j<1&&D.setClearColor(16777215,.5),D.clear(),Ue&&_e.render(P);const he=D.toneMapping;D.toneMapping=vn;const xe=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),g.setupLightsView(L),te===!0&&ee.setGlobalState(D.clippingPlanes,L),Zi(B,P,L),_.updateMultisampleRenderTarget($),_.updateRenderTargetMipmap($),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Qe=0,Ge=w.length;Qe<Ge;Qe++){const Ye=w[Qe],st=Ye.object,it=Ye.geometry,ze=Ye.material,Ie=Ye.group;if(ze.side===zt&&st.layers.test(L.layers)){const dt=ze.side;ze.side=xt,ze.needsUpdate=!0,Mo(st,P,L,it,ze,Ie),ze.side=dt,ze.needsUpdate=!0,Me=!0}}Me===!0&&(_.updateMultisampleRenderTarget($),_.updateRenderTargetMipmap($))}D.setRenderTarget(le),D.setClearColor(q,j),xe!==void 0&&(L.viewport=xe),D.toneMapping=he}function Zi(B,w,P){const L=w.isScene===!0?w.overrideMaterial:null;for(let N=0,$=B.length;N<$;N++){const Ae=B[N],le=Ae.object,he=Ae.geometry,xe=L===null?Ae.material:L,Me=Ae.group;le.layers.test(P.layers)&&Mo(le,w,P,he,xe,Me)}}function Mo(B,w,P,L,N,$){B.onBeforeRender(D,w,P,L,N,$),B.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),N.onBeforeRender(D,w,P,L,B,$),N.transparent===!0&&N.side===zt&&N.forceSinglePass===!1?(N.side=xt,N.needsUpdate=!0,D.renderBufferDirect(P,w,L,N,B,$),N.side=Sn,N.needsUpdate=!0,D.renderBufferDirect(P,w,L,N,B,$),N.side=zt):D.renderBufferDirect(P,w,L,N,B,$),B.onAfterRender(D,w,P,L,N,$)}function Ji(B,w,P){w.isScene!==!0&&(w=et);const L=Be.get(B),N=g.state.lights,$=g.state.shadowsArray,Ae=N.state.version,le=Ee.getParameters(B,N.state,$,w,P),he=Ee.getProgramCacheKey(le);let xe=L.programs;L.environment=B.isMeshStandardMaterial?w.environment:null,L.fog=w.fog,L.envMap=(B.isMeshStandardMaterial?R:p).get(B.envMap||L.environment),L.envMapRotation=L.environment!==null&&B.envMap===null?w.environmentRotation:B.envMapRotation,xe===void 0&&(B.addEventListener("dispose",ye),xe=new Map,L.programs=xe);let Me=xe.get(he);if(Me!==void 0){if(L.currentProgram===Me&&L.lightsStateVersion===Ae)return Oo(B,le),Me}else le.uniforms=Ee.getUniforms(B),B.onBeforeCompile(le,D),Me=Ee.acquireProgram(le,he),xe.set(he,Me),L.uniforms=le.uniforms;const Qe=L.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Qe.clippingPlanes=ee.uniform),Oo(B,le),L.needsLights=Na(B),L.lightsStateVersion=Ae,L.needsLights&&(Qe.ambientLightColor.value=N.state.ambient,Qe.lightProbe.value=N.state.probe,Qe.directionalLights.value=N.state.directional,Qe.directionalLightShadows.value=N.state.directionalShadow,Qe.spotLights.value=N.state.spot,Qe.spotLightShadows.value=N.state.spotShadow,Qe.rectAreaLights.value=N.state.rectArea,Qe.ltc_1.value=N.state.rectAreaLTC1,Qe.ltc_2.value=N.state.rectAreaLTC2,Qe.pointLights.value=N.state.point,Qe.pointLightShadows.value=N.state.pointShadow,Qe.hemisphereLights.value=N.state.hemi,Qe.directionalShadowMap.value=N.state.directionalShadowMap,Qe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Qe.spotShadowMap.value=N.state.spotShadowMap,Qe.spotLightMatrix.value=N.state.spotLightMatrix,Qe.spotLightMap.value=N.state.spotLightMap,Qe.pointShadowMap.value=N.state.pointShadowMap,Qe.pointShadowMatrix.value=N.state.pointShadowMatrix),L.currentProgram=Me,L.uniformsList=null,Me}function yo(B){if(B.uniformsList===null){const w=B.currentProgram.getUniforms();B.uniformsList=SA.seqWithValue(w.seq,B.uniforms)}return B.uniformsList}function Oo(B,w){const P=Be.get(B);P.outputColorSpace=w.outputColorSpace,P.batching=w.batching,P.batchingColor=w.batchingColor,P.instancing=w.instancing,P.instancingColor=w.instancingColor,P.instancingMorph=w.instancingMorph,P.skinning=w.skinning,P.morphTargets=w.morphTargets,P.morphNormals=w.morphNormals,P.morphColors=w.morphColors,P.morphTargetsCount=w.morphTargetsCount,P.numClippingPlanes=w.numClippingPlanes,P.numIntersection=w.numClipIntersection,P.vertexAlphas=w.vertexAlphas,P.vertexTangents=w.vertexTangents,P.toneMapping=w.toneMapping}function ba(B,w,P,L,N){w.isScene!==!0&&(w=et),_.resetTextureUnits();const $=w.fog,Ae=L.isMeshStandardMaterial?w.environment:null,le=M===null?D.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:_i,he=(L.isMeshStandardMaterial?R:p).get(L.envMap||Ae),xe=L.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,Me=!!P.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Qe=!!P.morphAttributes.position,Ge=!!P.morphAttributes.normal,Ye=!!P.morphAttributes.color;let st=vn;L.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(st=D.toneMapping);const it=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ze=it!==void 0?it.length:0,Ie=Be.get(L),dt=g.state.lights;if(te===!0&&(pe===!0||B!==m)){const Ct=B===m&&L.id===Q;ee.setState(L,B,Ct)}let We=!1;L.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==dt.state.version||Ie.outputColorSpace!==le||N.isBatchedMesh&&Ie.batching===!1||!N.isBatchedMesh&&Ie.batching===!0||N.isBatchedMesh&&Ie.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ie.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ie.instancing===!1||!N.isInstancedMesh&&Ie.instancing===!0||N.isSkinnedMesh&&Ie.skinning===!1||!N.isSkinnedMesh&&Ie.skinning===!0||N.isInstancedMesh&&Ie.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ie.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ie.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ie.instancingMorph===!1&&N.morphTexture!==null||Ie.envMap!==he||L.fog===!0&&Ie.fog!==$||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ee.numPlanes||Ie.numIntersection!==ee.numIntersection)||Ie.vertexAlphas!==xe||Ie.vertexTangents!==Me||Ie.morphTargets!==Qe||Ie.morphNormals!==Ge||Ie.morphColors!==Ye||Ie.toneMapping!==st||Ie.morphTargetsCount!==ze)&&(We=!0):(We=!0,Ie.__version=L.version);let Lt=Ie.currentProgram;We===!0&&(Lt=Ji(L,w,N));let Zn=!1,St=!1,bi=!1;const $e=Lt.getUniforms(),bt=Ie.uniforms;if(Ce.useProgram(Lt.program)&&(Zn=!0,St=!0,bi=!0),L.id!==Q&&(Q=L.id,St=!0),Zn||m!==B){Ce.buffers.depth.getReversed()?(oe.copy(B.projectionMatrix),wl(oe),Nl(oe),$e.setValue(S,"projectionMatrix",oe)):$e.setValue(S,"projectionMatrix",B.projectionMatrix),$e.setValue(S,"viewMatrix",B.matrixWorldInverse);const It=$e.map.cameraPosition;It!==void 0&&It.setValue(S,Se.setFromMatrixPosition(B.matrixWorld)),Pe.logarithmicDepthBuffer&&$e.setValue(S,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&$e.setValue(S,"isOrthographic",B.isOrthographicCamera===!0),m!==B&&(m=B,St=!0,bi=!0)}if(N.isSkinnedMesh){$e.setOptional(S,N,"bindMatrix"),$e.setOptional(S,N,"bindMatrixInverse");const Ct=N.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),$e.setValue(S,"boneTexture",Ct.boneTexture,_))}N.isBatchedMesh&&($e.setOptional(S,N,"batchingTexture"),$e.setValue(S,"batchingTexture",N._matricesTexture,_),$e.setOptional(S,N,"batchingIdTexture"),$e.setValue(S,"batchingIdTexture",N._indirectTexture,_),$e.setOptional(S,N,"batchingColorTexture"),N._colorsTexture!==null&&$e.setValue(S,"batchingColorTexture",N._colorsTexture,_));const wt=P.morphAttributes;if((wt.position!==void 0||wt.normal!==void 0||wt.color!==void 0)&&ve.update(N,P,Lt),(St||Ie.receiveShadow!==N.receiveShadow)&&(Ie.receiveShadow=N.receiveShadow,$e.setValue(S,"receiveShadow",N.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(bt.envMap.value=he,bt.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&w.environment!==null&&(bt.envMapIntensity.value=w.environmentIntensity),St&&($e.setValue(S,"toneMappingExposure",D.toneMappingExposure),Ie.needsLights&&wa(bt,bi),$&&L.fog===!0&&se.refreshFogUniforms(bt,$),se.refreshMaterialUniforms(bt,L,z,J,g.state.transmissionRenderTarget[B.id]),SA.upload(S,yo(Ie),bt,_)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(SA.upload(S,yo(Ie),bt,_),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&$e.setValue(S,"center",N.center),$e.setValue(S,"modelViewMatrix",N.modelViewMatrix),$e.setValue(S,"normalMatrix",N.normalMatrix),$e.setValue(S,"modelMatrix",N.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const Ct=L.uniformsGroups;for(let It=0,HA=Ct.length;It<HA;It++){const On=Ct[It];T.update(On,Lt),T.bind(On,Lt)}}return Lt}function wa(B,w){B.ambientLightColor.needsUpdate=w,B.lightProbe.needsUpdate=w,B.directionalLights.needsUpdate=w,B.directionalLightShadows.needsUpdate=w,B.pointLights.needsUpdate=w,B.pointLightShadows.needsUpdate=w,B.spotLights.needsUpdate=w,B.spotLightShadows.needsUpdate=w,B.rectAreaLights.needsUpdate=w,B.hemisphereLights.needsUpdate=w}function Na(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(B,w,P){Be.get(B.texture).__webglTexture=w,Be.get(B.depthTexture).__webglTexture=P;const L=Be.get(B);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=P===void 0,L.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(B,w){const P=Be.get(B);P.__webglFramebuffer=w,P.__useDefaultFramebuffer=w===void 0};const Ha=S.createFramebuffer();this.setRenderTarget=function(B,w=0,P=0){M=B,b=w,v=P;let L=!0,N=null,$=!1,Ae=!1;if(B){const he=Be.get(B);if(he.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(S.FRAMEBUFFER,null),L=!1;else if(he.__webglFramebuffer===void 0)_.setupRenderTarget(B);else if(he.__hasExternalTextures)_.rebindTextures(B,Be.get(B.texture).__webglTexture,Be.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){const Qe=B.depthTexture;if(he.__boundDepthTexture!==Qe){if(Qe!==null&&Be.has(Qe)&&(B.width!==Qe.image.width||B.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(B)}}const xe=B.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(Ae=!0);const Me=Be.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(Me[w])?N=Me[w][P]:N=Me[w],$=!0):B.samples>0&&_.useMultisampledRTT(B)===!1?N=Be.get(B).__webglMultisampledFramebuffer:Array.isArray(Me)?N=Me[P]:N=Me,O.copy(B.viewport),V.copy(B.scissor),F=B.scissorTest}else O.copy(me).multiplyScalar(z).floor(),V.copy(we).multiplyScalar(z).floor(),F=je;if(P!==0&&(N=Ha),Ce.bindFramebuffer(S.FRAMEBUFFER,N)&&L&&Ce.drawBuffers(B,N),Ce.viewport(O),Ce.scissor(V),Ce.setScissorTest(F),$){const he=Be.get(B.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+w,he.__webglTexture,P)}else if(Ae){const he=Be.get(B.texture),xe=w;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,he.__webglTexture,P,xe)}else if(B!==null&&P!==0){const he=Be.get(B.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,he.__webglTexture,P)}Q=-1},this.readRenderTargetPixels=function(B,w,P,L,N,$,Ae){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=Be.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ae!==void 0&&(le=le[Ae]),le){Ce.bindFramebuffer(S.FRAMEBUFFER,le);try{const he=B.texture,xe=he.format,Me=he.type;if(!Pe.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=B.width-L&&P>=0&&P<=B.height-N&&S.readPixels(w,P,L,N,Te.convert(xe),Te.convert(Me),$)}finally{const he=M!==null?Be.get(M).__webglFramebuffer:null;Ce.bindFramebuffer(S.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(B,w,P,L,N,$,Ae){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let le=Be.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ae!==void 0&&(le=le[Ae]),le){const he=B.texture,xe=he.format,Me=he.type;if(!Pe.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(w>=0&&w<=B.width-L&&P>=0&&P<=B.height-N){Ce.bindFramebuffer(S.FRAMEBUFFER,le);const Qe=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Qe),S.bufferData(S.PIXEL_PACK_BUFFER,$.byteLength,S.STREAM_READ),S.readPixels(w,P,L,N,Te.convert(xe),Te.convert(Me),0);const Ge=M!==null?Be.get(M).__webglFramebuffer:null;Ce.bindFramebuffer(S.FRAMEBUFFER,Ge);const Ye=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await bl(S,Ye,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Qe),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,$),S.deleteBuffer(Qe),S.deleteSync(Ye),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(B,w=null,P=0){B.isTexture!==!0&&(ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),w=arguments[0]||null,B=arguments[1]);const L=Math.pow(2,-P),N=Math.floor(B.image.width*L),$=Math.floor(B.image.height*L),Ae=w!==null?w.x:0,le=w!==null?w.y:0;_.setTexture2D(B,0),S.copyTexSubImage2D(S.TEXTURE_2D,P,0,0,Ae,le,N,$),Ce.unbindTexture()};const Ra=S.createFramebuffer(),Pa=S.createFramebuffer();this.copyTextureToTexture=function(B,w,P=null,L=null,N=0,$=null){B.isTexture!==!0&&(ui("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,B=arguments[1],w=arguments[2],$=arguments[3]||0,P=null),$===null&&(N!==0?(ui("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=N,N=0):$=0);let Ae,le,he,xe,Me,Qe,Ge,Ye,st;const it=B.isCompressedTexture?B.mipmaps[$]:B.image;if(P!==null)Ae=P.max.x-P.min.x,le=P.max.y-P.min.y,he=P.isBox3?P.max.z-P.min.z:1,xe=P.min.x,Me=P.min.y,Qe=P.isBox3?P.min.z:0;else{const wt=Math.pow(2,-N);Ae=Math.floor(it.width*wt),le=Math.floor(it.height*wt),B.isDataArrayTexture?he=it.depth:B.isData3DTexture?he=Math.floor(it.depth*wt):he=1,xe=0,Me=0,Qe=0}L!==null?(Ge=L.x,Ye=L.y,st=L.z):(Ge=0,Ye=0,st=0);const ze=Te.convert(w.format),Ie=Te.convert(w.type);let dt;w.isData3DTexture?(_.setTexture3D(w,0),dt=S.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(_.setTexture2DArray(w,0),dt=S.TEXTURE_2D_ARRAY):(_.setTexture2D(w,0),dt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,w.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,w.unpackAlignment);const We=S.getParameter(S.UNPACK_ROW_LENGTH),Lt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Zn=S.getParameter(S.UNPACK_SKIP_PIXELS),St=S.getParameter(S.UNPACK_SKIP_ROWS),bi=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,it.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,it.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,xe),S.pixelStorei(S.UNPACK_SKIP_ROWS,Me),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Qe);const $e=B.isDataArrayTexture||B.isData3DTexture,bt=w.isDataArrayTexture||w.isData3DTexture;if(B.isDepthTexture){const wt=Be.get(B),Ct=Be.get(w),It=Be.get(wt.__renderTarget),HA=Be.get(Ct.__renderTarget);Ce.bindFramebuffer(S.READ_FRAMEBUFFER,It.__webglFramebuffer),Ce.bindFramebuffer(S.DRAW_FRAMEBUFFER,HA.__webglFramebuffer);for(let On=0;On<he;On++)$e&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Be.get(B).__webglTexture,N,Qe+On),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Be.get(w).__webglTexture,$,st+On)),S.blitFramebuffer(xe,Me,Ae,le,Ge,Ye,Ae,le,S.DEPTH_BUFFER_BIT,S.NEAREST);Ce.bindFramebuffer(S.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(N!==0||B.isRenderTargetTexture||Be.has(B)){const wt=Be.get(B),Ct=Be.get(w);Ce.bindFramebuffer(S.READ_FRAMEBUFFER,Ra),Ce.bindFramebuffer(S.DRAW_FRAMEBUFFER,Pa);for(let It=0;It<he;It++)$e?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,wt.__webglTexture,N,Qe+It):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,wt.__webglTexture,N),bt?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ct.__webglTexture,$,st+It):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ct.__webglTexture,$),N!==0?S.blitFramebuffer(xe,Me,Ae,le,Ge,Ye,Ae,le,S.COLOR_BUFFER_BIT,S.NEAREST):bt?S.copyTexSubImage3D(dt,$,Ge,Ye,st+It,xe,Me,Ae,le):S.copyTexSubImage2D(dt,$,Ge,Ye,xe,Me,Ae,le);Ce.bindFramebuffer(S.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else bt?B.isDataTexture||B.isData3DTexture?S.texSubImage3D(dt,$,Ge,Ye,st,Ae,le,he,ze,Ie,it.data):w.isCompressedArrayTexture?S.compressedTexSubImage3D(dt,$,Ge,Ye,st,Ae,le,he,ze,it.data):S.texSubImage3D(dt,$,Ge,Ye,st,Ae,le,he,ze,Ie,it):B.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,$,Ge,Ye,Ae,le,ze,Ie,it.data):B.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,$,Ge,Ye,it.width,it.height,ze,it.data):S.texSubImage2D(S.TEXTURE_2D,$,Ge,Ye,Ae,le,ze,Ie,it);S.pixelStorei(S.UNPACK_ROW_LENGTH,We),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Lt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Zn),S.pixelStorei(S.UNPACK_SKIP_ROWS,St),S.pixelStorei(S.UNPACK_SKIP_IMAGES,bi),$===0&&w.generateMipmaps&&S.generateMipmap(dt),Ce.unbindTexture()},this.copyTextureToTexture3D=function(B,w,P=null,L=null,N=0){return B.isTexture!==!0&&(ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),P=arguments[0]||null,L=arguments[1]||null,B=arguments[2],w=arguments[3],N=arguments[4]||0),ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(B,w,P,L,N)},this.initRenderTarget=function(B){Be.get(B).__webglFramebuffer===void 0&&_.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?_.setTextureCube(B,0):B.isData3DTexture?_.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?_.setTexture2DArray(B,0):_.setTexture2D(B,0),Ce.unbindTexture()},this.resetState=function(){b=0,v=0,M=null,Ce.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}const xn={a:"C4",s:"C#4",d:"D4",f:"D#4",g:"E4",h:"F4",j:"F#4",k:"G4",l:"A4",ç:"A#4","]":"A#5",Enter:"B#4",q:"C5",w:"C#5",e:"D5",r:"D#5",t:"E5",y:"F5",u:"F#5",i:"G5",o:"A5",p:"B4",3:"B5",4:"B#5",z:"C3",x:"C#3",c:"D3",v:"D#3",hifen:"E3",".":"F3","//":"F#3",m:"G3",n:"A3",";":"A#3",b:"B3",Shift:"B#3","'":"C2",1:"C#6",",":"D2","=":"D#2","[":"E2",5:"C6",6:"D#6",7:"D6",8:"E6",9:"F#6",0:"B2","-":"B#2",2:"G#4"},ip="/piano-simulator/assets/a-mrXXo23n.png",Ap="/piano-simulator/assets/b-B0fhAuiD.png",rp="/piano-simulator/assets/c-DH34dIE8.png",op="/piano-simulator/assets/d-DzQQG8_S.png",sp="/piano-simulator/assets/e-DsD8-e4N.png",ap="data:image/png;base64,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",cp="/piano-simulator/assets/g-BKewhe9w.png",lp="/piano-simulator/assets/h-CHUs-0PJ.png",gp="data:image/png;base64,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A0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMA1A1iMo3ccGVvf/OxYBxcvPD/u+9wPBrAMgg4LsnHdxth3YO9YC3sGsCCW3AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIOCaASzGpfOXx5nTT4x1cOXFKwNYjj1bmydfHQDAWrPkDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAH/AGXzndUxRre/AAAAAElFTkSuQmCC",dp="/piano-simulator/assets/j-CvOr1DUT.png",up="/piano-simulator/assets/k-k4jbOtBY.png",fp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgzSURBVHgB7dixTYIBFEbRh2EDLW1xKhwA13AACxMXsNfK1kHcwphgia4AFf/lnOTNcPO91XazOwwAsGhXAwAsnqADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwHrgBK9fL7M093cPA1BloQNAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwHrgQtzcXg+cu/337+x/9gPHEnQuxtPn48C5e3v+mPf/g2N5uQNAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMBqu9kdBgBYNAsdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQAC/gAfKhZ8yVo0xQAAAABJRU5ErkJggg==",hp="/piano-simulator/assets/m-y2XkMSDA.png",pp="/piano-simulator/assets/n-CpKnEIzx.png",Ep="/piano-simulator/assets/o-D1tFsV0h.png",Bp="/piano-simulator/assets/p-DFBhmRaY.png",mp="/piano-simulator/assets/q-i8xLaP8H.png",Cp="data:image/png;base64,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dAAIEHQACBB0AAi4bIAFeOu1t4e5OHH8xACwqUv23vjAxwMAMGtG7gAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEPAf5Hf1OlxVbusAAAAASUVORK5CYII=",Qp="/piano-simulator/assets/s-CdCs_Uk6.png",Ip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA7DSURBVHgB7d1fqNf1Hcfxj8sIT2Sgx5udk2eDFI8X2mZ/LwwKo8BgeNjNQGtjUBg46mpNGbStojGGsRgjr/o32EVTiBU1Ww28UdEoLzxON4ZOd+Opi6QjYwP3+/zsbDJm4O/88fd5nccDfmghXhwvnr/35/v5fL4LNq/YeqEAAE37UgEAmifoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AARYW4Ipt2raxjHU+LRg/cKI8u2VnAbKZ0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AACwv0oe2vPlH62bLhJaUVI6PDff/znGu7nnylTJz5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",_p="/piano-simulator/assets/u-eM9M6nyh.png",Dp="/piano-simulator/assets/v-CeBqFpxw.png",vp="/piano-simulator/assets/w-D_xJosKM.png",xp="/piano-simulator/assets/x-CtkWOado.png",Sp="/piano-simulator/assets/y-BDY8s8lX.png",Mp="/piano-simulator/assets/z-WQAkT4aj.png",yp="/piano-simulator/assets/%C3%A7-DEUmQJ8_.png",Op="/piano-simulator/assets/0-BCI9PscJ.png",Tp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAguSURBVHgB7dgxUQMBFEXRHyYOoKOOEHzEQDromGGwQUMH1IigQgM9XaIhMRADe/ccE3fe2+x3h/MAAIt2MwDA4gk6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABGwHVuzz721o+Pn+nffnj4G1stABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBgO7BiTw+vw3UvX49zd387wDIIOqt2/D8NQIHLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACNvvd4TwAwKJZ6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEHAB6wQTfemhKH0AAAAASUVORK5CYII=",bp="/piano-simulator/assets/2-jm51jYrU.png",wp="/piano-simulator/assets/3-1wIVfeWW.png",Np="/piano-simulator/assets/4-Bxi5JjZ6.png",Hp="/piano-simulator/assets/5-Cd0QVnvW.png",Rp="/piano-simulator/assets/6-6YLPnQWp.png",Pp="/piano-simulator/assets/7-D_b2H2nt.png",Lp="/piano-simulator/assets/8-wl2zqMxF.png",Up="/piano-simulator/assets/9-JVeR01yW.png",Fp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAuBSURBVHgB7d0xi+XVGYDxE0klpFIrF60U5xNsmhTaKFi5rJVDtFoxIEyqiFOvpMugsJCtEjNWBrdSEpAEYhMFC6sF7YLptArYJvdsApFk1d11Zuee5/5+cJmP8HDe/7zn/GD/kZf+OQCApd0zAIDlCToABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAT8cAA74ycXfjwu/fKno+ity78ff/jtnwbsKkGHHfHkC4+P/VefHTVf/P3LcfUXvxvXP/p0wC4TdNgBF15+ejyz+dVc//CzcfWVN29EHXadoENcNeZ//M2fx/Frbw/g3wQdwoox/+ofX43jzffyD9756wD+S9AhqhjzOVq/vH9kxA43IegQVIz5PJHPk/k8oQP/T9AhZq6lzfW0Eitp8N0EHUJqMZ+j9V/97Nfjb9c/H8C3E3QIuPdH9479w4upmFtJg9sj6LC4GfPD44Px0N65UfHOG++Oa5sfcOsEHRZWi/n8h7d569vH738ygNsj6LCoBx68bxxceTET8/mdfH4vN2KHOyPosKAZ81c3J/P7N38L5q1vc8xuJQ3unKDDYkoxnwG/9vp7VtLgBAg6LKQUcytpcLIEHRZRivlcSTvaxNyIHU6OoMMCSjG3kganQ9Bhyz28d+5GzOeK2srmafzopavj+kefDuDkCTpssUrMraTB6RN02FKPnX90/PzKpeVjPlfSjl97ewCnS9BhC8072edDKyubI/b53Ol89hQ4fYIOW6YQ8zlav7x/ZMQOd5GgwxZ58oXHx/6rz46VzRP5PJlbSYO7S9BhS1x4+enxzOa3src2IXfrG5wNQYctsHrM52h9vpJmJQ3OjqDDGVs95vPWt6uvvOl7OZwxQYcztHrMraTB9hB0OCPPHV4cTz3/xFiRlTTYPoIOZ2Cupc31tBVZSYPtJOhwl60ccytpsL0EHe6SeYXrwZVLY+/8o2NFVtJguwk63AUz5ofHB+OhvXNjNXO0Ph9WmQ+sANtL0OGUrRzzuZJ2tIm5ETtsP0GHU/TAg/fdeP70/s3f1bzzxrvj2uYHrEHQ4ZSsGvN5Gj966apb32Axgg6nYNWYz+/k83u5lTRYj6DDCVs15vPWtzlm970c1iTocIJWjPkM+LXX37OSBosTdDghD++dGwdXXlwq5lbSoEPQ4QTMmM+T+VxRW8XH739y48lTI3ZoEHT4nlaMuZU06BF0+B7mnez7hxeXifkcsc9TuZU06BF0uEMz5vOhlVVYSYM2QYc7sFrM50ra8WtvD6BL0OE2XXj56fHM5reC+Q9v87nT+ewp0CbocBtWivkcrV/ePzJihx0h6HCLVor5PJHPk7mVNNgdgg63YKWYv7UJuVvfYPcIOnyHVWJuJQ12m6DDt3ju8OJ46vknxra7/uFn4+orb/peDjtM0OEbzLW0uZ627aykAZOgw02sEPP5D29zxD7vZAcQdPiaeYXrwZVLY+/8o2ObufUN+F+CDv8xY354fDAe2js3ttkcsc/HVaykAV8n6DDWiPkM+LXX37OSBtyUoLPzHnjwvhvPn96/+but5mh9jtjnqB3gZgSdnbZCzOdK2tEm5kbswLcRdHbaY+cfGX/Z4odLvvj8y/HBNQ+rAN9N0NlpXiEDKu4ZAMDyBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQAC/gVW+/BERBsE4AAAAABJRU5ErkJggg==",Gp="data:image/png;base64,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IICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIMC/AP/KU99312UrAAAAAElFTkSuQmCC",zp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhJSURBVHgB7dg9Lq0BGEXh996cxik0dGrGoNGo1Go/nYSBiE4hMQE9lUmYgITBMARfJcfK80xiZe9/Z/vXXwMA/Gn/BwD48wQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAJWAyzy9PE4/L7zg5sBfmahA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0DAaoBFnh9ep2C9vTUnl8cDtAg6LPQSCfru3o6gQ5DLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAJWAyxydHo4Bevt9QA9gg4LXd1dDMCmcrkDQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMBqgEVuz+4HYFMJOiz0/vY5AJvK5Q4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAHf2HQVI7/0o+0AAAAASUVORK5CYII=",Vp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhISURBVHgB7dixLQQAGIbhn9wGotNSKywgkViCRMsgWp0F9DcEBbEAoVaJGRjBVeLee54l3nzf1tn+5fcAAGttewCAtSfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGGAld2+3w987P7ga4HcWOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAELAbIeVg+zefH1wCbQ9Ah6H75OK/P7wNsDpc7AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGyDk6OZzdvZ0peFg+DfA7QYeg04vjqRB0WI3LHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACFgOs5PrsZgD+K0GHFb08vw/Af+VyB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAgB/MDhy8GyHllwAAAABJRU5ErkJggg==",kp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgQSURBVHgB7dhBFUEBFEXRx1KFVASggCYGhgQQwkQGZcjxz9+7xFn3bo77828AgEXbDgCweIIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAG7gZV5fm9D2+lwGVgbCx0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACdgMrc78+BqBG0Fmd9+szADUudwAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACPgDLnoMxHO0PJcAAAAASUVORK5CYII=",Yp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhZSURBVHgB7dixSZ1hGIbh13BWcYc0WSL1IWXADTJBSJcikCZd7E/nAlbiAge0E60UV9AJ/u5DODfXtcTN85ztzy/eBgA4aZ8GADh5gg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABu4HFLu/+DrDt+nAz/378H1jJQgeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAgN3AYoc/VwNsezg+Dqx2tj+/eBsA4KS53AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBgN7DYl6+fB9j28vg6x9u7gZUEneW+//o2wLbrw42gs5zLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACdgOL/dz/HmDb89PrwGqCznLH2/sB4GO53AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASDgHWrpJQIP430XAAAAAElFTkSuQmCC",Wp="/piano-simulator/assets/pontoVirgula-DQOy3glv.png",Xp="/piano-simulator/assets/til-CRmm4Lat.png",Kp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA36SURBVHgB7d0/iN/1Hcfxj61LTpIWc5kuuXQ5ucvQiFrTDhnUFKWd/NOpZ3VpxaHFTrUJhQ6NOBQqCIU6Rc1SkEtbKhiMCSSDiTSgDt5hplwvk4lQg+dof98rLtKC0OT7+Xxev8cDjuS45bbnfd7vz/f7u2V54enPCwDQta8VAKB7gg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABDg1gJ0b2b7TFk6sFBmd99e9i7uKbNzO8uuudv/87NvbNv6+dWNa1vff3Tl47J5fXPy/cdl9Z0PJ99fK+urGwXo2y3LC09/XoDuLB64oyzdu1DuObS/zC/tLv+Pq5Oor164VM6eeLusTf4F+iPo0JHhpH3w0QPl7gf2T07kd5SbYYj7youvb4V9OL0DfRB06MAQ8gefvK88NPka/j+GIexvHDtTTr58ugDtE3Ro3DBaf+r5x7f24jUMYX9u+QWndWicoEOjhpP4w7/4QXnoiftLC4Yx/InJF9Amt9yhQbsmp/HDx5+pdir/bx75+Q/Lbdu3lePPvVaA9ngOHRozjNh/97dfNxXzLzz45P3l6F8Pj7bHB746QYeGHHzku+XIq880HczhEbkjx9v+HWEaCTo0Yoj5z57/SenBEPXlI48WoB2CDg3YOwlkLzH/wsFHvleWDz9WgDYI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",qp="/piano-simulator/assets/a-BQyliO_v.png",jp="/piano-simulator/assets/b-IM_sw-cK.png",Zp="/piano-simulator/assets/c-CygdLUfr.png",Jp="/piano-simulator/assets/d-C1wF_Enc.png",$p="/piano-simulator/assets/e-C6sF4Qws.png",eE="data:image/png;base64,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",tE="/piano-simulator/assets/g-Ca4JG0lt.png",nE="/piano-simulator/assets/h-DazP1z5O.png",iE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvGSURBVHgB7d0/qF7lHcDxY4kBm9QhYCJYbIQMVm2pHa5DHWqmDrbgUju7O9elLp26dKmzWWvngk5m6dIMRahpOwQiUiGN9BY0MZAI9n0uBMRCG6GeP9/384HDvZBcuHf6nt/zPOe8973w5oXPJgBg0742AQCbJ+gAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQcGwCNu/0AyenJ089PJ39xqmj78d14v7jR18/7+ant6ebd25P12/dmD7cXVc/PpyufnQ4XT68NgHbJuiwUSPgB6cfnc5/89x04tjxe/qZ8f/GdTf0z33u397dRf3iB1eOvo7YA9si6LAhX9/F+PmzT0w/3l33GvF79dTuBmFcw9u7sL9x5R1hhw2574U3L3w2Aav2VYb8vxF22A5Bh5V77pFz00vfPpg15F/0213Uf7e7gPUSdFipMZW//N1np2d2++RrMA7S/eLSW6Z1WCmPrcEKnX3w1PTrH/xkNTEfxkG6Xx786OgwHrA+gg4rM06uj3B+8ZGzNbgb9bENAKyLU+6wIiOUL3/n2Wntxu/40C7u9tVhPUzosBJjmX0LMb/rZ+e+N/10dwHrIOiwAmPafeXp89PWjKhbfod1EHRYgbXumd+Llx4/OHrlLLAsQYeFvbibcrca82G8M/6V758/eswOWI6gw4LGUvuLgX3o05G/A7ZM0GFBpQiO19J6Rh2WI+iwkPFBKOdjB8pM6bAcQYeF/DB4OnzcpJjSYRmCDgsYe+e16fwuUzosQ9BhAU+Fp9jxtznxDvMTdFhAdTq/65kz6/lQGdgXgg4zG89t1/eZyysQsFaCDjN7bA/equZgHMxP0GFm+xC78aIZ++gwL0GHmY1PVdsHZzb8OlvYIkGHmZ3ck8l1X25cYC0EHWb20J5MricsucOsBB1mtuVPVvsyxml+YD6CDgABgg4AAYIOfCVu3rk9AfMRdJjZzU/3I3T78nfCWgg6zGxfJtfrt25MwHwEHWZ29ePDaR98YskdZiXoMLMP92ByHasQ+3LjAmsh6DCzqx/1QyfmMD9Bh5ldPrw21e3D3whrI+gws3FYrH4C/F1Bh9kJOizg4gdXpqpxw2JCh/kJOizg0j/en6rEHJYh6LCAsSRdDd8bV96ZgPkJOizk7eCy+9hK8EIZWIagw0KK8TOdw3IEHRb02p//MFWYzmFZgg4Lquylj5CbzmFZgg4L+81uSt/6c+kj5qZzWJagw8JGCH/1p7enrRpL7eXn6mErBB1WYCy9v/63S9PWjJuR1/+6vd8bigQdVuL37/1lU/vQI+avXnor/xpb2ApBhxUZQd9C1O/G3L45rIegw8qMoK95+V3MYZ2OTcDqjOX38Tjbz58+P51+4OS0FuPtdhd2e+aW2WF9TOiwUlc/OjyahNdwgnwEfBx+ey3wiB1U3ffCmxc+m4BVe+zBU4tN6+OG4nVTOayeoMOGPPfIuen87nry1MPTV2nEe3zEqxfGwHYIOmzQmNSf/9YT08GZR/+vU/vYt//j9feni3+/YiKHjRF02LgR9DGxP7W7xvdnd8vzJ44d/58/Nybv9z4+nK5/cmO6/K9r07v/vCbisGGCDkEj6CfuP/4f0/sI9s07ty2jQ5DH1iDoKNyfCjfsE4+tAUCAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwLEJWI2DM49OLz1+MG3B9Vs3plcvvTUB6yDosCInjh2fTj9wcgL4siy5A0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwLEJWI3rt25MFz+4Mm3BzTu3J2A9BB1W5PLhtaML4Muy5A4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgAB/wZ096CJ3K6uYwAAAABJRU5ErkJggg==",AE="/piano-simulator/assets/j-DzMoCNSy.png",rE="/piano-simulator/assets/k-BgRJ87Su.png",oE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgySURBVHgB7dixSUMBFEbhq6QRrF3H1tbgAI5lZ1obWzOGAziGWERBwQ2S6r2T74M7w+G/F/dvz78DAKza5QAAqyfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAELAZOMHr3eOszXa/G4AqCx0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAjYDZ+Lm6npg6T6/D/P1cxg4lqBzNp5uHwaW7uXj/f/gWF7uABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQsBk4wXa/GwCWw0IHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4CAP8VcFxVOaMUDAAAAAElFTkSuQmCC",sE="/piano-simulator/assets/m-CurdLkm-.png",aE="/piano-simulator/assets/n-BLesXGoR.png",cE="/piano-simulator/assets/o-Rq53hhVA.png",lE="/piano-simulator/assets/p-C13sx-wy.png",gE="/piano-simulator/assets/q-j4GVb7PF.png",dE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAv+SURBVHgB7d0xrJ1lHYDxT1KaSJHEGpAEgyXpoFATXerC1IkBBxdx1Vl2Fxx0cmbXVVwlkYkuLNxFolAHmxSJJFCSDmBrUkj0vJfepqG9l3uuhX7f8/1+yck597b7c//v+37n/cqP//z7/04AwKLdNwEAiyfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQcGwCmKkHjh2fHrz/+PTwVx+cHtm8Tmw+n9j8bnweHr7xvvfzsPd/bvXCzivTW1fem6BM0IF76oEbgX7ioZPTqa+d3A34eH/kgQdvCzOwP0FnFX599plp7l5++8K0c/mdqWyE+6mTj34a7BsRv3W6Bo5O0FmFM5uIzN35dy9ONSPcZ77x6PTU1x/dfTdxwxdH0IG7ZkzbZ7/5uIDDPSDowP9lLKGP17nHTls+h3tI0IGtjYCffeTx6dy3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dAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAj4H+aA+OMPp5vRAAAAAElFTkSuQmCC",uE="/piano-simulator/assets/s-Cf9bjdlQ.png",fE="data:image/png;base64,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",hE="/piano-simulator/assets/u-C3GyWVZJ.png",pE="/piano-simulator/assets/v-BZpEZNbL.png",EE="/piano-simulator/assets/w-BVvaBb5s.png",BE="/piano-simulator/assets/x-CERRJ8ME.png",mE="/piano-simulator/assets/y-CjLCAlIb.png",CE="/piano-simulator/assets/z-CAfYwYsg.png",QE="/piano-simulator/assets/%C3%A7-ppVM9JLW.png",IE="/piano-simulator/assets/0-27nfUNPm.png",_E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgxSURBVHgB7dgxTUMBGEXhH/IWEmakoKErDhirAwsIwEDDykia4ICVlYWZpGNroAbeed9n4uTem6ePt/MAAKt2OwDA6gk6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwDG/a+ex4aPn9/5vX7a2CrLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAhYBjZsfzwM17087ubh7n6AdRB0Nu3v9D8ABS53AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAhYBuCK/fEwwHpY6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEHABuXAUQKSNJIMAAAAASUVORK5CYII=",DE="/piano-simulator/assets/2-BjZPb3aO.png",vE="/piano-simulator/assets/3-Bij4PeNX.png",xE="/piano-simulator/assets/4-Dm_TVZy8.png",SE="/piano-simulator/assets/5-BMzIV1bF.png",ME="/piano-simulator/assets/6-nH6Xguj1.png",yE="/piano-simulator/assets/7-B53a4HeN.png",OE="/piano-simulator/assets/8-D65fu2pK.png",TE="/piano-simulator/assets/9-DYGATcvK.png",bE="data:image/png;base64,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AAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgAB/wIksvHAR9Em+gAAAABJRU5ErkJggg==",wE="data:image/png;base64,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6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIMC/AWioXpDGhafzAAAAAElFTkSuQmCC",NE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhISURBVHgB7dixLYUBGIXhj1wSodYoNCqJDTQ6hYYJLGAFq9BqtMygUigNoLICI/gruffN8yzx5pyt65eHnwEANtr2AAAbT9ABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIGA1wCLPl7fD/7t5fRzgbxY6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AASsBljk6fN9CvZ3dufq+HSAFkGHhSpBP9w7EHQIcrkDQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwGqARS6OTqZgf2d3gB5Bh4Xuzs4HYF253AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgYDXAIvdvrwOwrgQdFvr4/hqAdeVyB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAgF+QJxXHOT+yIwAAAABJRU5ErkJggg==",HE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhISURBVHgB7dixLQQAGIbhn1wjUStFbQAzaBRMYBKrMIGWil5Np5WIQiVRYoO7Su7ee54l3nzfzvnd9c8AABttdwCAjSfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGGAlt6eXw/+7uL8ZYDkLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACFgPkPL69zsf31wDbQ9Ah6OEv6C+f7wNsD5c7AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGyDk5OJyDvf0peHx7HWA5QYegs6PjqRB0WI3LHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACFgOs5OrpfgDWlaDDip4/3wdgXbncASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEg4BcQjR7xdeFPDgAAAABJRU5ErkJggg==",RE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgQSURBVHgB7dixFQEBFETRz1GclAr0pAAqkJJJdCCVqoM69u29TbwzszncL78BABZtOwDA4gk6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AATsBlbmtj8NbcfHdWBtLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAI2A2szPn9GoAaQWd1nt/PANS43AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIOAPk8cOPk0CNzwAAAAASUVORK5CYII=",PE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhZSURBVHgB7dihTZ1hGIbht83Zora2G9TU1XaDLtAVugQDoDFYcBgUigRwJ0GREMQRhAQJE/zuCwl3rmuJO8/z5c/Z8dsAAJ/a1wEAPj1BB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgIDdwGKnv/8OsO3iYT9HN5cDK1noABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwG1jsZH89wLb758PAaoLOcoIO8PFc7gAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwG1js17fvA2x7en2Zu8PjwEqCznL/fvwcYNvFw17QWc7lDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABu4HF/l+dD7Dt6fVlYDVBZ7nbw+MA8LFc7gAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABDwDvIZJ4VgQr1WAAAAAElFTkSuQmCC",LE="/piano-simulator/assets/pontoVirgula-DUhdNEoM.png",UE="/piano-simulator/assets/til-DzluC_eO.png",FE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA1lSURBVHgB7d0/qNbXHcfxk2KE5JoMQjSQYhUspHoLdrmBtkPj1MEEMtm12bt3SZfO7dLOdW06X0im2qGLdwpUbQfBqyCogTtoTEAD6XMuFdrQNv/0d77n87xecHkQHdze9/s95/n9nnnrvQufNQBgat9qAMD0BB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASDAgQZM7/kDB9vm4ZfbkecPtRMvHG4vPXeoHVn9dBvPHmwbq7+/+8lH+3/unw8ePdz/vLJ3e/9z9/5eA+Ym6DCp06uA95/XjhxrJ148/IX//nHgH392bxw/tf/Zo355FfeLt67tRx6YzzNvvXfhswZMoU/iZ799sm2tIt4n8qehx/3dax/sB/7Df031QH2CDhPoIT+3mqb7RN3X50voYd/evdq2b1xtQH2CDsX1tfovvv/j/1iVL6mH/Z2d903rUJygQ1F9Kj//3TPtje+cahX8cbWG/9PqB6jJpTgoqN9S//XWT4dN5f/Nz06e2V/3X/jHTgPq8T10KKav2H/7ozdLxfyxfob/mx++ub89AGoRdCjk9VdO7k/mG4WD2b8i1/+Pog61CDoU0WPeL7/NoEf97e9tNaAOQYcCjq8COUvMHzu7+gXk56+KOlQh6DBYvwD3yx+cbTPqZ+rnitzCh3Un6DBYX11XvAD3ZZ0/eWb/lxJgLEGHgfq5eX8W+8z6y19mOy6ARIIOg/Sptk+3Cfpz5fsvJ8A4gg6D9JjPvGr/vLdf3fJVNhhI0GGAPp2fDZto++r93HEX5GAUQYcBXjs697n5/1LlufOwjgQdBkj9qlef0k8/pfe0A/+foMPC+gWypLPzz0s7SoBZCDos7Cfhwds6cszlOBhA0GFhm+Er6b527896B5Yl6LCgfrs9ed3+2NbkD8uBGQk6LGhdJtejHgULixN0WNCJF9Yj6G66w/IEHRZ0fE0m9H6O7mIcLEvQYUGH1ihy1u6wLEGHBa3Ta0aff9aEDksSdFjQxhpFbh1u80Mlgg4L2nCuDDwlgg4AAQQdAAIIOgAEEHRY0N1PPmrr4sGjhw1YjqADT8WDTwUdliTosKDr9/fauvhwjbYRUIGgw4LWKXLrdLwAFQg6LGhdInf93vpsIqAKQYcF7a5J6Jyfw/IEHRbUz9DXIXYmdFieoMOC+le51mFK312jy39QhaDDwi7dvdnSuRAHyxN0WNjFW9daOit3WJ6gw8L62v3K3u2Wqsf8Y5fiYHGCDgO8e+2Dlsr5OYwh6DDA5dWEnjqlXw7ePkBlgg6DpE7pyccJUJmgwyCJU3q/3e6GO4wh6DDQ7/7216gHzZjOYRxBh4H6NNujnuLPa/CVPKhK0GGwnTs3Y87TTegwjqBDAT3os0+3brfDWIIORfx+tXrfvnG1zWodnoAHlQk6FPKHv+9Mu363boexBB2K6UHvF+Vm+vpXf9yrr6vBWIIOBfX19a923p9m6rVuh/EEHYrqE+87q6jPMK3vrMErYaG6Aw0orU+//ef1V0628yfPtCPPHWqVWLdDDYIOk/j3sJ87fqqdeOFwq2Dmm/mQxModJtOjvr1bJ6Jut0MNgg4TOn345VZBf5iMdTvUIOgwoc0iQXe7HeoQdJjMS88dKnExrk/mgg51CDpMpsp07uwcahF0mEyV83OvSoVaBB0mU2FC7+t2EzrUIugwkSrn52IO9Qg6TKTK+bl1O9Qj6DCRCufn1u1Qk6DDRCpM6GIONQk6TKLK+bl1O9Qk6DCJEy+OfxmLdTvUJegwia0jx9poYg51CTpMosKEbt0OdQk6TKCfn49+/7l1O9Qm6DCBCtO5mENtgg4TqHB+vr17tQF1CTpMYPSE3tft1+/vNaAuQYfiKpyfX7pzswG1CToUV+H8/C9ut0N5gg7FjT4/t26HOQg6FDd6QrduhzkIOhRW4fzcuh3mIOhQmNvtwJcl6FDY6Nel+u45zEPQobDTg4O+c9f5OcxC0KGojWcPDj0/v35vb3/lDsxB0KGo0dP5RZfhYCqCDkWNPj+3boe5CDoUNXJCt26H+Qg6FDT6/Ny6HeYj6FCQ2+3AVyXoUNCmdTvwFQk6FDRyQt++4WEyMCNBh2JGn59f2bvdgPkIOhQzcjq/vIq5dTvMSdChmJHn5263w7wEHYqxbge+DkGHQvr5+aiVu3U7zE3QoRAPkwG+LkGHQraOHmujWLfD3AQdChk1oVu3w/wEHYoYeX5u3Q7zE3Qowu124JsQdChi1Pm5dTtkEHQoYtSEbt0OGQQdChh5fm7dDhkEHQpwux34pgQdChh1fm7dDjkEHQoYNaFbt0MOQYcCRpyf79y5ad0OQQQdBhv1utRLd282IIegw2CjbrdfuiPokETQYbDNQev2jz992IAcgg6DjZjQrdshj6DDQJvW7cATIugw0GnrduAJEXQYaNO6HXhCBB0GWnpCf/DooXU7hBJ0GGTI7fa71u2QStBhkCG3203nEEvQYZDNAev2HefnEEvQYZDjLy77QhYxh2yCDgP06XzjwMG2JOt2yCboMMDS07l1O+Q70IAhLt661pZy/d5eA7IJOgywvXu1ATxJVu4AEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAvwTFHlSEaGWRxQAAAAASUVORK5CYII=",va=new ug,GE=6038889,xa={a:ip,b:Ap,c:rp,d:op,e:sp,f:ap,g:cp,h:lp,i:gp,j:dp,k:up,l:fp,m:hp,n:pp,o:Ep,p:Bp,q:mp,r:Cp,s:Qp,t:Ip,u:_p,v:Dp,w:vp,x:xp,y:Sp,z:Mp,ç:yp,0:Op,1:Tp,2:bp,3:wp,4:Np,5:Hp,6:Rp,7:Pp,8:Lp,9:Up,agudo:Fp,aspa:Gp,chave_direita:zp,chave_esquerda:Vp,hifen:kp,igual:Yp,ponto_virgula:Wp,til:Xp,virgula:Kp},zE={a:qp,b:jp,c:Zp,d:Jp,e:$p,f:eE,g:tE,h:nE,i:iE,j:AE,k:rE,l:oE,m:sE,n:aE,o:cE,p:lE,q:gE,r:dE,s:uE,t:fE,u:hE,v:pE,w:EE,x:BE,y:mE,z:CE,ç:QE,0:IE,1:_E,2:DE,3:vE,4:xE,5:SE,6:ME,7:yE,8:OE,9:TE,agudo:bE,aspa:wE,chave_direita:NE,chave_esquerda:HE,hifen:RE,igual:PE,ponto_virgula:LE,til:UE,virgula:FE},Sa={},bA={};for(const[i,e]of Object.entries(xa)){const t=va.load(e);t.colorSpace=Dt,Sa[i]=t}for(const[i,e]of Object.entries(zE)){const t=va.load(e);t.colorSpace=Dt,bA[i]=t}const VE=i=>{const e=Sa[i],t=[];for(let A=0;A<6;A++)A===2?t.push(new Kn({map:e,transparent:!0})):t.push(new jn({color:GE,transparent:!0,opacity:1}));return new Ot(new Mi(.8,.4,.8),t)},Gi={};Object.keys(xa).forEach(i=>{Gi[i]=VE(i)});const kE=[-6,-4.9,-3.8,-2.7,-1.6,-.55,.55,1.6,2.7,3.8,4.9,6],YE=-11,WE=.4,XE=[["a","q","z","1","aspa"],["s","w","x","2"],["c","d","e","3"],["r","f","v","4"],["g","t","b","5"],["h","y","n","6"],["u","j","m","7"],["k","i","8"],["o","l","9","virgula"],["p","ç","0"],["hifen","agudo","til","ponto_virgula"],["igual","chave_esquerda","chave_direita"]];XE.forEach((i,e)=>{i.forEach(t=>{Gi[t]&&(Gi[t].position.x=kE[e])})});Object.values(Gi).forEach(i=>{i.position.y=WE,i.position.z=YE});const KE=[{pitch:"E5",start_ms:1e3},{pitch:"D#5",start_ms:1250},{pitch:"E5",start_ms:1500},{pitch:"D#5",start_ms:1750},{pitch:"E5",start_ms:2e3},{pitch:"B4",start_ms:2250},{pitch:"D5",start_ms:2500},{pitch:"C5",start_ms:2750},{pitch:"A4",start_ms:3e3},{pitch:"A3",start_ms:3e3},{pitch:"C4",start_ms:3750},{pitch:"E4",start_ms:4e3},{pitch:"A4",start_ms:4250},{pitch:"B4",start_ms:4500},{pitch:"E3",start_ms:4500},{pitch:"E4",start_ms:5250},{pitch:"G#4",start_ms:5500},{pitch:"B4",start_ms:5750},{pitch:"C5",start_ms:6e3},{pitch:"A3",start_ms:6e3},{pitch:"E4",start_ms:6750},{pitch:"E5",start_ms:7e3},{pitch:"D#5",start_ms:7250},{pitch:"E5",start_ms:7500},{pitch:"D#5",start_ms:7750},{pitch:"E5",start_ms:8e3},{pitch:"B4",start_ms:8250},{pitch:"D5",start_ms:8500},{pitch:"C5",start_ms:8750},{pitch:"A4",start_ms:9e3},{pitch:"A3",start_ms:9e3},{pitch:"C4",start_ms:9750},{pitch:"E4",start_ms:1e4},{pitch:"A4",start_ms:10250},{pitch:"B4",start_ms:10500},{pitch:"E3",start_ms:10500},{pitch:"E4",start_ms:11250},{pitch:"C5",start_ms:11500},{pitch:"B4",start_ms:11750},{pitch:"A4",start_ms:12e3},{pitch:"A3",start_ms:12e3},{pitch:"B4",start_ms:12750},{pitch:"C5",start_ms:13e3},{pitch:"D5",start_ms:13250},{pitch:"E5",start_ms:13500},{pitch:"C4",start_ms:13500},{pitch:"G4",start_ms:14250},{pitch:"F5",start_ms:14500},{pitch:"E5",start_ms:14750},{pitch:"D5",start_ms:15e3},{pitch:"B3",start_ms:15e3},{pitch:"F4",start_ms:15750},{pitch:"E5",start_ms:16e3},{pitch:"D5",start_ms:16250},{pitch:"C5",start_ms:16500},{pitch:"A3",start_ms:16500},{pitch:"E4",start_ms:17250},{pitch:"D5",start_ms:17500},{pitch:"C5",start_ms:17750},{pitch:"B4",start_ms:18e3},{pitch:"G#3",start_ms:18e3},{pitch:"E5",start_ms:20500},{pitch:"D#5",start_ms:20750},{pitch:"E5",start_ms:21e3},{pitch:"D#5",start_ms:21250},{pitch:"E5",start_ms:21500},{pitch:"B4",start_ms:21750},{pitch:"D5",start_ms:22e3},{pitch:"C5",start_ms:22250},{pitch:"A4",start_ms:22500},{pitch:"A3",start_ms:22500},{pitch:"C4",start_ms:23250},{pitch:"E4",start_ms:23500},{pitch:"A4",start_ms:23750},{pitch:"B4",start_ms:24e3},{pitch:"E3",start_ms:24e3},{pitch:"E4",start_ms:24750},{pitch:"G#4",start_ms:25e3},{pitch:"B4",start_ms:25250},{pitch:"C5",start_ms:25500},{pitch:"A3",start_ms:25500},{pitch:"E4",start_ms:26250},{pitch:"E5",start_ms:26500},{pitch:"D#5",start_ms:26750},{pitch:"E5",start_ms:27e3},{pitch:"D#5",start_ms:27250},{pitch:"E5",start_ms:27500},{pitch:"B4",start_ms:27750},{pitch:"D5",start_ms:28e3},{pitch:"C5",start_ms:28250},{pitch:"A4",start_ms:28500},{pitch:"A3",start_ms:28500},{pitch:"C4",start_ms:29250},{pitch:"E4",start_ms:29500},{pitch:"A4",start_ms:29750},{pitch:"B4",start_ms:3e4},{pitch:"E3",start_ms:3e4},{pitch:"E4",start_ms:30750},{pitch:"C5",start_ms:31e3},{pitch:"B4",start_ms:31250},{pitch:"A4",start_ms:31500},{pitch:"A3",start_ms:31500},{pitch:"E4",start_ms:31500},{pitch:"A1",start_ms:32500}],gn=new(window.AudioContext||window.webkitAudioContext);let dn=null,vi=!1,un=null,Rt=null,ut=null,Vn=null,to=null,Kt=null,Et=0,xi=0,jt=0;const Ti=1e3;let zi=0;function Ma(i,e="bottom-to-top"){const n=document.createElement("canvas");["left-to-right","right-to-left"].includes(e)?(n.width=256,n.height=1):(n.width=1,n.height=256);const A=n.getContext("2d");let r=0,s=0,o=0,a=0;switch(e){case"top-to-bottom":r=0,s=0,o=0,a=256;break;case"bottom-to-top":r=0,s=256,o=0,a=0;break;case"left-to-right":r=0,s=0,o=256,a=0;break;case"right-to-left":r=256,s=0,o=0,a=0;break;default:console.warn(`Direção inválida: "${e}". Usando 'bottom-to-top'.`),r=0,s=256,o=0,a=0}const c=A.createLinearGradient(r,s,o,a);c.addColorStop(0,ws(i,0)),c.addColorStop(.7,ws(i,.7)),A.fillStyle=c,A.fillRect(0,0,n.width,n.height);const l=new sg(n);return l.wrapS=sn,l.wrapT=sn,l.minFilter=kt,l}function ws(i,e){const t=parseInt(i.slice(1,3),16),n=parseInt(i.slice(3,5),16),A=parseInt(i.slice(5,7),16);return`rgba(${t},${n},${A},${e})`}const qE=Ma("#E323CA","top-to-bottom");Ma("#E323CA","bottom-to-top");const vt=new Ag;vt.background=new ke(723218);const Eo=new Ht(85,window.innerWidth/window.innerHeight,.1,1e3);Eo.position.set(0,6,3);Eo.lookAt(0,1,0);const Vi=new np({antialias:!0});Vi.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Vi.domElement);const jE=new yi(13.5,2),ZE=new jn({color:14885834,side:zt,transparent:!0,opacity:.5}),fn=new Ot(jE,ZE);fn.rotation.x=-Math.PI/2;fn.position.z=3;vt.add(fn);const JE=new yi(.04,9),$E=new jn({color:14885834,map:qE,side:zt,transparent:!0,opacity:.5,depthWrite:!1}),e0=Array.from({length:13},(i,e)=>new Ot(JE,$E));e0.forEach((i,e)=>{i.rotation.x=-Math.PI/2,i.position.x=[0,1.1,-1.1,2.2,-2.2,3.3,-3.3,4.4,-4.4,5.5,-5.5,6.7,-6.7][e],i.position.z=-2.5,vt.add(i)});vt.add(new Eg(16777215,2));const ya=new pg(16119185,4);ya.position.set(0,10,0);vt.add(ya);const tt=[],Jt=[];function I(i,e,t){Jt.push({letter:i,delay:e,speed:t,spawned:!1})}function t0(i,e){const t=Gi[i];if(!t)return;const n=t.geometry.clone();let A;Array.isArray(t.material)?A=t.material.map(s=>s.clone()):A=t.material.clone();const r=new Ot(n,A);r.position.copy(t.position),r.userData={speed:e,letter:i,hit:!1,opacity:1},vt.add(r),tt.push(r)}function Xn(){ut=requestAnimationFrame(Xn);const i=performance.now()-Vn;if(Jt.forEach(e=>{i>e.delay&&!e.spawned&&(t0(e.letter,e.speed),e.spawned=!0)}),Vn&&zi>0){const e=performance.now()-Vn,t=Math.min(e/zi,1);Co.style.width=t*100+"%",t>=1&&(wA.style.display="none")}for(let e=tt.length-1;e>=0;e--){const t=tt[e];t.position.z+=t.userData.speed;const n=fn.position.z;if(!t.userData.hit&&t.position.z>=n-.8&&un==="autoplay"){t.userData.hit=!0;const r=t.userData.letter;Array.isArray(t.material)&&t.material.forEach((o,a)=>{if(o instanceof jn&&o.color&&o.color.set(5355423),a===2&&o instanceof Kn){const c=bA[r];c?(o.map=c,o.needsUpdate=!0):console.warn(`Textura alternativa não encontrada para: ${r}`)}});const s=xn[t.userData.letter];dn&&s&&dn.play(s),setTimeout(()=>{vt.children.includes(t)&&vt.remove(t);const o=tt.indexOf(t);o!==-1&&tt.splice(o,1)},400)}if(un==="jogar"&&!t.userData.hit&&t.position.z>n+1.5){t.userData.hit=!0;const r=jt*.05;Et=Math.max(0,Et-r),ki(-r),kn(),vt.remove(t),tt.splice(e,1)}}Vi.render(vt,Eo),tt.length===0&&Jt.every(e=>e.spawned)&&(to||(to=setTimeout(()=>{cancelAnimationFrame(ut);const e=Vi.domElement;e.style.display="none";const t=document.getElementById("fimDaCena"),n=document.getElementById("pontuacaoFinal");t&&(t.style.display="flex",i0(),un==="jogar"?(n.style.display="block",n0()):n.style.display="none"),document.getElementById("botoesMusica").style.display="none",document.getElementById("pontuacaoContainer").style.display="none",document.getElementById("pontuacaoTitle").style.display="none",document.getElementById("pontuacao").style.display="none",document.getElementById("gameMenu").style.display="none",telaInicial.style.display="none",console.log("Animação finalizada.")},1e3)))}function Bo(){ut!==null&&(cancelAnimationFrame(ut),ut=null);for(let i of tt)vt.remove(i);tt.length=0,Jt.length=0,Vn=null,to=null}function kn(){Yi&&(Yi.textContent=`000${Math.floor(Et)}`);const i=document.getElementById("pontuacaoBar");if(i){const e=Et/Ti*100;i.style.width=e+"%"}}function n0(){const i=document.getElementById("pontuacaoFinal"),e=Math.floor(Et),t=2e3,n=performance.now();function A(r){const s=r-n,o=Math.min(s/t,1),a=Math.floor(o*e);i.textContent=a,o<1&&requestAnimationFrame(A)}requestAnimationFrame(A)}function i0(){const i=document.querySelectorAll(".estrelas span"),e=document.getElementById("fraseMotivacao"),t=Math.floor(Et);let n=1,A="Bom trabalho!";t<700?(n=1,A="Boa tentativa! Continue praticando!"):t<850?(n=2,A="Excelente desempenho! Você está quase lá!"):(n=3,A="Perfeito! Você é um maestro!"),i.forEach((r,s)=>{s<n?r.textContent="★":r.textContent="☆"}),e&&(e.textContent=A)}function ki(i){const e=Math.round(i);if(e===0)return;const t=document.createElement("div");t.className=`floating-points ${e>=0?"positive":"negative"}`,t.textContent=e>=0?`+${e}`:`${e}`;const n=Math.random()*(window.innerWidth-200)+100,A=window.innerHeight*.3+Math.random()*200;t.style.left=n+"px",t.style.top=A+"px",document.body.appendChild(t),setTimeout(()=>{t.remove()},2e3)}function A0(i){Array.isArray(i.material)&&i.material.forEach(e=>{(e instanceof jn||e instanceof Kn)&&(e.opacity=i.userData.opacity,e.transparent=!0,e.needsUpdate=!0)})}function Oa(i){if(i.userData.opacity=Math.max(0,i.userData.opacity-1/3),A0(i),i.userData.opacity<=.05){vt.remove(i);const e=tt.indexOf(i);e!==-1&&tt.splice(e,1)}}const mo=Vi.domElement,r0=document.getElementById("resetarButton"),o0=document.getElementById("voltarButton"),Yi=document.getElementById("pontuacao");document.getElementById("gameMenu");const wA=document.getElementById("progressContainer"),Co=document.getElementById("progressBar"),s0=document.getElementById("autoplayButton"),a0=document.getElementById("jogarButton"),c0={elvis:"Beethoven - Für Elise",bethoven:"Bethoven - Ode á Alegria",tchai:"Tchaikovsky - Lago dos Cisnes"};function no(i){return c0[i]||"Música"}const l0=localStorage.getItem("musica")||"elvis";localStorage.getItem("modo");Kt=l0;ut!==null&&(cancelAnimationFrame(ut),ut=null);o0.addEventListener("click",()=>{un=null,wA.style.display="none",Yi.style.display="none",document.getElementById("pontuacaoContainer").style.display="none",document.getElementById("gameMenu").style.display="none",document.getElementById("nomeDaMusica").style.display="none",document.getElementById("botoesMusica").style.display="none",document.getElementById("botoesJogar").classList.remove("ativo"),document.getElementById("botoesAutoplay").classList.remove("ativo"),mo.style.display="none",window.location.href="selector.html"});s0.addEventListener("click",()=>{un!=="autoplay"&&(Co.style.width="0%",wA.style.display="flex",Yi.style.display="none",document.getElementById("pontuacaoContainer").style.display="none",document.getElementById("pontuacaoTitle").style.display="none",document.getElementById("gameMenu").style.display="flex",document.getElementById("nomeDaMusica").textContent=no(Kt),document.getElementById("nomeDaMusica").style.display="block",document.getElementById("botoesMusica").style.display="flex",document.getElementById("botoesAutoplay").classList.add("ativo"),document.getElementById("botoesJogar").classList.remove("ativo"),mo.style.display="inline",un="autoplay",Et=0,kn(),Bo(),Kt==="bethoven"?Qo():Kt=="tchai"?Io():_o(),Vn=performance.now(),Rt&&(document.removeEventListener("keydown",Rt),Rt=null),ut!==null&&(cancelAnimationFrame(ut),ut=null),gn.state==="suspended"&&gn.resume(),vi?Xn():Ao.instrument(gn,"acoustic_grand_piano",{gain:4}).then(i=>{dn=i,vi=!0,Xn()}))});a0.addEventListener("click",()=>{un!=="jogar"&&(document.getElementById("gameMenu").style.display="flex",Yi.style.display="block",document.getElementById("nomeDaMusica").textContent=no(Kt),document.getElementById("nomeDaMusica").style.display="block",mo.style.display="inline",Co.style.width="0%",wA.style.display="flex",document.getElementById("pontuacaoContainer").style.display="block",document.getElementById("pontuacaoTitle").style.display="block",document.getElementById("nomeDaMusica").textContent=no(Kt),document.getElementById("nomeDaMusica").style.display="block",document.getElementById("botoesMusica").style.display="flex",document.getElementById("botoesJogar").classList.add("ativo"),document.getElementById("botoesAutoplay").classList.remove("ativo"),un="jogar",Et=0,kn(),Bo(),Kt==="bethoven"?Qo():Kt=="tchai"?Io():_o(),Vn=performance.now(),ut!==null&&(cancelAnimationFrame(ut),ut=null),Rt&&document.removeEventListener("keydown",Rt),Rt=i=>{const e=xn[i.key];if(!e||!dn)return;dn.play(e);let t=!1,n=null,A=1/0;for(let r=0;r<tt.length;r++){const s=tt[r],o=xn[s.userData.letter],a=Math.abs(s.position.z-fn.position.z)<1;if(!s.userData.hit&&o===e&&a){const c=Math.abs(s.position.z-fn.position.z);c<A&&(A=c,n=s)}}if(n){n.userData.hit=!0,t=!0;const r=n.userData.letter;Array.isArray(n.material)&&n.material.forEach((s,o)=>{if(s instanceof jn&&s.color&&s.color.set(5355423),o===2&&s instanceof Kn){const a=bA[r];a?(s.map=a,s.needsUpdate=!0):console.warn(`Textura alternativa não encontrada para: ${r}`)}}),setTimeout(()=>{Et=Math.min(Ti,Et+jt),ki(jt),kn(),vt.remove(n);const s=tt.indexOf(n);s!==-1&&tt.splice(s,1)},400)}if(!t){let r=null,s=1/0;for(let o=0;o<tt.length;o++){const a=tt[o],c=xn[a.userData.letter];if(!a.userData.hit&&c===e){const l=Math.abs(a.position.z-fn.position.z);l<s&&(s=l,r=a)}}if(r)Oa(r);else{const o=jt*.1;Et=Math.max(0,Et-o),ki(-o),kn()}}},document.addEventListener("keydown",Rt),gn.state==="suspended"&&gn.resume(),vi?Xn():Ao.instrument(gn,"acoustic_grand_piano",{gain:4}).then(i=>{dn=i,vi=!0,Xn()}))});r0.addEventListener("click",()=>{Bo(),ut!==null&&(cancelAnimationFrame(ut),ut=null),Rt&&(document.removeEventListener("keydown",Rt),Rt=null),Kt==="bethoven"?Qo():Kt==="tchai"?Io():_o(),Vn=performance.now(),un==="jogar"&&(Rt=i=>{const e=xn[i.key];if(!e||!dn)return;dn.play(e);let t=!1;for(let n=tt.length-1;n>=0;n--){const A=tt[n],r=xn[A.userData.letter],s=Math.abs(A.position.z-fn.position.z)<.4;if(!A.userData.hit&&r===e&&s){A.userData.hit=!0,t=!0;const o=A.userData.letter;Array.isArray(A.material)&&A.material.forEach((a,c)=>{if(a instanceof jn&&a.color&&a.color.set(5355423),c===2&&a instanceof Kn){const l=bA[o];l?(a.map=l,a.needsUpdate=!0):console.warn(`Textura alternativa não encontrada para: ${o}`)}}),setTimeout(()=>{Et=Math.min(Ti,Et+jt),ki(jt),kn(),vt.remove(A);const a=tt.indexOf(A);a!==-1&&tt.splice(a,1)},400);break}}if(!t){let n=null,A=1/0;for(let r=0;r<tt.length;r++){const s=tt[r],o=xn[s.userData.letter];if(!s.userData.hit&&o===e){const a=Math.abs(s.position.z-fn.position.z);a<A&&(A=a,n=s)}}if(n)Oa(n);else{const r=jt*.1;Et=Math.max(0,Et-r),ki(-r),kn()}}},document.addEventListener("keydown",Rt)),gn.state==="suspended"&&gn.resume(),vi?Xn():Ao.instrument(gn,"acoustic_grand_piano",{gain:4}).then(i=>{dn=i,vi=!0,Xn()})});function Qo(){I("g",0,.05),I("z",0,.05),I("m",0,.05),I("g",536,.05),I("h",1071,.05),I("k",1607,.05),I("k",2143,.05),I("0",2143,.05),I("m",2143,.05),I("h",2679,.05),I("g",3214,.05),I("d",3750,.05),I("a",4286,.05),I("hifen",4286,.05),I("m",4286,.05),I("a",4821,.05),I("d",5357,.05),I("c",5357,.05),I("g",5893,.05),I("z",5893,.05),I("g",6429,.05),I("m",6429,.05),I("d",7232,.05),I("d",7500,.05),I("g",8571,.05),I("z",8571,.05),I("m",8571,.05),I("g",9107,.05),I("h",9643,.05),I("k",10179,.05),I("k",10714,.05),I("0",10714,.05),I("m",10714,.05),I("h",11250,.05),I("g",11786,.05),I("d",12321,.05),I("a",12857,.05),I("hifen",12857,.05),I("m",12857,.05),I("a",13393,.05),I("d",13929,.05),I("c",13929,.05),I("g",14464,.05),I("z",14464,.05),I("d",15e3,.05),I(".",15e3,.05),I("m",15e3,.05),I("a",15804,.05),I("hifen",15804,.05),I("m",15804,.05),I("a",16071,.05),I("hifen",16071,.05),I("m",16071,.05),I("d",17143,.05),I("0",17143,.05),I("m",17143,.05),I("d",17679,.05),I("g",18214,.05),I("z",18214,.05),I("m",18214,.05),I("a",18750,.05),I("d",19286,.05),I("0",19286,.05),I("m",19286,.05),I("g",19821,.05),I("h",20089,.05),I("g",20357,.05),I("z",20357,.05),I("m",20357,.05),I("a",20893,.05),I("d",21429,.05),I("0",21429,.05),I("m",21429,.05),I("g",21964,.05),I("h",22232,.05),I("g",22500,.05),I("2",22500,.05),I("d",23036,.05),I("a",23571,.05),I("n",23571,.05),I("d",24107,.05),I(",",24107,.05),I("m",24643,.05),I("g",25714,.05),I("z",25714,.05),I("m",25714,.05),I("g",26250,.05),I("h",26786,.05),I("k",27321,.05),I("k",27857,.05),I("0",27857,.05),I("m",27857,.05),I("h",28393,.05),I("g",28929,.05),I("d",29464,.05),I("a",3e4,.05),I("hifen",3e4,.05),I("m",3e4,.05),I("a",30536,.05),I("d",31071,.05),I("c",31071,.05),I("g",31607,.05),I("z",31607,.05),I("d",32143,.05),I(".",32143,.05),I("m",32143,.05),I("a",32946,.05),I("hifen",32946,.05),I("m",32946,.05),I("a",33214,.05),I("hifen",33214,.05),I("m",33214,.05),xi=Jt.length,jt=Ti/xi,zi=Math.max(...Jt.map(i=>i.delay))+5e3}function Io(){I("u",0,.05),I("0",0,.05),I("p",1690,.05),I("chave_direita",1690,.05),I("w",2113,.05),I("e",2535,.05),I("t",2958,.05),I("u",3380,.05),I("0",3380,.05),I("e",4648,.05),I("u",5070,.05),I("0",5070,.05),I("e",6338,.05),I("u",6761,.05),I("0",6761,.05),I("p",8028,.05),I("e",8451,.05),I("2",8451,.05),I("p",8873,.05),I("k",9296,.05),I("m",9296,.05),I("e",9718,.05),I("p",10141,.05),I("0",10141,.05),I("hifen",11831,.05),I("t",12254,.05),I("e",12676,.05),I("w",13099,.05),I("u",13521,.05),I("0",13521,.05),I("p",15211,.05),I("hifen",15211,.05),I("w",15634,.05),I("e",16056,.05),I("t",16479,.05),I("u",16901,.05),I("0",16901,.05),I("e",18169,.05),I("u",18592,.05),I("0",18592,.05),I("e",19859,.05),I("u",20282,.05),I("0",20282,.05),I("p",21549,.05),I("e",21972,.05),I("2",21972,.05),I("p",22394,.05),I("k",22817,.05),I("m",22817,.05),I("e",23240,.05),I("p",23662,.05),I("0",23662,.05),I("0",25352,.05),I("p",26197,.05),I("w",27042,.05),I("n",27042,.05),I("e",27887,.05),I("t",28732,.05),I("m",28732,.05),I("u",29578,.05),I("i",3e4,.05),I("o",30423,.05),I(",",30423,.05),I("i",31690,.05),I("u",32113,.05),I(",",32113,.05),I("i",32958,.05),I("o",33380,.05),I("3",33803,.05),I("hifen",33803,.05),I("o",35071,.05),I("i",35493,.05),I("c",35493,.05),I("o",36338,.05),I("3",36761,.05),I("1",37183,.05),I("x",37183,.05),I("3",38451,.05),I("u",38873,.05),I(",",38873,.05),I("e",39296,.05),I("w",39718,.05),I("0",39718,.05),I("p",40141,.05),I("w",40563,.05),I("n",40563,.05),I("e",41409,.05),I("t",42254,.05),I("m",42254,.05),I("u",43099,.05),I("i",43521,.05),I("o",43944,.05),I(",",43944,.05),I("i",45211,.05),I("u",45634,.05),I(",",45634,.05),I("i",46479,.05),I("o",46902,.05),I("3",47324,.05),I("hifen",47324,.05),I("o",48592,.05),I("i",49014,.05),I("c",49014,.05),I("o",49859,.05),I("3",50282,.05),I("5",50704,.05),I("z",50704,.05),I("i",51972,.05),I("t",52395,.05),I(";",52395,.05),I("i",53240,.05),I("5",53662,.05),I("1",54085,.05),I(".",54085,.05),I("b",54085,.05),I("2",55352,.05),I("1",55775,.05),I("hifen",55775,.05),I(";",55775,.05),I("u",57042,.05),I("u",57465,.05),I("0",57465,.05),I("p",59155,.05),I("hifen",59155,.05),I("w",59578,.05),I("e",6e4,.05),I("t",60423,.05),I("u",60845,.05),I("0",60845,.05),I("e",62113,.05),I("u",62535,.05),I("0",62535,.05),I("e",63803,.05),I("u",64226,.05),I("0",64226,.05),I("p",65493,.05),I("e",65916,.05),I("2",65916,.05),I("p",66338,.05),I("k",66761,.05),I("m",66761,.05),I("e",67183,.05),I("p",67606,.05),I("0",67606,.05),I("hifen",69296,.05),I("t",69719,.05),I("e",70141,.05),I("w",70564,.05),I("u",70986,.05),I("0",70986,.05),I("p",72676,.05),I("hifen",72676,.05),I("w",73099,.05),I("e",73521,.05),I("t",73944,.05),I("u",74366,.05),I("0",74366,.05),I("e",75634,.05),I("u",76057,.05),I("0",76057,.05),I("e",77324,.05),I("u",77747,.05),I("0",77747,.05),I("p",79014,.05),I("e",79437,.05),I("2",79437,.05),I("p",79859,.05),I("k",80282,.05),I("m",80282,.05),I("e",80704,.05),I("p",81127,.05),I("0",81127,.05),xi=Jt.length,jt=Ti/xi,zi=Math.max(...Jt.map(i=>i.delay))+5e3}const Ta={};for(const[i,e]of Object.entries(xn))Ta[e]=i;async function _o(){const i=KE;for(const e of i){const t=Ta[e.pitch];if(!t){console.warn(`⚠️ Sem mapeamento: ${e.pitch} (${e.start_ms}ms)`);continue}I(t,e.start_ms,.05)}xi=Jt.length,jt=Ti/xi,zi=Math.max(...Jt.map(e=>e.delay))+5e3}
