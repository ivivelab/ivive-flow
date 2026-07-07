import { Noto_Sans_KR } from 'next/font/google';
import "./globals.css";
import SimpleChat from '@/components/chat/SimpleChat';

const notoSansKr = Noto_Sans_KR({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKr.className}>
      <body>
        {children}           {/* 2. 이게 빠지면 페이지 내용이 안 보입니다! */}
        <SimpleChat />       {/* 3. 이제 여기에 붙습니다 */}
      </body>
    </html>
  );
}