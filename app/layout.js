import "./globals.css";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import Header from "@/components/Header";
import DiscoverSection from "@/components/DiscoverSection";
import ProductInfoBar from "@/components/ProductInfoBar";
import MainLayoutGrid from "@/components/MainLayoutGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Appscrip Task",
  description: "Discover our products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DisclaimerBanner />
        <Header />
        <DiscoverSection />
        <ProductInfoBar />
        <MainLayoutGrid />
        <Footer />
      </body>
    </html>
  );
}
