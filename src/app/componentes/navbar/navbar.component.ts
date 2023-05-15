import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  redesList: any = [];
  nombre: string = '';
  url: string = '';
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getDatos().subscribe(data =>{
      console.log(data);
      this.redesList=data.redes;
      this.nombre = data.nombre;
      this.url = data.url;
      })
}

}
