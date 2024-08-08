import { PartialType } from '@nestjs/mapped-types';
import { CreateRandomuserDto } from './create-randomuser.dto';

export class UpdateRandomuserDto extends PartialType(CreateRandomuserDto) {}
