'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _weCropper = require('./../npm/we-cropper/dist/we-cropper.js');

var _weCropper2 = _interopRequireDefault(_weCropper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cropper = function (_wepy$component) {
  _inherits(Cropper, _wepy$component);

  function Cropper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cropper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cropper.__proto__ || Object.getPrototypeOf(Cropper)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      $: null,
      id: 'cropper',
      disable: true
    }, _this.props = {
      options: Object
    }, _this.computed = {
      width: function width() {
        return this.options.width;
      },
      height: function height() {
        return this.options.height;
      }
    }, _this.methods = {
      ts: function ts(e) {
        this.$.touchStart(e);
      },
      tm: function tm(e) {
        this.$.touchMove(e);
      },
      te: function te(e) {
        this.$.touchEnd(e);
      },
      canvasError: function canvasError(e) {
        console.error(e.detail.errMsg);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cropper, [{
    key: 'pushOrigin',
    value: function pushOrigin(src) {
      this.$.pushOrign(src);
    }
  }, {
    key: 'updateCanvas',
    value: function updateCanvas() {
      this.$.updateCanvas();
    }
  }, {
    key: 'getCropperImage',
    value: function getCropperImage(fn, ev) {
      this.$.getCropperImage(fn);
    }
  }, {
    key: 'getCropperBase64',
    value: function getCropperBase64(fn, ev) {
      this.$.getCropperImage(fn);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      var options = this.options;
      options.id = this.id;
      this.$ = new _weCropper2.default(options).on('ready', function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this2.$emit.apply(_this2, ['ready'].concat(args));
      }).on('beforeImageLoad', function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        _this2.$emit.apply(_this2, ['beforeImageLoad'].concat(args));
      }).on('imageLoad', function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        _this2.$emit.apply(_this2, ['imageLoad'].concat(args));
      }).on('beforeDraw', function () {
        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        _this2.$emit.apply(_this2, ['beforeDraw'].concat(args));
      }).updateCanvas();
    }
  }]);

  return Cropper;
}(_wepy2.default.component);

