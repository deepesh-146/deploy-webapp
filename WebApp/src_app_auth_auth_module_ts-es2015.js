"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 50287:
/*!************************************************************!*\
  !*** ./node_modules/ng-otp-input/fesm2015/ng-otp-input.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgOtpInputComponent": function() { return /* binding */ NgOtpInputComponent; },
/* harmony export */   "NgOtpInputConfig": function() { return /* binding */ Config; },
/* harmony export */   "NgOtpInputModule": function() { return /* binding */ NgOtpInputModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);







function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function NgOtpInputComponent_div_0_input_1_Template_input_paste_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r5.handlePaste($event);
    })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const i_r3 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r7.onKeyUp($event, i_r3);
    })("input", function NgOtpInputComponent_div_0_input_1_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r8.onInput($event);
    })("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const i_r3 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r9.onKeyDown($event, i_r3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
  }
}

function NgOtpInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 2, 10, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ng-otp-input-wrapper wrapper ", ctx_r0.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
  }
}

class KeyboardUtil {
  static ifBackspaceOrDelete(event) {
    return this.ifKey(event, 'Backspace;Delete;Del');
  }

  static ifRightArrow(event) {
    return this.ifKey(event, 'ArrowRight;Right');
  }

  static ifLeftArrow(event) {
    return this.ifKey(event, 'ArrowLeft;Left');
  }

  static ifSpacebar(event) {
    return this.ifKey(event, 'Spacebar; '); //don't remove the space after ; as this will check for space key
  }

  static ifKey(event, keys) {
    let keysToCheck = keys.split(';');
    return keysToCheck.some(k => k === event.key);
  }

}

class KeysPipe {
  transform(value) {
    return Object.keys(value);
  }

}
/** @nocollapse */


KeysPipe.ɵfac = function KeysPipe_Factory(t) {
  return new (t || KeysPipe)();
};
/** @nocollapse */


KeysPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "keys",
  type: KeysPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'keys'
    }]
  }], null, null);
})();

class NgOtpInputComponent {
  constructor(keysPipe) {
    this.keysPipe = keysPipe;
    this.config = {
      length: 4
    }; // tslint:disable-next-line: no-output-on-prefix

    this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.inputControls = new Array(this.config.length);
    this.componentKey = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
  }

  get inputType() {
    var _a, _b;

    return ((_a = this.config) === null || _a === void 0 ? void 0 : _a.isPasswordInput) ? 'password' : ((_b = this.config) === null || _b === void 0 ? void 0 : _b.allowNumbersOnly) ? 'tel' : 'text';
  }

  ngOnInit() {
    this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});

    for (let index = 0; index < this.config.length; index++) {
      this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl());
    }

    this.otpForm.valueChanges.subscribe(v => {
      this.keysPipe.transform(this.otpForm.controls).forEach(k => {
        var val = this.otpForm.controls[k].value;

        if (val && val.length > 1) {
          if (val.length >= this.config.length) {
            this.setValue(val);
          } else {
            this.rebuildValue();
          }
        }
      });
    });
  }

  ngAfterViewInit() {
    if (!this.config.disableAutoFocus) {
      const containerItem = document.getElementById(`c_${this.componentKey}`);

      if (containerItem) {
        const ele = containerItem.getElementsByClassName('otp-input')[0];

        if (ele && ele.focus) {
          ele.focus();
        }
      }
    }
  }

  getControlName(idx) {
    return `ctrl_${idx}`;
  }

  onKeyDown($event, inputIdx) {
    if (KeyboardUtil.ifSpacebar($event)) {
      $event.preventDefault();
      return false;
    }
  }

  onInput($event) {
    let newVal = this.currentVal ? `${this.currentVal}${$event.target.value}` : $event.target.value;

    if (this.config.allowNumbersOnly && !this.validateNumber(newVal)) {
      $event.target.value = '';
      $event.stopPropagation();
      $event.preventDefault();
      return;
    }
  }

  onKeyUp($event, inputIdx) {
    const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
    const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);

    if (KeyboardUtil.ifRightArrow($event)) {
      $event.preventDefault();
      this.setSelected(nextInputId);
      return;
    }

    if (KeyboardUtil.ifLeftArrow($event)) {
      $event.preventDefault();
      this.setSelected(prevInputId);
      return;
    }

    if (KeyboardUtil.ifBackspaceOrDelete($event) && !$event.target.value) {
      this.setSelected(prevInputId);
      this.rebuildValue();
      return;
    }

    if (!$event.target.value) {
      return;
    }

    if (this.ifValidKeyCode($event)) {
      this.setSelected(nextInputId);
    }

    this.rebuildValue();
  }

  validateNumber(val) {
    return val && /^\d*\.?\d*$/.test(val);
  }

  appendKey(id) {
    return `${id}_${this.componentKey}`;
  }

  setSelected(eleId) {
    this.focusTo(eleId);
    const ele = document.getElementById(eleId);

    if (ele && ele.setSelectionRange) {
      setTimeout(() => {
        ele.setSelectionRange(0, 1);
      }, 0);
    }
  }

  ifValidKeyCode(event) {
    const inp = event.key;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile || /[a-zA-Z0-9-_]/.test(inp) || this.config.allowKeyCodes && this.config.allowKeyCodes.includes(event.keyCode);
  }

  focusTo(eleId) {
    const ele = document.getElementById(eleId);

    if (ele) {
      ele.focus();
    }
  } // method to set component value


  setValue(value) {
    if (this.config.allowNumbersOnly && isNaN(value)) {
      return;
    }

    this.otpForm.reset();

    if (!value) {
      this.rebuildValue();
      return;
    }

    value = value.toString().replace(/\s/g, ''); // remove whitespace

    Array.from(value).forEach((c, idx) => {
      if (this.otpForm.get(this.getControlName(idx))) {
        this.otpForm.get(this.getControlName(idx)).setValue(c);
      }
    });

    if (!this.config.disableAutoFocus) {
      const containerItem = document.getElementById(`c_${this.componentKey}`);
      var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
      let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];

      if (ele && ele.focus) {
        ele.focus();
      }
    }

    this.rebuildValue();
  }

  rebuildValue() {
    var _a;

    let val = '';
    this.keysPipe.transform(this.otpForm.controls).forEach(k => {
      if (this.otpForm.controls[k].value) {
        let ctrlVal = this.otpForm.controls[k].value;
        let isLengthExceed = ctrlVal.length > 1;
        let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == 'upper' || this.config.letterCase.toLocaleLowerCase() == 'lower');
        ctrlVal = ctrlVal[0];
        let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == 'upper' ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;

        if (isCaseTransformEnabled && transformedVal == ctrlVal) {
          isCaseTransformEnabled = false;
        } else {
          ctrlVal = transformedVal;
        }

        val += ctrlVal;

        if (isLengthExceed || isCaseTransformEnabled) {
          this.otpForm.controls[k].setValue(ctrlVal);
        }
      }
    });

    if ((_a = this.formCtrl) === null || _a === void 0 ? void 0 : _a.setValue) {
      this.formCtrl.setValue(val);
    }

    this.onInputChange.emit(val);
    this.currentVal = val;
  }

  handlePaste(e) {
    // Get pasted data via clipboard API
    let clipboardData = e.clipboardData || window['clipboardData'];

    if (clipboardData) {
      var pastedData = clipboardData.getData('Text');
    } // Stop data actually being pasted into div


    e.stopPropagation();
    e.preventDefault();

    if (!pastedData || this.config.allowNumbersOnly && !this.validateNumber(pastedData)) {
      return;
    }

    this.setValue(pastedData);
  }

}
/** @nocollapse */


NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) {
  return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe));
};
/** @nocollapse */


NgOtpInputComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgOtpInputComponent,
  selectors: [["ng-otp-input"]],
  inputs: {
    config: "config",
    formCtrl: "formCtrl"
  },
  outputs: {
    onInputChange: "onInputChange"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "ngStyle", "class", "formControl", "id", "paste", "keyup", "input", "keydown", 4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "ngStyle", "formControl", "id", "paste", "keyup", "input", "keydown"], ["inp", ""]],
  template: function NgOtpInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
  pipes: [KeysPipe],
  styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: 'ng-otp-input',
      templateUrl: './ng-otp-input.component.html',
      styleUrls: ['./ng-otp-input.component.scss']
    }]
  }], function () {
    return [{
      type: KeysPipe
    }];
  }, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onInputChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    formCtrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NgOtpInputModule {}
/** @nocollapse */


NgOtpInputModule.ɵfac = function NgOtpInputModule_Factory(t) {
  return new (t || NgOtpInputModule)();
};
/** @nocollapse */


NgOtpInputModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgOtpInputModule
});
/** @nocollapse */

NgOtpInputModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [KeysPipe],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule],
      declarations: [NgOtpInputComponent, KeysPipe],
      exports: [NgOtpInputComponent],
      providers: [KeysPipe]
    }]
  }], null, null);
})();

class Config {}
/*
 * Public API Surface of ng-otp-input
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 40431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": function() { return /* binding */ AuthRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 13866);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 78146);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout/logout.component */ 28564);
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-reset/password-reset.component */ 86499);
/* harmony import */ var _payment_subscription_payment_subscription_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-subscription/payment-subscription.component */ 47756);
/* harmony import */ var _role_signup_role_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-signup/role-signup.component */ 88514);
/* harmony import */ var _select_feature_subscription_select_feature_subscription_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-feature-subscription/select-feature-subscription.component */ 93373);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ 64309);
/* harmony import */ var _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscription/subscription.component */ 74439);
/* harmony import */ var _payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment-success/payment-success.component */ 96470);
/* harmony import */ var _payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payment-failure/payment-failure.component */ 84055);
/* harmony import */ var _print_receipt_print_receipt_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./print-receipt/print-receipt.component */ 37950);
/* harmony import */ var _subcription_end_subcription_end_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subcription-end/subcription-end.component */ 62167);
/* harmony import */ var _term_condition_page_term_condition_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./term-condition-page/term-condition-page.component */ 71598);
/* harmony import */ var _verify_otp_forgot_password_verify_otp_forgot_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./verify-otp-forgot-password/verify-otp-forgot-password.component */ 44309);
/* harmony import */ var _change_forgot_password_change_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./change-forgot-password/change-forgot-password.component */ 81539);
/* harmony import */ var _role_selection_role_selection_role_selection_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./role-selection/role-selection/role-selection.component */ 38133);
/* harmony import */ var _login_employee_login_employee_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login-employee/login-employee.component */ 49887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2316);





















const routes = [
    {
        path: "role-selection",
        component: _role_selection_role_selection_role_selection_component__WEBPACK_IMPORTED_MODULE_16__.RoleSelectionComponent,
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
    },
    {
        path: "login-employee",
        component: _login_employee_login_employee_component__WEBPACK_IMPORTED_MODULE_17__.LoginEmployeeComponent,
    },
    {
        path: "logout",
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent
    },
    {
        path: "register",
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__.SignupComponent
    },
    {
        path: "term-and-condition",
        component: _term_condition_page_term_condition_page_component__WEBPACK_IMPORTED_MODULE_13__.TermConditionPageComponent
    },
    {
        path: "select-feature",
        component: _select_feature_subscription_select_feature_subscription_component__WEBPACK_IMPORTED_MODULE_6__.SelectFeatureSubscriptionComponent
    },
    {
        path: "forget-password",
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordComponent
    },
    {
        path: 'verify-password',
        component: _verify_otp_forgot_password_verify_otp_forgot_password_component__WEBPACK_IMPORTED_MODULE_14__.VerifyOtpForgotPasswordComponent
    },
    {
        path: 'change-forgot-password',
        component: _change_forgot_password_change_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__.ChangeForgotPasswordComponent
    },
    {
        path: "subscription",
        component: _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_8__.SubscriptionComponent
    },
    {
        path: "subscription-end",
        component: _subcription_end_subcription_end_component__WEBPACK_IMPORTED_MODULE_12__.SubcriptionEndComponent
    },
    {
        path: "payment-subscription/:id/:paymentId/:userSubsId",
        component: _payment_subscription_payment_subscription_component__WEBPACK_IMPORTED_MODULE_4__.PaymentSubscriptionComponent
    },
    {
        path: "role-signup",
        component: _role_signup_role_signup_component__WEBPACK_IMPORTED_MODULE_5__.RoleSignupComponent
    },
    {
        path: "print-receipt",
        component: _print_receipt_print_receipt_component__WEBPACK_IMPORTED_MODULE_11__.PrintReceiptComponent,
    },
    {
        path: "reset-password",
        component: _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_3__.PasswordResetComponent
    },
    {
        path: "payment-success",
        component: _payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_9__.PaymentSuccessComponent
    },
    {
        path: "payment-failure",
        component: _payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_10__.PaymentFailureComponent
    },
    { path: "", redirectTo: "role-selection", pathMatch: "full" },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] }); })();


/***/ }),

/***/ 71674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": function() { return /* binding */ AuthModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 40431);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 78146);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ 64309);
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-reset/password-reset.component */ 86499);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ 28564);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 13866);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _role_signup_role_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./role-signup/role-signup.component */ 88514);
/* harmony import */ var _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscription/subscription.component */ 74439);
/* harmony import */ var _payment_subscription_payment_subscription_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment-subscription/payment-subscription.component */ 47756);
/* harmony import */ var _payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment-success/payment-success.component */ 96470);
/* harmony import */ var _payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payment-failure/payment-failure.component */ 84055);
/* harmony import */ var _subcription_end_subcription_end_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subcription-end/subcription-end.component */ 62167);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ 85991);
/* harmony import */ var _term_condition_page_term_condition_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./term-condition-page/term-condition-page.component */ 71598);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../material.module */ 63806);
/* harmony import */ var _verify_otp_forgot_password_verify_otp_forgot_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./verify-otp-forgot-password/verify-otp-forgot-password.component */ 44309);
/* harmony import */ var _change_forgot_password_change_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./change-forgot-password/change-forgot-password.component */ 81539);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-otp-input */ 50287);
/* harmony import */ var _role_selection_role_selection_role_selection_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./role-selection/role-selection/role-selection.component */ 38133);
/* harmony import */ var _login_employee_login_employee_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login-employee/login-employee.component */ 49887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2316);
























class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_22__.NgxSpinnerModule,
            _material_module__WEBPACK_IMPORTED_MODULE_13__.MaterialExampleModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_23__.NgOtpInputModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent,
        _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_3__.PasswordResetComponent,
        _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__.LogoutComponent,
        _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_7__.SubscriptionComponent,
        _payment_subscription_payment_subscription_component__WEBPACK_IMPORTED_MODULE_8__.PaymentSubscriptionComponent,
        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__.ForgotPasswordComponent,
        _role_signup_role_signup_component__WEBPACK_IMPORTED_MODULE_6__.RoleSignupComponent,
        _payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_9__.PaymentSuccessComponent,
        _payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_10__.PaymentFailureComponent,
        _subcription_end_subcription_end_component__WEBPACK_IMPORTED_MODULE_11__.SubcriptionEndComponent,
        _term_condition_page_term_condition_page_component__WEBPACK_IMPORTED_MODULE_12__.TermConditionPageComponent,
        _verify_otp_forgot_password_verify_otp_forgot_password_component__WEBPACK_IMPORTED_MODULE_14__.VerifyOtpForgotPasswordComponent,
        _change_forgot_password_change_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__.ChangeForgotPasswordComponent,
        _role_selection_role_selection_role_selection_component__WEBPACK_IMPORTED_MODULE_16__.RoleSelectionComponent,
        _login_employee_login_employee_component__WEBPACK_IMPORTED_MODULE_17__.LoginEmployeeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_22__.NgxSpinnerModule,
        _material_module__WEBPACK_IMPORTED_MODULE_13__.MaterialExampleModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_23__.NgOtpInputModule] }); })();


/***/ }),

/***/ 81539:
/*!*********************************************************************************!*\
  !*** ./src/app/auth/change-forgot-password/change-forgot-password.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeForgotPasswordComponent": function() { return /* binding */ ChangeForgotPasswordComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/login.service */ 91315);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 65788);








function ChangeForgotPasswordComponent_mat_error_36_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangeForgotPasswordComponent_mat_error_36_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email Is Required in Format! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangeForgotPasswordComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChangeForgotPasswordComponent_mat_error_36_mat_error_1_Template, 2, 0, "mat-error", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ChangeForgotPasswordComponent_mat_error_36_mat_error_2_Template, 2, 0, "mat-error", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.forgetpass.errors == null ? null : ctx_r0.f.forgetpass.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.forgetpass.errors == null ? null : ctx_r0.f.forgetpass.errors.email);
} }
function ChangeForgotPasswordComponent_mat_error_38_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " OTP Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangeForgotPasswordComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChangeForgotPasswordComponent_mat_error_38_mat_error_1_Template, 2, 0, "mat-error", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.otp.errors == null ? null : ctx_r1.f.otp.errors.required);
} }
function ChangeForgotPasswordComponent_mat_error_40_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " New Password Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangeForgotPasswordComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChangeForgotPasswordComponent_mat_error_40_mat_error_1_Template, 2, 0, "mat-error", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.newPassword.errors == null ? null : ctx_r2.f.newPassword.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ChangeForgotPasswordComponent {
    constructor(formBuilder, toastService, loginService, router, titleCasePipe) {
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.loginService = loginService;
        this.router = router;
        this.titleCasePipe = titleCasePipe;
    }
    ngOnInit() {
        this.ChangeOTPPasswordForm = this.formBuilder.group({
            forgetpass: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, , _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            otp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            newPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    get f() {
        return this.ChangeOTPPasswordForm.controls;
    }
    postforgotpassword() {
        this.submitted = true;
        if (this.ChangeOTPPasswordForm.invalid) {
            return false;
        }
        else {
            let body = {
                "email": this.ChangeOTPPasswordForm.controls.forgetpass.value,
                "otp": this.ChangeOTPPasswordForm.controls.otp.value,
                "newPassword": this.ChangeOTPPasswordForm.controls.newPassword.value
            };
            this.loginService.changeForgetPassword(body).then((res) => {
                this.toastService.openSnackBar("Password Changed Successfully");
                this.router.navigate(["/auth/login"]);
            }, (err) => {
                if (err.error.expose) {
                    this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
                }
                else {
                    this.toastService.openErrorSnackBar("Something Went Wrong.");
                }
            });
        }
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
ChangeForgotPasswordComponent.ɵfac = function ChangeForgotPasswordComponent_Factory(t) { return new (t || ChangeForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe)); };
ChangeForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChangeForgotPasswordComponent, selectors: [["app-change-forgot-password"]], decls: 47, vars: 13, consts: [["id", "top", 1, "main"], [1, "container-fluid"], [1, "row", "min-vh-100", "flex-center", "g-0"], [1, "col-lg-8", "col-xxl-5", "py-3", "position-relative"], ["src", "../../../assets/img/icons/spot-illustrations/bg-shape.png", "alt", "", "width", "250", 1, "bg-auth-circle-shape"], ["src", "../../../assets/img/icons/spot-illustrations/shape-1.png", "alt", "", "width", "150", 1, "bg-auth-circle-shape-2"], [1, "card", "overflow-hidden", "z-index-1"], [1, "card-body", "p-0"], [1, "row", "g-0", "h-100"], [1, "col-sm-12", "col-md-7", "col-lg-7", "bg-card-gradient", 2, "display", "flex", "align-items", "stretch", "width", "48.8%", "height", "600px", "background-size", "contain", "background-position", "center center", "background", "linear-gradient(0deg, rgba(17, 1, 82, 0.7), rgba(17, 1, 82, 0.7)), url(../../../assets/img/login-img/8.png)"], [1, "position-relative", "p-3"], [1, "z-index-1", "position-relative", "p-3"], [1, "mt-3", "d-flex"], ["src", "assets/img/icons/spot-illustrations/new-logo-iceipt.png", "alt", "iceipts logo", "width", "80", "height", "80"], [1, "fas", "fa-quote-left", "d-flex", "mt-5", 2, "color", "#00DAF7"], [1, "opacity-75", "text-white", "d-flex", "justify-content-start"], [1, "opacity-75", "text-white", "d-flex"], [1, "col-md-7", "d-flex", "flex-center", 2, "width", "50%"], [1, "p-4", "p-md-5", "flex-grow-1", "form-body"], [1, "text-center", "text-md-start"], [1, "mb-0", "fw-bolder"], [1, "mb-4"], [1, "row", "justify-content-center"], [1, "col-sm-8", "col-md"], [1, "mb-3", 3, "formGroup"], ["formControlName", "forgetpass", "type", "email", "placeholder", "Email address", 1, "form-control", "mb-2", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "otp", "type", "email", "placeholder", "Enter OTP", 1, "form-control", "mb-2", 3, "ngClass", "keypress"], ["formControlName", "newPassword", "type", "email", "placeholder", "Enter New Password", 1, "form-control", "mb-2", 3, "ngClass"], ["type", "submit", "name", "submit", 1, "btn", "btn-primary", "d-block", "w-100", "mt-3", 2, "background", "#110152", 3, "click"], ["routerLink", "/auth/login", 1, "fs--1", "text-600"], [1, "d-inline-block", "ms-1"], [1, "text-danger"], [4, "ngIf"]], template: function ChangeForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " The technology that looks impossible today will");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "be part of our life tomorrow. Iceipts technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "creating difference. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Sibanee kar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Change your new password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Enter your Email and we'll send you a reset link.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ChangeForgotPasswordComponent_mat_error_36_Template, 3, 2, "mat-error", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function ChangeForgotPasswordComponent_Template_input_keypress_37_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ChangeForgotPasswordComponent_mat_error_38_Template, 2, 1, "mat-error", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ChangeForgotPasswordComponent_mat_error_40_Template, 2, 1, "mat-error", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangeForgotPasswordComponent_Template_button_click_41_listener() { return ctx.postforgotpassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Verify OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Back to Login this page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.ChangeOTPPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx.f.forgetpass.invalid && ctx.f.forgetpass.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.forgetpass.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx.f.otp.invalid && ctx.f.otp.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.otp.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx.f.newPassword.invalid && ctx.f.newPassword.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.newPassword.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError], styles: [".main[_ngcontent-%COMP%] {\n  height: 90vh;\n}\n\n.form-body[_ngcontent-%COMP%] {\n  display: flexbox;\n  justify-content: center;\n  background: #FFFFFF;\n  margin: 10%;\n  box-shadow: 0px 181px 73px rgba(0, 0, 0, 0.01), 0px 102px 61px rgba(0, 0, 0, 0.05), 0px 45px 45px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);\n  margin: 0px 0px 0px 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUYsdUxBQUE7RUFDSSxtQ0FBQTtBQUFOIiwiZmlsZSI6ImNoYW5nZS1mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG59XHJcblxyXG4uZm9ybS1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXhib3g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW46IDEwJTtcclxuXHJcbiAgYm94LXNoYWRvdzogMHB4IDE4MXB4IDczcHggcmdiYSgwLCAwLCAwLCAwLjAxKSwgMHB4IDEwMnB4IDYxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMHB4IDQ1cHggNDVweCByZ2JhKDAsIDAsIDAsIDAuMDkpLCAwcHggMTFweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBtYXJnaW46IDBweCAwcHggMHB4IDUwcHghaW1wb3J0YW50O1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 13866:
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": function() { return /* binding */ ForgotPasswordComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_helpers_confirmed_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/confirmed.validators */ 93483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/login.service */ 91315);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-otp-input */ 50287);










function ForgotPasswordComponent_form_30_mat_error_2_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_form_30_mat_error_2_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email Is Required in Format! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_form_30_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ForgotPasswordComponent_form_30_mat_error_2_mat_error_1_Template, 2, 0, "mat-error", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ForgotPasswordComponent_form_30_mat_error_2_mat_error_2_Template, 2, 0, "mat-error", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.forgetpass.errors == null ? null : ctx_r2.f.forgetpass.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.forgetpass.errors == null ? null : ctx_r2.f.forgetpass.errors.email);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ForgotPasswordComponent_form_30_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ForgotPasswordComponent_form_30_mat_error_2_Template, 3, 2, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordComponent_form_30_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.postforgotpassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Send reset link");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.forgetPassForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r0.f.forgetpass.invalid && ctx_r0.f.forgetpass.touched && ctx_r0.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted || ctx_r0.f.forgetpass.touched);
} }
function ForgotPasswordComponent_form_31_mat_error_6_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " New Password Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_form_31_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ForgotPasswordComponent_form_31_mat_error_6_mat_error_1_Template, 2, 0, "mat-error", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.verifyPasswordFromControl.newPassword.errors == null ? null : ctx_r7.verifyPasswordFromControl.newPassword.errors.required);
} }
function ForgotPasswordComponent_form_31_mat_error_8_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Confirm Password Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_form_31_mat_error_8_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password & Confirm Password must be same! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_form_31_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ForgotPasswordComponent_form_31_mat_error_8_mat_error_1_Template, 2, 0, "mat-error", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ForgotPasswordComponent_form_31_mat_error_8_mat_error_2_Template, 2, 0, "mat-error", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.verifyPasswordFromControl.confirmPassword.errors == null ? null : ctx_r8.verifyPasswordFromControl.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.verifyPasswordFromControl.confirmPassword.errors == null ? null : ctx_r8.verifyPasswordFromControl.confirmPassword.errors.confirmedValidator);
} }
function ForgotPasswordComponent_form_31_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Enter OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ng-otp-input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onInputChange", function ForgotPasswordComponent_form_31_Template_ng_otp_input_onInputChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.onOtpChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ForgotPasswordComponent_form_31_mat_error_6_Template, 2, 1, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ForgotPasswordComponent_form_31_mat_error_8_Template, 3, 2, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordComponent_form_31_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.postverifypassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.verifyPasswordFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx_r1.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx_r1.verifyPasswordFromControl.newPassword.invalid && ctx_r1.verifyPasswordFromControl.newPassword.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.verifyPasswordFromControl.newPassword.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx_r1.verifyPasswordFromControl.confirmPassword.invalid && ctx_r1.verifyPasswordFromControl.confirmPassword.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.verifyPasswordFromControl.newPassword.touched);
} }
class ForgotPasswordComponent {
    constructor(formBuilder, toastService, loginService, router, titleCasePipe) {
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.loginService = loginService;
        this.router = router;
        this.titleCasePipe = titleCasePipe;
        this.verifyShow = false;
        this.config = {
            allowNumbersOnly: true,
            length: 6,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: "",
            inputStyles: {
                width: "40px",
                height: "40px",
                "font-size": "20px",
            },
        };
    }
    ngOnInit() {
        this.forgetPassForm = this.formBuilder.group({
            forgetpass: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
        });
        this.verifyPasswordFrom = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            otp: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
            newPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        }, {
            validator: (0,src_app_helpers_confirmed_validators__WEBPACK_IMPORTED_MODULE_0__.ConfirmedValidators)("newPassword", "confirmPassword"),
        });
    }
    get f() {
        return this.forgetPassForm.controls;
    }
    get verifyPasswordFromControl() {
        return this.verifyPasswordFrom.controls;
    }
    onOtpChange(a) {
        console.log("onOtpChange", a);
        this.verifyPasswordFrom.get("otp").patchValue(a);
    }
    postforgotpassword() {
        this.submitted = true;
        if (this.forgetPassForm.invalid) {
            console.log("postforgotpassword", this.submitted);
            return false;
        }
        else {
            let body = {
                email: this.forgetPassForm.controls.forgetpass.value,
            };
            this.verifyPasswordFrom.get("email").patchValue(body.email);
            this.loginService.forgotpassword(body).then((res) => {
                this.toastService.openSnackBar("OTP Has Been Successfully Sent To Your Email Address");
                this.verifyShow = true;
                // this.router.navigate(["/auth/verify-password"]);
            }, (err) => {
                if (err.error.expose) {
                    this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
                }
                else {
                    this.toastService.openErrorSnackBar("Something Went Wrong.");
                }
            });
        }
    }
    postverifypassword() {
        console.log("verifyPasswordFromControl.confirmPassword.errors", this.verifyPasswordFromControl.confirmPassword.errors);
        if (this.verifyPasswordFrom.invalid) {
            console.log("Verify Password false");
            return false;
        }
        else {
            this.loginService
                .changeForgetPassword(this.verifyPasswordFrom.value)
                .then((res) => {
                this.toastService.openSnackBar("Password Changed Successfully");
                this.router.navigate(["/auth/login"]);
            }, (err) => {
                if (err.error.expose) {
                    this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
                }
                else {
                    this.toastService.openErrorSnackBar("Something Went Wrong.");
                }
            });
        }
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe)); };
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 36, vars: 2, consts: [["id", "top", 1, "main"], [1, "container-fluid"], [1, "row", "min-vh-100", "flex-center", "g-0"], [1, "col-sm-12", "col-md-12", "col-lg-10", "col-xl-8", "col-xxl-7", "py-3", "position-relative"], [1, "card", "overflow-hidden", "z-index-1"], [1, "card-body", "p-0"], [1, "row", "g-0", "h-100"], [1, "col-sm-12", "col-md-6", "col-lg-6", "bg-card-gradient"], [1, "position-relative", "pt-md-3", "pb-md-7", "light", 2, "padding-top", "150px !important"], [1, "z-index-1", "position-relative", "p-4"], [1, "mt-2", "d-flex"], ["src", "assets/img/icons/spot-illustrations/Logo-2.png", "alt", "iceipts logo", "width", "40", "height", "40", 2, "position", "absolute !important", "top", "-17% !important", "left", "45%"], ["src", "assets/img/icons/spot-illustrations/Logo-1.png", "alt", "iceipts logo", "width", "130", "height", "20", 2, "margin", "auto"], [1, "opacity-75", "text-white", "d-flex", "justify-content-center", "leftText"], [1, "col-sm-12", "col-md-6", "col-lg-6", "form-box"], [1, "p-4", "p-md-5", "flex-grow-1", "form-body"], [1, "text-center", "text-md-start"], [1, "mb-0", 2, "font-weight", "500", "font-family", "Poppins"], [1, "mb-4", 2, "font-family", "Poppins"], [1, "row", "justify-content-center"], [1, "col-sm-8", "col-md"], ["class", "mb-3", 3, "formGroup", 4, "ngIf"], ["routerLink", "/auth/login", 1, "fs--1", "text-600", 2, "font-family", "Poppins"], [1, "d-inline-block", "ms-1"], [1, "mb-3", 3, "formGroup"], ["formControlName", "forgetpass", "type", "email", "placeholder", "Email address", 1, "form-control", "mb-2", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["type", "submit", "name", "submit", 1, "btn", "btn-primary", "d-block", "w-100", "mt-3", 2, "background", "#110152", 3, "click"], [2, "font-family", "Poppins"], [1, "text-danger"], ["style", "font-family: 'Poppins';", 4, "ngIf"], ["readonly", "", "formControlName", "email", "type", "email", "placeholder", "Email address", 1, "form-control", "mb-2"], ["for", "otp", 2, "font-family", "Poppins"], [3, "config", "onInputChange"], ["formControlName", "newPassword", "type", "email", "placeholder", "Enter New Password", 1, "form-control", "my-2", 3, "ngClass"], ["formControlName", "confirmPassword", "type", "text", "placeholder", "Confirm Password", 1, "form-control", "mb-2", 3, "ngClass"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " The technology that looks impossible today will");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "be part of our life tomorrow. Iceipts technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "creating difference. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Enter your Email and we'll send you a reset link. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ForgotPasswordComponent_form_30_Template, 6, 5, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ForgotPasswordComponent_form_31_Template, 12, 10, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Back to Login page");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.verifyShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.verifyShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, ng_otp_input__WEBPACK_IMPORTED_MODULE_8__.NgOtpInputComponent], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins&display=swap\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n.main[_ngcontent-%COMP%] {\n  height: 90vh;\n}\n.form-body[_ngcontent-%COMP%] {\n  display: flexbox;\n  justify-content: center;\n  background: #FFFFFF;\n  margin: 10%;\n  box-shadow: 0px 181px 73px rgba(0, 0, 0, 0.01), 0px 102px 61px rgba(0, 0, 0, 0.05), 0px 45px 45px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);\n}\n.bg-card-gradient[_ngcontent-%COMP%] {\n  height: 600px;\n  background-size: contain;\n  background-position: center center;\n  background: linear-gradient(0deg, rgba(17, 1, 82, 0.7), rgba(17, 1, 82, 0.7)), url('8.png');\n}\n.form-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.leftText[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (min-width: 2000px) {\n  .leftText[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n@media (max-width: 992px) {\n  .leftText[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n}\n@media (width: 768px) {\n  .form-box[_ngcontent-%COMP%] {\n    padding-left: 350px;\n  }\n\n  .form-body[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n@media (max-width: 768px) {\n  .main[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .bg-card-gradient[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 350px;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .form-box[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin: 24px 0px;\n  }\n}\n@media (max-width: 250px) {\n  .bg-card-gradient[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 400px;\n    justify-content: center;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw0RUFBQTtBQUVSO0VBQ0Usa0NBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtBQUFGO0FBR0E7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUYsdUxBQUE7QUFERjtBQU1BO0VBS0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyRkFBQTtBQVBGO0FBV0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVJGO0FBV0E7RUFDRSxrQkFBQTtBQVJGO0FBYUE7RUFFRTtJQUNFLDBCQUFBO0VBWEY7QUFDRjtBQWNBO0VBRUU7SUFDRSwwQkFBQTtFQWJGO0FBQ0Y7QUFnQkE7RUFFRTtJQUNFLG1CQUFBO0VBZkY7O0VBa0JBO0lBQ0UsWUFBQTtFQWZGO0FBQ0Y7QUFtQkE7RUFDRTtJQUNHLFdBQUE7RUFqQkg7O0VBb0JBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBakJGOztFQW9CQTtJQUNFLHVCQUFBO0lBQ0EsZ0JBQUE7RUFqQkY7QUFDRjtBQXFCQTtFQUVFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBcEJGO0FBQ0YiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBoZWlnaHQ6OTB2aDtcclxufVxyXG5cclxuLmZvcm0tYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4Ym94O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luOiAxMCU7XHJcblxyXG4gIGJveC1zaGFkb3c6IDBweCAxODFweCA3M3B4IHJnYmEoMCwgMCwgMCwgMC4wMSksIDBweCAxMDJweCA2MXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDBweCA0NXB4IDQ1cHggcmdiYSgwLCAwLCAwLCAwLjA5KSwgMHB4IDExcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC8vICAgbWFyZ2luOiAwcHggMHB4IDBweCA1MHB4IWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5iZy1jYXJkLWdyYWRpZW50IHtcclxuXHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICAvLyBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAvLyB3aWR0aDo0OC44JTtcclxuICBoZWlnaHQ6NjAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNywgMSwgODIsIDAuNyksIHJnYmEoMTcsIDEsIDgyLCAwLjcpKSwgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4taW1nLzgucG5nKTs7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxlZnRUZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCl7XHJcblxyXG4gIC5sZWZ0VGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XHJcblxyXG4gIC5sZWZ0VGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAod2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgLmZvcm0tYm94IHtcclxuICAgIHBhZGRpbmctbGVmdDogMzUwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ib2R5IHtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYWluIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5iZy1jYXJkLWdyYWRpZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjM1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tYm94IHtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBtYXJnaW46IDI0cHggMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAyNTBweCkge1xyXG5cclxuICAuYmctY2FyZC1ncmFkaWVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDo0MDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 49887:
/*!*****************************************************************!*\
  !*** ./src/app/auth/login-employee/login-employee.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginEmployeeComponent": function() { return /* binding */ LoginEmployeeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/login.service */ 91315);
/* harmony import */ var src_app_core_services_otp_verify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/otp-verify.service */ 42558);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var src_app_core_services_role_signup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/role-signup.service */ 9954);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 85991);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 70781);














