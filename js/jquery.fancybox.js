(function(g,h,$,j){"use strict";var W=$(g),D=$(h),F=$.fancybox=function(){F.open.apply(this,arguments)},IE=navigator.userAgent.match(/msie/),didUpdate=null,isTouch=h.createTouch!==j,isQuery=function(a){return a&&a.hasOwnProperty&&a instanceof $},isString=function(a){return a&&$.type(a)==="string"},isPercentage=function(a){return isString(a)&&a.indexOf('%')>0},isScrollable=function(a){return(a&&!(a.style.overflow&&a.style.overflow==='hidden')&&((a.clientWidth&&a.scrollWidth>a.clientWidth)||(a.clientHeight&&a.scrollHeight>a.clientHeight)))},getScalar=function(a,b){var c=parseInt(a,10)||0;if(b&&isPercentage(a)){c=F.getViewport()[b]/100*c}return Math.ceil(c)},getValue=function(a,b){return getScalar(a,b)+'px'};$.extend(F,{version:'2.1.4',defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:true,autoHeight:false,autoWidth:false,autoResize:true,autoCenter:!isTouch,fitToView:true,aspectRatio:false,topRatio:0.5,leftRatio:0.5,scrolling:'auto',wrapCSS:'',arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3000,preload:3,modal:false,loop:true,ajax:{dataType:'html',headers:{'X-fancyBox':true}},iframe:{scrolling:'auto',preload:true},swf:{wmode:'transparent',allowfullscreen:'true',allowscriptaccess:'always'},keys:{next:{13:'left',34:'up',39:'left',40:'up'},prev:{8:'right',33:'down',37:'right',38:'down'},close:[27],play:[32],toggle:[70]},direction:{next:'left',prev:'right'},scrollOutside:true,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(IE?' allowtransparency="true"':'')+'></iframe>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:'fade',openSpeed:250,openEasing:'swing',openOpacity:true,openMethod:'zoomIn',closeEffect:'fade',closeSpeed:250,closeEasing:'swing',closeOpacity:true,closeMethod:'zoomOut',nextEffect:'elastic',nextSpeed:250,nextEasing:'swing',nextMethod:'changeIn',prevEffect:'elastic',prevSpeed:250,prevEasing:'swing',prevMethod:'changeOut',helpers:{overlay:true,title:true},onCancel:$.noop,beforeLoad:$.noop,afterLoad:$.noop,beforeShow:$.noop,afterShow:$.noop,beforeChange:$.noop,beforeClose:$.noop,afterClose:$.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:false,isOpen:false,isOpened:false,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(c,d){if(!c){return}if(!$.isPlainObject(d)){d={}}if(false===F.close(true)){return}if(!$.isArray(c)){c=isQuery(c)?$(c).get():[c]}$.each(c,function(i,a){var b={},href,title,content,type,rez,hrefParts,selector;if($.type(a)==="object"){if(a.nodeType){a=$(a)}if(isQuery(a)){b={href:a.data('fancybox-href')||a.attr('href'),title:a.data('fancybox-title')||a.attr('title'),isDom:true,element:a};if($.metadata){$.extend(true,b,a.metadata())}}else{b=a}}href=d.href||b.href||(isString(a)?a:null);title=d.title!==j?d.title:b.title||'';content=d.content||b.content;type=content?'html':(d.type||b.type);if(!type&&b.isDom){type=a.data('fancybox-type');if(!type){rez=a.prop('class').match(/fancybox\.(\w+)/);type=rez?rez[1]:null}}if(isString(href)){if(!type){if(F.isImage(href)){type='image'}else if(F.isSWF(href)){type='swf'}else if(href.charAt(0)==='#'){type='inline'}else if(isString(a)){type='html';content=a}}if(type==='ajax'){hrefParts=href.split(/\s+/,2);href=hrefParts.shift();selector=hrefParts.shift()}}if(!content){if(type==='inline'){if(href){content=$(isString(href)?href.replace(/.*(?=#[^\s]+$)/,''):href)}else if(b.isDom){content=a}}else if(type==='html'){content=href}else if(!type&&!href&&b.isDom){type='inline';content=a}}$.extend(b,{href:href,type:type,content:content,title:title,selector:selector});c[i]=b});F.opts=$.extend(true,{},F.defaults,d);if(d.keys!==j){F.opts.keys=d.keys?$.extend({},F.defaults.keys,d.keys):false}F.group=c;return F._start(F.opts.index)},cancel:function(){var a=F.coming;if(!a||false===F.trigger('onCancel')){return}F.hideLoading();if(F.ajaxLoad){F.ajaxLoad.abort()}F.ajaxLoad=null;if(F.imgPreload){F.imgPreload.onload=F.imgPreload.onerror=null}if(a.wrap){a.wrap.stop(true,true).trigger('onReset').remove()}F.coming=null;if(!F.current){F._afterZoomOut(a)}},close:function(a){F.cancel();if(false===F.trigger('beforeClose')){return}F.unbindEvents();if(!F.isActive){return}if(!F.isOpen||a===true){$('.fancybox-wrap').stop(true).trigger('onReset').remove();F._afterZoomOut()}else{F.isOpen=F.isOpened=false;F.isClosing=true;$('.fancybox-item, .fancybox-nav').remove();F.wrap.stop(true,true).removeClass('fancybox-opened');F.transitions[F.current.closeMethod]()}},play:function(a){var b=function(){clearTimeout(F.player.timer)},set=function(){b();if(F.current&&F.player.isActive){F.player.timer=setTimeout(F.next,F.current.playSpeed)}},stop=function(){b();$('body').unbind('.player');F.player.isActive=false;F.trigger('onPlayEnd')},start=function(){if(F.current&&(F.current.loop||F.current.index<F.group.length-1)){F.player.isActive=true;$('body').bind({'afterShow.player onUpdate.player':set,'onCancel.player beforeClose.player':stop,'beforeLoad.player':b});set();F.trigger('onPlayStart')}};if(a===true||(!F.player.isActive&&a!==false)){start()}else{stop()}},next:function(a){var b=F.current;if(b){if(!isString(a)){a=b.direction.next}F.jumpto(b.index+1,a,'next')}},prev:function(a){var b=F.current;if(b){if(!isString(a)){a=b.direction.prev}F.jumpto(b.index-1,a,'prev')}},jumpto:function(a,b,c){var d=F.current;if(!d){return}a=getScalar(a);F.direction=b||d.direction[(a>=d.index?'next':'prev')];F.router=c||'jumpto';if(d.loop){if(a<0){a=d.group.length+(a%d.group.length)}a=a%d.group.length}if(d.group[a]!==j){F.cancel();F._start(a)}},reposition:function(e,a){var b=F.current,wrap=b?b.wrap:null,pos;if(wrap){pos=F._getPosition(a);if(e&&e.type==='scroll'){delete pos.position;wrap.stop(true,true).animate(pos,200)}else{wrap.css(pos);b.pos=$.extend({},b.dim,pos)}}},update:function(e){var b=(e&&e.type),anyway=!b||b==='orientationchange';if(anyway){clearTimeout(didUpdate);didUpdate=null}if(!F.isOpen||didUpdate){return}didUpdate=setTimeout(function(){var a=F.current;if(!a||F.isClosing){return}F.wrap.removeClass('fancybox-tmp');if(anyway||b==='load'||(b==='resize'&&a.autoResize)){F._setDimension()}if(!(b==='scroll'&&a.canShrink)){F.reposition(e)}F.trigger('onUpdate');didUpdate=null},(anyway&&!isTouch?0:300))},toggle:function(a){if(F.isOpen){F.current.fitToView=$.type(a)==="boolean"?a:!F.current.fitToView;if(isTouch){F.wrap.removeAttr('style').addClass('fancybox-tmp');F.trigger('onUpdate')}F.update()}},hideLoading:function(){D.unbind('.loading');$('#fancybox-loading').remove()},showLoading:function(){var a,viewport;F.hideLoading();a=$('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');D.bind('keydown.loading',function(e){if((e.which||e.keyCode)===27){e.preventDefault();F.cancel()}});if(!F.defaults.fixed){viewport=F.getViewport();a.css({position:'absolute',top:(viewport.h*0.5)+viewport.y,left:(viewport.w*0.5)+viewport.x})}},getViewport:function(){var a=(F.current&&F.current.locked)||false,rez={x:W.scrollLeft(),y:W.scrollTop()};if(a){rez.w=a[0].clientWidth;rez.h=a[0].clientHeight}else{rez.w=isTouch&&g.innerWidth?g.innerWidth:W.width();rez.h=isTouch&&g.innerHeight?g.innerHeight:W.height()}return rez},unbindEvents:function(){if(F.wrap&&isQuery(F.wrap)){F.wrap.unbind('.fb')}D.unbind('.fb');W.unbind('.fb')},bindEvents:function(){var f=F.current,keys;if(!f){return}W.bind('orientationchange.fb'+(isTouch?'':' resize.fb')+(f.autoCenter&&!f.locked?' scroll.fb':''),F.update);keys=f.keys;if(keys){D.bind('keydown.fb',function(e){var b=e.which||e.keyCode,target=e.target||e.srcElement;if(b===27&&F.coming){return false}if(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey&&!(target&&(target.type||$(target).is('[contenteditable]')))){$.each(keys,function(i,a){if(f.group.length>1&&a[b]!==j){F[i](a[b]);e.preventDefault();return false}if($.inArray(b,a)>-1){F[i]();e.preventDefault();return false}})}})}if($.fn.mousewheel&&f.mouseWheel){F.wrap.bind('mousewheel.fb',function(e,a,b,c){var d=e.target||null,parent=$(d),canScroll=false;while(parent.length){if(canScroll||parent.is('.fancybox-skin')||parent.is('.fancybox-wrap')){break}canScroll=isScrollable(parent[0]);parent=$(parent).parent()}if(a!==0&&!canScroll){if(F.group.length>1&&!f.canShrink){if(c>0||b>0){F.prev(c>0?'down':'left')}else if(c<0||b<0){F.next(c<0?'up':'right')}e.preventDefault()}}})}},trigger:function(c,o){var d,obj=o||F.coming||F.current;if(!obj){return}if($.isFunction(obj[c])){d=obj[c].apply(obj,Array.prototype.slice.call(arguments,1))}if(d===false){return false}if(obj.helpers){$.each(obj.helpers,function(a,b){if(b&&F.helpers[a]&&$.isFunction(F.helpers[a][c])){b=$.extend(true,{},F.helpers[a].defaults,b);F.helpers[a][c](b,obj)}})}$.event.trigger(c+'.fb')},isImage:function(a){return isString(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(a){return isString(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var b={},obj,href,type,margin,padding;a=getScalar(a);obj=F.group[a]||null;if(!obj){return false}b=$.extend(true,{},F.opts,obj);margin=b.margin;padding=b.padding;if($.type(margin)==='number'){b.margin=[margin,margin,margin,margin]}if($.type(padding)==='number'){b.padding=[padding,padding,padding,padding]}if(b.modal){$.extend(true,b,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{closeClick:false}}})}if(b.autoSize){b.autoWidth=b.autoHeight=true}if(b.width==='auto'){b.autoWidth=true}if(b.height==='auto'){b.autoHeight=true}b.group=F.group;b.index=a;F.coming=b;if(false===F.trigger('beforeLoad')){F.coming=null;return}type=b.type;href=b.href;if(!type){F.coming=null;if(F.current&&F.router&&F.router!=='jumpto'){F.current.index=a;return F[F.router](F.direction)}return false}F.isActive=true;if(type==='image'||type==='swf'){b.autoHeight=b.autoWidth=false;b.scrolling='visible'}if(type==='image'){b.aspectRatio=true}if(type==='iframe'&&isTouch){b.scrolling='scroll'}b.wrap=$(b.tpl.wrap).addClass('fancybox-'+(isTouch?'mobile':'desktop')+' fancybox-type-'+type+' fancybox-tmp '+b.wrapCSS).appendTo(b.parent||'body');$.extend(b,{skin:$('.fancybox-skin',b.wrap),outer:$('.fancybox-outer',b.wrap),inner:$('.fancybox-inner',b.wrap)});$.each(["Top","Right","Bottom","Left"],function(i,v){b.skin.css('padding'+v,getValue(b.padding[i]))});F.trigger('onReady');if(type==='inline'||type==='html'){if(!b.content||!b.content.length){return F._error('content')}}else if(!href){return F._error('href')}if(type==='image'){F._loadImage()}else if(type==='ajax'){F._loadAjax()}else if(type==='iframe'){F._loadIframe()}else{F._afterLoad()}},_error:function(a){$.extend(F.coming,{type:'html',autoWidth:true,autoHeight:true,minWidth:0,minHeight:0,scrolling:'no',hasError:a,content:F.coming.tpl.error});F._afterLoad()},_loadImage:function(){var a=F.imgPreload=new Image();a.onload=function(){this.onload=this.onerror=null;F.coming.width=this.width;F.coming.height=this.height;F._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;F._error('image')};a.src=F.coming.href;if(a.complete!==true){F.showLoading()}},_loadAjax:function(){var c=F.coming;F.showLoading();F.ajaxLoad=$.ajax($.extend({},c.ajax,{url:c.href,error:function(a,b){if(F.coming&&b!=='abort'){F._error('ajax',a)}else{F.hideLoading()}},success:function(a,b){if(b==='success'){c.content=a;F._afterLoad()}}}))},_loadIframe:function(){var a=F.coming,iframe=$(a.tpl.iframe.replace(/\{rnd\}/g,new Date().getTime())).attr('scrolling',isTouch?'auto':a.iframe.scrolling).attr('src',a.href);$(a.wrap).bind('onReset',function(){try{$(this).find('iframe').hide().attr('src','//about:blank').end().empty()}catch(e){}});if(a.iframe.preload){F.showLoading();iframe.one('load',function(){$(this).data('ready',1);if(!isTouch){$(this).bind('load.fb',F.update)}$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();F._afterLoad()})}a.content=iframe.appendTo(a.inner);if(!a.iframe.preload){F._afterLoad()}},_preloadImages:function(){var a=F.group,current=F.current,len=a.length,cnt=current.preload?Math.min(current.preload,len-1):0,item,i;for(i=1;i<=cnt;i+=1){item=a[(current.index+i)%len];if(item.type==='image'&&item.href){new Image().src=item.href}}},_afterLoad:function(){var c=F.coming,previous=F.current,placeholder='fancybox-placeholder',current,content,type,scrolling,href,embed;F.hideLoading();if(!c||F.isActive===false){return}if(false===F.trigger('afterLoad',c,previous)){c.wrap.stop(true).trigger('onReset').remove();F.coming=null;return}if(previous){F.trigger('beforeChange',previous);previous.wrap.stop(true).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove()}F.unbindEvents();current=c;content=c.content;type=c.type;scrolling=c.scrolling;$.extend(F,{wrap:current.wrap,skin:current.skin,outer:current.outer,inner:current.inner,current:current,previous:previous});href=current.href;switch(type){case'inline':case'ajax':case'html':if(current.selector){content=$('<div>').html(content).find(current.selector)}else if(isQuery(content)){if(!content.data(placeholder)){content.data(placeholder,$('<div class="'+placeholder+'"></div>').insertAfter(content).hide())}content=content.show().detach();current.wrap.bind('onReset',function(){if($(this).find(content).length){content.hide().replaceAll(content.data(placeholder)).data(placeholder,false)}})}break;case'image':content=current.tpl.image.replace('{href}',href);break;case'swf':content='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+href+'"></param>';embed='';$.each(current.swf,function(a,b){content+='<param name="'+a+'" value="'+b+'"></param>';embed+=' '+a+'="'+b+'"'});content+='<embed src="'+href+'" type="application/x-shockwave-flash" width="100%" height="100%"'+embed+'></embed></object>';break}if(!(isQuery(content)&&content.parent().is(current.inner))){current.inner.append(content)}F.trigger('beforeShow');current.inner.css('overflow',scrolling==='yes'?'scroll':(scrolling==='no'?'hidden':scrolling));F._setDimension();F.reposition();F.isOpen=false;F.coming=null;F.bindEvents();if(!F.isOpened){$('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove()}else if(previous.prevMethod){F.transitions[previous.prevMethod]()}F.transitions[F.isOpened?current.nextMethod:current.openMethod]();F._preloadImages()},_setDimension:function(){var a=F.getViewport(),steps=0,canShrink=false,canExpand=false,wrap=F.wrap,skin=F.skin,inner=F.inner,current=F.current,width=current.width,height=current.height,minWidth=current.minWidth,minHeight=current.minHeight,maxWidth=current.maxWidth,maxHeight=current.maxHeight,scrolling=current.scrolling,scrollOut=current.scrollOutside?current.scrollbarWidth:0,margin=current.margin,wMargin=getScalar(margin[1]+margin[3]),hMargin=getScalar(margin[0]+margin[2]),wPadding,hPadding,wSpace,hSpace,origWidth,origHeight,origMaxWidth,origMaxHeight,ratio,width_,height_,maxWidth_,maxHeight_,iframe,body;wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');wPadding=getScalar(skin.outerWidth(true)-skin.width());hPadding=getScalar(skin.outerHeight(true)-skin.height());wSpace=wMargin+wPadding;hSpace=hMargin+hPadding;origWidth=isPercentage(width)?(a.w-wSpace)*getScalar(width)/100:width;origHeight=isPercentage(height)?(a.h-hSpace)*getScalar(height)/100:height;if(current.type==='iframe'){iframe=current.content;if(current.autoHeight&&iframe.data('ready')===1){try{if(iframe[0].contentWindow.document.location){inner.width(origWidth).height(9999);body=iframe.contents().find('body');if(scrollOut){body.css('overflow-x','hidden')}origHeight=body.height()}}catch(e){}}}else if(current.autoWidth||current.autoHeight){inner.addClass('fancybox-tmp');if(!current.autoWidth){inner.width(origWidth)}if(!current.autoHeight){inner.height(origHeight)}if(current.autoWidth){origWidth=inner.width()}if(current.autoHeight){origHeight=inner.height()}inner.removeClass('fancybox-tmp')}width=getScalar(origWidth);height=getScalar(origHeight);ratio=origWidth/origHeight;minWidth=getScalar(isPercentage(minWidth)?getScalar(minWidth,'w')-wSpace:minWidth);maxWidth=getScalar(isPercentage(maxWidth)?getScalar(maxWidth,'w')-wSpace:maxWidth);minHeight=getScalar(isPercentage(minHeight)?getScalar(minHeight,'h')-hSpace:minHeight);maxHeight=getScalar(isPercentage(maxHeight)?getScalar(maxHeight,'h')-hSpace:maxHeight);origMaxWidth=maxWidth;origMaxHeight=maxHeight;if(current.fitToView){maxWidth=Math.min(a.w-wSpace,maxWidth);maxHeight=Math.min(a.h-hSpace,maxHeight)}maxWidth_=a.w-wMargin;maxHeight_=a.h-hMargin;if(current.aspectRatio){if(width>maxWidth){width=maxWidth;height=getScalar(width/ratio)}if(height>maxHeight){height=maxHeight;width=getScalar(height*ratio)}if(width<minWidth){width=minWidth;height=getScalar(width/ratio)}if(height<minHeight){height=minHeight;width=getScalar(height*ratio)}}else{width=Math.max(minWidth,Math.min(width,maxWidth));if(current.autoHeight&&current.type!=='iframe'){inner.width(width);height=inner.height()}height=Math.max(minHeight,Math.min(height,maxHeight))}if(current.fitToView){inner.width(width).height(height);wrap.width(width+wPadding);width_=wrap.width();height_=wrap.height();if(current.aspectRatio){while((width_>maxWidth_||height_>maxHeight_)&&width>minWidth&&height>minHeight){if(steps++>19){break}height=Math.max(minHeight,Math.min(maxHeight,height-10));width=getScalar(height*ratio);if(width<minWidth){width=minWidth;height=getScalar(width/ratio)}if(width>maxWidth){width=maxWidth;height=getScalar(width/ratio)}inner.width(width).height(height);wrap.width(width+wPadding);width_=wrap.width();height_=wrap.height()}}else{width=Math.max(minWidth,Math.min(width,width-(width_-maxWidth_)));height=Math.max(minHeight,Math.min(height,height-(height_-maxHeight_)))}}if(scrollOut&&scrolling==='auto'&&height<origHeight&&(width+wPadding+scrollOut)<maxWidth_){width+=scrollOut}inner.width(width).height(height);wrap.width(width+wPadding);width_=wrap.width();height_=wrap.height();canShrink=(width_>maxWidth_||height_>maxHeight_)&&width>minWidth&&height>minHeight;canExpand=current.aspectRatio?(width<origMaxWidth&&height<origMaxHeight&&width<origWidth&&height<origHeight):((width<origMaxWidth||height<origMaxHeight)&&(width<origWidth||height<origHeight));$.extend(current,{dim:{width:getValue(width_),height:getValue(height_)},origWidth:origWidth,origHeight:origHeight,canShrink:canShrink,canExpand:canExpand,wPadding:wPadding,hPadding:hPadding,wrapSpace:height_-skin.outerHeight(true),skinSpace:skin.height()-height});if(!iframe&&current.autoHeight&&height>minHeight&&height<maxHeight&&!canExpand){inner.height('auto')}},_getPosition:function(a){var b=F.current,viewport=F.getViewport(),margin=b.margin,width=F.wrap.width()+margin[1]+margin[3],height=F.wrap.height()+margin[0]+margin[2],rez={position:'absolute',top:margin[0],left:margin[3]};if(b.autoCenter&&b.fixed&&!a&&height<=viewport.h&&width<=viewport.w){rez.position='fixed'}else if(!b.locked){rez.top+=viewport.y;rez.left+=viewport.x}rez.top=getValue(Math.max(rez.top,rez.top+((viewport.h-height)*b.topRatio)));rez.left=getValue(Math.max(rez.left,rez.left+((viewport.w-width)*b.leftRatio)));return rez},_afterZoomIn:function(){var a=F.current;if(!a){return}F.isOpen=F.isOpened=true;F.wrap.css('overflow','visible').addClass('fancybox-opened');F.update();if(a.closeClick||(a.nextClick&&F.group.length>1)){F.inner.css('cursor','pointer').bind('click.fb',function(e){if(!$(e.target).is('a')&&!$(e.target).parent().is('a')){e.preventDefault();F[a.closeClick?'close':'next']()}})}if(a.closeBtn){$(a.tpl.closeBtn).appendTo(F.skin).bind('click.fb',function(e){e.preventDefault();F.close()})}if(a.arrows&&F.group.length>1){if(a.loop||a.index>0){$(a.tpl.prev).appendTo(F.outer).bind('click.fb',F.prev)}if(a.loop||a.index<F.group.length-1){$(a.tpl.next).appendTo(F.outer).bind('click.fb',F.next)}}F.trigger('afterShow');if(!a.loop&&a.index===a.group.length-1){F.play(false)}else if(F.opts.autoPlay&&!F.player.isActive){F.opts.autoPlay=false;F.play()}},_afterZoomOut:function(a){a=a||F.current;$('.fancybox-wrap').trigger('onReset').remove();$.extend(F,{group:{},opts:{},router:false,current:null,isActive:false,isOpened:false,isOpen:false,isClosing:false,wrap:null,skin:null,outer:null,inner:null});F.trigger('afterClose',a)}});F.transitions={getOrigPosition:function(){var a=F.current,element=a.element,orig=a.orig,pos={},width=50,height=50,hPadding=a.hPadding,wPadding=a.wPadding,viewport=F.getViewport();if(!orig&&a.isDom&&element.is(':visible')){orig=element.find('img:first');if(!orig.length){orig=element}}if(isQuery(orig)){pos=orig.offset();if(orig.is('img')){width=orig.outerWidth();height=orig.outerHeight()}}else{pos.top=viewport.y+(viewport.h-height)*a.topRatio;pos.left=viewport.x+(viewport.w-width)*a.leftRatio}if(F.wrap.css('position')==='fixed'||a.locked){pos.top-=viewport.y;pos.left-=viewport.x}pos={top:getValue(pos.top-hPadding*a.topRatio),left:getValue(pos.left-wPadding*a.leftRatio),width:getValue(width+wPadding),height:getValue(height+hPadding)};return pos},step:function(a,b){var c,padding,value,prop=b.prop,current=F.current,wrapSpace=current.wrapSpace,skinSpace=current.skinSpace;if(prop==='width'||prop==='height'){c=b.end===b.start?1:(a-b.start)/(b.end-b.start);if(F.isClosing){c=1-c}padding=prop==='width'?current.wPadding:current.hPadding;value=a-padding;F.skin[prop](getScalar(prop==='width'?value:value-(wrapSpace*c)));F.inner[prop](getScalar(prop==='width'?value:value-(wrapSpace*c)-(skinSpace*c)))}},zoomIn:function(){var a=F.current,startPos=a.pos,effect=a.openEffect,elastic=effect==='elastic',endPos=$.extend({opacity:1},startPos);delete endPos.position;if(elastic){startPos=this.getOrigPosition();if(a.openOpacity){startPos.opacity=0.1}}else if(effect==='fade'){startPos.opacity=0.1}F.wrap.css(startPos).animate(endPos,{duration:effect==='none'?0:a.openSpeed,easing:a.openEasing,step:elastic?this.step:null,complete:F._afterZoomIn})},zoomOut:function(){var a=F.current,effect=a.closeEffect,elastic=effect==='elastic',endPos={opacity:0.1};if(elastic){endPos=this.getOrigPosition();if(a.closeOpacity){endPos.opacity=0.1}}F.wrap.animate(endPos,{duration:effect==='none'?0:a.closeSpeed,easing:a.closeEasing,step:elastic?this.step:null,complete:F._afterZoomOut})},changeIn:function(){var a=F.current,effect=a.nextEffect,startPos=a.pos,endPos={opacity:1},direction=F.direction,distance=200,field;startPos.opacity=0.1;if(effect==='elastic'){field=direction==='down'||direction==='up'?'top':'left';if(direction==='down'||direction==='right'){startPos[field]=getValue(getScalar(startPos[field])-distance);endPos[field]='+='+distance+'px'}else{startPos[field]=getValue(getScalar(startPos[field])+distance);endPos[field]='-='+distance+'px'}}if(effect==='none'){F._afterZoomIn()}else{F.wrap.css(startPos).animate(endPos,{duration:a.nextSpeed,easing:a.nextEasing,complete:F._afterZoomIn})}},changeOut:function(){var a=F.previous,effect=a.prevEffect,endPos={opacity:0.1},direction=F.direction,distance=200;if(effect==='elastic'){endPos[direction==='down'||direction==='up'?'top':'left']=(direction==='up'||direction==='left'?'-':'+')+'='+distance+'px'}a.wrap.animate(endPos,{duration:effect==='none'?0:a.prevSpeed,easing:a.prevEasing,complete:function(){$(this).trigger('onReset').remove()}})}};F.helpers.overlay={defaults:{closeClick:true,speedOut:200,showEarly:true,css:{},locked:!isTouch,fixed:true},overlay:null,fixed:false,create:function(a){a=$.extend({},this.defaults,a);if(this.overlay){this.close()}this.overlay=$('<div class="fancybox-overlay"></div>').appendTo('body');this.fixed=false;if(a.fixed&&F.defaults.fixed){this.overlay.addClass('fancybox-overlay-fixed');this.fixed=true}},open:function(a){var b=this;a=$.extend({},this.defaults,a);if(this.overlay){this.overlay.unbind('.overlay').width('auto').height('auto')}else{this.create(a)}if(!this.fixed){W.bind('resize.overlay',$.proxy(this.update,this));this.update()}if(a.closeClick){this.overlay.bind('click.overlay',function(e){if($(e.target).hasClass('fancybox-overlay')){if(F.isActive){F.close()}else{b.close()}}})}this.overlay.css(a.css).show()},close:function(){$('.fancybox-overlay').remove();W.unbind('resize.overlay');this.overlay=null;if(this.margin!==false){$('body').css('margin-right',this.margin);this.margin=false}if(this.el){this.el.removeClass('fancybox-lock')}},update:function(){var a='100%',offsetWidth;this.overlay.width(a).height('100%');if(IE){offsetWidth=Math.max(h.documentElement.offsetWidth,h.body.offsetWidth);if(D.width()>offsetWidth){a=D.width()}}else if(D.width()>W.width()){a=D.width()}this.overlay.width(a).height(D.height())},onReady:function(a,b){$('.fancybox-overlay').stop(true,true);if(!this.overlay){this.margin=D.height()>W.height()||$('body').css('overflow-y')==='scroll'?$('body').css('margin-right'):false;this.el=h.all&&!h.querySelector?$('html'):$('body');this.create(a)}if(a.locked&&this.fixed){b.locked=this.overlay.append(b.wrap);b.fixed=false}if(a.showEarly===true){this.beforeShow.apply(this,arguments)}},beforeShow:function(a,b){if(b.locked){this.el.addClass('fancybox-lock');if(this.margin!==false){$('body').css('margin-right',getScalar(this.margin)+b.scrollbarWidth)}}this.open(a)},onUpdate:function(){if(!this.fixed){this.update()}},afterClose:function(a){if(this.overlay&&!F.isActive){this.overlay.fadeOut(a.speedOut,$.proxy(this.close,this))}}};F.helpers.title={defaults:{type:'float',position:'bottom'},beforeShow:function(a){var b=F.current,text=b.title,type=a.type,title,target;if($.isFunction(text)){text=text.call(b.element,b)}if(!isString(text)||$.trim(text)===''){return}title=$('<div class="fancybox-title fancybox-title-'+type+'-wrap">'+text+'</div>');switch(type){case'inside':target=F.skin;break;case'outside':target=F.wrap;break;case'over':target=F.inner;break;default:target=F.skin;title.appendTo('body');if(IE){title.width(title.width())}title.wrapInner('<span class="child"></span>');F.current.margin[2]+=Math.abs(getScalar(title.css('margin-bottom')));break}title[(a.position==='top'?'prependTo':'appendTo')](target)}};$.fn.fancybox=function(b){var c,that=$(this),selector=this.selector||'',run=function(e){var a=$(this).blur(),idx=c,relType,relVal;if(!(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)&&!a.is('.fancybox-wrap')){relType=b.groupAttr||'data-fancybox-group';relVal=a.attr(relType);if(!relVal){relType='rel';relVal=a.get(0)[relType]}if(relVal&&relVal!==''&&relVal!=='nofollow'){a=selector.length?$(selector):that;a=a.filter('['+relType+'="'+relVal+'"]');idx=a.index(this)}b.index=idx;if(F.open(a,b)!==false){e.preventDefault()}}};b=b||{};c=b.index||0;if(!selector||b.live===false){that.unbind('click.fb-start').bind('click.fb-start',run)}else{D.undelegate(selector,'click.fb-start').delegate(selector+":not('.fancybox-item, .fancybox-nav')",'click.fb-start',run)}this.filter('[data-fancybox-start=1]').trigger('click');return this};D.ready(function(){if($.scrollbarWidth===j){$.scrollbarWidth=function(){var a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),child=a.children(),width=child.innerWidth()-child.height(99).innerWidth();a.remove();return width}}if($.support.fixedPosition===j){$.support.fixedPosition=(function(){var a=$('<div style="position:fixed;top:20px;"></div>').appendTo('body'),fixed=(a[0].offsetTop===20||a[0].offsetTop===15);a.remove();return fixed}())}$.extend(F.defaults,{scrollbarWidth:$.scrollbarWidth(),fixed:$.support.fixedPosition,parent:$('body')})})}(window,document,jQuery));