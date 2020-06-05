(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\" [disabled]=\"true\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <select class=\"browser-default custom-select form-del\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\">\r\n                <option value=\"\">delegation</option>\r\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\r\n                  {{\r\n                  \"(\" + del.id + \") \" + del.dateTimeStart\r\n                    .replace(\"T\", \" \")\r\n                    .substr(0,16)\r\n                  }}\r\n                </option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2\">\r\n            <input type=\"submit\" value=\"Confirm\" class=\"btn reg_btn\" (click)=\"confirm()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-date\" placeholder=\"start [YYYY-MM-DD HH:MM]\" [(ngModel)]=\"dateStart\" name=\"dateStart\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-date form-space2\" placeholder=\"stop [YYYY-MM-DD HH:MM]\" [(ngModel)]=\"dateStop\" name=\"dateStop\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val\" placeholder=\"travel diet\" [(ngModel)]=\"travelDiet\" name=\"travelDiet\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"breakfasts\" [(ngModel)]=\"breakfasts\" name=\"breakfasts\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"dinners\" [(ngModel)]=\"dinners\" name=\"dinners\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"suppers\" [(ngModel)]=\"suppers\" name=\"suppers\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space form-val\">\r\n            <label>\r\n              <select name=\"transport\" [(ngModel)]=\"transport\" (ngModelChange)=\"onChange($event)\" class=\"browser-default custom-select\">\r\n                <option value=\"\">transport</option>\r\n                <option value=\"car\">car</option>\r\n                <option value=\"train\">train</option>\r\n                <option value=\"bus\">bus</option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input [attr.disabled]=\"disableTicket ? '' : null\" type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"ticket price\" [(ngModel)]=\"ticketPrice\" name=\"ticketPrice\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2 form-val\">\r\n            <label>\r\n              <select [attr.disabled]=\"disableAuto ? '' : null\" name=\"autoCapacity\" [(ngModel)]=\"autoCapacity\" class=\"browser-default custom-select\">\r\n                <option value=\"\">auto capacity</option>\r\n                <option value=\"low\">low</option>\r\n                <option value=\"medium\">medium</option>\r\n                <option value=\"high\">high</option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input [attr.disabled]=\"disableAuto ? '' : null\" type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"distance\" [(ngModel)]=\"distance\" name=\"distance\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space3\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val2\" placeholder=\"acc price\" [(ngModel)]=\"accPrice\" name=\"accPrice\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val2 form-space2\" placeholder=\"oth tickets price\" [(ngModel)]=\"othTicketsPrice\" name=\"othTicketsPrice\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val2 form-space2\" placeholder=\"oth outlay price\" [(ngModel)]=\"othOutlayPrice\" name=\"othOutlayPrice\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"other outlay description\" [(ngModel)]=\"othOutlayDesc\" name=\"othOutlayDesc\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <select class=\"browser-default custom-select form-user\" name=\"chosenUser\" [(ngModel)]=\"chosenUser\" (ngModelChange)=\"onChangeUser($event)\">\r\n                <option value=\"\">user</option>\r\n                <option *ngFor=\"let user of users\" [ngValue]=\"user\">\r\n                  {{\r\n                  \"(\" + user.id + \") \" + user.email\r\n                  }}\r\n                </option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <select class=\"browser-default custom-select form-del\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChangeDel($event)\">\r\n                <option value=\"\">delegation</option>\r\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\r\n                  {{\r\n                  \"(\" + del.id + \") \" + del.dateTimeStart\r\n                    .replace(\"T\", \" \")\r\n                    .substr(0,16)\r\n                  }}\r\n                </option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2\">\r\n            <input type=\"submit\" value=\"Edit\" class=\"btn reg_btn\" (click)=\"edit()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <textarea class=\"form-control form-name form-user-name\" rows=\"1\" placeholder=\"first name\" [(ngModel)]=\"name\" name=\"name\" [disabled]=\"true\"></textarea>\r\n            </label>\r\n            <label>\r\n              <textarea class=\"form-control form-name form-user-lastName\" rows=\"1\" placeholder=\"surname\" [(ngModel)]=\"lastName\" name=\"lastName\" [disabled]=\"true\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\" [disabled]=\"true\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <select class=\"browser-default custom-select form-user\" name=\"chosenUser\" [(ngModel)]=\"chosenUser\" (ngModelChange)=\"onChangeUser($event)\">\r\n                <option value=\"\">user</option>\r\n                <option *ngFor=\"let user of users\" [ngValue]=\"user\">\r\n                  {{\r\n                  \"(\" + user.id + \") \" + user.email\r\n                  }}\r\n                </option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <select class=\"browser-default custom-select form-del\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChangeDel($event)\">\r\n                <option value=\"\">delegation</option>\r\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\r\n                  {{\r\n                  \"(\" + del.id + \") \" + del.dateTimeStart\r\n                    .replace(\"T\", \" \")\r\n                    .substr(0,16)\r\n                  }}\r\n                </option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2\">\r\n            <input type=\"submit\" value=\"Remove\" class=\"btn reg_btn\" (click)=\"delete()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-name\" rows=\"1\" placeholder=\"first name\" [(ngModel)]=\"name\" name=\"name\" [disabled]=\"true\"></textarea>\r\n            </label>\r\n            <label>\r\n              <textarea class=\"form-control form-name\" rows=\"1\" placeholder=\"surname\" [(ngModel)]=\"lastName\" name=\"lastName\" [disabled]=\"true\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <select class=\"browser-default custom-select form-del\" name=\"chosenDel\" [(ngModel)]=\"chosenUser\" (ngModelChange)=\"onChange($event)\">\r\n                <option value=\"\">user</option>\r\n                <option *ngFor=\"let user of users\" [ngValue]=\"user\">\r\n                  {{\r\n                  \"(\" + user.id + \") \" + user.email\r\n                  }}\r\n                </option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2\">\r\n            <input type=\"submit\" value=\"Remove\" class=\"btn reg_btn\" (click)=\"delete()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\" [disabled]=\"true\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <select class=\"browser-default custom-select form-del\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\">\r\n                <option value=\"\">delegation</option>\r\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\r\n                  {{\r\n                  \"(\" + del.id + \") \" + del.dateTimeStart\r\n                    .replace(\"T\", \" \")\r\n                    .substr(0,16)\r\n                  }}\r\n                </option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2\">\r\n            <input type=\"submit\" value=\"Unconfirm\" class=\"btn reg_btn\" (click)=\"unconfirm()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-name\" rows=\"1\" placeholder=\"first name\" [(ngModel)]=\"name\" name=\"name\" [disabled]=\"true\"></textarea>\r\n            </label>\r\n            <label>\r\n              <textarea class=\"form-control form-name\" rows=\"1\" placeholder=\"surname\" [(ngModel)]=\"lastName\" name=\"lastName\" [disabled]=\"true\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <select class=\"browser-default custom-select form-del\" name=\"chosenUser\" [(ngModel)]=\"chosenUser\" (ngModelChange)=\"onChange($event)\">\r\n                <option value=\"\">user</option>\r\n                <option *ngFor=\"let user of users\" [ngValue]=\"user\">\r\n                  {{\r\n                  \"(\" + user.id + \") \" + user.email\r\n                  }}\r\n                </option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2\">\r\n            <input type=\"submit\" value=\"Make admin\" class=\"btn reg_btn\" (click)=\"makeAdmin()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/add-panel/add-panel.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/delegation-tab/add-panel/add-panel.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-date\" placeholder=\"start [YYYY-MM-DD HH:MM]\" [(ngModel)]=\"dateStart\" name=\"dateStart\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-date form-space2\" placeholder=\"stop [YYYY-MM-DD HH:MM]\" [(ngModel)]=\"dateStop\" name=\"dateStop\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val\" placeholder=\"travel diet\" [(ngModel)]=\"travelDiet\" name=\"travelDiet\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"breakfasts\" [(ngModel)]=\"breakfasts\" name=\"breakfasts\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"dinners\" [(ngModel)]=\"dinners\" name=\"dinners\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"suppers\" [(ngModel)]=\"suppers\" name=\"suppers\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space form-val\">\r\n            <label>\r\n              <select name=\"transport\" [(ngModel)]=\"transport\" (ngModelChange)=\"onChange($event)\" class=\"browser-default custom-select\">\r\n                <option value=\"\">transport</option>\r\n                <option value=\"car\">car</option>\r\n                <option value=\"train\">train</option>\r\n                <option value=\"bus\">bus</option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input [attr.disabled]=\"disableTicket ? '' : null\" type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"ticket price\" [(ngModel)]=\"ticketPrice\" name=\"ticketPrice\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2 form-val\">\r\n            <label>\r\n              <select [attr.disabled]=\"disableAuto ? '' : null\" name=\"autoCapacity\" [(ngModel)]=\"autoCapacity\" class=\"browser-default custom-select\">\r\n                <option value=\"\">auto capacity</option>\r\n                <option value=\"low\">low</option>\r\n                <option value=\"medium\">medium</option>\r\n                <option value=\"high\">high</option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input [attr.disabled]=\"disableAuto ? '' : null\" type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"distance\" [(ngModel)]=\"distance\" name=\"distance\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space3\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val2\" placeholder=\"acc price\" [(ngModel)]=\"accPrice\" name=\"accPrice\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val2 form-space2\" placeholder=\"oth tickets price\" [(ngModel)]=\"othTicketsPrice\" name=\"othTicketsPrice\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val2 form-space2\" placeholder=\"oth outlay price\" [(ngModel)]=\"othOutlayPrice\" name=\"othOutlayPrice\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"other outlay description\" [(ngModel)]=\"othOutlayDesc\" name=\"othOutlayDesc\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <input type=\"submit\" value=\"Save\" class=\"btn reg_btn\" (click)=\"save()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <table class=\"table table-hover table-fixed\">\r\n        <thead class=\"thead-dark text-truncate\">\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">Description</th>\r\n          <th scope=\"col\">Start time</th>\r\n          <th scope=\"col\">Stop time</th>\r\n          <th scope=\"col\">Travel diet</th>\r\n          <th scope=\"col\">Breakfasts</th>\r\n          <th scope=\"col\">Dinners</th>\r\n          <th scope=\"col\">Suppers</th>\r\n          <th scope=\"col\">Transport</th>\r\n          <th scope=\"col\">Ticket pr.</th>\r\n          <th scope=\"col\">Auto cap.</th>\r\n          <th scope=\"col\">Distance</th>\r\n          <th scope=\"col\">ACC pr.</th>\r\n          <th scope=\"col\">OTH tickets pr.</th>\r\n          <th scope=\"col\">OTH outlay desc.</th>\r\n          <th scope=\"col\">OTH outlay pr.</th>\r\n          <th scope=\"col\">Export delegation</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let del of delegations\">\r\n          <td>{{del.id}}</td>\r\n          <td>{{del.description}}</td>\r\n          <td>{{del.dateTimeStart}}</td>\r\n          <td>{{del.dateTimeStop}}</td>\r\n          <td>{{del.travelDietAmount}}</td>\r\n          <td>{{del.breakfastNumber}}</td>\r\n          <td>{{del.dinnerNumber}}</td>\r\n          <td>{{del.supperNumber}}</td>\r\n          <td>{{del.transport.toLowerCase()}}</td>\r\n          <td>{{del.ticketPrice}}</td>\r\n          <td>{{del.autoCapacity.toLowerCase()}}</td>\r\n          <td>{{del.distance}}</td>\r\n          <td>{{del.accommodationPrice}}</td>\r\n          <td>{{del.otherTicketsPrice}}</td>\r\n          <td>{{del.otherOutlayDesc}}</td>\r\n          <td>{{del.otherOutlayPrice}}</td>\r\n          <td>\r\n            <input type=\"button\" value=\"PDF\" class=\"btn\" (click)=\"savePDF(del)\">\r\n            <input type=\"button\" value=\"Print\" class=\"btn\" (click)=\"print(del)\">\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-date\" placeholder=\"start [YYYY-MM-DD HH:MM]\" [(ngModel)]=\"dateStart\" name=\"dateStart\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-date form-space2\" placeholder=\"stop [YYYY-MM-DD HH:MM]\" [(ngModel)]=\"dateStop\" name=\"dateStop\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val\" placeholder=\"travel diet\" [(ngModel)]=\"travelDiet\" name=\"travelDiet\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"breakfasts\" [(ngModel)]=\"breakfasts\" name=\"breakfasts\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"dinners\" [(ngModel)]=\"dinners\" name=\"dinners\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"suppers\" [(ngModel)]=\"suppers\" name=\"suppers\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space form-val\">\r\n            <label>\r\n              <select name=\"transport\" [(ngModel)]=\"transport\" (ngModelChange)=\"onChange($event)\" class=\"browser-default custom-select\">\r\n                <option value=\"\">transport</option>\r\n                <option value=\"car\">car</option>\r\n                <option value=\"train\">train</option>\r\n                <option value=\"bus\">bus</option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input [attr.disabled]=\"disableTicket ? '' : null\" type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"ticket price\" [(ngModel)]=\"ticketPrice\" name=\"ticketPrice\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2 form-val\">\r\n            <label>\r\n              <select [attr.disabled]=\"disableAuto ? '' : null\" name=\"autoCapacity\" [(ngModel)]=\"autoCapacity\" class=\"browser-default custom-select\">\r\n                <option value=\"\">auto capacity</option>\r\n                <option value=\"low\">low</option>\r\n                <option value=\"medium\">medium</option>\r\n                <option value=\"high\">high</option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input [attr.disabled]=\"disableAuto ? '' : null\" type=\"text\" class=\"form-control form-val form-space2\" placeholder=\"distance\" [(ngModel)]=\"distance\" name=\"distance\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space3\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val2\" placeholder=\"acc price\" [(ngModel)]=\"accPrice\" name=\"accPrice\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val2 form-space2\" placeholder=\"oth tickets price\" [(ngModel)]=\"othTicketsPrice\" name=\"othTicketsPrice\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-val2 form-space2\" placeholder=\"oth outlay price\" [(ngModel)]=\"othOutlayPrice\" name=\"othOutlayPrice\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"other outlay description\" [(ngModel)]=\"othOutlayDesc\" name=\"othOutlayDesc\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <select class=\"browser-default custom-select form-del\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChangeDel($event)\">\r\n                <option value=\"\">delegation</option>\r\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\r\n                  {{\r\n                    \"(\" + del.id + \") \" + del.dateTimeStart\r\n                    .replace(\"T\", \" \")\r\n                    .substr(0,16)\r\n                  }}\r\n                </option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2\">\r\n            <input type=\"submit\" value=\"Edit\" class=\"btn reg_btn\" (click)=\"edit()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\" [disabled]=\"true\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <select class=\"browser-default custom-select form-del\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\">\r\n                <option value=\"\">delegation</option>\r\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\r\n                  {{\r\n                  \"(\" + del.id + \") \" + del.dateTimeStart\r\n                    .replace(\"T\", \" \")\r\n                    .substr(0,16)\r\n                  }}\r\n                </option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2\">\r\n            <input type=\"submit\" value=\"Remove\" class=\"btn reg_btn\" (click)=\"delete()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\" [disabled]=\"true\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <select class=\"browser-default custom-select form-del\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\">\r\n                <option value=\"\">delegation</option>\r\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\r\n                  {{\r\n                  \"(\" + del.id + \") \" + del.dateTimeStart\r\n                    .replace(\"T\", \" \")\r\n                    .substr(0,16)\r\n                  }}\r\n                </option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2\">\r\n            <input type=\"submit\" value=\"Request\" class=\"btn reg_btn\" (click)=\"request()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <textarea class=\"form-control form-desc\" rows=\"1\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\" [disabled]=\"true\"></textarea>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <select class=\"browser-default custom-select form-del\" name=\"chosenDel\" [(ngModel)]=\"chosenDel\" (ngModelChange)=\"onChange($event)\">\r\n                <option value=\"\">delegation</option>\r\n                <option *ngFor=\"let del of delegations\" [ngValue]=\"del\">\r\n                  {{\r\n                  \"(\" + del.id + \") \" + del.dateTimeStart\r\n                    .replace(\"T\", \" \")\r\n                    .substr(0,16)\r\n                  }}\r\n                </option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center form-space2\">\r\n            <input type=\"submit\" value=\"Request\" class=\"btn reg_btn\" (click)=\"request()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <table class=\"table table-hover table-fixed\">\r\n        <thead class=\"thead-dark text-truncate\">\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">Description</th>\r\n          <th scope=\"col\">Start time</th>\r\n          <th scope=\"col\">Stop time</th>\r\n          <th scope=\"col\">Travel diet</th>\r\n          <th scope=\"col\">Breakfasts</th>\r\n          <th scope=\"col\">Dinners</th>\r\n          <th scope=\"col\">Suppers</th>\r\n          <th scope=\"col\">Transport</th>\r\n          <th scope=\"col\">Ticket pr.</th>\r\n          <th scope=\"col\">Auto cap.</th>\r\n          <th scope=\"col\">Distance</th>\r\n          <th scope=\"col\">ACC pr.</th>\r\n          <th scope=\"col\">OTH tickets pr.</th>\r\n          <th scope=\"col\">OTH outlay desc.</th>\r\n          <th scope=\"col\">OTH outlay pr.</th>\r\n          <th scope=\"col\">Export delegation</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let del of delegations\">\r\n          <td>{{del.id}}</td>\r\n          <td>{{del.description}}</td>\r\n          <td>{{del.dateTimeStart}}</td>\r\n          <td>{{del.dateTimeStop}}</td>\r\n          <td>{{del.travelDietAmount}}</td>\r\n          <td>{{del.breakfastNumber}}</td>\r\n          <td>{{del.dinnerNumber}}</td>\r\n          <td>{{del.supperNumber}}</td>\r\n          <td>{{del.transport.toLowerCase()}}</td>\r\n          <td>{{del.ticketPrice}}</td>\r\n          <td>{{del.autoCapacity.toLowerCase()}}</td>\r\n          <td>{{del.distance}}</td>\r\n          <td>{{del.accommodationPrice}}</td>\r\n          <td>{{del.otherTicketsPrice}}</td>\r\n          <td>{{del.otherOutlayDesc}}</td>\r\n          <td>{{del.otherOutlayPrice}}</td>\r\n          <td>\r\n            <input type=\"button\" value=\"PDF\" class=\"btn\" (click)=\"savePDF(del)\">\r\n            <input type=\"button\" value=\"Print\" class=\"btn\" (click)=\"print(del)\">\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home-panel/home-panel.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home-panel/home-panel.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <table>\r\n        <tr>\r\n          <th class=\"space-col\">\r\n            <div *ngIf=\"socialLogged()==false\" class=\"icon\"><i class=\"fa fa-user\"></i></div>\r\n            <img *ngIf=\"socialLogged()==true\" src=\"{{ photoUrl }}\" alt=\"photo\">\r\n          </th>\r\n          <th>\r\n            <div class=\"size-big space-row\"> {{fullName}} </div>\r\n            <div class=\"size-small\"> {{email}} </div>\r\n          </th>\r\n        </tr>\r\n        <tr class=\"space-row\">\r\n        <th class=\"space-col\">\r\n          <div class=\"icon2\"><i class=\"fa fa-building\"></i></div>\r\n        </th>\r\n        <th>\r\n          <div class=\"size-medium space-row2\"> {{companyName}} </div>\r\n          <div class=\"size-small\"> {{companyAddress}} </div>\r\n          <div class=\"size-small\"> {{companyNip}} </div>\r\n        </th>\r\n        </tr>\r\n        <tr class=\"space-row\">\r\n          <th class=\"space-col\">\r\n            <div class=\"icon2\"><i class=\"fa fa-book\"></i></div>\r\n          </th>\r\n          <th>\r\n            <div class=\"size-small \"> {{roles}} </div>\r\n            <div class=\"size-small\"> {{status}} </div>\r\n            <div class=\"size-small\"> {{registrationDate}} </div>\r\n          </th>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <title>Home Page</title>\r\n</head>\r\n<body>\r\n  <nav class=\"navbar navbar-expand-lg navbar-custom navbar-dark fixed-top\">\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link tab\" routerLink=\"/home\"><span> Home </span></a>\r\n          <div class=\"dropdown-divider\"></div>\r\n        </li>\r\n        <li *ngIf=\"userLogged==true\" class=\"nav-item dropdown active\">\r\n          <a class=\"nav-link dropdown-toggle tab\" data-toggle=\"dropdown\">\r\n            <span> Profile </span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/profile/edit\"><span> Edit data </span></a></li>\r\n            <li><a *ngIf=\"socialLogged==false\" class=\"dropdown-item tab\" routerLink=\"/home/profile/password\"><span> Change password </span></a></li>\r\n          </ul>\r\n        </li>\r\n        <li *ngIf=\"userLogged==true\" class=\"nav-item dropdown active\">\r\n          <a class=\"nav-link dropdown-toggle tab\" data-toggle=\"dropdown\">\r\n            <span> Delegation </span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/list/confirmed\"><span> All confirmed </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/list/unconfirmed\"><span> All unconfirmed </span></a></li>\r\n            <li class=\"dropdown-divider\"></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/request/confirmation\"><span> Request confirmation </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/request/unconfirmation\"><span> Request unconfirmation </span></a></li>\r\n            <li class=\"dropdown-divider\"></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/add\"><span> Add delegation </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/edit\"><span> Edit delegation </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/delegation/remove\"><span> Remove delegation </span></a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <a class=\"navbar-brand navbar-center title\"> Business Trips Management System </a>\r\n      <ul class=\"navbar-nav\">\r\n        <li *ngIf=\"adminLogged==true\" class=\"nav-item dropdown active\">\r\n          <a class=\"nav-link dropdown-toggle tab\" data-toggle=\"dropdown\">\r\n            <span> Admin Panel </span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <ul class=\"dropdown-menu dropdown-menu-right\">\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/admin/user/make-admin\"><span> Make user admin </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/admin/user/remove\"><span> Remove user </span></a></li>\r\n            <li class=\"dropdown-divider\"></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/admin/request/confirmation\"><span> Confirmation request </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/admin/request/unconfirmation\"><span> Unconfirmation request </span></a></li>\r\n            <li class=\"dropdown-divider\"></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/admin/delegation/edit\"><span> Edit delegation </span></a></li>\r\n            <li><a class=\"dropdown-item tab\" routerLink=\"/home/admin/delegation/remove\"><span> Remove delegation </span></a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"ml-auto nav-item active\">\r\n          <a class=\"nav-link tab\" (click)=\"logout()\"><span> Logout </span></a>\r\n          <div class=\"dropdown-divider\"></div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <footer class=\"page-footer font-small blue footer-custom navbar-fixed-bottom\">\r\n    <div class=\"footer-copyright text-center py-3\">© 2020 Copyright:\r\n      <b> Szymon Betlewski </b>\r\n    </div>\r\n  </footer>\r\n\r\n  <router-outlet> </router-outlet>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"new password\" [(ngModel)]=\"passwordNew1\" name=\"passwordNew1\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"new password\" [(ngModel)]=\"passwordNew2\" name=\"passwordNew2\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center row-space\">\r\n            <label>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"current password\" [(ngModel)]=\"passwordOld\" name=\"passwordOld\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center\">\r\n            <input type=\"submit\" value=\"Change\" class=\"btn reg_btn\" (click)=\"change()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"text-center message\"> {{message}} </div>\r\n      <form>\r\n        <div class=\"form-row message\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"first name\" [(ngModel)]=\"name\" name=\"name\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-space2\" placeholder=\"surname\" [(ngModel)]=\"lastName\" name=\"lastName\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group\"></div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"company name\" [(ngModel)]=\"companyName\" name=\"companyName\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-space2\" placeholder=\"company nip\" [(ngModel)]=\"companyNip\" name=\"companyNip\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group text-center form-space\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control form-address\" placeholder=\"company address\" [(ngModel)]=\"companyAddress\" name=\"companyAddress\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row row-space\">\r\n          <div class=\"form-group text-center\">\r\n            <input type=\"submit\" value=\"Edit data\" class=\"btn reg_btn\" (click)=\"edit()\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <title>Login Page</title>\r\n</head>\r\n<body>\r\n<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h3>Sign In</h3>\r\n        <div class=\"d-flex justify-content-end social_icon\">\r\n          <span><i class=\"fa fa-google-plus-square\" (click)=\"socialLogin('google')\"></i></span>\r\n          <span><i class=\"fa fa-facebook-square\" (click)=\"socialLogin('facebook')\"></i></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"text-center links\"> {{ message }} </div>\r\n        <label></label>\r\n        <form>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"email\" [(ngModel)]=\"email\" name=\"email\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <label>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <input type=\"submit\" value=\"Login\" class=\"btn login_btn\" (click)=checkLogin()>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <div class=\"d-flex justify-content-center links\">\r\n          Don't have an account?<a routerLink=\"/register\">Sign Up</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <title>Registration Page</title>\r\n</head>\r\n<body>\r\n<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center h-100\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h3>Sign Up</h3>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"text-center links\"> {{message}} </div>\r\n        <label></label>\r\n        <form>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group text-center form-space\">\r\n              <label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"first name\" [(ngModel)]=\"firstName\" name=\"firstName\">\r\n              </label>\r\n            </div>\r\n            <div class=\"form-group text-center\">\r\n              <label>\r\n                <input type=\"text\" class=\"form-control form-space\" placeholder=\"surname\" [(ngModel)]=\"surname\" name=\"surname\">\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group text-center form-space\">\r\n              <label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"email\" [(ngModel)]=\"email\" name=\"email\">\r\n              </label>\r\n            </div>\r\n            <div class=\"form-group text-center\">\r\n              <label>\r\n                <input type=\"password\" class=\"form-control form-space\" placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\">\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group\"></div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group text-center form-space\">\r\n              <label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"company name\" [(ngModel)]=\"companyName\" name=\"companyName\">\r\n              </label>\r\n            </div>\r\n            <div class=\"form-group text-center\">\r\n              <label>\r\n                <input type=\"text\" class=\"form-control form-space\" placeholder=\"company nip\" [(ngModel)]=\"companyNip\" name=\"companyNip\">\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group text-center form-space\">\r\n              <label>\r\n                <input type=\"text\" class=\"form-control form-address\" placeholder=\"company address\" [(ngModel)]=\"companyAddress\" name=\"companyAddress\">\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <input type=\"submit\" value=\"Register\" class=\"btn reg_btn\" (click)=\"register()\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <div class=\"d-flex justify-content-center links\">\r\n          Already have an account?<a routerLink=\"/login\">Sign In</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_home_panel_home_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home-panel/home-panel.component */ "./src/app/home/home-panel/home-panel.component.ts");
/* harmony import */ var _home_profile_tab_edit_profile_panel_edit_profile_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/profile-tab/edit-profile-panel/edit-profile-panel.component */ "./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.ts");
/* harmony import */ var _home_profile_tab_change_pwd_panel_change_pwd_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/profile-tab/change-pwd-panel/change-pwd-panel.component */ "./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.ts");
/* harmony import */ var _home_delegation_tab_add_panel_add_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/delegation-tab/add-panel/add-panel.component */ "./src/app/home/delegation-tab/add-panel/add-panel.component.ts");
/* harmony import */ var _home_delegation_tab_edit_deleg_panel_edit_deleg_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component */ "./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.ts");
/* harmony import */ var _home_delegation_tab_remove_deleg_panel_remove_deleg_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component */ "./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.ts");
/* harmony import */ var _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth-guard/auth.guard */ "./src/app/auth-guard/auth.guard.ts");
/* harmony import */ var _home_delegation_tab_confirmed_list_panel_confirmed_list_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component */ "./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.ts");
/* harmony import */ var _home_delegation_tab_unconfirmed_list_panel_unconfirmed_list_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component */ "./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.ts");
/* harmony import */ var _home_delegation_tab_request_confirmation_panel_request_confirmation_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component */ "./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.ts");
/* harmony import */ var _home_delegation_tab_request_unconfirmation_panel_request_unconfirmation_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component */ "./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.ts");
/* harmony import */ var _home_admin_tab_user_admin_panel_user_admin_panel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/admin-tab/user-admin-panel/user-admin-panel.component */ "./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.ts");
/* harmony import */ var _home_admin_tab_remove_user_panel_remove_user_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/admin-tab/remove-user-panel/remove-user-panel.component */ "./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.ts");
/* harmony import */ var _home_admin_tab_confirmation_request_panel_confirmation_request_panel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/admin-tab/confirmation-request-panel/confirmation-request-panel.component */ "./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.ts");
/* harmony import */ var _home_admin_tab_unconfirmation_request_panel_unconfirmation_request_panel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component */ "./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.ts");
/* harmony import */ var _home_admin_tab_edit_delegation_panel_edit_delegation_panel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/admin-tab/edit-delegation-panel/edit-delegation-panel.component */ "./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.ts");
/* harmony import */ var _home_admin_tab_remove_delegation_panel_remove_delegation_panel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/admin-tab/remove-delegation-panel/remove-delegation-panel.component */ "./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.ts");























