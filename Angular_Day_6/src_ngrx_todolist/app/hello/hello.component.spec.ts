import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloComponent ],
      imports:[],
      providers:[]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });


  it('test HelloComponent title ', ()=>{

      expect(component.title).toEqual('hello');


  });

  it('test HelloComponent add() ', ()=>{


      let actual =    component.add(4,5);

          expect(actual).toEqual(9);


});


});
