function Util(){}
if(Util.hasClass=function(e,t)
{return e.classList?
    e.classList.contains(t):!!
    e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},
    Util.addClass=function(e,t){var s=t.split(" ");
    e.classList?e.classList.add(s[0]):Util.hasClass(e,s[0])||(e.className+=" "+s[0]),s.length>1&&Util.addClass(e,s.slice(1).join(" "))},
    Util.removeClass=function(e,t){var s=t.split(" ");if(e.classList)e.classList.remove(s[0]);else if(Util.hasClass(e,s[0])){var n=new RegExp("(\\s|^)"+s[0]+"(\\s|$)");
    e.className=e.className.replace(n," ")}s.length>1&&Util.removeClass(e,s.slice(1).join(" "))},Util.toggleClass=function(e,t,s){s?Util.addClass(e,t):Util.removeClass(e,t)},
    Util.setAttributes=function(e,t){for(var s in t)e.setAttribute(s,t[s])},
    Util.getChildrenByClassName=function(e,t)
    {e.children;for(var s=[],n=0;n<e.children.length;n++)
        Util.hasClass(e.children[n],t)&&s.push(e.children[n]);return s},
        Util.setHeight=function(e,t,s,n,i)
        {var l=t-e,a=null,o=function(t){a||(a=t);var r=t-a,c=parseInt(r/n*l+e);
        s.setAttribute("style","height:"+c+"px;"),r<n?window.requestAnimationFrame(o):i()};s.setAttribute("style","height:"+e+"px;"),
        window.requestAnimationFrame(o)},Util.scrollTo=function(e,t,s){var n=window.scrollY||document.documentElement.scrollTop,i=null,l=function(a){i||(i=a);
            var o=a-i;o>t&&(o=t);var r=Math.easeInOutQuad(o,n,e-n,t);window.scrollTo(0,r),o<t?window.requestAnimationFrame(l):s&&s()};window.requestAnimationFrame(l)},
            Util.moveFocus=function(e){e||(e=document.getElementsByTagName("body")[0]),e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),
            e.focus())},Util.getIndexInArray=function(e,t){return Array.prototype.indexOf.call(e,t)},
            Util.cssSupports=function(e,t){return"CSS"in window?CSS.supports(e,t):e.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})
            in document.body.style},Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),
            Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}
            while(null!==t&&1===t.nodeType);return null}),
            "function"!=typeof window.CustomEvent)
            {function CustomEvent(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};
            var s=document.createEvent("CustomEvent");return s.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),s}
            CustomEvent.prototype=window.Event.prototype,window.CustomEvent=CustomEvent}
            Math.easeInOutQuad=function(e,t,s,n){return(e/=n/2)<1?s/2*e*e+t:-s/2*(--e*(e-2)-1)+t},function()
            {var e=function(e){var i;this.element=e,this.sections=this.element.getElementsByClassName("faq-group"),
            this.triggers=this.element.getElementsByClassName("faq-question"),
            this.faqContainer=this.element.getElementsByClassName("faq-items")[0],this.faqsCategoriesContainer=this.element.getElementsByClassName("faq-categories")[0],
            this.faqsCategories=this.faqsCategoriesContainer.getElementsByClassName("faq-category"),
            this.faqOverlay=this.element.getElementsByClassName("faq-overlay")[0],
            this.faqClose=this.element.getElementsByClassName("faq-close-item")[0],
            this.scrolling=!1,(i=this).faqsCategoriesContainer.addEventListener("click",function(e){var t=e.target.closest(".faq-category");if(t){var n=s(i),l=t.getAttribute("href").replace("#","");
            if("mobile"==n){e.preventDefault(),i.faqContainer.scrollTop=0,Util.addClass(i.faqContainer,"faq-items--slide-in"),Util.addClass(i.faqClose,"faq-close-item--move-left"),Util.addClass(i.faqOverlay,"faq-overlay--is-visible");
            var a=i.faqContainer.getElementsByClassName("faq-group--selected");a.length>0&&Util.removeClass(a[0],"faq-group--selected"),Util.addClass(document.getElementById(l),"faq-group--selected")}else{if(!window.requestAnimationFrame)return;e.preventDefault();
                var o=window.scrollY||document.documentElement.scrollTop;Util.scrollTo(document.getElementById(l).getBoundingClientRect().top+o+2,200)}}}),i.faqOverlay.addEventListener("click",function(e){t(i)}),i.faqClose.addEventListener("click",function(e){e.preventDefault(),t(i)}),i.faqContainer.addEventListener("click",function(e)
                {if("desktop"==s(i)){var t=e.target.closest(".faq-question");if(t){e.preventDefault();var l=t.nextElementSibling,a=t.closest("li"),o=Util.hasClass(a,"faq-item-visible");
                Util.toggleClass(a,"faq-item-visible",!o),Util.addClass(l,"faq-response--visible");
                var r=o?l.offsetHeight:0,c=o?0:l.offsetHeight;window.requestAnimationFrame?Util.setHeight(r,c,l,200,function(){n(l,o)}):n(l,o)}}}),
                window.requestAnimationFrame&&window.addEventListener("scroll",function(){"desktop"!=s(i)||i.scrolling||(i.scrolling=!0,window.requestAnimationFrame(function()
                {for(var e=!1,t=0;t<this.sections.length;t++){var s=this.sections[t].getBoundingClientRect().top,n=s<=0&&-1*s<this.sections[t].offsetHeight;Util.toggleClass(this.faqsCategories[t],"faq-category-selected",n),n&&(e=!0)}e
                ||Util.addClass(this.faqsCategories[0],"faq-category-selected"),this.scrolling=!1}.bind(i)))})};function t(e){Util.removeClass(e.faqContainer,"faq-items--slide-in"),Util.removeClass(e.faqClose,"faq-close-item--move-left"),
                Util.removeClass(e.faqOverlay,"faq-overlay--is-visible")}function s(e){return window.getComputedStyle(e.element,"::before").getPropertyValue("content").replace(/'|"/g,"")}function n(e,t){e.removeAttribute("style"),t&&Util.removeClass(e,"faq-response--visible")}
                var i=document.getElementsByClassName("js-ib-faq"),l=[];if(i.length>0)
for(var a=0;a<i.length;a++)l.push(new e(i[a]))}();
