import { Injectable } from '@nestjs/common';
import { filter, map } from 'rxjs/operators';
import { CreateLogDto } from './dto/CreateLog.dto';

@Injectable()
export class LogsService {
  constructor() {}

  saveRequestLog(createLogDto: CreateLogDto) {
    
  }
}
