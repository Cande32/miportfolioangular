import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-habilidades-inicio',
  templateUrl: './habilidades-inicio.component.html',
  styleUrls: ['./habilidades-inicio.component.css']
})
export class HabilidadesInicioComponent implements OnInit {
  habilidadesList: any;
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getDatos().subscribe(data => {
      console.log(data);
    this.habilidadesList = data.habilidades;
      })
}

}
