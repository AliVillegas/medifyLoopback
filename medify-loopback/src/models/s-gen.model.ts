import {Entity, model, property} from '@loopback/repository';

@model()
export class SGen extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<SGen>) {
    super(data);
  }
}

export interface SGenRelations {
  // describe navigational properties here
}

export type SGenWithRelations = SGen & SGenRelations;
