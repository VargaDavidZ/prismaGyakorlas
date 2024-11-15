import { Song } from "@prisma/client"

export class Playlist {
    nev: string
    songs: Song
}
