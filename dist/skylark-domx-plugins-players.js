/**
 * skylark-domx-plugins-players - A  ui library for rendering various media data specified by mime-type.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(s,e){var i=e.define,require=e.require,o="function"==typeof i&&i.amd,t=!o&&"undefined"!=typeof exports;if(!o&&!i){var r={};i=e.define=function(s,e,i){"function"==typeof i?(r[s]={factory:i,deps:e.map(function(e){return function(s,e){if("."!==s[0])return s;var i=e.split("/"),o=s.split("/");i.pop();for(var t=0;t<o.length;t++)"."!=o[t]&&(".."==o[t]?i.pop():i.push(o[t]));return i.join("/")}(e,s)}),resolved:!1,exports:null},require(s)):r[s]={factory:null,resolved:!0,exports:i}},require=e.require=function(s){if(!r.hasOwnProperty(s))throw new Error("Module "+s+" has not been defined");var module=r[s];if(!module.resolved){var i=[];module.deps.forEach(function(s){i.push(require(s))}),module.exports=module.factory.apply(e,i)||null,module.resolved=!0}return module.exports}}if(!i)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(s,require){s("skylark-domx-plugins-players/players",["skylark-langx/skylark"],function(s){return s.attach("domx.plugins.players")}),s("skylark-domx-plugins-players/video-player",["skylark-langx/langx","skylark-domx-noder","skylark-domx-eventer","skylark-domx-query","skylark-domx-plugins-base","./players"],function(s,e,i,o,t,r){"use strict";var n=t.Plugin.inherit({klassName:"VideoPlayer",pluginName:"lark.players.video",options:{classes:{videoContent:"video-content",videoLoading:"video-loading",videoPlaying:"video-playing"},videoPosterProperty:"poster",videoSourcesProperty:"sources"},_construct:function(s,e){t.Plugin.prototype._construct.call(this,s,e);let r,n=this.$(),a=o("<video/>"),l=this._video=a[0];n.addClass(this.options.classes.videoContent);var p=this._$poster=o("<img/>");p.prop("draggable",!1),n.append(p),p.css({maxWidth:"100%",maxHeight:"100%"});var d=this._$play=o("<a/>");d.prop("target","_blank"),l.controls=!0,this.listenTo(a,"error",function(){}),this.listenTo(a,"pause",function(){l.seeking||(r=!1,this.$().removeClass(this.options.classes.videoLoading).removeClass(this.options.classes.videoPlaying),this.trigger("pause"))}),this.listenTo(a,"playing",()=>{r=!1,this.$().removeClass(this.options.classes.videoLoading).addClass(this.options.classes.videoPlaying),this.trigger("playing")}),this.listenTo(a,"play",()=>{r=!0,this.$().addClass(this.options.classes.videoLoading),this.trigger("play")}),this.listenTo(d,"click",s=>{i.stop(s),r?this.pause():this.play()}),n.append(a),a.css({maxWidth:"100%",maxHeight:"100%"}),n.append(d),this.options.media&&this.source(this.options.media)},source:function(s){this._media=s;let e=s.title||"",i=s.href,o=s.type,t=s.poster||"",r=s.altText||"",n=this.$(),a=this._video,l=this._$play,p=this._$poster;n.prop("title",e),a.canPlayType&&i&&o&&a.canPlayType(o)&&(a.src=i),a.poster=t,p.prop({src:t,alt:r}),l.prop({download:e,href:i})},load:function(){this._video.load()},play:function(){this._video.play()},stop:function(){},pause:function(){this._video.pause()}});return t.register(n),r.VideoPlayer=n}),s("skylark-domx-plugins-players/main",["./players","./video-player"],function(s){return s}),s("skylark-domx-plugins-players",["skylark-domx-plugins-players/main"],function(s){return s})}(i),!o){var n=require("skylark-langx-ns");t?module.exports=n:e.skylarkjs=n}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-plugins-players.js.map
