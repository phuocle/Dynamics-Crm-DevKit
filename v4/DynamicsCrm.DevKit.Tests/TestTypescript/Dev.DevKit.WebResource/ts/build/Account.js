"use strict";
var IIFEAccount = (() => {
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

  // Account.ts
  var Account_exports = {};
  __export(Account_exports, {
    default: () => Account_default
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

  // generator/Account.form.ts
  var AccountForm = class {
    /**
     * Account Form constructor
     * @param executionContext the execution context
     * @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
     */
    constructor(executionContext, defaultWebResourceName) {
      const formConfig = {
        body: [
          "AccountNumber",
          "Name",
          "Telephone1",
          "EMailAddress1",
          "Fax",
          "WebSiteURL",
          "Description",
          "CreditLimit",
          "Revenue",
          "NumberOfEmployees",
          "CreditOnHold",
          "DoNotEMail",
          "DoNotPhone",
          "DoNotFax",
          "DoNotBulkEMail",
          "DoNotPostalMail",
          "FollowEmail",
          "IndustryCode",
          "OwnershipCode",
          "PaymentTermsCode",
          "PreferredContactMethodCode",
          "Address1_FreightTermsCode",
          "Address1_ShippingMethodCode",
          "ParentAccountId",
          "PrimaryContactId",
          "TransactionCurrencyId",
          "OwnerId",
          "SIC",
          "TickerSymbol",
          "Address1_Composite",
          "Address1_City",
          "Address1_Line1",
          "Address1_Line2",
          "Address1_Line3",
          "Address1_PostalCode",
          "Address1_StateOrProvince",
          "Address1_Country",
          "Address1_Name",
          "Address1_Telephone1"
        ],
        header: ["NumberOfEmployees", "OwnerId", "Revenue", "CreditLimit", "PreferredContactMethodCode", "PrimaryContactId"],
        tab: [
          "SUMMARY_TAB___ACCOUNT_INFORMATION",
          "SUMMARY_TAB___ADDRESS",
          "SUMMARY_TAB___SOCIAL_PANE_TAB",
          "DETAILS_TAB___COMPANY_PROFILE",
          "DETAILS_TAB___BILLING",
          "DETAILS_TAB___SHIPPING",
          "DETAILS_TAB___CONTACT_PREFERENCES",
          "DETAILS_TAB___ChildAccounts",
          "general___account_information",
          "general___address",
          "general___description",
          "details___professional_information",
          "details___billing_information",
          "administration___contact_methods",
          "administration___internal_information",
          "contacts___contacts",
          "notes_and_activities___activities",
          "notes_and_activities___notes",
          "tab_1___tab_1_column_1_section_1",
          "tab_1___tab_1_column_2_section_1",
          "tab_1___tab_1_column_3_section_1"
        ],
        grid: ["ChildAccounts", "Contacts", "accountactivitiesgrid", "accountContactsGrid"],
        navigation: [
          "account_adx_inviteredemptions",
          "account_adx_portalcomments",
          "Account_Appointments",
          "account_DeletedItemReferences",
          "Account_Email_EmailSender",
          "Account_Email_SendersAccount",
          "Account_Emails",
          "account_parent_account",
          "Account_Phonecalls",
          "Account_Tasks",
          "adx_invitation_assigntoaccount",
          "contact_customer_accounts",
          "msa_account_managingpartner",
          "msa_contact_managingpartner"
        ],
        quick: ["contactquickform___EMailAddress1", "contactquickform___Telephone1"]
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
    let Account;
    ((Account2) => {
      Account2.AccountCategoryCode = {
        Preferred_Customer: 1,
        Standard: 2
      };
      Account2.IndustryCode = {
        Accounting: 1,
        Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2,
        Broadcasting_Printing_and_Publishing: 3,
        Brokers: 4,
        Building_Supply_Retail: 5,
        Business_Services: 6,
        Consulting: 7,
        Consumer_Services: 8,
        Design_Direction_and_Creative_Management: 9,
        Distributors_Dispatchers_and_Processors: 10,
        Doctors_Offices_and_Clinics: 11,
        Durable_Manufacturing: 12,
        Eating_and_Drinking_Places: 13,
        Entertainment_Retail: 14,
        Equipment_Rental_and_Leasing: 15,
        Financial: 16,
        Food_and_Tobacco_Processing: 17,
        Inbound_Capital_Intensive_Processing: 18,
        Inbound_Repair_and_Services: 19,
        Insurance: 20,
        Legal_Services: 21,
        Non_Durable_Merchandise_Retail: 22,
        Outbound_Consumer_Service: 23,
        Petrochemical_Extraction_and_Distribution: 24,
        Service_Retail: 25,
        SIG_Affiliations: 26,
        Social_Services: 27,
        Special_Outbound_Trade_Contractors: 28,
        Specialty_Realty: 29,
        Transportation: 30,
        Utility_Creation_and_Distribution: 31,
        Vehicle_Retail: 32,
        Wholesale: 33
      };
      Account2.OwnershipCode = {
        Other: 4,
        Private: 2,
        Public: 1,
        Subsidiary: 3
      };
      Account2.PaymentTermsCode = {
        _2_10_Net_30: 2,
        Net_30: 1,
        Net_45: 3,
        Net_60: 4
      };
      Account2.PreferredContactMethodCode = {
        Any: 1,
        Email: 2,
        Fax: 4,
        Mail: 5,
        Phone: 3
      };
      Account2.StateCode = {
        Active: 0,
        Inactive: 1
      };
      Account2.StatusCode = {
        Active: 1,
        Inactive: 2
      };
    })(Account = OptionSet3.Account || (OptionSet3.Account = {}));
  })(OptionSet || (OptionSet = {}));

  // Account.ts
  var formAccount = function() {
    "use strict";
    let form;
    async function onLoad(executionContext) {
      form = new AccountForm(executionContext);
      registerEvents();
      form.UiAddLoaded(UiAddLoaded);
    }
    function registerEvents() {
      if (form.ExecutionContext.IsInitialLoad()) {
      }
    }
    async function UiAddLoaded(executionContext) {
    }
    return {
      OnLoad: onLoad
    };
  }();
  var Account_default = formAccount;
  return __toCommonJS(Account_exports);
})();
(function(){if(typeof IIFEAccount!=='undefined'&&IIFEAccount.default)window['formAccount']=IIFEAccount.default;})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vQWNjb3VudC50cyIsICIuLi9nZW5lcmF0b3IvZGV2a2l0LnRzIiwgIi4uL2dlbmVyYXRvci9BY2NvdW50LmZvcm0udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEFjY291bnRGb3JtLCBPcHRpb25TZXQgfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuY29uc3QgZm9ybUFjY291bnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgbGV0IGZvcm06IEFjY291bnRGb3JtO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uTG9hZChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBmb3JtID0gbmV3IEFjY291bnRGb3JtKGV4ZWN1dGlvbkNvbnRleHQpO1xyXG4gICAgICAgIHJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICAgICAgZm9ybS5VaUFkZExvYWRlZChVaUFkZExvYWRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGZvcm0uRXhlY3V0aW9uQ29udGV4dC5Jc0luaXRpYWxMb2FkKCkpIHtcclxuICAgICAgICAgICAgLy8gQkVHSU4gRVZFTlRTXHJcblxyXG4gICAgICAgICAgICAvLyBFTkQgRVZFTlRTXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gT04gTE9BRFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gVWlBZGRMb2FkZWQoZXhlY3V0aW9uQ29udGV4dDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy8gQkVHSU4gT04gTE9BRCBMT0dJQ1xyXG5cclxuICAgICAgICAvLyBFTkQgT04gTE9BRCBMT0dJQ1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRU5EIE9OIExPQURcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gT04gQ0hBTkdFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBFTkQgT04gQ0hBTkdFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIFBSRSBTRUFSQ0hcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIEVORCBQUkUgU0VBUkNIXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIE9USEVSU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gRU5EIE9USEVSU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBPbkxvYWQ6IG9uTG9hZFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1BY2NvdW50OyIsICIvKipcclxuICogRGV2S2l0IFR5cGVTY3JpcHQgTW9kdWxlXHJcbiAqIFxyXG4gKiBcdTAxMTBcdTAwRTJ5IGxcdTAwRTAgcGhpXHUwMEVBbiBiXHUxRUEzbiBUeXBlU2NyaXB0IGNcdTFFRTdhIGxpYi9kZXZraXQuanMsIHRcdTFFQURwIHRydW5nIHZcdTAwRTBvIExvYWRGb3JtVjIgZnVuY3Rpb25cclxuICogXHUwMTExXHUxRUMzIGhcdTFFRDcgdHJcdTFFRTMgZm9ybSBzY3JpcHRpbmcgdlx1MUVEQmkgXHUwMTExXHUxRUE3eSBcdTAxMTFcdTFFRTcgSW50ZWxsaVNlbnNlLlxyXG4gKiBcclxuICogRmlsZSBnXHUxRUQxYyBsaWIvZGV2a2l0LmpzIGNcdTAwRjMgbmhpXHUxRUMxdSB0XHUwMEVEbmggblx1MDEwM25nIGhcdTAxQTFuIChXZWJBcGksIFV0aWxpdHksIENvcGlsb3QsIFNpZGVQYW5lcy4uLiksXHJcbiAqIGZpbGUgblx1MDBFMHkgY2hcdTFFQzkgY1x1MUVBN24gTG9hZEZvcm1WMiBjaG8gdXNlIGNhc2UgY2hcdTAwRURuaCBsXHUwMEUwIGZvcm0gc2NyaXB0aW5nLlxyXG4gKiBcclxuICogQ1x1MDBFMWMgdFx1MDBFRG5oIG5cdTAxMDNuZyBraFx1MDBFMWMgblx1MUVCRnUgY1x1MUVBN24gY1x1MDBGMyB0aFx1MUVDMyB0aFx1MDBFQW0gc2F1IGhvXHUxRUI3YyBnXHUxRUNEaSB0clx1MUVGMWMgdGlcdTFFQkZwIHRcdTFFRUIgWHJtIG9iamVjdC5cclxuICogXHJcbiAqIEByZXF1aXJlcyBAdHlwZXMveHJtIC0gXHUwMTEwXHUwMEUzIFx1MDExMVx1MDFCMFx1MUVFM2MgY1x1MDBFMGkgdHJvbmcgZGV2RGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBOb3RlOiBAdHlwZXMveHJtIFx1MDExMVx1MDBFMyBjXHUwMEUwaSBcdTAxMTFcdTFFQjd0LCBYcm0gZ2xvYmFsIGNcdTAwRjMgXHUwMTExXHUxRUE3eSBcdTAxMTFcdTFFRTcgSW50ZWxsaVNlbnNlXHJcbi8vIE5cdTFFQkZ1IFR5cGVTY3JpcHQgYlx1MDBFMW8gbFx1MUVEN2kgWHJtIG5vdCBmb3VuZCwgY1x1MDBGMyB0aFx1MUVDMyB1bmNvbW1lbnQgZFx1MDBGMm5nIGRcdTAxQjBcdTFFREJpOlxyXG4vLyBkZWNsYXJlIGNvbnN0IFhybTogYW55O1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEJhc2UgQ29udHJvbCBJbnRlcmZhY2VzIC0gXHUwMTEwXHUxRUNCbmggbmdoXHUwMTI5YSBjXHUwMEUxYyBpbnRlcmZhY2VzIGNobyBjb250cm9sc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBGaWVsZCBjb250cm9sIGNcdTAxQTEgYlx1MUVBM24gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmllbGRDb250cm9sIHtcclxuICAgIC8qKiBHaVx1MDBFMSB0clx1MUVDQiBjXHUxRUU3YSBmaWVsZCAqL1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIC8qKiBUXHUwMEVBbiBhdHRyaWJ1dGUgKi9cclxuICAgIHJlYWRvbmx5IEF0dHJpYnV0ZU5hbWU6IHN0cmluZztcclxuICAgIC8qKiBUXHUwMEVBbiBjb250cm9sICovXHJcbiAgICByZWFkb25seSBDb250cm9sTmFtZTogc3RyaW5nO1xyXG4gICAgLyoqIEtpXHUxRUMzdSBhdHRyaWJ1dGUgKi9cclxuICAgIHJlYWRvbmx5IEF0dHJpYnV0ZVR5cGU6IHN0cmluZztcclxuICAgIC8qKiBLaVx1MUVDM3UgY29udHJvbCAqL1xyXG4gICAgcmVhZG9ubHkgQ29udHJvbFR5cGU6IHN0cmluZztcclxuICAgIC8qKiBFbmFibGUvRGlzYWJsZSBjb250cm9sICovXHJcbiAgICBEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIC8qKiBWaXNpYmxlL0hpZGRlbiBjb250cm9sICovXHJcbiAgICBWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgLyoqIExhYmVsIGNcdTFFRTdhIGNvbnRyb2wgKi9cclxuICAgIExhYmVsOiBzdHJpbmc7XHJcbiAgICAvKiogUmVxdWlyZWQgbGV2ZWw6IG5vbmUsIHJlcXVpcmVkLCByZWNvbW1lbmRlZCAqL1xyXG4gICAgUmVxdWlyZWRMZXZlbDogc3RyaW5nO1xyXG4gICAgLyoqIFN1Ym1pdCBtb2RlOiBhbHdheXMsIG5ldmVyLCBkaXJ0eSAqL1xyXG4gICAgU3VibWl0TW9kZTogc3RyaW5nO1xyXG4gICAgLyoqIENoZWNrIGlmIHZhbHVlIGlzIGRpcnR5ICovXHJcbiAgICByZWFkb25seSBJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgLyoqIENoZWNrIGlmIHZhbHVlIGlzIHZhbGlkICovXHJcbiAgICByZWFkb25seSBJc1ZhbGlkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKiBBZGQgb25DaGFuZ2UgZXZlbnQgaGFuZGxlciAqL1xyXG4gICAgQWRkT25DaGFuZ2UoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgLyoqIFJlbW92ZSBvbkNoYW5nZSBldmVudCBoYW5kbGVyICovXHJcbiAgICBSZW1vdmVPbkNoYW5nZShjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICAvKiogRmlyZSBvbkNoYW5nZSBldmVudCAqL1xyXG4gICAgRmlyZU9uQ2hhbmdlKCk6IHZvaWQ7XHJcbiAgICAvKiogU2V0IGZvY3VzIHRvIGNvbnRyb2wgKi9cclxuICAgIEZvY3VzKCk6IHZvaWQ7XHJcbiAgICAvKiogU2V0IG5vdGlmaWNhdGlvbiAqL1xyXG4gICAgU2V0Tm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAvKiogQ2xlYXIgbm90aWZpY2F0aW9uICovXHJcbiAgICBDbGVhck5vdGlmaWNhdGlvbih1bmlxdWVJZDogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIC8qKiBTZXQgY29udHJvbCB2YWxpZGl0eSAqL1xyXG4gICAgU2V0SXNWYWxpZCh2YWxpZDogYm9vbGVhbiwgbWVzc2FnZT86IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIFN0cmluZyBjb250cm9sICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0cmluZ0NvbnRyb2wgZXh0ZW5kcyBJRmllbGRDb250cm9sIHtcclxuICAgIFZhbHVlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgTWF4TGVuZ3RoOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBGb3JtYXQ6IHN0cmluZztcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gTnVtYmVyL0ludGVnZXIgY29udHJvbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJDb250cm9sIGV4dGVuZHMgSUZpZWxkQ29udHJvbCB7XHJcbiAgICBWYWx1ZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IE1heDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgTWluOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBQcmVjaXNpb246IG51bWJlcjtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gQm9vbGVhbiBjb250cm9sICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJvb2xlYW5Db250cm9sIGV4dGVuZHMgSUZpZWxkQ29udHJvbCB7XHJcbiAgICBWYWx1ZTogYm9vbGVhbiB8IG51bGw7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIE9wdGlvblNldCBjb250cm9sICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvblNldENvbnRyb2wgZXh0ZW5kcyBJRmllbGRDb250cm9sIHtcclxuICAgIFZhbHVlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgT3B0aW9uczogeyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdO1xyXG4gICAgcmVhZG9ubHkgU2VsZWN0ZWRPcHRpb246IHsgdGV4dDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0gfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgVGV4dDogc3RyaW5nO1xyXG5cclxuICAgIEFkZE9wdGlvbih0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIGluZGV4PzogbnVtYmVyKTogdm9pZDtcclxuICAgIFJlbW92ZU9wdGlvbih2YWx1ZTogbnVtYmVyKTogdm9pZDtcclxuICAgIENsZWFyT3B0aW9ucygpOiB2b2lkO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBMb29rdXAgY29udHJvbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElMb29rdXBDb250cm9sIGV4dGVuZHMgSUZpZWxkQ29udHJvbCB7XHJcbiAgICBWYWx1ZTogeyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGVudGl0eVR5cGU6IHN0cmluZyB9W10gfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgRW50aXR5VHlwZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIEFkZFByZVNlYXJjaChjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBSZW1vdmVQcmVTZWFyY2goY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgQWRkQ3VzdG9tRmlsdGVyKGZpbHRlcjogc3RyaW5nLCBlbnRpdHlMb2dpY2FsTmFtZT86IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBBZGRDdXN0b21WaWV3KHZpZXdJZDogc3RyaW5nLCBlbnRpdHlOYW1lOiBzdHJpbmcsIHZpZXdEaXNwbGF5TmFtZTogc3RyaW5nLCBmZXRjaFhtbDogc3RyaW5nLCBsYXlvdXRYbWw6IHN0cmluZywgaXNEZWZhdWx0OiBib29sZWFuKTogdm9pZDtcclxuICAgIERlZmF1bHRWaWV3OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIERhdGUgY29udHJvbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlQ29udHJvbCBleHRlbmRzIElGaWVsZENvbnRyb2wge1xyXG4gICAgVmFsdWU6IERhdGUgfCBudWxsO1xyXG4gICAgU2hvd1RpbWU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIE1vbmV5IGNvbnRyb2wgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTW9uZXlDb250cm9sIGV4dGVuZHMgSU51bWJlckNvbnRyb2wge1xyXG4gICAgLy8gTW9uZXkga1x1MUVCRiB0aFx1MUVFQmEgdFx1MUVFQiBOdW1iZXJcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGb3JtIEludGVyZmFjZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gRm9ybSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtIHtcclxuICAgIC8qKiBGb3JtIElEICovXHJcbiAgICByZWFkb25seSBGb3JtSWQ6IHN0cmluZztcclxuICAgIC8qKiBGb3JtIExhYmVsICovXHJcbiAgICByZWFkb25seSBGb3JtTGFiZWw6IHN0cmluZztcclxuICAgIC8qKiBGb3JtIFR5cGU6IENyZWF0ZSAoMSksIFVwZGF0ZSAoMiksIFJlYWRPbmx5ICgzKSwgRGlzYWJsZWQgKDQpLCBRdWlja0NyZWF0ZSAoNSksIEJ1bGtFZGl0ICg2KSAqL1xyXG4gICAgcmVhZG9ubHkgRm9ybVR5cGU6IG51bWJlcjtcclxuICAgIC8qKiBFbnRpdHkgSUQgKi9cclxuICAgIHJlYWRvbmx5IEVudGl0eUlkOiBzdHJpbmc7XHJcbiAgICAvKiogRW50aXR5IE5hbWUgLSBsb2dpY2FsIG5hbWUgY1x1MUVFN2EgZW50aXR5ICovXHJcbiAgICByZWFkb25seSBFbnRpdHlOYW1lOiBzdHJpbmc7XHJcbiAgICAvKiogQ2hlY2sgaWYgZm9ybSBkYXRhIGlzIGRpcnR5ICovXHJcbiAgICByZWFkb25seSBEYXRhSXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIC8qKiBDaGVjayBpZiBmb3JtIGRhdGEgaXMgdmFsaWQgKi9cclxuICAgIHJlYWRvbmx5IERhdGFJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgLyoqIFByaW1hcnkgYXR0cmlidXRlIHZhbHVlICovXHJcbiAgICByZWFkb25seSBQcmltYXJ5QXR0cmlidXRlVmFsdWU6IHN0cmluZztcclxuXHJcbiAgICAvKiogU2F2ZSB0aGUgZm9ybSAqL1xyXG4gICAgU2F2ZShzYXZlT3B0aW9ucz86IHsgc2F2ZU1vZGU6IG51bWJlciB9KTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKiBSZWZyZXNoIGZvcm0gZGF0YSAqL1xyXG4gICAgUmVmcmVzaChzYXZlPzogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKiogQ2xvc2UgdGhlIGZvcm0gKi9cclxuICAgIENsb3NlKCk6IHZvaWQ7XHJcbiAgICAvKiogU2V0IGZvcm0gbm90aWZpY2F0aW9uICovXHJcbiAgICBTZXRGb3JtTm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IFwiRVJST1JcIiB8IFwiV0FSTklOR1wiIHwgXCJJTkZPXCIsIHVuaXF1ZUlkOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgLyoqIENsZWFyIGZvcm0gbm90aWZpY2F0aW9uICovXHJcbiAgICBDbGVhckZvcm1Ob3RpZmljYXRpb24odW5pcXVlSWQ6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAvKiogUmVmcmVzaCByaWJib24gKi9cclxuICAgIFJlZnJlc2hSaWJib24ocmVmcmVzaEFsbD86IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBUYWIgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGFiIHtcclxuICAgIC8qKiBUYWIgTmFtZSAqL1xyXG4gICAgcmVhZG9ubHkgTmFtZTogc3RyaW5nO1xyXG4gICAgLyoqIFRhYiBMYWJlbCAqL1xyXG4gICAgTGFiZWw6IHN0cmluZztcclxuICAgIC8qKiBUYWIgVmlzaWJsZSAqL1xyXG4gICAgVmlzaWJsZTogYm9vbGVhbjtcclxuICAgIC8qKiBUYWIgRGlzcGxheSBTdGF0ZSAqL1xyXG4gICAgRGlzcGxheVN0YXRlOiBcImV4cGFuZGVkXCIgfCBcImNvbGxhcHNlZFwiO1xyXG5cclxuICAgIC8qKiBBZGQgdGFiIHN0YXRlIGNoYW5nZSBoYW5kbGVyICovXHJcbiAgICBBZGRUYWJTdGF0ZUNoYW5nZShjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICAvKiogUmVtb3ZlIHRhYiBzdGF0ZSBjaGFuZ2UgaGFuZGxlciAqL1xyXG4gICAgUmVtb3ZlVGFiU3RhdGVDaGFuZ2UoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgLyoqIFNldCBmb2N1cyB0byB0YWIgKi9cclxuICAgIEZvY3VzKCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIFNlY3Rpb24gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2VjdGlvbiB7XHJcbiAgICAvKiogU2VjdGlvbiBOYW1lICovXHJcbiAgICByZWFkb25seSBOYW1lOiBzdHJpbmc7XHJcbiAgICAvKiogU2VjdGlvbiBMYWJlbCAqL1xyXG4gICAgTGFiZWw6IHN0cmluZztcclxuICAgIC8qKiBTZWN0aW9uIFZpc2libGUgKi9cclxuICAgIFZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIE5hdmlnYXRpb24gSXRlbSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYXZpZ2F0aW9uSXRlbSB7XHJcbiAgICAvKiogTmF2aWdhdGlvbiBJRCAqL1xyXG4gICAgcmVhZG9ubHkgSWQ6IHN0cmluZztcclxuICAgIC8qKiBOYXZpZ2F0aW9uIExhYmVsICovXHJcbiAgICBMYWJlbDogc3RyaW5nO1xyXG4gICAgLyoqIE5hdmlnYXRpb24gVmlzaWJsZSAqL1xyXG4gICAgVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICAvKiogU2V0IGZvY3VzIHRvIG5hdmlnYXRpb24gaXRlbSAqL1xyXG4gICAgRm9jdXMoKTogdm9pZDtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gR3JpZCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkIHtcclxuICAgIC8qKiBHcmlkIEVudGl0eSBOYW1lICovXHJcbiAgICByZWFkb25seSBFbnRpdHlOYW1lOiBzdHJpbmc7XHJcbiAgICAvKiogR3JpZCBGZXRjaFhtbCAqL1xyXG4gICAgcmVhZG9ubHkgRmV0Y2hYbWw6IHN0cmluZztcclxuICAgIC8qKiBUb3RhbCByZWNvcmQgY291bnQgKi9cclxuICAgIHJlYWRvbmx5IFRvdGFsUmVjb3JkQ291bnQ6IG51bWJlcjtcclxuICAgIC8qKiBHcmlkIFZpc2libGUgKi9cclxuICAgIFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqIEFkZCBvbkxvYWQgaGFuZGxlciAqL1xyXG4gICAgQWRkT25Mb2FkKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKTogdm9pZDtcclxuICAgIC8qKiBSZW1vdmUgb25Mb2FkIGhhbmRsZXIgKi9cclxuICAgIFJlbW92ZU9uTG9hZChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICAvKiogUmVmcmVzaCBncmlkICovXHJcbiAgICBSZWZyZXNoKCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIEV4ZWN1dGlvbiBDb250ZXh0ICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV4ZWN1dGlvbkNvbnRleHQge1xyXG4gICAgLyoqIEdldCBmb3JtIGNvbnRleHQgKi9cclxuICAgIGdldEZvcm1Db250ZXh0KCk6IGFueTtcclxuICAgIC8qKiBDaGVjayBpZiB0aGlzIGlzIGluaXRpYWwgbG9hZCAqL1xyXG4gICAgSXNJbml0aWFsTG9hZCgpOiBib29sZWFuO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEhlbHBlciBGdW5jdGlvbnMgLSBDXHUwMEUxYyBoXHUwMEUwbSBoZWxwZXIgXHUwMTExXHUxRUMzIGxvYWQgZm9ybVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiBnZXRYcm0oKTogdHlwZW9mIFhybSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdyBhcyBhbnkpLlhybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KS5Ycm07XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHBhcmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgKHBhcmVudCBhcyBhbnkpLlhybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIChwYXJlbnQgYXMgYW55KS5Ycm07XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBmb3VuZCBYcm0gaW4gdGhlIGN1cnJlbnQgY29udGV4dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXR0ZXI8VD4ob2JqOiBhbnksIHByb3A6IHN0cmluZywgZ2V0dGVyRm46ICgpID0+IFQpOiB2b2lkIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcclxuICAgICAgICBnZXQ6IGdldHRlckZuLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0dGVyU2V0dGVyPFQ+KG9iajogYW55LCBwcm9wOiBzdHJpbmcsIGdldHRlckZuOiAoKSA9PiBULCBzZXR0ZXJGbjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XHJcbiAgICAgICAgZ2V0OiBnZXR0ZXJGbixcclxuICAgICAgICBzZXQ6IHNldHRlckZuLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGaWVsZCBMb2FkaW5nIEZ1bmN0aW9uXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGaWVsZChmb3JtQ29udGV4dDogYW55LCBmaWVsZDogYW55LCBhdHRyaWJ1dGU6IGFueSwgY29udHJvbDogYW55KTogdm9pZCB7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGUnLCAoKSA9PiBjb250cm9sPy5nZXRBdHRyaWJ1dGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGVOYW1lJywgKCkgPT4gYXR0cmlidXRlPy5nZXROYW1lKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlVHlwZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0QXR0cmlidXRlVHlwZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xOYW1lJywgKCkgPT4gY29udHJvbD8uZ2V0TmFtZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xUeXBlJywgKCkgPT4gY29udHJvbD8uZ2V0Q29udHJvbFR5cGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdGb3JtYXQnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldEZvcm1hdCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0lzRGlydHknLCAoKSA9PiBhdHRyaWJ1dGU/LmdldElzRGlydHkoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJc1ZhbGlkJywgKCkgPT4gYXR0cmlidXRlPy5pc1ZhbGlkKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnTWF4JywgKCkgPT4gYXR0cmlidXRlPy5nZXRNYXgoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdNYXhMZW5ndGgnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE1heExlbmd0aCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ01pbicsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TWluKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnT3B0aW9ucycsICgpID0+IGF0dHJpYnV0ZT8uZ2V0T3B0aW9ucygpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1NlbGVjdGVkT3B0aW9uJywgKCkgPT4gYXR0cmlidXRlPy5nZXRTZWxlY3RlZE9wdGlvbigpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1RleHQnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFRleHQoKSk7XHJcblxyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnRGlzYWJsZWQnLCAoKSA9PiBjb250cm9sPy5nZXREaXNhYmxlZCgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAoZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSAzIHx8IGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gNCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnRyb2w/LnNldERpc2FibGVkKHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnTGFiZWwnLCAoKSA9PiBjb250cm9sPy5nZXRMYWJlbCgpLCAodmFsdWU6IHN0cmluZykgPT4geyBjb250cm9sPy5zZXRMYWJlbCh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnUmVxdWlyZWRMZXZlbCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0UmVxdWlyZWRMZXZlbCgpLCAodmFsdWU6IHN0cmluZykgPT4geyBhdHRyaWJ1dGU/LnNldFJlcXVpcmVkTGV2ZWwodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1N1Ym1pdE1vZGUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFN1Ym1pdE1vZGUoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgYXR0cmlidXRlPy5zZXRTdWJtaXRNb2RlKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdWYWx1ZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0VmFsdWUoKSwgKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSAzIHx8IGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gNCkgcmV0dXJuO1xyXG4gICAgICAgIGF0dHJpYnV0ZT8uc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdWaXNpYmxlJywgKCkgPT4gY29udHJvbD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgY29udHJvbD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG5cclxuICAgIGZpZWxkLkFkZE9uQ2hhbmdlID0gKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiBhdHRyaWJ1dGU/LmFkZE9uQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZU9uQ2hhbmdlID0gKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiBhdHRyaWJ1dGU/LnJlbW92ZU9uQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkZpcmVPbkNoYW5nZSA9ICgpID0+IGF0dHJpYnV0ZT8uZmlyZU9uQ2hhbmdlKCk7XHJcbiAgICBmaWVsZC5Gb2N1cyA9ICgpID0+IGNvbnRyb2w/LnNldEZvY3VzKCk7XHJcbiAgICBmaWVsZC5TZXROb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250cm9sPy5zZXROb3RpZmljYXRpb24obWVzc2FnZSwgdW5pcXVlSWQpO1xyXG4gICAgZmllbGQuQ2xlYXJOb3RpZmljYXRpb24gPSAodW5pcXVlSWQ6IHN0cmluZykgPT4gY29udHJvbD8uY2xlYXJOb3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgZmllbGQuU2V0SXNWYWxpZCA9ICh2YWxpZDogYm9vbGVhbiwgbWVzc2FnZT86IHN0cmluZykgPT4gYXR0cmlidXRlPy5zZXRJc1ZhbGlkKHZhbGlkLCBtZXNzYWdlKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEZXZLaXQgTW9kdWxlIEV4cG9ydFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogTG9hZCBGb3JtIFYyIC0gSFx1MDBFMG0gY2hcdTAwRURuaCBcdTAxMTFcdTFFQzMgbG9hZCBmb3JtIHZcdTFFREJpIGNcdTAwRTFjIGZpZWxkc1xyXG4gKiBAcGFyYW0gZXhlY3V0aW9uQ29udGV4dCBFeGVjdXRpb24gY29udGV4dCB0XHUxRUVCIGZvcm1cclxuICogQHBhcmFtIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUgVFx1MDBFQW4gd2ViIHJlc291cmNlIG1cdTFFQjdjIFx1MDExMVx1MUVDQm5oXHJcbiAqIEBwYXJhbSBmb3JtQ29uZmlnIENcdTFFQTV1IGhcdTAwRUNuaCBmb3JtIGJhbyBnXHUxRUQzbSBib2R5LCBoZWFkZXIsIHRhYiwgZ3JpZCwgbmF2aWdhdGlvbiwgcXVpY2tcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkRm9ybVYyPFRCb2R5LCBUSGVhZGVyLCBUVGFiLCBUR3JpZCwgVE5hdmlnYXRpb24sIFRRdWlja0Zvcm0+KFxyXG4gICAgZXhlY3V0aW9uQ29udGV4dDogYW55LFxyXG4gICAgZGVmYXVsdFdlYlJlc291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgZm9ybUNvbmZpZzoge1xyXG4gICAgICAgIGJvZHk/OiBzdHJpbmdbXTtcclxuICAgICAgICBoZWFkZXI/OiBzdHJpbmdbXTtcclxuICAgICAgICB0YWI/OiBzdHJpbmdbXTtcclxuICAgICAgICBncmlkPzogc3RyaW5nW107XHJcbiAgICAgICAgbmF2aWdhdGlvbj86IHN0cmluZ1tdO1xyXG4gICAgICAgIHF1aWNrPzogc3RyaW5nW107XHJcbiAgICB9XHJcbik6IHtcclxuICAgIEV4ZWN1dGlvbkNvbnRleHQ6IElFeGVjdXRpb25Db250ZXh0O1xyXG4gICAgQm9keTogVEJvZHk7XHJcbiAgICBIZWFkZXI6IFRIZWFkZXI7XHJcbiAgICBUYWI6IFRUYWI7XHJcbiAgICBHcmlkOiBUR3JpZDtcclxuICAgIE5hdmlnYXRpb246IFROYXZpZ2F0aW9uO1xyXG4gICAgUXVpY2tGb3JtOiBUUXVpY2tGb3JtO1xyXG4gICAgRm9ybUlkOiBzdHJpbmc7XHJcbiAgICBGb3JtTGFiZWw6IHN0cmluZztcclxuICAgIEZvcm1UeXBlOiBudW1iZXI7XHJcbiAgICBFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgRW50aXR5TmFtZTogc3RyaW5nO1xyXG4gICAgRGF0YUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBEYXRhSXNWYWxpZDogYm9vbGVhbjtcclxuICAgIFNhdmU6IChzYXZlT3B0aW9ucz86IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIFJlZnJlc2g6IChzYXZlPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIENsb3NlOiAoKSA9PiB2b2lkO1xyXG4gICAgU2V0Rm9ybU5vdGlmaWNhdGlvbjogKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIENsZWFyRm9ybU5vdGlmaWNhdGlvbjogKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBSZWZyZXNoUmliYm9uOiAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBVaUFkZExvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgVWlSZW1vdmVMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxufSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGV4dCA9IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEZvcm1Db250ZXh0Py4oKSA/PyBleGVjdXRpb25Db250ZXh0O1xyXG4gICAgY29uc3QgY29udGV4dERhdGEgPSBmb3JtQ29udGV4dD8uZGF0YTtcclxuICAgIGNvbnN0IGNvbnRleHREYXRhRW50aXR5ID0gZm9ybUNvbnRleHQ/LmRhdGE/LmVudGl0eTtcclxuICAgIGNvbnN0IGNvbnRleHRVaSA9IGZvcm1Db250ZXh0Py51aTtcclxuICAgIGNvbnN0IGNvbnRleHRVaUZvcm1TZWxlY3RvciA9IGZvcm1Db250ZXh0Py51aT8uZm9ybVNlbGVjdG9yO1xyXG5cclxuICAgIC8vIEJ1aWxkIEJvZHlcclxuICAgIGNvbnN0IGJvZHk6IGFueSA9IHt9O1xyXG4gICAgaWYgKGZvcm1Db25maWcuYm9keSkge1xyXG4gICAgICAgIGZvcm1Db25maWcuYm9keS5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGJvZHlbZmllbGROYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBsb2dpY2FsTmFtZSA9IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2wobG9naWNhbE5hbWUpID8/IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGUgPSBmb3JtQ29udGV4dD8uZ2V0QXR0cmlidXRlKGxvZ2ljYWxOYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGUgJiYgY29udHJvbD8uZ2V0QXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgPSBjb250cm9sLmdldEF0dHJpYnV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvYWRGaWVsZChmb3JtQ29udGV4dCwgYm9keVtmaWVsZE5hbWVdLCBhdHRyaWJ1dGUsIGNvbnRyb2wpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIEhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyOiBhbnkgPSB7fTtcclxuICAgIGlmIChmb3JtQ29uZmlnLmhlYWRlcikge1xyXG4gICAgICAgIGZvcm1Db25maWcuaGVhZGVyLmZvckVhY2goZmllbGROYW1lID0+IHtcclxuICAgICAgICAgICAgaGVhZGVyW2ZpZWxkTmFtZV0gPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgbG9naWNhbE5hbWUgPSAoXCJoZWFkZXJfXCIgKyBmaWVsZE5hbWUpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChsb2dpY2FsTmFtZSkgPz8gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZmllbGROYW1lKTtcclxuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IGZvcm1Db250ZXh0Py5nZXRBdHRyaWJ1dGUoZmllbGROYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZSAmJiBjb250cm9sPy5nZXRBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSA9IGNvbnRyb2wuZ2V0QXR0cmlidXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9hZEZpZWxkKGZvcm1Db250ZXh0LCBoZWFkZXJbZmllbGROYW1lXSwgYXR0cmlidXRlLCBjb250cm9sKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWlsZCBUYWJzIChzaW1wbGlmaWVkKVxyXG4gICAgY29uc3QgdGFiOiBhbnkgPSB7fTtcclxuICAgIGlmIChmb3JtQ29uZmlnLnRhYikge1xyXG4gICAgICAgIGZvcm1Db25maWcudGFiLmZvckVhY2godGFiQ29uZmlnID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFydHMgPSB0YWJDb25maWcuc3BsaXQoXCJfX19cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYk5hbWUgPSBwYXJ0c1swXTtcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbk5hbWUgPSBwYXJ0cy5sZW5ndGggPiAxID8gcGFydHNbMV0gOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0YWJbdGFiTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRhYlt0YWJOYW1lXSA9IHsgU2VjdGlvbjoge30gfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYk9iamVjdCA9IGZvcm1Db250ZXh0Py51aT8udGFicz8uZ2V0KHRhYk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyKHRhYlt0YWJOYW1lXSwgJ05hbWUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBnZXR0ZXJTZXR0ZXIodGFiW3RhYk5hbWVdLCAnTGFiZWwnLCAoKSA9PiB0YWJPYmplY3Q/LmdldExhYmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IHRhYk9iamVjdD8uc2V0TGFiZWwodmFsdWUpOyB9KTtcclxuICAgICAgICAgICAgICAgIGdldHRlclNldHRlcih0YWJbdGFiTmFtZV0sICdWaXNpYmxlJywgKCkgPT4gdGFiT2JqZWN0Py5nZXRWaXNpYmxlKCksICh2YWx1ZTogYm9vbGVhbikgPT4geyB0YWJPYmplY3Q/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICAgICAgICAgIGdldHRlclNldHRlcih0YWJbdGFiTmFtZV0sICdEaXNwbGF5U3RhdGUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldERpc3BsYXlTdGF0ZSgpLCAodmFsdWU6IHN0cmluZykgPT4geyB0YWJPYmplY3Q/LnNldERpc3BsYXlTdGF0ZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgdGFiW3RhYk5hbWVdLkFkZFRhYlN0YXRlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IHRhYk9iamVjdD8uYWRkVGFiU3RhdGVDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgdGFiW3RhYk5hbWVdLlJlbW92ZVRhYlN0YXRlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IHRhYk9iamVjdD8ucmVtb3ZlVGFiU3RhdGVDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgdGFiW3RhYk5hbWVdLkZvY3VzID0gKCkgPT4gdGFiT2JqZWN0Py5zZXRGb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VjdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYk9iamVjdCA9IGZvcm1Db250ZXh0Py51aT8udGFicz8uZ2V0KHRhYk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvbk9iamVjdCA9IHRhYk9iamVjdD8uc2VjdGlvbnM/LmdldChzZWN0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0YWJbdGFiTmFtZV0uU2VjdGlvbltzZWN0aW9uTmFtZV0gPSB7fTtcclxuICAgICAgICAgICAgICAgIGdldHRlcih0YWJbdGFiTmFtZV0uU2VjdGlvbltzZWN0aW9uTmFtZV0sICdOYW1lJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIGdldHRlclNldHRlcih0YWJbdGFiTmFtZV0uU2VjdGlvbltzZWN0aW9uTmFtZV0sICdMYWJlbCcsICgpID0+IHNlY3Rpb25PYmplY3Q/LmdldExhYmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiBzZWN0aW9uT2JqZWN0Py5zZXRMYWJlbCh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYlt0YWJOYW1lXS5TZWN0aW9uW3NlY3Rpb25OYW1lXSwgJ1Zpc2libGUnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRWaXNpYmxlKCksICh2YWx1ZTogYm9vbGVhbikgPT4gc2VjdGlvbk9iamVjdD8uc2V0VmlzaWJsZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgR3JpZCAoc2ltcGxpZmllZClcclxuICAgIGNvbnN0IGdyaWQ6IGFueSA9IHt9O1xyXG4gICAgaWYgKGZvcm1Db25maWcuZ3JpZCkge1xyXG4gICAgICAgIGZvcm1Db25maWcuZ3JpZC5mb3JFYWNoKGdyaWROYW1lID0+IHtcclxuICAgICAgICAgICAgZ3JpZFtncmlkTmFtZV0gPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZENvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChncmlkTmFtZSk7XHJcbiAgICAgICAgICAgIGdldHRlcihncmlkW2dyaWROYW1lXSwgJ0VudGl0eU5hbWUnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0RW50aXR5TmFtZSgpKTtcclxuICAgICAgICAgICAgZ2V0dGVyKGdyaWRbZ3JpZE5hbWVdLCAnRmV0Y2hYbWwnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0RmV0Y2hYbWwoKSk7XHJcbiAgICAgICAgICAgIGdldHRlcihncmlkW2dyaWROYW1lXSwgJ1RvdGFsUmVjb3JkQ291bnQnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0R3JpZCgpPy5nZXRUb3RhbFJlY29yZENvdW50KCkpO1xyXG4gICAgICAgICAgICBnZXR0ZXJTZXR0ZXIoZ3JpZFtncmlkTmFtZV0sICdWaXNpYmxlJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGdyaWRDb250cm9sPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgICAgIGdyaWRbZ3JpZE5hbWVdLkFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBncmlkQ29udHJvbD8uYWRkT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgZ3JpZFtncmlkTmFtZV0uUmVtb3ZlT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdyaWRDb250cm9sPy5yZW1vdmVPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICBncmlkW2dyaWROYW1lXS5SZWZyZXNoID0gKCkgPT4gZ3JpZENvbnRyb2w/LnJlZnJlc2goKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWlsZCBOYXZpZ2F0aW9uIChzaW1wbGlmaWVkKVxyXG4gICAgY29uc3QgbmF2aWdhdGlvbjogYW55ID0ge307XHJcbiAgICBpZiAoZm9ybUNvbmZpZy5uYXZpZ2F0aW9uKSB7XHJcbiAgICAgICAgZm9ybUNvbmZpZy5uYXZpZ2F0aW9uLmZvckVhY2gobmF2TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25bbmF2TmFtZV0gPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBmb3JtQ29udGV4dD8udWk/Lm5hdmlnYXRpb24/Lml0ZW1zO1xyXG4gICAgICAgICAgICBsZXQgbmF2aWdhdGlvbkl0ZW06IGFueSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChuYXZJdGVtcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbmF2SXRlbXMuZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IG5hdkl0ZW1zLmdldChpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbT8uZ2V0SWQoKSA9PT0gbmF2TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnZXR0ZXIobmF2aWdhdGlvbltuYXZOYW1lXSwgJ0lkJywgKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LmdldElkKCkpO1xyXG4gICAgICAgICAgICBnZXR0ZXJTZXR0ZXIobmF2aWdhdGlvbltuYXZOYW1lXSwgJ0xhYmVsJywgKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LmdldExhYmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiBuYXZpZ2F0aW9uSXRlbT8uc2V0TGFiZWwodmFsdWUpKTtcclxuICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKG5hdmlnYXRpb25bbmF2TmFtZV0sICdWaXNpYmxlJywgKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiBuYXZpZ2F0aW9uSXRlbT8uc2V0VmlzaWJsZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uW25hdk5hbWVdLkZvY3VzID0gKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LnNldEZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgUXVpY2tGb3JtIChzaW1wbGlmaWVkKVxyXG4gICAgY29uc3QgcXVpY2tGb3JtOiBhbnkgPSB7fTtcclxuICAgIGlmIChmb3JtQ29uZmlnLnF1aWNrKSB7XHJcbiAgICAgICAgZm9ybUNvbmZpZy5xdWljay5mb3JFYWNoKHF1aWNrQ29uZmlnID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBxdWlja0NvbmZpZy5zcGxpdChcIl9fX1wiKTtcclxuICAgICAgICAgICAgY29uc3QgcXVpY2tGb3JtTmFtZSA9IHBhcnRzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBwYXJ0cy5sZW5ndGggPiAxID8gcGFydHNbMV0gOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFxdWlja0Zvcm1bcXVpY2tGb3JtTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHF1aWNrRm9ybVtxdWlja0Zvcm1OYW1lXSA9IHsgQm9keToge30gfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1aWNrID0gZm9ybUNvbnRleHQ/LnVpPy5xdWlja0Zvcm1zPy5nZXQocXVpY2tGb3JtTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBnZXR0ZXIocXVpY2tGb3JtW3F1aWNrRm9ybU5hbWVdLCAnQ29udHJvbE5hbWUnLCAoKSA9PiBxdWljaz8uZ2V0TmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIGdldHRlcihxdWlja0Zvcm1bcXVpY2tGb3JtTmFtZV0sICdDb250cm9sVHlwZScsICgpID0+IHF1aWNrPy5nZXRDb250cm9sVHlwZSgpKTtcclxuICAgICAgICAgICAgICAgIGdldHRlclNldHRlcihxdWlja0Zvcm1bcXVpY2tGb3JtTmFtZV0sICdEaXNhYmxlZCcsICgpID0+IHF1aWNrPy5nZXREaXNhYmxlZCgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgcXVpY2s/LnNldERpc2FibGVkKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBnZXR0ZXJTZXR0ZXIocXVpY2tGb3JtW3F1aWNrRm9ybU5hbWVdLCAnTGFiZWwnLCAoKSA9PiBxdWljaz8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgcXVpY2s/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBnZXR0ZXJTZXR0ZXIocXVpY2tGb3JtW3F1aWNrRm9ybU5hbWVdLCAnVmlzaWJsZScsICgpID0+IHF1aWNrPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYm9vbGVhbikgPT4geyBxdWljaz8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgcXVpY2tGb3JtW3F1aWNrRm9ybU5hbWVdLklzTG9hZGVkID0gKCkgPT4gcXVpY2s/LmlzTG9hZGVkKCk7XHJcbiAgICAgICAgICAgICAgICBxdWlja0Zvcm1bcXVpY2tGb3JtTmFtZV0uUmVmcmVzaCA9ICgpID0+IHF1aWNrPy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICBxdWlja0Zvcm1bcXVpY2tGb3JtTmFtZV0uRm9jdXMgPSAoKSA9PiBxdWljaz8uc2V0Rm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcXVpY2tGb3JtW3F1aWNrRm9ybU5hbWVdLkJvZHlbZmllbGROYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIEV4ZWN1dGlvbkNvbnRleHQgd3JhcHBlclxyXG4gICAgY29uc3QgZXhlY3V0aW9uQ29udGV4dFdyYXBwZXI6IElFeGVjdXRpb25Db250ZXh0ID0ge1xyXG4gICAgICAgIGdldEZvcm1Db250ZXh0OiAoKSA9PiBmb3JtQ29udGV4dCxcclxuICAgICAgICBJc0luaXRpYWxMb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgaW5pdGlhbCBsb2FkIGJhc2VkIG9uIGZvcm0gdHlwZVxyXG4gICAgICAgICAgICByZXR1cm4gY29udGV4dFVpPy5nZXRGb3JtVHlwZSgpID09PSAxO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBFeGVjdXRpb25Db250ZXh0OiBleGVjdXRpb25Db250ZXh0V3JhcHBlcixcclxuICAgICAgICBCb2R5OiBib2R5IGFzIFRCb2R5LFxyXG4gICAgICAgIEhlYWRlcjogaGVhZGVyIGFzIFRIZWFkZXIsXHJcbiAgICAgICAgVGFiOiB0YWIgYXMgVFRhYixcclxuICAgICAgICBHcmlkOiBncmlkIGFzIFRHcmlkLFxyXG4gICAgICAgIE5hdmlnYXRpb246IG5hdmlnYXRpb24gYXMgVE5hdmlnYXRpb24sXHJcbiAgICAgICAgUXVpY2tGb3JtOiBxdWlja0Zvcm0gYXMgVFF1aWNrRm9ybSxcclxuICAgICAgICBGb3JtSWQ6IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uZ2V0Q3VycmVudEl0ZW0oKT8uZ2V0SWQoKSxcclxuICAgICAgICBGb3JtTGFiZWw6IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uZ2V0Q3VycmVudEl0ZW0oKT8uZ2V0TGFiZWwoKSxcclxuICAgICAgICBGb3JtVHlwZTogY29udGV4dFVpPy5nZXRGb3JtVHlwZSgpLFxyXG4gICAgICAgIEVudGl0eUlkOiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0SWQoKSxcclxuICAgICAgICBFbnRpdHlOYW1lOiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0RW50aXR5TmFtZSgpLFxyXG4gICAgICAgIERhdGFJc0RpcnR5OiBjb250ZXh0RGF0YT8uZ2V0SXNEaXJ0eSgpLFxyXG4gICAgICAgIERhdGFJc1ZhbGlkOiBjb250ZXh0RGF0YT8uaXNWYWxpZCgpLFxyXG4gICAgICAgIFNhdmU6IChzYXZlT3B0aW9ucz86IGFueSkgPT4gY29udGV4dERhdGE/LnNhdmUoc2F2ZU9wdGlvbnMpLFxyXG4gICAgICAgIFJlZnJlc2g6IChzYXZlPzogYm9vbGVhbikgPT4gY29udGV4dERhdGE/LnJlZnJlc2goc2F2ZSksXHJcbiAgICAgICAgQ2xvc2U6ICgpID0+IGNvbnRleHRVaT8uY2xvc2UoKSxcclxuICAgICAgICBTZXRGb3JtTm90aWZpY2F0aW9uOiAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250ZXh0VWk/LnNldEZvcm1Ob3RpZmljYXRpb24obWVzc2FnZSwgbGV2ZWwsIHVuaXF1ZUlkKSxcclxuICAgICAgICBDbGVhckZvcm1Ob3RpZmljYXRpb246ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250ZXh0VWk/LmNsZWFyRm9ybU5vdGlmaWNhdGlvbih1bmlxdWVJZCksXHJcbiAgICAgICAgUmVmcmVzaFJpYmJvbjogKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiBjb250ZXh0VWk/LnJlZnJlc2hSaWJib24ocmVmcmVzaEFsbCksXHJcbiAgICAgICAgVWlBZGRMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gY29udGV4dFVpPy5hZGRMb2FkZWQoY2FsbGJhY2spLFxyXG4gICAgICAgIFVpUmVtb3ZlTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IGNvbnRleHRVaT8ucmVtb3ZlTG9hZGVkKGNhbGxiYWNrKSxcclxuICAgIH07XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBBY2NvdW50IEZvcm0gVHlwZVNjcmlwdCBNb2R1bGVcclxuICogXHUwMTEwXHUwMEUyeSBsXHUwMEUwIHBoaVx1MDBFQW4gYlx1MUVBM24gVHlwZVNjcmlwdCBjXHUxRUU3YSBlbnRpdGllcy9BY2NvdW50LmZvcm0uanNcclxuICogRmlsZSBuXHUwMEUweSBcdTAxMTFcdTAxQjBcdTFFRTNjIGdlbmVyYXRvciB0XHUxRUYxIFx1MDExMVx1MUVEOW5nIHRcdTFFQTFvIHJhLCBzYXUgblx1MDBFMHkgY1x1MDBGMyB0aFx1MUVDMyB2aVx1MUVCRnQgdG9vbCBcdTAxMTFcdTFFQzMgZ2VuZXJhdGUgXHUwMTExXHUwMEZBbmcgZm9ybWF0IG5cdTAwRTB5XHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTG9hZEZvcm1WMiwgSVN0cmluZ0NvbnRyb2wsIElOdW1iZXJDb250cm9sLCBJQm9vbGVhbkNvbnRyb2wsIElPcHRpb25TZXRDb250cm9sLCBJTG9va3VwQ29udHJvbCwgSU1vbmV5Q29udHJvbCwgSVRhYiwgSVNlY3Rpb24sIElHcmlkLCBJTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuL2RldmtpdCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEFjY291bnQgRm9ybSBJbnRlcmZhY2VzIC0gVHlwZVNjcmlwdCB0XHUxRUYxIFx1MDExMVx1MUVEOW5nIGNcdTAwRjMgSW50ZWxsaVNlbnNlIHRcdTFFRUIgaW50ZXJmYWNlcyBuXHUwMEUweVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBjXHUwMEUxYyBmaWVsZCB0cm9uZyBCb2R5IGNcdTFFRTdhIEFjY291bnQgZm9ybSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50Rm9ybUJvZHkge1xyXG4gICAgLyoqIFR5cGUgYW4gSUQgbnVtYmVyIG9yIGNvZGUgZm9yIHRoZSBhY2NvdW50IHRvIHF1aWNrbHkgc2VhcmNoIGFuZCBpZGVudGlmeSB0aGUgYWNjb3VudCBpbiBzeXN0ZW0gdmlld3MuICovXHJcbiAgICBBY2NvdW50TnVtYmVyOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb21wYW55IG9yIGJ1c2luZXNzIG5hbWUuICovXHJcbiAgICBOYW1lOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBtYWluIHBob25lIG51bWJlciBmb3IgdGhpcyBhY2NvdW50LiAqL1xyXG4gICAgVGVsZXBob25lMTogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgcHJpbWFyeSBlbWFpbCBhZGRyZXNzIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIEVNYWlsQWRkcmVzczE6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgdGhlIGZheCBudW1iZXIgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgRmF4OiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBhY2NvdW50J3Mgd2Vic2l0ZSBVUkwgdG8gZ2V0IHF1aWNrIGRldGFpbHMgYWJvdXQgdGhlIGNvbXBhbnkgcHJvZmlsZS4gKi9cclxuICAgIFdlYlNpdGVVUkw6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0byBkZXNjcmliZSB0aGUgYWNjb3VudCwgc3VjaCBhcyBhbiBleGNlcnB0IGZyb20gdGhlIGNvbXBhbnkncyB3ZWJzaXRlLiAqL1xyXG4gICAgRGVzY3JpcHRpb246IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNyZWRpdCBsaW1pdCBvZiB0aGUgYWNjb3VudC4gKi9cclxuICAgIENyZWRpdExpbWl0OiBJTW9uZXlDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgdGhlIGFubnVhbCByZXZlbnVlIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIFJldmVudWU6IElNb25leUNvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgbnVtYmVyIG9mIGVtcGxveWVlcyB0aGF0IHdvcmsgYXQgdGhlIGFjY291bnQuICovXHJcbiAgICBOdW1iZXJPZkVtcGxveWVlczogSU51bWJlckNvbnRyb2w7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGNyZWRpdCBmb3IgdGhlIGFjY291bnQgaXMgb24gaG9sZC4gKi9cclxuICAgIENyZWRpdE9uSG9sZDogSUJvb2xlYW5Db250cm9sO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBkaXJlY3QgZW1haWwuICovXHJcbiAgICBEb05vdEVNYWlsOiBJQm9vbGVhbkNvbnRyb2w7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIHBob25lIGNhbGxzLiAqL1xyXG4gICAgRG9Ob3RQaG9uZTogSUJvb2xlYW5Db250cm9sO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBmYXhlcy4gKi9cclxuICAgIERvTm90RmF4OiBJQm9vbGVhbkNvbnRyb2w7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGJ1bGsgZW1haWwuICovXHJcbiAgICBEb05vdEJ1bGtFTWFpbDogSUJvb2xlYW5Db250cm9sO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBkaXJlY3QgbWFpbC4gKi9cclxuICAgIERvTm90UG9zdGFsTWFpbDogSUJvb2xlYW5Db250cm9sO1xyXG4gICAgLyoqIEluZm9ybWF0aW9uIGFib3V0IHdoZXRoZXIgdG8gYWxsb3cgZm9sbG93aW5nIGVtYWlsIGFjdGl2aXR5LiAqL1xyXG4gICAgRm9sbG93RW1haWw6IElCb29sZWFuQ29udHJvbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBwcmltYXJ5IGluZHVzdHJ5LiAqL1xyXG4gICAgSW5kdXN0cnlDb2RlOiBJT3B0aW9uU2V0Q29udHJvbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBvd25lcnNoaXAgc3RydWN0dXJlLiAqL1xyXG4gICAgT3duZXJzaGlwQ29kZTogSU9wdGlvblNldENvbnRyb2w7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBwYXltZW50IHRlcm1zLiAqL1xyXG4gICAgUGF5bWVudFRlcm1zQ29kZTogSU9wdGlvblNldENvbnRyb2w7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBwcmVmZXJyZWQgbWV0aG9kIG9mIGNvbnRhY3QuICovXHJcbiAgICBQcmVmZXJyZWRDb250YWN0TWV0aG9kQ29kZTogSU9wdGlvblNldENvbnRyb2w7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBmcmVpZ2h0IHRlcm1zIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfRnJlaWdodFRlcm1zQ29kZTogSU9wdGlvblNldENvbnRyb2w7XHJcbiAgICAvKiogU2VsZWN0IGEgc2hpcHBpbmcgbWV0aG9kIGZvciBkZWxpdmVyaWVzLiAqL1xyXG4gICAgQWRkcmVzczFfU2hpcHBpbmdNZXRob2RDb2RlOiBJT3B0aW9uU2V0Q29udHJvbDtcclxuICAgIC8qKiBDaG9vc2UgdGhlIHBhcmVudCBhY2NvdW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGFjY291bnQuICovXHJcbiAgICBQYXJlbnRBY2NvdW50SWQ6IElMb29rdXBDb250cm9sO1xyXG4gICAgLyoqIENob29zZSB0aGUgcHJpbWFyeSBjb250YWN0IGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIFByaW1hcnlDb250YWN0SWQ6IElMb29rdXBDb250cm9sO1xyXG4gICAgLyoqIENob29zZSB0aGUgbG9jYWwgY3VycmVuY3kgZm9yIHRoZSByZWNvcmQuICovXHJcbiAgICBUcmFuc2FjdGlvbkN1cnJlbmN5SWQ6IElMb29rdXBDb250cm9sO1xyXG4gICAgLyoqIEVudGVyIHRoZSB1c2VyIG9yIHRlYW0gd2hvIGlzIGFzc2lnbmVkIHRvIG1hbmFnZSB0aGUgcmVjb3JkLiAqL1xyXG4gICAgT3duZXJJZDogSUxvb2t1cENvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgU3RhbmRhcmQgSW5kdXN0cmlhbCBDbGFzc2lmaWNhdGlvbiAoU0lDKSBjb2RlLiAqL1xyXG4gICAgU0lDOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzdG9jayBleGNoYW5nZSBzeW1ib2wgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgVGlja2VyU3ltYm9sOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBTaG93cyB0aGUgY29tcGxldGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfQ29tcG9zaXRlOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjaXR5IGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfQ2l0eTogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgZmlyc3QgbGluZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTGluZTE6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgdGhlIHNlY29uZCBsaW5lIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MaW5lMjogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgdGhpcmQgbGluZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTGluZTM6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgdGhlIFpJUCBDb2RlIG9yIHBvc3RhbCBjb2RlIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfUG9zdGFsQ29kZTogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgc3RhdGUgb3IgcHJvdmluY2Ugb2YgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1N0YXRlT3JQcm92aW5jZTogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgY291bnRyeSBvciByZWdpb24gZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9Db3VudHJ5OiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIGEgZGVzY3JpcHRpdmUgbmFtZSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX05hbWU6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgdGhlIG1haW4gcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMTogSVN0cmluZ0NvbnRyb2w7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIGNcdTAwRTFjIGZpZWxkIHRyb25nIEhlYWRlciBjXHUxRUU3YSBBY2NvdW50IGZvcm0gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWNjb3VudEZvcm1IZWFkZXIge1xyXG4gICAgLyoqIFR5cGUgdGhlIG51bWJlciBvZiBlbXBsb3llZXMgdGhhdCB3b3JrIGF0IHRoZSBhY2NvdW50LiAqL1xyXG4gICAgTnVtYmVyT2ZFbXBsb3llZXM6IElOdW1iZXJDb250cm9sO1xyXG4gICAgLyoqIEVudGVyIHRoZSB1c2VyIG9yIHRlYW0gd2hvIGlzIGFzc2lnbmVkIHRvIG1hbmFnZSB0aGUgcmVjb3JkLiAqL1xyXG4gICAgT3duZXJJZDogSUxvb2t1cENvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgYW5udWFsIHJldmVudWUgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgUmV2ZW51ZTogSU1vbmV5Q29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjcmVkaXQgbGltaXQgb2YgdGhlIGFjY291bnQuICovXHJcbiAgICBDcmVkaXRMaW1pdDogSU1vbmV5Q29udHJvbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHByZWZlcnJlZCBtZXRob2Qgb2YgY29udGFjdC4gKi9cclxuICAgIFByZWZlcnJlZENvbnRhY3RNZXRob2RDb2RlOiBJT3B0aW9uU2V0Q29udHJvbDtcclxuICAgIC8qKiBDaG9vc2UgdGhlIHByaW1hcnkgY29udGFjdCBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBQcmltYXJ5Q29udGFjdElkOiBJTG9va3VwQ29udHJvbDtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gU2VjdGlvbiB0cm9uZyBUYWIgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWNjb3VudFRhYlNlY3Rpb25zIHtcclxuICAgIFtrZXk6IHN0cmluZ106IElTZWN0aW9uO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBUYWIgdHJvbmcgQWNjb3VudCBmb3JtICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRGb3JtVGFiIGV4dGVuZHMgSVRhYiB7XHJcbiAgICBTZWN0aW9uOiBJQWNjb3VudFRhYlNlY3Rpb25zO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyB0XHUxRUE1dCBjXHUxRUEzIFRhYnMgdHJvbmcgQWNjb3VudCBmb3JtICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRGb3JtVGFicyB7XHJcbiAgICAvKiogU3VtbWFyeSBUYWIgKi9cclxuICAgIFNVTU1BUllfVEFCOiBJQWNjb3VudEZvcm1UYWI7XHJcbiAgICAvKiogRGV0YWlscyBUYWIgKi9cclxuICAgIERFVEFJTFNfVEFCOiBJQWNjb3VudEZvcm1UYWI7XHJcbiAgICAvKiogR2VuZXJhbCBUYWIgKi9cclxuICAgIGdlbmVyYWw6IElBY2NvdW50Rm9ybVRhYjtcclxuICAgIC8qKiBEZXRhaWxzIFRhYiAoYWx0ZXJuYXRlKSAqL1xyXG4gICAgZGV0YWlsczogSUFjY291bnRGb3JtVGFiO1xyXG4gICAgLyoqIEFkbWluaXN0cmF0aW9uIFRhYiAqL1xyXG4gICAgYWRtaW5pc3RyYXRpb246IElBY2NvdW50Rm9ybVRhYjtcclxuICAgIC8qKiBDb250YWN0cyBUYWIgKi9cclxuICAgIGNvbnRhY3RzOiBJQWNjb3VudEZvcm1UYWI7XHJcbiAgICAvKiogTm90ZXMgYW5kIEFjdGl2aXRpZXMgVGFiICovXHJcbiAgICBub3Rlc19hbmRfYWN0aXZpdGllczogSUFjY291bnRGb3JtVGFiO1xyXG4gICAgLyoqIFRhYiAxIChRdWljayBDcmVhdGUpICovXHJcbiAgICB0YWJfMTogSUFjY291bnRGb3JtVGFiO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBHcmlkIHRyb25nIEFjY291bnQgZm9ybSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50Rm9ybUdyaWQge1xyXG4gICAgLyoqIENoaWxkIEFjY291bnRzIHN1YmdyaWQgKi9cclxuICAgIENoaWxkQWNjb3VudHM6IElHcmlkO1xyXG4gICAgLyoqIENvbnRhY3RzIHN1YmdyaWQgKi9cclxuICAgIENvbnRhY3RzOiBJR3JpZDtcclxuICAgIC8qKiBBY2NvdW50IEFjdGl2aXRpZXMgR3JpZCAqL1xyXG4gICAgYWNjb3VudGFjdGl2aXRpZXNncmlkOiBJR3JpZDtcclxuICAgIC8qKiBBY2NvdW50IENvbnRhY3RzIEdyaWQgKi9cclxuICAgIGFjY291bnRDb250YWN0c0dyaWQ6IElHcmlkO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBOYXZpZ2F0aW9uIHRyb25nIEFjY291bnQgZm9ybSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50Rm9ybU5hdmlnYXRpb24ge1xyXG4gICAgYWNjb3VudF9hZHhfaW52aXRlcmVkZW1wdGlvbnM6IElOYXZpZ2F0aW9uSXRlbTtcclxuICAgIGFjY291bnRfYWR4X3BvcnRhbGNvbW1lbnRzOiBJTmF2aWdhdGlvbkl0ZW07XHJcbiAgICBBY2NvdW50X0FwcG9pbnRtZW50czogSU5hdmlnYXRpb25JdGVtO1xyXG4gICAgYWNjb3VudF9EZWxldGVkSXRlbVJlZmVyZW5jZXM6IElOYXZpZ2F0aW9uSXRlbTtcclxuICAgIEFjY291bnRfRW1haWxfRW1haWxTZW5kZXI6IElOYXZpZ2F0aW9uSXRlbTtcclxuICAgIEFjY291bnRfRW1haWxfU2VuZGVyc0FjY291bnQ6IElOYXZpZ2F0aW9uSXRlbTtcclxuICAgIEFjY291bnRfRW1haWxzOiBJTmF2aWdhdGlvbkl0ZW07XHJcbiAgICBhY2NvdW50X3BhcmVudF9hY2NvdW50OiBJTmF2aWdhdGlvbkl0ZW07XHJcbiAgICBBY2NvdW50X1Bob25lY2FsbHM6IElOYXZpZ2F0aW9uSXRlbTtcclxuICAgIEFjY291bnRfVGFza3M6IElOYXZpZ2F0aW9uSXRlbTtcclxuICAgIGFkeF9pbnZpdGF0aW9uX2Fzc2lnbnRvYWNjb3VudDogSU5hdmlnYXRpb25JdGVtO1xyXG4gICAgY29udGFjdF9jdXN0b21lcl9hY2NvdW50czogSU5hdmlnYXRpb25JdGVtO1xyXG4gICAgbXNhX2FjY291bnRfbWFuYWdpbmdwYXJ0bmVyOiBJTmF2aWdhdGlvbkl0ZW07XHJcbiAgICBtc2FfY29udGFjdF9tYW5hZ2luZ3BhcnRuZXI6IElOYXZpZ2F0aW9uSXRlbTtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gUXVpY2tGb3JtIHRyb25nIEFjY291bnQgZm9ybSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50Rm9ybVF1aWNrRm9ybSB7XHJcbiAgICBjb250YWN0cXVpY2tmb3JtOiB7XHJcbiAgICAgICAgQm9keToge1xyXG4gICAgICAgICAgICBFTWFpbEFkZHJlc3MxOiBhbnk7XHJcbiAgICAgICAgICAgIFRlbGVwaG9uZTE6IGFueTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIElzTG9hZGVkOiAoKSA9PiBib29sZWFuO1xyXG4gICAgICAgIFJlZnJlc2g6ICgpID0+IHZvaWQ7XHJcbiAgICAgICAgRm9jdXM6ICgpID0+IHZvaWQ7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEFjY291bnQgRm9ybSBDbGFzcyAtIENsYXNzIGNoXHUwMEVEbmggXHUwMTExXHUwMUIwXHUxRUUzYyBleHBvcnRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEFjY291bnQgRm9ybSBjbGFzc1xyXG4gKiBTXHUxRUVEIGRcdTFFRTVuZzogY29uc3QgZm9ybSA9IG5ldyBBY2NvdW50Rm9ybShleGVjdXRpb25Db250ZXh0KTtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Rm9ybSB7XHJcbiAgICAvKiogVGhlIEJvZHkgc2VjdGlvbiBvZiBmb3JtIEFjY291bnQgKi9cclxuICAgIHB1YmxpYyBCb2R5OiBJQWNjb3VudEZvcm1Cb2R5O1xyXG4gICAgLyoqIFRoZSBIZWFkZXIgc2VjdGlvbiBvZiBmb3JtIEFjY291bnQgKi9cclxuICAgIHB1YmxpYyBIZWFkZXI6IElBY2NvdW50Rm9ybUhlYWRlcjtcclxuICAgIC8qKiBUaGUgVGFicyBvZiBmb3JtIEFjY291bnQgKi9cclxuICAgIHB1YmxpYyBUYWI6IElBY2NvdW50Rm9ybVRhYnM7XHJcbiAgICAvKiogVGhlIEdyaWQgb2YgZm9ybSBBY2NvdW50ICovXHJcbiAgICBwdWJsaWMgR3JpZDogSUFjY291bnRGb3JtR3JpZDtcclxuICAgIC8qKiBUaGUgTmF2aWdhdGlvbiBvZiBmb3JtIEFjY291bnQgKi9cclxuICAgIHB1YmxpYyBOYXZpZ2F0aW9uOiBJQWNjb3VudEZvcm1OYXZpZ2F0aW9uO1xyXG4gICAgLyoqIFRoZSBRdWlja0Zvcm0gb2YgZm9ybSBBY2NvdW50ICovXHJcbiAgICBwdWJsaWMgUXVpY2tGb3JtOiBJQWNjb3VudEZvcm1RdWlja0Zvcm07XHJcbiAgICAvKiogRm9ybSBJRCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEZvcm1JZDogc3RyaW5nO1xyXG4gICAgLyoqIEZvcm0gTGFiZWwgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBGb3JtTGFiZWw6IHN0cmluZztcclxuICAgIC8qKiBGb3JtIFR5cGUgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBGb3JtVHlwZTogbnVtYmVyO1xyXG4gICAgLyoqIEVudGl0eSBJRCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eUlkOiBzdHJpbmc7XHJcbiAgICAvKiogRW50aXR5IE5hbWUgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlOYW1lOiBzdHJpbmc7XHJcbiAgICAvKiogQ2hlY2sgaWYgZGF0YSBpcyBkaXJ0eSAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IERhdGFJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgLyoqIENoZWNrIGlmIGRhdGEgaXMgdmFsaWQgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhSXNWYWxpZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKiogRXhlY3V0aW9uIENvbnRleHQgKi9cclxuICAgIHB1YmxpYyBFeGVjdXRpb25Db250ZXh0OiBhbnk7XHJcblxyXG4gICAgLyoqIFNhdmUgZm9ybSAqL1xyXG4gICAgcHVibGljIFNhdmU6IChzYXZlT3B0aW9ucz86IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKiBSZWZyZXNoIGZvcm0gKi9cclxuICAgIHB1YmxpYyBSZWZyZXNoOiAoc2F2ZT86IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD47XHJcbiAgICAvKiogQ2xvc2UgZm9ybSAqL1xyXG4gICAgcHVibGljIENsb3NlOiAoKSA9PiB2b2lkO1xyXG4gICAgLyoqIFNldCBmb3JtIG5vdGlmaWNhdGlvbiAqL1xyXG4gICAgcHVibGljIFNldEZvcm1Ob3RpZmljYXRpb246IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICAvKiogQ2xlYXIgZm9ybSBub3RpZmljYXRpb24gKi9cclxuICAgIHB1YmxpYyBDbGVhckZvcm1Ob3RpZmljYXRpb246ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgLyoqIFJlZnJlc2ggcmliYm9uICovXHJcbiAgICBwdWJsaWMgUmVmcmVzaFJpYmJvbjogKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgLyoqIEFkZCBsb2FkZWQgY2FsbGJhY2sgKi9cclxuICAgIHB1YmxpYyBVaUFkZExvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgLyoqIFJlbW92ZSBsb2FkZWQgY2FsbGJhY2sgKi9cclxuICAgIHB1YmxpYyBVaVJlbW92ZUxvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWNjb3VudCBGb3JtIGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0gZXhlY3V0aW9uQ29udGV4dCB0aGUgZXhlY3V0aW9uIGNvbnRleHRcclxuICAgICAqIEBwYXJhbSBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lIGRlZmF1bHQgcmVzb3VyY2UgbmFtZS4gRS5nLjogXCJkZXZraXRfL3Jlc291cmNlcy9SZXNvdXJjZVwiXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGV4ZWN1dGlvbkNvbnRleHQ6IGFueSwgZGVmYXVsdFdlYlJlc291cmNlTmFtZT86IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGZvcm1Db25maWcgPSB7XHJcbiAgICAgICAgICAgIGJvZHk6IFtcclxuICAgICAgICAgICAgICAgIFwiQWNjb3VudE51bWJlclwiLCBcIk5hbWVcIiwgXCJUZWxlcGhvbmUxXCIsIFwiRU1haWxBZGRyZXNzMVwiLCBcIkZheFwiLCBcIldlYlNpdGVVUkxcIixcclxuICAgICAgICAgICAgICAgIFwiRGVzY3JpcHRpb25cIiwgXCJDcmVkaXRMaW1pdFwiLCBcIlJldmVudWVcIiwgXCJOdW1iZXJPZkVtcGxveWVlc1wiLCBcIkNyZWRpdE9uSG9sZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJEb05vdEVNYWlsXCIsIFwiRG9Ob3RQaG9uZVwiLCBcIkRvTm90RmF4XCIsIFwiRG9Ob3RCdWxrRU1haWxcIiwgXCJEb05vdFBvc3RhbE1haWxcIixcclxuICAgICAgICAgICAgICAgIFwiRm9sbG93RW1haWxcIiwgXCJJbmR1c3RyeUNvZGVcIiwgXCJPd25lcnNoaXBDb2RlXCIsIFwiUGF5bWVudFRlcm1zQ29kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJQcmVmZXJyZWRDb250YWN0TWV0aG9kQ29kZVwiLCBcIkFkZHJlc3MxX0ZyZWlnaHRUZXJtc0NvZGVcIiwgXCJBZGRyZXNzMV9TaGlwcGluZ01ldGhvZENvZGVcIixcclxuICAgICAgICAgICAgICAgIFwiUGFyZW50QWNjb3VudElkXCIsIFwiUHJpbWFyeUNvbnRhY3RJZFwiLCBcIlRyYW5zYWN0aW9uQ3VycmVuY3lJZFwiLCBcIk93bmVySWRcIixcclxuICAgICAgICAgICAgICAgIFwiU0lDXCIsIFwiVGlja2VyU3ltYm9sXCIsIFwiQWRkcmVzczFfQ29tcG9zaXRlXCIsIFwiQWRkcmVzczFfQ2l0eVwiLCBcIkFkZHJlc3MxX0xpbmUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFkZHJlc3MxX0xpbmUyXCIsIFwiQWRkcmVzczFfTGluZTNcIiwgXCJBZGRyZXNzMV9Qb3N0YWxDb2RlXCIsIFwiQWRkcmVzczFfU3RhdGVPclByb3ZpbmNlXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFkZHJlc3MxX0NvdW50cnlcIiwgXCJBZGRyZXNzMV9OYW1lXCIsIFwiQWRkcmVzczFfVGVsZXBob25lMVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGhlYWRlcjogW1wiTnVtYmVyT2ZFbXBsb3llZXNcIiwgXCJPd25lcklkXCIsIFwiUmV2ZW51ZVwiLCBcIkNyZWRpdExpbWl0XCIsIFwiUHJlZmVycmVkQ29udGFjdE1ldGhvZENvZGVcIiwgXCJQcmltYXJ5Q29udGFjdElkXCJdLFxyXG4gICAgICAgICAgICB0YWI6IFtcclxuICAgICAgICAgICAgICAgIFwiU1VNTUFSWV9UQUJfX19BQ0NPVU5UX0lORk9STUFUSU9OXCIsIFwiU1VNTUFSWV9UQUJfX19BRERSRVNTXCIsIFwiU1VNTUFSWV9UQUJfX19TT0NJQUxfUEFORV9UQUJcIixcclxuICAgICAgICAgICAgICAgIFwiREVUQUlMU19UQUJfX19DT01QQU5ZX1BST0ZJTEVcIiwgXCJERVRBSUxTX1RBQl9fX0JJTExJTkdcIiwgXCJERVRBSUxTX1RBQl9fX1NISVBQSU5HXCIsXHJcbiAgICAgICAgICAgICAgICBcIkRFVEFJTFNfVEFCX19fQ09OVEFDVF9QUkVGRVJFTkNFU1wiLCBcIkRFVEFJTFNfVEFCX19fQ2hpbGRBY2NvdW50c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJnZW5lcmFsX19fYWNjb3VudF9pbmZvcm1hdGlvblwiLCBcImdlbmVyYWxfX19hZGRyZXNzXCIsIFwiZ2VuZXJhbF9fX2Rlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImRldGFpbHNfX19wcm9mZXNzaW9uYWxfaW5mb3JtYXRpb25cIiwgXCJkZXRhaWxzX19fYmlsbGluZ19pbmZvcm1hdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJhZG1pbmlzdHJhdGlvbl9fX2NvbnRhY3RfbWV0aG9kc1wiLCBcImFkbWluaXN0cmF0aW9uX19faW50ZXJuYWxfaW5mb3JtYXRpb25cIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFjdHNfX19jb250YWN0c1wiLCBcIm5vdGVzX2FuZF9hY3Rpdml0aWVzX19fYWN0aXZpdGllc1wiLCBcIm5vdGVzX2FuZF9hY3Rpdml0aWVzX19fbm90ZXNcIixcclxuICAgICAgICAgICAgICAgIFwidGFiXzFfX190YWJfMV9jb2x1bW5fMV9zZWN0aW9uXzFcIiwgXCJ0YWJfMV9fX3RhYl8xX2NvbHVtbl8yX3NlY3Rpb25fMVwiLCBcInRhYl8xX19fdGFiXzFfY29sdW1uXzNfc2VjdGlvbl8xXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ3JpZDogW1wiQ2hpbGRBY2NvdW50c1wiLCBcIkNvbnRhY3RzXCIsIFwiYWNjb3VudGFjdGl2aXRpZXNncmlkXCIsIFwiYWNjb3VudENvbnRhY3RzR3JpZFwiXSxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbjogW1xyXG4gICAgICAgICAgICAgICAgXCJhY2NvdW50X2FkeF9pbnZpdGVyZWRlbXB0aW9uc1wiLCBcImFjY291bnRfYWR4X3BvcnRhbGNvbW1lbnRzXCIsIFwiQWNjb3VudF9BcHBvaW50bWVudHNcIixcclxuICAgICAgICAgICAgICAgIFwiYWNjb3VudF9EZWxldGVkSXRlbVJlZmVyZW5jZXNcIiwgXCJBY2NvdW50X0VtYWlsX0VtYWlsU2VuZGVyXCIsIFwiQWNjb3VudF9FbWFpbF9TZW5kZXJzQWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJBY2NvdW50X0VtYWlsc1wiLCBcImFjY291bnRfcGFyZW50X2FjY291bnRcIiwgXCJBY2NvdW50X1Bob25lY2FsbHNcIiwgXCJBY2NvdW50X1Rhc2tzXCIsXHJcbiAgICAgICAgICAgICAgICBcImFkeF9pbnZpdGF0aW9uX2Fzc2lnbnRvYWNjb3VudFwiLCBcImNvbnRhY3RfY3VzdG9tZXJfYWNjb3VudHNcIiwgXCJtc2FfYWNjb3VudF9tYW5hZ2luZ3BhcnRuZXJcIixcclxuICAgICAgICAgICAgICAgIFwibXNhX2NvbnRhY3RfbWFuYWdpbmdwYXJ0bmVyXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcXVpY2s6IFtcImNvbnRhY3RxdWlja2Zvcm1fX19FTWFpbEFkZHJlc3MxXCIsIFwiY29udGFjdHF1aWNrZm9ybV9fX1RlbGVwaG9uZTFcIl1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gTG9hZEZvcm1WMjxJQWNjb3VudEZvcm1Cb2R5LCBJQWNjb3VudEZvcm1IZWFkZXIsIElBY2NvdW50Rm9ybVRhYnMsIElBY2NvdW50Rm9ybUdyaWQsIElBY2NvdW50Rm9ybU5hdmlnYXRpb24sIElBY2NvdW50Rm9ybVF1aWNrRm9ybT4oXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbkNvbnRleHQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUsXHJcbiAgICAgICAgICAgIGZvcm1Db25maWdcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLkV4ZWN1dGlvbkNvbnRleHQgPSBmb3JtLkV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5Cb2R5ID0gZm9ybS5Cb2R5O1xyXG4gICAgICAgIHRoaXMuSGVhZGVyID0gZm9ybS5IZWFkZXI7XHJcbiAgICAgICAgdGhpcy5UYWIgPSBmb3JtLlRhYjtcclxuICAgICAgICB0aGlzLkdyaWQgPSBmb3JtLkdyaWQ7XHJcbiAgICAgICAgdGhpcy5OYXZpZ2F0aW9uID0gZm9ybS5OYXZpZ2F0aW9uO1xyXG4gICAgICAgIHRoaXMuUXVpY2tGb3JtID0gZm9ybS5RdWlja0Zvcm07XHJcbiAgICAgICAgdGhpcy5Gb3JtSWQgPSBmb3JtLkZvcm1JZDtcclxuICAgICAgICB0aGlzLkZvcm1MYWJlbCA9IGZvcm0uRm9ybUxhYmVsO1xyXG4gICAgICAgIHRoaXMuRm9ybVR5cGUgPSBmb3JtLkZvcm1UeXBlO1xyXG4gICAgICAgIHRoaXMuRW50aXR5SWQgPSBmb3JtLkVudGl0eUlkO1xyXG4gICAgICAgIHRoaXMuRW50aXR5TmFtZSA9IGZvcm0uRW50aXR5TmFtZTtcclxuICAgICAgICB0aGlzLkRhdGFJc0RpcnR5ID0gZm9ybS5EYXRhSXNEaXJ0eTtcclxuICAgICAgICB0aGlzLkRhdGFJc1ZhbGlkID0gZm9ybS5EYXRhSXNWYWxpZDtcclxuICAgICAgICB0aGlzLlNhdmUgPSBmb3JtLlNhdmU7XHJcbiAgICAgICAgdGhpcy5SZWZyZXNoID0gZm9ybS5SZWZyZXNoO1xyXG4gICAgICAgIHRoaXMuQ2xvc2UgPSBmb3JtLkNsb3NlO1xyXG4gICAgICAgIHRoaXMuU2V0Rm9ybU5vdGlmaWNhdGlvbiA9IGZvcm0uU2V0Rm9ybU5vdGlmaWNhdGlvbjtcclxuICAgICAgICB0aGlzLkNsZWFyRm9ybU5vdGlmaWNhdGlvbiA9IGZvcm0uQ2xlYXJGb3JtTm90aWZpY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuUmVmcmVzaFJpYmJvbiA9IGZvcm0uUmVmcmVzaFJpYmJvbjtcclxuICAgICAgICB0aGlzLlVpQWRkTG9hZGVkID0gZm9ybS5VaUFkZExvYWRlZDtcclxuICAgICAgICB0aGlzLlVpUmVtb3ZlTG9hZGVkID0gZm9ybS5VaVJlbW92ZUxvYWRlZDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBPcHRpb25TZXQgLSBDXHUwMEUxYyBnaVx1MDBFMSB0clx1MUVDQiBPcHRpb25TZXQgY2hvIEFjY291bnQgZW50aXR5XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgT3B0aW9uU2V0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQWNjb3VudCB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEFjY291bnRDYXRlZ29yeUNvZGUgPSB7XHJcbiAgICAgICAgICAgIFByZWZlcnJlZF9DdXN0b21lcjogMSxcclxuICAgICAgICAgICAgU3RhbmRhcmQ6IDJcclxuICAgICAgICB9IGFzIGNvbnN0O1xyXG5cclxuICAgICAgICBleHBvcnQgY29uc3QgSW5kdXN0cnlDb2RlID0ge1xyXG4gICAgICAgICAgICBBY2NvdW50aW5nOiAxLFxyXG4gICAgICAgICAgICBBZ3JpY3VsdHVyZV9hbmRfTm9uX3BldHJvbF9OYXR1cmFsX1Jlc291cmNlX0V4dHJhY3Rpb246IDIsXHJcbiAgICAgICAgICAgIEJyb2FkY2FzdGluZ19QcmludGluZ19hbmRfUHVibGlzaGluZzogMyxcclxuICAgICAgICAgICAgQnJva2VyczogNCxcclxuICAgICAgICAgICAgQnVpbGRpbmdfU3VwcGx5X1JldGFpbDogNSxcclxuICAgICAgICAgICAgQnVzaW5lc3NfU2VydmljZXM6IDYsXHJcbiAgICAgICAgICAgIENvbnN1bHRpbmc6IDcsXHJcbiAgICAgICAgICAgIENvbnN1bWVyX1NlcnZpY2VzOiA4LFxyXG4gICAgICAgICAgICBEZXNpZ25fRGlyZWN0aW9uX2FuZF9DcmVhdGl2ZV9NYW5hZ2VtZW50OiA5LFxyXG4gICAgICAgICAgICBEaXN0cmlidXRvcnNfRGlzcGF0Y2hlcnNfYW5kX1Byb2Nlc3NvcnM6IDEwLFxyXG4gICAgICAgICAgICBEb2N0b3JzX09mZmljZXNfYW5kX0NsaW5pY3M6IDExLFxyXG4gICAgICAgICAgICBEdXJhYmxlX01hbnVmYWN0dXJpbmc6IDEyLFxyXG4gICAgICAgICAgICBFYXRpbmdfYW5kX0RyaW5raW5nX1BsYWNlczogMTMsXHJcbiAgICAgICAgICAgIEVudGVydGFpbm1lbnRfUmV0YWlsOiAxNCxcclxuICAgICAgICAgICAgRXF1aXBtZW50X1JlbnRhbF9hbmRfTGVhc2luZzogMTUsXHJcbiAgICAgICAgICAgIEZpbmFuY2lhbDogMTYsXHJcbiAgICAgICAgICAgIEZvb2RfYW5kX1RvYmFjY29fUHJvY2Vzc2luZzogMTcsXHJcbiAgICAgICAgICAgIEluYm91bmRfQ2FwaXRhbF9JbnRlbnNpdmVfUHJvY2Vzc2luZzogMTgsXHJcbiAgICAgICAgICAgIEluYm91bmRfUmVwYWlyX2FuZF9TZXJ2aWNlczogMTksXHJcbiAgICAgICAgICAgIEluc3VyYW5jZTogMjAsXHJcbiAgICAgICAgICAgIExlZ2FsX1NlcnZpY2VzOiAyMSxcclxuICAgICAgICAgICAgTm9uX0R1cmFibGVfTWVyY2hhbmRpc2VfUmV0YWlsOiAyMixcclxuICAgICAgICAgICAgT3V0Ym91bmRfQ29uc3VtZXJfU2VydmljZTogMjMsXHJcbiAgICAgICAgICAgIFBldHJvY2hlbWljYWxfRXh0cmFjdGlvbl9hbmRfRGlzdHJpYnV0aW9uOiAyNCxcclxuICAgICAgICAgICAgU2VydmljZV9SZXRhaWw6IDI1LFxyXG4gICAgICAgICAgICBTSUdfQWZmaWxpYXRpb25zOiAyNixcclxuICAgICAgICAgICAgU29jaWFsX1NlcnZpY2VzOiAyNyxcclxuICAgICAgICAgICAgU3BlY2lhbF9PdXRib3VuZF9UcmFkZV9Db250cmFjdG9yczogMjgsXHJcbiAgICAgICAgICAgIFNwZWNpYWx0eV9SZWFsdHk6IDI5LFxyXG4gICAgICAgICAgICBUcmFuc3BvcnRhdGlvbjogMzAsXHJcbiAgICAgICAgICAgIFV0aWxpdHlfQ3JlYXRpb25fYW5kX0Rpc3RyaWJ1dGlvbjogMzEsXHJcbiAgICAgICAgICAgIFZlaGljbGVfUmV0YWlsOiAzMixcclxuICAgICAgICAgICAgV2hvbGVzYWxlOiAzM1xyXG4gICAgICAgIH0gYXMgY29uc3Q7XHJcblxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBPd25lcnNoaXBDb2RlID0ge1xyXG4gICAgICAgICAgICBPdGhlcjogNCxcclxuICAgICAgICAgICAgUHJpdmF0ZTogMixcclxuICAgICAgICAgICAgUHVibGljOiAxLFxyXG4gICAgICAgICAgICBTdWJzaWRpYXJ5OiAzXHJcbiAgICAgICAgfSBhcyBjb25zdDtcclxuXHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFBheW1lbnRUZXJtc0NvZGUgPSB7XHJcbiAgICAgICAgICAgIF8yXzEwX05ldF8zMDogMixcclxuICAgICAgICAgICAgTmV0XzMwOiAxLFxyXG4gICAgICAgICAgICBOZXRfNDU6IDMsXHJcbiAgICAgICAgICAgIE5ldF82MDogNFxyXG4gICAgICAgIH0gYXMgY29uc3Q7XHJcblxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBQcmVmZXJyZWRDb250YWN0TWV0aG9kQ29kZSA9IHtcclxuICAgICAgICAgICAgQW55OiAxLFxyXG4gICAgICAgICAgICBFbWFpbDogMixcclxuICAgICAgICAgICAgRmF4OiA0LFxyXG4gICAgICAgICAgICBNYWlsOiA1LFxyXG4gICAgICAgICAgICBQaG9uZTogM1xyXG4gICAgICAgIH0gYXMgY29uc3Q7XHJcblxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTdGF0ZUNvZGUgPSB7XHJcbiAgICAgICAgICAgIEFjdGl2ZTogMCxcclxuICAgICAgICAgICAgSW5hY3RpdmU6IDFcclxuICAgICAgICB9IGFzIGNvbnN0O1xyXG5cclxuICAgICAgICBleHBvcnQgY29uc3QgU3RhdHVzQ29kZSA9IHtcclxuICAgICAgICAgICAgQWN0aXZlOiAxLFxyXG4gICAgICAgICAgICBJbmFjdGl2ZTogMlxyXG4gICAgICAgIH0gYXMgY29uc3Q7XHJcbiAgICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ2tQQSxXQUFTLE9BQVUsS0FBVSxNQUFjLFVBQXlCO0FBQ2hFLFdBQU8sZUFBZSxLQUFLLE1BQU07QUFBQSxNQUM3QixLQUFLO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0w7QUFFQSxXQUFTLGFBQWdCLEtBQVUsTUFBYyxVQUFtQixVQUFvQztBQUNwRyxXQUFPLGVBQWUsS0FBSyxNQUFNO0FBQUEs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
