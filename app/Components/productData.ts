export interface Product {
  title: string;
  description: string;
  images: string[];
}

export const productData: { [key: string]: Product } = {
  "ceiling": {
    title: "Ceiling",
    description: "High-quality ceiling solutions.",
    images: ["/products/cieling1.jpg", "/products/cieling2.jpg", "/products/cieling3.jpg"]
  },
  "gypsum-ceiling": {
    title: "Gypsum Ceiling",
    description: "Fire-resistant modern ceilings.",
    images: ["/products/gypsum1.jpg", "/products/gypsum2.jpg", "/products/gypsum3.jpg"]
  },
  "gypsum-ceiling-material": {
    title: "Gypsum Ceiling Material",
    description: "Materials for gypsum ceiling construction.",
    images: ["/products/gymat1.jpg", "/products/gymat2.jpg", "/products/gymat3.jpg"]
  },
  "suspended-ceiling": {
    title: "Suspended Ceiling",
    description: "Versatile suspended ceiling systems.",
    images: ["/products/susceil1.jpg", "/products/susceil2.jpg", "/products/susceil3.jpg"]
  },
  "mouldings": {
    title: "Mouldings",
    description: "Decorative architectural mouldings.",
    images: ["/products/mould1.jpg", "/products/mould2.jpg", "/products/mould3.jpg"]
  },
  "artistic-mouldings": {
    title: "Artistic Mouldings",
    description: "Elegant artistic moulding designs.",
    images: ["/products/artmould1.jpg", "/products/artmould2.jpg", "/products/artmould3.jpg"]
  },
  "ceiling-accessories": {
    title: "Ceiling Accessories",
    description: "Accessories to enhance ceiling installation.",
    images: ["/products/ceilacc1.jpg", "/products/ceilacc2.jpg", "/products/ceilacc3.jpg"]
  },
  "flooring": {
    title: "Flooring",
    description: "Durable and stylish flooring options.",
    images: ["/products/floor1.jpg", "/products/floor2.jpg", "/products/floor3.jpg", "/products/floor4.jpg"]
  },
  "vinyl-plank-flooring": {
    title: "Vinyl Plank Flooring",
    description: "Waterproof and low-maintenance flooring.",
    images: ["/products/vinyl1.jpg"]
  },
  "engineered-hardwood-flooring": {
    title: "Engineered Hardwood Flooring",
    description: "Real wood with engineered stability.",
    images: ["/products/hardwood1.jpg"]
  },
  "bamboo-flooring": {
    title: "Bamboo Flooring",
    description: "Eco-friendly and stylish flooring.",
    images: ["/products/bamboo1.jpg"]
  },
  "doors-gates": {
    title: "Doors Gates",
    description: "Variety of doors and gate solutions.",
    images: ["/products/door1.jpg", "/products/door2.jpg", "/products/door3.jpg"]
  },
  "steel-security-doors": {
    title: "Steel Security Doors",
    description: "Secure and stylish doors.",
    images: ["/products/steel1.jpg", "/products/steel2.jpg", "/products/steel3.jpg"]
  },
  "sectional-garage-doors": {
    title: "Sectional Garage Doors",
    description: "Efficient garage door systems.",
    images: ["/products/garage1.jpg", "/products/garage2.jpg", "/products/garage3.jpg"]
  },
  "commercial-roll-up-shutter-gates": {
    title: "Commercial Roll-Up Shutter Gates",
    description: "Secure commercial shutter gates.",
    images: ["/products/comroll1.jpg", "/products/comroll2.jpg", "/products/comroll3.jpg"]
  },
  "automatic-gate-openers": {
    title: "Automatic Gate Openers",
    description: "Motorized gate opening systems.",
    images: ["/products/autoopen1.jpg", "/products/autoopen2.jpg", "/products/autoopen3.jpg"]
  },
  "window-door-roll-up-shutter": {
    title: "Window /Door Roll-Up Shutter",
    description: "Shutters for windows and doors.",
    images: ["/products/rollshutter1.jpg"]
  },
  "pvc-laminated-wooden-doors": {
    title: "PVC Laminated Wooden Doors",
    description: "Stylish and durable PVC wooden doors.",
    images: ["/products/pvcdoor1.jpg"]
  },
  "doors-without-glass": {
    title: "Doors Without Glass",
    description: "Solid doors for maximum privacy.",
    images: ["/products/noglass1.jpg", "/products/noglass2.jpg", "/products/noglass3.jpg"]
  },
  "other-products": {
    title: "Other Products",
    description: "Explore our other building solutions.",
    images: ["/products/other1.jpg", "/products/other2.jpg", "/products/other3.jpg"]
  },
};
