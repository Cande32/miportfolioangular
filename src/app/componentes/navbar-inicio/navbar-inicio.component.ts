import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-navbar-inicio',
  templateUrl: './navbar-inicio.component.html',
  styleUrls: ['./navbar-inicio.component.css']
})
export class NavbarInicioComponent implements OnInit {
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
