import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewreqPage } from './newreq.page';

describe('NewreqPage', () => {
  let component: NewreqPage;
  let fixture: ComponentFixture<NewreqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewreqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewreqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