var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        children: [
            {
                path: '',
                component: _home_home_panel_home_panel_component__WEBPACK_IMPORTED_MODULE_6__["HomePanelComponent"],
                canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: 'edit',
                        component: _home_profile_tab_edit_profile_panel_edit_profile_panel_component__WEBPACK_IMPORTED_MODULE_7__["EditProfilePanelComponent"],
                        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
                    },
                    {
                        path: 'password',
                        component: _home_profile_tab_change_pwd_panel_change_pwd_panel_component__WEBPACK_IMPORTED_MODULE_8__["ChangePwdPanelComponent"],
                        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
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
                                component: _home_delegation_tab_confirmed_list_panel_confirmed_list_panel_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmedListPanelComponent"],
                                canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
                            },
                            {
                                path: 'unconfirmed',
                                component: _home_delegation_tab_unconfirmed_list_panel_unconfirmed_list_panel_component__WEBPACK_IMPORTED_MODULE_14__["UnconfirmedListPanelComponent"],
                                canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
                            }
                        ]
                    },
                    {
                        path: 'request',
                        children: [
                            {
                                path: 'confirmation',
                                component: _home_delegation_tab_request_confirmation_panel_request_confirmation_panel_component__WEBPACK_IMPORTED_MODULE_15__["RequestConfirmationPanelComponent"],
                                canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
                            },
                            {
                                path: 'unconfirmation',
                                component: _home_delegation_tab_request_unconfirmation_panel_request_unconfirmation_panel_component__WEBPACK_IMPORTED_MODULE_16__["RequestUnconfirmationPanelComponent"],
                                canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
                            }
                        ]
                    },
                    {
                        path: 'add',
                        component: _home_delegation_tab_add_panel_add_panel_component__WEBPACK_IMPORTED_MODULE_9__["AddPanelComponent"],
                        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
                    },
                    {
                        path: 'edit',
                        component: _home_delegation_tab_edit_deleg_panel_edit_deleg_panel_component__WEBPACK_IMPORTED_MODULE_10__["EditDelegPanelComponent"],
                        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
                    },
                    {
                        path: 'remove',
                        component: _home_delegation_tab_remove_deleg_panel_remove_deleg_panel_component__WEBPACK_IMPORTED_MODULE_11__["RemoveDelegPanelComponent"],
                        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
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
                                component: _home_admin_tab_user_admin_panel_user_admin_panel_component__WEBPACK_IMPORTED_MODULE_17__["UserAdminPanelComponent"],
                                canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
                            },
                            {
                                path: 'remove',
                                component: _home_admin_tab_remove_user_panel_remove_user_panel_component__WEBPACK_IMPORTED_MODULE_18__["RemoveUserPanelComponent"],
                                canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
                            }
                        ]
                    },
                    {
                        path: 'request',
                        children: [
                            {
                                path: 'confirmation',
                                component: _home_admin_tab_confirmation_request_panel_confirmation_request_panel_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmationRequestPanelComponent"],
                                canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
                            },
                            {
                                path: 'unconfirmation',
                                component: _home_admin_tab_unconfirmation_request_panel_unconfirmation_request_panel_component__WEBPACK_IMPORTED_MODULE_20__["UnconfirmationRequestPanelComponent"],
                                canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
                            }
                        ]
                    },
                    {
                        path: 'delegation',
                        children: [
                            {
                                path: 'edit',
                                component: _home_admin_tab_edit_delegation_panel_edit_delegation_panel_component__WEBPACK_IMPORTED_MODULE_21__["EditDelegationPanelComponent"],
                                canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
                            },
                            {
                                path: 'remove',
                                component: _home_admin_tab_remove_delegation_panel_remove_delegation_panel_component__WEBPACK_IMPORTED_MODULE_22__["RemoveDelegationPanelComponent"],
                                canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
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
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-service/auth.service */ "./src/app/auth-service/auth.service.ts");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-service/user.service */ "./src/app/user-service/user.service.ts");
/* harmony import */ var _home_home_panel_home_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home-panel/home-panel.component */ "./src/app/home/home-panel/home-panel.component.ts");
/* harmony import */ var _home_profile_tab_edit_profile_panel_edit_profile_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/profile-tab/edit-profile-panel/edit-profile-panel.component */ "./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.ts");
/* harmony import */ var _home_profile_tab_change_pwd_panel_change_pwd_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/profile-tab/change-pwd-panel/change-pwd-panel.component */ "./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.ts");
/* harmony import */ var _home_delegation_tab_add_panel_add_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/delegation-tab/add-panel/add-panel.component */ "./src/app/home/delegation-tab/add-panel/add-panel.component.ts");
/* harmony import */ var _home_delegation_tab_edit_deleg_panel_edit_deleg_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component */ "./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.ts");
/* harmony import */ var _home_delegation_tab_remove_deleg_panel_remove_deleg_panel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component */ "./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.ts");
/* harmony import */ var _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./delegation-service/delegation.service */ "./src/app/delegation-service/delegation.service.ts");
/* harmony import */ var _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth-guard/auth.guard */ "./src/app/auth-guard/auth.guard.ts");
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng4-social-login */ "./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng4_social_login__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _home_delegation_tab_confirmed_list_panel_confirmed_list_panel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component */ "./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.ts");
/* harmony import */ var _home_delegation_tab_unconfirmed_list_panel_unconfirmed_list_panel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component */ "./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.ts");
/* harmony import */ var _home_delegation_tab_request_confirmation_panel_request_confirmation_panel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component */ "./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.ts");
/* harmony import */ var _home_delegation_tab_request_unconfirmation_panel_request_unconfirmation_panel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component */ "./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.ts");
/* harmony import */ var _home_admin_tab_user_admin_panel_user_admin_panel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/admin-tab/user-admin-panel/user-admin-panel.component */ "./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.ts");
/* harmony import */ var _home_admin_tab_remove_user_panel_remove_user_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/admin-tab/remove-user-panel/remove-user-panel.component */ "./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.ts");
/* harmony import */ var _home_admin_tab_confirmation_request_panel_confirmation_request_panel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/admin-tab/confirmation-request-panel/confirmation-request-panel.component */ "./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.ts");
/* harmony import */ var _home_admin_tab_unconfirmation_request_panel_unconfirmation_request_panel_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component */ "./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.ts");
/* harmony import */ var _home_admin_tab_edit_delegation_panel_edit_delegation_panel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./home/admin-tab/edit-delegation-panel/edit-delegation-panel.component */ "./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.ts");
/* harmony import */ var _home_admin_tab_remove_delegation_panel_remove_delegation_panel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./home/admin-tab/remove-delegation-panel/remove-delegation-panel.component */ "./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.ts");































