import client from "../client"

const getProductByRemarkEndPoint = 'getProductByRemark'
const getProductByRemark = (remark) => client.get(getProductByRemarkEndPoint, {remark: remark })
const getCategoryAndProductByCategory = (category_slug) => client.get('getCategoryAndProductByCategory/'+category_slug)

export {
    getProductByRemark,
    getCategoryAndProductByCategory
}