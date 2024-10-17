import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TheoryService } from './theory.service';
import { CreateTheoryDto } from './dto/create-theory.dto';
import { UpdateTheoryDto } from './dto/update-theory.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('theory')
@ApiTags('theory')
export class TheoryController {
  constructor(private readonly theoryService: TheoryService) {}

  @Post()
  create(@Body() createTheoryDto: CreateTheoryDto) {
    return this.theoryService.create(createTheoryDto);
  }

  @Get()
  findAll() {
    return this.theoryService.findAllAlive();
  }

  @Get('confirmed')//localhost:3000/theory/confirmed
  findAllconfirmed(){
    return this.theoryService.findAllconfirmed();
  }

  @Get(':id')//localhost:3000/theory/1
  findOne(@Param('id') id: string) {
    return this.theoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTheoryDto: UpdateTheoryDto) {
    return this.theoryService.update(+id, updateTheoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theoryService.remove(+id);
  }
}
