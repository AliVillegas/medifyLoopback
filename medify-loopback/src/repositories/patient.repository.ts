import {DefaultCrudRepository} from '@loopback/repository';
import {Patient, PatientRelations} from '../models';
import {MongoConnectorDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PatientRepository extends DefaultCrudRepository<
  Patient,
  typeof Patient.prototype.id,
  PatientRelations
> {
  constructor(
    @inject('datasources.MongoConnector') dataSource: MongoConnectorDataSource,
  ) {
    super(Patient, dataSource);
  }
}
