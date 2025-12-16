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
  ((OptionSet2) => {
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
    })(Account = OptionSet2.Account || (OptionSet2.Account = {}));
  })(OptionSet || (OptionSet = {}));

  // Account.ts
  var formAccount = (function() {
    "use strict";
    let form;
    async function onLoad(executionContext) {
      form = new AccountForm(executionContext);
      registerEvents();
      form.UiAddLoaded(UiAddLoaded);
    }
    function registerEvents() {
      if (form.ExecutionContext.IsInitialLoad()) {
        form.Body.AccountNumber.AddOnChange(onAccountNumberChange);
        form.Body.Name.AddOnChange(onNameChange);
        form.Body.PrimaryContactId.AddPreSearch(onPrimaryContactIdPreSearch);
      }
    }
    async function UiAddLoaded(executionContext) {
      const accountNumber = form.Body.AccountNumber.Value;
      console.log("Account Number:", accountNumber);
      const name = form.Body.Name.Value;
      console.log("Name:", name);
      const revenue = form.Body.Revenue.Value;
      console.log("Revenue:", revenue);
      const creditOnHold = form.Body.CreditOnHold.Value;
      console.log("Credit On Hold:", creditOnHold);
      const industryCode = form.Body.IndustryCode.Value;
      console.log("Industry Code:", industryCode);
      if (industryCode === OptionSet.Account.IndustryCode.Consulting) {
        console.log("This is a Consulting account!");
      }
      const primaryContact = form.Body.PrimaryContactId.Value;
      if (primaryContact && primaryContact.length > 0) {
        console.log("Primary Contact ID:", primaryContact[0].id);
        console.log("Primary Contact Name:", primaryContact[0].name);
        console.log("Primary Contact Entity:", primaryContact[0].entityType);
      }
      if (form.FormType === 1) {
        console.log("This is a Create form");
      } else if (form.FormType === 2) {
        console.log("This is an Update form");
      }
      form.SetFormNotification("Welcome to Account form!", "INFO", "welcomeNotification");
      setTimeout(() => {
        form.ClearFormNotification("welcomeNotification");
      }, 5e3);
    }
    function onAccountNumberChange(executionContext) {
      const accountNumber = form.Body.AccountNumber.Value;
      if (accountNumber && accountNumber.length < 5) {
        form.Body.AccountNumber.SetNotification("Account Number must be at least 5 characters", "accountNumberValidation");
        form.Body.AccountNumber.SetIsValid(false, "Account Number is too short");
      } else {
        form.Body.AccountNumber.ClearNotification("accountNumberValidation");
        form.Body.AccountNumber.SetIsValid(true);
      }
    }
    function onNameChange(executionContext) {
      const name = form.Body.Name.Value;
      if (name) {
        const uppercaseName = name.toUpperCase();
        if (name !== uppercaseName) {
          form.Body.Name.Value = uppercaseName;
        }
      }
    }
    function onPrimaryContactIdPreSearch() {
      const parentAccountId = form.Body.ParentAccountId.Value;
      if (parentAccountId && parentAccountId.length > 0) {
        const filter = `
                <filter type="and">
                    <condition attribute="parentcustomerid" operator="eq" value="${parentAccountId[0].id}" />
                </filter>
            `;
        form.Body.PrimaryContactId.AddCustomFilter(filter, "contact");
      }
    }
    function setContactFieldsVisibility(visible) {
      form.Body.DoNotEMail.Visible = visible;
      form.Body.DoNotPhone.Visible = visible;
      form.Body.DoNotFax.Visible = visible;
      form.Body.DoNotBulkEMail.Visible = visible;
      form.Body.DoNotPostalMail.Visible = visible;
    }
    function setAddressFieldsDisabled(disabled) {
      form.Body.Address1_Line1.Disabled = disabled;
      form.Body.Address1_Line2.Disabled = disabled;
      form.Body.Address1_City.Disabled = disabled;
      form.Body.Address1_PostalCode.Disabled = disabled;
      form.Body.Address1_StateOrProvince.Disabled = disabled;
      form.Body.Address1_Country.Disabled = disabled;
    }
    function setRequiredFields() {
      form.Body.Name.RequiredLevel = "required";
      form.Body.Telephone1.RequiredLevel = "recommended";
      form.Body.EMailAddress1.RequiredLevel = "recommended";
    }
    function toggleDetailsTab() {
      const isVisible = form.Tab.DETAILS_TAB.Visible;
      form.Tab.DETAILS_TAB.Visible = !isVisible;
      if (form.Tab.DETAILS_TAB.DisplayState === "expanded") {
        form.Tab.DETAILS_TAB.DisplayState = "collapsed";
      } else {
        form.Tab.DETAILS_TAB.DisplayState = "expanded";
      }
    }
    function refreshContactsGrid() {
      form.Grid.Contacts.Refresh();
      const totalRecords = form.Grid.Contacts.TotalRecordCount;
      console.log("Total Contacts:", totalRecords);
      if (totalRecords === 0) {
        form.Grid.Contacts.Visible = false;
      }
    }
    function setupNavigation() {
      form.Navigation.account_adx_inviteredemptions.Visible = false;
      form.Navigation.account_adx_portalcomments.Visible = false;
    }
    return {
      OnLoad: onLoad
    };
  })();
  window.formAccount = formAccount;
  var Account_default = formAccount;
  return __toCommonJS(Account_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vQWNjb3VudC50cyIsICIuLi9nZW5lcmF0b3IvZGV2a2l0LnRzIiwgIi4uL2dlbmVyYXRvci9BY2NvdW50LmZvcm0udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxyXG4gKiBBY2NvdW50IFR5cGVTY3JpcHQgLSBGaWxlIGNoXHUwMEVEbmggbVx1MDBFMCBkZXZlbG9wZXIgdmlcdTFFQkZ0IGNvZGVcclxuICogU1x1MUVFRCBkXHUxRUU1bmcgQWNjb3VudEZvcm0gbW9kdWxlIFx1MDExMVx1MUVDMyBjXHUwMEYzIEludGVsbGlTZW5zZSAoY2hcdTFFQTVtIHRoXHUxRUEzKSBcdTAxMTFcdTFFQTd5IFx1MDExMVx1MUVFN1xyXG4gKiBLSFx1MDBENE5HIGNcdTFFQTduIGZpbGUgLmQudHMgcmlcdTAwRUFuZyBuXHUxRUVGYSFcclxuICovXHJcblxyXG5pbXBvcnQgeyBBY2NvdW50Rm9ybSwgT3B0aW9uU2V0IH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQWNjb3VudCBGb3JtIEhhbmRsZXIgLSBWXHUwMEVEIGRcdTFFRTUgXHUwMTExXHUwMUExbiBnaVx1MUVBM25cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZm9ybUFjY291bnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLy8gS2hhaSBiXHUwMEUxbyBmb3JtIHZcdTFFREJpIGtpXHUxRUMzdSBBY2NvdW50Rm9ybSAtIFR5cGVTY3JpcHQgdFx1MUVGMSBcdTAxMTFcdTFFRDluZyBjXHUwMEYzIEludGVsbGlTZW5zZSFcclxuICAgIGxldCBmb3JtOiBBY2NvdW50Rm9ybTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uTG9hZCBoYW5kbGVyXHJcbiAgICAgKiBAcGFyYW0gZXhlY3V0aW9uQ29udGV4dCBFeGVjdXRpb24gY29udGV4dCB0XHUxRUVCIERhdGF2ZXJzZVxyXG4gICAgICovXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvbkxvYWQoZXhlY3V0aW9uQ29udGV4dDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy8gS2hcdTFFREZpIHRcdTFFQTFvIGZvcm0gLSBUeXBlU2NyaXB0IGJpXHUxRUJGdCBmb3JtIGxcdTAwRTAgQWNjb3VudEZvcm1cclxuICAgICAgICBmb3JtID0gbmV3IEFjY291bnRGb3JtKGV4ZWN1dGlvbkNvbnRleHQpO1xyXG5cclxuICAgICAgICByZWdpc3RlckV2ZW50cygpO1xyXG5cclxuICAgICAgICAvLyBUaFx1MDBFQW0gY2FsbGJhY2sga2hpIGZvcm0gbG9hZGVkIGhvXHUwMEUwbiB0b1x1MDBFMG5cclxuICAgICAgICBmb3JtLlVpQWRkTG9hZGVkKFVpQWRkTG9hZGVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGV2ZW50c1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGluaXRpYWwgbG9hZFxyXG4gICAgICAgIGlmIChmb3JtLkV4ZWN1dGlvbkNvbnRleHQuSXNJbml0aWFsTG9hZCgpKSB7XHJcbiAgICAgICAgICAgIC8vIFRoXHUwMEVBbSBjXHUwMEUxYyBldmVudCBoYW5kbGVycyBcdTFFREYgXHUwMTExXHUwMEUyeVxyXG5cclxuICAgICAgICAgICAgLy8gVlx1MDBFRCBkXHUxRUU1OiBBZGQgb25DaGFuZ2UgY2hvIEFjY291bnROdW1iZXJcclxuICAgICAgICAgICAgZm9ybS5Cb2R5LkFjY291bnROdW1iZXIuQWRkT25DaGFuZ2Uob25BY2NvdW50TnVtYmVyQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFZcdTAwRUQgZFx1MUVFNTogQWRkIG9uQ2hhbmdlIGNobyBOYW1lXHJcbiAgICAgICAgICAgIGZvcm0uQm9keS5OYW1lLkFkZE9uQ2hhbmdlKG9uTmFtZUNoYW5nZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBWXHUwMEVEIGRcdTFFRTU6IEFkZCBQcmVTZWFyY2ggY2hvIFByaW1hcnlDb250YWN0SWQgbG9va3VwXHJcbiAgICAgICAgICAgIGZvcm0uQm9keS5QcmltYXJ5Q29udGFjdElkLkFkZFByZVNlYXJjaChvblByaW1hcnlDb250YWN0SWRQcmVTZWFyY2gpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIE9OIExPQURcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHUwMTEwXHUwMUIwXHUxRUUzYyBnXHUxRUNEaSBraGkgVUkgXHUwMTExXHUwMEUzIGxvYWRlZCBob1x1MDBFMG4gdG9cdTAwRTBuXHJcbiAgICAgKiBAcGFyYW0gZXhlY3V0aW9uQ29udGV4dCBFeGVjdXRpb24gY29udGV4dFxyXG4gICAgICovXHJcbiAgICBhc3luYyBmdW5jdGlvbiBVaUFkZExvYWRlZChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvLyBWXHUwMEVEIGRcdTFFRTU6IExcdTFFQTV5IGdpXHUwMEUxIHRyXHUxRUNCIEFjY291bnROdW1iZXIgLSBUeXBlU2NyaXB0IGJpXHUxRUJGdCBcdTAxMTFcdTAwRTJ5IGxcdTAwRTAgc3RyaW5nIVxyXG4gICAgICAgIGNvbnN0IGFjY291bnROdW1iZXIgPSBmb3JtLkJvZHkuQWNjb3VudE51bWJlci5WYWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWNjb3VudCBOdW1iZXI6JywgYWNjb3VudE51bWJlcik7XHJcblxyXG4gICAgICAgIC8vIFZcdTAwRUQgZFx1MUVFNTogTFx1MUVBNXkgZ2lcdTAwRTEgdHJcdTFFQ0IgTmFtZSAtIFR5cGVTY3JpcHQgYmlcdTFFQkZ0IFx1MDExMVx1MDBFMnkgbFx1MDBFMCBzdHJpbmchXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGZvcm0uQm9keS5OYW1lLlZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOYW1lOicsIG5hbWUpO1xyXG5cclxuICAgICAgICAvLyBWXHUwMEVEIGRcdTFFRTU6IExcdTFFQTV5IGdpXHUwMEUxIHRyXHUxRUNCIFJldmVudWUgLSBUeXBlU2NyaXB0IGJpXHUxRUJGdCBcdTAxMTFcdTAwRTJ5IGxcdTAwRTAgbnVtYmVyIVxyXG4gICAgICAgIGNvbnN0IHJldmVudWUgPSBmb3JtLkJvZHkuUmV2ZW51ZS5WYWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmV2ZW51ZTonLCByZXZlbnVlKTtcclxuXHJcbiAgICAgICAgLy8gVlx1MDBFRCBkXHUxRUU1OiBMXHUxRUE1eSBnaVx1MDBFMSB0clx1MUVDQiBDcmVkaXRPbkhvbGQgLSBUeXBlU2NyaXB0IGJpXHUxRUJGdCBcdTAxMTFcdTAwRTJ5IGxcdTAwRTAgYm9vbGVhbiFcclxuICAgICAgICBjb25zdCBjcmVkaXRPbkhvbGQgPSBmb3JtLkJvZHkuQ3JlZGl0T25Ib2xkLlZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVkaXQgT24gSG9sZDonLCBjcmVkaXRPbkhvbGQpO1xyXG5cclxuICAgICAgICAvLyBWXHUwMEVEIGRcdTFFRTU6IExcdTFFQTV5IGdpXHUwMEUxIHRyXHUxRUNCIEluZHVzdHJ5Q29kZSAtIFR5cGVTY3JpcHQgYmlcdTFFQkZ0IFx1MDExMVx1MDBFMnkgbFx1MDBFMCBudW1iZXIgKE9wdGlvblNldCkhXHJcbiAgICAgICAgY29uc3QgaW5kdXN0cnlDb2RlID0gZm9ybS5Cb2R5LkluZHVzdHJ5Q29kZS5WYWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW5kdXN0cnkgQ29kZTonLCBpbmR1c3RyeUNvZGUpO1xyXG5cclxuICAgICAgICAvLyBWXHUwMEVEIGRcdTFFRTU6IFNvIHNcdTAwRTFuaCB2XHUxRURCaSBPcHRpb25TZXQgdmFsdWVzXHJcbiAgICAgICAgaWYgKGluZHVzdHJ5Q29kZSA9PT0gT3B0aW9uU2V0LkFjY291bnQuSW5kdXN0cnlDb2RlLkNvbnN1bHRpbmcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSBDb25zdWx0aW5nIGFjY291bnQhJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBWXHUwMEVEIGRcdTFFRTU6IExcdTFFQTV5IFByaW1hcnlDb250YWN0SWQgbG9va3VwIHZhbHVlIC0gVHlwZVNjcmlwdCBiaVx1MUVCRnQgXHUwMTExXHUwMEUyeSBsXHUwMEUwIGFycmF5IVxyXG4gICAgICAgIGNvbnN0IHByaW1hcnlDb250YWN0ID0gZm9ybS5Cb2R5LlByaW1hcnlDb250YWN0SWQuVmFsdWU7XHJcbiAgICAgICAgaWYgKHByaW1hcnlDb250YWN0ICYmIHByaW1hcnlDb250YWN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1ByaW1hcnkgQ29udGFjdCBJRDonLCBwcmltYXJ5Q29udGFjdFswXS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcmltYXJ5IENvbnRhY3QgTmFtZTonLCBwcmltYXJ5Q29udGFjdFswXS5uYW1lKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1ByaW1hcnkgQ29udGFjdCBFbnRpdHk6JywgcHJpbWFyeUNvbnRhY3RbMF0uZW50aXR5VHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBWXHUwMEVEIGRcdTFFRTU6IEtpXHUxRUMzbSB0cmEgRm9ybSBUeXBlXHJcbiAgICAgICAgaWYgKGZvcm0uRm9ybVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSBDcmVhdGUgZm9ybScpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybS5Gb3JtVHlwZSA9PT0gMikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBhbiBVcGRhdGUgZm9ybScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVlx1MDBFRCBkXHUxRUU1OiBTZXQgZm9ybSBub3RpZmljYXRpb25cclxuICAgICAgICBmb3JtLlNldEZvcm1Ob3RpZmljYXRpb24oJ1dlbGNvbWUgdG8gQWNjb3VudCBmb3JtIScsICdJTkZPJywgJ3dlbGNvbWVOb3RpZmljYXRpb24nKTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgbm90aWZpY2F0aW9uIHNhdSA1IGdpXHUwMEUyeVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtLkNsZWFyRm9ybU5vdGlmaWNhdGlvbignd2VsY29tZU5vdGlmaWNhdGlvbicpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRU5EIE9OIExPQURcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gT04gQ0hBTkdFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uQ2hhbmdlIGhhbmRsZXIgY2hvIEFjY291bnROdW1iZXJcclxuICAgICAqIEBwYXJhbSBleGVjdXRpb25Db250ZXh0IEV4ZWN1dGlvbiBjb250ZXh0XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG9uQWNjb3VudE51bWJlckNoYW5nZShleGVjdXRpb25Db250ZXh0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50TnVtYmVyID0gZm9ybS5Cb2R5LkFjY291bnROdW1iZXIuVmFsdWU7XHJcblxyXG4gICAgICAgIC8vIFZcdTAwRUQgZFx1MUVFNTogVmFsaWRhdGUgQWNjb3VudE51bWJlciBmb3JtYXRcclxuICAgICAgICBpZiAoYWNjb3VudE51bWJlciAmJiBhY2NvdW50TnVtYmVyLmxlbmd0aCA8IDUpIHtcclxuICAgICAgICAgICAgZm9ybS5Cb2R5LkFjY291bnROdW1iZXIuU2V0Tm90aWZpY2F0aW9uKCdBY2NvdW50IE51bWJlciBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycycsICdhY2NvdW50TnVtYmVyVmFsaWRhdGlvbicpO1xyXG4gICAgICAgICAgICBmb3JtLkJvZHkuQWNjb3VudE51bWJlci5TZXRJc1ZhbGlkKGZhbHNlLCAnQWNjb3VudCBOdW1iZXIgaXMgdG9vIHNob3J0Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybS5Cb2R5LkFjY291bnROdW1iZXIuQ2xlYXJOb3RpZmljYXRpb24oJ2FjY291bnROdW1iZXJWYWxpZGF0aW9uJyk7XHJcbiAgICAgICAgICAgIGZvcm0uQm9keS5BY2NvdW50TnVtYmVyLlNldElzVmFsaWQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT25DaGFuZ2UgaGFuZGxlciBjaG8gTmFtZVxyXG4gICAgICogQHBhcmFtIGV4ZWN1dGlvbkNvbnRleHQgRXhlY3V0aW9uIGNvbnRleHRcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gb25OYW1lQ2hhbmdlKGV4ZWN1dGlvbkNvbnRleHQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBmb3JtLkJvZHkuTmFtZS5WYWx1ZTtcclxuXHJcbiAgICAgICAgLy8gVlx1MDBFRCBkXHUxRUU1OiBBdXRvLXVwcGVyY2FzZSBOYW1lXHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgLy8gS2hcdTAwRjRuZyBzZXQgbFx1MUVBMWkgblx1MUVCRnUgXHUwMTExXHUwMEUzIHVwcGVyY2FzZSBcdTAxMTFcdTFFQzMgdHJcdTAwRTFuaCBpbmZpbml0ZSBsb29wXHJcbiAgICAgICAgICAgIGNvbnN0IHVwcGVyY2FzZU5hbWUgPSBuYW1lLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lICE9PSB1cHBlcmNhc2VOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLkJvZHkuTmFtZS5WYWx1ZSA9IHVwcGVyY2FzZU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBFTkQgT04gQ0hBTkdFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIFBSRSBTRUFSQ0hcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJlU2VhcmNoIGhhbmRsZXIgY2hvIFByaW1hcnlDb250YWN0SWQgbG9va3VwXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG9uUHJpbWFyeUNvbnRhY3RJZFByZVNlYXJjaCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBWXHUwMEVEIGRcdTFFRTU6IFRoXHUwMEVBbSBjdXN0b20gZmlsdGVyIGNobyBQcmltYXJ5Q29udGFjdElkXHJcbiAgICAgICAgLy8gQ2hcdTFFQzkgaGlcdTFFQzNuIHRoXHUxRUNCIGNvbnRhY3RzIHRodVx1MUVEOWMgYWNjb3VudCBjaGEgKG5cdTFFQkZ1IGNcdTAwRjMpXHJcbiAgICAgICAgY29uc3QgcGFyZW50QWNjb3VudElkID0gZm9ybS5Cb2R5LlBhcmVudEFjY291bnRJZC5WYWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudEFjY291bnRJZCAmJiBwYXJlbnRBY2NvdW50SWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZmlsdGVyIHR5cGU9XCJhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Y29uZGl0aW9uIGF0dHJpYnV0ZT1cInBhcmVudGN1c3RvbWVyaWRcIiBvcGVyYXRvcj1cImVxXCIgdmFsdWU9XCIke3BhcmVudEFjY291bnRJZFswXS5pZH1cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIGZvcm0uQm9keS5QcmltYXJ5Q29udGFjdElkLkFkZEN1c3RvbUZpbHRlcihmaWx0ZXIsICdjb250YWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRU5EIFBSRSBTRUFSQ0hcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gT1RIRVJTIC0gQ1x1MDBFMWMgaGVscGVyIGZ1bmN0aW9uc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb246IFx1MUVBOG4vSGlcdTFFQzduIGNcdTAwRTFjIGZpZWxkcyBkXHUxRUYxYSB0clx1MDBFQW4gXHUwMTExaVx1MUVDMXUga2lcdTFFQzduXHJcbiAgICAgKiBAcGFyYW0gdmlzaWJsZSB0cnVlIFx1MDExMVx1MUVDMyBoaVx1MUVDN24sIGZhbHNlIFx1MDExMVx1MUVDMyBcdTFFQTluXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldENvbnRhY3RGaWVsZHNWaXNpYmlsaXR5KHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBmb3JtLkJvZHkuRG9Ob3RFTWFpbC5WaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICBmb3JtLkJvZHkuRG9Ob3RQaG9uZS5WaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICBmb3JtLkJvZHkuRG9Ob3RGYXguVmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgZm9ybS5Cb2R5LkRvTm90QnVsa0VNYWlsLlZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgIGZvcm0uQm9keS5Eb05vdFBvc3RhbE1haWwuVmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb246IExvY2svVW5sb2NrIGNcdTAwRTFjIGZpZWxkc1xyXG4gICAgICogQHBhcmFtIGRpc2FibGVkIHRydWUgXHUwMTExXHUxRUMzIGRpc2FibGUsIGZhbHNlIFx1MDExMVx1MUVDMyBlbmFibGVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gc2V0QWRkcmVzc0ZpZWxkc0Rpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgZm9ybS5Cb2R5LkFkZHJlc3MxX0xpbmUxLkRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICAgICAgZm9ybS5Cb2R5LkFkZHJlc3MxX0xpbmUyLkRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICAgICAgZm9ybS5Cb2R5LkFkZHJlc3MxX0NpdHkuRGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgICAgICBmb3JtLkJvZHkuQWRkcmVzczFfUG9zdGFsQ29kZS5EaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgICAgIGZvcm0uQm9keS5BZGRyZXNzMV9TdGF0ZU9yUHJvdmluY2UuRGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgICAgICBmb3JtLkJvZHkuQWRkcmVzczFfQ291bnRyeS5EaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVscGVyIGZ1bmN0aW9uOiBTZXQgcmVxdWlyZWQgZmllbGRzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldFJlcXVpcmVkRmllbGRzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvcm0uQm9keS5OYW1lLlJlcXVpcmVkTGV2ZWwgPSAncmVxdWlyZWQnO1xyXG4gICAgICAgIGZvcm0uQm9keS5UZWxlcGhvbmUxLlJlcXVpcmVkTGV2ZWwgPSAncmVjb21tZW5kZWQnO1xyXG4gICAgICAgIGZvcm0uQm9keS5FTWFpbEFkZHJlc3MxLlJlcXVpcmVkTGV2ZWwgPSAncmVjb21tZW5kZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVlx1MDBFRCBkXHUxRUU1OiBTXHUxRUVEIGRcdTFFRTVuZyBUYWJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlRGV0YWlsc1RhYigpOiB2b2lkIHtcclxuICAgICAgICAvLyBcdTFFQThuL0hpXHUxRUM3biB0YWIgREVUQUlMU19UQUJcclxuICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBmb3JtLlRhYi5ERVRBSUxTX1RBQi5WaXNpYmxlO1xyXG4gICAgICAgIGZvcm0uVGFiLkRFVEFJTFNfVEFCLlZpc2libGUgPSAhaXNWaXNpYmxlO1xyXG5cclxuICAgICAgICAvLyBFeHBhbmQvQ29sbGFwc2UgdGFiXHJcbiAgICAgICAgaWYgKGZvcm0uVGFiLkRFVEFJTFNfVEFCLkRpc3BsYXlTdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xyXG4gICAgICAgICAgICBmb3JtLlRhYi5ERVRBSUxTX1RBQi5EaXNwbGF5U3RhdGUgPSAnY29sbGFwc2VkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtLlRhYi5ERVRBSUxTX1RBQi5EaXNwbGF5U3RhdGUgPSAnZXhwYW5kZWQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZcdTAwRUQgZFx1MUVFNTogU1x1MUVFRCBkXHUxRUU1bmcgR3JpZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZWZyZXNoQ29udGFjdHNHcmlkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFJlZnJlc2ggZ3JpZCBDb250YWN0c1xyXG4gICAgICAgIGZvcm0uR3JpZC5Db250YWN0cy5SZWZyZXNoKCk7XHJcblxyXG4gICAgICAgIC8vIExcdTFFQTV5IHRvdGFsIHJlY29yZCBjb3VudFxyXG4gICAgICAgIGNvbnN0IHRvdGFsUmVjb3JkcyA9IGZvcm0uR3JpZC5Db250YWN0cy5Ub3RhbFJlY29yZENvdW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb3RhbCBDb250YWN0czonLCB0b3RhbFJlY29yZHMpO1xyXG5cclxuICAgICAgICAvLyBcdTFFQThuIGdyaWQgblx1MUVCRnUga2hcdTAwRjRuZyBjXHUwMEYzIHJlY29yZHNcclxuICAgICAgICBpZiAodG90YWxSZWNvcmRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZvcm0uR3JpZC5Db250YWN0cy5WaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVlx1MDBFRCBkXHUxRUU1OiBTXHUxRUVEIGRcdTFFRTVuZyBOYXZpZ2F0aW9uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldHVwTmF2aWdhdGlvbigpOiB2b2lkIHtcclxuICAgICAgICAvLyBcdTFFQThuIG5hdmlnYXRpb24gaXRlbXMga2hcdTAwRjRuZyBjXHUxRUE3biB0aGlcdTFFQkZ0XHJcbiAgICAgICAgZm9ybS5OYXZpZ2F0aW9uLmFjY291bnRfYWR4X2ludml0ZXJlZGVtcHRpb25zLlZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBmb3JtLk5hdmlnYXRpb24uYWNjb3VudF9hZHhfcG9ydGFsY29tbWVudHMuVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRU5EIE9USEVSU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gRXhwb3J0IGNcdTAwRTFjIGZ1bmN0aW9ucyBwdWJsaWNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgT25Mb2FkOiBvbkxvYWRcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG4vLyBFeHBvcnQgXHUwMTExXHUxRUMzIGNcdTAwRjMgdGhcdTFFQzMgc1x1MUVFRCBkXHUxRUU1bmcgdHJvbmcgRGF0YXZlcnNlXHJcbi8vIEB0cy1pZ25vcmUgLSBEYXRhdmVyc2Ugc1x1MUVFRCBkXHUxRUU1bmcgZ2xvYmFsIHNjb3BlXHJcbih3aW5kb3cgYXMgYW55KS5mb3JtQWNjb3VudCA9IGZvcm1BY2NvdW50O1xyXG5cclxuLy8gRXhwb3J0IGRlZmF1bHQgY2hvIG1vZHVsZVxyXG5leHBvcnQgZGVmYXVsdCBmb3JtQWNjb3VudDtcclxuIiwgIi8qKlxyXG4gKiBEZXZLaXQgVHlwZVNjcmlwdCBNb2R1bGVcclxuICogXHUwMTEwXHUwMEUyeSBsXHUwMEUwIHBoaVx1MDBFQW4gYlx1MUVBM24gVHlwZVNjcmlwdCBjXHUxRUU3YSBsaWIvZGV2a2l0LmpzXHJcbiAqIENoXHUxRUM5IGNvbnZlcnQgbVx1MUVEOXQgcGhcdTFFQTduIFx1MDExMVx1MUVDMyBjaFx1MUVFOW5nIG1pbmggcXVcdTAwRTEgdHJcdTAwRUNuaCBjb252ZXJ0IHRcdTFFRUIgSlMgc2FuZyBUUyBsXHUwMEUwIGtoXHUxRUEzIHRoaVxyXG4gKi9cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR2xvYmFsIFhybSBEZWNsYXJhdGlvbiAtIEtoYWkgYlx1MDBFMW8gWHJtIHRcdTFFRUIgRHluYW1pY3MgMzY1XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIEtoYWkgYlx1MDBFMW8gWHJtIGdsb2JhbCBcdTAxMTFcdTFFQzMgVHlwZVNjcmlwdCBraFx1MDBGNG5nIGJcdTAwRTFvIGxcdTFFRDdpXHJcbi8vIFRyb25nIHByb2R1Y3Rpb24sIG5cdTAwRUFuIGNcdTAwRTBpIEB0eXBlcy94cm0gXHUwMTExXHUxRUMzIGNcdTAwRjMgXHUwMTExXHUxRUE3eSBcdTAxMTFcdTFFRTcgdHlwZXNcclxuZGVjbGFyZSBjb25zdCBYcm06IGFueTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQmFzZSBDb250cm9sIEludGVyZmFjZXMgLSBcdTAxMTBcdTFFQ0JuaCBuZ2hcdTAxMjlhIGNcdTAwRTFjIGludGVyZmFjZXMgY2hvIGNvbnRyb2xzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIEZpZWxkIGNvbnRyb2wgY1x1MDFBMSBiXHUxRUEzbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGaWVsZENvbnRyb2wge1xyXG4gICAgLyoqIEdpXHUwMEUxIHRyXHUxRUNCIGNcdTFFRTdhIGZpZWxkICovXHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgLyoqIFRcdTAwRUFuIGF0dHJpYnV0ZSAqL1xyXG4gICAgcmVhZG9ubHkgQXR0cmlidXRlTmFtZTogc3RyaW5nO1xyXG4gICAgLyoqIFRcdTAwRUFuIGNvbnRyb2wgKi9cclxuICAgIHJlYWRvbmx5IENvbnRyb2xOYW1lOiBzdHJpbmc7XHJcbiAgICAvKiogS2lcdTFFQzN1IGF0dHJpYnV0ZSAqL1xyXG4gICAgcmVhZG9ubHkgQXR0cmlidXRlVHlwZTogc3RyaW5nO1xyXG4gICAgLyoqIEtpXHUxRUMzdSBjb250cm9sICovXHJcbiAgICByZWFkb25seSBDb250cm9sVHlwZTogc3RyaW5nO1xyXG4gICAgLyoqIEVuYWJsZS9EaXNhYmxlIGNvbnRyb2wgKi9cclxuICAgIERpc2FibGVkOiBib29sZWFuO1xyXG4gICAgLyoqIFZpc2libGUvSGlkZGVuIGNvbnRyb2wgKi9cclxuICAgIFZpc2libGU6IGJvb2xlYW47XHJcbiAgICAvKiogTGFiZWwgY1x1MUVFN2EgY29udHJvbCAqL1xyXG4gICAgTGFiZWw6IHN0cmluZztcclxuICAgIC8qKiBSZXF1aXJlZCBsZXZlbDogbm9uZSwgcmVxdWlyZWQsIHJlY29tbWVuZGVkICovXHJcbiAgICBSZXF1aXJlZExldmVsOiBzdHJpbmc7XHJcbiAgICAvKiogU3VibWl0IG1vZGU6IGFsd2F5cywgbmV2ZXIsIGRpcnR5ICovXHJcbiAgICBTdWJtaXRNb2RlOiBzdHJpbmc7XHJcbiAgICAvKiogQ2hlY2sgaWYgdmFsdWUgaXMgZGlydHkgKi9cclxuICAgIHJlYWRvbmx5IElzRGlydHk6IGJvb2xlYW47XHJcbiAgICAvKiogQ2hlY2sgaWYgdmFsdWUgaXMgdmFsaWQgKi9cclxuICAgIHJlYWRvbmx5IElzVmFsaWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqIEFkZCBvbkNoYW5nZSBldmVudCBoYW5kbGVyICovXHJcbiAgICBBZGRPbkNoYW5nZShjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICAvKiogUmVtb3ZlIG9uQ2hhbmdlIGV2ZW50IGhhbmRsZXIgKi9cclxuICAgIFJlbW92ZU9uQ2hhbmdlKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKTogdm9pZDtcclxuICAgIC8qKiBGaXJlIG9uQ2hhbmdlIGV2ZW50ICovXHJcbiAgICBGaXJlT25DaGFuZ2UoKTogdm9pZDtcclxuICAgIC8qKiBTZXQgZm9jdXMgdG8gY29udHJvbCAqL1xyXG4gICAgRm9jdXMoKTogdm9pZDtcclxuICAgIC8qKiBTZXQgbm90aWZpY2F0aW9uICovXHJcbiAgICBTZXROb3RpZmljYXRpb24obWVzc2FnZTogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIC8qKiBDbGVhciBub3RpZmljYXRpb24gKi9cclxuICAgIENsZWFyTm90aWZpY2F0aW9uKHVuaXF1ZUlkOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgLyoqIFNldCBjb250cm9sIHZhbGlkaXR5ICovXHJcbiAgICBTZXRJc1ZhbGlkKHZhbGlkOiBib29sZWFuLCBtZXNzYWdlPzogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gU3RyaW5nIGNvbnRyb2wgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3RyaW5nQ29udHJvbCBleHRlbmRzIElGaWVsZENvbnRyb2wge1xyXG4gICAgVmFsdWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICByZWFkb25seSBNYXhMZW5ndGg6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IEZvcm1hdDogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBOdW1iZXIvSW50ZWdlciBjb250cm9sICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU51bWJlckNvbnRyb2wgZXh0ZW5kcyBJRmllbGRDb250cm9sIHtcclxuICAgIFZhbHVlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgTWF4OiBudW1iZXI7XHJcbiAgICByZWFkb25seSBNaW46IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IFByZWNpc2lvbjogbnVtYmVyO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBCb29sZWFuIGNvbnRyb2wgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQm9vbGVhbkNvbnRyb2wgZXh0ZW5kcyBJRmllbGRDb250cm9sIHtcclxuICAgIFZhbHVlOiBib29sZWFuIHwgbnVsbDtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gT3B0aW9uU2V0IGNvbnRyb2wgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uU2V0Q29udHJvbCBleHRlbmRzIElGaWVsZENvbnRyb2wge1xyXG4gICAgVmFsdWU6IG51bWJlciB8IG51bGw7XHJcbiAgICByZWFkb25seSBPcHRpb25zOiB7IHRleHQ6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9W107XHJcbiAgICByZWFkb25seSBTZWxlY3RlZE9wdGlvbjogeyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfSB8IG51bGw7XHJcbiAgICByZWFkb25seSBUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgQWRkT3B0aW9uKHRleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlciwgaW5kZXg/OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgUmVtb3ZlT3B0aW9uKHZhbHVlOiBudW1iZXIpOiB2b2lkO1xyXG4gICAgQ2xlYXJPcHRpb25zKCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIExvb2t1cCBjb250cm9sICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxvb2t1cENvbnRyb2wgZXh0ZW5kcyBJRmllbGRDb250cm9sIHtcclxuICAgIFZhbHVlOiB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgZW50aXR5VHlwZTogc3RyaW5nIH1bXSB8IG51bGw7XHJcbiAgICByZWFkb25seSBFbnRpdHlUeXBlczogc3RyaW5nW107XHJcblxyXG4gICAgQWRkUHJlU2VhcmNoKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIFJlbW92ZVByZVNlYXJjaChjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBBZGRDdXN0b21GaWx0ZXIoZmlsdGVyOiBzdHJpbmcsIGVudGl0eUxvZ2ljYWxOYW1lPzogc3RyaW5nKTogdm9pZDtcclxuICAgIEFkZEN1c3RvbVZpZXcodmlld0lkOiBzdHJpbmcsIGVudGl0eU5hbWU6IHN0cmluZywgdmlld0Rpc3BsYXlOYW1lOiBzdHJpbmcsIGZldGNoWG1sOiBzdHJpbmcsIGxheW91dFhtbDogc3RyaW5nLCBpc0RlZmF1bHQ6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgRGVmYXVsdFZpZXc6IHN0cmluZztcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gRGF0ZSBjb250cm9sICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGVDb250cm9sIGV4dGVuZHMgSUZpZWxkQ29udHJvbCB7XHJcbiAgICBWYWx1ZTogRGF0ZSB8IG51bGw7XHJcbiAgICBTaG93VGltZTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gTW9uZXkgY29udHJvbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNb25leUNvbnRyb2wgZXh0ZW5kcyBJTnVtYmVyQ29udHJvbCB7XHJcbiAgICAvLyBNb25leSBrXHUxRUJGIHRoXHUxRUVCYSB0XHUxRUVCIE51bWJlclxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZvcm0gSW50ZXJmYWNlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBGb3JtICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm0ge1xyXG4gICAgLyoqIEZvcm0gSUQgKi9cclxuICAgIHJlYWRvbmx5IEZvcm1JZDogc3RyaW5nO1xyXG4gICAgLyoqIEZvcm0gTGFiZWwgKi9cclxuICAgIHJlYWRvbmx5IEZvcm1MYWJlbDogc3RyaW5nO1xyXG4gICAgLyoqIEZvcm0gVHlwZTogQ3JlYXRlICgxKSwgVXBkYXRlICgyKSwgUmVhZE9ubHkgKDMpLCBEaXNhYmxlZCAoNCksIFF1aWNrQ3JlYXRlICg1KSwgQnVsa0VkaXQgKDYpICovXHJcbiAgICByZWFkb25seSBGb3JtVHlwZTogbnVtYmVyO1xyXG4gICAgLyoqIEVudGl0eSBJRCAqL1xyXG4gICAgcmVhZG9ubHkgRW50aXR5SWQ6IHN0cmluZztcclxuICAgIC8qKiBFbnRpdHkgTmFtZSAtIGxvZ2ljYWwgbmFtZSBjXHUxRUU3YSBlbnRpdHkgKi9cclxuICAgIHJlYWRvbmx5IEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIC8qKiBDaGVjayBpZiBmb3JtIGRhdGEgaXMgZGlydHkgKi9cclxuICAgIHJlYWRvbmx5IERhdGFJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgLyoqIENoZWNrIGlmIGZvcm0gZGF0YSBpcyB2YWxpZCAqL1xyXG4gICAgcmVhZG9ubHkgRGF0YUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICAvKiogUHJpbWFyeSBhdHRyaWJ1dGUgdmFsdWUgKi9cclxuICAgIHJlYWRvbmx5IFByaW1hcnlBdHRyaWJ1dGVWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKiBTYXZlIHRoZSBmb3JtICovXHJcbiAgICBTYXZlKHNhdmVPcHRpb25zPzogeyBzYXZlTW9kZTogbnVtYmVyIH0pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqIFJlZnJlc2ggZm9ybSBkYXRhICovXHJcbiAgICBSZWZyZXNoKHNhdmU/OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKiBDbG9zZSB0aGUgZm9ybSAqL1xyXG4gICAgQ2xvc2UoKTogdm9pZDtcclxuICAgIC8qKiBTZXQgZm9ybSBub3RpZmljYXRpb24gKi9cclxuICAgIFNldEZvcm1Ob3RpZmljYXRpb24obWVzc2FnZTogc3RyaW5nLCBsZXZlbDogXCJFUlJPUlwiIHwgXCJXQVJOSU5HXCIgfCBcIklORk9cIiwgdW5pcXVlSWQ6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAvKiogQ2xlYXIgZm9ybSBub3RpZmljYXRpb24gKi9cclxuICAgIENsZWFyRm9ybU5vdGlmaWNhdGlvbih1bmlxdWVJZDogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIC8qKiBSZWZyZXNoIHJpYmJvbiAqL1xyXG4gICAgUmVmcmVzaFJpYmJvbihyZWZyZXNoQWxsPzogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIFRhYiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUYWIge1xyXG4gICAgLyoqIFRhYiBOYW1lICovXHJcbiAgICByZWFkb25seSBOYW1lOiBzdHJpbmc7XHJcbiAgICAvKiogVGFiIExhYmVsICovXHJcbiAgICBMYWJlbDogc3RyaW5nO1xyXG4gICAgLyoqIFRhYiBWaXNpYmxlICovXHJcbiAgICBWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgLyoqIFRhYiBEaXNwbGF5IFN0YXRlICovXHJcbiAgICBEaXNwbGF5U3RhdGU6IFwiZXhwYW5kZWRcIiB8IFwiY29sbGFwc2VkXCI7XHJcblxyXG4gICAgLyoqIEFkZCB0YWIgc3RhdGUgY2hhbmdlIGhhbmRsZXIgKi9cclxuICAgIEFkZFRhYlN0YXRlQ2hhbmdlKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKTogdm9pZDtcclxuICAgIC8qKiBSZW1vdmUgdGFiIHN0YXRlIGNoYW5nZSBoYW5kbGVyICovXHJcbiAgICBSZW1vdmVUYWJTdGF0ZUNoYW5nZShjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICAvKiogU2V0IGZvY3VzIHRvIHRhYiAqL1xyXG4gICAgRm9jdXMoKTogdm9pZDtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gU2VjdGlvbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTZWN0aW9uIHtcclxuICAgIC8qKiBTZWN0aW9uIE5hbWUgKi9cclxuICAgIHJlYWRvbmx5IE5hbWU6IHN0cmluZztcclxuICAgIC8qKiBTZWN0aW9uIExhYmVsICovXHJcbiAgICBMYWJlbDogc3RyaW5nO1xyXG4gICAgLyoqIFNlY3Rpb24gVmlzaWJsZSAqL1xyXG4gICAgVmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gTmF2aWdhdGlvbiBJdGVtICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hdmlnYXRpb25JdGVtIHtcclxuICAgIC8qKiBOYXZpZ2F0aW9uIElEICovXHJcbiAgICByZWFkb25seSBJZDogc3RyaW5nO1xyXG4gICAgLyoqIE5hdmlnYXRpb24gTGFiZWwgKi9cclxuICAgIExhYmVsOiBzdHJpbmc7XHJcbiAgICAvKiogTmF2aWdhdGlvbiBWaXNpYmxlICovXHJcbiAgICBWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIC8qKiBTZXQgZm9jdXMgdG8gbmF2aWdhdGlvbiBpdGVtICovXHJcbiAgICBGb2N1cygpOiB2b2lkO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBHcmlkICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWQge1xyXG4gICAgLyoqIEdyaWQgRW50aXR5IE5hbWUgKi9cclxuICAgIHJlYWRvbmx5IEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIC8qKiBHcmlkIEZldGNoWG1sICovXHJcbiAgICByZWFkb25seSBGZXRjaFhtbDogc3RyaW5nO1xyXG4gICAgLyoqIFRvdGFsIHJlY29yZCBjb3VudCAqL1xyXG4gICAgcmVhZG9ubHkgVG90YWxSZWNvcmRDb3VudDogbnVtYmVyO1xyXG4gICAgLyoqIEdyaWQgVmlzaWJsZSAqL1xyXG4gICAgVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICAvKiogQWRkIG9uTG9hZCBoYW5kbGVyICovXHJcbiAgICBBZGRPbkxvYWQoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgLyoqIFJlbW92ZSBvbkxvYWQgaGFuZGxlciAqL1xyXG4gICAgUmVtb3ZlT25Mb2FkKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKTogdm9pZDtcclxuICAgIC8qKiBSZWZyZXNoIGdyaWQgKi9cclxuICAgIFJlZnJlc2goKTogdm9pZDtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gRXhlY3V0aW9uIENvbnRleHQgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXhlY3V0aW9uQ29udGV4dCB7XHJcbiAgICAvKiogR2V0IGZvcm0gY29udGV4dCAqL1xyXG4gICAgZ2V0Rm9ybUNvbnRleHQoKTogYW55O1xyXG4gICAgLyoqIENoZWNrIGlmIHRoaXMgaXMgaW5pdGlhbCBsb2FkICovXHJcbiAgICBJc0luaXRpYWxMb2FkKCk6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSGVscGVyIEZ1bmN0aW9ucyAtIENcdTAwRTFjIGhcdTAwRTBtIGhlbHBlciBcdTAxMTFcdTFFQzMgbG9hZCBmb3JtXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIGdldFhybSgpOiB0eXBlb2YgWHJtIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93IGFzIGFueSkuWHJtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9PSAndW5kZWZpbmVkJyAmJiAocGFyZW50IGFzIGFueSkuWHJtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gKHBhcmVudCBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcignTm90IGZvdW5kIFhybSBpbiB0aGUgY3VycmVudCBjb250ZXh0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldHRlcjxUPihvYmo6IGFueSwgcHJvcDogc3RyaW5nLCBnZXR0ZXJGbjogKCkgPT4gVCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xyXG4gICAgICAgIGdldDogZ2V0dGVyRm4sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXR0ZXJTZXR0ZXI8VD4ob2JqOiBhbnksIHByb3A6IHN0cmluZywgZ2V0dGVyRm46ICgpID0+IFQsIHNldHRlckZuOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcclxuICAgICAgICBnZXQ6IGdldHRlckZuLFxyXG4gICAgICAgIHNldDogc2V0dGVyRm4sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZpZWxkIExvYWRpbmcgRnVuY3Rpb25cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gbG9hZEZpZWxkKGZvcm1Db250ZXh0OiBhbnksIGZpZWxkOiBhbnksIGF0dHJpYnV0ZTogYW55LCBjb250cm9sOiBhbnkpOiB2b2lkIHtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZScsICgpID0+IGNvbnRyb2w/LmdldEF0dHJpYnV0ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZU5hbWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGVUeXBlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRBdHRyaWJ1dGVUeXBlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQ29udHJvbE5hbWUnLCAoKSA9PiBjb250cm9sPy5nZXROYW1lKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQ29udHJvbFR5cGUnLCAoKSA9PiBjb250cm9sPy5nZXRDb250cm9sVHlwZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0Zvcm1hdCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0Rm9ybWF0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSXNEaXJ0eScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0SXNEaXJ0eSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0lzVmFsaWQnLCAoKSA9PiBhdHRyaWJ1dGU/LmlzVmFsaWQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdNYXgnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE1heCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ01heExlbmd0aCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TWF4TGVuZ3RoKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnTWluJywgKCkgPT4gYXR0cmlidXRlPy5nZXRNaW4oKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdPcHRpb25zJywgKCkgPT4gYXR0cmlidXRlPy5nZXRPcHRpb25zKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU2VsZWN0ZWRPcHRpb24nLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFNlbGVjdGVkT3B0aW9uKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnVGV4dCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0VGV4dCgpKTtcclxuXHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEaXNhYmxlZCcsICgpID0+IGNvbnRyb2w/LmdldERpc2FibGVkKCksICh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmIChmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDMgfHwgZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSA0KSByZXR1cm47XHJcbiAgICAgICAgY29udHJvbD8uc2V0RGlzYWJsZWQodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdMYWJlbCcsICgpID0+IGNvbnRyb2w/LmdldExhYmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGNvbnRyb2w/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdSZXF1aXJlZExldmVsJywgKCkgPT4gYXR0cmlidXRlPy5nZXRSZXF1aXJlZExldmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGF0dHJpYnV0ZT8uc2V0UmVxdWlyZWRMZXZlbCh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnU3VibWl0TW9kZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0U3VibWl0TW9kZSgpLCAodmFsdWU6IHN0cmluZykgPT4geyBhdHRyaWJ1dGU/LnNldFN1Ym1pdE1vZGUodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1ZhbHVlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRWYWx1ZSgpLCAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDMgfHwgZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSA0KSByZXR1cm47XHJcbiAgICAgICAgYXR0cmlidXRlPy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1Zpc2libGUnLCAoKSA9PiBjb250cm9sPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYm9vbGVhbikgPT4geyBjb250cm9sPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcblxyXG4gICAgZmllbGQuQWRkT25DaGFuZ2UgPSAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IGF0dHJpYnV0ZT8uYWRkT25DaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlT25DaGFuZ2UgPSAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IGF0dHJpYnV0ZT8ucmVtb3ZlT25DaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuRmlyZU9uQ2hhbmdlID0gKCkgPT4gYXR0cmlidXRlPy5maXJlT25DaGFuZ2UoKTtcclxuICAgIGZpZWxkLkZvY3VzID0gKCkgPT4gY29udHJvbD8uc2V0Rm9jdXMoKTtcclxuICAgIGZpZWxkLlNldE5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRyb2w/LnNldE5vdGlmaWNhdGlvbihtZXNzYWdlLCB1bmlxdWVJZCk7XHJcbiAgICBmaWVsZC5DbGVhck5vdGlmaWNhdGlvbiA9ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250cm9sPy5jbGVhck5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICBmaWVsZC5TZXRJc1ZhbGlkID0gKHZhbGlkOiBib29sZWFuLCBtZXNzYWdlPzogc3RyaW5nKSA9PiBhdHRyaWJ1dGU/LnNldElzVmFsaWQodmFsaWQsIG1lc3NhZ2UpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERldktpdCBNb2R1bGUgRXhwb3J0XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBMb2FkIEZvcm0gVjIgLSBIXHUwMEUwbSBjaFx1MDBFRG5oIFx1MDExMVx1MUVDMyBsb2FkIGZvcm0gdlx1MUVEQmkgY1x1MDBFMWMgZmllbGRzXHJcbiAqIEBwYXJhbSBleGVjdXRpb25Db250ZXh0IEV4ZWN1dGlvbiBjb250ZXh0IHRcdTFFRUIgZm9ybVxyXG4gKiBAcGFyYW0gZGVmYXVsdFdlYlJlc291cmNlTmFtZSBUXHUwMEVBbiB3ZWIgcmVzb3VyY2UgbVx1MUVCN2MgXHUwMTExXHUxRUNCbmhcclxuICogQHBhcmFtIGZvcm1Db25maWcgQ1x1MUVBNXUgaFx1MDBFQ25oIGZvcm0gYmFvIGdcdTFFRDNtIGJvZHksIGhlYWRlciwgdGFiLCBncmlkLCBuYXZpZ2F0aW9uLCBxdWlja1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRGb3JtVjI8VEJvZHksIFRIZWFkZXIsIFRUYWIsIFRHcmlkLCBUTmF2aWdhdGlvbiwgVFF1aWNrRm9ybT4oXHJcbiAgICBleGVjdXRpb25Db250ZXh0OiBhbnksXHJcbiAgICBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICBmb3JtQ29uZmlnOiB7XHJcbiAgICAgICAgYm9keT86IHN0cmluZ1tdO1xyXG4gICAgICAgIGhlYWRlcj86IHN0cmluZ1tdO1xyXG4gICAgICAgIHRhYj86IHN0cmluZ1tdO1xyXG4gICAgICAgIGdyaWQ/OiBzdHJpbmdbXTtcclxuICAgICAgICBuYXZpZ2F0aW9uPzogc3RyaW5nW107XHJcbiAgICAgICAgcXVpY2s/OiBzdHJpbmdbXTtcclxuICAgIH1cclxuKToge1xyXG4gICAgRXhlY3V0aW9uQ29udGV4dDogSUV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICBCb2R5OiBUQm9keTtcclxuICAgIEhlYWRlcjogVEhlYWRlcjtcclxuICAgIFRhYjogVFRhYjtcclxuICAgIEdyaWQ6IFRHcmlkO1xyXG4gICAgTmF2aWdhdGlvbjogVE5hdmlnYXRpb247XHJcbiAgICBRdWlja0Zvcm06IFRRdWlja0Zvcm07XHJcbiAgICBGb3JtSWQ6IHN0cmluZztcclxuICAgIEZvcm1MYWJlbDogc3RyaW5nO1xyXG4gICAgRm9ybVR5cGU6IG51bWJlcjtcclxuICAgIEVudGl0eUlkOiBzdHJpbmc7XHJcbiAgICBFbnRpdHlOYW1lOiBzdHJpbmc7XHJcbiAgICBEYXRhSXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIERhdGFJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgU2F2ZTogKHNhdmVPcHRpb25zPzogYW55KSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgUmVmcmVzaDogKHNhdmU/OiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgICBTZXRGb3JtTm90aWZpY2F0aW9uOiAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgQ2xlYXJGb3JtTm90aWZpY2F0aW9uOiAodW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIFJlZnJlc2hSaWJib246IChyZWZyZXNoQWxsPzogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIFVpQWRkTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBVaVJlbW92ZUxvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG59IHtcclxuICAgIGNvbnN0IGZvcm1Db250ZXh0ID0gZXhlY3V0aW9uQ29udGV4dD8uZ2V0Rm9ybUNvbnRleHQ/LigpID8/IGV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICBjb25zdCBjb250ZXh0RGF0YSA9IGZvcm1Db250ZXh0Py5kYXRhO1xyXG4gICAgY29uc3QgY29udGV4dERhdGFFbnRpdHkgPSBmb3JtQ29udGV4dD8uZGF0YT8uZW50aXR5O1xyXG4gICAgY29uc3QgY29udGV4dFVpID0gZm9ybUNvbnRleHQ/LnVpO1xyXG4gICAgY29uc3QgY29udGV4dFVpRm9ybVNlbGVjdG9yID0gZm9ybUNvbnRleHQ/LnVpPy5mb3JtU2VsZWN0b3I7XHJcblxyXG4gICAgLy8gQnVpbGQgQm9keVxyXG4gICAgY29uc3QgYm9keTogYW55ID0ge307XHJcbiAgICBpZiAoZm9ybUNvbmZpZy5ib2R5KSB7XHJcbiAgICAgICAgZm9ybUNvbmZpZy5ib2R5LmZvckVhY2goZmllbGROYW1lID0+IHtcclxuICAgICAgICAgICAgYm9keVtmaWVsZE5hbWVdID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2ljYWxOYW1lID0gZmllbGROYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChsb2dpY2FsTmFtZSkgPz8gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZmllbGROYW1lKTtcclxuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IGZvcm1Db250ZXh0Py5nZXRBdHRyaWJ1dGUobG9naWNhbE5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZSAmJiBjb250cm9sPy5nZXRBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSA9IGNvbnRyb2wuZ2V0QXR0cmlidXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9hZEZpZWxkKGZvcm1Db250ZXh0LCBib2R5W2ZpZWxkTmFtZV0sIGF0dHJpYnV0ZSwgY29udHJvbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgSGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXI6IGFueSA9IHt9O1xyXG4gICAgaWYgKGZvcm1Db25maWcuaGVhZGVyKSB7XHJcbiAgICAgICAgZm9ybUNvbmZpZy5oZWFkZXIuZm9yRWFjaChmaWVsZE5hbWUgPT4ge1xyXG4gICAgICAgICAgICBoZWFkZXJbZmllbGROYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBsb2dpY2FsTmFtZSA9IChcImhlYWRlcl9cIiArIGZpZWxkTmFtZSkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGxvZ2ljYWxOYW1lKSA/PyBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gZm9ybUNvbnRleHQ/LmdldEF0dHJpYnV0ZShmaWVsZE5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlICYmIGNvbnRyb2w/LmdldEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2FkRmllbGQoZm9ybUNvbnRleHQsIGhlYWRlcltmaWVsZE5hbWVdLCBhdHRyaWJ1dGUsIGNvbnRyb2wpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIFRhYnMgKHNpbXBsaWZpZWQpXHJcbiAgICBjb25zdCB0YWI6IGFueSA9IHt9O1xyXG4gICAgaWYgKGZvcm1Db25maWcudGFiKSB7XHJcbiAgICAgICAgZm9ybUNvbmZpZy50YWIuZm9yRWFjaCh0YWJDb25maWcgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IHRhYkNvbmZpZy5zcGxpdChcIl9fX1wiKTtcclxuICAgICAgICAgICAgY29uc3QgdGFiTmFtZSA9IHBhcnRzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uTmFtZSA9IHBhcnRzLmxlbmd0aCA+IDEgPyBwYXJ0c1sxXSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRhYlt0YWJOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGFiW3RhYk5hbWVdID0geyBTZWN0aW9uOiB7fSB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFiT2JqZWN0ID0gZm9ybUNvbnRleHQ/LnVpPy50YWJzPy5nZXQodGFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBnZXR0ZXIodGFiW3RhYk5hbWVdLCAnTmFtZScsICgpID0+IHRhYk9iamVjdD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIGdldHRlclNldHRlcih0YWJbdGFiTmFtZV0sICdMYWJlbCcsICgpID0+IHRhYk9iamVjdD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgdGFiT2JqZWN0Py5zZXRMYWJlbCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYlt0YWJOYW1lXSwgJ1Zpc2libGUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IHRhYk9iamVjdD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYlt0YWJOYW1lXSwgJ0Rpc3BsYXlTdGF0ZScsICgpID0+IHRhYk9iamVjdD8uZ2V0RGlzcGxheVN0YXRlKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IHRhYk9iamVjdD8uc2V0RGlzcGxheVN0YXRlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB0YWJbdGFiTmFtZV0uQWRkVGFiU3RhdGVDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gdGFiT2JqZWN0Py5hZGRUYWJTdGF0ZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB0YWJbdGFiTmFtZV0uUmVtb3ZlVGFiU3RhdGVDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gdGFiT2JqZWN0Py5yZW1vdmVUYWJTdGF0ZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB0YWJbdGFiTmFtZV0uRm9jdXMgPSAoKSA9PiB0YWJPYmplY3Q/LnNldEZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWN0aW9uTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFiT2JqZWN0ID0gZm9ybUNvbnRleHQ/LnVpPy50YWJzPy5nZXQodGFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uT2JqZWN0ID0gdGFiT2JqZWN0Py5zZWN0aW9ucz8uZ2V0KHNlY3Rpb25OYW1lKTtcclxuICAgICAgICAgICAgICAgIHRhYlt0YWJOYW1lXS5TZWN0aW9uW3NlY3Rpb25OYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyKHRhYlt0YWJOYW1lXS5TZWN0aW9uW3NlY3Rpb25OYW1lXSwgJ05hbWUnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXROYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYlt0YWJOYW1lXS5TZWN0aW9uW3NlY3Rpb25OYW1lXSwgJ0xhYmVsJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHNlY3Rpb25PYmplY3Q/LnNldExhYmVsKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICBnZXR0ZXJTZXR0ZXIodGFiW3RhYk5hbWVdLlNlY3Rpb25bc2VjdGlvbk5hbWVdLCAnVmlzaWJsZScsICgpID0+IHNlY3Rpb25PYmplY3Q/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiBzZWN0aW9uT2JqZWN0Py5zZXRWaXNpYmxlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWlsZCBHcmlkIChzaW1wbGlmaWVkKVxyXG4gICAgY29uc3QgZ3JpZDogYW55ID0ge307XHJcbiAgICBpZiAoZm9ybUNvbmZpZy5ncmlkKSB7XHJcbiAgICAgICAgZm9ybUNvbmZpZy5ncmlkLmZvckVhY2goZ3JpZE5hbWUgPT4ge1xyXG4gICAgICAgICAgICBncmlkW2dyaWROYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBncmlkQ29udHJvbCA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGdyaWROYW1lKTtcclxuICAgICAgICAgICAgZ2V0dGVyKGdyaWRbZ3JpZE5hbWVdLCAnRW50aXR5TmFtZScsICgpID0+IGdyaWRDb250cm9sPy5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgICAgICAgICBnZXR0ZXIoZ3JpZFtncmlkTmFtZV0sICdGZXRjaFhtbCcsICgpID0+IGdyaWRDb250cm9sPy5nZXRGZXRjaFhtbCgpKTtcclxuICAgICAgICAgICAgZ2V0dGVyKGdyaWRbZ3JpZE5hbWVdLCAnVG90YWxSZWNvcmRDb3VudCcsICgpID0+IGdyaWRDb250cm9sPy5nZXRHcmlkKCk/LmdldFRvdGFsUmVjb3JkQ291bnQoKSk7XHJcbiAgICAgICAgICAgIGdldHRlclNldHRlcihncmlkW2dyaWROYW1lXSwgJ1Zpc2libGUnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgZ3JpZENvbnRyb2w/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICAgICAgZ3JpZFtncmlkTmFtZV0uQWRkT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdyaWRDb250cm9sPy5hZGRPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICBncmlkW2dyaWROYW1lXS5SZW1vdmVPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ3JpZENvbnRyb2w/LnJlbW92ZU9uTG9hZChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIGdyaWRbZ3JpZE5hbWVdLlJlZnJlc2ggPSAoKSA9PiBncmlkQ29udHJvbD8ucmVmcmVzaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIE5hdmlnYXRpb24gKHNpbXBsaWZpZWQpXHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uOiBhbnkgPSB7fTtcclxuICAgIGlmIChmb3JtQ29uZmlnLm5hdmlnYXRpb24pIHtcclxuICAgICAgICBmb3JtQ29uZmlnLm5hdmlnYXRpb24uZm9yRWFjaChuYXZOYW1lID0+IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbltuYXZOYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBuYXZJdGVtcyA9IGZvcm1Db250ZXh0Py51aT8ubmF2aWdhdGlvbj8uaXRlbXM7XHJcbiAgICAgICAgICAgIGxldCBuYXZpZ2F0aW9uSXRlbTogYW55ID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKG5hdkl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBuYXZJdGVtcy5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gbmF2SXRlbXMuZ2V0KGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtPy5nZXRJZCgpID09PSBuYXZOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25JdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdldHRlcihuYXZpZ2F0aW9uW25hdk5hbWVdLCAnSWQnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0SWQoKSk7XHJcbiAgICAgICAgICAgIGdldHRlclNldHRlcihuYXZpZ2F0aW9uW25hdk5hbWVdLCAnTGFiZWwnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBzdHJpbmcpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRMYWJlbCh2YWx1ZSkpO1xyXG4gICAgICAgICAgICBnZXR0ZXJTZXR0ZXIobmF2aWdhdGlvbltuYXZOYW1lXSwgJ1Zpc2libGUnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IG5hdmlnYXRpb25JdGVtPy5zZXRWaXNpYmxlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25bbmF2TmFtZV0uRm9jdXMgPSAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uc2V0Rm9jdXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWlsZCBRdWlja0Zvcm0gKHNpbXBsaWZpZWQpXHJcbiAgICBjb25zdCBxdWlja0Zvcm06IGFueSA9IHt9O1xyXG4gICAgaWYgKGZvcm1Db25maWcucXVpY2spIHtcclxuICAgICAgICBmb3JtQ29uZmlnLnF1aWNrLmZvckVhY2gocXVpY2tDb25maWcgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IHF1aWNrQ29uZmlnLnNwbGl0KFwiX19fXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBxdWlja0Zvcm1OYW1lID0gcGFydHNbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHBhcnRzLmxlbmd0aCA+IDEgPyBwYXJ0c1sxXSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXF1aWNrRm9ybVtxdWlja0Zvcm1OYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgcXVpY2tGb3JtW3F1aWNrRm9ybU5hbWVdID0geyBCb2R5OiB7fSB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVpY2sgPSBmb3JtQ29udGV4dD8udWk/LnF1aWNrRm9ybXM/LmdldChxdWlja0Zvcm1OYW1lKTtcclxuICAgICAgICAgICAgICAgIGdldHRlcihxdWlja0Zvcm1bcXVpY2tGb3JtTmFtZV0sICdDb250cm9sTmFtZScsICgpID0+IHF1aWNrPy5nZXROYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyKHF1aWNrRm9ybVtxdWlja0Zvcm1OYW1lXSwgJ0NvbnRyb2xUeXBlJywgKCkgPT4gcXVpY2s/LmdldENvbnRyb2xUeXBlKCkpO1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKHF1aWNrRm9ybVtxdWlja0Zvcm1OYW1lXSwgJ0Rpc2FibGVkJywgKCkgPT4gcXVpY2s/LmdldERpc2FibGVkKCksICh2YWx1ZTogYm9vbGVhbikgPT4geyBxdWljaz8uc2V0RGlzYWJsZWQodmFsdWUpOyB9KTtcclxuICAgICAgICAgICAgICAgIGdldHRlclNldHRlcihxdWlja0Zvcm1bcXVpY2tGb3JtTmFtZV0sICdMYWJlbCcsICgpID0+IHF1aWNrPy5nZXRMYWJlbCgpLCAodmFsdWU6IHN0cmluZykgPT4geyBxdWljaz8uc2V0TGFiZWwodmFsdWUpOyB9KTtcclxuICAgICAgICAgICAgICAgIGdldHRlclNldHRlcihxdWlja0Zvcm1bcXVpY2tGb3JtTmFtZV0sICdWaXNpYmxlJywgKCkgPT4gcXVpY2s/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IHF1aWNrPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBxdWlja0Zvcm1bcXVpY2tGb3JtTmFtZV0uSXNMb2FkZWQgPSAoKSA9PiBxdWljaz8uaXNMb2FkZWQoKTtcclxuICAgICAgICAgICAgICAgIHF1aWNrRm9ybVtxdWlja0Zvcm1OYW1lXS5SZWZyZXNoID0gKCkgPT4gcXVpY2s/LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIHF1aWNrRm9ybVtxdWlja0Zvcm1OYW1lXS5Gb2N1cyA9ICgpID0+IHF1aWNrPy5zZXRGb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBxdWlja0Zvcm1bcXVpY2tGb3JtTmFtZV0uQm9keVtmaWVsZE5hbWVdID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgRXhlY3V0aW9uQ29udGV4dCB3cmFwcGVyXHJcbiAgICBjb25zdCBleGVjdXRpb25Db250ZXh0V3JhcHBlcjogSUV4ZWN1dGlvbkNvbnRleHQgPSB7XHJcbiAgICAgICAgZ2V0Rm9ybUNvbnRleHQ6ICgpID0+IGZvcm1Db250ZXh0LFxyXG4gICAgICAgIElzSW5pdGlhbExvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBpbml0aWFsIGxvYWQgYmFzZWQgb24gZm9ybSB0eXBlXHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0VWk/LmdldEZvcm1UeXBlKCkgPT09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEV4ZWN1dGlvbkNvbnRleHQ6IGV4ZWN1dGlvbkNvbnRleHRXcmFwcGVyLFxyXG4gICAgICAgIEJvZHk6IGJvZHkgYXMgVEJvZHksXHJcbiAgICAgICAgSGVhZGVyOiBoZWFkZXIgYXMgVEhlYWRlcixcclxuICAgICAgICBUYWI6IHRhYiBhcyBUVGFiLFxyXG4gICAgICAgIEdyaWQ6IGdyaWQgYXMgVEdyaWQsXHJcbiAgICAgICAgTmF2aWdhdGlvbjogbmF2aWdhdGlvbiBhcyBUTmF2aWdhdGlvbixcclxuICAgICAgICBRdWlja0Zvcm06IHF1aWNrRm9ybSBhcyBUUXVpY2tGb3JtLFxyXG4gICAgICAgIEZvcm1JZDogY29udGV4dFVpRm9ybVNlbGVjdG9yPy5nZXRDdXJyZW50SXRlbSgpPy5nZXRJZCgpLFxyXG4gICAgICAgIEZvcm1MYWJlbDogY29udGV4dFVpRm9ybVNlbGVjdG9yPy5nZXRDdXJyZW50SXRlbSgpPy5nZXRMYWJlbCgpLFxyXG4gICAgICAgIEZvcm1UeXBlOiBjb250ZXh0VWk/LmdldEZvcm1UeXBlKCksXHJcbiAgICAgICAgRW50aXR5SWQ6IGNvbnRleHREYXRhRW50aXR5Py5nZXRJZCgpLFxyXG4gICAgICAgIEVudGl0eU5hbWU6IGNvbnRleHREYXRhRW50aXR5Py5nZXRFbnRpdHlOYW1lKCksXHJcbiAgICAgICAgRGF0YUlzRGlydHk6IGNvbnRleHREYXRhPy5nZXRJc0RpcnR5KCksXHJcbiAgICAgICAgRGF0YUlzVmFsaWQ6IGNvbnRleHREYXRhPy5pc1ZhbGlkKCksXHJcbiAgICAgICAgU2F2ZTogKHNhdmVPcHRpb25zPzogYW55KSA9PiBjb250ZXh0RGF0YT8uc2F2ZShzYXZlT3B0aW9ucyksXHJcbiAgICAgICAgUmVmcmVzaDogKHNhdmU/OiBib29sZWFuKSA9PiBjb250ZXh0RGF0YT8ucmVmcmVzaChzYXZlKSxcclxuICAgICAgICBDbG9zZTogKCkgPT4gY29udGV4dFVpPy5jbG9zZSgpLFxyXG4gICAgICAgIFNldEZvcm1Ob3RpZmljYXRpb246IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRleHRVaT8uc2V0Rm9ybU5vdGlmaWNhdGlvbihtZXNzYWdlLCBsZXZlbCwgdW5pcXVlSWQpLFxyXG4gICAgICAgIENsZWFyRm9ybU5vdGlmaWNhdGlvbjogKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRleHRVaT8uY2xlYXJGb3JtTm90aWZpY2F0aW9uKHVuaXF1ZUlkKSxcclxuICAgICAgICBSZWZyZXNoUmliYm9uOiAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IGNvbnRleHRVaT8ucmVmcmVzaFJpYmJvbihyZWZyZXNoQWxsKSxcclxuICAgICAgICBVaUFkZExvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiBjb250ZXh0VWk/LmFkZExvYWRlZChjYWxsYmFjayksXHJcbiAgICAgICAgVWlSZW1vdmVMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gY29udGV4dFVpPy5yZW1vdmVMb2FkZWQoY2FsbGJhY2spLFxyXG4gICAgfTtcclxufVxyXG4iLCAiLyoqXHJcbiAqIEFjY291bnQgRm9ybSBUeXBlU2NyaXB0IE1vZHVsZVxyXG4gKiBcdTAxMTBcdTAwRTJ5IGxcdTAwRTAgcGhpXHUwMEVBbiBiXHUxRUEzbiBUeXBlU2NyaXB0IGNcdTFFRTdhIGVudGl0aWVzL0FjY291bnQuZm9ybS5qc1xyXG4gKiBGaWxlIG5cdTAwRTB5IFx1MDExMVx1MDFCMFx1MUVFM2MgZ2VuZXJhdG9yIHRcdTFFRjEgXHUwMTExXHUxRUQ5bmcgdFx1MUVBMW8gcmEsIHNhdSBuXHUwMEUweSBjXHUwMEYzIHRoXHUxRUMzIHZpXHUxRUJGdCB0b29sIFx1MDExMVx1MUVDMyBnZW5lcmF0ZSBcdTAxMTFcdTAwRkFuZyBmb3JtYXQgblx1MDBFMHlcclxuICovXHJcblxyXG5pbXBvcnQgeyBMb2FkRm9ybVYyLCBJU3RyaW5nQ29udHJvbCwgSU51bWJlckNvbnRyb2wsIElCb29sZWFuQ29udHJvbCwgSU9wdGlvblNldENvbnRyb2wsIElMb29rdXBDb250cm9sLCBJTW9uZXlDb250cm9sLCBJVGFiLCBJU2VjdGlvbiwgSUdyaWQsIElOYXZpZ2F0aW9uSXRlbSB9IGZyb20gJy4vZGV2a2l0JztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQWNjb3VudCBGb3JtIEludGVyZmFjZXMgLSBUeXBlU2NyaXB0IHRcdTFFRjEgXHUwMTExXHUxRUQ5bmcgY1x1MDBGMyBJbnRlbGxpU2Vuc2UgdFx1MUVFQiBpbnRlcmZhY2VzIG5cdTAwRTB5XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIGNcdTAwRTFjIGZpZWxkIHRyb25nIEJvZHkgY1x1MUVFN2EgQWNjb3VudCBmb3JtICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRGb3JtQm9keSB7XHJcbiAgICAvKiogVHlwZSBhbiBJRCBudW1iZXIgb3IgY29kZSBmb3IgdGhlIGFjY291bnQgdG8gcXVpY2tseSBzZWFyY2ggYW5kIGlkZW50aWZ5IHRoZSBhY2NvdW50IGluIHN5c3RlbSB2aWV3cy4gKi9cclxuICAgIEFjY291bnROdW1iZXI6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNvbXBhbnkgb3IgYnVzaW5lc3MgbmFtZS4gKi9cclxuICAgIE5hbWU6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgdGhlIG1haW4gcGhvbmUgbnVtYmVyIGZvciB0aGlzIGFjY291bnQuICovXHJcbiAgICBUZWxlcGhvbmUxOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBwcmltYXJ5IGVtYWlsIGFkZHJlc3MgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgRU1haWxBZGRyZXNzMTogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgZmF4IG51bWJlciBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBGYXg6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgdGhlIGFjY291bnQncyB3ZWJzaXRlIFVSTCB0byBnZXQgcXVpY2sgZGV0YWlscyBhYm91dCB0aGUgY29tcGFueSBwcm9maWxlLiAqL1xyXG4gICAgV2ViU2l0ZVVSTDogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogVHlwZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIGRlc2NyaWJlIHRoZSBhY2NvdW50LCBzdWNoIGFzIGFuIGV4Y2VycHQgZnJvbSB0aGUgY29tcGFueSdzIHdlYnNpdGUuICovXHJcbiAgICBEZXNjcmlwdGlvbjogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgY3JlZGl0IGxpbWl0IG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQ3JlZGl0TGltaXQ6IElNb25leUNvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgYW5udWFsIHJldmVudWUgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgUmV2ZW51ZTogSU1vbmV5Q29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBudW1iZXIgb2YgZW1wbG95ZWVzIHRoYXQgd29yayBhdCB0aGUgYWNjb3VudC4gKi9cclxuICAgIE51bWJlck9mRW1wbG95ZWVzOiBJTnVtYmVyQ29udHJvbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgY3JlZGl0IGZvciB0aGUgYWNjb3VudCBpcyBvbiBob2xkLiAqL1xyXG4gICAgQ3JlZGl0T25Ib2xkOiBJQm9vbGVhbkNvbnRyb2w7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGRpcmVjdCBlbWFpbC4gKi9cclxuICAgIERvTm90RU1haWw6IElCb29sZWFuQ29udHJvbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgcGhvbmUgY2FsbHMuICovXHJcbiAgICBEb05vdFBob25lOiBJQm9vbGVhbkNvbnRyb2w7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGZheGVzLiAqL1xyXG4gICAgRG9Ob3RGYXg6IElCb29sZWFuQ29udHJvbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgYnVsayBlbWFpbC4gKi9cclxuICAgIERvTm90QnVsa0VNYWlsOiBJQm9vbGVhbkNvbnRyb2w7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGRpcmVjdCBtYWlsLiAqL1xyXG4gICAgRG9Ob3RQb3N0YWxNYWlsOiBJQm9vbGVhbkNvbnRyb2w7XHJcbiAgICAvKiogSW5mb3JtYXRpb24gYWJvdXQgd2hldGhlciB0byBhbGxvdyBmb2xsb3dpbmcgZW1haWwgYWN0aXZpdHkuICovXHJcbiAgICBGb2xsb3dFbWFpbDogSUJvb2xlYW5Db250cm9sO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIHByaW1hcnkgaW5kdXN0cnkuICovXHJcbiAgICBJbmR1c3RyeUNvZGU6IElPcHRpb25TZXRDb250cm9sO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIG93bmVyc2hpcCBzdHJ1Y3R1cmUuICovXHJcbiAgICBPd25lcnNoaXBDb2RlOiBJT3B0aW9uU2V0Q29udHJvbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHBheW1lbnQgdGVybXMuICovXHJcbiAgICBQYXltZW50VGVybXNDb2RlOiBJT3B0aW9uU2V0Q29udHJvbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHByZWZlcnJlZCBtZXRob2Qgb2YgY29udGFjdC4gKi9cclxuICAgIFByZWZlcnJlZENvbnRhY3RNZXRob2RDb2RlOiBJT3B0aW9uU2V0Q29udHJvbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGZyZWlnaHQgdGVybXMgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9GcmVpZ2h0VGVybXNDb2RlOiBJT3B0aW9uU2V0Q29udHJvbDtcclxuICAgIC8qKiBTZWxlY3QgYSBzaGlwcGluZyBtZXRob2QgZm9yIGRlbGl2ZXJpZXMuICovXHJcbiAgICBBZGRyZXNzMV9TaGlwcGluZ01ldGhvZENvZGU6IElPcHRpb25TZXRDb250cm9sO1xyXG4gICAgLyoqIENob29zZSB0aGUgcGFyZW50IGFjY291bnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgYWNjb3VudC4gKi9cclxuICAgIFBhcmVudEFjY291bnRJZDogSUxvb2t1cENvbnRyb2w7XHJcbiAgICAvKiogQ2hvb3NlIHRoZSBwcmltYXJ5IGNvbnRhY3QgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgUHJpbWFyeUNvbnRhY3RJZDogSUxvb2t1cENvbnRyb2w7XHJcbiAgICAvKiogQ2hvb3NlIHRoZSBsb2NhbCBjdXJyZW5jeSBmb3IgdGhlIHJlY29yZC4gKi9cclxuICAgIFRyYW5zYWN0aW9uQ3VycmVuY3lJZDogSUxvb2t1cENvbnRyb2w7XHJcbiAgICAvKiogRW50ZXIgdGhlIHVzZXIgb3IgdGVhbSB3aG8gaXMgYXNzaWduZWQgdG8gbWFuYWdlIHRoZSByZWNvcmQuICovXHJcbiAgICBPd25lcklkOiBJTG9va3VwQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBTdGFuZGFyZCBJbmR1c3RyaWFsIENsYXNzaWZpY2F0aW9uIChTSUMpIGNvZGUuICovXHJcbiAgICBTSUM6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgdGhlIHN0b2NrIGV4Y2hhbmdlIHN5bWJvbCBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBUaWNrZXJTeW1ib2w6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFNob3dzIHRoZSBjb21wbGV0ZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9Db21wb3NpdGU6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNpdHkgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9DaXR5OiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmaXJzdCBsaW5lIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MaW5lMTogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgc2Vjb25kIGxpbmUgb2YgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0xpbmUyOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSB0aGlyZCBsaW5lIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MaW5lMzogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgWklQIENvZGUgb3IgcG9zdGFsIGNvZGUgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9Qb3N0YWxDb2RlOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzdGF0ZSBvciBwcm92aW5jZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfU3RhdGVPclByb3ZpbmNlOiBJU3RyaW5nQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb3VudHJ5IG9yIHJlZ2lvbiBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0NvdW50cnk6IElTdHJpbmdDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgYSBkZXNjcmlwdGl2ZSBuYW1lIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTmFtZTogSVN0cmluZ0NvbnRyb2w7XHJcbiAgICAvKiogVHlwZSB0aGUgbWFpbiBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUxOiBJU3RyaW5nQ29udHJvbDtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBjaG8gY1x1MDBFMWMgZmllbGQgdHJvbmcgSGVhZGVyIGNcdTFFRTdhIEFjY291bnQgZm9ybSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50Rm9ybUhlYWRlciB7XHJcbiAgICAvKiogVHlwZSB0aGUgbnVtYmVyIG9mIGVtcGxveWVlcyB0aGF0IHdvcmsgYXQgdGhlIGFjY291bnQuICovXHJcbiAgICBOdW1iZXJPZkVtcGxveWVlczogSU51bWJlckNvbnRyb2w7XHJcbiAgICAvKiogRW50ZXIgdGhlIHVzZXIgb3IgdGVhbSB3aG8gaXMgYXNzaWduZWQgdG8gbWFuYWdlIHRoZSByZWNvcmQuICovXHJcbiAgICBPd25lcklkOiBJTG9va3VwQ29udHJvbDtcclxuICAgIC8qKiBUeXBlIHRoZSBhbm51YWwgcmV2ZW51ZSBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBSZXZlbnVlOiBJTW9uZXlDb250cm9sO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNyZWRpdCBsaW1pdCBvZiB0aGUgYWNjb3VudC4gKi9cclxuICAgIENyZWRpdExpbWl0OiBJTW9uZXlDb250cm9sO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgcHJlZmVycmVkIG1ldGhvZCBvZiBjb250YWN0LiAqL1xyXG4gICAgUHJlZmVycmVkQ29udGFjdE1ldGhvZENvZGU6IElPcHRpb25TZXRDb250cm9sO1xyXG4gICAgLyoqIENob29zZSB0aGUgcHJpbWFyeSBjb250YWN0IGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIFByaW1hcnlDb250YWN0SWQ6IElMb29rdXBDb250cm9sO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBTZWN0aW9uIHRyb25nIFRhYiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50VGFiU2VjdGlvbnMge1xyXG4gICAgW2tleTogc3RyaW5nXTogSVNlY3Rpb247XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIFRhYiB0cm9uZyBBY2NvdW50IGZvcm0gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWNjb3VudEZvcm1UYWIgZXh0ZW5kcyBJVGFiIHtcclxuICAgIFNlY3Rpb246IElBY2NvdW50VGFiU2VjdGlvbnM7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIHRcdTFFQTV0IGNcdTFFQTMgVGFicyB0cm9uZyBBY2NvdW50IGZvcm0gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWNjb3VudEZvcm1UYWJzIHtcclxuICAgIC8qKiBTdW1tYXJ5IFRhYiAqL1xyXG4gICAgU1VNTUFSWV9UQUI6IElBY2NvdW50Rm9ybVRhYjtcclxuICAgIC8qKiBEZXRhaWxzIFRhYiAqL1xyXG4gICAgREVUQUlMU19UQUI6IElBY2NvdW50Rm9ybVRhYjtcclxuICAgIC8qKiBHZW5lcmFsIFRhYiAqL1xyXG4gICAgZ2VuZXJhbDogSUFjY291bnRGb3JtVGFiO1xyXG4gICAgLyoqIERldGFpbHMgVGFiIChhbHRlcm5hdGUpICovXHJcbiAgICBkZXRhaWxzOiBJQWNjb3VudEZvcm1UYWI7XHJcbiAgICAvKiogQWRtaW5pc3RyYXRpb24gVGFiICovXHJcbiAgICBhZG1pbmlzdHJhdGlvbjogSUFjY291bnRGb3JtVGFiO1xyXG4gICAgLyoqIENvbnRhY3RzIFRhYiAqL1xyXG4gICAgY29udGFjdHM6IElBY2NvdW50Rm9ybVRhYjtcclxuICAgIC8qKiBOb3RlcyBhbmQgQWN0aXZpdGllcyBUYWIgKi9cclxuICAgIG5vdGVzX2FuZF9hY3Rpdml0aWVzOiBJQWNjb3VudEZvcm1UYWI7XHJcbiAgICAvKiogVGFiIDEgKFF1aWNrIENyZWF0ZSkgKi9cclxuICAgIHRhYl8xOiBJQWNjb3VudEZvcm1UYWI7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIEdyaWQgdHJvbmcgQWNjb3VudCBmb3JtICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRGb3JtR3JpZCB7XHJcbiAgICAvKiogQ2hpbGQgQWNjb3VudHMgc3ViZ3JpZCAqL1xyXG4gICAgQ2hpbGRBY2NvdW50czogSUdyaWQ7XHJcbiAgICAvKiogQ29udGFjdHMgc3ViZ3JpZCAqL1xyXG4gICAgQ29udGFjdHM6IElHcmlkO1xyXG4gICAgLyoqIEFjY291bnQgQWN0aXZpdGllcyBHcmlkICovXHJcbiAgICBhY2NvdW50YWN0aXZpdGllc2dyaWQ6IElHcmlkO1xyXG4gICAgLyoqIEFjY291bnQgQ29udGFjdHMgR3JpZCAqL1xyXG4gICAgYWNjb3VudENvbnRhY3RzR3JpZDogSUdyaWQ7XHJcbn1cclxuXHJcbi8qKiBJbnRlcmZhY2UgY2hvIE5hdmlnYXRpb24gdHJvbmcgQWNjb3VudCBmb3JtICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRGb3JtTmF2aWdhdGlvbiB7XHJcbiAgICBhY2NvdW50X2FkeF9pbnZpdGVyZWRlbXB0aW9uczogSU5hdmlnYXRpb25JdGVtO1xyXG4gICAgYWNjb3VudF9hZHhfcG9ydGFsY29tbWVudHM6IElOYXZpZ2F0aW9uSXRlbTtcclxuICAgIEFjY291bnRfQXBwb2ludG1lbnRzOiBJTmF2aWdhdGlvbkl0ZW07XHJcbiAgICBhY2NvdW50X0RlbGV0ZWRJdGVtUmVmZXJlbmNlczogSU5hdmlnYXRpb25JdGVtO1xyXG4gICAgQWNjb3VudF9FbWFpbF9FbWFpbFNlbmRlcjogSU5hdmlnYXRpb25JdGVtO1xyXG4gICAgQWNjb3VudF9FbWFpbF9TZW5kZXJzQWNjb3VudDogSU5hdmlnYXRpb25JdGVtO1xyXG4gICAgQWNjb3VudF9FbWFpbHM6IElOYXZpZ2F0aW9uSXRlbTtcclxuICAgIGFjY291bnRfcGFyZW50X2FjY291bnQ6IElOYXZpZ2F0aW9uSXRlbTtcclxuICAgIEFjY291bnRfUGhvbmVjYWxsczogSU5hdmlnYXRpb25JdGVtO1xyXG4gICAgQWNjb3VudF9UYXNrczogSU5hdmlnYXRpb25JdGVtO1xyXG4gICAgYWR4X2ludml0YXRpb25fYXNzaWdudG9hY2NvdW50OiBJTmF2aWdhdGlvbkl0ZW07XHJcbiAgICBjb250YWN0X2N1c3RvbWVyX2FjY291bnRzOiBJTmF2aWdhdGlvbkl0ZW07XHJcbiAgICBtc2FfYWNjb3VudF9tYW5hZ2luZ3BhcnRuZXI6IElOYXZpZ2F0aW9uSXRlbTtcclxuICAgIG1zYV9jb250YWN0X21hbmFnaW5ncGFydG5lcjogSU5hdmlnYXRpb25JdGVtO1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIGNobyBRdWlja0Zvcm0gdHJvbmcgQWNjb3VudCBmb3JtICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRGb3JtUXVpY2tGb3JtIHtcclxuICAgIGNvbnRhY3RxdWlja2Zvcm06IHtcclxuICAgICAgICBCb2R5OiB7XHJcbiAgICAgICAgICAgIEVNYWlsQWRkcmVzczE6IGFueTtcclxuICAgICAgICAgICAgVGVsZXBob25lMTogYW55O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgSXNMb2FkZWQ6ICgpID0+IGJvb2xlYW47XHJcbiAgICAgICAgUmVmcmVzaDogKCkgPT4gdm9pZDtcclxuICAgICAgICBGb2N1czogKCkgPT4gdm9pZDtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQWNjb3VudCBGb3JtIENsYXNzIC0gQ2xhc3MgY2hcdTAwRURuaCBcdTAxMTFcdTAxQjBcdTFFRTNjIGV4cG9ydFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQWNjb3VudCBGb3JtIGNsYXNzXHJcbiAqIFNcdTFFRUQgZFx1MUVFNW5nOiBjb25zdCBmb3JtID0gbmV3IEFjY291bnRGb3JtKGV4ZWN1dGlvbkNvbnRleHQpO1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFjY291bnRGb3JtIHtcclxuICAgIC8qKiBUaGUgQm9keSBzZWN0aW9uIG9mIGZvcm0gQWNjb3VudCAqL1xyXG4gICAgcHVibGljIEJvZHk6IElBY2NvdW50Rm9ybUJvZHk7XHJcbiAgICAvKiogVGhlIEhlYWRlciBzZWN0aW9uIG9mIGZvcm0gQWNjb3VudCAqL1xyXG4gICAgcHVibGljIEhlYWRlcjogSUFjY291bnRGb3JtSGVhZGVyO1xyXG4gICAgLyoqIFRoZSBUYWJzIG9mIGZvcm0gQWNjb3VudCAqL1xyXG4gICAgcHVibGljIFRhYjogSUFjY291bnRGb3JtVGFicztcclxuICAgIC8qKiBUaGUgR3JpZCBvZiBmb3JtIEFjY291bnQgKi9cclxuICAgIHB1YmxpYyBHcmlkOiBJQWNjb3VudEZvcm1HcmlkO1xyXG4gICAgLyoqIFRoZSBOYXZpZ2F0aW9uIG9mIGZvcm0gQWNjb3VudCAqL1xyXG4gICAgcHVibGljIE5hdmlnYXRpb246IElBY2NvdW50Rm9ybU5hdmlnYXRpb247XHJcbiAgICAvKiogVGhlIFF1aWNrRm9ybSBvZiBmb3JtIEFjY291bnQgKi9cclxuICAgIHB1YmxpYyBRdWlja0Zvcm06IElBY2NvdW50Rm9ybVF1aWNrRm9ybTtcclxuICAgIC8qKiBGb3JtIElEICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybUlkOiBzdHJpbmc7XHJcbiAgICAvKiogRm9ybSBMYWJlbCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEZvcm1MYWJlbDogc3RyaW5nO1xyXG4gICAgLyoqIEZvcm0gVHlwZSAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEZvcm1UeXBlOiBudW1iZXI7XHJcbiAgICAvKiogRW50aXR5IElEICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5SWQ6IHN0cmluZztcclxuICAgIC8qKiBFbnRpdHkgTmFtZSAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIC8qKiBDaGVjayBpZiBkYXRhIGlzIGRpcnR5ICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRGF0YUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICAvKiogQ2hlY2sgaWYgZGF0YSBpcyB2YWxpZCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IERhdGFJc1ZhbGlkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKiBFeGVjdXRpb24gQ29udGV4dCAqL1xyXG4gICAgcHVibGljIEV4ZWN1dGlvbkNvbnRleHQ6IGFueTtcclxuXHJcbiAgICAvKiogU2F2ZSBmb3JtICovXHJcbiAgICBwdWJsaWMgU2F2ZTogKHNhdmVPcHRpb25zPzogYW55KSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqIFJlZnJlc2ggZm9ybSAqL1xyXG4gICAgcHVibGljIFJlZnJlc2g6IChzYXZlPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKiBDbG9zZSBmb3JtICovXHJcbiAgICBwdWJsaWMgQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgICAvKiogU2V0IGZvcm0gbm90aWZpY2F0aW9uICovXHJcbiAgICBwdWJsaWMgU2V0Rm9ybU5vdGlmaWNhdGlvbjogKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIC8qKiBDbGVhciBmb3JtIG5vdGlmaWNhdGlvbiAqL1xyXG4gICAgcHVibGljIENsZWFyRm9ybU5vdGlmaWNhdGlvbjogKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICAvKiogUmVmcmVzaCByaWJib24gKi9cclxuICAgIHB1YmxpYyBSZWZyZXNoUmliYm9uOiAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICAvKiogQWRkIGxvYWRlZCBjYWxsYmFjayAqL1xyXG4gICAgcHVibGljIFVpQWRkTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICAvKiogUmVtb3ZlIGxvYWRlZCBjYWxsYmFjayAqL1xyXG4gICAgcHVibGljIFVpUmVtb3ZlTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY2NvdW50IEZvcm0gY29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSBleGVjdXRpb25Db250ZXh0IHRoZSBleGVjdXRpb24gY29udGV4dFxyXG4gICAgICogQHBhcmFtIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUgZGVmYXVsdCByZXNvdXJjZSBuYW1lLiBFLmcuOiBcImRldmtpdF8vcmVzb3VyY2VzL1Jlc291cmNlXCJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZXhlY3V0aW9uQ29udGV4dDogYW55LCBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICAgICAgXCJBY2NvdW50TnVtYmVyXCIsIFwiTmFtZVwiLCBcIlRlbGVwaG9uZTFcIiwgXCJFTWFpbEFkZHJlc3MxXCIsIFwiRmF4XCIsIFwiV2ViU2l0ZVVSTFwiLFxyXG4gICAgICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiLCBcIkNyZWRpdExpbWl0XCIsIFwiUmV2ZW51ZVwiLCBcIk51bWJlck9mRW1wbG95ZWVzXCIsIFwiQ3JlZGl0T25Ib2xkXCIsXHJcbiAgICAgICAgICAgICAgICBcIkRvTm90RU1haWxcIiwgXCJEb05vdFBob25lXCIsIFwiRG9Ob3RGYXhcIiwgXCJEb05vdEJ1bGtFTWFpbFwiLCBcIkRvTm90UG9zdGFsTWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJGb2xsb3dFbWFpbFwiLCBcIkluZHVzdHJ5Q29kZVwiLCBcIk93bmVyc2hpcENvZGVcIiwgXCJQYXltZW50VGVybXNDb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcIlByZWZlcnJlZENvbnRhY3RNZXRob2RDb2RlXCIsIFwiQWRkcmVzczFfRnJlaWdodFRlcm1zQ29kZVwiLCBcIkFkZHJlc3MxX1NoaXBwaW5nTWV0aG9kQ29kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJQYXJlbnRBY2NvdW50SWRcIiwgXCJQcmltYXJ5Q29udGFjdElkXCIsIFwiVHJhbnNhY3Rpb25DdXJyZW5jeUlkXCIsIFwiT3duZXJJZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJTSUNcIiwgXCJUaWNrZXJTeW1ib2xcIiwgXCJBZGRyZXNzMV9Db21wb3NpdGVcIiwgXCJBZGRyZXNzMV9DaXR5XCIsIFwiQWRkcmVzczFfTGluZTFcIixcclxuICAgICAgICAgICAgICAgIFwiQWRkcmVzczFfTGluZTJcIiwgXCJBZGRyZXNzMV9MaW5lM1wiLCBcIkFkZHJlc3MxX1Bvc3RhbENvZGVcIiwgXCJBZGRyZXNzMV9TdGF0ZU9yUHJvdmluY2VcIixcclxuICAgICAgICAgICAgICAgIFwiQWRkcmVzczFfQ291bnRyeVwiLCBcIkFkZHJlc3MxX05hbWVcIiwgXCJBZGRyZXNzMV9UZWxlcGhvbmUxXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgaGVhZGVyOiBbXCJOdW1iZXJPZkVtcGxveWVlc1wiLCBcIk93bmVySWRcIiwgXCJSZXZlbnVlXCIsIFwiQ3JlZGl0TGltaXRcIiwgXCJQcmVmZXJyZWRDb250YWN0TWV0aG9kQ29kZVwiLCBcIlByaW1hcnlDb250YWN0SWRcIl0sXHJcbiAgICAgICAgICAgIHRhYjogW1xyXG4gICAgICAgICAgICAgICAgXCJTVU1NQVJZX1RBQl9fX0FDQ09VTlRfSU5GT1JNQVRJT05cIiwgXCJTVU1NQVJZX1RBQl9fX0FERFJFU1NcIiwgXCJTVU1NQVJZX1RBQl9fX1NPQ0lBTF9QQU5FX1RBQlwiLFxyXG4gICAgICAgICAgICAgICAgXCJERVRBSUxTX1RBQl9fX0NPTVBBTllfUFJPRklMRVwiLCBcIkRFVEFJTFNfVEFCX19fQklMTElOR1wiLCBcIkRFVEFJTFNfVEFCX19fU0hJUFBJTkdcIixcclxuICAgICAgICAgICAgICAgIFwiREVUQUlMU19UQUJfX19DT05UQUNUX1BSRUZFUkVOQ0VTXCIsIFwiREVUQUlMU19UQUJfX19DaGlsZEFjY291bnRzXCIsXHJcbiAgICAgICAgICAgICAgICBcImdlbmVyYWxfX19hY2NvdW50X2luZm9ybWF0aW9uXCIsIFwiZ2VuZXJhbF9fX2FkZHJlc3NcIiwgXCJnZW5lcmFsX19fZGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICAgIFwiZGV0YWlsc19fX3Byb2Zlc3Npb25hbF9pbmZvcm1hdGlvblwiLCBcImRldGFpbHNfX19iaWxsaW5nX2luZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImFkbWluaXN0cmF0aW9uX19fY29udGFjdF9tZXRob2RzXCIsIFwiYWRtaW5pc3RyYXRpb25fX19pbnRlcm5hbF9pbmZvcm1hdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWN0c19fX2NvbnRhY3RzXCIsIFwibm90ZXNfYW5kX2FjdGl2aXRpZXNfX19hY3Rpdml0aWVzXCIsIFwibm90ZXNfYW5kX2FjdGl2aXRpZXNfX19ub3Rlc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0YWJfMV9fX3RhYl8xX2NvbHVtbl8xX3NlY3Rpb25fMVwiLCBcInRhYl8xX19fdGFiXzFfY29sdW1uXzJfc2VjdGlvbl8xXCIsIFwidGFiXzFfX190YWJfMV9jb2x1bW5fM19zZWN0aW9uXzFcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBncmlkOiBbXCJDaGlsZEFjY291bnRzXCIsIFwiQ29udGFjdHNcIiwgXCJhY2NvdW50YWN0aXZpdGllc2dyaWRcIiwgXCJhY2NvdW50Q29udGFjdHNHcmlkXCJdLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiBbXHJcbiAgICAgICAgICAgICAgICBcImFjY291bnRfYWR4X2ludml0ZXJlZGVtcHRpb25zXCIsIFwiYWNjb3VudF9hZHhfcG9ydGFsY29tbWVudHNcIiwgXCJBY2NvdW50X0FwcG9pbnRtZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhY2NvdW50X0RlbGV0ZWRJdGVtUmVmZXJlbmNlc1wiLCBcIkFjY291bnRfRW1haWxfRW1haWxTZW5kZXJcIiwgXCJBY2NvdW50X0VtYWlsX1NlbmRlcnNBY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICBcIkFjY291bnRfRW1haWxzXCIsIFwiYWNjb3VudF9wYXJlbnRfYWNjb3VudFwiLCBcIkFjY291bnRfUGhvbmVjYWxsc1wiLCBcIkFjY291bnRfVGFza3NcIixcclxuICAgICAgICAgICAgICAgIFwiYWR4X2ludml0YXRpb25fYXNzaWdudG9hY2NvdW50XCIsIFwiY29udGFjdF9jdXN0b21lcl9hY2NvdW50c1wiLCBcIm1zYV9hY2NvdW50X21hbmFnaW5ncGFydG5lclwiLFxyXG4gICAgICAgICAgICAgICAgXCJtc2FfY29udGFjdF9tYW5hZ2luZ3BhcnRuZXJcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBxdWljazogW1wiY29udGFjdHF1aWNrZm9ybV9fX0VNYWlsQWRkcmVzczFcIiwgXCJjb250YWN0cXVpY2tmb3JtX19fVGVsZXBob25lMVwiXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBMb2FkRm9ybVYyPElBY2NvdW50Rm9ybUJvZHksIElBY2NvdW50Rm9ybUhlYWRlciwgSUFjY291bnRGb3JtVGFicywgSUFjY291bnRGb3JtR3JpZCwgSUFjY291bnRGb3JtTmF2aWdhdGlvbiwgSUFjY291bnRGb3JtUXVpY2tGb3JtPihcclxuICAgICAgICAgICAgZXhlY3V0aW9uQ29udGV4dCxcclxuICAgICAgICAgICAgZGVmYXVsdFdlYlJlc291cmNlTmFtZSxcclxuICAgICAgICAgICAgZm9ybUNvbmZpZ1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuRXhlY3V0aW9uQ29udGV4dCA9IGZvcm0uRXhlY3V0aW9uQ29udGV4dDtcclxuICAgICAgICB0aGlzLkJvZHkgPSBmb3JtLkJvZHk7XHJcbiAgICAgICAgdGhpcy5IZWFkZXIgPSBmb3JtLkhlYWRlcjtcclxuICAgICAgICB0aGlzLlRhYiA9IGZvcm0uVGFiO1xyXG4gICAgICAgIHRoaXMuR3JpZCA9IGZvcm0uR3JpZDtcclxuICAgICAgICB0aGlzLk5hdmlnYXRpb24gPSBmb3JtLk5hdmlnYXRpb247XHJcbiAgICAgICAgdGhpcy5RdWlja0Zvcm0gPSBmb3JtLlF1aWNrRm9ybTtcclxuICAgICAgICB0aGlzLkZvcm1JZCA9IGZvcm0uRm9ybUlkO1xyXG4gICAgICAgIHRoaXMuRm9ybUxhYmVsID0gZm9ybS5Gb3JtTGFiZWw7XHJcbiAgICAgICAgdGhpcy5Gb3JtVHlwZSA9IGZvcm0uRm9ybVR5cGU7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlJZCA9IGZvcm0uRW50aXR5SWQ7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlOYW1lID0gZm9ybS5FbnRpdHlOYW1lO1xyXG4gICAgICAgIHRoaXMuRGF0YUlzRGlydHkgPSBmb3JtLkRhdGFJc0RpcnR5O1xyXG4gICAgICAgIHRoaXMuRGF0YUlzVmFsaWQgPSBmb3JtLkRhdGFJc1ZhbGlkO1xyXG4gICAgICAgIHRoaXMuU2F2ZSA9IGZvcm0uU2F2ZTtcclxuICAgICAgICB0aGlzLlJlZnJlc2ggPSBmb3JtLlJlZnJlc2g7XHJcbiAgICAgICAgdGhpcy5DbG9zZSA9IGZvcm0uQ2xvc2U7XHJcbiAgICAgICAgdGhpcy5TZXRGb3JtTm90aWZpY2F0aW9uID0gZm9ybS5TZXRGb3JtTm90aWZpY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuQ2xlYXJGb3JtTm90aWZpY2F0aW9uID0gZm9ybS5DbGVhckZvcm1Ob3RpZmljYXRpb247XHJcbiAgICAgICAgdGhpcy5SZWZyZXNoUmliYm9uID0gZm9ybS5SZWZyZXNoUmliYm9uO1xyXG4gICAgICAgIHRoaXMuVWlBZGRMb2FkZWQgPSBmb3JtLlVpQWRkTG9hZGVkO1xyXG4gICAgICAgIHRoaXMuVWlSZW1vdmVMb2FkZWQgPSBmb3JtLlVpUmVtb3ZlTG9hZGVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE9wdGlvblNldCAtIENcdTAwRTFjIGdpXHUwMEUxIHRyXHUxRUNCIE9wdGlvblNldCBjaG8gQWNjb3VudCBlbnRpdHlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBPcHRpb25TZXQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBY2NvdW50IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgQWNjb3VudENhdGVnb3J5Q29kZSA9IHtcclxuICAgICAgICAgICAgUHJlZmVycmVkX0N1c3RvbWVyOiAxLFxyXG4gICAgICAgICAgICBTdGFuZGFyZDogMlxyXG4gICAgICAgIH0gYXMgY29uc3Q7XHJcblxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbmR1c3RyeUNvZGUgPSB7XHJcbiAgICAgICAgICAgIEFjY291bnRpbmc6IDEsXHJcbiAgICAgICAgICAgIEFncmljdWx0dXJlX2FuZF9Ob25fcGV0cm9sX05hdHVyYWxfUmVzb3VyY2VfRXh0cmFjdGlvbjogMixcclxuICAgICAgICAgICAgQnJvYWRjYXN0aW5nX1ByaW50aW5nX2FuZF9QdWJsaXNoaW5nOiAzLFxyXG4gICAgICAgICAgICBCcm9rZXJzOiA0LFxyXG4gICAgICAgICAgICBCdWlsZGluZ19TdXBwbHlfUmV0YWlsOiA1LFxyXG4gICAgICAgICAgICBCdXNpbmVzc19TZXJ2aWNlczogNixcclxuICAgICAgICAgICAgQ29uc3VsdGluZzogNyxcclxuICAgICAgICAgICAgQ29uc3VtZXJfU2VydmljZXM6IDgsXHJcbiAgICAgICAgICAgIERlc2lnbl9EaXJlY3Rpb25fYW5kX0NyZWF0aXZlX01hbmFnZW1lbnQ6IDksXHJcbiAgICAgICAgICAgIERpc3RyaWJ1dG9yc19EaXNwYXRjaGVyc19hbmRfUHJvY2Vzc29yczogMTAsXHJcbiAgICAgICAgICAgIERvY3RvcnNfT2ZmaWNlc19hbmRfQ2xpbmljczogMTEsXHJcbiAgICAgICAgICAgIER1cmFibGVfTWFudWZhY3R1cmluZzogMTIsXHJcbiAgICAgICAgICAgIEVhdGluZ19hbmRfRHJpbmtpbmdfUGxhY2VzOiAxMyxcclxuICAgICAgICAgICAgRW50ZXJ0YWlubWVudF9SZXRhaWw6IDE0LFxyXG4gICAgICAgICAgICBFcXVpcG1lbnRfUmVudGFsX2FuZF9MZWFzaW5nOiAxNSxcclxuICAgICAgICAgICAgRmluYW5jaWFsOiAxNixcclxuICAgICAgICAgICAgRm9vZF9hbmRfVG9iYWNjb19Qcm9jZXNzaW5nOiAxNyxcclxuICAgICAgICAgICAgSW5ib3VuZF9DYXBpdGFsX0ludGVuc2l2ZV9Qcm9jZXNzaW5nOiAxOCxcclxuICAgICAgICAgICAgSW5ib3VuZF9SZXBhaXJfYW5kX1NlcnZpY2VzOiAxOSxcclxuICAgICAgICAgICAgSW5zdXJhbmNlOiAyMCxcclxuICAgICAgICAgICAgTGVnYWxfU2VydmljZXM6IDIxLFxyXG4gICAgICAgICAgICBOb25fRHVyYWJsZV9NZXJjaGFuZGlzZV9SZXRhaWw6IDIyLFxyXG4gICAgICAgICAgICBPdXRib3VuZF9Db25zdW1lcl9TZXJ2aWNlOiAyMyxcclxuICAgICAgICAgICAgUGV0cm9jaGVtaWNhbF9FeHRyYWN0aW9uX2FuZF9EaXN0cmlidXRpb246IDI0LFxyXG4gICAgICAgICAgICBTZXJ2aWNlX1JldGFpbDogMjUsXHJcbiAgICAgICAgICAgIFNJR19BZmZpbGlhdGlvbnM6IDI2LFxyXG4gICAgICAgICAgICBTb2NpYWxfU2VydmljZXM6IDI3LFxyXG4gICAgICAgICAgICBTcGVjaWFsX091dGJvdW5kX1RyYWRlX0NvbnRyYWN0b3JzOiAyOCxcclxuICAgICAgICAgICAgU3BlY2lhbHR5X1JlYWx0eTogMjksXHJcbiAgICAgICAgICAgIFRyYW5zcG9ydGF0aW9uOiAzMCxcclxuICAgICAgICAgICAgVXRpbGl0eV9DcmVhdGlvbl9hbmRfRGlzdHJpYnV0aW9uOiAzMSxcclxuICAgICAgICAgICAgVmVoaWNsZV9SZXRhaWw6IDMyLFxyXG4gICAgICAgICAgICBXaG9sZXNhbGU6IDMzXHJcbiAgICAgICAgfSBhcyBjb25zdDtcclxuXHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IE93bmVyc2hpcENvZGUgPSB7XHJcbiAgICAgICAgICAgIE90aGVyOiA0LFxyXG4gICAgICAgICAgICBQcml2YXRlOiAyLFxyXG4gICAgICAgICAgICBQdWJsaWM6IDEsXHJcbiAgICAgICAgICAgIFN1YnNpZGlhcnk6IDNcclxuICAgICAgICB9IGFzIGNvbnN0O1xyXG5cclxuICAgICAgICBleHBvcnQgY29uc3QgUGF5bWVudFRlcm1zQ29kZSA9IHtcclxuICAgICAgICAgICAgXzJfMTBfTmV0XzMwOiAyLFxyXG4gICAgICAgICAgICBOZXRfMzA6IDEsXHJcbiAgICAgICAgICAgIE5ldF80NTogMyxcclxuICAgICAgICAgICAgTmV0XzYwOiA0XHJcbiAgICAgICAgfSBhcyBjb25zdDtcclxuXHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFByZWZlcnJlZENvbnRhY3RNZXRob2RDb2RlID0ge1xyXG4gICAgICAgICAgICBBbnk6IDEsXHJcbiAgICAgICAgICAgIEVtYWlsOiAyLFxyXG4gICAgICAgICAgICBGYXg6IDQsXHJcbiAgICAgICAgICAgIE1haWw6IDUsXHJcbiAgICAgICAgICAgIFBob25lOiAzXHJcbiAgICAgICAgfSBhcyBjb25zdDtcclxuXHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFN0YXRlQ29kZSA9IHtcclxuICAgICAgICAgICAgQWN0aXZlOiAwLFxyXG4gICAgICAgICAgICBJbmFjdGl2ZTogMVxyXG4gICAgICAgIH0gYXMgY29uc3Q7XHJcblxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTdGF0dXNDb2RlID0ge1xyXG4gICAgICAgICAgICBBY3RpdmU6IDEsXHJcbiAgICAgICAgICAgIEluYWN0aXZlOiAyXHJcbiAgICAgICAgfSBhcyBjb25zdDtcclxuICAgIH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDNE9BLFdBQVMsT0FBVSxLQUFVLE1B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
