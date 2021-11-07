import client from "../client"

const getProductByRemarkEndPoint = 'getProductByRemark'
const getProductByRemark = (remark) => client.get(getProductByRemarkEndPoint, {remark: remark })

export {
    getProductByRemark
}