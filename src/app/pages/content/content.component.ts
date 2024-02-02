import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    photoCover:string = "https://st2.depositphotos.com/1194063/7304/i/450/depositphotos_73049901-stock-photo-grill.jpg"
    contentTitle:string = "Minhas Notícias"
    contentDescription: string = "Mais informações em breve ...."

    constructor(){ }

    ngOnInit(): void {
        
    }
}
