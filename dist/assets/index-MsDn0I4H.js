(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ss="169",oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pc=0,Ps=1,Rc=2,Uo=1,Cc=2,Qt=3,Mn=0,St=1,en=2,vn=0,ci=1,Rs=2,Cs=3,Ls=4,Lc=5,Ln=100,Dc=101,Ic=102,Uc=103,Nc=104,Oc=200,Fc=201,Bc=202,zc=203,va=204,xa=205,Hc=206,Gc=207,Vc=208,kc=209,Wc=210,qc=211,jc=212,Xc=213,Yc=214,Ma=0,Sa=1,ba=2,ui=3,Ea=4,ya=5,Ta=6,Aa=7,No=0,Kc=1,Zc=2,xn=0,$c=1,Jc=2,Qc=3,el=4,tl=5,nl=6,il=7,Oo=300,fi=301,pi=302,wa=303,Pa=304,Cr=306,Ra=1e3,In=1001,Ca=1002,Dt=1003,rl=1004,Vi=1005,Ht=1006,Hr=1007,Un=1008,an=1009,Fo=1010,Bo=1011,Di=1012,os=1013,Nn=1014,tn=1015,Fi=1016,cs=1017,ls=1018,_i=1020,zo=35902,Ho=1021,Go=1022,Vt=1023,Vo=1024,ko=1025,li=1026,mi=1027,Wo=1028,hs=1029,qo=1030,ds=1031,us=1033,mr=33776,gr=33777,vr=33778,xr=33779,La=35840,Da=35841,Ia=35842,Ua=35843,Na=36196,Oa=37492,Fa=37496,Ba=37808,za=37809,Ha=37810,Ga=37811,Va=37812,ka=37813,Wa=37814,qa=37815,ja=37816,Xa=37817,Ya=37818,Ka=37819,Za=37820,$a=37821,Mr=36492,Ja=36494,Qa=36495,jo=36283,es=36284,ts=36285,ns=36286,al=3200,sl=3201,ol=0,cl=1,mn="",zt="srgb",bn="srgb-linear",fs="display-p3",Lr="display-p3-linear",Er="linear",Qe="srgb",yr="rec709",Tr="p3",Hn=7680,Ds=519,ll=512,hl=513,dl=514,Xo=515,ul=516,fl=517,pl=518,_l=519,is=35044,Is="300 es",nn=2e3,Ar=2001;class Bn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Us=1234567;const Ci=Math.PI/180,Ii=180/Math.PI;function rn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[i&255]+dt[i>>8&255]+dt[i>>16&255]+dt[i>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function ps(i,e){return(i%e+e)%e}function ml(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function gl(i,e,t){return i!==e?(t-i)/(e-i):0}function Li(i,e,t){return(1-t)*i+t*e}function vl(i,e,t,n){return Li(i,e,1-Math.exp(-t*n))}function xl(i,e=1){return e-Math.abs(ps(i,e*2)-e)}function Ml(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Sl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function El(i,e){return i+Math.random()*(e-i)}function yl(i){return i*(.5-Math.random())}function Tl(i){i!==void 0&&(Us=i);let e=Us+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Al(i){return i*Ci}function wl(i){return i*Ii}function Pl(i){return(i&i-1)===0&&i!==0}function Rl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ll(i,e,t,n,r){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+n)/2),h=s((e+n)/2),f=a((e-n)/2),p=s((e-n)/2),_=a((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(o*h,c*f,c*p,o*l);break;case"YZY":i.set(c*p,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*p,o*h,o*l);break;case"XZX":i.set(o*h,c*v,c*_,o*l);break;case"YXY":i.set(c*_,o*h,c*v,o*l);break;case"ZYZ":i.set(c*v,c*_,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Dl={DEG2RAD:Ci,RAD2DEG:Ii,generateUUID:rn,clamp:ft,euclideanModulo:ps,mapLinear:ml,inverseLerp:gl,lerp:Li,damp:vl,pingpong:xl,smoothstep:Ml,smootherstep:Sl,randInt:bl,randFloat:El,randFloatSpread:yl,seededRandom:Tl,degToRad:Al,radToDeg:wl,isPowerOfTwo:Pl,ceilPowerOfTwo:Rl,floorPowerOfTwo:Cl,setQuaternionFromProperEuler:Ll,normalize:Xe,denormalize:Gt};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,n,r,a,s,o,c,l){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],p=n[2],_=n[5],v=n[8],M=r[0],u=r[3],d=r[6],y=r[1],b=r[4],T=r[7],O=r[2],P=r[5],A=r[8];return a[0]=s*M+o*y+c*O,a[3]=s*u+o*b+c*P,a[6]=s*d+o*T+c*A,a[1]=l*M+h*y+f*O,a[4]=l*u+h*b+f*P,a[7]=l*d+h*T+f*A,a[2]=p*M+_*y+v*O,a[5]=p*u+_*b+v*P,a[8]=p*d+_*T+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*o*l-n*a*h+n*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*s-o*l,p=o*c-h*a,_=l*a-s*c,v=t*f+n*p+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=f*M,e[1]=(r*l-h*n)*M,e[2]=(o*n-r*s)*M,e[3]=p*M,e[4]=(h*t-r*c)*M,e[5]=(r*a-o*t)*M,e[6]=_*M,e[7]=(n*c-l*t)*M,e[8]=(s*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new Le;function Yo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ui(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Il(){const i=Ui("canvas");return i.style.display="block",i}const Ns={};function Sr(i){i in Ns||(Ns[i]=!0,console.warn(i))}function Ul(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Nl(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ol(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Os=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fs=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mi={[bn]:{transfer:Er,primaries:yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[zt]:{transfer:Qe,primaries:yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Lr]:{transfer:Er,primaries:Tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Fs),fromReference:i=>i.applyMatrix3(Os)},[fs]:{transfer:Qe,primaries:Tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Fs),fromReference:i=>i.applyMatrix3(Os).convertLinearToSRGB()}},Fl=new Set([bn,Lr]),ke={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Fl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Mi[e].toReference,r=Mi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Mi[i].primaries},getTransfer:function(i){return i===mn?Er:Mi[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Mi[e].luminanceCoefficients)}};function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gn;class Bl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=Ui("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ui("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=hi(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zl=0;class Ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(kr(r[s].image)):a.push(kr(r[s]))}else a=kr(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hl=0;class pt extends Bn{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=In,r=In,a=Ht,s=Un,o=Vt,c=an,l=pt.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=rn(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ra:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ra:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=Oo;pt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],h=c[4],f=c[8],p=c[1],_=c[5],v=c[9],M=c[2],u=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-M)<.01&&Math.abs(v-u)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+M)<.1&&Math.abs(v+u)<.1&&Math.abs(l+_+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,T=(_+1)/2,O=(d+1)/2,P=(h+p)/4,A=(f+M)/4,F=(v+u)/4;return b>T&&b>O?b<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(b),r=P/n,a=A/n):T>O?T<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),n=P/r,a=F/r):O<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(O),n=A/a,r=F/a),this.set(n,r,a,t),this}let y=Math.sqrt((u-v)*(u-v)+(f-M)*(f-M)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(u-v)/y,this.y=(f-M)/y,this.z=(p-h)/y,this.w=Math.acos((l+_+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gl extends Bn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Gl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zo extends pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vl extends pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3];const p=a[s+0],_=a[s+1],v=a[s+2],M=a[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=_,e[t+2]=v,e[t+3]=M;return}if(f!==M||c!==p||l!==_||h!==v){let u=1-o;const d=c*p+l*_+h*v+f*M,y=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const O=Math.sqrt(b),P=Math.atan2(O,d*y);u=Math.sin(u*P)/O,o=Math.sin(o*P)/O}const T=o*y;if(c=c*u+p*T,l=l*u+_*T,h=h*u+v*T,f=f*u+M*T,u===1-o){const O=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=O,l*=O,h*=O,f*=O}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=a[s],p=a[s+1],_=a[s+2],v=a[s+3];return e[t]=o*v+h*f+c*_-l*p,e[t+1]=c*v+h*p+l*f-o*_,e[t+2]=l*v+h*_+o*p-c*f,e[t+3]=h*v-o*f-c*p-l*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),f=o(a/2),p=c(n/2),_=c(r/2),v=c(a/2);switch(s){case"XYZ":this._x=p*h*f+l*_*v,this._y=l*_*f-p*h*v,this._z=l*h*v+p*_*f,this._w=l*h*f-p*_*v;break;case"YXZ":this._x=p*h*f+l*_*v,this._y=l*_*f-p*h*v,this._z=l*h*v-p*_*f,this._w=l*h*f+p*_*v;break;case"ZXY":this._x=p*h*f-l*_*v,this._y=l*_*f+p*h*v,this._z=l*h*v+p*_*f,this._w=l*h*f-p*_*v;break;case"ZYX":this._x=p*h*f-l*_*v,this._y=l*_*f+p*h*v,this._z=l*h*v-p*_*f,this._w=l*h*f+p*_*v;break;case"YZX":this._x=p*h*f+l*_*v,this._y=l*_*f+p*h*v,this._z=l*h*v-p*_*f,this._w=l*h*f-p*_*v;break;case"XZY":this._x=p*h*f-l*_*v,this._y=l*_*f-p*h*v,this._z=l*h*v+p*_*f,this._w=l*h*f+p*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],p=n+o+f;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(h-c)*_,this._y=(a-l)*_,this._z=(s-r)*_}else if(n>o&&n>f){const _=2*Math.sqrt(1+n-o-f);this._w=(h-c)/_,this._x=.25*_,this._y=(r+s)/_,this._z=(a+l)/_}else if(o>f){const _=2*Math.sqrt(1+o-n-f);this._w=(a-l)/_,this._x=(r+s)/_,this._y=.25*_,this._z=(c+h)/_}else{const _=2*Math.sqrt(1+f-n-o);this._w=(s-r)/_,this._x=(a+l)/_,this._y=(c+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+s*o+r*l-a*c,this._y=r*h+s*c+a*o-n*l,this._z=a*h+s*l+n*c-r*o,this._w=s*h-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const _=1-t;return this._w=_*s+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=s*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),h=2*(o*t-a*r),f=2*(a*n-s*t);return this.x=t+c*l+s*f-o*h,this.y=n+c*h+o*l-a*f,this.z=r+c*f+a*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new D,Bs=new Fn;class Bi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ot):Ot.fromBufferAttribute(a,s),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),Wi.subVectors(this.max,Si),Vn.subVectors(e.a,Si),kn.subVectors(e.b,Si),Wn.subVectors(e.c,Si),cn.subVectors(kn,Vn),ln.subVectors(Wn,kn),yn.subVectors(Vn,Wn);let t=[0,-cn.z,cn.y,0,-ln.z,ln.y,0,-yn.z,yn.y,cn.z,0,-cn.x,ln.z,0,-ln.x,yn.z,0,-yn.x,-cn.y,cn.x,0,-ln.y,ln.x,0,-yn.y,yn.x,0];return!qr(t,Vn,kn,Wn,Wi)||(t=[1,0,0,0,1,0,0,0,1],!qr(t,Vn,kn,Wn,Wi))?!1:(qi.crossVectors(cn,ln),t=[qi.x,qi.y,qi.z],qr(t,Vn,kn,Wn,Wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new D,new D,new D,new D,new D,new D,new D,new D],Ot=new D,ki=new Bi,Vn=new D,kn=new D,Wn=new D,cn=new D,ln=new D,yn=new D,Si=new D,Wi=new D,qi=new D,Tn=new D;function qr(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Tn.fromArray(i,a);const o=r.x*Math.abs(Tn.x)+r.y*Math.abs(Tn.y)+r.z*Math.abs(Tn.z),c=e.dot(Tn),l=t.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const kl=new Bi,bi=new D,jr=new D;class Dr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kl.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(bi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(jr)),this.expandByPoint(bi.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kt=new D,Xr=new D,ji=new D,hn=new D,Yr=new D,Xi=new D,Kr=new D;class _s{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.origin).addScaledVector(this.direction,t),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xr.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(Xr);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ji),o=hn.dot(this.direction),c=-hn.dot(ji),l=hn.lengthSq(),h=Math.abs(1-s*s);let f,p,_,v;if(h>0)if(f=s*c-o,p=s*o-c,v=a*h,f>=0)if(p>=-v)if(p<=v){const M=1/h;f*=M,p*=M,_=f*(f+s*p+2*o)+p*(s*f+p+2*c)+l}else p=a,f=Math.max(0,-(s*p+o)),_=-f*f+p*(p+2*c)+l;else p=-a,f=Math.max(0,-(s*p+o)),_=-f*f+p*(p+2*c)+l;else p<=-v?(f=Math.max(0,-(-s*a+o)),p=f>0?-a:Math.min(Math.max(-a,-c),a),_=-f*f+p*(p+2*c)+l):p<=v?(f=0,p=Math.min(Math.max(-a,-c),a),_=p*(p+2*c)+l):(f=Math.max(0,-(s*a+o)),p=f>0?a:Math.min(Math.max(-a,-c),a),_=-f*f+p*(p+2*c)+l);else p=s>0?-a:a,f=Math.max(0,-(s*p+o)),_=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xr).addScaledVector(ji,p),_}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);const n=Kt.dot(this.direction),r=Kt.dot(Kt)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(a=(e.min.y-p.y)*h,s=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,s=(e.min.y-p.y)*h),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,r,a){Yr.subVectors(t,e),Xi.subVectors(n,e),Kr.crossVectors(Yr,Xi);let s=this.direction.dot(Kr),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;hn.subVectors(this.origin,e);const c=o*this.direction.dot(Xi.crossVectors(hn,Xi));if(c<0)return null;const l=o*this.direction.dot(Yr.cross(hn));if(l<0||c+l>s)return null;const h=-o*hn.dot(Kr);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,r,a,s,o,c,l,h,f,p,_,v,M,u){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,h,f,p,_,v,M,u)}set(e,t,n,r,a,s,o,c,l,h,f,p,_,v,M,u){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=a,d[5]=s,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=p,d[3]=_,d[7]=v,d[11]=M,d[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/qn.setFromMatrixColumn(e,0).length(),a=1/qn.setFromMatrixColumn(e,1).length(),s=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=s*h,_=s*f,v=o*h,M=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=_+v*l,t[5]=p-M*l,t[9]=-o*c,t[2]=M-p*l,t[6]=v+_*l,t[10]=s*c}else if(e.order==="YXZ"){const p=c*h,_=c*f,v=l*h,M=l*f;t[0]=p+M*o,t[4]=v*o-_,t[8]=s*l,t[1]=s*f,t[5]=s*h,t[9]=-o,t[2]=_*o-v,t[6]=M+p*o,t[10]=s*c}else if(e.order==="ZXY"){const p=c*h,_=c*f,v=l*h,M=l*f;t[0]=p-M*o,t[4]=-s*f,t[8]=v+_*o,t[1]=_+v*o,t[5]=s*h,t[9]=M-p*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const p=s*h,_=s*f,v=o*h,M=o*f;t[0]=c*h,t[4]=v*l-_,t[8]=p*l+M,t[1]=c*f,t[5]=M*l+p,t[9]=_*l-v,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const p=s*c,_=s*l,v=o*c,M=o*l;t[0]=c*h,t[4]=M-p*f,t[8]=v*f+_,t[1]=f,t[5]=s*h,t[9]=-o*h,t[2]=-l*h,t[6]=_*f+v,t[10]=p-M*f}else if(e.order==="XZY"){const p=s*c,_=s*l,v=o*c,M=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=p*f+M,t[5]=s*h,t[9]=_*f-v,t[2]=v*f-_,t[6]=o*h,t[10]=M*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wl,e,ql)}lookAt(e,t,n){const r=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),dn.crossVectors(n,Tt),dn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),dn.crossVectors(n,Tt)),dn.normalize(),Yi.crossVectors(Tt,dn),r[0]=dn.x,r[4]=Yi.x,r[8]=Tt.x,r[1]=dn.y,r[5]=Yi.y,r[9]=Tt.y,r[2]=dn.z,r[6]=Yi.z,r[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],p=n[9],_=n[13],v=n[2],M=n[6],u=n[10],d=n[14],y=n[3],b=n[7],T=n[11],O=n[15],P=r[0],A=r[4],F=r[8],ee=r[12],m=r[1],S=r[5],V=r[9],z=r[13],j=r[2],K=r[6],G=r[10],Y=r[14],H=r[3],oe=r[7],ce=r[11],me=r[15];return a[0]=s*P+o*m+c*j+l*H,a[4]=s*A+o*S+c*K+l*oe,a[8]=s*F+o*V+c*G+l*ce,a[12]=s*ee+o*z+c*Y+l*me,a[1]=h*P+f*m+p*j+_*H,a[5]=h*A+f*S+p*K+_*oe,a[9]=h*F+f*V+p*G+_*ce,a[13]=h*ee+f*z+p*Y+_*me,a[2]=v*P+M*m+u*j+d*H,a[6]=v*A+M*S+u*K+d*oe,a[10]=v*F+M*V+u*G+d*ce,a[14]=v*ee+M*z+u*Y+d*me,a[3]=y*P+b*m+T*j+O*H,a[7]=y*A+b*S+T*K+O*oe,a[11]=y*F+b*V+T*G+O*ce,a[15]=y*ee+b*z+T*Y+O*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],p=e[10],_=e[14],v=e[3],M=e[7],u=e[11],d=e[15];return v*(+a*c*f-r*l*f-a*o*p+n*l*p+r*o*_-n*c*_)+M*(+t*c*_-t*l*p+a*s*p-r*s*_+r*l*h-a*c*h)+u*(+t*l*f-t*o*_-a*s*f+n*s*_+a*o*h-n*l*h)+d*(-r*o*h-t*c*f+t*o*p+r*s*f-n*s*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],p=e[10],_=e[11],v=e[12],M=e[13],u=e[14],d=e[15],y=f*u*l-M*p*l+M*c*_-o*u*_-f*c*d+o*p*d,b=v*p*l-h*u*l-v*c*_+s*u*_+h*c*d-s*p*d,T=h*M*l-v*f*l+v*o*_-s*M*_-h*o*d+s*f*d,O=v*f*c-h*M*c-v*o*p+s*M*p+h*o*u-s*f*u,P=t*y+n*b+r*T+a*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=y*A,e[1]=(M*p*a-f*u*a-M*r*_+n*u*_+f*r*d-n*p*d)*A,e[2]=(o*u*a-M*c*a+M*r*l-n*u*l-o*r*d+n*c*d)*A,e[3]=(f*c*a-o*p*a-f*r*l+n*p*l+o*r*_-n*c*_)*A,e[4]=b*A,e[5]=(h*u*a-v*p*a+v*r*_-t*u*_-h*r*d+t*p*d)*A,e[6]=(v*c*a-s*u*a-v*r*l+t*u*l+s*r*d-t*c*d)*A,e[7]=(s*p*a-h*c*a+h*r*l-t*p*l-s*r*_+t*c*_)*A,e[8]=T*A,e[9]=(v*f*a-h*M*a-v*n*_+t*M*_+h*n*d-t*f*d)*A,e[10]=(s*M*a-v*o*a+v*n*l-t*M*l-s*n*d+t*o*d)*A,e[11]=(h*o*a-s*f*a-h*n*l+t*f*l+s*n*_-t*o*_)*A,e[12]=O*A,e[13]=(h*M*r-v*f*r+v*n*p-t*M*p-h*n*u+t*f*u)*A,e[14]=(v*o*r-s*M*r-v*n*c+t*M*c+s*n*u-t*o*u)*A,e[15]=(s*f*r-h*o*r+h*n*c-t*f*c-s*n*p+t*o*p)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,h=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*s,0,l*c-r*o,h*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,h=s+s,f=o+o,p=a*l,_=a*h,v=a*f,M=s*h,u=s*f,d=o*f,y=c*l,b=c*h,T=c*f,O=n.x,P=n.y,A=n.z;return r[0]=(1-(M+d))*O,r[1]=(_+T)*O,r[2]=(v-b)*O,r[3]=0,r[4]=(_-T)*P,r[5]=(1-(p+d))*P,r[6]=(u+y)*P,r[7]=0,r[8]=(v+b)*A,r[9]=(u-y)*A,r[10]=(1-(p+M))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=qn.set(r[0],r[1],r[2]).length();const s=qn.set(r[4],r[5],r[6]).length(),o=qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Ft.copy(this);const l=1/a,h=1/s,f=1/o;return Ft.elements[0]*=l,Ft.elements[1]*=l,Ft.elements[2]*=l,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=f,Ft.elements[9]*=f,Ft.elements[10]*=f,t.setFromRotationMatrix(Ft),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=nn){const c=this.elements,l=2*a/(t-e),h=2*a/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let _,v;if(o===nn)_=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===Ar)_=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=nn){const c=this.elements,l=1/(t-e),h=1/(n-r),f=1/(s-a),p=(t+e)*l,_=(n+r)*h;let v,M;if(o===nn)v=(s+a)*f,M=-2*f;else if(o===Ar)v=a*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=M,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new D,Ft=new tt,Wl=new D(0,0,0),ql=new D(1,1,1),dn=new D,Yi=new D,Tt=new D,zs=new tt,Hs=new Fn;class sn{constructor(e=0,t=0,n=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],p=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(ft(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hs.setFromEuler(this),this.setFromQuaternion(Hs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jl=0;const Gs=new D,jn=new Fn,Zt=new tt,Ki=new D,Ei=new D,Xl=new D,Yl=new Fn,Vs=new D(1,0,0),ks=new D(0,1,0),Ws=new D(0,0,1),qs={type:"added"},Kl={type:"removed"},Xn={type:"childadded",child:null},Zr={type:"childremoved",child:null};class gt extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new D,t=new sn,n=new Fn,r=new D(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Le}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(Vs,e)}rotateY(e){return this.rotateOnAxis(ks,e)}rotateZ(e){return this.rotateOnAxis(Ws,e)}translateOnAxis(e,t){return Gs.copy(e).applyQuaternion(this.quaternion),this.position.add(Gs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vs,e)}translateY(e){return this.translateOnAxis(ks,e)}translateZ(e){return this.translateOnAxis(Ws,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ki.copy(e):Ki.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(Ei,Ki,this.up):Zt.lookAt(Ki,Ei,this.up),this.quaternion.setFromRotationMatrix(Zt),r&&(Zt.extractRotation(r.matrixWorld),jn.setFromRotationMatrix(Zt),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qs),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kl),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qs),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,Xl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Yl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];a(e.shapes,f)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),f=s(e.shapes),p=s(e.skeletons),_=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gt.DEFAULT_UP=new D(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bt=new D,$t=new D,$r=new D,Jt=new D,Yn=new D,Kn=new D,js=new D,Jr=new D,Qr=new D,ea=new D,ta=new it,na=new it,ia=new it;class Lt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bt.subVectors(e,t),r.cross(Bt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Bt.subVectors(r,t),$t.subVectors(n,t),$r.subVectors(e,t);const s=Bt.dot(Bt),o=Bt.dot($t),c=Bt.dot($r),l=$t.dot($t),h=$t.dot($r),f=s*l-o*o;if(f===0)return a.set(0,0,0),null;const p=1/f,_=(l*c-o*h)*p,v=(s*h-o*c)*p;return a.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jt)===null?!1:Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,Jt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Jt.x),c.addScaledVector(s,Jt.y),c.addScaledVector(o,Jt.z),c)}static getInterpolatedAttribute(e,t,n,r,a,s){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ta,a.x),s.addScaledVector(na,a.y),s.addScaledVector(ia,a.z),s}static isFrontFacing(e,t,n,r){return Bt.subVectors(n,t),$t.subVectors(e,t),Bt.cross($t).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Bt.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Lt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Lt.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;Yn.subVectors(r,n),Kn.subVectors(a,n),Jr.subVectors(e,n);const c=Yn.dot(Jr),l=Kn.dot(Jr);if(c<=0&&l<=0)return t.copy(n);Qr.subVectors(e,r);const h=Yn.dot(Qr),f=Kn.dot(Qr);if(h>=0&&f<=h)return t.copy(r);const p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(n).addScaledVector(Yn,s);ea.subVectors(e,a);const _=Yn.dot(ea),v=Kn.dot(ea);if(v>=0&&_<=v)return t.copy(a);const M=_*l-c*v;if(M<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Kn,o);const u=h*v-_*f;if(u<=0&&f-h>=0&&_-v>=0)return js.subVectors(a,r),o=(f-h)/(f-h+(_-v)),t.copy(r).addScaledVector(js,o);const d=1/(u+M+p);return s=M*d,o=p*d,t.copy(n).addScaledVector(Yn,s).addScaledVector(Kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ke.workingColorSpace){if(e=ps(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=ra(s,a,e+1/3),this.g=ra(s,a,e),this.b=ra(s,a,e-1/3)}return ke.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Jo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ke.fromWorkingColorSpace(ut.copy(this),e),Math.round(ft(ut.r*255,0,255))*65536+Math.round(ft(ut.g*255,0,255))*256+Math.round(ft(ut.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.fromWorkingColorSpace(ut.copy(this),t);const n=ut.r,r=ut.g,a=ut.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let c,l;const h=(o+s)/2;if(o===s)c=0,l=0;else{const f=s-o;switch(l=h<=.5?f/(s+o):f/(2-s-o),s){case n:c=(r-a)/f+(r<a?6:0);break;case r:c=(a-n)/f+2;break;case a:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ke.workingColorSpace){return ke.fromWorkingColorSpace(ut.copy(this),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=zt){ke.fromWorkingColorSpace(ut.copy(this),e);const t=ut.r,n=ut.g,r=ut.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(Zi);const n=Li(un.h,Zi.h,t),r=Li(un.s,Zi.s,t),a=Li(un.l,Zi.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ut=new We;We.NAMES=Jo;let Zl=0;class vi extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=rn(),this.name="",this.type="Material",this.blending=ci,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=xa,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ds,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==Ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ds&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ni extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new D,$i=new Ae;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=is,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$i.fromBufferAttribute(this,t),$i.applyMatrix3(e),this.setXY(t,$i.x,$i.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array),a=Xe(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==is&&(e.usage=this.usage),e}}class Qo extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ec extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $l=0;const Rt=new tt,aa=new gt,Zn=new D,At=new Bi,yi=new Bi,lt=new D;class Wt extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yo(e)?ec:Qo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Le().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];At.setFromBufferAttribute(a),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(lt.addVectors(At.min,yi.min),At.expandByPoint(lt),lt.addVectors(At.max,yi.max),At.expandByPoint(lt)):(At.expandByPoint(yi.min),At.expandByPoint(yi.max))}At.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)lt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(lt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)lt.fromBufferAttribute(o,l),c&&(Zn.fromBufferAttribute(e,l),lt.add(Zn)),r=Math.max(r,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new D,c[F]=new D;const l=new D,h=new D,f=new D,p=new Ae,_=new Ae,v=new Ae,M=new D,u=new D;function d(F,ee,m){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,ee),f.fromBufferAttribute(n,m),p.fromBufferAttribute(a,F),_.fromBufferAttribute(a,ee),v.fromBufferAttribute(a,m),h.sub(l),f.sub(l),_.sub(p),v.sub(p);const S=1/(_.x*v.y-v.x*_.y);isFinite(S)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(S),u.copy(f).multiplyScalar(_.x).addScaledVector(h,-v.x).multiplyScalar(S),o[F].add(M),o[ee].add(M),o[m].add(M),c[F].add(u),c[ee].add(u),c[m].add(u))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,ee=y.length;F<ee;++F){const m=y[F],S=m.start,V=m.count;for(let z=S,j=S+V;z<j;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new D,T=new D,O=new D,P=new D;function A(F){O.fromBufferAttribute(r,F),P.copy(O);const ee=o[F];b.copy(ee),b.sub(O.multiplyScalar(O.dot(ee))).normalize(),T.crossVectors(P,ee);const S=T.dot(c[F])<0?-1:1;s.setXYZW(F,b.x,b.y,b.z,S)}for(let F=0,ee=y.length;F<ee;++F){const m=y[F],S=m.start,V=m.count;for(let z=S,j=S+V;z<j;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,_=n.count;p<_;p++)n.setXYZ(p,0,0,0);const r=new D,a=new D,s=new D,o=new D,c=new D,l=new D,h=new D,f=new D;if(e)for(let p=0,_=e.count;p<_;p+=3){const v=e.getX(p+0),M=e.getX(p+1),u=e.getX(p+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,M),s.fromBufferAttribute(t,u),h.subVectors(s,a),f.subVectors(r,a),h.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,u),o.add(h),c.add(h),l.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(u,l.x,l.y,l.z)}else for(let p=0,_=t.count;p<_;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),h.subVectors(s,a),f.subVectors(r,a),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,p=new l.constructor(c.length*h);let _=0,v=0;for(let M=0,u=c.length;M<u;M++){o.isInterleavedBufferAttribute?_=c[M]*o.data.stride+o.offset:_=c[M]*h;for(let d=0;d<h;d++)p[v++]=l[_++]}return new kt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,f=l.length;h<f;h++){const p=l[h],_=e(p,n);c.push(_)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){const _=l[f];h.push(_.toJSON(e.data))}h.length>0&&(r[c]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],f=a[l];for(let p=0,_=f.length;p<_;p++)h.push(f[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,h=s.length;l<h;l++){const f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xs=new tt,An=new _s,Ji=new Dr,Ys=new D,Qi=new D,er=new D,tr=new D,sa=new D,nr=new D,Ks=new D,ir=new D;class It extends gt{constructor(e=new Wt,t=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){nr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],f=a[c];h!==0&&(sa.fromBufferAttribute(f,e),s?nr.addScaledVector(sa,h):nr.addScaledVector(sa.sub(t),h))}t.add(nr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(a),An.copy(e.ray).recast(e.near),!(Ji.containsPoint(An.origin)===!1&&(An.intersectSphere(Ji,Ys)===null||An.origin.distanceToSquared(Ys)>(e.far-e.near)**2))&&(Xs.copy(a).invert(),An.copy(e.ray).applyMatrix4(Xs),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,p=a.groups,_=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,M=p.length;v<M;v++){const u=p[v],d=s[u.materialIndex],y=Math.max(u.start,_.start),b=Math.min(o.count,Math.min(u.start+u.count,_.start+_.count));for(let T=y,O=b;T<O;T+=3){const P=o.getX(T),A=o.getX(T+1),F=o.getX(T+2);r=rr(this,d,e,n,l,h,f,P,A,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),M=Math.min(o.count,_.start+_.count);for(let u=v,d=M;u<d;u+=3){const y=o.getX(u),b=o.getX(u+1),T=o.getX(u+2);r=rr(this,s,e,n,l,h,f,y,b,T),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,M=p.length;v<M;v++){const u=p[v],d=s[u.materialIndex],y=Math.max(u.start,_.start),b=Math.min(c.count,Math.min(u.start+u.count,_.start+_.count));for(let T=y,O=b;T<O;T+=3){const P=T,A=T+1,F=T+2;r=rr(this,d,e,n,l,h,f,P,A,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),M=Math.min(c.count,_.start+_.count);for(let u=v,d=M;u<d;u+=3){const y=u,b=u+1,T=u+2;r=rr(this,s,e,n,l,h,f,y,b,T),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}}}function Jl(i,e,t,n,r,a,s,o){let c;if(e.side===St?c=n.intersectTriangle(s,a,r,!0,o):c=n.intersectTriangle(r,a,s,e.side===Mn,o),c===null)return null;ir.copy(o),ir.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ir);return l<t.near||l>t.far?null:{distance:l,point:ir.clone(),object:i}}function rr(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,Qi),i.getVertexPosition(c,er),i.getVertexPosition(l,tr);const h=Jl(i,e,t,n,Qi,er,tr,Ks);if(h){const f=new D;Lt.getBarycoord(Ks,Qi,er,tr,f),r&&(h.uv=Lt.getInterpolatedAttribute(r,o,c,l,f,new Ae)),a&&(h.uv1=Lt.getInterpolatedAttribute(a,o,c,l,f,new Ae)),s&&(h.normal=Lt.getInterpolatedAttribute(s,o,c,l,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new D,materialIndex:0};Lt.getNormal(Qi,er,tr,p.normal),h.face=p,h.barycoord=f}return h}class zi extends Wt{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],h=[],f=[];let p=0,_=0;v("z","y","x",-1,-1,n,t,e,s,a,0),v("z","y","x",1,-1,n,t,-e,s,a,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,a,4),v("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(f,2));function v(M,u,d,y,b,T,O,P,A,F,ee){const m=T/A,S=O/F,V=T/2,z=O/2,j=P/2,K=A+1,G=F+1;let Y=0,H=0;const oe=new D;for(let ce=0;ce<G;ce++){const me=ce*S-z;for(let ze=0;ze<K;ze++){const qe=ze*m-V;oe[M]=qe*y,oe[u]=me*b,oe[d]=j,l.push(oe.x,oe.y,oe.z),oe[M]=0,oe[u]=0,oe[d]=P>0?1:-1,h.push(oe.x,oe.y,oe.z),f.push(ze/A),f.push(1-ce/F),Y+=1}}for(let ce=0;ce<F;ce++)for(let me=0;me<A;me++){const ze=p+me+K*ce,qe=p+me+K*(ce+1),k=p+(me+1)+K*(ce+1),$=p+(me+1)+K*ce;c.push(ze,qe,$),c.push(qe,k,$),H+=6}o.addGroup(_,H,ee),_+=H,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=gi(i[t]);for(const r in n)e[r]=n[r]}return e}function Ql(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const eh={clone:gi,merge:mt};var th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=Ql(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nc extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fn=new D,Zs=new Ae,$s=new Ae;class Ct extends nc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ii*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ci*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(Ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fn.x,fn.y).multiplyScalar(-e/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fn.x,fn.y).multiplyScalar(-e/fn.z)}getViewSize(e,t){return this.getViewBounds(e,Zs,$s),t.subVectors($s,Zs)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ci*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $n=-90,Jn=1;class ih extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ct($n,Jn,e,t);r.layers=this.layers,this.add(r);const a=new Ct($n,Jn,e,t);a.layers=this.layers,this.add(a);const s=new Ct($n,Jn,e,t);s.layers=this.layers,this.add(s);const o=new Ct($n,Jn,e,t);o.layers=this.layers,this.add(o);const c=new Ct($n,Jn,e,t);c.layers=this.layers,this.add(c);const l=new Ct($n,Jn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,p,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ms extends pt{constructor(e,t,n,r,a,s,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:fi,super(e,t,n,r,a,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rh extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ms(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zi(5,5,5),a=new Sn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:vn});a.uniforms.tEquirect.value=t;const s=new It(r,a),o=t.minFilter;return t.minFilter===Un&&(t.minFilter=Ht),new ih(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const oa=new D,ah=new D,sh=new Le;class _n{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=oa.subVectors(n,t).cross(ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sh.getNormalMatrix(e),r=this.coplanarPoint(oa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new Dr,ar=new D;class ic{constructor(e=new _n,t=new _n,n=new _n,r=new _n,a=new _n,s=new _n){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],c=r[3],l=r[4],h=r[5],f=r[6],p=r[7],_=r[8],v=r[9],M=r[10],u=r[11],d=r[12],y=r[13],b=r[14],T=r[15];if(n[0].setComponents(c-a,p-l,u-_,T-d).normalize(),n[1].setComponents(c+a,p+l,u+_,T+d).normalize(),n[2].setComponents(c+s,p+h,u+v,T+y).normalize(),n[3].setComponents(c-s,p-h,u-v,T-y).normalize(),n[4].setComponents(c-o,p-f,u-M,T-b).normalize(),t===nn)n[5].setComponents(c+o,p+f,u+M,T+b).normalize();else if(t===Ar)n[5].setComponents(o,f,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(e){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ar.x=r.normal.x>0?e.max.x:e.min.x,ar.y=r.normal.y>0?e.max.y:e.min.y,ar.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rc(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function oh(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let _;if(l instanceof Float32Array)_=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=i.SHORT;else if(l instanceof Uint32Array)_=i.UNSIGNED_INT;else if(l instanceof Int32Array)_=i.INT;else if(l instanceof Int8Array)_=i.BYTE;else if(l instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((_,v)=>_.start-v.start);let p=0;for(let _=1;_<f.length;_++){const v=f[p],M=f[_];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++p,f[p]=M)}f.length=p+1;for(let _=0,v=f.length;_<v;_++){const M=f[_];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}class Ir extends Wt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,f=e/o,p=t/c,_=[],v=[],M=[],u=[];for(let d=0;d<h;d++){const y=d*p-s;for(let b=0;b<l;b++){const T=b*f-a;v.push(T,-y,0),M.push(0,0,1),u.push(b/o),u.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){const b=y+l*d,T=y+l*(d+1),O=y+1+l*(d+1),P=y+1+l*d;_.push(b,T,P),_.push(T,O,P)}this.setIndex(_),this.setAttribute("position",new Ut(v,3)),this.setAttribute("normal",new Ut(M,3)),this.setAttribute("uv",new Ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.widthSegments,e.heightSegments)}}var ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lh=`#ifdef USE_ALPHAHASH
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
#endif`,hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ph=`#ifdef USE_AOMAP
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
#endif`,_h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mh=`#ifdef USE_BATCHING
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
#endif`,gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sh=`#ifdef USE_IRIDESCENCE
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
#endif`,bh=`#ifdef USE_BUMPMAP
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
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lh=`#define PI 3.141592653589793
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
} // validated`,Dh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ih=`vec3 transformedNormal = objectNormal;
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
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bh="gl_FragColor = linearToOutputTexel( gl_FragColor );",zh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hh=`#ifdef USE_ENVMAP
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
#endif`,Gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vh=`#ifdef USE_ENVMAP
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
#endif`,kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kh=`#ifdef USE_GRADIENTMAP
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
}`,Zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qh=`uniform bool receiveShadow;
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
#endif`,ed=`#ifdef USE_ENVMAP
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
#endif`,td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
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
#endif`,sd=`struct PhysicalMaterial {
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
}`,od=`
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
#endif`,cd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gd=`#if defined( USE_POINTS_UV )
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
#endif`,vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ed=`#ifdef USE_MORPHTARGETS
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
#endif`,yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cd=`#ifdef USE_NORMALMAP
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
#endif`,Dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jd=`float getShadowMask() {
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
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,Kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zd=`#ifdef USE_SKINNING
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
#endif`,$d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tu=`#ifdef USE_TRANSMISSION
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
#endif`,nu=`#ifdef USE_TRANSMISSION
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
#endif`,iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,su=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ou=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cu=`uniform sampler2D t2D;
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
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fu=`#include <common>
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
}`,pu=`#if DEPTH_PACKING == 3200
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
}`,_u=`#define DISTANCE
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
}`,mu=`#define DISTANCE
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
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`uniform float scale;
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
}`,Mu=`uniform vec3 diffuse;
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
}`,Su=`#include <common>
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
}`,bu=`uniform vec3 diffuse;
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
}`,Eu=`#define LAMBERT
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
}`,yu=`#define LAMBERT
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
}`,Tu=`#define MATCAP
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
}`,Au=`#define MATCAP
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
}`,wu=`#define NORMAL
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
}`,Pu=`#define NORMAL
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
}`,Ru=`#define PHONG
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
}`,Cu=`#define PHONG
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
}`,Lu=`#define STANDARD
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
}`,Du=`#define STANDARD
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
}`,Iu=`#define TOON
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
}`,Uu=`#define TOON
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
}`,Nu=`uniform float size;
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
}`,Ou=`uniform vec3 diffuse;
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
}`,Fu=`#include <common>
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
}`,Bu=`uniform vec3 color;
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
}`,zu=`uniform float rotation;
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
}`,Hu=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:ch,alphahash_pars_fragment:lh,alphamap_fragment:hh,alphamap_pars_fragment:dh,alphatest_fragment:uh,alphatest_pars_fragment:fh,aomap_fragment:ph,aomap_pars_fragment:_h,batching_pars_vertex:mh,batching_vertex:gh,begin_vertex:vh,beginnormal_vertex:xh,bsdfs:Mh,iridescence_fragment:Sh,bumpmap_pars_fragment:bh,clipping_planes_fragment:Eh,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:Th,clipping_planes_vertex:Ah,color_fragment:wh,color_pars_fragment:Ph,color_pars_vertex:Rh,color_vertex:Ch,common:Lh,cube_uv_reflection_fragment:Dh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Uh,displacementmap_vertex:Nh,emissivemap_fragment:Oh,emissivemap_pars_fragment:Fh,colorspace_fragment:Bh,colorspace_pars_fragment:zh,envmap_fragment:Hh,envmap_common_pars_fragment:Gh,envmap_pars_fragment:Vh,envmap_pars_vertex:kh,envmap_physical_pars_fragment:ed,envmap_vertex:Wh,fog_vertex:qh,fog_pars_vertex:jh,fog_fragment:Xh,fog_pars_fragment:Yh,gradientmap_pars_fragment:Kh,lightmap_pars_fragment:Zh,lights_lambert_fragment:$h,lights_lambert_pars_fragment:Jh,lights_pars_begin:Qh,lights_toon_fragment:td,lights_toon_pars_fragment:nd,lights_phong_fragment:id,lights_phong_pars_fragment:rd,lights_physical_fragment:ad,lights_physical_pars_fragment:sd,lights_fragment_begin:od,lights_fragment_maps:cd,lights_fragment_end:ld,logdepthbuf_fragment:hd,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:fd,map_fragment:pd,map_pars_fragment:_d,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:vd,metalnessmap_pars_fragment:xd,morphinstance_vertex:Md,morphcolor_vertex:Sd,morphnormal_vertex:bd,morphtarget_pars_vertex:Ed,morphtarget_vertex:yd,normal_fragment_begin:Td,normal_fragment_maps:Ad,normal_pars_fragment:wd,normal_pars_vertex:Pd,normal_vertex:Rd,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Ld,clearcoat_normal_fragment_maps:Dd,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Ud,opaque_fragment:Nd,packing:Od,premultiplied_alpha_fragment:Fd,project_vertex:Bd,dithering_fragment:zd,dithering_pars_fragment:Hd,roughnessmap_fragment:Gd,roughnessmap_pars_fragment:Vd,shadowmap_pars_fragment:kd,shadowmap_pars_vertex:Wd,shadowmap_vertex:qd,shadowmask_pars_fragment:jd,skinbase_vertex:Xd,skinning_pars_vertex:Yd,skinning_vertex:Kd,skinnormal_vertex:Zd,specularmap_fragment:$d,specularmap_pars_fragment:Jd,tonemapping_fragment:Qd,tonemapping_pars_fragment:eu,transmission_fragment:tu,transmission_pars_fragment:nu,uv_pars_fragment:iu,uv_pars_vertex:ru,uv_vertex:au,worldpos_vertex:su,background_vert:ou,background_frag:cu,backgroundCube_vert:lu,backgroundCube_frag:hu,cube_vert:du,cube_frag:uu,depth_vert:fu,depth_frag:pu,distanceRGBA_vert:_u,distanceRGBA_frag:mu,equirect_vert:gu,equirect_frag:vu,linedashed_vert:xu,linedashed_frag:Mu,meshbasic_vert:Su,meshbasic_frag:bu,meshlambert_vert:Eu,meshlambert_frag:yu,meshmatcap_vert:Tu,meshmatcap_frag:Au,meshnormal_vert:wu,meshnormal_frag:Pu,meshphong_vert:Ru,meshphong_frag:Cu,meshphysical_vert:Lu,meshphysical_frag:Du,meshtoon_vert:Iu,meshtoon_frag:Uu,points_vert:Nu,points_frag:Ou,shadow_vert:Fu,shadow_frag:Bu,sprite_vert:zu,sprite_frag:Hu},te={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},qt={basic:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new We(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:mt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:mt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new We(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:mt([te.points,te.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:mt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:mt([te.common,te.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:mt([te.sprite,te.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:mt([te.common,te.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:mt([te.lights,te.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};qt.physical={uniforms:mt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const sr={r:0,b:0,g:0},Pn=new sn,Gu=new tt;function Vu(i,e,t,n,r,a,s){const o=new We(0);let c=a===!0?0:1,l,h,f=null,p=0,_=null;function v(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function M(y){let b=!1;const T=v(y);T===null?d(o,c):T&&T.isColor&&(d(T,1),b=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,s):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(y,b){const T=v(b);T&&(T.isCubeTexture||T.mapping===Cr)?(h===void 0&&(h=new It(new zi(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:gi(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Pn.copy(b.backgroundRotation),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gu.makeRotationFromEuler(Pn)),h.material.toneMapped=ke.getTransfer(T.colorSpace)!==Qe,(f!==T||p!==T.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,f=T,p=T.version,_=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new It(new Ir(2,2),new Sn({name:"BackgroundMaterial",uniforms:gi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ke.getTransfer(T.colorSpace)!==Qe,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||p!==T.version||_!==i.toneMapping)&&(l.material.needsUpdate=!0,f=T,p=T.version,_=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,b){y.getRGB(sr,tc(i)),n.buffers.color.setClear(sr.r,sr.g,sr.b,b,s)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),c=b,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,d(o,c)},render:M,addToRenderList:u}}function ku(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let a=r,s=!1;function o(m,S,V,z,j){let K=!1;const G=f(z,V,S);a!==G&&(a=G,l(a.object)),K=_(m,z,V,j),K&&v(m,z,V,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,T(m,S,V,z),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function l(m){return i.bindVertexArray(m)}function h(m){return i.deleteVertexArray(m)}function f(m,S,V){const z=V.wireframe===!0;let j=n[m.id];j===void 0&&(j={},n[m.id]=j);let K=j[S.id];K===void 0&&(K={},j[S.id]=K);let G=K[z];return G===void 0&&(G=p(c()),K[z]=G),G}function p(m){const S=[],V=[],z=[];for(let j=0;j<t;j++)S[j]=0,V[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:V,attributeDivisors:z,object:m,attributes:{},index:null}}function _(m,S,V,z){const j=a.attributes,K=S.attributes;let G=0;const Y=V.getAttributes();for(const H in Y)if(Y[H].location>=0){const ce=j[H];let me=K[H];if(me===void 0&&(H==="instanceMatrix"&&m.instanceMatrix&&(me=m.instanceMatrix),H==="instanceColor"&&m.instanceColor&&(me=m.instanceColor)),ce===void 0||ce.attribute!==me||me&&ce.data!==me.data)return!0;G++}return a.attributesNum!==G||a.index!==z}function v(m,S,V,z){const j={},K=S.attributes;let G=0;const Y=V.getAttributes();for(const H in Y)if(Y[H].location>=0){let ce=K[H];ce===void 0&&(H==="instanceMatrix"&&m.instanceMatrix&&(ce=m.instanceMatrix),H==="instanceColor"&&m.instanceColor&&(ce=m.instanceColor));const me={};me.attribute=ce,ce&&ce.data&&(me.data=ce.data),j[H]=me,G++}a.attributes=j,a.attributesNum=G,a.index=z}function M(){const m=a.newAttributes;for(let S=0,V=m.length;S<V;S++)m[S]=0}function u(m){d(m,0)}function d(m,S){const V=a.newAttributes,z=a.enabledAttributes,j=a.attributeDivisors;V[m]=1,z[m]===0&&(i.enableVertexAttribArray(m),z[m]=1),j[m]!==S&&(i.vertexAttribDivisor(m,S),j[m]=S)}function y(){const m=a.newAttributes,S=a.enabledAttributes;for(let V=0,z=S.length;V<z;V++)S[V]!==m[V]&&(i.disableVertexAttribArray(V),S[V]=0)}function b(m,S,V,z,j,K,G){G===!0?i.vertexAttribIPointer(m,S,V,j,K):i.vertexAttribPointer(m,S,V,z,j,K)}function T(m,S,V,z){M();const j=z.attributes,K=V.getAttributes(),G=S.defaultAttributeValues;for(const Y in K){const H=K[Y];if(H.location>=0){let oe=j[Y];if(oe===void 0&&(Y==="instanceMatrix"&&m.instanceMatrix&&(oe=m.instanceMatrix),Y==="instanceColor"&&m.instanceColor&&(oe=m.instanceColor)),oe!==void 0){const ce=oe.normalized,me=oe.itemSize,ze=e.get(oe);if(ze===void 0)continue;const qe=ze.buffer,k=ze.type,$=ze.bytesPerElement,pe=k===i.INT||k===i.UNSIGNED_INT||oe.gpuType===os;if(oe.isInterleavedBufferAttribute){const le=oe.data,Pe=le.stride,Se=oe.offset;if(le.isInstancedInterleavedBuffer){for(let Ue=0;Ue<H.locationSize;Ue++)d(H.location+Ue,le.meshPerAttribute);m.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ue=0;Ue<H.locationSize;Ue++)u(H.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Ue=0;Ue<H.locationSize;Ue++)b(H.location+Ue,me/H.locationSize,k,ce,Pe*$,(Se+me/H.locationSize*Ue)*$,pe)}else{if(oe.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)d(H.location+le,oe.meshPerAttribute);m.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let le=0;le<H.locationSize;le++)u(H.location+le);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let le=0;le<H.locationSize;le++)b(H.location+le,me/H.locationSize,k,ce,me*$,me/H.locationSize*le*$,pe)}}else if(G!==void 0){const ce=G[Y];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(H.location,ce);break;case 3:i.vertexAttrib3fv(H.location,ce);break;case 4:i.vertexAttrib4fv(H.location,ce);break;default:i.vertexAttrib1fv(H.location,ce)}}}}y()}function O(){F();for(const m in n){const S=n[m];for(const V in S){const z=S[V];for(const j in z)h(z[j].object),delete z[j];delete S[V]}delete n[m]}}function P(m){if(n[m.id]===void 0)return;const S=n[m.id];for(const V in S){const z=S[V];for(const j in z)h(z[j].object),delete z[j];delete S[V]}delete n[m.id]}function A(m){for(const S in n){const V=n[S];if(V[m.id]===void 0)continue;const z=V[m.id];for(const j in z)h(z[j].object),delete z[j];delete V[m.id]}}function F(){ee(),s=!0,a!==r&&(a=r,l(a.object))}function ee(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:ee,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:u,disableUnusedAttributes:y}}function Wu(i,e,t){let n;function r(l){n=l}function a(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function s(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function o(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=h[v];t.update(_,n,1)}function c(l,h,f,p){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<l.length;v++)s(l[v],h[v],p[v]);else{_.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,f);let v=0;for(let M=0;M<f;M++)v+=h[M];for(let M=0;M<p.length;M++)t.update(v,n,p[M])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function qu(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==Vt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const F=A===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==an&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==tn&&!F)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=v>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:u,maxAttributes:d,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:T,vertexTextures:O,maxSamples:P}}function ju(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new _n,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const _=f.length!==0||p||n!==0||r;return r=p,n=f.length,_},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,_){const v=f.clippingPlanes,M=f.clipIntersection,u=f.clipShadows,d=i.get(f);if(!r||v===null||v.length===0||a&&!u)a?h(null):l();else{const y=a?0:n,b=y*4;let T=d.clippingState||null;c.value=T,T=h(v,p,b,_);for(let O=0;O!==b;++O)T[O]=t[O];d.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,_,v){const M=f!==null?f.length:0;let u=null;if(M!==0){if(u=c.value,v!==!0||u===null){const d=_+M*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(u===null||u.length<d)&&(u=new Float32Array(d));for(let b=0,T=_;b!==M;++b,T+=4)s.copy(f[b]).applyMatrix4(y,o),s.normal.toArray(u,T),u[T+3]=s.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,u}}function Xu(i){let e=new WeakMap;function t(s,o){return o===wa?s.mapping=fi:o===Pa&&(s.mapping=pi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===wa||o===Pa)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new rh(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Yu extends nc{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ai=4,Js=[.125,.215,.35,.446,.526,.582],Dn=20,ca=new Yu,Qs=new We;let la=null,ha=0,da=0,ua=!1;const Cn=(1+Math.sqrt(5))/2,Qn=1/Cn,eo=[new D(-Cn,Qn,0),new D(Cn,Qn,0),new D(-Qn,0,Cn),new D(Qn,0,Cn),new D(0,Cn,-Qn),new D(0,Cn,Qn),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class to{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){la=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la,ha,da),this._renderer.xr.enabled=ua,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Fi,format:Vt,colorSpace:bn,depthBuffer:!1},r=no(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=no(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ku(a)),this._blurMaterial=Zu(a,e,t)}return r}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,ca)}_sceneToCubeUV(e,t,n,r){const o=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Qs),h.toneMapping=xn,h.autoClear=!1;const _=new Ni({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),v=new It(new zi,_);let M=!1;const u=e.background;u?u.isColor&&(_.color.copy(u),e.background=null,M=!0):(_.color.copy(Qs),M=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):y===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const b=this._cubeSize;or(r,y*b,d>2?b:0,b,b),h.setRenderTarget(r),M&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===fi||e.mapping===pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=io());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new It(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;or(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=eo[(r-a-1)%eo.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new It(this._lodPlanes[r],l),p=l.uniforms,_=this._sizeLods[n]-1,v=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Dn-1),M=a/v,u=isFinite(a)?1+Math.floor(h*M):Dn;u>Dn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Dn}`);const d=[];let y=0;for(let A=0;A<Dn;++A){const F=A/M,ee=Math.exp(-F*F/2);d.push(ee),A===0?y+=ee:A<u&&(y+=2*ee)}for(let A=0;A<d.length;A++)d[A]=d[A]/y;p.envMap.value=e.texture,p.samples.value=u,p.weights.value=d,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:b}=this;p.dTheta.value=v,p.mipInt.value=b-n;const T=this._sizeLods[r],O=3*T*(r>b-ai?r-b+ai:0),P=4*(this._cubeSize-T);or(t,O,P,3*T,2*T),c.setRenderTarget(t),c.render(f,ca)}}function Ku(i){const e=[],t=[],n=[];let r=i;const a=i-ai+1+Js.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let c=1/o;s>i-ai?c=Js[s-i+ai-1]:s===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],_=6,v=6,M=3,u=2,d=1,y=new Float32Array(M*v*_),b=new Float32Array(u*v*_),T=new Float32Array(d*v*_);for(let P=0;P<_;P++){const A=P%3*2/3-1,F=P>2?0:-1,ee=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];y.set(ee,M*v*P),b.set(p,u*v*P);const m=[P,P,P,P,P,P];T.set(m,d*v*P)}const O=new Wt;O.setAttribute("position",new kt(y,M)),O.setAttribute("uv",new kt(b,u)),O.setAttribute("faceIndex",new kt(T,d)),e.push(O),r>ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function no(i,e,t){const n=new On(i,e,t);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Zu(i,e,t){const n=new Float32Array(Dn),r=new D(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gs(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function io(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gs(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ro(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function gs(){return`

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
	`}function $u(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===wa||c===Pa,h=c===fi||c===pi;if(l||h){let f=e.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new to(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const _=o.image;return l&&_&&_.height>0||h&&_&&r(_)?(t===null&&(t=new to(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Ju(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Sr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Qu(i,e,t,n){const r={},a=new WeakMap;function s(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const M=p.morphAttributes[v];for(let u=0,d=M.length;u<d;u++)e.remove(M[u])}p.removeEventListener("dispose",s),delete r[p.id];const _=a.get(p);_&&(e.remove(_),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const v in p)e.update(p[v],i.ARRAY_BUFFER);const _=f.morphAttributes;for(const v in _){const M=_[v];for(let u=0,d=M.length;u<d;u++)e.update(M[u],i.ARRAY_BUFFER)}}function l(f){const p=[],_=f.index,v=f.attributes.position;let M=0;if(_!==null){const y=_.array;M=_.version;for(let b=0,T=y.length;b<T;b+=3){const O=y[b+0],P=y[b+1],A=y[b+2];p.push(O,P,P,A,A,O)}}else if(v!==void 0){const y=v.array;M=v.version;for(let b=0,T=y.length/3-1;b<T;b+=3){const O=b+0,P=b+1,A=b+2;p.push(O,P,P,A,A,O)}}else return;const u=new(Yo(p)?ec:Qo)(p,1);u.version=M;const d=a.get(f);d&&e.remove(d),a.set(f,u)}function h(f){const p=a.get(f);if(p){const _=f.index;_!==null&&p.version<_.version&&l(f)}else l(f);return a.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function ef(i,e,t){let n;function r(p){n=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function c(p,_){i.drawElements(n,_,a,p*s),t.update(_,n,1)}function l(p,_,v){v!==0&&(i.drawElementsInstanced(n,_,a,p*s,v),t.update(_,n,v))}function h(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,a,p,0,v);let u=0;for(let d=0;d<v;d++)u+=_[d];t.update(u,n,1)}function f(p,_,v,M){if(v===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<p.length;d++)l(p[d]/s,_[d],M[d]);else{u.multiDrawElementsInstancedWEBGL(n,_,0,a,p,0,M,0,v);let d=0;for(let y=0;y<v;y++)d+=_[y];for(let y=0;y<M.length;y++)t.update(d,n,M[y])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function tf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function nf(i,e,t){const n=new WeakMap,r=new it;function a(s,o,c){const l=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==f){let m=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",m)};var _=m;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;v===!0&&(T=1),M===!0&&(T=2),u===!0&&(T=3);let O=o.attributes.position.count*T,P=1;O>e.maxTextureSize&&(P=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const A=new Float32Array(O*P*4*f),F=new Zo(A,O,P,f);F.type=tn,F.needsUpdate=!0;const ee=T*4;for(let S=0;S<f;S++){const V=d[S],z=y[S],j=b[S],K=O*P*4*S;for(let G=0;G<V.count;G++){const Y=G*ee;v===!0&&(r.fromBufferAttribute(V,G),A[K+Y+0]=r.x,A[K+Y+1]=r.y,A[K+Y+2]=r.z,A[K+Y+3]=0),M===!0&&(r.fromBufferAttribute(z,G),A[K+Y+4]=r.x,A[K+Y+5]=r.y,A[K+Y+6]=r.z,A[K+Y+7]=0),u===!0&&(r.fromBufferAttribute(j,G),A[K+Y+8]=r.x,A[K+Y+9]=r.y,A[K+Y+10]=r.z,A[K+Y+11]=j.itemSize===4?r.w:1)}}p={count:f,texture:F,size:new Ae(O,P)},n.set(o,p),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let u=0;u<l.length;u++)v+=l[u];const M=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:a}}function rf(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return f}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}class ac extends pt{constructor(e,t,n,r,a,s,o,c,l,h=li){if(h!==li&&h!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===li&&(n=Nn),n===void 0&&h===mi&&(n=_i),super(null,r,a,s,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sc=new pt,ao=new ac(1,1),oc=new Zo,cc=new Vl,lc=new ms,so=[],oo=[],co=new Float32Array(16),lo=new Float32Array(9),ho=new Float32Array(4);function xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=so[r];if(a===void 0&&(a=new Float32Array(r),so[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ur(i,e){let t=oo[e];t===void 0&&(t=new Int32Array(e),oo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function af(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function lf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,n))return;ho.set(n),i.uniformMatrix2fv(this.addr,!1,ho),ct(t,n)}}function hf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,n))return;lo.set(n),i.uniformMatrix3fv(this.addr,!1,lo),ct(t,n)}}function df(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,n))return;co.set(n),i.uniformMatrix4fv(this.addr,!1,co),ct(t,n)}}function uf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function mf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function Mf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(ao.compareFunction=Xo,a=ao):a=sc,t.setTexture2D(e||a,r)}function Sf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||cc,r)}function bf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||lc,r)}function Ef(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||oc,r)}function yf(i){switch(i){case 5126:return af;case 35664:return sf;case 35665:return of;case 35666:return cf;case 35674:return lf;case 35675:return hf;case 35676:return df;case 5124:case 35670:return uf;case 35667:case 35671:return ff;case 35668:case 35672:return pf;case 35669:case 35673:return _f;case 5125:return mf;case 36294:return gf;case 36295:return vf;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return bf;case 36289:case 36303:case 36311:case 36292:return Ef}}function Tf(i,e){i.uniform1fv(this.addr,e)}function Af(i,e){const t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function wf(i,e){const t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function Pf(i,e){const t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function Rf(i,e){const t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cf(i,e){const t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lf(i,e){const t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Df(i,e){i.uniform1iv(this.addr,e)}function If(i,e){i.uniform2iv(this.addr,e)}function Uf(i,e){i.uniform3iv(this.addr,e)}function Nf(i,e){i.uniform4iv(this.addr,e)}function Of(i,e){i.uniform1uiv(this.addr,e)}function Ff(i,e){i.uniform2uiv(this.addr,e)}function Bf(i,e){i.uniform3uiv(this.addr,e)}function zf(i,e){i.uniform4uiv(this.addr,e)}function Hf(i,e,t){const n=this.cache,r=e.length,a=Ur(t,r);ot(n,a)||(i.uniform1iv(this.addr,a),ct(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||sc,a[s])}function Gf(i,e,t){const n=this.cache,r=e.length,a=Ur(t,r);ot(n,a)||(i.uniform1iv(this.addr,a),ct(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||cc,a[s])}function Vf(i,e,t){const n=this.cache,r=e.length,a=Ur(t,r);ot(n,a)||(i.uniform1iv(this.addr,a),ct(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||lc,a[s])}function kf(i,e,t){const n=this.cache,r=e.length,a=Ur(t,r);ot(n,a)||(i.uniform1iv(this.addr,a),ct(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||oc,a[s])}function Wf(i){switch(i){case 5126:return Tf;case 35664:return Af;case 35665:return wf;case 35666:return Pf;case 35674:return Rf;case 35675:return Cf;case 35676:return Lf;case 5124:case 35670:return Df;case 35667:case 35671:return If;case 35668:case 35672:return Uf;case 35669:case 35673:return Nf;case 5125:return Of;case 36294:return Ff;case 36295:return Bf;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return kf}}class qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yf(t.type)}}class jf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wf(t.type)}}class Xf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function uo(i,e){i.seq.push(e),i.map[e.id]=e}function Yf(i,e,t){const n=i.name,r=n.length;for(fa.lastIndex=0;;){const a=fa.exec(n),s=fa.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){uo(t,l===void 0?new qf(o,i,e):new jf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Xf(o),uo(t,f)),t=f}}}class br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Yf(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function fo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Kf=37297;let Zf=0;function $f(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function Jf(i){const e=ke.getPrimaries(ke.workingColorSpace),t=ke.getPrimaries(i);let n;switch(e===t?n="":e===Tr&&t===yr?n="LinearDisplayP3ToLinearSRGB":e===yr&&t===Tr&&(n="LinearSRGBToLinearDisplayP3"),i){case bn:case Lr:return[n,"LinearTransferOETF"];case zt:case fs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function po(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$f(i.getShaderSource(e),s)}else return r}function Qf(i,e){const t=Jf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ep(i,e){let t;switch(e){case $c:t="Linear";break;case Jc:t="Reinhard";break;case Qc:t="Cineon";break;case el:t="ACESFilmic";break;case nl:t="AgX";break;case il:t="Neutral";break;case tl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cr=new D;function tp(){ke.getLuminanceCoefficients(cr);const i=cr.x.toFixed(4),e=cr.y.toFixed(4),t=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function np(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function ip(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Ri(i){return i!==""}function _o(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function rs(i){return i.replace(ap,op)}const sp=new Map;function op(i,e){let t=Ce[e];if(t===void 0){const n=sp.get(e);if(n!==void 0)t=Ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rs(t)}const cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function go(i){return i.replace(cp,lp)}function lp(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function vo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function hp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qt&&(e="SHADOWMAP_TYPE_VSM"),e}function dp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fi:case pi:e="ENVMAP_TYPE_CUBE";break;case Cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function up(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function fp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case No:e="ENVMAP_BLENDING_MULTIPLY";break;case Kc:e="ENVMAP_BLENDING_MIX";break;case Zc:e="ENVMAP_BLENDING_ADD";break}return e}function pp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _p(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=hp(t),l=dp(t),h=up(t),f=fp(t),p=pp(t),_=np(t),v=ip(a),M=r.createProgram();let u,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ri).join(`
`),u.length>0&&(u+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ri).join(`
`),d.length>0&&(d+=`
`)):(u=[vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),d=[vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Ce.tonemapping_pars_fragment:"",t.toneMapping!==xn?ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,Qf("linearToOutputTexel",t.outputColorSpace),tp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),s=rs(s),s=_o(s,t),s=mo(s,t),o=rs(o),o=_o(o,t),o=mo(o,t),s=go(s),o=go(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,u=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,d=["#define varying in",t.glslVersion===Is?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Is?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=y+u+s,T=y+d+o,O=fo(r,r.VERTEX_SHADER,b),P=fo(r,r.FRAGMENT_SHADER,T);r.attachShader(M,O),r.attachShader(M,P),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function A(S){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(M).trim(),z=r.getShaderInfoLog(O).trim(),j=r.getShaderInfoLog(P).trim();let K=!0,G=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,O,P);else{const Y=po(r,O,"vertex"),H=po(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+V+`
`+Y+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||j==="")&&(G=!1);G&&(S.diagnostics={runnable:K,programLog:V,vertexShader:{log:z,prefix:u},fragmentShader:{log:j,prefix:d}})}r.deleteShader(O),r.deleteShader(P),F=new br(r,M),ee=rp(r,M)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let ee;this.getAttributes=function(){return ee===void 0&&A(this),ee};let m=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=r.getProgramParameter(M,Kf)),m},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zf++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}let mp=0;class gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vp(e),t.set(e,n)),n}}class vp{constructor(e){this.id=mp++,this.code=e,this.usedTimes=0}}function xp(i,e,t,n,r,a,s){const o=new $o,c=new gp,l=new Set,h=[],f=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,_=r.vertexTextures;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(m){return l.add(m),m===0?"uv":`uv${m}`}function d(m,S,V,z,j){const K=z.fog,G=j.geometry,Y=m.isMeshStandardMaterial?z.environment:null,H=(m.isMeshStandardMaterial?t:e).get(m.envMap||Y),oe=H&&H.mapping===Cr?H.image.height:null,ce=M[m.type];m.precision!==null&&(v=r.getMaxPrecision(m.precision),v!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",v,"instead."));const me=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ze=me!==void 0?me.length:0;let qe=0;G.morphAttributes.position!==void 0&&(qe=1),G.morphAttributes.normal!==void 0&&(qe=2),G.morphAttributes.color!==void 0&&(qe=3);let k,$,pe,le;if(ce){const xt=qt[ce];k=xt.vertexShader,$=xt.fragmentShader}else k=m.vertexShader,$=m.fragmentShader,c.update(m),pe=c.getVertexShaderID(m),le=c.getFragmentShaderID(m);const Pe=i.getRenderTarget(),Se=j.isInstancedMesh===!0,Ue=j.isBatchedMesh===!0,Ye=!!m.map,Ne=!!m.matcap,w=!!H,bt=!!m.aoMap,De=!!m.lightMap,Fe=!!m.bumpMap,Ee=!!m.normalMap,$e=!!m.displacementMap,we=!!m.emissiveMap,E=!!m.metalnessMap,g=!!m.roughnessMap,I=m.anisotropy>0,q=m.clearcoat>0,Z=m.dispersion>0,W=m.iridescence>0,ge=m.sheen>0,ne=m.transmission>0,he=I&&!!m.anisotropyMap,Be=q&&!!m.clearcoatMap,J=q&&!!m.clearcoatNormalMap,de=q&&!!m.clearcoatRoughnessMap,ye=W&&!!m.iridescenceMap,Te=W&&!!m.iridescenceThicknessMap,ue=ge&&!!m.sheenColorMap,Ie=ge&&!!m.sheenRoughnessMap,Re=!!m.specularMap,Ze=!!m.specularColorMap,R=!!m.specularIntensityMap,ae=ne&&!!m.transmissionMap,B=ne&&!!m.thicknessMap,X=!!m.gradientMap,ie=!!m.alphaMap,se=m.alphaTest>0,Oe=!!m.alphaHash,rt=!!m.extensions;let vt=xn;m.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(vt=i.toneMapping);const He={shaderID:ce,shaderType:m.type,shaderName:m.name,vertexShader:k,fragmentShader:$,defines:m.defines,customVertexShaderID:pe,customFragmentShaderID:le,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:v,batching:Ue,batchingColor:Ue&&j._colorsTexture!==null,instancing:Se,instancingColor:Se&&j.instanceColor!==null,instancingMorph:Se&&j.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:bn,alphaToCoverage:!!m.alphaToCoverage,map:Ye,matcap:Ne,envMap:w,envMapMode:w&&H.mapping,envMapCubeUVHeight:oe,aoMap:bt,lightMap:De,bumpMap:Fe,normalMap:Ee,displacementMap:_&&$e,emissiveMap:we,normalMapObjectSpace:Ee&&m.normalMapType===cl,normalMapTangentSpace:Ee&&m.normalMapType===ol,metalnessMap:E,roughnessMap:g,anisotropy:I,anisotropyMap:he,clearcoat:q,clearcoatMap:Be,clearcoatNormalMap:J,clearcoatRoughnessMap:de,dispersion:Z,iridescence:W,iridescenceMap:ye,iridescenceThicknessMap:Te,sheen:ge,sheenColorMap:ue,sheenRoughnessMap:Ie,specularMap:Re,specularColorMap:Ze,specularIntensityMap:R,transmission:ne,transmissionMap:ae,thicknessMap:B,gradientMap:X,opaque:m.transparent===!1&&m.blending===ci&&m.alphaToCoverage===!1,alphaMap:ie,alphaTest:se,alphaHash:Oe,combine:m.combine,mapUv:Ye&&u(m.map.channel),aoMapUv:bt&&u(m.aoMap.channel),lightMapUv:De&&u(m.lightMap.channel),bumpMapUv:Fe&&u(m.bumpMap.channel),normalMapUv:Ee&&u(m.normalMap.channel),displacementMapUv:$e&&u(m.displacementMap.channel),emissiveMapUv:we&&u(m.emissiveMap.channel),metalnessMapUv:E&&u(m.metalnessMap.channel),roughnessMapUv:g&&u(m.roughnessMap.channel),anisotropyMapUv:he&&u(m.anisotropyMap.channel),clearcoatMapUv:Be&&u(m.clearcoatMap.channel),clearcoatNormalMapUv:J&&u(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&u(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&u(m.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&u(m.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&u(m.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&u(m.sheenRoughnessMap.channel),specularMapUv:Re&&u(m.specularMap.channel),specularColorMapUv:Ze&&u(m.specularColorMap.channel),specularIntensityMapUv:R&&u(m.specularIntensityMap.channel),transmissionMapUv:ae&&u(m.transmissionMap.channel),thicknessMapUv:B&&u(m.thicknessMap.channel),alphaMapUv:ie&&u(m.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ee||I),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!G.attributes.uv&&(Ye||ie),fog:!!K,useFog:m.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:j.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:qe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ye&&m.map.isVideoTexture===!0&&ke.getTransfer(m.map.colorSpace)===Qe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===en,flipSided:m.side===St,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:rt&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&m.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function y(m){const S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(const V in m.defines)S.push(V),S.push(m.defines[V]);return m.isRawShaderMaterial===!1&&(b(S,m),T(S,m),S.push(i.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function b(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapCubeUVHeight),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.morphAttributeCount),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function T(m,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),m.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),m.push(o.mask)}function O(m){const S=M[m.type];let V;if(S){const z=qt[S];V=eh.clone(z.uniforms)}else V=m.uniforms;return V}function P(m,S){let V;for(let z=0,j=h.length;z<j;z++){const K=h[z];if(K.cacheKey===S){V=K,++V.usedTimes;break}}return V===void 0&&(V=new _p(i,S,m,a),h.push(V)),V}function A(m){if(--m.usedTimes===0){const S=h.indexOf(m);h[S]=h[h.length-1],h.pop(),m.destroy()}}function F(m){c.remove(m)}function ee(){c.dispose()}return{getParameters:d,getProgramCacheKey:y,getUniforms:O,acquireProgram:P,releaseProgram:A,releaseShaderCache:F,programs:h,dispose:ee}}function Mp(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,c){i.get(s)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Sp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mo(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(f,p,_,v,M,u){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:_,groupOrder:v,renderOrder:f.renderOrder,z:M,group:u},i[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=_,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=M,d.group=u),e++,d}function o(f,p,_,v,M,u){const d=s(f,p,_,v,M,u);_.transmission>0?n.push(d):_.transparent===!0?r.push(d):t.push(d)}function c(f,p,_,v,M,u){const d=s(f,p,_,v,M,u);_.transmission>0?n.unshift(d):_.transparent===!0?r.unshift(d):t.unshift(d)}function l(f,p){t.length>1&&t.sort(f||Sp),n.length>1&&n.sort(p||xo),r.length>1&&r.sort(p||xo)}function h(){for(let f=e,p=i.length;f<p;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:c,finish:h,sort:l}}function bp(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new Mo,i.set(n,[s])):r>=a.length?(s=new Mo,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ep(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Tp=0;function Ap(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wp(i){const e=new Ep,t=yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const r=new D,a=new tt,s=new tt;function o(l){let h=0,f=0,p=0;for(let ee=0;ee<9;ee++)n.probe[ee].set(0,0,0);let _=0,v=0,M=0,u=0,d=0,y=0,b=0,T=0,O=0,P=0,A=0;l.sort(Ap);for(let ee=0,m=l.length;ee<m;ee++){const S=l[ee],V=S.color,z=S.intensity,j=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=V.r*z,f+=V.g*z,p+=V.b*z;else if(S.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(S.sh.coefficients[G],z);A++}else if(S.isDirectionalLight){const G=e.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const Y=S.shadow,H=t.get(S);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[_]=H,n.directionalShadowMap[_]=K,n.directionalShadowMatrix[_]=S.shadow.matrix,y++}n.directional[_]=G,_++}else if(S.isSpotLight){const G=e.get(S);G.position.setFromMatrixPosition(S.matrixWorld),G.color.copy(V).multiplyScalar(z),G.distance=j,G.coneCos=Math.cos(S.angle),G.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),G.decay=S.decay,n.spot[M]=G;const Y=S.shadow;if(S.map&&(n.spotLightMap[O]=S.map,O++,Y.updateMatrices(S),S.castShadow&&P++),n.spotLightMatrix[M]=Y.matrix,S.castShadow){const H=t.get(S);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=K,T++}M++}else if(S.isRectAreaLight){const G=e.get(S);G.color.copy(V).multiplyScalar(z),G.halfWidth.set(S.width*.5,0,0),G.halfHeight.set(0,S.height*.5,0),n.rectArea[u]=G,u++}else if(S.isPointLight){const G=e.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),G.distance=S.distance,G.decay=S.decay,S.castShadow){const Y=S.shadow,H=t.get(S);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=K,n.pointShadowMatrix[v]=S.shadow.matrix,b++}n.point[v]=G,v++}else if(S.isHemisphereLight){const G=e.get(S);G.skyColor.copy(S.color).multiplyScalar(z),G.groundColor.copy(S.groundColor).multiplyScalar(z),n.hemi[d]=G,d++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const F=n.hash;(F.directionalLength!==_||F.pointLength!==v||F.spotLength!==M||F.rectAreaLength!==u||F.hemiLength!==d||F.numDirectionalShadows!==y||F.numPointShadows!==b||F.numSpotShadows!==T||F.numSpotMaps!==O||F.numLightProbes!==A)&&(n.directional.length=_,n.spot.length=M,n.rectArea.length=u,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=T+O-P,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,F.directionalLength=_,F.pointLength=v,F.spotLength=M,F.rectAreaLength=u,F.hemiLength=d,F.numDirectionalShadows=y,F.numPointShadows=b,F.numSpotShadows=T,F.numSpotMaps=O,F.numLightProbes=A,n.version=Tp++)}function c(l,h){let f=0,p=0,_=0,v=0,M=0;const u=h.matrixWorldInverse;for(let d=0,y=l.length;d<y;d++){const b=l[d];if(b.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(u),f++}else if(b.isSpotLight){const T=n.spot[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(u),_++}else if(b.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(u),s.identity(),a.copy(b.matrixWorld),a.premultiply(u),s.extractRotation(a),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),v++}else if(b.isPointLight){const T=n.point[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(u),p++}else if(b.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(u),M++}}}return{setup:o,setupView:c,state:n}}function So(i){const e=new wp(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function s(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function Pp(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new So(i),e.set(r,[o])):a>=s.length?(o=new So(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Rp extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=al,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cp extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dp=`uniform sampler2D shadow_pass;
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
}`;function Ip(i,e,t){let n=new ic;const r=new Ae,a=new Ae,s=new it,o=new Rp({depthPacking:sl}),c=new Cp,l={},h=t.maxTextureSize,f={[Mn]:St,[St]:Mn,[en]:en},p=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Lp,fragmentShader:Dp}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const v=new Wt;v.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new It(v,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let d=this.type;this.render=function(P,A,F){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||P.length===0)return;const ee=i.getRenderTarget(),m=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),V=i.state;V.setBlending(vn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=d!==Qt&&this.type===Qt,j=d===Qt&&this.type!==Qt;for(let K=0,G=P.length;K<G;K++){const Y=P[K],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const oe=H.getFrameExtents();if(r.multiply(oe),a.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/oe.x),r.x=a.x*oe.x,H.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/oe.y),r.y=a.y*oe.y,H.mapSize.y=a.y)),H.map===null||z===!0||j===!0){const me=this.type!==Qt?{minFilter:Dt,magFilter:Dt}:{};H.map!==null&&H.map.dispose(),H.map=new On(r.x,r.y,me),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ce=H.getViewportCount();for(let me=0;me<ce;me++){const ze=H.getViewport(me);s.set(a.x*ze.x,a.y*ze.y,a.x*ze.z,a.y*ze.w),V.viewport(s),H.updateMatrices(Y,me),n=H.getFrustum(),T(A,F,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Qt&&y(H,F),H.needsUpdate=!1}d=this.type,u.needsUpdate=!1,i.setRenderTarget(ee,m,S)};function y(P,A){const F=e.update(M);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new On(r.x,r.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(A,null,F,p,M,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(A,null,F,_,M,null)}function b(P,A,F,ee){let m=null;const S=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)m=S;else if(m=F.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=m.uuid,z=A.uuid;let j=l[V];j===void 0&&(j={},l[V]=j);let K=j[z];K===void 0&&(K=m.clone(),j[z]=K,A.addEventListener("dispose",O)),m=K}if(m.visible=A.visible,m.wireframe=A.wireframe,ee===Qt?m.side=A.shadowSide!==null?A.shadowSide:A.side:m.side=A.shadowSide!==null?A.shadowSide:f[A.side],m.alphaMap=A.alphaMap,m.alphaTest=A.alphaTest,m.map=A.map,m.clipShadows=A.clipShadows,m.clippingPlanes=A.clippingPlanes,m.clipIntersection=A.clipIntersection,m.displacementMap=A.displacementMap,m.displacementScale=A.displacementScale,m.displacementBias=A.displacementBias,m.wireframeLinewidth=A.wireframeLinewidth,m.linewidth=A.linewidth,F.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const V=i.properties.get(m);V.light=F}return m}function T(P,A,F,ee,m){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&m===Qt)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const z=e.update(P),j=P.material;if(Array.isArray(j)){const K=z.groups;for(let G=0,Y=K.length;G<Y;G++){const H=K[G],oe=j[H.materialIndex];if(oe&&oe.visible){const ce=b(P,oe,ee,m);P.onBeforeShadow(i,P,A,F,z,ce,H),i.renderBufferDirect(F,null,z,ce,P,H),P.onAfterShadow(i,P,A,F,z,ce,H)}}}else if(j.visible){const K=b(P,j,ee,m);P.onBeforeShadow(i,P,A,F,z,K,null),i.renderBufferDirect(F,null,z,K,P,null),P.onAfterShadow(i,P,A,F,z,K,null)}}const V=P.children;for(let z=0,j=V.length;z<j;z++)T(V[z],A,F,ee,m)}function O(P){P.target.removeEventListener("dispose",O);for(const F in l){const ee=l[F],m=P.target.uuid;m in ee&&(ee[m].dispose(),delete ee[m])}}}const Up={[Ma]:Sa,[ba]:Ta,[Ea]:Aa,[ui]:ya,[Sa]:Ma,[Ta]:ba,[Aa]:Ea,[ya]:ui};function Np(i){function e(){let R=!1;const ae=new it;let B=null;const X=new it(0,0,0,0);return{setMask:function(ie){B!==ie&&!R&&(i.colorMask(ie,ie,ie,ie),B=ie)},setLocked:function(ie){R=ie},setClear:function(ie,se,Oe,rt,vt){vt===!0&&(ie*=rt,se*=rt,Oe*=rt),ae.set(ie,se,Oe,rt),X.equals(ae)===!1&&(i.clearColor(ie,se,Oe,rt),X.copy(ae))},reset:function(){R=!1,B=null,X.set(-1,0,0,0)}}}function t(){let R=!1,ae=!1,B=null,X=null,ie=null;return{setReversed:function(se){ae=se},setTest:function(se){se?pe(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(se){B!==se&&!R&&(i.depthMask(se),B=se)},setFunc:function(se){if(ae&&(se=Up[se]),X!==se){switch(se){case Ma:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case Ea:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case Ta:i.depthFunc(i.GREATER);break;case Aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=se}},setLocked:function(se){R=se},setClear:function(se){ie!==se&&(i.clearDepth(se),ie=se)},reset:function(){R=!1,B=null,X=null,ie=null}}}function n(){let R=!1,ae=null,B=null,X=null,ie=null,se=null,Oe=null,rt=null,vt=null;return{setTest:function(He){R||(He?pe(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(He){ae!==He&&!R&&(i.stencilMask(He),ae=He)},setFunc:function(He,xt,Xt){(B!==He||X!==xt||ie!==Xt)&&(i.stencilFunc(He,xt,Xt),B=He,X=xt,ie=Xt)},setOp:function(He,xt,Xt){(se!==He||Oe!==xt||rt!==Xt)&&(i.stencilOp(He,xt,Xt),se=He,Oe=xt,rt=Xt)},setLocked:function(He){R=He},setClear:function(He){vt!==He&&(i.clearStencil(He),vt=He)},reset:function(){R=!1,ae=null,B=null,X=null,ie=null,se=null,Oe=null,rt=null,vt=null}}}const r=new e,a=new t,s=new n,o=new WeakMap,c=new WeakMap;let l={},h={},f=new WeakMap,p=[],_=null,v=!1,M=null,u=null,d=null,y=null,b=null,T=null,O=null,P=new We(0,0,0),A=0,F=!1,ee=null,m=null,S=null,V=null,z=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=G>=1):Y.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=G>=2);let H=null,oe={};const ce=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),ze=new it().fromArray(ce),qe=new it().fromArray(me);function k(R,ae,B,X){const ie=new Uint8Array(4),se=i.createTexture();i.bindTexture(R,se),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<B;Oe++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(ae+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return se}const $={};$[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),pe(i.DEPTH_TEST),a.setFunc(ui),De(!1),Fe(Ps),pe(i.CULL_FACE),w(vn);function pe(R){l[R]!==!0&&(i.enable(R),l[R]=!0)}function le(R){l[R]!==!1&&(i.disable(R),l[R]=!1)}function Pe(R,ae){return h[R]!==ae?(i.bindFramebuffer(R,ae),h[R]=ae,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ae),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Se(R,ae){let B=p,X=!1;if(R){B=f.get(ae),B===void 0&&(B=[],f.set(ae,B));const ie=R.textures;if(B.length!==ie.length||B[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Oe=ie.length;se<Oe;se++)B[se]=i.COLOR_ATTACHMENT0+se;B.length=ie.length,X=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,X=!0);X&&i.drawBuffers(B)}function Ue(R){return _!==R?(i.useProgram(R),_=R,!0):!1}const Ye={[Ln]:i.FUNC_ADD,[Dc]:i.FUNC_SUBTRACT,[Ic]:i.FUNC_REVERSE_SUBTRACT};Ye[Uc]=i.MIN,Ye[Nc]=i.MAX;const Ne={[Oc]:i.ZERO,[Fc]:i.ONE,[Bc]:i.SRC_COLOR,[va]:i.SRC_ALPHA,[Wc]:i.SRC_ALPHA_SATURATE,[Vc]:i.DST_COLOR,[Hc]:i.DST_ALPHA,[zc]:i.ONE_MINUS_SRC_COLOR,[xa]:i.ONE_MINUS_SRC_ALPHA,[kc]:i.ONE_MINUS_DST_COLOR,[Gc]:i.ONE_MINUS_DST_ALPHA,[qc]:i.CONSTANT_COLOR,[jc]:i.ONE_MINUS_CONSTANT_COLOR,[Xc]:i.CONSTANT_ALPHA,[Yc]:i.ONE_MINUS_CONSTANT_ALPHA};function w(R,ae,B,X,ie,se,Oe,rt,vt,He){if(R===vn){v===!0&&(le(i.BLEND),v=!1);return}if(v===!1&&(pe(i.BLEND),v=!0),R!==Lc){if(R!==M||He!==F){if((u!==Ln||b!==Ln)&&(i.blendEquation(i.FUNC_ADD),u=Ln,b=Ln),He)switch(R){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFunc(i.ONE,i.ONE);break;case Cs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ls:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ls:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}d=null,y=null,T=null,O=null,P.set(0,0,0),A=0,M=R,F=He}return}ie=ie||ae,se=se||B,Oe=Oe||X,(ae!==u||ie!==b)&&(i.blendEquationSeparate(Ye[ae],Ye[ie]),u=ae,b=ie),(B!==d||X!==y||se!==T||Oe!==O)&&(i.blendFuncSeparate(Ne[B],Ne[X],Ne[se],Ne[Oe]),d=B,y=X,T=se,O=Oe),(rt.equals(P)===!1||vt!==A)&&(i.blendColor(rt.r,rt.g,rt.b,vt),P.copy(rt),A=vt),M=R,F=!1}function bt(R,ae){R.side===en?le(i.CULL_FACE):pe(i.CULL_FACE);let B=R.side===St;ae&&(B=!B),De(B),R.blending===ci&&R.transparent===!1?w(vn):w(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const X=R.stencilWrite;s.setTest(X),X&&(s.setMask(R.stencilWriteMask),s.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),s.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),$e(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(R){ee!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),ee=R)}function Fe(R){R!==Pc?(pe(i.CULL_FACE),R!==m&&(R===Ps?i.cullFace(i.BACK):R===Rc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),m=R}function Ee(R){R!==S&&(K&&i.lineWidth(R),S=R)}function $e(R,ae,B){R?(pe(i.POLYGON_OFFSET_FILL),(V!==ae||z!==B)&&(i.polygonOffset(ae,B),V=ae,z=B)):le(i.POLYGON_OFFSET_FILL)}function we(R){R?pe(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function E(R){R===void 0&&(R=i.TEXTURE0+j-1),H!==R&&(i.activeTexture(R),H=R)}function g(R,ae,B){B===void 0&&(H===null?B=i.TEXTURE0+j-1:B=H);let X=oe[B];X===void 0&&(X={type:void 0,texture:void 0},oe[B]=X),(X.type!==R||X.texture!==ae)&&(H!==B&&(i.activeTexture(B),H=B),i.bindTexture(R,ae||$[R]),X.type=R,X.texture=ae)}function I(){const R=oe[H];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Be(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(R){ze.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ze.copy(R))}function ue(R){qe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),qe.copy(R))}function Ie(R,ae){let B=c.get(ae);B===void 0&&(B=new WeakMap,c.set(ae,B));let X=B.get(R);X===void 0&&(X=i.getUniformBlockIndex(ae,R.name),B.set(R,X))}function Re(R,ae){const X=c.get(ae).get(R);o.get(ae)!==X&&(i.uniformBlockBinding(ae,X,R.__bindingPointIndex),o.set(ae,X))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},H=null,oe={},h={},f=new WeakMap,p=[],_=null,v=!1,M=null,u=null,d=null,y=null,b=null,T=null,O=null,P=new We(0,0,0),A=0,F=!1,ee=null,m=null,S=null,V=null,z=null,ze.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:pe,disable:le,bindFramebuffer:Pe,drawBuffers:Se,useProgram:Ue,setBlending:w,setMaterial:bt,setFlipSided:De,setCullFace:Fe,setLineWidth:Ee,setPolygonOffset:$e,setScissorTest:we,activeTexture:E,bindTexture:g,unbindTexture:I,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:de,texImage3D:ye,updateUBOMapping:Ie,uniformBlockBinding:Re,texStorage2D:Be,texStorage3D:J,texSubImage2D:W,texSubImage3D:ge,compressedTexSubImage2D:ne,compressedTexSubImage3D:he,scissor:Te,viewport:ue,reset:Ze}}function bo(i,e,t,n){const r=Op(n);switch(t){case Ho:return i*e;case Vo:return i*e;case ko:return i*e*2;case Wo:return i*e/r.components*r.byteLength;case hs:return i*e/r.components*r.byteLength;case qo:return i*e*2/r.components*r.byteLength;case ds:return i*e*2/r.components*r.byteLength;case Go:return i*e*3/r.components*r.byteLength;case Vt:return i*e*4/r.components*r.byteLength;case us:return i*e*4/r.components*r.byteLength;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Da:case Ua:return Math.max(i,16)*Math.max(e,8)/4;case La:case Ia:return Math.max(i,8)*Math.max(e,8)/2;case Na:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $a:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Mr:case Ja:case Qa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jo:case es:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ts:case ns:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Op(i){switch(i){case an:case Fo:return{byteLength:1,components:1};case Di:case Bo:case Fi:return{byteLength:2,components:1};case cs:case ls:return{byteLength:2,components:4};case Nn:case os:case tn:return{byteLength:4,components:1};case zo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Fp(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ae,h=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,g){return _?new OffscreenCanvas(E,g):Ui("canvas")}function M(E,g,I){let q=1;const Z=we(E);if((Z.width>I||Z.height>I)&&(q=I/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor(q*Z.width),ge=Math.floor(q*Z.height);f===void 0&&(f=v(W,ge));const ne=g?v(W,ge):f;return ne.width=W,ne.height=ge,ne.getContext("2d").drawImage(E,0,0,W,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+ge+")."),ne}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function u(E){return E.generateMipmaps&&E.minFilter!==Dt&&E.minFilter!==Ht}function d(E){i.generateMipmap(E)}function y(E,g,I,q,Z=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=g;if(g===i.RED&&(I===i.FLOAT&&(W=i.R32F),I===i.HALF_FLOAT&&(W=i.R16F),I===i.UNSIGNED_BYTE&&(W=i.R8)),g===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(W=i.R8UI),I===i.UNSIGNED_SHORT&&(W=i.R16UI),I===i.UNSIGNED_INT&&(W=i.R32UI),I===i.BYTE&&(W=i.R8I),I===i.SHORT&&(W=i.R16I),I===i.INT&&(W=i.R32I)),g===i.RG&&(I===i.FLOAT&&(W=i.RG32F),I===i.HALF_FLOAT&&(W=i.RG16F),I===i.UNSIGNED_BYTE&&(W=i.RG8)),g===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(W=i.RG8UI),I===i.UNSIGNED_SHORT&&(W=i.RG16UI),I===i.UNSIGNED_INT&&(W=i.RG32UI),I===i.BYTE&&(W=i.RG8I),I===i.SHORT&&(W=i.RG16I),I===i.INT&&(W=i.RG32I)),g===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(W=i.RGB8UI),I===i.UNSIGNED_SHORT&&(W=i.RGB16UI),I===i.UNSIGNED_INT&&(W=i.RGB32UI),I===i.BYTE&&(W=i.RGB8I),I===i.SHORT&&(W=i.RGB16I),I===i.INT&&(W=i.RGB32I)),g===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),I===i.UNSIGNED_INT&&(W=i.RGBA32UI),I===i.BYTE&&(W=i.RGBA8I),I===i.SHORT&&(W=i.RGBA16I),I===i.INT&&(W=i.RGBA32I)),g===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),g===i.RGBA){const ge=Z?Er:ke.getTransfer(q);I===i.FLOAT&&(W=i.RGBA32F),I===i.HALF_FLOAT&&(W=i.RGBA16F),I===i.UNSIGNED_BYTE&&(W=ge===Qe?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function b(E,g){let I;return E?g===null||g===Nn||g===_i?I=i.DEPTH24_STENCIL8:g===tn?I=i.DEPTH32F_STENCIL8:g===Di&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Nn||g===_i?I=i.DEPTH_COMPONENT24:g===tn?I=i.DEPTH_COMPONENT32F:g===Di&&(I=i.DEPTH_COMPONENT16),I}function T(E,g){return u(E)===!0||E.isFramebufferTexture&&E.minFilter!==Dt&&E.minFilter!==Ht?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function O(E){const g=E.target;g.removeEventListener("dispose",O),A(g),g.isVideoTexture&&h.delete(g)}function P(E){const g=E.target;g.removeEventListener("dispose",P),ee(g)}function A(E){const g=n.get(E);if(g.__webglInit===void 0)return;const I=E.source,q=p.get(I);if(q){const Z=q[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&F(E),Object.keys(q).length===0&&p.delete(I)}n.remove(E)}function F(E){const g=n.get(E);i.deleteTexture(g.__webglTexture);const I=E.source,q=p.get(I);delete q[g.__cacheKey],s.memory.textures--}function ee(E){const g=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let Z=0;Z<g.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=E.textures;for(let q=0,Z=I.length;q<Z;q++){const W=n.get(I[q]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),s.memory.textures--),n.remove(I[q])}n.remove(E)}let m=0;function S(){m=0}function V(){const E=m;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),m+=1,E}function z(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function j(E,g){const I=n.get(E);if(E.isVideoTexture&&Ee(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe(I,E,g);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+g)}function K(E,g){const I=n.get(E);if(E.version>0&&I.__version!==E.version){qe(I,E,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+g)}function G(E,g){const I=n.get(E);if(E.version>0&&I.__version!==E.version){qe(I,E,g);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+g)}function Y(E,g){const I=n.get(E);if(E.version>0&&I.__version!==E.version){k(I,E,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+g)}const H={[Ra]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},oe={[Dt]:i.NEAREST,[rl]:i.NEAREST_MIPMAP_NEAREST,[Vi]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[Un]:i.LINEAR_MIPMAP_LINEAR},ce={[ll]:i.NEVER,[_l]:i.ALWAYS,[hl]:i.LESS,[Xo]:i.LEQUAL,[dl]:i.EQUAL,[pl]:i.GEQUAL,[ul]:i.GREATER,[fl]:i.NOTEQUAL};function me(E,g){if(g.type===tn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ht||g.magFilter===Hr||g.magFilter===Vi||g.magFilter===Un||g.minFilter===Ht||g.minFilter===Hr||g.minFilter===Vi||g.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,H[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,H[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,H[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,oe[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,oe[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dt||g.minFilter!==Vi&&g.minFilter!==Un||g.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ze(E,g){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",O));const q=g.source;let Z=p.get(q);Z===void 0&&(Z={},p.set(q,Z));const W=z(g);if(W!==E.__cacheKey){Z[W]===void 0&&(Z[W]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,I=!0),Z[W].usedTimes++;const ge=Z[E.__cacheKey];ge!==void 0&&(Z[E.__cacheKey].usedTimes--,ge.usedTimes===0&&F(g)),E.__cacheKey=W,E.__webglTexture=Z[W].texture}return I}function qe(E,g,I){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);const Z=ze(E,g),W=g.source;t.bindTexture(q,E.__webglTexture,i.TEXTURE0+I);const ge=n.get(W);if(W.version!==ge.__version||Z===!0){t.activeTexture(i.TEXTURE0+I);const ne=ke.getPrimaries(ke.workingColorSpace),he=g.colorSpace===mn?null:ke.getPrimaries(g.colorSpace),Be=g.colorSpace===mn||ne===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let J=M(g.image,!1,r.maxTextureSize);J=$e(g,J);const de=a.convert(g.format,g.colorSpace),ye=a.convert(g.type);let Te=y(g.internalFormat,de,ye,g.colorSpace,g.isVideoTexture);me(q,g);let ue;const Ie=g.mipmaps,Re=g.isVideoTexture!==!0,Ze=ge.__version===void 0||Z===!0,R=W.dataReady,ae=T(g,J);if(g.isDepthTexture)Te=b(g.format===mi,g.type),Ze&&(Re?t.texStorage2D(i.TEXTURE_2D,1,Te,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Te,J.width,J.height,0,de,ye,null));else if(g.isDataTexture)if(Ie.length>0){Re&&Ze&&t.texStorage2D(i.TEXTURE_2D,ae,Te,Ie[0].width,Ie[0].height);for(let B=0,X=Ie.length;B<X;B++)ue=Ie[B],Re?R&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,ue.width,ue.height,de,ye,ue.data):t.texImage2D(i.TEXTURE_2D,B,Te,ue.width,ue.height,0,de,ye,ue.data);g.generateMipmaps=!1}else Re?(Ze&&t.texStorage2D(i.TEXTURE_2D,ae,Te,J.width,J.height),R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,de,ye,J.data)):t.texImage2D(i.TEXTURE_2D,0,Te,J.width,J.height,0,de,ye,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Re&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Te,Ie[0].width,Ie[0].height,J.depth);for(let B=0,X=Ie.length;B<X;B++)if(ue=Ie[B],g.format!==Vt)if(de!==null)if(Re){if(R)if(g.layerUpdates.size>0){const ie=bo(ue.width,ue.height,g.format,g.type);for(const se of g.layerUpdates){const Oe=ue.data.subarray(se*ie/ue.data.BYTES_PER_ELEMENT,(se+1)*ie/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,se,ue.width,ue.height,1,de,Oe,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,ue.width,ue.height,J.depth,de,ue.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,Te,ue.width,ue.height,J.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,ue.width,ue.height,J.depth,de,ye,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,B,Te,ue.width,ue.height,J.depth,0,de,ye,ue.data)}else{Re&&Ze&&t.texStorage2D(i.TEXTURE_2D,ae,Te,Ie[0].width,Ie[0].height);for(let B=0,X=Ie.length;B<X;B++)ue=Ie[B],g.format!==Vt?de!==null?Re?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,ue.width,ue.height,de,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,B,Te,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?R&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,ue.width,ue.height,de,ye,ue.data):t.texImage2D(i.TEXTURE_2D,B,Te,ue.width,ue.height,0,de,ye,ue.data)}else if(g.isDataArrayTexture)if(Re){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Te,J.width,J.height,J.depth),R)if(g.layerUpdates.size>0){const B=bo(J.width,J.height,g.format,g.type);for(const X of g.layerUpdates){const ie=J.data.subarray(X*B/J.data.BYTES_PER_ELEMENT,(X+1)*B/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,J.width,J.height,1,de,ye,ie)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,ye,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,J.width,J.height,J.depth,0,de,ye,J.data);else if(g.isData3DTexture)Re?(Ze&&t.texStorage3D(i.TEXTURE_3D,ae,Te,J.width,J.height,J.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,ye,J.data)):t.texImage3D(i.TEXTURE_3D,0,Te,J.width,J.height,J.depth,0,de,ye,J.data);else if(g.isFramebufferTexture){if(Ze)if(Re)t.texStorage2D(i.TEXTURE_2D,ae,Te,J.width,J.height);else{let B=J.width,X=J.height;for(let ie=0;ie<ae;ie++)t.texImage2D(i.TEXTURE_2D,ie,Te,B,X,0,de,ye,null),B>>=1,X>>=1}}else if(Ie.length>0){if(Re&&Ze){const B=we(Ie[0]);t.texStorage2D(i.TEXTURE_2D,ae,Te,B.width,B.height)}for(let B=0,X=Ie.length;B<X;B++)ue=Ie[B],Re?R&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,de,ye,ue):t.texImage2D(i.TEXTURE_2D,B,Te,de,ye,ue);g.generateMipmaps=!1}else if(Re){if(Ze){const B=we(J);t.texStorage2D(i.TEXTURE_2D,ae,Te,B.width,B.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,ye,J)}else t.texImage2D(i.TEXTURE_2D,0,Te,de,ye,J);u(g)&&d(q),ge.__version=W.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function k(E,g,I){if(g.image.length!==6)return;const q=ze(E,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+I);const W=n.get(Z);if(Z.version!==W.__version||q===!0){t.activeTexture(i.TEXTURE0+I);const ge=ke.getPrimaries(ke.workingColorSpace),ne=g.colorSpace===mn?null:ke.getPrimaries(g.colorSpace),he=g.colorSpace===mn||ge===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Be=g.isCompressedTexture||g.image[0].isCompressedTexture,J=g.image[0]&&g.image[0].isDataTexture,de=[];for(let X=0;X<6;X++)!Be&&!J?de[X]=M(g.image[X],!0,r.maxCubemapSize):de[X]=J?g.image[X].image:g.image[X],de[X]=$e(g,de[X]);const ye=de[0],Te=a.convert(g.format,g.colorSpace),ue=a.convert(g.type),Ie=y(g.internalFormat,Te,ue,g.colorSpace),Re=g.isVideoTexture!==!0,Ze=W.__version===void 0||q===!0,R=Z.dataReady;let ae=T(g,ye);me(i.TEXTURE_CUBE_MAP,g);let B;if(Be){Re&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Ie,ye.width,ye.height);for(let X=0;X<6;X++){B=de[X].mipmaps;for(let ie=0;ie<B.length;ie++){const se=B[ie];g.format!==Vt?Te!==null?Re?R&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,se.width,se.height,Te,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,Ie,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,se.width,se.height,Te,ue,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,Ie,se.width,se.height,0,Te,ue,se.data)}}}else{if(B=g.mipmaps,Re&&Ze){B.length>0&&ae++;const X=we(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Ie,X.width,X.height)}for(let X=0;X<6;X++)if(J){Re?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,de[X].width,de[X].height,Te,ue,de[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,de[X].width,de[X].height,0,Te,ue,de[X].data);for(let ie=0;ie<B.length;ie++){const Oe=B[ie].image[X].image;Re?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,Oe.width,Oe.height,Te,ue,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,Ie,Oe.width,Oe.height,0,Te,ue,Oe.data)}}else{Re?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Te,ue,de[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,Te,ue,de[X]);for(let ie=0;ie<B.length;ie++){const se=B[ie];Re?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,Te,ue,se.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,Ie,Te,ue,se.image[X])}}}u(g)&&d(i.TEXTURE_CUBE_MAP),W.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function $(E,g,I,q,Z,W){const ge=a.convert(I.format,I.colorSpace),ne=a.convert(I.type),he=y(I.internalFormat,ge,ne,I.colorSpace);if(!n.get(g).__hasExternalTextures){const J=Math.max(1,g.width>>W),de=Math.max(1,g.height>>W);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,W,he,J,de,g.depth,0,ge,ne,null):t.texImage2D(Z,W,he,J,de,0,ge,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Fe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,n.get(I).__webglTexture,0,De(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,n.get(I).__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(E,g,I){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){const q=g.depthTexture,Z=q&&q.isDepthTexture?q.type:null,W=b(g.stencilBuffer,Z),ge=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=De(g);Fe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,W,g.width,g.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,W,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,W,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,E)}else{const q=g.textures;for(let Z=0;Z<q.length;Z++){const W=q[Z],ge=a.convert(W.format,W.colorSpace),ne=a.convert(W.type),he=y(W.internalFormat,ge,ne,W.colorSpace),Be=De(g);I&&Fe(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,he,g.width,g.height):Fe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,he,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,he,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j(g.depthTexture,0);const q=n.get(g.depthTexture).__webglTexture,Z=De(g);if(g.depthTexture.format===li)Fe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(g.depthTexture.format===mi)Fe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Pe(E){const g=n.get(E),I=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=q}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");le(g.__webglFramebuffer,E)}else if(I){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),pe(g.__webglDepthbuffer[q],E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,W)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),pe(g.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(E,g,I){const q=n.get(E);g!==void 0&&$(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Pe(E)}function Ue(E){const g=E.texture,I=n.get(E),q=n.get(g);E.addEventListener("dispose",P);const Z=E.textures,W=E.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,s.memory.textures++),W){I.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[ne]=[];for(let he=0;he<g.mipmaps.length;he++)I.__webglFramebuffer[ne][he]=i.createFramebuffer()}else I.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)I.__webglFramebuffer[ne]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(ge)for(let ne=0,he=Z.length;ne<he;ne++){const Be=n.get(Z[ne]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),s.memory.textures++)}if(E.samples>0&&Fe(E)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ne=0;ne<Z.length;ne++){const he=Z[ne];I.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ne]);const Be=a.convert(he.format,he.colorSpace),J=a.convert(he.type),de=y(he.internalFormat,Be,J,he.colorSpace,E.isXRRenderTarget===!0),ye=De(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,de,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,I.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),me(i.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let he=0;he<g.mipmaps.length;he++)$(I.__webglFramebuffer[ne][he],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else $(I.__webglFramebuffer[ne],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);u(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ne=0,he=Z.length;ne<he;ne++){const Be=Z[ne],J=n.get(Be);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),me(i.TEXTURE_2D,Be),$(I.__webglFramebuffer,E,Be,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,0),u(Be)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,q.__webglTexture),me(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let he=0;he<g.mipmaps.length;he++)$(I.__webglFramebuffer[he],E,g,i.COLOR_ATTACHMENT0,ne,he);else $(I.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,ne,0);u(g)&&d(ne),t.unbindTexture()}E.depthBuffer&&Pe(E)}function Ye(E){const g=E.textures;for(let I=0,q=g.length;I<q;I++){const Z=g[I];if(u(Z)){const W=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ge=n.get(Z).__webglTexture;t.bindTexture(W,ge),d(W),t.unbindTexture()}}}const Ne=[],w=[];function bt(E){if(E.samples>0){if(Fe(E)===!1){const g=E.textures,I=E.width,q=E.height;let Z=i.COLOR_BUFFER_BIT;const W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(E),ne=g.length>1;if(ne)for(let he=0;he<g.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let he=0;he<g.length;he++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const Be=n.get(g[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,I,q,0,0,I,q,Z,i.NEAREST),c===!0&&(Ne.length=0,w.length=0,Ne.push(i.COLOR_ATTACHMENT0+he),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ne.push(W),w.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<g.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const Be=n.get(g[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function De(E){return Math.min(r.maxSamples,E.samples)}function Fe(E){const g=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ee(E){const g=s.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function $e(E,g){const I=E.colorSpace,q=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==bn&&I!==mn&&(ke.getTransfer(I)===Qe?(q!==Vt||Z!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function we(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=S,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=Se,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Fe}function Bp(i,e){function t(n,r=mn){let a;const s=ke.getTransfer(r);if(n===an)return i.UNSIGNED_BYTE;if(n===cs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ls)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fo)return i.BYTE;if(n===Bo)return i.SHORT;if(n===Di)return i.UNSIGNED_SHORT;if(n===os)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===Fi)return i.HALF_FLOAT;if(n===Ho)return i.ALPHA;if(n===Go)return i.RGB;if(n===Vt)return i.RGBA;if(n===Vo)return i.LUMINANCE;if(n===ko)return i.LUMINANCE_ALPHA;if(n===li)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===Wo)return i.RED;if(n===hs)return i.RED_INTEGER;if(n===qo)return i.RG;if(n===ds)return i.RG_INTEGER;if(n===us)return i.RGBA_INTEGER;if(n===mr||n===gr||n===vr||n===xr)if(s===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===mr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===mr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Ia||n===Ua)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===La)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Oa||n===Fa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Na||n===Oa)return s===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Fa)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===za||n===Ha||n===Ga||n===Va||n===ka||n===Wa||n===qa||n===ja||n===Xa||n===Ya||n===Ka||n===Za||n===$a)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ba)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ka)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Za)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$a)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mr||n===Ja||n===Qa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Mr)return s===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jo||n===es||n===ts||n===ns)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Mr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===es)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ts)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ns)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class zp extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lr extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hp={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const M of e.hand.values()){const u=t.getJointPose(M,n),d=this._getHandJoint(l,M);u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=u.radius),d.visible=u!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),_=.02,v=.005;l.inputState.pinching&&p>_+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=_-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vp=`
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

}`;class kp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new pt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sn({vertexShader:Gp,fragmentShader:Vp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wp extends Bn{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,h=null,f=null,p=null,_=null,v=null;const M=new kp,u=t.getContextAttributes();let d=null,y=null;const b=[],T=[],O=new Ae;let P=null;const A=new Ct;A.layers.enable(1),A.viewport=new it;const F=new Ct;F.layers.enable(2),F.viewport=new it;const ee=[A,F],m=new zp;m.layers.enable(1),m.layers.enable(2);let S=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=b[k];return $===void 0&&($=new pa,b[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=b[k];return $===void 0&&($=new pa,b[k]=$),$.getGripSpace()},this.getHand=function(k){let $=b[k];return $===void 0&&($=new pa,b[k]=$),$.getHandSpace()};function z(k){const $=T.indexOf(k.inputSource);if($===-1)return;const pe=b[$];pe!==void 0&&(pe.update(k.inputSource,k.frame,l||s),pe.dispatchEvent({type:k.type,data:k.inputSource}))}function j(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",K);for(let k=0;k<b.length;k++){const $=T[k];$!==null&&(T[k]=null,b[k].disconnect($))}S=null,V=null,M.reset(),e.setRenderTarget(d),_=null,p=null,f=null,r=null,y=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",K),u.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const $={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),y=new On(_.framebufferWidth,_.framebufferHeight,{format:Vt,type:an,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let $=null,pe=null,le=null;u.depth&&(le=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=u.stencil?mi:li,pe=u.stencil?_i:Nn);const Pe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:a};f=new XRWebGLBinding(r,t),p=f.createProjectionLayer(Pe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new On(p.textureWidth,p.textureHeight,{format:Vt,type:an,depthTexture:new ac(p.textureWidth,p.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(k){for(let $=0;$<k.removed.length;$++){const pe=k.removed[$],le=T.indexOf(pe);le>=0&&(T[le]=null,b[le].disconnect(pe))}for(let $=0;$<k.added.length;$++){const pe=k.added[$];let le=T.indexOf(pe);if(le===-1){for(let Se=0;Se<b.length;Se++)if(Se>=T.length){T.push(pe),le=Se;break}else if(T[Se]===null){T[Se]=pe,le=Se;break}if(le===-1)break}const Pe=b[le];Pe&&Pe.connect(pe)}}const G=new D,Y=new D;function H(k,$,pe){G.setFromMatrixPosition($.matrixWorld),Y.setFromMatrixPosition(pe.matrixWorld);const le=G.distanceTo(Y),Pe=$.projectionMatrix.elements,Se=pe.projectionMatrix.elements,Ue=Pe[14]/(Pe[10]-1),Ye=Pe[14]/(Pe[10]+1),Ne=(Pe[9]+1)/Pe[5],w=(Pe[9]-1)/Pe[5],bt=(Pe[8]-1)/Pe[0],De=(Se[8]+1)/Se[0],Fe=Ue*bt,Ee=Ue*De,$e=le/(-bt+De),we=$e*-bt;if($.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(we),k.translateZ($e),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Pe[10]===-1)k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const E=Ue+$e,g=Ye+$e,I=Fe-we,q=Ee+(le-we),Z=Ne*Ye/g*E,W=w*Ye/g*E;k.projectionMatrix.makePerspective(I,q,Z,W,E,g),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function oe(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let $=k.near,pe=k.far;M.texture!==null&&(M.depthNear>0&&($=M.depthNear),M.depthFar>0&&(pe=M.depthFar)),m.near=F.near=A.near=$,m.far=F.far=A.far=pe,(S!==m.near||V!==m.far)&&(r.updateRenderState({depthNear:m.near,depthFar:m.far}),S=m.near,V=m.far);const le=k.parent,Pe=m.cameras;oe(m,le);for(let Se=0;Se<Pe.length;Se++)oe(Pe[Se],le);Pe.length===2?H(m,A,F):m.projectionMatrix.copy(A.projectionMatrix),ce(k,m,le)};function ce(k,$,pe){pe===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(pe.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ii*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(p===null&&_===null))return c},this.setFoveation=function(k){c=k,p!==null&&(p.fixedFoveation=k),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=k)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(m)};let me=null;function ze(k,$){if(h=$.getViewerPose(l||s),v=$,h!==null){const pe=h.views;_!==null&&(e.setRenderTargetFramebuffer(y,_.framebuffer),e.setRenderTarget(y));let le=!1;pe.length!==m.cameras.length&&(m.cameras.length=0,le=!0);for(let Se=0;Se<pe.length;Se++){const Ue=pe[Se];let Ye=null;if(_!==null)Ye=_.getViewport(Ue);else{const w=f.getViewSubImage(p,Ue);Ye=w.viewport,Se===0&&(e.setRenderTargetTextures(y,w.colorTexture,p.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(y))}let Ne=ee[Se];Ne===void 0&&(Ne=new Ct,Ne.layers.enable(Se),Ne.viewport=new it,ee[Se]=Ne),Ne.matrix.fromArray(Ue.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Ue.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Se===0&&(m.matrix.copy(Ne.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),le===!0&&m.cameras.push(Ne)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Se=f.getDepthInformation(pe[0]);Se&&Se.isValid&&Se.texture&&M.init(e,Se,r.renderState)}}for(let pe=0;pe<b.length;pe++){const le=T[pe],Pe=b[pe];le!==null&&Pe!==void 0&&Pe.update(le,$,l||s)}me&&me(k,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),v=null}const qe=new rc;qe.setAnimationLoop(ze),this.setAnimationLoop=function(k){me=k},this.dispose=function(){}}}const Rn=new sn,qp=new tt;function jp(i,e){function t(u,d){u.matrixAutoUpdate===!0&&u.updateMatrix(),d.value.copy(u.matrix)}function n(u,d){d.color.getRGB(u.fogColor.value,tc(i)),d.isFog?(u.fogNear.value=d.near,u.fogFar.value=d.far):d.isFogExp2&&(u.fogDensity.value=d.density)}function r(u,d,y,b,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(u,d):d.isMeshToonMaterial?(a(u,d),f(u,d)):d.isMeshPhongMaterial?(a(u,d),h(u,d)):d.isMeshStandardMaterial?(a(u,d),p(u,d),d.isMeshPhysicalMaterial&&_(u,d,T)):d.isMeshMatcapMaterial?(a(u,d),v(u,d)):d.isMeshDepthMaterial?a(u,d):d.isMeshDistanceMaterial?(a(u,d),M(u,d)):d.isMeshNormalMaterial?a(u,d):d.isLineBasicMaterial?(s(u,d),d.isLineDashedMaterial&&o(u,d)):d.isPointsMaterial?c(u,d,y,b):d.isSpriteMaterial?l(u,d):d.isShadowMaterial?(u.color.value.copy(d.color),u.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(u,d){u.opacity.value=d.opacity,d.color&&u.diffuse.value.copy(d.color),d.emissive&&u.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.bumpMap&&(u.bumpMap.value=d.bumpMap,t(d.bumpMap,u.bumpMapTransform),u.bumpScale.value=d.bumpScale,d.side===St&&(u.bumpScale.value*=-1)),d.normalMap&&(u.normalMap.value=d.normalMap,t(d.normalMap,u.normalMapTransform),u.normalScale.value.copy(d.normalScale),d.side===St&&u.normalScale.value.negate()),d.displacementMap&&(u.displacementMap.value=d.displacementMap,t(d.displacementMap,u.displacementMapTransform),u.displacementScale.value=d.displacementScale,u.displacementBias.value=d.displacementBias),d.emissiveMap&&(u.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,u.emissiveMapTransform)),d.specularMap&&(u.specularMap.value=d.specularMap,t(d.specularMap,u.specularMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);const y=e.get(d),b=y.envMap,T=y.envMapRotation;b&&(u.envMap.value=b,Rn.copy(T),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),u.envMapRotation.value.setFromMatrix4(qp.makeRotationFromEuler(Rn)),u.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=d.reflectivity,u.ior.value=d.ior,u.refractionRatio.value=d.refractionRatio),d.lightMap&&(u.lightMap.value=d.lightMap,u.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,u.lightMapTransform)),d.aoMap&&(u.aoMap.value=d.aoMap,u.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,u.aoMapTransform))}function s(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform))}function o(u,d){u.dashSize.value=d.dashSize,u.totalSize.value=d.dashSize+d.gapSize,u.scale.value=d.scale}function c(u,d,y,b){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.size.value=d.size*y,u.scale.value=b*.5,d.map&&(u.map.value=d.map,t(d.map,u.uvTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function l(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.rotation.value=d.rotation,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function h(u,d){u.specular.value.copy(d.specular),u.shininess.value=Math.max(d.shininess,1e-4)}function f(u,d){d.gradientMap&&(u.gradientMap.value=d.gradientMap)}function p(u,d){u.metalness.value=d.metalness,d.metalnessMap&&(u.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,u.metalnessMapTransform)),u.roughness.value=d.roughness,d.roughnessMap&&(u.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,u.roughnessMapTransform)),d.envMap&&(u.envMapIntensity.value=d.envMapIntensity)}function _(u,d,y){u.ior.value=d.ior,d.sheen>0&&(u.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),u.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(u.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,u.sheenColorMapTransform)),d.sheenRoughnessMap&&(u.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,u.sheenRoughnessMapTransform))),d.clearcoat>0&&(u.clearcoat.value=d.clearcoat,u.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(u.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,u.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(u.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===St&&u.clearcoatNormalScale.value.negate())),d.dispersion>0&&(u.dispersion.value=d.dispersion),d.iridescence>0&&(u.iridescence.value=d.iridescence,u.iridescenceIOR.value=d.iridescenceIOR,u.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(u.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,u.iridescenceMapTransform)),d.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),d.transmission>0&&(u.transmission.value=d.transmission,u.transmissionSamplerMap.value=y.texture,u.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(u.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,u.transmissionMapTransform)),u.thickness.value=d.thickness,d.thicknessMap&&(u.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=d.attenuationDistance,u.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(u.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(u.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=d.specularIntensity,u.specularColor.value.copy(d.specularColor),d.specularColorMap&&(u.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,u.specularColorMapTransform)),d.specularIntensityMap&&(u.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,u.specularIntensityMapTransform))}function v(u,d){d.matcap&&(u.matcap.value=d.matcap)}function M(u,d){const y=e.get(d).light;u.referencePosition.value.setFromMatrixPosition(y.matrixWorld),u.nearDistance.value=y.shadow.camera.near,u.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Xp(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const T=b.program;n.uniformBlockBinding(y,T)}function l(y,b){let T=r[y.id];T===void 0&&(v(y),T=h(y),r[y.id]=T,y.addEventListener("dispose",u));const O=b.program;n.updateUBOMapping(y,O);const P=e.render.frame;a[y.id]!==P&&(p(y),a[y.id]=P)}function h(y){const b=f();y.__bindingPointIndex=b;const T=i.createBuffer(),O=y.__size,P=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,O,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function f(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const b=r[y.id],T=y.uniforms,O=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let P=0,A=T.length;P<A;P++){const F=Array.isArray(T[P])?T[P]:[T[P]];for(let ee=0,m=F.length;ee<m;ee++){const S=F[ee];if(_(S,P,ee,O)===!0){const V=S.__offset,z=Array.isArray(S.value)?S.value:[S.value];let j=0;for(let K=0;K<z.length;K++){const G=z[K],Y=M(G);typeof G=="number"||typeof G=="boolean"?(S.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,V+j,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=0,S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=0,S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=0):(G.toArray(S.__data,j),j+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(y,b,T,O){const P=y.value,A=b+"_"+T;if(O[A]===void 0)return typeof P=="number"||typeof P=="boolean"?O[A]=P:O[A]=P.clone(),!0;{const F=O[A];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return O[A]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function v(y){const b=y.uniforms;let T=0;const O=16;for(let A=0,F=b.length;A<F;A++){const ee=Array.isArray(b[A])?b[A]:[b[A]];for(let m=0,S=ee.length;m<S;m++){const V=ee[m],z=Array.isArray(V.value)?V.value:[V.value];for(let j=0,K=z.length;j<K;j++){const G=z[j],Y=M(G),H=T%O,oe=H%Y.boundary,ce=H+oe;T+=oe,ce!==0&&O-ce<Y.storage&&(T+=O-ce),V.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=Y.storage}}}const P=T%O;return P>0&&(T+=O-P),y.__size=T,y.__cache={},this}function M(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function u(y){const b=y.target;b.removeEventListener("dispose",u);const T=s.indexOf(b.__bindingPointIndex);s.splice(T,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function d(){for(const y in r)i.deleteBuffer(r[y]);s=[],r={},a={}}return{bind:c,update:l,dispose:d}}class Yp{constructor(e={}){const{canvas:t=Il(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const _=new Uint32Array(4),v=new Int32Array(4);let M=null,u=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=xn,this.toneMappingExposure=1;const b=this;let T=!1,O=0,P=0,A=null,F=-1,ee=null;const m=new it,S=new it;let V=null;const z=new We(0);let j=0,K=t.width,G=t.height,Y=1,H=null,oe=null;const ce=new it(0,0,K,G),me=new it(0,0,K,G);let ze=!1;const qe=new ic;let k=!1,$=!1;const pe=new tt,le=new tt,Pe=new D,Se=new it,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Ne(){return A===null?Y:1}let w=n;function bt(x,C){return t.getContext(x,C)}try{const x={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ss}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",se,!1),w===null){const C="webgl2";if(w=bt(C,x),w===null)throw bt(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let De,Fe,Ee,$e,we,E,g,I,q,Z,W,ge,ne,he,Be,J,de,ye,Te,ue,Ie,Re,Ze,R;function ae(){De=new Ju(w),De.init(),Re=new Bp(w,De),Fe=new qu(w,De,e,Re),Ee=new Np(w),Fe.reverseDepthBuffer&&Ee.buffers.depth.setReversed(!0),$e=new tf(w),we=new Mp,E=new Fp(w,De,Ee,we,Fe,Re,$e),g=new Xu(b),I=new $u(b),q=new oh(w),Ze=new ku(w,q),Z=new Qu(w,q,$e,Ze),W=new rf(w,Z,q,$e),Te=new nf(w,Fe,E),J=new ju(we),ge=new xp(b,g,I,De,Fe,Ze,J),ne=new jp(b,we),he=new bp,Be=new Pp(De),ye=new Vu(b,g,I,Ee,W,p,c),de=new Ip(b,W,Fe),R=new Xp(w,$e,Fe,Ee),ue=new Wu(w,De,$e),Ie=new ef(w,De,$e),$e.programs=ge.programs,b.capabilities=Fe,b.extensions=De,b.properties=we,b.renderLists=he,b.shadowMap=de,b.state=Ee,b.info=$e}ae();const B=new Wp(b,w);this.xr=B,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=De.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=De.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(K,G,!1))},this.getSize=function(x){return x.set(K,G)},this.setSize=function(x,C,U=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=x,G=C,t.width=Math.floor(x*Y),t.height=Math.floor(C*Y),U===!0&&(t.style.width=x+"px",t.style.height=C+"px"),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(K*Y,G*Y).floor()},this.setDrawingBufferSize=function(x,C,U){K=x,G=C,Y=U,t.width=Math.floor(x*U),t.height=Math.floor(C*U),this.setViewport(0,0,x,C)},this.getCurrentViewport=function(x){return x.copy(m)},this.getViewport=function(x){return x.copy(ce)},this.setViewport=function(x,C,U,N){x.isVector4?ce.set(x.x,x.y,x.z,x.w):ce.set(x,C,U,N),Ee.viewport(m.copy(ce).multiplyScalar(Y).round())},this.getScissor=function(x){return x.copy(me)},this.setScissor=function(x,C,U,N){x.isVector4?me.set(x.x,x.y,x.z,x.w):me.set(x,C,U,N),Ee.scissor(S.copy(me).multiplyScalar(Y).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(x){Ee.setScissorTest(ze=x)},this.setOpaqueSort=function(x){H=x},this.setTransparentSort=function(x){oe=x},this.getClearColor=function(x){return x.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(x=!0,C=!0,U=!0){let N=0;if(x){let L=!1;if(A!==null){const Q=A.texture.format;L=Q===us||Q===ds||Q===hs}if(L){const Q=A.texture.type,re=Q===an||Q===Nn||Q===Di||Q===_i||Q===cs||Q===ls,fe=ye.getClearColor(),_e=ye.getClearAlpha(),Me=fe.r,be=fe.g,ve=fe.b;re?(_[0]=Me,_[1]=be,_[2]=ve,_[3]=_e,w.clearBufferuiv(w.COLOR,0,_)):(v[0]=Me,v[1]=be,v[2]=ve,v[3]=_e,w.clearBufferiv(w.COLOR,0,v))}else N|=w.COLOR_BUFFER_BIT}C&&(N|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),U&&(N|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",se,!1),he.dispose(),Be.dispose(),we.dispose(),g.dispose(),I.dispose(),W.dispose(),Ze.dispose(),R.dispose(),ge.dispose(),B.dispose(),B.removeEventListener("sessionstart",Ms),B.removeEventListener("sessionend",Ss),En.stop()};function X(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=$e.autoReset,C=de.enabled,U=de.autoUpdate,N=de.needsUpdate,L=de.type;ae(),$e.autoReset=x,de.enabled=C,de.autoUpdate=U,de.needsUpdate=N,de.type=L}function se(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Oe(x){const C=x.target;C.removeEventListener("dispose",Oe),rt(C)}function rt(x){vt(x),we.remove(x)}function vt(x){const C=we.get(x).programs;C!==void 0&&(C.forEach(function(U){ge.releaseProgram(U)}),x.isShaderMaterial&&ge.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,U,N,L,Q){C===null&&(C=Ue);const re=L.isMesh&&L.matrixWorld.determinant()<0,fe=yc(x,C,U,N,L);Ee.setMaterial(N,re);let _e=U.index,Me=1;if(N.wireframe===!0){if(_e=Z.getWireframeAttribute(U),_e===void 0)return;Me=2}const be=U.drawRange,ve=U.attributes.position;let je=be.start*Me,Je=(be.start+be.count)*Me;Q!==null&&(je=Math.max(je,Q.start*Me),Je=Math.min(Je,(Q.start+Q.count)*Me)),_e!==null?(je=Math.max(je,0),Je=Math.min(Je,_e.count)):ve!=null&&(je=Math.max(je,0),Je=Math.min(Je,ve.count));const et=Je-je;if(et<0||et===1/0)return;Ze.setup(L,N,fe,U,_e);let Et,Ge=ue;if(_e!==null&&(Et=q.get(_e),Ge=Ie,Ge.setIndex(Et)),L.isMesh)N.wireframe===!0?(Ee.setLineWidth(N.wireframeLinewidth*Ne()),Ge.setMode(w.LINES)):Ge.setMode(w.TRIANGLES);else if(L.isLine){let xe=N.linewidth;xe===void 0&&(xe=1),Ee.setLineWidth(xe*Ne()),L.isLineSegments?Ge.setMode(w.LINES):L.isLineLoop?Ge.setMode(w.LINE_LOOP):Ge.setMode(w.LINE_STRIP)}else L.isPoints?Ge.setMode(w.POINTS):L.isSprite&&Ge.setMode(w.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Ge.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Ge.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const xe=L._multiDrawStarts,ht=L._multiDrawCounts,Ve=L._multiDrawCount,Nt=_e?q.get(_e).bytesPerElement:1,zn=we.get(N).currentProgram.getUniforms();for(let yt=0;yt<Ve;yt++)zn.setValue(w,"_gl_DrawID",yt),Ge.render(xe[yt]/Nt,ht[yt])}else if(L.isInstancedMesh)Ge.renderInstances(je,et,L.count);else if(U.isInstancedBufferGeometry){const xe=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,ht=Math.min(U.instanceCount,xe);Ge.renderInstances(je,et,ht)}else Ge.render(je,et)};function He(x,C,U){x.transparent===!0&&x.side===en&&x.forceSinglePass===!1?(x.side=St,x.needsUpdate=!0,Gi(x,C,U),x.side=Mn,x.needsUpdate=!0,Gi(x,C,U),x.side=en):Gi(x,C,U)}this.compile=function(x,C,U=null){U===null&&(U=x),u=Be.get(U),u.init(C),y.push(u),U.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),x!==U&&x.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),u.setupLights();const N=new Set;return x.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Q=L.material;if(Q)if(Array.isArray(Q))for(let re=0;re<Q.length;re++){const fe=Q[re];He(fe,U,L),N.add(fe)}else He(Q,U,L),N.add(Q)}),y.pop(),u=null,N},this.compileAsync=function(x,C,U=null){const N=this.compile(x,C,U);return new Promise(L=>{function Q(){if(N.forEach(function(re){we.get(re).currentProgram.isReady()&&N.delete(re)}),N.size===0){L(x);return}setTimeout(Q,10)}De.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let xt=null;function Xt(x){xt&&xt(x)}function Ms(){En.stop()}function Ss(){En.start()}const En=new rc;En.setAnimationLoop(Xt),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(x){xt=x,B.setAnimationLoop(x),x===null?En.stop():En.start()},B.addEventListener("sessionstart",Ms),B.addEventListener("sessionend",Ss),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(C),C=B.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,C,A),u=Be.get(x,y.length),u.init(C),y.push(u),le.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),qe.setFromProjectionMatrix(le),$=this.localClippingEnabled,k=J.init(this.clippingPlanes,$),M=he.get(x,d.length),M.init(),d.push(M),B.enabled===!0&&B.isPresenting===!0){const Q=b.xr.getDepthSensingMesh();Q!==null&&Or(Q,C,-1/0,b.sortObjects)}Or(x,C,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(H,oe),Ye=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Ye&&ye.addToRenderList(M,x),this.info.render.frame++,k===!0&&J.beginShadows();const U=u.state.shadowsArray;de.render(U,x,C),k===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=M.opaque,L=M.transmissive;if(u.setupLights(),C.isArrayCamera){const Q=C.cameras;if(L.length>0)for(let re=0,fe=Q.length;re<fe;re++){const _e=Q[re];Es(N,L,x,_e)}Ye&&ye.render(x);for(let re=0,fe=Q.length;re<fe;re++){const _e=Q[re];bs(M,x,_e,_e.viewport)}}else L.length>0&&Es(N,L,x,C),Ye&&ye.render(x),bs(M,x,C);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(b,x,C),Ze.resetDefaultState(),F=-1,ee=null,y.pop(),y.length>0?(u=y[y.length-1],k===!0&&J.setGlobalState(b.clippingPlanes,u.state.camera)):u=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function Or(x,C,U,N){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)U=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||qe.intersectsSprite(x)){N&&Se.setFromMatrixPosition(x.matrixWorld).applyMatrix4(le);const re=W.update(x),fe=x.material;fe.visible&&M.push(x,re,fe,U,Se.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||qe.intersectsObject(x))){const re=W.update(x),fe=x.material;if(N&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Se.copy(x.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Se.copy(re.boundingSphere.center)),Se.applyMatrix4(x.matrixWorld).applyMatrix4(le)),Array.isArray(fe)){const _e=re.groups;for(let Me=0,be=_e.length;Me<be;Me++){const ve=_e[Me],je=fe[ve.materialIndex];je&&je.visible&&M.push(x,re,je,U,Se.z,ve)}}else fe.visible&&M.push(x,re,fe,U,Se.z,null)}}const Q=x.children;for(let re=0,fe=Q.length;re<fe;re++)Or(Q[re],C,U,N)}function bs(x,C,U,N){const L=x.opaque,Q=x.transmissive,re=x.transparent;u.setupLightsView(U),k===!0&&J.setGlobalState(b.clippingPlanes,U),N&&Ee.viewport(m.copy(N)),L.length>0&&Hi(L,C,U),Q.length>0&&Hi(Q,C,U),re.length>0&&Hi(re,C,U),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Es(x,C,U,N){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[N.id]===void 0&&(u.state.transmissionRenderTarget[N.id]=new On(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Fi:an,minFilter:Un,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace}));const Q=u.state.transmissionRenderTarget[N.id],re=N.viewport||m;Q.setSize(re.z,re.w);const fe=b.getRenderTarget();b.setRenderTarget(Q),b.getClearColor(z),j=b.getClearAlpha(),j<1&&b.setClearColor(16777215,.5),b.clear(),Ye&&ye.render(U);const _e=b.toneMapping;b.toneMapping=xn;const Me=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),u.setupLightsView(N),k===!0&&J.setGlobalState(b.clippingPlanes,N),Hi(x,U,N),E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q),De.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ve=0,je=C.length;ve<je;ve++){const Je=C[ve],et=Je.object,Et=Je.geometry,Ge=Je.material,xe=Je.group;if(Ge.side===en&&et.layers.test(N.layers)){const ht=Ge.side;Ge.side=St,Ge.needsUpdate=!0,ys(et,U,N,Et,Ge,xe),Ge.side=ht,Ge.needsUpdate=!0,be=!0}}be===!0&&(E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q))}b.setRenderTarget(fe),b.setClearColor(z,j),Me!==void 0&&(N.viewport=Me),b.toneMapping=_e}function Hi(x,C,U){const N=C.isScene===!0?C.overrideMaterial:null;for(let L=0,Q=x.length;L<Q;L++){const re=x[L],fe=re.object,_e=re.geometry,Me=N===null?re.material:N,be=re.group;fe.layers.test(U.layers)&&ys(fe,C,U,_e,Me,be)}}function ys(x,C,U,N,L,Q){x.onBeforeRender(b,C,U,N,L,Q),x.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(b,C,U,N,x,Q),L.transparent===!0&&L.side===en&&L.forceSinglePass===!1?(L.side=St,L.needsUpdate=!0,b.renderBufferDirect(U,C,N,L,x,Q),L.side=Mn,L.needsUpdate=!0,b.renderBufferDirect(U,C,N,L,x,Q),L.side=en):b.renderBufferDirect(U,C,N,L,x,Q),x.onAfterRender(b,C,U,N,L,Q)}function Gi(x,C,U){C.isScene!==!0&&(C=Ue);const N=we.get(x),L=u.state.lights,Q=u.state.shadowsArray,re=L.state.version,fe=ge.getParameters(x,L.state,Q,C,U),_e=ge.getProgramCacheKey(fe);let Me=N.programs;N.environment=x.isMeshStandardMaterial?C.environment:null,N.fog=C.fog,N.envMap=(x.isMeshStandardMaterial?I:g).get(x.envMap||N.environment),N.envMapRotation=N.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,Me===void 0&&(x.addEventListener("dispose",Oe),Me=new Map,N.programs=Me);let be=Me.get(_e);if(be!==void 0){if(N.currentProgram===be&&N.lightsStateVersion===re)return As(x,fe),be}else fe.uniforms=ge.getUniforms(x),x.onBeforeCompile(fe,b),be=ge.acquireProgram(fe,_e),Me.set(_e,be),N.uniforms=fe.uniforms;const ve=N.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ve.clippingPlanes=J.uniform),As(x,fe),N.needsLights=Ac(x),N.lightsStateVersion=re,N.needsLights&&(ve.ambientLightColor.value=L.state.ambient,ve.lightProbe.value=L.state.probe,ve.directionalLights.value=L.state.directional,ve.directionalLightShadows.value=L.state.directionalShadow,ve.spotLights.value=L.state.spot,ve.spotLightShadows.value=L.state.spotShadow,ve.rectAreaLights.value=L.state.rectArea,ve.ltc_1.value=L.state.rectAreaLTC1,ve.ltc_2.value=L.state.rectAreaLTC2,ve.pointLights.value=L.state.point,ve.pointLightShadows.value=L.state.pointShadow,ve.hemisphereLights.value=L.state.hemi,ve.directionalShadowMap.value=L.state.directionalShadowMap,ve.directionalShadowMatrix.value=L.state.directionalShadowMatrix,ve.spotShadowMap.value=L.state.spotShadowMap,ve.spotLightMatrix.value=L.state.spotLightMatrix,ve.spotLightMap.value=L.state.spotLightMap,ve.pointShadowMap.value=L.state.pointShadowMap,ve.pointShadowMatrix.value=L.state.pointShadowMatrix),N.currentProgram=be,N.uniformsList=null,be}function Ts(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=br.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function As(x,C){const U=we.get(x);U.outputColorSpace=C.outputColorSpace,U.batching=C.batching,U.batchingColor=C.batchingColor,U.instancing=C.instancing,U.instancingColor=C.instancingColor,U.instancingMorph=C.instancingMorph,U.skinning=C.skinning,U.morphTargets=C.morphTargets,U.morphNormals=C.morphNormals,U.morphColors=C.morphColors,U.morphTargetsCount=C.morphTargetsCount,U.numClippingPlanes=C.numClippingPlanes,U.numIntersection=C.numClipIntersection,U.vertexAlphas=C.vertexAlphas,U.vertexTangents=C.vertexTangents,U.toneMapping=C.toneMapping}function yc(x,C,U,N,L){C.isScene!==!0&&(C=Ue),E.resetTextureUnits();const Q=C.fog,re=N.isMeshStandardMaterial?C.environment:null,fe=A===null?b.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bn,_e=(N.isMeshStandardMaterial?I:g).get(N.envMap||re),Me=N.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,be=!!U.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),ve=!!U.morphAttributes.position,je=!!U.morphAttributes.normal,Je=!!U.morphAttributes.color;let et=xn;N.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(et=b.toneMapping);const Et=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ge=Et!==void 0?Et.length:0,xe=we.get(N),ht=u.state.lights;if(k===!0&&($===!0||x!==ee)){const Pt=x===ee&&N.id===F;J.setState(N,x,Pt)}let Ve=!1;N.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==ht.state.version||xe.outputColorSpace!==fe||L.isBatchedMesh&&xe.batching===!1||!L.isBatchedMesh&&xe.batching===!0||L.isBatchedMesh&&xe.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&xe.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&xe.instancing===!1||!L.isInstancedMesh&&xe.instancing===!0||L.isSkinnedMesh&&xe.skinning===!1||!L.isSkinnedMesh&&xe.skinning===!0||L.isInstancedMesh&&xe.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&xe.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&xe.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&xe.instancingMorph===!1&&L.morphTexture!==null||xe.envMap!==_e||N.fog===!0&&xe.fog!==Q||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==J.numPlanes||xe.numIntersection!==J.numIntersection)||xe.vertexAlphas!==Me||xe.vertexTangents!==be||xe.morphTargets!==ve||xe.morphNormals!==je||xe.morphColors!==Je||xe.toneMapping!==et||xe.morphTargetsCount!==Ge)&&(Ve=!0):(Ve=!0,xe.__version=N.version);let Nt=xe.currentProgram;Ve===!0&&(Nt=Gi(N,C,L));let zn=!1,yt=!1,Fr=!1;const nt=Nt.getUniforms(),on=xe.uniforms;if(Ee.useProgram(Nt.program)&&(zn=!0,yt=!0,Fr=!0),N.id!==F&&(F=N.id,yt=!0),zn||ee!==x){Fe.reverseDepthBuffer?(pe.copy(x.projectionMatrix),Nl(pe),Ol(pe),nt.setValue(w,"projectionMatrix",pe)):nt.setValue(w,"projectionMatrix",x.projectionMatrix),nt.setValue(w,"viewMatrix",x.matrixWorldInverse);const Pt=nt.map.cameraPosition;Pt!==void 0&&Pt.setValue(w,Pe.setFromMatrixPosition(x.matrixWorld)),Fe.logarithmicDepthBuffer&&nt.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&nt.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),ee!==x&&(ee=x,yt=!0,Fr=!0)}if(L.isSkinnedMesh){nt.setOptional(w,L,"bindMatrix"),nt.setOptional(w,L,"bindMatrixInverse");const Pt=L.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),nt.setValue(w,"boneTexture",Pt.boneTexture,E))}L.isBatchedMesh&&(nt.setOptional(w,L,"batchingTexture"),nt.setValue(w,"batchingTexture",L._matricesTexture,E),nt.setOptional(w,L,"batchingIdTexture"),nt.setValue(w,"batchingIdTexture",L._indirectTexture,E),nt.setOptional(w,L,"batchingColorTexture"),L._colorsTexture!==null&&nt.setValue(w,"batchingColorTexture",L._colorsTexture,E));const Br=U.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0)&&Te.update(L,U,Nt),(yt||xe.receiveShadow!==L.receiveShadow)&&(xe.receiveShadow=L.receiveShadow,nt.setValue(w,"receiveShadow",L.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(on.envMap.value=_e,on.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&C.environment!==null&&(on.envMapIntensity.value=C.environmentIntensity),yt&&(nt.setValue(w,"toneMappingExposure",b.toneMappingExposure),xe.needsLights&&Tc(on,Fr),Q&&N.fog===!0&&ne.refreshFogUniforms(on,Q),ne.refreshMaterialUniforms(on,N,Y,G,u.state.transmissionRenderTarget[x.id]),br.upload(w,Ts(xe),on,E)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(br.upload(w,Ts(xe),on,E),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&nt.setValue(w,"center",L.center),nt.setValue(w,"modelViewMatrix",L.modelViewMatrix),nt.setValue(w,"normalMatrix",L.normalMatrix),nt.setValue(w,"modelMatrix",L.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Pt=N.uniformsGroups;for(let zr=0,wc=Pt.length;zr<wc;zr++){const ws=Pt[zr];R.update(ws,Nt),R.bind(ws,Nt)}}return Nt}function Tc(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function Ac(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,C,U){we.get(x.texture).__webglTexture=C,we.get(x.depthTexture).__webglTexture=U;const N=we.get(x);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=U===void 0,N.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,C){const U=we.get(x);U.__webglFramebuffer=C,U.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,U=0){A=x,O=C,P=U;let N=!0,L=null,Q=!1,re=!1;if(x){const _e=we.get(x);if(_e.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(w.FRAMEBUFFER,null),N=!1;else if(_e.__webglFramebuffer===void 0)E.setupRenderTarget(x);else if(_e.__hasExternalTextures)E.rebindTextures(x,we.get(x.texture).__webglTexture,we.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const ve=x.depthTexture;if(_e.__boundDepthTexture!==ve){if(ve!==null&&we.has(ve)&&(x.width!==ve.image.width||x.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(x)}}const Me=x.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(re=!0);const be=we.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(be[C])?L=be[C][U]:L=be[C],Q=!0):x.samples>0&&E.useMultisampledRTT(x)===!1?L=we.get(x).__webglMultisampledFramebuffer:Array.isArray(be)?L=be[U]:L=be,m.copy(x.viewport),S.copy(x.scissor),V=x.scissorTest}else m.copy(ce).multiplyScalar(Y).floor(),S.copy(me).multiplyScalar(Y).floor(),V=ze;if(Ee.bindFramebuffer(w.FRAMEBUFFER,L)&&N&&Ee.drawBuffers(x,L),Ee.viewport(m),Ee.scissor(S),Ee.setScissorTest(V),Q){const _e=we.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+C,_e.__webglTexture,U)}else if(re){const _e=we.get(x.texture),Me=C||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,_e.__webglTexture,U||0,Me)}F=-1},this.readRenderTargetPixels=function(x,C,U,N,L,Q,re){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=we.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){Ee.bindFramebuffer(w.FRAMEBUFFER,fe);try{const _e=x.texture,Me=_e.format,be=_e.type;if(!Fe.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-N&&U>=0&&U<=x.height-L&&w.readPixels(C,U,N,L,Re.convert(Me),Re.convert(be),Q)}finally{const _e=A!==null?we.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(w.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(x,C,U,N,L,Q,re){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=we.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){const _e=x.texture,Me=_e.format,be=_e.type;if(!Fe.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=x.width-N&&U>=0&&U<=x.height-L){Ee.bindFramebuffer(w.FRAMEBUFFER,fe);const ve=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ve),w.bufferData(w.PIXEL_PACK_BUFFER,Q.byteLength,w.STREAM_READ),w.readPixels(C,U,N,L,Re.convert(Me),Re.convert(be),0);const je=A!==null?we.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(w.FRAMEBUFFER,je);const Je=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Ul(w,Je,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ve),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Q),w.deleteBuffer(ve),w.deleteSync(Je),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,C=null,U=0){x.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,x=arguments[1]);const N=Math.pow(2,-U),L=Math.floor(x.image.width*N),Q=Math.floor(x.image.height*N),re=C!==null?C.x:0,fe=C!==null?C.y:0;E.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,U,0,0,re,fe,L,Q),Ee.unbindTexture()},this.copyTextureToTexture=function(x,C,U=null,N=null,L=0){x.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,x=arguments[1],C=arguments[2],L=arguments[3]||0,U=null);let Q,re,fe,_e,Me,be;U!==null?(Q=U.max.x-U.min.x,re=U.max.y-U.min.y,fe=U.min.x,_e=U.min.y):(Q=x.image.width,re=x.image.height,fe=0,_e=0),N!==null?(Me=N.x,be=N.y):(Me=0,be=0);const ve=Re.convert(C.format),je=Re.convert(C.type);E.setTexture2D(C,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,C.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,C.unpackAlignment);const Je=w.getParameter(w.UNPACK_ROW_LENGTH),et=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Et=w.getParameter(w.UNPACK_SKIP_PIXELS),Ge=w.getParameter(w.UNPACK_SKIP_ROWS),xe=w.getParameter(w.UNPACK_SKIP_IMAGES),ht=x.isCompressedTexture?x.mipmaps[L]:x.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,ht.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ht.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,fe),w.pixelStorei(w.UNPACK_SKIP_ROWS,_e),x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,L,Me,be,Q,re,ve,je,ht.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,L,Me,be,ht.width,ht.height,ve,ht.data):w.texSubImage2D(w.TEXTURE_2D,L,Me,be,Q,re,ve,je,ht),w.pixelStorei(w.UNPACK_ROW_LENGTH,Je),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,et),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Et),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ge),w.pixelStorei(w.UNPACK_SKIP_IMAGES,xe),L===0&&C.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(x,C,U=null,N=null,L=0){x.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,N=arguments[1]||null,x=arguments[2],C=arguments[3],L=arguments[4]||0);let Q,re,fe,_e,Me,be,ve,je,Je;const et=x.isCompressedTexture?x.mipmaps[L]:x.image;U!==null?(Q=U.max.x-U.min.x,re=U.max.y-U.min.y,fe=U.max.z-U.min.z,_e=U.min.x,Me=U.min.y,be=U.min.z):(Q=et.width,re=et.height,fe=et.depth,_e=0,Me=0,be=0),N!==null?(ve=N.x,je=N.y,Je=N.z):(ve=0,je=0,Je=0);const Et=Re.convert(C.format),Ge=Re.convert(C.type);let xe;if(C.isData3DTexture)E.setTexture3D(C,0),xe=w.TEXTURE_3D;else if(C.isDataArrayTexture||C.isCompressedArrayTexture)E.setTexture2DArray(C,0),xe=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,C.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,C.unpackAlignment);const ht=w.getParameter(w.UNPACK_ROW_LENGTH),Ve=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Nt=w.getParameter(w.UNPACK_SKIP_PIXELS),zn=w.getParameter(w.UNPACK_SKIP_ROWS),yt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,et.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,et.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,_e),w.pixelStorei(w.UNPACK_SKIP_ROWS,Me),w.pixelStorei(w.UNPACK_SKIP_IMAGES,be),x.isDataTexture||x.isData3DTexture?w.texSubImage3D(xe,L,ve,je,Je,Q,re,fe,Et,Ge,et.data):C.isCompressedArrayTexture?w.compressedTexSubImage3D(xe,L,ve,je,Je,Q,re,fe,Et,et.data):w.texSubImage3D(xe,L,ve,je,Je,Q,re,fe,Et,Ge,et),w.pixelStorei(w.UNPACK_ROW_LENGTH,ht),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ve),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Nt),w.pixelStorei(w.UNPACK_SKIP_ROWS,zn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,yt),L===0&&C.generateMipmaps&&w.generateMipmap(xe),Ee.unbindTexture()},this.initRenderTarget=function(x){we.get(x).__webglFramebuffer===void 0&&E.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),Ee.unbindTexture()},this.resetState=function(){O=0,P=0,A=null,Ee.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fs?"display-p3":"srgb",t.unpackColorSpace=ke.workingColorSpace===Lr?"display-p3":"srgb"}}class Kp extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=is,this.updateRanges=[],this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _t=new D;class wr{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array),a=Xe(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hc extends vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ei;const Ti=new D,ti=new D,ni=new D,ii=new Ae,Ai=new Ae,dc=new tt,hr=new D,wi=new D,dr=new D,Eo=new Ae,_a=new Ae,yo=new Ae;class $p extends gt{constructor(e=new hc){if(super(),this.isSprite=!0,this.type="Sprite",ei===void 0){ei=new Wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zp(t,5);ei.setIndex([0,1,2,0,2,3]),ei.setAttribute("position",new wr(n,3,0,!1)),ei.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=ei,this.material=e,this.center=new Ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ti.setFromMatrixScale(this.matrixWorld),dc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ni.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ti.multiplyScalar(-ni.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const s=this.center;ur(hr.set(-.5,-.5,0),ni,s,ti,r,a),ur(wi.set(.5,-.5,0),ni,s,ti,r,a),ur(dr.set(.5,.5,0),ni,s,ti,r,a),Eo.set(0,0),_a.set(1,0),yo.set(1,1);let o=e.ray.intersectTriangle(hr,wi,dr,!1,Ti);if(o===null&&(ur(wi.set(-.5,.5,0),ni,s,ti,r,a),_a.set(0,1),o=e.ray.intersectTriangle(hr,dr,wi,!1,Ti),o===null))return;const c=e.ray.origin.distanceTo(Ti);c<e.near||c>e.far||t.push({distance:c,point:Ti.clone(),uv:Lt.getInterpolation(Ti,hr,wi,dr,Eo,_a,yo,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ur(i,e,t,n,r,a){ii.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ai.x=a*ii.x-r*ii.y,Ai.y=r*ii.x+a*ii.y):Ai.copy(ii),i.copy(e),i.x+=Ai.x,i.y+=Ai.y,i.applyMatrix4(dc)}class uc extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pr=new D,Rr=new D,To=new tt,Pi=new _s,fr=new Dr,ma=new D,Ao=new D;class Jp extends gt{constructor(e=new Wt,t=new uc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Pr.fromBufferAttribute(t,r-1),Rr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Pr.distanceTo(Rr);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),fr.radius+=a,e.ray.intersectsSphere(fr)===!1)return;To.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(To);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const _=Math.max(0,s.start),v=Math.min(h.count,s.start+s.count);for(let M=_,u=v-1;M<u;M+=l){const d=h.getX(M),y=h.getX(M+1),b=pr(this,e,Pi,c,d,y);b&&t.push(b)}if(this.isLineLoop){const M=h.getX(v-1),u=h.getX(_),d=pr(this,e,Pi,c,M,u);d&&t.push(d)}}else{const _=Math.max(0,s.start),v=Math.min(p.count,s.start+s.count);for(let M=_,u=v-1;M<u;M+=l){const d=pr(this,e,Pi,c,M,M+1);d&&t.push(d)}if(this.isLineLoop){const M=pr(this,e,Pi,c,v-1,_);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function pr(i,e,t,n,r,a){const s=i.geometry.attributes.position;if(Pr.fromBufferAttribute(s,r),Rr.fromBufferAttribute(s,a),t.distanceSqToSegment(Pr,Rr,ma,Ao)>n)return;ma.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ma);if(!(c<e.near||c>e.far))return{distance:c,point:Ao.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const wo=new D,Po=new D;class Qp extends Jp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)wo.fromBufferAttribute(t,r),Po.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+wo.distanceTo(Po);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oi extends Wt{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let l=0;const h=[],f=new D,p=new D,_=[],v=[],M=[],u=[];for(let d=0;d<=n;d++){const y=[],b=d/n;let T=0;d===0&&s===0?T=.5/t:d===n&&c===Math.PI&&(T=-.5/t);for(let O=0;O<=t;O++){const P=O/t;f.x=-e*Math.cos(r+P*a)*Math.sin(s+b*o),f.y=e*Math.cos(s+b*o),f.z=e*Math.sin(r+P*a)*Math.sin(s+b*o),v.push(f.x,f.y,f.z),p.copy(f).normalize(),M.push(p.x,p.y,p.z),u.push(P+T,1-b),y.push(l++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){const b=h[d][y+1],T=h[d][y],O=h[d+1][y],P=h[d+1][y+1];(d!==0||s>0)&&_.push(b,T,P),(d!==n-1||c<Math.PI)&&_.push(T,O,P)}this.setIndex(_),this.setAttribute("position",new Ut(v,3)),this.setAttribute("normal",new Ut(M,3)),this.setAttribute("uv",new Ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class e_ extends uc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Ro={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class t_{constructor(e,t,n){const r=this;let a=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=l.length;f<p;f+=2){const _=l[f],v=l[f+1];if(_.global&&(_.lastIndex=0),_.test(h))return v}return null}}}const n_=new t_;class Nr{constructor(e){this.manager=e!==void 0?e:n_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Nr.DEFAULT_MATERIAL_NAME="__DEFAULT";class fc extends Nr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Ro.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Ui("img");function c(){h(),Ro.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(f){h(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class i_ extends Nr{constructor(e){super(e)}load(e,t,n,r){const a=new ms;a.colorSpace=zt;const s=new fc(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function c(l){s.load(e[l],function(h){a.images[l]=h,o++,o===6&&(a.needsUpdate=!0,t&&t(a))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return a}}class r_ extends Nr{constructor(e){super(e)}load(e,t,n,r){const a=new pt,s=new fc(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Co{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class a_ extends Bn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ss}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ss);const Lo={type:"change"},vs={type:"start"},pc={type:"end"},_r=new _s,Do=new _n,s_=Math.cos(70*Dl.DEG2RAD),st=new D,Mt=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ga=1e-6;class o_ extends a_{constructor(e,t=null){super(e,t),this.state=Ke.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Fn,this._lastTargetPosition=new D,this._quat=new Fn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Co,this._sphericalDelta=new Co,this._scale=1,this._panOffset=new D,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new D,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=l_.bind(this),this._onPointerDown=c_.bind(this),this._onPointerUp=h_.bind(this),this._onContextMenu=g_.bind(this),this._onMouseWheel=f_.bind(this),this._onKeyDown=p_.bind(this),this._onTouchStart=__.bind(this),this._onTouchMove=m_.bind(this),this._onMouseDown=d_.bind(this),this._onMouseMove=u_.bind(this),this._interceptControlDown=v_.bind(this),this._interceptControlUp=x_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lo),this.update(),this.state=Ke.NONE}update(e=null){const t=this.object.position;st.copy(t).sub(this.target),st.applyQuaternion(this._quat),this._spherical.setFromVector3(st),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Mt:n>Math.PI&&(n-=Mt),r<-Math.PI?r+=Mt:r>Math.PI&&(r-=Mt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(st.setFromSpherical(this._spherical),st.applyQuaternion(this._quatInverse),t.copy(this.target).add(st),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=st.length();s=this._clampDistance(o*this._scale);const c=o-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),s=st.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(_r.origin.copy(this.object.position),_r.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_r.direction))<s_?this.object.lookAt(this.target):(Do.setFromNormalAndCoplanarPoint(this.object.up,this.target),_r.intersectPlane(Do,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>ga||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ga||this._lastTargetPosition.distanceToSquared(this.target)>ga?(this.dispatchEvent(Lo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mt/60*this.autoRotateSpeed*e:Mt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){st.setFromMatrixColumn(t,0),st.multiplyScalar(-e),this._panOffset.add(st)}_panUp(e,t){this.screenSpacePanning===!0?st.setFromMatrixColumn(t,1):(st.setFromMatrixColumn(t,0),st.crossVectors(this.object.up,st)),st.multiplyScalar(e),this._panOffset.add(st)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;st.copy(r).sub(this.target);let a=st.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,s=n.width,o=n.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Mt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Mt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Mt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Mt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Mt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Mt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function c_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function l_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function h_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pc),this.state=Ke.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function d_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ke.DOLLY;break;case oi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ke.ROTATE}break;case oi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(vs)}function u_(i){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function f_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(i.preventDefault(),this.dispatchEvent(vs),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pc))}function p_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function __(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ke.TOUCH_ROTATE;break;case ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ke.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(vs)}function m_(i){switch(this._trackPointer(i),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ke.NONE}}function g_(i){this.enabled!==!1&&i.preventDefault()}function v_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _c=(i=new Date)=>{const e=i.getTime(),t=i.getTimezoneOffset();return e/864e5-t/1440+24405875e-1};function mc(i,e){const t={Mercury:{m0:174.7948,m1:4.09233445},Venus:{m0:50.4161,m1:1.60213034},Earth:{m0:357.5291,m1:.98560028},Mars:{m0:19.373,m1:.52402068},Jupiter:{m0:20.0202,m1:.08308529},Saturn:{m0:317.0207,m1:.03344414},Uranus:{m0:141.0498,m1:.01172834},Neptune:{m0:256.225,m1:.00598103},Pluto:{m0:14.882,m1:.00396}};if(!t[e])throw new Error("Invalid planet name");const{m0:n,m1:r}=t[e],a=(n+r*(i-2451545))%360;return a<0?a+360:a}function gc(i,e){const t={Mercury:{c1:23.44,c2:2.9818,c3:.5255,c4:.1058,c5:.0241,c6:.0055},Venus:{c1:.7758,c2:.0033,c3:0,c4:0,c5:0,c6:0},Earth:{c1:1.9148,c2:.02,c3:3e-4,c4:0,c5:0,c6:0},Mars:{c1:10.6912,c2:.6228,c3:.0503,c4:.0046,c5:5e-4,c6:1e-4},Jupiter:{c1:5.5549,c2:.1683,c3:.0071,c4:3e-4,c5:0,c6:1e-4},Saturn:{c1:6.3585,c2:.2204,c3:.0106,c4:6e-4,c5:0,c6:1e-4},Uranus:{c1:5.3042,c2:.1534,c3:.0062,c4:3e-4,c5:0,c6:1e-4},Neptune:{c1:1.0302,c2:.0058,c3:0,c4:0,c5:0,c6:1e-4},Pluto:{c1:28.315,c2:4.3408,c3:.9214,c4:.2235,c5:.0627,c6:.0174}};if(!t[e])throw new Error("Invalid planet name");const{c1:n,c2:r,c3:a,c4:s,c5:o,c6:c}=t[e],l=i*(Math.PI/180);return n*Math.sin(l)+r*Math.sin(2*l)+a*Math.sin(3*l)+s*Math.sin(4*l)+o*Math.sin(5*l)+c*Math.sin(6*l)}function vc(i,e){return(i+e)%360}const as={Mercury:{a:.3871,e:.20563,i:7.005,om:29.125,omega:48.331,M0:174.795},Venus:{a:.72333,e:.00677,i:3.395,om:54.884,omega:76.68,M0:50.416},Earth:{a:1,e:.01671,i:0,om:288.064,omega:174.873,M0:357.529},Mars:{a:1.52368,e:.0934,i:1.85,om:286.502,omega:49.558,M0:19.373},Jupiter:{a:5.2026,e:.04849,i:1.303,om:273.867,omega:100.464,M0:20.02},Saturn:{a:9.55491,e:.05551,i:2.489,om:339.391,omega:113.666,M0:317.021},Uranus:{a:19.21845,e:.0463,i:.773,om:98.999,omega:74.006,M0:141.05},Neptune:{a:30.11039,e:.00899,i:1.77,om:276.34,omega:131.784,M0:256.225},Pluto:{a:39.543,e:.249,i:17.14,om:113.768,omega:110.307,M0:14.882}};function xc(i,e){const t={Mercury:{n:4.092317,deno:.37073,ii:77.456},Venus:{n:1.602136,deno:.7233,ii:131.564},Earth:{n:.985608,deno:.99972,ii:102.937},Mars:{n:.524039,deno:1.51039,ii:336.06},Jupiter:{n:.083056,deno:5.19037,ii:14.331},Saturn:{n:.033371,deno:9.52547,ii:93.057},Uranus:{n:.011698,deno:19.17725,ii:173.005},Neptune:{n:.005965,deno:30.10796,ii:48.124},Pluto:{n:.003964,deno:37.09129,ii:224.075}};if(!t[e])throw new Error("Invalid planet name");const{n,deno:r,ii:a}=t[e],s=i*(Math.PI/180);return r/(1+as[e].e*Math.cos(s))}function Mc(i,e,t){if(!as[e])throw new Error("Invalid planet name");const{a:n,e:r,i:a,om:s,omega:o,M0:c}=as[e],l=s*(Math.PI/180),h=o*(Math.PI/180),f=i*(Math.PI/180),p=a*(Math.PI/180),_=t*(Math.cos(h)*Math.cos(l+f)-Math.sin(h)*Math.cos(p)*Math.sin(l+f)),v=t*(Math.sin(h)*Math.cos(l+f)+Math.cos(h)*Math.cos(p)*Math.sin(l+f)),M=t*Math.sin(p)*Math.sin(l+f);return[_,v,M]}const M_=`[
  {
    "object": "P/2004 R1 (McNaught)",
    "epoch_tdb": "54629",
    "tp_tdb": "2455248.548",
    "e": "0.682526943",
    "i_deg": "4.894555854",
    "w_deg": "0.626837835",
    "node_deg": "295.9854497",
    "q_au_1": "0.986192006",
    "q_au_2": "5.23",
    "p_yr": "5.48",
    "moid_au": "0.027011",
    "ref": "20",
    "object_name": "P/2004 R1 (McNaught)"
  },
  {
    "object": "P/2008 S1 (Catalina-McNaught)",
    "epoch_tdb": "55101",
    "tp_tdb": "2454741.329",
    "e": "0.6663127807",
    "i_deg": "15.1007464",
    "w_deg": "203.6490232",
    "node_deg": "111.3920029",
    "q_au_1": "1.190641555",
    "q_au_2": "5.95",
    "p_yr": "6.74",
    "moid_au": "0.194101",
    "ref": "13",
    "object_name": "P/2008 S1 (Catalina-McNaught)"
  },
  {
    "object": "1P/Halley",
    "epoch_tdb": "49400",
    "tp_tdb": "2446467.395",
    "e": "0.9671429085",
    "i_deg": "162.2626906",
    "w_deg": "111.3324851",
    "node_deg": "58.42008098",
    "q_au_1": "0.5859781115",
    "q_au_2": "35.08",
    "p_yr": "75.32",
    "moid_au": "0.063782",
    "a1_au_d_2": "0.000000000270",
    "a2_au_d_2": "0.000000000155",
    "ref": "J863/77",
    "object_name": "1P/Halley"
  },
  {
    "object": "2P/Encke",
    "epoch_tdb": "56870",
    "tp_tdb": "2456618.204",
    "e": "0.8482682514",
    "i_deg": "11.77999525",
    "w_deg": "186.5403463",
    "node_deg": "334.5698056",
    "q_au_1": "0.3360923855",
    "q_au_2": "4.09",
    "p_yr": "3.3",
    "moid_au": "0.173092",
    "a1_au_d_2": "0.000000000158",
    "a2_au_d_2": "-0.00000000000505",
    "ref": "74",
    "object_name": "2P/Encke"
  },
  {
    "object": "3D/Biela",
    "epoch_tdb": "-9480",
    "tp_tdb": "2390514.115",
    "e": "0.751299",
    "i_deg": "13.2164",
    "w_deg": "221.6588",
    "node_deg": "250.669",
    "q_au_1": "0.879073",
    "q_au_2": "6.19",
    "p_yr": "6.65",
    "moid_au": "0.000518",
    "a1_au_d_2": "0.00000000390",
    "a2_au_d_2": "-0.000000000254",
    "ref": "IAUCAT03",
    "object_name": "3D/Biela"
  },
  {
    "object": "5D/Brorsen",
    "epoch_tdb": "7440",
    "tp_tdb": "2407439.534",
    "e": "0.809796",
    "i_deg": "29.3821",
    "w_deg": "14.9468",
    "node_deg": "102.9676",
    "q_au_1": "0.589847",
    "q_au_2": "5.61",
    "p_yr": "5.46",
    "moid_au": "0.366559",
    "a1_au_d_2": "0.0000000127",
    "a2_au_d_2": "0.00000000134",
    "ref": "IAUCAT03",
    "object_name": "5D/Brorsen"
  },
  {
    "object": "7P/Pons-Winnecke",
    "epoch_tdb": "56981",
    "tp_tdb": "2457053.028",
    "e": "0.6375275046",
    "i_deg": "22.33501476",
    "w_deg": "172.5061606",
    "node_deg": "93.41632728",
    "q_au_1": "1.239214834",
    "q_au_2": "5.6",
    "p_yr": "6.32",
    "moid_au": "0.224191",
    "a1_au_d_2": "0.0000000000786",
    "a2_au_d_2": "-0.0000000000115",
    "a3_au_d_2": "-0.000000000153",
    "dt_d": "131",
    "ref": "K088/14",
    "object_name": "7P/Pons-Winnecke"
  },
  {
    "object": "8P/Tuttle",
    "epoch_tdb": "54374",
    "tp_tdb": "2454492.526",
    "e": "0.819799747",
    "i_deg": "54.98318484",
    "w_deg": "207.509246",
    "node_deg": "270.341652",
    "q_au_1": "1.027116587",
    "q_au_2": "10.37",
    "p_yr": "13.61",
    "moid_au": "0.09531",
    "a1_au_d_2": "0.000000000689",
    "a2_au_d_2": "0.000000000137",
    "a3_au_d_2": "-0.000000000459",
    "ref": "K074/27",
    "object_name": "8P/Tuttle"
  },
  {
    "object": "12P/Pons-Brooks",
    "epoch_tdb": "35000",
    "tp_tdb": "2434885.381",
    "e": "0.9548123942",
    "i_deg": "74.17689423",
    "w_deg": "199.0284686",
    "node_deg": "255.8911444",
    "q_au_1": "0.7736670873",
    "q_au_2": "33.47",
    "p_yr": "70.85",
    "moid_au": "0.1873",
    "a1_au_d_2": "-0.00000000102",
    "a2_au_d_2": "-0.000000000271",
    "ref": "15",
    "object_name": "12P/Pons-Brooks"
  },
  {
    "object": "13P/Olbers",
    "epoch_tdb": "35760",
    "tp_tdb": "2435643.635",
    "e": "0.9302971475",
    "i_deg": "44.60988573",
    "w_deg": "64.64120652",
    "node_deg": "86.10312835",
    "q_au_1": "1.178450614",
    "q_au_2": "32.64",
    "p_yr": "69.52",
    "moid_au": "0.477199",
    "a1_au_d_2": "0.00000000945",
    "a2_au_d_2": "0.000000000649",
    "ref": "10",
    "object_name": "13P/Olbers"
  },
  {
    "object": "15P/Finlay",
    "epoch_tdb": "57003",
    "tp_tdb": "2457018.557",
    "e": "0.7201837656",
    "i_deg": "6.798912616",
    "w_deg": "347.5528394",
    "node_deg": "13.7781465",
    "q_au_1": "0.9759007725",
    "q_au_2": "6",
    "p_yr": "6.51",
    "moid_au": "0.009433",
    "a1_au_d_2": "0.00000000408",
    "a2_au_d_2": "0.0000000000665",
    "ref": "K085/14",
    "object_name": "15P/Finlay"
  },
  {
    "object": "18D/Perrine-Mrkos",
    "epoch_tdb": "40240",
    "tp_tdb": "2440162.042",
    "e": "0.6425809824",
    "i_deg": "17.75898277",
    "w_deg": "166.0504171",
    "node_deg": "240.8755466",
    "q_au_1": "1.272248081",
    "q_au_2": "5.85",
    "p_yr": "6.72",
    "moid_au": "0.28923",
    "ref": "J682/18",
    "object_name": "18D/Perrine-Mrkos"
  },
  {
    "object": "20D/Westphal",
    "epoch_tdb": "20080",
    "tp_tdb": "2420098.29",
    "e": "0.919831189",
    "i_deg": "40.89006106",
    "w_deg": "57.08095497",
    "node_deg": "348.0064469",
    "q_au_1": "1.254012762",
    "q_au_2": "30.03",
    "p_yr": "61.87",
    "moid_au": "0.468283",
    "ref": "19",
    "object_name": "20D/Westphal"
  },
  {
    "object": "21P/Giacobini-Zinner",
    "epoch_tdb": "56498",
    "tp_tdb": "2455969.126",
    "e": "0.7068178874",
    "i_deg": "31.90810099",
    "w_deg": "172.5844249",
    "node_deg": "195.3970145",
    "q_au_1": "1.030696274",
    "q_au_2": "6",
    "p_yr": "6.59",
    "moid_au": "0.035395",
    "a1_au_d_2": "0.00000000335",
    "a2_au_d_2": "-0.000000000429",
    "a3_au_d_2": "-0.000000000957",
    "dt_d": "-32.8",
    "ref": "K123/6",
    "object_name": "21P/Giacobini-Zinner"
  },
  {
    "object": "23P/Brorsen-Metcalf",
    "epoch_tdb": "47800",
    "tp_tdb": "2447781.437",
    "e": "0.9719522579",
    "i_deg": "19.33394047",
    "w_deg": "129.6106837",
    "node_deg": "311.5854622",
    "q_au_1": "0.4787527107",
    "q_au_2": "33.66",
    "p_yr": "70.52",
    "moid_au": "0.193872",
    "a1_au_d_2": "0.00000000225",
    "a2_au_d_2": "-0.000000000533",
    "ref": "13",
    "object_name": "23P/Brorsen-Metcalf"
  },
  {
    "object": "24P/Schaumasse",
    "epoch_tdb": "52120",
    "tp_tdb": "2452032.161",
    "e": "0.7048003557",
    "i_deg": "11.75152976",
    "w_deg": "57.87449255",
    "node_deg": "79.8310383",
    "q_au_1": "1.205010042",
    "q_au_2": "6.96",
    "p_yr": "8.25",
    "moid_au": "0.28218",
    "a1_au_d_2": "0.00000000110",
    "a2_au_d_2": "-0.000000000586",
    "ref": "K014/19",
    "object_name": "24P/Schaumasse"
  },
  {
    "object": "26P/Grigg-Skjellerup",
    "epoch_tdb": "56978",
    "tp_tdb": "2456479.559",
    "e": "0.6402771379",
    "i_deg": "22.42889388",
    "w_deg": "2.146692288",
    "node_deg": "211.5375548",
    "q_au_1": "1.085247781",
    "q_au_2": "4.95",
    "p_yr": "5.24",
    "moid_au": "0.079476",
    "a1_au_d_2": "0.000000000113",
    "a2_au_d_2": "-0.0000000000105",
    "ref": "K139/6",
    "object_name": "26P/Grigg-Skjellerup"
  },
  {
    "object": "27P/Crommelin",
    "epoch_tdb": "56364",
    "tp_tdb": "2455777.391",
    "e": "0.9189810923",
    "i_deg": "28.96687279",
    "w_deg": "196.0253969",
    "node_deg": "250.6264098",
    "q_au_1": "0.7482874671",
    "q_au_2": "17.72",
    "p_yr": "28.07",
    "moid_au": "0.215189",
    "a1_au_d_2": "-0.0000000365",
    "a2_au_d_2": "-0.00000000171",
    "a3_au_d_2": "0.00000000208",
    "ref": "K113/4",
    "object_name": "27P/Crommelin"
  },
  {
    "object": "41P/Tuttle-Giacobini-Kresak",
    "epoch_tdb": "53821",
    "tp_tdb": "2453898.291",
    "e": "0.6604126649",
    "i_deg": "9.228028049",
    "w_deg": "62.19321856",
    "node_deg": "141.0929309",
    "q_au_1": "1.047777635",
    "q_au_2": "5.12",
    "p_yr": "5.42",
    "moid_au": "0.135384",
    "a1_au_d_2": "0.0000000135",
    "a2_au_d_2": "0.00000000331",
    "ref": "K064/9",
    "object_name": "41P/Tuttle-Giacobini-Kresak"
  },
  {
    "object": "45P/Honda-Mrkos-Pajdusakova",
    "epoch_tdb": "56060",
    "tp_tdb": "2455833.282",
    "e": "0.8246720759",
    "i_deg": "4.252433261",
    "w_deg": "326.2580404",
    "node_deg": "89.0021809",
    "q_au_1": "0.5297614214",
    "q_au_2": "5.51",
    "p_yr": "5.25",
    "moid_au": "0.060071",
    "a1_au_d_2": "0.00000000388",
    "a2_au_d_2": "0.000000000433",
    "ref": "K112/2",
    "object_name": "45P/Honda-Mrkos-Pajdusakova"
  },
  {
    "object": "46P/Wirtanen",
    "epoch_tdb": "56799",
    "tp_tdb": "2456482.869",
    "e": "0.6592025614",
    "i_deg": "11.75713931",
    "w_deg": "356.3402053",
    "node_deg": "82.16439077",
    "q_au_1": "1.052262085",
    "q_au_2": "5.12",
    "p_yr": "5.43",
    "moid_au": "0.068212",
    "a1_au_d_2": "0.00000000282",
    "a2_au_d_2": "-0.00000000136",
    "a3_au_d_2": "0.000000000665",
    "dt_d": "-3.73",
    "ref": "K073/17",
    "object_name": "46P/Wirtanen"
  },
  {
    "object": "55P/Tempel-Tuttle",
    "epoch_tdb": "51040",
    "tp_tdb": "2450872.598",
    "e": "0.905552721",
    "i_deg": "162.4865754",
    "w_deg": "172.5002737",
    "node_deg": "235.2709891",
    "q_au_1": "0.9764279155",
    "q_au_2": "19.7",
    "p_yr": "33.24",
    "moid_au": "0.008481",
    "a1_au_d_2": "0.00000000158",
    "a2_au_d_2": "0.0000000000919",
    "ref": "J985/69",
    "object_name": "55P/Tempel-Tuttle"
  },
  {
    "object": "66P/du Toit",
    "epoch_tdb": "52920",
    "tp_tdb": "2452879.492",
    "e": "0.7877014869",
    "i_deg": "18.70073632",
    "w_deg": "257.2497193",
    "node_deg": "22.21536497",
    "q_au_1": "1.274266775",
    "q_au_2": "10.73",
    "p_yr": "14.71",
    "moid_au": "0.430358",
    "a1_au_d_2": "-0.000000000377",
    "a2_au_d_2": "-0.000000000110",
    "ref": "48",
    "object_name": "66P/du Toit"
  },
  {
    "object": "67P/Churyumov-Gerasimenko",
    "epoch_tdb": "56981",
    "tp_tdb": "2457247.572",
    "e": "0.6409739314",
    "i_deg": "7.040200902",
    "w_deg": "12.78560607",
    "node_deg": "50.14210951",
    "q_au_1": "1.243241683",
    "q_au_2": "5.68",
    "p_yr": "6.44",
    "moid_au": "0.257189",
    "a1_au_d_2": "0.00000000109",
    "a2_au_d_2": "0.000000000107",
    "a3_au_d_2": "0.000000000196",
    "ref": "K084/21",
    "object_name": "67P/Churyumov-Gerasimenko"
  },
  {
    "object": "72P/Denning-Fujikawa",
    "epoch_tdb": "56981",
    "tp_tdb": "2456850.137",
    "e": "0.8191545266",
    "i_deg": "9.16928387",
    "w_deg": "337.8580425",
    "node_deg": "36.10919646",
    "q_au_1": "0.7841612055",
    "q_au_2": "7.89",
    "p_yr": "9.03",
    "moid_au": "0.085253",
    "ref": "21",
    "object_name": "72P/Denning-Fujikawa"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3",
    "epoch_tdb": "50080",
    "tp_tdb": "2449983.39",
    "e": "0.6948269106",
    "i_deg": "11.4234876",
    "w_deg": "198.7699787",
    "node_deg": "69.94634151",
    "q_au_1": "0.9327707926",
    "q_au_2": "5.18",
    "p_yr": "5.34",
    "moid_au": "0.045198",
    "a1_au_d_2": "0.00000000687",
    "a2_au_d_2": "0.000000000490",
    "ref": "J954/19",
    "object_name": "73P/Schwassmann-Wachmann 3"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-B",
    "epoch_tdb": "53880",
    "tp_tdb": "2453894.424",
    "e": "0.6932855208",
    "i_deg": "11.39695195",
    "w_deg": "198.7994526",
    "node_deg": "69.8924768",
    "q_au_1": "0.9391110367",
    "q_au_2": "5.18",
    "p_yr": "5.36",
    "moid_au": "0.04071",
    "a1_au_d_2": "0.0000000149",
    "a2_au_d_2": "0.00000000196",
    "ref": "K061/24",
    "object_name": "73P/Schwassmann-Wachmann 3-B"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-C",
    "epoch_tdb": "55980",
    "tp_tdb": "2455851.4",
    "e": "0.6922258013",
    "i_deg": "11.37915706",
    "w_deg": "198.8705914",
    "node_deg": "69.8432169",
    "q_au_1": "0.9428566312",
    "q_au_2": "5.18",
    "p_yr": "5.36",
    "moid_au": "0.038373",
    "a1_au_d_2": "0.00000000654",
    "a2_au_d_2": "0.000000000483",
    "dt_d": "-12.2",
    "ref": "K114/1",
    "object_name": "73P/Schwassmann-Wachmann 3-C"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-E",
    "epoch_tdb": "51920",
    "tp_tdb": "2451937.953",
    "e": "0.6938774628",
    "i_deg": "11.40562118",
    "w_deg": "198.7732444",
    "node_deg": "69.91710448",
    "q_au_1": "0.9374369945",
    "q_au_2": "5.19",
    "p_yr": "5.36",
    "moid_au": "0.041033",
    "a1_au_d_2": "0.0000000172",
    "a2_au_d_2": "0.00000000581",
    "ref": "K013/11",
    "object_name": "73P/Schwassmann-Wachmann 3-E"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-G",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.596",
    "e": "0.6934129712",
    "i_deg": "11.38956229",
    "w_deg": "198.7746011",
    "node_deg": "69.90839961",
    "q_au_1": "0.9391839301",
    "q_au_2": "5.19",
    "p_yr": "5.36",
    "moid_au": "0.04054",
    "ref": "19",
    "object_name": "73P/Schwassmann-Wachmann 3-G"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-H",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.78",
    "e": "0.6935658067",
    "i_deg": "11.3910639",
    "w_deg": "198.7738045",
    "node_deg": "69.90789141",
    "q_au_1": "0.9391695085",
    "q_au_2": "5.19",
    "p_yr": "5.37",
    "moid_au": "0.04055",
    "ref": "14",
    "object_name": "73P/Schwassmann-Wachmann 3-H"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-J",
    "epoch_tdb": "53815",
    "tp_tdb": "2453894.65",
    "e": "0.6915388167",
    "i_deg": "11.38026546",
    "w_deg": "198.8694441",
    "node_deg": "69.82886018",
    "q_au_1": "0.9390202047",
    "q_au_2": "5.15",
    "p_yr": "5.31",
    "moid_au": "0.040713",
    "ref": "3",
    "object_name": "73P/Schwassmann-Wachmann 3-J"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-K",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.722",
    "e": "0.6935434852",
    "i_deg": "11.39106462",
    "w_deg": "198.7896439",
    "node_deg": "69.8973434",
    "q_au_1": "0.9390768439",
    "q_au_2": "5.19",
    "p_yr": "5.36",
    "moid_au": "0.040579",
    "ref": "4",
    "object_name": "73P/Schwassmann-Wachmann 3-K"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-L",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.829",
    "e": "0.694735675",
    "i_deg": "11.3987128",
    "w_deg": "198.7475944",
    "node_deg": "69.93678268",
    "q_au_1": "0.9390893944",
    "q_au_2": "5.21",
    "p_yr": "5.4",
    "moid_au": "0.040654",
    "ref": "7",
    "object_name": "73P/Schwassmann-Wachmann 3-L"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-M",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.757",
    "e": "0.6939409383",
    "i_deg": "11.39436144",
    "w_deg": "198.7775561",
    "node_deg": "69.90530158",
    "q_au_1": "0.9390968147",
    "q_au_2": "5.2",
    "p_yr": "5.37",
    "moid_au": "0.040589",
    "ref": "11",
    "object_name": "73P/Schwassmann-Wachmann 3-M"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-N",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.77",
    "e": "0.6922889938",
    "i_deg": "11.38094121",
    "w_deg": "198.7643511",
    "node_deg": "69.89730281",
    "q_au_1": "0.9392543584",
    "q_au_2": "5.17",
    "p_yr": "5.33",
    "moid_au": "0.040527",
    "ref": "14",
    "object_name": "73P/Schwassmann-Wachmann 3-N"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-P",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.353",
    "e": "0.6955758994",
    "i_deg": "11.40542193",
    "w_deg": "198.7241361",
    "node_deg": "69.9561999",
    "q_au_1": "0.9391591394",
    "q_au_2": "5.23",
    "p_yr": "5.42",
    "moid_au": "0.04065",
    "ref": "7",
    "object_name": "73P/Schwassmann-Wachmann 3-P"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-Q",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.179",
    "e": "0.6986472444",
    "i_deg": "11.4193581",
    "w_deg": "198.4951922",
    "node_deg": "70.13788751",
    "q_au_1": "0.9397157483",
    "q_au_2": "5.3",
    "p_yr": "5.51",
    "moid_au": "0.040746",
    "ref": "3",
    "object_name": "73P/Schwassmann-Wachmann 3-Q"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-R",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.68",
    "e": "0.6940882133",
    "i_deg": "11.3947263",
    "w_deg": "198.7697021",
    "node_deg": "69.91308584",
    "q_au_1": "0.9391315473",
    "q_au_2": "5.2",
    "p_yr": "5.38",
    "moid_au": "0.04058",
    "ref": "15",
    "object_name": "73P/Schwassmann-Wachmann 3-R"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-S",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.26",
    "e": "0.6933582332",
    "i_deg": "11.04818134",
    "w_deg": "181.5621916",
    "node_deg": "81.99161507",
    "q_au_1": "1.022366578",
    "q_au_2": "5.65",
    "p_yr": "6.09",
    "moid_au": "0.007355",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-S"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-T",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.2",
    "e": "0.7119324141",
    "i_deg": "11.51229958",
    "w_deg": "198.1833801",
    "node_deg": "70.47600442",
    "q_au_1": "0.9393187761",
    "q_au_2": "5.58",
    "p_yr": "5.89",
    "moid_au": "0.041618",
    "ref": "5",
    "object_name": "73P/Schwassmann-Wachmann 3-T"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-U",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.536",
    "e": "0.6893974588",
    "i_deg": "11.35982065",
    "w_deg": "198.8353865",
    "node_deg": "69.83271992",
    "q_au_1": "0.9393903294",
    "q_au_2": "5.11",
    "p_yr": "5.26",
    "moid_au": "0.040297",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-U"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-V",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.977",
    "e": "0.6934869706",
    "i_deg": "11.65182376",
    "w_deg": "204.9294792",
    "node_deg": "65.24678693",
    "q_au_1": "0.9122067361",
    "q_au_2": "5.04",
    "p_yr": "5.13",
    "moid_au": "0.043636",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-V"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-W",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.97",
    "e": "0.6975732498",
    "i_deg": "11.41831799",
    "w_deg": "198.6608054",
    "node_deg": "70.01698507",
    "q_au_1": "0.9391250326",
    "q_au_2": "5.27",
    "p_yr": "5.47",
    "moid_au": "0.040799",
    "ref": "3",
    "object_name": "73P/Schwassmann-Wachmann 3-W"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-X",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.055",
    "e": "0.6947512888",
    "i_deg": "11.39938737",
    "w_deg": "198.7509795",
    "node_deg": "69.92862059",
    "q_au_1": "0.9390826998",
    "q_au_2": "5.21",
    "p_yr": "5.4",
    "moid_au": "0.040651",
    "ref": "7",
    "object_name": "73P/Schwassmann-Wachmann 3-X"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-Y",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.095",
    "e": "0.7195023037",
    "i_deg": "11.56184126",
    "w_deg": "197.9700547",
    "node_deg": "70.66913935",
    "q_au_1": "0.9391657408",
    "q_au_2": "5.76",
    "p_yr": "6.13",
    "moid_au": "0.042145",
    "ref": "3",
    "object_name": "73P/Schwassmann-Wachmann 3-Y"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-Z",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.809",
    "e": "0.6933582332",
    "i_deg": "11.34947201",
    "w_deg": "198.0161463",
    "node_deg": "70.49401081",
    "q_au_1": "0.9420391541",
    "q_au_2": "5.2",
    "p_yr": "5.38",
    "moid_au": "0.040223",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-Z"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AA",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.666",
    "e": "0.6806338789",
    "i_deg": "11.29506494",
    "w_deg": "199.1079395",
    "node_deg": "69.57271647",
    "q_au_1": "0.9392845342",
    "q_au_2": "4.94",
    "p_yr": "5.04",
    "moid_au": "0.039837",
    "ref": "3",
    "object_name": "73P/Schwassmann-Wachmann 3-AA"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AB",
    "epoch_tdb": "53856",
    "tp_tdb": "2453895.214",
    "e": "0.6912468087",
    "i_deg": "11.37319386",
    "w_deg": "198.8169658",
    "node_deg": "69.85894301",
    "q_au_1": "0.9391663283",
    "q_au_2": "5.14",
    "p_yr": "5.31",
    "moid_au": "0.040615",
    "ref": "4",
    "object_name": "73P/Schwassmann-Wachmann 3-AB"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AC",
    "epoch_tdb": "53856",
    "tp_tdb": "2453895.178",
    "e": "0.6953671146",
    "i_deg": "11.40528019",
    "w_deg": "198.7526383",
    "node_deg": "69.93380114",
    "q_au_1": "0.9390452533",
    "q_au_2": "5.23",
    "p_yr": "5.41",
    "moid_au": "0.040807",
    "ref": "5",
    "object_name": "73P/Schwassmann-Wachmann 3-AC"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AD",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.179",
    "e": "0.6933582332",
    "i_deg": "11.36836584",
    "w_deg": "198.3713234",
    "node_deg": "70.21921728",
    "q_au_1": "0.9407073595",
    "q_au_2": "5.19",
    "p_yr": "5.37",
    "moid_au": "0.040376",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-AD"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AE",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.826",
    "e": "0.6967256567",
    "i_deg": "11.41469069",
    "w_deg": "198.7081423",
    "node_deg": "69.9723223",
    "q_au_1": "0.939051181",
    "q_au_2": "5.25",
    "p_yr": "5.45",
    "moid_au": "0.040753",
    "ref": "5",
    "object_name": "73P/Schwassmann-Wachmann 3-AE"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AF",
    "epoch_tdb": "53839",
    "tp_tdb": "2453893.514",
    "e": "0.6762990182",
    "i_deg": "11.23973276",
    "w_deg": "198.7163903",
    "node_deg": "69.8497135",
    "q_au_1": "0.9411849123",
    "q_au_2": "4.87",
    "p_yr": "4.96",
    "moid_au": "0.039428",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-AF"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AG",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.498",
    "e": "0.6957811465",
    "i_deg": "11.40758964",
    "w_deg": "198.7052943",
    "node_deg": "69.95896614",
    "q_au_1": "0.9390392449",
    "q_au_2": "5.23",
    "p_yr": "5.42",
    "moid_au": "0.040779",
    "ref": "4",
    "object_name": "73P/Schwassmann-Wachmann 3-AG"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AH",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.13",
    "e": "0.6933582332",
    "i_deg": "11.33063244",
    "w_deg": "197.7396254",
    "node_deg": "70.70742061",
    "q_au_1": "0.9429866147",
    "q_au_2": "5.21",
    "p_yr": "5.39",
    "moid_au": "0.040154",
    "ref": "3",
    "object_name": "73P/Schwassmann-Wachmann 3-AH"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AI",
    "epoch_tdb": "53836",
    "tp_tdb": "2453895.2",
    "e": "0.6982511274",
    "i_deg": "11.43065377",
    "w_deg": "198.7294365",
    "node_deg": "69.97109124",
    "q_au_1": "0.9388880724",
    "q_au_2": "5.28",
    "p_yr": "5.49",
    "moid_au": "0.04071",
    "ref": "4",
    "object_name": "73P/Schwassmann-Wachmann 3-AI"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AJ",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.511",
    "e": "0.8001952857",
    "i_deg": "12.14931754",
    "w_deg": "196.7656541",
    "node_deg": "72.0622749",
    "q_au_1": "0.936080103",
    "q_au_2": "8.43",
    "p_yr": "10.14",
    "moid_au": "0.046608",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-AJ"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AK",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.883",
    "e": "0.6933582332",
    "i_deg": "11.42949727",
    "w_deg": "199.3256981",
    "node_deg": "69.37619102",
    "q_au_1": "0.9377052113",
    "q_au_2": "5.18",
    "p_yr": "5.35",
    "moid_au": "0.040319",
    "ref": "3",
    "object_name": "73P/Schwassmann-Wachmann 3-AK"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AL",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.906",
    "e": "0.6998428235",
    "i_deg": "11.44393328",
    "w_deg": "198.7225549",
    "node_deg": "69.97977383",
    "q_au_1": "0.9387685839",
    "q_au_2": "5.32",
    "p_yr": "5.53",
    "moid_au": "0.040892",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-AL"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AM",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.701",
    "e": "0.6933582332",
    "i_deg": "11.54419805",
    "w_deg": "201.0885964",
    "node_deg": "68.11933346",
    "q_au_1": "0.9309371637",
    "q_au_2": "5.14",
    "p_yr": "5.29",
    "moid_au": "0.04092",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-AM"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AN",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.816",
    "e": "0.6947569553",
    "i_deg": "11.40514157",
    "w_deg": "198.8011953",
    "node_deg": "69.89155967",
    "q_au_1": "0.9389973237",
    "q_au_2": "5.21",
    "p_yr": "5.4",
    "moid_au": "0.040601",
    "ref": "4",
    "object_name": "73P/Schwassmann-Wachmann 3-AN"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AO",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.351",
    "e": "0.6937687739",
    "i_deg": "11.32588494",
    "w_deg": "198.1671916",
    "node_deg": "70.388797",
    "q_au_1": "0.9407501623",
    "q_au_2": "5.2",
    "p_yr": "5.38",
    "moid_au": "0.040747",
    "ref": "3",
    "object_name": "73P/Schwassmann-Wachmann 3-AO"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AP",
    "epoch_tdb": "53856",
    "tp_tdb": "2453893.11",
    "e": "0.7014300924",
    "i_deg": "11.46590929",
    "w_deg": "198.7426205",
    "node_deg": "69.9669785",
    "q_au_1": "0.9387454286",
    "q_au_2": "5.35",
    "p_yr": "5.58",
    "moid_au": "0.040996",
    "ref": "8",
    "object_name": "73P/Schwassmann-Wachmann 3-AP"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AQ",
    "epoch_tdb": "53856",
    "tp_tdb": "2453894.4",
    "e": "0.6959119088",
    "i_deg": "11.41369562",
    "w_deg": "198.7713164",
    "node_deg": "69.92072504",
    "q_au_1": "0.9390064365",
    "q_au_2": "5.24",
    "p_yr": "5.43",
    "moid_au": "0.04079",
    "ref": "9",
    "object_name": "73P/Schwassmann-Wachmann 3-AQ"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AR",
    "epoch_tdb": "53839",
    "tp_tdb": "2453893.311",
    "e": "0.695799013",
    "i_deg": "11.40652255",
    "w_deg": "198.7098466",
    "node_deg": "69.96630168",
    "q_au_1": "0.9392047604",
    "q_au_2": "5.24",
    "p_yr": "5.43",
    "moid_au": "0.040648",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-AR"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AS",
    "epoch_tdb": "53852",
    "tp_tdb": "2453892.763",
    "e": "0.7009701053",
    "i_deg": "11.46096714",
    "w_deg": "198.7247614",
    "node_deg": "69.97402026",
    "q_au_1": "0.93882735",
    "q_au_2": "5.34",
    "p_yr": "5.56",
    "moid_au": "0.041109",
    "ref": "6",
    "object_name": "73P/Schwassmann-Wachmann 3-AS"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AT",
    "epoch_tdb": "53839",
    "tp_tdb": "2453892.789",
    "e": "0.6869322275",
    "i_deg": "11.33462061",
    "w_deg": "198.8104065",
    "node_deg": "69.84813048",
    "q_au_1": "0.9396287904",
    "q_au_2": "5.06",
    "p_yr": "5.2",
    "moid_au": "0.040208",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-AT"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AU",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.598",
    "e": "0.6928223535",
    "i_deg": "11.38220585",
    "w_deg": "198.7583062",
    "node_deg": "69.91454526",
    "q_au_1": "0.9392979588",
    "q_au_2": "5.18",
    "p_yr": "5.35",
    "moid_au": "0.040499",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-AU"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AV",
    "epoch_tdb": "53839",
    "tp_tdb": "2453892.996",
    "e": "0.6933582332",
    "i_deg": "11.3951153",
    "w_deg": "198.8335456",
    "node_deg": "69.88524741",
    "q_au_1": "0.9390242876",
    "q_au_2": "5.19",
    "p_yr": "5.36",
    "moid_au": "0.040526",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-AV"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AW",
    "epoch_tdb": "53839",
    "tp_tdb": "2453894.409",
    "e": "0.6773014639",
    "i_deg": "11.23959642",
    "w_deg": "198.8339738",
    "node_deg": "69.79453062",
    "q_au_1": "0.9402577564",
    "q_au_2": "4.89",
    "p_yr": "4.97",
    "moid_au": "0.039791",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-AW"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AX",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.999",
    "e": "0.6924701264",
    "i_deg": "11.42778528",
    "w_deg": "199.2512703",
    "node_deg": "69.46695211",
    "q_au_1": "0.9380095396",
    "q_au_2": "5.16",
    "p_yr": "5.33",
    "moid_au": "0.040309",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-AX"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AY",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.402",
    "e": "0.675089956",
    "i_deg": "11.22586964",
    "w_deg": "198.9220318",
    "node_deg": "69.71151968",
    "q_au_1": "0.9401934035",
    "q_au_2": "4.85",
    "p_yr": "4.92",
    "moid_au": "0.039663",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-AY"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-AZ",
    "epoch_tdb": "53839",
    "tp_tdb": "2453893.205",
    "e": "0.6750699862",
    "i_deg": "11.22070941",
    "w_deg": "198.8670389",
    "node_deg": "69.76425986",
    "q_au_1": "0.9403177776",
    "q_au_2": "4.85",
    "p_yr": "4.92",
    "moid_au": "0.039697",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-AZ"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BA",
    "epoch_tdb": "53839",
    "tp_tdb": "2453893.044",
    "e": "0.6824329214",
    "i_deg": "11.27075096",
    "w_deg": "198.6920226",
    "node_deg": "69.9209975",
    "q_au_1": "0.9402477902",
    "q_au_2": "4.98",
    "p_yr": "5.09",
    "moid_au": "0.040053",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-BA"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BB",
    "epoch_tdb": "53839",
    "tp_tdb": "2453893.591",
    "e": "0.6824329214",
    "i_deg": "11.19018461",
    "w_deg": "197.928567",
    "node_deg": "70.47094006",
    "q_au_1": "0.942420571",
    "q_au_2": "4.99",
    "p_yr": "5.11",
    "moid_au": "0.040143",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-BB"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BC",
    "epoch_tdb": "53856",
    "tp_tdb": "2453893.107",
    "e": "0.7004675151",
    "i_deg": "11.45870615",
    "w_deg": "198.7461327",
    "node_deg": "69.95554651",
    "q_au_1": "0.9388074049",
    "q_au_2": "5.33",
    "p_yr": "5.55",
    "moid_au": "0.040954",
    "ref": "7",
    "object_name": "73P/Schwassmann-Wachmann 3-BC"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BD",
    "epoch_tdb": "53839",
    "tp_tdb": "2453892.675",
    "e": "0.6824392137",
    "i_deg": "10.97454826",
    "w_deg": "196.463131",
    "node_deg": "71.41848297",
    "q_au_1": "0.9461555836",
    "q_au_2": "5.01",
    "p_yr": "5.14",
    "moid_au": "0.040389",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-BD"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BE",
    "epoch_tdb": "53839",
    "tp_tdb": "2453893.475",
    "e": "0.6824392137",
    "i_deg": "11.3165548",
    "w_deg": "199.0041337",
    "node_deg": "69.69353535",
    "q_au_1": "0.9394213409",
    "q_au_2": "4.98",
    "p_yr": "5.09",
    "moid_au": "0.039983",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-BE"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BF",
    "epoch_tdb": "53856",
    "tp_tdb": "2453893.564",
    "e": "0.6856738995",
    "i_deg": "11.32197626",
    "w_deg": "198.8097995",
    "node_deg": "69.83455705",
    "q_au_1": "0.9395742939",
    "q_au_2": "5.04",
    "p_yr": "5.17",
    "moid_au": "0.040397",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-BF"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BG",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.307",
    "e": "0.6847548055",
    "i_deg": "11.32450054",
    "w_deg": "198.9548257",
    "node_deg": "69.72079452",
    "q_au_1": "0.9393418344",
    "q_au_2": "5.02",
    "p_yr": "5.14",
    "moid_au": "0.040107",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-BG"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BH",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.153",
    "e": "0.6824392137",
    "i_deg": "11.28940623",
    "w_deg": "198.8380688",
    "node_deg": "69.80392621",
    "q_au_1": "0.9398162468",
    "q_au_2": "4.98",
    "p_yr": "5.09",
    "moid_au": "0.040047",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-BH"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BI",
    "epoch_tdb": "53856",
    "tp_tdb": "2453895.226",
    "e": "0.6824626795",
    "i_deg": "11.30045753",
    "w_deg": "198.9127974",
    "node_deg": "69.75258615",
    "q_au_1": "0.9397650974",
    "q_au_2": "4.98",
    "p_yr": "5.09",
    "moid_au": "0.040062",
    "ref": "3",
    "object_name": "73P/Schwassmann-Wachmann 3-BI"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BJ",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.186",
    "e": "0.6910944882",
    "i_deg": "11.37022892",
    "w_deg": "198.7979116",
    "node_deg": "69.87876452",
    "q_au_1": "0.9392529208",
    "q_au_2": "5.14",
    "p_yr": "5.3",
    "moid_au": "0.040461",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-BJ"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BK",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.397",
    "e": "0.6915428054",
    "i_deg": "11.37077721",
    "w_deg": "198.775388",
    "node_deg": "69.89745388",
    "q_au_1": "0.9392666357",
    "q_au_2": "5.15",
    "p_yr": "5.31",
    "moid_au": "0.040494",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-BK"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BL",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.363",
    "e": "0.6962237189",
    "i_deg": "11.4093615",
    "w_deg": "198.6994292",
    "node_deg": "69.97335799",
    "q_au_1": "0.9390996615",
    "q_au_2": "5.24",
    "p_yr": "5.44",
    "moid_au": "0.040742",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-BL"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BM",
    "epoch_tdb": "53839",
    "tp_tdb": "2453895.516",
    "e": "0.6824392137",
    "i_deg": "11.29433257",
    "w_deg": "198.861349",
    "node_deg": "69.7755882",
    "q_au_1": "0.9397568629",
    "q_au_2": "4.98",
    "p_yr": "5.09",
    "moid_au": "0.040041",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-BM"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BN",
    "epoch_tdb": "53856",
    "tp_tdb": "2453894.712",
    "e": "0.6917715065",
    "i_deg": "11.37744926",
    "w_deg": "198.7947706",
    "node_deg": "69.88153448",
    "q_au_1": "0.9391857446",
    "q_au_2": "5.15",
    "p_yr": "5.32",
    "moid_au": "0.040649",
    "ref": "3",
    "object_name": "73P/Schwassmann-Wachmann 3-BN"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BO",
    "epoch_tdb": "53856",
    "tp_tdb": "2453894.772",
    "e": "0.6918275631",
    "i_deg": "11.37615727",
    "w_deg": "198.7715536",
    "node_deg": "69.89197757",
    "q_au_1": "0.9392190689",
    "q_au_2": "5.16",
    "p_yr": "5.32",
    "moid_au": "0.040677",
    "ref": "3",
    "object_name": "73P/Schwassmann-Wachmann 3-BO"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BP",
    "epoch_tdb": "53856",
    "tp_tdb": "2453894.892",
    "e": "0.6824534537",
    "i_deg": "11.29077484",
    "w_deg": "198.8488389",
    "node_deg": "69.81061093",
    "q_au_1": "0.9397832677",
    "q_au_2": "4.98",
    "p_yr": "5.09",
    "moid_au": "0.040186",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-BP"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BQ",
    "epoch_tdb": "53856",
    "tp_tdb": "2453894.8",
    "e": "0.6924538802",
    "i_deg": "11.38826125",
    "w_deg": "198.8198463",
    "node_deg": "69.86577521",
    "q_au_1": "0.9391556635",
    "q_au_2": "5.17",
    "p_yr": "5.34",
    "moid_au": "0.040612",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-BQ"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BR",
    "epoch_tdb": "53856",
    "tp_tdb": "2453892.736",
    "e": "0.6851541342",
    "i_deg": "11.31924783",
    "w_deg": "198.8412924",
    "node_deg": "69.82671175",
    "q_au_1": "0.9396017862",
    "q_au_2": "5.03",
    "p_yr": "5.16",
    "moid_au": "0.040313",
    "ref": "2",
    "object_name": "73P/Schwassmann-Wachmann 3-BR"
  },
  {
    "object": "73P/Schwassmann-Wachmann 3-BS",
    "epoch_tdb": "53856",
    "tp_tdb": "2453892.278",
    "e": "0.6985735462",
    "i_deg": "11.44446449",
    "w_deg": "198.7685232",
    "node_deg": "69.93999714",
    "q_au_1": "0.9389486718",
    "q_au_2": "5.29",
    "p_yr": "5.5",
    "moid_au": "0.040824",
    "ref": "1",
    "object_name": "73P/Schwassmann-Wachmann 3-BS"
  },
  {
    "object": "79P/du Toit-Hartley",
    "epoch_tdb": "56558",
    "tp_tdb": "2456527.786",
    "e": "0.61851349",
    "i_deg": "3.145618792",
    "w_deg": "281.6893173",
    "node_deg": "280.6403369",
    "q_au_1": "1.123805321",
    "q_au_2": "4.77",
    "p_yr": "5.06",
    "moid_au": "0.134779",
    "a1_au_d_2": "-0.0000000000487",
    "a2_au_d_2": "-0.0000000000330",
    "ref": "16",
    "object_name": "79P/du Toit-Hartley"
  },
  {
    "object": "85P/Boethin",
    "epoch_tdb": "54252",
    "tp_tdb": "2454813.247",
    "e": "0.7811606262",
    "i_deg": "4.295294591",
    "w_deg": "37.61838461",
    "node_deg": "359.3961137",
    "q_au_1": "1.134657452",
    "q_au_2": "9.24",
    "p_yr": "11.81",
    "moid_au": "0.149899",
    "a1_au_d_2": "0.00",
    "a2_au_d_2": "0.00",
    "ref": "23",
    "object_name": "85P/Boethin"
  },
  {
    "object": "96P/Machholz 1",
    "epoch_tdb": "56541",
    "tp_tdb": "2456123.323",
    "e": "0.9592118287",
    "i_deg": "58.31221424",
    "w_deg": "14.7577484",
    "node_deg": "94.32323631",
    "q_au_1": "0.1237488531",
    "q_au_2": "5.94",
    "p_yr": "5.28",
    "moid_au": "0.333731",
    "a1_au_d_2": "0.000000000107",
    "a2_au_d_2": "-0.000000000000938",
    "ref": "53",
    "object_name": "96P/Machholz 1"
  },
  {
    "object": "103P/Hartley 2",
    "epoch_tdb": "56981",
    "tp_tdb": "2457863.823",
    "e": "0.693780472",
    "i_deg": "13.60427243",
    "w_deg": "181.3222858",
    "node_deg": "219.7487451",
    "q_au_1": "1.064195154",
    "q_au_2": "5.89",
    "p_yr": "6.48",
    "moid_au": "0.072005",
    "ref": "252",
    "object_name": "103P/Hartley 2"
  },
  {
    "object": "104P/Kowal 2",
    "epoch_tdb": "57090",
    "tp_tdb": "2457473.288",
    "e": "0.6385203614",
    "i_deg": "10.25097305",
    "w_deg": "200.6509533",
    "node_deg": "235.4414959",
    "q_au_1": "1.178758464",
    "q_au_2": "5.34",
    "p_yr": "5.89",
    "moid_au": "0.202197",
    "a1_au_d_2": "0.0000000226",
    "a2_au_d_2": "-0.00000000548",
    "a3_au_d_2": "0.00000000133",
    "ref": "24",
    "object_name": "104P/Kowal 2"
  },
  {
    "object": "109P/Swift-Tuttle",
    "epoch_tdb": "50000",
    "tp_tdb": "2448968.5",
    "e": "0.963225755",
    "i_deg": "113.453817",
    "w_deg": "152.9821676",
    "node_deg": "139.3811921",
    "q_au_1": "0.9595161551",
    "q_au_2": "51.22",
    "p_yr": "133.28",
    "moid_au": "0.000892",
    "ref": "32",
    "object_name": "109P/Swift-Tuttle"
  },
  {
    "object": "122P/de Vico",
    "epoch_tdb": "50280",
    "tp_tdb": "2449996.5",
    "e": "0.9627088868",
    "i_deg": "85.38275311",
    "w_deg": "12.99609194",
    "node_deg": "79.62450069",
    "q_au_1": "0.6593373359",
    "q_au_2": "34.7",
    "p_yr": "74.35",
    "moid_au": "0.316817",
    "ref": "27",
    "object_name": "122P/de Vico"
  },
  {
    "object": "141P/Machholz 2-A",
    "epoch_tdb": "53480",
    "tp_tdb": "2453429.749",
    "e": "0.7501239591",
    "i_deg": "12.79506334",
    "w_deg": "149.2844343",
    "node_deg": "246.1615904",
    "q_au_1": "0.7528498784",
    "q_au_2": "5.27",
    "p_yr": "5.23",
    "moid_au": "0.105492",
    "a1_au_d_2": "-0.00000000281",
    "a2_au_d_2": "0.000000000103",
    "a3_au_d_2": "0.000000000599",
    "ref": "75",
    "object_name": "141P/Machholz 2-A"
  },
  {
    "object": "141P/Machholz 2-D",
    "epoch_tdb": "51520",
    "tp_tdb": "2451522.455",
    "e": "0.7510624112",
    "i_deg": "12.81184124",
    "w_deg": "149.2918108",
    "node_deg": "246.1336343",
    "q_au_1": "0.7490056935",
    "q_au_2": "5.27",
    "p_yr": "5.22",
    "moid_au": "0.107814",
    "a1_au_d_2": "0.0000000227",
    "a2_au_d_2": "0.00000000586",
    "ref": "11",
    "object_name": "141P/Machholz 2-D"
  },
  {
    "object": "161P/Hartley-IRAS",
    "epoch_tdb": "52749",
    "tp_tdb": "2453542.365",
    "e": "0.8350738463",
    "i_deg": "95.69806815",
    "w_deg": "47.13845023",
    "node_deg": "1.415670065",
    "q_au_1": "1.27343339",
    "q_au_2": "14.17",
    "p_yr": "21.46",
    "moid_au": "0.447763",
    "ref": "59",
    "object_name": "161P/Hartley-IRAS"
  },
  {
    "object": "162P/Siding Spring",
    "epoch_tdb": "53529",
    "tp_tdb": "2453319.778",
    "e": "0.5972436348",
    "i_deg": "27.84477766",
    "w_deg": "356.3636966",
    "node_deg": "31.25192352",
    "q_au_1": "1.227689026",
    "q_au_2": "4.87",
    "p_yr": "5.32",
    "moid_au": "0.232183",
    "ref": "86",
    "object_name": "162P/Siding Spring"
  },
  {
    "object": "169P/NEAT",
    "epoch_tdb": "54296",
    "tp_tdb": "2453631.013",
    "e": "0.7669277193",
    "i_deg": "11.30444069",
    "w_deg": "217.9760878",
    "node_deg": "176.2204118",
    "q_au_1": "0.6069807513",
    "q_au_2": "4.6",
    "p_yr": "4.2",
    "moid_au": "0.142644",
    "ref": "114",
    "object_name": "169P/NEAT"
  },
  {
    "object": "177P/Barnard",
    "epoch_tdb": "53542",
    "tp_tdb": "2453976.192",
    "e": "0.9545011069",
    "i_deg": "31.1792882",
    "w_deg": "60.34965167",
    "node_deg": "272.1861491",
    "q_au_1": "1.107319662",
    "q_au_2": "47.57",
    "p_yr": "120.07",
    "moid_au": "0.31003",
    "ref": "27",
    "object_name": "177P/Barnard"
  },
  {
    "object": "181P/Shoemaker-Levy 6",
    "epoch_tdb": "56908",
    "tp_tdb": "2456818.826",
    "e": "0.7073228279",
    "i_deg": "16.98117917",
    "w_deg": "333.7988486",
    "node_deg": "37.67945772",
    "q_au_1": "1.123593041",
    "q_au_2": "6.55",
    "p_yr": "7.52",
    "moid_au": "0.156355",
    "a1_au_d_2": "-0.00000000291",
    "a2_au_d_2": "-0.0000000000864",
    "ref": "16",
    "object_name": "181P/Shoemaker-Levy 6"
  },
  {
    "object": "182P/LONEOS",
    "epoch_tdb": "53241",
    "tp_tdb": "2454137.333",
    "e": "0.66634233",
    "i_deg": "16.90929665",
    "w_deg": "51.43384257",
    "node_deg": "75.10006349",
    "q_au_1": "0.9780224592",
    "q_au_2": "4.88",
    "p_yr": "5.02",
    "moid_au": "0.109366",
    "ref": "61",
    "object_name": "182P/LONEOS"
  },
  {
    "object": "185P/Petriew",
    "epoch_tdb": "56498",
    "tp_tdb": "2456153.046",
    "e": "0.6993210375",
    "i_deg": "14.00701804",
    "w_deg": "181.9403336",
    "node_deg": "214.0910177",
    "q_au_1": "0.9320143358",
    "q_au_2": "5.27",
    "p_yr": "5.46",
    "moid_au": "0.060833",
    "a2_au_d_2": "0.000000000172",
    "ref": "43",
    "object_name": "185P/Petriew"
  },
  {
    "object": "189P/NEAT",
    "epoch_tdb": "56364",
    "tp_tdb": "2456128.957",
    "e": "0.5967955467",
    "i_deg": "20.3759014",
    "w_deg": "15.39713787",
    "node_deg": "282.144161",
    "q_au_1": "1.177562746",
    "q_au_2": "4.66",
    "p_yr": "4.99",
    "moid_au": "0.170302",
    "a1_au_d_2": "-0.000000000742",
    "a2_au_d_2": "-0.0000000000490",
    "ref": "56",
    "object_name": "189P/NEAT"
  },
  {
    "object": "197P/LINEAR",
    "epoch_tdb": "56717",
    "tp_tdb": "2456376.326",
    "e": "0.6296602372",
    "i_deg": "25.54272525",
    "w_deg": "188.7289004",
    "node_deg": "66.38824615",
    "q_au_1": "1.061393391",
    "q_au_2": "4.67",
    "p_yr": "4.85",
    "moid_au": "0.051318",
    "a1_au_d_2": "-0.000000000133",
    "a2_au_d_2": "0.0000000000167",
    "a3_au_d_2": "0.0000000000717",
    "ref": "46",
    "object_name": "197P/LINEAR"
  },
  {
    "object": "206P/Barnard-Boattini",
    "epoch_tdb": "51606",
    "tp_tdb": "2450626.305",
    "e": "0.6886420879",
    "i_deg": "31.97414822",
    "w_deg": "179.5749493",
    "node_deg": "205.2603247",
    "q_au_1": "0.9788121332",
    "q_au_2": "5.31",
    "p_yr": "5.57",
    "moid_au": "0.01839",
    "ref": "12",
    "object_name": "206P/Barnard-Boattini"
  },
  {
    "object": "207P/NEAT",
    "epoch_tdb": "54069",
    "tp_tdb": "2454776.877",
    "e": "0.7569889079",
    "i_deg": "10.14995411",
    "w_deg": "271.195627",
    "node_deg": "200.6742212",
    "q_au_1": "0.943996196",
    "q_au_2": "6.83",
    "p_yr": "7.66",
    "moid_au": "0.147585",
    "ref": "64",
    "object_name": "207P/NEAT"
  },
  {
    "object": "209P/LINEAR",
    "epoch_tdb": "55720",
    "tp_tdb": "2454938.94",
    "e": "0.6923704602",
    "i_deg": "19.44782985",
    "w_deg": "150.4693054",
    "node_deg": "65.46431318",
    "q_au_1": "0.9016688219",
    "q_au_2": "4.96",
    "p_yr": "5.02",
    "moid_au": "0.051186",
    "ref": "130",
    "object_name": "209P/LINEAR"
  },
  {
    "object": "210P/Christensen",
    "epoch_tdb": "56908",
    "tp_tdb": "2456886.746",
    "e": "0.8325032627",
    "i_deg": "10.24010578",
    "w_deg": "345.8255534",
    "node_deg": "93.82650012",
    "q_au_1": "0.5313139132",
    "q_au_2": "5.81",
    "p_yr": "5.65",
    "moid_au": "0.170738",
    "a1_au_d_2": "0.000000000213",
    "a2_au_d_2": "0.0000000000523",
    "a3_au_d_2": "-0.000000000602",
    "ref": "42",
    "object_name": "210P/Christensen"
  },
  {
    "object": "217P/LINEAR",
    "epoch_tdb": "54831",
    "tp_tdb": "2455083.48",
    "e": "0.689642756",
    "i_deg": "12.88188017",
    "w_deg": "246.7754682",
    "node_deg": "125.6220203",
    "q_au_1": "1.223482234",
    "q_au_2": "6.66",
    "p_yr": "7.83",
    "moid_au": "0.306437",
    "ref": "113",
    "object_name": "217P/LINEAR"
  },
  {
    "object": "222P/LINEAR",
    "epoch_tdb": "54553",
    "tp_tdb": "2455075.7",
    "e": "0.7267693964",
    "i_deg": "5.14614339",
    "w_deg": "345.4248856",
    "node_deg": "7.132384188",
    "q_au_1": "0.7807614949",
    "q_au_2": "4.93",
    "p_yr": "4.83",
    "moid_au": "0.062285",
    "ref": "31",
    "object_name": "222P/LINEAR"
  },
  {
    "object": "225P/LINEAR",
    "epoch_tdb": "52717",
    "tp_tdb": "2452555.598",
    "e": "0.6637644633",
    "i_deg": "20.70960946",
    "w_deg": "1.329461349",
    "node_deg": "15.49778451",
    "q_au_1": "1.192065517",
    "q_au_2": "5.9",
    "p_yr": "6.68",
    "moid_au": "0.194983",
    "ref": "42",
    "object_name": "225P/LINEAR"
  },
  {
    "object": "249P/LINEAR",
    "epoch_tdb": "54112",
    "tp_tdb": "2453976.035",
    "e": "0.8161483931",
    "i_deg": "8.4340952",
    "w_deg": "64.04057029",
    "node_deg": "240.6460863",
    "q_au_1": "0.5105855707",
    "q_au_2": "5.04",
    "p_yr": "4.63",
    "moid_au": "0.052649",
    "ref": "21",
    "object_name": "249P/LINEAR"
  },
  {
    "object": "252P/LINEAR",
    "epoch_tdb": "52306",
    "tp_tdb": "2451613.458",
    "e": "0.6724112481",
    "i_deg": "10.38105211",
    "w_deg": "343.2826819",
    "node_deg": "190.9962851",
    "q_au_1": "1.001368431",
    "q_au_2": "5.11",
    "p_yr": "5.34",
    "moid_au": "0.017389",
    "ref": "25",
    "object_name": "252P/LINEAR"
  },
  {
    "object": "255P/Levy",
    "epoch_tdb": "56981",
    "tp_tdb": "2457876.215",
    "e": "0.6681889017",
    "i_deg": "18.26659348",
    "w_deg": "179.6923294",
    "node_deg": "279.7300367",
    "q_au_1": "1.00817764",
    "q_au_2": "5.07",
    "p_yr": "5.3",
    "moid_au": "0.024517",
    "a1_au_d_2": "0.00000000733",
    "a2_au_d_2": "-0.00000000415",
    "ref": "37",
    "object_name": "255P/Levy"
  },
  {
    "object": "262P/McNaught-Russell",
    "epoch_tdb": "55913",
    "tp_tdb": "2456265.959",
    "e": "0.8154028826",
    "i_deg": "29.07941912",
    "w_deg": "171.1690206",
    "node_deg": "218.0142884",
    "q_au_1": "1.280276583",
    "q_au_2": "12.59",
    "p_yr": "18.27",
    "moid_au": "0.291456",
    "ref": "39",
    "object_name": "262P/McNaught-Russell"
  },
  {
    "object": "263P/Gibbs",
    "epoch_tdb": "54246",
    "tp_tdb": "2454098.266",
    "e": "0.5869803961",
    "i_deg": "14.4711765",
    "w_deg": "26.31548584",
    "node_deg": "113.3508576",
    "q_au_1": "1.251302076",
    "q_au_2": "4.81",
    "p_yr": "5.27",
    "moid_au": "0.284398",
    "ref": "15",
    "object_name": "263P/Gibbs"
  },
  {
    "object": "273P/Pons-Gambart",
    "epoch_tdb": "56799",
    "tp_tdb": "2456281.057",
    "e": "0.9750961432",
    "i_deg": "136.3989719",
    "w_deg": "20.18419247",
    "node_deg": "320.4310688",
    "q_au_1": "0.8104310477",
    "q_au_2": "64.27",
    "p_yr": "185.64",
    "moid_au": "0.171765",
    "a1_au_d_2": "0.0000000000760",
    "a2_au_d_2": "0.000000000886",
    "ref": "9",
    "object_name": "273P/Pons-Gambart"
  },
  {
    "object": "289P/Blanpain",
    "epoch_tdb": "53393",
    "tp_tdb": "2452985.145",
    "e": "0.6757685739",
    "i_deg": "5.931685399",
    "w_deg": "9.066912825",
    "node_deg": "69.33306667",
    "q_au_1": "0.9986827792",
    "q_au_2": "5.16",
    "p_yr": "5.41",
    "moid_au": "0.016462",
    "a2_au_d_2": "-0.000000000771",
    "ref": "4",
    "object_name": "289P/Blanpain"
  },
  {
    "object": "294P/LINEAR",
    "epoch_tdb": "55173",
    "tp_tdb": "2454631.335",
    "e": "0.5945159337",
    "i_deg": "19.0857983",
    "w_deg": "233.2695182",
    "node_deg": "315.4433207",
    "q_au_1": "1.297734649",
    "q_au_2": "5.1",
    "p_yr": "5.73",
    "moid_au": "0.393614",
    "ref": "27",
    "object_name": "294P/LINEAR"
  },
  {
    "object": "300P/Catalina",
    "epoch_tdb": "56981",
    "tp_tdb": "2456807.378",
    "e": "0.693462168",
    "i_deg": "5.691470921",
    "w_deg": "222.7484631",
    "node_deg": "95.8066034",
    "q_au_1": "0.8259797783",
    "q_au_2": "4.56",
    "p_yr": "4.42",
    "moid_au": "0.024454",
    "a2_au_d_2": "-0.000000000325",
    "ref": "9",
    "object_name": "300P/Catalina"
  },
  {
    "object": "306P/LINEAR",
    "epoch_tdb": "53391",
    "tp_tdb": "2452865.469",
    "e": "0.5982594907",
    "i_deg": "8.364457777",
    "w_deg": "0.7688016312",
    "node_deg": "341.4986017",
    "q_au_1": "1.246918534",
    "q_au_2": "4.96",
    "p_yr": "5.47",
    "moid_au": "0.239208",
    "ref": "31",
    "object_name": "306P/LINEAR"
  },
  {
    "object": "317P/WISE",
    "epoch_tdb": "55727",
    "tp_tdb": "2455385.227",
    "e": "0.5904467346",
    "i_deg": "10.64556918",
    "w_deg": "328.7279634",
    "node_deg": "280.9856039",
    "q_au_1": "1.198390481",
    "q_au_2": "4.65",
    "p_yr": "5.01",
    "moid_au": "0.203854",
    "ref": "9",
    "object_name": "317P/WISE"
  },
  {
    "object": "C/1906 V1 (Thiele)",
    "epoch_tdb": "17544",
    "tp_tdb": "2417536.077",
    "e": "0.9487613645",
    "i_deg": "56.03318114",
    "w_deg": "8.456068198",
    "node_deg": "85.80950568",
    "q_au_1": "1.208610867",
    "q_au_2": "45.97",
    "p_yr": "114.56",
    "moid_au": "0.230296",
    "ref": "3",
    "object_name": "C/1906 V1 (Thiele)"
  },
  {
    "object": "C/1921 H1 (Dubiago)",
    "epoch_tdb": "22841",
    "tp_tdb": "2422813.844",
    "e": "0.8477830042",
    "i_deg": "22.07043089",
    "w_deg": "96.44867266",
    "node_deg": "68.21958086",
    "q_au_1": "1.098349017",
    "q_au_2": "13.33",
    "p_yr": "19.38",
    "moid_au": "0.367524",
    "ref": "3",
    "object_name": "C/1921 H1 (Dubiago)"
  },
  {
    "object": "D/1978 R1 (Haneda-Campos)",
    "epoch_tdb": "43773",
    "tp_tdb": "2443790.992",
    "e": "0.6652319399",
    "i_deg": "5.947329619",
    "w_deg": "240.4622187",
    "node_deg": "132.2535138",
    "q_au_1": "1.101417705",
    "q_au_2": "5.48",
    "p_yr": "5.97",
    "moid_au": "0.13492",
    "ref": "7",
    "object_name": "D/1978 R1 (Haneda-Campos)"
  },
  {
    "object": "C/1991 L3 (Levy)",
    "epoch_tdb": "48547",
    "tp_tdb": "2448445.695",
    "e": "0.9288178631",
    "i_deg": "19.19030997",
    "w_deg": "41.47119826",
    "node_deg": "329.4309837",
    "q_au_1": "0.9825594709",
    "q_au_2": "26.62",
    "p_yr": "51.28",
    "moid_au": "0.074988",
    "ref": "9",
    "object_name": "C/1991 L3 (Levy)"
  },
  {
    "object": "P/1999 J6 (SOHO)",
    "epoch_tdb": "53580",
    "tp_tdb": "2453318.081",
    "e": "0.9841773128",
    "i_deg": "26.6131418",
    "w_deg": "21.97680319",
    "node_deg": "81.61378154",
    "q_au_1": "0.04905822804",
    "q_au_2": "6.15",
    "p_yr": "5.46",
    "moid_au": "0.010175",
    "a1_au_d_2": "0.000000395",
    "a2_au_d_2": "-0.00000000189",
    "ref": "6",
    "object_name": "P/1999 J6 (SOHO)"
  },
  {
    "object": "P/1999 R1 (SOHO)",
    "epoch_tdb": "53089",
    "tp_tdb": "2452891.317",
    "e": "0.9774091221",
    "i_deg": "13.67622884",
    "w_deg": "43.68972274",
    "node_deg": "4.932374957",
    "q_au_1": "0.0570126508",
    "q_au_2": "4.99",
    "p_yr": "4.01",
    "moid_au": "0.076579",
    "ref": "3",
    "object_name": "P/1999 R1 (SOHO)"
  },
  {
    "object": "P/1999 RO28 (LONEOS)",
    "epoch_tdb": "51441",
    "tp_tdb": "2451453.843",
    "e": "0.6507867331",
    "i_deg": "8.191041706",
    "w_deg": "219.8588263",
    "node_deg": "148.4502956",
    "q_au_1": "1.231758765",
    "q_au_2": "5.82",
    "p_yr": "6.62",
    "moid_au": "0.247638",
    "ref": "15",
    "object_name": "P/1999 RO28 (LONEOS)"
  },
  {
    "object": "C/1999 X3 (SOHO)",
    "epoch_tdb": "53074",
    "tp_tdb": "2453076.829",
    "e": "0.9816398786",
    "i_deg": "6.337569475",
    "w_deg": "353.7341335",
    "node_deg": "323.490768",
    "q_au_1": "0.04795123414",
    "q_au_2": "5.18",
    "p_yr": "4.22",
    "moid_au": "0.031348",
    "ref": "5",
    "object_name": "C/1999 X3 (SOHO)"
  },
  {
    "object": "C/2001 OG108 (LONEOS)",
    "epoch_tdb": "52248",
    "tp_tdb": "2452348.706",
    "e": "0.925259301",
    "i_deg": "80.24505505",
    "w_deg": "116.4195121",
    "node_deg": "10.5552957",
    "q_au_1": "0.9940478795",
    "q_au_2": "25.61",
    "p_yr": "48.5",
    "moid_au": "0.300836",
    "ref": "40",
    "object_name": "C/2001 OG108 (LONEOS)"
  },
  {
    "object": "C/2001 W2 (BATTERS)",
    "epoch_tdb": "52249",
    "tp_tdb": "2452267.418",
    "e": "0.9413734582",
    "i_deg": "115.9130897",
    "w_deg": "142.0857566",
    "node_deg": "113.3558968",
    "q_au_1": "1.051064641",
    "q_au_2": "34.81",
    "p_yr": "75.91",
    "moid_au": "0.145327",
    "ref": "22",
    "object_name": "C/2001 W2 (BATTERS)"
  },
  {
    "object": "C/2002 R5 (SOHO)",
    "epoch_tdb": "53575",
    "tp_tdb": "2452522.684",
    "e": "0.985261262",
    "i_deg": "14.12062881",
    "w_deg": "45.7237989",
    "node_deg": "13.21421538",
    "q_au_1": "0.04740160134",
    "q_au_2": "6.38",
    "p_yr": "5.77",
    "moid_au": "0.094044",
    "ref": "3",
    "object_name": "C/2002 R5 (SOHO)"
  },
  {
    "object": "P/2002 S7 (SOHO)",
    "epoch_tdb": "53592",
    "tp_tdb": "2452538.404",
    "e": "0.9848618681",
    "i_deg": "13.57497488",
    "w_deg": "52.15494545",
    "node_deg": "50.19576776",
    "q_au_1": "0.04879857033",
    "q_au_2": "6.4",
    "p_yr": "5.79",
    "moid_au": "0.114603",
    "ref": "3",
    "object_name": "P/2002 S7 (SOHO)"
  },
  {
    "object": "P/2003 T12 (SOHO)",
    "epoch_tdb": "55968",
    "tp_tdb": "2455952.953",
    "e": "0.7764221763",
    "i_deg": "11.4758078",
    "w_deg": "217.6773881",
    "node_deg": "176.4650989",
    "q_au_1": "0.5748399462",
    "q_au_2": "4.57",
    "p_yr": "4.12",
    "moid_au": "0.154232",
    "ref": "5",
    "object_name": "P/2003 T12 (SOHO)"
  },
  {
    "object": "P/2005 T4 (SWAN)",
    "epoch_tdb": "53667",
    "tp_tdb": "2453654.037",
    "e": "0.930297059",
    "i_deg": "160.0361801",
    "w_deg": "41.44353425",
    "node_deg": "25.42228788",
    "q_au_1": "0.6493994391",
    "q_au_2": "17.98",
    "p_yr": "28.44",
    "moid_au": "0.157261",
    "ref": "6",
    "object_name": "P/2005 T4 (SWAN)"
  },
  {
    "object": "P/2005 W4 (SOHO)",
    "epoch_tdb": "54203",
    "tp_tdb": "2453697.986",
    "e": "0.9822675576",
    "i_deg": "14.5962755",
    "w_deg": "49.40000591",
    "node_deg": "53.00487076",
    "q_au_1": "0.05398035994",
    "q_au_2": "6.03",
    "p_yr": "5.31",
    "moid_au": "0.107655",
    "a2_au_d_2": "-0.0000000000746",
    "ref": "2",
    "object_name": "P/2005 W4 (SOHO)"
  },
  {
    "object": "P/2006 HR30 (Siding Spring)",
    "epoch_tdb": "54046",
    "tp_tdb": "2454102.782",
    "e": "0.8431183899",
    "i_deg": "31.88449913",
    "w_deg": "117.4138753",
    "node_deg": "309.9521628",
    "q_au_1": "1.226427704",
    "q_au_2": "14.41",
    "p_yr": "21.86",
    "moid_au": "0.452907",
    "ref": "87",
    "object_name": "P/2006 HR30 (Siding Spring)"
  },
  {
    "object": "P/2007 T2 (Kowalski)",
    "epoch_tdb": "54417",
    "tp_tdb": "2454362.521",
    "e": "0.7748340855",
    "i_deg": "9.895275619",
    "w_deg": "358.5515716",
    "node_deg": "3.994965765",
    "q_au_1": "0.695862748",
    "q_au_2": "5.49",
    "p_yr": "5.43",
    "moid_au": "0.156276",
    "ref": "17",
    "object_name": "P/2007 T2 (Kowalski)"
  },
  {
    "object": "P/2008 Y1 (Boattini)",
    "epoch_tdb": "54846",
    "tp_tdb": "2454887.597",
    "e": "0.7348817591",
    "i_deg": "8.805148715",
    "w_deg": "162.3648341",
    "node_deg": "259.7096838",
    "q_au_1": "1.27197954",
    "q_au_2": "8.32",
    "p_yr": "10.51",
    "moid_au": "0.289617",
    "ref": "13",
    "object_name": "P/2008 Y1 (Boattini)"
  },
  {
    "object": "P/2008 Y12 (SOHO)",
    "epoch_tdb": "55476",
    "tp_tdb": "2454822.977",
    "e": "0.9787495375",
    "i_deg": "23.34562318",
    "w_deg": "146.6141611",
    "node_deg": "312.5525907",
    "q_au_1": "0.06541368648",
    "q_au_2": "6.09",
    "p_yr": "5.4",
    "moid_au": "0.044832",
    "ref": "4",
    "object_name": "P/2008 Y12 (SOHO)"
  },
  {
    "object": "P/2009 L2 (Yang-Gao)",
    "epoch_tdb": "55023",
    "tp_tdb": "2454973.255",
    "e": "0.6209298159",
    "i_deg": "16.15851413",
    "w_deg": "346.954318",
    "node_deg": "259.3047568",
    "q_au_1": "1.296125756",
    "q_au_2": "5.54",
    "p_yr": "6.32",
    "moid_au": "0.287493",
    "ref": "20",
    "object_name": "P/2009 L2 (Yang-Gao)"
  },
  {
    "object": "P/2009 WX51 (Catalina)",
    "epoch_tdb": "55175",
    "tp_tdb": "2455227.575",
    "e": "0.7402970341",
    "i_deg": "9.592585691",
    "w_deg": "118.0163889",
    "node_deg": "31.75826735",
    "q_au_1": "0.7999555439",
    "q_au_2": "5.36",
    "p_yr": "5.41",
    "moid_au": "0.009227",
    "ref": "19",
    "object_name": "P/2009 WX51 (Catalina)"
  },
  {
    "object": "C/2010 L5 (WISE)",
    "epoch_tdb": "55379",
    "tp_tdb": "2455309.645",
    "e": "0.9037561917",
    "i_deg": "147.051681",
    "w_deg": "214.729745",
    "node_deg": "206.4730991",
    "q_au_1": "0.7909008329",
    "q_au_2": "15.64",
    "p_yr": "23.56",
    "moid_au": "0.113609",
    "ref": "6",
    "object_name": "C/2010 L5 (WISE)"
  },
  {
    "object": "P/2011 NO1 (Elenin)",
    "epoch_tdb": "55758",
    "tp_tdb": "2455582.092",
    "e": "0.776521252",
    "i_deg": "15.27233838",
    "w_deg": "263.6169668",
    "node_deg": "296.0964602",
    "q_au_1": "1.242925561",
    "q_au_2": "9.88",
    "p_yr": "13.12",
    "moid_au": "0.380652",
    "ref": "8",
    "object_name": "P/2011 NO1 (Elenin)"
  },
  {
    "object": "C/2011 S2 (Kowalski)",
    "epoch_tdb": "55857",
    "tp_tdb": "2455860.848",
    "e": "0.9316035445",
    "i_deg": "17.57253024",
    "w_deg": "192.1899464",
    "node_deg": "288.0701102",
    "q_au_1": "1.115118144",
    "q_au_2": "31.49",
    "p_yr": "65.83",
    "moid_au": "0.13779",
    "ref": "16",
    "object_name": "C/2011 S2 (Kowalski)"
  },
  {
    "object": "P/2012 NJ (La Sagra)",
    "epoch_tdb": "56158",
    "tp_tdb": "2456091.59",
    "e": "0.8480618337",
    "i_deg": "84.37545937",
    "w_deg": "338.4139159",
    "node_deg": "315.7631836",
    "q_au_1": "1.291890069",
    "q_au_2": "15.71",
    "p_yr": "24.79",
    "moid_au": "0.315258",
    "ref": "31",
    "object_name": "P/2012 NJ (La Sagra)"
  },
  {
    "object": "P/2013 CU129 (PANSTARRS)",
    "epoch_tdb": "56475",
    "tp_tdb": "2456511.432",
    "e": "0.7221050362",
    "i_deg": "12.14763226",
    "w_deg": "211.9722717",
    "node_deg": "46.20979967",
    "q_au_1": "0.800147691",
    "q_au_2": "4.96",
    "p_yr": "4.89",
    "moid_au": "0.085523",
    "ref": "38",
    "object_name": "P/2013 CU129 (PANSTARRS)"
  },
  {
    "object": "P/2013 TL117 (Lemmon)",
    "epoch_tdb": "56674",
    "tp_tdb": "2456706.719",
    "e": "0.6899137951",
    "i_deg": "9.365636389",
    "w_deg": "112.199132",
    "node_deg": "3.362021948",
    "q_au_1": "1.117672075",
    "q_au_2": "6.09",
    "p_yr": "6.84",
    "moid_au": "0.20162",
    "ref": "45",
    "object_name": "P/2013 TL117 (Lemmon)"
  },
  {
    "object": "P/2014 U2 (Kowalski)",
    "epoch_tdb": "56974",
    "tp_tdb": "2456937.65",
    "e": "0.6029487638",
    "i_deg": "7.495593453",
    "w_deg": "35.25220977",
    "node_deg": "356.1806792",
    "q_au_1": "1.164298274",
    "q_au_2": "4.7",
    "p_yr": "5.02",
    "moid_au": "0.183671",
    "ref": "10",
    "object_name": "P/2014 U2 (Kowalski)"
  },
  {
    "object": "P/2015 A3 (PANSTARRS)",
    "epoch_tdb": "57040",
    "tp_tdb": "2457076.25",
    "e": "0.8481676984",
    "i_deg": "172.5137446",
    "w_deg": "249.5086139",
    "node_deg": "277.0821425",
    "q_au_1": "1.15385721",
    "q_au_2": "14.05",
    "p_yr": "20.95",
    "moid_au": "0.204591",
    "ref": "1",
    "object_name": "P/2015 A3 (PANSTARRS)"
  },
  {
    "object": "C/2015 D1 (SOHO)",
    "epoch_tdb": "57073",
    "tp_tdb": "2457073.248",
    "e": "0.9942677736",
    "i_deg": "69.61628937",
    "w_deg": "234.9530166",
    "node_deg": "95.88138486",
    "q_au_1": "0.02832105639",
    "q_au_2": "9.85",
    "p_yr": "10.98",
    "moid_au": "0.515916",
    "a1_au_d_2": "0.00000125",
    "ref": "3",
    "object_name": "C/2015 D1 (SOHO)"
  },
  {
    "object": "C/2015 F2 (Polonia)",
    "epoch_tdb": "57110",
    "tp_tdb": "2457141.343",
    "e": "0.9623991817",
    "i_deg": "28.66103039",
    "w_deg": "352.0587584",
    "node_deg": "262.4816139",
    "q_au_1": "1.209544218",
    "q_au_2": "63.13",
    "p_yr": "182.45",
    "moid_au": "0.198704",
    "ref": "6",
    "object_name": "C/2015 F2 (Polonia)"
  },
  {
    "object": "C/2015 F5 (SWAN-Xingming)",
    "epoch_tdb": "57124",
    "tp_tdb": "2457109.599",
    "e": "0.9777341146",
    "i_deg": "149.2569445",
    "w_deg": "13.39233003",
    "node_deg": "287.7390236",
    "q_au_1": "0.3460051321",
    "q_au_2": "30.73",
    "p_yr": "61.26",
    "moid_au": "0.441413",
    "ref": "2",
    "object_name": "C/2015 F5 (SWAN-Xingming)"
  }
]`,S_=JSON.parse(M_);function b_(i){return S_.find(e=>e.object_name===i)}function E_(i,e){const t=parseFloat(i.q_au_1),n=parseFloat(i.e),r=parseFloat(i.i_deg)*(Math.PI/180),a=parseFloat(i.w_deg)*(Math.PI/180),s=parseFloat(i.node_deg)*(Math.PI/180),o=parseFloat(i.tp_tdb),c=t/(1-n),h=parseFloat(i.p_yr)*365.25,_=2*Math.PI/h*(e-o)%(2*Math.PI),v=_<0?_+2*Math.PI:_;let M=v;for(let O=0;O<100;O++){const P=(M-n*Math.sin(M)-v)/(1-n*Math.cos(M));if(M-=P,Math.abs(P)<1e-12)break}const u=c*(Math.cos(M)-n),d=c*Math.sqrt(1-n*n)*Math.sin(M),y=u*(Math.cos(a)*Math.cos(s)-Math.sin(a)*Math.sin(s)*Math.cos(r))-d*(Math.sin(a)*Math.cos(s)+Math.cos(a)*Math.sin(s)*Math.cos(r)),b=u*(Math.sin(a)*Math.cos(s)+Math.cos(a)*Math.sin(s)*Math.cos(r))+d*(Math.cos(a)*Math.cos(r)*Math.sin(s)-Math.sin(a)*Math.sin(r)),T=d*Math.sin(r);return{x:Number(y.toFixed(12)),y:Number(b.toFixed(12)),z:Number(T.toFixed(12))}}let wt,di,si,pn,xs=!1,gn,Sc=1;const jt=new r_,y_=new i_,T_=y_.load(["https://i.imgur.com/gLGNnkp.jpeg","https://i.imgur.com/gLGNnkp.jpeg","https://i.imgur.com/gLGNnkp.jpeg","https://i.imgur.com/gLGNnkp.jpeg","https://i.imgur.com/gLGNnkp.jpeg","https://i.imgur.com/gLGNnkp.jpeg"]),Io=jt.load("https://i.imgur.com/zU5oOjt.jpeg"),A_=jt.load("https://i.imgur.com/TJO6Te3.jpeg"),w_=jt.load("https://i.imgur.com/xeaPIjD.jpeg"),P_=jt.load("https://i.imgur.com/vflkkqF.jpeg"),R_=jt.load("https://i.imgur.com/U6upjrv.jpeg"),C_=jt.load("https://i.imgur.com/4APG00k.jpeg"),L_=jt.load("https://i.imgur.com/YKw0m4x.jpeg"),D_=jt.load("https://i.imgur.com/olpgGMo.jpeg"),I_=jt.load("https://i.imgur.com/pycXdLM.jpeg");jt.load("https://i.imgur.com/YNsmmHV.jpeg");function U_(){wt=new Kp,wt.background=T_,di=new Ct(75,window.innerWidth/window.innerHeight,.1,1e3),si=new Yp,si.setSize(window.innerWidth,window.innerHeight),document.getElementById("plot").appendChild(si.domElement),pn=new o_(di,si.domElement),pn.enableDamping=!0,pn.dampingFactor=.1,pn.enablePan=!0,pn.minDistance=1,pn.maxDistance=300,di.position.set(0,2,5),pn.update(),bc()}function bc(){if(requestAnimationFrame(bc),xs&&gn){gn.setDate(gn.getDate()+Sc);const i=_c(gn);document.getElementById("jd").innerHTML=i,document.getElementById("gd").innerHTML=gn,Ec(i),F_(i)}pn.update(),si.render(wt,di)}function N_(i){const e=document.createElement("canvas"),t=e.getContext("2d");t.font="24px Arial",t.fillStyle="white",t.fillText(i,0,24);const n=new pt(e);n.needsUpdate=!0;const r=new hc({map:n}),a=new $p(r);return a.scale.set(1,.5,2),a}function O_(i){const e=[];for(let o=0;o<36e4;o++){o+=1;const c=mc(2451545+o*365.25/36e4,i),l=gc(c,i),h=vc(c,l),f=xc(h,i),p=Mc(h,i,f);e.push(new D(p[0],p[1],p[2]))}const n=new Wt().setFromPoints(e),r=[];for(let o=0;o<e.length-1;o++)r.push(o,o+1);n.setIndex(r);const a=new e_({color:11184810,dashSize:100,gapSize:30}),s=new Qp(n,a);return s.computeLineDistances(),s}function Ec(i){const t=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"].map(n=>{const r=mc(i,n),a=gc(r,n),s=vc(r,a),o=xc(s,n),c=Mc(s,n,o);return{name:n,coords:c}});z_(t)}function F_(i){const t=["1P/Halley","P/2004 R1 (McNaught)","P/2008 S1 (Catalina-McNaught)","2P/Encke","3D/Biela"].map(n=>{const r=b_(n);if(r){const a=E_(r,i);return{name:n,coords:a}}}).filter(Boolean);B_(t)}function B_(i){wt.children.filter(t=>t.userData&&t.userData.type==="comet").forEach(t=>wt.remove(t)),i.forEach(({name:t,coords:n})=>{const r=new Oi(.02,32,32),a=new Ni({color:16777215}),s=new It(r,a);s.position.set(n[0],n[1],n[2]),s.userData={type:"comet"},wt.add(s)})}function z_(i){for(;wt.children.length>1;)wt.remove(wt.children[1]);const e={Mercury:A_,Venus:w_,Earth:P_,Mars:R_,Jupiter:C_,Saturn:L_,Uranus:D_,Neptune:I_,Sun:Io},t=new Oi(.1,16,16),n=new Ni({map:Io}),r=new It(t,n);r.position.set(0,0,0),wt.add(r),i.forEach(({name:a,coords:s})=>{if(["Mercury","Venus","Earth"].includes(a)){const f=O_(a);wt.add(f)}const o=new Oi(.05,32,32),c=new Ni({map:e[a]}),l=new It(o,c);l.position.set(s[0],s[1],s[2]),wt.add(l);const h=N_(a);h.position.set(s[0]+.25,s[1]+0,s[2]+.01),l.userData.label=h,wt.add(h)})}document.getElementById("calculateButton").addEventListener("click",()=>{const i=document.getElementById("dateInput").value;if(i){gn=new Date(i);const e=_c(gn);document.getElementById("jd").innerHTML=e,document.getElementById("gd").innerHTML=gn.toDateString(),Ec(e)}});document.getElementById("playButton").addEventListener("click",()=>{xs=!0});document.getElementById("pauseButton").addEventListener("click",()=>{xs=!1});document.getElementById("speedSlider").addEventListener("input",i=>{Sc=parseInt(i.target.value)});window.addEventListener("resize",()=>{di.aspect=window.innerWidth/window.innerHeight,di.updateProjectionMatrix(),si.setSize(window.innerWidth,window.innerHeight)});U_();
