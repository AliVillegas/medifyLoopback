import {Entity, model, property} from '@loopback/repository';

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
  email?: string;

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
  appointments?: object[];

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
  prescriptions?: object[];

  constructor(data?: Partial<Patient>) {
    super(data);
  }
}

export interface PatientRelations {
  // describe navigational properties here
}

export type PatientWithRelations = Patient & PatientRelations;
