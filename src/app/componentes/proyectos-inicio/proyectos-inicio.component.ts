import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-proyectos-inicio',
  templateUrl: './proyectos-inicio.component.html',
  styleUrls: ['./proyectos-inicio.component.css']
})
export class ProyectosInicioComponent implements OnInit {
  proyectosList: any;
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getDatos().subscribe(data =>{
      console.log(data);
    this.proyectosList = data.proyectos;
      })
}

}
