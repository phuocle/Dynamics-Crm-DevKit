"use strict";
var IIFEContact = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // Contact.ts
  var Contact_exports = {};
  __export(Contact_exports, {
    default: () => Contact_default
  });

  // generator/devkit.ts
  function getter(obj, prop, getterFn) {
    Object.defineProperty(obj, prop, {
      get: getterFn,
      enumerable: true,
      configurable: true
    });
  }
  function getterSetter(obj, prop, getterFn, setterFn) {
    Object.defineProperty(obj, prop, {
      get: getterFn,
      set: setterFn,
      enumerable: true,
      configurable: true
    });
  }
  function loadField(formContext, field, attribute, control) {
    getter(field, "Attribute", () => control?.getAttribute());
    getter(field, "AttributeName", () => attribute?.getName());
    getter(field, "AttributeType", () => attribute?.getAttributeType());
    getter(field, "ControlName", () => control?.getName());
    getter(field, "ControlType", () => control?.getControlType());
    getter(field, "Format", () => attribute?.getFormat());
    getter(field, "IsDirty", () => attribute?.getIsDirty());
    getter(field, "IsValid", () => attribute?.isValid());
    getter(field, "Max", () => attribute?.getMax());
    getter(field, "MaxLength", () => attribute?.getMaxLength());
    getter(field, "Min", () => attribute?.getMin());
    getter(field, "Options", () => attribute?.getOptions());
    getter(field, "SelectedOption", () => attribute?.getSelectedOption());
    getter(field, "Text", () => attribute?.getText());
    getterSetter(field, "Disabled", () => control?.getDisabled(), (value) => {
      if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
      control?.setDisabled(value);
    });
    getterSetter(field, "Label", () => control?.getLabel(), (value) => {
      control?.setLabel(value);
    });
    getterSetter(field, "RequiredLevel", () => attribute?.getRequiredLevel(), (value) => {
      attribute?.setRequiredLevel(value);
    });
    getterSetter(field, "SubmitMode", () => attribute?.getSubmitMode(), (value) => {
      attribute?.setSubmitMode(value);
    });
    getterSetter(field, "Value", () => attribute?.getValue(), (value) => {
      if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
      attribute?.setValue(value);
    });
    getterSetter(field, "Visible", () => control?.getVisible(), (value) => {
      control?.setVisible(value);
    });
    field.AddOnChange = (callback) => attribute?.addOnChange(callback);
    field.RemoveOnChange = (callback) => attribute?.removeOnChange(callback);
    field.FireOnChange = () => attribute?.fireOnChange();
    field.Focus = () => control?.setFocus();
    field.SetNotification = (message, uniqueId) => control?.setNotification(message, uniqueId);
    field.ClearNotification = (uniqueId) => control?.clearNotification(uniqueId);
    field.SetIsValid = (valid, message) => attribute?.setIsValid(valid, message);
  }
  function LoadFormV2(executionContext, defaultWebResourceName, formConfig) {
    const formContext = executionContext?.getFormContext?.() ?? executionContext;
    const contextData = formContext?.data;
    const contextDataEntity = formContext?.data?.entity;
    const contextUi = formContext?.ui;
    const contextUiFormSelector = formContext?.ui?.formSelector;
    const body = {};
    if (formConfig.body) {
      formConfig.body.forEach((fieldName) => {
        body[fieldName] = {};
        const logicalName = fieldName.toLowerCase();
        const control = formContext?.getControl(logicalName) ?? formContext?.getControl(fieldName);
        let attribute = formContext?.getAttribute(logicalName);
        if (!attribute && control?.getAttribute) {
          attribute = control.getAttribute();
        }
        loadField(formContext, body[fieldName], attribute, control);
      });
    }
    const header = {};
    if (formConfig.header) {
      formConfig.header.forEach((fieldName) => {
        header[fieldName] = {};
        const logicalName = ("header_" + fieldName).toLowerCase();
        const control = formContext?.getControl(logicalName) ?? formContext?.getControl(fieldName);
        let attribute = formContext?.getAttribute(fieldName.toLowerCase());
        if (!attribute && control?.getAttribute) {
          attribute = control.getAttribute();
        }
        loadField(formContext, header[fieldName], attribute, control);
      });
    }
    const tab = {};
    if (formConfig.tab) {
      formConfig.tab.forEach((tabConfig) => {
        const parts = tabConfig.split("___");
        const tabName = parts[0];
        const sectionName = parts.length > 1 ? parts[1] : null;
        if (!tab[tabName]) {
          tab[tabName] = { Section: {} };
          const tabObject = formContext?.ui?.tabs?.get(tabName);
          getter(tab[tabName], "Name", () => tabObject?.getName());
          getterSetter(tab[tabName], "Label", () => tabObject?.getLabel(), (value) => {
            tabObject?.setLabel(value);
          });
          getterSetter(tab[tabName], "Visible", () => tabObject?.getVisible(), (value) => {
            tabObject?.setVisible(value);
          });
          getterSetter(tab[tabName], "DisplayState", () => tabObject?.getDisplayState(), (value) => {
            tabObject?.setDisplayState(value);
          });
          tab[tabName].AddTabStateChange = (callback) => tabObject?.addTabStateChange(callback);
          tab[tabName].RemoveTabStateChange = (callback) => tabObject?.removeTabStateChange(callback);
          tab[tabName].Focus = () => tabObject?.setFocus();
        }
        if (sectionName) {
          const tabObject = formContext?.ui?.tabs?.get(tabName);
          const sectionObject = tabObject?.sections?.get(sectionName);
          tab[tabName].Section[sectionName] = {};
          getter(tab[tabName].Section[sectionName], "Name", () => sectionObject?.getName());
          getterSetter(tab[tabName].Section[sectionName], "Label", () => sectionObject?.getLabel(), (value) => sectionObject?.setLabel(value));
          getterSetter(tab[tabName].Section[sectionName], "Visible", () => sectionObject?.getVisible(), (value) => sectionObject?.setVisible(value));
        }
      });
    }
    const grid = {};
    if (formConfig.grid) {
      formConfig.grid.forEach((gridName) => {
        grid[gridName] = {};
        const gridControl = formContext?.getControl(gridName);
        getter(grid[gridName], "EntityName", () => gridControl?.getEntityName());
        getter(grid[gridName], "FetchXml", () => gridControl?.getFetchXml());
        getter(grid[gridName], "TotalRecordCount", () => gridControl?.getGrid()?.getTotalRecordCount());
        getterSetter(grid[gridName], "Visible", () => gridControl?.getVisible(), (value) => {
          gridControl?.setVisible(value);
        });
        grid[gridName].AddOnLoad = (callback) => gridControl?.addOnLoad(callback);
        grid[gridName].RemoveOnLoad = (callback) => gridControl?.removeOnLoad(callback);
        grid[gridName].Refresh = () => gridControl?.refresh();
      });
    }
    const navigation = {};
    if (formConfig.navigation) {
      formConfig.navigation.forEach((navName) => {
        navigation[navName] = {};
        const navItems = formContext?.ui?.navigation?.items;
        let navigationItem = null;
        if (navItems) {
          const length = navItems.getLength();
          for (let i = 0; i < length; i++) {
            const item = navItems.get(i);
            if (item?.getId() === navName) {
              navigationItem = item;
              break;
            }
          }
        }
        getter(navigation[navName], "Id", () => navigationItem?.getId());
        getterSetter(navigation[navName], "Label", () => navigationItem?.getLabel(), (value) => navigationItem?.setLabel(value));
        getterSetter(navigation[navName], "Visible", () => navigationItem?.getVisible(), (value) => navigationItem?.setVisible(value));
        navigation[navName].Focus = () => navigationItem?.setFocus();
      });
    }
    const quickForm = {};
    if (formConfig.quick) {
      formConfig.quick.forEach((quickConfig) => {
        const parts = quickConfig.split("___");
        const quickFormName = parts[0];
        const fieldName = parts.length > 1 ? parts[1] : null;
        if (!quickForm[quickFormName]) {
          quickForm[quickFormName] = { Body: {} };
          const quick = formContext?.ui?.quickForms?.get(quickFormName);
          getter(quickForm[quickFormName], "ControlName", () => quick?.getName());
          getter(quickForm[quickFormName], "ControlType", () => quick?.getControlType());
          getterSetter(quickForm[quickFormName], "Disabled", () => quick?.getDisabled(), (value) => {
            quick?.setDisabled(value);
          });
          getterSetter(quickForm[quickFormName], "Label", () => quick?.getLabel(), (value) => {
            quick?.setLabel(value);
          });
          getterSetter(quickForm[quickFormName], "Visible", () => quick?.getVisible(), (value) => {
            quick?.setVisible(value);
          });
          quickForm[quickFormName].IsLoaded = () => quick?.isLoaded();
          quickForm[quickFormName].Refresh = () => quick?.refresh();
          quickForm[quickFormName].Focus = () => quick?.setFocus();
        }
        if (fieldName) {
          quickForm[quickFormName].Body[fieldName] = {};
        }
      });
    }
    const executionContextWrapper = {
      getFormContext: () => formContext,
      IsInitialLoad: () => {
        return contextUi?.getFormType() === 1;
      }
    };
    return {
      ExecutionContext: executionContextWrapper,
      Body: body,
      Header: header,
      Tab: tab,
      Grid: grid,
      Navigation: navigation,
      QuickForm: quickForm,
      FormId: contextUiFormSelector?.getCurrentItem()?.getId(),
      FormLabel: contextUiFormSelector?.getCurrentItem()?.getLabel(),
      FormType: contextUi?.getFormType(),
      EntityId: contextDataEntity?.getId(),
      EntityName: contextDataEntity?.getEntityName(),
      DataIsDirty: contextData?.getIsDirty(),
      DataIsValid: contextData?.isValid(),
      Save: (saveOptions) => contextData?.save(saveOptions),
      Refresh: (save) => contextData?.refresh(save),
      Close: () => contextUi?.close(),
      SetFormNotification: (message, level, uniqueId) => contextUi?.setFormNotification(message, level, uniqueId),
      ClearFormNotification: (uniqueId) => contextUi?.clearFormNotification(uniqueId),
      RefreshRibbon: (refreshAll) => contextUi?.refreshRibbon(refreshAll),
      UiAddLoaded: (callback) => contextUi?.addLoaded(callback),
      UiRemoveLoaded: (callback) => contextUi?.removeLoaded(callback)
    };
  }

  // generator/Contact.form.ts
  var ContactForm = class {
    constructor(executionContext, defaultWebResourceName) {
      const formConfig = {
        body: [
          "FirstName",
          "LastName",
          "FullName",
          "EMailAddress1",
          "Telephone1",
          "MobilePhone",
          "JobTitle",
          "ParentCustomerId",
          "OwnerId",
          "TransactionCurrencyId",
          "DoNotEMail",
          "DoNotPhone",
          "Address1_Line1",
          "Address1_City",
          "Address1_StateOrProvince",
          "Address1_PostalCode",
          "Address1_Country"
        ],
        header: ["OwnerId"],
        tab: [],
        grid: [],
        navigation: [],
        quick: []
      };
      const form = LoadFormV2(
        executionContext,
        defaultWebResourceName,
        formConfig
      );
      this.ExecutionContext = form.ExecutionContext;
      this.Body = form.Body;
      this.Header = form.Header;
      this.Tab = form.Tab;
      this.Grid = form.Grid;
      this.Navigation = form.Navigation;
      this.QuickForm = form.QuickForm;
      this.FormId = form.FormId;
      this.FormLabel = form.FormLabel;
      this.FormType = form.FormType;
      this.EntityId = form.EntityId;
      this.EntityName = form.EntityName;
      this.DataIsDirty = form.DataIsDirty;
      this.DataIsValid = form.DataIsValid;
      this.Save = form.Save;
      this.Refresh = form.Refresh;
      this.Close = form.Close;
      this.SetFormNotification = form.SetFormNotification;
      this.ClearFormNotification = form.ClearFormNotification;
      this.RefreshRibbon = form.RefreshRibbon;
      this.UiAddLoaded = form.UiAddLoaded;
      this.UiRemoveLoaded = form.UiRemoveLoaded;
    }
  };
  var OptionSet;
  ((OptionSet3) => {
    let Contact;
    ((Contact2) => {
      Contact2.GenderCode = {
        Male: 1,
        Female: 2
      };
      Contact2.StateCode = {
        Active: 0,
        Inactive: 1
      };
      Contact2.StatusCode = {
        Active: 1,
        Inactive: 2
      };
    })(Contact = OptionSet3.Contact || (OptionSet3.Contact = {}));
  })(OptionSet || (OptionSet = {}));

  // Contact.ts
  var formContact = function() {
    "use strict";
    let form;
    async function onLoad(executionContext) {
      form = new ContactForm(executionContext);
      registerEvents();
      form.UiAddLoaded(UiAddLoaded);
    }
    function registerEvents() {
      if (form.ExecutionContext.IsInitialLoad()) {
        form.Body.FirstName.AddOnChange(onNameChange);
        form.Body.LastName.AddOnChange(onNameChange);
      }
    }
    async function UiAddLoaded(executionContext) {
      const firstName = form.Body.FirstName.Value;
      const lastName = form.Body.LastName.Value;
      const email = form.Body.EMailAddress1.Value;
      console.log("Contact:", firstName, lastName);
      console.log("Email:", email);
      const parentCustomer = form.Body.ParentCustomerId.Value;
      if (parentCustomer && parentCustomer.length > 0) {
        console.log("Parent Customer:", parentCustomer[0].name);
      }
    }
    function onNameChange(executionContext) {
      const firstName = form.Body.FirstName.Value || "";
      const lastName = form.Body.LastName.Value || "";
      if (!firstName && !lastName) {
        form.Body.LastName.SetNotification("First Name or Last Name is required", "nameValidation");
      } else {
        form.Body.LastName.ClearNotification("nameValidation");
      }
    }
    return {
      OnLoad: onLoad
    };
  }();
  var Contact_default = formContact;
  return __toCommonJS(Contact_exports);
})();
(function(){if(typeof IIFEContact!=='undefined'&&IIFEContact.default)window['formContact']=IIFEContact.default;})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vQ29udGFjdC50cyIsICIuLi9nZW5lcmF0b3IvZGV2a2l0LnRzIiwgIi4uL2dlbmVyYXRvci9Db250YWN0LmZvcm0udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxyXG4gKiBDb250YWN0IFR5cGVTY3JpcHQgLSBGaWxlIGNoXHUwMEVEbmggbVx1MDBFMCBkZXZlbG9wZXIgdmlcdTFFQkZ0IGNvZGVcclxuICogU1x1MUVFRCBkXHUxRUU1bmcgQ29udGFjdEZvcm0gbW9kdWxlIFx1MDExMVx1MUVDMyBjXHUwMEYzIEludGVsbGlTZW5zZSBcdTAxMTFcdTFFQTd5IFx1MDExMVx1MUVFN1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbnRhY3RGb3JtLCBPcHRpb25TZXQgfSBmcm9tICcuL2dlbmVyYXRvci9Db250YWN0LmZvcm0nO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb250YWN0IEZvcm0gSGFuZGxlclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBmb3JtQ29udGFjdCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBsZXQgZm9ybTogQ29udGFjdEZvcm07XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Mb2FkKGV4ZWN1dGlvbkNvbnRleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGZvcm0gPSBuZXcgQ29udGFjdEZvcm0oZXhlY3V0aW9uQ29udGV4dCk7XHJcbiAgICAgICAgcmVnaXN0ZXJFdmVudHMoKTtcclxuICAgICAgICBmb3JtLlVpQWRkTG9hZGVkKFVpQWRkTG9hZGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZm9ybS5FeGVjdXRpb25Db250ZXh0LklzSW5pdGlhbExvYWQoKSkge1xyXG4gICAgICAgICAgICBmb3JtLkJvZHkuRmlyc3ROYW1lLkFkZE9uQ2hhbmdlKG9uTmFtZUNoYW5nZSk7XHJcbiAgICAgICAgICAgIGZvcm0uQm9keS5MYXN0TmFtZS5BZGRPbkNoYW5nZShvbk5hbWVDaGFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBVaUFkZExvYWRlZChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvLyBWXHUwMEVEIGRcdTFFRTU6IExcdTFFQTV5IHRoXHUwMEY0bmcgdGluIGNvbnRhY3RcclxuICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSBmb3JtLkJvZHkuRmlyc3ROYW1lLlZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGxhc3ROYW1lID0gZm9ybS5Cb2R5Lkxhc3ROYW1lLlZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZm9ybS5Cb2R5LkVNYWlsQWRkcmVzczEuVmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb250YWN0OicsIGZpcnN0TmFtZSwgbGFzdE5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFbWFpbDonLCBlbWFpbCk7XHJcblxyXG4gICAgICAgIC8vIExcdTFFQTV5IGxvb2t1cCB2YWx1ZVxyXG4gICAgICAgIGNvbnN0IHBhcmVudEN1c3RvbWVyID0gZm9ybS5Cb2R5LlBhcmVudEN1c3RvbWVySWQuVmFsdWU7XHJcbiAgICAgICAgaWYgKHBhcmVudEN1c3RvbWVyICYmIHBhcmVudEN1c3RvbWVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhcmVudCBDdXN0b21lcjonLCBwYXJlbnRDdXN0b21lclswXS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYW1lQ2hhbmdlKGV4ZWN1dGlvbkNvbnRleHQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9IGZvcm0uQm9keS5GaXJzdE5hbWUuVmFsdWUgfHwgJyc7XHJcbiAgICAgICAgY29uc3QgbGFzdE5hbWUgPSBmb3JtLkJvZHkuTGFzdE5hbWUuVmFsdWUgfHwgJyc7XHJcblxyXG4gICAgICAgIC8vIFZhbGlkYXRlOiBBdCBsZWFzdCBvbmUgbmFtZSBpcyByZXF1aXJlZFxyXG4gICAgICAgIGlmICghZmlyc3ROYW1lICYmICFsYXN0TmFtZSkge1xyXG4gICAgICAgICAgICBmb3JtLkJvZHkuTGFzdE5hbWUuU2V0Tm90aWZpY2F0aW9uKCdGaXJzdCBOYW1lIG9yIExhc3QgTmFtZSBpcyByZXF1aXJlZCcsICduYW1lVmFsaWRhdGlvbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm0uQm9keS5MYXN0TmFtZS5DbGVhck5vdGlmaWNhdGlvbignbmFtZVZhbGlkYXRpb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBPbkxvYWQ6IG9uTG9hZFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbi8vIENoXHUxRUM5IGNcdTFFQTduIGV4cG9ydCBkZWZhdWx0IC0gYnVpbGQgc2NyaXB0IHNcdTFFQkQgdFx1MUVGMSBcdTAxMTFcdTFFRDluZyBhc3NpZ24gdlx1MDBFMG8gd2luZG93LmZvcm1Db250YWN0XHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1Db250YWN0O1xyXG4iLCAiLyoqXHJcbiAqIERldktpdCBUeXBlU2NyaXB0IE1vZHVsZVxyXG4gKiBcclxuICogXHUwMTEwXHUwMEUyeSBsXHUwMEUwIHBoaVx1MDBFQW4gYlx1MUVBM24gVHlwZVNjcmlwdCBjXHUxRUU3YSBsaWIvZGV2a2l0LmpzLCB0XHUxRUFEcCB0cnVuZyB2XHUwMEUwbyBMb2FkRm9ybVYyIGZ1bmN0aW9uXHJcbiAqIFx1MDExMVx1MUVDMyBoXHUxRUQ3IHRyXHUxRUUzIGZvcm0gc2NyaXB0aW5nIHZcdTFFREJpIFx1MDExMVx1MUVBN3kgXHUwMTExXHUxRUU3IEludGVsbGlTZW5zZS5cclxuICogXHJcbiAqIEZpbGUgZ1x1MUVEMWMgbGliL2RldmtpdC5qcyBjXHUwMEYzIG5oaVx1MUVDMXUgdFx1MDBFRG5oIG5cdTAxMDNuZyBoXHUwMUExbiAoV2ViQXBpLCBVdGlsaXR5LCBDb3BpbG90LCBTaWRlUGFuZXMuLi4pLFxyXG4gKiBmaWxlIG5cdTAwRTB5IGNoXHUxRUM5IGNcdTFFQTduIExvYWRGb3JtVjIgY2hvIHVzZSBjYXNlIGNoXHUwMEVEbmggbFx1MDBFMCBmb3JtIHNjcmlwdGluZy5cclxuICogXHJcbiAqIENcdTAwRTFjIHRcdTAwRURuaCBuXHUwMTAzbmcga2hcdTAwRTFjIG5cdTFFQkZ1IGNcdTFFQTduIGNcdTAwRjMgdGhcdTFFQzMgdGhcdTAwRUFtIHNhdSBob1x1MUVCN2MgZ1x1MUVDRGkgdHJcdTFFRjFjIHRpXHUxRUJGcCB0XHUxRUVCIFhybSBvYmplY3QuXHJcbiAqIFxyXG4gKiBAcmVxdWlyZXMgQHR5cGVzL3hybSAtIFx1MDExMFx1MDBFMyBcdTAxMTFcdTAxQjBcdTFFRTNjIGNcdTAwRTBpIHRyb25nIGRldkRlcGVuZGVuY2llc1xyXG4gKi9cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTm90ZTogQHR5cGVzL3hybSBcdTAxMTFcdTAwRTMgY1x1MDBFMGkgXHUwMTExXHUxRUI3dCwgWHJtIGdsb2JhbCBjXHUwMEYzIFx1MDExMVx1MUVBN3kgXHUwMTExXHUxRUU3IEludGVsbGlTZW5zZVxyXG4vLyBOXHUxRUJGdSBUeXBlU2NyaXB0IGJcdTAwRTFvIGxcdTFFRDdpIFhybSBub3QgZm91bmQsIGNcdTAwRjMgdGhcdTFFQzMgdW5jb21tZW50IGRcdTAwRjJuZyBkXHUwMUIwXHUxRURCaTpcclxuLy8gZGVjbGFyZSBjb25zdCBYcm06IGFueTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBCYXNlIENvbnRyb2wgSW50ZXJmYWNlcyAtIFx1MDExMFx1MUVDQm5oIG5naFx1MDEyOWEgY1x1MDBFMWMgaW50ZXJmYWNlcyBjaG8gY29udHJvbHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gRmllbGQgY29udHJvbCBjXHUwMUExIGJcdTFFQTNuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpZWxkQ29udHJvbCB7XHJcbiAgICAvKiogR2lcdTAwRTEgdHJcdTFFQ0IgY1x1MUVFN2EgZmllbGQgKi9cclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICAvKiogVFx1MDBFQW4gYXR0cmlidXRlICovXHJcbiAgICByZWFkb25seSBBdHRyaWJ1dGVOYW1lOiBzdHJpbmc7XHJcbiAgICAvKiogVFx1MDBFQW4gY29udHJvbCAqL1xyXG4gICAgcmVhZG9ubHkgQ29udHJvbE5hbWU6IHN0cmluZztcclxuICAgIC8qKiBLaVx1MUVDM3UgYXR0cmlidXRlICovXHJcbiAgICByZWFkb25seSBBdHRyaWJ1dGVUeXBlOiBzdHJpbmc7XHJcbiAgICAvKiogS2lcdTFFQzN1IGNvbnRyb2wgKi9cclxuICAgIHJlYWRvbmx5IENvbnRyb2xUeXBlOiBzdHJpbmc7XHJcbiAgICAvKiogRW5hYmxlL0Rpc2FibGUgY29udHJvbCAqL1xyXG4gICAgRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICAvKiogVmlzaWJsZS9IaWRkZW4gY29udHJvbCAqL1xyXG4gICAgVmlzaWJsZTogYm9vbGVhbjtcclxuICAgIC8qKiBMYWJlbCBjXHUxRUU3YSBjb250cm9sICovXHJcbiAgICBMYWJlbDogc3RyaW5nO1xyXG4gICAgLyoqIFJlcXVpcmVkIGxldmVsOiBub25lLCByZXF1aXJlZCwgcmVjb21tZW5kZWQgKi9cclxuICAgIFJlcXVpcmVkTGV2ZWw6IHN0cmluZztcclxuICAgIC8qKiBTdWJtaXQgbW9kZTogYWx3YXlzLCBuZXZlciwgZGlydHkgKi9cclxuICAgIFN1Ym1pdE1vZGU6IHN0cmluZztcclxuICAgIC8qKiBDaGVjayBpZiB2YWx1ZSBpcyBkaXJ0eSAqL1xyXG4gICAgcmVhZG9ubHkgSXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIC8qKiBDaGVjayBpZiB2YWx1ZSBpcyB2YWxpZCAqL1xyXG4gICAgcmVhZG9ubHkgSXNWYWxpZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKiogQWRkIG9uQ2hhbmdlIGV2ZW50IGhhbmRsZXIgKi9cclxuICAgIEFkZE9uQ2hhbmdlKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKTogdm9pZDtcclxuICAgIC8qKiBSZW1vdmUgb25DaGFuZ2UgZXZlbnQgaGFuZGxlciAqL1xyXG4gICAgUmVtb3ZlT25DaGFuZ2UoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgLyoqIEZpcmUgb25DaGFuZ2UgZXZlbnQgKi9cclxuICAgIEZpcmVPbkNoYW5nZSgpOiB2b2lkO1xyXG4gICAgLyoqIFNldCBmb2N1cyB0byBjb250cm9sICovXHJcbiAgICBGb2N1cygpOiB2b2lkO1xyXG4gICAgLyoqIFNldCBub3RpZmljYXRpb24gKi9cclxuICAgIFNldE5vdGlmaWNhdGlvbihtZXNzYWdlOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgLyoqIENsZWFyIG5vdGlmaWNhdGlvbiAqL1xyXG4gICAgQ2xlYXJOb3RpZmljYXRpb24odW5pcXVlSWQ6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAvKiogU2V0IGNvbnRyb2wgdmFsaWRpdHkgKi9cclxuICAgIFNldElzVmFsaWQodmFsaWQ6IGJvb2xlYW4sIG1lc3NhZ2U/OiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBTdHJpbmcgY29udHJvbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHJpbmdDb250cm9sIGV4dGVuZHMgSUZpZWxkQ29udHJvbCB7XHJcbiAgICBWYWx1ZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IE1heExlbmd0aDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgRm9ybWF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIE51bWJlci9JbnRlZ2VyIGNvbnRyb2wgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTnVtYmVyQ29udHJvbCBleHRlbmRzIElGaWVsZENvbnRyb2wge1xyXG4gICAgVmFsdWU6IG51bWJlciB8IG51bGw7XHJcbiAgICByZWFkb25seSBNYXg6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IE1pbjogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgUHJlY2lzaW9uOiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIEJvb2xlYW4gY29udHJvbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCb29sZWFuQ29udHJvbCBleHRlbmRzIElGaWVsZENvbnRyb2wge1xyXG4gICAgVmFsdWU6IGJvb2xlYW4gfCBudWxsO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBPcHRpb25TZXQgY29udHJvbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPcHRpb25TZXRDb250cm9sIGV4dGVuZHMgSUZpZWxkQ29udHJvbCB7XHJcbiAgICBWYWx1ZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IE9wdGlvbnM6IHsgdGV4dDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXTtcclxuICAgIHJlYWRvbmx5IFNlbGVjdGVkT3B0aW9uOiB7IHRleHQ6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IFRleHQ6IHN0cmluZztcclxuXHJcbiAgICBBZGRPcHRpb24odGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBpbmRleD86IG51bWJlcik6IHZvaWQ7XHJcbiAgICBSZW1vdmVPcHRpb24odmFsdWU6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBDbGVhck9wdGlvbnMoKTogdm9pZDtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gTG9va3VwIGNvbnRyb2wgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTG9va3VwQ29udHJvbCBleHRlbmRzIElGaWVsZENvbnRyb2wge1xyXG4gICAgVmFsdWU6IHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nOyBlbnRpdHlUeXBlOiBzdHJpbmcgfVtdIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IEVudGl0eVR5cGVzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBBZGRQcmVTZWFyY2goY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgUmVtb3ZlUHJlU2VhcmNoKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIEFkZEN1c3RvbUZpbHRlcihmaWx0ZXI6IHN0cmluZywgZW50aXR5TG9naWNhbE5hbWU/OiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgQWRkQ3VzdG9tVmlldyh2aWV3SWQ6IHN0cmluZywgZW50aXR5TmFtZTogc3RyaW5nLCB2aWV3RGlzcGxheU5hbWU6IHN0cmluZywgZmV0Y2hYbWw6IHN0cmluZywgbGF5b3V0WG1sOiBzdHJpbmcsIGlzRGVmYXVsdDogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBEZWZhdWx0Vmlldzogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBEYXRlIGNvbnRyb2wgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0ZUNvbnRyb2wgZXh0ZW5kcyBJRmllbGRDb250cm9sIHtcclxuICAgIFZhbHVlOiBEYXRlIHwgbnVsbDtcclxuICAgIFNob3dUaW1lOiBib29sZWFuO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBNb25leSBjb250cm9sICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1vbmV5Q29udHJvbCBleHRlbmRzIElOdW1iZXJDb250cm9sIHtcclxuICAgIC8vIE1vbmV5IGtcdTFFQkYgdGhcdTFFRUJhIHRcdTFFRUIgTnVtYmVyXHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRm9ybSBJbnRlcmZhY2VzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIEZvcm0gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRm9ybSB7XHJcbiAgICAvKiogRm9ybSBJRCAqL1xyXG4gICAgcmVhZG9ubHkgRm9ybUlkOiBzdHJpbmc7XHJcbiAgICAvKiogRm9ybSBMYWJlbCAqL1xyXG4gICAgcmVhZG9ubHkgRm9ybUxhYmVsOiBzdHJpbmc7XHJcbiAgICAvKiogRm9ybSBUeXBlOiBDcmVhdGUgKDEpLCBVcGRhdGUgKDIpLCBSZWFkT25seSAoMyksIERpc2FibGVkICg0KSwgUXVpY2tDcmVhdGUgKDUpLCBCdWxrRWRpdCAoNikgKi9cclxuICAgIHJlYWRvbmx5IEZvcm1UeXBlOiBudW1iZXI7XHJcbiAgICAvKiogRW50aXR5IElEICovXHJcbiAgICByZWFkb25seSBFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgLyoqIEVudGl0eSBOYW1lIC0gbG9naWNhbCBuYW1lIGNcdTFFRTdhIGVudGl0eSAqL1xyXG4gICAgcmVhZG9ubHkgRW50aXR5TmFtZTogc3RyaW5nO1xyXG4gICAgLyoqIENoZWNrIGlmIGZvcm0gZGF0YSBpcyBkaXJ0eSAqL1xyXG4gICAgcmVhZG9ubHkgRGF0YUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICAvKiogQ2hlY2sgaWYgZm9ybSBkYXRhIGlzIHZhbGlkICovXHJcbiAgICByZWFkb25seSBEYXRhSXNWYWxpZDogYm9vbGVhbjtcclxuICAgIC8qKiBQcmltYXJ5IGF0dHJpYnV0ZSB2YWx1ZSAqL1xyXG4gICAgcmVhZG9ubHkgUHJpbWFyeUF0dHJpYnV0ZVZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIFNhdmUgdGhlIGZvcm0gKi9cclxuICAgIFNhdmUoc2F2ZU9wdGlvbnM/OiB7IHNhdmVNb2RlOiBudW1iZXIgfSk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKiogUmVmcmVzaCBmb3JtIGRhdGEgKi9cclxuICAgIFJlZnJlc2goc2F2ZT86IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqIENsb3NlIHRoZSBmb3JtICovXHJcbiAgICBDbG9zZSgpOiB2b2lkO1xyXG4gICAgLyoqIFNldCBmb3JtIG5vdGlmaWNhdGlvbiAqL1xyXG4gICAgU2V0Rm9ybU5vdGlmaWNhdGlvbihtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBcIkVSUk9SXCIgfCBcIldBUk5JTkdcIiB8IFwiSU5GT1wiLCB1bmlxdWVJZDogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIC8qKiBDbGVhciBmb3JtIG5vdGlmaWNhdGlvbiAqL1xyXG4gICAgQ2xlYXJGb3JtTm90aWZpY2F0aW9uKHVuaXF1ZUlkOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgLyoqIFJlZnJlc2ggcmliYm9uICovXHJcbiAgICBSZWZyZXNoUmliYm9uKHJlZnJlc2hBbGw/OiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gVGFiICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRhYiB7XHJcbiAgICAvKiogVGFiIE5hbWUgKi9cclxuICAgIHJlYWRvbmx5IE5hbWU6IHN0cmluZztcclxuICAgIC8qKiBUYWIgTGFiZWwgKi9cclxuICAgIExhYmVsOiBzdHJpbmc7XHJcbiAgICAvKiogVGFiIFZpc2libGUgKi9cclxuICAgIFZpc2libGU6IGJvb2xlYW47XHJcbiAgICAvKiogVGFiIERpc3BsYXkgU3RhdGUgKi9cclxuICAgIERpc3BsYXlTdGF0ZTogXCJleHBhbmRlZFwiIHwgXCJjb2xsYXBzZWRcIjtcclxuXHJcbiAgICAvKiogQWRkIHRhYiBzdGF0ZSBjaGFuZ2UgaGFuZGxlciAqL1xyXG4gICAgQWRkVGFiU3RhdGVDaGFuZ2UoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgLyoqIFJlbW92ZSB0YWIgc3RhdGUgY2hhbmdlIGhhbmRsZXIgKi9cclxuICAgIFJlbW92ZVRhYlN0YXRlQ2hhbmdlKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKTogdm9pZDtcclxuICAgIC8qKiBTZXQgZm9jdXMgdG8gdGFiICovXHJcbiAgICBGb2N1cygpOiB2b2lkO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBTZWN0aW9uICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlY3Rpb24ge1xyXG4gICAgLyoqIFNlY3Rpb24gTmFtZSAqL1xyXG4gICAgcmVhZG9ubHkgTmFtZTogc3RyaW5nO1xyXG4gICAgLyoqIFNlY3Rpb24gTGFiZWwgKi9cclxuICAgIExhYmVsOiBzdHJpbmc7XHJcbiAgICAvKiogU2VjdGlvbiBWaXNpYmxlICovXHJcbiAgICBWaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBOYXZpZ2F0aW9uIEl0ZW0gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmF2aWdhdGlvbkl0ZW0ge1xyXG4gICAgLyoqIE5hdmlnYXRpb24gSUQgKi9cclxuICAgIHJlYWRvbmx5IElkOiBzdHJpbmc7XHJcbiAgICAvKiogTmF2aWdhdGlvbiBMYWJlbCAqL1xyXG4gICAgTGFiZWw6IHN0cmluZztcclxuICAgIC8qKiBOYXZpZ2F0aW9uIFZpc2libGUgKi9cclxuICAgIFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqIFNldCBmb2N1cyB0byBuYXZpZ2F0aW9uIGl0ZW0gKi9cclxuICAgIEZvY3VzKCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIEdyaWQgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZCB7XHJcbiAgICAvKiogR3JpZCBFbnRpdHkgTmFtZSAqL1xyXG4gICAgcmVhZG9ubHkgRW50aXR5TmFtZTogc3RyaW5nO1xyXG4gICAgLyoqIEdyaWQgRmV0Y2hYbWwgKi9cclxuICAgIHJlYWRvbmx5IEZldGNoWG1sOiBzdHJpbmc7XHJcbiAgICAvKiogVG90YWwgcmVjb3JkIGNvdW50ICovXHJcbiAgICByZWFkb25seSBUb3RhbFJlY29yZENvdW50OiBudW1iZXI7XHJcbiAgICAvKiogR3JpZCBWaXNpYmxlICovXHJcbiAgICBWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIC8qKiBBZGQgb25Mb2FkIGhhbmRsZXIgKi9cclxuICAgIEFkZE9uTG9hZChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICAvKiogUmVtb3ZlIG9uTG9hZCBoYW5kbGVyICovXHJcbiAgICBSZW1vdmVPbkxvYWQoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgLyoqIFJlZnJlc2ggZ3JpZCAqL1xyXG4gICAgUmVmcmVzaCgpOiB2b2lkO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBFeGVjdXRpb24gQ29udGV4dCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFeGVjdXRpb25Db250ZXh0IHtcclxuICAgIC8qKiBHZXQgZm9ybSBjb250ZXh0ICovXHJcbiAgICBnZXRGb3JtQ29udGV4dCgpOiBhbnk7XHJcbiAgICAvKiogQ2hlY2sgaWYgdGhpcyBpcyBpbml0aWFsIGxvYWQgKi9cclxuICAgIElzSW5pdGlhbExvYWQoKTogYm9vbGVhbjtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBIZWxwZXIgRnVuY3Rpb25zIC0gQ1x1MDBFMWMgaFx1MDBFMG0gaGVscGVyIFx1MDExMVx1MUVDMyBsb2FkIGZvcm1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gZ2V0WHJtKCk6IHR5cGVvZiBYcm0ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAod2luZG93IGFzIGFueSkuWHJtO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgIT09ICd1bmRlZmluZWQnICYmIChwYXJlbnQgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAocGFyZW50IGFzIGFueSkuWHJtO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgZm91bmQgWHJtIGluIHRoZSBjdXJyZW50IGNvbnRleHQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0dGVyPFQ+KG9iajogYW55LCBwcm9wOiBzdHJpbmcsIGdldHRlckZuOiAoKSA9PiBUKTogdm9pZCB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XHJcbiAgICAgICAgZ2V0OiBnZXR0ZXJGbixcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldHRlclNldHRlcjxUPihvYmo6IGFueSwgcHJvcDogc3RyaW5nLCBnZXR0ZXJGbjogKCkgPT4gVCwgc2V0dGVyRm46ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xyXG4gICAgICAgIGdldDogZ2V0dGVyRm4sXHJcbiAgICAgICAgc2V0OiBzZXR0ZXJGbixcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRmllbGQgTG9hZGluZyBGdW5jdGlvblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiBsb2FkRmllbGQoZm9ybUNvbnRleHQ6IGFueSwgZmllbGQ6IGFueSwgYXR0cmlidXRlOiBhbnksIGNvbnRyb2w6IGFueSk6IHZvaWQge1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlJywgKCkgPT4gY29udHJvbD8uZ2V0QXR0cmlidXRlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlTmFtZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TmFtZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZVR5cGUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldEF0dHJpYnV0ZVR5cGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sTmFtZScsICgpID0+IGNvbnRyb2w/LmdldE5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sVHlwZScsICgpID0+IGNvbnRyb2w/LmdldENvbnRyb2xUeXBlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnRm9ybWF0JywgKCkgPT4gYXR0cmlidXRlPy5nZXRGb3JtYXQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJc0RpcnR5JywgKCkgPT4gYXR0cmlidXRlPy5nZXRJc0RpcnR5KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSXNWYWxpZCcsICgpID0+IGF0dHJpYnV0ZT8uaXNWYWxpZCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ01heCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TWF4KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnTWF4TGVuZ3RoJywgKCkgPT4gYXR0cmlidXRlPy5nZXRNYXhMZW5ndGgoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdNaW4nLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE1pbigpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ09wdGlvbnMnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE9wdGlvbnMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdTZWxlY3RlZE9wdGlvbicsICgpID0+IGF0dHJpYnV0ZT8uZ2V0U2VsZWN0ZWRPcHRpb24oKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdUZXh0JywgKCkgPT4gYXR0cmlidXRlPy5nZXRUZXh0KCkpO1xyXG5cclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0Rpc2FibGVkJywgKCkgPT4gY29udHJvbD8uZ2V0RGlzYWJsZWQoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gMyB8fCBmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDQpIHJldHVybjtcclxuICAgICAgICBjb250cm9sPy5zZXREaXNhYmxlZCh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0xhYmVsJywgKCkgPT4gY29udHJvbD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgY29udHJvbD8uc2V0TGFiZWwodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1JlcXVpcmVkTGV2ZWwnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFJlcXVpcmVkTGV2ZWwoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgYXR0cmlidXRlPy5zZXRSZXF1aXJlZExldmVsKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTdWJtaXRNb2RlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRTdWJtaXRNb2RlKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGF0dHJpYnV0ZT8uc2V0U3VibWl0TW9kZSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnVmFsdWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFZhbHVlKCksICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gMyB8fCBmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDQpIHJldHVybjtcclxuICAgICAgICBhdHRyaWJ1dGU/LnNldFZhbHVlKHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnVmlzaWJsZScsICgpID0+IGNvbnRyb2w/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGNvbnRyb2w/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuXHJcbiAgICBmaWVsZC5BZGRPbkNoYW5nZSA9IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gYXR0cmlidXRlPy5hZGRPbkNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVPbkNoYW5nZSA9IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gYXR0cmlidXRlPy5yZW1vdmVPbkNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5GaXJlT25DaGFuZ2UgPSAoKSA9PiBhdHRyaWJ1dGU/LmZpcmVPbkNoYW5nZSgpO1xyXG4gICAgZmllbGQuRm9jdXMgPSAoKSA9PiBjb250cm9sPy5zZXRGb2N1cygpO1xyXG4gICAgZmllbGQuU2V0Tm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gY29udHJvbD8uc2V0Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHVuaXF1ZUlkKTtcclxuICAgIGZpZWxkLkNsZWFyTm90aWZpY2F0aW9uID0gKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRyb2w/LmNsZWFyTm90aWZpY2F0aW9uKHVuaXF1ZUlkKTtcclxuICAgIGZpZWxkLlNldElzVmFsaWQgPSAodmFsaWQ6IGJvb2xlYW4sIG1lc3NhZ2U/OiBzdHJpbmcpID0+IGF0dHJpYnV0ZT8uc2V0SXNWYWxpZCh2YWxpZCwgbWVzc2FnZSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGV2S2l0IE1vZHVsZSBFeHBvcnRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIExvYWQgRm9ybSBWMiAtIEhcdTAwRTBtIGNoXHUwMEVEbmggXHUwMTExXHUxRUMzIGxvYWQgZm9ybSB2XHUxRURCaSBjXHUwMEUxYyBmaWVsZHNcclxuICogQHBhcmFtIGV4ZWN1dGlvbkNvbnRleHQgRXhlY3V0aW9uIGNvbnRleHQgdFx1MUVFQiBmb3JtXHJcbiAqIEBwYXJhbSBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lIFRcdTAwRUFuIHdlYiByZXNvdXJjZSBtXHUxRUI3YyBcdTAxMTFcdTFFQ0JuaFxyXG4gKiBAcGFyYW0gZm9ybUNvbmZpZyBDXHUxRUE1dSBoXHUwMEVDbmggZm9ybSBiYW8gZ1x1MUVEM20gYm9keSwgaGVhZGVyLCB0YWIsIGdyaWQsIG5hdmlnYXRpb24sIHF1aWNrXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZEZvcm1WMjxUQm9keSwgVEhlYWRlciwgVFRhYiwgVEdyaWQsIFROYXZpZ2F0aW9uLCBUUXVpY2tGb3JtPihcclxuICAgIGV4ZWN1dGlvbkNvbnRleHQ6IGFueSxcclxuICAgIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIGZvcm1Db25maWc6IHtcclxuICAgICAgICBib2R5Pzogc3RyaW5nW107XHJcbiAgICAgICAgaGVhZGVyPzogc3RyaW5nW107XHJcbiAgICAgICAgdGFiPzogc3RyaW5nW107XHJcbiAgICAgICAgZ3JpZD86IHN0cmluZ1tdO1xyXG4gICAgICAgIG5hdmlnYXRpb24/OiBzdHJpbmdbXTtcclxuICAgICAgICBxdWljaz86IHN0cmluZ1tdO1xyXG4gICAgfVxyXG4pOiB7XHJcbiAgICBFeGVjdXRpb25Db250ZXh0OiBJRXhlY3V0aW9uQ29udGV4dDtcclxuICAgIEJvZHk6IFRCb2R5O1xyXG4gICAgSGVhZGVyOiBUSGVhZGVyO1xyXG4gICAgVGFiOiBUVGFiO1xyXG4gICAgR3JpZDogVEdyaWQ7XHJcbiAgICBOYXZpZ2F0aW9uOiBUTmF2aWdhdGlvbjtcclxuICAgIFF1aWNrRm9ybTogVFF1aWNrRm9ybTtcclxuICAgIEZvcm1JZDogc3RyaW5nO1xyXG4gICAgRm9ybUxhYmVsOiBzdHJpbmc7XHJcbiAgICBGb3JtVHlwZTogbnVtYmVyO1xyXG4gICAgRW50aXR5SWQ6IHN0cmluZztcclxuICAgIEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIERhdGFJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgRGF0YUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBTYXZlOiAoc2F2ZU9wdGlvbnM/OiBhbnkpID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBSZWZyZXNoOiAoc2F2ZT86IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBDbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIFNldEZvcm1Ob3RpZmljYXRpb246IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBDbGVhckZvcm1Ob3RpZmljYXRpb246ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgUmVmcmVzaFJpYmJvbjogKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgVWlBZGRMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFVpUmVtb3ZlTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbn0ge1xyXG4gICAgY29uc3QgZm9ybUNvbnRleHQgPSBleGVjdXRpb25Db250ZXh0Py5nZXRGb3JtQ29udGV4dD8uKCkgPz8gZXhlY3V0aW9uQ29udGV4dDtcclxuICAgIGNvbnN0IGNvbnRleHREYXRhID0gZm9ybUNvbnRleHQ/LmRhdGE7XHJcbiAgICBjb25zdCBjb250ZXh0RGF0YUVudGl0eSA9IGZvcm1Db250ZXh0Py5kYXRhPy5lbnRpdHk7XHJcbiAgICBjb25zdCBjb250ZXh0VWkgPSBmb3JtQ29udGV4dD8udWk7XHJcbiAgICBjb25zdCBjb250ZXh0VWlGb3JtU2VsZWN0b3IgPSBmb3JtQ29udGV4dD8udWk/LmZvcm1TZWxlY3RvcjtcclxuXHJcbiAgICAvLyBCdWlsZCBCb2R5XHJcbiAgICBjb25zdCBib2R5OiBhbnkgPSB7fTtcclxuICAgIGlmIChmb3JtQ29uZmlnLmJvZHkpIHtcclxuICAgICAgICBmb3JtQ29uZmlnLmJvZHkuZm9yRWFjaChmaWVsZE5hbWUgPT4ge1xyXG4gICAgICAgICAgICBib2R5W2ZpZWxkTmFtZV0gPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgbG9naWNhbE5hbWUgPSBmaWVsZE5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGxvZ2ljYWxOYW1lKSA/PyBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gZm9ybUNvbnRleHQ/LmdldEF0dHJpYnV0ZShsb2dpY2FsTmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlICYmIGNvbnRyb2w/LmdldEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2FkRmllbGQoZm9ybUNvbnRleHQsIGJvZHlbZmllbGROYW1lXSwgYXR0cmlidXRlLCBjb250cm9sKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWlsZCBIZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlcjogYW55ID0ge307XHJcbiAgICBpZiAoZm9ybUNvbmZpZy5oZWFkZXIpIHtcclxuICAgICAgICBmb3JtQ29uZmlnLmhlYWRlci5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGhlYWRlcltmaWVsZE5hbWVdID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2ljYWxOYW1lID0gKFwiaGVhZGVyX1wiICsgZmllbGROYW1lKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2wobG9naWNhbE5hbWUpID8/IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGUgPSBmb3JtQ29udGV4dD8uZ2V0QXR0cmlidXRlKGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGUgJiYgY29udHJvbD8uZ2V0QXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgPSBjb250cm9sLmdldEF0dHJpYnV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvYWRGaWVsZChmb3JtQ29udGV4dCwgaGVhZGVyW2ZpZWxkTmFtZV0sIGF0dHJpYnV0ZSwgY29udHJvbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgVGFicyAoc2ltcGxpZmllZClcclxuICAgIGNvbnN0IHRhYjogYW55ID0ge307XHJcbiAgICBpZiAoZm9ybUNvbmZpZy50YWIpIHtcclxuICAgICAgICBmb3JtQ29uZmlnLnRhYi5mb3JFYWNoKHRhYkNvbmZpZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gdGFiQ29uZmlnLnNwbGl0KFwiX19fXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0YWJOYW1lID0gcGFydHNbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25OYW1lID0gcGFydHMubGVuZ3RoID4gMSA/IHBhcnRzWzFdIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGFiW3RhYk5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJbdGFiTmFtZV0gPSB7IFNlY3Rpb246IHt9IH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJPYmplY3QgPSBmb3JtQ29udGV4dD8udWk/LnRhYnM/LmdldCh0YWJOYW1lKTtcclxuICAgICAgICAgICAgICAgIGdldHRlcih0YWJbdGFiTmFtZV0sICdOYW1lJywgKCkgPT4gdGFiT2JqZWN0Py5nZXROYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYlt0YWJOYW1lXSwgJ0xhYmVsJywgKCkgPT4gdGFiT2JqZWN0Py5nZXRMYWJlbCgpLCAodmFsdWU6IHN0cmluZykgPT4geyB0YWJPYmplY3Q/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBnZXR0ZXJTZXR0ZXIodGFiW3RhYk5hbWVdLCAnVmlzaWJsZScsICgpID0+IHRhYk9iamVjdD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgdGFiT2JqZWN0Py5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBnZXR0ZXJTZXR0ZXIodGFiW3RhYk5hbWVdLCAnRGlzcGxheVN0YXRlJywgKCkgPT4gdGFiT2JqZWN0Py5nZXREaXNwbGF5U3RhdGUoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgdGFiT2JqZWN0Py5zZXREaXNwbGF5U3RhdGUodmFsdWUpOyB9KTtcclxuICAgICAgICAgICAgICAgIHRhYlt0YWJOYW1lXS5BZGRUYWJTdGF0ZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiB0YWJPYmplY3Q/LmFkZFRhYlN0YXRlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIHRhYlt0YWJOYW1lXS5SZW1vdmVUYWJTdGF0ZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiB0YWJPYmplY3Q/LnJlbW92ZVRhYlN0YXRlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIHRhYlt0YWJOYW1lXS5Gb2N1cyA9ICgpID0+IHRhYk9iamVjdD8uc2V0Rm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJPYmplY3QgPSBmb3JtQ29udGV4dD8udWk/LnRhYnM/LmdldCh0YWJOYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25PYmplY3QgPSB0YWJPYmplY3Q/LnNlY3Rpb25zPy5nZXQoc2VjdGlvbk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGFiW3RhYk5hbWVdLlNlY3Rpb25bc2VjdGlvbk5hbWVdID0ge307XHJcbiAgICAgICAgICAgICAgICBnZXR0ZXIodGFiW3RhYk5hbWVdLlNlY3Rpb25bc2VjdGlvbk5hbWVdLCAnTmFtZScsICgpID0+IHNlY3Rpb25PYmplY3Q/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBnZXR0ZXJTZXR0ZXIodGFiW3RhYk5hbWVdLlNlY3Rpb25bc2VjdGlvbk5hbWVdLCAnTGFiZWwnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRMYWJlbCgpLCAodmFsdWU6IHN0cmluZykgPT4gc2VjdGlvbk9iamVjdD8uc2V0TGFiZWwodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGdldHRlclNldHRlcih0YWJbdGFiTmFtZV0uU2VjdGlvbltzZWN0aW9uTmFtZV0sICdWaXNpYmxlJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHNlY3Rpb25PYmplY3Q/LnNldFZpc2libGUodmFsdWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIEdyaWQgKHNpbXBsaWZpZWQpXHJcbiAgICBjb25zdCBncmlkOiBhbnkgPSB7fTtcclxuICAgIGlmIChmb3JtQ29uZmlnLmdyaWQpIHtcclxuICAgICAgICBmb3JtQ29uZmlnLmdyaWQuZm9yRWFjaChncmlkTmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGdyaWRbZ3JpZE5hbWVdID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRDb250cm9sID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZE5hbWUpO1xyXG4gICAgICAgICAgICBnZXR0ZXIoZ3JpZFtncmlkTmFtZV0sICdFbnRpdHlOYW1lJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICAgICAgICAgIGdldHRlcihncmlkW2dyaWROYW1lXSwgJ0ZldGNoWG1sJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEZldGNoWG1sKCkpO1xyXG4gICAgICAgICAgICBnZXR0ZXIoZ3JpZFtncmlkTmFtZV0sICdUb3RhbFJlY29yZENvdW50JywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEdyaWQoKT8uZ2V0VG90YWxSZWNvcmRDb3VudCgpKTtcclxuICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKGdyaWRbZ3JpZE5hbWVdLCAnVmlzaWJsZScsICgpID0+IGdyaWRDb250cm9sPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYm9vbGVhbikgPT4geyBncmlkQ29udHJvbD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgICAgICBncmlkW2dyaWROYW1lXS5BZGRPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ3JpZENvbnRyb2w/LmFkZE9uTG9hZChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIGdyaWRbZ3JpZE5hbWVdLlJlbW92ZU9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBncmlkQ29udHJvbD8ucmVtb3ZlT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgZ3JpZFtncmlkTmFtZV0uUmVmcmVzaCA9ICgpID0+IGdyaWRDb250cm9sPy5yZWZyZXNoKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgTmF2aWdhdGlvbiAoc2ltcGxpZmllZClcclxuICAgIGNvbnN0IG5hdmlnYXRpb246IGFueSA9IHt9O1xyXG4gICAgaWYgKGZvcm1Db25maWcubmF2aWdhdGlvbikge1xyXG4gICAgICAgIGZvcm1Db25maWcubmF2aWdhdGlvbi5mb3JFYWNoKG5hdk5hbWUgPT4ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uW25hdk5hbWVdID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IG5hdkl0ZW1zID0gZm9ybUNvbnRleHQ/LnVpPy5uYXZpZ2F0aW9uPy5pdGVtcztcclxuICAgICAgICAgICAgbGV0IG5hdmlnYXRpb25JdGVtOiBhbnkgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAobmF2SXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG5hdkl0ZW1zLmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuYXZJdGVtcy5nZXQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0/LmdldElkKCkgPT09IG5hdk5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbkl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2V0dGVyKG5hdmlnYXRpb25bbmF2TmFtZV0sICdJZCcsICgpID0+IG5hdmlnYXRpb25JdGVtPy5nZXRJZCgpKTtcclxuICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKG5hdmlnYXRpb25bbmF2TmFtZV0sICdMYWJlbCcsICgpID0+IG5hdmlnYXRpb25JdGVtPy5nZXRMYWJlbCgpLCAodmFsdWU6IHN0cmluZykgPT4gbmF2aWdhdGlvbkl0ZW0/LnNldExhYmVsKHZhbHVlKSk7XHJcbiAgICAgICAgICAgIGdldHRlclNldHRlcihuYXZpZ2F0aW9uW25hdk5hbWVdLCAnVmlzaWJsZScsICgpID0+IG5hdmlnYXRpb25JdGVtPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYm9vbGVhbikgPT4gbmF2aWdhdGlvbkl0ZW0/LnNldFZpc2libGUodmFsdWUpKTtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbltuYXZOYW1lXS5Gb2N1cyA9ICgpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRGb2N1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIFF1aWNrRm9ybSAoc2ltcGxpZmllZClcclxuICAgIGNvbnN0IHF1aWNrRm9ybTogYW55ID0ge307XHJcbiAgICBpZiAoZm9ybUNvbmZpZy5xdWljaykge1xyXG4gICAgICAgIGZvcm1Db25maWcucXVpY2suZm9yRWFjaChxdWlja0NvbmZpZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gcXVpY2tDb25maWcuc3BsaXQoXCJfX19cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1aWNrRm9ybU5hbWUgPSBwYXJ0c1swXTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gcGFydHMubGVuZ3RoID4gMSA/IHBhcnRzWzFdIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICghcXVpY2tGb3JtW3F1aWNrRm9ybU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBxdWlja0Zvcm1bcXVpY2tGb3JtTmFtZV0gPSB7IEJvZHk6IHt9IH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWljayA9IGZvcm1Db250ZXh0Py51aT8ucXVpY2tGb3Jtcz8uZ2V0KHF1aWNrRm9ybU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyKHF1aWNrRm9ybVtxdWlja0Zvcm1OYW1lXSwgJ0NvbnRyb2xOYW1lJywgKCkgPT4gcXVpY2s/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBnZXR0ZXIocXVpY2tGb3JtW3F1aWNrRm9ybU5hbWVdLCAnQ29udHJvbFR5cGUnLCAoKSA9PiBxdWljaz8uZ2V0Q29udHJvbFR5cGUoKSk7XHJcbiAgICAgICAgICAgICAgICBnZXR0ZXJTZXR0ZXIocXVpY2tGb3JtW3F1aWNrRm9ybU5hbWVdLCAnRGlzYWJsZWQnLCAoKSA9PiBxdWljaz8uZ2V0RGlzYWJsZWQoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IHF1aWNrPy5zZXREaXNhYmxlZCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKHF1aWNrRm9ybVtxdWlja0Zvcm1OYW1lXSwgJ0xhYmVsJywgKCkgPT4gcXVpY2s/LmdldExhYmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IHF1aWNrPy5zZXRMYWJlbCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKHF1aWNrRm9ybVtxdWlja0Zvcm1OYW1lXSwgJ1Zpc2libGUnLCAoKSA9PiBxdWljaz8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgcXVpY2s/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICAgICAgICAgIHF1aWNrRm9ybVtxdWlja0Zvcm1OYW1lXS5Jc0xvYWRlZCA9ICgpID0+IHF1aWNrPy5pc0xvYWRlZCgpO1xyXG4gICAgICAgICAgICAgICAgcXVpY2tGb3JtW3F1aWNrRm9ybU5hbWVdLlJlZnJlc2ggPSAoKSA9PiBxdWljaz8ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgcXVpY2tGb3JtW3F1aWNrRm9ybU5hbWVdLkZvY3VzID0gKCkgPT4gcXVpY2s/LnNldEZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmaWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHF1aWNrRm9ybVtxdWlja0Zvcm1OYW1lXS5Cb2R5W2ZpZWxkTmFtZV0gPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBFeGVjdXRpb25Db250ZXh0IHdyYXBwZXJcclxuICAgIGNvbnN0IGV4ZWN1dGlvbkNvbnRleHRXcmFwcGVyOiBJRXhlY3V0aW9uQ29udGV4dCA9IHtcclxuICAgICAgICBnZXRGb3JtQ29udGV4dDogKCkgPT4gZm9ybUNvbnRleHQsXHJcbiAgICAgICAgSXNJbml0aWFsTG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGluaXRpYWwgbG9hZCBiYXNlZCBvbiBmb3JtIHR5cGVcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHRVaT8uZ2V0Rm9ybVR5cGUoKSA9PT0gMTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgRXhlY3V0aW9uQ29udGV4dDogZXhlY3V0aW9uQ29udGV4dFdyYXBwZXIsXHJcbiAgICAgICAgQm9keTogYm9keSBhcyBUQm9keSxcclxuICAgICAgICBIZWFkZXI6IGhlYWRlciBhcyBUSGVhZGVyLFxyXG4gICAgICAgIFRhYjogdGFiIGFzIFRUYWIsXHJcbiAgICAgICAgR3JpZDogZ3JpZCBhcyBUR3JpZCxcclxuICAgICAgICBOYXZpZ2F0aW9uOiBuYXZpZ2F0aW9uIGFzIFROYXZpZ2F0aW9uLFxyXG4gICAgICAgIFF1aWNrRm9ybTogcXVpY2tGb3JtIGFzIFRRdWlja0Zvcm0sXHJcbiAgICAgICAgRm9ybUlkOiBjb250ZXh0VWlGb3JtU2VsZWN0b3I/LmdldEN1cnJlbnRJdGVtKCk/LmdldElkKCksXHJcbiAgICAgICAgRm9ybUxhYmVsOiBjb250ZXh0VWlGb3JtU2VsZWN0b3I/LmdldEN1cnJlbnRJdGVtKCk/LmdldExhYmVsKCksXHJcbiAgICAgICAgRm9ybVR5cGU6IGNvbnRleHRVaT8uZ2V0Rm9ybVR5cGUoKSxcclxuICAgICAgICBFbnRpdHlJZDogY29udGV4dERhdGFFbnRpdHk/LmdldElkKCksXHJcbiAgICAgICAgRW50aXR5TmFtZTogY29udGV4dERhdGFFbnRpdHk/LmdldEVudGl0eU5hbWUoKSxcclxuICAgICAgICBEYXRhSXNEaXJ0eTogY29udGV4dERhdGE/LmdldElzRGlydHkoKSxcclxuICAgICAgICBEYXRhSXNWYWxpZDogY29udGV4dERhdGE/LmlzVmFsaWQoKSxcclxuICAgICAgICBTYXZlOiAoc2F2ZU9wdGlvbnM/OiBhbnkpID0+IGNvbnRleHREYXRhPy5zYXZlKHNhdmVPcHRpb25zKSxcclxuICAgICAgICBSZWZyZXNoOiAoc2F2ZT86IGJvb2xlYW4pID0+IGNvbnRleHREYXRhPy5yZWZyZXNoKHNhdmUpLFxyXG4gICAgICAgIENsb3NlOiAoKSA9PiBjb250ZXh0VWk/LmNsb3NlKCksXHJcbiAgICAgICAgU2V0Rm9ybU5vdGlmaWNhdGlvbjogKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gY29udGV4dFVpPy5zZXRGb3JtTm90aWZpY2F0aW9uKG1lc3NhZ2UsIGxldmVsLCB1bmlxdWVJZCksXHJcbiAgICAgICAgQ2xlYXJGb3JtTm90aWZpY2F0aW9uOiAodW5pcXVlSWQ6IHN0cmluZykgPT4gY29udGV4dFVpPy5jbGVhckZvcm1Ob3RpZmljYXRpb24odW5pcXVlSWQpLFxyXG4gICAgICAgIFJlZnJlc2hSaWJib246IChyZWZyZXNoQWxsPzogYm9vbGVhbikgPT4gY29udGV4dFVpPy5yZWZyZXNoUmliYm9uKHJlZnJlc2hBbGwpLFxyXG4gICAgICAgIFVpQWRkTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IGNvbnRleHRVaT8uYWRkTG9hZGVkKGNhbGxiYWNrKSxcclxuICAgICAgICBVaVJlbW92ZUxvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiBjb250ZXh0VWk/LnJlbW92ZUxvYWRlZChjYWxsYmFjayksXHJcbiAgICB9O1xyXG59XHJcbiIsICIvKipcclxuICogQ29udGFjdCBGb3JtIFR5cGVTY3JpcHQgTW9kdWxlXHJcbiAqIEZpbGUgblx1MDBFMHkgXHUwMTExXHUwMUIwXHUxRUUzYyBnZW5lcmF0b3IgdFx1MUVGMSBcdTAxMTFcdTFFRDluZyB0XHUxRUExbyByYVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IExvYWRGb3JtVjIsIElTdHJpbmdDb250cm9sLCBJTnVtYmVyQ29udHJvbCwgSUJvb2xlYW5Db250cm9sLCBJT3B0aW9uU2V0Q29udHJvbCwgSUxvb2t1cENvbnRyb2wsIElUYWIsIElTZWN0aW9uLCBJR3JpZCwgSU5hdmlnYXRpb25JdGVtIH0gZnJvbSAnLi9kZXZraXQnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb250YWN0IEZvcm0gSW50ZXJmYWNlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBjXHUwMEUxYyBmaWVsZCB0cm9uZyBCb2R5IGNcdTFFRTdhIENvbnRhY3QgZm9ybSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0Rm9ybUJvZHkge1xyXG4gICAgLyoqIEZpcnN0IE5hbWUgKi9cclxuICAgIEZpcnN0TmFtZTogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogTGFzdCBOYW1lICovXHJcbiAgICBMYXN0TmFtZTogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogRnVsbCBOYW1lICovXHJcbiAgICBGdWxsTmFtZTogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogRW1haWwgKi9cclxuICAgIEVNYWlsQWRkcmVzczE6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIEJ1c2luZXNzIFBob25lICovXHJcbiAgICBUZWxlcGhvbmUxOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBNb2JpbGUgUGhvbmUgKi9cclxuICAgIE1vYmlsZVBob25lOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBKb2IgVGl0bGUgKi9cclxuICAgIEpvYlRpdGxlOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBQYXJlbnQgQ3VzdG9tZXIgKEFjY291bnQgb3IgQ29udGFjdCkgKi9cclxuICAgIFBhcmVudEN1c3RvbWVySWQ6IElMb29rdXBDb250cm9sO1xyXG4gICAgLyoqIE93bmVyICovXHJcbiAgICBPd25lcklkOiBJTG9va3VwQ29udHJvbDtcclxuICAgIC8qKiBDdXJyZW5jeSAqL1xyXG4gICAgVHJhbnNhY3Rpb25DdXJyZW5jeUlkOiBJTG9va3VwQ29udHJvbDtcclxuICAgIC8qKiBEbyBOb3QgRW1haWwgKi9cclxuICAgIERvTm90RU1haWw6IElCb29sZWFuQ29udHJvbDtcclxuICAgIC8qKiBEbyBOb3QgUGhvbmUgKi9cclxuICAgIERvTm90UGhvbmU6IElCb29sZWFuQ29udHJvbDtcclxuICAgIC8qKiBBZGRyZXNzIDE6IFN0cmVldCAxICovXHJcbiAgICBBZGRyZXNzMV9MaW5lMTogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogQWRkcmVzcyAxOiBDaXR5ICovXHJcbiAgICBBZGRyZXNzMV9DaXR5OiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBBZGRyZXNzIDE6IFN0YXRlL1Byb3ZpbmNlICovXHJcbiAgICBBZGRyZXNzMV9TdGF0ZU9yUHJvdmluY2U6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIEFkZHJlc3MgMTogWklQL1Bvc3RhbCBDb2RlICovXHJcbiAgICBBZGRyZXNzMV9Qb3N0YWxDb2RlOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBBZGRyZXNzIDE6IENvdW50cnkvUmVnaW9uICovXHJcbiAgICBBZGRyZXNzMV9Db3VudHJ5OiBJU3RyaW5nQ29udHJvbDtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gSGVhZGVyICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RGb3JtSGVhZGVyIHtcclxuICAgIE93bmVySWQ6IElMb29rdXBDb250cm9sO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBUYWJzICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RGb3JtVGFicyB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBJVGFiICYgeyBTZWN0aW9uOiB7IFtrZXk6IHN0cmluZ106IElTZWN0aW9uIH0gfTtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gR3JpZCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0Rm9ybUdyaWQge1xyXG4gICAgW2tleTogc3RyaW5nXTogSUdyaWQ7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIE5hdmlnYXRpb24gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdEZvcm1OYXZpZ2F0aW9uIHtcclxuICAgIFtrZXk6IHN0cmluZ106IElOYXZpZ2F0aW9uSXRlbTtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gUXVpY2tGb3JtICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RGb3JtUXVpY2tGb3JtIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb250YWN0IEZvcm0gQ2xhc3NcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RGb3JtIHtcclxuICAgIHB1YmxpYyBCb2R5OiBJQ29udGFjdEZvcm1Cb2R5O1xyXG4gICAgcHVibGljIEhlYWRlcjogSUNvbnRhY3RGb3JtSGVhZGVyO1xyXG4gICAgcHVibGljIFRhYjogSUNvbnRhY3RGb3JtVGFicztcclxuICAgIHB1YmxpYyBHcmlkOiBJQ29udGFjdEZvcm1HcmlkO1xyXG4gICAgcHVibGljIE5hdmlnYXRpb246IElDb250YWN0Rm9ybU5hdmlnYXRpb247XHJcbiAgICBwdWJsaWMgUXVpY2tGb3JtOiBJQ29udGFjdEZvcm1RdWlja0Zvcm07XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybUlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybUxhYmVsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybVR5cGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhSXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhSXNWYWxpZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBFeGVjdXRpb25Db250ZXh0OiBhbnk7XHJcbiAgICBwdWJsaWMgU2F2ZTogKHNhdmVPcHRpb25zPzogYW55KSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgcHVibGljIFJlZnJlc2g6IChzYXZlPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIHB1YmxpYyBDbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBTZXRGb3JtTm90aWZpY2F0aW9uOiAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgcHVibGljIENsZWFyRm9ybU5vdGlmaWNhdGlvbjogKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgUmVmcmVzaFJpYmJvbjogKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpQWRkTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlSZW1vdmVMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleGVjdXRpb25Db250ZXh0OiBhbnksIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU/OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBmb3JtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICBib2R5OiBbXHJcbiAgICAgICAgICAgICAgICBcIkZpcnN0TmFtZVwiLCBcIkxhc3ROYW1lXCIsIFwiRnVsbE5hbWVcIiwgXCJFTWFpbEFkZHJlc3MxXCIsIFwiVGVsZXBob25lMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJNb2JpbGVQaG9uZVwiLCBcIkpvYlRpdGxlXCIsIFwiUGFyZW50Q3VzdG9tZXJJZFwiLCBcIk93bmVySWRcIiwgXCJUcmFuc2FjdGlvbkN1cnJlbmN5SWRcIixcclxuICAgICAgICAgICAgICAgIFwiRG9Ob3RFTWFpbFwiLCBcIkRvTm90UGhvbmVcIiwgXCJBZGRyZXNzMV9MaW5lMVwiLCBcIkFkZHJlc3MxX0NpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiQWRkcmVzczFfU3RhdGVPclByb3ZpbmNlXCIsIFwiQWRkcmVzczFfUG9zdGFsQ29kZVwiLCBcIkFkZHJlc3MxX0NvdW50cnlcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBoZWFkZXI6IFtcIk93bmVySWRcIl0sXHJcbiAgICAgICAgICAgIHRhYjogW10sXHJcbiAgICAgICAgICAgIGdyaWQ6IFtdLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiBbXSxcclxuICAgICAgICAgICAgcXVpY2s6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IExvYWRGb3JtVjI8SUNvbnRhY3RGb3JtQm9keSwgSUNvbnRhY3RGb3JtSGVhZGVyLCBJQ29udGFjdEZvcm1UYWJzLCBJQ29udGFjdEZvcm1HcmlkLCBJQ29udGFjdEZvcm1OYXZpZ2F0aW9uLCBJQ29udGFjdEZvcm1RdWlja0Zvcm0+KFxyXG4gICAgICAgICAgICBleGVjdXRpb25Db250ZXh0LFxyXG4gICAgICAgICAgICBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lLFxyXG4gICAgICAgICAgICBmb3JtQ29uZmlnXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5FeGVjdXRpb25Db250ZXh0ID0gZm9ybS5FeGVjdXRpb25Db250ZXh0O1xyXG4gICAgICAgIHRoaXMuQm9keSA9IGZvcm0uQm9keTtcclxuICAgICAgICB0aGlzLkhlYWRlciA9IGZvcm0uSGVhZGVyO1xyXG4gICAgICAgIHRoaXMuVGFiID0gZm9ybS5UYWI7XHJcbiAgICAgICAgdGhpcy5HcmlkID0gZm9ybS5HcmlkO1xyXG4gICAgICAgIHRoaXMuTmF2aWdhdGlvbiA9IGZvcm0uTmF2aWdhdGlvbjtcclxuICAgICAgICB0aGlzLlF1aWNrRm9ybSA9IGZvcm0uUXVpY2tGb3JtO1xyXG4gICAgICAgIHRoaXMuRm9ybUlkID0gZm9ybS5Gb3JtSWQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtTGFiZWwgPSBmb3JtLkZvcm1MYWJlbDtcclxuICAgICAgICB0aGlzLkZvcm1UeXBlID0gZm9ybS5Gb3JtVHlwZTtcclxuICAgICAgICB0aGlzLkVudGl0eUlkID0gZm9ybS5FbnRpdHlJZDtcclxuICAgICAgICB0aGlzLkVudGl0eU5hbWUgPSBmb3JtLkVudGl0eU5hbWU7XHJcbiAgICAgICAgdGhpcy5EYXRhSXNEaXJ0eSA9IGZvcm0uRGF0YUlzRGlydHk7XHJcbiAgICAgICAgdGhpcy5EYXRhSXNWYWxpZCA9IGZvcm0uRGF0YUlzVmFsaWQ7XHJcbiAgICAgICAgdGhpcy5TYXZlID0gZm9ybS5TYXZlO1xyXG4gICAgICAgIHRoaXMuUmVmcmVzaCA9IGZvcm0uUmVmcmVzaDtcclxuICAgICAgICB0aGlzLkNsb3NlID0gZm9ybS5DbG9zZTtcclxuICAgICAgICB0aGlzLlNldEZvcm1Ob3RpZmljYXRpb24gPSBmb3JtLlNldEZvcm1Ob3RpZmljYXRpb247XHJcbiAgICAgICAgdGhpcy5DbGVhckZvcm1Ob3RpZmljYXRpb24gPSBmb3JtLkNsZWFyRm9ybU5vdGlmaWNhdGlvbjtcclxuICAgICAgICB0aGlzLlJlZnJlc2hSaWJib24gPSBmb3JtLlJlZnJlc2hSaWJib247XHJcbiAgICAgICAgdGhpcy5VaUFkZExvYWRlZCA9IGZvcm0uVWlBZGRMb2FkZWQ7XHJcbiAgICAgICAgdGhpcy5VaVJlbW92ZUxvYWRlZCA9IGZvcm0uVWlSZW1vdmVMb2FkZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gT3B0aW9uU2V0XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgT3B0aW9uU2V0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ29udGFjdCB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEdlbmRlckNvZGUgPSB7XHJcbiAgICAgICAgICAgIE1hbGU6IDEsXHJcbiAgICAgICAgICAgIEZlbWFsZTogMlxyXG4gICAgICAgIH0gYXMgY29uc3Q7XHJcblxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTdGF0ZUNvZGUgPSB7XHJcbiAgICAgICAgICAgIEFjdGl2ZTogMCxcclxuICAgICAgICAgICAgSW5hY3RpdmU6IDFcclxuICAgICAgICB9IGFzIGNvbnN0O1xyXG5cclxuICAgICAgICBleHBvcnQgY29uc3QgU3RhdHVzQ29kZSA9IHtcclxuICAgICAgICAgICAgQWN0aXZlOiAxLFxyXG4gICAgICAgICAgICBJbmFjdGl2ZTogMlxyXG4gICAgICAgIH0gYXMgY29uc3Q7XHJcbiAgICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ2tQQSxXQUFTLE9BQVUsS0FBVSxNQUFjLFVBQXlCO0FBQ2hFLFdBQU8sZUFBZSxLQUFLLE1BQU07QUFBQSxNQUM3QixLQUFLO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0w7QUFFQSxXQUFTLGFBQWdCLEtBQVUsTUFBYyxVQUFtQixVQUFvQztBQUNwRyxXQUFPLGVBQWUsS0FBSyxNQUFNO0FBQUEsTUFDN0IsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2xCLENBQUM7QUFBQSxFQUNMO0FBTUEsV0FBUyxVQUFVLGFBQWtCLE9B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
