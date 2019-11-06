import * as R from 'ramda';
import * as J from 'jsverify';
import * as M from 'common/meta';

describe('Meta (common)', () => {
  J.property('fstIn', 'nat & nat', ab => M.fstIn(ab) === ab[0]);

  J.property('sndIn', 'nat & nat', ab => M.sndIn(ab) === ab[1]);

  J.property(
    'titleIn',
    '{ title: string }',
    rec => M.titleIn(rec) === rec.title,
  );

  J.property('positionIn', '{ position: nat & nat }', rec =>
    R.equals(M.positionIn(rec), rec.position),
  );

  J.property('sizeIn', '{ size: nat & nat }', rec =>
    R.equals(M.sizeIn(rec), rec.size),
  );

  J.property(
    'itemsIn',
    '{ items: [json] }',
    rec => R.equals(M.itemsIn(rec), rec.items) && R.is(Array, M.itemsIn(rec)),
  );
});
