import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'iz5mk3lw',
    dataset: 'production',
    apiVersion: '2023-07-30',
    useCdn: true,
})