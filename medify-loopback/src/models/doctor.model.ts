import {Entity, model, property} from '@loopback/repository';

@model()
export class Doctor extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
    required: true,
  })
  serviceId: string;

  @property({
    type: 'string',
    required: false,
  })
  institute: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  appointments?: object[];

  constructor(data?: Partial<Doctor>) {
    super(data);
  }
}

export interface DoctorRelations {
  // describe navigational properties here
}
export type DoctorWithRelations = Doctor & DoctorRelations;
