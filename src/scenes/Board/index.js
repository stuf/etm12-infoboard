import * as React from 'karet';
import * as U from 'karet.util';

import { itemsIn } from 'common/meta';
import { Card } from 'components';

export default function Board(props) {
  const actions = U.serializer(null);

  console.log({ props });
  const { state, match, history } = props;

  const cards = itemsIn(state);

  const navigateToCardEff = item =>
    U.doPush(actions, () =>
      U.thru(
        item,
        U.view('id'),
        U.consume(x => {
          console.log('item =>', x);
          history.push(`${match.url}?id=${x}`);
        }),
      ),
    );

  return (
    <section className="board boardRoot">
      <>{U.sink(actions)}</>

      <div className="boardCards">
        {U.thru(
          cards,
          U.mapElems((it, i) => (
            <Card
              key={U.string`card-${i}`}
              onSelectFn={navigateToCardEff}
              item={it}
            />
          )),
        )}
      </div>
    </section>
  );
}
