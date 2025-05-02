'use client';
import { useSearchParams } from 'next/navigation';
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HeroComponent from "./Components/HeroComponent/HeroComponent";
import ProductsComponent from "./Components/ProductComponent/ProductsComponent";
import ProductViewer from './Components/ProductViewerComponent/ProductViewer';

export default function Home() {
  const params = useSearchParams();
  const activeProduct = params.get('product');

  return (
    <>
      <HeaderComponent />

      {activeProduct ? (
        <ProductViewer />
      ) : (
        <>
          <HeroComponent /> 
          <ProductsComponent />
          <FooterComponent />
        </>
      )}
    </>
  );
}
