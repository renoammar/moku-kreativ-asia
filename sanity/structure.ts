import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('post').title('Newsroom Posts'),
      S.documentTypeListItem('portfolio').title('Portfolio Videos'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['post', 'portfolio'].includes(item.getId() ?? '')
      ),
    ])
