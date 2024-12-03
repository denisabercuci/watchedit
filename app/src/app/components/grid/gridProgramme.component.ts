import { Component, Input, OnInit } from "@angular/core";
import { Programme } from "../../models/programme";
import * as movieArt from 'movie-art';

@Component({
  selector: "app-grid-programme",
  templateUrl: "./gridProgramme.component.html",
  styleUrls: ["./gridProgramme.component.scss"],
})
export class GridProgrammeComponent implements OnInit {
  @Input() programme: Programme;

  ngOnInit(): void {
    movieArt(this.programme.name).then((response: any): void => {
        if (typeof response === 'string') {
            this.programme.art = response;
        } else {
            this.programme.art = 'https://placehold.co/400x600.png?text=No+Artwork+Available';
        }
    }).error((): void => {
        console.log('Error fetching movie art');
    });
}
}
