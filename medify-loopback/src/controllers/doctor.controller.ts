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
import {Doctor} from '../models/doctor.model';
import {DoctorRepository} from '../repositories';

export class DoctorController {
  constructor(
    @repository(DoctorRepository)
    public doctorRepository: DoctorRepository,
  ) {}

  @post('/doctors', {
    responses: {
      '200': {
        description: 'Doctor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Doctor)}},
      },
      '400': {
        description: 'Bad request, Doctor POST Failed',
      },
      '401': {
        description: 'Unauthorized access, Doctor POST Failed',
      },
      '403': {
        description: 'Forbidden request, Doctor POST Failed',
      },
      '500': {
        description: 'Internal server error, Doctor POST Failed',
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Doctor, {
            title: 'NewDoctor',
          }),
        },
      },
    })
    doctor: Doctor,
  ): Promise<Doctor> {
    return this.doctorRepository.create(doctor);
  }

  @get('/doctors/count', {
    responses: {
      '200': {
        description: 'Doctor model count',
        content: {'application/json': {schema: CountSchema}},
      },
      '400': {
        description: 'Bad request, Doctor GET Failed',
      },
      '401': {
        description: 'Unauthorized access, Doctor GET Failed',
      },
      '403': {
        description: 'Forbidden request, Doctor GET Failed',
      },
      '500': {
        description: 'Internal server error, Doctor GET Failed',
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Doctor))
    where?: Where<Doctor>,
  ): Promise<Count> {
    return this.doctorRepository.count(where);
  }

  @get('/doctors', {
    responses: {
      '200': {
        description: 'Array of Doctor model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Doctor)},
          },
        },
        '400': {
          description: 'Bad request, Doctors GET Failed',
        },
        '401': {
          description: 'Unauthorized access, Doctors GET Failed',
        },
        '403': {
          description: 'Forbidden request, Doctors GET Failed',
        },
        '500': {
          description: 'Internal server error, Doctors GET Failed',
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Doctor))
    filter?: Filter<Doctor>,
  ): Promise<Doctor[]> {
    return this.doctorRepository.find(filter);
  }

  @patch('/doctors', {
    responses: {
      '200': {
        description: 'Doctor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
      '400': {
        description: 'Bad request, Doctors patch Failed',
      },
      '401': {
        description: 'Unauthorized access, Doctors patch Failed',
      },
      '403': {
        description: 'Forbidden request, Doctors patch Failed',
      },
      '500': {
        description: 'Internal server error, Doctors patch Failed',
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Doctor, {partial: true}),
        },
      },
    })
    doctor: Doctor,
    @param.query.object('where', getWhereSchemaFor(Doctor))
    where?: Where<Doctor>,
  ): Promise<Count> {
    return this.doctorRepository.updateAll(doctor, where);
  }

  @get('/doctors/{id}', {
    responses: {
      '200': {
        description: 'Doctor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Doctor)}},
      },
      '400': {
        description: 'Bad request, Doctor GET Failed',
      },
      '401': {
        description: 'Unauthorized access, Doctor GET Failed',
      },
      '403': {
        description: 'Forbidden request, Doctor GET Failed',
      },
      '500': {
        description: 'Internal server error, Doctor GET Failed',
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Doctor> {
    return this.doctorRepository.findById(id);
  }

  @patch('/doctors/{id}', {
    responses: {
      '204': {
        description: 'Doctor PATCH success',
      },
      '400': {
        description: 'Bad request, Doctor patch Failed',
      },
      '401': {
        description: 'Unauthorized access, Doctor patch Failed',
      },
      '403': {
        description: 'Forbidden request, Doctor patch Failed',
      },
      '500': {
        description: 'Internal server error, Doctor patch Failed',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Doctor, {partial: true}),
        },
      },
    })
    doctor: Doctor,
  ): Promise<void> {
    await this.doctorRepository.updateById(id, doctor);
  }

  @put('/doctors/{id}', {
    responses: {
      '204': {
        description: 'Doctor PUT success',
      },
      '400': {
        description: 'Bad request, Doctor PUT Failed',
      },
      '401': {
        description: 'Unauthorized access, Doctor PUT  Failed',
      },
      '403': {
        description: 'Forbidden request, Doctor PUT  Failed',
      },
      '500': {
        description: 'Internal server error, Doctor PUT Failed',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() doctor: Doctor,
  ): Promise<void> {
    await this.doctorRepository.replaceById(id, doctor);
  }

  @del('/doctors/{id}', {
    responses: {
      '204': {
        description: 'Doctor DELETE success',
      },
      '400': {
        description: 'Bad request, Doctor DELETE Failed',
      },
      '401': {
        description: 'Unauthorized access, Doctor DELETE Failed',
      },
      '403': {
        description: 'Forbidden request, Doctor DELETE Failed',
      },
      '500': {
        description: 'Internal server error, Doctor DELETE Failed',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.doctorRepository.deleteById(id);
  }
}
