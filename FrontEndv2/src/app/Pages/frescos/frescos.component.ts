import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frescos',
  templateUrl: './frescos.component.html',
  styleUrls: ['./frescos.component.css']
})
export class FrescosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('tipo_producto', "frescos");
    localStorage.setItem('titulo','productos frescos');  
  }

}
