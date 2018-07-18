const Toast = require('../../zanui-weapp/toast/toast')
Page({
  data: {
    active:'',
    leftItems:[
      { id: 1, name: '分类名1' },
      { id: 2, name: '分类名2' },
      { id: 3, name: '分类名3' },
      { id: 4, name: '分类名4' },
      { id: 5, name: '分类名5' },
      { id: 6, name: '分类名6' },
      { id: 7, name: '分类名7' },
      { id: 8, name: '分类名8' },
      { id: 9, name: '分类名9' },
      { id: 10, name: '分类名10' },
      { id: 11, name: '分类名11' },
      { id: 12, name: '分类名12' },
      { id: 13, name: '分类名13' }
    ]
  },
  showToast(event) {
    console.log(event.currentTarget.dataset.id);
    Toast.setDefaultOptions({
      selector: '#zan-toast'
    });

    Toast(event.currentTarget.dataset.name);
  },
})