import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { listResidences } from '../resdence-list';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit{

   LISTRESIDENCES : Residence[] ;

   ngOnInit(): void {
    this.LISTRESIDENCES = listResidences;
  }

}