const _c0 = ["passwordInput"];
function LoginEmployeeComponent_div_25_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "User ID is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LoginEmployeeComponent_div_25_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LoginEmployeeComponent_div_25_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 46);
} }
function LoginEmployeeComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginEmployeeComponent_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.backToRoleSelecetion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "< Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Sign In As Employee!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "hr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "User ID *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown.enter", function LoginEmployeeComponent_div_25_Template_input_keydown_enter_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](22); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.moveFocus($event, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, LoginEmployeeComponent_div_25_div_16_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Password *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.enter", function LoginEmployeeComponent_div_25_Template_input_keyup_enter_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.clientLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginEmployeeComponent_div_25_Template_span_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.toggleShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, LoginEmployeeComponent_div_25_div_25_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Remember me");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginEmployeeComponent_div_25_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r10.clientLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, LoginEmployeeComponent_div_25_span_37_Template, 1, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r0.isVerifyOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.clientForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.clientForm.get("username").hasError("required") && ctx_r0.clientForm.get("username").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r0.changeType ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r0.visible ? "fa fa-eye" : "fa fa-eye-slash");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.clientForm.get("password").hasError("required") && ctx_r0.clientForm.get("password").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isLoginBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isLoginBtn);
} }
class LoginEmployeeComponent {
    constructor(router, fb, authService, loginService, otpVerify, http, roleSignupService, toastService, spinner, titleCasePipe, route) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.loginService = loginService;
        this.otpVerify = otpVerify;
        this.http = http;
        this.roleSignupService = roleSignupService;
        this.toastService = toastService;
        this.spinner = spinner;
        this.titleCasePipe = titleCasePipe;
        this.route = route;
        this.visible = false;
        this.changeType = true;
        this.hide = true;
        this.userName = "Client";
        this.isOtpField = false;
        this.isVerifyOtp = false;
        this.successful = false;
        this.otpErrorMessage = false;
        this.isLoginBtn = false;
        this.UserDatacomplte = false;
        this.clientForm = this.fb.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
        this.custForm = this.fb.group({
            username: ["", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10),
                ]
            ],
            //username : [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")],
            mobileOtp: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("^[0-9]{6}"),
                ],
            ],
        });
        this.otpClientData = this.fb.group({
            emailotp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("[0-9]{10}")]],
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.CustLogintoggle = params['CustLogintoggle'] === 'true';
        });
        this.authService.logout();
    }
    moveFocus(event, nextInput) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            nextInput.nativeElement.focus();
        }
    }
    backToRoleSelecetion() {
        this.router.navigate(['auth/role-selection']);
    }
    // this click handler is called when the user is clicked on the register link
    onCustomerClick() {
        this.router.navigate(['/auth/register'], { queryParams: { Custtoggle: 'false' } });
    }
    onRetailerClick() {
        this.router.navigate(['/auth/register'], { queryParams: { Custtoggle: 'true' } });
    }
    //function for password masking
    toggleShow() {
        this.visible = !this.visible;
        this.changeType = !this.changeType;
    }
    show(id) {
        if (id === 3) {
            this.user = 3;
            this.CustLogintoggle = false;
            this.userName = "Client";
        }
        else if (id === 4) {
            this.user = 4;
            this.CustLogintoggle = true;
            this.userName = "Customer";
        }
    }
    hideshowVerifylogin() {
        this.isVerifyOtp = false;
        this.CustLogintoggle = false;
    }
    clientLogin() {
        if (this.clientForm.invalid) {
            console.log(this.clientForm.controls);
            this.toastService.openErrorSnackBar("Please fill mandatory fields!!!");
            return false;
        }
        else {
            let data = {
                email: this.clientForm.controls.username.value,
                password: this.clientForm.controls.password.value,
            };
            this.isLoginBtn = true;
            this.authService.login(data).subscribe((res) => {
                console.log("res login", res);
                this.isLoginBtn = false;
                this.spinner.hide();
                if (res.data) {
                    this.router.navigate(["/pages/employee-work/Profile-employee"]);
                    this.toastService.openSnackBar("Login Successfully");
                }
                else {
                    this.router.navigate(["/pages/employee-work/Profile-employee"]);
                }
            }, (err) => {
                console.log("errrrrrrrrrrr", err);
                if (err.error.status === 406) {
                    this.toastService.openErrorSnackBar("User Not Verified. Please Check Your Register Email");
                    this.successful = true;
                    this.isLoginBtn = false;
                    let data = {
                        email: this.clientForm.controls.username.value,
                    };
                    //this.isVerifyOtp = true;
                    //this.roleSignupService.sendRoleUsersOtp(data).then((data) => {});
                }
                else if (err.error.status == 404) {
                    this.isLoginBtn = false;
                    this.toastService.openErrorSnackBar("User Not Found!!! Please Register Again!!!");
                }
                else if (err.error.status == 404) {
                    this.isLoginBtn = false;
                    this.toastService.openErrorSnackBar("Invalid Credentials.");
                }
                else if (err.error.status == 401) {
                    this.isLoginBtn = false;
                    this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
                }
                else if (err.error.status == 400) {
                    this.isLoginBtn = false;
                    this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
                }
                else {
                    this.isLoginBtn = false;
                    this.toastService.openErrorSnackBar("User Not Found Or Wrong password.");
                }
            });
        }
    }
    /**
     * Customer OTP post method
     */
    sendOtp() {
        // this.spinner.show();
        let data = {
            mobile: this.custForm.controls.username.value,
        };
        this.isLoginBtn = true;
        this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "users/sendCustomerOtp", data)
            .subscribe((res) => {
            // this.spinner.hide();
            this.isLoginBtn = false;
            this.isOtpField = true;
        }, (err) => {
            // this.spinner.hide();
            this.isLoginBtn = false;
            this.toastService.openErrorSnackBar("Number Not Registered Or Invalid Number");
        });
    }
    /**
     * Customer Login and OTP verify
     */
    verifyOtp() {
        // this.spinner.show();
        this.isLoginBtn = true;
        let data = {
            mobile: this.custForm.controls.username.value,
            type: "1",
            mobileotp: this.custForm.controls.mobileOtp.value,
        };
        // this.http.post(environment.apiUrl + UrlConstants.verifyCustomerOtp, data)
        //   .subscribe(res => {
        //     if (res) {
        //       // this.spinner.hide();
        //       this.isLoginBtn = false;
        //       let data = {
        //         mobile: this.custForm.controls.username.value,
        //         mobileotp: this.custForm.controls.mobileOtp.value
        //       }
        this.authService.custLogin(data).subscribe((res) => {
            if (this.UserDatacomplte) {
                this.router.navigate(["pages/customer/customer-dashboard"]);
                this.toastService.openSnackBar("Login Successfully");
            }
            else {
                this.toastService.openSnackBar("Fill All Required Fields.");
                this.router.navigate(["pages/customer/customer-profile-setting"]);
            }
        });
        //   }
        // }, (err) => {
        //   // this.spinner.hide();
        //   this.isLoginBtn = false;
        //   this.toastService.openErrorSnackBar("Invalid Otp")
        // })
    }
    /**
     * Client OTP veify
     */
    verifyClientOtp() {
        // this.spinner.show();
        this.isLoginBtn = true;
        const data = {
            email: this.clientForm.controls.username.value,
            emailotp: this.otpClientData.controls.emailotp.value,
        };
        this.otpVerify.verifyCLientOtp(data).then(() => {
            this.isLoginBtn = false;
            // this.spinner.hide();
            this.isVerifyOtp = false;
        }, (err) => {
            this.isLoginBtn = false;
        });
    }
    /**
     * Customer Resend OTP
     */
    customerLoginResendOtp() {
        // this.spinner.show();
        this.isLoginBtn = true;
        let d = {
            mobile: this.custForm.controls.username.value,
        };
        this.loginService.postSendOtp(d).then((res) => {
            // this.spinner.hide();
            this.isLoginBtn = false;
            this.resend = res;
        }, (err) => {
            this.isLoginBtn = false;
        });
        this.messageSuccess = true;
        setTimeout(() => {
            //<<<---using ()=> syntax
            this.messageSuccess = false;
        }, 120000);
    }
    f() {
        console.log("this.custForm.controls", this.custForm.controls);
        return this.custForm.controls;
    }
    numberOnly(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
LoginEmployeeComponent.ɵfac = function LoginEmployeeComponent_Factory(t) { return new (t || LoginEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_otp_verify_service__WEBPACK_IMPORTED_MODULE_3__.OtpVerifyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_role_signup_service__WEBPACK_IMPORTED_MODULE_4__.RoleSignupService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
LoginEmployeeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: LoginEmployeeComponent, selectors: [["app-login-employee"]], viewQuery: function LoginEmployeeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.passwordInput = _t.first);
    } }, decls: 26, vars: 1, consts: [["bdOpacity", "1", "bdColor", "rgba(97,197,212,0.07)", "size", "medium", "color", "#dd4b39", "type", "ball-spin-clockwise", "fullScreen", "true"], [2, "color", "#61c5d4"], ["id", "top", 1, "main"], [1, ""], [1, "container-fluid", "row", "min-vh-100", "flex-center", "g-0"], [1, "col-sm-12", "col-md-12", "col-lg-10", "col-xl-8", "col-xxl-7", "py-3", "position-relative"], [1, "card", "overflow-hidden", "z-index-1"], [1, "card-body", "p-0"], [1, "row", "g-0", "h-100"], [1, "col-sm-12", "col-md-6", "col-lg-6", "bg-card-gradient"], [1, "position-relative", "pt-md-3", "pb-md-7", "light", 2, "padding-top", "150px !important"], [1, "z-index-1", "position-relative", "p-4"], [1, "mt-2", "d-flex"], ["src", "assets/img/icons/spot-illustrations/Logo-2.png", "alt", "iceipts logo", "width", "40", "height", "40", 2, "position", "absolute !important", "top", "-17% !important", "left", "45%"], ["src", "assets/img/icons/spot-illustrations/Logo-1.png", "alt", "iceipts logo", "width", "130", "height", "20", 2, "margin", "auto"], [1, "opacity-75", "text-white", "d-flex", "justify-content-center", "leftText"], [1, "col-sm-12", "col-md-6", "col-lg-6", "form-box"], ["class", "demo", 3, "hidden", 4, "ngIf"], [1, "demo", 3, "hidden"], ["mat-flat-button", "", 2, "color", "#8692A6", 3, "click"], [2, "font-family", "Poppins"], [3, "formGroup"], [1, "p-4", "flex-grow-1"], [1, "row", "flex-between-center"], [1, "col-12"], [2, "font-weight", "500", "color", "#000000", "font-family", "'Poppins', sans-serif", "font-size", "20px"], [1, "toggle-text", "col-12", "fs-0", "my-2"], [1, "top-line", "my-2", 2, "opacity", "20%"], [1, "mb-3"], ["for", "card-email", 1, "form-label", 2, "font-family", "Poppins"], ["id", "card-email", "type", "email", "placeholder", "Email Address", "required", "", "formControlName", "username", 1, "form-control", 3, "keydown.enter"], ["class", "text-danger", 4, "ngIf"], [1, "d-flex", "justify-content-between"], ["for", "card-password", 1, "form-label", 2, "font-family", "Poppins"], ["placeholder", "Password", "required", "", "id", "card-password", "formControlName", "password", 1, "form-control", 3, "type", "keyup.enter"], ["passwordInput", ""], [1, "form-control-feedback", 3, "click"], [1, "p-1", 3, "ngClass"], [1, "col-auto"], [1, "form-check", "mb-0"], ["type", "checkbox", "id", "card-checkbox", "checked", "checked", 1, "form-check-input"], ["for", "card-checkbox", 1, "form-check-label", "mb-0", 2, "font-family", "Poppins"], [1, "fs--1", 2, "font-size", "10px!important", "cursor", "pointer", "font-family", "Poppins"], ["type", "button", 1, "login-btn", "d-block", "w-100", "mt-3", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "text-danger"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function LoginEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Loading..");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " The technology that looks impossible today will");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "be part of our life tomorrow. Iceipts technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "creating difference. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, LoginEmployeeComponent_div_25_Template, 40, 8, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.CustLogintoggle);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;500;600;700;800;900&display=swap\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n.main[_ngcontent-%COMP%] {\n  height: 90vh;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.demo[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 181px 73px rgba(0, 0, 0, 0.01), 0px 102px 61px rgba(0, 0, 0, 0.05), 0px 45px 45px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);\n  margin: 8%;\n}\n.form-control-feedback[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 6px;\n  margin-top: -30px;\n  position: relative;\n  z-index: 2;\n}\np.italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.password-div[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-div[_ngcontent-%COMP%]   .eye-b[_ngcontent-%COMP%] {\n  color: #ccc;\n  position: absolute;\n  top: 9px;\n  right: 10px;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.bg-card-gradient[_ngcontent-%COMP%] {\n  height: 600px;\n  background-size: contain;\n  background-position: center center;\n  max-width: 100% !important;\n  background: linear-gradient(0deg, rgba(17, 1, 82, 0.7), rgba(17, 1, 82, 0.7)), url('8.png');\n}\n.form-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.startQuote[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n.endQuote[_ngcontent-%COMP%] {\n  margin-right: 5%;\n}\n.leftText[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (min-width: 2000px) {\n  .leftText[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n@media (max-width: 992px) {\n  .leftText[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n}\n@media (width: 768px) {\n  .form-box[_ngcontent-%COMP%] {\n    transform: translateX(200px);\n  }\n}\n@media (max-width: 768px) {\n  .main[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .bg-card-gradient[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 350px;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .form-box[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin: 24px 0px;\n  }\n\n  .startQuote[_ngcontent-%COMP%] {\n    margin-left: 15%;\n  }\n\n  .endQuote[_ngcontent-%COMP%] {\n    margin-right: 15%;\n  }\n}\n@media (max-width: 600px) {\n  .startQuote[_ngcontent-%COMP%] {\n    margin-left: 8% !important;\n  }\n\n  .endQuote[_ngcontent-%COMP%] {\n    margin-right: 8% !important;\n  }\n}\n@media (max-width: 500px) {\n  .startQuote[_ngcontent-%COMP%] {\n    margin-left: 0% !important;\n  }\n\n  .endQuote[_ngcontent-%COMP%] {\n    margin-right: 0% !important;\n  }\n}\n@media (max-width: 250px) {\n  .bg-card-gradient[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 400px;\n    justify-content: center;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9RLDRFQUFBO0FBQ0EsaUhBQUE7QUFHUjtFQUNFLGtDQUFBO0FBUkY7QUFXQTtFQUNFLFlBQUE7QUFSRjtBQVdBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVJGO0FBV0E7RUFDRSxtQkFBQTtFQUNBLHVMQUFBO0VBRUEsVUFBQTtBQVRGO0FBWUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVRKO0FBWUE7RUFDSSxrQkFBQTtBQVRKO0FBWUE7RUFDSSxrQkFBQTtBQVRKO0FBVUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQVJSO0FBV0E7RUFDSSxhQUFBO0FBUko7QUFVRSxnQ0FBQTtBQUNGOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQVBGO0FBVUEsWUFBQTtBQUNBO0VBQ0UsMEJBQUE7QUFQRjtBQWVBO0VBTUUsYUFBQTtFQUNBLHdCQUFBO0VBQ0Qsa0NBQUE7RUFDQSwwQkFBQTtFQUNBLDJGQUFBO0FBakJEO0FBcUJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFsQkY7QUFxQkE7RUFDRSxlQUFBO0FBbEJGO0FBcUJBO0VBQ0UsZ0JBQUE7QUFsQkY7QUFxQkE7RUFDRSxrQkFBQTtBQWxCRjtBQXVCQTtFQUVFO0lBQ0UsMEJBQUE7RUFyQkY7QUFDRjtBQXdCQTtFQUVFO0lBQ0UsMEJBQUE7RUF2QkY7QUFDRjtBQTBCQTtFQUVFO0lBQ0UsNEJBQUE7RUF6QkY7QUFDRjtBQTZCQTtFQUNFO0lBQ0csV0FBQTtFQTNCSDs7RUE4QkE7SUFDRSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUEzQkY7O0VBOEJBO0lBQ0UsdUJBQUE7SUFDQSxnQkFBQTtFQTNCRjs7RUE4QkE7SUFDRSxnQkFBQTtFQTNCRjs7RUE4QkE7SUFDRSxpQkFBQTtFQTNCRjtBQUNGO0FBZ0NBO0VBQ0U7SUFDRSwwQkFBQTtFQTlCRjs7RUFpQ0E7SUFDRSwyQkFBQTtFQTlCRjtBQUNGO0FBaUNBO0VBQ0U7SUFDRSwwQkFBQTtFQS9CRjs7RUFrQ0E7SUFDRSwyQkFBQTtFQS9CRjtBQUNGO0FBbUNBO0VBRUU7SUFDRSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFsQ0Y7QUFDRiIsImZpbGUiOiJsb2dpbi1lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiAyMHB4O1xyXG4vLyAgICAgbGVmdDogMjBweDtcclxuLy8gICAgIHRvcDogMzBweDtcclxuLy8gfVxyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDsyMDA7MzAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGhlaWdodDo5MHZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZW1vIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxODFweCA3M3B4IHJnYmEoMCwgMCwgMCwgMC4wMSksIDBweCAxMDJweCA2MXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDBweCA0NXB4IDQ1cHggcmdiYSgwLCAwLCAwLCAwLjA5KSwgMHB4IDExcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAvLyBtYXJnaW46IDUwcHggNTBweCA1MHB4IDUwcHghaW1wb3J0YW50O1xyXG4gIG1hcmdpbjo4JTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxucC5pdGFsaWMge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5leWUtYiB7XHJcbiAgICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggKi9cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG5cclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KVxyXG4vLyAuZm9ybS1ib3h7XHJcbi8vICAgICB3aWR0aDogNDIlO1xyXG4vLyB9XHJcblxyXG4uYmctY2FyZC1ncmFkaWVudHtcclxuXHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICAvLyBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAvLyBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAvLyB3aWR0aDo0OC44JTtcclxuICBoZWlnaHQ6NjAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XHJcbiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gbWF4LXdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE3LCAxLCA4MiwgMC43KSwgcmdiYSgxNywgMSwgODIsIDAuNykpLCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi1pbWcvOC5wbmcpO1xyXG59XHJcblxyXG5cclxuLmZvcm0tYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGFydFF1b3RlIHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbi5lbmRRdW90ZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OjUlO1xyXG59XHJcblxyXG4ubGVmdFRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjAwMHB4KXtcclxuXHJcbiAgLmxlZnRUZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcclxuXHJcbiAgLmxlZnRUZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhICh3aWR0aDogNzY4cHgpe1xyXG5cclxuICAuZm9ybS1ib3gge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWFpbiB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYmctY2FyZC1ncmFkaWVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDozNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mb3JtLWJveCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgbWFyZ2luOiAyNHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5zdGFydFF1b3RlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgfVxyXG5cclxuICAuZW5kUXVvdGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5zdGFydFF1b3RlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmVuZFF1b3RlIHtcclxuICAgIG1hcmdpbi1yaWdodDogOCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5zdGFydFF1b3RlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmVuZFF1b3RlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMjUwcHgpIHtcclxuXHJcbiAgLmJnLWNhcmQtZ3JhZGllbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 78146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/login.service */ 91315);
/* harmony import */ var src_app_core_services_otp_verify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/otp-verify.service */ 42558);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var src_app_core_services_role_signup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/role-signup.service */ 9954);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 85991);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 64742);

















