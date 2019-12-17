document.querySelectorAll("a-marker").forEach(function(elem){
  elem.addEventListener("markerFound", foundObj);
  elem.addEventListener("markerLost", lostObj);
})

var foundList = [];

function foundObj(evt){
  console.log(evt.target.title)
  let obj = db.find(elem => elem.id === evt.target.title);
  if (obj) {
    foundList.push(obj);
    refreshObjList();
    if (foundList.length) {
      document.querySelector("main").classList.add("show");
    }
  }
}

function lostObj(evt){
  console.log(evt.target.title)
  foundList = foundList.filter(elem => elem.id !== evt.target.title);
  refreshObjList();
  if (!foundList.length) {
    document.querySelector("main").classList.remove("show");
  }
}

function refreshObjList(){
  let listDom = document.querySelector("#obj-list");
  listDom.innerHTML = "<h1>Found:</h1>";
  for (elem of foundList) {
    listDom.innerHTML += "<div data-id='"+elem.id+"' onclick='showObj(this)'>"+elem.title+"</div>";
  }
  // TODO: CREATE NODES, NO INNERHTML AND ADD CLOSE BUTTON
}

function showObj(elem){
  let obj = db.find(row => row.id === elem.dataset["id"]);
  document.querySelector("main").classList.add("open");
  document.querySelector("#obj-info h1").innerHTML = obj.title;
  document.querySelector("#obj-info p").innerHTML = obj.info;
}

function closeInfo(){
  document.querySelector("main").classList.remove("open");
}
function smallOpen(){
  document.querySelector("main").classList.toggle("smallOpen");
}

