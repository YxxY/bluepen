(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{676:function(t,e,i){i(2)({target:"Function",proto:!0},{bind:i(335)})},677:function(t,e,i){var n=i(2),a=Math.ceil,r=Math.floor;n({target:"Math",stat:!0},{trunc:function(t){return(t>0?r:a)(t)}})},678:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i(75),i(77),i(138),i(102),i(12),i(52),i(76);var n=i(113);function a(t,e){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=Object(n.a)(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){c=!0,s=t},f:function(){try{o||null==i.return||i.return()}finally{if(c)throw s}}}}},679:function(t,e,i){},743:function(t,e,i){"use strict";var n=i(679);i.n(n).a},758:function(t,e,i){"use strict";i.r(e);i(136),i(332),i(137),i(72),i(74),i(676),i(677),i(201),i(12),i(36),i(73),i(333),i(71),i(101);var n=i(678),a={name:"flipCountdown",props:{deadline:{type:String},stop:{type:Boolean},labels:{type:Object,required:!1,default:function(){return{days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"}}}},data:function(){var t=this,e=new Array(6).map((function(t){return Math.floor(Math.random()*Math.floor(10))})).join("");return{now:0,date:null,interval:null,diff:0,show:!0,timeData:Object.keys(this.labels).map((function(i){return{current:0,previous:0,label:t.labels[i],elementId:"flip-card-".concat(i,"-").concat(e)}}))}},created:function(){var t=this;if(!this.deadline)throw new Error("Missing props 'deadline'");var e=this.deadline;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline'");this.now=Math.trunc((new Date).getTime()/1e3),this.diff=this.date-this.now,this.interval=setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},mounted:function(){this.update()},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{deadline:function(t,e){var i=this.deadline;if(this.date=Math.trunc(Date.parse(i.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline'")},now:function(t){this.diff=this.date-this.now,this.diff<=0||this.stop?(this.diff=0,this.updateTime(3,0)):this.update()}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},methods:{update:function(){this.updateTime(0,this.days),this.updateTime(1,this.hours),this.updateTime(2,this.minutes),this.updateTime(3,this.seconds)},updateTime:function(t,e){if(!(t>=this.timeData.length||void 0===e)){window.requestAnimationFrame&&(this.frame=requestAnimationFrame(this.updateTime.bind(this)));var i=this.timeData[t],a=e<0?0:e,r=document.querySelector("#".concat(i.elementId));if(a!==i.current&&(i.previous=i.current,i.current=a,r&&(r.classList.remove("flip"),r.offsetWidth,r.classList.add("flip")),0===t)){var s=r.querySelectorAll("span b");if(s){var o,c=Object(n.a)(s);try{for(c.s();!(o=c.n()).done;){var u=o.value,l=u.classList[0];if(e/1e3>=1){if(!l.includes("-4digits")){var d=l+"-4digits";u.classList.add(d),u.classList.remove(l)}}else if(l.includes("-4digits")){var f=l.replace("-4digits","");u.classList.add(f),u.classList.remove(l)}}}catch(t){c.e(t)}finally{c.f()}}}}}},beforeDestroy:function(){window.cancelAnimationFrame&&cancelAnimationFrame(this.frame)},destroyed:function(){clearInterval(this.interval)}},r=(i(743),i(51)),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container flip-clock"},[t._l(t.timeData,(function(e){return[i("span",{key:e.label,staticClass:"flip-clock__piece",attrs:{id:e.elementId}},[i("span",{staticClass:"flip-clock__card flip-card"},[i("b",{staticClass:"flip-card__top"},[t._v(t._s(t._f("twoDigits")(e.current)))]),t._v(" "),i("b",{staticClass:"flip-card__bottom",attrs:{"data-value":t._f("twoDigits")(e.current)}}),t._v(" "),i("b",{staticClass:"flip-card__back",attrs:{"data-value":t._f("twoDigits")(e.previous)}}),t._v(" "),i("b",{staticClass:"flip-card__back-bottom",attrs:{"data-value":t._f("twoDigits")(e.previous)}})]),t._v(" "),i("span",{staticClass:"flip-clock__slot"},[t._v(t._s(e.label))])])]}))],2)}),[],!1,null,"2a8d03da",null);e.default=s.exports}}]);