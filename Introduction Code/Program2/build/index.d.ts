interface card {
    title: string;
    status: boolean;
    id: number;
}
interface person {
    firstname: string;
    lastname?: string;
}
declare function getName({ firstname, lastname }: person): string;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PersonDetails {
    prefix?: string;
    phones: number[];
    address: string[];
    email: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}
declare let data: PersonDetails[];
declare let Myobj: {
    phones: number[];
    address: string[];
    email: string;
    firstname: string;
    lastname: string;
};
declare function PhoneBook(obj: PersonDetails): void;
