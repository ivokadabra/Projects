import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';


import { interval } from 'rxjs';

@Component({
  selector: 'app-snaked',
  templateUrl: './snaked.component.html',
  styleUrls: ['./snaked.component.css']
})
export class SnakedComponent implements OnInit {
  

 
  public width:number=10;
  public score:number=0;
  public currentIndex:number=0;
  public appleIndex:number=0;
  public currentSnake:number[]=[2,1,0];
  public direction:number=1;
  public speed:number=0.9;
  public intervalTime:number=0;
  public interval:any;
  public tail!: number;
  public squares=document.querySelectorAll('.grid div');
  public startBtn=document.querySelector(".start");
  public loser:boolean=false;
  //public Page = document.getElementById('Body');
  

  constructor(public element:ElementRef) { 
    

  }

  ngOnInit(): void {

    
    //document.addEventListener('click',this.startGame);
    //document.addEventListener('keyup',this.control);

  }
 startGame(){
  // this.currentSnake.forEach(index=>this.squares[index].classList.remove('snake'))
   //this.squares[this.appleIndex].classList.remove('apple');
   this.score=0;
   this.direction=1;
   this.currentSnake=[2,1,0];
   this.currentIndex=0;
   this.intervalTime=1000;
   //this.squares=document.getElementsByClassName("grid");
   this.squares=document.querySelectorAll('.grid div');
   
   console.log(this.squares.length)
   //console.log(this.squares[1].classList.add('snake'))
   
   

   this.currentSnake.forEach(index=>this.squares[index].classList.add('snake'))
   this.squares[this.currentSnake[0]].classList.add('snake')
  
   //this.moveOutcomes(this.currentIndex);
   this.interval=setInterval(()=>this.moveOutcomes(this.currentIndex,this.currentSnake,this.width,this.direction,
    this.interval,this.squares,this.score,this.intervalTime),this.intervalTime);

  }
  
  
  control(e:any):void{
    this.squares[this.currentIndex].classList.remove('snake');
    if(e.keyCode===39){
      this.direction=1;
   }
   else if(e.keyCode===38){
     this.direction=-this.width;
  }else if(e.keyCode===37){
    this.direction=-1;
  }else if(e.keyCode===40){
    this.direction=+this.width;
  }
  
}


moveOutcomes(currentIndex:number,currentSnake:number[],width:number,direction:number,
  interval:number,squares:NodeListOf<Element>,score:number,intervalTime:number){

 
  console.log("Width:"+this.width)
  console.log("Current Snake Head"+this.currentSnake[0])
  console.log("Current Snake Tail"+this.currentSnake[this.tail])
  console.log("Direction"+this.direction)
  console.log("Module:" +this.currentSnake[0] % this.width)

let module1=this.currentSnake[this.tail] %this.width;

if(this.currentSnake[0] % this.width==this.width-1 || 
  this.currentSnake[0] % this.width==0||
  this.currentSnake[0] % this.width==this.currentSnake[1] % this.width && this.currentSnake[0]== this.currentSnake[0] % this.width ||
  this.currentSnake[0] % this.width==this.currentSnake[1] % this.width
   && this.currentSnake[0]== (this.currentSnake[0] % this.width)+90 || this.currentSnake[0]==this.currentSnake[this.currentSnake.length-1]) {
    this.loser=true;
    return clearInterval(this.interval)

  }
this.tail=Number(this.currentSnake.pop())

this.squares[this.tail].classList.remove('snake')
this.currentSnake.unshift(this.currentSnake[0]+this.direction)

if(this.squares[this.currentSnake[0]].classList.contains('apple')){
  this.squares[this.currentSnake[0]].classList.remove('apple');
  this.squares[this.tail].classList.add('snake');
  this.currentSnake.push(this.tail);
  this.randomApple()
  this.score++;
  clearInterval(this.interval)
  this.intervalTime*=this.speed;
  this.squares[this.currentSnake[0]].classList.add('snake');
  this.interval=setInterval(()=>this.moveOutcomes(this.currentIndex,this.currentSnake,this.width,this.direction,
    this.interval,this.squares,this.score,this.intervalTime),this.intervalTime);

}
   
squares[currentSnake[0]].classList.add('snake')
}
 randomApple(){
   do{
    this.appleIndex=Math.floor(Math.random() * this.width)
   }while(this.squares[this.appleIndex].classList.contains('snake'))
    this.squares[this.appleIndex].classList.add('apple')
  }

   zoomIn()
  {
      //var Page = document.getElementById('Body');
      var Page = document.getElementById('Body');
      var zoom = parseInt(Page!.style.zoom) + 10 +'%'
      Page!.style.zoom = zoom;
      return false;
  }
   
   zoomOut()
  {
    var Page = document.getElementById('Body');
    var zoom = parseInt(Page!.style.zoom) - 10 +'%'
    Page!.style.zoom = zoom;
    return false;
  }

}


