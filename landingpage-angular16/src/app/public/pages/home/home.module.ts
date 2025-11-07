import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FotosComponent } from 'src/app/core/components/fotos/fotos.component';
import { HomeComponent } from 'src/app/core/components/home/home.component';
import { SectionSimpleComponent } from '../../../core/components/section-simple/section-simple.component';
import { UneteComponent } from 'src/app/core/components/unete/unete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventosComponent } from 'src/app/core/components/eventos/eventos.component';



@NgModule({
  declarations: [
    HomeComponent,
    FotosComponent,
    SectionSimpleComponent,
    UneteComponent,
    EventosComponent
  ],
  
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    

    
  ]
})
export class HomeModule { }
