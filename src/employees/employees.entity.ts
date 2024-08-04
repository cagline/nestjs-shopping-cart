export interface Employees {
    id: string
    firstName: string
    lastName: string
    designation: string
    tier:EmployeeTire
}

export enum EmployeeTire {
    TIER_ONE = 1,
    TIER_TWO,
    TIER_THREE,
    TIER_FOUR,
    TIRE_ZERO
}