const _c0 = ["passwordInput"];
function LoginComponent_div_25_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 54);
} }
function LoginComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.backToRoleSelecetion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "< Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Sign In As Retailer!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " If you don't have an account. You can ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_25_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r7.onCustomerClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Register Here!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "hr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Email Address *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function LoginComponent_div_25_Template_input_keydown_enter_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](27); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.moveFocus($event, _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Password *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function LoginComponent_div_25_Template_input_keyup_enter_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r9.clientLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_25_Template_span_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r10.toggleShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Remember me");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_25_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r11.clientLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, LoginComponent_div_25_span_41_Template, 1, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "hr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "hr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Sign in with Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r0.isVerifyOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.clientForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r0.changeType ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r0.visible ? "fa fa-eye" : "fa fa-eye-slash");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r0.isLoginBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isLoginBtn);
} }
function LoginComponent_div_26_div_23_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 54);
} }
function LoginComponent_div_26_div_23_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 54);
} }
function LoginComponent_div_26_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keypress", function LoginComponent_div_26_div_23_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r16.numberOnly($event); })("keyup.enter", function LoginComponent_div_26_div_23_Template_input_keyup_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r18.verifyOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_26_div_23_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r19.customerLoginResendOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, LoginComponent_div_26_div_23_span_9_Template, 1, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_26_div_23_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r20.verifyOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, LoginComponent_div_26_div_23_span_14_Template, 1, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r12.isLoginBtn)("disabled", ctx_r12.messageSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.isLoginBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r12.isLoginBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.isLoginBtn);
} }
function LoginComponent_div_26_button_34_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 54);
} }
function LoginComponent_div_26_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_26_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r22.sendOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, LoginComponent_div_26_button_34_span_1_Template, 1, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Send OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r13.isLoginBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r13.isLoginBtn);
} }
function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r24.backToRoleSelecetion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "< Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Sign In As a Customer!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " If you don't have an account. You can ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_26_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.onRetailerClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Register Here!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "hr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-form-field", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function LoginComponent_div_26_Template_input_keyup_enter_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r27.sendOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, LoginComponent_div_26_div_23_Template, 17, 5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Remember me");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, LoginComponent_div_26_button_34_Template, 4, 2, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r1.isVerifyOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r1.custForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isOtpField);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isOtpField);
} }
function LoginComponent_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "OTP has sent successfully to your Email-Id and mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function LoginComponent_div_27_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 54);
} }
function LoginComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, LoginComponent_div_27_div_2_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Enter Email OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keypress", function LoginComponent_div_27_Template_input_keypress_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_27_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.verifyClientOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, LoginComponent_div_27_span_13_Template, 1, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_27_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r33.hideshowVerifylogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Back to Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.successful);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Verify as ", ctx_r2.userName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.otpClientData);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.isLoginBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.isLoginBtn);
} }
class LoginComponent {
    constructor(router, commonService, fb, authService, loginService, otpVerify, http, roleSignupService, toastService, spinner, titleCasePipe, route) {
        this.router = router;
        this.commonService = commonService;
        this.fb = fb;
        this.authService = authService;
        this.loginService = loginService;
        this.otpVerify = otpVerify;
        this.http = http;
        this.roleSignupService = roleSignupService;
        this.toastService = toastService;
        this.spinner = spinner;
        this.titleCasePipe = titleCasePipe;
        this.route = route;
        this.visible = false;
        this.changeType = true;
        this.hide = true;
        this.userName = "Client";
        this.isOtpField = false;
        this.isVerifyOtp = false;
        this.successful = false;
        this.otpErrorMessage = false;
        this.isLoginBtn = false;
        this.UserDatacomplte = false;
        this.clientForm = this.fb.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        });
        this.custForm = this.fb.group({
            username: ["", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10),
                ]
            ],
            //username : [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")],
            mobileOtp: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern("^[0-9]{6}"),
                ],
            ],
        });
        this.otpClientData = this.fb.group({
            emailotp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern("[0-9]{10}")]],
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.CustLogintoggle = params['CustLogintoggle'] === 'true';
        });
        this.authService.logout();
    }
    moveFocus(event, nextInput) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            nextInput.nativeElement.focus();
        }
    }
    backToRoleSelecetion() {
        this.router.navigate(['auth/role-selection']);
    }
    // this click handler is called when the user is clicked on the register link
    onCustomerClick() {
        this.router.navigate(['/auth/register'], { queryParams: { Custtoggle: 'false' } });
    }
    onRetailerClick() {
        this.router.navigate(['/auth/register'], { queryParams: { Custtoggle: 'true' } });
    }
    //function for password masking
    toggleShow() {
        this.visible = !this.visible;
        this.changeType = !this.changeType;
    }
    show(id) {
        if (id === 3) {
            this.user = 3;
            this.CustLogintoggle = false;
            this.userName = "Client";
        }
        else if (id === 4) {
            this.user = 4;
            this.CustLogintoggle = true;
            this.userName = "Customer";
        }
    }
    hideshowVerifylogin() {
        this.isVerifyOtp = false;
        this.CustLogintoggle = false;
    }
    /**
     * Client Login
     */
    // clientLogin() {
    //   this.router.navigate(["pages/dashboard"]);
    //   // let data = {
    //   //   email: this.clientForm.controls.username.value,
    //   //   password: this.clientForm.controls.password.value,
    //   // };
    //   // this.isLoginBtn = true;
    //   // this.authService.login(data).subscribe(
    //   //   (res) => {
    //   //     this.isLoginBtn = false;
    //   //     let planExpiryDate = new Date(res.data.user.planExpiresOn);
    //   //     let showSubscriptionPage = new Date(planExpiryDate);
    //   //     let todaysDate = new Date();
    //   //     console.log(planExpiryDate);
    //   //     console.log(res.data.user.planExpiresOn);
    //   //     showSubscriptionPage.setDate(showSubscriptionPage.getDate() - 5);
    //   //     console.log(showSubscriptionPage);
    //   //     let dateDiff =
    //   //       planExpiryDate.getDate() - showSubscriptionPage.getDate();
    //   //     // if (todaysDate == showSubscriptionPage){
    //   //     // if (res.data.user.planExpiresOn == undefined) {
    //   //     //   this.spinner.hide();
    //   //     //   this.router.navigate(["/auth/subscription"]);
    //   //     this.UserDatacomplte = res.data.flag;
    //   //     if (!res.data.user.isSubscribed) {
    //   //       this.router.navigate(["/auth/subscription-end"]);
    //   //     }
    //   //     // }
    //   //     else {
    //   //       this.spinner.hide();
    //   //       console.log("Dashboard", this.UserDatacomplte);
    //   //       if (this.UserDatacomplte) {
    //   //         this.router.navigate(["/pages/dashboard"]);
    //   //         this.toastService.openSnackBar("Login Successfully");
    //   //       } else {
    //   //         this.toastService.openSnackBar("Fill All Required Fields");
    //   //         this.router.navigate(["/pages/profile-settings"]);
    //   //       }
    //   //     }
    //   //   },
    //   //   (err) => {
    //   //     console.log(err);
    //   //     if (err.error.status === 406) {
    //   //       this.toastService.openErrorSnackBar("User Not Verified.");
    //   //       this.successful = true;
    //   //       this.isLoginBtn = false;
    //   //       let data = {
    //   //         email: this.clientForm.controls.username.value,
    //   //       };
    //   //       this.isVerifyOtp = true;
    //   //       this.roleSignupService.sendRoleUsersOtp(data).then((data) => {});
    //   //     } else if (err.error.status == 404) {
    //   //       this.isLoginBtn = false;
    //   //       this.toastService.openErrorSnackBar(
    //   //         "User Not Found!!! Please Register Again!!!"
    //   //       );
    //   //     } else if (err.error.status == 404) {
    //   //       this.isLoginBtn = false;
    //   //       this.toastService.openErrorSnackBar("Invalid Credentials.");
    //   //     } else if (err.error.status == 401) {
    //   //       this.isLoginBtn = false;
    //   //       this.toastService.openErrorSnackBar(
    //   //         this.titleCasePipe.transform(err.error.error_message)
    //   //       );
    //   //     } else if (err.error.status == 400) {
    //   //       this.isLoginBtn = false;
    //   //       this.toastService.openErrorSnackBar(
    //   //         this.titleCasePipe.transform(err.error.error_message)
    //   //       );
    //   //     } else {
    //   //       this.isLoginBtn = false;
    //   //       this.toastService.openErrorSnackBar(
    //   //         "User Not Found Or Wrong password."
    //   //       );
    //   //     }
    //   //   }
    //   // );
    // }
    clientLogin() {
        let data = {
            email: this.clientForm.controls.username.value,
            password: this.clientForm.controls.password.value,
        };
        this.isLoginBtn = true;
        this.authService.login(data).subscribe((res) => {
            this.isLoginBtn = false;
            this.commonService.setIsArabicByCountryId(res.data.user.countryId);
            let planExpiryDate = new Date(res.data.user.planExpiresOn);
            let showSubscriptionPage = new Date(planExpiryDate);
            let todaysDate = new Date();
            // console.log(planExpiryDate);
            // console.log(res.data.user.planExpiresOn);
            showSubscriptionPage.setDate(showSubscriptionPage.getDate() - 5);
            // console.log(showSubscriptionPage);
            let dateDiff = planExpiryDate.getDate() - showSubscriptionPage.getDate();
            // if (todaysDate == showSubscriptionPage){
            // if (res.data.user.planExpiresOn == undefined) {
            //   this.spinner.hide();
            //   this.router.navigate(["/auth/subscription"]);
            this.UserDatacomplte = res.data.flag;
            if (!res.data.user.isSubscribed) {
                this.router.navigate(["/auth/subscription-end"]);
            }
            // }
            else {
                this.spinner.hide();
                console.log("After Logged In redirection", this.UserDatacomplte);
                if (this.UserDatacomplte) {
                    this.router.navigate(["/pages/dashboard"]);
                    this.toastService.openSnackBar("Login Successfully");
                }
                else {
                    this.toastService.openSnackBar("Fill All Required Fields");
                    this.router.navigate(["/pages/profile-settings"]);
                }
            }
        }, (err) => {
            console.log(err);
            if (err.error.status === 406) {
                this.toastService.openErrorSnackBar("User Not Verified.");
                this.successful = true;
                this.isLoginBtn = false;
                let data = {
                    email: this.clientForm.controls.username.value,
                };
                this.isVerifyOtp = true;
                this.roleSignupService.sendRoleUsersOtp(data).then((data) => { });
            }
            else if (err.error.status == 404) {
                this.isLoginBtn = false;
                this.toastService.openErrorSnackBar("User Not Found!!! Please Register Again!!!");
            }
            else if (err.error.status == 404) {
                this.isLoginBtn = false;
                this.toastService.openErrorSnackBar("Invalid Credentials.");
            }
            else if (err.error.status == 401) {
                this.isLoginBtn = false;
                this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
            }
            else if (err.error.status == 400) {
                this.isLoginBtn = false;
                this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
            }
            else {
                this.isLoginBtn = false;
                this.toastService.openErrorSnackBar("User Not Found Or Wrong password.");
            }
        });
    }
    /**
     * Customer OTP post method
     */
    sendOtp() {
        // this.spinner.show();
        let data = {
            mobile: this.custForm.controls.username.value,
        };
        this.isLoginBtn = true;
        this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "users/sendCustomerOtp", data)
            .subscribe((res) => {
            // this.spinner.hide();
            this.isLoginBtn = false;
            this.isOtpField = true;
        }, (err) => {
            // this.spinner.hide();
            this.isLoginBtn = false;
            this.toastService.openErrorSnackBar("Number Not Registered Or Invalid Number");
        });
    }
    /**
     * Customer Login and OTP verify
     */
    verifyOtp() {
        // this.spinner.show();
        this.isLoginBtn = true;
        let data = {
            mobile: this.custForm.controls.username.value,
            type: "1",
            mobileotp: this.custForm.controls.mobileOtp.value,
        };
        // this.http.post(environment.apiUrl + UrlConstants.verifyCustomerOtp, data)
        //   .subscribe(res => {
        //     if (res) {
        //       // this.spinner.hide();
        //       this.isLoginBtn = false;
        //       let data = {
        //         mobile: this.custForm.controls.username.value,
        //         mobileotp: this.custForm.controls.mobileOtp.value
        //       }
        this.authService.custLogin(data).subscribe((res) => {
            if (this.UserDatacomplte) {
                this.router.navigate(["pages/customer/customer-dashboard"]);
                this.toastService.openSnackBar("Login Successfully");
            }
            else {
                this.toastService.openSnackBar("Fill All Required Fields.");
                this.router.navigate(["pages/customer/customer-profile-setting"]);
            }
        });
        //   }
        // }, (err) => {
        //   // this.spinner.hide();
        //   this.isLoginBtn = false;
        //   this.toastService.openErrorSnackBar("Invalid Otp")
        // })
    }
    /**
     * Client OTP veify
     */
    verifyClientOtp() {
        // this.spinner.show();
        this.isLoginBtn = true;
        const data = {
            email: this.clientForm.controls.username.value,
            emailotp: this.otpClientData.controls.emailotp.value,
        };
        this.otpVerify.verifyCLientOtp(data).then(() => {
            this.isLoginBtn = false;
            // this.spinner.hide();
            this.isVerifyOtp = false;
        }, (err) => {
            this.isLoginBtn = false;
        });
    }
    /**
     * Customer Resend OTP
     */
    customerLoginResendOtp() {
        // this.spinner.show();
        this.isLoginBtn = true;
        let d = {
            mobile: this.custForm.controls.username.value,
        };
        this.loginService.postSendOtp(d).then((res) => {
            // this.spinner.hide();
            this.isLoginBtn = false;
            this.resend = res;
        }, (err) => {
            this.isLoginBtn = false;
        });
        this.messageSuccess = true;
        setTimeout(() => {
            //<<<---using ()=> syntax
            this.messageSuccess = false;
        }, 120000);
    }
    f() {
        console.log("this.custForm.controls", this.custForm.controls);
        return this.custForm.controls;
    }
    numberOnly(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_otp_verify_service__WEBPACK_IMPORTED_MODULE_4__.OtpVerifyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_role_signup_service__WEBPACK_IMPORTED_MODULE_5__.RoleSignupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_6__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.passwordInput = _t.first);
    } }, decls: 28, vars: 3, consts: [["bdOpacity", "1", "bdColor", "rgba(97,197,212,0.07)", "size", "medium", "color", "#dd4b39", "type", "ball-spin-clockwise", "fullScreen", "true"], [2, "color", "#61c5d4"], ["id", "top", 1, "main"], [1, ""], [1, "container-fluid", "row", "min-vh-100", "min-vw-100", "flex-center", "g-0"], [1, "col-sm-12", "col-md-12", "col-lg-10", "col-xl-8", "col-xxl-7", "py-3", "position-relative"], [1, "card", "overflow-hidden", "z-index-1"], [1, "card-body", "p-0"], [1, "row", "g-0", "h-100"], [1, "col-sm-12", "col-md-6", "col-lg-6", "bg-card-gradient"], [1, "position-relative", "pt-md-3", "pb-md-7", "light", 2, "padding-top", "150px !important"], [1, "z-index-1", "position-relative", "p-4"], [1, "mt-2", "d-flex"], ["src", "assets/img/icons/spot-illustrations/Logo-2.png", "alt", "iceipts logo", "width", "40", "height", "40", 2, "position", "absolute !important", "top", "-17% !important", "left", "45%"], ["src", "assets/img/icons/spot-illustrations/Logo-1.png", "alt", "iceipts logo", "width", "130", "height", "20", 2, "margin", "auto"], [1, "opacity-75", "text-white", "d-flex", "justify-content-center", "leftText"], [1, "col-sm-12", "col-md-6", "col-lg-6", "form-box"], ["class", "demo", 3, "hidden", 4, "ngIf"], ["class", "demo", 4, "ngIf"], [1, "demo", 3, "hidden"], ["mat-flat-button", "", 2, "color", "#8692A6", 3, "click"], [2, "font-family", "Poppins"], [3, "formGroup"], [1, "p-4", "flex-grow-1"], [1, "row", "flex-between-center"], [1, "col-12"], [2, "font-weight", "500", "color", "#000000", "font-family", "'Poppins', sans-serif", "font-size", "20px"], [1, "toggle-text", "col-12", "fs-0", "my-2"], [1, "mb-0", "undefined", 2, "font-family", "Poppins"], [1, "ml-8"], [2, "font-weight", "500", "color", "#FC7643", 3, "click"], [1, "top-line", "my-2", 2, "opacity", "20%"], [1, "mb-3"], ["for", "card-email", 1, "form-label", 2, "font-family", "Poppins"], ["id", "card-email", "type", "email", "placeholder", "Email Address", "required", "", "formControlName", "username", 1, "form-control", 3, "keydown.enter"], [1, "d-flex", "justify-content-between"], ["for", "card-password", 1, "form-label", 2, "font-family", "Poppins"], ["placeholder", "Password", "required", "", "id", "card-password", "formControlName", "password", 1, "form-control", 3, "type", "keyup.enter"], ["passwordInput", ""], [1, "form-control-feedback", 3, "click"], [1, "p-1", 3, "ngClass"], [1, "col-auto"], [1, "form-check", "mb-0"], ["type", "checkbox", "id", "card-checkbox", "checked", "checked", 1, "form-check-input"], ["for", "card-checkbox", 1, "form-check-label", "mb-0", 2, "font-family", "Poppins"], ["routerLink", "/auth/forget-password", 1, "fs--1", 2, "font-size", "10px!important", "font-family", "Poppins"], ["type", "button", 1, "login-btn", "d-block", "w-100", "mt-3", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "line-container"], [1, "top-line"], [1, "text", 2, "color", "#c4c4c4", "font-family", "Poppins"], [1, "bottom-line"], ["type", "button", 1, "btn-google", "d-block", "w-100", "mt-3"], ["src", "assets/img/login-img/Google__G__Logo.png", "alt", "", 2, "height", "6%", "width", "6%", "margin-right", "8px"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "toggle-text", "col-auto", "fs-0", "my-2", "text-900"], [1, "form-label", 2, "font-family", "Poppins", "margin-left", "5px"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "placeholder", "Enter phone number here...", "formControlName", "username", "minlength", "10", "maxLength", "10", "ngxOnlyNumbers", "", "autocomplete", "off", 3, "keyup.enter"], ["class", "mb-3 form-group", 4, "ngIf"], ["class", "login-btn d-block w-100 mt-3", "type", "button", 3, "disabled", "click", 4, "ngIf"], [1, "mb-3", "form-group"], ["for", "card-otp", 1, "form-label", 2, "font-family", "Poppins"], ["type", "password", "id", "card-otp", "formControlName", "mobileOtp", 1, "form-control", 3, "keypress", "keyup.enter"], [1, "col-auto", "text-center"], ["type", "button", 1, "btn", "btn-link", "fs--2", 2, "border", "none", 3, "disabled", "click"], [1, "login-btn", "d-block", "w-100", "mt-3", 3, "disabled", "click"], [1, "demo"], ["class", "alert alert-success mb-5", "role", "alert", "style", "font-family: 'Poppins';", 4, "ngIf"], [1, "row", "gx-2"], [1, "mb-3", "col-sm-12"], ["formControlName", "emailotp", "type", "text", "id", "card-email", 1, "form-control", 3, "keypress"], ["type", "submit", "name", "submit", 1, "login-btn", "d-block", "w-100", "mt-3", 3, "disabled", "click"], [1, "text-decoration-underline", "mt-3", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "mb-5", 2, "font-family", "Poppins"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Loading..");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " The technology that looks impossible today will");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "be part of our life tomorrow. Iceipts technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "creating difference. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 54, 6, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 35, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, LoginComponent_div_27_Template, 19, 5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.CustLogintoggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.CustLogintoggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isVerifyOtp);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins&display=swap\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n.main[_ngcontent-%COMP%] {\n  height: 90vh;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.demo[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 181px 73px rgba(0, 0, 0, 0.01), 0px 102px 61px rgba(0, 0, 0, 0.05), 0px 45px 45px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);\n  margin: 8%;\n}\n.form-control-feedback[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 6px;\n  margin-top: -30px;\n  position: relative;\n  z-index: 2;\n}\np.italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.password-div[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-div[_ngcontent-%COMP%]   .eye-b[_ngcontent-%COMP%] {\n  color: #ccc;\n  position: absolute;\n  top: 9px;\n  right: 10px;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.bg-card-gradient[_ngcontent-%COMP%] {\n  height: 600px;\n  background-size: contain;\n  background-position: center center;\n  max-width: 100% !important;\n  background: linear-gradient(0deg, rgba(17, 1, 82, 0.7), rgba(17, 1, 82, 0.7)), url('8.png');\n}\n.form-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.startQuote[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n.endQuote[_ngcontent-%COMP%] {\n  margin-right: 5%;\n}\n.leftText[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (min-width: 2000px) {\n  .leftText[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n@media (max-width: 992px) {\n  .leftText[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n}\n@media (width: 768px) {\n  .form-box[_ngcontent-%COMP%] {\n    transform: translateX(200px);\n  }\n}\n@media (max-width: 768px) {\n  .main[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .bg-card-gradient[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 350px;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .form-box[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin: 24px 0px;\n  }\n\n  .startQuote[_ngcontent-%COMP%] {\n    margin-left: 15%;\n  }\n\n  .endQuote[_ngcontent-%COMP%] {\n    margin-right: 15%;\n  }\n}\n@media (max-width: 600px) {\n  .startQuote[_ngcontent-%COMP%] {\n    margin-left: 8% !important;\n  }\n\n  .endQuote[_ngcontent-%COMP%] {\n    margin-right: 8% !important;\n  }\n}\n@media (max-width: 500px) {\n  .startQuote[_ngcontent-%COMP%] {\n    margin-left: 0% !important;\n  }\n\n  .endQuote[_ngcontent-%COMP%] {\n    margin-right: 0% !important;\n  }\n}\n@media (max-width: 250px) {\n  .bg-card-gradient[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 400px;\n    justify-content: center;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9RLDRFQUFBO0FBRVI7RUFDRSxrQ0FBQTtBQVBGO0FBVUE7RUFDRSxZQUFBO0FBUEY7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVVBO0VBQ0UsbUJBQUE7RUFDQSx1TEFBQTtFQUVBLFVBQUE7QUFSRjtBQVdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFSSjtBQVdBO0VBQ0ksa0JBQUE7QUFSSjtBQVdBO0VBQ0ksa0JBQUE7QUFSSjtBQVNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFQUjtBQVVBO0VBQ0ksYUFBQTtBQVBKO0FBU0UsZ0NBQUE7QUFDRjs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFORjtBQVNBLFlBQUE7QUFDQTtFQUNFLDBCQUFBO0FBTkY7QUFjQTtFQU1FLGFBQUE7RUFDQSx3QkFBQTtFQUNELGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSwyRkFBQTtBQWhCRDtBQW9CQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBakJGO0FBb0JBO0VBQ0UsZUFBQTtBQWpCRjtBQW9CQTtFQUNFLGdCQUFBO0FBakJGO0FBb0JBO0VBQ0Usa0JBQUE7QUFqQkY7QUFzQkE7RUFFRTtJQUNFLDBCQUFBO0VBcEJGO0FBQ0Y7QUF1QkE7RUFFRTtJQUNFLDBCQUFBO0VBdEJGO0FBQ0Y7QUF5QkE7RUFFRTtJQUNFLDRCQUFBO0VBeEJGO0FBQ0Y7QUE0QkE7RUFDRTtJQUNHLFdBQUE7RUExQkg7O0VBNkJBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBMUJGOztFQTZCQTtJQUNFLHVCQUFBO0lBQ0EsZ0JBQUE7RUExQkY7O0VBNkJBO0lBQ0UsZ0JBQUE7RUExQkY7O0VBNkJBO0lBQ0UsaUJBQUE7RUExQkY7QUFDRjtBQStCQTtFQUNFO0lBQ0UsMEJBQUE7RUE3QkY7O0VBZ0NBO0lBQ0UsMkJBQUE7RUE3QkY7QUFDRjtBQWdDQTtFQUNFO0lBQ0UsMEJBQUE7RUE5QkY7O0VBaUNBO0lBQ0UsMkJBQUE7RUE5QkY7QUFDRjtBQWtDQTtFQUVFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBakNGO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogMjBweDtcclxuLy8gICAgIGxlZnQ6IDIwcHg7XHJcbi8vICAgICB0b3A6IDMwcHg7XHJcbi8vIH1cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgaGVpZ2h0Ojkwdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRlbW8ge1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDE4MXB4IDczcHggcmdiYSgwLCAwLCAwLCAwLjAxKSwgMHB4IDEwMnB4IDYxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMHB4IDQ1cHggNDVweCByZ2JhKDAsIDAsIDAsIDAuMDkpLCAwcHggMTFweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC8vIG1hcmdpbjogNTBweCA1MHB4IDUwcHggNTBweCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOjglO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5wLml0YWxpYyB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1kaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmV5ZS1iIHtcclxuICAgICAgICBjb2xvcjogI2NjYztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpXHJcbi8vIC5mb3JtLWJveHtcclxuLy8gICAgIHdpZHRoOiA0MiU7XHJcbi8vIH1cclxuXHJcbi5iZy1jYXJkLWdyYWRpZW50e1xyXG5cclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIC8vIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIC8vIHdpZHRoOjQ4LjglO1xyXG4gIGhlaWdodDo2MDBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcclxuIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiBtYXgtd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTcsIDEsIDgyLCAwLjcpLCByZ2JhKDE3LCAxLCA4MiwgMC43KSksIHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luLWltZy84LnBuZyk7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXJ0UXVvdGUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmVuZFF1b3RlIHtcclxuICBtYXJnaW4tcmlnaHQ6NSU7XHJcbn1cclxuXHJcbi5sZWZ0VGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAyMDAwcHgpe1xyXG5cclxuICAubGVmdFRleHQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xyXG5cclxuICAubGVmdFRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKHdpZHRoOiA3NjhweCl7XHJcblxyXG4gIC5mb3JtLWJveCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYWluIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5iZy1jYXJkLWdyYWRpZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjM1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tYm94IHtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBtYXJnaW46IDI0cHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN0YXJ0UXVvdGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICB9XHJcblxyXG4gIC5lbmRRdW90ZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnN0YXJ0UXVvdGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDglICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZW5kUXVvdGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLnN0YXJ0UXVvdGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZW5kUXVvdGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAyNTBweCkge1xyXG5cclxuICAuYmctY2FyZC1ncmFkaWVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDo0MDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 28564:
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutComponent": function() { return /* binding */ LogoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class LogoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(); };
LogoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 33, vars: 0, consts: [["id", "top", 1, "main"], [1, "container-fluid"], [1, "row", "min-vh-100", "flex-center", "g-0"], [1, "col-lg-8", "col-xxl-5", "py-3", "position-relative"], [1, "card", "overflow-hidden", "z-index-1"], [1, "card-body", "p-0"], [1, "row", "g-0", "h-100"], [1, "col-md-5", "text-center", "bg-card-gradient"], [1, "position-relative", "p-4", "pt-md-5", "pb-md-7", "light"], [1, "z-index-1", "position-relative"], [1, "opacity-75", "text-white"], [1, "mt-3", "mb-4", "mt-md-4", "mb-md-5", "light"], [1, "mb-0", "mt-4", "mt-md-5", "fs--1", "fw-semi-bold", "text-white", "opacity-75"], [1, "text-decoration-underline", "text-white"], [1, "col-md-7", "d-flex", "flex-center"], [1, "p-4", "p-md-5", "flex-grow-1"], [1, "text-center"], ["src", "assets/img/icons/spot-illustrations/new-logo-iceipt.png", "alt", "shield", "width", "100", 1, "d-block", "mx-auto", "mb-4"], ["href", "#/auth/login", 1, "btn", "btn-primary", "btn-sm", "mt-3"], ["data-fa-transform", "shrink-4 down-1", 1, "fas", "fa-chevron-left", "me-1"]], template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Effortlessly efficient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Read our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "conditions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "See you again!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Thanks for using iCeipts. You are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "now successfully signed out.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Return to Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 86499:
/*!*****************************************************************!*\
  !*** ./src/app/auth/password-reset/password-reset.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetComponent": function() { return /* binding */ PasswordResetComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);


class PasswordResetComponent {
    constructor() { }
    ngOnInit() {
    }
}
PasswordResetComponent.ɵfac = function PasswordResetComponent_Factory(t) { return new (t || PasswordResetComponent)(); };
PasswordResetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordResetComponent, selectors: [["app-password-reset"]], decls: 41, vars: 0, consts: [["id", "top", 1, "main"], [1, "container-fluid"], [1, "row", "min-vh-100", "flex-center", "g-0"], [1, "col-lg-8", "col-xxl-5", "py-3", "position-relative"], ["src", "../../../assets/img/icons/spot-illustrations/bg-shape.png", "alt", "", "width", "250", 1, "bg-auth-circle-shape"], ["src", "../../../assets/img/icons/spot-illustrations/shape-1.png", "alt", "", "width", "150", 1, "bg-auth-circle-shape-2"], [1, "card", "overflow-hidden", "z-index-1"], [1, "card-body", "p-0"], [1, "row", "g-0", "h-100"], [1, "col-sm-12", "col-md-7", "col-lg-7", "bg-card-gradient", 2, "display", "flex", "align-items", "stretch", "width", "48.8%", "height", "700px", "background-size", "contain", "background-position", "center center", "background", "linear-gradient(0deg, rgba(17, 1, 82, 0.7), rgba(17, 1, 82, 0.7)), url(../../../assets/img/login-img/8.png)"], [1, "position-relative", "p-3"], [1, "z-index-1", "position-relative", "p-3"], [1, "mt-3", "d-flex"], ["src", "assets/img/icons/spot-illustrations/new-logo-iceipt.png", "alt", "iceipts logo", "width", "80", "height", "80"], [1, "fas", "fa-quote-left", "d-flex", "mt-5", 2, "color", "#00DAF7"], [1, "opacity-75", "text-white", "d-flex", "justify-content-start"], [1, "opacity-75", "text-white", "d-flex"], [1, "col-md-7", "d-flex", "flex-center", 2, "width", "50%"], [1, "p-4", "p-md-5", "flex-grow-1", "form-body"], [2, "font-size", "26px"], [1, "mt-3"], [1, "mb-3"], ["for", "card-reset-password", 1, "form-label"], ["type", "password", "id", "card-reset-password", 1, "form-control"], ["for", "card-reset-confirm-password", 1, "form-label"], ["type", "password", "id", "card-reset-confirm-password", 1, "form-control"], ["type", "submit", "name", "submit", 1, "btn", "btn-primary", "d-block", "w-100", "mt-3", 2, "background", "#110152"]], template: function PasswordResetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " The technology that looks impossible today will");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "be part of our life tomorrow. Iceipts technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "creating difference. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sibanee kar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Reset password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Set password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: [".form-body[_ngcontent-%COMP%] {\n  display: flexbox;\n  justify-content: center;\n  background: #FFFFFF;\n  margin: 10%;\n  box-shadow: 0px 181px 73px rgba(0, 0, 0, 0.01), 0px 102px 61px rgba(0, 0, 0, 0.05), 0px 45px 45px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLXJlc2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVGLHVMQUFBO0FBQUYiLCJmaWxlIjoicGFzc3dvcmQtcmVzZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXhib3g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW46IDEwJTtcclxuXHJcbiAgYm94LXNoYWRvdzogMHB4IDE4MXB4IDczcHggcmdiYSgwLCAwLCAwLCAwLjAxKSwgMHB4IDEwMnB4IDYxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMHB4IDQ1cHggNDVweCByZ2JhKDAsIDAsIDAsIDAuMDkpLCAwcHggMTFweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLy8gICBtYXJnaW46IDBweCAwcHggMHB4IDUwcHghaW1wb3J0YW50O1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 84055:
/*!*******************************************************************!*\
  !*** ./src/app/auth/payment-failure/payment-failure.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentFailureComponent": function() { return /* binding */ PaymentFailureComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_payumoney_payment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/payumoney-payment.service */ 79542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);



