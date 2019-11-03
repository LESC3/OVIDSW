//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=2;
var successes=0; successesMax=8; attempts=0; attemptsMax=2;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excelente !!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UHJlZ3VudGFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Selecciona en html5 el elemento en el cual incluirias un link de la navegación primaria de un sitio:","¿Que propiedad utilizamos para definir el tipo de fuente?","¿Como definimos un comentario?","¿Que significa CSS?","¿Que propiedad utilizamos para definir color en los bordes?","¿Cual es la sintaxis correcta en CSS3?<br>","¿Que propiedad utilizamos para definir el color de fondo en CSS?","¿Que propiedad utilizamos para definir imagen de fondo ?"];
var answers1=["MW5hdg","MG1lbnU","MHNlY3Rpb24","MGhlYWRlcg"];
var answers2=["MWZvbnQtZmFtaWx5","MGZvbnQtc3R5bGU","MGZvbnQtdHlwZQ","MGZvbnQtdmFyaWFudA"];
var answers3=["MS8qQ29tZW50YXJpbyov","MC8vQ29tZW50YXJpby8v","MC8tLUNvbWVudGFyaW8tLS8","MC8tQ29tZW50YXJpby0v"];
var answers4=["MUNhc2NhZGluZyBTdHlsZSBTaGVldHM","MENhc2NhZGluZyBTdHlsZSBTeXN0ZW0","MENsYXNzIFN0eWxlIFNoZWV0cw","MENyZWF0aXZlIFN0eWxlIFN5c3RlbQ"];
var answers5=["MWJvcmRlci1jb2xvcg","MGJvcmRlci1iZ2NvbG9y","MGNvbG9yLWJvcmRlcg","MGJvcmRlci1zdHlsZQ"];
var answers6=["MXB7Y29sb3I6cmVkO30","MHtwIGNvbG9yPXJlZH0","MHtwPWNvbG9yOnJlZH0","MHB7Y29sb3I6cmVkfQ"];
var answers7=["MWJhY2tncm91bmQtY29sb3I","MHN0eWxlLWNvbG9yOg","MGNvbG9y","MGJnY29sb3I"];
var answers8=["MU5pbmd1bmEgZGUgbGFzIGFudGVyaW9yZXM","MGJhY2tncm91bmQtYXR0YWNobWVudDo","MGJhY2tncm91bmQtc3Jj","MGJhY2tncm91bmQtaW1nOg"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8];
var err=["Incorrecto !!","Incorrecto !!","Incorrecto !!","Incorrecto !!","Incorrecto !!","Incorrecto !!","Incorrecto !!","Incorrecto !!"];
var ima=["","","","","","","",""];
var mp4=["","","","","","","",""];
var ogv=["","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Preguntas_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
