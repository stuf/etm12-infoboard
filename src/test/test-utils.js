import * as J from 'jsverify';

const genArbSampler = (def, size = 10) => [def, J.sampler(def, size)];

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