class PaymentFailureComponent {
    constructor(payumoneyPaymentService, router) {
        this.payumoneyPaymentService = payumoneyPaymentService;
        this.router = router;
    }
    ngOnInit() {
        this.getPayment();
        this.postPayment();
    }
    getPayment() {
        this.payumoneyPaymentService.getPaymentSuccess({}).then((res) => {
            this.router.navigate(['/auth/payment-failure']);
        });
    }
    postPayment() {
        this.payumoneyPaymentService.postPaymentSuccess({}).then((res) => {
            this.router.navigate(['/auth/payment-failure']);
        });
    }
}
PaymentFailureComponent.ɵfac = function PaymentFailureComponent_Factory(t) { return new (t || PaymentFailureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_payumoney_payment_service__WEBPACK_IMPORTED_MODULE_0__.PayumoneyPaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
PaymentFailureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentFailureComponent, selectors: [["app-payment-failure"]], decls: 16, vars: 0, consts: [["id", "top", 1, "main"], [1, "container-fluid", "p-4"], [1, "container"], [1, "row"], [1, "col-md-6", "mx-auto", "mt-5"], [1, "payment"], [1, "payment_header"], [1, "check"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], [1, "content"], ["routerLink", "/auth/subscription"]], template: function PaymentFailureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Opps ! Something Went Wrong ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Transaction Failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Go to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".payment[_ngcontent-%COMP%] {\n  height: 280px;\n  border-radius: 20px;\n  background: #fff;\n}\n\n.container[_ngcontent-%COMP%] {\n  top: 30px;\n}\n\n.payment_header[_ngcontent-%COMP%] {\n  background: #f01b1b;\n  padding: 20px;\n  border-radius: 20px 20px 0px 0px;\n}\n\n.check[_ngcontent-%COMP%] {\n  margin: -10px auto;\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  background: #fff;\n  text-align: center;\n}\n\n.check[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  line-height: 50px;\n  font-size: 30px;\n}\n\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  top: 30px;\n}\n\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-top: 25px;\n}\n\n.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 35px;\n  color: #fff;\n  border-radius: 30px;\n  padding: 5px 10px;\n  background: #D8000C;\n  transition: all ease-in-out 0.3s;\n}\n\n.content1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 35px;\n  color: #fff;\n  border-radius: 30px;\n  padding: 5px 10px;\n  background: #D8000C;\n  transition: all ease-in-out 0.3s;\n}\n\n.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZmFpbHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJwYXltZW50LWZhaWx1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5bWVudCB7XHJcbiAgICAvLyAgYm9yZGVyOiAxcHggc29saWQgI2YwMWIxYjtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB0b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5wYXltZW50X2hlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjAxYjFiO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uY2hlY2sge1xyXG4gICAgbWFyZ2luOiAtMTBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrIGkge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IDMwcHhcclxufVxyXG5cclxuLmNvbnRlbnQgaDEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250ZW50IGEge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDgwMDBDO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuM3M7XHJcbn1cclxuXHJcbi5jb250ZW50MSBhIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Q4MDAwQztcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjNzO1xyXG59XHJcblxyXG4uY29udGVudCBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 47756:
/*!*****************************************************************************!*\
  !*** ./src/app/auth/payment-subscription/payment-subscription.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSubscriptionComponent": function() { return /* binding */ PaymentSubscriptionComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/constant */ 22336);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ 62230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_payumoney_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/payumoney-payment.service */ 79542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var src_app_core_services_subscription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/subscription.service */ 43525);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);












function PaymentSubscriptionComponent_tbody_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, feature_r2.featureName));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](feature_r2.price);
} }
function PaymentSubscriptionComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.submitObj.key = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.submitObj.txnId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function PaymentSubscriptionComponent_div_39_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.setHash(); })("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.planName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function PaymentSubscriptionComponent_div_39_Template_input_keyup_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.setHash(); })("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.totalAmount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function PaymentSubscriptionComponent_div_39_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.setHash(); })("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.submitObj.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function PaymentSubscriptionComponent_div_39_Template_input_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.setHash(); })("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.submitObj.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function PaymentSubscriptionComponent_div_39_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.setHash(); })("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.submitObj.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.submitObj.surl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.submitObj.furl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function PaymentSubscriptionComponent_div_39_Template_input_keyup_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.setHash(); })("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.submitObj.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.submitObj.udf1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.submitObj.udf2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.submitObj.udf3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentSubscriptionComponent_div_39_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.submitObj.hash = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.submitObj.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.submitObj.txnId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.planName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.totalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.submitObj.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.submitObj.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.submitObj.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.submitObj.surl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.submitObj.furl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.submitObj.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.submitObj.udf1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.submitObj.udf2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.submitObj.udf3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.submitObj.hash);
} }
class PaymentSubscriptionComponent {
    constructor(paymentService, httpClient, subscriptionService, route, router, toastService) {
        this.paymentService = paymentService;
        this.httpClient = httpClient;
        this.subscriptionService = subscriptionService;
        this.route = route;
        this.router = router;
        this.toastService = toastService;
        this.url = src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__.Constants.url; //"https://secure.payu.in/_payment"//
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.basicId = +params.get('id');
            this.subscriptionPaymentId = +params.get('paymentId');
            this.userSubscriptionId = +params.get('userSubsId');
        });
        this.getAllSubscriptionPlans(this.basicId);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    /**
     * Set Payment form Data
     * @param planName
     * @param totalAmount
     */
    setPaymentFormData(planName, totalAmount) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let obj = {
                key: "oZ7oo9",
                txnId: uuid__WEBPACK_IMPORTED_MODULE_7__.default(),
                productinfo: planName,
                amount: totalAmount,
                surl: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + "subscription/pay",
                furl: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + "subscription/pay",
                phone: "1234567890",
                hash: "",
                udf1: String(this.currentUser.id),
                udf2: String(this.userSubscriptionId),
                udf3: String(this.subscriptionPaymentId),
                udf4: "",
                udf5: "",
                email: this.currentUser.email,
                firstName: this.currentUser.firstName,
                lastName: this.currentUser.lastName
            };
            this.submitObj = obj;
            console.log("submit OBJ", this.submitObj);
            yield this.setHash();
        });
    }
    /**
     * Set Hash code
     */
    setHash() {
        this.subscriptionService.getPaymentHash(this.submitObj, "").then((res) => {
            this.submitObj.hash = res;
        });
        // this.submitObj.hash = "0d3f15771316a9b2fc2ff3a52305279dd3792a6078db05108c01b893ba619f87aa32e34df0275bc5528d1029a9473070cb5a108205efbef39f895439306757eb"
    }
    getPayment() {
        this.paymentService.getPaymentSuccess({}).then((res) => {
            this.router.navigate(['/auth/payment-success']);
        });
    }
    //get all main plans
    getAllSubscriptionPlans(basicId) {
        this.planName;
        this.subscriptionService.getPlansById({}, basicId).then((res) => {
            this.data = res;
            this.planArray = res.data;
            this.description = res.data.description;
            this.planName = res.data.planName;
            this.totalAmount = res.data.total_amount;
            this.validity = res.data.validity;
            this.features = res.data.features;
            this.setPaymentFormData(this.planName, this.totalAmount);
        });
    }
    pay() {
        this.router.navigate[('/pages')];
    }
    onSuccessPayment(response) {
        this.toastService.openSnackBar("Success Payment" + " " + response);
        if (response.url) {
            // Render PayUmoney payment gateway page
            window.location.href = response.url;
        }
    }
    onFailurePayment(error) {
        this.toastService.openSnackBar("Failure Payment" + " " + error);
    }
}
PaymentSubscriptionComponent.ɵfac = function PaymentSubscriptionComponent_Factory(t) { return new (t || PaymentSubscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_payumoney_payment_service__WEBPACK_IMPORTED_MODULE_2__.PayumoneyPaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_subscription_service__WEBPACK_IMPORTED_MODULE_3__.SubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__.ToastNotificationService)); };
PaymentSubscriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PaymentSubscriptionComponent, selectors: [["app-payment-subscription"]], decls: 152, vars: 7, consts: [["id", "top", 1, "main"], [1, "container-fluid", "p-4"], [1, "card", "my-3"], [1, "bg-holder", "d-none", "d-lg-block", "bg-card", 2, "background-image", "url(../../assets/img/icons/spot-illustrations/corner-4.png)"], [1, "card-body", "position-relative"], [1, "row"], [1, "col-lg-8"], [1, "fs--1"], [1, "justify-content-start"], [1, "mt-2", "fs--1"], [1, "table", "fs--1"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "row", "g-3", "mb-3"], [1, "col-md-12", "text-center"], [1, "card", "h-100", "bg-light", "text-dark"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], ["ngNoForm", "", "method", "post", 3, "action"], [4, "ngIf"], [1, "col-lg-4"], [1, "card", "h-100"], [1, "card-body", "bg-light"], ["aria-label", "Default select example", 1, "form-select", "mb-3"], ["selected", ""], ["value", "1"], [1, "d-flex", "justify-content-between", "fs--1", "mb-1"], [1, "d-flex", "justify-content-between", "fs--1", "mb-1", "text-success"], [1, "d-flex", "justify-content-between"], [1, "fs--1", "text-600"], ["type", "submit", 1, "btn", "btn-primary", "d-block", "w-100"], [1, "fa", "fa-lock", "me-2"], [1, "text-center", "mt-2"], [1, "d-inline-block"], ["href", "#!"], [1, "card"], [1, "card-body", "bg-light", "pb-0"], [1, "col-lg-6"], [1, "fs-0"], [1, "card-footer", "py-3"], [1, "text-center"], [1, "fs-0", "fw-normal"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-falcon-primary", "btn-sm"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", "border-0"], [1, "modal-header", "bg-card-gradient", "light"], ["id", "exampleModalLabel", 1, "modal-title", "text-white"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-white", "text-white"], [1, "modal-body"], [1, "mb-3"], ["for", "name"], ["id", "name", "type", "text", 1, "form-control"], ["for", "emailModal"], ["id", "emailModal", "type", "email", 1, "form-control"], ["for", "question"], ["id", "question", "rows", "4", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "px-4"], ["aria-hidden", "true", 1, "fas", "fa-paper-plane", "me-2"], ["scope", "row"], ["type", "hidden", "name", "key", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "txnid", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "productinfo", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["type", "text", "name", "amount", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["type", "text", "name", "email", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["type", "text", "name", "firstname", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["type", "text", "name", "lastname", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["type", "text", "name", "surl", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "furl", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "phone", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["type", "text", "name", "udf1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "udf2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "udf3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter Number", "type", "text", "name", "hash", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Pay", 1, "btn", "btn-primary", "mt-3"]], template: function PaymentSubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "My Plan Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, PaymentSubscriptionComponent_tbody_27_Template, 9, 5, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Payment Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, PaymentSubscriptionComponent_div_39_Template, 16, 14, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Monthly Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Annual Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Due in 30 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "$375.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Annual saving");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "$75.00/yr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Due today");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "$0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Once you start your trial, you will have 30 days to use Falcon Premium for free. After 30 days you\u2019ll be charged based on your selected plan.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Start free trial");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "small", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "By continuing, you are agreeing to our subscriber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, " and will be charged at the end of the trial. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Frequently asked questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "How does Falcon's pricing work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, " The free version of Falcon is available for teams of up to 15 people. Our Falcon Premium plans of 15 or fewer qualify for a small team discount. As your team grows to 20 users or more and gets more value out of Falcon, you'll get closer to our standard monthly price per seat. The price of a paid Falcon plan is tiered, starting in groups of 5 and 10 users, based on the number of people you have in your Team or Organization. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "What forms of payment do you accept?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, " You can purchase Falcon with any major credit card. For annual subscriptions, we can issue an invoice payable by bank transfer or check. Please contact us to arrange an invoice purchase. Monthly purchases must be paid for by credit card. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, " We need to add more people to our team. How will that be billed? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, " You can add as many new teammates as you need before changing your subscription. We will subsequently ask you to correct your subscription to cover current usage. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "How secure is Falcon?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, " Protecting the data you trust to Falcon is our first priority. Falcon uses physical, procedural, and technical safeguards to preserve the integrity and security of your information. We regularly back up your data to prevent data loss and aid in recovery. Additionally, we host data in secure SSAE 16 / SOC1 certified data centers, implement firewalls and access restrictions on our servers to better protect your information, and work with third party security researchers to ensure our practices are secure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Will I be charged sales tax?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, " As of May 2016, state and local sales tax will be applied to fees charged to customers with a billing address in the State of New York. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "Do you offer discounts?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, " We've built in discounts at each tier for teams smaller than 15 members. We also offer two months for free in exchange for an annual subscription. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "Do you offer academic pricing?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, " We're happy to work with student groups using Falcon. Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "Is there an on-premise version of Falcon?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, " We are passionate about the web. We don't plan to offer an internally hosted version of Falcon. We hope you trust us to provide a robust and secure service so you can do the work only your team can do. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "What is your refund policy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, " We do not offer refunds apart from exceptions listed below. If you cancel your plan before the next renewal cycle, you will retain access to paid features until the end of your subscription period. When your subscription expires, you will lose access to paid features and all data associated with those features. Exceptions to our refund policy: canceling within 48 hours of initial charge will result in a full refund. If you cancel within this timeframe, you will lose access to paid features and associated data immediately upon canceling. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "h6", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, "Have more questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "Ask us anything");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "h5", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, " Ask your question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](134, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](140, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](143, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](144, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](148, "textarea", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](150, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](151, "Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Current Plan - ", ctx.planName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Validity - ", ctx.validity, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Description - ", ctx.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.features);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Grand Total - ", ctx.totalAmount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("action", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitObj != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LXN1YnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 96470:
/*!*******************************************************************!*\
  !*** ./src/app/auth/payment-success/payment-success.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSuccessComponent": function() { return /* binding */ PaymentSuccessComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_payumoney_payment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/payumoney-payment.service */ 79542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);




function PaymentSuccessComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Go to Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PaymentSuccessComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Continue Shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PaymentSuccessComponent {
    constructor(payumoneyPaymentService, router) {
        this.payumoneyPaymentService = payumoneyPaymentService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUserDetails = this.currentUser;
    }
    ngOnInit() {
    }
    printAndOpenReceipt() {
        // let url =  this.router.navigate(['/pages/print-receipt'])
        window.open('/#/auth/print-receipt');
    }
}
PaymentSuccessComponent.ɵfac = function PaymentSuccessComponent_Factory(t) { return new (t || PaymentSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_payumoney_payment_service__WEBPACK_IMPORTED_MODULE_0__.PayumoneyPaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
PaymentSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentSuccessComponent, selectors: [["app-payment-success"]], decls: 21, vars: 2, consts: [["id", "top", 1, "main"], [1, "container-fluid", "p-4"], ["href", "https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap", "rel", "stylesheet"], [1, "card"], [2, "border-radius", "200px", "height", "200px", "width", "200px", "background", "#F8FAF5", "margin", "0 auto"], [1, "checkmark"], [1, "text-center", "m-4"], [1, "btn", "btn-block", "btn-success", 3, "click"], ["class", "text-center m-4", 4, "ngIf"], ["routerLink", "/pages/dashboard", "routerLinkActive", "router-link-active", 1, "btn", "btn-block", "btn-success"], ["routerLink", "/pages/customer/customer-dashboard", "routerLinkActive", "router-link-active", 1, "btn", "btn-block", "btn-success"]], template: function PaymentSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u2713");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Payment done successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Thank you!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentSuccessComponent_Template_button_click_17_listener() { return ctx.printAndOpenReceipt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Print Receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PaymentSuccessComponent_div_19_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PaymentSuccessComponent_div_20_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentUserDetails.userType == "CLIENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentUserDetails.userType != "CLIENT");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */", "body[_ngcontent-%COMP%] {\n                text-align: center;\n                padding: 40px 0;\n                background: #EBF0F5;\n            }\n\n            h1[_ngcontent-%COMP%] {\n                color: #88B04B;\n                font-family: \"Nunito Sans\", \"Helvetica Neue\", sans-serif;\n                font-weight: 900;\n                font-size: 40px;\n                margin-bottom: 10px;\n            }\n\n            p[_ngcontent-%COMP%] {\n                color: #404F5E;\n                font-family: \"Nunito Sans\", \"Helvetica Neue\", sans-serif;\n                font-size: 20px;\n                margin: 0;\n            }\n\n            i[_ngcontent-%COMP%] {\n                color: #9ABC66;\n                font-size: 100px;\n                line-height: 200px;\n                margin-left: -15px;\n            }\n\n            .card[_ngcontent-%COMP%] {\n                background: white;\n                padding: 60px;\n                border-radius: 4px;\n                box-shadow: 0 2px 3px #C8D0D8;\n                display: inline-block;\n                margin: 0 auto;\n            }"] });


/***/ }),

/***/ 37950:
/*!***************************************************************!*\
  !*** ./src/app/auth/print-receipt/print-receipt.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintReceiptComponent": function() { return /* binding */ PrintReceiptComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PrintReceiptComponent {
    constructor() { }
    ngOnInit() {
    }
    onPrint() {
        const printContents = document.getElementById('panel').innerHTML;
        const originalContents = document.body.innerHTML;
        //document.body.innerHTML = printContents;
        window.print();
        //document.body.innerHTML = originalContents;
        //let printContent = document.getElementById("panel");
        // const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        //WindowPrt.document.write(printContent.innerHTML);
        // WindowPrt.document.close();
        // WindowPrt.focus();
        // window.document.write(printContent.innerHTML)
        //window.print();
        // WindowPrt.close();
    }
}
PrintReceiptComponent.ɵfac = function PrintReceiptComponent_Factory(t) { return new (t || PrintReceiptComponent)(); };
PrintReceiptComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintReceiptComponent, selectors: [["app-print-receipt"]], decls: 168, vars: 0, consts: [[1, "container"], [1, "card", "mb-3"], [1, "card-body"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-md"], [1, "mb-2", "mb-md-0"], [1, "col-auto"], ["type", "button", 1, "btn", "btn-falcon-default", "btn-sm", "me-1", "mb-2", "mb-sm-0"], [1, "fas", "fa-arrow-down", "me-1"], ["type", "button", 1, "btn", "btn-falcon-default", "btn-sm", "me-1", "mb-2", "mb-sm-0", 3, "click"], [1, "fas", "fa-print", "me-1"], ["type", "button", 1, "btn", "btn-falcon-success", "btn-sm", "mb-2", "mb-sm-0"], [1, "fas", "fa-dollar-sign", "me-1"], ["id", "panel", 1, "card", "mb-3"], [1, "row", "align-items-center", "text-center", "mb-3"], [1, "col", "text-sm-center", "mt-3", "mt-sm-0"], [1, "mb-3"], [1, "fs--1", "mb-0"], [1, "col-12"], [1, "row", 2, "padding-left", "16px", "padding-right", "16px"], [1, "col-sm-4", "col-lg-4", "col-md-4", "border", "shadow-none", "p-0"], [1, "bg-primary", "text-white", "p-1"], [1, "p-3"], [1, "col-sm-4", "col-lg-4", "col-md-4", "border", "p-0"], [1, "table-responsive", "scrollbar", "mt-4", "fs--1"], [1, "table", "table-striped", "border-bottom"], [1, "light"], [1, "bg-primary", "text-white", "dark__bg-1000"], [1, "border-0"], [1, "border-0", "text-center"], [1, "border-0", "text-end"], [1, "align-middle"], [1, "mb-0", "text-nowrap"], [1, "mb-0"], [1, "align-middle", "text-center"], [1, "align-middle", "text-end"], [1, "row"], [1, "col-sm-6", "col-md-6", "col-lg-6"], [1, "table-responsive", "scrollbar", "fs--1"], [1, "table", "table-striped"], [1, "d-flex", "justify-content-between"], [1, "card-footer", "bg-light"]], template: function PrintReceiptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order #AD20294");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Download (.pdf)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintReceiptComponent_Template_button_click_11_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Receive Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tax Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Falcon Design Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "156 University Ave, Toronto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "On, Canada, M5H 2H7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Bill To.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " M/S OM KISHAN MANDIRA BAGICHA PARA, KHATA NO. 189/1832, MADAN MOHAN PARA, MAIN ROAD, BHAWANIPATNA, ODISHA-766001 Contact No.: 7008352006 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Ship To.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " MANDIRA BAGICHA PARA, KHATA NO. 189/1832, MADAN MOHAN PARA, MAIN ROAD, BHAWANIPATNA, ODISHA-766001 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Place of Supply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 21-Odisha Invoice No.: 211001 Date: 06-10-2021 E-way Bill number: 871182745856 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "thead", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Platinum web hosting package");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Down 35mb, Up 100mb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "$65.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "$130.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "2 Page website design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Includes basic wireframes and responsive templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "$2,100.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "$2,100.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Mobile App Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Includes responsive navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "$5,00.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "$4,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Web App Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Includes react spa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "$2,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "$12,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "thead", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Tax Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Taxable Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Tax Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "SGST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "$65.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "2.5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "$130.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "CGST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "$65.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "2.5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "$130.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "$650");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "$650");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "$650");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "$650");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Notes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "We really appreciate your business and if there\u2019s anything else we can do, please let us know!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmludC1yZWNlaXB0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 38133:
/*!********************************************************************************!*\
  !*** ./src/app/auth/role-selection/role-selection/role-selection.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleSelectionComponent": function() { return /* binding */ RoleSelectionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/login.service */ 91315);
