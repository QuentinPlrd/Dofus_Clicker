// Récupération du pseudo

let pseudo ;
window.onload = function () {
     pseudo = prompt("Entrez une pseudo");
    let div_pseudo= document.querySelector(".name");
    div_pseudo.innerHTML = pseudo;
}

// Récupération des éléments HTML dans des variables js

    //Ciblage des bonus à droite pour augmentation des dégats actuels avec l'évènement "click"

let degat1 = document.querySelector('.bonus1')
let degat5 = document.querySelector('.bonus2')
let degat10 = document.querySelector('.bonus3')
let degat500 = document.querySelector('.bonus4')
let degat1000 = document.querySelector('.bonus5')

    //Ciblage personnage 
let personnage = document.querySelector('.perso');
    //Score
let starting_score = document.querySelector('.nombre_score')
    //Dégats
let degat = document.querySelector('.degat_de_base')
    //Initialisation du score et des degats
let score = 0
let degat_actuel = 1

//Fonction incrémentation + fonction bonus dégats

function firstdegat(){
    score = score + degat_actuel
    starting_score.innerText = score
    degat.innerText = degat_actuel
}

    //Dégats + 1 pour 100 de score
degat1.addEventListener("click", () => {
if (score >= 100) {
    score = score - 100
    degat_actuel++
    starting_score.innerText = score
    degat.innerText = degat_actuel
} 
})

    //Dégats +5 pour 500 de score
degat5.addEventListener("click", () => {
if (score >= 500 ) {
    score = score - 500
    degat_actuel = degat_actuel + 5
    starting_score.innerText = score
    degat.innerText = degat_actuel
} 
})

    //Dégats + 10 pour 1000 score
degat10.addEventListener("click", () => {
if (score >= 1000) {
    score = score - 1000
    degat_actuel = degat_actuel +10
    starting_score.innerText = score
    degat.innerText = degat_actuel
} 
})

    //Dégats + 500 pour 50000 de score
degat500.addEventListener("click", () => {
if (score >= 50000) {
    score = score - 50000
    degat_actuel = degat_actuel + 500
    starting_score.innerText = score
    degat.innerText = degat_actuel
} 
})

    //Dégats + 1000 pour 100000
degat1000.addEventListener("click", () => {
if (score >= 100000) {
    score = score - 100000
    degat_actuel = degat_actuel +1000
    starting_score.innerText = score
    degat.innerText = degat_actuel
} 
})    

// Changement de couleur bordures des bonus

    //Création fonction pour bonus 1 
function color1(){
    setTimeout(color1, 10);
    let border1 = document.getElementById('bonusdegat1');
    if(score < 100){
        border1.style.borderColor = 'red'
    }
    else{
        border1.style.borderColor = "green";
    }
}
color1()    // appel de la fonction pour l'exécuter


    //Création fonction pour bonus 2
function color2(){
    setTimeout(color2, 10,);
    let border2 = document.getElementById('bonusdegat2');
    if(score < 500){
        border2.style.borderColor = 'red'
    }
    else{
        border2.style.borderColor = "green";
    }
}
color2()    // appel de la fonction

    //Création fonction pour bonus 3
function color3(){
    setTimeout(color3, 10);
    let border3 = document.getElementById('bonusdegat3');
    if(score < 1000){
        border3.style.borderColor = 'red'
    }
    else{
        border3.style.borderColor = "green";
    }
}
color3()    //appel de la fonction


    //Création fonction pour bonus 4
function color4(){
    setTimeout(color4, 10);
    let border4 = document.getElementById('bonusdegat4');
    if(score < 50000){
        border4.style.borderColor = 'red'
    }
    else{
        border4.style.borderColor = "green";
    }
}
color4()    //appel de la fonction


    //Création fonction pour bonus 5
function color5(){
    setTimeout(color5, 10);
    let border5 = document.getElementById('bonusdegat5');
    if(score <= 100000){
        border5.style.borderColor = "red"
    }
    else{
        border5.style.borderColor = "green";
    }
}
color5()    //appel de la fonction


