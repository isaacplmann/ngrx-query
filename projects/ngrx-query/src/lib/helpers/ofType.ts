import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export const ofType = (actionType: string) => <T>(source: Observable<Action>) =>
  source.pipe(filter(action => action.type === actionType));