var config = new ng4_social_login__WEBPACK_IMPORTED_MODULE_20__["AuthServiceConfig"]([
    {
        id: ng4_social_login__WEBPACK_IMPORTED_MODULE_20__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new ng4_social_login__WEBPACK_IMPORTED_MODULE_20__["GoogleLoginProvider"]('640403541746-94fshk3mo7g5pr38k2tf5uc77ocoghs5.apps.googleusercontent.com')
    },
    {
        id: ng4_social_login__WEBPACK_IMPORTED_MODULE_20__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new ng4_social_login__WEBPACK_IMPORTED_MODULE_20__["FacebookLoginProvider"]('239279973988150')
    }
], false);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _home_home_panel_home_panel_component__WEBPACK_IMPORTED_MODULE_12__["HomePanelComponent"],
                _home_profile_tab_edit_profile_panel_edit_profile_panel_component__WEBPACK_IMPORTED_MODULE_13__["EditProfilePanelComponent"],
                _home_profile_tab_change_pwd_panel_change_pwd_panel_component__WEBPACK_IMPORTED_MODULE_14__["ChangePwdPanelComponent"],
                _home_delegation_tab_add_panel_add_panel_component__WEBPACK_IMPORTED_MODULE_15__["AddPanelComponent"],
                _home_delegation_tab_edit_deleg_panel_edit_deleg_panel_component__WEBPACK_IMPORTED_MODULE_16__["EditDelegPanelComponent"],
                _home_delegation_tab_remove_deleg_panel_remove_deleg_panel_component__WEBPACK_IMPORTED_MODULE_17__["RemoveDelegPanelComponent"],
                _home_delegation_tab_confirmed_list_panel_confirmed_list_panel_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmedListPanelComponent"],
                _home_delegation_tab_unconfirmed_list_panel_unconfirmed_list_panel_component__WEBPACK_IMPORTED_MODULE_22__["UnconfirmedListPanelComponent"],
                _home_delegation_tab_request_confirmation_panel_request_confirmation_panel_component__WEBPACK_IMPORTED_MODULE_23__["RequestConfirmationPanelComponent"],
                _home_delegation_tab_request_unconfirmation_panel_request_unconfirmation_panel_component__WEBPACK_IMPORTED_MODULE_24__["RequestUnconfirmationPanelComponent"],
                _home_admin_tab_user_admin_panel_user_admin_panel_component__WEBPACK_IMPORTED_MODULE_25__["UserAdminPanelComponent"],
                _home_admin_tab_remove_user_panel_remove_user_panel_component__WEBPACK_IMPORTED_MODULE_26__["RemoveUserPanelComponent"],
                _home_admin_tab_confirmation_request_panel_confirmation_request_panel_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmationRequestPanelComponent"],
                _home_admin_tab_unconfirmation_request_panel_unconfirmation_request_panel_component__WEBPACK_IMPORTED_MODULE_28__["UnconfirmationRequestPanelComponent"],
                _home_admin_tab_edit_delegation_panel_edit_delegation_panel_component__WEBPACK_IMPORTED_MODULE_29__["EditDelegationPanelComponent"],
                _home_admin_tab_remove_delegation_panel_remove_delegation_panel_component__WEBPACK_IMPORTED_MODULE_30__["RemoveDelegationPanelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ng4_social_login__WEBPACK_IMPORTED_MODULE_20__["SocialLoginModule"]
            ],
            providers: [
                _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
                _user_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_18__["DelegationService"],
                {
                    provide: ng4_social_login__WEBPACK_IMPORTED_MODULE_20__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/auth-guard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-service/auth.service */ "./src/app/auth-service/auth.service.ts");




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
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth-service/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/auth-service/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.USER_EMAIL = 'email';
        this.USER_PASSWORD = 'password';
        this.SOCIAL_LOGIN = 'socialLogin';
        this.socialEmail = "szybet1@gmail.com";
        this.socialPassword = "Kosciotrup1!";
        this.AUTH_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mainUrl + '/api/user/auth';
    }
    AuthService.prototype.authenticationService = function (email, password) {
        var _this = this;
        return this.http.get(this.AUTH_URL, { headers: { Authorization: 'Basic ' + btoa(email + ':' + password) } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
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
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/delegation-service/delegation.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/delegation-service/delegation.service.ts ***!
  \**********************************************************/
/*! exports provided: DelegationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelegationService", function() { return DelegationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-service/auth.service */ "./src/app/auth-service/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var DelegationService = /** @class */ (function () {
    function DelegationService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.DEL_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mainUrl + '/api/delegation';
        this.FIND_BY_EMAIL_URL = this.DEL_URL + '/allByUser';
        this.FIND_FUT_BY_EMAIL_URL = this.DEL_URL + '/futureByUser';
        this.FIND_BY_STATUS_URL = this.DEL_URL + '/admin/allByStatus';
        this.FIND_BY_EMAIL_AND_CONF_URL = this.DEL_URL + '/allByUserAndConfirmation';
        this.FIND_NOT_REQ_BY_EMAIL_AND_CONF_URL = this.DEL_URL + '/allNotRequestedByUserAndConfirmation';
        this.REQUEST_BY_STATUS_URL = this.DEL_URL + '/requestByStatus';
        this.ANSWER_REQUEST_URL = this.DEL_URL + '/admin/answerRequestById';
        this.ADD_DEL_URL = this.DEL_URL + '/add';
        this.EDIT_DEL_URL = this.DEL_URL + '/change';
        this.DELETE_DEL_URL = this.DEL_URL + '/delete';
    }
    DelegationService.prototype.findByEmailAndConfirmation = function (isConfirmed) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("email", email.toString())
            .set("isConfirmed", isConfirmed.toString());
        return this.http.get(this.FIND_BY_EMAIL_AND_CONF_URL, { headers: this.headers, params: params });
    };
    DelegationService.prototype.findNotRequestedByEmailAndConfirmation = function (isConfirmed) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("email", email.toString())
            .set("isConfirmed", isConfirmed.toString());
        return this.http.get(this.FIND_NOT_REQ_BY_EMAIL_AND_CONF_URL, { headers: this.headers, params: params });
    };
    DelegationService.prototype.findRequestedByEmailAndConfirmation = function (status) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("status", status.toString());
        return this.http.get(this.FIND_BY_STATUS_URL, { headers: this.headers, params: params });
    };
    DelegationService.prototype.findFutureByEmail = function () {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", email.toString());
        return this.http.get(this.FIND_FUT_BY_EMAIL_URL, { headers: this.headers, params: params });
    };
    DelegationService.prototype.findAllByEmail = function (email) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", email);
        return this.http.get(this.FIND_BY_EMAIL_URL, { headers: this.headers, params: params });
    };
    DelegationService.prototype.requestByStatus = function (id, status) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id);
        return this.http.put(this.REQUEST_BY_STATUS_URL, status, { headers: this.headers, params: params });
    };
    DelegationService.prototype.answerRequest = function (id) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        return this.http.put(this.ANSWER_REQUEST_URL, id, { headers: this.headers });
    };
    DelegationService.prototype.addDelegation = function (delegation) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", email.toString());
        return this.http.post(this.ADD_DEL_URL, delegation, { headers: this.headers, params: params });
    };
    DelegationService.prototype.editDelegation = function (id, delegation) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id);
        return this.http.put(this.EDIT_DEL_URL, delegation, { headers: this.headers, params: params });
    };
    DelegationService.prototype.deleteDelegation = function (id) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id);
        return this.http.delete(this.DELETE_DEL_URL, { headers: this.headers, params: params });
    };
    DelegationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    DelegationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DelegationService);
    return DelegationService;
}());



