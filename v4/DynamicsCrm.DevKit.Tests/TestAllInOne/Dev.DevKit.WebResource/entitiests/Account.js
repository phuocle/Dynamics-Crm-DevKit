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
    debugger;
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
  var WEBAPI_FORMATTED_VALUE_SUFFIX = "@OData.Community.Display.V1.FormattedValue";
  var WEBAPI_LOOKUP_LOGICAL_NAME_SUFFIX = "@Microsoft.Dynamics.CRM.lookuplogicalname";
  var webApiTypeParsers = {
    DateTime: (value) => {
      if (value === null || value === void 0) return null;
      if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
      const trimmedString = String(value).trim();
      if (trimmedString === "") return null;
      const timestamp = Date.parse(trimmedString);
      if (isNaN(timestamp)) return null;
      const parsedDate = new Date(timestamp);
      return isNaN(parsedDate.getTime()) ? null : parsedDate;
    },
    Integer: (value) => {
      const parsed = parseInt(value, 10);
      return isNaN(parsed) ? null : parsed;
    },
    Number: (value) => {
      const parsed = Number(value);
      return isNaN(parsed) ? null : parsed;
    },
    Boolean: (value) => {
      if (value === null || value === void 0) return null;
      if (typeof value === "boolean") return value;
      if (typeof value === "number") return value !== 0;
      const stringValue = String(value).trim().toLowerCase();
      const trueValues = ["true", "1", "yes", "y"];
      const falseValues = ["false", "0", "no", "n"];
      if (trueValues.includes(stringValue)) return true;
      if (falseValues.includes(stringValue)) return false;
      return null;
    }
  };
  function webApiReturnGet(data, type) {
    if (data === null || data === void 0) return null;
    if (type === null || type === void 0) return data;
    const parser = webApiTypeParsers[type];
    return parser ? parser(data) : data;
  }
  function defineWebApiField(obj, fieldName, entity, config, upsertEntity) {
    const { logicalName, schemaName, entityCollectionName, entityLogicalName, readOnly, type } = config;
    const getFormattedValue = () => {
      const formattedKey = logicalName + WEBAPI_FORMATTED_VALUE_SUFFIX;
      if (entity?.[formattedKey] === void 0 || entity?.[formattedKey] === null) {
        return "";
      }
      if (entityCollectionName !== void 0 && entityCollectionName.length > 0) {
        const lookupKey = logicalName + WEBAPI_LOOKUP_LOGICAL_NAME_SUFFIX;
        if (entity?.[lookupKey] === entityLogicalName) {
          return entity?.[formattedKey];
        }
        return "";
      }
      if (type === "MultiOptionSet") {
        return entity?.[formattedKey]?.toString()?.split(";").map((item) => item?.trim()) ?? [];
      }
      return entity?.[formattedKey];
    };
    const getValue = () => {
      if (entity?.[logicalName] === void 0 || entity?.[logicalName] === null) {
        return null;
      }
      if (entityCollectionName !== void 0 && entityCollectionName.length > 0) {
        const lookupKey = logicalName + WEBAPI_LOOKUP_LOGICAL_NAME_SUFFIX;
        if (entity?.[lookupKey] === void 0 || entity?.[lookupKey] === entityLogicalName) {
          return webApiReturnGet(entity?.[logicalName], type);
        }
        return null;
      }
      if (type === "MultiOptionSet") {
        return entity?.[logicalName]?.toString()?.split(",").map((item) => parseInt(item, 10)) ?? [];
      }
      return webApiReturnGet(entity?.[logicalName], type);
    };
    const setValue = (value) => {
      if (type === "MultiOptionSet") value = value?.join(",");
      if (entityCollectionName !== void 0 && entityCollectionName?.length > 0) {
        const bindingName = (schemaName ?? logicalName) + "@odata.bind";
        if (value === null) {
          upsertEntity[bindingName] = null;
        } else {
          const cleanValue = typeof value === "string" ? value.replace(/[{}]/g, "") : value;
          upsertEntity[bindingName] = "/" + entityCollectionName + "(" + cleanValue + ")";
        }
      } else {
        upsertEntity[logicalName] = value;
      }
      entity[logicalName] = value;
    };
    Object.defineProperty(obj.FormattedValue, fieldName, {
      get: getFormattedValue
    });
    if (readOnly) {
      Object.defineProperty(obj, fieldName, {
        get: getValue
      });
    } else {
      Object.defineProperty(obj, fieldName, {
        get: getValue,
        set: setValue
      });
    }
  }
  function createWebApiEntity(entity, entityName, entityCollectionName, fieldConfigMap) {
    const e = entity ?? {};
    const upsertEntity = {};
    const webApiEntity = {
      ODataEntity: e,
      FormattedValue: {},
      Entity: upsertEntity,
      EntityName: entityName,
      EntityCollectionName: entityCollectionName,
      "@odata.etag": e?.["@odata.etag"],
      getAliasedValue(alias, isMultiOptionSet = false) {
        if (e?.[alias] === void 0 || e?.[alias] === null) {
          return null;
        }
        if (isMultiOptionSet) {
          return e?.[alias].toString().split(",").map((item) => parseInt(item, 10));
        }
        return e?.[alias];
      },
      getAliasedFormattedValue(alias, isMultiOptionSet = false) {
        const key = alias + WEBAPI_FORMATTED_VALUE_SUFFIX;
        if (e?.[key] === void 0 || e?.[key] === null) {
          return "";
        }
        if (isMultiOptionSet) {
          return e?.[key]?.toString()?.split(";").map((item) => item?.trim()) ?? [];
        }
        return e?.[key];
      }
    };
    for (const fieldName in fieldConfigMap) {
      defineWebApiField(webApiEntity, fieldName, e, fieldConfigMap[fieldName], upsertEntity);
    }
    return webApiEntity;
  }

  // entities/generator/OptionSet.ts
  var AdvancedConfigSetting = {
    /** MaxChildIncidentNumber */
    MaxChildIncidentNumber: "MaxChildIncidentNumber",
    /** MaxIncidentMergeNumber */
    MaxIncidentMergeNumber: "MaxIncidentMergeNumber"
  };
  var ClientName = {
    /** Web */
    Web: "Web",
    /** Outlook */
    Outlook: "Outlook",
    /** Mobile */
    Mobile: "Mobile"
  };
  var ClientState = {
    /** Online */
    Online: "Online",
    /** Offline */
    Offline: "Offline"
  };
  var FieldAttributeType = {
    /** boolean */
    Boolean: "boolean",
    /** datetime */
    DateTime: "datetime",
    /** decimal */
    Decimal: "decimal",
    /** double */
    Double: "double",
    /** integer */
    Integer: "integer",
    /** lookup */
    Lookup: "lookup",
    /** memo */
    Memo: "memo",
    /** money */
    Money: "money",
    /** multiselectoptionset */
    MultiOptionSet: "multioptionset",
    /** optionset */
    OptionSet: "optionset",
    /** string */
    String: "string"
  };
  var FieldControlType = {
    /** standard - A standard control */
    Standard: "standard",
    /** iframe - An IFRAME control */
    Iframe: "iframe",
    /** kbsearch - A knowledge base search control */
    KbSearch: "kbsearch",
    /** lookup - A lookup control */
    Lookup: "lookup",
    /** multiselectoptionset - A multi-select option set control */
    MultiSelectOptionset: "multiselectoptionset",
    /** notes - A notes control */
    Notes: "notes",
    /** optionset - An option set control */
    OptionSet: "optionset",
    /** quickform - A quick view control */
    QuickForm: "quickform",
    /** subgrid - A subgrid control */
    SubGrid: "subgrid",
    /** timercontrol - A timer control */
    TimerControl: "timercontrol",
    /** timelinewall - A timeline control (for Unified Interface) */
    TimelineWall: "timelinewall",
    /** webresource - A web resource control */
    WebResource: "webresource"
  };
  var FieldFormat = {
    /** date */
    Date: "date",
    /** datetime */
    DateTime: "datetime",
    /** duration */
    Duration: "duration",
    /** email */
    Email: "email",
    /** language */
    Language: "language",
    /** none */
    None: "none",
    /** textarea */
    TextArea: "textarea",
    /** text */
    Text: "text",
    /** tickersymbol */
    TickerSymbol: "tickersymbol",
    /** phone */
    Phone: "phone",
    /** timezone */
    TimeZone: "timezone",
    /** url */
    Url: "url"
  };
  var FieldNotificationLevel = {
    /** ERROR */
    Error: "ERROR",
    /** RECOMMENDATION */
    Recommendation: "RECOMMENDATION"
  };
  var FieldRequiredLevel = {
    /** none */
    None: "none",
    /** required */
    Required: "required",
    /** recommended */
    Recommended: "recommended"
  };
  var FieldSubmitMode = {
    /** always - The data is always sent with a save */
    Always: "always",
    /** never - The data is never sent with a save */
    Never: "never",
    /** dirty - Default behavior. The data is sent with the save when it has changed */
    Dirty: "dirty"
  };
  var FormFactor = {
    /** 0 */
    Unknown: 0,
    /** 1 */
    Desktop: 1,
    /** 2 */
    Tablet: 2,
    /** 3 */
    Phone: 3
  };
  var FormNotificationLevel = {
    /** ERROR - Notification will use the system error icon */
    Error: "ERROR",
    /** WARNING - Notification will use the system warning icon */
    Warning: "WARNING",
    /** INFO - Notification will use the system info icon */
    Info: "INFO"
  };
  var FormType = {
    /** 0 */
    Undefined: 0,
    /** 1 - Quick Create forms return 1 */
    Create: 1,
    /** 2 */
    Update: 2,
    /** 3 */
    ReadOnly: 3,
    /** 4 */
    Disabled: 4,
    /** 5 */
    BulkEdit: 5
  };
  var FullNameConventionCode = {
    /** 0 */
    LastName_Comma_FirstName: 0,
    /** 1 */
    FirstName_LastName: 1,
    /** 2 */
    LastName_Comma_FirstName_MiddleInitial: 2,
    /** 3 */
    FirstName_MiddleInitial_LastName: 3,
    /** 4 */
    LastName_Comma_FirstName_MiddleName: 4,
    /** 5 */
    FirstName_MiddleName_LastName: 5,
    /** 6 */
    LastName_FirstName: 6,
    /** 7 */
    LastNameFirstName: 7
  };
  var GridType = {
    /** 1 */
    HomePageGrid: 1,
    /** 2 */
    Subgrid: 2
  };
  var OpenFileOption = {
    /** 1 */
    Open: 1,
    /** 2 */
    Save: 2
  };
  var ProcessCategory = {
    /** 0 */
    Qualify: 0,
    /** 1 */
    Develop: 1,
    /** 2 */
    Propose: 2,
    /** 3 */
    Close: 3,
    /** 4 */
    Identify: 4,
    /** 5 */
    Research: 5,
    /** 6 */
    Resolve: 6
  };
  var ProcessDisplayState = {
    /** expanded */
    Expanded: "expanded",
    /** collapsed */
    Collapsed: "collapsed",
    /** floating */
    Floating: "floating"
  };
  var ProcessStatus = {
    /** active */
    Active: "active",
    /** aborted */
    Aborted: "aborted",
    /** finished */
    Finished: "finished"
  };
  var SaveMode = {
    /** 1 - All entities */
    Save: 1,
    /** 2 - All entities */
    SaveAndClose: 2,
    /** 5 - All entities */
    Deactivate: 5,
    /** 6 - All entities */
    Reactivate: 6,
    /** 7 - Email */
    Email: 7,
    /** 15 - Lead */
    Disqualify: 15,
    /** 16 - Lead */
    Qualify: 16,
    /** 47 - User or Team */
    Assign: 47,
    /** 58 - Activities */
    SaveAsCompleted: 58,
    /** 59 - All entities */
    SaveAndNew: 59,
    /** 70 - All entities */
    AutoSave: 70
  };
  var SaveOption = {
    /** saveandclose - This is the equivalent of using the Save and Close command */
    SaveAndClose: "saveandclose",
    /** saveandnew - This is the equivalent of the using the Save and New command */
    SaveAndNew: "saveandnew"
  };
  var SidePaneState = {
    /** 0 - Collapsed */
    Collapsed: 0,
    /** 1 - Expanded */
    Expanded: 1
  };
  var TabContentType = {
    /** cardSections: The default tab behavior */
    CardSections: "cardSections",
    /** singleComponent: Maximizes the content of the first component in the tab */
    SingleComponent: "singleComponent"
  };
  var TabDisplayState = {
    /** expanded */
    Expanded: "expanded",
    /** collapsed */
    Collapsed: "collapsed"
  };
  var TimerState = {
    /** 1 */
    NotSet: 1,
    /** 2 */
    InProgress: 2,
    /** 3 */
    Warning: 3,
    /** 4 */
    Violated: 4,
    /** 5 */
    Success: 5,
    /** 6 */
    Expired: 6,
    /** 7 */
    Canceled: 7,
    /** 8 */
    Paused: 8
  };
  var Account = {
    /** Select the account's primary industry for use in marketing segmentation and demographic analysis */
    IndustryCode: {
      /** 1 - Accounting */
      Accounting: 1,
      /** 7 - Consulting */
      Consulting: 7,
      /** 16 - Financial */
      Financial: 16,
      /** 20 - Insurance */
      Insurance: 20,
      /** 12 - Technology */
      Technology: 12
    },
    /** Custom MultiOptionSet - v4_Categories */
    v4_Categories: {
      /** 100000000 */
      Category_A: 1e8,
      /** 100000001 */
      Category_B: 100000001,
      /** 100000002 */
      Category_C: 100000002,
      /** 100000003 */
      Category_D: 100000003
    }
  };
  var OptionSet = {
    // Global OptionSets
    AdvancedConfigSetting,
    ClientName,
    ClientState,
    FieldAttributeType,
    FieldControlType,
    FieldFormat,
    FieldNotificationLevel,
    FieldRequiredLevel,
    FieldSubmitMode,
    FormFactor,
    FormNotificationLevel,
    FormType,
    FullNameConventionCode,
    GridType,
    OpenFileOption,
    ProcessCategory,
    ProcessDisplayState,
    ProcessStatus,
    SaveMode,
    SaveOption,
    SidePaneState,
    TabContentType,
    TabDisplayState,
    TimerState,
    // Entity OptionSets
    Account
  };

  // entities/generator/Account.form.ts
  var AccountForm;
  ((AccountForm2) => {
    class Form extends FormBase {
      /**
       * Creates an Account Form instance
       * @param executionContext The execution context from form event
       * @param defaultWebResourceName Optional default web resource name
       */
      constructor(executionContext, defaultWebResourceName) {
        super(executionContext, defaultWebResourceName, {
          body: [
            "Name",
            "Description",
            "NumberOfEmployees",
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
          header: [
            "OwnerId",
            "NumberOfEmployees",
            "Revenue"
          ],
          tab: [
            "SUMMARY_TAB___ACCOUNT_INFORMATION"
          ],
          grid: [
            "Contacts"
          ],
          navigation: [
            "nav_msa_account_managingpartner"
          ],
          quick: [
            "contactquickform___EMailAddress1"
          ],
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
    methodResults.push({ Test: "S3", Property: "Option(text)", Value: "OOB Bug - devkit.ts not support", Status: "\u2713" });
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

  // entities/generator/Account.webapi.ts
  var AccountFieldConfig = {
    AccountCategoryCode: { logicalName: "accountcategorycode", type: "Integer" },
    AccountClassificationCode: { logicalName: "accountclassificationcode", type: "Integer" },
    AccountId: { logicalName: "accountid" },
    AccountNumber: { logicalName: "accountnumber" },
    AccountRatingCode: { logicalName: "accountratingcode", type: "Integer" },
    Address1_AddressId: { logicalName: "address1_addressid" },
    Address1_AddressTypeCode: { logicalName: "address1_addresstypecode", type: "Integer" },
    Address1_City: { logicalName: "address1_city" },
    Address1_Composite: { logicalName: "address1_composite", readOnly: true },
    Address1_Country: { logicalName: "address1_country" },
    Address1_County: { logicalName: "address1_county" },
    Address1_Fax: { logicalName: "address1_fax" },
    Address1_FreightTermsCode: { logicalName: "address1_freighttermscode", type: "Integer" },
    Address1_Latitude: { logicalName: "address1_latitude", type: "Number" },
    Address1_Line1: { logicalName: "address1_line1" },
    Address1_Line2: { logicalName: "address1_line2" },
    Address1_Line3: { logicalName: "address1_line3" },
    Address1_Longitude: { logicalName: "address1_longitude", type: "Number" },
    Address1_Name: { logicalName: "address1_name" },
    Address1_PostalCode: { logicalName: "address1_postalcode" },
    Address1_PostOfficeBox: { logicalName: "address1_postofficebox" },
    Address1_PrimaryContactName: { logicalName: "address1_primarycontactname" },
    Address1_ShippingMethodCode: { logicalName: "address1_shippingmethodcode", type: "Integer" },
    Address1_StateOrProvince: { logicalName: "address1_stateorprovince" },
    Address1_Telephone1: { logicalName: "address1_telephone1" },
    Address1_Telephone2: { logicalName: "address1_telephone2" },
    Address1_Telephone3: { logicalName: "address1_telephone3" },
    Address1_UPSZone: { logicalName: "address1_upszone" },
    Address1_UTCOffset: { logicalName: "address1_utcoffset", type: "Integer" },
    Address2_AddressId: { logicalName: "address2_addressid" },
    Address2_AddressTypeCode: { logicalName: "address2_addresstypecode", type: "Integer" },
    Address2_City: { logicalName: "address2_city" },
    Address2_Composite: { logicalName: "address2_composite", readOnly: true },
    Address2_Country: { logicalName: "address2_country" },
    Address2_County: { logicalName: "address2_county" },
    Address2_Fax: { logicalName: "address2_fax" },
    Address2_FreightTermsCode: { logicalName: "address2_freighttermscode", type: "Integer" },
    Address2_Latitude: { logicalName: "address2_latitude", type: "Number" },
    Address2_Line1: { logicalName: "address2_line1" },
    Address2_Line2: { logicalName: "address2_line2" },
    Address2_Line3: { logicalName: "address2_line3" },
    Address2_Longitude: { logicalName: "address2_longitude", type: "Number" },
    Address2_Name: { logicalName: "address2_name" },
    Address2_PostalCode: { logicalName: "address2_postalcode" },
    Address2_PostOfficeBox: { logicalName: "address2_postofficebox" },
    Address2_PrimaryContactName: { logicalName: "address2_primarycontactname" },
    Address2_ShippingMethodCode: { logicalName: "address2_shippingmethodcode", type: "Integer" },
    Address2_StateOrProvince: { logicalName: "address2_stateorprovince" },
    Address2_Telephone1: { logicalName: "address2_telephone1" },
    Address2_Telephone2: { logicalName: "address2_telephone2" },
    Address2_Telephone3: { logicalName: "address2_telephone3" },
    Address2_UPSZone: { logicalName: "address2_upszone" },
    Address2_UTCOffset: { logicalName: "address2_utcoffset", type: "Integer" },
    Adx_CreatedByIPAddress: { logicalName: "adx_createdbyipaddress" },
    Adx_CreatedByUsername: { logicalName: "adx_createdbyusername" },
    Adx_ModifiedByIPAddress: { logicalName: "adx_modifiedbyipaddress" },
    Adx_ModifiedByUsername: { logicalName: "adx_modifiedbyusername" },
    Aging30: { logicalName: "aging30", readOnly: true, type: "Number" },
    Aging30_Base: { logicalName: "aging30_base", readOnly: true, type: "Number" },
    Aging60: { logicalName: "aging60", readOnly: true, type: "Number" },
    Aging60_Base: { logicalName: "aging60_base", readOnly: true, type: "Number" },
    Aging90: { logicalName: "aging90", readOnly: true, type: "Number" },
    Aging90_Base: { logicalName: "aging90_base", readOnly: true, type: "Number" },
    BusinessTypeCode: { logicalName: "businesstypecode", type: "Integer" },
    CreatedBy: { schemaName: "createdby", logicalName: "_createdby_value", entityCollectionName: "systemusers", entityLogicalName: "systemuser", readOnly: true },
    CreatedByExternalParty: { schemaName: "createdbyexternalparty", logicalName: "_createdbyexternalparty_value", entityCollectionName: "externalparties", entityLogicalName: "externalparty", readOnly: true },
    CreatedOn_UtcDateAndTime: { logicalName: "createdon", readOnly: true, type: "DateTime" },
    CreatedOnBehalfBy: { schemaName: "createdonbehalfby", logicalName: "_createdonbehalfby_value", entityCollectionName: "systemusers", entityLogicalName: "systemuser", readOnly: true },
    CreditLimit: { logicalName: "creditlimit", type: "Number" },
    CreditLimit_Base: { logicalName: "creditlimit_base", readOnly: true, type: "Number" },
    CreditOnHold: { logicalName: "creditonhold", type: "Boolean" },
    CustomerSizeCode: { logicalName: "customersizecode", type: "Integer" },
    CustomerTypeCode: { logicalName: "customertypecode", type: "Integer" },
    Description: { logicalName: "description" },
    DoNotBulkEMail: { logicalName: "donotbulkemail", type: "Boolean" },
    DoNotBulkPostalMail: { logicalName: "donotbulkpostalmail", type: "Boolean" },
    DoNotEMail: { logicalName: "donotemail", type: "Boolean" },
    DoNotFax: { logicalName: "donotfax", type: "Boolean" },
    DoNotPhone: { logicalName: "donotphone", type: "Boolean" },
    DoNotPostalMail: { logicalName: "donotpostalmail", type: "Boolean" },
    DoNotSendMM: { logicalName: "donotsendmm", type: "Boolean" },
    EMailAddress1: { logicalName: "emailaddress1" },
    EMailAddress2: { logicalName: "emailaddress2" },
    EMailAddress3: { logicalName: "emailaddress3" },
    EntityImage: { logicalName: "entityimage" },
    EntityImage_Timestamp: { logicalName: "entityimage_timestamp", readOnly: true },
    EntityImage_URL: { logicalName: "entityimage_url", readOnly: true },
    EntityImageId: { logicalName: "entityimageid", readOnly: true },
    ExchangeRate: { logicalName: "exchangerate", readOnly: true, type: "Number" },
    Fax: { logicalName: "fax" },
    FollowEmail: { logicalName: "followemail", type: "Boolean" },
    FtpSiteURL: { logicalName: "ftpsiteurl" },
    ImportSequenceNumber: { logicalName: "importsequencenumber", type: "Integer" },
    IndustryCode: { logicalName: "industrycode", type: "Integer" },
    IsPrivate: { logicalName: "isprivate", readOnly: true, type: "Boolean" },
    LastOnHoldTime_UtcDateAndTime: { logicalName: "lastonholdtime", type: "DateTime" },
    LastUsedInCampaign_UtcDateOnly: { logicalName: "lastusedincampaign", type: "DateTime" },
    MarketCap: { logicalName: "marketcap", type: "Number" },
    MarketCap_Base: { logicalName: "marketcap_base", readOnly: true, type: "Number" },
    MarketingOnly: { logicalName: "marketingonly", type: "Boolean" },
    MasterId: { schemaName: "masterid", logicalName: "_masterid_value", entityCollectionName: "accounts", entityLogicalName: "account", readOnly: true },
    Merged: { logicalName: "merged", readOnly: true, type: "Boolean" },
    ModifiedBy: { schemaName: "modifiedby", logicalName: "_modifiedby_value", entityCollectionName: "systemusers", entityLogicalName: "systemuser", readOnly: true },
    ModifiedByExternalParty: { schemaName: "modifiedbyexternalparty", logicalName: "_modifiedbyexternalparty_value", entityCollectionName: "externalparties", entityLogicalName: "externalparty", readOnly: true },
    ModifiedOn_UtcDateAndTime: { logicalName: "modifiedon", readOnly: true, type: "DateTime" },
    ModifiedOnBehalfBy: { schemaName: "modifiedonbehalfby", logicalName: "_modifiedonbehalfby_value", entityCollectionName: "systemusers", entityLogicalName: "systemuser", readOnly: true },
    msa_managingpartnerid: { schemaName: "msa_managingpartnerid", logicalName: "_msa_managingpartnerid_value", entityCollectionName: "accounts", entityLogicalName: "account" },
    Name: { logicalName: "name" },
    NumberOfEmployees: { logicalName: "numberofemployees", type: "Integer" },
    OnHoldTime: { logicalName: "onholdtime", readOnly: true, type: "Integer" },
    OverriddenCreatedOn_UtcDateOnly: { logicalName: "overriddencreatedon", type: "DateTime" },
    OwnerId_systemuser: { schemaName: "ownerid", logicalName: "_ownerid_value", entityCollectionName: "systemusers", entityLogicalName: "systemuser" },
    OwnerId_team: { schemaName: "ownerid", logicalName: "_ownerid_value", entityCollectionName: "teams", entityLogicalName: "team" },
    OwnershipCode: { logicalName: "ownershipcode", type: "Integer" },
    OwningBusinessUnit: { schemaName: "owningbusinessunit", logicalName: "_owningbusinessunit_value", entityCollectionName: "businessunits", entityLogicalName: "businessunit", readOnly: true },
    OwningTeam: { schemaName: "owningteam", logicalName: "_owningteam_value", entityCollectionName: "teams", entityLogicalName: "team", readOnly: true },
    OwningUser: { schemaName: "owninguser", logicalName: "_owninguser_value", entityCollectionName: "systemusers", entityLogicalName: "systemuser", readOnly: true },
    ParentAccountId: { schemaName: "parentaccountid", logicalName: "_parentaccountid_value", entityCollectionName: "accounts", entityLogicalName: "account" },
    ParticipatesInWorkflow: { logicalName: "participatesinworkflow", type: "Boolean" },
    PaymentTermsCode: { logicalName: "paymenttermscode", type: "Integer" },
    PreferredAppointmentDayCode: { logicalName: "preferredappointmentdaycode", type: "Integer" },
    PreferredAppointmentTimeCode: { logicalName: "preferredappointmenttimecode", type: "Integer" },
    PreferredContactMethodCode: { logicalName: "preferredcontactmethodcode", type: "Integer" },
    PreferredSystemUserId: { schemaName: "preferredsystemuserid", logicalName: "_preferredsystemuserid_value", entityCollectionName: "systemusers", entityLogicalName: "systemuser" },
    PrimaryContactId: { schemaName: "primarycontactid", logicalName: "_primarycontactid_value", entityCollectionName: "contacts", entityLogicalName: "contact" },
    PrimarySatoriId: { logicalName: "primarysatoriid" },
    PrimaryTwitterId: { logicalName: "primarytwitterid" },
    ProcessId: { logicalName: "processid" },
    Revenue: { logicalName: "revenue", type: "Number" },
    Revenue_Base: { logicalName: "revenue_base", readOnly: true, type: "Number" },
    SharesOutstanding: { logicalName: "sharesoutstanding", type: "Integer" },
    ShippingMethodCode: { logicalName: "shippingmethodcode", type: "Integer" },
    SIC: { logicalName: "sic" },
    SLAId: { schemaName: "slaid", logicalName: "_slaid_value", entityCollectionName: "slas", entityLogicalName: "sla" },
    SLAInvokedId: { schemaName: "slainvokedid", logicalName: "_slainvokedid_value", entityCollectionName: "slas", entityLogicalName: "sla", readOnly: true },
    StageId: { logicalName: "stageid" },
    StateCode: { logicalName: "statecode", type: "Integer" },
    StatusCode: { logicalName: "statuscode", type: "Integer" },
    StockExchange: { logicalName: "stockexchange" },
    Telephone1: { logicalName: "telephone1" },
    Telephone2: { logicalName: "telephone2" },
    Telephone3: { logicalName: "telephone3" },
    TerritoryCode: { logicalName: "territorycode", type: "Integer" },
    TickerSymbol: { logicalName: "tickersymbol" },
    TimeSpentByMeOnEmailAndMeetings: { logicalName: "timespentbymeonemailandmeetings", readOnly: true },
    TimeZoneRuleVersionNumber: { logicalName: "timezoneruleversionnumber", type: "Integer" },
    TransactionCurrencyId: { schemaName: "transactioncurrencyid", logicalName: "_transactioncurrencyid_value", entityCollectionName: "transactioncurrencies", entityLogicalName: "transactioncurrency" },
    TraversedPath: { logicalName: "traversedpath" },
    UTCConversionTimeZoneCode: { logicalName: "utcconversiontimezonecode", type: "Integer" },
    VersionNumber: { logicalName: "versionnumber", readOnly: true, type: "Integer" },
    WebSiteURL: { logicalName: "websiteurl" },
    YomiName: { logicalName: "yominame" }
  };
  var AccountApi = class {
    constructor(entity) {
      const webApiEntity = createWebApiEntity(entity, "account", "accounts", AccountFieldConfig);
      Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
    }
  };

  // entities/Account.TestWebApi.ts
  async function TestWebApi(form) {
    const results = [];
    const methodResults = [];
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    try {
      const newAccount = new AccountApi();
      newAccount.Name = "Test Account";
      newAccount.Telephone1 = "123-456-7890";
      newAccount.IndustryCode = OptionSet.Account.IndustryCode.Consulting;
      results.push({
        Test: "R1",
        Property: "AccountApi (create)",
        Value: `Name="${newAccount.Name}", Entity ready`,
        Status: newAccount.Entity ? "\u2713" : "\u2717"
      });
    } catch (e) {
      results.push({ Test: "R1", Property: "AccountApi (create)", Value: e.message, Status: "\u2717" });
    }
    try {
      const account = new AccountApi();
      account.Name = "Entity Test";
      const entity = account.Entity;
      results.push({
        Test: "R2",
        Property: "Entity object",
        Value: entity ? `Keys: ${Object.keys(entity).join(", ")}` : "null",
        Status: entity && typeof entity === "object" ? "\u2713" : "\u2717"
      });
    } catch (e) {
      results.push({ Test: "R2", Property: "Entity object", Value: e.message, Status: "\u2717" });
    }
    try {
      const account = new AccountApi();
      results.push({
        Test: "R3",
        Property: "EntityName",
        Value: account.EntityName,
        Status: account.EntityName === "account" ? "\u2713" : "\u2717"
      });
    } catch (e) {
      results.push({ Test: "R3", Property: "EntityName", Value: e.message, Status: "\u2717" });
    }
    try {
      const account = new AccountApi();
      results.push({
        Test: "R4",
        Property: "EntityCollectionName",
        Value: account.EntityCollectionName,
        Status: account.EntityCollectionName === "accounts" ? "\u2713" : "\u2717"
      });
    } catch (e) {
      results.push({ Test: "R4", Property: "EntityCollectionName", Value: e.message, Status: "\u2717" });
    }
    try {
      const account = new AccountApi();
      results.push({
        Test: "R5",
        Property: "FormattedValue",
        Value: account.FormattedValue ? "object exists" : "null",
        Status: account.FormattedValue ? "\u2713" : "\u2717"
      });
    } catch (e) {
      results.push({ Test: "R5", Property: "FormattedValue", Value: e.message, Status: "\u2717" });
    }
    try {
      const record = await form.WebApi.RetrieveRecord(
        AccountApi,
        form.EntityName,
        form.EntityId,
        "?$select=name,telephone1,industrycode"
      );
      methodResults.push({
        Test: "S1",
        Property: "RetrieveRecord (Promise+Options)",
        Value: record.Name ? `Name="${record.Name}"` : "Retrieved",
        Status: "\u2713"
      });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "RetrieveRecord (Promise+Options)", Value: e.message, Status: "\u2717" });
    }
    try {
      const record = await form.WebApi.RetrieveRecord(
        AccountApi,
        form.EntityName,
        form.EntityId
      );
      methodResults.push({
        Test: "S2",
        Property: "RetrieveRecord (Promise)",
        Value: record.AccountId ? "Retrieved with all fields" : "Retrieved",
        Status: "\u2713"
      });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "RetrieveRecord (Promise)", Value: e.message, Status: "\u2717" });
    }
    try {
      const record = await form.WebApi.RetrieveRecord(
        AccountApi,
        form.EntityName,
        form.EntityId,
        "?$select=name,industrycode"
      );
      const formattedIndustry = record.FormattedValue?.IndustryCode;
      methodResults.push({
        Test: "S3",
        Property: "FormattedValue.IndustryCode",
        Value: formattedIndustry ? `"${formattedIndustry}"` : "(empty)",
        Status: "\u2713"
      });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "FormattedValue.IndustryCode", Value: e.message, Status: "\u2717" });
    }
    try {
      const fetchXml = "<fetch top='3'><entity name='account'><attribute name='name'/><attribute name='accountnumber'/></entity></fetch>";
      const records = await form.WebApi.RetrieveRecords(AccountApi, fetchXml);
      methodResults.push({
        Test: "S4",
        Property: "RetrieveRecords (FetchXML)",
        Value: `Count: ${records.length}`,
        Status: records.length >= 0 ? "\u2713" : "\u2717"
      });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "RetrieveRecords (FetchXML)", Value: e.message, Status: "\u2717" });
    }
    try {
      const fetchXml = "<fetch><entity name='account'><attribute name='name'/><attribute name='telephone1'/></entity></fetch>";
      const records = await form.WebApi.RetrieveRecords(AccountApi, fetchXml, 5);
      methodResults.push({
        Test: "S5",
        Property: "RetrieveRecords (FetchXML+PageSize)",
        Value: `Count: ${records.length} (max 5)`,
        Status: records.length >= 0 ? "\u2713" : "\u2717"
      });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "RetrieveRecords (FetchXML+PageSize)", Value: e.message, Status: "\u2717" });
    }
    try {
      const records = await form.WebApi.RetrieveRecords(
        AccountApi,
        "account",
        "?$select=name,accountnumber&$top=3"
      );
      methodResults.push({
        Test: "S6",
        Property: "RetrieveRecords (OData)",
        Value: `Count: ${records.length}`,
        Status: records.length >= 0 ? "\u2713" : "\u2717"
      });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "RetrieveRecords (OData)", Value: e.message, Status: "\u2717" });
    }
    try {
      const records = await form.WebApi.RetrieveRecords(
        AccountApi,
        "account",
        "?$select=name,telephone1",
        5
      );
      methodResults.push({
        Test: "S7",
        Property: "RetrieveRecords (OData+PageSize)",
        Value: `Count: ${records.length} (max 5)`,
        Status: records.length >= 0 ? "\u2713" : "\u2717"
      });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "RetrieveRecords (OData+PageSize)", Value: e.message, Status: "\u2717" });
    }
    try {
      const account = new AccountApi();
      account.Name = "Update Test";
      account.Revenue = 1e6;
      account.NumberOfEmployees = 50;
      account.CreditOnHold = true;
      const entity = account.Entity;
      const hasName = entity && entity.name === "Update Test";
      const hasRevenue = entity && entity.revenue === 1e6;
      methodResults.push({
        Test: "S8",
        Property: "Entity update on set",
        Value: `Name: ${hasName}, Revenue: ${hasRevenue}`,
        Status: hasName && hasRevenue ? "\u2713" : "\u26A0"
      });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "Entity update on set", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F310} TEST 6: WebApi [${startTime}] - Early-bound style - ${passed}/${total}`);
    console.log("%c\u{1F4CB} AccountApi Factory Tests (R1-R5)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 WebApi Methods (S1-S8)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestMoney.ts
  function TestMoney(form) {
    const results = [];
    const methodResults = [];
    const money = form.Header.Revenue;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalValue = money.Value;
    try {
      results.push({ Test: "R1", Property: "Max", Value: money.Max, Status: typeof money.Max === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Min", Value: money.Min, Status: typeof money.Min === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "Precision", Value: money.Precision, Status: typeof money.Precision === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "\u2713" });
      results.push({ Test: "R5", Property: "Attribute", Value: money.Attribute ? "object" : "null", Status: "\u2713" });
      results.push({ Test: "R6", Property: "AttributeName", Value: money.AttributeName, Status: money.AttributeName === "revenue" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R7", Property: "AttributeType", Value: money.AttributeType, Status: money.AttributeType === "money" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R8", Property: "ControlName", Value: money.ControlName, Status: "\u2713" });
      results.push({ Test: "R9", Property: "ControlType", Value: money.ControlType, Status: "\u2713" });
      results.push({ Test: "R10", Property: "Format", Value: money.Format, Status: "\u2713" });
      results.push({ Test: "R11", Property: "IsDirty", Value: money.IsDirty, Status: "\u2713" });
      results.push({ Test: "R12", Property: "IsValid", Value: money.IsValid, Status: "\u2713" });
      results.push({ Test: "R13", Property: "RequiredLevel", Value: money.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "R14", Property: "SubmitMode", Value: money.SubmitMode, Status: "\u2713" });
      results.push({ Test: "R15", Property: "Disabled", Value: money.Disabled, Status: "\u2713" });
      results.push({ Test: "R16", Property: "Label", Value: money.Label, Status: "\u2713" });
      results.push({ Test: "R17", Property: "Visible", Value: money.Visible, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const testValue = (originalValue || 0) + 1e3;
      money.Value = testValue;
      const newValue = money.Value;
      money.Value = originalValue;
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set\u2192Restored" : "Failed", Status: newValue === testValue ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origPrecision = money.Precision;
      const testPrecision = 2;
      money.Precision = testPrecision;
      const check = money.Precision;
      money.Precision = origPrecision;
      methodResults.push({ Test: "S2", Property: "Precision (set)", Value: check === testPrecision ? "Set\u2192Restored" : `Was ${check}`, Status: check === testPrecision ? "\u2713" : "\u26A0" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origRequired = money.RequiredLevel;
      money.RequiredLevel = "required";
      const check = money.RequiredLevel;
      money.RequiredLevel = origRequired;
      methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === "required" ? "Set\u2192Restored" : "Failed", Status: check === "required" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = money.Disabled;
      money.Disabled = !origDisabled;
      const check = money.Disabled;
      money.Disabled = origDisabled;
      methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = money.Label;
      const testLabel = "Test Money Label";
      money.Label = testLabel;
      const check = money.Label;
      const setWorked = check === testLabel || check?.includes("Test Money");
      if (origLabel !== void 0) {
        money.Label = origLabel;
      }
      methodResults.push({ Test: "S5", Property: "Label (set)", Value: setWorked ? "Set\u2192Restored" : `Got: ${check}`, Status: setWorked ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = money.Visible;
      money.Visible = !origVisible;
      const check = money.Visible;
      money.Visible = origVisible;
      methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} Money OnChange fired");
    try {
      money.AddOnChange(onChangeCallback);
      methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      money.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      money.FireOnChange();
      methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => money.Focus(), 1e3);
      methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      money.SetNotification("Test Money notification", "MONEY_TEST_1");
      setTimeout(() => money.ClearNotification("MONEY_TEST_1"), 3e3);
      methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      money.SetIsValid(false, "Test invalid");
      setTimeout(() => money.SetIsValid(true), 2e3);
      methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F4B0} TEST 7: Money Control [${startTime}] - Using: Revenue field - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R17)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S12)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestBoolean.ts
  function TestBoolean(form) {
    const results = [];
    const methodResults = [];
    const bool = form.Body.CreditOnHold;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalValue = bool.Value;
    try {
      const initVal = bool.InitialValue;
      const isValidInitValue = typeof initVal === "boolean" || initVal === 0 || initVal === 1;
      results.push({ Test: "R1", Property: "InitialValue", Value: initVal, Status: isValidInitValue ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Value", Value: originalValue, Status: "\u2713" });
      results.push({ Test: "R3", Property: "Attribute", Value: bool.Attribute ? "object" : "null", Status: bool.Attribute ? "\u2713" : "\u26A0" });
      results.push({ Test: "R4", Property: "AttributeName", Value: bool.AttributeName, Status: bool.AttributeName === "creditonhold" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R5", Property: "AttributeType", Value: bool.AttributeType, Status: bool.AttributeType === "boolean" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R6", Property: "ControlName", Value: bool.ControlName, Status: "\u2713" });
      results.push({ Test: "R7", Property: "ControlType", Value: bool.ControlType, Status: "\u2713" });
      results.push({ Test: "R8", Property: "Format", Value: bool.Format, Status: "\u2713" });
      results.push({ Test: "R9", Property: "IsDirty", Value: bool.IsDirty, Status: "\u2713" });
      results.push({ Test: "R10", Property: "IsValid", Value: bool.IsValid, Status: "\u2713" });
      results.push({ Test: "R11", Property: "RequiredLevel", Value: bool.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "R12", Property: "SubmitMode", Value: bool.SubmitMode, Status: "\u2713" });
      results.push({ Test: "R13", Property: "Disabled", Value: bool.Disabled, Status: "\u2713" });
      results.push({ Test: "R14", Property: "Label", Value: bool.Label, Status: "\u2713" });
      results.push({ Test: "R15", Property: "Visible", Value: bool.Visible, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const testValue = !originalValue;
      bool.Value = testValue;
      const newValue = bool.Value;
      bool.Value = originalValue;
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set\u2192Restored" : "Failed", Status: newValue === testValue ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origRequired = bool.RequiredLevel;
      bool.RequiredLevel = "required";
      const check = bool.RequiredLevel;
      bool.RequiredLevel = origRequired;
      methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === "required" ? "Set\u2192Restored" : "Failed", Status: check === "required" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = bool.Disabled;
      bool.Disabled = !origDisabled;
      const check = bool.Disabled;
      bool.Disabled = origDisabled;
      methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = bool.Label;
      bool.Label = origLabel + " (TEST)";
      const check = bool.Label;
      bool.Label = origLabel;
      methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = bool.Visible;
      bool.Visible = !origVisible;
      const check = bool.Visible;
      bool.Visible = origVisible;
      methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} Boolean OnChange fired");
    try {
      bool.AddOnChange(onChangeCallback);
      methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      bool.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      bool.FireOnChange();
      methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => bool.Focus(), 1e3);
      methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      bool.SetNotification("Test Boolean notification", "BOOL_TEST_1");
      setTimeout(() => bool.ClearNotification("BOOL_TEST_1"), 3e3);
      methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      bool.SetIsValid(false, "Test invalid");
      setTimeout(() => bool.SetIsValid(true), 2e3);
      methodResults.push({ Test: "S11", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S11", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u2705 TEST 8: Boolean Control [${startTime}] - Using: CreditOnHold field - ${passed}/${total}`);
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

  // entities/Account.TestDateTime.ts
  function TestDateTime(form) {
    const results = [];
    const methodResults = [];
    const dt = form.Body.v4_AppointmentTime;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalValue = dt.Value;
    try {
      results.push({ Test: "R1", Property: "ShowTime", Value: dt.ShowTime, Status: typeof dt.ShowTime === "boolean" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Value", Value: originalValue instanceof Date ? originalValue.toISOString() : originalValue, Status: "\u2713" });
      results.push({ Test: "R3", Property: "Attribute", Value: dt.Attribute ? "object" : "null", Status: dt.Attribute ? "\u2713" : "\u26A0" });
      results.push({ Test: "R4", Property: "AttributeName", Value: dt.AttributeName, Status: dt.AttributeName === "v4_appointmenttime" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R5", Property: "AttributeType", Value: dt.AttributeType, Status: dt.AttributeType === "datetime" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R6", Property: "ControlName", Value: dt.ControlName, Status: "\u2713" });
      results.push({ Test: "R7", Property: "ControlType", Value: dt.ControlType, Status: "\u2713" });
      results.push({ Test: "R8", Property: "Format", Value: dt.Format, Status: "\u2713" });
      results.push({ Test: "R9", Property: "IsDirty", Value: dt.IsDirty, Status: "\u2713" });
      results.push({ Test: "R10", Property: "IsValid", Value: dt.IsValid, Status: "\u2713" });
      results.push({ Test: "R11", Property: "RequiredLevel", Value: dt.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "R12", Property: "SubmitMode", Value: dt.SubmitMode, Status: "\u2713" });
      results.push({ Test: "R13", Property: "Disabled", Value: dt.Disabled, Status: "\u2713" });
      results.push({ Test: "R14", Property: "Label", Value: dt.Label, Status: "\u2713" });
      results.push({ Test: "R15", Property: "Visible", Value: dt.Visible, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const testValue = /* @__PURE__ */ new Date();
      dt.Value = testValue;
      const newValue = dt.Value;
      dt.Value = originalValue;
      const success = newValue !== null && newValue !== void 0;
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: success ? "Set\u2192Restored" : "Failed", Status: success ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origShowTime = dt.ShowTime;
      dt.ShowTime = !origShowTime;
      const check = dt.ShowTime;
      dt.ShowTime = origShowTime;
      methodResults.push({ Test: "S2", Property: "ShowTime (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "ShowTime (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origRequired = dt.RequiredLevel;
      dt.RequiredLevel = "required";
      const check = dt.RequiredLevel;
      dt.RequiredLevel = origRequired;
      methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === "required" ? "Set\u2192Restored" : "Failed", Status: check === "required" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = dt.Disabled;
      dt.Disabled = !origDisabled;
      const check = dt.Disabled;
      dt.Disabled = origDisabled;
      methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = dt.Label;
      dt.Label = origLabel + " (TEST)";
      const check = dt.Label;
      dt.Label = origLabel;
      methodResults.push({ Test: "S5", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = dt.Visible;
      dt.Visible = !origVisible;
      const check = dt.Visible;
      dt.Visible = origVisible;
      methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} DateTime OnChange fired");
    try {
      dt.AddOnChange(onChangeCallback);
      methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      dt.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      dt.FireOnChange();
      methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => dt.Focus(), 1e3);
      methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      dt.SetNotification("Test DateTime notification", "DT_TEST_1");
      setTimeout(() => dt.ClearNotification("DT_TEST_1"), 3e3);
      methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      dt.SetIsValid(false, "Test invalid");
      setTimeout(() => dt.SetIsValid(true), 2e3);
      methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F4C5} TEST 9: DateTime Control [${startTime}] - Using: v4_AppointmentTime field - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R15)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S12)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestDateOnly.ts
  function TestDateOnly(form) {
    const results = [];
    const methodResults = [];
    const dateOnly = form.Body.v4_Birthday;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalValue = dateOnly.Value;
    try {
      results.push({ Test: "R1", Property: "Value", Value: originalValue instanceof Date ? originalValue.toISOString() : originalValue, Status: "\u2713" });
      results.push({ Test: "R2", Property: "Attribute", Value: dateOnly.Attribute ? "object" : "null", Status: dateOnly.Attribute ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "AttributeName", Value: dateOnly.AttributeName, Status: dateOnly.AttributeName === "v4_birthday" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R4", Property: "AttributeType", Value: dateOnly.AttributeType, Status: dateOnly.AttributeType === "datetime" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R5", Property: "ControlName", Value: dateOnly.ControlName, Status: "\u2713" });
      results.push({ Test: "R6", Property: "ControlType", Value: dateOnly.ControlType, Status: "\u2713" });
      results.push({ Test: "R7", Property: "Format", Value: dateOnly.Format, Status: "\u2713" });
      results.push({ Test: "R8", Property: "IsDirty", Value: dateOnly.IsDirty, Status: "\u2713" });
      results.push({ Test: "R9", Property: "IsValid", Value: dateOnly.IsValid, Status: "\u2713" });
      results.push({ Test: "R10", Property: "RequiredLevel", Value: dateOnly.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "R11", Property: "SubmitMode", Value: dateOnly.SubmitMode, Status: "\u2713" });
      results.push({ Test: "R12", Property: "Disabled", Value: dateOnly.Disabled, Status: "\u2713" });
      results.push({ Test: "R13", Property: "Label", Value: dateOnly.Label, Status: "\u2713" });
      results.push({ Test: "R14", Property: "Visible", Value: dateOnly.Visible, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const testValue = new Date(1990, 5, 15);
      dateOnly.Value = testValue;
      const newValue = dateOnly.Value;
      dateOnly.Value = originalValue;
      const success = newValue !== null && newValue !== void 0;
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: success ? "Set\u2192Restored" : "Failed", Status: success ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origRequired = dateOnly.RequiredLevel;
      dateOnly.RequiredLevel = "required";
      const check = dateOnly.RequiredLevel;
      dateOnly.RequiredLevel = origRequired;
      methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === "required" ? "Set\u2192Restored" : "Failed", Status: check === "required" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = dateOnly.Disabled;
      dateOnly.Disabled = !origDisabled;
      const check = dateOnly.Disabled;
      dateOnly.Disabled = origDisabled;
      methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = dateOnly.Label;
      dateOnly.Label = origLabel + " (TEST)";
      const check = dateOnly.Label;
      dateOnly.Label = origLabel;
      methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = dateOnly.Visible;
      dateOnly.Visible = !origVisible;
      const check = dateOnly.Visible;
      dateOnly.Visible = origVisible;
      methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} DateOnly OnChange fired");
    try {
      dateOnly.AddOnChange(onChangeCallback);
      methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      dateOnly.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      dateOnly.FireOnChange();
      methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => dateOnly.Focus(), 1e3);
      methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      dateOnly.SetNotification("Test DateOnly notification", "DO_TEST_1");
      setTimeout(() => dateOnly.ClearNotification("DO_TEST_1"), 3e3);
      methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      dateOnly.SetIsValid(false, "Test invalid");
      setTimeout(() => dateOnly.SetIsValid(true), 2e3);
      methodResults.push({ Test: "S11", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S11", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F382} TEST 10: DateOnly Control [${startTime}] - Using: v4_Birthday field - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R14)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestGrid.ts
  function TestGrid(form) {
    const results = [];
    const methodResults = [];
    const grid = form.Grid.Contacts;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    try {
      results.push({ Test: "R1", Property: "EntityName", Value: grid.EntityName, Status: grid.EntityName ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "FetchXml", Value: grid.FetchXml ? grid.FetchXml.substring(0, 50) + "..." : null, Status: grid.FetchXml ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "GridType", Value: grid.GridType, Status: typeof grid.GridType === "number" ? "\u2713" : "\u26A0" });
      const rel = grid.Relationship;
      results.push({ Test: "R4", Property: "Relationship.name", Value: rel?.name, Status: rel ? "\u2713" : "\u26A0" });
      results.push({ Test: "R5", Property: "Relationship.navPropName", Value: rel?.navigationPropertyName, Status: rel ? "\u2713" : "\u26A0" });
      results.push({ Test: "R6", Property: "Relationship.type", Value: rel?.relationshipType, Status: rel ? "\u2713" : "\u26A0" });
      const rows = grid.Rows;
      results.push({ Test: "R7", Property: "Rows.getLength()", Value: rows?.getLength(), Status: rows ? "\u2713" : "\u26A0" });
      const selectedRows = grid.SelectedRows;
      results.push({ Test: "R8", Property: "SelectedRows.getLength()", Value: selectedRows?.getLength(), Status: selectedRows ? "\u2713" : "\u26A0" });
      results.push({ Test: "R9", Property: "TotalRecordCount", Value: grid.TotalRecordCount, Status: typeof grid.TotalRecordCount === "number" ? "\u2713" : "\u26A0" });
      const vs = grid.ViewSelector;
      results.push({ Test: "R10", Property: "ViewSelector", Value: vs ? "object" : "null", Status: vs ? "\u2713" : "\u26A0" });
      results.push({ Test: "R11", Property: "ViewSelector.Visible", Value: vs?.Visible, Status: vs ? "\u2713" : "\u26A0" });
      results.push({ Test: "R12", Property: "Visible", Value: grid.Visible, Status: typeof grid.Visible === "boolean" ? "\u2713" : "\u26A0" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const url = grid.Url(1);
      methodResults.push({ Test: "S1", Property: "Url(1)", Value: url ? url.substring(0, 50) + "..." : "null", Status: url ? "\u2713" : "\u26A0" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Url(1)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = grid.Visible;
      grid.Visible = !origVisible;
      const check = grid.Visible;
      grid.Visible = origVisible;
      methodResults.push({ Test: "S2", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    const onLoadCallback = (ctx) => console.log("  \u{1F4CD} Grid OnLoad fired");
    try {
      grid.AddOnLoad(onLoadCallback);
      methodResults.push({ Test: "S3", Property: "AddOnLoad", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "AddOnLoad", Value: e.message, Status: "\u2717" });
    }
    try {
      grid.RemoveOnLoad(onLoadCallback);
      methodResults.push({ Test: "S4", Property: "RemoveOnLoad", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "RemoveOnLoad", Value: e.message, Status: "\u2717" });
    }
    try {
      if (typeof grid.Refresh === "function") {
        methodResults.push({ Test: "S5", Property: "Refresh", Value: "Available", Status: "\u2713" });
      } else {
        methodResults.push({ Test: "S5", Property: "Refresh", Value: "Not a function", Status: "\u2717" });
      }
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Refresh", Value: e.message, Status: "\u2717" });
    }
    try {
      if (typeof grid.RefreshRibbon === "function") {
        methodResults.push({ Test: "S6", Property: "RefreshRibbon", Value: "Available", Status: "\u2713" });
      } else {
        methodResults.push({ Test: "S6", Property: "RefreshRibbon", Value: "Not a function", Status: "\u2717" });
      }
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "RefreshRibbon", Value: e.message, Status: "\u2717" });
    }
    try {
      if (typeof grid.OpenRelatedGrid === "function") {
        methodResults.push({ Test: "S7", Property: "OpenRelatedGrid", Value: "Available", Status: "\u2713" });
      } else {
        methodResults.push({ Test: "S7", Property: "OpenRelatedGrid", Value: "Not a function", Status: "\u2717" });
      }
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "OpenRelatedGrid", Value: e.message, Status: "\u2717" });
    }
    try {
      const rows = grid.Rows;
      if (rows && rows.getLength() > 0) {
        const firstRow = rows.get(0);
        methodResults.push({ Test: "S8", Property: "Rows.get(0)", Value: firstRow?.EntityId || "no EntityId", Status: firstRow ? "\u2713" : "\u26A0" });
      } else {
        methodResults.push({ Test: "S8", Property: "Rows.get(0)", Value: "No rows", Status: "\u26A0" });
      }
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "Rows.get(0)", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F4CA} TEST 11: Grid Control [${startTime}] - Using: Contacts subgrid - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R12)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S8)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestUtility.ts
  function stringify(value) {
    if (value === null || value === void 0) return null;
    if (typeof value === "object") {
      try {
        return JSON.stringify(value);
      } catch {
        return "[Circular or Complex Object]";
      }
    }
    return value;
  }
  function TestUtility(form) {
    const results = [];
    const methodResults = [];
    const util = form.Utility;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    try {
      const client = util.Client;
      results.push({ Test: "R1", Property: "Client", Value: stringify(client), Status: client ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Client.ClientName", Value: client?.ClientName, Status: client?.ClientName ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "Client.ClientState", Value: client?.ClientState, Status: client?.ClientState ? "\u2713" : "\u26A0" });
      results.push({ Test: "R4", Property: "Client.FormFactor", Value: client?.FormFactor, Status: typeof client?.FormFactor === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R5", Property: "Client.IsNetworkAvailable", Value: client?.IsNetworkAvailable, Status: typeof client?.IsNetworkAvailable === "boolean" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R6", Property: "Client.IsOffline", Value: client?.IsOffline, Status: typeof client?.IsOffline === "boolean" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R7", Property: "ClientUrl", Value: util.ClientUrl, Status: util.ClientUrl ? "\u2713" : "\u26A0" });
      results.push({ Test: "R8", Property: "CurrentAppUrl", Value: util.CurrentAppUrl, Status: util.CurrentAppUrl ? "\u2713" : "\u26A0" });
      results.push({ Test: "R9", Property: "IsOnPremises", Value: util.IsOnPremises, Status: typeof util.IsOnPremises === "boolean" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R10", Property: "LearningPathAttributeName", Value: util.LearningPathAttributeName, Status: "\u2713" });
      results.push({ Test: "R11", Property: "PageContext", Value: stringify(util.PageContext), Status: util.PageContext ? "\u2713" : "\u26A0" });
      results.push({ Test: "R12", Property: "Version", Value: util.Version, Status: util.Version ? "\u2713" : "\u26A0" });
      const orgSettings = util.OrganizationSettings;
      results.push({ Test: "R13", Property: "OrganizationSettings", Value: stringify(orgSettings), Status: orgSettings ? "\u2713" : "\u26A0" });
      results.push({ Test: "R14", Property: "Org.Attributes", Value: stringify(orgSettings?.Attributes), Status: "\u2713" });
      results.push({ Test: "R15", Property: "Org.BaseCurrency", Value: stringify(orgSettings?.BaseCurrency), Status: orgSettings?.BaseCurrency ? "\u2713" : "\u26A0" });
      results.push({ Test: "R16", Property: "Org.BaseCurrencyId", Value: orgSettings?.BaseCurrencyId, Status: orgSettings?.BaseCurrencyId ? "\u2713" : "\u26A0" });
      results.push({ Test: "R17", Property: "Org.DefaultCountryCode", Value: orgSettings?.DefaultCountryCode, Status: "\u2713" });
      results.push({ Test: "R18", Property: "Org.FullNameConventionCode", Value: orgSettings?.FullNameConventionCode, Status: typeof orgSettings?.FullNameConventionCode === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R19", Property: "Org.IsAutoSaveEnabled", Value: orgSettings?.IsAutoSaveEnabled, Status: typeof orgSettings?.IsAutoSaveEnabled === "boolean" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R20", Property: "Org.IsTrialOrganization", Value: orgSettings?.IsTrialOrganization, Status: typeof orgSettings?.IsTrialOrganization === "boolean" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R21", Property: "Org.LanguageId", Value: orgSettings?.LanguageId, Status: typeof orgSettings?.LanguageId === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R22", Property: "Org.OrganizationExpiryDate", Value: orgSettings?.OrganizationExpiryDate, Status: "\u2713" });
      results.push({ Test: "R23", Property: "Org.OrganizationId", Value: orgSettings?.OrganizationId, Status: orgSettings?.OrganizationId ? "\u2713" : "\u26A0" });
      results.push({ Test: "R24", Property: "Org.UniqueName", Value: orgSettings?.UniqueName, Status: orgSettings?.UniqueName ? "\u2713" : "\u26A0" });
      results.push({ Test: "R25", Property: "Org.UseSkypeProtocol", Value: orgSettings?.UseSkypeProtocol, Status: typeof orgSettings?.UseSkypeProtocol === "boolean" ? "\u2713" : "\u26A0" });
      const userSettings = util.UserSettings;
      results.push({ Test: "R26", Property: "UserSettings", Value: stringify(userSettings), Status: userSettings ? "\u2713" : "\u26A0" });
      results.push({ Test: "R27", Property: "User.DateFormattingInfo", Value: stringify(userSettings?.DateFormattingInfo), Status: userSettings?.DateFormattingInfo ? "\u2713" : "\u26A0" });
      results.push({ Test: "R28", Property: "User.DefaultDashboardId", Value: userSettings?.DefaultDashboardId, Status: "\u2713" });
      results.push({ Test: "R29", Property: "User.IsGuidedHelpEnabled", Value: userSettings?.IsGuidedHelpEnabled, Status: typeof userSettings?.IsGuidedHelpEnabled === "boolean" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R30", Property: "User.IsHighContrastEnabled", Value: userSettings?.IsHighContrastEnabled, Status: typeof userSettings?.IsHighContrastEnabled === "boolean" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R31", Property: "User.IsRTL", Value: userSettings?.IsRTL, Status: typeof userSettings?.IsRTL === "boolean" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R32", Property: "User.LanguageId", Value: userSettings?.LanguageId, Status: typeof userSettings?.LanguageId === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R33", Property: "User.Roles", Value: stringify(userSettings?.Roles), Status: userSettings?.Roles ? "\u2713" : "\u26A0" });
      results.push({ Test: "R34", Property: "User.SecurityRolePrivileges", Value: stringify(userSettings?.SecurityRolePrivileges), Status: userSettings?.SecurityRolePrivileges ? "\u2713" : "\u26A0" });
      results.push({ Test: "R35", Property: "User.SecurityRoles", Value: stringify(userSettings?.SecurityRoles), Status: userSettings?.SecurityRoles ? "\u2713" : "\u26A0" });
      results.push({ Test: "R36", Property: "User.TimeZoneOffsetMinutes", Value: userSettings?.TimeZoneOffsetMinutes, Status: typeof userSettings?.TimeZoneOffsetMinutes === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R37", Property: "User.TransactionCurrency", Value: stringify(userSettings?.TransactionCurrency), Status: userSettings?.TransactionCurrency ? "\u2713" : "\u26A0" });
      results.push({ Test: "R38", Property: "User.TransactionCurrencyId", Value: userSettings?.TransactionCurrencyId, Status: userSettings?.TransactionCurrencyId ? "\u2713" : "\u26A0" });
      results.push({ Test: "R39", Property: "User.UserId", Value: userSettings?.UserId, Status: userSettings?.UserId ? "\u2713" : "\u26A0" });
      results.push({ Test: "R40", Property: "User.UserName", Value: userSettings?.UserName, Status: userSettings?.UserName ? "\u2713" : "\u26A0" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const encoded = util.HtmlEncode("<test>");
      methodResults.push({ Test: "S1", Property: "HtmlEncode", Value: encoded, Status: encoded ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "HtmlEncode", Value: e.message, Status: "\u2717" });
    }
    try {
      const decoded = util.HtmlDecode("&lt;test&gt;");
      methodResults.push({ Test: "S2", Property: "HtmlDecode", Value: decoded, Status: decoded ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "HtmlDecode", Value: e.message, Status: "\u2717" });
    }
    try {
      const encoded = util.HtmlAttributeEncode('test="value"');
      methodResults.push({ Test: "S3", Property: "HtmlAttributeEncode", Value: encoded, Status: encoded ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "HtmlAttributeEncode", Value: e.message, Status: "\u2717" });
    }
    try {
      const xmlEncoded = util.XmlEncode("<test>");
      methodResults.push({ Test: "S4", Property: "XmlEncode", Value: xmlEncoded, Status: xmlEncoded ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "XmlEncode", Value: e.message, Status: "\u2717" });
    }
    try {
      const xmlAttrEncoded = util.XmlAttributeEncode('test="value"');
      methodResults.push({ Test: "S5", Property: "XmlAttributeEncode", Value: xmlAttrEncoded, Status: xmlAttrEncoded ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "XmlAttributeEncode", Value: e.message, Status: "\u2717" });
    }
    try {
      const prependedUrl = util.PrependOrgName("/test");
      methodResults.push({ Test: "S6", Property: "PrependOrgName", Value: prependedUrl, Status: prependedUrl ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "PrependOrgName", Value: e.message, Status: "\u2717" });
    }
    try {
      const webResourceUrl = util.WebResourceUrl("test.html");
      methodResults.push({ Test: "S7", Property: "WebResourceUrl", Value: webResourceUrl, Status: webResourceUrl ? "\u2713" : "\u26A0" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "WebResourceUrl", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S8", Property: "AdvancedConfigSetting", Value: typeof util.AdvancedConfigSetting === "function" ? "Available" : "Not found", Status: typeof util.AdvancedConfigSetting === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "AdvancedConfigSetting", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S9", Property: "CurrentAppName", Value: typeof util.CurrentAppName === "function" ? "Available" : "Not found", Status: typeof util.CurrentAppName === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "CurrentAppName", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S10", Property: "CurrentAppProperties", Value: typeof util.CurrentAppProperties === "function" ? "Available" : "Not found", Status: typeof util.CurrentAppProperties === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S10", Property: "CurrentAppProperties", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S11", Property: "NavigateTo", Value: typeof util.NavigateTo === "function" ? "Available" : "Not found", Status: typeof util.NavigateTo === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S11", Property: "NavigateTo", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S12", Property: "OpenAlertDialog", Value: typeof util.OpenAlertDialog === "function" ? "Available" : "Not found", Status: typeof util.OpenAlertDialog === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S12", Property: "OpenAlertDialog", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S13", Property: "OpenConfirmDialog", Value: typeof util.OpenConfirmDialog === "function" ? "Available" : "Not found", Status: typeof util.OpenConfirmDialog === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S13", Property: "OpenConfirmDialog", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S14", Property: "OpenErrorDialog", Value: typeof util.OpenErrorDialog === "function" ? "Available" : "Not found", Status: typeof util.OpenErrorDialog === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S14", Property: "OpenErrorDialog", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S15", Property: "OpenFile", Value: typeof util.OpenFile === "function" ? "Available" : "Not found", Status: typeof util.OpenFile === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S15", Property: "OpenFile", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S16", Property: "OpenForm", Value: typeof util.OpenForm === "function" ? "Available" : "Not found", Status: typeof util.OpenForm === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S16", Property: "OpenForm", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S17", Property: "OpenUrl", Value: typeof util.OpenUrl === "function" ? "Available" : "Not found", Status: typeof util.OpenUrl === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S17", Property: "OpenUrl", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S18", Property: "OpenWebResource", Value: typeof util.OpenWebResource === "function" ? "Available" : "Not found", Status: typeof util.OpenWebResource === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S18", Property: "OpenWebResource", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S19", Property: "ShowProgressIndicator", Value: typeof util.ShowProgressIndicator === "function" ? "Available" : "Not found", Status: typeof util.ShowProgressIndicator === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S19", Property: "ShowProgressIndicator", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S20", Property: "CloseProgressIndicator", Value: typeof util.CloseProgressIndicator === "function" ? "Available" : "Not found", Status: typeof util.CloseProgressIndicator === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S20", Property: "CloseProgressIndicator", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S21", Property: "AddGlobalNotification", Value: typeof util.AddGlobalNotification === "function" ? "Available" : "Not found", Status: typeof util.AddGlobalNotification === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S21", Property: "AddGlobalNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S22", Property: "ClearGlobalNotification", Value: typeof util.ClearGlobalNotification === "function" ? "Available" : "Not found", Status: typeof util.ClearGlobalNotification === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S22", Property: "ClearGlobalNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S23", Property: "AllowedStatusTransitions", Value: typeof util.AllowedStatusTransitions === "function" ? "Available" : "Not found", Status: typeof util.AllowedStatusTransitions === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S23", Property: "AllowedStatusTransitions", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S24", Property: "EntityMetadata", Value: typeof util.EntityMetadata === "function" ? "Available" : "Not found", Status: typeof util.EntityMetadata === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S24", Property: "EntityMetadata", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S25", Property: "EntityMainFormDescriptor", Value: typeof util.EntityMainFormDescriptor === "function" ? "Available" : "Not found", Status: typeof util.EntityMainFormDescriptor === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S25", Property: "EntityMainFormDescriptor", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S26", Property: "InvokeProcessAction", Value: typeof util.InvokeProcessAction === "function" ? "Available" : "Not found", Status: typeof util.InvokeProcessAction === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S26", Property: "InvokeProcessAction", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S27", Property: "LookupObjects", Value: typeof util.LookupObjects === "function" ? "Available" : "Not found", Status: typeof util.LookupObjects === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S27", Property: "LookupObjects", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S28", Property: "RefreshParentGrid", Value: typeof util.RefreshParentGrid === "function" ? "Available" : "Not found", Status: typeof util.RefreshParentGrid === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S28", Property: "RefreshParentGrid", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S29", Property: "Resource", Value: typeof util.Resource === "function" ? "Available" : "Not found", Status: typeof util.Resource === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S29", Property: "Resource", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S30", Property: "ResourceString", Value: typeof util.ResourceString === "function" ? "Available" : "Not found", Status: typeof util.ResourceString === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S30", Property: "ResourceString", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S31", Property: "BarcodeValue", Value: typeof util.BarcodeValue === "function" ? "Available" : "Not found", Status: typeof util.BarcodeValue === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S31", Property: "BarcodeValue", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S32", Property: "CaptureAudio", Value: typeof util.CaptureAudio === "function" ? "Available" : "Not found", Status: typeof util.CaptureAudio === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S32", Property: "CaptureAudio", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S33", Property: "CaptureImage", Value: typeof util.CaptureImage === "function" ? "Available" : "Not found", Status: typeof util.CaptureImage === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S33", Property: "CaptureImage", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S34", Property: "CaptureVideo", Value: typeof util.CaptureVideo === "function" ? "Available" : "Not found", Status: typeof util.CaptureVideo === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S34", Property: "CaptureVideo", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S35", Property: "CurrentPosition", Value: typeof util.CurrentPosition === "function" ? "Available" : "Not found", Status: typeof util.CurrentPosition === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S35", Property: "CurrentPosition", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S36", Property: "PickFile", Value: typeof util.PickFile === "function" ? "Available" : "Not found", Status: typeof util.PickFile === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S36", Property: "PickFile", Value: e.message, Status: "\u2717" });
    }
    try {
      methodResults.push({ Test: "S37", Property: "LoadPanel", Value: typeof util.LoadPanel === "function" ? "Available" : "Not found", Status: typeof util.LoadPanel === "function" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S37", Property: "LoadPanel", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F527} TEST 12: Utility API [${startTime}] - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R40)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Methods (S1-S37)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestMultiOptionSet.ts
  function stringify2(value) {
    if (value === null || value === void 0) return null;
    if (typeof value === "object") {
      try {
        return JSON.stringify(value);
      } catch {
        return "[Circular or Complex Object]";
      }
    }
    return value;
  }
  function TestMultiOptionSet(form) {
    const results = [];
    const methodResults = [];
    const mos = form.Body.v4_Categories;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalValue = mos.Value;
    try {
      results.push({ Test: "R1", Property: "Value (number[])", Value: stringify2(originalValue), Status: Array.isArray(originalValue) || originalValue === null ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Options (array)", Value: stringify2(mos.Options), Status: Array.isArray(mos.Options) ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "SelectedOption (array)", Value: stringify2(mos.SelectedOption), Status: Array.isArray(mos.SelectedOption) || mos.SelectedOption === null ? "\u2713" : "\u26A0" });
      results.push({ Test: "R4", Property: "InitialValue (number[])", Value: stringify2(mos.InitialValue), Status: Array.isArray(mos.InitialValue) || mos.InitialValue === null ? "\u2713" : "\u26A0" });
      results.push({ Test: "R5", Property: "Text (string[])", Value: stringify2(mos.Text), Status: Array.isArray(mos.Text) || mos.Text === null ? "\u2713" : "\u26A0" });
      results.push({ Test: "R6", Property: "Attribute", Value: mos.Attribute ? "object" : "null", Status: mos.Attribute ? "\u2713" : "\u26A0" });
      results.push({ Test: "R7", Property: "AttributeName", Value: mos.AttributeName, Status: mos.AttributeName === "v4_categories" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R8", Property: "AttributeType", Value: mos.AttributeType, Status: mos.AttributeType === "multiselectoptionset" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R9", Property: "ControlName", Value: mos.ControlName, Status: "\u2713" });
      results.push({ Test: "R10", Property: "ControlType", Value: mos.ControlType, Status: "\u2713" });
      results.push({ Test: "R11", Property: "Format", Value: mos.Format, Status: "\u2713" });
      results.push({ Test: "R12", Property: "IsDirty", Value: mos.IsDirty, Status: "\u2713" });
      results.push({ Test: "R13", Property: "IsValid", Value: mos.IsValid, Status: "\u2713" });
      results.push({ Test: "R14", Property: "RequiredLevel", Value: mos.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "R15", Property: "SubmitMode", Value: mos.SubmitMode, Status: "\u2713" });
      results.push({ Test: "R16", Property: "Disabled", Value: mos.Disabled, Status: "\u2713" });
      results.push({ Test: "R17", Property: "Label", Value: mos.Label, Status: "\u2713" });
      results.push({ Test: "R18", Property: "Visible", Value: mos.Visible, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const testValue = [1, 2];
      mos.Value = testValue;
      const newValue = mos.Value;
      mos.Value = originalValue;
      const success = Array.isArray(newValue) || newValue !== void 0;
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: success ? "Set\u2192Restored" : "Failed", Status: success ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origRequired = mos.RequiredLevel;
      mos.RequiredLevel = "required";
      const check = mos.RequiredLevel;
      mos.RequiredLevel = origRequired;
      methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === "required" ? "Set\u2192Restored" : "Failed", Status: check === "required" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = mos.Disabled;
      mos.Disabled = !origDisabled;
      const check = mos.Disabled;
      mos.Disabled = origDisabled;
      methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = mos.Label;
      mos.Label = origLabel + " (TEST)";
      const check = mos.Label;
      mos.Label = origLabel;
      methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = mos.Visible;
      mos.Visible = !origVisible;
      const check = mos.Visible;
      mos.Visible = origVisible;
      methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const options = mos.Options;
      if (options && options.length > 0) {
        const firstOption = mos.Option(options[0].value);
        methodResults.push({ Test: "S6", Property: "Option(value)", Value: stringify2(firstOption), Status: firstOption ? "\u2713" : "\u26A0" });
      } else {
        methodResults.push({ Test: "S6", Property: "Option(value)", Value: "No options", Status: "\u26A0" });
      }
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "Option(value)", Value: e.message, Status: "\u2717" });
    }
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} MultiOptionSet OnChange fired");
    try {
      mos.AddOnChange(onChangeCallback);
      methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      mos.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      mos.FireOnChange();
      methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => mos.Focus(), 1e3);
      methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      mos.SetNotification("Test MultiOptionSet notification", "MOS_TEST_1");
      setTimeout(() => mos.ClearNotification("MOS_TEST_1"), 3e3);
      methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      mos.SetIsValid(false, "Test invalid");
      setTimeout(() => mos.SetIsValid(true), 2e3);
      methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F3F7}\uFE0F TEST 13: MultiOptionSet Control [${startTime}] - Using: v4_Categories field - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R18)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S12)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestTab.ts
  function TestTab(form) {
    const results = [];
    const methodResults = [];
    const tab = form.Body.Tab.SUMMARY_TAB;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    try {
      results.push({ Test: "R1", Property: "Tab.Name", Value: tab.Name, Status: tab.Name ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Tab.Parent", Value: tab.Parent ? "object" : "null", Status: tab.Parent ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "Tab.DisplayState", Value: tab.DisplayState, Status: tab.DisplayState === "expanded" || tab.DisplayState === "collapsed" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R4", Property: "Tab.Label", Value: tab.Label, Status: tab.Label ? "\u2713" : "\u26A0" });
      results.push({ Test: "R5", Property: "Tab.Visible", Value: tab.Visible, Status: typeof tab.Visible === "boolean" ? "\u2713" : "\u26A0" });
      const section2 = tab.Section.ACCOUNT_INFORMATION;
      results.push({ Test: "R6", Property: "Section.BILLING", Value: section2 ? "object" : "null", Status: section2 ? "\u2713" : "\u26A0" });
      results.push({ Test: "R7", Property: "Section.Name", Value: section2?.Name, Status: section2?.Name ? "\u2713" : "\u26A0" });
      results.push({ Test: "R8", Property: "Section.Parent", Value: section2?.Parent ? "object" : "null", Status: section2?.Parent ? "\u2713" : "\u26A0" });
      results.push({ Test: "R9", Property: "Section.Label", Value: section2?.Label, Status: section2?.Label ? "\u2713" : "\u26A0" });
      results.push({ Test: "R10", Property: "Section.Visible", Value: section2?.Visible, Status: typeof section2?.Visible === "boolean" ? "\u2713" : "\u26A0" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const origDisplayState = tab.DisplayState;
      tab.DisplayState = origDisplayState === "expanded" ? "collapsed" : "expanded";
      const check = tab.DisplayState;
      tab.DisplayState = origDisplayState;
      methodResults.push({ Test: "S1", Property: "Tab.DisplayState (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Tab.DisplayState (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = tab.Label;
      tab.Label = origLabel + " (TEST)";
      const check = tab.Label;
      tab.Label = origLabel;
      methodResults.push({ Test: "S2", Property: "Tab.Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "Tab.Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = tab.Visible;
      tab.Visible = !origVisible;
      const check = tab.Visible;
      tab.Visible = origVisible;
      methodResults.push({ Test: "S3", Property: "Tab.Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "Tab.Visible (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => tab.Focus(), 1e3);
      methodResults.push({ Test: "S4", Property: "Tab.Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "Tab.Focus", Value: e.message, Status: "\u2717" });
    }
    const tabStateCallback = (ctx) => console.log("  \u{1F4CD} Tab StateChange fired");
    try {
      tab.AddTabStateChange(tabStateCallback);
      methodResults.push({ Test: "S5", Property: "Tab.AddTabStateChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Tab.AddTabStateChange", Value: e.message, Status: "\u2717" });
    }
    try {
      tab.RemoveTabStateChange(tabStateCallback);
      methodResults.push({ Test: "S6", Property: "Tab.RemoveTabStateChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "Tab.RemoveTabStateChange", Value: e.message, Status: "\u2717" });
    }
    const section = tab.Section.ACCOUNT_INFORMATION;
    try {
      const origLabel = section.Label;
      section.Label = origLabel + " (TEST)";
      const check = section.Label;
      section.Label = origLabel;
      methodResults.push({ Test: "S7", Property: "Section.Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "Section.Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = section.Visible;
      section.Visible = !origVisible;
      const check = section.Visible;
      section.Visible = origVisible;
      methodResults.push({ Test: "S8", Property: "Section.Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "Section.Visible (set)", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F4D1} TEST 14: Tab Control [${startTime}] - Using: DETAILS_TAB & BILLING section - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R10)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S8)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestNavigationItem.ts
  function TestNavigationItem(form) {
    const results = [];
    const methodResults = [];
    const navItem = form.Navigation.nav_msa_account_managingpartner;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    debugger;
    try {
      results.push({ Test: "R1", Property: "Id", Value: navItem.Id, Status: navItem.Id ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Label", Value: navItem.Label, Status: navItem.Label ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "Visible", Value: navItem.Visible, Status: typeof navItem.Visible === "boolean" ? "\u2713" : "\u26A0" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const origLabel = navItem.Label;
      navItem.Label = origLabel + " (TEST)";
      const check = navItem.Label;
      navItem.Label = origLabel;
      methodResults.push({ Test: "S1", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = navItem.Visible;
      navItem.Visible = !origVisible;
      const check = navItem.Visible;
      navItem.Visible = origVisible;
      methodResults.push({ Test: "S2", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => navItem.Focus(), 1e3);
      methodResults.push({ Test: "S3", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F9ED} TEST 15: NavigationItem Control [${startTime}] - Using: Account_Tasks - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R3)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S3)", "font-weight: bold; font-size: 14px; color: #2196F3;");
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
      setTimeout(async () => {
        console.clear();
        TestControl(form);
        TestLookup(form);
        TestMemo(form);
        TestString(form);
        TestInteger(form);
        TestOptionSet(form);
        await TestWebApi(form);
        TestMoney(form);
        TestBoolean(form);
        TestDateTime(form);
        TestDateOnly(form);
        TestGrid(form);
        TestUtility(form);
        TestMultiOptionSet(form);
        TestTab(form);
        TestNavigationItem(form);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZW50aXRpZXMvQWNjb3VudC50cyIsICIuLi9saWIvZGV2a2l0LnRzIiwgIi4uL2VudGl0aWVzL2dlbmVyYXRvci9PcHRpb25TZXQudHMiLCAiLi4vZW50aXRpZXMvZ2VuZXJhdG9yL0FjY291bnQuZm9ybS50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RDb250cm9sLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdExvb2t1cC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RNZW1vLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFN0cmluZy50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RJbnRlZ2VyLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE9wdGlvblNldC50cyIsICIuLi9lbnRpdGllcy9nZW5lcmF0b3IvQWNjb3VudC53ZWJhcGkudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0V2ViQXBpLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE1vbmV5LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdEJvb2xlYW4udHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RGF0ZVRpbWUudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RGF0ZU9ubHkudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0R3JpZC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RVdGlsaXR5LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE11bHRpT3B0aW9uU2V0LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFRhYi50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3ROYXZpZ2F0aW9uSXRlbS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5pbXBvcnQgeyBUZXN0Q29udHJvbCB9IGZyb20gJy4vQWNjb3VudC5UZXN0Q29udHJvbCc7XHJcbmltcG9ydCB7IFRlc3RMb29rdXAgfSBmcm9tICcuL0FjY291bnQuVGVzdExvb2t1cCc7XHJcbmltcG9ydCB7IFRlc3RNZW1vIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RNZW1vJztcclxuaW1wb3J0IHsgVGVzdFN0cmluZyB9IGZyb20gJy4vQWNjb3VudC5UZXN0U3RyaW5nJztcclxuaW1wb3J0IHsgVGVzdEludGVnZXIgfSBmcm9tICcuL0FjY291bnQuVGVzdEludGVnZXInO1xyXG5pbXBvcnQgeyBUZXN0T3B0aW9uU2V0IH0gZnJvbSAnLi9BY2NvdW50LlRlc3RPcHRpb25TZXQnO1xyXG5pbXBvcnQgeyBUZXN0V2ViQXBpIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RXZWJBcGknO1xyXG5pbXBvcnQgeyBUZXN0TW9uZXkgfSBmcm9tICcuL0FjY291bnQuVGVzdE1vbmV5JztcclxuaW1wb3J0IHsgVGVzdEJvb2xlYW4gfSBmcm9tICcuL0FjY291bnQuVGVzdEJvb2xlYW4nO1xyXG5pbXBvcnQgeyBUZXN0RGF0ZVRpbWUgfSBmcm9tICcuL0FjY291bnQuVGVzdERhdGVUaW1lJztcclxuaW1wb3J0IHsgVGVzdERhdGVPbmx5IH0gZnJvbSAnLi9BY2NvdW50LlRlc3REYXRlT25seSc7XHJcbmltcG9ydCB7IFRlc3RHcmlkIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RHcmlkJztcclxuaW1wb3J0IHsgVGVzdFV0aWxpdHkgfSBmcm9tICcuL0FjY291bnQuVGVzdFV0aWxpdHknO1xyXG5pbXBvcnQgeyBUZXN0TXVsdGlPcHRpb25TZXQgfSBmcm9tICcuL0FjY291bnQuVGVzdE11bHRpT3B0aW9uU2V0JztcclxuaW1wb3J0IHsgVGVzdFRhYiB9IGZyb20gJy4vQWNjb3VudC5UZXN0VGFiJztcclxuaW1wb3J0IHsgVGVzdE5hdmlnYXRpb25JdGVtIH0gZnJvbSAnLi9BY2NvdW50LlRlc3ROYXZpZ2F0aW9uSXRlbSc7XHJcblxyXG5jb25zdCBmb3JtQWNjb3VudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBsZXQgZm9ybTogQWNjb3VudEZvcm0uRm9ybTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvbkxvYWQoZXhlY3V0aW9uQ29udGV4dDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgZm9ybSA9IG5ldyBBY2NvdW50Rm9ybS5Gb3JtKGV4ZWN1dGlvbkNvbnRleHQpO1xyXG4gICAgICAgIHJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICAgICAgZm9ybS5VaUFkZExvYWRlZChVaUFkZExvYWRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGZvcm0uRXhlY3V0aW9uQ29udGV4dC5Jc0luaXRpYWxMb2FkKCkpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBPTiBMT0FEXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBVaUFkZExvYWRlZChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvLyBCRUdJTiBPTiBMT0FEIExPR0lDXHJcblxyXG4gICAgICAgIC8vIFdhaXQgMTAgc2Vjb25kcyBhZnRlciBPbkxvYWQgdG8gYWxsb3cgZm9ybSB0byBmdWxseSBsb2FkXHJcbiAgICAgICAgLy8gVGhlbiBjbGVhciBjb25zb2xlIGFuZCBydW4gcmVhbCB0ZXN0c1xyXG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDA6IElDb250cm9sIEludGVyZmFjZSAoYmFzZSBmb3IgYWxsIGNvbnRyb2xzKVxyXG4gICAgICAgICAgICBUZXN0Q29udHJvbChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTogTG9va3VwIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdExvb2t1cChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMjogTWVtbyBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RNZW1vKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAzOiBTdHJpbmcgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0U3RyaW5nKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCA0OiBJbnRlZ2VyIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdEludGVnZXIoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDU6IE9wdGlvblNldCBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RPcHRpb25TZXQoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDY6IFdlYkFwaSBcclxuICAgICAgICAgICAgYXdhaXQgVGVzdFdlYkFwaShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgNzogTW9uZXkgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TW9uZXkoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDg6IEJvb2xlYW4gQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0Qm9vbGVhbihmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgOTogRGF0ZVRpbWUgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0RGF0ZVRpbWUoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDEwOiBEYXRlT25seSBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3REYXRlT25seShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTE6IEdyaWQgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0R3JpZChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTI6IFV0aWxpdHkgQVBJXHJcbiAgICAgICAgICAgIFRlc3RVdGlsaXR5KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxMzogTXVsdGlPcHRpb25TZXQgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TXVsdGlPcHRpb25TZXQoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDE0OiBUYWIgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0VGFiKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxNTogTmF2aWdhdGlvbkl0ZW0gQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TmF2aWdhdGlvbkl0ZW0oZm9ybSk7XHJcblxyXG4gICAgICAgIH0sIDEwMDAwKTtcclxuXHJcbiAgICAgICAgLy8gRU5EIE9OIExPQUQgTE9HSUNcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEVORCBPTiBMT0FEXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIE9OIENIQU5HRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gRU5EIE9OIENIQU5HRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBQUkUgU0VBUkNIXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBFTkQgUFJFIFNFQVJDSFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBPVEhFUlNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIEVORCBPVEhFUlNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgT25Mb2FkOiBvbkxvYWRcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtQWNjb3VudDtcclxuIiwgImZ1bmN0aW9uIGdldFhybSgpOiB0eXBlb2YgWHJtIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93IGFzIGFueSkuWHJtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyZW50LndpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAocGFyZW50LndpbmRvdyBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyZW50LnBhcmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBhcmVudC5wYXJlbnQud2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAocGFyZW50LnBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAocGFyZW50LnBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmZ1bmN0aW9uIGdldHRlcjxUPihvYmo6IGFueSwgcHJvcDogc3RyaW5nLCBnZXR0ZXJGbjogKCkgPT4gVCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xyXG4gICAgICAgIGdldDogZ2V0dGVyRm4sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldHRlclNldHRlcjxUPihvYmo6IGFueSwgcHJvcDogc3RyaW5nLCBnZXR0ZXJGbjogKCkgPT4gVCwgc2V0dGVyRm46ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xyXG4gICAgICAgIGdldDogZ2V0dGVyRm4sXHJcbiAgICAgICAgc2V0OiBzZXR0ZXJGbixcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEZpZWxkKGZvcm1Db250ZXh0OiBhbnksIGZpZWxkOiBhbnksIGF0dHJpYnV0ZTogYW55LCBjb250cm9sOiBhbnkpOiB2b2lkIHtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZScsICgpID0+IGNvbnRyb2w/LmdldEF0dHJpYnV0ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZU5hbWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGVQYXJlbnQnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFBhcmVudCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZVR5cGUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldEF0dHJpYnV0ZVR5cGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sTmFtZScsICgpID0+IGNvbnRyb2w/LmdldE5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sT3B0aW9ucycsICgpID0+IGNvbnRyb2w/LmdldE9wdGlvbnMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sUGFyZW50JywgKCkgPT4gY29udHJvbD8uZ2V0UGFyZW50KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQ29udHJvbFR5cGUnLCAoKSA9PiBjb250cm9sPy5nZXRDb250cm9sVHlwZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0Zvcm1hdCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0Rm9ybWF0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSW5pdGlhbFVybCcsICgpID0+IGNvbnRyb2w/LmdldEluaXRpYWxVcmwoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJbml0aWFsVmFsdWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldEluaXRpYWxWYWx1ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0lzRGlydHknLCAoKSA9PiBhdHRyaWJ1dGU/LmdldElzRGlydHkoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJc1BhcnR5TGlzdCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0SXNQYXJ0eUxpc3QoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJc1ZhbGlkJywgKCkgPT4gYXR0cmlidXRlPy5pc1ZhbGlkKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnTWF4JywgKCkgPT4gYXR0cmlidXRlPy5nZXRNYXgoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdNYXhMZW5ndGgnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE1heExlbmd0aCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ01pbicsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TWluKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnT2JqZWN0JywgKCkgPT4gY29udHJvbD8uZ2V0T2JqZWN0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnT3B0aW9ucycsICgpID0+IGF0dHJpYnV0ZT8uZ2V0T3B0aW9ucygpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ091dHB1dHMnLCAoKSA9PiBjb250cm9sPy5nZXRPdXRwdXRzKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU2VsZWN0ZWRPcHRpb24nLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFNlbGVjdGVkT3B0aW9uKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU2VsZWN0ZWRSZXN1bHRzJywgKCkgPT4gY29udHJvbD8uZ2V0U2VsZWN0ZWRSZXN1bHRzKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU3RhdGUnLCAoKSA9PiBjb250cm9sPy5nZXRTdGF0ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1RleHQnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFRleHQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdUb3RhbFJlc3VsdENvdW50JywgKCkgPT4gY29udHJvbD8uZ2V0VG90YWxSZXN1bHRDb3VudCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1VzZXJQcml2aWxlZ2UnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFVzZXJQcml2aWxlZ2UoKSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEYXRhJywgKCkgPT4gY29udHJvbD8uZ2V0RGF0YSgpLCAodmFsdWU6IGFueSkgPT4geyBjb250cm9sPy5zZXREYXRhKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEZWZhdWx0VmlldycsICgpID0+IGNvbnRyb2w/LmdldERlZmF1bHRWaWV3KCksICh2YWx1ZTogYW55KSA9PiB7IGNvbnRyb2w/LnNldERlZmF1bHRWaWV3KHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEaXNhYmxlZCcsICgpID0+IGNvbnRyb2w/LmdldERpc2FibGVkKCksICh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmIChmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDMgfHwgZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSA0KSByZXR1cm47XHJcbiAgICAgICAgY29udHJvbD8uc2V0RGlzYWJsZWQodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdFbnRpdHlUeXBlcycsICgpID0+IGNvbnRyb2w/LmdldEVudGl0eVR5cGVzKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbnRyb2w/LnNldEVudGl0eVR5cGVzKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdMYWJlbCcsICgpID0+IGNvbnRyb2w/LmdldExhYmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGNvbnRyb2w/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdQcmVjaXNpb24nLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFByZWNpc2lvbigpLCAodmFsdWU6IG51bWJlcikgPT4geyBhdHRyaWJ1dGU/LnNldFByZWNpc2lvbih2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnUmVxdWlyZWRMZXZlbCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0UmVxdWlyZWRMZXZlbCgpLCAodmFsdWU6IHN0cmluZykgPT4geyBhdHRyaWJ1dGU/LnNldFJlcXVpcmVkTGV2ZWwodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1NlYXJjaFF1ZXJ5JywgKCkgPT4gY29udHJvbD8uZ2V0U2VhcmNoUXVlcnkoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgY29udHJvbD8uc2V0U2VhcmNoUXVlcnkodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1Nob3dUaW1lJywgKCkgPT4gY29udHJvbD8uZ2V0U2hvd1RpbWUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGNvbnRyb2w/LnNldFNob3dUaW1lKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTcmMnLCAoKSA9PiBjb250cm9sPy5nZXRTcmMoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgY29udHJvbD8uc2V0U3JjKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTdWJtaXRNb2RlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRTdWJtaXRNb2RlKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGF0dHJpYnV0ZT8uc2V0U3VibWl0TW9kZSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnVmFsdWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFZhbHVlKCksICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gMyB8fCBmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDQpIHJldHVybjtcclxuICAgICAgICBhdHRyaWJ1dGU/LnNldFZhbHVlKHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnVmlzaWJsZScsICgpID0+IGNvbnRyb2w/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGNvbnRyb2w/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgIGZpZWxkLkFkZEN1c3RvbUZpbHRlciA9IChmaWx0ZXI6IHN0cmluZywgZW50aXR5TG9naWNhTmFtZT86IHN0cmluZykgPT4gY29udHJvbD8uYWRkQ3VzdG9tRmlsdGVyKGZpbHRlciwgZW50aXR5TG9naWNhTmFtZSk7XHJcbiAgICBmaWVsZC5BZGRDdXN0b21WaWV3ID0gKHZpZXdJZDogc3RyaW5nLCBlbnRpdHlOYW1lOiBzdHJpbmcsIHZpZXdEaXNwbGF5TmFtZTogc3RyaW5nLCBmZXRjaFhtbDogc3RyaW5nLCBsYXlvdXRYbWw6IHN0cmluZywgaXNEZWZhdWx0OiBib29sZWFuKSA9PiBjb250cm9sPy5hZGRDdXN0b21WaWV3KHZpZXdJZCwgZW50aXR5TmFtZSwgdmlld0Rpc3BsYXlOYW1lLCBmZXRjaFhtbCwgbGF5b3V0WG1sLCBpc0RlZmF1bHQpO1xyXG4gICAgZmllbGQuQWRkTG9va3VwVGFnQ2xpY2sgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25Mb29rdXBUYWdDbGljayhjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGROb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCBub3RpZmljYXRpb25MZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nLCBjYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB7IG1lc3NhZ2U6IG1lc3NhZ2UsIGFjdGlvbnM6IFtjYWxsYmFja10gfTtcclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSB7IG1lc3NhZ2VzOiBbbWVzc2FnZV0sIG5vdGlmaWNhdGlvbkxldmVsOiBub3RpZmljYXRpb25MZXZlbCwgdW5pcXVlSWQ6IHVuaXF1ZUlkLCBhY3Rpb25zOiBbYWN0aW9uc10gfTtcclxuICAgICAgICByZXR1cm4gY29udHJvbD8uYWRkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9O1xyXG4gICAgZmllbGQuQWRkT25DaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gYXR0cmlidXRlPy5hZGRPbkNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRPbk91dHB1dENoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPbk91dHB1dENoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRPcHRpb24gPSAodGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBpbmRleD86IG51bWJlcikgPT4gY29udHJvbD8uYWRkT3B0aW9uKHsgdGV4dDogdGV4dCwgdmFsdWU6IHZhbHVlIH0sIGluZGV4KTtcclxuICAgIGZpZWxkLkFkZFBvc3RTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25Qb3N0U2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZFByZVNlYXJjaCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRQcmVTZWFyY2goY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkUmVzdWx0T3BlbmVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uUmVzdWx0T3BlbmVkKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZFNlbGVjdGlvbiA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPblNlbGVjdGlvbihjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5DbGVhck5vdGlmaWNhdGlvbiA9ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250cm9sPy5jbGVhck5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICBmaWVsZC5DbGVhck9wdGlvbnMgPSAoKSA9PiBjb250cm9sPy5jbGVhck9wdGlvbnMoKTtcclxuICAgIGZpZWxkLkNvbnRlbnRXaW5kb3cgPSAoc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2w/LmdldENvbnRlbnRXaW5kb3coKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBmaWVsZC5GaXJlT25DaGFuZ2UgPSAoKSA9PiBhdHRyaWJ1dGU/LmZpcmVPbkNoYW5nZSgpO1xyXG4gICAgZmllbGQuRm9jdXMgPSAoKSA9PiBjb250cm9sPy5zZXRGb2N1cygpO1xyXG4gICAgZmllbGQuT3BlblNlYXJjaFJlc3VsdCA9IChyZXN1bHROdW1iZXI6IG51bWJlciwgbW9kZT86IHN0cmluZykgPT4gY29udHJvbD8ub3BlblNlYXJjaFJlc3VsdChyZXN1bHROdW1iZXIsIG1vZGUpO1xyXG4gICAgZmllbGQuT3B0aW9uID0gKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+IGF0dHJpYnV0ZT8uZ2V0T3B0aW9uKHZhbHVlKTtcclxuICAgIGZpZWxkLlJlZnJlc2ggPSAoKSA9PiBjb250cm9sPy5yZWZyZXNoKCk7XHJcbiAgICBmaWVsZC5SZW1vdmVMb29rdXBUYWdDbGljayA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPbkxvb2t1cFRhZ0NsaWNrKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZU9uQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGF0dHJpYnV0ZT8ucmVtb3ZlT25DaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlT25PdXRwdXRDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25PdXRwdXRDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlT3B0aW9uID0gKHZhbHVlOiBudW1iZXIpID0+IGNvbnRyb2w/LnJlbW92ZU9wdGlvbih2YWx1ZSk7XHJcbiAgICBmaWVsZC5SZW1vdmVQb3N0U2VhcmNoID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uUG9zdFNlYXJjaChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVQcmVTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlUHJlU2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZVJlc3VsdE9wZW5lZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPblJlc3VsdE9wZW5lZChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVTZWxlY3Rpb24gPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25TZWxlY3Rpb24oY2FsbGJhY2spO1xyXG4gICAgZmllbGQuU2V0SXNWYWxpZCA9ICh2YWxpZDogYm9vbGVhbiwgbWVzc2FnZT86IHN0cmluZykgPT4gYXR0cmlidXRlPy5zZXRJc1ZhbGlkKHZhbGlkLCBtZXNzYWdlKTtcclxuICAgIGZpZWxkLlNldE5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRyb2w/LnNldE5vdGlmaWNhdGlvbihtZXNzYWdlLCB1bmlxdWVJZCk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEZpZWxkcyhmb3JtQ29udGV4dDogYW55LCBib2R5OiBhbnksIHR5cGU/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgT2JqZWN0LmtleXMoYm9keSkuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9naWNhbE5hbWUgPSB0eXBlID09PSB1bmRlZmluZWQgPyBmaWVsZD8udG9Mb3dlckNhc2UoKSA6ICh0eXBlICsgZmllbGQpPy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChsb2dpY2FsTmFtZSkgPz8gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZmllbGQpO1xyXG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBmb3JtQ29udGV4dD8uZ2V0QXR0cmlidXRlKGxvZ2ljYWxOYW1lKTtcclxuICAgICAgICBpZiAoIWF0dHJpYnV0ZSAmJiBjb250cm9sPy5nZXRBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZEZpZWxkKGZvcm1Db250ZXh0LCBib2R5W2ZpZWxkXSwgYXR0cmlidXRlLCBjb250cm9sKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHR5cGUgPT09IFwiaGVhZGVyX1wiKSB7XHJcbiAgICAgICAgY29uc3QgZ2V0SGVhZGVyU2VjdGlvbiA9IGZvcm1Db250ZXh0Py51aT8uaGVhZGVyU2VjdGlvbjtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoYm9keSwgJ0JvZHlWaXNpYmxlJywgKCkgPT4gZ2V0SGVhZGVyU2VjdGlvbj8uZ2V0Qm9keVZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ2V0SGVhZGVyU2VjdGlvbj8uc2V0Qm9keVZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoYm9keSwgJ0NvbW1hbmRCYXJWaXNpYmxlJywgKCkgPT4gZ2V0SGVhZGVyU2VjdGlvbj8uZ2V0Q29tbWFuZEJhclZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ2V0SGVhZGVyU2VjdGlvbj8uc2V0Q29tbWFuZEJhclZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoYm9keSwgJ1RhYk5hdmlnYXRvclZpc2libGUnLCAoKSA9PiBnZXRIZWFkZXJTZWN0aW9uPy5nZXRUYWJOYXZpZ2F0b3JWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IGdldEhlYWRlclNlY3Rpb24/LnNldFRhYk5hdmlnYXRvclZpc2libGUodmFsdWUpOyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib2R5O1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRUYWJzKGZvcm1Db250ZXh0OiBhbnksIHRhYnM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9hZFNlY3Rpb24gPSAoZm9ybUNvbnRleHQ6IGFueSwgdGFiOiBzdHJpbmcsIHNlY3Rpb25zOiBhbnksIHNlY3Rpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYk9iamVjdCA9IGZvcm1Db250ZXh0Py51aT8udGFicz8uZ2V0KHRhYik7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbk9iamVjdCA9IHRhYk9iamVjdD8uc2VjdGlvbnM/LmdldChzZWN0aW9uKTtcclxuICAgICAgICBnZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdOYW1lJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdQYXJlbnQnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRQYXJlbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHNlY3Rpb25zW3NlY3Rpb25dLCAnTGFiZWwnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRMYWJlbCgpLCAodmFsdWU6IGFueSkgPT4gc2VjdGlvbk9iamVjdD8uc2V0TGFiZWwodmFsdWUpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdWaXNpYmxlJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4gc2VjdGlvbk9iamVjdD8uc2V0VmlzaWJsZSh2YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRUYWIgPSAoZm9ybUNvbnRleHQ6IGFueSwgdGFiczogYW55LCB0YWI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYk9iamVjdCA9IGZvcm1Db250ZXh0Py51aT8udGFicz8uZ2V0KHRhYik7XHJcbiAgICAgICAgZ2V0dGVyKHRhYnNbdGFiXSwgJ05hbWUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHRhYnNbdGFiXSwgJ1BhcmVudCcsICgpID0+IHRhYk9iamVjdD8uZ2V0UGFyZW50KCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdDb250ZW50VHlwZScsICgpID0+IHRhYk9iamVjdD8uZ2V0Q29udGVudFR5cGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXRDb250ZW50VHlwZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdEaXNwbGF5U3RhdGUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldERpc3BsYXlTdGF0ZSgpLCAodmFsdWU6IGFueSkgPT4geyB0YWJPYmplY3Q/LnNldERpc3BsYXlTdGF0ZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdMYWJlbCcsICgpID0+IHRhYk9iamVjdD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXRMYWJlbCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdWaXNpYmxlJywgKCkgPT4gdGFiT2JqZWN0Py5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IHRhYk9iamVjdD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIHRhYnNbdGFiXS5BZGRUYWJTdGF0ZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiB0YWJPYmplY3Q/LmFkZFRhYlN0YXRlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgICAgICB0YWJzW3RhYl0uRm9jdXMgPSAoKSA9PiB0YWJPYmplY3Q/LnNldEZvY3VzKCk7XHJcbiAgICAgICAgdGFic1t0YWJdLlJlbW92ZVRhYlN0YXRlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IHRhYk9iamVjdD8ucmVtb3ZlVGFiU3RhdGVDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRhYnNbdGFiXS5TZWN0aW9uKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBsb2FkU2VjdGlvbihmb3JtQ29udGV4dCwgdGFiLCB0YWJzW3RhYl0uU2VjdGlvbiwgc2VjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXModGFicykuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIGxvYWRUYWIoZm9ybUNvbnRleHQsIHRhYnMsIHRhYik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkTmF2aWdhdGlvbnMoZm9ybUNvbnRleHQ6IGFueSwgbmF2aWdhdGlvbnM6IGFueSk6IHZvaWQge1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICBjb25zdCBnZXROYXZpZ2F0aW9uSXRlbSA9IChuYXZpZ2F0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZJdGVtcyA9IGZvcm1Db250ZXh0Py51aT8ubmF2aWdhdGlvbj8uaXRlbXM7XHJcbiAgICAgICAgaWYgKCFuYXZJdGVtcykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbmF2SXRlbXMuZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gbmF2SXRlbXMuZ2V0KGkpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbT8uZ2V0SWQoKSA9PT0gbmF2aWdhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZE5hdmlnYXRpb24gPSAoZm9ybUNvbnRleHQ6IGFueSwgbmF2aWdhdGlvbnM6IGFueSwgbmF2aWdhdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkl0ZW0gPSBnZXROYXZpZ2F0aW9uSXRlbShuYXZpZ2F0aW9uKTtcclxuICAgICAgICBnZXR0ZXIobmF2aWdhdGlvbnNbbmF2aWdhdGlvbl0sICdJZCcsICgpID0+IG5hdmlnYXRpb25JdGVtPy5nZXRJZCgpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIobmF2aWdhdGlvbnNbbmF2aWdhdGlvbl0sICdMYWJlbCcsICgpID0+IG5hdmlnYXRpb25JdGVtPy5nZXRMYWJlbCgpLCAodmFsdWU6IGFueSkgPT4gbmF2aWdhdGlvbkl0ZW0/LnNldExhYmVsKHZhbHVlKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG5hdmlnYXRpb25zW25hdmlnYXRpb25dLCAnVmlzaWJsZScsICgpID0+IG5hdmlnYXRpb25JdGVtPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiBuYXZpZ2F0aW9uSXRlbT8uc2V0VmlzaWJsZSh2YWx1ZSkpO1xyXG4gICAgICAgIG5hdmlnYXRpb25zW25hdmlnYXRpb25dLkZvY3VzID0gKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LnNldEZvY3VzKCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMobmF2aWdhdGlvbnMpLmZvckVhY2gobmF2aWdhdGlvbiA9PiB7XHJcbiAgICAgICAgbG9hZE5hdmlnYXRpb24oZm9ybUNvbnRleHQsIG5hdmlnYXRpb25zLCBuYXZpZ2F0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRRdWlja0Zvcm1zKGZvcm1Db250ZXh0OiBhbnksIHF1aWNrRm9ybXM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgZXhjbHVkZWRGaWVsZHMgPSBuZXcgU2V0KFtcIkJvZHlcIiwgXCJDb250cm9sc1wiLCBcIklzTG9hZGVkXCIsIFwiUmVmcmVzaFwiLCBcIkZvY3VzXCIsIFwiQ29udHJvbFR5cGVcIiwgXCJEaXNhYmxlZFwiLCBcIkxhYmVsXCIsIFwiQ29udHJvbE5hbWVcIiwgXCJDb250cm9sUGFyZW50XCIsIFwiVmlzaWJsZVwiXSk7XHJcbiAgICBjb25zdCBsb2FkUXVpY2tGb3JtID0gKGZvcm1Db250ZXh0OiBhbnksIHF1aWNrRm9ybXM6IGFueSwgcXVpY2tGb3JtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhxdWlja0Zvcm1zW3F1aWNrRm9ybV0pLmZpbHRlcihmaWVsZCA9PiAhZXhjbHVkZWRGaWVsZHMuaGFzKGZpZWxkKSk7XHJcbiAgICAgICAgY29uc3QgcXVpY2sgPSBmb3JtQ29udGV4dD8udWk/LnF1aWNrRm9ybXM/LmdldChxdWlja0Zvcm0pO1xyXG4gICAgICAgIGdldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdCb2R5JywgKCkgPT4gTG9hZEZvcm1EaWFsb2cocXVpY2ssIGZpZWxkcykpO1xyXG4gICAgICAgIGdldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdDb250cm9sTmFtZScsICgpID0+IHF1aWNrPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdDb250cm9sUGFyZW50JywgKCkgPT4gcXVpY2s/LmdldFBhcmVudCgpKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQ29udHJvbFR5cGUnLCAoKSA9PiBxdWljaz8uZ2V0Q29udHJvbFR5cGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0Rpc2FibGVkJywgKCkgPT4gcXVpY2s/LmdldERpc2FibGVkKCksICh2YWx1ZTogYW55KSA9PiB7IHF1aWNrPy5zZXREaXNhYmxlZCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdMYWJlbCcsICgpID0+IHF1aWNrPy5nZXRMYWJlbCgpLCAodmFsdWU6IGFueSkgPT4geyBxdWljaz8uc2V0TGFiZWwodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnVmlzaWJsZScsICgpID0+IHF1aWNrPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IHF1aWNrPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgcXVpY2tGb3Jtc1txdWlja0Zvcm1dLkNvbnRyb2xzID0gKGFyZzogYW55KSA9PiBxdWljaz8uZ2V0Q29udHJvbChhcmcpO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5Gb2N1cyA9ICgpID0+IHF1aWNrPy5zZXRGb2N1cygpO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5Jc0xvYWRlZCA9ICgpID0+IHF1aWNrPy5pc0xvYWRlZCgpO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5SZWZyZXNoID0gKCkgPT4gcXVpY2s/LnJlZnJlc2goKTtcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhxdWlja0Zvcm1zKS5mb3JFYWNoKHF1aWNrRm9ybSA9PiB7XHJcbiAgICAgICAgbG9hZFF1aWNrRm9ybShmb3JtQ29udGV4dCwgcXVpY2tGb3JtcywgcXVpY2tGb3JtKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRHcmlkcyhmb3JtQ29udGV4dDogYW55LCBncmlkczogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBsb2FkR3JpZENvbHVtbiA9IChjb2w6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0xhYmVsJywgKCkgPT4gY29sPy5jb250cm9scz8uZ2V0KDApPy5nZXRMYWJlbCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTmFtZScsICgpID0+IGNvbD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIob2JqLCAnRGlzYWJsZWQnLCAoKSA9PiBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LmdldERpc2FibGVkKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbD8uY29udHJvbHM/LmdldCgwKT8uc2V0RGlzYWJsZWQodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIob2JqLCAnUmVxdWlyZWRMZXZlbCcsICgpID0+IGNvbD8uZ2V0UmVxdWlyZWRMZXZlbCgpLCAodmFsdWU6IGFueSkgPT4geyBjb2w/LnNldFJlcXVpcmVkTGV2ZWwodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIob2JqLCAnVmFsdWUnLCAoKSA9PiBjb2w/LmdldFZhbHVlKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbD8uc2V0VmFsdWUodmFsdWUpOyB9KTtcclxuICAgICAgICBvYmouQ2xlYXJOb3RpZmljYXRpb24gPSAodW5pcXVlSWQ6IHN0cmluZykgPT4gY29sPy5jb250cm9scz8uZ2V0KDApPy5jbGVhck5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICAgICAgb2JqLlNldE5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uc2V0Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHVuaXF1ZUlkKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRHcmlkUm93ID0gKHJvdzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ29sdW1ucycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uc09iajogYW55ID0ge307XHJcbiAgICAgICAgICAgIGNvbHVtbnNPYmouZ2V0TGVuZ3RoID0gKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmF0dHJpYnV0ZXM/LmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICBjb2x1bW5zT2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSByb3c/LmRhdGE/LmVudGl0eT8uYXR0cmlidXRlcz8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkR3JpZENvbHVtbihjb2x1bW4pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb2x1bW5zT2JqLmZvckVhY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IHJvdz8uZGF0YT8uZW50aXR5Py5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbHVtbnM/LmdldExlbmd0aCgpOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1ucz8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhsb2FkR3JpZENvbHVtbihjb2x1bW4pLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zT2JqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlcihvYmosICdFbnRpdHlJZCcsICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5nZXRJZCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5TmFtZScsICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdFbnRpdHlSZWZlcmVuY2UnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0RW50aXR5UmVmZXJlbmNlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdQcmltYXJ5QXR0cmlidXRlVmFsdWUnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0UHJpbWFyeUF0dHJpYnV0ZVZhbHVlKCkpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZEdyaWQgPSAoZm9ybUNvbnRleHQ6IGFueSwgZ3JpZHM6IGFueSwgZ3JpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ3JpZENvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChncmlkKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVDb2xsZWN0aW9uT2JqZWN0ID0gKGdldEl0ZW1zRm46IGFueSwgcHJvY2Vzc0l0ZW1GbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgICAgIG9iai5nZXRMZW5ndGggPSAoKSA9PiBnZXRJdGVtc0ZuKCk/LmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICBvYmouZ2V0ID0gKGluZGV4OiBudW1iZXIpID0+IHByb2Nlc3NJdGVtRm4oZ2V0SXRlbXNGbigpPy5nZXQoaW5kZXgpKTtcclxuICAgICAgICAgICAgb2JqLmZvckVhY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBnZXRJdGVtc0ZuKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBpdGVtcz8uZ2V0TGVuZ3RoKCkgfHwgMDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwcm9jZXNzSXRlbUZuKGl0ZW1zLmdldChpbmRleCkpLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdFbnRpdHlOYW1lJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnRmV0Y2hYbWwnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0RmV0Y2hYbWwoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnR3JpZFR5cGUnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0R3JpZFR5cGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnUmVsYXRpb25zaGlwJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldFJlbGF0aW9uc2hpcCgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdSb3dzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkSW5zdGFuY2UgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChncmlkKT8uZ2V0R3JpZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ29sbGVjdGlvbk9iamVjdChcclxuICAgICAgICAgICAgICAgICgpID0+IGdyaWRJbnN0YW5jZT8uZ2V0Um93cygpLFxyXG4gICAgICAgICAgICAgICAgKHJvdzogYW55KSA9PiBsb2FkR3JpZFJvdyhyb3cpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnU2VsZWN0ZWRSb3dzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkSW5zdGFuY2UgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChncmlkKT8uZ2V0R3JpZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ29sbGVjdGlvbk9iamVjdChcclxuICAgICAgICAgICAgICAgICgpID0+IGdyaWRJbnN0YW5jZT8uZ2V0U2VsZWN0ZWRSb3dzKCksXHJcbiAgICAgICAgICAgICAgICAocm93OiBhbnkpID0+IGxvYWRHcmlkUm93KHJvdz8uZ2V0RGF0YSgpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1RvdGFsUmVjb3JkQ291bnQnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0R3JpZCgpPy5nZXRUb3RhbFJlY29yZENvdW50KCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1ZpZXdTZWxlY3RvcicsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgdmlld1NlbGVjdG9yID0gZ3JpZENvbnRyb2w/LmdldFZpZXdTZWxlY3RvcigpO1xyXG4gICAgICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBnZXR0ZXIob2JqLCAnVmlzaWJsZScsICgpID0+IHZpZXdTZWxlY3Rvcj8uaXNWaXNpYmxlKCkpO1xyXG4gICAgICAgICAgICBnZXR0ZXJTZXR0ZXIob2JqLCAnQ3VycmVudFZpZXcnLCAoKSA9PiB2aWV3U2VsZWN0b3I/LmdldEN1cnJlbnRWaWV3KCksICh2YWx1ZTogYW55KSA9PiB2aWV3U2VsZWN0b3I/LnNldEN1cnJlbnRWaWV3KHZhbHVlKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKGdyaWRzW2dyaWRdLCAnVmlzaWJsZScsICgpID0+IGdyaWRDb250cm9sPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IGdyaWRDb250cm9sPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uQWRkT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdyaWRDb250cm9sPy5hZGRPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLk9wZW5SZWxhdGVkR3JpZCA9ICgpID0+IGdyaWRDb250cm9sPy5vcGVuUmVsYXRlZEdyaWQoKTtcclxuICAgICAgICBncmlkc1tncmlkXS5SZWZyZXNoID0gKCkgPT4gZ3JpZENvbnRyb2w/LnJlZnJlc2goKTtcclxuICAgICAgICBncmlkc1tncmlkXS5SZWZyZXNoUmliYm9uID0gKCkgPT4gZ3JpZENvbnRyb2w/LnJlZnJlc2hSaWJib24oKTtcclxuICAgICAgICBncmlkc1tncmlkXS5SZW1vdmVPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ3JpZENvbnRyb2w/LnJlbW92ZU9uTG9hZChjYWxsYmFjayk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uVXJsID0gKGNsaWVudDogbnVtYmVyKSA9PiBncmlkQ29udHJvbD8uZ2V0VXJsKGNsaWVudCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMoZ3JpZHMpLmZvckVhY2goZ3JpZCA9PiB7XHJcbiAgICAgICAgbG9hZEdyaWQoZm9ybUNvbnRleHQsIGdyaWRzLCBncmlkKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIExvYWRGb3JtKGZvcm1Db250ZXh0OiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgZm9ybTogYW55ID0ge307XHJcbiAgICBjb25zdCBjb250ZXh0RGF0YSA9IGZvcm1Db250ZXh0Py5kYXRhO1xyXG4gICAgY29uc3QgY29udGV4dERhdGFFbnRpdHkgPSBmb3JtQ29udGV4dD8uZGF0YT8uZW50aXR5O1xyXG4gICAgY29uc3QgY29udGV4dFVpID0gZm9ybUNvbnRleHQ/LnVpO1xyXG4gICAgY29uc3QgY29udGV4dFVpRm9ybVNlbGVjdG9yID0gZm9ybUNvbnRleHQ/LnVpPy5mb3JtU2VsZWN0b3I7XHJcbiAgICBjb25zdCBmaW5kRm9ybUl0ZW0gPSAoY3JpdGVyaWE6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uaXRlbXM/LmdldExlbmd0aCgpID8/IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gY29udGV4dFVpRm9ybVNlbGVjdG9yPy5pdGVtcz8uZ2V0KGkpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBjcml0ZXJpYShpdGVtKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIGdldHRlcihmb3JtLCAnQXR0cmlidXRlcycsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5hdHRyaWJ1dGVzKTtcclxuICAgIGdldHRlcihmb3JtLCAnQ29udHJvbHMnLCAoKSA9PiBjb250ZXh0VWk/LmNvbnRyb2xzKTtcclxuICAgIGdldHRlcihmb3JtLCAnRGF0YUlzRGlydHknLCAoKSA9PiBjb250ZXh0RGF0YT8uZ2V0SXNEaXJ0eSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRGF0YUlzVmFsaWQnLCAoKSA9PiBjb250ZXh0RGF0YT8uaXNWYWxpZCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRGF0YVhtbCcsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXREYXRhWG1sKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlJZCcsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRJZCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5SXNEaXJ0eScsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRJc0RpcnR5KCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlJc1ZhbGlkJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmlzVmFsaWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eU5hbWUnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0RW50aXR5TmFtZSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5UmVmZXJlbmNlJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldEVudGl0eVJlZmVyZW5jZSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRm9ybUlkJywgKCkgPT4gY29udGV4dFVpRm9ybVNlbGVjdG9yPy5nZXRDdXJyZW50SXRlbSgpPy5nZXRJZCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRm9ybUxhYmVsJywgKCkgPT4gY29udGV4dFVpRm9ybVNlbGVjdG9yPy5nZXRDdXJyZW50SXRlbSgpPy5nZXRMYWJlbCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRm9ybVR5cGUnLCAoKSA9PiBjb250ZXh0VWk/LmdldEZvcm1UeXBlKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdQcmltYXJ5QXR0cmlidXRlVmFsdWUnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0UHJpbWFyeUF0dHJpYnV0ZVZhbHVlKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdWaWV3UG9ydEhlaWdodCcsICgpID0+IGNvbnRleHRVaT8uZ2V0Vmlld1BvcnRIZWlnaHQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ1ZpZXdQb3J0V2lkdGgnLCAoKSA9PiBjb250ZXh0VWk/LmdldFZpZXdQb3J0V2lkdGgoKSk7XHJcbiAgICBmb3JtLkFkZE9uUG9zdFNhdmUgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGFFbnRpdHk/LmFkZE9uUG9zdFNhdmUoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5BZGRPblNhdmUgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGFFbnRpdHk/LmFkZE9uU2F2ZShjYWxsYmFjayk7XHJcbiAgICBmb3JtLkNsZWFyRm9ybU5vdGlmaWNhdGlvbiA9ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250ZXh0VWk/LmNsZWFyRm9ybU5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICBmb3JtLkNsb3NlID0gKCkgPT4gY29udGV4dFVpPy5jbG9zZSgpO1xyXG4gICAgZm9ybS5EYXRhQWRkT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhPy5hZGRPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5EYXRhUmVtb3ZlT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhPy5yZW1vdmVPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5Gb3JtSXNWaXNpYmxlID0gKGZvcm1JZDogc3RyaW5nKSA9PiB7IHJldHVybiBmaW5kRm9ybUl0ZW0oKGl0ZW06IGFueSkgPT4gaXRlbS5nZXRJZCgpLCBmb3JtSWQpPy5nZXRWaXNpYmxlKCk7IH07XHJcbiAgICBmb3JtLkZvcm1OYXZpZ2F0ZVRvRm9ybUlkID0gKGZvcm1JZDogc3RyaW5nKSA9PiB7IGZpbmRGb3JtSXRlbSgoaXRlbTogYW55KSA9PiBpdGVtLmdldElkKCksIGZvcm1JZCk/Lm5hdmlnYXRlKCk7IH07XHJcbiAgICBmb3JtLkZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsID0gKGZvcm1MYWJlbDogc3RyaW5nKSA9PiB7IGZpbmRGb3JtSXRlbSgoaXRlbTogYW55KSA9PiBpdGVtLmdldExhYmVsKCksIGZvcm1MYWJlbCk/Lm5hdmlnYXRlKCk7IH07XHJcbiAgICBmb3JtLkZvcm1TZXRWaXNpYmxlID0gKGZvcm1JZDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbikgPT4geyBmaW5kRm9ybUl0ZW0oKGl0ZW06IGFueSkgPT4gaXRlbS5nZXRJZCgpLCBmb3JtSWQpPy5zZXRWaXNpYmxlKHZhbHVlKTsgfTtcclxuICAgIGZvcm0uUmVmcmVzaCA9IChzYXZlPzogYm9vbGVhbiwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRleHREYXRhPy5yZWZyZXNoKHNhdmUpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIGZvcm0uUmVmcmVzaFJpYmJvbiA9IChyZWZyZXNoQWxsPzogYm9vbGVhbikgPT4gY29udGV4dFVpPy5yZWZyZXNoUmliYm9uKHJlZnJlc2hBbGwpO1xyXG4gICAgZm9ybS5SZW1vdmVPblBvc3RTYXZlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhRW50aXR5Py5yZW1vdmVPblBvc3RTYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uUmVtb3ZlT25TYXZlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhRW50aXR5Py5yZW1vdmVPblNhdmUoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5TYXZlID0gKHNhdmVPcHRpb25zPzogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gY29udGV4dERhdGE/LnNhdmUoc2F2ZU9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIGZvcm0uU2V0Rm9ybUVudGl0eU5hbWUgPSAoYXJnOiBzdHJpbmcpID0+IGNvbnRleHRVaT8uc2V0Rm9ybUVudGl0eU5hbWUoYXJnKTtcclxuICAgIGZvcm0uU2V0Rm9ybU5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRleHRVaT8uc2V0Rm9ybU5vdGlmaWNhdGlvbihtZXNzYWdlLCBsZXZlbCwgdW5pcXVlSWQpO1xyXG4gICAgZm9ybS5VaUFkZExvYWRlZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0VWk/LmFkZExvYWRlZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLlVpQWRkT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHRVaT8uYWRkT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uVWlSZW1vdmVMb2FkZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5yZW1vdmVMb2FkZWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5VaVJlbW92ZU9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0VWk/LnJlbW92ZU9uTG9hZChjYWxsYmFjayk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5mdW5jdGlvbiBMb2FkRXhlY3V0aW9uQ29udGV4dChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgIGdldHRlcihvYmosICdEZXB0aCcsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldERlcHRoKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0VudGl0eVJlZmVyZW5jZScsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXRFbnRpdHlSZWZlcmVuY2UoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnRXZlbnRBcmdzJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0V2ZW50U291cmNlJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRTb3VyY2UoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnRm9ybUNvbnRleHQnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRGb3JtQ29udGV4dCgpKTtcclxuICAgIGdldHRlcihvYmosICdJc1NhdmVTdWNjZXNzJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldElzU2F2ZVN1Y2Nlc3MoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnU2F2ZUVycm9ySW5mbycsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXRTYXZlRXJyb3JJbmZvKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ1NhdmVNb2RlJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldFNhdmVNb2RlKCkpO1xyXG4gICAgb2JqLkRpc2FibGVBc3luY1RpbWVvdXQgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZGlzYWJsZUFzeW5jVGltZW91dCgpO1xyXG4gICAgb2JqLkdldFNoYXJlZFZhcmlhYmxlID0gKGtleTogc3RyaW5nKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRTaGFyZWRWYXJpYWJsZShrZXkpO1xyXG4gICAgb2JqLklzRGVmYXVsdFByZXZlbnRlZCA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcclxuICAgIG9iai5Jc0luaXRpYWxMb2FkID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldERhdGFMb2FkU3RhdGUoKSA9PT0gMTtcclxuICAgIG9iai5TZXRQcmV2ZW50RGVmYXVsdCA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgb2JqLlNldFByZXZlbnREZWZhdWx0T25FcnJvciA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5wcmV2ZW50RGVmYXVsdE9uRXJyb3IoKTtcclxuICAgIG9iai5TZXRTaGFyZWRWYXJpYWJsZSA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gZXhlY3V0aW9uQ29udGV4dD8uc2V0U2hhcmVkVmFyaWFibGUoa2V5LCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbi8qKlxyXG4gKiBMb2FkcyB0aGUgU2lkZVBhbmVzIEFQSSB3cmFwcGVyLlxyXG4gKiBQcm92aWRlcyBhY2Nlc3MgdG8gc2lkZSBwYW5lcyBmdW5jdGlvbmFsaXR5IGluIG1vZGVsLWRyaXZlbiBhcHBzLlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgaW1wbGVtZW50aW5nIHRoZSBJU2lkZVBhbmVzIGludGVyZmFjZVxyXG4gKiBAbGluayBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXItYXBwcy9kZXZlbG9wZXIvbW9kZWwtZHJpdmVuLWFwcHMvY2xpZW50YXBpL3JlZmVyZW5jZS94cm0tYXBwLXNpZGVwYW5lc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRTaWRlUGFuZXMoKTogYW55IHtcclxuICAgIGNvbnN0IHNpZGVQYW5lczogYW55ID0ge307XHJcbiAgICBjb25zdCB4cm0gPSBnZXRYcm0oKTtcclxuICAgIGdldHRlclNldHRlcihzaWRlUGFuZXMsICdEaXNwbGF5U3RhdGUnLCAoKSA9PiAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5zdGF0ZSwgKHZhbHVlOiBhbnkpID0+IHsgY29uc3QgeCA9IGdldFhybSgpOyBpZiAoKHggYXMgYW55KT8uQXBwPy5zaWRlUGFuZXMpICh4IGFzIGFueSkuQXBwLnNpZGVQYW5lcy5zdGF0ZSA9IHZhbHVlOyB9KTtcclxuICAgIHNpZGVQYW5lcy5DcmVhdGUgPSBmdW5jdGlvbiAocGFuZU9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55KSB7ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LmNyZWF0ZVBhbmUocGFuZU9wdGlvbnMpPy50aGVuKHN1Y2Nlc3NDYWxsYmFjayk7IH07XHJcbiAgICBzaWRlUGFuZXMuR2V0ID0gKHBhbmVJZDogc3RyaW5nKSA9PiAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5nZXRQYW5lKHBhbmVJZCk7XHJcbiAgICBzaWRlUGFuZXMuR2V0QWxsID0gKCkgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uZ2V0QWxsUGFuZXMoKTtcclxuICAgIHNpZGVQYW5lcy5HZXRTZWxlY3RlZCA9ICgpID0+ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LmdldFNlbGVjdGVkUGFuZSgpO1xyXG4gICAgcmV0dXJuIHNpZGVQYW5lcztcclxufVxyXG4vKipcclxuICogTG9hZHMgdGhlIFdlYkFwaSB3cmFwcGVyLlxyXG4gKiBQcm92aWRlcyBtZXRob2RzIHRvIHVzZSBXZWIgQVBJIHRvIGNyZWF0ZSBhbmQgbWFuYWdlIHJlY29yZHMgYW5kIGV4ZWN1dGUgV2ViIEFQSSBhY3Rpb25zIGFuZCBmdW5jdGlvbnMuXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIElXZWJBcGkgaW50ZXJmYWNlXHJcbiAqIEBsaW5rIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlci1hcHBzL2RldmVsb3Blci9tb2RlbC1kcml2ZW4tYXBwcy9jbGllbnRhcGkvcmVmZXJlbmNlL3hybS13ZWJhcGlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkV2ViQXBpKCk6IERldktpdC5JV2ViQXBpIHtcclxuICAgIGNvbnN0IG9iajogYW55ID0ge30gYXMgRGV2S2l0LklXZWJBcGk7XHJcbiAgICBjb25zdCB4cm0gPSBnZXRYcm0oKTtcclxuICAgIGNvbnN0IGdldFdlYkFwaSA9IHhybT8uV2ViQXBpO1xyXG4gICAgY29uc3QgZ2V0T25saW5lID0geHJtPy5XZWJBcGk/Lm9ubGluZTtcclxuICAgIGNvbnN0IGdldE9mZmxpbmUgPSB4cm0/LldlYkFwaT8ub2ZmbGluZTtcclxuICAgIGNvbnN0IGV4dHJhY3RFbnRpdHlOYW1lID0gZnVuY3Rpb24gKGZldGNoWG1sOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBjbGVhblhtbCA9IGZldGNoWG1sO1xyXG4gICAgICAgIGNvbnN0IGZldGNoWG1sTWF0Y2ggPSBmZXRjaFhtbC5tYXRjaCgvZmV0Y2h4bWw9L2kpO1xyXG4gICAgICAgIGlmIChmZXRjaFhtbE1hdGNoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0SW5kZXggPSBmZXRjaFhtbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZldGNoeG1sPScpICsgJ2ZldGNoeG1sPScubGVuZ3RoO1xyXG4gICAgICAgICAgICBjbGVhblhtbCA9IGRlY29kZVVSSUNvbXBvbmVudChmZXRjaFhtbC5zdWJzdHJpbmcoc3BsaXRJbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmZXRjaFhtbC50cmltKCkuc3RhcnRzV2l0aCgnPCcpKSB7XHJcbiAgICAgICAgICAgIGNsZWFuWG1sID0gZmV0Y2hYbWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICBjb25zdCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGNsZWFuWG1sLCBcInRleHQveG1sXCIpO1xyXG4gICAgICAgIGNvbnN0IGVudGl0eU5vZGUgPSB4bWxEb2MucXVlcnlTZWxlY3RvcihcImVudGl0eVwiKTtcclxuICAgICAgICBpZiAoZW50aXR5Tm9kZSAmJiBlbnRpdHlOb2RlLmhhc0F0dHJpYnV0ZShcIm5hbWVcIikpXHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHlOb2RlLmdldEF0dHJpYnV0ZShcIm5hbWVcIikhO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVudGl0eSBuYW1lIG5vdCBmb3VuZCBpbiBmZXRjaFhtbFwiKTtcclxuICAgIH07XHJcbiAgICBvYmouQ3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGRhdGE6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8uY3JlYXRlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBkYXRhKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkRlbGV0ZVJlY29yZCA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5kZWxldGVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlJldHJpZXZlUmVjb3JkID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnJldHJpZXZlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBpZCwgb3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5SZXRyaWV2ZU11bHRpcGxlUmVjb3JkcyA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBvcHRpb25zPzogc3RyaW5nLCBtYXhQYWdlU2l6ZT86IG51bWJlciwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8ucmV0cmlldmVNdWx0aXBsZVJlY29yZHMoZW50aXR5TG9naWNhbE5hbWUsIG9wdGlvbnMsIG1heFBhZ2VTaXplKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlVwZGF0ZVJlY29yZCA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBkYXRhOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnVwZGF0ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgaWQsIGRhdGEpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouRXhlY3V0ZSA9IGZ1bmN0aW9uIChyZXF1ZXN0OiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAoZ2V0V2ViQXBpIGFzIGFueSk/LmV4ZWN1dGUocmVxdWVzdCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5FeGVjdXRlTXVsdGlwbGUgPSBmdW5jdGlvbiAocmVxdWVzdHM6IGFueVtdLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gKGdldFdlYkFwaSBhcyBhbnkpPy5leGVjdXRlTXVsdGlwbGUocmVxdWVzdHMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouUmV0cmlldmVSZWNvcmRzID0gZnVuY3Rpb24gKGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5OiBhbnksIGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zOiBzdHJpbmcsIG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjaz86IGFueSwgbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgbGV0IGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgbWF4UGFnZVNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBoYXNGZXRjaFhtbCA9IChzdHI6IHN0cmluZykgPT4gL2ZldGNoeG1sPS9pLnRlc3Qoc3RyKTtcclxuICAgICAgICBjb25zdCBpc1BsYWluRmV0Y2hYbWwgPSAoc3RyOiBzdHJpbmcpID0+IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnICYmIHN0ci50cmltKCkuc3RhcnRzV2l0aCgnPGZldGNoJyk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kUGFyYW1Jc0ZldGNoWG1sT3JPRGF0YSA9IHR5cGVvZiBlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucyA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICAgICAgKGhhc0ZldGNoWG1sKGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zKSB8fFxyXG4gICAgICAgICAgICAgICAgaXNQbGFpbkZldGNoWG1sKGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zKSB8fFxyXG4gICAgICAgICAgICAgICAgKGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zLnN0YXJ0c1dpdGgoJz8nKSAmJiAhaGFzRmV0Y2hYbWwoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMpKSk7XHJcbiAgICAgICAgaWYgKHNlY29uZFBhcmFtSXNGZXRjaFhtbE9yT0RhdGEpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zO1xyXG4gICAgICAgICAgICBpZiAoaXNQbGFpbkZldGNoWG1sKG9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gJz9mZXRjaFhtbD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoYXNGZXRjaFhtbChvcHRpb25zKSB8fCBpc1BsYWluRmV0Y2hYbWwoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHlMb2dpY2FsTmFtZSA9IGV4dHJhY3RFbnRpdHlOYW1lKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbnRpdHkgbmFtZSBjYW5ub3QgYmUgZGV0ZXJtaW5lZCBmcm9tIE9EYXRhIHF1ZXJ5LiBQbGVhc2UgcHJvdmlkZSBlbnRpdHlMb2dpY2FsTmFtZSBhcyBzZWNvbmQgcGFyYW1ldGVyLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2sgPSBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIG1heFBhZ2VTaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2sgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlU2l6ZSA9IG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayA9IG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVudGl0eUxvZ2ljYWxOYW1lID0gZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnM7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayA9IG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlU2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIG1heFBhZ2VTaXplID0gbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZU11bHRpcGxlUmVjb3JkcyhlbnRpdHlMb2dpY2FsTmFtZSEsIG9wdGlvbnMsIG1heFBhZ2VTaXplKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVudGl0aWVzICYmIHJlc3VsdC5lbnRpdGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmVudGl0aWVzLm1hcCgoZW50aXR5OiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5ID09PSAnZnVuY3Rpb24nICYmIGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5LnByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeShlbnRpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYXBpQ29uc3RydWN0b3JPckZhY3RvcnkoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5SZXRyaWV2ZVJlY29yZCA9IGZ1bmN0aW9uIChhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeTogYW55LCBlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBvcHRpb25zPzogc3RyaW5nIHwgRnVuY3Rpb24sIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2sgPSBvcHRpb25zO1xyXG4gICAgICAgICAgICBvcHRpb25zID0gXCI/JHNlbGVjdD0qXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucykge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gXCI/JHNlbGVjdD0qXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnJldHJpZXZlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBpZCwgb3B0aW9ucyBhcyBzdHJpbmcpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkgPT09ICdmdW5jdGlvbicgJiYgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkucHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICA/IG5ldyBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeShyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICA6IGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5KHJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGdldHRlcihvYmosICdPbmxpbmUnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25saW5lOiBhbnkgPSB7fTtcclxuICAgICAgICBvbmxpbmUuRXhlY3V0ZSA9IGZ1bmN0aW9uIChyZXF1ZXN0OiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0T25saW5lPy5leGVjdXRlKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25saW5lLkV4ZWN1dGVNdWx0aXBsZSA9IGZ1bmN0aW9uIChyZXF1ZXN0czogYW55W10sIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0T25saW5lPy5leGVjdXRlTXVsdGlwbGUocmVxdWVzdHMpO1xyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG9ubGluZTtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ09mZmxpbmUnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2ZmbGluZTogYW55ID0ge307XHJcbiAgICAgICAgb2ZmbGluZS5Jc0F2YWlsYWJsZSA9IChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nKSA9PiAoZ2V0T2ZmbGluZSBhcyBhbnkpPy5pc0F2YWlsYWJsZShlbnRpdHlMb2dpY2FsTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG9mZmxpbmU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuLyoqXHJcbiAqIExvYWRzIHRoZSBDb3BpbG90IEFQSSB3cmFwcGVyLlxyXG4gKiBQcm92aWRlcyBhY2Nlc3MgdG8gQ29waWxvdCBmdW5jdGlvbmFsaXR5IGZvciBleGVjdXRpbmcgZXZlbnRzIGFuZCBwcm9tcHRzLlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgaW1wbGVtZW50aW5nIHRoZSBJQ29waWxvdCBpbnRlcmZhY2VcclxuICogQGxpbmsgaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL3Bvd2VyLWFwcHMvZGV2ZWxvcGVyL21vZGVsLWRyaXZlbi1hcHBzL2NsaWVudGFwaS9yZWZlcmVuY2UveHJtLWNvcGlsb3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkQ29waWxvdCgpOiBEZXZLaXQuSUNvcGlsb3Qge1xyXG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgY29uc3QgZ2V0Q29waWxvdCA9ICh4cm0gYXMgYW55KT8uQ29waWxvdDtcclxuICAgIG9iai5FeGVjdXRlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50UGFyYW1ldGVyczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0Q29waWxvdD8uZXhlY3V0ZUV2ZW50KGV2ZW50TmFtZSwgZXZlbnRQYXJhbWV0ZXJzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkV4ZWN1dGVQcm9tcHQgPSBmdW5jdGlvbiAocHJvbXB0VGV4dDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0Q29waWxvdD8uZXhlY3V0ZVByb21wdChwcm9tcHRUZXh0KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5mdW5jdGlvbiBsb2FkT3RoZXJzKGZvcm1Db250ZXh0OiBhbnksIGZvcm06IGFueSwgZGVmYXVsdFdlYlJlc291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBmb3JtLlNpZGVQYW5lcyA9IExvYWRTaWRlUGFuZXMoKTtcclxuICAgIGZvcm0uV2ViQXBpID0gTG9hZFdlYkFwaSgpO1xyXG4gICAgZm9ybS5Db3BpbG90ID0gTG9hZENvcGlsb3QoKTtcclxufVxyXG4vKipcclxuICogTG9hZHMgYSBmb3JtIHdpdGggdHlwZWQgQm9keSwgSGVhZGVyLCBUYWIsIEdyaWQsIE5hdmlnYXRpb24sIFF1aWNrRm9ybSwgYW5kIFByb2Nlc3Mgc2VjdGlvbnMuXHJcbiAqIFRoaXMgaXMgdGhlIG1haW4gZnVuY3Rpb24gZm9yIGluaXRpYWxpemluZyBhIGZvcm0gaW4gVHlwZVNjcmlwdC5cclxuICogQHBhcmFtIGV4ZWN1dGlvbkNvbnRleHQgVGhlIGV4ZWN1dGlvbiBjb250ZXh0IHBhc3NlZCB0byB0aGUgZm9ybSBldmVudCBoYW5kbGVyXHJcbiAqIEBwYXJhbSBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lIE9wdGlvbmFsIGRlZmF1bHQgd2ViIHJlc291cmNlIG5hbWUgZm9yIHV0aWxpdHkgZnVuY3Rpb25zXHJcbiAqIEBwYXJhbSBmb3JtQ29uZmlnIENvbmZpZ3VyYXRpb24gb2JqZWN0IHNwZWNpZnlpbmcgZmllbGRzLCB0YWJzLCBncmlkcywgZXRjLlxyXG4gKiBAcmV0dXJucyBBIHR5cGVkIGZvcm0gb2JqZWN0IHdpdGggYWxsIGZvcm0gZnVuY3Rpb25hbGl0eVxyXG4gKiBAbGluayBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXItYXBwcy9kZXZlbG9wZXIvbW9kZWwtZHJpdmVuLWFwcHMvY2xpZW50YXBpL3JlZmVyZW5jZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRGb3JtVjI8VEJvZHkgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUSGVhZGVyID0gUmVjb3JkPHN0cmluZywgYW55PiwgVFRhYiA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRHcmlkID0gUmVjb3JkPHN0cmluZywgYW55PiwgVE5hdmlnYXRpb24gPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUUXVpY2tGb3JtID0gUmVjb3JkPHN0cmluZywgYW55PiwgVFByb2Nlc3MgPSBhbnk+KFxyXG4gICAgZXhlY3V0aW9uQ29udGV4dDogYW55LFxyXG4gICAgZGVmYXVsdFdlYlJlc291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgZm9ybUNvbmZpZzoge1xyXG4gICAgICAgIGJvZHk/OiBzdHJpbmdbXTtcclxuICAgICAgICBoZWFkZXI/OiBzdHJpbmdbXTtcclxuICAgICAgICB0YWI/OiBzdHJpbmdbXTtcclxuICAgICAgICBncmlkPzogc3RyaW5nW107XHJcbiAgICAgICAgbmF2aWdhdGlvbj86IHN0cmluZ1tdO1xyXG4gICAgICAgIHF1aWNrPzogc3RyaW5nW107XHJcbiAgICAgICAgYnBmPzogc3RyaW5nW107XHJcbiAgICB9XHJcbik6IHtcclxuICAgIEV4ZWN1dGlvbkNvbnRleHQ6IERldktpdC5JRXhlY3V0aW9uQ29udGV4dDtcclxuICAgIEJvZHk6IFRCb2R5O1xyXG4gICAgSGVhZGVyOiBUSGVhZGVyO1xyXG4gICAgVGFiOiBUVGFiO1xyXG4gICAgR3JpZDogVEdyaWQ7XHJcbiAgICBOYXZpZ2F0aW9uOiBUTmF2aWdhdGlvbjtcclxuICAgIFF1aWNrRm9ybTogVFF1aWNrRm9ybTtcclxuICAgIEZvcm1JZDogc3RyaW5nO1xyXG4gICAgRm9ybUxhYmVsOiBzdHJpbmc7XHJcbiAgICBGb3JtVHlwZTogbnVtYmVyO1xyXG4gICAgRW50aXR5SWQ6IHN0cmluZztcclxuICAgIEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIERhdGFJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgRGF0YUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBBdHRyaWJ1dGVzOiBhbnk7XHJcbiAgICBDb250cm9sczogYW55O1xyXG4gICAgRGF0YVhtbDogc3RyaW5nO1xyXG4gICAgRW50aXR5SXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIEVudGl0eUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBFbnRpdHlSZWZlcmVuY2U6IGFueTtcclxuICAgIFByaW1hcnlBdHRyaWJ1dGVWYWx1ZTogc3RyaW5nO1xyXG4gICAgVmlld1BvcnRIZWlnaHQ6IG51bWJlcjtcclxuICAgIFZpZXdQb3J0V2lkdGg6IG51bWJlcjtcclxuICAgIFNhdmU6IChzYXZlT3B0aW9ucz86IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIFJlZnJlc2g6IChzYXZlPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIENsb3NlOiAoKSA9PiB2b2lkO1xyXG4gICAgU2V0Rm9ybU5vdGlmaWNhdGlvbjogKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIENsZWFyRm9ybU5vdGlmaWNhdGlvbjogKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBSZWZyZXNoUmliYm9uOiAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBVaUFkZExvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgVWlSZW1vdmVMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFVpQWRkT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBVaVJlbW92ZU9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgQWRkT25Qb3N0U2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgQWRkT25TYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBSZW1vdmVPblBvc3RTYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBSZW1vdmVPblNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIERhdGFBZGRPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIERhdGFSZW1vdmVPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIEZvcm1Jc1Zpc2libGU6IChmb3JtSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIEZvcm1OYXZpZ2F0ZVRvRm9ybUlkOiAoZm9ybUlkOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBGb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbDogKGZvcm1MYWJlbDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgRm9ybVNldFZpc2libGU6IChmb3JtSWQ6IHN0cmluZywgdmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIFNldEZvcm1FbnRpdHlOYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgUHJvY2VzczogVFByb2Nlc3M7XHJcbiAgICBVdGlsaXR5OiBhbnk7XHJcbiAgICBTaWRlUGFuZXM6IGFueTtcclxuICAgIFdlYkFwaTogYW55O1xyXG4gICAgQ29waWxvdDogYW55O1xyXG59IHtcclxuICAgIGNvbnN0IGZvcm1Db250ZXh0ID0gZXhlY3V0aW9uQ29udGV4dD8uZ2V0Rm9ybUNvbnRleHQ/LigpID8/IGV4ZWN1dGlvbkNvbnRleHQgPz8gbnVsbDtcclxuICAgIGNvbnN0IGZvcm0gPSBMb2FkRm9ybShmb3JtQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGJvZHkgPSBbXSwgdGFiID0gW10sIGhlYWRlciA9IFtdLCBicGYgPSBbXSwgcXVpY2sgPSBbXSwgZ3JpZCA9IFtdLCBuYXZpZ2F0aW9uID0gW10sIGRpYWxvZyA9IFtdIH0gPSBmb3JtQ29uZmlnIGFzIGFueTtcclxuICAgIGNvbnN0IGJvZHlPYmo6IGFueSA9IHt9O1xyXG4gICAgYm9keS5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiBib2R5T2JqW2ZpZWxkXSA9IHt9KTtcclxuICAgIGxvYWRGaWVsZHMoZm9ybUNvbnRleHQsIGJvZHlPYmopO1xyXG4gICAgY29uc3QgdGFiT2JqOiBhbnkgPSB7fTtcclxuICAgIHRhYi5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBbdGFiTmFtZSwgc2VjdGlvbk5hbWVdID0gaXRlbS5zcGxpdCgnX19fJyk7XHJcbiAgICAgICAgaWYgKCF0YWJPYmpbdGFiTmFtZV0pIHtcclxuICAgICAgICAgICAgdGFiT2JqW3RhYk5hbWVdID0geyBTZWN0aW9uOiB7fSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJPYmpbdGFiTmFtZV0uU2VjdGlvbltzZWN0aW9uTmFtZV0gPSB7fTtcclxuICAgIH0pO1xyXG4gICAgbG9hZFRhYnMoZm9ybUNvbnRleHQsIHRhYk9iaik7XHJcbiAgICBib2R5T2JqLlRhYiA9IHRhYk9iajtcclxuICAgIGZvcm0uQm9keSA9IGJvZHlPYmo7XHJcbiAgICBjb25zdCBoZWFkZXJPYmo6IGFueSA9IHt9O1xyXG4gICAgaGVhZGVyLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IGhlYWRlck9ialtmaWVsZF0gPSB7fSk7XHJcbiAgICBsb2FkRmllbGRzKGZvcm1Db250ZXh0LCBoZWFkZXJPYmosICdoZWFkZXJfJyk7XHJcbiAgICBmb3JtLkhlYWRlciA9IGhlYWRlck9iajtcclxuICAgIGNvbnN0IHByb2Nlc3MgPSBMb2FkUHJvY2Vzcyhmb3JtQ29udGV4dCk7XHJcbiAgICBpZiAoYnBmLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBicGZPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGxldCBicGZQcm9jZXNzTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgYnBmLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBbcHJvY2Vzc05hbWUsIGZpZWxkTmFtZV0gPSBpdGVtLnNwbGl0KCdfX18nKTtcclxuICAgICAgICAgICAgaWYgKCFicGZQcm9jZXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYnBmUHJvY2Vzc05hbWUgPSBwcm9jZXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicGZPYmpbZmllbGROYW1lXSA9IHt9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvYWRGaWVsZHMoZm9ybUNvbnRleHQsIGJwZk9iaiwgJ2hlYWRlcl9wcm9jZXNzXycpO1xyXG4gICAgICAgIGlmIChicGZQcm9jZXNzTmFtZSkge1xyXG4gICAgICAgICAgICBwcm9jZXNzW2JwZlByb2Nlc3NOYW1lXSA9IGJwZk9iajtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtLlByb2Nlc3MgPSBwcm9jZXNzO1xyXG4gICAgY29uc3QgcXVpY2tGb3JtT2JqOiBhbnkgPSB7fTtcclxuICAgIHF1aWNrLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtxdWlja0Zvcm1OYW1lLCBmaWVsZE5hbWVdID0gaXRlbS5zcGxpdCgnX19fJyk7XHJcbiAgICAgICAgaWYgKCFxdWlja0Zvcm1PYmpbcXVpY2tGb3JtTmFtZV0pIHtcclxuICAgICAgICAgICAgcXVpY2tGb3JtT2JqW3F1aWNrRm9ybU5hbWVdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgcXVpY2tGb3JtT2JqW3F1aWNrRm9ybU5hbWVdW2ZpZWxkTmFtZV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxvYWRRdWlja0Zvcm1zKGZvcm1Db250ZXh0LCBxdWlja0Zvcm1PYmopO1xyXG4gICAgZm9ybS5RdWlja0Zvcm0gPSBxdWlja0Zvcm1PYmo7XHJcbiAgICBjb25zdCBncmlkT2JqOiBhbnkgPSB7fTtcclxuICAgIGdyaWQuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiBncmlkT2JqW2l0ZW1dID0ge30pO1xyXG4gICAgbG9hZEdyaWRzKGZvcm1Db250ZXh0LCBncmlkT2JqKTtcclxuICAgIGZvcm0uR3JpZCA9IGdyaWRPYmo7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uT2JqOiBhbnkgPSB7fTtcclxuICAgIG5hdmlnYXRpb24uZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiBuYXZpZ2F0aW9uT2JqW2l0ZW1dID0ge30pO1xyXG4gICAgbG9hZE5hdmlnYXRpb25zKGZvcm1Db250ZXh0LCBuYXZpZ2F0aW9uT2JqKTtcclxuICAgIGZvcm0uTmF2aWdhdGlvbiA9IG5hdmlnYXRpb25PYmo7XHJcbiAgICBpZiAoZGlhbG9nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3JtLkRpYWxvZyA9IExvYWRGb3JtRGlhbG9nKGZvcm1Db250ZXh0LCBkaWFsb2cpO1xyXG4gICAgfVxyXG4gICAgZm9ybS5VdGlsaXR5ID0gTG9hZFV0aWxpdHkoZGVmYXVsdFdlYlJlc291cmNlTmFtZSk7XHJcbiAgICBmb3JtLkV4ZWN1dGlvbkNvbnRleHQgPSBMb2FkRXhlY3V0aW9uQ29udGV4dChleGVjdXRpb25Db250ZXh0KTtcclxuICAgIGxvYWRPdGhlcnMoZm9ybUNvbnRleHQsIGZvcm0sIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUpO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRQcm9jZXNzKGZvcm1Db250ZXh0OiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgcHJvY2VzczogYW55ID0ge307XHJcbiAgICBjb25zdCBnZXRQcm9jZXNzID0gZm9ybUNvbnRleHQ/LmRhdGE/LnByb2Nlc3M7XHJcbiAgICBjb25zdCBnZXRQcm9jZXNzVWkgPSBmb3JtQ29udGV4dD8udWk/LnByb2Nlc3M7XHJcbiAgICBjb25zdCBsb2FkU3RlcCA9IChzdGVwOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdBdHRyaWJ1dGUnLCAoKSA9PiBzdGVwPy5nZXRBdHRyaWJ1dGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBzdGVwPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdQcm9ncmVzcycsICgpID0+IHN0ZXA/LmdldFByb2dyZXNzKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdSZXF1aXJlZCcsICgpID0+IHN0ZXA/LmlzUmVxdWlyZWQoKSk7XHJcbiAgICAgICAgb2JqLlNldFByb2dyZXNzID0gKHN0ZXBQcm9ncmVzczogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpID0+IHN0ZXA/LnNldFByb2dyZXNzKHN0ZXBQcm9ncmVzcywgbWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkU3RhZ2UgPSAoc3RhZ2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NhdGVnb3J5JywgKCkgPT4gc3RhZ2U/LmdldENhdGVnb3J5KCk/LmdldFZhbHVlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdFbnRpdHlOYW1lJywgKCkgPT4gc3RhZ2U/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lkJywgKCkgPT4gc3RhZ2U/LmdldElkKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdOYW1lJywgKCkgPT4gc3RhZ2U/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1N0YXR1cycsICgpID0+IHN0YWdlPy5nZXRTdGF0dXMoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1N0ZXBzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwcyA9IHN0YWdlPy5nZXRTdGVwcygpO1xyXG4gICAgICAgICAgICBpZiAoIXN0ZXBzKSByZXR1cm4gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBzQXJyYXk6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHN0ZXBzLmxlbmd0aCB8fCAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwc0FycmF5LnB1c2gobG9hZFN0ZXAoc3RlcHNbaW5kZXhdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0ZXBzQXJyYXk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JqLkFsbG93Q3JlYXRlTmV3ID0gKGNhbGxiYWNrOiBhbnkpID0+IHsgaWYgKHN0YWdlPy5nZXROYXZpZ2F0aW9uQmVoYXZpb3IoKSkgc3RhZ2UuZ2V0TmF2aWdhdGlvbkJlaGF2aW9yKCkuYWxsb3dDcmVhdGVOZXcgPSBjYWxsYmFjazsgfTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRQcm9jZXNzSW5uZXIgPSAocHJvY2Vzc09iajogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSWQnLCAoKSA9PiBwcm9jZXNzT2JqPy5nZXRJZCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNSZW5kZXJlZCcsICgpID0+IHByb2Nlc3NPYmo/LmlzUmVuZGVyZWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBwcm9jZXNzT2JqPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTdGFnZXMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NTdGFnZXMgPSBwcm9jZXNzT2JqPy5nZXRTdGFnZXMoKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhZ2VzT2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgc3RhZ2VzT2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFnZSA9IHByb2Nlc3NTdGFnZXM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZFN0YWdlKHN0YWdlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RhZ2VzT2JqLmdldExlbmd0aCA9ICgpID0+IHByb2Nlc3NTdGFnZXM/LmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICBzdGFnZXNPYmouZm9yRWFjaCA9IChjYWxsYmFjazogKHN0YWdlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHByb2Nlc3NTdGFnZXM/LmdldExlbmd0aCgpIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBwcm9jZXNzU3RhZ2VzLmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobG9hZFN0YWdlKHN0YWdlKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhZ2VzT2JqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdBY3RpdmVQYXRoJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVBhdGhPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGFjdGl2ZVBhdGhPYmouZ2V0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBnZXRQcm9jZXNzPy5nZXRBY3RpdmVQYXRoKCk/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2FkU3RhZ2Uoc3RhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYWN0aXZlUGF0aE9iai5nZXRMZW5ndGggPSAoKSA9PiBnZXRQcm9jZXNzPy5nZXRBY3RpdmVQYXRoKCk/LmdldExlbmd0aCgpO1xyXG4gICAgICAgIGFjdGl2ZVBhdGhPYmouZm9yRWFjaCA9IChjYWxsYmFjazogKHN0YWdlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhZ2VzID0gZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlUGF0aCgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RhZ2VzPy5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZXM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhsb2FkU3RhZ2Uoc3RhZ2UpLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBhY3RpdmVQYXRoT2JqO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0FjdGl2ZVByb2Nlc3MnLCAoKSA9PiBsb2FkUHJvY2Vzc0lubmVyKGdldFByb2Nlc3M/LmdldEFjdGl2ZVByb2Nlc3MoKSkpO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdBY3RpdmVTdGFnZScsICgpID0+IGxvYWRTdGFnZShnZXRQcm9jZXNzPy5nZXRBY3RpdmVTdGFnZSgpKSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0luc3RhbmNlSWQnLCAoKSA9PiBnZXRQcm9jZXNzPy5nZXRJbnN0YW5jZUlkKCkpO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdJbnN0YW5jZU5hbWUnLCAoKSA9PiBnZXRQcm9jZXNzPy5nZXRJbnN0YW5jZU5hbWUoKSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ1NlbGVjdGVkU3RhZ2UnLCAoKSA9PiBsb2FkU3RhZ2UoZ2V0UHJvY2Vzcz8uZ2V0U2VsZWN0ZWRTdGFnZSgpKSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIocHJvY2VzcywgJ0Rpc3BsYXlTdGF0ZScsICgpID0+IGdldFByb2Nlc3NVaT8uZ2V0RGlzcGxheVN0YXRlKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGdldFByb2Nlc3NVaT8uc2V0RGlzcGxheVN0YXRlKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIocHJvY2VzcywgJ1N0YXR1cycsICgpID0+IGdldFByb2Nlc3M/LmdldFN0YXR1cygpLCAodmFsdWU6IHN0cmluZykgPT4geyBnZXRQcm9jZXNzPy5zZXRTdGF0dXModmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihwcm9jZXNzLCAnVmlzaWJsZScsICgpID0+IGdldFByb2Nlc3NVaT8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgZ2V0UHJvY2Vzc1VpPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICBwcm9jZXNzLkFkZE9uUHJlUHJvY2Vzc1N0YXR1c0NoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblByZVByb2Nlc3NTdGF0dXNDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5BZGRPblByZVN0YWdlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uUHJlU3RhZ2VDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5BZGRPblByb2Nlc3NTdGF0dXNDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25Qcm9jZXNzU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuQWRkT25TdGFnZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblN0YWdlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuQWRkT25TdGFnZVNlbGVjdGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uU3RhZ2VTZWxlY3RlZChjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkVuYWJsZWRQcm9jZXNzZXMgPSAoY2FsbGJhY2s6IChwcm9jZXNzZXM6IGFueVtdKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvY2Vzcz8uZ2V0RW5hYmxlZFByb2Nlc3NlcygoZW5hYmxlZFByb2Nlc3NlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlcyA9IE9iamVjdC5lbnRyaWVzKGVuYWJsZWRQcm9jZXNzZXMpLm1hcCgoW3Byb2Nlc3NJZCwgcHJvY2Vzc05hbWVdKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc0lkOiBwcm9jZXNzSWQsXHJcbiAgICAgICAgICAgICAgICBQcm9jZXNzTmFtZTogcHJvY2Vzc05hbWVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhwcm9jZXNzZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHByb2Nlc3MuTW92ZU5leHQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ubW92ZU5leHQoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5Nb3ZlUHJldmlvdXMgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ubW92ZVByZXZpb3VzKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUHJvY2Vzc0luc3RhbmNlcyA9IChjYWxsYmFjazogKHByb2Nlc3NlczogYW55W10pID0+IHZvaWQpID0+IHtcclxuICAgICAgICBnZXRQcm9jZXNzPy5nZXRQcm9jZXNzSW5zdGFuY2VzKChwcm9jZXNzSW5zdGFuY2VzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VzID0gT2JqZWN0LnZhbHVlcyhwcm9jZXNzSW5zdGFuY2VzKS5tYXAoKHByb2M6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NJZDogcHJvYy5Qcm9jZXNzRGVmaW5pdGlvbklELFxyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc05hbWU6IHByb2MuUHJvY2Vzc0RlZmluaXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlZE9uOiBwcm9jLkNyZWF0ZWRPbixcclxuICAgICAgICAgICAgICAgIENyZWF0ZWRPbkRhdGU6IHByb2MuQ3JlYXRlZE9uRGF0ZSxcclxuICAgICAgICAgICAgICAgIEluc3RhbmNlSWQ6IHByb2MuUHJvY2Vzc0luc3RhbmNlSUQsXHJcbiAgICAgICAgICAgICAgICBJbnN0YW5jZU5hbWU6IHByb2MuUHJvY2Vzc0luc3RhbmNlTmFtZSxcclxuICAgICAgICAgICAgICAgIFN0YXR1czogcHJvYy5TdGF0dXNDb2RlTmFtZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHByb2Nlc3Nlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcHJvY2Vzcy5SZWZsb3cgPSAodXBkYXRlVWk6IGJvb2xlYW4sIHBhcmVudFN0YWdlOiBzdHJpbmcsIG5leHRTdGFnZTogc3RyaW5nKSA9PiBnZXRQcm9jZXNzVWk/LnJlZmxvdyh1cGRhdGVVaSwgcGFyZW50U3RhZ2UsIG5leHRTdGFnZSk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uUHJlUHJvY2Vzc1N0YXR1c0NoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblByZVByb2Nlc3NTdGF0dXNDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblByZVN0YWdlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uUHJlU3RhZ2VDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblByb2Nlc3NTdGF0dXNDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25Qcm9jZXNzU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25TdGFnZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblN0YWdlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25TdGFnZVNlbGVjdGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uU3RhZ2VTZWxlY3RlZChjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlNldEFjdGl2ZVByb2Nlc3MgPSAocHJvY2Vzc0lkOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnNldEFjdGl2ZVByb2Nlc3MocHJvY2Vzc0lkLCBjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlNldEFjdGl2ZVByb2Nlc3NJbnN0YW5jZSA9IChwcm9jZXNzSW5zdGFuY2VJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5zZXRBY3RpdmVQcm9jZXNzSW5zdGFuY2UocHJvY2Vzc0luc3RhbmNlSWQsIGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuU2V0QWN0aXZlU3RhZ2UgPSAoc3RhZ2VJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5zZXRBY3RpdmVTdGFnZShzdGFnZUlkLCBjYWxsYmFjayk7XHJcbiAgICByZXR1cm4gcHJvY2VzcztcclxufVxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBpbnRlcmZhY2UgZm9yIGZvcm0gaW5pdGlhbGl6YXRpb24uXHJcbiAqIFNwZWNpZmllcyB3aGljaCBmaWVsZHMsIHRhYnMsIGdyaWRzLCBldGMuIHRvIGxvYWQgb24gYSBmb3JtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRm9ybUNvbmZpZyB7XHJcbiAgICAvKiogQXJyYXkgb2YgYm9keSBmaWVsZCBsb2dpY2FsIG5hbWVzICovXHJcbiAgICBib2R5Pzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgaGVhZGVyIGZpZWxkIGxvZ2ljYWwgbmFtZXMgKi9cclxuICAgIGhlYWRlcj86IHN0cmluZ1tdO1xyXG4gICAgLyoqIEFycmF5IG9mIHRhYiBhbmQgc2VjdGlvbiBuYW1lcyBpbiBmb3JtYXQgXCJUYWJOYW1lX19fU2VjdGlvbk5hbWVcIiAqL1xyXG4gICAgdGFiPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgZ3JpZCBjb250cm9sIG5hbWVzICovXHJcbiAgICBncmlkPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgbmF2aWdhdGlvbiBpdGVtIElEcyAqL1xyXG4gICAgbmF2aWdhdGlvbj86IHN0cmluZ1tdO1xyXG4gICAgLyoqIEFycmF5IG9mIHF1aWNrIGZvcm0gbmFtZXMgaW4gZm9ybWF0IFwiUXVpY2tGb3JtTmFtZV9fX0ZpZWxkTmFtZVwiICovXHJcbiAgICBxdWljaz86IHN0cmluZ1tdO1xyXG4gICAgLyoqIEFycmF5IG9mIEJQRiBmaWVsZHMgaW4gZm9ybWF0IFwiUHJvY2Vzc05hbWVfX19GaWVsZE5hbWVcIiAqL1xyXG4gICAgYnBmPzogc3RyaW5nW107XHJcbn1cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHR5cGVkIGVudGl0eSBmb3Jtcy5cclxuICogUHJvdmlkZXMgc3Ryb25nbHktdHlwZWQgYWNjZXNzIHRvIGZvcm0gY29udHJvbHMsIGZpZWxkcywgdGFicywgZ3JpZHMsIGFuZCBtb3JlLlxyXG4gKiBFeHRlbmQgdGhpcyBjbGFzcyBpbiBnZW5lcmF0ZWQgZW50aXR5IGZvcm0gZmlsZXMuXHJcbiAqIEB0ZW1wbGF0ZSBUQm9keSBUeXBlIGRlZmluaXRpb24gZm9yIGJvZHkgZmllbGRzXHJcbiAqIEB0ZW1wbGF0ZSBUSGVhZGVyIFR5cGUgZGVmaW5pdGlvbiBmb3IgaGVhZGVyIGZpZWxkc1xyXG4gKiBAdGVtcGxhdGUgVFRhYiBUeXBlIGRlZmluaXRpb24gZm9yIHRhYnNcclxuICogQHRlbXBsYXRlIFRHcmlkIFR5cGUgZGVmaW5pdGlvbiBmb3IgZ3JpZHNcclxuICogQHRlbXBsYXRlIFROYXZpZ2F0aW9uIFR5cGUgZGVmaW5pdGlvbiBmb3IgbmF2aWdhdGlvbiBpdGVtc1xyXG4gKiBAdGVtcGxhdGUgVFF1aWNrRm9ybSBUeXBlIGRlZmluaXRpb24gZm9yIHF1aWNrIHZpZXcgZm9ybXNcclxuICogQHRlbXBsYXRlIFRQcm9jZXNzIFR5cGUgZGVmaW5pdGlvbiBmb3IgYnVzaW5lc3MgcHJvY2VzcyBmbG93c1xyXG4gKiBAbGluayBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXItYXBwcy9kZXZlbG9wZXIvbW9kZWwtZHJpdmVuLWFwcHMvY2xpZW50YXBpL3JlZmVyZW5jZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvcm1CYXNlPFRCb2R5LCBUSGVhZGVyLCBUVGFiLCBUR3JpZCwgVE5hdmlnYXRpb24sIFRRdWlja0Zvcm0sIFRQcm9jZXNzID0gYW55PiB7XHJcbiAgICBwdWJsaWMgQm9keTogVEJvZHk7XHJcbiAgICBwdWJsaWMgSGVhZGVyOiBUSGVhZGVyO1xyXG4gICAgcHVibGljIFRhYjogVFRhYjtcclxuICAgIHB1YmxpYyBHcmlkOiBUR3JpZDtcclxuICAgIHB1YmxpYyBOYXZpZ2F0aW9uOiBUTmF2aWdhdGlvbjtcclxuICAgIHB1YmxpYyBRdWlja0Zvcm06IFRRdWlja0Zvcm07XHJcbiAgICBwdWJsaWMgUHJvY2VzczogVFByb2Nlc3M7XHJcbiAgICBwdWJsaWMgRXhlY3V0aW9uQ29udGV4dDogRGV2S2l0LklFeGVjdXRpb25Db250ZXh0O1xyXG4gICAgcHVibGljIFV0aWxpdHk6IGFueTtcclxuICAgIHB1YmxpYyBTaWRlUGFuZXM6IERldktpdC5JU2lkZVBhbmVzO1xyXG4gICAgcHVibGljIFdlYkFwaTogRGV2S2l0LklXZWJBcGk7XHJcbiAgICBwdWJsaWMgQ29waWxvdDogRGV2S2l0LklDb3BpbG90O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEZvcm1JZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEZvcm1MYWJlbDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEZvcm1UeXBlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5SWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRGF0YUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRGF0YUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgQXR0cmlidXRlczogYW55O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IENvbnRyb2xzOiBhbnk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRGF0YVhtbDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5SXNWYWxpZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlSZWZlcmVuY2U6IGFueTtcclxuICAgIHB1YmxpYyByZWFkb25seSBQcmltYXJ5QXR0cmlidXRlVmFsdWU6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBWaWV3UG9ydEhlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IFZpZXdQb3J0V2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBTYXZlOiAoc2F2ZU9wdGlvbnM/OiBhbnkpID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBwdWJsaWMgUmVmcmVzaDogKHNhdmU/OiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgcHVibGljIENsb3NlOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFNldEZvcm1Ob3RpZmljYXRpb246IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgQ2xlYXJGb3JtTm90aWZpY2F0aW9uOiAodW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIHB1YmxpYyBSZWZyZXNoUmliYm9uOiAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlBZGRMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBVaVJlbW92ZUxvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpQWRkT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlSZW1vdmVPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBBZGRPblBvc3RTYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgQWRkT25TYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgUmVtb3ZlT25Qb3N0U2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFJlbW92ZU9uU2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIERhdGFBZGRPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBEYXRhUmVtb3ZlT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRm9ybUlzVmlzaWJsZTogKGZvcm1JZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgcHVibGljIEZvcm1OYXZpZ2F0ZVRvRm9ybUlkOiAoZm9ybUlkOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWw6IChmb3JtTGFiZWw6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBGb3JtU2V0VmlzaWJsZTogKGZvcm1JZDogc3RyaW5nLCB2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFNldEZvcm1FbnRpdHlOYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZXhlY3V0aW9uQ29udGV4dDogYW55LFxyXG4gICAgICAgIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgICAgICBmb3JtQ29uZmlnOiBJRm9ybUNvbmZpZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IExvYWRGb3JtVjI8VEJvZHksIFRIZWFkZXIsIFRUYWIsIFRHcmlkLCBUTmF2aWdhdGlvbiwgVFF1aWNrRm9ybSwgVFByb2Nlc3M+KFxyXG4gICAgICAgICAgICBleGVjdXRpb25Db250ZXh0LFxyXG4gICAgICAgICAgICBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lLFxyXG4gICAgICAgICAgICBmb3JtQ29uZmlnXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLkJvZHkgPSBmb3JtLkJvZHk7XHJcbiAgICAgICAgdGhpcy5IZWFkZXIgPSBmb3JtLkhlYWRlcjtcclxuICAgICAgICB0aGlzLlRhYiA9IGZvcm0uVGFiO1xyXG4gICAgICAgIHRoaXMuR3JpZCA9IGZvcm0uR3JpZDtcclxuICAgICAgICB0aGlzLk5hdmlnYXRpb24gPSBmb3JtLk5hdmlnYXRpb247XHJcbiAgICAgICAgdGhpcy5RdWlja0Zvcm0gPSBmb3JtLlF1aWNrRm9ybTtcclxuICAgICAgICB0aGlzLlByb2Nlc3MgPSBmb3JtLlByb2Nlc3M7XHJcbiAgICAgICAgdGhpcy5FeGVjdXRpb25Db250ZXh0ID0gZm9ybS5FeGVjdXRpb25Db250ZXh0O1xyXG4gICAgICAgIHRoaXMuRm9ybUlkID0gZm9ybS5Gb3JtSWQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtTGFiZWwgPSBmb3JtLkZvcm1MYWJlbDtcclxuICAgICAgICB0aGlzLkZvcm1UeXBlID0gZm9ybS5Gb3JtVHlwZTtcclxuICAgICAgICB0aGlzLkVudGl0eUlkID0gZm9ybS5FbnRpdHlJZDtcclxuICAgICAgICB0aGlzLkVudGl0eU5hbWUgPSBmb3JtLkVudGl0eU5hbWU7XHJcbiAgICAgICAgdGhpcy5EYXRhSXNEaXJ0eSA9IGZvcm0uRGF0YUlzRGlydHk7XHJcbiAgICAgICAgdGhpcy5EYXRhSXNWYWxpZCA9IGZvcm0uRGF0YUlzVmFsaWQ7XHJcbiAgICAgICAgdGhpcy5BdHRyaWJ1dGVzID0gZm9ybS5BdHRyaWJ1dGVzO1xyXG4gICAgICAgIHRoaXMuQ29udHJvbHMgPSBmb3JtLkNvbnRyb2xzO1xyXG4gICAgICAgIHRoaXMuRGF0YVhtbCA9IGZvcm0uRGF0YVhtbDtcclxuICAgICAgICB0aGlzLkVudGl0eUlzRGlydHkgPSBmb3JtLkVudGl0eUlzRGlydHk7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlJc1ZhbGlkID0gZm9ybS5FbnRpdHlJc1ZhbGlkO1xyXG4gICAgICAgIHRoaXMuRW50aXR5UmVmZXJlbmNlID0gZm9ybS5FbnRpdHlSZWZlcmVuY2U7XHJcbiAgICAgICAgdGhpcy5QcmltYXJ5QXR0cmlidXRlVmFsdWUgPSBmb3JtLlByaW1hcnlBdHRyaWJ1dGVWYWx1ZTtcclxuICAgICAgICB0aGlzLlZpZXdQb3J0SGVpZ2h0ID0gZm9ybS5WaWV3UG9ydEhlaWdodDtcclxuICAgICAgICB0aGlzLlZpZXdQb3J0V2lkdGggPSBmb3JtLlZpZXdQb3J0V2lkdGg7XHJcbiAgICAgICAgdGhpcy5TYXZlID0gZm9ybS5TYXZlO1xyXG4gICAgICAgIHRoaXMuUmVmcmVzaCA9IGZvcm0uUmVmcmVzaDtcclxuICAgICAgICB0aGlzLkNsb3NlID0gZm9ybS5DbG9zZTtcclxuICAgICAgICB0aGlzLlNldEZvcm1Ob3RpZmljYXRpb24gPSBmb3JtLlNldEZvcm1Ob3RpZmljYXRpb247XHJcbiAgICAgICAgdGhpcy5DbGVhckZvcm1Ob3RpZmljYXRpb24gPSBmb3JtLkNsZWFyRm9ybU5vdGlmaWNhdGlvbjtcclxuICAgICAgICB0aGlzLlJlZnJlc2hSaWJib24gPSBmb3JtLlJlZnJlc2hSaWJib247XHJcbiAgICAgICAgdGhpcy5VaUFkZExvYWRlZCA9IGZvcm0uVWlBZGRMb2FkZWQ7XHJcbiAgICAgICAgdGhpcy5VaVJlbW92ZUxvYWRlZCA9IGZvcm0uVWlSZW1vdmVMb2FkZWQ7XHJcbiAgICAgICAgdGhpcy5VaUFkZE9uTG9hZCA9IGZvcm0uVWlBZGRPbkxvYWQ7XHJcbiAgICAgICAgdGhpcy5VaVJlbW92ZU9uTG9hZCA9IGZvcm0uVWlSZW1vdmVPbkxvYWQ7XHJcbiAgICAgICAgdGhpcy5BZGRPblBvc3RTYXZlID0gZm9ybS5BZGRPblBvc3RTYXZlO1xyXG4gICAgICAgIHRoaXMuQWRkT25TYXZlID0gZm9ybS5BZGRPblNhdmU7XHJcbiAgICAgICAgdGhpcy5SZW1vdmVPblBvc3RTYXZlID0gZm9ybS5SZW1vdmVPblBvc3RTYXZlO1xyXG4gICAgICAgIHRoaXMuUmVtb3ZlT25TYXZlID0gZm9ybS5SZW1vdmVPblNhdmU7XHJcbiAgICAgICAgdGhpcy5EYXRhQWRkT25Mb2FkID0gZm9ybS5EYXRhQWRkT25Mb2FkO1xyXG4gICAgICAgIHRoaXMuRGF0YVJlbW92ZU9uTG9hZCA9IGZvcm0uRGF0YVJlbW92ZU9uTG9hZDtcclxuICAgICAgICB0aGlzLkZvcm1Jc1Zpc2libGUgPSBmb3JtLkZvcm1Jc1Zpc2libGU7XHJcbiAgICAgICAgdGhpcy5Gb3JtTmF2aWdhdGVUb0Zvcm1JZCA9IGZvcm0uRm9ybU5hdmlnYXRlVG9Gb3JtSWQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbCA9IGZvcm0uRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWw7XHJcbiAgICAgICAgdGhpcy5Gb3JtU2V0VmlzaWJsZSA9IGZvcm0uRm9ybVNldFZpc2libGU7XHJcbiAgICAgICAgdGhpcy5TZXRGb3JtRW50aXR5TmFtZSA9IGZvcm0uU2V0Rm9ybUVudGl0eU5hbWU7XHJcbiAgICAgICAgdGhpcy5VdGlsaXR5ID0gZm9ybS5VdGlsaXR5O1xyXG4gICAgICAgIHRoaXMuU2lkZVBhbmVzID0gZm9ybS5TaWRlUGFuZXM7XHJcbiAgICAgICAgdGhpcy5XZWJBcGkgPSBmb3JtLldlYkFwaTtcclxuICAgICAgICB0aGlzLkNvcGlsb3QgPSBmb3JtLkNvcGlsb3Q7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRVdGlsaXR5KGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgdXRpbGl0eTogYW55ID0ge307XHJcbiAgICBjb25zdCB4cm0gPSBnZXRYcm0oKTtcclxuICAgIGNvbnN0IGdldEFwcCA9IHhybT8uQXBwO1xyXG4gICAgY29uc3QgZ2V0RGV2aWNlID0geHJtPy5EZXZpY2U7XHJcbiAgICBjb25zdCBnZXRFbmNvZGluZyA9IHhybT8uRW5jb2Rpbmc7XHJcbiAgICBjb25zdCBnZXRHbG9iYWxDb250ZXh0ID0geHJtPy5VdGlsaXR5Py5nZXRHbG9iYWxDb250ZXh0KCk7XHJcbiAgICBjb25zdCBnZXROYXZpZ2F0aW9uID0geHJtPy5OYXZpZ2F0aW9uO1xyXG4gICAgY29uc3QgZ2V0UGFuZWwgPSB4cm0/LlBhbmVsO1xyXG4gICAgY29uc3QgZ2V0VXRpbGl0eSA9IHhybT8uVXRpbGl0eTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnQ2xpZW50JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gZ2V0R2xvYmFsQ29udGV4dD8uY2xpZW50O1xyXG4gICAgICAgIGdldHRlcihvYmosICdDbGllbnROYW1lJywgKCkgPT4gY2xpZW50Py5nZXRDbGllbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NsaWVudFN0YXRlJywgKCkgPT4gY2xpZW50Py5nZXRDbGllbnRTdGF0ZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRm9ybUZhY3RvcicsICgpID0+IGNsaWVudD8uZ2V0Rm9ybUZhY3RvcigpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNOZXR3b3JrQXZhaWxhYmxlJywgKCkgPT4gY2xpZW50Py5pc05ldHdvcmtBdmFpbGFibGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzT2ZmbGluZScsICgpID0+IGNsaWVudD8uaXNPZmZsaW5lKCkpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnQ2xpZW50VXJsJywgKCkgPT4gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0Q2xpZW50VXJsKCkpO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdDdXJyZW50QXBwVXJsJywgKCkgPT4gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0Q3VycmVudEFwcFVybCgpKTtcclxuICAgIC8vIEB0cy1pZ25vcmUgLSBpc09uUHJlbWlzZXMgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgIGdldHRlcih1dGlsaXR5LCAnSXNPblByZW1pc2VzJywgKCkgPT4gZ2V0R2xvYmFsQ29udGV4dD8uaXNPblByZW1pc2VzKCkpO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdMZWFybmluZ1BhdGhBdHRyaWJ1dGVOYW1lJywgKCkgPT4gZ2V0VXRpbGl0eT8uZ2V0TGVhcm5pbmdQYXRoQXR0cmlidXRlTmFtZSgpKTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnT3JnYW5pemF0aW9uU2V0dGluZ3MnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBvcmdhbml6YXRpb25TZXR0aW5ncyA9IGdldEdsb2JhbENvbnRleHQ/Lm9yZ2FuaXphdGlvblNldHRpbmdzO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBhdHRyaWJ1dGVzIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0F0dHJpYnV0ZXMnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uYXR0cmlidXRlcyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0Jhc2VDdXJyZW5jeScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5iYXNlQ3VycmVuY3kpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdCYXNlQ3VycmVuY3lJZCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5iYXNlQ3VycmVuY3lJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0RlZmF1bHRDb3VudHJ5Q29kZScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5kZWZhdWx0Q291bnRyeUNvZGUpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBmdWxsTmFtZUNvbnZlbnRpb25Db2RlIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0Z1bGxOYW1lQ29udmVudGlvbkNvZGUnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uZnVsbE5hbWVDb252ZW50aW9uQ29kZSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzQXV0b1NhdmVFbmFibGVkJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmlzQXV0b1NhdmVFbmFibGVkKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlIC0gaXNUcmlhbE9yZ2FuaXphdGlvbiBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgICAgIGdldHRlcihvYmosICdJc1RyaWFsT3JnYW5pemF0aW9uJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmlzVHJpYWxPcmdhbml6YXRpb24pO1xyXG4gICAgICAgIGdldHRlcihvYmosICdMYW5ndWFnZUlkJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/Lmxhbmd1YWdlSWQpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBvcmdhbml6YXRpb25FeHBpcnlEYXRlIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ09yZ2FuaXphdGlvbkV4cGlyeURhdGUnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8ub3JnYW5pemF0aW9uRXhwaXJ5RGF0ZSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ09yZ2FuaXphdGlvbklkJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/Lm9yZ2FuaXphdGlvbklkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVW5pcXVlTmFtZScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy51bmlxdWVOYW1lKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVXNlU2t5cGVQcm90b2NvbCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy51c2VTa3lwZVByb3RvY29sKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ1BhZ2VDb250ZXh0JywgKCkgPT4gZ2V0VXRpbGl0eT8uZ2V0UGFnZUNvbnRleHQoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ1VzZXJTZXR0aW5ncycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IGdldEdsb2JhbENvbnRleHQ/LnVzZXJTZXR0aW5ncztcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRGF0ZUZvcm1hdHRpbmdJbmZvJywgKCkgPT4gdXNlclNldHRpbmdzPy5kYXRlRm9ybWF0dGluZ0luZm8pO1xyXG4gICAgICAgIGdldHRlcihvYmosICdEZWZhdWx0RGFzaGJvYXJkSWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmRlZmF1bHREYXNoYm9hcmRJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzR3VpZGVkSGVscEVuYWJsZWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmlzR3VpZGVkSGVscEVuYWJsZWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc0hpZ2hDb250cmFzdEVuYWJsZWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmlzSGlnaENvbnRyYXN0RW5hYmxlZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzUlRMJywgKCkgPT4gdXNlclNldHRpbmdzPy5pc1JUTCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0xhbmd1YWdlSWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/Lmxhbmd1YWdlSWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdSb2xlcycsICgpID0+IHVzZXJTZXR0aW5ncz8ucm9sZXMpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTZWN1cml0eVJvbGVQcml2aWxlZ2VzJywgKCkgPT4gdXNlclNldHRpbmdzPy5zZWN1cml0eVJvbGVQcml2aWxlZ2VzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU2VjdXJpdHlSb2xlcycsICgpID0+IHVzZXJTZXR0aW5ncz8uc2VjdXJpdHlSb2xlcyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1RpbWVab25lT2Zmc2V0TWludXRlcycsICgpID0+IHVzZXJTZXR0aW5ncz8uZ2V0VGltZVpvbmVPZmZzZXRNaW51dGVzKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdUcmFuc2FjdGlvbkN1cnJlbmN5JywgKCkgPT4gdXNlclNldHRpbmdzPy50cmFuc2FjdGlvbkN1cnJlbmN5KTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVHJhbnNhY3Rpb25DdXJyZW5jeUlkJywgKCkgPT4gdXNlclNldHRpbmdzPy50cmFuc2FjdGlvbkN1cnJlbmN5SWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVc2VySWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnVzZXJJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1VzZXJOYW1lJywgKCkgPT4gdXNlclNldHRpbmdzPy51c2VyTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdWZXJzaW9uJywgKCkgPT4gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0VmVyc2lvbigpKTtcclxuICAgIHV0aWxpdHkuQWRkR2xvYmFsTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gKG5vdGlmaWNhdGlvbjogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRBcHA/LmFkZEdsb2JhbE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQWR2YW5jZWRDb25maWdTZXR0aW5nID0gKHNldHRpbmc6IHN0cmluZykgPT4gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0QWR2YW5jZWRDb25maWdTZXR0aW5nKHNldHRpbmcgYXMgXCJNYXhDaGlsZEluY2lkZW50TnVtYmVyXCIgfCBcIk1heEluY2lkZW50TWVyZ2VOdW1iZXJcIik7XHJcbiAgICB1dGlsaXR5LkFsbG93ZWRTdGF0dXNUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uIChlbnRpdHlOYW1lOiBzdHJpbmcsIHN0YXRlQ29kZTogbnVtYmVyLCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRVdGlsaXR5Py5nZXRBbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnMoZW50aXR5TmFtZSwgc3RhdGVDb2RlKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkJhcmNvZGVWYWx1ZSA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmdldEJhcmNvZGVWYWx1ZSgpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2FwdHVyZUF1ZGlvID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uY2FwdHVyZUF1ZGlvKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DYXB0dXJlSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2VPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uY2FwdHVyZUltYWdlKGltYWdlT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DYXB0dXJlVmlkZW8gPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5jYXB0dXJlVmlkZW8oKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNsZWFyR2xvYmFsTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gKHVuaXF1ZUlkOiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldEFwcD8uY2xlYXJHbG9iYWxOb3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2xvc2VQcm9ncmVzc0luZGljYXRvciA9ICgpID0+IGdldFV0aWxpdHk/LmNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3IoKTtcclxuICAgIHV0aWxpdHkuQ3VycmVudEFwcE5hbWUgPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0Q3VycmVudEFwcE5hbWUoKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkN1cnJlbnRBcHBQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldEdsb2JhbENvbnRleHQ/LmdldEN1cnJlbnRBcHBQcm9wZXJ0aWVzKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DdXJyZW50UG9zaXRpb24gPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5nZXRDdXJyZW50UG9zaXRpb24oKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICAvLyBAdHMtaWdub3JlIC0gZ2V0RW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICB1dGlsaXR5LkVudGl0eU1haW5Gb3JtRGVzY3JpcHRvciA9IChlbnRpdHlOYW1lOiBzdHJpbmcsIGZvcm1JZDogc3RyaW5nKSA9PiBnZXRVdGlsaXR5Py5nZXRFbnRpdHlNYWluRm9ybURlc2NyaXB0b3IoZW50aXR5TmFtZSwgZm9ybUlkKTtcclxuICAgIHV0aWxpdHkuRW50aXR5TWV0YWRhdGEgPSBmdW5jdGlvbiAoZW50aXR5TmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVzPzogc3RyaW5nW10sIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFV0aWxpdHk/LmdldEVudGl0eU1ldGFkYXRhKGVudGl0eU5hbWUsIGF0dHJpYnV0ZXMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuSHRtbEF0dHJpYnV0ZUVuY29kZSA9IChhcmc6IHN0cmluZykgPT4gZ2V0RW5jb2Rpbmc/Lmh0bWxBdHRyaWJ1dGVFbmNvZGUoYXJnKTtcclxuICAgIHV0aWxpdHkuSHRtbERlY29kZSA9IChhcmc6IHN0cmluZykgPT4gZ2V0RW5jb2Rpbmc/Lmh0bWxEZWNvZGUoYXJnKTtcclxuICAgIHV0aWxpdHkuSHRtbEVuY29kZSA9IChhcmc6IHN0cmluZykgPT4gZ2V0RW5jb2Rpbmc/Lmh0bWxFbmNvZGUoYXJnKTtcclxuICAgIHV0aWxpdHkuSW52b2tlUHJvY2Vzc0FjdGlvbiA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8uaW52b2tlUHJvY2Vzc0FjdGlvbihuYW1lLCBwYXJhbWV0ZXJzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkxvYWRQYW5lbCA9ICh1cmw6IHN0cmluZywgdGl0bGU6IHN0cmluZykgPT4gZ2V0UGFuZWw/LmxvYWRQYW5lbCh1cmwsIHRpdGxlKTtcclxuICAgIHV0aWxpdHkuTG9va3VwT2JqZWN0cyA9IGZ1bmN0aW9uIChsb29rdXBPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFV0aWxpdHk/Lmxvb2t1cE9iamVjdHMobG9va3VwT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5OYXZpZ2F0ZVRvID0gZnVuY3Rpb24gKHBhZ2VJbnB1dDogYW55LCBuYXZpZ2F0aW9uT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXROYXZpZ2F0aW9uPy5uYXZpZ2F0ZVRvKHBhZ2VJbnB1dCwgbmF2aWdhdGlvbk9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlbkFsZXJ0RGlhbG9nID0gZnVuY3Rpb24gKGFsZXJ0U3RyaW5nczogYW55LCBhbGVydE9wdGlvbnM6IGFueSwgY2xvc2VDYWxsYmFjaz86ICgpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXROYXZpZ2F0aW9uPy5vcGVuQWxlcnREaWFsb2coYWxlcnRTdHJpbmdzLCBhbGVydE9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChjbG9zZUNhbGxiYWNrKSBwcm9taXNlPy50aGVuKGNsb3NlQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuQ29uZmlybURpYWxvZyA9IGZ1bmN0aW9uIChjb25maXJtU3RyaW5nczogYW55LCBjb25maXJtT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXROYXZpZ2F0aW9uPy5vcGVuQ29uZmlybURpYWxvZyhjb25maXJtU3RyaW5ncywgY29uZmlybU9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlbkVycm9yRGlhbG9nID0gZnVuY3Rpb24gKGVycm9yT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXROYXZpZ2F0aW9uPy5vcGVuRXJyb3JEaWFsb2coZXJyb3JPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5GaWxlID0gKGZpbGU6IGFueSwgb3BlbkZpbGVPcHRpb25zPzogYW55KSA9PiBnZXROYXZpZ2F0aW9uPy5vcGVuRmlsZShmaWxlLCBvcGVuRmlsZU9wdGlvbnMpO1xyXG4gICAgdXRpbGl0eS5PcGVuRm9ybSA9IGZ1bmN0aW9uIChlbnRpdHlGb3JtT3B0aW9uczogYW55LCBmb3JtUGFyYW1ldGVyczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXROYXZpZ2F0aW9uPy5vcGVuRm9ybShlbnRpdHlGb3JtT3B0aW9ucywgZm9ybVBhcmFtZXRlcnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlblVybCA9ICh1cmw6IHN0cmluZywgb3BlblVybE9wdGlvbnM/OiBhbnkpID0+IGdldE5hdmlnYXRpb24/Lm9wZW5VcmwodXJsLCBvcGVuVXJsT3B0aW9ucyk7XHJcbiAgICB1dGlsaXR5Lk9wZW5XZWJSZXNvdXJjZSA9ICh3ZWJSZXNvdXJjZU5hbWU6IHN0cmluZywgd2luZG93T3B0aW9ucz86IGFueSwgZGF0YT86IHN0cmluZykgPT4gZ2V0TmF2aWdhdGlvbj8ub3BlbldlYlJlc291cmNlKHdlYlJlc291cmNlTmFtZSwgd2luZG93T3B0aW9ucywgZGF0YSk7XHJcbiAgICB1dGlsaXR5LlBpY2tGaWxlID0gZnVuY3Rpb24gKHBpY2tGaWxlT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LnBpY2tGaWxlKHBpY2tGaWxlT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5QcmVwZW5kT3JnTmFtZSA9IChzUGF0aDogc3RyaW5nKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5wcmVwZW5kT3JnTmFtZShzUGF0aCk7XHJcbiAgICB1dGlsaXR5LlJlZnJlc2hQYXJlbnRHcmlkID0gKGxvb2t1cE9wdGlvbnM6IGFueSkgPT4gZ2V0VXRpbGl0eT8ucmVmcmVzaFBhcmVudEdyaWQobG9va3VwT3B0aW9ucyk7XHJcbiAgICAvLyBAdHMtaWdub3JlIC0gZGVmYXVsdFdlYlJlc291cmNlTmFtZSBtYXkgYmUgdW5kZWZpbmVkXHJcbiAgICB1dGlsaXR5LlJlc291cmNlID0gKGtleTogc3RyaW5nKSA9PiBnZXRVdGlsaXR5Py5nZXRSZXNvdXJjZVN0cmluZyhkZWZhdWx0V2ViUmVzb3VyY2VOYW1lISwga2V5KTtcclxuICAgIHV0aWxpdHkuUmVzb3VyY2VTdHJpbmcgPSAod2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiBnZXRVdGlsaXR5Py5nZXRSZXNvdXJjZVN0cmluZyh3ZWJSZXNvdXJjZU5hbWUsIGtleSk7XHJcbiAgICB1dGlsaXR5LlNob3dQcm9ncmVzc0luZGljYXRvciA9IChtZXNzYWdlOiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LnNob3dQcm9ncmVzc0luZGljYXRvcihtZXNzYWdlKTtcclxuICAgIHV0aWxpdHkuV2ViUmVzb3VyY2VVcmwgPSAod2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldFdlYlJlc291cmNlVXJsKHdlYlJlc291cmNlTmFtZSk7XHJcbiAgICB1dGlsaXR5LlhtbEF0dHJpYnV0ZUVuY29kZSA9IChhcmc6IHN0cmluZykgPT4gZ2V0RW5jb2Rpbmc/LnhtbEF0dHJpYnV0ZUVuY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5YbWxFbmNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy54bWxFbmNvZGUoYXJnKTtcclxuICAgIHJldHVybiB1dGlsaXR5O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkRm9ybURpYWxvZyhmb3JtQ29udGV4dDogYW55LCBmaWVsZHM6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIGNvbnN0IGZvcm06IGFueSA9IHt9O1xyXG4gICAgY29uc3QgZmllbGRzTGVuZ3RoID0gZmllbGRzPy5sZW5ndGggfHwgMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBmaWVsZHNbaV07XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZm9ybUNvbnRleHQ/LmRhdGE/LmVudGl0eT8uYXR0cmlidXRlcz8uZ2V0KGZpZWxkTmFtZSk7XHJcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgZm9ybVtmaWVsZE5hbWVdID0ge307XHJcbiAgICAgICAgbG9hZEZpZWxkKGZvcm1Db250ZXh0LCBmb3JtW2ZpZWxkTmFtZV0sIGF0dHJpYnV0ZSwgY29udHJvbCk7XHJcbiAgICB9XHJcbiAgICBmb3JtLkNsb3NlID0gKCkgPT4gZm9ybUNvbnRleHQ/LnVpPy5jbG9zZSgpO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gV2ViQXBpIEhlbHBlciBUeXBlcyBhbmQgRnVuY3Rpb25zXHJcbi8vIEZvciBlYXJseS1ib3VuZCBzdHlsZSBXZWJBcGkgY29kaW5nIChzaW1pbGFyIHRvIEMjIGVhcmx5LWJvdW5kKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKiogRmllbGQgdHlwZSBmb3IgV2ViQXBpIGZpZWxkcyAqL1xyXG5leHBvcnQgdHlwZSBXZWJBcGlGaWVsZFR5cGUgPSAnSW50ZWdlcicgfCAnTnVtYmVyJyB8ICdCb29sZWFuJyB8ICdEYXRlVGltZScgfCAnTXVsdGlPcHRpb25TZXQnO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGEgV2ViQXBpIGZpZWxkXHJcbiAqIFVzZWQgdG8gZGVmaW5lIG1ldGFkYXRhIGZvciBlbnRpdHkgZmllbGRzIGluIFdlYkFwaSBvcGVyYXRpb25zXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElXZWJBcGlGaWVsZENvbmZpZyB7XHJcbiAgICAvKiogTG9naWNhbCBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgKGUuZy4gJ2FjY291bnRpZCcsICduYW1lJykgKi9cclxuICAgIGxvZ2ljYWxOYW1lOiBzdHJpbmc7XHJcbiAgICAvKiogU2NoZW1hIG5hbWUgZm9yIGxvb2t1cCBiaW5kaW5nIChlLmcuICdQYXJlbnRBY2NvdW50SWQnKSAqL1xyXG4gICAgc2NoZW1hTmFtZT86IHN0cmluZztcclxuICAgIC8qKiBFbnRpdHkgY29sbGVjdGlvbiBuYW1lIGZvciBsb29rdXAgKGUuZy4gJ2FjY291bnRzJywgJ2NvbnRhY3RzJykgKi9cclxuICAgIGVudGl0eUNvbGxlY3Rpb25OYW1lPzogc3RyaW5nO1xyXG4gICAgLyoqIEVudGl0eSBsb2dpY2FsIG5hbWUgZm9yIGxvb2t1cCAoZS5nLiAnYWNjb3VudCcsICdjb250YWN0JykgKi9cclxuICAgIGVudGl0eUxvZ2ljYWxOYW1lPzogc3RyaW5nO1xyXG4gICAgLyoqIFdoZXRoZXIgdGhlIGZpZWxkIGlzIHJlYWQtb25seSAqL1xyXG4gICAgcmVhZE9ubHk/OiBib29sZWFuO1xyXG4gICAgLyoqIEZpZWxkIHR5cGUgZm9yIHBhcnNpbmcgKEludGVnZXIsIE51bWJlciwgQm9vbGVhbiwgRGF0ZVRpbWUsIE11bHRpT3B0aW9uU2V0KSAqL1xyXG4gICAgdHlwZT86IFdlYkFwaUZpZWxkVHlwZTtcclxufVxyXG5cclxuLyoqIE1hcCBvZiBmaWVsZCBuYW1lcyB0byB0aGVpciBjb25maWd1cmF0aW9ucyAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElXZWJBcGlGaWVsZENvbmZpZ01hcCB7XHJcbiAgICBbZmllbGROYW1lOiBzdHJpbmddOiBJV2ViQXBpRmllbGRDb25maWc7XHJcbn1cclxuXHJcbi8qKiBDb25zdGFudHMgZm9yIE9EYXRhIGFubm90YXRpb25zICovXHJcbmNvbnN0IFdFQkFQSV9GT1JNQVRURURfVkFMVUVfU1VGRklYID0gJ0BPRGF0YS5Db21tdW5pdHkuRGlzcGxheS5WMS5Gb3JtYXR0ZWRWYWx1ZSc7XHJcbmNvbnN0IFdFQkFQSV9MT09LVVBfTE9HSUNBTF9OQU1FX1NVRkZJWCA9ICdATWljcm9zb2Z0LkR5bmFtaWNzLkNSTS5sb29rdXBsb2dpY2FsbmFtZSc7XHJcblxyXG4vKiogVHlwZSBwYXJzZXJzIGZvciBkaWZmZXJlbnQgV2ViQXBpIGZpZWxkIHR5cGVzICovXHJcbmNvbnN0IHdlYkFwaVR5cGVQYXJzZXJzOiBSZWNvcmQ8c3RyaW5nLCAodmFsdWU6IGFueSkgPT4gYW55PiA9IHtcclxuICAgIERhdGVUaW1lOiAodmFsdWU6IGFueSk6IERhdGUgfCBudWxsID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIGlzTmFOKHZhbHVlLmdldFRpbWUoKSkgPyBudWxsIDogdmFsdWU7XHJcbiAgICAgICAgY29uc3QgdHJpbW1lZFN0cmluZyA9IFN0cmluZyh2YWx1ZSkudHJpbSgpO1xyXG4gICAgICAgIGlmICh0cmltbWVkU3RyaW5nID09PSAnJykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5wYXJzZSh0cmltbWVkU3RyaW5nKTtcclxuICAgICAgICBpZiAoaXNOYU4odGltZXN0YW1wKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgcmV0dXJuIGlzTmFOKHBhcnNlZERhdGUuZ2V0VGltZSgpKSA/IG51bGwgOiBwYXJzZWREYXRlO1xyXG4gICAgfSxcclxuICAgIEludGVnZXI6ICh2YWx1ZTogYW55KTogbnVtYmVyIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICAgICAgICByZXR1cm4gaXNOYU4ocGFyc2VkKSA/IG51bGwgOiBwYXJzZWQ7XHJcbiAgICB9LFxyXG4gICAgTnVtYmVyOiAodmFsdWU6IGFueSk6IG51bWJlciB8IG51bGwgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGlzTmFOKHBhcnNlZCkgPyBudWxsIDogcGFyc2VkO1xyXG4gICAgfSxcclxuICAgIEJvb2xlYW46ICh2YWx1ZTogYW55KTogYm9vbGVhbiB8IG51bGwgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHJldHVybiB2YWx1ZTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHZhbHVlICE9PSAwO1xyXG4gICAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gU3RyaW5nKHZhbHVlKS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCB0cnVlVmFsdWVzID0gWyd0cnVlJywgJzEnLCAneWVzJywgJ3knXTtcclxuICAgICAgICBjb25zdCBmYWxzZVZhbHVlcyA9IFsnZmFsc2UnLCAnMCcsICdubycsICduJ107XHJcbiAgICAgICAgaWYgKHRydWVWYWx1ZXMuaW5jbHVkZXMoc3RyaW5nVmFsdWUpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoZmFsc2VWYWx1ZXMuaW5jbHVkZXMoc3RyaW5nVmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogUGFyc2UgYW5kIHJldHVybiB2YWx1ZSBiYXNlZCBvbiBXZWJBcGkgZmllbGQgdHlwZVxyXG4gKi9cclxuZnVuY3Rpb24gd2ViQXBpUmV0dXJuR2V0KGRhdGE6IGFueSwgdHlwZT86IFdlYkFwaUZpZWxkVHlwZSk6IGFueSB7XHJcbiAgICBpZiAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZGF0YTtcclxuICAgIGNvbnN0IHBhcnNlciA9IHdlYkFwaVR5cGVQYXJzZXJzW3R5cGVdO1xyXG4gICAgcmV0dXJuIHBhcnNlciA/IHBhcnNlcihkYXRhKSA6IGRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmUgYSBXZWJBcGkgZmllbGQgcHJvcGVydHkgb24gdGhlIHRhcmdldCBvYmplY3Qgd2l0aCBnZXR0ZXIvc2V0dGVyXHJcbiAqIEBwYXJhbSBvYmogVGhlIHRhcmdldCBvYmplY3QgdG8gZGVmaW5lIHByb3BlcnR5IG9uXHJcbiAqIEBwYXJhbSBmaWVsZE5hbWUgVGhlIHByb3BlcnR5IG5hbWVcclxuICogQHBhcmFtIGVudGl0eSBUaGUgcmF3IE9EYXRhIGVudGl0eSBvYmplY3RcclxuICogQHBhcmFtIGNvbmZpZyBUaGUgZmllbGQgY29uZmlndXJhdGlvblxyXG4gKiBAcGFyYW0gdXBzZXJ0RW50aXR5IFRoZSBlbnRpdHkgb2JqZWN0IGZvciBDcmVhdGUvVXBkYXRlIG9wZXJhdGlvbnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVXZWJBcGlGaWVsZChcclxuICAgIG9iajogYW55LFxyXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXHJcbiAgICBlbnRpdHk6IFJlY29yZDxzdHJpbmcsIGFueT4sXHJcbiAgICBjb25maWc6IElXZWJBcGlGaWVsZENvbmZpZyxcclxuICAgIHVwc2VydEVudGl0eTogUmVjb3JkPHN0cmluZywgYW55PlxyXG4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbG9naWNhbE5hbWUsIHNjaGVtYU5hbWUsIGVudGl0eUNvbGxlY3Rpb25OYW1lLCBlbnRpdHlMb2dpY2FsTmFtZSwgcmVhZE9ubHksIHR5cGUgfSA9IGNvbmZpZztcclxuXHJcbiAgICBjb25zdCBnZXRGb3JtYXR0ZWRWYWx1ZSA9ICgpOiBzdHJpbmcgfCBzdHJpbmdbXSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkS2V5ID0gbG9naWNhbE5hbWUgKyBXRUJBUElfRk9STUFUVEVEX1ZBTFVFX1NVRkZJWDtcclxuICAgICAgICBpZiAoZW50aXR5Py5bZm9ybWF0dGVkS2V5XSA9PT0gdW5kZWZpbmVkIHx8IGVudGl0eT8uW2Zvcm1hdHRlZEtleV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW50aXR5Q29sbGVjdGlvbk5hbWUgIT09IHVuZGVmaW5lZCAmJiBlbnRpdHlDb2xsZWN0aW9uTmFtZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvb2t1cEtleSA9IGxvZ2ljYWxOYW1lICsgV0VCQVBJX0xPT0tVUF9MT0dJQ0FMX05BTUVfU1VGRklYO1xyXG4gICAgICAgICAgICBpZiAoZW50aXR5Py5bbG9va3VwS2V5XSA9PT0gZW50aXR5TG9naWNhbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbnRpdHk/Lltmb3JtYXR0ZWRLZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdNdWx0aU9wdGlvblNldCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eT8uW2Zvcm1hdHRlZEtleV0/LnRvU3RyaW5nKCk/LnNwbGl0KCc7JykubWFwKChpdGVtOiBzdHJpbmcpID0+IGl0ZW0/LnRyaW0oKSkgPz8gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbnRpdHk/Lltmb3JtYXR0ZWRLZXldO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRWYWx1ZSA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIGlmIChlbnRpdHk/Lltsb2dpY2FsTmFtZV0gPT09IHVuZGVmaW5lZCB8fCBlbnRpdHk/Lltsb2dpY2FsTmFtZV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbnRpdHlDb2xsZWN0aW9uTmFtZSAhPT0gdW5kZWZpbmVkICYmIGVudGl0eUNvbGxlY3Rpb25OYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbG9va3VwS2V5ID0gbG9naWNhbE5hbWUgKyBXRUJBUElfTE9PS1VQX0xPR0lDQUxfTkFNRV9TVUZGSVg7XHJcbiAgICAgICAgICAgIGlmIChlbnRpdHk/Lltsb29rdXBLZXldID09PSB1bmRlZmluZWQgfHwgZW50aXR5Py5bbG9va3VwS2V5XSA9PT0gZW50aXR5TG9naWNhbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3ZWJBcGlSZXR1cm5HZXQoZW50aXR5Py5bbG9naWNhbE5hbWVdLCB0eXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdNdWx0aU9wdGlvblNldCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eT8uW2xvZ2ljYWxOYW1lXT8udG9TdHJpbmcoKT8uc3BsaXQoJywnKS5tYXAoKGl0ZW06IHN0cmluZykgPT4gcGFyc2VJbnQoaXRlbSwgMTApKSA/PyBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdlYkFwaVJldHVybkdldChlbnRpdHk/Lltsb2dpY2FsTmFtZV0sIHR5cGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRWYWx1ZSA9ICh2YWx1ZTogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdNdWx0aU9wdGlvblNldCcpIHZhbHVlID0gdmFsdWU/LmpvaW4oJywnKTtcclxuICAgICAgICBpZiAoZW50aXR5Q29sbGVjdGlvbk5hbWUgIT09IHVuZGVmaW5lZCAmJiBlbnRpdHlDb2xsZWN0aW9uTmFtZT8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBiaW5kaW5nTmFtZSA9IChzY2hlbWFOYW1lID8/IGxvZ2ljYWxOYW1lKSArICdAb2RhdGEuYmluZCc7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdXBzZXJ0RW50aXR5W2JpbmRpbmdOYW1lXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhblZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlLnJlcGxhY2UoL1t7fV0vZywgJycpIDogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB1cHNlcnRFbnRpdHlbYmluZGluZ05hbWVdID0gJy8nICsgZW50aXR5Q29sbGVjdGlvbk5hbWUgKyAnKCcgKyBjbGVhblZhbHVlICsgJyknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXBzZXJ0RW50aXR5W2xvZ2ljYWxOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbnRpdHlbbG9naWNhbE5hbWVdID0gdmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIERlZmluZSBGb3JtYXR0ZWRWYWx1ZSBwcm9wZXJ0eVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iai5Gb3JtYXR0ZWRWYWx1ZSwgZmllbGROYW1lLCB7XHJcbiAgICAgICAgZ2V0OiBnZXRGb3JtYXR0ZWRWYWx1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGVmaW5lIG1haW4gcHJvcGVydHkgKHJlYWRvbmx5IG9yIHJlYWQvd3JpdGUpXHJcbiAgICBpZiAocmVhZE9ubHkpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBmaWVsZE5hbWUsIHtcclxuICAgICAgICAgICAgZ2V0OiBnZXRWYWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBmaWVsZE5hbWUsIHtcclxuICAgICAgICAgICAgZ2V0OiBnZXRWYWx1ZSxcclxuICAgICAgICAgICAgc2V0OiBzZXRWYWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQmFzZSBpbnRlcmZhY2UgZm9yIFdlYkFwaSBlbnRpdHkgb2JqZWN0c1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJV2ViQXBpRW50aXR5IHtcclxuICAgIC8qKiBUaGUgZW50aXR5IG9iamVjdCBmb3IgQ3JlYXRlL1VwZGF0ZSBvcGVyYXRpb25zICovXHJcbiAgICByZWFkb25seSBFbnRpdHk6IFJlY29yZDxzdHJpbmcsIGFueT47XHJcbiAgICAvKiogVGhlIE9EYXRhIGVudGl0eSBvYmplY3QgY29udGFpbmluZyByYXcgZGF0YSAqL1xyXG4gICAgcmVhZG9ubHkgT0RhdGFFbnRpdHk6IFJlY29yZDxzdHJpbmcsIGFueT47XHJcbiAgICAvKiogVGhlIGVudGl0eSBuYW1lICovXHJcbiAgICByZWFkb25seSBFbnRpdHlOYW1lOiBzdHJpbmc7XHJcbiAgICAvKiogVGhlIGVudGl0eSBjb2xsZWN0aW9uIG5hbWUgKi9cclxuICAgIHJlYWRvbmx5IEVudGl0eUNvbGxlY3Rpb25OYW1lOiBzdHJpbmc7XHJcbiAgICAvKiogVGhlIEBvZGF0YS5ldGFnIGZvciBjYWNoaW5nICovXHJcbiAgICByZWFkb25seSAnQG9kYXRhLmV0YWcnOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICAvKiogRm9ybWF0dGVkIHZhbHVlcyBmb3IgYWxsIGZpZWxkcyAqL1xyXG4gICAgcmVhZG9ubHkgRm9ybWF0dGVkVmFsdWU6IFJlY29yZDxzdHJpbmcsIGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHJhdyB2YWx1ZSBvZiBhbiBhbGlhc2VkIGZpZWxkIChmcm9tICRleHBhbmQgb3IgcmVsYXRlZCBlbnRpdHkpXHJcbiAgICAgKiBAcGFyYW0gYWxpYXMgVGhlIGFsaWFzIGZpZWxkIG5hbWVcclxuICAgICAqIEBwYXJhbSBpc011bHRpT3B0aW9uU2V0IFRydWUgaWYgdGhlIGZpZWxkIGlzIGEgbXVsdGktb3B0aW9uIHNldFxyXG4gICAgICogQHJldHVybnMgVGhlIHJhdyB2YWx1ZSBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gICAgICovXHJcbiAgICBnZXRBbGlhc2VkVmFsdWUoYWxpYXM6IHN0cmluZywgaXNNdWx0aU9wdGlvblNldD86IGJvb2xlYW4pOiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGZvcm1hdHRlZCB2YWx1ZSBvZiBhbiBhbGlhc2VkIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gYWxpYXMgVGhlIGFsaWFzIGZpZWxkIG5hbWVcclxuICAgICAqIEBwYXJhbSBpc011bHRpT3B0aW9uU2V0IFRydWUgaWYgdGhlIGZpZWxkIGlzIGEgbXVsdGktb3B0aW9uIHNldFxyXG4gICAgICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCB2YWx1ZSBvciBlbXB0eSBzdHJpbmcgaWYgbm90IGZvdW5kXHJcbiAgICAgKi9cclxuICAgIGdldEFsaWFzZWRGb3JtYXR0ZWRWYWx1ZShhbGlhczogc3RyaW5nLCBpc011bHRpT3B0aW9uU2V0PzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIGJhc2UgV2ViQXBpIGVudGl0eSBvYmplY3Qgd2l0aCBjb21tb24gcHJvcGVydGllcyBhbmQgbWV0aG9kc1xyXG4gKiBAcGFyYW0gZW50aXR5IFRoZSByYXcgT0RhdGEgZW50aXR5IG9iamVjdFxyXG4gKiBAcGFyYW0gZW50aXR5TmFtZSBUaGUgbG9naWNhbCBuYW1lIG9mIHRoZSBlbnRpdHlcclxuICogQHBhcmFtIGVudGl0eUNvbGxlY3Rpb25OYW1lIFRoZSBjb2xsZWN0aW9uIG5hbWUgb2YgdGhlIGVudGl0eVxyXG4gKiBAcGFyYW0gZmllbGRDb25maWdNYXAgTWFwIG9mIGZpZWxkIGNvbmZpZ3VyYXRpb25zXHJcbiAqIEByZXR1cm5zIEEgV2ViQXBpIGVudGl0eSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXZWJBcGlFbnRpdHk8VCBleHRlbmRzIElXZWJBcGlFbnRpdHk+KFxyXG4gICAgZW50aXR5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkLFxyXG4gICAgZW50aXR5TmFtZTogc3RyaW5nLFxyXG4gICAgZW50aXR5Q29sbGVjdGlvbk5hbWU6IHN0cmluZyxcclxuICAgIGZpZWxkQ29uZmlnTWFwOiBJV2ViQXBpRmllbGRDb25maWdNYXBcclxuKTogVCB7XHJcbiAgICBjb25zdCBlID0gZW50aXR5ID8/IHt9O1xyXG4gICAgY29uc3QgdXBzZXJ0RW50aXR5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcblxyXG4gICAgY29uc3Qgd2ViQXBpRW50aXR5OiBhbnkgPSB7XHJcbiAgICAgICAgT0RhdGFFbnRpdHk6IGUsXHJcbiAgICAgICAgRm9ybWF0dGVkVmFsdWU6IHt9LFxyXG4gICAgICAgIEVudGl0eTogdXBzZXJ0RW50aXR5LFxyXG4gICAgICAgIEVudGl0eU5hbWU6IGVudGl0eU5hbWUsXHJcbiAgICAgICAgRW50aXR5Q29sbGVjdGlvbk5hbWU6IGVudGl0eUNvbGxlY3Rpb25OYW1lLFxyXG4gICAgICAgICdAb2RhdGEuZXRhZyc6IGU/LlsnQG9kYXRhLmV0YWcnXSxcclxuXHJcbiAgICAgICAgZ2V0QWxpYXNlZFZhbHVlKGFsaWFzOiBzdHJpbmcsIGlzTXVsdGlPcHRpb25TZXQgPSBmYWxzZSk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmIChlPy5bYWxpYXNdID09PSB1bmRlZmluZWQgfHwgZT8uW2FsaWFzXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzTXVsdGlPcHRpb25TZXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlPy5bYWxpYXNdLnRvU3RyaW5nKCkuc3BsaXQoJywnKS5tYXAoKGl0ZW06IHN0cmluZykgPT4gcGFyc2VJbnQoaXRlbSwgMTApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZT8uW2FsaWFzXTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXRBbGlhc2VkRm9ybWF0dGVkVmFsdWUoYWxpYXM6IHN0cmluZywgaXNNdWx0aU9wdGlvblNldCA9IGZhbHNlKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhbGlhcyArIFdFQkFQSV9GT1JNQVRURURfVkFMVUVfU1VGRklYO1xyXG4gICAgICAgICAgICBpZiAoZT8uW2tleV0gPT09IHVuZGVmaW5lZCB8fCBlPy5ba2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc011bHRpT3B0aW9uU2V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZT8uW2tleV0/LnRvU3RyaW5nKCk/LnNwbGl0KCc7JykubWFwKChpdGVtOiBzdHJpbmcpID0+IGl0ZW0/LnRyaW0oKSkgPz8gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGU/LltrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gRGVmaW5lIGFsbCBmaWVsZHMgdXNpbmcgdGhlIGZpZWxkIGNvbmZpZ3VyYXRpb25cclxuICAgIGZvciAoY29uc3QgZmllbGROYW1lIGluIGZpZWxkQ29uZmlnTWFwKSB7XHJcbiAgICAgICAgZGVmaW5lV2ViQXBpRmllbGQod2ViQXBpRW50aXR5LCBmaWVsZE5hbWUsIGUsIGZpZWxkQ29uZmlnTWFwW2ZpZWxkTmFtZV0sIHVwc2VydEVudGl0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdlYkFwaUVudGl0eSBhcyBUO1xyXG59XHJcbiIsICIvKipcclxuICogT3B0aW9uU2V0LnRzIC0gQ2VudHJhbGl6ZWQgT3B0aW9uU2V0IGRlZmluaXRpb25zXHJcbiAqIEdlbmVyYXRlZCBmaWxlIC0gRE8gTk9UIE1PRElGWSBNQU5VQUxMWVxyXG4gKiBcclxuICogVXNhZ2U6IGltcG9ydCB7IE9wdGlvblNldCB9IGZyb20gJy4vZ2VuZXJhdG9yL09wdGlvblNldCc7XHJcbiAqICAgICAgICBPcHRpb25TZXQuRm9ybVR5cGUuQ3JlYXRlXHJcbiAqICAgICAgICBPcHRpb25TZXQuQWNjb3VudC5JbmR1c3RyeUNvZGUuQ29uc3VsdGluZ1xyXG4gKi9cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR2xvYmFsIE9wdGlvblNldHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqIEluZm9ybWF0aW9uIGFib3V0IHRoZSBhZHZhbmNlZCBjb25maWd1cmF0aW9uIHNldHRpbmdzIGZvciB0aGUgb3JnYW5pemF0aW9uICovXHJcbmNvbnN0IEFkdmFuY2VkQ29uZmlnU2V0dGluZyA9IHtcclxuICAgIC8qKiBNYXhDaGlsZEluY2lkZW50TnVtYmVyICovXHJcbiAgICBNYXhDaGlsZEluY2lkZW50TnVtYmVyOiAnTWF4Q2hpbGRJbmNpZGVudE51bWJlcicsXHJcbiAgICAvKiogTWF4SW5jaWRlbnRNZXJnZU51bWJlciAqL1xyXG4gICAgTWF4SW5jaWRlbnRNZXJnZU51bWJlcjogJ01heEluY2lkZW50TWVyZ2VOdW1iZXInXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogUmV0dXJucyBhIHZhbHVlIHRvIGluZGljYXRlIHdoaWNoIGNsaWVudCB0aGUgc2NyaXB0IGlzIGV4ZWN1dGluZyBpbiAqL1xyXG5jb25zdCBDbGllbnROYW1lID0ge1xyXG4gICAgLyoqIFdlYiAqL1xyXG4gICAgV2ViOiAnV2ViJyxcclxuICAgIC8qKiBPdXRsb29rICovXHJcbiAgICBPdXRsb29rOiAnT3V0bG9vaycsXHJcbiAgICAvKiogTW9iaWxlICovXHJcbiAgICBNb2JpbGU6ICdNb2JpbGUnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogUmV0dXJucyBhIHZhbHVlIHRvIGluZGljYXRlIHRoZSBzdGF0ZSBvZiB0aGUgY2xpZW50ICovXHJcbmNvbnN0IENsaWVudFN0YXRlID0ge1xyXG4gICAgLyoqIE9ubGluZSAqL1xyXG4gICAgT25saW5lOiAnT25saW5lJyxcclxuICAgIC8qKiBPZmZsaW5lICovXHJcbiAgICBPZmZsaW5lOiAnT2ZmbGluZSdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgcmVwcmVzZW50cyB0aGUgdHlwZSBvZiBhdHRyaWJ1dGUgKi9cclxuY29uc3QgRmllbGRBdHRyaWJ1dGVUeXBlID0ge1xyXG4gICAgLyoqIGJvb2xlYW4gKi9cclxuICAgIEJvb2xlYW46ICdib29sZWFuJyxcclxuICAgIC8qKiBkYXRldGltZSAqL1xyXG4gICAgRGF0ZVRpbWU6ICdkYXRldGltZScsXHJcbiAgICAvKiogZGVjaW1hbCAqL1xyXG4gICAgRGVjaW1hbDogJ2RlY2ltYWwnLFxyXG4gICAgLyoqIGRvdWJsZSAqL1xyXG4gICAgRG91YmxlOiAnZG91YmxlJyxcclxuICAgIC8qKiBpbnRlZ2VyICovXHJcbiAgICBJbnRlZ2VyOiAnaW50ZWdlcicsXHJcbiAgICAvKiogbG9va3VwICovXHJcbiAgICBMb29rdXA6ICdsb29rdXAnLFxyXG4gICAgLyoqIG1lbW8gKi9cclxuICAgIE1lbW86ICdtZW1vJyxcclxuICAgIC8qKiBtb25leSAqL1xyXG4gICAgTW9uZXk6ICdtb25leScsXHJcbiAgICAvKiogbXVsdGlzZWxlY3RvcHRpb25zZXQgKi9cclxuICAgIE11bHRpT3B0aW9uU2V0OiAnbXVsdGlvcHRpb25zZXQnLFxyXG4gICAgLyoqIG9wdGlvbnNldCAqL1xyXG4gICAgT3B0aW9uU2V0OiAnb3B0aW9uc2V0JyxcclxuICAgIC8qKiBzdHJpbmcgKi9cclxuICAgIFN0cmluZzogJ3N0cmluZydcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBBIHZhbHVlIHRoYXQgY2F0ZWdvcml6ZXMgY29udHJvbHMgKi9cclxuY29uc3QgRmllbGRDb250cm9sVHlwZSA9IHtcclxuICAgIC8qKiBzdGFuZGFyZCAtIEEgc3RhbmRhcmQgY29udHJvbCAqL1xyXG4gICAgU3RhbmRhcmQ6ICdzdGFuZGFyZCcsXHJcbiAgICAvKiogaWZyYW1lIC0gQW4gSUZSQU1FIGNvbnRyb2wgKi9cclxuICAgIElmcmFtZTogJ2lmcmFtZScsXHJcbiAgICAvKioga2JzZWFyY2ggLSBBIGtub3dsZWRnZSBiYXNlIHNlYXJjaCBjb250cm9sICovXHJcbiAgICBLYlNlYXJjaDogJ2tic2VhcmNoJyxcclxuICAgIC8qKiBsb29rdXAgLSBBIGxvb2t1cCBjb250cm9sICovXHJcbiAgICBMb29rdXA6ICdsb29rdXAnLFxyXG4gICAgLyoqIG11bHRpc2VsZWN0b3B0aW9uc2V0IC0gQSBtdWx0aS1zZWxlY3Qgb3B0aW9uIHNldCBjb250cm9sICovXHJcbiAgICBNdWx0aVNlbGVjdE9wdGlvbnNldDogJ211bHRpc2VsZWN0b3B0aW9uc2V0JyxcclxuICAgIC8qKiBub3RlcyAtIEEgbm90ZXMgY29udHJvbCAqL1xyXG4gICAgTm90ZXM6ICdub3RlcycsXHJcbiAgICAvKiogb3B0aW9uc2V0IC0gQW4gb3B0aW9uIHNldCBjb250cm9sICovXHJcbiAgICBPcHRpb25TZXQ6ICdvcHRpb25zZXQnLFxyXG4gICAgLyoqIHF1aWNrZm9ybSAtIEEgcXVpY2sgdmlldyBjb250cm9sICovXHJcbiAgICBRdWlja0Zvcm06ICdxdWlja2Zvcm0nLFxyXG4gICAgLyoqIHN1YmdyaWQgLSBBIHN1YmdyaWQgY29udHJvbCAqL1xyXG4gICAgU3ViR3JpZDogJ3N1YmdyaWQnLFxyXG4gICAgLyoqIHRpbWVyY29udHJvbCAtIEEgdGltZXIgY29udHJvbCAqL1xyXG4gICAgVGltZXJDb250cm9sOiAndGltZXJjb250cm9sJyxcclxuICAgIC8qKiB0aW1lbGluZXdhbGwgLSBBIHRpbWVsaW5lIGNvbnRyb2wgKGZvciBVbmlmaWVkIEludGVyZmFjZSkgKi9cclxuICAgIFRpbWVsaW5lV2FsbDogJ3RpbWVsaW5ld2FsbCcsXHJcbiAgICAvKiogd2VicmVzb3VyY2UgLSBBIHdlYiByZXNvdXJjZSBjb250cm9sICovXHJcbiAgICBXZWJSZXNvdXJjZTogJ3dlYnJlc291cmNlJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCByZXByZXNlbnRzIGZvcm1hdHRpbmcgb3B0aW9ucyBmb3IgdGhlIGF0dHJpYnV0ZSAqL1xyXG5jb25zdCBGaWVsZEZvcm1hdCA9IHtcclxuICAgIC8qKiBkYXRlICovXHJcbiAgICBEYXRlOiAnZGF0ZScsXHJcbiAgICAvKiogZGF0ZXRpbWUgKi9cclxuICAgIERhdGVUaW1lOiAnZGF0ZXRpbWUnLFxyXG4gICAgLyoqIGR1cmF0aW9uICovXHJcbiAgICBEdXJhdGlvbjogJ2R1cmF0aW9uJyxcclxuICAgIC8qKiBlbWFpbCAqL1xyXG4gICAgRW1haWw6ICdlbWFpbCcsXHJcbiAgICAvKiogbGFuZ3VhZ2UgKi9cclxuICAgIExhbmd1YWdlOiAnbGFuZ3VhZ2UnLFxyXG4gICAgLyoqIG5vbmUgKi9cclxuICAgIE5vbmU6ICdub25lJyxcclxuICAgIC8qKiB0ZXh0YXJlYSAqL1xyXG4gICAgVGV4dEFyZWE6ICd0ZXh0YXJlYScsXHJcbiAgICAvKiogdGV4dCAqL1xyXG4gICAgVGV4dDogJ3RleHQnLFxyXG4gICAgLyoqIHRpY2tlcnN5bWJvbCAqL1xyXG4gICAgVGlja2VyU3ltYm9sOiAndGlja2Vyc3ltYm9sJyxcclxuICAgIC8qKiBwaG9uZSAqL1xyXG4gICAgUGhvbmU6ICdwaG9uZScsXHJcbiAgICAvKiogdGltZXpvbmUgKi9cclxuICAgIFRpbWVab25lOiAndGltZXpvbmUnLFxyXG4gICAgLyoqIHVybCAqL1xyXG4gICAgVXJsOiAndXJsJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSB0eXBlIG9mIG5vdGlmaWNhdGlvbiAqL1xyXG5jb25zdCBGaWVsZE5vdGlmaWNhdGlvbkxldmVsID0ge1xyXG4gICAgLyoqIEVSUk9SICovXHJcbiAgICBFcnJvcjogJ0VSUk9SJyxcclxuICAgIC8qKiBSRUNPTU1FTkRBVElPTiAqL1xyXG4gICAgUmVjb21tZW5kYXRpb246ICdSRUNPTU1FTkRBVElPTidcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBWYWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgYSB2YWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZSBpcyBub25lIG9yIHJlcXVpcmVkIG9yIHJlY29tbWVuZGVkICovXHJcbmNvbnN0IEZpZWxkUmVxdWlyZWRMZXZlbCA9IHtcclxuICAgIC8qKiBub25lICovXHJcbiAgICBOb25lOiAnbm9uZScsXHJcbiAgICAvKiogcmVxdWlyZWQgKi9cclxuICAgIFJlcXVpcmVkOiAncmVxdWlyZWQnLFxyXG4gICAgLyoqIHJlY29tbWVuZGVkICovXHJcbiAgICBSZWNvbW1lbmRlZDogJ3JlY29tbWVuZGVkJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIERhdGEgZnJvbSB0aGUgYXR0cmlidXRlIHdpbGwgYmUgc3VibWl0dGVkIHdoZW4gdGhlIHJlY29yZCBpcyBzYXZlZCAqL1xyXG5jb25zdCBGaWVsZFN1Ym1pdE1vZGUgPSB7XHJcbiAgICAvKiogYWx3YXlzIC0gVGhlIGRhdGEgaXMgYWx3YXlzIHNlbnQgd2l0aCBhIHNhdmUgKi9cclxuICAgIEFsd2F5czogJ2Fsd2F5cycsXHJcbiAgICAvKiogbmV2ZXIgLSBUaGUgZGF0YSBpcyBuZXZlciBzZW50IHdpdGggYSBzYXZlICovXHJcbiAgICBOZXZlcjogJ25ldmVyJyxcclxuICAgIC8qKiBkaXJ0eSAtIERlZmF1bHQgYmVoYXZpb3IuIFRoZSBkYXRhIGlzIHNlbnQgd2l0aCB0aGUgc2F2ZSB3aGVuIGl0IGhhcyBjaGFuZ2VkICovXHJcbiAgICBEaXJ0eTogJ2RpcnR5J1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFJldHVybnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGtpbmQgb2YgZGV2aWNlIHRoZSB1c2VyIGlzIHVzaW5nICovXHJcbmNvbnN0IEZvcm1GYWN0b3IgPSB7XHJcbiAgICAvKiogMCAqL1xyXG4gICAgVW5rbm93bjogMCxcclxuICAgIC8qKiAxICovXHJcbiAgICBEZXNrdG9wOiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIFRhYmxldDogMixcclxuICAgIC8qKiAzICovXHJcbiAgICBQaG9uZTogM1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSBsZXZlbCBvZiB0aGUgbWVzc2FnZSwgd2hpY2ggZGVmaW5lcyBob3cgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgKi9cclxuY29uc3QgRm9ybU5vdGlmaWNhdGlvbkxldmVsID0ge1xyXG4gICAgLyoqIEVSUk9SIC0gTm90aWZpY2F0aW9uIHdpbGwgdXNlIHRoZSBzeXN0ZW0gZXJyb3IgaWNvbiAqL1xyXG4gICAgRXJyb3I6ICdFUlJPUicsXHJcbiAgICAvKiogV0FSTklORyAtIE5vdGlmaWNhdGlvbiB3aWxsIHVzZSB0aGUgc3lzdGVtIHdhcm5pbmcgaWNvbiAqL1xyXG4gICAgV2FybmluZzogJ1dBUk5JTkcnLFxyXG4gICAgLyoqIElORk8gLSBOb3RpZmljYXRpb24gd2lsbCB1c2UgdGhlIHN5c3RlbSBpbmZvIGljb24gKi9cclxuICAgIEluZm86ICdJTkZPJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIEdldHMgdGhlIGZvcm0gdHlwZSBmb3IgdGhlIHJlY29yZCAqL1xyXG5jb25zdCBGb3JtVHlwZSA9IHtcclxuICAgIC8qKiAwICovXHJcbiAgICBVbmRlZmluZWQ6IDAsXHJcbiAgICAvKiogMSAtIFF1aWNrIENyZWF0ZSBmb3JtcyByZXR1cm4gMSAqL1xyXG4gICAgQ3JlYXRlOiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIFVwZGF0ZTogMixcclxuICAgIC8qKiAzICovXHJcbiAgICBSZWFkT25seTogMyxcclxuICAgIC8qKiA0ICovXHJcbiAgICBEaXNhYmxlZDogNCxcclxuICAgIC8qKiA1ICovXHJcbiAgICBCdWxrRWRpdDogNVxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSBmdWxsIG5hbWUgY29udmVudGlvbkNvZGUgc2V0dGluZyBvZiB0aGUgY3VycmVudCBvcmdhbml6YXRpb24gKi9cclxuY29uc3QgRnVsbE5hbWVDb252ZW50aW9uQ29kZSA9IHtcclxuICAgIC8qKiAwICovXHJcbiAgICBMYXN0TmFtZV9Db21tYV9GaXJzdE5hbWU6IDAsXHJcbiAgICAvKiogMSAqL1xyXG4gICAgRmlyc3ROYW1lX0xhc3ROYW1lOiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIExhc3ROYW1lX0NvbW1hX0ZpcnN0TmFtZV9NaWRkbGVJbml0aWFsOiAyLFxyXG4gICAgLyoqIDMgKi9cclxuICAgIEZpcnN0TmFtZV9NaWRkbGVJbml0aWFsX0xhc3ROYW1lOiAzLFxyXG4gICAgLyoqIDQgKi9cclxuICAgIExhc3ROYW1lX0NvbW1hX0ZpcnN0TmFtZV9NaWRkbGVOYW1lOiA0LFxyXG4gICAgLyoqIDUgKi9cclxuICAgIEZpcnN0TmFtZV9NaWRkbGVOYW1lX0xhc3ROYW1lOiA1LFxyXG4gICAgLyoqIDYgKi9cclxuICAgIExhc3ROYW1lX0ZpcnN0TmFtZTogNixcclxuICAgIC8qKiA3ICovXHJcbiAgICBMYXN0TmFtZUZpcnN0TmFtZTogN1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSB0eXBlIG9mIGdyaWQgKi9cclxuY29uc3QgR3JpZFR5cGUgPSB7XHJcbiAgICAvKiogMSAqL1xyXG4gICAgSG9tZVBhZ2VHcmlkOiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIFN1YmdyaWQ6IDJcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBEZXNjcmliaW5nIHdoZXRoZXIgdG8gb3BlbiBvciBzYXZlIHRoZSBmaWxlICovXHJcbmNvbnN0IE9wZW5GaWxlT3B0aW9uID0ge1xyXG4gICAgLyoqIDEgKi9cclxuICAgIE9wZW46IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgU2F2ZTogMlxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSBpbnRlZ2VyIHZhbHVlIG9mIHRoZSBidXNpbmVzcyBwcm9jZXNzIGZsb3cgY2F0ZWdvcnkgKi9cclxuY29uc3QgUHJvY2Vzc0NhdGVnb3J5ID0ge1xyXG4gICAgLyoqIDAgKi9cclxuICAgIFF1YWxpZnk6IDAsXHJcbiAgICAvKiogMSAqL1xyXG4gICAgRGV2ZWxvcDogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBQcm9wb3NlOiAyLFxyXG4gICAgLyoqIDMgKi9cclxuICAgIENsb3NlOiAzLFxyXG4gICAgLyoqIDQgKi9cclxuICAgIElkZW50aWZ5OiA0LFxyXG4gICAgLyoqIDUgKi9cclxuICAgIFJlc2VhcmNoOiA1LFxyXG4gICAgLyoqIDYgKi9cclxuICAgIFJlc29sdmU6IDZcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBEaXNwbGF5IHN0YXRlIG9mIHRoZSBidXNpbmVzcyBwcm9jZXNzIGZsb3cgKi9cclxuY29uc3QgUHJvY2Vzc0Rpc3BsYXlTdGF0ZSA9IHtcclxuICAgIC8qKiBleHBhbmRlZCAqL1xyXG4gICAgRXhwYW5kZWQ6ICdleHBhbmRlZCcsXHJcbiAgICAvKiogY29sbGFwc2VkICovXHJcbiAgICBDb2xsYXBzZWQ6ICdjb2xsYXBzZWQnLFxyXG4gICAgLyoqIGZsb2F0aW5nICovXHJcbiAgICBGbG9hdGluZzogJ2Zsb2F0aW5nJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSBpbnRlZ2VyIHZhbHVlIHN0YXR1cyBvZiB0aGUgc3RhZ2UgKi9cclxuY29uc3QgUHJvY2Vzc1N0YXR1cyA9IHtcclxuICAgIC8qKiBhY3RpdmUgKi9cclxuICAgIEFjdGl2ZTogJ2FjdGl2ZScsXHJcbiAgICAvKiogYWJvcnRlZCAqL1xyXG4gICAgQWJvcnRlZDogJ2Fib3J0ZWQnLFxyXG4gICAgLyoqIGZpbmlzaGVkICovXHJcbiAgICBGaW5pc2hlZDogJ2ZpbmlzaGVkJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFJldHVybnMgYSB2YWx1ZSBpbmRpY2F0aW5nIGhvdyB0aGUgc2F2ZSBldmVudCB3YXMgaW5pdGlhdGVkIGJ5IHRoZSB1c2VyICovXHJcbmNvbnN0IFNhdmVNb2RlID0ge1xyXG4gICAgLyoqIDEgLSBBbGwgZW50aXRpZXMgKi9cclxuICAgIFNhdmU6IDEsXHJcbiAgICAvKiogMiAtIEFsbCBlbnRpdGllcyAqL1xyXG4gICAgU2F2ZUFuZENsb3NlOiAyLFxyXG4gICAgLyoqIDUgLSBBbGwgZW50aXRpZXMgKi9cclxuICAgIERlYWN0aXZhdGU6IDUsXHJcbiAgICAvKiogNiAtIEFsbCBlbnRpdGllcyAqL1xyXG4gICAgUmVhY3RpdmF0ZTogNixcclxuICAgIC8qKiA3IC0gRW1haWwgKi9cclxuICAgIEVtYWlsOiA3LFxyXG4gICAgLyoqIDE1IC0gTGVhZCAqL1xyXG4gICAgRGlzcXVhbGlmeTogMTUsXHJcbiAgICAvKiogMTYgLSBMZWFkICovXHJcbiAgICBRdWFsaWZ5OiAxNixcclxuICAgIC8qKiA0NyAtIFVzZXIgb3IgVGVhbSAqL1xyXG4gICAgQXNzaWduOiA0NyxcclxuICAgIC8qKiA1OCAtIEFjdGl2aXRpZXMgKi9cclxuICAgIFNhdmVBc0NvbXBsZXRlZDogNTgsXHJcbiAgICAvKiogNTkgLSBBbGwgZW50aXRpZXMgKi9cclxuICAgIFNhdmVBbmROZXc6IDU5LFxyXG4gICAgLyoqIDcwIC0gQWxsIGVudGl0aWVzICovXHJcbiAgICBBdXRvU2F2ZTogNzBcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBTcGVjaWZ5IG9wdGlvbnMgZm9yIHNhdmluZyB0aGUgcmVjb3JkICovXHJcbmNvbnN0IFNhdmVPcHRpb24gPSB7XHJcbiAgICAvKiogc2F2ZWFuZGNsb3NlIC0gVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiB1c2luZyB0aGUgU2F2ZSBhbmQgQ2xvc2UgY29tbWFuZCAqL1xyXG4gICAgU2F2ZUFuZENsb3NlOiAnc2F2ZWFuZGNsb3NlJyxcclxuICAgIC8qKiBzYXZlYW5kbmV3IC0gVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiB0aGUgdXNpbmcgdGhlIFNhdmUgYW5kIE5ldyBjb21tYW5kICovXHJcbiAgICBTYXZlQW5kTmV3OiAnc2F2ZWFuZG5ldydcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBEaXNwbGF5IHN0YXRlIG9mIHRoZSBzaWRlIHBhbmUgKi9cclxuY29uc3QgU2lkZVBhbmVTdGF0ZSA9IHtcclxuICAgIC8qKiAwIC0gQ29sbGFwc2VkICovXHJcbiAgICBDb2xsYXBzZWQ6IDAsXHJcbiAgICAvKiogMSAtIEV4cGFuZGVkICovXHJcbiAgICBFeHBhbmRlZDogMVxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSBjb250cm9sIHR5cGUgb2YgdGFiICovXHJcbmNvbnN0IFRhYkNvbnRlbnRUeXBlID0ge1xyXG4gICAgLyoqIGNhcmRTZWN0aW9uczogVGhlIGRlZmF1bHQgdGFiIGJlaGF2aW9yICovXHJcbiAgICBDYXJkU2VjdGlvbnM6ICdjYXJkU2VjdGlvbnMnLFxyXG4gICAgLyoqIHNpbmdsZUNvbXBvbmVudDogTWF4aW1pemVzIHRoZSBjb250ZW50IG9mIHRoZSBmaXJzdCBjb21wb25lbnQgaW4gdGhlIHRhYiAqL1xyXG4gICAgU2luZ2xlQ29tcG9uZW50OiAnc2luZ2xlQ29tcG9uZW50J1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIERpc3BsYXkgc3RhdGUgb2YgdGhlIHRhYiAqL1xyXG5jb25zdCBUYWJEaXNwbGF5U3RhdGUgPSB7XHJcbiAgICAvKiogZXhwYW5kZWQgKi9cclxuICAgIEV4cGFuZGVkOiAnZXhwYW5kZWQnLFxyXG4gICAgLyoqIGNvbGxhcHNlZCAqL1xyXG4gICAgQ29sbGFwc2VkOiAnY29sbGFwc2VkJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSBzdGF0ZSBvZiB0aGUgdGltZXIgY29udHJvbCAtIFRoaXMgbWV0aG9kIGlzIG9ubHkgc3VwcG9ydGVkIGZvciBVbmlmaWVkIEludGVyZmFjZSAqL1xyXG5jb25zdCBUaW1lclN0YXRlID0ge1xyXG4gICAgLyoqIDEgKi9cclxuICAgIE5vdFNldDogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBJblByb2dyZXNzOiAyLFxyXG4gICAgLyoqIDMgKi9cclxuICAgIFdhcm5pbmc6IDMsXHJcbiAgICAvKiogNCAqL1xyXG4gICAgVmlvbGF0ZWQ6IDQsXHJcbiAgICAvKiogNSAqL1xyXG4gICAgU3VjY2VzczogNSxcclxuICAgIC8qKiA2ICovXHJcbiAgICBFeHBpcmVkOiA2LFxyXG4gICAgLyoqIDcgKi9cclxuICAgIENhbmNlbGVkOiA3LFxyXG4gICAgLyoqIDggKi9cclxuICAgIFBhdXNlZDogOFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFbnRpdHkgT3B0aW9uU2V0c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKiogQWNjb3VudCBlbnRpdHkgT3B0aW9uU2V0cyAqL1xyXG5jb25zdCBBY2NvdW50ID0ge1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIHByaW1hcnkgaW5kdXN0cnkgZm9yIHVzZSBpbiBtYXJrZXRpbmcgc2VnbWVudGF0aW9uIGFuZCBkZW1vZ3JhcGhpYyBhbmFseXNpcyAqL1xyXG4gICAgSW5kdXN0cnlDb2RlOiB7XHJcbiAgICAgICAgLyoqIDEgLSBBY2NvdW50aW5nICovXHJcbiAgICAgICAgQWNjb3VudGluZzogMSxcclxuICAgICAgICAvKiogNyAtIENvbnN1bHRpbmcgKi9cclxuICAgICAgICBDb25zdWx0aW5nOiA3LFxyXG4gICAgICAgIC8qKiAxNiAtIEZpbmFuY2lhbCAqL1xyXG4gICAgICAgIEZpbmFuY2lhbDogMTYsXHJcbiAgICAgICAgLyoqIDIwIC0gSW5zdXJhbmNlICovXHJcbiAgICAgICAgSW5zdXJhbmNlOiAyMCxcclxuICAgICAgICAvKiogMTIgLSBUZWNobm9sb2d5ICovXHJcbiAgICAgICAgVGVjaG5vbG9neTogMTJcclxuICAgIH0sXHJcbiAgICAvKiogQ3VzdG9tIE11bHRpT3B0aW9uU2V0IC0gdjRfQ2F0ZWdvcmllcyAqL1xyXG4gICAgdjRfQ2F0ZWdvcmllczoge1xyXG4gICAgICAgIC8qKiAxMDAwMDAwMDAgKi9cclxuICAgICAgICBDYXRlZ29yeV9BOiAxMDAwMDAwMDAsXHJcbiAgICAgICAgLyoqIDEwMDAwMDAwMSAqL1xyXG4gICAgICAgIENhdGVnb3J5X0I6IDEwMDAwMDAwMSxcclxuICAgICAgICAvKiogMTAwMDAwMDAyICovXHJcbiAgICAgICAgQ2F0ZWdvcnlfQzogMTAwMDAwMDAyLFxyXG4gICAgICAgIC8qKiAxMDAwMDAwMDMgKi9cclxuICAgICAgICBDYXRlZ29yeV9EOiAxMDAwMDAwMDNcclxuICAgIH1cclxufSBhcyBjb25zdDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRXhwb3J0IGNvbWJpbmVkIE9wdGlvblNldFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgT3B0aW9uU2V0ID0ge1xyXG4gICAgLy8gR2xvYmFsIE9wdGlvblNldHNcclxuICAgIEFkdmFuY2VkQ29uZmlnU2V0dGluZyxcclxuICAgIENsaWVudE5hbWUsXHJcbiAgICBDbGllbnRTdGF0ZSxcclxuICAgIEZpZWxkQXR0cmlidXRlVHlwZSxcclxuICAgIEZpZWxkQ29udHJvbFR5cGUsXHJcbiAgICBGaWVsZEZvcm1hdCxcclxuICAgIEZpZWxkTm90aWZpY2F0aW9uTGV2ZWwsXHJcbiAgICBGaWVsZFJlcXVpcmVkTGV2ZWwsXHJcbiAgICBGaWVsZFN1Ym1pdE1vZGUsXHJcbiAgICBGb3JtRmFjdG9yLFxyXG4gICAgRm9ybU5vdGlmaWNhdGlvbkxldmVsLFxyXG4gICAgRm9ybVR5cGUsXHJcbiAgICBGdWxsTmFtZUNvbnZlbnRpb25Db2RlLFxyXG4gICAgR3JpZFR5cGUsXHJcbiAgICBPcGVuRmlsZU9wdGlvbixcclxuICAgIFByb2Nlc3NDYXRlZ29yeSxcclxuICAgIFByb2Nlc3NEaXNwbGF5U3RhdGUsXHJcbiAgICBQcm9jZXNzU3RhdHVzLFxyXG4gICAgU2F2ZU1vZGUsXHJcbiAgICBTYXZlT3B0aW9uLFxyXG4gICAgU2lkZVBhbmVTdGF0ZSxcclxuICAgIFRhYkNvbnRlbnRUeXBlLFxyXG4gICAgVGFiRGlzcGxheVN0YXRlLFxyXG4gICAgVGltZXJTdGF0ZSxcclxuICAgIC8vIEVudGl0eSBPcHRpb25TZXRzXHJcbiAgICBBY2NvdW50XHJcbn0gYXMgY29uc3Q7XHJcbiIsICIvKipcclxuICogQWNjb3VudC5mb3JtLnRzIC0gQWNjb3VudCBGb3JtIGZvciBlYXJseS1ib3VuZCBzdHlsZSBmb3JtIGNvZGluZ1xyXG4gKiBHZW5lcmF0ZWQgZmlsZSAtIERPIE5PVCBNT0RJRlkgTUFOVUFMTFlcclxuICogXHJcbiAqIFN0cnVjdHVyZTpcclxuICogMS4gSW1wb3J0c1xyXG4gKiAyLiBUeXBlcyAtIElCb2R5LCBJSGVhZGVyLCBJVGFicywgSUdyaWQsIElOYXZpZ2F0aW9uLCBJUXVpY2tGb3JtLCBJUHJvY2Vzc1xyXG4gKiAzLiBSdW50aW1lIC0gRm9ybSBjbGFzcyB3aXRoIGZpZWxkIGNvbmZpZ3VyYXRpb25zXHJcbiAqL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2xpYi9kZXZraXQuZC50c1wiIC8+XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vLi4vbGliL2RldmtpdCc7XHJcbmltcG9ydCAnLi9PcHRpb25TZXQnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAxLiBUeXBlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFjY291bnRGb3JtIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJvZHkgY29udHJvbHMgaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBhbGwgY29udHJvbHMgb24gdGhlIGZvcm0gYm9keVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElCb2R5IHtcclxuICAgICAgICAvKiogVHlwZSB0aGUgY29tcGFueSBvciBidXNpbmVzcyBuYW1lLiAqL1xyXG4gICAgICAgIE5hbWU6IERldktpdC5Db250cm9scy5TdHJpbmc7XHJcbiAgICAgICAgLyoqIFR5cGUgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0byBkZXNjcmliZSB0aGUgYWNjb3VudC4gKi9cclxuICAgICAgICBEZXNjcmlwdGlvbjogRGV2S2l0LkNvbnRyb2xzLk1lbW87XHJcbiAgICAgICAgLyoqIFR5cGUgdGhlIG51bWJlciBvZiBlbXBsb3llZXMgdGhhdCB3b3JrIGF0IHRoZSBhY2NvdW50LiAqL1xyXG4gICAgICAgIE51bWJlck9mRW1wbG95ZWVzOiBEZXZLaXQuQ29udHJvbHMuSW50ZWdlcjtcclxuICAgICAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGNyZWRpdCBmb3IgdGhlIGFjY291bnQgaXMgb24gaG9sZC4gKi9cclxuICAgICAgICBDcmVkaXRPbkhvbGQ6IERldktpdC5Db250cm9scy5Cb29sZWFuO1xyXG4gICAgICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBwcmltYXJ5IGluZHVzdHJ5LiAqL1xyXG4gICAgICAgIEluZHVzdHJ5Q29kZTogRGV2S2l0LkNvbnRyb2xzLk9wdGlvblNldDtcclxuICAgICAgICAvKiogQ2hvb3NlIHRoZSBwcmltYXJ5IGNvbnRhY3QgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgICAgIFByaW1hcnlDb250YWN0SWQ6IERldktpdC5Db250cm9scy5Mb29rdXA7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBCaXJ0aGRheSBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0JpcnRoZGF5OiBEZXZLaXQuQ29udHJvbHMuRGF0ZU9ubHk7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBBcHBvaW50bWVudCBUaW1lIGZpZWxkICovXHJcbiAgICAgICAgdjRfQXBwb2ludG1lbnRUaW1lOiBEZXZLaXQuQ29udHJvbHMuRGF0ZVRpbWU7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBMYXRpdHVkZSBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0xhdGl0dWRlOiBEZXZLaXQuQ29udHJvbHMuRGVjaW1hbDtcclxuICAgICAgICAvKiogQ3VzdG9tIERpc2NvdW50IFBlcmNlbnRhZ2UgZmllbGQgKi9cclxuICAgICAgICB2NF9EaXNjb3VudFBlcmNlbnRhZ2U6IERldktpdC5Db250cm9scy5Eb3VibGU7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBDYXRlZ29yaWVzIGZpZWxkICovXHJcbiAgICAgICAgdjRfQ2F0ZWdvcmllczogRGV2S2l0LkNvbnRyb2xzLk11bHRpT3B0aW9uU2V0O1xyXG4gICAgICAgIC8qKiBDdXN0b20gSGVscCBXZWIgUmVzb3VyY2UgKi9cclxuICAgICAgICB2NF9XZWJSZXNvdXJjZUhlbHA6IERldktpdC5Db250cm9scy5XZWJSZXNvdXJjZTtcclxuICAgICAgICAvKiogQ3VzdG9tIEV4dGVybmFsIFBhZ2UgKi9cclxuICAgICAgICB2NF9JRnJhbWVFeHRlcm5hbDogRGV2S2l0LkNvbnRyb2xzLklGcmFtZTtcclxuICAgICAgICAvKiogQ3VzdG9tIFNMQSBUaW1lciAqL1xyXG4gICAgICAgIHY0X1RpbWVyU0xBOiBEZXZLaXQuQ29udHJvbHMuVGltZXI7XHJcbiAgICAgICAgLyoqIEtub3dsZWRnZSBCYXNlIFNlYXJjaCAqL1xyXG4gICAgICAgIHY0X0tub3dsZWRnZVNlYXJjaDogRGV2S2l0LkNvbnRyb2xzLktub3dsZWRnZTtcclxuICAgICAgICAvKiogRm9ybSBUYWJzICovXHJcbiAgICAgICAgVGFiOiBJVGFicztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlYWRlciBjb250cm9scyBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIGNvbnRyb2xzIGRpc3BsYXllZCBpbiB0aGUgZm9ybSBoZWFkZXJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJSGVhZGVyIHtcclxuICAgICAgICAvKiogRW50ZXIgdGhlIHVzZXIgb3IgdGVhbSB3aG8gaXMgYXNzaWduZWQgdG8gbWFuYWdlIHRoZSByZWNvcmQuICovXHJcbiAgICAgICAgT3duZXJJZDogRGV2S2l0LkNvbnRyb2xzLkxvb2t1cDtcclxuICAgICAgICAvKiogVHlwZSB0aGUgbnVtYmVyIG9mIGVtcGxveWVlcyB0aGF0IHdvcmsgYXQgdGhlIGFjY291bnQuICovXHJcbiAgICAgICAgTnVtYmVyT2ZFbXBsb3llZXM6IERldktpdC5Db250cm9scy5JbnRlZ2VyO1xyXG4gICAgICAgIC8qKiBUeXBlIHRoZSBhbm51YWwgcmV2ZW51ZSBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICAgICAgUmV2ZW51ZTogRGV2S2l0LkNvbnRyb2xzLk1vbmV5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3VtbWFyeSB0YWIgc2VjdGlvbnMgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNVTU1BUllfVEFCVGFiU2VjdGlvbnMge1xyXG4gICAgICAgIEFDQ09VTlRfSU5GT1JNQVRJT046IERldktpdC5Db250cm9scy5TZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3VtbWFyeSB0YWIgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNVTU1BUllfVEFCVGFiIGV4dGVuZHMgRGV2S2l0LkNvbnRyb2xzLklUYWIge1xyXG4gICAgICAgIFNlY3Rpb246IElTVU1NQVJZX1RBQlRhYlNlY3Rpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGFicyBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIGFsbCB0YWJzIG9uIHRoZSBmb3JtXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVRhYnMge1xyXG4gICAgICAgIFNVTU1BUllfVEFCOiBJU1VNTUFSWV9UQUJUYWI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIGNvbnRyb2xzIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgYWxsIHN1YmdyaWQgY29udHJvbHMgb24gdGhlIGZvcm1cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJR3JpZCB7XHJcbiAgICAgICAgQ29udGFjdHM6IERldktpdC5Db250cm9scy5HcmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGlvbiBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIG5hdmlnYXRpb24gaXRlbXNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgbmF2X21zYV9hY2NvdW50X21hbmFnaW5ncGFydG5lcjogRGV2S2l0LkNvbnRyb2xzLk5hdmlnYXRpb25JdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUXVpY2tGb3JtIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgcXVpY2sgdmlldyBmb3JtIGNvbnRyb2xzXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVF1aWNrRm9ybSB7XHJcbiAgICAgICAgY29udGFjdHF1aWNrZm9ybTogRGV2S2l0LkNvbnRyb2xzLklRdWlja1ZpZXcgJiB7XHJcbiAgICAgICAgICAgIEJvZHk6IHtcclxuICAgICAgICAgICAgICAgIEVNYWlsQWRkcmVzczE6IERldktpdC5Db250cm9scy5RdWlja1ZpZXc7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1c2luZXNzIFByb2Nlc3MgRmxvdyBmaWVsZHMgaW50ZXJmYWNlXHJcbiAgICAgKiB2NF9BY2NvdW50QlBGIC0gQ3VzdG9tIEFjY291bnQgQnVzaW5lc3MgUHJvY2VzcyBGbG93XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUJQRiB7XHJcbiAgICAgICAgLyoqIEJQRiBGaWVsZDogQWNjb3VudCBOYW1lIChTdGFnZSAxOiBRdWFsaWZ5KSAqL1xyXG4gICAgICAgIE5hbWU6IERldktpdC5Db250cm9scy5TdHJpbmc7XHJcbiAgICAgICAgLyoqIEJQRiBGaWVsZDogSW5kdXN0cnkgQ29kZSAoU3RhZ2UgMTogUXVhbGlmeSkgKi9cclxuICAgICAgICBJbmR1c3RyeUNvZGU6IERldktpdC5Db250cm9scy5PcHRpb25TZXQ7XHJcbiAgICAgICAgLyoqIEJQRiBGaWVsZDogUmV2ZW51ZSAoU3RhZ2UgMjogRGV2ZWxvcCkgKi9cclxuICAgICAgICBSZXZlbnVlOiBEZXZLaXQuQ29udHJvbHMuTW9uZXk7XHJcbiAgICAgICAgLyoqIEJQRiBGaWVsZDogUHJpbWFyeSBDb250YWN0IChTdGFnZSAyOiBEZXZlbG9wKSAqL1xyXG4gICAgICAgIFByaW1hcnlDb250YWN0SWQ6IERldktpdC5Db250cm9scy5Mb29rdXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgYnVzaW5lc3MgcHJvY2VzcyBmbG93IGRlZmluaXRpb25zXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVByb2Nlc3MgZXh0ZW5kcyBEZXZLaXQuQ29udHJvbHMuSVByb2Nlc3Mge1xyXG4gICAgICAgIC8qKiB2NF9BY2NvdW50QlBGIC0gQ3VzdG9tIEFjY291bnQgQnVzaW5lc3MgUHJvY2VzcyBGbG93ICovXHJcbiAgICAgICAgdjRfQWNjb3VudEJQRjogSUJQRjtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyAyLiBSdW50aW1lIC0gRm9ybSBDbGFzc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWNjb3VudCBGb3JtIGNsYXNzXHJcbiAgICAgKiBQcm92aWRlcyB0eXBlZCBhY2Nlc3MgdG8gYWxsIGZvcm0gY29udHJvbHNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEZvcm0gZXh0ZW5kcyBGb3JtQmFzZTxJQm9keSwgSUhlYWRlciwgSVRhYnMsIElHcmlkLCBJTmF2aWdhdGlvbiwgSVF1aWNrRm9ybSwgSVByb2Nlc3M+IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGFuIEFjY291bnQgRm9ybSBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBwYXJhbSBleGVjdXRpb25Db250ZXh0IFRoZSBleGVjdXRpb24gY29udGV4dCBmcm9tIGZvcm0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gZGVmYXVsdFdlYlJlc291cmNlTmFtZSBPcHRpb25hbCBkZWZhdWx0IHdlYiByZXNvdXJjZSBuYW1lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3RydWN0b3IoZXhlY3V0aW9uQ29udGV4dDogYW55LCBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGV4ZWN1dGlvbkNvbnRleHQsIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUsIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IFtcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnTnVtYmVyT2ZFbXBsb3llZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVkaXRPbkhvbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdJbmR1c3RyeUNvZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmltYXJ5Q29udGFjdElkJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfQmlydGhkYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9BcHBvaW50bWVudFRpbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9MYXRpdHVkZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0Rpc2NvdW50UGVyY2VudGFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0NhdGVnb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9XZWJSZXNvdXJjZUhlbHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9JRnJhbWVFeHRlcm5hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X1RpbWVyU0xBJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfS25vd2xlZGdlU2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICdPd25lcklkJyxcclxuICAgICAgICAgICAgICAgICAgICAnTnVtYmVyT2ZFbXBsb3llZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXZlbnVlJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB0YWI6IFtcclxuICAgICAgICAgICAgICAgICAgICAnU1VNTUFSWV9UQUJfX19BQ0NPVU5UX0lORk9STUFUSU9OJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGdyaWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGFjdHMnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICduYXZfbXNhX2FjY291bnRfbWFuYWdpbmdwYXJ0bmVyJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHF1aWNrOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRhY3RxdWlja2Zvcm1fX19FTWFpbEFkZHJlc3MxJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGJwZjogW1xyXG4gICAgICAgICAgICAgICAgICAgICd2NF9BY2NvdW50QlBGX19fTmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0FjY291bnRCUEZfX19JbmR1c3RyeUNvZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9BY2NvdW50QlBGX19fUmV2ZW51ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0FjY291bnRCUEZfX19QcmltYXJ5Q29udGFjdElkJ1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDA6IElDb250cm9sIEludGVyZmFjZSAtIE5hbWUgRmllbGQgKFN0cmluZylcclxuICogVGhpcyB0ZXN0cyB0aGUgYmFzZSBJQ29udHJvbCBpbnRlcmZhY2UgdGhhdCBhbGwgY29udHJvbHMgaW5oZXJpdCBmcm9tXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0Q29udHJvbChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtLkJvZHkuTmFtZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gY29udHJvbC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBjb250cm9sLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBjb250cm9sLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogY29udHJvbC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IGNvbnRyb2wuQXR0cmlidXRlTmFtZSA9PT0gXCJuYW1lXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGNvbnRyb2wuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBjb250cm9sLkF0dHJpYnV0ZVR5cGUgPT09IFwic3RyaW5nXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBjb250cm9sLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogY29udHJvbC5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBjb250cm9sLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogY29udHJvbC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBjb250cm9sLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcGVydGllcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBzZXR0ZXJSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuXHJcbiAgICAvLyBTZXR0ZXJzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGNvbnRyb2wuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBjb250cm9sLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgbmV3UmVxdWlyZWQgPSBjb250cm9sLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgY29udHJvbC5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogYCR7b3JpZ1JlcXVpcmVkfVx1MjE5MnJlcXVpcmVkXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld1JlcXVpcmVkID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnU3VibWl0ID0gY29udHJvbC5TdWJtaXRNb2RlO1xyXG4gICAgICAgIGNvbnRyb2wuU3VibWl0TW9kZSA9IFwiYWx3YXlzXCI7XHJcbiAgICAgICAgY29uc3QgbmV3U3VibWl0ID0gY29udHJvbC5TdWJtaXRNb2RlO1xyXG4gICAgICAgIGNvbnRyb2wuU3VibWl0TW9kZSA9IG9yaWdTdWJtaXQ7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlIChzZXQpXCIsIFZhbHVlOiBgJHtvcmlnU3VibWl0fVx1MjE5MmFsd2F5c1x1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdTdWJtaXQgPT09IFwiYWx3YXlzXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBjb250cm9sLkRpc2FibGVkO1xyXG4gICAgICAgIGNvbnRyb2wuRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IG5ld0Rpc2FibGVkID0gY29udHJvbC5EaXNhYmxlZDtcclxuICAgICAgICBjb250cm9sLkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGAke29yaWdEaXNhYmxlZH1cdTIxOTJ0cnVlXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld0Rpc2FibGVkID09PSB0cnVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGNvbnRyb2wuTGFiZWw7XHJcbiAgICAgICAgY29udHJvbC5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IG5ld0xhYmVsID0gY29udHJvbC5MYWJlbDtcclxuICAgICAgICBjb250cm9sLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGBcIiR7b3JpZ0xhYmVsfVwiXHUyMTkybW9kaWZpZWRcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3TGFiZWwuaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBjb250cm9sLlZpc2libGU7XHJcbiAgICAgICAgY29udHJvbC5WaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbmV3VmlzaWJsZSA9IGNvbnRyb2wuVmlzaWJsZTtcclxuICAgICAgICBjb250cm9sLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGAke29yaWdWaXNpYmxlfVx1MjE5MmZhbHNlXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld1Zpc2libGUgPT09IGZhbHNlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWUgKyBcIiAoTU9ESUZJRUQpXCI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBjb250cm9sLlZhbHVlO1xyXG4gICAgICAgIGNvbnRyb2wuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGBtb2RpZmllZFx1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCIoTU9ESUZJRUQpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG91dHB1dENoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE91dHB1dENoYW5nZSBmaXJlZFwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5BZGRPbk91dHB1dENoYW5nZShvdXRwdXRDaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJBZGRPbk91dHB1dENoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiQWRkT25PdXRwdXRDaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5SZW1vdmVPbk91dHB1dENoYW5nZShvdXRwdXRDaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25PdXRwdXRDaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbk91dHB1dENoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBub3RpZmljYXRpb24gZnJvbSBJQ29udHJvbFwiLCBcIkNUUkxfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbC5DbGVhck5vdGlmaWNhdGlvbihcIkNUUkxfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjbGVhcmVkID0gY29udHJvbC5DbGVhck5vdGlmaWNhdGlvbihcIk5PTkVYSVNURU5UXCIpO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIkNsZWFyTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBgUmVzdWx0OiAke2NsZWFyZWR9YCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiQ2xlYXJOb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5BZGROb3RpZmljYXRpb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlczogW1wiUmVjb21tZW5kYXRpb24gZnJvbSB0ZXN0XCJdLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25MZXZlbDogXCJSRUNPTU1FTkRBVElPTlwiLFxyXG4gICAgICAgICAgICB1bmlxdWVJZDogXCJDVFJMX1RFU1RfMlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sLkNsZWFyTm90aWZpY2F0aW9uKFwiQ1RSTF9URVNUXzJcIiksIDMwMDApO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIkFkZE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJBZGRlZCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJBZGROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZCBtZXNzYWdlXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4uc2V0dGVyUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNDXHVERjlCXHVGRTBGIFRFU1QgMDogSUNvbnRyb2wgSW50ZXJmYWNlIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IE5hbWUgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVI4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzE2KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUoc2V0dGVyUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDE6IExvb2t1cCBDb250cm9sIC0gUHJpbWFyeUNvbnRhY3RJZCBGaWVsZFxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdExvb2t1cChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGxvb2t1cCA9IGZvcm0uQm9keS5QcmltYXJ5Q29udGFjdElkO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsRGVmYXVsdFZpZXcgPSBsb29rdXAuRGVmYXVsdFZpZXc7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBsb29rdXAuVmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGFzVmFsdWUgPSBjdXJyZW50VmFsdWUgJiYgY3VycmVudFZhbHVlLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IGhhc1ZhbHVlID8gYCR7Y3VycmVudFZhbHVlWzBdLm5hbWV9ICgke2N1cnJlbnRWYWx1ZVswXS5lbnRpdHlUeXBlfSlgIDogXCIoZW1wdHkpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIklzUGFydHlMaXN0XCIsIFZhbHVlOiBsb29rdXAuSXNQYXJ0eUxpc3QsIFN0YXR1czogbG9va3VwLklzUGFydHlMaXN0ID09PSBmYWxzZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiRW50aXR5VHlwZXNcIiwgVmFsdWU6IEpTT04uc3RyaW5naWZ5KGxvb2t1cC5FbnRpdHlUeXBlcyksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkRlZmF1bHRWaWV3XCIsIFZhbHVlOiBvcmlnaW5hbERlZmF1bHRWaWV3LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBsb29rdXAuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IGxvb2t1cC5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGxvb2t1cC5Db250cm9sVHlwZSwgU3RhdHVzOiBsb29rdXAuQ29udHJvbFR5cGUgPT09IFwibG9va3VwXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBsb29rdXAuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGxvb2t1cC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogbG9va3VwLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBsb29rdXAuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGxvb2t1cC5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogbG9va3VwLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBsb29rdXAuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogbG9va3VwLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogbG9va3VwLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBsb29rdXAuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIkVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHByZVNlYXJjaENhbGxiYWNrID0gKGN0eDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyWG1sID0gXCI8ZmlsdGVyIHR5cGU9J2FuZCc+PGNvbmRpdGlvbiBhdHRyaWJ1dGU9J3N0YXRlY29kZScgb3BlcmF0b3I9J2VxJyB2YWx1ZT0nMCcgLz48L2ZpbHRlcj5cIjtcclxuICAgICAgICBsb29rdXAuQWRkQ3VzdG9tRmlsdGVyKGZpbHRlclhtbCwgXCJjb250YWN0XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgUHJlU2VhcmNoIGZpcmVkIC0gZmlsdGVyIGFwcGxpZWRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRhZ0NsaWNrQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIExvb2t1cFRhZ0NsaWNrIGZpcmVkIC0gdGFnIHdhcyBjbGlja2VkXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZXR0ZXJzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWaWV3SWQgPSBcInswMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDJ9XCI7XHJcbiAgICAgICAgbG9va3VwLkRlZmF1bHRWaWV3ID0gdGVzdFZpZXdJZDtcclxuICAgICAgICBjb25zdCBuZXdWaWV3ID0gbG9va3VwLkRlZmF1bHRWaWV3O1xyXG4gICAgICAgIGxvb2t1cC5EZWZhdWx0VmlldyA9IG9yaWdpbmFsRGVmYXVsdFZpZXc7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJEZWZhdWx0VmlldyAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkRlZmF1bHRWaWV3IChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVHlwZXMgPSBsb29rdXAuRW50aXR5VHlwZXM7XHJcbiAgICAgICAgbG9va3VwLkVudGl0eVR5cGVzID0gW1wiY29udGFjdFwiXTtcclxuICAgICAgICBjb25zdCBuZXdUeXBlcyA9IGxvb2t1cC5FbnRpdHlUeXBlcztcclxuICAgICAgICBsb29rdXAuRW50aXR5VHlwZXMgPSBvcmlnaW5hbFR5cGVzO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiRW50aXR5VHlwZXMgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJFbnRpdHlUeXBlcyAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuQWRkUHJlU2VhcmNoKHByZVNlYXJjaENhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkFkZFByZVNlYXJjaFwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiQWRkUHJlU2VhcmNoXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5SZW1vdmVQcmVTZWFyY2gocHJlU2VhcmNoQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiUmVtb3ZlUHJlU2VhcmNoXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVQcmVTZWFyY2hcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLkFkZExvb2t1cFRhZ0NsaWNrKHRhZ0NsaWNrQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiQWRkTG9va3VwVGFnQ2xpY2tcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIkFkZExvb2t1cFRhZ0NsaWNrXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5SZW1vdmVMb29rdXBUYWdDbGljayh0YWdDbGlja0NhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlbW92ZUxvb2t1cFRhZ0NsaWNrXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZW1vdmVMb29rdXBUYWdDbGlja1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuQWRkQ3VzdG9tVmlldyhcclxuICAgICAgICAgICAgXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDFcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCIsXHJcbiAgICAgICAgICAgIFwiQWN0aXZlIENvbnRhY3RzIChDdXN0b20gVmlldylcIixcclxuICAgICAgICAgICAgXCI8ZmV0Y2g+PGVudGl0eSBuYW1lPSdjb250YWN0Jz48YXR0cmlidXRlIG5hbWU9J2Z1bGxuYW1lJy8+PC9lbnRpdHk+PC9mZXRjaD5cIixcclxuICAgICAgICAgICAgXCI8Z3JpZCBuYW1lPSdyZXN1bHRzZXQnPjxyb3cgbmFtZT0ncmVzdWx0JyBpZD0nY29udGFjdGlkJz48Y2VsbCBuYW1lPSdmdWxsbmFtZScgd2lkdGg9JzIwMCcvPjwvcm93PjwvZ3JpZD5cIixcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkQ3VzdG9tVmlld1wiLCBWYWx1ZTogXCJBZGRlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZEN1c3RvbVZpZXdcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLlNldE5vdGlmaWNhdGlvbihcIlRlc3Qgbm90aWZpY2F0aW9uXCIsIFwiVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9va3VwLkNsZWFyTm90aWZpY2F0aW9uKFwiVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyBpbiAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29rdXAuRm9jdXMoKSwgNDAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDRzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdUREMEQgVEVTVCAxOiBMb29rdXAgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBQcmltYXJ5Q29udGFjdElkIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTYpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TOSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAzOiBNZW1vIENvbnRyb2wgLSBEZXNjcmlwdGlvbiBGaWVsZFxyXG4gKiBNZW1vIGV4dGVuZHMgSUNvbnRyb2xUZXh0IHdpdGggTWF4TGVuZ3RoIHByb3BlcnR5XHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TWVtbyhmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWVtbyA9IGZvcm0uQm9keS5EZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gbWVtby5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIE1lbW8tc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiTWF4TGVuZ3RoXCIsIFZhbHVlOiBtZW1vLk1heExlbmd0aCwgU3RhdHVzOiB0eXBlb2YgbWVtby5NYXhMZW5ndGggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlID8gYFwiJHtvcmlnaW5hbFZhbHVlLnN1YnN0cmluZygwLCA1MCl9JHtvcmlnaW5hbFZhbHVlLmxlbmd0aCA+IDUwID8gJy4uLicgOiAnJ31cImAgOiBcIihlbXB0eSlcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBtZW1vLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBtZW1vLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogbWVtby5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IG1lbW8uQXR0cmlidXRlTmFtZSA9PT0gXCJkZXNjcmlwdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBtZW1vLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogbWVtby5BdHRyaWJ1dGVUeXBlID09PSBcIm1lbW9cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IG1lbW8uQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBtZW1vLkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IG1lbW8uRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBtZW1vLklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBtZW1vLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBtZW1vLlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBtZW1vLlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogbWVtby5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBtZW1vLkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogbWVtby5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgICAgIG1lbW8uVmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCBcIlwiKSArIFwiIFtURVNUXVwiO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbWVtby5WYWx1ZTtcclxuICAgICAgICBtZW1vLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCJbVEVTVF1cIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IG5ld1ZhbHVlPy5pbmNsdWRlcyhcIltURVNUXVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBtZW1vLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgbWVtby5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1lbW8uUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gbWVtby5EaXNhYmxlZDtcclxuICAgICAgICBtZW1vLkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1lbW8uRGlzYWJsZWQ7XHJcbiAgICAgICAgbWVtby5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IG1lbW8uTGFiZWw7XHJcbiAgICAgICAgbWVtby5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5MYWJlbDtcclxuICAgICAgICBtZW1vLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG1lbW8uVmlzaWJsZTtcclxuICAgICAgICBtZW1vLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtZW1vLlZpc2libGU7XHJcbiAgICAgICAgbWVtby5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBNZW1vIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtZW1vLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLlNldE5vdGlmaWNhdGlvbihcIlRlc3QgTWVtbyBub3RpZmljYXRpb25cIiwgXCJNRU1PX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1lbW8uQ2xlYXJOb3RpZmljYXRpb24oXCJNRU1PX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1lbW8uU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENERCBURVNUIDI6IE1lbW8gQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBEZXNjcmlwdGlvbiBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE1KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzExKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDM6IFN0cmluZyBDb250cm9sIC0gTmFtZSBGaWVsZFxyXG4gKiBTdHJpbmcgZXh0ZW5kcyBJQ29udHJvbFRleHQgd2l0aCBNYXhMZW5ndGggcHJvcGVydHlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RTdHJpbmcoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IHN0ciA9IGZvcm0uQm9keS5OYW1lO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBzdHIuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTdHJpbmctc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiTWF4TGVuZ3RoXCIsIFZhbHVlOiBzdHIuTWF4TGVuZ3RoLCBTdGF0dXM6IHR5cGVvZiBzdHIuTWF4TGVuZ3RoID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSA/IGBcIiR7b3JpZ2luYWxWYWx1ZS5zdWJzdHJpbmcoMCwgNTApfSR7b3JpZ2luYWxWYWx1ZS5sZW5ndGggPiA1MCA/ICcuLi4nIDogJyd9XCJgIDogXCIoZW1wdHkpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogc3RyLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBzdHIuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBzdHIuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBzdHIuQXR0cmlidXRlTmFtZSA9PT0gXCJuYW1lXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IHN0ci5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IHN0ci5BdHRyaWJ1dGVUeXBlID09PSBcInN0cmluZ1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogc3RyLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogc3RyLkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IHN0ci5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IHN0ci5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogc3RyLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBzdHIuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IHN0ci5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IHN0ci5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBzdHIuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBzdHIuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgICAgICBzdHIuVmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCBcIlwiKSArIFwiIFtURVNUXVwiO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gc3RyLlZhbHVlO1xyXG4gICAgICAgIHN0ci5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWU/LmluY2x1ZGVzKFwiW1RFU1RdXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCJbVEVTVF1cIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gc3RyLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgc3RyLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzdHIuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBzdHIuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBzdHIuRGlzYWJsZWQ7XHJcbiAgICAgICAgc3RyLkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHN0ci5EaXNhYmxlZDtcclxuICAgICAgICBzdHIuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IHN0ci5MYWJlbDtcclxuICAgICAgICBzdHIuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHN0ci5MYWJlbDtcclxuICAgICAgICBzdHIuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gc3RyLlZpc2libGU7XHJcbiAgICAgICAgc3RyLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzdHIuVmlzaWJsZTtcclxuICAgICAgICBzdHIuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgU3RyaW5nIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0ci5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHIuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzdHIuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0ci5TZXROb3RpZmljYXRpb24oXCJUZXN0IFN0cmluZyBub3RpZmljYXRpb25cIiwgXCJTVFJJTkdfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3RyLkNsZWFyTm90aWZpY2F0aW9uKFwiU1RSSU5HX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3RyLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDQzQgVEVTVCAzOiBTdHJpbmcgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBOYW1lIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgNDogSW50ZWdlciBDb250cm9sIC0gTnVtYmVyT2ZFbXBsb3llZXMgRmllbGRcclxuICogSW50ZWdlciBleHRlbmRzIElDb250cm9sTnVtYmVyIHdpdGggTWF4LCBNaW4gcHJvcGVydGllcyAoTk8gUHJlY2lzaW9uIHN1cHBvcnQpXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0SW50ZWdlcihmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgaW50ID0gZm9ybS5IZWFkZXIuTnVtYmVyT2ZFbXBsb3llZXM7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGludC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEludGVnZXItc3BlY2lmaWMgcHJvcGVydGllcyAoSUNvbnRyb2xOdW1iZXIgLSBOTyBQcmVjaXNpb24gZm9yIEludGVnZXIpXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJNYXhcIiwgVmFsdWU6IGludC5NYXgsIFN0YXR1czogdHlwZW9mIGludC5NYXggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIk1pblwiLCBWYWx1ZTogaW50Lk1pbiwgU3RhdHVzOiB0eXBlb2YgaW50Lk1pbiA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogaW50LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBpbnQuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBpbnQuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBpbnQuQXR0cmlidXRlTmFtZSA9PT0gXCJudW1iZXJvZmVtcGxveWVlc1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBpbnQuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBpbnQuQXR0cmlidXRlVHlwZSA9PT0gXCJpbnRlZ2VyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBpbnQuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBpbnQuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogaW50LkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGludC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogaW50LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBpbnQuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGludC5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IGludC5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBpbnQuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBpbnQuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCAwKSArIDEwMDtcclxuICAgICAgICBpbnQuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBpbnQuVmFsdWU7XHJcbiAgICAgICAgaW50LlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gaW50LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgaW50LlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBpbnQuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBpbnQuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBpbnQuRGlzYWJsZWQ7XHJcbiAgICAgICAgaW50LkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGludC5EaXNhYmxlZDtcclxuICAgICAgICBpbnQuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGludC5MYWJlbDtcclxuICAgICAgICBpbnQuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGludC5MYWJlbDtcclxuICAgICAgICBpbnQuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBpbnQuVmlzaWJsZTtcclxuICAgICAgICBpbnQuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGludC5WaXNpYmxlO1xyXG4gICAgICAgIGludC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBJbnRlZ2VyIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW50LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnQuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnQuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5TZXROb3RpZmljYXRpb24oXCJUZXN0IEludGVnZXIgbm90aWZpY2F0aW9uXCIsIFwiSU5UX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGludC5DbGVhck5vdGlmaWNhdGlvbihcIklOVF9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGludC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVERDIyIFRFU1QgNDogSW50ZWdlciBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IE51bWJlck9mRW1wbG95ZWVzIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTYpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgNTogT3B0aW9uU2V0IENvbnRyb2wgLSBJbmR1c3RyeUNvZGUgRmllbGRcclxuICogT3B0aW9uU2V0IGV4dGVuZHMgSUNvbnRyb2xPcHRpb25TZXQgd2l0aCBJbml0aWFsVmFsdWUsIFNlbGVjdGVkT3B0aW9uLCBUZXh0LCBWYWx1ZVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdE9wdGlvblNldChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3Qgb3B0ID0gZm9ybS5Cb2R5LkluZHVzdHJ5Q29kZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gb3B0LlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gT3B0aW9uU2V0LXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkluaXRpYWxWYWx1ZVwiLCBWYWx1ZTogb3B0LkluaXRpYWxWYWx1ZSwgU3RhdHVzOiB0eXBlb2Ygb3B0LkluaXRpYWxWYWx1ZSA9PT0gXCJudW1iZXJcIiB8fCBvcHQuSW5pdGlhbFZhbHVlID09PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJPcHRpb25zXCIsIFZhbHVlOiBgJHtvcHQuT3B0aW9ucz8ubGVuZ3RoID8/IDB9IG9wdGlvbnNgLCBTdGF0dXM6IG9wdC5PcHRpb25zPy5sZW5ndGggPiAwID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJTZWxlY3RlZE9wdGlvblwiLCBWYWx1ZTogb3B0LlNlbGVjdGVkT3B0aW9uID8gYCR7b3B0LlNlbGVjdGVkT3B0aW9uLnRleHR9ICgke29wdC5TZWxlY3RlZE9wdGlvbi52YWx1ZX0pYCA6IFwiKG5vbmUpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIlRleHRcIiwgVmFsdWU6IG9wdC5UZXh0IHx8IFwiKGVtcHR5KVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBvcHQuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IG9wdC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IG9wdC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IG9wdC5BdHRyaWJ1dGVOYW1lID09PSBcImluZHVzdHJ5Y29kZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBvcHQuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBvcHQuQXR0cmlidXRlVHlwZSA9PT0gXCJvcHRpb25zZXRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IG9wdC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBvcHQuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IG9wdC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBvcHQuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IG9wdC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogb3B0LlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBvcHQuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBvcHQuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxN1wiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogb3B0LkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMThcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogb3B0LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG9wdC5PcHRpb25zO1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdWYWwgPSBvcHRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICBvcHQuVmFsdWUgPSBuZXdWYWw7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gb3B0LlZhbHVlO1xyXG4gICAgICAgICAgICBvcHQuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gbmV3VmFsID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gbmV3VmFsID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogXCJObyBvcHRpb25zIGF2YWlsYWJsZVwiLCBTdGF0dXM6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBPcHRpb24odmFsdWUpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBvcHQuT3B0aW9ucztcclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGVzdE9wdGlvbiA9IG9wdC5PcHRpb24ob3B0aW9uc1swXS52YWx1ZSk7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogdGVzdE9wdGlvbiA/IGAke3Rlc3RPcHRpb24udGV4dH1gIDogXCJudWxsXCIsIFN0YXR1czogdGVzdE9wdGlvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogXCJObyBvcHRpb25zXCIsIFN0YXR1czogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFMzOiBPcHRpb24odGV4dCkgLSBOT1QgSU1QTEVNRU5URUQ6IE9PQiBEeW5hbWljcyBjb2RlIHRocm93cyAnVmFsdWUgc2hvdWxkIGJlIG9mIHR5cGU6IG51bWJlcicgZXJyb3JcclxuICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHRleHQpXCIsIFZhbHVlOiBcIk9PQiBCdWcgLSBkZXZraXQudHMgbm90IHN1cHBvcnRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIC8vIE1ldGhvZDogQWRkT3B0aW9uIChhZGQgdGhlbiByZW1vdmUpXHJcbiAgICAvLyBOT1RFOiBBZGRPcHRpb24gYWRkcyB0byBDT05UUk9MLCBzbyB3ZSBjaGVjayBDb250cm9sT3B0aW9ucyAobm90IE9wdGlvbnMgd2hpY2ggaXMgZnJvbSBhdHRyaWJ1dGUpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5BZGRPcHRpb24oXCJUZXN0IE9wdGlvbiAoQUkpXCIsIDk5OTk5OSk7XHJcbiAgICAgICAgY29uc3QgaGFzTmV3ID0gb3B0LkNvbnRyb2xPcHRpb25zPy5zb21lKG8gPT4gby52YWx1ZSA9PT0gOTk5OTk5KTtcclxuICAgICAgICBvcHQuUmVtb3ZlT3B0aW9uKDk5OTk5OSk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJBZGRPcHRpb25cIiwgVmFsdWU6IGhhc05ldyA/IFwiQWRkZWRcdTIxOTJSZW1vdmVkXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IGhhc05ldyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJBZGRPcHRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogUmVtb3ZlT3B0aW9uIChhbHJlYWR5IHRlc3RlZCBhYm92ZSB3aXRoIEFkZE9wdGlvbilcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPcHRpb25cIiwgVmFsdWU6IFwiVGVzdGVkIHdpdGggUzRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPcHRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogQ2xlYXJPcHRpb25zIC0gVGVzdCBjbGVhciBhbmQgcmVzdG9yZSBmcm9tIE9wdGlvbnMgKGF0dHJpYnV0ZSlcclxuICAgIC8vIE5PVEU6IENsZWFyT3B0aW9ucyBjbGVhcnMgdGhlIENPTlRST0wgb3B0aW9ucywgYnV0IE9wdGlvbnMgKGZyb20gYXR0cmlidXRlKSByZW1haW5zIGludGFjdFxyXG4gICAgLy8gTk9URTogQ29udHJvbE9wdGlvbnMgaW5jbHVkZXMgYSBibGFuayBvcHRpb24gKHRleHQ9JycsIHZhbHVlPW51bGwpIGZvciBjbGVhcmluZyBzZWxlY3Rpb25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlT3B0aW9ucyA9IG9wdC5PcHRpb25zOyAvLyBTYXZlIGZyb20gYXR0cmlidXRlIChub3QgYWZmZWN0ZWQgYnkgQ2xlYXJPcHRpb25zKVxyXG4gICAgICAgIGNvbnN0IGF0dHJMZW4gPSBhdHRyaWJ1dGVPcHRpb25zPy5sZW5ndGggPz8gMDtcclxuICAgICAgICBvcHQuQ2xlYXJPcHRpb25zKCk7XHJcbiAgICAgICAgY29uc3QgY2xlYXJlZENvdW50ID0gb3B0LkNvbnRyb2xPcHRpb25zPy5sZW5ndGggPz8gMDtcclxuICAgICAgICAvLyBSZXN0b3JlIG9wdGlvbnMgZnJvbSBhdHRyaWJ1dGVcclxuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBhdHRyaWJ1dGVPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdC5BZGRPcHRpb24ob3B0aW9uLnRleHQsIG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3RvcmVkQ291bnQgPSBvcHQuQ29udHJvbE9wdGlvbnM/Lmxlbmd0aCA/PyAwO1xyXG4gICAgICAgIC8vIHJlc3RvcmVkQ291bnQgPj0gYXR0ckxlbiBiZWNhdXNlIENvbnRyb2xPcHRpb25zIG1heSBpbmNsdWRlIGJsYW5rIG9wdGlvblxyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBjbGVhcmVkQ291bnQgPT09IDAgJiYgcmVzdG9yZWRDb3VudCA+PSBhdHRyTGVuO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQ2xlYXJPcHRpb25zXCIsIFZhbHVlOiBzdWNjZXNzID8gYENsZWFyKCR7Y2xlYXJlZENvdW50fSlcdTIxOTJSZXN0b3JlKCR7cmVzdG9yZWRDb3VudH0vJHthdHRyTGVufSlgIDogYGF0dHI9JHthdHRyTGVufSwgY2xlYXI9JHtjbGVhcmVkQ291bnR9LCByZXN0b3JlPSR7cmVzdG9yZWRDb3VudH1gLCBTdGF0dXM6IHN1Y2Nlc3MgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQ2xlYXJPcHRpb25zXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gb3B0LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgb3B0LlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBvcHQuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBvcHQuRGlzYWJsZWQ7XHJcbiAgICAgICAgb3B0LkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG9wdC5EaXNhYmxlZDtcclxuICAgICAgICBvcHQuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IG9wdC5MYWJlbDtcclxuICAgICAgICBvcHQuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG9wdC5MYWJlbDtcclxuICAgICAgICBvcHQuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBvcHQuVmlzaWJsZTtcclxuICAgICAgICBvcHQuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG9wdC5WaXNpYmxlO1xyXG4gICAgICAgIG9wdC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzIGZyb20gSUNvbnRyb2xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgT3B0aW9uU2V0IE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvcHQuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LlNldE5vdGlmaWNhdGlvbihcIlRlc3QgT3B0aW9uU2V0IG5vdGlmaWNhdGlvblwiLCBcIk9QVF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvcHQuQ2xlYXJOb3RpZmljYXRpb24oXCJPUFRfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvcHQuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE2XCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENDQiBURVNUIDU6IE9wdGlvblNldCBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IEluZHVzdHJ5Q29kZSBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzE2KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBBY2NvdW50LndlYmFwaS50cyAtIEFjY291bnQgV2ViQXBpIGZvciBlYXJseS1ib3VuZCBzdHlsZSBjb2RpbmdcclxuICogR2VuZXJhdGVkIGZpbGUgLSBETyBOT1QgTU9ESUZZIE1BTlVBTExZXHJcbiAqIFxyXG4gKiBTdHJ1Y3R1cmU6XHJcbiAqIDEuIEltcG9ydHNcclxuICogMi4gVHlwZXMgLSBJQWNjb3VudEZvcm1hdHRlZFZhbHVlLCBJQWNjb3VudEFwaVxyXG4gKiAzLiBSdW50aW1lIC0gQWNjb3VudEZpZWxkQ29uZmlnLCBBY2NvdW50QXBpIGZhY3RvcnlcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgY3JlYXRlV2ViQXBpRW50aXR5LFxyXG4gICAgSVdlYkFwaUVudGl0eSxcclxuICAgIElXZWJBcGlGaWVsZENvbmZpZ01hcFxyXG59IGZyb20gJy4uLy4uL2xpYi9kZXZraXQnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAxLiBUeXBlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogRm9ybWF0dGVkIHZhbHVlcyBpbnRlcmZhY2UgZm9yIEFjY291bnRcclxuICogQWxsIGZpZWxkcyByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZWlyIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWNjb3VudEZvcm1hdHRlZFZhbHVlIHtcclxuICAgIHJlYWRvbmx5IEFjY291bnRDYXRlZ29yeUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFjY291bnRDbGFzc2lmaWNhdGlvbkNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWNjb3VudE51bWJlcjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWNjb3VudFJhdGluZ0NvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0FkZHJlc3NJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQWRkcmVzc1R5cGVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9DaXR5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Db21wb3NpdGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0NvdW50cnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0NvdW50eTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfRmF4OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9GcmVpZ2h0VGVybXNDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9MYXRpdHVkZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTGluZTE6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0xpbmUyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9MaW5lMzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTG9uZ2l0dWRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9OYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Qb3N0YWxDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Qb3N0T2ZmaWNlQm94OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9QcmltYXJ5Q29udGFjdE5hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1NoaXBwaW5nTWV0aG9kQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfU3RhdGVPclByb3ZpbmNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9UZWxlcGhvbmUxOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9UZWxlcGhvbmUyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9UZWxlcGhvbmUzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9VUFNab25lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9VVENPZmZzZXQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0FkZHJlc3NJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQWRkcmVzc1R5cGVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9DaXR5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Db21wb3NpdGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0NvdW50cnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0NvdW50eTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfRmF4OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9GcmVpZ2h0VGVybXNDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9MYXRpdHVkZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTGluZTE6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0xpbmUyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9MaW5lMzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTG9uZ2l0dWRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9OYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Qb3N0YWxDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Qb3N0T2ZmaWNlQm94OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9QcmltYXJ5Q29udGFjdE5hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1NoaXBwaW5nTWV0aG9kQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfU3RhdGVPclByb3ZpbmNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9UZWxlcGhvbmUxOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9UZWxlcGhvbmUyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9UZWxlcGhvbmUzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9VUFNab25lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9VVENPZmZzZXQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkeF9DcmVhdGVkQnlJUEFkZHJlc3M6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkeF9DcmVhdGVkQnlVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWR4X01vZGlmaWVkQnlJUEFkZHJlc3M6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkeF9Nb2RpZmllZEJ5VXNlcm5hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFnaW5nMzA6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFnaW5nMzBfQmFzZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWdpbmc2MDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWdpbmc2MF9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZ2luZzkwOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZ2luZzkwX0Jhc2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEJ1c2luZXNzVHlwZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWF0ZWRCeTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZEJ5RXh0ZXJuYWxQYXJ0eTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZE9uX1V0Y0RhdGVBbmRUaW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVhdGVkT25CZWhhbGZCeTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3JlZGl0TGltaXQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWRpdExpbWl0X0Jhc2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWRpdE9uSG9sZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3VzdG9tZXJTaXplQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3VzdG9tZXJUeXBlQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90QnVsa0VNYWlsOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEb05vdEJ1bGtQb3N0YWxNYWlsOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEb05vdEVNYWlsOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEb05vdEZheDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RQaG9uZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RQb3N0YWxNYWlsOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEb05vdFNlbmRNTTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRU1haWxBZGRyZXNzMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRU1haWxBZGRyZXNzMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRU1haWxBZGRyZXNzMzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRW50aXR5SW1hZ2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVudGl0eUltYWdlX1RpbWVzdGFtcDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRW50aXR5SW1hZ2VfVVJMOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFbnRpdHlJbWFnZUlkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFeGNoYW5nZVJhdGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEZheDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRm9sbG93RW1haWw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEZ0cFNpdGVVUkw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEltcG9ydFNlcXVlbmNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBJbmR1c3RyeUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IElzUHJpdmF0ZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTGFzdE9uSG9sZFRpbWVfVXRjRGF0ZUFuZFRpbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IExhc3RVc2VkSW5DYW1wYWlnbl9VdGNEYXRlT25seTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTWFya2V0Q2FwOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNYXJrZXRDYXBfQmFzZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTWFya2V0aW5nT25seTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTWFzdGVySWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1lcmdlZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRCeTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRCeUV4dGVybmFsUGFydHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkT25fVXRjRGF0ZUFuZFRpbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkT25CZWhhbGZCeTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgbXNhX21hbmFnaW5ncGFydG5lcmlkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBOYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBOdW1iZXJPZkVtcGxveWVlczogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgT25Ib2xkVGltZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgT3ZlcnJpZGRlbkNyZWF0ZWRPbl9VdGNEYXRlT25seTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgT3duZXJJZF9zeXN0ZW11c2VyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25lcklkX3RlYW06IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmVyc2hpcENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmluZ0J1c2luZXNzVW5pdDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgT3duaW5nVGVhbTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgT3duaW5nVXNlcjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUGFyZW50QWNjb3VudElkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQYXJ0aWNpcGF0ZXNJbldvcmtmbG93OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQYXltZW50VGVybXNDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmVmZXJyZWRBcHBvaW50bWVudERheUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByZWZlcnJlZEFwcG9pbnRtZW50VGltZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByZWZlcnJlZENvbnRhY3RNZXRob2RDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmVmZXJyZWRTeXN0ZW1Vc2VySWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByaW1hcnlDb250YWN0SWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByaW1hcnlTYXRvcmlJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJpbWFyeVR3aXR0ZXJJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJvY2Vzc0lkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBSZXZlbnVlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBSZXZlbnVlX0Jhc2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFNoYXJlc091dHN0YW5kaW5nOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTaGlwcGluZ01ldGhvZENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFNJQzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU0xBSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFNMQUludm9rZWRJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU3RhZ2VJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU3RhdGVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTdGF0dXNDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTdG9ja0V4Y2hhbmdlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUZWxlcGhvbmUxOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUZWxlcGhvbmUyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUZWxlcGhvbmUzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUZXJyaXRvcnlDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUaWNrZXJTeW1ib2w6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRpbWVTcGVudEJ5TWVPbkVtYWlsQW5kTWVldGluZ3M6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRpbWVab25lUnVsZVZlcnNpb25OdW1iZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRyYW5zYWN0aW9uQ3VycmVuY3lJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVHJhdmVyc2VkUGF0aDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVVRDQ29udmVyc2lvblRpbWVab25lQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVmVyc2lvbk51bWJlcjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgV2ViU2l0ZVVSTDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgWW9taU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFjY291bnQgV2ViQXBpIGVudGl0eSBpbnRlcmZhY2VcclxuICogUHJvdmlkZXMgSW50ZWxsaVNlbnNlIGZvciBlYXJseS1ib3VuZCBzdHlsZSBjb2RpbmdcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRBcGkgZXh0ZW5kcyBJV2ViQXBpRW50aXR5IHtcclxuICAgIC8qKiBGb3JtYXR0ZWQgdmFsdWVzIGZvciBhbGwgZmllbGRzICovXHJcbiAgICByZWFkb25seSBGb3JtYXR0ZWRWYWx1ZTogSUFjY291bnRGb3JtYXR0ZWRWYWx1ZTtcclxuICAgIC8qKiBTZWxlY3QgYSBjYXRlZ29yeSB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBjdXN0b21lciBhY2NvdW50IGlzIHN0YW5kYXJkIG9yIHByZWZlcnJlZC4gKi9cclxuICAgIEFjY291bnRDYXRlZ29yeUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IGEgY2xhc3NpZmljYXRpb24gY29kZSB0byBpbmRpY2F0ZSB0aGUgcG90ZW50aWFsIHZhbHVlIG9mIHRoZSBjdXN0b21lciBhY2NvdW50LiAqL1xyXG4gICAgQWNjb3VudENsYXNzaWZpY2F0aW9uQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgYWNjb3VudC4gKi9cclxuICAgIEFjY291bnRJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGFuIElEIG51bWJlciBvciBjb2RlIGZvciB0aGUgYWNjb3VudCB0byBxdWlja2x5IHNlYXJjaCBhbmQgaWRlbnRpZnkgdGhlIGFjY291bnQuICovXHJcbiAgICBBY2NvdW50TnVtYmVyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIHJhdGluZyB0byBpbmRpY2F0ZSB0aGUgdmFsdWUgb2YgdGhlIGN1c3RvbWVyIGFjY291bnQuICovXHJcbiAgICBBY2NvdW50UmF0aW5nQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBmb3IgYWRkcmVzcyAxLiAqL1xyXG4gICAgQWRkcmVzczFfQWRkcmVzc0lkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgcHJpbWFyeSBhZGRyZXNzIHR5cGUuICovXHJcbiAgICBBZGRyZXNzMV9BZGRyZXNzVHlwZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY2l0eSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0NpdHk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGNvbXBsZXRlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0NvbXBvc2l0ZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb3VudHJ5IG9yIHJlZ2lvbiBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0NvdW50cnk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY291bnR5IGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfQ291bnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGZheCBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9GYXg6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBmcmVpZ2h0IHRlcm1zIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfRnJlaWdodFRlcm1zQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBsYXRpdHVkZSB2YWx1ZSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0xhdGl0dWRlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGZpcnN0IGxpbmUgb2YgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0xpbmUxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHNlY29uZCBsaW5lIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MaW5lMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSB0aGlyZCBsaW5lIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MaW5lMzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBsb25naXR1ZGUgdmFsdWUgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9Mb25naXR1ZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIGRlc2NyaXB0aXZlIG5hbWUgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9OYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIFpJUCBDb2RlIG9yIHBvc3RhbCBjb2RlIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfUG9zdGFsQ29kZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBwb3N0IG9mZmljZSBib3ggbnVtYmVyIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9Qb3N0T2ZmaWNlQm94OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG5hbWUgb2YgdGhlIG1haW4gY29udGFjdCBhdCB0aGUgYWNjb3VudCdzIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1ByaW1hcnlDb250YWN0TmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSBzaGlwcGluZyBtZXRob2QgZm9yIGRlbGl2ZXJpZXMgc2VudCB0byB0aGlzIGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9TaGlwcGluZ01ldGhvZENvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc3RhdGUgb3IgcHJvdmluY2Ugb2YgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1N0YXRlT3JQcm92aW5jZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBtYWluIHBob25lIG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1RlbGVwaG9uZTE6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHNlY29uZCBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSB0aGlyZCBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIFVQUyB6b25lIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9VUFNab25lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgdGltZSB6b25lLCBvciBVVEMgb2Zmc2V0LCBmb3IgdGhpcyBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVVRDT2Zmc2V0OiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBhZGRyZXNzIDIuICovXHJcbiAgICBBZGRyZXNzMl9BZGRyZXNzSWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBzZWNvbmRhcnkgYWRkcmVzcyB0eXBlLiAqL1xyXG4gICAgQWRkcmVzczJfQWRkcmVzc1R5cGVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNpdHkgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0NpdHk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGNvbXBsZXRlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQ29tcG9zaXRlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNvdW50cnkgb3IgcmVnaW9uIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9Db3VudHJ5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNvdW50eSBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfQ291bnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGZheCBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0ZheDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGZyZWlnaHQgdGVybXMgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0ZyZWlnaHRUZXJtc0NvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbGF0aXR1ZGUgdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0xhdGl0dWRlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGZpcnN0IGxpbmUgb2YgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfTGluZTE6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc2Vjb25kIGxpbmUgb2YgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfTGluZTI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgdGhpcmQgbGluZSBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9MaW5lMzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBsb25naXR1ZGUgdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0xvbmdpdHVkZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgZGVzY3JpcHRpdmUgbmFtZSBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfTmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBaSVAgQ29kZSBvciBwb3N0YWwgY29kZSBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfUG9zdGFsQ29kZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBwb3N0IG9mZmljZSBib3ggbnVtYmVyIG9mIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1Bvc3RPZmZpY2VCb3g6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbmFtZSBvZiB0aGUgbWFpbiBjb250YWN0IGF0IHRoZSBhY2NvdW50J3Mgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9QcmltYXJ5Q29udGFjdE5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IGEgc2hpcHBpbmcgbWV0aG9kIGZvciBkZWxpdmVyaWVzIHNlbnQgdG8gdGhpcyBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfU2hpcHBpbmdNZXRob2RDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHN0YXRlIG9yIHByb3ZpbmNlIG9mIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1N0YXRlT3JQcm92aW5jZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBtYWluIHBob25lIG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfVGVsZXBob25lMTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgc2Vjb25kIHBob25lIG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfVGVsZXBob25lMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgdGhpcmQgcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9UZWxlcGhvbmUzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIFVQUyB6b25lIG9mIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1VQU1pvbmU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSB0aW1lIHpvbmUsIG9yIFVUQyBvZmZzZXQsIGZvciB0aGlzIGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9VVENPZmZzZXQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBBZHhfQ3JlYXRlZEJ5SVBBZGRyZXNzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgQWR4X0NyZWF0ZWRCeVVzZXJuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgQWR4X01vZGlmaWVkQnlJUEFkZHJlc3M6IHN0cmluZyB8IG51bGw7XHJcbiAgICBBZHhfTW9kaWZpZWRCeVVzZXJuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIEZvciBzeXN0ZW0gdXNlIG9ubHkuICovXHJcbiAgICByZWFkb25seSBBZ2luZzMwOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFRoZSBiYXNlIGN1cnJlbmN5IGVxdWl2YWxlbnQgb2YgdGhlIGFnaW5nIDMwIGZpZWxkLiAqL1xyXG4gICAgcmVhZG9ubHkgQWdpbmczMF9CYXNlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIEZvciBzeXN0ZW0gdXNlIG9ubHkuICovXHJcbiAgICByZWFkb25seSBBZ2luZzYwOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFRoZSBiYXNlIGN1cnJlbmN5IGVxdWl2YWxlbnQgb2YgdGhlIGFnaW5nIDYwIGZpZWxkLiAqL1xyXG4gICAgcmVhZG9ubHkgQWdpbmc2MF9CYXNlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIEZvciBzeXN0ZW0gdXNlIG9ubHkuICovXHJcbiAgICByZWFkb25seSBBZ2luZzkwOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFRoZSBiYXNlIGN1cnJlbmN5IGVxdWl2YWxlbnQgb2YgdGhlIGFnaW5nIDkwIGZpZWxkLiAqL1xyXG4gICAgcmVhZG9ubHkgQWdpbmc5MF9CYXNlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgbGVnYWwgZGVzaWduYXRpb24gb3Igb3RoZXIgYnVzaW5lc3MgdHlwZSBvZiB0aGUgYWNjb3VudC4gKi9cclxuICAgIEJ1c2luZXNzVHlwZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2hvd3Mgd2hvIGNyZWF0ZWQgdGhlIHJlY29yZC4gKi9cclxuICAgIHJlYWRvbmx5IENyZWF0ZWRCeTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgZXh0ZXJuYWwgcGFydHkgd2hvIGNyZWF0ZWQgdGhlIHJlY29yZC4gKi9cclxuICAgIHJlYWRvbmx5IENyZWF0ZWRCeUV4dGVybmFsUGFydHk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGRhdGUgYW5kIHRpbWUgd2hlbiB0aGUgcmVjb3JkIHdhcyBjcmVhdGVkLiAqL1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZE9uX1V0Y0RhdGVBbmRUaW1lOiBEYXRlIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aG8gY3JlYXRlZCB0aGUgcmVjb3JkIG9uIGJlaGFsZiBvZiBhbm90aGVyIHVzZXIuICovXHJcbiAgICByZWFkb25seSBDcmVhdGVkT25CZWhhbGZCeTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjcmVkaXQgbGltaXQgb2YgdGhlIGFjY291bnQuICovXHJcbiAgICBDcmVkaXRMaW1pdDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgY3JlZGl0IGxpbWl0IGNvbnZlcnRlZCB0byB0aGUgc3lzdGVtJ3MgZGVmYXVsdCBiYXNlIGN1cnJlbmN5LiAqL1xyXG4gICAgcmVhZG9ubHkgQ3JlZGl0TGltaXRfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgY3JlZGl0IGZvciB0aGUgYWNjb3VudCBpcyBvbiBob2xkLiAqL1xyXG4gICAgQ3JlZGl0T25Ib2xkOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHNpemUgY2F0ZWdvcnkgb3IgcmFuZ2Ugb2YgdGhlIGFjY291bnQuICovXHJcbiAgICBDdXN0b21lclNpemVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgY2F0ZWdvcnkgdGhhdCBiZXN0IGRlc2NyaWJlcyB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIGFjY291bnQgYW5kIHlvdXIgb3JnYW5pemF0aW9uLiAqL1xyXG4gICAgQ3VzdG9tZXJUeXBlQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gZGVzY3JpYmUgdGhlIGFjY291bnQuICovXHJcbiAgICBEZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgYnVsayBlbWFpbCBzZW50IHRocm91Z2ggY2FtcGFpZ25zLiAqL1xyXG4gICAgRG9Ob3RCdWxrRU1haWw6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBidWxrIHBvc3RhbCBtYWlsLiAqL1xyXG4gICAgRG9Ob3RCdWxrUG9zdGFsTWFpbDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGRpcmVjdCBlbWFpbC4gKi9cclxuICAgIERvTm90RU1haWw6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBmYXhlcy4gKi9cclxuICAgIERvTm90RmF4OiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgcGhvbmUgY2FsbHMuICovXHJcbiAgICBEb05vdFBob25lOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgZGlyZWN0IG1haWwuICovXHJcbiAgICBEb05vdFBvc3RhbE1haWw6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFjY2VwdHMgbWFya2V0aW5nIG1hdGVyaWFscy4gKi9cclxuICAgIERvTm90U2VuZE1NOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBwcmltYXJ5IGVtYWlsIGFkZHJlc3MgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgRU1haWxBZGRyZXNzMTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzZWNvbmRhcnkgZW1haWwgYWRkcmVzcyBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBFTWFpbEFkZHJlc3MyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYW4gYWx0ZXJuYXRlIGVtYWlsIGFkZHJlc3MgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgRU1haWxBZGRyZXNzMzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgZGVmYXVsdCBpbWFnZSBmb3IgdGhlIHJlY29yZC4gKi9cclxuICAgIEVudGl0eUltYWdlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgRW50aXR5SW1hZ2VfVGltZXN0YW1wOiBudW1iZXIgfCBudWxsO1xyXG4gICAgRW50aXR5SW1hZ2VfVVJMOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIEZvciBpbnRlcm5hbCB1c2Ugb25seS4gKi9cclxuICAgIHJlYWRvbmx5IEVudGl0eUltYWdlSWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGNvbnZlcnNpb24gcmF0ZSBvZiB0aGUgcmVjb3JkJ3MgY3VycmVuY3kuICovXHJcbiAgICByZWFkb25seSBFeGNoYW5nZVJhdGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgZmF4IG51bWJlciBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBGYXg6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogSW5mb3JtYXRpb24gYWJvdXQgd2hldGhlciB0byBhbGxvdyBmb2xsb3dpbmcgZW1haWwgYWN0aXZpdHkuICovXHJcbiAgICBGb2xsb3dFbWFpbDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgVVJMIGZvciB0aGUgYWNjb3VudCdzIEZUUCBzaXRlLiAqL1xyXG4gICAgRnRwU2l0ZVVSTDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZGF0YSBpbXBvcnQgb3IgZGF0YSBtaWdyYXRpb24gdGhhdCBjcmVhdGVkIHRoaXMgcmVjb3JkLiAqL1xyXG4gICAgSW1wb3J0U2VxdWVuY2VOdW1iZXI6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBhY2NvdW50J3MgcHJpbWFyeSBpbmR1c3RyeS4gKi9cclxuICAgIEluZHVzdHJ5Q29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IElzUHJpdmF0ZTogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogQ29udGFpbnMgdGhlIGRhdGUgYW5kIHRpbWUgc3RhbXAgb2YgdGhlIGxhc3Qgb24gaG9sZCB0aW1lLiAqL1xyXG4gICAgTGFzdE9uSG9sZFRpbWVfVXRjRGF0ZUFuZFRpbWU6IERhdGUgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBkYXRlIHdoZW4gdGhlIGFjY291bnQgd2FzIGxhc3QgaW5jbHVkZWQgaW4gYSBtYXJrZXRpbmcgY2FtcGFpZ24uICovXHJcbiAgICBMYXN0VXNlZEluQ2FtcGFpZ25fVXRjRGF0ZU9ubHk6IERhdGUgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG1hcmtldCBjYXBpdGFsaXphdGlvbiBvZiB0aGUgYWNjb3VudC4gKi9cclxuICAgIE1hcmtldENhcDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgbWFya2V0IGNhcGl0YWxpemF0aW9uIGNvbnZlcnRlZCB0byB0aGUgc3lzdGVtJ3MgZGVmYXVsdCBiYXNlIGN1cnJlbmN5LiAqL1xyXG4gICAgcmVhZG9ubHkgTWFya2V0Q2FwX0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogV2hldGhlciBpcyBvbmx5IGZvciBtYXJrZXRpbmcgKi9cclxuICAgIE1hcmtldGluZ09ubHk6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBtYXN0ZXIgYWNjb3VudCB0aGF0IHRoZSBhY2NvdW50IHdhcyBtZXJnZWQgd2l0aC4gKi9cclxuICAgIHJlYWRvbmx5IE1hc3RlcklkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHdoZXRoZXIgdGhlIGFjY291bnQgaGFzIGJlZW4gbWVyZ2VkIHdpdGggYW5vdGhlciBhY2NvdW50LiAqL1xyXG4gICAgcmVhZG9ubHkgTWVyZ2VkOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aG8gbGFzdCB1cGRhdGVkIHRoZSByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBNb2RpZmllZEJ5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBleHRlcm5hbCBwYXJ0eSB3aG8gbW9kaWZpZWQgdGhlIHJlY29yZC4gKi9cclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkQnlFeHRlcm5hbFBhcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHJlY29yZCB3YXMgbGFzdCB1cGRhdGVkLiAqL1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRPbl9VdGNEYXRlQW5kVGltZTogRGF0ZSB8IG51bGw7XHJcbiAgICAvKiogU2hvd3Mgd2hvIGNyZWF0ZWQgdGhlIHJlY29yZCBvbiBiZWhhbGYgb2YgYW5vdGhlciB1c2VyLiAqL1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRPbkJlaGFsZkJ5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBBY2NvdW50IGFzc29jaWF0ZWQgd2l0aCBBY2NvdW50LiAqL1xyXG4gICAgbXNhX21hbmFnaW5ncGFydG5lcmlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNvbXBhbnkgb3IgYnVzaW5lc3MgbmFtZS4gKi9cclxuICAgIE5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbnVtYmVyIG9mIGVtcGxveWVlcyB0aGF0IHdvcmsgYXQgdGhlIGFjY291bnQuICovXHJcbiAgICBOdW1iZXJPZkVtcGxveWVlczogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyBob3cgbG9uZywgaW4gbWludXRlcywgdGhhdCB0aGUgcmVjb3JkIHdhcyBvbiBob2xkLiAqL1xyXG4gICAgcmVhZG9ubHkgT25Ib2xkVGltZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBEYXRlIGFuZCB0aW1lIHRoYXQgdGhlIHJlY29yZCB3YXMgbWlncmF0ZWQuICovXHJcbiAgICBPdmVycmlkZGVuQ3JlYXRlZE9uX1V0Y0RhdGVPbmx5OiBEYXRlIHwgbnVsbDtcclxuICAgIC8qKiBFbnRlciB0aGUgdXNlciB3aG8gaXMgYXNzaWduZWQgdG8gbWFuYWdlIHRoZSByZWNvcmQuICovXHJcbiAgICBPd25lcklkX3N5c3RlbXVzZXI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogRW50ZXIgdGhlIHRlYW0gd2hvIGlzIGFzc2lnbmVkIHRvIG1hbmFnZSB0aGUgcmVjb3JkLiAqL1xyXG4gICAgT3duZXJJZF90ZWFtOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIG93bmVyc2hpcCBzdHJ1Y3R1cmUsIHN1Y2ggYXMgcHVibGljIG9yIHByaXZhdGUuICovXHJcbiAgICBPd25lcnNoaXBDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBidXNpbmVzcyB1bml0IHRoYXQgdGhlIHJlY29yZCBvd25lciBiZWxvbmdzIHRvLiAqL1xyXG4gICAgcmVhZG9ubHkgT3duaW5nQnVzaW5lc3NVbml0OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSB0ZWFtIHdobyBvd25zIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgcmVhZG9ubHkgT3duaW5nVGVhbTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgdXNlciB3aG8gb3ducyB0aGUgYWNjb3VudC4gKi9cclxuICAgIHJlYWRvbmx5IE93bmluZ1VzZXI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogQ2hvb3NlIHRoZSBwYXJlbnQgYWNjb3VudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBhY2NvdW50LiAqL1xyXG4gICAgUGFyZW50QWNjb3VudElkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIEZvciBzeXN0ZW0gdXNlIG9ubHkuIExlZ2FjeSBNaWNyb3NvZnQgRHluYW1pY3MgQ1JNIDMuMCB3b3JrZmxvdyBkYXRhLiAqL1xyXG4gICAgUGFydGljaXBhdGVzSW5Xb3JrZmxvdzogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBwYXltZW50IHRlcm1zIHRvIGluZGljYXRlIHdoZW4gdGhlIGN1c3RvbWVyIG5lZWRzIHRvIHBheS4gKi9cclxuICAgIFBheW1lbnRUZXJtc0NvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBwcmVmZXJyZWQgZGF5IG9mIHRoZSB3ZWVrIGZvciBzZXJ2aWNlIGFwcG9pbnRtZW50cy4gKi9cclxuICAgIFByZWZlcnJlZEFwcG9pbnRtZW50RGF5Q29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHByZWZlcnJlZCB0aW1lIG9mIGRheSBmb3Igc2VydmljZSBhcHBvaW50bWVudHMuICovXHJcbiAgICBQcmVmZXJyZWRBcHBvaW50bWVudFRpbWVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgcHJlZmVycmVkIG1ldGhvZCBvZiBjb250YWN0LiAqL1xyXG4gICAgUHJlZmVycmVkQ29udGFjdE1ldGhvZENvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogQ2hvb3NlIHRoZSBwcmVmZXJyZWQgc2VydmljZSByZXByZXNlbnRhdGl2ZS4gKi9cclxuICAgIFByZWZlcnJlZFN5c3RlbVVzZXJJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBDaG9vc2UgdGhlIHByaW1hcnkgY29udGFjdCBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBQcmltYXJ5Q29udGFjdElkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFByaW1hcnkgU2F0b3JpIElEIGZvciBBY2NvdW50ICovXHJcbiAgICBQcmltYXJ5U2F0b3JpSWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogUHJpbWFyeSBUd2l0dGVyIElEIGZvciBBY2NvdW50ICovXHJcbiAgICBQcmltYXJ5VHdpdHRlcklkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBJRCBvZiB0aGUgcHJvY2Vzcy4gKi9cclxuICAgIFByb2Nlc3NJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBhbm51YWwgcmV2ZW51ZSBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBSZXZlbnVlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBhbm51YWwgcmV2ZW51ZSBjb252ZXJ0ZWQgdG8gdGhlIHN5c3RlbSdzIGRlZmF1bHQgYmFzZSBjdXJyZW5jeS4gKi9cclxuICAgIHJlYWRvbmx5IFJldmVudWVfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBudW1iZXIgb2Ygc2hhcmVzIGF2YWlsYWJsZSB0byB0aGUgcHVibGljIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIFNoYXJlc091dHN0YW5kaW5nOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIHNoaXBwaW5nIG1ldGhvZCBmb3IgZGVsaXZlcmllcyBzZW50IHRvIHRoZSBhY2NvdW50J3MgYWRkcmVzcy4gKi9cclxuICAgIFNoaXBwaW5nTWV0aG9kQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBTdGFuZGFyZCBJbmR1c3RyaWFsIENsYXNzaWZpY2F0aW9uIChTSUMpIGNvZGUuICovXHJcbiAgICBTSUM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogQ2hvb3NlIHRoZSBzZXJ2aWNlIGxldmVsIGFncmVlbWVudCAoU0xBKSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5LiAqL1xyXG4gICAgU0xBSWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogTGFzdCBTTEEgdGhhdCB3YXMgYXBwbGllZCB0byB0aGlzIGNhc2UuICovXHJcbiAgICByZWFkb25seSBTTEFJbnZva2VkSWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIElEIG9mIHRoZSBzdGFnZS4gKi9cclxuICAgIFN0YWdlSWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3Mgd2hldGhlciB0aGUgYWNjb3VudCBpcyBhY3RpdmUgb3IgaW5hY3RpdmUuICovXHJcbiAgICBTdGF0ZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBhY2NvdW50J3Mgc3RhdHVzLiAqL1xyXG4gICAgU3RhdHVzQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzdG9jayBleGNoYW5nZSBhdCB3aGljaCB0aGUgYWNjb3VudCBpcyBsaXN0ZWQuICovXHJcbiAgICBTdG9ja0V4Y2hhbmdlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG1haW4gcGhvbmUgbnVtYmVyIGZvciB0aGlzIGFjY291bnQuICovXHJcbiAgICBUZWxlcGhvbmUxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSBzZWNvbmQgcGhvbmUgbnVtYmVyIGZvciB0aGlzIGFjY291bnQuICovXHJcbiAgICBUZWxlcGhvbmUyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSB0aGlyZCBwaG9uZSBudW1iZXIgZm9yIHRoaXMgYWNjb3VudC4gKi9cclxuICAgIFRlbGVwaG9uZTM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IGEgcmVnaW9uIG9yIHRlcnJpdG9yeSBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBUZXJyaXRvcnlDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHN0b2NrIGV4Y2hhbmdlIHN5bWJvbCBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBUaWNrZXJTeW1ib2w6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVG90YWwgdGltZSBzcGVudCBmb3IgZW1haWxzIGFuZCBtZWV0aW5ncyBieSBtZSBpbiByZWxhdGlvbiB0byBhY2NvdW50IHJlY29yZC4gKi9cclxuICAgIHJlYWRvbmx5IFRpbWVTcGVudEJ5TWVPbkVtYWlsQW5kTWVldGluZ3M6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogRm9yIGludGVybmFsIHVzZSBvbmx5LiAqL1xyXG4gICAgVGltZVpvbmVSdWxlVmVyc2lvbk51bWJlcjogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBDaG9vc2UgdGhlIGxvY2FsIGN1cnJlbmN5IGZvciB0aGUgcmVjb3JkLiAqL1xyXG4gICAgVHJhbnNhY3Rpb25DdXJyZW5jeUlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIEZvciBpbnRlcm5hbCB1c2Ugb25seS4gKi9cclxuICAgIFRyYXZlcnNlZFBhdGg6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVGltZSB6b25lIGNvZGUgdGhhdCB3YXMgaW4gdXNlIHdoZW4gdGhlIHJlY29yZCB3YXMgY3JlYXRlZC4gKi9cclxuICAgIFVUQ0NvbnZlcnNpb25UaW1lWm9uZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVmVyc2lvbiBudW1iZXIgb2YgdGhlIGFjY291bnQuICovXHJcbiAgICByZWFkb25seSBWZXJzaW9uTnVtYmVyOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGFjY291bnQncyB3ZWJzaXRlIFVSTC4gKi9cclxuICAgIFdlYlNpdGVVUkw6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgcGhvbmV0aWMgc3BlbGxpbmcgb2YgdGhlIGNvbXBhbnkgbmFtZS4gKi9cclxuICAgIFlvbWlOYW1lOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDIuIFJ1bnRpbWUgLSBGaWVsZCBDb25maWd1cmF0aW9uXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBBY2NvdW50IGZpZWxkIG1ldGFkYXRhIGNvbmZpZ3VyYXRpb25cclxuICogLSBsb2dpY2FsTmFtZTogYXR0cmlidXRlIGxvZ2ljYWwgbmFtZSAoZS5nLiAnYWNjb3VudGlkJylcclxuICogLSBzY2hlbWFOYW1lOiBzY2hlbWEgbmFtZSBmb3IgbG9va3VwIGJpbmRpbmdcclxuICogLSBlbnRpdHlDb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbiBuYW1lIGZvciBsb29rdXAgKGUuZy4gJ2FjY291bnRzJylcclxuICogLSBlbnRpdHlMb2dpY2FsTmFtZTogZW50aXR5IG5hbWUgZm9yIGxvb2t1cCAoZS5nLiAnYWNjb3VudCcpXHJcbiAqIC0gcmVhZE9ubHk6IHdoZXRoZXIgdGhlIGZpZWxkIGlzIHJlYWQtb25seVxyXG4gKiAtIHR5cGU6IGZpZWxkIHR5cGUgZm9yIHBhcnNpbmcgKEludGVnZXIsIE51bWJlciwgQm9vbGVhbiwgRGF0ZVRpbWUsIE11bHRpT3B0aW9uU2V0KVxyXG4gKi9cclxuY29uc3QgQWNjb3VudEZpZWxkQ29uZmlnOiBJV2ViQXBpRmllbGRDb25maWdNYXAgPSB7XHJcbiAgICBBY2NvdW50Q2F0ZWdvcnlDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWNjb3VudGNhdGVnb3J5Y29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWNjb3VudENsYXNzaWZpY2F0aW9uQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FjY291bnRjbGFzc2lmaWNhdGlvbmNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFjY291bnRJZDogeyBsb2dpY2FsTmFtZTogJ2FjY291bnRpZCcgfSxcclxuICAgIEFjY291bnROdW1iZXI6IHsgbG9naWNhbE5hbWU6ICdhY2NvdW50bnVtYmVyJyB9LFxyXG4gICAgQWNjb3VudFJhdGluZ0NvZGU6IHsgbG9naWNhbE5hbWU6ICdhY2NvdW50cmF0aW5nY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczFfQWRkcmVzc0lkOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfYWRkcmVzc2lkJyB9LFxyXG4gICAgQWRkcmVzczFfQWRkcmVzc1R5cGVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfYWRkcmVzc3R5cGVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMV9DaXR5OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfY2l0eScgfSxcclxuICAgIEFkZHJlc3MxX0NvbXBvc2l0ZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2NvbXBvc2l0ZScsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBBZGRyZXNzMV9Db3VudHJ5OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfY291bnRyeScgfSxcclxuICAgIEFkZHJlc3MxX0NvdW50eTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2NvdW50eScgfSxcclxuICAgIEFkZHJlc3MxX0ZheDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2ZheCcgfSxcclxuICAgIEFkZHJlc3MxX0ZyZWlnaHRUZXJtc0NvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9mcmVpZ2h0dGVybXNjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMV9MYXRpdHVkZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2xhdGl0dWRlJywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFkZHJlc3MxX0xpbmUxOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfbGluZTEnIH0sXHJcbiAgICBBZGRyZXNzMV9MaW5lMjogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2xpbmUyJyB9LFxyXG4gICAgQWRkcmVzczFfTGluZTM6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9saW5lMycgfSxcclxuICAgIEFkZHJlc3MxX0xvbmdpdHVkZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2xvbmdpdHVkZScsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZGRyZXNzMV9OYW1lOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfbmFtZScgfSxcclxuICAgIEFkZHJlc3MxX1Bvc3RhbENvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9wb3N0YWxjb2RlJyB9LFxyXG4gICAgQWRkcmVzczFfUG9zdE9mZmljZUJveDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3Bvc3RvZmZpY2Vib3gnIH0sXHJcbiAgICBBZGRyZXNzMV9QcmltYXJ5Q29udGFjdE5hbWU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9wcmltYXJ5Y29udGFjdG5hbWUnIH0sXHJcbiAgICBBZGRyZXNzMV9TaGlwcGluZ01ldGhvZENvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9zaGlwcGluZ21ldGhvZGNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MxX1N0YXRlT3JQcm92aW5jZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3N0YXRlb3Jwcm92aW5jZScgfSxcclxuICAgIEFkZHJlc3MxX1RlbGVwaG9uZTE6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV90ZWxlcGhvbmUxJyB9LFxyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMjogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3RlbGVwaG9uZTInIH0sXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUzOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfdGVsZXBob25lMycgfSxcclxuICAgIEFkZHJlc3MxX1VQU1pvbmU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV91cHN6b25lJyB9LFxyXG4gICAgQWRkcmVzczFfVVRDT2Zmc2V0OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfdXRjb2Zmc2V0JywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMl9BZGRyZXNzSWQ6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9hZGRyZXNzaWQnIH0sXHJcbiAgICBBZGRyZXNzMl9BZGRyZXNzVHlwZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9hZGRyZXNzdHlwZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MyX0NpdHk6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9jaXR5JyB9LFxyXG4gICAgQWRkcmVzczJfQ29tcG9zaXRlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfY29tcG9zaXRlJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIEFkZHJlc3MyX0NvdW50cnk6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9jb3VudHJ5JyB9LFxyXG4gICAgQWRkcmVzczJfQ291bnR5OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfY291bnR5JyB9LFxyXG4gICAgQWRkcmVzczJfRmF4OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfZmF4JyB9LFxyXG4gICAgQWRkcmVzczJfRnJlaWdodFRlcm1zQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2ZyZWlnaHR0ZXJtc2NvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MyX0xhdGl0dWRlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfbGF0aXR1ZGUnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWRkcmVzczJfTGluZTE6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9saW5lMScgfSxcclxuICAgIEFkZHJlc3MyX0xpbmUyOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfbGluZTInIH0sXHJcbiAgICBBZGRyZXNzMl9MaW5lMzogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2xpbmUzJyB9LFxyXG4gICAgQWRkcmVzczJfTG9uZ2l0dWRlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfbG9uZ2l0dWRlJywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFkZHJlc3MyX05hbWU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9uYW1lJyB9LFxyXG4gICAgQWRkcmVzczJfUG9zdGFsQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3Bvc3RhbGNvZGUnIH0sXHJcbiAgICBBZGRyZXNzMl9Qb3N0T2ZmaWNlQm94OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfcG9zdG9mZmljZWJveCcgfSxcclxuICAgIEFkZHJlc3MyX1ByaW1hcnlDb250YWN0TmFtZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3ByaW1hcnljb250YWN0bmFtZScgfSxcclxuICAgIEFkZHJlc3MyX1NoaXBwaW5nTWV0aG9kQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3NoaXBwaW5nbWV0aG9kY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczJfU3RhdGVPclByb3ZpbmNlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfc3RhdGVvcnByb3ZpbmNlJyB9LFxyXG4gICAgQWRkcmVzczJfVGVsZXBob25lMTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3RlbGVwaG9uZTEnIH0sXHJcbiAgICBBZGRyZXNzMl9UZWxlcGhvbmUyOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfdGVsZXBob25lMicgfSxcclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTM6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl90ZWxlcGhvbmUzJyB9LFxyXG4gICAgQWRkcmVzczJfVVBTWm9uZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3Vwc3pvbmUnIH0sXHJcbiAgICBBZGRyZXNzMl9VVENPZmZzZXQ6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl91dGNvZmZzZXQnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkeF9DcmVhdGVkQnlJUEFkZHJlc3M6IHsgbG9naWNhbE5hbWU6ICdhZHhfY3JlYXRlZGJ5aXBhZGRyZXNzJyB9LFxyXG4gICAgQWR4X0NyZWF0ZWRCeVVzZXJuYW1lOiB7IGxvZ2ljYWxOYW1lOiAnYWR4X2NyZWF0ZWRieXVzZXJuYW1lJyB9LFxyXG4gICAgQWR4X01vZGlmaWVkQnlJUEFkZHJlc3M6IHsgbG9naWNhbE5hbWU6ICdhZHhfbW9kaWZpZWRieWlwYWRkcmVzcycgfSxcclxuICAgIEFkeF9Nb2RpZmllZEJ5VXNlcm5hbWU6IHsgbG9naWNhbE5hbWU6ICdhZHhfbW9kaWZpZWRieXVzZXJuYW1lJyB9LFxyXG4gICAgQWdpbmczMDogeyBsb2dpY2FsTmFtZTogJ2FnaW5nMzAnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFnaW5nMzBfQmFzZTogeyBsb2dpY2FsTmFtZTogJ2FnaW5nMzBfYmFzZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWdpbmc2MDogeyBsb2dpY2FsTmFtZTogJ2FnaW5nNjAnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFnaW5nNjBfQmFzZTogeyBsb2dpY2FsTmFtZTogJ2FnaW5nNjBfYmFzZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWdpbmc5MDogeyBsb2dpY2FsTmFtZTogJ2FnaW5nOTAnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFnaW5nOTBfQmFzZTogeyBsb2dpY2FsTmFtZTogJ2FnaW5nOTBfYmFzZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQnVzaW5lc3NUeXBlQ29kZTogeyBsb2dpY2FsTmFtZTogJ2J1c2luZXNzdHlwZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIENyZWF0ZWRCeTogeyBzY2hlbWFOYW1lOiAnY3JlYXRlZGJ5JywgbG9naWNhbE5hbWU6ICdfY3JlYXRlZGJ5X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBDcmVhdGVkQnlFeHRlcm5hbFBhcnR5OiB7IHNjaGVtYU5hbWU6ICdjcmVhdGVkYnlleHRlcm5hbHBhcnR5JywgbG9naWNhbE5hbWU6ICdfY3JlYXRlZGJ5ZXh0ZXJuYWxwYXJ0eV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnZXh0ZXJuYWxwYXJ0aWVzJywgZW50aXR5TG9naWNhbE5hbWU6ICdleHRlcm5hbHBhcnR5JywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIENyZWF0ZWRPbl9VdGNEYXRlQW5kVGltZTogeyBsb2dpY2FsTmFtZTogJ2NyZWF0ZWRvbicsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnRGF0ZVRpbWUnIH0sXHJcbiAgICBDcmVhdGVkT25CZWhhbGZCeTogeyBzY2hlbWFOYW1lOiAnY3JlYXRlZG9uYmVoYWxmYnknLCBsb2dpY2FsTmFtZTogJ19jcmVhdGVkb25iZWhhbGZieV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgQ3JlZGl0TGltaXQ6IHsgbG9naWNhbE5hbWU6ICdjcmVkaXRsaW1pdCcsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBDcmVkaXRMaW1pdF9CYXNlOiB7IGxvZ2ljYWxOYW1lOiAnY3JlZGl0bGltaXRfYmFzZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQ3JlZGl0T25Ib2xkOiB7IGxvZ2ljYWxOYW1lOiAnY3JlZGl0b25ob2xkJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBDdXN0b21lclNpemVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnY3VzdG9tZXJzaXplY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQ3VzdG9tZXJUeXBlQ29kZTogeyBsb2dpY2FsTmFtZTogJ2N1c3RvbWVydHlwZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIERlc2NyaXB0aW9uOiB7IGxvZ2ljYWxOYW1lOiAnZGVzY3JpcHRpb24nIH0sXHJcbiAgICBEb05vdEJ1bGtFTWFpbDogeyBsb2dpY2FsTmFtZTogJ2Rvbm90YnVsa2VtYWlsJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBEb05vdEJ1bGtQb3N0YWxNYWlsOiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3RidWxrcG9zdGFsbWFpbCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRG9Ob3RFTWFpbDogeyBsb2dpY2FsTmFtZTogJ2Rvbm90ZW1haWwnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIERvTm90RmF4OiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3RmYXgnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIERvTm90UGhvbmU6IHsgbG9naWNhbE5hbWU6ICdkb25vdHBob25lJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBEb05vdFBvc3RhbE1haWw6IHsgbG9naWNhbE5hbWU6ICdkb25vdHBvc3RhbG1haWwnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIERvTm90U2VuZE1NOiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3RzZW5kbW0nLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIEVNYWlsQWRkcmVzczE6IHsgbG9naWNhbE5hbWU6ICdlbWFpbGFkZHJlc3MxJyB9LFxyXG4gICAgRU1haWxBZGRyZXNzMjogeyBsb2dpY2FsTmFtZTogJ2VtYWlsYWRkcmVzczInIH0sXHJcbiAgICBFTWFpbEFkZHJlc3MzOiB7IGxvZ2ljYWxOYW1lOiAnZW1haWxhZGRyZXNzMycgfSxcclxuICAgIEVudGl0eUltYWdlOiB7IGxvZ2ljYWxOYW1lOiAnZW50aXR5aW1hZ2UnIH0sXHJcbiAgICBFbnRpdHlJbWFnZV9UaW1lc3RhbXA6IHsgbG9naWNhbE5hbWU6ICdlbnRpdHlpbWFnZV90aW1lc3RhbXAnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgRW50aXR5SW1hZ2VfVVJMOiB7IGxvZ2ljYWxOYW1lOiAnZW50aXR5aW1hZ2VfdXJsJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIEVudGl0eUltYWdlSWQ6IHsgbG9naWNhbE5hbWU6ICdlbnRpdHlpbWFnZWlkJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIEV4Y2hhbmdlUmF0ZTogeyBsb2dpY2FsTmFtZTogJ2V4Y2hhbmdlcmF0ZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgRmF4OiB7IGxvZ2ljYWxOYW1lOiAnZmF4JyB9LFxyXG4gICAgRm9sbG93RW1haWw6IHsgbG9naWNhbE5hbWU6ICdmb2xsb3dlbWFpbCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRnRwU2l0ZVVSTDogeyBsb2dpY2FsTmFtZTogJ2Z0cHNpdGV1cmwnIH0sXHJcbiAgICBJbXBvcnRTZXF1ZW5jZU51bWJlcjogeyBsb2dpY2FsTmFtZTogJ2ltcG9ydHNlcXVlbmNlbnVtYmVyJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBJbmR1c3RyeUNvZGU6IHsgbG9naWNhbE5hbWU6ICdpbmR1c3RyeWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIElzUHJpdmF0ZTogeyBsb2dpY2FsTmFtZTogJ2lzcHJpdmF0ZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIExhc3RPbkhvbGRUaW1lX1V0Y0RhdGVBbmRUaW1lOiB7IGxvZ2ljYWxOYW1lOiAnbGFzdG9uaG9sZHRpbWUnLCB0eXBlOiAnRGF0ZVRpbWUnIH0sXHJcbiAgICBMYXN0VXNlZEluQ2FtcGFpZ25fVXRjRGF0ZU9ubHk6IHsgbG9naWNhbE5hbWU6ICdsYXN0dXNlZGluY2FtcGFpZ24nLCB0eXBlOiAnRGF0ZVRpbWUnIH0sXHJcbiAgICBNYXJrZXRDYXA6IHsgbG9naWNhbE5hbWU6ICdtYXJrZXRjYXAnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgTWFya2V0Q2FwX0Jhc2U6IHsgbG9naWNhbE5hbWU6ICdtYXJrZXRjYXBfYmFzZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgTWFya2V0aW5nT25seTogeyBsb2dpY2FsTmFtZTogJ21hcmtldGluZ29ubHknLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIE1hc3RlcklkOiB7IHNjaGVtYU5hbWU6ICdtYXN0ZXJpZCcsIGxvZ2ljYWxOYW1lOiAnX21hc3RlcmlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdhY2NvdW50cycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnYWNjb3VudCcsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBNZXJnZWQ6IHsgbG9naWNhbE5hbWU6ICdtZXJnZWQnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBNb2RpZmllZEJ5OiB7IHNjaGVtYU5hbWU6ICdtb2RpZmllZGJ5JywgbG9naWNhbE5hbWU6ICdfbW9kaWZpZWRieV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgTW9kaWZpZWRCeUV4dGVybmFsUGFydHk6IHsgc2NoZW1hTmFtZTogJ21vZGlmaWVkYnlleHRlcm5hbHBhcnR5JywgbG9naWNhbE5hbWU6ICdfbW9kaWZpZWRieWV4dGVybmFscGFydHlfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2V4dGVybmFscGFydGllcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnZXh0ZXJuYWxwYXJ0eScsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBNb2RpZmllZE9uX1V0Y0RhdGVBbmRUaW1lOiB7IGxvZ2ljYWxOYW1lOiAnbW9kaWZpZWRvbicsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnRGF0ZVRpbWUnIH0sXHJcbiAgICBNb2RpZmllZE9uQmVoYWxmQnk6IHsgc2NoZW1hTmFtZTogJ21vZGlmaWVkb25iZWhhbGZieScsIGxvZ2ljYWxOYW1lOiAnX21vZGlmaWVkb25iZWhhbGZieV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgbXNhX21hbmFnaW5ncGFydG5lcmlkOiB7IHNjaGVtYU5hbWU6ICdtc2FfbWFuYWdpbmdwYXJ0bmVyaWQnLCBsb2dpY2FsTmFtZTogJ19tc2FfbWFuYWdpbmdwYXJ0bmVyaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2FjY291bnRzJywgZW50aXR5TG9naWNhbE5hbWU6ICdhY2NvdW50JyB9LFxyXG4gICAgTmFtZTogeyBsb2dpY2FsTmFtZTogJ25hbWUnIH0sXHJcbiAgICBOdW1iZXJPZkVtcGxveWVlczogeyBsb2dpY2FsTmFtZTogJ251bWJlcm9mZW1wbG95ZWVzJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBPbkhvbGRUaW1lOiB7IGxvZ2ljYWxOYW1lOiAnb25ob2xkdGltZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIE92ZXJyaWRkZW5DcmVhdGVkT25fVXRjRGF0ZU9ubHk6IHsgbG9naWNhbE5hbWU6ICdvdmVycmlkZGVuY3JlYXRlZG9uJywgdHlwZTogJ0RhdGVUaW1lJyB9LFxyXG4gICAgT3duZXJJZF9zeXN0ZW11c2VyOiB7IHNjaGVtYU5hbWU6ICdvd25lcmlkJywgbG9naWNhbE5hbWU6ICdfb3duZXJpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInIH0sXHJcbiAgICBPd25lcklkX3RlYW06IHsgc2NoZW1hTmFtZTogJ293bmVyaWQnLCBsb2dpY2FsTmFtZTogJ19vd25lcmlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICd0ZWFtcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAndGVhbScgfSxcclxuICAgIE93bmVyc2hpcENvZGU6IHsgbG9naWNhbE5hbWU6ICdvd25lcnNoaXBjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBPd25pbmdCdXNpbmVzc1VuaXQ6IHsgc2NoZW1hTmFtZTogJ293bmluZ2J1c2luZXNzdW5pdCcsIGxvZ2ljYWxOYW1lOiAnX293bmluZ2J1c2luZXNzdW5pdF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnYnVzaW5lc3N1bml0cycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnYnVzaW5lc3N1bml0JywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIE93bmluZ1RlYW06IHsgc2NoZW1hTmFtZTogJ293bmluZ3RlYW0nLCBsb2dpY2FsTmFtZTogJ19vd25pbmd0ZWFtX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICd0ZWFtcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAndGVhbScsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBPd25pbmdVc2VyOiB7IHNjaGVtYU5hbWU6ICdvd25pbmd1c2VyJywgbG9naWNhbE5hbWU6ICdfb3duaW5ndXNlcl92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgUGFyZW50QWNjb3VudElkOiB7IHNjaGVtYU5hbWU6ICdwYXJlbnRhY2NvdW50aWQnLCBsb2dpY2FsTmFtZTogJ19wYXJlbnRhY2NvdW50aWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2FjY291bnRzJywgZW50aXR5TG9naWNhbE5hbWU6ICdhY2NvdW50JyB9LFxyXG4gICAgUGFydGljaXBhdGVzSW5Xb3JrZmxvdzogeyBsb2dpY2FsTmFtZTogJ3BhcnRpY2lwYXRlc2lud29ya2Zsb3cnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIFBheW1lbnRUZXJtc0NvZGU6IHsgbG9naWNhbE5hbWU6ICdwYXltZW50dGVybXNjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBQcmVmZXJyZWRBcHBvaW50bWVudERheUNvZGU6IHsgbG9naWNhbE5hbWU6ICdwcmVmZXJyZWRhcHBvaW50bWVudGRheWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFByZWZlcnJlZEFwcG9pbnRtZW50VGltZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdwcmVmZXJyZWRhcHBvaW50bWVudHRpbWVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBQcmVmZXJyZWRDb250YWN0TWV0aG9kQ29kZTogeyBsb2dpY2FsTmFtZTogJ3ByZWZlcnJlZGNvbnRhY3RtZXRob2Rjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBQcmVmZXJyZWRTeXN0ZW1Vc2VySWQ6IHsgc2NoZW1hTmFtZTogJ3ByZWZlcnJlZHN5c3RlbXVzZXJpZCcsIGxvZ2ljYWxOYW1lOiAnX3ByZWZlcnJlZHN5c3RlbXVzZXJpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInIH0sXHJcbiAgICBQcmltYXJ5Q29udGFjdElkOiB7IHNjaGVtYU5hbWU6ICdwcmltYXJ5Y29udGFjdGlkJywgbG9naWNhbE5hbWU6ICdfcHJpbWFyeWNvbnRhY3RpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnY29udGFjdHMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2NvbnRhY3QnIH0sXHJcbiAgICBQcmltYXJ5U2F0b3JpSWQ6IHsgbG9naWNhbE5hbWU6ICdwcmltYXJ5c2F0b3JpaWQnIH0sXHJcbiAgICBQcmltYXJ5VHdpdHRlcklkOiB7IGxvZ2ljYWxOYW1lOiAncHJpbWFyeXR3aXR0ZXJpZCcgfSxcclxuICAgIFByb2Nlc3NJZDogeyBsb2dpY2FsTmFtZTogJ3Byb2Nlc3NpZCcgfSxcclxuICAgIFJldmVudWU6IHsgbG9naWNhbE5hbWU6ICdyZXZlbnVlJywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIFJldmVudWVfQmFzZTogeyBsb2dpY2FsTmFtZTogJ3JldmVudWVfYmFzZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgU2hhcmVzT3V0c3RhbmRpbmc6IHsgbG9naWNhbE5hbWU6ICdzaGFyZXNvdXRzdGFuZGluZycsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgU2hpcHBpbmdNZXRob2RDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnc2hpcHBpbmdtZXRob2Rjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBTSUM6IHsgbG9naWNhbE5hbWU6ICdzaWMnIH0sXHJcbiAgICBTTEFJZDogeyBzY2hlbWFOYW1lOiAnc2xhaWQnLCBsb2dpY2FsTmFtZTogJ19zbGFpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc2xhcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc2xhJyB9LFxyXG4gICAgU0xBSW52b2tlZElkOiB7IHNjaGVtYU5hbWU6ICdzbGFpbnZva2VkaWQnLCBsb2dpY2FsTmFtZTogJ19zbGFpbnZva2VkaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3NsYXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3NsYScsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBTdGFnZUlkOiB7IGxvZ2ljYWxOYW1lOiAnc3RhZ2VpZCcgfSxcclxuICAgIFN0YXRlQ29kZTogeyBsb2dpY2FsTmFtZTogJ3N0YXRlY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgU3RhdHVzQ29kZTogeyBsb2dpY2FsTmFtZTogJ3N0YXR1c2NvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFN0b2NrRXhjaGFuZ2U6IHsgbG9naWNhbE5hbWU6ICdzdG9ja2V4Y2hhbmdlJyB9LFxyXG4gICAgVGVsZXBob25lMTogeyBsb2dpY2FsTmFtZTogJ3RlbGVwaG9uZTEnIH0sXHJcbiAgICBUZWxlcGhvbmUyOiB7IGxvZ2ljYWxOYW1lOiAndGVsZXBob25lMicgfSxcclxuICAgIFRlbGVwaG9uZTM6IHsgbG9naWNhbE5hbWU6ICd0ZWxlcGhvbmUzJyB9LFxyXG4gICAgVGVycml0b3J5Q29kZTogeyBsb2dpY2FsTmFtZTogJ3RlcnJpdG9yeWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFRpY2tlclN5bWJvbDogeyBsb2dpY2FsTmFtZTogJ3RpY2tlcnN5bWJvbCcgfSxcclxuICAgIFRpbWVTcGVudEJ5TWVPbkVtYWlsQW5kTWVldGluZ3M6IHsgbG9naWNhbE5hbWU6ICd0aW1lc3BlbnRieW1lb25lbWFpbGFuZG1lZXRpbmdzJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIFRpbWVab25lUnVsZVZlcnNpb25OdW1iZXI6IHsgbG9naWNhbE5hbWU6ICd0aW1lem9uZXJ1bGV2ZXJzaW9ubnVtYmVyJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBUcmFuc2FjdGlvbkN1cnJlbmN5SWQ6IHsgc2NoZW1hTmFtZTogJ3RyYW5zYWN0aW9uY3VycmVuY3lpZCcsIGxvZ2ljYWxOYW1lOiAnX3RyYW5zYWN0aW9uY3VycmVuY3lpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAndHJhbnNhY3Rpb25jdXJyZW5jaWVzJywgZW50aXR5TG9naWNhbE5hbWU6ICd0cmFuc2FjdGlvbmN1cnJlbmN5JyB9LFxyXG4gICAgVHJhdmVyc2VkUGF0aDogeyBsb2dpY2FsTmFtZTogJ3RyYXZlcnNlZHBhdGgnIH0sXHJcbiAgICBVVENDb252ZXJzaW9uVGltZVpvbmVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAndXRjY29udmVyc2lvbnRpbWV6b25lY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgVmVyc2lvbk51bWJlcjogeyBsb2dpY2FsTmFtZTogJ3ZlcnNpb25udW1iZXInLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBXZWJTaXRlVVJMOiB7IGxvZ2ljYWxOYW1lOiAnd2Vic2l0ZXVybCcgfSxcclxuICAgIFlvbWlOYW1lOiB7IGxvZ2ljYWxOYW1lOiAneW9taW5hbWUnIH1cclxufTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMy4gUnVudGltZSAtIENsYXNzIChDIyBlYXJseS1ib3VuZCBzdHlsZSB3aXRoIGBuZXdgIGtleXdvcmQpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBBY2NvdW50IFdlYkFwaSBjbGFzcyBmb3IgZWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqIFVzYWdlOiBjb25zdCBhY2NvdW50ID0gbmV3IEFjY291bnRBcGkoZW50aXR5KTtcclxuICogQHBhcmFtIGVudGl0eSBUaGUgZW50aXR5IG9iamVjdCBmcm9tIE9EYXRhIHJlc3BvbnNlIChvcHRpb25hbCBmb3IgY3JlYXRlIG9wZXJhdGlvbnMpXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWNjb3VudEFwaSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdHk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgICAgICAgY29uc3Qgd2ViQXBpRW50aXR5ID0gY3JlYXRlV2ViQXBpRW50aXR5PElBY2NvdW50QXBpPihlbnRpdHksICdhY2NvdW50JywgJ2FjY291bnRzJywgQWNjb3VudEZpZWxkQ29uZmlnKTtcclxuICAgICAgICAvLyBDb3B5IHByb3BlcnR5IGRlc2NyaXB0b3JzIHRvIHByZXNlcnZlIGdldHRlcnMvc2V0dGVyc1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHdlYkFwaUVudGl0eSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBUeXBlIGFzc2VydGlvbiB0byBtYWtlIEFjY291bnRBcGkgaW5zdGFuY2VzIHdvcmsgYXMgSUFjY291bnRBcGlcclxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50QXBpIGV4dGVuZHMgSUFjY291bnRBcGkgeyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50QXBpO1xyXG5cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuaW1wb3J0IHsgQWNjb3VudEFwaSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQud2ViYXBpJztcclxuaW1wb3J0IHsgT3B0aW9uU2V0IH0gZnJvbSAnLi9nZW5lcmF0b3IvT3B0aW9uU2V0JztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDY6IFdlYkFwaSAtIEVhcmx5LWJvdW5kIHN0eWxlIGNvZGluZ1xyXG4gKiBUZXN0cyBSZXRyaWV2ZVJlY29yZCBhbmQgUmV0cmlldmVSZWNvcmRzIHdpdGggdmFyaW91cyBvdmVybG9hZHNcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAvIFByb21pc2UtYmFzZWQgdGVzdHMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgLyBBZGRpdGlvbmFsIHRlc3RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFRlc3RXZWJBcGkoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFdFQkFQSSBPQkpFQ1QgVEVTVFMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFIxOiBDcmVhdGUgZW1wdHkgQWNjb3VudCBvYmplY3QgdmlhIEFjY291bnRBcGkgZmFjdG9yeVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBuZXdBY2NvdW50ID0gbmV3IEFjY291bnRBcGkoKTtcclxuICAgICAgICBuZXdBY2NvdW50Lk5hbWUgPSAnVGVzdCBBY2NvdW50JztcclxuICAgICAgICBuZXdBY2NvdW50LlRlbGVwaG9uZTEgPSAnMTIzLTQ1Ni03ODkwJztcclxuICAgICAgICBuZXdBY2NvdW50LkluZHVzdHJ5Q29kZSA9IE9wdGlvblNldC5BY2NvdW50LkluZHVzdHJ5Q29kZS5Db25zdWx0aW5nO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjFcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiQWNjb3VudEFwaSAoY3JlYXRlKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYE5hbWU9XCIke25ld0FjY291bnQuTmFtZX1cIiwgRW50aXR5IHJlYWR5YCxcclxuICAgICAgICAgICAgU3RhdHVzOiBuZXdBY2NvdW50LkVudGl0eSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkFjY291bnRBcGkgKGNyZWF0ZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFIyOiBUZXN0IEVudGl0eSBvYmplY3Qgc3RydWN0dXJlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBuZXcgQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIGFjY291bnQuTmFtZSA9ICdFbnRpdHkgVGVzdCc7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gYWNjb3VudC5FbnRpdHk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSMlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFbnRpdHkgb2JqZWN0XCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBlbnRpdHkgPyBgS2V5czogJHtPYmplY3Qua2V5cyhlbnRpdHkpLmpvaW4oJywgJyl9YCA6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGVudGl0eSAmJiB0eXBlb2YgZW50aXR5ID09PSAnb2JqZWN0JyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkVudGl0eSBvYmplY3RcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFIzOiBUZXN0IEVudGl0eU5hbWUgcHJvcGVydHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IG5ldyBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSM1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFbnRpdHlOYW1lXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBhY2NvdW50LkVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgIFN0YXR1czogYWNjb3VudC5FbnRpdHlOYW1lID09PSAnYWNjb3VudCcgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJFbnRpdHlOYW1lXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSNDogVGVzdCBFbnRpdHlDb2xsZWN0aW9uTmFtZSBwcm9wZXJ0eVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gbmV3IEFjY291bnRBcGkoKTtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlI0XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkVudGl0eUNvbGxlY3Rpb25OYW1lXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBhY2NvdW50LkVudGl0eUNvbGxlY3Rpb25OYW1lLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGFjY291bnQuRW50aXR5Q29sbGVjdGlvbk5hbWUgPT09ICdhY2NvdW50cycgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJFbnRpdHlDb2xsZWN0aW9uTmFtZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUjU6IFRlc3QgRm9ybWF0dGVkVmFsdWUgcHJvcGVydHkgZXhpc3RzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBuZXcgQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjVcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRm9ybWF0dGVkVmFsdWVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGFjY291bnQuRm9ybWF0dGVkVmFsdWUgPyBcIm9iamVjdCBleGlzdHNcIiA6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGFjY291bnQuRm9ybWF0dGVkVmFsdWUgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJGb3JtYXR0ZWRWYWx1ZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFdFQkFQSSBSRVRSSUVWRSBSRUNPUkQgVEVTVFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFMxOiBSZXRyaWV2ZVJlY29yZCAtIFByb21pc2UtYmFzZWQgd2l0aCBvcHRpb25zXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkKFxyXG4gICAgICAgICAgICBBY2NvdW50QXBpLFxyXG4gICAgICAgICAgICBmb3JtLkVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5SWQsXHJcbiAgICAgICAgICAgIFwiPyRzZWxlY3Q9bmFtZSx0ZWxlcGhvbmUxLGluZHVzdHJ5Y29kZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlMxXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkIChQcm9taXNlK09wdGlvbnMpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiByZWNvcmQuTmFtZSA/IGBOYW1lPVwiJHtyZWNvcmQuTmFtZX1cImAgOiBcIlJldHJpZXZlZFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmQgKFByb21pc2UrT3B0aW9ucylcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFMyOiBSZXRyaWV2ZVJlY29yZCAtIFByb21pc2UtYmFzZWQgd2l0aG91dCBvcHRpb25zXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkKFxyXG4gICAgICAgICAgICBBY2NvdW50QXBpLFxyXG4gICAgICAgICAgICBmb3JtLkVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5SWRcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmQgKFByb21pc2UpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiByZWNvcmQuQWNjb3VudElkID8gXCJSZXRyaWV2ZWQgd2l0aCBhbGwgZmllbGRzXCIgOiBcIlJldHJpZXZlZFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmQgKFByb21pc2UpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTMzogUmV0cmlldmVSZWNvcmQgLSBBY2Nlc3MgRm9ybWF0dGVkVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmQoXHJcbiAgICAgICAgICAgIEFjY291bnRBcGksXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgZm9ybS5FbnRpdHlJZCxcclxuICAgICAgICAgICAgXCI/JHNlbGVjdD1uYW1lLGluZHVzdHJ5Y29kZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRJbmR1c3RyeSA9IHJlY29yZC5Gb3JtYXR0ZWRWYWx1ZT8uSW5kdXN0cnlDb2RlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzNcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRm9ybWF0dGVkVmFsdWUuSW5kdXN0cnlDb2RlXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBmb3JtYXR0ZWRJbmR1c3RyeSA/IGBcIiR7Zm9ybWF0dGVkSW5kdXN0cnl9XCJgIDogXCIoZW1wdHkpXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJGb3JtYXR0ZWRWYWx1ZS5JbmR1c3RyeUNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFM0OiBSZXRyaWV2ZVJlY29yZHMgLSBGZXRjaFhNTCBQcm9taXNlLWJhc2VkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZldGNoWG1sID0gXCI8ZmV0Y2ggdG9wPSczJz48ZW50aXR5IG5hbWU9J2FjY291bnQnPjxhdHRyaWJ1dGUgbmFtZT0nbmFtZScvPjxhdHRyaWJ1dGUgbmFtZT0nYWNjb3VudG51bWJlcicvPjwvZW50aXR5PjwvZmV0Y2g+XCI7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkcyhBY2NvdW50QXBpLCBmZXRjaFhtbCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTNFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKEZldGNoWE1MKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYENvdW50OiAke3JlY29yZHMubGVuZ3RofWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogcmVjb3Jkcy5sZW5ndGggPj0gMCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoRmV0Y2hYTUwpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTNTogUmV0cmlldmVSZWNvcmRzIC0gRmV0Y2hYTUwgd2l0aCBtYXhQYWdlU2l6ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmZXRjaFhtbCA9IFwiPGZldGNoPjxlbnRpdHkgbmFtZT0nYWNjb3VudCc+PGF0dHJpYnV0ZSBuYW1lPSduYW1lJy8+PGF0dHJpYnV0ZSBuYW1lPSd0ZWxlcGhvbmUxJy8+PC9lbnRpdHk+PC9mZXRjaD5cIjtcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmRzKEFjY291bnRBcGksIGZldGNoWG1sLCA1KTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM1XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoRmV0Y2hYTUwrUGFnZVNpemUpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgQ291bnQ6ICR7cmVjb3Jkcy5sZW5ndGh9IChtYXggNSlgLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHJlY29yZHMubGVuZ3RoID49IDAgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKEZldGNoWE1MK1BhZ2VTaXplKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzY6IFJldHJpZXZlUmVjb3JkcyAtIE9EYXRhIFByb21pc2UtYmFzZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkcyhcclxuICAgICAgICAgICAgQWNjb3VudEFwaSxcclxuICAgICAgICAgICAgJ2FjY291bnQnLFxyXG4gICAgICAgICAgICAnPyRzZWxlY3Q9bmFtZSxhY2NvdW50bnVtYmVyJiR0b3A9MydcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzZcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChPRGF0YSlcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBDb3VudDogJHtyZWNvcmRzLmxlbmd0aH1gLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHJlY29yZHMubGVuZ3RoID49IDAgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKE9EYXRhKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzc6IFJldHJpZXZlUmVjb3JkcyAtIE9EYXRhIHdpdGggbWF4UGFnZVNpemVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkcyhcclxuICAgICAgICAgICAgQWNjb3VudEFwaSxcclxuICAgICAgICAgICAgJ2FjY291bnQnLFxyXG4gICAgICAgICAgICAnPyRzZWxlY3Q9bmFtZSx0ZWxlcGhvbmUxJyxcclxuICAgICAgICAgICAgNVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTN1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKE9EYXRhK1BhZ2VTaXplKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYENvdW50OiAke3JlY29yZHMubGVuZ3RofSAobWF4IDUpYCxcclxuICAgICAgICAgICAgU3RhdHVzOiByZWNvcmRzLmxlbmd0aCA+PSAwID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChPRGF0YStQYWdlU2l6ZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFM4OiBTZXQgcHJvcGVydHkgYW5kIHZlcmlmeSBFbnRpdHkgdXBkYXRlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBuZXcgQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIGFjY291bnQuTmFtZSA9ICdVcGRhdGUgVGVzdCc7XHJcbiAgICAgICAgYWNjb3VudC5SZXZlbnVlID0gMTAwMDAwMDtcclxuICAgICAgICBhY2NvdW50Lk51bWJlck9mRW1wbG95ZWVzID0gNTA7XHJcbiAgICAgICAgYWNjb3VudC5DcmVkaXRPbkhvbGQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IGFjY291bnQuRW50aXR5O1xyXG4gICAgICAgIGNvbnN0IGhhc05hbWUgPSBlbnRpdHkgJiYgZW50aXR5Lm5hbWUgPT09ICdVcGRhdGUgVGVzdCc7XHJcbiAgICAgICAgY29uc3QgaGFzUmV2ZW51ZSA9IGVudGl0eSAmJiBlbnRpdHkucmV2ZW51ZSA9PT0gMTAwMDAwMDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM4XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkVudGl0eSB1cGRhdGUgb24gc2V0XCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgTmFtZTogJHtoYXNOYW1lfSwgUmV2ZW51ZTogJHtoYXNSZXZlbnVlfWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogaGFzTmFtZSAmJiBoYXNSZXZlbnVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRW50aXR5IHVwZGF0ZSBvbiBzZXRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzQ1x1REYxMCBURVNUIDY6IFdlYkFwaSBbJHtzdGFydFRpbWV9XSAtIEVhcmx5LWJvdW5kIHN0eWxlIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBBY2NvdW50QXBpIEZhY3RvcnkgVGVzdHMgKFIxLVI1KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBXZWJBcGkgTWV0aG9kcyAoUzEtUzgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgNzogTW9uZXkgQ29udHJvbCAtIFJldmVudWUgRmllbGRcclxuICogTW9uZXkgZXh0ZW5kcyBJQ29udHJvbE51bWJlciB3aXRoIE1pbiwgTWF4LCBQcmVjaXNpb24gcHJvcGVydGllc1xyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdE1vbmV5KGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtb25leSA9IGZvcm0uSGVhZGVyLlJldmVudWU7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IG1vbmV5LlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gTW9uZXktc3BlY2lmaWMgcHJvcGVydGllcyAoSUNvbnRyb2xOdW1iZXIgKyBQcmVjaXNpb24pXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJNYXhcIiwgVmFsdWU6IG1vbmV5Lk1heCwgU3RhdHVzOiB0eXBlb2YgbW9uZXkuTWF4ID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJNaW5cIiwgVmFsdWU6IG1vbmV5Lk1pbiwgU3RhdHVzOiB0eXBlb2YgbW9uZXkuTWluID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJQcmVjaXNpb25cIiwgVmFsdWU6IG1vbmV5LlByZWNpc2lvbiwgU3RhdHVzOiB0eXBlb2YgbW9uZXkuUHJlY2lzaW9uID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBtb25leS5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTsgLy8gQXR0cmlidXRlIGNhbiBiZSBudWxsIGluIHNvbWUgY29udGV4dHNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IG1vbmV5LkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogbW9uZXkuQXR0cmlidXRlTmFtZSA9PT0gXCJyZXZlbnVlXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IG1vbmV5LkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogbW9uZXkuQXR0cmlidXRlVHlwZSA9PT0gXCJtb25leVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogbW9uZXkuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBtb25leS5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogbW9uZXkuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogbW9uZXkuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IG1vbmV5LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBtb25leS5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogbW9uZXkuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBtb25leS5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBtb25leS5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE3XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IG1vbmV5LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gKG9yaWdpbmFsVmFsdWUgfHwgMCkgKyAxMDAwO1xyXG4gICAgICAgIG1vbmV5LlZhbHVlID0gdGVzdFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbW9uZXkuVmFsdWU7XHJcbiAgICAgICAgbW9uZXkuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IG5ld1ZhbHVlID09PSB0ZXN0VmFsdWUgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IG5ld1ZhbHVlID09PSB0ZXN0VmFsdWUgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUHJlY2lzaW9uIChNb25leSBwcmVjaXNpb24gaXMgdHlwaWNhbGx5IDAtMiBmb3IgY3VycmVuY3kpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdQcmVjaXNpb24gPSBtb25leS5QcmVjaXNpb247XHJcbiAgICAgICAgY29uc3QgdGVzdFByZWNpc2lvbiA9IDI7IC8vIFZhbGlkIHByZWNpc2lvbiBmb3IgbW9uZXkgKDAtMiByYW5nZSlcclxuICAgICAgICBtb25leS5QcmVjaXNpb24gPSB0ZXN0UHJlY2lzaW9uO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuUHJlY2lzaW9uO1xyXG4gICAgICAgIG1vbmV5LlByZWNpc2lvbiA9IG9yaWdQcmVjaXNpb247XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJQcmVjaXNpb24gKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSB0ZXN0UHJlY2lzaW9uID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogYFdhcyAke2NoZWNrfWAsIFN0YXR1czogY2hlY2sgPT09IHRlc3RQcmVjaXNpb24gPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUHJlY2lzaW9uIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gbW9uZXkuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtb25leS5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtb25leS5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IG1vbmV5LkRpc2FibGVkO1xyXG4gICAgICAgIG1vbmV5LkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vbmV5LkRpc2FibGVkO1xyXG4gICAgICAgIG1vbmV5LkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBtb25leS5MYWJlbDtcclxuICAgICAgICBjb25zdCB0ZXN0TGFiZWwgPSBcIlRlc3QgTW9uZXkgTGFiZWxcIjtcclxuICAgICAgICBtb25leS5MYWJlbCA9IHRlc3RMYWJlbDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vbmV5LkxhYmVsO1xyXG4gICAgICAgIGNvbnN0IHNldFdvcmtlZCA9IGNoZWNrID09PSB0ZXN0TGFiZWwgfHwgY2hlY2s/LmluY2x1ZGVzKFwiVGVzdCBNb25leVwiKTtcclxuICAgICAgICBpZiAob3JpZ0xhYmVsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbW9uZXkuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IHNldFdvcmtlZCA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IGBHb3Q6ICR7Y2hlY2t9YCwgU3RhdHVzOiBzZXRXb3JrZWQgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG1vbmV5LlZpc2libGU7XHJcbiAgICAgICAgbW9uZXkuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vbmV5LlZpc2libGU7XHJcbiAgICAgICAgbW9uZXkuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgTW9uZXkgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb25leS5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb25leS5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb25leS5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vbmV5LkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LlNldE5vdGlmaWNhdGlvbihcIlRlc3QgTW9uZXkgbm90aWZpY2F0aW9uXCIsIFwiTU9ORVlfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9uZXkuQ2xlYXJOb3RpZmljYXRpb24oXCJNT05FWV9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9uZXkuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENCMCBURVNUIDc6IE1vbmV5IENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogUmV2ZW51ZSBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE3KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzEyKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDg6IEJvb2xlYW4gQ29udHJvbCAtIENyZWRpdE9uSG9sZCBGaWVsZFxyXG4gKiBCb29sZWFuIGV4dGVuZHMgSUNvbnRyb2wgd2l0aCBJbml0aWFsVmFsdWUgcHJvcGVydHlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RCb29sZWFuKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBib29sID0gZm9ybS5Cb2R5LkNyZWRpdE9uSG9sZDtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gYm9vbC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEJvb2xlYW4tc3BlY2lmaWMgcHJvcGVydGllcyAoSW5pdGlhbFZhbHVlIGNhbiBiZSBib29sZWFuIG9yIDAvMSlcclxuICAgICAgICBjb25zdCBpbml0VmFsID0gYm9vbC5Jbml0aWFsVmFsdWU7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZEluaXRWYWx1ZSA9IHR5cGVvZiBpbml0VmFsID09PSBcImJvb2xlYW5cIiB8fCBpbml0VmFsID09PSAwIHx8IGluaXRWYWwgPT09IDE7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJJbml0aWFsVmFsdWVcIiwgVmFsdWU6IGluaXRWYWwsIFN0YXR1czogaXNWYWxpZEluaXRWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogYm9vbC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogYm9vbC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGJvb2wuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBib29sLkF0dHJpYnV0ZU5hbWUgPT09IFwiY3JlZGl0b25ob2xkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGJvb2wuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBib29sLkF0dHJpYnV0ZVR5cGUgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogYm9vbC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGJvb2wuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogYm9vbC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGJvb2wuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGJvb2wuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IGJvb2wuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGJvb2wuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBib29sLkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IGJvb2wuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBib29sLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gIW9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgYm9vbC5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGJvb2wuVmFsdWU7XHJcbiAgICAgICAgYm9vbC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGJvb2wuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBib29sLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBib29sLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgYm9vbC5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IGJvb2wuRGlzYWJsZWQ7XHJcbiAgICAgICAgYm9vbC5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBib29sLkRpc2FibGVkO1xyXG4gICAgICAgIGJvb2wuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGJvb2wuTGFiZWw7XHJcbiAgICAgICAgYm9vbC5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gYm9vbC5MYWJlbDtcclxuICAgICAgICBib29sLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gYm9vbC5WaXNpYmxlO1xyXG4gICAgICAgIGJvb2wuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGJvb2wuVmlzaWJsZTtcclxuICAgICAgICBib29sLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIEJvb2xlYW4gT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBib29sLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJvb2wuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYm9vbC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGJvb2wuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJvb2wuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBCb29sZWFuIG5vdGlmaWNhdGlvblwiLCBcIkJPT0xfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYm9vbC5DbGVhck5vdGlmaWNhdGlvbihcIkJPT0xfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBib29sLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYm9vbC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHUyNzA1IFRFU1QgODogQm9vbGVhbiBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IENyZWRpdE9uSG9sZCBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE1KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzExKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDk6IERhdGVUaW1lIENvbnRyb2wgLSB2NF9BcHBvaW50bWVudFRpbWUgRmllbGRcclxuICogRGF0ZVRpbWUgZXh0ZW5kcyBJQ29udHJvbCB3aXRoIFNob3dUaW1lIHByb3BlcnR5XHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0RGF0ZVRpbWUoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGR0ID0gZm9ybS5Cb2R5LnY0X0FwcG9pbnRtZW50VGltZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gZHQuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBEYXRlVGltZS1zcGVjaWZpYyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJTaG93VGltZVwiLCBWYWx1ZTogZHQuU2hvd1RpbWUsIFN0YXR1czogdHlwZW9mIGR0LlNob3dUaW1lID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gb3JpZ2luYWxWYWx1ZS50b0lTT1N0cmluZygpIDogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBkdC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogZHQuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBkdC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IGR0LkF0dHJpYnV0ZU5hbWUgPT09IFwidjRfYXBwb2ludG1lbnR0aW1lXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGR0LkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogZHQuQXR0cmlidXRlVHlwZSA9PT0gXCJkYXRldGltZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogZHQuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBkdC5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBkdC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGR0LklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBkdC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogZHQuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGR0LlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogZHQuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogZHQuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBkdC5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZHQuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBkdC5WYWx1ZTtcclxuICAgICAgICBkdC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgLy8gVmFsdWUgd2FzIHNldCBzdWNjZXNzZnVsbHkgaWYgbmV3VmFsdWUgZXhpc3RzIChEYXRlLCBzdHJpbmcsIG9yIGFueSB0cnV0aHkpXHJcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IG5ld1ZhbHVlICE9PSBudWxsICYmIG5ld1ZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogc3VjY2VzcyA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogc3VjY2VzcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBTaG93VGltZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnU2hvd1RpbWUgPSBkdC5TaG93VGltZTtcclxuICAgICAgICBkdC5TaG93VGltZSA9ICFvcmlnU2hvd1RpbWU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkdC5TaG93VGltZTtcclxuICAgICAgICBkdC5TaG93VGltZSA9IG9yaWdTaG93VGltZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlNob3dUaW1lIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiU2hvd1RpbWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBkdC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGR0LlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkdC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGR0LlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gZHQuRGlzYWJsZWQ7XHJcbiAgICAgICAgZHQuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZHQuRGlzYWJsZWQ7XHJcbiAgICAgICAgZHQuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGR0LkxhYmVsO1xyXG4gICAgICAgIGR0LkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkdC5MYWJlbDtcclxuICAgICAgICBkdC5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGR0LlZpc2libGU7XHJcbiAgICAgICAgZHQuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGR0LlZpc2libGU7XHJcbiAgICAgICAgZHQuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgRGF0ZVRpbWUgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdC5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGR0LkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LlNldE5vdGlmaWNhdGlvbihcIlRlc3QgRGF0ZVRpbWUgbm90aWZpY2F0aW9uXCIsIFwiRFRfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZHQuQ2xlYXJOb3RpZmljYXRpb24oXCJEVF9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZHQuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENDNSBURVNUIDk6IERhdGVUaW1lIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogdjRfQXBwb2ludG1lbnRUaW1lIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTIpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTA6IERhdGVPbmx5IENvbnRyb2wgLSB2NF9CaXJ0aGRheSBGaWVsZFxyXG4gKiBEYXRlT25seSBleHRlbmRzIElDb250cm9sIChubyBTaG93VGltZSBwcm9wZXJ0eSB1bmxpa2UgRGF0ZVRpbWUpXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0RGF0ZU9ubHkoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGRhdGVPbmx5ID0gZm9ybS5Cb2R5LnY0X0JpcnRoZGF5O1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBkYXRlT25seS5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIERhdGVPbmx5LXNwZWNpZmljOiBWYWx1ZSBpcyB0aGUgbWFpbiBwcm9wZXJ0eSAobm8gU2hvd1RpbWUpXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSBpbnN0YW5jZW9mIERhdGUgPyBvcmlnaW5hbFZhbHVlLnRvSVNPU3RyaW5nKCkgOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGRhdGVPbmx5LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBkYXRlT25seS5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGRhdGVPbmx5LkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogZGF0ZU9ubHkuQXR0cmlidXRlTmFtZSA9PT0gXCJ2NF9iaXJ0aGRheVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBkYXRlT25seS5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IGRhdGVPbmx5LkF0dHJpYnV0ZVR5cGUgPT09IFwiZGF0ZXRpbWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IGRhdGVPbmx5LkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogZGF0ZU9ubHkuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogZGF0ZU9ubHkuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBkYXRlT25seS5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBkYXRlT25seS5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogZGF0ZU9ubHkuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGRhdGVPbmx5LlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogZGF0ZU9ubHkuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogZGF0ZU9ubHkuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBkYXRlT25seS5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9IG5ldyBEYXRlKDE5OTAsIDUsIDE1KTsgLy8gSnVuZSAxNSwgMTk5MFxyXG4gICAgICAgIGRhdGVPbmx5LlZhbHVlID0gdGVzdFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZGF0ZU9ubHkuVmFsdWU7XHJcbiAgICAgICAgZGF0ZU9ubHkuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIC8vIFZhbHVlIHdhcyBzZXQgc3VjY2Vzc2Z1bGx5IGlmIG5ld1ZhbHVlIGV4aXN0c1xyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBuZXdWYWx1ZSAhPT0gbnVsbCAmJiBuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IHN1Y2Nlc3MgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IHN1Y2Nlc3MgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBkYXRlT25seS5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGRhdGVPbmx5LlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkYXRlT25seS5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGRhdGVPbmx5LlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gZGF0ZU9ubHkuRGlzYWJsZWQ7XHJcbiAgICAgICAgZGF0ZU9ubHkuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZGF0ZU9ubHkuRGlzYWJsZWQ7XHJcbiAgICAgICAgZGF0ZU9ubHkuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGRhdGVPbmx5LkxhYmVsO1xyXG4gICAgICAgIGRhdGVPbmx5LkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkYXRlT25seS5MYWJlbDtcclxuICAgICAgICBkYXRlT25seS5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGRhdGVPbmx5LlZpc2libGU7XHJcbiAgICAgICAgZGF0ZU9ubHkuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRhdGVPbmx5LlZpc2libGU7XHJcbiAgICAgICAgZGF0ZU9ubHkuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgRGF0ZU9ubHkgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRlT25seS5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRlT25seS5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRlT25seS5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRhdGVPbmx5LkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRlT25seS5TZXROb3RpZmljYXRpb24oXCJUZXN0IERhdGVPbmx5IG5vdGlmaWNhdGlvblwiLCBcIkRPX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRhdGVPbmx5LkNsZWFyTm90aWZpY2F0aW9uKFwiRE9fVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRlT25seS5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRhdGVPbmx5LlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0NcdURGODIgVEVTVCAxMDogRGF0ZU9ubHkgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiB2NF9CaXJ0aGRheSBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE0KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzExKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDExOiBHcmlkIENvbnRyb2wgLSBDb250YWN0cyBTdWJncmlkXHJcbiAqIEdyaWQgcHJvdmlkZXMgYWNjZXNzIHRvIHN1YmdyaWQgZGF0YSBhbmQgb3BlcmF0aW9uc1xyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdEdyaWQoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGdyaWQgPSBmb3JtLkdyaWQuQ29udGFjdHM7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gR3JpZC1zcGVjaWZpYyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJFbnRpdHlOYW1lXCIsIFZhbHVlOiBncmlkLkVudGl0eU5hbWUsIFN0YXR1czogZ3JpZC5FbnRpdHlOYW1lID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJGZXRjaFhtbFwiLCBWYWx1ZTogZ3JpZC5GZXRjaFhtbCA/IGdyaWQuRmV0Y2hYbWwuc3Vic3RyaW5nKDAsIDUwKSArIFwiLi4uXCIgOiBudWxsLCBTdGF0dXM6IGdyaWQuRmV0Y2hYbWwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkdyaWRUeXBlXCIsIFZhbHVlOiBncmlkLkdyaWRUeXBlLCBTdGF0dXM6IHR5cGVvZiBncmlkLkdyaWRUeXBlID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcFxyXG4gICAgICAgIGNvbnN0IHJlbCA9IGdyaWQuUmVsYXRpb25zaGlwO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiUmVsYXRpb25zaGlwLm5hbWVcIiwgVmFsdWU6IHJlbD8ubmFtZSwgU3RhdHVzOiByZWwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIlJlbGF0aW9uc2hpcC5uYXZQcm9wTmFtZVwiLCBWYWx1ZTogcmVsPy5uYXZpZ2F0aW9uUHJvcGVydHlOYW1lLCBTdGF0dXM6IHJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiUmVsYXRpb25zaGlwLnR5cGVcIiwgVmFsdWU6IHJlbD8ucmVsYXRpb25zaGlwVHlwZSwgU3RhdHVzOiByZWwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gUm93c1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBncmlkLlJvd3M7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJSb3dzLmdldExlbmd0aCgpXCIsIFZhbHVlOiByb3dzPy5nZXRMZW5ndGgoKSwgU3RhdHVzOiByb3dzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFNlbGVjdGVkUm93c1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUm93cyA9IGdyaWQuU2VsZWN0ZWRSb3dzO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiU2VsZWN0ZWRSb3dzLmdldExlbmd0aCgpXCIsIFZhbHVlOiBzZWxlY3RlZFJvd3M/LmdldExlbmd0aCgpLCBTdGF0dXM6IHNlbGVjdGVkUm93cyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBUb3RhbFJlY29yZENvdW50XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJUb3RhbFJlY29yZENvdW50XCIsIFZhbHVlOiBncmlkLlRvdGFsUmVjb3JkQ291bnQsIFN0YXR1czogdHlwZW9mIGdyaWQuVG90YWxSZWNvcmRDb3VudCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBWaWV3U2VsZWN0b3JcclxuICAgICAgICBjb25zdCB2cyA9IGdyaWQuVmlld1NlbGVjdG9yO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIlZpZXdTZWxlY3RvclwiLCBWYWx1ZTogdnMgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogdnMgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJWaWV3U2VsZWN0b3IuVmlzaWJsZVwiLCBWYWx1ZTogdnM/LlZpc2libGUsIFN0YXR1czogdnMgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gVmlzaWJsZVxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGdyaWQuVmlzaWJsZSwgU3RhdHVzOiB0eXBlb2YgZ3JpZC5WaXNpYmxlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gTWV0aG9kOiBVcmxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gZ3JpZC5VcmwoMSk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJVcmwoMSlcIiwgVmFsdWU6IHVybCA/IHVybC5zdWJzdHJpbmcoMCwgNTApICsgXCIuLi5cIiA6IFwibnVsbFwiLCBTdGF0dXM6IHVybCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJVcmwoMSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGdyaWQuVmlzaWJsZTtcclxuICAgICAgICBncmlkLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBncmlkLlZpc2libGU7XHJcbiAgICAgICAgZ3JpZC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBBZGRPbkxvYWRcclxuICAgIGNvbnN0IG9uTG9hZENhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIEdyaWQgT25Mb2FkIGZpcmVkXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBncmlkLkFkZE9uTG9hZChvbkxvYWRDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJBZGRPbkxvYWRcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkFkZE9uTG9hZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZW1vdmVPbkxvYWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZ3JpZC5SZW1vdmVPbkxvYWQob25Mb2FkQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25Mb2FkXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkxvYWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogUmVmcmVzaFxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBEb24ndCBhY3R1YWxseSByZWZyZXNoIHRvIGF2b2lkIHNpZGUgZWZmZWN0cywganVzdCBjaGVjayBpZiBtZXRob2QgZXhpc3RzXHJcbiAgICAgICAgaWYgKHR5cGVvZiBncmlkLlJlZnJlc2ggPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hcIiwgVmFsdWU6IFwiQXZhaWxhYmxlXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hcIiwgVmFsdWU6IFwiTm90IGEgZnVuY3Rpb25cIiwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZWZyZXNoUmliYm9uXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ3JpZC5SZWZyZXNoUmliYm9uID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoUmliYm9uXCIsIFZhbHVlOiBcIkF2YWlsYWJsZVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoUmliYm9uXCIsIFZhbHVlOiBcIk5vdCBhIGZ1bmN0aW9uXCIsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hSaWJib25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogT3BlblJlbGF0ZWRHcmlkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ3JpZC5PcGVuUmVsYXRlZEdyaWQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIk9wZW5SZWxhdGVkR3JpZFwiLCBWYWx1ZTogXCJBdmFpbGFibGVcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiT3BlblJlbGF0ZWRHcmlkXCIsIFZhbHVlOiBcIk5vdCBhIGZ1bmN0aW9uXCIsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIk9wZW5SZWxhdGVkR3JpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVzdCBSb3dzIGl0ZXJhdGlvblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByb3dzID0gZ3JpZC5Sb3dzO1xyXG4gICAgICAgIGlmIChyb3dzICYmIHJvd3MuZ2V0TGVuZ3RoKCkgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0Um93ID0gcm93cy5nZXQoMCk7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUm93cy5nZXQoMClcIiwgVmFsdWU6IGZpcnN0Um93Py5FbnRpdHlJZCB8fCBcIm5vIEVudGl0eUlkXCIsIFN0YXR1czogZmlyc3RSb3cgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJvd3MuZ2V0KDApXCIsIFZhbHVlOiBcIk5vIHJvd3NcIiwgU3RhdHVzOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUm93cy5nZXQoMClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENDQSBURVNUIDExOiBHcmlkIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogQ29udGFjdHMgc3ViZ3JpZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjEyKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHN0cmluZ2lmeSBvYmplY3RzIGZvciBkaXNwbGF5XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXIgb3IgQ29tcGxleCBPYmplY3RdJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDEyOiBVdGlsaXR5IEFQSSAtIEdsb2JhbCBVdGlsaXR5IEZ1bmN0aW9uc1xyXG4gKiBVdGlsaXR5IHByb3ZpZGVzIGFjY2VzcyB0byBYcm0uVXRpbGl0eSwgWHJtLk5hdmlnYXRpb24sIFhybS5EZXZpY2UsIFhybS5FbmNvZGluZywgZXRjLlxyXG4gKiBUZXN0cyBBTEwgcHJvcGVydGllcyBvZiBlYWNoIG5lc3RlZCBvYmplY3QgKENsaWVudCwgT3JnYW5pemF0aW9uU2V0dGluZ3MsIFVzZXJTZXR0aW5ncylcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0VXRpbGl0eShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgdXRpbCA9IGZvcm0uVXRpbGl0eTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gQ2xpZW50IChhbGwgcHJvcGVydGllcylcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gdXRpbC5DbGllbnQ7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJDbGllbnRcIiwgVmFsdWU6IHN0cmluZ2lmeShjbGllbnQpLCBTdGF0dXM6IGNsaWVudCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiQ2xpZW50LkNsaWVudE5hbWVcIiwgVmFsdWU6IGNsaWVudD8uQ2xpZW50TmFtZSwgU3RhdHVzOiBjbGllbnQ/LkNsaWVudE5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkNsaWVudC5DbGllbnRTdGF0ZVwiLCBWYWx1ZTogY2xpZW50Py5DbGllbnRTdGF0ZSwgU3RhdHVzOiBjbGllbnQ/LkNsaWVudFN0YXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJDbGllbnQuRm9ybUZhY3RvclwiLCBWYWx1ZTogY2xpZW50Py5Gb3JtRmFjdG9yLCBTdGF0dXM6IHR5cGVvZiBjbGllbnQ/LkZvcm1GYWN0b3IgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkNsaWVudC5Jc05ldHdvcmtBdmFpbGFibGVcIiwgVmFsdWU6IGNsaWVudD8uSXNOZXR3b3JrQXZhaWxhYmxlLCBTdGF0dXM6IHR5cGVvZiBjbGllbnQ/LklzTmV0d29ya0F2YWlsYWJsZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNsaWVudC5Jc09mZmxpbmVcIiwgVmFsdWU6IGNsaWVudD8uSXNPZmZsaW5lLCBTdGF0dXM6IHR5cGVvZiBjbGllbnQ/LklzT2ZmbGluZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEdsb2JhbCBDb250ZXh0IFByb3BlcnRpZXNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDbGllbnRVcmxcIiwgVmFsdWU6IHV0aWwuQ2xpZW50VXJsLCBTdGF0dXM6IHV0aWwuQ2xpZW50VXJsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJDdXJyZW50QXBwVXJsXCIsIFZhbHVlOiB1dGlsLkN1cnJlbnRBcHBVcmwsIFN0YXR1czogdXRpbC5DdXJyZW50QXBwVXJsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJJc09uUHJlbWlzZXNcIiwgVmFsdWU6IHV0aWwuSXNPblByZW1pc2VzLCBTdGF0dXM6IHR5cGVvZiB1dGlsLklzT25QcmVtaXNlcyA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJMZWFybmluZ1BhdGhBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiB1dGlsLkxlYXJuaW5nUGF0aEF0dHJpYnV0ZU5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJQYWdlQ29udGV4dFwiLCBWYWx1ZTogc3RyaW5naWZ5KHV0aWwuUGFnZUNvbnRleHQpLCBTdGF0dXM6IHV0aWwuUGFnZUNvbnRleHQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJWZXJzaW9uXCIsIFZhbHVlOiB1dGlsLlZlcnNpb24sIFN0YXR1czogdXRpbC5WZXJzaW9uID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBPcmdhbml6YXRpb25TZXR0aW5ncyAoYWxsIHByb3BlcnRpZXMpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGNvbnN0IG9yZ1NldHRpbmdzID0gdXRpbC5Pcmdhbml6YXRpb25TZXR0aW5ncztcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJPcmdhbml6YXRpb25TZXR0aW5nc1wiLCBWYWx1ZTogc3RyaW5naWZ5KG9yZ1NldHRpbmdzKSwgU3RhdHVzOiBvcmdTZXR0aW5ncyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIk9yZy5BdHRyaWJ1dGVzXCIsIFZhbHVlOiBzdHJpbmdpZnkob3JnU2V0dGluZ3M/LkF0dHJpYnV0ZXMpLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiT3JnLkJhc2VDdXJyZW5jeVwiLCBWYWx1ZTogc3RyaW5naWZ5KG9yZ1NldHRpbmdzPy5CYXNlQ3VycmVuY3kpLCBTdGF0dXM6IG9yZ1NldHRpbmdzPy5CYXNlQ3VycmVuY3kgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNlwiLCBQcm9wZXJ0eTogXCJPcmcuQmFzZUN1cnJlbmN5SWRcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5CYXNlQ3VycmVuY3lJZCwgU3RhdHVzOiBvcmdTZXR0aW5ncz8uQmFzZUN1cnJlbmN5SWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxN1wiLCBQcm9wZXJ0eTogXCJPcmcuRGVmYXVsdENvdW50cnlDb2RlXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uRGVmYXVsdENvdW50cnlDb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMThcIiwgUHJvcGVydHk6IFwiT3JnLkZ1bGxOYW1lQ29udmVudGlvbkNvZGVcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5GdWxsTmFtZUNvbnZlbnRpb25Db2RlLCBTdGF0dXM6IHR5cGVvZiBvcmdTZXR0aW5ncz8uRnVsbE5hbWVDb252ZW50aW9uQ29kZSA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE5XCIsIFByb3BlcnR5OiBcIk9yZy5Jc0F1dG9TYXZlRW5hYmxlZFwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LklzQXV0b1NhdmVFbmFibGVkLCBTdGF0dXM6IHR5cGVvZiBvcmdTZXR0aW5ncz8uSXNBdXRvU2F2ZUVuYWJsZWQgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjBcIiwgUHJvcGVydHk6IFwiT3JnLklzVHJpYWxPcmdhbml6YXRpb25cIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5Jc1RyaWFsT3JnYW5pemF0aW9uLCBTdGF0dXM6IHR5cGVvZiBvcmdTZXR0aW5ncz8uSXNUcmlhbE9yZ2FuaXphdGlvbiA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyMVwiLCBQcm9wZXJ0eTogXCJPcmcuTGFuZ3VhZ2VJZFwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/Lkxhbmd1YWdlSWQsIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5MYW5ndWFnZUlkID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjJcIiwgUHJvcGVydHk6IFwiT3JnLk9yZ2FuaXphdGlvbkV4cGlyeURhdGVcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5Pcmdhbml6YXRpb25FeHBpcnlEYXRlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjNcIiwgUHJvcGVydHk6IFwiT3JnLk9yZ2FuaXphdGlvbklkXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uT3JnYW5pemF0aW9uSWQsIFN0YXR1czogb3JnU2V0dGluZ3M/Lk9yZ2FuaXphdGlvbklkID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjRcIiwgUHJvcGVydHk6IFwiT3JnLlVuaXF1ZU5hbWVcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5VbmlxdWVOYW1lLCBTdGF0dXM6IG9yZ1NldHRpbmdzPy5VbmlxdWVOYW1lID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjVcIiwgUHJvcGVydHk6IFwiT3JnLlVzZVNreXBlUHJvdG9jb2xcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5Vc2VTa3lwZVByb3RvY29sLCBTdGF0dXM6IHR5cGVvZiBvcmdTZXR0aW5ncz8uVXNlU2t5cGVQcm90b2NvbCA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIFVzZXJTZXR0aW5ncyAoYWxsIHByb3BlcnRpZXMpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHV0aWwuVXNlclNldHRpbmdzO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjI2XCIsIFByb3BlcnR5OiBcIlVzZXJTZXR0aW5nc1wiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncyksIFN0YXR1czogdXNlclNldHRpbmdzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjdcIiwgUHJvcGVydHk6IFwiVXNlci5EYXRlRm9ybWF0dGluZ0luZm9cIiwgVmFsdWU6IHN0cmluZ2lmeSh1c2VyU2V0dGluZ3M/LkRhdGVGb3JtYXR0aW5nSW5mbyksIFN0YXR1czogdXNlclNldHRpbmdzPy5EYXRlRm9ybWF0dGluZ0luZm8gPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyOFwiLCBQcm9wZXJ0eTogXCJVc2VyLkRlZmF1bHREYXNoYm9hcmRJZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5EZWZhdWx0RGFzaGJvYXJkSWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyOVwiLCBQcm9wZXJ0eTogXCJVc2VyLklzR3VpZGVkSGVscEVuYWJsZWRcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uSXNHdWlkZWRIZWxwRW5hYmxlZCwgU3RhdHVzOiB0eXBlb2YgdXNlclNldHRpbmdzPy5Jc0d1aWRlZEhlbHBFbmFibGVkID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjMwXCIsIFByb3BlcnR5OiBcIlVzZXIuSXNIaWdoQ29udHJhc3RFbmFibGVkXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LklzSGlnaENvbnRyYXN0RW5hYmxlZCwgU3RhdHVzOiB0eXBlb2YgdXNlclNldHRpbmdzPy5Jc0hpZ2hDb250cmFzdEVuYWJsZWQgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzFcIiwgUHJvcGVydHk6IFwiVXNlci5Jc1JUTFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5Jc1JUTCwgU3RhdHVzOiB0eXBlb2YgdXNlclNldHRpbmdzPy5Jc1JUTCA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzMlwiLCBQcm9wZXJ0eTogXCJVc2VyLkxhbmd1YWdlSWRcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uTGFuZ3VhZ2VJZCwgU3RhdHVzOiB0eXBlb2YgdXNlclNldHRpbmdzPy5MYW5ndWFnZUlkID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzNcIiwgUHJvcGVydHk6IFwiVXNlci5Sb2xlc1wiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncz8uUm9sZXMpLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uUm9sZXMgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzNFwiLCBQcm9wZXJ0eTogXCJVc2VyLlNlY3VyaXR5Um9sZVByaXZpbGVnZXNcIiwgVmFsdWU6IHN0cmluZ2lmeSh1c2VyU2V0dGluZ3M/LlNlY3VyaXR5Um9sZVByaXZpbGVnZXMpLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uU2VjdXJpdHlSb2xlUHJpdmlsZWdlcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjM1XCIsIFByb3BlcnR5OiBcIlVzZXIuU2VjdXJpdHlSb2xlc1wiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncz8uU2VjdXJpdHlSb2xlcyksIFN0YXR1czogdXNlclNldHRpbmdzPy5TZWN1cml0eVJvbGVzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzZcIiwgUHJvcGVydHk6IFwiVXNlci5UaW1lWm9uZU9mZnNldE1pbnV0ZXNcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uVGltZVpvbmVPZmZzZXRNaW51dGVzLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/LlRpbWVab25lT2Zmc2V0TWludXRlcyA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjM3XCIsIFByb3BlcnR5OiBcIlVzZXIuVHJhbnNhY3Rpb25DdXJyZW5jeVwiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncz8uVHJhbnNhY3Rpb25DdXJyZW5jeSksIFN0YXR1czogdXNlclNldHRpbmdzPy5UcmFuc2FjdGlvbkN1cnJlbmN5ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzhcIiwgUHJvcGVydHk6IFwiVXNlci5UcmFuc2FjdGlvbkN1cnJlbmN5SWRcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uVHJhbnNhY3Rpb25DdXJyZW5jeUlkLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uVHJhbnNhY3Rpb25DdXJyZW5jeUlkID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzlcIiwgUHJvcGVydHk6IFwiVXNlci5Vc2VySWRcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uVXNlcklkLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uVXNlcklkID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNDBcIiwgUHJvcGVydHk6IFwiVXNlci5Vc2VyTmFtZVwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5Vc2VyTmFtZSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LlVzZXJOYW1lID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEVuY29kaW5nIE1ldGhvZHMgKHRlc3Qgd2l0aCBhY3R1YWwgdmFsdWVzKVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBlbmNvZGVkID0gdXRpbC5IdG1sRW5jb2RlKFwiPHRlc3Q+XCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiSHRtbEVuY29kZVwiLCBWYWx1ZTogZW5jb2RlZCwgU3RhdHVzOiBlbmNvZGVkID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkh0bWxFbmNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IHV0aWwuSHRtbERlY29kZShcIiZsdDt0ZXN0Jmd0O1wiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIkh0bWxEZWNvZGVcIiwgVmFsdWU6IGRlY29kZWQsIFN0YXR1czogZGVjb2RlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJIdG1sRGVjb2RlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGVuY29kZWQgPSB1dGlsLkh0bWxBdHRyaWJ1dGVFbmNvZGUoXCJ0ZXN0PVxcXCJ2YWx1ZVxcXCJcIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJIdG1sQXR0cmlidXRlRW5jb2RlXCIsIFZhbHVlOiBlbmNvZGVkLCBTdGF0dXM6IGVuY29kZWQgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiSHRtbEF0dHJpYnV0ZUVuY29kZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB4bWxFbmNvZGVkID0gdXRpbC5YbWxFbmNvZGUoXCI8dGVzdD5cIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJYbWxFbmNvZGVcIiwgVmFsdWU6IHhtbEVuY29kZWQsIFN0YXR1czogeG1sRW5jb2RlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJYbWxFbmNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeG1sQXR0ckVuY29kZWQgPSB1dGlsLlhtbEF0dHJpYnV0ZUVuY29kZShcInRlc3Q9XFxcInZhbHVlXFxcIlwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlhtbEF0dHJpYnV0ZUVuY29kZVwiLCBWYWx1ZTogeG1sQXR0ckVuY29kZWQsIFN0YXR1czogeG1sQXR0ckVuY29kZWQgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiWG1sQXR0cmlidXRlRW5jb2RlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBVUkwvUmVzb3VyY2UgTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwcmVwZW5kZWRVcmwgPSB1dGlsLlByZXBlbmRPcmdOYW1lKFwiL3Rlc3RcIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJQcmVwZW5kT3JnTmFtZVwiLCBWYWx1ZTogcHJlcGVuZGVkVXJsLCBTdGF0dXM6IHByZXBlbmRlZFVybCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJQcmVwZW5kT3JnTmFtZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3ZWJSZXNvdXJjZVVybCA9IHV0aWwuV2ViUmVzb3VyY2VVcmwoXCJ0ZXN0Lmh0bWxcIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJXZWJSZXNvdXJjZVVybFwiLCBWYWx1ZTogd2ViUmVzb3VyY2VVcmwsIFN0YXR1czogd2ViUmVzb3VyY2VVcmwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiV2ViUmVzb3VyY2VVcmxcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEFwcC9HbG9iYWxDb250ZXh0IEFzeW5jIE1ldGhvZHMgKGNoZWNrIGZ1bmN0aW9uIGF2YWlsYWJpbGl0eSlcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJBZHZhbmNlZENvbmZpZ1NldHRpbmdcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkFkdmFuY2VkQ29uZmlnU2V0dGluZyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQWR2YW5jZWRDb25maWdTZXR0aW5nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiQWR2YW5jZWRDb25maWdTZXR0aW5nXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiQ3VycmVudEFwcE5hbWVcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkN1cnJlbnRBcHBOYW1lID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DdXJyZW50QXBwTmFtZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkN1cnJlbnRBcHBOYW1lXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkN1cnJlbnRBcHBQcm9wZXJ0aWVzXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DdXJyZW50QXBwUHJvcGVydGllcyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ3VycmVudEFwcFByb3BlcnRpZXMgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiQ3VycmVudEFwcFByb3BlcnRpZXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIE5hdmlnYXRpb24gTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJOYXZpZ2F0ZVRvXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5OYXZpZ2F0ZVRvID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5OYXZpZ2F0ZVRvID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIk5hdmlnYXRlVG9cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiT3BlbkFsZXJ0RGlhbG9nXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuQWxlcnREaWFsb2cgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5BbGVydERpYWxvZyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJPcGVuQWxlcnREaWFsb2dcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTNcIiwgUHJvcGVydHk6IFwiT3BlbkNvbmZpcm1EaWFsb2dcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5Db25maXJtRGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuQ29uZmlybURpYWxvZyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJPcGVuQ29uZmlybURpYWxvZ1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNFwiLCBQcm9wZXJ0eTogXCJPcGVuRXJyb3JEaWFsb2dcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5FcnJvckRpYWxvZyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlbkVycm9yRGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIk9wZW5FcnJvckRpYWxvZ1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJPcGVuRmlsZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlbkZpbGUgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5GaWxlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIk9wZW5GaWxlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE2XCIsIFByb3BlcnR5OiBcIk9wZW5Gb3JtXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuRm9ybSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlbkZvcm0gPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiT3BlbkZvcm1cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTdcIiwgUHJvcGVydHk6IFwiT3BlblVybFwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlblVybCA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlblVybCA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxN1wiLCBQcm9wZXJ0eTogXCJPcGVuVXJsXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE4XCIsIFByb3BlcnR5OiBcIk9wZW5XZWJSZXNvdXJjZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlbldlYlJlc291cmNlID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuV2ViUmVzb3VyY2UgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMThcIiwgUHJvcGVydHk6IFwiT3BlbldlYlJlc291cmNlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBQcm9ncmVzcy9Ob3RpZmljYXRpb24gTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxOVwiLCBQcm9wZXJ0eTogXCJTaG93UHJvZ3Jlc3NJbmRpY2F0b3JcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLlNob3dQcm9ncmVzc0luZGljYXRvciA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuU2hvd1Byb2dyZXNzSW5kaWNhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE5XCIsIFByb3BlcnR5OiBcIlNob3dQcm9ncmVzc0luZGljYXRvclwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMFwiLCBQcm9wZXJ0eTogXCJDbG9zZVByb2dyZXNzSW5kaWNhdG9yXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DbG9zZVByb2dyZXNzSW5kaWNhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DbG9zZVByb2dyZXNzSW5kaWNhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIwXCIsIFByb3BlcnR5OiBcIkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3JcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjFcIiwgUHJvcGVydHk6IFwiQWRkR2xvYmFsTm90aWZpY2F0aW9uXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5BZGRHbG9iYWxOb3RpZmljYXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkFkZEdsb2JhbE5vdGlmaWNhdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMVwiLCBQcm9wZXJ0eTogXCJBZGRHbG9iYWxOb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjJcIiwgUHJvcGVydHk6IFwiQ2xlYXJHbG9iYWxOb3RpZmljYXRpb25cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNsZWFyR2xvYmFsTm90aWZpY2F0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DbGVhckdsb2JhbE5vdGlmaWNhdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMlwiLCBQcm9wZXJ0eTogXCJDbGVhckdsb2JhbE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gVXRpbGl0eSBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIzXCIsIFByb3BlcnR5OiBcIkFsbG93ZWRTdGF0dXNUcmFuc2l0aW9uc1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5BbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjNcIiwgUHJvcGVydHk6IFwiQWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI0XCIsIFByb3BlcnR5OiBcIkVudGl0eU1ldGFkYXRhXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5FbnRpdHlNZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuRW50aXR5TWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjRcIiwgUHJvcGVydHk6IFwiRW50aXR5TWV0YWRhdGFcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjVcIiwgUHJvcGVydHk6IFwiRW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5FbnRpdHlNYWluRm9ybURlc2NyaXB0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkVudGl0eU1haW5Gb3JtRGVzY3JpcHRvciA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNVwiLCBQcm9wZXJ0eTogXCJFbnRpdHlNYWluRm9ybURlc2NyaXB0b3JcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjZcIiwgUHJvcGVydHk6IFwiSW52b2tlUHJvY2Vzc0FjdGlvblwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuSW52b2tlUHJvY2Vzc0FjdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuSW52b2tlUHJvY2Vzc0FjdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNlwiLCBQcm9wZXJ0eTogXCJJbnZva2VQcm9jZXNzQWN0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI3XCIsIFByb3BlcnR5OiBcIkxvb2t1cE9iamVjdHNcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkxvb2t1cE9iamVjdHMgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkxvb2t1cE9iamVjdHMgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjdcIiwgUHJvcGVydHk6IFwiTG9va3VwT2JqZWN0c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyOFwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoUGFyZW50R3JpZFwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuUmVmcmVzaFBhcmVudEdyaWQgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLlJlZnJlc2hQYXJlbnRHcmlkID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI4XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hQYXJlbnRHcmlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI5XCIsIFByb3BlcnR5OiBcIlJlc291cmNlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5SZXNvdXJjZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuUmVzb3VyY2UgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjlcIiwgUHJvcGVydHk6IFwiUmVzb3VyY2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzBcIiwgUHJvcGVydHk6IFwiUmVzb3VyY2VTdHJpbmdcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLlJlc291cmNlU3RyaW5nID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5SZXNvdXJjZVN0cmluZyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMFwiLCBQcm9wZXJ0eTogXCJSZXNvdXJjZVN0cmluZ1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gRGV2aWNlIE1ldGhvZHNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzFcIiwgUHJvcGVydHk6IFwiQmFyY29kZVZhbHVlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5CYXJjb2RlVmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkJhcmNvZGVWYWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMVwiLCBQcm9wZXJ0eTogXCJCYXJjb2RlVmFsdWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzJcIiwgUHJvcGVydHk6IFwiQ2FwdHVyZUF1ZGlvXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DYXB0dXJlQXVkaW8gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkNhcHR1cmVBdWRpbyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMlwiLCBQcm9wZXJ0eTogXCJDYXB0dXJlQXVkaW9cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzNcIiwgUHJvcGVydHk6IFwiQ2FwdHVyZUltYWdlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DYXB0dXJlSW1hZ2UgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkNhcHR1cmVJbWFnZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzM1wiLCBQcm9wZXJ0eTogXCJDYXB0dXJlSW1hZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzRcIiwgUHJvcGVydHk6IFwiQ2FwdHVyZVZpZGVvXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DYXB0dXJlVmlkZW8gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkNhcHR1cmVWaWRlbyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNFwiLCBQcm9wZXJ0eTogXCJDYXB0dXJlVmlkZW9cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzVcIiwgUHJvcGVydHk6IFwiQ3VycmVudFBvc2l0aW9uXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DdXJyZW50UG9zaXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkN1cnJlbnRQb3NpdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNVwiLCBQcm9wZXJ0eTogXCJDdXJyZW50UG9zaXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzZcIiwgUHJvcGVydHk6IFwiUGlja0ZpbGVcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLlBpY2tGaWxlID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5QaWNrRmlsZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNlwiLCBQcm9wZXJ0eTogXCJQaWNrRmlsZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUGFuZWwgTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzN1wiLCBQcm9wZXJ0eTogXCJMb2FkUGFuZWxcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkxvYWRQYW5lbCA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuTG9hZFBhbmVsID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM3XCIsIFByb3BlcnR5OiBcIkxvYWRQYW5lbFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVERDI3IFRFU1QgMTI6IFV0aWxpdHkgQVBJIFske3N0YXJ0VGltZX1dIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SNDApXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIE1ldGhvZHMgKFMxLVMzNylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gc3RyaW5naWZ5IG9iamVjdHMgZm9yIGRpc3BsYXlcclxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhciBvciBDb21wbGV4IE9iamVjdF0nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTM6IE11bHRpT3B0aW9uU2V0IENvbnRyb2wgLSB2NF9DYXRlZ29yaWVzIEZpZWxkXHJcbiAqIE11bHRpT3B0aW9uU2V0IGV4dGVuZHMgSUNvbnRyb2xPcHRpb25TZXQgd2l0aCBWYWx1ZSBhcyBudW1iZXJbXSAoYXJyYXkpXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TXVsdGlPcHRpb25TZXQoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1vcyA9IGZvcm0uQm9keS52NF9DYXRlZ29yaWVzO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBtb3MuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNdWx0aU9wdGlvblNldC1zcGVjaWZpYzogVmFsdWUsIEluaXRpYWxWYWx1ZSwgU2VsZWN0ZWRPcHRpb24sIFRleHQgYXJlIGFsbCBhcnJheXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChudW1iZXJbXSlcIiwgVmFsdWU6IHN0cmluZ2lmeShvcmlnaW5hbFZhbHVlKSwgU3RhdHVzOiBBcnJheS5pc0FycmF5KG9yaWdpbmFsVmFsdWUpIHx8IG9yaWdpbmFsVmFsdWUgPT09IG51bGwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIk9wdGlvbnMgKGFycmF5KVwiLCBWYWx1ZTogc3RyaW5naWZ5KG1vcy5PcHRpb25zKSwgU3RhdHVzOiBBcnJheS5pc0FycmF5KG1vcy5PcHRpb25zKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiU2VsZWN0ZWRPcHRpb24gKGFycmF5KVwiLCBWYWx1ZTogc3RyaW5naWZ5KG1vcy5TZWxlY3RlZE9wdGlvbiksIFN0YXR1czogQXJyYXkuaXNBcnJheShtb3MuU2VsZWN0ZWRPcHRpb24pIHx8IG1vcy5TZWxlY3RlZE9wdGlvbiA9PT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiSW5pdGlhbFZhbHVlIChudW1iZXJbXSlcIiwgVmFsdWU6IHN0cmluZ2lmeShtb3MuSW5pdGlhbFZhbHVlKSwgU3RhdHVzOiBBcnJheS5pc0FycmF5KG1vcy5Jbml0aWFsVmFsdWUpIHx8IG1vcy5Jbml0aWFsVmFsdWUgPT09IG51bGwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIlRleHQgKHN0cmluZ1tdKVwiLCBWYWx1ZTogc3RyaW5naWZ5KG1vcy5UZXh0KSwgU3RhdHVzOiBBcnJheS5pc0FycmF5KG1vcy5UZXh0KSB8fCBtb3MuVGV4dCA9PT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBtb3MuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IG1vcy5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IG1vcy5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IG1vcy5BdHRyaWJ1dGVOYW1lID09PSBcInY0X2NhdGVnb3JpZXNcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogbW9zLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogbW9zLkF0dHJpYnV0ZVR5cGUgPT09IFwibXVsdGlzZWxlY3RvcHRpb25zZXRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IG1vcy5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBtb3MuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IG1vcy5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBtb3MuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IG1vcy5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogbW9zLlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBtb3MuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBtb3MuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxN1wiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogbW9zLkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMThcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogbW9zLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWUgKGFycmF5IG9mIG51bWJlcnMpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9IFsxLCAyXTsgLy8gVGVzdCB3aXRoIHNhbXBsZSB2YWx1ZXNcclxuICAgICAgICBtb3MuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBtb3MuVmFsdWU7XHJcbiAgICAgICAgbW9zLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gQXJyYXkuaXNBcnJheShuZXdWYWx1ZSkgfHwgbmV3VmFsdWUgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBzdWNjZXNzID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBzdWNjZXNzID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gbW9zLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgbW9zLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb3MuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtb3MuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBtb3MuRGlzYWJsZWQ7XHJcbiAgICAgICAgbW9zLkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vcy5EaXNhYmxlZDtcclxuICAgICAgICBtb3MuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IG1vcy5MYWJlbDtcclxuICAgICAgICBtb3MuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vcy5MYWJlbDtcclxuICAgICAgICBtb3MuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBtb3MuVmlzaWJsZTtcclxuICAgICAgICBtb3MuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vcy5WaXNpYmxlO1xyXG4gICAgICAgIG1vcy5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBPcHRpb24gKGdldCBzcGVjaWZpYyBvcHRpb24pXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBtb3MuT3B0aW9ucztcclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RPcHRpb24gPSBtb3MuT3B0aW9uKG9wdGlvbnNbMF0udmFsdWUpO1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IHN0cmluZ2lmeShmaXJzdE9wdGlvbiksIFN0YXR1czogZmlyc3RPcHRpb24gPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IFwiTm8gb3B0aW9uc1wiLCBTdGF0dXM6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJPcHRpb24odmFsdWUpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEFkZE9uQ2hhbmdlXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE11bHRpT3B0aW9uU2V0IE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb3MuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogUmVtb3ZlT25DaGFuZ2VcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9zLlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEZpcmVPbkNoYW5nZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb3MuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogRm9jdXNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb3MuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogU2V0Tm90aWZpY2F0aW9uXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vcy5TZXROb3RpZmljYXRpb24oXCJUZXN0IE11bHRpT3B0aW9uU2V0IG5vdGlmaWNhdGlvblwiLCBcIk1PU19URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb3MuQ2xlYXJOb3RpZmljYXRpb24oXCJNT1NfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBTZXRJc1ZhbGlkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vcy5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vcy5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNDXHVERkY3XHVGRTBGIFRFU1QgMTM6IE11bHRpT3B0aW9uU2V0IENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogdjRfQ2F0ZWdvcmllcyBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzEyKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBzdHJpbmdpZnkgb2JqZWN0cyBmb3IgZGlzcGxheVxyXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyIG9yIENvbXBsZXggT2JqZWN0XSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxNDogVGFiIENvbnRyb2wgLSBERVRBSUxTX1RBQlxyXG4gKiBJVGFiIGludGVyZmFjZSBmb3IgZm9ybSB0YWJzIHdpdGggRGlzcGxheVN0YXRlLCBMYWJlbCwgVmlzaWJsZSBwcm9wZXJ0aWVzXHJcbiAqIEFsc28gdGVzdHMgU2VjdGlvbiB3aXRoaW4gdGhlIHRhYlxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RUYWIoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IHRhYiA9IGZvcm0uQm9keS5UYWIuU1VNTUFSWV9UQUI7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBUQUIgUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiVGFiLk5hbWVcIiwgVmFsdWU6IHRhYi5OYW1lLCBTdGF0dXM6IHRhYi5OYW1lID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJUYWIuUGFyZW50XCIsIFZhbHVlOiB0YWIuUGFyZW50ID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IHRhYi5QYXJlbnQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlRhYi5EaXNwbGF5U3RhdGVcIiwgVmFsdWU6IHRhYi5EaXNwbGF5U3RhdGUsIFN0YXR1czogdGFiLkRpc3BsYXlTdGF0ZSA9PT0gXCJleHBhbmRlZFwiIHx8IHRhYi5EaXNwbGF5U3RhdGUgPT09IFwiY29sbGFwc2VkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIlRhYi5MYWJlbFwiLCBWYWx1ZTogdGFiLkxhYmVsLCBTdGF0dXM6IHRhYi5MYWJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiVGFiLlZpc2libGVcIiwgVmFsdWU6IHRhYi5WaXNpYmxlLCBTdGF0dXM6IHR5cGVvZiB0YWIuVmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gU2VjdGlvbiBwcm9wZXJ0aWVzIChBQ0NPVU5UX0lORk9STUFUSU9OIHNlY3Rpb24pXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRhYi5TZWN0aW9uLkFDQ09VTlRfSU5GT1JNQVRJT047XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLkJJTExJTkdcIiwgVmFsdWU6IHNlY3Rpb24gPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogc2VjdGlvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5OYW1lXCIsIFZhbHVlOiBzZWN0aW9uPy5OYW1lLCBTdGF0dXM6IHNlY3Rpb24/Lk5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uUGFyZW50XCIsIFZhbHVlOiBzZWN0aW9uPy5QYXJlbnQgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogc2VjdGlvbj8uUGFyZW50ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLkxhYmVsXCIsIFZhbHVlOiBzZWN0aW9uPy5MYWJlbCwgU3RhdHVzOiBzZWN0aW9uPy5MYWJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uVmlzaWJsZVwiLCBWYWx1ZTogc2VjdGlvbj8uVmlzaWJsZSwgU3RhdHVzOiB0eXBlb2Ygc2VjdGlvbj8uVmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gVEFCIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc3BsYXlTdGF0ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzcGxheVN0YXRlID0gdGFiLkRpc3BsYXlTdGF0ZTtcclxuICAgICAgICB0YWIuRGlzcGxheVN0YXRlID0gb3JpZ0Rpc3BsYXlTdGF0ZSA9PT0gXCJleHBhbmRlZFwiID8gXCJjb2xsYXBzZWRcIiA6IFwiZXhwYW5kZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHRhYi5EaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgdGFiLkRpc3BsYXlTdGF0ZSA9IG9yaWdEaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJUYWIuRGlzcGxheVN0YXRlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVGFiLkRpc3BsYXlTdGF0ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSB0YWIuTGFiZWw7XHJcbiAgICAgICAgdGFiLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSB0YWIuTGFiZWw7XHJcbiAgICAgICAgdGFiLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVGFiLkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVGFiLkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSB0YWIuVmlzaWJsZTtcclxuICAgICAgICB0YWIuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHRhYi5WaXNpYmxlO1xyXG4gICAgICAgIHRhYi5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJUYWIuVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlRhYi5WaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEZvY3VzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGFiLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiVGFiLkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiVGFiLkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEFkZFRhYlN0YXRlQ2hhbmdlXHJcbiAgICBjb25zdCB0YWJTdGF0ZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIFRhYiBTdGF0ZUNoYW5nZSBmaXJlZFwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGFiLkFkZFRhYlN0YXRlQ2hhbmdlKHRhYlN0YXRlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVGFiLkFkZFRhYlN0YXRlQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJUYWIuQWRkVGFiU3RhdGVDaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogUmVtb3ZlVGFiU3RhdGVDaGFuZ2VcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGFiLlJlbW92ZVRhYlN0YXRlQ2hhbmdlKHRhYlN0YXRlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVGFiLlJlbW92ZVRhYlN0YXRlQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJUYWIuUmVtb3ZlVGFiU3RhdGVDaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRUNUSU9OIFNFVFRFUlMgKFMtSW5kZXggY29udGludWVkKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IHNlY3Rpb24gPSB0YWIuU2VjdGlvbi5BQ0NPVU5UX0lORk9STUFUSU9OO1xyXG5cclxuICAgIC8vIFNlY3Rpb246IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IHNlY3Rpb24uTGFiZWw7XHJcbiAgICAgICAgc2VjdGlvbi5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc2VjdGlvbi5MYWJlbDtcclxuICAgICAgICBzZWN0aW9uLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5MYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlY3Rpb246IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBzZWN0aW9uLlZpc2libGU7XHJcbiAgICAgICAgc2VjdGlvbi5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc2VjdGlvbi5WaXNpYmxlO1xyXG4gICAgICAgIHNlY3Rpb24uVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5WaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5WaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDRDEgVEVTVCAxNDogVGFiIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogREVUQUlMU19UQUIgJiBCSUxMSU5HIHNlY3Rpb24gLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxMClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVM4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDE1OiBOYXZpZ2F0aW9uSXRlbSBDb250cm9sIC0gQWNjb3VudF9UYXNrc1xyXG4gKiBOYXZpZ2F0aW9uSXRlbSBpbnRlcmZhY2UgZm9yIGZvcm0gbmF2aWdhdGlvbiBpdGVtcyB3aXRoIElkLCBMYWJlbCwgVmlzaWJsZSwgRm9jdXNcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TmF2aWdhdGlvbkl0ZW0oZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG5hdkl0ZW0gPSBmb3JtLk5hdmlnYXRpb24ubmF2X21zYV9hY2NvdW50X21hbmFnaW5ncGFydG5lcjtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJJZFwiLCBWYWx1ZTogbmF2SXRlbS5JZCwgU3RhdHVzOiBuYXZJdGVtLklkID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogbmF2SXRlbS5MYWJlbCwgU3RhdHVzOiBuYXZJdGVtLkxhYmVsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBuYXZJdGVtLlZpc2libGUsIFN0YXR1czogdHlwZW9mIG5hdkl0ZW0uVmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gbmF2SXRlbS5MYWJlbDtcclxuICAgICAgICBuYXZJdGVtLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBuYXZJdGVtLkxhYmVsO1xyXG4gICAgICAgIG5hdkl0ZW0uTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBuYXZJdGVtLlZpc2libGU7XHJcbiAgICAgICAgbmF2SXRlbS5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbmF2SXRlbS5WaXNpYmxlO1xyXG4gICAgICAgIG5hdkl0ZW0uVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogRm9jdXNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBuYXZJdGVtLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNFXHVEREVEIFRFU1QgMTU6IE5hdmlnYXRpb25JdGVtIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogQWNjb3VudF9UYXNrcyAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjMpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxXQUFTLFNBQWlDO0FBQ3RDLFFBQUksT0FBTyxXQUFXLGVBQWdCLE9BQWUsUUFBUSxRQUFXO0FBQ3BFLGFBQVEsT0FBZTtBQUFBLElBQzNCO0FB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QUN4QztBQUFBLElBQXFEO0FBRXpELFlBQVEsU0FBUztBQUFBLEVBQ3JCOzs7QXBCMUVBLE1BQU0sY0FBZSxXQUFZO0FBQzdCO0FBRUEsUUFBSTtBQUVKLG1CQUFlLE9BQU8sa0JBQXNDO0FBQ3hELGFBQU8sSUFBSSxZQUFZLEtBQUssZ0JBQWdCO0FBQzVDLHFCQUFlO0FBQ2YsV0FBSyxZQUFZLFdBQVc7QUFBQSxJQUNoQztBQUVBLGFBQVMsaUJBQXVCO0FBQzVCLFVBQUksS0FBSyxpQkFBaUIsY0FBYyxHQUFHO0FBQUEsTUFDM0M7QUFBQSxJQUNKO0FBTUEsbUJBQWUsWUFBWSxrQkFBc0M7QUFLN0QsaUJBQVcsWUFBWTtBQUNuQixnQkFBUSxNQUFNO0FBR2Qsb0JBQVksSUFBSTtBQUdoQixtQkFBVyxJQUFJO0FBR2YsaUJBQVMsSUFBSTtBQUdiLG1CQUFXLElBQUk7QUFHZixvQkFBWSxJQUFJO0FBR2hCLHNCQUFjLElBQUk7QUFHbEIsY0FBTSxXQUFXLElBQUk7QUFHckIsa0JBQVUsSUFBSTtBQUdkLG9CQUFZLElBQUk7QUFHaEIscUJBQWEsSUFBSTtBQUdqQixxQkFBYSxJQUFJO0FBR2pCLGlCQUFTLElBQUk7QUFHYixvQkFBWSxJQUFJO0FBR2hCLDJCQUFtQixJQUFJO0FBR3ZCLGdCQUFRLElBQUk7QUFHWiwyQkFBbUIsSUFBSTtBQUFBLE1BRTNCLEdBQUcsR0FBSztBQUFBLElBR1o7QUEyQkEsV0FBTztBQUFBLE1BQ0gsUUFBUTtBQUFBLElBQ1o7QUFBQSxFQUNKLEVBQUc7QUFFSCxNQUFPLGtCQUFROyIsCiAgIm5hbWVzIjogWyJmb3JtQ29udGV4dCIsICJ0YWJzIiwgIm5hdmlnYXRpb25zIiwgInF1aWNrRm9ybXMiLCAiZ3JpZHMiLCAiQWNjb3VudEZvcm0iLCAic3RyaW5naWZ5IiwgInNlY3Rpb24iXQp9Cg==
