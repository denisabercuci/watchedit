import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GridProgrammeComponent } from "./gridProgramme.component";

describe("GridLayoutComponent", () => {
  let component: GridProgrammeComponent;
  let fixture: ComponentFixture<GridProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridProgrammeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