/***/ }),

/***/ "./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n.form-del {\r\n  margin-left: 110px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvcmVtb3ZlLWRlbGVnLXBhbmVsL3JlbW92ZS1kZWxlZy1wYW5lbC5jb21wb25lbnQuY3NzIiwic3JjL2FwcC9ob21lL2FkbWluLXRhYi9jb25maXJtYXRpb24tcmVxdWVzdC1wYW5lbC9jb25maXJtYXRpb24tcmVxdWVzdC1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxvRkFBb0Y7QUFFcEY7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0dBQ0csWUFBWTtHQUNaLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osa0JBQWtCO0NBQ3BCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FDL0NBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FDckJBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hZG1pbi10YWIvY29uZmlybWF0aW9uLXJlcXVlc3QtcGFuZWwvY29uZmlybWF0aW9uLXJlcXVlc3QtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XHJcbkBpbXBvcnQgdXJsKCcvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA2MTBweDtcclxuICBoZWlnaHQ6IDM5MHB4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNwYWNlIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmZvcm0tc3BhY2UyIHtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmZvcm0tYWRkcmVzcyB7XHJcbiAgd2lkdGg6NTE1cHg7XHJcbn1cclxuXHJcbi5yb3ctc3BhY2Uge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWdfYnRue1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICB3aWR0aDogMTEwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxOTBweDtcclxuIH1cclxuXHJcbi5yZWdfYnRuOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiLi4vLi4vcHJvZmlsZS10YWIvZWRpdC1wcm9maWxlLXBhbmVsL2VkaXQtcHJvZmlsZS1wYW5lbC5jb21wb25lbnQuY3NzXCIpO1xyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA1OTBweDtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG59XHJcblxyXG4uZm9ybS1kZWwge1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBtYXJnaW4tbGVmdDogMTE1cHg7XHJcbn1cclxuXHJcbi5yZWdfYnRue1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tZGVzYyB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiLi4vLi4vZGVsZWdhdGlvbi10YWIvcmVtb3ZlLWRlbGVnLXBhbmVsL3JlbW92ZS1kZWxlZy1wYW5lbC5jb21wb25lbnQuY3NzXCIpO1xyXG5cclxuLmZvcm0tZGVsIHtcclxuICBtYXJnaW4tbGVmdDogMTEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ConfirmationRequestPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationRequestPanelComponent", function() { return ConfirmationRequestPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../delegation-service/delegation.service */ "./src/app/delegation-service/delegation.service.ts");



var ConfirmationRequestPanelComponent = /** @class */ (function () {
    function ConfirmationRequestPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Choose confirmation request to confirm delegation...";
        this.errorText = "Given delegation cannot be confirmed!";
        this.successText = "Given delegation has been confirmed!";
        this.message = this.welcomeText;
        this.chosenId = "";
        this.chosenDel = "";
        this.loadDelegations();
    }
    ConfirmationRequestPanelComponent.prototype.ngOnInit = function () {
    };
    ConfirmationRequestPanelComponent.prototype.loadDelegations = function () {
        var _this = this;
        this.delegationService.findRequestedByEmailAndConfirmation(true).subscribe(function (data) {
            _this.delegations = data;
        });
    };
    ConfirmationRequestPanelComponent.prototype.confirm = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {
            this.delegationService.answerRequest(this.chosenId).subscribe(function () {
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
    ConfirmationRequestPanelComponent.ctorParameters = function () { return [
        { type: _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__["DelegationService"] }
    ]; };
    ConfirmationRequestPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation-request-panel',
            template: __webpack_require__(/*! raw-loader!./confirmation-request-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-request-panel.component.css */ "./src/app/home/admin-tab/confirmation-request-panel/confirmation-request-panel.component.css")]
        })
    ], ConfirmationRequestPanelComponent);
    return ConfirmationRequestPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 710px;\r\n  height: 550px;\r\n}\r\n.message2 {\r\n  margin-top: 15px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 170px;\r\n}\r\n.reg_btn{\r\n  width: 100px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 625px;\r\n}\r\n.form-date {\r\n  width: 300px;\r\n}\r\n.form-val {\r\n  width: 137px;\r\n}\r\n.form-val2 {\r\n  width: 170px;\r\n}\r\n.form-space3 {\r\n  margin-left: 80px;\r\n}\r\n.form-user {\r\n  width: 220px;\r\n  margin-left: 70px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvZWRpdC1kZWxlZy1wYW5lbC9lZGl0LWRlbGVnLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvYWRtaW4tdGFiL2VkaXQtZGVsZWdhdGlvbi1wYW5lbC9lZGl0LWRlbGVnYXRpb24tcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0Qsb0ZBQW9GO0FBRXBGO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtHQUNHLFlBQVk7R0FDWix1QkFBdUI7R0FDdkIsWUFBWTtHQUNaLGtCQUFrQjtDQUNwQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQy9DQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUN6Q0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hZG1pbi10YWIvZWRpdC1kZWxlZ2F0aW9uLXBhbmVsL2VkaXQtZGVsZWdhdGlvbi1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcclxuQGltcG9ydCB1cmwoJy8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuLmNvbnRhaW5lcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDYxMHB4O1xyXG4gIGhlaWdodDogMzkwcHg7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmZvcm0tc3BhY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybS1zcGFjZTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uZm9ybS1hZGRyZXNzIHtcclxuICB3aWR0aDo1MTVweDtcclxufVxyXG5cclxuLnJvdy1zcGFjZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLnJlZ19idG57XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIHdpZHRoOiAxMTBweDtcclxuICAgbWFyZ2luLWxlZnQ6IDE5MHB4O1xyXG4gfVxyXG5cclxuLnJlZ19idG46aG92ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCIuLi8uLi9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3NcIik7XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDcxMHB4O1xyXG4gIGhlaWdodDogNTUwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlMiB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmZvcm0tZGVsIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE3MHB4O1xyXG59XHJcblxyXG4ucmVnX2J0bntcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWRlc2Mge1xyXG4gIHdpZHRoOiA2MjVweDtcclxufVxyXG5cclxuLmZvcm0tZGF0ZSB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uZm9ybS12YWwge1xyXG4gIHdpZHRoOiAxMzdweDtcclxufVxyXG5cclxuLmZvcm0tdmFsMiB7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG59XHJcblxyXG4uZm9ybS1zcGFjZTMge1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiLi4vLi4vZGVsZWdhdGlvbi10YWIvZWRpdC1kZWxlZy1wYW5lbC9lZGl0LWRlbGVnLXBhbmVsLmNvbXBvbmVudC5jc3NcIik7XHJcblxyXG4uZm9ybS11c2VyIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWRlbCB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditDelegationPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDelegationPanelComponent", function() { return EditDelegationPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_delegation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/delegation */ "./src/app/model/delegation.ts");
/* harmony import */ var _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../delegation-service/delegation.service */ "./src/app/delegation-service/delegation.service.ts");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../user-service/user.service */ "./src/app/user-service/user.service.ts");





