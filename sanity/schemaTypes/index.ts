import { type SchemaTypeDefinition } from 'sanity'
import {portfolioType} from './portfolioType'
import {postType} from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, portfolioType],
}
