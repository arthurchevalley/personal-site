(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[504],{9504:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var i=n(9439),r=(n(2791),n(1087)),s=n(6842),a=n(184),o=function(e){var t=e.data;return(0,a.jsx)("article",{className:"degree-container",children:(0,a.jsxs)("header",{children:[(0,a.jsx)("h4",{className:"degree",children:t.degree}),(0,a.jsxs)("p",{className:"school",children:[(0,a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},u=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"education",children:[(0,a.jsx)("div",{className:"link-to",id:"education"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,a.jsx)(o,{data:e},e.school)}))]})};u.defaultProps={data:[]};var l=u,c=n(7892),d=n.n(c),h=n(2773),f=function(e){var t=e.data,n=t.name,i=t.position,r=t.url,s=t.startDate,o=t.endDate,u=t.summary,l=t.highlights,c=t.OnlyYear;return(0,a.jsxs)("article",{className:"jobs-container",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)("h4",{children:[(0,a.jsx)("a",{href:r,children:n})," - ",i]}),(0,a.jsxs)("p",{className:"daterange",children:[" ",c?d()(s).format("YYYY"):d()(s).format("MMMM YYYY")," - ",o?d()(o).format("MMMM YYYY"):"PRESENT"]})]}),u?(0,a.jsx)(h.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:u}):null,l?(0,a.jsx)("ul",{className:"points",children:l.map((function(e){return(0,a.jsx)("li",{children:e},e)}))}):null]})},m=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"experience",children:[(0,a.jsx)("div",{className:"link-to",id:"experience"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,a.jsx)(f,{data:e},"".concat(e.name,"-").concat(e.position))}))]})};m.defaultProps={data:[]};var g=m,v=function(e){var t=e.data,n=e.last;return(0,a.jsxs)("li",{className:"course-container",children:[(0,a.jsxs)("a",{href:t.link,children:[(0,a.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,a.jsxs)("p",{className:"course-name",children:[t.title,", ",t.grade]})]}),!n&&(0,a.jsx)("div",{className:"course-dot",children:(0,a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};v.defaultProps={last:!1};var p=v,y=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,a.jsx)(p,{data:t,last:n===e.length-1},t.title)}))},x=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"courses",children:[(0,a.jsx)("div",{className:"link-to",id:"courses"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Selected Courses"})}),(0,a.jsx)("ul",{className:"course-list",children:y(t)})]})};x.defaultProps={data:[]};var $=x,j=function(){return(0,a.jsxs)("div",{className:"references",children:[(0,a.jsx)("div",{className:"link-to",id:"references"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)(r.rU,{to:"/contact",children:(0,a.jsx)("h3",{children:"References are available upon request"})})})]})},M=function(e){var t=e.data;return(0,a.jsx)("article",{className:"Language-container",children:(0,a.jsxs)("header",{children:[(0,a.jsxs)("h4",{className:"tongue",children:[t.tongue,":"]}),(0,a.jsx)("p",{className:"level",children:t.level})]})})},b=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"languages",children:[(0,a.jsx)("div",{className:"link-to",id:"languages"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Languages"})}),(0,a.jsx)("div",{className:"language-list",children:t.map((function(e){return(0,a.jsx)(M,{data:e},e.tongue)}))})]})};b.defaultProps={data:[]};var D=b,w=[{title:"Applied Machine Learning",number:"MICRO-455",link:"",university:"EPFL",grade:"4.5/6"},{title:"Basics of mobile robotics",number:"MICRO-452",link:"",university:"EPFL",grade:"5.25/6"},{title:"Model Predictive Control",number:"ME-425",link:"",university:"EPFL",grade:"5.5/6"},{title:"Advanced Control Systems",number:"ME-524",link:"",university:"EPFL",grade:"5/6"},{title:"Robotics Practicals",number:"MICRO-453",link:"",university:"EPFL",grade:"5.5/6"},{title:"Aerial Robotics",number:"MICRO-502",link:"",university:"EPFL",grade:"5.75/6"},{title:"Embedded Motor Control",number:"MICRO-510",link:"",university:"EPFL",grade:"5.75/6"},{title:"Deep Learning for Optical Imaging",number:"MICRO-723",link:"",university:"EPFL",grade:"5.75/6"},{title:"Deep Learning for Autonomous Vehicles",number:"CIVIL-459",link:"",university:"EPFL",grade:"5.5/6"},{title:"Legged Robots",number:"MICRO-507",link:"",university:"EPFL",grade:"5.75/6"},{title:"Multi-variable control and coordination systems",number:"EE-477",link:"",university:"EPFL",grade:"5/6"},{title:"Networked Control Systems",number:"ME-427",link:"",university:"EPFL",grade:"4.75/6"},{title:"Organic and printed electronics",number:"MICRO-505",link:"",university:"EPFL",grade:"5.75/6"},{title:"Introduction to astrophysics",number:"PHYS-209",link:"",university:"EPFL",grade:"5/6"},{title:"Image Processing for Earth observation",number:"ENV-540",link:"",university:"EPFL",grade:"5.75/6"},{title:"Introduction to the design of mechanical space hardware",number:"EE-580",link:"",university:"EPFL",grade:"5.5/6"},{title:"Lessons Learned from the space exploration",number:"EE-582",link:"",university:"EPFL",grade:"6/6"},{title:"Fundamentals of satellite positioning",number:"ENV-340",link:"",university:"EPFL",grade:"5.75/6"},{title:"Finite elements method",number:"ME-372",link:"",university:"EPFL",grade:"5/6"},{title:"Space mission design and operations",number:"EE-585",link:"",university:"EPFL",grade:"6/6"},{title:"Spacecraft avionics architectures",number:"EE-583",link:"",university:"EPFL",grade:"6/6"}],k=[{school:"Ecole Polytechnique F\xe9d\xe9rale de Lausanne",degree:"M.S. Robotic Engineering",link:"https://www.epfl.ch/",year:2023},{school:"Ecole Polytechnique F\xe9d\xe9rale de Lausanne",degree:"B.S. MicroEngineering",link:"https://www.epfl.ch/",year:2019}],E=[{tongue:"French",level:"Native"},{tongue:"English",level:"B2/C1"},{tongue:"German",level:"Basics"}],S=[{name:"CHUV",position:"Medical Research Assistant Civil Duty",url:"https://www.levant.ch/",startDate:"2023-11-13",endDate:"2024-04-05",summary:"As a part of my swiss civil duty, I'am working in the Diagnostic Imaging and Interventional Radiology department. This work aims at implementing a 3D Bispectrum UNet for locally rotation invariant segmentation of medical data.",highlights:[],OnlyYear:!1},{name:"Fondation du Levant",position:"IT Heldesk Civil Duty",url:"https://www.levant.ch/",startDate:"2023-05-01",endDate:"2023-10-31",summary:"During half of my swiss civil duty, I worked at the IT helpdesk of the Levant Foundation.",highlights:[],OnlyYear:!1},{name:"AXA",position:"Data Scientist Intern",url:"",startDate:"2022-09-01",endDate:"2023-04-06",summary:"Completed my Master Thesis in Industry working on few-shot object detection using remote sensing images.",highlights:[],OnlyYear:!1},{name:"Fondation Primeroche",position:"Student job in hotel service",url:"",startDate:"2017",endDate:"2022-08-31",summary:"As a student job I worked in an retirement home, serving lunch, Cleaning and assisting the residents if needed.",highlights:[],OnlyYear:!0},{name:"Villars-Ste-Croix Municipality",position:"Co-Creation of an intergenerational project",url:"",startDate:"2016",endDate:"2017-12-01",summary:"Co-Creation of a participatory project to improve Villars-Ste-Croix life quality. Multiple workshops have been organized throughout the commission to establish a few final and achievable propositions for the municipality.",highlights:[],OnlyYear:!0},{name:"Festival de la Cit\xe9 Lausanne",position:"Volunteer Hosting artists team",url:"",startDate:"2013",endDate:"2018-07-18",summary:"Six consecutive years I was part of the hosting team staff, taking care of the backstage and artists.",highlights:[],OnlyYear:!0}],L={Education:function(){return(0,a.jsx)(l,{data:k})},Experience:function(){return(0,a.jsx)(g,{data:S})},Languages:function(){return(0,a.jsx)(D,{data:E})},Courses:function(){return(0,a.jsx)($,{data:w})},References:function(){return(0,a.jsx)(j,{})}},N=function(){return(0,a.jsx)(s.Z,{title:"Resume",description:"Arthur Chevalley's Resume.",children:(0,a.jsxs)("article",{className:"post",id:"resume",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h2",{children:(0,a.jsx)(r.rU,{to:"/resume",children:"Resume"})}),(0,a.jsx)("div",{className:"link-container",children:Object.keys(L).map((function(e){return(0,a.jsx)("h4",{children:(0,a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object.entries(L).map((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,a.jsx)(r,{},n)}))]})})}},7892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",u="week",l="month",c="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},p=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},y={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+p(i,2,"0")+":"+p(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,l),s=n-r<0,a=t.clone().add(i+(s?-1:1),l);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:u,d:o,D:h,h:a,m:s,s:r,ms:i,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",$={};$[x]=v;var j=function(e){return e instanceof w},M=function e(t,n,i){var r;if(!t)return x;if("string"==typeof t){var s=t.toLowerCase();$[s]&&(r=s),n&&($[s]=n,r=s);var a=t.split("-");if(!r&&a.length>1)return e(a[0])}else{var o=t.name;$[o]=t,r=o}return!i&&r&&(x=r),r||!i&&x},b=function(e,t){if(j(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},D=y;D.l=M,D.i=j,D.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function v(e){this.$L=M(e.locale,null,!0),this.parse(e)}var p=v.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return D},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return b(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<b(e)},p.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,i=!!D.u(t)||t,c=D.p(e),f=function(e,t){var r=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?r:r.endOf(o)},m=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,v=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case d:return i?f(1,0):f(31,11);case l:return i?f(1,v):f(0,v+1);case u:var x=this.$locale().weekStart||0,$=(g<x?g+7:g)-x;return f(i?p-$:p+(6-$),v);case o:case h:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,u=D.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[o]=c+"Date",n[h]=c+"Date",n[l]=c+"Month",n[d]=c+"FullYear",n[a]=c+"Hours",n[s]=c+"Minutes",n[r]=c+"Seconds",n[i]=c+"Milliseconds",n)[u],m=u===o?this.$D+(t-this.$W):t;if(u===l||u===d){var g=this.clone().set(h,1);g.$d[f](m),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[D.p(e)]()},p.add=function(i,c){var h,f=this;i=Number(i);var m=D.p(c),g=function(e){var t=b(f);return D.w(t.date(t.date()+Math.round(e*i)),f)};if(m===l)return this.set(l,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===o)return g(1);if(m===u)return g(7);var v=(h={},h[s]=t,h[a]=n,h[r]=e,h)[m]||1,p=this.$d.getTime()+i*v;return D.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,l=n.months,c=function(e,n,r,s){return e&&(e[n]||e(t,i))||r[n].slice(0,s)},d=function(e){return D.s(s%12||12,e,"0")},h=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(n.monthsShort,o,l,3),MMMM:c(l,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,u,2),ddd:c(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return i.replace(g,(function(e,t){return t||m[e]||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(i,h,f){var m,g=D.p(h),v=b(i),p=(v.utcOffset()-this.utcOffset())*t,y=this-v,x=D.m(this,v);return x=(m={},m[d]=x/12,m[l]=x,m[c]=x/3,m[u]=(y-p)/6048e5,m[o]=(y-p)/864e5,m[a]=y/n,m[s]=y/t,m[r]=y/e,m)[g]||y,f?x:D.a(x)},p.daysInMonth=function(){return this.endOf(l).$D},p.$locale=function(){return $[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=M(e,t,!0);return i&&(n.$L=i),n},p.clone=function(){return D.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},v}(),k=w.prototype;return b.prototype=k,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",l],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,w,b),e.$i=!0),b},b.locale=M,b.isDayjs=j,b.unix=function(e){return b(1e3*e)},b.en=$[x],b.Ls=$,b.p={},b}()}}]);
//# sourceMappingURL=504.8ce3f5e6.chunk.js.map