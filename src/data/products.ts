// Product Images
import vestidoMidiFloralll from '@/assets/products/product-1.jpg';
import conjuntoLinho from '@/assets/products/product-2.jpg';
import blusaCetimRosa from '@/assets/products/product-3.jpg';
import calcaAlfaiataria from '@/assets/products/product-4.jpg';
import vestidoLongoFesta from '@/assets/products/product-5.jpg';
import blusaRendaBranca from '@/assets/products/product-6.jpg';
import conjuntoMoletom from '@/assets/products/product-7.jpg';
import calcaJeansWide from '@/assets/products/product-8.jpg';
import vestidoTricot from '@/assets/products/product-9.jpg';
import blusaCroppedBasica from '@/assets/products/product-10.jpg';
import conjuntoSaiaBlusa from '@/assets/products/product-11.jpg';
import calcaLeggingCouro from '@/assets/products/product-12.jpg';
import calcaLeggingCouro1 from '@/assets/products/product-13.jpg';
import calcaLeggingCouro2 from '@/assets/products/product-14.jpg';
import calcaLeggingCouro3 from '@/assets/products/product-15.jpg';
import calcaLeggingCouro4 from '@/assets/products/product-16.jpg';
import calcaLeggingCouro5 from '@/assets/products/product-17.jpg';
import calcaLeggingCouro6 from '@/assets/products/product-18.jpg';
import calcaLeggingCouro7 from '@/assets/products/product-19.jpg';
import calcaLeggingCouro8 from '@/assets/products/product-20.jpg';
import calcaLeggingCouro9 from '@/assets/products/product-21.jpg';
import calcaLeggingCouro10 from '@/assets/products/product-22.jpg';
import calcaLeggingCouro11 from '@/assets/products/product-23.jpg';
import calcaLeggingCouro12 from '@/assets/products/product-24.jpg';
import calcaLeggingCouro13 from '@/assets/products/product-25.jpg';
import calcaLeggingCouro14 from '@/assets/products/product-26.jpg';
import calcaLeggingCouro15 from '@/assets/products/product-27.jpg';




export interface Product {
  id: string;
  name: string;
  brand: 'lore' | 'razzo' | 'bfly' | 'coutz' | 'dress-to' | 'lança-perfume' | 'ademar' | 'paetê' | 'cleo' | string;
  price: number;
  description: string;
  details: string[];
  sizes: string[];
  image: string;
}

