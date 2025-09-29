"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SimpleHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';

const styleVariant = "funAndTrendy";
const colorTemplate = 1;
const textAnimation = "slide";

const theme: SiteTheme = { styleVariant, colorTemplate, textAnimation };

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1759136364424-44db6355.jpg"
          navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
          buttonText="Get Pulse"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SimpleHero
          title="Welcome to MemePulse"
          description="Join the fun and start trading today!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          backgroundImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1759136362428-acd89904.jpg"
          backgroundImageAlt="Cartoon desert landscape"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="MemePulse is a playful meme-themed cryptocurrency that aims to simplify the investment process and increase community engagement. It’s all about fun and transparency, encouraging everyone to join in on the adventure!"
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics"
          description="Clear, digestible numbers for trust."
          kpiItems={[{ value: "100M", description: "Total Supply" }, { value: "50M", description: "Liquidity" }, { value: "30M", description: "Marketing" }]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <GradientFooter
          items={[{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }]}
          copyrightText="© 2023 MemePulse. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}
