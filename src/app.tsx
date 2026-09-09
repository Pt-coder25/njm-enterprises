import { useMemo, useState } from "react";

type Vehicle = {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  category: string;
  condition: string;
  image: string;
  specs: {
    engine: string;
    transmission: string;
    drivetrain: string;
    fuel: string;
    seats: string;
    body: string;
  };
};

const fallbackImage =
  "https://placehold.co/1200x800/11151a/ffffff?text=NJM+ENTERPRISE";

const vehicleImages = {
  nissanNote:
    "https://placehold.co/1200x800/11151a/ffffff?text=Nissan+Note",

  nissanXTrail:
    "https://placehold.co/1200x800/11151a/ffffff?text=Nissan+X-Trail",

  nissanKicks:
    "https://placehold.co/1200x800/11151a/ffffff?text=Nissan+Kicks",

  hondaVezel:
    "https://placehold.co/1200x800/11151a/ffffff?text=Honda+Vezel",

  toyotaHarrier:
    "https://placehold.co/1200x800/11151a/ffffff?text=Toyota+Harrier",

  toyotaTaisor:
    "https://placehold.co/1200x800/11151a/ffffff?text=Toyota+Taisor",

  volvoXC40:
    "https://placehold.co/1200x800/11151a/ffffff?text=Volvo+XC40",

  mercedes:
    "https://placehold.co/1200x800/11151a/ffffff?text=Mercedes-Benz",

  audi:
    "https://placehold.co/1200x800/11151a/ffffff?text=Audi+Q3",

  bmw:
    "https://placehold.co/1200x800/11151a/ffffff?text=BMW+iX2",

  generic:
    fallbackImage,
};

/* =========================================================
   VEHICLE INVENTORY
========================================================= */

