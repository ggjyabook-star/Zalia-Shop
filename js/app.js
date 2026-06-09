// Default Product Database (48 items using direct scraped Google Photos URLs)
const DEFAULT_PRODUCTS = [
  // Bolsas y Carteras
  {
    id: 'bc1',
    name: 'Bolsa de Mano Premium Elegante',
    category: 'bolsas-carteras',
    retailPrice: 280,
    wholesalePrice: 180,
    boxPrice: 140,
    pcsPerBox: 12,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPrBNH2gRxUrfHs8s0nK_2yncDetmUtk39oRVi4q3OZPcdtEOWxWmiZv6nKKHruwVkOi3_GvREFzF49xdVy9ELrdoe63KOYLkXg0ziTLLvC2h2CMxE',
    tag: 'Contenedor',
    desc: 'Bolsa de mano de tactopiel de alta resistencia con cierres y herrajes dorados reforzados.'
  },
  {
    id: 'bc2',
    name: 'Cartera de Dama Minimalista',
    category: 'bolsas-carteras',
    retailPrice: 120,
    wholesalePrice: 65,
    boxPrice: 48,
    pcsPerBox: 24,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOEnG_IJApaPLGgmjjvhJACli9SW-tRPAVre72l_EMvt7YR0W0mAo-vVbpSN9y1cl_R7G3x8l8QkIYK56g0Yjq3GkEHOTDvesJtIgq0fjhtTYV_-tc',
    tag: 'Oferta',
    desc: 'Cartera de mano ultra compacta con multiples tarjeteros, monedero con cierre y diseno elegante.'
  },
  {
    id: 'bc3',
    name: 'Bolsa Mochila 2 en 1 Multifuncional',
    category: 'bolsas-carteras',
    retailPrice: 250,
    wholesalePrice: 150,
    boxPrice: 110,
    pcsPerBox: 12,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNN9WkFGc7c_nyrHDyR_CpYZs199udTaD39fNbcrdlh3zb6Piq0DylDMLzjHTl43ni4gkksSWU8ThcG3acqKQo3w-V2moWMEyJNFxUvwSKvIn2VkFM',
    tag: 'Mas Vendido',
    desc: 'Bolsa convertible a mochila escolar o de viaje, diseno impermeable de nylon suave.'
  },
  {
    id: 'bc4',
    name: 'Cartera de Caballero en Piel Sintetica',
    category: 'bolsas-carteras',
    retailPrice: 90,
    wholesalePrice: 45,
    boxPrice: 32,
    pcsPerBox: 30,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMLxQ2lgE2p5OU-abzJmaniire97gCpTUDHmhNo5cIpx_Fj0wY_1Z9_BsJooWhdHyn4Y9nbRrC3nwIFxNnRcc8gDekgTWHs0znp2u6E95eGhgQwQWA',
    tag: 'Oferta',
    desc: 'Cartera clasica para caballero, ranuras para tarjetas multiples y proteccion RFID anti-clonado.'
  },
  {
    id: 'bc5',
    name: 'Bolsa Tote Casual de Algodon',
    category: 'bolsas-carteras',
    retailPrice: 180,
    wholesalePrice: 110,
    boxPrice: 85,
    pcsPerBox: 15,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMj37B6yCPFTmC1dUOyG-XNw_sFrB0dYa4I2SO48SouwCi4SvHOpqeVbMZUpITXdtATQ5WcvMDsZfvVutGOQri7wFJd06zj7VPKEGNi2p1e1OLn6Ew',
    tag: 'Novedad',
    desc: 'Bolsa tipo Tote ideal para playa, compras o salidas casuales. Tela ultra lavable y resistente.'
  },
  {
    id: 'bc6',
    name: 'Bandolera Juvenil de Moda',
    category: 'bolsas-carteras',
    retailPrice: 210,
    wholesalePrice: 130,
    boxPrice: 95,
    pcsPerBox: 12,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOcc9XJOpftOAiOqACL0O4AdH9vLUN7dmu8uB_5suiOJSP0djLFoGkEbs-AewgRD9TlWD7RgVrbkraflZK5x4T8BUBfSIEnT7rEtrzX5d4v-pIi4xA',
    tag: 'Tendencia',
    desc: 'Bolsa bandolera cruzada con correa ajustable estampada, compartimento con cierre suave.'
  },
  {
    id: 'bc7',
    name: 'Cartera Monedero con Cierre de Boton',
    category: 'bolsas-carteras',
    retailPrice: 100,
    wholesalePrice: 55,
    boxPrice: 40,
    pcsPerBox: 24,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczM4Mnl4PtUnrPolIfPzBXozTsBfmoANbuZuie_XiPUiXIH9juJsgUQc5NOOVpCinGsSRlnVVl9Rf8wv-RyfTd5LSGYEhl5etehucK2mUscmHMRd5LM',
    tag: 'Oferta',
    desc: 'Cartera monedero compacta con costuras reforzadas, boton metalico y diseno elegante.'
  },
  {
    id: 'bc8',
    name: 'Bolsa de Hombro Texturizada',
    category: 'bolsas-carteras',
    retailPrice: 290,
    wholesalePrice: 190,
    boxPrice: 145,
    pcsPerBox: 10,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNDS7gL1qIQZ_Pz5aJeziWAXOX1AfERRDNEOYw1Lyw2ngMFpELHv2CJ1Cc7fRfrgeUR3WRdweNVz6Ed2zDMmxkxrqDKVnvqguwWiz0TwQecMT7r-lM',
    tag: 'Importacion',
    desc: 'Bolsa de hombro de tactopiel grabada con patrones geometricos y doble compartimento.'
  },
  {
    id: 'bc9',
    name: 'Neceser de Viaje para Maquillaje',
    category: 'bolsas-carteras',
    retailPrice: 140,
    wholesalePrice: 80,
    boxPrice: 60,
    pcsPerBox: 20,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczP0ck5zezBnrbSSITjKiWrB8vxYEKNjhWep5piyc0sC3IYLOn8ZXMiH1kzXNDrrMpbsVNs0n_Md8FzaOxO19yg3zebB1-z5nLRaNrqUvx2DQY6VYyE',
    tag: 'Organizador',
    desc: 'Neceser impermeable de viaje con ganchos para colgar y compartimentos de red transparentes.'
  },
  {
    id: 'bc10',
    name: 'Bolsa Clutch de Noche con Cadena',
    category: 'bolsas-carteras',
    retailPrice: 230,
    wholesalePrice: 140,
    boxPrice: 105,
    pcsPerBox: 12,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNt8Oo4lZCz60E_-GREGBSGBfEgcTOqw1rh1PbGO6ITfaoBsT8eNuKlNOtYgjqt3uLQAUIPEcTURrXOvp6DjDUbyB_d8IXSRRKmn31_hmMD2iMJaQk',
    tag: 'Elegante',
    desc: 'Bolso de mano tipo clutch para eventos de noche con cadena dorada desmontable.'
  },
  {
    id: 'bc11',
    name: 'Bolsa de Mano Clasica con Compartimentos',
    category: 'bolsas-carteras',
    retailPrice: 270,
    wholesalePrice: 170,
    boxPrice: 130,
    pcsPerBox: 12,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczP-Wn3Li0zzDLVZMUW167vYuaJ2pm-rY50CAf0Q-7jOxtPFxUrIGIABlfu4LTryZhxpbvDQ3xIaktO7QtQzK6NoyM-xFiOv0m8yItpZITbiSwFTMXA',
    tag: 'Mas Vendido',
    desc: 'Bolsa de mano espaciosa con 3 divisiones principales con cierre y bolsillos laterales.'
  },
  {
    id: 'bc12',
    name: 'Cartera Larga con Tarjetero Expandible',
    category: 'bolsas-carteras',
    retailPrice: 130,
    wholesalePrice: 70,
    boxPrice: 52,
    pcsPerBox: 24,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczN-MngpJrHmuuCG-Q0LzsVQkCx0IpVLcb80VSUTRZefgbXyOaWR8YCf2bM0FBErIC2yWkhc1JJI1ROcbKXiH4RlELc8NaEqvhgpTAfebpcCWLypQ-A',
    tag: 'Novedad',
    desc: 'Cartera ejecutiva larga para dama con capacidad de hasta 16 tarjetas y cierre seguro.'
  },

  // Mochilas
  {
    id: 'mc1',
    name: 'Mochila Escolar Reforzada',
    category: 'mochilas',
    retailPrice: 220,
    wholesalePrice: 140,
    boxPrice: 105,
    pcsPerBox: 10,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOJ03-pWRDyK9mK25vw8AVPKEp2O9rWs4LwKz3R0eGFbzXPs16ankTj6h2tS6mVdmFeUZENXRzhmVZXAXyq0euIXyCrGBH6ALqv-IYymdtmiwBKzcs',
    tag: 'Escolar',
    desc: 'Mochila escolar de alta resistencia con costuras dobles, compartimento amplio y tirantes acolchados.'
  },
  {
    id: 'mc2',
    name: 'Mochila Ejecutiva Porta-Laptop',
    category: 'mochilas',
    retailPrice: 320,
    wholesalePrice: 195,
    boxPrice: 150,
    pcsPerBox: 10,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNg7ZjLULu239rlOpcraqFLxeyEXwwxnT_fz-Cyx0rj_rXPsm7kSFm8NjKiFjUUBxtba8QxE1J560kzUYe2E9E8hvwmRaH8hqvV_lbQ71mW1ZUWSaE',
    tag: 'Impermeable',
    desc: 'Mochila ejecutiva impermeable con compartimento acolchado para laptop de 15.6 pulgadas y puerto USB.'
  },
  {
    id: 'mc3',
    name: 'Mochila Infantil de Ruedas',
    category: 'mochilas',
    retailPrice: 350,
    wholesalePrice: 220,
    boxPrice: 175,
    pcsPerBox: 8,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPvhKPwfup1ln3GRxVA11t7QsmwJ-5SU_D5Lqu9rFYe5a7updclJ1R-9TYOAfSTfaL55eIZkTHWqtZyotHaI0rfbAefEjCa7y7ZSuhrm5jrt0tnBEw',
    tag: 'Infantil',
    desc: 'Mochila con carrito de aluminio reforzado, ruedas de gel silenciosas de alta durabilidad.'
  },
  {
    id: 'mc4',
    name: 'Mochila Deportiva Ligera',
    category: 'mochilas',
    retailPrice: 160,
    wholesalePrice: 95,
    boxPrice: 70,
    pcsPerBox: 20,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOB2FphTvhTd1RHYBspY5V_JKwDCJkxx2J8UjVnt3kAfAyblwEOVnve0-mTmaoKKkkZWiQLz-hVGXy3Hz3TOxtP1B0U8B01KqbhBcQUWBx80C9crII',
    tag: 'Liquidacion',
    desc: 'Mochila ultra ligera de nylon de alta densidad, ideal para entrenamientos o paseos cortos.'
  },
  {
    id: 'mc5',
    name: 'Mochila Militar Tactica Impermeable',
    category: 'mochilas',
    retailPrice: 380,
    wholesalePrice: 240,
    boxPrice: 185,
    pcsPerBox: 8,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPEctlAcqoCUeSM-GP1-TaX9emhStWMbB-I207zdNJ0GCVoOAOK17vKn6OO03Gj0nDnOd6ApKDOr12xTLRMkJzG3CNR-HitAPdWBq3MpAbJBYbAHJc',
    tag: 'Ruda',
    desc: 'Mochila tactica de poliester militar 600D, compartimentos multiples y sistema MOLLE.'
  },
  {
    id: 'mc6',
    name: 'Mochila de Hombro Cruzada',
    category: 'mochilas',
    retailPrice: 150,
    wholesalePrice: 85,
    boxPrice: 62,
    pcsPerBox: 20,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOSNLmS-mWmOanWwG5IHW5l0_6vV4f1suIlLN9TwwLAQTS1X_soYB_rlPjC6gnfsE-anoIMrBeeGGdSQewksavh5LzqosR5-2zZ-ebevfKdQQrLwrE',
    tag: 'Novedad',
    desc: 'Mochila cruzada tipo mariconera con puerto USB y diseno ergonomico antirrobo.'
  },
  {
    id: 'mc7',
    name: 'Mochila Escolar Kawaii con Llavero',
    category: 'mochilas',
    retailPrice: 240,
    wholesalePrice: 150,
    boxPrice: 115,
    pcsPerBox: 12,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOxDkMLYzDeoEznu5FvN_UKkQi1DL5myv_M89X0nwpn8HY1hjBoZhkCL6Q5kc2Ec8oCMGftHejdMRlKnwIo5LjLFUs7w-HRuF-fjR6KU1FMyLcHxEA',
    tag: 'Infantil',
    desc: 'Mochila escolar de diseno kawaii con compartimento para termos y llavero de peluche incluido.'
  },
  {
    id: 'mc8',
    name: 'Mochila de Viaje Expandible 40L',
    category: 'mochilas',
    retailPrice: 450,
    wholesalePrice: 280,
    boxPrice: 220,
    pcsPerBox: 8,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOUNfe-kMxIw9-t9PXLcFcNjGWaoiu9ogiVv9Bmo5lPoYbr54N_JXNU9LNLMgUrRm7ymWySxjILLlEDgxrqS1wklSVo8bmjY9QI7kDErssU1We7lvI',
    tag: 'Viajero',
    desc: 'Mochila de viaje expandible apta para cabina de avion, correas de compresion y organizadores.'
  },
  {
    id: 'mc9',
    name: 'Mochila Basica Universitaria',
    category: 'mochilas',
    retailPrice: 180,
    wholesalePrice: 110,
    boxPrice: 85,
    pcsPerBox: 15,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMm4nnCZm_55enYotqmiVgpQZiB0IWjAjd9E7y_syFwiGwDTfQxO84iIdLyFiN5mYl65o66BZYQRytttPSSZYfOHN1czDAMPCALXmKb0PBHi1XVsMQ',
    tag: 'Oferta',
    desc: 'Mochila escolar clasica de lona resistente, ideal para preparatoria o universidad.'
  },
  {
    id: 'mc10',
    name: 'Mochila de Ruedas Juvenil 3D',
    category: 'mochilas',
    retailPrice: 360,
    wholesalePrice: 230,
    boxPrice: 180,
    pcsPerBox: 8,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOV1RcAymXKlT2C5GHwtqlSQKAtqPswVjCbyAH43uUJgMq-iilWf2olj9h1bBO5fmPLrgQjz0I6CfO0kh2iRE1RrwDhSUYvzwrySrjJLnFSiOrLYnI',
    tag: 'Escolar',
    desc: 'Mochila con ruedas con diseno frontal en relieve 3D, baston de aluminio de doble nivel.'
  },
  {
    id: 'mc11',
    name: 'Pañalera Mochila Multifuncional',
    category: 'mochilas',
    retailPrice: 340,
    wholesalePrice: 210,
    boxPrice: 160,
    pcsPerBox: 10,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczM7W2MMgq3E5ZB15usNT1Lfih9XmgYvHj9Ahb7ERaHUmf73S5dxVCpqk0rHthKdIxgBC09F3gesaA2teuWVoLTxNXBqXTk4kMSkB9KvPVBZbdyLvss',
    tag: 'Para Bebes',
    desc: 'Mochila panalera con bolsillos termicos para biberones y dispensador de toallitas humedas.'
  },
  {
    id: 'mc12',
    name: 'Mochila Mini de Moda para Dama',
    category: 'mochilas',
    retailPrice: 190,
    wholesalePrice: 115,
    boxPrice: 88,
    pcsPerBox: 15,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPCxjs5A-dKRM_u2z-tNit4cib4dcjyaOyoB6snrSnRWi0wMGa5-yLLktRcizr7mihTbfmEUmeeHvfY7iNT8ze_7hNZpuP9BJjvOGqLs-XoPQl50oQ',
    tag: 'Tendencia',
    desc: 'Mochila miniatura de tactopiel suave con estoperoles decorativos y tirantes ajustables.'
  },

  // Accesorios y Más
  {
    id: 'ac1',
    name: 'Audifonos Bluetooth Diadema Pro',
    category: 'accesorios-mas',
    retailPrice: 170,
    wholesalePrice: 90,
    boxPrice: 72,
    pcsPerBox: 12,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOrqBOAdEVmJqxj47MiJ6XYjDfIaKzRE-kK0qYBbK-VAy4HgLZAx7Ddyqmfgcy8vneBdNcwaaYmdG7YcrSKy-imKomsTr2b6T0Z_RxBzoYFSwkUqIE',
    tag: 'Tecnologia',
    desc: 'Audifonos inalambricos recargables con microfono manos libres y cancelacion de ruido pasiva.'
  },
  {
    id: 'ac2',
    name: 'Termo de Acero Inoxidable con Temp.',
    category: 'accesorios-mas',
    retailPrice: 130,
    wholesalePrice: 75,
    boxPrice: 58,
    pcsPerBox: 24,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNiH7KvjgTNHhX7DKSxZ9AY4wBtQzlOgSYssVny8GQBZ4gqjzrBkO--SLc79uUoer_rtiQOlLP4nOcUpOhsHEueAtWO2VHKCaUpXcPjlsEVvTGo254',
    tag: 'Ecologico',
    desc: 'Termo inteligente de acero inoxidable con sensor de temperatura LED tactil en tapa.'
  },
  {
    id: 'ac3',
    name: 'Set de Brochas de Maquillaje (12 pzs)',
    category: 'accesorios-mas',
    retailPrice: 95,
    wholesalePrice: 50,
    boxPrice: 38,
    pcsPerBox: 20,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPgVsVZADJo-733pyd3kasgvIZdVfvqJkmSBkDm0bgUm0YTElAPVP075ZKFwSW_P5mrcuxKF5YibC0Yyroihbs4E8zEnz_TbH7Jf2lYp6_tIxgavew',
    tag: 'Belleza',
    desc: 'Estuche portatil con 12 brochas profesionales de cerdas sinteticas suaves y mangos de madera.'
  },
  {
    id: 'ac4',
    name: 'Luz Led de Lectura Recargable',
    category: 'accesorios-mas',
    retailPrice: 70,
    wholesalePrice: 35,
    boxPrice: 24,
    pcsPerBox: 30,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMszmTT5pr0JO4Ilv6q_ILs7TEUJLD_ef6AGutE3_4WsSmiojWFEF5qKAwJseXL-O119sb7CutIjwiqK77Aek5GZsCOfHGVrCYwtjJzd_X8-U8KzUI',
    tag: 'Hogar',
    desc: 'Lampara de lectura con clip de sujecion, bateria recargable por USB y 3 intensidades de luz.'
  },
  {
    id: 'ac5',
    name: 'Cargador Portatil Powerbank 10000mAh',
    category: 'accesorios-mas',
    retailPrice: 180,
    wholesalePrice: 110,
    boxPrice: 88,
    pcsPerBox: 15,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMdhmBpVFmgZCpxhEU6o6xnuDMwAogP9-qY7uoLTJZtuda5yQhF_bYDyKKj6_nKKFmRZKE1i-gJKz6-mVoe7_q7BVhdoqjZHm9tNVWFEXrFBt2ljDM',
    tag: 'Tecnologia',
    desc: 'Bateria externa powerbank con doble salida USB y carga rapida 2A compatible con Android/iOS.'
  },
  {
    id: 'ac6',
    name: 'Humidificador Difusor Ultrasónico',
    category: 'accesorios-mas',
    retailPrice: 150,
    wholesalePrice: 85,
    boxPrice: 65,
    pcsPerBox: 16,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPw5BYlO4_NH-CCSvPJTA0JrLEmVZ6nQcHP4kS56uxRPtVh8y8x5ZaYQZtUZOjcetMtBvivzlteHJq8o3IXmC6GRdCTEGTElOsh3FGHRaQnmzZnqHc',
    tag: 'Hogar',
    desc: 'Difusor de aroma y humidificador con luces LED de colores y conexion USB para oficina u hogar.'
  },
  {
    id: 'ac7',
    name: 'Soporte de Celular para Auto con Pinza',
    category: 'accesorios-mas',
    retailPrice: 80,
    wholesalePrice: 40,
    boxPrice: 28,
    pcsPerBox: 30,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOz1wQAWPj-G2eQn0gbYxyLhRUmSh6iUtPksY9ITpWqobLvoUO8Bp5tDQc07OW41nlJz1GxbaM86xrowYDp22pE9WoCxLeYNBRG3cCLmahbHOLao9w',
    tag: 'Novedad',
    desc: 'Soporte universal para rejilla de aire acondicionado con pinzas de ajuste automatico por gravedad.'
  },
  {
    id: 'ac8',
    name: 'Mini Bocina Bluetooth Impermeable',
    category: 'accesorios-mas',
    retailPrice: 160,
    wholesalePrice: 95,
    boxPrice: 72,
    pcsPerBox: 20,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczORknH0MNsO5Y7s94M4cDpzttW-22nlZlKB05UTzw4_aTLGwSEJR-WT9xQ8Bv1ZYouiFLYHh6b2jOnGxqwWdCdbGdXcAT3BJm-rsHqNY2n3eUbKBWU',
    tag: 'Musica',
    desc: 'Bocina bluetooth portatil resistente a salpicaduras con ventosa de sujecion para ducha.'
  },
  {
    id: 'ac9',
    name: 'Lampara Escritorio Led Flexible',
    category: 'accesorios-mas',
    retailPrice: 110,
    wholesalePrice: 60,
    boxPrice: 45,
    pcsPerBox: 24,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPacHEwiaYr6o6Gjmt_Lt0MxOfax89UTqcrNdbNPYwqZK4P7po17YmtNLnKHH8yLQ3LA2QgRZybzJ_KHJqhi2GDVfJou-0SMmjCdrB_aZUjTGbqESE',
    tag: 'Oficina',
    desc: 'Lampara de escritorio recargable por USB con cuello de cisne flexible y control tactico de brillo.'
  },
  {
    id: 'ac10',
    name: 'Aro de Luz Led para Selfies',
    category: 'accesorios-mas',
    retailPrice: 60,
    wholesalePrice: 30,
    boxPrice: 19,
    pcsPerBox: 40,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOx90albeANBkpzsQnLwuYMDDc-6oKd9ezOrJoc9PE3JPnHvbLz5RWec8A4sefzDEaLi2HIICAxCM5OE8UJPVkExNcc9rzxNyLMOqQg1Sclbfi8lFA',
    tag: 'Belleza',
    desc: 'Aro de luz clip para camara frontal de celular con 3 tonos de luz para selfies y videos.'
  },
  {
    id: 'ac11',
    name: 'Cable USB Multi-Entrada 3 en 1',
    category: 'accesorios-mas',
    retailPrice: 50,
    wholesalePrice: 25,
    boxPrice: 15,
    pcsPerBox: 50,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczN98TrX0F6GUqSZ_xfnCmY_3CUY5mXipnxWLlK0TbrHNxc0BY8REXYDtXSXg38h-jnfyj-tHHEHfofVEqFCPRLoPTIddWwbwRVnxVkZaligOCZIpiU',
    tag: 'Oferta',
    desc: 'Cable reforzado de nylon trenzado con conectores Tipo C, Lightning y Micro USB en uno solo.'
  },
  {
    id: 'ac12',
    name: 'Reloj Despertador Digital Led',
    category: 'accesorios-mas',
    retailPrice: 140,
    wholesalePrice: 80,
    boxPrice: 62,
    pcsPerBox: 20,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMZKLZR2mFYnOeaTASHfwaETREMB-inSbleZlrDMr7wZsDO6WnQmzOLhlaVX_UULWHHmrGw7l8SMLn6MrfHQwm_kf8OEXIJsJFZiQ0Bk_1Bvrxq3AQ',
    tag: 'Hogar',
    desc: 'Reloj despertador con pantalla LED, indicador de temperatura y sensor de luz nocturna.'
  },

  // Peluches
  {
    id: 'pl1',
    name: 'Oso de Peluche Clasico Gigante (80cm)',
    category: 'peluches',
    retailPrice: 390,
    wholesalePrice: 250,
    boxPrice: 190,
    pcsPerBox: 5,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczO4jGrQQ5oCQj4XiKe3ueH4UURsliWbLu826awYbzJVfUsPWE3g-ItlwX5NPm588-O7-YTpZuP5Z7wg-m8nCCcsELyn6_cXDsiSdqdg6OXycb51oRA',
    tag: 'Favorito',
    desc: 'Peluche gigante de felpa ultra suave, relleno de algodon antialergico de alta recuperacion.'
  },
  {
    id: 'pl2',
    name: 'Peluche de Aguacate Llavero',
    category: 'peluches',
    retailPrice: 40,
    wholesalePrice: 20,
    boxPrice: 13,
    pcsPerBox: 50,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMG5wiO2fxjI4nYrx2ggtQGSgIBTr7YafTs7gahxMfR_ETpf6-cF_wUyTP5tTIm03qm9sCxAxlry5aoWkgr7cx4kpjlSRzGrqdCIL-ZWS1M7XLKZ9A',
    tag: 'Novedad',
    desc: 'Llavero de felpa en forma de aguacate kawaii con carita sonriente, ideal para detalles.'
  },
  {
    id: 'pl3',
    name: 'Dinosaurio de Felpa Abrazo Largo',
    category: 'peluches',
    retailPrice: 150,
    wholesalePrice: 85,
    boxPrice: 62,
    pcsPerBox: 12,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMbn1I6FJ2Gqv_jUAVvzC2V8VRiBySZ9vtA3vALUOx1wneBPiOKzJr-l2v1TDZcnO4ym5MvonhKRWACytlEMwHfzka4Y1y2gQVxyjbvKlp-6SHJPd4',
    tag: 'Ultimas Piezas',
    desc: 'Peluche alargado ergonomico de dinosaurio suave para abrazar al dormir.'
  },
  {
    id: 'pl4',
    name: 'Pulpito Reversible de Emociones',
    category: 'peluches',
    retailPrice: 60,
    wholesalePrice: 30,
    boxPrice: 19,
    pcsPerBox: 40,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMNnXFyRG2BRpiw_Jp3Rd1IpAG24cNgomuscDiAmGPlcz23v4zNJPaGRByUGYsYMB00fnv2y3YbvhiwQTDanAfAq-1ws7gjfRJIEOsN-cVW2Dmrmok',
    tag: 'Clasico',
    desc: 'Peluche bicolor reversible que muestra estado de animo contento o enojado.'
  },
  {
    id: 'pl5',
    name: 'Peluche de Unicornio de Colores (30cm)',
    category: 'peluches',
    retailPrice: 160,
    wholesalePrice: 95,
    boxPrice: 70,
    pcsPerBox: 15,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPAk8B2B3q1awSlZr9jh3EwqDTZ2-uA6qcAT-8P7zhY81dcYCva13J2O_TOrz8joEuzA5ioeetUwf4pa5xERe_edqneDCYI9qEhZ-S-IgoykkeXfBM',
    tag: 'Favorito',
    desc: 'Lindo unicornio con detalles dorados brillosos y felpa de colores pastel antialergica.'
  },
  {
    id: 'pl6',
    name: 'Llavero de Peluche de Animalito Kawaii',
    category: 'peluches',
    retailPrice: 35,
    wholesalePrice: 18,
    boxPrice: 11,
    pcsPerBox: 60,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPNI8Hl9QzrqFNd68nuT5qxIWqQqe7pz2IU7pzdaAvoNopWdbFzuhLRvKolJOj1hfzGJRHl-yISNi9VJF_oAGlW8k51aSbObNI_I0-a0ICsRJOcbQs',
    tag: 'Novedad',
    desc: 'Llaveros de felpa de animalitos variados (pandas, conejos, gatitos) ideales para mochilas.'
  },
  {
    id: 'pl7',
    name: 'Peluche de Jirafa Gigante (60cm)',
    category: 'peluches',
    retailPrice: 280,
    wholesalePrice: 170,
    boxPrice: 130,
    pcsPerBox: 8,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMdclEgLUWVG2I73ALDlBPPRYjPLk3SvBEYG9u9zkrBIyuqc5Wc1PH1cElTqOoeGlqu0dsj75QaLr4PtCWQwNprZsfK_0cjqrMecaPOdkGWrJjIbPs',
    tag: 'Importacion',
    desc: 'Jirafa de felpa con estructura interna suave que se mantiene de pie, ideal para decoracion.'
  },
  {
    id: 'pl8',
    name: 'Peluche de Gato Gordo Cojin',
    category: 'peluches',
    retailPrice: 180,
    wholesalePrice: 110,
    boxPrice: 85,
    pcsPerBox: 12,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPyQJgO-geJe2D-gtqxj3n-rJCG0uwHBwU2m1VcbwmSH4NgVv_I4Tn2K8wlWVEzUlfjU2-wYD_XuR-ZaQWT-pdSZBW2r6VJdEaLZySzk67QPOnSfdM',
    tag: 'Cozy',
    desc: 'Cojin abrazable en forma de gato de felpa elastica supersuave, relleno de algodon memory foam.'
  },
  {
    id: 'pl9',
    name: 'Peluche de Conejo con Orejas Largas',
    category: 'peluches',
    retailPrice: 140,
    wholesalePrice: 80,
    boxPrice: 60,
    pcsPerBox: 20,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMIcvSh5fATqTeo1D36yQnSV_f3WLOUlmUpFiIX80a9wGZqKvaLzFySUP0WMMNeGeL9c0O0ZeGWXWbKrNWMuzbRi_QXJaWOEn-Hulq7RVfxZX_sutI',
    tag: 'Infantil',
    desc: 'Conejo de peluche con orejas largas y caidas, tela texturizada ultra tierna para bebes.'
  },
  {
    id: 'pl10',
    name: 'Peluche Almohada de Zanahoria Kawaii',
    category: 'peluches',
    retailPrice: 170,
    wholesalePrice: 100,
    boxPrice: 75,
    pcsPerBox: 12,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMxiY6IhSchtE8O2sWpBbPdIksDIEgJTOPCwfMGtO8FPC8s4Y7qAKU7axk_l6977JeX-zPUVjSjaiLClWlPz1QGGLYEqAwyhmM_a8lP4sy1Re8lx7Y',
    tag: 'Novedad',
    desc: 'Almohada con diseno de zanahoria gigante feliz, ideal para recostarse o decorar la cama.'
  },
  {
    id: 'pl11',
    name: 'Peluche de Osito con Corazon (35cm)',
    category: 'peluches',
    retailPrice: 150,
    wholesalePrice: 90,
    boxPrice: 68,
    pcsPerBox: 16,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNlmoUEiRKdxsigx_u9o1bQdtOxtNPGXwpdGJq-G6UxPZJ_nxCBXOZBnoYe-OVr6u1a6WpUd0FDc-IWYSoVbXIoB_rGIJB-OMdoPIEI5Yo9W9RmhJM',
    tag: 'Regalo',
    desc: 'Clasico osito de peluche cargando un corazon bordado con la frase "Te Quiero".'
  },
  {
    id: 'pl12',
    name: 'Peluche de Ajolote Mexicano',
    category: 'peluches',
    retailPrice: 120,
    wholesalePrice: 68,
    boxPrice: 50,
    pcsPerBox: 20,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOvGs3Z0nlPe4Q3xFH3S_YeyYlnfprq1dfpGdm3-Zva9qqWf1EH3PSS2GpKQJGek0eJtpaZZKU6qYR3yvo-YUAYniOyUmhBRIy2rEjvHvRdqxWsRmI',
    tag: 'Nacional',
    desc: 'Peluche de ajolote kawaii con branquias de felpa suave y colores vibrantes rosados.'
  }
];

