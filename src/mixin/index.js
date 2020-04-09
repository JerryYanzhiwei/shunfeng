import jsonData from '@/config/province.js'

export default {
  methods: {
    getUser () {
      const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      return userInfo
    },
    getZone (code) {
      code = Number(code)
      const arr = jsonData.filter((val) => code === val.code)
      return arr[0].matchZone
    },
    getProvince (zone, code) {
      zone = Number(zone)
      code = Number(code)
      const arr = jsonData.filter((val) => zone === val.code)
      const provinceArr = arr[0].province.filter((val) => val.code === code)
      return provinceArr[0].city
    }
  }
}
