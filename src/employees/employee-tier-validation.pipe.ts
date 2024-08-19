import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { EmployeeTire } from "./employees.enum";

@Injectable()
export class EmployeeTierValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(!(value.tier in EmployeeTire)){
      throw new BadRequestException({message: `${value.tier} is not a valid tire`});
    }
    return value;
  }
}
