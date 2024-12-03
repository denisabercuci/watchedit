import { Component, Input } from "@angular/core";
import { Programme } from "../../models/programme";
import { ProgrammeService } from "../../services/programme.service";

@Component({
  selector: "app-grid-programmes",
  templateUrl: './gridProgrammes.component.html',
  styleUrls: ['./gridProgrammes.component.scss'],
})
export class GridProgrammesComponent {
  @Input() programmes: Programme[] = [];

  constructor(private programmeService: ProgrammeService) {}

  ngOnInit() {
    this.getProgrammes();
  }

  getProgrammes(): void {
    this.programmeService
      .getAll()
      .subscribe((programmes) => (this.programmes = programmes));
  }
}
