import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

	actions: Array<NavbarActionItem> = [
		{link: "home", label: "Home"},
		{link: "maps-n-radar", label: "Maps & Radar"},
		{link: "severe-weather", label: "Severe Weather"},
		{link: "news-n-blog", label: "News & Blog"},
		{link: "sensor-network", label: "Sensor Network"}
	];

	constructor() { }

	ngOnInit(): void {
	}

}

interface NavbarActionItem{
	link: string;
	label: string;
}
