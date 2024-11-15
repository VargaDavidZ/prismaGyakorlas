import { PartialType } from '@nestjs/mapped-types';
import { CreateSongDto } from './create-song.dto';

export class UpdateSongDto extends PartialType(CreateSongDto) {

    cim: string;

    szerzo: string;

    hossz: number;

    ar: number;

    ertekeles: number;
    playlistId: number
}
