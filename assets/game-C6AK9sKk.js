(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))n(A);new MutationObserver(A=>{for(const r of A)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(A){const r={};return A.integrity&&(r.integrity=A.integrity),A.referrerPolicy&&(r.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?r.credentials="include":A.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(A){if(A.ep)return;A.ep=!0;const r=e(A);fetch(A.href,r)}})();function za(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Va(i){if(i.__esModule)return i;var t=i.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var A=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(e,n,A.get?A:{enumerable:!0,get:function(){return i[n]}})}),e}var Lo={exports:{}},Uo={exports:{}};function ka(i){return i>64&&i<91?i-65:i>96&&i<123?i-71:i>47&&i<58?i+4:i===43?62:i===47?63:0}function Ya(i,t){for(var e=i.replace(/[^A-Za-z0-9\+\/]/g,""),n=e.length,A=t?Math.ceil((n*3+1>>2)/t)*t:n*3+1>>2,r=new Uint8Array(A),o,s,a=0,c=0,l=0;l<n;l++)if(s=l&3,a|=ka(e.charCodeAt(l))<<18-6*s,s===3||n-l===1){for(o=0;o<3&&c<A;o++,c++)r[c]=a>>>(16>>>o&24)&255;a=0}return r}var Wa={decode:Ya},Xa=function(i,t){return new Promise(function(e,n){var A=new XMLHttpRequest;t&&(A.responseType=t),A.open("GET",i),A.onload=function(){A.status===200?e(A.response):n(Error(A.statusText))},A.onerror=function(){n(Error("Network Error"))},A.send()})};(function(i){var t=Wa,e=Xa;function n(v){return function(M){return typeof M=="string"&&v.test(M)}}function A(v,M){return typeof v=="string"?v+M:typeof v=="function"?v(M):M}function r(v,M,I,B){var O=o(M)?s:a(M)?c:l(M)?d:u(M)?f:m(M)?C:h(M)?g:y(M)?x:D(M)?H:null,V=I||{};return O?O(v,M,V):B?Promise.resolve(B):Promise.reject("Source not valid ("+M+")")}r.fetch=e;function o(v){return v instanceof ArrayBuffer}function s(v,M,I){return new Promise(function(B,O){v.decodeAudioData(M,function(V){B(V)},function(){O("Can't decode audio data ("+M.slice(0,30)+"...)")})})}var a=n(/\.(mp3|wav|ogg)(\?.*)?$/i);function c(v,M,I){var B=A(I.from,M);return r(v,r.fetch(B,"arraybuffer"),I)}function l(v){return v&&typeof v.then=="function"}function d(v,M,I){return M.then(function(B){return r(v,B,I)})}var u=Array.isArray;function f(v,M,I){return Promise.all(M.map(function(B){return r(v,B,I,B)}))}function m(v){return v&&typeof v=="object"}function C(v,M,I){var B={},O=Object.keys(M).map(function(V){if(I.only&&I.only.indexOf(V)===-1)return null;var F=M[V];return r(v,F,I,F).then(function(q){B[V]=q})});return Promise.all(O).then(function(){return B})}var h=n(/\.json(\?.*)?$/i);function g(v,M,I){var B=A(I.from,M);return r(v,r.fetch(B,"text").then(JSON.parse),I)}var y=n(/^data:audio/);function x(v,M,I){var B=M.indexOf(",");return r(v,t.decode(M.slice(B+1)).buffer,I)}var D=n(/\.js(\?.*)?$/i);function H(v,M,I){var B=A(I.from,M);return r(v,r.fetch(B,"text").then(b),I)}function b(v){var M=v.indexOf("MIDI.Soundfont.");if(M<0)throw Error("Invalid MIDI.js Soundfont format");M=v.indexOf("=",M)+2;var I=v.lastIndexOf(",");return JSON.parse(v.slice(M,I)+"}")}i.exports&&(i.exports=r),typeof window<"u"&&(window.loadAudio=r)})(Uo);var Ka=Uo.exports,Fo={exports:{}},qa=ja;function ja(i){var t=i.createGain(),e=t._voltage=$a(i),n=Jn(e),A=Jn(e),r=Jn(e);return t._startAmount=Jn(A),t._endAmount=Jn(r),t._multiplier=Jn(n),t._multiplier.connect(t),t._startAmount.connect(t),t._endAmount.connect(t),t.value=n.gain,t.startValue=A.gain,t.endValue=r.gain,t.startValue.value=0,t.endValue.value=0,Object.defineProperties(t,Za),t}var Za={attack:{value:0,writable:!0},decay:{value:0,writable:!0},sustain:{value:1,writable:!0},release:{value:0,writable:!0},getReleaseDuration:{value:function(){return this.release}},start:{value:function(i){var t=this._multiplier.gain,e=this._startAmount.gain,n=this._endAmount.gain;this._voltage.start(i),this._decayFrom=this._decayFrom=i+this.attack,this._startedAt=i;var A=this.sustain;t.cancelScheduledValues(i),e.cancelScheduledValues(i),n.cancelScheduledValues(i),n.setValueAtTime(0,i),this.attack?(t.setValueAtTime(0,i),t.linearRampToValueAtTime(1,i+this.attack),e.setValueAtTime(1,i),e.linearRampToValueAtTime(0,i+this.attack)):(t.setValueAtTime(1,i),e.setValueAtTime(0,i)),this.decay&&t.setTargetAtTime(A,this._decayFrom,Ns(this.decay))}},stop:{value:function(i,t){t&&(i=i-this.release);var e=i+this.release;if(this.release){var n=this._multiplier.gain,A=this._startAmount.gain,r=this._endAmount.gain;n.cancelScheduledValues(i),A.cancelScheduledValues(i),r.cancelScheduledValues(i);var o=Ns(this.release);if(this.attack&&i<this._decayFrom){var s=tc(0,1,this._startedAt,this._decayFrom,i);n.linearRampToValueAtTime(s,i),A.linearRampToValueAtTime(1-s,i),A.setTargetAtTime(0,i,o)}r.setTargetAtTime(1,i,o),n.setTargetAtTime(0,i,o)}return this._voltage.stop(e),e}},onended:{get:function(){return this._voltage.onended},set:function(i){this._voltage.onended=i}}},Ja=new Float32Array([1,1]);function $a(i){var t=i.createBufferSource(),e=i.createBuffer(1,2,i.sampleRate);return e.getChannelData(0).set(Ja),t.buffer=e,t.loop=!0,t}function Jn(i){var t=i.context.createGain();return i.connect(t),t}function Ns(i){return Math.log(i+1)/Math.log(100)}function tc(i,t,e,n,A){var r=t-i,o=n-e,s=A-e,a=s/o,c=i+a*r;return c<=i&&(c=i),c>=t&&(c=t),c}var ec=qa,nc={},ic={gain:1,attack:.01,decay:.1,sustain:.9,release:.3,loop:!1,cents:0,loopStart:0,loopEnd:0};function Ac(i,t,e){var n=!1,A=0,r={},o=i.createGain();o.gain.value=1;var s=Object.assign({},ic,e),a={context:i,out:o,opts:s};return t instanceof AudioBuffer?a.buffer=t:a.buffers=t,a.start=function(d,u,f){if(a.buffer&&d!==null)return a.start(null,d,u);var m=d?a.buffers[d]:a.buffer;if(m){if(!n){console.warn("SamplePlayer not connected to any node.");return}}else{console.warn("Buffer "+d+" not found.");return}var C=f||nc;u=Math.max(i.currentTime,u||0),a.emit("start",u,d,C);var h=l(d,m,C);return h.id=c(d,h),h.env.start(u),h.source.start(u),a.emit("started",u,h.id,h),C.duration&&h.stop(u+C.duration),h},a.play=function(d,u,f){return a.start(d,u,f)},a.stop=function(d,u){var f;return u=u||Object.keys(r),u.map(function(m){return f=r[m],f?(f.stop(d),f.id):null})},a.connect=function(d){return n=!0,o.connect(d),a},a.emit=function(d,u,f,m){a.onevent&&a.onevent(d,u,f,m);var C=a["on"+d];C&&C(u,f,m)},a;function c(d,u){return u.id=A++,r[u.id]=u,u.source.onended=function(){var f=i.currentTime;u.source.disconnect(),u.env.disconnect(),u.disconnect(),a.emit("ended",f,u.id,u)},u.id}function l(d,u,f){var m=i.createGain();return m.gain.value=0,m.connect(o),m.env=sc(i,f,s),m.env.connect(m.gain),m.source=i.createBufferSource(),m.source.buffer=u,m.source.connect(m),m.source.loop=f.loop||s.loop,m.source.playbackRate.value=oc(f.cents||s.cents),m.source.loopStart=f.loopStart||s.loopStart,m.source.loopEnd=f.loopEnd||s.loopEnd,m.stop=function(C){var h=C||i.currentTime;a.emit("stop",h,d);var g=m.env.stop(h);m.source.stop(g)},m}}function Hs(i){return typeof i=="number"}var rc=["attack","decay","sustain","release"];function sc(i,t,e){var n=ec(i),A=t.adsr||e.adsr;return rc.forEach(function(r,o){A?n[r]=A[o]:n[r]=t[r]||e[r]}),n.value.value=Hs(t.gain)?t.gain:Hs(e.gain)?e.gain:1,n}function oc(i){return i?Math.pow(2,i/1200):1}var ac=Ac,cc=function(i){return i.on=function(t,e){if(arguments.length===1&&typeof t=="function")return i.on("event",t);var n="on"+t,A=i[n];return i[n]=A?lc(A,e):e,i},i};function lc(i,t){return function(e,n,A,r){i(e,n,A,r),t(e,n,A,r)}}var Go=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function gc(){return Go}var dc=[0,2,4,5,7,9,11];function zo(i,t,e){if(typeof i!="string")return null;var n=Go.exec(i);if(!n||!t&&n[4])return null;var A={letter:n[1].toUpperCase(),acc:n[2].replace(/x/g,"##")};return A.pc=A.letter+A.acc,A.step=(A.letter.charCodeAt(0)+3)%7,A.alt=A.acc[0]==="b"?-A.acc.length:A.acc.length,A.chroma=dc[A.step]+A.alt,n[3]&&(A.oct=+n[3],A.midi=A.chroma+12*(A.oct+1),A.freq=Vo(A.midi,e)),t&&(A.tonicOf=n[4]),A}function Vo(i,t){return Math.pow(2,(i-69)/12)*(t||440)}var ko={parse:zo,regex:gc,midiToFreq:Vo},uc=["letter","acc","pc","step","alt","chroma","oct","midi","freq"];uc.forEach(function(i){ko[i]=function(t){var e=zo(t);return e&&typeof e[i]<"u"?e[i]:null}});var hc=ko,fc=hc,pc=function(i){return i!==null&&i!==[]&&i>=0&&i<129},mc=function(i){return pc(i)?+i:fc.midi(i)},Ec=function(i){if(i.buffers){var t=i.opts.map,e=typeof t=="function"?t:mc,n=function(r){return r?e(r)||r:null};i.buffers=Bc(i.buffers,n);var A=i.start;i.start=function(r,o,s){var a=n(r),c=a%1;return c&&(a=Math.floor(a),s=Object.assign(s||{},{cents:Math.floor(c*100)})),A(a,o,s)}}return i};function Bc(i,t){return Object.keys(i).reduce(function(e,n){return e[t(n)]=i[n],e},{})}var Cc=Array.isArray,Qc=function(i){return i&&typeof i=="object"},Ic={},_c=function(i){return i.schedule=function(t,e){var n=i.context.currentTime,A=t<n?n:t;i.emit("schedule",A,e);var r,o,s,a;return e.map(function(c){if(c)Cc(c)?(r=c[0],o=c[1]):(r=c.time,o=c);else return null;return Qc(o)?(s=o.name||o.key||o.note||o.midi||null,a=o):(s=o,a=Ic),i.start(s,A+(r||0),a)})},i};function $i(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Yo={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,A,r){function o(c,l){if(!A[c]){if(!n[c]){var d=typeof $i=="function"&&$i;if(!l&&d)return d(c,!0);if(s)return s(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=A[c]={exports:{}};n[c][0].call(f.exports,function(m){var C=n[c][1][m];return o(C||m)},f,f.exports,e,n,A,r)}return A[c].exports}for(var s=typeof $i=="function"&&$i,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,n,A){Object.defineProperty(A,"__esModule",{value:!0}),A.default=function(r){function o(s){if(this._event=s,this._data=s.data,this.receivedTime=s.receivedTime,this._data&&this._data.length<2){console.warn("Illegal MIDI message of length",this._data.length);return}switch(this._messageCode=s.data[0]&240,this.channel=s.data[0]&15,this._messageCode){case 128:this.messageType="noteoff",this.key=s.data[1]&127,this.velocity=s.data[2]&127;break;case 144:this.messageType="noteon",this.key=s.data[1]&127,this.velocity=s.data[2]&127;break;case 160:this.messageType="keypressure",this.key=s.data[1]&127,this.pressure=s.data[2]&127;break;case 176:this.messageType="controlchange",this.controllerNumber=s.data[1]&127,this.controllerValue=s.data[2]&127,this.controllerNumber===120&&this.controllerValue===0?this.channelModeMessage="allsoundoff":this.controllerNumber===121?this.channelModeMessage="resetallcontrollers":this.controllerNumber===122?this.controllerValue===0?this.channelModeMessage="localcontroloff":this.channelModeMessage="localcontrolon":this.controllerNumber===123&&this.controllerValue===0?this.channelModeMessage="allnotesoff":this.controllerNumber===124&&this.controllerValue===0?this.channelModeMessage="omnimodeoff":this.controllerNumber===125&&this.controllerValue===0?this.channelModeMessage="omnimodeon":this.controllerNumber===126?this.channelModeMessage="monomodeon":this.controllerNumber===127&&(this.channelModeMessage="polymodeon");break;case 192:this.messageType="programchange",this.program=s.data[1];break;case 208:this.messageType="channelpressure",this.pressure=s.data[1]&127;break;case 224:this.messageType="pitchbendchange";var a=s.data[2]&127,c=s.data[1]&127;this.pitchBend=(a<<8)+c;break}}return new o(r)},n.exports=A.default},{}]},{},[1])(1)})})(Yo);var Dc=Yo.exports,vc=Dc,xc=function(i){return i.listenToMidi=function(t,e){var n={},A=e||{},r=A.gain||function(o){return o/127};return t.onmidimessage=function(o){var s=o.messageType?o:vc(o);if(s.messageType==="noteon"&&s.velocity===0&&(s.messageType="noteoff"),!(A.channel&&s.channel!==A.channel))switch(s.messageType){case"noteon":n[s.key]=i.play(s.key,0,{gain:r(s.velocity)});break;case"noteoff":n[s.key]&&(n[s.key].stop(),delete n[s.key]);break}},i},i};(function(i){var t=ac,e=cc,n=Ec,A=_c,r=xc;function o(s,a,c){return r(A(n(e(t(s,a,c)))))}i.exports&&(i.exports=o),typeof window<"u"&&(window.SamplePlayer=o)})(Fo);var Sc=Fo.exports;function Rs(i,t){return Array(t+1).join(i)}function rs(i){return typeof i=="number"}function Mc(i){return typeof i=="string"}function yc(i){return typeof i<"u"}function Wo(i,t){return Math.pow(2,(i-69)/12)*(t||440)}var Xo=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function Oc(){return Xo}var Tc=[0,2,4,5,7,9,11];function pn(i,t,e){if(typeof i!="string")return null;var n=Xo.exec(i);if(!n||!t&&n[4])return null;var A={letter:n[1].toUpperCase(),acc:n[2].replace(/x/g,"##")};A.pc=A.letter+A.acc,A.step=(A.letter.charCodeAt(0)+3)%7,A.alt=A.acc[0]==="b"?-A.acc.length:A.acc.length;var r=Tc[A.step]+A.alt;return A.chroma=r<0?12+r:r%12,n[3]&&(A.oct=+n[3],A.midi=r+12*(A.oct+1),A.freq=Wo(A.midi,e)),t&&(A.tonicOf=n[4]),A}var bc="CDEFGAB";function wc(i){return rs(i)?i<0?Rs("b",-i):Rs("#",i):""}function Nc(i){return rs(i)?""+i:""}function Ko(i,t,e){return i===null||typeof i>"u"?null:i.step?Ko(i.step,i.alt,i.oct):i<0||i>6?null:bc.charAt(i)+wc(t)+Nc(e)}function qo(i){if((rs(i)||Mc(i))&&i>=0&&i<128)return+i;var t=pn(i);return t&&yc(t.midi)?t.midi:null}function Hc(i,t){var e=qo(i);return e===null?null:Wo(e,t)}function Rc(i){return(pn(i)||{}).letter}function Pc(i){return(pn(i)||{}).acc}function Lc(i){return(pn(i)||{}).pc}function Uc(i){return(pn(i)||{}).step}function Fc(i){return(pn(i)||{}).alt}function Gc(i){return(pn(i)||{}).chroma}function zc(i){return(pn(i)||{}).oct}const Vc=Object.freeze(Object.defineProperty({__proto__:null,acc:Pc,alt:Fc,build:Ko,chroma:Gc,freq:Hc,letter:Rc,midi:qo,oct:zc,parse:pn,pc:Lc,regex:Oc,step:Uc},Symbol.toStringTag,{value:"Module"})),kc=Va(Vc);var PA,Ps;function Yc(){if(Ps)return PA;Ps=1;var i=kc;function t(A,r){if(console.warn("new Soundfont() is deprected"),console.log("Please use Soundfont.instrument() instead of new Soundfont().instrument()"),!(this instanceof t))return new t(A);this.nameToUrl=r||t.nameToUrl,this.ctx=A,this.instruments={},this.promises=[]}t.prototype.onready=function(A){console.warn("deprecated API"),console.log("Please use Promise.all(Soundfont.instrument(), Soundfont.instrument()).then() instead of new Soundfont().onready()"),Promise.all(this.promises).then(A)},t.prototype.instrument=function(A,r){console.warn("new Soundfont().instrument() is deprecated."),console.log("Please use Soundfont.instrument() instead.");var o=this.ctx;if(A=A||"default",A in this.instruments)return this.instruments[A];var s={name:A,play:n(o,r)};if(this.instruments[A]=s,A!=="default"){var a=t.instrument(o,A,r).then(function(c){return s.play=c.play,s});this.promises.push(a),s.onready=function(c){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),a.then(c)}}else s.onready=function(c){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),c()};return s};function e(A,r,o){return console.warn("Soundfont.loadBuffers is deprecate."),console.log("Use Soundfont.instrument(..) and get buffers properties from the result."),t.instrument(A,r,o).then(function(s){return s.buffers})}t.loadBuffers=e;function n(A,r){return r=r||{},function(o,s,a,c){console.warn("The oscillator player is deprecated."),console.log("Starting with version 0.9.0 you will have to wait until the soundfont is loaded to play sounds.");var l=o>0&&o<129?+o:i.midi(o),d=l?i.midiToFreq(l,440):null;if(d){a=a||.2,c=c||{};var u=c.destination||r.destination||A.destination,f=c.vcoType||r.vcoType||"sine",m=c.gain||r.gain||.4,C=A.createOscillator();C.type=f,C.frequency.value=d;var h=A.createGain();return h.gain.value=m,C.connect(h),h.connect(u),C.start(s),a>0&&C.stop(s+a),C}}}return t.noteToMidi=i.midi,PA=t,PA}(function(i){var t=Ka,e=Sc;function n(s,a,c){if(arguments.length===1)return function(m,C){return n(s,m,C)};var l=c||{},d=l.isSoundfontURL||A,u=l.nameToUrl||r,f=d(a)?a:u(a,l.soundfont,l.format);return t(s,f,{only:l.only||l.notes}).then(function(m){var C=e(s,m,l).connect(l.destination?l.destination:s.destination);return C.url=f,C.name=a,C})}function A(s){return/\.js(\?.*)?$/i.test(s)}function r(s,a,c){return c=c==="ogg"?c:"mp3",a=a==="FluidR3_GM"?a:"MusyngKite","https://gleitz.github.io/midi-js-soundfonts/"+a+"/"+s+"-"+c+".js"}var o=Yc();o.instrument=n,o.nameToUrl=r,i.exports&&(i.exports=o),typeof window<"u"&&(window.Soundfont=o)})(Lo);var Wc=Lo.exports;const ss=za(Wc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const os="172",Xc=0,Ls=1,Kc=2,jo=1,qc=2,on=3,Sn=0,xe=1,ke=2,Dn=0,fi=1,Us=2,Fs=3,Gs=4,jc=5,Un=100,Zc=101,Jc=102,$c=103,tl=104,el=200,nl=201,il=202,Al=203,fr=204,pr=205,rl=206,sl=207,ol=208,al=209,cl=210,ll=211,gl=212,dl=213,ul=214,mr=0,Er=1,Br=2,Ei=3,Cr=4,Qr=5,Ir=6,_r=7,Zo=0,hl=1,fl=2,vn=0,pl=1,ml=2,El=3,Bl=4,Cl=5,Ql=6,Il=7,Jo=300,Bi=301,Ci=302,Dr=303,vr=304,OA=306,xr=1e3,an=1001,Sr=1002,Ke=1003,_l=1004,tA=1005,We=1006,LA=1007,Gn=1008,fn=1009,$o=1010,ta=1011,Fi=1012,as=1013,Yn=1014,cn=1015,Wi=1016,cs=1017,ls=1018,Qi=1020,ea=35902,na=1021,ia=1022,Xe=1023,Aa=1024,ra=1025,pi=1026,Ii=1027,sa=1028,gs=1029,oa=1030,ds=1031,us=1033,IA=33776,_A=33777,DA=33778,vA=33779,Mr=35840,yr=35841,Or=35842,Tr=35843,br=36196,wr=37492,Nr=37496,Hr=37808,Rr=37809,Pr=37810,Lr=37811,Ur=37812,Fr=37813,Gr=37814,zr=37815,Vr=37816,kr=37817,Yr=37818,Wr=37819,Xr=37820,Kr=37821,xA=36492,qr=36494,jr=36495,aa=36283,Zr=36284,Jr=36285,$r=36286,Dl=3200,vl=3201,ca=0,xl=1,_n="",De="srgb",_i="srgb-linear",MA="linear",qt="srgb",$n=7680,zs=519,Sl=512,Ml=513,yl=514,la=515,Ol=516,Tl=517,bl=518,wl=519,Vs=35044,ks="300 es",ln=2e3,yA=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const A=this._listeners[t];if(A!==void 0){const r=A.indexOf(e);r!==-1&&A.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const A=n.slice(0);for(let r=0,o=A.length;r<o;r++)A[r].call(this,t);t.target=null}}}const fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],UA=Math.PI/180,ts=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fe[i&255]+fe[i>>8&255]+fe[i>>16&255]+fe[i>>24&255]+"-"+fe[t&255]+fe[t>>8&255]+"-"+fe[t>>16&15|64]+fe[t>>24&255]+"-"+fe[e&63|128]+fe[e>>8&255]+"-"+fe[e>>16&255]+fe[e>>24&255]+fe[n&255]+fe[n>>8&255]+fe[n>>16&255]+fe[n>>24&255]).toLowerCase()}function Ht(i,t,e){return Math.max(t,Math.min(e,i))}function Nl(i,t){return(i%t+t)%t}function FA(i,t,e){return(1-e)*i+e*t}function Ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,A=t.elements;return this.x=A[0]*e+A[3]*n+A[6],this.y=A[1]*e+A[4]*n+A[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),A=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*A+t.x,this.y=r*A+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,A,r,o,s,a,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,A,r,o,s,a,c)}set(t,e,n,A,r,o,s,a,c){const l=this.elements;return l[0]=t,l[1]=A,l[2]=s,l[3]=e,l[4]=r,l[5]=a,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,A=e.elements,r=this.elements,o=n[0],s=n[3],a=n[6],c=n[1],l=n[4],d=n[7],u=n[2],f=n[5],m=n[8],C=A[0],h=A[3],g=A[6],y=A[1],x=A[4],D=A[7],H=A[2],b=A[5],v=A[8];return r[0]=o*C+s*y+a*H,r[3]=o*h+s*x+a*b,r[6]=o*g+s*D+a*v,r[1]=c*C+l*y+d*H,r[4]=c*h+l*x+d*b,r[7]=c*g+l*D+d*v,r[2]=u*C+f*y+m*H,r[5]=u*h+f*x+m*b,r[8]=u*g+f*D+m*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],A=t[2],r=t[3],o=t[4],s=t[5],a=t[6],c=t[7],l=t[8];return e*o*l-e*s*c-n*r*l+n*s*a+A*r*c-A*o*a}invert(){const t=this.elements,e=t[0],n=t[1],A=t[2],r=t[3],o=t[4],s=t[5],a=t[6],c=t[7],l=t[8],d=l*o-s*c,u=s*a-l*r,f=c*r-o*a,m=e*d+n*u+A*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/m;return t[0]=d*C,t[1]=(A*c-l*n)*C,t[2]=(s*n-A*o)*C,t[3]=u*C,t[4]=(l*e-A*a)*C,t[5]=(A*r-s*e)*C,t[6]=f*C,t[7]=(n*a-c*e)*C,t[8]=(o*e-n*r)*C,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,A,r,o,s){const a=Math.cos(r),c=Math.sin(r);return this.set(n*a,n*c,-n*(a*o+c*s)+o+t,-A*c,A*a,-A*(-c*o+a*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(GA.makeScale(t,e)),this}rotate(t){return this.premultiply(GA.makeRotation(-t)),this}translate(t,e){return this.premultiply(GA.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let A=0;A<9;A++)if(e[A]!==n[A])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const GA=new Ot;function ga(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hl(){const i=Gi("canvas");return i.style.display="block",i}const Ys={};function ui(i){i in Ys||(Ys[i]=!0,console.warn(i))}function Rl(i,t,e){return new Promise(function(n,A){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:A();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Pl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ll(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ws=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xs=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ul(){const i={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(A,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===qt&&(A.r=gn(A.r),A.g=gn(A.g),A.b=gn(A.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(A.applyMatrix3(this.spaces[r].toXYZ),A.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===qt&&(A.r=mi(A.r),A.g=mi(A.g),A.b=mi(A.b))),A},fromWorkingColorSpace:function(A,r){return this.convert(A,this.workingColorSpace,r)},toWorkingColorSpace:function(A,r){return this.convert(A,r,this.workingColorSpace)},getPrimaries:function(A){return this.spaces[A].primaries},getTransfer:function(A){return A===_n?MA:this.spaces[A].transfer},getLuminanceCoefficients:function(A,r=this.workingColorSpace){return A.fromArray(this.spaces[r].luminanceCoefficients)},define:function(A){Object.assign(this.spaces,A)},_getMatrix:function(A,r,o){return A.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(A){return this.spaces[A].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(A=this.workingColorSpace){return this.spaces[A].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_i]:{primaries:t,whitePoint:n,transfer:MA,toXYZ:Ws,fromXYZ:Xs,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:qt,toXYZ:Ws,fromXYZ:Xs,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}const Vt=Ul();function gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ti;class Fl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=Gi("canvas")),ti.width=t.width,ti.height=t.height;const n=ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const A=n.getImageData(0,0,t.width,t.height),r=A.data;for(let o=0;o<r.length;o++)r[o]=gn(r[o]/255)*255;return n.putImageData(A,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gl=0;class da{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},A=this.data;if(A!==null){let r;if(Array.isArray(A)){r=[];for(let o=0,s=A.length;o<s;o++)A[o].isDataTexture?r.push(zA(A[o].image)):r.push(zA(A[o]))}else r=zA(A);n.url=r}return e||(t.images[this.uuid]=n),n}}function zA(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zl=0;class Ee extends Mi{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=an,A=an,r=We,o=Gn,s=Xe,a=fn,c=Ee.DEFAULT_ANISOTROPY,l=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Xi(),this.name="",this.source=new da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=A,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=a,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xr:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case Sr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xr:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case Sr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=Jo;Ee.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,A=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=A}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,A){return this.x=t,this.y=e,this.z=n,this.w=A,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,A=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*A+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*A+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*A+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*A+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,A,r;const a=t.elements,c=a[0],l=a[4],d=a[8],u=a[1],f=a[5],m=a[9],C=a[2],h=a[6],g=a[10];if(Math.abs(l-u)<.01&&Math.abs(d-C)<.01&&Math.abs(m-h)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+C)<.1&&Math.abs(m+h)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,D=(f+1)/2,H=(g+1)/2,b=(l+u)/4,v=(d+C)/4,M=(m+h)/4;return x>D&&x>H?x<.01?(n=0,A=.707106781,r=.707106781):(n=Math.sqrt(x),A=b/n,r=v/n):D>H?D<.01?(n=.707106781,A=0,r=.707106781):(A=Math.sqrt(D),n=b/A,r=M/A):H<.01?(n=.707106781,A=.707106781,r=0):(r=Math.sqrt(H),n=v/r,A=M/r),this.set(n,A,r,e),this}let y=Math.sqrt((h-m)*(h-m)+(d-C)*(d-C)+(u-l)*(u-l));return Math.abs(y)<.001&&(y=1),this.x=(h-m)/y,this.y=(d-C)/y,this.z=(u-l)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vl extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const A={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(A,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let s=0;s<o;s++)this.textures[s]=r.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let A=0,r=this.textures.length;A<r;A++)this.textures[A].image.width=t,this.textures[A].image.height=e,this.textures[A].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,A=t.textures.length;n<A;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends Vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ua extends Ee{constructor(t=null,e=1,n=1,A=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:A},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kl extends Ee{constructor(t=null,e=1,n=1,A=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:A},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(t=0,e=0,n=0,A=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=A}static slerpFlat(t,e,n,A,r,o,s){let a=n[A+0],c=n[A+1],l=n[A+2],d=n[A+3];const u=r[o+0],f=r[o+1],m=r[o+2],C=r[o+3];if(s===0){t[e+0]=a,t[e+1]=c,t[e+2]=l,t[e+3]=d;return}if(s===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=C;return}if(d!==C||a!==u||c!==f||l!==m){let h=1-s;const g=a*u+c*f+l*m+d*C,y=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const H=Math.sqrt(x),b=Math.atan2(H,g*y);h=Math.sin(h*b)/H,s=Math.sin(s*b)/H}const D=s*y;if(a=a*h+u*D,c=c*h+f*D,l=l*h+m*D,d=d*h+C*D,h===1-s){const H=1/Math.sqrt(a*a+c*c+l*l+d*d);a*=H,c*=H,l*=H,d*=H}}t[e]=a,t[e+1]=c,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,A,r,o){const s=n[A],a=n[A+1],c=n[A+2],l=n[A+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=s*m+l*d+a*f-c*u,t[e+1]=a*m+l*u+c*d-s*f,t[e+2]=c*m+l*f+s*u-a*d,t[e+3]=l*m-s*d-a*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,A){return this._x=t,this._y=e,this._z=n,this._w=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,A=t._y,r=t._z,o=t._order,s=Math.cos,a=Math.sin,c=s(n/2),l=s(A/2),d=s(r/2),u=a(n/2),f=a(A/2),m=a(r/2);switch(o){case"XYZ":this._x=u*l*d+c*f*m,this._y=c*f*d-u*l*m,this._z=c*l*m+u*f*d,this._w=c*l*d-u*f*m;break;case"YXZ":this._x=u*l*d+c*f*m,this._y=c*f*d-u*l*m,this._z=c*l*m-u*f*d,this._w=c*l*d+u*f*m;break;case"ZXY":this._x=u*l*d-c*f*m,this._y=c*f*d+u*l*m,this._z=c*l*m+u*f*d,this._w=c*l*d-u*f*m;break;case"ZYX":this._x=u*l*d-c*f*m,this._y=c*f*d+u*l*m,this._z=c*l*m-u*f*d,this._w=c*l*d+u*f*m;break;case"YZX":this._x=u*l*d+c*f*m,this._y=c*f*d+u*l*m,this._z=c*l*m-u*f*d,this._w=c*l*d-u*f*m;break;case"XZY":this._x=u*l*d-c*f*m,this._y=c*f*d-u*l*m,this._z=c*l*m+u*f*d,this._w=c*l*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,A=Math.sin(n);return this._x=t.x*A,this._y=t.y*A,this._z=t.z*A,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],A=e[4],r=e[8],o=e[1],s=e[5],a=e[9],c=e[2],l=e[6],d=e[10],u=n+s+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(l-a)*f,this._y=(r-c)*f,this._z=(o-A)*f}else if(n>s&&n>d){const f=2*Math.sqrt(1+n-s-d);this._w=(l-a)/f,this._x=.25*f,this._y=(A+o)/f,this._z=(r+c)/f}else if(s>d){const f=2*Math.sqrt(1+s-n-d);this._w=(r-c)/f,this._x=(A+o)/f,this._y=.25*f,this._z=(a+l)/f}else{const f=2*Math.sqrt(1+d-n-s);this._w=(o-A)/f,this._x=(r+c)/f,this._y=(a+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const A=Math.min(1,e/n);return this.slerp(t,A),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,A=t._y,r=t._z,o=t._w,s=e._x,a=e._y,c=e._z,l=e._w;return this._x=n*l+o*s+A*c-r*a,this._y=A*l+o*a+r*s-n*c,this._z=r*l+o*c+n*a-A*s,this._w=o*l-n*s-A*a-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,A=this._y,r=this._z,o=this._w;let s=o*t._w+n*t._x+A*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=o,this._x=n,this._y=A,this._z=r,this;const a=1-s*s;if(a<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*A+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(a),l=Math.atan2(c,s),d=Math.sin((1-e)*l)/c,u=Math.sin(e*l)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=A*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),A=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(A*Math.sin(t),A*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ks.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ks.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,A=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*A,this.y=r[1]*e+r[4]*n+r[7]*A,this.z=r[2]*e+r[5]*n+r[8]*A,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,A=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*A+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*A+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*A+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*A+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,A=this.z,r=t.x,o=t.y,s=t.z,a=t.w,c=2*(o*A-s*n),l=2*(s*e-r*A),d=2*(r*n-o*e);return this.x=e+a*c+o*d-s*l,this.y=n+a*l+s*c-r*d,this.z=A+a*d+r*l-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,A=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*A,this.y=r[1]*e+r[5]*n+r[9]*A,this.z=r[2]*e+r[6]*n+r[10]*A,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,A=t.y,r=t.z,o=e.x,s=e.y,a=e.z;return this.x=A*a-r*s,this.y=r*o-n*a,this.z=n*s-A*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return VA.copy(this).projectOnVector(t),this.sub(VA)}reflect(t){return this.sub(VA.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,A=this.z-t.z;return e*e+n*n+A*A}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const A=Math.sin(e)*t;return this.x=A*Math.sin(n),this.y=Math.cos(e)*t,this.z=A*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),A=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=A,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const VA=new U,Ks=new Ki;class qi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,s=r.count;o<s;o++)t.isMesh===!0?t.getVertexPosition(o,Ge):Ge.fromBufferAttribute(r,o),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),eA.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eA.copy(n.boundingBox)),eA.applyMatrix4(t.matrixWorld),this.union(eA)}const A=t.children;for(let r=0,o=A.length;r<o;r++)this.expandByObject(A[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),nA.subVectors(this.max,Hi),ei.subVectors(t.a,Hi),ni.subVectors(t.b,Hi),ii.subVectors(t.c,Hi),mn.subVectors(ni,ei),En.subVectors(ii,ni),Tn.subVectors(ei,ii);let e=[0,-mn.z,mn.y,0,-En.z,En.y,0,-Tn.z,Tn.y,mn.z,0,-mn.x,En.z,0,-En.x,Tn.z,0,-Tn.x,-mn.y,mn.x,0,-En.y,En.x,0,-Tn.y,Tn.x,0];return!kA(e,ei,ni,ii,nA)||(e=[1,0,0,0,1,0,0,0,1],!kA(e,ei,ni,ii,nA))?!1:(iA.crossVectors(mn,En),e=[iA.x,iA.y,iA.z],kA(e,ei,ni,ii,nA))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const en=[new U,new U,new U,new U,new U,new U,new U,new U],Ge=new U,eA=new qi,ei=new U,ni=new U,ii=new U,mn=new U,En=new U,Tn=new U,Hi=new U,nA=new U,iA=new U,bn=new U;function kA(i,t,e,n,A){for(let r=0,o=i.length-3;r<=o;r+=3){bn.fromArray(i,r);const s=A.x*Math.abs(bn.x)+A.y*Math.abs(bn.y)+A.z*Math.abs(bn.z),a=t.dot(bn),c=e.dot(bn),l=n.dot(bn);if(Math.max(-Math.max(a,c,l),Math.min(a,c,l))>s)return!1}return!0}const Yl=new qi,Ri=new U,YA=new U;class hs{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yl.setFromPoints(t).getCenter(n);let A=0;for(let r=0,o=t.length;r<o;r++)A=Math.max(A,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(A),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),A=(n-this.radius)*.5;this.center.addScaledVector(Ri,A/n),this.radius+=A}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(YA.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(YA)),this.expandByPoint(Ri.copy(t.center).sub(YA))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new U,WA=new U,AA=new U,Bn=new U,XA=new U,rA=new U,KA=new U;class Wl{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,A){WA.copy(t).add(e).multiplyScalar(.5),AA.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(WA);const r=t.distanceTo(e)*.5,o=-this.direction.dot(AA),s=Bn.dot(this.direction),a=-Bn.dot(AA),c=Bn.lengthSq(),l=Math.abs(1-o*o);let d,u,f,m;if(l>0)if(d=o*a-s,u=o*s-a,m=r*l,d>=0)if(u>=-m)if(u<=m){const C=1/l;d*=C,u*=C,f=d*(d+o*u+2*s)+u*(o*d+u+2*a)+c}else u=r,d=Math.max(0,-(o*u+s)),f=-d*d+u*(u+2*a)+c;else u=-r,d=Math.max(0,-(o*u+s)),f=-d*d+u*(u+2*a)+c;else u<=-m?(d=Math.max(0,-(-o*r+s)),u=d>0?-r:Math.min(Math.max(-r,-a),r),f=-d*d+u*(u+2*a)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-a),r),f=u*(u+2*a)+c):(d=Math.max(0,-(o*r+s)),u=d>0?r:Math.min(Math.max(-r,-a),r),f=-d*d+u*(u+2*a)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+s)),f=-d*d+u*(u+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),A&&A.copy(WA).addScaledVector(AA,u),f}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),A=nn.dot(nn)-n*n,r=t.radius*t.radius;if(A>r)return null;const o=Math.sqrt(r-A),s=n-o,a=n+o;return a<0?null:s<0?this.at(a,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,A,r,o,s,a;const c=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,A=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,A=(t.min.x-u.x)*c),l>=0?(r=(t.min.y-u.y)*l,o=(t.max.y-u.y)*l):(r=(t.max.y-u.y)*l,o=(t.min.y-u.y)*l),n>o||r>A||((r>n||isNaN(n))&&(n=r),(o<A||isNaN(A))&&(A=o),d>=0?(s=(t.min.z-u.z)*d,a=(t.max.z-u.z)*d):(s=(t.max.z-u.z)*d,a=(t.min.z-u.z)*d),n>a||s>A)||((s>n||n!==n)&&(n=s),(a<A||A!==A)&&(A=a),A<0)?null:this.at(n>=0?n:A,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,A,r){XA.subVectors(e,t),rA.subVectors(n,t),KA.crossVectors(XA,rA);let o=this.direction.dot(KA),s;if(o>0){if(A)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Bn.subVectors(this.origin,t);const a=s*this.direction.dot(rA.crossVectors(Bn,rA));if(a<0)return null;const c=s*this.direction.dot(XA.cross(Bn));if(c<0||a+c>o)return null;const l=-s*Bn.dot(KA);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,A,r,o,s,a,c,l,d,u,f,m,C,h){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,A,r,o,s,a,c,l,d,u,f,m,C,h)}set(t,e,n,A,r,o,s,a,c,l,d,u,f,m,C,h){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=A,g[1]=r,g[5]=o,g[9]=s,g[13]=a,g[2]=c,g[6]=l,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=C,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,A=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),o=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*A,e[1]=n[1]*A,e[2]=n[2]*A,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,A=t.y,r=t.z,o=Math.cos(n),s=Math.sin(n),a=Math.cos(A),c=Math.sin(A),l=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*l,f=o*d,m=s*l,C=s*d;e[0]=a*l,e[4]=-a*d,e[8]=c,e[1]=f+m*c,e[5]=u-C*c,e[9]=-s*a,e[2]=C-u*c,e[6]=m+f*c,e[10]=o*a}else if(t.order==="YXZ"){const u=a*l,f=a*d,m=c*l,C=c*d;e[0]=u+C*s,e[4]=m*s-f,e[8]=o*c,e[1]=o*d,e[5]=o*l,e[9]=-s,e[2]=f*s-m,e[6]=C+u*s,e[10]=o*a}else if(t.order==="ZXY"){const u=a*l,f=a*d,m=c*l,C=c*d;e[0]=u-C*s,e[4]=-o*d,e[8]=m+f*s,e[1]=f+m*s,e[5]=o*l,e[9]=C-u*s,e[2]=-o*c,e[6]=s,e[10]=o*a}else if(t.order==="ZYX"){const u=o*l,f=o*d,m=s*l,C=s*d;e[0]=a*l,e[4]=m*c-f,e[8]=u*c+C,e[1]=a*d,e[5]=C*c+u,e[9]=f*c-m,e[2]=-c,e[6]=s*a,e[10]=o*a}else if(t.order==="YZX"){const u=o*a,f=o*c,m=s*a,C=s*c;e[0]=a*l,e[4]=C-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*l,e[9]=-s*l,e[2]=-c*l,e[6]=f*d+m,e[10]=u-C*d}else if(t.order==="XZY"){const u=o*a,f=o*c,m=s*a,C=s*c;e[0]=a*l,e[4]=-d,e[8]=c*l,e[1]=u*d+C,e[5]=o*l,e[9]=f*d-m,e[2]=m*d-f,e[6]=s*l,e[10]=C*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xl,t,Kl)}lookAt(t,e,n){const A=this.elements;return Me.subVectors(t,e),Me.lengthSq()===0&&(Me.z=1),Me.normalize(),Cn.crossVectors(n,Me),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Me.x+=1e-4:Me.z+=1e-4,Me.normalize(),Cn.crossVectors(n,Me)),Cn.normalize(),sA.crossVectors(Me,Cn),A[0]=Cn.x,A[4]=sA.x,A[8]=Me.x,A[1]=Cn.y,A[5]=sA.y,A[9]=Me.y,A[2]=Cn.z,A[6]=sA.z,A[10]=Me.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,A=e.elements,r=this.elements,o=n[0],s=n[4],a=n[8],c=n[12],l=n[1],d=n[5],u=n[9],f=n[13],m=n[2],C=n[6],h=n[10],g=n[14],y=n[3],x=n[7],D=n[11],H=n[15],b=A[0],v=A[4],M=A[8],I=A[12],B=A[1],O=A[5],V=A[9],F=A[13],q=A[2],j=A[6],W=A[10],J=A[14],z=A[3],rt=A[7],gt=A[11],Bt=A[15];return r[0]=o*b+s*B+a*q+c*z,r[4]=o*v+s*O+a*j+c*rt,r[8]=o*M+s*V+a*W+c*gt,r[12]=o*I+s*F+a*J+c*Bt,r[1]=l*b+d*B+u*q+f*z,r[5]=l*v+d*O+u*j+f*rt,r[9]=l*M+d*V+u*W+f*gt,r[13]=l*I+d*F+u*J+f*Bt,r[2]=m*b+C*B+h*q+g*z,r[6]=m*v+C*O+h*j+g*rt,r[10]=m*M+C*V+h*W+g*gt,r[14]=m*I+C*F+h*J+g*Bt,r[3]=y*b+x*B+D*q+H*z,r[7]=y*v+x*O+D*j+H*rt,r[11]=y*M+x*V+D*W+H*gt,r[15]=y*I+x*F+D*J+H*Bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],A=t[8],r=t[12],o=t[1],s=t[5],a=t[9],c=t[13],l=t[2],d=t[6],u=t[10],f=t[14],m=t[3],C=t[7],h=t[11],g=t[15];return m*(+r*a*d-A*c*d-r*s*u+n*c*u+A*s*f-n*a*f)+C*(+e*a*f-e*c*u+r*o*u-A*o*f+A*c*l-r*a*l)+h*(+e*c*d-e*s*f-r*o*d+n*o*f+r*s*l-n*c*l)+g*(-A*s*l-e*a*d+e*s*u+A*o*d-n*o*u+n*a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const A=this.elements;return t.isVector3?(A[12]=t.x,A[13]=t.y,A[14]=t.z):(A[12]=t,A[13]=e,A[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],A=t[2],r=t[3],o=t[4],s=t[5],a=t[6],c=t[7],l=t[8],d=t[9],u=t[10],f=t[11],m=t[12],C=t[13],h=t[14],g=t[15],y=d*h*c-C*u*c+C*a*f-s*h*f-d*a*g+s*u*g,x=m*u*c-l*h*c-m*a*f+o*h*f+l*a*g-o*u*g,D=l*C*c-m*d*c+m*s*f-o*C*f-l*s*g+o*d*g,H=m*d*a-l*C*a-m*s*u+o*C*u+l*s*h-o*d*h,b=e*y+n*x+A*D+r*H;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/b;return t[0]=y*v,t[1]=(C*u*r-d*h*r-C*A*f+n*h*f+d*A*g-n*u*g)*v,t[2]=(s*h*r-C*a*r+C*A*c-n*h*c-s*A*g+n*a*g)*v,t[3]=(d*a*r-s*u*r-d*A*c+n*u*c+s*A*f-n*a*f)*v,t[4]=x*v,t[5]=(l*h*r-m*u*r+m*A*f-e*h*f-l*A*g+e*u*g)*v,t[6]=(m*a*r-o*h*r-m*A*c+e*h*c+o*A*g-e*a*g)*v,t[7]=(o*u*r-l*a*r+l*A*c-e*u*c-o*A*f+e*a*f)*v,t[8]=D*v,t[9]=(m*d*r-l*C*r-m*n*f+e*C*f+l*n*g-e*d*g)*v,t[10]=(o*C*r-m*s*r+m*n*c-e*C*c-o*n*g+e*s*g)*v,t[11]=(l*s*r-o*d*r-l*n*c+e*d*c+o*n*f-e*s*f)*v,t[12]=H*v,t[13]=(l*C*A-m*d*A+m*n*u-e*C*u-l*n*h+e*d*h)*v,t[14]=(m*s*A-o*C*A-m*n*a+e*C*a+o*n*h-e*s*h)*v,t[15]=(o*d*A-l*s*A+l*n*a-e*d*a-o*n*u+e*s*u)*v,this}scale(t){const e=this.elements,n=t.x,A=t.y,r=t.z;return e[0]*=n,e[4]*=A,e[8]*=r,e[1]*=n,e[5]*=A,e[9]*=r,e[2]*=n,e[6]*=A,e[10]*=r,e[3]*=n,e[7]*=A,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],A=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,A))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),A=Math.sin(e),r=1-n,o=t.x,s=t.y,a=t.z,c=r*o,l=r*s;return this.set(c*o+n,c*s-A*a,c*a+A*s,0,c*s+A*a,l*s+n,l*a-A*o,0,c*a-A*s,l*a+A*o,r*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,A,r,o){return this.set(1,n,r,0,t,1,o,0,e,A,1,0,0,0,0,1),this}compose(t,e,n){const A=this.elements,r=e._x,o=e._y,s=e._z,a=e._w,c=r+r,l=o+o,d=s+s,u=r*c,f=r*l,m=r*d,C=o*l,h=o*d,g=s*d,y=a*c,x=a*l,D=a*d,H=n.x,b=n.y,v=n.z;return A[0]=(1-(C+g))*H,A[1]=(f+D)*H,A[2]=(m-x)*H,A[3]=0,A[4]=(f-D)*b,A[5]=(1-(u+g))*b,A[6]=(h+y)*b,A[7]=0,A[8]=(m+x)*v,A[9]=(h-y)*v,A[10]=(1-(u+C))*v,A[11]=0,A[12]=t.x,A[13]=t.y,A[14]=t.z,A[15]=1,this}decompose(t,e,n){const A=this.elements;let r=Ai.set(A[0],A[1],A[2]).length();const o=Ai.set(A[4],A[5],A[6]).length(),s=Ai.set(A[8],A[9],A[10]).length();this.determinant()<0&&(r=-r),t.x=A[12],t.y=A[13],t.z=A[14],ze.copy(this);const c=1/r,l=1/o,d=1/s;return ze.elements[0]*=c,ze.elements[1]*=c,ze.elements[2]*=c,ze.elements[4]*=l,ze.elements[5]*=l,ze.elements[6]*=l,ze.elements[8]*=d,ze.elements[9]*=d,ze.elements[10]*=d,e.setFromRotationMatrix(ze),n.x=r,n.y=o,n.z=s,this}makePerspective(t,e,n,A,r,o,s=ln){const a=this.elements,c=2*r/(e-t),l=2*r/(n-A),d=(e+t)/(e-t),u=(n+A)/(n-A);let f,m;if(s===ln)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(s===yA)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return a[0]=c,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,A,r,o,s=ln){const a=this.elements,c=1/(e-t),l=1/(n-A),d=1/(o-r),u=(e+t)*c,f=(n+A)*l;let m,C;if(s===ln)m=(o+r)*d,C=-2*d;else if(s===yA)m=r*d,C=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=C,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let A=0;A<16;A++)if(e[A]!==n[A])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ai=new U,ze=new re,Xl=new U(0,0,0),Kl=new U(1,1,1),Cn=new U,sA=new U,Me=new U,qs=new re,js=new Ki;class $e{constructor(t=0,e=0,n=0,A=$e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=A}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,A=this._order){return this._x=t,this._y=e,this._z=n,this._order=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const A=t.elements,r=A[0],o=A[4],s=A[8],a=A[1],c=A[5],l=A[9],d=A[2],u=A[6],f=A[10];switch(e){case"XYZ":this._y=Math.asin(Ht(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qs.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qs,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return js.setFromEuler(this),this.setFromQuaternion(js,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$e.DEFAULT_ORDER="XYZ";class ha{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ql=0;const Zs=new U,ri=new Ki,An=new re,oA=new U,Pi=new U,jl=new U,Zl=new Ki,Js=new U(1,0,0),$s=new U(0,1,0),to=new U(0,0,1),eo={type:"added"},Jl={type:"removed"},si={type:"childadded",child:null},qA={type:"childremoved",child:null};class Be extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new U,e=new $e,n=new Ki,A=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:A},modelViewMatrix:{value:new re},normalMatrix:{value:new Ot}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(Js,t)}rotateY(t){return this.rotateOnAxis($s,t)}rotateZ(t){return this.rotateOnAxis(to,t)}translateOnAxis(t,e){return Zs.copy(t).applyQuaternion(this.quaternion),this.position.add(Zs.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Js,t)}translateY(t){return this.translateOnAxis($s,t)}translateZ(t){return this.translateOnAxis(to,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oA.copy(t):oA.set(t,e,n);const A=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Pi,oA,this.up):An.lookAt(oA,Pi,this.up),this.quaternion.setFromRotationMatrix(An),A&&(An.extractRotation(A.matrixWorld),ri.setFromRotationMatrix(An),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eo),si.child=t,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jl),qA.child=t,this.dispatchEvent(qA),qA.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eo),si.child=t,this.dispatchEvent(si),si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,A=this.children.length;n<A;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const A=this.children;for(let r=0,o=A.length;r<o;r++)A[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,jl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Zl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,A=e.length;n<A;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,A=e.length;n<A;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,A=e.length;n<A;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const A=this.children;for(let r=0,o=A.length;r<o;r++)A[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const A={};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.castShadow===!0&&(A.castShadow=!0),this.receiveShadow===!0&&(A.receiveShadow=!0),this.visible===!1&&(A.visible=!1),this.frustumCulled===!1&&(A.frustumCulled=!1),this.renderOrder!==0&&(A.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(A.userData=this.userData),A.layers=this.layers.mask,A.matrix=this.matrix.toArray(),A.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(A.matrixAutoUpdate=!1),this.isInstancedMesh&&(A.type="InstancedMesh",A.count=this.count,A.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(A.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(A.type="BatchedMesh",A.perObjectFrustumCulled=this.perObjectFrustumCulled,A.sortObjects=this.sortObjects,A.drawRanges=this._drawRanges,A.reservedRanges=this._reservedRanges,A.visibility=this._visibility,A.active=this._active,A.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),A.maxInstanceCount=this._maxInstanceCount,A.maxVertexCount=this._maxVertexCount,A.maxIndexCount=this._maxIndexCount,A.geometryInitialized=this._geometryInitialized,A.geometryCount=this._geometryCount,A.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(A.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(A.boundingSphere={center:A.boundingSphere.center.toArray(),radius:A.boundingSphere.radius}),this.boundingBox!==null&&(A.boundingBox={min:A.boundingBox.min.toArray(),max:A.boundingBox.max.toArray()}));function r(s,a){return s[a.uuid]===void 0&&(s[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?A.background=this.background.toJSON():this.background.isTexture&&(A.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(A.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){A.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const a=s.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const d=a[c];r(t.shapes,d)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(A.bindMode=this.bindMode,A.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),A.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let a=0,c=this.material.length;a<c;a++)s.push(r(t.materials,this.material[a]));A.material=s}else A.material=r(t.materials,this.material);if(this.children.length>0){A.children=[];for(let s=0;s<this.children.length;s++)A.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){A.animations=[];for(let s=0;s<this.animations.length;s++){const a=this.animations[s];A.animations.push(r(t.animations,a))}}if(e){const s=o(t.geometries),a=o(t.materials),c=o(t.textures),l=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);s.length>0&&(n.geometries=s),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=A,n;function o(s){const a=[];for(const c in s){const l=s[c];delete l.metadata,a.push(l)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const A=t.children[n];this.add(A.clone())}return this}}Be.DEFAULT_UP=new U(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new U,rn=new U,jA=new U,sn=new U,oi=new U,ai=new U,no=new U,ZA=new U,JA=new U,$A=new U,tr=new Ae,er=new Ae,nr=new Ae;class Ye{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,A){A.subVectors(n,e),Ve.subVectors(t,e),A.cross(Ve);const r=A.lengthSq();return r>0?A.multiplyScalar(1/Math.sqrt(r)):A.set(0,0,0)}static getBarycoord(t,e,n,A,r){Ve.subVectors(A,e),rn.subVectors(n,e),jA.subVectors(t,e);const o=Ve.dot(Ve),s=Ve.dot(rn),a=Ve.dot(jA),c=rn.dot(rn),l=rn.dot(jA),d=o*c-s*s;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*a-s*l)*u,m=(o*l-s*a)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,A){return this.getBarycoord(t,e,n,A,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(t,e,n,A,r,o,s,a){return this.getBarycoord(t,e,n,A,sn)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,sn.x),a.addScaledVector(o,sn.y),a.addScaledVector(s,sn.z),a)}static getInterpolatedAttribute(t,e,n,A,r,o){return tr.setScalar(0),er.setScalar(0),nr.setScalar(0),tr.fromBufferAttribute(t,e),er.fromBufferAttribute(t,n),nr.fromBufferAttribute(t,A),o.setScalar(0),o.addScaledVector(tr,r.x),o.addScaledVector(er,r.y),o.addScaledVector(nr,r.z),o}static isFrontFacing(t,e,n,A){return Ve.subVectors(n,e),rn.subVectors(t,e),Ve.cross(rn).dot(A)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,A){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[A]),this}setFromAttributeAndIndices(t,e,n,A){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,A),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ve.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,A,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,A,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,A=this.b,r=this.c;let o,s;oi.subVectors(A,n),ai.subVectors(r,n),ZA.subVectors(t,n);const a=oi.dot(ZA),c=ai.dot(ZA);if(a<=0&&c<=0)return e.copy(n);JA.subVectors(t,A);const l=oi.dot(JA),d=ai.dot(JA);if(l>=0&&d<=l)return e.copy(A);const u=a*d-l*c;if(u<=0&&a>=0&&l<=0)return o=a/(a-l),e.copy(n).addScaledVector(oi,o);$A.subVectors(t,r);const f=oi.dot($A),m=ai.dot($A);if(m>=0&&f<=m)return e.copy(r);const C=f*c-a*m;if(C<=0&&c>=0&&m<=0)return s=c/(c-m),e.copy(n).addScaledVector(ai,s);const h=l*m-f*d;if(h<=0&&d-l>=0&&f-m>=0)return no.subVectors(r,A),s=(d-l)/(d-l+(f-m)),e.copy(A).addScaledVector(no,s);const g=1/(h+C+u);return o=C*g,s=u*g,e.copy(n).addScaledVector(oi,o).addScaledVector(ai,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},aA={h:0,s:0,l:0};function ir(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const A=t;A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,A=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.toWorkingColorSpace(this,A),this}setHSL(t,e,n,A=Vt.workingColorSpace){if(t=Nl(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ir(o,r,t+1/3),this.g=ir(o,r,t),this.b=ir(o,r,t-1/3)}return Vt.toWorkingColorSpace(this,A),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let A;if(A=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=A[1],s=A[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(A=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=A[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=fa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Vt.fromWorkingColorSpace(pe.copy(this),t),Math.round(Ht(pe.r*255,0,255))*65536+Math.round(Ht(pe.g*255,0,255))*256+Math.round(Ht(pe.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.fromWorkingColorSpace(pe.copy(this),e);const n=pe.r,A=pe.g,r=pe.b,o=Math.max(n,A,r),s=Math.min(n,A,r);let a,c;const l=(s+o)/2;if(s===o)a=0,c=0;else{const d=o-s;switch(c=l<=.5?d/(o+s):d/(2-o-s),o){case n:a=(A-r)/d+(A<r?6:0);break;case A:a=(r-n)/d+2;break;case r:a=(n-A)/d+4;break}a/=6}return t.h=a,t.s=c,t.l=l,t}getRGB(t,e=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(pe.copy(this),e),t.r=pe.r,t.g=pe.g,t.b=pe.b,t}getStyle(t=De){Vt.fromWorkingColorSpace(pe.copy(this),t);const e=pe.r,n=pe.g,A=pe.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${A.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(A*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(aA);const n=FA(Qn.h,aA.h,e),A=FA(Qn.s,aA.s,e),r=FA(Qn.l,aA.l,e);return this.setHSL(n,A,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,A=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*A,this.g=r[1]*e+r[4]*n+r[7]*A,this.b=r[2]*e+r[5]*n+r[8]*A,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pe=new kt;kt.NAMES=fa;let $l=0;class ji extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=fi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fr,this.blendDst=pr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const A=this[e];if(A===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}A&&A.isColor?A.set(n):A&&A.isVector3&&n&&n.isVector3?A.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fr&&(n.blendSrc=this.blendSrc),this.blendDst!==pr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zs&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function A(r){const o=[];for(const s in r){const a=r[s];delete a.metadata,o.push(a)}return o}if(e){const r=A(t.textures),o=A(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const A=e.length;n=new Array(A);for(let r=0;r!==A;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kn extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new U,cA=new Xt;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vs,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let A=0,r=this.itemSize;A<r;A++)this.array[t+A]=e.array[n+A];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cA.fromBufferAttribute(this,e),cA.applyMatrix3(t),this.setXY(e,cA.x,cA.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,A){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),A=_e(A,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=A,this}setXYZW(t,e,n,A,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),A=_e(A,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=A,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vs&&(t.usage=this.usage),t}}class pa extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ma extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class zn extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let tg=0;const He=new re,Ar=new Be,ci=new U,ye=new qi,Li=new qi,ge=new U;class qn extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ga(t)?ma:pa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const A=this.attributes.tangent;return A!==void 0&&(A.transformDirection(t),A.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return Ar.lookAt(t),Ar.updateMatrix(),this.applyMatrix4(Ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let A=0,r=t.length;A<r;A++){const o=t[A];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zn(n,3))}else{const n=Math.min(t.length,e.count);for(let A=0;A<n;A++){const r=t[A];e.setXYZ(A,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,A=e.length;n<A;n++){const r=e[n];ye.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,ye.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,ye.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(ye.min),this.boundingBox.expandByPoint(ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const s=e[r];Li.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(ye.min,Li.min),ye.expandByPoint(ge),ge.addVectors(ye.max,Li.max),ye.expandByPoint(ge)):(ye.expandByPoint(Li.min),ye.expandByPoint(Li.max))}ye.getCenter(n);let A=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),A=Math.max(A,n.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const s=e[r],a=this.morphTargetsRelative;for(let c=0,l=s.count;c<l;c++)ge.fromBufferAttribute(s,c),a&&(ci.fromBufferAttribute(t,c),ge.add(ci)),A=Math.max(A,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(A),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,A=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),s=[],a=[];for(let M=0;M<n.count;M++)s[M]=new U,a[M]=new U;const c=new U,l=new U,d=new U,u=new Xt,f=new Xt,m=new Xt,C=new U,h=new U;function g(M,I,B){c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,I),d.fromBufferAttribute(n,B),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,B),l.sub(c),d.sub(c),f.sub(u),m.sub(u);const O=1/(f.x*m.y-m.x*f.y);isFinite(O)&&(C.copy(l).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(O),h.copy(d).multiplyScalar(f.x).addScaledVector(l,-m.x).multiplyScalar(O),s[M].add(C),s[I].add(C),s[B].add(C),a[M].add(h),a[I].add(h),a[B].add(h))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let M=0,I=y.length;M<I;++M){const B=y[M],O=B.start,V=B.count;for(let F=O,q=O+V;F<q;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new U,D=new U,H=new U,b=new U;function v(M){H.fromBufferAttribute(A,M),b.copy(H);const I=s[M];x.copy(I),x.sub(H.multiplyScalar(H.dot(I))).normalize(),D.crossVectors(b,I);const O=D.dot(a[M])<0?-1:1;o.setXYZW(M,x.x,x.y,x.z,O)}for(let M=0,I=y.length;M<I;++M){const B=y[M],O=B.start,V=B.count;for(let F=O,q=O+V;F<q;F+=3)v(t.getX(F+0)),v(t.getX(F+1)),v(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const A=new U,r=new U,o=new U,s=new U,a=new U,c=new U,l=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),C=t.getX(u+1),h=t.getX(u+2);A.fromBufferAttribute(e,m),r.fromBufferAttribute(e,C),o.fromBufferAttribute(e,h),l.subVectors(o,r),d.subVectors(A,r),l.cross(d),s.fromBufferAttribute(n,m),a.fromBufferAttribute(n,C),c.fromBufferAttribute(n,h),s.add(l),a.add(l),c.add(l),n.setXYZ(m,s.x,s.y,s.z),n.setXYZ(C,a.x,a.y,a.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)A.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),l.subVectors(o,r),d.subVectors(A,r),l.cross(d),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(s,a){const c=s.array,l=s.itemSize,d=s.normalized,u=new c.constructor(a.length*l);let f=0,m=0;for(let C=0,h=a.length;C<h;C++){s.isInterleavedBufferAttribute?f=a[C]*s.data.stride+s.offset:f=a[C]*l;for(let g=0;g<l;g++)u[m++]=c[f++]}return new je(u,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qn,n=this.index.array,A=this.attributes;for(const s in A){const a=A[s],c=t(a,n);e.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const a=[],c=r[s];for(let l=0,d=c.length;l<d;l++){const u=c[l],f=t(u,n);a.push(f)}e.morphAttributes[s]=a}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,a=o.length;s<a;s++){const c=o[s];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const c=n[a];t.data.attributes[a]=c.toJSON(t.data)}const A={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];l.push(f.toJSON(t.data))}l.length>0&&(A[a]=l,r=!0)}r&&(t.data.morphAttributes=A,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const A=t.attributes;for(const c in A){const l=A[c];this.setAttribute(c,l.clone(e))}const r=t.morphAttributes;for(const c in r){const l=[],d=r[c];for(let u=0,f=d.length;u<f;u++)l.push(d[u].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,l=o.length;c<l;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const io=new re,wn=new Wl,lA=new hs,Ao=new U,gA=new U,dA=new U,uA=new U,rr=new U,hA=new U,ro=new U,fA=new U;class Te extends Be{constructor(t=new qn,e=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const A=e[n[0]];if(A!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=A.length;r<o;r++){const s=A[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){const n=this.geometry,A=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(A,t);const s=this.morphTargetInfluences;if(r&&s){hA.set(0,0,0);for(let a=0,c=r.length;a<c;a++){const l=s[a],d=r[a];l!==0&&(rr.fromBufferAttribute(d,t),o?hA.addScaledVector(rr,l):hA.addScaledVector(rr.sub(e),l))}e.add(hA)}return e}raycast(t,e){const n=this.geometry,A=this.material,r=this.matrixWorld;A!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lA.copy(n.boundingSphere),lA.applyMatrix4(r),wn.copy(t.ray).recast(t.near),!(lA.containsPoint(wn.origin)===!1&&(wn.intersectSphere(lA,Ao)===null||wn.origin.distanceToSquared(Ao)>(t.far-t.near)**2))&&(io.copy(r).invert(),wn.copy(t.ray).applyMatrix4(io),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,n){let A;const r=this.geometry,o=this.material,s=r.index,a=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(s!==null)if(Array.isArray(o))for(let m=0,C=u.length;m<C;m++){const h=u[m],g=o[h.materialIndex],y=Math.max(h.start,f.start),x=Math.min(s.count,Math.min(h.start+h.count,f.start+f.count));for(let D=y,H=x;D<H;D+=3){const b=s.getX(D),v=s.getX(D+1),M=s.getX(D+2);A=pA(this,g,t,n,c,l,d,b,v,M),A&&(A.faceIndex=Math.floor(D/3),A.face.materialIndex=h.materialIndex,e.push(A))}}else{const m=Math.max(0,f.start),C=Math.min(s.count,f.start+f.count);for(let h=m,g=C;h<g;h+=3){const y=s.getX(h),x=s.getX(h+1),D=s.getX(h+2);A=pA(this,o,t,n,c,l,d,y,x,D),A&&(A.faceIndex=Math.floor(h/3),e.push(A))}}else if(a!==void 0)if(Array.isArray(o))for(let m=0,C=u.length;m<C;m++){const h=u[m],g=o[h.materialIndex],y=Math.max(h.start,f.start),x=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let D=y,H=x;D<H;D+=3){const b=D,v=D+1,M=D+2;A=pA(this,g,t,n,c,l,d,b,v,M),A&&(A.faceIndex=Math.floor(D/3),A.face.materialIndex=h.materialIndex,e.push(A))}}else{const m=Math.max(0,f.start),C=Math.min(a.count,f.start+f.count);for(let h=m,g=C;h<g;h+=3){const y=h,x=h+1,D=h+2;A=pA(this,o,t,n,c,l,d,y,x,D),A&&(A.faceIndex=Math.floor(h/3),e.push(A))}}}}function eg(i,t,e,n,A,r,o,s){let a;if(t.side===xe?a=n.intersectTriangle(o,r,A,!0,s):a=n.intersectTriangle(A,r,o,t.side===Sn,s),a===null)return null;fA.copy(s),fA.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(fA);return c<e.near||c>e.far?null:{distance:c,point:fA.clone(),object:i}}function pA(i,t,e,n,A,r,o,s,a,c){i.getVertexPosition(s,gA),i.getVertexPosition(a,dA),i.getVertexPosition(c,uA);const l=eg(i,t,e,n,gA,dA,uA,ro);if(l){const d=new U;Ye.getBarycoord(ro,gA,dA,uA,d),A&&(l.uv=Ye.getInterpolatedAttribute(A,s,a,c,d,new Xt)),r&&(l.uv1=Ye.getInterpolatedAttribute(r,s,a,c,d,new Xt)),o&&(l.normal=Ye.getInterpolatedAttribute(o,s,a,c,d,new U),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a:s,b:a,c,normal:new U,materialIndex:0};Ye.getNormal(gA,dA,uA,u.normal),l.face=u,l.barycoord=d}return l}class yi extends qn{constructor(t=1,e=1,n=1,A=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:A,heightSegments:r,depthSegments:o};const s=this;A=Math.floor(A),r=Math.floor(r),o=Math.floor(o);const a=[],c=[],l=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,A,o,2),m("x","z","y",1,-1,t,n,-e,A,o,3),m("x","y","z",1,-1,t,e,n,A,r,4),m("x","y","z",-1,-1,t,e,-n,A,r,5),this.setIndex(a),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(l,3)),this.setAttribute("uv",new zn(d,2));function m(C,h,g,y,x,D,H,b,v,M,I){const B=D/v,O=H/M,V=D/2,F=H/2,q=b/2,j=v+1,W=M+1;let J=0,z=0;const rt=new U;for(let gt=0;gt<W;gt++){const Bt=gt*O-F;for(let wt=0;wt<j;wt++){const jt=wt*B-V;rt[C]=jt*y,rt[h]=Bt*x,rt[g]=q,c.push(rt.x,rt.y,rt.z),rt[C]=0,rt[h]=0,rt[g]=b>0?1:-1,l.push(rt.x,rt.y,rt.z),d.push(wt/v),d.push(1-gt/M),J+=1}}for(let gt=0;gt<M;gt++)for(let Bt=0;Bt<v;Bt++){const wt=u+Bt+j*gt,jt=u+Bt+j*(gt+1),Y=u+(Bt+1)+j*(gt+1),et=u+(Bt+1)+j*gt;a.push(wt,jt,et),a.push(jt,Y,et),z+=6}s.addGroup(f,z,I),f+=z,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Di(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const A=i[e][n];A&&(A.isColor||A.isMatrix3||A.isMatrix4||A.isVector2||A.isVector3||A.isVector4||A.isTexture||A.isQuaternion)?A.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=A.clone():Array.isArray(A)?t[e][n]=A.slice():t[e][n]=A}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=Di(i[e]);for(const A in n)t[A]=n[A]}return t}function ng(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ea(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}const ig={clone:Di,merge:Qe};var Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=ng(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const A in this.uniforms){const o=this.uniforms[A].value;o&&o.isTexture?e.uniforms[A]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[A]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[A]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[A]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[A]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[A]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[A]={type:"m4",value:o.toArray()}:e.uniforms[A]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const A in this.extensions)this.extensions[A]===!0&&(n[A]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ba extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new U,so=new Xt,oo=new Xt;class Re extends Ba{constructor(t=50,e=1,n=.1,A=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=A,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(UA*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(UA*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,so,oo),e.subVectors(oo,so)}setViewOffset(t,e,n,A,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=A,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(UA*.5*this.fov)/this.zoom,n=2*e,A=this.aspect*n,r=-.5*A;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,c=o.fullHeight;r+=o.offsetX*A/a,e-=o.offsetY*n/c,A*=o.width/a,n*=o.height/c}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+A,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,gi=1;class sg extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const A=new Re(li,gi,t,e);A.layers=this.layers,this.add(A);const r=new Re(li,gi,t,e);r.layers=this.layers,this.add(r);const o=new Re(li,gi,t,e);o.layers=this.layers,this.add(o);const s=new Re(li,gi,t,e);s.layers=this.layers,this.add(s);const a=new Re(li,gi,t,e);a.layers=this.layers,this.add(a);const c=new Re(li,gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,A,r,o,s,a]=e;for(const c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),A.up.set(0,1,0),A.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===yA)n.up.set(0,-1,0),n.lookAt(-1,0,0),A.up.set(0,-1,0),A.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:A}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,a,c,l]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,A),t.render(e,r),t.setRenderTarget(n,1,A),t.render(e,o),t.setRenderTarget(n,2,A),t.render(e,s),t.setRenderTarget(n,3,A),t.render(e,a),t.setRenderTarget(n,4,A),t.render(e,c),n.texture.generateMipmaps=C,t.setRenderTarget(n,5,A),t.render(e,l),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ca extends Ee{constructor(t,e,n,A,r,o,s,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:Bi,super(t,e,n,A,r,o,s,a,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class og extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},A=[n,n,n,n,n,n];this.texture=new Ca(A,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},A=new yi(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xe,blending:Dn});r.uniforms.tEquirect.value=e;const o=new Te(A,r),s=e.minFilter;return e.minFilter===Gn&&(e.minFilter=We),new sg(1,10,this).update(t,o),e.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,A){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,A);t.setRenderTarget(r)}}class ag extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const sr=new U,cg=new U,lg=new Ot;class Pn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,A){return this.normal.set(t,e,n),this.constant=A,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const A=sr.subVectors(n,e).cross(cg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(A,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sr),A=this.normal.dot(n);if(A===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/A;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||lg.getNormalMatrix(t),A=this.coplanarPoint(sr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-A.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new hs,mA=new U;class fs{constructor(t=new Pn,e=new Pn,n=new Pn,A=new Pn,r=new Pn,o=new Pn){this.planes=[t,e,n,A,r,o]}set(t,e,n,A,r,o){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(A),s[4].copy(r),s[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln){const n=this.planes,A=t.elements,r=A[0],o=A[1],s=A[2],a=A[3],c=A[4],l=A[5],d=A[6],u=A[7],f=A[8],m=A[9],C=A[10],h=A[11],g=A[12],y=A[13],x=A[14],D=A[15];if(n[0].setComponents(a-r,u-c,h-f,D-g).normalize(),n[1].setComponents(a+r,u+c,h+f,D+g).normalize(),n[2].setComponents(a+o,u+l,h+m,D+y).normalize(),n[3].setComponents(a-o,u-l,h-m,D-y).normalize(),n[4].setComponents(a-s,u-d,h-C,D-x).normalize(),e===ln)n[5].setComponents(a+s,u+d,h+C,D+x).normalize();else if(e===yA)n[5].setComponents(s,d,C,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){const e=this.planes,n=t.center,A=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<A)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const A=e[n];if(mA.x=A.normal.x>0?t.max.x:t.min.x,mA.y=A.normal.y>0?t.max.y:t.min.y,mA.z=A.normal.z>0?t.max.z:t.min.z,A.distanceToPoint(mA)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class EA extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}class gg extends Ee{constructor(t,e,n,A,r,o,s,a,c){super(t,e,n,A,r,o,s,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qa extends Ee{constructor(t,e,n,A,r,o,s,a,c,l=pi){if(l!==pi&&l!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===pi&&(n=Yn),n===void 0&&l===Ii&&(n=Qi),super(null,A,r,o,s,a,l,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:Ke,this.minFilter=a!==void 0?a:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Oi extends qn{constructor(t=1,e=1,n=1,A=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:A};const r=t/2,o=e/2,s=Math.floor(n),a=Math.floor(A),c=s+1,l=a+1,d=t/s,u=e/a,f=[],m=[],C=[],h=[];for(let g=0;g<l;g++){const y=g*u-o;for(let x=0;x<c;x++){const D=x*d-r;m.push(D,-y,0),C.push(0,0,1),h.push(x/s),h.push(1-g/a)}}for(let g=0;g<a;g++)for(let y=0;y<s;y++){const x=y+c*g,D=y+c*(g+1),H=y+1+c*(g+1),b=y+1+c*g;f.push(x,D,b),f.push(D,H,b)}this.setIndex(f),this.setAttribute("position",new zn(m,3)),this.setAttribute("normal",new zn(C,3)),this.setAttribute("uv",new zn(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.widthSegments,t.heightSegments)}}class jn extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dg extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ug extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ao={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class hg{constructor(t,e,n){const A=this;let r=!1,o=0,s=0,a;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){s++,r===!1&&A.onStart!==void 0&&A.onStart(l,o,s),r=!0},this.itemEnd=function(l){o++,A.onProgress!==void 0&&A.onProgress(l,o,s),o===s&&(r=!1,A.onLoad!==void 0&&A.onLoad())},this.itemError=function(l){A.onError!==void 0&&A.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,d){return c.push(l,d),this},this.removeHandler=function(l){const d=c.indexOf(l);return d!==-1&&c.splice(d,2),this},this.getHandler=function(l){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(l))return m}return null}}}const fg=new hg;class ps{constructor(t){this.manager=t!==void 0?t:fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(A,r){n.load(t,A,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ps.DEFAULT_MATERIAL_NAME="__DEFAULT";class pg extends ps{constructor(t){super(t)}load(t,e,n,A){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ao.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const s=Gi("img");function a(){l(),ao.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){l(),A&&A(d),r.manager.itemError(t),r.manager.itemEnd(t)}function l(){s.removeEventListener("load",a,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",a,!1),s.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}}class mg extends ps{constructor(t){super(t)}load(t,e,n,A){const r=new Ee,o=new pg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},n,A),r}}class Ia extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const or=new re,co=new U,lo=new U;class Eg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;co.setFromMatrixPosition(t.matrixWorld),e.position.copy(co),lo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lo),e.updateMatrixWorld(),or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(or),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _a extends Ba{constructor(t=-1,e=1,n=1,A=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=A,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,A,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=A,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,A=(this.top+this.bottom)/2;let r=n-t,o=n+t,s=A+e,a=A-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=l*this.view.offsetY,a=s-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Bg extends Eg{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cg extends Ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Bg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qg extends Ia{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ig extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function go(i,t,e,n){const A=_g(n);switch(e){case na:return i*t;case Aa:return i*t;case ra:return i*t*2;case sa:return i*t/A.components*A.byteLength;case gs:return i*t/A.components*A.byteLength;case oa:return i*t*2/A.components*A.byteLength;case ds:return i*t*2/A.components*A.byteLength;case ia:return i*t*3/A.components*A.byteLength;case Xe:return i*t*4/A.components*A.byteLength;case us:return i*t*4/A.components*A.byteLength;case IA:case _A:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case DA:case vA:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yr:case Tr:return Math.max(i,16)*Math.max(t,8)/4;case Mr:case Or:return Math.max(i,8)*Math.max(t,8)/2;case br:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Lr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Kr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xA:case qr:case jr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case aa:case Zr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jr:case $r:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _g(i){switch(i){case fn:case $o:return{byteLength:1,components:1};case Fi:case ta:case Wi:return{byteLength:2,components:1};case cs:case ls:return{byteLength:2,components:4};case Yn:case as:case cn:return{byteLength:4,components:1};case ea:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:os}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=os);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Da(){let i=null,t=!1,e=null,n=null;function A(r,o){e(r,o),n=i.requestAnimationFrame(A)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(A),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dg(i){const t=new WeakMap;function e(s,a){const c=s.array,l=s.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(a,u),i.bufferData(a,c,l),s.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:d}}function n(s,a,c){const l=a.array,d=a.updateRanges;if(i.bindBuffer(c,s),d.length===0)i.bufferSubData(c,0,l);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],C=d[f];C.start<=m.start+m.count+1?m.count=Math.max(m.count,C.start+C.count-m.start):(++u,d[u]=C)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const C=d[f];i.bufferSubData(c,C.start*l.BYTES_PER_ELEMENT,l,C.start,C.count)}a.clearUpdateRanges()}a.onUploadCallback()}function A(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const a=t.get(s);a&&(i.deleteBuffer(a.buffer),t.delete(s))}function o(s,a){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const l=t.get(s);(!l||l.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=t.get(s);if(c===void 0)t.set(s,e(s,a));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,s,a),c.version=s.version}}return{get:A,remove:r,update:o}}var vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xg=`#ifdef USE_ALPHAHASH
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
#endif`,Sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
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
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wg=`#ifdef USE_BATCHING
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
#endif`,Ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ug=`#ifdef USE_BUMPMAP
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
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kg=`#define PI 3.141592653589793
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
} // validated`,qg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jg=`vec3 transformedNormal = objectNormal;
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
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,id=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
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
}`,ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pd=`uniform bool receiveShadow;
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
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
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
#endif`,_d=`struct PhysicalMaterial {
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
}`,Dd=`
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Md=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nd=`#if defined( USE_POINTS_UV )
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
#endif`,Hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ld=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`#ifdef USE_MORPHTARGETS
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
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xd=`#ifdef USE_NORMALMAP
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
#endif`,Kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ru=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,su=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ou=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,au=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cu=`float getShadowMask() {
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
}`,lu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gu=`#ifdef USE_SKINNING
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
#endif`,du=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uu=`#ifdef USE_SKINNING
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
#endif`,hu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eu=`#ifdef USE_TRANSMISSION
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
#endif`,Bu=`#ifdef USE_TRANSMISSION
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
#endif`,Cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_u=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Du=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vu=`uniform sampler2D t2D;
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
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Su=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ou=`#include <common>
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
}`,Tu=`#if DEPTH_PACKING == 3200
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
}`,bu=`#define DISTANCE
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
}`,wu=`#define DISTANCE
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
}`,Nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ru=`uniform float scale;
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
}`,Pu=`uniform vec3 diffuse;
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
}`,Lu=`#include <common>
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
}`,Uu=`uniform vec3 diffuse;
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
}`,Fu=`#define LAMBERT
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
}`,Gu=`#define LAMBERT
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
}`,zu=`#define MATCAP
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
}`,Vu=`#define MATCAP
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
}`,ku=`#define NORMAL
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
}`,Yu=`#define NORMAL
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
}`,Wu=`#define PHONG
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
}`,Xu=`#define PHONG
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
}`,Ku=`#define STANDARD
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
}`,qu=`#define STANDARD
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
}`,ju=`#define TOON
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
}`,Zu=`#define TOON
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
}`,Ju=`uniform float size;
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
}`,$u=`uniform vec3 diffuse;
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
}`,th=`#include <common>
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
}`,eh=`uniform vec3 color;
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
}`,nh=`uniform float rotation;
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
}`,ih=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:vg,alphahash_pars_fragment:xg,alphamap_fragment:Sg,alphamap_pars_fragment:Mg,alphatest_fragment:yg,alphatest_pars_fragment:Og,aomap_fragment:Tg,aomap_pars_fragment:bg,batching_pars_vertex:wg,batching_vertex:Ng,begin_vertex:Hg,beginnormal_vertex:Rg,bsdfs:Pg,iridescence_fragment:Lg,bumpmap_pars_fragment:Ug,clipping_planes_fragment:Fg,clipping_planes_pars_fragment:Gg,clipping_planes_pars_vertex:zg,clipping_planes_vertex:Vg,color_fragment:kg,color_pars_fragment:Yg,color_pars_vertex:Wg,color_vertex:Xg,common:Kg,cube_uv_reflection_fragment:qg,defaultnormal_vertex:jg,displacementmap_pars_vertex:Zg,displacementmap_vertex:Jg,emissivemap_fragment:$g,emissivemap_pars_fragment:td,colorspace_fragment:ed,colorspace_pars_fragment:nd,envmap_fragment:id,envmap_common_pars_fragment:Ad,envmap_pars_fragment:rd,envmap_pars_vertex:sd,envmap_physical_pars_fragment:md,envmap_vertex:od,fog_vertex:ad,fog_pars_vertex:cd,fog_fragment:ld,fog_pars_fragment:gd,gradientmap_pars_fragment:dd,lightmap_pars_fragment:ud,lights_lambert_fragment:hd,lights_lambert_pars_fragment:fd,lights_pars_begin:pd,lights_toon_fragment:Ed,lights_toon_pars_fragment:Bd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Qd,lights_physical_fragment:Id,lights_physical_pars_fragment:_d,lights_fragment_begin:Dd,lights_fragment_maps:vd,lights_fragment_end:xd,logdepthbuf_fragment:Sd,logdepthbuf_pars_fragment:Md,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Od,map_fragment:Td,map_pars_fragment:bd,map_particle_fragment:wd,map_particle_pars_fragment:Nd,metalnessmap_fragment:Hd,metalnessmap_pars_fragment:Rd,morphinstance_vertex:Pd,morphcolor_vertex:Ld,morphnormal_vertex:Ud,morphtarget_pars_vertex:Fd,morphtarget_vertex:Gd,normal_fragment_begin:zd,normal_fragment_maps:Vd,normal_pars_fragment:kd,normal_pars_vertex:Yd,normal_vertex:Wd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:Kd,clearcoat_normal_fragment_maps:qd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Zd,opaque_fragment:Jd,packing:$d,premultiplied_alpha_fragment:tu,project_vertex:eu,dithering_fragment:nu,dithering_pars_fragment:iu,roughnessmap_fragment:Au,roughnessmap_pars_fragment:ru,shadowmap_pars_fragment:su,shadowmap_pars_vertex:ou,shadowmap_vertex:au,shadowmask_pars_fragment:cu,skinbase_vertex:lu,skinning_pars_vertex:gu,skinning_vertex:du,skinnormal_vertex:uu,specularmap_fragment:hu,specularmap_pars_fragment:fu,tonemapping_fragment:pu,tonemapping_pars_fragment:mu,transmission_fragment:Eu,transmission_pars_fragment:Bu,uv_pars_fragment:Cu,uv_pars_vertex:Qu,uv_vertex:Iu,worldpos_vertex:_u,background_vert:Du,background_frag:vu,backgroundCube_vert:xu,backgroundCube_frag:Su,cube_vert:Mu,cube_frag:yu,depth_vert:Ou,depth_frag:Tu,distanceRGBA_vert:bu,distanceRGBA_frag:wu,equirect_vert:Nu,equirect_frag:Hu,linedashed_vert:Ru,linedashed_frag:Pu,meshbasic_vert:Lu,meshbasic_frag:Uu,meshlambert_vert:Fu,meshlambert_frag:Gu,meshmatcap_vert:zu,meshmatcap_frag:Vu,meshnormal_vert:ku,meshnormal_frag:Yu,meshphong_vert:Wu,meshphong_frag:Xu,meshphysical_vert:Ku,meshphysical_frag:qu,meshtoon_vert:ju,meshtoon_frag:Zu,points_vert:Ju,points_frag:$u,shadow_vert:th,shadow_frag:eh,sprite_vert:nh,sprite_frag:ih},nt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},qe={basic:{uniforms:Qe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Qe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new kt(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Qe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Qe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Qe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new kt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Qe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Qe([nt.points,nt.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Qe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Qe([nt.common,nt.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Qe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Qe([nt.sprite,nt.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distanceRGBA:{uniforms:Qe([nt.common,nt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distanceRGBA_vert,fragmentShader:bt.distanceRGBA_frag},shadow:{uniforms:Qe([nt.lights,nt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};qe.physical={uniforms:Qe([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const BA={r:0,b:0,g:0},Hn=new $e,Ah=new re;function rh(i,t,e,n,A,r,o){const s=new kt(0);let a=r===!0?0:1,c,l,d=null,u=0,f=null;function m(x){let D=x.isScene===!0?x.background:null;return D&&D.isTexture&&(D=(x.backgroundBlurriness>0?e:t).get(D)),D}function C(x){let D=!1;const H=m(x);H===null?g(s,a):H&&H.isColor&&(g(H,1),D=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(x,D){const H=m(D);H&&(H.isCubeTexture||H.mapping===OA)?(l===void 0&&(l=new Te(new yi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Di(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:xe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,v,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),A.update(l)),Hn.copy(D.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),l.material.uniforms.envMap.value=H,l.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ah.makeRotationFromEuler(Hn)),l.material.toneMapped=Vt.getTransfer(H.colorSpace)!==qt,(d!==H||u!==H.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=H,u=H.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):H&&H.isTexture&&(c===void 0&&(c=new Te(new Oi(2,2),new Mn({name:"BackgroundMaterial",uniforms:Di(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),A.update(c)),c.material.uniforms.t2D.value=H,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(H.colorSpace)!==qt,H.matrixAutoUpdate===!0&&H.updateMatrix(),c.material.uniforms.uvTransform.value.copy(H.matrix),(d!==H||u!==H.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=H,u=H.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,D){x.getRGB(BA,Ea(i)),n.buffers.color.setClear(BA.r,BA.g,BA.b,D,o)}function y(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return s},setClearColor:function(x,D=1){s.set(x),a=D,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(s,a)},render:C,addToRenderList:h,dispose:y}}function sh(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},A=u(null);let r=A,o=!1;function s(B,O,V,F,q){let j=!1;const W=d(F,V,O);r!==W&&(r=W,c(r.object)),j=f(B,F,V,q),j&&m(B,F,V,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,D(B,O,V,F),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function a(){return i.createVertexArray()}function c(B){return i.bindVertexArray(B)}function l(B){return i.deleteVertexArray(B)}function d(B,O,V){const F=V.wireframe===!0;let q=n[B.id];q===void 0&&(q={},n[B.id]=q);let j=q[O.id];j===void 0&&(j={},q[O.id]=j);let W=j[F];return W===void 0&&(W=u(a()),j[F]=W),W}function u(B){const O=[],V=[],F=[];for(let q=0;q<e;q++)O[q]=0,V[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:F,object:B,attributes:{},index:null}}function f(B,O,V,F){const q=r.attributes,j=O.attributes;let W=0;const J=V.getAttributes();for(const z in J)if(J[z].location>=0){const gt=q[z];let Bt=j[z];if(Bt===void 0&&(z==="instanceMatrix"&&B.instanceMatrix&&(Bt=B.instanceMatrix),z==="instanceColor"&&B.instanceColor&&(Bt=B.instanceColor)),gt===void 0||gt.attribute!==Bt||Bt&&gt.data!==Bt.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function m(B,O,V,F){const q={},j=O.attributes;let W=0;const J=V.getAttributes();for(const z in J)if(J[z].location>=0){let gt=j[z];gt===void 0&&(z==="instanceMatrix"&&B.instanceMatrix&&(gt=B.instanceMatrix),z==="instanceColor"&&B.instanceColor&&(gt=B.instanceColor));const Bt={};Bt.attribute=gt,gt&&gt.data&&(Bt.data=gt.data),q[z]=Bt,W++}r.attributes=q,r.attributesNum=W,r.index=F}function C(){const B=r.newAttributes;for(let O=0,V=B.length;O<V;O++)B[O]=0}function h(B){g(B,0)}function g(B,O){const V=r.newAttributes,F=r.enabledAttributes,q=r.attributeDivisors;V[B]=1,F[B]===0&&(i.enableVertexAttribArray(B),F[B]=1),q[B]!==O&&(i.vertexAttribDivisor(B,O),q[B]=O)}function y(){const B=r.newAttributes,O=r.enabledAttributes;for(let V=0,F=O.length;V<F;V++)O[V]!==B[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function x(B,O,V,F,q,j,W){W===!0?i.vertexAttribIPointer(B,O,V,q,j):i.vertexAttribPointer(B,O,V,F,q,j)}function D(B,O,V,F){C();const q=F.attributes,j=V.getAttributes(),W=O.defaultAttributeValues;for(const J in j){const z=j[J];if(z.location>=0){let rt=q[J];if(rt===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(rt=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(rt=B.instanceColor)),rt!==void 0){const gt=rt.normalized,Bt=rt.itemSize,wt=t.get(rt);if(wt===void 0)continue;const jt=wt.buffer,Y=wt.type,et=wt.bytesPerElement,pt=Y===i.INT||Y===i.UNSIGNED_INT||rt.gpuType===as;if(rt.isInterleavedBufferAttribute){const st=rt.data,Dt=st.stride,St=rt.offset;if(st.isInstancedInterleavedBuffer){for(let Nt=0;Nt<z.locationSize;Nt++)g(z.location+Nt,st.meshPerAttribute);B.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Nt=0;Nt<z.locationSize;Nt++)h(z.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Nt=0;Nt<z.locationSize;Nt++)x(z.location+Nt,Bt/z.locationSize,Y,gt,Dt*et,(St+Bt/z.locationSize*Nt)*et,pt)}else{if(rt.isInstancedBufferAttribute){for(let st=0;st<z.locationSize;st++)g(z.location+st,rt.meshPerAttribute);B.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<z.locationSize;st++)h(z.location+st);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let st=0;st<z.locationSize;st++)x(z.location+st,Bt/z.locationSize,Y,gt,Bt*et,Bt/z.locationSize*st*et,pt)}}else if(W!==void 0){const gt=W[J];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(z.location,gt);break;case 3:i.vertexAttrib3fv(z.location,gt);break;case 4:i.vertexAttrib4fv(z.location,gt);break;default:i.vertexAttrib1fv(z.location,gt)}}}}y()}function H(){M();for(const B in n){const O=n[B];for(const V in O){const F=O[V];for(const q in F)l(F[q].object),delete F[q];delete O[V]}delete n[B]}}function b(B){if(n[B.id]===void 0)return;const O=n[B.id];for(const V in O){const F=O[V];for(const q in F)l(F[q].object),delete F[q];delete O[V]}delete n[B.id]}function v(B){for(const O in n){const V=n[O];if(V[B.id]===void 0)continue;const F=V[B.id];for(const q in F)l(F[q].object),delete F[q];delete V[B.id]}}function M(){I(),o=!0,r!==A&&(r=A,c(r.object))}function I(){A.geometry=null,A.program=null,A.wireframe=!1}return{setup:s,reset:M,resetDefaultState:I,dispose:H,releaseStatesOfGeometry:b,releaseStatesOfProgram:v,initAttributes:C,enableAttribute:h,disableUnusedAttributes:y}}function oh(i,t,e){let n;function A(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),e.update(l,n,d))}function s(c,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let f=0;for(let m=0;m<d;m++)f+=l[m];e.update(f,n,1)}function a(c,l,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],l[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,l,0,u,0,d);let m=0;for(let C=0;C<d;C++)m+=l[C]*u[C];e.update(m,n,1)}}this.setMode=A,this.render=r,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=a}function ah(i,t,e,n){let A;function r(){if(A!==void 0)return A;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");A=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else A=0;return A}function o(v){return!(v!==Xe&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(v){const M=v===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==fn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==cn&&!M)}function a(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const l=a(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:C,maxCubemapSize:h,maxAttributes:g,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:D,vertexTextures:H,maxSamples:b}}function ch(i){const t=this;let e=null,n=0,A=!1,r=!1;const o=new Pn,s=new Ot,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||A;return A=u,n=d.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=l(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,C=d.clipIntersection,h=d.clipShadows,g=i.get(d);if(!A||m===null||m.length===0||r&&!h)r?l(null):c();else{const y=r?0:n,x=y*4;let D=g.clippingState||null;a.value=D,D=l(m,u,x,f);for(let H=0;H!==x;++H)D[H]=e[H];g.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=y}};function c(){a.value!==e&&(a.value=e,a.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(d,u,f,m){const C=d!==null?d.length:0;let h=null;if(C!==0){if(h=a.value,m!==!0||h===null){const g=f+C*4,y=u.matrixWorldInverse;s.getNormalMatrix(y),(h===null||h.length<g)&&(h=new Float32Array(g));for(let x=0,D=f;x!==C;++x,D+=4)o.copy(d[x]).applyMatrix4(y,s),o.normal.toArray(h,D),h[D+3]=o.constant}a.value=h,a.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,h}}function lh(i){let t=new WeakMap;function e(o,s){return s===Dr?o.mapping=Bi:s===vr&&(o.mapping=Ci),o}function n(o){if(o&&o.isTexture){const s=o.mapping;if(s===Dr||s===vr)if(t.has(o)){const a=t.get(o).texture;return e(a,o.mapping)}else{const a=o.image;if(a&&a.height>0){const c=new og(a.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",A),e(c.texture,o.mapping)}else return null}}return o}function A(o){const s=o.target;s.removeEventListener("dispose",A);const a=t.get(s);a!==void 0&&(t.delete(s),a.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const hi=4,uo=[.125,.215,.35,.446,.526,.582],Fn=20,ar=new _a,ho=new kt;let cr=null,lr=0,gr=0,dr=!1;const Ln=(1+Math.sqrt(5))/2,di=1/Ln,fo=[new U(-Ln,di,0),new U(Ln,di,0),new U(-di,0,Ln),new U(di,0,Ln),new U(0,Ln,-di),new U(0,Ln,di),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class po{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,A=100){cr=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),gr=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,A,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cr,lr,gr),this._renderer.xr.enabled=dr,t.scissorTest=!1,CA(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cr=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),gr=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Wi,format:Xe,colorSpace:_i,depthBuffer:!1},A=mo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gh(r)),this._blurMaterial=dh(r,t,e)}return A}_compileMaterial(t){const e=new Te(this._lodPlanes[0],t);this._renderer.compile(e,ar)}_sceneToCubeUV(t,e,n,A){const s=new Re(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,u=l.toneMapping;l.getClearColor(ho),l.toneMapping=vn,l.autoClear=!1;const f=new Kn({name:"PMREM.Background",side:xe,depthWrite:!1,depthTest:!1}),m=new Te(new yi,f);let C=!1;const h=t.background;h?h.isColor&&(f.color.copy(h),t.background=null,C=!0):(f.color.copy(ho),C=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(s.up.set(0,a[g],0),s.lookAt(c[g],0,0)):y===1?(s.up.set(0,0,a[g]),s.lookAt(0,c[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,c[g]));const x=this._cubeSize;CA(A,y*x,g>2?x:0,x,x),l.setRenderTarget(A),C&&l.render(m,s),l.render(t,s)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=u,l.autoClear=d,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,A=t.mapping===Bi||t.mapping===Ci;A?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eo());const r=A?this._cubemapMaterial:this._equirectMaterial,o=new Te(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const a=this._cubeSize;CA(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(o,ar)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const A=this._lodPlanes.length;for(let r=1;r<A;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=fo[(A-r-1)%fo.length];this._blur(t,r-1,r,o,s)}e.autoClear=n}_blur(t,e,n,A,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,A,"latitudinal",r),this._halfBlur(o,t,n,n,A,"longitudinal",r)}_halfBlur(t,e,n,A,r,o,s){const a=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new Te(this._lodPlanes[A],c),u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fn-1),C=r/m,h=isFinite(r)?1+Math.floor(l*C):Fn;h>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Fn}`);const g=[];let y=0;for(let v=0;v<Fn;++v){const M=v/C,I=Math.exp(-M*M/2);g.push(I),v===0?y+=I:v<h&&(y+=2*I)}for(let v=0;v<g.length;v++)g[v]=g[v]/y;u.envMap.value=t.texture,u.samples.value=h,u.weights.value=g,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:x}=this;u.dTheta.value=m,u.mipInt.value=x-n;const D=this._sizeLods[A],H=3*D*(A>x-hi?A-x+hi:0),b=4*(this._cubeSize-D);CA(e,H,b,3*D,2*D),a.setRenderTarget(e),a.render(d,ar)}}function gh(i){const t=[],e=[],n=[];let A=i;const r=i-hi+1+uo.length;for(let o=0;o<r;o++){const s=Math.pow(2,A);e.push(s);let a=1/s;o>i-hi?a=uo[o-i+hi-1]:o===0&&(a=0),n.push(a);const c=1/(s-2),l=-c,d=1+c,u=[l,l,d,l,d,d,l,l,d,d,l,d],f=6,m=6,C=3,h=2,g=1,y=new Float32Array(C*m*f),x=new Float32Array(h*m*f),D=new Float32Array(g*m*f);for(let b=0;b<f;b++){const v=b%3*2/3-1,M=b>2?0:-1,I=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];y.set(I,C*m*b),x.set(u,h*m*b);const B=[b,b,b,b,b,b];D.set(B,g*m*b)}const H=new qn;H.setAttribute("position",new je(y,C)),H.setAttribute("uv",new je(x,h)),H.setAttribute("faceIndex",new je(D,g)),t.push(H),A>hi&&A--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function mo(i,t,e){const n=new Wn(i,t,e);return n.texture.mapping=OA,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function CA(i,t,e,n,A){i.viewport.set(t,e,n,A),i.scissor.set(t,e,n,A)}function dh(i,t,e){const n=new Float32Array(Fn),A=new U(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:A}},vertexShader:ms(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Eo(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ms(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Bo(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ms(){return`

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
	`}function uh(i){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const a=s.mapping,c=a===Dr||a===vr,l=a===Bi||a===Ci;if(c||l){let d=t.get(s);const u=d!==void 0?d.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==u)return e===null&&(e=new po(i)),d=c?e.fromEquirectangular(s,d):e.fromCubemap(s,d),d.texture.pmremVersion=s.pmremVersion,t.set(s,d),d.texture;if(d!==void 0)return d.texture;{const f=s.image;return c&&f&&f.height>0||l&&f&&A(f)?(e===null&&(e=new po(i)),d=c?e.fromEquirectangular(s):e.fromCubemap(s),d.texture.pmremVersion=s.pmremVersion,t.set(s,d),s.addEventListener("dispose",r),d.texture):null}}}return s}function A(s){let a=0;const c=6;for(let l=0;l<c;l++)s[l]!==void 0&&a++;return a===c}function r(s){const a=s.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hh(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let A;switch(n){case"WEBGL_depth_texture":A=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":A=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":A=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":A=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:A=i.getExtension(n)}return t[n]=A,A}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const A=e(n);return A===null&&ui("THREE.WebGLRenderer: "+n+" extension not supported."),A}}}function fh(i,t,e,n){const A={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete A[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function s(d,u){return A[u.id]===!0||(u.addEventListener("dispose",o),A[u.id]=!0,e.memory.geometries++),u}function a(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,m=d.attributes.position;let C=0;if(f!==null){const y=f.array;C=f.version;for(let x=0,D=y.length;x<D;x+=3){const H=y[x+0],b=y[x+1],v=y[x+2];u.push(H,b,b,v,v,H)}}else if(m!==void 0){const y=m.array;C=m.version;for(let x=0,D=y.length/3-1;x<D;x+=3){const H=x+0,b=x+1,v=x+2;u.push(H,b,b,v,v,H)}}else return;const h=new(ga(u)?ma:pa)(u,1);h.version=C;const g=r.get(d);g&&t.remove(g),r.set(d,h)}function l(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:s,update:a,getWireframeAttribute:l}}function ph(i,t,e){let n;function A(u){n=u}let r,o;function s(u){r=u.type,o=u.bytesPerElement}function a(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,u*o,m),e.update(f,n,m))}function l(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let h=0;for(let g=0;g<m;g++)h+=f[g];e.update(h,n,1)}function d(u,f,m,C){if(m===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<u.length;g++)c(u[g]/o,f[g],C[g]);else{h.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,C,0,m);let g=0;for(let y=0;y<m;y++)g+=f[y]*C[y];e.update(g,n,1)}}this.setMode=A,this.setIndex=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function mh(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=s*(r/3);break;case i.LINES:e.lines+=s*(r/2);break;case i.LINE_STRIP:e.lines+=s*(r-1);break;case i.LINE_LOOP:e.lines+=s*r;break;case i.POINTS:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function A(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:A,update:n}}function Eh(i,t,e){const n=new WeakMap,A=new Ae;function r(o,s,a){const c=o.morphTargetInfluences,l=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=l!==void 0?l.length:0;let u=n.get(s);if(u===void 0||u.count!==d){let B=function(){M.dispose(),n.delete(s),s.removeEventListener("dispose",B)};var f=B;u!==void 0&&u.texture.dispose();const m=s.morphAttributes.position!==void 0,C=s.morphAttributes.normal!==void 0,h=s.morphAttributes.color!==void 0,g=s.morphAttributes.position||[],y=s.morphAttributes.normal||[],x=s.morphAttributes.color||[];let D=0;m===!0&&(D=1),C===!0&&(D=2),h===!0&&(D=3);let H=s.attributes.position.count*D,b=1;H>t.maxTextureSize&&(b=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const v=new Float32Array(H*b*4*d),M=new ua(v,H,b,d);M.type=cn,M.needsUpdate=!0;const I=D*4;for(let O=0;O<d;O++){const V=g[O],F=y[O],q=x[O],j=H*b*4*O;for(let W=0;W<V.count;W++){const J=W*I;m===!0&&(A.fromBufferAttribute(V,W),v[j+J+0]=A.x,v[j+J+1]=A.y,v[j+J+2]=A.z,v[j+J+3]=0),C===!0&&(A.fromBufferAttribute(F,W),v[j+J+4]=A.x,v[j+J+5]=A.y,v[j+J+6]=A.z,v[j+J+7]=0),h===!0&&(A.fromBufferAttribute(q,W),v[j+J+8]=A.x,v[j+J+9]=A.y,v[j+J+10]=A.z,v[j+J+11]=q.itemSize===4?A.w:1)}}u={count:d,texture:M,size:new Xt(H,b)},n.set(s,u),s.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let h=0;h<c.length;h++)m+=c[h];const C=s.morphTargetsRelative?1:1-m;a.getUniforms().setValue(i,"morphTargetBaseInfluence",C),a.getUniforms().setValue(i,"morphTargetInfluences",c)}a.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),a.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Bh(i,t,e,n){let A=new WeakMap;function r(a){const c=n.render.frame,l=a.geometry,d=t.get(a,l);if(A.get(d)!==c&&(t.update(d),A.set(d,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),A.get(a)!==c&&(e.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,i.ARRAY_BUFFER),A.set(a,c))),a.isSkinnedMesh){const u=a.skeleton;A.get(u)!==c&&(u.update(),A.set(u,c))}return d}function o(){A=new WeakMap}function s(a){const c=a.target;c.removeEventListener("dispose",s),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const va=new Ee,Co=new Qa(1,1),xa=new ua,Sa=new kl,Ma=new Ca,Qo=[],Io=[],_o=new Float32Array(16),Do=new Float32Array(9),vo=new Float32Array(4);function Ti(i,t,e){const n=i[0];if(n<=0||n>0)return i;const A=t*e;let r=Qo[A];if(r===void 0&&(r=new Float32Array(A),Qo[A]=r),t!==0){n.toArray(r,0);for(let o=1,s=0;o!==t;++o)s+=e,i[o].toArray(r,s)}return r}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function TA(i,t){let e=Io[t];e===void 0&&(e=new Int32Array(t),Io[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ch(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),le(e,t)}}function Ih(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),le(e,t)}}function _h(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),le(e,t)}}function Dh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;vo.set(n),i.uniformMatrix2fv(this.addr,!1,vo),le(e,n)}}function vh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Do.set(n),i.uniformMatrix3fv(this.addr,!1,Do),le(e,n)}}function xh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;_o.set(n),i.uniformMatrix4fv(this.addr,!1,_o),le(e,n)}}function Sh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),le(e,t)}}function yh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),le(e,t)}}function Oh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),le(e,t)}}function Th(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),le(e,t)}}function wh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),le(e,t)}}function Nh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),le(e,t)}}function Hh(i,t,e){const n=this.cache,A=e.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A);let r;this.type===i.SAMPLER_2D_SHADOW?(Co.compareFunction=la,r=Co):r=va,e.setTexture2D(t||r,A)}function Rh(i,t,e){const n=this.cache,A=e.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A),e.setTexture3D(t||Sa,A)}function Ph(i,t,e){const n=this.cache,A=e.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A),e.setTextureCube(t||Ma,A)}function Lh(i,t,e){const n=this.cache,A=e.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A),e.setTexture2DArray(t||xa,A)}function Uh(i){switch(i){case 5126:return Ch;case 35664:return Qh;case 35665:return Ih;case 35666:return _h;case 35674:return Dh;case 35675:return vh;case 35676:return xh;case 5124:case 35670:return Sh;case 35667:case 35671:return Mh;case 35668:case 35672:return yh;case 35669:case 35673:return Oh;case 5125:return Th;case 36294:return bh;case 36295:return wh;case 36296:return Nh;case 35678:case 36198:case 36298:case 36306:case 35682:return Hh;case 35679:case 36299:case 36307:return Rh;case 35680:case 36300:case 36308:case 36293:return Ph;case 36289:case 36303:case 36311:case 36292:return Lh}}function Fh(i,t){i.uniform1fv(this.addr,t)}function Gh(i,t){const e=Ti(t,this.size,2);i.uniform2fv(this.addr,e)}function zh(i,t){const e=Ti(t,this.size,3);i.uniform3fv(this.addr,e)}function Vh(i,t){const e=Ti(t,this.size,4);i.uniform4fv(this.addr,e)}function kh(i,t){const e=Ti(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yh(i,t){const e=Ti(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wh(i,t){const e=Ti(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xh(i,t){i.uniform1iv(this.addr,t)}function Kh(i,t){i.uniform2iv(this.addr,t)}function qh(i,t){i.uniform3iv(this.addr,t)}function jh(i,t){i.uniform4iv(this.addr,t)}function Zh(i,t){i.uniform1uiv(this.addr,t)}function Jh(i,t){i.uniform2uiv(this.addr,t)}function $h(i,t){i.uniform3uiv(this.addr,t)}function tf(i,t){i.uniform4uiv(this.addr,t)}function ef(i,t,e){const n=this.cache,A=t.length,r=TA(e,A);ce(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let o=0;o!==A;++o)e.setTexture2D(t[o]||va,r[o])}function nf(i,t,e){const n=this.cache,A=t.length,r=TA(e,A);ce(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let o=0;o!==A;++o)e.setTexture3D(t[o]||Sa,r[o])}function Af(i,t,e){const n=this.cache,A=t.length,r=TA(e,A);ce(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let o=0;o!==A;++o)e.setTextureCube(t[o]||Ma,r[o])}function rf(i,t,e){const n=this.cache,A=t.length,r=TA(e,A);ce(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let o=0;o!==A;++o)e.setTexture2DArray(t[o]||xa,r[o])}function sf(i){switch(i){case 5126:return Fh;case 35664:return Gh;case 35665:return zh;case 35666:return Vh;case 35674:return kh;case 35675:return Yh;case 35676:return Wh;case 5124:case 35670:return Xh;case 35667:case 35671:return Kh;case 35668:case 35672:return qh;case 35669:case 35673:return jh;case 5125:return Zh;case 36294:return Jh;case 36295:return $h;case 36296:return tf;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return rf}}class of{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Uh(e.type)}}class af{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sf(e.type)}}class cf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const A=this.seq;for(let r=0,o=A.length;r!==o;++r){const s=A[r];s.setValue(t,e[s.id],n)}}}const ur=/(\w+)(\])?(\[|\.)?/g;function xo(i,t){i.seq.push(t),i.map[t.id]=t}function lf(i,t,e){const n=i.name,A=n.length;for(ur.lastIndex=0;;){const r=ur.exec(n),o=ur.lastIndex;let s=r[1];const a=r[2]==="]",c=r[3];if(a&&(s=s|0),c===void 0||c==="["&&o+2===A){xo(e,c===void 0?new of(s,i,t):new af(s,i,t));break}else{let d=e.map[s];d===void 0&&(d=new cf(s),xo(e,d)),e=d}}}class SA{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let A=0;A<n;++A){const r=t.getActiveUniform(e,A),o=t.getUniformLocation(e,r.name);lf(r,o,this)}}setValue(t,e,n,A){const r=this.map[e];r!==void 0&&r.setValue(t,n,A)}setOptional(t,e,n){const A=e[n];A!==void 0&&this.setValue(t,n,A)}static upload(t,e,n,A){for(let r=0,o=e.length;r!==o;++r){const s=e[r],a=n[s.id];a.needsUpdate!==!1&&s.setValue(t,a.value,A)}}static seqWithValue(t,e){const n=[];for(let A=0,r=t.length;A!==r;++A){const o=t[A];o.id in e&&n.push(o)}return n}}function So(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const gf=37297;let df=0;function uf(i,t){const e=i.split(`
`),n=[],A=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=A;o<r;o++){const s=o+1;n.push(`${s===t?">":" "} ${s}: ${e[o]}`)}return n.join(`
`)}const Mo=new Ot;function hf(i){Vt._getMatrix(Mo,Vt.workingColorSpace,i);const t=`mat3( ${Mo.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(i)){case MA:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),A=i.getShaderInfoLog(t).trim();if(n&&A==="")return"";const r=/ERROR: 0:(\d+)/.exec(A);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+A+`

`+uf(i.getShaderSource(t),o)}else return A}function ff(i,t){const e=hf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pf(i,t){let e;switch(t){case pl:e="Linear";break;case ml:e="Reinhard";break;case El:e="Cineon";break;case Bl:e="ACESFilmic";break;case Ql:e="AgX";break;case Il:e="Neutral";break;case Cl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const QA=new U;function mf(){Vt.getLuminanceCoefficients(QA);const i=QA.x.toFixed(4),t=QA.y.toFixed(4),e=QA.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ef(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ui).join(`
`)}function Bf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let A=0;A<n;A++){const r=i.getActiveAttrib(t,A),o=r.name;let s=1;r.type===i.FLOAT_MAT2&&(s=2),r.type===i.FLOAT_MAT3&&(s=3),r.type===i.FLOAT_MAT4&&(s=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:s}}return e}function Ui(i){return i!==""}function Oo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function To(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function es(i){return i.replace(Qf,_f)}const If=new Map;function _f(i,t){let e=bt[t];if(e===void 0){const n=If.get(t);if(n!==void 0)e=bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return es(e)}const Df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bo(i){return i.replace(Df,vf)}function vf(i,t,e,n){let A="";for(let r=parseInt(t);r<parseInt(e);r++)A+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return A}function wo(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function Sf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case Ci:t="ENVMAP_TYPE_CUBE";break;case OA:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ci:t="ENVMAP_MODE_REFRACTION";break}return t}function yf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zo:t="ENVMAP_BLENDING_MULTIPLY";break;case hl:t="ENVMAP_BLENDING_MIX";break;case fl:t="ENVMAP_BLENDING_ADD";break}return t}function Of(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Tf(i,t,e,n){const A=i.getContext(),r=e.defines;let o=e.vertexShader,s=e.fragmentShader;const a=xf(e),c=Sf(e),l=Mf(e),d=yf(e),u=Of(e),f=Ef(e),m=Bf(r),C=A.createProgram();let h,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ui).join(`
`),h.length>0&&(h+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ui).join(`
`),g.length>0&&(g+=`
`)):(h=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),g=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?bt.tonemapping_pars_fragment:"",e.toneMapping!==vn?pf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,ff("linearToOutputTexel",e.outputColorSpace),mf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ui).join(`
`)),o=es(o),o=Oo(o,e),o=To(o,e),s=es(s),s=Oo(s,e),s=To(s,e),o=bo(o),s=bo(s),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",e.glslVersion===ks?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ks?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=y+h+o,D=y+g+s,H=So(A,A.VERTEX_SHADER,x),b=So(A,A.FRAGMENT_SHADER,D);A.attachShader(C,H),A.attachShader(C,b),e.index0AttributeName!==void 0?A.bindAttribLocation(C,0,e.index0AttributeName):e.morphTargets===!0&&A.bindAttribLocation(C,0,"position"),A.linkProgram(C);function v(O){if(i.debug.checkShaderErrors){const V=A.getProgramInfoLog(C).trim(),F=A.getShaderInfoLog(H).trim(),q=A.getShaderInfoLog(b).trim();let j=!0,W=!0;if(A.getProgramParameter(C,A.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(A,C,H,b);else{const J=yo(A,H,"vertex"),z=yo(A,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+A.getError()+" - VALIDATE_STATUS "+A.getProgramParameter(C,A.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+V+`
`+J+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||q==="")&&(W=!1);W&&(O.diagnostics={runnable:j,programLog:V,vertexShader:{log:F,prefix:h},fragmentShader:{log:q,prefix:g}})}A.deleteShader(H),A.deleteShader(b),M=new SA(A,C),I=Cf(A,C)}let M;this.getUniforms=function(){return M===void 0&&v(this),M};let I;this.getAttributes=function(){return I===void 0&&v(this),I};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=A.getProgramParameter(C,gf)),B},this.destroy=function(){n.releaseStatesOfProgram(this),A.deleteProgram(C),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=df++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=b,this}let bf=0;class wf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,A=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(A)===!1&&(o.add(A),A.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Nf(t),e.set(t,n)),n}}class Nf{constructor(t){this.id=bf++,this.code=t,this.usedTimes=0}}function Hf(i,t,e,n,A,r,o){const s=new ha,a=new wf,c=new Set,l=[],d=A.logarithmicDepthBuffer,u=A.vertexTextures;let f=A.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(I){return c.add(I),I===0?"uv":`uv${I}`}function h(I,B,O,V,F){const q=V.fog,j=F.geometry,W=I.isMeshStandardMaterial?V.environment:null,J=(I.isMeshStandardMaterial?e:t).get(I.envMap||W),z=J&&J.mapping===OA?J.image.height:null,rt=m[I.type];I.precision!==null&&(f=A.getMaxPrecision(I.precision),f!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",f,"instead."));const gt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Bt=gt!==void 0?gt.length:0;let wt=0;j.morphAttributes.position!==void 0&&(wt=1),j.morphAttributes.normal!==void 0&&(wt=2),j.morphAttributes.color!==void 0&&(wt=3);let jt,Y,et,pt;if(rt){const Kt=qe[rt];jt=Kt.vertexShader,Y=Kt.fragmentShader}else jt=I.vertexShader,Y=I.fragmentShader,a.update(I),et=a.getVertexShaderID(I),pt=a.getFragmentShaderID(I);const st=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),St=F.isInstancedMesh===!0,Nt=F.isBatchedMesh===!0,te=!!I.map,Ut=!!I.matcap,se=!!J,S=!!I.aoMap,be=!!I.lightMap,Rt=!!I.bumpMap,Pt=!!I.normalMap,Ct=!!I.displacementMap,Jt=!!I.emissiveMap,Et=!!I.metalnessMap,_=!!I.roughnessMap,p=I.anisotropy>0,R=I.clearcoat>0,X=I.dispersion>0,Z=I.iridescence>0,k=I.sheen>0,mt=I.transmission>0,ot=p&&!!I.anisotropyMap,dt=R&&!!I.clearcoatMap,Ft=R&&!!I.clearcoatNormalMap,tt=R&&!!I.clearcoatRoughnessMap,ut=Z&&!!I.iridescenceMap,_t=Z&&!!I.iridescenceThicknessMap,vt=k&&!!I.sheenColorMap,ht=k&&!!I.sheenRoughnessMap,Lt=!!I.specularMap,Tt=!!I.specularColorMap,Zt=!!I.specularIntensityMap,T=mt&&!!I.transmissionMap,it=mt&&!!I.thicknessMap,G=!!I.gradientMap,K=!!I.alphaMap,ct=I.alphaTest>0,at=!!I.alphaHash,yt=!!I.extensions;let ne=vn;I.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ne=i.toneMapping);const he={shaderID:rt,shaderType:I.type,shaderName:I.name,vertexShader:jt,fragmentShader:Y,defines:I.defines,customVertexShaderID:et,customFragmentShaderID:pt,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&F._colorsTexture!==null,instancing:St,instancingColor:St&&F.instanceColor!==null,instancingMorph:St&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:_i,alphaToCoverage:!!I.alphaToCoverage,map:te,matcap:Ut,envMap:se,envMapMode:se&&J.mapping,envMapCubeUVHeight:z,aoMap:S,lightMap:be,bumpMap:Rt,normalMap:Pt,displacementMap:u&&Ct,emissiveMap:Jt,normalMapObjectSpace:Pt&&I.normalMapType===xl,normalMapTangentSpace:Pt&&I.normalMapType===ca,metalnessMap:Et,roughnessMap:_,anisotropy:p,anisotropyMap:ot,clearcoat:R,clearcoatMap:dt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:tt,dispersion:X,iridescence:Z,iridescenceMap:ut,iridescenceThicknessMap:_t,sheen:k,sheenColorMap:vt,sheenRoughnessMap:ht,specularMap:Lt,specularColorMap:Tt,specularIntensityMap:Zt,transmission:mt,transmissionMap:T,thicknessMap:it,gradientMap:G,opaque:I.transparent===!1&&I.blending===fi&&I.alphaToCoverage===!1,alphaMap:K,alphaTest:ct,alphaHash:at,combine:I.combine,mapUv:te&&C(I.map.channel),aoMapUv:S&&C(I.aoMap.channel),lightMapUv:be&&C(I.lightMap.channel),bumpMapUv:Rt&&C(I.bumpMap.channel),normalMapUv:Pt&&C(I.normalMap.channel),displacementMapUv:Ct&&C(I.displacementMap.channel),emissiveMapUv:Jt&&C(I.emissiveMap.channel),metalnessMapUv:Et&&C(I.metalnessMap.channel),roughnessMapUv:_&&C(I.roughnessMap.channel),anisotropyMapUv:ot&&C(I.anisotropyMap.channel),clearcoatMapUv:dt&&C(I.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&C(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&C(I.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&C(I.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&C(I.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&C(I.sheenColorMap.channel),sheenRoughnessMapUv:ht&&C(I.sheenRoughnessMap.channel),specularMapUv:Lt&&C(I.specularMap.channel),specularColorMapUv:Tt&&C(I.specularColorMap.channel),specularIntensityMapUv:Zt&&C(I.specularIntensityMap.channel),transmissionMapUv:T&&C(I.transmissionMap.channel),thicknessMapUv:it&&C(I.thicknessMap.channel),alphaMapUv:K&&C(I.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Pt||p),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(te||K),fog:!!q,useFog:I.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Dt,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:wt,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:te&&I.map.isVideoTexture===!0&&Vt.getTransfer(I.map.colorSpace)===qt,decodeVideoTextureEmissive:Jt&&I.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(I.emissiveMap.colorSpace)===qt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ke,flipSided:I.side===xe,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:yt&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&I.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function g(I){const B=[];if(I.shaderID?B.push(I.shaderID):(B.push(I.customVertexShaderID),B.push(I.customFragmentShaderID)),I.defines!==void 0)for(const O in I.defines)B.push(O),B.push(I.defines[O]);return I.isRawShaderMaterial===!1&&(y(B,I),x(B,I),B.push(i.outputColorSpace)),B.push(I.customProgramCacheKey),B.join()}function y(I,B){I.push(B.precision),I.push(B.outputColorSpace),I.push(B.envMapMode),I.push(B.envMapCubeUVHeight),I.push(B.mapUv),I.push(B.alphaMapUv),I.push(B.lightMapUv),I.push(B.aoMapUv),I.push(B.bumpMapUv),I.push(B.normalMapUv),I.push(B.displacementMapUv),I.push(B.emissiveMapUv),I.push(B.metalnessMapUv),I.push(B.roughnessMapUv),I.push(B.anisotropyMapUv),I.push(B.clearcoatMapUv),I.push(B.clearcoatNormalMapUv),I.push(B.clearcoatRoughnessMapUv),I.push(B.iridescenceMapUv),I.push(B.iridescenceThicknessMapUv),I.push(B.sheenColorMapUv),I.push(B.sheenRoughnessMapUv),I.push(B.specularMapUv),I.push(B.specularColorMapUv),I.push(B.specularIntensityMapUv),I.push(B.transmissionMapUv),I.push(B.thicknessMapUv),I.push(B.combine),I.push(B.fogExp2),I.push(B.sizeAttenuation),I.push(B.morphTargetsCount),I.push(B.morphAttributeCount),I.push(B.numDirLights),I.push(B.numPointLights),I.push(B.numSpotLights),I.push(B.numSpotLightMaps),I.push(B.numHemiLights),I.push(B.numRectAreaLights),I.push(B.numDirLightShadows),I.push(B.numPointLightShadows),I.push(B.numSpotLightShadows),I.push(B.numSpotLightShadowsWithMaps),I.push(B.numLightProbes),I.push(B.shadowMapType),I.push(B.toneMapping),I.push(B.numClippingPlanes),I.push(B.numClipIntersection),I.push(B.depthPacking)}function x(I,B){s.disableAll(),B.supportsVertexTextures&&s.enable(0),B.instancing&&s.enable(1),B.instancingColor&&s.enable(2),B.instancingMorph&&s.enable(3),B.matcap&&s.enable(4),B.envMap&&s.enable(5),B.normalMapObjectSpace&&s.enable(6),B.normalMapTangentSpace&&s.enable(7),B.clearcoat&&s.enable(8),B.iridescence&&s.enable(9),B.alphaTest&&s.enable(10),B.vertexColors&&s.enable(11),B.vertexAlphas&&s.enable(12),B.vertexUv1s&&s.enable(13),B.vertexUv2s&&s.enable(14),B.vertexUv3s&&s.enable(15),B.vertexTangents&&s.enable(16),B.anisotropy&&s.enable(17),B.alphaHash&&s.enable(18),B.batching&&s.enable(19),B.dispersion&&s.enable(20),B.batchingColor&&s.enable(21),I.push(s.mask),s.disableAll(),B.fog&&s.enable(0),B.useFog&&s.enable(1),B.flatShading&&s.enable(2),B.logarithmicDepthBuffer&&s.enable(3),B.reverseDepthBuffer&&s.enable(4),B.skinning&&s.enable(5),B.morphTargets&&s.enable(6),B.morphNormals&&s.enable(7),B.morphColors&&s.enable(8),B.premultipliedAlpha&&s.enable(9),B.shadowMapEnabled&&s.enable(10),B.doubleSided&&s.enable(11),B.flipSided&&s.enable(12),B.useDepthPacking&&s.enable(13),B.dithering&&s.enable(14),B.transmission&&s.enable(15),B.sheen&&s.enable(16),B.opaque&&s.enable(17),B.pointsUvs&&s.enable(18),B.decodeVideoTexture&&s.enable(19),B.decodeVideoTextureEmissive&&s.enable(20),B.alphaToCoverage&&s.enable(21),I.push(s.mask)}function D(I){const B=m[I.type];let O;if(B){const V=qe[B];O=ig.clone(V.uniforms)}else O=I.uniforms;return O}function H(I,B){let O;for(let V=0,F=l.length;V<F;V++){const q=l[V];if(q.cacheKey===B){O=q,++O.usedTimes;break}}return O===void 0&&(O=new Tf(i,B,I,r),l.push(O)),O}function b(I){if(--I.usedTimes===0){const B=l.indexOf(I);l[B]=l[l.length-1],l.pop(),I.destroy()}}function v(I){a.remove(I)}function M(){a.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:b,releaseShaderCache:v,programs:l,dispose:M}}function Rf(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let s=i.get(o);return s===void 0&&(s={},i.set(o,s)),s}function n(o){i.delete(o)}function A(o,s,a){i.get(o)[s]=a}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:A,dispose:r}}function Pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function No(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ho(){const i=[];let t=0;const e=[],n=[],A=[];function r(){t=0,e.length=0,n.length=0,A.length=0}function o(d,u,f,m,C,h){let g=i[t];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:C,group:h},i[t]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=C,g.group=h),t++,g}function s(d,u,f,m,C,h){const g=o(d,u,f,m,C,h);f.transmission>0?n.push(g):f.transparent===!0?A.push(g):e.push(g)}function a(d,u,f,m,C,h){const g=o(d,u,f,m,C,h);f.transmission>0?n.unshift(g):f.transparent===!0?A.unshift(g):e.unshift(g)}function c(d,u){e.length>1&&e.sort(d||Pf),n.length>1&&n.sort(u||No),A.length>1&&A.sort(u||No)}function l(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:A,init:r,push:s,unshift:a,finish:l,sort:c}}function Lf(){let i=new WeakMap;function t(n,A){const r=i.get(n);let o;return r===void 0?(o=new Ho,i.set(n,[o])):A>=r.length?(o=new Ho,r.push(o)):o=r[A],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Uf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new kt};break;case"SpotLight":e={position:new U,direction:new U,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Ff(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gf=0;function zf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vf(i){const t=new Uf,e=Ff(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const A=new U,r=new re,o=new re;function s(c){let l=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,m=0,C=0,h=0,g=0,y=0,x=0,D=0,H=0,b=0,v=0;c.sort(zf);for(let I=0,B=c.length;I<B;I++){const O=c[I],V=O.color,F=O.intensity,q=O.distance,j=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)l+=V.r*F,d+=V.g*F,u+=V.b*F;else if(O.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(O.sh.coefficients[W],F);v++}else if(O.isDirectionalLight){const W=t.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const J=O.shadow,z=e.get(O);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=O.shadow.matrix,y++}n.directional[f]=W,f++}else if(O.isSpotLight){const W=t.get(O);W.position.setFromMatrixPosition(O.matrixWorld),W.color.copy(V).multiplyScalar(F),W.distance=q,W.coneCos=Math.cos(O.angle),W.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),W.decay=O.decay,n.spot[C]=W;const J=O.shadow;if(O.map&&(n.spotLightMap[H]=O.map,H++,J.updateMatrices(O),O.castShadow&&b++),n.spotLightMatrix[C]=J.matrix,O.castShadow){const z=e.get(O);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.spotShadow[C]=z,n.spotShadowMap[C]=j,D++}C++}else if(O.isRectAreaLight){const W=t.get(O);W.color.copy(V).multiplyScalar(F),W.halfWidth.set(O.width*.5,0,0),W.halfHeight.set(0,O.height*.5,0),n.rectArea[h]=W,h++}else if(O.isPointLight){const W=t.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),W.distance=O.distance,W.decay=O.decay,O.castShadow){const J=O.shadow,z=e.get(O);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=O.shadow.matrix,x++}n.point[m]=W,m++}else if(O.isHemisphereLight){const W=t.get(O);W.skyColor.copy(O.color).multiplyScalar(F),W.groundColor.copy(O.groundColor).multiplyScalar(F),n.hemi[g]=W,g++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=d,n.ambient[2]=u;const M=n.hash;(M.directionalLength!==f||M.pointLength!==m||M.spotLength!==C||M.rectAreaLength!==h||M.hemiLength!==g||M.numDirectionalShadows!==y||M.numPointShadows!==x||M.numSpotShadows!==D||M.numSpotMaps!==H||M.numLightProbes!==v)&&(n.directional.length=f,n.spot.length=C,n.rectArea.length=h,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=D+H-b,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=v,M.directionalLength=f,M.pointLength=m,M.spotLength=C,M.rectAreaLength=h,M.hemiLength=g,M.numDirectionalShadows=y,M.numPointShadows=x,M.numSpotShadows=D,M.numSpotMaps=H,M.numLightProbes=v,n.version=Gf++)}function a(c,l){let d=0,u=0,f=0,m=0,C=0;const h=l.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const x=c[g];if(x.isDirectionalLight){const D=n.directional[d];D.direction.setFromMatrixPosition(x.matrixWorld),A.setFromMatrixPosition(x.target.matrixWorld),D.direction.sub(A),D.direction.transformDirection(h),d++}else if(x.isSpotLight){const D=n.spot[f];D.position.setFromMatrixPosition(x.matrixWorld),D.position.applyMatrix4(h),D.direction.setFromMatrixPosition(x.matrixWorld),A.setFromMatrixPosition(x.target.matrixWorld),D.direction.sub(A),D.direction.transformDirection(h),f++}else if(x.isRectAreaLight){const D=n.rectArea[m];D.position.setFromMatrixPosition(x.matrixWorld),D.position.applyMatrix4(h),o.identity(),r.copy(x.matrixWorld),r.premultiply(h),o.extractRotation(r),D.halfWidth.set(x.width*.5,0,0),D.halfHeight.set(0,x.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const D=n.point[u];D.position.setFromMatrixPosition(x.matrixWorld),D.position.applyMatrix4(h),u++}else if(x.isHemisphereLight){const D=n.hemi[C];D.direction.setFromMatrixPosition(x.matrixWorld),D.direction.transformDirection(h),C++}}}return{setup:s,setupView:a,state:n}}function Ro(i){const t=new Vf(i),e=[],n=[];function A(l){c.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function s(){t.setup(e)}function a(l){t.setupView(e,l)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:A,state:c,setupLights:s,setupLightsView:a,pushLight:r,pushShadow:o}}function kf(i){let t=new WeakMap;function e(A,r=0){const o=t.get(A);let s;return o===void 0?(s=new Ro(i),t.set(A,[s])):r>=o.length?(s=new Ro(i),o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}const Yf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wf=`uniform sampler2D shadow_pass;
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
}`;function Xf(i,t,e){let n=new fs;const A=new Xt,r=new Xt,o=new Ae,s=new dg({depthPacking:vl}),a=new ug,c={},l=e.maxTextureSize,d={[Sn]:xe,[xe]:Sn,[ke]:ke},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Yf,fragmentShader:Wf}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new qn;m.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Te(m,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let g=this.type;this.render=function(b,v,M){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||b.length===0)return;const I=i.getRenderTarget(),B=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Dn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=g!==on&&this.type===on,q=g===on&&this.type!==on;for(let j=0,W=b.length;j<W;j++){const J=b[j],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;A.copy(z.mapSize);const rt=z.getFrameExtents();if(A.multiply(rt),r.copy(z.mapSize),(A.x>l||A.y>l)&&(A.x>l&&(r.x=Math.floor(l/rt.x),A.x=r.x*rt.x,z.mapSize.x=r.x),A.y>l&&(r.y=Math.floor(l/rt.y),A.y=r.y*rt.y,z.mapSize.y=r.y)),z.map===null||F===!0||q===!0){const Bt=this.type!==on?{minFilter:Ke,magFilter:Ke}:{};z.map!==null&&z.map.dispose(),z.map=new Wn(A.x,A.y,Bt),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const gt=z.getViewportCount();for(let Bt=0;Bt<gt;Bt++){const wt=z.getViewport(Bt);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),V.viewport(o),z.updateMatrices(J,Bt),n=z.getFrustum(),D(v,M,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===on&&y(z,M),z.needsUpdate=!1}g=this.type,h.needsUpdate=!1,i.setRenderTarget(I,B,O)};function y(b,v){const M=t.update(C);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Wn(A.x,A.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(v,null,M,u,C,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(v,null,M,f,C,null)}function x(b,v,M,I){let B=null;const O=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0)B=O;else if(B=M.isPointLight===!0?a:s,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const V=B.uuid,F=v.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let j=q[F];j===void 0&&(j=B.clone(),q[F]=j,v.addEventListener("dispose",H)),B=j}if(B.visible=v.visible,B.wireframe=v.wireframe,I===on?B.side=v.shadowSide!==null?v.shadowSide:v.side:B.side=v.shadowSide!==null?v.shadowSide:d[v.side],B.alphaMap=v.alphaMap,B.alphaTest=v.alphaTest,B.map=v.map,B.clipShadows=v.clipShadows,B.clippingPlanes=v.clippingPlanes,B.clipIntersection=v.clipIntersection,B.displacementMap=v.displacementMap,B.displacementScale=v.displacementScale,B.displacementBias=v.displacementBias,B.wireframeLinewidth=v.wireframeLinewidth,B.linewidth=v.linewidth,M.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const V=i.properties.get(B);V.light=M}return B}function D(b,v,M,I,B){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&B===on)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const F=t.update(b),q=b.material;if(Array.isArray(q)){const j=F.groups;for(let W=0,J=j.length;W<J;W++){const z=j[W],rt=q[z.materialIndex];if(rt&&rt.visible){const gt=x(b,rt,I,B);b.onBeforeShadow(i,b,v,M,F,gt,z),i.renderBufferDirect(M,null,F,gt,b,z),b.onAfterShadow(i,b,v,M,F,gt,z)}}}else if(q.visible){const j=x(b,q,I,B);b.onBeforeShadow(i,b,v,M,F,j,null),i.renderBufferDirect(M,null,F,j,b,null),b.onAfterShadow(i,b,v,M,F,j,null)}}const V=b.children;for(let F=0,q=V.length;F<q;F++)D(V[F],v,M,I,B)}function H(b){b.target.removeEventListener("dispose",H);for(const M in c){const I=c[M],B=b.target.uuid;B in I&&(I[B].dispose(),delete I[B])}}}const Kf={[mr]:Er,[Br]:Ir,[Cr]:_r,[Ei]:Qr,[Er]:mr,[Ir]:Br,[_r]:Cr,[Qr]:Ei};function qf(i,t){function e(){let T=!1;const it=new Ae;let G=null;const K=new Ae(0,0,0,0);return{setMask:function(ct){G!==ct&&!T&&(i.colorMask(ct,ct,ct,ct),G=ct)},setLocked:function(ct){T=ct},setClear:function(ct,at,yt,ne,he){he===!0&&(ct*=ne,at*=ne,yt*=ne),it.set(ct,at,yt,ne),K.equals(it)===!1&&(i.clearColor(ct,at,yt,ne),K.copy(it))},reset:function(){T=!1,G=null,K.set(-1,0,0,0)}}}function n(){let T=!1,it=!1,G=null,K=null,ct=null;return{setReversed:function(at){if(it!==at){const yt=t.get("EXT_clip_control");it?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT);const ne=ct;ct=null,this.setClear(ne)}it=at},getReversed:function(){return it},setTest:function(at){at?st(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(at){G!==at&&!T&&(i.depthMask(at),G=at)},setFunc:function(at){if(it&&(at=Kf[at]),K!==at){switch(at){case mr:i.depthFunc(i.NEVER);break;case Er:i.depthFunc(i.ALWAYS);break;case Br:i.depthFunc(i.LESS);break;case Ei:i.depthFunc(i.LEQUAL);break;case Cr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case Ir:i.depthFunc(i.GREATER);break;case _r:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=at}},setLocked:function(at){T=at},setClear:function(at){ct!==at&&(it&&(at=1-at),i.clearDepth(at),ct=at)},reset:function(){T=!1,G=null,K=null,ct=null,it=!1}}}function A(){let T=!1,it=null,G=null,K=null,ct=null,at=null,yt=null,ne=null,he=null;return{setTest:function(Kt){T||(Kt?st(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(Kt){it!==Kt&&!T&&(i.stencilMask(Kt),it=Kt)},setFunc:function(Kt,Ue,tn){(G!==Kt||K!==Ue||ct!==tn)&&(i.stencilFunc(Kt,Ue,tn),G=Kt,K=Ue,ct=tn)},setOp:function(Kt,Ue,tn){(at!==Kt||yt!==Ue||ne!==tn)&&(i.stencilOp(Kt,Ue,tn),at=Kt,yt=Ue,ne=tn)},setLocked:function(Kt){T=Kt},setClear:function(Kt){he!==Kt&&(i.clearStencil(Kt),he=Kt)},reset:function(){T=!1,it=null,G=null,K=null,ct=null,at=null,yt=null,ne=null,he=null}}}const r=new e,o=new n,s=new A,a=new WeakMap,c=new WeakMap;let l={},d={},u=new WeakMap,f=[],m=null,C=!1,h=null,g=null,y=null,x=null,D=null,H=null,b=null,v=new kt(0,0,0),M=0,I=!1,B=null,O=null,V=null,F=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=J>=2);let rt=null,gt={};const Bt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),jt=new Ae().fromArray(Bt),Y=new Ae().fromArray(wt);function et(T,it,G,K){const ct=new Uint8Array(4),at=i.createTexture();i.bindTexture(T,at),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<G;yt++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return at}const pt={};pt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),st(i.DEPTH_TEST),o.setFunc(Ei),Rt(!1),Pt(Ls),st(i.CULL_FACE),S(Dn);function st(T){l[T]!==!0&&(i.enable(T),l[T]=!0)}function Dt(T){l[T]!==!1&&(i.disable(T),l[T]=!1)}function St(T,it){return d[T]!==it?(i.bindFramebuffer(T,it),d[T]=it,T===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),T===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Nt(T,it){let G=f,K=!1;if(T){G=u.get(it),G===void 0&&(G=[],u.set(it,G));const ct=T.textures;if(G.length!==ct.length||G[0]!==i.COLOR_ATTACHMENT0){for(let at=0,yt=ct.length;at<yt;at++)G[at]=i.COLOR_ATTACHMENT0+at;G.length=ct.length,K=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,K=!0);K&&i.drawBuffers(G)}function te(T){return m!==T?(i.useProgram(T),m=T,!0):!1}const Ut={[Un]:i.FUNC_ADD,[Zc]:i.FUNC_SUBTRACT,[Jc]:i.FUNC_REVERSE_SUBTRACT};Ut[$c]=i.MIN,Ut[tl]=i.MAX;const se={[el]:i.ZERO,[nl]:i.ONE,[il]:i.SRC_COLOR,[fr]:i.SRC_ALPHA,[cl]:i.SRC_ALPHA_SATURATE,[ol]:i.DST_COLOR,[rl]:i.DST_ALPHA,[Al]:i.ONE_MINUS_SRC_COLOR,[pr]:i.ONE_MINUS_SRC_ALPHA,[al]:i.ONE_MINUS_DST_COLOR,[sl]:i.ONE_MINUS_DST_ALPHA,[ll]:i.CONSTANT_COLOR,[gl]:i.ONE_MINUS_CONSTANT_COLOR,[dl]:i.CONSTANT_ALPHA,[ul]:i.ONE_MINUS_CONSTANT_ALPHA};function S(T,it,G,K,ct,at,yt,ne,he,Kt){if(T===Dn){C===!0&&(Dt(i.BLEND),C=!1);return}if(C===!1&&(st(i.BLEND),C=!0),T!==jc){if(T!==h||Kt!==I){if((g!==Un||D!==Un)&&(i.blendEquation(i.FUNC_ADD),g=Un,D=Un),Kt)switch(T){case fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Us:i.blendFunc(i.ONE,i.ONE);break;case Fs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Us:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}y=null,x=null,H=null,b=null,v.set(0,0,0),M=0,h=T,I=Kt}return}ct=ct||it,at=at||G,yt=yt||K,(it!==g||ct!==D)&&(i.blendEquationSeparate(Ut[it],Ut[ct]),g=it,D=ct),(G!==y||K!==x||at!==H||yt!==b)&&(i.blendFuncSeparate(se[G],se[K],se[at],se[yt]),y=G,x=K,H=at,b=yt),(ne.equals(v)===!1||he!==M)&&(i.blendColor(ne.r,ne.g,ne.b,he),v.copy(ne),M=he),h=T,I=!1}function be(T,it){T.side===ke?Dt(i.CULL_FACE):st(i.CULL_FACE);let G=T.side===xe;it&&(G=!G),Rt(G),T.blending===fi&&T.transparent===!1?S(Dn):S(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),r.setMask(T.colorWrite);const K=T.stencilWrite;s.setTest(K),K&&(s.setMask(T.stencilWriteMask),s.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),s.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Jt(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(T){B!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),B=T)}function Pt(T){T!==Xc?(st(i.CULL_FACE),T!==O&&(T===Ls?i.cullFace(i.BACK):T===Kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),O=T}function Ct(T){T!==V&&(W&&i.lineWidth(T),V=T)}function Jt(T,it,G){T?(st(i.POLYGON_OFFSET_FILL),(F!==it||q!==G)&&(i.polygonOffset(it,G),F=it,q=G)):Dt(i.POLYGON_OFFSET_FILL)}function Et(T){T?st(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function _(T){T===void 0&&(T=i.TEXTURE0+j-1),rt!==T&&(i.activeTexture(T),rt=T)}function p(T,it,G){G===void 0&&(rt===null?G=i.TEXTURE0+j-1:G=rt);let K=gt[G];K===void 0&&(K={type:void 0,texture:void 0},gt[G]=K),(K.type!==T||K.texture!==it)&&(rt!==G&&(i.activeTexture(G),rt=G),i.bindTexture(T,it||pt[T]),K.type=T,K.texture=it)}function R(){const T=gt[rt];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function k(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ft(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function _t(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function vt(T){jt.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),jt.copy(T))}function ht(T){Y.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),Y.copy(T))}function Lt(T,it){let G=c.get(it);G===void 0&&(G=new WeakMap,c.set(it,G));let K=G.get(T);K===void 0&&(K=i.getUniformBlockIndex(it,T.name),G.set(T,K))}function Tt(T,it){const K=c.get(it).get(T);a.get(it)!==K&&(i.uniformBlockBinding(it,K,T.__bindingPointIndex),a.set(it,K))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},rt=null,gt={},d={},u=new WeakMap,f=[],m=null,C=!1,h=null,g=null,y=null,x=null,D=null,H=null,b=null,v=new kt(0,0,0),M=0,I=!1,B=null,O=null,V=null,F=null,q=null,jt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:st,disable:Dt,bindFramebuffer:St,drawBuffers:Nt,useProgram:te,setBlending:S,setMaterial:be,setFlipSided:Rt,setCullFace:Pt,setLineWidth:Ct,setPolygonOffset:Jt,setScissorTest:Et,activeTexture:_,bindTexture:p,unbindTexture:R,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:ut,texImage3D:_t,updateUBOMapping:Lt,uniformBlockBinding:Tt,texStorage2D:Ft,texStorage3D:tt,texSubImage2D:k,texSubImage3D:mt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:vt,viewport:ht,reset:Zt}}function jf(i,t,e,n,A,r,o){const s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,l=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(_,p){return f?new OffscreenCanvas(_,p):Gi("canvas")}function C(_,p,R){let X=1;const Z=Et(_);if((Z.width>R||Z.height>R)&&(X=R/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const k=Math.floor(X*Z.width),mt=Math.floor(X*Z.height);d===void 0&&(d=m(k,mt));const ot=p?m(k,mt):d;return ot.width=k,ot.height=mt,ot.getContext("2d").drawImage(_,0,0,k,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+k+"x"+mt+")."),ot}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),_;return _}function h(_){return _.generateMipmaps}function g(_){i.generateMipmap(_)}function y(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(_,p,R,X,Z=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let k=p;if(p===i.RED&&(R===i.FLOAT&&(k=i.R32F),R===i.HALF_FLOAT&&(k=i.R16F),R===i.UNSIGNED_BYTE&&(k=i.R8)),p===i.RED_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.R8UI),R===i.UNSIGNED_SHORT&&(k=i.R16UI),R===i.UNSIGNED_INT&&(k=i.R32UI),R===i.BYTE&&(k=i.R8I),R===i.SHORT&&(k=i.R16I),R===i.INT&&(k=i.R32I)),p===i.RG&&(R===i.FLOAT&&(k=i.RG32F),R===i.HALF_FLOAT&&(k=i.RG16F),R===i.UNSIGNED_BYTE&&(k=i.RG8)),p===i.RG_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.RG8UI),R===i.UNSIGNED_SHORT&&(k=i.RG16UI),R===i.UNSIGNED_INT&&(k=i.RG32UI),R===i.BYTE&&(k=i.RG8I),R===i.SHORT&&(k=i.RG16I),R===i.INT&&(k=i.RG32I)),p===i.RGB_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.RGB8UI),R===i.UNSIGNED_SHORT&&(k=i.RGB16UI),R===i.UNSIGNED_INT&&(k=i.RGB32UI),R===i.BYTE&&(k=i.RGB8I),R===i.SHORT&&(k=i.RGB16I),R===i.INT&&(k=i.RGB32I)),p===i.RGBA_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),R===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),R===i.UNSIGNED_INT&&(k=i.RGBA32UI),R===i.BYTE&&(k=i.RGBA8I),R===i.SHORT&&(k=i.RGBA16I),R===i.INT&&(k=i.RGBA32I)),p===i.RGB&&R===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),p===i.RGBA){const mt=Z?MA:Vt.getTransfer(X);R===i.FLOAT&&(k=i.RGBA32F),R===i.HALF_FLOAT&&(k=i.RGBA16F),R===i.UNSIGNED_BYTE&&(k=mt===qt?i.SRGB8_ALPHA8:i.RGBA8),R===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),R===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function D(_,p){let R;return _?p===null||p===Yn||p===Qi?R=i.DEPTH24_STENCIL8:p===cn?R=i.DEPTH32F_STENCIL8:p===Fi&&(R=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Yn||p===Qi?R=i.DEPTH_COMPONENT24:p===cn?R=i.DEPTH_COMPONENT32F:p===Fi&&(R=i.DEPTH_COMPONENT16),R}function H(_,p){return h(_)===!0||_.isFramebufferTexture&&_.minFilter!==Ke&&_.minFilter!==We?Math.log2(Math.max(p.width,p.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?p.mipmaps.length:1}function b(_){const p=_.target;p.removeEventListener("dispose",b),M(p),p.isVideoTexture&&l.delete(p)}function v(_){const p=_.target;p.removeEventListener("dispose",v),B(p)}function M(_){const p=n.get(_);if(p.__webglInit===void 0)return;const R=_.source,X=u.get(R);if(X){const Z=X[p.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(_),Object.keys(X).length===0&&u.delete(R)}n.remove(_)}function I(_){const p=n.get(_);i.deleteTexture(p.__webglTexture);const R=_.source,X=u.get(R);delete X[p.__cacheKey],o.memory.textures--}function B(_){const p=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(p.__webglFramebuffer[X]))for(let Z=0;Z<p.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(p.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(p.__webglFramebuffer[X]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[X])}else{if(Array.isArray(p.__webglFramebuffer))for(let X=0;X<p.__webglFramebuffer.length;X++)i.deleteFramebuffer(p.__webglFramebuffer[X]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let X=0;X<p.__webglColorRenderbuffer.length;X++)p.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[X]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const R=_.textures;for(let X=0,Z=R.length;X<Z;X++){const k=n.get(R[X]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(R[X])}n.remove(_)}let O=0;function V(){O=0}function F(){const _=O;return _>=A.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+A.maxTextures),O+=1,_}function q(_){const p=[];return p.push(_.wrapS),p.push(_.wrapT),p.push(_.wrapR||0),p.push(_.magFilter),p.push(_.minFilter),p.push(_.anisotropy),p.push(_.internalFormat),p.push(_.format),p.push(_.type),p.push(_.generateMipmaps),p.push(_.premultiplyAlpha),p.push(_.flipY),p.push(_.unpackAlignment),p.push(_.colorSpace),p.join()}function j(_,p){const R=n.get(_);if(_.isVideoTexture&&Ct(_),_.isRenderTargetTexture===!1&&_.version>0&&R.__version!==_.version){const X=_.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(R,_,p);return}}e.bindTexture(i.TEXTURE_2D,R.__webglTexture,i.TEXTURE0+p)}function W(_,p){const R=n.get(_);if(_.version>0&&R.__version!==_.version){Y(R,_,p);return}e.bindTexture(i.TEXTURE_2D_ARRAY,R.__webglTexture,i.TEXTURE0+p)}function J(_,p){const R=n.get(_);if(_.version>0&&R.__version!==_.version){Y(R,_,p);return}e.bindTexture(i.TEXTURE_3D,R.__webglTexture,i.TEXTURE0+p)}function z(_,p){const R=n.get(_);if(_.version>0&&R.__version!==_.version){et(R,_,p);return}e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+p)}const rt={[xr]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[Sr]:i.MIRRORED_REPEAT},gt={[Ke]:i.NEAREST,[_l]:i.NEAREST_MIPMAP_NEAREST,[tA]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[LA]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},Bt={[Sl]:i.NEVER,[wl]:i.ALWAYS,[Ml]:i.LESS,[la]:i.LEQUAL,[yl]:i.EQUAL,[bl]:i.GEQUAL,[Ol]:i.GREATER,[Tl]:i.NOTEQUAL};function wt(_,p){if(p.type===cn&&t.has("OES_texture_float_linear")===!1&&(p.magFilter===We||p.magFilter===LA||p.magFilter===tA||p.magFilter===Gn||p.minFilter===We||p.minFilter===LA||p.minFilter===tA||p.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,rt[p.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,rt[p.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,rt[p.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,gt[p.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,gt[p.minFilter]),p.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Bt[p.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Ke||p.minFilter!==tA&&p.minFilter!==Gn||p.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){const R=t.get("EXT_texture_filter_anisotropic");i.texParameterf(_,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,A.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function jt(_,p){let R=!1;_.__webglInit===void 0&&(_.__webglInit=!0,p.addEventListener("dispose",b));const X=p.source;let Z=u.get(X);Z===void 0&&(Z={},u.set(X,Z));const k=q(p);if(k!==_.__cacheKey){Z[k]===void 0&&(Z[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,R=!0),Z[k].usedTimes++;const mt=Z[_.__cacheKey];mt!==void 0&&(Z[_.__cacheKey].usedTimes--,mt.usedTimes===0&&I(p)),_.__cacheKey=k,_.__webglTexture=Z[k].texture}return R}function Y(_,p,R){let X=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(X=i.TEXTURE_3D);const Z=jt(_,p),k=p.source;e.bindTexture(X,_.__webglTexture,i.TEXTURE0+R);const mt=n.get(k);if(k.version!==mt.__version||Z===!0){e.activeTexture(i.TEXTURE0+R);const ot=Vt.getPrimaries(Vt.workingColorSpace),dt=p.colorSpace===_n?null:Vt.getPrimaries(p.colorSpace),Ft=p.colorSpace===_n||ot===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let tt=C(p.image,!1,A.maxTextureSize);tt=Jt(p,tt);const ut=r.convert(p.format,p.colorSpace),_t=r.convert(p.type);let vt=x(p.internalFormat,ut,_t,p.colorSpace,p.isVideoTexture);wt(X,p);let ht;const Lt=p.mipmaps,Tt=p.isVideoTexture!==!0,Zt=mt.__version===void 0||Z===!0,T=k.dataReady,it=H(p,tt);if(p.isDepthTexture)vt=D(p.format===Ii,p.type),Zt&&(Tt?e.texStorage2D(i.TEXTURE_2D,1,vt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,vt,tt.width,tt.height,0,ut,_t,null));else if(p.isDataTexture)if(Lt.length>0){Tt&&Zt&&e.texStorage2D(i.TEXTURE_2D,it,vt,Lt[0].width,Lt[0].height);for(let G=0,K=Lt.length;G<K;G++)ht=Lt[G],Tt?T&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ht.width,ht.height,ut,_t,ht.data):e.texImage2D(i.TEXTURE_2D,G,vt,ht.width,ht.height,0,ut,_t,ht.data);p.generateMipmaps=!1}else Tt?(Zt&&e.texStorage2D(i.TEXTURE_2D,it,vt,tt.width,tt.height),T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,ut,_t,tt.data)):e.texImage2D(i.TEXTURE_2D,0,vt,tt.width,tt.height,0,ut,_t,tt.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Tt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,vt,Lt[0].width,Lt[0].height,tt.depth);for(let G=0,K=Lt.length;G<K;G++)if(ht=Lt[G],p.format!==Xe)if(ut!==null)if(Tt){if(T)if(p.layerUpdates.size>0){const ct=go(ht.width,ht.height,p.format,p.type);for(const at of p.layerUpdates){const yt=ht.data.subarray(at*ct/ht.data.BYTES_PER_ELEMENT,(at+1)*ct/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,at,ht.width,ht.height,1,ut,yt)}p.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ht.width,ht.height,tt.depth,ut,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,vt,ht.width,ht.height,tt.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Tt?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ht.width,ht.height,tt.depth,ut,_t,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,vt,ht.width,ht.height,tt.depth,0,ut,_t,ht.data)}else{Tt&&Zt&&e.texStorage2D(i.TEXTURE_2D,it,vt,Lt[0].width,Lt[0].height);for(let G=0,K=Lt.length;G<K;G++)ht=Lt[G],p.format!==Xe?ut!==null?Tt?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,ht.width,ht.height,ut,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,G,vt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?T&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ht.width,ht.height,ut,_t,ht.data):e.texImage2D(i.TEXTURE_2D,G,vt,ht.width,ht.height,0,ut,_t,ht.data)}else if(p.isDataArrayTexture)if(Tt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,vt,tt.width,tt.height,tt.depth),T)if(p.layerUpdates.size>0){const G=go(tt.width,tt.height,p.format,p.type);for(const K of p.layerUpdates){const ct=tt.data.subarray(K*G/tt.data.BYTES_PER_ELEMENT,(K+1)*G/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,ut,_t,ct)}p.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,_t,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,tt.width,tt.height,tt.depth,0,ut,_t,tt.data);else if(p.isData3DTexture)Tt?(Zt&&e.texStorage3D(i.TEXTURE_3D,it,vt,tt.width,tt.height,tt.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,_t,tt.data)):e.texImage3D(i.TEXTURE_3D,0,vt,tt.width,tt.height,tt.depth,0,ut,_t,tt.data);else if(p.isFramebufferTexture){if(Zt)if(Tt)e.texStorage2D(i.TEXTURE_2D,it,vt,tt.width,tt.height);else{let G=tt.width,K=tt.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,vt,G,K,0,ut,_t,null),G>>=1,K>>=1}}else if(Lt.length>0){if(Tt&&Zt){const G=Et(Lt[0]);e.texStorage2D(i.TEXTURE_2D,it,vt,G.width,G.height)}for(let G=0,K=Lt.length;G<K;G++)ht=Lt[G],Tt?T&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ut,_t,ht):e.texImage2D(i.TEXTURE_2D,G,vt,ut,_t,ht);p.generateMipmaps=!1}else if(Tt){if(Zt){const G=Et(tt);e.texStorage2D(i.TEXTURE_2D,it,vt,G.width,G.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,_t,tt)}else e.texImage2D(i.TEXTURE_2D,0,vt,ut,_t,tt);h(p)&&g(X),mt.__version=k.version,p.onUpdate&&p.onUpdate(p)}_.__version=p.version}function et(_,p,R){if(p.image.length!==6)return;const X=jt(_,p),Z=p.source;e.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+R);const k=n.get(Z);if(Z.version!==k.__version||X===!0){e.activeTexture(i.TEXTURE0+R);const mt=Vt.getPrimaries(Vt.workingColorSpace),ot=p.colorSpace===_n?null:Vt.getPrimaries(p.colorSpace),dt=p.colorSpace===_n||mt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ft=p.isCompressedTexture||p.image[0].isCompressedTexture,tt=p.image[0]&&p.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!Ft&&!tt?ut[K]=C(p.image[K],!0,A.maxCubemapSize):ut[K]=tt?p.image[K].image:p.image[K],ut[K]=Jt(p,ut[K]);const _t=ut[0],vt=r.convert(p.format,p.colorSpace),ht=r.convert(p.type),Lt=x(p.internalFormat,vt,ht,p.colorSpace),Tt=p.isVideoTexture!==!0,Zt=k.__version===void 0||X===!0,T=Z.dataReady;let it=H(p,_t);wt(i.TEXTURE_CUBE_MAP,p);let G;if(Ft){Tt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Lt,_t.width,_t.height);for(let K=0;K<6;K++){G=ut[K].mipmaps;for(let ct=0;ct<G.length;ct++){const at=G[ct];p.format!==Xe?vt!==null?Tt?T&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,at.width,at.height,vt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Lt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,at.width,at.height,vt,ht,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Lt,at.width,at.height,0,vt,ht,at.data)}}}else{if(G=p.mipmaps,Tt&&Zt){G.length>0&&it++;const K=Et(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Lt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Tt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,vt,ht,ut[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Lt,ut[K].width,ut[K].height,0,vt,ht,ut[K].data);for(let ct=0;ct<G.length;ct++){const yt=G[ct].image[K].image;Tt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,yt.width,yt.height,vt,ht,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Lt,yt.width,yt.height,0,vt,ht,yt.data)}}else{Tt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,vt,ht,ut[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Lt,vt,ht,ut[K]);for(let ct=0;ct<G.length;ct++){const at=G[ct];Tt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,vt,ht,at.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Lt,vt,ht,at.image[K])}}}h(p)&&g(i.TEXTURE_CUBE_MAP),k.__version=Z.version,p.onUpdate&&p.onUpdate(p)}_.__version=p.version}function pt(_,p,R,X,Z,k){const mt=r.convert(R.format,R.colorSpace),ot=r.convert(R.type),dt=x(R.internalFormat,mt,ot,R.colorSpace),Ft=n.get(p),tt=n.get(R);if(tt.__renderTarget=p,!Ft.__hasExternalTextures){const ut=Math.max(1,p.width>>k),_t=Math.max(1,p.height>>k);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,k,dt,ut,_t,p.depth,0,mt,ot,null):e.texImage2D(Z,k,dt,ut,_t,0,mt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,_),Pt(p)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,tt.__webglTexture,0,Rt(p)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,tt.__webglTexture,k),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(_,p,R){if(i.bindRenderbuffer(i.RENDERBUFFER,_),p.depthBuffer){const X=p.depthTexture,Z=X&&X.isDepthTexture?X.type:null,k=D(p.stencilBuffer,Z),mt=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Rt(p);Pt(p)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,k,p.width,p.height):R?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,k,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,k,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,_)}else{const X=p.textures;for(let Z=0;Z<X.length;Z++){const k=X[Z],mt=r.convert(k.format,k.colorSpace),ot=r.convert(k.type),dt=x(k.internalFormat,mt,ot,k.colorSpace),Ft=Rt(p);R&&Pt(p)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,dt,p.width,p.height):Pt(p)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,dt,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,dt,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(_,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,_),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(p.depthTexture);X.__renderTarget=p,(!X.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),j(p.depthTexture,0);const Z=X.__webglTexture,k=Rt(p);if(p.depthTexture.format===pi)Pt(p)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(p.depthTexture.format===Ii)Pt(p)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function St(_){const p=n.get(_),R=_.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==_.depthTexture){const X=_.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),X){const Z=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),p.__depthDisposeCallback=Z}p.__boundDepthTexture=X}if(_.depthTexture&&!p.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Dt(p.__webglFramebuffer,_)}else if(R){p.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[X]),p.__webglDepthbuffer[X]===void 0)p.__webglDepthbuffer[X]=i.createRenderbuffer(),st(p.__webglDepthbuffer[X],_,!1);else{const Z=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=p.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,k)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),st(p.__webglDepthbuffer,_,!1);else{const X=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(_,p,R){const X=n.get(_);p!==void 0&&pt(X.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),R!==void 0&&St(_)}function te(_){const p=_.texture,R=n.get(_),X=n.get(p);_.addEventListener("dispose",v);const Z=_.textures,k=_.isWebGLCubeRenderTarget===!0,mt=Z.length>1;if(mt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=p.version,o.memory.textures++),k){R.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(p.mipmaps&&p.mipmaps.length>0){R.__webglFramebuffer[ot]=[];for(let dt=0;dt<p.mipmaps.length;dt++)R.__webglFramebuffer[ot][dt]=i.createFramebuffer()}else R.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){R.__webglFramebuffer=[];for(let ot=0;ot<p.mipmaps.length;ot++)R.__webglFramebuffer[ot]=i.createFramebuffer()}else R.__webglFramebuffer=i.createFramebuffer();if(mt)for(let ot=0,dt=Z.length;ot<dt;ot++){const Ft=n.get(Z[ot]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(_.samples>0&&Pt(_)===!1){R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const dt=Z[ot];R.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,R.__webglColorRenderbuffer[ot]);const Ft=r.convert(dt.format,dt.colorSpace),tt=r.convert(dt.type),ut=x(dt.internalFormat,Ft,tt,dt.colorSpace,_.isXRRenderTarget===!0),_t=Rt(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,ut,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,R.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),st(R.__webglDepthRenderbuffer,_,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),wt(i.TEXTURE_CUBE_MAP,p);for(let ot=0;ot<6;ot++)if(p.mipmaps&&p.mipmaps.length>0)for(let dt=0;dt<p.mipmaps.length;dt++)pt(R.__webglFramebuffer[ot][dt],_,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else pt(R.__webglFramebuffer[ot],_,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);h(p)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let ot=0,dt=Z.length;ot<dt;ot++){const Ft=Z[ot],tt=n.get(Ft);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),wt(i.TEXTURE_2D,Ft),pt(R.__webglFramebuffer,_,Ft,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),h(Ft)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(ot=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,X.__webglTexture),wt(ot,p),p.mipmaps&&p.mipmaps.length>0)for(let dt=0;dt<p.mipmaps.length;dt++)pt(R.__webglFramebuffer[dt],_,p,i.COLOR_ATTACHMENT0,ot,dt);else pt(R.__webglFramebuffer,_,p,i.COLOR_ATTACHMENT0,ot,0);h(p)&&g(ot),e.unbindTexture()}_.depthBuffer&&St(_)}function Ut(_){const p=_.textures;for(let R=0,X=p.length;R<X;R++){const Z=p[R];if(h(Z)){const k=y(_),mt=n.get(Z).__webglTexture;e.bindTexture(k,mt),g(k),e.unbindTexture()}}}const se=[],S=[];function be(_){if(_.samples>0){if(Pt(_)===!1){const p=_.textures,R=_.width,X=_.height;let Z=i.COLOR_BUFFER_BIT;const k=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(_),ot=p.length>1;if(ot)for(let dt=0;dt<p.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let dt=0;dt<p.length;dt++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);const Ft=n.get(p[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,R,X,0,0,R,X,Z,i.NEAREST),a===!0&&(se.length=0,S.length=0,se.push(i.COLOR_ATTACHMENT0+dt),_.depthBuffer&&_.resolveDepthBuffer===!1&&(se.push(k),S.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,S)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<p.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);const Ft=n.get(p[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&a){const p=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function Rt(_){return Math.min(A.maxSamples,_.samples)}function Pt(_){const p=n.get(_);return _.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function Ct(_){const p=o.render.frame;l.get(_)!==p&&(l.set(_,p),_.update())}function Jt(_,p){const R=_.colorSpace,X=_.format,Z=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||R!==_i&&R!==_n&&(Vt.getTransfer(R)===qt?(X!==Xe||Z!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),p}function Et(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=Nt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Pt}function Zf(i,t){function e(n,A=_n){let r;const o=Vt.getTransfer(A);if(n===fn)return i.UNSIGNED_BYTE;if(n===cs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ls)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ea)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$o)return i.BYTE;if(n===ta)return i.SHORT;if(n===Fi)return i.UNSIGNED_SHORT;if(n===as)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===na)return i.ALPHA;if(n===ia)return i.RGB;if(n===Xe)return i.RGBA;if(n===Aa)return i.LUMINANCE;if(n===ra)return i.LUMINANCE_ALPHA;if(n===pi)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===sa)return i.RED;if(n===gs)return i.RED_INTEGER;if(n===oa)return i.RG;if(n===ds)return i.RG_INTEGER;if(n===us)return i.RGBA_INTEGER;if(n===IA||n===_A||n===DA||n===vA)if(o===qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===IA)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_A)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===DA)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vA)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===IA)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_A)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===DA)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vA)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mr||n===yr||n===Or||n===Tr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===br||n===wr||n===Nr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===br||n===wr)return o===qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hr||n===Rr||n===Pr||n===Lr||n===Ur||n===Fr||n===Gr||n===zr||n===Vr||n===kr||n===Yr||n===Wr||n===Xr||n===Kr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ur)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xA||n===qr||n===jr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xA)return o===qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===aa||n===Zr||n===Jr||n===$r)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xA)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$r)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Jf={type:"move"};class hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new EA,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new EA,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new EA,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let A=null,r=null,o=null;const s=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const C of t.hand.values()){const h=e.getJointPose(C,n),g=this._getHandJoint(c,C);h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=h.radius),g.visible=h!==null}const l=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=l.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1));s!==null&&(A=e.getPose(t.targetRaySpace,n),A===null&&r!==null&&(A=r),A!==null&&(s.matrix.fromArray(A.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,A.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(A.linearVelocity)):s.hasLinearVelocity=!1,A.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(A.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return s!==null&&(s.visible=A!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new EA;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $f=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tp=`
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

}`;class ep{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const A=new Ee,r=t.properties.get(A);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=A}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Mn({vertexShader:$f,fragmentShader:tp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class np extends Mi{constructor(t,e){super();const n=this;let A=null,r=1,o=null,s="local-floor",a=1,c=null,l=null,d=null,u=null,f=null,m=null;const C=new ep,h=e.getContextAttributes();let g=null,y=null;const x=[],D=[],H=new Xt;let b=null;const v=new Re;v.viewport=new Ae;const M=new Re;M.viewport=new Ae;const I=[v,M],B=new Ig;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=x[Y];return et===void 0&&(et=new hr,x[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=x[Y];return et===void 0&&(et=new hr,x[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=x[Y];return et===void 0&&(et=new hr,x[Y]=et),et.getHandSpace()};function F(Y){const et=D.indexOf(Y.inputSource);if(et===-1)return;const pt=x[et];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,c||o),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){A.removeEventListener("select",F),A.removeEventListener("selectstart",F),A.removeEventListener("selectend",F),A.removeEventListener("squeeze",F),A.removeEventListener("squeezestart",F),A.removeEventListener("squeezeend",F),A.removeEventListener("end",q),A.removeEventListener("inputsourceschange",j);for(let Y=0;Y<x.length;Y++){const et=D[Y];et!==null&&(D[Y]=null,x[Y].disconnect(et))}O=null,V=null,C.reset(),t.setRenderTarget(g),f=null,u=null,d=null,A=null,y=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return A},this.setSession=async function(Y){if(A=Y,A!==null){if(g=t.getRenderTarget(),A.addEventListener("select",F),A.addEventListener("selectstart",F),A.addEventListener("selectend",F),A.addEventListener("squeeze",F),A.addEventListener("squeezestart",F),A.addEventListener("squeezeend",F),A.addEventListener("end",q),A.addEventListener("inputsourceschange",j),h.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(H),A.enabledFeatures!==void 0&&A.enabledFeatures.includes("layers")){let pt=null,st=null,Dt=null;h.depth&&(Dt=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=h.stencil?Ii:pi,st=h.stencil?Qi:Yn);const St={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};d=new XRWebGLBinding(A,e),u=d.createProjectionLayer(St),A.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Wn(u.textureWidth,u.textureHeight,{format:Xe,type:fn,depthTexture:new Qa(u.textureWidth,u.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const pt={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(A,e,pt),A.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Wn(f.framebufferWidth,f.framebufferHeight,{format:Xe,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil})}y.isXRRenderTarget=!0,this.setFoveation(a),c=null,o=await A.requestReferenceSpace(s),jt.setContext(A),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(A!==null)return A.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function j(Y){for(let et=0;et<Y.removed.length;et++){const pt=Y.removed[et],st=D.indexOf(pt);st>=0&&(D[st]=null,x[st].disconnect(pt))}for(let et=0;et<Y.added.length;et++){const pt=Y.added[et];let st=D.indexOf(pt);if(st===-1){for(let St=0;St<x.length;St++)if(St>=D.length){D.push(pt),st=St;break}else if(D[St]===null){D[St]=pt,st=St;break}if(st===-1)break}const Dt=x[st];Dt&&Dt.connect(pt)}}const W=new U,J=new U;function z(Y,et,pt){W.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(pt.matrixWorld);const st=W.distanceTo(J),Dt=et.projectionMatrix.elements,St=pt.projectionMatrix.elements,Nt=Dt[14]/(Dt[10]-1),te=Dt[14]/(Dt[10]+1),Ut=(Dt[9]+1)/Dt[5],se=(Dt[9]-1)/Dt[5],S=(Dt[8]-1)/Dt[0],be=(St[8]+1)/St[0],Rt=Nt*S,Pt=Nt*be,Ct=st/(-S+be),Jt=Ct*-S;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Jt),Y.translateZ(Ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Dt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Et=Nt+Ct,_=te+Ct,p=Rt-Jt,R=Pt+(st-Jt),X=Ut*te/_*Et,Z=se*te/_*Et;Y.projectionMatrix.makePerspective(p,R,X,Z,Et,_),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(A===null)return;let et=Y.near,pt=Y.far;C.texture!==null&&(C.depthNear>0&&(et=C.depthNear),C.depthFar>0&&(pt=C.depthFar)),B.near=M.near=v.near=et,B.far=M.far=v.far=pt,(O!==B.near||V!==B.far)&&(A.updateRenderState({depthNear:B.near,depthFar:B.far}),O=B.near,V=B.far),v.layers.mask=Y.layers.mask|2,M.layers.mask=Y.layers.mask|4,B.layers.mask=v.layers.mask|M.layers.mask;const st=Y.parent,Dt=B.cameras;rt(B,st);for(let St=0;St<Dt.length;St++)rt(Dt[St],st);Dt.length===2?z(B,v,M):B.projectionMatrix.copy(v.projectionMatrix),gt(Y,B,st)};function gt(Y,et,pt){pt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ts*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return a},this.setFoveation=function(Y){a=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(B)};let Bt=null;function wt(Y,et){if(l=et.getViewerPose(c||o),m=et,l!==null){const pt=l.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let st=!1;pt.length!==B.cameras.length&&(B.cameras.length=0,st=!0);for(let St=0;St<pt.length;St++){const Nt=pt[St];let te=null;if(f!==null)te=f.getViewport(Nt);else{const se=d.getViewSubImage(u,Nt);te=se.viewport,St===0&&(t.setRenderTargetTextures(y,se.colorTexture,u.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(y))}let Ut=I[St];Ut===void 0&&(Ut=new Re,Ut.layers.enable(St),Ut.viewport=new Ae,I[St]=Ut),Ut.matrix.fromArray(Nt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Nt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(te.x,te.y,te.width,te.height),St===0&&(B.matrix.copy(Ut.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),st===!0&&B.cameras.push(Ut)}const Dt=A.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const St=d.getDepthInformation(pt[0]);St&&St.isValid&&St.texture&&C.init(t,St,A.renderState)}}for(let pt=0;pt<x.length;pt++){const st=D[pt],Dt=x[pt];st!==null&&Dt!==void 0&&Dt.update(st,et,c||o)}Bt&&Bt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}const jt=new Da;jt.setAnimationLoop(wt),this.setAnimationLoop=function(Y){Bt=Y},this.dispose=function(){}}}const Rn=new $e,ip=new re;function Ap(i,t){function e(h,g){h.matrixAutoUpdate===!0&&h.updateMatrix(),g.value.copy(h.matrix)}function n(h,g){g.color.getRGB(h.fogColor.value,Ea(i)),g.isFog?(h.fogNear.value=g.near,h.fogFar.value=g.far):g.isFogExp2&&(h.fogDensity.value=g.density)}function A(h,g,y,x,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(h,g):g.isMeshToonMaterial?(r(h,g),d(h,g)):g.isMeshPhongMaterial?(r(h,g),l(h,g)):g.isMeshStandardMaterial?(r(h,g),u(h,g),g.isMeshPhysicalMaterial&&f(h,g,D)):g.isMeshMatcapMaterial?(r(h,g),m(h,g)):g.isMeshDepthMaterial?r(h,g):g.isMeshDistanceMaterial?(r(h,g),C(h,g)):g.isMeshNormalMaterial?r(h,g):g.isLineBasicMaterial?(o(h,g),g.isLineDashedMaterial&&s(h,g)):g.isPointsMaterial?a(h,g,y,x):g.isSpriteMaterial?c(h,g):g.isShadowMaterial?(h.color.value.copy(g.color),h.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(h,g){h.opacity.value=g.opacity,g.color&&h.diffuse.value.copy(g.color),g.emissive&&h.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(h.map.value=g.map,e(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.bumpMap&&(h.bumpMap.value=g.bumpMap,e(g.bumpMap,h.bumpMapTransform),h.bumpScale.value=g.bumpScale,g.side===xe&&(h.bumpScale.value*=-1)),g.normalMap&&(h.normalMap.value=g.normalMap,e(g.normalMap,h.normalMapTransform),h.normalScale.value.copy(g.normalScale),g.side===xe&&h.normalScale.value.negate()),g.displacementMap&&(h.displacementMap.value=g.displacementMap,e(g.displacementMap,h.displacementMapTransform),h.displacementScale.value=g.displacementScale,h.displacementBias.value=g.displacementBias),g.emissiveMap&&(h.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,h.emissiveMapTransform)),g.specularMap&&(h.specularMap.value=g.specularMap,e(g.specularMap,h.specularMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest);const y=t.get(g),x=y.envMap,D=y.envMapRotation;x&&(h.envMap.value=x,Rn.copy(D),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),h.envMapRotation.value.setFromMatrix4(ip.makeRotationFromEuler(Rn)),h.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=g.reflectivity,h.ior.value=g.ior,h.refractionRatio.value=g.refractionRatio),g.lightMap&&(h.lightMap.value=g.lightMap,h.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,h.lightMapTransform)),g.aoMap&&(h.aoMap.value=g.aoMap,h.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,h.aoMapTransform))}function o(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,g.map&&(h.map.value=g.map,e(g.map,h.mapTransform))}function s(h,g){h.dashSize.value=g.dashSize,h.totalSize.value=g.dashSize+g.gapSize,h.scale.value=g.scale}function a(h,g,y,x){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.size.value=g.size*y,h.scale.value=x*.5,g.map&&(h.map.value=g.map,e(g.map,h.uvTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function c(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.rotation.value=g.rotation,g.map&&(h.map.value=g.map,e(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function l(h,g){h.specular.value.copy(g.specular),h.shininess.value=Math.max(g.shininess,1e-4)}function d(h,g){g.gradientMap&&(h.gradientMap.value=g.gradientMap)}function u(h,g){h.metalness.value=g.metalness,g.metalnessMap&&(h.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,h.metalnessMapTransform)),h.roughness.value=g.roughness,g.roughnessMap&&(h.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,h.roughnessMapTransform)),g.envMap&&(h.envMapIntensity.value=g.envMapIntensity)}function f(h,g,y){h.ior.value=g.ior,g.sheen>0&&(h.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),h.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(h.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,h.sheenColorMapTransform)),g.sheenRoughnessMap&&(h.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,h.sheenRoughnessMapTransform))),g.clearcoat>0&&(h.clearcoat.value=g.clearcoat,h.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(h.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,h.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(h.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xe&&h.clearcoatNormalScale.value.negate())),g.dispersion>0&&(h.dispersion.value=g.dispersion),g.iridescence>0&&(h.iridescence.value=g.iridescence,h.iridescenceIOR.value=g.iridescenceIOR,h.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(h.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,h.iridescenceMapTransform)),g.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),g.transmission>0&&(h.transmission.value=g.transmission,h.transmissionSamplerMap.value=y.texture,h.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(h.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,h.transmissionMapTransform)),h.thickness.value=g.thickness,g.thicknessMap&&(h.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=g.attenuationDistance,h.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(h.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(h.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=g.specularIntensity,h.specularColor.value.copy(g.specularColor),g.specularColorMap&&(h.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,h.specularColorMapTransform)),g.specularIntensityMap&&(h.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,h.specularIntensityMapTransform))}function m(h,g){g.matcap&&(h.matcap.value=g.matcap)}function C(h,g){const y=t.get(g).light;h.referencePosition.value.setFromMatrixPosition(y.matrixWorld),h.nearDistance.value=y.shadow.camera.near,h.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:A}}function rp(i,t,e,n){let A={},r={},o=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(y,x){const D=x.program;n.uniformBlockBinding(y,D)}function c(y,x){let D=A[y.id];D===void 0&&(m(y),D=l(y),A[y.id]=D,y.addEventListener("dispose",h));const H=x.program;n.updateUBOMapping(y,H);const b=t.render.frame;r[y.id]!==b&&(u(y),r[y.id]=b)}function l(y){const x=d();y.__bindingPointIndex=x;const D=i.createBuffer(),H=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,H,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,D),D}function d(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=A[y.id],D=y.uniforms,H=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,v=D.length;b<v;b++){const M=Array.isArray(D[b])?D[b]:[D[b]];for(let I=0,B=M.length;I<B;I++){const O=M[I];if(f(O,b,I,H)===!0){const V=O.__offset,F=Array.isArray(O.value)?O.value:[O.value];let q=0;for(let j=0;j<F.length;j++){const W=F[j],J=C(W);typeof W=="number"||typeof W=="boolean"?(O.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,V+q,O.__data)):W.isMatrix3?(O.__data[0]=W.elements[0],O.__data[1]=W.elements[1],O.__data[2]=W.elements[2],O.__data[3]=0,O.__data[4]=W.elements[3],O.__data[5]=W.elements[4],O.__data[6]=W.elements[5],O.__data[7]=0,O.__data[8]=W.elements[6],O.__data[9]=W.elements[7],O.__data[10]=W.elements[8],O.__data[11]=0):(W.toArray(O.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,D,H){const b=y.value,v=x+"_"+D;if(H[v]===void 0)return typeof b=="number"||typeof b=="boolean"?H[v]=b:H[v]=b.clone(),!0;{const M=H[v];if(typeof b=="number"||typeof b=="boolean"){if(M!==b)return H[v]=b,!0}else if(M.equals(b)===!1)return M.copy(b),!0}return!1}function m(y){const x=y.uniforms;let D=0;const H=16;for(let v=0,M=x.length;v<M;v++){const I=Array.isArray(x[v])?x[v]:[x[v]];for(let B=0,O=I.length;B<O;B++){const V=I[B],F=Array.isArray(V.value)?V.value:[V.value];for(let q=0,j=F.length;q<j;q++){const W=F[q],J=C(W),z=D%H,rt=z%J.boundary,gt=z+rt;D+=rt,gt!==0&&H-gt<J.storage&&(D+=H-gt),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=D,D+=J.storage}}}const b=D%H;return b>0&&(D+=H-b),y.__size=D,y.__cache={},this}function C(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function h(y){const x=y.target;x.removeEventListener("dispose",h);const D=o.indexOf(x.__bindingPointIndex);o.splice(D,1),i.deleteBuffer(A[x.id]),delete A[x.id],delete r[x.id]}function g(){for(const y in A)i.deleteBuffer(A[y]);o=[],A={},r={}}return{bind:a,update:c,dispose:g}}class sp{constructor(t={}){const{canvas:e=Hl(),context:n=null,depth:A=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),C=new Int32Array(4);let h=null,g=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=vn,this.toneMappingExposure=1;const D=this;let H=!1,b=0,v=0,M=null,I=-1,B=null;const O=new Ae,V=new Ae;let F=null;const q=new kt(0);let j=0,W=e.width,J=e.height,z=1,rt=null,gt=null;const Bt=new Ae(0,0,W,J),wt=new Ae(0,0,W,J);let jt=!1;const Y=new fs;let et=!1,pt=!1;this.transmissionResolutionScale=1;const st=new re,Dt=new re,St=new U,Nt=new Ae,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function se(){return M===null?z:1}let S=n;function be(E,w){return e.getContext(E,w)}try{const E={alpha:!0,depth:A,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${os}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),S===null){const w="webgl2";if(S=be(w,E),S===null)throw be(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Rt,Pt,Ct,Jt,Et,_,p,R,X,Z,k,mt,ot,dt,Ft,tt,ut,_t,vt,ht,Lt,Tt,Zt,T;function it(){Rt=new hh(S),Rt.init(),Tt=new Zf(S,Rt),Pt=new ah(S,Rt,t,Tt),Ct=new qf(S,Rt),Pt.reverseDepthBuffer&&u&&Ct.buffers.depth.setReversed(!0),Jt=new mh(S),Et=new Rf,_=new jf(S,Rt,Ct,Et,Pt,Tt,Jt),p=new lh(D),R=new uh(D),X=new Dg(S),Zt=new sh(S,X),Z=new fh(S,X,Jt,Zt),k=new Bh(S,Z,X,Jt),vt=new Eh(S,Pt,_),tt=new ch(Et),mt=new Hf(D,p,R,Rt,Pt,Zt,tt),ot=new Ap(D,Et),dt=new Lf,Ft=new kf(Rt),_t=new rh(D,p,R,Ct,k,f,a),ut=new Xf(D,k,Pt),T=new rp(S,Jt,Pt,Ct),ht=new oh(S,Rt,Jt),Lt=new ph(S,Rt,Jt),Jt.programs=mt.programs,D.capabilities=Pt,D.extensions=Rt,D.properties=Et,D.renderLists=dt,D.shadowMap=ut,D.state=Ct,D.info=Jt}it();const G=new np(D,S);this.xr=G,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const E=Rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(W,J,!1))},this.getSize=function(E){return E.set(W,J)},this.setSize=function(E,w,P=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,J=w,e.width=Math.floor(E*z),e.height=Math.floor(w*z),P===!0&&(e.style.width=E+"px",e.style.height=w+"px"),this.setViewport(0,0,E,w)},this.getDrawingBufferSize=function(E){return E.set(W*z,J*z).floor()},this.setDrawingBufferSize=function(E,w,P){W=E,J=w,z=P,e.width=Math.floor(E*P),e.height=Math.floor(w*P),this.setViewport(0,0,E,w)},this.getCurrentViewport=function(E){return E.copy(O)},this.getViewport=function(E){return E.copy(Bt)},this.setViewport=function(E,w,P,L){E.isVector4?Bt.set(E.x,E.y,E.z,E.w):Bt.set(E,w,P,L),Ct.viewport(O.copy(Bt).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(wt)},this.setScissor=function(E,w,P,L){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,w,P,L),Ct.scissor(V.copy(wt).multiplyScalar(z).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(E){Ct.setScissorTest(jt=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(E=!0,w=!0,P=!0){let L=0;if(E){let N=!1;if(M!==null){const $=M.texture.format;N=$===us||$===ds||$===gs}if(N){const $=M.texture.type,At=$===fn||$===Yn||$===Fi||$===Qi||$===cs||$===ls,lt=_t.getClearColor(),ft=_t.getClearAlpha(),xt=lt.r,Mt=lt.g,Qt=lt.b;At?(m[0]=xt,m[1]=Mt,m[2]=Qt,m[3]=ft,S.clearBufferuiv(S.COLOR,0,m)):(C[0]=xt,C[1]=Mt,C[2]=Qt,C[3]=ft,S.clearBufferiv(S.COLOR,0,C))}else L|=S.COLOR_BUFFER_BIT}w&&(L|=S.DEPTH_BUFFER_BIT),P&&(L|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),_t.dispose(),dt.dispose(),Ft.dispose(),Et.dispose(),p.dispose(),R.dispose(),k.dispose(),Zt.dispose(),T.dispose(),mt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Ss),G.removeEventListener("sessionend",Ms),yn.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const E=Jt.autoReset,w=ut.enabled,P=ut.autoUpdate,L=ut.needsUpdate,N=ut.type;it(),Jt.autoReset=E,ut.enabled=w,ut.autoUpdate=P,ut.needsUpdate=L,ut.type=N}function at(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function yt(E){const w=E.target;w.removeEventListener("dispose",yt),ne(w)}function ne(E){he(E),Et.remove(E)}function he(E){const w=Et.get(E).programs;w!==void 0&&(w.forEach(function(P){mt.releaseProgram(P)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,w,P,L,N,$){w===null&&(w=te);const At=N.isMesh&&N.matrixWorld.determinant()<0,lt=Ra(E,w,P,L,N);Ct.setMaterial(L,At);let ft=P.index,xt=1;if(L.wireframe===!0){if(ft=Z.getWireframeAttribute(P),ft===void 0)return;xt=2}const Mt=P.drawRange,Qt=P.attributes.position;let Gt=Mt.start*xt,Yt=(Mt.start+Mt.count)*xt;$!==null&&(Gt=Math.max(Gt,$.start*xt),Yt=Math.min(Yt,($.start+$.count)*xt)),ft!==null?(Gt=Math.max(Gt,0),Yt=Math.min(Yt,ft.count)):Qt!=null&&(Gt=Math.max(Gt,0),Yt=Math.min(Yt,Qt.count));const oe=Yt-Gt;if(oe<0||oe===1/0)return;Zt.setup(N,L,lt,P,ft);let ie,zt=ht;if(ft!==null&&(ie=X.get(ft),zt=Lt,zt.setIndex(ie)),N.isMesh)L.wireframe===!0?(Ct.setLineWidth(L.wireframeLinewidth*se()),zt.setMode(S.LINES)):zt.setMode(S.TRIANGLES);else if(N.isLine){let It=L.linewidth;It===void 0&&(It=1),Ct.setLineWidth(It*se()),N.isLineSegments?zt.setMode(S.LINES):N.isLineLoop?zt.setMode(S.LINE_LOOP):zt.setMode(S.LINE_STRIP)}else N.isPoints?zt.setMode(S.POINTS):N.isSprite&&zt.setMode(S.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const It=N._multiDrawStarts,de=N._multiDrawCounts,Wt=N._multiDrawCount,Fe=ft?X.get(ft).bytesPerElement:1,Zn=Et.get(L).currentProgram.getUniforms();for(let Se=0;Se<Wt;Se++)Zn.setValue(S,"_gl_DrawID",Se),zt.render(It[Se]/Fe,de[Se])}else if(N.isInstancedMesh)zt.renderInstances(Gt,oe,N.count);else if(P.isInstancedBufferGeometry){const It=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,de=Math.min(P.instanceCount,It);zt.renderInstances(Gt,oe,de)}else zt.render(Gt,oe)};function Kt(E,w,P){E.transparent===!0&&E.side===ke&&E.forceSinglePass===!1?(E.side=xe,E.needsUpdate=!0,Ji(E,w,P),E.side=Sn,E.needsUpdate=!0,Ji(E,w,P),E.side=ke):Ji(E,w,P)}this.compile=function(E,w,P=null){P===null&&(P=E),g=Ft.get(P),g.init(w),x.push(g),P.traverseVisible(function(N){N.isLight&&N.layers.test(w.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),E!==P&&E.traverseVisible(function(N){N.isLight&&N.layers.test(w.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights();const L=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const $=N.material;if($)if(Array.isArray($))for(let At=0;At<$.length;At++){const lt=$[At];Kt(lt,P,N),L.add(lt)}else Kt($,P,N),L.add($)}),x.pop(),g=null,L},this.compileAsync=function(E,w,P=null){const L=this.compile(E,w,P);return new Promise(N=>{function $(){if(L.forEach(function(At){Et.get(At).currentProgram.isReady()&&L.delete(At)}),L.size===0){N(E);return}setTimeout($,10)}Rt.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Ue=null;function tn(E){Ue&&Ue(E)}function Ss(){yn.stop()}function Ms(){yn.start()}const yn=new Da;yn.setAnimationLoop(tn),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(E){Ue=E,G.setAnimationLoop(E),E===null?yn.stop():yn.start()},G.addEventListener("sessionstart",Ss),G.addEventListener("sessionend",Ms),this.render=function(E,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(w),w=G.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,w,M),g=Ft.get(E,x.length),g.init(w),x.push(g),Dt.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),Y.setFromProjectionMatrix(Dt),pt=this.localClippingEnabled,et=tt.init(this.clippingPlanes,pt),h=dt.get(E,y.length),h.init(),y.push(h),G.enabled===!0&&G.isPresenting===!0){const $=D.xr.getDepthSensingMesh();$!==null&&HA($,w,-1/0,D.sortObjects)}HA(E,w,0,D.sortObjects),h.finish(),D.sortObjects===!0&&h.sort(rt,gt),Ut=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ut&&_t.addToRenderList(h,E),this.info.render.frame++,et===!0&&tt.beginShadows();const P=g.state.shadowsArray;ut.render(P,E,w),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=h.opaque,N=h.transmissive;if(g.setupLights(),w.isArrayCamera){const $=w.cameras;if(N.length>0)for(let At=0,lt=$.length;At<lt;At++){const ft=$[At];Os(L,N,E,ft)}Ut&&_t.render(E);for(let At=0,lt=$.length;At<lt;At++){const ft=$[At];ys(h,E,ft,ft.viewport)}}else N.length>0&&Os(L,N,E,w),Ut&&_t.render(E),ys(h,E,w);M!==null&&v===0&&(_.updateMultisampleRenderTarget(M),_.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(D,E,w),Zt.resetDefaultState(),I=-1,B=null,x.pop(),x.length>0?(g=x[x.length-1],et===!0&&tt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?h=y[y.length-1]:h=null};function HA(E,w,P,L){if(E.visible===!1)return;if(E.layers.test(w.layers)){if(E.isGroup)P=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(w);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){L&&Nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Dt);const At=k.update(E),lt=E.material;lt.visible&&h.push(E,At,lt,P,Nt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const At=k.update(E),lt=E.material;if(L&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Nt.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Nt.copy(At.boundingSphere.center)),Nt.applyMatrix4(E.matrixWorld).applyMatrix4(Dt)),Array.isArray(lt)){const ft=At.groups;for(let xt=0,Mt=ft.length;xt<Mt;xt++){const Qt=ft[xt],Gt=lt[Qt.materialIndex];Gt&&Gt.visible&&h.push(E,At,Gt,P,Nt.z,Qt)}}else lt.visible&&h.push(E,At,lt,P,Nt.z,null)}}const $=E.children;for(let At=0,lt=$.length;At<lt;At++)HA($[At],w,P,L)}function ys(E,w,P,L){const N=E.opaque,$=E.transmissive,At=E.transparent;g.setupLightsView(P),et===!0&&tt.setGlobalState(D.clippingPlanes,P),L&&Ct.viewport(O.copy(L)),N.length>0&&Zi(N,w,P),$.length>0&&Zi($,w,P),At.length>0&&Zi(At,w,P),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Os(E,w,P,L){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[L.id]===void 0&&(g.state.transmissionRenderTarget[L.id]=new Wn(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?Wi:fn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const $=g.state.transmissionRenderTarget[L.id],At=L.viewport||O;$.setSize(At.z*D.transmissionResolutionScale,At.w*D.transmissionResolutionScale);const lt=D.getRenderTarget();D.setRenderTarget($),D.getClearColor(q),j=D.getClearAlpha(),j<1&&D.setClearColor(16777215,.5),D.clear(),Ut&&_t.render(P);const ft=D.toneMapping;D.toneMapping=vn;const xt=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),g.setupLightsView(L),et===!0&&tt.setGlobalState(D.clippingPlanes,L),Zi(E,P,L),_.updateMultisampleRenderTarget($),_.updateRenderTargetMipmap($),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Qt=0,Gt=w.length;Qt<Gt;Qt++){const Yt=w[Qt],oe=Yt.object,ie=Yt.geometry,zt=Yt.material,It=Yt.group;if(zt.side===ke&&oe.layers.test(L.layers)){const de=zt.side;zt.side=xe,zt.needsUpdate=!0,Ts(oe,P,L,ie,zt,It),zt.side=de,zt.needsUpdate=!0,Mt=!0}}Mt===!0&&(_.updateMultisampleRenderTarget($),_.updateRenderTargetMipmap($))}D.setRenderTarget(lt),D.setClearColor(q,j),xt!==void 0&&(L.viewport=xt),D.toneMapping=ft}function Zi(E,w,P){const L=w.isScene===!0?w.overrideMaterial:null;for(let N=0,$=E.length;N<$;N++){const At=E[N],lt=At.object,ft=At.geometry,xt=L===null?At.material:L,Mt=At.group;lt.layers.test(P.layers)&&Ts(lt,w,P,ft,xt,Mt)}}function Ts(E,w,P,L,N,$){E.onBeforeRender(D,w,P,L,N,$),E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(D,w,P,L,E,$),N.transparent===!0&&N.side===ke&&N.forceSinglePass===!1?(N.side=xe,N.needsUpdate=!0,D.renderBufferDirect(P,w,L,N,E,$),N.side=Sn,N.needsUpdate=!0,D.renderBufferDirect(P,w,L,N,E,$),N.side=ke):D.renderBufferDirect(P,w,L,N,E,$),E.onAfterRender(D,w,P,L,N,$)}function Ji(E,w,P){w.isScene!==!0&&(w=te);const L=Et.get(E),N=g.state.lights,$=g.state.shadowsArray,At=N.state.version,lt=mt.getParameters(E,N.state,$,w,P),ft=mt.getProgramCacheKey(lt);let xt=L.programs;L.environment=E.isMeshStandardMaterial?w.environment:null,L.fog=w.fog,L.envMap=(E.isMeshStandardMaterial?R:p).get(E.envMap||L.environment),L.envMapRotation=L.environment!==null&&E.envMap===null?w.environmentRotation:E.envMapRotation,xt===void 0&&(E.addEventListener("dispose",yt),xt=new Map,L.programs=xt);let Mt=xt.get(ft);if(Mt!==void 0){if(L.currentProgram===Mt&&L.lightsStateVersion===At)return ws(E,lt),Mt}else lt.uniforms=mt.getUniforms(E),E.onBeforeCompile(lt,D),Mt=mt.acquireProgram(lt,ft),xt.set(ft,Mt),L.uniforms=lt.uniforms;const Qt=L.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Qt.clippingPlanes=tt.uniform),ws(E,lt),L.needsLights=La(E),L.lightsStateVersion=At,L.needsLights&&(Qt.ambientLightColor.value=N.state.ambient,Qt.lightProbe.value=N.state.probe,Qt.directionalLights.value=N.state.directional,Qt.directionalLightShadows.value=N.state.directionalShadow,Qt.spotLights.value=N.state.spot,Qt.spotLightShadows.value=N.state.spotShadow,Qt.rectAreaLights.value=N.state.rectArea,Qt.ltc_1.value=N.state.rectAreaLTC1,Qt.ltc_2.value=N.state.rectAreaLTC2,Qt.pointLights.value=N.state.point,Qt.pointLightShadows.value=N.state.pointShadow,Qt.hemisphereLights.value=N.state.hemi,Qt.directionalShadowMap.value=N.state.directionalShadowMap,Qt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Qt.spotShadowMap.value=N.state.spotShadowMap,Qt.spotLightMatrix.value=N.state.spotLightMatrix,Qt.spotLightMap.value=N.state.spotLightMap,Qt.pointShadowMap.value=N.state.pointShadowMap,Qt.pointShadowMatrix.value=N.state.pointShadowMatrix),L.currentProgram=Mt,L.uniformsList=null,Mt}function bs(E){if(E.uniformsList===null){const w=E.currentProgram.getUniforms();E.uniformsList=SA.seqWithValue(w.seq,E.uniforms)}return E.uniformsList}function ws(E,w){const P=Et.get(E);P.outputColorSpace=w.outputColorSpace,P.batching=w.batching,P.batchingColor=w.batchingColor,P.instancing=w.instancing,P.instancingColor=w.instancingColor,P.instancingMorph=w.instancingMorph,P.skinning=w.skinning,P.morphTargets=w.morphTargets,P.morphNormals=w.morphNormals,P.morphColors=w.morphColors,P.morphTargetsCount=w.morphTargetsCount,P.numClippingPlanes=w.numClippingPlanes,P.numIntersection=w.numClipIntersection,P.vertexAlphas=w.vertexAlphas,P.vertexTangents=w.vertexTangents,P.toneMapping=w.toneMapping}function Ra(E,w,P,L,N){w.isScene!==!0&&(w=te),_.resetTextureUnits();const $=w.fog,At=L.isMeshStandardMaterial?w.environment:null,lt=M===null?D.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:_i,ft=(L.isMeshStandardMaterial?R:p).get(L.envMap||At),xt=L.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,Mt=!!P.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Qt=!!P.morphAttributes.position,Gt=!!P.morphAttributes.normal,Yt=!!P.morphAttributes.color;let oe=vn;L.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(oe=D.toneMapping);const ie=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,zt=ie!==void 0?ie.length:0,It=Et.get(L),de=g.state.lights;if(et===!0&&(pt===!0||E!==B)){const Ce=E===B&&L.id===I;tt.setState(L,E,Ce)}let Wt=!1;L.version===It.__version?(It.needsLights&&It.lightsStateVersion!==de.state.version||It.outputColorSpace!==lt||N.isBatchedMesh&&It.batching===!1||!N.isBatchedMesh&&It.batching===!0||N.isBatchedMesh&&It.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&It.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&It.instancing===!1||!N.isInstancedMesh&&It.instancing===!0||N.isSkinnedMesh&&It.skinning===!1||!N.isSkinnedMesh&&It.skinning===!0||N.isInstancedMesh&&It.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&It.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&It.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&It.instancingMorph===!1&&N.morphTexture!==null||It.envMap!==ft||L.fog===!0&&It.fog!==$||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==tt.numPlanes||It.numIntersection!==tt.numIntersection)||It.vertexAlphas!==xt||It.vertexTangents!==Mt||It.morphTargets!==Qt||It.morphNormals!==Gt||It.morphColors!==Yt||It.toneMapping!==oe||It.morphTargetsCount!==zt)&&(Wt=!0):(Wt=!0,It.__version=L.version);let Fe=It.currentProgram;Wt===!0&&(Fe=Ji(L,w,N));let Zn=!1,Se=!1,wi=!1;const $t=Fe.getUniforms(),we=It.uniforms;if(Ct.useProgram(Fe.program)&&(Zn=!0,Se=!0,wi=!0),L.id!==I&&(I=L.id,Se=!0),Zn||B!==E){Ct.buffers.depth.getReversed()?(st.copy(E.projectionMatrix),Pl(st),Ll(st),$t.setValue(S,"projectionMatrix",st)):$t.setValue(S,"projectionMatrix",E.projectionMatrix),$t.setValue(S,"viewMatrix",E.matrixWorldInverse);const Ie=$t.map.cameraPosition;Ie!==void 0&&Ie.setValue(S,St.setFromMatrixPosition(E.matrixWorld)),Pt.logarithmicDepthBuffer&&$t.setValue(S,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&$t.setValue(S,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,Se=!0,wi=!0)}if(N.isSkinnedMesh){$t.setOptional(S,N,"bindMatrix"),$t.setOptional(S,N,"bindMatrixInverse");const Ce=N.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),$t.setValue(S,"boneTexture",Ce.boneTexture,_))}N.isBatchedMesh&&($t.setOptional(S,N,"batchingTexture"),$t.setValue(S,"batchingTexture",N._matricesTexture,_),$t.setOptional(S,N,"batchingIdTexture"),$t.setValue(S,"batchingIdTexture",N._indirectTexture,_),$t.setOptional(S,N,"batchingColorTexture"),N._colorsTexture!==null&&$t.setValue(S,"batchingColorTexture",N._colorsTexture,_));const Ne=P.morphAttributes;if((Ne.position!==void 0||Ne.normal!==void 0||Ne.color!==void 0)&&vt.update(N,P,Fe),(Se||It.receiveShadow!==N.receiveShadow)&&(It.receiveShadow=N.receiveShadow,$t.setValue(S,"receiveShadow",N.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(we.envMap.value=ft,we.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&w.environment!==null&&(we.envMapIntensity.value=w.environmentIntensity),Se&&($t.setValue(S,"toneMappingExposure",D.toneMappingExposure),It.needsLights&&Pa(we,wi),$&&L.fog===!0&&ot.refreshFogUniforms(we,$),ot.refreshMaterialUniforms(we,L,z,J,g.state.transmissionRenderTarget[E.id]),SA.upload(S,bs(It),we,_)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(SA.upload(S,bs(It),we,_),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&$t.setValue(S,"center",N.center),$t.setValue(S,"modelViewMatrix",N.modelViewMatrix),$t.setValue(S,"normalMatrix",N.normalMatrix),$t.setValue(S,"modelMatrix",N.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const Ce=L.uniformsGroups;for(let Ie=0,RA=Ce.length;Ie<RA;Ie++){const On=Ce[Ie];T.update(On,Fe),T.bind(On,Fe)}}return Fe}function Pa(E,w){E.ambientLightColor.needsUpdate=w,E.lightProbe.needsUpdate=w,E.directionalLights.needsUpdate=w,E.directionalLightShadows.needsUpdate=w,E.pointLights.needsUpdate=w,E.pointLightShadows.needsUpdate=w,E.spotLights.needsUpdate=w,E.spotLightShadows.needsUpdate=w,E.rectAreaLights.needsUpdate=w,E.hemisphereLights.needsUpdate=w}function La(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,w,P){Et.get(E.texture).__webglTexture=w,Et.get(E.depthTexture).__webglTexture=P;const L=Et.get(E);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=P===void 0,L.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,w){const P=Et.get(E);P.__webglFramebuffer=w,P.__useDefaultFramebuffer=w===void 0};const Ua=S.createFramebuffer();this.setRenderTarget=function(E,w=0,P=0){M=E,b=w,v=P;let L=!0,N=null,$=!1,At=!1;if(E){const ft=Et.get(E);if(ft.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(S.FRAMEBUFFER,null),L=!1;else if(ft.__webglFramebuffer===void 0)_.setupRenderTarget(E);else if(ft.__hasExternalTextures)_.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Qt=E.depthTexture;if(ft.__boundDepthTexture!==Qt){if(Qt!==null&&Et.has(Qt)&&(E.width!==Qt.image.width||E.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(E)}}const xt=E.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(At=!0);const Mt=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Mt[w])?N=Mt[w][P]:N=Mt[w],$=!0):E.samples>0&&_.useMultisampledRTT(E)===!1?N=Et.get(E).__webglMultisampledFramebuffer:Array.isArray(Mt)?N=Mt[P]:N=Mt,O.copy(E.viewport),V.copy(E.scissor),F=E.scissorTest}else O.copy(Bt).multiplyScalar(z).floor(),V.copy(wt).multiplyScalar(z).floor(),F=jt;if(P!==0&&(N=Ua),Ct.bindFramebuffer(S.FRAMEBUFFER,N)&&L&&Ct.drawBuffers(E,N),Ct.viewport(O),Ct.scissor(V),Ct.setScissorTest(F),$){const ft=Et.get(E.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+w,ft.__webglTexture,P)}else if(At){const ft=Et.get(E.texture),xt=w;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,ft.__webglTexture,P,xt)}else if(E!==null&&P!==0){const ft=Et.get(E.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,ft.__webglTexture,P)}I=-1},this.readRenderTargetPixels=function(E,w,P,L,N,$,At){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let lt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(lt=lt[At]),lt){Ct.bindFramebuffer(S.FRAMEBUFFER,lt);try{const ft=E.texture,xt=ft.format,Mt=ft.type;if(!Pt.textureFormatReadable(xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=E.width-L&&P>=0&&P<=E.height-N&&S.readPixels(w,P,L,N,Tt.convert(xt),Tt.convert(Mt),$)}finally{const ft=M!==null?Et.get(M).__webglFramebuffer:null;Ct.bindFramebuffer(S.FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function(E,w,P,L,N,$,At){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let lt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(lt=lt[At]),lt){const ft=E.texture,xt=ft.format,Mt=ft.type;if(!Pt.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(w>=0&&w<=E.width-L&&P>=0&&P<=E.height-N){Ct.bindFramebuffer(S.FRAMEBUFFER,lt);const Qt=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Qt),S.bufferData(S.PIXEL_PACK_BUFFER,$.byteLength,S.STREAM_READ),S.readPixels(w,P,L,N,Tt.convert(xt),Tt.convert(Mt),0);const Gt=M!==null?Et.get(M).__webglFramebuffer:null;Ct.bindFramebuffer(S.FRAMEBUFFER,Gt);const Yt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Rl(S,Yt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Qt),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,$),S.deleteBuffer(Qt),S.deleteSync(Yt),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,w=null,P=0){E.isTexture!==!0&&(ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),w=arguments[0]||null,E=arguments[1]);const L=Math.pow(2,-P),N=Math.floor(E.image.width*L),$=Math.floor(E.image.height*L),At=w!==null?w.x:0,lt=w!==null?w.y:0;_.setTexture2D(E,0),S.copyTexSubImage2D(S.TEXTURE_2D,P,0,0,At,lt,N,$),Ct.unbindTexture()};const Fa=S.createFramebuffer(),Ga=S.createFramebuffer();this.copyTextureToTexture=function(E,w,P=null,L=null,N=0,$=null){E.isTexture!==!0&&(ui("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1],w=arguments[2],$=arguments[3]||0,P=null),$===null&&(N!==0?(ui("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=N,N=0):$=0);let At,lt,ft,xt,Mt,Qt,Gt,Yt,oe;const ie=E.isCompressedTexture?E.mipmaps[$]:E.image;if(P!==null)At=P.max.x-P.min.x,lt=P.max.y-P.min.y,ft=P.isBox3?P.max.z-P.min.z:1,xt=P.min.x,Mt=P.min.y,Qt=P.isBox3?P.min.z:0;else{const Ne=Math.pow(2,-N);At=Math.floor(ie.width*Ne),lt=Math.floor(ie.height*Ne),E.isDataArrayTexture?ft=ie.depth:E.isData3DTexture?ft=Math.floor(ie.depth*Ne):ft=1,xt=0,Mt=0,Qt=0}L!==null?(Gt=L.x,Yt=L.y,oe=L.z):(Gt=0,Yt=0,oe=0);const zt=Tt.convert(w.format),It=Tt.convert(w.type);let de;w.isData3DTexture?(_.setTexture3D(w,0),de=S.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(_.setTexture2DArray(w,0),de=S.TEXTURE_2D_ARRAY):(_.setTexture2D(w,0),de=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,w.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,w.unpackAlignment);const Wt=S.getParameter(S.UNPACK_ROW_LENGTH),Fe=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Zn=S.getParameter(S.UNPACK_SKIP_PIXELS),Se=S.getParameter(S.UNPACK_SKIP_ROWS),wi=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,ie.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ie.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,xt),S.pixelStorei(S.UNPACK_SKIP_ROWS,Mt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Qt);const $t=E.isDataArrayTexture||E.isData3DTexture,we=w.isDataArrayTexture||w.isData3DTexture;if(E.isDepthTexture){const Ne=Et.get(E),Ce=Et.get(w),Ie=Et.get(Ne.__renderTarget),RA=Et.get(Ce.__renderTarget);Ct.bindFramebuffer(S.READ_FRAMEBUFFER,Ie.__webglFramebuffer),Ct.bindFramebuffer(S.DRAW_FRAMEBUFFER,RA.__webglFramebuffer);for(let On=0;On<ft;On++)$t&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Et.get(E).__webglTexture,N,Qt+On),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Et.get(w).__webglTexture,$,oe+On)),S.blitFramebuffer(xt,Mt,At,lt,Gt,Yt,At,lt,S.DEPTH_BUFFER_BIT,S.NEAREST);Ct.bindFramebuffer(S.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||Et.has(E)){const Ne=Et.get(E),Ce=Et.get(w);Ct.bindFramebuffer(S.READ_FRAMEBUFFER,Fa),Ct.bindFramebuffer(S.DRAW_FRAMEBUFFER,Ga);for(let Ie=0;Ie<ft;Ie++)$t?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ne.__webglTexture,N,Qt+Ie):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ne.__webglTexture,N),we?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ce.__webglTexture,$,oe+Ie):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ce.__webglTexture,$),N!==0?S.blitFramebuffer(xt,Mt,At,lt,Gt,Yt,At,lt,S.COLOR_BUFFER_BIT,S.NEAREST):we?S.copyTexSubImage3D(de,$,Gt,Yt,oe+Ie,xt,Mt,At,lt):S.copyTexSubImage2D(de,$,Gt,Yt,xt,Mt,At,lt);Ct.bindFramebuffer(S.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else we?E.isDataTexture||E.isData3DTexture?S.texSubImage3D(de,$,Gt,Yt,oe,At,lt,ft,zt,It,ie.data):w.isCompressedArrayTexture?S.compressedTexSubImage3D(de,$,Gt,Yt,oe,At,lt,ft,zt,ie.data):S.texSubImage3D(de,$,Gt,Yt,oe,At,lt,ft,zt,It,ie):E.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,$,Gt,Yt,At,lt,zt,It,ie.data):E.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,$,Gt,Yt,ie.width,ie.height,zt,ie.data):S.texSubImage2D(S.TEXTURE_2D,$,Gt,Yt,At,lt,zt,It,ie);S.pixelStorei(S.UNPACK_ROW_LENGTH,Wt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Fe),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Zn),S.pixelStorei(S.UNPACK_SKIP_ROWS,Se),S.pixelStorei(S.UNPACK_SKIP_IMAGES,wi),$===0&&w.generateMipmaps&&S.generateMipmap(de),Ct.unbindTexture()},this.copyTextureToTexture3D=function(E,w,P=null,L=null,N=0){return E.isTexture!==!0&&(ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),P=arguments[0]||null,L=arguments[1]||null,E=arguments[2],w=arguments[3],N=arguments[4]||0),ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,w,P,L,N)},this.initRenderTarget=function(E){Et.get(E).__webglFramebuffer===void 0&&_.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?_.setTextureCube(E,0):E.isData3DTexture?_.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?_.setTexture2DArray(E,0):_.setTexture2D(E,0),Ct.unbindTexture()},this.resetState=function(){b=0,v=0,M=null,Ct.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}}const xn={a:"C4",s:"C#4",d:"D4",f:"D#4",g:"E4",h:"F4",j:"F#4",k:"G4",l:"A4",ç:"A#4","]":"A#5",Enter:"B#4",q:"C5",w:"C#5",e:"D5",r:"D#5",t:"E5",y:"F5",u:"F#5",i:"G5",o:"A5",p:"B4",3:"B5",4:"B#5",z:"C3",x:"C#3",c:"D3",v:"D#3",hifen:"E3",".":"F3","//":"F#3",m:"G3",n:"A3",";":"A#3",b:"B3",Shift:"B#3","'":"C2",1:"C#6",",":"D2","=":"D#2","[":"E2",5:"C6",6:"D#6",7:"D6",8:"E6",9:"F#6",0:"B2","-":"B#2",2:"G#4"},op="/piano-simulator/assets/a-mrXXo23n.png",ap="/piano-simulator/assets/b-B0fhAuiD.png",cp="/piano-simulator/assets/c-DH34dIE8.png",lp="/piano-simulator/assets/d-DzQQG8_S.png",gp="/piano-simulator/assets/e-DsD8-e4N.png",dp="data:image/png;base64,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",up="/piano-simulator/assets/g-BKewhe9w.png",hp="/piano-simulator/assets/h-CHUs-0PJ.png",fp="data:image/png;base64,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A0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMA1A1iMo3ccGVvf/OxYBxcvPD/u+9wPBrAMgg4LsnHdxth3YO9YC3sGsCCW3AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIOCaASzGpfOXx5nTT4x1cOXFKwNYjj1bmydfHQDAWrPkDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAH/AGXzndUxRre/AAAAAElFTkSuQmCC",pp="/piano-simulator/assets/j-CvOr1DUT.png",mp="/piano-simulator/assets/k-k4jbOtBY.png",Ep="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgzSURBVHgB7dixTYIBFEbRh2EDLW1xKhwA13AACxMXsNfK1kHcwphgia4AFf/lnOTNcPO91XazOwwAsGhXAwAsnqADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwHrgBK9fL7M093cPA1BloQNAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwHrgQtzcXg+cu/337+x/9gPHEnQuxtPn48C5e3v+mPf/g2N5uQNAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMBqu9kdBgBYNAsdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQAC/gAfKhZ8yVo0xQAAAABJRU5ErkJggg==",Bp="/piano-simulator/assets/m-y2XkMSDA.png",Cp="/piano-simulator/assets/n-CpKnEIzx.png",Qp="/piano-simulator/assets/o-D1tFsV0h.png",Ip="/piano-simulator/assets/p-DFBhmRaY.png",_p="/piano-simulator/assets/q-i8xLaP8H.png",Dp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxdSURBVHgB7d0/zF1lHcDxA2GhiZDwZwJlgtBFBgywYIKaYHSi6mRVFiQYTXDSwEzChsHERCYQ3KRMGkiKJDSRP0kTYbAoU6FMtCSW8HbEe25pU6FvfW8p9pzv+XySm/f2tF26fPv8nuecc8neGx/4eAAAZu3SAQCYPUEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4CAywaAidr1pV3DrisvH6657qrh2uuuHnZdcfn62vh9dM0nP69d/f7pv3PlyT9zpkf2Pja89frbA5QJOnBRjfG95vqrhht2Xz/ccPOX19Eev4/XPh1mYHuCziI89PQvh6l74akXh4P73xzKrrn+6mH3bTeuw72O+M3Xr68Bn5+gswi7b79xmLoDz70y1HxltdIe/+1333bT+qcVN3xxBB24YMbV9q3f+qqAw0Ug6MDncvPtN63H6F+/5w7jc7iIBB3Y2Bjxr33zluHO791uFQ4TIejAjozhvvveu1Yj9VvWp9CBaRF04JzG1fien39ntSd+0wBMl6ADnzGuxsdx+q2rsbqQwzwIOnDaqbH6t1cfe+MwL4IOCDkECDos3BjyPb/4rpDDzAk6LNR42O3+R390+gUnwLwJOizM+Kay+1Yhd9gNWgQdFuSe1WjdPjk0CToswPggmJ8++uP1y1KAJkGHuPHQ296HfjAAbYIOUfbKYVkEHYKcYIflEXSIMWKHZRJ0CBkPvt25544BWB5Bh4DxNrSHn3nQKXZYMEGHmRsPvz20irn9cli2SwdgtsQcOEXQYabEHDiToMMMiTnwaYIOMyPmwNkIOsyImAPbEXSYkQd/d7+YA2cl6DATP3z4++4zB7Yl6DADe8b3mP/kGwPAdgQdJm580co9q6ADnIugw4SNh+DGt6YB/C+CDhN2n1egAjsk6DBR47757tW4HWAnBB0maBy12zcHNiHoMEHjw2MANiHoMDF333uXfXNgY4IOEzKO2t1vDpwPQYcJGffNrc6B83HZAEzCGPI799wxLN3Wh1vD1r9PDEff+2B4/71jJ68dPzF8tLp+8vvW+tfnsuuKy1efXeuJx7X+g8RCCDpMxJ4FnWofo/3+kQ+Gdw4dGQ4fencd78Or72Ootz4JN7AZQQe+cIdee/t0vA+9/vYq4McG4MISdOCCO3rk2HBw/5urzxsnV95W3fCFE3TgghhX4Qf3/30dcitw+P8TdOC8jSvvF558aXh536siDheZoAMbG1fjz/32z6v98H8NwDQIOrAj42r8wLOvDc8/9VercZggQQfO6dRY/fnVx+E2mC5BB7Z1YLU3vm81Wrcih+kTdOAz7JHD/Ag6cNo4Un/u8b+s98mBeRF0YG1clT/x6z8Yr8NMCTosnFU5NAg6LNj4fPXHfvZ7q3IIEHRYqPFWtPEEu1vRoEHQYYH++MifjNghRtBhQcbV+BO/enr9FjSgRdBhIcZ98nG/fNw3B3oEHRZgjPkje3/j8BuEXToAaWIOyyDoECbmsByCDlHjATgxh+UQdIgSc1gWQYeg8T5zp9lhWQQdYsanv3loDCyPoEPIqfeYA8sj6BAx7pePrz8FlknQIeKZ1b65Q3CwXIIOAeOb0zyfHZZN0GHmxlX5PvvmsHiCDjM3jtq90xwQdJixA/teNWoH1gQdZmpclRu1A6cIOszU80++5FQ7cJqgwwyNIfcAGeBMgg4ztO9xMQf+m6DDzIyr8wPPvToAnEnQYWaszoGzEXSYkXF1fnD/mwPApwk6zMj4NjUPkQHORtBhRtx3DmxH0GEmxlG7+86B7Qg6zMSBZ/82AGxH0GEG1ofhXnQYDtieoMMMjIfhAM5F0GEGXt73ygBwLoIOEzeO29963QodODdBh4kzbgd2QtBh4ozbgZ0QdJg443ZgJwQdJsy4HdgpQYcJO7j/jQFgJwQdJuzwoXcHgJ0QdJioreMn7J8DOyboMFGHDx0ZAHZK0GGi3hF0YAOCDhN16LV/DgA7JegwUUff+2AA2ClBhwkaD8QdfsvIHdg5QYcJciAO2JSgwwRtfXhiANiEoMMEeaAMsClBhwl65x+CDmxG0GGCnHAHNiXoMEHvCzqwIUGHiRlvWdv6cGsA2ISgw8Qcfe/YALApQYeJ+ei4W9aAzQk6TIx70IHzIegwMUePGLkDmxN0mJiPHIgDzoOgw8Rs2UMHzoOgw8S4ZQ04H4IOAAGCDhPzvkNxwHkQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAi4bIAFeOu1t4e5OHH8xACwqUv23vjAxwMAMGtG7gAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEPAf5Hf1OlxVbusAAAAASUVORK5CYII=",vp="/piano-simulator/assets/s-CdCs_Uk6.png",xp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA7DSURBVHgB7d1fqNf1Hcfxj8sIT2Sgx5udk2eDFI8X2mZ/LwwKo8BgeNjNQGtjUBg46mpNGbStojGGsRgjr/o32EVTiBU1Ww28UdEoLzxON4ZOd+Opi6QjYwP3+/zsbDJm4O/88fd5nccDfmghXhwvnr/35/v5fL4LNq/YeqEAAE37UgEAmifoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AARYW4Ipt2raxjHU+LRg/cKI8u2VnAbKZ0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AACwv0oe2vPlH62bLhJaUVI6PDff/znGu7nnylTJz5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",Sp="/piano-simulator/assets/u-eM9M6nyh.png",Mp="/piano-simulator/assets/v-CeBqFpxw.png",yp="/piano-simulator/assets/w-D_xJosKM.png",Op="/piano-simulator/assets/x-CtkWOado.png",Tp="/piano-simulator/assets/y-BDY8s8lX.png",bp="/piano-simulator/assets/z-WQAkT4aj.png",wp="/piano-simulator/assets/%C3%A7-DEUmQJ8_.png",Np="/piano-simulator/assets/0-BCI9PscJ.png",Hp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAguSURBVHgB7dgxUQMBFEXRHyYOoKOOEHzEQDromGGwQUMH1IigQgM9XaIhMRADe/ccE3fe2+x3h/MAAIt2MwDA4gk6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABGwHVuzz721o+Pn+nffnj4G1stABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBgO7BiTw+vw3UvX49zd387wDIIOqt2/D8NQIHLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACNvvd4TwAwKJZ6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEHAB6wQTfemhKH0AAAAASUVORK5CYII=",Rp="/piano-simulator/assets/2-jm51jYrU.png",Pp="/piano-simulator/assets/3-1wIVfeWW.png",Lp="/piano-simulator/assets/4-Bxi5JjZ6.png",Up="/piano-simulator/assets/5-Cd0QVnvW.png",Fp="/piano-simulator/assets/6-6YLPnQWp.png",Gp="/piano-simulator/assets/7-D_b2H2nt.png",zp="/piano-simulator/assets/8-wl2zqMxF.png",Vp="/piano-simulator/assets/9-JVeR01yW.png",kp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAuBSURBVHgB7d0xi+XVGYDxE0klpFIrF60U5xNsmhTaKFi5rJVDtFoxIEyqiFOvpMugsJCtEjNWBrdSEpAEYhMFC6sF7YLptArYJvdsApFk1d11Zuee5/5+cJmP8HDe/7zn/GD/kZf+OQCApd0zAIDlCToABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAT8cAA74ycXfjwu/fKno+ity78ff/jtnwbsKkGHHfHkC4+P/VefHTVf/P3LcfUXvxvXP/p0wC4TdNgBF15+ejyz+dVc//CzcfWVN29EHXadoENcNeZ//M2fx/Frbw/g3wQdwoox/+ofX43jzffyD9756wD+S9AhqhjzOVq/vH9kxA43IegQVIz5PJHPk/k8oQP/T9AhZq6lzfW0Eitp8N0EHUJqMZ+j9V/97Nfjb9c/H8C3E3QIuPdH9479w4upmFtJg9sj6LC4GfPD44Px0N65UfHOG++Oa5sfcOsEHRZWi/n8h7d569vH738ygNsj6LCoBx68bxxceTET8/mdfH4vN2KHOyPosKAZ81c3J/P7N38L5q1vc8xuJQ3unKDDYkoxnwG/9vp7VtLgBAg6LKQUcytpcLIEHRZRivlcSTvaxNyIHU6OoMMCSjG3kganQ9Bhyz28d+5GzOeK2srmafzopavj+kefDuDkCTpssUrMraTB6RN02FKPnX90/PzKpeVjPlfSjl97ewCnS9BhC8072edDKyubI/b53Ol89hQ4fYIOW6YQ8zlav7x/ZMQOd5GgwxZ58oXHx/6rz46VzRP5PJlbSYO7S9BhS1x4+enxzOa3src2IXfrG5wNQYctsHrM52h9vpJmJQ3OjqDDGVs95vPWt6uvvOl7OZwxQYcztHrMraTB9hB0OCPPHV4cTz3/xFiRlTTYPoIOZ2Cupc31tBVZSYPtJOhwl60ccytpsL0EHe6SeYXrwZVLY+/8o2NFVtJguwk63AUz5ofHB+OhvXNjNXO0Ph9WmQ+sANtL0OGUrRzzuZJ2tIm5ETtsP0GHU/TAg/fdeP70/s3f1bzzxrvj2uYHrEHQ4ZSsGvN5Gj966apb32Axgg6nYNWYz+/k83u5lTRYj6DDCVs15vPWtzlm970c1iTocIJWjPkM+LXX37OSBosTdDghD++dGwdXXlwq5lbSoEPQ4QTMmM+T+VxRW8XH739y48lTI3ZoEHT4nlaMuZU06BF0+B7mnez7hxeXifkcsc9TuZU06BF0uEMz5vOhlVVYSYM2QYc7sFrM50ra8WtvD6BL0OE2XXj56fHM5reC+Q9v87nT+ewp0CbocBtWivkcrV/ePzJihx0h6HCLVor5PJHPk7mVNNgdgg63YKWYv7UJuVvfYPcIOnyHVWJuJQ12m6DDt3ju8OJ46vknxra7/uFn4+orb/peDjtM0OEbzLW0uZ627aykAZOgw02sEPP5D29zxD7vZAcQdPiaeYXrwZVLY+/8o2ObufUN+F+CDv8xY354fDAe2js3ttkcsc/HVaykAV8n6DDWiPkM+LXX37OSBtyUoLPzHnjwvhvPn96/+but5mh9jtjnqB3gZgSdnbZCzOdK2tEm5kbswLcRdHbaY+cfGX/Z4odLvvj8y/HBNQ+rAN9N0NlpXiEDKu4ZAMDyBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQAC/gVW+/BERBsE4AAAAABJRU5ErkJggg==",Yp="data:image/png;base64,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IICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIMC/AP/KU99312UrAAAAAElFTkSuQmCC",Wp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhJSURBVHgB7dg9Lq0BGEXh996cxik0dGrGoNGo1Go/nYSBiE4hMQE9lUmYgITBMARfJcfK80xiZe9/Z/vXXwMA/Gn/BwD48wQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAJWAyzy9PE4/L7zg5sBfmahA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0DAaoBFnh9ep2C9vTUnl8cDtAg6LPQSCfru3o6gQ5DLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAJWAyxydHo4Bevt9QA9gg4LXd1dDMCmcrkDQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMBqgEVuz+4HYFMJOiz0/vY5AJvK5Q4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAHf2HQVI7/0o+0AAAAASUVORK5CYII=",Xp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhISURBVHgB7dixLQQAGIbhn9wGotNSKywgkViCRMsgWp0F9DcEBbEAoVaJGRjBVeLee54l3nzf1tn+5fcAAGttewCAtSfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGGAld2+3w987P7ga4HcWOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAELAbIeVg+zefH1wCbQ9Ah6H75OK/P7wNsDpc7AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGyDk6OZzdvZ0peFg+DfA7QYeg04vjqRB0WI3LHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACFgOs5PrsZgD+K0GHFb08vw/Af+VyB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAgB/MDhy8GyHllwAAAABJRU5ErkJggg==",Kp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgQSURBVHgB7dhBFUEBFEXRx1KFVASggCYGhgQQwkQGZcjxz9+7xFn3bo77828AgEXbDgCweIIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAG7gZV5fm9D2+lwGVgbCx0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACdgMrc78+BqBG0Fmd9+szADUudwAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACPgDLnoMxHO0PJcAAAAASUVORK5CYII=",qp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhZSURBVHgB7dixSZ1hGIbh13BWcYc0WSL1IWXADTJBSJcikCZd7E/nAlbiAge0E60UV9AJ/u5DODfXtcTN85ztzy/eBgA4aZ8GADh5gg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABu4HFLu/+DrDt+nAz/378H1jJQgeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAgN3AYoc/VwNsezg+Dqx2tj+/eBsA4KS53AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBgN7DYl6+fB9j28vg6x9u7gZUEneW+//o2wLbrw42gs5zLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACdgOL/dz/HmDb89PrwGqCznLH2/sB4GO53AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASDgHWrpJQIP430XAAAAAElFTkSuQmCC",jp="/piano-simulator/assets/pontoVirgula-DQOy3glv.png",Zp="/piano-simulator/assets/til-CRmm4Lat.png",Jp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA36SURBVHgB7d0/iN/1Hcfxj61LTpIWc5kuuXQ5ucvQiFrTDhnUFKWd/NOpZ3VpxaHFTrUJhQ6NOBQqCIU6Rc1SkEtbKhiMCSSDiTSgDt5hplwvk4lQg+dof98rLtKC0OT7+Xxev8cDjuS45bbnfd7vz/f7u2V54enPCwDQta8VAKB7gg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABDg1gJ0b2b7TFk6sFBmd99e9i7uKbNzO8uuudv/87NvbNv6+dWNa1vff3Tl47J5fXPy/cdl9Z0PJ99fK+urGwXo2y3LC09/XoDuLB64oyzdu1DuObS/zC/tLv+Pq5Oor164VM6eeLusTf4F+iPo0JHhpH3w0QPl7gf2T07kd5SbYYj7youvb4V9OL0DfRB06MAQ8gefvK88NPka/j+GIexvHDtTTr58ugDtE3Ro3DBaf+r5x7f24jUMYX9u+QWndWicoEOjhpP4w7/4QXnoiftLC4Yx/InJF9Amt9yhQbsmp/HDx5+pdir/bx75+Q/Lbdu3lePPvVaA9ngOHRozjNh/97dfNxXzLzz45P3l6F8Pj7bHB746QYeGHHzku+XIq880HczhEbkjx9v+HWEaCTo0Yoj5z57/SenBEPXlI48WoB2CDg3YOwlkLzH/wsFHvleWDz9WgDYI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",$p="/piano-simulator/assets/a-BQyliO_v.png",t0="/piano-simulator/assets/b-IM_sw-cK.png",e0="/piano-simulator/assets/c-CygdLUfr.png",n0="/piano-simulator/assets/d-C1wF_Enc.png",i0="/piano-simulator/assets/e-C6sF4Qws.png",A0="data:image/png;base64,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",r0="/piano-simulator/assets/g-Ca4JG0lt.png",s0="/piano-simulator/assets/h-DazP1z5O.png",o0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvGSURBVHgB7d0/qF7lHcDxY4kBm9QhYCJYbIQMVm2pHa5DHWqmDrbgUju7O9elLp26dKmzWWvngk5m6dIMRahpOwQiUiGN9BY0MZAI9n0uBMRCG6GeP9/384HDvZBcuHf6nt/zPOe8973w5oXPJgBg0742AQCbJ+gAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQcGwCNu/0AyenJ089PJ39xqmj78d14v7jR18/7+ant6ebd25P12/dmD7cXVc/PpyufnQ4XT68NgHbJuiwUSPgB6cfnc5/89x04tjxe/qZ8f/GdTf0z33u397dRf3iB1eOvo7YA9si6LAhX9/F+PmzT0w/3l33GvF79dTuBmFcw9u7sL9x5R1hhw2574U3L3w2Aav2VYb8vxF22A5Bh5V77pFz00vfPpg15F/0213Uf7e7gPUSdFipMZW//N1np2d2++RrMA7S/eLSW6Z1WCmPrcEKnX3w1PTrH/xkNTEfxkG6Xx786OgwHrA+gg4rM06uj3B+8ZGzNbgb9bENAKyLU+6wIiOUL3/n2Wntxu/40C7u9tVhPUzosBJjmX0LMb/rZ+e+N/10dwHrIOiwAmPafeXp89PWjKhbfod1EHRYgbXumd+Llx4/OHrlLLAsQYeFvbibcrca82G8M/6V758/eswOWI6gw4LGUvuLgX3o05G/A7ZM0GFBpQiO19J6Rh2WI+iwkPFBKOdjB8pM6bAcQYeF/DB4OnzcpJjSYRmCDgsYe+e16fwuUzosQ9BhAU+Fp9jxtznxDvMTdFhAdTq/65kz6/lQGdgXgg4zG89t1/eZyysQsFaCDjN7bA/equZgHMxP0GFm+xC78aIZ++gwL0GHmY1PVdsHZzb8OlvYIkGHmZ3ck8l1X25cYC0EHWb20J5MricsucOsBB1mtuVPVvsyxml+YD6CDgABgg4AAYIOfCVu3rk9AfMRdJjZzU/3I3T78nfCWgg6zGxfJtfrt25MwHwEHWZ29ePDaR98YskdZiXoMLMP92ByHasQ+3LjAmsh6DCzqx/1QyfmMD9Bh5ldPrw21e3D3whrI+gws3FYrH4C/F1Bh9kJOizg4gdXpqpxw2JCh/kJOizg0j/en6rEHJYh6LCAsSRdDd8bV96ZgPkJOizk7eCy+9hK8EIZWIagw0KK8TOdw3IEHRb02p//MFWYzmFZgg4Lquylj5CbzmFZgg4L+81uSt/6c+kj5qZzWJagw8JGCH/1p7enrRpL7eXn6mErBB1WYCy9v/63S9PWjJuR1/+6vd8bigQdVuL37/1lU/vQI+avXnor/xpb2ApBhxUZQd9C1O/G3L45rIegw8qMoK95+V3MYZ2OTcDqjOX38Tjbz58+P51+4OS0FuPtdhd2e+aW2WF9TOiwUlc/OjyahNdwgnwEfBx+ey3wiB1U3ffCmxc+m4BVe+zBU4tN6+OG4nVTOayeoMOGPPfIuen87nry1MPTV2nEe3zEqxfGwHYIOmzQmNSf/9YT08GZR/+vU/vYt//j9feni3+/YiKHjRF02LgR9DGxP7W7xvdnd8vzJ44d/58/Nybv9z4+nK5/cmO6/K9r07v/vCbisGGCDkEj6CfuP/4f0/sI9s07ty2jQ5DH1iDoKNyfCjfsE4+tAUCAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwLEJWI2DM49OLz1+MG3B9Vs3plcvvTUB6yDosCInjh2fTj9wcgL4siy5A0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwLEJWI3rt25MFz+4Mm3BzTu3J2A9BB1W5PLhtaML4Muy5A4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgAB/wZ096CJ3K6uYwAAAABJRU5ErkJggg==",a0="/piano-simulator/assets/j-DzMoCNSy.png",c0="/piano-simulator/assets/k-BgRJ87Su.png",l0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgySURBVHgB7dixSUMBFEbhq6QRrF3H1tbgAI5lZ1obWzOGAziGWERBwQ2S6r2T74M7w+G/F/dvz78DAKza5QAAqyfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAELAZOMHr3eOszXa/G4AqCx0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAjYDZ+Lm6npg6T6/D/P1cxg4lqBzNp5uHwaW7uXj/f/gWF7uABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQsBk4wXa/GwCWw0IHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4CAP8VcFxVOaMUDAAAAAElFTkSuQmCC",g0="/piano-simulator/assets/m-CurdLkm-.png",d0="/piano-simulator/assets/n-BLesXGoR.png",u0="/piano-simulator/assets/o-Rq53hhVA.png",h0="/piano-simulator/assets/p-C13sx-wy.png",f0="/piano-simulator/assets/q-j4GVb7PF.png",p0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAv+SURBVHgB7d0xrJ1lHYDxT1KaSJHEGpAEgyXpoFATXerC1IkBBxdx1Vl2Fxx0cmbXVVwlkYkuLNxFolAHmxSJJFCSDmBrUkj0vJfepqG9l3uuhX7f8/1+yck597b7c//v+37n/cqP//z7/04AwKLdNwEAiyfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQcGwCmKkHjh2fHrz/+PTwVx+cHtm8Tmw+n9j8bnweHr7xvvfzsPd/bvXCzivTW1fem6BM0IF76oEbgX7ioZPTqa+d3A34eH/kgQdvCzOwP0FnFX599plp7l5++8K0c/mdqWyE+6mTj34a7BsRv3W6Bo5O0FmFM5uIzN35dy9ONSPcZ77x6PTU1x/dfTdxwxdH0IG7ZkzbZ7/5uIDDPSDowP9lLKGP17nHTls+h3tI0IGtjYCffeTx6dy3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dAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAj4H+aA+OMPp5vRAAAAAElFTkSuQmCC",m0="/piano-simulator/assets/s-Cf9bjdlQ.png",E0="data:image/png;base64,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",B0="/piano-simulator/assets/u-C3GyWVZJ.png",C0="/piano-simulator/assets/v-BZpEZNbL.png",Q0="/piano-simulator/assets/w-BVvaBb5s.png",I0="/piano-simulator/assets/x-CERRJ8ME.png",_0="/piano-simulator/assets/y-CjLCAlIb.png",D0="/piano-simulator/assets/z-CAfYwYsg.png",v0="/piano-simulator/assets/%C3%A7-ppVM9JLW.png",x0="/piano-simulator/assets/0-27nfUNPm.png",S0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgxSURBVHgB7dgxTUMBGEXhH/IWEmakoKErDhirAwsIwEDDykia4ICVlYWZpGNroAbeed9n4uTem6ePt/MAAKt2OwDA6gk6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwDG/a+ex4aPn9/5vX7a2CrLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAhYBjZsfzwM17087ubh7n6AdRB0Nu3v9D8ABS53AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAhYBuCK/fEwwHpY6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEHABuXAUQKSNJIMAAAAASUVORK5CYII=",M0="/piano-simulator/assets/2-BjZPb3aO.png",y0="/piano-simulator/assets/3-Bij4PeNX.png",O0="/piano-simulator/assets/4-Dm_TVZy8.png",T0="/piano-simulator/assets/5-BMzIV1bF.png",b0="/piano-simulator/assets/6-nH6Xguj1.png",w0="/piano-simulator/assets/7-B53a4HeN.png",N0="/piano-simulator/assets/8-D65fu2pK.png",H0="/piano-simulator/assets/9-DYGATcvK.png",R0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAuNSURBVHgB7d2/q531HcDxbyUE/EGGC4qQwQh3MKkBdbhTFu/UQYdOzmbWPZNLF53j3Luqawt1ui6Z7mCDURtIoK0QKBkcSkuhFNrzvS1U2hiTeG/ued7n9YKH8ye8+X6e8/k+P/n5b/b+OQCARXtiAACLJ+gAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABBwagAb4/Wz2+Pdi5dG0S9/dzB+/cevB2wqQYcN8ca5C+PySzuj5u7f/jI+vHFtfPntnwZsMkGHDfDW9iuHT81Xq4hfXcV8Rh02naBDXDXmv/rD12Pv5sEA/k3QIawY87/+4++H78s/u3N7AP8l6BBVjPkcrb938KkRO9yDoENQMeb7qxP53upkPk/owP8TdIh55+KlsXt2e5RYSYMfJugQUov5HK1/8Nv98fs/fzuA+xN0CHjq1Olx+fxOKuZW0uDhCDos3Iz5L3Z+Nl48szUqPrp9fXyyeoAHJ+iwYLWYzz+8Xf3i2ji4+80AHo6gw0I9++Qz48qru5mYz/fk8325ETs8GkGHBZoxnyfz51a/BfPWtzlit5IGj07QYWFKMZ8B//jWdStpcAQEHRakFHMraXC0BB0WohTzuZL2/uf7RuxwhAQdFqAUcytpcDwEHdbcuTNbhzF/+tTpsWTzNP7B6lT+5ep0Dhw9QYc1Vom5lTQ4foIOa+qnW8+PK6/tLj7mcyVt7+bBAI6XoMMaev3s9nj34qWxZHPEPr+S9tmd2wM4foIOa6YQ8zlaf+/gUyN2eIwEHdbIG+cujMsv7Ywl21+dyPdWJ3MrafB4CTqsibe2Xzl8lmyO2N36BidD0GENLD3mc7T+4Y1rVtLgBAk6nLClx3ze+nZ1FXPvy+FkCTqcoKXH3EoarA9BhxPy9vmd8eYLF8YSWUmD9SPocALeuXhp7J7dHktkJQ3Wk6DDY7bkmFtJg/Ul6PCYPHXq9OFVri9vPT+WyEoarDdBh8dgxnx+ZOXFM1tjaeZofX5YZX5gBVhfgg7HbMkxnytp73++b8QOCyDocIyeffKZw5g/t/pdmo9uXx+frB5gGQQdjslSYz5P4x+sTuVufYNlEXQ4BkuN+XxPPt+XW0mD5RF0OGJLjfm89W2O2L0vh2USdDhCS4z5DPjHt65bSYOFE3Q4IufObI0rr+4uKuZW0qBD0OEIzJjPk/nTp06PpTi4+824+sU1I3aIEHT4kZYYcytp0CPo8CO8fnZ7XD6/s5iYzxH7hzeuWUmDIEGHRzRj/u7FS2MprKRBm6DDI1hazOdK2t7NgwF0CTo8pLe2Xzl8lmD+4W1+Je2zO7cH0Cbo8BCWFPM5Wn/v4FMjdtgQgg4PaEkx31+dyPdWJ3MrabA5BB0ewJJiPkfsbn2DzSPo8AOWEnMrabDZBB3u4+3zO+PNFy6MdffVKuJXVzH3vhw2l6DD93jn4qWxe3Z7rDsracAk6HAPS4j5/MPbvIt93skOIOjwHU+dOj2uvLY7Xt56fqwzt74B/0vQ4T9mzOdHVl48szXW2Ryxzw+rWEkDvkvQYSwj5jPgH9+6biUNuCdBZ+M9++QzhzF/bvW7ruZofY7Y56gd4F4EnY22hJjPlbT3P983YgfuS9DZaPPPb+v84ZJ5MvdhFeBBCDobTSyBiicGALB4gg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgAB/wIksvHAR9Em+gAAAABJRU5ErkJggg==",P0="data:image/png;base64,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6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIMC/AWioXpDGhafzAAAAAElFTkSuQmCC",L0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhISURBVHgB7dixLYUBGIXhj1wSodYoNCqJDTQ6hYYJLGAFq9BqtMygUigNoLICI/gruffN8yzx5pyt65eHnwEANtr2AAAbT9ABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIGA1wCLPl7fD/7t5fRzgbxY6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AASsBljk6fN9CvZ3dufq+HSAFkGHhSpBP9w7EHQIcrkDQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwGqARS6OTqZgf2d3gB5Bh4Xuzs4HYF253AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgYDXAIvdvrwOwrgQdFvr4/hqAdeVyB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAgF+QJxXHOT+yIwAAAABJRU5ErkJggg==",U0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhISURBVHgB7dixLQQAGIbhn1wjUStFbQAzaBRMYBKrMIGWil5Np5WIQiVRYoO7Su7ee54l3nzfzvnd9c8AABttdwCAjSfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGGAlt6eXw/+7uL8ZYDkLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACFgPkPL69zsf31wDbQ9Ah6OEv6C+f7wNsD5c7AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwGyDk5OJyDvf0peHx7HWA5QYegs6PjqRB0WI3LHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACFgOs5OrpfgDWlaDDip4/3wdgXbncASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEg4BcQjR7xdeFPDgAAAABJRU5ErkJggg==",F0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgQSURBVHgB7dixFQEBFETRz1GclAr0pAAqkJJJdCCVqoM69u29TbwzszncL78BABZtOwDA4gk6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AATsBlbmtj8NbcfHdWBtLHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAI2A2szPn9GoAaQWd1nt/PANS43AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIOAPk8cOPk0CNzwAAAAASUVORK5CYII=",G0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhZSURBVHgB7dihTZ1hGIbht83Zora2G9TU1XaDLtAVugQDoDFYcBgUigRwJ0GREMQRhAQJE/zuCwl3rmuJO8/z5c/Z8dsAAJ/a1wEAPj1BB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgIDdwGKnv/8OsO3iYT9HN5cDK1noABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwG1jsZH89wLb758PAaoLOcoIO8PFc7gAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABCwG1js17fvA2x7en2Zu8PjwEqCznL/fvwcYNvFw17QWc7lDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABu4HF/l+dD7Dt6fVlYDVBZ7nbw+MA8LFc7gAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABDwDvIZJ4VgQr1WAAAAAElFTkSuQmCC",z0="/piano-simulator/assets/pontoVirgula-DUhdNEoM.png",V0="/piano-simulator/assets/til-DzluC_eO.png",k0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA1lSURBVHgB7d0/qNbXHcfxk2KE5JoMQjSQYhUspHoLdrmBtkPj1MEEMtm12bt3SZfO7dLOdW06X0im2qGLdwpUbQfBqyCogTtoTEAD6XMuFdrQNv/0d77n87xecHkQHdze9/s95/n9nnnrvQufNQBgat9qAMD0BB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASDAgQZM7/kDB9vm4ZfbkecPtRMvHG4vPXeoHVn9dBvPHmwbq7+/+8lH+3/unw8ePdz/vLJ3e/9z9/5eA+Ym6DCp06uA95/XjhxrJ148/IX//nHgH392bxw/tf/Zo355FfeLt67tRx6YzzNvvXfhswZMoU/iZ799sm2tIt4n8qehx/3dax/sB/7Df031QH2CDhPoIT+3mqb7RN3X50voYd/evdq2b1xtQH2CDsX1tfovvv/j/1iVL6mH/Z2d903rUJygQ1F9Kj//3TPtje+cahX8cbWG/9PqB6jJpTgoqN9S//XWT4dN5f/Nz06e2V/3X/jHTgPq8T10KKav2H/7ozdLxfyxfob/mx++ub89AGoRdCjk9VdO7k/mG4WD2b8i1/+Pog61CDoU0WPeL7/NoEf97e9tNaAOQYcCjq8COUvMHzu7+gXk56+KOlQh6DBYvwD3yx+cbTPqZ+rnitzCh3Un6DBYX11XvAD3ZZ0/eWb/lxJgLEGHgfq5eX8W+8z6y19mOy6ARIIOg/Sptk+3Cfpz5fsvJ8A4gg6D9JjPvGr/vLdf3fJVNhhI0GGAPp2fDZto++r93HEX5GAUQYcBXjs697n5/1LlufOwjgQdBkj9qlef0k8/pfe0A/+foMPC+gWypLPzz0s7SoBZCDos7Cfhwds6cszlOBhA0GFhm+Er6b527896B5Yl6LCgfrs9ed3+2NbkD8uBGQk6LGhdJtejHgULixN0WNCJF9Yj6G66w/IEHRZ0fE0m9H6O7mIcLEvQYUGH1ihy1u6wLEGHBa3Ta0aff9aEDksSdFjQxhpFbh1u80Mlgg4L2nCuDDwlgg4AAQQdAAIIOgAEEHRY0N1PPmrr4sGjhw1YjqADT8WDTwUdliTosKDr9/fauvhwjbYRUIGgw4LWKXLrdLwAFQg6LGhdInf93vpsIqAKQYcF7a5J6Jyfw/IEHRbUz9DXIXYmdFieoMOC+le51mFK312jy39QhaDDwi7dvdnSuRAHyxN0WNjFW9daOit3WJ6gw8L62v3K3u2Wqsf8Y5fiYHGCDgO8e+2Dlsr5OYwh6DDA5dWEnjqlXw7ePkBlgg6DpE7pyccJUJmgwyCJU3q/3e6GO4wh6DDQ7/7216gHzZjOYRxBh4H6NNujnuLPa/CVPKhK0GGwnTs3Y87TTegwjqBDAT3os0+3brfDWIIORfx+tXrfvnG1zWodnoAHlQk6FPKHv+9Mu363boexBB2K6UHvF+Vm+vpXf9yrr6vBWIIOBfX19a923p9m6rVuh/EEHYrqE+87q6jPMK3vrMErYaG6Aw0orU+//ef1V0628yfPtCPPHWqVWLdDDYIOk/j3sJ87fqqdeOFwq2Dmm/mQxModJtOjvr1bJ6Jut0MNgg4TOn345VZBf5iMdTvUIOgwoc0iQXe7HeoQdJjMS88dKnExrk/mgg51CDpMpsp07uwcahF0mEyV83OvSoVaBB0mU2FC7+t2EzrUIugwkSrn52IO9Qg6TKTK+bl1O9Qj6DCRCufn1u1Qk6DDRCpM6GIONQk6TKLK+bl1O9Qk6DCJEy+OfxmLdTvUJegwia0jx9poYg51CTpMosKEbt0OdQk6TKCfn49+/7l1O9Qm6DCBCtO5mENtgg4TqHB+vr17tQF1CTpMYPSE3tft1+/vNaAuQYfiKpyfX7pzswG1CToUV+H8/C9ut0N5gg7FjT4/t26HOQg6FDd6QrduhzkIOhRW4fzcuh3mIOhQmNvtwJcl6FDY6Nel+u45zEPQobDTg4O+c9f5OcxC0KGojWcPDj0/v35vb3/lDsxB0KGo0dP5RZfhYCqCDkWNPj+3boe5CDoUNXJCt26H+Qg6FDT6/Ny6HeYj6FCQ2+3AVyXoUNCmdTvwFQk6FDRyQt++4WEyMCNBh2JGn59f2bvdgPkIOhQzcjq/vIq5dTvMSdChmJHn5263w7wEHYqxbge+DkGHQvr5+aiVu3U7zE3QoRAPkwG+LkGHQraOHmujWLfD3AQdChk1oVu3w/wEHYoYeX5u3Q7zE3Qowu124JsQdChi1Pm5dTtkEHQoYtSEbt0OGQQdChh5fm7dDhkEHQpwux34pgQdChh1fm7dDjkEHQoYNaFbt0MOQYcCRpyf79y5ad0OQQQdBhv1utRLd282IIegw2CjbrdfuiPokETQYbDNQev2jz992IAcgg6DjZjQrdshj6DDQJvW7cATIugw0GnrduAJEXQYaNO6HXhCBB0GWnpCf/DooXU7hBJ0GGTI7fa71u2QStBhkCG3203nEEvQYZDNAev2HefnEEvQYZDjLy77QhYxh2yCDgP06XzjwMG2JOt2yCboMMDS07l1O+Q70IAhLt661pZy/d5eA7IJOgywvXu1ATxJVu4AEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAvwTFHlSEaGWRxQAAAAASUVORK5CYII=",ya=new mg,Y0=6038889,Oa={a:op,b:ap,c:cp,d:lp,e:gp,f:dp,g:up,h:hp,i:fp,j:pp,k:mp,l:Ep,m:Bp,n:Cp,o:Qp,p:Ip,q:_p,r:Dp,s:vp,t:xp,u:Sp,v:Mp,w:yp,x:Op,y:Tp,z:bp,ç:wp,0:Np,1:Hp,2:Rp,3:Pp,4:Lp,5:Up,6:Fp,7:Gp,8:zp,9:Vp,agudo:kp,aspa:Yp,chave_direita:Wp,chave_esquerda:Xp,hifen:Kp,igual:qp,ponto_virgula:jp,til:Zp,virgula:Jp},W0={a:$p,b:t0,c:e0,d:n0,e:i0,f:A0,g:r0,h:s0,i:o0,j:a0,k:c0,l:l0,m:g0,n:d0,o:u0,p:h0,q:f0,r:p0,s:m0,t:E0,u:B0,v:C0,w:Q0,x:I0,y:_0,z:D0,ç:v0,0:x0,1:S0,2:M0,3:y0,4:O0,5:T0,6:b0,7:w0,8:N0,9:H0,agudo:R0,aspa:P0,chave_direita:L0,chave_esquerda:U0,hifen:F0,igual:G0,ponto_virgula:z0,til:V0,virgula:k0},Ta={},bA={};for(const[i,t]of Object.entries(Oa)){const e=ya.load(t);e.colorSpace=De,Ta[i]=e}for(const[i,t]of Object.entries(W0)){const e=ya.load(t);e.colorSpace=De,bA[i]=e}const X0=i=>{const t=Ta[i],e=[];for(let A=0;A<6;A++)A===2?e.push(new Kn({map:t,transparent:!0})):e.push(new jn({color:Y0,transparent:!0,opacity:1}));return new Te(new yi(.8,.4,.8),e)},zi={};Object.keys(Oa).forEach(i=>{zi[i]=X0(i)});const K0=[-6,-4.9,-3.8,-2.7,-1.6,-.55,.55,1.6,2.7,3.8,4.9,6],q0=-11,j0=.4,Z0=[["a","q","z","1","aspa"],["s","w","x","2"],["c","d","e","3"],["r","f","v","4"],["g","t","b","5"],["h","y","n","6"],["u","j","m","7"],["k","i","8"],["o","l","9","virgula"],["p","ç","0"],["hifen","agudo","til","ponto_virgula"],["igual","chave_esquerda","chave_direita"]];Z0.forEach((i,t)=>{i.forEach(e=>{zi[e]&&(zi[e].position.x=K0[t])})});Object.values(zi).forEach(i=>{i.position.y=j0,i.position.z=q0});const J0=[{pitch:"E5",start_ms:1e3},{pitch:"D#5",start_ms:1250},{pitch:"E5",start_ms:1500},{pitch:"D#5",start_ms:1750},{pitch:"E5",start_ms:2e3},{pitch:"B4",start_ms:2250},{pitch:"D5",start_ms:2500},{pitch:"C5",start_ms:2750},{pitch:"A4",start_ms:3e3},{pitch:"A3",start_ms:3e3},{pitch:"C4",start_ms:3750},{pitch:"E4",start_ms:4e3},{pitch:"A4",start_ms:4250},{pitch:"B4",start_ms:4500},{pitch:"E3",start_ms:4500},{pitch:"E4",start_ms:5250},{pitch:"G#4",start_ms:5500},{pitch:"B4",start_ms:5750},{pitch:"C5",start_ms:6e3},{pitch:"A3",start_ms:6e3},{pitch:"E4",start_ms:6750},{pitch:"E5",start_ms:7e3},{pitch:"D#5",start_ms:7250},{pitch:"E5",start_ms:7500},{pitch:"D#5",start_ms:7750},{pitch:"E5",start_ms:8e3},{pitch:"B4",start_ms:8250},{pitch:"D5",start_ms:8500},{pitch:"C5",start_ms:8750},{pitch:"A4",start_ms:9e3},{pitch:"A3",start_ms:9e3},{pitch:"C4",start_ms:9750},{pitch:"E4",start_ms:1e4},{pitch:"A4",start_ms:10250},{pitch:"B4",start_ms:10500},{pitch:"E3",start_ms:10500},{pitch:"E4",start_ms:11250},{pitch:"C5",start_ms:11500},{pitch:"B4",start_ms:11750},{pitch:"A4",start_ms:12e3},{pitch:"A3",start_ms:12e3},{pitch:"B4",start_ms:12750},{pitch:"C5",start_ms:13e3},{pitch:"D5",start_ms:13250},{pitch:"E5",start_ms:13500},{pitch:"C4",start_ms:13500},{pitch:"G4",start_ms:14250},{pitch:"F5",start_ms:14500},{pitch:"E5",start_ms:14750},{pitch:"D5",start_ms:15e3},{pitch:"B3",start_ms:15e3},{pitch:"F4",start_ms:15750},{pitch:"E5",start_ms:16e3},{pitch:"D5",start_ms:16250},{pitch:"C5",start_ms:16500},{pitch:"A3",start_ms:16500},{pitch:"E4",start_ms:17250},{pitch:"D5",start_ms:17500},{pitch:"C5",start_ms:17750},{pitch:"B4",start_ms:18e3},{pitch:"G#3",start_ms:18e3},{pitch:"E5",start_ms:20500},{pitch:"D#5",start_ms:20750},{pitch:"E5",start_ms:21e3},{pitch:"D#5",start_ms:21250},{pitch:"E5",start_ms:21500},{pitch:"B4",start_ms:21750},{pitch:"D5",start_ms:22e3},{pitch:"C5",start_ms:22250},{pitch:"A4",start_ms:22500},{pitch:"A3",start_ms:22500},{pitch:"C4",start_ms:23250},{pitch:"E4",start_ms:23500},{pitch:"A4",start_ms:23750},{pitch:"B4",start_ms:24e3},{pitch:"E3",start_ms:24e3},{pitch:"E4",start_ms:24750},{pitch:"G#4",start_ms:25e3},{pitch:"B4",start_ms:25250},{pitch:"C5",start_ms:25500},{pitch:"A3",start_ms:25500},{pitch:"E4",start_ms:26250},{pitch:"E5",start_ms:26500},{pitch:"D#5",start_ms:26750},{pitch:"E5",start_ms:27e3},{pitch:"D#5",start_ms:27250},{pitch:"E5",start_ms:27500},{pitch:"B4",start_ms:27750},{pitch:"D5",start_ms:28e3},{pitch:"C5",start_ms:28250},{pitch:"A4",start_ms:28500},{pitch:"A3",start_ms:28500},{pitch:"C4",start_ms:29250},{pitch:"E4",start_ms:29500},{pitch:"A4",start_ms:29750},{pitch:"B4",start_ms:3e4},{pitch:"E3",start_ms:3e4},{pitch:"E4",start_ms:30750},{pitch:"C5",start_ms:31e3},{pitch:"B4",start_ms:31250},{pitch:"A4",start_ms:31500},{pitch:"A3",start_ms:31500},{pitch:"E4",start_ms:31500},{pitch:"A1",start_ms:32500}],$0=[{pitch:"A4",start_ms:0},{pitch:"F3",start_ms:0},{pitch:"C4",start_ms:0},{pitch:"A4",start_ms:500},{pitch:"C5",start_ms:750},{pitch:"C5",start_ms:1e3},{pitch:"F3",start_ms:1e3},{pitch:"C4",start_ms:1e3},{pitch:"A5",start_ms:1250},{pitch:"F5",start_ms:1500},{pitch:"B-5",start_ms:2e3},{pitch:"F3",start_ms:2e3},{pitch:"D4",start_ms:2e3},{pitch:"F5",start_ms:2500},{pitch:"D5",start_ms:2750},{pitch:"D5",start_ms:3e3},{pitch:"F3",start_ms:3e3},{pitch:"D4",start_ms:3e3},{pitch:"B-5",start_ms:3250},{pitch:"F5",start_ms:3500},{pitch:"D5",start_ms:4e3},{pitch:"F3",start_ms:4e3},{pitch:"E4",start_ms:4e3},{pitch:"E5",start_ms:4250},{pitch:"C5",start_ms:4500},{pitch:"G5",start_ms:4750},{pitch:"G5",start_ms:5e3},{pitch:"F3",start_ms:5e3},{pitch:"E4",start_ms:5e3},{pitch:"E5",start_ms:5250},{pitch:"C5",start_ms:5500},{pitch:"B-4",start_ms:6e3},{pitch:"F3",start_ms:6e3},{pitch:"D4",start_ms:6e3},{pitch:"F4",start_ms:6250},{pitch:"F4",start_ms:6500},{pitch:"D5",start_ms:6750},{pitch:"D5",start_ms:7e3},{pitch:"F3",start_ms:7e3},{pitch:"D4",start_ms:7e3},{pitch:"B-4",start_ms:7250},{pitch:"F4",start_ms:7500},{pitch:"C3",start_ms:8e3},{pitch:"F3",start_ms:8e3},{pitch:"A3",start_ms:8e3},{pitch:"A4",start_ms:8500},{pitch:"G4",start_ms:8750},{pitch:"A4",start_ms:9e3},{pitch:"C3",start_ms:9e3},{pitch:"F3",start_ms:9e3},{pitch:"A3",start_ms:9e3},{pitch:"G4",start_ms:9250},{pitch:"A4",start_ms:9500},{pitch:"A4",start_ms:1e4},{pitch:"D3",start_ms:1e4},{pitch:"F3",start_ms:1e4},{pitch:"B-3",start_ms:1e4},{pitch:"A4",start_ms:10250},{pitch:"A4",start_ms:11e3},{pitch:"D3",start_ms:11e3},{pitch:"F3",start_ms:11e3},{pitch:"B-3",start_ms:11e3},{pitch:"E3",start_ms:12e3},{pitch:"G3",start_ms:12e3},{pitch:"C4",start_ms:12e3},{pitch:"G4",start_ms:12500},{pitch:"G4",start_ms:12750},{pitch:"E3",start_ms:13e3},{pitch:"G3",start_ms:13e3},{pitch:"C4",start_ms:13e3},{pitch:"C5",start_ms:13250},{pitch:"G4",start_ms:13500},{pitch:"A4",start_ms:14e3},{pitch:"E3",start_ms:14e3},{pitch:"A3",start_ms:14e3},{pitch:"C4",start_ms:14e3},{pitch:"B-4",start_ms:14750},{pitch:"A4",start_ms:14875},{pitch:"G4",start_ms:15e3},{pitch:"E3",start_ms:15e3},{pitch:"A3",start_ms:15e3},{pitch:"C4",start_ms:15e3},{pitch:"D3",start_ms:16e3},{pitch:"F3",start_ms:16e3},{pitch:"A3",start_ms:16e3},{pitch:"F4",start_ms:16500},{pitch:"F4",start_ms:16750},{pitch:"D3",start_ms:17e3},{pitch:"F3",start_ms:17e3},{pitch:"A3",start_ms:17e3},{pitch:"F4",start_ms:17250},{pitch:"F4",start_ms:17500},{pitch:"F4",start_ms:18e3},{pitch:"C3",start_ms:18e3},{pitch:"F3",start_ms:18e3},{pitch:"A3",start_ms:18e3},{pitch:"F4",start_ms:18250},{pitch:"E4",start_ms:18750},{pitch:"C3",start_ms:19e3},{pitch:"F3",start_ms:19e3},{pitch:"A3",start_ms:19e3},{pitch:"F4",start_ms:19250},{pitch:"B2",start_ms:2e4},{pitch:"D3",start_ms:2e4},{pitch:"G3",start_ms:2e4},{pitch:"F4",start_ms:20500},{pitch:"B2",start_ms:21e3},{pitch:"D3",start_ms:21e3},{pitch:"G3",start_ms:21e3},{pitch:"A4",start_ms:21250},{pitch:"F4",start_ms:21500},{pitch:"A-4",start_ms:21750},{pitch:"G4",start_ms:22e3},{pitch:"B-2",start_ms:22e3},{pitch:"D3",start_ms:22e3},{pitch:"F3",start_ms:22e3},{pitch:"F4",start_ms:22250},{pitch:"F4",start_ms:22500},{pitch:"B-2",start_ms:23e3},{pitch:"D3",start_ms:23e3},{pitch:"F3",start_ms:23e3},{pitch:"F2",start_ms:24e3},{pitch:"A2",start_ms:24e3},{pitch:"C3",start_ms:24e3},{pitch:"F4",start_ms:24500},{pitch:"F4",start_ms:24750},{pitch:"F2",start_ms:25e3},{pitch:"A2",start_ms:25e3},{pitch:"C3",start_ms:25e3},{pitch:"F4",start_ms:25250},{pitch:"F4",start_ms:25500},{pitch:"A4",start_ms:26e3},{pitch:"A2",start_ms:26e3},{pitch:"C#3",start_ms:26e3},{pitch:"E3",start_ms:26e3},{pitch:"G4",start_ms:26250},{pitch:"F4",start_ms:26750},{pitch:"A2",start_ms:27e3},{pitch:"C#3",start_ms:27e3},{pitch:"E3",start_ms:27e3},{pitch:"G4",start_ms:27250},{pitch:"A2",start_ms:28e3},{pitch:"C#3",start_ms:28e3},{pitch:"E3",start_ms:28e3},{pitch:"A4",start_ms:28500},{pitch:"C5",start_ms:28750},{pitch:"A2",start_ms:29e3},{pitch:"C#3",start_ms:29e3},{pitch:"E3",start_ms:29e3},{pitch:"D5",start_ms:29250},{pitch:"A4",start_ms:29750},{pitch:"A4",start_ms:3e4},{pitch:"A2",start_ms:3e4},{pitch:"D3",start_ms:3e4},{pitch:"F3",start_ms:3e4},{pitch:"A2",start_ms:31e3},{pitch:"D3",start_ms:31e3},{pitch:"F3",start_ms:31e3},{pitch:"A2",start_ms:31250},{pitch:"C3",start_ms:31250},{pitch:"F3",start_ms:31250},{pitch:"F2",start_ms:32e3},{pitch:"C3",start_ms:32e3},{pitch:"F3",start_ms:32e3},{pitch:"F4",start_ms:32500},{pitch:"F4",start_ms:32750},{pitch:"F2",start_ms:33e3},{pitch:"C3",start_ms:33e3},{pitch:"F3",start_ms:33e3},{pitch:"A4",start_ms:33250},{pitch:"C5",start_ms:33500},{pitch:"D5",start_ms:34e3},{pitch:"G2",start_ms:34e3},{pitch:"D3",start_ms:34e3},{pitch:"G3",start_ms:34e3},{pitch:"G4",start_ms:34750},{pitch:"G2",start_ms:35e3},{pitch:"D3",start_ms:35e3},{pitch:"G3",start_ms:35e3},{pitch:"F4",start_ms:35250},{pitch:"B-2",start_ms:36e3},{pitch:"F3",start_ms:36e3},{pitch:"B-3",start_ms:36e3},{pitch:"F4",start_ms:36500},{pitch:"F4",start_ms:36750},{pitch:"B-2",start_ms:37e3},{pitch:"F3",start_ms:37e3},{pitch:"B-3",start_ms:37e3},{pitch:"F4",start_ms:37250},{pitch:"F4",start_ms:37750},{pitch:"G4",start_ms:38e3},{pitch:"C3",start_ms:38e3},{pitch:"G3",start_ms:38e3},{pitch:"C4",start_ms:38e3},{pitch:"C3",start_ms:39e3},{pitch:"G3",start_ms:39e3},{pitch:"C4",start_ms:39e3},{pitch:"G4",start_ms:4e4},{pitch:"C3",start_ms:4e4},{pitch:"G3",start_ms:4e4},{pitch:"C4",start_ms:4e4},{pitch:"B-3",start_ms:41e3},{pitch:"A3",start_ms:41250},{pitch:"C3",start_ms:42e3},{pitch:"E3",start_ms:42e3},{pitch:"G3",start_ms:42e3},{pitch:"A4",start_ms:42500},{pitch:"C5",start_ms:42750},{pitch:"C3",start_ms:43e3},{pitch:"E3",start_ms:43e3},{pitch:"G3",start_ms:43e3},{pitch:"A4",start_ms:43250},{pitch:"C5",start_ms:43500},{pitch:"D5",start_ms:44e3},{pitch:"D3",start_ms:44e3},{pitch:"F3",start_ms:44e3},{pitch:"A3",start_ms:44e3},{pitch:"C5",start_ms:44500},{pitch:"G4",start_ms:44750},{pitch:"D3",start_ms:45e3},{pitch:"F3",start_ms:45e3},{pitch:"A3",start_ms:45e3},{pitch:"F4",start_ms:45250},{pitch:"G2",start_ms:46e3},{pitch:"B-2",start_ms:46e3},{pitch:"D3",start_ms:46e3},{pitch:"D4",start_ms:46750},{pitch:"G2",start_ms:47e3},{pitch:"B-2",start_ms:47e3},{pitch:"D3",start_ms:47e3},{pitch:"F4",start_ms:47250},{pitch:"D4",start_ms:47500},{pitch:"A4",start_ms:47750},{pitch:"G4",start_ms:48e3},{pitch:"B-2",start_ms:48e3},{pitch:"D3",start_ms:48e3},{pitch:"F3",start_ms:48e3},{pitch:"F4",start_ms:48250},{pitch:"F4",start_ms:48500},{pitch:"B-2",start_ms:49e3},{pitch:"D3",start_ms:49e3},{pitch:"F3",start_ms:49e3},{pitch:"C3",start_ms:5e4},{pitch:"E3",start_ms:5e4},{pitch:"G3",start_ms:5e4},{pitch:"C5",start_ms:50500},{pitch:"C5",start_ms:50750},{pitch:"C3",start_ms:51e3},{pitch:"E3",start_ms:51e3},{pitch:"G3",start_ms:51e3},{pitch:"C5",start_ms:51500},{pitch:"D5",start_ms:52e3},{pitch:"D3",start_ms:52e3},{pitch:"F3",start_ms:52e3},{pitch:"A3",start_ms:52e3},{pitch:"C5",start_ms:52250},{pitch:"A4",start_ms:52750},{pitch:"G4",start_ms:53e3},{pitch:"D3",start_ms:53e3},{pitch:"F3",start_ms:53e3},{pitch:"A3",start_ms:53e3},{pitch:"F4",start_ms:53250},{pitch:"G2",start_ms:54e3},{pitch:"B-2",start_ms:54e3},{pitch:"D3",start_ms:54e3},{pitch:"D4",start_ms:54750},{pitch:"G2",start_ms:55e3},{pitch:"B-2",start_ms:55e3},{pitch:"D3",start_ms:55e3},{pitch:"F4",start_ms:55250},{pitch:"D4",start_ms:55500},{pitch:"A4",start_ms:55750},{pitch:"G4",start_ms:56e3},{pitch:"B-2",start_ms:56e3},{pitch:"D3",start_ms:56e3},{pitch:"F3",start_ms:56e3},{pitch:"F4",start_ms:56250},{pitch:"F4",start_ms:56500},{pitch:"B-2",start_ms:57e3},{pitch:"D3",start_ms:57e3},{pitch:"F3",start_ms:57e3},{pitch:"D3",start_ms:58e3},{pitch:"A3",start_ms:58e3},{pitch:"D4",start_ms:58e3},{pitch:"A4",start_ms:58250},{pitch:"D5",start_ms:58500},{pitch:"C5",start_ms:58750},{pitch:"D5",start_ms:59e3},{pitch:"F5",start_ms:59250},{pitch:"C3",start_ms:6e4},{pitch:"A3",start_ms:6e4},{pitch:"D4",start_ms:6e4},{pitch:"A4",start_ms:60250},{pitch:"D5",start_ms:60500},{pitch:"C5",start_ms:60750},{pitch:"D5",start_ms:61e3},{pitch:"F5",start_ms:61250},{pitch:"B2",start_ms:62e3},{pitch:"A3",start_ms:62e3},{pitch:"D4",start_ms:62e3},{pitch:"D5",start_ms:62500},{pitch:"C5",start_ms:62750},{pitch:"D5",start_ms:63e3},{pitch:"F5",start_ms:63333.33},{pitch:"C5",start_ms:63666.67},{pitch:"D5",start_ms:64e3},{pitch:"B-2",start_ms:64e3},{pitch:"F3",start_ms:64e3},{pitch:"B-3",start_ms:64e3},{pitch:"D5",start_ms:66e3},{pitch:"B-2",start_ms:66e3},{pitch:"F3",start_ms:66e3},{pitch:"B-3",start_ms:66e3},{pitch:"D5",start_ms:67500},{pitch:"C5",start_ms:68e3},{pitch:"F3",start_ms:68e3},{pitch:"A3",start_ms:68e3},{pitch:"C4",start_ms:68e3},{pitch:"A4",start_ms:68750},{pitch:"F4",start_ms:69250},{pitch:"G4",start_ms:7e4},{pitch:"B-2",start_ms:7e4},{pitch:"F3",start_ms:7e4},{pitch:"B-3",start_ms:7e4},{pitch:"D4",start_ms:70750},{pitch:"D4",start_ms:71750},{pitch:"A4",start_ms:72e3},{pitch:"B-2",start_ms:72e3},{pitch:"F3",start_ms:72e3},{pitch:"B-3",start_ms:72e3},{pitch:"G4",start_ms:72250},{pitch:"F4",start_ms:72750},{pitch:"F4",start_ms:73250},{pitch:"F4",start_ms:73500},{pitch:"F4",start_ms:74e3},{pitch:"F2",start_ms:74e3},{pitch:"C3",start_ms:74e3},{pitch:"F3",start_ms:74e3}],dn=new(window.AudioContext||window.webkitAudioContext);let un=null,vi=!1,Ze=null,ba=null,ns=1,Pe=null,ue=null,Vn=null,is=null,Oe=null,me=0,xi=0,Je=0;const bi=1e3;let Si=0;function wa(i,t="bottom-to-top"){const n=document.createElement("canvas");["left-to-right","right-to-left"].includes(t)?(n.width=256,n.height=1):(n.width=1,n.height=256);const A=n.getContext("2d");let r=0,o=0,s=0,a=0;switch(t){case"top-to-bottom":r=0,o=0,s=0,a=256;break;case"bottom-to-top":r=0,o=256,s=0,a=0;break;case"left-to-right":r=0,o=0,s=256,a=0;break;case"right-to-left":r=256,o=0,s=0,a=0;break;default:console.warn(`Direção inválida: "${t}". Usando 'bottom-to-top'.`),r=0,o=256,s=0,a=0}const c=A.createLinearGradient(r,o,s,a);c.addColorStop(0,Po(i,0)),c.addColorStop(.7,Po(i,.7)),A.fillStyle=c,A.fillRect(0,0,n.width,n.height);const l=new gg(n);return l.wrapS=an,l.wrapT=an,l.minFilter=We,l}function Po(i,t){const e=parseInt(i.slice(1,3),16),n=parseInt(i.slice(3,5),16),A=parseInt(i.slice(5,7),16);return`rgba(${e},${n},${A},${t})`}const tm=wa("#E323CA","top-to-bottom");wa("#E323CA","bottom-to-top");const ve=new ag;ve.background=new kt(723218);const Es=new Re(85,window.innerWidth/window.innerHeight,.1,1e3);Es.position.set(0,6,3);Es.lookAt(0,1,0);const Vi=new sp({antialias:!0});Vi.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Vi.domElement);const em=new Oi(13.5,2),nm=new jn({color:14885834,side:ke,transparent:!0,opacity:.5}),hn=new Te(em,nm);hn.rotation.x=-Math.PI/2;hn.position.z=3;ve.add(hn);const im=new Oi(.04,9),Am=new jn({color:14885834,map:tm,side:ke,transparent:!0,opacity:.5,depthWrite:!1}),rm=Array.from({length:13},(i,t)=>new Te(im,Am));rm.forEach((i,t)=>{i.rotation.x=-Math.PI/2,i.position.x=[0,1.1,-1.1,2.2,-2.2,3.3,-3.3,4.4,-4.4,5.5,-5.5,6.7,-6.7][t],i.position.z=-2.5,ve.add(i)});ve.add(new Qg(16777215,2));const Na=new Cg(16119185,4);Na.position.set(0,10,0);ve.add(Na);const ee=[],Le=[];function Q(i,t,e){Le.push({letter:i,delay:t,speed:e,spawned:!1})}function wA(){Le.forEach(i=>{i.delay*=ns,i.speed/=ns})}function sm(i,t){const e=zi[i];if(!e)return;const n=e.geometry.clone();let A;Array.isArray(e.material)?A=e.material.map(o=>o.clone()):A=e.material.clone();const r=new Te(n,A);r.position.copy(e.position),r.userData={speed:t,letter:i,hit:!1,opacity:1},ve.add(r),ee.push(r)}function Xn(){ue=requestAnimationFrame(Xn);const i=performance.now()-Vn;if(Le.forEach(t=>{i>t.delay&&!t.spawned&&(sm(t.letter,t.speed),t.spawned=!0)}),Vn&&Si>0){const t=performance.now()-Vn,e=Math.min(t/Si,1);Qs.style.width=e*100+"%",e>=1&&(NA.style.display="none")}for(let t=ee.length-1;t>=0;t--){const e=ee[t];e.position.z+=e.userData.speed;const n=hn.position.z;if(!e.userData.hit&&e.position.z>=n-.8&&Ze==="autoplay"){e.userData.hit=!0;const r=e.userData.letter;Array.isArray(e.material)&&e.material.forEach((s,a)=>{if(s instanceof jn&&s.color&&s.color.set(5355423),a===2&&s instanceof Kn){const c=bA[r];c?(s.map=c,s.needsUpdate=!0):console.warn(`Textura alternativa não encontrada para: ${r}`)}});const o=xn[e.userData.letter];un&&o&&un.play(o),setTimeout(()=>{ve.children.includes(e)&&ve.remove(e);const s=ee.indexOf(e);s!==-1&&ee.splice(s,1)},400)}if(Ze==="jogar"&&!e.userData.hit&&e.position.z>n+1.5){e.userData.hit=!0;const r=Je*.05;me=Math.max(0,me-r),ki(-r),kn(),ve.remove(e),ee.splice(t,1)}}Vi.render(ve,Es),ee.length===0&&Le.every(t=>t.spawned)&&(is||(is=setTimeout(()=>{cancelAnimationFrame(ue);const t=Vi.domElement;t.style.display="none";const e=document.getElementById("fimDaCena"),n=document.getElementById("pontuacaoFinal");e&&(e.style.display="flex",am(),Ze==="jogar"?(n.style.display="block",om()):n.style.display="none"),document.getElementById("botoesMusica").style.display="none",document.getElementById("pontuacaoContainer").style.display="none",document.getElementById("pontuacaoTitle").style.display="none",document.getElementById("pontuacao").style.display="none",document.getElementById("gameMenu").style.display="none",telaInicial.style.display="none",console.log("Animação finalizada.")},1e3)))}function Bs(){ue!==null&&(cancelAnimationFrame(ue),ue=null);for(let i of ee)ve.remove(i);ee.length=0,Le.length=0,Vn=null,is=null}function kn(){Yi&&(Yi.textContent=`000${Math.floor(me)}`);const i=document.getElementById("pontuacaoBar");if(i){const t=me/bi*100;i.style.width=t+"%"}}function om(){const i=document.getElementById("pontuacaoFinal"),t=Math.floor(me),e=2e3,n=performance.now();function A(r){const o=r-n,s=Math.min(o/e,1),a=Math.floor(s*t);i.textContent=a,s<1&&requestAnimationFrame(A)}requestAnimationFrame(A)}function am(){const i=document.querySelector(".estrelas"),t=document.getElementById("fraseMotivacao");if(Ze==="autoplay"){i&&(i.style.display="none"),t&&(t.style.display="none");return}i&&(i.style.display="block"),t&&(t.style.display="block");const e=document.querySelectorAll(".estrelas span"),n=Math.floor(me);let A=1,r="Bom trabalho!";n<700?(A=1,r="Boa tentativa! Continue praticando!"):n<850?(A=2,r="Excelente desempenho! Você está quase lá!"):(A=3,r="Perfeito! Você é um maestro!"),e.forEach((o,s)=>{s<A?o.textContent="★":o.textContent="☆"}),t&&(t.textContent=r)}function ki(i){const t=Math.round(i);if(t===0)return;const e=document.createElement("div");e.className=`floating-points ${t>=0?"positive":"negative"}`,e.textContent=t>=0?`+${t}`:`${t}`;const n=Math.random()*(window.innerWidth-200)+100,A=window.innerHeight*.3+Math.random()*200;e.style.left=n+"px",e.style.top=A+"px",document.body.appendChild(e),setTimeout(()=>{e.remove()},2e3)}function cm(i){Array.isArray(i.material)&&i.material.forEach(t=>{(t instanceof jn||t instanceof Kn)&&(t.opacity=i.userData.opacity,t.transparent=!0,t.needsUpdate=!0)})}function Ha(i){if(i.userData.opacity=Math.max(0,i.userData.opacity-1/3),cm(i),i.userData.opacity<=.05){ve.remove(i);const t=ee.indexOf(i);t!==-1&&ee.splice(t,1)}}const Cs=Vi.domElement,lm=document.getElementById("resetarButton"),gm=document.getElementById("voltarButton"),Yi=document.getElementById("pontuacao");document.getElementById("gameMenu");const NA=document.getElementById("progressContainer"),Qs=document.getElementById("progressBar"),dm=document.getElementById("autoplayButton"),um=document.getElementById("jogarButton"),hm={elvis:"Beethoven - Für Elise",bethoven:"Bethoven - Ode á Alegria",tchai:"Tchaikovsky - Lago dos Cisnes",yoursong:"Elton John - Your Song"};function As(i){return hm[i]||"Música"}const fm=localStorage.getItem("musica")||"elvis";localStorage.getItem("modo");ba=localStorage.getItem("modoMusica")||"jogador";Oe=fm;ns=ba==="aprendiz"?1.428571:1;ue!==null&&(cancelAnimationFrame(ue),ue=null);gm.addEventListener("click",()=>{Ze=null,NA.style.display="none",Yi.style.display="none",document.getElementById("pontuacaoContainer").style.display="none",document.getElementById("gameMenu").style.display="none",document.getElementById("nomeDaMusica").style.display="none",document.getElementById("botoesMusica").style.display="none",document.getElementById("botoesJogar").classList.remove("ativo"),document.getElementById("botoesAutoplay").classList.remove("ativo"),Cs.style.display="none",window.location.href="selector.html"});dm.addEventListener("click",()=>{Ze!=="autoplay"&&(Qs.style.width="0%",NA.style.display="flex",Yi.style.display="none",document.getElementById("pontuacaoContainer").style.display="none",document.getElementById("pontuacaoTitle").style.display="none",document.getElementById("gameMenu").style.display="flex",document.getElementById("nomeDaMusica").textContent=As(Oe),document.getElementById("nomeDaMusica").style.display="block",document.getElementById("botoesMusica").style.display="flex",document.getElementById("botoesAutoplay").classList.add("ativo"),document.getElementById("botoesJogar").classList.remove("ativo"),Cs.style.display="inline",Ze="autoplay",me=0,kn(),Bs(),Oe==="bethoven"?Is():Oe=="tchai"?_s():Oe==="yoursong"?xs():vs(),Vn=performance.now(),Pe&&(document.removeEventListener("keydown",Pe),Pe=null),ue!==null&&(cancelAnimationFrame(ue),ue=null),dn.state==="suspended"&&dn.resume(),vi?Xn():ss.instrument(dn,"acoustic_grand_piano",{gain:4}).then(i=>{un=i,vi=!0,Xn()}))});um.addEventListener("click",()=>{Ze!=="jogar"&&(document.getElementById("gameMenu").style.display="flex",Yi.style.display="block",document.getElementById("nomeDaMusica").textContent=As(Oe),document.getElementById("nomeDaMusica").style.display="block",Cs.style.display="inline",Qs.style.width="0%",NA.style.display="flex",document.getElementById("pontuacaoContainer").style.display="block",document.getElementById("pontuacaoTitle").style.display="block",document.getElementById("nomeDaMusica").textContent=As(Oe),document.getElementById("nomeDaMusica").style.display="block",document.getElementById("botoesMusica").style.display="flex",document.getElementById("botoesJogar").classList.add("ativo"),document.getElementById("botoesAutoplay").classList.remove("ativo"),Ze="jogar",me=0,kn(),Bs(),Oe==="bethoven"?Is():Oe=="tchai"?_s():Oe==="yoursong"?xs():vs(),Vn=performance.now(),ue!==null&&(cancelAnimationFrame(ue),ue=null),Pe&&document.removeEventListener("keydown",Pe),Pe=i=>{const t=xn[i.key];if(!t||!un)return;un.play(t);let e=!1,n=null,A=1/0;for(let r=0;r<ee.length;r++){const o=ee[r],s=xn[o.userData.letter],a=Math.abs(o.position.z-hn.position.z)<1;if(!o.userData.hit&&s===t&&a){const c=Math.abs(o.position.z-hn.position.z);c<A&&(A=c,n=o)}}if(n){n.userData.hit=!0,e=!0;const r=n.userData.letter;Array.isArray(n.material)&&n.material.forEach((o,s)=>{if(o instanceof jn&&o.color&&o.color.set(5355423),s===2&&o instanceof Kn){const a=bA[r];a?(o.map=a,o.needsUpdate=!0):console.warn(`Textura alternativa não encontrada para: ${r}`)}}),setTimeout(()=>{me=Math.min(bi,me+Je),ki(Je),kn(),ve.remove(n);const o=ee.indexOf(n);o!==-1&&ee.splice(o,1)},400)}if(!e){let r=null,o=1/0;for(let s=0;s<ee.length;s++){const a=ee[s],c=xn[a.userData.letter];if(!a.userData.hit&&c===t){const l=Math.abs(a.position.z-hn.position.z);l<o&&(o=l,r=a)}}if(r)Ha(r);else{const s=Je*.1;me=Math.max(0,me-s),ki(-s),kn()}}},document.addEventListener("keydown",Pe),dn.state==="suspended"&&dn.resume(),vi?Xn():ss.instrument(dn,"acoustic_grand_piano",{gain:4}).then(i=>{un=i,vi=!0,Xn()}))});lm.addEventListener("click",()=>{Bs(),ue!==null&&(cancelAnimationFrame(ue),ue=null),Pe&&(document.removeEventListener("keydown",Pe),Pe=null),Oe==="bethoven"?Is():Oe==="tchai"?_s():Oe==="yoursong"?xs():vs(),Vn=performance.now(),Ze==="jogar"&&(Pe=i=>{const t=xn[i.key];if(!t||!un)return;un.play(t);let e=!1;for(let n=ee.length-1;n>=0;n--){const A=ee[n],r=xn[A.userData.letter],o=Math.abs(A.position.z-hn.position.z)<.4;if(!A.userData.hit&&r===t&&o){A.userData.hit=!0,e=!0;const s=A.userData.letter;Array.isArray(A.material)&&A.material.forEach((a,c)=>{if(a instanceof jn&&a.color&&a.color.set(5355423),c===2&&a instanceof Kn){const l=bA[s];l?(a.map=l,a.needsUpdate=!0):console.warn(`Textura alternativa não encontrada para: ${s}`)}}),setTimeout(()=>{me=Math.min(bi,me+Je),ki(Je),kn(),ve.remove(A);const a=ee.indexOf(A);a!==-1&&ee.splice(a,1)},400);break}}if(!e){let n=null,A=1/0;for(let r=0;r<ee.length;r++){const o=ee[r],s=xn[o.userData.letter];if(!o.userData.hit&&s===t){const a=Math.abs(o.position.z-hn.position.z);a<A&&(A=a,n=o)}}if(n)Ha(n);else{const r=Je*.1;me=Math.max(0,me-r),ki(-r),kn()}}},document.addEventListener("keydown",Pe)),dn.state==="suspended"&&dn.resume(),vi?Xn():ss.instrument(dn,"acoustic_grand_piano",{gain:4}).then(i=>{un=i,vi=!0,Xn()})});function Is(){Q("g",0,.05),Q("z",0,.05),Q("m",0,.05),Q("g",536,.05),Q("h",1071,.05),Q("k",1607,.05),Q("k",2143,.05),Q("0",2143,.05),Q("m",2143,.05),Q("h",2679,.05),Q("g",3214,.05),Q("d",3750,.05),Q("a",4286,.05),Q("hifen",4286,.05),Q("m",4286,.05),Q("a",4821,.05),Q("d",5357,.05),Q("c",5357,.05),Q("g",5893,.05),Q("z",5893,.05),Q("g",6429,.05),Q("m",6429,.05),Q("d",7232,.05),Q("d",7500,.05),Q("g",8571,.05),Q("z",8571,.05),Q("m",8571,.05),Q("g",9107,.05),Q("h",9643,.05),Q("k",10179,.05),Q("k",10714,.05),Q("0",10714,.05),Q("m",10714,.05),Q("h",11250,.05),Q("g",11786,.05),Q("d",12321,.05),Q("a",12857,.05),Q("hifen",12857,.05),Q("m",12857,.05),Q("a",13393,.05),Q("d",13929,.05),Q("c",13929,.05),Q("g",14464,.05),Q("z",14464,.05),Q("d",15e3,.05),Q(".",15e3,.05),Q("m",15e3,.05),Q("a",15804,.05),Q("hifen",15804,.05),Q("m",15804,.05),Q("a",16071,.05),Q("hifen",16071,.05),Q("m",16071,.05),Q("d",17143,.05),Q("0",17143,.05),Q("m",17143,.05),Q("d",17679,.05),Q("g",18214,.05),Q("z",18214,.05),Q("m",18214,.05),Q("a",18750,.05),Q("d",19286,.05),Q("0",19286,.05),Q("m",19286,.05),Q("g",19821,.05),Q("h",20089,.05),Q("g",20357,.05),Q("z",20357,.05),Q("m",20357,.05),Q("a",20893,.05),Q("d",21429,.05),Q("0",21429,.05),Q("m",21429,.05),Q("g",21964,.05),Q("h",22232,.05),Q("g",22500,.05),Q("2",22500,.05),Q("d",23036,.05),Q("a",23571,.05),Q("n",23571,.05),Q("d",24107,.05),Q(",",24107,.05),Q("m",24643,.05),Q("g",25714,.05),Q("z",25714,.05),Q("m",25714,.05),Q("g",26250,.05),Q("h",26786,.05),Q("k",27321,.05),Q("k",27857,.05),Q("0",27857,.05),Q("m",27857,.05),Q("h",28393,.05),Q("g",28929,.05),Q("d",29464,.05),Q("a",3e4,.05),Q("hifen",3e4,.05),Q("m",3e4,.05),Q("a",30536,.05),Q("d",31071,.05),Q("c",31071,.05),Q("g",31607,.05),Q("z",31607,.05),Q("d",32143,.05),Q(".",32143,.05),Q("m",32143,.05),Q("a",32946,.05),Q("hifen",32946,.05),Q("m",32946,.05),Q("a",33214,.05),Q("hifen",33214,.05),Q("m",33214,.05),wA(),xi=Le.length,Je=bi/xi,Si=Math.max(...Le.map(i=>i.delay))+5e3}function _s(){Q("u",0,.05),Q("0",0,.05),Q("p",1690,.05),Q("chave_direita",1690,.05),Q("w",2113,.05),Q("e",2535,.05),Q("t",2958,.05),Q("u",3380,.05),Q("0",3380,.05),Q("e",4648,.05),Q("u",5070,.05),Q("0",5070,.05),Q("e",6338,.05),Q("u",6761,.05),Q("0",6761,.05),Q("p",8028,.05),Q("e",8451,.05),Q("2",8451,.05),Q("p",8873,.05),Q("k",9296,.05),Q("m",9296,.05),Q("e",9718,.05),Q("p",10141,.05),Q("0",10141,.05),Q("hifen",11831,.05),Q("t",12254,.05),Q("e",12676,.05),Q("w",13099,.05),Q("u",13521,.05),Q("0",13521,.05),Q("p",15211,.05),Q("hifen",15211,.05),Q("w",15634,.05),Q("e",16056,.05),Q("t",16479,.05),Q("u",16901,.05),Q("0",16901,.05),Q("e",18169,.05),Q("u",18592,.05),Q("0",18592,.05),Q("e",19859,.05),Q("u",20282,.05),Q("0",20282,.05),Q("p",21549,.05),Q("e",21972,.05),Q("2",21972,.05),Q("p",22394,.05),Q("k",22817,.05),Q("m",22817,.05),Q("e",23240,.05),Q("p",23662,.05),Q("0",23662,.05),Q("0",25352,.05),Q("p",26197,.05),Q("w",27042,.05),Q("n",27042,.05),Q("e",27887,.05),Q("t",28732,.05),Q("m",28732,.05),Q("u",29578,.05),Q("i",3e4,.05),Q("o",30423,.05),Q(",",30423,.05),Q("i",31690,.05),Q("u",32113,.05),Q(",",32113,.05),Q("i",32958,.05),Q("o",33380,.05),Q("3",33803,.05),Q("hifen",33803,.05),Q("o",35071,.05),Q("i",35493,.05),Q("c",35493,.05),Q("o",36338,.05),Q("3",36761,.05),Q("1",37183,.05),Q("x",37183,.05),Q("3",38451,.05),Q("u",38873,.05),Q(",",38873,.05),Q("e",39296,.05),Q("w",39718,.05),Q("0",39718,.05),Q("p",40141,.05),Q("w",40563,.05),Q("n",40563,.05),Q("e",41409,.05),Q("t",42254,.05),Q("m",42254,.05),Q("u",43099,.05),Q("i",43521,.05),Q("o",43944,.05),Q(",",43944,.05),Q("i",45211,.05),Q("u",45634,.05),Q(",",45634,.05),Q("i",46479,.05),Q("o",46902,.05),Q("3",47324,.05),Q("hifen",47324,.05),Q("o",48592,.05),Q("i",49014,.05),Q("c",49014,.05),Q("o",49859,.05),Q("3",50282,.05),Q("5",50704,.05),Q("z",50704,.05),Q("i",51972,.05),Q("t",52395,.05),Q(";",52395,.05),Q("i",53240,.05),Q("5",53662,.05),Q("1",54085,.05),Q(".",54085,.05),Q("b",54085,.05),Q("2",55352,.05),Q("1",55775,.05),Q("hifen",55775,.05),Q(";",55775,.05),Q("u",57042,.05),Q("u",57465,.05),Q("0",57465,.05),Q("p",59155,.05),Q("hifen",59155,.05),Q("w",59578,.05),Q("e",6e4,.05),Q("t",60423,.05),Q("u",60845,.05),Q("0",60845,.05),Q("e",62113,.05),Q("u",62535,.05),Q("0",62535,.05),Q("e",63803,.05),Q("u",64226,.05),Q("0",64226,.05),Q("p",65493,.05),Q("e",65916,.05),Q("2",65916,.05),Q("p",66338,.05),Q("k",66761,.05),Q("m",66761,.05),Q("e",67183,.05),Q("p",67606,.05),Q("0",67606,.05),Q("hifen",69296,.05),Q("t",69719,.05),Q("e",70141,.05),Q("w",70564,.05),Q("u",70986,.05),Q("0",70986,.05),Q("p",72676,.05),Q("hifen",72676,.05),Q("w",73099,.05),Q("e",73521,.05),Q("t",73944,.05),Q("u",74366,.05),Q("0",74366,.05),Q("e",75634,.05),Q("u",76057,.05),Q("0",76057,.05),Q("e",77324,.05),Q("u",77747,.05),Q("0",77747,.05),Q("p",79014,.05),Q("e",79437,.05),Q("2",79437,.05),Q("p",79859,.05),Q("k",80282,.05),Q("m",80282,.05),Q("e",80704,.05),Q("p",81127,.05),Q("0",81127,.05),wA(),xi=Le.length,Je=bi/xi,Si=Math.max(...Le.map(i=>i.delay))+5e3}const Ds={};for(const[i,t]of Object.entries(xn))Ds[t]=i;async function vs(){const i=J0;for(const t of i){const e=Ds[t.pitch];if(!e){console.warn(`⚠️ Sem mapeamento: ${t.pitch} (${t.start_ms}ms)`);continue}Q(e,t.start_ms,.05)}wA(),xi=Le.length,Je=bi/xi,Si=Math.max(...Le.map(t=>t.delay))+5e3}async function xs(){const i=$0;for(const t of i){const e=Ds[t.pitch];if(!e){console.warn(`⚠️ Sem mapeamento: ${t.pitch} (${t.start_ms}ms)`);continue}Q(e,t.start_ms,.05)}wA(),Si=Math.max(...Le.map(t=>t.delay))+5e3}
