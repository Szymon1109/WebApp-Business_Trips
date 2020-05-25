webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_panel_home_panel_component__ = __webpack_require__("./src/app/home/home-panel/home-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_profile_tab_edit_profile_panel_edit_profile_panel_component__ = __webpack_require__("./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_profile_tab_change_pwd_panel_change_pwd_panel_component__ = __webpack_require__("./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_delegation_tab_add_panel_add_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/add-panel/add-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_delegation_tab_edit_deleg_panel_edit_deleg_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_delegation_tab_remove_deleg_panel_remove_deleg_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__ = __webpack_require__("./src/app/auth-guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_delegation_tab_confirmed_list_panel_confirmed_list_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_delegation_tab_unconfirmed_list_panel_unconfirmed_list_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_delegation_tab_request_confirmation_panel_request_confirmation_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_delegation_tab_request_unconfirmation_panel_request_unconfirmation_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_admin_tab_user_admin_panel_user_admin_panel_component__ = __webpack_require__("./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_admin_tab_remove_user_panel_remove_user_panel_component__ = __webpack_require__("./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_admin_tab_confirmation_request_panel_confirmation_request_panel_component__ = __webpack_require__("./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_admin_tab_unconfirmation_request_panel_unconfirmation_request_panel_component__ = __webpack_require__("./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_admin_tab_edit_delegation_panel_edit_delegation_panel_component__ = __webpack_require__("./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_admin_tab_remove_delegation_panel_remove_delegation_panel_component__ = __webpack_require__("./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_5__home_home_panel_home_panel_component__["a" /* HomePanelComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: 'edit',
                        component: __WEBPACK_IMPORTED_MODULE_6__home_profile_tab_edit_profile_panel_edit_profile_panel_component__["a" /* EditProfilePanelComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                    },
                    {
                        path: 'password',
                        component: __WEBPACK_IMPORTED_MODULE_7__home_profile_tab_change_pwd_panel_change_pwd_panel_component__["a" /* ChangePwdPanelComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                    }
                ]
            },
            {
                path: 'delegation',
                children: [
                    {
                        path: 'list',
                        children: [
                            {
                                path: 'confirmed',
                                component: __WEBPACK_IMPORTED_MODULE_12__home_delegation_tab_confirmed_list_panel_confirmed_list_panel_component__["a" /* ConfirmedListPanelComponent */],
                                canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                            },
                            {
                                path: 'unconfirmed',
                                component: __WEBPACK_IMPORTED_MODULE_13__home_delegation_tab_unconfirmed_list_panel_unconfirmed_list_panel_component__["a" /* UnconfirmedListPanelComponent */],
                                canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                            }
                        ]
                    },
                    {
                        path: 'request',
                        children: [
                            {
                                path: 'confirmation',
                                component: __WEBPACK_IMPORTED_MODULE_14__home_delegation_tab_request_confirmation_panel_request_confirmation_panel_component__["a" /* RequestConfirmationPanelComponent */],
                                canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                            },
                            {
                                path: 'unconfirmation',
                                component: __WEBPACK_IMPORTED_MODULE_15__home_delegation_tab_request_unconfirmation_panel_request_unconfirmation_panel_component__["a" /* RequestUnconfirmationPanelComponent */],
                                canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                            }
                        ]
                    },
                    {
                        path: 'add',
                        component: __WEBPACK_IMPORTED_MODULE_8__home_delegation_tab_add_panel_add_panel_component__["a" /* AddPanelComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                    },
                    {
                        path: 'edit',
                        component: __WEBPACK_IMPORTED_MODULE_9__home_delegation_tab_edit_deleg_panel_edit_deleg_panel_component__["a" /* EditDelegPanelComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                    },
                    {
                        path: 'remove',
                        component: __WEBPACK_IMPORTED_MODULE_10__home_delegation_tab_remove_deleg_panel_remove_deleg_panel_component__["a" /* RemoveDelegPanelComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                    }
                ]
            },
            {
                path: 'admin',
                children: [
                    {
                        path: 'user',
                        children: [
                            {
                                path: 'make-admin',
                                component: __WEBPACK_IMPORTED_MODULE_16__home_admin_tab_user_admin_panel_user_admin_panel_component__["a" /* UserAdminPanelComponent */],
                                canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                            },
                            {
                                path: 'remove',
                                component: __WEBPACK_IMPORTED_MODULE_17__home_admin_tab_remove_user_panel_remove_user_panel_component__["a" /* RemoveUserPanelComponent */],
                                canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                            }
                        ]
                    },
                    {
                        path: 'request',
                        children: [
                            {
                                path: 'confirmation',
                                component: __WEBPACK_IMPORTED_MODULE_18__home_admin_tab_confirmation_request_panel_confirmation_request_panel_component__["a" /* ConfirmationRequestPanelComponent */],
                                canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                            },
                            {
                                path: 'unconfirmation',
                                component: __WEBPACK_IMPORTED_MODULE_19__home_admin_tab_unconfirmation_request_panel_unconfirmation_request_panel_component__["a" /* UnconfirmationRequestPanelComponent */],
                                canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                            }
                        ]
                    },
                    {
                        path: 'delegation',
                        children: [
                            {
                                path: 'edit',
                                component: __WEBPACK_IMPORTED_MODULE_20__home_admin_tab_edit_delegation_panel_edit_delegation_panel_component__["a" /* EditDelegationPanelComponent */],
                                canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                            },
                            {
                                path: 'remove',
                                component: __WEBPACK_IMPORTED_MODULE_21__home_admin_tab_remove_delegation_panel_remove_delegation_panel_component__["a" /* RemoveDelegationPanelComponent */],
                                canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_auth_guard__["a" /* AuthGuard */]]
                            }
                        ]
                    },
                ]
            }
        ]
    },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_service_auth_service__ = __webpack_require__("./src/app/auth-service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service_user_service__ = __webpack_require__("./src/app/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_panel_home_panel_component__ = __webpack_require__("./src/app/home/home-panel/home-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_profile_tab_edit_profile_panel_edit_profile_panel_component__ = __webpack_require__("./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_profile_tab_change_pwd_panel_change_pwd_panel_component__ = __webpack_require__("./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_delegation_tab_add_panel_add_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/add-panel/add-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_delegation_tab_edit_deleg_panel_edit_deleg_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_delegation_tab_remove_deleg_panel_remove_deleg_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_guard_auth_guard__ = __webpack_require__("./src/app/auth-guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng4_social_login__ = __webpack_require__("./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_delegation_tab_confirmed_list_panel_confirmed_list_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_delegation_tab_unconfirmed_list_panel_unconfirmed_list_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_delegation_tab_request_confirmation_panel_request_confirmation_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_delegation_tab_request_unconfirmation_panel_request_unconfirmation_panel_component__ = __webpack_require__("./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_admin_tab_user_admin_panel_user_admin_panel_component__ = __webpack_require__("./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_admin_tab_remove_user_panel_remove_user_panel_component__ = __webpack_require__("./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__home_admin_tab_confirmation_request_panel_confirmation_request_panel_component__ = __webpack_require__("./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__home_admin_tab_unconfirmation_request_panel_unconfirmation_request_panel_component__ = __webpack_require__("./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_admin_tab_edit_delegation_panel_edit_delegation_panel_component__ = __webpack_require__("./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__home_admin_tab_remove_delegation_panel_remove_delegation_panel_component__ = __webpack_require__("./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var config = new __WEBPACK_IMPORTED_MODULE_19_ng4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_19_ng4_social_login__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_19_ng4_social_login__["GoogleLoginProvider"]('640403541746-94fshk3mo7g5pr38k2tf5uc77ocoghs5.apps.googleusercontent.com')
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_19_ng4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_19_ng4_social_login__["FacebookLoginProvider"]('239279973988150')
    }
], false);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_panel_home_panel_component__["a" /* HomePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_profile_tab_edit_profile_panel_edit_profile_panel_component__["a" /* EditProfilePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_profile_tab_change_pwd_panel_change_pwd_panel_component__["a" /* ChangePwdPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_delegation_tab_add_panel_add_panel_component__["a" /* AddPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_delegation_tab_edit_deleg_panel_edit_deleg_panel_component__["a" /* EditDelegPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_delegation_tab_remove_deleg_panel_remove_deleg_panel_component__["a" /* RemoveDelegPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_20__home_delegation_tab_confirmed_list_panel_confirmed_list_panel_component__["a" /* ConfirmedListPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_21__home_delegation_tab_unconfirmed_list_panel_unconfirmed_list_panel_component__["a" /* UnconfirmedListPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_22__home_delegation_tab_request_confirmation_panel_request_confirmation_panel_component__["a" /* RequestConfirmationPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_23__home_delegation_tab_request_unconfirmation_panel_request_unconfirmation_panel_component__["a" /* RequestUnconfirmationPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_24__home_admin_tab_user_admin_panel_user_admin_panel_component__["a" /* UserAdminPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_25__home_admin_tab_remove_user_panel_remove_user_panel_component__["a" /* RemoveUserPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_26__home_admin_tab_confirmation_request_panel_confirmation_request_panel_component__["a" /* ConfirmationRequestPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_27__home_admin_tab_unconfirmation_request_panel_unconfirmation_request_panel_component__["a" /* UnconfirmationRequestPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_28__home_admin_tab_edit_delegation_panel_edit_delegation_panel_component__["a" /* EditDelegationPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_29__home_admin_tab_remove_delegation_panel_remove_delegation_panel_component__["a" /* RemoveDelegationPanelComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng4_social_login__["SocialLoginModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18__auth_guard_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_10__user_service_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_17__delegation_service_delegation_service__["a" /* DelegationService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_19_ng4_social_login__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("./src/app/auth-service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth-service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_social_login__ = __webpack_require__("./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, socialAuthService) {
        this.http = http;
        this.socialAuthService = socialAuthService;
        this.USER_EMAIL = 'email';
        this.USER_PASSWORD = 'password';
        this.SOCIAL_LOGIN = 'socialLogin';
        this.socialEmail = "admin";
        this.socialPassword = "admin";
    }
    AuthService.prototype.authenticationService = function (email, password) {
        var _this = this;
        return this.http.get("http://localhost:8080/api/user/auth", { headers: { Authorization: 'Basic ' + btoa(email + ':' + password) } })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function () {
            _this.setItems(email, password, "false");
        }));
    };
    AuthService.prototype.authenticationSocialService = function (email) {
        this.setItems(email, "", "true");
    };
    AuthService.prototype.setItems = function (email, password, socialLogin) {
        sessionStorage.setItem(this.USER_EMAIL, email);
        sessionStorage.setItem(this.USER_PASSWORD, password);
        sessionStorage.setItem(this.SOCIAL_LOGIN, socialLogin);
    };
    AuthService.prototype.isLoggedIn = function () {
        var email = sessionStorage.getItem(this.USER_EMAIL);
        return email !== null;
    };
    AuthService.prototype.getBasicAuthToken = function () {
        if (this.getSocialLogin() == "true") {
            var email = this.socialEmail;
            var password = this.socialPassword;
            return 'Basic ' + btoa(email + ':' + password);
        }
        else {
            var email = this.getEmailLogged();
            var password = this.getPasswordLogged();
            return 'Basic ' + btoa(email + ':' + password);
        }
    };
    AuthService.prototype.getEmailLogged = function () {
        return sessionStorage.getItem(this.USER_EMAIL);
    };
    AuthService.prototype.getPasswordLogged = function () {
        return sessionStorage.getItem(this.USER_PASSWORD);
    };
    AuthService.prototype.setPasswordLogged = function (password) {
        return sessionStorage.setItem(this.USER_PASSWORD, password);
    };
    AuthService.prototype.getSocialLogin = function () {
        return sessionStorage.getItem(this.SOCIAL_LOGIN);
    };
    AuthService.prototype.logout = function () {
        sessionStorage.removeItem(this.USER_EMAIL);
        sessionStorage.removeItem(this.USER_PASSWORD);
        sessionStorage.removeItem(this.SOCIAL_LOGIN);
        this.socialAuthService.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_social_login__["AuthService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/delegation-service/delegation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelegationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("./src/app/auth-service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DelegationService = /** @class */ (function () {
    function DelegationService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.delegationUrl = 'http://localhost:8080/api/delegation';
    }
    DelegationService.prototype.findByEmailAndConfirmation = function (isConfirmed) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set("email", email.toString())
            .set("isConfirmed", isConfirmed.toString());
        return this.http.get(this.delegationUrl + "/allByUserAndConfirmation", { headers: this.headers, params: params });
    };
    DelegationService.prototype.findNotRequestedByEmailAndConfirmation = function (isConfirmed) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set("email", email.toString())
            .set("isConfirmed", isConfirmed.toString());
        return this.http.get(this.delegationUrl + "/allNotRequestedByUserAndConfirmation", { headers: this.headers, params: params });
    };
    DelegationService.prototype.findFutureByEmail = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("email", email.toString());
        return this.http.get(this.delegationUrl + "/futureByUser", { headers: this.headers, params: params });
    };
    DelegationService.prototype.requestByStatus = function (id, status) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set("id", id);
        return this.http.put(this.delegationUrl + "/requestByStatus", status, { headers: this.headers, params: params });
    };
    DelegationService.prototype.addDelegation = function (delegation) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("email", email.toString());
        return this.http.post(this.delegationUrl + "/add", delegation, { headers: this.headers, params: params });
    };
    DelegationService.prototype.editDelegation = function (id, delegation) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set("id", id);
        return this.http.put(this.delegationUrl + "/change", delegation, { headers: this.headers, params: params });
    };
    DelegationService.prototype.deleteDelegation = function (id) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set("id", id);
        return this.http.delete(this.delegationUrl + "/delete", { headers: this.headers, params: params });
    };
    DelegationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */]])
    ], DelegationService);
    return DelegationService;
}());



