// index.js
// 获取应用实例
const app = getApp()

var amapFile = require('../../libs/amap-wx.130.js');//如：..­/..­/libs/amap-wx.js

var markersData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {}
  },
  makertap: function(e) {
    var id = e.markerId;
    var that = this;
    that.showMarkerInfo(markersData,id);
    that.changeMarkerColor(markersData,id);
  },
  onLoad: function() {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({key:'42a59697868323c73bbf7ff60d7f831d'});
    myAmapFun.getPoiAround({
      // iconPathSelected: '选中 marker 图标的相对路径', //如：..­/..­/img/marker_checked.png
      // iconPath: '未选中 marker 图标的相对路径', //如：..­/..­/img/marker.png
      success: function(data){
        markersData = data.markers;
        that.setData({
          markers: markersData
        });
        that.setData({
          latitude: markersData[0].latitude
        });
        that.setData({
          longitude: markersData[0].longitude
        });
        that.showMarkerInfo(markersData,0);
      },
      fail: function(info){
        wx.showModal({title:info.errMsg})
      }
    })
  },
  showMarkerInfo: function(data,i){
    var that = this;
    that.setData({
      textData: {
        name: data[i].name,
        desc: data[i].address
      }
    });
  },
  changeMarkerColor: function(data,i){
    var that = this;
    var markers = [];
    for(var j = 0; j < data.length; j++){
      if(j==i){
        // data[j].iconPath = "选中 marker 图标的相对路径"; //如：..­/..­/img/marker_checked.png
      }else{
        // data[j].iconPath = "未选中 marker 图标的相对路径"; //如：..­/..­/img/marker.png
      }
      markers.push(data[j]);
    }
    that.setData({
      markers: markers
    });
  }

})