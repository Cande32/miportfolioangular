import { Component, OnInit} from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  habilidadesList: any;
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getDatos().subscribe(data => {
      console.log(data);
    this.habilidadesList = data.habilidades;
      })
}

}