/* harmony import */ var src_app_core_services_otp_verify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/otp-verify.service */ 42558);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var src_app_core_services_role_signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/role-signup.service */ 9954);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 85991);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 52529);












class RoleSelectionComponent {
    // CustLogintoggle: boolean;
    constructor(router, fb, authService, loginService, otpVerify, http, roleSignupService, spinner, titleCasePipe) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.loginService = loginService;
        this.otpVerify = otpVerify;
        this.http = http;
        this.roleSignupService = roleSignupService;
        this.spinner = spinner;
        this.titleCasePipe = titleCasePipe;
    }
    ngOnInit() {
    }
    onCustomerClick() {
        this.router.navigate(['/auth/login'], { queryParams: { CustLogintoggle: 'true' } });
    }
    onRetailerClick() {
        this.router.navigate(['/auth/login'], { queryParams: { CustLogintoggle: 'false' } });
    }
    onEmployeeClick() {
        this.router.navigate(['/auth/login-employee'], { queryParams: { CustLogintoggle: 'false' } });
    }
}
RoleSelectionComponent.ɵfac = function RoleSelectionComponent_Factory(t) { return new (t || RoleSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_otp_verify_service__WEBPACK_IMPORTED_MODULE_2__.OtpVerifyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_role_signup_service__WEBPACK_IMPORTED_MODULE_3__.RoleSignupService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe)); };
RoleSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RoleSelectionComponent, selectors: [["app-role-selection"]], decls: 103, vars: 0, consts: [["bdOpacity", "1", "bdColor", "rgba(97,197,212,0.07)", "size", "medium", "color", "#dd4b39", "type", "ball-spin-clockwise", "fullScreen", "true"], [2, "color", "#61c5d4"], ["id", "top", 1, "main"], [1, "container-fluid"], [1, "row", "min-vh-100", "min-vw-100", "flex-center", "g-0"], [1, "col-sm-12", "col-md-12", "col-lg-10", "col-xl-8", "col-xxl-7", "py-3", "position-relative"], [1, "card", "overflow-hidden", "z-index-1"], [1, "card-body", "p-0"], [1, "row", "g-0", "h-100"], [1, "col-sm-12", "col-md-6", "col-lg-6", "bg-card-gradient"], [1, "position-relative", "pt-md-3", "pb-md-7", "light", 2, "padding-top", "150px !important"], [1, "z-index-1", "position-relative", "p-4"], [1, "mt-2", "d-flex"], ["src", "assets/img/icons/spot-illustrations/Logo-2.png", "alt", "iceipts logo", "width", "40", "height", "40", 2, "position", "absolute !important", "top", "-17% !important", "left", "45%"], ["src", "assets/img/icons/spot-illustrations/Logo-1.png", "alt", "iceipts logo", "width", "130", "height", "20", 2, "margin", "auto"], [1, "opacity-75", "text-white", "d-flex", "justify-content-center", "leftText"], [1, "col-sm-12", "col-md-6", "col-lg-6", "form-box"], [1, "demo", "mx-5"], [1, "p-4", "flex-grow-1"], [1, "row", "flex-between-center"], [1, "col-12"], [2, "color", "#000000"], [2, "font-weight", "500", "color", "#000000", "font-family", "Poppins", "font-size", "24px"], [1, "col-12", "fs-0", "my-2", "text-black"], [1, "mb-0", "undefined", 2, "font-family", "Poppins"], [1, "button-selection", "mb-2", "mt-3", 3, "click"], ["mat-flat-button", ""], [1, "row"], [1, "col-sm-2", "mt-2"], ["width", "39", "height", "39", "viewBox", "0 0 52 52", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M26 0L50.7275 17.9656L41.2824 47.0344H10.7176L1.27253 17.9656L26 0Z", "fill", "#110152"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M19.7204 28.8871C20.5018 28.1057 21.5616 27.6667 22.6667 27.6667H29.3333C30.4384 27.6667 31.4982 28.1057 32.2796 28.8871C33.061 29.6685 33.5 30.7283 33.5 31.8334V33.5C33.5 33.9603 33.1269 34.3334 32.6667 34.3334C32.2064 34.3334 31.8333 33.9603 31.8333 33.5V31.8334C31.8333 31.1703 31.5699 30.5344 31.1011 30.0656C30.6323 29.5967 29.9964 29.3334 29.3333 29.3334H22.6667C22.0036 29.3334 21.3677 29.5967 20.8989 30.0656C20.4301 30.5344 20.1667 31.1703 20.1667 31.8334V33.5C20.1667 33.9603 19.7936 34.3334 19.3333 34.3334C18.8731 34.3334 18.5 33.9603 18.5 33.5V31.8334C18.5 30.7283 18.939 29.6685 19.7204 28.8871Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M26.0002 19.3334C24.6195 19.3334 23.5002 20.4526 23.5002 21.8334C23.5002 23.2141 24.6195 24.3334 26.0002 24.3334C27.3809 24.3334 28.5002 23.2141 28.5002 21.8334C28.5002 20.4526 27.3809 19.3334 26.0002 19.3334ZM21.8335 21.8334C21.8335 19.5322 23.699 17.6667 26.0002 17.6667C28.3013 17.6667 30.1668 19.5322 30.1668 21.8334C30.1668 24.1345 28.3013 26 26.0002 26C23.699 26 21.8335 24.1345 21.8335 21.8334Z", "fill", "white"], [1, "col-sm-8", 2, "color", "#8692A6", "font-size", "8px"], [1, "btn-text", 2, "font-family", "Poppins"], [1, "btn-description", 2, "font-family", "Poppins"], [1, "col-sm-2", "mt-3"], ["d", "M2.09543 18.2329L26 0.865247L49.9046 18.2329L40.7738 46.3344H11.2262L2.09543 18.2329Z", "fill", "#110152", "stroke", "#110152", "stroke-width", "1.4"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M19.3335 22.6667C18.8733 22.6667 18.5002 23.0398 18.5002 23.5V31.8334C18.5002 32.2936 18.8733 32.6667 19.3335 32.6667H32.6668C33.1271 32.6667 33.5002 32.2936 33.5002 31.8334V23.5C33.5002 23.0398 33.1271 22.6667 32.6668 22.6667H19.3335ZM16.8335 23.5C16.8335 22.1193 17.9528 21 19.3335 21H32.6668C34.0475 21 35.1668 22.1193 35.1668 23.5V31.8334C35.1668 33.2141 34.0475 34.3334 32.6668 34.3334H19.3335C17.9528 34.3334 16.8335 33.2141 16.8335 31.8334V23.5Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M22.5657 18.3989C23.0346 17.9301 23.6705 17.6667 24.3335 17.6667H27.6668C28.3299 17.6667 28.9658 17.9301 29.4346 18.3989C29.9034 18.8678 30.1668 19.5036 30.1668 20.1667V33.5C30.1668 33.9603 29.7937 34.3334 29.3335 34.3334C28.8733 34.3334 28.5002 33.9603 28.5002 33.5V20.1667C28.5002 19.9457 28.4124 19.7337 28.2561 19.5774C28.0998 19.4212 27.8878 19.3334 27.6668 19.3334H24.3335C24.1125 19.3334 23.9005 19.4212 23.7442 19.5774C23.588 19.7337 23.5002 19.9457 23.5002 20.1667V33.5C23.5002 33.9603 23.1271 34.3334 22.6668 34.3334C22.2066 34.3334 21.8335 33.9603 21.8335 33.5V20.1667C21.8335 19.5036 22.0969 18.8678 22.5657 18.3989Z", "fill", "white"], [1, "button-selection", "mb-2", "mt-3"]], template: function RoleSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " The technology that looks impossible today will");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "be part of our life tomorrow. Iceipts technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "creating difference. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "b", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Join Us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " To begin this journey, tell us what type of user you are... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RoleSelectionComponent_Template_div_click_35_listener() { return ctx.onCustomerClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " Personal account to manage all you activities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "arrow_right_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RoleSelectionComponent_Template_div_click_52_listener() { return ctx.onRetailerClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Retailer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, " Own or belong to a company, this is for you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "arrow_right_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, " Own or belong to a company, this is for you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "arrow_right_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RoleSelectionComponent_Template_div_click_86_listener() { return ctx.onEmployeeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](91, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, " Own or belong to a company, this is for you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "arrow_right_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;500;600;700;800;900&display=swap\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n}\n.main[_ngcontent-%COMP%] {\n  height: 90vh;\n}\n.demo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background: #FFFFFF;\n  box-shadow: 0px 181px 73px rgba(0, 0, 0, 0.01), 0px 102px 61px rgba(0, 0, 0, 0.05), 0px 45px 45px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);\n}\n.button-selection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.btn-text[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 12px;\n}\n.button-selection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: flex-start;\n  text-align: left;\n  width: 100%;\n  background: #FFFFFF;\n  box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);\n  border-radius: 6px;\n  border-color: #FFFFFF;\n  border: 2px solid transparent;\n  padding: 3%;\n  cursor: pointer;\n}\n.button-selection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #FFEBD2;\n  border: 2px solid #1565D8;\n  border-color: #1565D8;\n}\n.bg-card-gradient[_ngcontent-%COMP%] {\n  height: 600px;\n  max-width: 100% !important;\n  background-size: contain;\n  background-position: center center;\n  background: linear-gradient(0deg, rgba(17, 1, 82, 0.7), rgba(17, 1, 82, 0.7)), url('8.png');\n}\n.form-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.startQuote[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n.endQuote[_ngcontent-%COMP%] {\n  margin-right: 5%;\n}\n.leftText[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (min-width: 2000px) {\n  .leftText[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n@media (max-width: 992px) {\n  .leftText[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n}\n@media (width: 768px) {\n  .form-box[_ngcontent-%COMP%] {\n    transform: translateX(200px);\n  }\n\n  .button-selection[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n@media (max-width: 768px) {\n  .main[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .bg-card-gradient[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 350px;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .form-box[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin: 24px 0px;\n  }\n\n  .startQuote[_ngcontent-%COMP%] {\n    margin-left: 15%;\n  }\n\n  .endQuote[_ngcontent-%COMP%] {\n    margin-right: 15%;\n  }\n}\n@media (max-width: 600px) {\n  .startQuote[_ngcontent-%COMP%] {\n    margin-left: 8% !important;\n  }\n\n  .endQuote[_ngcontent-%COMP%] {\n    margin-right: 8% !important;\n  }\n}\n@media (max-width: 500px) {\n  .startQuote[_ngcontent-%COMP%] {\n    margin-left: 0% !important;\n  }\n\n  .endQuote[_ngcontent-%COMP%] {\n    margin-right: 0% !important;\n  }\n}\n@media (max-width: 250px) {\n  .bg-card-gradient[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 400px;\n    justify-content: center;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGUtc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLGlIQUFBO0FBRVI7RUFDRSw2Q0FBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0FBREY7QUFJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0YsdUxBQUE7QUFERjtBQUtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRko7QUFLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRko7QUFLQTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhKO0FBS0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUtBO0VBS0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDJGQUFBO0FBTkY7QUFTQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTkY7QUFTQTtFQUNFLGVBQUE7QUFORjtBQVNBO0VBQ0UsZ0JBQUE7QUFORjtBQVNBO0VBQ0Usa0JBQUE7QUFORjtBQVVBO0VBRUU7SUFDRSwwQkFBQTtFQVJGO0FBQ0Y7QUFXQTtFQUVFO0lBQ0UsMEJBQUE7RUFWRjtBQUNGO0FBY0E7RUFFRTtJQUNFLDRCQUFBO0VBYkY7O0VBZUE7SUFDRSxZQUFBO0VBWkY7QUFDRjtBQWdCQTtFQUNFO0lBQ0csV0FBQTtFQWRIOztFQWlCQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQWRGOztFQWlCQTtJQUNFLHVCQUFBO0lBQ0EsZ0JBQUE7RUFkRjs7RUFpQkE7SUFDRSxnQkFBQTtFQWRGOztFQWlCQTtJQUNFLGlCQUFBO0VBZEY7QUFDRjtBQWtCQTtFQUNFO0lBQ0UsMEJBQUE7RUFoQkY7O0VBbUJBO0lBQ0UsMkJBQUE7RUFoQkY7QUFDRjtBQW1CQTtFQUNFO0lBQ0UsMEJBQUE7RUFqQkY7O0VBb0JBO0lBQ0UsMkJBQUE7RUFqQkY7QUFDRjtBQW9CQTtFQUVFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBbkJGO0FBQ0YiLCJmaWxlIjoicm9sZS1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDsyMDA7MzAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBoZWlnaHQ6OTB2aDtcclxufVxyXG5cclxuLmRlbW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3gtc2hhZG93OiAwcHggMTgxcHggNzNweCByZ2JhKDAsIDAsIDAsIDAuMDEpLCAwcHggMTAycHggNjFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwcHggNDVweCA0NXB4IHJnYmEoMCwgMCwgMCwgMC4wOSksIDBweCAxMXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAvLyAgIG1hcmdpbjogMHB4IDBweCAwcHggNTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b24tc2VsZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4uYnRuLXRleHQge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5idXR0b24tc2VsZWN0aW9uIGJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDE0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5idXR0b24tc2VsZWN0aW9uIGJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNGRkVCRDI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTU2NUQ4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTU2NUQ4O1xyXG4gIH1cclxuXHJcbi5iZy1jYXJkLWdyYWRpZW50e1xyXG5cclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIC8vIHdpZHRoOjQ4LjglO1xyXG4gIGhlaWdodDo2MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTcsIDEsIDgyLCAwLjcpLCByZ2JhKDE3LCAxLCA4MiwgMC43KSksIHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luLWltZy84LnBuZyk7XHJcbn1cclxuXHJcbi5mb3JtLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhcnRRdW90ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uZW5kUXVvdGUge1xyXG4gIG1hcmdpbi1yaWdodDo1JTtcclxufVxyXG5cclxuLmxlZnRUZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjAwMHB4KXtcclxuXHJcbiAgLmxlZnRUZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcclxuXHJcbiAgLmxlZnRUZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAod2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgLmZvcm0tYm94IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XHJcbiAgfVxyXG4gIC5idXR0b24tc2VsZWN0aW9uIHtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYWluIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5iZy1jYXJkLWdyYWRpZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjM1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tYm94IHtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBtYXJnaW46IDI0cHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN0YXJ0UXVvdGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICB9XHJcblxyXG4gIC5lbmRRdW90ZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuc3RhcnRRdW90ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5lbmRRdW90ZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDglICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuc3RhcnRRdW90ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5lbmRRdW90ZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMjUwcHgpIHtcclxuXHJcbiAgLmJnLWNhcmQtZ3JhZGllbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 88514:
/*!***********************************************************!*\
  !*** ./src/app/auth/role-signup/role-signup.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleSignupComponent": function() { return /* binding */ RoleSignupComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_helpers_confirmed_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/confirmed.validators */ 93483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_role_signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/role-signup.service */ 9954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);







function RoleSignupComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " OTP has sent successfully to your Email-Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RoleSignupComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email OTP is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RoleSignupComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RoleSignupComponent_div_35_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.otp.emailotp.errors.required);
} }
function RoleSignupComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RoleSignupComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RoleSignupComponent_div_40_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.otp.password.errors.required);
} }
function RoleSignupComponent_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RoleSignupComponent_div_47_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password and Confirm Password must be match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RoleSignupComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RoleSignupComponent_div_47_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RoleSignupComponent_div_47_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.otp.ConfirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.otp.ConfirmPassword.errors.confirmedValidator);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class RoleSignupComponent {
    constructor(fb, roleSignupService, router, route) {
        this.fb = fb;
        this.roleSignupService = roleSignupService;
        this.router = router;
        this.route = route;
        this.showClientOtp = false;
        this.roleUser = JSON.parse(localStorage.getItem("roleUser"));
        this.successful = false;
        this.hide = true;
        this.hide2 = true;
    }
    ngOnInit() {
        // this.route.paramMap.subscribe((p) => {
        //   this.email = p.get("email");  
        // });
        this.route.queryParams.subscribe(params => {
            this.email = params['email'];
        });
        this.getRoleUserByEmailId();
        this.roleVerifyForm = this.fb.group({
            firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z ]*$')]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z ]*$')]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("[0-9]{10}")]],
            acceptTerms: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        this.roleOtpData = this.fb.group({
            emailotp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("[0-9]{6}")]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            ConfirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        }, {
            validator: (0,src_app_helpers_confirmed_validators__WEBPACK_IMPORTED_MODULE_0__.ConfirmedValidators)('password', 'ConfirmPassword')
        });
    }
    get otp() {
        return this.roleOtpData.controls;
    }
    get f() {
        return this.roleVerifyForm.controls;
    }
    getRoleUserByEmailId() {
        this.roleSignupService.getUserBasedRoleByEmailId({}, this.email).then((res => {
            this.data = res.data;
            this.roleVerifyForm.patchValue({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                username: res.data.mobile,
            });
        }));
    }
    sentOtpRole() {
        // this.submitted=true;
        if (this.roleVerifyForm.invalid) {
            return false;
        }
        this.roleSignupService.sendRoleUsersOtp(this.roleVerifyForm.value).then((data) => {
        });
        this.showClientOtp = true;
        this.successful = true;
    }
    toggleShow() {
        this.hide = !this.hide;
    }
    toggleShow2() {
        this.hide2 = !this.hide2;
    }
    verifyRole() {
        this.submitted = true;
        if (this.roleOtpData.invalid) {
            return false;
        }
        let data = Object.assign({ "email": this.email }, this.roleOtpData.value);
        this.roleSignupService.verifyRoleUsers(data).then(res => {
            this.router.navigate(['/auth/login']);
        });
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
RoleSignupComponent.ɵfac = function RoleSignupComponent_Factory(t) { return new (t || RoleSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_role_signup_service__WEBPACK_IMPORTED_MODULE_1__.RoleSignupService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
RoleSignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RoleSignupComponent, selectors: [["app-role-signup"]], decls: 53, vars: 18, consts: [["id", "top", 1, "main"], [1, "container-fluid"], [1, "row", "min-vh-100", "flex-center", "g-0"], [1, "col-lg-8", "col-xxl-7", "py-3", "position-relative"], [1, "card", "overflow-hidden", "z-index-1"], [1, "card-body", "p-0"], [1, "row", "g-0", "h-100"], [1, "col-sm-12", "col-md-7", "col-lg-7", "bg-card-gradient", 2, "display", "flex", "align-items", "stretch", "width", "48.8%", "height", "700px", "background-size", "contain", "background-position", "center center", "background", "linear-gradient(0deg, rgba(17, 1, 82, 0.7), rgba(17, 1, 82, 0.7)), url(../../../assets/img/login-img/8.png)"], [1, "position-relative", "p-3"], [1, "z-index-1", "position-relative", "p-3"], [1, "mt-3", "d-flex"], ["src", "assets/img/icons/spot-illustrations/new-logo-iceipt.png", "alt", "iceipts logo", "width", "80", "height", "80"], [1, "fas", "fa-quote-left", "d-flex", "mt-5", 2, "color", "#00DAF7"], [1, "opacity-75", "text-white", "d-flex", "justify-content-start"], [1, "opacity-75", "text-white", "d-flex"], [1, "col-md-7", "d-flex", "flex-center", 2, "width", "51.2%"], [1, "p-4", "p-md-5", "flex-grow-1", "form-body"], ["class", "alert alert-success mb-5", "role", "alert", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row", "gx-2"], [1, "mb-3", "col-sm-12"], ["for", "card-email", 1, "form-label"], ["formControlName", "emailotp", "type", "password", "id", "card-email", 1, "form-control", 3, "ngClass", "keypress"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "card-password", 1, "form-label"], ["formControlName", "password", "name", "password", "id", "card-password", "required", "", 1, "form-control", 3, "type", "ngClass"], [1, "form-control-feedback", 3, "click"], [3, "ngClass"], ["for", "card-confirm-password", 1, "form-label"], ["formControlName", "ConfirmPassword", "autocomplete", "on", "id", "card-confirm-password", "required", "", 1, "form-control", 3, "type", "ngClass"], [1, "mb-3"], ["type", "submit", "name", "submit", 1, "btn", "btn-primary", "d-block", "w-100", "mt-3", 2, "background", "#110152"], ["role", "alert", 1, "alert", "alert-success", "mb-5"], [1, "invalid-feedback"], [4, "ngIf"]], template: function RoleSignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " The technology that looks impossible today will");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "be part of our life tomorrow. Iceipts technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "creating difference. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Sibanee kar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, RoleSignupComponent_div_26_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RoleSignupComponent_Template_form_ngSubmit_29_listener() { return ctx.verifyRole(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Email OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function RoleSignupComponent_Template_input_keypress_34_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, RoleSignupComponent_div_35_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, RoleSignupComponent_div_40_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RoleSignupComponent_Template_span_click_41_listener() { return ctx.toggleShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, RoleSignupComponent_div_47_Template, 3, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RoleSignupComponent_Template_span_click_48_listener() { return ctx.toggleShow2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Verify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.successful);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.roleOtpData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx.otp.emailotp.invalid && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.otp.emailotp.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx.otp.password.invalid && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.otp.password.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.hide2 ? "fa fa-eye-slash" : "fa fa-eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide2 ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx.otp.ConfirmPassword.invalid && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.otp.ConfirmPassword.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.hide2 ? "fa fa-eye-slash" : "fa fa-eye");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator], styles: [".form-control-feedback[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 5px;\n  margin-top: -30px;\n  position: relative;\n  z-index: 2;\n}\n\n.form-body[_ngcontent-%COMP%] {\n  display: flexbox;\n  justify-content: center;\n  background: #FFFFFF;\n  margin: 10%;\n  box-shadow: 0px 181px 73px rgba(0, 0, 0, 0.01), 0px 102px 61px rgba(0, 0, 0, 0.05), 0px 45px 45px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGUtc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFRix1TEFBQTtBQUFGIiwiZmlsZSI6InJvbGUtc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmZvcm0tYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4Ym94O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luOiAxMCU7XHJcblxyXG4gIGJveC1zaGFkb3c6IDBweCAxODFweCA3M3B4IHJnYmEoMCwgMCwgMCwgMC4wMSksIDBweCAxMDJweCA2MXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDBweCA0NXB4IDQ1cHggcmdiYSgwLCAwLCAwLCAwLjA5KSwgMHB4IDExcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC8vICAgbWFyZ2luOiAwcHggMHB4IDBweCA1MHB4IWltcG9ydGFudDtcclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ 93373:
/*!*******************************************************************************************!*\
  !*** ./src/app/auth/select-feature-subscription/select-feature-subscription.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectFeatureSubscriptionComponent": function() { return /* binding */ SelectFeatureSubscriptionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SelectFeatureSubscriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectFeatureSubscriptionComponent.ɵfac = function SelectFeatureSubscriptionComponent_Factory(t) { return new (t || SelectFeatureSubscriptionComponent)(); };
SelectFeatureSubscriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectFeatureSubscriptionComponent, selectors: [["app-select-feature-subscription"]], decls: 37, vars: 0, consts: [["id", "top", 1, "main"], [1, "container-fluid"], [1, "col-12", "text-center", "my-2"], [1, "fs-1"], [1, "table-responsive", "mt-3", "p-3"], [1, "table", "table-dark"], [1, "text-center", "fs--1"], ["scope", "col", 2, "width", "10%"], ["scope", "col", 2, "width", "50%"], ["scope", "col", 2, "width", "30%"], [1, "d-flex", "form-check", 2, "justify-content", "center"], ["id", "flexCheckDefault", "type", "checkbox", "value", "", 1, "form-check-input"], ["scope", "col"], ["scope", "col", 2, "color", "#00FFFF"]], template: function SelectFeatureSubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Premium Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Gst Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtZmVhdHVyZS1zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 64309:
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": function() { return /* binding */ SignupComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/constant */ 22336);
/* harmony import */ var _helpers_confirmed_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_helpers/confirmed.validators */ 93483);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_role_signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/role-signup.service */ 9954);
/* harmony import */ var src_app_core_services_signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/signup.service */ 27083);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/login.service */ 91315);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_otp_verify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/otp-verify.service */ 42558);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/ledger-service.service */ 75301);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 65924);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);





















