import React, { useEffect, useState } from 'react';

import { fetchGuesslike } from '../../api';
import { GuessLikeAdaptee } from '../../adapter';
import Guesslike from './Guesslike';

const qryParam = [
  // 猜你喜欢广告组
  {
    type: 'advertGroup',
    mapTo: 'guesslike',
    id: '05558050',
    next: [
      {
        type: 'productGroup',
        mapKey: 'comment[0]',
        mapTo: 'guessLikeGoods',
        attributes: '1,8,31,21,19,33',
        handPriceRatio: '100',
        couponSize: '1',
        next: [
          {
            type: 'priceDays',
            mapKey: 'pPrice',
            mapTo: 'days',
          },
        ],
      },
    ],
  },
];

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGuesslike(qryParam).then((res) => {
      setData(GuessLikeAdaptee(res));
    });
  }, []);

  return data.length ? <Guesslike data={data} setData={setData} /> : null;
};
