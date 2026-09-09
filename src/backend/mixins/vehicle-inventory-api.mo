import List "mo:core/List";
import Types "../types/vehicle-inventory";
import VehicleInventoryLib "../lib/vehicle-inventory";

mixin (inquiries : List.List<Types.Inquiry>) {
  public query func listVehicles() : async [Types.Vehicle] {
    VehicleInventoryLib.listVehicles();
  };

  public query func getVehicle(stockId : Text) : async ?Types.Vehicle {
    VehicleInventoryLib.getVehicle(stockId);
  };

  public query func listVehiclesByMake(make : Text) : async [Types.Vehicle] {
    VehicleInventoryLib.listVehiclesByMake(make);
  };

  public shared func submitInquiry(inquiry : Types.Inquiry) : async () {
    VehicleInventoryLib.submitInquiry(inquiries, inquiry);
  };
};
