import * as U from 'karet.util';
import * as L from 'kefir.partial.lenses';

//

export const fstIn = U.view(0);
export const sndIn = U.view(1);

//

export const itemsIn = U.view(['items', L.valueOr([])]);

export const positionIn = U.view('position');

export const sizeIn = U.view('size');

export const titleIn = U.view('title');

export const bodyIn = U.view('body');
