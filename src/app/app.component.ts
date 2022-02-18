import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public seatsAngular=['SA-001','SA-002','SA-003']

  public seatsJava=['JA-001','JA-002','JA-003']

public seatsPython=['PY-001','PY-002','PY-003']

public seatsReact=['RA-001','RA-002','RA-003']
  constructor() {}
  ngOnInit(): void {
   
  }

  dropItem(event:CdkDragDrop<any>){

    let previousContainer=event.previousContainer.element.nativeElement;
    let toContainer=event.container.element.nativeElement;


    alert("From => " +previousContainer.getElementsByTagName('h1')[0].innerText + " To => " + toContainer.getElementsByTagName('h1')[0].innerText);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}


