import { ConnectService } from './connect.service';
import { Injector } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';

describe('ConnectService', () => {
    let injector: Injector;
    let sample: ConnectService;

    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [
            ConnectService,
          ],
        });
        injector = getTestBed();
        sample = injector.get(ConnectService);
    });

    afterEach(() => {
        injector = undefined;
        sample = undefined;
    });

    it('is defined', () => {
        expect(ConnectService).toBeDefined();
        expect(sample).toBeDefined();
        expect(sample instanceof ConnectService).toBeTruthy();
    });

    it('should ...', () => {
      expect(sample).toBe('Angular Library');
    });
});
