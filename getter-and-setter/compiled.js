'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var GetThings = (function () {
    function GetThings(size) {
        _classCallCheck(this, GetThings);

        this.size = size;
    }

    _createClass(GetThings, [{
        key: 'Length',
        get: function get() {
            return this.size;
        },
        set: function set(value) {
            this.length = value;
            console.log('length = ' + value);
        }
    }]);

    return GetThings;
})();

var thing = new GetThings(10);

console.log('length = ' + thing.Length);

thing.Length = 11;
