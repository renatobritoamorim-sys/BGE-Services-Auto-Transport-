
export type Language = 'en' | 'pt';

export interface TranslationContent {
  navHome: string;
  navServices: string;
  navArea: string;
  navAbout: string;
  navContact: string;
  heroTitle: string;
  heroSub: string;
  ctaCall: string;
  ctaFacebook: string;
  servicesTitle: string;
  service1: string;
  service1Desc: string;
  service2: string;
  service2Desc: string;
  service3: string;
  service3Desc: string;
  service4: string;
  service4Desc: string;
  aboutTitle: string;
  aboutText: string;
  areaTitle: string;
  areaSub: string;
  footerHours: string;
  footerAddress: string;
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navArea: "Service Area",
    navAbout: "About Us",
    navContact: "Contact",
    heroTitle: "Reliable Car Hauling & Transport in Connecticut",
    heroSub: "Professional transportation for cars, SUVs, and light trucks. Available 24/7 across the state.",
    ctaCall: "Call Now (860) 328-2011",
    ctaFacebook: "Follow us on Facebook",
    servicesTitle: "Our Professional Services",
    service1: "Car Hauling",
    service1Desc: "Safe transport for cars, SUVs, and light trucks to any destination in CT.",
    service2: "Towing Service",
    service2Desc: "Broken down? We tow your vehicle to a mechanic or your preferred location.",
    service3: "Vehicle Relocation",
    service3Desc: "Moving or sold a car? We handle the logistics of moving your vehicle professionally.",
    service4: "Junk Car Removal",
    service4Desc: "Quick and efficient hauling of junk vehicles to scrap yards or recycling centers.",
    aboutTitle: "About BGE Services",
    aboutText: "BGE Services provides reliable and professional car hauling and towing across Connecticut. We safely transport small and medium-sized vehicles—such as cars, SUVs, and light trucks—whether you need to move a vehicle for sale, tow a broken-down car to a mechanic, relocate a car, or haul a junk vehicle to a scrapyard. Our team offers fast response times, fair pricing, and dependable service.",
    areaTitle: "Areas We Serve",
    areaSub: "Providing 24/7 service throughout the entire state of Connecticut, including these major cities:",
    footerHours: "Open 24/7 - Everyday",
    footerAddress: "18 Erwin Ct, Newington, CT 06111"
  },
  pt: {
    navHome: "Início",
    navServices: "Serviços",
    navArea: "Área de Atendimento",
    navAbout: "Sobre Nós",
    navContact: "Contato",
    heroTitle: "Transporte de Carros Confiável em Connecticut",
    heroSub: "Transporte profissional para carros, SUVs e caminhonetes leves. Disponível 24 horas em todo o estado.",
    ctaCall: "Ligue Agora (860) 328-2011",
    ctaFacebook: "Siga-nos no Facebook",
    servicesTitle: "Nossos Serviços Profissionais",
    service1: "Transporte de Veículos",
    service1Desc: "Transporte seguro para carros, SUVs e caminhonetes para qualquer destino em CT.",
    service2: "Serviço de Guincho",
    service2Desc: "Quebrou? Rebocamos seu veículo para um mecânico ou local de sua preferência.",
    service3: "Realocação de Veículos",
    service3Desc: "Mudando ou vendeu um carro? Cuidamos da logística do seu veículo com profissionalismo.",
    service4: "Remoção de Sucata",
    service4Desc: "Transporte rápido e eficiente de veículos velhos para ferros-velhos ou reciclagem.",
    aboutTitle: "Sobre a BGE Services",
    aboutText: "A BGE Services oferece transporte e reboque de carros confiável e profissional em Connecticut. Transportamos com segurança veículos de pequeno e médio porte — como carros, SUVs e caminhonetes leves — seja para vender um veículo, rebocar um carro quebrado para um mecânico, realocar um carro ou levar um veículo velho para um ferro-velho. Nossa equipe oferece tempos de resposta rápidos, preços justos e serviço dependente.",
    areaTitle: "Áreas que Atendemos",
    areaSub: "Oferecemos atendimento 24h em todo o estado de Connecticut, incluindo as seguintes cidades:",
    footerHours: "Atendimento 24h - Todos os dias",
    footerAddress: "18 Erwin Ct, Newington, CT 06111"
  }
};
