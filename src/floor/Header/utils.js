/**
 * 初始化 通用同步 tips
 */
export const initMHeaderTips = (headerTipsId) => {
  const tipArg = {
    tipId: headerTipsId,
    sid: null,
    isfloat: true,
    isAlwayShow: true,
    downloadAppPlugIn: {
      openAppBtnId: 'download_openapp', // 打开app按钮id , 写这个默认值即可。
      downAppURl: 'https://wqs.jd.com/downloadApp/downloadAppIOSMPage.html?channel=jd-m', // app下载地址
      inteneUrl: 'openApp.jdMobile://virtual?', // 唤起app的协议，不同的app协议不同，需要联系app研发。
      inteneUrlParams: {
        category: 'jump',
        des: 'm',
        url: encodeURIComponent(window.location.href),
      }, // 这个参数必须写，这个JSON对象的所有值，最终会透传给APP。如果这个JSON格式有误，会导致 app 唤起后闪退。
    },
    onClickTrynow: () => {},
    onClickTipX: () => {},
  };
  window.$ && window.$.downloadAppPlugInOpenApp && window.$.downloadAppLayerConfigData(tipArg);
};

export const initMCommonHeader = (hrederId) => {
  if (window.MCommonHeaderBottom) {
    const mchb = new window.MCommonHeaderBottom();
    const headerArg = {
      hrederId,
      title: document.title,
      showShare: true,
      shareConfig: {
        url: 'xxxx',
        title: 'xxxx',
        desc: 'xxxx',
        img: 'http://storage.360buyimg.com/seckillspace/guessliketitle.png',
      },
    };
    try {
      mchb.header(headerArg);
    } catch (error) {
      console.log(error);
    }
  }
};
