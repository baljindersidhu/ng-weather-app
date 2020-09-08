import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationSearchComponent } from './components/location-search/location-search.component';



@NgModule({
	declarations: [
		LocationSearchComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		LocationSearchComponent
	]
})
export class PlacesModule { }
