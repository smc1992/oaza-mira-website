import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import VisualEditor from "@/components/ui/VisualEditor";
import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  
  return (
    <>
      <Navbar lang={lang} dict={dict} />
      {children}
      <Footer lang={lang} dict={dict} />
      <CookieBanner lang={lang} />
      
      {/* LeadConnector Chat Widget */}
      <Script 
        src="https://widgets.leadconnectorhq.com/loader.js" 
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
        data-widget-id="69b960efbfec06f6878d8cd8"
      />

      {/* Secure Visual Inline Editor */}
      <VisualEditor lang={lang} />
    </>
  );
}
