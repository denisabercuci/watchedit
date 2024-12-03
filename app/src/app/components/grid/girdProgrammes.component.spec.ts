import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GridProgrammesComponent } from "./gridProgrammes.component";

describe("GridLayoutComponent", () => {
  let component: GridProgrammesComponent;
  let fixture: ComponentFixture<GridProgrammesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridProgrammesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
