import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchEditorComponent } from './merch-editor.component';

describe('MerchEditorComponent', () => {
  let component: MerchEditorComponent;
  let fixture: ComponentFixture<MerchEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
