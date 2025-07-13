import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const res : any = process.env.JWT_SECRET;
    return res.toString();
  }
}
