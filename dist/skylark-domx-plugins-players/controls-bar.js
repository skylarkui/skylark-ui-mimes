/**
 * skylark-domx-plugins-players - A  ui library for rendering various media data specified by mime-type.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","skylark-domx-styler","skylark-domx-noder","skylark-domx-eventer","skylark-domx-medias","skylark-domx-query","skylark-domx-plugins-base","skylark-domx-plugins-toggles/fullscreen","skylark-domx-plugins-toggles/Pip","./players","./play-control","./progress-control","./time-control","./volume-control"],function(t,o,e,s,l,n,r,i,u,a,m,p,c,d){"use strict";var k=r.Plugin.inherit({klassName:"ControlsBar",pluginName:"domx.players.controls_bar",options:{selectors:{playButton:".play-button",playbackIcons:".playback-icons use",timeControl:".time",timeElapsed:".time-elapsed",duration:".duration",progressControl:".video-progress",progressBar:".progress-bar",seek:".seek",seekTooltip:".seek-tooltip",volumeControl:".volume-control",volumeButton:".volume-button",volumeIcons:".volume-button use",volumeMute:'use[href="#volume-mute"]',volumeLow:'use[href="#volume-low"]',volumeHigh:'use[href="#volume-high"]',volume:".volume",fullscreenButton:".fullscreen-button",fullscreenIcons:".fullscreen-button use",pipButton:".pip-button"}},_construct:function(t,o){r.Plugin.prototype._construct.call(this,t,o);let e=this.$(),s=this.options.selectors,l=this.options.media,n=this.options.container;this._playControl=m.instantiate(e.find(s.playButton)[0],{media:l}),this._timeControl=c.instantiate(e.find(s.timeControl)[0],{media:l}),this._progressControl=p.instantiate(e.find(s.progressControl)[0],{media:l}),this._volumeControl=d.instantiate(e.find(s.volumeControl)[0],{media:l}),this._fullscreen=i.instantiate(e.find(s.fullscreenButton)[0],{target:n}),this._pip=u.instantiate(e.find(s.pipButton)[0],{target:l})}});return r.register(k),a.ControlsBar=k});
//# sourceMappingURL=sourcemaps/controls-bar.js.map