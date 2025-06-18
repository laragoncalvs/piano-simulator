(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function bA(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function wA(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var bo={exports:{}},wo={exports:{}};function RA(i){return i>64&&i<91?i-65:i>96&&i<123?i-71:i>47&&i<58?i+4:i===43?62:i===47?63:0}function OA(i,e){for(var t=i.replace(/[^A-Za-z0-9\+\/]/g,""),n=t.length,r=e?Math.ceil((n*3+1>>2)/e)*e:n*3+1>>2,s=new Uint8Array(r),o,a,A=0,l=0,c=0;c<n;c++)if(a=c&3,A|=RA(t.charCodeAt(c))<<18-6*a,a===3||n-c===1){for(o=0;o<3&&l<r;o++,l++)s[l]=A>>>(16>>>o&24)&255;A=0}return s}var NA={decode:OA},PA=function(i,e){return new Promise(function(t,n){var r=new XMLHttpRequest;e&&(r.responseType=e),r.open("GET",i),r.onload=function(){r.status===200?t(r.response):n(Error(r.statusText))},r.onerror=function(){n(Error("Network Error"))},r.send()})};(function(i){var e=NA,t=PA;function n(I){return function(D){return typeof D=="string"&&I.test(D)}}function r(I,D){return typeof I=="string"?I+D:typeof I=="function"?I(D):D}function s(I,D,B,_){var Q=o(D)?a:A(D)?l:c(D)?d:f(D)?g:m(D)?v:h(D)?u:T(D)?M:x(D)?N:null,V=B||{};return Q?Q(I,D,V):_?Promise.resolve(_):Promise.reject("Source not valid ("+D+")")}s.fetch=t;function o(I){return I instanceof ArrayBuffer}function a(I,D,B){return new Promise(function(_,Q){I.decodeAudioData(D,function(V){_(V)},function(){Q("Can't decode audio data ("+D.slice(0,30)+"...)")})})}var A=n(/\.(mp3|wav|ogg)(\?.*)?$/i);function l(I,D,B){var _=r(B.from,D);return s(I,s.fetch(_,"arraybuffer"),B)}function c(I){return I&&typeof I.then=="function"}function d(I,D,B){return D.then(function(_){return s(I,_,B)})}var f=Array.isArray;function g(I,D,B){return Promise.all(D.map(function(_){return s(I,_,B,_)}))}function m(I){return I&&typeof I=="object"}function v(I,D,B){var _={},Q=Object.keys(D).map(function(V){if(B.only&&B.only.indexOf(V)===-1)return null;var F=D[V];return s(I,F,B,F).then(function(q){_[V]=q})});return Promise.all(Q).then(function(){return _})}var h=n(/\.json(\?.*)?$/i);function u(I,D,B){var _=r(B.from,D);return s(I,s.fetch(_,"text").then(JSON.parse),B)}var T=n(/^data:audio/);function M(I,D,B){var _=D.indexOf(",");return s(I,e.decode(D.slice(_+1)).buffer,B)}var x=n(/\.js(\?.*)?$/i);function N(I,D,B){var _=r(B.from,D);return s(I,s.fetch(_,"text").then(w),B)}function w(I){var D=I.indexOf("MIDI.Soundfont.");if(D<0)throw Error("Invalid MIDI.js Soundfont format");D=I.indexOf("=",D)+2;var B=I.lastIndexOf(",");return JSON.parse(I.slice(D,B)+"}")}i.exports&&(i.exports=s),typeof window<"u"&&(window.loadAudio=s)})(wo);var LA=wo.exports,Ro={exports:{}},UA=HA;function HA(i){var e=i.createGain(),t=e._voltage=zA(i),n=Yn(t),r=Yn(t),s=Yn(t);return e._startAmount=Yn(r),e._endAmount=Yn(s),e._multiplier=Yn(n),e._multiplier.connect(e),e._startAmount.connect(e),e._endAmount.connect(e),e.value=n.gain,e.startValue=r.gain,e.endValue=s.gain,e.startValue.value=0,e.endValue.value=0,Object.defineProperties(e,FA),e}var FA={attack:{value:0,writable:!0},decay:{value:0,writable:!0},sustain:{value:1,writable:!0},release:{value:0,writable:!0},getReleaseDuration:{value:function(){return this.release}},start:{value:function(i){var e=this._multiplier.gain,t=this._startAmount.gain,n=this._endAmount.gain;this._voltage.start(i),this._decayFrom=this._decayFrom=i+this.attack,this._startedAt=i;var r=this.sustain;e.cancelScheduledValues(i),t.cancelScheduledValues(i),n.cancelScheduledValues(i),n.setValueAtTime(0,i),this.attack?(e.setValueAtTime(0,i),e.linearRampToValueAtTime(1,i+this.attack),t.setValueAtTime(1,i),t.linearRampToValueAtTime(0,i+this.attack)):(e.setValueAtTime(1,i),t.setValueAtTime(0,i)),this.decay&&e.setTargetAtTime(r,this._decayFrom,Ma(this.decay))}},stop:{value:function(i,e){e&&(i=i-this.release);var t=i+this.release;if(this.release){var n=this._multiplier.gain,r=this._startAmount.gain,s=this._endAmount.gain;n.cancelScheduledValues(i),r.cancelScheduledValues(i),s.cancelScheduledValues(i);var o=Ma(this.release);if(this.attack&&i<this._decayFrom){var a=VA(0,1,this._startedAt,this._decayFrom,i);n.linearRampToValueAtTime(a,i),r.linearRampToValueAtTime(1-a,i),r.setTargetAtTime(0,i,o)}s.setTargetAtTime(1,i,o),n.setTargetAtTime(0,i,o)}return this._voltage.stop(t),t}},onended:{get:function(){return this._voltage.onended},set:function(i){this._voltage.onended=i}}},GA=new Float32Array([1,1]);function zA(i){var e=i.createBufferSource(),t=i.createBuffer(1,2,i.sampleRate);return t.getChannelData(0).set(GA),e.buffer=t,e.loop=!0,e}function Yn(i){var e=i.context.createGain();return i.connect(e),e}function Ma(i){return Math.log(i+1)/Math.log(100)}function VA(i,e,t,n,r){var s=e-i,o=n-t,a=r-t,A=a/o,l=i+A*s;return l<=i&&(l=i),l>=e&&(l=e),l}var kA=UA,WA={},XA={gain:1,attack:.01,decay:.1,sustain:.9,release:.3,loop:!1,cents:0,loopStart:0,loopEnd:0};function YA(i,e,t){var n=!1,r=0,s={},o=i.createGain();o.gain.value=1;var a=Object.assign({},XA,t),A={context:i,out:o,opts:a};return e instanceof AudioBuffer?A.buffer=e:A.buffers=e,A.start=function(d,f,g){if(A.buffer&&d!==null)return A.start(null,d,f);var m=d?A.buffers[d]:A.buffer;if(m){if(!n){console.warn("SamplePlayer not connected to any node.");return}}else{console.warn("Buffer "+d+" not found.");return}var v=g||WA;f=Math.max(i.currentTime,f||0),A.emit("start",f,d,v);var h=c(d,m,v);return h.id=l(d,h),h.env.start(f),h.source.start(f),A.emit("started",f,h.id,h),v.duration&&h.stop(f+v.duration),h},A.play=function(d,f,g){return A.start(d,f,g)},A.stop=function(d,f){var g;return f=f||Object.keys(s),f.map(function(m){return g=s[m],g?(g.stop(d),g.id):null})},A.connect=function(d){return n=!0,o.connect(d),A},A.emit=function(d,f,g,m){A.onevent&&A.onevent(d,f,g,m);var v=A["on"+d];v&&v(f,g,m)},A;function l(d,f){return f.id=r++,s[f.id]=f,f.source.onended=function(){var g=i.currentTime;f.source.disconnect(),f.env.disconnect(),f.disconnect(),A.emit("ended",g,f.id,f)},f.id}function c(d,f,g){var m=i.createGain();return m.gain.value=0,m.connect(o),m.env=qA(i,g,a),m.env.connect(m.gain),m.source=i.createBufferSource(),m.source.buffer=f,m.source.connect(m),m.source.loop=g.loop||a.loop,m.source.playbackRate.value=jA(g.cents||a.cents),m.source.loopStart=g.loopStart||a.loopStart,m.source.loopEnd=g.loopEnd||a.loopEnd,m.stop=function(v){var h=v||i.currentTime;A.emit("stop",h,d);var u=m.env.stop(h);m.source.stop(u)},m}}function ya(i){return typeof i=="number"}var KA=["attack","decay","sustain","release"];function qA(i,e,t){var n=kA(i),r=e.adsr||t.adsr;return KA.forEach(function(s,o){r?n[s]=r[o]:n[s]=e[s]||t[s]}),n.value.value=ya(e.gain)?e.gain:ya(t.gain)?t.gain:1,n}function jA(i){return i?Math.pow(2,i/1200):1}var ZA=YA,JA=function(i){return i.on=function(e,t){if(arguments.length===1&&typeof e=="function")return i.on("event",e);var n="on"+e,r=i[n];return i[n]=r?$A(r,t):t,i},i};function $A(i,e){return function(t,n,r,s){i(t,n,r,s),e(t,n,r,s)}}var Oo=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function el(){return Oo}var tl=[0,2,4,5,7,9,11];function No(i,e,t){if(typeof i!="string")return null;var n=Oo.exec(i);if(!n||!e&&n[4])return null;var r={letter:n[1].toUpperCase(),acc:n[2].replace(/x/g,"##")};return r.pc=r.letter+r.acc,r.step=(r.letter.charCodeAt(0)+3)%7,r.alt=r.acc[0]==="b"?-r.acc.length:r.acc.length,r.chroma=tl[r.step]+r.alt,n[3]&&(r.oct=+n[3],r.midi=r.chroma+12*(r.oct+1),r.freq=Po(r.midi,t)),e&&(r.tonicOf=n[4]),r}function Po(i,e){return Math.pow(2,(i-69)/12)*(e||440)}var Lo={parse:No,regex:el,midiToFreq:Po},nl=["letter","acc","pc","step","alt","chroma","oct","midi","freq"];nl.forEach(function(i){Lo[i]=function(e){var t=No(e);return t&&typeof t[i]<"u"?t[i]:null}});var il=Lo,rl=il,sl=function(i){return i!==null&&i!==[]&&i>=0&&i<129},al=function(i){return sl(i)?+i:rl.midi(i)},ol=function(i){if(i.buffers){var e=i.opts.map,t=typeof e=="function"?e:al,n=function(s){return s?t(s)||s:null};i.buffers=Al(i.buffers,n);var r=i.start;i.start=function(s,o,a){var A=n(s),l=A%1;return l&&(A=Math.floor(A),a=Object.assign(a||{},{cents:Math.floor(l*100)})),r(A,o,a)}}return i};function Al(i,e){return Object.keys(i).reduce(function(t,n){return t[e(n)]=i[n],t},{})}var ll=Array.isArray,cl=function(i){return i&&typeof i=="object"},ul={},dl=function(i){return i.schedule=function(e,t){var n=i.context.currentTime,r=e<n?n:e;i.emit("schedule",r,t);var s,o,a,A;return t.map(function(l){if(l)ll(l)?(s=l[0],o=l[1]):(s=l.time,o=l);else return null;return cl(o)?(a=o.name||o.key||o.note||o.midi||null,A=o):(a=o,A=ul),i.start(a,r+(s||0),A)})},i};function Xi(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Uo={exports:{}};(function(i,e){(function(t){i.exports=t()})(function(){return function t(n,r,s){function o(l,c){if(!r[l]){if(!n[l]){var d=typeof Xi=="function"&&Xi;if(!c&&d)return d(l,!0);if(a)return a(l,!0);var f=new Error("Cannot find module '"+l+"'");throw f.code="MODULE_NOT_FOUND",f}var g=r[l]={exports:{}};n[l][0].call(g.exports,function(m){var v=n[l][1][m];return o(v||m)},g,g.exports,t,n,r,s)}return r[l].exports}for(var a=typeof Xi=="function"&&Xi,A=0;A<s.length;A++)o(s[A]);return o}({1:[function(t,n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(s){function o(a){if(this._event=a,this._data=a.data,this.receivedTime=a.receivedTime,this._data&&this._data.length<2){console.warn("Illegal MIDI message of length",this._data.length);return}switch(this._messageCode=a.data[0]&240,this.channel=a.data[0]&15,this._messageCode){case 128:this.messageType="noteoff",this.key=a.data[1]&127,this.velocity=a.data[2]&127;break;case 144:this.messageType="noteon",this.key=a.data[1]&127,this.velocity=a.data[2]&127;break;case 160:this.messageType="keypressure",this.key=a.data[1]&127,this.pressure=a.data[2]&127;break;case 176:this.messageType="controlchange",this.controllerNumber=a.data[1]&127,this.controllerValue=a.data[2]&127,this.controllerNumber===120&&this.controllerValue===0?this.channelModeMessage="allsoundoff":this.controllerNumber===121?this.channelModeMessage="resetallcontrollers":this.controllerNumber===122?this.controllerValue===0?this.channelModeMessage="localcontroloff":this.channelModeMessage="localcontrolon":this.controllerNumber===123&&this.controllerValue===0?this.channelModeMessage="allnotesoff":this.controllerNumber===124&&this.controllerValue===0?this.channelModeMessage="omnimodeoff":this.controllerNumber===125&&this.controllerValue===0?this.channelModeMessage="omnimodeon":this.controllerNumber===126?this.channelModeMessage="monomodeon":this.controllerNumber===127&&(this.channelModeMessage="polymodeon");break;case 192:this.messageType="programchange",this.program=a.data[1];break;case 208:this.messageType="channelpressure",this.pressure=a.data[1]&127;break;case 224:this.messageType="pitchbendchange";var A=a.data[2]&127,l=a.data[1]&127;this.pitchBend=(A<<8)+l;break}}return new o(s)},n.exports=r.default},{}]},{},[1])(1)})})(Uo);var fl=Uo.exports,hl=fl,gl=function(i){return i.listenToMidi=function(e,t){var n={},r=t||{},s=r.gain||function(o){return o/127};return e.onmidimessage=function(o){var a=o.messageType?o:hl(o);if(a.messageType==="noteon"&&a.velocity===0&&(a.messageType="noteoff"),!(r.channel&&a.channel!==r.channel))switch(a.messageType){case"noteon":n[a.key]=i.play(a.key,0,{gain:s(a.velocity)});break;case"noteoff":n[a.key]&&(n[a.key].stop(),delete n[a.key]);break}},i},i};(function(i){var e=ZA,t=JA,n=ol,r=dl,s=gl;function o(a,A,l){return s(r(n(t(e(a,A,l)))))}i.exports&&(i.exports=o),typeof window<"u"&&(window.SamplePlayer=o)})(Ro);var pl=Ro.exports;function Da(i,e){return Array(e+1).join(i)}function Zs(i){return typeof i=="number"}function ml(i){return typeof i=="string"}function El(i){return typeof i<"u"}function Ho(i,e){return Math.pow(2,(i-69)/12)*(e||440)}var Fo=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function _l(){return Fo}var vl=[0,2,4,5,7,9,11];function un(i,e,t){if(typeof i!="string")return null;var n=Fo.exec(i);if(!n||!e&&n[4])return null;var r={letter:n[1].toUpperCase(),acc:n[2].replace(/x/g,"##")};r.pc=r.letter+r.acc,r.step=(r.letter.charCodeAt(0)+3)%7,r.alt=r.acc[0]==="b"?-r.acc.length:r.acc.length;var s=vl[r.step]+r.alt;return r.chroma=s<0?12+s:s%12,n[3]&&(r.oct=+n[3],r.midi=s+12*(r.oct+1),r.freq=Ho(r.midi,t)),e&&(r.tonicOf=n[4]),r}var Bl="CDEFGAB";function Cl(i){return Zs(i)?i<0?Da("b",-i):Da("#",i):""}function xl(i){return Zs(i)?""+i:""}function Go(i,e,t){return i===null||typeof i>"u"?null:i.step?Go(i.step,i.alt,i.oct):i<0||i>6?null:Bl.charAt(i)+Cl(e)+xl(t)}function zo(i){if((Zs(i)||ml(i))&&i>=0&&i<128)return+i;var e=un(i);return e&&El(e.midi)?e.midi:null}function Sl(i,e){var t=zo(i);return t===null?null:Ho(t,e)}function Il(i){return(un(i)||{}).letter}function Ml(i){return(un(i)||{}).acc}function yl(i){return(un(i)||{}).pc}function Dl(i){return(un(i)||{}).step}function Tl(i){return(un(i)||{}).alt}function Ql(i){return(un(i)||{}).chroma}function bl(i){return(un(i)||{}).oct}const wl=Object.freeze(Object.defineProperty({__proto__:null,acc:Ml,alt:Tl,build:Go,chroma:Ql,freq:Sl,letter:Il,midi:zo,oct:bl,parse:un,pc:yl,regex:_l,step:Dl},Symbol.toStringTag,{value:"Module"})),Rl=wA(wl);var wr,Ta;function Ol(){if(Ta)return wr;Ta=1;var i=Rl;function e(r,s){if(console.warn("new Soundfont() is deprected"),console.log("Please use Soundfont.instrument() instead of new Soundfont().instrument()"),!(this instanceof e))return new e(r);this.nameToUrl=s||e.nameToUrl,this.ctx=r,this.instruments={},this.promises=[]}e.prototype.onready=function(r){console.warn("deprecated API"),console.log("Please use Promise.all(Soundfont.instrument(), Soundfont.instrument()).then() instead of new Soundfont().onready()"),Promise.all(this.promises).then(r)},e.prototype.instrument=function(r,s){console.warn("new Soundfont().instrument() is deprecated."),console.log("Please use Soundfont.instrument() instead.");var o=this.ctx;if(r=r||"default",r in this.instruments)return this.instruments[r];var a={name:r,play:n(o,s)};if(this.instruments[r]=a,r!=="default"){var A=e.instrument(o,r,s).then(function(l){return a.play=l.play,a});this.promises.push(A),a.onready=function(l){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),A.then(l)}}else a.onready=function(l){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),l()};return a};function t(r,s,o){return console.warn("Soundfont.loadBuffers is deprecate."),console.log("Use Soundfont.instrument(..) and get buffers properties from the result."),e.instrument(r,s,o).then(function(a){return a.buffers})}e.loadBuffers=t;function n(r,s){return s=s||{},function(o,a,A,l){console.warn("The oscillator player is deprecated."),console.log("Starting with version 0.9.0 you will have to wait until the soundfont is loaded to play sounds.");var c=o>0&&o<129?+o:i.midi(o),d=c?i.midiToFreq(c,440):null;if(d){A=A||.2,l=l||{};var f=l.destination||s.destination||r.destination,g=l.vcoType||s.vcoType||"sine",m=l.gain||s.gain||.4,v=r.createOscillator();v.type=g,v.frequency.value=d;var h=r.createGain();return h.gain.value=m,v.connect(h),h.connect(f),v.start(a),A>0&&v.stop(a+A),v}}}return e.noteToMidi=i.midi,wr=e,wr}(function(i){var e=LA,t=pl;function n(a,A,l){if(arguments.length===1)return function(m,v){return n(a,m,v)};var c=l||{},d=c.isSoundfontURL||r,f=c.nameToUrl||s,g=d(A)?A:f(A,c.soundfont,c.format);return e(a,g,{only:c.only||c.notes}).then(function(m){var v=t(a,m,c).connect(c.destination?c.destination:a.destination);return v.url=g,v.name=A,v})}function r(a){return/\.js(\?.*)?$/i.test(a)}function s(a,A,l){return l=l==="ogg"?l:"mp3",A=A==="FluidR3_GM"?A:"MusyngKite","https://gleitz.github.io/midi-js-soundfonts/"+A+"/"+a+"-"+l+".js"}var o=Ol();o.instrument=n,o.nameToUrl=s,i.exports&&(i.exports=o),typeof window<"u"&&(window.Soundfont=o)})(bo);var Nl=bo.exports;const Js=bA(Nl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $s="172",Pl=0,Qa=1,Ll=2,Vo=1,Ul=2,tn=3,Bn=0,Ct=1,yt=2,_n=0,ci=1,ba=2,wa=3,Ra=4,Hl=5,Rn=100,Fl=101,Gl=102,zl=103,Vl=104,kl=200,Wl=201,Xl=202,Yl=203,cs=204,us=205,Kl=206,ql=207,jl=208,Zl=209,Jl=210,$l=211,ec=212,tc=213,nc=214,ds=0,fs=1,hs=2,fi=3,gs=4,ps=5,ms=6,Es=7,ko=0,ic=1,rc=2,vn=0,sc=1,ac=2,oc=3,Ac=4,lc=5,cc=6,uc=7,Wo=300,hi=301,gi=302,_s=303,vs=304,Mr=306,Bs=1e3,nn=1001,Cs=1002,kt=1003,dc=1004,Yi=1005,zt=1006,Rr=1007,Nn=1008,ln=1009,Xo=1010,Yo=1011,Ri=1012,ea=1013,Hn=1014,rn=1015,Hi=1016,ta=1017,na=1018,pi=1020,Ko=35902,qo=1021,jo=1022,Vt=1023,Zo=1024,Jo=1025,ui=1026,mi=1027,$o=1028,ia=1029,eA=1030,ra=1031,sa=1033,gr=33776,pr=33777,mr=33778,Er=33779,xs=35840,Ss=35841,Is=35842,Ms=35843,ys=36196,Ds=37492,Ts=37496,Qs=37808,bs=37809,ws=37810,Rs=37811,Os=37812,Ns=37813,Ps=37814,Ls=37815,Us=37816,Hs=37817,Fs=37818,Gs=37819,zs=37820,Vs=37821,_r=36492,ks=36494,Ws=36495,tA=36283,Xs=36284,Ys=36285,Ks=36286,fc=3200,hc=3201,nA=0,gc=1,En="",Mt="srgb",Ei="srgb-linear",Br="linear",qe="srgb",Kn=7680,Oa=519,pc=512,mc=513,Ec=514,iA=515,_c=516,vc=517,Bc=518,Cc=519,Na=35044,Pa="300 es",sn=2e3,Cr=2001;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Or=Math.PI/180,qs=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function Ne(i,e,t){return Math.max(e,Math.min(t,i))}function xc(i,e){return(i%e+e)%e}function Nr(i,e,t){return(1-t)*i+t*e}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,r,s,o,a,A,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,A,l)}set(e,t,n,r,s,o,a,A,l){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=A,c[6]=n,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],A=n[6],l=n[1],c=n[4],d=n[7],f=n[2],g=n[5],m=n[8],v=r[0],h=r[3],u=r[6],T=r[1],M=r[4],x=r[7],N=r[2],w=r[5],I=r[8];return s[0]=o*v+a*T+A*N,s[3]=o*h+a*M+A*w,s[6]=o*u+a*x+A*I,s[1]=l*v+c*T+d*N,s[4]=l*h+c*M+d*w,s[7]=l*u+c*x+d*I,s[2]=f*v+g*T+m*N,s[5]=f*h+g*M+m*w,s[8]=f*u+g*x+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],A=e[6],l=e[7],c=e[8];return t*o*c-t*a*l-n*s*c+n*a*A+r*s*l-r*o*A}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],A=e[6],l=e[7],c=e[8],d=c*o-a*l,f=a*A-c*s,g=l*s-o*A,m=t*d+n*f+r*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(r*l-c*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(c*t-r*A)*v,e[5]=(r*s-a*t)*v,e[6]=g*v,e[7]=(n*A-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const A=Math.cos(s),l=Math.sin(s);return this.set(n*A,n*l,-n*(A*o+l*a)+o+e,-r*l,r*A,-r*(-l*o+A*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pr.makeScale(e,t)),this}rotate(e){return this.premultiply(Pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new Qe;function rA(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Oi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sc(){const i=Oi("canvas");return i.style.display="block",i}const La={};function Ai(i){i in La||(La[i]=!0,console.warn(i))}function Ic(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Mc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ua=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ha=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dc(){const i={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===qe&&(r.r=an(r.r),r.g=an(r.g),r.b=an(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===qe&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===En?Br:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ei]:{primaries:e,whitePoint:n,transfer:Br,toXYZ:Ua,fromXYZ:Ha,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:qe,toXYZ:Ua,fromXYZ:Ha,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}const Ve=Dc();function an(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qn;class Tc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qn===void 0&&(qn=Oi("canvas")),qn.width=e.width,qn.height=e.height;const n=qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=an(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(an(t[n]/255)*255):t[n]=an(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qc=0;class sA{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Lr(r[o].image)):s.push(Lr(r[o]))}else s=Lr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bc=0;class pt extends Ci{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=nn,r=nn,s=zt,o=Nn,a=Vt,A=ln,l=pt.DEFAULT_ANISOTROPY,c=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Fi(),this.name="",this.source=new sA(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=A,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=Wo;pt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const A=e.elements,l=A[0],c=A[4],d=A[8],f=A[1],g=A[5],m=A[9],v=A[2],h=A[6],u=A[10];if(Math.abs(c-f)<.01&&Math.abs(d-v)<.01&&Math.abs(m-h)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+v)<.1&&Math.abs(m+h)<.1&&Math.abs(l+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(g+1)/2,N=(u+1)/2,w=(c+f)/4,I=(d+v)/4,D=(m+h)/4;return M>x&&M>N?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=w/n,s=I/n):x>N?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=w/r,s=D/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=I/s,r=D/s),this.set(n,r,s,t),this}let T=Math.sqrt((h-m)*(h-m)+(d-v)*(d-v)+(f-c)*(f-c));return Math.abs(T)<.001&&(T=1),this.x=(h-m)/T,this.y=(d-v)/T,this.z=(f-c)/T,this.w=Math.acos((l+g+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this.w=Ne(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this.w=Ne(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wc extends Ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new sA(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends wc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class aA extends pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rc extends pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let A=n[r+0],l=n[r+1],c=n[r+2],d=n[r+3];const f=s[o+0],g=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[t+0]=A,e[t+1]=l,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=m,e[t+3]=v;return}if(d!==v||A!==f||l!==g||c!==m){let h=1-a;const u=A*f+l*g+c*m+d*v,T=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const N=Math.sqrt(M),w=Math.atan2(N,u*T);h=Math.sin(h*w)/N,a=Math.sin(a*w)/N}const x=a*T;if(A=A*h+f*x,l=l*h+g*x,c=c*h+m*x,d=d*h+v*x,h===1-a){const N=1/Math.sqrt(A*A+l*l+c*c+d*d);A*=N,l*=N,c*=N,d*=N}}e[t]=A,e[t+1]=l,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],A=n[r+1],l=n[r+2],c=n[r+3],d=s[o],f=s[o+1],g=s[o+2],m=s[o+3];return e[t]=a*m+c*d+A*g-l*f,e[t+1]=A*m+c*f+l*d-a*g,e[t+2]=l*m+c*g+a*f-A*d,e[t+3]=c*m-a*d-A*f-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,A=Math.sin,l=a(n/2),c=a(r/2),d=a(s/2),f=A(n/2),g=A(r/2),m=A(s/2);switch(o){case"XYZ":this._x=f*c*d+l*g*m,this._y=l*g*d-f*c*m,this._z=l*c*m+f*g*d,this._w=l*c*d-f*g*m;break;case"YXZ":this._x=f*c*d+l*g*m,this._y=l*g*d-f*c*m,this._z=l*c*m-f*g*d,this._w=l*c*d+f*g*m;break;case"ZXY":this._x=f*c*d-l*g*m,this._y=l*g*d+f*c*m,this._z=l*c*m+f*g*d,this._w=l*c*d-f*g*m;break;case"ZYX":this._x=f*c*d-l*g*m,this._y=l*g*d+f*c*m,this._z=l*c*m-f*g*d,this._w=l*c*d+f*g*m;break;case"YZX":this._x=f*c*d+l*g*m,this._y=l*g*d+f*c*m,this._z=l*c*m-f*g*d,this._w=l*c*d-f*g*m;break;case"XZY":this._x=f*c*d-l*g*m,this._y=l*g*d-f*c*m,this._z=l*c*m+f*g*d,this._w=l*c*d+f*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],A=t[9],l=t[2],c=t[6],d=t[10],f=n+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-A)*g,this._y=(s-l)*g,this._z=(o-r)*g}else if(n>a&&n>d){const g=2*Math.sqrt(1+n-a-d);this._w=(c-A)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+l)/g}else if(a>d){const g=2*Math.sqrt(1+a-n-d);this._w=(s-l)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(A+c)/g}else{const g=2*Math.sqrt(1+d-n-a);this._w=(o-r)/g,this._x=(s+l)/g,this._y=(A+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,A=t._y,l=t._z,c=t._w;return this._x=n*c+o*a+r*l-s*A,this._y=r*c+o*A+s*a-n*l,this._z=s*c+o*l+n*A-r*a,this._w=o*c-n*a-r*A-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const A=1-a*a;if(A<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const l=Math.sqrt(A),c=Math.atan2(l,a),d=Math.sin((1-t)*c)/l,f=Math.sin(t*c)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,A=e.w,l=2*(o*r-a*n),c=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+A*l+o*d-a*c,this.y=n+A*c+a*l-s*d,this.z=r+A*d+s*c-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,A=t.z;return this.x=r*A-s*a,this.y=s*o-n*A,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ur.copy(this).projectOnVector(e),this.sub(Ur)}reflect(e){return this.sub(Ur.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new H,Fa=new Gi;class zi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ut.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ut.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ut.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ut):Ut.fromBufferAttribute(s,o),Ut.applyMatrix4(e.matrixWorld),this.expandByPoint(Ut);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ki.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ki.copy(n.boundingBox)),Ki.applyMatrix4(e.matrixWorld),this.union(Ki)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ut),Ut.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),qi.subVectors(this.max,Di),jn.subVectors(e.a,Di),Zn.subVectors(e.b,Di),Jn.subVectors(e.c,Di),dn.subVectors(Zn,jn),fn.subVectors(Jn,Zn),In.subVectors(jn,Jn);let t=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-In.z,In.y,dn.z,0,-dn.x,fn.z,0,-fn.x,In.z,0,-In.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-In.y,In.x,0];return!Hr(t,jn,Zn,Jn,qi)||(t=[1,0,0,0,1,0,0,0,1],!Hr(t,jn,Zn,Jn,qi))?!1:(ji.crossVectors(dn,fn),t=[ji.x,ji.y,ji.z],Hr(t,jn,Zn,Jn,qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ut).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ut).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new H,new H,new H,new H,new H,new H,new H,new H],Ut=new H,Ki=new zi,jn=new H,Zn=new H,Jn=new H,dn=new H,fn=new H,In=new H,Di=new H,qi=new H,ji=new H,Mn=new H;function Hr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Mn.fromArray(i,s);const a=r.x*Math.abs(Mn.x)+r.y*Math.abs(Mn.y)+r.z*Math.abs(Mn.z),A=e.dot(Mn),l=t.dot(Mn),c=n.dot(Mn);if(Math.max(-Math.max(A,l,c),Math.min(A,l,c))>a)return!1}return!0}const Oc=new zi,Ti=new H,Fr=new H;class aa{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Oc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ti.subVectors(e,this.center);const t=Ti.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ti,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ti.copy(e.center).add(Fr)),this.expandByPoint(Ti.copy(e.center).sub(Fr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zt=new H,Gr=new H,Zi=new H,hn=new H,zr=new H,Ji=new H,Vr=new H;class Nc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.origin).addScaledVector(this.direction,t),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gr.copy(e).add(t).multiplyScalar(.5),Zi.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(Gr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Zi),a=hn.dot(this.direction),A=-hn.dot(Zi),l=hn.lengthSq(),c=Math.abs(1-o*o);let d,f,g,m;if(c>0)if(d=o*A-a,f=o*a-A,m=s*c,d>=0)if(f>=-m)if(f<=m){const v=1/c;d*=v,f*=v,g=d*(d+o*f+2*a)+f*(o*d+f+2*A)+l}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*A)+l;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*A)+l;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-A),s),g=-d*d+f*(f+2*A)+l):f<=m?(d=0,f=Math.min(Math.max(-s,-A),s),g=f*(f+2*A)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-A),s),g=-d*d+f*(f+2*A)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*A)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Gr).addScaledVector(Zi,f),g}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const n=Zt.dot(this.direction),r=Zt.dot(Zt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,A=n+o;return A<0?null:a<0?this.at(A,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,A;const l=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,A=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,A=(e.min.z-f.z)*d),n>A||a>r)||((a>n||n!==n)&&(n=a),(A<r||r!==r)&&(r=A),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,r,s){zr.subVectors(t,e),Ji.subVectors(n,e),Vr.crossVectors(zr,Ji);let o=this.direction.dot(Vr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hn.subVectors(this.origin,e);const A=a*this.direction.dot(Ji.crossVectors(hn,Ji));if(A<0)return null;const l=a*this.direction.dot(zr.cross(hn));if(l<0||A+l>o)return null;const c=-a*hn.dot(Vr);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,r,s,o,a,A,l,c,d,f,g,m,v,h){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,A,l,c,d,f,g,m,v,h)}set(e,t,n,r,s,o,a,A,l,c,d,f,g,m,v,h){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=A,u[2]=l,u[6]=c,u[10]=d,u[14]=f,u[3]=g,u[7]=m,u[11]=v,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$n.setFromMatrixColumn(e,0).length(),s=1/$n.setFromMatrixColumn(e,1).length(),o=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),A=Math.cos(r),l=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,m=a*c,v=a*d;t[0]=A*c,t[4]=-A*d,t[8]=l,t[1]=g+m*l,t[5]=f-v*l,t[9]=-a*A,t[2]=v-f*l,t[6]=m+g*l,t[10]=o*A}else if(e.order==="YXZ"){const f=A*c,g=A*d,m=l*c,v=l*d;t[0]=f+v*a,t[4]=m*a-g,t[8]=o*l,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=g*a-m,t[6]=v+f*a,t[10]=o*A}else if(e.order==="ZXY"){const f=A*c,g=A*d,m=l*c,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=m+g*a,t[1]=g+m*a,t[5]=o*c,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*A}else if(e.order==="ZYX"){const f=o*c,g=o*d,m=a*c,v=a*d;t[0]=A*c,t[4]=m*l-g,t[8]=f*l+v,t[1]=A*d,t[5]=v*l+f,t[9]=g*l-m,t[2]=-l,t[6]=a*A,t[10]=o*A}else if(e.order==="YZX"){const f=o*A,g=o*l,m=a*A,v=a*l;t[0]=A*c,t[4]=v-f*d,t[8]=m*d+g,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-l*c,t[6]=g*d+m,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*A,g=o*l,m=a*A,v=a*l;t[0]=A*c,t[4]=-d,t[8]=l*c,t[1]=f*d+v,t[5]=o*c,t[9]=g*d-m,t[2]=m*d-g,t[6]=a*c,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pc,e,Lc)}lookAt(e,t,n){const r=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),gn.crossVectors(n,St),gn.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),gn.crossVectors(n,St)),gn.normalize(),$i.crossVectors(St,gn),r[0]=gn.x,r[4]=$i.x,r[8]=St.x,r[1]=gn.y,r[5]=$i.y,r[9]=St.y,r[2]=gn.z,r[6]=$i.z,r[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],A=n[8],l=n[12],c=n[1],d=n[5],f=n[9],g=n[13],m=n[2],v=n[6],h=n[10],u=n[14],T=n[3],M=n[7],x=n[11],N=n[15],w=r[0],I=r[4],D=r[8],B=r[12],_=r[1],Q=r[5],V=r[9],F=r[13],q=r[2],j=r[6],X=r[10],J=r[14],z=r[3],se=r[7],ue=r[11],_e=r[15];return s[0]=o*w+a*_+A*q+l*z,s[4]=o*I+a*Q+A*j+l*se,s[8]=o*D+a*V+A*X+l*ue,s[12]=o*B+a*F+A*J+l*_e,s[1]=c*w+d*_+f*q+g*z,s[5]=c*I+d*Q+f*j+g*se,s[9]=c*D+d*V+f*X+g*ue,s[13]=c*B+d*F+f*J+g*_e,s[2]=m*w+v*_+h*q+u*z,s[6]=m*I+v*Q+h*j+u*se,s[10]=m*D+v*V+h*X+u*ue,s[14]=m*B+v*F+h*J+u*_e,s[3]=T*w+M*_+x*q+N*z,s[7]=T*I+M*Q+x*j+N*se,s[11]=T*D+M*V+x*X+N*ue,s[15]=T*B+M*F+x*J+N*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],A=e[9],l=e[13],c=e[2],d=e[6],f=e[10],g=e[14],m=e[3],v=e[7],h=e[11],u=e[15];return m*(+s*A*d-r*l*d-s*a*f+n*l*f+r*a*g-n*A*g)+v*(+t*A*g-t*l*f+s*o*f-r*o*g+r*l*c-s*A*c)+h*(+t*l*d-t*a*g-s*o*d+n*o*g+s*a*c-n*l*c)+u*(-r*a*c-t*A*d+t*a*f+r*o*d-n*o*f+n*A*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],A=e[6],l=e[7],c=e[8],d=e[9],f=e[10],g=e[11],m=e[12],v=e[13],h=e[14],u=e[15],T=d*h*l-v*f*l+v*A*g-a*h*g-d*A*u+a*f*u,M=m*f*l-c*h*l-m*A*g+o*h*g+c*A*u-o*f*u,x=c*v*l-m*d*l+m*a*g-o*v*g-c*a*u+o*d*u,N=m*d*A-c*v*A-m*a*f+o*v*f+c*a*h-o*d*h,w=t*T+n*M+r*x+s*N;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/w;return e[0]=T*I,e[1]=(v*f*s-d*h*s-v*r*g+n*h*g+d*r*u-n*f*u)*I,e[2]=(a*h*s-v*A*s+v*r*l-n*h*l-a*r*u+n*A*u)*I,e[3]=(d*A*s-a*f*s-d*r*l+n*f*l+a*r*g-n*A*g)*I,e[4]=M*I,e[5]=(c*h*s-m*f*s+m*r*g-t*h*g-c*r*u+t*f*u)*I,e[6]=(m*A*s-o*h*s-m*r*l+t*h*l+o*r*u-t*A*u)*I,e[7]=(o*f*s-c*A*s+c*r*l-t*f*l-o*r*g+t*A*g)*I,e[8]=x*I,e[9]=(m*d*s-c*v*s-m*n*g+t*v*g+c*n*u-t*d*u)*I,e[10]=(o*v*s-m*a*s+m*n*l-t*v*l-o*n*u+t*a*u)*I,e[11]=(c*a*s-o*d*s-c*n*l+t*d*l+o*n*g-t*a*g)*I,e[12]=N*I,e[13]=(c*v*r-m*d*r+m*n*f-t*v*f-c*n*h+t*d*h)*I,e[14]=(m*a*r-o*v*r-m*n*A+t*v*A+o*n*h-t*a*h)*I,e[15]=(o*d*r-c*a*r+c*n*A-t*d*A-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,A=e.z,l=s*o,c=s*a;return this.set(l*o+n,l*a-r*A,l*A+r*a,0,l*a+r*A,c*a+n,c*A-r*o,0,l*A-r*a,c*A+r*o,s*A*A+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,A=t._w,l=s+s,c=o+o,d=a+a,f=s*l,g=s*c,m=s*d,v=o*c,h=o*d,u=a*d,T=A*l,M=A*c,x=A*d,N=n.x,w=n.y,I=n.z;return r[0]=(1-(v+u))*N,r[1]=(g+x)*N,r[2]=(m-M)*N,r[3]=0,r[4]=(g-x)*w,r[5]=(1-(f+u))*w,r[6]=(h+T)*w,r[7]=0,r[8]=(m+M)*I,r[9]=(h-T)*I,r[10]=(1-(f+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=$n.set(r[0],r[1],r[2]).length();const o=$n.set(r[4],r[5],r[6]).length(),a=$n.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);const l=1/s,c=1/o,d=1/a;return Ht.elements[0]*=l,Ht.elements[1]*=l,Ht.elements[2]*=l,Ht.elements[4]*=c,Ht.elements[5]*=c,Ht.elements[6]*=c,Ht.elements[8]*=d,Ht.elements[9]*=d,Ht.elements[10]*=d,t.setFromRotationMatrix(Ht),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=sn){const A=this.elements,l=2*s/(t-e),c=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let g,m;if(a===sn)g=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Cr)g=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return A[0]=l,A[4]=0,A[8]=d,A[12]=0,A[1]=0,A[5]=c,A[9]=f,A[13]=0,A[2]=0,A[6]=0,A[10]=g,A[14]=m,A[3]=0,A[7]=0,A[11]=-1,A[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=sn){const A=this.elements,l=1/(t-e),c=1/(n-r),d=1/(o-s),f=(t+e)*l,g=(n+r)*c;let m,v;if(a===sn)m=(o+s)*d,v=-2*d;else if(a===Cr)m=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return A[0]=2*l,A[4]=0,A[8]=0,A[12]=-f,A[1]=0,A[5]=2*c,A[9]=0,A[13]=-g,A[2]=0,A[6]=0,A[10]=v,A[14]=-m,A[3]=0,A[7]=0,A[11]=0,A[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new H,Ht=new rt,Pc=new H(0,0,0),Lc=new H(1,1,1),gn=new H,$i=new H,St=new H,Ga=new rt,za=new Gi;class Kt{constructor(e=0,t=0,n=0,r=Kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],A=r[1],l=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(A,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(A,s));break;case"ZYX":this._y=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(A,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ne(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ga,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return za.setFromEuler(this),this.setFromQuaternion(za,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kt.DEFAULT_ORDER="XYZ";class oA{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uc=0;const Va=new H,ei=new Gi,Jt=new rt,er=new H,Qi=new H,Hc=new H,Fc=new Gi,ka=new H(1,0,0),Wa=new H(0,1,0),Xa=new H(0,0,1),Ya={type:"added"},Gc={type:"removed"},ti={type:"childadded",child:null},kr={type:"childremoved",child:null};class mt extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new H,t=new Kt,n=new Gi,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Qe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oA,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(ka,e)}rotateY(e){return this.rotateOnAxis(Wa,e)}rotateZ(e){return this.rotateOnAxis(Xa,e)}translateOnAxis(e,t){return Va.copy(e).applyQuaternion(this.quaternion),this.position.add(Va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ka,e)}translateY(e){return this.translateOnAxis(Wa,e)}translateZ(e){return this.translateOnAxis(Xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Qi,er,this.up):Jt.lookAt(er,Qi,this.up),this.quaternion.setFromRotationMatrix(Jt),r&&(Jt.extractRotation(r.matrixWorld),ei.setFromRotationMatrix(Jt),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ya),ti.child=e,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gc),kr.child=e,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ya),ti.child=e,this.dispatchEvent(ti),ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Hc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Fc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,A){return a[A.uuid]===void 0&&(a[A.uuid]=A.toJSON(e)),A.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const A=a.shapes;if(Array.isArray(A))for(let l=0,c=A.length;l<c;l++){const d=A[l];s(e.shapes,d)}else s(e.shapes,A)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let A=0,l=this.material.length;A<l;A++)a.push(s(e.materials,this.material[A]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const A=this.animations[a];r.animations.push(s(e.animations,A))}}if(t){const a=o(e.geometries),A=o(e.materials),l=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),A.length>0&&(n.materials=A),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){const A=[];for(const l in a){const c=a[l];delete c.metadata,A.push(c)}return A}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}mt.DEFAULT_UP=new H(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new H,$t=new H,Wr=new H,en=new H,ni=new H,ii=new H,Ka=new H,Xr=new H,Yr=new H,Kr=new H,qr=new it,jr=new it,Zr=new it;class Gt{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ft.subVectors(e,t),r.cross(Ft);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ft.subVectors(r,t),$t.subVectors(n,t),Wr.subVectors(e,t);const o=Ft.dot(Ft),a=Ft.dot($t),A=Ft.dot(Wr),l=$t.dot($t),c=$t.dot(Wr),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,g=(l*A-a*c)*f,m=(o*c-a*A)*f;return s.set(1-g-m,m,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(e,t,n,r,s,o,a,A){return this.getBarycoord(e,t,n,r,en)===null?(A.x=0,A.y=0,"z"in A&&(A.z=0),"w"in A&&(A.w=0),null):(A.setScalar(0),A.addScaledVector(s,en.x),A.addScaledVector(o,en.y),A.addScaledVector(a,en.z),A)}static getInterpolatedAttribute(e,t,n,r,s,o){return qr.setScalar(0),jr.setScalar(0),Zr.setScalar(0),qr.fromBufferAttribute(e,t),jr.fromBufferAttribute(e,n),Zr.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(qr,s.x),o.addScaledVector(jr,s.y),o.addScaledVector(Zr,s.z),o}static isFrontFacing(e,t,n,r){return Ft.subVectors(n,t),$t.subVectors(e,t),Ft.cross($t).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Ft.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Gt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ni.subVectors(r,n),ii.subVectors(s,n),Xr.subVectors(e,n);const A=ni.dot(Xr),l=ii.dot(Xr);if(A<=0&&l<=0)return t.copy(n);Yr.subVectors(e,r);const c=ni.dot(Yr),d=ii.dot(Yr);if(c>=0&&d<=c)return t.copy(r);const f=A*d-c*l;if(f<=0&&A>=0&&c<=0)return o=A/(A-c),t.copy(n).addScaledVector(ni,o);Kr.subVectors(e,s);const g=ni.dot(Kr),m=ii.dot(Kr);if(m>=0&&g<=m)return t.copy(s);const v=g*l-A*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(ii,a);const h=c*m-g*d;if(h<=0&&d-c>=0&&g-m>=0)return Ka.subVectors(s,r),a=(d-c)/(d-c+(g-m)),t.copy(r).addScaledVector(Ka,a);const u=1/(h+v+f);return o=v*u,a=f*u,t.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const AA={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Jr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ve.workingColorSpace){if(e=xc(e,1),t=Ne(t,0,1),n=Ne(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Jr(o,s,e+1/3),this.g=Jr(o,s,e),this.b=Jr(o,s,e-1/3)}return Ve.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=AA[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=an(e.r),this.g=an(e.g),this.b=an(e.b),this}copyLinearToSRGB(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ve.fromWorkingColorSpace(gt.copy(this),e),Math.round(Ne(gt.r*255,0,255))*65536+Math.round(Ne(gt.g*255,0,255))*256+Math.round(Ne(gt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(gt.copy(this),t);const n=gt.r,r=gt.g,s=gt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let A,l;const c=(a+o)/2;if(a===o)A=0,l=0;else{const d=o-a;switch(l=c<=.5?d/(o+a):d/(2-o-a),o){case n:A=(r-s)/d+(r<s?6:0);break;case r:A=(s-n)/d+2;break;case s:A=(n-r)/d+4;break}A/=6}return e.h=A,e.s=l,e.l=c,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Mt){Ve.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,r=gt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(pn),this.setHSL(pn.h+e,pn.s+t,pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(tr);const n=Nr(pn.h,tr.h,t),r=Nr(pn.s,tr.s,t),s=Nr(pn.l,tr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new ke;ke.NAMES=AA;let zc=0;class Vi extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=ci,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cs,this.blendDst=us,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cs&&(n.blendSrc=this.blendSrc),this.blendDst!==us&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const A=s[a];delete A.metadata,o.push(A)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oa extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new H,nr=new Ye;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),e}}class lA extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cA extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pn extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vc=0;const Rt=new rt,$r=new mt,ri=new H,It=new zi,bi=new zi,ct=new H;class kn extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rA(e)?cA:lA)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];bi.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(It.min,bi.min),It.expandByPoint(ct),ct.addVectors(It.max,bi.max),It.expandByPoint(ct)):(It.expandByPoint(bi.min),It.expandByPoint(bi.max))}It.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],A=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)ct.fromBufferAttribute(a,l),A&&(ri.fromBufferAttribute(e,l),ct.add(ri)),r=Math.max(r,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],A=[];for(let D=0;D<n.count;D++)a[D]=new H,A[D]=new H;const l=new H,c=new H,d=new H,f=new Ye,g=new Ye,m=new Ye,v=new H,h=new H;function u(D,B,_){l.fromBufferAttribute(n,D),c.fromBufferAttribute(n,B),d.fromBufferAttribute(n,_),f.fromBufferAttribute(s,D),g.fromBufferAttribute(s,B),m.fromBufferAttribute(s,_),c.sub(l),d.sub(l),g.sub(f),m.sub(f);const Q=1/(g.x*m.y-m.x*g.y);isFinite(Q)&&(v.copy(c).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(Q),h.copy(d).multiplyScalar(g.x).addScaledVector(c,-m.x).multiplyScalar(Q),a[D].add(v),a[B].add(v),a[_].add(v),A[D].add(h),A[B].add(h),A[_].add(h))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,B=T.length;D<B;++D){const _=T[D],Q=_.start,V=_.count;for(let F=Q,q=Q+V;F<q;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new H,x=new H,N=new H,w=new H;function I(D){N.fromBufferAttribute(r,D),w.copy(N);const B=a[D];M.copy(B),M.sub(N.multiplyScalar(N.dot(B))).normalize(),x.crossVectors(w,B);const Q=x.dot(A[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,Q)}for(let D=0,B=T.length;D<B;++D){const _=T[D],Q=_.start,V=_.count;for(let F=Q,q=Q+V;F<q;F+=3)I(e.getX(F+0)),I(e.getX(F+1)),I(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const r=new H,s=new H,o=new H,a=new H,A=new H,l=new H,c=new H,d=new H;if(e)for(let f=0,g=e.count;f<g;f+=3){const m=e.getX(f+0),v=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,h),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(n,m),A.fromBufferAttribute(n,v),l.fromBufferAttribute(n,h),a.add(c),A.add(c),l.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,A.x,A.y,A.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,A){const l=a.array,c=a.itemSize,d=a.normalized,f=new l.constructor(A.length*c);let g=0,m=0;for(let v=0,h=A.length;v<h;v++){a.isInterleavedBufferAttribute?g=A[v]*a.data.stride+a.offset:g=A[v]*c;for(let u=0;u<c;u++)f[m++]=l[g++]}return new Yt(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,r=this.attributes;for(const a in r){const A=r[a],l=e(A,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const A=[],l=s[a];for(let c=0,d=l.length;c<d;c++){const f=l[c],g=e(f,n);A.push(g)}t.morphAttributes[a]=A}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,A=o.length;a<A;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const A=this.parameters;for(const l in A)A[l]!==void 0&&(e[l]=A[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const A in n){const l=n[A];e.data.attributes[A]=l.toJSON(e.data)}const r={};let s=!1;for(const A in this.morphAttributes){const l=this.morphAttributes[A],c=[];for(let d=0,f=l.length;d<f;d++){const g=l[d];c.push(g.toJSON(e.data))}c.length>0&&(r[A]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const c=r[l];this.setAttribute(l,c.clone(t))}const s=e.morphAttributes;for(const l in s){const c=[],d=s[l];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,c=o.length;l<c;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const A=e.boundingSphere;return A!==null&&(this.boundingSphere=A.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new rt,yn=new Nc,ir=new aa,ja=new H,rr=new H,sr=new H,ar=new H,es=new H,or=new H,Za=new H,Ar=new H;class Dt extends mt{constructor(e=new kn,t=new oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){or.set(0,0,0);for(let A=0,l=s.length;A<l;A++){const c=a[A],d=s[A];c!==0&&(es.fromBufferAttribute(d,e),o?or.addScaledVector(es,c):or.addScaledVector(es.sub(t),c))}t.add(or)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),yn.copy(e.ray).recast(e.near),!(ir.containsPoint(yn.origin)===!1&&(yn.intersectSphere(ir,ja)===null||yn.origin.distanceToSquared(ja)>(e.far-e.near)**2))&&(qa.copy(s).invert(),yn.copy(e.ray).applyMatrix4(qa),!(n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,A=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const h=f[m],u=o[h.materialIndex],T=Math.max(h.start,g.start),M=Math.min(a.count,Math.min(h.start+h.count,g.start+g.count));for(let x=T,N=M;x<N;x+=3){const w=a.getX(x),I=a.getX(x+1),D=a.getX(x+2);r=lr(this,u,e,n,l,c,d,w,I,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const m=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let h=m,u=v;h<u;h+=3){const T=a.getX(h),M=a.getX(h+1),x=a.getX(h+2);r=lr(this,o,e,n,l,c,d,T,M,x),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(A!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const h=f[m],u=o[h.materialIndex],T=Math.max(h.start,g.start),M=Math.min(A.count,Math.min(h.start+h.count,g.start+g.count));for(let x=T,N=M;x<N;x+=3){const w=x,I=x+1,D=x+2;r=lr(this,u,e,n,l,c,d,w,I,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const m=Math.max(0,g.start),v=Math.min(A.count,g.start+g.count);for(let h=m,u=v;h<u;h+=3){const T=h,M=h+1,x=h+2;r=lr(this,o,e,n,l,c,d,T,M,x),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function kc(i,e,t,n,r,s,o,a){let A;if(e.side===Ct?A=n.intersectTriangle(o,s,r,!0,a):A=n.intersectTriangle(r,s,o,e.side===Bn,a),A===null)return null;Ar.copy(a),Ar.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ar);return l<t.near||l>t.far?null:{distance:l,point:Ar.clone(),object:i}}function lr(i,e,t,n,r,s,o,a,A,l){i.getVertexPosition(a,rr),i.getVertexPosition(A,sr),i.getVertexPosition(l,ar);const c=kc(i,e,t,n,rr,sr,ar,Za);if(c){const d=new H;Gt.getBarycoord(Za,rr,sr,ar,d),r&&(c.uv=Gt.getInterpolatedAttribute(r,a,A,l,d,new Ye)),s&&(c.uv1=Gt.getInterpolatedAttribute(s,a,A,l,d,new Ye)),o&&(c.normal=Gt.getInterpolatedAttribute(o,a,A,l,d,new H),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:A,c:l,normal:new H,materialIndex:0};Gt.getNormal(rr,sr,ar,f.normal),c.face=f,c.barycoord=d}return c}class xi extends kn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const A=[],l=[],c=[],d=[];let f=0,g=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(A),this.setAttribute("position",new Pn(l,3)),this.setAttribute("normal",new Pn(c,3)),this.setAttribute("uv",new Pn(d,2));function m(v,h,u,T,M,x,N,w,I,D,B){const _=x/I,Q=N/D,V=x/2,F=N/2,q=w/2,j=I+1,X=D+1;let J=0,z=0;const se=new H;for(let ue=0;ue<X;ue++){const _e=ue*Q-F;for(let Re=0;Re<j;Re++){const je=Re*_-V;se[v]=je*T,se[h]=_e*M,se[u]=q,l.push(se.x,se.y,se.z),se[v]=0,se[h]=0,se[u]=w>0?1:-1,c.push(se.x,se.y,se.z),d.push(Re/I),d.push(1-ue/D),J+=1}}for(let ue=0;ue<D;ue++)for(let _e=0;_e<I;_e++){const Re=f+_e+j*ue,je=f+_e+j*(ue+1),W=f+(_e+1)+j*(ue+1),te=f+(_e+1)+j*ue;A.push(Re,je,te),A.push(je,W,te),z+=6}a.addGroup(g,z,B),g+=z,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function _t(i){const e={};for(let t=0;t<i.length;t++){const n=_i(i[t]);for(const r in n)e[r]=n[r]}return e}function Wc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uA(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const Xc={clone:_i,merge:_t};var Yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yc,this.fragmentShader=Kc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Wc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dA extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mn=new H,Ja=new Ye,$a=new Ye;class Ot extends dA{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mn.x,mn.y).multiplyScalar(-e/mn.z),mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mn.x,mn.y).multiplyScalar(-e/mn.z)}getViewSize(e,t){return this.getViewBounds(e,Ja,$a),t.subVectors($a,Ja)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const A=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/A,t-=o.offsetY*n/l,r*=o.width/A,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ai=1;class qc extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ot(si,ai,e,t);r.layers=this.layers,this.add(r);const s=new Ot(si,ai,e,t);s.layers=this.layers,this.add(s);const o=new Ot(si,ai,e,t);o.layers=this.layers,this.add(o);const a=new Ot(si,ai,e,t);a.layers=this.layers,this.add(a);const A=new Ot(si,ai,e,t);A.layers=this.layers,this.add(A);const l=new Ot(si,ai,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,A]=t;for(const l of t)this.remove(l);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),A.up.set(0,1,0),A.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),A.up.set(0,-1,0),A.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,A,l,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,A),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,c),e.setRenderTarget(d,f,g),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class fA extends pt{constructor(e,t,n,r,s,o,a,A,l,c){e=e!==void 0?e:[],t=t!==void 0?t:hi,super(e,t,n,r,s,o,a,A,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jc extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new fA(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xi(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:_n});s.uniforms.tEquirect.value=t;const o=new Dt(r,s),a=t.minFilter;return t.minFilter===Nn&&(t.minFilter=zt),new qc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Zc extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ts=new H,Jc=new H,$c=new Qe;class bn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ts.subVectors(n,t).cross(Jc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ts),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$c.getNormalMatrix(e),r=this.coplanarPoint(ts).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new aa,cr=new H;class Aa{constructor(e=new bn,t=new bn,n=new bn,r=new bn,s=new bn,o=new bn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],A=r[3],l=r[4],c=r[5],d=r[6],f=r[7],g=r[8],m=r[9],v=r[10],h=r[11],u=r[12],T=r[13],M=r[14],x=r[15];if(n[0].setComponents(A-s,f-l,h-g,x-u).normalize(),n[1].setComponents(A+s,f+l,h+g,x+u).normalize(),n[2].setComponents(A+o,f+c,h+m,x+T).normalize(),n[3].setComponents(A-o,f-c,h-m,x-T).normalize(),n[4].setComponents(A-a,f-d,h-v,x-M).normalize(),t===sn)n[5].setComponents(A+a,f+d,h+v,x+M).normalize();else if(t===Cr)n[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(e){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(cr.x=r.normal.x>0?e.max.x:e.min.x,cr.y=r.normal.y>0?e.max.y:e.min.y,cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ur extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class eu extends pt{constructor(e,t,n,r,s,o,a,A,l){super(e,t,n,r,s,o,a,A,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hA extends pt{constructor(e,t,n,r,s,o,a,A,l,c=ui){if(c!==ui&&c!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ui&&(n=Hn),n===void 0&&c===mi&&(n=pi),super(null,r,s,o,a,A,c,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=A!==void 0?A:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wn extends kn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),A=Math.floor(r),l=a+1,c=A+1,d=e/a,f=t/A,g=[],m=[],v=[],h=[];for(let u=0;u<c;u++){const T=u*f-o;for(let M=0;M<l;M++){const x=M*d-s;m.push(x,-T,0),v.push(0,0,1),h.push(M/a),h.push(1-u/A)}}for(let u=0;u<A;u++)for(let T=0;T<a;T++){const M=T+l*u,x=T+l*(u+1),N=T+1+l*(u+1),w=T+1+l*u;g.push(M,x,w),g.push(x,N,w)}this.setIndex(g),this.setAttribute("position",new Pn(m,3)),this.setAttribute("normal",new Pn(v,3)),this.setAttribute("uv",new Pn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}class yr extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nA,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tu extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nu extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class iu{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,A;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return A?A(c):c},this.setURLModifier=function(c){return A=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){const d=l.indexOf(c);return d!==-1&&l.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=l.length;d<f;d+=2){const g=l[d],m=l[d+1];if(g.global&&(g.lastIndex=0),g.test(c))return m}return null}}}const ru=new iu;class la{constructor(e){this.manager=e!==void 0?e:ru,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}la.DEFAULT_MATERIAL_NAME="__DEFAULT";class su extends la{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=eo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Oi("img");function A(){c(),eo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",A,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",A,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class au extends la{constructor(e){super(e)}load(e,t,n,r){const s=new pt,o=new su(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class gA extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ns=new rt,to=new H,no=new H;class ou{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;to.setFromMatrixPosition(e.matrixWorld),t.position.copy(to),no.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(no),t.updateMatrixWorld(),ns.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ns),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ns)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pA extends dA{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,A=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=c*this.view.offsetY,A=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,A,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Au extends ou{constructor(){super(new pA(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lu extends gA{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Au}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cu extends gA{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class uu extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function io(i,e,t,n){const r=du(n);switch(t){case qo:return i*e;case Zo:return i*e;case Jo:return i*e*2;case $o:return i*e/r.components*r.byteLength;case ia:return i*e/r.components*r.byteLength;case eA:return i*e*2/r.components*r.byteLength;case ra:return i*e*2/r.components*r.byteLength;case jo:return i*e*3/r.components*r.byteLength;case Vt:return i*e*4/r.components*r.byteLength;case sa:return i*e*4/r.components*r.byteLength;case gr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ss:case Ms:return Math.max(i,16)*Math.max(e,8)/4;case xs:case Is:return Math.max(i,8)*Math.max(e,8)/2;case ys:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ws:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Rs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Os:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ns:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ps:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ls:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Us:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _r:case ks:case Ws:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tA:case Xs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ys:case Ks:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function du(i){switch(i){case ln:case Xo:return{byteLength:1,components:1};case Ri:case Yo:case Hi:return{byteLength:2,components:1};case ta:case na:return{byteLength:2,components:4};case Hn:case ea:case rn:return{byteLength:4,components:1};case Ko:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$s);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mA(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function fu(i){const e=new WeakMap;function t(a,A){const l=a.array,c=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(A,f),i.bufferData(A,l,c),a.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,A,l){const c=A.array,d=A.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,c);else{d.sort((g,m)=>g.start-m.start);let f=0;for(let g=1;g<d.length;g++){const m=d[f],v=d[g];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,d[f]=v)}d.length=f+1;for(let g=0,m=d.length;g<m;g++){const v=d[g];i.bufferSubData(l,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}A.clearUpdateRanges()}A.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const A=e.get(a);A&&(i.deleteBuffer(A.buffer),e.delete(a))}function o(a,A){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,A));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,A),l.version=a.version}}return{get:r,remove:s,update:o}}var hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gu=`#ifdef USE_ALPHAHASH
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
#endif`,pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vu=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cu=`#ifdef USE_BATCHING
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
#endif`,xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yu=`#ifdef USE_IRIDESCENCE
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
#endif`,Du=`#ifdef USE_BUMPMAP
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
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lu=`#define PI 3.141592653589793
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
} // validated`,Uu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hu=`vec3 transformedNormal = objectNormal;
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
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xu=`#ifdef USE_ENVMAP
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
#endif`,Yu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ku=`#ifdef USE_ENVMAP
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
#endif`,qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,td=`#ifdef USE_GRADIENTMAP
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
}`,nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sd=`uniform bool receiveShadow;
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
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ud=`PhysicalMaterial material;
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
#endif`,dd=`struct PhysicalMaterial {
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
}`,fd=`
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
#endif`,hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xd=`#if defined( USE_POINTS_UV )
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
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pd=`#ifdef USE_NORMALMAP
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
#endif`,Ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jd=`float getShadowMask() {
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
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ef=`#ifdef USE_SKINNING
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
#endif`,tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,of=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
}`,Cf=`#define DISTANCE
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
}`,xf=`#define DISTANCE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,If=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`uniform float scale;
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
}`,yf=`uniform vec3 diffuse;
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
}`,Df=`#include <common>
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Qf=`#define LAMBERT
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
}`,bf=`#define LAMBERT
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
}`,wf=`#define MATCAP
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
}`,Rf=`#define MATCAP
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
}`,Of=`#define NORMAL
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
}`,Nf=`#define NORMAL
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
}`,Pf=`#define PHONG
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
}`,Lf=`#define PHONG
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
}`,Uf=`#define STANDARD
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
}`,Hf=`#define STANDARD
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
}`,Ff=`#define TOON
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
}`,Gf=`#define TOON
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
}`,zf=`uniform float size;
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
}`,Vf=`uniform vec3 diffuse;
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
}`,kf=`#include <common>
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
}`,Wf=`uniform vec3 color;
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
}`,Xf=`uniform float rotation;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:hu,alphahash_pars_fragment:gu,alphamap_fragment:pu,alphamap_pars_fragment:mu,alphatest_fragment:Eu,alphatest_pars_fragment:_u,aomap_fragment:vu,aomap_pars_fragment:Bu,batching_pars_vertex:Cu,batching_vertex:xu,begin_vertex:Su,beginnormal_vertex:Iu,bsdfs:Mu,iridescence_fragment:yu,bumpmap_pars_fragment:Du,clipping_planes_fragment:Tu,clipping_planes_pars_fragment:Qu,clipping_planes_pars_vertex:bu,clipping_planes_vertex:wu,color_fragment:Ru,color_pars_fragment:Ou,color_pars_vertex:Nu,color_vertex:Pu,common:Lu,cube_uv_reflection_fragment:Uu,defaultnormal_vertex:Hu,displacementmap_pars_vertex:Fu,displacementmap_vertex:Gu,emissivemap_fragment:zu,emissivemap_pars_fragment:Vu,colorspace_fragment:ku,colorspace_pars_fragment:Wu,envmap_fragment:Xu,envmap_common_pars_fragment:Yu,envmap_pars_fragment:Ku,envmap_pars_vertex:qu,envmap_physical_pars_fragment:ad,envmap_vertex:ju,fog_vertex:Zu,fog_pars_vertex:Ju,fog_fragment:$u,fog_pars_fragment:ed,gradientmap_pars_fragment:td,lightmap_pars_fragment:nd,lights_lambert_fragment:id,lights_lambert_pars_fragment:rd,lights_pars_begin:sd,lights_toon_fragment:od,lights_toon_pars_fragment:Ad,lights_phong_fragment:ld,lights_phong_pars_fragment:cd,lights_physical_fragment:ud,lights_physical_pars_fragment:dd,lights_fragment_begin:fd,lights_fragment_maps:hd,lights_fragment_end:gd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:_d,map_fragment:vd,map_pars_fragment:Bd,map_particle_fragment:Cd,map_particle_pars_fragment:xd,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:Id,morphinstance_vertex:Md,morphcolor_vertex:yd,morphnormal_vertex:Dd,morphtarget_pars_vertex:Td,morphtarget_vertex:Qd,normal_fragment_begin:bd,normal_fragment_maps:wd,normal_pars_fragment:Rd,normal_pars_vertex:Od,normal_vertex:Nd,normalmap_pars_fragment:Pd,clearcoat_normal_fragment_begin:Ld,clearcoat_normal_fragment_maps:Ud,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Fd,opaque_fragment:Gd,packing:zd,premultiplied_alpha_fragment:Vd,project_vertex:kd,dithering_fragment:Wd,dithering_pars_fragment:Xd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:jd,shadowmap_vertex:Zd,shadowmask_pars_fragment:Jd,skinbase_vertex:$d,skinning_pars_vertex:ef,skinning_vertex:tf,skinnormal_vertex:nf,specularmap_fragment:rf,specularmap_pars_fragment:sf,tonemapping_fragment:af,tonemapping_pars_fragment:of,transmission_fragment:Af,transmission_pars_fragment:lf,uv_pars_fragment:cf,uv_pars_vertex:uf,uv_vertex:df,worldpos_vertex:ff,background_vert:hf,background_frag:gf,backgroundCube_vert:pf,backgroundCube_frag:mf,cube_vert:Ef,cube_frag:_f,depth_vert:vf,depth_frag:Bf,distanceRGBA_vert:Cf,distanceRGBA_frag:xf,equirect_vert:Sf,equirect_frag:If,linedashed_vert:Mf,linedashed_frag:yf,meshbasic_vert:Df,meshbasic_frag:Tf,meshlambert_vert:Qf,meshlambert_frag:bf,meshmatcap_vert:wf,meshmatcap_frag:Rf,meshnormal_vert:Of,meshnormal_frag:Nf,meshphong_vert:Pf,meshphong_frag:Lf,meshphysical_vert:Uf,meshphysical_frag:Hf,meshtoon_vert:Ff,meshtoon_frag:Gf,points_vert:zf,points_frag:Vf,shadow_vert:kf,shadow_frag:Wf,sprite_vert:Xf,sprite_frag:Yf},ne={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Xt={basic:{uniforms:_t([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:_t([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ke(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:_t([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:_t([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:_t([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ke(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:_t([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:_t([ne.points,ne.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:_t([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:_t([ne.common,ne.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:_t([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:_t([ne.sprite,ne.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:_t([ne.common,ne.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:_t([ne.lights,ne.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Xt.physical={uniforms:_t([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const dr={r:0,b:0,g:0},Tn=new Kt,Kf=new rt;function qf(i,e,t,n,r,s,o){const a=new ke(0);let A=s===!0?0:1,l,c,d=null,f=0,g=null;function m(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1;const N=m(M);N===null?u(a,A):N&&N.isColor&&(u(N,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(M,x){const N=m(x);N&&(N.isCubeTexture||N.mapping===Mr)?(c===void 0&&(c=new Dt(new xi(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:_i(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Tn.copy(x.backgroundRotation),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),c.material.uniforms.envMap.value=N,c.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(Tn)),c.material.toneMapped=Ve.getTransfer(N.colorSpace)!==qe,(d!==N||f!==N.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,d=N,f=N.version,g=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):N&&N.isTexture&&(l===void 0&&(l=new Dt(new Wn(2,2),new Cn({name:"BackgroundMaterial",uniforms:_i(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=N,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(N.colorSpace)!==qe,N.matrixAutoUpdate===!0&&N.updateMatrix(),l.material.uniforms.uvTransform.value.copy(N.matrix),(d!==N||f!==N.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,d=N,f=N.version,g=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function u(M,x){M.getRGB(dr,uA(i)),n.buffers.color.setClear(dr.r,dr.g,dr.b,x,o)}function T(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),A=x,u(a,A)},getClearAlpha:function(){return A},setClearAlpha:function(M){A=M,u(a,A)},render:v,addToRenderList:h,dispose:T}}function jf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(_,Q,V,F,q){let j=!1;const X=d(F,V,Q);s!==X&&(s=X,l(s.object)),j=g(_,F,V,q),j&&m(_,F,V,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(_,Q,V,F),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function A(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function c(_){return i.deleteVertexArray(_)}function d(_,Q,V){const F=V.wireframe===!0;let q=n[_.id];q===void 0&&(q={},n[_.id]=q);let j=q[Q.id];j===void 0&&(j={},q[Q.id]=j);let X=j[F];return X===void 0&&(X=f(A()),j[F]=X),X}function f(_){const Q=[],V=[],F=[];for(let q=0;q<t;q++)Q[q]=0,V[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:V,attributeDivisors:F,object:_,attributes:{},index:null}}function g(_,Q,V,F){const q=s.attributes,j=Q.attributes;let X=0;const J=V.getAttributes();for(const z in J)if(J[z].location>=0){const ue=q[z];let _e=j[z];if(_e===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(_e=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(_e=_.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;X++}return s.attributesNum!==X||s.index!==F}function m(_,Q,V,F){const q={},j=Q.attributes;let X=0;const J=V.getAttributes();for(const z in J)if(J[z].location>=0){let ue=j[z];ue===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(ue=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(ue=_.instanceColor));const _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),q[z]=_e,X++}s.attributes=q,s.attributesNum=X,s.index=F}function v(){const _=s.newAttributes;for(let Q=0,V=_.length;Q<V;Q++)_[Q]=0}function h(_){u(_,0)}function u(_,Q){const V=s.newAttributes,F=s.enabledAttributes,q=s.attributeDivisors;V[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),q[_]!==Q&&(i.vertexAttribDivisor(_,Q),q[_]=Q)}function T(){const _=s.newAttributes,Q=s.enabledAttributes;for(let V=0,F=Q.length;V<F;V++)Q[V]!==_[V]&&(i.disableVertexAttribArray(V),Q[V]=0)}function M(_,Q,V,F,q,j,X){X===!0?i.vertexAttribIPointer(_,Q,V,q,j):i.vertexAttribPointer(_,Q,V,F,q,j)}function x(_,Q,V,F){v();const q=F.attributes,j=V.getAttributes(),X=Q.defaultAttributeValues;for(const J in j){const z=j[J];if(z.location>=0){let se=q[J];if(se===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(se=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(se=_.instanceColor)),se!==void 0){const ue=se.normalized,_e=se.itemSize,Re=e.get(se);if(Re===void 0)continue;const je=Re.buffer,W=Re.type,te=Re.bytesPerElement,pe=W===i.INT||W===i.UNSIGNED_INT||se.gpuType===ea;if(se.isInterleavedBufferAttribute){const ae=se.data,Se=ae.stride,ye=se.offset;if(ae.isInstancedInterleavedBuffer){for(let Oe=0;Oe<z.locationSize;Oe++)u(z.location+Oe,ae.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Oe=0;Oe<z.locationSize;Oe++)h(z.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Oe=0;Oe<z.locationSize;Oe++)M(z.location+Oe,_e/z.locationSize,W,ue,Se*te,(ye+_e/z.locationSize*Oe)*te,pe)}else{if(se.isInstancedBufferAttribute){for(let ae=0;ae<z.locationSize;ae++)u(z.location+ae,se.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ae=0;ae<z.locationSize;ae++)h(z.location+ae);i.bindBuffer(i.ARRAY_BUFFER,je);for(let ae=0;ae<z.locationSize;ae++)M(z.location+ae,_e/z.locationSize,W,ue,_e*te,_e/z.locationSize*ae*te,pe)}}else if(X!==void 0){const ue=X[J];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(z.location,ue);break;case 3:i.vertexAttrib3fv(z.location,ue);break;case 4:i.vertexAttrib4fv(z.location,ue);break;default:i.vertexAttrib1fv(z.location,ue)}}}}T()}function N(){D();for(const _ in n){const Q=n[_];for(const V in Q){const F=Q[V];for(const q in F)c(F[q].object),delete F[q];delete Q[V]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;const Q=n[_.id];for(const V in Q){const F=Q[V];for(const q in F)c(F[q].object),delete F[q];delete Q[V]}delete n[_.id]}function I(_){for(const Q in n){const V=n[Q];if(V[_.id]===void 0)continue;const F=V[_.id];for(const q in F)c(F[q].object),delete F[q];delete V[_.id]}}function D(){B(),o=!0,s!==r&&(s=r,l(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:B,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:h,disableUnusedAttributes:T}}function Zf(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let g=0;for(let m=0;m<d;m++)g+=c[m];t.update(g,n,1)}function A(l,c,d,f){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<l.length;m++)o(l[m],c[m],f[m]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,c,0,f,0,d);let m=0;for(let v=0;v<d;v++)m+=c[v]*f[v];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=A}function Jf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Vt&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const D=I===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ln&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==rn&&!D)}function A(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const c=A(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:A,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:h,maxAttributes:u,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:N,maxSamples:w}}function $f(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new bn,a=new Qe,A={value:null,needsUpdate:!1};this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||n!==0||r;return r=f,n=d.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,g){const m=d.clippingPlanes,v=d.clipIntersection,h=d.clipShadows,u=i.get(d);if(!r||m===null||m.length===0||s&&!h)s?c(null):l();else{const T=s?0:n,M=T*4;let x=u.clippingState||null;A.value=x,x=c(m,f,M,g);for(let N=0;N!==M;++N)x[N]=t[N];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){A.value!==t&&(A.value=t,A.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(d,f,g,m){const v=d!==null?d.length:0;let h=null;if(v!==0){if(h=A.value,m!==!0||h===null){const u=g+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(h===null||h.length<u)&&(h=new Float32Array(u));for(let M=0,x=g;M!==v;++M,x+=4)o.copy(d[M]).applyMatrix4(T,a),o.normal.toArray(h,x),h[x+3]=o.constant}A.value=h,A.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,h}}function eh(i){let e=new WeakMap;function t(o,a){return a===_s?o.mapping=hi:a===vs&&(o.mapping=gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_s||a===vs)if(e.has(o)){const A=e.get(o).texture;return t(A,o.mapping)}else{const A=o.image;if(A&&A.height>0){const l=new jc(A.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const A=e.get(a);A!==void 0&&(e.delete(a),A.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const li=4,ro=[.125,.215,.35,.446,.526,.582],On=20,is=new pA,so=new ke;let rs=null,ss=0,as=0,os=!1;const wn=(1+Math.sqrt(5))/2,oi=1/wn,ao=[new H(-wn,oi,0),new H(wn,oi,0),new H(-oi,0,wn),new H(oi,0,wn),new H(0,wn,-oi),new H(0,wn,oi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class oo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){rs=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rs,ss,as),this._renderer.xr.enabled=os,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rs=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Hi,format:Vt,colorSpace:Ei,depthBuffer:!1},r=Ao(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ao(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=th(s)),this._blurMaterial=nh(s,e,t)}return r}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,is)}_sceneToCubeUV(e,t,n,r){const a=new Ot(90,1,t,n),A=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(so),c.toneMapping=vn,c.autoClear=!1;const g=new oa({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),m=new Dt(new xi,g);let v=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,v=!0):(g.color.copy(so),v=!0);for(let u=0;u<6;u++){const T=u%3;T===0?(a.up.set(0,A[u],0),a.lookAt(l[u],0,0)):T===1?(a.up.set(0,0,A[u]),a.lookAt(0,l[u],0)):(a.up.set(0,A[u],0),a.lookAt(0,0,l[u]));const M=this._cubeSize;fr(r,T*M,u>2?M:0,M,M),c.setRenderTarget(r),v&&c.render(m,a),c.render(e,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===hi||e.mapping===gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=co()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const A=this._cubeSize;fr(t,0,0,3*A,2*A),n.setRenderTarget(t),n.render(o,is)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ao[(r-s-1)%ao.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const A=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Dt(this._lodPlanes[r],l),f=l.uniforms,g=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*On-1),v=s/m,h=isFinite(s)?1+Math.floor(c*v):On;h>On&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${On}`);const u=[];let T=0;for(let I=0;I<On;++I){const D=I/v,B=Math.exp(-D*D/2);u.push(B),I===0?T+=B:I<h&&(T+=2*B)}for(let I=0;I<u.length;I++)u[I]=u[I]/T;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;const x=this._sizeLods[r],N=3*x*(r>M-li?r-M+li:0),w=4*(this._cubeSize-x);fr(t,N,w,3*x,2*x),A.setRenderTarget(t),A.render(d,is)}}function th(i){const e=[],t=[],n=[];let r=i;const s=i-li+1+ro.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let A=1/a;o>i-li?A=ro[o-i+li-1]:o===0&&(A=0),n.push(A);const l=1/(a-2),c=-l,d=1+l,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,m=6,v=3,h=2,u=1,T=new Float32Array(v*m*g),M=new Float32Array(h*m*g),x=new Float32Array(u*m*g);for(let w=0;w<g;w++){const I=w%3*2/3-1,D=w>2?0:-1,B=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];T.set(B,v*m*w),M.set(f,h*m*w);const _=[w,w,w,w,w,w];x.set(_,u*m*w)}const N=new kn;N.setAttribute("position",new Yt(T,v)),N.setAttribute("uv",new Yt(M,h)),N.setAttribute("faceIndex",new Yt(x,u)),e.push(N),r>li&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ao(i,e,t){const n=new Fn(i,e,t);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function nh(i,e,t){const n=new Float32Array(On),r=new H(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ca(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function lo(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function co(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function ca(){return`

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
	`}function ih(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const A=a.mapping,l=A===_s||A===vs,c=A===hi||A===gi;if(l||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new oo(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const g=a.image;return l&&g&&g.height>0||c&&g&&r(g)?(t===null&&(t=new oo(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let A=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&A++;return A===l}function s(a){const A=a.target;A.removeEventListener("dispose",s);const l=e.get(A);l!==void 0&&(e.delete(A),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function rh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ai("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function sh(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function A(d){const f=d.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER)}function l(d){const f=[],g=d.index,m=d.attributes.position;let v=0;if(g!==null){const T=g.array;v=g.version;for(let M=0,x=T.length;M<x;M+=3){const N=T[M+0],w=T[M+1],I=T[M+2];f.push(N,w,w,I,I,N)}}else if(m!==void 0){const T=m.array;v=m.version;for(let M=0,x=T.length/3-1;M<x;M+=3){const N=M+0,w=M+1,I=M+2;f.push(N,w,w,I,I,N)}}else return;const h=new(rA(f)?cA:lA)(f,1);h.version=v;const u=s.get(d);u&&e.remove(u),s.set(d,h)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:A,getWireframeAttribute:c}}function ah(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function A(f,g){i.drawElements(n,g,s,f*o),t.update(g,n,1)}function l(f,g,m){m!==0&&(i.drawElementsInstanced(n,g,s,f*o,m),t.update(g,n,m))}function c(f,g,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,f,0,m);let h=0;for(let u=0;u<m;u++)h+=g[u];t.update(h,n,1)}function d(f,g,m,v){if(m===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<f.length;u++)l(f[u]/o,g[u],v[u]);else{h.multiDrawElementsInstancedWEBGL(n,g,0,s,f,0,v,0,m);let u=0;for(let T=0;T<m;T++)u+=g[T]*v[T];t.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=A,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function oh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ah(i,e,t){const n=new WeakMap,r=new it;function s(o,a,A){const l=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let _=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var g=_;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),h===!0&&(x=3);let N=a.attributes.position.count*x,w=1;N>e.maxTextureSize&&(w=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const I=new Float32Array(N*w*4*d),D=new aA(I,N,w,d);D.type=rn,D.needsUpdate=!0;const B=x*4;for(let Q=0;Q<d;Q++){const V=u[Q],F=T[Q],q=M[Q],j=N*w*4*Q;for(let X=0;X<V.count;X++){const J=X*B;m===!0&&(r.fromBufferAttribute(V,X),I[j+J+0]=r.x,I[j+J+1]=r.y,I[j+J+2]=r.z,I[j+J+3]=0),v===!0&&(r.fromBufferAttribute(F,X),I[j+J+4]=r.x,I[j+J+5]=r.y,I[j+J+6]=r.z,I[j+J+7]=0),h===!0&&(r.fromBufferAttribute(q,X),I[j+J+8]=r.x,I[j+J+9]=r.y,I[j+J+10]=r.z,I[j+J+11]=q.itemSize===4?r.w:1)}}f={count:d,texture:D,size:new Ye(N,w)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)A.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let h=0;h<l.length;h++)m+=l[h];const v=a.morphTargetsRelative?1:1-m;A.getUniforms().setValue(i,"morphTargetBaseInfluence",v),A.getUniforms().setValue(i,"morphTargetInfluences",l)}A.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),A.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function lh(i,e,t,n){let r=new WeakMap;function s(A){const l=n.render.frame,c=A.geometry,d=e.get(A,c);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),A.isInstancedMesh&&(A.hasEventListener("dispose",a)===!1&&A.addEventListener("dispose",a),r.get(A)!==l&&(t.update(A.instanceMatrix,i.ARRAY_BUFFER),A.instanceColor!==null&&t.update(A.instanceColor,i.ARRAY_BUFFER),r.set(A,l))),A.isSkinnedMesh){const f=A.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(A){const l=A.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const EA=new pt,uo=new hA(1,1),_A=new aA,vA=new Rc,BA=new fA,fo=[],ho=[],go=new Float32Array(16),po=new Float32Array(9),mo=new Float32Array(4);function Si(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=fo[r];if(s===void 0&&(s=new Float32Array(r),fo[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Dr(i,e){let t=ho[e];t===void 0&&(t=new Int32Array(e),ho[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ch(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function uh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function dh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function fh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function hh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(At(t,n))return;mo.set(n),i.uniformMatrix2fv(this.addr,!1,mo),lt(t,n)}}function gh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(At(t,n))return;po.set(n),i.uniformMatrix3fv(this.addr,!1,po),lt(t,n)}}function ph(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(At(t,n))return;go.set(n),i.uniformMatrix4fv(this.addr,!1,go),lt(t,n)}}function mh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Eh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function _h(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function vh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function Bh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ch(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function xh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function Sh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function Ih(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(uo.compareFunction=iA,s=uo):s=EA,t.setTexture2D(e||s,r)}function Mh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vA,r)}function yh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||BA,r)}function Dh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||_A,r)}function Th(i){switch(i){case 5126:return ch;case 35664:return uh;case 35665:return dh;case 35666:return fh;case 35674:return hh;case 35675:return gh;case 35676:return ph;case 5124:case 35670:return mh;case 35667:case 35671:return Eh;case 35668:case 35672:return _h;case 35669:case 35673:return vh;case 5125:return Bh;case 36294:return Ch;case 36295:return xh;case 36296:return Sh;case 35678:case 36198:case 36298:case 36306:case 35682:return Ih;case 35679:case 36299:case 36307:return Mh;case 35680:case 36300:case 36308:case 36293:return yh;case 36289:case 36303:case 36311:case 36292:return Dh}}function Qh(i,e){i.uniform1fv(this.addr,e)}function bh(i,e){const t=Si(e,this.size,2);i.uniform2fv(this.addr,t)}function wh(i,e){const t=Si(e,this.size,3);i.uniform3fv(this.addr,t)}function Rh(i,e){const t=Si(e,this.size,4);i.uniform4fv(this.addr,t)}function Oh(i,e){const t=Si(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Nh(i,e){const t=Si(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ph(i,e){const t=Si(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lh(i,e){i.uniform1iv(this.addr,e)}function Uh(i,e){i.uniform2iv(this.addr,e)}function Hh(i,e){i.uniform3iv(this.addr,e)}function Fh(i,e){i.uniform4iv(this.addr,e)}function Gh(i,e){i.uniform1uiv(this.addr,e)}function zh(i,e){i.uniform2uiv(this.addr,e)}function Vh(i,e){i.uniform3uiv(this.addr,e)}function kh(i,e){i.uniform4uiv(this.addr,e)}function Wh(i,e,t){const n=this.cache,r=e.length,s=Dr(t,r);At(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||EA,s[o])}function Xh(i,e,t){const n=this.cache,r=e.length,s=Dr(t,r);At(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vA,s[o])}function Yh(i,e,t){const n=this.cache,r=e.length,s=Dr(t,r);At(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||BA,s[o])}function Kh(i,e,t){const n=this.cache,r=e.length,s=Dr(t,r);At(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_A,s[o])}function qh(i){switch(i){case 5126:return Qh;case 35664:return bh;case 35665:return wh;case 35666:return Rh;case 35674:return Oh;case 35675:return Nh;case 35676:return Ph;case 5124:case 35670:return Lh;case 35667:case 35671:return Uh;case 35668:case 35672:return Hh;case 35669:case 35673:return Fh;case 5125:return Gh;case 36294:return zh;case 36295:return Vh;case 36296:return kh;case 35678:case 36198:case 36298:case 36306:case 35682:return Wh;case 35679:case 36299:case 36307:return Xh;case 35680:case 36300:case 36308:case 36293:return Yh;case 36289:case 36303:case 36311:case 36292:return Kh}}class jh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Th(t.type)}}class Zh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qh(t.type)}}class Jh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const As=/(\w+)(\])?(\[|\.)?/g;function Eo(i,e){i.seq.push(e),i.map[e.id]=e}function $h(i,e,t){const n=i.name,r=n.length;for(As.lastIndex=0;;){const s=As.exec(n),o=As.lastIndex;let a=s[1];const A=s[2]==="]",l=s[3];if(A&&(a=a|0),l===void 0||l==="["&&o+2===r){Eo(t,l===void 0?new jh(a,i,e):new Zh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Jh(a),Eo(t,d)),t=d}}}class vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);$h(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],A=n[a.id];A.needsUpdate!==!1&&a.setValue(e,A.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function _o(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const eg=37297;let tg=0;function ng(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const vo=new Qe;function ig(i){Ve._getMatrix(vo,Ve.workingColorSpace,i);const e=`mat3( ${vo.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case Br:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ng(i.getShaderSource(e),o)}else return r}function rg(i,e){const t=ig(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sg(i,e){let t;switch(e){case sc:t="Linear";break;case ac:t="Reinhard";break;case oc:t="Cineon";break;case Ac:t="ACESFilmic";break;case cc:t="AgX";break;case uc:t="Neutral";break;case lc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hr=new H;function ag(){Ve.getLuminanceCoefficients(hr);const i=hr.x.toFixed(4),e=hr.y.toFixed(4),t=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function Ag(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wi(i){return i!==""}function Co(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function js(i){return i.replace(cg,dg)}const ug=new Map;function dg(i,e){let t=we[e];if(t===void 0){const n=ug.get(e);if(n!==void 0)t=we[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return js(t)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function So(i){return i.replace(fg,hg)}function hg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Io(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function gg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ul?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tn&&(e="SHADOWMAP_TYPE_VSM"),e}function pg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hi:case gi:e="ENVMAP_TYPE_CUBE";break;case Mr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gi:e="ENVMAP_MODE_REFRACTION";break}return e}function Eg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ko:e="ENVMAP_BLENDING_MULTIPLY";break;case ic:e="ENVMAP_BLENDING_MIX";break;case rc:e="ENVMAP_BLENDING_ADD";break}return e}function _g(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vg(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const A=gg(t),l=pg(t),c=mg(t),d=Eg(t),f=_g(t),g=og(t),m=Ag(s),v=r.createProgram();let h,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(wi).join(`
`),h.length>0&&(h+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(wi).join(`
`),u.length>0&&(u+=`
`)):(h=[Io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),u=[Io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?we.tonemapping_pars_fragment:"",t.toneMapping!==vn?sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,rg("linearToOutputTexel",t.outputColorSpace),ag(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),o=js(o),o=Co(o,t),o=xo(o,t),a=js(a),a=Co(a,t),a=xo(a,t),o=So(o),a=So(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,h=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,u=["#define varying in",t.glslVersion===Pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=T+h+o,x=T+u+a,N=_o(r,r.VERTEX_SHADER,M),w=_o(r,r.FRAGMENT_SHADER,x);r.attachShader(v,N),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function I(Q){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(N).trim(),q=r.getShaderInfoLog(w).trim();let j=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,N,w);else{const J=Bo(r,N,"vertex"),z=Bo(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+V+`
`+J+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||q==="")&&(X=!1);X&&(Q.diagnostics={runnable:j,programLog:V,vertexShader:{log:F,prefix:h},fragmentShader:{log:q,prefix:u}})}r.deleteShader(N),r.deleteShader(w),D=new vr(r,v),B=lg(r,v)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let B;this.getAttributes=function(){return B===void 0&&I(this),B};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,eg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=w,this}let Bg=0;class Cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xg(e),t.set(e,n)),n}}class xg{constructor(e){this.id=Bg++,this.code=e,this.usedTimes=0}}function Sg(i,e,t,n,r,s,o){const a=new oA,A=new Cg,l=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(B){return l.add(B),B===0?"uv":`uv${B}`}function h(B,_,Q,V,F){const q=V.fog,j=F.geometry,X=B.isMeshStandardMaterial?V.environment:null,J=(B.isMeshStandardMaterial?t:e).get(B.envMap||X),z=J&&J.mapping===Mr?J.image.height:null,se=m[B.type];B.precision!==null&&(g=r.getMaxPrecision(B.precision),g!==B.precision&&console.warn("THREE.WebGLProgram.getParameters:",B.precision,"not supported, using",g,"instead."));const ue=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_e=ue!==void 0?ue.length:0;let Re=0;j.morphAttributes.position!==void 0&&(Re=1),j.morphAttributes.normal!==void 0&&(Re=2),j.morphAttributes.color!==void 0&&(Re=3);let je,W,te,pe;if(se){const Ke=Xt[se];je=Ke.vertexShader,W=Ke.fragmentShader}else je=B.vertexShader,W=B.fragmentShader,A.update(B),te=A.getVertexShaderID(B),pe=A.getFragmentShaderID(B);const ae=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),ye=F.isInstancedMesh===!0,Oe=F.isBatchedMesh===!0,et=!!B.map,He=!!B.matcap,st=!!J,y=!!B.aoMap,Qt=!!B.lightMap,Pe=!!B.bumpMap,Le=!!B.normalMap,ve=!!B.displacementMap,Je=!!B.emissiveMap,Ee=!!B.metalnessMap,C=!!B.roughnessMap,p=B.anisotropy>0,P=B.clearcoat>0,Y=B.dispersion>0,Z=B.iridescence>0,k=B.sheen>0,me=B.transmission>0,oe=p&&!!B.anisotropyMap,de=P&&!!B.clearcoatMap,Fe=P&&!!B.clearcoatNormalMap,ee=P&&!!B.clearcoatRoughnessMap,fe=Z&&!!B.iridescenceMap,xe=Z&&!!B.iridescenceThicknessMap,Ie=k&&!!B.sheenColorMap,he=k&&!!B.sheenRoughnessMap,Ue=!!B.specularMap,be=!!B.specularColorMap,Ze=!!B.specularIntensityMap,b=me&&!!B.transmissionMap,ie=me&&!!B.thicknessMap,G=!!B.gradientMap,K=!!B.alphaMap,le=B.alphaTest>0,Ae=!!B.alphaHash,Te=!!B.extensions;let tt=vn;B.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(tt=i.toneMapping);const ft={shaderID:se,shaderType:B.type,shaderName:B.name,vertexShader:je,fragmentShader:W,defines:B.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:g,batching:Oe,batchingColor:Oe&&F._colorsTexture!==null,instancing:ye,instancingColor:ye&&F.instanceColor!==null,instancingMorph:ye&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ei,alphaToCoverage:!!B.alphaToCoverage,map:et,matcap:He,envMap:st,envMapMode:st&&J.mapping,envMapCubeUVHeight:z,aoMap:y,lightMap:Qt,bumpMap:Pe,normalMap:Le,displacementMap:f&&ve,emissiveMap:Je,normalMapObjectSpace:Le&&B.normalMapType===gc,normalMapTangentSpace:Le&&B.normalMapType===nA,metalnessMap:Ee,roughnessMap:C,anisotropy:p,anisotropyMap:oe,clearcoat:P,clearcoatMap:de,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ee,dispersion:Y,iridescence:Z,iridescenceMap:fe,iridescenceThicknessMap:xe,sheen:k,sheenColorMap:Ie,sheenRoughnessMap:he,specularMap:Ue,specularColorMap:be,specularIntensityMap:Ze,transmission:me,transmissionMap:b,thicknessMap:ie,gradientMap:G,opaque:B.transparent===!1&&B.blending===ci&&B.alphaToCoverage===!1,alphaMap:K,alphaTest:le,alphaHash:Ae,combine:B.combine,mapUv:et&&v(B.map.channel),aoMapUv:y&&v(B.aoMap.channel),lightMapUv:Qt&&v(B.lightMap.channel),bumpMapUv:Pe&&v(B.bumpMap.channel),normalMapUv:Le&&v(B.normalMap.channel),displacementMapUv:ve&&v(B.displacementMap.channel),emissiveMapUv:Je&&v(B.emissiveMap.channel),metalnessMapUv:Ee&&v(B.metalnessMap.channel),roughnessMapUv:C&&v(B.roughnessMap.channel),anisotropyMapUv:oe&&v(B.anisotropyMap.channel),clearcoatMapUv:de&&v(B.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&v(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(B.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(B.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&v(B.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(B.sheenColorMap.channel),sheenRoughnessMapUv:he&&v(B.sheenRoughnessMap.channel),specularMapUv:Ue&&v(B.specularMap.channel),specularColorMapUv:be&&v(B.specularColorMap.channel),specularIntensityMapUv:Ze&&v(B.specularIntensityMap.channel),transmissionMapUv:b&&v(B.transmissionMap.channel),thicknessMapUv:ie&&v(B.thicknessMap.channel),alphaMapUv:K&&v(B.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Le||p),vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(et||K),fog:!!q,useFog:B.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:B.flatShading===!0,sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Re,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:B.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:et&&B.map.isVideoTexture===!0&&Ve.getTransfer(B.map.colorSpace)===qe,decodeVideoTextureEmissive:Je&&B.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(B.emissiveMap.colorSpace)===qe,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===yt,flipSided:B.side===Ct,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionClipCullDistance:Te&&B.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&B.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function u(B){const _=[];if(B.shaderID?_.push(B.shaderID):(_.push(B.customVertexShaderID),_.push(B.customFragmentShaderID)),B.defines!==void 0)for(const Q in B.defines)_.push(Q),_.push(B.defines[Q]);return B.isRawShaderMaterial===!1&&(T(_,B),M(_,B),_.push(i.outputColorSpace)),_.push(B.customProgramCacheKey),_.join()}function T(B,_){B.push(_.precision),B.push(_.outputColorSpace),B.push(_.envMapMode),B.push(_.envMapCubeUVHeight),B.push(_.mapUv),B.push(_.alphaMapUv),B.push(_.lightMapUv),B.push(_.aoMapUv),B.push(_.bumpMapUv),B.push(_.normalMapUv),B.push(_.displacementMapUv),B.push(_.emissiveMapUv),B.push(_.metalnessMapUv),B.push(_.roughnessMapUv),B.push(_.anisotropyMapUv),B.push(_.clearcoatMapUv),B.push(_.clearcoatNormalMapUv),B.push(_.clearcoatRoughnessMapUv),B.push(_.iridescenceMapUv),B.push(_.iridescenceThicknessMapUv),B.push(_.sheenColorMapUv),B.push(_.sheenRoughnessMapUv),B.push(_.specularMapUv),B.push(_.specularColorMapUv),B.push(_.specularIntensityMapUv),B.push(_.transmissionMapUv),B.push(_.thicknessMapUv),B.push(_.combine),B.push(_.fogExp2),B.push(_.sizeAttenuation),B.push(_.morphTargetsCount),B.push(_.morphAttributeCount),B.push(_.numDirLights),B.push(_.numPointLights),B.push(_.numSpotLights),B.push(_.numSpotLightMaps),B.push(_.numHemiLights),B.push(_.numRectAreaLights),B.push(_.numDirLightShadows),B.push(_.numPointLightShadows),B.push(_.numSpotLightShadows),B.push(_.numSpotLightShadowsWithMaps),B.push(_.numLightProbes),B.push(_.shadowMapType),B.push(_.toneMapping),B.push(_.numClippingPlanes),B.push(_.numClipIntersection),B.push(_.depthPacking)}function M(B,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),B.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),B.push(a.mask)}function x(B){const _=m[B.type];let Q;if(_){const V=Xt[_];Q=Xc.clone(V.uniforms)}else Q=B.uniforms;return Q}function N(B,_){let Q;for(let V=0,F=c.length;V<F;V++){const q=c[V];if(q.cacheKey===_){Q=q,++Q.usedTimes;break}}return Q===void 0&&(Q=new vg(i,_,B,s),c.push(Q)),Q}function w(B){if(--B.usedTimes===0){const _=c.indexOf(B);c[_]=c[c.length-1],c.pop(),B.destroy()}}function I(B){A.remove(B)}function D(){A.dispose()}return{getParameters:h,getProgramCacheKey:u,getUniforms:x,acquireProgram:N,releaseProgram:w,releaseShaderCache:I,programs:c,dispose:D}}function Ig(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,A){i.get(o)[a]=A}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Mg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,g,m,v,h){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:g,groupOrder:m,renderOrder:d.renderOrder,z:v,group:h},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=g,u.groupOrder=m,u.renderOrder=d.renderOrder,u.z=v,u.group=h),e++,u}function a(d,f,g,m,v,h){const u=o(d,f,g,m,v,h);g.transmission>0?n.push(u):g.transparent===!0?r.push(u):t.push(u)}function A(d,f,g,m,v,h){const u=o(d,f,g,m,v,h);g.transmission>0?n.unshift(u):g.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||Mg),n.length>1&&n.sort(f||Mo),r.length>1&&r.sort(f||Mo)}function c(){for(let d=e,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:A,finish:c,sort:l}}function yg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new yo,i.set(n,[o])):r>=s.length?(o=new yo,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new ke};break;case"SpotLight":t={position:new H,direction:new H,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Tg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qg=0;function bg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wg(i){const e=new Dg,t=Tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const r=new H,s=new rt,o=new rt;function a(l){let c=0,d=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let g=0,m=0,v=0,h=0,u=0,T=0,M=0,x=0,N=0,w=0,I=0;l.sort(bg);for(let B=0,_=l.length;B<_;B++){const Q=l[B],V=Q.color,F=Q.intensity,q=Q.distance,j=Q.shadow&&Q.shadow.map?Q.shadow.map.texture:null;if(Q.isAmbientLight)c+=V.r*F,d+=V.g*F,f+=V.b*F;else if(Q.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(Q.sh.coefficients[X],F);I++}else if(Q.isDirectionalLight){const X=e.get(Q);if(X.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){const J=Q.shadow,z=t.get(Q);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.directionalShadow[g]=z,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=Q.shadow.matrix,T++}n.directional[g]=X,g++}else if(Q.isSpotLight){const X=e.get(Q);X.position.setFromMatrixPosition(Q.matrixWorld),X.color.copy(V).multiplyScalar(F),X.distance=q,X.coneCos=Math.cos(Q.angle),X.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),X.decay=Q.decay,n.spot[v]=X;const J=Q.shadow;if(Q.map&&(n.spotLightMap[N]=Q.map,N++,J.updateMatrices(Q),Q.castShadow&&w++),n.spotLightMatrix[v]=J.matrix,Q.castShadow){const z=t.get(Q);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=j,x++}v++}else if(Q.isRectAreaLight){const X=e.get(Q);X.color.copy(V).multiplyScalar(F),X.halfWidth.set(Q.width*.5,0,0),X.halfHeight.set(0,Q.height*.5,0),n.rectArea[h]=X,h++}else if(Q.isPointLight){const X=e.get(Q);if(X.color.copy(Q.color).multiplyScalar(Q.intensity),X.distance=Q.distance,X.decay=Q.decay,Q.castShadow){const J=Q.shadow,z=t.get(Q);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=Q.shadow.matrix,M++}n.point[m]=X,m++}else if(Q.isHemisphereLight){const X=e.get(Q);X.skyColor.copy(Q.color).multiplyScalar(F),X.groundColor.copy(Q.groundColor).multiplyScalar(F),n.hemi[u]=X,u++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==g||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==h||D.hemiLength!==u||D.numDirectionalShadows!==T||D.numPointShadows!==M||D.numSpotShadows!==x||D.numSpotMaps!==N||D.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=v,n.rectArea.length=h,n.point.length=m,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+N-w,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,D.directionalLength=g,D.pointLength=m,D.spotLength=v,D.rectAreaLength=h,D.hemiLength=u,D.numDirectionalShadows=T,D.numPointShadows=M,D.numSpotShadows=x,D.numSpotMaps=N,D.numLightProbes=I,n.version=Qg++)}function A(l,c){let d=0,f=0,g=0,m=0,v=0;const h=c.matrixWorldInverse;for(let u=0,T=l.length;u<T;u++){const M=l[u];if(M.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(h),d++}else if(M.isSpotLight){const x=n.spot[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(h),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(h),g++}else if(M.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(h),o.identity(),s.copy(M.matrixWorld),s.premultiply(h),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(h),f++}else if(M.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(h),v++}}}return{setup:a,setupView:A,state:n}}function Do(i){const e=new wg(i),t=[],n=[];function r(c){l.camera=c,t.length=0,n.length=0}function s(c){t.push(c)}function o(c){n.push(c)}function a(){e.setup(t)}function A(c){e.setupView(t,c)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:A,pushLight:s,pushShadow:o}}function Rg(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Do(i),e.set(r,[a])):s>=o.length?(a=new Do(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
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
}`;function Pg(i,e,t){let n=new Aa;const r=new Ye,s=new Ye,o=new it,a=new tu({depthPacking:hc}),A=new nu,l={},c=t.maxTextureSize,d={[Bn]:Ct,[Ct]:Bn,[yt]:yt},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Og,fragmentShader:Ng}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const m=new kn;m.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dt(m,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let u=this.type;this.render=function(w,I,D){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const B=i.getRenderTarget(),_=i.getActiveCubeFace(),Q=i.getActiveMipmapLevel(),V=i.state;V.setBlending(_n),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=u!==tn&&this.type===tn,q=u===tn&&this.type!==tn;for(let j=0,X=w.length;j<X;j++){const J=w[j],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const se=z.getFrameExtents();if(r.multiply(se),s.copy(z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/se.x),r.x=s.x*se.x,z.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/se.y),r.y=s.y*se.y,z.mapSize.y=s.y)),z.map===null||F===!0||q===!0){const _e=this.type!==tn?{minFilter:kt,magFilter:kt}:{};z.map!==null&&z.map.dispose(),z.map=new Fn(r.x,r.y,_e),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ue=z.getViewportCount();for(let _e=0;_e<ue;_e++){const Re=z.getViewport(_e);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),V.viewport(o),z.updateMatrices(J,_e),n=z.getFrustum(),x(I,D,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===tn&&T(z,D),z.needsUpdate=!1}u=this.type,h.needsUpdate=!1,i.setRenderTarget(B,_,Q)};function T(w,I){const D=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(I,null,D,f,v,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(I,null,D,g,v,null)}function M(w,I,D,B){let _=null;const Q=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(Q!==void 0)_=Q;else if(_=D.isPointLight===!0?A:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const V=_.uuid,F=I.uuid;let q=l[V];q===void 0&&(q={},l[V]=q);let j=q[F];j===void 0&&(j=_.clone(),q[F]=j,I.addEventListener("dispose",N)),_=j}if(_.visible=I.visible,_.wireframe=I.wireframe,B===tn?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:d[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const V=i.properties.get(_);V.light=D}return _}function x(w,I,D,B,_){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===tn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const F=e.update(w),q=w.material;if(Array.isArray(q)){const j=F.groups;for(let X=0,J=j.length;X<J;X++){const z=j[X],se=q[z.materialIndex];if(se&&se.visible){const ue=M(w,se,B,_);w.onBeforeShadow(i,w,I,D,F,ue,z),i.renderBufferDirect(D,null,F,ue,w,z),w.onAfterShadow(i,w,I,D,F,ue,z)}}}else if(q.visible){const j=M(w,q,B,_);w.onBeforeShadow(i,w,I,D,F,j,null),i.renderBufferDirect(D,null,F,j,w,null),w.onAfterShadow(i,w,I,D,F,j,null)}}const V=w.children;for(let F=0,q=V.length;F<q;F++)x(V[F],I,D,B,_)}function N(w){w.target.removeEventListener("dispose",N);for(const D in l){const B=l[D],_=w.target.uuid;_ in B&&(B[_].dispose(),delete B[_])}}}const Lg={[ds]:fs,[hs]:ms,[gs]:Es,[fi]:ps,[fs]:ds,[ms]:hs,[Es]:gs,[ps]:fi};function Ug(i,e){function t(){let b=!1;const ie=new it;let G=null;const K=new it(0,0,0,0);return{setMask:function(le){G!==le&&!b&&(i.colorMask(le,le,le,le),G=le)},setLocked:function(le){b=le},setClear:function(le,Ae,Te,tt,ft){ft===!0&&(le*=tt,Ae*=tt,Te*=tt),ie.set(le,Ae,Te,tt),K.equals(ie)===!1&&(i.clearColor(le,Ae,Te,tt),K.copy(ie))},reset:function(){b=!1,G=null,K.set(-1,0,0,0)}}}function n(){let b=!1,ie=!1,G=null,K=null,le=null;return{setReversed:function(Ae){if(ie!==Ae){const Te=e.get("EXT_clip_control");ie?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT);const tt=le;le=null,this.setClear(tt)}ie=Ae},getReversed:function(){return ie},setTest:function(Ae){Ae?ae(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(Ae){G!==Ae&&!b&&(i.depthMask(Ae),G=Ae)},setFunc:function(Ae){if(ie&&(Ae=Lg[Ae]),K!==Ae){switch(Ae){case ds:i.depthFunc(i.NEVER);break;case fs:i.depthFunc(i.ALWAYS);break;case hs:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case gs:i.depthFunc(i.EQUAL);break;case ps:i.depthFunc(i.GEQUAL);break;case ms:i.depthFunc(i.GREATER);break;case Es:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=Ae}},setLocked:function(Ae){b=Ae},setClear:function(Ae){le!==Ae&&(ie&&(Ae=1-Ae),i.clearDepth(Ae),le=Ae)},reset:function(){b=!1,G=null,K=null,le=null,ie=!1}}}function r(){let b=!1,ie=null,G=null,K=null,le=null,Ae=null,Te=null,tt=null,ft=null;return{setTest:function(Ke){b||(Ke?ae(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Ke){ie!==Ke&&!b&&(i.stencilMask(Ke),ie=Ke)},setFunc:function(Ke,Pt,qt){(G!==Ke||K!==Pt||le!==qt)&&(i.stencilFunc(Ke,Pt,qt),G=Ke,K=Pt,le=qt)},setOp:function(Ke,Pt,qt){(Ae!==Ke||Te!==Pt||tt!==qt)&&(i.stencilOp(Ke,Pt,qt),Ae=Ke,Te=Pt,tt=qt)},setLocked:function(Ke){b=Ke},setClear:function(Ke){ft!==Ke&&(i.clearStencil(Ke),ft=Ke)},reset:function(){b=!1,ie=null,G=null,K=null,le=null,Ae=null,Te=null,tt=null,ft=null}}}const s=new t,o=new n,a=new r,A=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,g=[],m=null,v=!1,h=null,u=null,T=null,M=null,x=null,N=null,w=null,I=new ke(0,0,0),D=0,B=!1,_=null,Q=null,V=null,F=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=J>=2);let se=null,ue={};const _e=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),je=new it().fromArray(_e),W=new it().fromArray(Re);function te(b,ie,G,K){const le=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(b,Ae),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<G;Te++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ie+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return Ae}const pe={};pe[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(fi),Pe(!1),Le(Qa),ae(i.CULL_FACE),y(_n);function ae(b){c[b]!==!0&&(i.enable(b),c[b]=!0)}function Se(b){c[b]!==!1&&(i.disable(b),c[b]=!1)}function ye(b,ie){return d[b]!==ie?(i.bindFramebuffer(b,ie),d[b]=ie,b===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ie),b===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Oe(b,ie){let G=g,K=!1;if(b){G=f.get(ie),G===void 0&&(G=[],f.set(ie,G));const le=b.textures;if(G.length!==le.length||G[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,Te=le.length;Ae<Te;Ae++)G[Ae]=i.COLOR_ATTACHMENT0+Ae;G.length=le.length,K=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,K=!0);K&&i.drawBuffers(G)}function et(b){return m!==b?(i.useProgram(b),m=b,!0):!1}const He={[Rn]:i.FUNC_ADD,[Fl]:i.FUNC_SUBTRACT,[Gl]:i.FUNC_REVERSE_SUBTRACT};He[zl]=i.MIN,He[Vl]=i.MAX;const st={[kl]:i.ZERO,[Wl]:i.ONE,[Xl]:i.SRC_COLOR,[cs]:i.SRC_ALPHA,[Jl]:i.SRC_ALPHA_SATURATE,[jl]:i.DST_COLOR,[Kl]:i.DST_ALPHA,[Yl]:i.ONE_MINUS_SRC_COLOR,[us]:i.ONE_MINUS_SRC_ALPHA,[Zl]:i.ONE_MINUS_DST_COLOR,[ql]:i.ONE_MINUS_DST_ALPHA,[$l]:i.CONSTANT_COLOR,[ec]:i.ONE_MINUS_CONSTANT_COLOR,[tc]:i.CONSTANT_ALPHA,[nc]:i.ONE_MINUS_CONSTANT_ALPHA};function y(b,ie,G,K,le,Ae,Te,tt,ft,Ke){if(b===_n){v===!0&&(Se(i.BLEND),v=!1);return}if(v===!1&&(ae(i.BLEND),v=!0),b!==Hl){if(b!==h||Ke!==B){if((u!==Rn||x!==Rn)&&(i.blendEquation(i.FUNC_ADD),u=Rn,x=Rn),Ke)switch(b){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ba:i.blendFunc(i.ONE,i.ONE);break;case wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ba:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ra:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}T=null,M=null,N=null,w=null,I.set(0,0,0),D=0,h=b,B=Ke}return}le=le||ie,Ae=Ae||G,Te=Te||K,(ie!==u||le!==x)&&(i.blendEquationSeparate(He[ie],He[le]),u=ie,x=le),(G!==T||K!==M||Ae!==N||Te!==w)&&(i.blendFuncSeparate(st[G],st[K],st[Ae],st[Te]),T=G,M=K,N=Ae,w=Te),(tt.equals(I)===!1||ft!==D)&&(i.blendColor(tt.r,tt.g,tt.b,ft),I.copy(tt),D=ft),h=b,B=!1}function Qt(b,ie){b.side===yt?Se(i.CULL_FACE):ae(i.CULL_FACE);let G=b.side===Ct;ie&&(G=!G),Pe(G),b.blending===ci&&b.transparent===!1?y(_n):y(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),o.setFunc(b.depthFunc),o.setTest(b.depthTest),o.setMask(b.depthWrite),s.setMask(b.colorWrite);const K=b.stencilWrite;a.setTest(K),K&&(a.setMask(b.stencilWriteMask),a.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),a.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),Je(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(b){_!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),_=b)}function Le(b){b!==Pl?(ae(i.CULL_FACE),b!==Q&&(b===Qa?i.cullFace(i.BACK):b===Ll?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),Q=b}function ve(b){b!==V&&(X&&i.lineWidth(b),V=b)}function Je(b,ie,G){b?(ae(i.POLYGON_OFFSET_FILL),(F!==ie||q!==G)&&(i.polygonOffset(ie,G),F=ie,q=G)):Se(i.POLYGON_OFFSET_FILL)}function Ee(b){b?ae(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function C(b){b===void 0&&(b=i.TEXTURE0+j-1),se!==b&&(i.activeTexture(b),se=b)}function p(b,ie,G){G===void 0&&(se===null?G=i.TEXTURE0+j-1:G=se);let K=ue[G];K===void 0&&(K={type:void 0,texture:void 0},ue[G]=K),(K.type!==b||K.texture!==ie)&&(se!==G&&(i.activeTexture(G),se=G),i.bindTexture(b,ie||pe[b]),K.type=b,K.texture=ie)}function P(){const b=ue[se];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function k(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function me(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Fe(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function xe(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ie(b){je.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),je.copy(b))}function he(b){W.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),W.copy(b))}function Ue(b,ie){let G=l.get(ie);G===void 0&&(G=new WeakMap,l.set(ie,G));let K=G.get(b);K===void 0&&(K=i.getUniformBlockIndex(ie,b.name),G.set(b,K))}function be(b,ie){const K=l.get(ie).get(b);A.get(ie)!==K&&(i.uniformBlockBinding(ie,K,b.__bindingPointIndex),A.set(ie,K))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},se=null,ue={},d={},f=new WeakMap,g=[],m=null,v=!1,h=null,u=null,T=null,M=null,x=null,N=null,w=null,I=new ke(0,0,0),D=0,B=!1,_=null,Q=null,V=null,F=null,q=null,je.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Se,bindFramebuffer:ye,drawBuffers:Oe,useProgram:et,setBlending:y,setMaterial:Qt,setFlipSided:Pe,setCullFace:Le,setLineWidth:ve,setPolygonOffset:Je,setScissorTest:Ee,activeTexture:C,bindTexture:p,unbindTexture:P,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:fe,texImage3D:xe,updateUBOMapping:Ue,uniformBlockBinding:be,texStorage2D:Fe,texStorage3D:ee,texSubImage2D:k,texSubImage3D:me,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Ie,viewport:he,reset:Ze}}function Hg(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,c=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,p){return g?new OffscreenCanvas(C,p):Oi("canvas")}function v(C,p,P){let Y=1;const Z=Ee(C);if((Z.width>P||Z.height>P)&&(Y=P/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const k=Math.floor(Y*Z.width),me=Math.floor(Y*Z.height);d===void 0&&(d=m(k,me));const oe=p?m(k,me):d;return oe.width=k,oe.height=me,oe.getContext("2d").drawImage(C,0,0,k,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+k+"x"+me+")."),oe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function h(C){return C.generateMipmaps}function u(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,p,P,Y,Z=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let k=p;if(p===i.RED&&(P===i.FLOAT&&(k=i.R32F),P===i.HALF_FLOAT&&(k=i.R16F),P===i.UNSIGNED_BYTE&&(k=i.R8)),p===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(k=i.R8UI),P===i.UNSIGNED_SHORT&&(k=i.R16UI),P===i.UNSIGNED_INT&&(k=i.R32UI),P===i.BYTE&&(k=i.R8I),P===i.SHORT&&(k=i.R16I),P===i.INT&&(k=i.R32I)),p===i.RG&&(P===i.FLOAT&&(k=i.RG32F),P===i.HALF_FLOAT&&(k=i.RG16F),P===i.UNSIGNED_BYTE&&(k=i.RG8)),p===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(k=i.RG8UI),P===i.UNSIGNED_SHORT&&(k=i.RG16UI),P===i.UNSIGNED_INT&&(k=i.RG32UI),P===i.BYTE&&(k=i.RG8I),P===i.SHORT&&(k=i.RG16I),P===i.INT&&(k=i.RG32I)),p===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(k=i.RGB8UI),P===i.UNSIGNED_SHORT&&(k=i.RGB16UI),P===i.UNSIGNED_INT&&(k=i.RGB32UI),P===i.BYTE&&(k=i.RGB8I),P===i.SHORT&&(k=i.RGB16I),P===i.INT&&(k=i.RGB32I)),p===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),P===i.UNSIGNED_INT&&(k=i.RGBA32UI),P===i.BYTE&&(k=i.RGBA8I),P===i.SHORT&&(k=i.RGBA16I),P===i.INT&&(k=i.RGBA32I)),p===i.RGB&&P===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),p===i.RGBA){const me=Z?Br:Ve.getTransfer(Y);P===i.FLOAT&&(k=i.RGBA32F),P===i.HALF_FLOAT&&(k=i.RGBA16F),P===i.UNSIGNED_BYTE&&(k=me===qe?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function x(C,p){let P;return C?p===null||p===Hn||p===pi?P=i.DEPTH24_STENCIL8:p===rn?P=i.DEPTH32F_STENCIL8:p===Ri&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Hn||p===pi?P=i.DEPTH_COMPONENT24:p===rn?P=i.DEPTH_COMPONENT32F:p===Ri&&(P=i.DEPTH_COMPONENT16),P}function N(C,p){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==kt&&C.minFilter!==zt?Math.log2(Math.max(p.width,p.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?p.mipmaps.length:1}function w(C){const p=C.target;p.removeEventListener("dispose",w),D(p),p.isVideoTexture&&c.delete(p)}function I(C){const p=C.target;p.removeEventListener("dispose",I),_(p)}function D(C){const p=n.get(C);if(p.__webglInit===void 0)return;const P=C.source,Y=f.get(P);if(Y){const Z=Y[p.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&B(C),Object.keys(Y).length===0&&f.delete(P)}n.remove(C)}function B(C){const p=n.get(C);i.deleteTexture(p.__webglTexture);const P=C.source,Y=f.get(P);delete Y[p.__cacheKey],o.memory.textures--}function _(C){const p=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(p.__webglFramebuffer[Y]))for(let Z=0;Z<p.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(p.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(p.__webglFramebuffer[Y]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[Y])}else{if(Array.isArray(p.__webglFramebuffer))for(let Y=0;Y<p.__webglFramebuffer.length;Y++)i.deleteFramebuffer(p.__webglFramebuffer[Y]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let Y=0;Y<p.__webglColorRenderbuffer.length;Y++)p.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[Y]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const P=C.textures;for(let Y=0,Z=P.length;Y<Z;Y++){const k=n.get(P[Y]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(P[Y])}n.remove(C)}let Q=0;function V(){Q=0}function F(){const C=Q;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),Q+=1,C}function q(C){const p=[];return p.push(C.wrapS),p.push(C.wrapT),p.push(C.wrapR||0),p.push(C.magFilter),p.push(C.minFilter),p.push(C.anisotropy),p.push(C.internalFormat),p.push(C.format),p.push(C.type),p.push(C.generateMipmaps),p.push(C.premultiplyAlpha),p.push(C.flipY),p.push(C.unpackAlignment),p.push(C.colorSpace),p.join()}function j(C,p){const P=n.get(C);if(C.isVideoTexture&&ve(C),C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(P,C,p);return}}t.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+p)}function X(C,p){const P=n.get(C);if(C.version>0&&P.__version!==C.version){W(P,C,p);return}t.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+p)}function J(C,p){const P=n.get(C);if(C.version>0&&P.__version!==C.version){W(P,C,p);return}t.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+p)}function z(C,p){const P=n.get(C);if(C.version>0&&P.__version!==C.version){te(P,C,p);return}t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+p)}const se={[Bs]:i.REPEAT,[nn]:i.CLAMP_TO_EDGE,[Cs]:i.MIRRORED_REPEAT},ue={[kt]:i.NEAREST,[dc]:i.NEAREST_MIPMAP_NEAREST,[Yi]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},_e={[pc]:i.NEVER,[Cc]:i.ALWAYS,[mc]:i.LESS,[iA]:i.LEQUAL,[Ec]:i.EQUAL,[Bc]:i.GEQUAL,[_c]:i.GREATER,[vc]:i.NOTEQUAL};function Re(C,p){if(p.type===rn&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===zt||p.magFilter===Rr||p.magFilter===Yi||p.magFilter===Nn||p.minFilter===zt||p.minFilter===Rr||p.minFilter===Yi||p.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,se[p.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,se[p.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,se[p.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ue[p.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ue[p.minFilter]),p.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,_e[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===kt||p.minFilter!==Yi&&p.minFilter!==Nn||p.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,r.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function je(C,p){let P=!1;C.__webglInit===void 0&&(C.__webglInit=!0,p.addEventListener("dispose",w));const Y=p.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const k=q(p);if(k!==C.__cacheKey){Z[k]===void 0&&(Z[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),Z[k].usedTimes++;const me=Z[C.__cacheKey];me!==void 0&&(Z[C.__cacheKey].usedTimes--,me.usedTimes===0&&B(p)),C.__cacheKey=k,C.__webglTexture=Z[k].texture}return P}function W(C,p,P){let Y=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=je(C,p),k=p.source;t.bindTexture(Y,C.__webglTexture,i.TEXTURE0+P);const me=n.get(k);if(k.version!==me.__version||Z===!0){t.activeTexture(i.TEXTURE0+P);const oe=Ve.getPrimaries(Ve.workingColorSpace),de=p.colorSpace===En?null:Ve.getPrimaries(p.colorSpace),Fe=p.colorSpace===En||oe===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ee=v(p.image,!1,r.maxTextureSize);ee=Je(p,ee);const fe=s.convert(p.format,p.colorSpace),xe=s.convert(p.type);let Ie=M(p.internalFormat,fe,xe,p.colorSpace,p.isVideoTexture);Re(Y,p);let he;const Ue=p.mipmaps,be=p.isVideoTexture!==!0,Ze=me.__version===void 0||Z===!0,b=k.dataReady,ie=N(p,ee);if(p.isDepthTexture)Ie=x(p.format===mi,p.type),Ze&&(be?t.texStorage2D(i.TEXTURE_2D,1,Ie,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ee.width,ee.height,0,fe,xe,null));else if(p.isDataTexture)if(Ue.length>0){be&&Ze&&t.texStorage2D(i.TEXTURE_2D,ie,Ie,Ue[0].width,Ue[0].height);for(let G=0,K=Ue.length;G<K;G++)he=Ue[G],be?b&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,he.width,he.height,fe,xe,he.data):t.texImage2D(i.TEXTURE_2D,G,Ie,he.width,he.height,0,fe,xe,he.data);p.generateMipmaps=!1}else be?(Ze&&t.texStorage2D(i.TEXTURE_2D,ie,Ie,ee.width,ee.height),b&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,xe,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,ee.width,ee.height,0,fe,xe,ee.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){be&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Ie,Ue[0].width,Ue[0].height,ee.depth);for(let G=0,K=Ue.length;G<K;G++)if(he=Ue[G],p.format!==Vt)if(fe!==null)if(be){if(b)if(p.layerUpdates.size>0){const le=io(he.width,he.height,p.format,p.type);for(const Ae of p.layerUpdates){const Te=he.data.subarray(Ae*le/he.data.BYTES_PER_ELEMENT,(Ae+1)*le/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,Ae,he.width,he.height,1,fe,Te)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,he.width,he.height,ee.depth,fe,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Ie,he.width,he.height,ee.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?b&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,he.width,he.height,ee.depth,fe,xe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,Ie,he.width,he.height,ee.depth,0,fe,xe,he.data)}else{be&&Ze&&t.texStorage2D(i.TEXTURE_2D,ie,Ie,Ue[0].width,Ue[0].height);for(let G=0,K=Ue.length;G<K;G++)he=Ue[G],p.format!==Vt?fe!==null?be?b&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,G,Ie,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?b&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,he.width,he.height,fe,xe,he.data):t.texImage2D(i.TEXTURE_2D,G,Ie,he.width,he.height,0,fe,xe,he.data)}else if(p.isDataArrayTexture)if(be){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Ie,ee.width,ee.height,ee.depth),b)if(p.layerUpdates.size>0){const G=io(ee.width,ee.height,p.format,p.type);for(const K of p.layerUpdates){const le=ee.data.subarray(K*G/ee.data.BYTES_PER_ELEMENT,(K+1)*G/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,fe,xe,le)}p.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,xe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ee.width,ee.height,ee.depth,0,fe,xe,ee.data);else if(p.isData3DTexture)be?(Ze&&t.texStorage3D(i.TEXTURE_3D,ie,Ie,ee.width,ee.height,ee.depth),b&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,xe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ee.width,ee.height,ee.depth,0,fe,xe,ee.data);else if(p.isFramebufferTexture){if(Ze)if(be)t.texStorage2D(i.TEXTURE_2D,ie,Ie,ee.width,ee.height);else{let G=ee.width,K=ee.height;for(let le=0;le<ie;le++)t.texImage2D(i.TEXTURE_2D,le,Ie,G,K,0,fe,xe,null),G>>=1,K>>=1}}else if(Ue.length>0){if(be&&Ze){const G=Ee(Ue[0]);t.texStorage2D(i.TEXTURE_2D,ie,Ie,G.width,G.height)}for(let G=0,K=Ue.length;G<K;G++)he=Ue[G],be?b&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,fe,xe,he):t.texImage2D(i.TEXTURE_2D,G,Ie,fe,xe,he);p.generateMipmaps=!1}else if(be){if(Ze){const G=Ee(ee);t.texStorage2D(i.TEXTURE_2D,ie,Ie,G.width,G.height)}b&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,xe,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ie,fe,xe,ee);h(p)&&u(Y),me.__version=k.version,p.onUpdate&&p.onUpdate(p)}C.__version=p.version}function te(C,p,P){if(p.image.length!==6)return;const Y=je(C,p),Z=p.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+P);const k=n.get(Z);if(Z.version!==k.__version||Y===!0){t.activeTexture(i.TEXTURE0+P);const me=Ve.getPrimaries(Ve.workingColorSpace),oe=p.colorSpace===En?null:Ve.getPrimaries(p.colorSpace),de=p.colorSpace===En||me===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Fe=p.isCompressedTexture||p.image[0].isCompressedTexture,ee=p.image[0]&&p.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!Fe&&!ee?fe[K]=v(p.image[K],!0,r.maxCubemapSize):fe[K]=ee?p.image[K].image:p.image[K],fe[K]=Je(p,fe[K]);const xe=fe[0],Ie=s.convert(p.format,p.colorSpace),he=s.convert(p.type),Ue=M(p.internalFormat,Ie,he,p.colorSpace),be=p.isVideoTexture!==!0,Ze=k.__version===void 0||Y===!0,b=Z.dataReady;let ie=N(p,xe);Re(i.TEXTURE_CUBE_MAP,p);let G;if(Fe){be&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Ue,xe.width,xe.height);for(let K=0;K<6;K++){G=fe[K].mipmaps;for(let le=0;le<G.length;le++){const Ae=G[le];p.format!==Vt?Ie!==null?be?b&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,Ae.width,Ae.height,Ie,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Ue,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,Ae.width,Ae.height,Ie,he,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Ue,Ae.width,Ae.height,0,Ie,he,Ae.data)}}}else{if(G=p.mipmaps,be&&Ze){G.length>0&&ie++;const K=Ee(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Ue,K.width,K.height)}for(let K=0;K<6;K++)if(ee){be?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,Ie,he,fe[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ue,fe[K].width,fe[K].height,0,Ie,he,fe[K].data);for(let le=0;le<G.length;le++){const Te=G[le].image[K].image;be?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Te.width,Te.height,Ie,he,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Ue,Te.width,Te.height,0,Ie,he,Te.data)}}else{be?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ie,he,fe[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ue,Ie,he,fe[K]);for(let le=0;le<G.length;le++){const Ae=G[le];be?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Ie,he,Ae.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Ue,Ie,he,Ae.image[K])}}}h(p)&&u(i.TEXTURE_CUBE_MAP),k.__version=Z.version,p.onUpdate&&p.onUpdate(p)}C.__version=p.version}function pe(C,p,P,Y,Z,k){const me=s.convert(P.format,P.colorSpace),oe=s.convert(P.type),de=M(P.internalFormat,me,oe,P.colorSpace),Fe=n.get(p),ee=n.get(P);if(ee.__renderTarget=p,!Fe.__hasExternalTextures){const fe=Math.max(1,p.width>>k),xe=Math.max(1,p.height>>k);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,k,de,fe,xe,p.depth,0,me,oe,null):t.texImage2D(Z,k,de,fe,xe,0,me,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Le(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,ee.__webglTexture,0,Pe(p)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,ee.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(C,p,P){if(i.bindRenderbuffer(i.RENDERBUFFER,C),p.depthBuffer){const Y=p.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,k=x(p.stencilBuffer,Z),me=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=Pe(p);Le(p)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,k,p.width,p.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,k,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,k,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,C)}else{const Y=p.textures;for(let Z=0;Z<Y.length;Z++){const k=Y[Z],me=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),de=M(k.internalFormat,me,oe,k.colorSpace),Fe=Pe(p);P&&Le(p)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,de,p.width,p.height):Le(p)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,de,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,de,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(C,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(p.depthTexture);Y.__renderTarget=p,(!Y.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),j(p.depthTexture,0);const Z=Y.__webglTexture,k=Pe(p);if(p.depthTexture.format===ui)Le(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(p.depthTexture.format===mi)Le(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ye(C){const p=n.get(C),P=C.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),Y){const Z=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),p.__depthDisposeCallback=Z}p.__boundDepthTexture=Y}if(C.depthTexture&&!p.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Se(p.__webglFramebuffer,C)}else if(P){p.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[Y]),p.__webglDepthbuffer[Y]===void 0)p.__webglDepthbuffer[Y]=i.createRenderbuffer(),ae(p.__webglDepthbuffer[Y],C,!1);else{const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=p.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,k)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),ae(p.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(C,p,P){const Y=n.get(C);p!==void 0&&pe(Y.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&ye(C)}function et(C){const p=C.texture,P=n.get(C),Y=n.get(p);C.addEventListener("dispose",I);const Z=C.textures,k=C.isWebGLCubeRenderTarget===!0,me=Z.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=p.version,o.memory.textures++),k){P.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(p.mipmaps&&p.mipmaps.length>0){P.__webglFramebuffer[oe]=[];for(let de=0;de<p.mipmaps.length;de++)P.__webglFramebuffer[oe][de]=i.createFramebuffer()}else P.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){P.__webglFramebuffer=[];for(let oe=0;oe<p.mipmaps.length;oe++)P.__webglFramebuffer[oe]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(me)for(let oe=0,de=Z.length;oe<de;oe++){const Fe=n.get(Z[oe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Le(C)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const de=Z[oe];P.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[oe]);const Fe=s.convert(de.format,de.colorSpace),ee=s.convert(de.type),fe=M(de.internalFormat,Fe,ee,de.colorSpace,C.isXRRenderTarget===!0),xe=Pe(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,fe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,P.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(P.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Re(i.TEXTURE_CUBE_MAP,p);for(let oe=0;oe<6;oe++)if(p.mipmaps&&p.mipmaps.length>0)for(let de=0;de<p.mipmaps.length;de++)pe(P.__webglFramebuffer[oe][de],C,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else pe(P.__webglFramebuffer[oe],C,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);h(p)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let oe=0,de=Z.length;oe<de;oe++){const Fe=Z[oe],ee=n.get(Fe);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),Re(i.TEXTURE_2D,Fe),pe(P.__webglFramebuffer,C,Fe,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),h(Fe)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),Re(oe,p),p.mipmaps&&p.mipmaps.length>0)for(let de=0;de<p.mipmaps.length;de++)pe(P.__webglFramebuffer[de],C,p,i.COLOR_ATTACHMENT0,oe,de);else pe(P.__webglFramebuffer,C,p,i.COLOR_ATTACHMENT0,oe,0);h(p)&&u(oe),t.unbindTexture()}C.depthBuffer&&ye(C)}function He(C){const p=C.textures;for(let P=0,Y=p.length;P<Y;P++){const Z=p[P];if(h(Z)){const k=T(C),me=n.get(Z).__webglTexture;t.bindTexture(k,me),u(k),t.unbindTexture()}}}const st=[],y=[];function Qt(C){if(C.samples>0){if(Le(C)===!1){const p=C.textures,P=C.width,Y=C.height;let Z=i.COLOR_BUFFER_BIT;const k=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(C),oe=p.length>1;if(oe)for(let de=0;de<p.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let de=0;de<p.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[de]);const Fe=n.get(p[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,P,Y,0,0,P,Y,Z,i.NEAREST),A===!0&&(st.length=0,y.length=0,st.push(i.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.resolveDepthBuffer===!1&&(st.push(k),y.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<p.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,me.__webglColorRenderbuffer[de]);const Fe=n.get(p[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&A){const p=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function Pe(C){return Math.min(r.maxSamples,C.samples)}function Le(C){const p=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function ve(C){const p=o.render.frame;c.get(C)!==p&&(c.set(C,p),C.update())}function Je(C,p){const P=C.colorSpace,Y=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||P!==Ei&&P!==En&&(Ve.getTransfer(P)===qe?(Y!==Vt||Z!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),p}function Ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=Oe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Le}function Fg(i,e){function t(n,r=En){let s;const o=Ve.getTransfer(r);if(n===ln)return i.UNSIGNED_BYTE;if(n===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ko)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xo)return i.BYTE;if(n===Yo)return i.SHORT;if(n===Ri)return i.UNSIGNED_SHORT;if(n===ea)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===Hi)return i.HALF_FLOAT;if(n===qo)return i.ALPHA;if(n===jo)return i.RGB;if(n===Vt)return i.RGBA;if(n===Zo)return i.LUMINANCE;if(n===Jo)return i.LUMINANCE_ALPHA;if(n===ui)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===$o)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===eA)return i.RG;if(n===ra)return i.RG_INTEGER;if(n===sa)return i.RGBA_INTEGER;if(n===gr||n===pr||n===mr||n===Er)if(o===qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xs||n===Ss||n===Is||n===Ms)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ss)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Is)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ms)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ys||n===Ds||n===Ts)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ys||n===Ds)return o===qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ts)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qs||n===bs||n===ws||n===Rs||n===Os||n===Ns||n===Ps||n===Ls||n===Us||n===Hs||n===Fs||n===Gs||n===zs||n===Vs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qs)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bs)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ws)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rs)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Os)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ns)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ps)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ls)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Us)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hs)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fs)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gs)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zs)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vs)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===ks||n===Ws)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===_r)return o===qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ks)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ws)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tA||n===Xs||n===Ys||n===Ks)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===_r)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ys)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ks)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Gg={type:"move"};class ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,A=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const h=t.getJointPose(v,n),u=this._getHandJoint(l,v);h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=h.radius),u.visible=h!==null}const c=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,m=.005;l.inputState.pinching&&f>g+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=g-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else A!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(A.matrix.fromArray(s.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,s.linearVelocity?(A.hasLinearVelocity=!0,A.linearVelocity.copy(s.linearVelocity)):A.hasLinearVelocity=!1,s.angularVelocity?(A.hasAngularVelocity=!0,A.angularVelocity.copy(s.angularVelocity)):A.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return a!==null&&(a.visible=r!==null),A!==null&&(A.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vg=`
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

}`;class kg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:zg,fragmentShader:Vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wg extends Ci{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",A=1,l=null,c=null,d=null,f=null,g=null,m=null;const v=new kg,h=t.getContextAttributes();let u=null,T=null;const M=[],x=[],N=new Ye;let w=null;const I=new Ot;I.viewport=new it;const D=new Ot;D.viewport=new it;const B=[I,D],_=new uu;let Q=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=M[W];return te===void 0&&(te=new ls,M[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=M[W];return te===void 0&&(te=new ls,M[W]=te),te.getGripSpace()},this.getHand=function(W){let te=M[W];return te===void 0&&(te=new ls,M[W]=te),te.getHandSpace()};function F(W){const te=x.indexOf(W.inputSource);if(te===-1)return;const pe=M[te];pe!==void 0&&(pe.update(W.inputSource,W.frame,l||o),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",j);for(let W=0;W<M.length;W++){const te=x[W];te!==null&&(x[W]=null,M[W].disconnect(te))}Q=null,V=null,v.reset(),e.setRenderTarget(u),g=null,f=null,d=null,r=null,T=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",q),r.addEventListener("inputsourceschange",j),h.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(N),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let pe=null,ae=null,Se=null;h.depth&&(Se=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=h.stencil?mi:ui,ae=h.stencil?pi:Hn);const ye={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Fn(f.textureWidth,f.textureHeight,{format:Vt,type:ln,depthTexture:new hA(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const pe={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new Fn(g.framebufferWidth,g.framebufferHeight,{format:Vt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}T.isXRRenderTarget=!0,this.setFoveation(A),l=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(W){for(let te=0;te<W.removed.length;te++){const pe=W.removed[te],ae=x.indexOf(pe);ae>=0&&(x[ae]=null,M[ae].disconnect(pe))}for(let te=0;te<W.added.length;te++){const pe=W.added[te];let ae=x.indexOf(pe);if(ae===-1){for(let ye=0;ye<M.length;ye++)if(ye>=x.length){x.push(pe),ae=ye;break}else if(x[ye]===null){x[ye]=pe,ae=ye;break}if(ae===-1)break}const Se=M[ae];Se&&Se.connect(pe)}}const X=new H,J=new H;function z(W,te,pe){X.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);const ae=X.distanceTo(J),Se=te.projectionMatrix.elements,ye=pe.projectionMatrix.elements,Oe=Se[14]/(Se[10]-1),et=Se[14]/(Se[10]+1),He=(Se[9]+1)/Se[5],st=(Se[9]-1)/Se[5],y=(Se[8]-1)/Se[0],Qt=(ye[8]+1)/ye[0],Pe=Oe*y,Le=Oe*Qt,ve=ae/(-y+Qt),Je=ve*-y;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Je),W.translateZ(ve),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Se[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ee=Oe+ve,C=et+ve,p=Pe-Je,P=Le+(ae-Je),Y=He*et/C*Ee,Z=st*et/C*Ee;W.projectionMatrix.makePerspective(p,P,Y,Z,Ee,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function se(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let te=W.near,pe=W.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),_.near=D.near=I.near=te,_.far=D.far=I.far=pe,(Q!==_.near||V!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),Q=_.near,V=_.far),I.layers.mask=W.layers.mask|2,D.layers.mask=W.layers.mask|4,_.layers.mask=I.layers.mask|D.layers.mask;const ae=W.parent,Se=_.cameras;se(_,ae);for(let ye=0;ye<Se.length;ye++)se(Se[ye],ae);Se.length===2?z(_,I,D):_.projectionMatrix.copy(I.projectionMatrix),ue(W,_,ae)};function ue(W,te,pe){pe===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=qs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&g===null))return A},this.setFoveation=function(W){A=W,f!==null&&(f.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let _e=null;function Re(W,te){if(c=te.getViewerPose(l||o),m=te,c!==null){const pe=c.views;g!==null&&(e.setRenderTargetFramebuffer(T,g.framebuffer),e.setRenderTarget(T));let ae=!1;pe.length!==_.cameras.length&&(_.cameras.length=0,ae=!0);for(let ye=0;ye<pe.length;ye++){const Oe=pe[ye];let et=null;if(g!==null)et=g.getViewport(Oe);else{const st=d.getViewSubImage(f,Oe);et=st.viewport,ye===0&&(e.setRenderTargetTextures(T,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(T))}let He=B[ye];He===void 0&&(He=new Ot,He.layers.enable(ye),He.viewport=new it,B[ye]=He),He.matrix.fromArray(Oe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Oe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(et.x,et.y,et.width,et.height),ye===0&&(_.matrix.copy(He.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ae===!0&&_.cameras.push(He)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const ye=d.getDepthInformation(pe[0]);ye&&ye.isValid&&ye.texture&&v.init(e,ye,r.renderState)}}for(let pe=0;pe<M.length;pe++){const ae=x[pe],Se=M[pe];ae!==null&&Se!==void 0&&Se.update(ae,te,l||o)}_e&&_e(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}const je=new mA;je.setAnimationLoop(Re),this.setAnimationLoop=function(W){_e=W},this.dispose=function(){}}}const Qn=new Kt,Xg=new rt;function Yg(i,e){function t(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function n(h,u){u.color.getRGB(h.fogColor.value,uA(i)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function r(h,u,T,M,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(h,u):u.isMeshToonMaterial?(s(h,u),d(h,u)):u.isMeshPhongMaterial?(s(h,u),c(h,u)):u.isMeshStandardMaterial?(s(h,u),f(h,u),u.isMeshPhysicalMaterial&&g(h,u,x)):u.isMeshMatcapMaterial?(s(h,u),m(h,u)):u.isMeshDepthMaterial?s(h,u):u.isMeshDistanceMaterial?(s(h,u),v(h,u)):u.isMeshNormalMaterial?s(h,u):u.isLineBasicMaterial?(o(h,u),u.isLineDashedMaterial&&a(h,u)):u.isPointsMaterial?A(h,u,T,M):u.isSpriteMaterial?l(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,t(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,t(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===Ct&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,t(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===Ct&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,t(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,t(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);const T=e.get(u),M=T.envMap,x=T.envMapRotation;M&&(h.envMap.value=M,Qn.copy(x),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(Qn)),h.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap&&(h.lightMap.value=u.lightMap,h.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,h.lightMapTransform)),u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,h.aoMapTransform))}function o(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,t(u.map,h.mapTransform))}function a(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function A(h,u,T,M){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*T,h.scale.value=M*.5,u.map&&(h.map.value=u.map,t(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function l(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,t(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function c(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function d(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function f(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,h.roughnessMapTransform)),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function g(h,u,T){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ct&&h.clearcoatNormalScale.value.negate())),u.dispersion>0&&(h.dispersion.value=u.dispersion),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=T.texture,h.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,h.specularIntensityMapTransform))}function m(h,u){u.matcap&&(h.matcap.value=u.matcap)}function v(h,u){const T=e.get(u).light;h.referencePosition.value.setFromMatrixPosition(T.matrixWorld),h.nearDistance.value=T.shadow.camera.near,h.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Kg(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function A(T,M){const x=M.program;n.uniformBlockBinding(T,x)}function l(T,M){let x=r[T.id];x===void 0&&(m(T),x=c(T),r[T.id]=x,T.addEventListener("dispose",h));const N=M.program;n.updateUBOMapping(T,N);const w=e.render.frame;s[T.id]!==w&&(f(T),s[T.id]=w)}function c(T){const M=d();T.__bindingPointIndex=M;const x=i.createBuffer(),N=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,N,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const M=r[T.id],x=T.uniforms,N=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,I=x.length;w<I;w++){const D=Array.isArray(x[w])?x[w]:[x[w]];for(let B=0,_=D.length;B<_;B++){const Q=D[B];if(g(Q,w,B,N)===!0){const V=Q.__offset,F=Array.isArray(Q.value)?Q.value:[Q.value];let q=0;for(let j=0;j<F.length;j++){const X=F[j],J=v(X);typeof X=="number"||typeof X=="boolean"?(Q.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,V+q,Q.__data)):X.isMatrix3?(Q.__data[0]=X.elements[0],Q.__data[1]=X.elements[1],Q.__data[2]=X.elements[2],Q.__data[3]=0,Q.__data[4]=X.elements[3],Q.__data[5]=X.elements[4],Q.__data[6]=X.elements[5],Q.__data[7]=0,Q.__data[8]=X.elements[6],Q.__data[9]=X.elements[7],Q.__data[10]=X.elements[8],Q.__data[11]=0):(X.toArray(Q.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,Q.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(T,M,x,N){const w=T.value,I=M+"_"+x;if(N[I]===void 0)return typeof w=="number"||typeof w=="boolean"?N[I]=w:N[I]=w.clone(),!0;{const D=N[I];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return N[I]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function m(T){const M=T.uniforms;let x=0;const N=16;for(let I=0,D=M.length;I<D;I++){const B=Array.isArray(M[I])?M[I]:[M[I]];for(let _=0,Q=B.length;_<Q;_++){const V=B[_],F=Array.isArray(V.value)?V.value:[V.value];for(let q=0,j=F.length;q<j;q++){const X=F[q],J=v(X),z=x%N,se=z%J.boundary,ue=z+se;x+=se,ue!==0&&N-ue<J.storage&&(x+=N-ue),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=J.storage}}}const w=x%N;return w>0&&(x+=N-w),T.__size=x,T.__cache={},this}function v(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function h(T){const M=T.target;M.removeEventListener("dispose",h);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function u(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:A,update:l,dispose:u}}class qg{constructor(e={}){const{canvas:t=Sc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:A=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const m=new Uint32Array(4),v=new Int32Array(4);let h=null,u=null;const T=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this.toneMapping=vn,this.toneMappingExposure=1;const x=this;let N=!1,w=0,I=0,D=null,B=-1,_=null;const Q=new it,V=new it;let F=null;const q=new ke(0);let j=0,X=t.width,J=t.height,z=1,se=null,ue=null;const _e=new it(0,0,X,J),Re=new it(0,0,X,J);let je=!1;const W=new Aa;let te=!1,pe=!1;this.transmissionResolutionScale=1;const ae=new rt,Se=new rt,ye=new H,Oe=new it,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function st(){return D===null?z:1}let y=n;function Qt(E,R){return t.getContext(E,R)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:A,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$s}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),y===null){const R="webgl2";if(y=Qt(R,E),y===null)throw Qt(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Pe,Le,ve,Je,Ee,C,p,P,Y,Z,k,me,oe,de,Fe,ee,fe,xe,Ie,he,Ue,be,Ze,b;function ie(){Pe=new rh(y),Pe.init(),be=new Fg(y,Pe),Le=new Jf(y,Pe,e,be),ve=new Ug(y,Pe),Le.reverseDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),Je=new oh(y),Ee=new Ig,C=new Hg(y,Pe,ve,Ee,Le,be,Je),p=new eh(x),P=new ih(x),Y=new fu(y),Ze=new jf(y,Y),Z=new sh(y,Y,Je,Ze),k=new lh(y,Z,Y,Je),Ie=new Ah(y,Le,C),ee=new $f(Ee),me=new Sg(x,p,P,Pe,Le,Ze,ee),oe=new Yg(x,Ee),de=new yg,Fe=new Rg(Pe),xe=new qf(x,p,P,ve,k,g,A),fe=new Pg(x,k,Le),b=new Kg(y,Je,Le,ve),he=new Zf(y,Pe,Je),Ue=new ah(y,Pe,Je),Je.programs=me.programs,x.capabilities=Le,x.extensions=Pe,x.properties=Ee,x.renderLists=de,x.shadowMap=fe,x.state=ve,x.info=Je}ie();const G=new Wg(x,y);this.xr=G,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const E=Pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(X,J,!1))},this.getSize=function(E){return E.set(X,J)},this.setSize=function(E,R,L=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,J=R,t.width=Math.floor(E*z),t.height=Math.floor(R*z),L===!0&&(t.style.width=E+"px",t.style.height=R+"px"),this.setViewport(0,0,E,R)},this.getDrawingBufferSize=function(E){return E.set(X*z,J*z).floor()},this.setDrawingBufferSize=function(E,R,L){X=E,J=R,z=L,t.width=Math.floor(E*L),t.height=Math.floor(R*L),this.setViewport(0,0,E,R)},this.getCurrentViewport=function(E){return E.copy(Q)},this.getViewport=function(E){return E.copy(_e)},this.setViewport=function(E,R,L,U){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,R,L,U),ve.viewport(Q.copy(_e).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,R,L,U){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,R,L,U),ve.scissor(V.copy(Re).multiplyScalar(z).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(E){ve.setScissorTest(je=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(E=!0,R=!0,L=!0){let U=0;if(E){let O=!1;if(D!==null){const $=D.texture.format;O=$===sa||$===ra||$===ia}if(O){const $=D.texture.type,re=$===ln||$===Hn||$===Ri||$===pi||$===ta||$===na,ce=xe.getClearColor(),ge=xe.getClearAlpha(),Me=ce.r,De=ce.g,Be=ce.b;re?(m[0]=Me,m[1]=De,m[2]=Be,m[3]=ge,y.clearBufferuiv(y.COLOR,0,m)):(v[0]=Me,v[1]=De,v[2]=Be,v[3]=ge,y.clearBufferiv(y.COLOR,0,v))}else U|=y.COLOR_BUFFER_BIT}R&&(U|=y.DEPTH_BUFFER_BIT),L&&(U|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),xe.dispose(),de.dispose(),Fe.dispose(),Ee.dispose(),p.dispose(),P.dispose(),k.dispose(),Ze.dispose(),b.dispose(),me.dispose(),G.dispose(),G.removeEventListener("sessionstart",_a),G.removeEventListener("sessionend",va),xn.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const E=Je.autoReset,R=fe.enabled,L=fe.autoUpdate,U=fe.needsUpdate,O=fe.type;ie(),Je.autoReset=E,fe.enabled=R,fe.autoUpdate=L,fe.needsUpdate=U,fe.type=O}function Ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Te(E){const R=E.target;R.removeEventListener("dispose",Te),tt(R)}function tt(E){ft(E),Ee.remove(E)}function ft(E){const R=Ee.get(E).programs;R!==void 0&&(R.forEach(function(L){me.releaseProgram(L)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,R,L,U,O,$){R===null&&(R=et);const re=O.isMesh&&O.matrixWorld.determinant()<0,ce=IA(E,R,L,U,O);ve.setMaterial(U,re);let ge=L.index,Me=1;if(U.wireframe===!0){if(ge=Z.getWireframeAttribute(L),ge===void 0)return;Me=2}const De=L.drawRange,Be=L.attributes.position;let Ge=De.start*Me,We=(De.start+De.count)*Me;$!==null&&(Ge=Math.max(Ge,$.start*Me),We=Math.min(We,($.start+$.count)*Me)),ge!==null?(Ge=Math.max(Ge,0),We=Math.min(We,ge.count)):Be!=null&&(Ge=Math.max(Ge,0),We=Math.min(We,Be.count));const at=We-Ge;if(at<0||at===1/0)return;Ze.setup(O,U,ce,L,ge);let nt,ze=he;if(ge!==null&&(nt=Y.get(ge),ze=Ue,ze.setIndex(nt)),O.isMesh)U.wireframe===!0?(ve.setLineWidth(U.wireframeLinewidth*st()),ze.setMode(y.LINES)):ze.setMode(y.TRIANGLES);else if(O.isLine){let Ce=U.linewidth;Ce===void 0&&(Ce=1),ve.setLineWidth(Ce*st()),O.isLineSegments?ze.setMode(y.LINES):O.isLineLoop?ze.setMode(y.LINE_LOOP):ze.setMode(y.LINE_STRIP)}else O.isPoints?ze.setMode(y.POINTS):O.isSprite&&ze.setMode(y.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Pe.get("WEBGL_multi_draw"))ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,ut=O._multiDrawCounts,Xe=O._multiDrawCount,Lt=ge?Y.get(ge).bytesPerElement:1,Xn=Ee.get(U).currentProgram.getUniforms();for(let xt=0;xt<Xe;xt++)Xn.setValue(y,"_gl_DrawID",xt),ze.render(Ce[xt]/Lt,ut[xt])}else if(O.isInstancedMesh)ze.renderInstances(Ge,at,O.count);else if(L.isInstancedBufferGeometry){const Ce=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,ut=Math.min(L.instanceCount,Ce);ze.renderInstances(Ge,at,ut)}else ze.render(Ge,at)};function Ke(E,R,L){E.transparent===!0&&E.side===yt&&E.forceSinglePass===!1?(E.side=Ct,E.needsUpdate=!0,Wi(E,R,L),E.side=Bn,E.needsUpdate=!0,Wi(E,R,L),E.side=yt):Wi(E,R,L)}this.compile=function(E,R,L=null){L===null&&(L=E),u=Fe.get(L),u.init(R),M.push(u),L.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),E!==L&&E.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const U=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const $=O.material;if($)if(Array.isArray($))for(let re=0;re<$.length;re++){const ce=$[re];Ke(ce,L,O),U.add(ce)}else Ke($,L,O),U.add($)}),M.pop(),u=null,U},this.compileAsync=function(E,R,L=null){const U=this.compile(E,R,L);return new Promise(O=>{function $(){if(U.forEach(function(re){Ee.get(re).currentProgram.isReady()&&U.delete(re)}),U.size===0){O(E);return}setTimeout($,10)}Pe.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Pt=null;function qt(E){Pt&&Pt(E)}function _a(){xn.stop()}function va(){xn.start()}const xn=new mA;xn.setAnimationLoop(qt),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(E){Pt=E,G.setAnimationLoop(E),E===null?xn.stop():xn.start()},G.addEventListener("sessionstart",_a),G.addEventListener("sessionend",va),this.render=function(E,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(R),R=G.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,R,D),u=Fe.get(E,M.length),u.init(R),M.push(u),Se.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),W.setFromProjectionMatrix(Se),pe=this.localClippingEnabled,te=ee.init(this.clippingPlanes,pe),h=de.get(E,T.length),h.init(),T.push(h),G.enabled===!0&&G.isPresenting===!0){const $=x.xr.getDepthSensingMesh();$!==null&&Qr($,R,-1/0,x.sortObjects)}Qr(E,R,0,x.sortObjects),h.finish(),x.sortObjects===!0&&h.sort(se,ue),He=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,He&&xe.addToRenderList(h,E),this.info.render.frame++,te===!0&&ee.beginShadows();const L=u.state.shadowsArray;fe.render(L,E,R),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const U=h.opaque,O=h.transmissive;if(u.setupLights(),R.isArrayCamera){const $=R.cameras;if(O.length>0)for(let re=0,ce=$.length;re<ce;re++){const ge=$[re];Ca(U,O,E,ge)}He&&xe.render(E);for(let re=0,ce=$.length;re<ce;re++){const ge=$[re];Ba(h,E,ge,ge.viewport)}}else O.length>0&&Ca(U,O,E,R),He&&xe.render(E),Ba(h,E,R);D!==null&&I===0&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(x,E,R),Ze.resetDefaultState(),B=-1,_=null,M.pop(),M.length>0?(u=M[M.length-1],te===!0&&ee.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?h=T[T.length-1]:h=null};function Qr(E,R,L,U){if(E.visible===!1)return;if(E.layers.test(R.layers)){if(E.isGroup)L=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(R);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){U&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);const re=k.update(E),ce=E.material;ce.visible&&h.push(E,re,ce,L,Oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const re=k.update(E),ce=E.material;if(U&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Oe.copy(re.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(ce)){const ge=re.groups;for(let Me=0,De=ge.length;Me<De;Me++){const Be=ge[Me],Ge=ce[Be.materialIndex];Ge&&Ge.visible&&h.push(E,re,Ge,L,Oe.z,Be)}}else ce.visible&&h.push(E,re,ce,L,Oe.z,null)}}const $=E.children;for(let re=0,ce=$.length;re<ce;re++)Qr($[re],R,L,U)}function Ba(E,R,L,U){const O=E.opaque,$=E.transmissive,re=E.transparent;u.setupLightsView(L),te===!0&&ee.setGlobalState(x.clippingPlanes,L),U&&ve.viewport(Q.copy(U)),O.length>0&&ki(O,R,L),$.length>0&&ki($,R,L),re.length>0&&ki(re,R,L),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ca(E,R,L,U){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[U.id]===void 0&&(u.state.transmissionRenderTarget[U.id]=new Fn(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?Hi:ln,minFilter:Nn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const $=u.state.transmissionRenderTarget[U.id],re=U.viewport||Q;$.setSize(re.z*x.transmissionResolutionScale,re.w*x.transmissionResolutionScale);const ce=x.getRenderTarget();x.setRenderTarget($),x.getClearColor(q),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),He&&xe.render(L);const ge=x.toneMapping;x.toneMapping=vn;const Me=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),u.setupLightsView(U),te===!0&&ee.setGlobalState(x.clippingPlanes,U),ki(E,L,U),C.updateMultisampleRenderTarget($),C.updateRenderTargetMipmap($),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Be=0,Ge=R.length;Be<Ge;Be++){const We=R[Be],at=We.object,nt=We.geometry,ze=We.material,Ce=We.group;if(ze.side===yt&&at.layers.test(U.layers)){const ut=ze.side;ze.side=Ct,ze.needsUpdate=!0,xa(at,L,U,nt,ze,Ce),ze.side=ut,ze.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget($),C.updateRenderTargetMipmap($))}x.setRenderTarget(ce),x.setClearColor(q,j),Me!==void 0&&(U.viewport=Me),x.toneMapping=ge}function ki(E,R,L){const U=R.isScene===!0?R.overrideMaterial:null;for(let O=0,$=E.length;O<$;O++){const re=E[O],ce=re.object,ge=re.geometry,Me=U===null?re.material:U,De=re.group;ce.layers.test(L.layers)&&xa(ce,R,L,ge,Me,De)}}function xa(E,R,L,U,O,$){E.onBeforeRender(x,R,L,U,O,$),E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,R,L,U,E,$),O.transparent===!0&&O.side===yt&&O.forceSinglePass===!1?(O.side=Ct,O.needsUpdate=!0,x.renderBufferDirect(L,R,U,O,E,$),O.side=Bn,O.needsUpdate=!0,x.renderBufferDirect(L,R,U,O,E,$),O.side=yt):x.renderBufferDirect(L,R,U,O,E,$),E.onAfterRender(x,R,L,U,O,$)}function Wi(E,R,L){R.isScene!==!0&&(R=et);const U=Ee.get(E),O=u.state.lights,$=u.state.shadowsArray,re=O.state.version,ce=me.getParameters(E,O.state,$,R,L),ge=me.getProgramCacheKey(ce);let Me=U.programs;U.environment=E.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(E.isMeshStandardMaterial?P:p).get(E.envMap||U.environment),U.envMapRotation=U.environment!==null&&E.envMap===null?R.environmentRotation:E.envMapRotation,Me===void 0&&(E.addEventListener("dispose",Te),Me=new Map,U.programs=Me);let De=Me.get(ge);if(De!==void 0){if(U.currentProgram===De&&U.lightsStateVersion===re)return Ia(E,ce),De}else ce.uniforms=me.getUniforms(E),E.onBeforeCompile(ce,x),De=me.acquireProgram(ce,ge),Me.set(ge,De),U.uniforms=ce.uniforms;const Be=U.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=ee.uniform),Ia(E,ce),U.needsLights=yA(E),U.lightsStateVersion=re,U.needsLights&&(Be.ambientLightColor.value=O.state.ambient,Be.lightProbe.value=O.state.probe,Be.directionalLights.value=O.state.directional,Be.directionalLightShadows.value=O.state.directionalShadow,Be.spotLights.value=O.state.spot,Be.spotLightShadows.value=O.state.spotShadow,Be.rectAreaLights.value=O.state.rectArea,Be.ltc_1.value=O.state.rectAreaLTC1,Be.ltc_2.value=O.state.rectAreaLTC2,Be.pointLights.value=O.state.point,Be.pointLightShadows.value=O.state.pointShadow,Be.hemisphereLights.value=O.state.hemi,Be.directionalShadowMap.value=O.state.directionalShadowMap,Be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Be.spotShadowMap.value=O.state.spotShadowMap,Be.spotLightMatrix.value=O.state.spotLightMatrix,Be.spotLightMap.value=O.state.spotLightMap,Be.pointShadowMap.value=O.state.pointShadowMap,Be.pointShadowMatrix.value=O.state.pointShadowMatrix),U.currentProgram=De,U.uniformsList=null,De}function Sa(E){if(E.uniformsList===null){const R=E.currentProgram.getUniforms();E.uniformsList=vr.seqWithValue(R.seq,E.uniforms)}return E.uniformsList}function Ia(E,R){const L=Ee.get(E);L.outputColorSpace=R.outputColorSpace,L.batching=R.batching,L.batchingColor=R.batchingColor,L.instancing=R.instancing,L.instancingColor=R.instancingColor,L.instancingMorph=R.instancingMorph,L.skinning=R.skinning,L.morphTargets=R.morphTargets,L.morphNormals=R.morphNormals,L.morphColors=R.morphColors,L.morphTargetsCount=R.morphTargetsCount,L.numClippingPlanes=R.numClippingPlanes,L.numIntersection=R.numClipIntersection,L.vertexAlphas=R.vertexAlphas,L.vertexTangents=R.vertexTangents,L.toneMapping=R.toneMapping}function IA(E,R,L,U,O){R.isScene!==!0&&(R=et),C.resetTextureUnits();const $=R.fog,re=U.isMeshStandardMaterial?R.environment:null,ce=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ei,ge=(U.isMeshStandardMaterial?P:p).get(U.envMap||re),Me=U.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,De=!!L.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Be=!!L.morphAttributes.position,Ge=!!L.morphAttributes.normal,We=!!L.morphAttributes.color;let at=vn;U.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(at=x.toneMapping);const nt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ze=nt!==void 0?nt.length:0,Ce=Ee.get(U),ut=u.state.lights;if(te===!0&&(pe===!0||E!==_)){const Et=E===_&&U.id===B;ee.setState(U,E,Et)}let Xe=!1;U.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==ut.state.version||Ce.outputColorSpace!==ce||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==ge||U.fog===!0&&Ce.fog!==$||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ee.numPlanes||Ce.numIntersection!==ee.numIntersection)||Ce.vertexAlphas!==Me||Ce.vertexTangents!==De||Ce.morphTargets!==Be||Ce.morphNormals!==Ge||Ce.morphColors!==We||Ce.toneMapping!==at||Ce.morphTargetsCount!==ze)&&(Xe=!0):(Xe=!0,Ce.__version=U.version);let Lt=Ce.currentProgram;Xe===!0&&(Lt=Wi(U,R,O));let Xn=!1,xt=!1,Mi=!1;const $e=Lt.getUniforms(),bt=Ce.uniforms;if(ve.useProgram(Lt.program)&&(Xn=!0,xt=!0,Mi=!0),U.id!==B&&(B=U.id,xt=!0),Xn||_!==E){ve.buffers.depth.getReversed()?(ae.copy(E.projectionMatrix),Mc(ae),yc(ae),$e.setValue(y,"projectionMatrix",ae)):$e.setValue(y,"projectionMatrix",E.projectionMatrix),$e.setValue(y,"viewMatrix",E.matrixWorldInverse);const vt=$e.map.cameraPosition;vt!==void 0&&vt.setValue(y,ye.setFromMatrixPosition(E.matrixWorld)),Le.logarithmicDepthBuffer&&$e.setValue(y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&$e.setValue(y,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,xt=!0,Mi=!0)}if(O.isSkinnedMesh){$e.setOptional(y,O,"bindMatrix"),$e.setOptional(y,O,"bindMatrixInverse");const Et=O.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),$e.setValue(y,"boneTexture",Et.boneTexture,C))}O.isBatchedMesh&&($e.setOptional(y,O,"batchingTexture"),$e.setValue(y,"batchingTexture",O._matricesTexture,C),$e.setOptional(y,O,"batchingIdTexture"),$e.setValue(y,"batchingIdTexture",O._indirectTexture,C),$e.setOptional(y,O,"batchingColorTexture"),O._colorsTexture!==null&&$e.setValue(y,"batchingColorTexture",O._colorsTexture,C));const wt=L.morphAttributes;if((wt.position!==void 0||wt.normal!==void 0||wt.color!==void 0)&&Ie.update(O,L,Lt),(xt||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,$e.setValue(y,"receiveShadow",O.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(bt.envMap.value=ge,bt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&R.environment!==null&&(bt.envMapIntensity.value=R.environmentIntensity),xt&&($e.setValue(y,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&MA(bt,Mi),$&&U.fog===!0&&oe.refreshFogUniforms(bt,$),oe.refreshMaterialUniforms(bt,U,z,J,u.state.transmissionRenderTarget[E.id]),vr.upload(y,Sa(Ce),bt,C)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(vr.upload(y,Sa(Ce),bt,C),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&$e.setValue(y,"center",O.center),$e.setValue(y,"modelViewMatrix",O.modelViewMatrix),$e.setValue(y,"normalMatrix",O.normalMatrix),$e.setValue(y,"modelMatrix",O.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Et=U.uniformsGroups;for(let vt=0,br=Et.length;vt<br;vt++){const Sn=Et[vt];b.update(Sn,Lt),b.bind(Sn,Lt)}}return Lt}function MA(E,R){E.ambientLightColor.needsUpdate=R,E.lightProbe.needsUpdate=R,E.directionalLights.needsUpdate=R,E.directionalLightShadows.needsUpdate=R,E.pointLights.needsUpdate=R,E.pointLightShadows.needsUpdate=R,E.spotLights.needsUpdate=R,E.spotLightShadows.needsUpdate=R,E.rectAreaLights.needsUpdate=R,E.hemisphereLights.needsUpdate=R}function yA(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,R,L){Ee.get(E.texture).__webglTexture=R,Ee.get(E.depthTexture).__webglTexture=L;const U=Ee.get(E);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=L===void 0,U.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,R){const L=Ee.get(E);L.__webglFramebuffer=R,L.__useDefaultFramebuffer=R===void 0};const DA=y.createFramebuffer();this.setRenderTarget=function(E,R=0,L=0){D=E,w=R,I=L;let U=!0,O=null,$=!1,re=!1;if(E){const ge=Ee.get(E);if(ge.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(y.FRAMEBUFFER,null),U=!1;else if(ge.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(ge.__hasExternalTextures)C.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Be=E.depthTexture;if(ge.__boundDepthTexture!==Be){if(Be!==null&&Ee.has(Be)&&(E.width!==Be.image.width||E.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(re=!0);const De=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[R])?O=De[R][L]:O=De[R],$=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?O=Ee.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?O=De[L]:O=De,Q.copy(E.viewport),V.copy(E.scissor),F=E.scissorTest}else Q.copy(_e).multiplyScalar(z).floor(),V.copy(Re).multiplyScalar(z).floor(),F=je;if(L!==0&&(O=DA),ve.bindFramebuffer(y.FRAMEBUFFER,O)&&U&&ve.drawBuffers(E,O),ve.viewport(Q),ve.scissor(V),ve.setScissorTest(F),$){const ge=Ee.get(E.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+R,ge.__webglTexture,L)}else if(re){const ge=Ee.get(E.texture),Me=R;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,ge.__webglTexture,L,Me)}else if(E!==null&&L!==0){const ge=Ee.get(E.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,ge.__webglTexture,L)}B=-1},this.readRenderTargetPixels=function(E,R,L,U,O,$,re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&re!==void 0&&(ce=ce[re]),ce){ve.bindFramebuffer(y.FRAMEBUFFER,ce);try{const ge=E.texture,Me=ge.format,De=ge.type;if(!Le.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=E.width-U&&L>=0&&L<=E.height-O&&y.readPixels(R,L,U,O,be.convert(Me),be.convert(De),$)}finally{const ge=D!==null?Ee.get(D).__webglFramebuffer:null;ve.bindFramebuffer(y.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(E,R,L,U,O,$,re){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&re!==void 0&&(ce=ce[re]),ce){const ge=E.texture,Me=ge.format,De=ge.type;if(!Le.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=E.width-U&&L>=0&&L<=E.height-O){ve.bindFramebuffer(y.FRAMEBUFFER,ce);const Be=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Be),y.bufferData(y.PIXEL_PACK_BUFFER,$.byteLength,y.STREAM_READ),y.readPixels(R,L,U,O,be.convert(Me),be.convert(De),0);const Ge=D!==null?Ee.get(D).__webglFramebuffer:null;ve.bindFramebuffer(y.FRAMEBUFFER,Ge);const We=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Ic(y,We,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Be),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,$),y.deleteBuffer(Be),y.deleteSync(We),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,R=null,L=0){E.isTexture!==!0&&(Ai("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,E=arguments[1]);const U=Math.pow(2,-L),O=Math.floor(E.image.width*U),$=Math.floor(E.image.height*U),re=R!==null?R.x:0,ce=R!==null?R.y:0;C.setTexture2D(E,0),y.copyTexSubImage2D(y.TEXTURE_2D,L,0,0,re,ce,O,$),ve.unbindTexture()};const TA=y.createFramebuffer(),QA=y.createFramebuffer();this.copyTextureToTexture=function(E,R,L=null,U=null,O=0,$=null){E.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1],R=arguments[2],$=arguments[3]||0,L=null),$===null&&(O!==0?(Ai("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=O,O=0):$=0);let re,ce,ge,Me,De,Be,Ge,We,at;const nt=E.isCompressedTexture?E.mipmaps[$]:E.image;if(L!==null)re=L.max.x-L.min.x,ce=L.max.y-L.min.y,ge=L.isBox3?L.max.z-L.min.z:1,Me=L.min.x,De=L.min.y,Be=L.isBox3?L.min.z:0;else{const wt=Math.pow(2,-O);re=Math.floor(nt.width*wt),ce=Math.floor(nt.height*wt),E.isDataArrayTexture?ge=nt.depth:E.isData3DTexture?ge=Math.floor(nt.depth*wt):ge=1,Me=0,De=0,Be=0}U!==null?(Ge=U.x,We=U.y,at=U.z):(Ge=0,We=0,at=0);const ze=be.convert(R.format),Ce=be.convert(R.type);let ut;R.isData3DTexture?(C.setTexture3D(R,0),ut=y.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(C.setTexture2DArray(R,0),ut=y.TEXTURE_2D_ARRAY):(C.setTexture2D(R,0),ut=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,R.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,R.unpackAlignment);const Xe=y.getParameter(y.UNPACK_ROW_LENGTH),Lt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Xn=y.getParameter(y.UNPACK_SKIP_PIXELS),xt=y.getParameter(y.UNPACK_SKIP_ROWS),Mi=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,nt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,nt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Me),y.pixelStorei(y.UNPACK_SKIP_ROWS,De),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Be);const $e=E.isDataArrayTexture||E.isData3DTexture,bt=R.isDataArrayTexture||R.isData3DTexture;if(E.isDepthTexture){const wt=Ee.get(E),Et=Ee.get(R),vt=Ee.get(wt.__renderTarget),br=Ee.get(Et.__renderTarget);ve.bindFramebuffer(y.READ_FRAMEBUFFER,vt.__webglFramebuffer),ve.bindFramebuffer(y.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let Sn=0;Sn<ge;Sn++)$e&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ee.get(E).__webglTexture,O,Be+Sn),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ee.get(R).__webglTexture,$,at+Sn)),y.blitFramebuffer(Me,De,re,ce,Ge,We,re,ce,y.DEPTH_BUFFER_BIT,y.NEAREST);ve.bindFramebuffer(y.READ_FRAMEBUFFER,null),ve.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||Ee.has(E)){const wt=Ee.get(E),Et=Ee.get(R);ve.bindFramebuffer(y.READ_FRAMEBUFFER,TA),ve.bindFramebuffer(y.DRAW_FRAMEBUFFER,QA);for(let vt=0;vt<ge;vt++)$e?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,wt.__webglTexture,O,Be+vt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,wt.__webglTexture,O),bt?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Et.__webglTexture,$,at+vt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Et.__webglTexture,$),O!==0?y.blitFramebuffer(Me,De,re,ce,Ge,We,re,ce,y.COLOR_BUFFER_BIT,y.NEAREST):bt?y.copyTexSubImage3D(ut,$,Ge,We,at+vt,Me,De,re,ce):y.copyTexSubImage2D(ut,$,Ge,We,Me,De,re,ce);ve.bindFramebuffer(y.READ_FRAMEBUFFER,null),ve.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else bt?E.isDataTexture||E.isData3DTexture?y.texSubImage3D(ut,$,Ge,We,at,re,ce,ge,ze,Ce,nt.data):R.isCompressedArrayTexture?y.compressedTexSubImage3D(ut,$,Ge,We,at,re,ce,ge,ze,nt.data):y.texSubImage3D(ut,$,Ge,We,at,re,ce,ge,ze,Ce,nt):E.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,$,Ge,We,re,ce,ze,Ce,nt.data):E.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,$,Ge,We,nt.width,nt.height,ze,nt.data):y.texSubImage2D(y.TEXTURE_2D,$,Ge,We,re,ce,ze,Ce,nt);y.pixelStorei(y.UNPACK_ROW_LENGTH,Xe),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Lt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Xn),y.pixelStorei(y.UNPACK_SKIP_ROWS,xt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Mi),$===0&&R.generateMipmaps&&y.generateMipmap(ut),ve.unbindTexture()},this.copyTextureToTexture3D=function(E,R,L=null,U=null,O=0){return E.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture3D function signature has changed."),L=arguments[0]||null,U=arguments[1]||null,E=arguments[2],R=arguments[3],O=arguments[4]||0),Ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,R,L,U,O)},this.initRenderTarget=function(E){Ee.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){w=0,I=0,D=null,ve.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}const Ni={a:"C4",s:"C#4",d:"D4",f:"D#4",g:"E4",h:"F4",j:"F#4",k:"G4",l:"A4",ç:"A#4","]":"A#5",Enter:"B#4",q:"C5",w:"C#5",e:"D5",r:"D#5",t:"E5",y:"F5",u:"F#5",i:"G5",o:"A5",p:"B4",3:"B5",4:"B#5",z:"C3",x:"C#3",c:"D3",v:"D#3","/":"E3",".":"F3",",":"F#3",m:"G3",n:"A3",";":"A#3",b:"B3",Shift:"B#3","'":"C2",1:"C#2",2:"D2","=":"D#2","[":"E2",5:"C6",6:"D#6",7:"D6",8:"E6",9:"F#6",0:"B2","-":"B#2","//":"G#4"},jg="/piano-simulator/assets/a-mrXXo23n.png",Zg="/piano-simulator/assets/b-B0fhAuiD.png",Jg="/piano-simulator/assets/c-DH34dIE8.png",$g="/piano-simulator/assets/d-DzQQG8_S.png",ep="/piano-simulator/assets/e-DsD8-e4N.png",tp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA4sSURBVHgB7d1NiJXXHcfxY+vGCRrwZdOZON2MOFmYUtOYFAzkRSwECtp21ZFmlWAgkKwaEgqFkLRdKQkEklUb0lXpuEppaV7AgUZDhTSLjMSVdmblGIjiuLT33LzUgCbxzp3xOb/7+cDljqOgc1187znP/55n3czU4asFAGjadwoA0DxBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQID1BeAmbZ3YUsY2biiT0xNlbNOGsu17W/vP/cfGsbJtfPOXf3bs9s++dyNLCxf6z8uXrpTLF6/0npfLcu/5/OKFstR71Of663PzCwW4MUEHbqiGe/qeqTK5847e15t7zxP97w377/i2atQvfx73+fc/7sde6OEz62amDl8twMirq+jpPVO9gO8o26fHy+SdE1+7su6KuqI/+9FiP/D1ca73df0ejBpBhxG2c8+OcvdDd/VDvr23fZ5i/uSZcurtD8rZ3ur9dO9rGAWCDiOkrri391be9x+4t+zet6uJFfhK1dV6P/Bv/acf97pND4kEHUbAFyvxvT/bMxIR/zo17nPH3hN34gg6hKrh3v/oA+UnvceoR/xG5mZPlOOfxx1aJ+gQZtv4lrL/Vw9ajd+E+vG42Zff7AceWiXoEKKG/MCTj5S9B+8tDEbYaZmgQ+OEfPiEnRYJOjTKNfLVVw+tOfrEq4bnaIKgQ4Pq1Prjvz9Uto4P99Q2rq+u1o/1HtBlgg4NqSvxx/5wqOx++K7C2qrb8C/OHLVap7O+u2vLj35bgM6rEX/uz0+Vyek7CmtvbNNY2XvwvvLp0kXnx9NJbp8KHVdX5b987uflqVced638Fqt3k6tn3UMXudsadFidYK8hTzpnvXXHZ98r0EWCDh1VB9+efuUxq/IOqdfRT7/vVDm6SdChg+rH0Wae/UWhW2ZfMulOdwk6dMzBJx/pHxRD98xbndNhhuKgQ8S8u+qpcUs+skaHCTp0hJh3m2E4uk7QoQPEvNsMw9ECQYdbTMy7zzAcLRB0uIXEvA2G4WiBoMMtUo9yFfPuMwxHKwQdboF6Aly9yQrdZxiOVgg6rLEa82ffeMoJcA0wDEdLBB3WWL3RivuYt8EwHC0RdFhDdQjOvczbYRiOlgg6rJG61W4Irh2G4WiNoMMaqdfNaYdhOFoj6LAG6la76+btMAxHiwQdVpmt9vYYhqNFgg6rzFZ7ewzD0SJBh1W09+C9ttobc+qtDw3D0aT1BVg1B0d8q3350nJZ/vRKL5CflPPXRHL54pVyufd7t20cK2ObNvS/t+3zNz5bxzeXrRO37k3Q3F//VaBFgg6rZNQG4ZYWLvS3qs/O/7ecm1/sB3wlK93t0xO94G8oO/fsKJO9r+tjtV/P+u899faHBVok6LAK6mqzbrcnq6vvsx8tlrnZ9/rb1PXXw3RufqH/fO317Br5yZ0TZfe+u1blgJ7jsycKtErQYRUkXzufP3mmF/APeiE/OfSIf5Ma+fqYO3aifxb+7od3DTXuc4JOwwQdVkHi6ryG/NjLb/ZWzB+XLqhvJmrYr437/Qfv623RT5VBGIajdYIOQ5a2Ou9ayK/n2rjX177OL9zsmyrDcLRu3czU4asFGJoj7z4fEfQayWMv/a38/U/vlBbV/4P7e1H/Nm+w6sr86Qd+U6BlVugwRLv37YqIeb1OfeSJV5vegq7/9tnezkIddPumFbthOBI4WAaGaO+BH5fW1cGwF2aOxlxPrj/Ha8+83l+Bnz55/RPgDMORQNBhSOpH1epgVsvqirbGb62n19dCDfsLh46U13791Z+vzggYhiOBoMOQDDpd3RU15nX4LV0dnHvup7/7MuJzbpNKCNfQYUj2P/pgadWoxPwLXwzB7X/0gX7gIYEVOgxB3W6vJ5i16B9/fHekYn6t+rNDCkGHIfjhvjavndeV6hsv/qUA7RN0GIK7H/pBaU0dDKvT7EAGQYcVqtvtLQ7E1UNjTHdDDkGHFdp+53hpTT04ptUT4IDrE3RYod0NbrfXU+CALIIOKzTd2HZ7PRXNVjvkEXRYgXr9vLWz22dH9CNqkE7QYQVau35udQ65BB1WYOc9O0pLjjvmFGIJOqzA93feUVpRV+an3z9TgEyCDivQ0pb7qX9+WIBcgg4DGtu0oYxtHCut+PdbHxQgl6DDgCan27kZi+12yCfoMKDtDQV9/qSYQzpBhwG19Pnz+ZMfFyCboMOAto1vLa2oZ7cD2QQdBrR1YnNpwfLFK+XsaUGHdIIOA9o23kbQz1qdw0gQdBhQKx9Zs90Oo0HQYQAtDcSdd3Y7jARBhwHctmlDacXSwlIB8gk6DGCsoaBfvnSlAPkEHQbQUtCXFj8pQD5BhwG0dIa7+5/DaBB0CFY/gw6MBkGHAbQy5b58abkAo0HQASCAoANAAEGHYOcXTLjDqBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAOtmpg5fLdAxR955vnTZ2O0bytjGsdKCpYULha964dDRsrTodSHL+gIdtHViS2E4vJYwGmy5A0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0CA9QU6aG72ROmyyemJsr33aMHS4oUyf/JM4f+WL14pkEbQ6aTXnnm9dNmBJx9pJujnFz7p/OsJrJwtdwAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIsL4AN+3c/EKZmz1RWnB+8UIB8q2bmTp8tQAATbPlDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgAD/Ayxvrl1PAH+tAAAAAElFTkSuQmCC",np="/piano-simulator/assets/g-BKewhe9w.png",ip="/piano-simulator/assets/h-CHUs-0PJ.png",rp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxDSURBVHgB7d1NiF1nHYDxN1qRjrSLJl0lNqspSRdxEW3qIgU/iqKiNOpuREGwBC3UhfiRjZtWBMWioCi4sHSjSKpCF9Lioln0AyrazYR2FU1WSQptMQW7qHMihVoQFdtzz33m94PhDgMD966e83/f8567Z2vz5KsDAFhrbxsAwNoTdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAi4ZgBrb9+BvePwrZvj4KF37/x+w7hx/96xcd21V//+eldeujKuvPDyuHjh+XHpwuVx7uxfx7nt8+Psk88NYL3t2do8+eoA1s6hYzeP937oPeP4p4/txHtj/L+2d6J+5qHHr8b94k7sgfUi6LBGpnB/5AsfGB/d+XkzIv7vnDn9xHjoRw8LO6wRQYc1MFfI30jYYX0IOizc8RO3ja1Tn5k15G90eifqU9iB5RJ0WKgp4F/67ufG0Q+/ZyzBdBPdfVv3m9ZhoRxbgwU6ePjAuPd331xMzCf79u8d33rwnnHo1s0BLI+gw8JMEZ/COQV0aab3dOrBr47jd942gGV5+5G97/v2ABZh2i//8g++ON7xzneMJTt6xz9XDs4+5fw6LIWgw0JMy+xf+/lXxro4fOzmq6+iDstgyR0WYHqy2z0/vmusmxN3f9zyOyyEoMMCLHXP/L+xdeqz4+ChAwNYLUGHFZum3HWN+WTj+mvHPT+5a6Xn5AFBh5Waltrv3An6upsuSE7c/bEBrI6gwwoVYv6aj3zhg86owwoJOqzI4WObV4+plZy4+xMDWA1BhxU5fuf7R810kWJKh9UQdFiBae+8Np2/xpQOqyHosAKHjnWn2GlKd8c7zE/QYQVuDy63v97RO44MYF6CDjObzm2XJ/TJoVtvHsC8BB1mNj2zve6W+AULLJGgw8x2w/Q6PWjGPjrMS9BhZgcPv3vsBjfuv2EA8xF0mNm7rrt27AY33eILW2BOgg4z23dgd0yultxhXoIOM1vnb1b7X0x38wPzEXQACBB0AAgQdOAtceXFlwcwH0GHmV156crYDXbL54SlEHSY2W6ZXC+evzyA+Qg6zOzc9oWxG7xsyR1mJegws4sXLo26aRXi3NnzA5iPoMPM/rLdD925XfAZYWkEHWa2/eRzo277qWcHMC9Bh5ldunA5fwf49pOCDnMTdFiBx04/MaqmC5azT/VXIWBpBB1W4I+P/HlU7YYtBVgiQYcV2N6ZYM9Gw3f6Rw8PYH6CDivy2OnHR82Zna2EackdmJ+gw4qceagXP9M5rI6gwwr97OsPjArTOayWoMMKVfbSp5CbzmG1BB1W7KffeGDtz6Wf/uHDpnNYMUGHFZtCeP/Jn451NS21T/cDAKsl6LAA09L7g/f+eqyb6WJkHd83FAk6LMTvf/GH8dAa7UNPMb936/78Y2xhXbz9yN73fXsAizBN6nt2Xg8fu3ks2Wsxt28OyyHosDBT1KfvEz9y+y1jicQclsmSOyzQtPx+6lP3LS6a0w1wpz75HTGHBTKhw0K9cOnF8fSjz4x3Xb8xDh4+MFZp2if/1fd+O375/d+MV/7+ygCWZ8/W5slXB7BoN+0E/as/vmvs2793zG2ayqc72d38Bssm6LBGjt9527j9xPvHoWOb4600xfvpR565+vQ3y+uwHgQd1tA0qX/08x8cR+848qZO7dN3mT/96J92pvInTeSwZgQd1twU9MO3bl496nbjzu833bJ/bFy38R//79L5y+Pc2fM7r8+P7aeevRpzEYf1JegQNAV94/prdwJ/w7/8/W8vvXz1SJxldOi5ZgA506Q9/Qg37B7OoQNAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMA1A1iMo3ccGVvf/OxYBxcvPD/u+9wPBrAMgg4LsnHdxth3YO9YC3sGsCCW3AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIOCaASzGpfOXx5nTT4x1cOXFKwNYjj1bmydfHQDAWrPkDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAH/AGXzndUxRre/AAAAAElFTkSuQmCC",sp="/piano-simulator/assets/j-CvOr1DUT.png",ap="/piano-simulator/assets/k-k4jbOtBY.png",op="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgzSURBVHgB7dixTYIBFEbRh2EDLW1xKhwA13AACxMXsNfK1kHcwphgia4AFf/lnOTNcPO91XazOwwAsGhXAwAsnqADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwHrgBK9fL7M093cPA1BloQNAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwHrgQtzcXg+cu/337+x/9gPHEnQuxtPn48C5e3v+mPf/g2N5uQNAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMBqu9kdBgBYNAsdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQAC/gAfKhZ8yVo0xQAAAABJRU5ErkJggg==",Ap="/piano-simulator/assets/m-y2XkMSDA.png",lp="/piano-simulator/assets/n-CpKnEIzx.png",cp="/piano-simulator/assets/o-D1tFsV0h.png",up="/piano-simulator/assets/p-DFBhmRaY.png",dp="/piano-simulator/assets/q-i8xLaP8H.png",fp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxdSURBVHgB7d0/zF1lHcDxA2GhiZDwZwJlgtBFBgywYIKaYHSi6mRVFiQYTXDSwEzChsHERCYQ3KRMGkiKJDSRP0kTYbAoU6FMtCSW8HbEe25pU6FvfW8p9pzv+XySm/f2tF26fPv8nuecc8neGx/4eAAAZu3SAQCYPUEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4CAywaAidr1pV3DrisvH6657qrh2uuuHnZdcfn62vh9dM0nP69d/f7pv3PlyT9zpkf2Pja89frbA5QJOnBRjfG95vqrhht2Xz/ccPOX19Eev4/XPh1mYHuCziI89PQvh6l74akXh4P73xzKrrn+6mH3bTeuw72O+M3Xr68Bn5+gswi7b79xmLoDz70y1HxltdIe/+1333bT+qcVN3xxBB24YMbV9q3f+qqAw0Ug6MDncvPtN63H6F+/5w7jc7iIBB3Y2Bjxr33zluHO791uFQ4TIejAjozhvvveu1Yj9VvWp9CBaRF04JzG1fien39ntSd+0wBMl6ADnzGuxsdx+q2rsbqQwzwIOnDaqbH6t1cfe+MwL4IOCDkECDos3BjyPb/4rpDDzAk6LNR42O3+R390+gUnwLwJOizM+Kay+1Yhd9gNWgQdFuSe1WjdPjk0CToswPggmJ8++uP1y1KAJkGHuPHQ296HfjAAbYIOUfbKYVkEHYKcYIflEXSIMWKHZRJ0CBkPvt25544BWB5Bh4DxNrSHn3nQKXZYMEGHmRsPvz20irn9cli2SwdgtsQcOEXQYabEHDiToMMMiTnwaYIOMyPmwNkIOsyImAPbEXSYkQd/d7+YA2cl6DATP3z4++4zB7Yl6DADe8b3mP/kGwPAdgQdJm580co9q6ADnIugw4SNh+DGt6YB/C+CDhN2n1egAjsk6DBR47757tW4HWAnBB0maBy12zcHNiHoMEHjw2MANiHoMDF333uXfXNgY4IOEzKO2t1vDpwPQYcJGffNrc6B83HZAEzCGPI799wxLN3Wh1vD1r9PDEff+2B4/71jJ68dPzF8tLp+8vvW+tfnsuuKy1efXeuJx7X+g8RCCDpMxJ4FnWofo/3+kQ+Gdw4dGQ4fencd78Or72Ootz4JN7AZQQe+cIdee/t0vA+9/vYq4McG4MISdOCCO3rk2HBw/5urzxsnV95W3fCFE3TgghhX4Qf3/30dcitw+P8TdOC8jSvvF558aXh536siDheZoAMbG1fjz/32z6v98H8NwDQIOrAj42r8wLOvDc8/9VercZggQQfO6dRY/fnVx+E2mC5BB7Z1YLU3vm81Wrcih+kTdOAz7JHD/Ag6cNo4Un/u8b+s98mBeRF0YG1clT/x6z8Yr8NMCTosnFU5NAg6LNj4fPXHfvZ7q3IIEHRYqPFWtPEEu1vRoEHQYYH++MifjNghRtBhQcbV+BO/enr9FjSgRdBhIcZ98nG/fNw3B3oEHRZgjPkje3/j8BuEXToAaWIOyyDoECbmsByCDlHjATgxh+UQdIgSc1gWQYeg8T5zp9lhWQQdYsanv3loDCyPoEPIqfeYA8sj6BAx7pePrz8FlknQIeKZ1b65Q3CwXIIOAeOb0zyfHZZN0GHmxlX5PvvmsHiCDjM3jtq90xwQdJixA/teNWoH1gQdZmpclRu1A6cIOszU80++5FQ7cJqgwwyNIfcAGeBMgg4ztO9xMQf+m6DDzIyr8wPPvToAnEnQYWaszoGzEXSYkXF1fnD/mwPApwk6zMj4NjUPkQHORtBhRtx3DmxH0GEmxlG7+86B7Qg6zMSBZ/82AGxH0GEG1ofhXnQYDtieoMMMjIfhAM5F0GEGXt73ygBwLoIOEzeO29963QodODdBh4kzbgd2QtBh4ozbgZ0QdJg443ZgJwQdJsy4HdgpQYcJO7j/jQFgJwQdJuzwoXcHgJ0QdJioreMn7J8DOyboMFGHDx0ZAHZK0GGi3hF0YAOCDhN16LV/DgA7JegwUUff+2AA2ClBhwkaD8QdfsvIHdg5QYcJciAO2JSgwwRtfXhiANiEoMMEeaAMsClBhwl65x+CDmxG0GGCnHAHNiXoMEHvCzqwIUGHiRlvWdv6cGsA2ISgw8Qcfe/YALApQYeJ+ei4W9aAzQk6TIx70IHzIegwMUePGLkDmxN0mJiPHIgDzoOgw8Rs2UMHzoOgw8S4ZQ04H4IOAAGCDhPzvkNxwHkQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAi4bIAFeOu1t4e5OHH8xACwqUv23vjAxwMAMGtG7gAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEPAf5Hf1OlxVbusAAAAASUVORK5CYII=",hp="/piano-simulator/assets/s-CdCs_Uk6.png",gp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA7DSURBVHgB7d1fqNf1Hcfxj8sIT2Sgx5udk2eDFI8X2mZ/LwwKo8BgeNjNQGtjUBg46mpNGbStojGGsRgjr/o32EVTiBU1Ww28UdEoLzxON4ZOd+Opi6QjYwP3+/zsbDJm4O/88fd5nccDfmghXhwvnr/35/v5fL4LNq/YeqEAAE37UgEAmifoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AARYW4Ipt2raxjHU+LRg/cKI8u2VnAbKZ0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AACwv0oe2vPlH62bLhJaUVI6PDff/znGu7nnylTJz5uEASQacvjd6xojAzBhYv8vOEecCSOwAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEWFigDx07cKL0s8HhJWVwaGlpweS5yXLq6JnCf01+er5AmgWbV2y9UIArsmnbxjLW+bRgvPPl6NktOwuQzZI7AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoEO4ZcNLCpBP0KEHk+cmC0A/EXToweSn50srBoeWFiCfoMM8IOqQT9ChB60tuV9/w6ICZBN06EFLS+7V8tXDBcgm6NCD1oI+suqmAmQTdOjBZ40FfXDYM3RIJ+jQg4kzH5eWjIwOFSCboEOPWtoYV3e52+kO2QQdenT2zCelJaN3rChALkGHHk2cbivoq25fWYBcgg49OntmorTk1g1rC5BL0KFHrW2MG1i8qDOlW3aHVIIOPWot6NWtG24pQCZBhx6dPHqmtGb92J1l4IaBAuQRdOhRndBbu9O9Lruvu29NAfIIOkxDa0fXqvWb7ipAHkGHaRg/cLy0pp5HtzkO8gg6TMOp8dOlRWPbHixAFkGHaRg/cKK0qE7p9z98bwFyCDpMQ4sb46aMbdtoxzsEEXSYpvEDfy4tqjveH/nplgJkEHSYpvGDfyqtWrdhraV3CCHoME2H9x4pLdu845tlZNVwmY88ciCJoMM01efoLV4De6nHf/VoWTbP3pe+6o6VZecffzxvv8yQR9BhBhx696PSssFOzLe/9vi8iXrdELjj1ce7E/r6MRftkEHQYQZ8sLftoFdTUU+eWOsXlu2dkG/qBH2K++1JIegwA8YPnmj2+NqlatSffmN75Ea5GvGn3/hBGe0stV+q7va//9v3FGjdNWuW3vZUAabtxmWLy823fLUkWHP36u40W2/Cmzx3vrSsPivf0Vl5qDv6r73u2v/7Z0ZGbyq/2/X7Ai0TdJgh//rHP6Oex46MDpd1963tBr3FK25ryB95bsvFC3QWf/GSeg19vZd/osGX7cAUQYcZUmOw+vaVZXA4Z2NZDWGdbOsE+5cP/9rEtP71zpeQ7/zoW92QL7uCf4tlQ4Nl3579BVq1sAAz5tAfPuxMhnlvMlu3YU33c/jdj8rbL79XjvXZHfZ1Gh+9fUV5oPMsvNcNblNvoTt2sM37+WHB5hVbLxRgRtQNVjvf/0n8rul67r6G/YO9R8rZq3QGfyri3c//bHTr1b7d+8uuJ18p0CJBhxlWl3ovPRaVrj5fr2+dGz94vPvrbOz2r1+Qlq8e7iz9D3UCvrI7Tc/Gl6bJT8+XJ+75YcSJBeYfQYcZVqf0Fw/9vMxXdXo/e/qTbujP/n2iTHR+/1knkJduOJs4fXGqr1EeuHHR579f1P3Z1d313V+/PFgGh5d0z8XP5b6E3S+8WfZ0PtAaQYdZ8MhzD3UvLKE9pnRa5WIZmAW7TXjNqqsD6+5bU6A1gg6zoC47v/Pye4U2rd/kfnfaI+gwS+qUbtm2TVNH2KAlgg6zpD6Lfeel9wttGtv2YIGWCDrMonpWu/V3pc9Xs3U0DmaLoMMsqlP6ru+7qKRV3sJGSwQdZll9taoNcm164OF7Tek0Q9BhDtQNcpbe21OPsLlPgFYIOswBS+/tulvQaYSgwxypS++vPfN6oS3LR4cdYaMJgg5zqD5Lr68gpS2OsNECQYc5Vl/P6Xl6W+oRtvqSGOhngg5zrD5Pf2bz86LemPVjroOlvwk6XAU15jsfe9HVsA2pu90dYaOfCTpcJfV94XVSF/U21CNsLpqhnwk6XEU16q89bed7K+pFM9CvBB2usn179pcd33jWpN6AOqU7wka/EnToA1PL7zbK9T9H2OhXgg59QtTb4Agb/UrQoY/UmNeon+zEnf7062deLyeP+feh/1yzZultTxWgb0yeO1/e+82+sqDUaXBloT/UL1vPP7ar7H/rUIF+JOjQp+rd7xOnPy4jq4fLwGLnn6+m8QMnOjF/sZwymdPHFmxesfVCAfrW4NDS8uhzD5VVd9hdPdfqyYM9v3irvO199jTAhA59ri7B16Nt9crYm7/2lXLtddcWZl+dyn/23V+WI/uOFmiBCR0aUqf1sW0bu9eQMjtM5bRK0KFB6zfdWca+t7EbeGbOOy+9X3a/8KZLfmiSoEPDhH1m7Nu9vxtydwDQMkGHAMJ+5eoUvu+3B7pL60JOAkGHIDXsd4/dZUf8F6ghr0vrb3c+ltZJIugQaGrzXL2m1NR+Ud21vqezrD5+8HiBRIIO4erUvu6+tWXdhrVlvqkRP/zuh51n5AdM48QTdJgnBm4Y6E7sNeypk3uN9uG9RzohP94J+RERZ14RdJinlo8Ol9HbV5RbN9xSlq8e6ga/NTXYdQqvAa9X5Z7yUhvmMUEHumrg62tBR0Zv6nyG+y7yNd4nj57pRvvk+N8u3nVvdzr8h6ADl1WDPjI61F2eHxxe2g399Z3/Nzi0pAzcuGjGg19fRvPZufPdaNerbmu469W39XWy4g1fbGEBuIzuknZnEi7lxGX/TI39wOJFndAv6v53fTPcwOe/v/zfe74T7MluvGu4ux/Pu2FaBB2Ylu7kfKYAV9mXCgDQPEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAI8G/ED7SZybtHCwAAAABJRU5ErkJggg==",pp="/piano-simulator/assets/u-eM9M6nyh.png",mp="/piano-simulator/assets/v-CeBqFpxw.png",Ep="/piano-simulator/assets/w-D_xJosKM.png",_p="/piano-simulator/assets/x-CtkWOado.png",vp="/piano-simulator/assets/y-BDY8s8lX.png",Bp="/piano-simulator/assets/z-WQAkT4aj.png",Cp="/piano-simulator/assets/%C3%A7-DEUmQJ8_.png",xp="/piano-simulator/assets/0-BCI9PscJ.png",Sp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAguSURBVHgB7dgxUQMBFEXRHyYOoKOOEHzEQDromGGwQUMH1IigQgM9XaIhMRADe/ccE3fe2+x3h/MAAIt2MwDA4gk6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABGwHVuzz721o+Pn+nffnj4G1stABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBgO7BiTw+vw3UvX49zd387wDIIOqt2/D8NQIHLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACNvvd4TwAwKJZ6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEHAB6wQTfemhKH0AAAAASUVORK5CYII=",Ip="/piano-simulator/assets/2-jm51jYrU.png",Mp="/piano-simulator/assets/3-1wIVfeWW.png",yp="/piano-simulator/assets/4-Bxi5JjZ6.png",Dp="/piano-simulator/assets/5-Cd0QVnvW.png",Tp="/piano-simulator/assets/6-6YLPnQWp.png",Qp="/piano-simulator/assets/7-D_b2H2nt.png",bp="/piano-simulator/assets/8-wl2zqMxF.png",wp="/piano-simulator/assets/9-JVeR01yW.png",Rp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAuBSURBVHgB7d0xi+XVGYDxE0klpFIrF60U5xNsmhTaKFi5rJVDtFoxIEyqiFOvpMugsJCtEjNWBrdSEpAEYhMFC6sF7YLptArYJvdsApFk1d11Zuee5/5+cJmP8HDe/7zn/GD/kZf+OQCApd0zAIDlCToABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAT8cAA74ycXfjwu/fKno+ity78ff/jtnwbsKkGHHfHkC4+P/VefHTVf/P3LcfUXvxvXP/p0wC4TdNgBF15+ejyz+dVc//CzcfWVN29EHXadoENcNeZ//M2fx/Frbw/g3wQdwoox/+ofX43jzffyD9756wD+S9AhqhjzOVq/vH9kxA43IegQVIz5PJHPk/k8oQP/T9AhZq6lzfW0Eitp8N0EHUJqMZ+j9V/97Nfjb9c/H8C3E3QIuPdH9479w4upmFtJg9sj6LC4GfPD44Px0N65UfHOG++Oa5sfcOsEHRZWi/n8h7d569vH738ygNsj6LCoBx68bxxceTET8/mdfH4vN2KHOyPosKAZ81c3J/P7N38L5q1vc8xuJQ3unKDDYkoxnwG/9vp7VtLgBAg6LKQUcytpcLIEHRZRivlcSTvaxNyIHU6OoMMCSjG3kganQ9Bhyz28d+5GzOeK2srmafzopavj+kefDuDkCTpssUrMraTB6RN02FKPnX90/PzKpeVjPlfSjl97ewCnS9BhC8072edDKyubI/b53Ol89hQ4fYIOW6YQ8zlav7x/ZMQOd5GgwxZ58oXHx/6rz46VzRP5PJlbSYO7S9BhS1x4+enxzOa3src2IXfrG5wNQYctsHrM52h9vpJmJQ3OjqDDGVs95vPWt6uvvOl7OZwxQYcztHrMraTB9hB0OCPPHV4cTz3/xFiRlTTYPoIOZ2Cupc31tBVZSYPtJOhwl60ccytpsL0EHe6SeYXrwZVLY+/8o2NFVtJguwk63AUz5ofHB+OhvXNjNXO0Ph9WmQ+sANtL0OGUrRzzuZJ2tIm5ETtsP0GHU/TAg/fdeP70/s3f1bzzxrvj2uYHrEHQ4ZSsGvN5Gj966apb32Axgg6nYNWYz+/k83u5lTRYj6DDCVs15vPWtzlm970c1iTocIJWjPkM+LXX37OSBosTdDghD++dGwdXXlwq5lbSoEPQ4QTMmM+T+VxRW8XH739y48lTI3ZoEHT4nlaMuZU06BF0+B7mnez7hxeXifkcsc9TuZU06BF0uEMz5vOhlVVYSYM2QYc7sFrM50ra8WtvD6BL0OE2XXj56fHM5reC+Q9v87nT+ewp0CbocBtWivkcrV/ePzJihx0h6HCLVor5PJHPk7mVNNgdgg63YKWYv7UJuVvfYPcIOnyHVWJuJQ12m6DDt3ju8OJ46vknxra7/uFn4+orb/peDjtM0OEbzLW0uZ627aykAZOgw02sEPP5D29zxD7vZAcQdPiaeYXrwZVLY+/8o2ObufUN+F+CDv8xY354fDAe2js3ttkcsc/HVaykAV8n6DDWiPkM+LXX37OSBtyUoLPzHnjwvhvPn96/+but5mh9jtjnqB3gZgSdnbZCzOdK2tEm5kbswLcRdHbaY+cfGX/Z4odLvvj8y/HBNQ+rAN9N0NlpXiEDKu4ZAMDyBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQAC/gVW+/BERBsE4AAAAABJRU5ErkJggg==",Op="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA32SURBVHgB7d1RqN9lHcfxx1JiZ2xBm1cbrgsXOzezOrXpxYKmomAUji6XemV5IeRdzZsgtboyHAndhIl32URpkbQU2kWegwP1Yv/T7OYcz67aulCcRIGd58CgoMBEf8/zfP6vFwwRvPjv6u3z/f5+z++a4/sfeL8AAEP7RAEAhifoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABDg2gJEe+T5E2X7jm1lKr97+qXy4lMvF2Bagg7BFg/vL/sW95YprZ3fKMD0jNwh2JG7bylTW115swDTE3QIVk/oU5otizm0IugQqsZ8955dZUqzlQsFaEPQIVSLcftsWdChFUGHUFOP26v12cUCtCHoEKjJuH1zf37lnSsFaEPQIVCLcfv6zOtq0JKgQ6AW4/ZXz7xWgHYEHcK0GLdX9ufQlqBDmDZPt9ufQ2uCDmHaPN1ufw6tCToEaTVuny3/uQBtCToEaTFur2YrfylAW4IOQVqN2+3PoT1BhxDtxu0+yAI9EHQI0Wzcbn8OXRB0CNFi3F7Zn0MfBB0CtLtMxv4ceiHoEKDduN3+HHoh6BCg2bjd/hy6IegwuFbj9mpt1f3t0AtBh8G1GrfX/fmli5cL0AdBh8G1Grevub8duiLoMLCW4/Zzv/f9c+iJoMPAWo3bK/tz6Iugw8Bajdvtz6E/gg6Davp0u/05dEfQYVAtx+3259AfQYdBtRq3V/bn0B9BhwEt3X6w2bi97s7tz6E/gg4DWrr186UV97dDnwQdBlRP6K3Mli8UoD+CDoOpMV/YsVBama04oUOPBB0G03Lcbn8O/RJ0GEzbcbvTOfRK0GEgzcft9ufQLUGHgbQct1frboiDbgk6DKTluL3uztdWBR16JegwiNbj9rWZ2+GgZ4IOg2g9bnd/O/RN0GEQLcftlf059E3QYQCtx+3259A/QYcBtB63259D/wQdBtB63G5/Dv0TdOhc63F7ZX8O/RN06FzrcfuVt9+zP4cBCDp0rvW43dfVYAyCDh07cuzm5uN297fDGAQdOrZ0W9txe7Uq6DAEQYdOLezcthn0tuN2+3MYh6BDp5Zuu6m0Zn8O4xB06FQP43b7cxiHoEOHehi3V/bnMA5Bhw71MG63P4exCDp0qIdx+5rb4WAogg6d6WXcfu7M6wUYh6BDZ3oYt1drs7cKMA5Bh870MG6v+/NVr6zBUAQdOtLLuN3+HMYj6NCRXsbt9ucwHkGHjvQwbq/sz2E8gg6duH7Pri7G7ZX9OYxH0KETBw7vLz2YLYs5jEjQoRPHHryr9GC24rpXGJGgQwf2Le4tuzdH7j3wQRYYk6BDB+6492jpxVeO3dLN+B/44K4tQHOLHQX0yLGbt/5cuni5nDp5upw99UoB+ueEDo0t3X6wm3H7v6u/6f4f31Mef/mHZd+BvQXom6BDY0u39vHu+f9Sw/7ICyfK8RPfLAs7FgrQJ0GHhupVr3W8PYI77jtaHn3h+1vvywP9EXRoqJerXj+ordP68yeG+90wDwQdGurlqtf/R50qfPfJb5cjd48xWYB5IejQSC9fVvuw7v/JPaIOHRF0aCRhbF2jfuCQd9ahB4IOjYw4bv9vHnryOx6Ugw4IOjSyePjGkuDqTh1oS9ChgXqZTNI73Tcs7i13d/JxGZhXgg4N9H6ZzIdx571Hjd6hIUGHBuoJPU0dvTulQzuCDhOrH2JJvUK13nrnelhoQ9BhYl8Mv2Xtjvu+WoDpCTpMbPHw50qyOzv6tjvME0GHCdU9c/qnSOvf0WUzMD1BhwnV/fk8+FLIpTkwEkGHCR04lD1uvyrxKX7onaDDhK7fs7vMg/qZVU+7w7QEHSa0fce2Mi8WD2VcbQujEHSY0LZPz0/Qd++dj2kE9ELQYULzdEKv97sD0xF0mFB9pWtebN9phw5TEnSY0Dw9KLYwR9MI6IGgAx+L6/d+pgDTEXQACCDoABBA0IGPxZW33yvAdAQdJnTp4uUyL94VdJiUoANAAEGHCa3NLpZ58dc5mkZADwQdJvTu21fKvJin9QL0QNBhQuurb5V5sX5+fv6u0ANBhwmtn98o82JtdX7WC9ADQYcJra1ulCvv5I/d67jdyB2mJegwofpu9vr5/JPrbPnNAkxL0GFir/7htZJutnyhANMSdJjY2VOvlHTnzrxRgGkJOkysjt1Xg0fS9X9Y5uE5AeiNoEMDp07+pqT646k/FWB6gg4NzFbejDyl14fhVlc8EActCDo0knhKT548QO8EHRpJO6XX3bnTObQj6NDQz7/3dMQDZPUSmVMnTxegHUGHhrZC+MRvy+hOPXHazXDQmKBDYy/+8qXNcfW4T4a/+NTL5exz+e/WQ+8EHTrwzGPPDnnCXZ9tbP72XxWgPUGHDtTLZh49/tOhol5/a/3NQB8EHTpxNZAjRP3qb3UjHPRD0KEjI0S9Xh7z8Nd/5CE46IygQ2dqKB/+xmNdfsSlPgD32LcedzKHDn3y4K4v/6AAXfnH3/9Zzp15fWu3fuMXPluu+9R1paUa8J899IutJ/KBPl1zfP8D7xegW7v37CrHHryrHDl2c2mhTgqeefRZp3LonKDDIBYP7d8M+9fKgcP7yxTqrvy5k6fLbOVCAfon6DCYGxb3ljvvPVqWbj9YFnYslI9SPYWf/fXy1rhfyGEsgg4DW7rtpq0/NfL7Nv98GJc2Lm8G/I2tiK/NNozWYVCCDiHqaX3f4p6ysHNhK/DbN/99Yee2//hv6kN2724Gu0Z8bXVj859/E3AIIegAEMB76AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIMC/AP/KU99312UrAAAAAElFTkSuQmCC",Np="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhJSURBVHgB7dg9Lq0BGEXh996cxik0dGrGoNGo1Go/nYSBiE4hMQE9lUmYgITBMARfJcfK80xiZe9/Z/vXXwMA/Gn/BwD48wQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAJWAyzy9PE4/L7zg5sBfmahA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0DAaoBFnh9ep2C9vTUnl8cDtAg6LPQSCfru3o6gQ5DLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAJWAyxydHo4Bevt9QA9gg4LXd1dDMCmcrkDQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMBqgEVuz+4HYFMJOiz0/vY5AJvK5Q4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAHf2HQVI7/0o+0AAAAASUVORK5CYII=",Pp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhISURBVHgB7dixLQQAGIbhn9wGotNSKywgkViCRMsgWp0F9DcEBbEAoVaJGRjBVeLee54l3nzf1tn+5fcAAGttewCAtSfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGGAld2+3w987P7ga4HcWOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAELAbIeVg+zefH1wCbQ9Ah6H75OK/P7wNsDpc7AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGyDk6OZzdvZ0peFg+DfA7QYeg04vjqRB0WI3LHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACFgOs5PrsZgD+K0GHFb08vw/Af+VyB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAgB/MDhy8GyHllwAAAABJRU5ErkJggg==",Lp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgQSURBVHgB7dhBFUEBFEXRx1KFVASggCYGhgQQwkQGZcjxz9+7xFn3bo77828AgEXbDgCweIIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAG7gZV5fm9D2+lwGVgbCx0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACdgMrc78+BqBG0Fmd9+szADUudwAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACPgDLnoMxHO0PJcAAAAASUVORK5CYII=",Up="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhZSURBVHgB7dixSZ1hGIbh13BWcYc0WSL1IWXADTJBSJcikCZd7E/nAlbiAge0E60UV9AJ/u5DODfXtcTN85ztzy/eBgA4aZ8GADh5gg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABu4HFLu/+DrDt+nAz/378H1jJQgeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAgN3AYoc/VwNsezg+Dqx2tj+/eBsA4KS53AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBgN7DYl6+fB9j28vg6x9u7gZUEneW+//o2wLbrw42gs5zLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACdgOL/dz/HmDb89PrwGqCznLH2/sB4GO53AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASDgHWrpJQIP430XAAAAAElFTkSuQmCC",Hp="/piano-simulator/assets/pontoVirgula-DQOy3glv.png",Fp="/piano-simulator/assets/til-CRmm4Lat.png",Gp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA36SURBVHgB7d0/iN/1Hcfxj61LTpIWc5kuuXQ5ucvQiFrTDhnUFKWd/NOpZ3VpxaHFTrUJhQ6NOBQqCIU6Rc1SkEtbKhiMCSSDiTSgDt5hplwvk4lQg+dof98rLtKC0OT7+Xxev8cDjuS45bbnfd7vz/f7u2V54enPCwDQta8VAKB7gg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABDg1gJ0b2b7TFk6sFBmd99e9i7uKbNzO8uuudv/87NvbNv6+dWNa1vff3Tl47J5fXPy/cdl9Z0PJ99fK+urGwXo2y3LC09/XoDuLB64oyzdu1DuObS/zC/tLv+Pq5Oor164VM6eeLusTf4F+iPo0JHhpH3w0QPl7gf2T07kd5SbYYj7youvb4V9OL0DfRB06MAQ8gefvK88NPka/j+GIexvHDtTTr58ugDtE3Ro3DBaf+r5x7f24jUMYX9u+QWndWicoEOjhpP4w7/4QXnoiftLC4Yx/InJF9Amt9yhQbsmp/HDx5+pdir/bx75+Q/Lbdu3lePPvVaA9ngOHRozjNh/97dfNxXzLzz45P3l6F8Pj7bHB746QYeGHHzku+XIq880HczhEbkjx9v+HWEaCTo0Yoj5z57/SenBEPXlI48WoB2CDg3YOwlkLzH/wsFHvleWDz9WgDYIOlQ2XIB75o9PlR4NO/UHG7mFD9NO0KGyHx95rMkLcF/VcPt9V8e/P6QQdKho2JvffWh/6dnMjm3lp52tCyCRoEMlw6l2ON0mGD7pbfjjBKhH0KGShycx73nU/mXLh3/kUTaoSNChguF0nnaiHUbvwwfIAHUIOlRw1/f73pv/L628dx6mkaBDBQ89kXmSHU7pi/cuFGB8gg4jGy6QJe3Ov2x44QwwPkGHkR18ODt49xza73IcVCDoMLLhhJ5sGLvPL80VYFyCDiMabrcnj9u/cM+hOwswLkGHEc3vm46T6+xur4KFsQk6jGh+cU+ZBktuusPoBB1GtHdpOoI+7NFdjINxCTqM6Lbt28q02DV3ewHGI+gwotnd0xO5bTum548XaIGgw4hmpihyu1yMg1EJOozIXhm4WQQdAAIIOgAEEHQACCDoMKKrV66VabH5r80CjEfQgZvi0+ufFWA8gg4jurx6pUyLq1c+LsB4BB1G9NGVq2VaTNN6AVog6DCiaYnc+upGAcYl6DCi9Q+mI3SffmJ/DmMTdBjR5bWNsnk9//a3EzqMT9BhRJuTk+v6B/kX4y6v/bMA4xJ0GNk/3nq3pPtow4U4GJugw8jOrZwv6dan6PE8aIWgw8iGsfvahUsl1bA/n4Z7AtAaQYcKVl78e0l12YU4qELQoYLVdy7FntJXL3xYgPEJOlSSekof/lgBxifoUEniKX14E55XvkIdgg4V/enZV6IukK0GX/aD1gk6VDScZl/61SslxdmVtwtQh6BDZRdPvV9OvPh6SbBmfw7VCDo0YGUS9HOdn26N26EuQYdGvPTsq+Xky6dLr3r/gwR6J+jQkONHX+t2/O5xNahL0KExw/h9uCjX0+Nfw+tePa4GdQk6NOjcifPl6PIL3TynfnYKPnAGWifo0KjhxHv08T90cVq/eOq9AtQl6NC44bT+y/t+02zYjduhDV//9s7v/LYAzVtf2ygnXz5Trm5cK7N7dpZvzu4oLfjz7/+y9bsBdTmhQ2eGE/vJY+083uZ2O7RB0KFDS/feUVowvEzGuB3aIOjQoaUDC6UFXiYD7RB06MyuuZ1ldvJV23AyH8b/QBsEHTqz2Mjp3LvboS2CDp1pZX/uo1KhLYIOnWlhfz6M231UKrRF0KEjrezPjduhPYIOHWllf27cDu0RdOhIC/tz43Zok6BDR1rYnxu3Q5sEHTrRyv7cuB3aJOjQifl9c6U243Zol6BDJ+5+4M5Sm3E7tEvQoRPz+3aX2ozboV2CDh0Y9ud7F+sG3bgd2ibo0IEW9ufG7dA2QYcOtLA/P3nsdAHaJejQgdr782HcfnltowDtEnRoXAv784tvvl+Atgk6NK6F/fk5t9uheYIOjau9Pzduhz4IOjSu9v7cuB36IOjQsBb258bt0AdBh4bV3p8bt0M/BB0atlj588/fOHamAH0QdGjY0oG6Qb946r0C9EHQoVEzO7ZV3Z+vr25sjdyBPgg6NGrpwEKp6ezK+QL0Q9ChUbX358bt0BdBh0bV3J8bt0N/BB0aVHt/btwO/RF0aFDt/blxO/RH0KFBNffnxu3QJ0GHBtXcn79x7HQB+iPo0Jja+/PVdy4VoD+CDo2puT9fvXDJuB06JejQmJr7c5+sBv0SdGjMtxb3lFqM26Ffgg4NGfbni5VG7sbt0DdBh4bsXap3Gc64Hfom6NCQuw7tL7UYt0PfBB0aUmt/btwO/RN0aETN/blxO/RP0KERNffnxu3QP0GHRtTanxu3QwZBh0bU2p8bt0MGQYcGVH3+3LgdIgg6NKDW/ty4HXIIOjSg1v7cuB1yCDo0oNrz58btEEPQoQE19ucXT71v3A5BBB0qq/X55xfffLcAOQQdKqv1+efDCR3IIehQ2b4KQR9ivnl9swA5BB0qq7I/N26HOIIOFVXbnxu3QxxBh4oWjduBG0TQoaIq+3Pjdogk6FDR2PvzzU8+M26HUIIOlSxVeZnMe8btEErQoZJF43bgBhJ0qGTs/fnWuP0t43ZIJehQyfy+uTKmYdwO5BJ0qGDYn89snyljMm6HbIIOFcwv7S5jMm6HfLcWoIpzK+fLWNZXNwqQTdChgpPHzhSAG8nIHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0CAfwPn7VIHdNVF/QAAAABJRU5ErkJggg==",zp=new au,Vp=6038889,CA={a:jg,b:Zg,c:Jg,d:$g,e:ep,f:tp,g:np,h:ip,i:rp,j:sp,k:ap,l:op,m:Ap,n:lp,o:cp,p:up,q:dp,r:fp,s:hp,t:gp,u:pp,v:mp,w:Ep,x:_p,y:vp,z:Bp,ç:Cp,0:xp,1:Sp,2:Ip,3:Mp,4:yp,5:Dp,6:Tp,7:Qp,8:bp,9:wp,agudo:Rp,aspa:Op,chave_direita:Np,chave_esquerda:Pp,hifen:Lp,igual:Up,ponto_virgula:Hp,til:Fp,virgula:Gp},kp=i=>{const e=zp.load(CA[i]);e.colorSpace=Mt;const t=Array(6).fill(new yr({color:Vp,transparent:!0,opacity:1}));return t[2]=new oa({map:e,transparent:!0}),new Dt(new xi(.8,.4,.8),t)},Pi={};Object.keys(CA).forEach(i=>{Pi[i]=kp(i)});const Wp=[-6,-4.9,-3.8,-2.7,-1.6,-.55,.55,1.6,2.7,3.8,4.9,6],Xp=-11,Yp=.4,Kp=[["a","q","z","1","aspa"],["s","w","x","2"],["c","d","e","3"],["r","f","v","4"],["g","t","b","5"],["h","y","n","6"],["u","j","m","7"],["k","i","8"],["o","l","9","virgula"],["p","ç","0"],["hifen","agudo","til","ponto_virgula"],["igual","chave_esquerda","chave_direita"]];Kp.forEach((i,e)=>{i.forEach(t=>{Pi[t]&&(Pi[t].position.x=Wp[e])})});Object.values(Pi).forEach(i=>{i.position.y=Yp,i.position.z=Xp});const on=new(window.AudioContext||window.webkitAudioContext);let An=null,vi=!1,Gn=null,Nt=null,dt=null,Ln=null,To=null,cn=null,Li=0;const Tr=document.getElementById("progressContainer"),ua=document.getElementById("progressBar");function xA(i,e="bottom-to-top"){const n=document.createElement("canvas");["left-to-right","right-to-left"].includes(e)?(n.width=256,n.height=1):(n.width=1,n.height=256);const r=n.getContext("2d");let s=0,o=0,a=0,A=0;switch(e){case"top-to-bottom":s=0,o=0,a=0,A=256;break;case"bottom-to-top":s=0,o=256,a=0,A=0;break;case"left-to-right":s=0,o=0,a=256,A=0;break;case"right-to-left":s=256,o=0,a=0,A=0;break;default:console.warn(`Direção inválida: "${e}". Usando 'bottom-to-top'.`),s=0,o=256,a=0,A=0}const l=r.createLinearGradient(s,o,a,A);l.addColorStop(0,Qo(i,0)),l.addColorStop(.7,Qo(i,.7)),r.fillStyle=l,r.fillRect(0,0,n.width,n.height);const c=new eu(n);return c.wrapS=nn,c.wrapT=nn,c.minFilter=zt,c}function Qo(i,e){const t=parseInt(i.slice(1,3),16),n=parseInt(i.slice(3,5),16),r=parseInt(i.slice(5,7),16);return`rgba(${t},${n},${r},${e})`}const qp=xA("#E323CA","top-to-bottom");xA("#E323CA","bottom-to-top");const Wt=new Zc;Wt.background=new ke(723218);const da=new Ot(85,window.innerWidth/window.innerHeight,.1,1e3);da.position.set(0,7,2);da.lookAt(0,1,0);const Ui=new qg({antialias:!0});Ui.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Ui.domElement);const jp=new Wn(13.5,20),Zp=new Wn(13.5,2),Jp=new yr({color:723218,side:yt,transparent:!0,opacity:0,shadowSide:yt,metalness:.5,roughness:.1}),$p=new yr({color:14885834,side:yt,transparent:!0,opacity:.5}),fa=new Dt(jp,Jp),Ii=new Dt(Zp,$p);fa.rotation.x=-Math.PI/2;Ii.rotation.x=-Math.PI/2;fa.position.z=-8;Ii.position.z=2;Wt.add(fa,Ii);const em=new Wn(.04,9),tm=new yr({color:14885834,map:qp,side:yt,transparent:!0,opacity:.5,depthWrite:!1}),nm=Array.from({length:13},(i,e)=>new Dt(em,tm));nm.forEach((i,e)=>{i.rotation.x=-Math.PI/2,i.position.x=[0,1.1,-1.1,2.2,-2.2,3.3,-3.3,4.4,-4.4,5.5,-5.5,6.7,-6.7][e],i.position.z=-3.5,Wt.add(i)});Wt.add(new cu(16777215,2));const SA=new lu(16119185,4);SA.position.set(0,10,0);Wt.add(SA);const Tt=[],zn=[];function S(i,e,t){zn.push({letter:i,delay:e,speed:t,spawned:!1})}function im(i,e){const t=Pi[i];if(!t)return;const n=t.clone();n.position.copy(t.position),n.userData={speed:e,letter:i,hit:!1},Wt.add(n),Tt.push(n)}function Vn(){dt=requestAnimationFrame(Vn);const i=performance.now()-Ln;if(zn.forEach(e=>{i>e.delay&&!e.spawned&&(im(e.letter,e.speed),e.spawned=!0)}),Ln&&Li>0){const e=performance.now()-Ln,t=Math.min(e/Li,1);ua.style.width=t*100+"%",t>=1&&(Tr.style.display="none")}for(let e=Tt.length-1;e>=0;e--){const t=Tt[e];if(t.position.z+=t.userData.speed,!t.userData.hit&&t.position.z>=Ii.position.z){if(t.userData.hit=!0,Gn==="autoplay"){const n=Ni[t.userData.letter];An&&n&&An.play(n)}Wt.remove(t),Tt.splice(e,1)}}Ui.render(Wt,da),Tt.length===0&&zn.every(e=>e.spawned)&&(To||(To=setTimeout(()=>{cancelAnimationFrame(dt);const e=Ui.domElement;e.style.display="none";const t=document.getElementById("fimDaCena");t&&(t.style.display="block"),telaInicial.style.display="none"},1e3)))}function ha(){dt!==null&&(cancelAnimationFrame(dt),dt=null);for(let i of Tt)Wt.remove(i);Tt.length=0,zn.length=0,Ln=null}const ga=Ui.domElement,Bi=document.getElementById("autoplayButton"),Un=document.getElementById("jogarButton"),xr=document.getElementById("elvis"),Sr=document.getElementById("bethoven"),Ir=document.getElementById("tchai"),rm=document.getElementById("resetarButton"),sm=document.getElementById("voltarButton");dt!==null&&(cancelAnimationFrame(dt),dt=null);sm.addEventListener("click",()=>{playElvis.style.display="inline",playTchai.style.display="inline",playBethoven.style.display="inline",Gn=null,Un.disabled=!1,Bi.disabled=!1,Tr.style.display="none",telaInicial.style.marginTop="10vh",Un.classList.remove("ativo"),Bi.classList.remove("ativo"),titulo.style.display="inline",resetarButton.style.display="none",voltarButton.style.display="none",pianoImg.style.display="inline",elvis.style.display="inline",bethoven.style.display="inline",tchai.style.display="inline",ga.style.display="none",telaInicial.style.display="flex"});xr.addEventListener("click",()=>{cn="elvis",Sr.classList.remove("musicaEscolhida"),Ir.classList.remove("musicaEscolhida"),xr.classList.add("musicaEscolhida"),area.style.setProperty("margin-left","350px","important")});Sr.addEventListener("click",()=>{cn="bethoven",Sr.classList.add("musicaEscolhida"),xr.classList.remove("musicaEscolhida"),Ir.classList.remove("musicaEscolhida"),area.style.setProperty("margin-left","300px","important")});Ir.addEventListener("click",()=>{cn="tchai",Ir.classList.add("musicaEscolhida"),Sr.classList.remove("musicaEscolhida"),xr.classList.remove("musicaEscolhida"),area.style.setProperty("margin-left","500px","important")});Bi.addEventListener("click",()=>{Gn!=="autoplay"&&(telaInicial.style.setProperty("margin-top","0vh","important"),telaInicial.style.setProperty("margin-top","0vh","important"),ua.style.width="0%",Tr.style.display="block",playElvis.style.display="none",playTchai.style.display="none",playBethoven.style.display="none",titulo.style.display="none",resetarButton.style.display="inline",voltarButton.style.display="inline",pianoImg.style.display="none",ga.style.display="inline",Gn="autoplay",ha(),cn==="bethoven"?(pa(),elvis.style.display="none",tchai.style.display="none"):cn=="tchai"?(Ea(),bethoven.style.display="none",elvis.style.display="none"):(ma(),bethoven.style.display="none",tchai.style.display="none"),Ln=performance.now(),Un.disabled=!1,Bi.classList.add("ativo"),Un.classList.remove("ativo"),Nt&&(document.removeEventListener("keydown",Nt),Nt=null),dt!==null&&(cancelAnimationFrame(dt),dt=null),on.state==="suspended"&&on.resume(),vi?Vn():Js.instrument(on,"acoustic_grand_piano",{gain:4}).then(i=>{An=i,vi=!0,Vn()}))});Un.addEventListener("click",()=>{Gn!=="jogar"&&(telaInicial.style.setProperty("margin-top","0vh","important"),titulo.style.display="none",resetarButton.style.display="inline",voltarButton.style.display="inline",ga.style.display="inline",ua.style.width="0%",Tr.style.display="block",playElvis.style.display="none",playTchai.style.display="none",playBethoven.style.display="none",pianoImg.style.display="none",console.log("carregado"),Gn="jogar",ha(),cn==="bethoven"?(pa(),elvis.style.display="none",tchai.style.display="none"):cn=="tchai"?(Ea(),bethoven.style.display="none",elvis.style.display="none"):(ma(),bethoven.style.display="none",tchai.style.display="none"),Ln=performance.now(),Un.disabled=!0,Bi.disabled=!1,Un.classList.add("ativo"),Bi.classList.remove("ativo"),dt!==null&&(cancelAnimationFrame(dt),dt=null),Nt&&document.removeEventListener("keydown",Nt),Nt=i=>{const e=Ni[i.key];if(!(!e||!An)){An.play(e);for(let t=Tt.length-1;t>=0;t--){const n=Tt[t],r=Ni[n.userData.letter],s=Math.abs(n.position.z-Ii.position.z)<.4;if(!n.userData.hit&&r===e&&s){n.userData.hit=!0,Wt.remove(n),Tt.splice(t,1);break}}}},document.addEventListener("keydown",Nt),on.state==="suspended"&&on.resume(),vi?Vn():Js.instrument(on,"acoustic_grand_piano",{gain:4}).then(i=>{An=i,vi=!0,Vn()}))});rm.addEventListener("click",()=>{ha(),dt!==null&&(cancelAnimationFrame(dt),dt=null),Nt&&(document.removeEventListener("keydown",Nt),Nt=null),cn==="bethoven"?pa():cn==="tchai"?Ea():ma(),Ln=performance.now(),Gn==="jogar"&&(Nt=i=>{const e=Ni[i.key];if(!(!e||!An)){An.play(e);for(let t=Tt.length-1;t>=0;t--){const n=Tt[t],r=Ni[n.userData.letter],s=Math.abs(n.position.z-Ii.position.z)<.4;if(!n.userData.hit&&r===e&&s){n.userData.hit=!0,Wt.remove(n),Tt.splice(t,1);break}}}},document.addEventListener("keydown",Nt)),on.state==="suspended"&&on.resume(),vi?Vn():Js.instrument(on,"acoustic_grand_piano",{gain:4}).then(i=>{An=i,vi=!0,Vn()})});function pa(){S("g",0,.05),S("g",752,.05),S("h",1350,.05),S("k",1976,.05),S("k",2616,.05),S("h",3175,.05),S("g",3822,.05),S("d",4352,.05),S("a",4991,.05),S("a",5527,.05),S("d",6182,.05),S("g",6775,.05),S("g",7375,.05),S("d",8367,.05),S("d",8897,.05),S("g",9831,.05),S("g",10390,.05),S("h",11065,.05),S("k",11614,.05),S("k",12254,.05),S("h",12864,.05),S("g",13454,.05),S("d",13900,.05),S("a",14549,.05),S("a",15147,.05),S("d",15590,.05),S("g",16199,.05),S("d",17e3,.05),S("a",17912,.05),S("a",18240,.05),S("d",19510,.05),S("d",20152,.05),S("g",20753,.05),S("a",21343,.05),S("d",21950,.05),S("g",22320,.05),S("h",22863,.05),S("g",23136,.05),S("a",23670,.05),S("d",24374,.05),S("g",24975,.05),S("h",25286,.05),S("g",25593,.05),S("d",26191,.05),S("a",26790,.05),S("d",27344,.05),S("a",27934,.05),S("g",29246,.05),S("g",29758,.05),S("h",30351,.05),S("k",30895,.05),S("k",31503,.05),S("h",32111,.05),S("g",32710,.05),S("d",33239,.05),S("a",33879,.05),S("a",34438,.05),S("d",35071,.05),S("g",35639,.05),S("d",36246,.05),S("a",37198,.05),S("a",37550,.05),Li=Math.max(...zn.map(i=>i.delay))+5e3}function ma(){S("a",0,.05),S("k",1832,.05),S("a",3471,.05),S("d",6292,.05),S("g",6739,.05),S("h",7048,.05),S("g",8592,.05),S("d",10358,.05),S("m",13584,.05),S("n",13835,.05),S("b",15364,.05),S("a",17246,.05),S("d",18926,.05),S("g",19498,.05),S("h",20027,.05),S("g",20658,.05),S("d",22298,.05),S("a",24050,.05),S("a",27332,.05),S("k",29049,.05),S("a",30915,.05),S("d",33666,.05),S("g",34115,.05),S("h",34357,.05),S("g",36058,.05),S("d",37799,.05),S("m",40972,.05),S("n",41262,.05),S("b",42858,.05),S("a",44573,.05),S("d",46274,.05),S("g",46863,.05),S("h",47499,.05),S("g",48074,.05),S("d",49786,.05),S("a",51483,.05),S("b",54843,.05),S("g",55585,.05),S("k",56068,.05),S("p",56487,.05),S("l",56802,.05),S("b",58326,.05),S("g",58955,.05),S("k",59481,.05),S("p",59823,.05),S("l",60097,.05),S("b",61732,.05),S("g",62398,.05),S("k",62925,.05),S("p",63303,.05),S("l",63605,.05),S("k",65129,.05),S("k",65619,.05),S("g",67740,.05),S("k",68132,.05),S("g",68413,.05),S("h",68647,.05),S("a",71979,.05),S("k",73714,.05),S("a",75495,.05),S("d",78364,.05),S("g",78722,.05),S("h",78949,.05),S("g",80650,.05),S("d",82422,.05),S("m",85546,.05),S("n",85838,.05),S("b",87504,.05),S("a",89067,.05),S("d",90927,.05),S("g",91414,.05),S("h",91923,.05),S("g",92512,.05),S("d",94347,.05),S("a",96113,.05),Li=Math.max(...zn.map(i=>i.delay))+5e3}function Ea(){S("u",0,.05),S("p",2610,.05),S("r",3022,.05),S("e",3477,.05),S("t",3948,.05),S("u",4398,.05),S("e",5966,.05),S("u",6420,.05),S("e",8006,.05),S("u",8544,.05),S("p",11274,.05),S("e",11726,.05),S("p",12177,.05),S("k",12632,.05),S("e",13120,.05),S("p",13660,.05),S("r",15871,.05),S("t",16277,.05),S("e",16726,.05),S("r",17125,.05),S("u",17791,.05),S("p",19891,.05),S("r",20310,.05),S("e",20774,.05),S("t",21229,.05),S("u",21759,.05),S("e",23254,.05),S("u",23697,.05),S("e",25095,.05),S("u",25558,.05),S("p",27196,.05),S("e",27598,.05),S("p",28073,.05),S("k",28638,.05),S("e",29163,.05),S("p",29679,.05),S("p",33898,.05),S("r",34428,.05),S("e",35325,.05),S("t",36418,.05),S("u",37402,.05),S("i",38151,.05),S("o",38526,.05),S("i",39853,.05),S("u",40411,.05),S("i",41354,.05),S("o",41818,.05),S("3",42336,.05),S("o",43719,.05),S("i",44138,.05),S("o",45152,.05),S("3",45586,.05),S("6",46122,.05),S("3",47893,.05),S("4",48221,.05),S("i",49145,.05),S("u",49669,.05),S("r",50211,.05),S("e",51255,.05),S("t",52143,.05),S("u",53161,.05),S("i",53717,.05),S("o",54169,.05),S("i",55695,.05),S("u",56104,.05),S("i",57133,.05),S("o",57589,.05),S("3",58037,.05),S("o",59494,.05),S("i",59935,.05),S("o",60885,.05),S("3",61262,.05),S("t",61737,.05),S("5",61737,.05),S("i",63232,.05),S("t",63683,.05),S("i",64532,.05),S("5",65018,.05),S("6",65521,.05),S("i",67456,.05),S("6",68459,.05),S("u",68802,.05),S("9",69299,.05),S("3",71755,.05),S("6",72276,.05),S("7",72765,.05),S("8",73296,.05),S("9",73795,.05),S("7",75166,.05),S("9",75586,.05),S("7",77142,.05),S("9",77596,.05),S("3",79211,.05),S("7",79632,.05),S("3",80034,.05),S("i",80601,.05),S("7",81085,.05),S("3",81668,.05),Li=Math.max(...zn.map(i=>i.delay))+5e3}
