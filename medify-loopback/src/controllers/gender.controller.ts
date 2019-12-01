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
import {Gender} from '../models';
import {GenderRepository} from '../repositories';

export class GenderController {
  constructor(
    @repository(GenderRepository)
    public genderRepository: GenderRepository,
  ) {}

  @post('en/genders', {
    responses: {
      '200': {
        description: 'Gender model instance',
        content: {'application/json': {schema: getModelSchemaRef(Gender)}},
      },
      '400': {
        description: 'Bad request, Gender POST Failed',
      },
      '401': {
        description: 'Unauthorized access, Gender POST Failed',
      },
      '403': {
        description: 'Forbidden request, Gender POST Failed',
      },
      '500': {
        description: 'Internal server error, Gender POST Failed',
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gender, {
            title: 'NewGender',
            exclude: ['id'],
          }),
        },
      },
    })
    gender: Omit<Gender, 'id'>,
  ): Promise<Gender> {
    return this.genderRepository.create(gender);
  }

  @get('en/genders/count', {
    responses: {
      '200': {
        description: 'Gender model count',
        content: {'application/json': {schema: CountSchema}},
      },
      '400': {
        description: 'Bad request, Genders count Failed',
      },
      '401': {
        description: 'Unauthorized access, Genders count Failed',
      },
      '403': {
        description: 'Forbidden request, Genders count Failed',
      },
      '500': {
        description: 'Internal server error, Genders count Failed',
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Gender))
    where?: Where<Gender>,
  ): Promise<Count> {
    return this.genderRepository.count(where);
  }

  @get('en/genders', {
    responses: {
      '200': {
        description: 'Array of Gender model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Gender)},
          },
        },
      },
      '400': {
        description: 'Bad request, Genders GET Failed',
      },
      '401': {
        description: 'Unauthorized access, Genders GET Failed',
      },
      '403': {
        description: 'Forbidden request, Genders GET Failed',
      },
      '500': {
        description: 'Internal server error, Genders GET Failed',
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Gender))
    filter?: Filter<Gender>,
  ): Promise<Gender[]> {
    return this.genderRepository.find(filter);
  }

  @patch('en/genders', {
    responses: {
      '200': {
        description: 'Gender PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
      '400': {
        description: 'Bad request, Genders patch Failed',
      },
      '401': {
        description: 'Unauthorized access, Genders patch  Failed',
      },
      '403': {
        description: 'Forbidden request, Genders patch  Failed',
      },
      '500': {
        description: 'Internal server error, Genders patch Failed',
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gender, {partial: true}),
        },
      },
    })
    gender: Gender,
    @param.query.object('where', getWhereSchemaFor(Gender))
    where?: Where<Gender>,
  ): Promise<Count> {
    return this.genderRepository.updateAll(gender, where);
  }

  @get('en/genders/{id}', {
    responses: {
      '200': {
        description: 'Gender model instance',
        content: {'application/json': {schema: getModelSchemaRef(Gender)}},
      },
      '400': {
        description: 'Bad request, Gender GET Failed',
      },
      '401': {
        description: 'Unauthorized access, Gender GET Failed',
      },
      '403': {
        description: 'Forbidden request, Gender GET Failed',
      },
      '500': {
        description: 'Internal server error, Gender GET Failed',
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Gender> {
    return this.genderRepository.findById(id);
  }

  @patch('en/genders/{id}', {
    responses: {
      '204': {
        description: 'Gender PATCH success',
      },
      '400': {
        description: 'Bad request, Gender patch Failed',
      },
      '401': {
        description: 'Unauthorized access, Gender patch  Failed',
      },
      '403': {
        description: 'Forbidden request, Gender patch  Failed',
      },
      '500': {
        description: 'Internal server error, Gender patch Failed',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gender, {partial: true}),
        },
      },
    })
    gender: Gender,
  ): Promise<void> {
    await this.genderRepository.updateById(id, gender);
  }

  @put('en/genders/{id}', {
    responses: {
      '204': {
        description: 'Gender PUT success',
      },
      '400': {
        description: 'Bad request, Gender PUT Failed',
      },
      '401': {
        description: 'Unauthorized access, Gender PUT  Failed',
      },
      '403': {
        description: 'Forbidden request, Gender PUT  Failed',
      },
      '500': {
        description: 'Internal server error, Gender PUT Failed',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() gender: Gender,
  ): Promise<void> {
    await this.genderRepository.replaceById(id, gender);
  }

  @del('en/genders/{id}', {
    responses: {
      '204': {
        description: 'Gender DELETE success',
      },
      '400': {
        description: 'Bad request, Gender DELETE Failed',
      },
      '401': {
        description: 'Unauthorized access, Gender DELETE  Failed',
      },
      '403': {
        description: 'Forbidden request, Gender DELETE  Failed',
      },
      '500': {
        description: 'Internal server error, Gender DELETE Failed',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.genderRepository.deleteById(id);
  }
}
