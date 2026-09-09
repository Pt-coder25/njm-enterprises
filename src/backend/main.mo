import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import Expose "mo:caffeineai-oql/Expose";
import OQL "mo:caffeineai-oql";
import ListEntity "mo:caffeineai-oql/ListEntity";
import Entity "mo:caffeineai-oql/Entity";
import RecordValue "mo:caffeineai-oql/RecordValue";
import TextValue "mo:caffeineai-oql/TextValue";
import NatValue "mo:caffeineai-oql/NatValue";
import BoolValue "mo:caffeineai-oql/BoolValue";
import IntValue "mo:caffeineai-oql/IntValue";
import Types "types/vehicle-inventory";
import VehicleInventoryLib "lib/vehicle-inventory";
import VehicleInventoryApi "mixins/vehicle-inventory-api";
import ApiDocMixin "mixins/api-doc";

actor {
  let accessControlState : AccessControl.AccessControlState;
  let inquiries : List.List<Types.Inquiry>;

  include MixinAuthorization(accessControlState, null);
  include VehicleInventoryApi(inquiries);
  include Expose({
    entities = [
      OQL.Entity.manual<Types.Vehicle>("vehicle", func () = VehicleInventoryLib.seedVehicles.values(), "Vehicle", "stockId")
        .sample({
          stockId = "";
          year = 0;
          make = "";
          model = "";
          trim = "";
          colour = "";
          condition = #BrandNew;
          bodyType = #SUV;
          price = null;
          priceLabel = "";
          description = "";
          imageUrl = "";
          featured = false;
        })
        .payload("stockId", func v = v.stockId)
        .payload("year", func v = v.year)
        .payload("make", func v = v.make)
        .payload("model", func v = v.model)
        .payload("trim", func v = v.trim)
        .payload("colour", func v = v.colour)
        .payload("condition", func v = (switch (v.condition) { case (#BrandNew) "BrandNew"; case (#Roro) "Roro" }))
        .payload("bodyType", func v = (switch (v.bodyType) { case (#SUV) "SUV"; case (#Sedan) "Sedan"; case (#Hatchback) "Hatchback"; case (#Van) "Van"; case (#Coupe) "Coupe"; case (#Wagon) "Wagon" }))
        .payload("price", func v = (switch (v.price) { case null 0; case (?p) p }))
        .payload("priceLabel", func v = v.priceLabel)
        .payload("description", func v = v.description)
        .payload("imageUrl", func v = v.imageUrl)
        .payload("featured", func v = v.featured)
        .public_()
        .build(),
      inquiries.toEntity("inquiry", "Inquiry", "createdAt")
        .sample({
          name = "";
          phone = "";
          vehicleOfInterest = "";
          message = "";
          createdAt = 0;
        })
        .controllerOnly()
        .build(),
    ];
  });
  include ApiDocMixin();
};
