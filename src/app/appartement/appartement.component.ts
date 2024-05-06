import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listApartments } from '../list-Appartement';
import { Apartment } from '../core/models/Appartement';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent {

  favorites: Apartment[] = [];
  APARTEMENTS: Apartment[];
  selectedApartment: Apartment[] = [];
  // apart : Apartment | null = null;
  idRes: any;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.APARTEMENTS = listApartments;
    this.getAppartement();

  }

  getAppartement() {
      this.route.params.subscribe((params) => {
      this.idRes = params['id'];
    });
    for (let i = 0; i < this.APARTEMENTS.length; i++) {
      if (this.APARTEMENTS[i].residence.id == this.idRes) {
        this.selectedApartment.push(this.APARTEMENTS[i]);
      }
      console.log('Selected apartment:', this.selectedApartment);
      
    }
    //return this.selectedApartment;
  }


  

addToFavorites(apartment) {
  this.favorites.push(apartment);
  console.log('Apartment added to favorites:', apartment);
}

}