// Album links mapping
const PHOTO_ALBUMS = {
  'bolsas-carteras': 'https://photos.app.goo.gl/AdWXRuyVsDtofdf98',
  'mochilas': 'https://photos.app.goo.gl/cvWhkoSWzJNGAPFZ9',
  'peluches': 'https://photos.app.goo.gl/iY5eHKvz9iuS8vn2A',
  'accesorios-mas': 'https://photos.app.goo.gl/hLSqQwHKLHsUMKwd9'
};

// Retrieve active products list (loads custom upload if stored in localStorage)
function getActiveProducts() {
  const custom = localStorage.getItem('zalia_custom_products');
  if (custom) {
    try {
      const items = JSON.parse(custom);
      if (items.length > 0) return items;
    } catch(e) {
      console.error("Error reading custom catalog", e);
    }
  }
  return DEFAULT_PRODUCTS;
}

// App State
let cart = [];
let activeCategory = 'bolsas-carteras';
let searchQuery = '';

// DOM Elements
const productGrid = document.getElementById('product-grid');
const tabsContainer = document.getElementById('tabs-container');
const searchInput = document.getElementById('search-input');
const albumBtn = document.getElementById('album-link-btn');
const albumCategoryName = document.getElementById('album-category-name');
const cartDrawer = document.getElementById('cart-drawer');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountBadge = document.getElementById('cart-count');
const cartHeaderCount = document.getElementById('cart-header-count');
const subtotalEl = document.getElementById('cart-subtotal');
const savingsEl = document.getElementById('cart-savings');
const totalEl = document.getElementById('cart-total');
const clientNameInput = document.getElementById('client-name');
const clientCityInput = document.getElementById('client-city');
const clientTypeSelect = document.getElementById('client-type');
const themeToggleBtn = document.getElementById('theme-toggle');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const quoteForm = document.getElementById('quote-form');