exports.default = Cropper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyb3BwZXIuanMiXSwibmFtZXMiOlsiQ3JvcHBlciIsImRhdGEiLCIkIiwiaWQiLCJkaXNhYmxlIiwicHJvcHMiLCJvcHRpb25zIiwiT2JqZWN0IiwiY29tcHV0ZWQiLCJ3aWR0aCIsImhlaWdodCIsIm1ldGhvZHMiLCJ0cyIsImUiLCJ0b3VjaFN0YXJ0IiwidG0iLCJ0b3VjaE1vdmUiLCJ0ZSIsInRvdWNoRW5kIiwiY2FudmFzRXJyb3IiLCJjb25zb2xlIiwiZXJyb3IiLCJkZXRhaWwiLCJlcnJNc2ciLCJzcmMiLCJwdXNoT3JpZ24iLCJ1cGRhdGVDYW52YXMiLCJmbiIsImV2IiwiZ2V0Q3JvcHBlckltYWdlIiwib24iLCJhcmdzIiwiJGVtaXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxJLEdBQU87QUFDTEMsU0FBRyxJQURFO0FBRUxDLFVBQUksU0FGQztBQUdMQyxlQUFTO0FBSEosSyxRQU1QQyxLLEdBQVE7QUFDTkMsZUFBU0M7QUFESCxLLFFBSVJDLFEsR0FBVztBQUNUQyxXQURTLG1CQUNBO0FBQ1AsZUFBTyxLQUFLSCxPQUFMLENBQWFHLEtBQXBCO0FBQ0QsT0FIUTtBQUlUQyxZQUpTLG9CQUlDO0FBQ1IsZUFBTyxLQUFLSixPQUFMLENBQWFJLE1BQXBCO0FBQ0Q7QUFOUSxLLFFBU1hDLE8sR0FBVTtBQUNSQyxRQURRLGNBQ0pDLENBREksRUFDRDtBQUNMLGFBQUtYLENBQUwsQ0FBT1ksVUFBUCxDQUFrQkQsQ0FBbEI7QUFDRCxPQUhPO0FBSVJFLFFBSlEsY0FJSkYsQ0FKSSxFQUlEO0FBQ0wsYUFBS1gsQ0FBTCxDQUFPYyxTQUFQLENBQWlCSCxDQUFqQjtBQUNELE9BTk87QUFPUkksUUFQUSxjQU9KSixDQVBJLEVBT0Q7QUFDTCxhQUFLWCxDQUFMLENBQU9nQixRQUFQLENBQWdCTCxDQUFoQjtBQUNELE9BVE87QUFVUk0saUJBVlEsdUJBVUtOLENBVkwsRUFVUTtBQUNkTyxnQkFBUUMsS0FBUixDQUFjUixFQUFFUyxNQUFGLENBQVNDLE1BQXZCO0FBQ0Q7QUFaTyxLOzs7OzsrQkFlSUMsRyxFQUFLO0FBQ2YsV0FBS3RCLENBQUwsQ0FBT3VCLFNBQVAsQ0FBaUJELEdBQWpCO0FBQ0Q7OzttQ0FDZTtBQUNkLFdBQUt0QixDQUFMLENBQU93QixZQUFQO0FBQ0Q7OztvQ0FDZ0JDLEUsRUFBSUMsRSxFQUFJO0FBQ3ZCLFdBQUsxQixDQUFMLENBQU8yQixlQUFQLENBQXVCRixFQUF2QjtBQUNEOzs7cUNBQ2lCQSxFLEVBQUlDLEUsRUFBSTtBQUN4QixXQUFLMUIsQ0FBTCxDQUFPMkIsZUFBUCxDQUF1QkYsRUFBdkI7QUFDRDs7OzZCQUVPO0FBQUE7O0FBQ1IsVUFBTXJCLFVBQVUsS0FBS0EsT0FBckI7QUFDQUEsY0FBUUgsRUFBUixHQUFhLEtBQUtBLEVBQWxCO0FBQ0EsV0FBS0QsQ0FBTCxHQUFTLHdCQUFjSSxPQUFkLEVBQ1J3QixFQURRLENBQ0wsT0FESyxFQUNJLFlBQWE7QUFBQSwyQ0FBVEMsSUFBUztBQUFUQSxjQUFTO0FBQUE7O0FBQ3hCLGVBQUtDLEtBQUwsZ0JBQVcsT0FBWCxTQUF1QkQsSUFBdkI7QUFDRCxPQUhRLEVBSVJELEVBSlEsQ0FJTCxpQkFKSyxFQUljLFlBQWE7QUFBQSwyQ0FBVEMsSUFBUztBQUFUQSxjQUFTO0FBQUE7O0FBQ2xDLGVBQUtDLEtBQUwsZ0JBQVcsaUJBQVgsU0FBaUNELElBQWpDO0FBQ0QsT0FOUSxFQU9SRCxFQVBRLENBT0wsV0FQSyxFQU9RLFlBQWE7QUFBQSwyQ0FBVEMsSUFBUztBQUFUQSxjQUFTO0FBQUE7O0FBQzVCLGVBQUtDLEtBQUwsZ0JBQVcsV0FBWCxTQUEyQkQsSUFBM0I7QUFDRCxPQVRRLEVBVVJELEVBVlEsQ0FVTCxZQVZLLEVBVVMsWUFBYTtBQUFBLDJDQUFUQyxJQUFTO0FBQVRBLGNBQVM7QUFBQTs7QUFDN0IsZUFBS0MsS0FBTCxnQkFBVyxZQUFYLFNBQTRCRCxJQUE1QjtBQUNELE9BWlEsRUFhUkwsWUFiUSxFQUFUO0FBY0Q7Ozs7RUFqRWtDLGVBQUtPLFM7O2tCQUFyQmpDLE8iLCJmaWxlIjoiY3JvcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgV2VDcm9wcGVyIGZyb20gJ3dlLWNyb3BwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9wcGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBkYXRhID0ge1xuICAgICQ6IG51bGwsXG4gICAgaWQ6ICdjcm9wcGVyJyxcbiAgICBkaXNhYmxlOiB0cnVlXG4gIH1cblxuICBwcm9wcyA9IHtcbiAgICBvcHRpb25zOiBPYmplY3RcbiAgfVxuXG4gIGNvbXB1dGVkID0ge1xuICAgIHdpZHRoICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgfSxcbiAgICBoZWlnaHQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICB0cyAoZSkge1xuICAgICAgdGhpcy4kLnRvdWNoU3RhcnQoZSk7XG4gICAgfSxcbiAgICB0bSAoZSkge1xuICAgICAgdGhpcy4kLnRvdWNoTW92ZShlKTtcbiAgICB9LFxuICAgIHRlIChlKSB7XG4gICAgICB0aGlzLiQudG91Y2hFbmQoZSk7XG4gICAgfSxcbiAgICBjYW52YXNFcnJvciAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlLmRldGFpbC5lcnJNc2cpO1xuICAgIH1cbiAgfVxuXG4gICAgcHVzaE9yaWdpbiAoc3JjKSB7XG4gICAgICB0aGlzLiQucHVzaE9yaWduKHNyYyk7XG4gICAgfSBcbiAgICB1cGRhdGVDYW52YXMgKCkge1xuICAgICAgdGhpcy4kLnVwZGF0ZUNhbnZhcygpO1xuICAgIH1cbiAgICBnZXRDcm9wcGVySW1hZ2UgKGZuLCBldikge1xuICAgICAgdGhpcy4kLmdldENyb3BwZXJJbWFnZShmbik7XG4gICAgfVxuICAgIGdldENyb3BwZXJCYXNlNjQgKGZuLCBldikge1xuICAgICAgdGhpcy4kLmdldENyb3BwZXJJbWFnZShmbik7XG4gICAgfVxuXG4gIG9uTG9hZCAoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBvcHRpb25zLmlkID0gdGhpcy5pZDtcbiAgICB0aGlzLiQgPSBuZXcgV2VDcm9wcGVyKG9wdGlvbnMpXG4gICAgLm9uKCdyZWFkeScsICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLiRlbWl0KCdyZWFkeScsIC4uLmFyZ3MpIFxuICAgIH0pXG4gICAgLm9uKCdiZWZvcmVJbWFnZUxvYWQnLCAoLi4uYXJncykgPT4ge1xuICAgICAgdGhpcy4kZW1pdCgnYmVmb3JlSW1hZ2VMb2FkJywgLi4uYXJncylcbiAgICB9KVxuICAgIC5vbignaW1hZ2VMb2FkJywgKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMuJGVtaXQoJ2ltYWdlTG9hZCcsIC4uLmFyZ3MpXG4gICAgfSlcbiAgICAub24oJ2JlZm9yZURyYXcnLCAoLi4uYXJncykgPT4ge1xuICAgICAgdGhpcy4kZW1pdCgnYmVmb3JlRHJhdycsIC4uLmFyZ3MpXG4gICAgfSlcbiAgICAudXBkYXRlQ2FudmFzKCk7XG4gIH1cbn1cbiJdfQ==