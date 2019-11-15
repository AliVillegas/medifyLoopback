import {Entity, model, property} from '@loopback/repository';

@model()
export class Med extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  constructor(data?: Partial<Med>) {
    super(data);
  }
}

export interface MedRelations {
  // describe navigational properties here
}

export type MedWithRelations = Med & MedRelations;
