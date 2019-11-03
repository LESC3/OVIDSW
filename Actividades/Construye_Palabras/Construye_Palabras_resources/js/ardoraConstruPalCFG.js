//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=2;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=7; scoreInc=1; scoreDec=2
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#004080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excelente !!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["PElNRz4","PEE+","V0lEVEg","SEVJR1RI","UFg","SFRNTDU","Q1NTMw"];var cp_ima=["","","","","","",""];var cp_mp3=["","","","","","",""];var cp_ogg=["","","","","","",""];var cp_que=["RXRpcXVldGEgcGFyYSBpbnNlcnRhciBpbWFnZW5lcyBlbiBIdG1sNS4","RXRpcXVldGEgcGFyYSBpbnNlcnRhciBoaXBlcnZpbmN1bG9zIGVuIEh0bWw1Lg","QXRyaWJ1dG8gcGFyYSBkZWZpbmlyIGxhIGFuY2h1cmEgZW4gQ1NTMw","QXRyaWJ1dG8gcGFyYSBkZWZpbmlyIGxhIGFsdHVyYSBlbiBDU1Mz","VW5vIGRlIGxvcyB0YW50b3MgYXRyaWJ1dG9zIGRlIGRpbWVuc2nzbi4","TGVuZ3VhamUgbWFyY2FkbyBxdWUgc2UgdXRpbGl6YSBwYXJhIGVsIGRlc2Fycm9sbG8gZGUgcGFnaW5hcyB3ZWIu","TGVuZ3VhamUgZGUgZGlzZfFvIGRlIHBhZ2luYXMgd2ViLg"];var cp_num=[5,3,5,6,2,5,4];
var wordsGame="Q29uc3RydXllX1BhbGFicmFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];
