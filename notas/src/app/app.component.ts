import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  agregando = false;
  notas: any
  titulo: string = ''
  contenido: string = ''

  ngOnInit(){
    this.notas = []
    this.notas.push({"titulo": "Ejemplo", "contenido": "Esta es una nota"})
  }

  agregar(){
    this.agregando = !this.agregando;
  }
  agregarNota(){
    this.notas.push({"titulo": this.titulo, "contenido": this.contenido})
    this.agregando = false
    this.titulo =''
    this.contenido =''
  }
}

