webpackJsonp([0],[,,,,,,,,,,,function(t,e,a){"use strict";function i(){return{name:"",table:{},products:[],date:new Date,typePayment:"",subTotal:0,total:0}}a.d(e,"d",function(){return r}),a.d(e,"b",function(){return c}),a.d(e,"f",function(){return d}),a.d(e,"g",function(){return u}),a.d(e,"e",function(){return l}),a.d(e,"c",function(){return m});var o,n=a(14),s=a.n(n),r="OPEN_COMMAND",c="CLOSE_COMMAND",d="ADD_PRODUCT",u="REMOVE_PRODUCT",l="ADD_TABLE",m="SUB";e.a=(o={},s()(o,r,function(t){t.push(new i)}),s()(o,m,function(t){t[0].subTotal=0,t[0].total=0,t[0].products.forEach(function(e){0!==e.selected&&(e.totalValue=e.value*e.selected,t[0].subTotal+=e.totalValue)}),t[0].total=t[0].subTotal}),s()(o,d,function(t,e){t[0].products.push(e)}),s()(o,l,function(t,e){t[0].table=e}),s()(o,u,function(t,e){var a=t.products.indexOf(e);a>-1&&t.splice(a,1)}),o)},function(t,e,a){"use strict";a.d(e,"b",function(){return n});var i=a(14),o=a.n(i),n="GET_PRODUCT";e.a=o()({},n,function(t,e){var a=void 0;for(var i in t)if(t.hasOwnProperty(i)){var o=t[i].products;for(var n in o)if(o.hasOwnProperty(n)){var s=o[n].items;s.forEach(function(t){t.id===Number(e)&&(a=t)})}}return a})},,,,,,,,function(t,e,a){function i(t){a(110)}var o=a(0)(a(59),a(136),i,"data-v-cdc11d96",null);t.exports=o.exports},function(t,e,a){function i(t){a(106)}var o=a(0)(a(61),a(130),i,"data-v-3c2ca3ee",null);t.exports=o.exports},function(t,e,a){function i(t){a(98),a(97)}var o=a(0)(a(62),a(123),i,"data-v-01dc9713",null);t.exports=o.exports},function(t,e,a){"use strict";var i=a(115),o=a.n(i),n=a(118),s=a.n(n),r=a(22),c=a.n(r),d=a(117),u=a.n(d),l=a(21),m=a.n(l),p=a(20),f=a.n(p),v=a(116),_=a.n(v),g=a(121),h=a.n(g),b=a(119),A=a.n(b);e.a=[{path:"/app",component:_.a},{path:"/about",component:o.a},{path:"/home",component:f.a},{path:"/product/:id",component:m.a},{path:"/select-table",component:c.a},{path:"/payment",component:s.a},{path:"/command",component:u.a},{path:"/timer",component:h.a},{path:"/feedback",component:A.a}]},function(t,e,a){"use strict";var i=a(5),o=a(1),n=a(43),s=a(39),r=a(47);i.a.use(o.c),e.a=new o.c.Store({state:{user:"asdasd"},modules:{Command:s.a,Product:n.a,Table:r.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,a){function i(t){a(104)}var o=a(0)(a(51),a(128),i,"data-v-2b9f9fb4",null);t.exports=o.exports},,function(t,e,a){"use strict";a.d(e,"a",function(){return i});var i="Livre"},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(31),o=(a.n(i),a(25)),n=(a.n(o),a(5)),s=a(33),r=a(30),c=a.n(r),d=a(27),u=(a.n(d),a(26)),l=(a.n(u),a(28)),m=(a.n(l),a(29)),p=(a.n(m),a(23)),f=a(32),v=a.n(f),_=a(24);n.a.use(c.a),n.a.use(s.a),n.a.config.productionTip=!1,n.a.http.options.root="http://localhost:9000/api/",new n.a({store:_.a,el:"#app",template:"<App/>",pushState:!0,ignoreCache:!0,pushStateSeparator:"#!/",pushStateOnLoad:!0,cache:!0,framework7:{root:"#app",router:"/",material:!0,routes:p.a},components:{App:v.a}})},function(t,e,a){"use strict";var i=a(66),o=a.n(i),n=a(67),s=a.n(n),r=function(){function t(e){o()(this,t),this.resource=e}return s()(t,[{key:"openCommand",value:function(t){return this.resource("command/").save(t).then(function(t){return t.json()},function(){throw new Error({message:"Erro ao abrir comanda."})})}},{key:"getCommand",value:function(t){return this.resource("command/{id}").query({id:t}).then(function(t){return t.json()},function(){throw new Error({message:"Erro ao carregar comanda."})})}},{key:"updateCommand",value:function(t,e){return this.resource("command/{id}/product").update({id:t._id},e).then(function(t){return t.json()},function(){throw new Error({message:"Não foi possivel atualizar comanda."})})}}]),t}();e.a=r},function(t,e,a){"use strict";var i=a(11);e.a={closeCommend:function(t){t.commit(i.b)},subTotal:function(t){t.commit(i.c)},openCommand:function(t){t.commit(i.d)},addTable:function(t,e){t.commit(i.e,e)},addProduct:function(t,e){t.commit(i.f,e)},removeProduct:function(t,e){t.commit(i.g,e)}}},function(t,e,a){"use strict";var i=a(34);e.a={isOccupied:function(t){return t.status!==i.a},command:function(t){return t[0]}}},function(t,e,a){"use strict";var i=a(40),o=a(11),n=a(37),s=a(38);e.a={namespaced:!0,state:i.a,mutations:o.a,actions:n.a,getters:s.a}},function(t,e,a){"use strict";e.a=[]},function(t,e,a){"use strict";var i=a(12);e.a={addProduct:function(t,e){t.commit("ADD_PRODUCT",e)},getProduct:function(t,e){return t.commit(i.b,e)}}},function(t,e,a){"use strict";e.a={getProducts:function(t){return t},getProduct:function(t){return function(e){var a=void 0;for(var i in t)if(t.hasOwnProperty(i)){var o=t[i].products;for(var n in o)if(o.hasOwnProperty(n)){var s=o[n].items;s.forEach(function(t){t.id===Number(e)&&(a=t)})}}return a}}}},function(t,e,a){"use strict";var i=a(44),o=a(12),n=a(41),s=a(42);e.a={namespaced:!0,state:i.a,mutations:o.a,actions:n.a,getters:s.a}},function(t,e,a){"use strict";e.a=[{name:"Hambúrguer",description:"Esta é uma descrição de Sanduíches".toUpperCase(),products:[{name:"",description:"",items:[{name:"BABY BACON",id:0,isActive:!0,image:"./static/img/Baby_bacon_site_800x800_acf_cropped.jpg",description:"O mais novo sanduíche da casa! Feito com muito amor e servido em um pão fresquinho com 80g de carne de blend homemade, queijo prato derretido e generosas fatias de bacon defumado à lenha. Ideal para quem está com pouco apetite mas quer se deliciar com um autêntico burguer Bacon Paradise ou para turmas, que podem pedir uma porção com até 10 unidades.",value:8,amount:1,heart:!1,amountUnit:"",selected:0,rated:5,totalValue:0},{name:"PORQUER",id:1,isActive:!0,image:"./static/img/porquer_bacon_paradise1_800x800_acf_cropped.jpg",description:"Pegue suas fichas e dê all-in neste burger! Pão, hambúrguer, queijo prato com pimenta calabresa, salada americana de repolhos, alface e bacon.",value:10,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0},{name:"HIPSTER PIGGY",id:2,isActive:!0,image:"./static/img/hipster_bacon_paradise2_800x800_acf_cropped.jpg",description:"Achou os outros hambúrgueres muito mainstream? Pão, hambúrguer, alho poró e cogumelo fresco salteado na manteiga de garrafa, picles, rúcula, queijo e bacon.",value:12,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0},{name:"BURLESCO",id:3,isActive:!0,image:"./static/img/burlesco_bacon_paradise1_800x800_acf_cropped.jpg",description:"O mais pedido! Pão australiano, hambúrguer, queijo cheddar, bacon frito no açúcar mascavo, pimenta jalapeño, alface e dois deliciosos anéis de cebola.",value:13,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0},{name:"EAT SWEET",id:4,isActive:!0,image:"./static/img/eat_sweet_bacon_paradise2_800x800_acf_cropped.jpg",description:"Pão, hambúrguer, queijo gorgonzola, cebola caramelizada com aquele toque agridoce, alface roxa e bacon. Adoça o coração mais ogro!",value:14,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0},{name:"TRADICIONAL",id:5,isActive:!0,image:"./static/img/tradicional_bacon_paradise1_800x800_acf_cropped.jpg",description:"Pão, hambúrguer, anéis de cebola roxa, alface americana, rodela de tomate e bacon. O queijo é você quem escolhe: prato, cheddar ou gorgonzola.",value:15,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0}]}]},{name:"Bebidas",description:"",products:[{name:"",description:"",items:[{name:"CAIP DE MORANGO COM TABASCO",id:6,isActive:!0,image:"./static/img/caip_morango_bacon_paradise_site_800x800_acf_cropped.jpg",description:"Delicioso drink picante feito com morango e pimenta tabasco.",value:6,amount:1,heart:!1,amountUnit:"",selected:0,rated:3,totalValue:0},{name:"CAIP UVA COM HORTELÃ",id:7,isActive:!0,image:"./static/img/caip_uva_bacon_paradise_site_800x800_acf_cropped.jpg",description:"Uva e hortelã combinados em um drink refrescante",value:6,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0},{name:"CAIP DE LIMÃO",id:8,isActive:!0,image:"./static/img/caip_limao_bacon_paradise_site_800x800_acf_cropped.jpg",description:"A tradicional! Delícia!",value:6,amount:1,heart:!1,amountUnit:"",selected:0,rated:5,totalValue:0},{name:"CAIP SICILIANA",id:9,isActive:!0,image:"./static/img/caip_siciliana_bacon_paradise_site_800x800_acf_cropped.jpg",description:"Limão Siciliano, Manjericão e Tomate Cereja",value:5,amount:1,heart:!1,amountUnit:"",selected:0,rated:5,totalValue:0},{name:"SMOKE ON THE WATER",id:10,isActive:!0,image:"./static/img/chopp_smoke_bacon_paradise_site_800x800_acf_cropped.jpg",description:"Smoked Ale produzida com malte defumado o que confere aroma e paladar característicos. Grad. Alc.: 6,7% Amargor: 25 IBU Sugestões de Harmonização: Burlesco e Heart Attack.",value:8,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0},{name:"SCHWEPPES CITRUS",id:11,isActive:!0,image:"./static/img/schweppes_bacon_paradise_site_800x800_acf_cropped.jpg",description:"SCHWEPPES CITRUS",value:5,amount:1,heart:!1,amountUnit:"",selected:0,rated:0,totalValue:0},{name:"CHÁ GELADO LIMÃO",id:12,isActive:!0,image:"./static/img/ch-_gelado_bacon_paradise_site_800x800_acf_cropped.jpg",description:"CHÁ GELADO LIMÃO",value:6,amount:1,heart:!1,amountUnit:"",selected:0,rated:5,totalValue:0},{name:"REFRIGERANTE LATA",id:13,isActive:!0,image:"./static/img/refigerante_bacon_paradise_site_800x800_acf_cropped.jpg",description:"REFRIGERANTE LATA (350ML)",value:4,amount:1,heart:!1,amountUnit:"",selected:0,rated:0,totalValue:0},{name:"BRAHMA (600ml)",id:14,isActive:!0,image:"./static/img/bhrama_bacon_paradise_site_800x800_acf_cropped.jpg",description:"A LOIRA É A MELHOR COMPANHIA PARA O BACON. AQUI PODE BOTECAR DE ACORDO",value:7,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0}]}]},{name:"Petiscos",description:"",products:[{name:"",description:"",items:[{name:"NACHO FRIES",id:15,isActive:!0,image:"./static/img/nacho_fries_bacon_paradise_site_800x800_acf_cropped.jpg",description:"Receita clássica do Kentucky. Batatas fritas palito cobertas de chili de carne, tomate e cebola picados, cubinhos de pimenta Jalapeño. E o bacon?? Vem lindo, por cima de tudo. Acompanha molho Ranch e molho Barbecue caseiro.",value:12,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0},{name:"CHICKEN WINGS",id:16,isActive:!0,image:"./static/img/chiken_wings_bacon_paradise_site_800x800_acf_cropped.jpg",description:"Meio da asa de frango frita com manteiga apimentada. Suave. Ardente. Fumegante. Você decide o nível da pimenta. Acompanha molho de Gorgonzola com farofa de BACON!",value:12,amount:1,heart:!1,amountUnit:"",selected:0,rated:5,totalValue:0},{name:"BACON WRAPPED ONION RINGS",id:17,isActive:!0,image:"./static/img/bacon_wrapped_bacon_paradise_site_800x800_acf_cropped.jpg",description:"9 anéis de cebola empanados e fritos, envoltos em bacon. Baba não! Pede um logo! Acompanha molho Ranch e molho Barbecue caseiro.",value:13,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0},{name:"BACON HARUMAKI",id:18,isActive:!0,image:"./static/img/harumaki_bacon_paradise_site_800x800_acf_cropped.jpg",description:"Os rolinhos primavera, na versão paraíso. Massa crocante recheada de queijo cheddar, bacon e cubinhos de pimenta Jalapeño. Acompanha molho Barbecue caseiro.",value:11,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0},{name:"HEART ATTACK",id:19,isActive:!0,image:"./static/img/heart_attack_bacon_paradise_site_800x800_acf_cropped.jpg",description:"Prepare o seu coração porque este é matador! Torresmo de barriga frito inteiro, escoltado por tiras de bacon fritas. Acompanha geléia de abacaxi com cachaça.",value:11,amount:1,heart:!1,amountUnit:"",selected:0,rated:5,totalValue:0},{name:"ONION RINGS",id:20,isActive:!0,image:"./static/img/onion_rings_bacon_paradise_site_800x800_acf_cropped.jpg",description:"Anéis de cebola fritos. O verdadeiro Senhor dos Anéis! Delícia vegetariana. Porque este paraíso é para todos. Acompanha molho Ranch e molho Barbecue caseiro.",value:8,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0},{name:"FRITAS",id:21,isActive:!0,image:"./static/img/bacon-batata_bacon_paradise_site_800x800_acf_cropped.jpg",description:"A nossa velha amiga porção de batatas fritas palito, cobertas de queijo e de tiras de bacon fritas pedindo para serem devoradas. Acompanha molho Barbecue caseiro.",value:11,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0}]}]},{name:"Sobremesas",description:"",products:[{name:"",description:"",items:[{name:"MILKSHAKE",id:22,isActive:!0,image:"./static/img/milk_shake_bacon_paradise_site_800x800_acf_cropped.jpg",description:"Shake Shake Shake! PRA ACOMPANHAROU PRA FINALIZAR. Sabores: Banana, Ovomaltine e Oreo.",value:8,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0},{name:"NUTELLA EXPLOSION",id:23,isActive:!0,image:"./static/img/nutella_bacon_paradise_site_800x800_acf_cropped.jpg",description:"Brownie homemade de chocolate ao leite e chocolate branco, deitado em berço esplêndido de chocolate derretido com castanha, coberto com sorvete de creme e Nutella, coroado por uma tirinha de bacon.",value:9,amount:1,heart:!1,amountUnit:"",selected:0,rated:5,totalValue:0},{name:"WAFFLE",id:24,isActive:!0,image:"./static/img/waffle_bacon_paradise_site_800x800_acf_cropped.jpg",description:"Waffle, coberto de rodelas de Banana, Maple Syrup (xarope de bordo), duas bolas de sorvete de creme, calda de caramelo e o toque de mestre: farofa de bacon por cima de tudo!",value:8,amount:1,heart:!1,amountUnit:"",selected:0,rated:4,totalValue:0}]}]}]},function(t,e){},function(t,e,a){"use strict";e.a={locals:function(t){return t}}},function(t,e,a){"use strict";var i=a(49),o=a(48),n=a.n(o),s=a(45),r=a.n(s),c=a(46);e.a={namespaced:!0,state:i.a,mutations:n.a,actions:r.a,getters:c.a}},function(t,e){},function(t,e,a){"use strict";e.a=[{name:"Salão principal",description:"",tables:[{id:0,name:"Mesa 1",occupations:{total:10,current:5},status:"Ocupado",isOccupied:!0},{id:1,name:"Mesa 2",occupations:{total:8,current:5},status:"Livre",isOccupied:!1},{id:2,name:"Mesa 3",occupations:{total:8,current:5},status:"Livre",isOccupied:!1}]},{name:"Varanda",description:"",tables:[{id:3,name:"Mesa 4",occupations:{total:2,current:5},status:"Ocupado",isOccupied:!0},{id:4,name:"Mesa 5",occupations:{total:4,current:5},status:"Livre",isOccupied:!1},{id:5,name:"Mesa 6",occupations:{total:2,current:5},status:"Ocupado",isOccupied:!0},{id:6,name:"Mesa 7",occupations:{total:4,current:5},status:"Livre",isOccupied:!1}]}]},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(64),o=a.n(i);a(5).a.filter("twoDigits",function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}),e.default={props:["deadline"],data:function(){return{now:o()((new Date).getTime()/1e3),date:null}},mounted:function(){var t=this;this.date=o()(Date.parse(this.deadline)/1e3),setInterval(function(){t.now=o()((new Date).getTime()/1e3)},1e3)},computed:{seconds:function(){return o()(this.date-this.now)%60},minutes:function(){return o()((this.date-this.now)/60)%60},hours:function(){return o()((this.date-this.now)/60/60)%24},days:function(){return o()((this.date-this.now)/60/60/24)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{categories:[]}},mounted:function(){var t=this;setTimeout(function(){t.onInit()})},methods:{onInit:function(){this.messageLoadApp()},messageLoadApp:function(){this.$f7.addNotification({message:"Aplicativo carregado",hold:1e3})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"card-product",props:["products"],methods:{rated:function(t,e){return t===Math.floor(e)},add:function(t){this.$f7Router.framework7.addNotification({message:"Pedido adicionado: "+t.name,hold:1e3}),t.selected+=1},removeProduct:function(t){var e=this;this.socket_removeProduct(t).then(function(){e.$f7Router.framework7.addNotification({message:"Pedido removido: "+t.name,hold:1e3}),e.countOfProduts-=1})}}}},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),o=a.n(i),n=a(1),s=a(114),r=a.n(s),c=a(20),d=a.n(c),u=a(120),l=a.n(u),m=a(22),p=a.n(m),f=a(21),v=a.n(f),_=a(113),g=a.n(_),h=a(36);e.default={components:{home:d.a,login:l.a,Popup:r.a,SelectTable:p.a,cardProduct:g.a,Product:v.a},data:function(){return{categories:[],currentTabName:"Hambúrguer",commandService:new h.a(this.$resource)}},computed:o()({},a.i(n.a)("Product",["getProducts"])),methods:o()({},a.i(n.b)("Command",["addProduct"]),{currentTab:function(t){this.currentTabName=t.name},open:function(){var t=this;for(var e in this.getProducts)if(this.getProducts.hasOwnProperty(e)){var a=this.getProducts[e].products;for(var i in a)if(a.hasOwnProperty(i)){var o=a[i].items;o.forEach(function(e){0!==e.selected&&t.addProduct(e)})}}this.$f7.mainView.router.load({url:"/command",pushState:!0,animatePages:!0})}})}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),o=a.n(i),n=a(1);e.default={mounted:function(){this.subTotal()},computed:o()({},a.i(n.a)("Command",["command"])),methods:o()({},a.i(n.b)("Command",["subTotal"]),{removeProduct:function(t){0!==t.selected&&(this.$f7Router.framework7.addNotification({message:"Pedido removido: "+t.name,hold:1e3}),t.selected-=1,this.subTotal())},open:function(){this.$f7.mainView.router.load({url:"/timer",pushState:!0,animatePages:!0})},addProduct:function(t){this.$f7Router.framework7.addNotification({message:"Pedido adicionado: "+t.name,hold:1e3}),t.selected+=1,this.subTotal()}})}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{alert:function(){this.$f7.alert('Use a opção "Selecionar mesa".',"Não implementado")},open:function(){this.$f7.mainView.router.load({url:"/app",pushState:!0,animatePages:!0})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{alert:function(){this.$f7.alert("Obrigado por testar o protótipo usando Progressive Web App (PWA).","Termino da navegação")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),o=a.n(i),n=a(1);e.default={methods:o()({},a.i(n.b)("Command",["openCommand"]),{close:function(){this.$router.back()},alert:function(){this.$f7.alert('Use a opção "Selecionar mesa".',"Não implementado")},loadTables:function(){this.openCommand(),this.$f7.mainView.router.load({url:"/select-table",pushState:!0,animatePages:!0})}})}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),o=a.n(i),n=a(1);e.default={data:function(){return{isSelectRaised:!0,product:{},isFavorite:!1}},computed:o()({},a.i(n.a)("Product",["getProduct"])),mounted:function(){this.product=this.getProduct(this.$route.params.id)},methods:{rated:function(t,e){return t===Math.floor(e)},back:function(){this.$router.back()},removeProduct:function(t){0!==t.selected&&(this.$f7Router.framework7.addNotification({message:"Pedido removido: "+t.name,hold:1e3}),t.selected-=1)},addProduct:function(t){this.$f7Router.framework7.addNotification({message:"Pedido adicionado: "+t.name,hold:1e3}),t.selected+=1}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),o=a.n(i),n=a(1);e.default={computed:o()({},a.i(n.a)("Table",["locals"])),methods:o()({},a.i(n.b)("Command",["addTable"]),{onF7Init:function(t){this.f7=t},select:function(t){if(t.isOccupied)return void this.$f7.alert("Aguarde a mesa fechar a comanda e ficar disponível.","Mesa ocupada");this.addTable(t),this.openPayment()},openPayment:function(){this.$f7.mainView.router.load({url:"/payment",pushState:!0,animatePages:!0})}})}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(122),o=a.n(i);e.default={components:{countdown:o.a},methods:{minutes:function(t,e){return new Date(t.getTime()+6e4*e)},alert:function(){this.$f7.alert("Use outra opção.","Não implementado")},open:function(){this.$f7.mainView.router.load({url:"/feedback",pushState:!0,animatePages:!0})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,a){function i(t){a(108)}var o=a(0)(a(52),a(133),i,"data-v-a24063a0",null);t.exports=o.exports},function(t,e,a){function i(t){a(109)}var o=a(0)(a(53),a(135),i,"data-v-b6a1aac4",null);t.exports=o.exports},function(t,e,a){var i=a(0)(a(54),a(131),null,null,null);t.exports=i.exports},function(t,e,a){function i(t){a(102)}var o=a(0)(a(55),a(126),i,"data-v-217a798a",null);t.exports=o.exports},function(t,e,a){function i(t){a(105)}var o=a(0)(a(56),a(129),i,"data-v-388d9b36",null);t.exports=o.exports},function(t,e,a){function i(t){a(101),a(100)}var o=a(0)(a(57),a(125),i,"data-v-1993666e",null);t.exports=o.exports},function(t,e,a){function i(t){a(107)}var o=a(0)(a(58),a(132),i,"data-v-8ad4544a",null);t.exports=o.exports},function(t,e,a){var i=a(0)(a(60),a(134),null,null,null);t.exports=i.exports},function(t,e,a){function i(t){a(99)}var o=a(0)(a(63),a(124),i,"data-v-125a65df",null);t.exports=o.exports},function(t,e,a){function i(t){a(103)}var o=a(0)(a(50),a(127),i,null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("h2",[t._v("Selecione a Mesa")]),t._v(" "),t._l(t.locals,function(e){return a("f7-list",{key:e.name,attrs:{"media-list":""}},[a("f7-list-item",{attrs:{title:e.name,divider:""}}),t._v(" "),t._l(e.tables,function(e){return a("f7-list-item",{key:e.name,class:{danger:"Ocupado"===e.status,success:"Livre"===e.status},attrs:{title:e.name,text:"Ocupado"===e.status?e.status:e.status+" com "+e.occupations.total+" lugares"},on:{click:function(a){t.select(e)}}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{staticStyle:{width:"48px"},attrs:{src:"static/img/table.png"}})])])})],2)})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("h3",[t._v("Já estamos processando o seu pedido")]),t._v(" "),a("h2",[a("countdown",{attrs:{deadline:t.minutes(new Date,20)}})],1),t._v(" "),a("p",[t._v("Tempo aproximado")]),t._v(" "),a("f7-block",[a("h4",[t._v("Metodo de pagamento")]),t._v(" "),a("f7-list",{staticClass:"list",attrs:{"media-list":""}},[a("f7-list-item",{attrs:{text:"Dinheiro"},on:{click:t.open}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{attrs:{src:"static/img/money.png"}})])]),t._v(" "),a("f7-list-item",{attrs:{text:"Outra pessoa"},on:{click:t.open}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{attrs:{src:"static/img/person.png"}})])]),t._v(" "),a("f7-list-item",{attrs:{text:"**** 1590 (credit)"},on:{click:t.open}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{attrs:{src:"static/img/cred.png"}})])])],1),t._v(" "),a("a",[t._v("Adicionar forma de pagamento")])],1),t._v(" "),a("f7-block",{staticStyle:{display:"flex","flex-flow":"column nowrap","justify-content":"space-around",height:""}},[a("h4",[t._v("Ações")]),t._v(" "),a("f7-list",{staticClass:"list",attrs:{"media-list":""}},[a("f7-list-item",{attrs:{text:"Trazer bebidas"}}),t._v(" "),a("f7-list-item",{attrs:{text:"Fazer novos pedidos"}}),t._v(" "),a("f7-list-item",{attrs:{text:"Ver resume"}})],1)],1),t._v(" "),a("f7-toolbar",{attrs:{bottom:""}},[a("f7-button",{staticStyle:{width:"100%"},attrs:{raised:"",big:""},on:{click:t.open}},[t._v("Fechar Commanda")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("h2",[t._v("Metodo de pagamento")]),t._v(" "),a("f7-list",{staticClass:"list",attrs:{"media-list":""}},[a("f7-list-item",{attrs:{text:"Dinheiro"},on:{click:t.open}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{attrs:{src:"static/img/money.png"}})])]),t._v(" "),a("f7-list-item",{attrs:{text:"Outra pessoa"},on:{click:t.open}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{attrs:{src:"static/img/person.png"}})])]),t._v(" "),a("f7-list-item",{attrs:{text:"**** 1590 (credit)"},on:{click:t.open}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{attrs:{src:"static/img/cred.png"}})])])],1),t._v(" "),a("a",[t._v("Adicionar forma de pagamento")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{staticClass:"cardapio",attrs:{"without-subnavbar":"","no-page-content":""}},[a("f7-toolbar",{staticClass:"tabs",attrs:{tabbar:"",scrollable:""}},t._l(t.getProducts,function(e,i){return a("f7-link",{key:i,attrs:{"tab-link":"#"+e.name,active:""}},[t._v(t._s(e.name))])})),t._v(" "),a("f7-tabs",{attrs:{swipeable:""}},t._l(t.getProducts,function(e){return a("f7-page-content",{key:e.name,attrs:{id:""+e.name,tab:""}},t._l(e.products,function(t){return a("section",{key:t.name},[a("cardProduct",{attrs:{products:t.items}})],1)}))})),t._v(" "),a("f7-fab",{attrs:{color:"blue"},on:{click:t.open}},[a("i",{staticClass:"material-icons"},[t._v("done")])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"vue-countdown"},[a("li",[a("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.minutes)))])]),t._v(" "),a("li",[a("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.seconds)))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("f7-statusbar"),t._v(" "),a("f7-panel",{attrs:{right:"",cover:"",layout:"dark"}},[a("f7-view",{attrs:{id:"right-panel-view","navbar-through":"","dynamic-navbar":!0}},[t.$theme.ios?a("f7-navbar",{attrs:{title:"Right Panel",sliding:""}}):t._e(),t._v(" "),a("f7-pages",[a("f7-page",[t.$theme.material?a("f7-navbar",{attrs:{title:"Right Panel",sliding:""}}):t._e(),t._v(" "),a("f7-block"),t._v(" "),a("f7-block-title",[t._v("Load page in panel")]),t._v(" "),a("f7-list",[a("f7-list-item",{attrs:{link:"/about/",title:"About"}})],1)],1)],1)],1)],1),t._v(" "),a("f7-views",[a("f7-view",{attrs:{url:"/home/",id:"main-view","navbar-through":"","dynamic-navbar":!0,main:""}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("h2",[t._v("Meus pedidos")]),t._v(" "),a("f7-list",{staticClass:"list",attrs:{"media-list":""}},t._l(t.command.products,function(e){return a("f7-list-item",{key:e.name,attrs:{title:e.name,text:"R$ "+e.totalValue}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{staticStyle:{width:"48px"},attrs:{src:e.image}})]),t._v(" "),a("div",{attrs:{slot:"after"},slot:"after"},[a("div",{staticClass:"action"},[a("span",[a("f7-button",{attrs:{"icon-material":"remove"},on:{click:function(a){t.removeProduct(e)}}})],1),t._v(" "),a("span",[t._v(t._s(e.selected))]),t._v(" "),a("span",[a("f7-button",{attrs:{"icon-material":"add"},on:{click:function(a){t.addProduct(e)}}})],1)])])])})),t._v(" "),a("f7-block",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-50"},[a("span",[t._v("Sub-total")])]),t._v(" "),a("div",{staticClass:"col-20"},[t._v("\n        "+t._s("R$ "+t.command.subTotal)+"\n      ")])])]),t._v(" "),a("f7-block",{attrs:{inner:""}},[a("div",{staticClass:"row",staticStyle:{"font-size":"16px","font-weight":"600"}},[a("div",{staticClass:"col-50"},[a("span",[t._v("TOTAL")])]),t._v(" "),a("div",{staticClass:"col-20"},[t._v("\n        "+t._s("R$ "+t.command.subTotal)+"\n      ")])])]),t._v(" "),a("f7-toolbar",{attrs:{bottom:""}},[a("f7-button",{staticStyle:{width:"100%"},attrs:{raised:"",big:""},on:{click:t.open}},[t._v("Concluir Pedidos")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:t.product.name,"back-link":"Back",sliding:""}}),t._v(" "),a("img",{staticClass:"media",attrs:{src:t.product.image}}),t._v(" "),a("div",{staticClass:"heart"},[t.product.heart?a("f7-button",{staticStyle:{"font-size":"35px"},attrs:{"icon-f7":"heart_fill",color:"red"},on:{click:function(e){t.product.heart=!1}}}):t._e(),t._v(" "),t.product.heart?t._e():a("f7-button",{staticStyle:{"font-size":"35px"},attrs:{"icon-f7":"heart",color:"red"},on:{click:function(e){t.product.heart=!0}}})],1),t._v(" "),a("f7-block",{staticClass:"wrapper"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-50"},[t._v("Quantidade: ")]),t._v(" "),a("div",{staticClass:"col-50 row"},[a("span",[a("f7-button",{attrs:{"icon-material":"remove"},on:{click:function(e){t.removeProduct(t.product)}}})],1),t._v(" "),a("span",{staticStyle:{"align-self":"center"}},[t._v(t._s(t.product.selected))]),t._v(" "),a("span",[a("f7-button",{attrs:{"icon-material":"add"},on:{click:function(e){t.addProduct(t.product)}}})],1)])]),t._v(" "),a("div",{staticClass:"rated"},[a("div",{staticClass:"rating"},t._l([5,4,3,2,1],function(e){return a("span",{key:e,class:{"is-active":t.rated(e,t.product.rated)}},[t._v("☆")])}))]),t._v(" "),a("f7-buttons",[a("f7-button",{attrs:{raised:t.isSelectRaised,"tab-link":"#tab-1",active:""},on:{click:function(e){t.isSelectRaised=!0}}},[t._v("Detalhes")]),t._v(" "),a("f7-button",{attrs:{raised:!t.isSelectRaised,"tab-link":"#tab-2"},on:{click:function(e){t.isSelectRaised=!1}}},[t._v("Tabela nutricional")])],1),t._v(" "),a("f7-tabs",{staticClass:"tab"},[a("f7-tab",{attrs:{id:"tab-1",active:""}},[t._v("\n        "+t._s(t.product.description)+"\n      ")]),t._v(" "),a("f7-tab",{attrs:{id:"tab-2"}},[a("table",[a("thead",[a("tr",[a("th",[t._v("Desert")]),t._v(" "),a("th",[t._v("Calories")]),t._v(" "),a("th",[t._v("Fat")]),t._v(" "),a("th",[t._v("Carbs")]),t._v(" "),a("th",[t._v("Protein")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Frozen yogurt")]),t._v(" "),a("td",[t._v("159")]),t._v(" "),a("td",[t._v("6.0")]),t._v(" "),a("td",[t._v("24")]),t._v(" "),a("td",[t._v("4.0")])]),t._v(" "),a("tr",[a("td",[t._v("Ice cream")]),t._v(" "),a("td",[t._v("237")]),t._v(" "),a("td",[t._v("9.0")]),t._v(" "),a("td",[t._v("37")]),t._v(" "),a("td",[t._v("4.4")])]),t._v(" "),a("tr",[a("td",[t._v("Eclair")]),t._v(" "),a("td",[t._v("262")]),t._v(" "),a("td",[t._v("16.0")]),t._v(" "),a("td",[t._v("24")]),t._v(" "),a("td",[t._v("6.0")])]),t._v(" "),a("tr",[a("td",[t._v("Cupcake")]),t._v(" "),a("td",[t._v("305")]),t._v(" "),a("td",[t._v("3.7")]),t._v(" "),a("td",[t._v("67")]),t._v(" "),a("td",[t._v("4.3")])])])])])],1)],1),t._v(" "),a("f7-fab",{attrs:{color:"blue"},on:{click:function(e){t.back()}}},[a("f7-icon",{attrs:{icon:"icon-back"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"About","back-link":"Back",sliding:""}}),t._v(" "),a("f7-block",{attrs:{inner:""}},[a("p",[t._v("Here is About page!")]),t._v(" "),a("p",[t._v("You can go\n      "),a("f7-link",{attrs:{back:""}},[t._v("back")]),t._v(".")],1),t._v(" "),a("p",[t._v("Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.")]),t._v(" "),a("p",[t._v("Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.")])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-block",[a("h2",[t._v("Atendimento")]),t._v(" "),a("f7-list",{staticClass:"list",attrs:{"media-list":""}},[a("f7-list-item",{attrs:{text:"Muito satisfeito"}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{attrs:{src:"static/img/laughing-face-stroke.png"}})])]),t._v(" "),a("f7-list-item",{attrs:{text:"Satisfeito"}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{attrs:{src:"static/img/smiling-emoticon-face.png"}})])]),t._v(" "),a("f7-list-item",{attrs:{text:"Neutro"}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{attrs:{src:"static/img/emoticon-neutral-face-outline.png"}})])]),t._v(" "),a("f7-list-item",{attrs:{text:"Neutro"}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{attrs:{src:"static/img/sad-face-outline.png"}})])]),t._v(" "),a("f7-list-item",{attrs:{text:"Neutro"}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{attrs:{src:"static/img/angry-emoticon.png"}})])]),t._v(" "),a("f7-list-item",{attrs:{divider:""}}),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("Comentário")]),t._v(" "),a("f7-input",{attrs:{type:"textarea",placeholder:"Deixe aqui sua mensagem."}})],1)],1)],1),t._v(" "),a("f7-toolbar",{attrs:{bottom:""}},[a("f7-button",{staticStyle:{width:"100%"},attrs:{big:""},on:{click:t.alert}},[t._v("Terminar")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-list",{staticClass:"products",attrs:{"media-list":""}},t._l(t.products,function(e){return e.isActive?a("f7-list-item",{key:e.name,attrs:{title:e.name,text:e.description,after:"R$ "+e.value,link:"/product/"+e.id,"link-view":"#main-view","link-close-panel":""}},[a("div",{attrs:{slot:"media"},slot:"media"},[a("img",{staticClass:"media",attrs:{src:e.image}})]),t._v(" "),a("div",{attrs:{slot:"inner"},slot:"inner"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-50"},[a("div",{staticClass:"rating"},t._l([5,4,3,2,1],function(i){return a("span",{key:i,class:{"is-active":t.rated(i,e.rated)}},[t._v("☆")])}))]),t._v(" "),a("div",{staticClass:"col-5"},[a("span",{staticClass:"total"},[t._v(t._s(e.selected||""))])]),t._v(" "),a("div",{staticClass:"col-45"},[a("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(a){t.add(e)}}},[t._v("Adicionar")])])])])]):t._e()}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-login-screen",{attrs:{id:"login-screen"}},[a("f7-view",[a("f7-pages",[a("f7-page",{attrs:{"login-screen":""}},[a("f7-login-screen-title",[t._v("Login")]),t._v(" "),a("f7-list",{attrs:{form:""}},[a("f7-list-item",[a("f7-label",[t._v("Username")]),t._v(" "),a("f7-input",{attrs:{name:"username",placeholder:"Username",type:"text"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("Password")]),t._v(" "),a("f7-input",{attrs:{name:"password",type:"password",placeholder:"Password"}})],1)],1),t._v(" "),a("f7-list",[a("f7-list-button",{attrs:{title:"Sign In","close-login-screen":""}}),t._v(" "),a("f7-list-label",[a("p",[t._v("Click Sign In to close Login Screen")])])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-popup",{attrs:{id:"popup"}},[a("f7-view",{attrs:{"navbar-fixed":""}},[t.$theme.ios?a("f7-navbar",[a("f7-nav-center",{attrs:{sliding:""}},[t._v("Cardápio")]),t._v(" "),a("f7-nav-right",[a("span",[t._v("Menu")]),t._v(" "),a("f7-link",{attrs:{icon:"icon-bars","open-panel":"right"}})],1)],1):t._e(),t._v(" "),a("f7-pages",[a("f7-page",[t.$theme.material?a("f7-navbar",[a("f7-nav-center",{attrs:{sliding:""}},[t._v("Cardápio")]),t._v(" "),a("f7-nav-right",[a("span",[t._v("Menu")]),t._v(" "),a("f7-link",{attrs:{icon:"icon-bars","open-panel":"right"}})],1)],1):t._e(),t._v(" "),a("f7-swiper",{attrs:{pagination:"","next-button":"","prev-button":"",scrollbar:""}},[a("f7-swiper-slide",[a("f7-button",{attrs:{"open-popup":"#popup"}},[t._v("Informações")])],1),t._v(" "),a("f7-swiper-slide",[t._v("Slide 2")]),t._v(" "),a("f7-swiper-slide",[t._v("Slide 3")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("h2",[t._v("Bem vindo a casa Happy Hour")]),t._v(" "),a("a",{on:{click:t.close}},[t._v("Ver cardápio")]),t._v(" "),a("img",{attrs:{src:"static/img/qrcode.svg"}}),t._v(" "),a("p",[t._v("Escolha a mesa e escaneie o QR Code")]),t._v(" "),a("a",{on:{click:t.loadTables}},[t._v("Selecionar mesa")]),t._v(" "),a("f7-toolbar",{attrs:{bottom:""}},[a("f7-button",{staticClass:"button",attrs:{big:""},on:{click:t.alert}},[t._v("Escanear")])],1)],1)},staticRenderFns:[]}},,,function(t,e){}],[35]);