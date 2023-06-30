import { Component } from '@angular/core';
import { IAppContador, definir, incrementa, reduz } from './store/app.state';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';

  constructor(private store: Store<{app: IAppContador}>){}
  
  contador$ = this.store.select('app').pipe(map( e => e.contador));

  incrementar(){
    this.store.dispatch(incrementa())
  }
  reduzir(){
    this.store.dispatch(reduz())
  }

  definir(valor:string){
    const valorTratado = parseFloat(valor)
    this.store.dispatch(definir({payload: valorTratado}))
  }

}
