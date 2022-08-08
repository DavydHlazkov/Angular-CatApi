import { Component, Input } from '@angular/core';
import { ICat } from 'src/app/models/cat';


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent  {
  @Input("cat") cat:ICat

}
