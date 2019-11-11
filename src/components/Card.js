import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import { fstIn, sndIn } from 'common/meta';
import CardView from 'components/CardView';
import CardEdit from 'components/CardEdit';

const EDIT_SYMBOL = '✎';

const LOCK_SYMBOL_CLOSED = '🔒';
const LOCK_SYMBOL_OPEN = '🔓';

const DELETE_SYMBOL = '🗑';

export default function Card(props) {
  const { item } = props;

  const { position, size, flags } = U.destructure(item);
  const { editing, locked } = U.destructure(flags);

  const cardStyle = U.template({
    width: fstIn(size),
    height: sndIn(size),
    left: fstIn(position),
    top: sndIn(position),
  });

  //

  return (
    <article className="card card__root" style={cardStyle}>
      <div className="card__body">
        {U.ifElse(editing, <CardEdit item={item} />, <CardView item={item} />)}
      </div>

      <div className="card__controls">
        <button disabled={locked} onClick={U.doModify(editing, R.not)}>
          {EDIT_SYMBOL}
        </button>
        <button onClick={U.doModify(locked, R.not)}>
          {U.ifElse(locked, LOCK_SYMBOL_OPEN, LOCK_SYMBOL_CLOSED)}
        </button>
        <button disabled={locked} onClick={U.doRemove(item)}>
          {DELETE_SYMBOL}
        </button>
      </div>
    </article>
  );
}