var db = [
  {id: "cactus", title: "Cactus", info: "<img src='https://medias.conforama.pt/akeneoCloud/650by551/af59630ce9fae39003a7ce3429244357d4dab799_390268.jpg'></img><br/><br/>Cactaceae, las cactáceas, son conocidas en conjunto como cactos, cactus o cacti. Esta familia es originaria de América. Sin embargo, hay una excepción, Rhipsalis baccifera, que está extendida en África tropical, Madagascar y Ceilán. Se cree que la colonización del Viejo Mundo por esta especie es relativamente reciente (unos cuantos cientos de años), probablemente transportada en el aparato digestivo de pájaros migratorios en forma de semillas, bien directamente desde América o a partir de poblaciones surgidas en África como consecuencia del transporte de esclavos. ​Muchas plantas suculentas, tanto en el Viejo como en el Nuevo Mundo, tienen una notable semejanza con los cactus y, a menudo, son así llamadas en lenguaje corriente. Sin embargo, esto se debe a la evolución paralela o convergente (similares presiones selectivas resultan en morfologías parecidas), ya que ninguna de ellas está estrechamente emparentada con las cactáceas. La característica identificativa más clara de la familia de los cactus es la areola, una estructura especializada de donde surgen las espinas, los vástagos nuevos y, en muchas ocasiones, las flores.<br/><br/>Se considera que las cactáceas han evolucionado entre 30 y 40 millones de años atrás. El continente americano estaba unido a los demás, pero se fue separando progresivamente por la deriva continental. Las especies endémicas del Nuevo Mundo debieron desarrollarse después de esta separación; el distanciamiento significativo se alcanzó en los últimos 50 millones de años. Esto podría explicar la inexistencia de cactus endémicos en África: éstos evolucionaron en América cuando los continentes ya se habían separado.<br/><br/>Según el Apéndice I de CITES, más de 15 géneros de cactáceas (con 73 especies) se encuentran en grave peligro de extinción, por deterioro del hábitat o por depredación.<br/><br/>Al vivir en zonas de calores extremos, los cactus realizan el intercambio de gases durante la noche, de manera que mientras dormimos consumen dióxido de carbono, al revés que el resto de las plantas."
  },
  {id: "tulip", title: "Tulipán", info: "<img src='https://www.vicalhome.com/2304694-thickbox_default/flor.jpg'></img><br/><br/>Los tulipanes se cultivaron como plantas ornamentales desde principios del siglo XI en Anatolia. Desde esta región e Irán provendrían los bulbos tomados por el toledano Ibn Massal para su cultivo en el al-Ándalus, según documenta la obra Umda del botánico Abu-I-Jayr, fechada entre los siglos XI y XII, estudiada por los investigadores Esteban Hernández Bermejo y Expiración García.<br/><br/>Con la Edad Moderna, su cultivo se extendió hacia los países del norte de Europa, convirtiéndose en la flor símbolo de los Países Bajos y parte inseparable de su paisaje. También tiene un uso como símbolo nacional en Irán y Turquía."
  },
  {id: "mushroom", title: "Seta", info: "<img src='https://www.retif.es/media/image/400x/seta-3-sombreros-12x16-cm-surtida_01.jpg'></img><br/><br/>Las setas —también llamadas callampas (del peli seti kallampa, k'allampa) en Bolivia, Chile, Ecuador y Perú-​ son los esporocarpos, o cuerpos fructíferos, de un conjunto de hongos pluricelulares (basidiomicetos) que incluye muchas especies. Suelen crecer en la humedad que les proporciona la sombra de los árboles, pero también en cualquier ambiente húmedo y con poca luz. Algunas especies son comestibles y otras son venenosas, e incluso existen varias con efectos psicoactivos.<br/><br/>Son ejemplos de setas comestibles el champiñón, el gurumelo, el níscalo, la galamperna, la oronja o shiitake (Lentinula edodes)."
  },
  {id: "afrodita", title: "Venus de Milo", info: "<img src='https://www.nicepng.com/png/detail/158-1583527_venus-de-milo-venus-de-milo-transparent.png'></img><br/><br/>La Afrodita de Milo (en griego, Αφροδίτη της Μήλου), más conocida como Venus de Milo, es una de las estatuas más representativas del período helenístico de la escultura griega, y una de las más famosas esculturas de la antigua Grecia. Fue creada en algún momento entre los años 130 a. C. y 100 a. C., y se cree que representa a Afrodita (denominada Venus en la mitología romana), diosa del amor y la belleza;2​ mide, aproximadamente, 211 cm de alto.<br/><br/>Esta estatua fue encontrada en Milo —Cícladas—,​ desenterrada por un campesino y vendida a Francia entre 1819 y 1820. El precio que el campesino pedía por la escultura era demasiado alto, y Dumont d'Urville —viajero que realizó una parada en este lugar—,​ no llevaba el dinero suficiente, por lo que recurrió a un embajador francés en Constantinopla, quien accedió a comprarla. Sin embargo, anteriormente el campesino había acordado venderla a los turcos, lo que inició un conflicto por la posesión de la estatua.<br/><br/>La escultura fue hecha en mármol blanco, en varios bloques cuyas uniones no son visibles, en un tamaño ligeramente superior al natural. Se desconoce su autor,​ pero se ha sugerido que pudiera ser obra de Alejandro de Antioquía. Esta escultura posee un estilo característico del final de la época helenística,​ que retoma el interés por los temas clásicos al tiempo que los renueva. El aspecto clasicista de sus formas hacen suponer que su autor se inspiró en la estatua del siglo IV a. C. de Lisipo, la Afrodita de Capua."
  },
  {id: "banana", title: "Plátano", info: "<img src='https://static3.elcorreo.com/www/multimedia/201903/01/media/cortadas/platano-k4KD-U70794395930sIE-624x385@El%20Correo.jpg'></img><br/><br/>La banana (término utilizado en Argentina, Honduras, Paraguay, Puerto Rico, Uruguay y República Dominicana),​ plátano​ (Colombia, Chile, México, occidente-centro de Cuba, Perú y España), guineo (en Panamá, El Salvador, oriente de Cuba, Puerto Rico, Perú, República Dominicana, Costa Caribe de Colombia y el Ecuador continental), banano (Colombia, Costa Rica y Guatemala), maduro (Colombia) o cambur en Venezuela (salvo la variedad más grande conocida como plátano macho que en este país se conoce como plátano), es un fruto comestible, botánicamente una baya, de varios tipos de grandes plantas herbáceas del género Musa. A estas plantas de gran porte que tienen aspecto de arbolillo se las denomina plataneras, bananeros, bananeras, plátanos o bananos.<br/><br/>Es un fruto con cualidades variables en tamaño (10cm), color y firmeza, alargado, generalmente curvado y carnoso, rico en almidón cubierto con una cáscara, que puede ser verde, amarilla, roja, púrpura o marrón cuando está madura. Los frutos crecen en piñas que cuelgan de la parte superior de la planta. Casi todos los plátanos en la actualidad son frutos estériles que no producen semillas fructificantes y provienen de dos especies silvestres: Musa acuminata y Musa balbisiana. El nombre científico de la mayoría de los plátanos cultivados es Musa × paradisiaca, el híbrido Musa acuminata × M. balbisiana, con distintas denominaciones o cultivares, dependiendo de su constitución genómica."
  },
  {id: "apple", title: "Manzano", info: "<img src='https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiCm_bPzrzmAhWs34UKHVuvBbcQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.redagricola.com%2Fcl%2Fun-mercado-de-alta-competitividad-y-complejidad%2F&psig=AOvVaw3QpEHp89-SE4P0pzJJUZ0h&ust=1576669738470393'></img><br/><br/>El manzano (Malus domestica), es un árbol de la familia de las rosáceas, cultivado por su fruto, apreciado como alimento. Su domesticación parece comenzar hace más de 15 000 años en la región comprendida al oeste de las Montañas Tian Shan, frontera entre Kazajistán y China. Fue introducido en Europa por los romanos y en la actualidad existen unas 1000 variedades/cultivares, como resultado de innumerables hibridaciones entre formas silvestres. Es una gran fuente de vitaminas."
  },
]
