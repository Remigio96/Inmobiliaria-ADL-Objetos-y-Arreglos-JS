// js/propiedades.js

const propiedades_venta = [
  {
    nombre: "Residencia de lujo",
    src: "https://images.unsplash.com/photo-1748075820744-d558255b6776?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Exclusiva propiedad de alto estándar, ubicada en una de las zonas más prestigiosas de Las Condes.",
    ubicacion: "Av. Apoquindo 1234, Las Condes",
    habitaciones: 3,
    costo: 845000000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Casa rodante equipada para viajes",
    src: "https://images.unsplash.com/photo-1503525062602-e97976e62aad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Disfruta de la libertad de recorrer paisajes únicos.",
    ubicacion: "Ruta X-728, sector Lago Azul, Comuna de Cisnes, Región de Aysén",
    habitaciones: 1,
    costo: 30000000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Penthouse con vista panorámica",
    src: "https://plus.unsplash.com/premium_photo-1661964071594-0d5ea642833b?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Exclusivo penthouse con vistas despejadas y diseño contemporáneo conexión directa a la red de metro.",
    ubicacion: "Av. El Golf 888, Las Condes",
    habitaciones: 3,
    costo: 320000000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Townhouse moderno",
    src: "https://images.unsplash.com/photo-1576375801517-45814f908aa4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Amplia vivienda tipo townhouse, distribuida en dos niveles.",
    ubicacion: "Barrio Italia, Providencia",
    habitaciones: 2,
    costo: 180000000,
    smoke: true,
    pets: false
  },
  {
    nombre: "Casa mediterránea en condominio privado",
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1080&auto=format&fit=crop",
    descripcion: "Elegante casa de estilo mediterráneo con quincho, terraza y amplio jardín. Seguridad 24/7.",
    ubicacion: "Camino El Alba 4567, Lo Barnechea",
    habitaciones: 4,
    costo: 570000000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Domo ecológico autosustentable",
    src: "https://images.unsplash.com/photo-1623005385096-97aeea4d281a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Innovadora vivienda geodésica con paneles solares y sistema de recolección de agua lluvia.",
    ubicacion: "Camino rural KM 8, Pucón, Región de La Araucanía",
    habitaciones: 2,
    costo: 92000000,
    smoke: true,
    pets: false
  }
];

const propiedades_alquiler = [
  {
    nombre: "Departamento vista al parque",
    src: "https://plus.unsplash.com/premium_photo-1683121158319-acc40c6ef3b2?q=80&w=832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Ubicado cerca de estaciones de metro y servicios.",
    ubicacion: "Av. Alameda 1122, Santiago Centro",
    habitaciones: 2,
    costo: 550000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Condominio familiar",
    src: "https://images.unsplash.com/photo-1700126689261-1f5bdfe5adcc?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Comunidad cerrada con áreas verdes.",
    ubicacion: "Villa Santa María, La Florida",
    habitaciones: 3,
    costo: 620000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Estudio amoblado",
    src: "https://plus.unsplash.com/premium_photo-1664478290068-f29f0db6cabd?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Pequeño pero completo, ideal para estudiantes.",
    ubicacion: "Manuel Montt 220, Providencia",
    habitaciones: 1,
    costo: 400000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Apartamento con vista al mar",
    src: "https://plus.unsplash.com/premium_photo-1661962346904-8a489ef9b9e7?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Hermosa vista, amoblado y a pasos de la playa.",
    ubicacion: "Reñaca, Viña del Mar",
    habitaciones: 2,
    costo: 750000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Loft moderno estilo industrial",
    src: "https://plus.unsplash.com/premium_photo-1682125921736-04133d6a5b39?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Espacios abiertos con acabados de concreto y ladrillo expuesto, ubicado en zona bohemia.",
    ubicacion: "Barrio Yungay, Santiago",
    habitaciones: 1,
    costo: 480000,
    smoke: true,
    pets: false
  },
  {
    nombre: "Cabaña rústica en la montaña",
    src: "https://images.unsplash.com/photo-1634849663266-ade7df369121?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Ideal para desconectarse, rodeada de naturaleza y con chimenea a leña.",
    ubicacion: "El Manzano, Cajón del Maipo",
    habitaciones: 2,
    costo: 520000,
    smoke: true,
    pets: true
  }
];
