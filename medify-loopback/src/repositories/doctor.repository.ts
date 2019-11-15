import {DefaultCrudRepository} from '@loopback/repository';
import {Doctor, DoctorRelations} from '../models/doctor.model';
import {MongoConnectorDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DoctorRepository extends DefaultCrudRepository<
  Doctor,
  typeof Doctor.prototype.id,
  DoctorRelations
> {
  constructor(
    @inject('datasources.MongoConnector') dataSource: MongoConnectorDataSource,
  ) {
    super(Doctor, dataSource);
  }
}
