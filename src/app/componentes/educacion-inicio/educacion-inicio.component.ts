import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-educacion-inicio',
  templateUrl: './educacion-inicio.component.html',
  styleUrls: ['./educacion-inicio.component.css']
})
export class EducacionInicioComponent implements OnInit {
  estudiosList: any;
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getDatos().subscribe(data => {
      console.log(data);
    this.estudiosList = data.estudios;
      })
}

}
