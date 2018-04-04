// pages/homePage/homePage.js
const util = require('../../utils/util.js')

Page({
  data: {
    imageWidth: wx.getSystemInfoSync().windowWidth,
    imgUrls: [
      'https://cloud-minapp-9425.cloud.ifanrusercontent.com/1ebrrFQjvwgUZzRg.jpg',
      'https://cloud-minapp-9425.cloud.ifanrusercontent.com/1ebrrFTAYvsDVGmx.jpg',
      'https://cloud-minapp-9425.cloud.ifanrusercontent.com/1ebrrFKIKORQhHMN.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    goodsList: [],
  },

  onLoad: function () {
    util.getGoods(this, (res) => {
      console.log(res.data.objects)
      this.setData({
        goodsList: res.data.objects
      })
    })
  },

})