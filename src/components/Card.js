import * as React from 'karet';
import * as U from 'karet.util';

import { fstIn, sndIn } from 'common/meta';

export default function Card(props) {
  const dom = U.variable();
  const { item } = props;

  const { position, size, title, body } = U.destructure(item);

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
    </article>
  );
}
