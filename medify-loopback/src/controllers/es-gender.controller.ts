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
import {SGen} from '../models';
import {SGenRepository} from '../repositories';

export class EsGenderController {
  constructor(
    @repository(SGenRepository)
    public sGenRepository: SGenRepository,
  ) {}

  @post('es/genders', {
    responses: {
      '200': {
        description: 'Gender model instance',
        content: {'application/json': {schema: getModelSchemaRef(SGen)}},
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
          schema: getModelSchemaRef(SGen, {
            title: 'NewSGen',
            exclude: ['id'],
          }),
        },
      },
    })
    sGen: Omit<SGen, 'id'>,
  ): Promise<SGen> {
    return this.sGenRepository.create(sGen);
  }

  @get('/es/genders/count', {
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
    @param.query.object('where', getWhereSchemaFor(SGen)) where?: Where<SGen>,
  ): Promise<Count> {
    return this.sGenRepository.count(where);
  }

  @get('/es/genders', {
    responses: {
      '200': {
        description: 'Array of SGen model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SGen)},
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
    @param.query.object('filter', getFilterSchemaFor(SGen))
    filter?: Filter<SGen>,
  ): Promise<SGen[]> {
    return this.sGenRepository.find(filter);
  }

  @patch('/es/genders', {
    responses: {
      '200': {
        description: 'SGen PATCH success count',
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
          schema: getModelSchemaRef(SGen, {partial: true}),
        },
      },
    })
    sGen: SGen,
    @param.query.object('where', getWhereSchemaFor(SGen)) where?: Where<SGen>,
  ): Promise<Count> {
    return this.sGenRepository.updateAll(sGen, where);
  }

  @get('/es/genders/{id}', {
    responses: {
      '200': {
        description: 'Gender model instance',
        content: {'application/json': {schema: getModelSchemaRef(SGen)}},
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
  async findById(@param.path.string('id') id: string): Promise<SGen> {
    return this.sGenRepository.findById(id);
  }

  @patch('/es/genders/{id}', {
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
          schema: getModelSchemaRef(SGen, {partial: true}),
        },
      },
    })
    sGen: SGen,
  ): Promise<void> {
    await this.sGenRepository.updateById(id, sGen);
  }

  @put('/es/genders/{id}', {
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
    @requestBody() sGen: SGen,
  ): Promise<void> {
    await this.sGenRepository.replaceById(id, sGen);
  }

  @del('/es/genders/{id}', {
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
    await this.sGenRepository.deleteById(id);
  }
}
