import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  message = "You're not logged in";
  id!:number;
  name:string="";
  status:string=""

  updateStatus(m:string){
    this.message = m;
  }

  update(id:number,name:string,status:string){
    this.id=id;
    this.name=name;
    this.status=status;
  }

  public getId():number{
    return this.id;
  }

  public getName():string{
    return this.name;
  }

  public getStatus():string{
    return this.status;
  }
}