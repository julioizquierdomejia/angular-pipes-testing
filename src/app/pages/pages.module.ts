import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilterOrdePipe } from '../filter-orde.pipe';
import { FormsModule } from '@angular/forms';
import { PipesTestingPipe } from '../pipes-testing.pipe';



@NgModule({
  declarations: [
    HomeComponent, FilterOrdePipe, PipesTestingPipe
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[
    HomeComponent, FilterOrdePipe, PipesTestingPipe
  ]
})
export class PagesModule { }
