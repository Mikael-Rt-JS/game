class Gamer{
  r=[];
  f=[];
  allFriends=[];
  fCopyOut=[];
  rig=0;
  lef=7;
  rightBoolStop=true;
  constructor(r,f){
    let fr=document.querySelector('.fr');
    this.r=r;
    this.f=f;
    this.fCopyOut=this.f.slice(this.rig,this.lef);
    this.countfriend(this.fCopyOut,fr);
    for(let i=0;i<f.length;i++){
      this.allFriends[i]=f[i].name+' '+f[i].lastName;
    }
      
  }
  
  countfriend(arr,fr){
    if(!this.fCopyOut.length || !arr){
      for(let i=0;i!==6-this.fCopyOut.length;i++){
        if(i===0){
          fr.innerHTML+=`<div class="fr-col crs_point"><img src="./male.png" alt="Добавить друга!" title="Добавить друга!"/></div>`;
          this.haveNotFriend(fr);
        }else{
           this.nullFriend(fr);
        }
      }
    }else{
      this.fCopyOut.forEach((it,ind)=>{
        if(ind===0){
          fr.innerHTML+=`<div class="fr-col crs_point"><img src="./male.png" alt="Добавить друга!" title="Добавить друга!"/>
          </div>`;
        }
        if(this.fCopyOut.length<8 && ind===this.fCopyOut.length-1){
          this.rend(fr,it);
          if(this.fCopyOut.length<=7){
            for(let i=0;i!==7-this.fCopyOut.length;i++){
              this.haveNotFriend(fr);
            }
          }
        }else if(ind===0){
          this.rend(fr,it);
        }else{
          this.rend(fr,it);
        }
      })
    }//---
  }
  rend(fr,it){
    fr.innerHTML+=`<div class="fr-col crs_point"><img src="${it.img}" alt="${it.name}" title="${it.name}"/></div>`;
  }
  nullFriend(fr){
    fr.innerHTML+=`<div class="fr-col crs_point"><img class="top" src="./img/haventf.png" alt="Здесь нету друга"/></div>`;
  }
  haveNotFriend(fr){
    fr.innerHTML+=`<div class="fr-col crs_point"><img class="top" src="./img/haventf.png" alt="Здесь нету друга"/></div>`;
  }
  left(){
    let fr=document.querySelector('.fr');
    if(this.fCopyOut.length<=7 && (this.rig-1)>=0){
      console.log("Плачу р0о!1");
      fr.innerHTML="";
      this.lef--;
      this.rig--;
      this.fCopyOut=this.f.slice(this.rig,this.lef);
      this.countfriend(this.fCopyOut,fr);
      this.rightBoolStop=true;
    }else{
      alert("Плачу р0о!Мало друзей не могу идти на лево!");
    }
  }
  right(){
    let fr=document.querySelector('.fr');
    if(this.f.length>7 && (this.rig!==0 || this.rig===0)){
      if(this.lef===this.f.length){
        fr.innerHTML="";
        this.lef++;
        this.rig++;
        this.fCopyOut=this.f.slice(this.rig,this.lef);
        this.countfriend(this.fCopyOut,fr);
        this.rightBoolStop=!this.rightBoolStop;
      }else if(this.rightBoolStop){
        fr.innerHTML="";
        this.lef++;
        this.rig++;
        this.fCopyOut=this.f.slice(this.rig,this.lef);
        this.countfriend(this.fCopyOut,fr);
      }
    }else{
      alert("Плачу р0о!Мало друзей не могу идти на право!");
    }
  }
}
export default Gamer;