//Changement d'image du personnage et du monstre selon score
function changeimage(){
    setTimeout(changeimage, 10,);
    let monster = document.querySelector('.monster');
    let personnage = document.querySelector('.perso');
        if(score>=100 && score<1000){
        monster.src ="images/bouftou.jpeg"
        personnage.src ="images/iop_2.png"
        }
        else if(score>=1000 && score< 10000){
        monster.src = "images/bwork.png"
        personnage.src = "images/iop_3.png"
        }
        else if(score>=10000 && score<100000){
        monster.src = "images/kolosso.png"
        personnage.src = "images/iop_5.png"
        }
        else if(score>=100000){
        monster.src = "images/crocabulia.png"
        personnage.src = "images/iop_6.png"
        }
        else{
        monster.src ="images/tofu.jpeg"
        personnage.src ="images/iop_1.png"
        }
    }

// Autoclick  
let prix = 10
let cps = 0
function autoclick(){
    if (score >= prix){
        cps=1
        score = score - prix
        prix = prix*2
        let prix_autoclicker = document.getElementById("cout_autoclick")
        prix_autoclicker.innerHTML = prix   
        updateTimeInterval()
    }
}

let time = setInterval(function autoclick(){
    score = score + cps
    starting_score.innerHTML = score
    }, 1000)

let fpsInterval = 1000;
const updateTimeInterval = () => {
    clearInterval(time)
    fpsInterval = fpsInterval / 1.5
    time = setInterval(function autoclick(){
        score = score + cps
        starting_score.innerHTML = score
        }, fpsInterval)
}

//Reset
function reset() {
    score = 0
    starting_score.innerHTML = score
    degat_actuel = 1
    degat.innerHTML = degat_actuel
    cps = 0
    prix = 10
    fpsInterval = 1000
    let prix_autoclicker = document.getElementById("cout_autoclick")
    prix_autoclicker.innerHTML = prix
    lvl.innerHTML = "1"
    monster.src ="images/tofu.jpeg"
    personnage.src ="images/iop_1.png"
}

// Affichage message aléatoire tous les x temps
function msg(){
    let message = document.querySelector('.texte')
    let exemple = ["Pas mal pour un noob!", "Débloque de nouveaux équipements en tuant les monstres", "Prépare toi à affronter le boss", "Tu peux toujours cliquer !", "Il te faut 10.295.962.000 xp pour atteindre le lvl 200", "Vend code audio no noob", "Cherche groupe dj blop", "Recrute Kanigrou, pano sasa obligatoire", "Cra feu lvl 120, dispo pour donjon RN en boucle", "Vends dofus cawotte +30 sasa mp moi prix", "Pas mal pour un pseudo de noob" ]
    setTimeout(msg, 12000)
    a = Math.trunc(Math.random()*exemple.length)
    message.innerHTML=exemple[a]
}
msg()

