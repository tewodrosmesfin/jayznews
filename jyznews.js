/* Placeholders.js v2.1.0 */
!function(a){"use strict";function b(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function c(a,b){var c,d;for(c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function d(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function e(a,b){try{return a.type=b,!0}catch(c){return!1}}a.Placeholders={Utils:{addEventListener:b,inArray:c,moveCaret:d,changeType:e}}}(this),function(a){"use strict";function b(){}function c(a){var b;return a.value===a.getAttribute(G)&&"true"===a.getAttribute(H)?(a.setAttribute(H,"false"),a.value="",a.className=a.className.replace(F,""),b=a.getAttribute(I),b&&(a.type=b),!0):!1}function d(a){var b,c=a.getAttribute(G);return""===a.value&&c?(a.setAttribute(H,"true"),a.value=c,a.className+=" "+E,b=a.getAttribute(I),b?a.type="text":"password"===a.type&&R.changeType(a,"text")&&a.setAttribute(I,"password"),!0):!1}function e(a,b){var c,d,e,f,g;if(a&&a.getAttribute(G))b(a);else for(c=a?a.getElementsByTagName("input"):o,d=a?a.getElementsByTagName("textarea"):p,g=0,f=c.length+d.length;f>g;g++)e=g<c.length?c[g]:d[g-c.length],b(e)}function f(a){e(a,c)}function g(a){e(a,d)}function h(a){return function(){q&&a.value===a.getAttribute(G)&&"true"===a.getAttribute(H)?R.moveCaret(a,0):c(a)}}function i(a){return function(){d(a)}}function j(a){return function(b){return s=a.value,"true"===a.getAttribute(H)&&s===a.getAttribute(G)&&R.inArray(C,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function k(a){return function(){var b;"true"===a.getAttribute(H)&&a.value!==s&&(a.className=a.className.replace(F,""),a.value=a.value.replace(a.getAttribute(G),""),a.setAttribute(H,!1),b=a.getAttribute(I),b&&(a.type=b)),""===a.value&&(a.blur(),R.moveCaret(a,0))}}function l(a){return function(){a===document.activeElement&&a.value===a.getAttribute(G)&&"true"===a.getAttribute(H)&&R.moveCaret(a,0)}}function m(a){return function(){f(a)}}function n(a){a.form&&(x=a.form,x.getAttribute(J)||(R.addEventListener(x,"submit",m(x)),x.setAttribute(J,"true"))),R.addEventListener(a,"focus",h(a)),R.addEventListener(a,"blur",i(a)),q&&(R.addEventListener(a,"keydown",j(a)),R.addEventListener(a,"keyup",k(a)),R.addEventListener(a,"click",l(a))),a.setAttribute(K,"true"),a.setAttribute(G,v),d(a)}var o,p,q,r,s,t,u,v,w,x,y,z,A,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],D="#ccc",E="placeholdersjs",F=new RegExp("(?:^|\\s)"+E+"(?!\\S)"),G="data-placeholder-value",H="data-placeholder-active",I="data-placeholder-type",J="data-placeholder-submit",K="data-placeholder-bound",L="data-placeholder-focus",M="data-placeholder-live",N=document.createElement("input"),O=document.getElementsByTagName("head")[0],P=document.documentElement,Q=a.Placeholders,R=Q.Utils;if(Q.nativeSupport=void 0!==N.placeholder,!Q.nativeSupport){for(o=document.getElementsByTagName("input"),p=document.getElementsByTagName("textarea"),q="false"===P.getAttribute(L),r="false"!==P.getAttribute(M),t=document.createElement("style"),t.type="text/css",u=document.createTextNode("."+E+" { color:"+D+"; }"),t.styleSheet?t.styleSheet.cssText=u.nodeValue:t.appendChild(u),O.insertBefore(t,O.firstChild),A=0,z=o.length+p.length;z>A;A++)y=A<o.length?o[A]:p[A-o.length],v=y.attributes.placeholder,v&&(v=v.nodeValue,v&&R.inArray(B,y.type)&&n(y));w=setInterval(function(){for(A=0,z=o.length+p.length;z>A;A++)y=A<o.length?o[A]:p[A-o.length],v=y.attributes.placeholder,v&&(v=v.nodeValue,v&&R.inArray(B,y.type)&&(y.getAttribute(K)||n(y),(v!==y.getAttribute(G)||"password"===y.type&&!y.getAttribute(I))&&("password"===y.type&&!y.getAttribute(I)&&R.changeType(y,"text")&&y.setAttribute(I,"password"),y.value===y.getAttribute(G)&&(y.value=v),y.setAttribute(G,v))));r||clearInterval(w)},100)}Q.disable=Q.nativeSupport?b:f,Q.enable=Q.nativeSupport?b:g}(this);

/* scroll-to-top.js v1.0 */
jQuery( function () {

	jQuery( 'body' ).prepend( '<div class="scroll-topnbt"><i class="fa fa-angle-double-up fa-4x"></i></div>');

	var scrollButtonEl = jQuery( '.scroll-topnbt' );

	scrollButtonEl.hide();

	jQuery( window ).scroll( function () {
		if ( jQuery( window ).scrollTop() < 20 ) {
			jQuery( '.scroll-topnbt' ).fadeOut();
		} else {
			jQuery( '.scroll-topnbt' ).fadeIn();
		}
	} );

	scrollButtonEl.click( function () {
		jQuery( "html, body" ).animate( { scrollTop: 0 }, 300 );
		return false;
	} );

} );


jQuery(document).ready(function($) {
		var stickyHeaderTop = $('.menu-boxnbt').offset().top;
		$(window).scroll(function(){
		    if( $(window).scrollTop() > stickyHeaderTop ) {
			$('.menu-boxnbt').addClass("sticky-navnbt");
		    } else {
			$('.menu-boxnbt').removeClass("sticky-navnbt");
		    }
		});
});

jQuery(document).ready(function(){
  jQuery("#sidebarnbt .widget h2").wrapInner("<span class='sidebar-headline-textnbt'></span>");
  jQuery("#sidebarnbt .widget h3").wrapInner("<span class='sidebar-headline-textnbt'></span>");
  jQuery("#footernbt .widget h2").wrapInner("<span class='footer-headline-textnbt'></span>");
  jQuery("#footernbt .widget h3").wrapInner("<span class='footer-headline-textnbt'></span>");
  
  /* Responzive.js v1.0 */
  selectnav('navnbt');
  selectnav('top-navnbt');
  
});

 imgr=new Array();imgr[0]="https://2.bp.blogspot.com/-ex3V86fj4dQ/UrCQQa4cLsI/AAAAAAAAFdA/j2FCTmGOrog/s1600/no-thumbnail.png";showRandomImg=true;aBold=true;summaryPost=400;summaryTitle=20;numposts1=12;numposts2=4;function removeHtmlTag(strx,chop){var s=strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)}}s=s.join("");s=s.substring(0,chop-1);return s}
      function showrecentposts1(json){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();if(numposts2<=json.feed.entry.length){maxpost=numposts2}else{maxpost=json.feed.entry.length}for(var i=0;i<maxpost;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var pcm;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){pcm=entry.link[k].title.split(" ")[0];break}}if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++){if(parseInt(m)==month[u2]){m=month2[u2];break}}var daystr=day+' '+m+' '+y;pcm='<a href="'+posturl+'">'+pcm+' comments</a>';var trtd='<div class="col_maskolis"><h2 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h2><a href="'+posturl+'"><img class="related_img" src="'+img[i]+'"/></a><div class="clear"></div></div>';document.write(trtd);j++}}var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;try{thumburl[relatedTitlesNum]=entry.gform_foot.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[relatedTitlesNum]=d}else thumburl[relatedTitlesNum]='https://2.bp.blogspot.com/-ex3V86fj4dQ/UrCQQa4cLsI/AAAAAAAAFdA/j2FCTmGOrog/s1600/no-thumbnail.png'}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++}}}}function removeRelatedDuplicates_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;return false}function printRelatedLabels_thumbs(){for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==currentposturl)||(!(relatedTitles[i]))){relatedUrls.splice(i,1);relatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;if(relatedTitles.length>0)document.write('<h4>'+relatedpoststitle+'</h4>');document.write('<div class="related-container"><ul>');while(i<relatedTitles.length&&i<20&&i<maxresults){document.write('<li class="related-item"><a ');document.write(' href="'+relatedUrls[r]+'"><div class="related_img" style="background-image:url('+thumburl[r]+')"></div><h3 class="related-title">'+relatedTitles[r]+'</h3></a></li>');if(r<relatedTitles.length-1){r++}else{r=0}i++}document.write('</ul></div>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)};
      
      
function showrecentcomments(json){for(var i=0;i<a_rc;i++){var b_rc=json.feed.entry[i];var c_rc;if(i==json.feed.entry.length)break;for(var k=0;k<b_rc.link.length;k++){if(b_rc.link[k].rel=='alternate'){c_rc=b_rc.link[k].href;break;}}c_rc=c_rc.replace("#","#comment-");var d_rc=c_rc.split("#");d_rc=d_rc[0];var e_rc=d_rc.split("/");e_rc=e_rc[5];e_rc=e_rc.split(".html");e_rc=e_rc[0];var f_rc=e_rc.replace(/-/g," ");f_rc=f_rc.link(d_rc);var g_rc=b_rc.published.$t;var h_rc=g_rc.substring(0,4);var i_rc=g_rc.substring(5,7);var j_rc=g_rc.substring(8,10);var k_rc=new Array();k_rc[1]="Jan";k_rc[2]="Feb";k_rc[3]="Mar";k_rc[4]="Apr";k_rc[5]="May";k_rc[6]="Jun";k_rc[7]="Jul";k_rc[8]="Aug";k_rc[9]="Sep";k_rc[10]="Oct";k_rc[11]="Nov";k_rc[12]="Dec";if("content" in b_rc){var l_rc=b_rc.content.$t;}else if("summary" in b_rc){var l_rc=b_rc.summary.$t;}else var l_rc="";var re=/<\S[^>]*>/g;l_rc=l_rc.replace(re,"");if(m_rc==true)document.write('On '+k_rc[parseInt(i_rc,10)]+' '+j_rc+' ');document.write('<a href="'+c_rc+'">'+b_rc.author[0].name.$t+'</a> commented');if(n_rc==true)document.write(' on '+f_rc);document.write(': ');if(l_rc.length<o_rc){document.write('<i>&#8220;');document.write(l_rc);document.write('&#8221;</i><br/><br/>');}else{document.write('<i>&#8220;');l_rc=l_rc.substring(0,o_rc);var p_rc=l_rc.lastIndexOf(" ");l_rc=l_rc.substring(0,p_rc);document.write(l_rc+'&hellip;&#8221;</i>');document.write('<br/><br/>');}}}

function rp(json){document.write('<ul>');for(var i=0;i<numposts;i++){document.write('<li>');var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}posttitle=posttitle.link(posturl);var readmorelink="(more)";readmorelink=readmorelink.link(posturl);var postdate=entry.published.$t;var cdyear=postdate.substring(0,4);var cdmonth=postdate.substring(5,7);var cdday=postdate.substring(8,10);var monthnames=new Array();monthnames[1]="Jan";monthnames[2]="Feb";monthnames[3]="Mar";monthnames[4]="Apr";monthnames[5]="May";monthnames[6]="Jun";monthnames[7]="Jul";monthnames[8]="Aug";monthnames[9]="Sep";monthnames[10]="Oct";monthnames[11]="Nov";monthnames[12]="Dec";if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";var re=/<\S[^>]*>/g;postcontent=postcontent.replace(re,"");document.write(posttitle);if(showpostdate==true)document.write(' - '+monthnames[parseInt(cdmonth,10)]+' '+cdday);if(showpostsummary==true){if(postcontent.length<numchars){document.write(postcontent)}else{postcontent=postcontent.substring(0,numchars);var quoteEnd=postcontent.lastIndexOf(" ");postcontent=postcontent.substring(0,quoteEnd);document.write(postcontent+'...'+readmorelink)}}document.write('</li>')}document.write('</ul>')}

summary_noimg = 400;
summary_img = 300;
img_thumb_height = 150;
img_thumb_width = 200; 


function removeHtmlTag(strx,chop){ 
	if(strx.indexOf("<")!=-1)
	{
		var s = strx.split("<"); 
		for(var i=0;i<s.length;i++){ 
			if(s[i].indexOf(">")!=-1){ 
				s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
			} 
		} 
		strx =  s.join(""); 
	}
	chop = (chop < strx.length-1) ? chop : strx.length-2; 
	while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
	strx = strx.substring(0,chop-1); 
	return strx+'...'; 
}

function createSummaryAndThumb(pID){
	var div = document.getElementById(pID);
	var imgtag = "";
	var img = div.getElementsByTagName("img");
	var summ = summary_noimg;
	if(img.length>=1) {	
		imgtag = '<img src="'+img[0].src+'" class="pbtthumbimg"/>';
		summ = summary_img;
	}
	
	var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
	div.innerHTML = summary;
}

!
function (t) {
	function a(a) {
		t.getScript("http://" + a + ".disqus.com/blogger_index.js")
	}
	function e() {
		if (!l) {
			if (l = !0, !r) return void d.html("<span>No More Posts!</span>");
			d.find("a").hide(),
			d.find("img").show(),
			t.ajax(r, {
				dataType: "html"
			}).done(function (e) {
				var i = t("<div></div>").append(e.replace(f, "")),
				s = i.find("a.blog-pager-older-link");
				s ? r = s.attr("href") : (r = "", d.hide());
				var o = i.find(p).children();
				t(p).append(o),
				function (t) {
					t(".data-snippet").each(function () {
						var a = t(this);
						t("body").hasClass("blog-classic") ? t.get(a.attr("data-post"), function (e) {
							a.html("<span>" + t(e).find(".post-body").text().substr(0, 450) + " [...]</span>")
						},
						"html") : t.get(a.attr("data-post"), function (e) {
							a.html("<span>" + t(e).find(".post-body").text().substr(0, 250) + " [...]</span>")
						},
						"html")
					})
				} (jQuery),
				t(".post-thumb a").attr("style", function (t, a) {
					return a.replace("/s72-c", "/s1600")
				}),
				t(".post-thumb a").attr("style", function (t, a) {
					return a.replace("/default.jpg", "/mqdefault.jpg")
				}),
				t(".index .post-outer").each(function () {
					var a = t(this).find(".post-home .post-title").text(),
					e = t(this).find(".post-thumb a").attr("data-thumb"),
					i = t(this).find(".data-snippet"),
					s = i.attr("data-post"),
					o = t(this).find(".post-share").length;
					0 === o && i.after('<div class="post-share"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + s + '"><i class="fa fa-facebook"></i></a><a target="_blank" href="https://twitter.com/intent/tweet?source=webclient&text=' + a + " " + s + '"><i class="fa fa-twitter"></i></a><a target="_blank" href="https://plus.google.com/share?url=' + s + '"><i class="fa fa-google-plus"></i></a><a target="_blank" href="http://www.pinterest.com/pin/create/button/?source_url=' + s + "&media=" + e + "&description=" + a + '"><i class="fa fa-pinterest"></i></a><a target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&url=' + s + '"><i class="fa fa-linkedin"></i></a><div>');
					var n = t(this).find(".post-share"),
					r = t(this).find(".post-thumb");
					n.insertAfter(r)
				}),
				"?classic" === t(location).attr("search") && (t("body").addClass("blog-classic"), t(".index .post-outer").each(function () {
					var a = t(this).find(".post-labels"),
					e = t(this).find(".post-home .post-title"),
					i = t(this).find(".post-home .author-info"),
					s = (t(this).find(".post-thumb"), t(this).find(".post-home"));
					t(s).prepend(i),
					t(s).prepend(e),
					t(s).prepend(a)
				})),
				window._gaq && window._gaq.push(["_trackPageview", r]),
				window.gapi && window.gapi.plusone && window.gapi.plusone.go && window.gapi.plusone.go(),
				window.disqus_shortname && a(window.disqus_shortname),
				window.FB && window.FB.XFBML && window.FB.XFBML.parse && window.FB.XFBML.parse(),
				window.twttr && window.twttr.widgets && window.twttr.widgets.load && window.twttr.widgets.load(),
				d.find("img").hide(),
				d.find("a").show(),
				l = !1
			})
		}
	}
	function i() {
		return Math.max(h.height(), c.height(), document.documentElement.clientHeight)
	}
	function s() {
		var t = i(),
		a = h.scrollTop() + h.height();
		0 > t - a && e()
	}
	function o() {
		if ("item" != _WidgetManager._GetAllData().blog.pageType && (r = t("a.blog-pager-older-link").attr("href"))) {
			var a = t('<a href="javascript:;"><i class="fa fa-level-down"></i> More</a>');
			a.click(e);
			var i = t('<img src="' + n + '" style="display: none;">');
			h.scroll(s),
			d = t('<div class="loadmore"></div>'),
			d.append(a),
			d.append(i),
			d.insertBefore(t("#blog-pager")),
			t("#blog-pager").hide()
		}
	}
	var n = "https://1.bp.blogspot.com/-mS3MxrWoZMA/U7cGlLXgvVI/AAAAAAAAEQE/OYVpjUSqEHI/s1600/ajax-loader+(2).gif",
	r = "",
	d = null,
	p = ".blog-posts",
	l = !1,
	h = t(window),
	c = t(document),
	f = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
	t(document).ready(o)
} (jQuery); !
function (t) {
	t(".data-snippet").each(function () {
		var a = t(this);
		t("body").hasClass("blog-classic") ? t.get(a.attr("data-post"), function (e) {
			a.html("<span>" + t(e).find(".post-body").text().substr(0, 450) + " [...]</span>")
		},
		"html") : t.get(a.attr("data-post"), function (e) {
			a.html("<span>" + t(e).find(".post-body").text().substr(0, 250) + " [...]</span>")
		},
		"html")
	})
} (jQuery),
$(".post-thumb a").attr("style", function (t, a) {
	return a.replace("/s72-c", "/s1600")
}),
$(".post-thumb a").attr("style", function (t, a) {
	return a.replace("/default.jpg", "/mqdefault.jpg")
}),
$(".index .post-outer").each(function () {
	var t = $(this).find(".post-home .post-title").text(),
	a = $(this).find(".post-thumb a").attr("data-thumb"),
	e = $(this).find(".data-snippet"),
	s = e.attr("data-post"),
	i = $(this).find(".post-share").length;
	0 === i && e.after('<div class="post-share"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + s + '"><i class="fa fa-facebook"></i></a><a target="_blank" href="https://twitter.com/intent/tweet?source=webclient&text=' + t + " " + s + '"><i class="fa fa-twitter"></i></a><a target="_blank" href="https://plus.google.com/share?url=' + s + '"><i class="fa fa-google-plus"></i></a><a target="_blank" href="http://www.pinterest.com/pin/create/button/?source_url=' + s + "&media=" + a + "&description=" + t + '"><i class="fa fa-pinterest"></i></a><a target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&url=' + s + '"><i class="fa fa-linkedin"></i></a><div>');
	var r = $(this).find(".post-share"),
	n = $(this).find(".post-thumb");
	r.insertAfter(n)
});
(function (d) {
	var n = {
		speed: 700,
		pause: 4E3,
		showItems: 1,
		mousePause: !0,
		height: 0,
		animate: !0,
		margin: 0,
		padding: 0,
		startPaused: !1
	},
	c = {
		moveUp: function (a, b) {
			c.animate(a, b, "up")
		},
		moveDown: function (a, b) {
			c.animate(a, b, "down")
		},
		animate: function (a, b, e) {
			var c = a.itemHeight,
			f = a.options,
			k = a.element,
			g = k.children("ul"),
			l = "up" === e ? "li:first": "li:last";
			k.trigger("vticker.beforeTick");
			var m = g.children(l).clone(!0);
			0 < f.height && (c = g.children("li:first").height());
			c += f.margin + 2 * f.padding;
			"down" === e && g.css("top", "-" + c + "px").prepend(m);
			if (b && b.animate) {
				if (a.animating) return;
				a.animating = !0;
				g.animate("up" === e ? {
					top: "-=" + c + "px"
				}: {
					top: 0
				},
				f.speed, function () {
					d(g).children(l).remove();
					d(g).css("top", "0px");
					a.animating = !1;
					k.trigger("vticker.afterTick")
				})
			} else g.children(l).remove(),
			g.css("top", "0px"),
			k.trigger("vticker.afterTick");
			"up" === e && m.appendTo(g)
		},
		nextUsePause: function () {
			var a = d(this).data("state"),
			b = a.options;
			a.isPaused || 2 > a.itemCount || f.next.call(this, {
				animate: b.animate
			})
		},
		startInterval: function () {
			var a = d(this).data("state"),
			b = this;
			a.intervalId = setInterval(function () {
				c.nextUsePause.call(b)
			},
			a.options.pause)
		},
		stopInterval: function () {
			var a = d(this).data("state");
			a && (a.intervalId && clearInterval(a.intervalId), a.intervalId = void 0)
		},
		restartInterval: function () {
			c.stopInterval.call(this);
			c.startInterval.call(this)
		}
	},
	f = {
		init: function (a) {
			f.stop.call(this);
			var b = jQuery.extend({},
			n);
			a = d.extend(b, a);
			var b = d(this),
			e = {
				itemCount: b.children("ul").children("li").length,
				itemHeight: 0,
				itemMargin: 0,
				element: b,
				animating: !1,
				options: a,
				isPaused: a.startPaused ? !0 : !1,
				pausedByCode: !1
			};
			d(this).data("state", e);
			b.css({
				overflow: "hidden",
				position: "relative"
			}).children("ul").css({
				position: "absolute",
				margin: 0,
				padding: 0
			}).children("li").css({
				margin: a.margin,
				padding: a.padding
			});
			isNaN(a.height) || 0 === a.height ? (b.children("ul").children("li").each(function () {
				var a = d(this);
				a.height() > e.itemHeight && (e.itemHeight = a.height())
			}), b.children("ul").children("li").each(function () {
				d(this).height(e.itemHeight)
			}), b.height((e.itemHeight + (a.margin + 2 * a.padding)) * a.showItems + a.margin)) : b.height(a.height);
			var h = this;
			a.startPaused || c.startInterval.call(h);
			a.mousePause && b.bind("mouseenter", function () { ! 0 !== e.isPaused && (e.pausedByCode = !0, c.stopInterval.call(h), f.pause.call(h, !0))
			}).bind("mouseleave", function () {
				if (!0 !== e.isPaused || e.pausedByCode) e.pausedByCode = !1,
				f.pause.call(h, !1),
				c.startInterval.call(h)
			})
		},
		pause: function (a) {
			var b = d(this).data("state");
			if (b) {
				if (2 > b.itemCount) return ! 1;
				b.isPaused = a;
				b = b.element;
				a ? (d(this).addClass("paused"), b.trigger("vticker.pause")) : (d(this).removeClass("paused"), b.trigger("vticker.resume"))
			}
		},
		next: function (a) {
			var b = d(this).data("state");
			if (b) {
				if (b.animating || 2 > b.itemCount) return ! 1;
				c.restartInterval.call(this);
				c.moveUp(b, a)
			}
		},
		prev: function (a) {
			var b = d(this).data("state");
			if (b) {
				if (b.animating || 2 > b.itemCount) return ! 1;
				c.restartInterval.call(this);
				c.moveDown(b, a)
			}
		},
		stop: function () {
			d(this).data("state") && c.stopInterval.call(this)
		},
		remove: function () {
			var a = d(this).data("state");
			a && (c.stopInterval.call(this), a = a.element, a.unbind(), a.remove())
		}
	};
	d.fn.vTicker = function (a) {
		if (f[a]) return f[a].apply(this, Array.prototype.slice.call(arguments, 1));
		if ("object" !== typeof a && a) d.error("Method " + a + " does not exist on jQuery.vTicker");
		else return f.init.apply(this, arguments)
	}
})(jQuery); !
function (t) {
	t.fn.moderntube = function () {
		return this.each(function () {
			var i = t(this),
			r = i.find('iframe[src*="youtube.com"]');
			r.attr("height", "").attr("width", "");
			var h = t(this).width(),
			n = 480 * h / 853;
			r.attr("height", n).attr("width", "100%"),
			t(window).bind("resize load", function () {
				var t = i.width(),
				h = 480 * t / 853;
				r.attr("height", h).attr("width", "100%")
			})
		})
	}
} (jQuery),
$(".post-body").moderntube();
window.selectnav = function () {
	"use strict";
	var e = function (e, t) {
		function c(e) {
			var t;
			if (!e) e = window.event;
			if (e.target) t = e.target;
			else if (e.srcElement) t = e.srcElement;
			if (t.nodeType === 3) t = t.parentNode;
			if (t.value) window.location.href = t.value
		}
		function h(e) {
			var t = e.nodeName.toLowerCase();
			return t === "ul" || t === "ol"
		}
		function p(e) {
			for (var t = 1; document.getElementById("selectnav" + t); t++);
			return e ? "selectnav" + t: "selectnav" + (t - 1)
		}
		function d(e) {
			a++;
			var t = e.children.length,
			n = "",
			l = "",
			c = a - 1;
			if (!t) {
				return
			}
			if (c) {
				while (c--) {
					l += o
				}
				l += " "
			}
			for (var v = 0; v < t; v++) {
				var m = e.children[v].children[0];
				if (typeof m !== "undefined") {
					var g = m.innerText || m.textContent;
					var y = "";
					if (r) {
						y = m.className.search(r) !== -1 || m.parentNode.className.search(r) !== -1 ? f: ""
					}
					if (i && !y) {
						y = m.href === document.URL ? f: ""
					}
					n += '<option value="' + m.href + '" ' + y + ">" + l + g + "</option>";
					if (s) {
						var b = e.children[v].children[1];
						if (b && h(b)) {
							n += d(b)
						}
					}
				}
			}
			if (a === 1 && u) {
				n = '<option value="">' + u + "</option>" + n
			}
			if (a === 1) {
				n = '<select class="selectnav" id="' + p(true) + '">' + n + "</select>"
			}
			a--;
			return n
		}
		e = document.getElementById(e);
		if (!e) {
			return
		}
		if (!h(e)) {
			return
		}
		if (! ("insertAdjacentHTML" in window.document.documentElement)) {
			return
		}
		document.documentElement.className += " js";
		var n = t || {},
		r = n.activeclass || "active",
		i = typeof n.autoselect === "boolean" ? n.autoselect: true,
		s = typeof n.nested === "boolean" ? n.nested: true,
		o = n.indent || "k;",
		u = n.label || "- Menu -",
		a = 0,
		f = " selected ";
		e.insertAdjacentHTML("afterend", d(e));
		var l = document.getElementById(p());
		if (l.addEventListener) {
			l.addEventListener("change", c)
		}
		if (l.attachEvent) {
			l.attachEvent("onchange", c)
		}
		return l
	};
	return function (t, n) {
		e(t, n)
	}
} ();
$(document).ready(function () {
	selectnav('Anav')
});
$(".footer-section").each(function () {
	var t = $(this),
	e = t.find("h2");
	"[about]" == e.text().trim() && (t.addClass("footer-description"), t.find("img").attr("width", "").attr("height", "").attr("alt", "Footer Logo"), e.remove())
}),
function (t) {
	t(".PopularPosts img").attr("src", function (t, e) {
		return e.replace("/default.jpg", "/mqdefault.jpg")
	}).attr("src", function (t, e) {
		return e.replace("s72-c", "s1600")
	}),
	t(".PopularPosts .widget-content ul li").each(function () {
		var e = t(this),
		i = t(this).find(".item-title a"),
		a = (i.attr("href"), t(this).find(".item-thumbnail a img").attr("src")),
		n = t(this).find(".item-thumbnail a"),
		r = t(this).find(".item-thumbnail");
		n.css("background-image", "url(" + a + ")").empty(),
		r.prependTo(e),
		t.get(i.attr("href"), function (e) {
			i.parent().after('<div class="post-meta">' + t(e).find(".post-meta .post-timestamp").html() + "</div>")
		},
		"html")
	})
} (jQuery),
$(".FeaturedPost").each(function () {
	var t = $(this).find(".image"),
	e = $(this).find(".post-summary h3"),
	i = $(this).find(".post-summary p");
	e.insertAfter(t),
	e.wrap('<div class="featured-contents"></div>');
	var a = $(this).find(".featured-contents");
	a.append(i)
}),
$(".follow-by-email-submit").attr("value", ""),
$(".FollowByEmail").each(function () {
	$(this).find(".item-control").remove();
	var t = $(this).find(".follow-by-email-inner form");
	$(this).find(".follow-by-email-submit, .follow-by-email-address").prependTo(t),
	t.find("table").remove(),
	t.before("<p>Sign up to hear and get our daily new update via email.</p>")
}),
$(".sidebar .widget-content, .footer .widget-content").each(function () {
	var t = ($(this), $(this).text().replace(/\s+/g, ""));
	t.split("/")
});
$(".news .Label").each(function () {
	var e = $(this).find(".news-label:first span").text(),
	t = $(this).find("h2").text(),
	s = t.match(/[^[\]]+(?=])/g);
	$(this).html("<span style='visibility:hidden'>" + s[0] + "</span><span style='visibility:hidden'>" + s[1] + "</span><span style='visibility:hidden'>" + e + "</span>");
	var i = ($(this).text(), $(this).find("span").eq(0).text()),
	n = $(this).find("span").eq(1).text(),
	a = $(this).find("span").eq(2).text();
	$.ajax({
		url: "/feeds/posts/default/-/" + a + "?alt=json-in-script&max-results=" + n,
		type: "get",
		dataType: "jsonp",
		success: function (e) {
			for (var t = "", s = '<div class="ticker-container"><ul>', n = 0; n < e.feed.entry.length; n++) {
				for (var a = 0; a < e.feed.entry[n].link.length; a++) if ("alternate" == e.feed.entry[n].link[a].rel) {
					t = e.feed.entry[n].link[a].href;
					break
				}
				var l = e.feed.entry[n].title.$t,
				r = e.feed.entry[n].published.$t,
				d = r.substring(0, 4),
				h = r.substring(5, 7),
				c = r.substring(8, 10),
				f = [, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				p = f[parseInt(h, 10)] + " " + c + ", " + d,
				b = e.feed.entry[n].content.$t;
				$("<div>").html(b);
				s += '<li><span class="recent-date"><i class="fa fa-clock-o"></i>  ' + p + '</span><h3 class="recent-title"><a href="' + t + '">' + l + "</a></h3></li>"
			}
			s += "</ul></div>",
			$(".news .Label").each(function () {
				$(this).html(s),
				$(this).removeClass("Label").addClass("news_Label"),
				$(this).prepend('<h2 class="newstitle"><i class="fa fa-bookmark-o"></i> ' + i + "</h2>"),
				$(this).find("h2.newstitle").wrap('<div class="news-title"></div>'),
				$(".ticker-container").vTicker()
			})
		}
	})
});
$(document).ready(function (e) {
	var t = 700,
	o = e(".bt-top");
	o.on("click", function (o) {
		o.preventDefault(),
		e("body,html").animate({
			scrollTop: 0
		},
		t)
	})
}),
$(".item .post-body img").each(function () {
	var e = $(this).closest("a").css("margin-left").replace("px", ""),
	t = $(this).closest("a").css("margin-right").replace("px", "");
	e > 0 && t > 0 && ($(this).closest("a").css("margin-left", "0"), $(this).closest("a").css("margin-right", "0"), $(this).width("100%").height("auto"))
}),
$(".search-button a").click(function () {
	return $(".search-box-overlay").addClass("search-box-overlay-show"),
	!1
}),
$(".search-box-close").click(function () {
	return $(".search-box-overlay").removeClass("search-box-overlay-show"),
	!1
}),
$(document).click(function (e) {
	return $(e.target).closest(".search-box-wrapper").length > 0 ? !0 : void $(".search-box-overlay").removeClass("search-box-overlay-show")
}),
$(document).ready(function () {
	$(".main-wrapper, .sidebar-wrapper").theiaStickySidebar({
		additionalMarginTop: 30,
		additionalMarginBottom: 30
	})
}),
$(document).ready(function () {
	$(".item .post-footer").theiaStickySidebar({
		additionalMarginTop: 10,
		additionalMarginBottom: 10
	})
});
var posterTitle = function (e) {
	$(e).each(function () {
		var e = $(this).outerHeight(),
		t = (110 - e) / 2;
		$(this).css("margin-top", t)
	})
},
newerLink = $("a.blog-pager-newer-link").attr("href"),
olderLink = $("a.blog-pager-older-link").attr("href");
$.get(newerLink, function (e) {
	$(".post-pager .next").prepend('<a href="' + newerLink + '"><i class="fa fa-long-arrow-right"></i><div class="img" style="background-image:url(' + $(e).find(".post-body img:first").attr("src") + ')"/><h3>' + $(e).find(".post-outer .post-title").text() + "</h3></a>"),
	posterTitle(".post-pager h3")
},
"html"),
$.get(olderLink, function (e) {
	$(".post-pager .prev").append('<a href="' + olderLink + '"><i class="fa fa-long-arrow-left"></i><div class="img" style="background-image:url(' + $(e).find(".post-body img:first").attr("src") + ')"/><h3>' + $(e).find(".post-outer .post-title").text() + "</h3></a>"),
	posterTitle(".post-pager h3")
},
"html");
var removePager = function (e, t) {
	0 === $(e).length && $(t).remove()
};
removePager("a.blog-pager-newer-link", ".post-pager .next"),
removePager("a.blog-pager-older-link", ".post-pager .prev"),
$(document).ready(function () {
	var e = $(".item .post-body img:first").attr("src");
	$(".post-format-container").append('<div class="image-format js-format"><img src="' + e + '"/></div>'),
	$(".item .post-body img").each(function () {
		var e = $(this).attr("title");
		"remove_image" === e && $(this).closest("a").remove()
	})
}),
$(function () {
	$("#nav").slicknav({
		prependTo: ".mobile-menu"
	}),
	$(window).width() <= 1020 && $(".search-button").appendTo(".mobile-menu")
}),
$(".item .post-body").readingTime({
	readingTimeTarget: $(".item .post").find(".eta"),
	wordCountTarget: $(".item .post").find(".words"),
	success: function () {
		console.log("It worked!")
	},
	error: function (e) {
		console.log(e),
		$(this).find(".eta").remove()
	}
}),
$(function () {
	$("html").removeClass("no-js").addClass("js-loaded")
});
$(document).ready(function () {
	$('#mycontent').html('<a href="http://www.jayznews.com/"></a>');
	setInterval(function () {
		if (!$('#mycontent:visible').length) window.location.href = 'http://www.jayznews.com/'
	},
	3000)
})
