import {data} from './data.js';
import startB from './moveCord.js';
import Gamer from './classes/Gamer.js';
import Way from './classes/Way.js';

let {rating,friends}=data;
let moveTo=0;
let walk=0;
let walkBool=false;
let moveStart=false;
let c=console.log;

//classes - классы
let g=new Gamer(rating,friends);
let w=new Way([],0);
//функция подключения к дом по class либо id
let $=ip=>document.querySelector(`.${ip}`) || document.querySelector(`#${ip}`);

//подключённые элементы с HTML
let td=$('td');//list игроков
let lb=$('left');//кнопка вправо
let rb=$('right');//кнопка влево
let closeRaiting=$('close');//кнопка закрывающая рейтинг
let raiting=$('raiting');//кнопка рейтинга
let fieldset=$('fieldset');
let dialog=$('dialog');//диалоговое окно 





////------------------------------------------------

let newG=g.r.sort((x,y)=>{
  return x.points-y.points;
});
newG=newG.reverse();

lb.addEventListener('click',()=>g.left());
rb.addEventListener('click',()=>g.right());

let raittoggle=(txt='open')=>{
  let dialog=$('dialog');
  let count=0;
  dialog.classList.toggle('nones');
  if(txt==='open'){
    let time=setInterval(()=>{
      if(count===530){
        clearInterval(time);
      }
      dialog.style.transform='translateY('+count+'px)';
      count+=10;
    },25);
  }
  if(txt!=='close'){
      td.innerHTML='';
      newG.forEach((it,ind)=>{
        td.innerHTML+=`
          <div class="gamers-rait" ${g.allFriends.includes(it.name + ' '+ it.lastName)?'style="background:blue;"':''}>
            <div class="ava">
              <h3>${ind+1}</h3>
              <img src="${it.img}" alt="${it.name + ' '+ it.lastName}" title="${it.name + ' '+ it.lastName}"/>
            </div>
            <div class="gr3-flex brd-r">
              <h3>${it.name + ' '+ it.lastName}</h3>
              <h3>${it.points}</h3>
            </div>
          </div>`;
      });
    }
}

//Закрывает рейтинг 
closeRaiting.addEventListener('click',()=>raittoggle('close'));

//Открывает рейтинг
raiting.addEventListener('click',()=>raittoggle());

//Старт игры и по шогам
$('goUniver').addEventListener('click',()=>{
  c('moveTo'+moveTo)
  if(moveTo!==50){
    w.xy=startB[moveTo].xy;
    w.btn=moveTo;
    $('xy').style=`transform: translate(${w.xy[0]}px,${w.xy[1]}px)`;
    c(w.xy+' && '+w.btn);
    c('walk => '+walk)
    c('start'+startB[moveTo].mWx[walk]);

    function rel(){
      let timesMove=setInterval(()=>{
        c('startsetTime')
        $('xy').style=`transform: translate(${startB[moveTo].mWx[walk]}px,${startB[moveTo].mWy[walk]}px)`;
        if(walk===startB[moveTo].mWx.length){
          //walkBool=!walkBool;
          c('walbool *))Y- '+ startB[moveTo].mWy[walk])
          $('xy').style=`transform: translate(${startB[moveTo].nearestXY[0]}px,${startB[moveTo].nearestXY[1]}px)`; 
          walk=0;
          c('end');
          moveTo+=1;
          clearInterval(timesMove);
        }else{
            c('walbool *))2Y- '+ startB[moveTo].mWy[walk])
            c('walbool=_+'+walkBool )
            //$('xy').style=`transform: translate(${startB[moveTo].nearestXY[0]}px,${startB[moveTo].nearestXY[1]}px)`; 
            walk+=1;
            c(2)
          }
      },140);
    }
    
    if(!walkBool){
      rel();
    }else{
      moveTo+=1;
      c('moveto=>'+moveTo)
    }
  }else{
    alert('Вы окончили универ!:))');
    moveTo=0;
    c('end event')
    walkBool=false;

  }
});