import { IsDefined, Max, Min, MIN } from "class-validator";

export class CreateSongDto {
    @IsDefined()
    cim: string;
    @IsDefined()
    szerzo: string;
    @IsDefined()
    hossz: number;
    @IsDefined()
    @Min(0)
    ar: number;
    @IsDefined()
    @Min(0)
    @Max(5)
    ertekeles: number

}
