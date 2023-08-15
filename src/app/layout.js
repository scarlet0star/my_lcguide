import "./globals.css";

export const metadata = {
  title: "LCB deck maker",
  description: "My Limbus Company Deck maker",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="ko">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
