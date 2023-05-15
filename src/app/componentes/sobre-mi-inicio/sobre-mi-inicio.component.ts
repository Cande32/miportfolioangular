import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-sobre-mi-inicio',
  templateUrl: './sobre-mi-inicio.component.html',
  styleUrls: ['./sobre-mi-inicio.component.css']
})
export class SobreMiInicioComponent implements OnInit{
  nombre: string = '';
  titulo: string = '';
  banner: string = '';
  imgPerfil: string = '';
  sobremi: string = '';

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getDatos().subscribe(data =>{
      console.log(data);
    this.nombre = data.nombre;
    this.titulo = data.titulo;
    this.banner = data.banner;
    this.imgPerfil = data.imgPerfil;
    this.sobremi = data.sobremi;
      })
}

}
