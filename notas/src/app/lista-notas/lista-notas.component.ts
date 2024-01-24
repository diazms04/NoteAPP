import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent {
  notas: any;


  constructor(private router: Router, private http:HttpClient){
    this.notas = this.router.getCurrentNavigation()?.extras.state
  }

  ngOnInit(){
    this.http.get("/notas").subscribe((data)=>{
      this.notas = data;
    })
    // if(this.notas == undefined){
    //   this.notas=[]
    // }
  }

  agregar(){
    this.router.navigate(['/agregar'], {state: this.notas})
  }

  borrar(notaId: string){
    this.http.delete("/notas/"+ notaId).subscribe((data)=>
    {
      console.log(data)
      this.ngOnInit()
    })
    
  }
}
