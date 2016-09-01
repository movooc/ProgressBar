// create ProgressBar modules
(function($) {
    // ProgressBar
    
    window.ProgressBar = function(element, options){
        var self = this;
        var settings = $.extend ({
          duration: 10000,
          percentage: 0,
          lag: 50
        }, options || {});
        // 初始化
        self.duration = settings.duration;
        self.percentage = (settings.percentage >= 0 && settings.percentage <= 100) ? settings.percentage : 0;
        self.$element = $(element);
        self.$progress_bar = self.$element.find('.progress_bar');
        self.width = self.$element.width()*0.9;
        self.lag = settings.lag;
        self.timer = null;
        // 计算时间间隔
        self.lag = (function(){
            if(self.duration < 50){
                return self.duration;
            }else if(self.duration < 100000){
                return 50;
            }else{
                return Math.pow(10, `${self.duration}`.length - 5)*50;
            }
        })();
        //
        ProgressBar.prototype.interval.apply(self);
    };

    ProgressBar.prototype.interval = function() {
      var self = this;
      // self.acceleration = Math.sqrt(2*self.width/self.duration);
      // 加速度
      self.acceleration = 2*self.width/Math.pow(self.duration,2);
      // 当前行走时间
      self.curDuration = 0;
      // 当前行走距离
      self.distance = 0;
      // 开始加速度
      self.run();
    };

    ProgressBar.prototype.run = function() {
        var self = this;
        var lag = (function(){
            if(self.duration < 100000){
                return self.lag;
            }else{
                return (`${self.duration}`.length - 5)*50;
            }
        })();
        //
        self.timer = window.setInterval(function(){
            // 当前时间
            self.curDuration = self.curDuration + self.lag;
            // 距离
            self.distance = self.distance + (self.acceleration*Math.pow(self.curDuration, 2));
            self.accelerate(`${self.distance}px`);
        }, lag);
    };

    ProgressBar.prototype.accelerate = function(distance) {
        // 判断条件
        if(this.distance >= this.width){
          this.$progress_bar.stop(false, true).animate({width:`${this.width}px`}, {duration:`${this.lag}`});
          window.clearInterval(this.timer);
        }else{
          this.$progress_bar.stop(false, true).animate({width:`${distance}`}, {duration:`${this.lag}`});
        }
        //
        //console.log(this.curDuration);
    };

    ProgressBar.prototype.complete = function(callback){
        // 清除时间计数器
        window.clearInterval(this.timer);
        this.$progress_bar.animate({width:'100%'}, {complete:callback,duration:100});
    };

    ProgressBar.prototype.stop = function(callback){
        // 清除时间计数器
        window.clearInterval(this.timer);
    };

    $.fn.progressBar = function(options) {
        return this.each(function () {
          var $element = $(this);
          //if ($element.data('progressing')) return;
          $element.data('progressing', new ProgressBar(this, options));
        });
    };
})(jQuery);