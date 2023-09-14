import { ApiProperty } from '@nestjs/swagger';

enum Country {
  DE = 'DE',
  UK = 'UK',
}

export class CountryDto {
  @ApiProperty({
    enum: Country,
    enumName: 'Country',
  })
  country: string;
}
