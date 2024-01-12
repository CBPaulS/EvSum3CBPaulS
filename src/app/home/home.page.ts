import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  noticias = [
    {
      tituloo: "Cristiano!",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/220px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
      description: "Todo un bicho mi pana el bicho."
    },
    {
      tituloo: "Goku 40",
      image: "https://i.pinimg.com/564x/69/db/be/69dbbea3c939718e2559d4a9a48778ae.jpg",
      description: "Toda una bestia parda mi pana el Goku."
    },
    {
      tituloo: "Alcapone",
      image: "https://www.biografiasyvidas.com/biografia/c/fotos/capone.jpg",
      description: "Todo un empresario el pana Al Capone."
    }
  ];

  // Declara una propiedad 'noticia' en la clase HomePage
  noticia: any;

  constructor() {
    // Inicializa 'noticia' con el primer elemento del array 'noticias'
    this.noticia = this.noticias[0];
  }
}