// Initialize Website
function init() {
  renderTabs();
  renderCatalog();
  setupEventListeners();
  loadCartFromStorage();
  checkDarkModePref();
}

// Check Dark Mode Preference
function checkDarkModePref() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode-active');
    updateThemeIcon(true);
  } else {
    document.body.classList.remove('dark-mode-active');
    updateThemeIcon(false);
  }
}

// Toggle Dark Mode Icon
function updateThemeIcon(isDark) {
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }
}

// Render Tabs Control
function renderTabs() {
  const categoriesMap = {
    'bolsas-carteras': 'Bolsas y Carteras',
    'mochilas': 'Mochilas',
    'peluches': 'Peluches',
    'accesorios-mas': 'Accesorios y Más'
  };

  if (!tabsContainer) return;

  tabsContainer.innerHTML = '';
  Object.keys(categoriesMap).forEach(key => {
    const button = document.createElement('button');
    button.className = `tab-btn ${key === activeCategory ? 'active' : ''}`;
    button.textContent = categoriesMap[key];
    button.setAttribute('data-category', key);
    button.addEventListener('click', () => {
      activeCategory = key;
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update Google Photos redirection text and link
      albumBtn.setAttribute('href', PHOTO_ALBUMS[key]);
      albumCategoryName.textContent = categoriesMap[key];

      renderCatalog();
    });
    tabsContainer.appendChild(button);
  });

  // Set initial album info
  albumBtn.setAttribute('href', PHOTO_ALBUMS[activeCategory]);
  albumCategoryName.textContent = categoriesMap[activeCategory];
}

