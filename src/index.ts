import $ from 'jquery'
import jQuery from 'jquery'

(function( $ ) {

    let methods = {
        createInput() {
            return `<input type="range" class="rs-input" name="" id="" min="0" max="100" value="25">`
        }
    }

    $.fn.fsdRangeSlider = function(options) {

        interface ISettings {
            min: number
            max: number
            isInterval: boolean
        }
   
        let settings : ISettings = $.extend({
            min: 0,
            max: 100,

            isInterval: true,

        }, options)

        return this.each(function () {
            
        })
  
    };
  })(jQuery);

  $('.fsdRangeSlider').fsdRangeSlider()
