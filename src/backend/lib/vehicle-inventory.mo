import List "mo:core/List";
import Types "../types/vehicle-inventory";

module {
  // Read-only dealership catalog. Each entry is a distinct stock unit; duplicate
  // model/colour combinations from the inventory list are preserved as separate
  // stockIds. Prices are in TT$ where known, otherwise "Price on request".
  public let seedVehicles : [Types.Vehicle] = [
    // ---- NISSAN ----
    {
      stockId = "NIS-001";
      year = 2018;
      make = "Nissan";
      model = "Wingroad";
      trim = "Standard";
      colour = "White";
      condition = #Roro;
      bodyType = #Wagon;
      price = null;
      priceLabel = "Price on request";
      description = "2018 Nissan Wingroad wagon in white. A practical, economical daily driver with generous cargo space.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+Wingroad";
      featured = false;
    },
    {
      stockId = "NIS-002";
      year = 2020;
      make = "Nissan";
      model = "AD Wagon";
      trim = "Standard";
      colour = "White/Black";
      condition = #Roro;
      bodyType = #Wagon;
      price = null;
      priceLabel = "Price on request";
      description = "2020 Nissan AD Wagon in white with black accents. A dependable workhorse wagon, ideal for business and family use.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+AD+Wagon";
      featured = false;
    },
    {
      stockId = "NIS-003";
      year = 2020;
      make = "Nissan";
      model = "AD Wagon";
      trim = "Standard";
      colour = "White/Black";
      condition = #Roro;
      bodyType = #Wagon;
      price = null;
      priceLabel = "Price on request";
      description = "2020 Nissan AD Wagon in white with black accents. A dependable workhorse wagon, ideal for business and family use.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+AD+Wagon";
      featured = false;
    },
    {
      stockId = "NIS-004";
      year = 2020;
      make = "Nissan";
      model = "AD Wagon";
      trim = "Standard";
      colour = "Silver/Black";
      condition = #Roro;
      bodyType = #Wagon;
      price = null;
      priceLabel = "Price on request";
      description = "2020 Nissan AD Wagon in silver with black accents. A versatile and reliable wagon for everyday use.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+AD+Wagon";
      featured = false;
    },
    {
      stockId = "NIS-005";
      year = 2020;
      make = "Nissan";
      model = "AD Wagon";
      trim = "Standard";
      colour = "Dark Blue";
      condition = #Roro;
      bodyType = #Wagon;
      price = null;
      priceLabel = "Price on request";
      description = "2020 Nissan AD Wagon in dark blue. A sturdy, economical wagon with excellent practicality.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+AD+Wagon";
      featured = false;
    },
    {
      stockId = "NIS-006";
      year = 2022;
      make = "Nissan";
      model = "Note";
      trim = "Standard";
      colour = "White";
      condition = #Roro;
      bodyType = #Hatchback;
      price = null;
      priceLabel = "Price on request";
      description = "2022 Nissan Note hatchback in white. A compact, fuel-efficient city car with modern features.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+Note";
      featured = false;
    },
    {
      stockId = "NIS-007";
      year = 2022;
      make = "Nissan";
      model = "Note";
      trim = "Fully Loaded + Projector";
      colour = "White";
      condition = #Roro;
      bodyType = #Hatchback;
      price = null;
      priceLabel = "Price on request";
      description = "2022 Nissan Note fully loaded with projector headlamps in white. Premium features in a compact package.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+Note";
      featured = false;
    },
    {
      stockId = "NIS-008";
      year = 2023;
      make = "Nissan";
      model = "Note";
      trim = "Fully Loaded";
      colour = "Gold";
      condition = #Roro;
      bodyType = #Hatchback;
      price = null;
      priceLabel = "Price on request";
      description = "2023 Nissan Note fully loaded in gold. A well-equipped, efficient hatchback for modern driving.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+Note";
      featured = false;
    },
    {
      stockId = "NIS-009";
      year = 2023;
      make = "Nissan";
      model = "Note";
      trim = "Fully Loaded + Projector";
      colour = "Gold";
      condition = #Roro;
      bodyType = #Hatchback;
      price = null;
      priceLabel = "Price on request";
      description = "2023 Nissan Note fully loaded with projector headlamps in gold. A feature-rich, economical hatchback.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+Note";
      featured = false;
    },
    {
      stockId = "NIS-010";
      year = 2026;
      make = "Nissan";
      model = "Note";
      trim = "Facelift Fully Loaded + Projector";
      colour = "Gold";
      condition = #BrandNew;
      bodyType = #Hatchback;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2026 Nissan Note facelift, fully loaded with projector headlamps in gold. The latest in efficiency and technology.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+Note";
      featured = false;
    },
    {
      stockId = "NIS-011";
      year = 2026;
      make = "Nissan";
      model = "Note";
      trim = "Facelift";
      colour = "Black";
      condition = #BrandNew;
      bodyType = #Hatchback;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2026 Nissan Note facelift in black. A sleek, modern hatchback with the latest Nissan technology.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+Note";
      featured = false;
    },
    {
      stockId = "NIS-012";
      year = 2026;
      make = "Nissan";
      model = "Note";
      trim = "Facelift";
      colour = "Burgundy";
      condition = #BrandNew;
      bodyType = #Hatchback;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2026 Nissan Note facelift in burgundy. A stylish, efficient hatchback ready for the road.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+Note";
      featured = false;
    },
    {
      stockId = "NIS-013";
      year = 2023;
      make = "Nissan";
      model = "Kicks";
      trim = "Standard";
      colour = "Black";
      condition = #Roro;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "2023 Nissan Kicks compact SUV in black. A stylish, efficient crossover with a commanding ride.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+Kicks";
      featured = false;
    },
    {
      stockId = "NIS-014";
      year = 2024;
      make = "Nissan";
      model = "Kicks";
      trim = "Autech";
      colour = "Blue/White Top";
      condition = #Roro;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "2024 Nissan Kicks Autech in blue with white roof. A sporty, distinctive compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+Kicks";
      featured = false;
    },
    {
      stockId = "NIS-015";
      year = 2024;
      make = "Nissan";
      model = "Kicks";
      trim = "Standard";
      colour = "Red";
      condition = #Roro;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "2024 Nissan Kicks compact SUV in red. A bold, efficient crossover perfect for city and highway.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+Kicks";
      featured = false;
    },
    {
      stockId = "NIS-016";
      year = 2024;
      make = "Nissan";
      model = "X-Trail";
      trim = "90th Edition X";
      colour = "Red";
      condition = #Roro;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "2024 Nissan X-Trail 90th Edition X in red. A special-edition SUV with premium styling and capability.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+X-Trail";
      featured = false;
    },
    {
      stockId = "NIS-017";
      year = 2024;
      make = "Nissan";
      model = "X-Trail";
      trim = "7 Seater";
      colour = "Nano Grey";
      condition = #Roro;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "2024 Nissan X-Trail 7-seater in nano grey. A spacious family SUV with seating for seven.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+X-Trail";
      featured = false;
    },
    {
      stockId = "NIS-018";
      year = 2025;
      make = "Nissan";
      model = "X-Trail";
      trim = "Pre-Facelift Fully Loaded";
      colour = "Grey";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Nissan X-Trail pre-facelift, fully loaded in grey. A refined, capable family SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+X-Trail";
      featured = false;
    },
    {
      stockId = "NIS-019";
      year = 2025;
      make = "Nissan";
      model = "X-Trail";
      trim = "Pre-Facelift Fully Loaded";
      colour = "White";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Nissan X-Trail pre-facelift, fully loaded in white. A versatile and comfortable SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+X-Trail";
      featured = false;
    },
    {
      stockId = "NIS-020";
      year = 2025;
      make = "Nissan";
      model = "X-Trail";
      trim = "Fully Loaded";
      colour = "Gold";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Nissan X-Trail fully loaded in gold. A standout family SUV packed with premium features.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+X-Trail";
      featured = true;
    },
    {
      stockId = "NIS-021";
      year = 2025;
      make = "Nissan";
      model = "X-Trail";
      trim = "Facelift Fully Loaded";
      colour = "White";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Nissan X-Trail facelift, fully loaded in white. The latest design with advanced technology.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+X-Trail";
      featured = false;
    },
    {
      stockId = "NIS-022";
      year = 2025;
      make = "Nissan";
      model = "X-Trail";
      trim = "Fully Loaded";
      colour = "Black";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Nissan X-Trail fully loaded in black. A bold, well-equipped family SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+X-Trail";
      featured = false;
    },
    {
      stockId = "NIS-023";
      year = 2025;
      make = "Nissan";
      model = "X-Trail";
      trim = "Facelift Fully Loaded";
      colour = "Grey";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Nissan X-Trail facelift, fully loaded in grey. A modern, refined family SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+X-Trail";
      featured = false;
    },
    {
      stockId = "NIS-024";
      year = 2025;
      make = "Nissan";
      model = "NV350";
      trim = "Panel Van YV-XAMID";
      colour = "White";
      condition = #BrandNew;
      bodyType = #Van;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Nissan NV350 panel van YV-XAMID in white. A robust commercial van built for work.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+NV350";
      featured = false;
    },
    {
      stockId = "NIS-025";
      year = 2025;
      make = "Nissan";
      model = "NV350";
      trim = "Panel Van GX";
      colour = "Silver";
      condition = #BrandNew;
      bodyType = #Van;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Nissan NV350 panel van GX in silver. A dependable commercial van with generous load space.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Nissan+NV350";
      featured = false;
    },
    // ---- HONDA ----
    {
      stockId = "HON-001";
      year = 2024;
      make = "Honda";
      model = "Vezel";
      trim = "Z";
      colour = "White";
      condition = #Roro;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "2024 Honda Vezel Z compact SUV in white. A stylish, efficient crossover with Honda reliability.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Honda+Vezel";
      featured = false;
    },
    {
      stockId = "HON-002";
      year = 2025;
      make = "Honda";
      model = "Vezel";
      trim = "X Hunt";
      colour = "Black";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Honda Vezel X Hunt in black. A sporty, well-equipped compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Honda+Vezel";
      featured = false;
    },
    {
      stockId = "HON-003";
      year = 2025;
      make = "Honda";
      model = "Vezel";
      trim = "X Hunt";
      colour = "Grey";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Honda Vezel X Hunt in grey. A refined, feature-rich compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Honda+Vezel";
      featured = false;
    },
    {
      stockId = "HON-004";
      year = 2025;
      make = "Honda";
      model = "Vezel";
      trim = "X Hunt";
      colour = "Green";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Honda Vezel X Hunt in green. A distinctive, well-appointed compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Honda+Vezel";
      featured = false;
    },
    {
      stockId = "HON-005";
      year = 2025;
      make = "Honda";
      model = "Vezel";
      trim = "X Hunt";
      colour = "Pearl";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Honda Vezel X Hunt in pearl white. A premium, feature-packed compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Honda+Vezel";
      featured = false;
    },
    {
      stockId = "HON-006";
      year = 2025;
      make = "Honda";
      model = "Vezel";
      trim = "Z";
      colour = "White";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Honda Vezel Z in white. A sleek, efficient compact SUV with modern features.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Honda+Vezel";
      featured = true;
    },
    {
      stockId = "HON-007";
      year = 2025;
      make = "Honda";
      model = "Vezel";
      trim = "Z";
      colour = "Black";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Honda Vezel Z in black. A bold, well-equipped compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Honda+Vezel";
      featured = false;
    },
    {
      stockId = "HON-008";
      year = 2025;
      make = "Honda";
      model = "Vezel";
      trim = "Z";
      colour = "White";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Honda Vezel Z in white. A refined, efficient compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Honda+Vezel";
      featured = false;
    },
    {
      stockId = "HON-009";
      year = 2025;
      make = "Honda";
      model = "Vezel";
      trim = "Z";
      colour = "Grey";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Honda Vezel Z in grey. A modern, well-appointed compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Honda+Vezel";
      featured = false;
    },
    {
      stockId = "HON-010";
      year = 2025;
      make = "Honda";
      model = "Vezel";
      trim = "Z";
      colour = "Grey";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Honda Vezel Z in grey. A stylish, efficient compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Honda+Vezel";
      featured = false;
    },
    {
      stockId = "HON-011";
      year = 2025;
      make = "Honda";
      model = "Vezel";
      trim = "Z";
      colour = "Grey";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2025 Honda Vezel Z in grey. A dependable, feature-rich compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Honda+Vezel";
      featured = false;
    },
    {
      stockId = "HON-012";
      year = 2026;
      make = "Honda";
      model = "Vezel";
      trim = "Z";
      colour = "Grey";
      condition = #BrandNew;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "Brand new 2026 Honda Vezel Z in grey. The latest Vezel with advanced technology and efficiency.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Honda+Vezel";
      featured = false;
    },
    // ---- TOYOTA ----
    {
      stockId = "TOY-001";
      year = 2025;
      make = "Toyota";
      model = "Hyryder";
      trim = "V";
      colour = "Silver";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2025 Toyota Hyryder V in silver. A modern, efficient compact SUV from Toyota.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-002";
      year = 2025;
      make = "Toyota";
      model = "Hyryder";
      trim = "V Full Hybrid";
      colour = "White";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2025 Toyota Hyryder V full hybrid in white. Outstanding fuel economy with hybrid efficiency.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-003";
      year = 2025;
      make = "Toyota";
      model = "Hyryder";
      trim = "S Neo";
      colour = "Red";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2025 Toyota Hyryder S Neo in red. A sporty, efficient compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-004";
      year = 2025;
      make = "Toyota";
      model = "Hyryder";
      trim = "S Neo";
      colour = "Silver";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2025 Toyota Hyryder S Neo in silver. A refined, well-equipped compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-005";
      year = 2026;
      make = "Toyota";
      model = "Hyryder";
      trim = "S Neo";
      colour = "White";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2026 Toyota Hyryder S Neo in white. The latest Hyryder with modern styling and efficiency.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = true;
    },
    {
      stockId = "TOY-006";
      year = 2026;
      make = "Toyota";
      model = "Hyryder";
      trim = "S Neo";
      colour = "Red";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2026 Toyota Hyryder S Neo in red. A bold, efficient compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-007";
      year = 2026;
      make = "Toyota";
      model = "Hyryder";
      trim = "S Neo";
      colour = "White";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2026 Toyota Hyryder S Neo in white. A dependable, feature-rich compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-008";
      year = 2026;
      make = "Toyota";
      model = "Hyryder";
      trim = "S Neo";
      colour = "Grey";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2026 Toyota Hyryder S Neo in grey. A modern, efficient compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-009";
      year = 2026;
      make = "Toyota";
      model = "Hyryder";
      trim = "S Neo";
      colour = "Gold";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2026 Toyota Hyryder S Neo in gold. A stylish, well-equipped compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-010";
      year = 2026;
      make = "Toyota";
      model = "Taisor";
      trim = "V Spec";
      colour = "White";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?175000;
      priceLabel = "TT$ 175,000";
      description = "Brand new 2026 Toyota Taisor V Spec in white. Special sale price TT$ 175,000 - save TT$ 15,000.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Taisor";
      featured = true;
    },
    {
      stockId = "TOY-011";
      year = 2026;
      make = "Toyota";
      model = "Taisor";
      trim = "V";
      colour = "White";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?175000;
      priceLabel = "TT$ 175,000";
      description = "Brand new 2026 Toyota Taisor V in white. A modern, efficient compact SUV at a special price.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Taisor";
      featured = false;
    },
    {
      stockId = "TOY-012";
      year = 2026;
      make = "Toyota";
      model = "Taisor";
      trim = "V";
      colour = "Grey";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?175000;
      priceLabel = "TT$ 175,000";
      description = "Brand new 2026 Toyota Taisor V in grey. A refined, well-equipped compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Taisor";
      featured = false;
    },
    {
      stockId = "TOY-013";
      year = 2026;
      make = "Toyota";
      model = "Taisor";
      trim = "V";
      colour = "Red";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?175000;
      priceLabel = "TT$ 175,000";
      description = "Brand new 2026 Toyota Taisor V in red. A bold, efficient compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Taisor";
      featured = false;
    },
    {
      stockId = "TOY-014";
      year = 2026;
      make = "Toyota";
      model = "Taisor";
      trim = "V";
      colour = "Red/Black Top";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?175000;
      priceLabel = "TT$ 175,000";
      description = "Brand new 2026 Toyota Taisor V in red with black roof. A sporty, distinctive compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Taisor";
      featured = false;
    },
    {
      stockId = "TOY-015";
      year = 2026;
      make = "Toyota";
      model = "Hyryder";
      trim = "V Neo";
      colour = "Red/Black Top";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2026 Toyota Hyryder V Neo in red with black roof. A sporty, efficient compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-016";
      year = 2026;
      make = "Toyota";
      model = "Hyryder";
      trim = "V Neo";
      colour = "Black";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2026 Toyota Hyryder V Neo in black. A bold, well-equipped compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-017";
      year = 2026;
      make = "Toyota";
      model = "Hyryder";
      trim = "V Neo";
      colour = "White";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2026 Toyota Hyryder V Neo in white. A modern, efficient compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-018";
      year = 2025;
      make = "Toyota";
      model = "Hyryder";
      trim = "V";
      colour = "Red";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2025 Toyota Hyryder V in red. A sporty, efficient compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-019";
      year = 2026;
      make = "Toyota";
      model = "Hyryder";
      trim = "S Neo";
      colour = "Gold";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2026 Toyota Hyryder in gold. A stylish, well-equipped compact SUV.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    {
      stockId = "TOY-020";
      year = 2026;
      make = "Toyota";
      model = "Hyryder";
      trim = "Hybrid";
      colour = "Cave Black";
      condition = #BrandNew;
      bodyType = #SUV;
      price = ?179000;
      priceLabel = "From TT$ 179,000";
      description = "Brand new 2026 Toyota Hyryder hybrid in cave black. Outstanding fuel economy with hybrid efficiency.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder";
      featured = false;
    },
    // ---- LUXURY ----
    {
      stockId = "LUX-001";
      year = 2022;
      make = "Volvo";
      model = "XC40";
      trim = "Plug-In Hybrid";
      colour = "White";
      condition = #Roro;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "2022 Volvo XC40 plug-in hybrid in white. Scandinavian luxury with hybrid efficiency.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Volvo+XC40";
      featured = false;
    },
    {
      stockId = "LUX-002";
      year = 2022;
      make = "Mercedes-Benz";
      model = "C-Class";
      trim = "C180";
      colour = "White";
      condition = #Roro;
      bodyType = #Sedan;
      price = null;
      priceLabel = "Price on request";
      description = "2022 Mercedes-Benz C180 sedan in white. Elegant luxury with refined performance.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Mercedes+C-Class";
      featured = false;
    },
    {
      stockId = "LUX-003";
      year = 2022;
      make = "Mercedes-Benz";
      model = "C-Class";
      trim = "C200 AMG";
      colour = "Grey";
      condition = #Roro;
      bodyType = #Sedan;
      price = ?349000;
      priceLabel = "TT$ 349,000";
      description = "2022 Mercedes-Benz C200 AMG sedan in grey. Sporty luxury with AMG styling.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Mercedes+C-Class";
      featured = false;
    },
    {
      stockId = "LUX-004";
      year = 2022;
      make = "Mercedes-Benz";
      model = "C-Class";
      trim = "C200 AMG";
      colour = "White";
      condition = #Roro;
      bodyType = #Sedan;
      price = ?369000;
      priceLabel = "TT$ 369,000";
      description = "2022 Mercedes-Benz C200 AMG sedan in white. Refined luxury with dynamic performance.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Mercedes+C-Class";
      featured = false;
    },
    {
      stockId = "LUX-005";
      year = 2022;
      make = "Mercedes-Benz";
      model = "C-Class";
      trim = "C200 AMG";
      colour = "Black";
      condition = #Roro;
      bodyType = #Sedan;
      price = ?379000;
      priceLabel = "TT$ 379,000";
      description = "2022 Mercedes-Benz C200 AMG sedan in black with red and black interior. A striking luxury sedan.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Mercedes+C-Class";
      featured = false;
    },
    {
      stockId = "LUX-006";
      year = 2024;
      make = "Audi";
      model = "Q3";
      trim = "Sportback Dynamic Edition";
      colour = "Black";
      condition = #Roro;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "2024 Audi Q3 Sportback Dynamic Edition in black. A sleek, sporty luxury crossover.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Audi+Q3";
      featured = false;
    },
    {
      stockId = "LUX-007";
      year = 2024;
      make = "BMW";
      model = "X2";
      trim = "Electric";
      colour = "White";
      condition = #Roro;
      bodyType = #SUV;
      price = ?390000;
      priceLabel = "TT$ 390,000";
      description = "2024 BMW X2 electric in white. A bold, all-electric luxury crossover at TT$ 390,000.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=BMW+X2";
      featured = true;
    },
    {
      stockId = "LUX-008";
      year = 2024;
      make = "Mercedes-Benz";
      model = "GLB";
      trim = "C180 7-Seater";
      colour = "White";
      condition = #Roro;
      bodyType = #SUV;
      price = null;
      priceLabel = "Price on request";
      description = "2024 Mercedes-Benz GLB C180 7-seater in white. A versatile luxury SUV with seating for seven.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Mercedes+GLB";
      featured = false;
    },
    {
      stockId = "LUX-009";
      year = 2024;
      make = "Mercedes-Benz";
      model = "EQE";
      trim = "EQE350";
      colour = "Black";
      condition = #Roro;
      bodyType = #Sedan;
      price = null;
      priceLabel = "Price on request";
      description = "2024 Mercedes-Benz EQE350 electric sedan in black with red accents. Cutting-edge electric luxury.";
      imageUrl = "https://placehold.co/800x600/002366/ffffff?text=Mercedes+EQE";
      featured = false;
    },
  ];

  public func listVehicles() : [Types.Vehicle] {
    seedVehicles;
  };

  public func getVehicle(stockId : Text) : ?Types.Vehicle {
    seedVehicles.find(func v = v.stockId == stockId);
  };

  public func listVehiclesByMake(make : Text) : [Types.Vehicle] {
    seedVehicles.filter(func v = v.make.toLower() == make.toLower());
  };

  public func submitInquiry(inquiries : List.List<Types.Inquiry>, inquiry : Types.Inquiry) : () {
    inquiries.add(inquiry);
  };
};
