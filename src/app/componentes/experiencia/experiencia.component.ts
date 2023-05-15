import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  experienciasList: any;
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getDatos().subscribe(data =>{
      console.log(data);
    this.experienciasList = data.experiencias;
      })
}
}

