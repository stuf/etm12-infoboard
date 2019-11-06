import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import { fstIn, sndIn } from 'common/meta';

export default function Card(props) {
  const dom = U.variable();
  const { item } = props;

  const { position, size, title, body, flags } = U.destructure(item);
  const { editing, locked } = U.destructure(flags);

  const cardStyle = U.template({
    width: fstIn(size),
    height: sndIn(size),
    left: fstIn(position),
    top: sndIn(position),
  });

  //

  return (
    <article className="card cardRoot" style={cardStyle} ref={U.refTo(dom)}>
      <header className="cardHeader">{title}</header>

      <div className="cardBody">{body}</div>

      <div className="cardControls">
        <button onClick={U.doModify(editing, R.not)}>E</button>
        <button onClick={U.doModify(locked, R.not)}>L</button>
        <button onClick={U.doRemove(item)}>D</button>
      </div>
    </article>
  );
}
