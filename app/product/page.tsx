'use client'
import { Suspense } from 'react';
import ProductViewer from "../Components/ProductViewerComponent/ProductViewer";

export default function Home()
{
  return (
<>
<Suspense>
<ProductViewer/>
</Suspense>
</>

  );
}