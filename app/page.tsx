'use client';
import { useSearchParams } from 'next/navigation';
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HeroComponent from "./Components/HeroComponent/HeroComponent";
import ProductsComponent from "./Components/ProductComponent/ProductsComponent";
import ProductViewer from './Components/ProductViewerComponent/ProductViewer';
import { Suspense } from 'react';



export default function Home() {
  const params = useSearchParams();
  const activeProduct = params.get('product');

  return (
    <>
      <HeaderComponent />

      {activeProduct ? (
 <Suspense fallback={<div>Loading product...</div>}>
          <ProductViewer />
        </Suspense>
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
