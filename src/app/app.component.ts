import { Component, OnInit,  ChangeDetectorRef, Input, DoCheck, ChangeDetectionStrategy} from '@angular/core';
import { CatService } from './services/cat.service';
import { ICat } from './models/cat';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'cat-api-project';
  cats: ICat[] = []
  quantityControl:FormControl
  quantityImg:number
  x:number = 10
  catsBreeds:any[] 
  allBreeds:any[] =[]
  isBreeds:boolean = false
  term = ''
  
  constructor( private catsSevice: CatService, private cdr:ChangeDetectorRef){

  }

  quantityForm = new FormGroup ({
    title: new FormControl<number|any>('')
  })
  
  ngOnInit():void{
      let quantityImg = 10
      this.catsSevice.getAll(quantityImg).subscribe((cats)=>{
      this.cats = cats
     })    
     this.catsSevice.getAllBreeds(100).subscribe((catsBreeds)=>{
      this.catsBreeds = catsBreeds
      for(let i =0; i<this.catsBreeds.length; i++){
        this.allBreeds.push(this.catsBreeds[i].breeds[0].name)
         }
     })
  }

  submitQuantity():any{
    let x:any
    this.quantityForm.value.title < 1 ? x =10 :x = this.quantityForm.value.title 
    && this.quantityForm.value.title > 100 ? x =10 :x = this.quantityForm.value.title
    return this.x = x
  }

  loadAll(){
    return this.x = 100
  }

  seeBreeds(){
    return this.isBreeds = !this.isBreeds 
  }

  ngDoCheck():void{
        if(this.cats.length !== this.x)
       this.catsSevice.getAll(this.x).subscribe((cats)=>{
             this.cats = cats
         })    
  }
  
}