// Render Catalog Grid (Simplified - No Piece/Box Redundant buttons)
function renderCatalog() {
  if (!productGrid) return;
  productGrid.innerHTML = '';

  const activeProducts = getActiveProducts();
  const filteredProducts = activeProducts.filter(prod => {
    const matchesCategory = prod.category === activeCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fas fa-box-open" style="font-size: 3rem; margin-bottom: 16px;"></i>
        <p>No se encontraron productos en esta categoría.</p>
      </div>
    `;
    return;
  }

  filteredProducts.forEach(product => {
    // Check if item is already in cart to display existing quantity
    const cartItem = cart.find(item => item.id === product.id);
    const initialQty = cartItem ? cartItem.qty : 1;

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="badge-tag">${product.tag || 'Contenedor'}</span>
        <span class="badge-tag tag-import">Importación</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px; height: 40px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
          ${product.desc || ''}
        </p>
        
        <span class="pcs-box-badge">
          <i class="fas fa-boxes"></i> Caja cerrada con: <strong>${product.pcsPerBox} pzs</strong>
        </span>

        <div class="product-prices">
          <div class="price-box retail">
            <span class="price-label">1-2 Pzs</span>
            <span class="price-value">$${product.retailPrice}</span>
          </div>
          <div class="price-box wholesale">
            <span class="price-label">Mayoreo (3+)</span>
            <span class="price-value">$${product.wholesalePrice}</span>
          </div>
          <div class="price-box box-tier">
            <span class="price-label">Caja (pza)</span>
            <span class="price-value">$${product.boxPrice}</span>
          </div>
        </div>

        <div class="product-actions">
          <div class="quantity-control" style="width: 110px;">
            <button class="qty-btn minus" data-id="${product.id}">-</button>
            <input type="number" class="qty-val" id="qty-input-${product.id}" value="${initialQty}" style="width: 46px; -moz-appearance: textfield;">
            <button class="qty-btn plus" data-id="${product.id}">+</button>
          </div>
          <button class="btn-add-card add-to-cart-btn" data-id="${product.id}" style="font-size: 0.95rem;">
            <i class="fas fa-shopping-cart"></i> Agregar Piezas
          </button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });

  setupCardControls();
}

// Bind + / - and Add to Cart Buttons (Scoped inside productGrid to avoid cart input collisions)
function setupCardControls() {
  if (!productGrid) return;

  // Plus Buttons
  productGrid.querySelectorAll('.qty-btn.plus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      const input = document.getElementById(`qty-input-${id}`);
      if (input) {
        let val = parseInt(input.value) || 0;
        input.value = val + 1;
      }
    });
  });

  // Minus Buttons
  productGrid.querySelectorAll('.qty-btn.minus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      const input = document.getElementById(`qty-input-${id}`);
      if (input) {
        let val = parseInt(input.value) || 0;
        if (val > 1) {
          input.value = val - 1;
        }
      }
    });
  });

  // Direct quantity input change
  productGrid.querySelectorAll('.qty-val').forEach(input => {
    input.addEventListener('change', () => {
      let val = parseInt(input.value) || 1;
      if (val < 1) val = 1;
      input.value = val;
    });
  });

  // Add To Cart Buttons
  productGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      const input = document.getElementById(`qty-input-${id}`);
      const qty = input ? (parseInt(input.value) || 1) : 1;

      addToCart(id, qty);
      
      // Visual Feedback
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> ¡Agregado!';
      btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.style.background = '';
      }, 1500);
    });
  });
}

// Add Item To Cart (With robust loose ID matching and types sanitation)
function addToCart(productId, qty) {
  const activeProducts = getActiveProducts();
  const product = activeProducts.find(p => String(p.id).trim() === String(productId).trim());
  if (!product) return;

  const cartIndex = cart.findIndex(item => String(item.id).trim() === String(productId).trim());

  if (cartIndex > -1) {
    cart[cartIndex].qty = parseInt(qty) || 1; 
  } else {
    cart.push({
      id: String(product.id).trim(),
      name: product.name,
      wholesalePrice: Number(product.wholesalePrice) || 0,
      retailPrice: Number(product.retailPrice) || 0,
      boxPrice: Number(product.boxPrice) || 0,
      pcsPerBox: Number(product.pcsPerBox) || 12,
      image: product.image,
      qty: Math.max(1, parseInt(qty) || 1)
    });
  }

  saveCartToStorage();
  renderCart();
  toggleCart(true); // Slide out cart
}

// Update Cart Quantity Directly in Drawer (With robust loose ID matching and types sanitation)
function updateCartQty(productId, newQty) {
  const cartIndex = cart.findIndex(item => String(item.id).trim() === String(productId).trim());
  if (cartIndex > -1) {
    const qtyInt = parseInt(newQty) || 0;
    if (qtyInt <= 0) {
      removeFromCart(productId);
    } else {
      cart[cartIndex].qty = qtyInt;
      saveCartToStorage();
      renderCart();
    }
  }
}

// Remove Item From Cart (With robust loose ID matching)
function removeFromCart(productId) {
  cart = cart.filter(item => String(item.id).trim() !== String(productId).trim());
  saveCartToStorage();
  renderCart();
  renderCatalog(); // Sync catalog inputs
}

// Render Cart Drawer Contents (Calculates 3 tiers automatically with absolute type safety)
function renderCart() {
  if (!cartItemsContainer) return;
  cartItemsContainer.innerHTML = '';
  
  // Total pieces in cart (used for MIXED WHOLESALE rule)
  const totalPiecesInCart = cart.reduce((sum, item) => sum + (parseInt(item.qty) || 0), 0);
  const isWholesaleMixed = totalPiecesInCart >= 3;

  cartCountBadge.textContent = totalPiecesInCart;
  cartHeaderCount.textContent = totalPiecesInCart;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-msg">
        <i class="fas fa-shopping-basket" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 16px; display:block;"></i>
        Tus productos cotizados aparecerán aquí. ¡Agrega algunos del catálogo!
      </div>
    `;
    subtotalEl.textContent = '$0 MXN';
    savingsEl.textContent = '$0 MXN';
    totalEl.textContent = '$0 MXN';
    return;
  }

  let finalSubtotal = 0; // Total actually charged
  let regularRetailTotal = 0; // Cost if everything was bought individually at normal retail price

  cart.forEach(item => {
    let pricePerPiece = 0;
    let tierLabel = '';
    let promptTip = '';
    const qty = parseInt(item.qty) || 1;
    const pcsPerBox = parseInt(item.pcsPerBox) || 12;

    // Automatic Pricing Tier Selection
    if (qty >= pcsPerBox) {
      // Box price applied (Quantity of this item equals or exceeds one full box capacity)
      pricePerPiece = Number(item.boxPrice) || 0;
      tierLabel = 'Precio Caja';
      
      const boxesCount = Math.floor(qty / pcsPerBox);
      const remainder = qty % pcsPerBox;
      if (remainder > 0) {
        promptTip = `<small style="color:var(--secondary); display:block; margin-top:2px;">📦 Llevas ${boxesCount} caja(s) y ${remainder} pzs sueltas con precio caja</small>`;
      } else {
        promptTip = `<small style="color:var(--success); display:block; margin-top:2px;">📦 Llevas exactamente ${boxesCount} caja(s) cerrada(s)</small>`;
      }
    } else if (isWholesaleMixed) {
      // Wholesale price applied (Total pieces of all products in cart is 3 or more)
      pricePerPiece = Number(item.wholesalePrice) || 0;
      tierLabel = 'Precio Mayoreo';
      
      // Tip to unlock Box Price
      const diff = pcsPerBox - qty;
      promptTip = `<small style="color:var(--text-muted); display:block; margin-top:2px;">💡 Agrega ${diff} pzs más para precio caja ($${item.boxPrice})</small>`;
    } else {
      // Retail price applied
      pricePerPiece = Number(item.retailPrice) || 0;
      tierLabel = 'Precio Normal (Menudeo)';
      
      // Tip to unlock Wholesale
      const diffWholesale = 3 - totalPiecesInCart;
      promptTip = `<small style="color:var(--text-muted); display:block; margin-top:2px;">💡 Agrega ${diffWholesale} pza(s) más para precio mayoreo mixto ($${item.wholesalePrice})</small>`;
    }

    const itemCost = pricePerPiece * qty;
    finalSubtotal += itemCost;
    regularRetailTotal += (Number(item.retailPrice) || 0) * qty;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-pricing" style="font-size:0.85rem; line-height: 1.4;">
          Desglose: <strong>${qty} pzs</strong> x <span class="highlight">$${pricePerPiece} MXN</span>
          <br>
          <span style="color:var(--primary); font-weight:600;">Tasa: ${tierLabel}</span>
          ${promptTip}
          Subtotal: <strong class="cart-subtotal-item">$${itemCost} MXN</strong>
        </div>
      </div>
      <div class="cart-item-qty">
        <div class="quantity-control">
          <button class="qty-btn cart-qty-minus" data-id="${item.id}">-</button>
          <input type="text" class="qty-val" value="${qty}" readonly>
          <button class="qty-btn cart-qty-plus" data-id="${item.id}">+</button>
        </div>
        <button class="btn-remove-item" data-id="${item.id}" title="Eliminar del cotizador">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `;
    cartItemsContainer.appendChild(row);
  });

  const totalSavings = regularRetailTotal - finalSubtotal;

  subtotalEl.textContent = `$${regularRetailTotal} MXN`;
  savingsEl.textContent = `$${totalSavings} MXN`;
  totalEl.textContent = `$${finalSubtotal} MXN`;

  setupCartEvents();
}

// Bind Events inside Cart Drawer (Using loose ID matching for event handlers)
function setupCartEvents() {
  // Cart Plus
  document.querySelectorAll('.cart-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = cart.find(i => String(i.id).trim() === String(id).trim());
      if (item) {
        updateCartQty(id, item.qty + 1);
      }
    });
  });

  // Cart Minus
  document.querySelectorAll('.cart-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = cart.find(i => String(i.id).trim() === String(id).trim());
      if (item) {
        updateCartQty(id, item.qty - 1);
      }
    });
  });

  // Cart Remove
  document.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      removeFromCart(id);
    });
  });
}

// Toggle Cart Sidebar Open/Close
function toggleCart(show) {
  if (!cartDrawer) return;
  if (show) {
    cartDrawer.classList.add('open');
    cartBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden'; 
  } else {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('open');
    document.body.style.overflow = ''; 
  }
}

// Setup Event Listeners
function setupEventListeners() {
  if (openCartBtn) openCartBtn.addEventListener('click', () => toggleCart(true));
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCart(false));
  if (cartBackdrop) cartBackdrop.addEventListener('click', () => toggleCart(false));

  // Toggle Mobile Menu
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileMenuBtn.querySelector('i');
      if (navMenu.classList.contains('open')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });
  }

  // Close Mobile Menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('open');
      if (mobileMenuBtn) mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
    });
  });

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCatalog();
    });
  }

  // Theme Toggle Button Handler
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode-active');
      const isDark = document.body.classList.contains('dark-mode-active');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    });
  }

  // Sticky Header logic on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Form Submit Handler
  if (quoteForm) quoteForm.addEventListener('submit', sendWhatsAppQuote);
}

// Compile Quote and Redirect to WhatsApp
function sendWhatsAppQuote(e) {
  e.preventDefault();
  
  if (cart.length === 0) {
    alert('Por favor agrega al menos un artículo a tu cotización.');
    return;
  }

  const name = clientNameInput.value.trim();
  const city = clientCityInput.value.trim();
  const clientType = clientTypeSelect.value;
  
  // Fetch Delivery Option Selected in index.html
  const deliveryOption = document.querySelector('input[name="delivery-method"]:checked');
  const deliveryVal = deliveryOption ? deliveryOption.value : 'envio'; // 'envio' or 'tienda'

  if (!name || !city) {
    alert('Por favor completa todos los campos del formulario.');
    return;
  }

  const totalPiecesInCart = cart.reduce((sum, item) => sum + item.qty, 0);
  const isWholesaleMixed = totalPiecesInCart >= 3;
  let totalCost = 0;

  // Header of WhatsApp Message
  let message = `🛍️ *ZALIA SHOP - SOLICITUD DE PEDIDO*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Cliente:* ${name}\n`;
  message += `📍 *Ciudad/Origen:* ${city}\n`;
  message += `🚚 *Método:* ${deliveryVal === 'envio' ? 'Envío a Domicilio (República)' : 'Recoger en Tienda Física'}\n`;
  message += `🏷️ *Cliente:* ${clientType === 'wholesale' ? 'Negocio / Mayorista' : 'Minorista'}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
  message += `📦 *Detalle del Pedido:*\n`;

  cart.forEach(item => {
    let pricePerPiece = 0;
    let tierLabel = '';

    if (item.qty >= item.pcsPerBox) {
      pricePerPiece = item.boxPrice;
      const boxesCount = Math.floor(item.qty / item.pcsPerBox);
      const remainder = item.qty % item.pcsPerBox;
      tierLabel = `Caja cerrada (${boxesCount} caja(s) de ${item.pcsPerBox} pzs ${remainder > 0 ? `+ ${remainder} sueltas` : ''})`;
    } else if (isWholesaleMixed) {
      pricePerPiece = item.wholesalePrice;
      tierLabel = 'Mayoreo Mixto';
    } else {
      pricePerPiece = item.retailPrice;
      tierLabel = 'Normal (Menudeo)';
    }

    const cost = pricePerPiece * item.qty;
    totalCost += cost;

    message += `• *${item.qty} pzs* - ${item.name}\n`;
    message += `  _P. Unitario:_ $${pricePerPiece} MXN | _Subtotal:_ *$${cost} MXN*\n`;
    message += `  _Tasa aplicada:_ ${tierLabel}\n\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  
  // Calculate regular retail cost to show savings
  let regularRetailTotal = 0;
  cart.forEach(item => {
    regularRetailTotal += item.retailPrice * item.qty;
  });
  
  const savings = regularRetailTotal - totalCost;

  message += `📦 *Total Piezas:* ${totalPiecesInCart} pzs\n`;
  if (savings > 0) {
    message += `💰 *Subtotal regular:* $${regularRetailTotal} MXN\n`;
    message += `🎉 *Ahorro por Volumen:* $${savings} MXN\n`;
  }
  
  message += `💵 *TOTAL NETO:* *$${totalCost} MXN*\n\n`;
  message += `*Nota:* Pedido enviado desde el cotizador web. Quedo en espera de confirmar disponibilidad física del contenedor y costos de envío.`;

  // WhatsApp Destination Number: 5613137613
  const whatsappNumber = '5215613137613';
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  window.open(whatsappUrl, '_blank');
}

// Local Storage persistences
function saveCartToStorage() {
  localStorage.setItem('zalia_cart', JSON.stringify(cart));
}

// Sanitizes and repairs cart data from storage against active catalog parameters
function loadCartFromStorage() {
  const savedCart = localStorage.getItem('zalia_cart');
  if (savedCart) {
    try {
      const parsed = JSON.parse(savedCart);
      if (Array.isArray(parsed)) {
        const activeProducts = getActiveProducts();
        cart = parsed.map(item => {
          if (!item || !item.id) return null;
          const product = activeProducts.find(p => String(p.id).trim() === String(item.id).trim());
          if (product) {
            return {
              id: String(product.id).trim(),
              name: product.name,
              wholesalePrice: Number(product.wholesalePrice) || 0,
              retailPrice: Number(product.retailPrice) || 0,
              boxPrice: Number(product.boxPrice) || 0,
              pcsPerBox: Number(product.pcsPerBox) || 12,
              image: product.image,
              qty: Math.max(1, parseInt(item.qty) || 1)
            };
          }
          return null;
        }).filter(item => item !== null);
      } else {
        cart = [];
      }
      saveCartToStorage();
      renderCart();
    } catch (e) {
      console.error("Error loading cart from storage:", e);
      cart = [];
    }
  }
}

// Run app
document.addEventListener('DOMContentLoaded', init);