function SignupComponent_div_22_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r5.errorMesage || "Something went wrong please try again later !!!!");
} }
function SignupComponent_div_22_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Firstname is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Only characters allowed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SignupComponent_div_22_div_23_div_1_Template, 2, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SignupComponent_div_22_div_23_div_2_Template, 2, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.f.firstName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.f.firstName.errors.pattern);
} }
function SignupComponent_div_22_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email must be a valid Email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SignupComponent_div_22_div_28_div_1_Template, 2, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SignupComponent_div_22_div_28_div_2_Template, 2, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.f.email.errors.pattern);
} }
function SignupComponent_div_22_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onSelectionChange", function SignupComponent_div_22_mat_option_37_Template_mat_option_onSelectionChange_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r21); const option_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r20.setCountryId(option_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate2"]("matTooltip", "", option_r19.countryName, " ", option_r19.countryNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", option_r19.countryNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", option_r19.countryName, " ", option_r19.countryNumber, " ");
} }
function SignupComponent_div_22_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Country name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SignupComponent_div_22_div_39_div_1_Template, 2, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.f.countryId.errors.required);
} }
function SignupComponent_div_22_div_40_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile Number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_40_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile Number must be of 09-digits only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_40_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile Number must be of 09-digits only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_40_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Only Digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SignupComponent_div_22_div_40_div_2_div_1_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SignupComponent_div_22_div_40_div_2_div_2_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, SignupComponent_div_22_div_40_div_2_div_3_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SignupComponent_div_22_div_40_div_2_div_4_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r23.f.mobile.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r23.f.mobile.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r23.f.mobile.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r23.f.mobile.errors.pattern);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function SignupComponent_div_22_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keypress", function SignupComponent_div_22_div_40_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r28.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SignupComponent_div_22_div_40_div_2_Template, 5, 4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c0, ctx_r11.f.mobile.invalid && ctx_r11.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.f.mobile.invalid && ctx_r11.submitted);
} }
function SignupComponent_div_22_div_41_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile Number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_41_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile Number must be of 10-digits only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_41_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile Number must be of 10-digits only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_41_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Only Digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_41_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SignupComponent_div_22_div_41_div_2_div_1_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SignupComponent_div_22_div_41_div_2_div_2_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, SignupComponent_div_22_div_41_div_2_div_3_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SignupComponent_div_22_div_41_div_2_div_4_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r30.f.mobile.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r30.f.mobile.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r30.f.mobile.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r30.f.mobile.errors.pattern);
} }
function SignupComponent_div_22_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keypress", function SignupComponent_div_22_div_41_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r35.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SignupComponent_div_22_div_41_div_2_Template, 5, 4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c0, ctx_r12.f.mobile.invalid && ctx_r12.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.f.mobile.invalid && ctx_r12.submitted);
} }
function SignupComponent_div_22_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SignupComponent_div_22_div_48_div_1_Template, 2, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r13.f.password.errors.required);
} }
function SignupComponent_div_22_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Accept Ts & Cs is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SignupComponent_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r38.onCustomerClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "< Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, SignupComponent_div_22_div_5_Template, 6, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h1", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "b", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Sign Up As a Retailer!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Already have an Acccount? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SignupComponent_div_22_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r40.onCustomerClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " LOGIN!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "hr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function SignupComponent_div_22_Template_form_ngSubmit_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r41.clientRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, SignupComponent_div_22_div_23_Template, 3, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, SignupComponent_div_22_div_28_Template, 3, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "mat-form-field", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function SignupComponent_div_22_Template_input_change_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r42.getCountryByname($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "mat-autocomplete", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, SignupComponent_div_22_mat_option_37_Template, 2, 5, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](38, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, SignupComponent_div_22_div_39_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, SignupComponent_div_22_div_40_Template, 3, 4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, SignupComponent_div_22_div_41_Template, 3, 4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Create Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](45, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SignupComponent_div_22_Template_span_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r43.toggleShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, SignupComponent_div_22_div_48_Template, 2, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](50, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "I agree to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "u", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, " Terms & Condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, SignupComponent_div_22_div_56_Template, 2, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](62, "hr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](65, "hr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](68, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "Sign in with Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](36);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r0.showClientOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](22, _c0, ctx_r0.f.firstName.invalid && ctx_r0.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.f.firstName.invalid && ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](24, _c0, ctx_r0.f.email.invalid && ctx_r0.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.email.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matAutocomplete", _r8)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](26, _c0, ctx_r0.f.countryId.invalid && ctx_r0.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("displayWith", ctx_r0.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](38, 20, ctx_r0.filteredOptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.f.countryId.invalid && ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.isArabic);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.isArabic);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", ctx_r0.hide ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](28, _c0, ctx_r0.f.password.invalid && ctx_r0.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r0.hide ? "fa fa-eye-slash" : "fa fa-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.f.password.invalid && ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](30, _c0, ctx_r0.f.acceptTerms.invalid && ctx_r0.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.acceptTerms.errors);
} }
function SignupComponent_div_23_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "User Exists Already!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Firstname is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Only characters allowed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SignupComponent_div_23_div_21_div_1_Template, 2, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SignupComponent_div_23_div_21_div_2_Template, 2, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r45.c.firstName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r45.c.firstName.errors.pattern);
} }
function SignupComponent_div_23_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onSelectionChange", function SignupComponent_div_23_mat_option_30_Template_mat_option_onSelectionChange_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const option_r54 = restoredCtx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r55.setCountryId(option_r54); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate2"]("matTooltip", "", option_r54.countryName, " ", option_r54.countryNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", option_r54.countryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", option_r54.countryName, " ", option_r54.countryNumber, " ");
} }
function SignupComponent_div_23_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Country name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SignupComponent_div_23_div_32_div_1_Template, 2, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r48.f.countryId.errors.required);
} }
function SignupComponent_div_23_div_33_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile Number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_33_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile Number must be of 09-digits only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_33_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile Number must be of 09-digits only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_33_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Only Digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_33_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SignupComponent_div_23_div_33_div_2_div_1_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SignupComponent_div_23_div_33_div_2_div_2_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, SignupComponent_div_23_div_33_div_2_div_3_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SignupComponent_div_23_div_33_div_2_div_4_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r58.f.mobile.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r58.f.mobile.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r58.f.mobile.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r58.f.mobile.errors.pattern);
} }
function SignupComponent_div_23_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keypress", function SignupComponent_div_23_div_33_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r63.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SignupComponent_div_23_div_33_div_2_Template, 5, 4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c0, ctx_r49.f.mobile.invalid && ctx_r49.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.f.mobile.invalid && ctx_r49.submitted);
} }
function SignupComponent_div_23_div_34_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile Number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_34_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile Number must be of 10-digits only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_34_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile Number must be of 10-digits only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_34_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Only Digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_34_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SignupComponent_div_23_div_34_div_2_div_1_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SignupComponent_div_23_div_34_div_2_div_2_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, SignupComponent_div_23_div_34_div_2_div_3_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SignupComponent_div_23_div_34_div_2_div_4_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r65.f.mobile.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r65.f.mobile.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r65.f.mobile.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r65.f.mobile.errors.pattern);
} }
function SignupComponent_div_23_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keypress", function SignupComponent_div_23_div_34_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r70.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SignupComponent_div_23_div_34_div_2_Template, 5, 4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c0, ctx_r50.f.mobile.invalid && ctx_r50.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r50.f.mobile.invalid && ctx_r50.submitted);
} }
function SignupComponent_div_23_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Accept Ts & Cs is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SignupComponent_div_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r72.onRetailerClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "< Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, SignupComponent_div_23_div_5_Template, 6, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h1", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Sign Up As a Customer!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SignupComponent_div_23_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r74.onRetailerClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "LOGIN!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "hr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function SignupComponent_div_23_Template_form_ngSubmit_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r73); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r75.customerRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, SignupComponent_div_23_div_21_Template, 3, 2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-form-field", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function SignupComponent_div_23_Template_input_change_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r73); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r76.getCountryByname($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "mat-autocomplete", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, SignupComponent_div_23_mat_option_30_Template, 2, 5, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, SignupComponent_div_23_div_32_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, SignupComponent_div_23_div_33_Template, 3, 4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, SignupComponent_div_23_div_34_Template, 3, 4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup.enter", function SignupComponent_div_23_Template_input_keyup_enter_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r73); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r77.customerRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "I agree to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "u", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, " Terms & Condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, SignupComponent_div_23_div_42_Template, 2, 0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](29);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r1.showCustomerOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r1.customerRegisterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](16, _c0, ctx_r1.c.firstName.invalid && ctx_r1.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.c.firstName.invalid && ctx_r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matAutocomplete", _r46)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](18, _c0, ctx_r1.f.countryId.invalid && ctx_r1.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("displayWith", ctx_r1.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](31, 14, ctx_r1.filteredOptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.f.countryId.invalid && ctx_r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isArabic);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isArabic);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](20, _c0, ctx_r1.c.acceptTerms.invalid && ctx_r1.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.c.acceptTerms.errors);
} }
function SignupComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "OTP Has Sent Successfully To Your Email-ID And Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "OTP Has Sent Successfully To Your Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_p_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Invalid OTP!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(fb, roleSignupService, signupService, loginService, toastService, router, route, otpVerify, commonService, ledgerService) {
        this.fb = fb;
        this.roleSignupService = roleSignupService;
        this.signupService = signupService;
        this.loginService = loginService;
        this.toastService = toastService;
        this.router = router;
        this.route = route;
        this.otpVerify = otpVerify;
        this.commonService = commonService;
        this.ledgerService = ledgerService;
        this.defaultLedgerData = {
            "userId": "{{userId}}",
            "data": [
                {
                    "userCaseId": 1,
                    "debit_gl": "1.1.8",
                    "credit_gl": "1.1.2"
                },
                {
                    "userCaseId": 2,
                    "debit_gl": "1.1.7",
                    "credit_gl": "1.1.3"
                },
                {
                    "userCaseId": 3,
                    "debit_gl": "1.1.1",
                    "credit_gl": "1.1.4"
                },
                {
                    "userCaseId": 4,
                    "debit_gl": "2.1.1",
                    "credit_gl": "1.1.6"
                },
                {
                    "userCaseId": 7,
                    "debit_gl": "2.1.1",
                    "credit_gl": "1.1.3"
                },
                {
                    "userCaseId": 8,
                    "debit_gl": "2.1.1",
                    "credit_gl": "1.1.6"
                },
                {
                    "userCaseId": 9,
                    "debit_gl": "2.1.2",
                    "credit_gl": "1.1.7"
                }
            ]
        };
        this.afterRegister = false;
        this.userName = "Client";
        this.role = 1;
        this.showClientOtp = false;
        this.showCustomerOtp = false;
        this.submitted = false;
        this.successful = false;
        this.hide = true;
        this.hide2 = true;
        this.otpErrorMessage = false;
        this.countryID = "102";
        this.errorMesage = '';
        this.showPassword = false;
        this.isArabic = false;
    }
    ngOnInit() {
        this.commonService.isArabic$.subscribe((isArabic) => {
            this.isArabic = isArabic;
        });
        this.route.queryParams.subscribe(params => {
            this.Custtoggle = params['Custtoggle'] === 'true';
        });
        // let inputElement = document.querySelector('#card-mobile') as HTMLInputElement;
        // console.log(inputElement)
        // if(inputElement){
        //   let iti =   intlTelInput(inputElement,{
        //     initialCountry: 'us',
        //     separateDialCode: true,
        //     preferredCountries: ["us", "gb", "ca", "au"]
        //     // utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.0/js/utils.js',
        //   })
        //   this.countryCode = iti.getSelectedCountryData().iso2;
        //   this.phoneNumber = inputElement.value;
        //   console.log(this.phoneNumber)
        //   console.log(this.countryCode)
        // }
        this.getAllCountry();
        //form for client registartion
        if (this.isArabic) {
            this.registerForm = this.fb.group({
                firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('^[a-zA-Z ]*$')]],
                // lastName: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
                email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
                mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("[0-9]{9}")]],
                password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
                // ConfirmPassword: ["", [Validators.required]],
                acceptTerms: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
                countryId: [this.isArabic ? "+971" : "+971", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]]
            }, {
                validator: (0,_helpers_confirmed_validators__WEBPACK_IMPORTED_MODULE_1__.ConfirmedValidators)('password', 'password')
            });
        }
        else {
            this.registerForm = this.fb.group({
                firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('^[a-zA-Z ]*$')]],
                // lastName: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
                email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
                mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("[0-9]{10}")]],
                password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
                // ConfirmPassword: ["", [Validators.required]],
                acceptTerms: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
                countryId: [this.isArabic ? "+971" : "+91", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]]
            }, {
                validator: (0,_helpers_confirmed_validators__WEBPACK_IMPORTED_MODULE_1__.ConfirmedValidators)('password', 'password')
            });
        }
        //form for customer registration
        if (this.isArabic) {
            this.customerRegisterForm = this.fb.group({
                firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('^[a-zA-Z ]*$')]],
                // lastName: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
                // email:["",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
                mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("[0-9]{9}")]],
                countryId: [this.isArabic ? "+971" : "+971", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
                acceptTerms: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            });
        }
        else {
            this.customerRegisterForm = this.fb.group({
                firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('^[a-zA-Z ]*$')]],
                // lastName: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
                // email:["",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
                mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("[0-9]{10}")]],
                countryId: [this.isArabic ? "+971" : "+91", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
                acceptTerms: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            });
        }
        //form for client and customer otp 
        this.otpClientData = this.fb.group({
            emailotp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]],
            // mobileotp:["",[Validators.required,Validators.pattern("[0-9]{10}")]],
        });
        if (this.isArabic) {
            this.otpCustomerData = this.fb.group({
                //emailotp:  [ "",[Validators.required,Validators.pattern("[0-9]{10}")]],
                mobileotp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("[0-9]{9}")]],
            });
        }
        else {
            this.otpCustomerData = this.fb.group({
                //emailotp:  [ "",[Validators.required,Validators.pattern("[0-9]{10}")]],
                mobileotp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("[0-9]{10}")]],
            });
        }
        this.filteredOptions = this.registerForm.get('countryId').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(value => {
            if (this.CountryList) {
                const name = typeof value === 'string' ? value : value;
                return name ? this._filter(name) : this.CountryList.slice();
            }
        }));
    }
    onCustomerClick() {
        this.router.navigate(['/auth/login'], { queryParams: { CustLogintoggle: 'false' } });
    }
    onRetailerClick() {
        this.router.navigate(['/auth/login'], { queryParams: { CustLogintoggle: 'true' } });
    }
    displayFn(user) {
        return user ? user : '';
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.CountryList.filter(option => option.countryName.toLowerCase().includes(filterValue));
    }
    getAllCountry() {
        this.signupService.getAllCountryClient({}).then((res) => {
            this.AllCountry = res;
            this.CountryList = this.AllCountry.data;
        });
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    //to show/hide password
    toggleShow() {
        this.hide = !this.hide;
        //  this.input.type = this.hide ? 'text' : 'password';
    }
    toggleShow2() {
        this.hide2 = !this.hide2;
        //  this.input.type = this.hide ? 'text' : 'password';
    }
    // controls for client validation
    get f() {
        return this.registerForm.controls;
    }
    // controls for customer validation
    get c() {
        return this.customerRegisterForm.controls;
    }
    //control client and customer registetration UI
    show(id) {
        if (id === 1) {
            this.user = src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__.Constants.USER.CLIENT;
            this.Custtoggle = false;
            this.showAlert = false;
            this.registerForm.clearValidators();
            //this.disabled = false;
            this.userName = "Client";
        }
        else if (id === 2) {
            this.user = src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__.Constants.USER.CUSTOMER;
            this.Custtoggle = true;
            this.userName = "Customer";
            this.showAlert = false;
            this.customerRegisterForm.clearValidators();
        }
    }
    //client register 
    clientRegister() {
        console.log(" in Client register", this.registerForm.value);
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        let req = {
            "email": this.registerForm.controls.email.value,
            "password": this.registerForm.controls.password.value,
            // "countryId": this.countryID, //"228",//this.countryID,
            "firstName": this.registerForm.controls.firstName.value,
            "mobile": this.registerForm.controls.mobile.value,
            countryId: '102'
            // "lastName" :this.registerForm.controls.lastName.value,
        };
        if (this.registerForm.value.countryId == '+971') {
            req.countryId = '228';
        }
        this.signupService.registerClientUsers(req).then((data) => {
            if (data.success) {
                // Create a copy of the defaultLedgerData object
                const requestData = Object.assign({}, this.defaultLedgerData);
                // Set the userId property in the requestData object
                requestData.userId = data.data.id;
                this.ledgerService.assignLedgersv2(requestData, data.data.id).then((res) => {
                    console.log(res.data);
                });
                console.log(data.data.id);
                this.showClientOtp = true;
                this.successful = true;
            }
        }, (error) => {
            this.errorMesage = error.error.error_message;
            this.showAlert = true;
        })
            .catch(error => {
            this.showAlert = true;
            console.log("sdsd https://web.iceipts.com/", this.showAlert);
        });
    }
    //Customer Register
    customerRegister() {
        console.log("Customer Register", this.customerRegisterForm.value);
        this.submitted = true;
        if (this.customerRegisterForm.invalid) {
            return;
        }
        this.signupService.registerCustomerUsers(this.customerRegisterForm.value).then((data) => {
            if (data) {
                let d = {
                    mobile: this.customerRegisterForm.controls.mobile.value,
                };
                //this.loginService.postSendOtp(d).then((res)=>{
                this.successful = true;
                this.showCustomerOtp = true;
                this.afterRegister = true;
            }
        }, (error) => {
            this.errorMesage = error.error.error_message;
            this.showAlert = true;
        }).catch(error => {
            this.errorMesage = error.error.error_message;
            this.showAlert = true;
        });
    }
    //verify client Otp
    verifyClientOtp() {
        const data = {
            email: this.registerForm.controls.email.value,
            emailotp: this.otpClientData.controls.emailotp.value,
            //type:"0",
            //mobileotp:this.otpData.controls.mobileotp.value,
        };
        this.otpVerify.verifyCLientOtp(data).then((data) => {
            this.router.navigate(['/auth/login']);
        }, (err) => {
            this.toastService.openErrorSnackBar("Enter Valid OTP");
        });
    }
    customerResendOtp() {
        let d = {
            mobile: this.customerRegisterForm.controls.mobile.value,
        };
        this.loginService.postSendOtp(d).then((res) => {
            this.resend = res;
        });
        this.messageSuccess = true;
        setTimeout(() => {
            this.messageSuccess = false;
        }, 120000);
    }
    clientResendOtp() {
        let d = {
            email: this.registerForm.controls.email.value,
        };
        this.roleSignupService.sendRoleUsersOtp(d).then((res) => {
            this.resend = res;
        });
        this.messageSuccess = true;
        setTimeout(() => {
            this.messageSuccess = false;
        }, 60000);
    }
    //Verify customer otp
    verifyCustomerOtp() {
        this.showCustomerOtp = true;
        let d = {
            mobile: this.customerRegisterForm.controls.mobile.value,
            //type:"1",
            mobileotp: this.otpCustomerData.controls.mobileotp.value,
        };
        this.router.navigate(['/auth/login']);
        // this.otpVerify.verifyCustomertOtp(d).then((data) => {
        //   this.router.navigate(['/auth/login'])
        // }, (err) => {
        //   if (err) {
        //     this.otpErrorMessage = true
        //   }
        // })
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    setCountryId(option) {
        console.log(option);
        let optionid = option.id;
        this.countryID = optionid.toString();
    }
    getCountryByname(e) {
        let serachkey = e.target.value;
        console.log("in the country by name method", serachkey);
        if (serachkey != 0) {
            this.signupService.SearchCountryByNameId({}, serachkey).then((res) => {
                this.AllCountry = res;
                this.CountryList = this.AllCountry.data;
            });
        }
    }
    /**
     * Customer Resend OTP
     */
    customerLoginResendOtp() {
        // this.spinner.show();
        // this.isLoginBtn= true;
        let d = {
            mobile: this.customerRegisterForm.controls.mobile.value,
        };
        this.loginService.postSendOtp(d).then((res) => {
            // this.spinner.hide();
            // this.isLoginBtn = false;
            this.resend = res;
        }, (err) => {
            // this.isLoginBtn = false;
        });
        this.messageSuccess = true;
        setTimeout(() => {
            this.messageSuccess = false;
        }, 120000);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_role_signup_service__WEBPACK_IMPORTED_MODULE_2__.RoleSignupService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_signup_service__WEBPACK_IMPORTED_MODULE_3__.SignupService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_otp_verify_service__WEBPACK_IMPORTED_MODULE_6__.OtpVerifyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_8__.LedgerServiceService)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], inputs: { afterRegister: "afterRegister" }, decls: 67, vars: 13, consts: [["id", "top", 1, "main"], [1, "container-fluid"], [1, "row", "min-vh-100", "flex-center", "g-0"], [1, "col-sm-12", "col-md-12", "col-lg-10", "col-xl-8", "col-xxl-7", "py-3", "position-relative"], [1, "card", "overflow-hidden", "z-index-1"], [1, "card-body", "p-0"], [1, "row", "g-0", "h-100"], [1, "col-sm-12", "col-md-6", "col-lg-6", "bg-card-gradient"], [1, "position-relative", "pt-md-3", "pb-md-7", "light", 2, "padding-top", "150px !important"], [1, "z-index-1", "position-relative", "p-4"], [1, "mt-2", "d-flex"], ["src", "assets/img/icons/spot-illustrations/Logo-2.png", "alt", "iceipts logo", "width", "40", "height", "40", 2, "position", "absolute !important", "top", "-17% !important", "left", "45%"], ["src", "assets/img/icons/spot-illustrations/Logo-1.png", "alt", "iceipts logo", "width", "130", "height", "20", 2, "margin", "auto"], [1, "opacity-75", "text-white", "d-flex", "justify-content-center", "leftText"], [1, "col-sm-12", "col-md-6", "col-lg-6", "form-box"], ["class", "demoRetailer", 3, "hidden", 4, "ngIf"], ["class", "demo", 3, "hidden", 4, "ngIf"], [3, "hidden"], [1, "p-4", "p-md-5", "flex-grow-1", "demo"], ["class", "alert alert-success mb-5", "role", "alert", "style", "font-family: 'Poppins';", 4, "ngIf"], [2, "font-family", "Poppins"], [3, "formGroup", "ngSubmit"], [1, "row", "gx-2"], [1, "mb-3", "col-sm-12"], ["for", "card-email", 1, "form-label", 2, "font-family", "Poppins"], ["formControlName", "emailotp", "type", "password", "id", "card-email-otp", 1, "form-control", 3, "keypress"], [1, "row", "flex-between-center"], [1, "col-auto"], [1, "col-auto", "text-center"], ["type", "button", 1, "btn", "btn-link", "fs--2", 2, "border", "none", 3, "disabled", "click"], [2, "font-family", "Poppins", "font-size", "10px"], [1, "mb-3"], ["type", "submit", "name", "submit", 1, "btn", "login-btn", "d-block", "w-100", "mt-3"], [1, "demo", 3, "hidden"], [1, "p-4", "p-md-5", "flex-grow-1"], ["for", "card-mobile", 1, "form-label", 2, "font-family", "Poppins"], ["type", "password", "maxlength", "6", "formControlName", "mobileotp", "autocomplete", "new-password", "id", "card-mobile-otp", 1, "form-control", 3, "keypress"], ["class", "text-danger", "style", "font-family: 'Poppins';", 4, "ngIf"], [1, "col-auto", "rating", "p-0"], ["type", "submit", "name", "submit", 1, "btn", "btn-primary", "d-block", "w-100", "mt-1", "login-btn"], [1, "demoRetailer", 3, "hidden"], ["mat-flat-button", "", 2, "color", "#8692A6", 3, "click"], [1, "signUpHeader", "pt-4", "pb-3", "flex-grow-1"], ["class", "alert alert-warning border-2 d-flex align-items-center", "role", "alert", 4, "ngIf"], [2, "font-weight", "500", "margin", "-13px 0 -2px"], [1, "mb-1", 2, "font-size", "20px", "font-weight", "500", "font-family", "Poppins"], [1, "toggle-text", "col-auto", "fs-0", "mb-2", "text-900"], [1, "mb-0", "undefined", 2, "font-family", "Poppins"], [2, "color", "#FC7643", 3, "click"], [1, "top-line", "my-2", 2, "opacity", "20%"], ["for", "card-firstname", 1, "form-label", 2, "font-family", "Poppins"], ["maxLength", "50", "placeholder", "Full Name", "autofocus", "", "formControlName", "firstName", "type", "text", "autocomplete", "new-password", "id", "card-firstname", "required", "", 1, "form-control", 3, "ngClass"], ["style", "margin-bottom: -10px;", "class", "invalid-feedback", 4, "ngIf"], ["formControlName", "email", "type", "text", "placeholder", "Email Address", "autocomplete", "new-password", "required", "", "id", "card-email", 1, "form-control", 3, "ngClass"], [1, "mb-3", "col-sm-3"], ["app", "", 1, "example-full-width"], ["type", "text", "aria-label", "Assignee", "matInput", "", "formControlName", "countryId", 1, "form-control", "mod", 3, "matAutocomplete", "ngClass", "change"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", "matTooltip", "onSelectionChange", 4, "ngFor", "ngForOf"], ["style", "margin-bottom: -10px;", "class", "invalid-feedback mb-2", 4, "ngIf"], ["class", "mb-3 col-sm-9", 4, "ngIf"], ["for", "card-password", 1, "form-label", 2, "font-family", "Poppins"], ["type", "password", "formControlName", "password", "id", "card-password", "required", "", "autocomplete", "new-password", 1, "form-control", "mod", 3, "type", "ngClass"], [1, "form-control-feedback", 3, "click"], [1, "p-1", 3, "ngClass"], [1, "form-check", "my-2"], ["type", "checkbox", "id", "card-register-checkbox", "formControlName", "acceptTerms", "required", "", 1, "form-check-input", 3, "ngClass"], ["for", "card-register-checkbox", 1, "form-label", 2, "font-family", "Poppins"], ["routerLink", "/auth/term-and-condition"], ["style", "margin-bottom: -13px;", "class", "invalid-feedback", "style", "font-family: 'Poppins';", 4, "ngIf"], [1, "mb-1"], ["type", "submit", "name", "submit", 1, "login-btn", "d-block", "w-100", "mt-3"], [1, "line-container"], [1, "top-line"], [1, "text", 2, "color", "#c4c4c4", "font-family", "Poppins"], [1, "bottom-line"], [1, ""], ["type", "button", 1, "btn-google", "d-block", "w-100", "mt-3"], ["src", "assets/img/login-img/Google__G__Logo.png", "alt", "", 2, "height", "6%", "width", "6%", "margin-right", "8px"], ["role", "alert", 1, "alert", "alert-warning", "border-2", "d-flex", "align-items-center"], [1, "bg-warning", "me-3", "icon-item"], [1, "fas", "fa-exclamation-circle", "text-white", "fs-3"], [1, "mb-0", "flex-1", 2, "font-family", "Poppins"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], [1, "invalid-feedback", 2, "margin-bottom", "-10px"], ["style", "font-family: 'Poppins';", 4, "ngIf"], [3, "value", "matTooltip", "onSelectionChange"], [1, "invalid-feedback", "mb-2", 2, "margin-bottom", "-10px"], [1, "mb-3", "col-sm-9"], ["formControlName", "mobile", "type", "tel", "placeholder", "Phone Number", "minlength", "9", "maxlength", "9", "autocomplete", "new-password", "id", "card-mobile", 1, "form-control", "intl-tel-input", 3, "ngClass", "keypress"], [4, "ngIf"], ["formControlName", "mobile", "type", "tel", "placeholder", "Phone Number", "minlength", "10", "maxlength", "10", "autocomplete", "new-password", "id", "card-mobile", 1, "form-control", "intl-tel-input", 3, "ngClass", "keypress"], [1, "invalid-feedback", 2, "font-family", "Poppins"], [2, "font-weight", "500", "color", "#000000", "font-family", "Poppins", "font-size", "20px"], [1, "toggle-text", "col-auto", "fs-0", "my-3", "text-900"], ["maxLength", "15", "placeholder", "Full name", "formControlName", "firstName", "type", "text", "autocomplete", "new-password", "id", "card-firstname", "required", "", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", "id", "card-register-checkbox", "formControlName", "acceptTerms", "required", "", 1, "form-check-input", 3, "ngClass", "keyup.enter"], ["class", "invalid-feedback", "style", "font-family: 'Poppins';", 4, "ngIf"], ["type", "submit", "name", "submit", 1, "login-btn", "d-block", "w-100", "mt-0"], [1, "invalid-feedback"], ["role", "alert", 1, "alert", "alert-success", "mb-5", 2, "font-family", "Poppins"], [1, "text-danger", 2, "font-family", "Poppins"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " The technology that looks impossible today will");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "be part of our life tomorrow. Iceipts technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "creating difference. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, SignupComponent_div_22_Template, 71, 32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, SignupComponent_div_23_Template, 48, 22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, SignupComponent_div_26_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_29_listener() { return ctx.verifyClientOtp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Enter Email OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keypress", function SignupComponent_Template_input_keypress_34_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_38_listener() { return ctx.clientResendOtp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Resend OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, SignupComponent_div_47_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_50_listener() { return ctx.verifyCustomerOtp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Enter Mobile OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keypress", function SignupComponent_Template_input_keypress_55_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, SignupComponent_p_56_Template, 2, 0, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](58, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_60_listener() { return ctx.customerLoginResendOtp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "Resend OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.Custtoggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Custtoggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !ctx.showClientOtp);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.successful);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Verify as ", ctx.userName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.otpClientData);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.messageSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !ctx.showCustomerOtp);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.successful);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Verify as ", ctx.userName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.otpCustomerData);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.otpErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.messageSuccess);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxRequiredValidator, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinLengthValidator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;500;600;700;800;900&display=swap\");\np.italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.card-body[_ngcontent-%COMP%] {\n  height: 600px;\n}\n.demo[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 181px 73px rgba(0, 0, 0, 0.01), 0px 102px 61px rgba(0, 0, 0, 0.05), 0px 45px 45px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);\n  margin-left: 53%;\n  margin-right: 4%;\n  margin-bottom: 2%;\n  margin-top: 2%;\n}\n.demoRetailer[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 181px 73px rgba(0, 0, 0, 0.01), 0px 102px 61px rgba(0, 0, 0, 0.05), 0px 45px 45px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);\n  margin-left: 53%;\n  margin-right: 4%;\n  margin-bottom: 2%;\n  margin-top: 2%;\n}\n.form-control-feedback[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 3px;\n  margin-top: -30px;\n  position: relative;\n  z-index: 2;\n  font-size: 17px;\n}\na.menu_links[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mod.is-invalid[_ngcontent-%COMP%] {\n  background-image: none;\n}\ninput.mat-input-element[_ngcontent-%COMP%] {\n  margin-top: -1.0625em;\n}\n.bg-card-gradient[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 725px;\n  background-size: contain;\n  background-position: center center;\n  max-width: 100% !important;\n  background: linear-gradient(0deg, rgba(17, 1, 82, 0.7), rgba(17, 1, 82, 0.7)), url('8.png');\n}\n.form-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.signUpHeader[_ngcontent-%COMP%] {\n  padding-left: 1.8rem;\n  padding-right: 1.8rem;\n}\n.leftText[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (min-width: 2000px) {\n  .leftText[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n@media (max-width: 992px) {\n  .leftText[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n}\n@media (max-width: 768px) {\n  .bg-card-gradient[_ngcontent-%COMP%] {\n    position: relative;\n    height: 425px;\n    margin-bottom: 20px;\n    background-size: contain;\n  }\n\n  .demo[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n\n  .card-body[_ngcontent-%COMP%] {\n    height: 950px;\n    overflow-y: scroll;\n  }\n\n  .demoRetailer[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n}\n@media (max-width: 992px) {\n  .width-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpSEFBQTtBQUdSO0VBQ0ksa0JBQUE7QUFESjtBQUlBO0VBQ0UsYUFBQTtBQURGO0FBSUE7RUFDRSxtQkFBQTtFQUNBLHVMQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURGO0FBSUU7RUFDRSxtQkFBQTtFQUNBLHVMQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURKO0FBS0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFGSjtBQUlBO0VBQWUsZUFBQTtBQUFmO0FBQ0E7RUFDSSxzQkFBQTtBQUVKO0FBT0E7RUFDSSxxQkFBQTtBQUpKO0FBT0M7RUFJQyxrQkFBQTtFQUVBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSwyRkFBQTtBQVJGO0FBV0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFSSjtBQVdFO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQVJKO0FBV0U7RUFDRSxrQkFBQTtBQVJKO0FBWUE7RUFFSTtJQUNFLDBCQUFBO0VBVko7QUFDRjtBQW9CRTtFQUVFO0lBQ0UsMEJBQUE7RUFuQko7QUFDRjtBQXNCRTtFQUVFO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFHQSx3QkFBQTtFQXZCTjs7RUF5QkU7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VBdEJOOztFQXdCRTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQXJCSjs7RUF3QkU7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VBckJKO0FBQ0Y7QUEwQkU7RUFDRTtJQUNJLFdBQUE7RUF4Qk47QUFDRiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzIwMDszMDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5wLml0YWxpYyB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5kZW1vIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxODFweCA3M3B4IHJnYmEoMCwgMCwgMCwgMC4wMSksIDBweCAxMDJweCA2MXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDBweCA0NXB4IDQ1cHggcmdiYSgwLCAwLCAwLCAwLjA5KSwgMHB4IDExcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBtYXJnaW4tbGVmdDogNTMlO1xyXG4gIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgfVxyXG5cclxuICAuZGVtb1JldGFpbGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTgxcHggNzNweCByZ2JhKDAsIDAsIDAsIDAuMDEpLCAwcHggMTAycHggNjFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwcHggNDVweCA0NXB4IHJnYmEoMCwgMCwgMCwgMC4wOSksIDBweCAxMXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBtYXJnaW4tbGVmdDogNTMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgfVxyXG5cclxuXHJcbi5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuYS5tZW51X2xpbmtzIHsgY3Vyc29yOiBwb2ludGVyOyB9XHJcbi5tb2QuaXMtaW52YWxpZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi8vICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMC45OHB4KSB7XHJcbi8vICAgICAuZGVtbyB7XHJcbi8vICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIH1cclxuLy8gIH1cclxuXHJcbmlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjA2MjVlbTtcclxufVxyXG5cclxuIC5iZy1jYXJkLWdyYWRpZW50e1xyXG5cclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIC8vIHdpZHRoOjQ4LjglO1xyXG4gIGhlaWdodDo3MjVweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIG1heC13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTcsIDEsIDgyLCAwLjcpLCByZ2JhKDE3LCAxLCA4MiwgMC43KSksIHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luLWltZy84LnBuZyk7XHJcbn1cclxuXHJcbi5mb3JtLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2lnblVwSGVhZGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMS44cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS44cmVtO1xyXG4gIH1cclxuXHJcbiAgLmxlZnRUZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCl7XHJcblxyXG4gICAgLmxlZnRUZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpe1xyXG4gIC8vICAgLnNpZ25VcEhlYWRlciB7XHJcbiAgLy8gICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAvLyAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XHJcblxyXG4gICAgLmxlZnRUZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG5cclxuICAgIC5iZy1jYXJkLWdyYWRpZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OjQyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLy8gd2lkdGg6MTAwJTtcclxuICAgICAgICAvLyBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcclxuICAgIH1cclxuICAgIC5kZW1vIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgIGhlaWdodDogOTUwcHg7XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVtb1JldGFpbGVyIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAud2lkdGgtY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ 62167:
/*!*******************************************************************!*\
  !*** ./src/app/auth/subcription-end/subcription-end.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcriptionEndComponent": function() { return /* binding */ SubcriptionEndComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class SubcriptionEndComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubcriptionEndComponent.ɵfac = function SubcriptionEndComponent_Factory(t) { return new (t || SubcriptionEndComponent)(); };
SubcriptionEndComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubcriptionEndComponent, selectors: [["app-subcription-end"]], decls: 12, vars: 0, consts: [[1, "container-fluid"], [1, "row", "min-vh-100", "flex-center", "g-0"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "text-center"], ["routerLink", "/auth/subscription", 1, "btn", "btn-primary"]], template: function SubcriptionEndComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Gentle Reminder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your trial subscription has end. Please subcribe to our plan to continue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Choose Plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: [".card[_ngcontent-%COMP%] {\n  width: 25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmNyaXB0aW9uLWVuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzdWJjcmlwdGlvbi1lbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiAyNXJlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 74439:
/*!*************************************************************!*\
  !*** ./src/app/auth/subscription/subscription.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionComponent": function() { return /* binding */ SubscriptionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_subscription_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/subscription.service */ 43525);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);






const _c0 = ["closebutton"];
function SubscriptionComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 77);
} }
function SubscriptionComponent_ul_30_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plan_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, plan_r10.displayName), " ");
} }
function SubscriptionComponent_ul_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubscriptionComponent_ul_30_li_1_Template, 4, 3, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.trailPlan);
} }
function SubscriptionComponent_div_81_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 77);
} }
function SubscriptionComponent_div_81_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, item_r14.displayName), " ");
} }
function SubscriptionComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SubscriptionComponent_div_81_div_2_Template, 1, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SubscriptionComponent_div_81_li_3_Template, 4, 3, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isShowPlan);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.BasicPlanArrayTwo);
} }
function SubscriptionComponent_div_82_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 77);
} }
function SubscriptionComponent_div_82_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, item_r18.displayName), " ");
} }
function SubscriptionComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SubscriptionComponent_div_82_div_2_Template, 1, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SubscriptionComponent_div_82_li_3_Template, 4, 3, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isShowPlan);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.BasicPlanArrayThree);
} }
function SubscriptionComponent_div_83_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 77);
} }
function SubscriptionComponent_div_83_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, item_r22.displayName), " ");
} }
function SubscriptionComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SubscriptionComponent_div_83_div_2_Template, 1, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SubscriptionComponent_div_83_li_3_Template, 4, 3, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isShowPlan);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.BasicPlanArrayFour);
} }
function SubscriptionComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 77);
} }
function SubscriptionComponent_li_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plan_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, plan_r24.displayName), " ");
} }
function SubscriptionComponent_tr_163_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SubscriptionComponent_tr_163_Template_input_change_9_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const feature_r26 = restoredCtx.$implicit; const i_r27 = restoredCtx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.onCheckChange(feature_r26.value, $event.target.checked, i_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r27 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r27 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
} }
class SubscriptionComponent {
    constructor(subscriptionService, fb, router, route, _location) {
        this.subscriptionService = subscriptionService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.total = 0;
        this.isActive = false;
        this.features = [];
        this.pseudoArray = [];
        this.notSelectedDay = false;
        this.array = [];
        this.idTwo = false;
        this.idThree = false;
        this.idFour = false;
        this.idFive = false;
        this.idSix = false;
        this.idSeven = false;
        this.checkStat = false;
        this.checked = true;
        this.isShowPlan = true;
    }
    ngOnInit() {
        this.getAllSubscriptionPlans();
        this.getAllSubscriptionFeatures();
        // this.getBasicPlanFetaureIdTwo(2);
        // this.getPremiumPlanFetaureIdFive(5);
        //form for modal
        this.subscriptionForm = this.fb.group({
            //   grandTotal:["",this.total],
            Rows: this.fb.array([]),
        });
        this.basicSubscriptionForm = this.fb.group({
            basic90days: false,
            basic180days: false,
            basic365days: false,
        });
    }
    /**
     * Get FormArray controls
     */
    get formArray() {
        return this.subscriptionForm.get("Rows");
    }
    addNewRow() {
        const content = this.subscriptionForm.get("Rows");
        content.push(this.initRows());
    }
    initRows() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            featureName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            featureId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
        });
    }
    /**
     * Get All Subscription Features
     */
    getAllSubscriptionFeatures() {
        this.isActive = true;
        this.subscriptionService.getFeatures({}).then((res) => {
            this.featuresArray = res.data;
            // this.findTotal(this.featuresArray);
            if (res.data != null) {
                if (res.data.length > 0) {
                    res.data.forEach((element, index) => {
                        this.addNewRow();
                        this.formArray.controls[index].patchValue({
                            featureName: element.displayName.charAt(0).toUpperCase() +
                                element.displayName.substr(1).toLowerCase(),
                            price: element.price,
                            featureId: element.id
                        });
                    });
                }
            }
        });
    }
    /**
     * get all main plans
     */
    getAllSubscriptionPlans() {
        this.subscriptionService.getPlans({}).then((res) => {
            this.trialPlanId = +res.data
                .filter((x, index) => index == 0)
                .map((x) => x.id)
                .join();
            this.basicPlanIdTwo = +res.data
                .filter((x, index) => index == 1)
                .map((x) => x.id)
                .join();
            this.basicPlanIdThree = +res.data
                .filter((x, index) => index == 2)
                .map((x) => x.id)
                .join();
            this.basicPlanIdFour = +res.data
                .filter((x, index) => index == 3)
                .map((x) => x.id)
                .join();
            this.premiumPlanIdFive = +res.data
                .filter((x, index) => index == 4)
                .map((x) => x.id)
                .join();
            this.premiumPlanIdSix = +res.data
                .filter((x, index) => index == 5)
                .map((x) => x.id)
                .join();
            this.premiumPlanIdSeven = +res.data
                .filter((x, index) => index == 6)
                .map((x) => x.id)
                .join();
            this.getTrialPlanFetaure(this.trialPlanId);
            this.getBasicPlanFetaureIdTwo(this.basicPlanIdTwo);
            this.getBasicPlanFetaureIdThree(this.basicPlanIdThree);
            this.getBasicPlanFetaureIdFour(this.basicPlanIdFour);
            this.getPremiumPlanFetaureIdFive(this.premiumPlanIdFive);
            this.getPremiumPlanFetaureIdSix(this.premiumPlanIdSix);
            this.getPremiumPlanFetaureIdSeven(this.premiumPlanIdSeven);
            //this.planId=id;
            // console.log("trailPlanId", this.trialPlanId);
            // console.log("basicPlanIdTwo", this.basicPlanIdTwo);
            // console.log("basicPlanIdThree", this.basicPlanIdThree);
            // console.log("basicPlanIdFour", this.basicPlanIdFour);
            // console.log("premiumPlanIdFive", this.premiumPlanIdFive);
            // console.log("premiumPlanIdSix", this.premiumPlanIdSix);
            // console.log("premiumPlanIdSeven", this.premiumPlanIdSeven);
        });
    }
    /**
     * get trial plan feature by id
     * @param trialPlanId
     */
    getTrialPlanFetaure(trialPlanId) {
        this.subscriptionService.getFetaureById({}, trialPlanId).then((res) => {
            this.isShowPlan = false;
            this.trailPlan = res.data;
        });
    }
    /**
     * get basic plan feature by id 2
     * @param basicPlanIdTwo
     */
    getBasicPlanFetaureIdTwo(basicPlanIdTwo) {
        this.idThree = false;
        this.idFour = false;
        this.idTwo = true;
        this.subscriptionService.getFetaureById({}, basicPlanIdTwo).then((res) => {
            this.isShowPlan = false;
            this.BasicPlanArrayTwo = res.data;
        });
        // this.basicId = basicPlanIdTwo;
    }
    /**
     * get basic plan feature by id 3
     * @param basicPlanIdThree
     */
    getBasicPlanFetaureIdThree(basicPlanIdThree) {
        this.idTwo = false;
        this.idFour = false;
        this.idThree = true;
        this.subscriptionService
            .getFetaureById({}, basicPlanIdThree)
            .then((res) => {
            this.isShowPlan = false;
            this.BasicPlanArrayThree = res.data;
        });
        // this.basicId = basicPlanIdThree;
    }
    /**
     * get basic plan feature by id 4
     * @param basicPlanIdFour
     */
    getBasicPlanFetaureIdFour(basicPlanIdFour) {
        this.idThree = false;
        this.idTwo = false;
        this.idFour = true;
        this.subscriptionService.getFetaureById({}, basicPlanIdFour).then((res) => {
            this.isShowPlan = false;
            this.BasicPlanArrayFour = res.data;
        });
        // this.basicId = basicPlanIdFour;
    }
    /**
     * get basic plan feature by id 5
     * @param premiumPlanIdFive
     */
    getPremiumPlanFetaureIdFive(premiumPlanIdFive) {
        this.idSix = false;
        this.idSeven = false;
        this.idFive = true;
        this.subscriptionService
            .getFetaureById({}, premiumPlanIdFive)
            .then((res) => {
            this.isShowPlan = false;
            this.premiumPlanArrayFive = res.data;
        });
    }
    /**
     * get basic plan feature by id 6
     * @param premiumPlanIdSix
     */
    getPremiumPlanFetaureIdSix(premiumPlanIdSix) {
        this.idSix = true;
        this.idSeven = false;
        this.idFive = false;
        this.subscriptionService
            .getFetaureById({}, premiumPlanIdSix)
            .then((res) => {
            this.premiumPlanArraySix = res.data;
        });
    }
    /**
     * get basic plan feature by id 7
     * @param premiumPlanIdSeven
     */
    getPremiumPlanFetaureIdSeven(premiumPlanIdSeven) {
        this.idSix = false;
        this.idSeven = true;
        this.idFive = false;
        this.subscriptionService
            .getFetaureById({}, premiumPlanIdSeven)
            .then((res) => {
            this.premiumPlanArraySeven = res.data;
        });
    }
    /**
     * post subscribe basic plan with 90 days
     */
    basicPostSubscription() {
        let data = {
            "subscriptionPlanId": this.basicId,
            "userId": this.currentUser.id,
        };
        // console.log("basicId: " + this.basicId)
        // console.log("userId: " + this.currentUser.id)
        this.subscriptionService.basicSubsription(data).then((res) => {
            this.router.navigate([`auth/payment-subscription/${this.basicId}/${res.data.subscriptionPaymentId}/${res.data.userSubscriptionId}`]);
        });
    }
    /**
     * Get Radio button values according to days
     * @param days
     */
    getPremiumPackDays(days) {
        this.premiumId = days;
        if (days == 5) {
            this.grandTotal = 0;
            this.planDays = "90Days";
            this.grandTotal = 3 * this.total;
        }
        else if (days == 6) {
            this.grandTotal = 0;
            this.planDays = "180Days";
            this.grandTotal = 6 * this.total;
        }
        else if (days == 7) {
            this.grandTotal = 0;
            this.planDays = "365days";
            this.grandTotal = (365 / 30 * this.total).toFixed(2);
        }
    }
    /**
     * Get checkbox value total accoridng to selected features
     * @param item
     * @param event
     * @param i
     */
    onCheckChange(item, event, i) {
        if (event) {
            var index = this.pseudoArray.indexOf(item.featureId);
            if (index == -1) {
                this.pseudoArray.push(item.featureId);
            }
            if (this.premiumId == 5) {
                this.total += item.price;
                //this.planDays = "90Days";
                this.grandTotal = 3 * this.total;
            }
            else if (this.premiumId == 6) {
                this.total += item.price;
                this.grandTotal = 0;
                this.planDays = "180Days";
                this.grandTotal = 6 * this.total;
            }
            else if (this.premiumId == 7) {
                this.total += item.price;
                this.grandTotal = 0;
                this.planDays = "365days";
                this.grandTotal = (365 / 30 * this.total).toFixed(2);
            }
            else {
                this.total += item.price;
            }
        }
        else if (!event) {
            var index = this.pseudoArray.indexOf(item.featureId);
            if (index !== -1) {
                this.pseudoArray.splice(index, 1);
            }
            if (this.premiumId == 5) {
                this.total -= item.price;
                //this.planDays = "90Days";
                this.grandTotal = 3 * this.total;
            }
            else if (this.premiumId == 6) {
                this.total -= item.price;
                this.grandTotal = 0;
                this.planDays = "180Days";
                this.grandTotal = 6 * this.total;
            }
            else if (this.premiumId == 7) {
                this.total -= item.price;
                this.grandTotal = 0;
                this.planDays = "365days";
                this.grandTotal = (365 / 30 * this.total).toFixed(2);
            }
            else {
                this.total -= item.price;
            }
        }
    }
    /**
     * Post customer premium plan details
     */
    premiumPostSubscription() {
        let data = {
            "subscriptionPlanId": this.premiumId,
            "userId": this.currentUser.id,
            "featureId": this.pseudoArray,
            "amount": this.grandTotal
        };
        // console.log("premiumId: " + this.premiumId)
        this.subscriptionService.premiumSubscription(data).then((res) => {
            this.closebutton.nativeElement.click();
            //this.router.navigate([`auth/payment-subscription/${this.premiumId}`])
            this.router.navigate([`auth/payment-subscription/${this.premiumId}/${res.data.subscriptionPaymentId}/${res.data.userSubscriptionId}`]);
        });
    }
    goTOBack() {
        this._location.back();
    }
}
SubscriptionComponent.ɵfac = function SubscriptionComponent_Factory(t) { return new (t || SubscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_subscription_service__WEBPACK_IMPORTED_MODULE_0__.SubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location)); };
SubscriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SubscriptionComponent, selectors: [["subscription"]], viewQuery: function SubscriptionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closebutton = _t.first);
    } }, decls: 186, vars: 16, consts: [[1, "card", "mb-3"], [1, "card-body", "px-5"], [1, "row", "g-0"], [1, "col-12", "mb-2"], [1, "row", "justify-content-center", "justify-content-sm-between"], [1, "col-sm-auto", "text-center"], [1, "d-inline-block"], [1, "col-sm-auto", "mt-1", "mt-sm-0"], [1, "btn", "btn-outline-primary", 2, "float", "right!important", 3, "click"], [1, "col-lg-4", "border-top", "border-bottom"], [1, "h-100"], [1, "text-center", "p-4"], [1, "fw-medium", "my-0", "xxl-font-size"], [1, "mt-3"], [1, "fw-medium", "my-5"], [1, "fs--1", "text-700"], ["routerLink", "/pages", 1, "btn", "btn-outline-primary", "disabled"], [1, "border-bottom-0", "m-0", "overflow-auto"], [1, "text-start", "px-sm-4", "py-4"], [1, "fw-medium", "fs-0"], [1, "d-flex", "justify-content-center"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "list-unstyled mt-3", 4, "ngIf"], [1, "col-lg-4", "border-top", "border-bottom", "dark__bg-1000", "px-4", "px-lg-0", 2, "background-color", "rgba(115, 255, 236, 0.18)"], [2, "border", "0px solid red"], [1, "row"], [1, "col-sm-4", 2, "padding-right", "0px"], [1, "radio-toolbar"], ["type", "radio", "id", "radioApple", "name", "radioFruit", "value", "2", "checked", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "radioApple"], [1, "m-0", 3, "click"], [2, "white-space", "nowrap"], [1, "text-700", "p-0", "m-0", 2, "font-size", "0.8rem"], [1, "col-sm-4", 2, "padding-left", "0px", "padding-right", "0px"], ["type", "radio", "id", "radioPlan2", "name", "radioPlan2", "value", "3", "checked", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "radioPlan2"], [2, "font-size", "1.2rem", "white-space", "nowrap"], [1, "col-sm-4", 2, "padding-left", "0px"], ["type", "radio", "id", "radioPlan3", "name", "radioPlan3", "value", "4", "checked", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "radioPlan3"], [1, "btn", "btn-primary", "mt-3", 3, "click"], [1, "list-unstyled", "mt-3"], [4, "ngIf"], [1, "radio-toolbar2"], ["for", "radioApple23", 2, "margin", "0px", "width", "100%", "padding", "5px 10px", "border", "2px solid #fff"], [1, "fw-medium", "my-4"], ["data-bs-toggle", "modal", "data-bs-target", "#selection-feature-modal", 1, "btn", "btn-outline-primary", "mt-3"], [1, "border-bottom-0", "m-0"], ["class", "py-1 larger-font-size", 4, "ngFor", "ngForOf"], ["id", "selection-feature-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade", "fs--1"], ["role", "document", 1, "modal-dialog", "fs--1", "modal-dialog-centered", 2, "max-width", "900px"], [1, "modal-content", "fs--1", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], ["closebutton", ""], [1, "modal-body", "fs--1", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", 2, "font-size", "20px", "font-weight", "bold"], [1, "row", "text-center", "m-2"], [1, "col-sm-4"], [1, "fw-medium", "my-4", "thumbnail", 3, "click"], [1, "fs--1"], [1, "text-nowrap", 2, "font-size", "20px"], [1, "fs--1", "text-nowrap", "text-700"], [1, "p-2", "pb-0", "table-responsive"], [3, "formGroup"], ["formArrayName", "Rows"], [1, "table", "table-bordered", "fs--1", "mb-0"], [1, "text-center"], ["scope", "col", 1, "text-white"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "text-center", "fs--1"], ["scope", "col"], ["scope", "col", 2, "color", "#000000"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", "fs--1"], ["type", "button", "id", "closeModal", 1, "btn", "btn-outline-primary", "fs--1", 3, "disabled", "click"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "py-1", "larger-font-size"], [1, "me-2", "fas", "fa-check", "text-success"], [3, "formGroupName"], [2, "padding-top", "1.3rem !important"], ["readonly", "", "type", "text", "formControlName", "featureName", 1, "form-control", "form-control-sm"], ["readonly", "", "type", "text", "formControlName", "price", 1, "form-control", "form-control-sm"], [1, "d-flex", "form-check", "form-check-sm", 2, "justify-content", "center"], ["formControlName", "active", "id", "flexCheckDefault", "type", "checkbox", 1, "form-check-input", 3, "checked", "change"]], template: function SubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Billed Annually");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubscriptionComponent_Template_a_click_9_listener() { return ctx.goTOBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Single");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "For teams that need to create project plans with confidence.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " \u20B90");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "/ year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Start free trial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Track team projects with free:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SubscriptionComponent_div_29_Template, 1, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, SubscriptionComponent_ul_30_Template, 2, 1, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "For teams and companies that need to manage work across initiatives.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SubscriptionComponent_Template_input_ngModelChange_42_listener($event) { return ctx.basicId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubscriptionComponent_Template_h2_click_44_listener() { return ctx.getBasicPlanFetaureIdTwo(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u20B9500");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " 3 Months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SubscriptionComponent_Template_input_ngModelChange_52_listener($event) { return ctx.basicId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubscriptionComponent_Template_h2_click_54_listener() { return ctx.getBasicPlanFetaureIdThree(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " 6 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SubscriptionComponent_Template_input_ngModelChange_64_listener($event) { return ctx.basicId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubscriptionComponent_Template_h2_click_66_listener() { return ctx.getBasicPlanFetaureIdFour(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "1500");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "1 Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubscriptionComponent_Template_a_click_74_listener() { return ctx.basicPostSubscription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Get Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Everything in Basic, plus:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ul", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, SubscriptionComponent_div_81_Template, 4, 2, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, SubscriptionComponent_div_82_Template, 4, 2, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, SubscriptionComponent_div_83_Template, 4, 2, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " For organizations that need additional security and support. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "\u20B92999");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "/ year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Customize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "hr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Everything in Premium, plus:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "ul", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, SubscriptionComponent_div_105_Template, 1, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, SubscriptionComponent_li_106_Template, 4, 3, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "button", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h2", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Premium Features ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "h2", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubscriptionComponent_Template_h2_click_119_listener() { return ctx.getPremiumPackDays(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, " \u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "499");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "small", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, " / 90days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "h2", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubscriptionComponent_Template_h2_click_129_listener() { return ctx.getPremiumPackDays(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, " \u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "999");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "small", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, " / 180days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "h2", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubscriptionComponent_Template_h2_click_139_listener() { return ctx.getPremiumPackDays(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, " \u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "999");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "small", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, " / 365days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "form", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "table", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "thead", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "tbody", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](163, SubscriptionComponent_tr_163_Template, 10, 3, "tr", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "tr", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "th", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "th", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, " Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "tr", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Plan Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Grand Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubscriptionComponent_Template_button_click_184_listener() { return ctx.premiumPostSubscription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isShowPlan);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isShowPlan);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.basicId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.basicId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.basicId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.idTwo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.idThree);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.idFour);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isShowPlan);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.premiumPlanArrayFive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.subscriptionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.subscriptionForm.get("Rows")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.total, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.planDays, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.grandTotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.grandTotal == null);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: [".col-border[_ngcontent-%COMP%] {\n  border: 1px solid #2c7be5;\n  margin: 5px;\n  border-radius: 20px;\n}\n\n.radio-toolbar[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  opacity: 0;\n  position: fixed;\n  width: 0;\n}\n\n.bottomLink[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  right: 0;\n  left: 0;\n  text-align: center;\n}\n\n.radio-toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin: 0px;\n  padding: 5px 10px;\n  border-radius: 4px;\n  border: 2px solid rgba(115, 255, 236, 0.18);\n}\n\n.radio-toolbar[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%] {\n  border: 2px solid #2c7be5;\n  background-color: #b0cff8f8;\n  color: #fff;\n}\n\n.radio-toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  border: 2px solid #2c7be5;\n}\n\n.radio-toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:focus {\n  color: #fff;\n}\n\n.form-control-sm[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n  text-align: center;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n}\n\n.thumbnail[_ngcontent-%COMP%]:hover {\n  border: 2px solid #2c7be5;\n  cursor: pointer;\n}\n\n.xxl-font-size[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: none !important;\n}\n\ninput[type=text][_ngcontent-%COMP%]:-moz-read-only {\n  background-color: white !important;\n}\n\ninput[type=text][_ngcontent-%COMP%]:read-only {\n  background-color: white !important;\n}\n\na.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none;\n  background-color: lightgray;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUdBLGVBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxpQ0FBQTtBQURKOztBQUlBO0VBQ0ksa0NBQUE7QUFESjs7QUFBQTtFQUNJLGtDQUFBO0FBREo7O0FBSUE7RUFDSSxvQkFBQTtFQUNELGVBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQURIIiwiZmlsZSI6InN1YnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYzdiZTU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5yYWRpby10b29sYmFyIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5ib3R0b21MaW5rIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmFkaW8tdG9vbGJhciBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDExNSwgMjU1LCAyMzYsIDAuMTgpO1xyXG59XHJcblxyXG4ucmFkaW8tdG9vbGJhciBpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMrbGFiZWwge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJjN2JlNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGNmZjhmODtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5yYWRpby10b29sYmFyIGxhYmVsOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyYzdiZTU7XHJcbn1cclxuXHJcbi5yYWRpby10b29sYmFyIGxhYmVsOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXNtIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aHVtYm5haWwge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50aHVtYm5haWw6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJjN2JlNTtcclxuICAgIC8vIHRyYW5zaXRpb246IGJvcmRlci13aWR0aCAwLjJzIGxpbmVhcjtcclxuICAgIC8vICAgb3BhY2l0eTogMC41O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ueHhsLWZvbnQtc2l6ZXtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC8vIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0W3R5cGU9dGV4dF06cmVhZC1vbmx5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEuZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4vLyAgICAuZm9ybS1jaGVjay1pbnB1dFt0eXBlPWNoZWNrYm94XTo6YWZ0ZXJ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM3YmU1IWltcG9ydGFudDtcclxuLy8gICAgfSJdfQ== */"] });


/***/ }),

