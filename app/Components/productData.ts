export interface Product {
    title: string;
    description: string;
    images: string[];
  }
  
  export const productData: { [key: string]: Product } = {
    "steel-security-doors": {
      title: "Steel Security Doors",
      description: "Secure and stylish doors.",
      images: ["/products/steel1.jpg", "/products/steel2.jpg", "/products/steel3.jpg"]
    },
    "gypsum-ceiling": {
      title: "Gypsum Ceiling",
      description: "Fire-resistant modern ceilings.",
      images: ["/products/gypsum1.jpg", "/products/gypsum2.jpg", "/products/gypsum3.jpg"]
    }
  };
  