(function(){var e={4129:function(e){const t=512;async function n(e){let t=document.createElement("video");if(t.setAttribute("autoplay",""),t.setAttribute("muted",""),t.setAttribute("playsinline",""),t.setAttribute("ref","video"),t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.zIndex="-2",navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)return await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:e}}).then((e=>(t.addEventListener("loadedmetadata",(()=>{t.setAttribute("width",t.videoWidth+"px"),t.setAttribute("height",t.videoHeight+"px"),r(t),window.addEventListener("resize",(()=>{r(t)}))})),t.srcObject=e,t))).catch((e=>{throw e}))}function i(e){let n=document.createElement("canvas");n.style.display="none",n.width=t,n.height=e.videoHeight/e.videoWidth*n.width,n.getContext("2d").drawImage(e,0,0,n.width,n.height);let i=n.toDataURL("image/jpeg");return i}function r(e){let t,n,i=e?.parentElement;if(!e||!i)return;const r=e.videoWidth/e.videoHeight,a=i.clientWidth/i.clientHeight;r>a?(n=i.clientHeight,t=n*r):(t=i.clientWidth,n=t/r),e.style.top=-(n-i.clientHeight)/2+"px",e.style.left=-(t-i.clientWidth)/2+"px",e.style.width=t+"px",e.style.height=n+"px"}function a(e){if(e&&null!=e){const t=e.srcObject.getTracks();t.forEach((function(e){e.stop()})),e.remove()}}e.exports={CreateCameraVideo:n,TakePhoto:i,StopVideo:a}},3861:function(e){const t="#scanningOverlay",n="#loadingOverlay",i=2,r=2,a=.001,s=1e3,o=30;function c(e,c){return new window.MINDAR.IMAGE.MindARThree({container:c,imageTargetSrc:e,uiScanning:t,uiLoading:n,warmupTolerance:i,missTolerance:r,filterMinCF:a,filterBeta:s,maxTrack:o})}function u(e){return new window.MINDAR.FACE.MindARThree({container:e,uiScanning:t,uiLoading:n})}e.exports={MindArTarget:c,MindArFace:u}},155:function(e,t,n){"use strict";var i=n(9242),r=n(3396);const a={id:"app"};function s(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(n)])}var o=n(89);const c={},u=(0,o.Z)(c,[["render",s]]);var l=u,h=n(2483);const d={id:"main",ref:"main"},m=(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-fullscreen",viewBox:"0 0 16 16"},[(0,r._)("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"})],-1),f=[m],p={class:"fs layer1",id:"unity-canvas",ref:"uc"},w=["innerHTML"],g=["innerHTML"],S=["innerHTML"],v=["innerHTML"];function y(e,t,n,i,a,s){return(0,r.wg)(),(0,r.iD)("div",d,[a.fullscreenSupported?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:t[0]||(t[0]=e=>s.SetFullscreen(!a.isFullscreen)),ref:"fullscreenBtn",id:"fullscreenBtn"},f,512)):(0,r.kq)("",!0),(0,r._)("canvas",p,null,512),((0,r.wg)(),(0,r.j4)((0,r.LL)(s.GetSceneComponent()),{sceneData:a.currentScene,key:a.currentScene.sceneIndex},null,8,["sceneData"])),a.ShowLoading?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"fs layer2",innerHTML:a.loadingScreens["loading"]},null,8,w)):(0,r.kq)("",!0),a.ShowScanning?((0,r.wg)(),(0,r.iD)("div",{key:2,class:"fs layer2",innerHTML:a.loadingScreens["scanning"]},null,8,g)):(0,r.kq)("",!0),a.ShowSplash?((0,r.wg)(),(0,r.iD)("div",{key:3,class:"fs layer2",innerHTML:a.loadingScreens["splash"]},null,8,S)):(0,r.kq)("",!0),a.ShowOrientation?((0,r.wg)(),(0,r.iD)("div",{key:4,class:"fs layer2",innerHTML:a.loadingScreens["orientation"]?a.loadingScreens["orientation"]:a.loadingScreens["loading"]},null,8,v)):(0,r.kq)("",!0)],512)}class A{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}static Direction(e,t){const n=e.x-t.x,i=e.y-t.y,r=e.z-t.z;return new A(n,i,r)}}class b{constructor(e=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]){this.elements=e}clone(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}decompose(e,t,n){const i=this.elements;let r=new A(i[0],i[1],i[2]).magnitude();const a=new A(i[4],i[5],i[6]).magnitude(),s=new A(i[8],i[9],i[10]).magnitude(),o=this.determinant();o<0&&(r=-r);const c=1/r,u=1/a,l=1/s,h=new b;return h.clone(this),h.elements[0]*=c,h.elements[1]*=c,h.elements[2]*=c,h.elements[4]*=u,h.elements[5]*=u,h.elements[6]*=u,h.elements[8]*=l,h.elements[9]*=l,h.elements[10]*=l,e.set(i[12],i[14],i[13]),n.set(r,a,s),t.setFromRotationMatrix(h),this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],o=e[9],c=e[13],u=e[2],l=e[6],h=e[10],d=e[14],m=e[3],f=e[7],p=e[11],w=e[15];return m*(+r*o*l-i*c*l-r*s*h+n*c*h+i*s*d-n*o*d)+f*(+t*o*d-t*c*h+r*a*h-i*a*d+i*c*u-r*o*u)+p*(+t*c*l-t*s*d-r*a*l+n*a*d+r*s*u-n*c*u)+w*(-i*s*u-t*o*l+t*s*h+i*a*l-n*a*h+n*o*u)}}class E{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],o=t[9],c=t[2],u=t[6],l=t[10],h=n+s+l;if(h>0){const e=.5/Math.sqrt(h+1);this.x=(u-o)*e,this.y=(a-i)*e,this.z=(r-c)*e,this.w=.25/e}else if(n>s&&n>l){const e=2*Math.sqrt(1+n-s-l);this.x=.25*e,this.y=(r+c)/e,this.z=(i+a)/e,this.w=(u-o)/e}else if(s>l){const e=2*Math.sqrt(1+s-n-l);this.x=(i+a)/e,this.y=(o+u)/e,this.z=.25*e,this.w=(r-c)/e}else{const e=2*Math.sqrt(1+l-n-s);this.x=(r+c)/e,this.y=.25*e,this.z=(o+u)/e,this.w=(a-i)/e}return this.x*=-1,this}}class M{constructor(){}isValid(){}}class F extends M{constructor(e,t,n,i=60,r=[]){super(),e||(e=new A),t||(t=new E),n||(n=new A),this.position=e,this.rotation=t,this.scale=n,this.cameraFOV=i,this.faceMeshData=r.join()}isValid(){return!!(this.position&&this.rotation&&this.scale&&this.faceMeshData)}}class x extends M{constructor(e,t,n,i=60,r=0){super(),e||(e=new A),t||(t=new E),n||(n=new A),this.position=e,this.rotation=t,this.scale=n,this.cameraFOV=i,this.targetIndex=r}isValid(){return!!(this.position&&this.rotation&&this.scale)}}let H,T,C,L,P,O,_,k;function D(e){_=e.Module,H=e.Module.cwrap("call_cb_TargetTransform",null,["number","number","number","number","number"]),T=e.Module.cwrap("call_cb_FaceTransform",null,["number","number","number","number","string","number"]),C=e.Module.cwrap("call_cb_MarkerTransform",null,["number","number","number","number"]),L=e.Module.cwrap("call_cb_GeolocationTransform",null,["number","number","number","number"]),P=e.Module.cwrap("call_cb_ScanningFinished",null,[]),O=e.Module.cwrap("call_cb_SceneLoaded",null,["number"])}function I(e,t,n,i,r,a,s){let o=new F(t,n,i,r,a);if(o.isValid()){if(e){var c=_._malloc(40),u=c>>2;_.HEAPF32[u]=o.position.x,_.HEAPF32[u+1]=o.position.y,_.HEAPF32[u+2]=o.position.z,_.HEAPF32[u+3]=o.rotation.x,_.HEAPF32[u+4]=o.rotation.y,_.HEAPF32[u+5]=o.rotation.z,_.HEAPF32[u+6]=o.rotation.w,_.HEAPF32[u+7]=o.scale.x,_.HEAPF32[u+8]=o.scale.y,_.HEAPF32[u+9]=o.scale.z,T(c,c+12,c+28,o.cameraFOV,o.faceMeshData,s),_._free(c)}}else console.error("Face transform is invalid!")}function R(e,t,n,i,r,a){let s=new x(t,n,i,r,a);if(s.isValid()){if(e){var o=_._malloc(40),c=o>>2;_.HEAPF32[c]=s.position.x,_.HEAPF32[c+1]=s.position.y,_.HEAPF32[c+2]=s.position.z,_.HEAPF32[c+3]=s.rotation.x,_.HEAPF32[c+4]=s.rotation.y,_.HEAPF32[c+5]=s.rotation.z,_.HEAPF32[c+6]=s.rotation.w,_.HEAPF32[c+7]=s.scale.x,_.HEAPF32[c+8]=s.scale.y,_.HEAPF32[c+9]=s.scale.z,H(o,o+12,o+28,s.cameraFOV,a),_._free(o)}}else console.error("Target transform is invalid!")}function q(e,t,n,i,r){if(e){var a=_._malloc(28),s=a>>2;_.HEAPF32[s]=t.x,_.HEAPF32[s+1]=t.y,_.HEAPF32[s+2]=t.z,_.HEAPF32[s+3]=n.x,_.HEAPF32[s+4]=n.y,_.HEAPF32[s+5]=n.z,_.HEAPF32[s+6]=n.w,C(a,a+12,i,r),_._free(a)}}function $(e,t,n,i,r){if(e){var a=_._malloc(52),s=a>>2;_.HEAPF32[s]=t.x,_.HEAPF32[s+1]=t.y,_.HEAPF32[s+2]=t.z,_.HEAPF32[s+3]=n.x,_.HEAPF32[s+4]=n.y,_.HEAPF32[s+5]=n.z,_.HEAPF32[s+6]=n.w,_.HEAPF32[s+7]=r.accuracy,_.HEAPF32[s+8]=r.altitude,_.HEAPF32[s+9]=r.heading,_.HEAPF32[s+10]=r.latitude,_.HEAPF32[s+11]=r.longitude,_.HEAPF32[s+12]=r.speed,L(a,a+12,i,a+28),_._free(a)}}function z(e){e&&P()}function j(e,t){e&&O(t)}function N(e,t){var n="./Build";const i=!1;var r,a;i?(r=n+"/Build/Build.loader.js",a={dataUrl:n+"/Build/Build.data",frameworkUrl:n+"/Build/Build.framework.js",codeUrl:n+"/Build/Build.wasm",streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"WebXRTest",productVersion:"0.1.0"}):(r=n+"/Build.loader.js",a={dataUrl:n+"/Build.data",frameworkUrl:n+"/Build.framework.js",codeUrl:n+"/Build.wasm",streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"WebXRTest",productVersion:"0.1.0"}),e.width=window.innerWidth,e.height=window.innerHeight;var s=document.createElement("script");s.src=r,s.onload=()=>{createUnityInstance(e,a).then((e=>{k=e,D(e),t(e)})).catch((e=>{}))},e.appendChild(s)}function U(e,t){const n=new b(e),i=new A,r=new E,a=new A;return n.decompose(i,r,a),{position:i,rotation:r,scale:a}}function V(e,t,n,i){const r=U(e),a=r.position,s=r.rotation,o=r.scale;I(k,a,s,o,t,n,i)}function B(e,t,n){const i=U(e),r=i.position,a=i.rotation,s=i.scale;R(k,r,a,s,t,n)}function W(e,t,n){const i=U(e),r=U(t),a=i.position,s=i.rotation,o=r.position,c=A.Direction(o,a),u=0==o.x&&0==o.y&&0==o.z,l=u?0:c.magnitude();q(k,a,s,l,n)}function G(e,t,n){const i=U(e),r=i.position,a=i.rotation;$(k,r,a,t,n)}function Z(){z(k)}function Y(e){j(k,e)}class X{constructor(e){this.vue=e,window.SCENE_LOADER=this}async LoadScene(e,t,n){let i={sceneType:e,sceneIndex:Number(t),amountOfTargets:Number(n)};this.vue.currentScene=i}async ScanSurface(e){void 0!=window.currentScene&&null!=window.currentScene&&window.currentScene.ScanSurface&&window.currentScene.ScanSurface()}}const K={class:"fs layer0 debug",ref:"mc"};function J(e,t,n,i,a,s){return(0,r.wg)(),(0,r.iD)("div",K,null,512)}var Q=n(3861),ee={name:"FaceScene",props:{sceneData:Object},data(){return{}},mounted(){this.Entry()},methods:{async Entry(){this.$parent.ShowLoadingIndicator(!0),await this.$parent.SetCurrentScene(this),this.Launch()},async Launch(){await this.Setup(),await this.Start()},async Setup(){return await n.e(816).then(n.t.bind(n,9816,23)).then((async()=>{let e=(0,Q.MindArFace)(this.$refs.mc);this.mindAr=e;let t=e.addFaceMesh();e.addAnchor(0);let n=e.renderer,i=e.scene,r=e.camera;this.Start=async()=>{await e.start(),this.$parent.ShowLoadingIndicator(!1),Y(this.sceneData.sceneIndex),n.setAnimationLoop((()=>{n.render(i,r),this.CheckTarget(e,t.geometry.positions)}))},this.Stop=async()=>{await e.stop(),n.setAnimationLoop(null)}}))},CheckTarget(e,t){let n=e.container.offsetWidth/e.container.offsetHeight,i=n<4/3?e.camera.fov:e.camera.fov*(4/3)/n,r=e.anchors[0],a=0;r.group.visible&&(a=1);let s=r.group.matrix.elements;V(s,i,t,a)}}};const te=(0,o.Z)(ee,[["render",J],["__scopeId","data-v-1d3063d2"]]);var ne=te;const ie={class:"fs layer0",ref:"mc"};function re(e,t,n,i,a,s){return(0,r.wg)(),(0,r.iD)("div",ie,null,512)}var ae={name:"TargetScene",props:{sceneData:Object},data(){return{}},mounted(){this.Entry()},methods:{async Entry(){this.$parent.ShowLoadingIndicator(!0),await this.$parent.SetCurrentScene(this),this.Launch()},async Launch(){await this.Setup(),await this.Start()},async Setup(){return await n.e(528).then(n.t.bind(n,5528,23)).then((async()=>{let e=(0,Q.MindArTarget)(`./Targets/targets_${this.sceneData.sceneIndex}.mind`,this.$refs.mc);this.mindAr=e;for(var t=0;t<this.sceneData.amountOfTargets;t++)e.addAnchor(t);let n=e.renderer;e.scene,e.camera;this.Start=async()=>{await e.start(),this.$parent.ShowLoadingIndicator(!1),Y(this.sceneData.sceneIndex);for(var t=0;t<this.sceneData.amountOfTarget;t++)e.anchors[t].group.visible=!1;n.setAnimationLoop((()=>{this.CheckTarget(e)}))},this.Stop=async()=>{await e.stop(),n.setAnimationLoop(null)}}))},CheckTarget(e){let t=e.container.offsetWidth/e.container.offsetHeight,n=t<4/3?e.camera.fov:e.camera.fov*(4/3)/t;for(var i=0;i<this.sceneData.amountOfTargets;i++){let t=e.anchors[i];if(t.group.visible)return B(t.group.matrix.elements,n,i)}return B(e.camera.matrix.elements,n,-1)}}};const se=(0,o.Z)(ae,[["render",re],["__scopeId","data-v-d7d0ecf4"]]);var oe=se;const ce={class:"fs layer0",ref:"mc"},ue={key:0,id:"startScreen"};function le(e,t,n,i,a,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",ce,null,512),a.isUserActionRequired?((0,r.wg)(),(0,r.iD)("div",ue,[(0,r._)("button",{onClick:t[0]||(t[0]=e=>s.Entry())},"START AR")])):(0,r.kq)("",!0)],64)}var he={name:"MarkerScene",props:{sceneData:Object},data(){return{isUserActionRequired:!1,hitMatrixElements:null}},mounted(){this.Entry()},methods:{async Entry(){this.$parent.ShowLoadingIndicator(!0),await this.$parent.SetCurrentScene(this),this.Launch()},async Launch(){const e=document.createElement("canvas");this.$refs.mc.appendChild(e);const t=e.getContext("webgl",{xrCompatible:!0});try{this.session=await navigator.xr.requestSession("immersive-ar",{optionalFeatures:["dom-overlay"],requiredFeatures:["hit-test"],domOverlay:{root:this.sceneData.unity}}),this.session.updateRenderState({baseLayer:new XRWebGLLayer(this.session,t)});const e=await this.session.requestReferenceSpace("local"),n=await this.session.requestReferenceSpace("viewer"),i=await this.session.requestHitTestSource({space:n}),r=(t,n)=>{this.session.requestAnimationFrame(r);const a=n.getViewerPose(e);if(a){const e=a.views[0].transform.matrix;this.SendCameraTransformTounity(e)}const s=n.getHitTestResults(i);s.length>0&&(this.hitMatrixElements=s[0].getPose(e).transform.matrix)};this.session.requestAnimationFrame(r)}catch(n){console.error(n),this.$parent.ShowLoadingIndicator(!1),this.isUserActionRequired=!0}},SendCameraTransformTounity(e){const t=null==this.hitMatrixElements?new Array(16).fill(0):this.hitMatrixElements;W(e,t,90),this.hitMatrixElements=null}}};const de=(0,o.Z)(he,[["render",le],["__scopeId","data-v-95e435d8"]]);var me=de;const fe={class:"fs layer0",ref:"mc"},pe={key:0,id:"startScreen"};function we(e,t,n,i,a,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",fe,null,512),a.isUserActionRequired?((0,r.wg)(),(0,r.iD)("div",pe,[(0,r._)("button",{onClick:t[0]||(t[0]=e=>s.Entry())},"START AR")])):(0,r.kq)("",!0)],64)}class ge{constructor(e=-1,t=-1,n=-1,i=-1,r=-1,a=-1){this.accuracy=e,this.altitude=t,this.heading=n,this.latitude=i,this.longitude=r,this.speed=a}set(e,t,n,i,r,a){return this.accuracy=e,this.altitude=t,this.heading=n,this.latitude=i,this.longitude=r,this.speed=a,this}}var Se={name:"GeolocationScene",props:{sceneData:Object},data(){return{isUserActionRequired:!1,geoCoords:{}}},mounted(){this.Entry()},methods:{async Entry(){this.$parent.ShowLoadingIndicator(!0),await this.$parent.SetCurrentScene(this),this.Launch()},async Launch(){const e=document.createElement("canvas");this.$refs.mc.appendChild(e);const t=e.getContext("webgl",{xrCompatible:!0});try{this.session=await navigator.xr.requestSession("immersive-ar",{optionalFeatures:["dom-overlay"],domOverlay:{root:this.sceneData.unity}}),this.session.updateRenderState({baseLayer:new XRWebGLLayer(this.session,t)});const e=await this.session.requestReferenceSpace("local");this.AddOrientationEvents();const n={enableHighAccuracy:!0};navigator.geolocation.watchPosition((e=>{this.geoCoords=e.coords}),void 0,n);const i=(t,n)=>{this.session.requestAnimationFrame(i);const r=n.getViewerPose(e);if(r){const e=r.views[0].transform.matrix;this.SendCameraTransformTounity(e)}};this.session.requestAnimationFrame(i)}catch(n){console.error(n),this.$parent.ShowLoadingIndicator(!1),this.isUserActionRequired=!0}},AddOrientationEvents(){if(window.DeviceOrientationEvent)switch(this.CheckDevice()){case"iOS":addEventListener("deviceorientation",this.OrientationHandler,!0);break;case"Android":addEventListener("deviceorientationabsolute",this.OrientationHandler,!0);break;default:return void alert("Device orientation is not supported")}else alert("Device orientation is not supported")},CheckDevice(){var e=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":"unknown"},OrientationHandler(e){e.webkitCompassHeading?this.northHeading=this.compassHeading(e.webkitCompassHeading,e.beta,e.gamma):this.northHeading=this.compassHeading(e.alpha,e.beta,e.gamma)},SendCameraTransformTounity(e){let t=new ge;this.geoCoords&&(t=new ge(this.geoCoords.accuracy,this.geoCoords.altitude,this.northHeading,this.geoCoords.latitude,this.geoCoords.longitude,this.geoCoords.speed)),G(e,50,t),console.warn(t)},compassHeading(e,t,n){const i=e*(Math.PI/180),r=t*(Math.PI/180),a=n*(Math.PI/180),s=Math.cos(i),o=Math.sin(i),c=(Math.cos(r),Math.sin(r)),u=Math.cos(a),l=Math.sin(a),h=-s*l-o*c*u,d=-o*l+s*c*u;let m=Math.atan(h/d);return d<0?m+=Math.PI:h<0&&(m+=2*Math.PI),m*=180/Math.PI,m}}};const ve=(0,o.Z)(Se,[["render",we],["__scopeId","data-v-33223e73"]]);var ye=ve;const Ae={class:"fs layer0",ref:"mc"};function be(e,t,n,i,a,s){return(0,r.wg)(),(0,r.iD)("div",Ae,null,512)}var Ee=n(4129);n(7658),n(4200);const Me=new window.MINDAR.IMAGE.Compiler;async function Fe(e){const t=[];for(let r=0;r<e.length;r++){let n=await xe(e[r]);t.push(n)}await Me.compileImageTargets(t,(e=>{console.log(e)}));const n=await Me.exportData();let i=He(n);return i}async function xe(e){return new Promise(((t,n)=>{let i=new Image;i.onload=()=>t(i),i.onerror=n,i.src=e}))}function He(e){var t=new Blob([e]),n=window.document.createElement("a");return n.download="targets.mind",n.href=window.URL.createObjectURL(t),n.href}var Te={name:"SurfaceScene",props:{sceneData:Object},data(){return{}},mounted(){this.Entry()},methods:{async Entry(){this.$parent.ShowLoadingIndicator(!0),await this.$parent.SetCurrentScene(this),this.Launch()},async Launch(){await this.StartVideo(),this.$parent.ShowLoadingIndicator(!1),Y(this.sceneData.sceneIndex)},async ScanSurface(){this.$parent.ShowScanningIndicator(!0);let e=(0,Ee.TakePhoto)(this.video),t=await Fe([e]);await this.Setup(t),await this.Start(),this.$parent.ShowScanningIndicator(!1),Z()},async StartVideo(){this.video=await(0,Ee.CreateCameraVideo)("environment"),this.$refs.mc.appendChild(this.video)},async Setup(e){this.amountOfTargets;return await n.e(528).then(n.t.bind(n,5528,23)).then((async()=>{let t=(0,Q.MindArTarget)(e,this.$refs.mc);this.mindAr=t;for(var n=0;n<this.sceneData.amountOfTargets;n++)t.addAnchor(n);let i=t.renderer;t.scene,t.camera;this.Start=async()=>{await t.start(),Y(this.sceneData.sceneIndex);for(var e=0;e<this.sceneData.amountOfTarget;e++)t.anchors[e].group.visible=!1;i.setAnimationLoop((()=>{this.CheckTarget(t)}))},this.Stop=async()=>{await t.stop(),(0,Ee.StopVideo)(this.video),i.setAnimationLoop(null)}}))},CheckTarget(e){let t=e.container.offsetWidth/e.container.offsetHeight,n=t<4/3?e.camera.fov:e.camera.fov*(4/3)/t;for(var i=0;i<this.sceneData.amountOfTargets;i++){let t=e.anchors[i];if(t.group.visible)return B(t.group.matrix.elements,n,i)}return B(e.camera.matrix.elements,n,-1)}}};const Ce=(0,o.Z)(Te,[["render",be],["__scopeId","data-v-113cac22"]]);var Le=Ce,Pe={name:"App",components:{FaceScene:ne,TargetScene:oe,MarkerScene:me,SurfaceScene:Le},data(){return{fullscreenSupported:!0,isFullscreen:!1,sceneLoader:null,ShowLoading:!1,ShowScanning:!1,ShowSplash:!0,ShowOrientation:!1,loadingScreens:{},currentScene:{}}},mounted(){this.CheckFullscreenSupport(),this.LoadHTMLs(),this.Initialization(),window.StopCurrentScene=this.StopCurrentScene,window.SetCurrentScene=this.SetCurrentScene,window.timeout=this.timeout},methods:{CheckFullscreenSupport(){/iPhone/i.test(navigator.userAgent)&&(this.fullscreenSupported=!1)},async timeout(e){return new Promise((t=>setTimeout(t,e)))},async SetCurrentScene(e){this.StopCurrentScene(),window.currentScene=e},async StopCurrentScene(){window.currentScene&&null!=window.currentScene&&window.currentScene.Stop&&await window.currentScene.Stop()},GetSceneComponent(){switch(this.currentScene.unity=this.$refs.uc,this.currentScene.sceneType){case"face":return ne;case"image":return oe;case"marker":return me;case"geolocation":return ye;case"surface":return Le;default:return this.StopCurrentScene(),null}},LoadHTMLs(){const e=["loading","scanning","splash","orientation"],t=this;for(var n=0;n<e.length;n++){const r=n;var i=new XMLHttpRequest;i.open("GET",`${e[r]}.html`,!1),i.onreadystatechange=function(){if(4===i.readyState&&(200===i.status||0==i.status)){var n=i.responseText;t.loadingScreens[e[r]]=n}},i.send(null)}console.warn(this.loadingScreens)},async ReloadScene(){window.currentScene&&null!=window.currentScene&&window.currentScene.Entry&&window.currentScene.Entry()},async Initialization(){let e=this.$refs.uc;this.$refs.arContainer;this.sceneLoader=new X(this);let t=this;window.addEventListener("orientationchange",(function(){t.ReloadScene()}),!1),N(e,(()=>{this.ShowSplashScreen(!1)}))},SetFullscreen(e){if(e){const e=()=>{this.isFullscreen=!0,window.matchMedia("(orientation: portrait)").matches&&screen.orientation.lock("portrait-primary"),window.matchMedia("(orientation: landscape)").matches&&screen.orientation.lock("landscape-primary")};this.$refs.main.requestFullscreen&&this.$refs.main.requestFullscreen().then(e).catch((e=>{console.error(e)})),this.$refs.main.webkitRequestFullScreen&&this.$refs.main.webkitRequestFullScreen().then(e).catch((e=>{console.error(e)})),this.$refs.main.mozRequestFullScreen&&this.$refs.main.mozRequestFullScreen().then(e).catch((e=>{console.error(e)}))}else document.exitFullscreen().then((()=>{this.isFullscreen=!1})).catch((e=>{console.error(e)}))},ShowLoadingIndicator(e){this.ShowLoading=e},ShowScanningIndicator(e){this.ShowScanning=e},ShowSplashScreen(e){this.ShowSplash=e},ShowOrientationScreen(e){this.ShowOrientation=e}}};const Oe=(0,o.Z)(Pe,[["render",y]]);var _e=Oe;const ke=h.p7({history:h.r5(),routes:[{path:"/:id?",component:_e}]});(0,i.ri)(l).use(ke).mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,a){if(!i){var s=1/0;for(l=0;l<e.length;l++){i=e[l][0],r=e[l][1],a=e[l][2];for(var o=!0,c=0;c<i.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(o=!1,a<s&&(s=a));if(o){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[i,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(i,r){if(1&r&&(i=this(i)),8&r)return i;if("object"===typeof i&&i){if(4&r&&i.__esModule)return i;if(16&r&&"function"===typeof i.then)return i}var a=Object.create(null);n.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var o=2&r&&i;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((function(e){s[e]=function(){return i[e]}}));return s["default"]=function(){return i},n.d(a,s),a}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".qs.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ar-unity-renderer:";n.l=function(i,r,a,s){if(e[i])e[i].push(r);else{var o,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var h=u[l];if(h.getAttribute("src")==i||h.getAttribute("data-webpack")==t+a){o=h;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+a),o.src=i),e[i]=[r];var d=function(t,n){o.onerror=o.onload=null,clearTimeout(m);var r=e[i];if(delete e[i],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var a=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=a);var s=n.p+n.u(t),o=new Error,c=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",o.name="ChunkLoadError",o.type=a,o.request=s,r[1](o)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,a,s=i[0],o=i[1],c=i[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(c)var l=c(n)}for(t&&t(i);u<s.length;u++)a=s[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},i=self["webpackChunkar_unity_renderer"]=self["webpackChunkar_unity_renderer"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(155)}));i=n.O(i)})();
//# sourceMappingURL=app.qs.js.map
