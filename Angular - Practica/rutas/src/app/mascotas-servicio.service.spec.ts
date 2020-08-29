import { TestBed } from '@angular/core/testing';

import { MascotasServicioService } from './mascotas-servicio.service';

describe('MascotasServicioService', () => {
  let service: MascotasServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotasServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
