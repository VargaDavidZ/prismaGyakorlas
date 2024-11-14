import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) { }

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  //-------------------------------------


  @Get("/free")
  findFree() {
    return this.songsService.findFree();
  }



  @Get("/top")
  findTop(@Query('count') count) {
    if (count > 1) {
      return this.songsService.findTop(count);
    }
    else {
      return this.songsService.findTop("10");
    }

  }

  @Get("/popularArtists")
  findPopularArtist()
  {
    return this.songsService.findPopularArtist();
  }

  //-------------------------------------

  @Get(':id(\\d+)')
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songsService.update(+id, updateSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songsService.remove(+id);
  }
}