const vehicles: Vehicle[] = [
  /* =========================
     NISSAN
  ========================= */

  {
    id: 1,
    make: "Nissan",
    model: "Wingroad",
    year: 2018,
    color: "White",
    category: "Wagon",
    condition: "Available",
    image: vehicleImages.generic,
    specs: {
      engine: "Japanese-market engine — exact grade to be confirmed",
      transmission: "CVT",
      drivetrain: "2WD / 4WD depending on grade",
      fuel: "Petrol",
      seats: "5",
      body: "Wagon",
    },
  },

  {
    id: 2,
    make: "Nissan",
    model: "AD Wagon",
    year: 2020,
    color: "White / Black",
    category: "Wagon",
    condition: "Available",
    image: vehicleImages.generic,
    specs: {
      engine: "Japanese-market engine — exact grade to be confirmed",
      transmission: "CVT / automatic",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol",
      seats: "5",
      body: "Wagon",
    },
  },

  {
    id: 3,
    make: "Nissan",
    model: "AD Wagon",
    year: 2020,
    color: "White / Black",
    category: "Wagon",
    condition: "Available",
    image: vehicleImages.generic,
    specs: {
      engine: "Japanese-market engine — exact grade to be confirmed",
      transmission: "CVT / automatic",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol",
      seats: "5",
      body: "Wagon",
    },
  },

  {
    id: 4,
    make: "Nissan",
    model: "AD Wagon",
    year: 2020,
    color: "Silver / Black",
    category: "Wagon",
    condition: "Available",
    image: vehicleImages.generic,
    specs: {
      engine: "Japanese-market engine — exact grade to be confirmed",
      transmission: "CVT / automatic",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol",
      seats: "5",
      body: "Wagon",
    },
  },

  {
    id: 5,
    make: "Nissan",
    model: "AD Wagon",
    year: 2020,
    color: "Dark Blue",
    category: "Wagon",
    condition: "Available",
    image: vehicleImages.generic,
    specs: {
      engine: "Japanese-market engine — exact grade to be confirmed",
      transmission: "CVT / automatic",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol",
      seats: "5",
      body: "Wagon",
    },
  },

  {
    id: 6,
    make: "Nissan",
    model: "Note X",
    year: 2022,
    color: "White",
    category: "Hatchback",
    condition: "Available",
    image: vehicleImages.nissanNote,
    specs: {
      engine: "1.2L petrol / e-POWER depending on specification",
      transmission: "CVT / e-POWER",
      drivetrain: "2WD / 4WD depending on grade",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "Hatchback",
    },
  },

  {
    id: 7,
    make: "Nissan",
    model: "Note Fully Loaded",
    year: 2023,
    color: "White",
    category: "Hatchback",
    condition: "Fully Loaded / Projector",
    image: vehicleImages.nissanNote,
    specs: {
      engine: "1.2L petrol / e-POWER depending on specification",
      transmission: "e-POWER / automatic",
      drivetrain: "2WD / 4WD depending on grade",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "Hatchback",
    },
  },

  {
    id: 8,
    make: "Nissan",
    model: "Note Fully Loaded",
    year: 2023,
    color: "Gold",
    category: "Hatchback",
    condition: "Fully Loaded",
    image: vehicleImages.nissanNote,
    specs: {
      engine: "1.2L petrol / e-POWER depending on specification",
      transmission: "e-POWER / automatic",
      drivetrain: "2WD / 4WD depending on grade",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "Hatchback",
    },
  },

  {
    id: 9,
    make: "Nissan",
    model: "Note Facelift",
    year: 2024,
    color: "Gold",
    category: "Hatchback",
    condition: "Fully Loaded / Projector",
    image: vehicleImages.nissanNote,
    specs: {
      engine: "1.2L petrol / e-POWER depending on specification",
      transmission: "e-POWER / automatic",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "Hatchback",
    },
  },

  {
    id: 10,
    make: "Nissan",
    model: "Note Facelift",
    year: 2026,
    color: "Black",
    category: "Hatchback",
    condition: "Brand New",
    image: vehicleImages.nissanNote,
    specs: {
      engine: "Exact 2026 grade to be confirmed",
      transmission: "Automatic / e-POWER",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "Hatchback",
    },
  },

  {
    id: 11,
    make: "Nissan",
    model: "Note Facelift",
    year: 2026,
    color: "Burgundy",
    category: "Hatchback",
    condition: "Brand New",
    image: vehicleImages.nissanNote,
    specs: {
      engine: "Exact 2026 grade to be confirmed",
      transmission: "Automatic / e-POWER",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "Hatchback",
    },
  },

  {
    id: 12,
    make: "Nissan",
    model: "Kicks",
    year: 2023,
    color: "Blue / White Top",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.nissanKicks,
    specs: {
      engine: "Market/grade dependent",
      transmission: "CVT / e-POWER",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 13,
    make: "Nissan",
    model: "Kicks Autech",
    year: 2024,
    color: "Black",
    category: "SUV",
    condition: "Available",
    image: vehicleImages.nissanKicks,
    specs: {
      engine: "Market/grade dependent",
      transmission: "CVT / e-POWER",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 14,
    make: "Nissan",
    model: "X-Trail 90th Edition X",
    year: 2024,
    color: "Red",
    category: "SUV",
    condition: "Available",
    image: vehicleImages.nissanXTrail,
    specs: {
      engine: "1.5L turbo / e-POWER depending on grade",
      transmission: "CVT / e-POWER",
      drivetrain: "2WD / 4WD / e-4ORCE",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 15,
    make: "Nissan",
    model: "X-Trail 7 Seater",
    year: 2024,
    color: "Nano Grey",
    category: "SUV",
    condition: "RORO",
    image: vehicleImages.nissanXTrail,
    specs: {
      engine: "1.5L turbo / e-POWER depending on grade",
      transmission: "CVT / e-POWER",
      drivetrain: "2WD / 4WD / e-4ORCE",
      fuel: "Petrol / Hybrid",
      seats: "7",
      body: "SUV",
    },
  },

  {
    id: 16,
    make: "Nissan",
    model: "X-Trail Pre-Facelift",
    year: 2025,
    color: "Black",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.nissanXTrail,
    specs: {
      engine: "1.5L turbo / e-POWER depending on grade",
      transmission: "CVT / e-POWER",
      drivetrain: "2WD / 4WD / e-4ORCE",
      fuel: "Petrol / Hybrid",
      seats: "5 / 7",
      body: "SUV",
    },
  },

  {
    id: 17,
    make: "Nissan",
    model: "X-Trail Pre-Facelift",
    year: 2025,
    color: "White",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.nissanXTrail,
    specs: {
      engine: "1.5L turbo / e-POWER depending on grade",
      transmission: "CVT / e-POWER",
      drivetrain: "2WD / 4WD / e-4ORCE",
      fuel: "Petrol / Hybrid",
      seats: "5 / 7",
      body: "SUV",
    },
  },

  {
    id: 18,
    make: "Nissan",
    model: "X-Trail Fully Loaded",
    year: 2025,
    color: "Gold",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.nissanXTrail,
    specs: {
      engine: "1.5L turbo / e-POWER depending on grade",
      transmission: "CVT / e-POWER",
      drivetrain: "2WD / 4WD / e-4ORCE",
      fuel: "Petrol / Hybrid",
      seats: "5 / 7",
      body: "SUV",
    },
  },

  {
    id: 19,
    make: "Nissan",
    model: "X-Trail Facelift",
    year: 2025,
    color: "White",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.nissanXTrail,
    specs: {
      engine: "1.5L turbo / e-POWER depending on grade",
      transmission: "CVT / e-POWER",
      drivetrain: "2WD / 4WD / e-4ORCE",
      fuel: "Petrol / Hybrid",
      seats: "5 / 7",
      body: "SUV",
    },
  },

  {
    id: 20,
    make: "Nissan",
    model: "X-Trail Facelift",
    year: 2025,
    color: "Black",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.nissanXTrail,
    specs: {
      engine: "1.5L turbo / e-POWER depending on grade",
      transmission: "CVT / e-POWER",
      drivetrain: "2WD / 4WD / e-4ORCE",
      fuel: "Petrol / Hybrid",
      seats: "5 / 7",
      body: "SUV",
    },
  },

  {
    id: 21,
    make: "Nissan",
    model: "X-Trail Facelift",
    year: 2025,
    color: "Grey",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.nissanXTrail,
    specs: {
      engine: "1.5L turbo / e-POWER depending on grade",
      transmission: "CVT / e-POWER",
      drivetrain: "2WD / 4WD / e-4ORCE",
      fuel: "Petrol / Hybrid",
      seats: "5 / 7",
      body: "SUV",
    },
  },

  {
    id: 22,
    make: "Nissan",
    model: "NV350 Panel Van MX",
    year: 2025,
    color: "White",
    category: "Van",
    condition: "Brand New",
    image: vehicleImages.generic,
    specs: {
      engine: "Exact grade to be confirmed",
      transmission: "Automatic / Manual",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol / Diesel depending on version",
      seats: "Varies",
      body: "Panel Van",
    },
  },

  {
    id: 23,
    make: "Nissan",
    model: "NV350 Panel Van GX",
    year: 2025,
    color: "Silver",
    category: "Van",
    condition: "Brand New",
    image: vehicleImages.generic,
    specs: {
      engine: "Exact grade to be confirmed",
      transmission: "Automatic / Manual",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol / Diesel depending on version",
      seats: "Varies",
      body: "Panel Van",
    },
  },

  /* =========================
     HONDA
  ========================= */

  {
    id: 24,
    make: "Honda",
    model: "Vezel Z",
    year: 2024,
    color: "Black",
    category: "SUV",
    condition: "RORO",
    image: vehicleImages.hondaVezel,
    specs: {
      engine: "1.5L petrol / e:HEV depending on grade",
      transmission: "CVT / e-CVT",
      drivetrain: "FF / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 25,
    make: "Honda",
    model: "Vezel X HuNT",
    year: 2025,
    color: "Black",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.hondaVezel,
    specs: {
      engine: "1.5L e:HEV",
      transmission: "e-CVT",
      drivetrain: "FF / 4WD depending on grade",
      fuel: "Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 26,
    make: "Honda",
    model: "Vezel X HuNT",
    year: 2025,
    color: "Grey",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.hondaVezel,
    specs: {
      engine: "1.5L e:HEV",
      transmission: "e-CVT",
      drivetrain: "FF / 4WD",
      fuel: "Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 27,
    make: "Honda",
    model: "Vezel X HuNT",
    year: 2026,
    color: "Green",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.hondaVezel,
    specs: {
      engine: "1.5L e:HEV",
      transmission: "e-CVT",
      drivetrain: "FF / 4WD",
      fuel: "Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 28,
    make: "Honda",
    model: "Vezel Z",
    year: 2025,
    color: "Pearl",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.hondaVezel,
    specs: {
      engine: "1.5L e:HEV",
      transmission: "e-CVT",
      drivetrain: "FF / 4WD",
      fuel: "Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 29,
    make: "Honda",
    model: "Vezel Z",
    year: 2025,
    color: "White",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.hondaVezel,
    specs: {
      engine: "1.5L e:HEV",
      transmission: "e-CVT",
      drivetrain: "FF / 4WD",
      fuel: "Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 30,
    make: "Honda",
    model: "Vezel Z",
    year: 2025,
    color: "Black",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.hondaVezel,
    specs: {
      engine: "1.5L e:HEV",
      transmission: "e-CVT",
      drivetrain: "FF / 4WD",
      fuel: "Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 31,
    make: "Honda",
    model: "Vezel Z",
    year: 2025,
    color: "White",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.hondaVezel,
    specs: {
      engine: "1.5L e:HEV",
      transmission: "e-CVT",
      drivetrain: "FF / 4WD",
      fuel: "Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 32,
    make: "Honda",
    model: "Vezel Z",
    year: 2025,
    color: "Grey",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.hondaVezel,
    specs: {
      engine: "1.5L e:HEV",
      transmission: "e-CVT",
      drivetrain: "FF / 4WD",
      fuel: "Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 33,
    make: "Honda",
    model: "Vezel Z",
    year: 2025,
    color: "Grey",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.hondaVezel,
    specs: {
      engine: "1.5L e:HEV",
      transmission: "e-CVT",
      drivetrain: "FF / 4WD",
      fuel: "Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 34,
    make: "Honda",
    model: "Vezel Z",
    year: 2025,
    color: "Grey",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.hondaVezel,
    specs: {
      engine: "1.5L e:HEV",
      transmission: "e-CVT",
      drivetrain: "FF / 4WD",
      fuel: "Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 35,
    make: "Honda",
    model: "Vezel Z",
    year: 2026,
    color: "Grey",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.hondaVezel,
    specs: {
      engine: "1.5L e:HEV",
      transmission: "e-CVT",
      drivetrain: "FF / 4WD",
      fuel: "Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  /* =========================
     TOYOTA
  ========================= */

  {
    id: 36,
    make: "Toyota",
    model: "Harrier V",
    year: 2025,
    color: "Red",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "2.0L petrol or 2.5L hybrid depending on grade",
      transmission: "Direct Shift-CVT / electric CVT",
      drivetrain: "FF / 4WD / E-Four",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 37,
    make: "Toyota",
    model: "Harrier V",
    year: 2026,
    color: "Gold",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "2.0L petrol or 2.5L hybrid depending on grade",
      transmission: "Direct Shift-CVT / electric CVT",
      drivetrain: "FF / 4WD / E-Four",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 38,
    make: "Toyota",
    model: "Harrier V",
    year: 2025,
    color: "Cave Black",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "2.0L petrol or 2.5L hybrid depending on grade",
      transmission: "Direct Shift-CVT / electric CVT",
      drivetrain: "FF / 4WD / E-Four",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 39,
    make: "Toyota",
    model: "Harrier V",
    year: 2025,
    color: "Silver",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "2.0L petrol or 2.5L hybrid depending on grade",
      transmission: "Direct Shift-CVT / electric CVT",
      drivetrain: "FF / 4WD / E-Four",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 40,
    make: "Toyota",
    model: "Harrier V",
    year: 2025,
    color: "White",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "2.0L petrol or 2.5L hybrid depending on grade",
      transmission: "Direct Shift-CVT / electric CVT",
      drivetrain: "FF / 4WD / E-Four",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 41,
    make: "Toyota",
    model: "Harrier V Full Hybrid",
    year: 2025,
    color: "Red",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "2.5L Dynamic Force Hybrid",
      transmission: "Electric continuously variable transmission",
      drivetrain: "FF / E-Four",
      fuel: "Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 42,
    make: "Toyota",
    model: "Harrier S Neo",
    year: 2025,
    color: "Silver",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "2.0L petrol / 2.5L hybrid depending on grade",
      transmission: "CVT / electric CVT",
      drivetrain: "FF / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 43,
    make: "Toyota",
    model: "Harrier S Neo",
    year: 2025,
    color: "White",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "2.0L petrol / 2.5L hybrid depending on grade",
      transmission: "CVT / electric CVT",
      drivetrain: "FF / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 44,
    make: "Toyota",
    model: "Harrier S Neo",
    year: 2025,
    color: "Red",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "2.0L petrol / 2.5L hybrid depending on grade",
      transmission: "CVT / electric CVT",
      drivetrain: "FF / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 45,
    make: "Toyota",
    model: "Harrier S Neo",
    year: 2026,
    color: "Black",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "2.0L petrol / 2.5L hybrid depending on grade",
      transmission: "CVT / electric CVT",
      drivetrain: "FF / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 46,
    make: "Toyota",
    model: "Harrier S Neo",
    year: 2026,
    color: "White",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "2.0L petrol / 2.5L hybrid depending on grade",
      transmission: "CVT / electric CVT",
      drivetrain: "FF / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 47,
    make: "Toyota",
    model: "Harrier S Neo",
    year: 2026,
    color: "Grey",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "2.0L petrol / 2.5L hybrid depending on grade",
      transmission: "CVT / electric CVT",
      drivetrain: "FF / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 48,
    make: "Toyota",
    model: "Taisor V",
    year: 2026,
    color: "White",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaTaisor,
    specs: {
      engine: "Grade-dependent petrol engine",
      transmission: "Manual / automatic / CVT depending on grade",
      drivetrain: "2WD / 4WD depending on specification",
      fuel: "Petrol",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 49,
    make: "Toyota",
    model: "Taisor V",
    year: 2026,
    color: "White",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaTaisor,
    specs: {
      engine: "Grade-dependent petrol engine",
      transmission: "Manual / automatic / CVT",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 50,
    make: "Toyota",
    model: "Taisor V",
    year: 2026,
    color: "Grey",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaTaisor,
    specs: {
      engine: "Grade-dependent petrol engine",
      transmission: "Manual / automatic / CVT",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 51,
    make: "Toyota",
    model: "Taisor V",
    year: 2026,
    color: "Red",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaTaisor,
    specs: {
      engine: "Grade-dependent petrol engine",
      transmission: "Manual / automatic / CVT",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 52,
    make: "Toyota",
    model: "Taisor V",
    year: 2026,
    color: "Red / Black Top",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaTaisor,
    specs: {
      engine: "Grade-dependent petrol engine",
      transmission: "Manual / automatic / CVT",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 53,
    make: "Toyota",
    model: "Taisor V",
    year: 2026,
    color: "Red / Black Top",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaTaisor,
    specs: {
      engine: "Grade-dependent petrol engine",
      transmission: "Manual / automatic / CVT",
      drivetrain: "2WD / 4WD",
      fuel: "Petrol",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 54,
    make: "Toyota",
    model: "Harrier V Neo",
    year: 2026,
    color: "Black",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "Grade-dependent petrol / hybrid",
      transmission: "CVT / electric CVT",
      drivetrain: "FF / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  {
    id: 55,
    make: "Toyota",
    model: "Harrier V Neo",
    year: 2026,
    color: "White",
    category: "SUV",
    condition: "Brand New",
    image: vehicleImages.toyotaHarrier,
    specs: {
      engine: "Grade-dependent petrol / hybrid",
      transmission: "CVT / electric CVT",
      drivetrain: "FF / 4WD",
      fuel: "Petrol / Hybrid",
      seats: "5",
      body: "SUV",
    },
  },

  /* =========================
     LUXURY
  ========================= */

  {
    id: 56,
    make: "Volvo",
    model: "XC40 Plug-in Hybrid",
    year: 2022,
    color: "White",
    category: "Luxury",
    condition: "Available",
    image: vehicleImages.volvoXC40,
    specs: {
      engine: "Plug-in hybrid powertrain",
      transmission: "Automatic",
      drivetrain: "AWD depending on configuration",
      fuel: "Plug-in Hybrid",
      seats: "5",
      body: "Compact SUV",
    },
  },

  {
    id: 57,
    make: "Mercedes-Benz",
    model: "C180",
    year: 2022,
    color: "White",
    category: "Luxury",
    condition: "Available",
    image: vehicleImages.mercedes,
    specs: {
      engine: "1.5L turbo petrol mild-hybrid",
      transmission: "9-speed automatic",
      drivetrain: "Rear-wheel drive",
      fuel: "Petrol / Mild Hybrid",
      seats: "5",
      body: "Sedan",
    },
  },

  {
    id: 58,
    make: "Mercedes-Benz",
    model: "C200",
    year: 2022,
    color: "Grey",
    category: "Luxury",
    condition: "Available",
    image: vehicleImages.mercedes,
    specs: {
      engine: "1.5L turbo petrol mild-hybrid",
      transmission: "9-speed automatic",
      drivetrain: "Rear-wheel drive",
      fuel: "Petrol / Mild Hybrid",
      seats: "5",
      body: "Sedan",
    },
  },

  {
    id: 59,
    make: "Mercedes-Benz",
    model: "C200",
    year: 2022,
    color: "White",
    category: "Luxury",
    condition: "Available",
    image: vehicleImages.mercedes,
    specs: {
      engine: "1.5L turbo petrol mild-hybrid",
      transmission: "9-speed automatic",
      drivetrain: "Rear-wheel drive",
      fuel: "Petrol / Mild Hybrid",
      seats: "5",
      body: "Sedan",
    },
  },

  {
    id: 60,
    make: "Mercedes-Benz",
    model: "C200",
    year: 2022,
    color: "Black",
    category: "Luxury",
    condition: "Red & Black Interior",
    image: vehicleImages.mercedes,
    specs: {
      engine: "1.5L turbo petrol mild-hybrid",
      transmission: "9-speed automatic",
      drivetrain: "Rear-wheel drive",
      fuel: "Petrol / Mild Hybrid",
      seats: "5",
      body: "Sedan",
    },
  },

  {
    id: 61,
    make: "Audi",
    model: "Q3 Sportback Dynamic Edition",
    year: 2024,
    color: "Black",
    category: "Luxury",
    condition: "Available",
    image: vehicleImages.audi,
    specs: {
      engine: "Exact engine to be confirmed by stock grade",
      transmission: "S tronic automatic depending on grade",
      drivetrain: "FWD / quattro",
      fuel: "Petrol",
      seats: "5",
      body: "Sportback SUV",
    },
  },

  {
    id: 62,
    make: "BMW",
    model: "iX2 Electric",
    year: 2024,
    color: "White",
    category: "Luxury",
    condition: "Available",
    image: vehicleImages.bmw,
    specs: {
      engine: "Fully electric",
      transmission: "Single-speed",
      drivetrain: "FWD / AWD depending on version",
      fuel: "Electric",
      seats: "5",
      body: "Electric crossover",
    },
  },

  {
    id: 63,
    make: "Mercedes-Benz",
    model: "GLB180 7-Seater",
    year: 2024,
    color: "Red",
    category: "Luxury",
    condition: "Available",
    image: vehicleImages.mercedes,
    specs: {
      engine: "1.3L turbo petrol",
      transmission: "7-speed dual-clutch automatic",
      drivetrain: "Front-wheel drive",
      fuel: "Petrol",
      seats: "7",
      body: "SUV",
    },
  },

  {
    id: 64,
    make: "Mercedes-Benz",
    model: "EQE350",
    year: 2024,
    color: "Black",
    category: "Luxury",
    condition: "Available",
    image: vehicleImages.mercedes,
    specs: {
      engine: "Fully electric",
      transmission: "Single-speed",
      drivetrain: "RWD / AWD depending on version",
      fuel: "Electric",
      seats: "5",
      body: "Electric Sedan",
    },
  },
];


/* =========================================================
   APP
========================================================= */

export default function App() {
  const [search, setSearch] = useState("");
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const [selectedVehicle, setSelectedVehicle] =
    useState<Vehicle | null>(null);

  const makes = useMemo(
    () => [...new Set(vehicles.map((vehicle) => vehicle.make))],
    []
  );

  const years = useMemo(
    () =>
      [...new Set(vehicles.map((vehicle) => vehicle.year))]
        .sort((a, b) => b - a),
    []
  );

  const colors = useMemo(
    () => [...new Set(vehicles.map((vehicle) => vehicle.color))].sort(),
    []
  );

  const categories = useMemo(
    () =>
      [...new Set(vehicles.map((vehicle) => vehicle.category))].sort(),
    []
  );

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const searchText =
        `${vehicle.make} ${vehicle.model} ${vehicle.year} ${vehicle.color}`
          .toLowerCase();

      const matchesSearch =
        !search ||
        searchText.includes(search.toLowerCase());

      const matchesMake =
        !make || vehicle.make === make;

      const matchesYear =
        !year || vehicle.year.toString() === year;

      const matchesColor =
        !color || vehicle.color === color;

      const matchesCategory =
        !category || vehicle.category === category;

      return (
        matchesSearch &&
        matchesMake &&
        matchesYear &&
        matchesColor &&
        matchesCategory
      );
    });
  }, [search, make, year, color, category]);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ================= HEADER ================= */}

      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">

          <div className="font-display text-xl font-bold tracking-tight">
            NJM
            <span className="text-primary">
              {" "}ENTERPRISE
            </span>
          </div>

          <div className="hidden text-sm text-muted-foreground sm:block">
            Premium Vehicle Inventory
          </div>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <section className="mx-auto max-w-7xl px-5 pb-10 pt-20">

        <div className="max-w-4xl">

          <p className="mb-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
            NJM Enterprises
          </p>

          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl">

            Find your
            <span className="text-primary">
              {" "}next vehicle.
            </span>

          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">

            Browse our current selection of Roll On Roll Off,
            brand-new and luxury vehicles. Search our inventory
            by model, colour, year or make.

          </p>

        </div>

      </section>


      {/* ================= FILTERS ================= */}

      <section className="mx-auto max-w-7xl px-5 pb-10">

        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">

          <div className="grid gap-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">

            {/* SEARCH */}

            <div className="relative">

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search model, make or year..."
                className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

            </div>


            {/* MAKE */}

            <select
              value={make}
              onChange={(event) =>
                setMake(event.target.value)
              }
              className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary"
            >

              <option value="">
                All Makes
              </option>

              {makes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}

            </select>


            {/* YEAR */}

            <select
              value={year}
              onChange={(event) =>
                setYear(event.target.value)
              }
              className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary"
            >

              <option value="">
                All Years
              </option>

              {years.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}

            </select>


            {/* COLOUR */}

            <select
              value={color}
              onChange={(event) =>
                setColor(event.target.value)
              }
              className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary"
            >

              <option value="">
                All Colours
              </option>

              {colors.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}

            </select>


            {/* CATEGORY */}

            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
              className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary"
            >

              <option value="">
                All Categories
              </option>

              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}

            </select>

          </div>


          {/* ACTIVE FILTERS */}

          {(search ||
            make ||
            year ||
            color ||
            category) && (

            <div className="mt-4 flex items-center justify-between">

              <p className="text-sm text-muted-foreground">

                Showing{" "}
                <span className="font-bold text-foreground">
                  {filteredVehicles.length}
                </span>{" "}
                vehicles

              </p>


              <button
                onClick={() => {
                  setSearch("");
                  setMake("");
                  setYear("");
                  setColor("");
                  setCategory("");
                }}
                className="text-sm font-semibold text-primary hover:underline"
              >
                Clear filters
              </button>

            </div>

          )}

        </div>

      </section>


      {/* ================= INVENTORY ================= */}

      <section className="mx-auto max-w-7xl px-5 pb-24">

        <div className="mb-6 flex items-end justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Current inventory
            </p>

            <h2 className="mt-1 font-display text-3xl font-bold">
              Available Vehicles
            </h2>

          </div>

          <p className="text-sm text-muted-foreground">

            {filteredVehicles.length} vehicles

          </p>

        </div>


        {/* EMPTY */}

        {filteredVehicles.length === 0 && (

          <div className="rounded-2xl border border-border bg-card px-6 py-20 text-center">

            <h3 className="font-display text-xl font-bold">
              No vehicles found
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Try changing your search or filters.
            </p>

          </div>

        )}


        {/* GRID */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredVehicles.map((vehicle) => (

            <article
              key={vehicle.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >

              {/* IMAGE */}

              <div className="relative aspect-[4/3] overflow-hidden bg-muted">

                <img
                  src={vehicle.image}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.src =
                      fallbackImage;
                  }}
                />

                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow">
                  {vehicle.condition}
                </span>

              </div>


              {/* CONTENT */}

              <div className="p-5">

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  {vehicle.make}
                </p>

                <h3 className="mt-1 font-display text-xl font-bold">
                  {vehicle.year} {vehicle.model}
                </h3>


                <div className="mt-4 flex flex-wrap gap-2">

                  <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                    {vehicle.color}
                  </span>

                  <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                    {vehicle.category}
                  </span>

                </div>


                <button
                  onClick={() =>
                    setSelectedVehicle(vehicle)
                  }
                  className="mt-5 w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
                >
                  Inspect Vehicle
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= VEHICLE MODAL ================= */}

      {selectedVehicle && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() =>
            setSelectedVehicle(null)
          }
        >

          <div
            className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-border bg-card shadow-2xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="grid md:grid-cols-2">

              {/* IMAGE */}

              <div className="aspect-[4/3] bg-muted md:aspect-auto">

                <img
                  src={selectedVehicle.image}
                  alt={`${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model}`}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.src =
                      fallbackImage;
                  }}
                />

              </div>


              {/* DETAILS */}

              <div className="p-7 sm:p-9">

                <div className="flex items-start justify-between gap-5">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                      {selectedVehicle.make}
                    </p>

                    <h2 className="mt-1 font-display text-3xl font-bold">
                      {selectedVehicle.year}{" "}
                      {selectedVehicle.model}
                    </h2>

                  </div>


                  <button
                    onClick={() =>
                      setSelectedVehicle(null)
                    }
                    className="rounded-full border border-border px-3 py-1 text-xl text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    ×
                  </button>

                </div>


                {/* TAGS */}

                <div className="mt-5 flex flex-wrap gap-2">

                  <span className="rounded-full border border-border px-3 py-1 text-xs">
                    {selectedVehicle.color}
                  </span>

                  <span className="rounded-full border border-border px-3 py-1 text-xs">
                    {selectedVehicle.category}
                  </span>

                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {selectedVehicle.condition}
                  </span>

                </div>


                {/* SPECS */}

                <div className="mt-7 grid grid-cols-2 gap-3">

                  {Object.entries(
                    selectedVehicle.specs
                  ).map(([key, value]) => (

                    <div
                      key={key}
                      className="rounded-xl border border-border bg-background p-4"
                    >

                      <p className="text-xs capitalize text-muted-foreground">
                        {key}
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        {value}
                      </p>

                    </div>

                  ))}

                </div>


                {/* CTA */}

                <button
                  onClick={() =>
                    setSelectedVehicle(null)
                  }
                  className="mt-7 w-full rounded-xl bg-primary py-3.5 font-bold text-primary-foreground transition hover:opacity-90"
                >
                  Contact NJM Enterprises
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