/***/ 71598:
/*!***************************************************************************!*\
  !*** ./src/app/auth/term-condition-page/term-condition-page.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermConditionPageComponent": function() { return /* binding */ TermConditionPageComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class TermConditionPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
TermConditionPageComponent.ɵfac = function TermConditionPageComponent_Factory(t) { return new (t || TermConditionPageComponent)(); };
TermConditionPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermConditionPageComponent, selectors: [["app-term-condition-page"]], decls: 261, vars: 0, consts: [[1, "row", "mt-2"], [1, "col-lg-2", "col-2", "col-md-2"], [1, "col-lg-8", "col-8", "col-md-8"], [1, "card", 2, "margin-left", "10px!important", "margin-right", "10px!important"], [1, "card-header", "bg-light", "pt-3", "pb-3"], [1, "d-md-inline-block", "fs--1", "mt-3", "ml-5", 2, "font-weight", "800", "font-size", "24px!important"], [1, "progress", 2, "height", "2px"], ["role", "progressbar", "aria-valuenow", "33", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-12"], [2, "font-weight", "800", "font-size", "18px!important"], [1, "row"], [1, "col-2"], [2, "font-weight", "800", "font-size", "16px!important", "color", "rgb(71, 157, 168)"], [1, "col-10"], [2, "border-bottom", "3px solid #ccc!important"]], template: function TermConditionPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " iCeipts Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "iCeipts is committed to protecting your privacy and this privacy statement describes in greater detail the privacy practices of iCeipts Technologies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Review these Terms of Service (\"Agreement\") thoroughly. This Agreement is a legal agreement between the User and iCeipts. By accepting electronically (for example, clicking \u201CI Agree\u201D), installing, accessing or using the Services, User agrees to these terms. If the User does not agree to this Agreement, then he/she may not use the Services. This License Agreement shall be governed by and construed in accordance with the laws of the INDIA.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Modification of terms & conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "These terms may be updated from time to time in the future. The User should agree to review our Terms and Conditions regularly by visiting this page. Continued access to or use of the service will mean that the User agrees to the change.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "When This Privacy Statement Applies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Its liability to the User is limited to those who have downloaded the iCeipts application by clicking on the \u201CI Agree/Login\u201D button for Terms and Conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Description of Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "We provide an array of services including Inventory management, Invoicing, Reporting tool, Estimate/Order Form creator and so on to serve as a complete business management software (\"Service\" or \"Services\"). The User may use the Services for his/her personal and business use or for internal business purpose in the organization that he/she represent. The User may download the application from the Official website/ Google Play Store using the Internet. Once downloaded, the User no longer needs an internet connection for its usage. A User can create and add content to his/her account staying offline. But, the User is responsible for obtaining access to the Internet and the device necessary to use the Services. ( Side Note: iCeipts tries its best to make Businesses compliant to taxation and other laws as much as possible. But, it is solely the User\u2019s responsibility to see that he/she remains compliant with GST and other laws levied by Government. iCeipts is not in any case responsible for the violation of the compliance caused by software)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Business Data and Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "The User alone is responsible for maintaining the confidentiality of his/her username, password and other sensitive information. He/She is responsible for all activities that occur in his/her user account and he/she agrees to inform us immediately of any unauthorized use of their user account by email to admin@iceipts.com. in or by calling us on any of the numbers listed on http://vyaparapp.in/#contact. We are not responsible for any loss or damage to his/her or to any third party incurred as a result of any unauthorized access and/or use of his/her user account, or otherwise. We are neither responsible for any kind of data loss as performing necessary backups on data is solely the User\u2019s responsibility. iCeipts is not responsible for any kind of data discrepancy or any type of loss occured due to data discrepancy/software issue.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Data Ownership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "The User owns the content created or stored by his/her as we respect his/her right to ownership of content created or stored by them. The Users use of the Services does grant iCeipts the license to use, reproduce, adapt, modify, publish or distribute the content created by them or stored in the user\u2019s account for iCeipts internal purpose. iCeipts tries keeping Users data safe but holds zero responsibility in case of data leaks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Camera:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "To take the picture of the bills etc to be attached with transactions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Contacts:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " This app collects contact information like number of contacts on the device with a phone number and without a phone number. In addition to it, the app collects other non-personal information to understand the risk profile of the user and enable credit facility. This app doesn't upload your contacts information like names, phone numbers, emails addresses and other personal information to our servers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Storage:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "This app collects metadata of files on your device like file names, types, created times, last updated times for credit profile enrichment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "This app collects location details to verify your location & current address, to ensure serviceability and to identify unusual activity to prevent against any fraud, we do not collect location when app is in background.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "SMS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " This app collects SMS data like sender names, SMS body, received time to understand your income, spending patterns and automatically fetch your expenses, bills, credits. We do not read any personal or OTP messages. This data will be shared with Finbox at https://riskmanager.apis.finbox.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Device and Personal info:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " This app collects and monitor specific information about users' Phone Number and your device including your hardware model, masked phone numbers, operating system and version, unique device identifiers like IMEI and serial number, user profile information to uniquely identify the devices and ensure that unauthorized devices are not able to act on your behalf to prevent frauds. This data will be shared with Finbox at https://riskmanager.apis.finbox.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Accounts:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " This app collects and monitor list of account information like account names, account types in your device for credit profile enrichment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Apps:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "This app collects details of your installed applications to understand your profile. This helps us give quicker approvals and higher credit limits.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Call logs:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "This app uses call logs permission to validate your phone number using missed call. In addition to it, details of your aggregated call information is collected to understand your profile. This helps us give quicker approvals and higher credit limits. We do not read the phone numbers or any personal information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Calendar:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " This app collects event data on your calendar for credit profile enrichment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Permissions Usage:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Collection of contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "This is how we will use your contact permissions:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "(i) We allow users to sync their contacts from mobile to desktop, the contact permissions will be used to facilitate this.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "(ii) We will show parties that are already iCeipts users, to show you your potential buyers and suppliers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Collection of SMS information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "We will use SMS data like sender names, SMS body, received time to understand your income, spending patterns and automatically fetch your expenses, bills, credits. We do not read any personal or OTP messages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "We collect and monitor SMS sent by 6-digit alphanumeric senders from your inbox to understand your income, spending patterns and automatically fetch your expenses, bills, credits. We collect your historical SMS data as well, as this process will enable you to take financial facilities like loans, credit cards from the regulated financial entities available on the platform. We do not read any personal or OTP messages. This data will be shared with Finbox at https://riskmanager.apis.finbox.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Collection of device location, device information and personal information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " We collect and monitor the information about the location of your device to provide serviceability of your loan application, to reduce the risk associated with your loan application and to provide pre-approved customised loan offers. This also helps us to verify the address, make a better credit risk decision and expedite the know your customer (KYC) process. Information the App collects, and its usage depends on how you manage your privacy controls on your device. When you install the App, we store the information we collect with unique identifiers tied to the device you are using. We collect information from the device when you download and install the App and explicitly seek permissions from You to get the required information from the device. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " The information we collect from your device includes the users' phone number, masked phone numbers, hardware model, build model, RAM, storage; unique device identifiers like IMEI, serial number, SSAID; SIM information that includes network operator, roaming state, MNC and MCC codes, WIFI information that includes MAC address and mobile network information to uniquely identify the devices and ensure that no unauthorized device acts on your behalf to prevent frauds. This data will be shared with Finbox at https://riskmanager.apis.finbox.in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Collection of installed applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " We collect a list of the installed applications\u2019 metadata information which includes the application name, package name, installed time, updated time, version name and version code of each installed application on your device to assess your creditworthiness and enrich your profile with pre-approved customized loan offers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Collection of Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " The images uploaded by users in iCeipts App are stored on our servers so they can be accessed from multiple devices. We do this to enhance your user experience and make it seamless. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " We require storage permission so that your KYC and other relevant documents can be securely downloaded and saved on your phone. You can then easily upload the correct KYC related documents for faster loan application details filling and disbursal process. This ensures that you are provided with a seamless experience while using the application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " We require the camera information permission to provide you with an easy/smooth experience and to enable you to click photos of your KYC documents along with other requisite documents and upload the same on the App during your loan application journey. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Collection of other non-personal information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " We automatically track certain information about you based upon your behaviour on our Platform. We use this information to do internal research on our users\u2019 demographics, interests, and behaviour to better understand, protect and serve our users and improve our services. This information is compiled and analysed on an aggregated basis. We also collect your Internet Protocol (IP) address and the URL used by you to connect your computer to the internet, etc. This information may include the URL that you just came from (whether this URL is on our Website or not), which URL you next go to (whether this URL is on our Website or not), your computer browser information, and your IP address. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Cookies are small data files that a Website stores on Your computer. We will use cookies on our Website similar to other lending websites/apps and online marketplace websites/apps. Use of this information helps Us identify You in order to make our Website more user friendly. Most browsers will permit You to decline cookies but if You choose to do this it might affect service on some parts of Our Website. If you choose to make a purchase through the Platform, we collect information about your buying behaviour. We retain this information as necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Website, we collect such information into a file specific to you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Link to third-party SDK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "The iCeipts Platform has a link to a registered third party SDK that collects data on our behalf and data is stored on a secured server to perform a credit risk assessment. We ensure that our third-party service provider takes extensive security measures in order to protect your personal information against loss, misuse or alteration of the data. Our third-party service provider employs separation of environments and segregation of duties and has strict role-based access control on a documented, authorized, need to-use basis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " The stored data is protected and stored by application-level encryption. They enforce key management services to limit access to data. Furthermore, our registered third party service provider provides hosting security \u2013 they use industry-leading anti-virus, anti-malware, intrusion prevention systems, intrusion detection systems, file integrity monitoring, and application control solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Approval of Alerts, Messages and Promotional campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "In addition to the General Conditions of iCeipts service a User agrees to be bound by the following terms and conditions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "(i) The User agrees to receive promotional, transactional and commercial communications from Vyapar through calls, email, SMS or push notifications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "(ii) Under certain conditions, promotional messages are transmitted to the users and that vyapar shall not bear any further obligation in respect of such promotional messages. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Cancellation/Refund Policy:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "1. If the Refund request is reported to us through email/website within 7 days of purchase and we will give you 100% money back. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "2. The refund request should be raised via email or website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "3. Refund policies will be applicable only for purchases equal to or more than 1 year.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "END OF TERMS OF SERVICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "If you have any questions or concerns regarding this Agreement, please contact us at admin@iceipts.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtLWNvbmRpdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 44309:
/*!*****************************************************************************************!*\
  !*** ./src/app/auth/verify-otp-forgot-password/verify-otp-forgot-password.component.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyOtpForgotPasswordComponent": function() { return /* binding */ VerifyOtpForgotPasswordComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/login.service */ 91315);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 65788);








