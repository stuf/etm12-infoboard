import * as React from 'karet';
import * as U from 'karet.util';

import { Markdown } from 'components/common';

export default function CardView(props) {
  const { item } = props;
  const { title, body } = U.destructure(item);

  return (
    <>
      <header className="card__header">{title}</header>

      <div className="card__content">
        <Markdown>{body}</Markdown>
      </div>
    </>
  );
}
