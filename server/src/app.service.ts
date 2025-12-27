import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getDatabaseStatus() {
    const userCount  = await this.prisma.user.count();
    const serieCount = await this.prisma.serie.count();

    return {
      status: 'connected',
      database: 'seriestracker',
      users: userCount,
      series: serieCount,
    };
  }
}