var EditDelegationPanelComponent = /** @class */ (function () {
    function EditDelegationPanelComponent(userService, delegationService) {
        this.userService = userService;
        this.delegationService = delegationService;
        this.welcomeText = "Choose user and delegation and type all data to edit it...";
        this.dateFormatText = "Given date format is not correct!";
        this.dateCompareText = "Stop date must be after start date!";
        this.errorText = "Given data are not correct!";
        this.successText = "Given delegation has been saved!";
        this.message = this.welcomeText;
        this.chosenUser = "";
        this.clearData();
        this.loadUsers();
    }
    EditDelegationPanelComponent.prototype.ngOnInit = function () {
    };
    EditDelegationPanelComponent.prototype.clearData = function () {
        this.chosenId = "";
        this.chosenDel = "";
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
        this.disableTicket = false;
        this.disableAuto = false;
    };
    EditDelegationPanelComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.findAllUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    EditDelegationPanelComponent.prototype.loadDelegations = function (email) {
        var _this = this;
        this.delegationService.findAllByEmail(email).subscribe(function (data) {
            _this.delegations = data;
        });
    };
    EditDelegationPanelComponent.prototype.edit = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined
            && this.description != null && this.description != ""
            && this.dateStart != null && this.dateStop !== ""
            && this.travelDiet != null && this.travelDiet !== ""
            && this.breakfasts != null && this.breakfasts !== ""
            && this.dinners != null && this.dinners !== ""
            && this.suppers != null && this.suppers !== ""
            && this.transport != null && this.transport != "" && this.transport != undefined
            && this.ticketPrice != null && this.ticketPrice !== ""
            && this.autoCapacity != null && this.autoCapacity != "" && this.autoCapacity != undefined
            && this.distance != null && this.distance !== ""
            && this.accPrice != null && this.accPrice !== ""
            && this.othTicketsPrice != null && this.othTicketsPrice !== ""
            && this.othOutlayDesc != null && this.othOutlayDesc != ""
            && this.othOutlayPrice != null && this.othOutlayPrice !== "") {
            var regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
            if (regex.test(this.dateStart) && regex.test(this.dateStop)) {
                this.delegation = new _model_delegation__WEBPACK_IMPORTED_MODULE_2__["Delegation"](this.description, this.dateStart.replace(" ", "T"), this.dateStop.replace(" ", "T"), this.travelDiet, this.breakfasts, this.dinners, this.suppers, this.transport.toUpperCase(), this.ticketPrice == "-" ? "0" : this.ticketPrice, this.autoCapacity.toUpperCase(), this.distance == "-" ? "0" : this.distance, this.accPrice, this.othTicketsPrice, this.othOutlayDesc == "-" ? null : this.othOutlayDesc, this.othOutlayPrice);
                this.delegationService.editDelegation(this.chosenId, this.delegation).subscribe(function () {
                    _this.message = '.';
                    setTimeout(function () { return _this.message = _this.successText; }, 30);
                    _this.chosenUser = "";
                    _this.loadUsers();
                    _this.onChangeUser("");
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
    EditDelegationPanelComponent.prototype.onChangeUser = function (event) {
        this.clearData();
        this.chosenUser = event;
        if (event == "") {
            this.delegations = null;
        }
        else {
            this.loadDelegations(event.email);
        }
    };
    EditDelegationPanelComponent.prototype.onChangeDel = function (event) {
        if (event == "") {
            this.clearData();
        }
        else {
            this.chosenId = event.id;
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
            this.othOutlayDesc = event.otherOutlayDesc == null ? "-" : event.otherOutlayDesc;
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
    EditDelegationPanelComponent.ctorParameters = function () { return [
        { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_3__["DelegationService"] }
    ]; };
    EditDelegationPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-delegation-panel',
            template: __webpack_require__(/*! raw-loader!./edit-delegation-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.html"),
            styles: [__webpack_require__(/*! ./edit-delegation-panel.component.css */ "./src/app/home/admin-tab/edit-delegation-panel/edit-delegation-panel.component.css")]
        })
    ], EditDelegationPanelComponent);
    return EditDelegationPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n.card {\r\n  width: 700px;\r\n  height: 290px;\r\n}\r\n.form-user-name {\r\n  width: 240px;\r\n  margin-left: 90px;\r\n}\r\n.form-user-lastName {\r\n  width: 240px;\r\n  margin-left: 15px;\r\n}\r\n.form-desc {\r\n  margin-top: -15px;\r\n  margin-left: 90px;\r\n}\r\n.form-user {\r\n  width: 220px;\r\n  margin-left: 50px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvcmVtb3ZlLWRlbGVnLXBhbmVsL3JlbW92ZS1kZWxlZy1wYW5lbC5jb21wb25lbnQuY3NzIiwic3JjL2FwcC9ob21lL2FkbWluLXRhYi9yZW1vdmUtZGVsZWdhdGlvbi1wYW5lbC9yZW1vdmUtZGVsZWdhdGlvbi1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxvRkFBb0Y7QUFFcEY7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0dBQ0csWUFBWTtHQUNaLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osa0JBQWtCO0NBQ3BCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FDL0NBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FDckJBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRtaW4tdGFiL3JlbW92ZS1kZWxlZ2F0aW9uLXBhbmVsL3JlbW92ZS1kZWxlZ2F0aW9uLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bWFucycpO1xyXG5AaW1wb3J0IHVybCgnLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogNjEwcHg7XHJcbiAgaGVpZ2h0OiAzOTBweDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZm9ybS1zcGFjZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNwYWNlMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWFkZHJlc3Mge1xyXG4gIHdpZHRoOjUxNXB4O1xyXG59XHJcblxyXG4ucm93LXNwYWNlIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4ucmVnX2J0bntcclxuICAgY29sb3I6IGJsYWNrO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgd2lkdGg6IDExMHB4O1xyXG4gICBtYXJnaW4tbGVmdDogMTkwcHg7XHJcbiB9XHJcblxyXG4ucmVnX2J0bjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcIi4uLy4uL3Byb2ZpbGUtdGFiL2VkaXQtcHJvZmlsZS1wYW5lbC9lZGl0LXByb2ZpbGUtcGFuZWwuY29tcG9uZW50LmNzc1wiKTtcclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogNTkwcHg7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG5cclxuLmZvcm0tZGVsIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDExNXB4O1xyXG59XHJcblxyXG4ucmVnX2J0bntcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWRlc2Mge1xyXG4gIHdpZHRoOiA1MDBweDtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcIi4uLy4uL2RlbGVnYXRpb24tdGFiL3JlbW92ZS1kZWxlZy1wYW5lbC9yZW1vdmUtZGVsZWctcGFuZWwuY29tcG9uZW50LmNzc1wiKTtcclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxufVxyXG5cclxuLmZvcm0tdXNlci1uYW1lIHtcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXVzZXItbGFzdE5hbWUge1xyXG4gIHdpZHRoOiAyNDBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmZvcm0tZGVzYyB7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXVzZXIge1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmZvcm0tZGVsIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RemoveDelegationPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDelegationPanelComponent", function() { return RemoveDelegationPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../delegation-service/delegation.service */ "./src/app/delegation-service/delegation.service.ts");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user-service/user.service */ "./src/app/user-service/user.service.ts");




var RemoveDelegationPanelComponent = /** @class */ (function () {
    function RemoveDelegationPanelComponent(userService, delegationService) {
        this.userService = userService;
        this.delegationService = delegationService;
        this.welcomeText = "Choose user and delegation to remove it...";
        this.errorText = "Given delegation cannot be removed!";
        this.successText = "Given delegation has been removed!";
        this.message = this.welcomeText;
        this.clearData();
        this.loadUsers();
    }
    RemoveDelegationPanelComponent.prototype.ngOnInit = function () {
    };
    RemoveDelegationPanelComponent.prototype.clearData = function () {
        this.chosenUser = "";
        this.name = "";
        this.lastName = "";
        this.chosenId = "";
        this.chosenDel = "";
        this.description = "";
    };
    RemoveDelegationPanelComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.findAllUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    RemoveDelegationPanelComponent.prototype.loadDelegations = function (email) {
        var _this = this;
        this.delegationService.findAllByEmail(email).subscribe(function (data) {
            _this.delegations = data;
        });
    };
    RemoveDelegationPanelComponent.prototype.delete = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {
            this.delegationService.deleteDelegation(this.chosenId).subscribe(function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.successText; }, 30);
                _this.loadUsers();
                _this.onChangeUser("");
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
    RemoveDelegationPanelComponent.prototype.onChangeUser = function (event) {
        this.clearData();
        this.chosenUser = event;
        if (event == "") {
            this.name = "";
            this.lastName = "";
            this.delegations = null;
        }
        else {
            this.name = event.name;
            this.lastName = event.lastName;
            this.loadDelegations(event.email);
        }
    };
    RemoveDelegationPanelComponent.prototype.onChangeDel = function (event) {
        this.chosenId = event.id;
        if (event == "") {
            this.description = "";
        }
        else {
            this.description = event.description;
        }
    };
    RemoveDelegationPanelComponent.ctorParameters = function () { return [
        { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__["DelegationService"] }
    ]; };
    RemoveDelegationPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-remove-delegation-panel',
            template: __webpack_require__(/*! raw-loader!./remove-delegation-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.html"),
            styles: [__webpack_require__(/*! ./remove-delegation-panel.component.css */ "./src/app/home/admin-tab/remove-delegation-panel/remove-delegation-panel.component.css")]
        })
    ], RemoveDelegationPanelComponent);
    return RemoveDelegationPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n.form-name {\r\n  width: 215px;\r\n  margin-left: 20px;\r\n}\r\n.form-del {\r\n  margin-left: 125px;\r\n  width: 200px;\r\n}\r\n.reg_btn{\r\n  width: 110px;\r\n  margin-left: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvcmVtb3ZlLWRlbGVnLXBhbmVsL3JlbW92ZS1kZWxlZy1wYW5lbC5jb21wb25lbnQuY3NzIiwic3JjL2FwcC9ob21lL2FkbWluLXRhYi9yZW1vdmUtdXNlci1wYW5lbC9yZW1vdmUtdXNlci1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxvRkFBb0Y7QUFFcEY7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0dBQ0csWUFBWTtHQUNaLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osa0JBQWtCO0NBQ3BCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FDL0NBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FDckJBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FkbWluLXRhYi9yZW1vdmUtdXNlci1wYW5lbC9yZW1vdmUtdXNlci1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcclxuQGltcG9ydCB1cmwoJy8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuLmNvbnRhaW5lcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDYxMHB4O1xyXG4gIGhlaWdodDogMzkwcHg7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmZvcm0tc3BhY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybS1zcGFjZTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uZm9ybS1hZGRyZXNzIHtcclxuICB3aWR0aDo1MTVweDtcclxufVxyXG5cclxuLnJvdy1zcGFjZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLnJlZ19idG57XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIHdpZHRoOiAxMTBweDtcclxuICAgbWFyZ2luLWxlZnQ6IDE5MHB4O1xyXG4gfVxyXG5cclxuLnJlZ19idG46aG92ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCIuLi8uLi9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3NcIik7XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDU5MHB4O1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWRlbCB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMTVweDtcclxufVxyXG5cclxuLnJlZ19idG57XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1kZXNjIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCIuLi8uLi9kZWxlZ2F0aW9uLXRhYi9yZW1vdmUtZGVsZWctcGFuZWwvcmVtb3ZlLWRlbGVnLXBhbmVsLmNvbXBvbmVudC5jc3NcIik7XHJcblxyXG4uZm9ybS1uYW1lIHtcclxuICB3aWR0aDogMjE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWRlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnJlZ19idG57XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RemoveUserPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveUserPanelComponent", function() { return RemoveUserPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user-service/user.service */ "./src/app/user-service/user.service.ts");



var RemoveUserPanelComponent = /** @class */ (function () {
    function RemoveUserPanelComponent(userService) {
        this.userService = userService;
        this.welcomeText = "Choose user to remove it...";
        this.errorText = "Given user cannot be made removed!";
        this.successText = "Given user has been removed!";
        this.message = this.welcomeText;
        this.chosenId = "";
        this.chosenUser = "";
        this.loadUsers();
    }
    RemoveUserPanelComponent.prototype.ngOnInit = function () {
    };
    RemoveUserPanelComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.findAllUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    RemoveUserPanelComponent.prototype.delete = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {
            this.userService.delete(this.chosenId).subscribe(function () {
                _this.message = '.';
                setTimeout(function () { return _this.message = _this.successText; }, 30);
                _this.chosenId = "";
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
    RemoveUserPanelComponent.prototype.onChange = function (event) {
        this.chosenId = event.id;
        if (event == "") {
            this.name = "";
            this.lastName = "";
        }
        else {
            this.name = event.name;
            this.lastName = event.lastName;
        }
    };
    RemoveUserPanelComponent.ctorParameters = function () { return [
        { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    RemoveUserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-remove-user-panel',
            template: __webpack_require__(/*! raw-loader!./remove-user-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.html"),
            styles: [__webpack_require__(/*! ./remove-user-panel.component.css */ "./src/app/home/admin-tab/remove-user-panel/remove-user-panel.component.css")]
        })
    ], RemoveUserPanelComponent);
    return RemoveUserPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n.form-del {\r\n  margin-left: 110px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvcmVtb3ZlLWRlbGVnLXBhbmVsL3JlbW92ZS1kZWxlZy1wYW5lbC5jb21wb25lbnQuY3NzIiwic3JjL2FwcC9ob21lL2FkbWluLXRhYi91bmNvbmZpcm1hdGlvbi1yZXF1ZXN0LXBhbmVsL3VuY29uZmlybWF0aW9uLXJlcXVlc3QtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0Qsb0ZBQW9GO0FBRXBGO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtHQUNHLFlBQVk7R0FDWix1QkFBdUI7R0FDdkIsWUFBWTtHQUNaLGtCQUFrQjtDQUNwQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQy9DQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQ3JCQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRtaW4tdGFiL3VuY29uZmlybWF0aW9uLXJlcXVlc3QtcGFuZWwvdW5jb25maXJtYXRpb24tcmVxdWVzdC1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcclxuQGltcG9ydCB1cmwoJy8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuLmNvbnRhaW5lcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDYxMHB4O1xyXG4gIGhlaWdodDogMzkwcHg7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmZvcm0tc3BhY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybS1zcGFjZTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uZm9ybS1hZGRyZXNzIHtcclxuICB3aWR0aDo1MTVweDtcclxufVxyXG5cclxuLnJvdy1zcGFjZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLnJlZ19idG57XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIHdpZHRoOiAxMTBweDtcclxuICAgbWFyZ2luLWxlZnQ6IDE5MHB4O1xyXG4gfVxyXG5cclxuLnJlZ19idG46aG92ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCIuLi8uLi9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3NcIik7XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDU5MHB4O1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWRlbCB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMTVweDtcclxufVxyXG5cclxuLnJlZ19idG57XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1kZXNjIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCIuLi8uLi9kZWxlZ2F0aW9uLXRhYi9yZW1vdmUtZGVsZWctcGFuZWwvcmVtb3ZlLWRlbGVnLXBhbmVsLmNvbXBvbmVudC5jc3NcIik7XHJcblxyXG4uZm9ybS1kZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UnconfirmationRequestPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnconfirmationRequestPanelComponent", function() { return UnconfirmationRequestPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../delegation-service/delegation.service */ "./src/app/delegation-service/delegation.service.ts");



var UnconfirmationRequestPanelComponent = /** @class */ (function () {
    function UnconfirmationRequestPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Choose unconfirmation request to unconfirm delegation...";
        this.errorText = "Given delegation cannot be unconfirmed!";
        this.successText = "Given delegation has been unconfirmed!";
        this.message = this.welcomeText;
        this.chosenId = "";
        this.chosenDel = "";
        this.loadDelegations();
    }
    UnconfirmationRequestPanelComponent.prototype.ngOnInit = function () {
    };
    UnconfirmationRequestPanelComponent.prototype.loadDelegations = function () {
        var _this = this;
        this.delegationService.findRequestedByEmailAndConfirmation(false).subscribe(function (data) {
            _this.delegations = data;
        });
    };
    UnconfirmationRequestPanelComponent.prototype.unconfirm = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {
            this.delegationService.answerRequest(this.chosenId).subscribe(function () {
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
    UnconfirmationRequestPanelComponent.ctorParameters = function () { return [
        { type: _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__["DelegationService"] }
    ]; };
    UnconfirmationRequestPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unconfirmation-request-panel',
            template: __webpack_require__(/*! raw-loader!./unconfirmation-request-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.html"),
            styles: [__webpack_require__(/*! ./unconfirmation-request-panel.component.css */ "./src/app/home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component.css")]
        })
    ], UnconfirmationRequestPanelComponent);
    return UnconfirmationRequestPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n.form-name {\r\n  width: 215px;\r\n  margin-left: 20px;\r\n}\r\n.form-del {\r\n  margin-left: 110px;\r\n  width: 200px;\r\n}\r\n.reg_btn{\r\n  width: 140px;\r\n  margin-left: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvcmVtb3ZlLWRlbGVnLXBhbmVsL3JlbW92ZS1kZWxlZy1wYW5lbC5jb21wb25lbnQuY3NzIiwic3JjL2FwcC9ob21lL2FkbWluLXRhYi91c2VyLWFkbWluLXBhbmVsL3VzZXItYWRtaW4tcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0Qsb0ZBQW9GO0FBRXBGO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtHQUNHLFlBQVk7R0FDWix1QkFBdUI7R0FDdkIsWUFBWTtHQUNaLGtCQUFrQjtDQUNwQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQy9DQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQ3JCQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hZG1pbi10YWIvdXNlci1hZG1pbi1wYW5lbC91c2VyLWFkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bWFucycpO1xyXG5AaW1wb3J0IHVybCgnLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogNjEwcHg7XHJcbiAgaGVpZ2h0OiAzOTBweDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZm9ybS1zcGFjZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNwYWNlMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWFkZHJlc3Mge1xyXG4gIHdpZHRoOjUxNXB4O1xyXG59XHJcblxyXG4ucm93LXNwYWNlIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4ucmVnX2J0bntcclxuICAgY29sb3I6IGJsYWNrO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgd2lkdGg6IDExMHB4O1xyXG4gICBtYXJnaW4tbGVmdDogMTkwcHg7XHJcbiB9XHJcblxyXG4ucmVnX2J0bjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcIi4uLy4uL3Byb2ZpbGUtdGFiL2VkaXQtcHJvZmlsZS1wYW5lbC9lZGl0LXByb2ZpbGUtcGFuZWwuY29tcG9uZW50LmNzc1wiKTtcclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogNTkwcHg7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG5cclxuLmZvcm0tZGVsIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDExNXB4O1xyXG59XHJcblxyXG4ucmVnX2J0bntcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWRlc2Mge1xyXG4gIHdpZHRoOiA1MDBweDtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcIi4uLy4uL2RlbGVnYXRpb24tdGFiL3JlbW92ZS1kZWxlZy1wYW5lbC9yZW1vdmUtZGVsZWctcGFuZWwuY29tcG9uZW50LmNzc1wiKTtcclxuXHJcbi5mb3JtLW5hbWUge1xyXG4gIHdpZHRoOiAyMTVweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmZvcm0tZGVsIHtcclxuICBtYXJnaW4tbGVmdDogMTEwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ucmVnX2J0bntcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserAdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdminPanelComponent", function() { return UserAdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user-service/user.service */ "./src/app/user-service/user.service.ts");



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
    UserAdminPanelComponent.ctorParameters = function () { return [
        { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    UserAdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-admin-panel',
            template: __webpack_require__(/*! raw-loader!./user-admin-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.html"),
            styles: [__webpack_require__(/*! ./user-admin-panel.component.css */ "./src/app/home/admin-tab/user-admin-panel/user-admin-panel.component.css")]
        })
    ], UserAdminPanelComponent);
    return UserAdminPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/add-panel/add-panel.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/home/delegation-tab/add-panel/add-panel.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 710px;\r\n  height: 550px;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 625px;\r\n}\r\n.form-date {\r\n  width: 300px;\r\n}\r\n.form-val {\r\n  width: 137px;\r\n}\r\n.form-val2 {\r\n  width: 170px;\r\n}\r\n.form-space3 {\r\n  margin-left: 80px;\r\n}\r\n.reg_btn{\r\n  width: 100px;\r\n  margin-left: 310px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvYWRkLXBhbmVsL2FkZC1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxvRkFBb0Y7QUFFcEY7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0dBQ0csWUFBWTtHQUNaLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osa0JBQWtCO0NBQ3BCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FDL0NBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvYWRkLXBhbmVsL2FkZC1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcclxuQGltcG9ydCB1cmwoJy8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuLmNvbnRhaW5lcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDYxMHB4O1xyXG4gIGhlaWdodDogMzkwcHg7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmZvcm0tc3BhY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybS1zcGFjZTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uZm9ybS1hZGRyZXNzIHtcclxuICB3aWR0aDo1MTVweDtcclxufVxyXG5cclxuLnJvdy1zcGFjZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLnJlZ19idG57XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIHdpZHRoOiAxMTBweDtcclxuICAgbWFyZ2luLWxlZnQ6IDE5MHB4O1xyXG4gfVxyXG5cclxuLnJlZ19idG46aG92ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCIuLi8uLi9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3NcIik7XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDcxMHB4O1xyXG4gIGhlaWdodDogNTUwcHg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWRlc2Mge1xyXG4gIHdpZHRoOiA2MjVweDtcclxufVxyXG5cclxuLmZvcm0tZGF0ZSB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uZm9ybS12YWwge1xyXG4gIHdpZHRoOiAxMzdweDtcclxufVxyXG5cclxuLmZvcm0tdmFsMiB7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG59XHJcblxyXG4uZm9ybS1zcGFjZTMge1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4ucmVnX2J0bntcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/delegation-tab/add-panel/add-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/delegation-tab/add-panel/add-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPanelComponent", function() { return AddPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../delegation-service/delegation.service */ "./src/app/delegation-service/delegation.service.ts");
/* harmony import */ var _model_delegation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/delegation */ "./src/app/model/delegation.ts");




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
                this.delegation = new _model_delegation__WEBPACK_IMPORTED_MODULE_3__["Delegation"](this.description, this.dateStart.replace(" ", "T"), this.dateStop.replace(" ", "T"), this.travelDiet, this.breakfasts, this.dinners, this.suppers, this.transport.toUpperCase(), this.ticketPrice == "-" ? "0" : this.ticketPrice, this.autoCapacity.toUpperCase(), this.distance == "-" ? "0" : this.distance, this.accPrice, this.othTicketsPrice, this.othOutlayDesc == "-" ? null : this.othOutlayDesc, this.othOutlayPrice);
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
    AddPanelComponent.ctorParameters = function () { return [
        { type: _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__["DelegationService"] }
    ]; };
    AddPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-panel',
            template: __webpack_require__(/*! raw-loader!./add-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/add-panel/add-panel.component.html"),
            styles: [__webpack_require__(/*! ./add-panel.component.css */ "./src/app/home/delegation-tab/add-panel/add-panel.component.css")]
        })
    ], AddPanelComponent);
    return AddPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  background-color: white !important;\r\n  width: 1200px;\r\n  height: 450px;\r\n  overflow: auto;\r\n}\r\n.card thead th {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n.table {\r\n  text-align: center;\r\n}\r\n.btn{\r\n  color: black;\r\n  background-color: white;\r\n  width: 70px\r\n}\r\n.btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvY29uZmlybWVkLWxpc3QtcGFuZWwvY29uZmlybWVkLWxpc3QtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0Qsb0ZBQW9GO0FBRXBGO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtHQUNHLFlBQVk7R0FDWix1QkFBdUI7R0FDdkIsWUFBWTtHQUNaLGtCQUFrQjtDQUNwQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQy9DQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtBQUNSO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkI7QUFDRjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvY29uZmlybWVkLWxpc3QtcGFuZWwvY29uZmlybWVkLWxpc3QtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XHJcbkBpbXBvcnQgdXJsKCcvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA2MTBweDtcclxuICBoZWlnaHQ6IDM5MHB4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNwYWNlIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmZvcm0tc3BhY2UyIHtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmZvcm0tYWRkcmVzcyB7XHJcbiAgd2lkdGg6NTE1cHg7XHJcbn1cclxuXHJcbi5yb3ctc3BhY2Uge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWdfYnRue1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICB3aWR0aDogMTEwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxOTBweDtcclxuIH1cclxuXHJcbi5yZWdfYnRuOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiLi4vLi4vcHJvZmlsZS10YWIvZWRpdC1wcm9maWxlLXBhbmVsL2VkaXQtcHJvZmlsZS1wYW5lbC5jb21wb25lbnQuY3NzXCIpO1xyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEyMDBweDtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZCB0aGVhZCB0aCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRue1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNzBweFxyXG59XHJcblxyXG4uYnRuOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ConfirmedListPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedListPanelComponent", function() { return ConfirmedListPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../delegation-service/delegation.service */ "./src/app/delegation-service/delegation.service.ts");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth-service/auth.service */ "./src/app/auth-service/auth.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);





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
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__();
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
    ConfirmedListPanelComponent.ctorParameters = function () { return [
        { type: _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__["DelegationService"] },
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    ConfirmedListPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmed-list-panel',
            template: __webpack_require__(/*! raw-loader!./confirmed-list-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.html"),
            styles: [__webpack_require__(/*! ./confirmed-list-panel.component.css */ "./src/app/home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component.css")]
        })
    ], ConfirmedListPanelComponent);
    return ConfirmedListPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 710px;\r\n  height: 550px;\r\n}\r\n.message2 {\r\n  margin-top: 15px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 170px;\r\n}\r\n.reg_btn{\r\n  width: 100px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 625px;\r\n}\r\n.form-date {\r\n  width: 300px;\r\n}\r\n.form-val {\r\n  width: 137px;\r\n}\r\n.form-val2 {\r\n  width: 170px;\r\n}\r\n.form-space3 {\r\n  margin-left: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvZWRpdC1kZWxlZy1wYW5lbC9lZGl0LWRlbGVnLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEO0FBQzdELG9GQUFvRjtBQUVwRjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLCtDQUErQztBQUNqRDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7R0FDRyxZQUFZO0dBQ1osdUJBQXVCO0dBQ3ZCLFlBQVk7R0FDWixrQkFBa0I7Q0FDcEI7QUFFRDtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUMvQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9kZWxlZ2F0aW9uLXRhYi9lZGl0LWRlbGVnLXBhbmVsL2VkaXQtZGVsZWctcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XHJcbkBpbXBvcnQgdXJsKCcvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA2MTBweDtcclxuICBoZWlnaHQ6IDM5MHB4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNwYWNlIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmZvcm0tc3BhY2UyIHtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmZvcm0tYWRkcmVzcyB7XHJcbiAgd2lkdGg6NTE1cHg7XHJcbn1cclxuXHJcbi5yb3ctc3BhY2Uge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWdfYnRue1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICB3aWR0aDogMTEwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxOTBweDtcclxuIH1cclxuXHJcbi5yZWdfYnRuOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiLi4vLi4vcHJvZmlsZS10YWIvZWRpdC1wcm9maWxlLXBhbmVsL2VkaXQtcHJvZmlsZS1wYW5lbC5jb21wb25lbnQuY3NzXCIpO1xyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA3MTBweDtcclxuICBoZWlnaHQ6IDU1MHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZTIge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWRlbCB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNzBweDtcclxufVxyXG5cclxuLnJlZ19idG57XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1kZXNjIHtcclxuICB3aWR0aDogNjI1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWRhdGUge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmZvcm0tdmFsIHtcclxuICB3aWR0aDogMTM3cHg7XHJcbn1cclxuXHJcbi5mb3JtLXZhbDIge1xyXG4gIHdpZHRoOiAxNzBweDtcclxufVxyXG5cclxuLmZvcm0tc3BhY2UzIHtcclxuICBtYXJnaW4tbGVmdDogODBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditDelegPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDelegPanelComponent", function() { return EditDelegPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_delegation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/delegation */ "./src/app/model/delegation.ts");
/* harmony import */ var _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../delegation-service/delegation.service */ "./src/app/delegation-service/delegation.service.ts");




