// 'use client';
// import { useSearchParams } from 'next/navigation';
// import FooterComponent from "./Components/FooterComponent/FooterComponent";
// import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
// import HeroComponent from "./Components/HeroComponent/HeroComponent";
// import ProductsComponent from "./Components/ProductComponent/ProductsComponent";
// import ProductViewer from './Components/ProductViewerComponent/ProductViewer';
// import { Suspense } from 'react';



// export default function Home() {
//   const params = useSearchParams();
//   const activeProduct = params.get('product');

//   return (
//     <>
//       <HeaderComponent />

//       {activeProduct ? (
//  <Suspense>
//           <ProductViewer />
//                   </Suspense>

//       ) : (
//         <>
//           <HeroComponent /> 
//           <ProductsComponent />
//           <FooterComponent />
//         </>
        
//       )}
//     </>
//   );
// }

import { Suspense } from 'react';
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import ClientHomeLogic from './Components/ClientHomeLogic';

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <Suspense fallback={<div>Loading product...</div>}>
        <ClientHomeLogic />
      </Suspense>
      <FooterComponent />
    </>
  );
}
