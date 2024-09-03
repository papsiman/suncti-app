import { Blob } from "buffer";

export interface IUser {
    Id: number,
    Username: string,
    Email?: string,
    Password: string,
}

export interface ISetting {
    Id: number,
    Logo?: string,
    LogoBase64?: string,
    Title?: string,
    Des?: string,
    Tel?: string,
    Fax?: string,
    Email?: string,
}

export interface IContent {
    Id: number,
    Component: string,
    Title?: string,
    Des?: string,
    Img?: string,
    ImgBase64?: string,
    ImgW?: number,
    ImgH?: number,
    Link?: string,
    Pdf?: string,
    PdfBase64?: string,
}