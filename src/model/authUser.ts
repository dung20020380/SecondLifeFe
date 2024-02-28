export type AuthUser = {
    given_name?: string | undefined;
    family_name?: string | undefined;
    email?: string;
    id: string;
    roles?: string[];
    bffLogoutUrl?: string;
}