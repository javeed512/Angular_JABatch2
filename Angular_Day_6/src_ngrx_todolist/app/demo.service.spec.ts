import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';

fdescribe('DemoService', () => {
  let service: DemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test service function ',()=>{

        let  msg = service.display();

        expect(msg.length).toBeGreaterThan(0);

  })


});
