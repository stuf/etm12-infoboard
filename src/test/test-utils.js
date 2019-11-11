import * as J from 'jsverify';
import * as V from 'kefir.partial.lenses';

const genArbSampler = (def, size = 10) => [def, J.sampler(def, size)];

const genValidator = rules => V.errors(rules);

const genThrowingValidator = rules => V.validate(rules);

//

export const [coordArb, mkRandomCoord] = genArbSampler(J.tuple([J.nat, J.nat]));

//

export const [itemArb, mkRandomItem] = genArbSampler(
  J.record({
    title: J.string,
    body: J.string,
    size: coordArb,
    position: coordArb,
  }),
);
