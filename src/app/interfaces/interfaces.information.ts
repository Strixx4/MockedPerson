export interface personInformation{
    name: string,
    lastname: string,
    age: number
}
export interface addressinformation{
    city: string,
    cap: string,
    street: string,
    at: string | null
}
export interface cultureInformation{
    college: string | null,
    highSchool: string | null,
}
export interface workInformation{
    salary: string | null,
    rank: string | null
}

export interface information{
    person: personInformation,
    address: addressinformation,
    culture: cultureInformation,
    work: workInformation
}