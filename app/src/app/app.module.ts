import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// API simulation
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammesComponent } from './components/programmes/programmes.component';
import { ProgrammeComponent } from './components/programme/programme.component';
import { ProgrammeService } from './services/programme.service';
import { GridProgrammeComponent } from './components/grid/gridProgramme.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammesComponent,
    ProgrammeComponent,
    GridProgrammeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [
    ProgrammeService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
