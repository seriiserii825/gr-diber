(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"7xmF":function(e,t,i){"use strict";i.r(t);i("TeQF"),i("QWBl"),i("yq1k"),i("rB9j"),i("JTJg"),i("EnZy"),i("FZtP");var a={props:["url","title","image","className"],data:function(){return{classList:""}},mounted:function(){var e=this;this.className.forEach((function(t){e.classList+=" "+t.slug}))}},r=(i("N2fB"),i("KHd+")),n={props:["image","title"]},s={data:function(){return{bevande:[],cats:[],filtered:[]}},mounted:function(){this.bevande=this.$static.bevande.edges,this.cats=this.$static.cats.edges},components:{AlteBevandeItem:Object(r.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"fade",appear:""}},[i("div",{staticClass:"alte-bevande__item ",class:e.classList},[i("a",{staticClass:"alte-bevande__img",attrs:{target:"_blank",rel:"noreferrer",href:e.url}},[i("img",{staticClass:"aligncenter",attrs:{src:e.image,width:"430",height:"432",alt:""}}),i("span"),i("span"),i("span"),i("span")]),i("h3",{staticClass:"title"},[e._v(e._s(e.title))]),i("a",{staticClass:"link",attrs:{target:"_blank",rel:"noreferrer",href:e.url}},[i("span",[e._v(" Visita il sito")])])])])}),[],!1,null,null,null).exports,AlteBevandeLi:Object(r.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("li",{attrs:{"data-filter":".bibite"}},[t("div",{staticClass:"alte-bevande__img",style:"background-image: url("+this.image+")"}),t("h2",{staticClass:"title"},[this._v(this._s(this.title))])])}),[],!1,null,null,null).exports},methods:{filterBevande:function(e){this.filtered=this.bevande.filter((function(t){var i="";return t.node.bevandeCat.forEach((function(e){i+=e.slug+" "})),i.split(" ").includes(e)}))}}},l=(i("We/S"),i("Kw5r")),u=l.a.config.optionMergeStrategies.computed,d={bevande:{edges:[{node:{id:"38",title:"Ca’ Salina",featuredMedia:{sourceUrl:"https://gr-diber.seriiburduja.ru/wp-content/uploads/2021/02/casalina.jpg"},acf:{url:""},bevandeCat:[{slug:"grappe-distillati-e-liquori"},{slug:"vini"}]}},{node:{id:"37",title:"Distilleria De Negri",featuredMedia:{sourceUrl:"https://gr-diber.seriiburduja.ru/wp-content/uploads/2021/02/denegri.jpg"},acf:{url:""},bevandeCat:[{slug:"acque"},{slug:"bibite"}]}},{node:{id:"36",title:"Distilleria Marzadro",featuredMedia:{sourceUrl:"https://gr-diber.seriiburduja.ru/wp-content/uploads/2021/02/distilieria.jpg"},acf:{url:""},bevandeCat:[{slug:"acque"},{slug:"vini"}]}},{node:{id:"30",title:"Aperol",featuredMedia:{sourceUrl:"https://gr-diber.seriiburduja.ru/wp-content/uploads/2021/02/aperol.jpg"},acf:{url:"https://www.coca-cola.com/"},bevandeCat:[{slug:"bibite"},{slug:"grappe-distillati-e-liquori"}]}}]},cats:{edges:[{node:{id:"4",slug:"vini",name:"Vini (wp)",acf:{image:{url:"https://gr-diber.seriiburduja.ru/wp-content/uploads/2021/02/vini.jpg"},image_horizontal:"https://gr-diber.seriiburduja.ru/wp-content/uploads/2021/02/vini-h.jpg"}}},{node:{id:"5",slug:"grappe-distillati-e-liquori",name:"Grappe distillati e liquori",acf:{image:{url:"https://gr-diber.seriiburduja.ru/wp-content/uploads/2021/02/grappe.jpg"},image_horizontal:"https://gr-diber.seriiburduja.ru/wp-content/uploads/2021/02/grappe-h.jpg"}}},{node:{id:"2",slug:"bibite",name:"Bibite",acf:{image:{url:"https://gr-diber.seriiburduja.ru/wp-content/uploads/2021/02/bibite.jpg"},image_horizontal:"https://gr-diber.seriiburduja.ru/wp-content/uploads/2021/02/bibite-h.jpg"}}},{node:{id:"3",slug:"acque",name:"Acque wp",acf:{image:{url:"https://gr-diber.seriiburduja.ru/wp-content/uploads/2021/02/aque.jpg"},image_horizontal:"https://gr-diber.seriiburduja.ru/wp-content/uploads/2021/02/acqua-h.jpg"}}}]}},o=function(e){var t=e.options;t.__staticData?t.__staticData.data=d:(t.__staticData=l.a.observable({data:d}),t.computed=u({$static:function(){return t.__staticData.data}},t.computed))},c=Object(r.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("div",{staticClass:"alte-bevande",attrs:{id:"js-alte-bevande"}},[i("ul",{staticClass:"alte-bevande__list",attrs:{id:"js-alte-bevande__list"}},e._l(e.cats,(function(t){return i("AlteBevandeLi",{key:t.node.id,attrs:{title:t.node.name,image:t.node.acf.image_horizontal},nativeOn:{click:function(i){return e.filterBevande(t.node.slug)}}})})),1),i("div",{staticClass:"alte-bevande__content"},[e._l(e.bevande,(function(t){return 0===e.filtered.length?i("AlteBevandeItem",{key:t.node.id,attrs:{title:t.node.title,image:t.node.featuredMedia.sourceUrl,url:t.node.acf.url,className:t.node.bevandeCat}}):e._e()})),e._l(e.filtered,(function(t){return e.filtered.length>0?i("AlteBevandeItem",{key:t.node.id,attrs:{title:t.node.title,image:t.node.featuredMedia.sourceUrl,url:t.node.acf.url,className:t.node.bevandeCat}}):e._e()}))],2)])])}),[],!1,null,null,null);"function"==typeof o&&o(c);t.default=c.exports},JTJg:function(e,t,i){"use strict";var a=i("I+eb"),r=i("WjRb"),n=i("HYAF");a({target:"String",proto:!0,forced:!i("qxPZ")("includes")},{includes:function(e){return!!~String(n(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},Jt9d:function(e,t,i){},N2fB:function(e,t,i){"use strict";i("NtDv")},NtDv:function(e,t,i){},TeQF:function(e,t,i){"use strict";var a=i("I+eb"),r=i("tycR").filter,n=i("Hd5f"),s=i("rkAj"),l=n("filter"),u=s("filter");a({target:"Array",proto:!0,forced:!l||!u},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"We/S":function(e,t,i){"use strict";i("Jt9d")},yq1k:function(e,t,i){"use strict";var a=i("I+eb"),r=i("TWQb").includes,n=i("RNIs");a({target:"Array",proto:!0,forced:!i("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")}}]);