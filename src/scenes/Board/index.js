import * as React from 'karet';
import * as U from 'karet.util';

import { itemsIn } from 'common/meta';
import { Card } from 'components';

export default function Board(props) {
  const { state } = props;

  const cards = itemsIn(state);

  return (
    <section className="board boardRoot">
      {U.thru(
        cards,
        U.mapElems((it, i) => <Card key={U.string`card-${i}`} item={it} />),
      )}
    </section>
  );
}
