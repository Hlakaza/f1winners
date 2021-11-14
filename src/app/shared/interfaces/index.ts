export interface Season {
    season: string,
    url: string;
}

export interface Driver {
    code: string;
    dateOfBirth: string;
    driverId: string;
    familyName: string;
    givenName: string;
    nationality: string;
    permanentNumber: string;
    url: string;
}

export interface DriverStanding {
    Driver: Driver;
    points: string;
    position: string;
    positionText: string;
    wins: string;
}
export interface Race {
    Circuit: Circuit;
    Results: Result[];
    date: string;
    raceName: string;
    round: string;
    season: string;
    time: string;
    url: string;
}
export interface Circuit {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: Location;
}
export interface Location {
    lat: string;
    long: string;
    locality: string;
    country: string;
}
export interface Result {
    Constructor?: any;
    Driver: Driver;
    FastestLap?: any;
    Time?: any;
    grid: string;
    laps: string;
    number: string;
    points: string;
    position: string;
    positionText: string;
    status: string;
}