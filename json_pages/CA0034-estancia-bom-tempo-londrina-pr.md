const handleCreateProperty = async () => {
setIsLoading(true);
setStatusMessage("");
setIsError(false);

    const propertyJsonData: PropertyData = {
      slug: "CA0034-estancia-bom-tempo-londrina-pr",
      pageTitle: "Casa com 6 Suítes no Condomínio Estância Bom Tempo | Londrina",
      whatsappMessage:
        "Olá! Tenho interesse na casa de 6 suítes (CA0034) no Estância Bom Tempo que vi no site. https://armangniimoveis.com.br/imovel/CA0034-estancia-bom-tempo-londrina-pr",
      pageDescription:
        "Casa de 360m² em terreno de 2.600m² no Estância Bom Tempo. 6 suítes, edícula completa, espaço gourmet e 8 vagas. Condomínio com lago e lazer.",
      headerImage:
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756210766/fpwros5f4msdgfudimpm.jpg",
      gallery: [
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756210767/d3fz5snz6rz4qzjhdcqn.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756210765/kwsl0rdhx45mrwm3vfae.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756210764/a8byn096zhcnzzkx67yy.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756210763/oy8pwsbdv02zhpzks4s7.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756210763/wc0ahsbaiczakh74kbgv.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756210766/fpwros5f4msdgfudimpm.jpg",
      ],
      hero: {
        title: "Residência Magnífica no Condomínio Estância Bom Tempo",
        subtitle:
          "360m² construídos em um terreno de 2.600m², com 6 suítes e uma edícula completa.",
      },
      details: {
        sectionTitle: "Luxo, Conforto e Funcionalidade",
        sectionDescription:
          "Uma propriedade construída em 2021 que oferece uma combinação perfeita de ambientes amplos, mobília planejada e um espaço de lazer ideal para a família.",
        subtitle: "Imóvel com edícula completa, ideal para hóspedes ou uso multifuncional.",
        paragraphs: [
          "Esta residência conta com 6 suítes espaçosas, 2 amplas salas de estar, lavabo e uma cozinha moderna e bem equipada. O imóvel é repleto de armários planejados na cozinha, closet e área de serviço, proporcionando excelente organização.",
          "O grande destaque é a edícula completa, com 1 quarto, 1 suíte, banheiro e cozinha, perfeita para receber com privacidade. A área gourmet, equipada com armários, e o amplo quintal complementam o espaço de lazer. A garagem acomoda 8 veículos.",
        ],
        descriptionTitle: "Destaques do Imóvel",
        differentiators: [
          "Terreno Amplo de 2.600 m²",
          "6 Suítes",
          "Edícula Completa para Hóspedes",
          "Espaço Gourmet com Armários",
          "8 Vagas de Garagem (3 Cobertas)",
          "Construção Recente (2021)",
        ],
      },
      video: {
        title: "Vídeo desta Casa no Estância Bom Tempo",
        subtitle: "Conheça cada detalhe em nosso vídeo exclusivo.",
        videoUrl: "https://youtu.be/Sq82XzyYZRk",
        description:
          "Assista ao vídeo para um tour completo pela residência, a edícula e o amplo quintal, destacando todos os diferenciais.",
        sectionDescription: "Dê o play e apaixone-se pelo seu futuro lar.",
      },
      investment: {
        price: 3500000,
        priceFormatted: "R$ 3.500.000",
        conditions: "Oportunidade de viver com exclusividade e segurança. Consulte as condições.",
      },
      condominium: {
        sectionTitle: "Condomínio Estância Bom Tempo",
        sectionDescription:
          "Reconhecido por sua infraestrutura e ambiente acolhedor, o condomínio oferece segurança e tranquilidade em uma das regiões mais valorizadas de Londrina.",
        image:
          "https://res.cloudinary.com/dhptebqcq/image/upload/v1757597270/de963fa5-aefa-4e7a-85f9-7465fe3b8fad.jpg",
        descriptionTitle: "Lazer e Contato com a Natureza",
        descriptionParagraphs: [
          "O condomínio oferece segurança 24 horas e uma área de lazer que inclui lago para pesca, quadras esportivas e playground, proporcionando qualidade de vida para toda a família.",
        ],
        amenities: [
          { icon: "shield-check", label: "Segurança 24h" },
          { icon: "water", label: "Lago" },
          { icon: "dribbble", label: "Quadras Esportivas" },
          { icon: "rocket", label: "Playground" },
        ],
      },
      location: {
        sectionDescription:
          "Localizado na Estância Bom Tempo, em uma das regiões mais valorizadas de Londrina, o condomínio oferece um ambiente seguro e tranquilo para sua família.",
        googleMapsUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8711.46402720306!2d-51.221876872586584!3d-23.362177076777602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb5cf960954923%3A0x9bfa244879509621!2sEst%C3%A2ncia%20Bom%20Tempo%2C%20Londrina%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1757594230392!5m2!1spt-BR!2sbr",
        address:
          "Rua Adalberto Luís Pirola, 2000 - Estância Bom Tempo, Londrina/PR - CEP: 86055-701",
        nearbyPoints: [
          {
            icon: "shopping-bag",
            label: "Catuaí Shopping",
            distance: "5 min",
          },
          {
            icon: "shopping-cart",
            label: "Supermercados",
            distance: "3 min",
          },
          {
            icon: "school",
            label: "Colégios de Referência",
            distance: "7 min",
          },
          {
            icon: "hospital",
            label: "Hospital do Coração",
            distance: "8 min",
          },
          {
            icon: "leaf",
            label: "Lago Igapó",
            distance: "10 min",
          },
        ],
        advantages: [
          "Condomínio de Prestígio",
          "Terreno Amplo e Privativo",
          "Segurança 24h",
          "Região Valorizada",
        ],
      },
      bedrooms: 6,
      bathrooms: 7,
      garageSpots: 8,
      suites: 6,
      totalArea: 2600,
      builtArea: 360,
      displayFeatures: [
        {
          label: "Terreno",
          value: "2.600m²",
          iconId: "home",
        },
        {
          label: "Área Construída",
          value: "360m²",
          iconId: "maximize",
        },
        {
          label: "Quartos",
          value: "6",
          iconId: "users",
        },
        {
          label: "Suítes",
          value: "6",
          iconId: "waves",
        },
        {
          label: "Banheiros",
          value: "7",
          iconId: "bath",
        },
        {
          label: "Vagas",
          value: "8",
          iconId: "car",
        },
      ],
      amenities: ["Edícula", "Espaço Gourmet", "Armários Planejados", "Lavabo", "Quintal"],
    };
