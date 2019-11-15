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
    public medRepository : MedRepository,
  ) {}

  @post('/meds', {
    responses: {
      '200': {
        description: 'Med model instance',
        content: {'application/json': {schema: getModelSchemaRef(Med)}},
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
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.medRepository.deleteById(id);
  }
}
