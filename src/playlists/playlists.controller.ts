import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistsService.create(createPlaylistDto);
  }


  //---------------------

  @Post(':listId/:songId')
  addSongToList(@Param('listId') listId: string, @Param('songId') songId:string) {
    return this.playlistsService.addSongToList(+listId,+songId);
  }

  @Delete(':listId/:songId')//WIP
  deleteSongFromList(@Param('listId') listId: string, @Param('songId') songId:string) {
    return this.playlistsService.deleteSongFromList(+listId,+songId);
  }
  //---------------------

  @Get()
  findAll() {
    return this.playlistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlistsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaylistDto: UpdatePlaylistDto) {
    return this.playlistsService.update(+id, updatePlaylistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playlistsService.remove(+id);
  }
}
