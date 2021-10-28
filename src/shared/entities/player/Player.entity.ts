import { Exclude, Type } from 'class-transformer';
import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';

export class Player {
  @ApiPropertyOptional({
    type: String,
    default: uuidv4(),
  })
  id?: string = uuidv4();

  @ApiProperty({ type: String, default: faker?.internet.userName })
  username!: string;

  @ApiProperty({ type: String, default: faker?.internet.password() })
  password!: string;

  @ApiProperty()
  @Type(() => Date)
  createdAt: Date = new Date();

  @Type(() => Date)
  @ApiProperty()
  updatedAt: Date = new Date();

  @ApiHideProperty()
  @Exclude()
  deletedAt!: Date | null;

  constructor(partial?: Partial<Player>) {
    Object.assign(this, partial);
  }
}
