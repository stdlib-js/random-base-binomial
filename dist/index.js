"use strict";var b=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var H=b(function(_r,M){
var or=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,vr=require('@stdlib/assert-is-probability/dist').isPrimitive,z=require('@stdlib/error-tools-fmtprodmsg/dist');function lr(e,r){return or(e)?vr(r)?null:new TypeError(z('0nz73',r)):new TypeError(z('0nz4b',r));}M.exports=lr
});var X=b(function(Fr,W){
function fr(e,r,t){var l=0,u;for(u=0;u<r;u++)e()<=t&&(l+=1);return l}W.exports=fr
});var B=b(function(Gr,k){
var cr=require('@stdlib/math-base-special-pow/dist'),gr=1/12,mr=1/360,pr=1/1260;function qr(e){var r;switch(e){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return e+=1,r=cr(e,2),(gr-(mr-pr/r)/r)/e}}k.exports=qr
});var D=b(function(Ir,C){
var G=require('@stdlib/math-base-special-floor/dist'),dr=require('@stdlib/math-base-special-signum/dist'),br=require('@stdlib/math-base-special-sqrt/dist'),I=require('@stdlib/math-base-special-abs/dist'),L=require('@stdlib/math-base-special-ln/dist'),P=B(),hr=1/6;function yr(e,r,t){var l,u,g,d,h,y,w,N,O,f,E,m,a,s,j,A,V,p,i,o,_,q,F,v,n,S;for(o=G((r+1)*t),w=r-o+1,_=1-t,q=t/_,N=(r+1)*q,d=r*t*_,g=br(d),s=1.15+2.53*g,a=-.0873+.0248*s+.01*t,j=r*t+.5,l=(2.83+5.1/s)*g,m=.92-4.2/s,u=.86*m,V=(o+.5)*L((o+1)/(q*w)),V+=P(o)+P(r-o);;){if(n=e(),n<=u)return v=n/m-.43,q=v*(2*a/(.5-I(v))+s)+j,G(q);if(n>=m?v=e()-.5:(v=n/m-.93,v=dr(v)*.5-v,n=m*e()),O=.5-I(v),i=G(v*(2*a/O+s)+j),!(i<0||i>r))if(n=n*l/(a/(O*O)+s),f=I(i-o),f>15){if(n=L(n),h=f/d,y=(f/3+.625)*f,y+=hr,y/=d,h*=y+.5,F=-(f*f)/(2*d),n<F-h||n<=F+h&&(E=r-i+1,S=V+(r+1)*L(w/E),S+=(i+.5)*L(E*q/(i+1)),S+=-(P(i)+P(r-i)),n<=S))return i}else{if(A=1,o<i)for(p=o;p<=i;p++)A*=N/p-q;else if(o>i)for(p=i;p<=o;p++)n*=N/p-q;if(n<=A)return i}}}C.exports=yr
});var U=b(function(Jr,Q){
var Or=X(),wr=D();function K(e,r,t){return t>.5?r-K(e,r,1-t):r*t<10?Or(e,r,t):wr(e,r,t)}Q.exports=K
});var J=b(function(zr,ir){
var c=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),Y=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),Z=require('@stdlib/assert-is-plain-object/dist'),$=require('@stdlib/assert-is-function/dist'),rr=require('@stdlib/assert-has-own-property/dist'),er=require('@stdlib/utils-constant-function/dist'),Nr=require('@stdlib/utils-noop/dist'),tr=require('@stdlib/math-base-assert-is-nan/dist'),Er=require('@stdlib/math-base-assert-is-positive-integer/dist'),Sr=require('@stdlib/math-base-assert-is-probability/dist'),R=require('@stdlib/random-base-mt19937/dist').factory,Lr=require('@stdlib/array-to-json/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist'),Pr=H(),ar=U();function xr(){var e,r,t,l,u,g;if(arguments.length===0)r=R();else if(arguments.length===1){if(e=arguments[0],!Z(e))throw new TypeError(T('0nz2V',e));if(rr(e,"prng")){if(!$(e.prng))throw new TypeError(T('0nz6u',"prng",e.prng));r=e.prng}else r=R(e)}else{if(u=arguments[0],g=arguments[1],l=Pr(u,g),l)throw l;if(arguments.length>2){if(e=arguments[2],!Z(e))throw new TypeError(T('0nz2V',e));if(rr(e,"prng")){if(!$(e.prng))throw new TypeError(T('0nz6u',"prng",e.prng));r=e.prng}else r=R(e)}else r=R()}return u===void 0?t=m:t=E,c(t,"NAME","binomial"),e&&e.prng?(c(t,"seed",null),c(t,"seedLength",null),Y(t,"state",er(null),Nr),c(t,"stateLength",null),c(t,"byteLength",null),c(t,"toJSON",er(null)),c(t,"PRNG",r)):(x(t,"seed",d),x(t,"seedLength",h),Y(t,"state",N,O),x(t,"stateLength",y),x(t,"byteLength",w),c(t,"toJSON",f),c(t,"PRNG",r),r=r.normalized),t;function d(){return r.seed}function h(){return r.seedLength}function y(){return r.stateLength}function w(){return r.byteLength}function N(){return r.state}function O(a){r.state=a}function f(){var a={};return a.type="PRNG",a.name=t.NAME,a.state=Lr(r.state),u===void 0?a.params=[]:a.params=[u,g],a}function E(){return ar(r,u,g)}function m(a,s){return tr(a)||tr(s)||!Er(a)||!Sr(s)?NaN:ar(r,a,s)}}ir.exports=xr
});var ur=b(function(Mr,nr){
var Rr=J(),Tr=Rr();nr.exports=Tr
});var jr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),sr=ur(),Ar=J();jr(sr,"factory",Ar);module.exports=sr;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
