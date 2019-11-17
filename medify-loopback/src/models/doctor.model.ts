import {Entity, model, property} from '@loopback/repository';
import {Appointment} from './appointment.model';

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
  cognitoId?: string;

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
  appointments?: Appointment[];

  constructor(data?: Partial<Doctor>) {
    super(data);
  }
}

export interface DoctorRelations {
  // describe navigational properties here
}
export type DoctorWithRelations = Doctor & DoctorRelations;
