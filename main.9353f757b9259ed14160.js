/*! For license information please see main.9353f757b9259ed14160.js.LICENSE.txt */
!function(e){function t(t){for(var r,s,a=t[0],c=t[1],u=t[2],p=0,f=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={0:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;i.push([121,1]),n()}({121:function(e,t,n){n(122),e.exports=n(310)},310:function(e,t,n){"use strict";n.r(t);n(308);var r={isgameOver:!1,isGameStart:!1,bgSpeed:5,isSoundOn:!0,isMusicOn:!0};function o(e){return e.sys.canvas.width/2}function i(e){return e.sys.canvas.height/2}function s(e){return e.sys.canvas.width}function a(e){return e.sys.canvas.height}function c(e){r.isSoundOn&&e.sound.play("popup")}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,Phaser.Scene);var t,n,r,s=f(a);function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),s.call(this,{key:"BootScene"})}return t=a,(n=[{key:"preload",value:function(){this.load.image("bg","./assets/sprites/bg.png"),this.load.image("bg-2","./assets/sprites/bg-3.png"),this.load.image("logo","./assets/sprites/logo.png"),this.load.image("life_icon","./assets/sprites/life_icon.png"),this.load.spritesheet("swim-1","./assets/sprites/swim.png",{frameWidth:250,frameHeight:132}),this.load.spritesheet("player","./assets/sprites/player.png",{frameWidth:253.5,frameHeight:1216}),this.load.audio("bgm",["./assets/audio/bgm.mp3","./assets/audio/bgm.ogg"]),this.load.audio("popup",["./assets/audio/popup.mp3","./assets/audio/popup.ogg"]),this.load.audio("jump",["./assets/audio/jump.mp3","./assets/audio/jump.ogg"]),this.load.audio("shield",["./assets/audio/shield.mp3","./assets/audio/shield.ogg"]),this.add.text(o(this),i(this),"Loading....",{fontSize:"50px"}).setOrigin(.5);for(var e=1;e<=6;e++)this.load.image("product-".concat(e),"./assets/sprites/products/".concat(e,".png"));this.load.image("gameover-popup","./assets/sprites/gameover-popup.png"),this.load.image("button-restart","./assets/sprites/button-restart.png"),this.load.image("logo-2","./assets/sprites/logo-2.png"),this.load.image("wu","./assets/sprites/wu.png"),this.load.image("email","./assets/sprites/email.png"),this.load.image("fb","./assets/sprites/fb.png")}},{key:"create",value:function(){this.scene.start("GameScene")}},{key:"update",value:function(){}}])&&l(t.prototype,n),r&&l(t,r),a}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(s,Phaser.Physics.Arcade.Sprite);var t,n,o,i=S(s);function s(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),k(O(r=i.call(this,e,t,n,"player")),"forGroundWater",void 0),k(O(r),"shield",void 0),k(O(r),"effect",void 0),r.scene.add.existing(O(r)),r.play("playerAnim"),r.scene.physics.world.enable(O(r)),r.setScale(.4),r.setDepth(4),r.forGroundWater=r.scene.add.rectangle(r.x,r.y+60,105,335,6407896,.5).setDepth(4),r.shield=r.scene.add.image(r.x,r.y,"bubble").setScale(1.2).setVisible(!1),r.body.setSize(.5*r.width,.5*r.height),r}return t=s,(n=[{key:"preUpdate",value:function(e,t){v(P(s.prototype),"preUpdate",this).call(this,e,t),r.isgameOver||this.forGroundWater.setPosition(this.x,this.y+80),this.shield.setPosition(this.x,this.y)}},{key:"changeLane",value:function(e,t){var n=this;this.effect.visible=!1,this.scene.tweens.add({targets:this,y:e,duration:300,onComplete:function(){n.effect.visible=!0,n.effect.setPosition(n.x,n.y-27)}})}},{key:"addShield",value:function(){this.shield.visible=!0}},{key:"removeShield",value:function(){this.shield.visible=!1}},{key:"GameStart",value:function(){this.effect=this.scene.add.rectangle(this.x,this.y-27,120,3,13498111).setDepth(4),this.scene.tweens.add({targets:this.effect,x:this.x-60,duration:100,yoyo:!0,repeat:-1})}},{key:"gameOver",value:function(){this.stop(),this.effect.visible=!1,this.scene.tweens.add({targets:this,angle:-80,duration:500,ease:Phaser.Math.Easing.Bounce.Out})}}])&&g(t.prototype,n),o&&g(t,o),s}();function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=G(e);if(t){var o=G(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(s,Phaser.Physics.Arcade.Image);var t,n,o,i=R(s);function s(e,t,n){var r,o,a,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),r=i.call(this,e,t,n,"product-".concat(Phaser.Math.Between(1,6))),o=C(r),c=void 0,(a="point")in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,r.scene.add.existing(C(r)),r.setDepth(5),r.scene.physics.world.enable(C(r)),"product-1"==r.texture.key&&r.setScale(.12),"product-6"==r.texture.key&&r.setScale(.14),"product-2"==r.texture.key&&r.setScale(.7),"product-3"==r.texture.key&&r.setScale(.75),"product-4"==r.texture.key&&r.setScale(1),"product-5"==r.texture.key&&r.setScale(.12),r.body.setSize(.5*r.width,.5*r.height),"product-2"==r.texture.key?r.point=15:"product-3"==r.texture.key||"product-4"==r.texture.key||"product-1"==r.texture.key?r.point=10:"product-5"==r.texture.key?r.point=5:r.point=10,r}return t=s,(n=[{key:"preUpdate",value:function(){r.isgameOver||this.active&&(this.y+=r.bgSpeed)}}])&&j(t.prototype,n),o&&j(t,o),s}();function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=F(e);if(t){var o=F(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return L(this,n)}}function L(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(p,Phaser.Scene);var t,n,u,l=D(p);function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),U(M(e=l.call(this,"GameScene")),"bgTile",void 0),U(M(e),"man",void 0),U(M(e),"msg",void 0),U(M(e),"laneXposArr",void 0),U(M(e),"productGroup",void 0),U(M(e),"score",void 0),U(M(e),"scoreText",void 0),U(M(e),"livesArr",void 0),U(M(e),"tileSpeed",void 0),U(M(e),"blueLineStartArr",void 0),U(M(e),"blueLine",void 0),e}return t=p,(n=[{key:"init",value:function(){}},{key:"create",value:function(){var e=this;this.livesArr=[],this.blueLine=[],this.blueLineStartArr=[];var t,n=3;this.tileSpeed=5,this.laneXposArr=[160,430,695,965,1235,1500,1760];for(var u=0;u<3;u++){var l=this.add.image(s(this)-70*u-55,70,"life_icon").setDepth(10).setScale(1.4).setVisible(!1);this.livesArr.push(l)}(t=this.anims).create({key:"Swim_1_Anim",frames:t.generateFrameNumbers("swim-1",{frames:[0,1,3,2]}),frameRate:6,repeat:-1}),t.create({key:"Swim_2_Anim",frames:t.generateFrameNumbers("swim-2",{frames:[0,1,3,2]}),frameRate:6,repeat:-1}),t.create({key:"playerAnim",frames:t.generateFrameNumbers("player",{frames:[0,1]}),frameRate:6,repeat:-1}),this.productGroup=this.add.group(),this.score=0,this.add.rectangle(o(this),i(this),s(this),a(this),6408410),this.bgTile=this.add.tileSprite(o(this),i(this),s(this),a(this),"bg"),this.bgTile.scaleX=.98;for(var p=0;p<this.laneXposArr.length;p++){var f=this.add.rectangle(this.laneXposArr[p],a(this)-250,80,15,83841).setDepth(4),h=this.add.rectangle(this.laneXposArr[p],a(this)-250,15,a(this),83841).setDepth(4).setOrigin(.5,1);this.tweens.add({targets:f,duration:2e3,y:a(this)}),this.tweens.add({targets:h,duration:2e3,y:a(this)}),this.blueLineStartArr.push(f),this.blueLine.push(h)}this.blueLineStartArr[3].visible=!1,this.blueLine[3].visible=!1,this.add.image(this.laneXposArr[3],i(this)-100,"logo-2").setScale(.3).setAlpha(.6),this.scoreText=this.add.text(o(this),70,"0",{fontSize:"80px",fontStyle:"bold",fontFamily:"font"}).setOrigin(.5).setDepth(10),this.add.rectangle(o(this),a(this),s(this),80,15461355).setOrigin(.5,1).setDepth(6),this.add.image(o(this),a(this)-30,"logo").setScale(.6).setDepth(6);var d=0;this.time.addEvent({delay:1e3,callback:function(){20==++d&&(e.tileSpeed=8,r.bgSpeed=7),40==d&&(e.tileSpeed=10,r.bgSpeed=9),60==d&&(e.tileSpeed=10,r.bgSpeed=13,console.log(r.bgSpeed)),80==d&&(e.tileSpeed=13,r.bgSpeed=15,console.log(r.bgSpeed))},repeat:-1}),this.time.addEvent({delay:2e3,callback:function(){if(!r.isgameOver)if(d<20){var t=new E(e,e.laneXposArr[Phaser.Math.Between(1,e.laneXposArr.length-2)],-150);e.productGroup.add(t)}else{var n=Phaser.Math.Between(1,e.laneXposArr.length-2),o=Phaser.Math.Between(1,e.laneXposArr.length-2);if(n!=o){var i=new E(e,e.laneXposArr[n],-300);e.productGroup.add(i);var s=new E(e,e.laneXposArr[o],-100);e.productGroup.add(s)}else{var a=new E(e,e.laneXposArr[Phaser.Math.Between(1,e.laneXposArr.length-2)],-150);e.productGroup.add(a)}}},repeat:-1}),this.man=new x(this,this.laneXposArr[3],a(this)-330),this.msg=this.add.text(o(this),i(this)-50,"T A P  T O  S W I T C H  L A N E S",{fontSize:"50px",fontFamily:"optima",fontStyle:"normal",color:"#ffffff"}).setOrigin(.5).setDepth(6),this.time.addEvent({delay:250,callback:function(){e.msg.visible=!e.msg.visible},repeat:-1}),this.add.rectangle(160,i(this),240,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(0)})),this.add.rectangle(430,i(this),235,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(1)})),this.add.rectangle(695,i(this),250,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(2)})),this.add.rectangle(965,i(this),260,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(3)})),this.add.rectangle(1235,i(this),250,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(4)})),this.add.rectangle(1500,i(this),240,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(5)})),this.add.rectangle(1760,i(this),230,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(6)})),this.physics.add.overlap(this.man,this.productGroup,(function(t,n){n.destroy(),e.score+=n.point,e.scoreText.text="".concat(e.score),c(e),e.score}));var y=this.physics.add.image(o(this),a(this)+100,"product-3").setScale(14,.1);this.physics.add.overlap(y,this.productGroup,(function(t,o){o.destroy(),n>0&&n--,e.livesArr[n].visible=!1,0==n&&(console.log("Game over"),r.isgameOver=!0,e.man.stop(),e.addGameOver())}))}},{key:"update",value:function(e,t){this.bgTile.tilePositionY-=this.tileSpeed}},{key:"laneClick",value:function(e){this.msg.alpha=0,r.isgameOver||this.man.x!=this.laneXposArr[e]&&(this.tweens.add({targets:this.man,duration:200,x:this.laneXposArr[e]}),this.sound.play("jump"))}},{key:"addGameOver",value:function(){var e=this;c(this);var t=this.add.container(o(this),i(this)).setDepth(9),n=this.add.rectangle(0,0,s(this),a(this),0,.7),u=this.add.image(0,0,"gameover-popup").setScale(1.2),l=this.add.text(20,10,"".concat(this.score),{fontSize:"50px",fontFamily:"optima",color:"#094A82"}).setOrigin(0,.5),p=this.add.image(0,120,"button-restart").setScale(6,.5).setAlpha(.001).setInteractive({cursor:"pointer"}).on("pointerup",(function(){r.isgameOver=!1,e.scene.start("GameScene")})),f=this.add.image(0,215,"button-restart").setScale(6,.5).setAlpha(.001).setInteractive({cursor:"pointer"}).on("pointerup",(function(){y.visible=!0}));t.add([n,u,l,p,f]);var h=encodeURI(window.location.href),d=encodeURIComponent(""),y=(encodeURIComponent(""),this.add.container(o(this),i(this)+540).setDepth(9).setVisible(!1)),b=this.add.image(-110,0,"fb").setScale(.025).setInteractive({cursor:"pointer"}).on("pointerup",(function(){window.location.href="https://www.facebook.com/share.php?u=".concat(h,", '_blank'")})),g=this.add.image(0,0,"wu").setScale(.15).setInteractive({cursor:"pointer"}).on("pointerup",(function(){window.location.href="https://api.whatsapp.com/send?text=".concat(d,": ").concat(h,", '_blank'")})),v=this.add.image(120,0,"email").setScale(.035).setInteractive({cursor:"pointer"}).on("pointerup",(function(){var e="mailto:?subject="+"&body=".concat(h);window.location.href=e}));y.add([g,v,b])}}])&&X(t.prototype,n),u&&X(t,u),p}(),W={type:Phaser.AUTO,parent:"game",backgroundColor:"#001625",width:1920,height:1333,scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},dom:{createContainer:!0},physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}},scene:[y,z]};new Phaser.Game(W)}});