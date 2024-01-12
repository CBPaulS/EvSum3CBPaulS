import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent {
  @Input() tituloo: string ="";//parametro de imagen que recibe una ruta
  @Input() image: string ="";//parametro de imagen que recibe una ruta
  @Input() description: string="";//parametro de descripción recibe un texto
  constructor() { }
}
