module {
  public type Condition = {
    #BrandNew;
    #Roro;
  };

  public type BodyType = {
    #SUV;
    #Sedan;
    #Hatchback;
    #Van;
    #Coupe;
    #Wagon;
  };

  public type Vehicle = {
    stockId : Text;
    year : Nat;
    make : Text;
    model : Text;
    trim : Text;
    colour : Text;
    condition : Condition;
    bodyType : BodyType;
    price : ?Nat;
    priceLabel : Text;
    description : Text;
    imageUrl : Text;
    featured : Bool;
  };

  public type Inquiry = {
    name : Text;
    phone : Text;
    vehicleOfInterest : Text;
    message : Text;
    createdAt : Int;
  };
};
