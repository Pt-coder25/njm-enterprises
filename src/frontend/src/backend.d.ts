import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Result {
    hasMore: boolean;
    rows: Array<Array<Cell>>;
}
export interface Cell {
    value: Value;
    name: string;
}
export type Result__1 = {
    __kind__: "ok";
    ok: null;
} | {
    __kind__: "err";
    err: Error_;
};
export type Error_ = {
    __kind__: "FrontendOriginsNotConfigured";
    FrontendOriginsNotConfigured: null;
} | {
    __kind__: "MixedSsoSources";
    MixedSsoSources: {
        otherKeys: Array<string>;
        ssoKeys: Array<string>;
    };
} | {
    __kind__: "Stale";
    Stale: {
        ageNs: bigint;
    };
} | {
    __kind__: "MalformedCandid";
    MalformedCandid: null;
} | {
    __kind__: "AmbiguousAttribute";
    AmbiguousAttribute: {
        field: string;
        sources: Array<string>;
    };
} | {
    __kind__: "NoAttributes";
    NoAttributes: null;
} | {
    __kind__: "UnknownNonce";
    UnknownNonce: null;
} | {
    __kind__: "UntrustedSsoSource";
    UntrustedSsoSource: {
        domain: string;
    };
} | {
    __kind__: "MissingField";
    MissingField: string;
} | {
    __kind__: "FrontendOriginMismatch";
    FrontendOriginMismatch: {
        got: string;
        expected: Array<string>;
    };
};
export interface Inquiry {
    vehicleOfInterest: string;
    name: string;
    createdAt: bigint;
    message: string;
    phone: string;
}
export type Value = {
    __kind__: "int";
    int: bigint;
} | {
    __kind__: "nat";
    nat: bigint;
} | {
    __kind__: "float";
    float: number;
} | {
    __kind__: "bool";
    bool: boolean;
} | {
    __kind__: "null";
    null: null;
} | {
    __kind__: "text";
    text: string;
};
export interface Vehicle {
    model: string;
    featured: boolean;
    stockId: string;
    make: string;
    trim: string;
    year: bigint;
    description: string;
    imageUrl: string;
    colour: string;
    price?: bigint;
    bodyType: BodyType;
    condition: Condition;
    priceLabel: string;
}
export enum BodyType {
    SUV = "SUV",
    Van = "Van",
    Sedan = "Sedan",
    Wagon = "Wagon",
    Hatchback = "Hatchback",
    Coupe = "Coupe"
}
export enum Condition {
    Roro = "Roro",
    BrandNew = "BrandNew"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    execute(qJson: string): Promise<Result>;
    getApiDoc(): Promise<string>;
    getCallerUserRole(): Promise<UserRole>;
    getVehicle(stockId: string): Promise<Vehicle | null>;
    isCallerAdmin(): Promise<boolean>;
    listVehicles(): Promise<Array<Vehicle>>;
    listVehiclesByMake(make: string): Promise<Array<Vehicle>>;
    schema(): Promise<string>;
    submitInquiry(inquiry: Inquiry): Promise<void>;
}
