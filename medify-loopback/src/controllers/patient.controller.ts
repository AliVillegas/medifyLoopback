import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Patient} from '../models';
import {PatientRepository} from '../repositories';

export class PatientController {
  constructor(
    @repository(PatientRepository)
    public patientRepository: PatientRepository,
  ) {}

  @post('/patients', {
    responses: {
      '200': {
        description: 'Patient model instance',
        content: {'application/json': {schema: getModelSchemaRef(Patient)}},
      },
      '400': {
        description: 'Bad request, Patient POST Failed',
      },
      '401': {
        description: 'Unauthorized access, Patient POST Failed',
      },
      '403': {
        description: 'Forbidden request, Patient POST Failed',
      },
      '500': {
        description: 'Internal server error, Patient POST Failed',
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patient, {
            title: 'NewPatient',
          }),
        },
      },
    })
    patient: Patient,
  ): Promise<Patient> {
    return this.patientRepository.create(patient);
  }

  @get('/patients/count', {
    responses: {
      '200': {
        description: 'Patient model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Patient))
    where?: Where<Patient>,
  ): Promise<Count> {
    return this.patientRepository.count(where);
  }

  @get('/patients', {
    responses: {
      '200': {
        description: 'Array of Patient model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Patient)},
          },
        },
      },
      '400': {
        description: 'Bad request, Patients GET Failed',
      },
      '401': {
        description: 'Unauthorized access, Patients GET Failed',
      },
      '403': {
        description: 'Forbidden request, Patients GET Failed',
      },
      '500': {
        description: 'Internal server error, Patients GET Failed',
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Patient))
    filter?: Filter<Patient>,
  ): Promise<Patient[]> {
    return this.patientRepository.find(filter);
  }

  @patch('/patients', {
    responses: {
      '200': {
        description: 'Patient PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
      '400': {
        description: 'Bad request, Patients patch Failed',
      },
      '401': {
        description: 'Unauthorized access, Patients patch Failed',
      },
      '403': {
        description: 'Forbidden request, Patients patch Failed',
      },
      '500': {
        description: 'Internal server error, Patients patch Failed',
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patient, {partial: true}),
        },
      },
    })
    patient: Patient,
    @param.query.object('where', getWhereSchemaFor(Patient))
    where?: Where<Patient>,
  ): Promise<Count> {
    return this.patientRepository.updateAll(patient, where);
  }

  @get('/patients/{id}', {
    responses: {
      '200': {
        description: 'Patient model instance',
        content: {'application/json': {schema: getModelSchemaRef(Patient)}},
      },
      '400': {
        description: 'Bad request, Patient GET Failed',
      },
      '401': {
        description: 'Unauthorized access, Patient GET Failed',
      },
      '403': {
        description: 'Forbidden request, Patient GET Failed',
      },
      '500': {
        description: 'Internal server error, Patient GET Failed',
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Patient> {
    return this.patientRepository.findById(id);
  }

  @patch('/patients/{id}', {
    responses: {
      '204': {
        description: 'Patient PATCH success',
      },
      '400': {
        description: 'Bad request, Patient patch Failed',
      },
      '401': {
        description: 'Unauthorized access, Patient patch Failed',
      },
      '403': {
        description: 'Forbidden request, Patient patch Failed',
      },
      '500': {
        description: 'Internal server error, Patient patch Failed',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patient, {partial: true}),
        },
      },
    })
    patient: Patient,
  ): Promise<void> {
    await this.patientRepository.updateById(id, patient);
  }

  @put('/patients/{id}', {
    responses: {
      '204': {
        description: 'Patient PUT success',
      },
      '400': {
        description: 'Bad request, Patient PUT Failed',
      },
      '401': {
        description: 'Unauthorized access, Patient PUT  Failed',
      },
      '403': {
        description: 'Forbidden request, Patient PUT  Failed',
      },
      '500': {
        description: 'Internal server error, Patient PUT Failed',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() patient: Patient,
  ): Promise<void> {
    await this.patientRepository.replaceById(id, patient);
  }

  @del('/patients/{id}', {
    responses: {
      '204': {
        description: 'Patient DELETE success',
      },
      '400': {
        description: 'Bad request, Patient DELETE Failed',
      },
      '401': {
        description: 'Unauthorized access, Patient DELETE Failed',
      },
      '403': {
        description: 'Forbidden request, Patient DELETE Failed',
      },
      '500': {
        description: 'Internal server error, Patient DELETE Failed',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.patientRepository.deleteById(id);
  }
}
