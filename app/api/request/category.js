import client from "../client"

const featuredCategory = 'getFeaturedCategory'
const getFeaturedCategory = () => client.get(featuredCategory)

export {
    getFeaturedCategory
}