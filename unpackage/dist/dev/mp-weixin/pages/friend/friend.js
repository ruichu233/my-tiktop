(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/friend/friend"],{

/***/ 166:
/*!******************************************************************!*\
  !*** D:/my/my-tiktop/main.js?{"page":"pages%2Ffriend%2Ffriend"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _friend = _interopRequireDefault(__webpack_require__(/*! ./pages/friend/friend.vue */ 167));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_friend.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 167:
/*!***********************************************!*\
  !*** D:/my/my-tiktop/pages/friend/friend.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friend.vue?vue&type=template&id=3c667ff4&scoped=true& */ 168);
/* harmony import */ var _friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friend.vue?vue&type=script&lang=js& */ 170);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _friend_vue_vue_type_style_index_0_id_3c667ff4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friend.vue?vue&type=style&index=0&id=3c667ff4&scoped=true&lang=css& */ 172);
/* harmony import */ var _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c667ff4",
  null,
  false,
  _friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/friend/friend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 168:
/*!******************************************************************************************!*\
  !*** D:/my/my-tiktop/pages/friend/friend.vue?vue&type=template&id=3c667ff4&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./friend.vue?vue&type=template&id=3c667ff4&scoped=true& */ 169);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 169:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/my/my-tiktop/pages/friend/friend.vue?vue&type=template&id=3c667ff4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 170:
/*!************************************************************************!*\
  !*** D:/my/my-tiktop/pages/friend/friend.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./friend.vue?vue&type=script&lang=js& */ 171);
/* harmony import */ var _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 171:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/my/my-tiktop/pages/friend/friend.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var tab = function tab() {
  __webpack_require__.e(/*! require.ensure | components/tab */ "components/tab").then((function () {
    return resolve(__webpack_require__(/*! ../../components/tab.vue */ 247));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    return {
      tabs: [{
        title: '我的好友'
      }, {
        title: '我的关注'
      }, {
        title: '我的粉丝'
      }],
      currentTab: 0,
      friends: [],
      // 好友列表
      follows: [],
      // 关注列表
      fans: [],
      // 粉丝列表
      page: 1,
      // 当前页
      hasMore: true,
      // 是否还有更多
      isLoading: false,
      // 是否正在加载
      containerHeight: 0,
      // 设置容器的高度
      userId: null // 初始化为null
    };
  },

  components: {
    tab: tab
  },
  methods: {
    // 模拟加载朋友列表
    loadFriends: function loadFriends() {
      if (this.isLoading) return; // 避免重复加载

      this.isLoading = true; // 设置为正在加载
      this.fetchFollowList();
    },
    // 获取关注列表、粉丝列表和朋友列表
    fetchFollowList: function fetchFollowList() {
      var _this$friends,
        _this$follows,
        _this$fans,
        _this = this;
      var followType = this.currentTab + 1; // 1 朋友 2 粉丝 3 关注
      var lastId = this.currentTab === 0 ? (_this$friends = this.friends[this.friends.length - 1]) === null || _this$friends === void 0 ? void 0 : _this$friends.id : this.currentTab === 1 ? (_this$follows = this.follows[this.follows.length - 1]) === null || _this$follows === void 0 ? void 0 : _this$follows.id : (_this$fans = this.fans[this.fans.length - 1]) === null || _this$fans === void 0 ? void 0 : _this$fans.id;
      uni.request({
        url: 'http://127.0.0.1:8080/v1/follow/follow-list',
        method: 'POST',
        header: {
          "access-token": uni.getStorageSync('access-token')
        },
        data: {
          "user_id": this.userId,
          "follow_type": followType,
          "cursor": 0,
          "page_size": 10,
          "last_id": Number(lastId) ? Number(lastId) : 0
        },
        success: function success(response) {
          var data = response.data;
          switch (_this.currentTab) {
            case 0:
              _this.friends = [].concat((0, _toConsumableArray2.default)(_this.friends), (0, _toConsumableArray2.default)(data.follow_list));
              break;
            case 1:
              _this.follows = [].concat((0, _toConsumableArray2.default)(_this.follows), (0, _toConsumableArray2.default)(data.follow_list));
              break;
            case 2:
              _this.fans = [].concat((0, _toConsumableArray2.default)(_this.fans), (0, _toConsumableArray2.default)(data.follow_list));
              break;
          }
          _this.hasMore = !data.is_end;
          _this.isLoading = false;
        },
        fail: function fail(error) {
          console.error('There was an error!', error);
          _this.isLoading = false;
        }
      });
    },
    // 滚动监听
    onScroll: function onScroll(event) {
      var scrollTop = event.detail.scrollTop; // 获取当前滚动的距离
      var scrollHeight = event.detail.scrollHeight; // 获取页面总高度
      var clientHeight = event.detail.clientHeight; // 获取可见区域的高度

      // 当滚动到底部时触发加载更多
      if (scrollTop + clientHeight >= scrollHeight - 50 && this.hasMore && !this.isLoading) {
        this.page += 1;
        this.loadFriends(); // 加载更多
      }
    },
    // 切换标签页
    changeTab: function changeTab(index) {
      this.currentTab = index;
      this.page = 1;
      this.hasMore = true;
      this.isLoading = false;
      // 清空当前 tab 对应的数据
      switch (index) {
        case 0:
          this.friends = []; // 清空朋友列表
          break;
        case 1:
          this.follows = []; // 清空关注列表
          break;
        case 2:
          this.fans = []; // 清空粉丝列表
          break;
      }
      this.loadFriends();
    }
  },
  mounted: function mounted() {
    // 从localstorage获取userId并确保其为数字类型
    var userIdFromStorage = uni.getStorageSync('userId');
    this.userId = typeof userIdFromStorage === 'number' ? userIdFromStorage : parseInt(userIdFromStorage, 10);
    this.loadFriends(); // 初始化加载第一页数据
    // 设置容器的高度（考虑状态栏和底部导航栏等）
    this.containerHeight = uni.getSystemInfoSync().windowHeight - 10;
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 172:
/*!********************************************************************************************************!*\
  !*** D:/my/my-tiktop/pages/friend/friend.vue?vue&type=style&index=0&id=3c667ff4&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_style_index_0_id_3c667ff4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../software/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./friend.vue?vue&type=style&index=0&id=3c667ff4&scoped=true&lang=css& */ 173);
/* harmony import */ var _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_style_index_0_id_3c667ff4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_style_index_0_id_3c667ff4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_style_index_0_id_3c667ff4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_style_index_0_id_3c667ff4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_style_index_0_id_3c667ff4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 173:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/my/my-tiktop/pages/friend/friend.vue?vue&type=style&index=0&id=3c667ff4&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[166,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/friend/friend.js.map