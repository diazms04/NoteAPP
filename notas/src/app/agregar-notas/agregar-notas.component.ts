import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-notas',
  templateUrl: './agregar-notas.component.html',
  styleUrls: ['./agregar-notas.component.css']
})
export class AgregarNotasComponent {
  notas: any
  titulo: string = ''
  contenido: string = ''


  constructor(private router: Router, private http:HttpClient){
    this.notas = this.router.getCurrentNavigation()?.extras.state
  }

  ngOnInit(){
    
  }

  agregar(){
    this.router.navigate(['/lista'], {state: this.notas})
  }
  agregarNota(){
    var obj = {"titulo": this.titulo, "contenido": this.contenido}
    this.http.post("/notas", obj). subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/lista'])
    }
    )
    
  }
}
