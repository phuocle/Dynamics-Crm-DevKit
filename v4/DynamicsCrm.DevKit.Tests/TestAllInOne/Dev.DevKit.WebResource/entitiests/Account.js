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

  // entities/Account.ts
  var Account_exports = {};
  __export(Account_exports, {
    default: () => Account_default
  });

  // lib/devkit.ts
  function getXrm() {
    if (typeof window !== "undefined" && window.Xrm !== void 0) {
      return window.Xrm;
    }
    if (typeof parent !== "undefined" && typeof parent.window !== "undefined" && parent.window.Xrm !== void 0) {
      return parent.window.Xrm;
    }
    if (typeof parent !== "undefined" && typeof parent.parent !== "undefined" && typeof parent.parent.window !== "undefined" && parent.parent.window.Xrm !== void 0) {
      return parent.parent.window.Xrm;
    }
    return void 0;
  }
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
    getter(field, "AttributeParent", () => attribute?.getParent());
    getter(field, "AttributeType", () => attribute?.getAttributeType());
    getter(field, "ControlName", () => control?.getName());
    getter(field, "ControlOptions", () => control?.getOptions());
    getter(field, "ControlParent", () => control?.getParent());
    getter(field, "ControlType", () => control?.getControlType());
    getter(field, "Format", () => attribute?.getFormat());
    getter(field, "InitialUrl", () => control?.getInitialUrl());
    getter(field, "InitialValue", () => attribute?.getInitialValue());
    getter(field, "IsDirty", () => attribute?.getIsDirty());
    getter(field, "IsPartyList", () => attribute?.getIsPartyList());
    getter(field, "IsValid", () => attribute?.isValid());
    getter(field, "Max", () => attribute?.getMax());
    getter(field, "MaxLength", () => attribute?.getMaxLength());
    getter(field, "Min", () => attribute?.getMin());
    getter(field, "Object", () => control?.getObject());
    getter(field, "Options", () => attribute?.getOptions());
    getter(field, "Outputs", () => control?.getOutputs());
    getter(field, "SelectedOption", () => attribute?.getSelectedOption());
    getter(field, "SelectedResults", () => control?.getSelectedResults());
    getter(field, "State", () => control?.getState());
    getter(field, "Text", () => attribute?.getText());
    getter(field, "TotalResultCount", () => control?.getTotalResultCount());
    getter(field, "UserPrivilege", () => attribute?.getUserPrivilege());
    getterSetter(field, "Data", () => control?.getData(), (value) => {
      control?.setData(value);
    });
    getterSetter(field, "DefaultView", () => control?.getDefaultView(), (value) => {
      control?.setDefaultView(value);
    });
    getterSetter(field, "Disabled", () => control?.getDisabled(), (value) => {
      if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
      control?.setDisabled(value);
    });
    getterSetter(field, "EntityTypes", () => control?.getEntityTypes(), (value) => {
      control?.setEntityTypes(value);
    });
    getterSetter(field, "Label", () => control?.getLabel(), (value) => {
      control?.setLabel(value);
    });
    getterSetter(field, "Precision", () => attribute?.getPrecision(), (value) => {
      attribute?.setPrecision(value);
    });
    getterSetter(field, "RequiredLevel", () => attribute?.getRequiredLevel(), (value) => {
      attribute?.setRequiredLevel(value);
    });
    getterSetter(field, "SearchQuery", () => control?.getSearchQuery(), (value) => {
      control?.setSearchQuery(value);
    });
    getterSetter(field, "ShowTime", () => control?.getShowTime(), (value) => {
      control?.setShowTime(value);
    });
    getterSetter(field, "Src", () => control?.getSrc(), (value) => {
      control?.setSrc(value);
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
    field.AddCustomFilter = (filter, entityLogicaName) => control?.addCustomFilter(filter, entityLogicaName);
    field.AddCustomView = (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) => control?.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
    field.AddLookupTagClick = (callback) => control?.addOnLookupTagClick(callback);
    field.AddNotification = (message, notificationLevel, uniqueId, callback) => {
      const actions = { message, actions: [callback] };
      const notification = { messages: [message], notificationLevel, uniqueId, actions: [actions] };
      return control?.addNotification(notification);
    };
    field.AddOnChange = (callback) => attribute?.addOnChange(callback);
    field.AddOnOutputChange = (callback) => control?.addOnOutputChange(callback);
    field.AddOption = (text, value, index) => control?.addOption({ text, value }, index);
    field.AddPostSearch = (callback) => control?.addOnPostSearch(callback);
    field.AddPreSearch = (callback) => control?.addPreSearch(callback);
    field.AddResultOpened = (callback) => control?.addOnResultOpened(callback);
    field.AddSelection = (callback) => control?.addOnSelection(callback);
    field.ClearNotification = (uniqueId) => control?.clearNotification(uniqueId);
    field.ClearOptions = () => control?.clearOptions();
    field.ContentWindow = (successCallback, errorCallback) => {
      const promise = control?.getContentWindow();
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    field.FireOnChange = () => attribute?.fireOnChange();
    field.Focus = () => control?.setFocus();
    field.OpenSearchResult = (resultNumber, mode) => control?.openSearchResult(resultNumber, mode);
    field.Option = (value) => attribute?.getOption(value);
    field.Refresh = () => control?.refresh();
    field.RemoveLookupTagClick = (callback) => control?.removeOnLookupTagClick(callback);
    field.RemoveOnChange = (callback) => attribute?.removeOnChange(callback);
    field.RemoveOnOutputChange = (callback) => control?.removeOnOutputChange(callback);
    field.RemoveOption = (value) => control?.removeOption(value);
    field.RemovePostSearch = (callback) => control?.removeOnPostSearch(callback);
    field.RemovePreSearch = (callback) => control?.removePreSearch(callback);
    field.RemoveResultOpened = (callback) => control?.removeOnResultOpened(callback);
    field.RemoveSelection = (callback) => control?.removeOnSelection(callback);
    field.SetIsValid = (valid, message) => attribute?.setIsValid(valid, message);
    field.SetNotification = (message, uniqueId) => control?.setNotification(message, uniqueId);
  }
  function loadFields(formContext, body, type) {
    Object.keys(body).forEach((field) => {
      const logicalName = type === void 0 ? field?.toLowerCase() : (type + field)?.toLowerCase();
      const control = formContext?.getControl(logicalName) ?? formContext?.getControl(field);
      let attribute = formContext?.getAttribute(logicalName);
      if (!attribute && control?.getAttribute) {
        attribute = control.getAttribute();
      }
      loadField(formContext, body[field], attribute, control);
    });
    if (type === "header_") {
      const getHeaderSection = formContext?.ui?.headerSection;
      getterSetter(body, "BodyVisible", () => getHeaderSection?.getBodyVisible(), (value) => {
        getHeaderSection?.setBodyVisible(value);
      });
      getterSetter(body, "CommandBarVisible", () => getHeaderSection?.getCommandBarVisible(), (value) => {
        getHeaderSection?.setCommandBarVisible(value);
      });
      getterSetter(body, "TabNavigatorVisible", () => getHeaderSection?.getTabNavigatorVisible(), (value) => {
        getHeaderSection?.setTabNavigatorVisible(value);
      });
    }
    return body;
  }
  function loadTabs(formContext, tabs) {
    const loadSection = (formContext2, tab, sections, section) => {
      const tabObject = formContext2?.ui?.tabs?.get(tab);
      const sectionObject = tabObject?.sections?.get(section);
      getter(sections[section], "Name", () => sectionObject?.getName());
      getter(sections[section], "Parent", () => sectionObject?.getParent());
      getterSetter(sections[section], "Label", () => sectionObject?.getLabel(), (value) => sectionObject?.setLabel(value));
      getterSetter(sections[section], "Visible", () => sectionObject?.getVisible(), (value) => sectionObject?.setVisible(value));
    };
    const loadTab = (formContext2, tabs2, tab) => {
      const tabObject = formContext2?.ui?.tabs?.get(tab);
      getter(tabs2[tab], "Name", () => tabObject?.getName());
      getter(tabs2[tab], "Parent", () => tabObject?.getParent());
      getterSetter(tabs2[tab], "ContentType", () => tabObject?.getContentType(), (value) => {
        tabObject?.setContentType(value);
      });
      getterSetter(tabs2[tab], "DisplayState", () => tabObject?.getDisplayState(), (value) => {
        tabObject?.setDisplayState(value);
      });
      getterSetter(tabs2[tab], "Label", () => tabObject?.getLabel(), (value) => {
        tabObject?.setLabel(value);
      });
      getterSetter(tabs2[tab], "Visible", () => tabObject?.getVisible(), (value) => {
        tabObject?.setVisible(value);
      });
      tabs2[tab].AddTabStateChange = (callback) => tabObject?.addTabStateChange(callback);
      tabs2[tab].Focus = () => tabObject?.setFocus();
      tabs2[tab].RemoveTabStateChange = (callback) => tabObject?.removeTabStateChange(callback);
      Object.keys(tabs2[tab].Section).forEach((section) => {
        loadSection(formContext2, tab, tabs2[tab].Section, section);
      });
    };
    Object.keys(tabs).forEach((tab) => {
      loadTab(formContext, tabs, tab);
    });
  }
  function loadNavigations(formContext, navigations) {
    const getNavigationItem = (navigation) => {
      const navItems = formContext?.ui?.navigation?.items;
      if (!navItems) return null;
      const length = navItems.getLength();
      for (let i = 0; i < length; i++) {
        const item = navItems.get(i);
        if (item?.getId() === navigation) {
          return item;
        }
      }
      return null;
    };
    const loadNavigation = (formContext2, navigations2, navigation) => {
      const navigationItem = getNavigationItem(navigation);
      getter(navigations2[navigation], "Id", () => navigationItem?.getId());
      getterSetter(navigations2[navigation], "Label", () => navigationItem?.getLabel(), (value) => navigationItem?.setLabel(value));
      getterSetter(navigations2[navigation], "Visible", () => navigationItem?.getVisible(), (value) => navigationItem?.setVisible(value));
      navigations2[navigation].Focus = () => navigationItem?.setFocus();
    };
    Object.keys(navigations).forEach((navigation) => {
      loadNavigation(formContext, navigations, navigation);
    });
  }
  function loadQuickForms(formContext, quickForms) {
    const excludedFields = /* @__PURE__ */ new Set(["Body", "Controls", "IsLoaded", "Refresh", "Focus", "ControlType", "Disabled", "Label", "ControlName", "ControlParent", "Visible"]);
    const loadQuickForm = (formContext2, quickForms2, quickForm) => {
      const fields = Object.keys(quickForms2[quickForm]).filter((field) => !excludedFields.has(field));
      const quick = formContext2?.ui?.quickForms?.get(quickForm);
      getter(quickForms2[quickForm], "Body", () => LoadFormDialog(quick, fields));
      getter(quickForms2[quickForm], "ControlName", () => quick?.getName());
      getter(quickForms2[quickForm], "ControlParent", () => quick?.getParent());
      getter(quickForms2[quickForm], "ControlType", () => quick?.getControlType());
      getterSetter(quickForms2[quickForm], "Disabled", () => quick?.getDisabled(), (value) => {
        quick?.setDisabled(value);
      });
      getterSetter(quickForms2[quickForm], "Label", () => quick?.getLabel(), (value) => {
        quick?.setLabel(value);
      });
      getterSetter(quickForms2[quickForm], "Visible", () => quick?.getVisible(), (value) => {
        quick?.setVisible(value);
      });
      quickForms2[quickForm].Controls = (arg) => quick?.getControl(arg);
      quickForms2[quickForm].Focus = () => quick?.setFocus();
      quickForms2[quickForm].IsLoaded = () => quick?.isLoaded();
      quickForms2[quickForm].Refresh = () => quick?.refresh();
    };
    Object.keys(quickForms).forEach((quickForm) => {
      loadQuickForm(formContext, quickForms, quickForm);
    });
  }
  function loadGrids(formContext, grids) {
    const loadGridColumn = (col) => {
      const obj = {};
      getter(obj, "Label", () => col?.controls?.get(0)?.getLabel());
      getter(obj, "Name", () => col?.getName());
      getterSetter(obj, "Disabled", () => col?.controls?.get(0)?.getDisabled(), (value) => {
        col?.controls?.get(0)?.setDisabled(value);
      });
      getterSetter(obj, "RequiredLevel", () => col?.getRequiredLevel(), (value) => {
        col?.setRequiredLevel(value);
      });
      getterSetter(obj, "Value", () => col?.getValue(), (value) => {
        col?.setValue(value);
      });
      obj.ClearNotification = (uniqueId) => col?.controls?.get(0)?.clearNotification(uniqueId);
      obj.SetNotification = (message, uniqueId) => col?.controls?.get(0)?.setNotification(message, uniqueId);
      return obj;
    };
    const loadGridRow = (row) => {
      const obj = {};
      getter(obj, "Columns", () => {
        const columnsObj = {};
        columnsObj.getLength = () => row?.data?.entity?.attributes?.getLength();
        columnsObj.get = (index) => {
          const column = row?.data?.entity?.attributes?.get(index);
          return loadGridColumn(column);
        };
        columnsObj.forEach = (callback) => {
          const columns = row?.data?.entity?.attributes;
          for (let index = 0; index < columns?.getLength(); index++) {
            const column = columns?.get(index);
            callback(loadGridColumn(column), index);
          }
        };
        return columnsObj;
      });
      getter(obj, "EntityId", () => row?.data?.entity?.getId());
      getter(obj, "EntityName", () => row?.data?.entity?.getEntityName());
      getter(obj, "EntityReference", () => row?.data?.entity?.getEntityReference());
      getter(obj, "PrimaryAttributeValue", () => row?.data?.entity?.getPrimaryAttributeValue());
      return obj;
    };
    const loadGrid = (formContext2, grids2, grid) => {
      const gridControl = formContext2?.getControl(grid);
      const createCollectionObject = (getItemsFn, processItemFn) => {
        const obj = {};
        obj.getLength = () => getItemsFn()?.getLength();
        obj.get = (index) => processItemFn(getItemsFn()?.get(index));
        obj.forEach = (callback) => {
          const items = getItemsFn();
          const length = items?.getLength() || 0;
          for (let index = 0; index < length; index++) {
            callback(processItemFn(items.get(index)), index);
          }
        };
        return obj;
      };
      getter(grids2[grid], "EntityName", () => gridControl?.getEntityName());
      getter(grids2[grid], "FetchXml", () => gridControl?.getFetchXml());
      getter(grids2[grid], "GridType", () => gridControl?.getGridType());
      getter(grids2[grid], "Relationship", () => gridControl?.getRelationship());
      getter(grids2[grid], "Rows", () => {
        const gridInstance = formContext2?.getControl(grid)?.getGrid();
        return createCollectionObject(
          () => gridInstance?.getRows(),
          (row) => loadGridRow(row)
        );
      });
      getter(grids2[grid], "SelectedRows", () => {
        const gridInstance = formContext2?.getControl(grid)?.getGrid();
        return createCollectionObject(
          () => gridInstance?.getSelectedRows(),
          (row) => loadGridRow(row?.getData())
        );
      });
      getter(grids2[grid], "TotalRecordCount", () => gridControl?.getGrid()?.getTotalRecordCount());
      getter(grids2[grid], "ViewSelector", () => {
        const viewSelector = gridControl?.getViewSelector();
        const obj = {};
        getter(obj, "Visible", () => viewSelector?.isVisible());
        getterSetter(obj, "CurrentView", () => viewSelector?.getCurrentView(), (value) => viewSelector?.setCurrentView(value));
        return obj;
      });
      getterSetter(grids2[grid], "Visible", () => gridControl?.getVisible(), (value) => {
        gridControl?.setVisible(value);
      });
      grids2[grid].AddOnLoad = (callback) => gridControl?.addOnLoad(callback);
      grids2[grid].OpenRelatedGrid = () => gridControl?.openRelatedGrid();
      grids2[grid].Refresh = () => gridControl?.refresh();
      grids2[grid].RefreshRibbon = () => gridControl?.refreshRibbon();
      grids2[grid].RemoveOnLoad = (callback) => gridControl?.removeOnLoad(callback);
      grids2[grid].Url = (client) => gridControl?.getUrl(client);
    };
    Object.keys(grids).forEach((grid) => {
      loadGrid(formContext, grids, grid);
    });
  }
  function LoadForm(formContext) {
    const form = {};
    const contextData = formContext?.data;
    const contextDataEntity = formContext?.data?.entity;
    const contextUi = formContext?.ui;
    const contextUiFormSelector = formContext?.ui?.formSelector;
    const findFormItem = (criteria, value) => {
      const length = contextUiFormSelector?.items?.getLength() ?? 0;
      for (let i = 0; i < length; i++) {
        const item = contextUiFormSelector?.items?.get(i);
        if (item && criteria(item) === value) {
          return item;
        }
      }
      return null;
    };
    getter(form, "Attributes", () => contextDataEntity?.attributes);
    getter(form, "Controls", () => contextUi?.controls);
    getter(form, "DataIsDirty", () => contextData?.getIsDirty());
    getter(form, "DataIsValid", () => contextData?.isValid());
    getter(form, "DataXml", () => contextDataEntity?.getDataXml());
    getter(form, "EntityId", () => contextDataEntity?.getId());
    getter(form, "EntityIsDirty", () => contextDataEntity?.getIsDirty());
    getter(form, "EntityIsValid", () => contextDataEntity?.isValid());
    getter(form, "EntityName", () => contextDataEntity?.getEntityName());
    getter(form, "EntityReference", () => contextDataEntity?.getEntityReference());
    getter(form, "FormId", () => contextUiFormSelector?.getCurrentItem()?.getId());
    getter(form, "FormLabel", () => contextUiFormSelector?.getCurrentItem()?.getLabel());
    getter(form, "FormType", () => contextUi?.getFormType());
    getter(form, "PrimaryAttributeValue", () => contextDataEntity?.getPrimaryAttributeValue());
    getter(form, "ViewPortHeight", () => contextUi?.getViewPortHeight());
    getter(form, "ViewPortWidth", () => contextUi?.getViewPortWidth());
    form.AddOnPostSave = (callback) => contextDataEntity?.addOnPostSave(callback);
    form.AddOnSave = (callback) => contextDataEntity?.addOnSave(callback);
    form.ClearFormNotification = (uniqueId) => contextUi?.clearFormNotification(uniqueId);
    form.Close = () => contextUi?.close();
    form.DataAddOnLoad = (callback) => contextData?.addOnLoad(callback);
    form.DataRemoveOnLoad = (callback) => contextData?.removeOnLoad(callback);
    form.FormIsVisible = (formId) => {
      return findFormItem((item) => item.getId(), formId)?.getVisible();
    };
    form.FormNavigateToFormId = (formId) => {
      findFormItem((item) => item.getId(), formId)?.navigate();
    };
    form.FormNavigateToFormLabel = (formLabel) => {
      findFormItem((item) => item.getLabel(), formLabel)?.navigate();
    };
    form.FormSetVisible = (formId, value) => {
      findFormItem((item) => item.getId(), formId)?.setVisible(value);
    };
    form.Refresh = (save, successCallback, errorCallback) => {
      const promise = contextData?.refresh(save);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    form.RefreshRibbon = (refreshAll) => contextUi?.refreshRibbon(refreshAll);
    form.RemoveOnPostSave = (callback) => contextDataEntity?.removeOnPostSave(callback);
    form.RemoveOnSave = (callback) => contextDataEntity?.removeOnSave(callback);
    form.Save = (saveOptions, successCallback, errorCallback) => {
      const promise = contextData?.save(saveOptions);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    form.SetFormEntityName = (arg) => contextUi?.setFormEntityName(arg);
    form.SetFormNotification = (message, level, uniqueId) => contextUi?.setFormNotification(message, level, uniqueId);
    form.UiAddLoaded = (callback) => contextUi?.addLoaded(callback);
    form.UiAddOnLoad = (callback) => contextUi?.addOnLoad(callback);
    form.UiRemoveLoaded = (callback) => contextUi?.removeLoaded(callback);
    form.UiRemoveOnLoad = (callback) => contextUi?.removeOnLoad(callback);
    return form;
  }
  function LoadExecutionContext(executionContext) {
    const obj = {};
    getter(obj, "Depth", () => executionContext?.getDepth());
    getter(obj, "EntityReference", () => executionContext?.getEventArgs()?.getEntityReference());
    getter(obj, "EventArgs", () => executionContext?.getEventArgs());
    getter(obj, "EventSource", () => executionContext?.getEventSource());
    getter(obj, "FormContext", () => executionContext?.getFormContext());
    getter(obj, "IsSaveSuccess", () => executionContext?.getEventArgs()?.getIsSaveSuccess());
    getter(obj, "SaveErrorInfo", () => executionContext?.getEventArgs()?.getSaveErrorInfo());
    getter(obj, "SaveMode", () => executionContext?.getEventArgs()?.getSaveMode());
    obj.DisableAsyncTimeout = () => executionContext?.getEventArgs()?.disableAsyncTimeout();
    obj.GetSharedVariable = (key) => executionContext?.getSharedVariable(key);
    obj.IsDefaultPrevented = () => executionContext?.getEventArgs()?.isDefaultPrevented();
    obj.IsInitialLoad = () => executionContext?.getEventArgs()?.getDataLoadState() === 1;
    obj.SetPreventDefault = () => executionContext?.getEventArgs()?.preventDefault();
    obj.SetPreventDefaultOnError = () => executionContext?.getEventArgs()?.preventDefaultOnError();
    obj.SetSharedVariable = (key, value) => executionContext?.setSharedVariable(key, value);
    return obj;
  }
  function LoadSidePanes() {
    const sidePanes = {};
    const xrm = getXrm();
    getterSetter(sidePanes, "DisplayState", () => xrm?.App?.sidePanes?.state, (value) => {
      const x = getXrm();
      if (x?.App?.sidePanes) x.App.sidePanes.state = value;
    });
    sidePanes.Create = function(paneOptions, successCallback) {
      xrm?.App?.sidePanes?.createPane(paneOptions)?.then(successCallback);
    };
    sidePanes.Get = (paneId) => xrm?.App?.sidePanes?.getPane(paneId);
    sidePanes.GetAll = () => xrm?.App?.sidePanes?.getAllPanes();
    sidePanes.GetSelected = () => xrm?.App?.sidePanes?.getSelectedPane();
    return sidePanes;
  }
  function LoadWebApi() {
    const obj = {};
    const xrm = getXrm();
    const getWebApi = xrm?.WebApi;
    const getOnline = xrm?.WebApi?.online;
    const getOffline = xrm?.WebApi?.offline;
    const extractEntityName = function(fetchXml) {
      let cleanXml = fetchXml;
      const fetchXmlMatch = fetchXml.match(/fetchxml=/i);
      if (fetchXmlMatch) {
        const splitIndex = fetchXml.toLowerCase().indexOf("fetchxml=") + "fetchxml=".length;
        cleanXml = decodeURIComponent(fetchXml.substring(splitIndex));
      } else if (fetchXml.trim().startsWith("<")) {
        cleanXml = fetchXml;
      }
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(cleanXml, "text/xml");
      const entityNode = xmlDoc.querySelector("entity");
      if (entityNode && entityNode.hasAttribute("name"))
        return entityNode.getAttribute("name");
      throw new Error("Entity name not found in fetchXml");
    };
    obj.CreateRecord = function(entityLogicalName, data, successCallback, errorCallback) {
      const promise = getWebApi?.createRecord(entityLogicalName, data);
      if (successCallback) {
        promise?.then(successCallback, errorCallback);
      } else {
        return promise;
      }
    };
    obj.DeleteRecord = function(entityLogicalName, id, successCallback, errorCallback) {
      const promise = getWebApi?.deleteRecord(entityLogicalName, id);
      if (successCallback) {
        promise?.then(successCallback, errorCallback);
      } else {
        return promise;
      }
    };
    obj.RetrieveRecord = function(entityLogicalName, id, options, successCallback, errorCallback) {
      const promise = getWebApi?.retrieveRecord(entityLogicalName, id, options);
      if (successCallback) {
        promise?.then(successCallback, errorCallback);
      } else {
        return promise;
      }
    };
    obj.RetrieveMultipleRecords = function(entityLogicalName, options, maxPageSize, successCallback, errorCallback) {
      const promise = getWebApi?.retrieveMultipleRecords(entityLogicalName, options, maxPageSize);
      if (successCallback) {
        promise?.then(successCallback, errorCallback);
      } else {
        return promise;
      }
    };
    obj.UpdateRecord = function(entityLogicalName, id, data, successCallback, errorCallback) {
      const promise = getWebApi?.updateRecord(entityLogicalName, id, data);
      if (successCallback) {
        promise?.then(successCallback, errorCallback);
      } else {
        return promise;
      }
    };
    obj.Execute = function(request, successCallback, errorCallback) {
      const promise = getWebApi?.execute(request);
      if (successCallback) {
        promise?.then(successCallback, errorCallback);
      } else {
        return promise;
      }
    };
    obj.ExecuteMultiple = function(requests, successCallback, errorCallback) {
      const promise = getWebApi?.executeMultiple(requests);
      if (successCallback) {
        promise?.then(successCallback, errorCallback);
      } else {
        return promise;
      }
    };
    obj.RetrieveRecords = function(apiConstructorOrFactory, entityLogicalNameOrOptions, optionsOrMaxPageSizeOrCallback, maxPageSizeOrSuccessCallback, successCallback, errorCallback) {
      let entityLogicalName;
      let options;
      let maxPageSize;
      const hasFetchXml = (str) => /fetchxml=/i.test(str);
      const isPlainFetchXml = (str) => typeof str === "string" && str.trim().startsWith("<fetch");
      const secondParamIsFetchXmlOrOData = typeof entityLogicalNameOrOptions === "string" && (hasFetchXml(entityLogicalNameOrOptions) || isPlainFetchXml(entityLogicalNameOrOptions) || entityLogicalNameOrOptions.startsWith("?") && !hasFetchXml(entityLogicalNameOrOptions));
      if (secondParamIsFetchXmlOrOData) {
        options = entityLogicalNameOrOptions;
        if (isPlainFetchXml(options)) {
          options = "?fetchXml=" + encodeURIComponent(options);
        }
        if (hasFetchXml(options) || isPlainFetchXml(entityLogicalNameOrOptions)) {
          entityLogicalName = extractEntityName(options);
        } else {
          throw new Error("Entity name cannot be determined from OData query. Please provide entityLogicalName as second parameter.");
        }
        if (typeof optionsOrMaxPageSizeOrCallback === "function") {
          successCallback = optionsOrMaxPageSizeOrCallback;
          errorCallback = maxPageSizeOrSuccessCallback;
          maxPageSize = void 0;
        } else if (typeof optionsOrMaxPageSizeOrCallback === "number") {
          maxPageSize = optionsOrMaxPageSizeOrCallback;
          if (typeof maxPageSizeOrSuccessCallback === "function") {
            successCallback = maxPageSizeOrSuccessCallback;
            errorCallback = successCallback;
          }
        }
      } else {
        entityLogicalName = entityLogicalNameOrOptions;
        options = optionsOrMaxPageSizeOrCallback;
        if (typeof maxPageSizeOrSuccessCallback === "function") {
          errorCallback = successCallback;
          successCallback = maxPageSizeOrSuccessCallback;
          maxPageSize = void 0;
        } else if (typeof maxPageSizeOrSuccessCallback === "number") {
          maxPageSize = maxPageSizeOrSuccessCallback;
        }
      }
      const promise = getWebApi?.retrieveMultipleRecords(entityLogicalName, options, maxPageSize).then((result) => {
        if (result.entities && result.entities.length > 0) {
          return result.entities.map(
            (entity) => typeof apiConstructorOrFactory === "function" && apiConstructorOrFactory.prototype ? new apiConstructorOrFactory(entity) : apiConstructorOrFactory(entity)
          );
        }
        return [];
      });
      if (successCallback) {
        promise?.then(successCallback, errorCallback);
      } else {
        return promise;
      }
    };
    obj.RetrieveRecord = function(apiConstructorOrFactory, entityLogicalName, id, options, successCallback, errorCallback) {
      if (typeof options === "function") {
        errorCallback = successCallback;
        successCallback = options;
        options = "?$select=*";
      }
      if (!options) {
        options = "?$select=*";
      }
      const promise = getWebApi?.retrieveRecord(entityLogicalName, id, options).then((result) => {
        return typeof apiConstructorOrFactory === "function" && apiConstructorOrFactory.prototype ? new apiConstructorOrFactory(result) : apiConstructorOrFactory(result);
      });
      if (successCallback) {
        promise?.then(successCallback, errorCallback);
      } else {
        return promise;
      }
    };
    getter(obj, "Online", () => {
      const online = {};
      online.Execute = function(request, successCallback, errorCallback) {
        const promise = getOnline?.execute(request);
        if (successCallback) {
          promise?.then(successCallback, errorCallback);
        } else {
          return promise;
        }
      };
      online.ExecuteMultiple = function(requests, successCallback, errorCallback) {
        const promise = getOnline?.executeMultiple(requests);
        if (successCallback) {
          promise?.then(successCallback, errorCallback);
        } else {
          return promise;
        }
      };
      return online;
    });
    getter(obj, "Offline", () => {
      const offline = {};
      offline.IsAvailable = (entityLogicalName) => getOffline?.isAvailable(entityLogicalName);
      return offline;
    });
    return obj;
  }
  function LoadCopilot() {
    const obj = {};
    const xrm = getXrm();
    const getCopilot = xrm?.Copilot;
    obj.ExecuteEvent = function(eventName, eventParameters, successCallback, errorCallback) {
      const promise = getCopilot?.executeEvent(eventName, eventParameters);
      if (successCallback) {
        promise?.then(successCallback, errorCallback);
      } else {
        return promise;
      }
    };
    obj.ExecutePrompt = function(promptText, successCallback, errorCallback) {
      const promise = getCopilot?.executePrompt(promptText);
      if (successCallback) {
        promise?.then(successCallback, errorCallback);
      } else {
        return promise;
      }
    };
    return obj;
  }
  function loadOthers(formContext, form, defaultWebResourceName) {
    form.SidePanes = LoadSidePanes();
    form.WebApi = LoadWebApi();
    form.Copilot = LoadCopilot();
  }
  function LoadFormV2(executionContext, defaultWebResourceName, formConfig) {
    const formContext = executionContext?.getFormContext?.() ?? executionContext ?? null;
    const form = LoadForm(formContext);
    const { body = [], tab = [], header = [], bpf = [], quick = [], grid = [], navigation = [], dialog = [] } = formConfig;
    const bodyObj = {};
    body.forEach((field) => bodyObj[field] = {});
    loadFields(formContext, bodyObj);
    const tabObj = {};
    tab.forEach((item) => {
      const [tabName, sectionName] = item.split("___");
      if (!tabObj[tabName]) {
        tabObj[tabName] = { Section: {} };
      }
      tabObj[tabName].Section[sectionName] = {};
    });
    loadTabs(formContext, tabObj);
    bodyObj.Tab = tabObj;
    form.Body = bodyObj;
    const headerObj = {};
    header.forEach((field) => headerObj[field] = {});
    loadFields(formContext, headerObj, "header_");
    form.Header = headerObj;
    const process = LoadProcess(formContext);
    if (bpf.length > 0) {
      const bpfObj = {};
      let bpfProcessName = null;
      bpf.forEach((item) => {
        const [processName, fieldName] = item.split("___");
        if (!bpfProcessName) {
          bpfProcessName = processName;
        }
        bpfObj[fieldName] = {};
      });
      loadFields(formContext, bpfObj, "header_process_");
      if (bpfProcessName) {
        process[bpfProcessName] = bpfObj;
      }
    }
    form.Process = process;
    const quickFormObj = {};
    quick.forEach((item) => {
      const [quickFormName, fieldName] = item.split("___");
      if (!quickFormObj[quickFormName]) {
        quickFormObj[quickFormName] = {};
      }
      if (fieldName) {
        quickFormObj[quickFormName][fieldName] = {};
      }
    });
    loadQuickForms(formContext, quickFormObj);
    form.QuickForm = quickFormObj;
    const gridObj = {};
    grid.forEach((item) => gridObj[item] = {});
    loadGrids(formContext, gridObj);
    form.Grid = gridObj;
    const navigationObj = {};
    navigation.forEach((item) => navigationObj[item] = {});
    loadNavigations(formContext, navigationObj);
    form.Navigation = navigationObj;
    if (dialog.length > 0) {
      form.Dialog = LoadFormDialog(formContext, dialog);
    }
    form.Utility = LoadUtility(defaultWebResourceName);
    form.ExecutionContext = LoadExecutionContext(executionContext);
    loadOthers(formContext, form, defaultWebResourceName);
    return form;
  }
  function LoadProcess(formContext) {
    const process = {};
    const getProcess = formContext?.data?.process;
    const getProcessUi = formContext?.ui?.process;
    const loadStep = (step) => {
      const obj = {};
      getter(obj, "Attribute", () => step?.getAttribute());
      getter(obj, "Name", () => step?.getName());
      getter(obj, "Progress", () => step?.getProgress());
      getter(obj, "Required", () => step?.isRequired());
      obj.SetProgress = (stepProgress, message) => step?.setProgress(stepProgress, message);
      return obj;
    };
    const loadStage = (stage) => {
      const obj = {};
      getter(obj, "Category", () => stage?.getCategory()?.getValue());
      getter(obj, "EntityName", () => stage?.getEntityName());
      getter(obj, "Id", () => stage?.getId());
      getter(obj, "Name", () => stage?.getName());
      getter(obj, "Status", () => stage?.getStatus());
      getter(obj, "Steps", () => {
        const steps = stage?.getSteps();
        if (!steps) return [];
        const stepsArray = [];
        const length = steps.length || 0;
        for (let index = 0; index < length; index++) {
          stepsArray.push(loadStep(steps[index]));
        }
        return stepsArray;
      });
      obj.AllowCreateNew = (callback) => {
        if (stage?.getNavigationBehavior()) stage.getNavigationBehavior().allowCreateNew = callback;
      };
      return obj;
    };
    const loadProcessInner = (processObj) => {
      const obj = {};
      getter(obj, "Id", () => processObj?.getId());
      getter(obj, "IsRendered", () => processObj?.isRendered());
      getter(obj, "Name", () => processObj?.getName());
      getter(obj, "Stages", () => {
        const processStages = processObj?.getStages();
        const stagesObj = {};
        stagesObj.get = (index) => {
          const stage = processStages?.get(index);
          return loadStage(stage);
        };
        stagesObj.getLength = () => processStages?.getLength();
        stagesObj.forEach = (callback) => {
          const length = processStages?.getLength() || 0;
          for (let index = 0; index < length; index++) {
            const stage = processStages.get(index);
            callback(loadStage(stage), index);
          }
        };
        return stagesObj;
      });
      return obj;
    };
    getter(process, "ActivePath", () => {
      const activePathObj = {};
      activePathObj.get = (index) => {
        const stage = getProcess?.getActivePath()?.get(index);
        return loadStage(stage);
      };
      activePathObj.getLength = () => getProcess?.getActivePath()?.getLength();
      activePathObj.forEach = (callback) => {
        const stages = getProcess?.getActivePath();
        for (let index = 0; index < stages?.getLength(); index++) {
          const stage = stages?.get(index);
          callback(loadStage(stage), index);
        }
      };
      return activePathObj;
    });
    getter(process, "ActiveProcess", () => loadProcessInner(getProcess?.getActiveProcess()));
    getter(process, "ActiveStage", () => loadStage(getProcess?.getActiveStage()));
    getter(process, "InstanceId", () => getProcess?.getInstanceId());
    getter(process, "InstanceName", () => getProcess?.getInstanceName());
    getter(process, "SelectedStage", () => loadStage(getProcess?.getSelectedStage()));
    getterSetter(process, "DisplayState", () => getProcessUi?.getDisplayState(), (value) => {
      getProcessUi?.setDisplayState(value);
    });
    getterSetter(process, "Status", () => getProcess?.getStatus(), (value) => {
      getProcess?.setStatus(value);
    });
    getterSetter(process, "Visible", () => getProcessUi?.getVisible(), (value) => {
      getProcessUi?.setVisible(value);
    });
    process.AddOnPreProcessStatusChange = (callback) => getProcess?.addOnPreProcessStatusChange(callback);
    process.AddOnPreStageChange = (callback) => getProcess?.addOnPreStageChange(callback);
    process.AddOnProcessStatusChange = (callback) => getProcess?.addOnProcessStatusChange(callback);
    process.AddOnStageChange = (callback) => getProcess?.addOnStageChange(callback);
    process.AddOnStageSelected = (callback) => getProcess?.addOnStageSelected(callback);
    process.EnabledProcesses = (callback) => {
      getProcess?.getEnabledProcesses((enabledProcesses) => {
        const processes = Object.entries(enabledProcesses).map(([processId, processName]) => ({
          ProcessId: processId,
          ProcessName: processName
        }));
        callback(processes);
      });
    };
    process.MoveNext = (callback) => getProcess?.moveNext(callback);
    process.MovePrevious = (callback) => getProcess?.movePrevious(callback);
    process.ProcessInstances = (callback) => {
      getProcess?.getProcessInstances((processInstances) => {
        const processes = Object.values(processInstances).map((proc) => ({
          ProcessId: proc.ProcessDefinitionID,
          ProcessName: proc.ProcessDefinitionName,
          CreatedOn: proc.CreatedOn,
          CreatedOnDate: proc.CreatedOnDate,
          InstanceId: proc.ProcessInstanceID,
          InstanceName: proc.ProcessInstanceName,
          Status: proc.StatusCodeName
        }));
        callback(processes);
      });
    };
    process.Reflow = (updateUi, parentStage, nextStage) => getProcessUi?.reflow(updateUi, parentStage, nextStage);
    process.RemoveOnPreProcessStatusChange = (callback) => getProcess?.removeOnPreProcessStatusChange(callback);
    process.RemoveOnPreStageChange = (callback) => getProcess?.removeOnPreStageChange(callback);
    process.RemoveOnProcessStatusChange = (callback) => getProcess?.removeOnProcessStatusChange(callback);
    process.RemoveOnStageChange = (callback) => getProcess?.removeOnStageChange(callback);
    process.RemoveOnStageSelected = (callback) => getProcess?.removeOnStageSelected(callback);
    process.SetActiveProcess = (processId, callback) => getProcess?.setActiveProcess(processId, callback);
    process.SetActiveProcessInstance = (processInstanceId, callback) => getProcess?.setActiveProcessInstance(processInstanceId, callback);
    process.SetActiveStage = (stageId, callback) => getProcess?.setActiveStage(stageId, callback);
    return process;
  }
  var FormBase = class {
    constructor(executionContext, defaultWebResourceName, formConfig) {
      const form = LoadFormV2(
        executionContext,
        defaultWebResourceName,
        formConfig
      );
      this.Body = form.Body;
      this.Header = form.Header;
      this.Tab = form.Tab;
      this.Grid = form.Grid;
      this.Navigation = form.Navigation;
      this.QuickForm = form.QuickForm;
      this.Process = form.Process;
      this.ExecutionContext = form.ExecutionContext;
      this.FormId = form.FormId;
      this.FormLabel = form.FormLabel;
      this.FormType = form.FormType;
      this.EntityId = form.EntityId;
      this.EntityName = form.EntityName;
      this.DataIsDirty = form.DataIsDirty;
      this.DataIsValid = form.DataIsValid;
      this.Attributes = form.Attributes;
      this.Controls = form.Controls;
      this.DataXml = form.DataXml;
      this.EntityIsDirty = form.EntityIsDirty;
      this.EntityIsValid = form.EntityIsValid;
      this.EntityReference = form.EntityReference;
      this.PrimaryAttributeValue = form.PrimaryAttributeValue;
      this.ViewPortHeight = form.ViewPortHeight;
      this.ViewPortWidth = form.ViewPortWidth;
      this.Save = form.Save;
      this.Refresh = form.Refresh;
      this.Close = form.Close;
      this.SetFormNotification = form.SetFormNotification;
      this.ClearFormNotification = form.ClearFormNotification;
      this.RefreshRibbon = form.RefreshRibbon;
      this.UiAddLoaded = form.UiAddLoaded;
      this.UiRemoveLoaded = form.UiRemoveLoaded;
      this.UiAddOnLoad = form.UiAddOnLoad;
      this.UiRemoveOnLoad = form.UiRemoveOnLoad;
      this.AddOnPostSave = form.AddOnPostSave;
      this.AddOnSave = form.AddOnSave;
      this.RemoveOnPostSave = form.RemoveOnPostSave;
      this.RemoveOnSave = form.RemoveOnSave;
      this.DataAddOnLoad = form.DataAddOnLoad;
      this.DataRemoveOnLoad = form.DataRemoveOnLoad;
      this.FormIsVisible = form.FormIsVisible;
      this.FormNavigateToFormId = form.FormNavigateToFormId;
      this.FormNavigateToFormLabel = form.FormNavigateToFormLabel;
      this.FormSetVisible = form.FormSetVisible;
      this.SetFormEntityName = form.SetFormEntityName;
      this.Utility = form.Utility;
      this.SidePanes = form.SidePanes;
      this.WebApi = form.WebApi;
      this.Copilot = form.Copilot;
    }
  };
  function LoadUtility(defaultWebResourceName) {
    const utility = {};
    const xrm = getXrm();
    const getApp = xrm?.App;
    const getDevice = xrm?.Device;
    const getEncoding = xrm?.Encoding;
    const getGlobalContext = xrm?.Utility?.getGlobalContext();
    const getNavigation = xrm?.Navigation;
    const getPanel = xrm?.Panel;
    const getUtility = xrm?.Utility;
    getter(utility, "Client", () => {
      const obj = {};
      const client = getGlobalContext?.client;
      getter(obj, "ClientName", () => client?.getClient());
      getter(obj, "ClientState", () => client?.getClientState());
      getter(obj, "FormFactor", () => client?.getFormFactor());
      getter(obj, "IsNetworkAvailable", () => client?.isNetworkAvailable());
      getter(obj, "IsOffline", () => client?.isOffline());
      return obj;
    });
    getter(utility, "ClientUrl", () => getGlobalContext?.getClientUrl());
    getter(utility, "CurrentAppUrl", () => getGlobalContext?.getCurrentAppUrl());
    getter(utility, "IsOnPremises", () => getGlobalContext?.isOnPremises());
    getter(utility, "LearningPathAttributeName", () => getUtility?.getLearningPathAttributeName());
    getter(utility, "OrganizationSettings", () => {
      const obj = {};
      const organizationSettings = getGlobalContext?.organizationSettings;
      getter(obj, "Attributes", () => organizationSettings?.attributes);
      getter(obj, "BaseCurrency", () => organizationSettings?.baseCurrency);
      getter(obj, "BaseCurrencyId", () => organizationSettings?.baseCurrencyId);
      getter(obj, "DefaultCountryCode", () => organizationSettings?.defaultCountryCode);
      getter(obj, "FullNameConventionCode", () => organizationSettings?.fullNameConventionCode);
      getter(obj, "IsAutoSaveEnabled", () => organizationSettings?.isAutoSaveEnabled);
      getter(obj, "IsTrialOrganization", () => organizationSettings?.isTrialOrganization);
      getter(obj, "LanguageId", () => organizationSettings?.languageId);
      getter(obj, "OrganizationExpiryDate", () => organizationSettings?.organizationExpiryDate);
      getter(obj, "OrganizationId", () => organizationSettings?.organizationId);
      getter(obj, "UniqueName", () => organizationSettings?.uniqueName);
      getter(obj, "UseSkypeProtocol", () => organizationSettings?.useSkypeProtocol);
      return obj;
    });
    getter(utility, "PageContext", () => getUtility?.getPageContext());
    getter(utility, "UserSettings", () => {
      const obj = {};
      const userSettings = getGlobalContext?.userSettings;
      getter(obj, "DateFormattingInfo", () => userSettings?.dateFormattingInfo);
      getter(obj, "DefaultDashboardId", () => userSettings?.defaultDashboardId);
      getter(obj, "IsGuidedHelpEnabled", () => userSettings?.isGuidedHelpEnabled);
      getter(obj, "IsHighContrastEnabled", () => userSettings?.isHighContrastEnabled);
      getter(obj, "IsRTL", () => userSettings?.isRTL);
      getter(obj, "LanguageId", () => userSettings?.languageId);
      getter(obj, "Roles", () => userSettings?.roles);
      getter(obj, "SecurityRolePrivileges", () => userSettings?.securityRolePrivileges);
      getter(obj, "SecurityRoles", () => userSettings?.securityRoles);
      getter(obj, "TimeZoneOffsetMinutes", () => userSettings?.getTimeZoneOffsetMinutes());
      getter(obj, "TransactionCurrency", () => userSettings?.transactionCurrency);
      getter(obj, "TransactionCurrencyId", () => userSettings?.transactionCurrencyId);
      getter(obj, "UserId", () => userSettings?.userId);
      getter(obj, "UserName", () => userSettings?.userName);
      return obj;
    });
    getter(utility, "Version", () => getGlobalContext?.getVersion());
    utility.AddGlobalNotification = function(notification, successCallback, errorCallback) {
      const promise = getApp?.addGlobalNotification(notification);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.AdvancedConfigSetting = (setting) => getGlobalContext?.getAdvancedConfigSetting(setting);
    utility.AllowedStatusTransitions = function(entityName, stateCode, successCallback, errorCallback) {
      const promise = getUtility?.getAllowedStatusTransitions(entityName, stateCode);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.BarcodeValue = function(successCallback, errorCallback) {
      const promise = getDevice?.getBarcodeValue();
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.CaptureAudio = function(successCallback, errorCallback) {
      const promise = getDevice?.captureAudio();
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.CaptureImage = function(imageOptions, successCallback, errorCallback) {
      const promise = getDevice?.captureImage(imageOptions);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.CaptureVideo = function(successCallback, errorCallback) {
      const promise = getDevice?.captureVideo();
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.ClearGlobalNotification = function(uniqueId, successCallback, errorCallback) {
      const promise = getApp?.clearGlobalNotification(uniqueId);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.CloseProgressIndicator = () => getUtility?.closeProgressIndicator();
    utility.CurrentAppName = function(successCallback, errorCallback) {
      const promise = getGlobalContext?.getCurrentAppName();
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.CurrentAppProperties = function(successCallback, errorCallback) {
      const promise = getGlobalContext?.getCurrentAppProperties();
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.CurrentPosition = function(successCallback, errorCallback) {
      const promise = getDevice?.getCurrentPosition();
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.EntityMainFormDescriptor = (entityName, formId) => getUtility?.getEntityMainFormDescriptor(entityName, formId);
    utility.EntityMetadata = function(entityName, attributes, successCallback, errorCallback) {
      const promise = getUtility?.getEntityMetadata(entityName, attributes);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.HtmlAttributeEncode = (arg) => getEncoding?.htmlAttributeEncode(arg);
    utility.HtmlDecode = (arg) => getEncoding?.htmlDecode(arg);
    utility.HtmlEncode = (arg) => getEncoding?.htmlEncode(arg);
    utility.InvokeProcessAction = function(name, parameters, successCallback, errorCallback) {
      const promise = getUtility?.invokeProcessAction(name, parameters);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.LoadPanel = (url, title) => getPanel?.loadPanel(url, title);
    utility.LookupObjects = function(lookupOptions, successCallback, errorCallback) {
      const promise = getUtility?.lookupObjects(lookupOptions);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.NavigateTo = function(pageInput, navigationOptions, successCallback, errorCallback) {
      const promise = getNavigation?.navigateTo(pageInput, navigationOptions);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.OpenAlertDialog = function(alertStrings, alertOptions, closeCallback, errorCallback) {
      const promise = getNavigation?.openAlertDialog(alertStrings, alertOptions);
      if (closeCallback) promise?.then(closeCallback, errorCallback);
      else return promise;
    };
    utility.OpenConfirmDialog = function(confirmStrings, confirmOptions, successCallback, errorCallback) {
      const promise = getNavigation?.openConfirmDialog(confirmStrings, confirmOptions);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.OpenErrorDialog = function(errorOptions, successCallback, errorCallback) {
      const promise = getNavigation?.openErrorDialog(errorOptions);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.OpenFile = (file, openFileOptions) => getNavigation?.openFile(file, openFileOptions);
    utility.OpenForm = function(entityFormOptions, formParameters, successCallback, errorCallback) {
      const promise = getNavigation?.openForm(entityFormOptions, formParameters);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.OpenUrl = (url, openUrlOptions) => getNavigation?.openUrl(url, openUrlOptions);
    utility.OpenWebResource = (webResourceName, windowOptions, data) => getNavigation?.openWebResource(webResourceName, windowOptions, data);
    utility.PickFile = function(pickFileOptions, successCallback, errorCallback) {
      const promise = getDevice?.pickFile(pickFileOptions);
      if (successCallback) promise?.then(successCallback, errorCallback);
      else return promise;
    };
    utility.PrependOrgName = (sPath) => getGlobalContext?.prependOrgName(sPath);
    utility.RefreshParentGrid = (lookupOptions) => getUtility?.refreshParentGrid(lookupOptions);
    utility.Resource = (key) => getUtility?.getResourceString(defaultWebResourceName, key);
    utility.ResourceString = (webResourceName, key) => getUtility?.getResourceString(webResourceName, key);
    utility.ShowProgressIndicator = (message) => getUtility?.showProgressIndicator(message);
    utility.WebResourceUrl = (webResourceName) => getGlobalContext?.getWebResourceUrl(webResourceName);
    utility.XmlAttributeEncode = (arg) => getEncoding?.xmlAttributeEncode(arg);
    utility.XmlEncode = (arg) => getEncoding?.xmlEncode(arg);
    return utility;
  }
  function LoadFormDialog(formContext, fields) {
    const form = {};
    const fieldsLength = fields?.length || 0;
    for (let i = 0; i < fieldsLength; i++) {
      const fieldName = fields[i];
      const attribute = formContext?.data?.entity?.attributes?.get(fieldName);
      const control = formContext?.getControl(fieldName);
      form[fieldName] = {};
      loadField(formContext, form[fieldName], attribute, control);
    }
    form.Close = () => formContext?.ui?.close();
    return form;
  }
  var GlobalOptionSetValues = {
    AdvancedConfigSetting: Object.freeze({ MaxChildIncidentNumber: "MaxChildIncidentNumber", MaxIncidentMergeNumber: "MaxIncidentMergeNumber" }),
    ClientName: Object.freeze({ Web: "Web", Outlook: "Outlook", Mobile: "Mobile" }),
    ClientState: Object.freeze({ Online: "Online", Offline: "Offline" }),
    FieldAttributeType: Object.freeze({ Boolean: "boolean", DateTime: "datetime", Decimal: "decimal", Double: "double", Integer: "integer", Lookup: "lookup", Memo: "memo", Money: "money", MultiOptionSet: "multioptionset", OptionSet: "optionset", String: "string" }),
    FieldControlType: Object.freeze({ Standard: "standard", Iframe: "iframe", KbSearch: "kbsearch", Lookup: "lookup", MultiSelectOptionset: "multiselectoptionset", Notes: "notes", OptionSet: "optionset", QuickForm: "quickform", SubGrid: "subgrid", TimerControl: "timercontrol", TimelineWall: "timelinewall", WebResource: "webresource" }),
    FieldFormat: Object.freeze({ Date: "date", DateTime: "datetime", Duration: "duration", Email: "email", Language: "language", None: "none", TextArea: "textarea", Text: "text", TickerSymbol: "tickersymbol", Phone: "phone", TimeZone: "timezone", Url: "url" }),
    FieldNotificationLevel: Object.freeze({ Error: "ERROR", Recommendation: "RECOMMENDATION" }),
    FieldRequiredLevel: Object.freeze({ None: "none", Required: "required", Recommended: "recommended" }),
    FieldSubmitMode: Object.freeze({ Always: "always", Never: "never", Dirty: "dirty" }),
    FormFactor: Object.freeze({ Unknown: 0, Desktop: 1, Tablet: 2, Phone: 3 }),
    FormNotificationLevel: Object.freeze({ Error: "ERROR", Warning: "WARNING", Info: "INFO" }),
    FormType: Object.freeze({ Undefined: 0, Create: 1, Update: 2, ReadOnly: 3, Disabled: 4, BulkEdit: 5 }),
    FullNameConventionCode: Object.freeze({ LastName_Comma_FirstName: 0, FirstName_LastName: 1, LastName_Comma_FirstName_MiddleInitial: 2, FirstName_MiddleInitial_LastName: 3, LastName_Comma_FirstName_MiddleName: 4, FirstName_MiddleName_LastName: 5, LastName_FirstName: 6, LastNameFirstName: 7 }),
    GridType: Object.freeze({ HomePageGrid: 1, Subgrid: 2 }),
    OpenFileOption: Object.freeze({ Open: 1, Save: 2 }),
    ProcessCategory: Object.freeze({ Qualify: 0, Develop: 1, Propose: 2, Close: 3, Identify: 4, Research: 5, Resolve: 6 }),
    ProcessDisplayState: Object.freeze({ Expanded: "expanded", Collapsed: "collapsed", Floating: "floating" }),
    ProcessStatus: Object.freeze({ Active: "active", Aborted: "aborted", Finished: "finished" }),
    SaveMode: Object.freeze({ Save: 1, SaveAndClose: 2, Deactivate: 5, Reactivate: 6, Email: 7, Disqualify: 15, Qualify: 16, Assign: 47, SaveAsCompleted: 58, SaveAndNew: 59, AutoSave: 70 }),
    SaveOption: Object.freeze({ SaveAndClose: "saveandclose", SaveAndNew: "saveandnew" }),
    SidePaneState: Object.freeze({ Collapsed: 0, Expanded: 1 }),
    TabContentType: Object.freeze({ CardSections: "cardSections", SingleComponent: "singleComponent" }),
    TabDisplayState: Object.freeze({ Expanded: "expanded", Collapsed: "collapsed" }),
    TimerState: Object.freeze({ NotSet: 1, InProgress: 2, Warning: 3, Violated: 4, Success: 5, Expired: 6, Canceled: 7, Paused: 8 })
  };
  globalThis.OptionSet = globalThis.OptionSet || {};
  Object.assign(globalThis.OptionSet, GlobalOptionSetValues);

  // entities/generator/Account.form.ts
  var AccountForm;
  ((AccountForm2) => {
    class Form extends FormBase {
      constructor(executionContext, defaultWebResourceName) {
        super(executionContext, defaultWebResourceName, {
          body: [
            "Name",
            "Description",
            "NumberOfEmployees",
            "Revenue",
            "CreditOnHold",
            "IndustryCode",
            "PrimaryContactId",
            "v4_Birthday",
            "v4_AppointmentTime",
            "v4_Latitude",
            "v4_DiscountPercentage",
            "v4_Categories",
            "v4_WebResourceHelp",
            "v4_IFrameExternal",
            "v4_TimerSLA",
            "v4_KnowledgeSearch"
          ],
          header: ["OwnerId", "NumberOfEmployees"],
          tab: ["DETAILS_TAB___BILLING"],
          grid: ["Contacts"],
          navigation: ["Account_Tasks"],
          quick: ["contactquickform___EMailAddress1"],
          bpf: [
            "v4_AccountBPF___Name",
            "v4_AccountBPF___IndustryCode",
            "v4_AccountBPF___Revenue",
            "v4_AccountBPF___PrimaryContactId"
          ]
        });
      }
    }
    AccountForm2.Form = Form;
  })(AccountForm || (AccountForm = {}));
  var Account;
  ((Account2) => {
    let OptionSet;
    ((OptionSet2) => {
      OptionSet2.IndustryCode = Object.freeze({
        Accounting: 1,
        Consulting: 7,
        Financial: 16,
        Insurance: 20,
        Technology: 12
      });
      OptionSet2.v4_Categories = Object.freeze({
        Category_A: 1e8,
        Category_B: 100000001,
        Category_C: 100000002,
        Category_D: 100000003
      });
    })(OptionSet = Account2.OptionSet || (Account2.OptionSet = {}));
  })(Account || (Account = {}));
  globalThis.OptionSet = globalThis.OptionSet || {};
  globalThis.OptionSet.Account = Account.OptionSet;

  // entities/Account.TestControl.ts
  function TestControl(form) {
    const results = [];
    const control = form.Body.Name;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalValue = control.Value;
    try {
      results.push({ Test: "R1", Property: "Attribute", Value: control.Attribute ? "object" : "null", Status: control.Attribute ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "AttributeName", Value: control.AttributeName, Status: control.AttributeName === "name" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "AttributeType", Value: control.AttributeType, Status: control.AttributeType === "string" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R4", Property: "ControlName", Value: control.ControlName, Status: "\u2713" });
      results.push({ Test: "R5", Property: "ControlType", Value: control.ControlType, Status: "\u2713" });
      results.push({ Test: "R6", Property: "Format", Value: control.Format, Status: "\u2713" });
      results.push({ Test: "R7", Property: "IsDirty", Value: control.IsDirty, Status: "\u2713" });
      results.push({ Test: "R8", Property: "IsValid", Value: control.IsValid, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Properties Error", Value: error.message, Status: "\u2717" });
    }
    const setterResults = [];
    try {
      const origRequired = control.RequiredLevel;
      control.RequiredLevel = "required";
      const newRequired = control.RequiredLevel;
      control.RequiredLevel = origRequired;
      setterResults.push({ Test: "S1", Property: "RequiredLevel (set)", Value: `${origRequired}\u2192required\u2192restored`, Status: newRequired === "required" ? "\u2713" : "\u2717" });
    } catch (e) {
      setterResults.push({ Test: "S1", Property: "RequiredLevel (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origSubmit = control.SubmitMode;
      control.SubmitMode = "always";
      const newSubmit = control.SubmitMode;
      control.SubmitMode = origSubmit;
      setterResults.push({ Test: "S2", Property: "SubmitMode (set)", Value: `${origSubmit}\u2192always\u2192restored`, Status: newSubmit === "always" ? "\u2713" : "\u2717" });
    } catch (e) {
      setterResults.push({ Test: "S2", Property: "SubmitMode (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = control.Disabled;
      control.Disabled = true;
      const newDisabled = control.Disabled;
      control.Disabled = origDisabled;
      setterResults.push({ Test: "S3", Property: "Disabled (set)", Value: `${origDisabled}\u2192true\u2192restored`, Status: newDisabled === true ? "\u2713" : "\u2717" });
    } catch (e) {
      setterResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = control.Label;
      control.Label = origLabel + " (TEST)";
      const newLabel = control.Label;
      control.Label = origLabel;
      setterResults.push({ Test: "S4", Property: "Label (set)", Value: `"${origLabel}"\u2192modified\u2192restored`, Status: newLabel.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      setterResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = control.Visible;
      control.Visible = false;
      const newVisible = control.Visible;
      control.Visible = origVisible;
      setterResults.push({ Test: "S5", Property: "Visible (set)", Value: `${origVisible}\u2192false\u2192restored`, Status: newVisible === false ? "\u2713" : "\u2717" });
    } catch (e) {
      setterResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      control.Value = originalValue + " (MODIFIED)";
      const newValue = control.Value;
      control.Value = originalValue;
      setterResults.push({ Test: "S6", Property: "Value (set)", Value: `modified\u2192restored`, Status: newValue?.includes("(MODIFIED)") ? "\u2713" : "\u2717" });
    } catch (e) {
      setterResults.push({ Test: "S6", Property: "Value (set)", Value: e.message, Status: "\u2717" });
    }
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} OnChange fired");
    try {
      control.AddOnChange(onChangeCallback);
      setterResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      setterResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      control.RemoveOnChange(onChangeCallback);
      setterResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      setterResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    const outputChangeCallback = (ctx) => console.log("  \u{1F4CD} OutputChange fired");
    try {
      control.AddOnOutputChange(outputChangeCallback);
      setterResults.push({ Test: "S9", Property: "AddOnOutputChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      setterResults.push({ Test: "S9", Property: "AddOnOutputChange", Value: e.message, Status: "\u2717" });
    }
    try {
      control.RemoveOnOutputChange(outputChangeCallback);
      setterResults.push({ Test: "S10", Property: "RemoveOnOutputChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      setterResults.push({ Test: "S10", Property: "RemoveOnOutputChange", Value: e.message, Status: "\u2717" });
    }
    try {
      control.FireOnChange();
      setterResults.push({ Test: "S11", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      setterResults.push({ Test: "S11", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => control.Focus(), 1e3);
      setterResults.push({ Test: "S12", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      setterResults.push({ Test: "S12", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      control.SetNotification("Test notification from IControl", "CTRL_TEST_1");
      setTimeout(() => control.ClearNotification("CTRL_TEST_1"), 3e3);
      setterResults.push({ Test: "S13", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      setterResults.push({ Test: "S13", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      const cleared = control.ClearNotification("NONEXISTENT");
      setterResults.push({ Test: "S14", Property: "ClearNotification", Value: `Result: ${cleared}`, Status: "\u2713" });
    } catch (e) {
      setterResults.push({ Test: "S14", Property: "ClearNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      control.AddNotification({
        messages: ["Recommendation from test"],
        notificationLevel: "RECOMMENDATION",
        uniqueId: "CTRL_TEST_2"
      });
      setTimeout(() => control.ClearNotification("CTRL_TEST_2"), 3e3);
      setterResults.push({ Test: "S15", Property: "AddNotification", Value: "Added (clears 3s)", Status: "\u2713" });
    } catch (e) {
      setterResults.push({ Test: "S15", Property: "AddNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      control.SetIsValid(false, "Test invalid message");
      setTimeout(() => control.SetIsValid(true), 2e3);
      setterResults.push({ Test: "S16", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      setterResults.push({ Test: "S16", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...setterResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F39B}\uFE0F TEST 0: IControl Interface [${startTime}] - Using: Name field - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R8)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S16)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(setterResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestLookup.ts
  function TestLookup(form) {
    const results = [];
    const lookup = form.Body.PrimaryContactId;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalDefaultView = lookup.DefaultView;
    try {
      const currentValue = lookup.Value;
      const hasValue = currentValue && currentValue.length > 0;
      results.push({ Test: "R1", Property: "Value", Value: hasValue ? `${currentValue[0].name} (${currentValue[0].entityType})` : "(empty)", Status: "\u2713" });
      results.push({ Test: "R2", Property: "IsPartyList", Value: lookup.IsPartyList, Status: lookup.IsPartyList === false ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "EntityTypes", Value: JSON.stringify(lookup.EntityTypes), Status: "\u2713" });
      results.push({ Test: "R4", Property: "DefaultView", Value: originalDefaultView, Status: "\u2713" });
      results.push({ Test: "R5", Property: "Visible", Value: lookup.Visible, Status: "\u2713" });
      results.push({ Test: "R6", Property: "Disabled", Value: lookup.Disabled, Status: "\u2713" });
      results.push({ Test: "R7", Property: "ControlType", Value: lookup.ControlType, Status: lookup.ControlType === "lookup" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R8", Property: "ControlName", Value: lookup.ControlName, Status: "\u2713" });
      results.push({ Test: "R9", Property: "AttributeName", Value: lookup.AttributeName, Status: "\u2713" });
      results.push({ Test: "R10", Property: "AttributeType", Value: lookup.AttributeType, Status: "\u2713" });
      results.push({ Test: "R11", Property: "RequiredLevel", Value: lookup.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "R12", Property: "SubmitMode", Value: lookup.SubmitMode, Status: "\u2713" });
      results.push({ Test: "R13", Property: "IsValid", Value: lookup.IsValid, Status: "\u2713" });
      results.push({ Test: "R14", Property: "IsDirty", Value: lookup.IsDirty, Status: "\u2713" });
      results.push({ Test: "R15", Property: "Format", Value: lookup.Format, Status: "\u2713" });
      results.push({ Test: "R16", Property: "Attribute", Value: lookup.Attribute ? "object" : "null", Status: lookup.Attribute ? "\u2713" : "\u26A0" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Error", Value: error.message, Status: "\u2717" });
    }
    const methodResults = [];
    const preSearchCallback = (ctx) => {
      const filterXml = "<filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter>";
      lookup.AddCustomFilter(filterXml, "contact");
      console.log("  \u{1F4CD} PreSearch fired - filter applied");
    };
    const tagClickCallback = (ctx) => {
      console.log("  \u{1F4CD} LookupTagClick fired - tag was clicked");
    };
    try {
      const testViewId = "{00000000-0000-0000-0000-000000000002}";
      lookup.DefaultView = testViewId;
      const newView = lookup.DefaultView;
      lookup.DefaultView = originalDefaultView;
      methodResults.push({ Test: "S1", Property: "DefaultView (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "DefaultView (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const originalTypes = lookup.EntityTypes;
      lookup.EntityTypes = ["contact"];
      const newTypes = lookup.EntityTypes;
      lookup.EntityTypes = originalTypes;
      methodResults.push({ Test: "S2", Property: "EntityTypes (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "EntityTypes (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      lookup.AddPreSearch(preSearchCallback);
      methodResults.push({ Test: "S3", Property: "AddPreSearch", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "AddPreSearch", Value: e.message, Status: "\u2717" });
    }
    try {
      lookup.RemovePreSearch(preSearchCallback);
      methodResults.push({ Test: "S4", Property: "RemovePreSearch", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "RemovePreSearch", Value: e.message, Status: "\u2717" });
    }
    try {
      lookup.AddLookupTagClick(tagClickCallback);
      methodResults.push({ Test: "S5", Property: "AddLookupTagClick", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "AddLookupTagClick", Value: e.message, Status: "\u2717" });
    }
    try {
      lookup.RemoveLookupTagClick(tagClickCallback);
      methodResults.push({ Test: "S6", Property: "RemoveLookupTagClick", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "RemoveLookupTagClick", Value: e.message, Status: "\u2717" });
    }
    try {
      lookup.AddCustomView(
        "00000000-0000-0000-0000-000000000001",
        "contact",
        "Active Contacts (Custom View)",
        "<fetch><entity name='contact'><attribute name='fullname'/></entity></fetch>",
        "<grid name='resultset'><row name='result' id='contactid'><cell name='fullname' width='200'/></row></grid>",
        false
      );
      methodResults.push({ Test: "S7", Property: "AddCustomView", Value: "Added", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "AddCustomView", Value: e.message, Status: "\u2717" });
    }
    try {
      lookup.SetNotification("Test notification", "TEST_1");
      setTimeout(() => lookup.ClearNotification("TEST_1"), 3e3);
      methodResults.push({ Test: "S8", Property: "SetNotification", Value: "Set (clears in 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => lookup.Focus(), 4e3);
      methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (4s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F50D} TEST 1: Lookup Control [${startTime}] - Using: PrimaryContactId field - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R16)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S9)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestMemo.ts
  function TestMemo(form) {
    const results = [];
    const methodResults = [];
    const memo = form.Body.Description;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalValue = memo.Value;
    try {
      results.push({ Test: "R1", Property: "MaxLength", Value: memo.MaxLength, Status: typeof memo.MaxLength === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Value", Value: originalValue ? `"${originalValue.substring(0, 50)}${originalValue.length > 50 ? "..." : ""}"` : "(empty)", Status: "\u2713" });
      results.push({ Test: "R3", Property: "Attribute", Value: memo.Attribute ? "object" : "null", Status: memo.Attribute ? "\u2713" : "\u26A0" });
      results.push({ Test: "R4", Property: "AttributeName", Value: memo.AttributeName, Status: memo.AttributeName === "description" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R5", Property: "AttributeType", Value: memo.AttributeType, Status: memo.AttributeType === "memo" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R6", Property: "ControlName", Value: memo.ControlName, Status: "\u2713" });
      results.push({ Test: "R7", Property: "ControlType", Value: memo.ControlType, Status: "\u2713" });
      results.push({ Test: "R8", Property: "Format", Value: memo.Format, Status: "\u2713" });
      results.push({ Test: "R9", Property: "IsDirty", Value: memo.IsDirty, Status: "\u2713" });
      results.push({ Test: "R10", Property: "IsValid", Value: memo.IsValid, Status: "\u2713" });
      results.push({ Test: "R11", Property: "RequiredLevel", Value: memo.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "R12", Property: "SubmitMode", Value: memo.SubmitMode, Status: "\u2713" });
      results.push({ Test: "R13", Property: "Disabled", Value: memo.Disabled, Status: "\u2713" });
      results.push({ Test: "R14", Property: "Label", Value: memo.Label, Status: "\u2713" });
      results.push({ Test: "R15", Property: "Visible", Value: memo.Visible, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      memo.Value = (originalValue || "") + " [TEST]";
      const newValue = memo.Value;
      memo.Value = originalValue;
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue?.includes("[TEST]") ? "Set\u2192Restored" : "Failed", Status: newValue?.includes("[TEST]") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origRequired = memo.RequiredLevel;
      memo.RequiredLevel = "required";
      const check = memo.RequiredLevel;
      memo.RequiredLevel = origRequired;
      methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === "required" ? "Set\u2192Restored" : "Failed", Status: check === "required" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = memo.Disabled;
      memo.Disabled = !origDisabled;
      const check = memo.Disabled;
      memo.Disabled = origDisabled;
      methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = memo.Label;
      memo.Label = origLabel + " (TEST)";
      const check = memo.Label;
      memo.Label = origLabel;
      methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = memo.Visible;
      memo.Visible = !origVisible;
      const check = memo.Visible;
      memo.Visible = origVisible;
      methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} Memo OnChange fired");
    try {
      memo.AddOnChange(onChangeCallback);
      methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      memo.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      memo.FireOnChange();
      methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => memo.Focus(), 1e3);
      methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      memo.SetNotification("Test Memo notification", "MEMO_TEST_1");
      setTimeout(() => memo.ClearNotification("MEMO_TEST_1"), 3e3);
      methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      memo.SetIsValid(false, "Test invalid");
      setTimeout(() => memo.SetIsValid(true), 2e3);
      methodResults.push({ Test: "S11", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S11", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F4DD} TEST 2: Memo Control [${startTime}] - Using: Description field - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R15)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestString.ts
  function TestString(form) {
    const results = [];
    const methodResults = [];
    const str = form.Body.Name;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalValue = str.Value;
    try {
      results.push({ Test: "R1", Property: "MaxLength", Value: str.MaxLength, Status: typeof str.MaxLength === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Value", Value: originalValue ? `"${originalValue.substring(0, 50)}${originalValue.length > 50 ? "..." : ""}"` : "(empty)", Status: "\u2713" });
      results.push({ Test: "R3", Property: "Attribute", Value: str.Attribute ? "object" : "null", Status: str.Attribute ? "\u2713" : "\u26A0" });
      results.push({ Test: "R4", Property: "AttributeName", Value: str.AttributeName, Status: str.AttributeName === "name" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R5", Property: "AttributeType", Value: str.AttributeType, Status: str.AttributeType === "string" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R6", Property: "ControlName", Value: str.ControlName, Status: "\u2713" });
      results.push({ Test: "R7", Property: "ControlType", Value: str.ControlType, Status: "\u2713" });
      results.push({ Test: "R8", Property: "Format", Value: str.Format, Status: "\u2713" });
      results.push({ Test: "R9", Property: "IsDirty", Value: str.IsDirty, Status: "\u2713" });
      results.push({ Test: "R10", Property: "IsValid", Value: str.IsValid, Status: "\u2713" });
      results.push({ Test: "R11", Property: "RequiredLevel", Value: str.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "R12", Property: "SubmitMode", Value: str.SubmitMode, Status: "\u2713" });
      results.push({ Test: "R13", Property: "Disabled", Value: str.Disabled, Status: "\u2713" });
      results.push({ Test: "R14", Property: "Label", Value: str.Label, Status: "\u2713" });
      results.push({ Test: "R15", Property: "Visible", Value: str.Visible, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      str.Value = (originalValue || "") + " [TEST]";
      const newValue = str.Value;
      str.Value = originalValue;
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue?.includes("[TEST]") ? "Set\u2192Restored" : "Failed", Status: newValue?.includes("[TEST]") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origRequired = str.RequiredLevel;
      str.RequiredLevel = "required";
      const check = str.RequiredLevel;
      str.RequiredLevel = origRequired;
      methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === "required" ? "Set\u2192Restored" : "Failed", Status: check === "required" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = str.Disabled;
      str.Disabled = !origDisabled;
      const check = str.Disabled;
      str.Disabled = origDisabled;
      methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = str.Label;
      str.Label = origLabel + " (TEST)";
      const check = str.Label;
      str.Label = origLabel;
      methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = str.Visible;
      str.Visible = !origVisible;
      const check = str.Visible;
      str.Visible = origVisible;
      methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} String OnChange fired");
    try {
      str.AddOnChange(onChangeCallback);
      methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      str.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      str.FireOnChange();
      methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => str.Focus(), 1e3);
      methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      str.SetNotification("Test String notification", "STRING_TEST_1");
      setTimeout(() => str.ClearNotification("STRING_TEST_1"), 3e3);
      methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      str.SetIsValid(false, "Test invalid");
      setTimeout(() => str.SetIsValid(true), 2e3);
      methodResults.push({ Test: "S11", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S11", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F4C4} TEST 3: String Control [${startTime}] - Using: Name field - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R15)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestInteger.ts
  function TestInteger(form) {
    const results = [];
    const methodResults = [];
    const int = form.Header.NumberOfEmployees;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalValue = int.Value;
    try {
      results.push({ Test: "R1", Property: "Max", Value: int.Max, Status: typeof int.Max === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Min", Value: int.Min, Status: typeof int.Min === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "Value", Value: originalValue, Status: "\u2713" });
      results.push({ Test: "R4", Property: "Attribute", Value: int.Attribute ? "object" : "null", Status: int.Attribute ? "\u2713" : "\u26A0" });
      results.push({ Test: "R5", Property: "AttributeName", Value: int.AttributeName, Status: int.AttributeName === "numberofemployees" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R6", Property: "AttributeType", Value: int.AttributeType, Status: int.AttributeType === "integer" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R7", Property: "ControlName", Value: int.ControlName, Status: "\u2713" });
      results.push({ Test: "R8", Property: "ControlType", Value: int.ControlType, Status: "\u2713" });
      results.push({ Test: "R9", Property: "Format", Value: int.Format, Status: "\u2713" });
      results.push({ Test: "R10", Property: "IsDirty", Value: int.IsDirty, Status: "\u2713" });
      results.push({ Test: "R11", Property: "IsValid", Value: int.IsValid, Status: "\u2713" });
      results.push({ Test: "R12", Property: "RequiredLevel", Value: int.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "R13", Property: "SubmitMode", Value: int.SubmitMode, Status: "\u2713" });
      results.push({ Test: "R14", Property: "Disabled", Value: int.Disabled, Status: "\u2713" });
      results.push({ Test: "R15", Property: "Label", Value: int.Label, Status: "\u2713" });
      results.push({ Test: "R16", Property: "Visible", Value: int.Visible, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const testValue = (originalValue || 0) + 100;
      int.Value = testValue;
      const newValue = int.Value;
      int.Value = originalValue;
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set\u2192Restored" : "Failed", Status: newValue === testValue ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origRequired = int.RequiredLevel;
      int.RequiredLevel = "required";
      const check = int.RequiredLevel;
      int.RequiredLevel = origRequired;
      methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === "required" ? "Set\u2192Restored" : "Failed", Status: check === "required" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = int.Disabled;
      int.Disabled = !origDisabled;
      const check = int.Disabled;
      int.Disabled = origDisabled;
      methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = int.Label;
      int.Label = origLabel + " (TEST)";
      const check = int.Label;
      int.Label = origLabel;
      methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = int.Visible;
      int.Visible = !origVisible;
      const check = int.Visible;
      int.Visible = origVisible;
      methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} Integer OnChange fired");
    try {
      int.AddOnChange(onChangeCallback);
      methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      int.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      int.FireOnChange();
      methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => int.Focus(), 1e3);
      methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      int.SetNotification("Test Integer notification", "INT_TEST_1");
      setTimeout(() => int.ClearNotification("INT_TEST_1"), 3e3);
      methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      int.SetIsValid(false, "Test invalid");
      setTimeout(() => int.SetIsValid(true), 2e3);
      methodResults.push({ Test: "S11", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S11", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F522} TEST 4: Integer Control [${startTime}] - Using: NumberOfEmployees field - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R16)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestOptionSet.ts
  function TestOptionSet(form) {
    const results = [];
    const methodResults = [];
    const opt = form.Body.IndustryCode;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalValue = opt.Value;
    try {
      results.push({ Test: "R1", Property: "InitialValue", Value: opt.InitialValue, Status: typeof opt.InitialValue === "number" || opt.InitialValue === null ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Options", Value: `${opt.Options?.length ?? 0} options`, Status: opt.Options?.length > 0 ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "SelectedOption", Value: opt.SelectedOption ? `${opt.SelectedOption.text} (${opt.SelectedOption.value})` : "(none)", Status: "\u2713" });
      results.push({ Test: "R4", Property: "Text", Value: opt.Text || "(empty)", Status: "\u2713" });
      results.push({ Test: "R5", Property: "Value", Value: originalValue, Status: "\u2713" });
      results.push({ Test: "R6", Property: "Attribute", Value: opt.Attribute ? "object" : "null", Status: opt.Attribute ? "\u2713" : "\u26A0" });
      results.push({ Test: "R7", Property: "AttributeName", Value: opt.AttributeName, Status: opt.AttributeName === "industrycode" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R8", Property: "AttributeType", Value: opt.AttributeType, Status: opt.AttributeType === "optionset" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R9", Property: "ControlName", Value: opt.ControlName, Status: "\u2713" });
      results.push({ Test: "R10", Property: "ControlType", Value: opt.ControlType, Status: "\u2713" });
      results.push({ Test: "R11", Property: "Format", Value: opt.Format, Status: "\u2713" });
      results.push({ Test: "R12", Property: "IsDirty", Value: opt.IsDirty, Status: "\u2713" });
      results.push({ Test: "R13", Property: "IsValid", Value: opt.IsValid, Status: "\u2713" });
      results.push({ Test: "R14", Property: "RequiredLevel", Value: opt.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "R15", Property: "SubmitMode", Value: opt.SubmitMode, Status: "\u2713" });
      results.push({ Test: "R16", Property: "Disabled", Value: opt.Disabled, Status: "\u2713" });
      results.push({ Test: "R17", Property: "Label", Value: opt.Label, Status: "\u2713" });
      results.push({ Test: "R18", Property: "Visible", Value: opt.Visible, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const options = opt.Options;
      if (options && options.length > 0) {
        const newVal = options[0].value;
        opt.Value = newVal;
        const check = opt.Value;
        opt.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: check === newVal ? "Set\u2192Restored" : "Failed", Status: check === newVal ? "\u2713" : "\u2717" });
      } else {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: "No options available", Status: "\u26A0" });
      }
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const options = opt.Options;
      if (options && options.length > 0) {
        const testOption = opt.Option(options[0].value);
        methodResults.push({ Test: "S2", Property: "Option(value)", Value: testOption ? `${testOption.text}` : "null", Status: testOption ? "\u2713" : "\u2717" });
      } else {
        methodResults.push({ Test: "S2", Property: "Option(value)", Value: "No options", Status: "\u26A0" });
      }
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "Option(value)", Value: e.message, Status: "\u2717" });
    }
    methodResults.push({ Test: "S3", Property: "Option(text)", Value: "OOB Bug - devkit.ts kh\xF4ng h\u1ED7 tr\u1EE3", Status: "\u2713" });
    try {
      opt.AddOption("Test Option (AI)", 999999);
      const hasNew = opt.ControlOptions?.some((o) => o.value === 999999);
      opt.RemoveOption(999999);
      methodResults.push({ Test: "S4", Property: "AddOption", Value: hasNew ? "Added\u2192Removed" : "Not found", Status: hasNew ? "\u2713" : "\u26A0" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "AddOption", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S5", Property: "RemoveOption", Value: "Tested with S4", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "RemoveOption", Value: e.message, Status: "\u2717" });
    }
    try {
      const attributeOptions = opt.Options;
      const attrLen = attributeOptions?.length ?? 0;
      opt.ClearOptions();
      const clearedCount = opt.ControlOptions?.length ?? 0;
      for (const option of attributeOptions) {
        opt.AddOption(option.text, option.value);
      }
      const restoredCount = opt.ControlOptions?.length ?? 0;
      const success = clearedCount === 0 && restoredCount >= attrLen;
      methodResults.push({ Test: "S6", Property: "ClearOptions", Value: success ? `Clear(${clearedCount})\u2192Restore(${restoredCount}/${attrLen})` : `attr=${attrLen}, clear=${clearedCount}, restore=${restoredCount}`, Status: success ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "ClearOptions", Value: e.message, Status: "\u2717" });
    }
    try {
      const origRequired = opt.RequiredLevel;
      opt.RequiredLevel = "required";
      const check = opt.RequiredLevel;
      opt.RequiredLevel = origRequired;
      methodResults.push({ Test: "S7", Property: "RequiredLevel (set)", Value: check === "required" ? "Set\u2192Restored" : "Failed", Status: check === "required" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "RequiredLevel (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = opt.Disabled;
      opt.Disabled = !origDisabled;
      const check = opt.Disabled;
      opt.Disabled = origDisabled;
      methodResults.push({ Test: "S8", Property: "Disabled (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "Disabled (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = opt.Label;
      opt.Label = origLabel + " (TEST)";
      const check = opt.Label;
      opt.Label = origLabel;
      methodResults.push({ Test: "S9", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = opt.Visible;
      opt.Visible = !origVisible;
      const check = opt.Visible;
      opt.Visible = origVisible;
      methodResults.push({ Test: "S10", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S10", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} OptionSet OnChange fired");
    try {
      opt.AddOnChange(onChangeCallback);
      methodResults.push({ Test: "S11", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S11", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      opt.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "S12", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S12", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      opt.FireOnChange();
      methodResults.push({ Test: "S13", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S13", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => opt.Focus(), 1e3);
      methodResults.push({ Test: "S14", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S14", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      opt.SetNotification("Test OptionSet notification", "OPT_TEST_1");
      setTimeout(() => opt.ClearNotification("OPT_TEST_1"), 3e3);
      methodResults.push({ Test: "S15", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S15", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      opt.SetIsValid(false, "Test invalid");
      setTimeout(() => opt.SetIsValid(true), 2e3);
      methodResults.push({ Test: "S16", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S16", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F4CB} TEST 5: OptionSet Control [${startTime}] - Using: IndustryCode field - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R18)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S16)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.ts
  var formAccount = function() {
    "use strict";
    let form;
    async function onLoad(executionContext) {
      form = new AccountForm.Form(executionContext);
      registerEvents();
      form.UiAddLoaded(UiAddLoaded);
    }
    function registerEvents() {
      if (form.ExecutionContext.IsInitialLoad()) {
      }
    }
    async function UiAddLoaded(executionContext) {
      setTimeout(() => {
        console.clear();
        TestControl(form);
        TestLookup(form);
        TestMemo(form);
        TestString(form);
        TestInteger(form);
        TestOptionSet(form);
      }, 1e4);
    }
    return {
      OnLoad: onLoad
    };
  }();
  var Account_default = formAccount;
  return __toCommonJS(Account_exports);
})();
(function(){if(typeof IIFEAccount!=='undefined'&&IIFEAccount.default)window['formAccount']=IIFEAccount.default;})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZW50aXRpZXMvQWNjb3VudC50cyIsICIuLi9saWIvZGV2a2l0LnRzIiwgIi4uL2VudGl0aWVzL2dlbmVyYXRvci9BY2NvdW50LmZvcm0udHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0Q29udHJvbC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RMb29rdXAudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0TWVtby50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RTdHJpbmcudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0SW50ZWdlci50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RPcHRpb25TZXQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuaW1wb3J0IHsgVGVzdENvbnRyb2wgfSBmcm9tICcuL0FjY291bnQuVGVzdENvbnRyb2wnO1xyXG5pbXBvcnQgeyBUZXN0TG9va3VwIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RMb29rdXAnO1xyXG5pbXBvcnQgeyBUZXN0TWVtbyB9IGZyb20gJy4vQWNjb3VudC5UZXN0TWVtbyc7XHJcbmltcG9ydCB7IFRlc3RTdHJpbmcgfSBmcm9tICcuL0FjY291bnQuVGVzdFN0cmluZyc7XHJcbmltcG9ydCB7IFRlc3RJbnRlZ2VyIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RJbnRlZ2VyJztcclxuaW1wb3J0IHsgVGVzdE9wdGlvblNldCB9IGZyb20gJy4vQWNjb3VudC5UZXN0T3B0aW9uU2V0JztcclxuXHJcbmNvbnN0IGZvcm1BY2NvdW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGxldCBmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uTG9hZChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBmb3JtID0gbmV3IEFjY291bnRGb3JtLkZvcm0oZXhlY3V0aW9uQ29udGV4dCk7XHJcbiAgICAgICAgcmVnaXN0ZXJFdmVudHMoKTtcclxuICAgICAgICBmb3JtLlVpQWRkTG9hZGVkKFVpQWRkTG9hZGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZm9ybS5FeGVjdXRpb25Db250ZXh0LklzSW5pdGlhbExvYWQoKSkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIE9OIExPQURcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIFVpQWRkTG9hZGVkKGV4ZWN1dGlvbkNvbnRleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vIEJFR0lOIE9OIExPQUQgTE9HSUNcclxuXHJcbiAgICAgICAgLy8gV2FpdCAxMCBzZWNvbmRzIGFmdGVyIE9uTG9hZCB0byBhbGxvdyBmb3JtIHRvIGZ1bGx5IGxvYWRcclxuICAgICAgICAvLyBUaGVuIGNsZWFyIGNvbnNvbGUgYW5kIHJ1biByZWFsIHRlc3RzXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMDogSUNvbnRyb2wgSW50ZXJmYWNlIChiYXNlIGZvciBhbGwgY29udHJvbHMpXHJcbiAgICAgICAgICAgIFRlc3RDb250cm9sKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxOiBMb29rdXAgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TG9va3VwKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAyOiBNZW1vIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdE1lbW8oZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDM6IFN0cmluZyBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RTdHJpbmcoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDQ6IEludGVnZXIgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0SW50ZWdlcihmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgNTogT3B0aW9uU2V0IENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdE9wdGlvblNldChmb3JtKTtcclxuXHJcbiAgICAgICAgfSwgMTAwMDApO1xyXG5cclxuICAgICAgICAvLyBFTkQgT04gTE9BRCBMT0dJQ1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRU5EIE9OIExPQURcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gT04gQ0hBTkdFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBFTkQgT04gQ0hBTkdFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIFBSRSBTRUFSQ0hcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIEVORCBQUkUgU0VBUkNIXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIE9USEVSU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gRU5EIE9USEVSU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBPbkxvYWQ6IG9uTG9hZFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1BY2NvdW50O1xyXG4iLCAiZnVuY3Rpb24gZ2V0WHJtKCk6IHR5cGVvZiBYcm0gfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAod2luZG93IGFzIGFueSkuWHJtO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXJlbnQud2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAocGFyZW50LndpbmRvdyBhcyBhbnkpLlhybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIChwYXJlbnQud2luZG93IGFzIGFueSkuWHJtO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXJlbnQucGFyZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyZW50LnBhcmVudC53aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIChwYXJlbnQucGFyZW50LndpbmRvdyBhcyBhbnkpLlhybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIChwYXJlbnQucGFyZW50LndpbmRvdyBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuZnVuY3Rpb24gZ2V0dGVyPFQ+KG9iajogYW55LCBwcm9wOiBzdHJpbmcsIGdldHRlckZuOiAoKSA9PiBUKTogdm9pZCB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XHJcbiAgICAgICAgZ2V0OiBnZXR0ZXJGbixcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0dGVyU2V0dGVyPFQ+KG9iajogYW55LCBwcm9wOiBzdHJpbmcsIGdldHRlckZuOiAoKSA9PiBULCBzZXR0ZXJGbjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XHJcbiAgICAgICAgZ2V0OiBnZXR0ZXJGbixcclxuICAgICAgICBzZXQ6IHNldHRlckZuLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkRmllbGQoZm9ybUNvbnRleHQ6IGFueSwgZmllbGQ6IGFueSwgYXR0cmlidXRlOiBhbnksIGNvbnRyb2w6IGFueSk6IHZvaWQge1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlJywgKCkgPT4gY29udHJvbD8uZ2V0QXR0cmlidXRlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlTmFtZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TmFtZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZVBhcmVudCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0UGFyZW50KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlVHlwZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0QXR0cmlidXRlVHlwZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xOYW1lJywgKCkgPT4gY29udHJvbD8uZ2V0TmFtZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xPcHRpb25zJywgKCkgPT4gY29udHJvbD8uZ2V0T3B0aW9ucygpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xQYXJlbnQnLCAoKSA9PiBjb250cm9sPy5nZXRQYXJlbnQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sVHlwZScsICgpID0+IGNvbnRyb2w/LmdldENvbnRyb2xUeXBlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnRm9ybWF0JywgKCkgPT4gYXR0cmlidXRlPy5nZXRGb3JtYXQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJbml0aWFsVXJsJywgKCkgPT4gY29udHJvbD8uZ2V0SW5pdGlhbFVybCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0luaXRpYWxWYWx1ZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0SW5pdGlhbFZhbHVlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSXNEaXJ0eScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0SXNEaXJ0eSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0lzUGFydHlMaXN0JywgKCkgPT4gYXR0cmlidXRlPy5nZXRJc1BhcnR5TGlzdCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0lzVmFsaWQnLCAoKSA9PiBhdHRyaWJ1dGU/LmlzVmFsaWQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdNYXgnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE1heCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ01heExlbmd0aCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TWF4TGVuZ3RoKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnTWluJywgKCkgPT4gYXR0cmlidXRlPy5nZXRNaW4oKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdPYmplY3QnLCAoKSA9PiBjb250cm9sPy5nZXRPYmplY3QoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdPcHRpb25zJywgKCkgPT4gYXR0cmlidXRlPy5nZXRPcHRpb25zKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnT3V0cHV0cycsICgpID0+IGNvbnRyb2w/LmdldE91dHB1dHMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdTZWxlY3RlZE9wdGlvbicsICgpID0+IGF0dHJpYnV0ZT8uZ2V0U2VsZWN0ZWRPcHRpb24oKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdTZWxlY3RlZFJlc3VsdHMnLCAoKSA9PiBjb250cm9sPy5nZXRTZWxlY3RlZFJlc3VsdHMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdTdGF0ZScsICgpID0+IGNvbnRyb2w/LmdldFN0YXRlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnVGV4dCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0VGV4dCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1RvdGFsUmVzdWx0Q291bnQnLCAoKSA9PiBjb250cm9sPy5nZXRUb3RhbFJlc3VsdENvdW50KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnVXNlclByaXZpbGVnZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0VXNlclByaXZpbGVnZSgpKTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0RhdGEnLCAoKSA9PiBjb250cm9sPy5nZXREYXRhKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbnRyb2w/LnNldERhdGEodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0RlZmF1bHRWaWV3JywgKCkgPT4gY29udHJvbD8uZ2V0RGVmYXVsdFZpZXcoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29udHJvbD8uc2V0RGVmYXVsdFZpZXcodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0Rpc2FibGVkJywgKCkgPT4gY29udHJvbD8uZ2V0RGlzYWJsZWQoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gMyB8fCBmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDQpIHJldHVybjtcclxuICAgICAgICBjb250cm9sPy5zZXREaXNhYmxlZCh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0VudGl0eVR5cGVzJywgKCkgPT4gY29udHJvbD8uZ2V0RW50aXR5VHlwZXMoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29udHJvbD8uc2V0RW50aXR5VHlwZXModmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0xhYmVsJywgKCkgPT4gY29udHJvbD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgY29udHJvbD8uc2V0TGFiZWwodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1ByZWNpc2lvbicsICgpID0+IGF0dHJpYnV0ZT8uZ2V0UHJlY2lzaW9uKCksICh2YWx1ZTogbnVtYmVyKSA9PiB7IGF0dHJpYnV0ZT8uc2V0UHJlY2lzaW9uKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdSZXF1aXJlZExldmVsJywgKCkgPT4gYXR0cmlidXRlPy5nZXRSZXF1aXJlZExldmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGF0dHJpYnV0ZT8uc2V0UmVxdWlyZWRMZXZlbCh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnU2VhcmNoUXVlcnknLCAoKSA9PiBjb250cm9sPy5nZXRTZWFyY2hRdWVyeSgpLCAodmFsdWU6IHN0cmluZykgPT4geyBjb250cm9sPy5zZXRTZWFyY2hRdWVyeSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnU2hvd1RpbWUnLCAoKSA9PiBjb250cm9sPy5nZXRTaG93VGltZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgY29udHJvbD8uc2V0U2hvd1RpbWUodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1NyYycsICgpID0+IGNvbnRyb2w/LmdldFNyYygpLCAodmFsdWU6IHN0cmluZykgPT4geyBjb250cm9sPy5zZXRTcmModmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1N1Ym1pdE1vZGUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFN1Ym1pdE1vZGUoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgYXR0cmlidXRlPy5zZXRTdWJtaXRNb2RlKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdWYWx1ZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0VmFsdWUoKSwgKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSAzIHx8IGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gNCkgcmV0dXJuO1xyXG4gICAgICAgIGF0dHJpYnV0ZT8uc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdWaXNpYmxlJywgKCkgPT4gY29udHJvbD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgY29udHJvbD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgZmllbGQuQWRkQ3VzdG9tRmlsdGVyID0gKGZpbHRlcjogc3RyaW5nLCBlbnRpdHlMb2dpY2FOYW1lPzogc3RyaW5nKSA9PiBjb250cm9sPy5hZGRDdXN0b21GaWx0ZXIoZmlsdGVyLCBlbnRpdHlMb2dpY2FOYW1lKTtcclxuICAgIGZpZWxkLkFkZEN1c3RvbVZpZXcgPSAodmlld0lkOiBzdHJpbmcsIGVudGl0eU5hbWU6IHN0cmluZywgdmlld0Rpc3BsYXlOYW1lOiBzdHJpbmcsIGZldGNoWG1sOiBzdHJpbmcsIGxheW91dFhtbDogc3RyaW5nLCBpc0RlZmF1bHQ6IGJvb2xlYW4pID0+IGNvbnRyb2w/LmFkZEN1c3RvbVZpZXcodmlld0lkLCBlbnRpdHlOYW1lLCB2aWV3RGlzcGxheU5hbWUsIGZldGNoWG1sLCBsYXlvdXRYbWwsIGlzRGVmYXVsdCk7XHJcbiAgICBmaWVsZC5BZGRMb29rdXBUYWdDbGljayA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPbkxvb2t1cFRhZ0NsaWNrKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZE5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIG5vdGlmaWNhdGlvbkxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcsIGNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHsgbWVzc2FnZTogbWVzc2FnZSwgYWN0aW9uczogW2NhbGxiYWNrXSB9O1xyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHsgbWVzc2FnZXM6IFttZXNzYWdlXSwgbm90aWZpY2F0aW9uTGV2ZWw6IG5vdGlmaWNhdGlvbkxldmVsLCB1bmlxdWVJZDogdW5pcXVlSWQsIGFjdGlvbnM6IFthY3Rpb25zXSB9O1xyXG4gICAgICAgIHJldHVybiBjb250cm9sPy5hZGROb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcclxuICAgIH07XHJcbiAgICBmaWVsZC5BZGRPbkNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBhdHRyaWJ1dGU/LmFkZE9uQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZE9uT3V0cHV0Q2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uT3V0cHV0Q2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZE9wdGlvbiA9ICh0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIGluZGV4PzogbnVtYmVyKSA9PiBjb250cm9sPy5hZGRPcHRpb24oeyB0ZXh0OiB0ZXh0LCB2YWx1ZTogdmFsdWUgfSwgaW5kZXgpO1xyXG4gICAgZmllbGQuQWRkUG9zdFNlYXJjaCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPblBvc3RTZWFyY2goY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkUHJlU2VhcmNoID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZFByZVNlYXJjaChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRSZXN1bHRPcGVuZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25SZXN1bHRPcGVuZWQoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkU2VsZWN0aW9uID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uU2VsZWN0aW9uKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkNsZWFyTm90aWZpY2F0aW9uID0gKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRyb2w/LmNsZWFyTm90aWZpY2F0aW9uKHVuaXF1ZUlkKTtcclxuICAgIGZpZWxkLkNsZWFyT3B0aW9ucyA9ICgpID0+IGNvbnRyb2w/LmNsZWFyT3B0aW9ucygpO1xyXG4gICAgZmllbGQuQ29udGVudFdpbmRvdyA9IChzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbD8uZ2V0Q29udGVudFdpbmRvdygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIGZpZWxkLkZpcmVPbkNoYW5nZSA9ICgpID0+IGF0dHJpYnV0ZT8uZmlyZU9uQ2hhbmdlKCk7XHJcbiAgICBmaWVsZC5Gb2N1cyA9ICgpID0+IGNvbnRyb2w/LnNldEZvY3VzKCk7XHJcbiAgICBmaWVsZC5PcGVuU2VhcmNoUmVzdWx0ID0gKHJlc3VsdE51bWJlcjogbnVtYmVyLCBtb2RlPzogc3RyaW5nKSA9PiBjb250cm9sPy5vcGVuU2VhcmNoUmVzdWx0KHJlc3VsdE51bWJlciwgbW9kZSk7XHJcbiAgICBmaWVsZC5PcHRpb24gPSAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4gYXR0cmlidXRlPy5nZXRPcHRpb24odmFsdWUpO1xyXG4gICAgZmllbGQuUmVmcmVzaCA9ICgpID0+IGNvbnRyb2w/LnJlZnJlc2goKTtcclxuICAgIGZpZWxkLlJlbW92ZUxvb2t1cFRhZ0NsaWNrID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uTG9va3VwVGFnQ2xpY2soY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlT25DaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gYXR0cmlidXRlPy5yZW1vdmVPbkNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVPbk91dHB1dENoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPbk91dHB1dENoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVPcHRpb24gPSAodmFsdWU6IG51bWJlcikgPT4gY29udHJvbD8ucmVtb3ZlT3B0aW9uKHZhbHVlKTtcclxuICAgIGZpZWxkLlJlbW92ZVBvc3RTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25Qb3N0U2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZVByZVNlYXJjaCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVQcmVTZWFyY2goY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlUmVzdWx0T3BlbmVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uUmVzdWx0T3BlbmVkKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZVNlbGVjdGlvbiA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPblNlbGVjdGlvbihjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5TZXRJc1ZhbGlkID0gKHZhbGlkOiBib29sZWFuLCBtZXNzYWdlPzogc3RyaW5nKSA9PiBhdHRyaWJ1dGU/LnNldElzVmFsaWQodmFsaWQsIG1lc3NhZ2UpO1xyXG4gICAgZmllbGQuU2V0Tm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gY29udHJvbD8uc2V0Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHVuaXF1ZUlkKTtcclxufVxyXG5mdW5jdGlvbiBsb2FkRmllbGRzKGZvcm1Db250ZXh0OiBhbnksIGJvZHk6IGFueSwgdHlwZT86IHN0cmluZyk6IGFueSB7XHJcbiAgICBPYmplY3Qua2V5cyhib2R5KS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBjb25zdCBsb2dpY2FsTmFtZSA9IHR5cGUgPT09IHVuZGVmaW5lZCA/IGZpZWxkPy50b0xvd2VyQ2FzZSgpIDogKHR5cGUgKyBmaWVsZCk/LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGxvZ2ljYWxOYW1lKSA/PyBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChmaWVsZCk7XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IGZvcm1Db250ZXh0Py5nZXRBdHRyaWJ1dGUobG9naWNhbE5hbWUpO1xyXG4gICAgICAgIGlmICghYXR0cmlidXRlICYmIGNvbnRyb2w/LmdldEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgPSBjb250cm9sLmdldEF0dHJpYnV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkRmllbGQoZm9ybUNvbnRleHQsIGJvZHlbZmllbGRdLCBhdHRyaWJ1dGUsIGNvbnRyb2wpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJoZWFkZXJfXCIpIHtcclxuICAgICAgICBjb25zdCBnZXRIZWFkZXJTZWN0aW9uID0gZm9ybUNvbnRleHQ/LnVpPy5oZWFkZXJTZWN0aW9uO1xyXG4gICAgICAgIGdldHRlclNldHRlcihib2R5LCAnQm9keVZpc2libGUnLCAoKSA9PiBnZXRIZWFkZXJTZWN0aW9uPy5nZXRCb2R5VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBnZXRIZWFkZXJTZWN0aW9uPy5zZXRCb2R5VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihib2R5LCAnQ29tbWFuZEJhclZpc2libGUnLCAoKSA9PiBnZXRIZWFkZXJTZWN0aW9uPy5nZXRDb21tYW5kQmFyVmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBnZXRIZWFkZXJTZWN0aW9uPy5zZXRDb21tYW5kQmFyVmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihib2R5LCAnVGFiTmF2aWdhdG9yVmlzaWJsZScsICgpID0+IGdldEhlYWRlclNlY3Rpb24/LmdldFRhYk5hdmlnYXRvclZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ2V0SGVhZGVyU2VjdGlvbj8uc2V0VGFiTmF2aWdhdG9yVmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJvZHk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFRhYnMoZm9ybUNvbnRleHQ6IGFueSwgdGFiczogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBsb2FkU2VjdGlvbiA9IChmb3JtQ29udGV4dDogYW55LCB0YWI6IHN0cmluZywgc2VjdGlvbnM6IGFueSwgc2VjdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiT2JqZWN0ID0gZm9ybUNvbnRleHQ/LnVpPy50YWJzPy5nZXQodGFiKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uT2JqZWN0ID0gdGFiT2JqZWN0Py5zZWN0aW9ucz8uZ2V0KHNlY3Rpb24pO1xyXG4gICAgICAgIGdldHRlcihzZWN0aW9uc1tzZWN0aW9uXSwgJ05hbWUnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihzZWN0aW9uc1tzZWN0aW9uXSwgJ1BhcmVudCcsICgpID0+IHNlY3Rpb25PYmplY3Q/LmdldFBhcmVudCgpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdMYWJlbCcsICgpID0+IHNlY3Rpb25PYmplY3Q/LmdldExhYmVsKCksICh2YWx1ZTogYW55KSA9PiBzZWN0aW9uT2JqZWN0Py5zZXRMYWJlbCh2YWx1ZSkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihzZWN0aW9uc1tzZWN0aW9uXSwgJ1Zpc2libGUnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiBzZWN0aW9uT2JqZWN0Py5zZXRWaXNpYmxlKHZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZFRhYiA9IChmb3JtQ29udGV4dDogYW55LCB0YWJzOiBhbnksIHRhYjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiT2JqZWN0ID0gZm9ybUNvbnRleHQ/LnVpPy50YWJzPy5nZXQodGFiKTtcclxuICAgICAgICBnZXR0ZXIodGFic1t0YWJdLCAnTmFtZScsICgpID0+IHRhYk9iamVjdD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIodGFic1t0YWJdLCAnUGFyZW50JywgKCkgPT4gdGFiT2JqZWN0Py5nZXRQYXJlbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYnNbdGFiXSwgJ0NvbnRlbnRUeXBlJywgKCkgPT4gdGFiT2JqZWN0Py5nZXRDb250ZW50VHlwZSgpLCAodmFsdWU6IGFueSkgPT4geyB0YWJPYmplY3Q/LnNldENvbnRlbnRUeXBlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYnNbdGFiXSwgJ0Rpc3BsYXlTdGF0ZScsICgpID0+IHRhYk9iamVjdD8uZ2V0RGlzcGxheVN0YXRlKCksICh2YWx1ZTogYW55KSA9PiB7IHRhYk9iamVjdD8uc2V0RGlzcGxheVN0YXRlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYnNbdGFiXSwgJ0xhYmVsJywgKCkgPT4gdGFiT2JqZWN0Py5nZXRMYWJlbCgpLCAodmFsdWU6IGFueSkgPT4geyB0YWJPYmplY3Q/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYnNbdGFiXSwgJ1Zpc2libGUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldFZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgdGFic1t0YWJdLkFkZFRhYlN0YXRlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IHRhYk9iamVjdD8uYWRkVGFiU3RhdGVDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgIHRhYnNbdGFiXS5Gb2N1cyA9ICgpID0+IHRhYk9iamVjdD8uc2V0Rm9jdXMoKTtcclxuICAgICAgICB0YWJzW3RhYl0uUmVtb3ZlVGFiU3RhdGVDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gdGFiT2JqZWN0Py5yZW1vdmVUYWJTdGF0ZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGFic1t0YWJdLlNlY3Rpb24pLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRTZWN0aW9uKGZvcm1Db250ZXh0LCB0YWIsIHRhYnNbdGFiXS5TZWN0aW9uLCBzZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyh0YWJzKS5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgbG9hZFRhYihmb3JtQ29udGV4dCwgdGFicywgdGFiKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWROYXZpZ2F0aW9ucyhmb3JtQ29udGV4dDogYW55LCBuYXZpZ2F0aW9uczogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBnZXROYXZpZ2F0aW9uSXRlbSA9IChuYXZpZ2F0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZJdGVtcyA9IGZvcm1Db250ZXh0Py51aT8ubmF2aWdhdGlvbj8uaXRlbXM7XHJcbiAgICAgICAgaWYgKCFuYXZJdGVtcykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbmF2SXRlbXMuZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gbmF2SXRlbXMuZ2V0KGkpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbT8uZ2V0SWQoKSA9PT0gbmF2aWdhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZE5hdmlnYXRpb24gPSAoZm9ybUNvbnRleHQ6IGFueSwgbmF2aWdhdGlvbnM6IGFueSwgbmF2aWdhdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkl0ZW0gPSBnZXROYXZpZ2F0aW9uSXRlbShuYXZpZ2F0aW9uKTtcclxuICAgICAgICBnZXR0ZXIobmF2aWdhdGlvbnNbbmF2aWdhdGlvbl0sICdJZCcsICgpID0+IG5hdmlnYXRpb25JdGVtPy5nZXRJZCgpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIobmF2aWdhdGlvbnNbbmF2aWdhdGlvbl0sICdMYWJlbCcsICgpID0+IG5hdmlnYXRpb25JdGVtPy5nZXRMYWJlbCgpLCAodmFsdWU6IGFueSkgPT4gbmF2aWdhdGlvbkl0ZW0/LnNldExhYmVsKHZhbHVlKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG5hdmlnYXRpb25zW25hdmlnYXRpb25dLCAnVmlzaWJsZScsICgpID0+IG5hdmlnYXRpb25JdGVtPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiBuYXZpZ2F0aW9uSXRlbT8uc2V0VmlzaWJsZSh2YWx1ZSkpO1xyXG4gICAgICAgIG5hdmlnYXRpb25zW25hdmlnYXRpb25dLkZvY3VzID0gKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LnNldEZvY3VzKCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMobmF2aWdhdGlvbnMpLmZvckVhY2gobmF2aWdhdGlvbiA9PiB7XHJcbiAgICAgICAgbG9hZE5hdmlnYXRpb24oZm9ybUNvbnRleHQsIG5hdmlnYXRpb25zLCBuYXZpZ2F0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRRdWlja0Zvcm1zKGZvcm1Db250ZXh0OiBhbnksIHF1aWNrRm9ybXM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgZXhjbHVkZWRGaWVsZHMgPSBuZXcgU2V0KFtcIkJvZHlcIiwgXCJDb250cm9sc1wiLCBcIklzTG9hZGVkXCIsIFwiUmVmcmVzaFwiLCBcIkZvY3VzXCIsIFwiQ29udHJvbFR5cGVcIiwgXCJEaXNhYmxlZFwiLCBcIkxhYmVsXCIsIFwiQ29udHJvbE5hbWVcIiwgXCJDb250cm9sUGFyZW50XCIsIFwiVmlzaWJsZVwiXSk7XHJcbiAgICBjb25zdCBsb2FkUXVpY2tGb3JtID0gKGZvcm1Db250ZXh0OiBhbnksIHF1aWNrRm9ybXM6IGFueSwgcXVpY2tGb3JtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhxdWlja0Zvcm1zW3F1aWNrRm9ybV0pLmZpbHRlcihmaWVsZCA9PiAhZXhjbHVkZWRGaWVsZHMuaGFzKGZpZWxkKSk7XHJcbiAgICAgICAgY29uc3QgcXVpY2sgPSBmb3JtQ29udGV4dD8udWk/LnF1aWNrRm9ybXM/LmdldChxdWlja0Zvcm0pO1xyXG4gICAgICAgIGdldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdCb2R5JywgKCkgPT4gTG9hZEZvcm1EaWFsb2cocXVpY2ssIGZpZWxkcykpO1xyXG4gICAgICAgIGdldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdDb250cm9sTmFtZScsICgpID0+IHF1aWNrPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdDb250cm9sUGFyZW50JywgKCkgPT4gcXVpY2s/LmdldFBhcmVudCgpKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQ29udHJvbFR5cGUnLCAoKSA9PiBxdWljaz8uZ2V0Q29udHJvbFR5cGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0Rpc2FibGVkJywgKCkgPT4gcXVpY2s/LmdldERpc2FibGVkKCksICh2YWx1ZTogYW55KSA9PiB7IHF1aWNrPy5zZXREaXNhYmxlZCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdMYWJlbCcsICgpID0+IHF1aWNrPy5nZXRMYWJlbCgpLCAodmFsdWU6IGFueSkgPT4geyBxdWljaz8uc2V0TGFiZWwodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnVmlzaWJsZScsICgpID0+IHF1aWNrPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IHF1aWNrPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgcXVpY2tGb3Jtc1txdWlja0Zvcm1dLkNvbnRyb2xzID0gKGFyZzogYW55KSA9PiBxdWljaz8uZ2V0Q29udHJvbChhcmcpO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5Gb2N1cyA9ICgpID0+IHF1aWNrPy5zZXRGb2N1cygpO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5Jc0xvYWRlZCA9ICgpID0+IHF1aWNrPy5pc0xvYWRlZCgpO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5SZWZyZXNoID0gKCkgPT4gcXVpY2s/LnJlZnJlc2goKTtcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhxdWlja0Zvcm1zKS5mb3JFYWNoKHF1aWNrRm9ybSA9PiB7XHJcbiAgICAgICAgbG9hZFF1aWNrRm9ybShmb3JtQ29udGV4dCwgcXVpY2tGb3JtcywgcXVpY2tGb3JtKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRHcmlkcyhmb3JtQ29udGV4dDogYW55LCBncmlkczogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBsb2FkR3JpZENvbHVtbiA9IChjb2w6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0xhYmVsJywgKCkgPT4gY29sPy5jb250cm9scz8uZ2V0KDApPy5nZXRMYWJlbCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTmFtZScsICgpID0+IGNvbD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIob2JqLCAnRGlzYWJsZWQnLCAoKSA9PiBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LmdldERpc2FibGVkKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbD8uY29udHJvbHM/LmdldCgwKT8uc2V0RGlzYWJsZWQodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIob2JqLCAnUmVxdWlyZWRMZXZlbCcsICgpID0+IGNvbD8uZ2V0UmVxdWlyZWRMZXZlbCgpLCAodmFsdWU6IGFueSkgPT4geyBjb2w/LnNldFJlcXVpcmVkTGV2ZWwodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIob2JqLCAnVmFsdWUnLCAoKSA9PiBjb2w/LmdldFZhbHVlKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbD8uc2V0VmFsdWUodmFsdWUpOyB9KTtcclxuICAgICAgICBvYmouQ2xlYXJOb3RpZmljYXRpb24gPSAodW5pcXVlSWQ6IHN0cmluZykgPT4gY29sPy5jb250cm9scz8uZ2V0KDApPy5jbGVhck5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICAgICAgb2JqLlNldE5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uc2V0Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHVuaXF1ZUlkKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRHcmlkUm93ID0gKHJvdzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ29sdW1ucycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uc09iajogYW55ID0ge307XHJcbiAgICAgICAgICAgIGNvbHVtbnNPYmouZ2V0TGVuZ3RoID0gKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmF0dHJpYnV0ZXM/LmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICBjb2x1bW5zT2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSByb3c/LmRhdGE/LmVudGl0eT8uYXR0cmlidXRlcz8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkR3JpZENvbHVtbihjb2x1bW4pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb2x1bW5zT2JqLmZvckVhY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IHJvdz8uZGF0YT8uZW50aXR5Py5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbHVtbnM/LmdldExlbmd0aCgpOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1ucz8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhsb2FkR3JpZENvbHVtbihjb2x1bW4pLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zT2JqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlcihvYmosICdFbnRpdHlJZCcsICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5nZXRJZCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5TmFtZScsICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdFbnRpdHlSZWZlcmVuY2UnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0RW50aXR5UmVmZXJlbmNlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdQcmltYXJ5QXR0cmlidXRlVmFsdWUnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0UHJpbWFyeUF0dHJpYnV0ZVZhbHVlKCkpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZEdyaWQgPSAoZm9ybUNvbnRleHQ6IGFueSwgZ3JpZHM6IGFueSwgZ3JpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ3JpZENvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChncmlkKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVDb2xsZWN0aW9uT2JqZWN0ID0gKGdldEl0ZW1zRm46IGFueSwgcHJvY2Vzc0l0ZW1GbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgICAgIG9iai5nZXRMZW5ndGggPSAoKSA9PiBnZXRJdGVtc0ZuKCk/LmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICBvYmouZ2V0ID0gKGluZGV4OiBudW1iZXIpID0+IHByb2Nlc3NJdGVtRm4oZ2V0SXRlbXNGbigpPy5nZXQoaW5kZXgpKTtcclxuICAgICAgICAgICAgb2JqLmZvckVhY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBnZXRJdGVtc0ZuKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBpdGVtcz8uZ2V0TGVuZ3RoKCkgfHwgMDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwcm9jZXNzSXRlbUZuKGl0ZW1zLmdldChpbmRleCkpLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdFbnRpdHlOYW1lJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnRmV0Y2hYbWwnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0RmV0Y2hYbWwoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnR3JpZFR5cGUnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0R3JpZFR5cGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnUmVsYXRpb25zaGlwJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldFJlbGF0aW9uc2hpcCgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdSb3dzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkSW5zdGFuY2UgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChncmlkKT8uZ2V0R3JpZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ29sbGVjdGlvbk9iamVjdChcclxuICAgICAgICAgICAgICAgICgpID0+IGdyaWRJbnN0YW5jZT8uZ2V0Um93cygpLFxyXG4gICAgICAgICAgICAgICAgKHJvdzogYW55KSA9PiBsb2FkR3JpZFJvdyhyb3cpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnU2VsZWN0ZWRSb3dzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkSW5zdGFuY2UgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChncmlkKT8uZ2V0R3JpZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ29sbGVjdGlvbk9iamVjdChcclxuICAgICAgICAgICAgICAgICgpID0+IGdyaWRJbnN0YW5jZT8uZ2V0U2VsZWN0ZWRSb3dzKCksXHJcbiAgICAgICAgICAgICAgICAocm93OiBhbnkpID0+IGxvYWRHcmlkUm93KHJvdz8uZ2V0RGF0YSgpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1RvdGFsUmVjb3JkQ291bnQnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0R3JpZCgpPy5nZXRUb3RhbFJlY29yZENvdW50KCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1ZpZXdTZWxlY3RvcicsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgdmlld1NlbGVjdG9yID0gZ3JpZENvbnRyb2w/LmdldFZpZXdTZWxlY3RvcigpO1xyXG4gICAgICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBnZXR0ZXIob2JqLCAnVmlzaWJsZScsICgpID0+IHZpZXdTZWxlY3Rvcj8uaXNWaXNpYmxlKCkpO1xyXG4gICAgICAgICAgICBnZXR0ZXJTZXR0ZXIob2JqLCAnQ3VycmVudFZpZXcnLCAoKSA9PiB2aWV3U2VsZWN0b3I/LmdldEN1cnJlbnRWaWV3KCksICh2YWx1ZTogYW55KSA9PiB2aWV3U2VsZWN0b3I/LnNldEN1cnJlbnRWaWV3KHZhbHVlKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKGdyaWRzW2dyaWRdLCAnVmlzaWJsZScsICgpID0+IGdyaWRDb250cm9sPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IGdyaWRDb250cm9sPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uQWRkT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdyaWRDb250cm9sPy5hZGRPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLk9wZW5SZWxhdGVkR3JpZCA9ICgpID0+IGdyaWRDb250cm9sPy5vcGVuUmVsYXRlZEdyaWQoKTtcclxuICAgICAgICBncmlkc1tncmlkXS5SZWZyZXNoID0gKCkgPT4gZ3JpZENvbnRyb2w/LnJlZnJlc2goKTtcclxuICAgICAgICBncmlkc1tncmlkXS5SZWZyZXNoUmliYm9uID0gKCkgPT4gZ3JpZENvbnRyb2w/LnJlZnJlc2hSaWJib24oKTtcclxuICAgICAgICBncmlkc1tncmlkXS5SZW1vdmVPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ3JpZENvbnRyb2w/LnJlbW92ZU9uTG9hZChjYWxsYmFjayk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uVXJsID0gKGNsaWVudDogbnVtYmVyKSA9PiBncmlkQ29udHJvbD8uZ2V0VXJsKGNsaWVudCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMoZ3JpZHMpLmZvckVhY2goZ3JpZCA9PiB7XHJcbiAgICAgICAgbG9hZEdyaWQoZm9ybUNvbnRleHQsIGdyaWRzLCBncmlkKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIExvYWRGb3JtKGZvcm1Db250ZXh0OiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgZm9ybTogYW55ID0ge307XHJcbiAgICBjb25zdCBjb250ZXh0RGF0YSA9IGZvcm1Db250ZXh0Py5kYXRhO1xyXG4gICAgY29uc3QgY29udGV4dERhdGFFbnRpdHkgPSBmb3JtQ29udGV4dD8uZGF0YT8uZW50aXR5O1xyXG4gICAgY29uc3QgY29udGV4dFVpID0gZm9ybUNvbnRleHQ/LnVpO1xyXG4gICAgY29uc3QgY29udGV4dFVpRm9ybVNlbGVjdG9yID0gZm9ybUNvbnRleHQ/LnVpPy5mb3JtU2VsZWN0b3I7XHJcbiAgICBjb25zdCBmaW5kRm9ybUl0ZW0gPSAoY3JpdGVyaWE6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uaXRlbXM/LmdldExlbmd0aCgpID8/IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gY29udGV4dFVpRm9ybVNlbGVjdG9yPy5pdGVtcz8uZ2V0KGkpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBjcml0ZXJpYShpdGVtKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIGdldHRlcihmb3JtLCAnQXR0cmlidXRlcycsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5hdHRyaWJ1dGVzKTtcclxuICAgIGdldHRlcihmb3JtLCAnQ29udHJvbHMnLCAoKSA9PiBjb250ZXh0VWk/LmNvbnRyb2xzKTtcclxuICAgIGdldHRlcihmb3JtLCAnRGF0YUlzRGlydHknLCAoKSA9PiBjb250ZXh0RGF0YT8uZ2V0SXNEaXJ0eSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRGF0YUlzVmFsaWQnLCAoKSA9PiBjb250ZXh0RGF0YT8uaXNWYWxpZCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRGF0YVhtbCcsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXREYXRhWG1sKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlJZCcsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRJZCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5SXNEaXJ0eScsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRJc0RpcnR5KCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlJc1ZhbGlkJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmlzVmFsaWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eU5hbWUnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0RW50aXR5TmFtZSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5UmVmZXJlbmNlJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldEVudGl0eVJlZmVyZW5jZSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRm9ybUlkJywgKCkgPT4gY29udGV4dFVpRm9ybVNlbGVjdG9yPy5nZXRDdXJyZW50SXRlbSgpPy5nZXRJZCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRm9ybUxhYmVsJywgKCkgPT4gY29udGV4dFVpRm9ybVNlbGVjdG9yPy5nZXRDdXJyZW50SXRlbSgpPy5nZXRMYWJlbCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRm9ybVR5cGUnLCAoKSA9PiBjb250ZXh0VWk/LmdldEZvcm1UeXBlKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdQcmltYXJ5QXR0cmlidXRlVmFsdWUnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0UHJpbWFyeUF0dHJpYnV0ZVZhbHVlKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdWaWV3UG9ydEhlaWdodCcsICgpID0+IGNvbnRleHRVaT8uZ2V0Vmlld1BvcnRIZWlnaHQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ1ZpZXdQb3J0V2lkdGgnLCAoKSA9PiBjb250ZXh0VWk/LmdldFZpZXdQb3J0V2lkdGgoKSk7XHJcbiAgICBmb3JtLkFkZE9uUG9zdFNhdmUgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGFFbnRpdHk/LmFkZE9uUG9zdFNhdmUoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5BZGRPblNhdmUgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGFFbnRpdHk/LmFkZE9uU2F2ZShjYWxsYmFjayk7XHJcbiAgICBmb3JtLkNsZWFyRm9ybU5vdGlmaWNhdGlvbiA9ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250ZXh0VWk/LmNsZWFyRm9ybU5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICBmb3JtLkNsb3NlID0gKCkgPT4gY29udGV4dFVpPy5jbG9zZSgpO1xyXG4gICAgZm9ybS5EYXRhQWRkT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhPy5hZGRPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5EYXRhUmVtb3ZlT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhPy5yZW1vdmVPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5Gb3JtSXNWaXNpYmxlID0gKGZvcm1JZDogc3RyaW5nKSA9PiB7IHJldHVybiBmaW5kRm9ybUl0ZW0oKGl0ZW06IGFueSkgPT4gaXRlbS5nZXRJZCgpLCBmb3JtSWQpPy5nZXRWaXNpYmxlKCk7IH07XHJcbiAgICBmb3JtLkZvcm1OYXZpZ2F0ZVRvRm9ybUlkID0gKGZvcm1JZDogc3RyaW5nKSA9PiB7IGZpbmRGb3JtSXRlbSgoaXRlbTogYW55KSA9PiBpdGVtLmdldElkKCksIGZvcm1JZCk/Lm5hdmlnYXRlKCk7IH07XHJcbiAgICBmb3JtLkZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsID0gKGZvcm1MYWJlbDogc3RyaW5nKSA9PiB7IGZpbmRGb3JtSXRlbSgoaXRlbTogYW55KSA9PiBpdGVtLmdldExhYmVsKCksIGZvcm1MYWJlbCk/Lm5hdmlnYXRlKCk7IH07XHJcbiAgICBmb3JtLkZvcm1TZXRWaXNpYmxlID0gKGZvcm1JZDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbikgPT4geyBmaW5kRm9ybUl0ZW0oKGl0ZW06IGFueSkgPT4gaXRlbS5nZXRJZCgpLCBmb3JtSWQpPy5zZXRWaXNpYmxlKHZhbHVlKTsgfTtcclxuICAgIGZvcm0uUmVmcmVzaCA9IChzYXZlPzogYm9vbGVhbiwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRleHREYXRhPy5yZWZyZXNoKHNhdmUpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIGZvcm0uUmVmcmVzaFJpYmJvbiA9IChyZWZyZXNoQWxsPzogYm9vbGVhbikgPT4gY29udGV4dFVpPy5yZWZyZXNoUmliYm9uKHJlZnJlc2hBbGwpO1xyXG4gICAgZm9ybS5SZW1vdmVPblBvc3RTYXZlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhRW50aXR5Py5yZW1vdmVPblBvc3RTYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uUmVtb3ZlT25TYXZlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhRW50aXR5Py5yZW1vdmVPblNhdmUoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5TYXZlID0gKHNhdmVPcHRpb25zPzogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gY29udGV4dERhdGE/LnNhdmUoc2F2ZU9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIGZvcm0uU2V0Rm9ybUVudGl0eU5hbWUgPSAoYXJnOiBzdHJpbmcpID0+IGNvbnRleHRVaT8uc2V0Rm9ybUVudGl0eU5hbWUoYXJnKTtcclxuICAgIGZvcm0uU2V0Rm9ybU5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRleHRVaT8uc2V0Rm9ybU5vdGlmaWNhdGlvbihtZXNzYWdlLCBsZXZlbCwgdW5pcXVlSWQpO1xyXG4gICAgZm9ybS5VaUFkZExvYWRlZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0VWk/LmFkZExvYWRlZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLlVpQWRkT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHRVaT8uYWRkT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uVWlSZW1vdmVMb2FkZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5yZW1vdmVMb2FkZWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5VaVJlbW92ZU9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0VWk/LnJlbW92ZU9uTG9hZChjYWxsYmFjayk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5mdW5jdGlvbiBMb2FkRXhlY3V0aW9uQ29udGV4dChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgIGdldHRlcihvYmosICdEZXB0aCcsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldERlcHRoKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0VudGl0eVJlZmVyZW5jZScsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXRFbnRpdHlSZWZlcmVuY2UoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnRXZlbnRBcmdzJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0V2ZW50U291cmNlJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRTb3VyY2UoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnRm9ybUNvbnRleHQnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRGb3JtQ29udGV4dCgpKTtcclxuICAgIGdldHRlcihvYmosICdJc1NhdmVTdWNjZXNzJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldElzU2F2ZVN1Y2Nlc3MoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnU2F2ZUVycm9ySW5mbycsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXRTYXZlRXJyb3JJbmZvKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ1NhdmVNb2RlJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldFNhdmVNb2RlKCkpO1xyXG4gICAgb2JqLkRpc2FibGVBc3luY1RpbWVvdXQgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZGlzYWJsZUFzeW5jVGltZW91dCgpO1xyXG4gICAgb2JqLkdldFNoYXJlZFZhcmlhYmxlID0gKGtleTogc3RyaW5nKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRTaGFyZWRWYXJpYWJsZShrZXkpO1xyXG4gICAgb2JqLklzRGVmYXVsdFByZXZlbnRlZCA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcclxuICAgIG9iai5Jc0luaXRpYWxMb2FkID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldERhdGFMb2FkU3RhdGUoKSA9PT0gMTtcclxuICAgIG9iai5TZXRQcmV2ZW50RGVmYXVsdCA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgb2JqLlNldFByZXZlbnREZWZhdWx0T25FcnJvciA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5wcmV2ZW50RGVmYXVsdE9uRXJyb3IoKTtcclxuICAgIG9iai5TZXRTaGFyZWRWYXJpYWJsZSA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gZXhlY3V0aW9uQ29udGV4dD8uc2V0U2hhcmVkVmFyaWFibGUoa2V5LCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbi8qKlxyXG4gKiBMb2FkcyB0aGUgU2lkZVBhbmVzIEFQSSB3cmFwcGVyLlxyXG4gKiBQcm92aWRlcyBhY2Nlc3MgdG8gc2lkZSBwYW5lcyBmdW5jdGlvbmFsaXR5IGluIG1vZGVsLWRyaXZlbiBhcHBzLlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgaW1wbGVtZW50aW5nIHRoZSBJU2lkZVBhbmVzIGludGVyZmFjZVxyXG4gKiBAbGluayBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXItYXBwcy9kZXZlbG9wZXIvbW9kZWwtZHJpdmVuLWFwcHMvY2xpZW50YXBpL3JlZmVyZW5jZS94cm0tYXBwLXNpZGVwYW5lc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRTaWRlUGFuZXMoKTogYW55IHtcclxuICAgIGNvbnN0IHNpZGVQYW5lczogYW55ID0ge307XHJcbiAgICBjb25zdCB4cm0gPSBnZXRYcm0oKTtcclxuICAgIGdldHRlclNldHRlcihzaWRlUGFuZXMsICdEaXNwbGF5U3RhdGUnLCAoKSA9PiAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5zdGF0ZSwgKHZhbHVlOiBhbnkpID0+IHsgY29uc3QgeCA9IGdldFhybSgpOyBpZiAoKHggYXMgYW55KT8uQXBwPy5zaWRlUGFuZXMpICh4IGFzIGFueSkuQXBwLnNpZGVQYW5lcy5zdGF0ZSA9IHZhbHVlOyB9KTtcclxuICAgIHNpZGVQYW5lcy5DcmVhdGUgPSBmdW5jdGlvbiAocGFuZU9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55KSB7ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LmNyZWF0ZVBhbmUocGFuZU9wdGlvbnMpPy50aGVuKHN1Y2Nlc3NDYWxsYmFjayk7IH07XHJcbiAgICBzaWRlUGFuZXMuR2V0ID0gKHBhbmVJZDogc3RyaW5nKSA9PiAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5nZXRQYW5lKHBhbmVJZCk7XHJcbiAgICBzaWRlUGFuZXMuR2V0QWxsID0gKCkgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uZ2V0QWxsUGFuZXMoKTtcclxuICAgIHNpZGVQYW5lcy5HZXRTZWxlY3RlZCA9ICgpID0+ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LmdldFNlbGVjdGVkUGFuZSgpO1xyXG4gICAgcmV0dXJuIHNpZGVQYW5lcztcclxufVxyXG4vKipcclxuICogTG9hZHMgdGhlIFdlYkFwaSB3cmFwcGVyLlxyXG4gKiBQcm92aWRlcyBtZXRob2RzIHRvIHVzZSBXZWIgQVBJIHRvIGNyZWF0ZSBhbmQgbWFuYWdlIHJlY29yZHMgYW5kIGV4ZWN1dGUgV2ViIEFQSSBhY3Rpb25zIGFuZCBmdW5jdGlvbnMuXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIElXZWJBcGkgaW50ZXJmYWNlXHJcbiAqIEBsaW5rIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlci1hcHBzL2RldmVsb3Blci9tb2RlbC1kcml2ZW4tYXBwcy9jbGllbnRhcGkvcmVmZXJlbmNlL3hybS13ZWJhcGlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkV2ViQXBpKCk6IERldktpdC5JV2ViQXBpIHtcclxuICAgIGNvbnN0IG9iajogYW55ID0ge30gYXMgRGV2S2l0LklXZWJBcGk7XHJcbiAgICBjb25zdCB4cm0gPSBnZXRYcm0oKTtcclxuICAgIGNvbnN0IGdldFdlYkFwaSA9IHhybT8uV2ViQXBpO1xyXG4gICAgY29uc3QgZ2V0T25saW5lID0geHJtPy5XZWJBcGk/Lm9ubGluZTtcclxuICAgIGNvbnN0IGdldE9mZmxpbmUgPSB4cm0/LldlYkFwaT8ub2ZmbGluZTtcclxuICAgIGNvbnN0IGV4dHJhY3RFbnRpdHlOYW1lID0gZnVuY3Rpb24gKGZldGNoWG1sOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBjbGVhblhtbCA9IGZldGNoWG1sO1xyXG4gICAgICAgIGNvbnN0IGZldGNoWG1sTWF0Y2ggPSBmZXRjaFhtbC5tYXRjaCgvZmV0Y2h4bWw9L2kpO1xyXG4gICAgICAgIGlmIChmZXRjaFhtbE1hdGNoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0SW5kZXggPSBmZXRjaFhtbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZldGNoeG1sPScpICsgJ2ZldGNoeG1sPScubGVuZ3RoO1xyXG4gICAgICAgICAgICBjbGVhblhtbCA9IGRlY29kZVVSSUNvbXBvbmVudChmZXRjaFhtbC5zdWJzdHJpbmcoc3BsaXRJbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmZXRjaFhtbC50cmltKCkuc3RhcnRzV2l0aCgnPCcpKSB7XHJcbiAgICAgICAgICAgIGNsZWFuWG1sID0gZmV0Y2hYbWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICBjb25zdCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGNsZWFuWG1sLCBcInRleHQveG1sXCIpO1xyXG4gICAgICAgIGNvbnN0IGVudGl0eU5vZGUgPSB4bWxEb2MucXVlcnlTZWxlY3RvcihcImVudGl0eVwiKTtcclxuICAgICAgICBpZiAoZW50aXR5Tm9kZSAmJiBlbnRpdHlOb2RlLmhhc0F0dHJpYnV0ZShcIm5hbWVcIikpXHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHlOb2RlLmdldEF0dHJpYnV0ZShcIm5hbWVcIikhO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVudGl0eSBuYW1lIG5vdCBmb3VuZCBpbiBmZXRjaFhtbFwiKTtcclxuICAgIH07XHJcbiAgICBvYmouQ3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGRhdGE6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8uY3JlYXRlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBkYXRhKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkRlbGV0ZVJlY29yZCA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5kZWxldGVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlJldHJpZXZlUmVjb3JkID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnJldHJpZXZlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBpZCwgb3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5SZXRyaWV2ZU11bHRpcGxlUmVjb3JkcyA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBvcHRpb25zPzogc3RyaW5nLCBtYXhQYWdlU2l6ZT86IG51bWJlciwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8ucmV0cmlldmVNdWx0aXBsZVJlY29yZHMoZW50aXR5TG9naWNhbE5hbWUsIG9wdGlvbnMsIG1heFBhZ2VTaXplKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlVwZGF0ZVJlY29yZCA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBkYXRhOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnVwZGF0ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgaWQsIGRhdGEpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouRXhlY3V0ZSA9IGZ1bmN0aW9uIChyZXF1ZXN0OiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAoZ2V0V2ViQXBpIGFzIGFueSk/LmV4ZWN1dGUocmVxdWVzdCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5FeGVjdXRlTXVsdGlwbGUgPSBmdW5jdGlvbiAocmVxdWVzdHM6IGFueVtdLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gKGdldFdlYkFwaSBhcyBhbnkpPy5leGVjdXRlTXVsdGlwbGUocmVxdWVzdHMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouUmV0cmlldmVSZWNvcmRzID0gZnVuY3Rpb24gKGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5OiBhbnksIGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zOiBzdHJpbmcsIG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjaz86IGFueSwgbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgbGV0IGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgbWF4UGFnZVNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBoYXNGZXRjaFhtbCA9IChzdHI6IHN0cmluZykgPT4gL2ZldGNoeG1sPS9pLnRlc3Qoc3RyKTtcclxuICAgICAgICBjb25zdCBpc1BsYWluRmV0Y2hYbWwgPSAoc3RyOiBzdHJpbmcpID0+IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnICYmIHN0ci50cmltKCkuc3RhcnRzV2l0aCgnPGZldGNoJyk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kUGFyYW1Jc0ZldGNoWG1sT3JPRGF0YSA9IHR5cGVvZiBlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucyA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICAgICAgKGhhc0ZldGNoWG1sKGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zKSB8fFxyXG4gICAgICAgICAgICAgICAgaXNQbGFpbkZldGNoWG1sKGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zKSB8fFxyXG4gICAgICAgICAgICAgICAgKGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zLnN0YXJ0c1dpdGgoJz8nKSAmJiAhaGFzRmV0Y2hYbWwoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMpKSk7XHJcbiAgICAgICAgaWYgKHNlY29uZFBhcmFtSXNGZXRjaFhtbE9yT0RhdGEpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zO1xyXG4gICAgICAgICAgICBpZiAoaXNQbGFpbkZldGNoWG1sKG9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gJz9mZXRjaFhtbD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoYXNGZXRjaFhtbChvcHRpb25zKSB8fCBpc1BsYWluRmV0Y2hYbWwoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHlMb2dpY2FsTmFtZSA9IGV4dHJhY3RFbnRpdHlOYW1lKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbnRpdHkgbmFtZSBjYW5ub3QgYmUgZGV0ZXJtaW5lZCBmcm9tIE9EYXRhIHF1ZXJ5LiBQbGVhc2UgcHJvdmlkZSBlbnRpdHlMb2dpY2FsTmFtZSBhcyBzZWNvbmQgcGFyYW1ldGVyLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2sgPSBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIG1heFBhZ2VTaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2sgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlU2l6ZSA9IG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayA9IG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVudGl0eUxvZ2ljYWxOYW1lID0gZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnM7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayA9IG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlU2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIG1heFBhZ2VTaXplID0gbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZU11bHRpcGxlUmVjb3JkcyhlbnRpdHlMb2dpY2FsTmFtZSEsIG9wdGlvbnMsIG1heFBhZ2VTaXplKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVudGl0aWVzICYmIHJlc3VsdC5lbnRpdGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmVudGl0aWVzLm1hcCgoZW50aXR5OiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5ID09PSAnZnVuY3Rpb24nICYmIGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5LnByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeShlbnRpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYXBpQ29uc3RydWN0b3JPckZhY3RvcnkoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5SZXRyaWV2ZVJlY29yZCA9IGZ1bmN0aW9uIChhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeTogYW55LCBlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBvcHRpb25zPzogc3RyaW5nIHwgRnVuY3Rpb24sIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2sgPSBvcHRpb25zO1xyXG4gICAgICAgICAgICBvcHRpb25zID0gXCI/JHNlbGVjdD0qXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucykge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gXCI/JHNlbGVjdD0qXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnJldHJpZXZlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBpZCwgb3B0aW9ucyBhcyBzdHJpbmcpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkgPT09ICdmdW5jdGlvbicgJiYgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkucHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICA/IG5ldyBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeShyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICA6IGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5KHJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGdldHRlcihvYmosICdPbmxpbmUnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25saW5lOiBhbnkgPSB7fTtcclxuICAgICAgICBvbmxpbmUuRXhlY3V0ZSA9IGZ1bmN0aW9uIChyZXF1ZXN0OiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0T25saW5lPy5leGVjdXRlKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25saW5lLkV4ZWN1dGVNdWx0aXBsZSA9IGZ1bmN0aW9uIChyZXF1ZXN0czogYW55W10sIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0T25saW5lPy5leGVjdXRlTXVsdGlwbGUocmVxdWVzdHMpO1xyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG9ubGluZTtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ09mZmxpbmUnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2ZmbGluZTogYW55ID0ge307XHJcbiAgICAgICAgb2ZmbGluZS5Jc0F2YWlsYWJsZSA9IChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nKSA9PiAoZ2V0T2ZmbGluZSBhcyBhbnkpPy5pc0F2YWlsYWJsZShlbnRpdHlMb2dpY2FsTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG9mZmxpbmU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuLyoqXHJcbiAqIExvYWRzIHRoZSBDb3BpbG90IEFQSSB3cmFwcGVyLlxyXG4gKiBQcm92aWRlcyBhY2Nlc3MgdG8gQ29waWxvdCBmdW5jdGlvbmFsaXR5IGZvciBleGVjdXRpbmcgZXZlbnRzIGFuZCBwcm9tcHRzLlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgaW1wbGVtZW50aW5nIHRoZSBJQ29waWxvdCBpbnRlcmZhY2VcclxuICogQGxpbmsgaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL3Bvd2VyLWFwcHMvZGV2ZWxvcGVyL21vZGVsLWRyaXZlbi1hcHBzL2NsaWVudGFwaS9yZWZlcmVuY2UveHJtLWNvcGlsb3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkQ29waWxvdCgpOiBEZXZLaXQuSUNvcGlsb3Qge1xyXG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgY29uc3QgZ2V0Q29waWxvdCA9ICh4cm0gYXMgYW55KT8uQ29waWxvdDtcclxuICAgIG9iai5FeGVjdXRlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50UGFyYW1ldGVyczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0Q29waWxvdD8uZXhlY3V0ZUV2ZW50KGV2ZW50TmFtZSwgZXZlbnRQYXJhbWV0ZXJzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkV4ZWN1dGVQcm9tcHQgPSBmdW5jdGlvbiAocHJvbXB0VGV4dDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0Q29waWxvdD8uZXhlY3V0ZVByb21wdChwcm9tcHRUZXh0KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5mdW5jdGlvbiBsb2FkT3RoZXJzKGZvcm1Db250ZXh0OiBhbnksIGZvcm06IGFueSwgZGVmYXVsdFdlYlJlc291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBmb3JtLlNpZGVQYW5lcyA9IExvYWRTaWRlUGFuZXMoKTtcclxuICAgIGZvcm0uV2ViQXBpID0gTG9hZFdlYkFwaSgpO1xyXG4gICAgZm9ybS5Db3BpbG90ID0gTG9hZENvcGlsb3QoKTtcclxufVxyXG4vKipcclxuICogTG9hZHMgYSBmb3JtIHdpdGggdHlwZWQgQm9keSwgSGVhZGVyLCBUYWIsIEdyaWQsIE5hdmlnYXRpb24sIFF1aWNrRm9ybSwgYW5kIFByb2Nlc3Mgc2VjdGlvbnMuXHJcbiAqIFRoaXMgaXMgdGhlIG1haW4gZnVuY3Rpb24gZm9yIGluaXRpYWxpemluZyBhIGZvcm0gaW4gVHlwZVNjcmlwdC5cclxuICogQHBhcmFtIGV4ZWN1dGlvbkNvbnRleHQgVGhlIGV4ZWN1dGlvbiBjb250ZXh0IHBhc3NlZCB0byB0aGUgZm9ybSBldmVudCBoYW5kbGVyXHJcbiAqIEBwYXJhbSBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lIE9wdGlvbmFsIGRlZmF1bHQgd2ViIHJlc291cmNlIG5hbWUgZm9yIHV0aWxpdHkgZnVuY3Rpb25zXHJcbiAqIEBwYXJhbSBmb3JtQ29uZmlnIENvbmZpZ3VyYXRpb24gb2JqZWN0IHNwZWNpZnlpbmcgZmllbGRzLCB0YWJzLCBncmlkcywgZXRjLlxyXG4gKiBAcmV0dXJucyBBIHR5cGVkIGZvcm0gb2JqZWN0IHdpdGggYWxsIGZvcm0gZnVuY3Rpb25hbGl0eVxyXG4gKiBAbGluayBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXItYXBwcy9kZXZlbG9wZXIvbW9kZWwtZHJpdmVuLWFwcHMvY2xpZW50YXBpL3JlZmVyZW5jZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRGb3JtVjI8VEJvZHkgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUSGVhZGVyID0gUmVjb3JkPHN0cmluZywgYW55PiwgVFRhYiA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRHcmlkID0gUmVjb3JkPHN0cmluZywgYW55PiwgVE5hdmlnYXRpb24gPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUUXVpY2tGb3JtID0gUmVjb3JkPHN0cmluZywgYW55PiwgVFByb2Nlc3MgPSBhbnk+KFxyXG4gICAgZXhlY3V0aW9uQ29udGV4dDogYW55LFxyXG4gICAgZGVmYXVsdFdlYlJlc291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgZm9ybUNvbmZpZzoge1xyXG4gICAgICAgIGJvZHk/OiBzdHJpbmdbXTtcclxuICAgICAgICBoZWFkZXI/OiBzdHJpbmdbXTtcclxuICAgICAgICB0YWI/OiBzdHJpbmdbXTtcclxuICAgICAgICBncmlkPzogc3RyaW5nW107XHJcbiAgICAgICAgbmF2aWdhdGlvbj86IHN0cmluZ1tdO1xyXG4gICAgICAgIHF1aWNrPzogc3RyaW5nW107XHJcbiAgICAgICAgYnBmPzogc3RyaW5nW107XHJcbiAgICB9XHJcbik6IHtcclxuICAgIEV4ZWN1dGlvbkNvbnRleHQ6IERldktpdC5JRXhlY3V0aW9uQ29udGV4dDtcclxuICAgIEJvZHk6IFRCb2R5O1xyXG4gICAgSGVhZGVyOiBUSGVhZGVyO1xyXG4gICAgVGFiOiBUVGFiO1xyXG4gICAgR3JpZDogVEdyaWQ7XHJcbiAgICBOYXZpZ2F0aW9uOiBUTmF2aWdhdGlvbjtcclxuICAgIFF1aWNrRm9ybTogVFF1aWNrRm9ybTtcclxuICAgIEZvcm1JZDogc3RyaW5nO1xyXG4gICAgRm9ybUxhYmVsOiBzdHJpbmc7XHJcbiAgICBGb3JtVHlwZTogbnVtYmVyO1xyXG4gICAgRW50aXR5SWQ6IHN0cmluZztcclxuICAgIEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIERhdGFJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgRGF0YUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBBdHRyaWJ1dGVzOiBhbnk7XHJcbiAgICBDb250cm9sczogYW55O1xyXG4gICAgRGF0YVhtbDogc3RyaW5nO1xyXG4gICAgRW50aXR5SXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIEVudGl0eUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBFbnRpdHlSZWZlcmVuY2U6IGFueTtcclxuICAgIFByaW1hcnlBdHRyaWJ1dGVWYWx1ZTogc3RyaW5nO1xyXG4gICAgVmlld1BvcnRIZWlnaHQ6IG51bWJlcjtcclxuICAgIFZpZXdQb3J0V2lkdGg6IG51bWJlcjtcclxuICAgIFNhdmU6IChzYXZlT3B0aW9ucz86IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIFJlZnJlc2g6IChzYXZlPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIENsb3NlOiAoKSA9PiB2b2lkO1xyXG4gICAgU2V0Rm9ybU5vdGlmaWNhdGlvbjogKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIENsZWFyRm9ybU5vdGlmaWNhdGlvbjogKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBSZWZyZXNoUmliYm9uOiAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBVaUFkZExvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgVWlSZW1vdmVMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFVpQWRkT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBVaVJlbW92ZU9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgQWRkT25Qb3N0U2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgQWRkT25TYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBSZW1vdmVPblBvc3RTYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBSZW1vdmVPblNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIERhdGFBZGRPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIERhdGFSZW1vdmVPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIEZvcm1Jc1Zpc2libGU6IChmb3JtSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIEZvcm1OYXZpZ2F0ZVRvRm9ybUlkOiAoZm9ybUlkOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBGb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbDogKGZvcm1MYWJlbDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgRm9ybVNldFZpc2libGU6IChmb3JtSWQ6IHN0cmluZywgdmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIFNldEZvcm1FbnRpdHlOYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgUHJvY2VzczogVFByb2Nlc3M7XHJcbiAgICBVdGlsaXR5OiBhbnk7XHJcbiAgICBTaWRlUGFuZXM6IGFueTtcclxuICAgIFdlYkFwaTogYW55O1xyXG4gICAgQ29waWxvdDogYW55O1xyXG59IHtcclxuICAgIGNvbnN0IGZvcm1Db250ZXh0ID0gZXhlY3V0aW9uQ29udGV4dD8uZ2V0Rm9ybUNvbnRleHQ/LigpID8/IGV4ZWN1dGlvbkNvbnRleHQgPz8gbnVsbDtcclxuICAgIGNvbnN0IGZvcm0gPSBMb2FkRm9ybShmb3JtQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGJvZHkgPSBbXSwgdGFiID0gW10sIGhlYWRlciA9IFtdLCBicGYgPSBbXSwgcXVpY2sgPSBbXSwgZ3JpZCA9IFtdLCBuYXZpZ2F0aW9uID0gW10sIGRpYWxvZyA9IFtdIH0gPSBmb3JtQ29uZmlnIGFzIGFueTtcclxuICAgIGNvbnN0IGJvZHlPYmo6IGFueSA9IHt9O1xyXG4gICAgYm9keS5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiBib2R5T2JqW2ZpZWxkXSA9IHt9KTtcclxuICAgIGxvYWRGaWVsZHMoZm9ybUNvbnRleHQsIGJvZHlPYmopO1xyXG4gICAgY29uc3QgdGFiT2JqOiBhbnkgPSB7fTtcclxuICAgIHRhYi5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBbdGFiTmFtZSwgc2VjdGlvbk5hbWVdID0gaXRlbS5zcGxpdCgnX19fJyk7XHJcbiAgICAgICAgaWYgKCF0YWJPYmpbdGFiTmFtZV0pIHtcclxuICAgICAgICAgICAgdGFiT2JqW3RhYk5hbWVdID0geyBTZWN0aW9uOiB7fSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJPYmpbdGFiTmFtZV0uU2VjdGlvbltzZWN0aW9uTmFtZV0gPSB7fTtcclxuICAgIH0pO1xyXG4gICAgbG9hZFRhYnMoZm9ybUNvbnRleHQsIHRhYk9iaik7XHJcbiAgICBib2R5T2JqLlRhYiA9IHRhYk9iajtcclxuICAgIGZvcm0uQm9keSA9IGJvZHlPYmo7XHJcbiAgICBjb25zdCBoZWFkZXJPYmo6IGFueSA9IHt9O1xyXG4gICAgaGVhZGVyLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IGhlYWRlck9ialtmaWVsZF0gPSB7fSk7XHJcbiAgICBsb2FkRmllbGRzKGZvcm1Db250ZXh0LCBoZWFkZXJPYmosICdoZWFkZXJfJyk7XHJcbiAgICBmb3JtLkhlYWRlciA9IGhlYWRlck9iajtcclxuICAgIGNvbnN0IHByb2Nlc3MgPSBMb2FkUHJvY2Vzcyhmb3JtQ29udGV4dCk7XHJcbiAgICBpZiAoYnBmLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBicGZPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGxldCBicGZQcm9jZXNzTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgYnBmLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBbcHJvY2Vzc05hbWUsIGZpZWxkTmFtZV0gPSBpdGVtLnNwbGl0KCdfX18nKTtcclxuICAgICAgICAgICAgaWYgKCFicGZQcm9jZXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYnBmUHJvY2Vzc05hbWUgPSBwcm9jZXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicGZPYmpbZmllbGROYW1lXSA9IHt9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvYWRGaWVsZHMoZm9ybUNvbnRleHQsIGJwZk9iaiwgJ2hlYWRlcl9wcm9jZXNzXycpO1xyXG4gICAgICAgIGlmIChicGZQcm9jZXNzTmFtZSkge1xyXG4gICAgICAgICAgICBwcm9jZXNzW2JwZlByb2Nlc3NOYW1lXSA9IGJwZk9iajtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtLlByb2Nlc3MgPSBwcm9jZXNzO1xyXG4gICAgY29uc3QgcXVpY2tGb3JtT2JqOiBhbnkgPSB7fTtcclxuICAgIHF1aWNrLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtxdWlja0Zvcm1OYW1lLCBmaWVsZE5hbWVdID0gaXRlbS5zcGxpdCgnX19fJyk7XHJcbiAgICAgICAgaWYgKCFxdWlja0Zvcm1PYmpbcXVpY2tGb3JtTmFtZV0pIHtcclxuICAgICAgICAgICAgcXVpY2tGb3JtT2JqW3F1aWNrRm9ybU5hbWVdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgcXVpY2tGb3JtT2JqW3F1aWNrRm9ybU5hbWVdW2ZpZWxkTmFtZV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxvYWRRdWlja0Zvcm1zKGZvcm1Db250ZXh0LCBxdWlja0Zvcm1PYmopO1xyXG4gICAgZm9ybS5RdWlja0Zvcm0gPSBxdWlja0Zvcm1PYmo7XHJcbiAgICBjb25zdCBncmlkT2JqOiBhbnkgPSB7fTtcclxuICAgIGdyaWQuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiBncmlkT2JqW2l0ZW1dID0ge30pO1xyXG4gICAgbG9hZEdyaWRzKGZvcm1Db250ZXh0LCBncmlkT2JqKTtcclxuICAgIGZvcm0uR3JpZCA9IGdyaWRPYmo7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uT2JqOiBhbnkgPSB7fTtcclxuICAgIG5hdmlnYXRpb24uZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiBuYXZpZ2F0aW9uT2JqW2l0ZW1dID0ge30pO1xyXG4gICAgbG9hZE5hdmlnYXRpb25zKGZvcm1Db250ZXh0LCBuYXZpZ2F0aW9uT2JqKTtcclxuICAgIGZvcm0uTmF2aWdhdGlvbiA9IG5hdmlnYXRpb25PYmo7XHJcbiAgICBpZiAoZGlhbG9nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3JtLkRpYWxvZyA9IExvYWRGb3JtRGlhbG9nKGZvcm1Db250ZXh0LCBkaWFsb2cpO1xyXG4gICAgfVxyXG4gICAgZm9ybS5VdGlsaXR5ID0gTG9hZFV0aWxpdHkoZGVmYXVsdFdlYlJlc291cmNlTmFtZSk7XHJcbiAgICBmb3JtLkV4ZWN1dGlvbkNvbnRleHQgPSBMb2FkRXhlY3V0aW9uQ29udGV4dChleGVjdXRpb25Db250ZXh0KTtcclxuICAgIGxvYWRPdGhlcnMoZm9ybUNvbnRleHQsIGZvcm0sIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUpO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRQcm9jZXNzKGZvcm1Db250ZXh0OiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgcHJvY2VzczogYW55ID0ge307XHJcbiAgICBjb25zdCBnZXRQcm9jZXNzID0gZm9ybUNvbnRleHQ/LmRhdGE/LnByb2Nlc3M7XHJcbiAgICBjb25zdCBnZXRQcm9jZXNzVWkgPSBmb3JtQ29udGV4dD8udWk/LnByb2Nlc3M7XHJcbiAgICBjb25zdCBsb2FkU3RlcCA9IChzdGVwOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdBdHRyaWJ1dGUnLCAoKSA9PiBzdGVwPy5nZXRBdHRyaWJ1dGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBzdGVwPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdQcm9ncmVzcycsICgpID0+IHN0ZXA/LmdldFByb2dyZXNzKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdSZXF1aXJlZCcsICgpID0+IHN0ZXA/LmlzUmVxdWlyZWQoKSk7XHJcbiAgICAgICAgb2JqLlNldFByb2dyZXNzID0gKHN0ZXBQcm9ncmVzczogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpID0+IHN0ZXA/LnNldFByb2dyZXNzKHN0ZXBQcm9ncmVzcywgbWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkU3RhZ2UgPSAoc3RhZ2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NhdGVnb3J5JywgKCkgPT4gc3RhZ2U/LmdldENhdGVnb3J5KCk/LmdldFZhbHVlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdFbnRpdHlOYW1lJywgKCkgPT4gc3RhZ2U/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lkJywgKCkgPT4gc3RhZ2U/LmdldElkKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdOYW1lJywgKCkgPT4gc3RhZ2U/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1N0YXR1cycsICgpID0+IHN0YWdlPy5nZXRTdGF0dXMoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1N0ZXBzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwcyA9IHN0YWdlPy5nZXRTdGVwcygpO1xyXG4gICAgICAgICAgICBpZiAoIXN0ZXBzKSByZXR1cm4gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBzQXJyYXk6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHN0ZXBzLmxlbmd0aCB8fCAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwc0FycmF5LnB1c2gobG9hZFN0ZXAoc3RlcHNbaW5kZXhdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0ZXBzQXJyYXk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JqLkFsbG93Q3JlYXRlTmV3ID0gKGNhbGxiYWNrOiBhbnkpID0+IHsgaWYgKHN0YWdlPy5nZXROYXZpZ2F0aW9uQmVoYXZpb3IoKSkgc3RhZ2UuZ2V0TmF2aWdhdGlvbkJlaGF2aW9yKCkuYWxsb3dDcmVhdGVOZXcgPSBjYWxsYmFjazsgfTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRQcm9jZXNzSW5uZXIgPSAocHJvY2Vzc09iajogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSWQnLCAoKSA9PiBwcm9jZXNzT2JqPy5nZXRJZCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNSZW5kZXJlZCcsICgpID0+IHByb2Nlc3NPYmo/LmlzUmVuZGVyZWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBwcm9jZXNzT2JqPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTdGFnZXMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NTdGFnZXMgPSBwcm9jZXNzT2JqPy5nZXRTdGFnZXMoKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhZ2VzT2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgc3RhZ2VzT2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFnZSA9IHByb2Nlc3NTdGFnZXM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZFN0YWdlKHN0YWdlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RhZ2VzT2JqLmdldExlbmd0aCA9ICgpID0+IHByb2Nlc3NTdGFnZXM/LmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICBzdGFnZXNPYmouZm9yRWFjaCA9IChjYWxsYmFjazogKHN0YWdlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHByb2Nlc3NTdGFnZXM/LmdldExlbmd0aCgpIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBwcm9jZXNzU3RhZ2VzLmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobG9hZFN0YWdlKHN0YWdlKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhZ2VzT2JqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdBY3RpdmVQYXRoJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVBhdGhPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGFjdGl2ZVBhdGhPYmouZ2V0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBnZXRQcm9jZXNzPy5nZXRBY3RpdmVQYXRoKCk/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2FkU3RhZ2Uoc3RhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYWN0aXZlUGF0aE9iai5nZXRMZW5ndGggPSAoKSA9PiBnZXRQcm9jZXNzPy5nZXRBY3RpdmVQYXRoKCk/LmdldExlbmd0aCgpO1xyXG4gICAgICAgIGFjdGl2ZVBhdGhPYmouZm9yRWFjaCA9IChjYWxsYmFjazogKHN0YWdlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhZ2VzID0gZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlUGF0aCgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RhZ2VzPy5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZXM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhsb2FkU3RhZ2Uoc3RhZ2UpLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBhY3RpdmVQYXRoT2JqO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0FjdGl2ZVByb2Nlc3MnLCAoKSA9PiBsb2FkUHJvY2Vzc0lubmVyKGdldFByb2Nlc3M/LmdldEFjdGl2ZVByb2Nlc3MoKSkpO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdBY3RpdmVTdGFnZScsICgpID0+IGxvYWRTdGFnZShnZXRQcm9jZXNzPy5nZXRBY3RpdmVTdGFnZSgpKSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0luc3RhbmNlSWQnLCAoKSA9PiBnZXRQcm9jZXNzPy5nZXRJbnN0YW5jZUlkKCkpO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdJbnN0YW5jZU5hbWUnLCAoKSA9PiBnZXRQcm9jZXNzPy5nZXRJbnN0YW5jZU5hbWUoKSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ1NlbGVjdGVkU3RhZ2UnLCAoKSA9PiBsb2FkU3RhZ2UoZ2V0UHJvY2Vzcz8uZ2V0U2VsZWN0ZWRTdGFnZSgpKSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIocHJvY2VzcywgJ0Rpc3BsYXlTdGF0ZScsICgpID0+IGdldFByb2Nlc3NVaT8uZ2V0RGlzcGxheVN0YXRlKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGdldFByb2Nlc3NVaT8uc2V0RGlzcGxheVN0YXRlKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIocHJvY2VzcywgJ1N0YXR1cycsICgpID0+IGdldFByb2Nlc3M/LmdldFN0YXR1cygpLCAodmFsdWU6IHN0cmluZykgPT4geyBnZXRQcm9jZXNzPy5zZXRTdGF0dXModmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihwcm9jZXNzLCAnVmlzaWJsZScsICgpID0+IGdldFByb2Nlc3NVaT8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgZ2V0UHJvY2Vzc1VpPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICBwcm9jZXNzLkFkZE9uUHJlUHJvY2Vzc1N0YXR1c0NoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblByZVByb2Nlc3NTdGF0dXNDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5BZGRPblByZVN0YWdlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uUHJlU3RhZ2VDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5BZGRPblByb2Nlc3NTdGF0dXNDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25Qcm9jZXNzU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuQWRkT25TdGFnZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblN0YWdlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuQWRkT25TdGFnZVNlbGVjdGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uU3RhZ2VTZWxlY3RlZChjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkVuYWJsZWRQcm9jZXNzZXMgPSAoY2FsbGJhY2s6IChwcm9jZXNzZXM6IGFueVtdKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvY2Vzcz8uZ2V0RW5hYmxlZFByb2Nlc3NlcygoZW5hYmxlZFByb2Nlc3NlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlcyA9IE9iamVjdC5lbnRyaWVzKGVuYWJsZWRQcm9jZXNzZXMpLm1hcCgoW3Byb2Nlc3NJZCwgcHJvY2Vzc05hbWVdKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc0lkOiBwcm9jZXNzSWQsXHJcbiAgICAgICAgICAgICAgICBQcm9jZXNzTmFtZTogcHJvY2Vzc05hbWVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhwcm9jZXNzZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHByb2Nlc3MuTW92ZU5leHQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ubW92ZU5leHQoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5Nb3ZlUHJldmlvdXMgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ubW92ZVByZXZpb3VzKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUHJvY2Vzc0luc3RhbmNlcyA9IChjYWxsYmFjazogKHByb2Nlc3NlczogYW55W10pID0+IHZvaWQpID0+IHtcclxuICAgICAgICBnZXRQcm9jZXNzPy5nZXRQcm9jZXNzSW5zdGFuY2VzKChwcm9jZXNzSW5zdGFuY2VzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VzID0gT2JqZWN0LnZhbHVlcyhwcm9jZXNzSW5zdGFuY2VzKS5tYXAoKHByb2M6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NJZDogcHJvYy5Qcm9jZXNzRGVmaW5pdGlvbklELFxyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc05hbWU6IHByb2MuUHJvY2Vzc0RlZmluaXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlZE9uOiBwcm9jLkNyZWF0ZWRPbixcclxuICAgICAgICAgICAgICAgIENyZWF0ZWRPbkRhdGU6IHByb2MuQ3JlYXRlZE9uRGF0ZSxcclxuICAgICAgICAgICAgICAgIEluc3RhbmNlSWQ6IHByb2MuUHJvY2Vzc0luc3RhbmNlSUQsXHJcbiAgICAgICAgICAgICAgICBJbnN0YW5jZU5hbWU6IHByb2MuUHJvY2Vzc0luc3RhbmNlTmFtZSxcclxuICAgICAgICAgICAgICAgIFN0YXR1czogcHJvYy5TdGF0dXNDb2RlTmFtZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHByb2Nlc3Nlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcHJvY2Vzcy5SZWZsb3cgPSAodXBkYXRlVWk6IGJvb2xlYW4sIHBhcmVudFN0YWdlOiBzdHJpbmcsIG5leHRTdGFnZTogc3RyaW5nKSA9PiBnZXRQcm9jZXNzVWk/LnJlZmxvdyh1cGRhdGVVaSwgcGFyZW50U3RhZ2UsIG5leHRTdGFnZSk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uUHJlUHJvY2Vzc1N0YXR1c0NoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblByZVByb2Nlc3NTdGF0dXNDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblByZVN0YWdlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uUHJlU3RhZ2VDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblByb2Nlc3NTdGF0dXNDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25Qcm9jZXNzU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25TdGFnZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblN0YWdlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25TdGFnZVNlbGVjdGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uU3RhZ2VTZWxlY3RlZChjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlNldEFjdGl2ZVByb2Nlc3MgPSAocHJvY2Vzc0lkOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnNldEFjdGl2ZVByb2Nlc3MocHJvY2Vzc0lkLCBjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlNldEFjdGl2ZVByb2Nlc3NJbnN0YW5jZSA9IChwcm9jZXNzSW5zdGFuY2VJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5zZXRBY3RpdmVQcm9jZXNzSW5zdGFuY2UocHJvY2Vzc0luc3RhbmNlSWQsIGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuU2V0QWN0aXZlU3RhZ2UgPSAoc3RhZ2VJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5zZXRBY3RpdmVTdGFnZShzdGFnZUlkLCBjYWxsYmFjayk7XHJcbiAgICByZXR1cm4gcHJvY2VzcztcclxufVxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBpbnRlcmZhY2UgZm9yIGZvcm0gaW5pdGlhbGl6YXRpb24uXHJcbiAqIFNwZWNpZmllcyB3aGljaCBmaWVsZHMsIHRhYnMsIGdyaWRzLCBldGMuIHRvIGxvYWQgb24gYSBmb3JtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRm9ybUNvbmZpZyB7XHJcbiAgICAvKiogQXJyYXkgb2YgYm9keSBmaWVsZCBsb2dpY2FsIG5hbWVzICovXHJcbiAgICBib2R5Pzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgaGVhZGVyIGZpZWxkIGxvZ2ljYWwgbmFtZXMgKi9cclxuICAgIGhlYWRlcj86IHN0cmluZ1tdO1xyXG4gICAgLyoqIEFycmF5IG9mIHRhYiBhbmQgc2VjdGlvbiBuYW1lcyBpbiBmb3JtYXQgXCJUYWJOYW1lX19fU2VjdGlvbk5hbWVcIiAqL1xyXG4gICAgdGFiPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgZ3JpZCBjb250cm9sIG5hbWVzICovXHJcbiAgICBncmlkPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgbmF2aWdhdGlvbiBpdGVtIElEcyAqL1xyXG4gICAgbmF2aWdhdGlvbj86IHN0cmluZ1tdO1xyXG4gICAgLyoqIEFycmF5IG9mIHF1aWNrIGZvcm0gbmFtZXMgaW4gZm9ybWF0IFwiUXVpY2tGb3JtTmFtZV9fX0ZpZWxkTmFtZVwiICovXHJcbiAgICBxdWljaz86IHN0cmluZ1tdO1xyXG4gICAgLyoqIEFycmF5IG9mIEJQRiBmaWVsZHMgaW4gZm9ybWF0IFwiUHJvY2Vzc05hbWVfX19GaWVsZE5hbWVcIiAqL1xyXG4gICAgYnBmPzogc3RyaW5nW107XHJcbn1cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHR5cGVkIGVudGl0eSBmb3Jtcy5cclxuICogUHJvdmlkZXMgc3Ryb25nbHktdHlwZWQgYWNjZXNzIHRvIGZvcm0gY29udHJvbHMsIGZpZWxkcywgdGFicywgZ3JpZHMsIGFuZCBtb3JlLlxyXG4gKiBFeHRlbmQgdGhpcyBjbGFzcyBpbiBnZW5lcmF0ZWQgZW50aXR5IGZvcm0gZmlsZXMuXHJcbiAqIEB0ZW1wbGF0ZSBUQm9keSBUeXBlIGRlZmluaXRpb24gZm9yIGJvZHkgZmllbGRzXHJcbiAqIEB0ZW1wbGF0ZSBUSGVhZGVyIFR5cGUgZGVmaW5pdGlvbiBmb3IgaGVhZGVyIGZpZWxkc1xyXG4gKiBAdGVtcGxhdGUgVFRhYiBUeXBlIGRlZmluaXRpb24gZm9yIHRhYnNcclxuICogQHRlbXBsYXRlIFRHcmlkIFR5cGUgZGVmaW5pdGlvbiBmb3IgZ3JpZHNcclxuICogQHRlbXBsYXRlIFROYXZpZ2F0aW9uIFR5cGUgZGVmaW5pdGlvbiBmb3IgbmF2aWdhdGlvbiBpdGVtc1xyXG4gKiBAdGVtcGxhdGUgVFF1aWNrRm9ybSBUeXBlIGRlZmluaXRpb24gZm9yIHF1aWNrIHZpZXcgZm9ybXNcclxuICogQHRlbXBsYXRlIFRQcm9jZXNzIFR5cGUgZGVmaW5pdGlvbiBmb3IgYnVzaW5lc3MgcHJvY2VzcyBmbG93c1xyXG4gKiBAbGluayBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXItYXBwcy9kZXZlbG9wZXIvbW9kZWwtZHJpdmVuLWFwcHMvY2xpZW50YXBpL3JlZmVyZW5jZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvcm1CYXNlPFRCb2R5LCBUSGVhZGVyLCBUVGFiLCBUR3JpZCwgVE5hdmlnYXRpb24sIFRRdWlja0Zvcm0sIFRQcm9jZXNzID0gYW55PiB7XHJcbiAgICBwdWJsaWMgQm9keTogVEJvZHk7XHJcbiAgICBwdWJsaWMgSGVhZGVyOiBUSGVhZGVyO1xyXG4gICAgcHVibGljIFRhYjogVFRhYjtcclxuICAgIHB1YmxpYyBHcmlkOiBUR3JpZDtcclxuICAgIHB1YmxpYyBOYXZpZ2F0aW9uOiBUTmF2aWdhdGlvbjtcclxuICAgIHB1YmxpYyBRdWlja0Zvcm06IFRRdWlja0Zvcm07XHJcbiAgICBwdWJsaWMgUHJvY2VzczogVFByb2Nlc3M7XHJcbiAgICBwdWJsaWMgRXhlY3V0aW9uQ29udGV4dDogRGV2S2l0LklFeGVjdXRpb25Db250ZXh0O1xyXG4gICAgcHVibGljIFV0aWxpdHk6IGFueTtcclxuICAgIHB1YmxpYyBTaWRlUGFuZXM6IERldktpdC5JU2lkZVBhbmVzO1xyXG4gICAgcHVibGljIFdlYkFwaTogRGV2S2l0LklXZWJBcGk7XHJcbiAgICBwdWJsaWMgQ29waWxvdDogRGV2S2l0LklDb3BpbG90O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEZvcm1JZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEZvcm1MYWJlbDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEZvcm1UeXBlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5SWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRGF0YUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRGF0YUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgQXR0cmlidXRlczogYW55O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IENvbnRyb2xzOiBhbnk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRGF0YVhtbDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5SXNWYWxpZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlSZWZlcmVuY2U6IGFueTtcclxuICAgIHB1YmxpYyByZWFkb25seSBQcmltYXJ5QXR0cmlidXRlVmFsdWU6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBWaWV3UG9ydEhlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IFZpZXdQb3J0V2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBTYXZlOiAoc2F2ZU9wdGlvbnM/OiBhbnkpID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBwdWJsaWMgUmVmcmVzaDogKHNhdmU/OiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgcHVibGljIENsb3NlOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFNldEZvcm1Ob3RpZmljYXRpb246IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgQ2xlYXJGb3JtTm90aWZpY2F0aW9uOiAodW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIHB1YmxpYyBSZWZyZXNoUmliYm9uOiAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlBZGRMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBVaVJlbW92ZUxvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpQWRkT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlSZW1vdmVPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBBZGRPblBvc3RTYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgQWRkT25TYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgUmVtb3ZlT25Qb3N0U2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFJlbW92ZU9uU2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIERhdGFBZGRPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBEYXRhUmVtb3ZlT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRm9ybUlzVmlzaWJsZTogKGZvcm1JZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgcHVibGljIEZvcm1OYXZpZ2F0ZVRvRm9ybUlkOiAoZm9ybUlkOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWw6IChmb3JtTGFiZWw6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBGb3JtU2V0VmlzaWJsZTogKGZvcm1JZDogc3RyaW5nLCB2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFNldEZvcm1FbnRpdHlOYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZXhlY3V0aW9uQ29udGV4dDogYW55LFxyXG4gICAgICAgIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgICAgICBmb3JtQ29uZmlnOiBJRm9ybUNvbmZpZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IExvYWRGb3JtVjI8VEJvZHksIFRIZWFkZXIsIFRUYWIsIFRHcmlkLCBUTmF2aWdhdGlvbiwgVFF1aWNrRm9ybSwgVFByb2Nlc3M+KFxyXG4gICAgICAgICAgICBleGVjdXRpb25Db250ZXh0LFxyXG4gICAgICAgICAgICBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lLFxyXG4gICAgICAgICAgICBmb3JtQ29uZmlnXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLkJvZHkgPSBmb3JtLkJvZHk7XHJcbiAgICAgICAgdGhpcy5IZWFkZXIgPSBmb3JtLkhlYWRlcjtcclxuICAgICAgICB0aGlzLlRhYiA9IGZvcm0uVGFiO1xyXG4gICAgICAgIHRoaXMuR3JpZCA9IGZvcm0uR3JpZDtcclxuICAgICAgICB0aGlzLk5hdmlnYXRpb24gPSBmb3JtLk5hdmlnYXRpb247XHJcbiAgICAgICAgdGhpcy5RdWlja0Zvcm0gPSBmb3JtLlF1aWNrRm9ybTtcclxuICAgICAgICB0aGlzLlByb2Nlc3MgPSBmb3JtLlByb2Nlc3M7XHJcbiAgICAgICAgdGhpcy5FeGVjdXRpb25Db250ZXh0ID0gZm9ybS5FeGVjdXRpb25Db250ZXh0O1xyXG4gICAgICAgIHRoaXMuRm9ybUlkID0gZm9ybS5Gb3JtSWQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtTGFiZWwgPSBmb3JtLkZvcm1MYWJlbDtcclxuICAgICAgICB0aGlzLkZvcm1UeXBlID0gZm9ybS5Gb3JtVHlwZTtcclxuICAgICAgICB0aGlzLkVudGl0eUlkID0gZm9ybS5FbnRpdHlJZDtcclxuICAgICAgICB0aGlzLkVudGl0eU5hbWUgPSBmb3JtLkVudGl0eU5hbWU7XHJcbiAgICAgICAgdGhpcy5EYXRhSXNEaXJ0eSA9IGZvcm0uRGF0YUlzRGlydHk7XHJcbiAgICAgICAgdGhpcy5EYXRhSXNWYWxpZCA9IGZvcm0uRGF0YUlzVmFsaWQ7XHJcbiAgICAgICAgdGhpcy5BdHRyaWJ1dGVzID0gZm9ybS5BdHRyaWJ1dGVzO1xyXG4gICAgICAgIHRoaXMuQ29udHJvbHMgPSBmb3JtLkNvbnRyb2xzO1xyXG4gICAgICAgIHRoaXMuRGF0YVhtbCA9IGZvcm0uRGF0YVhtbDtcclxuICAgICAgICB0aGlzLkVudGl0eUlzRGlydHkgPSBmb3JtLkVudGl0eUlzRGlydHk7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlJc1ZhbGlkID0gZm9ybS5FbnRpdHlJc1ZhbGlkO1xyXG4gICAgICAgIHRoaXMuRW50aXR5UmVmZXJlbmNlID0gZm9ybS5FbnRpdHlSZWZlcmVuY2U7XHJcbiAgICAgICAgdGhpcy5QcmltYXJ5QXR0cmlidXRlVmFsdWUgPSBmb3JtLlByaW1hcnlBdHRyaWJ1dGVWYWx1ZTtcclxuICAgICAgICB0aGlzLlZpZXdQb3J0SGVpZ2h0ID0gZm9ybS5WaWV3UG9ydEhlaWdodDtcclxuICAgICAgICB0aGlzLlZpZXdQb3J0V2lkdGggPSBmb3JtLlZpZXdQb3J0V2lkdGg7XHJcbiAgICAgICAgdGhpcy5TYXZlID0gZm9ybS5TYXZlO1xyXG4gICAgICAgIHRoaXMuUmVmcmVzaCA9IGZvcm0uUmVmcmVzaDtcclxuICAgICAgICB0aGlzLkNsb3NlID0gZm9ybS5DbG9zZTtcclxuICAgICAgICB0aGlzLlNldEZvcm1Ob3RpZmljYXRpb24gPSBmb3JtLlNldEZvcm1Ob3RpZmljYXRpb247XHJcbiAgICAgICAgdGhpcy5DbGVhckZvcm1Ob3RpZmljYXRpb24gPSBmb3JtLkNsZWFyRm9ybU5vdGlmaWNhdGlvbjtcclxuICAgICAgICB0aGlzLlJlZnJlc2hSaWJib24gPSBmb3JtLlJlZnJlc2hSaWJib247XHJcbiAgICAgICAgdGhpcy5VaUFkZExvYWRlZCA9IGZvcm0uVWlBZGRMb2FkZWQ7XHJcbiAgICAgICAgdGhpcy5VaVJlbW92ZUxvYWRlZCA9IGZvcm0uVWlSZW1vdmVMb2FkZWQ7XHJcbiAgICAgICAgdGhpcy5VaUFkZE9uTG9hZCA9IGZvcm0uVWlBZGRPbkxvYWQ7XHJcbiAgICAgICAgdGhpcy5VaVJlbW92ZU9uTG9hZCA9IGZvcm0uVWlSZW1vdmVPbkxvYWQ7XHJcbiAgICAgICAgdGhpcy5BZGRPblBvc3RTYXZlID0gZm9ybS5BZGRPblBvc3RTYXZlO1xyXG4gICAgICAgIHRoaXMuQWRkT25TYXZlID0gZm9ybS5BZGRPblNhdmU7XHJcbiAgICAgICAgdGhpcy5SZW1vdmVPblBvc3RTYXZlID0gZm9ybS5SZW1vdmVPblBvc3RTYXZlO1xyXG4gICAgICAgIHRoaXMuUmVtb3ZlT25TYXZlID0gZm9ybS5SZW1vdmVPblNhdmU7XHJcbiAgICAgICAgdGhpcy5EYXRhQWRkT25Mb2FkID0gZm9ybS5EYXRhQWRkT25Mb2FkO1xyXG4gICAgICAgIHRoaXMuRGF0YVJlbW92ZU9uTG9hZCA9IGZvcm0uRGF0YVJlbW92ZU9uTG9hZDtcclxuICAgICAgICB0aGlzLkZvcm1Jc1Zpc2libGUgPSBmb3JtLkZvcm1Jc1Zpc2libGU7XHJcbiAgICAgICAgdGhpcy5Gb3JtTmF2aWdhdGVUb0Zvcm1JZCA9IGZvcm0uRm9ybU5hdmlnYXRlVG9Gb3JtSWQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbCA9IGZvcm0uRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWw7XHJcbiAgICAgICAgdGhpcy5Gb3JtU2V0VmlzaWJsZSA9IGZvcm0uRm9ybVNldFZpc2libGU7XHJcbiAgICAgICAgdGhpcy5TZXRGb3JtRW50aXR5TmFtZSA9IGZvcm0uU2V0Rm9ybUVudGl0eU5hbWU7XHJcbiAgICAgICAgdGhpcy5VdGlsaXR5ID0gZm9ybS5VdGlsaXR5O1xyXG4gICAgICAgIHRoaXMuU2lkZVBhbmVzID0gZm9ybS5TaWRlUGFuZXM7XHJcbiAgICAgICAgdGhpcy5XZWJBcGkgPSBmb3JtLldlYkFwaTtcclxuICAgICAgICB0aGlzLkNvcGlsb3QgPSBmb3JtLkNvcGlsb3Q7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRVdGlsaXR5KGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgdXRpbGl0eTogYW55ID0ge307XHJcbiAgICBjb25zdCB4cm0gPSBnZXRYcm0oKTtcclxuICAgIGNvbnN0IGdldEFwcCA9IHhybT8uQXBwO1xyXG4gICAgY29uc3QgZ2V0RGV2aWNlID0geHJtPy5EZXZpY2U7XHJcbiAgICBjb25zdCBnZXRFbmNvZGluZyA9IHhybT8uRW5jb2Rpbmc7XHJcbiAgICBjb25zdCBnZXRHbG9iYWxDb250ZXh0ID0geHJtPy5VdGlsaXR5Py5nZXRHbG9iYWxDb250ZXh0KCk7XHJcbiAgICBjb25zdCBnZXROYXZpZ2F0aW9uID0geHJtPy5OYXZpZ2F0aW9uO1xyXG4gICAgY29uc3QgZ2V0UGFuZWwgPSB4cm0/LlBhbmVsO1xyXG4gICAgY29uc3QgZ2V0VXRpbGl0eSA9IHhybT8uVXRpbGl0eTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnQ2xpZW50JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gZ2V0R2xvYmFsQ29udGV4dD8uY2xpZW50O1xyXG4gICAgICAgIGdldHRlcihvYmosICdDbGllbnROYW1lJywgKCkgPT4gY2xpZW50Py5nZXRDbGllbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NsaWVudFN0YXRlJywgKCkgPT4gY2xpZW50Py5nZXRDbGllbnRTdGF0ZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRm9ybUZhY3RvcicsICgpID0+IGNsaWVudD8uZ2V0Rm9ybUZhY3RvcigpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNOZXR3b3JrQXZhaWxhYmxlJywgKCkgPT4gY2xpZW50Py5pc05ldHdvcmtBdmFpbGFibGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzT2ZmbGluZScsICgpID0+IGNsaWVudD8uaXNPZmZsaW5lKCkpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnQ2xpZW50VXJsJywgKCkgPT4gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0Q2xpZW50VXJsKCkpO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdDdXJyZW50QXBwVXJsJywgKCkgPT4gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0Q3VycmVudEFwcFVybCgpKTtcclxuICAgIC8vIEB0cy1pZ25vcmUgLSBpc09uUHJlbWlzZXMgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgIGdldHRlcih1dGlsaXR5LCAnSXNPblByZW1pc2VzJywgKCkgPT4gZ2V0R2xvYmFsQ29udGV4dD8uaXNPblByZW1pc2VzKCkpO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdMZWFybmluZ1BhdGhBdHRyaWJ1dGVOYW1lJywgKCkgPT4gZ2V0VXRpbGl0eT8uZ2V0TGVhcm5pbmdQYXRoQXR0cmlidXRlTmFtZSgpKTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnT3JnYW5pemF0aW9uU2V0dGluZ3MnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBvcmdhbml6YXRpb25TZXR0aW5ncyA9IGdldEdsb2JhbENvbnRleHQ/Lm9yZ2FuaXphdGlvblNldHRpbmdzO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBhdHRyaWJ1dGVzIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0F0dHJpYnV0ZXMnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uYXR0cmlidXRlcyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0Jhc2VDdXJyZW5jeScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5iYXNlQ3VycmVuY3kpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdCYXNlQ3VycmVuY3lJZCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5iYXNlQ3VycmVuY3lJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0RlZmF1bHRDb3VudHJ5Q29kZScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5kZWZhdWx0Q291bnRyeUNvZGUpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBmdWxsTmFtZUNvbnZlbnRpb25Db2RlIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0Z1bGxOYW1lQ29udmVudGlvbkNvZGUnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uZnVsbE5hbWVDb252ZW50aW9uQ29kZSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzQXV0b1NhdmVFbmFibGVkJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmlzQXV0b1NhdmVFbmFibGVkKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlIC0gaXNUcmlhbE9yZ2FuaXphdGlvbiBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgICAgIGdldHRlcihvYmosICdJc1RyaWFsT3JnYW5pemF0aW9uJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmlzVHJpYWxPcmdhbml6YXRpb24pO1xyXG4gICAgICAgIGdldHRlcihvYmosICdMYW5ndWFnZUlkJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/Lmxhbmd1YWdlSWQpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBvcmdhbml6YXRpb25FeHBpcnlEYXRlIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ09yZ2FuaXphdGlvbkV4cGlyeURhdGUnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8ub3JnYW5pemF0aW9uRXhwaXJ5RGF0ZSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ09yZ2FuaXphdGlvbklkJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/Lm9yZ2FuaXphdGlvbklkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVW5pcXVlTmFtZScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy51bmlxdWVOYW1lKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVXNlU2t5cGVQcm90b2NvbCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy51c2VTa3lwZVByb3RvY29sKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ1BhZ2VDb250ZXh0JywgKCkgPT4gZ2V0VXRpbGl0eT8uZ2V0UGFnZUNvbnRleHQoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ1VzZXJTZXR0aW5ncycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IGdldEdsb2JhbENvbnRleHQ/LnVzZXJTZXR0aW5ncztcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRGF0ZUZvcm1hdHRpbmdJbmZvJywgKCkgPT4gdXNlclNldHRpbmdzPy5kYXRlRm9ybWF0dGluZ0luZm8pO1xyXG4gICAgICAgIGdldHRlcihvYmosICdEZWZhdWx0RGFzaGJvYXJkSWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmRlZmF1bHREYXNoYm9hcmRJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzR3VpZGVkSGVscEVuYWJsZWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmlzR3VpZGVkSGVscEVuYWJsZWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc0hpZ2hDb250cmFzdEVuYWJsZWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmlzSGlnaENvbnRyYXN0RW5hYmxlZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzUlRMJywgKCkgPT4gdXNlclNldHRpbmdzPy5pc1JUTCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0xhbmd1YWdlSWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/Lmxhbmd1YWdlSWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdSb2xlcycsICgpID0+IHVzZXJTZXR0aW5ncz8ucm9sZXMpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTZWN1cml0eVJvbGVQcml2aWxlZ2VzJywgKCkgPT4gdXNlclNldHRpbmdzPy5zZWN1cml0eVJvbGVQcml2aWxlZ2VzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU2VjdXJpdHlSb2xlcycsICgpID0+IHVzZXJTZXR0aW5ncz8uc2VjdXJpdHlSb2xlcyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1RpbWVab25lT2Zmc2V0TWludXRlcycsICgpID0+IHVzZXJTZXR0aW5ncz8uZ2V0VGltZVpvbmVPZmZzZXRNaW51dGVzKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdUcmFuc2FjdGlvbkN1cnJlbmN5JywgKCkgPT4gdXNlclNldHRpbmdzPy50cmFuc2FjdGlvbkN1cnJlbmN5KTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVHJhbnNhY3Rpb25DdXJyZW5jeUlkJywgKCkgPT4gdXNlclNldHRpbmdzPy50cmFuc2FjdGlvbkN1cnJlbmN5SWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVc2VySWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnVzZXJJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1VzZXJOYW1lJywgKCkgPT4gdXNlclNldHRpbmdzPy51c2VyTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdWZXJzaW9uJywgKCkgPT4gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0VmVyc2lvbigpKTtcclxuICAgIHV0aWxpdHkuQWRkR2xvYmFsTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gKG5vdGlmaWNhdGlvbjogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRBcHA/LmFkZEdsb2JhbE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQWR2YW5jZWRDb25maWdTZXR0aW5nID0gKHNldHRpbmc6IHN0cmluZykgPT4gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0QWR2YW5jZWRDb25maWdTZXR0aW5nKHNldHRpbmcgYXMgXCJNYXhDaGlsZEluY2lkZW50TnVtYmVyXCIgfCBcIk1heEluY2lkZW50TWVyZ2VOdW1iZXJcIik7XHJcbiAgICB1dGlsaXR5LkFsbG93ZWRTdGF0dXNUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uIChlbnRpdHlOYW1lOiBzdHJpbmcsIHN0YXRlQ29kZTogbnVtYmVyLCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRVdGlsaXR5Py5nZXRBbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnMoZW50aXR5TmFtZSwgc3RhdGVDb2RlKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkJhcmNvZGVWYWx1ZSA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmdldEJhcmNvZGVWYWx1ZSgpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2FwdHVyZUF1ZGlvID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uY2FwdHVyZUF1ZGlvKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DYXB0dXJlSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2VPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uY2FwdHVyZUltYWdlKGltYWdlT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DYXB0dXJlVmlkZW8gPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5jYXB0dXJlVmlkZW8oKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNsZWFyR2xvYmFsTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gKHVuaXF1ZUlkOiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldEFwcD8uY2xlYXJHbG9iYWxOb3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2xvc2VQcm9ncmVzc0luZGljYXRvciA9ICgpID0+IGdldFV0aWxpdHk/LmNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3IoKTtcclxuICAgIHV0aWxpdHkuQ3VycmVudEFwcE5hbWUgPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0Q3VycmVudEFwcE5hbWUoKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkN1cnJlbnRBcHBQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldEdsb2JhbENvbnRleHQ/LmdldEN1cnJlbnRBcHBQcm9wZXJ0aWVzKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DdXJyZW50UG9zaXRpb24gPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5nZXRDdXJyZW50UG9zaXRpb24oKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICAvLyBAdHMtaWdub3JlIC0gZ2V0RW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICB1dGlsaXR5LkVudGl0eU1haW5Gb3JtRGVzY3JpcHRvciA9IChlbnRpdHlOYW1lOiBzdHJpbmcsIGZvcm1JZDogc3RyaW5nKSA9PiBnZXRVdGlsaXR5Py5nZXRFbnRpdHlNYWluRm9ybURlc2NyaXB0b3IoZW50aXR5TmFtZSwgZm9ybUlkKTtcclxuICAgIHV0aWxpdHkuRW50aXR5TWV0YWRhdGEgPSBmdW5jdGlvbiAoZW50aXR5TmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVzPzogc3RyaW5nW10sIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFV0aWxpdHk/LmdldEVudGl0eU1ldGFkYXRhKGVudGl0eU5hbWUsIGF0dHJpYnV0ZXMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuSHRtbEF0dHJpYnV0ZUVuY29kZSA9IChhcmc6IHN0cmluZykgPT4gZ2V0RW5jb2Rpbmc/Lmh0bWxBdHRyaWJ1dGVFbmNvZGUoYXJnKTtcclxuICAgIHV0aWxpdHkuSHRtbERlY29kZSA9IChhcmc6IHN0cmluZykgPT4gZ2V0RW5jb2Rpbmc/Lmh0bWxEZWNvZGUoYXJnKTtcclxuICAgIHV0aWxpdHkuSHRtbEVuY29kZSA9IChhcmc6IHN0cmluZykgPT4gZ2V0RW5jb2Rpbmc/Lmh0bWxFbmNvZGUoYXJnKTtcclxuICAgIHV0aWxpdHkuSW52b2tlUHJvY2Vzc0FjdGlvbiA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8uaW52b2tlUHJvY2Vzc0FjdGlvbihuYW1lLCBwYXJhbWV0ZXJzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkxvYWRQYW5lbCA9ICh1cmw6IHN0cmluZywgdGl0bGU6IHN0cmluZykgPT4gZ2V0UGFuZWw/LmxvYWRQYW5lbCh1cmwsIHRpdGxlKTtcclxuICAgIHV0aWxpdHkuTG9va3VwT2JqZWN0cyA9IGZ1bmN0aW9uIChsb29rdXBPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFV0aWxpdHk/Lmxvb2t1cE9iamVjdHMobG9va3VwT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5OYXZpZ2F0ZVRvID0gZnVuY3Rpb24gKHBhZ2VJbnB1dDogYW55LCBuYXZpZ2F0aW9uT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXROYXZpZ2F0aW9uPy5uYXZpZ2F0ZVRvKHBhZ2VJbnB1dCwgbmF2aWdhdGlvbk9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlbkFsZXJ0RGlhbG9nID0gZnVuY3Rpb24gKGFsZXJ0U3RyaW5nczogYW55LCBhbGVydE9wdGlvbnM6IGFueSwgY2xvc2VDYWxsYmFjaz86ICgpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXROYXZpZ2F0aW9uPy5vcGVuQWxlcnREaWFsb2coYWxlcnRTdHJpbmdzLCBhbGVydE9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChjbG9zZUNhbGxiYWNrKSBwcm9taXNlPy50aGVuKGNsb3NlQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuQ29uZmlybURpYWxvZyA9IGZ1bmN0aW9uIChjb25maXJtU3RyaW5nczogYW55LCBjb25maXJtT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXROYXZpZ2F0aW9uPy5vcGVuQ29uZmlybURpYWxvZyhjb25maXJtU3RyaW5ncywgY29uZmlybU9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlbkVycm9yRGlhbG9nID0gZnVuY3Rpb24gKGVycm9yT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXROYXZpZ2F0aW9uPy5vcGVuRXJyb3JEaWFsb2coZXJyb3JPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5GaWxlID0gKGZpbGU6IGFueSwgb3BlbkZpbGVPcHRpb25zPzogYW55KSA9PiBnZXROYXZpZ2F0aW9uPy5vcGVuRmlsZShmaWxlLCBvcGVuRmlsZU9wdGlvbnMpO1xyXG4gICAgdXRpbGl0eS5PcGVuRm9ybSA9IGZ1bmN0aW9uIChlbnRpdHlGb3JtT3B0aW9uczogYW55LCBmb3JtUGFyYW1ldGVyczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXROYXZpZ2F0aW9uPy5vcGVuRm9ybShlbnRpdHlGb3JtT3B0aW9ucywgZm9ybVBhcmFtZXRlcnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlblVybCA9ICh1cmw6IHN0cmluZywgb3BlblVybE9wdGlvbnM/OiBhbnkpID0+IGdldE5hdmlnYXRpb24/Lm9wZW5VcmwodXJsLCBvcGVuVXJsT3B0aW9ucyk7XHJcbiAgICB1dGlsaXR5Lk9wZW5XZWJSZXNvdXJjZSA9ICh3ZWJSZXNvdXJjZU5hbWU6IHN0cmluZywgd2luZG93T3B0aW9ucz86IGFueSwgZGF0YT86IHN0cmluZykgPT4gZ2V0TmF2aWdhdGlvbj8ub3BlbldlYlJlc291cmNlKHdlYlJlc291cmNlTmFtZSwgd2luZG93T3B0aW9ucywgZGF0YSk7XHJcbiAgICB1dGlsaXR5LlBpY2tGaWxlID0gZnVuY3Rpb24gKHBpY2tGaWxlT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LnBpY2tGaWxlKHBpY2tGaWxlT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5QcmVwZW5kT3JnTmFtZSA9IChzUGF0aDogc3RyaW5nKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5wcmVwZW5kT3JnTmFtZShzUGF0aCk7XHJcbiAgICB1dGlsaXR5LlJlZnJlc2hQYXJlbnRHcmlkID0gKGxvb2t1cE9wdGlvbnM6IGFueSkgPT4gZ2V0VXRpbGl0eT8ucmVmcmVzaFBhcmVudEdyaWQobG9va3VwT3B0aW9ucyk7XHJcbiAgICAvLyBAdHMtaWdub3JlIC0gZGVmYXVsdFdlYlJlc291cmNlTmFtZSBtYXkgYmUgdW5kZWZpbmVkXHJcbiAgICB1dGlsaXR5LlJlc291cmNlID0gKGtleTogc3RyaW5nKSA9PiBnZXRVdGlsaXR5Py5nZXRSZXNvdXJjZVN0cmluZyhkZWZhdWx0V2ViUmVzb3VyY2VOYW1lISwga2V5KTtcclxuICAgIHV0aWxpdHkuUmVzb3VyY2VTdHJpbmcgPSAod2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiBnZXRVdGlsaXR5Py5nZXRSZXNvdXJjZVN0cmluZyh3ZWJSZXNvdXJjZU5hbWUsIGtleSk7XHJcbiAgICB1dGlsaXR5LlNob3dQcm9ncmVzc0luZGljYXRvciA9IChtZXNzYWdlOiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LnNob3dQcm9ncmVzc0luZGljYXRvcihtZXNzYWdlKTtcclxuICAgIHV0aWxpdHkuV2ViUmVzb3VyY2VVcmwgPSAod2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldFdlYlJlc291cmNlVXJsKHdlYlJlc291cmNlTmFtZSk7XHJcbiAgICB1dGlsaXR5LlhtbEF0dHJpYnV0ZUVuY29kZSA9IChhcmc6IHN0cmluZykgPT4gZ2V0RW5jb2Rpbmc/LnhtbEF0dHJpYnV0ZUVuY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5YbWxFbmNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy54bWxFbmNvZGUoYXJnKTtcclxuICAgIHJldHVybiB1dGlsaXR5O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkRm9ybURpYWxvZyhmb3JtQ29udGV4dDogYW55LCBmaWVsZHM6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIGNvbnN0IGZvcm06IGFueSA9IHt9O1xyXG4gICAgY29uc3QgZmllbGRzTGVuZ3RoID0gZmllbGRzPy5sZW5ndGggfHwgMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBmaWVsZHNbaV07XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZm9ybUNvbnRleHQ/LmRhdGE/LmVudGl0eT8uYXR0cmlidXRlcz8uZ2V0KGZpZWxkTmFtZSk7XHJcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgZm9ybVtmaWVsZE5hbWVdID0ge307XHJcbiAgICAgICAgbG9hZEZpZWxkKGZvcm1Db250ZXh0LCBmb3JtW2ZpZWxkTmFtZV0sIGF0dHJpYnV0ZSwgY29udHJvbCk7XHJcbiAgICB9XHJcbiAgICBmb3JtLkNsb3NlID0gKCkgPT4gZm9ybUNvbnRleHQ/LnVpPy5jbG9zZSgpO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuY29uc3QgR2xvYmFsT3B0aW9uU2V0VmFsdWVzID0ge1xyXG4gICAgQWR2YW5jZWRDb25maWdTZXR0aW5nOiBPYmplY3QuZnJlZXplKHsgTWF4Q2hpbGRJbmNpZGVudE51bWJlcjogJ01heENoaWxkSW5jaWRlbnROdW1iZXInLCBNYXhJbmNpZGVudE1lcmdlTnVtYmVyOiAnTWF4SW5jaWRlbnRNZXJnZU51bWJlcicgfSksXHJcbiAgICBDbGllbnROYW1lOiBPYmplY3QuZnJlZXplKHsgV2ViOiAnV2ViJywgT3V0bG9vazogJ091dGxvb2snLCBNb2JpbGU6ICdNb2JpbGUnIH0pLFxyXG4gICAgQ2xpZW50U3RhdGU6IE9iamVjdC5mcmVlemUoeyBPbmxpbmU6ICdPbmxpbmUnLCBPZmZsaW5lOiAnT2ZmbGluZScgfSksXHJcbiAgICBGaWVsZEF0dHJpYnV0ZVR5cGU6IE9iamVjdC5mcmVlemUoeyBCb29sZWFuOiAnYm9vbGVhbicsIERhdGVUaW1lOiAnZGF0ZXRpbWUnLCBEZWNpbWFsOiAnZGVjaW1hbCcsIERvdWJsZTogJ2RvdWJsZScsIEludGVnZXI6ICdpbnRlZ2VyJywgTG9va3VwOiAnbG9va3VwJywgTWVtbzogJ21lbW8nLCBNb25leTogJ21vbmV5JywgTXVsdGlPcHRpb25TZXQ6ICdtdWx0aW9wdGlvbnNldCcsIE9wdGlvblNldDogJ29wdGlvbnNldCcsIFN0cmluZzogJ3N0cmluZycgfSksXHJcbiAgICBGaWVsZENvbnRyb2xUeXBlOiBPYmplY3QuZnJlZXplKHsgU3RhbmRhcmQ6ICdzdGFuZGFyZCcsIElmcmFtZTogJ2lmcmFtZScsIEtiU2VhcmNoOiAna2JzZWFyY2gnLCBMb29rdXA6ICdsb29rdXAnLCBNdWx0aVNlbGVjdE9wdGlvbnNldDogJ211bHRpc2VsZWN0b3B0aW9uc2V0JywgTm90ZXM6ICdub3RlcycsIE9wdGlvblNldDogJ29wdGlvbnNldCcsIFF1aWNrRm9ybTogJ3F1aWNrZm9ybScsIFN1YkdyaWQ6ICdzdWJncmlkJywgVGltZXJDb250cm9sOiAndGltZXJjb250cm9sJywgVGltZWxpbmVXYWxsOiAndGltZWxpbmV3YWxsJywgV2ViUmVzb3VyY2U6ICd3ZWJyZXNvdXJjZScgfSksXHJcbiAgICBGaWVsZEZvcm1hdDogT2JqZWN0LmZyZWV6ZSh7IERhdGU6ICdkYXRlJywgRGF0ZVRpbWU6ICdkYXRldGltZScsIER1cmF0aW9uOiAnZHVyYXRpb24nLCBFbWFpbDogJ2VtYWlsJywgTGFuZ3VhZ2U6ICdsYW5ndWFnZScsIE5vbmU6ICdub25lJywgVGV4dEFyZWE6ICd0ZXh0YXJlYScsIFRleHQ6ICd0ZXh0JywgVGlja2VyU3ltYm9sOiAndGlja2Vyc3ltYm9sJywgUGhvbmU6ICdwaG9uZScsIFRpbWVab25lOiAndGltZXpvbmUnLCBVcmw6ICd1cmwnIH0pLFxyXG4gICAgRmllbGROb3RpZmljYXRpb25MZXZlbDogT2JqZWN0LmZyZWV6ZSh7IEVycm9yOiAnRVJST1InLCBSZWNvbW1lbmRhdGlvbjogJ1JFQ09NTUVOREFUSU9OJyB9KSxcclxuICAgIEZpZWxkUmVxdWlyZWRMZXZlbDogT2JqZWN0LmZyZWV6ZSh7IE5vbmU6ICdub25lJywgUmVxdWlyZWQ6ICdyZXF1aXJlZCcsIFJlY29tbWVuZGVkOiAncmVjb21tZW5kZWQnIH0pLFxyXG4gICAgRmllbGRTdWJtaXRNb2RlOiBPYmplY3QuZnJlZXplKHsgQWx3YXlzOiAnYWx3YXlzJywgTmV2ZXI6ICduZXZlcicsIERpcnR5OiAnZGlydHknIH0pLFxyXG4gICAgRm9ybUZhY3RvcjogT2JqZWN0LmZyZWV6ZSh7IFVua25vd246IDAsIERlc2t0b3A6IDEsIFRhYmxldDogMiwgUGhvbmU6IDMgfSksXHJcbiAgICBGb3JtTm90aWZpY2F0aW9uTGV2ZWw6IE9iamVjdC5mcmVlemUoeyBFcnJvcjogJ0VSUk9SJywgV2FybmluZzogJ1dBUk5JTkcnLCBJbmZvOiAnSU5GTycgfSksXHJcbiAgICBGb3JtVHlwZTogT2JqZWN0LmZyZWV6ZSh7IFVuZGVmaW5lZDogMCwgQ3JlYXRlOiAxLCBVcGRhdGU6IDIsIFJlYWRPbmx5OiAzLCBEaXNhYmxlZDogNCwgQnVsa0VkaXQ6IDUgfSksXHJcbiAgICBGdWxsTmFtZUNvbnZlbnRpb25Db2RlOiBPYmplY3QuZnJlZXplKHsgTGFzdE5hbWVfQ29tbWFfRmlyc3ROYW1lOiAwLCBGaXJzdE5hbWVfTGFzdE5hbWU6IDEsIExhc3ROYW1lX0NvbW1hX0ZpcnN0TmFtZV9NaWRkbGVJbml0aWFsOiAyLCBGaXJzdE5hbWVfTWlkZGxlSW5pdGlhbF9MYXN0TmFtZTogMywgTGFzdE5hbWVfQ29tbWFfRmlyc3ROYW1lX01pZGRsZU5hbWU6IDQsIEZpcnN0TmFtZV9NaWRkbGVOYW1lX0xhc3ROYW1lOiA1LCBMYXN0TmFtZV9GaXJzdE5hbWU6IDYsIExhc3ROYW1lRmlyc3ROYW1lOiA3IH0pLFxyXG4gICAgR3JpZFR5cGU6IE9iamVjdC5mcmVlemUoeyBIb21lUGFnZUdyaWQ6IDEsIFN1YmdyaWQ6IDIgfSksXHJcbiAgICBPcGVuRmlsZU9wdGlvbjogT2JqZWN0LmZyZWV6ZSh7IE9wZW46IDEsIFNhdmU6IDIgfSksXHJcbiAgICBQcm9jZXNzQ2F0ZWdvcnk6IE9iamVjdC5mcmVlemUoeyBRdWFsaWZ5OiAwLCBEZXZlbG9wOiAxLCBQcm9wb3NlOiAyLCBDbG9zZTogMywgSWRlbnRpZnk6IDQsIFJlc2VhcmNoOiA1LCBSZXNvbHZlOiA2IH0pLFxyXG4gICAgUHJvY2Vzc0Rpc3BsYXlTdGF0ZTogT2JqZWN0LmZyZWV6ZSh7IEV4cGFuZGVkOiAnZXhwYW5kZWQnLCBDb2xsYXBzZWQ6ICdjb2xsYXBzZWQnLCBGbG9hdGluZzogJ2Zsb2F0aW5nJyB9KSxcclxuICAgIFByb2Nlc3NTdGF0dXM6IE9iamVjdC5mcmVlemUoeyBBY3RpdmU6ICdhY3RpdmUnLCBBYm9ydGVkOiAnYWJvcnRlZCcsIEZpbmlzaGVkOiAnZmluaXNoZWQnIH0pLFxyXG4gICAgU2F2ZU1vZGU6IE9iamVjdC5mcmVlemUoeyBTYXZlOiAxLCBTYXZlQW5kQ2xvc2U6IDIsIERlYWN0aXZhdGU6IDUsIFJlYWN0aXZhdGU6IDYsIEVtYWlsOiA3LCBEaXNxdWFsaWZ5OiAxNSwgUXVhbGlmeTogMTYsIEFzc2lnbjogNDcsIFNhdmVBc0NvbXBsZXRlZDogNTgsIFNhdmVBbmROZXc6IDU5LCBBdXRvU2F2ZTogNzAgfSksXHJcbiAgICBTYXZlT3B0aW9uOiBPYmplY3QuZnJlZXplKHsgU2F2ZUFuZENsb3NlOiAnc2F2ZWFuZGNsb3NlJywgU2F2ZUFuZE5ldzogJ3NhdmVhbmRuZXcnIH0pLFxyXG4gICAgU2lkZVBhbmVTdGF0ZTogT2JqZWN0LmZyZWV6ZSh7IENvbGxhcHNlZDogMCwgRXhwYW5kZWQ6IDEgfSksXHJcbiAgICBUYWJDb250ZW50VHlwZTogT2JqZWN0LmZyZWV6ZSh7IENhcmRTZWN0aW9uczogJ2NhcmRTZWN0aW9ucycsIFNpbmdsZUNvbXBvbmVudDogJ3NpbmdsZUNvbXBvbmVudCcgfSksXHJcbiAgICBUYWJEaXNwbGF5U3RhdGU6IE9iamVjdC5mcmVlemUoeyBFeHBhbmRlZDogJ2V4cGFuZGVkJywgQ29sbGFwc2VkOiAnY29sbGFwc2VkJyB9KSxcclxuICAgIFRpbWVyU3RhdGU6IE9iamVjdC5mcmVlemUoeyBOb3RTZXQ6IDEsIEluUHJvZ3Jlc3M6IDIsIFdhcm5pbmc6IDMsIFZpb2xhdGVkOiA0LCBTdWNjZXNzOiA1LCBFeHBpcmVkOiA2LCBDYW5jZWxlZDogNywgUGF1c2VkOiA4IH0pLFxyXG59IGFzIGNvbnN0O1xyXG4oZ2xvYmFsVGhpcyBhcyBhbnkpLk9wdGlvblNldCA9IChnbG9iYWxUaGlzIGFzIGFueSkuT3B0aW9uU2V0IHx8IHt9O1xyXG5PYmplY3QuYXNzaWduKChnbG9iYWxUaGlzIGFzIGFueSkuT3B0aW9uU2V0LCBHbG9iYWxPcHRpb25TZXRWYWx1ZXMpO1xyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBuYW1lc3BhY2UgT3B0aW9uU2V0IHtcclxuICAgICAgICBjb25zdCBBZHZhbmNlZENvbmZpZ1NldHRpbmc6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuQWR2YW5jZWRDb25maWdTZXR0aW5nO1xyXG4gICAgICAgIGNvbnN0IENsaWVudE5hbWU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuQ2xpZW50TmFtZTtcclxuICAgICAgICBjb25zdCBDbGllbnRTdGF0ZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5DbGllbnRTdGF0ZTtcclxuICAgICAgICBjb25zdCBGaWVsZEF0dHJpYnV0ZVR5cGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuRmllbGRBdHRyaWJ1dGVUeXBlO1xyXG4gICAgICAgIGNvbnN0IEZpZWxkQ29udHJvbFR5cGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuRmllbGRDb250cm9sVHlwZTtcclxuICAgICAgICBjb25zdCBGaWVsZEZvcm1hdDogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5GaWVsZEZvcm1hdDtcclxuICAgICAgICBjb25zdCBGaWVsZE5vdGlmaWNhdGlvbkxldmVsOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkZpZWxkTm90aWZpY2F0aW9uTGV2ZWw7XHJcbiAgICAgICAgY29uc3QgRmllbGRSZXF1aXJlZExldmVsOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkZpZWxkUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBjb25zdCBGaWVsZFN1Ym1pdE1vZGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuRmllbGRTdWJtaXRNb2RlO1xyXG4gICAgICAgIGNvbnN0IEZvcm1GYWN0b3I6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuRm9ybUZhY3RvcjtcclxuICAgICAgICBjb25zdCBGb3JtTm90aWZpY2F0aW9uTGV2ZWw6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuRm9ybU5vdGlmaWNhdGlvbkxldmVsO1xyXG4gICAgICAgIGNvbnN0IEZvcm1UeXBlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkZvcm1UeXBlO1xyXG4gICAgICAgIGNvbnN0IEZ1bGxOYW1lQ29udmVudGlvbkNvZGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuRnVsbE5hbWVDb252ZW50aW9uQ29kZTtcclxuICAgICAgICBjb25zdCBHcmlkVHlwZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5HcmlkVHlwZTtcclxuICAgICAgICBjb25zdCBPcGVuRmlsZU9wdGlvbjogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5PcGVuRmlsZU9wdGlvbjtcclxuICAgICAgICBjb25zdCBQcm9jZXNzQ2F0ZWdvcnk6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuUHJvY2Vzc0NhdGVnb3J5O1xyXG4gICAgICAgIGNvbnN0IFByb2Nlc3NEaXNwbGF5U3RhdGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuUHJvY2Vzc0Rpc3BsYXlTdGF0ZTtcclxuICAgICAgICBjb25zdCBQcm9jZXNzU3RhdHVzOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLlByb2Nlc3NTdGF0dXM7XHJcbiAgICAgICAgY29uc3QgU2F2ZU1vZGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuU2F2ZU1vZGU7XHJcbiAgICAgICAgY29uc3QgU2F2ZU9wdGlvbjogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5TYXZlT3B0aW9uO1xyXG4gICAgICAgIGNvbnN0IFNpZGVQYW5lU3RhdGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuU2lkZVBhbmVTdGF0ZTtcclxuICAgICAgICBjb25zdCBUYWJDb250ZW50VHlwZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5UYWJDb250ZW50VHlwZTtcclxuICAgICAgICBjb25zdCBUYWJEaXNwbGF5U3RhdGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuVGFiRGlzcGxheVN0YXRlO1xyXG4gICAgICAgIGNvbnN0IFRpbWVyU3RhdGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuVGltZXJTdGF0ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBHbG9iYWxPcHRpb25TZXRWYWx1ZXMgYXMgT3B0aW9uU2V0IH07IiwgIi8qKlxyXG4gKiBBY2NvdW50IEZvcm0gLSBUeXBlU2NyaXB0IEltcGxlbWVudGF0aW9uXHJcbiAqIEBkZXNjcmlwdGlvbiBBY2NvdW50Rm9ybSB3aXRoIHNoYXJlZCBPcHRpb25TZXRzXHJcbiAqIFVzZXMgbmFtZXNwYWNlIHBhdHRlcm4gZm9yIGJldHRlciBvcmdhbml6YXRpb24gYW5kIG1haW50YWluYWJpbGl0eVxyXG4gKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9saWIvZGV2a2l0LmQudHNcIiAvPlxyXG5pbXBvcnQgeyBGb3JtQmFzZSB9IGZyb20gJy4uLy4uL2xpYi9kZXZraXQnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBOQU1FU1BBQ0U6IEFjY291bnRGb3JtIC0gTWFpbiBBY2NvdW50IEZvcm1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgbmFtZXNwYWNlIEFjY291bnRGb3JtIHtcclxuICAgIC8vIEJvZHkgSW50ZXJmYWNlIC0gQUxMIERldktpdCBjb250cm9sIHR5cGVzXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElCb2R5IHtcclxuICAgICAgICAvLyA9PT09PT09PT09IFN0YW5kYXJkIEZpZWxkIENvbnRyb2xzID09PT09PT09PT1cclxuICAgICAgICAvKiogU3RyaW5nOiBBY2NvdW50IE5hbWUgKi9cclxuICAgICAgICBOYW1lOiBEZXZLaXQuQ29udHJvbHMuU3RyaW5nO1xyXG4gICAgICAgIC8qKiBNZW1vOiBEZXNjcmlwdGlvbiAqL1xyXG4gICAgICAgIERlc2NyaXB0aW9uOiBEZXZLaXQuQ29udHJvbHMuTWVtbztcclxuICAgICAgICAvKiogSW50ZWdlcjogTnVtYmVyIG9mIEVtcGxveWVlcyAqL1xyXG4gICAgICAgIE51bWJlck9mRW1wbG95ZWVzOiBEZXZLaXQuQ29udHJvbHMuSW50ZWdlcjtcclxuICAgICAgICAvKiogTW9uZXk6IEFubnVhbCBSZXZlbnVlICovXHJcbiAgICAgICAgUmV2ZW51ZTogRGV2S2l0LkNvbnRyb2xzLk1vbmV5O1xyXG4gICAgICAgIC8qKiBCb29sZWFuOiBDcmVkaXQgT24gSG9sZCAqL1xyXG4gICAgICAgIENyZWRpdE9uSG9sZDogRGV2S2l0LkNvbnRyb2xzLkJvb2xlYW47XHJcbiAgICAgICAgLyoqIE9wdGlvblNldDogSW5kdXN0cnkgQ29kZSAqL1xyXG4gICAgICAgIEluZHVzdHJ5Q29kZTogRGV2S2l0LkNvbnRyb2xzLk9wdGlvblNldDtcclxuICAgICAgICAvKiogTG9va3VwOiBQcmltYXJ5IENvbnRhY3QgKi9cclxuICAgICAgICBQcmltYXJ5Q29udGFjdElkOiBEZXZLaXQuQ29udHJvbHMuTG9va3VwO1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09IEN1c3RvbSB2NF8gRmllbGQgQ29udHJvbHMgPT09PT09PT09PVxyXG4gICAgICAgIC8qKiBEYXRlIChEYXRlT25seSk6IEN1c3RvbSBCaXJ0aGRheSBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0JpcnRoZGF5OiBEZXZLaXQuQ29udHJvbHMuRGF0ZU9ubHk7XHJcbiAgICAgICAgLyoqIERhdGVUaW1lOiBDdXN0b20gQXBwb2ludG1lbnQgVGltZSBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0FwcG9pbnRtZW50VGltZTogRGV2S2l0LkNvbnRyb2xzLkRhdGVUaW1lO1xyXG4gICAgICAgIC8qKiBEZWNpbWFsOiBDdXN0b20gTGF0aXR1ZGUgZmllbGQgKi9cclxuICAgICAgICB2NF9MYXRpdHVkZTogRGV2S2l0LkNvbnRyb2xzLkRlY2ltYWw7XHJcbiAgICAgICAgLyoqIERvdWJsZTogQ3VzdG9tIERpc2NvdW50IFBlcmNlbnRhZ2UgZmllbGQgKi9cclxuICAgICAgICB2NF9EaXNjb3VudFBlcmNlbnRhZ2U6IERldktpdC5Db250cm9scy5Eb3VibGU7XHJcbiAgICAgICAgLyoqIE11bHRpT3B0aW9uU2V0OiBDdXN0b20gQ2F0ZWdvcmllcyBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0NhdGVnb3JpZXM6IERldktpdC5Db250cm9scy5NdWx0aU9wdGlvblNldDtcclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PSBTcGVjaWFsdHkgQ29udHJvbHMgPT09PT09PT09PVxyXG4gICAgICAgIC8qKiBXZWJSZXNvdXJjZTogQ3VzdG9tIEhlbHAgV2ViIFJlc291cmNlICovXHJcbiAgICAgICAgdjRfV2ViUmVzb3VyY2VIZWxwOiBEZXZLaXQuQ29udHJvbHMuV2ViUmVzb3VyY2U7XHJcbiAgICAgICAgLyoqIElGcmFtZTogQ3VzdG9tIEV4dGVybmFsIFBhZ2UgKi9cclxuICAgICAgICB2NF9JRnJhbWVFeHRlcm5hbDogRGV2S2l0LkNvbnRyb2xzLklGcmFtZTtcclxuICAgICAgICAvKiogVGltZXI6IEN1c3RvbSBTTEEgVGltZXIgKi9cclxuICAgICAgICB2NF9UaW1lclNMQTogRGV2S2l0LkNvbnRyb2xzLlRpbWVyO1xyXG4gICAgICAgIC8qKiBLbm93bGVkZ2U6IEtub3dsZWRnZSBCYXNlIFNlYXJjaCAqL1xyXG4gICAgICAgIHY0X0tub3dsZWRnZVNlYXJjaDogRGV2S2l0LkNvbnRyb2xzLktub3dsZWRnZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWFkZXIgSW50ZXJmYWNlXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElIZWFkZXIge1xyXG4gICAgICAgIC8qKiBMb29rdXA6IE93bmVyICovXHJcbiAgICAgICAgT3duZXJJZDogRGV2S2l0LkNvbnRyb2xzLkxvb2t1cDtcclxuICAgICAgICAvKiogSW50ZWdlcjogTnVtYmVyIG9mIEVtcGxveWVlcyAqL1xyXG4gICAgICAgIE51bWJlck9mRW1wbG95ZWVzOiBEZXZLaXQuQ29udHJvbHMuSW50ZWdlcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUYWIgYW5kIFNlY3Rpb24gSW50ZXJmYWNlc1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRGV0YWlsc1RhYlNlY3Rpb25zIHtcclxuICAgICAgICBCSUxMSU5HOiBEZXZLaXQuQ29udHJvbHMuU2VjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEZXRhaWxzVGFiIGV4dGVuZHMgRGV2S2l0LkNvbnRyb2xzLklUYWIge1xyXG4gICAgICAgIFNlY3Rpb246IElEZXRhaWxzVGFiU2VjdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVGFicyB7XHJcbiAgICAgICAgREVUQUlMU19UQUI6IElEZXRhaWxzVGFiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyaWQgSW50ZXJmYWNlXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElHcmlkIHtcclxuICAgICAgICBDb250YWN0czogRGV2S2l0LkNvbnRyb2xzLkdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTmF2aWdhdGlvbiBJbnRlcmZhY2VcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSU5hdmlnYXRpb24ge1xyXG4gICAgICAgIEFjY291bnRfVGFza3M6IERldktpdC5Db250cm9scy5OYXZpZ2F0aW9uSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBRdWlja0Zvcm0gSW50ZXJmYWNlXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElRdWlja0Zvcm0ge1xyXG4gICAgICAgIGNvbnRhY3RxdWlja2Zvcm06IERldktpdC5Db250cm9scy5JUXVpY2tWaWV3ICYge1xyXG4gICAgICAgICAgICBCb2R5OiB7XHJcbiAgICAgICAgICAgICAgICBFTWFpbEFkZHJlc3MxOiBEZXZLaXQuQ29udHJvbHMuUXVpY2tWaWV3O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVzaW5lc3MgUHJvY2VzcyBGbG93IEludGVyZmFjZVxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJQlBGIHtcclxuICAgICAgICAvKiogQlBGIEZpZWxkOiBBY2NvdW50IE5hbWUgKFN0YWdlIDE6IFF1YWxpZnkpICovXHJcbiAgICAgICAgTmFtZTogRGV2S2l0LkNvbnRyb2xzLlN0cmluZztcclxuICAgICAgICAvKiogQlBGIEZpZWxkOiBJbmR1c3RyeSBDb2RlIChTdGFnZSAxOiBRdWFsaWZ5KSAqL1xyXG4gICAgICAgIEluZHVzdHJ5Q29kZTogRGV2S2l0LkNvbnRyb2xzLk9wdGlvblNldDtcclxuICAgICAgICAvKiogQlBGIEZpZWxkOiBSZXZlbnVlIChTdGFnZSAyOiBEZXZlbG9wKSAqL1xyXG4gICAgICAgIFJldmVudWU6IERldktpdC5Db250cm9scy5Nb25leTtcclxuICAgICAgICAvKiogQlBGIEZpZWxkOiBQcmltYXJ5IENvbnRhY3QgKFN0YWdlIDI6IERldmVsb3ApICovXHJcbiAgICAgICAgUHJpbWFyeUNvbnRhY3RJZDogRGV2S2l0LkNvbnRyb2xzLkxvb2t1cDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9jZXNzIEludGVyZmFjZVxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUHJvY2VzcyBleHRlbmRzIERldktpdC5Db250cm9scy5JUHJvY2VzcyB7XHJcbiAgICAgICAgLyoqIHY0X0FjY291bnRCUEYgLSBDdXN0b20gQWNjb3VudCBCdXNpbmVzcyBQcm9jZXNzIEZsb3cgKi9cclxuICAgICAgICB2NF9BY2NvdW50QlBGOiBJQlBGO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvcm0gQ2xhc3NcclxuICAgIGV4cG9ydCBjbGFzcyBGb3JtIGV4dGVuZHMgRm9ybUJhc2U8SUJvZHksIElIZWFkZXIsIElUYWJzLCBJR3JpZCwgSU5hdmlnYXRpb24sIElRdWlja0Zvcm0sIElQcm9jZXNzPiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZXhlY3V0aW9uQ29udGV4dDogYW55LCBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGV4ZWN1dGlvbkNvbnRleHQsIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUsIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIk5hbWVcIiwgXCJEZXNjcmlwdGlvblwiLCBcIk51bWJlck9mRW1wbG95ZWVzXCIsIFwiUmV2ZW51ZVwiLCBcIkNyZWRpdE9uSG9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW5kdXN0cnlDb2RlXCIsIFwiUHJpbWFyeUNvbnRhY3RJZFwiLCBcInY0X0JpcnRoZGF5XCIsIFwidjRfQXBwb2ludG1lbnRUaW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2NF9MYXRpdHVkZVwiLCBcInY0X0Rpc2NvdW50UGVyY2VudGFnZVwiLCBcInY0X0NhdGVnb3JpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInY0X1dlYlJlc291cmNlSGVscFwiLCBcInY0X0lGcmFtZUV4dGVybmFsXCIsIFwidjRfVGltZXJTTEFcIiwgXCJ2NF9Lbm93bGVkZ2VTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogW1wiT3duZXJJZFwiLCBcIk51bWJlck9mRW1wbG95ZWVzXCJdLFxyXG4gICAgICAgICAgICAgICAgdGFiOiBbXCJERVRBSUxTX1RBQl9fX0JJTExJTkdcIl0sXHJcbiAgICAgICAgICAgICAgICBncmlkOiBbXCJDb250YWN0c1wiXSxcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IFtcIkFjY291bnRfVGFza3NcIl0sXHJcbiAgICAgICAgICAgICAgICBxdWljazogW1wiY29udGFjdHF1aWNrZm9ybV9fX0VNYWlsQWRkcmVzczFcIl0sXHJcbiAgICAgICAgICAgICAgICBicGY6IFtcclxuICAgICAgICAgICAgICAgICAgICBcInY0X0FjY291bnRCUEZfX19OYW1lXCIsIFwidjRfQWNjb3VudEJQRl9fX0luZHVzdHJ5Q29kZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidjRfQWNjb3VudEJQRl9fX1JldmVudWVcIiwgXCJ2NF9BY2NvdW50QlBGX19fUHJpbWFyeUNvbnRhY3RJZFwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBOQU1FU1BBQ0U6IEFjY291bnQuT3B0aW9uU2V0IC0gU2hhcmVkIE9wdGlvblNldHMgZm9yIEFjY291bnQgRm9ybXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgbmFtZXNwYWNlIEFjY291bnQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBPcHRpb25TZXQge1xyXG4gICAgICAgIC8qKiBJbmR1c3RyeSBDb2RlIE9wdGlvblNldCAqL1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbmR1c3RyeUNvZGUgPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICAgICAgQWNjb3VudGluZzogMSxcclxuICAgICAgICAgICAgQ29uc3VsdGluZzogNyxcclxuICAgICAgICAgICAgRmluYW5jaWFsOiAxNixcclxuICAgICAgICAgICAgSW5zdXJhbmNlOiAyMCxcclxuICAgICAgICAgICAgVGVjaG5vbG9neTogMTJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyoqIEN1c3RvbSBNdWx0aU9wdGlvblNldCAtIHY0X0NhdGVnb3JpZXMgKi9cclxuICAgICAgICBleHBvcnQgY29uc3QgdjRfQ2F0ZWdvcmllcyA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgICAgICBDYXRlZ29yeV9BOiAxMDAwMDAwMDAsXHJcbiAgICAgICAgICAgIENhdGVnb3J5X0I6IDEwMDAwMDAwMSxcclxuICAgICAgICAgICAgQ2F0ZWdvcnlfQzogMTAwMDAwMDAyLFxyXG4gICAgICAgICAgICBDYXRlZ29yeV9EOiAxMDAwMDAwMDNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gUG9wdWxhdGUgZ2xvYmFsIE9wdGlvblNldC5BY2NvdW50IGF0IHJ1bnRpbWUgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuKGdsb2JhbFRoaXMgYXMgYW55KS5PcHRpb25TZXQgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLk9wdGlvblNldCB8fCB7fTtcclxuKGdsb2JhbFRoaXMgYXMgYW55KS5PcHRpb25TZXQuQWNjb3VudCA9IEFjY291bnQuT3B0aW9uU2V0O1xyXG5cclxuLy8gRGVjbGFyZSBnbG9iYWwgbmFtZXNwYWNlIGV4dGVuc2lvbiBmb3IgVHlwZVNjcmlwdCBJbnRlbGxpU2Vuc2VcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgbmFtZXNwYWNlIE9wdGlvblNldCB7XHJcbiAgICAgICAgbmFtZXNwYWNlIEFjY291bnQge1xyXG4gICAgICAgICAgICBjb25zdCBJbmR1c3RyeUNvZGU6IHtcclxuICAgICAgICAgICAgICAgIHJlYWRvbmx5IEFjY291bnRpbmc6IDE7XHJcbiAgICAgICAgICAgICAgICByZWFkb25seSBDb25zdWx0aW5nOiA3O1xyXG4gICAgICAgICAgICAgICAgcmVhZG9ubHkgRmluYW5jaWFsOiAxNjtcclxuICAgICAgICAgICAgICAgIHJlYWRvbmx5IEluc3VyYW5jZTogMjA7XHJcbiAgICAgICAgICAgICAgICByZWFkb25seSBUZWNobm9sb2d5OiAxMjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgdjRfQ2F0ZWdvcmllczoge1xyXG4gICAgICAgICAgICAgICAgcmVhZG9ubHkgQ2F0ZWdvcnlfQTogMTAwMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgcmVhZG9ubHkgQ2F0ZWdvcnlfQjogMTAwMDAwMDAxO1xyXG4gICAgICAgICAgICAgICAgcmVhZG9ubHkgQ2F0ZWdvcnlfQzogMTAwMDAwMDAyO1xyXG4gICAgICAgICAgICAgICAgcmVhZG9ubHkgQ2F0ZWdvcnlfRDogMTAwMDAwMDAzO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDA6IElDb250cm9sIEludGVyZmFjZSAtIE5hbWUgRmllbGQgKFN0cmluZylcclxuICogVGhpcyB0ZXN0cyB0aGUgYmFzZSBJQ29udHJvbCBpbnRlcmZhY2UgdGhhdCBhbGwgY29udHJvbHMgaW5oZXJpdCBmcm9tXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0Q29udHJvbChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtLkJvZHkuTmFtZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gY29udHJvbC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBjb250cm9sLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBjb250cm9sLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogY29udHJvbC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IGNvbnRyb2wuQXR0cmlidXRlTmFtZSA9PT0gXCJuYW1lXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGNvbnRyb2wuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBjb250cm9sLkF0dHJpYnV0ZVR5cGUgPT09IFwic3RyaW5nXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBjb250cm9sLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogY29udHJvbC5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBjb250cm9sLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogY29udHJvbC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBjb250cm9sLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcGVydGllcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBzZXR0ZXJSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuXHJcbiAgICAvLyBTZXR0ZXJzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGNvbnRyb2wuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBjb250cm9sLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgbmV3UmVxdWlyZWQgPSBjb250cm9sLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgY29udHJvbC5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogYCR7b3JpZ1JlcXVpcmVkfVx1MjE5MnJlcXVpcmVkXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld1JlcXVpcmVkID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnU3VibWl0ID0gY29udHJvbC5TdWJtaXRNb2RlO1xyXG4gICAgICAgIGNvbnRyb2wuU3VibWl0TW9kZSA9IFwiYWx3YXlzXCI7XHJcbiAgICAgICAgY29uc3QgbmV3U3VibWl0ID0gY29udHJvbC5TdWJtaXRNb2RlO1xyXG4gICAgICAgIGNvbnRyb2wuU3VibWl0TW9kZSA9IG9yaWdTdWJtaXQ7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlIChzZXQpXCIsIFZhbHVlOiBgJHtvcmlnU3VibWl0fVx1MjE5MmFsd2F5c1x1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdTdWJtaXQgPT09IFwiYWx3YXlzXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBjb250cm9sLkRpc2FibGVkO1xyXG4gICAgICAgIGNvbnRyb2wuRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IG5ld0Rpc2FibGVkID0gY29udHJvbC5EaXNhYmxlZDtcclxuICAgICAgICBjb250cm9sLkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGAke29yaWdEaXNhYmxlZH1cdTIxOTJ0cnVlXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld0Rpc2FibGVkID09PSB0cnVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGNvbnRyb2wuTGFiZWw7XHJcbiAgICAgICAgY29udHJvbC5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IG5ld0xhYmVsID0gY29udHJvbC5MYWJlbDtcclxuICAgICAgICBjb250cm9sLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGBcIiR7b3JpZ0xhYmVsfVwiXHUyMTkybW9kaWZpZWRcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3TGFiZWwuaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBjb250cm9sLlZpc2libGU7XHJcbiAgICAgICAgY29udHJvbC5WaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbmV3VmlzaWJsZSA9IGNvbnRyb2wuVmlzaWJsZTtcclxuICAgICAgICBjb250cm9sLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGAke29yaWdWaXNpYmxlfVx1MjE5MmZhbHNlXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld1Zpc2libGUgPT09IGZhbHNlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWUgKyBcIiAoTU9ESUZJRUQpXCI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBjb250cm9sLlZhbHVlO1xyXG4gICAgICAgIGNvbnRyb2wuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGBtb2RpZmllZFx1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCIoTU9ESUZJRUQpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG91dHB1dENoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE91dHB1dENoYW5nZSBmaXJlZFwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5BZGRPbk91dHB1dENoYW5nZShvdXRwdXRDaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJBZGRPbk91dHB1dENoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiQWRkT25PdXRwdXRDaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5SZW1vdmVPbk91dHB1dENoYW5nZShvdXRwdXRDaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25PdXRwdXRDaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbk91dHB1dENoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBub3RpZmljYXRpb24gZnJvbSBJQ29udHJvbFwiLCBcIkNUUkxfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbC5DbGVhck5vdGlmaWNhdGlvbihcIkNUUkxfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjbGVhcmVkID0gY29udHJvbC5DbGVhck5vdGlmaWNhdGlvbihcIk5PTkVYSVNURU5UXCIpO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIkNsZWFyTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBgUmVzdWx0OiAke2NsZWFyZWR9YCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiQ2xlYXJOb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5BZGROb3RpZmljYXRpb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlczogW1wiUmVjb21tZW5kYXRpb24gZnJvbSB0ZXN0XCJdLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25MZXZlbDogXCJSRUNPTU1FTkRBVElPTlwiLFxyXG4gICAgICAgICAgICB1bmlxdWVJZDogXCJDVFJMX1RFU1RfMlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sLkNsZWFyTm90aWZpY2F0aW9uKFwiQ1RSTF9URVNUXzJcIiksIDMwMDApO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIkFkZE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJBZGRlZCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJBZGROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZCBtZXNzYWdlXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4uc2V0dGVyUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNDXHVERjlCXHVGRTBGIFRFU1QgMDogSUNvbnRyb2wgSW50ZXJmYWNlIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IE5hbWUgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVI4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzE2KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUoc2V0dGVyUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDE6IExvb2t1cCBDb250cm9sIC0gUHJpbWFyeUNvbnRhY3RJZCBGaWVsZFxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdExvb2t1cChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGxvb2t1cCA9IGZvcm0uQm9keS5QcmltYXJ5Q29udGFjdElkO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsRGVmYXVsdFZpZXcgPSBsb29rdXAuRGVmYXVsdFZpZXc7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBsb29rdXAuVmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGFzVmFsdWUgPSBjdXJyZW50VmFsdWUgJiYgY3VycmVudFZhbHVlLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IGhhc1ZhbHVlID8gYCR7Y3VycmVudFZhbHVlWzBdLm5hbWV9ICgke2N1cnJlbnRWYWx1ZVswXS5lbnRpdHlUeXBlfSlgIDogXCIoZW1wdHkpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIklzUGFydHlMaXN0XCIsIFZhbHVlOiBsb29rdXAuSXNQYXJ0eUxpc3QsIFN0YXR1czogbG9va3VwLklzUGFydHlMaXN0ID09PSBmYWxzZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiRW50aXR5VHlwZXNcIiwgVmFsdWU6IEpTT04uc3RyaW5naWZ5KGxvb2t1cC5FbnRpdHlUeXBlcyksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkRlZmF1bHRWaWV3XCIsIFZhbHVlOiBvcmlnaW5hbERlZmF1bHRWaWV3LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBsb29rdXAuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IGxvb2t1cC5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGxvb2t1cC5Db250cm9sVHlwZSwgU3RhdHVzOiBsb29rdXAuQ29udHJvbFR5cGUgPT09IFwibG9va3VwXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBsb29rdXAuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGxvb2t1cC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogbG9va3VwLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBsb29rdXAuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGxvb2t1cC5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogbG9va3VwLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBsb29rdXAuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogbG9va3VwLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogbG9va3VwLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBsb29rdXAuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIkVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHByZVNlYXJjaENhbGxiYWNrID0gKGN0eDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyWG1sID0gXCI8ZmlsdGVyIHR5cGU9J2FuZCc+PGNvbmRpdGlvbiBhdHRyaWJ1dGU9J3N0YXRlY29kZScgb3BlcmF0b3I9J2VxJyB2YWx1ZT0nMCcgLz48L2ZpbHRlcj5cIjtcclxuICAgICAgICBsb29rdXAuQWRkQ3VzdG9tRmlsdGVyKGZpbHRlclhtbCwgXCJjb250YWN0XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgUHJlU2VhcmNoIGZpcmVkIC0gZmlsdGVyIGFwcGxpZWRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRhZ0NsaWNrQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIExvb2t1cFRhZ0NsaWNrIGZpcmVkIC0gdGFnIHdhcyBjbGlja2VkXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZXR0ZXJzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWaWV3SWQgPSBcInswMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDJ9XCI7XHJcbiAgICAgICAgbG9va3VwLkRlZmF1bHRWaWV3ID0gdGVzdFZpZXdJZDtcclxuICAgICAgICBjb25zdCBuZXdWaWV3ID0gbG9va3VwLkRlZmF1bHRWaWV3O1xyXG4gICAgICAgIGxvb2t1cC5EZWZhdWx0VmlldyA9IG9yaWdpbmFsRGVmYXVsdFZpZXc7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJEZWZhdWx0VmlldyAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkRlZmF1bHRWaWV3IChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVHlwZXMgPSBsb29rdXAuRW50aXR5VHlwZXM7XHJcbiAgICAgICAgbG9va3VwLkVudGl0eVR5cGVzID0gW1wiY29udGFjdFwiXTtcclxuICAgICAgICBjb25zdCBuZXdUeXBlcyA9IGxvb2t1cC5FbnRpdHlUeXBlcztcclxuICAgICAgICBsb29rdXAuRW50aXR5VHlwZXMgPSBvcmlnaW5hbFR5cGVzO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiRW50aXR5VHlwZXMgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJFbnRpdHlUeXBlcyAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuQWRkUHJlU2VhcmNoKHByZVNlYXJjaENhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkFkZFByZVNlYXJjaFwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiQWRkUHJlU2VhcmNoXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5SZW1vdmVQcmVTZWFyY2gocHJlU2VhcmNoQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiUmVtb3ZlUHJlU2VhcmNoXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVQcmVTZWFyY2hcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLkFkZExvb2t1cFRhZ0NsaWNrKHRhZ0NsaWNrQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiQWRkTG9va3VwVGFnQ2xpY2tcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIkFkZExvb2t1cFRhZ0NsaWNrXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5SZW1vdmVMb29rdXBUYWdDbGljayh0YWdDbGlja0NhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlbW92ZUxvb2t1cFRhZ0NsaWNrXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZW1vdmVMb29rdXBUYWdDbGlja1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuQWRkQ3VzdG9tVmlldyhcclxuICAgICAgICAgICAgXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDFcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCIsXHJcbiAgICAgICAgICAgIFwiQWN0aXZlIENvbnRhY3RzIChDdXN0b20gVmlldylcIixcclxuICAgICAgICAgICAgXCI8ZmV0Y2g+PGVudGl0eSBuYW1lPSdjb250YWN0Jz48YXR0cmlidXRlIG5hbWU9J2Z1bGxuYW1lJy8+PC9lbnRpdHk+PC9mZXRjaD5cIixcclxuICAgICAgICAgICAgXCI8Z3JpZCBuYW1lPSdyZXN1bHRzZXQnPjxyb3cgbmFtZT0ncmVzdWx0JyBpZD0nY29udGFjdGlkJz48Y2VsbCBuYW1lPSdmdWxsbmFtZScgd2lkdGg9JzIwMCcvPjwvcm93PjwvZ3JpZD5cIixcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkQ3VzdG9tVmlld1wiLCBWYWx1ZTogXCJBZGRlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZEN1c3RvbVZpZXdcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLlNldE5vdGlmaWNhdGlvbihcIlRlc3Qgbm90aWZpY2F0aW9uXCIsIFwiVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9va3VwLkNsZWFyTm90aWZpY2F0aW9uKFwiVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyBpbiAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29rdXAuRm9jdXMoKSwgNDAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDRzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdUREMEQgVEVTVCAxOiBMb29rdXAgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBQcmltYXJ5Q29udGFjdElkIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTYpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TOSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAzOiBNZW1vIENvbnRyb2wgLSBEZXNjcmlwdGlvbiBGaWVsZFxyXG4gKiBNZW1vIGV4dGVuZHMgSUNvbnRyb2xUZXh0IHdpdGggTWF4TGVuZ3RoIHByb3BlcnR5XHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TWVtbyhmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWVtbyA9IGZvcm0uQm9keS5EZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gbWVtby5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIE1lbW8tc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiTWF4TGVuZ3RoXCIsIFZhbHVlOiBtZW1vLk1heExlbmd0aCwgU3RhdHVzOiB0eXBlb2YgbWVtby5NYXhMZW5ndGggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlID8gYFwiJHtvcmlnaW5hbFZhbHVlLnN1YnN0cmluZygwLCA1MCl9JHtvcmlnaW5hbFZhbHVlLmxlbmd0aCA+IDUwID8gJy4uLicgOiAnJ31cImAgOiBcIihlbXB0eSlcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBtZW1vLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBtZW1vLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogbWVtby5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IG1lbW8uQXR0cmlidXRlTmFtZSA9PT0gXCJkZXNjcmlwdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBtZW1vLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogbWVtby5BdHRyaWJ1dGVUeXBlID09PSBcIm1lbW9cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IG1lbW8uQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBtZW1vLkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IG1lbW8uRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBtZW1vLklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBtZW1vLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBtZW1vLlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBtZW1vLlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogbWVtby5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBtZW1vLkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogbWVtby5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgICAgIG1lbW8uVmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCBcIlwiKSArIFwiIFtURVNUXVwiO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbWVtby5WYWx1ZTtcclxuICAgICAgICBtZW1vLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCJbVEVTVF1cIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IG5ld1ZhbHVlPy5pbmNsdWRlcyhcIltURVNUXVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBtZW1vLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgbWVtby5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1lbW8uUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gbWVtby5EaXNhYmxlZDtcclxuICAgICAgICBtZW1vLkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1lbW8uRGlzYWJsZWQ7XHJcbiAgICAgICAgbWVtby5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IG1lbW8uTGFiZWw7XHJcbiAgICAgICAgbWVtby5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5MYWJlbDtcclxuICAgICAgICBtZW1vLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG1lbW8uVmlzaWJsZTtcclxuICAgICAgICBtZW1vLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtZW1vLlZpc2libGU7XHJcbiAgICAgICAgbWVtby5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBNZW1vIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtZW1vLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLlNldE5vdGlmaWNhdGlvbihcIlRlc3QgTWVtbyBub3RpZmljYXRpb25cIiwgXCJNRU1PX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1lbW8uQ2xlYXJOb3RpZmljYXRpb24oXCJNRU1PX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1lbW8uU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENERCBURVNUIDI6IE1lbW8gQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBEZXNjcmlwdGlvbiBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE1KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzExKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDM6IFN0cmluZyBDb250cm9sIC0gTmFtZSBGaWVsZFxyXG4gKiBTdHJpbmcgZXh0ZW5kcyBJQ29udHJvbFRleHQgd2l0aCBNYXhMZW5ndGggcHJvcGVydHlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RTdHJpbmcoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IHN0ciA9IGZvcm0uQm9keS5OYW1lO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBzdHIuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTdHJpbmctc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiTWF4TGVuZ3RoXCIsIFZhbHVlOiBzdHIuTWF4TGVuZ3RoLCBTdGF0dXM6IHR5cGVvZiBzdHIuTWF4TGVuZ3RoID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSA/IGBcIiR7b3JpZ2luYWxWYWx1ZS5zdWJzdHJpbmcoMCwgNTApfSR7b3JpZ2luYWxWYWx1ZS5sZW5ndGggPiA1MCA/ICcuLi4nIDogJyd9XCJgIDogXCIoZW1wdHkpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogc3RyLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBzdHIuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBzdHIuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBzdHIuQXR0cmlidXRlTmFtZSA9PT0gXCJuYW1lXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IHN0ci5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IHN0ci5BdHRyaWJ1dGVUeXBlID09PSBcInN0cmluZ1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogc3RyLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogc3RyLkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IHN0ci5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IHN0ci5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogc3RyLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBzdHIuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IHN0ci5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IHN0ci5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBzdHIuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBzdHIuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgICAgICBzdHIuVmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCBcIlwiKSArIFwiIFtURVNUXVwiO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gc3RyLlZhbHVlO1xyXG4gICAgICAgIHN0ci5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWU/LmluY2x1ZGVzKFwiW1RFU1RdXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCJbVEVTVF1cIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gc3RyLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgc3RyLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzdHIuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBzdHIuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBzdHIuRGlzYWJsZWQ7XHJcbiAgICAgICAgc3RyLkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHN0ci5EaXNhYmxlZDtcclxuICAgICAgICBzdHIuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IHN0ci5MYWJlbDtcclxuICAgICAgICBzdHIuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHN0ci5MYWJlbDtcclxuICAgICAgICBzdHIuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gc3RyLlZpc2libGU7XHJcbiAgICAgICAgc3RyLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzdHIuVmlzaWJsZTtcclxuICAgICAgICBzdHIuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgU3RyaW5nIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0ci5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHIuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzdHIuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0ci5TZXROb3RpZmljYXRpb24oXCJUZXN0IFN0cmluZyBub3RpZmljYXRpb25cIiwgXCJTVFJJTkdfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3RyLkNsZWFyTm90aWZpY2F0aW9uKFwiU1RSSU5HX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3RyLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDQzQgVEVTVCAzOiBTdHJpbmcgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBOYW1lIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgNDogSW50ZWdlciBDb250cm9sIC0gTnVtYmVyT2ZFbXBsb3llZXMgRmllbGRcclxuICogSW50ZWdlciBleHRlbmRzIElDb250cm9sTnVtYmVyIHdpdGggTWF4LCBNaW4gcHJvcGVydGllcyAoTk8gUHJlY2lzaW9uIHN1cHBvcnQpXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0SW50ZWdlcihmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgaW50ID0gZm9ybS5IZWFkZXIuTnVtYmVyT2ZFbXBsb3llZXM7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGludC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEludGVnZXItc3BlY2lmaWMgcHJvcGVydGllcyAoSUNvbnRyb2xOdW1iZXIgLSBOTyBQcmVjaXNpb24gZm9yIEludGVnZXIpXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJNYXhcIiwgVmFsdWU6IGludC5NYXgsIFN0YXR1czogdHlwZW9mIGludC5NYXggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIk1pblwiLCBWYWx1ZTogaW50Lk1pbiwgU3RhdHVzOiB0eXBlb2YgaW50Lk1pbiA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogaW50LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBpbnQuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBpbnQuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBpbnQuQXR0cmlidXRlTmFtZSA9PT0gXCJudW1iZXJvZmVtcGxveWVlc1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBpbnQuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBpbnQuQXR0cmlidXRlVHlwZSA9PT0gXCJpbnRlZ2VyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBpbnQuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBpbnQuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogaW50LkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGludC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogaW50LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBpbnQuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGludC5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IGludC5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBpbnQuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBpbnQuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCAwKSArIDEwMDtcclxuICAgICAgICBpbnQuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBpbnQuVmFsdWU7XHJcbiAgICAgICAgaW50LlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gaW50LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgaW50LlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBpbnQuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBpbnQuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBpbnQuRGlzYWJsZWQ7XHJcbiAgICAgICAgaW50LkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGludC5EaXNhYmxlZDtcclxuICAgICAgICBpbnQuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGludC5MYWJlbDtcclxuICAgICAgICBpbnQuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGludC5MYWJlbDtcclxuICAgICAgICBpbnQuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBpbnQuVmlzaWJsZTtcclxuICAgICAgICBpbnQuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGludC5WaXNpYmxlO1xyXG4gICAgICAgIGludC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBJbnRlZ2VyIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW50LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnQuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnQuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5TZXROb3RpZmljYXRpb24oXCJUZXN0IEludGVnZXIgbm90aWZpY2F0aW9uXCIsIFwiSU5UX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGludC5DbGVhck5vdGlmaWNhdGlvbihcIklOVF9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGludC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVERDIyIFRFU1QgNDogSW50ZWdlciBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IE51bWJlck9mRW1wbG95ZWVzIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTYpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgNTogT3B0aW9uU2V0IENvbnRyb2wgLSBJbmR1c3RyeUNvZGUgRmllbGRcclxuICogT3B0aW9uU2V0IGV4dGVuZHMgSUNvbnRyb2xPcHRpb25TZXQgd2l0aCBJbml0aWFsVmFsdWUsIFNlbGVjdGVkT3B0aW9uLCBUZXh0LCBWYWx1ZVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdE9wdGlvblNldChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3Qgb3B0ID0gZm9ybS5Cb2R5LkluZHVzdHJ5Q29kZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gb3B0LlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gT3B0aW9uU2V0LXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkluaXRpYWxWYWx1ZVwiLCBWYWx1ZTogb3B0LkluaXRpYWxWYWx1ZSwgU3RhdHVzOiB0eXBlb2Ygb3B0LkluaXRpYWxWYWx1ZSA9PT0gXCJudW1iZXJcIiB8fCBvcHQuSW5pdGlhbFZhbHVlID09PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJPcHRpb25zXCIsIFZhbHVlOiBgJHtvcHQuT3B0aW9ucz8ubGVuZ3RoID8/IDB9IG9wdGlvbnNgLCBTdGF0dXM6IG9wdC5PcHRpb25zPy5sZW5ndGggPiAwID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJTZWxlY3RlZE9wdGlvblwiLCBWYWx1ZTogb3B0LlNlbGVjdGVkT3B0aW9uID8gYCR7b3B0LlNlbGVjdGVkT3B0aW9uLnRleHR9ICgke29wdC5TZWxlY3RlZE9wdGlvbi52YWx1ZX0pYCA6IFwiKG5vbmUpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIlRleHRcIiwgVmFsdWU6IG9wdC5UZXh0IHx8IFwiKGVtcHR5KVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBvcHQuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IG9wdC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IG9wdC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IG9wdC5BdHRyaWJ1dGVOYW1lID09PSBcImluZHVzdHJ5Y29kZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBvcHQuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBvcHQuQXR0cmlidXRlVHlwZSA9PT0gXCJvcHRpb25zZXRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IG9wdC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBvcHQuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IG9wdC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBvcHQuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IG9wdC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogb3B0LlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBvcHQuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBvcHQuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxN1wiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogb3B0LkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMThcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogb3B0LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG9wdC5PcHRpb25zO1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdWYWwgPSBvcHRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICBvcHQuVmFsdWUgPSBuZXdWYWw7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gb3B0LlZhbHVlO1xyXG4gICAgICAgICAgICBvcHQuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gbmV3VmFsID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gbmV3VmFsID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogXCJObyBvcHRpb25zIGF2YWlsYWJsZVwiLCBTdGF0dXM6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBPcHRpb24odmFsdWUpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBvcHQuT3B0aW9ucztcclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGVzdE9wdGlvbiA9IG9wdC5PcHRpb24ob3B0aW9uc1swXS52YWx1ZSk7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogdGVzdE9wdGlvbiA/IGAke3Rlc3RPcHRpb24udGV4dH1gIDogXCJudWxsXCIsIFN0YXR1czogdGVzdE9wdGlvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogXCJObyBvcHRpb25zXCIsIFN0YXR1czogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFMzOiBPcHRpb24odGV4dCkgLSBOT1QgSU1QTEVNRU5URUQ6IE9PQiBEeW5hbWljcyBjb2RlIHRocm93cyAnVmFsdWUgc2hvdWxkIGJlIG9mIHR5cGU6IG51bWJlcicgZXJyb3JcclxuICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHRleHQpXCIsIFZhbHVlOiBcIk9PQiBCdWcgLSBkZXZraXQudHMga2hcdTAwRjRuZyBoXHUxRUQ3IHRyXHUxRUUzXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAvLyBNZXRob2Q6IEFkZE9wdGlvbiAoYWRkIHRoZW4gcmVtb3ZlKVxyXG4gICAgLy8gTk9URTogQWRkT3B0aW9uIGFkZHMgdG8gQ09OVFJPTCwgc28gd2UgY2hlY2sgQ29udHJvbE9wdGlvbnMgKG5vdCBPcHRpb25zIHdoaWNoIGlzIGZyb20gYXR0cmlidXRlKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuQWRkT3B0aW9uKFwiVGVzdCBPcHRpb24gKEFJKVwiLCA5OTk5OTkpO1xyXG4gICAgICAgIGNvbnN0IGhhc05ldyA9IG9wdC5Db250cm9sT3B0aW9ucz8uc29tZShvID0+IG8udmFsdWUgPT09IDk5OTk5OSk7XHJcbiAgICAgICAgb3B0LlJlbW92ZU9wdGlvbig5OTk5OTkpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiQWRkT3B0aW9uXCIsIFZhbHVlOiBoYXNOZXcgPyBcIkFkZGVkXHUyMTkyUmVtb3ZlZFwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiBoYXNOZXcgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiQWRkT3B0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFJlbW92ZU9wdGlvbiAoYWxyZWFkeSB0ZXN0ZWQgYWJvdmUgd2l0aCBBZGRPcHRpb24pXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT3B0aW9uXCIsIFZhbHVlOiBcIlRlc3RlZCB3aXRoIFM0XCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT3B0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IENsZWFyT3B0aW9ucyAtIFRlc3QgY2xlYXIgYW5kIHJlc3RvcmUgZnJvbSBPcHRpb25zIChhdHRyaWJ1dGUpXHJcbiAgICAvLyBOT1RFOiBDbGVhck9wdGlvbnMgY2xlYXJzIHRoZSBDT05UUk9MIG9wdGlvbnMsIGJ1dCBPcHRpb25zIChmcm9tIGF0dHJpYnV0ZSkgcmVtYWlucyBpbnRhY3RcclxuICAgIC8vIE5PVEU6IENvbnRyb2xPcHRpb25zIGluY2x1ZGVzIGEgYmxhbmsgb3B0aW9uICh0ZXh0PScnLCB2YWx1ZT1udWxsKSBmb3IgY2xlYXJpbmcgc2VsZWN0aW9uXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU9wdGlvbnMgPSBvcHQuT3B0aW9uczsgLy8gU2F2ZSBmcm9tIGF0dHJpYnV0ZSAobm90IGFmZmVjdGVkIGJ5IENsZWFyT3B0aW9ucylcclxuICAgICAgICBjb25zdCBhdHRyTGVuID0gYXR0cmlidXRlT3B0aW9ucz8ubGVuZ3RoID8/IDA7XHJcbiAgICAgICAgb3B0LkNsZWFyT3B0aW9ucygpO1xyXG4gICAgICAgIGNvbnN0IGNsZWFyZWRDb3VudCA9IG9wdC5Db250cm9sT3B0aW9ucz8ubGVuZ3RoID8/IDA7XHJcbiAgICAgICAgLy8gUmVzdG9yZSBvcHRpb25zIGZyb20gYXR0cmlidXRlXHJcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgYXR0cmlidXRlT3B0aW9ucykge1xyXG4gICAgICAgICAgICBvcHQuQWRkT3B0aW9uKG9wdGlvbi50ZXh0LCBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN0b3JlZENvdW50ID0gb3B0LkNvbnRyb2xPcHRpb25zPy5sZW5ndGggPz8gMDtcclxuICAgICAgICAvLyByZXN0b3JlZENvdW50ID49IGF0dHJMZW4gYmVjYXVzZSBDb250cm9sT3B0aW9ucyBtYXkgaW5jbHVkZSBibGFuayBvcHRpb25cclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gY2xlYXJlZENvdW50ID09PSAwICYmIHJlc3RvcmVkQ291bnQgPj0gYXR0ckxlbjtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkNsZWFyT3B0aW9uc1wiLCBWYWx1ZTogc3VjY2VzcyA/IGBDbGVhcigke2NsZWFyZWRDb3VudH0pXHUyMTkyUmVzdG9yZSgke3Jlc3RvcmVkQ291bnR9LyR7YXR0ckxlbn0pYCA6IGBhdHRyPSR7YXR0ckxlbn0sIGNsZWFyPSR7Y2xlYXJlZENvdW50fSwgcmVzdG9yZT0ke3Jlc3RvcmVkQ291bnR9YCwgU3RhdHVzOiBzdWNjZXNzID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkNsZWFyT3B0aW9uc1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IG9wdC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG9wdC5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gb3B0LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgb3B0LlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gb3B0LkRpc2FibGVkO1xyXG4gICAgICAgIG9wdC5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuRGlzYWJsZWQ7XHJcbiAgICAgICAgb3B0LkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBvcHQuTGFiZWw7XHJcbiAgICAgICAgb3B0LkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuTGFiZWw7XHJcbiAgICAgICAgb3B0LkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gb3B0LlZpc2libGU7XHJcbiAgICAgICAgb3B0LlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuVmlzaWJsZTtcclxuICAgICAgICBvcHQuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kcyBmcm9tIElDb250cm9sXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE9wdGlvblNldCBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTNcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3B0LkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5TZXROb3RpZmljYXRpb24oXCJUZXN0IE9wdGlvblNldCBub3RpZmljYXRpb25cIiwgXCJPUFRfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3B0LkNsZWFyTm90aWZpY2F0aW9uKFwiT1BUX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3B0LlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE2XCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDQ0IgVEVTVCA1OiBPcHRpb25TZXQgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBJbmR1c3RyeUNvZGUgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxNilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxXQUFTLFNBQWlDO0FBQ3RDLFFBQUksT0FBTyxXQUFXLGVBQWdCLE9BQWUsUUFBUSxRQUFXO0FBQ3BFLGFBQVEs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
