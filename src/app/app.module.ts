import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './modules/user/user.module';
import { PlacesModule } from './modules/places/places.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		UserModule,
		PlacesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
