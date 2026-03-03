import { config, fields, collection } from '@keystatic/core';

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? { kind: 'github', repo: 'neowsb2k2/Timito-Media_V3' }
    : { kind: 'local' },
  ui: {
    brand: { name: 'Timito Media' },
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*/',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Titel', validation: { isRequired: true } } }),
        description: fields.text({
          label: 'Beschreibung (SEO)',
          validation: { isRequired: true, length: { min: 50, max: 160 } },
        }),
        publishDate: fields.date({ label: 'Veröffentlicht am', validation: { isRequired: true } }),
        updatedDate: fields.date({ label: 'Aktualisiert am' }),
        author: fields.select({
          label: 'Autor',
          options: [
            { label: 'Mike', value: 'Mike' },
            { label: 'Christina', value: 'Christina' },
          ],
          defaultValue: 'Mike',
        }),
        category: fields.select({
          label: 'Kategorie',
          options: [
            { label: 'Tracking', value: 'Tracking' },
            { label: 'Google Ads', value: 'Google Ads' },
            { label: 'Social Ads', value: 'Social Ads' },
            { label: 'Webdesign', value: 'Webdesign' },
            { label: 'Strategie', value: 'Strategie' },
          ],
          defaultValue: 'Tracking',
        }),
        readTime: fields.text({ label: 'Lesezeit', defaultValue: '5 min' }),
        cover: fields.image({
          label: 'Cover-Bild',
          directory: 'src/content/blog',
          publicPath: '/src/content/blog',
        }),
        draft: fields.checkbox({ label: 'Entwurf', defaultValue: false }),
        content: fields.markdoc({
          label: 'Inhalt',
          options: {
            image: {
              directory: 'src/content/blog',
              publicPath: '/src/content/blog',
            },
          },
        }),
      },
    }),
  },
});
