class Way{
  #finishCord=51;//51
  #set=new Set();
  xy=[];
  btn=0;
  #refresh=[431,437];
  
  constructor(xy,btn){
    this.xy=xy;
    this.#set.add(btn);
    this.btn=btn;
  }

  get xy(){ return this._xy; }
  set xy(xy){ this._xy=xy; }

  get btn(){ return this._btn; }
  set btn(btn){ this._btn=btn; }

  refreshGames(){
    this.xy=[];
    this.btn=0;
  }
  del(){
    let {btn}=this;
    this.#set.delete(btn);
  }
}
export default Way;