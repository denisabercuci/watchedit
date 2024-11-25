import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Programme } from '../models/programme';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const programmes = [
      {id: 1, 'name': 'Doctor Who', 'genre': 'Sci-Fi', 'rating': 4, 'comments': 'Great show!'},
      {id: 2, 'name': 'Peaky Blinders', 'genre': 'Crime', 'rating': 5, 'comments': 'Perfect!'},
      {id: 3, 'name': 'RuPaul\'s Drag Race: UK vs. the World', 'genre': 'Entertainment', 'rating': 4, 'comments': 'Great show!'},
      {id: 4, 'name': 'Inside No. 9', 'genre': 'Comedy Drama', 'rating': 5, 'comments': 'Perfect!'},
      {id: 5, 'name': 'Shetland', 'genre': 'Drama', 'rating': 3, 'comments': 'Good show!'},
      {id: 6, 'name': 'His Dark Materials', 'genre': 'Fantasy', 'rating': 4, 'comments': 'Great show!'},
      {id: 7, 'name': 'Eastenders', 'genre': 'Soap', 'rating': 3, 'comments': 'Good show!'},
    ];
    return {programmes};
  }

  // Overrides the genId method to ensure that a programme always has an id.
  // If the programmes array is empty,
  // the method below returns the initial number (11).
  // if the programmes array is not empty, the method below returns the highest
  // programme id + 1.
  genId(programmes: Programme[]): number {
    return programmes.length > 0 ? Math.max(...programmes.map(programme => programme.id)) + 1 : 11;
  }
}