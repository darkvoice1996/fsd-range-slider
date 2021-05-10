import $ from 'jquery'
import jQuery from 'jquery'

(function( $ ) {

    let methods = {
        createInput() {
            return `<input type="range" class="rs-input" name="" id="" min="0" max="100" value="25">`
        }
    }

    $.fn.fsdRangeSlider = function(options) {
   
        let settings = $.extend({
            min: 0,
            max: 100,
            secondThumb: true,
        }, options)

        return this.each(function () {
            $(this).html('<div class="rs"></div>')



            if (!settings.secondThumb) {
                $('.rs').html(methods.createInput())
                let input = $('.rs-input')
            } else {
                $('rs').html(methods.createInput())
                $('rs').html(methods.createInput())
                let inputLeft = $('rs-input')[0]
                let inputRight = $('rs-input')[1]


            }
        })
  
    };
  })(jQuery);

  $('.fsdRangeSlider').fsdRangeSlider()

function createInput(arg0: number, arg1: number, arg2: number): any {
    throw new Error('Function not implemented.');
}
