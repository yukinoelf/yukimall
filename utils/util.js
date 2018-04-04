let getGoods = (ctx, cb) => {
  let tableId = getApp().globalData.tableGoodsId,
    Goods = new wx.BaaS.TableObject(tableId)

  Goods.find().then(res => cb(res))
    .catch(err => console.dir(err))
}

let getGood = (ctx, cb) => {
  let tableId = getApp().globalData.tableGoodsId,
    Goods = new wx.BaaS.TableObject(tableId)

  let query = new wx.BaaS.Query()
  let id = ctx.data.id
  query.compare('id', '=', id)
  console.log(id)

  Goods.setQuery(query).find()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}

let getShopCartGood = (ctx, cb) => {
  let tableId = getApp().globalData.tableGoodsId,
    Goods = new wx.BaaS.TableObject(tableId)

  let query = new wx.BaaS.Query()
  let ids = ctx.data.ids
  query.in('id', ids)
  console.log(ids)

  Goods.setQuery(query).find()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}

let addGood = (ctx, cb) => {
  let tableId = getApp().globalData.tableGoodsId,
    Goods = new wx.BaaS.TableObject(tableId),
    good = Goods.create()

  let name = ctx.data.name,
    cover = ctx.data.cover,
    picture = ctx.data.picture,
    price = ctx.data.price,
    discription = ctx.data.discription

  let data = {
    name,
    cover,
    picture,
    price,
    discription
  }

  good.set(data)
    .save()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}

module.exports = {
  getGoods: getGoods,
  addGood: addGood,
  getGood: getGood,
  getShopCartGood: getShopCartGood
}