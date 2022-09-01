// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-integer@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-probability@esm/index.mjs";import{factory as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-signum@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";function w(e,t){return j(e)?c(t)?null:new TypeError(f("0Ot7L",t)):new TypeError(f("0Ot4o",t))}function L(e){var t;switch(e){case 0:return.08106146679532726;case 1:return.04134069595540929;case 2:return.02767792568499834;case 3:return.02079067210376509;case 4:return.01664469118982119;case 5:return.01387612882307075;case 6:return.01189670994589177;case 7:return.01041126526197209;case 8:return.009255462182712733;case 9:return.00833056343336287;default:return(.08333333333333333-(.002777777777777778-.0007936507936507937/(t=y(e+=1,2)))/t)/e}}function N(e,t,s){return s>.5?t-N(e,t,1-s):t*s<10?function(e,t,s){var r,n=0;for(r=0;r<t;r++)e()<=s&&(n+=1);return n}(e,t,s):function(e,t,s){var r,n,i,o,m,d,l,a,p,h,f,j,c,y,w,N,E,O,T,M,P,G,R,A,J,S;for(l=t-(M=u((t+1)*s))+1,a=(t+1)*(G=s/(P=1-s)),c=.0248*(y=1.15+2.53*(i=b(o=t*s*P)))-.0873+.01*s,w=t*s+.5,r=(2.83+5.1/y)*i,n=.86*(j=.92-4.2/y),E=(M+.5)*x((M+1)/(G*l)),E+=L(M)+L(t-M);;){if((J=e())<=n)return G=(A=J/j-.43)*(2*c/(.5-v(A))+y)+w,u(G);if(J>=j?A=e()-.5:(A=.5*g(A=J/j-.93)-A,J=j*e()),p=.5-v(A),!((T=u(A*(2*c/p+y)+w))<0||T>t))if(J=J*r/(c/(p*p)+y),(h=v(T-M))>15){if(m=h/o,d=(h/3+.625)*h,d+=.16666666666666666,(J=x(J))<(R=-h*h/(2*o))-(m*=.5+(d/=o)))return T;if(J<=R+m&&(S=E+(t+1)*x(l/(f=t-T+1)),S+=(T+.5)*x(f*G/(T+1)),J<=(S+=-(L(T)+L(t-T)))))return T}else{if(N=1,M<T)for(O=M;O<=T;O++)N*=a/O-G;else if(M>T)for(O=T;O<=M;O++)J*=a/O-G;if(J<=N)return T}}}(e,t,s)}function E(){var j,c,u,g,b,v;if(0===arguments.length)c=p();else if(1===arguments.length){if(!r(j=arguments[0]))throw new TypeError(f("0Ot2h",j));if(i(j,"prng")){if(!n(j.prng))throw new TypeError(f("0Ot7M","prng",j.prng));c=j.prng}else c=p(j)}else{if(g=w(b=arguments[0],v=arguments[1]))throw g;if(arguments.length>2){if(!r(j=arguments[2]))throw new TypeError(f("0Ot2h",j));if(i(j,"prng")){if(!n(j.prng))throw new TypeError(f("0Ot7M","prng",j.prng));c=j.prng}else c=p(j)}else c=p()}return e(u=void 0===b?G:P,"NAME","binomial"),j&&j.prng?(e(u,"seed",null),e(u,"seedLength",null),s(u,"state",o(null),m),e(u,"stateLength",null),e(u,"byteLength",null),e(u,"toJSON",o(null)),e(u,"PRNG",c)):(t(u,"seed",x),t(u,"seedLength",y),s(u,"state",O,T),t(u,"stateLength",L),t(u,"byteLength",E),e(u,"toJSON",M),e(u,"PRNG",c),c=c.normalized),u;function x(){return c.seed}function y(){return c.seedLength}function L(){return c.stateLength}function E(){return c.byteLength}function O(){return c.state}function T(e){c.state=e}function M(){var e={type:"PRNG"};return e.name=u.NAME,e.state=h(c.state),e.params=void 0===b?[]:[b,v],e}function P(){return N(c,b,v)}function G(e,t){return d(e)||d(t)||!l(e)||!a(t)?NaN:N(c,e,t)}}var O=E();e(O,"factory",E);export{O as default,E as factory};
//# sourceMappingURL=index.mjs.map