function VerifyOtpForgotPasswordComponent_mat_error_34_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email Address Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VerifyOtpForgotPasswordComponent_mat_error_34_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email Is Required in Format! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VerifyOtpForgotPasswordComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VerifyOtpForgotPasswordComponent_mat_error_34_mat_error_1_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VerifyOtpForgotPasswordComponent_mat_error_34_mat_error_2_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.forgetpass.errors == null ? null : ctx_r0.f.forgetpass.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.forgetpass.errors == null ? null : ctx_r0.f.forgetpass.errors.email);
} }
function VerifyOtpForgotPasswordComponent_mat_error_36_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " OTP Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VerifyOtpForgotPasswordComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VerifyOtpForgotPasswordComponent_mat_error_36_mat_error_1_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.otp.errors == null ? null : ctx_r1.f.otp.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class VerifyOtpForgotPasswordComponent {
    constructor(formBuilder, toastService, loginService, router, titleCasePipe) {
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.loginService = loginService;
        this.router = router;
        this.titleCasePipe = titleCasePipe;
    }
    ngOnInit() {
        this.VerifyOTPForm = this.formBuilder.group({
            forgetpass: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            otp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    get f() {
        return this.VerifyOTPForm.controls;
    }
    postforgotpassword() {
        this.submitted = true;
        if (this.VerifyOTPForm.invalid) {
            return false;
        }
        else {
            let body = {
                "email": this.VerifyOTPForm.controls.forgetpass.value,
                "otp": this.VerifyOTPForm.controls.otp.value
            };
            this.loginService.verifyforgetOtp(body).then((res) => {
                this.toastService.openSnackBar("OTP Verified Successfully");
                this.router.navigate(["/auth/change-forgot-password"]);
            }, (err) => {
                if (err.error.expose) {
                    this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
                }
                else {
                    this.toastService.openErrorSnackBar("Something Went Wrong.");
                }
            });
        }
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
VerifyOtpForgotPasswordComponent.ɵfac = function VerifyOtpForgotPasswordComponent_Factory(t) { return new (t || VerifyOtpForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe)); };
VerifyOtpForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VerifyOtpForgotPasswordComponent, selectors: [["app-verify-otp-forgot-password"]], decls: 47, vars: 9, consts: [["id", "top", 1, "main"], [1, "container-fluid"], [1, "row", "min-vh-100", "flex-center", "g-0"], [1, "col-sm-12", "col-md-12", "col-lg-10", "col-xl-8", "col-xxl-7", "py-3", "position-relative"], [1, "card", "overflow-hidden", "z-index-1"], [1, "card-body", "p-0"], [1, "row", "g-0", "h-100"], [1, "col-sm-12", "col-md-6", "col-lg-6", "bg-card-gradient"], [1, "position-relative", "p-3"], [1, "z-index-1", "position-relative", "p-3"], [1, "mt-3", "d-flex"], ["src", "assets/img/icons/spot-illustrations/new-logo-iceipt.png", "alt", "iceipts logo", "width", "80", "height", "80"], [1, "fas", "fa-quote-left", "d-flex", "mt-5", 2, "color", "#00DAF7"], [1, "opacity-75", "text-white", "d-flex", "justify-content-center", "leftText"], [1, "opacity-75", "text-white", "d-flex"], [1, "col-sm-12", "col-md-6", "col-lg-6", "form-box"], [1, "p-4", "p-md-5", "flex-grow-1", "form-body"], [1, "text-center", "text-md-start"], [1, "mb-0", 2, "font-family", "Poppins"], [1, "mb-4", 2, "font-family", "Poppins"], [1, "row", "justify-content-center"], [1, "col-sm-8", "col-md"], [1, "mb-3", 3, "formGroup"], ["formControlName", "forgetpass", "type", "email", "placeholder", "Email address", 1, "form-control", "mb-2", 3, "ngClass"], ["class", "text-danger mb-1", 4, "ngIf"], ["formControlName", "otp", "type", "email", "placeholder", "Enter OTP", 1, "form-control", "mb-2", 3, "ngClass", "keypress"], ["type", "submit", "name", "submit", 1, "btn", "btn-primary", "d-block", "w-100", "mt-3", 2, "background", "#110152", 3, "click"], [2, "font-family", "Poppins"], ["routerLink", "/auth/login", 1, "fs--1", "text-600"], [1, "d-inline-block", "ms-1"], [1, "text-danger", "mb-1"], [4, "ngIf"]], template: function VerifyOtpForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " The technology that looks impossible today will");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "be part of our life tomorrow. Iceipts technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "creating difference. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Sibanee kar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Verify your OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Enter your Email and we'll send you a reset link.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, VerifyOtpForgotPasswordComponent_mat_error_34_Template, 3, 2, "mat-error", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function VerifyOtpForgotPasswordComponent_Template_input_keypress_35_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, VerifyOtpForgotPasswordComponent_mat_error_36_Template, 2, 1, "mat-error", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerifyOtpForgotPasswordComponent_Template_button_click_37_listener() { return ctx.postforgotpassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Verify OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Back to Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "this page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.VerifyOTPForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.f.forgetpass.invalid && ctx.f.forgetpass.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.forgetpass.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx.f.otp.invalid && ctx.f.otp.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.otp.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError], styles: [".form-body[_ngcontent-%COMP%] {\n  display: flexbox;\n  justify-content: center;\n  background: #FFFFFF;\n  margin: 10%;\n  box-shadow: 0px 181px 73px rgba(0, 0, 0, 0.01), 0px 102px 61px rgba(0, 0, 0, 0.05), 0px 45px 45px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);\n}\n\n.bg-card-gradient[_ngcontent-%COMP%] {\n  background-size: contain;\n  background-position: center center;\n  max-width: 100% !important;\n  background: linear-gradient(0deg, rgba(17, 1, 82, 0.7), rgba(17, 1, 82, 0.7)), url('8.png');\n}\n\n.form-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media (min-width: 2000px) {\n  .leftText[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n\n@media (max-width: 992px) {\n  .leftText[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n}\n\n@media (width: 768px) {\n  .form-box[_ngcontent-%COMP%] {\n    transform: translateX(200px);\n  }\n}\n\n@media (max-width: 768px) {\n  .main[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .bg-card-gradient[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 350px;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .form-box[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin: 24px 0px;\n  }\n}\n\n@media (max-width: 250px) {\n  .bg-card-gradient[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 400px;\n    justify-content: center;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1vdHAtZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVGLHVMQUFBO0FBQUY7O0FBS0E7RUFNRSx3QkFBQTtFQUNELGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSwyRkFBQTtBQVBEOztBQVVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFXQTtFQUVFO0lBQ0UsMEJBQUE7RUFURjtBQUNGOztBQVlBO0VBRUU7SUFDRSwwQkFBQTtFQVhGO0FBQ0Y7O0FBY0E7RUFFRTtJQUNFLDRCQUFBO0VBYkY7QUFDRjs7QUFpQkE7RUFDRTtJQUNHLFdBQUE7RUFmSDs7RUFrQkE7SUFDRSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFmRjs7RUFrQkE7SUFDRSx1QkFBQTtJQUNBLGdCQUFBO0VBZkY7QUFDRjs7QUFtQkE7RUFFRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQWxCRjtBQUNGIiwiZmlsZSI6InZlcmlmeS1vdHAtZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4Ym94O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luOiAxMCU7XHJcblxyXG4gIGJveC1zaGFkb3c6IDBweCAxODFweCA3M3B4IHJnYmEoMCwgMCwgMCwgMC4wMSksIDBweCAxMDJweCA2MXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDBweCA0NXB4IDQ1cHggcmdiYSgwLCAwLCAwLCAwLjA5KSwgMHB4IDExcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC8vICAgbWFyZ2luOiAwcHggMHB4IDBweCA1MHB4IWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5iZy1jYXJkLWdyYWRpZW50e1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgLy8gcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgLy8gd2lkdGg6NDguOCU7XHJcbiAgLy8gaGVpZ2h0OjcyNXB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xyXG4gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuIG1heC13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNywgMSwgODIsIDAuNyksIHJnYmEoMTcsIDEsIDgyLCAwLjcpKSwgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4taW1nLzgucG5nKTs7XHJcbn1cclxuXHJcbi5mb3JtLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCl7XHJcblxyXG4gIC5sZWZ0VGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XHJcblxyXG4gIC5sZWZ0VGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAod2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgLmZvcm0tYm94IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmJnLWNhcmQtZ3JhZGllbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MzUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ib3gge1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIG1hcmdpbjogMjRweCAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDI1MHB4KSB7XHJcblxyXG4gIC5iZy1jYXJkLWdyYWRpZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 75301:
/*!*********************************************************!*\
  !*** ./src/app/core/services/ledger-service.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LedgerServiceService": function() { return /* binding */ LedgerServiceService; }
/* harmony export */ });
/* harmony import */ var src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/url-constants */ 16393);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 72229);




class LedgerServiceService {
    // allLedgerData$ = this.ledgerDataSubject.asObservable();
    constructor(httpClient) {
        this.httpClient = httpClient;
        // public sharedArray: any[] = [];
        this.ledgerDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.MasterLedgerData$ = this.ledgerDataSubject.asObservable();
    }
    setLedgerData(data) {
        console.log("setLedger in service", data);
        this.ledgerDataSubject.next(data);
    }
    addLedger(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.addLedger + userId, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getUserLedger2(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getUserLedger2 + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getAllGlnames(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getAllGlnames + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getUserUsecaseData(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getUserUsecaseData + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    addCustomLedger(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.addCustomLedger + userId, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    assignLedgersv2(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.assignLedgersv2 + userId, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getUserChildLedger(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getUserChildLedger + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    masterLedgerTrueFalse(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.masterLedgerTrueFalse + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
}
LedgerServiceService.ɵfac = function LedgerServiceService_Factory(t) { return new (t || LedgerServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
LedgerServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LedgerServiceService, factory: LedgerServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 91315:
/*!************************************************!*\
  !*** ./src/app/core/services/login.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": function() { return /* binding */ LoginService; }
/* harmony export */ });
/* harmony import */ var src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/url-constants */ 16393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 72229);



class LoginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    postSendOtp(data) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.sendCustomerOtp, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    // postVerifyOtp(data: {}): any {
    //   return new Promise((resolve, reject) => {
    //     this.httpClient.call(data, UrlConstants.verifyCustomerOtp ,  'POST').subscribe(
    //       (res) => resolve(res),
    //       (err) => reject(err)
    //     );
    //   });
    // }
    forgotpassword(data) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.forgotPassword, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    verifyforgetOtp(data) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.verifyforgetOTP, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    changeForgetPassword(data) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.changeOtpEmailPassword, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 42558:
/*!*****************************************************!*\
  !*** ./src/app/core/services/otp-verify.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerifyService": function() { return /* binding */ OtpVerifyService; }
/* harmony export */ });
/* harmony import */ var src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/url-constants */ 16393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 72229);



class OtpVerifyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    verifyCLientOtp(data) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.postClientOtp, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
}
OtpVerifyService.ɵfac = function OtpVerifyService_Factory(t) { return new (t || OtpVerifyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
OtpVerifyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OtpVerifyService, factory: OtpVerifyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9954:
/*!******************************************************!*\
  !*** ./src/app/core/services/role-signup.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleSignupService": function() { return /* binding */ RoleSignupService; }
/* harmony export */ });
/* harmony import */ var _helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_helpers/url-constants */ 16393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 72229);



class RoleSignupService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    sendRoleUsersOtp(data) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, _helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.sendRoleUserOtp, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    verifyRoleUsers(data) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, _helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.roleUserVerify, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getUserBasedRoleByEmailId(data, emailId) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, _helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getUserBasedRole + emailId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
}
RoleSignupService.ɵfac = function RoleSignupService_Factory(t) { return new (t || RoleSignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
RoleSignupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RoleSignupService, factory: RoleSignupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 27083:
/*!*************************************************!*\
  !*** ./src/app/core/services/signup.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupService": function() { return /* binding */ SignupService; }
/* harmony export */ });
/* harmony import */ var src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/url-constants */ 16393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 72229);



class SignupService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    registerClientUsers(data) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.postClientUser, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    registerCustomerUsers(data) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.postCustomerUser, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getAllCountryClient(data) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getAllCountryClient, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    SearchCountryByNameId(data, name) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.searchCountryByNameId + "?search=" + name + "&exact=true", 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
}
SignupService.ɵfac = function SignupService_Factory(t) { return new (t || SignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
SignupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SignupService, factory: SignupService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts-es2015.js.map