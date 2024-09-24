import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.scss";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ru";
import Header from "@/components/layout/mainLayout/header/Header";
import Footer from "@/components/layout/mainLayout/footer/Footer";
import { YMaps } from "@pbe/react-yandex-maps";
import { YMapsProvider } from "@/providers/YMapsProvider";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

dayjs.extend(localizedFormat);
dayjs.locale("ru");

export const metadata: Metadata = {
   title: "Тхэквондо ГТФ РТ",
   description:
      "ФТРТ - амбициозная, быстро развивающаяся, аккредитованная организация, обладающая исключительным правом развивать тхэквондо ГТФ на территории Республики Татарстан.",
};

export default function MainLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ru">
         <YMapsProvider>
            <body className={inter.className}>
               <div className="w-full h-full flex flex-col">
                  <Header />
                  <main className="flex-grow mt-28 max-xl:mt-20">
                     {children}
                  </main>
                  <Footer />
               </div>
            </body>
         </YMapsProvider>
      </html>
   );
}
