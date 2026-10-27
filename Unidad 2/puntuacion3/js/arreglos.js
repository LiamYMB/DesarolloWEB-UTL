var temperaturas=new Array(7);

function temperatura(){
    var suma=0;
    for(let i=0;i<7;i++){
        let valor = prompt("captura la temperatura del dia "+i+":");
        temperaturas[i]=parseFloat(valor);
        suma+=parseFloat(valor);
    }
    suma=suma/7;
    var mayor=Math.max(...temperaturas);
    var menor=Math.min(...temperaturas);
    document.getElementById("impTemp").innerHTML="el promedio de temperatura es: "+ suma +'<br>'+"la temperatura mas alta es: "+mayor+'<br>'+"la temperatura mas baja es: "+menor;


}

function sueldo(){
    
    arregloH=new Array(3);
    cadena='';

    for(let i=0;i<4;i++){
        arregloH[i]=new Array(3);
    }

    arregloH[0][0]=120
    arregloH[0][1]=240
    arregloH[0][2]=400
    arregloH[1][0]=240
    arregloH[1][1]=280
    arregloH[1][2]=600
    arregloH[2][0]=210
    arregloH[2][1]=300
    arregloH[2][2]=3000

    cadena+= "------------"+"   newbe- "+ "   Jr-   "+"   Sr-   "+'<br>';

    for(let i=0;i<3;i++){
        switch(i){
            case 0:
                cadena+="Diseñador--- ";
                break;
            case 1:
                cadena+="Programador ";
                break;
            case 2:
                cadena+="Lider-------- ";
                break
        }
        for(let j=0;j<3;j++){
            cadena+= arregloH[i][j] + " ";
        }
        cadena+='<br>';
    }
    document.getElementById("sueldo").innerHTML=cadena;

}

function preguntarS(){

    var puesto=prompt("Cual es el puesto:");
    var nivel=prompt("Cual es el nivel:");
    var horas=parseFloat(prompt("cuantas horas trabajo:"));
    var sueldo;

    switch(puesto){
        case "Diseñador":
            switch(nivel){
                case "newbe":
                    sueldo=120*horas;
                    break;
                case "Jr":
                    sueldo=240*horas;
                    break;
                case "Sr":
                    sueldo=210*horas;
                    break;
            }
            break;
        
        case "Programador":
            switch(nivel){
                case "newbe":
                    sueldo=240*horas;
                    break;
                case "Jr":
                    sueldo=280*horas;
                    break;
                case "Sr":
                    sueldo=300*horas;
                    break;
            }
            break;

        case "Lider":
            switch(nivel){
                case "newbe":
                    sueldo=400*horas;
                    break;
                case "Jr":
                    sueldo=600*horas;
                    break;
                case "Sr":
                    sueldo=3000*horas;
                    break;
            }
            break;
            
    }
    alert(sueldo);
    document.getElementById("sueldo2").innerHTML="el sueldo es de: "+ sueldo;
}

function ocho(){
    arreglos8=new Array(5);

    for(let i=0;i<5;i++){
        arreglos8[i]=new Array(5);
    }

    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            switch(i){
                case 1:
                    switch(j){
                        case 1:
                            arreglos8[i][j]="ㅤ";
                            break;
                        case 2:
                            arreglos8[i][j]="ㅤ";
                            break;
                        case 3:
                            arreglos8[i][j]="ㅤ";
                            break;
                        default:
                            arreglos8[i][j]="s";
                            break;

                    }
                    break;
                case 3:
                    switch(j){
                        case 1:
                            arreglos8[i][j]=" ㅤ";
                            break;
                        case 2:
                            arreglos8[i][j]="ㅤ";
                            break;
                        case 3:
                            arreglos8[i][j]="ㅤ";
                            break;
                        default:
                            arreglos8[i][j]="s";
                            break;

                    }
                    break;
                default:
                    arreglos8[i][j]="s .";
                    break;


            }
        }
    }

    var cadena2='';

    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            cadena2+= arreglos8[i][j] ;
        }
        cadena2+='<br>';
    }

    document.getElementById("ocho").innerHTML=cadena2;
}

var alumnos2=[10,6,7,5,3,7,10,8,6,10];
function alumnos(){

    var inicio=prompt("Desde donde quieres eliminar calificaciones:");
    var cantidad=prompt("Cuantos quieres eliminar:");

    alumnos2.splice(inicio,cantidad);

    leer_arreglo();



}

function leer_arreglo(){
    var cadena3='';

    for(let cal in alumnos2){
        cadena3+= alumnos2[cal] + ", ";

    }
    document.getElementById("califs").innerHTML=cadena3;
}

function quitar(){
    var cal=prompt("que calificacion quieres quitar:");
    
    for(let i in alumnos2){
        if (alumnos2[i]==cal){
            alumnos2[i]="";
        }
    }
}