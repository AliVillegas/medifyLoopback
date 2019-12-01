import {Entity, model, property} from '@loopback/repository';

@model()
export class Gender extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<Gender>) {
    super(data);
  }
}

export interface GenderRelations {
  // describe navigational properties here
}

export type GenderWithRelations = Gender & GenderRelations;
