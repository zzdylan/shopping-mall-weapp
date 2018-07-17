// pages/classify/classify.js
var app = getApp()
Page({
  data: {
    navLeftItems: [],
    navRightItems: [],
    curNav: 1,
    curIndex: 0
  },
  onLoad: function () {

    var that = this

    that.setData({
      navLeftItems: [
        {
          id:1
        },
        {
          id:2
        }
      ],
      navRightItems: []
    })
  },

  //事件处理函数
  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    })
  }

})