/* Evolution Level selon score (evolution selon la version 1.29 du jeu officiel : https://www.dofuspourlesnoobs.com/tableaux-dexpeacuterience.html */
let lvl = document.getElementById('level')
function level(){
    setTimeout(level);
    if(score < 100){
        lvl.innerHTML = "1"
    }
    else if(score >= 110 && score < 650){ // level 2
        lvl.innerHTML = "2"
    }
    else if(score >= 650 && score < 1500){ // level 3
        lvl.innerHTML = "3"
    }
    else if(score >=1500 && score <2800){
        lvl.innerHTML = "4"
    }
    else if(score >=2800 && score <4800){
        lvl.innerHTML = "5"
    }
    else if(score >=4800 && score <7300){
        lvl.innerHTML = "6"
    }
    else if(score >=7300 && score <10500){
        lvl.innerHTML = "7"
    }
    else if(score >=10500 && score <14500){
        lvl.innerHTML = "8"
    }
    else if(score >=14500 && score <19200){
        lvl.innerHTML = "9"
    }
    else if(score >=19200 && score <25200){
        lvl.innerHTML = "10"
    }
    else if(score >=25200 && score <32600){
        lvl.innerHTML = "11"
    }
    else if(score >=32600 && score <41000){
        lvl.innerHTML = "12"
    }
    else if(score >=41000 && score <50500){
        lvl.innerHTML = "13"
    }
    else if(score >=50500 && score <61000){
        lvl.innerHTML = "14"
    }
    else if(score >=61000 && score <75000){
        lvl.innerHTML = "15"
    }
    else if(score >=75000 && score <91000){
        lvl.innerHTML = "16"
    }
    else if(score >=91000 && score <115000){
        lvl.innerHTML = "17"
    }
    else if(score >=115000 && score <142000){
        lvl.innerHTML = "18"
    }
    else if(score >=142000 && score <171000){
        lvl.innerHTML = "19"
    }
    else if(score >=171000 && score <202000){
        lvl.innerHTML = "20"
    }
    else if(score >=202000 && score <235000){
        lvl.innerHTML = "21"
    }
    else if(score >=235000 && score <270000){
        lvl.innerHTML = "22"
    }
    else if(score >=270000 && score <310000){
        lvl.innerHTML = "23"
    }
    else if(score >=310000 && score <353000){
        lvl.innerHTML = "24"
    }
    else if(score >=353000 && score <398500){
        lvl.innerHTML = "25"
    }
    else if(score >= 398500 && score <448000){
        lvl.innerHTML = "26"
    }
    else if(score >=448000 && score <503000){
        lvl.innerHTML = "27"
    }
    else if(score >=503000 && score <561000){
        lvl.innerHTML = "28"
    }
    else if(score >=561000 && score <621600){
        lvl.innerHTML = "29"
    }
    else if(score >=621600 && score <687000){
        lvl.innerHTML = "30"
    }
    else if(score >=687000 && score <755000){
        lvl.innerHTML = "31"
    }
    else if(score >=755000 && score <829000){
        lvl.innerHTML = "32"
    }
    else if(score >= 829000 && score <910000){
        lvl.innerHTML = "33"
    }
    else if(score >=910000 && score <1000000){
        lvl.innerHTML = "34"
    }
    else if(score >=1000000 && score <1100000){
        lvl.innerHTML = "35"
    }
    else if(score >=1100000 && score <1240000){
        lvl.innerHTML = "36"
    }
    else if(score >=1240000 && score <1400000){
        lvl.innerHTML = "37"
    }
    else if(score >=1400000 && score <1580000){
        lvl.innerHTML = "38"
    }
    else if(score >=1580000 && score <1780000){
        lvl.innerHTML = "39"
    }
    else if(score >=1780000 && score <2000000){
        lvl.innerHTML = "40"
    }
    else if(score >=2000000 && score <2250000){
        lvl.innerHTML = "41"
    }
    else if(score >=2250000 && score <2530000){
        lvl.innerHTML = "42"
    }
    else if(score >= 2530000 && score <2850000){
        lvl.innerHTML = "43"
    }
    else if(score >=2850000 && score <3200000){
        lvl.innerHTML = "44"
    }
    else if(score >=3200000 && score <3570000){
        lvl.innerHTML = "45"
    }
    else if(score >=3570000 && score <3960000){
        lvl.innerHTML = "46"
    }
    else if(score >=3960000 && score <4400000){
        lvl.innerHTML = "47"
    }
    else if(score >=4400000 && score <4860000){
        lvl.innerHTML = "48"
    }
    else if(score >=4860000 && score <5350000){
        lvl.innerHTML = "49"
    }
    else if(score >=5350000 && score <5860000){
        lvl.innerHTML = "50"
    }
    else if(score >=5860000 && score <6390000){
        lvl.innerHTML = "51"
    }
    else if(score >=6390000 && score <6950000){
        lvl.innerHTML = "52"
    }
    else if(score >=6950000 && score <7530000){
        lvl.innerHTML = "53"
    }
    else if(score >=7530000 && score <8130000){
        lvl.innerHTML = "54"
    }
    else if(score >=8130000 && score <8765100){
        lvl.innerHTML = "55"
    }
    else if(score >=8765100 && score <9420000){
        lvl.innerHTML = "56"
    }
    else if(score >=9420000 && score <10150000){
        lvl.innerHTML = "57"
    }
    else if(score >=10150000 && score <11655000){
        lvl.innerHTML = "58"
    }
    else if(score >=11655000 && score <12450000){
        lvl.innerHTML = "59"
    }
    else if(score >=12450000 && score <13280000){
        lvl.innerHTML = "60"
    }
    else if(score >=13280000 && score <14130000){
        lvl.innerHTML = "61"
    }
    else if(score >=14130000 && score <15170000){
        lvl.innerHTML = "62"
    }
    else if(score >=15170000 && score <16251000){
        lvl.innerHTML = "63"
    }
    else if(score >=16251000 && score <17377000){
        lvl.innerHTML = "64"
    }
    else if(score >=17377000 && score <1855300){
        lvl.innerHTML = "65"
    }
    else if(score >=1855300 && score <19778000){
        lvl.innerHTML = "66"
    }
    else if(score >=19778000 && score <21055000){
        lvl.innerHTML = "67"
    }
    else if(score >=21055000 && score <22385000){
        lvl.innerHTML = "68"
    }
    else if(score >=22385000 && score <23529000){
        lvl.innerHTML = "69"
    }
    else if(score >=23529000 && score <25209000){
        lvl.innerHTML = "70"
    }
    else if(score >=25209000 && score <26707000){
        lvl.innerHTML = "71"
    }
    else if(score >=26707000 && score <28264000){
        lvl.innerHTML = "72"
    }
    else if(score >=28264000 && score <29882000){
        lvl.innerHTML = "73"
    }
    else if(score >=29882000 && score <31563000){
        lvl.innerHTML = "74"
    }
    else if(score >=31563000 && score <33307000){
        lvl.innerHTML = "75"
    }
    else if(score >=33307000 && score <35118000){
        lvl.innerHTML = "76"
    }
    else if(score >=35118000 && score <36997000){
        lvl.innerHTML = "77"
    }
    else if(score >=36997000 && score <38945000){
        lvl.innerHTML = "78"
    }
    else if(score >=38945000 && score <40965000){
        lvl.innerHTML = "79"
    }
    else if(score >=40965000 && score <43059000){
        lvl.innerHTML = "80"
    }
    else if(score >=43059000 && score <47476000){
        lvl.innerHTML = "81"
    }
    else if(score >=47476000 && score <49803000){
        lvl.innerHTML = "82"
    }
    else if(score >=49803000 && score <52211000){
        lvl.innerHTML = "83"
    }
    else if(score >=52211000 && score <54704000){
        lvl.innerHTML = "84"
    }
    else if(score >=54704000 && score <57284000){
        lvl.innerHTML = "85"
    }
    else if(score >=57284000 && score <59952000){
        lvl.innerHTML = "86"
    }
    else if(score >=59952000 && score <62712000){
        lvl.innerHTML = "87"
    }
    else if(score >=62712000 && score <65565000){
        lvl.innerHTML = "89"
    }
    else if(score >=65565000 && score <68514000){
        lvl.innerHTML = "90"
    }
    else if(score >=68514000 && score <71561000){
        lvl.innerHTML = "91"
    }
    else if(score >=71561000 && score <74710000){
        lvl.innerHTML = "92"
    }
    else if(score >=74710000 && score <77963000){
        lvl.innerHTML = "93"
    }
    else if(score >=77963000 && score <81323000){
        lvl.innerHTML = "94"
    }
    else if(score >=81323000 && score <84792000){
        lvl.innerHTML = "95"
    }
    else if(score >=84792000 && score <88374000){
        lvl.innerHTML = "96"
    }
    else if(score >=88374000 && score <92071000){
        lvl.innerHTML = "97"
    }
    else if(score >=92071000 && score <95886000){
        lvl.innerHTML = "98"
    }
    else if(score >=95886000 && score <99823000){
        lvl.innerHTML = "99"
    }
    else if(score >=99823000 && score <103885000){
        lvl.innerHTML = "100"
    }
    else if(score >=103885000 && score <108075000){
        lvl.innerHTML = "101"
    }
    else if(score >=108075000 && score <112396000){
        lvl.innerHTML = "102"
    }
    else if(score >=112396000 && score <116853000){
        lvl.innerHTML = "103"
    }
    else if(score >=116853000 && score <121447000){
        lvl.innerHTML = "104"
    }
    else if(score >=121447000 && score <126184000){
        lvl.innerHTML = "105"
    }
    else if(score >=126184000 && score <131066000){
        lvl.innerHTML = "106"
    }
    else if(score >=131066000 && score <136098000){
        lvl.innerHTML = "107"
    }
    else if(score >=136098000 && score <141283000){
        lvl.innerHTML = "108"
    }
    else if(score >=141283000 && score <146626000){
        lvl.innerHTML = "109"
    }
    else if(score >=146626000 && score <152130000){
        lvl.innerHTML = "110"
    }
    else if(score >=152130000 && score <157800000){
        lvl.innerHTML = "111"
    }
    else if(score >= 157800000 && score <163640000){
        lvl.innerHTML = "112"
    }
    else if(score >=163640000 && score <169655000){
        lvl.innerHTML = "113"
    }
    else if(score >=169655000 && score <175848000){
        lvl.innerHTML = "114"
    }
    else if(score >=175848000 && score <182225000){
        lvl.innerHTML = "115"
    }
    else if(score >=182225000 && score <188791000){
        lvl.innerHTML = "116"
    }
    else if(score >=188791000 && score <195550000){
        lvl.innerHTML = "117"
    }
    else if(score >=195550000 && score <202507000){
        lvl.innerHTML = "118"
    }
    else if(score >=202507000 && score <209667000){
        lvl.innerHTML = "119"
    }
    else if(score >=209667000 && score <217037000){
        lvl.innerHTML = "120"
    }
    else if(score >=217037000 && score <224620000){
        lvl.innerHTML = "121"
    }
    else if(score >=224620000 && score <232424000){
        lvl.innerHTML = "122"
    }
    else if(score >=232424000 && score <240452000){
        lvl.innerHTML = "123"
    }
    else if(score >=240452000 && score <248712000){
        lvl.innerHTML = "124"
    }
    else if(score >=248712000 && score <257209000){
        lvl.innerHTML = "125"
    }
    else if(score >=257209000 && score <265949000){
        lvl.innerHTML = "126"
    }
    else if(score >=265949000 && score <274939000){
        lvl.innerHTML = "127"
    }
    else if(score >=274939000 && score <284186000){
        lvl.innerHTML = "128"
    }
    else if(score >=284186000 && score <293694000){
        lvl.innerHTML = "129"
    }
    else if(score >=293694000 && score <303473000){
        lvl.innerHTML = "130"
    }
    else if(score >=303473000 && score <313527000){
        lvl.innerHTML = "131"
    }
    else if(score >=313527000 && score <323866000){
        lvl.innerHTML = "132"
    }
    else if(score >=323866000 && score <334495000){
        lvl.innerHTML = "133"
    }
    else if(score >=334495000 && score <345423000){
        lvl.innerHTML = "134"
    }
    else if(score >=345423000 && score <356657000){
        lvl.innerHTML = "135"
    }
    else if(score >=356657000 && score <368206000){
        lvl.innerHTML = "136"
    }
    else if(score >=368206000 && score <380076000){
        lvl.innerHTML = "137"
    }
    else if(score >=380076000 && score <392278000){
        lvl.innerHTML = "138"
    }
    else if(score >=392278000 && score <404818000){
        lvl.innerHTML = "139"
    }
    else if(score >=404818000 && score <417706000){
        lvl.innerHTML = "140"
    }
    else if(score >=417706000 && score <430952000){
        lvl.innerHTML = "141"
    }
    else if(score >=430952000 && score <444564000){
        lvl.innerHTML = "142"
    }
    else if(score >=444564000 && score <458551000){
        lvl.innerHTML = "143"
    }
    else if(score >=458551000 && score <472924000){
        lvl.innerHTML = "144"
    }
    else if(score >=472924000 && score <487693000){
        lvl.innerHTML = "145"
    }
    else if(score >=487693000 && score <502867000){
        lvl.innerHTML = "146"
    }
    else if(score >=502867000 && score <518458000){
        lvl.innerHTML = "147"
    }
    else if(score >=518458000 && score <534476000){
        lvl.innerHTML = "148"
    }
    else if(score >=534476000 && score <551000000){
        lvl.innerHTML = "149"
    }
    else if(score >=551000000 && score <567839000){
        lvl.innerHTML = "150"
    }
    else if(score >=567839000 && score <585206000){
        lvl.innerHTML = "151"
    }
    else if(score >=585206000 && score <603047000){
        lvl.innerHTML = "152"
    }
    else if(score >=603047000 && score <621374000){
        lvl.innerHTML = "153"
    }
    else if(score >=621374000 && score <640199000){
        lvl.innerHTML = "154"
    }
    else if(score >=640199000 && score <659536000){
        lvl.innerHTML = "155"
    }
    else if(score >=659536000 && score <679398000){
        lvl.innerHTML = "156"
    }
    else if(score >=679398000 && score <699798000){
        lvl.innerHTML = "157"
    }
    else if(score >=699798000 && score <720751000){
        lvl.innerHTML = "158"
    }
    else if(score >=720751000 && score <742272000){
        lvl.innerHTML = "159"
    }
    else if(score >=742272000 && score <764374000){
        lvl.innerHTML = "160"
    }
    else if(score >=764374000 && score <787074000){
        lvl.innerHTML = "161"
    }
    else if(score >=787074000 && score <810387000){
        lvl.innerHTML = "162"
    }
    else if(score >=810387000 && score <834329000){
        lvl.innerHTML = "163"
    }
    else if(score >=834329000 && score <858917000){
        lvl.innerHTML = "164"
    }
    else if(score >=858917000 && score <884167000){
        lvl.innerHTML = "165"
    }
    else if(score >=884167000 && score <910098000){
        lvl.innerHTML = "166"
    }
    else if(score >=910098000 && score <936727000){
        lvl.innerHTML = "167"
    }
    else if(score >=936727000 && score <964073000){
        lvl.innerHTML = "168"
    }
    else if(score >=964073000 && score <992154000){
        lvl.innerHTML = "169"
    }
    else if(score >=992154000 && score <1020991000){
        lvl.innerHTML = "170"
    }
    else if(score >=1020991000 && score <1050603000){
        lvl.innerHTML = "171"
    }
    else if(score >=1050603000 && score <1081010000){
        lvl.innerHTML = "172"
    }
    else if(score >=1081010000 && score <1112235000){
        lvl.innerHTML = "173"
    }
    else if(score >=1112235000 && score <1144298000){
        lvl.innerHTML = "174"
    }
    else if(score >=1144298000 && score <1177222000){
        lvl.innerHTML = "175"
    }
    else if(score >=1177222000 && score <1211030000){
        lvl.innerHTML = "176"
    }
    else if(score >=1211030000 && score <1245745000){
        lvl.innerHTML = "177"
    }
    else if(score >=1245745000 && score <1281393000){
        lvl.innerHTML = "178"
    }
    else if(score >=1281393000 && score <1317997000){
        lvl.innerHTML = "179"
    }
    else if(score >=1317997000 && score <1355584000){
        lvl.innerHTML = "180"
    }
    else if(score >=1355584000 && score <1404179000){
        lvl.innerHTML = "181"
    }
    else if(score >=1404179000 && score <1463811000){
        lvl.innerHTML = "182"
    }
    else if(score >=1463811000 && score <1534506000){
        lvl.innerHTML = "183"
    }
    else if(score >=1534506000 && score <1616294000){
        lvl.innerHTML = "184"
    }
    else if(score >=1616294000 && score <1709205000){
        lvl.innerHTML = "185"
    }
    else if(score >=1709205000 && score <1813267000){
        lvl.innerHTML = "186"
    }
    else if(score >=1813267000 && score <1928513000){
        lvl.innerHTML = "187"
    }
    else if(score >=1928513000 && score <2054975000){
        lvl.innerHTML = "188"
    }
    else if(score >=2192686000 && score <2341679000){
        lvl.innerHTML = "189"
    }
    else if(score >=2341679000 && score <2501990000){
        lvl.innerHTML = "190"
    }
    else if(score >=2501990000 && score <2673655000){
        lvl.innerHTML = "191"
    }
    else if(score >=2673655000 && score <2856710000){
        lvl.innerHTML = "192"
    }
    else if(score >=2856710000 && score <3051194000){
        lvl.innerHTML = "193"
    }
    else if(score >=3051194000 && score <3257146000){
        lvl.innerHTML = "194"
    }
    else if(score >=3257146000 && score <3474606000){
        lvl.innerHTML = "195"
    }
    else if(score >=3474606000 && score <3703616000){
        lvl.innerHTML = "196"
    }
    else if(score >=3703616000 && score <4431232000){
        lvl.innerHTML = "197"
    }
    else if(score >=4431232000 && score <5147981000){
        lvl.innerHTML = "198"
    }
    else if(score >=5147981000 && score <10295962000){
        lvl.innerHTML = "199"
    }
    else if(score >=10295962000){
        lvl.innerHTML = "200"
    }
    else{       
    }
  }
level()
       




