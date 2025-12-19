const WHATSAPP_NUMBER = '553832515513'; // Substitua pelo número real da loja

export const generateWhatsAppLink = (productName: string, brandName: string): string => {
  const message = encodeURIComponent(
    `Olá! Tenho interesse nessa peça:\n• Nome: ${productName}\n• Marca: ${brandName}\n\nVi no catálogo online da Estrelas.`
  );
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const generateGeneralWhatsAppLink = (): string => {
  const message = encodeURIComponent(
    `Olá! Vi o catálogo online da Estrelas e gostaria de mais informações.`
  );
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
