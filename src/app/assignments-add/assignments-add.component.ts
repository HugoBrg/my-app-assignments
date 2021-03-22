import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AssignmentsListComponent } from '../assignments-list/assignments-list.component';
import { Assignment } from '../assignments';
import { Francais } from '../francais-image';
import { Math } from '../math-image';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignments-add',
  templateUrl: './assignments-add.component.html',
  styleUrls: ['./assignments-add.component.css']
})

export class AssignmentsAddComponent implements OnInit {
  etat = new FormControl('');
  etatF = new FormControl('');
  etatM = new FormControl('');
  etatMB = false;
  etatFB = false;
  remarque = new FormControl('');
  message =  "";

  constructor(
    private liste: AssignmentsListComponent, 
    private app:AppComponent,
    private router:Router) { }

  ngOnInit(): void {
    this.etatF.valueChanges.subscribe(selectedValue => {
      if(selectedValue == true){
        this.etatMB = false;
        this.etatFB = true;
      }
    })

    this.etatM.valueChanges.subscribe(selectedValue => {
      if(selectedValue == true){
        this.etatFB = false;
        this.etatMB = true;
      }
    })
   }

  submit() :void{
    if(this.etatF.value == true || this.etatM.value == true){
      var assignment: Assignment = {id:this.liste.getLength()+1,auteurid:this.app.getId(),auteur:this.app.getName(),matiere:"",image:"",etat:this.etat.value,note:0,remarque:this.remarque.value,prof:""};
      if(this.etatF.value==true){
        assignment.matiere="Français";
        assignment.image=Francais.Image;
        assignment.prof=Francais.Prof
      }else if (this.etatM.value == true){
        assignment.matiere="Mathématiques"
        assignment.image=Math.Image;
        assignment.prof=Math.Prof
      }
      this.liste.updateAssignments(assignment);
      this.router.navigate(['/assignments-list', { id: this.app.getId() }]);
    }else{
      console.log("stepper invalide")
      this.message = "Il faut selectionner une matière !";
    }
  }
}
