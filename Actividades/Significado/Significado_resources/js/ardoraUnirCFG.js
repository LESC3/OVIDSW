//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=2;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#C0C0C0"; colorButton="#FF0000"; colorText="#000000"; colorSele="#FFFFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U2lnbmlmaWNhZG8"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["U2lnbGFzIGVuIGluZ2xlcyBwYXJhIEhvamFzIGRlIGVzdGlsbyBlbiBjYXNjYWRh", "Q1NT"],["RXRpcXVldGEgcXVlIHBlcm1pdGUgZGVmaW5pciB1biBwaWUgZGUgcGFnaW5hIGVuIGh0bWw1", "Rm9vdGVy"],["RXRpcXVldGEgcXVlIGFwbGljYSB1biBzYWx0byBkZSBwYWdpbmE", "YnI"],["YXRyaWJ1dG8gcXVlIHBlcm1pdGUgZWxlZ2lyIGVsIGNvbG9yIGRlIGZvbmRvIGRlIHVuIG9iamV0bw", "YmFja2dyb3VuZC1jb2xvcg"],["YXRyaWJ1dG8gcXVlIHBlcm1pdGUgZGFybGUgdW4gdGFtYfFvIGRlIGxldHJhIGEgdW4gdGV4dG8", "dGV4dC1zaXpl"],["ZXRpcXVldGEgcXVlIGRlZmluZSB1biBkb2N1bWVudG8gaHRtbCBjb21vIGh0bWw1", "ZG9jdHlwZSBodG1s"],["YXRyaWJ1dG8gcXVlIHBlcm1pdGUgYWxpbmVhciB1biB0ZXh0bw", "dGV4dC1hbGlnbg"],["ZXRpcXVldGEgcXVlIHBlcm1pdGUgZGVmaW5pciBtZXRhLWRhdG9zIHkgY29kaWZpY2FjafNuIG5vIHZpc2libGUgYWwgdXN1YXJpbw", "aGVhZA"]];
var c=[[48,3],[54,6],[38,2],[58,16],[56,9],[48,12],[37,10],[76,4]];
var con1=["Siglas en ingles para Hojas de estilo en cascada","Etiqueta que permite definir un pie de pagina en html5","Etiqueta que aplica un salto de pagina","atributo que permite elegir el color de fondo de un objeto","atributo que permite darle un tamaño de letra a un texto","etiqueta que define un documento html como html5","atributo que permite alinear un texto","etiqueta que permite definir meta-datos y codificación no visible al usuario"];
var con2=["CSS","Footer","br","background-color","text-size","doctype html","text-align","head"];
var sel1=""; join1=[]; join2=[];
