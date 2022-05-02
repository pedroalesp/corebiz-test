import { StyledLayout } from "../assets/styles/styles";
import { Header, Hero, ProductsSection, NewsletterSection } from "./";

export const Layout = () => (
  <StyledLayout>
    <Header />
    <Hero />
    <ProductsSection />
    <NewsletterSection />
    {/* 
    <Footer /> */}
  </StyledLayout>
);
