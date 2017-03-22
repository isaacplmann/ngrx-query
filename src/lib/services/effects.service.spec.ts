import { NgrxQueryEffects } from './effects.service';
import { Injector } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';

describe('NgrxQueryEffects', () => {
    let injector: Injector;
    let sample: NgrxQueryEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [
            NgrxQueryEffects,
          ],
        });
        injector = getTestBed();
        sample = injector.get(NgrxQueryEffects);
    });

    afterEach(() => {
        injector = undefined;
        sample = undefined;
    });

    it('is defined', () => {
        expect(NgrxQueryEffects).toBeDefined();
        expect(sample).toBeDefined();
        expect(sample instanceof NgrxQueryEffects).toBeTruthy();
    });

    it('should ...', () => {
      expect(sample).toBe('Angular Library');
    });
});
