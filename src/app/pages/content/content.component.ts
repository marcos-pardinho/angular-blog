import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    photoCover:string = "https://st2.depositphotos.com/1194063/7304/i/450/depositphotos_73049901-stock-photo-grill.jpg"
    contentTitle:string = "Minhas Notícias"
    contentDescription: string = "Mais informações em breve ...."

    constructor(
      private route:ActivatedRoute
    ){ }

    ngOnInit(): void {
        this.route.paramMap.subscribe( value => 
          console.log(value.get("id"))
          )
    }
}
