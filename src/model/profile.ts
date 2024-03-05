export type Profile = {
    Address?: string,
    Gender?: string,
    FullName?: string,
    PhoneNumber?: string,
    DateOfBirth?: string,
    Email?: string
}
export type ImageBase64 = {
    Base64String  : string
}
export type FormAddress = {
    name: string;
    email: string;
    phone: string;
    city: string;
    district: string;
    commune: string;
    addressDetail: string;
};