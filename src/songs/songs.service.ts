import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';
import { json } from 'stream/consumers';

@Injectable()
export class SongsService {

  db: PrismaService;

    constructor(db: PrismaService) {
    this.db = db;
  }

  create(createSongDto: CreateSongDto) {
    return this.db.song.create({
      data:createSongDto
    })
  }

  findAll() {
    return this.db.song.findMany();
  }

  findOne(id: number) {
    return this.db.song.findUnique({
      where: {id}
    })
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    try{
    return this.db.song.update({
      where: {id},
      data: updateSongDto
    
    })
    }
    catch{
      return undefined
    }

  }

  async remove(id: number) {
    try{
      await this.db.song.delete({
        where: {id}
      })
      return true;
    } catch
    {
      return false
    }
  }


  //-------------------------------------------------


  findFree() {
    return this.db.song.findMany({
      where: {
        ar: 0
      }
    });
  }


  findTop(inpLimit?: string) //visszaadja a limit darabszámú legmagasabbra értékelt számokat
  {
    return this.db.song.findMany({
      orderBy:{
        ertekeles: 'desc',
        
      },
      take:  parseInt(inpLimit) 

    })
  }


  async findPopularArtist()
  {
    const songCounts = await this.db.song.groupBy({
      by: ['szerzo'],
      _count: {
        _all: true
      },
    });

    let myArray = []

    songCounts.forEach(item => {
      myArray.push("{artist: " + item.szerzo + ", numberOfSongs: " + item._count._all + "}")
    });



    return JSON.stringify(myArray)

  }



}