var EditDelegPanelComponent = /** @class */ (function () {
    function EditDelegPanelComponent(delegationService) {
        this.delegationService = delegationService;
        this.welcomeText = "Choose delegation and type all data to edit it...";
        this.dateFormatText = "Given date format is not correct!";
        this.dateCompareText = "Stop date must be after start date!";
        this.errorText = "Given data are not correct!";
        this.successText = "Given delegation has been saved!";
        this.message = this.welcomeText;
        this.clearData();
        this.loadDelegations();
    }
    EditDelegPanelComponent.prototype.ngOnInit = function () {
    };
    EditDelegPanelComponent.prototype.clearData = function () {
        this.chosenId = "";
        this.chosenDel = "";
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
        this.disableTicket = false;
        this.disableAuto = false;
    };
    EditDelegPanelComponent.prototype.loadDelegations = function () {
        var _this = this;
        this.delegationService.findFutureByEmail().subscribe(function (data) {
            _this.delegations = data;
        });
    };
    EditDelegPanelComponent.prototype.edit = function () {
        var _this = this;
        if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined
            && this.description != null && this.description != ""
            && this.dateStart != null && this.dateStop !== ""
            && this.travelDiet != null && this.travelDiet !== ""
            && this.breakfasts != null && this.breakfasts !== ""
            && this.dinners != null && this.dinners !== ""
            && this.suppers != null && this.suppers !== ""
            && this.transport != null && this.transport != "" && this.transport != undefined
            && this.ticketPrice != null && this.ticketPrice !== ""
            && this.autoCapacity != null && this.autoCapacity != "" && this.autoCapacity != undefined
            && this.distance != null && this.distance !== ""
            && this.accPrice != null && this.accPrice !== ""
            && this.othTicketsPrice != null && this.othTicketsPrice !== ""
            && this.othOutlayDesc != null && this.othOutlayDesc != ""
            && this.othOutlayPrice != null && this.othOutlayPrice !== "") {
            var regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
            if (regex.test(this.dateStart) && regex.test(this.dateStop)) {
                this.delegation = new _model_delegation__WEBPACK_IMPORTED_MODULE_2__["Delegation"](this.description, this.dateStart.replace(" ", "T"), this.dateStop.replace(" ", "T"), this.travelDiet, this.breakfasts, this.dinners, this.suppers, this.transport.toUpperCase(), this.ticketPrice == "-" ? "0" : this.ticketPrice, this.autoCapacity.toUpperCase(), this.distance == "-" ? "0" : this.distance, this.accPrice, this.othTicketsPrice, this.othOutlayDesc == "-" ? null : this.othOutlayDesc, this.othOutlayPrice);
                this.delegationService.editDelegation(this.chosenId, this.delegation).subscribe(function () {
                    _this.message = '.';
                    setTimeout(function () { return _this.message = _this.successText; }, 30);
                    _this.loadDelegations();
                    _this.onChangeDel("");
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
        if (event == "") {
            this.clearData();
        }
        else {
            this.chosenId = event.id;
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
            this.othOutlayDesc = event.otherOutlayDesc == null ? "-" : event.otherOutlayDesc;
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
    EditDelegPanelComponent.ctorParameters = function () { return [
        { type: _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_3__["DelegationService"] }
    ]; };
    EditDelegPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-deleg-panel',
            template: __webpack_require__(/*! raw-loader!./edit-deleg-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.html"),
            styles: [__webpack_require__(/*! ./edit-deleg-panel.component.css */ "./src/app/home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component.css")]
        })
    ], EditDelegPanelComponent);
    return EditDelegPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvcmVtb3ZlLWRlbGVnLXBhbmVsL3JlbW92ZS1kZWxlZy1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxvRkFBb0Y7QUFFcEY7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0dBQ0csWUFBWTtHQUNaLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osa0JBQWtCO0NBQ3BCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FDL0NBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9kZWxlZ2F0aW9uLXRhYi9yZW1vdmUtZGVsZWctcGFuZWwvcmVtb3ZlLWRlbGVnLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bWFucycpO1xyXG5AaW1wb3J0IHVybCgnLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogNjEwcHg7XHJcbiAgaGVpZ2h0OiAzOTBweDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZm9ybS1zcGFjZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNwYWNlMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWFkZHJlc3Mge1xyXG4gIHdpZHRoOjUxNXB4O1xyXG59XHJcblxyXG4ucm93LXNwYWNlIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4ucmVnX2J0bntcclxuICAgY29sb3I6IGJsYWNrO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgd2lkdGg6IDExMHB4O1xyXG4gICBtYXJnaW4tbGVmdDogMTkwcHg7XHJcbiB9XHJcblxyXG4ucmVnX2J0bjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcIi4uLy4uL3Byb2ZpbGUtdGFiL2VkaXQtcHJvZmlsZS1wYW5lbC9lZGl0LXByb2ZpbGUtcGFuZWwuY29tcG9uZW50LmNzc1wiKTtcclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogNTkwcHg7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG5cclxuLmZvcm0tZGVsIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDExNXB4O1xyXG59XHJcblxyXG4ucmVnX2J0bntcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWRlc2Mge1xyXG4gIHdpZHRoOiA1MDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RemoveDelegPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDelegPanelComponent", function() { return RemoveDelegPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../delegation-service/delegation.service */ "./src/app/delegation-service/delegation.service.ts");



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
    RemoveDelegPanelComponent.ctorParameters = function () { return [
        { type: _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__["DelegationService"] }
    ]; };
    RemoveDelegPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-remove-deleg-panel',
            template: __webpack_require__(/*! raw-loader!./remove-deleg-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.html"),
            styles: [__webpack_require__(/*! ./remove-deleg-panel.component.css */ "./src/app/home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component.css")]
        })
    ], RemoveDelegPanelComponent);
    return RemoveDelegPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvcmVtb3ZlLWRlbGVnLXBhbmVsL3JlbW92ZS1kZWxlZy1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxvRkFBb0Y7QUFFcEY7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0dBQ0csWUFBWTtHQUNaLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osa0JBQWtCO0NBQ3BCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FDL0NBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9kZWxlZ2F0aW9uLXRhYi9yZXF1ZXN0LWNvbmZpcm1hdGlvbi1wYW5lbC9yZXF1ZXN0LWNvbmZpcm1hdGlvbi1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcclxuQGltcG9ydCB1cmwoJy8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuLmNvbnRhaW5lcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDYxMHB4O1xyXG4gIGhlaWdodDogMzkwcHg7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmZvcm0tc3BhY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybS1zcGFjZTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uZm9ybS1hZGRyZXNzIHtcclxuICB3aWR0aDo1MTVweDtcclxufVxyXG5cclxuLnJvdy1zcGFjZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLnJlZ19idG57XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIHdpZHRoOiAxMTBweDtcclxuICAgbWFyZ2luLWxlZnQ6IDE5MHB4O1xyXG4gfVxyXG5cclxuLnJlZ19idG46aG92ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCIuLi8uLi9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3NcIik7XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDU5MHB4O1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWRlbCB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMTVweDtcclxufVxyXG5cclxuLnJlZ19idG57XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1kZXNjIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: RequestConfirmationPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestConfirmationPanelComponent", function() { return RequestConfirmationPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../delegation-service/delegation.service */ "./src/app/delegation-service/delegation.service.ts");



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
    RequestConfirmationPanelComponent.ctorParameters = function () { return [
        { type: _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__["DelegationService"] }
    ]; };
    RequestConfirmationPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-confirmation-panel',
            template: __webpack_require__(/*! raw-loader!./request-confirmation-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.html"),
            styles: [__webpack_require__(/*! ./request-confirmation-panel.component.css */ "./src/app/home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component.css")]
        })
    ], RequestConfirmationPanelComponent);
    return RequestConfirmationPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 590px;\r\n  height: 240px;\r\n}\r\n.form-del {\r\n  width: 220px;\r\n  margin-left: 115px;\r\n}\r\n.reg_btn{\r\n  width: 120px;\r\n  margin-left: 0;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.form-desc {\r\n  width: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvcmVtb3ZlLWRlbGVnLXBhbmVsL3JlbW92ZS1kZWxlZy1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxvRkFBb0Y7QUFFcEY7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0dBQ0csWUFBWTtHQUNaLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osa0JBQWtCO0NBQ3BCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FDL0NBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9kZWxlZ2F0aW9uLXRhYi9yZXF1ZXN0LXVuY29uZmlybWF0aW9uLXBhbmVsL3JlcXVlc3QtdW5jb25maXJtYXRpb24tcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XHJcbkBpbXBvcnQgdXJsKCcvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA2MTBweDtcclxuICBoZWlnaHQ6IDM5MHB4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNwYWNlIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmZvcm0tc3BhY2UyIHtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmZvcm0tYWRkcmVzcyB7XHJcbiAgd2lkdGg6NTE1cHg7XHJcbn1cclxuXHJcbi5yb3ctc3BhY2Uge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWdfYnRue1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICB3aWR0aDogMTEwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxOTBweDtcclxuIH1cclxuXHJcbi5yZWdfYnRuOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiLi4vLi4vcHJvZmlsZS10YWIvZWRpdC1wcm9maWxlLXBhbmVsL2VkaXQtcHJvZmlsZS1wYW5lbC5jb21wb25lbnQuY3NzXCIpO1xyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA1OTBweDtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG59XHJcblxyXG4uZm9ybS1kZWwge1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBtYXJnaW4tbGVmdDogMTE1cHg7XHJcbn1cclxuXHJcbi5yZWdfYnRue1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tZGVzYyB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: RequestUnconfirmationPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestUnconfirmationPanelComponent", function() { return RequestUnconfirmationPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../delegation-service/delegation.service */ "./src/app/delegation-service/delegation.service.ts");



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
    RequestUnconfirmationPanelComponent.ctorParameters = function () { return [
        { type: _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__["DelegationService"] }
    ]; };
    RequestUnconfirmationPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-unconfirmation-panel',
            template: __webpack_require__(/*! raw-loader!./request-unconfirmation-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.html"),
            styles: [__webpack_require__(/*! ./request-unconfirmation-panel.component.css */ "./src/app/home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component.css")]
        })
    ], RequestUnconfirmationPanelComponent);
    return RequestUnconfirmationPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  background-color: white !important;\r\n  width: 1200px;\r\n  height: 450px;\r\n  overflow: auto;\r\n}\r\n.card thead th {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n.table {\r\n  text-align: center;\r\n}\r\n.btn{\r\n  color: black;\r\n  background-color: white;\r\n  width: 70px\r\n}\r\n.btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvY29uZmlybWVkLWxpc3QtcGFuZWwvY29uZmlybWVkLWxpc3QtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0Qsb0ZBQW9GO0FBRXBGO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtHQUNHLFlBQVk7R0FDWix1QkFBdUI7R0FDdkIsWUFBWTtHQUNaLGtCQUFrQjtDQUNwQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQy9DQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtBQUNSO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkI7QUFDRjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGVsZWdhdGlvbi10YWIvdW5jb25maXJtZWQtbGlzdC1wYW5lbC91bmNvbmZpcm1lZC1saXN0LXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bWFucycpO1xyXG5AaW1wb3J0IHVybCgnLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogNjEwcHg7XHJcbiAgaGVpZ2h0OiAzOTBweDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZm9ybS1zcGFjZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNwYWNlMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWFkZHJlc3Mge1xyXG4gIHdpZHRoOjUxNXB4O1xyXG59XHJcblxyXG4ucm93LXNwYWNlIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4ucmVnX2J0bntcclxuICAgY29sb3I6IGJsYWNrO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgd2lkdGg6IDExMHB4O1xyXG4gICBtYXJnaW4tbGVmdDogMTkwcHg7XHJcbiB9XHJcblxyXG4ucmVnX2J0bjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcIi4uLy4uL3Byb2ZpbGUtdGFiL2VkaXQtcHJvZmlsZS1wYW5lbC9lZGl0LXByb2ZpbGUtcGFuZWwuY29tcG9uZW50LmNzc1wiKTtcclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMjAwcHg7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNhcmQgdGhlYWQgdGgge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bntcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDcwcHhcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UnconfirmedListPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnconfirmedListPanelComponent", function() { return UnconfirmedListPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../delegation-service/delegation.service */ "./src/app/delegation-service/delegation.service.ts");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth-service/auth.service */ "./src/app/auth-service/auth.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);





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
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__();
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
    UnconfirmedListPanelComponent.ctorParameters = function () { return [
        { type: _delegation_service_delegation_service__WEBPACK_IMPORTED_MODULE_2__["DelegationService"] },
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    UnconfirmedListPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unconfirmed-list-panel',
            template: __webpack_require__(/*! raw-loader!./unconfirmed-list-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.html"),
            styles: [__webpack_require__(/*! ./unconfirmed-list-panel.component.css */ "./src/app/home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component.css")]
        })
    ], UnconfirmedListPanelComponent);
    return UnconfirmedListPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/home-panel/home-panel.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/home-panel/home-panel.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 700px;\r\n  height: 430px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.icon {\r\n  font-size: 100px;\r\n  margin-left: 50px;\r\n  margin-top: 10px;\r\n  color: white;\r\n}\r\nimg {\r\n  border-radius: 50%;\r\n  margin-left: 35px;\r\n  margin-top: 40px;\r\n  margin-bottom: 20px;\r\n  border: 3px solid white;\r\n}\r\n.icon2 {\r\n  font-size: 80px;\r\n  margin-left: 55px;\r\n  margin-top: 0;\r\n  color: white;\r\n}\r\n.size-big {\r\n  font-size: 30px;\r\n}\r\n.size-medium {\r\n  font-size: 20px;\r\n}\r\n.size-small {\r\n  font-size: 15px;\r\n}\r\n.space-col {\r\n  width: 170px;\r\n}\r\n.space-row {\r\n  height: 50px;\r\n}\r\n.space-row2 {\r\n  height: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLXBhbmVsL2hvbWUtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0Qsb0ZBQW9GO0FBRXBGO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1wYW5lbC9ob21lLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bWFucycpO1xyXG5AaW1wb3J0IHVybCgnLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiA0MzBweDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMzVweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5pY29uMiB7XHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2l6ZS1iaWcge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnNpemUtbWVkaXVtIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zaXplLXNtYWxsIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5zcGFjZS1jb2wge1xyXG4gIHdpZHRoOiAxNzBweDtcclxufVxyXG5cclxuLnNwYWNlLXJvdyB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3BhY2Utcm93MiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home-panel/home-panel.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/home-panel/home-panel.component.ts ***!
  \*********************************************************/
/*! exports provided: HomePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePanelComponent", function() { return HomePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user-service/user.service */ "./src/app/user-service/user.service.ts");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth-service/auth.service */ "./src/app/auth-service/auth.service.ts");




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
    HomePanelComponent.ctorParameters = function () { return [
        { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    HomePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-panel',
            template: __webpack_require__(/*! raw-loader!./home-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home-panel/home-panel.component.html"),
            styles: [__webpack_require__(/*! ./home-panel.component.css */ "./src/app/home/home-panel/home-panel.component.css")]
        })
    ], HomePanelComponent);
    return HomePanelComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('https://fonts.googleapis.com/css?family=Raleway');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\nhtml,body{\r\n  background-image: url('mountain.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  height: 100vh;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.title {\r\n  font-family: 'Raleway', serif;\r\n  font-size: 22px;\r\n  text-shadow: 4px 4px 4px black;\r\n}\r\n.navbar-custom {\r\n  font-size: 15px;\r\n}\r\n.navbar-center {\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translatex(-50%);\r\n}\r\n.tab span:hover {\r\n  color: grey;\r\n  cursor: pointer;\r\n}\r\n.footer-custom {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 60px;\r\n  color: black;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEO0FBQzdELDhEQUE4RDtBQUM5RCxvRkFBb0Y7QUFFcEY7RUFDRSxxQ0FBa0Q7RUFDbEQsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5Jyk7XHJcbkBpbXBvcnQgdXJsKCcvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbmh0bWwsYm9keXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9tb3VudGFpbi5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggYmxhY2s7XHJcbn1cclxuXHJcbi5uYXZiYXItY3VzdG9tIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItY2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtNTAlKTtcclxufVxyXG5cclxuLnRhYiBzcGFuOmhvdmVyIHtcclxuICBjb2xvcjogZ3JleTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXItY3VzdG9tIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-service/auth.service */ "./src/app/auth-service/auth.service.ts");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-service/user.service */ "./src/app/user-service/user.service.ts");





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
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n.card {\r\n  width: 430px;\r\n  height: 370px;\r\n}\r\n.form-space {\r\n  margin-left: 105px;\r\n}\r\n.row-space {\r\n  margin-left: 105px;\r\n}\r\n.reg_btn {\r\n  margin-left: 165px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2hvbWUvcHJvZmlsZS10YWIvY2hhbmdlLXB3ZC1wYW5lbC9jaGFuZ2UtcHdkLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEO0FBQzdELG9GQUFvRjtBQUVwRjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLCtDQUErQztBQUNqRDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7R0FDRyxZQUFZO0dBQ1osdUJBQXVCO0dBQ3ZCLFlBQVk7R0FDWixrQkFBa0I7Q0FDcEI7QUFFRDtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUMvQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9jaGFuZ2UtcHdkLXBhbmVsL2NoYW5nZS1wd2QtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XHJcbkBpbXBvcnQgdXJsKCcvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA2MTBweDtcclxuICBoZWlnaHQ6IDM5MHB4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNwYWNlIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmZvcm0tc3BhY2UyIHtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmZvcm0tYWRkcmVzcyB7XHJcbiAgd2lkdGg6NTE1cHg7XHJcbn1cclxuXHJcbi5yb3ctc3BhY2Uge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWdfYnRue1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICB3aWR0aDogMTEwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxOTBweDtcclxuIH1cclxuXHJcbi5yZWdfYnRuOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiLi4vZWRpdC1wcm9maWxlLXBhbmVsL2VkaXQtcHJvZmlsZS1wYW5lbC5jb21wb25lbnQuY3NzXCIpO1xyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA0MzBweDtcclxuICBoZWlnaHQ6IDM3MHB4O1xyXG59XHJcblxyXG4uZm9ybS1zcGFjZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwNXB4O1xyXG59XHJcblxyXG4ucm93LXNwYWNlIHtcclxuICBtYXJnaW4tbGVmdDogMTA1cHg7XHJcbn1cclxuXHJcbi5yZWdfYnRuIHtcclxuICBtYXJnaW4tbGVmdDogMTY1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChangePwdPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePwdPanelComponent", function() { return ChangePwdPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user-service/user.service */ "./src/app/user-service/user.service.ts");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth-service/auth.service */ "./src/app/auth-service/auth.service.ts");




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
    ChangePwdPanelComponent.ctorParameters = function () { return [
        { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    ChangePwdPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-pwd-panel',
            template: __webpack_require__(/*! raw-loader!./change-pwd-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.html"),
            styles: [__webpack_require__(/*! ./change-pwd-panel.component.css */ "./src/app/home/profile-tab/change-pwd-panel/change-pwd-panel.component.css")]
        })
    ], ChangePwdPanelComponent);
    return ChangePwdPanelComponent;
}());



