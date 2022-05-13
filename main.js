//var karta=["foto5.jpg", "foto1.jpg", "foto2.jpg", "foto4.jpg", "foto3.png", "foto6.jpg", "foto5.jpg", "foto1.jpg", "foto2.jpg", "foto4.jpg", "foto3.png", "foto6.jpg"];
var karta=[];
var numery=[1,2,3,4,5,6,1,2,3,4,5,6];
while (karta.length<=12){
    var numer=Math.floor(Math.random()*numery.length);
    karta.push("foto"+numery[numer]+".jpg");
    numery.splice(numer, 1);
}
var pierwszaWidoczna=false;
var nrKarty;
var licznik=0;
var blokada = false;
var koniec = 6;

function odkryj(nr){
    var opacityValue = $("#c"+nr).css('opacity');
    if(opacityValue !=0 && blokada==false){
        blokada=true;
    var obraz= "url(" + karta[nr] + ")";
    $("#c"+nr).css("background-image", obraz);

if (pierwszaWidoczna==false){
//pierwsza karta
pierwszaWidoczna=true;
nrKarty=nr;
blokada = false;

}
else{
    //druga karta
            if(karta[nrKarty]==karta[nr]){
                //alert("para");
            setTimeout(function(){para(nr, nrKarty)},250);
            }
            else{
                //alert("pudło");
            setTimeout(function(){pudlo(nr, nrKarty)},800);
            }
    pierwszaWidoczna=false;
    licznik++;
    $("#score").html("Liczba kliknięć: "+ licznik);
}
}
}
function para(nr1, nr2){
    if(nr1!=nr2){
        $("#c"+nr1).css('opacity',0);
        $("#c"+nr2).css('opacity',0);
        koniec--;
        if(koniec==0){
         $("#board").html("<h1> Wygrałeś w <br>" + licznik + " rundach </h1>");
        }
    }
    else{
        $("#c"+nr1).css("background-image","url(karta.jpg)");
    }
    blokada = false;
}
function pudlo(nr1, nr2){
    $("#c"+nr1).css("background-image","url(karta.jpg)");
    $("#c"+nr2).css("background-image","url(karta.jpg)");
    blokada = false;
}

