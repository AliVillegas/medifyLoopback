import {Entity, model, property} from '@loopback/repository';

@model()
export class Appointment extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  concept: string;

  @property({
    type: 'string',
    required: true,
  })
  dayName: string;

  @property({
    type: 'string',
    required: true,
  })
  dayNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  startTime: string;

  @property({
    type: 'string',
    required: true,
  })
  endTime: string;

  @property({
    type: 'string',
    required: true,
  })
  location: string;

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


  constructor(data?: Partial<Appointment>) {
    super(data);
  }
}

export interface AppointmentRelations {
  // describe navigational properties here
}

export type AppointmentWithRelations = Appointment & AppointmentRelations;
