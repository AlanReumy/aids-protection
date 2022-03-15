const baseUrl = 'http://139.196.47.8:3000/api'
<<<<<<< HEAD
const request = (url = '', date = {}, type = 'GET', header = {}) => {
=======
const request = (url = '', data = {}, type = 'GET', header = {}) => {
>>>>>>> 9d9134f77d841f4b1c241c2587c2257e7060243d
  return new Promise((resolve, reject) => {
    uni
      .request({
        method: type,
        url: baseUrl + url,
        data: data,
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
