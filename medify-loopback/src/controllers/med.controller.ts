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
import {Med} from '../models';
import {MedRepository} from '../repositories';

export class MedController {
  constructor(
    @repository(MedRepository)
    public medRepository: MedRepository,
  ) {}

  @post('/meds', {
    responses: {
      '200': {
        description: 'Med model instance',
        content: {'application/json': {schema: getModelSchemaRef(Med)}},
      },
      '400': {
        description: 'Bad request, Med POST Failed',
      },
      '401': {
        description: 'Unauthorized access, Med POST Failed',
      },
      '403': {
        description: 'Forbidden request, Med POST Failed',
      },
      '500': {
        description: 'Internal server error, Med POST Failed',
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Med, {
            title: 'NewMed',
          }),
        },
      },
    })
    med: Med,
  ): Promise<Med> {
    return this.medRepository.create(med);
  }

  @get('/meds/count', {
    responses: {
      '200': {
        description: 'Med model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Med)) where?: Where<Med>,
  ): Promise<Count> {
    return this.medRepository.count(where);
  }

  @get('/meds', {
    responses: {
      '200': {
        description: 'Array of Med model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Med)},
          },
        },
      },
      '400': {
        description: 'Bad request, could not GET Meds',
      },
      '401': {
        description: 'Unauthorized access, could not GET Meds',
      },
      '403': {
        description: 'Forbidden request, could not GET Meds',
      },
      '500': {
        description: 'Internal server error, could not GET Meds',
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Med)) filter?: Filter<Med>,
  ): Promise<Med[]> {
    return this.medRepository.find(filter);
  }

  @patch('/meds', {
    responses: {
      '200': {
        description: 'Med PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
      '400': {
        description: 'Bad request, could not patch Meds',
      },
      '401': {
        description: 'Unauthorized access, could not patch Meds',
      },
      '403': {
        description: 'Forbidden request, could not patch Meds',
      },
      '500': {
        description: 'Internal server error, could not patch Meds',
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Med, {partial: true}),
        },
      },
    })
    med: Med,
    @param.query.object('where', getWhereSchemaFor(Med)) where?: Where<Med>,
  ): Promise<Count> {
    return this.medRepository.updateAll(med, where);
  }

  @get('/meds/{id}', {
    responses: {
      '200': {
        description: 'Med model instance',
        content: {'application/json': {schema: getModelSchemaRef(Med)}},
      },
      '400': {
        description: 'Bad request, could not GET Med',
      },
      '401': {
        description: 'Unauthorized access, could not GET Med',
      },
      '403': {
        description: 'Forbidden request, could not GET Med',
      },
      '500': {
        description: 'Internal server error, could not GET Med',
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Med> {
    return this.medRepository.findById(id);
  }

  @patch('/meds/{id}', {
    responses: {
      '204': {
        description: 'Med PATCH success',
      },
      '400': {
        description: 'Bad request, could not patch Med',
      },
      '401': {
        description: 'Unauthorized access, could not patch Med',
      },
      '403': {
        description: 'Forbidden request, could not patch Med',
      },
      '500': {
        description: 'Internal server error, could not patch Med',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Med, {partial: true}),
        },
      },
    })
    med: Med,
  ): Promise<void> {
    await this.medRepository.updateById(id, med);
  }

  @put('/meds/{id}', {
    responses: {
      '204': {
        description: 'Med PUT success',
      },
      '400': {
        description: 'Bad request, Med PUT Failed',
      },
      '401': {
        description: 'Unauthorized access, Med PUT Failed',
      },
      '403': {
        description: 'Forbidden request, Med PUT Failed',
      },
      '500': {
        description: 'Internal server error, Med PUT Failed',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() med: Med,
  ): Promise<void> {
    await this.medRepository.replaceById(id, med);
  }

  @del('/meds/{id}', {
    responses: {
      '204': {
        description: 'Med DELETE success',
      },
      '400': {
        description: 'Bad request, Med DELETE Failed',
      },
      '401': {
        description: 'Unauthorized access, Med DELETE Failed',
      },
      '403': {
        description: 'Forbidden request, Med DELETE Failed',
      },
      '500': {
        description: 'Internal server error, Med DELETE Failed',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.medRepository.deleteById(id);
  }
}
