import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagensVizualizadorComponent } from './imagens-vizualizador.component';

describe('ImagensVizualizadorComponent', () => {
  let component: ImagensVizualizadorComponent;
  let fixture: ComponentFixture<ImagensVizualizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagensVizualizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagensVizualizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
