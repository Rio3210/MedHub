import { Module } from '@nestjs/common';
import { ReservationsModule } from './reservations/reservations.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { DatabaseModule } from './database/database.module';
import { MedicinesModule } from './medicines/medicines.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { EmployeesModule } from './employees/employees.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [ MedicinesModule, DatabaseModule, PharmaciesModule, ReservationsModule, AdministratorsModule, EmployeesModule, PassportModule ],
})
export class AppModule {}
