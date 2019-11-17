import {Entity, model, property} from '@loopback/repository';
import {Prescription} from './prescription.model';
import {Appointment} from './appointment.model';

@model()
export class Patient extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  cognitoId?: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  appointments?: Appointment[];

  @property({
    type: 'string',
  })
  weight?: string;

  @property({
    type: 'string',
  })
  height?: string;

  @property({
    type: 'string',
  })
  bloodType?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  alergies?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  cronicDiseases?: string[];

  @property({
    type: 'string',
  })
  notes?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  prescriptions?: Prescription[];

  constructor(data?: Partial<Patient>) {
    super(data);
  }
}

export interface PatientRelations {
  // describe navigational properties here
}

export type PatientWithRelations = Patient & PatientRelations;
