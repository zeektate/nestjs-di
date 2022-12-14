import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  boot() {
    console.log('Booting up...');
    console.log(`Computation: ${this.cpuService.compute(10, 20)}`);
    return this.diskService.getData();
  }
}
