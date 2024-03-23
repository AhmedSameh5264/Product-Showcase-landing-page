function yongimg(pic){
    document.getElementById("mybigimg").setAttribute('src',pic)
}

btn = document.getElementById("mybtn");
sban = document.getElementById('myspan');

count=0;

function btntest(){
    count++
    sban.innerHTML=count;
    if(count==6){
    btn.setAttribute("disabled", "disabled");

    }
}

thecart = document.getElementById("mycart");
theheart = document.getElementById("myheart");
function wishlist(){
    
thecart.style.color = 'blue'
theheart.style.color= 'blue'
theheart.style.fontWeight = "800";

}

//index tow

function soranony(baby){
    document.getElementById("sorakbera").setAttribute('src',baby)
}

finlinpt = document.getElementById("finalinput");
finlbtn = document.getElementById("finalbtn");

count=0;

function finalbtnn(){
    count++
    finlinpt.value = count;

    if (count == 8) {
      finlbtn.setAttribute("disabled", "disabled");
      finlinpt.setAttribute("disabled", "disabled");

    }
}

function radioinput(){
        maindiv = document.getElementById("thirdbaby");
        mydiv=document.createElement('div')
        maindiv.appendChild(mydiv);
        mydiv.classList.add('mydiv')

        myhtow=document.createElement('h2')
        mydiv.appendChild(myhtow)
        myhtowtext = document.createTextNode("choose your delivery frequency");
        myhtow.appendChild(myhtowtext);
        myhtow.classList.add('htowedit')

        selextt=document.createElement('select')
        mydiv.appendChild(selextt)
        selextt.classList.add('selextedit')

        optone=document.createElement('option')
        selextt.appendChild(optone)
        textone=document.createTextNode('14 Days')
        optone.appendChild(textone)
        optone.classList.add('opedit')

        opttow = document.createElement("option");
        selextt.appendChild(opttow);
        texttow = document.createTextNode("30 Days");
        opttow.appendChild(texttow);
        opttow.classList.add("opedit");

        optthree = document.createElement("option");
        selextt.appendChild(optthree);
        textthree = document.createTextNode("60 Days");
        optthree.appendChild(textthree);
        optthree.classList.add("opedit");

         optfour = document.createElement("option");
         selextt.appendChild(optfour);
         textfour = document.createTextNode("90 Days");
         optfour.appendChild(textfour);
         optfour.classList.add("opedit");
         
          optfife = document.createElement("option");
          selextt.appendChild(optfife);
          textfive = document.createTextNode("120 Days");
          optfife.appendChild(textfive);
          optfife.classList.add("opedit");
          maindiv.style.display='block'
        
}

maindiv = document.getElementById("thirdbaby");
function buyinpt(){
        maindiv.style.display='none';
}

function myfristboy(){
  myfristdive = document.getElementById("clowndiv");
  fristbabydiv = document.createElement("div");
  myfristdive.appendChild(fristbabydiv);
  fristbabydiv.classList.add("babydivs");

  paragraph = document.createElement("p");
  fristbabydiv.appendChild(paragraph);
  pragraphtext = document.createTextNode("nuut is fortified with over one third of your daily recommended vitamin and mineral intake.");
  paragraph.appendChild(pragraphtext);
  paragraph.classList.add('parrrr')

  myh3 = document.createElement("h3");
  fristbabydiv.appendChild(myh3);
  h3text = document.createTextNode("premium plant-based ingredients support: ");
  myh3.appendChild(h3text);
  myh3.classList.add("h3rdit");

  myul=document.createElement('ul')
  fristbabydiv.appendChild(myul)
  myul.classList.add('uledit')

  myli = document.createElement("li");
  myul.appendChild(myli);
  litext = document.createTextNode('healthy immune system')
  myli.appendChild(litext)
  myli.classList.add('lirdit')


//
 mylitow = document.createElement("li");
 myul.appendChild(mylitow);
 litext = document.createTextNode("digestive health");
 mylitow.appendChild(litext);
 mylitow.classList.add("lirdit");
 


 //

 //
 myli = document.createElement("li");
 myul.appendChild(myli);
 litext = document.createTextNode("metabolic rate");
 myli.appendChild(litext);
 myli.classList.add("lirdit");


 //
 //
 myli = document.createElement("li");
 myul.appendChild(myli);
 litext = document.createTextNode("weight loss");
 myli.appendChild(litext);
 myli.classList.add("lirdit");


 //
 //
 myli = document.createElement("li");
 myul.appendChild(myli);
 litext = document.createTextNode("heart health");
 myli.appendChild(litext);
 myli.classList.add("lirdit");


 //
 //
 myli = document.createElement("li");
 myul.appendChild(myli);
 litext = document.createTextNode("gastrointestinal health");
 myli.appendChild(litext);
 myli.classList.add("lirdit");


 //
 //
 myli = document.createElement("li");
 myul.appendChild(myli);
 litext = document.createTextNode("healthy and glowing skin");
 myli.appendChild(litext);
 myli.classList.add("lirdit");


 //
 //
 myli = document.createElement("li");
 myul.appendChild(myli);
 litext = document.createTextNode("strong immune system");
 myli.appendChild(litext);
 myli.classList.add("lirdit");


 //
}
function myscnboy() {
  myscndive = document.getElementById("divtowclowen");
  scnbabydiv = document.createElement("div");
  myscndive.appendChild(scnbabydiv);
  myscndive.classList.add("babydivs");

  paragraph = document.createElement("p");
  scnbabydiv.appendChild(paragraph);
  pragraphtext = document.createTextNode("nuut is formulated using plant-based ingredients dosed in high potency form at active level for optimal bioavailability.");
  paragraph.appendChild(pragraphtext);
  paragraph.classList.add("parrrr");

  paragraph = document.createElement("p");
  scnbabydiv.appendChild(paragraph);
  pragraphtext = document.createTextNode("protein blend (certified organic pea, pumpkin seed), certified organic superfood blend (lucuma, cacao, barley grass, wheat grass, chlorella), natural flavours, oil blend (coconut, safflower, mct), emulsifier (sunflower lecithin), potassium bicarbonate, calcium citrate, guar gum, magnesium phosphate, himalayan rock salt, certified organic inulin, kakadu plum, probiotics blend (l. acidophilus, b. bifidum, b. longum, b. lactis), kelp, ascorbic acid (vitamin c), zinc gluconate, mixed tocopherols (vitamin e), niacin (vitamin b3), manganese chelate, calcium pantothenate (vitamin b5), beta carotene (vitamin a), copper gluconate, ferrous fumarate (iron), biotin, cholecalciferol (vitamin d), pyridoxine hcl (vitamin b6), riboflavin (vitamin b2), phylloquinone (vitamin k), thiamine hcl (vitamin b1), cyanocobalamin (vitamin b12), selenium chelate, folic acid (vitamin b9)");
  paragraph.appendChild(pragraphtext);
  paragraph.classList.add("parrrrtow");

  paragraph = document.createElement("p");
  scnbabydiv.appendChild(paragraph);
  pragraphtext = document.createTextNode("vegan - gluten free - preservative free - non gmo - dairy free - soy free");
  paragraph.appendChild(pragraphtext);
  paragraph.classList.add("parrrrthree");
}