export const brands = [
  { id: 'todos', label: 'Todos' },
  { id: 'lore', label: 'Lore' },
  { id: 'razzo', label: 'Razzo' },
  { id: 'bfly', label: 'Bfly' },
  { id: 'coutz', label: 'Coutz' },
  { id: 'dress-to', label: 'Dress To' },
  { id: 'lança-perfume', label: 'Lança Perfume' },
  { id: 'ademar', label: 'Ademar' },
  { id: 'paetê', label: 'Paetê' },
  { id: 'cleo', label: 'Cléo' },
  { id: 'manie', label: 'Manie' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Vestido Coutz',
    brand: 'coutz',
    price: 600.00,
    description: 'Vestido Coutz',
    details: ['Vestido Coutz'],
    sizes: ['M'],
    image: vestidoMidiFloralll,
  },
  {
    id: '2',
    name: 'Conjunto Dress To',
    brand: 'dress-to',
    price: 801.00,
    description: 'Conjunto Dress To.',
    details: ['Conjunto Dress To.'],
    sizes: ['P'],
    image: conjuntoLinho,
  },
  {
    id: '3',
    name: 'Vestido Dress To',
    brand: 'dress-to',
    price: 560.00,
    description: 'Vestido Dress To.',
    details: ['Apenas Esse'],
    sizes: ['M'],
    image: blusaCetimRosa,
  },
  {
    id: '4',
    name: 'Vestido Trimix',
    brand: 'trimix',
    price: 1054.00,
    description: 'Vestido Trimix.',
    details: ['Disponivel Bege e Preto'],
    sizes: ['M', 'G'],
    image: calcaAlfaiataria,
  },
  {
    id: '5',
    name: 'Vestido Lore',
    brand: 'lore',
    price: 1190.00,
    description: 'Vestido Lore.',
    details: ['Disponivel Bege e Vermelho'],
    sizes: ['P','G'],
    image: vestidoLongoFesta,
  },
  {
    id: '6',
    name: 'Conjunto',
    brand: 'todos',
    price: 1268.00,
    description: 'Blusa delicada em renda, perfeita para looks românticos.',
    details: ['Disponivel Rosa Bebê'],
    sizes: ['P'],
    image: blusaRendaBranca,
  },
  {
    id: '7',
    name: 'Vestido Bfly',
    brand: 'bfly',
    price: 1100.00,
    description: 'Vestido Bfly.',
    details: ['Disponivel no Off White'],
    sizes: ['M'],
    image: conjuntoMoletom,
  },
  {
    id: '8',
    name: 'Vestidp Cléo',
    brand: 'cleo',
    price: 900.00,
    description: 'Vestido Cléo',
    details: ['Apenas esse disponivel'],
    sizes: ['40'],
    image: calcaJeansWide,
  },
  {
    id: '9',
    name: 'Vestido Lança Perfume',
    brand: 'lança-perfume',
    price: 1117.00,
    description: 'Vestido Lança Perfume',
    details: ['Apenas esse disponivel'],
    sizes: ['P'],
    image: vestidoTricot,
  },
  {
    id: '10',
    name: 'Vestido Lança Perfume',
    brand: 'lança-perfume',
    price: 553.00,
    description: 'Vestido Lança Perfume',
    details: ['Apenas esse disponivel'],
    sizes: ['G'],
    image: blusaCroppedBasica,
  },
  {
    id: '11',
    name: 'Conjunto Ademar',
    brand: 'ademar',
    price: 429.90,
    description: 'Conjunto Tamanho Único',
    details: ['Cropped 463.00'],
    sizes: ['M'],
    image: conjuntoSaiaBlusa,
  },
  {
    id: '12',
    name: 'Vestido Manie',
    brand: 'Manie',
    price: 880.00,
    description: 'Vestido Manie.',
    details: ['Disponivel no Preto'],
    sizes: ['M'],
    image: calcaLeggingCouro,
  },
   {
    id: '13',
    name: 'Vestido Lore',
    brand: 'lore',
    price: 1349.00,
    description: 'Vestido Lore.',
    details: ['Disponivel no Azul Marinho'],
    sizes: ['G'],
    image: calcaLeggingCouro1,
  },
   {
    id: '14',
    name: 'Conjunto Lança Perfume',
    brand: 'lança-perfume',
    price: 963.00,
    description: 'Conjunto Lança Perfume.',
    details: ['Apenas esse disponivel'],
    sizes: ['M'],
    image: calcaLeggingCouro2,
  },
   {
    id: '15',
    name: 'Vestido Ademar',
    brand: 'ademar',
    price: 429.00,
    description: 'Vestido Ademar.',
    details: ['Apenas esse disponivel'],
    sizes: ['Apenas Esse'],
    image: calcaLeggingCouro3,
   },
     {
    id: '16',
    name: 'Macacão Razzo',
    brand: 'razzo',
    price: 1426.00,
    description: 'Macacão Razzo.',
    details: ['Disponivel no Amarelo e Preto'],
    sizes: ['38'],
    image: calcaLeggingCouro4,
  },
   {
    id: '17',
    name: 'Vestido Dress To',
    brand: 'dress-to',
    price: 640.00,
    description: 'Vestido Dress To.',
    details: ['Apenas esse disponivel'],
    sizes: ['P'],
    image: calcaLeggingCouro5,
  },
  {
    id: '18',
    name: 'Blusa Paetê',
    brand: 'paetê',
    price: 455.00,
    description: 'Saia de Couro, Uzee de couro, 1430.00, (38)',
    details: ['Disponivel no Preto e Vermelho'],
    sizes: ['G'],
    image: calcaLeggingCouro6,
  },
    {
    id: '19',
    name: 'Vestido',
    brand: 'todos',
    price: 396.00,
    description: 'Tamanho Único',
    details: ['Apenas esse disponivel'],
    sizes: ['Apenas esse disponivel'],
    image: calcaLeggingCouro7,
  },
    {
    id: '20',
    name: 'Vestido Lança Perfume',
    brand: 'lança-perfume',
    price: 1445.00,
    description: 'Vestido Lança Perfume.',
    details: ['Apenas esse disponivel'],
    sizes: ['P'],
    image: calcaLeggingCouro8,
  },
    {
    id: '21',
    name: 'Vestido',
    brand: 'todos',
    price: 382.00,
    description: 'Disponivel no Preto',
    details: ['Disponivel no Preto e Vermelho'],
    sizes: ['Apenas esse disponivel'],
    image: calcaLeggingCouro9,
  },
    {
    id: '22',
    name: 'Blusa',
    brand: 'todos',
    price: 118.00,
    description: 'Disponível na cor amarelo manteiga, off white e preta',
    details: ['Calça disponível do 38 ao 44, 464,00, Lança perfume'],
    sizes: ['G'],
    image: calcaLeggingCouro10,
  },
    {
    id: '23',
    name: 'Vestido',
    brand: 'todos',
    price: 330.00,
    description: 'Apenas esse disponivel',
    details: ['Apenas esse disponivel'],
    sizes: ['Tamanho Único'],
    image: calcaLeggingCouro11,
  },
    {
    id: '24',
    name: 'Vestido',
    brand: 'todos',
    price: 309.00,
    description: 'Apenas esse disponivel',
    details: ['Azul, Vermelho e Off White'],
    sizes: ['Apenas esse disponivel'],
    image: calcaLeggingCouro12,
  },
    {
    id: '25',
    name: 'Vestido',
    brand: 'todos',
    price: 398.00,
    description: 'Apenas esse disponivel',
    details: ['Apenas esse disponivel'],
    sizes: ['Tamanho Único'],
    image: calcaLeggingCouro13,
  },
    {
    id: '26',
    name: 'Vestido',
    brand: 'todos',
    price: 420.00,
    description: 'Apenas esse disponivel',
    details: ['Apenas esse disponivel'],
    sizes: ['Tamanho Único'],
    image: calcaLeggingCouro14,
  },
    {
    id: '27',
    name: 'Vestido',
    brand: 'todos',
    price: 380.00,
    description: 'Apenas esse disponivel',
    details: ['Apenas esse disponivel'],
    sizes: ['Tamanho Único'],
    image: calcaLeggingCouro15,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByBrand = (brand: string): Product[] => {
  if (brand === 'todos') return products;
  return products.filter(product => product.brand === brand);
};

export const getBrandLabel = (brandId: string): string => {
  const brand = brands.find(b => b.id === brandId);
  return brand?.label || brandId;
};
