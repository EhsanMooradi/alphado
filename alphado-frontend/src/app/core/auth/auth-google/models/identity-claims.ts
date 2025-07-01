export interface IdentityClaims {
    iss: string;                // Issuer, z. B. "https://accounts.google.com"
    azp?: string;               // Authorized party (optional)
    aud: string;                // Audience = deine Client-ID
    sub: string;                // Subject (Google User-ID)
    email?: string;
    email_verified?: boolean;
    name?: string;
    picture?: string;
    given_name?: string;
    family_name?: string;
    locale?: string;
    hd?: string;                // Hosted domain (z. B. bei GSuite)
    iat: number;                // Issued At (UNIX Timestamp)
    exp: number;                // Expiry (UNIX Timestamp)
}
