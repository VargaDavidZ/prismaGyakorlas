import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PrismaService } from 'src/prisma.service';
import { SongsService } from 'src/songs/songs.service';
import { connect } from 'http2';

@Injectable()
export class PlaylistsService {

  db: PrismaService

  constructor(db: PrismaService)
  {
    this.db = db;
  }


  create(createPlaylistDto: CreatePlaylistDto) {
    this.db.playlist.create({
      data:createPlaylistDto
    })
  }

  findAll() {
    return `This action returns all playlists`;
  }

  findOne(id: number) {
    return this.db.playlist.findUnique(
      {
        where: {id:id},
        include: {songs:true}
      }
      
    );
  }
  //---------------------------
  async addSongToList(listId:number,songId:number)
  {
    await this.db.song.update({
      where: {id: songId},
      data: {
        playlistId: listId
      }
    })
  }


  async deleteSongFromList(listId:number,songId:number)//WIP
  {
    await this.db.song.update({
      where: {id: songId},
      data: {
        playlistId: 0
      }
    })
  }



  //---------------------------

  update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return `This action updates a #${id} playlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} playlist`;
  }
}
