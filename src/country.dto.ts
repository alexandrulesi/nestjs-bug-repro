import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';

enum Country {
  DE = 'DE',
  UK = 'UK',
}

const CountrySwaggerDefinition: ApiPropertyOptions = {
  description: 'https://unstats.un.org/unsd/methodology/m49',
  enum: Country,
  enumName: 'Country',
};

export class CountryDto {
  @ApiProperty({ ...CountrySwaggerDefinition, isArray: true })
  countries: Country[];
}
