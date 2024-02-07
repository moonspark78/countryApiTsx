export type CountriesType = {
    id: number;
    name: {
        common: string;
    };
    population: number;
    region: string;
    flags: {
        png: string;
    };
    fifa: string;
}