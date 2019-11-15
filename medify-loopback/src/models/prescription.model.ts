import {Entity, model, property} from '@loopback/repository';

@model()
export class Prescription extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  dayNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  details: string;

  @property({
    type: 'string',
  })
  location?: string;

  @property({
    type: 'string',
    required: true,
  })
  month: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'string',
    required: true,
  })
  endDate: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  meds?: object[];


  constructor(data?: Partial<Prescription>) {
    super(data);
  }
}

export interface PrescriptionRelations {
  // describe navigational properties here
}

export type PrescriptionWithRelations = Prescription & PrescriptionRelations;
