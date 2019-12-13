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

var db = [
  {id: "ovejabeja", title: "Oveja", info: "<img src='https://i2-prod.corkbeo.ie/incoming/article17415887.ece/ALTERNATES/s615/1_sheepViagra.jpg'></img>La oveja (Ovis orientalis aries) ​es un mamífero cuadrúpedo ungulado doméstico, usado como ganado. Como todos los rumiantes, las ovejas son artiodáctilos, o animales con pezuñas. A pesar de que el término «oveja» se aplica a muchas especies del género Ovis, por lo general hace referencia a la subespecie doméstica de Ovis orientalis.<br/>Posiblemente desciendan del muflón salvaje de Europa y Asia, y fueron uno de los primeros animales en ser domesticados para fines agrícolas, criadas principalmente por su lana, carne y leche. La lana de oveja es la fibra animal más utilizada y por lo general se recoge mediante esquila. Su carne recibe el nombre de carne de cordero cuando es de un animal joven y de ovino mayor o carnero cuando proviene de animales de más de un año. También se crían como organismo modelo para la investigación científica.<br/><br/>La cría de ovejas se practica en casi todo el mundo y ha sido fundamental para muchas civilizaciones. En 2014 la FAO reflejaba la existencia de más de mil doscientos millones de cabezas en todo el mundo, con China como mayor productor, con más de doscientos millones (un 16,7 % del total), seguida por Australia con setenta y dos y la India con sesenta y tres millones de cabezas.​<br/><br/>Como animal clave en la historia de la ganadería, las ovejas están profundamente arraigadas en la cultura humana y aparecen representadas tanto en el lenguaje moderno como en la simbología. Como ganado, se asocian generalmente con imágenes pastoriles y arcadianas. Aparecen en muchos mitos —como el del vellocino de oro— y en las grandes religiones, especialmente en las abrahámicas. Tanto en los ritos religiosos antiguos como en los modernos, se han utilizado como animales de sacrificio."
},
  {id: "ovejabejanegra", title: "Oveja Negra", info: "El origen del término “oveja negra” nace de la referencia que los pastores hacían a los rebaños, donde las ovejas de lana blanca eran las más deseadas porque su lana se podía teñir. Cuando aparece dentro de un rebaño una oveja negra, generalmente es despreciada ya que su lana no cumple con las expectativas de poder escoger el color sino que siempre será negra, o sea, hay que aceptarla como es.<br/><br/>Las ovejas negras de las familias generalmente son despreciadas o no valoradas y, por lo tanto, se suelen sentir incomprendidas. Hoy en día, la psicología enfatiza las diferencias individuales como características potencialmente especiales de cada persona, por ello las ovejas negras han logrado encontrar fuera de su núcleo familiar el apoyo que necesitan para brillar."
  }
]
