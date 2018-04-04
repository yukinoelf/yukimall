// pages/detail/detail.js
const util = require('../../utils/util.js')

Page({
  data: {
    id:'',
    good:{
      name:'',
      cover:'',
      picture:[],
      price:'',
      discription:''
    },
    addFlag:false
  },
  onLoad: function (options) {
    var that = this
    that.setData({
      id: options.id
    })
    console.log(that.data.id)
    util.getGood(that, (res) => {
      console.log(res.data.objects[0])
      that.goodProcess(res.data.objects[0])
      that.setData({
        good: that.data.good
      })
    })
  },

  goodProcess: function (databaseGood) {
    this.data.good.name = databaseGood.name
    this.data.good.cover = databaseGood.cover
    var str = databaseGood.picture;
    var arr = str.split(',');
    this.data.good.picture = arr
    this.data.good.discription = databaseGood.discription
    this.data.good.price = databaseGood.price
  },

  addShopCart: function(e) {
    var goods = wx.getStorageSync('goods') || []
    if (this.data.addFlag) {
      this.setData({ addFlag:false})
      goods.shift(this.data.id)
    } else {
      this.setData({ addFlag: true })
      goods.unshift(this.data.id)
    }
    wx.setStorageSync('goods', goods)
    console.log(wx.getStorageSync('goods'))
  }
})