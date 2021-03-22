import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Assignment } from '../assignments';
import { ASSIGNMENTS } from '../assignments-data';

@Component({
  selector: 'app-assignments-list',
  templateUrl: './assignments-list.component.html',
  styleUrls: ['./assignments-list.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class AssignmentsListComponent implements OnInit {
  public id!:number;
  assignmentsNonRendu:any = [];
  assignmentsRendu:any = [];
  etat = new FormControl('')
  note = new FormControl('')
  selectedAssignment!: Assignment;

  constructor(private router: Router, private app: AppComponent){  
    for (var _i = 0; _i < ASSIGNMENTS.length; _i++) {
      if(this.app.getStatus()=="admin"){
        if(ASSIGNMENTS[_i].etat==true){
          this.assignmentsRendu.push(ASSIGNMENTS[_i])
        }
        else{
          this.assignmentsNonRendu.push(ASSIGNMENTS[_i])
        }
      }
      else{
        this.note.disable;
        if(ASSIGNMENTS[_i].auteurid==this.app.getId()){
          if(ASSIGNMENTS[_i].etat==true){
            this.assignmentsRendu.push(ASSIGNMENTS[_i])
          }
          else{
            this.assignmentsNonRendu.push(ASSIGNMENTS[_i])
          }
        }
      }
    } 
  }

  ngOnInit(): void {
    this.etat.valueChanges.subscribe(selectedValue => {
      if (selectedValue == true && this.selectedAssignment.etat == false){
        this.selectedAssignment.etat = true
        this.assignmentsRendu.push(this.selectedAssignment)
        this.assignmentsNonRendu.splice(this.assignmentsNonRendu.indexOf(this.selectedAssignment),1)
      }
      else if (selectedValue == false && this.selectedAssignment.etat == true){
        this.selectedAssignment.etat = false
        this.selectedAssignment.note = 0
        this.assignmentsNonRendu.push(this.selectedAssignment)
        this.assignmentsRendu.splice(this.assignmentsRendu.indexOf(this.selectedAssignment),1)
      }
    })
    
    this.note.valueChanges.subscribe(value => {
      if(value>0 && this.selectedAssignment.etat==false){
        this.selectedAssignment.etat = true
        this.assignmentsRendu.push(this.selectedAssignment)
        this.assignmentsNonRendu.splice(this.assignmentsNonRendu.indexOf(this.selectedAssignment),1)
      }
    })
  }

  onSelect(assignment: Assignment): void {
    this.selectedAssignment = assignment;
  }

  add(): void{
    console.log("add")
    this.router.navigate(['/assignments-add', { id: this.app.getId() }]);
  }

  public getLength(){
    return ASSIGNMENTS.length;
  }

  public updateAssignments(assignment : Assignment){
    console.log(assignment)
    ASSIGNMENTS.push(assignment)
  }
}
