import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyectosList: any;
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getDatos().subscribe(data =>{
      console.log(data);
    this.proyectosList = data.proyectos;
      })
}
}


