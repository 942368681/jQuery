//创建一个Tab方法
$.fn.extend({
   tabs: function(opt) {
      let tab = new Tab(this);
      tab.init(opt);
      return this;
   }
});
//写一个tab类
class Tab {
   constructor(that) {
      //类的初始化
      this.settings = {
         btns: [
            '新闻', '体育', '游戏', '音乐'
         ],
         contents: [
            [
               {
                  id: 0,
                  content: '台风来了'
               }, {
                  id: 0,
                  content: '沙特国王花1亿💵度假'
               }, {
                  id: 0,
                  content: '呵呵呵呵呵呵呵呵呵呵呵呵'
               }
            ],
            '夜王拿标杆把龙给弄死了',
            '炉石小德逆天了',
            '说唱'
         ]
      };
      this.that = that;
   };
   init(opt) {
      $.extend(this.settings, opt);
      this.createBtns();
      this.createContents();
      this.Events();
   };
   createBtns() {
      $.each(this.settings.btns, (i, e) => {
         let btn = $(`<button class = "${i == 0
            ? 'active'
            : ''}">${e}</button>`);
         this.that.append(btn);
      });
   }
   createContents() {
      $.each(this.settings.contents, (i, e) => {
         let content = $(`<div class = "${i == 0
            ? 'show'
            : 'hide'}"></div>`);
         let inner = null;
         if (e.push) {
            inner = $('<ul>');
            $.each(e, (i, e) => {
               inner.append($(`<li>${e.content}</li>`));
            })
         } else {
            inner = e;
         }
         content.append(inner);
         this.that.append(content);
      });
   };
   Events() {
      let _this = this;
      $('#app').find('button').click(function() {
         _this.change($(this).index());
      });
   };
   change(index){
      $('#app').find('button').eq(index).addClass('active').siblings('button').removeClass('active');
      $('#app').find('div').eq(index).addClass('show').removeClass('hide').siblings('div').addClass('hide');
   };
};
