import {DefaultCrudRepository} from '@loopback/repository';
import {Med, MedRelations} from '../models';
import {MongoConnectorDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MedRepository extends DefaultCrudRepository<
  Med,
  typeof Med.prototype.id,
  MedRelations
> {
  constructor(
    @inject('datasources.MongoConnector') dataSource: MongoConnectorDataSource,
  ) {
    super(Med, dataSource);
  }
}
