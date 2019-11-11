import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as K from 'kefir';

import marked from 'marked';
import insane from 'insane';

export default function Markdown(props) {
  const { children } = props;

  const markdown = U.thru(
    children,
    U.flatMapLatest(txt => K.fromNodeCallback(cb => marked(txt, cb))),
    U.toProperty,
  );

  const hasContent = R.isEmpty(children);

  return (
    <div className={U.cns('markdown', U.when(hasContent, 'markdown--empty'))}>
      {U.unless(
        hasContent,
        <div
          className="markdown__content"
          dangerouslySetInnerHTML={{ __html: markdown }}
        />,
      )}
    </div>
  );
}
