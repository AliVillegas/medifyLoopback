import {DefaultCrudRepository} from '@loopback/repository';
import {SGen, SGenRelations} from '../models';
import {MongoConnectorDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SGenRepository extends DefaultCrudRepository<
  SGen,
  typeof SGen.prototype.id,
  SGenRelations
> {
  constructor(
    @inject('datasources.MongoConnector') dataSource: MongoConnectorDataSource,
  ) {
    super(SGen, dataSource);
  }
}
