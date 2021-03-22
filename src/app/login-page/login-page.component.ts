import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

@Injectable({
  providedIn: 'root'
})


export class LoginPageComponent implements OnInit {
  login = new FormControl('');
  pass= new FormControl('');
  public id!: number;

  constructor(
    private app:AppComponent,
    private loginService: LoginService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void { }

  signIn(){
    const params = new HttpParams()
    .set('login', this.login.value)
    .set('pass', this.pass.value);
    this.loginService.getLogin(params).then(response=>{
      let jsonObject = response as any;
      var outputArray = [];  
      for (let element in jsonObject) {  
          outputArray.push({  
              id: element,  
              name: jsonObject[element]  
          });  
      }  
      if(jsonObject[0] == true){
        this.app.updateStatus("You're now logged in as : "+jsonObject[2]+" #"+jsonObject[1]+" ("+jsonObject[4]+")")
        this.router.navigate(['/assignments-list', { id: jsonObject[1] }]);
        this.id=jsonObject[1];
        this.app.update(jsonObject[1],jsonObject[2],jsonObject[4]);
      }
      else {
        this.app.updateStatus("Wrong login and/or password")
      }
    })
  }
}