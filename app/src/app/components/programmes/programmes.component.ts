import {Component, OnInit} from '@angular/core';
import {Programme} from '../../models/programme';
import {ProgrammeService} from '../../services/programme.service';

@Component({
    selector: 'app-programmes',
    templateUrl: './programmes.component.html',
    styleUrls: ['./programmes.component.scss'],
})
export class ProgrammesComponent implements OnInit {
    programmes: Programme[] = [];
    blankProgramme: Programme = {
        name: '',
        genre: '',
        rating: 0,
        comments: ''
    };

    constructor(private programmeService: ProgrammeService) {
    }

    ngOnInit(): void {
        this.programmeService.getAll().subscribe(
          (data) => {
            this.programmes = data;
          },
          (error) => {
            console.error('Error fetching programmes:', error);
          }
        );
      }

    getProgrammes(): void {
        this.programmeService.getAll().subscribe(programmes => this.programmes = programmes);
    }

    isListView: boolean = false; // Default to grid view
    
}
