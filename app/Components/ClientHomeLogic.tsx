'use client';

import { useSearchParams } from 'next/navigation';
import HeroComponent from "./HeroComponent/HeroComponent";
import ProductsComponent from "./ProductComponent/ProductsComponent";
import ProductViewer from './ProductViewerComponent/ProductViewer';

export default function ClientHomeLogic() {
  const params = useSearchParams();
  const activeProduct = params.get('product');

  return activeProduct ? (
    <ProductViewer />
  ) : (
    <>
      <HeroComponent />
      <ProductsComponent />
    </>
  );
}
