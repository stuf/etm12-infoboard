import * as React from 'karet';
import * as U from 'karet.util';

export default function CardEditor(props) {
  const { item } = props;
  const { body, title } = U.destructure(item);

  return (
    <>
      <header className="card__header">
        <U.Input className="input__text" type="text" value={title} />
      </header>
      <div className="card__content">
        <U.TextArea className="input__textarea" value={body} />
      </div>
    </>
  );
}