/***/ }),

/***/ "./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n.form-del {\r\n  margin-left: 110px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\" [disabled]=\"true\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-del\">\n            <label>\n              <select class=\"browser-default custom-select\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\">\n                <option value=\"\">delegation</option>\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\n                  {{\n                  \"(\" + del.id + \") \" + del.dateTimeStart\n                    .replace(\"T\", \" \")\n                    .substr(0,16)\n                  }}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2\">\n            <input type=\"submit\" value=\"Remove\" class=\"btn reg_btn\" (click)=\"delete()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationRequestPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationRequestPanelComponent = /** @class */ (function () {
    function ConfirmationRequestPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Choose delegation to remove it...";
        this.errorText = "Given delegation cannot be removed!";
        this.successText = "Given delegation has been removed!";
        this.message = this.welcomeText;
        this.chosenId = "";
        this.chosenDel = "";
        this.loadDelegations();
    }
    ConfirmationRequestPanelComponent.prototype.ngOnInit = function () {
    };
    ConfirmationRequestPanelComponent.prototype.loadDelegations = function () {
        //TODO:
        /*this.delegationService.findFutureByEmail().subscribe(
          data => {
            this.delegations = data;
          });*/
    };
    ConfirmationRequestPanelComponent.prototype.delete = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {
            this.delegationService.deleteDelegation(this.chosenId).subscribe(function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.successText; }, 30);
                _this.chosenId = "";
                _this.chosenDel = "";
                _this.description = "";
                _this.loadDelegations();
            }, function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.errorText; }, 30);
            });
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    ConfirmationRequestPanelComponent.prototype.onChange = function (event) {
        this.chosenId = event.id;
        if (event == "") {
            this.description = "";
        }
        else {
            this.description = event.description;
        }
    };
    ConfirmationRequestPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmation-request-panel',
            template: __webpack_require__("./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__["a" /* DelegationService */]])
    ], ConfirmationRequestPanelComponent);
    return ConfirmationRequestPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 710px;\r\n  height: 550px;\r\n}\r\n.message2 {\r\n  margin-top: 15px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 170px;\r\n}\r\n.reg_btn{\r\n  width: 100px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 625px;\r\n}\r\n.form-date {\r\n  width: 300px;\r\n}\r\n.form-val {\r\n  width: 137px;\r\n}\r\n.form-val2 {\r\n  width: 170px;\r\n}\r\n.form-space3 {\r\n  margin-left: 80px;\r\n}\r\n.form-user {\r\n  width: 220px;\r\n  margin-left: 70px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <input type=\"text\" class=\"form-control form-date\" placeholder=\"start [YYYY-MM-DD HH:MM]\" [(ngModel)]=\"dateStart\" name=\"dateStart\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-date form-space2\" placeholder=\"stop [YYYY-MM-DD HH:MM]\" [(ngModel)]=\"dateStop\" name=\"dateStop\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val\" placeholder=\"travel diet\" [(ngModel)]=\"travelDiet\" name=\"travelDiet\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"breakfasts\" [(ngModel)]=\"breakfasts\" name=\"breakfasts\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"dinners\" [(ngModel)]=\"dinners\" name=\"dinners\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"suppers\" [(ngModel)]=\"suppers\" name=\"suppers\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space form-val\">\n            <label>\n              <select name=\"transport\" [(ngModel)]=\"transport\" (ngModelChange)=\"onChange($event)\" class=\"browser-default custom-select\">\n                <option value=\"\">transport</option>\n                <option value=\"car\">car</option>\n                <option value=\"train\">train</option>\n                <option value=\"bus\">bus</option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input [attr.disabled]=\"disableTicket ? '' : null\" type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"ticket price\" [(ngModel)]=\"ticketPrice\" name=\"ticketPrice\">\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2 form-val\">\n            <label>\n              <select [attr.disabled]=\"disableAuto ? '' : null\" name=\"autoCapacity\" [(ngModel)]=\"autoCapacity\" class=\"browser-default custom-select\">\n                <option value=\"\">auto capacity</option>\n                <option value=\"low\">low</option>\n                <option value=\"medium\">medium</option>\n                <option value=\"high\">high</option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input [attr.disabled]=\"disableAuto ? '' : null\" type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"distance\" [(ngModel)]=\"distance\" name=\"distance\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space3\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val2\" placeholder=\"acc price\" [(ngModel)]=\"accPrice\" name=\"accPrice\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val2 form-space2\" placeholder=\"oth tickets price\" [(ngModel)]=\"othTicketsPrice\" name=\"othTicketsPrice\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val2 form-space2\" placeholder=\"oth outlay price\" [(ngModel)]=\"othOutlayPrice\" name=\"othOutlayPrice\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"other outlay description\" [(ngModel)]=\"othOutlayDesc\" name=\"othOutlayDesc\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-user\">\n            <label>\n              <select name=\"user\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChangeDel($event)\" class=\"browser-default custom-select\">\n                <option value=\"\">user</option>\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\n                  {{\n                  \"(\" + del.id + \") \" + del.dateTimeStart\n                    .replace(\"T\", \" \")\n                    .substr(0,16)\n                  }}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center form-del\">\n            <label>\n              <select name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChangeDel($event)\" class=\"browser-default custom-select\">\n                <option value=\"\">delegation</option>\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\n                  {{\n                  \"(\" + del.id + \") \" + del.dateTimeStart\n                    .replace(\"T\", \" \")\n                    .substr(0,16)\n                  }}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2\">\n            <input type=\"submit\" value=\"Edit\" class=\"btn reg_btn\" (click)=\"edit()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDelegationPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_delegation__ = __webpack_require__("./src/app/model/delegation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditDelegationPanelComponent = /** @class */ (function () {
    function EditDelegationPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Choose delegation and type all data to edit it...";
        this.dateFormatText = "Given date format is not correct!";
        this.dateCompareText = "Stop date must be after start date!";
        this.errorText = "Given data are not correct!";
        this.successText = "Given delegation has been saved!";
        this.message = this.welcomeText;
        this.disableTicket = false;
        this.disableAuto = false;
        this.transport = "";
        this.autoCapacity = "";
        this.chosenDel = "";
        this.loadDelegations();
    }
    EditDelegationPanelComponent.prototype.ngOnInit = function () {
    };
    EditDelegationPanelComponent.prototype.loadDelegations = function () {
        //TODO:
        /*this.delegationService.findFutureByEmail().subscribe(
          data => {
            this.delegations = data;
          });*/
    };
    EditDelegationPanelComponent.prototype.clearData = function () {
        this.description = "";
        this.dateStart = "";
        this.dateStop = "";
        this.travelDiet = "";
        this.breakfasts = "";
        this.dinners = "";
        this.suppers = "";
        this.transport = "";
        this.ticketPrice = "";
        this.autoCapacity = "";
        this.distance = "";
        this.accPrice = "";
        this.othTicketsPrice = "";
        this.othOutlayPrice = "";
        this.othOutlayDesc = "";
    };
    EditDelegationPanelComponent.prototype.edit = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined
            && this.description != null && this.description != ""
            && this.dateStart != null && this.dateStop != ""
            && this.travelDiet != null && this.travelDiet != ""
            && this.breakfasts != null && this.breakfasts != ""
            && this.dinners != null && this.dinners != ""
            && this.suppers != null && this.suppers != ""
            && this.transport != null && this.transport != "" && this.transport != undefined
            && this.ticketPrice != null && this.ticketPrice != ""
            && this.autoCapacity != null && this.autoCapacity != "" && this.autoCapacity != undefined
            && this.distance != null && this.distance != ""
            && this.accPrice != null && this.accPrice != ""
            && this.othTicketsPrice != null && this.othTicketsPrice != ""
            && this.othOutlayDesc != null && this.othOutlayDesc != ""
            && this.othOutlayPrice != null && this.othOutlayPrice != "") {
            var regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
            if (regex.test(this.dateStart) && regex.test(this.dateStop)) {
                this.delegation = new __WEBPACK_IMPORTED_MODULE_1__model_delegation__["a" /* Delegation */](this.description, this.dateStart.replace(" ", "T"), this.dateStop.replace(" ", "T"), this.travelDiet, this.breakfasts, this.dinners, this.suppers, this.transport.toUpperCase(), this.ticketPrice == "-" ? "0" : this.ticketPrice, this.autoCapacity.toUpperCase(), this.distance == "-" ? "0" : this.distance, this.accPrice, this.othTicketsPrice, this.othOutlayDesc, this.othOutlayPrice);
                this.delegationService.editDelegation(this.chosenId, this.delegation).subscribe(function () {
                    _this.message = '.';
                    setTimeout(function () { return _this.message = _this.successText; }, 30);
                    _this.chosenId = "";
                    _this.chosenDel = "";
                    _this.disableTicket = false;
                    _this.disableAuto = false;
                    _this.clearData();
                    _this.loadDelegations();
                }, function (error) {
                    if (error.status == 400) {
                        _this.message = '.';
                        setTimeout(function () { return _this.message = _this.errorText; }, 30);
                    }
                    else if (error.status == 406) {
                        _this.message = '.';
                        setTimeout(function () { return _this.message = _this.dateCompareText; }, 30);
                    }
                });
            }
            else {
                this.message = '.';
                setTimeout(function () { return _this.message = _this.dateFormatText; }, 30);
            }
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    EditDelegationPanelComponent.prototype.onChange = function (event) {
        if (event == "") {
            this.disableTicket = false;
            this.disableAuto = false;
            this.ticketPrice = "";
            this.distance = "";
            this.autoCapacity = "";
        }
        else if (event == "car") {
            this.disableTicket = true;
            this.disableAuto = false;
            this.ticketPrice = "-";
            this.distance = "";
            this.autoCapacity = "";
        }
        else {
            this.disableTicket = false;
            this.disableAuto = true;
            this.ticketPrice = "";
            this.distance = "-";
            this.autoCapacity = "empty";
        }
    };
    EditDelegationPanelComponent.prototype.onChangeDel = function (event) {
        this.chosenId = event.id;
        if (event == "") {
            this.disableTicket = false;
            this.disableAuto = false;
            this.clearData();
        }
        else {
            this.description = event.description;
            this.dateStart = event.dateTimeStart.replace("T", " ").substr(0, 16);
            this.dateStop = event.dateTimeStop.replace("T", " ").substr(0, 16);
            this.travelDiet = event.travelDietAmount;
            this.breakfasts = event.breakfastNumber;
            this.dinners = event.dinnerNumber;
            this.suppers = event.supperNumber;
            this.transport = event.transport.toLowerCase();
            this.ticketPrice = event.ticketPrice;
            this.autoCapacity = event.autoCapacity == null ? "empty" : event.autoCapacity.toLowerCase();
            this.distance = event.distance;
            this.accPrice = event.accommodationPrice;
            this.othTicketsPrice = event.otherTicketsPrice.toString();
            this.othOutlayPrice = event.otherOutlayPrice.toString();
            this.othOutlayDesc = event.otherOutlayDesc;
            if (this.transport == "car") {
                this.disableTicket = true;
                this.disableAuto = false;
                this.ticketPrice = "-";
            }
            else {
                this.disableTicket = false;
                this.disableAuto = true;
                this.distance = "-";
            }
        }
    };
    EditDelegationPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-delegation-panel',
            template: __webpack_require__("./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__delegation_service_delegation_service__["a" /* DelegationService */]])
    ], EditDelegationPanelComponent);
    return EditDelegationPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n.card {\r\n  width: 700px;\r\n  height: 240px;\r\n}\r\n.form-desc {\r\n  margin-left: 50px;\r\n}\r\n.form-user {\r\n  width: 230px;\r\n  margin-left: 50px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\" [disabled]=\"true\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-user\">\n            <label>\n              <select name=\"user\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\" class=\"browser-default custom-select\">\n                <option value=\"\">user</option>\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\n                  {{\n                  \"(\" + del.id + \") \" + del.dateTimeStart\n                    .replace(\"T\", \" \")\n                    .substr(0,16)\n                  }}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center form-del\">\n            <label>\n              <select class=\"browser-default custom-select\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\">\n                <option value=\"\">delegation</option>\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\n                  {{\n                  \"(\" + del.id + \") \" + del.dateTimeStart\n                    .replace(\"T\", \" \")\n                    .substr(0,16)\n                  }}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2\">\n            <input type=\"submit\" value=\"Remove\" class=\"btn reg_btn\" (click)=\"delete()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveDelegationPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveDelegationPanelComponent = /** @class */ (function () {
    function RemoveDelegationPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Choose delegation to remove it...";
        this.errorText = "Given delegation cannot be removed!";
        this.successText = "Given delegation has been removed!";
        this.message = this.welcomeText;
        this.chosenId = "";
        this.chosenDel = "";
        this.loadDelegations();
    }
    RemoveDelegationPanelComponent.prototype.ngOnInit = function () {
    };
    RemoveDelegationPanelComponent.prototype.loadDelegations = function () {
        //TODO:
        /*this.delegationService.findFutureByEmail().subscribe(
          data => {
            this.delegations = data;
          });*/
    };
    RemoveDelegationPanelComponent.prototype.delete = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {
            this.delegationService.deleteDelegation(this.chosenId).subscribe(function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.successText; }, 30);
                _this.chosenId = "";
                _this.chosenDel = "";
                _this.description = "";
                _this.loadDelegations();
            }, function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.errorText; }, 30);
            });
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    RemoveDelegationPanelComponent.prototype.onChange = function (event) {
        this.chosenId = event.id;
        if (event == "") {
            this.description = "";
        }
        else {
            this.description = event.description;
        }
    };
    RemoveDelegationPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-remove-delegation-panel',
            template: __webpack_require__("./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__["a" /* DelegationService */]])
    ], RemoveDelegationPanelComponent);
    return RemoveDelegationPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n.form-name {\r\n  width: 215px;\r\n  margin-left: 20px;\r\n}\r\n.form-del {\r\n  margin-left: 110px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-name\" rows=\"1\" placeholder=\"first name\" [(ngModel)]=\"description\" name=\"name\" [disabled]=\"true\"></textarea>\n            </label>\n            <label>\n              <textarea class=\"form-control form-name\" rows=\"1\" placeholder=\"surname\" [(ngModel)]=\"description\" name=\"lastName\" [disabled]=\"true\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-del\">\n            <label>\n              <select class=\"browser-default custom-select\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\">\n                <option value=\"\">delegation</option>\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\n                  {{\n                  \"(\" + del.id + \") \" + del.dateTimeStart\n                    .replace(\"T\", \" \")\n                    .substr(0,16)\n                  }}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2\">\n            <input type=\"submit\" value=\"Remove\" class=\"btn reg_btn\" (click)=\"delete()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveUserPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveUserPanelComponent = /** @class */ (function () {
    function RemoveUserPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Choose delegation to remove it...";
        this.errorText = "Given delegation cannot be removed!";
        this.successText = "Given delegation has been removed!";
        this.message = this.welcomeText;
        this.chosenId = "";
        this.chosenDel = "";
        this.loadDelegations();
    }
    RemoveUserPanelComponent.prototype.ngOnInit = function () {
    };
    RemoveUserPanelComponent.prototype.loadDelegations = function () {
        //TODO:
        /*this.delegationService.findFutureByEmail().subscribe(
          data => {
            this.delegations = data;
          });*/
    };
    RemoveUserPanelComponent.prototype.delete = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {
            this.delegationService.deleteDelegation(this.chosenId).subscribe(function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.successText; }, 30);
                _this.chosenId = "";
                _this.chosenDel = "";
                _this.description = "";
                _this.loadDelegations();
            }, function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.errorText; }, 30);
            });
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    RemoveUserPanelComponent.prototype.onChange = function (event) {
        this.chosenId = event.id;
        if (event == "") {
            this.description = "";
        }
        else {
            this.description = event.description;
        }
    };
    RemoveUserPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-remove-user-panel',
            template: __webpack_require__("./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__["a" /* DelegationService */]])
    ], RemoveUserPanelComponent);
    return RemoveUserPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n.form-del {\r\n  margin-left: 110px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\" [disabled]=\"true\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-del\">\n            <label>\n              <select class=\"browser-default custom-select\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\">\n                <option value=\"\">delegation</option>\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\n                  {{\n                  \"(\" + del.id + \") \" + del.dateTimeStart\n                    .replace(\"T\", \" \")\n                    .substr(0,16)\n                  }}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2\">\n            <input type=\"submit\" value=\"Remove\" class=\"btn reg_btn\" (click)=\"delete()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnconfirmationRequestPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnconfirmationRequestPanelComponent = /** @class */ (function () {
    function UnconfirmationRequestPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Choose delegation to remove it...";
        this.errorText = "Given delegation cannot be removed!";
        this.successText = "Given delegation has been removed!";
        this.message = this.welcomeText;
        this.chosenId = "";
        this.chosenDel = "";
        this.loadDelegations();
    }
    UnconfirmationRequestPanelComponent.prototype.ngOnInit = function () {
    };
    UnconfirmationRequestPanelComponent.prototype.loadDelegations = function () {
        //TODO:
        /*this.delegationService.findFutureByEmail().subscribe(
          data => {
            this.delegations = data;
          });*/
    };
    UnconfirmationRequestPanelComponent.prototype.delete = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {
            this.delegationService.deleteDelegation(this.chosenId).subscribe(function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.successText; }, 30);
                _this.chosenId = "";
                _this.chosenDel = "";
                _this.description = "";
                _this.loadDelegations();
            }, function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.errorText; }, 30);
            });
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    UnconfirmationRequestPanelComponent.prototype.onChange = function (event) {
        this.chosenId = event.id;
        if (event == "") {
            this.description = "";
        }
        else {
            this.description = event.description;
        }
    };
    UnconfirmationRequestPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-unconfirmation-request-panel',
            template: __webpack_require__("./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__["a" /* DelegationService */]])
    ], UnconfirmationRequestPanelComponent);
    return UnconfirmationRequestPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n.form-name {\r\n  width: 215px;\r\n  margin-left: 20px;\r\n}\r\n.form-del {\r\n  margin-left: 110px;\r\n  width: 200px;\r\n}\r\n.reg_btn{\r\n  width: 140px;\r\n  margin-left: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-name\" rows=\"1\" placeholder=\"first name\" [(ngModel)]=\"name\" name=\"name\" [disabled]=\"true\"></textarea>\n            </label>\n            <label>\n              <textarea class=\"form-control form-name\" rows=\"1\" placeholder=\"surname\" [(ngModel)]=\"lastName\" name=\"lastName\" [disabled]=\"true\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-del\">\n            <label>\n              <select class=\"browser-default custom-select\" name=\"chosenDel\" [(ngModel)]=\"chosenUser\" (ngModelChange)=\"onChange($event)\">\n                <option value=\"\">user</option>\n                <option *ngFor=\"let user of users\" [ngValue]=\"user\">\n                  {{\n                  \"(\" + user.id + \") \" + user.email\n                  }}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2\">\n            <input type=\"submit\" value=\"Make admin\" class=\"btn reg_btn\" (click)=\"makeAdmin()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAdminPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__ = __webpack_require__("./src/app/user-service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAdminPanelComponent = /** @class */ (function () {
    function UserAdminPanelComponent(userService) {
        this.userService = userService;
        this.welcomeText = "Choose user to make it admin...";
        this.errorText = "Given user cannot be made admin!";
        this.successText = "Given user has been made admin!";
        this.message = this.welcomeText;
        this.chosenEmail = "";
        this.chosenUser = "";
        this.loadUsers();
    }
    UserAdminPanelComponent.prototype.ngOnInit = function () {
    };
    UserAdminPanelComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.findAllNotAdmins().subscribe(function (data) {
            _this.users = data;
        });
    };
    UserAdminPanelComponent.prototype.makeAdmin = function () {
        var _this = this;
        if (this.chosenEmail != null && this.chosenEmail != "" && this.chosenEmail != undefined) {
            this.userService.makeAdmin(this.chosenEmail).subscribe(function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.successText; }, 30);
                _this.chosenEmail = "";
                _this.chosenUser = "";
                _this.name = "";
                _this.lastName = "";
                _this.loadUsers();
            }, function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.errorText; }, 30);
            });
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    UserAdminPanelComponent.prototype.onChange = function (event) {
        this.chosenEmail = event.email;
        if (event == "") {
            this.name = "";
            this.lastName = "";
        }
        else {
            this.name = event.name;
            this.lastName = event.lastName;
        }
    };
    UserAdminPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-admin-panel',
            template: __webpack_require__("./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_user_service__["a" /* UserService */]])
    ], UserAdminPanelComponent);
    return UserAdminPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/add-panel/add-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 710px;\r\n  height: 550px;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 625px;\r\n}\r\n.form-date {\r\n  width: 300px;\r\n}\r\n.form-val {\r\n  width: 137px;\r\n}\r\n.form-val2 {\r\n  width: 170px;\r\n}\r\n.form-space3 {\r\n  margin-left: 80px;\r\n}\r\n.reg_btn{\r\n  width: 100px;\r\n  margin-left: 310px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/add-panel/add-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <input type=\"text\" class=\"form-control form-date\" placeholder=\"start [YYYY-MM-DD HH:MM]\" [(ngModel)]=\"dateStart\" name=\"dateStart\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-date form-space2\" placeholder=\"stop [YYYY-MM-DD HH:MM]\" [(ngModel)]=\"dateStop\" name=\"dateStop\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val\" placeholder=\"travel diet\" [(ngModel)]=\"travelDiet\" name=\"travelDiet\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"breakfasts\" [(ngModel)]=\"breakfasts\" name=\"breakfasts\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"dinners\" [(ngModel)]=\"dinners\" name=\"dinners\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"suppers\" [(ngModel)]=\"suppers\" name=\"suppers\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space form-val\">\n            <label>\n              <select name=\"transport\" [(ngModel)]=\"transport\" (ngModelChange)=\"onChange($event)\" class=\"browser-default custom-select\">\n                <option value=\"\">transport</option>\n                <option value=\"car\">car</option>\n                <option value=\"train\">train</option>\n                <option value=\"bus\">bus</option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input [attr.disabled]=\"disableTicket ? '' : null\" type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"ticket price\" [(ngModel)]=\"ticketPrice\" name=\"ticketPrice\">\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2 form-val\">\n            <label>\n              <select [attr.disabled]=\"disableAuto ? '' : null\" name=\"autoCapacity\" [(ngModel)]=\"autoCapacity\" class=\"browser-default custom-select\">\n                <option value=\"\">auto capacity</option>\n                <option value=\"low\">low</option>\n                <option value=\"medium\">medium</option>\n                <option value=\"high\">high</option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input [attr.disabled]=\"disableAuto ? '' : null\" type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"distance\" [(ngModel)]=\"distance\" name=\"distance\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space3\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val2\" placeholder=\"acc price\" [(ngModel)]=\"accPrice\" name=\"accPrice\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val2 form-space2\" placeholder=\"oth tickets price\" [(ngModel)]=\"othTicketsPrice\" name=\"othTicketsPrice\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val2 form-space2\" placeholder=\"oth outlay price\" [(ngModel)]=\"othOutlayPrice\" name=\"othOutlayPrice\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"other outlay description\" [(ngModel)]=\"othOutlayDesc\" name=\"othOutlayDesc\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center\">\n            <input type=\"submit\" value=\"Save\" class=\"btn reg_btn\" (click)=\"save()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/add-panel/add-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_delegation__ = __webpack_require__("./src/app/model/delegation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPanelComponent = /** @class */ (function () {
    function AddPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Type all data to add delegation...";
        this.dateFormatText = "Given date format is not correct!";
        this.dateCompareText = "Stop date must be after start date!";
        this.errorText = "Given data are not correct!";
        this.successText = "Given delegation has been saved!";
        this.message = this.welcomeText;
        this.disableTicket = false;
        this.disableAuto = false;
        this.transport = "";
        this.autoCapacity = "";
    }
    AddPanelComponent.prototype.ngOnInit = function () {
    };
    AddPanelComponent.prototype.save = function () {
        var _this = this;
        if (this.description != null && this.description != ""
            && this.dateStart != null && this.dateStart != ""
            && this.dateStop != null && this.dateStop != ""
            && this.travelDiet != null && this.travelDiet != ""
            && this.breakfasts != null && this.breakfasts != ""
            && this.dinners != null && this.dinners != ""
            && this.suppers != null && this.suppers != ""
            && this.transport != null && this.transport != "" && this.transport != undefined
            && this.ticketPrice != null && this.ticketPrice != ""
            && this.autoCapacity != null && this.autoCapacity != "" && this.autoCapacity != undefined
            && this.distance != null && this.distance != ""
            && this.accPrice != null && this.accPrice != ""
            && this.othTicketsPrice != null && this.othTicketsPrice != ""
            && this.othOutlayPrice != null && this.othOutlayPrice != ""
            && this.othOutlayDesc != null && this.othOutlayDesc != "") {
            var regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
            if (regex.test(this.dateStart) && regex.test(this.dateStop)) {
                this.delegation = new __WEBPACK_IMPORTED_MODULE_2__model_delegation__["a" /* Delegation */](this.description, this.dateStart.replace(" ", "T"), this.dateStop.replace(" ", "T"), this.travelDiet, this.breakfasts, this.dinners, this.suppers, this.transport.toUpperCase(), this.ticketPrice == "-" ? "0" : this.ticketPrice, this.autoCapacity.toUpperCase(), this.distance == "-" ? "0" : this.distance, this.accPrice, this.othTicketsPrice, this.othOutlayDesc == "-" ? null : this.othOutlayDesc, this.othOutlayPrice);
                this.delegationService.addDelegation(this.delegation).subscribe(function () {
                    _this.message = '.';
                    setTimeout(function () { return _this.message = _this.successText; }, 30);
                    _this.description = "";
                    _this.dateStart = "";
                    _this.dateStop = "";
                    _this.travelDiet = "";
                    _this.breakfasts = "";
                    _this.dinners = "";
                    _this.suppers = "";
                    _this.transport = "";
                    _this.ticketPrice = "";
                    _this.autoCapacity = "";
                    _this.distance = "";
                    _this.accPrice = "";
                    _this.othTicketsPrice = "";
                    _this.othOutlayDesc = "";
                    _this.othOutlayPrice = "";
                    _this.disableTicket = false;
                    _this.disableAuto = false;
                }, function (error) {
                    if (error.status == 400) {
                        _this.message = '.';
                        setTimeout(function () { return _this.message = _this.errorText; }, 30);
                    }
                    else if (error.status == 406) {
                        _this.message = '.';
                        setTimeout(function () { return _this.message = _this.dateCompareText; }, 30);
                    }
                });
            }
            else {
                this.message = '.';
                setTimeout(function () { return _this.message = _this.dateFormatText; }, 30);
            }
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    AddPanelComponent.prototype.onChange = function (event) {
        if (event == "") {
            this.disableTicket = false;
            this.disableAuto = false;
            this.ticketPrice = "";
            this.distance = "";
            this.autoCapacity = "";
        }
        else if (event == "car") {
            this.disableTicket = true;
            this.disableAuto = false;
            this.ticketPrice = "-";
            this.distance = "";
            this.autoCapacity = "";
        }
        else {
            this.disableTicket = false;
            this.disableAuto = true;
            this.ticketPrice = "";
            this.distance = "-";
            this.autoCapacity = "empty";
        }
    };
    AddPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-panel',
            template: __webpack_require__("./src/app/home/delegation-tab/add-panel/add-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/delegation-tab/add-panel/add-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__["a" /* DelegationService */]])
    ], AddPanelComponent);
    return AddPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  background-color: white !important;\r\n  width: 1200px;\r\n  height: 450px;\r\n  overflow: auto;\r\n}\r\n.card thead th {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n.table {\r\n  text-align: center;\r\n}\r\n.btn{\r\n  color: black;\r\n  background-color: white;\r\n  width: 70px\r\n}\r\n.btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <table class=\"table table-hover table-fixed\">\n        <thead class=\"thead-dark text-truncate\">\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Start time</th>\n          <th scope=\"col\">Stop time</th>\n          <th scope=\"col\">Travel diet</th>\n          <th scope=\"col\">Breakfasts</th>\n          <th scope=\"col\">Dinners</th>\n          <th scope=\"col\">Suppers</th>\n          <th scope=\"col\">Transport</th>\n          <th scope=\"col\">Ticket pr.</th>\n          <th scope=\"col\">Auto cap.</th>\n          <th scope=\"col\">Distance</th>\n          <th scope=\"col\">ACC pr.</th>\n          <th scope=\"col\">OTH tickets pr.</th>\n          <th scope=\"col\">OTH outlay desc.</th>\n          <th scope=\"col\">OTH outlay pr.</th>\n          <th scope=\"col\">Export delegation</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let del of delegations\">\n          <td>{{del.id}}</td>\n          <td>{{del.description}}</td>\n          <td>{{del.dateTimeStart}}</td>\n          <td>{{del.dateTimeStop}}</td>\n          <td>{{del.travelDietAmount}}</td>\n          <td>{{del.breakfastNumber}}</td>\n          <td>{{del.dinnerNumber}}</td>\n          <td>{{del.supperNumber}}</td>\n          <td>{{del.transport.toLowerCase()}}</td>\n          <td>{{del.ticketPrice}}</td>\n          <td>{{del.autoCapacity.toLowerCase()}}</td>\n          <td>{{del.distance}}</td>\n          <td>{{del.accommodationPrice}}</td>\n          <td>{{del.otherTicketsPrice}}</td>\n          <td>{{del.otherOutlayDesc}}</td>\n          <td>{{del.otherOutlayPrice}}</td>\n          <td>\n            <input type=\"button\" value=\"PDF\" class=\"btn\" (click)=\"savePDF(del)\">\n            <input type=\"button\" value=\"Print\" class=\"btn\" (click)=\"print(del)\">\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmedListPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("./src/app/auth-service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmedListPanelComponent = /** @class */ (function () {
    function ConfirmedListPanelComponent(delegationService, authService) {
        this.delegationService = delegationService;
        this.authService = authService;
        this.loadDelegations();
    }
    ConfirmedListPanelComponent.prototype.ngOnInit = function () {
    };
    ConfirmedListPanelComponent.prototype.loadDelegations = function () {
        var _this = this;
        this.delegationService.findByEmailAndConfirmation(true).subscribe(function (data) {
            _this.delegations = _this.editData(data);
        });
    };
    ConfirmedListPanelComponent.prototype.editData = function (array) {
        array.forEach(function (del) {
            del.dateTimeStart = del.dateTimeStart
                .split("-")
                .join(".")
                .replace("T", " ")
                .substr(0, 16);
            del.dateTimeStop = del.dateTimeStop
                .split("-")
                .join(".")
                .replace("T", " ")
                .substr(0, 16);
            if (del.transport == "CAR") {
                del.ticketPrice = "-";
                if (del.distance == null) {
                    del.distance = "0";
                }
            }
            else {
                del.autoCapacity = "-";
                del.distance = "-";
            }
            if (del.accommodationPrice == null) {
                del.accommodationPrice = "0";
            }
            if (del.otherTicketsPrice == null) {
                del.otherTicketsPrice = "0;";
            }
            if (del.otherOutlayDesc == null) {
                del.otherOutlayDesc = "-";
            }
            if (del.otherOutlayPrice == null) {
                del.otherOutlayPrice = "0";
            }
        });
        return array;
    };
    ConfirmedListPanelComponent.prototype.savePDF = function (del) {
        var doc = this.pdf(del);
        doc.save('delegation_export.pdf');
    };
    ConfirmedListPanelComponent.prototype.pdf = function (del) {
        var doc = new __WEBPACK_IMPORTED_MODULE_3_jspdf__();
        var email = this.authService.getEmailLogged();
        doc.setFontType('bold');
        doc.setFont('Numans');
        doc.text('DELEGATION DATA', 30, 30);
        doc.setFontType('normal');
        doc.text('ID:', 30, 50).text(del.id.toString(), 90, 50);
        doc.text('Description:', 30, 60).text(del.description.toString(), 90, 60);
        doc.text('Email:', 30, 70).text(email, 90, 70);
        doc.text('Start time:', 30, 80).text(del.dateTimeStart.toString(), 90, 80);
        doc.text('Stop time:', 30, 90).text(del.dateTimeStop.toString(), 90, 90);
        doc.text('Travel diet amount:', 30, 100).text(del.travelDietAmount.toString(), 90, 100);
        doc.text('Breakfast number:', 30, 110).text(del.breakfastNumber.toString(), 90, 110);
        doc.text('Dinner number:', 30, 120).text(del.dinnerNumber.toString(), 90, 120);
        doc.text('Supper number:', 30, 130).text(del.supperNumber.toString(), 90, 130);
        doc.text('Transport:', 30, 140).text(del.transport.toString(), 90, 140);
        doc.text('Ticket price:', 30, 150).text(del.ticketPrice.toString(), 90, 150);
        doc.text('Auto capacity:', 30, 160).text(del.autoCapacity.toString(), 90, 160);
        doc.text('Distance:', 30, 170).text(del.distance.toString(), 90, 170);
        doc.text('ACC price:', 30, 180).text(del.accommodationPrice.toString(), 90, 180);
        doc.text('Other tickets price:', 30, 190).text(del.otherTicketsPrice.toString(), 90, 190);
        doc.text('Other outlay desc.:', 30, 200).text(del.otherOutlayDesc.toString(), 90, 200);
        doc.text('Other outlay price:', 30, 210).text(del.otherOutlayPrice.toString(), 90, 210);
        doc.setFontSize(15);
        doc.setFontType('italic');
        doc.text('Business Trips Management System © 2020', 60, 280);
        return doc;
    };
    ConfirmedListPanelComponent.prototype.print = function (del) {
        var doc = this.pdf(del);
        doc.setProperties({
            title: "Printing delegation"
        });
        doc.autoPrint();
        window.open(doc.output('bloburl'));
    };
    ConfirmedListPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmed-list-panel',
            template: __webpack_require__("./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__["a" /* DelegationService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */]])
    ], ConfirmedListPanelComponent);
    return ConfirmedListPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 710px;\r\n  height: 550px;\r\n}\r\n.message2 {\r\n  margin-top: 15px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 170px;\r\n}\r\n.reg_btn{\r\n  width: 100px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 625px;\r\n}\r\n.form-date {\r\n  width: 300px;\r\n}\r\n.form-val {\r\n  width: 137px;\r\n}\r\n.form-val2 {\r\n  width: 170px;\r\n}\r\n.form-space3 {\r\n  margin-left: 80px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <input type=\"text\" class=\"form-control form-date\" placeholder=\"start [YYYY-MM-DD HH:MM]\" [(ngModel)]=\"dateStart\" name=\"dateStart\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-date form-space2\" placeholder=\"stop [YYYY-MM-DD HH:MM]\" [(ngModel)]=\"dateStop\" name=\"dateStop\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val\" placeholder=\"travel diet\" [(ngModel)]=\"travelDiet\" name=\"travelDiet\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"breakfasts\" [(ngModel)]=\"breakfasts\" name=\"breakfasts\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"dinners\" [(ngModel)]=\"dinners\" name=\"dinners\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"suppers\" [(ngModel)]=\"suppers\" name=\"suppers\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space form-val\">\n            <label>\n              <select name=\"transport\" [(ngModel)]=\"transport\" (ngModelChange)=\"onChange($event)\" class=\"browser-default custom-select\">\n                <option value=\"\">transport</option>\n                <option value=\"car\">car</option>\n                <option value=\"train\">train</option>\n                <option value=\"bus\">bus</option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input [attr.disabled]=\"disableTicket ? '' : null\" type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"ticket price\" [(ngModel)]=\"ticketPrice\" name=\"ticketPrice\">\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2 form-val\">\n            <label>\n              <select [attr.disabled]=\"disableAuto ? '' : null\" name=\"autoCapacity\" [(ngModel)]=\"autoCapacity\" class=\"browser-default custom-select\">\n                <option value=\"\">auto capacity</option>\n                <option value=\"low\">low</option>\n                <option value=\"medium\">medium</option>\n                <option value=\"high\">high</option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input [attr.disabled]=\"disableAuto ? '' : null\" type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"distance\" [(ngModel)]=\"distance\" name=\"distance\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space3\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val2\" placeholder=\"acc price\" [(ngModel)]=\"accPrice\" name=\"accPrice\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val2 form-space2\" placeholder=\"oth tickets price\" [(ngModel)]=\"othTicketsPrice\" name=\"othTicketsPrice\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-val2 form-space2\" placeholder=\"oth outlay price\" [(ngModel)]=\"othOutlayPrice\" name=\"othOutlayPrice\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"other outlay description\" [(ngModel)]=\"othOutlayDesc\" name=\"othOutlayDesc\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-del\">\n            <label>\n              <select name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChangeDel($event)\" class=\"browser-default custom-select\">\n                <option value=\"\">delegation</option>\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\n                  {{\n                    \"(\" + del.id + \") \" + del.dateTimeStart\n                    .replace(\"T\", \" \")\n                    .substr(0,16)\n                  }}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2\">\n            <input type=\"submit\" value=\"Edit\" class=\"btn reg_btn\" (click)=\"edit()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDelegPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_delegation__ = __webpack_require__("./src/app/model/delegation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditDelegPanelComponent = /** @class */ (function () {
    function EditDelegPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Choose delegation and type all data to edit it...";
        this.dateFormatText = "Given date format is not correct!";
        this.dateCompareText = "Stop date must be after start date!";
        this.errorText = "Given data are not correct!";
        this.successText = "Given delegation has been saved!";
        this.message = this.welcomeText;
        this.disableTicket = false;
        this.disableAuto = false;
        this.transport = "";
        this.autoCapacity = "";
        this.chosenDel = "";
        this.loadDelegations();
    }
    EditDelegPanelComponent.prototype.ngOnInit = function () {
    };
    EditDelegPanelComponent.prototype.loadDelegations = function () {
        var _this = this;
        this.delegationService.findFutureByEmail().subscribe(function (data) {
            _this.delegations = data;
        });
    };
    EditDelegPanelComponent.prototype.clearData = function () {
        this.description = "";
        this.dateStart = "";
        this.dateStop = "";
        this.travelDiet = "";
        this.breakfasts = "";
        this.dinners = "";
        this.suppers = "";
        this.transport = "";
        this.ticketPrice = "";
        this.autoCapacity = "";
        this.distance = "";
        this.accPrice = "";
        this.othTicketsPrice = "";
        this.othOutlayPrice = "";
        this.othOutlayDesc = "";
    };
    EditDelegPanelComponent.prototype.edit = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined
            && this.description != null && this.description != ""
            && this.dateStart != null && this.dateStop != ""
            && this.travelDiet != null && this.travelDiet != ""
            && this.breakfasts != null && this.breakfasts != ""
            && this.dinners != null && this.dinners != ""
            && this.suppers != null && this.suppers != ""
            && this.transport != null && this.transport != "" && this.transport != undefined
            && this.ticketPrice != null && this.ticketPrice != ""
            && this.autoCapacity != null && this.autoCapacity != "" && this.autoCapacity != undefined
            && this.distance != null && this.distance != ""
            && this.accPrice != null && this.accPrice != ""
            && this.othTicketsPrice != null && this.othTicketsPrice != ""
            && this.othOutlayDesc != null && this.othOutlayDesc != ""
            && this.othOutlayPrice != null && this.othOutlayPrice != "") {
            var regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
            if (regex.test(this.dateStart) && regex.test(this.dateStop)) {
                this.delegation = new __WEBPACK_IMPORTED_MODULE_1__model_delegation__["a" /* Delegation */](this.description, this.dateStart.replace(" ", "T"), this.dateStop.replace(" ", "T"), this.travelDiet, this.breakfasts, this.dinners, this.suppers, this.transport.toUpperCase(), this.ticketPrice == "-" ? "0" : this.ticketPrice, this.autoCapacity.toUpperCase(), this.distance == "-" ? "0" : this.distance, this.accPrice, this.othTicketsPrice, this.othOutlayDesc == "-" ? null : this.othOutlayDesc, this.othOutlayPrice);
                this.delegationService.editDelegation(this.chosenId, this.delegation).subscribe(function () {
                    _this.message = '.';
                    setTimeout(function () { return _this.message = _this.successText; }, 30);
                    _this.chosenId = "";
                    _this.chosenDel = "";
                    _this.disableTicket = false;
                    _this.disableAuto = false;
                    _this.clearData();
                    _this.loadDelegations();
                }, function (error) {
                    if (error.status == 400) {
                        _this.message = '.';
                        setTimeout(function () { return _this.message = _this.errorText; }, 30);
                    }
                    else if (error.status == 406) {
                        _this.message = '.';
                        setTimeout(function () { return _this.message = _this.dateCompareText; }, 30);
                    }
                });
            }
            else {
                this.message = '.';
                setTimeout(function () { return _this.message = _this.dateFormatText; }, 30);
            }
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    EditDelegPanelComponent.prototype.onChange = function (event) {
        if (event == "") {
            this.disableTicket = false;
            this.disableAuto = false;
            this.ticketPrice = "";
            this.distance = "";
            this.autoCapacity = "";
        }
        else if (event == "car") {
            this.disableTicket = true;
            this.disableAuto = false;
            this.ticketPrice = "-";
            this.distance = "";
            this.autoCapacity = "";
        }
        else {
            this.disableTicket = false;
            this.disableAuto = true;
            this.ticketPrice = "";
            this.distance = "-";
            this.autoCapacity = "empty";
        }
    };
    EditDelegPanelComponent.prototype.onChangeDel = function (event) {
        this.chosenId = event.id;
        if (event == "") {
            this.disableTicket = false;
            this.disableAuto = false;
            this.clearData();
        }
        else {
            this.description = event.description;
            this.dateStart = event.dateTimeStart.replace("T", " ").substr(0, 16);
            this.dateStop = event.dateTimeStop.replace("T", " ").substr(0, 16);
            this.travelDiet = event.travelDietAmount;
            this.breakfasts = event.breakfastNumber;
            this.dinners = event.dinnerNumber;
            this.suppers = event.supperNumber;
            this.transport = event.transport.toLowerCase();
            this.ticketPrice = event.ticketPrice;
            this.autoCapacity = event.autoCapacity == null ? "empty" : event.autoCapacity.toLowerCase();
            this.distance = event.distance;
            this.accPrice = event.accommodationPrice;
            this.othTicketsPrice = event.otherTicketsPrice.toString();
            this.othOutlayPrice = event.otherOutlayPrice.toString();
            this.othOutlayDesc = event.otherOutlayDesc == null ? "-" : this.othOutlayDesc;
            if (this.transport == "car") {
                this.disableTicket = true;
                this.disableAuto = false;
                this.ticketPrice = "-";
            }
            else {
                this.disableTicket = false;
                this.disableAuto = true;
                this.distance = "-";
            }
        }
    };
    EditDelegPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-deleg-panel',
            template: __webpack_require__("./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__delegation_service_delegation_service__["a" /* DelegationService */]])
    ], EditDelegPanelComponent);
    return EditDelegPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\" [disabled]=\"true\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-del\">\n            <label>\n              <select class=\"browser-default custom-select\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\">\n                <option value=\"\">delegation</option>\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\n                  {{\n                  \"(\" + del.id + \") \" + del.dateTimeStart\n                    .replace(\"T\", \" \")\n                    .substr(0,16)\n                  }}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2\">\n            <input type=\"submit\" value=\"Remove\" class=\"btn reg_btn\" (click)=\"delete()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveDelegPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveDelegPanelComponent = /** @class */ (function () {
    function RemoveDelegPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Choose delegation to remove it...";
        this.errorText = "Given delegation cannot be removed!";
        this.successText = "Given delegation has been removed!";
        this.message = this.welcomeText;
        this.chosenId = "";
        this.chosenDel = "";
        this.loadDelegations();
    }
    RemoveDelegPanelComponent.prototype.ngOnInit = function () {
    };
    RemoveDelegPanelComponent.prototype.loadDelegations = function () {
        var _this = this;
        this.delegationService.findFutureByEmail().subscribe(function (data) {
            _this.delegations = data;
        });
    };
    RemoveDelegPanelComponent.prototype.delete = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {
            this.delegationService.deleteDelegation(this.chosenId).subscribe(function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.successText; }, 30);
                _this.chosenId = "";
                _this.chosenDel = "";
                _this.description = "";
                _this.loadDelegations();
            }, function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.errorText; }, 30);
            });
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    RemoveDelegPanelComponent.prototype.onChange = function (event) {
        this.chosenId = event.id;
        if (event == "") {
            this.description = "";
        }
        else {
            this.description = event.description;
        }
    };
    RemoveDelegPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-remove-deleg-panel',
            template: __webpack_require__("./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__["a" /* DelegationService */]])
    ], RemoveDelegPanelComponent);
    return RemoveDelegPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\" [disabled]=\"true\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-del\">\n            <label>\n              <select class=\"browser-default custom-select\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\">\n                <option value=\"\">delegation</option>\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\n                  {{\n                  \"(\" + del.id + \") \" + del.dateTimeStart\n                    .replace(\"T\", \" \")\n                    .substr(0,16)\n                  }}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2\">\n            <input type=\"submit\" value=\"Request\" class=\"btn reg_btn\" (click)=\"request()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestConfirmationPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestConfirmationPanelComponent = /** @class */ (function () {
    function RequestConfirmationPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Choose not confirmed delegation to request confirmation...";
        this.errorText = "Given confirmation cannot be requested!";
        this.successText = "Given confirmation has been requested!";
        this.message = this.welcomeText;
        this.chosenId = "";
        this.chosenDel = "";
        this.loadDelegations();
    }
    RequestConfirmationPanelComponent.prototype.ngOnInit = function () {
    };
    RequestConfirmationPanelComponent.prototype.loadDelegations = function () {
        var _this = this;
        this.delegationService.findNotRequestedByEmailAndConfirmation(false).subscribe(function (data) {
            _this.delegations = data;
        });
    };
    RequestConfirmationPanelComponent.prototype.request = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {
            this.delegationService.requestByStatus(this.chosenId, true).subscribe(function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.successText; }, 30);
                _this.chosenId = "";
                _this.chosenDel = "";
                _this.description = "";
                _this.loadDelegations();
            }, function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.errorText; }, 30);
            });
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    RequestConfirmationPanelComponent.prototype.onChange = function (event) {
        this.chosenId = event.id;
        if (event == "") {
            this.description = "";
        }
        else {
            this.description = event.description;
        }
    };
    RequestConfirmationPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-request-confirmation-panel',
            template: __webpack_require__("./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__["a" /* DelegationService */]])
    ], RequestConfirmationPanelComponent);
    return RequestConfirmationPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\" [disabled]=\"true\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-del\">\n            <label>\n              <select class=\"browser-default custom-select\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\">\n                <option value=\"\">delegation</option>\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\n                  {{\n                  \"(\" + del.id + \") \" + del.dateTimeStart\n                    .replace(\"T\", \" \")\n                    .substr(0,16)\n                  }}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-group text-center form-space2\">\n            <input type=\"submit\" value=\"Request\" class=\"btn reg_btn\" (click)=\"request()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestUnconfirmationPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestUnconfirmationPanelComponent = /** @class */ (function () {
    function RequestUnconfirmationPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Choose confirmed delegation to request unconfirmation...";
        this.errorText = "Given unconfirmation cannot be requested!";
        this.successText = "Given unconfirmation has been requested!";
        this.message = this.welcomeText;
        this.chosenId = "";
        this.chosenDel = "";
        this.loadDelegations();
    }
    RequestUnconfirmationPanelComponent.prototype.ngOnInit = function () {
    };
    RequestUnconfirmationPanelComponent.prototype.loadDelegations = function () {
        var _this = this;
        this.delegationService.findNotRequestedByEmailAndConfirmation(true).subscribe(function (data) {
            _this.delegations = data;
        });
    };
    RequestUnconfirmationPanelComponent.prototype.request = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {
            this.delegationService.requestByStatus(this.chosenId, false).subscribe(function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.successText; }, 30);
                _this.chosenId = "";
                _this.chosenDel = "";
                _this.description = "";
                _this.loadDelegations();
            }, function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.errorText; }, 30);
            });
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    RequestUnconfirmationPanelComponent.prototype.onChange = function (event) {
        this.chosenId = event.id;
        if (event == "") {
            this.description = "";
        }
        else {
            this.description = event.description;
        }
    };
    RequestUnconfirmationPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-request-unconfirmation-panel',
            template: __webpack_require__("./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__["a" /* DelegationService */]])
    ], RequestUnconfirmationPanelComponent);
    return RequestUnconfirmationPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  background-color: white !important;\r\n  width: 1200px;\r\n  height: 450px;\r\n  overflow: auto;\r\n}\r\n.card thead th {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n.table {\r\n  text-align: center;\r\n}\r\n.btn{\r\n  color: black;\r\n  background-color: white;\r\n  width: 70px\r\n}\r\n.btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <table class=\"table table-hover table-fixed\">\n        <thead class=\"thead-dark text-truncate\">\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Start time</th>\n          <th scope=\"col\">Stop time</th>\n          <th scope=\"col\">Travel diet</th>\n          <th scope=\"col\">Breakfasts</th>\n          <th scope=\"col\">Dinners</th>\n          <th scope=\"col\">Suppers</th>\n          <th scope=\"col\">Transport</th>\n          <th scope=\"col\">Ticket pr.</th>\n          <th scope=\"col\">Auto cap.</th>\n          <th scope=\"col\">Distance</th>\n          <th scope=\"col\">ACC pr.</th>\n          <th scope=\"col\">OTH tickets pr.</th>\n          <th scope=\"col\">OTH outlay desc.</th>\n          <th scope=\"col\">OTH outlay pr.</th>\n          <th scope=\"col\">Export delegation</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let del of delegations\">\n          <td>{{del.id}}</td>\n          <td>{{del.description}}</td>\n          <td>{{del.dateTimeStart}}</td>\n          <td>{{del.dateTimeStop}}</td>\n          <td>{{del.travelDietAmount}}</td>\n          <td>{{del.breakfastNumber}}</td>\n          <td>{{del.dinnerNumber}}</td>\n          <td>{{del.supperNumber}}</td>\n          <td>{{del.transport.toLowerCase()}}</td>\n          <td>{{del.ticketPrice}}</td>\n          <td>{{del.autoCapacity.toLowerCase()}}</td>\n          <td>{{del.distance}}</td>\n          <td>{{del.accommodationPrice}}</td>\n          <td>{{del.otherTicketsPrice}}</td>\n          <td>{{del.otherOutlayDesc}}</td>\n          <td>{{del.otherOutlayPrice}}</td>\n          <td>\n            <input type=\"button\" value=\"PDF\" class=\"btn\" (click)=\"savePDF(del)\">\n            <input type=\"button\" value=\"Print\" class=\"btn\" (click)=\"print(del)\">\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnconfirmedListPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__ = __webpack_require__("./src/app/delegation-service/delegation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("./src/app/auth-service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnconfirmedListPanelComponent = /** @class */ (function () {
    function UnconfirmedListPanelComponent(delegationService, authService) {
        this.delegationService = delegationService;
        this.authService = authService;
        this.loadDelegations();
    }
    UnconfirmedListPanelComponent.prototype.ngOnInit = function () {
    };
    UnconfirmedListPanelComponent.prototype.loadDelegations = function () {
        var _this = this;
        this.delegationService.findByEmailAndConfirmation(false).subscribe(function (data) {
            _this.delegations = _this.editData(data);
        });
    };
    UnconfirmedListPanelComponent.prototype.editData = function (array) {
        array.forEach(function (del) {
            del.dateTimeStart = del.dateTimeStart
                .split("-")
                .join(".")
                .replace("T", " ")
                .substr(0, 16);
            del.dateTimeStop = del.dateTimeStop
                .split("-")
                .join(".")
                .replace("T", " ")
                .substr(0, 16);
            if (del.transport == "CAR") {
                del.ticketPrice = "-";
                if (del.distance == null) {
                    del.distance = "0";
                }
            }
            else {
                del.autoCapacity = "-";
                del.distance = "-";
            }
            if (del.accommodationPrice == null) {
                del.accommodationPrice = "0";
            }
            if (del.otherTicketsPrice == null) {
                del.otherTicketsPrice = "0;";
            }
            if (del.otherOutlayDesc == null) {
                del.otherOutlayDesc = "-";
            }
            if (del.otherOutlayPrice == null) {
                del.otherOutlayPrice = "0";
            }
        });
        return array;
    };
    UnconfirmedListPanelComponent.prototype.savePDF = function (del) {
        var doc = this.pdf(del);
        doc.save('delegation_export.pdf');
    };
    UnconfirmedListPanelComponent.prototype.pdf = function (del) {
        var doc = new __WEBPACK_IMPORTED_MODULE_3_jspdf__();
        var email = this.authService.getEmailLogged();
        doc.setFontType('bold');
        doc.setFont('Numans');
        doc.text('DELEGATION DATA', 30, 30);
        doc.setFontType('normal');
        doc.text('ID:', 30, 50).text(del.id.toString(), 90, 50);
        doc.text('Description:', 30, 60).text(del.description.toString(), 90, 60);
        doc.text('Email:', 30, 70).text(email, 90, 70);
        doc.text('Start time:', 30, 80).text(del.dateTimeStart.toString(), 90, 80);
        doc.text('Stop time:', 30, 90).text(del.dateTimeStop.toString(), 90, 90);
        doc.text('Travel diet amount:', 30, 100).text(del.travelDietAmount.toString(), 90, 100);
        doc.text('Breakfast number:', 30, 110).text(del.breakfastNumber.toString(), 90, 110);
        doc.text('Dinner number:', 30, 120).text(del.dinnerNumber.toString(), 90, 120);
        doc.text('Supper number:', 30, 130).text(del.supperNumber.toString(), 90, 130);
        doc.text('Transport:', 30, 140).text(del.transport.toString(), 90, 140);
        doc.text('Ticket price:', 30, 150).text(del.ticketPrice.toString(), 90, 150);
        doc.text('Auto capacity:', 30, 160).text(del.autoCapacity.toString(), 90, 160);
        doc.text('Distance:', 30, 170).text(del.distance.toString(), 90, 170);
        doc.text('ACC price:', 30, 180).text(del.accommodationPrice.toString(), 90, 180);
        doc.text('Other tickets price:', 30, 190).text(del.otherTicketsPrice.toString(), 90, 190);
        doc.text('Other outlay desc.:', 30, 200).text(del.otherOutlayDesc.toString(), 90, 200);
        doc.text('Other outlay price:', 30, 210).text(del.otherOutlayPrice.toString(), 90, 210);
        doc.setFontSize(15);
        doc.setFontType('italic');
        doc.text('Business Trips Management System © 2020', 60, 280);
        return doc;
    };
    UnconfirmedListPanelComponent.prototype.print = function (del) {
        var doc = this.pdf(del);
        doc.setProperties({
            title: "Printing delegation"
        });
        doc.autoPrint();
        window.open(doc.output('bloburl'));
    };
    UnconfirmedListPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-unconfirmed-list-panel',
            template: __webpack_require__("./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__delegation_service_delegation_service__["a" /* DelegationService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */]])
    ], UnconfirmedListPanelComponent);
    return UnconfirmedListPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/home-panel/home-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 700px;\r\n  height: 430px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.icon {\r\n  font-size: 100px;\r\n  margin-left: 50px;\r\n  margin-top: 10px;\r\n  color: white;\r\n}\r\nimg {\r\n  border-radius: 50%;\r\n  margin-left: 35px;\r\n  margin-top: 40px;\r\n  margin-bottom: 20px;\r\n  border: 3px solid white;\r\n}\r\n.icon2 {\r\n  font-size: 80px;\r\n  margin-left: 55px;\r\n  margin-top: 0;\r\n  color: white;\r\n}\r\n.size-big {\r\n  font-size: 30px;\r\n}\r\n.size-medium {\r\n  font-size: 20px;\r\n}\r\n.size-small {\r\n  font-size: 15px;\r\n}\r\n.space-col {\r\n  width: 170px;\r\n}\r\n.space-row {\r\n  height: 50px;\r\n}\r\n.space-row2 {\r\n  height: 40px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home-panel/home-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <table>\n        <tr>\n          <th class=\"space-col\">\n            <div *ngIf=\"socialLogged()==false\" class=\"icon\"><i class=\"fa fa-user\"></i></div>\n            <img *ngIf=\"socialLogged()==true\" src=\"{{ photoUrl }}\" alt=\"photo\">\n          </th>\n          <th>\n            <div class=\"size-big space-row\"> {{fullName}} </div>\n            <div class=\"size-small\"> {{email}} </div>\n          </th>\n        </tr>\n        <tr class=\"space-row\">\n        <th class=\"space-col\">\n          <div class=\"icon2\"><i class=\"fa fa-building\"></i></div>\n        </th>\n        <th>\n          <div class=\"size-medium space-row2\"> {{companyName}} </div>\n          <div class=\"size-small\"> {{companyAddress}} </div>\n          <div class=\"size-small\"> {{companyNip}} </div>\n        </th>\n        </tr>\n        <tr class=\"space-row\">\n          <th class=\"space-col\">\n            <div class=\"icon2\"><i class=\"fa fa-book\"></i></div>\n          </th>\n          <th>\n            <div class=\"size-small \"> {{roles}} </div>\n            <div class=\"size-small\"> {{status}} </div>\n            <div class=\"size-small\"> {{registrationDate}} </div>\n          </th>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home-panel/home-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__ = __webpack_require__("./src/app/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("./src/app/auth-service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePanelComponent = /** @class */ (function () {
    function HomePanelComponent(userService, authService) {
        var _this = this;
        this.userService = userService;
        this.authService = authService;
        this.userService.findByEmail().subscribe(function (user) {
            _this.fullName = user.name + " " + user.lastName;
            _this.email = user.email;
            _this.companyName = user.companyName;
            _this.companyAddress = user.companyAddress;
            _this.companyNip = "NIP: " + user.companyNip;
            _this.registrationDate = "Registration date: " + user.registrationDate;
            var roles = "Roles: ";
            user.roles.forEach(function (role) {
                roles += role.roleName.toString() + " ";
            });
            _this.roles = roles;
            if (user.status == true) {
                _this.status = "Status: ACTIVE";
            }
            else {
                _this.status = "Status: NOT ACTIVE";
            }
        });
        if (this.socialLogged()) {
            this.photoUrl = this.userService.socialUser.photoUrl;
        }
    }
    HomePanelComponent.prototype.ngOnInit = function () {
    };
    HomePanelComponent.prototype.socialLogged = function () {
        return this.authService.getSocialLogin() == "true";
    };
    HomePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-panel',
            template: __webpack_require__("./src/app/home/home-panel/home-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/home-panel/home-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */]])
    ], HomePanelComponent);
    return HomePanelComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('https://fonts.googleapis.com/css?family=Raleway');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\nhtml,body{\r\n  background-image: url('mountain.67523081723978ef0927.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  height: 100vh;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.title {\r\n  font-family: 'Raleway', serif;\r\n  font-size: 22px;\r\n  text-shadow: 4px 4px 4px black;\r\n}\r\n.navbar-custom {\r\n  font-size: 15px;\r\n}\r\n.navbar-center {\r\n  position: absolute;\r\n  left: 50%;\r\n  -webkit-transform: translatex(-50%);\r\n          transform: translatex(-50%);\r\n}\r\n.tab span:hover {\r\n  color: grey;\r\n  cursor: pointer;\r\n}\r\n.footer-custom {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 60px;\r\n  color: black;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <title>Home Page</title>\r\n</head>\r\n<body>\r\n  <nav class=\"navbar navbar-expand-lg navbar-custom navbar-dark fixed-top\">\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link tab\" routerLink=\"/home\"><span> Home </span></a>\r\n          <div class=\"dropdown-divider\"></div>\r\n        </li>\r\n        <li *ngIf=\"userLogged==true\" class=\"nav-item dropdown active\">\r\n          <a class=\"nav-link dropdown-toggle tab\" data-toggle=\"dropdown\">\r\n            <span> Profile </span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/profile/edit\"><span> Edit data </span></a></li>\r\n            <li><a *ngIf=\"socialLogged==false\" class=\"dropdown-item tab\" routerLink=\"/home/profile/password\"><span> Change password </span></a></li>\r\n          </ul>\r\n        </li>\r\n        <li *ngIf=\"userLogged==true\" class=\"nav-item dropdown active\">\r\n          <a class=\"nav-link dropdown-toggle tab\" data-toggle=\"dropdown\">\r\n            <span> Delegation </span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/list/confirmed\"><span> All confirmed </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/list/unconfirmed\"><span> All unconfirmed </span></a></li>\r\n            <li class=\"dropdown-divider\"></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/request/confirmation\"><span> Request confirmation </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/request/unconfirmation\"><span> Request unconfirmation </span></a></li>\r\n            <li class=\"dropdown-divider\"></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/add\"><span> Add delegation </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/edit\"><span> Edit delegation </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/remove\"><span> Remove delegation </span></a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <a class=\"navbar-brand navbar-center title\"> Business Trips Management System </a>\r\n      <ul class=\"navbar-nav\">\r\n        <li *ngIf=\"adminLogged==true\" class=\"nav-item dropdown active\">\r\n          <a class=\"nav-link dropdown-toggle tab\" data-toggle=\"dropdown\">\r\n            <span> Admin Panel </span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <ul class=\"dropdown-menu dropdown-menu-right\">\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/admin/user/make-admin\"><span> Make user admin </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/admin/user/remove\"><span> Remove user </span></a></li>\r\n            <li class=\"dropdown-divider\"></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/admin/request/confirmation\"><span> Confirmation request </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/admin/request/unconfirmation\"><span> Unconfirmation request </span></a></li>\r\n            <li class=\"dropdown-divider\"></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/admin/delegation/edit\"><span> Edit delegation </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/admin/delegation/remove\"><span> Remove delegation </span></a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"ml-auto nav-item active\">\r\n          <a class=\"nav-link tab\" (click)=\"logout()\"><span> Logout </span></a>\r\n          <div class=\"dropdown-divider\"></div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <footer class=\"page-footer font-small blue footer-custom navbar-fixed-bottom\">\r\n    <div class=\"footer-copyright text-center py-3\">© 2020 Copyright:\r\n      <b> Szymon Betlewski </b>\r\n    </div>\r\n  </footer>\r\n\r\n  <router-outlet> </router-outlet>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("./src/app/auth-service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service_user_service__ = __webpack_require__("./src/app/user-service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, authService, userService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.socialLogged = this.authService.getSocialLogin() == "true";
        var userLogged = false;
        var adminLogged = false;
        this.userService.findByEmail().subscribe(function (user) {
            user.roles.forEach(function (role) {
                if (role.roleName == "USER") {
                    userLogged = true;
                }
                if (role.roleName == "ADMIN") {
                    adminLogged = true;
                }
            });
            _this.userLogged = userLogged;
            _this.adminLogged = adminLogged;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logout = function () {
        this.authService.logout();
        this.userService.socialUser = undefined;
        this.router.navigate(['/login']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__user_service_user_service__["a" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 430px;\r\n  height: 370px;\r\n}\r\n.form-space {\r\n  margin-left: 105px;\r\n}\r\n.row-space {\r\n  margin-left: 105px;\r\n}\r\n.reg_btn {\r\n  margin-left: 155px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"new password\" [(ngModel)]=\"passwordNew1\" name=\"passwordNew1\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"new password\" [(ngModel)]=\"passwordNew2\" name=\"passwordNew2\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center row-space\">\n            <label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"current password\" [(ngModel)]=\"passwordOld\" name=\"passwordOld\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center\">\n            <input type=\"submit\" value=\"Change\" class=\"btn reg_btn\" (click)=\"change()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePwdPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__ = __webpack_require__("./src/app/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("./src/app/auth-service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePwdPanelComponent = /** @class */ (function () {
    function ChangePwdPanelComponent(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.welcomeText = "Type current and new password to change...";
        this.errorText = "Given new password is too weak!";
        this.errorOldText = "Given current password is not correct!";
        this.errorNewText = "Given new passwords are not the same!";
        this.successText = "Your password has been changed!";
        this.message = this.welcomeText;
    }
    ChangePwdPanelComponent.prototype.ngOnInit = function () {
    };
    ChangePwdPanelComponent.prototype.change = function () {
        var _this = this;
        if (this.passwordNew1 != null && this.passwordNew1 != ""
            && this.passwordNew2 != null && this.passwordNew2 != ""
            && this.passwordOld != null && this.passwordOld != "") {
            if (this.passwordNew1 == this.passwordNew2) {
                if (this.authService.getPasswordLogged() == this.passwordOld) {
                    this.userService.changePwd(this.passwordNew1).subscribe(function () {
                        _this.authService.setPasswordLogged(_this.passwordNew1);
                        _this.passwordNew1 = "";
                        _this.passwordNew2 = "";
                        _this.passwordOld = "";
                        _this.message = '.';
                        setTimeout(function () { return _this.message = _this.successText; }, 30);
                    }, function () {
                        _this.message = '.';
                        setTimeout(function () { return _this.message = _this.errorText; }, 30);
                    });
                }
                else {
                    this.message = '.';
                    setTimeout(function () { return _this.message = _this.errorOldText; }, 30);
                }
            }
            else {
                this.message = '.';
                setTimeout(function () { return _this.message = _this.errorNewText; }, 30);
            }
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    ChangePwdPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-pwd-panel',
            template: __webpack_require__("./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */]])
    ], ChangePwdPanelComponent);
    return ChangePwdPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 130px;\r\n   margin-left: 180px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"text-center message\"> {{message}} </div>\n      <form>\n        <div class=\"form-row message\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"first name\" [(ngModel)]=\"name\" name=\"name\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-space2\" placeholder=\"surname\" [(ngModel)]=\"lastName\" name=\"lastName\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group\"></div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"company name\" [(ngModel)]=\"companyName\" name=\"companyName\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control form-space2\" placeholder=\"company nip\" [(ngModel)]=\"companyNip\" name=\"companyNip\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group text-center form-space\">\n            <label>\n              <input type=\"text\" class=\"form-control form-address\" placeholder=\"company address\" [(ngModel)]=\"companyAddress\" name=\"companyAddress\">\n            </label>\n          </div>\n        </div>\n        <div class=\"form-row row-space\">\n          <div class=\"form-group text-center\">\n            <input type=\"submit\" value=\"Edit data\" class=\"btn reg_btn\" (click)=\"edit()\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__ = __webpack_require__("./src/app/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__("./src/app/model/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProfilePanelComponent = /** @class */ (function () {
    function EditProfilePanelComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.welcomeText = "Type new data to edit...";
        this.errorText = "Given data are not correct!";
        this.successText = "Your data has been changed!";
        this.message = this.welcomeText;
        this.userService.findByEmail().subscribe(function (user) {
            _this.name = user.name;
            _this.lastName = user.lastName;
            _this.companyName = user.companyName;
            _this.companyAddress = user.companyAddress;
            _this.companyNip = user.companyNip;
        });
    }
    EditProfilePanelComponent.prototype.ngOnInit = function () {
    };
    EditProfilePanelComponent.prototype.edit = function () {
        var _this = this;
        if (this.name != null && this.name != ""
            && this.lastName != null && this.lastName != ""
            && this.companyName != null && this.companyName != ""
            && this.companyAddress != null && this.companyAddress != ""
            && this.companyNip != null && this.companyNip != "") {
            this.user = new __WEBPACK_IMPORTED_MODULE_2__model_user__["a" /* User */](this.name, this.lastName, "", "", this.companyName, this.companyAddress, this.companyNip);
            this.userService.editUser(this.user).subscribe(function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.successText; }, 30);
                _this.name = "";
                _this.lastName = "";
                _this.companyName = "";
                _this.companyAddress = "";
                _this.companyNip = "";
            }, function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.errorText; }, 30);
            });
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    EditProfilePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-profile-panel',
            template: __webpack_require__("./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.html"),
            styles: [__webpack_require__("./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_user_service__["a" /* UserService */]])
    ], EditProfilePanelComponent);
    return EditProfilePanelComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\nhtml,body{\r\n  background-image: url('space.642a33ee5ed2d0f6e4cd.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  height: 100vh;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.container{\r\n  height: 100%;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n}\r\n.card{\r\n  width: 350px;\r\n  height: 370px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0,0,0,0.6) !important;\r\n}\r\n.card-header h3{\r\n  color: white;\r\n}\r\n.social_icon{\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -30px;\r\n}\r\n.social_icon span{\r\n  font-size: 60px;\r\n  margin-left: 10px;\r\n  color: #A9D0F5;\r\n}\r\n.social_icon span:hover{\r\n  color: #FFFFFF;\r\n  cursor: pointer;\r\n}\r\n.login_btn{\r\n  color: black;\r\n  background-color: #81BEF7;\r\n  width: 150px;\r\n}\r\n.login_btn:hover{\r\n  color: white;\r\n  background-color: #0539BC;\r\n}\r\n.links{\r\n  color: white;\r\n}\r\n.links a{\r\n  margin-left: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <title>Login Page</title>\n</head>\n<body>\n<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>Sign In</h3>\n        <div class=\"d-flex justify-content-end social_icon\">\n          <span><i class=\"fa fa-google-plus-square\" (click)=\"socialLogin('google')\"></i></span>\n          <span><i class=\"fa fa-facebook-square\" (click)=\"socialLogin('facebook')\"></i></span>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"text-center links\"> {{ message }} </div>\n        <label></label>\n        <form>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"email\" [(ngModel)]=\"email\" name=\"email\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\">\n            </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <input type=\"submit\" value=\"Login\" class=\"btn login_btn\" (click)=checkLogin()>\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"d-flex justify-content-center links\">\n          Don't have an account?<a routerLink=\"/register\">Sign Up</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("./src/app/auth-service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_social_login__ = __webpack_require__("./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service_user_service__ = __webpack_require__("./src/app/user-service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, myAuthService, socialAuthService, userService) {
        this.route = route;
        this.router = router;
        this.myAuthService = myAuthService;
        this.socialAuthService = socialAuthService;
        this.userService = userService;
        this.welcomeText = "Type your data to sign in...";
        this.errorText = "Given data are not correct!";
        this.errorSocialLogin = "Unable to get all social data!";
        this.message = this.welcomeText;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.checkLogin = function () {
        var _this = this;
        if (this.email != null && this.email != "" && this.password != null && this.password != "") {
            this.myAuthService.authenticationService(this.email, this.password).subscribe(function () {
                _this.router.navigate(['/home']);
            }, function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.errorText; }, 30);
            });
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    LoginComponent.prototype.socialLogin = function (service) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(service == "google")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.socialAuthService.signIn(__WEBPACK_IMPORTED_MODULE_3_ng4_social_login__["GoogleLoginProvider"].PROVIDER_ID).then(function (user) {
                                _this.socialUser = user;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(service == "facebook")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.socialAuthService.signIn(__WEBPACK_IMPORTED_MODULE_3_ng4_social_login__["FacebookLoginProvider"].PROVIDER_ID).then(function (user) {
                                _this.socialUser = user;
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (this.socialUser !== undefined && this.socialUser !== null
                            && this.socialUser.name !== undefined && this.socialUser.name !== null
                            && this.socialUser.email !== undefined && this.socialUser.email !== null) {
                            this.userService.checkEmail(this.socialUser.email).subscribe(function (value) {
                                _this.userService.socialUser = _this.socialUser;
                                if (value) {
                                    _this.myAuthService.authenticationSocialService(_this.socialUser.email);
                                    _this.router.navigate(['/home']);
                                }
                                else {
                                    _this.router.navigate(['/register']);
                                }
                            });
                        }
                        else {
                            this.message = '.';
                            setTimeout(function () { return _this.message = _this.errorSocialLogin; }, 30);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_social_login__["AuthService"],
            __WEBPACK_IMPORTED_MODULE_4__user_service_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/delegation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Delegation; });
var Delegation = /** @class */ (function () {
    function Delegation(description, dateTimeStart, dateTimeStop, travelDietAmount, breakfastNumber, dinnerNumber, supperNumber, transport, ticketPrice, autoCapacity, distance, accommodationPrice, otherTicketsPrice, otherOutlayDesc, otherOutlayPrice) {
        this.description = description;
        this.dateTimeStart = dateTimeStart;
        this.dateTimeStop = dateTimeStop;
        this.travelDietAmount = travelDietAmount;
        this.breakfastNumber = breakfastNumber;
        this.dinnerNumber = dinnerNumber;
        this.supperNumber = supperNumber;
        this.transport = transport;
        this.ticketPrice = ticketPrice;
        this.autoCapacity = autoCapacity;
        this.distance = distance;
        this.accommodationPrice = accommodationPrice;
        this.otherTicketsPrice = otherTicketsPrice;
        this.otherOutlayDesc = otherOutlayDesc;
        this.otherOutlayPrice = otherOutlayPrice;
    }
    return Delegation;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name, lastName, email, password, companyName, companyAddress, companyNip) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.companyName = companyName;
        this.companyAddress = companyAddress;
        this.companyNip = companyNip;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\nhtml,body{\r\n  background-image: url('space.642a33ee5ed2d0f6e4cd.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  height: 100vh;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.container{\r\n  height: 100%;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n}\r\n.card{\r\n  width: 600px;\r\n  height: 510px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0,0,0,0.6) !important;\r\n}\r\n.card-header h3{\r\n  color: white;\r\n  text-align: center;\r\n}\r\n.form-space {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.reg_btn{\r\n  color: black;\r\n  background-color: #81BEF7;\r\n  width: 150px;\r\n}\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: #0539BC;\r\n}\r\n.links{\r\n  color: white;\r\n}\r\n.links a{\r\n  margin-left: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <title>Registration Page</title>\n</head>\n<body>\n<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>Sign Up</h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"text-center links\"> {{message}} </div>\n        <label></label>\n        <form>\n          <div class=\"form-row\">\n            <div class=\"form-group text-center form-space\">\n              <label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"first name\" [(ngModel)]=\"firstName\" name=\"firstName\">\n              </label>\n            </div>\n            <div class=\"form-group text-center\">\n              <label>\n                <input type=\"text\" class=\"form-control form-space\" placeholder=\"surname\" [(ngModel)]=\"surname\" name=\"surname\">\n              </label>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group text-center form-space\">\n              <label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"email\" [(ngModel)]=\"email\" name=\"email\">\n              </label>\n            </div>\n            <div class=\"form-group text-center\">\n              <label>\n                <input type=\"password\" class=\"form-control form-space\" placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\">\n              </label>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group\"></div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group text-center form-space\">\n              <label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"company name\" [(ngModel)]=\"companyName\" name=\"companyName\">\n              </label>\n            </div>\n            <div class=\"form-group text-center\">\n              <label>\n                <input type=\"text\" class=\"form-control form-space\" placeholder=\"company nip\" [(ngModel)]=\"companyNip\" name=\"companyNip\">\n              </label>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group text-center form-space\">\n              <label>\n                <input type=\"text\" class=\"form-control form-address\" placeholder=\"company address\" [(ngModel)]=\"companyAddress\" name=\"companyAddress\">\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group text-center\">\n            <input type=\"submit\" value=\"Register\" class=\"btn reg_btn\" (click)=\"register()\">\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"d-flex justify-content-center links\">\n          Already have an account?<a routerLink=\"/login\">Sign In</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user__ = __webpack_require__("./src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_user_service__ = __webpack_require__("./src/app/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.welcomeText = "Type your data to sign up...";
        this.emailText = "Given email is already taken!";
        this.pwdText = "Given password is too weak!";
        this.dataText = "Given data are not correct!";
        this.message = this.welcomeText;
        var socialUser = this.userService.socialUser;
        if (socialUser !== undefined) {
            var name_1 = socialUser.name.split(" ");
            this.firstName = name_1[0] === undefined ? "" : name_1[0];
            this.surname = name_1[1] === undefined ? "" : name_1[1];
            this.email = socialUser.email;
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.firstName != null && this.firstName != ""
            && this.surname != null && this.surname != ""
            && this.email != null && this.email != ""
            && this.password != null && this.password != ""
            && this.companyName != null && this.companyName != ""
            && this.companyNip != null && this.companyNip != ""
            && this.companyAddress != null && this.companyAddress != "") {
            this.user = new __WEBPACK_IMPORTED_MODULE_1__model_user__["a" /* User */](this.firstName, this.surname, this.email, this.password, this.companyName, this.companyAddress, this.companyNip);
            this.userService.save(this.user).subscribe(function () {
                _this.router.navigate(['/login']);
            }, function (error) {
                if (error.status == 400) {
                    _this.message = '.';
                    setTimeout(function () { return _this.message = _this.dataText; }, 30);
                }
                else if (error.status == 406) {
                    _this.message = '.';
                    setTimeout(function () { return _this.message = _this.pwdText; }, 30);
                }
                else if (error.status == 409) {
                    _this.message = '.';
                    setTimeout(function () { return _this.message = _this.emailText; }, 30);
                }
            });
        }
        else {
            this.message = '.';
            setTimeout(function () { return _this.message = _this.welcomeText; }, 30);
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__user_service_user_service__["a" /* UserService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user-service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("./src/app/auth-service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.userUrl = 'http://localhost:8080/api/user';
    }
    UserService.prototype.findAllNotAdmins = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        return this.http.get(this.userUrl + "/admin/allNotAdmins", { headers: this.headers });
    };
    UserService.prototype.makeAdmin = function (email) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        return this.http.put(this.userUrl + "/admin/makeAdmin", email, { headers: this.headers });
    };
    UserService.prototype.save = function (user) {
        return this.http.post(this.userUrl + '/add', user);
    };
    UserService.prototype.checkEmail = function (email) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("email", email);
        return this.http.get(this.userUrl + "/exist", { params: params });
    };
    UserService.prototype.findByEmail = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("email", email.toString());
        return this.http.get(this.userUrl + "/byEmail", { headers: this.headers, params: params });
    };
    UserService.prototype.editUser = function (user) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("email", email.toString());
        return this.http.put(this.userUrl + "/edit", user, { headers: this.headers, params: params });
    };
    UserService.prototype.changePwd = function (password) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set("email", email.toString());
        return this.http.put(this.userUrl + "/change", password, { headers: this.headers, params: params });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map