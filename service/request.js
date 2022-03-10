const baseUrl = 'https://www.fastmock.site/mock/ec7bda1b0baae4a5db4d597ed890e4a5/yeb'
const request = (url = '', date = {}, type = 'GET', header = {}) => {
  return new Promise((resolve, reject) => {
    uni
      .request({
        method: type,
        url: baseUrl + url,
        data: date,
        header: header,
        dataType: 'json'
      })
      .then((response) => {
        setTimeout(function () {
          uni.hideLoading()
        }, 200)
        let [error, res] = response
        resolve(res.data)
      })
      .catch((error) => {
        let [err, res] = error
        reject(err)
      })
  })
}
export default request