/***/ }),

/***/ "./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.container{\r\n  color: white;\r\n  height: 100vh;\r\n  align-content: center;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.card {\r\n  width: 610px;\r\n  height: 390px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0, 0, 0, 0.6) !important;\r\n}\r\n.message {\r\n  margin-top: 30px;\r\n}\r\n.form-space {\r\n  margin-left: 50px;\r\n}\r\n.form-space2 {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.row-space {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.reg_btn{\r\n   color: black;\r\n   background-color: white;\r\n   width: 110px;\r\n   margin-left: 190px;\r\n }\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlLXRhYi9lZGl0LXByb2ZpbGUtcGFuZWwvZWRpdC1wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEO0FBQzdELG9GQUFvRjtBQUVwRjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLCtDQUErQztBQUNqRDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7R0FDRyxZQUFZO0dBQ1osdUJBQXVCO0dBQ3ZCLFlBQVk7R0FDWixrQkFBa0I7Q0FDcEI7QUFFRDtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2ZpbGUtdGFiL2VkaXQtcHJvZmlsZS1wYW5lbC9lZGl0LXByb2ZpbGUtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XHJcbkBpbXBvcnQgdXJsKCcvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA2MTBweDtcclxuICBoZWlnaHQ6IDM5MHB4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNwYWNlIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmZvcm0tc3BhY2UyIHtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmZvcm0tYWRkcmVzcyB7XHJcbiAgd2lkdGg6NTE1cHg7XHJcbn1cclxuXHJcbi5yb3ctc3BhY2Uge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWdfYnRue1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICB3aWR0aDogMTEwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxOTBweDtcclxuIH1cclxuXHJcbi5yZWdfYnRuOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EditProfilePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePanelComponent", function() { return EditProfilePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user-service/user.service */ "./src/app/user-service/user.service.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/user */ "./src/app/model/user.ts");




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
            this.user = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"](this.name, this.lastName, "", "", this.companyName, this.companyAddress, this.companyNip);
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
    EditProfilePanelComponent.ctorParameters = function () { return [
        { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    EditProfilePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile-panel',
            template: __webpack_require__(/*! raw-loader!./edit-profile-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile-panel.component.css */ "./src/app/home/profile-tab/edit-profile-panel/edit-profile-panel.component.css")]
        })
    ], EditProfilePanelComponent);
    return EditProfilePanelComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\nhtml,body{\r\n  background-image: url('space.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  height: 100vh;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.container{\r\n  height: 100%;\r\n  align-content: center;\r\n}\r\n.card{\r\n  width: 350px;\r\n  height: 370px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0,0,0,0.6) !important;\r\n}\r\n.card-header h3{\r\n  color: white;\r\n}\r\n.social_icon{\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -30px;\r\n}\r\n.social_icon span{\r\n  font-size: 60px;\r\n  margin-left: 10px;\r\n  color: #A9D0F5;\r\n}\r\n.social_icon span:hover{\r\n  color: #FFFFFF;\r\n  cursor: pointer;\r\n}\r\n.login_btn{\r\n  color: black;\r\n  background-color: #81BEF7;\r\n  width: 150px;\r\n}\r\n.login_btn:hover{\r\n  color: white;\r\n  background-color: #0539BC;\r\n}\r\n.links{\r\n  color: white;\r\n}\r\n.links a{\r\n  margin-left: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0Qsb0ZBQW9GO0FBRXBGO0VBQ0Usa0NBQStDO0VBQy9DLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5QztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XHJcbkBpbXBvcnQgdXJsKCcvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbmh0bWwsYm9keXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zcGFjZS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMzcwcHg7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaDN7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc29jaWFsX2ljb257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRvcDogLTMwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWxfaWNvbiBzcGFue1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBjb2xvcjogI0E5RDBGNTtcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHNwYW46aG92ZXJ7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9naW5fYnRue1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFCRUY3O1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmxvZ2luX2J0bjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MzlCQztcclxufVxyXG5cclxuLmxpbmtze1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpbmtzIGF7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-service/auth.service */ "./src/app/auth-service/auth.service.ts");
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-social-login */ "./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_social_login__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-service/user.service */ "./src/app/user-service/user.service.ts");






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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(service == "google")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.socialAuthService.signIn(ng4_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID).then(function (user) {
                                _this.socialUser = user;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(service == "facebook")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.socialAuthService.signIn(ng4_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID).then(function (user) {
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
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: ng4_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/delegation.ts":
/*!*************************************!*\
  !*** ./src/app/model/delegation.ts ***!
  \*************************************/
/*! exports provided: Delegation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delegation", function() { return Delegation; });
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
    Delegation.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Delegation;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
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
    User.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return User;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Numans');\r\n@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\nhtml,body{\r\n  background-image: url('space.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  height: 100vh;\r\n  font-family: 'Numans', sans-serif;\r\n}\r\n.container{\r\n  height: 100%;\r\n  align-content: center;\r\n}\r\n.card{\r\n  width: 600px;\r\n  height: 510px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background-color: rgba(0,0,0,0.6) !important;\r\n}\r\n.card-header h3{\r\n  color: white;\r\n  text-align: center;\r\n}\r\n.form-space {\r\n  margin-left: 25px;\r\n}\r\n.form-address {\r\n  width:515px;\r\n}\r\n.reg_btn{\r\n  color: black;\r\n  background-color: #81BEF7;\r\n  width: 150px;\r\n}\r\n.reg_btn:hover{\r\n  color: white;\r\n  background-color: #0539BC;\r\n}\r\n.links{\r\n  color: white;\r\n}\r\n.links a{\r\n  margin-left: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0Qsb0ZBQW9GO0FBRXBGO0VBQ0Usa0NBQStDO0VBQy9DLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5QztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bWFucycpO1xyXG5AaW1wb3J0IHVybCgnLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcblxyXG5odG1sLGJvZHl7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc3BhY2UuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDUxMHB4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIGgze1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLXNwYWNlIHtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmZvcm0tYWRkcmVzcyB7XHJcbiAgd2lkdGg6NTE1cHg7XHJcbn1cclxuXHJcbi5yZWdfYnRue1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFCRUY3O1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLnJlZ19idG46aG92ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTM5QkM7XHJcbn1cclxuXHJcbi5saW5rc3tcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rcyBhe1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service/user.service */ "./src/app/user-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





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
            this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"](this.firstName, this.surname, this.email, this.password, this.companyName, this.companyAddress, this.companyNip);
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
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user-service/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/user-service/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-service/auth.service */ "./src/app/auth-service/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var UserService = /** @class */ (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.USER_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mainUrl + '/api/user';
        this.FIND_BY_EMAIL_URL = this.USER_URL + '/byEmail';
        this.FIND_ALL_URL = this.USER_URL + '/admin/allByRole';
        this.FIND_ALL_NOT_ADMINS_URL = this.USER_URL + '/admin/allNotAdmins';
        this.MAKE_ADMIN_URL = this.USER_URL + '/admin/makeAdmin';
        this.CHECK_EMAIL_URL = this.USER_URL + '/exist';
        this.CHANGE_PWD_URL = this.USER_URL + '/change';
        this.ADD_USER_URL = this.USER_URL + '/add';
        this.EDIT_USER_URL = this.USER_URL + '/edit';
        this.DELETE_USER_URL = this.USER_URL + '/admin/delete';
    }
    UserService.prototype.findAllUsers = function () {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("name", "USER");
        return this.http.get(this.FIND_ALL_URL, { headers: this.headers, params: params });
    };
    UserService.prototype.findAllNotAdmins = function () {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        return this.http.get(this.FIND_ALL_NOT_ADMINS_URL, { headers: this.headers });
    };
    UserService.prototype.makeAdmin = function (email) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        return this.http.put(this.MAKE_ADMIN_URL, email, { headers: this.headers });
    };
    UserService.prototype.save = function (user) {
        return this.http.post(this.ADD_USER_URL, user);
    };
    UserService.prototype.checkEmail = function (email) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", email);
        return this.http.get(this.CHECK_EMAIL_URL, { params: params });
    };
    UserService.prototype.findByEmail = function () {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", email.toString());
        return this.http.get(this.FIND_BY_EMAIL_URL, { headers: this.headers, params: params });
    };
    UserService.prototype.editUser = function (user) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", email.toString());
        return this.http.put(this.EDIT_USER_URL, user, { headers: this.headers, params: params });
    };
    UserService.prototype.changePwd = function (password) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var email = this.authService.getEmailLogged();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", email.toString());
        return this.http.put(this.CHANGE_PWD_URL, password, { headers: this.headers, params: params });
    };
    UserService.prototype.delete = function (id) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getBasicAuthToken()
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id);
        return this.http.delete(this.DELETE_USER_URL, { headers: this.headers, params: params });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    mainUrl: "https://betlewski.herokuapp.com/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error'; // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\szymo\intellij-workspace\PSS-project\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map