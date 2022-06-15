import React, { useState } from 'react';
import { reportClick } from '@pango/core';

import { Tabs, TabPane, Exposure } from '@pango/ui';
import GuessLikeTab from '../../components/GuessLikeTab';
import TwoColWrapper from '../../components/TwoColWrapper';
import { CardB1, CardB2 } from '../../components/GuessLikeCard';
import FloorTitle from '../../components/FloorTitle';
import PlaceHolderCard from '../../components/PlaceholderCard';
import { useSimilarCard, SimilarCard } from '../../components/SimilarSkuCard';
import { GuesslikeContext } from '../../context';

export default ({ data, setData }) => {
  const cardType = 'B1';

  // 记录当前选中 tab 是第几个，为了隐藏 tab nav 上的竖线
  const [activeIndex, setActiveIndex] = useState(0);

  const addSimilarCard = useSimilarCard({
    data,
    setData,
    activeIndex,
  });

  return (
    <GuesslikeContext.Provider
      value={{
        remoteConfig: {
          floorTitleImg: 'http://storage.360buyimg.com/seckillspace/guessliketitle.png',
          showLinePrice: '0',
          showPurchasePrice: '1',
          showPlaceholder: '1',
        },
      }}
    >
      <div>
        <FloorTitle />
        <Exposure
          reportParams={{
            eventId: '曝光埋点 id',
            eventParam: '曝光埋点参数',
          }}
        />
        <Tabs
          onChange={(key) => {
            const index = data.findIndex((tab) => tab.advertId === key);
            setActiveIndex(index);
            reportClick({
              eventId: 'tab 点击',
              // 活动id_广告id_广告组ID_1_borkerinfo_tab名称（name字段）_moduleId_Mcinfo_Biclk
              eventParam: 'tab 点击参数',
            });
          }}
        >
          {data.map((tabInfo, i) => {
            return (
              <TabPane
                tab={
                  <GuessLikeTab
                    index={i}
                    activeIndex={activeIndex}
                    tabName={tabInfo.tabName}
                    tabBgColor="#FFBAAB"
                    activeTabBgColor="#E0240D"
                    tabFontColor="#F3422D"
                    activeTabFontColor="#FFFFFF"
                  />
                }
                key={tabInfo.advertId}
              >
                <TwoColWrapper
                  list={tabInfo.tabData}
                  card={(skuInfo) => {
                    if (skuInfo.isSimilarCard) {
                      return <SimilarCard key={skuInfo.id} data={skuInfo.data} tabInfo={tabInfo} />;
                    }
                    if (cardType === 'B2') {
                      return (
                        <CardB2
                          key={skuInfo.skuId}
                          data={skuInfo}
                          tabInfo={tabInfo}
                          addSimilarCard={addSimilarCard}
                        />
                      );
                    }
                    return (
                      <CardB1
                        key={skuInfo.skuId}
                        data={skuInfo}
                        tabInfo={tabInfo}
                        addSimilarCard={addSimilarCard}
                      />
                    );
                  }}
                  placeholderCard={<PlaceHolderCard />}
                />
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </GuesslikeContext.Provider>
  );
};
//
