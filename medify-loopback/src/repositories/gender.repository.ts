import {DefaultCrudRepository} from '@loopback/repository';
import {Gender, GenderRelations} from '../models';
import {MongoConnectorDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GenderRepository extends DefaultCrudRepository<
  Gender,
  typeof Gender.prototype.id,
  GenderRelations
> {
  constructor(
    @inject('datasources.MongoConnector') dataSource: MongoConnectorDataSource,
  ) {
    super(Gender, dataSource);
  }
}
