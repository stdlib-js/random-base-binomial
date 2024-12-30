// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-integer@v0.3.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-probability@v0.2.3-esm/index.mjs";import{factory as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.3.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import{isPrimitive as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-signum@v0.2.2-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";var w=1/12,L=1/360,N=1/1260;function E(e){var t;switch(e){case 0:return.08106146679532726;case 1:return.04134069595540929;case 2:return.02767792568499834;case 3:return.02079067210376509;case 4:return.01664469118982119;case 5:return.01387612882307075;case 6:return.01189670994589177;case 7:return.01041126526197209;case 8:return.009255462182712733;case 9:return.00833056343336287;default:return t=y(e+=1,2),(w-(L-N/t)/t)/e}}var z=1/6;function T(e,t,s){return s>.5?t-T(e,t,1-s):t*s<10?function(e,t,s){var r,n=0;for(r=0;r<t;r++)e()<=s&&(n+=1);return n}(e,t,s):function(e,t,s){var r,n,i,o,m,d,l,a,p,h,f,j,u,y,w,L,N,T,P,G,R,A,J,M,O,S;for(l=t-(G=c((t+1)*s))+1,a=(t+1)*(A=s/(R=1-s)),u=.0248*(y=1.15+2.53*(i=g(o=t*s*R)))-.0873+.01*s,w=t*s+.5,r=(2.83+5.1/y)*i,n=.86*(j=.92-4.2/y),N=(G+.5)*x((G+1)/(A*l)),N+=E(G)+E(t-G);;){if((O=e())<=n)return A=(M=O/j-.43)*(2*u/(.5-b(M))+y)+w,c(A);if(O>=j?M=e()-.5:(M=.5*v(M=O/j-.93)-M,O=j*e()),p=.5-b(M),!((P=c(M*(2*u/p+y)+w))<0||P>t))if(O=O*r/(u/(p*p)+y),(h=b(P-G))>15){if(O=x(O),m=h/o,d=(h/3+.625)*h,d+=z,O<(J=-h*h/(2*o))-(m*=.5+(d/=o)))return P;if(O<=J+m&&(S=N+(t+1)*x(l/(f=t-P+1)),S+=(P+.5)*x(f*A/(P+1)),O<=(S+=-(E(P)+E(t-P)))))return P}else{if(L=1,G<P)for(T=G;T<=P;T++)L*=a/T-A;else if(G>P)for(T=P;T<=G;T++)O*=a/T-A;if(O<=L)return P}}}(e,t,s)}function P(){var c,v,g,b,x,y;if(0===arguments.length)v=p();else if(1===arguments.length){if(!r(c=arguments[0]))throw new TypeError(f("0nz2V",c));if(i(c,"prng")){if(!n(c.prng))throw new TypeError(f("0nz6u","prng",c.prng));v=c.prng}else v=p(c)}else{if(b=function(e,t){return j(e)?u(t)?null:new TypeError(f("0nz73",t)):new TypeError(f("0nz4b",t))}(x=arguments[0],y=arguments[1]))throw b;if(arguments.length>2){if(!r(c=arguments[2]))throw new TypeError(f("0nz2V",c));if(i(c,"prng")){if(!n(c.prng))throw new TypeError(f("0nz6u","prng",c.prng));v=c.prng}else v=p(c)}else v=p()}return e(g=void 0===x?function(e,t){if(d(e)||d(t)||!l(e)||!a(t))return NaN;return T(v,e,t)}:function(){return T(v,x,y)},"NAME","binomial"),c&&c.prng?(e(g,"seed",null),e(g,"seedLength",null),s(g,"state",o(null),m),e(g,"stateLength",null),e(g,"byteLength",null),e(g,"toJSON",o(null)),e(g,"PRNG",v)):(t(g,"seed",(function(){return v.seed})),t(g,"seedLength",(function(){return v.seedLength})),s(g,"state",(function(){return v.state}),(function(e){v.state=e})),t(g,"stateLength",(function(){return v.stateLength})),t(g,"byteLength",(function(){return v.byteLength})),e(g,"toJSON",(function(){var e={type:"PRNG"};e.name=g.NAME,e.state=h(v.state),e.params=void 0===x?[]:[x,y];return e})),e(g,"PRNG",v),v=v.normalized),g}var G=P();e(G,"factory",P);export{G as default,P as factory};
//# sourceMappingURL=index.mjs.map
