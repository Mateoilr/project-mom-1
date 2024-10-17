import { ApiProperty } from "@nestjs/swagger";

export class CreateTheoryDto {
    @ApiProperty()
    title: string;
    @ApiProperty({required: false})
    description: string;
    @ApiProperty()
    category: string;
    @ApiProperty()
    popularity: number;
    @ApiProperty({default: false})
    confirmed: boolean;
}
