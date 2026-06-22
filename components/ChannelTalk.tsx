'use client';

import { useEffect } from 'react';

export default function ChannelTalk() {
  useEffect(() => {
    // 채널톡 스크립트 로드
    (function () {
      const w = window as any;
      if (w.ChannelIO) return;
      const ch = function () { ch.c(arguments); };
      ch.q = []; // 여기는 빈 배열로 두셔야 합니다.
      ch.c = function (args) { ch.q.push(args); };
      w.ChannelIO = ch;
      
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      const x = document.getElementsByTagName('script')[0];
      if (x.parentNode) x.parentNode.insertBefore(s, x);
    })();

    // 채널톡 부팅: 아래 pluginKey에 키를 넣으세요
    (window as any).ChannelIO?.('boot', {
      pluginKey: 'e9582e3c-9f2a-43ff-8f83-82938f40bf7d', 
    });

  }, []);

  return null;
}