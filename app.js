const btnTops=document.querySelectorAll('.btnTOP') 
const btnButoms=document.querySelectorAll('.btnBOTOM')
const btn=document.querySelectorAll('.btns')
const cuadros=document.querySelectorAll('.span')
const melodia=document.getElementById('tono')
const btnAgregar = document.getElementById('btnAgregar')
const btnEmpezar = document.getElementById('btnEmpezar')
const displayHistorial=document.getElementById('historial')
const asunto=document.getElementById('asunto')
const musica=document.getElementById('musica')
const horP=document.getElementById('hora')
const body=document.querySelector('body')
const tuturial=document.getElementById('tuturial')


asunto.value='';




let [btnTHora,btnTMinuto,btnTAP]=btnTops;
let [btnBHora,btnBMinuto,btnBAP]=btnButoms;
let[btnTop,btnButom]=btn;
const[hora,minutos,amPM]=cuadros


let horaDisplay=0;
let minutoDisplay=0;
let amPm='pm'
let tono=''
let verificador=false;
let numero=0 

  
setInterval(()=>{

 +function(){  
        let fecha= new Date(),
             year=fecha.getFullYear(),
             month=fecha.getMonth(),
             day=fecha.getDay(),
              fechaActual=fecha.getDate(), // 30
             hour=fecha.getHours(),
             minutes=fecha.getMinutes(),
             seconds=fecha.getSeconds(),
             h=''
             pm='';
    
    
             if (hour>=12) {
                pm='pm' 
                  h=hour-12
                  if (h==0) {
                      h=12
                  }
               /* body.style.backgroundImage="url('img/atardecer1.jpg')"  */
             }else if(hour<12){
                h=hour
                 pm='am'
                
             }
             if (minutes<10) {
                minutes='0'+minutes 
             }
             if (seconds<10) {
                seconds='0'+seconds 
             }    
             
             
    
         let  meses=['Enero' ,'Febrero ','Marzo ','Abril ','Mayo ','Junio' ,'Julio','Agosto' ,'Seteimbre','Octubre' ,'Noviembre' ,'Diciembre'];
         let diasSemana=[ 'Domingo', 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']   
        
         
      horP.innerHTML=`<p>${diasSemana[day]} ${fechaActual} de ${meses[month]}  del  ${year} </p> <p class='reloj'> ${h}:${minutes}:${seconds}  ${pm}  </p>  ` ;
                                 

 }();                                

},1000)
  
 

class alarma {
    constructor(asunto,hora,minutos,AMPM,musica){
        this.asunto=asunto,
        this.hora=hora,
        this.minutos=minutos,
        this.td=AMPM,
        this.musica=musica
        
    }
    id(){
        let fecha= new Date(),
        fechaActual= fecha.toDateString(),
        hour=fecha.getHours(),
        M=parseInt(this.minutos),
        h=parseInt(this.hora)
        if (this.td=='am') {
            h=h    
        } else if(this.td=='pm'){
            h=h+12

            if (h==24) {
                h=12 
            }
        }            
     
        
    
     let id= new Date(`${fechaActual} ${h}:${M}:${0}${0}`).getTime();

     return id
    }
    pintar(){
       return `<div class="card"><p><img  class="imgalarma"src="img/bell-regular.svg" alt="">${this.hora}:${this.minutos} ${this.td} <p id="melodia1"> ${this.asunto} </p> <p><img class="imgalarma"  src="img/clock-regular.svg" alt=""><span  id="${this.id()}"class="a">00:00:00<span> </p>  <p id="melodia2"> <img class="imgalarma" src="img/music-solid.svg" alt="">${this.musica} </p>  </div>`     
                  
     }
   pAlarma(){
        let fecha= new Date(),   
        hour=fecha.getHours(),
        minutes=fecha.getMinutes(),
        seconds=fecha.getSeconds(),
        h='',
        pm='am'
        
        if (hour>=12) {
            h=hour-12
            pm='pm' 
        }else{
            h=hour
        }
        if(h==0){
            h=12;
        }
        if (seconds<10) {
            seconds='0'+seconds;
        }
    
    if((h==this.hora)&&(minutes==this.minutos)&&(pm==this.td)){
        verificador=true
        musica.currentTime=0
        return  musica.play();
        }
        
    }
}



btnTHora.addEventListener('click',e=>{     
   if (horaDisplay>=12) {
    horaDisplay=0
   }
    horaDisplay++
    hora.textContent=horaDisplay;
  })

btnTMinuto.addEventListener('click',e=>{
       minutoDisplay++
   if (minutoDisplay>=59) {minutoDisplay=0 }
   if(minutoDisplay<10){ minutoDisplay='0'+minutoDisplay   }     
    minutos.textContent=minutoDisplay;  
})      
     
btnTAP.addEventListener('click',e=>{
    amPm='am'
    amPM.textContent=amPm
}) 
 
btnBHora.addEventListener('click',e=>{

    if (horaDisplay<=1){horaDisplay=13; }    
    horaDisplay--    
    hora.textContent=horaDisplay;  

})

btnBMinuto.addEventListener('click',e=>{
    minutoDisplay--
    if (minutoDisplay<0) {minutoDisplay=59 }
    if(minutoDisplay<10){ minutoDisplay='0'+minutoDisplay   } 

    minutos.textContent=minutoDisplay;
})  

btnBAP.addEventListener('click',e=>{
    amPm='pm'
    amPM.textContent=amPm
})

btnTop.addEventListener('click',e=>{
   tono='Motivador'
   melodia.textContent=tono;

})
btnButom.addEventListener('click',e=>{
    console.log('abajo')
    tono='Estricto'
    melodia.textContent=tono; 
 });



btnAgregar.addEventListener('click',e=>{
    tuturial.style.display='none';

  numero++  
 const alarma1= new alarma(asunto.value,hora.textContent,minutos.textContent,amPM.textContent,melodia.textContent)  
 displayHistorial.innerHTML+= alarma1.pintar();
 asunto.value=''; 
  let interval=setInterval(()=>{  
   
     alarma1.pAlarma();
   

     if (verificador==true) {
         clearInterval(interval)
         verificador=false;
     }
      
 },1000)



 
 
});

btnEmpezar.addEventListener('click',cronometro)

function cronometro(e){
 let interval1=setInterval(()=>{
 const cards=document.querySelectorAll('.a') 
 const cardsArray=[].slice.call(cards);
 let suma=cardsArray.reduce((acc,elemento)=>acc+parseInt(elemento.id),0)

 for(let i=0;i<cardsArray.length;i++){    
     let conteo=()=>{ 
         if(cardsArray[i].textContent!=='00:00:00'){
              let milisegundos=parseInt(cardsArray[i].id)
      
            let horaActual=new Date();  
         let tiempolimite=milisegundos - horaActual;
      
         let horas=('0'+Math.floor(tiempolimite%(1000*60*60*24)/(1000*60*60))).slice(-2);
         let minutos=('0'+Math.floor(tiempolimite%(1000*60*60)/(1000*60))).slice(-2);
         let segundos=('0'+Math.floor(tiempolimite%(1000*60)/(1000))).slice(-2);   
               
        return cardsArray[i].textContent=`${horas}:${minutos}:${segundos}`  
         } else{
             cardsArray[i].id=0
             
           cardsArray[i].textContent=`00:00:00`;
           cardsArray[i].parentNode.parentNode.style.backgroundColor='red'
          
            
         } 
             
      }
      conteo();
 }
 if(suma==0)clearInterval(interval1)

 },1000)   

}




