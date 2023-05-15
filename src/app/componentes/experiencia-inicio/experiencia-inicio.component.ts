import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-experiencia-inicio',
  templateUrl: './experiencia-inicio.component.html',
  styleUrls: ['./experiencia-inicio.component.css']
})

export class ExperienciaInicioComponent implements OnInit{
  experienciasList: any;
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getDatos().subscribe(data =>{
      console.log(data);
    this.experienciasList = data.experiencias;
      })
}
}


