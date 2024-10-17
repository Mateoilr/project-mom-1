import { Injectable } from '@nestjs/common';
import { CreateTheoryDto } from './dto/create-theory.dto';
import { UpdateTheoryDto } from './dto/update-theory.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TheoryService {
  constructor(private prisma: PrismaService){}
  
  create(createTheoryDto: CreateTheoryDto) {
    return 'This action adds a new theory';
  }

  findAllAlive() {
    return this.prisma.theory.findMany({
      where: {confirmed: false},
    });
  }

  findAllconfirmed(){
    return this.prisma.theory.findMany({
      where: {confirmed: true},
  });
}


  findOne(id: number) {
    return this.prisma.theory.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTheoryDto: UpdateTheoryDto) {
    return this.prisma.theory.update({
      where: {id},
      data: updateTheoryDto,
    });
  }

  remove(id: number) {
    return this.prisma.theory.delete({
      where: {id},
    });
  }
}
