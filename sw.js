if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>i(e,r),c={module:{uri:r},exports:l,require:o};s[r]=Promise.all(a.map((e=>c[e]||o(e)))).then((e=>(n(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"f6a0ac81d1bbbaa440b5b5eaf6a6e5f7"},{url:"android-chrome-512x512.png",revision:"023bd076d1ea46aa8c8eecfc1446d4d5"},{url:"apple-touch-icon.png",revision:"133694c92f0960db3d157269e4edf8f4"},{url:"assets/alarm-d3fb8358.png",revision:null},{url:"assets/HomeView-ae02e1f7.js",revision:null},{url:"assets/index-195dfc16.js",revision:null},{url:"assets/index-6385dde1.css",revision:null},{url:"assets/list-9e2f7b0a.js",revision:null},{url:"assets/ListView-7653d3f8.css",revision:null},{url:"assets/ListView-d816ca13.js",revision:null},{url:"assets/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"assets/star-sky-cut-715983ae.jpg",revision:null},{url:"favicon-16x16.png",revision:"cbcbd7fc4cb3a46d5e624350a5c09d0e"},{url:"favicon-32x32.png",revision:"e606d864ab6e25e68ab9de2d32246b02"},{url:"favicon.ico",revision:"31bba3343c5743e559ac5aebda49c23b"},{url:"index.html",revision:"092e67c775c32f4ef30e00007f533141"},{url:"mstile-150x150.png",revision:"f32f36e9daa23cdc2412b78c75790b3b"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"2ba01505e6177eaefa3077d5b1884028"},{url:"splashscreens/ipad_splash.png",revision:"731d54c1fdf25e52d64c688ca8c98ebd"},{url:"splashscreens/ipadpro1_splash.png",revision:"444dcea3cade8662d08979f3e8bb948b"},{url:"splashscreens/ipadpro2_splash.png",revision:"db5c481ef3a63ad7f6ff8fc153c19fb2"},{url:"splashscreens/ipadpro3_splash.png",revision:"15fd8bbc1100258d952fea0487ea340f"},{url:"splashscreens/iphone5_splash.png",revision:"da0b11b3a738e4694b605a686beaf170"},{url:"splashscreens/iphone6_splash.png",revision:"aba2b569df12bb76a23b2f3308378b93"},{url:"splashscreens/iphoneplus_splash.png",revision:"a327ea16ac79b8c5b1d6849ae6afd33a"},{url:"splashscreens/iphonex_splash.png",revision:"d3e525bea40c4d80e69a6c9b9bd908da"},{url:"splashscreens/iphonexr_splash.png",revision:"9ffee4635bacad131b3ecb2f5f5c4f3a"},{url:"splashscreens/iphonexsmax_splash.png",revision:"b55d9d525a5a44f8f25504a6012196bc"},{url:"./android-chrome-192x192.png",revision:"f6a0ac81d1bbbaa440b5b5eaf6a6e5f7"},{url:"./android-chrome-512x512.png",revision:"023bd076d1ea46aa8c8eecfc1446d4d5"},{url:"manifest.webmanifest",revision:"70bffbf73a5636e7e95177c1037f7f96"}],{ignoreURLParametersMatching:[/.*/]}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
