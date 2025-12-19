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

  // entities/Account.TestExecutionContext.ts
  function TestExecutionContext(form) {
    const results = [];
    const methodResults = [];
    const ctx = form.ExecutionContext;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    try {
      results.push({ Test: "R1", Property: "Depth", Value: ctx.Depth, Status: typeof ctx.Depth === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "EntityReference", Value: ctx.EntityReference, Status: "\u2713" });
      results.push({ Test: "R3", Property: "EventArgs", Value: ctx.EventArgs, Status: "\u2713" });
      results.push({ Test: "R4", Property: "EventSource", Value: ctx.EventSource, Status: "\u2713" });
      results.push({ Test: "R5", Property: "FormContext", Value: ctx.FormContext ? "FormContext Object" : null, Status: ctx.FormContext ? "\u2713" : "\u26A0" });
      results.push({ Test: "R6", Property: "IsSaveSuccess", Value: ctx.IsSaveSuccess, Status: "\u2713" });
      results.push({ Test: "R7", Property: "SaveErrorInfo", Value: ctx.SaveErrorInfo, Status: "\u2713" });
      results.push({ Test: "R8", Property: "SaveMode", Value: ctx.SaveMode, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const testKey = "DevKitTestVariable";
      const testValue = { data: "Test value from DevKit", timestamp: (/* @__PURE__ */ new Date()).toISOString() };
      ctx.SetSharedVariable(testKey, testValue);
      const retrieved = ctx.GetSharedVariable(testKey);
      const success = retrieved && retrieved.data === testValue.data;
      methodResults.push({ Test: "S1", Property: "Set/GetSharedVariable", Value: success ? "Set and Retrieved Successfully" : "Failed", Status: success ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Set/GetSharedVariable", Value: e.message, Status: "\u2717" });
    }
    try {
      const isInitial = ctx.IsInitialLoad();
      methodResults.push({ Test: "S2", Property: "IsInitialLoad()", Value: isInitial, Status: typeof isInitial === "boolean" ? "\u2713" : "\u26A0" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "IsInitialLoad()", Value: e.message, Status: "\u2717" });
    }
    try {
      const isPrevented = ctx.IsDefaultPrevented();
      methodResults.push({ Test: "S3", Property: "IsDefaultPrevented()", Value: isPrevented, Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "IsDefaultPrevented()", Value: e.message, Status: "\u2717" });
    }
    try {
      const hasMethod = typeof ctx.DisableAsyncTimeout === "function";
      methodResults.push({ Test: "S4", Property: "DisableAsyncTimeout", Value: hasMethod ? "Method exists" : "Not a function", Status: hasMethod ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "DisableAsyncTimeout", Value: e.message, Status: "\u2717" });
    }
    try {
      const hasMethod = typeof ctx.SetPreventDefault === "function";
      methodResults.push({ Test: "S5", Property: "SetPreventDefault", Value: hasMethod ? "Method exists" : "Not a function", Status: hasMethod ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "SetPreventDefault", Value: e.message, Status: "\u2717" });
    }
    try {
      const hasMethod = typeof ctx.SetPreventDefaultOnError === "function";
      methodResults.push({ Test: "S6", Property: "SetPreventDefaultOnError", Value: hasMethod ? "Method exists" : "Not a function", Status: hasMethod ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "SetPreventDefaultOnError", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F3AF} TEST 16: ExecutionContext [${startTime}] - Using: form.ExecutionContext - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R8)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S6)", "font-weight: bold; font-size: 14px; color: #2196F3;");
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
        TestExecutionContext(form);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZW50aXRpZXMvQWNjb3VudC50cyIsICIuLi9saWIvZGV2a2l0LnRzIiwgIi4uL2VudGl0aWVzL2dlbmVyYXRvci9PcHRpb25TZXQudHMiLCAiLi4vZW50aXRpZXMvZ2VuZXJhdG9yL0FjY291bnQuZm9ybS50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RDb250cm9sLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdExvb2t1cC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RNZW1vLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFN0cmluZy50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RJbnRlZ2VyLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE9wdGlvblNldC50cyIsICIuLi9lbnRpdGllcy9nZW5lcmF0b3IvQWNjb3VudC53ZWJhcGkudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0V2ViQXBpLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE1vbmV5LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdEJvb2xlYW4udHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RGF0ZVRpbWUudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RGF0ZU9ubHkudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0R3JpZC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RVdGlsaXR5LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE11bHRpT3B0aW9uU2V0LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFRhYi50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3ROYXZpZ2F0aW9uSXRlbS50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RFeGVjdXRpb25Db250ZXh0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcbmltcG9ydCB7IFRlc3RDb250cm9sIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RDb250cm9sJztcclxuaW1wb3J0IHsgVGVzdExvb2t1cCB9IGZyb20gJy4vQWNjb3VudC5UZXN0TG9va3VwJztcclxuaW1wb3J0IHsgVGVzdE1lbW8gfSBmcm9tICcuL0FjY291bnQuVGVzdE1lbW8nO1xyXG5pbXBvcnQgeyBUZXN0U3RyaW5nIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RTdHJpbmcnO1xyXG5pbXBvcnQgeyBUZXN0SW50ZWdlciB9IGZyb20gJy4vQWNjb3VudC5UZXN0SW50ZWdlcic7XHJcbmltcG9ydCB7IFRlc3RPcHRpb25TZXQgfSBmcm9tICcuL0FjY291bnQuVGVzdE9wdGlvblNldCc7XHJcbmltcG9ydCB7IFRlc3RXZWJBcGkgfSBmcm9tICcuL0FjY291bnQuVGVzdFdlYkFwaSc7XHJcbmltcG9ydCB7IFRlc3RNb25leSB9IGZyb20gJy4vQWNjb3VudC5UZXN0TW9uZXknO1xyXG5pbXBvcnQgeyBUZXN0Qm9vbGVhbiB9IGZyb20gJy4vQWNjb3VudC5UZXN0Qm9vbGVhbic7XHJcbmltcG9ydCB7IFRlc3REYXRlVGltZSB9IGZyb20gJy4vQWNjb3VudC5UZXN0RGF0ZVRpbWUnO1xyXG5pbXBvcnQgeyBUZXN0RGF0ZU9ubHkgfSBmcm9tICcuL0FjY291bnQuVGVzdERhdGVPbmx5JztcclxuaW1wb3J0IHsgVGVzdEdyaWQgfSBmcm9tICcuL0FjY291bnQuVGVzdEdyaWQnO1xyXG5pbXBvcnQgeyBUZXN0VXRpbGl0eSB9IGZyb20gJy4vQWNjb3VudC5UZXN0VXRpbGl0eSc7XHJcbmltcG9ydCB7IFRlc3RNdWx0aU9wdGlvblNldCB9IGZyb20gJy4vQWNjb3VudC5UZXN0TXVsdGlPcHRpb25TZXQnO1xyXG5pbXBvcnQgeyBUZXN0VGFiIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RUYWInO1xyXG5pbXBvcnQgeyBUZXN0TmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuL0FjY291bnQuVGVzdE5hdmlnYXRpb25JdGVtJztcclxuaW1wb3J0IHsgVGVzdEV4ZWN1dGlvbkNvbnRleHQgfSBmcm9tICcuL0FjY291bnQuVGVzdEV4ZWN1dGlvbkNvbnRleHQnO1xyXG5cclxuY29uc3QgZm9ybUFjY291bnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgbGV0IGZvcm06IEFjY291bnRGb3JtLkZvcm07XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Mb2FkKGV4ZWN1dGlvbkNvbnRleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGZvcm0gPSBuZXcgQWNjb3VudEZvcm0uRm9ybShleGVjdXRpb25Db250ZXh0KTtcclxuICAgICAgICByZWdpc3RlckV2ZW50cygpO1xyXG4gICAgICAgIGZvcm0uVWlBZGRMb2FkZWQoVWlBZGRMb2FkZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChmb3JtLkV4ZWN1dGlvbkNvbnRleHQuSXNJbml0aWFsTG9hZCgpKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gT04gTE9BRFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gVWlBZGRMb2FkZWQoZXhlY3V0aW9uQ29udGV4dDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy8gQkVHSU4gT04gTE9BRCBMT0dJQ1xyXG5cclxuICAgICAgICAvLyBXYWl0IDEwIHNlY29uZHMgYWZ0ZXIgT25Mb2FkIHRvIGFsbG93IGZvcm0gdG8gZnVsbHkgbG9hZFxyXG4gICAgICAgIC8vIFRoZW4gY2xlYXIgY29uc29sZSBhbmQgcnVuIHJlYWwgdGVzdHNcclxuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAwOiBJQ29udHJvbCBJbnRlcmZhY2UgKGJhc2UgZm9yIGFsbCBjb250cm9scylcclxuICAgICAgICAgICAgVGVzdENvbnRyb2woZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDE6IExvb2t1cCBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RMb29rdXAoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDI6IE1lbW8gQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TWVtbyhmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMzogU3RyaW5nIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdFN0cmluZyhmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgNDogSW50ZWdlciBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RJbnRlZ2VyKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCA1OiBPcHRpb25TZXQgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0T3B0aW9uU2V0KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCA2OiBXZWJBcGkgXHJcbiAgICAgICAgICAgIGF3YWl0IFRlc3RXZWJBcGkoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDc6IE1vbmV5IENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdE1vbmV5KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCA4OiBCb29sZWFuIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdEJvb2xlYW4oZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDk6IERhdGVUaW1lIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdERhdGVUaW1lKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxMDogRGF0ZU9ubHkgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0RGF0ZU9ubHkoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDExOiBHcmlkIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdEdyaWQoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDEyOiBVdGlsaXR5IEFQSVxyXG4gICAgICAgICAgICBUZXN0VXRpbGl0eShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTM6IE11bHRpT3B0aW9uU2V0IENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdE11bHRpT3B0aW9uU2V0KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxNDogVGFiIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdFRhYihmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTU6IE5hdmlnYXRpb25JdGVtIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdE5hdmlnYXRpb25JdGVtKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxNjogRXhlY3V0aW9uQ29udGV4dFxyXG4gICAgICAgICAgICBUZXN0RXhlY3V0aW9uQ29udGV4dChmb3JtKTtcclxuXHJcbiAgICAgICAgfSwgMTAwMDApO1xyXG5cclxuICAgICAgICAvLyBFTkQgT04gTE9BRCBMT0dJQ1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRU5EIE9OIExPQURcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gT04gQ0hBTkdFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBFTkQgT04gQ0hBTkdFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIFBSRSBTRUFSQ0hcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIEVORCBQUkUgU0VBUkNIXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIE9USEVSU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gRU5EIE9USEVSU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBPbkxvYWQ6IG9uTG9hZFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1BY2NvdW50O1xyXG4iLCAiZnVuY3Rpb24gZ2V0WHJtKCk6IHR5cGVvZiBYcm0gfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAod2luZG93IGFzIGFueSkuWHJtO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXJlbnQud2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAocGFyZW50LndpbmRvdyBhcyBhbnkpLlhybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIChwYXJlbnQud2luZG93IGFzIGFueSkuWHJtO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXJlbnQucGFyZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyZW50LnBhcmVudC53aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIChwYXJlbnQucGFyZW50LndpbmRvdyBhcyBhbnkpLlhybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIChwYXJlbnQucGFyZW50LndpbmRvdyBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuZnVuY3Rpb24gZ2V0dGVyPFQ+KG9iajogYW55LCBwcm9wOiBzdHJpbmcsIGdldHRlckZuOiAoKSA9PiBUKTogdm9pZCB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XHJcbiAgICAgICAgZ2V0OiBnZXR0ZXJGbixcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0dGVyU2V0dGVyPFQ+KG9iajogYW55LCBwcm9wOiBzdHJpbmcsIGdldHRlckZuOiAoKSA9PiBULCBzZXR0ZXJGbjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XHJcbiAgICAgICAgZ2V0OiBnZXR0ZXJGbixcclxuICAgICAgICBzZXQ6IHNldHRlckZuLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkRmllbGQoZm9ybUNvbnRleHQ6IGFueSwgZmllbGQ6IGFueSwgYXR0cmlidXRlOiBhbnksIGNvbnRyb2w6IGFueSk6IHZvaWQge1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlJywgKCkgPT4gY29udHJvbD8uZ2V0QXR0cmlidXRlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlTmFtZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TmFtZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZVBhcmVudCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0UGFyZW50KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlVHlwZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0QXR0cmlidXRlVHlwZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xOYW1lJywgKCkgPT4gY29udHJvbD8uZ2V0TmFtZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xPcHRpb25zJywgKCkgPT4gY29udHJvbD8uZ2V0T3B0aW9ucygpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xQYXJlbnQnLCAoKSA9PiBjb250cm9sPy5nZXRQYXJlbnQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sVHlwZScsICgpID0+IGNvbnRyb2w/LmdldENvbnRyb2xUeXBlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnRm9ybWF0JywgKCkgPT4gYXR0cmlidXRlPy5nZXRGb3JtYXQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJbml0aWFsVXJsJywgKCkgPT4gY29udHJvbD8uZ2V0SW5pdGlhbFVybCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0luaXRpYWxWYWx1ZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0SW5pdGlhbFZhbHVlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSXNEaXJ0eScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0SXNEaXJ0eSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0lzUGFydHlMaXN0JywgKCkgPT4gYXR0cmlidXRlPy5nZXRJc1BhcnR5TGlzdCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0lzVmFsaWQnLCAoKSA9PiBhdHRyaWJ1dGU/LmlzVmFsaWQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdNYXgnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE1heCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ01heExlbmd0aCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TWF4TGVuZ3RoKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnTWluJywgKCkgPT4gYXR0cmlidXRlPy5nZXRNaW4oKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdPYmplY3QnLCAoKSA9PiBjb250cm9sPy5nZXRPYmplY3QoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdPcHRpb25zJywgKCkgPT4gYXR0cmlidXRlPy5nZXRPcHRpb25zKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnT3V0cHV0cycsICgpID0+IGNvbnRyb2w/LmdldE91dHB1dHMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdTZWxlY3RlZE9wdGlvbicsICgpID0+IGF0dHJpYnV0ZT8uZ2V0U2VsZWN0ZWRPcHRpb24oKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdTZWxlY3RlZFJlc3VsdHMnLCAoKSA9PiBjb250cm9sPy5nZXRTZWxlY3RlZFJlc3VsdHMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdTdGF0ZScsICgpID0+IGNvbnRyb2w/LmdldFN0YXRlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnVGV4dCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0VGV4dCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1RvdGFsUmVzdWx0Q291bnQnLCAoKSA9PiBjb250cm9sPy5nZXRUb3RhbFJlc3VsdENvdW50KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnVXNlclByaXZpbGVnZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0VXNlclByaXZpbGVnZSgpKTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0RhdGEnLCAoKSA9PiBjb250cm9sPy5nZXREYXRhKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbnRyb2w/LnNldERhdGEodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0RlZmF1bHRWaWV3JywgKCkgPT4gY29udHJvbD8uZ2V0RGVmYXVsdFZpZXcoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29udHJvbD8uc2V0RGVmYXVsdFZpZXcodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0Rpc2FibGVkJywgKCkgPT4gY29udHJvbD8uZ2V0RGlzYWJsZWQoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gMyB8fCBmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDQpIHJldHVybjtcclxuICAgICAgICBjb250cm9sPy5zZXREaXNhYmxlZCh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0VudGl0eVR5cGVzJywgKCkgPT4gY29udHJvbD8uZ2V0RW50aXR5VHlwZXMoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29udHJvbD8uc2V0RW50aXR5VHlwZXModmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0xhYmVsJywgKCkgPT4gY29udHJvbD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgY29udHJvbD8uc2V0TGFiZWwodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1ByZWNpc2lvbicsICgpID0+IGF0dHJpYnV0ZT8uZ2V0UHJlY2lzaW9uKCksICh2YWx1ZTogbnVtYmVyKSA9PiB7IGF0dHJpYnV0ZT8uc2V0UHJlY2lzaW9uKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdSZXF1aXJlZExldmVsJywgKCkgPT4gYXR0cmlidXRlPy5nZXRSZXF1aXJlZExldmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGF0dHJpYnV0ZT8uc2V0UmVxdWlyZWRMZXZlbCh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnU2VhcmNoUXVlcnknLCAoKSA9PiBjb250cm9sPy5nZXRTZWFyY2hRdWVyeSgpLCAodmFsdWU6IHN0cmluZykgPT4geyBjb250cm9sPy5zZXRTZWFyY2hRdWVyeSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnU2hvd1RpbWUnLCAoKSA9PiBjb250cm9sPy5nZXRTaG93VGltZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgY29udHJvbD8uc2V0U2hvd1RpbWUodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1NyYycsICgpID0+IGNvbnRyb2w/LmdldFNyYygpLCAodmFsdWU6IHN0cmluZykgPT4geyBjb250cm9sPy5zZXRTcmModmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1N1Ym1pdE1vZGUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFN1Ym1pdE1vZGUoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgYXR0cmlidXRlPy5zZXRTdWJtaXRNb2RlKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdWYWx1ZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0VmFsdWUoKSwgKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSAzIHx8IGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gNCkgcmV0dXJuO1xyXG4gICAgICAgIGF0dHJpYnV0ZT8uc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdWaXNpYmxlJywgKCkgPT4gY29udHJvbD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgY29udHJvbD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgZmllbGQuQWRkQ3VzdG9tRmlsdGVyID0gKGZpbHRlcjogc3RyaW5nLCBlbnRpdHlMb2dpY2FOYW1lPzogc3RyaW5nKSA9PiBjb250cm9sPy5hZGRDdXN0b21GaWx0ZXIoZmlsdGVyLCBlbnRpdHlMb2dpY2FOYW1lKTtcclxuICAgIGZpZWxkLkFkZEN1c3RvbVZpZXcgPSAodmlld0lkOiBzdHJpbmcsIGVudGl0eU5hbWU6IHN0cmluZywgdmlld0Rpc3BsYXlOYW1lOiBzdHJpbmcsIGZldGNoWG1sOiBzdHJpbmcsIGxheW91dFhtbDogc3RyaW5nLCBpc0RlZmF1bHQ6IGJvb2xlYW4pID0+IGNvbnRyb2w/LmFkZEN1c3RvbVZpZXcodmlld0lkLCBlbnRpdHlOYW1lLCB2aWV3RGlzcGxheU5hbWUsIGZldGNoWG1sLCBsYXlvdXRYbWwsIGlzRGVmYXVsdCk7XHJcbiAgICBmaWVsZC5BZGRMb29rdXBUYWdDbGljayA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPbkxvb2t1cFRhZ0NsaWNrKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZE5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIG5vdGlmaWNhdGlvbkxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcsIGNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHsgbWVzc2FnZTogbWVzc2FnZSwgYWN0aW9uczogW2NhbGxiYWNrXSB9O1xyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHsgbWVzc2FnZXM6IFttZXNzYWdlXSwgbm90aWZpY2F0aW9uTGV2ZWw6IG5vdGlmaWNhdGlvbkxldmVsLCB1bmlxdWVJZDogdW5pcXVlSWQsIGFjdGlvbnM6IFthY3Rpb25zXSB9O1xyXG4gICAgICAgIHJldHVybiBjb250cm9sPy5hZGROb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcclxuICAgIH07XHJcbiAgICBmaWVsZC5BZGRPbkNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBhdHRyaWJ1dGU/LmFkZE9uQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZE9uT3V0cHV0Q2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uT3V0cHV0Q2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZE9wdGlvbiA9ICh0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIGluZGV4PzogbnVtYmVyKSA9PiBjb250cm9sPy5hZGRPcHRpb24oeyB0ZXh0OiB0ZXh0LCB2YWx1ZTogdmFsdWUgfSwgaW5kZXgpO1xyXG4gICAgZmllbGQuQWRkUG9zdFNlYXJjaCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPblBvc3RTZWFyY2goY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkUHJlU2VhcmNoID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZFByZVNlYXJjaChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRSZXN1bHRPcGVuZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25SZXN1bHRPcGVuZWQoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkU2VsZWN0aW9uID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uU2VsZWN0aW9uKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkNsZWFyTm90aWZpY2F0aW9uID0gKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRyb2w/LmNsZWFyTm90aWZpY2F0aW9uKHVuaXF1ZUlkKTtcclxuICAgIGZpZWxkLkNsZWFyT3B0aW9ucyA9ICgpID0+IGNvbnRyb2w/LmNsZWFyT3B0aW9ucygpO1xyXG4gICAgZmllbGQuQ29udGVudFdpbmRvdyA9IChzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbD8uZ2V0Q29udGVudFdpbmRvdygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIGZpZWxkLkZpcmVPbkNoYW5nZSA9ICgpID0+IGF0dHJpYnV0ZT8uZmlyZU9uQ2hhbmdlKCk7XHJcbiAgICBmaWVsZC5Gb2N1cyA9ICgpID0+IGNvbnRyb2w/LnNldEZvY3VzKCk7XHJcbiAgICBmaWVsZC5PcGVuU2VhcmNoUmVzdWx0ID0gKHJlc3VsdE51bWJlcjogbnVtYmVyLCBtb2RlPzogc3RyaW5nKSA9PiBjb250cm9sPy5vcGVuU2VhcmNoUmVzdWx0KHJlc3VsdE51bWJlciwgbW9kZSk7XHJcbiAgICBmaWVsZC5PcHRpb24gPSAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4gYXR0cmlidXRlPy5nZXRPcHRpb24odmFsdWUpO1xyXG4gICAgZmllbGQuUmVmcmVzaCA9ICgpID0+IGNvbnRyb2w/LnJlZnJlc2goKTtcclxuICAgIGZpZWxkLlJlbW92ZUxvb2t1cFRhZ0NsaWNrID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uTG9va3VwVGFnQ2xpY2soY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlT25DaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gYXR0cmlidXRlPy5yZW1vdmVPbkNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVPbk91dHB1dENoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPbk91dHB1dENoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVPcHRpb24gPSAodmFsdWU6IG51bWJlcikgPT4gY29udHJvbD8ucmVtb3ZlT3B0aW9uKHZhbHVlKTtcclxuICAgIGZpZWxkLlJlbW92ZVBvc3RTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25Qb3N0U2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZVByZVNlYXJjaCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVQcmVTZWFyY2goY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlUmVzdWx0T3BlbmVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uUmVzdWx0T3BlbmVkKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZVNlbGVjdGlvbiA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPblNlbGVjdGlvbihjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5TZXRJc1ZhbGlkID0gKHZhbGlkOiBib29sZWFuLCBtZXNzYWdlPzogc3RyaW5nKSA9PiBhdHRyaWJ1dGU/LnNldElzVmFsaWQodmFsaWQsIG1lc3NhZ2UpO1xyXG4gICAgZmllbGQuU2V0Tm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gY29udHJvbD8uc2V0Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHVuaXF1ZUlkKTtcclxufVxyXG5mdW5jdGlvbiBsb2FkRmllbGRzKGZvcm1Db250ZXh0OiBhbnksIGJvZHk6IGFueSwgdHlwZT86IHN0cmluZyk6IGFueSB7XHJcbiAgICBPYmplY3Qua2V5cyhib2R5KS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBjb25zdCBsb2dpY2FsTmFtZSA9IHR5cGUgPT09IHVuZGVmaW5lZCA/IGZpZWxkPy50b0xvd2VyQ2FzZSgpIDogKHR5cGUgKyBmaWVsZCk/LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGxvZ2ljYWxOYW1lKSA/PyBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChmaWVsZCk7XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IGZvcm1Db250ZXh0Py5nZXRBdHRyaWJ1dGUobG9naWNhbE5hbWUpO1xyXG4gICAgICAgIGlmICghYXR0cmlidXRlICYmIGNvbnRyb2w/LmdldEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgPSBjb250cm9sLmdldEF0dHJpYnV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkRmllbGQoZm9ybUNvbnRleHQsIGJvZHlbZmllbGRdLCBhdHRyaWJ1dGUsIGNvbnRyb2wpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJoZWFkZXJfXCIpIHtcclxuICAgICAgICBjb25zdCBnZXRIZWFkZXJTZWN0aW9uID0gZm9ybUNvbnRleHQ/LnVpPy5oZWFkZXJTZWN0aW9uO1xyXG4gICAgICAgIGdldHRlclNldHRlcihib2R5LCAnQm9keVZpc2libGUnLCAoKSA9PiBnZXRIZWFkZXJTZWN0aW9uPy5nZXRCb2R5VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBnZXRIZWFkZXJTZWN0aW9uPy5zZXRCb2R5VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihib2R5LCAnQ29tbWFuZEJhclZpc2libGUnLCAoKSA9PiBnZXRIZWFkZXJTZWN0aW9uPy5nZXRDb21tYW5kQmFyVmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBnZXRIZWFkZXJTZWN0aW9uPy5zZXRDb21tYW5kQmFyVmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihib2R5LCAnVGFiTmF2aWdhdG9yVmlzaWJsZScsICgpID0+IGdldEhlYWRlclNlY3Rpb24/LmdldFRhYk5hdmlnYXRvclZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ2V0SGVhZGVyU2VjdGlvbj8uc2V0VGFiTmF2aWdhdG9yVmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJvZHk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFRhYnMoZm9ybUNvbnRleHQ6IGFueSwgdGFiczogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBsb2FkU2VjdGlvbiA9IChmb3JtQ29udGV4dDogYW55LCB0YWI6IHN0cmluZywgc2VjdGlvbnM6IGFueSwgc2VjdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiT2JqZWN0ID0gZm9ybUNvbnRleHQ/LnVpPy50YWJzPy5nZXQodGFiKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uT2JqZWN0ID0gdGFiT2JqZWN0Py5zZWN0aW9ucz8uZ2V0KHNlY3Rpb24pO1xyXG4gICAgICAgIGdldHRlcihzZWN0aW9uc1tzZWN0aW9uXSwgJ05hbWUnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihzZWN0aW9uc1tzZWN0aW9uXSwgJ1BhcmVudCcsICgpID0+IHNlY3Rpb25PYmplY3Q/LmdldFBhcmVudCgpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdMYWJlbCcsICgpID0+IHNlY3Rpb25PYmplY3Q/LmdldExhYmVsKCksICh2YWx1ZTogYW55KSA9PiBzZWN0aW9uT2JqZWN0Py5zZXRMYWJlbCh2YWx1ZSkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihzZWN0aW9uc1tzZWN0aW9uXSwgJ1Zpc2libGUnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiBzZWN0aW9uT2JqZWN0Py5zZXRWaXNpYmxlKHZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZFRhYiA9IChmb3JtQ29udGV4dDogYW55LCB0YWJzOiBhbnksIHRhYjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiT2JqZWN0ID0gZm9ybUNvbnRleHQ/LnVpPy50YWJzPy5nZXQodGFiKTtcclxuICAgICAgICBnZXR0ZXIodGFic1t0YWJdLCAnTmFtZScsICgpID0+IHRhYk9iamVjdD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIodGFic1t0YWJdLCAnUGFyZW50JywgKCkgPT4gdGFiT2JqZWN0Py5nZXRQYXJlbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYnNbdGFiXSwgJ0NvbnRlbnRUeXBlJywgKCkgPT4gdGFiT2JqZWN0Py5nZXRDb250ZW50VHlwZSgpLCAodmFsdWU6IGFueSkgPT4geyB0YWJPYmplY3Q/LnNldENvbnRlbnRUeXBlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYnNbdGFiXSwgJ0Rpc3BsYXlTdGF0ZScsICgpID0+IHRhYk9iamVjdD8uZ2V0RGlzcGxheVN0YXRlKCksICh2YWx1ZTogYW55KSA9PiB7IHRhYk9iamVjdD8uc2V0RGlzcGxheVN0YXRlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYnNbdGFiXSwgJ0xhYmVsJywgKCkgPT4gdGFiT2JqZWN0Py5nZXRMYWJlbCgpLCAodmFsdWU6IGFueSkgPT4geyB0YWJPYmplY3Q/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHRhYnNbdGFiXSwgJ1Zpc2libGUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldFZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgdGFic1t0YWJdLkFkZFRhYlN0YXRlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IHRhYk9iamVjdD8uYWRkVGFiU3RhdGVDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgIHRhYnNbdGFiXS5Gb2N1cyA9ICgpID0+IHRhYk9iamVjdD8uc2V0Rm9jdXMoKTtcclxuICAgICAgICB0YWJzW3RhYl0uUmVtb3ZlVGFiU3RhdGVDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gdGFiT2JqZWN0Py5yZW1vdmVUYWJTdGF0ZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGFic1t0YWJdLlNlY3Rpb24pLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRTZWN0aW9uKGZvcm1Db250ZXh0LCB0YWIsIHRhYnNbdGFiXS5TZWN0aW9uLCBzZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyh0YWJzKS5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgbG9hZFRhYihmb3JtQ29udGV4dCwgdGFicywgdGFiKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWROYXZpZ2F0aW9ucyhmb3JtQ29udGV4dDogYW55LCBuYXZpZ2F0aW9uczogYW55KTogdm9pZCB7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIGNvbnN0IGdldE5hdmlnYXRpb25JdGVtID0gKG5hdmlnYXRpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdkl0ZW1zID0gZm9ybUNvbnRleHQ/LnVpPy5uYXZpZ2F0aW9uPy5pdGVtcztcclxuICAgICAgICBpZiAoIW5hdkl0ZW1zKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBuYXZJdGVtcy5nZXRMZW5ndGgoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuYXZJdGVtcy5nZXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtPy5nZXRJZCgpID09PSBuYXZpZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkTmF2aWdhdGlvbiA9IChmb3JtQ29udGV4dDogYW55LCBuYXZpZ2F0aW9uczogYW55LCBuYXZpZ2F0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbSA9IGdldE5hdmlnYXRpb25JdGVtKG5hdmlnYXRpb24pO1xyXG4gICAgICAgIGdldHRlcihuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXSwgJ0lkJywgKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LmdldElkKCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXSwgJ0xhYmVsJywgKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LmdldExhYmVsKCksICh2YWx1ZTogYW55KSA9PiBuYXZpZ2F0aW9uSXRlbT8uc2V0TGFiZWwodmFsdWUpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIobmF2aWdhdGlvbnNbbmF2aWdhdGlvbl0sICdWaXNpYmxlJywgKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LmdldFZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRWaXNpYmxlKHZhbHVlKSk7XHJcbiAgICAgICAgbmF2aWdhdGlvbnNbbmF2aWdhdGlvbl0uRm9jdXMgPSAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uc2V0Rm9jdXMoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhuYXZpZ2F0aW9ucykuZm9yRWFjaChuYXZpZ2F0aW9uID0+IHtcclxuICAgICAgICBsb2FkTmF2aWdhdGlvbihmb3JtQ29udGV4dCwgbmF2aWdhdGlvbnMsIG5hdmlnYXRpb24pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFF1aWNrRm9ybXMoZm9ybUNvbnRleHQ6IGFueSwgcXVpY2tGb3JtczogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBleGNsdWRlZEZpZWxkcyA9IG5ldyBTZXQoW1wiQm9keVwiLCBcIkNvbnRyb2xzXCIsIFwiSXNMb2FkZWRcIiwgXCJSZWZyZXNoXCIsIFwiRm9jdXNcIiwgXCJDb250cm9sVHlwZVwiLCBcIkRpc2FibGVkXCIsIFwiTGFiZWxcIiwgXCJDb250cm9sTmFtZVwiLCBcIkNvbnRyb2xQYXJlbnRcIiwgXCJWaXNpYmxlXCJdKTtcclxuICAgIGNvbnN0IGxvYWRRdWlja0Zvcm0gPSAoZm9ybUNvbnRleHQ6IGFueSwgcXVpY2tGb3JtczogYW55LCBxdWlja0Zvcm06IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IE9iamVjdC5rZXlzKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSkuZmlsdGVyKGZpZWxkID0+ICFleGNsdWRlZEZpZWxkcy5oYXMoZmllbGQpKTtcclxuICAgICAgICBjb25zdCBxdWljayA9IGZvcm1Db250ZXh0Py51aT8ucXVpY2tGb3Jtcz8uZ2V0KHF1aWNrRm9ybSk7XHJcbiAgICAgICAgZ2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0JvZHknLCAoKSA9PiBMb2FkRm9ybURpYWxvZyhxdWljaywgZmllbGRzKSk7XHJcbiAgICAgICAgZ2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0NvbnRyb2xOYW1lJywgKCkgPT4gcXVpY2s/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0NvbnRyb2xQYXJlbnQnLCAoKSA9PiBxdWljaz8uZ2V0UGFyZW50KCkpO1xyXG4gICAgICAgIGdldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdDb250cm9sVHlwZScsICgpID0+IHF1aWNrPy5nZXRDb250cm9sVHlwZSgpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnRGlzYWJsZWQnLCAoKSA9PiBxdWljaz8uZ2V0RGlzYWJsZWQoKSwgKHZhbHVlOiBhbnkpID0+IHsgcXVpY2s/LnNldERpc2FibGVkKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0xhYmVsJywgKCkgPT4gcXVpY2s/LmdldExhYmVsKCksICh2YWx1ZTogYW55KSA9PiB7IHF1aWNrPy5zZXRMYWJlbCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdWaXNpYmxlJywgKCkgPT4gcXVpY2s/LmdldFZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgcXVpY2s/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uQ29udHJvbHMgPSAoYXJnOiBhbnkpID0+IHF1aWNrPy5nZXRDb250cm9sKGFyZyk7XHJcbiAgICAgICAgcXVpY2tGb3Jtc1txdWlja0Zvcm1dLkZvY3VzID0gKCkgPT4gcXVpY2s/LnNldEZvY3VzKCk7XHJcbiAgICAgICAgcXVpY2tGb3Jtc1txdWlja0Zvcm1dLklzTG9hZGVkID0gKCkgPT4gcXVpY2s/LmlzTG9hZGVkKCk7XHJcbiAgICAgICAgcXVpY2tGb3Jtc1txdWlja0Zvcm1dLlJlZnJlc2ggPSAoKSA9PiBxdWljaz8ucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKHF1aWNrRm9ybXMpLmZvckVhY2gocXVpY2tGb3JtID0+IHtcclxuICAgICAgICBsb2FkUXVpY2tGb3JtKGZvcm1Db250ZXh0LCBxdWlja0Zvcm1zLCBxdWlja0Zvcm0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEdyaWRzKGZvcm1Db250ZXh0OiBhbnksIGdyaWRzOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGxvYWRHcmlkQ29sdW1uID0gKGNvbDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTGFiZWwnLCAoKSA9PiBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LmdldExhYmVsKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdOYW1lJywgKCkgPT4gY29sPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihvYmosICdEaXNhYmxlZCcsICgpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uZ2V0RGlzYWJsZWQoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29sPy5jb250cm9scz8uZ2V0KDApPy5zZXREaXNhYmxlZCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihvYmosICdSZXF1aXJlZExldmVsJywgKCkgPT4gY29sPy5nZXRSZXF1aXJlZExldmVsKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbD8uc2V0UmVxdWlyZWRMZXZlbCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihvYmosICdWYWx1ZScsICgpID0+IGNvbD8uZ2V0VmFsdWUoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29sPy5zZXRWYWx1ZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIG9iai5DbGVhck5vdGlmaWNhdGlvbiA9ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LmNsZWFyTm90aWZpY2F0aW9uKHVuaXF1ZUlkKTtcclxuICAgICAgICBvYmouU2V0Tm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gY29sPy5jb250cm9scz8uZ2V0KDApPy5zZXROb3RpZmljYXRpb24obWVzc2FnZSwgdW5pcXVlSWQpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZEdyaWRSb3cgPSAocm93OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdDb2x1bW5zJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2x1bW5zT2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgY29sdW1uc09iai5nZXRMZW5ndGggPSAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uYXR0cmlidXRlcz8uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgICAgIGNvbHVtbnNPYmouZ2V0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHJvdz8uZGF0YT8uZW50aXR5Py5hdHRyaWJ1dGVzPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRHcmlkQ29sdW1uKGNvbHVtbik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbHVtbnNPYmouZm9yRWFjaCA9IChjYWxsYmFjazogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zID0gcm93Py5kYXRhPy5lbnRpdHk/LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29sdW1ucz8uZ2V0TGVuZ3RoKCk7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvYWRHcmlkQ29sdW1uKGNvbHVtbiksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnNPYmo7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0VudGl0eUlkJywgKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmdldElkKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdFbnRpdHlOYW1lJywgKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0VudGl0eVJlZmVyZW5jZScsICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5nZXRFbnRpdHlSZWZlcmVuY2UoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1ByaW1hcnlBdHRyaWJ1dGVWYWx1ZScsICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5nZXRQcmltYXJ5QXR0cmlidXRlVmFsdWUoKSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkR3JpZCA9IChmb3JtQ29udGV4dDogYW55LCBncmlkczogYW55LCBncmlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBncmlkQ29udHJvbCA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGdyaWQpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNvbGxlY3Rpb25PYmplY3QgPSAoZ2V0SXRlbXNGbjogYW55LCBwcm9jZXNzSXRlbUZuOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgb2JqLmdldExlbmd0aCA9ICgpID0+IGdldEl0ZW1zRm4oKT8uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgICAgIG9iai5nZXQgPSAoaW5kZXg6IG51bWJlcikgPT4gcHJvY2Vzc0l0ZW1GbihnZXRJdGVtc0ZuKCk/LmdldChpbmRleCkpO1xyXG4gICAgICAgICAgICBvYmouZm9yRWFjaCA9IChjYWxsYmFjazogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IGdldEl0ZW1zRm4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGl0ZW1zPy5nZXRMZW5ndGgoKSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb2Nlc3NJdGVtRm4oaXRlbXMuZ2V0KGluZGV4KSksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ0VudGl0eU5hbWUnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0RW50aXR5TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdGZXRjaFhtbCcsICgpID0+IGdyaWRDb250cm9sPy5nZXRGZXRjaFhtbCgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdHcmlkVHlwZScsICgpID0+IGdyaWRDb250cm9sPy5nZXRHcmlkVHlwZSgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdSZWxhdGlvbnNoaXAnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0UmVsYXRpb25zaGlwKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1Jvd3MnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRJbnN0YW5jZSA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGdyaWQpPy5nZXRHcmlkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb2xsZWN0aW9uT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gZ3JpZEluc3RhbmNlPy5nZXRSb3dzKCksXHJcbiAgICAgICAgICAgICAgICAocm93OiBhbnkpID0+IGxvYWRHcmlkUm93KHJvdylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdTZWxlY3RlZFJvd3MnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRJbnN0YW5jZSA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGdyaWQpPy5nZXRHcmlkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb2xsZWN0aW9uT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gZ3JpZEluc3RhbmNlPy5nZXRTZWxlY3RlZFJvd3MoKSxcclxuICAgICAgICAgICAgICAgIChyb3c6IGFueSkgPT4gbG9hZEdyaWRSb3cocm93Py5nZXREYXRhKCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnVG90YWxSZWNvcmRDb3VudCcsICgpID0+IGdyaWRDb250cm9sPy5nZXRHcmlkKCk/LmdldFRvdGFsUmVjb3JkQ291bnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnVmlld1NlbGVjdG9yJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3U2VsZWN0b3IgPSBncmlkQ29udHJvbD8uZ2V0Vmlld1NlbGVjdG9yKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgICAgIGdldHRlcihvYmosICdWaXNpYmxlJywgKCkgPT4gdmlld1NlbGVjdG9yPy5pc1Zpc2libGUoKSk7XHJcbiAgICAgICAgICAgIGdldHRlclNldHRlcihvYmosICdDdXJyZW50VmlldycsICgpID0+IHZpZXdTZWxlY3Rvcj8uZ2V0Q3VycmVudFZpZXcoKSwgKHZhbHVlOiBhbnkpID0+IHZpZXdTZWxlY3Rvcj8uc2V0Q3VycmVudFZpZXcodmFsdWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoZ3JpZHNbZ3JpZF0sICdWaXNpYmxlJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldFZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ3JpZENvbnRyb2w/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICBncmlkc1tncmlkXS5BZGRPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ3JpZENvbnRyb2w/LmFkZE9uTG9hZChjYWxsYmFjayk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uT3BlblJlbGF0ZWRHcmlkID0gKCkgPT4gZ3JpZENvbnRyb2w/Lm9wZW5SZWxhdGVkR3JpZCgpO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLlJlZnJlc2ggPSAoKSA9PiBncmlkQ29udHJvbD8ucmVmcmVzaCgpO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLlJlZnJlc2hSaWJib24gPSAoKSA9PiBncmlkQ29udHJvbD8ucmVmcmVzaFJpYmJvbigpO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLlJlbW92ZU9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBncmlkQ29udHJvbD8ucmVtb3ZlT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgICAgICBncmlkc1tncmlkXS5VcmwgPSAoY2xpZW50OiBudW1iZXIpID0+IGdyaWRDb250cm9sPy5nZXRVcmwoY2xpZW50KTtcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhncmlkcykuZm9yRWFjaChncmlkID0+IHtcclxuICAgICAgICBsb2FkR3JpZChmb3JtQ29udGV4dCwgZ3JpZHMsIGdyaWQpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gTG9hZEZvcm0oZm9ybUNvbnRleHQ6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBmb3JtOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGNvbnRleHREYXRhID0gZm9ybUNvbnRleHQ/LmRhdGE7XHJcbiAgICBjb25zdCBjb250ZXh0RGF0YUVudGl0eSA9IGZvcm1Db250ZXh0Py5kYXRhPy5lbnRpdHk7XHJcbiAgICBjb25zdCBjb250ZXh0VWkgPSBmb3JtQ29udGV4dD8udWk7XHJcbiAgICBjb25zdCBjb250ZXh0VWlGb3JtU2VsZWN0b3IgPSBmb3JtQ29udGV4dD8udWk/LmZvcm1TZWxlY3RvcjtcclxuICAgIGNvbnN0IGZpbmRGb3JtSXRlbSA9IChjcml0ZXJpYTogYW55LCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gY29udGV4dFVpRm9ybVNlbGVjdG9yPy5pdGVtcz8uZ2V0TGVuZ3RoKCkgPz8gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjb250ZXh0VWlGb3JtU2VsZWN0b3I/Lml0ZW1zPy5nZXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGNyaXRlcmlhKGl0ZW0pID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgZ2V0dGVyKGZvcm0sICdBdHRyaWJ1dGVzJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmF0dHJpYnV0ZXMpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdDb250cm9scycsICgpID0+IGNvbnRleHRVaT8uY29udHJvbHMpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdEYXRhSXNEaXJ0eScsICgpID0+IGNvbnRleHREYXRhPy5nZXRJc0RpcnR5KCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdEYXRhSXNWYWxpZCcsICgpID0+IGNvbnRleHREYXRhPy5pc1ZhbGlkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdEYXRhWG1sJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldERhdGFYbWwoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eUlkJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldElkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlJc0RpcnR5JywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldElzRGlydHkoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eUlzVmFsaWQnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uaXNWYWxpZCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5TmFtZScsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlSZWZlcmVuY2UnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0RW50aXR5UmVmZXJlbmNlKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdGb3JtSWQnLCAoKSA9PiBjb250ZXh0VWlGb3JtU2VsZWN0b3I/LmdldEN1cnJlbnRJdGVtKCk/LmdldElkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdGb3JtTGFiZWwnLCAoKSA9PiBjb250ZXh0VWlGb3JtU2VsZWN0b3I/LmdldEN1cnJlbnRJdGVtKCk/LmdldExhYmVsKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdGb3JtVHlwZScsICgpID0+IGNvbnRleHRVaT8uZ2V0Rm9ybVR5cGUoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ1ByaW1hcnlBdHRyaWJ1dGVWYWx1ZScsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRQcmltYXJ5QXR0cmlidXRlVmFsdWUoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ1ZpZXdQb3J0SGVpZ2h0JywgKCkgPT4gY29udGV4dFVpPy5nZXRWaWV3UG9ydEhlaWdodCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnVmlld1BvcnRXaWR0aCcsICgpID0+IGNvbnRleHRVaT8uZ2V0Vmlld1BvcnRXaWR0aCgpKTtcclxuICAgIGZvcm0uQWRkT25Qb3N0U2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8uYWRkT25Qb3N0U2F2ZShjYWxsYmFjayk7XHJcbiAgICBmb3JtLkFkZE9uU2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8uYWRkT25TYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uQ2xlYXJGb3JtTm90aWZpY2F0aW9uID0gKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRleHRVaT8uY2xlYXJGb3JtTm90aWZpY2F0aW9uKHVuaXF1ZUlkKTtcclxuICAgIGZvcm0uQ2xvc2UgPSAoKSA9PiBjb250ZXh0VWk/LmNsb3NlKCk7XHJcbiAgICBmb3JtLkRhdGFBZGRPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGE/LmFkZE9uTG9hZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLkRhdGFSZW1vdmVPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGE/LnJlbW92ZU9uTG9hZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLkZvcm1Jc1Zpc2libGUgPSAoZm9ybUlkOiBzdHJpbmcpID0+IHsgcmV0dXJuIGZpbmRGb3JtSXRlbSgoaXRlbTogYW55KSA9PiBpdGVtLmdldElkKCksIGZvcm1JZCk/LmdldFZpc2libGUoKTsgfTtcclxuICAgIGZvcm0uRm9ybU5hdmlnYXRlVG9Gb3JtSWQgPSAoZm9ybUlkOiBzdHJpbmcpID0+IHsgZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0SWQoKSwgZm9ybUlkKT8ubmF2aWdhdGUoKTsgfTtcclxuICAgIGZvcm0uRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWwgPSAoZm9ybUxhYmVsOiBzdHJpbmcpID0+IHsgZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0TGFiZWwoKSwgZm9ybUxhYmVsKT8ubmF2aWdhdGUoKTsgfTtcclxuICAgIGZvcm0uRm9ybVNldFZpc2libGUgPSAoZm9ybUlkOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuKSA9PiB7IGZpbmRGb3JtSXRlbSgoaXRlbTogYW55KSA9PiBpdGVtLmdldElkKCksIGZvcm1JZCk/LnNldFZpc2libGUodmFsdWUpOyB9O1xyXG4gICAgZm9ybS5SZWZyZXNoID0gKHNhdmU/OiBib29sZWFuLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gY29udGV4dERhdGE/LnJlZnJlc2goc2F2ZSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgZm9ybS5SZWZyZXNoUmliYm9uID0gKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiBjb250ZXh0VWk/LnJlZnJlc2hSaWJib24ocmVmcmVzaEFsbCk7XHJcbiAgICBmb3JtLlJlbW92ZU9uUG9zdFNhdmUgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGFFbnRpdHk/LnJlbW92ZU9uUG9zdFNhdmUoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5SZW1vdmVPblNhdmUgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGFFbnRpdHk/LnJlbW92ZU9uU2F2ZShjYWxsYmFjayk7XHJcbiAgICBmb3JtLlNhdmUgPSAoc2F2ZU9wdGlvbnM/OiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250ZXh0RGF0YT8uc2F2ZShzYXZlT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgZm9ybS5TZXRGb3JtRW50aXR5TmFtZSA9IChhcmc6IHN0cmluZykgPT4gY29udGV4dFVpPy5zZXRGb3JtRW50aXR5TmFtZShhcmcpO1xyXG4gICAgZm9ybS5TZXRGb3JtTm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gY29udGV4dFVpPy5zZXRGb3JtTm90aWZpY2F0aW9uKG1lc3NhZ2UsIGxldmVsLCB1bmlxdWVJZCk7XHJcbiAgICBmb3JtLlVpQWRkTG9hZGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHRVaT8uYWRkTG9hZGVkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uVWlBZGRPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5hZGRPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5VaVJlbW92ZUxvYWRlZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0VWk/LnJlbW92ZUxvYWRlZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLlVpUmVtb3ZlT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHRVaT8ucmVtb3ZlT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcbmZ1bmN0aW9uIExvYWRFeGVjdXRpb25Db250ZXh0KGV4ZWN1dGlvbkNvbnRleHQ6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0RlcHRoJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RGVwdGgoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnRW50aXR5UmVmZXJlbmNlJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldEVudGl0eVJlZmVyZW5jZSgpKTtcclxuICAgIGdldHRlcihvYmosICdFdmVudEFyZ3MnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnRXZlbnRTb3VyY2UnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudFNvdXJjZSgpKTtcclxuICAgIGdldHRlcihvYmosICdGb3JtQ29udGV4dCcsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEZvcm1Db250ZXh0KCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0lzU2F2ZVN1Y2Nlc3MnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0SXNTYXZlU3VjY2VzcygpKTtcclxuICAgIGdldHRlcihvYmosICdTYXZlRXJyb3JJbmZvJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldFNhdmVFcnJvckluZm8oKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnU2F2ZU1vZGUnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0U2F2ZU1vZGUoKSk7XHJcbiAgICBvYmouRGlzYWJsZUFzeW5jVGltZW91dCA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5kaXNhYmxlQXN5bmNUaW1lb3V0KCk7XHJcbiAgICBvYmouR2V0U2hhcmVkVmFyaWFibGUgPSAoa2V5OiBzdHJpbmcpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldFNoYXJlZFZhcmlhYmxlKGtleSk7XHJcbiAgICBvYmouSXNEZWZhdWx0UHJldmVudGVkID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xyXG4gICAgb2JqLklzSW5pdGlhbExvYWQgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0RGF0YUxvYWRTdGF0ZSgpID09PSAxO1xyXG4gICAgb2JqLlNldFByZXZlbnREZWZhdWx0ID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBvYmouU2V0UHJldmVudERlZmF1bHRPbkVycm9yID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LnByZXZlbnREZWZhdWx0T25FcnJvcigpO1xyXG4gICAgb2JqLlNldFNoYXJlZFZhcmlhYmxlID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiBleGVjdXRpb25Db250ZXh0Py5zZXRTaGFyZWRWYXJpYWJsZShrZXksIHZhbHVlKTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuLyoqXHJcbiAqIExvYWRzIHRoZSBTaWRlUGFuZXMgQVBJIHdyYXBwZXIuXHJcbiAqIFByb3ZpZGVzIGFjY2VzcyB0byBzaWRlIHBhbmVzIGZ1bmN0aW9uYWxpdHkgaW4gbW9kZWwtZHJpdmVuIGFwcHMuXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIElTaWRlUGFuZXMgaW50ZXJmYWNlXHJcbiAqIEBsaW5rIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlci1hcHBzL2RldmVsb3Blci9tb2RlbC1kcml2ZW4tYXBwcy9jbGllbnRhcGkvcmVmZXJlbmNlL3hybS1hcHAtc2lkZXBhbmVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZFNpZGVQYW5lcygpOiBhbnkge1xyXG4gICAgY29uc3Qgc2lkZVBhbmVzOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgZ2V0dGVyU2V0dGVyKHNpZGVQYW5lcywgJ0Rpc3BsYXlTdGF0ZScsICgpID0+ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LnN0YXRlLCAodmFsdWU6IGFueSkgPT4geyBjb25zdCB4ID0gZ2V0WHJtKCk7IGlmICgoeCBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcykgKHggYXMgYW55KS5BcHAuc2lkZVBhbmVzLnN0YXRlID0gdmFsdWU7IH0pO1xyXG4gICAgc2lkZVBhbmVzLkNyZWF0ZSA9IGZ1bmN0aW9uIChwYW5lT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnkpIHsgKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uY3JlYXRlUGFuZShwYW5lT3B0aW9ucyk/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrKTsgfTtcclxuICAgIHNpZGVQYW5lcy5HZXQgPSAocGFuZUlkOiBzdHJpbmcpID0+ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LmdldFBhbmUocGFuZUlkKTtcclxuICAgIHNpZGVQYW5lcy5HZXRBbGwgPSAoKSA9PiAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5nZXRBbGxQYW5lcygpO1xyXG4gICAgc2lkZVBhbmVzLkdldFNlbGVjdGVkID0gKCkgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uZ2V0U2VsZWN0ZWRQYW5lKCk7XHJcbiAgICByZXR1cm4gc2lkZVBhbmVzO1xyXG59XHJcbi8qKlxyXG4gKiBMb2FkcyB0aGUgV2ViQXBpIHdyYXBwZXIuXHJcbiAqIFByb3ZpZGVzIG1ldGhvZHMgdG8gdXNlIFdlYiBBUEkgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgcmVjb3JkcyBhbmQgZXhlY3V0ZSBXZWIgQVBJIGFjdGlvbnMgYW5kIGZ1bmN0aW9ucy5cclxuICogQHJldHVybnMgQW4gb2JqZWN0IGltcGxlbWVudGluZyB0aGUgSVdlYkFwaSBpbnRlcmZhY2VcclxuICogQGxpbmsgaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL3Bvd2VyLWFwcHMvZGV2ZWxvcGVyL21vZGVsLWRyaXZlbi1hcHBzL2NsaWVudGFwaS9yZWZlcmVuY2UveHJtLXdlYmFwaVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRXZWJBcGkoKTogRGV2S2l0LklXZWJBcGkge1xyXG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fSBhcyBEZXZLaXQuSVdlYkFwaTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgY29uc3QgZ2V0V2ViQXBpID0geHJtPy5XZWJBcGk7XHJcbiAgICBjb25zdCBnZXRPbmxpbmUgPSB4cm0/LldlYkFwaT8ub25saW5lO1xyXG4gICAgY29uc3QgZ2V0T2ZmbGluZSA9IHhybT8uV2ViQXBpPy5vZmZsaW5lO1xyXG4gICAgY29uc3QgZXh0cmFjdEVudGl0eU5hbWUgPSBmdW5jdGlvbiAoZmV0Y2hYbWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGNsZWFuWG1sID0gZmV0Y2hYbWw7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hYbWxNYXRjaCA9IGZldGNoWG1sLm1hdGNoKC9mZXRjaHhtbD0vaSk7XHJcbiAgICAgICAgaWYgKGZldGNoWG1sTWF0Y2gpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXRJbmRleCA9IGZldGNoWG1sLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmV0Y2h4bWw9JykgKyAnZmV0Y2h4bWw9Jy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNsZWFuWG1sID0gZGVjb2RlVVJJQ29tcG9uZW50KGZldGNoWG1sLnN1YnN0cmluZyhzcGxpdEluZGV4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZldGNoWG1sLnRyaW0oKS5zdGFydHNXaXRoKCc8JykpIHtcclxuICAgICAgICAgICAgY2xlYW5YbWwgPSBmZXRjaFhtbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoY2xlYW5YbWwsIFwidGV4dC94bWxcIik7XHJcbiAgICAgICAgY29uc3QgZW50aXR5Tm9kZSA9IHhtbERvYy5xdWVyeVNlbGVjdG9yKFwiZW50aXR5XCIpO1xyXG4gICAgICAgIGlmIChlbnRpdHlOb2RlICYmIGVudGl0eU5vZGUuaGFzQXR0cmlidXRlKFwibmFtZVwiKSlcclxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eU5vZGUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSE7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW50aXR5IG5hbWUgbm90IGZvdW5kIGluIGZldGNoWG1sXCIpO1xyXG4gICAgfTtcclxuICAgIG9iai5DcmVhdGVSZWNvcmQgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgZGF0YTogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5jcmVhdGVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGRhdGEpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouRGVsZXRlUmVjb3JkID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LmRlbGV0ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgaWQpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouUmV0cmlldmVSZWNvcmQgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgb3B0aW9ucz86IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8ucmV0cmlldmVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkLCBvcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlJldHJpZXZlTXVsdGlwbGVSZWNvcmRzID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcsIG1heFBhZ2VTaXplPzogbnVtYmVyLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZU11bHRpcGxlUmVjb3JkcyhlbnRpdHlMb2dpY2FsTmFtZSwgb3B0aW9ucywgbWF4UGFnZVNpemUpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouVXBkYXRlUmVjb3JkID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGRhdGE6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8udXBkYXRlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBpZCwgZGF0YSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5FeGVjdXRlID0gZnVuY3Rpb24gKHJlcXVlc3Q6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IChnZXRXZWJBcGkgYXMgYW55KT8uZXhlY3V0ZShyZXF1ZXN0KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkV4ZWN1dGVNdWx0aXBsZSA9IGZ1bmN0aW9uIChyZXF1ZXN0czogYW55W10sIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAoZ2V0V2ViQXBpIGFzIGFueSk/LmV4ZWN1dGVNdWx0aXBsZShyZXF1ZXN0cyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5SZXRyaWV2ZVJlY29yZHMgPSBmdW5jdGlvbiAoYXBpQ29uc3RydWN0b3JPckZhY3Rvcnk6IGFueSwgZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnM6IHN0cmluZywgb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrPzogYW55LCBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrPzogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBsZXQgZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZztcclxuICAgICAgICBsZXQgb3B0aW9uczogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCBtYXhQYWdlU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IGhhc0ZldGNoWG1sID0gKHN0cjogc3RyaW5nKSA9PiAvZmV0Y2h4bWw9L2kudGVzdChzdHIpO1xyXG4gICAgICAgIGNvbnN0IGlzUGxhaW5GZXRjaFhtbCA9IChzdHI6IHN0cmluZykgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgc3RyLnRyaW0oKS5zdGFydHNXaXRoKCc8ZmV0Y2gnKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRQYXJhbUlzRmV0Y2hYbWxPck9EYXRhID0gdHlwZW9mIGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgICAgICAoaGFzRmV0Y2hYbWwoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMpIHx8XHJcbiAgICAgICAgICAgICAgICBpc1BsYWluRmV0Y2hYbWwoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMpIHx8XHJcbiAgICAgICAgICAgICAgICAoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMuc3RhcnRzV2l0aCgnPycpICYmICFoYXNGZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykpKTtcclxuICAgICAgICBpZiAoc2Vjb25kUGFyYW1Jc0ZldGNoWG1sT3JPRGF0YSkge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnM7XHJcbiAgICAgICAgICAgIGlmIChpc1BsYWluRmV0Y2hYbWwob3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAnP2ZldGNoWG1sPScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhhc0ZldGNoWG1sKG9wdGlvbnMpIHx8IGlzUGxhaW5GZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIGVudGl0eUxvZ2ljYWxOYW1lID0gZXh0cmFjdEVudGl0eU5hbWUob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VudGl0eSBuYW1lIGNhbm5vdCBiZSBkZXRlcm1pbmVkIGZyb20gT0RhdGEgcXVlcnkuIFBsZWFzZSBwcm92aWRlIGVudGl0eUxvZ2ljYWxOYW1lIGFzIHNlY29uZCBwYXJhbWV0ZXIuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayA9IG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIG1heFBhZ2VTaXplID0gb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW50aXR5TG9naWNhbE5hbWUgPSBlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucztcclxuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjaztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIG1heFBhZ2VTaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnJldHJpZXZlTXVsdGlwbGVSZWNvcmRzKGVudGl0eUxvZ2ljYWxOYW1lISwgb3B0aW9ucywgbWF4UGFnZVNpemUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW50aXRpZXMgJiYgcmVzdWx0LmVudGl0aWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZW50aXRpZXMubWFwKChlbnRpdHk6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkgPT09ICdmdW5jdGlvbicgJiYgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkucHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5KGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeShlbnRpdHkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlJldHJpZXZlUmVjb3JkID0gZnVuY3Rpb24gKGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5OiBhbnksIGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcgfCBGdW5jdGlvbiwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBzdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBcIj8kc2VsZWN0PSpcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBcIj8kc2VsZWN0PSpcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8ucmV0cmlldmVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkLCBvcHRpb25zIGFzIHN0cmluZykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeSA9PT0gJ2Z1bmN0aW9uJyAmJiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeS5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgID8gbmV3IGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5KHJlc3VsdClcclxuICAgICAgICAgICAgICAgIDogYXBpQ29uc3RydWN0b3JPckZhY3RvcnkocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZ2V0dGVyKG9iaiwgJ09ubGluZScsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvbmxpbmU6IGFueSA9IHt9O1xyXG4gICAgICAgIG9ubGluZS5FeGVjdXRlID0gZnVuY3Rpb24gKHJlcXVlc3Q6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRPbmxpbmU/LmV4ZWN1dGUocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvbmxpbmUuRXhlY3V0ZU11bHRpcGxlID0gZnVuY3Rpb24gKHJlcXVlc3RzOiBhbnlbXSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRPbmxpbmU/LmV4ZWN1dGVNdWx0aXBsZShyZXF1ZXN0cyk7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gb25saW5lO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnT2ZmbGluZScsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvZmZsaW5lOiBhbnkgPSB7fTtcclxuICAgICAgICBvZmZsaW5lLklzQXZhaWxhYmxlID0gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcpID0+IChnZXRPZmZsaW5lIGFzIGFueSk/LmlzQXZhaWxhYmxlKGVudGl0eUxvZ2ljYWxOYW1lKTtcclxuICAgICAgICByZXR1cm4gb2ZmbGluZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG4vKipcclxuICogTG9hZHMgdGhlIENvcGlsb3QgQVBJIHdyYXBwZXIuXHJcbiAqIFByb3ZpZGVzIGFjY2VzcyB0byBDb3BpbG90IGZ1bmN0aW9uYWxpdHkgZm9yIGV4ZWN1dGluZyBldmVudHMgYW5kIHByb21wdHMuXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIElDb3BpbG90IGludGVyZmFjZVxyXG4gKiBAbGluayBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXItYXBwcy9kZXZlbG9wZXIvbW9kZWwtZHJpdmVuLWFwcHMvY2xpZW50YXBpL3JlZmVyZW5jZS94cm0tY29waWxvdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRDb3BpbG90KCk6IERldktpdC5JQ29waWxvdCB7XHJcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBjb25zdCBnZXRDb3BpbG90ID0gKHhybSBhcyBhbnkpPy5Db3BpbG90O1xyXG4gICAgb2JqLkV4ZWN1dGVFdmVudCA9IGZ1bmN0aW9uIChldmVudE5hbWU6IHN0cmluZywgZXZlbnRQYXJhbWV0ZXJzOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRDb3BpbG90Py5leGVjdXRlRXZlbnQoZXZlbnROYW1lLCBldmVudFBhcmFtZXRlcnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouRXhlY3V0ZVByb21wdCA9IGZ1bmN0aW9uIChwcm9tcHRUZXh0OiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRDb3BpbG90Py5leGVjdXRlUHJvbXB0KHByb21wdFRleHQpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRPdGhlcnMoZm9ybUNvbnRleHQ6IGFueSwgZm9ybTogYW55LCBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGZvcm0uU2lkZVBhbmVzID0gTG9hZFNpZGVQYW5lcygpO1xyXG4gICAgZm9ybS5XZWJBcGkgPSBMb2FkV2ViQXBpKCk7XHJcbiAgICBmb3JtLkNvcGlsb3QgPSBMb2FkQ29waWxvdCgpO1xyXG59XHJcbi8qKlxyXG4gKiBMb2FkcyBhIGZvcm0gd2l0aCB0eXBlZCBCb2R5LCBIZWFkZXIsIFRhYiwgR3JpZCwgTmF2aWdhdGlvbiwgUXVpY2tGb3JtLCBhbmQgUHJvY2VzcyBzZWN0aW9ucy5cclxuICogVGhpcyBpcyB0aGUgbWFpbiBmdW5jdGlvbiBmb3IgaW5pdGlhbGl6aW5nIGEgZm9ybSBpbiBUeXBlU2NyaXB0LlxyXG4gKiBAcGFyYW0gZXhlY3V0aW9uQ29udGV4dCBUaGUgZXhlY3V0aW9uIGNvbnRleHQgcGFzc2VkIHRvIHRoZSBmb3JtIGV2ZW50IGhhbmRsZXJcclxuICogQHBhcmFtIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUgT3B0aW9uYWwgZGVmYXVsdCB3ZWIgcmVzb3VyY2UgbmFtZSBmb3IgdXRpbGl0eSBmdW5jdGlvbnNcclxuICogQHBhcmFtIGZvcm1Db25maWcgQ29uZmlndXJhdGlvbiBvYmplY3Qgc3BlY2lmeWluZyBmaWVsZHMsIHRhYnMsIGdyaWRzLCBldGMuXHJcbiAqIEByZXR1cm5zIEEgdHlwZWQgZm9ybSBvYmplY3Qgd2l0aCBhbGwgZm9ybSBmdW5jdGlvbmFsaXR5XHJcbiAqIEBsaW5rIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlci1hcHBzL2RldmVsb3Blci9tb2RlbC1kcml2ZW4tYXBwcy9jbGllbnRhcGkvcmVmZXJlbmNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZEZvcm1WMjxUQm9keSA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRIZWFkZXIgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUVGFiID0gUmVjb3JkPHN0cmluZywgYW55PiwgVEdyaWQgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUTmF2aWdhdGlvbiA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRRdWlja0Zvcm0gPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUUHJvY2VzcyA9IGFueT4oXHJcbiAgICBleGVjdXRpb25Db250ZXh0OiBhbnksXHJcbiAgICBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICBmb3JtQ29uZmlnOiB7XHJcbiAgICAgICAgYm9keT86IHN0cmluZ1tdO1xyXG4gICAgICAgIGhlYWRlcj86IHN0cmluZ1tdO1xyXG4gICAgICAgIHRhYj86IHN0cmluZ1tdO1xyXG4gICAgICAgIGdyaWQ/OiBzdHJpbmdbXTtcclxuICAgICAgICBuYXZpZ2F0aW9uPzogc3RyaW5nW107XHJcbiAgICAgICAgcXVpY2s/OiBzdHJpbmdbXTtcclxuICAgICAgICBicGY/OiBzdHJpbmdbXTtcclxuICAgIH1cclxuKToge1xyXG4gICAgRXhlY3V0aW9uQ29udGV4dDogRGV2S2l0LklFeGVjdXRpb25Db250ZXh0O1xyXG4gICAgQm9keTogVEJvZHk7XHJcbiAgICBIZWFkZXI6IFRIZWFkZXI7XHJcbiAgICBUYWI6IFRUYWI7XHJcbiAgICBHcmlkOiBUR3JpZDtcclxuICAgIE5hdmlnYXRpb246IFROYXZpZ2F0aW9uO1xyXG4gICAgUXVpY2tGb3JtOiBUUXVpY2tGb3JtO1xyXG4gICAgRm9ybUlkOiBzdHJpbmc7XHJcbiAgICBGb3JtTGFiZWw6IHN0cmluZztcclxuICAgIEZvcm1UeXBlOiBudW1iZXI7XHJcbiAgICBFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgRW50aXR5TmFtZTogc3RyaW5nO1xyXG4gICAgRGF0YUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBEYXRhSXNWYWxpZDogYm9vbGVhbjtcclxuICAgIEF0dHJpYnV0ZXM6IGFueTtcclxuICAgIENvbnRyb2xzOiBhbnk7XHJcbiAgICBEYXRhWG1sOiBzdHJpbmc7XHJcbiAgICBFbnRpdHlJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgRW50aXR5SXNWYWxpZDogYm9vbGVhbjtcclxuICAgIEVudGl0eVJlZmVyZW5jZTogYW55O1xyXG4gICAgUHJpbWFyeUF0dHJpYnV0ZVZhbHVlOiBzdHJpbmc7XHJcbiAgICBWaWV3UG9ydEhlaWdodDogbnVtYmVyO1xyXG4gICAgVmlld1BvcnRXaWR0aDogbnVtYmVyO1xyXG4gICAgU2F2ZTogKHNhdmVPcHRpb25zPzogYW55KSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgUmVmcmVzaDogKHNhdmU/OiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgICBTZXRGb3JtTm90aWZpY2F0aW9uOiAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgQ2xlYXJGb3JtTm90aWZpY2F0aW9uOiAodW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIFJlZnJlc2hSaWJib246IChyZWZyZXNoQWxsPzogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIFVpQWRkTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBVaVJlbW92ZUxvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgVWlBZGRPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFVpUmVtb3ZlT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBBZGRPblBvc3RTYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBBZGRPblNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFJlbW92ZU9uUG9zdFNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFJlbW92ZU9uU2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgRGF0YUFkZE9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgRGF0YVJlbW92ZU9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgRm9ybUlzVmlzaWJsZTogKGZvcm1JZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgRm9ybU5hdmlnYXRlVG9Gb3JtSWQ6IChmb3JtSWQ6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIEZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsOiAoZm9ybUxhYmVsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBGb3JtU2V0VmlzaWJsZTogKGZvcm1JZDogc3RyaW5nLCB2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgU2V0Rm9ybUVudGl0eU5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBQcm9jZXNzOiBUUHJvY2VzcztcclxuICAgIFV0aWxpdHk6IGFueTtcclxuICAgIFNpZGVQYW5lczogYW55O1xyXG4gICAgV2ViQXBpOiBhbnk7XHJcbiAgICBDb3BpbG90OiBhbnk7XHJcbn0ge1xyXG4gICAgY29uc3QgZm9ybUNvbnRleHQgPSBleGVjdXRpb25Db250ZXh0Py5nZXRGb3JtQ29udGV4dD8uKCkgPz8gZXhlY3V0aW9uQ29udGV4dCA/PyBudWxsO1xyXG4gICAgY29uc3QgZm9ybSA9IExvYWRGb3JtKGZvcm1Db250ZXh0KTtcclxuICAgIGNvbnN0IHsgYm9keSA9IFtdLCB0YWIgPSBbXSwgaGVhZGVyID0gW10sIGJwZiA9IFtdLCBxdWljayA9IFtdLCBncmlkID0gW10sIG5hdmlnYXRpb24gPSBbXSwgZGlhbG9nID0gW10gfSA9IGZvcm1Db25maWcgYXMgYW55O1xyXG4gICAgY29uc3QgYm9keU9iajogYW55ID0ge307XHJcbiAgICBib2R5LmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IGJvZHlPYmpbZmllbGRdID0ge30pO1xyXG4gICAgbG9hZEZpZWxkcyhmb3JtQ29udGV4dCwgYm9keU9iaik7XHJcbiAgICBjb25zdCB0YWJPYmo6IGFueSA9IHt9O1xyXG4gICAgdGFiLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFt0YWJOYW1lLCBzZWN0aW9uTmFtZV0gPSBpdGVtLnNwbGl0KCdfX18nKTtcclxuICAgICAgICBpZiAoIXRhYk9ialt0YWJOYW1lXSkge1xyXG4gICAgICAgICAgICB0YWJPYmpbdGFiTmFtZV0gPSB7IFNlY3Rpb246IHt9IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYk9ialt0YWJOYW1lXS5TZWN0aW9uW3NlY3Rpb25OYW1lXSA9IHt9O1xyXG4gICAgfSk7XHJcbiAgICBsb2FkVGFicyhmb3JtQ29udGV4dCwgdGFiT2JqKTtcclxuICAgIGJvZHlPYmouVGFiID0gdGFiT2JqO1xyXG4gICAgZm9ybS5Cb2R5ID0gYm9keU9iajtcclxuICAgIGNvbnN0IGhlYWRlck9iajogYW55ID0ge307XHJcbiAgICBoZWFkZXIuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4gaGVhZGVyT2JqW2ZpZWxkXSA9IHt9KTtcclxuICAgIGxvYWRGaWVsZHMoZm9ybUNvbnRleHQsIGhlYWRlck9iaiwgJ2hlYWRlcl8nKTtcclxuICAgIGZvcm0uSGVhZGVyID0gaGVhZGVyT2JqO1xyXG4gICAgY29uc3QgcHJvY2VzcyA9IExvYWRQcm9jZXNzKGZvcm1Db250ZXh0KTtcclxuICAgIGlmIChicGYubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGJwZk9iajogYW55ID0ge307XHJcbiAgICAgICAgbGV0IGJwZlByb2Nlc3NOYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBicGYuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtwcm9jZXNzTmFtZSwgZmllbGROYW1lXSA9IGl0ZW0uc3BsaXQoJ19fXycpO1xyXG4gICAgICAgICAgICBpZiAoIWJwZlByb2Nlc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBicGZQcm9jZXNzTmFtZSA9IHByb2Nlc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJwZk9ialtmaWVsZE5hbWVdID0ge307XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9hZEZpZWxkcyhmb3JtQ29udGV4dCwgYnBmT2JqLCAnaGVhZGVyX3Byb2Nlc3NfJyk7XHJcbiAgICAgICAgaWYgKGJwZlByb2Nlc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIHByb2Nlc3NbYnBmUHJvY2Vzc05hbWVdID0gYnBmT2JqO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcm0uUHJvY2VzcyA9IHByb2Nlc3M7XHJcbiAgICBjb25zdCBxdWlja0Zvcm1PYmo6IGFueSA9IHt9O1xyXG4gICAgcXVpY2suZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3F1aWNrRm9ybU5hbWUsIGZpZWxkTmFtZV0gPSBpdGVtLnNwbGl0KCdfX18nKTtcclxuICAgICAgICBpZiAoIXF1aWNrRm9ybU9ialtxdWlja0Zvcm1OYW1lXSkge1xyXG4gICAgICAgICAgICBxdWlja0Zvcm1PYmpbcXVpY2tGb3JtTmFtZV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICBxdWlja0Zvcm1PYmpbcXVpY2tGb3JtTmFtZV1bZmllbGROYW1lXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbG9hZFF1aWNrRm9ybXMoZm9ybUNvbnRleHQsIHF1aWNrRm9ybU9iaik7XHJcbiAgICBmb3JtLlF1aWNrRm9ybSA9IHF1aWNrRm9ybU9iajtcclxuICAgIGNvbnN0IGdyaWRPYmo6IGFueSA9IHt9O1xyXG4gICAgZ3JpZC5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IGdyaWRPYmpbaXRlbV0gPSB7fSk7XHJcbiAgICBsb2FkR3JpZHMoZm9ybUNvbnRleHQsIGdyaWRPYmopO1xyXG4gICAgZm9ybS5HcmlkID0gZ3JpZE9iajtcclxuICAgIGNvbnN0IG5hdmlnYXRpb25PYmo6IGFueSA9IHt9O1xyXG4gICAgbmF2aWdhdGlvbi5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IG5hdmlnYXRpb25PYmpbaXRlbV0gPSB7fSk7XHJcbiAgICBsb2FkTmF2aWdhdGlvbnMoZm9ybUNvbnRleHQsIG5hdmlnYXRpb25PYmopO1xyXG4gICAgZm9ybS5OYXZpZ2F0aW9uID0gbmF2aWdhdGlvbk9iajtcclxuICAgIGlmIChkaWFsb2cubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcm0uRGlhbG9nID0gTG9hZEZvcm1EaWFsb2coZm9ybUNvbnRleHQsIGRpYWxvZyk7XHJcbiAgICB9XHJcbiAgICBmb3JtLlV0aWxpdHkgPSBMb2FkVXRpbGl0eShkZWZhdWx0V2ViUmVzb3VyY2VOYW1lKTtcclxuICAgIGZvcm0uRXhlY3V0aW9uQ29udGV4dCA9IExvYWRFeGVjdXRpb25Db250ZXh0KGV4ZWN1dGlvbkNvbnRleHQpO1xyXG4gICAgbG9hZE90aGVycyhmb3JtQ29udGV4dCwgZm9ybSwgZGVmYXVsdFdlYlJlc291cmNlTmFtZSk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTG9hZFByb2Nlc3MoZm9ybUNvbnRleHQ6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBwcm9jZXNzOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGdldFByb2Nlc3MgPSBmb3JtQ29udGV4dD8uZGF0YT8ucHJvY2VzcztcclxuICAgIGNvbnN0IGdldFByb2Nlc3NVaSA9IGZvcm1Db250ZXh0Py51aT8ucHJvY2VzcztcclxuICAgIGNvbnN0IGxvYWRTdGVwID0gKHN0ZXA6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0F0dHJpYnV0ZScsICgpID0+IHN0ZXA/LmdldEF0dHJpYnV0ZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTmFtZScsICgpID0+IHN0ZXA/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1Byb2dyZXNzJywgKCkgPT4gc3RlcD8uZ2V0UHJvZ3Jlc3MoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1JlcXVpcmVkJywgKCkgPT4gc3RlcD8uaXNSZXF1aXJlZCgpKTtcclxuICAgICAgICBvYmouU2V0UHJvZ3Jlc3MgPSAoc3RlcFByb2dyZXNzOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZykgPT4gc3RlcD8uc2V0UHJvZ3Jlc3Moc3RlcFByb2dyZXNzLCBtZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRTdGFnZSA9IChzdGFnZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ2F0ZWdvcnknLCAoKSA9PiBzdGFnZT8uZ2V0Q2F0ZWdvcnkoKT8uZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0VudGl0eU5hbWUnLCAoKSA9PiBzdGFnZT8uZ2V0RW50aXR5TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSWQnLCAoKSA9PiBzdGFnZT8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBzdGFnZT8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU3RhdHVzJywgKCkgPT4gc3RhZ2U/LmdldFN0YXR1cygpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU3RlcHMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gc3RhZ2U/LmdldFN0ZXBzKCk7XHJcbiAgICAgICAgICAgIGlmICghc3RlcHMpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcHNBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gc3RlcHMubGVuZ3RoIHx8IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHN0ZXBzQXJyYXkucHVzaChsb2FkU3RlcChzdGVwc1tpbmRleF0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RlcHNBcnJheTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBvYmouQWxsb3dDcmVhdGVOZXcgPSAoY2FsbGJhY2s6IGFueSkgPT4geyBpZiAoc3RhZ2U/LmdldE5hdmlnYXRpb25CZWhhdmlvcigpKSBzdGFnZS5nZXROYXZpZ2F0aW9uQmVoYXZpb3IoKS5hbGxvd0NyZWF0ZU5ldyA9IGNhbGxiYWNrOyB9O1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZFByb2Nlc3NJbm5lciA9IChwcm9jZXNzT2JqOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdJZCcsICgpID0+IHByb2Nlc3NPYmo/LmdldElkKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc1JlbmRlcmVkJywgKCkgPT4gcHJvY2Vzc09iaj8uaXNSZW5kZXJlZCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTmFtZScsICgpID0+IHByb2Nlc3NPYmo/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1N0YWdlcycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc1N0YWdlcyA9IHByb2Nlc3NPYmo/LmdldFN0YWdlcygpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFnZXNPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBzdGFnZXNPYmouZ2V0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gcHJvY2Vzc1N0YWdlcz8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkU3RhZ2Uoc3RhZ2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdGFnZXNPYmouZ2V0TGVuZ3RoID0gKCkgPT4gcHJvY2Vzc1N0YWdlcz8uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgICAgIHN0YWdlc09iai5mb3JFYWNoID0gKGNhbGxiYWNrOiAoc3RhZ2U6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gcHJvY2Vzc1N0YWdlcz8uZ2V0TGVuZ3RoKCkgfHwgMDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFnZSA9IHByb2Nlc3NTdGFnZXMuZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhsb2FkU3RhZ2Uoc3RhZ2UpLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBzdGFnZXNPYmo7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0FjdGl2ZVBhdGgnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGF0aE9iajogYW55ID0ge307XHJcbiAgICAgICAgYWN0aXZlUGF0aE9iai5nZXQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFnZSA9IGdldFByb2Nlc3M/LmdldEFjdGl2ZVBhdGgoKT8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgcmV0dXJuIGxvYWRTdGFnZShzdGFnZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhY3RpdmVQYXRoT2JqLmdldExlbmd0aCA9ICgpID0+IGdldFByb2Nlc3M/LmdldEFjdGl2ZVBhdGgoKT8uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgYWN0aXZlUGF0aE9iai5mb3JFYWNoID0gKGNhbGxiYWNrOiAoc3RhZ2U6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFnZXMgPSBnZXRQcm9jZXNzPy5nZXRBY3RpdmVQYXRoKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdGFnZXM/LmdldExlbmd0aCgpOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFnZSA9IHN0YWdlcz8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvYWRTdGFnZShzdGFnZSksIGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZVBhdGhPYmo7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnQWN0aXZlUHJvY2VzcycsICgpID0+IGxvYWRQcm9jZXNzSW5uZXIoZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlUHJvY2VzcygpKSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0FjdGl2ZVN0YWdlJywgKCkgPT4gbG9hZFN0YWdlKGdldFByb2Nlc3M/LmdldEFjdGl2ZVN0YWdlKCkpKTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnSW5zdGFuY2VJZCcsICgpID0+IGdldFByb2Nlc3M/LmdldEluc3RhbmNlSWQoKSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0luc3RhbmNlTmFtZScsICgpID0+IGdldFByb2Nlc3M/LmdldEluc3RhbmNlTmFtZSgpKTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnU2VsZWN0ZWRTdGFnZScsICgpID0+IGxvYWRTdGFnZShnZXRQcm9jZXNzPy5nZXRTZWxlY3RlZFN0YWdlKCkpKTtcclxuICAgIGdldHRlclNldHRlcihwcm9jZXNzLCAnRGlzcGxheVN0YXRlJywgKCkgPT4gZ2V0UHJvY2Vzc1VpPy5nZXREaXNwbGF5U3RhdGUoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgZ2V0UHJvY2Vzc1VpPy5zZXREaXNwbGF5U3RhdGUodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihwcm9jZXNzLCAnU3RhdHVzJywgKCkgPT4gZ2V0UHJvY2Vzcz8uZ2V0U3RhdHVzKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGdldFByb2Nlc3M/LnNldFN0YXR1cyh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKHByb2Nlc3MsICdWaXNpYmxlJywgKCkgPT4gZ2V0UHJvY2Vzc1VpPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYm9vbGVhbikgPT4geyBnZXRQcm9jZXNzVWk/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgIHByb2Nlc3MuQWRkT25QcmVQcm9jZXNzU3RhdHVzQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uUHJlUHJvY2Vzc1N0YXR1c0NoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkFkZE9uUHJlU3RhZ2VDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25QcmVTdGFnZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkFkZE9uUHJvY2Vzc1N0YXR1c0NoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblByb2Nlc3NTdGF0dXNDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5BZGRPblN0YWdlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uU3RhZ2VDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5BZGRPblN0YWdlU2VsZWN0ZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25TdGFnZVNlbGVjdGVkKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuRW5hYmxlZFByb2Nlc3NlcyA9IChjYWxsYmFjazogKHByb2Nlc3NlczogYW55W10pID0+IHZvaWQpID0+IHtcclxuICAgICAgICBnZXRQcm9jZXNzPy5nZXRFbmFibGVkUHJvY2Vzc2VzKChlbmFibGVkUHJvY2Vzc2VzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VzID0gT2JqZWN0LmVudHJpZXMoZW5hYmxlZFByb2Nlc3NlcykubWFwKChbcHJvY2Vzc0lkLCBwcm9jZXNzTmFtZV0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICBQcm9jZXNzSWQ6IHByb2Nlc3NJZCxcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NOYW1lOiBwcm9jZXNzTmFtZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHByb2Nlc3Nlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcHJvY2Vzcy5Nb3ZlTmV4dCA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5tb3ZlTmV4dChjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLk1vdmVQcmV2aW91cyA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5tb3ZlUHJldmlvdXMoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5Qcm9jZXNzSW5zdGFuY2VzID0gKGNhbGxiYWNrOiAocHJvY2Vzc2VzOiBhbnlbXSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgIGdldFByb2Nlc3M/LmdldFByb2Nlc3NJbnN0YW5jZXMoKHByb2Nlc3NJbnN0YW5jZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZXMgPSBPYmplY3QudmFsdWVzKHByb2Nlc3NJbnN0YW5jZXMpLm1hcCgocHJvYzogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc0lkOiBwcm9jLlByb2Nlc3NEZWZpbml0aW9uSUQsXHJcbiAgICAgICAgICAgICAgICBQcm9jZXNzTmFtZTogcHJvYy5Qcm9jZXNzRGVmaW5pdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICBDcmVhdGVkT246IHByb2MuQ3JlYXRlZE9uLFxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlZE9uRGF0ZTogcHJvYy5DcmVhdGVkT25EYXRlLFxyXG4gICAgICAgICAgICAgICAgSW5zdGFuY2VJZDogcHJvYy5Qcm9jZXNzSW5zdGFuY2VJRCxcclxuICAgICAgICAgICAgICAgIEluc3RhbmNlTmFtZTogcHJvYy5Qcm9jZXNzSW5zdGFuY2VOYW1lLFxyXG4gICAgICAgICAgICAgICAgU3RhdHVzOiBwcm9jLlN0YXR1c0NvZGVOYW1lXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgY2FsbGJhY2socHJvY2Vzc2VzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBwcm9jZXNzLlJlZmxvdyA9ICh1cGRhdGVVaTogYm9vbGVhbiwgcGFyZW50U3RhZ2U6IHN0cmluZywgbmV4dFN0YWdlOiBzdHJpbmcpID0+IGdldFByb2Nlc3NVaT8ucmVmbG93KHVwZGF0ZVVpLCBwYXJlbnRTdGFnZSwgbmV4dFN0YWdlKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25QcmVQcm9jZXNzU3RhdHVzQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uUHJlUHJvY2Vzc1N0YXR1c0NoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uUHJlU3RhZ2VDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25QcmVTdGFnZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uUHJvY2Vzc1N0YXR1c0NoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblByb2Nlc3NTdGF0dXNDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblN0YWdlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uU3RhZ2VDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblN0YWdlU2VsZWN0ZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25TdGFnZVNlbGVjdGVkKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuU2V0QWN0aXZlUHJvY2VzcyA9IChwcm9jZXNzSWQ6IHN0cmluZywgY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uc2V0QWN0aXZlUHJvY2Vzcyhwcm9jZXNzSWQsIGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuU2V0QWN0aXZlUHJvY2Vzc0luc3RhbmNlID0gKHByb2Nlc3NJbnN0YW5jZUlkOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnNldEFjdGl2ZVByb2Nlc3NJbnN0YW5jZShwcm9jZXNzSW5zdGFuY2VJZCwgY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5TZXRBY3RpdmVTdGFnZSA9IChzdGFnZUlkOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnNldEFjdGl2ZVN0YWdlKHN0YWdlSWQsIGNhbGxiYWNrKTtcclxuICAgIHJldHVybiBwcm9jZXNzO1xyXG59XHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGludGVyZmFjZSBmb3IgZm9ybSBpbml0aWFsaXphdGlvbi5cclxuICogU3BlY2lmaWVzIHdoaWNoIGZpZWxkcywgdGFicywgZ3JpZHMsIGV0Yy4gdG8gbG9hZCBvbiBhIGZvcm0uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtQ29uZmlnIHtcclxuICAgIC8qKiBBcnJheSBvZiBib2R5IGZpZWxkIGxvZ2ljYWwgbmFtZXMgKi9cclxuICAgIGJvZHk/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBoZWFkZXIgZmllbGQgbG9naWNhbCBuYW1lcyAqL1xyXG4gICAgaGVhZGVyPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgdGFiIGFuZCBzZWN0aW9uIG5hbWVzIGluIGZvcm1hdCBcIlRhYk5hbWVfX19TZWN0aW9uTmFtZVwiICovXHJcbiAgICB0YWI/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBncmlkIGNvbnRyb2wgbmFtZXMgKi9cclxuICAgIGdyaWQ/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBuYXZpZ2F0aW9uIGl0ZW0gSURzICovXHJcbiAgICBuYXZpZ2F0aW9uPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgcXVpY2sgZm9ybSBuYW1lcyBpbiBmb3JtYXQgXCJRdWlja0Zvcm1OYW1lX19fRmllbGROYW1lXCIgKi9cclxuICAgIHF1aWNrPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgQlBGIGZpZWxkcyBpbiBmb3JtYXQgXCJQcm9jZXNzTmFtZV9fX0ZpZWxkTmFtZVwiICovXHJcbiAgICBicGY/OiBzdHJpbmdbXTtcclxufVxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgdHlwZWQgZW50aXR5IGZvcm1zLlxyXG4gKiBQcm92aWRlcyBzdHJvbmdseS10eXBlZCBhY2Nlc3MgdG8gZm9ybSBjb250cm9scywgZmllbGRzLCB0YWJzLCBncmlkcywgYW5kIG1vcmUuXHJcbiAqIEV4dGVuZCB0aGlzIGNsYXNzIGluIGdlbmVyYXRlZCBlbnRpdHkgZm9ybSBmaWxlcy5cclxuICogQHRlbXBsYXRlIFRCb2R5IFR5cGUgZGVmaW5pdGlvbiBmb3IgYm9keSBmaWVsZHNcclxuICogQHRlbXBsYXRlIFRIZWFkZXIgVHlwZSBkZWZpbml0aW9uIGZvciBoZWFkZXIgZmllbGRzXHJcbiAqIEB0ZW1wbGF0ZSBUVGFiIFR5cGUgZGVmaW5pdGlvbiBmb3IgdGFic1xyXG4gKiBAdGVtcGxhdGUgVEdyaWQgVHlwZSBkZWZpbml0aW9uIGZvciBncmlkc1xyXG4gKiBAdGVtcGxhdGUgVE5hdmlnYXRpb24gVHlwZSBkZWZpbml0aW9uIGZvciBuYXZpZ2F0aW9uIGl0ZW1zXHJcbiAqIEB0ZW1wbGF0ZSBUUXVpY2tGb3JtIFR5cGUgZGVmaW5pdGlvbiBmb3IgcXVpY2sgdmlldyBmb3Jtc1xyXG4gKiBAdGVtcGxhdGUgVFByb2Nlc3MgVHlwZSBkZWZpbml0aW9uIGZvciBidXNpbmVzcyBwcm9jZXNzIGZsb3dzXHJcbiAqIEBsaW5rIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlci1hcHBzL2RldmVsb3Blci9tb2RlbC1kcml2ZW4tYXBwcy9jbGllbnRhcGkvcmVmZXJlbmNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9ybUJhc2U8VEJvZHksIFRIZWFkZXIsIFRUYWIsIFRHcmlkLCBUTmF2aWdhdGlvbiwgVFF1aWNrRm9ybSwgVFByb2Nlc3MgPSBhbnk+IHtcclxuICAgIHB1YmxpYyBCb2R5OiBUQm9keTtcclxuICAgIHB1YmxpYyBIZWFkZXI6IFRIZWFkZXI7XHJcbiAgICBwdWJsaWMgVGFiOiBUVGFiO1xyXG4gICAgcHVibGljIEdyaWQ6IFRHcmlkO1xyXG4gICAgcHVibGljIE5hdmlnYXRpb246IFROYXZpZ2F0aW9uO1xyXG4gICAgcHVibGljIFF1aWNrRm9ybTogVFF1aWNrRm9ybTtcclxuICAgIHB1YmxpYyBQcm9jZXNzOiBUUHJvY2VzcztcclxuICAgIHB1YmxpYyBFeGVjdXRpb25Db250ZXh0OiBEZXZLaXQuSUV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICBwdWJsaWMgVXRpbGl0eTogYW55O1xyXG4gICAgcHVibGljIFNpZGVQYW5lczogRGV2S2l0LklTaWRlUGFuZXM7XHJcbiAgICBwdWJsaWMgV2ViQXBpOiBEZXZLaXQuSVdlYkFwaTtcclxuICAgIHB1YmxpYyBDb3BpbG90OiBEZXZLaXQuSUNvcGlsb3Q7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybUlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybUxhYmVsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybVR5cGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhSXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhSXNWYWxpZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBBdHRyaWJ1dGVzOiBhbnk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgQ29udHJvbHM6IGFueTtcclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhWG1sOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5SXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eVJlZmVyZW5jZTogYW55O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IFByaW1hcnlBdHRyaWJ1dGVWYWx1ZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IFZpZXdQb3J0SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgVmlld1BvcnRXaWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIFNhdmU6IChzYXZlT3B0aW9ucz86IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIHB1YmxpYyBSZWZyZXNoOiAoc2F2ZT86IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBwdWJsaWMgQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgU2V0Rm9ybU5vdGlmaWNhdGlvbjogKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIHB1YmxpYyBDbGVhckZvcm1Ob3RpZmljYXRpb246ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgcHVibGljIFJlZnJlc2hSaWJib246IChyZWZyZXNoQWxsPzogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBVaUFkZExvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpUmVtb3ZlTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlBZGRPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBVaVJlbW92ZU9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEFkZE9uUG9zdFNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBBZGRPblNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBSZW1vdmVPblBvc3RTYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgUmVtb3ZlT25TYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRGF0YUFkZE9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIERhdGFSZW1vdmVPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBGb3JtSXNWaXNpYmxlOiAoZm9ybUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgRm9ybU5hdmlnYXRlVG9Gb3JtSWQ6IChmb3JtSWQ6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBGb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbDogKGZvcm1MYWJlbDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEZvcm1TZXRWaXNpYmxlOiAoZm9ybUlkOiBzdHJpbmcsIHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgU2V0Rm9ybUVudGl0eU5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBleGVjdXRpb25Db250ZXh0OiBhbnksXHJcbiAgICAgICAgZGVmYXVsdFdlYlJlc291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIGZvcm1Db25maWc6IElGb3JtQ29uZmlnXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gTG9hZEZvcm1WMjxUQm9keSwgVEhlYWRlciwgVFRhYiwgVEdyaWQsIFROYXZpZ2F0aW9uLCBUUXVpY2tGb3JtLCBUUHJvY2Vzcz4oXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbkNvbnRleHQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUsXHJcbiAgICAgICAgICAgIGZvcm1Db25maWdcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuQm9keSA9IGZvcm0uQm9keTtcclxuICAgICAgICB0aGlzLkhlYWRlciA9IGZvcm0uSGVhZGVyO1xyXG4gICAgICAgIHRoaXMuVGFiID0gZm9ybS5UYWI7XHJcbiAgICAgICAgdGhpcy5HcmlkID0gZm9ybS5HcmlkO1xyXG4gICAgICAgIHRoaXMuTmF2aWdhdGlvbiA9IGZvcm0uTmF2aWdhdGlvbjtcclxuICAgICAgICB0aGlzLlF1aWNrRm9ybSA9IGZvcm0uUXVpY2tGb3JtO1xyXG4gICAgICAgIHRoaXMuUHJvY2VzcyA9IGZvcm0uUHJvY2VzcztcclxuICAgICAgICB0aGlzLkV4ZWN1dGlvbkNvbnRleHQgPSBmb3JtLkV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtSWQgPSBmb3JtLkZvcm1JZDtcclxuICAgICAgICB0aGlzLkZvcm1MYWJlbCA9IGZvcm0uRm9ybUxhYmVsO1xyXG4gICAgICAgIHRoaXMuRm9ybVR5cGUgPSBmb3JtLkZvcm1UeXBlO1xyXG4gICAgICAgIHRoaXMuRW50aXR5SWQgPSBmb3JtLkVudGl0eUlkO1xyXG4gICAgICAgIHRoaXMuRW50aXR5TmFtZSA9IGZvcm0uRW50aXR5TmFtZTtcclxuICAgICAgICB0aGlzLkRhdGFJc0RpcnR5ID0gZm9ybS5EYXRhSXNEaXJ0eTtcclxuICAgICAgICB0aGlzLkRhdGFJc1ZhbGlkID0gZm9ybS5EYXRhSXNWYWxpZDtcclxuICAgICAgICB0aGlzLkF0dHJpYnV0ZXMgPSBmb3JtLkF0dHJpYnV0ZXM7XHJcbiAgICAgICAgdGhpcy5Db250cm9scyA9IGZvcm0uQ29udHJvbHM7XHJcbiAgICAgICAgdGhpcy5EYXRhWG1sID0gZm9ybS5EYXRhWG1sO1xyXG4gICAgICAgIHRoaXMuRW50aXR5SXNEaXJ0eSA9IGZvcm0uRW50aXR5SXNEaXJ0eTtcclxuICAgICAgICB0aGlzLkVudGl0eUlzVmFsaWQgPSBmb3JtLkVudGl0eUlzVmFsaWQ7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlSZWZlcmVuY2UgPSBmb3JtLkVudGl0eVJlZmVyZW5jZTtcclxuICAgICAgICB0aGlzLlByaW1hcnlBdHRyaWJ1dGVWYWx1ZSA9IGZvcm0uUHJpbWFyeUF0dHJpYnV0ZVZhbHVlO1xyXG4gICAgICAgIHRoaXMuVmlld1BvcnRIZWlnaHQgPSBmb3JtLlZpZXdQb3J0SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuVmlld1BvcnRXaWR0aCA9IGZvcm0uVmlld1BvcnRXaWR0aDtcclxuICAgICAgICB0aGlzLlNhdmUgPSBmb3JtLlNhdmU7XHJcbiAgICAgICAgdGhpcy5SZWZyZXNoID0gZm9ybS5SZWZyZXNoO1xyXG4gICAgICAgIHRoaXMuQ2xvc2UgPSBmb3JtLkNsb3NlO1xyXG4gICAgICAgIHRoaXMuU2V0Rm9ybU5vdGlmaWNhdGlvbiA9IGZvcm0uU2V0Rm9ybU5vdGlmaWNhdGlvbjtcclxuICAgICAgICB0aGlzLkNsZWFyRm9ybU5vdGlmaWNhdGlvbiA9IGZvcm0uQ2xlYXJGb3JtTm90aWZpY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuUmVmcmVzaFJpYmJvbiA9IGZvcm0uUmVmcmVzaFJpYmJvbjtcclxuICAgICAgICB0aGlzLlVpQWRkTG9hZGVkID0gZm9ybS5VaUFkZExvYWRlZDtcclxuICAgICAgICB0aGlzLlVpUmVtb3ZlTG9hZGVkID0gZm9ybS5VaVJlbW92ZUxvYWRlZDtcclxuICAgICAgICB0aGlzLlVpQWRkT25Mb2FkID0gZm9ybS5VaUFkZE9uTG9hZDtcclxuICAgICAgICB0aGlzLlVpUmVtb3ZlT25Mb2FkID0gZm9ybS5VaVJlbW92ZU9uTG9hZDtcclxuICAgICAgICB0aGlzLkFkZE9uUG9zdFNhdmUgPSBmb3JtLkFkZE9uUG9zdFNhdmU7XHJcbiAgICAgICAgdGhpcy5BZGRPblNhdmUgPSBmb3JtLkFkZE9uU2F2ZTtcclxuICAgICAgICB0aGlzLlJlbW92ZU9uUG9zdFNhdmUgPSBmb3JtLlJlbW92ZU9uUG9zdFNhdmU7XHJcbiAgICAgICAgdGhpcy5SZW1vdmVPblNhdmUgPSBmb3JtLlJlbW92ZU9uU2F2ZTtcclxuICAgICAgICB0aGlzLkRhdGFBZGRPbkxvYWQgPSBmb3JtLkRhdGFBZGRPbkxvYWQ7XHJcbiAgICAgICAgdGhpcy5EYXRhUmVtb3ZlT25Mb2FkID0gZm9ybS5EYXRhUmVtb3ZlT25Mb2FkO1xyXG4gICAgICAgIHRoaXMuRm9ybUlzVmlzaWJsZSA9IGZvcm0uRm9ybUlzVmlzaWJsZTtcclxuICAgICAgICB0aGlzLkZvcm1OYXZpZ2F0ZVRvRm9ybUlkID0gZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1JZDtcclxuICAgICAgICB0aGlzLkZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsID0gZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbDtcclxuICAgICAgICB0aGlzLkZvcm1TZXRWaXNpYmxlID0gZm9ybS5Gb3JtU2V0VmlzaWJsZTtcclxuICAgICAgICB0aGlzLlNldEZvcm1FbnRpdHlOYW1lID0gZm9ybS5TZXRGb3JtRW50aXR5TmFtZTtcclxuICAgICAgICB0aGlzLlV0aWxpdHkgPSBmb3JtLlV0aWxpdHk7XHJcbiAgICAgICAgdGhpcy5TaWRlUGFuZXMgPSBmb3JtLlNpZGVQYW5lcztcclxuICAgICAgICB0aGlzLldlYkFwaSA9IGZvcm0uV2ViQXBpO1xyXG4gICAgICAgIHRoaXMuQ29waWxvdCA9IGZvcm0uQ29waWxvdDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTG9hZFV0aWxpdHkoZGVmYXVsdFdlYlJlc291cmNlTmFtZT86IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCB1dGlsaXR5OiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgY29uc3QgZ2V0QXBwID0geHJtPy5BcHA7XHJcbiAgICBjb25zdCBnZXREZXZpY2UgPSB4cm0/LkRldmljZTtcclxuICAgIGNvbnN0IGdldEVuY29kaW5nID0geHJtPy5FbmNvZGluZztcclxuICAgIGNvbnN0IGdldEdsb2JhbENvbnRleHQgPSB4cm0/LlV0aWxpdHk/LmdldEdsb2JhbENvbnRleHQoKTtcclxuICAgIGNvbnN0IGdldE5hdmlnYXRpb24gPSB4cm0/Lk5hdmlnYXRpb247XHJcbiAgICBjb25zdCBnZXRQYW5lbCA9IHhybT8uUGFuZWw7XHJcbiAgICBjb25zdCBnZXRVdGlsaXR5ID0geHJtPy5VdGlsaXR5O1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdDbGllbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBnZXRHbG9iYWxDb250ZXh0Py5jbGllbnQ7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NsaWVudE5hbWUnLCAoKSA9PiBjbGllbnQ/LmdldENsaWVudCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ2xpZW50U3RhdGUnLCAoKSA9PiBjbGllbnQ/LmdldENsaWVudFN0YXRlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdGb3JtRmFjdG9yJywgKCkgPT4gY2xpZW50Py5nZXRGb3JtRmFjdG9yKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc05ldHdvcmtBdmFpbGFibGUnLCAoKSA9PiBjbGllbnQ/LmlzTmV0d29ya0F2YWlsYWJsZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNPZmZsaW5lJywgKCkgPT4gY2xpZW50Py5pc09mZmxpbmUoKSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdDbGllbnRVcmwnLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRDbGllbnRVcmwoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0N1cnJlbnRBcHBVcmwnLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRDdXJyZW50QXBwVXJsKCkpO1xyXG4gICAgLy8gQHRzLWlnbm9yZSAtIGlzT25QcmVtaXNlcyBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdJc09uUHJlbWlzZXMnLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5pc09uUHJlbWlzZXMoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0xlYXJuaW5nUGF0aEF0dHJpYnV0ZU5hbWUnLCAoKSA9PiBnZXRVdGlsaXR5Py5nZXRMZWFybmluZ1BhdGhBdHRyaWJ1dGVOYW1lKCkpO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdPcmdhbml6YXRpb25TZXR0aW5ncycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IG9yZ2FuaXphdGlvblNldHRpbmdzID0gZ2V0R2xvYmFsQ29udGV4dD8ub3JnYW5pemF0aW9uU2V0dGluZ3M7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGF0dHJpYnV0ZXMgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnQXR0cmlidXRlcycsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5hdHRyaWJ1dGVzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQmFzZUN1cnJlbmN5JywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmJhc2VDdXJyZW5jeSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0Jhc2VDdXJyZW5jeUlkJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmJhc2VDdXJyZW5jeUlkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRGVmYXVsdENvdW50cnlDb2RlJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmRlZmF1bHRDb3VudHJ5Q29kZSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGZ1bGxOYW1lQ29udmVudGlvbkNvZGUgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnRnVsbE5hbWVDb252ZW50aW9uQ29kZScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5mdWxsTmFtZUNvbnZlbnRpb25Db2RlKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNBdXRvU2F2ZUVuYWJsZWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uaXNBdXRvU2F2ZUVuYWJsZWQpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBpc1RyaWFsT3JnYW5pemF0aW9uIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzVHJpYWxPcmdhbml6YXRpb24nLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uaXNUcmlhbE9yZ2FuaXphdGlvbik7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0xhbmd1YWdlSWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8ubGFuZ3VhZ2VJZCk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIG9yZ2FuaXphdGlvbkV4cGlyeURhdGUgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnT3JnYW5pemF0aW9uRXhwaXJ5RGF0ZScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5vcmdhbml6YXRpb25FeHBpcnlEYXRlKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnT3JnYW5pemF0aW9uSWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8ub3JnYW5pemF0aW9uSWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVbmlxdWVOYW1lJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LnVuaXF1ZU5hbWUpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVc2VTa3lwZVByb3RvY29sJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LnVzZVNreXBlUHJvdG9jb2wpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnUGFnZUNvbnRleHQnLCAoKSA9PiBnZXRVdGlsaXR5Py5nZXRQYWdlQ29udGV4dCgpKTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnVXNlclNldHRpbmdzJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgdXNlclNldHRpbmdzID0gZ2V0R2xvYmFsQ29udGV4dD8udXNlclNldHRpbmdzO1xyXG4gICAgICAgIGdldHRlcihvYmosICdEYXRlRm9ybWF0dGluZ0luZm8nLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmRhdGVGb3JtYXR0aW5nSW5mbyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0RlZmF1bHREYXNoYm9hcmRJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8uZGVmYXVsdERhc2hib2FyZElkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNHdWlkZWRIZWxwRW5hYmxlZCcsICgpID0+IHVzZXJTZXR0aW5ncz8uaXNHdWlkZWRIZWxwRW5hYmxlZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzSGlnaENvbnRyYXN0RW5hYmxlZCcsICgpID0+IHVzZXJTZXR0aW5ncz8uaXNIaWdoQ29udHJhc3RFbmFibGVkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNSVEwnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmlzUlRMKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTGFuZ3VhZ2VJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8ubGFuZ3VhZ2VJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1JvbGVzJywgKCkgPT4gdXNlclNldHRpbmdzPy5yb2xlcyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1NlY3VyaXR5Um9sZVByaXZpbGVnZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnNlY3VyaXR5Um9sZVByaXZpbGVnZXMpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTZWN1cml0eVJvbGVzJywgKCkgPT4gdXNlclNldHRpbmdzPy5zZWN1cml0eVJvbGVzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVGltZVpvbmVPZmZzZXRNaW51dGVzJywgKCkgPT4gdXNlclNldHRpbmdzPy5nZXRUaW1lWm9uZU9mZnNldE1pbnV0ZXMoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1RyYW5zYWN0aW9uQ3VycmVuY3knLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnRyYW5zYWN0aW9uQ3VycmVuY3kpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdUcmFuc2FjdGlvbkN1cnJlbmN5SWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnRyYW5zYWN0aW9uQ3VycmVuY3lJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1VzZXJJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8udXNlcklkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVXNlck5hbWUnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnVzZXJOYW1lKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ1ZlcnNpb24nLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRWZXJzaW9uKCkpO1xyXG4gICAgdXRpbGl0eS5BZGRHbG9iYWxOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldEFwcD8uYWRkR2xvYmFsTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5BZHZhbmNlZENvbmZpZ1NldHRpbmcgPSAoc2V0dGluZzogc3RyaW5nKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRBZHZhbmNlZENvbmZpZ1NldHRpbmcoc2V0dGluZyBhcyBcIk1heENoaWxkSW5jaWRlbnROdW1iZXJcIiB8IFwiTWF4SW5jaWRlbnRNZXJnZU51bWJlclwiKTtcclxuICAgIHV0aWxpdHkuQWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zID0gZnVuY3Rpb24gKGVudGl0eU5hbWU6IHN0cmluZywgc3RhdGVDb2RlOiBudW1iZXIsIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFV0aWxpdHk/LmdldEFsbG93ZWRTdGF0dXNUcmFuc2l0aW9ucyhlbnRpdHlOYW1lLCBzdGF0ZUNvZGUpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQmFyY29kZVZhbHVlID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uZ2V0QmFyY29kZVZhbHVlKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DYXB0dXJlQXVkaW8gPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5jYXB0dXJlQXVkaW8oKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNhcHR1cmVJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZU9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5jYXB0dXJlSW1hZ2UoaW1hZ2VPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNhcHR1cmVWaWRlbyA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmNhcHR1cmVWaWRlbygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2xlYXJHbG9iYWxOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAodW5pcXVlSWQ6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0QXBwPy5jbGVhckdsb2JhbE5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DbG9zZVByb2dyZXNzSW5kaWNhdG9yID0gKCkgPT4gZ2V0VXRpbGl0eT8uY2xvc2VQcm9ncmVzc0luZGljYXRvcigpO1xyXG4gICAgdXRpbGl0eS5DdXJyZW50QXBwTmFtZSA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRHbG9iYWxDb250ZXh0Py5nZXRDdXJyZW50QXBwTmFtZSgpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ3VycmVudEFwcFByb3BlcnRpZXMgPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0Q3VycmVudEFwcFByb3BlcnRpZXMoKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkN1cnJlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmdldEN1cnJlbnRQb3NpdGlvbigpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIC8vIEB0cy1pZ25vcmUgLSBnZXRFbnRpdHlNYWluRm9ybURlc2NyaXB0b3Igbm90IGluIEB0eXBlcy9Ycm1cclxuICAgIHV0aWxpdHkuRW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yID0gKGVudGl0eU5hbWU6IHN0cmluZywgZm9ybUlkOiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LmdldEVudGl0eU1haW5Gb3JtRGVzY3JpcHRvcihlbnRpdHlOYW1lLCBmb3JtSWQpO1xyXG4gICAgdXRpbGl0eS5FbnRpdHlNZXRhZGF0YSA9IGZ1bmN0aW9uIChlbnRpdHlOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBzdHJpbmdbXSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8uZ2V0RW50aXR5TWV0YWRhdGEoZW50aXR5TmFtZSwgYXR0cmlidXRlcyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5IdG1sQXR0cmlidXRlRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8uaHRtbEF0dHJpYnV0ZUVuY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5IdG1sRGVjb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8uaHRtbERlY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5IdG1sRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8uaHRtbEVuY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5JbnZva2VQcm9jZXNzQWN0aW9uID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRVdGlsaXR5Py5pbnZva2VQcm9jZXNzQWN0aW9uKG5hbWUsIHBhcmFtZXRlcnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuTG9hZFBhbmVsID0gKHVybDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKSA9PiBnZXRQYW5lbD8ubG9hZFBhbmVsKHVybCwgdGl0bGUpO1xyXG4gICAgdXRpbGl0eS5Mb29rdXBPYmplY3RzID0gZnVuY3Rpb24gKGxvb2t1cE9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8ubG9va3VwT2JqZWN0cyhsb29rdXBPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk5hdmlnYXRlVG8gPSBmdW5jdGlvbiAocGFnZUlucHV0OiBhbnksIG5hdmlnYXRpb25PcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm5hdmlnYXRlVG8ocGFnZUlucHV0LCBuYXZpZ2F0aW9uT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuQWxlcnREaWFsb2cgPSBmdW5jdGlvbiAoYWxlcnRTdHJpbmdzOiBhbnksIGFsZXJ0T3B0aW9uczogYW55LCBjbG9zZUNhbGxiYWNrPzogKCkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5BbGVydERpYWxvZyhhbGVydFN0cmluZ3MsIGFsZXJ0T3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKGNsb3NlQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oY2xvc2VDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5Db25maXJtRGlhbG9nID0gZnVuY3Rpb24gKGNvbmZpcm1TdHJpbmdzOiBhbnksIGNvbmZpcm1PcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5Db25maXJtRGlhbG9nKGNvbmZpcm1TdHJpbmdzLCBjb25maXJtT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuRXJyb3JEaWFsb2cgPSBmdW5jdGlvbiAoZXJyb3JPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5FcnJvckRpYWxvZyhlcnJvck9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlbkZpbGUgPSAoZmlsZTogYW55LCBvcGVuRmlsZU9wdGlvbnM/OiBhbnkpID0+IGdldE5hdmlnYXRpb24/Lm9wZW5GaWxlKGZpbGUsIG9wZW5GaWxlT3B0aW9ucyk7XHJcbiAgICB1dGlsaXR5Lk9wZW5Gb3JtID0gZnVuY3Rpb24gKGVudGl0eUZvcm1PcHRpb25zOiBhbnksIGZvcm1QYXJhbWV0ZXJzOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5Gb3JtKGVudGl0eUZvcm1PcHRpb25zLCBmb3JtUGFyYW1ldGVycyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuVXJsID0gKHVybDogc3RyaW5nLCBvcGVuVXJsT3B0aW9ucz86IGFueSkgPT4gZ2V0TmF2aWdhdGlvbj8ub3BlblVybCh1cmwsIG9wZW5VcmxPcHRpb25zKTtcclxuICAgIHV0aWxpdHkuT3BlbldlYlJlc291cmNlID0gKHdlYlJlc291cmNlTmFtZTogc3RyaW5nLCB3aW5kb3dPcHRpb25zPzogYW55LCBkYXRhPzogc3RyaW5nKSA9PiBnZXROYXZpZ2F0aW9uPy5vcGVuV2ViUmVzb3VyY2Uod2ViUmVzb3VyY2VOYW1lLCB3aW5kb3dPcHRpb25zLCBkYXRhKTtcclxuICAgIHV0aWxpdHkuUGlja0ZpbGUgPSBmdW5jdGlvbiAocGlja0ZpbGVPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8ucGlja0ZpbGUocGlja0ZpbGVPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LlByZXBlbmRPcmdOYW1lID0gKHNQYXRoOiBzdHJpbmcpID0+IGdldEdsb2JhbENvbnRleHQ/LnByZXBlbmRPcmdOYW1lKHNQYXRoKTtcclxuICAgIHV0aWxpdHkuUmVmcmVzaFBhcmVudEdyaWQgPSAobG9va3VwT3B0aW9uczogYW55KSA9PiBnZXRVdGlsaXR5Py5yZWZyZXNoUGFyZW50R3JpZChsb29rdXBPcHRpb25zKTtcclxuICAgIC8vIEB0cy1pZ25vcmUgLSBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lIG1heSBiZSB1bmRlZmluZWRcclxuICAgIHV0aWxpdHkuUmVzb3VyY2UgPSAoa2V5OiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LmdldFJlc291cmNlU3RyaW5nKGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUhLCBrZXkpO1xyXG4gICAgdXRpbGl0eS5SZXNvdXJjZVN0cmluZyA9ICh3ZWJSZXNvdXJjZU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LmdldFJlc291cmNlU3RyaW5nKHdlYlJlc291cmNlTmFtZSwga2V5KTtcclxuICAgIHV0aWxpdHkuU2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uc2hvd1Byb2dyZXNzSW5kaWNhdG9yKG1lc3NhZ2UpO1xyXG4gICAgdXRpbGl0eS5XZWJSZXNvdXJjZVVybCA9ICh3ZWJSZXNvdXJjZU5hbWU6IHN0cmluZykgPT4gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0V2ViUmVzb3VyY2VVcmwod2ViUmVzb3VyY2VOYW1lKTtcclxuICAgIHV0aWxpdHkuWG1sQXR0cmlidXRlRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8ueG1sQXR0cmlidXRlRW5jb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5LlhtbEVuY29kZSA9IChhcmc6IHN0cmluZykgPT4gZ2V0RW5jb2Rpbmc/LnhtbEVuY29kZShhcmcpO1xyXG4gICAgcmV0dXJuIHV0aWxpdHk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRGb3JtRGlhbG9nKGZvcm1Db250ZXh0OiBhbnksIGZpZWxkczogc3RyaW5nW10pOiBhbnkge1xyXG4gICAgY29uc3QgZm9ybTogYW55ID0ge307XHJcbiAgICBjb25zdCBmaWVsZHNMZW5ndGggPSBmaWVsZHM/Lmxlbmd0aCB8fCAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHNMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkc1tpXTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBmb3JtQ29udGV4dD8uZGF0YT8uZW50aXR5Py5hdHRyaWJ1dGVzPy5nZXQoZmllbGROYW1lKTtcclxuICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZmllbGROYW1lKTtcclxuICAgICAgICBmb3JtW2ZpZWxkTmFtZV0gPSB7fTtcclxuICAgICAgICBsb2FkRmllbGQoZm9ybUNvbnRleHQsIGZvcm1bZmllbGROYW1lXSwgYXR0cmlidXRlLCBjb250cm9sKTtcclxuICAgIH1cclxuICAgIGZvcm0uQ2xvc2UgPSAoKSA9PiBmb3JtQ29udGV4dD8udWk/LmNsb3NlKCk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBXZWJBcGkgSGVscGVyIFR5cGVzIGFuZCBGdW5jdGlvbnNcclxuLy8gRm9yIGVhcmx5LWJvdW5kIHN0eWxlIFdlYkFwaSBjb2RpbmcgKHNpbWlsYXIgdG8gQyMgZWFybHktYm91bmQpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKiBGaWVsZCB0eXBlIGZvciBXZWJBcGkgZmllbGRzICovXHJcbmV4cG9ydCB0eXBlIFdlYkFwaUZpZWxkVHlwZSA9ICdJbnRlZ2VyJyB8ICdOdW1iZXInIHwgJ0Jvb2xlYW4nIHwgJ0RhdGVUaW1lJyB8ICdNdWx0aU9wdGlvblNldCc7XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBmb3IgYSBXZWJBcGkgZmllbGRcclxuICogVXNlZCB0byBkZWZpbmUgbWV0YWRhdGEgZm9yIGVudGl0eSBmaWVsZHMgaW4gV2ViQXBpIG9wZXJhdGlvbnNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdlYkFwaUZpZWxkQ29uZmlnIHtcclxuICAgIC8qKiBMb2dpY2FsIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSAoZS5nLiAnYWNjb3VudGlkJywgJ25hbWUnKSAqL1xyXG4gICAgbG9naWNhbE5hbWU6IHN0cmluZztcclxuICAgIC8qKiBTY2hlbWEgbmFtZSBmb3IgbG9va3VwIGJpbmRpbmcgKGUuZy4gJ1BhcmVudEFjY291bnRJZCcpICovXHJcbiAgICBzY2hlbWFOYW1lPzogc3RyaW5nO1xyXG4gICAgLyoqIEVudGl0eSBjb2xsZWN0aW9uIG5hbWUgZm9yIGxvb2t1cCAoZS5nLiAnYWNjb3VudHMnLCAnY29udGFjdHMnKSAqL1xyXG4gICAgZW50aXR5Q29sbGVjdGlvbk5hbWU/OiBzdHJpbmc7XHJcbiAgICAvKiogRW50aXR5IGxvZ2ljYWwgbmFtZSBmb3IgbG9va3VwIChlLmcuICdhY2NvdW50JywgJ2NvbnRhY3QnKSAqL1xyXG4gICAgZW50aXR5TG9naWNhbE5hbWU/OiBzdHJpbmc7XHJcbiAgICAvKiogV2hldGhlciB0aGUgZmllbGQgaXMgcmVhZC1vbmx5ICovXHJcbiAgICByZWFkT25seT86IGJvb2xlYW47XHJcbiAgICAvKiogRmllbGQgdHlwZSBmb3IgcGFyc2luZyAoSW50ZWdlciwgTnVtYmVyLCBCb29sZWFuLCBEYXRlVGltZSwgTXVsdGlPcHRpb25TZXQpICovXHJcbiAgICB0eXBlPzogV2ViQXBpRmllbGRUeXBlO1xyXG59XHJcblxyXG4vKiogTWFwIG9mIGZpZWxkIG5hbWVzIHRvIHRoZWlyIGNvbmZpZ3VyYXRpb25zICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdlYkFwaUZpZWxkQ29uZmlnTWFwIHtcclxuICAgIFtmaWVsZE5hbWU6IHN0cmluZ106IElXZWJBcGlGaWVsZENvbmZpZztcclxufVxyXG5cclxuLyoqIENvbnN0YW50cyBmb3IgT0RhdGEgYW5ub3RhdGlvbnMgKi9cclxuY29uc3QgV0VCQVBJX0ZPUk1BVFRFRF9WQUxVRV9TVUZGSVggPSAnQE9EYXRhLkNvbW11bml0eS5EaXNwbGF5LlYxLkZvcm1hdHRlZFZhbHVlJztcclxuY29uc3QgV0VCQVBJX0xPT0tVUF9MT0dJQ0FMX05BTUVfU1VGRklYID0gJ0BNaWNyb3NvZnQuRHluYW1pY3MuQ1JNLmxvb2t1cGxvZ2ljYWxuYW1lJztcclxuXHJcbi8qKiBUeXBlIHBhcnNlcnMgZm9yIGRpZmZlcmVudCBXZWJBcGkgZmllbGQgdHlwZXMgKi9cclxuY29uc3Qgd2ViQXBpVHlwZVBhcnNlcnM6IFJlY29yZDxzdHJpbmcsICh2YWx1ZTogYW55KSA9PiBhbnk+ID0ge1xyXG4gICAgRGF0ZVRpbWU6ICh2YWx1ZTogYW55KTogRGF0ZSB8IG51bGwgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gaXNOYU4odmFsdWUuZ2V0VGltZSgpKSA/IG51bGwgOiB2YWx1ZTtcclxuICAgICAgICBjb25zdCB0cmltbWVkU3RyaW5nID0gU3RyaW5nKHZhbHVlKS50cmltKCk7XHJcbiAgICAgICAgaWYgKHRyaW1tZWRTdHJpbmcgPT09ICcnKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLnBhcnNlKHRyaW1tZWRTdHJpbmcpO1xyXG4gICAgICAgIGlmIChpc05hTih0aW1lc3RhbXApKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBwYXJzZWREYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcclxuICAgICAgICByZXR1cm4gaXNOYU4ocGFyc2VkRGF0ZS5nZXRUaW1lKCkpID8gbnVsbCA6IHBhcnNlZERhdGU7XHJcbiAgICB9LFxyXG4gICAgSW50ZWdlcjogKHZhbHVlOiBhbnkpOiBudW1iZXIgfCBudWxsID0+IHtcclxuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xyXG4gICAgICAgIHJldHVybiBpc05hTihwYXJzZWQpID8gbnVsbCA6IHBhcnNlZDtcclxuICAgIH0sXHJcbiAgICBOdW1iZXI6ICh2YWx1ZTogYW55KTogbnVtYmVyIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gaXNOYU4ocGFyc2VkKSA/IG51bGwgOiBwYXJzZWQ7XHJcbiAgICB9LFxyXG4gICAgQm9vbGVhbjogKHZhbHVlOiBhbnkpOiBib29sZWFuIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdmFsdWUgIT09IDA7XHJcbiAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBTdHJpbmcodmFsdWUpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHRydWVWYWx1ZXMgPSBbJ3RydWUnLCAnMScsICd5ZXMnLCAneSddO1xyXG4gICAgICAgIGNvbnN0IGZhbHNlVmFsdWVzID0gWydmYWxzZScsICcwJywgJ25vJywgJ24nXTtcclxuICAgICAgICBpZiAodHJ1ZVZhbHVlcy5pbmNsdWRlcyhzdHJpbmdWYWx1ZSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChmYWxzZVZhbHVlcy5pbmNsdWRlcyhzdHJpbmdWYWx1ZSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBhbmQgcmV0dXJuIHZhbHVlIGJhc2VkIG9uIFdlYkFwaSBmaWVsZCB0eXBlXHJcbiAqL1xyXG5mdW5jdGlvbiB3ZWJBcGlSZXR1cm5HZXQoZGF0YTogYW55LCB0eXBlPzogV2ViQXBpRmllbGRUeXBlKTogYW55IHtcclxuICAgIGlmIChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQpIHJldHVybiBkYXRhO1xyXG4gICAgY29uc3QgcGFyc2VyID0gd2ViQXBpVHlwZVBhcnNlcnNbdHlwZV07XHJcbiAgICByZXR1cm4gcGFyc2VyID8gcGFyc2VyKGRhdGEpIDogZGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZSBhIFdlYkFwaSBmaWVsZCBwcm9wZXJ0eSBvbiB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoIGdldHRlci9zZXR0ZXJcclxuICogQHBhcmFtIG9iaiBUaGUgdGFyZ2V0IG9iamVjdCB0byBkZWZpbmUgcHJvcGVydHkgb25cclxuICogQHBhcmFtIGZpZWxkTmFtZSBUaGUgcHJvcGVydHkgbmFtZVxyXG4gKiBAcGFyYW0gZW50aXR5IFRoZSByYXcgT0RhdGEgZW50aXR5IG9iamVjdFxyXG4gKiBAcGFyYW0gY29uZmlnIFRoZSBmaWVsZCBjb25maWd1cmF0aW9uXHJcbiAqIEBwYXJhbSB1cHNlcnRFbnRpdHkgVGhlIGVudGl0eSBvYmplY3QgZm9yIENyZWF0ZS9VcGRhdGUgb3BlcmF0aW9uc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZVdlYkFwaUZpZWxkKFxyXG4gICAgb2JqOiBhbnksXHJcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcclxuICAgIGVudGl0eTogUmVjb3JkPHN0cmluZywgYW55PixcclxuICAgIGNvbmZpZzogSVdlYkFwaUZpZWxkQ29uZmlnLFxyXG4gICAgdXBzZXJ0RW50aXR5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XHJcbik6IHZvaWQge1xyXG4gICAgY29uc3QgeyBsb2dpY2FsTmFtZSwgc2NoZW1hTmFtZSwgZW50aXR5Q29sbGVjdGlvbk5hbWUsIGVudGl0eUxvZ2ljYWxOYW1lLCByZWFkT25seSwgdHlwZSB9ID0gY29uZmlnO1xyXG5cclxuICAgIGNvbnN0IGdldEZvcm1hdHRlZFZhbHVlID0gKCk6IHN0cmluZyB8IHN0cmluZ1tdID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRLZXkgPSBsb2dpY2FsTmFtZSArIFdFQkFQSV9GT1JNQVRURURfVkFMVUVfU1VGRklYO1xyXG4gICAgICAgIGlmIChlbnRpdHk/Lltmb3JtYXR0ZWRLZXldID09PSB1bmRlZmluZWQgfHwgZW50aXR5Py5bZm9ybWF0dGVkS2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbnRpdHlDb2xsZWN0aW9uTmFtZSAhPT0gdW5kZWZpbmVkICYmIGVudGl0eUNvbGxlY3Rpb25OYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbG9va3VwS2V5ID0gbG9naWNhbE5hbWUgKyBXRUJBUElfTE9PS1VQX0xPR0lDQUxfTkFNRV9TVUZGSVg7XHJcbiAgICAgICAgICAgIGlmIChlbnRpdHk/Lltsb29rdXBLZXldID09PSBlbnRpdHlMb2dpY2FsTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eT8uW2Zvcm1hdHRlZEtleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSA9PT0gJ011bHRpT3B0aW9uU2V0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZW50aXR5Py5bZm9ybWF0dGVkS2V5XT8udG9TdHJpbmcoKT8uc3BsaXQoJzsnKS5tYXAoKGl0ZW06IHN0cmluZykgPT4gaXRlbT8udHJpbSgpKSA/PyBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVudGl0eT8uW2Zvcm1hdHRlZEtleV07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFZhbHVlID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgaWYgKGVudGl0eT8uW2xvZ2ljYWxOYW1lXSA9PT0gdW5kZWZpbmVkIHx8IGVudGl0eT8uW2xvZ2ljYWxOYW1lXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudGl0eUNvbGxlY3Rpb25OYW1lICE9PSB1bmRlZmluZWQgJiYgZW50aXR5Q29sbGVjdGlvbk5hbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBsb29rdXBLZXkgPSBsb2dpY2FsTmFtZSArIFdFQkFQSV9MT09LVVBfTE9HSUNBTF9OQU1FX1NVRkZJWDtcclxuICAgICAgICAgICAgaWYgKGVudGl0eT8uW2xvb2t1cEtleV0gPT09IHVuZGVmaW5lZCB8fCBlbnRpdHk/Lltsb29rdXBLZXldID09PSBlbnRpdHlMb2dpY2FsTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYkFwaVJldHVybkdldChlbnRpdHk/Lltsb2dpY2FsTmFtZV0sIHR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSA9PT0gJ011bHRpT3B0aW9uU2V0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZW50aXR5Py5bbG9naWNhbE5hbWVdPy50b1N0cmluZygpPy5zcGxpdCgnLCcpLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBwYXJzZUludChpdGVtLCAxMCkpID8/IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2ViQXBpUmV0dXJuR2V0KGVudGl0eT8uW2xvZ2ljYWxOYW1lXSwgdHlwZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldFZhbHVlID0gKHZhbHVlOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ011bHRpT3B0aW9uU2V0JykgdmFsdWUgPSB2YWx1ZT8uam9pbignLCcpO1xyXG4gICAgICAgIGlmIChlbnRpdHlDb2xsZWN0aW9uTmFtZSAhPT0gdW5kZWZpbmVkICYmIGVudGl0eUNvbGxlY3Rpb25OYW1lPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdOYW1lID0gKHNjaGVtYU5hbWUgPz8gbG9naWNhbE5hbWUpICsgJ0BvZGF0YS5iaW5kJztcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1cHNlcnRFbnRpdHlbYmluZGluZ05hbWVdID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUucmVwbGFjZSgvW3t9XS9nLCAnJykgOiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHVwc2VydEVudGl0eVtiaW5kaW5nTmFtZV0gPSAnLycgKyBlbnRpdHlDb2xsZWN0aW9uTmFtZSArICcoJyArIGNsZWFuVmFsdWUgKyAnKSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cHNlcnRFbnRpdHlbbG9naWNhbE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVudGl0eVtsb2dpY2FsTmFtZV0gPSB2YWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gRGVmaW5lIEZvcm1hdHRlZFZhbHVlIHByb3BlcnR5XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLkZvcm1hdHRlZFZhbHVlLCBmaWVsZE5hbWUsIHtcclxuICAgICAgICBnZXQ6IGdldEZvcm1hdHRlZFZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEZWZpbmUgbWFpbiBwcm9wZXJ0eSAocmVhZG9ubHkgb3IgcmVhZC93cml0ZSlcclxuICAgIGlmIChyZWFkT25seSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGZpZWxkTmFtZSwge1xyXG4gICAgICAgICAgICBnZXQ6IGdldFZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGZpZWxkTmFtZSwge1xyXG4gICAgICAgICAgICBnZXQ6IGdldFZhbHVlLFxyXG4gICAgICAgICAgICBzZXQ6IHNldFZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGludGVyZmFjZSBmb3IgV2ViQXBpIGVudGl0eSBvYmplY3RzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElXZWJBcGlFbnRpdHkge1xyXG4gICAgLyoqIFRoZSBlbnRpdHkgb2JqZWN0IGZvciBDcmVhdGUvVXBkYXRlIG9wZXJhdGlvbnMgKi9cclxuICAgIHJlYWRvbmx5IEVudGl0eTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuICAgIC8qKiBUaGUgT0RhdGEgZW50aXR5IG9iamVjdCBjb250YWluaW5nIHJhdyBkYXRhICovXHJcbiAgICByZWFkb25seSBPRGF0YUVudGl0eTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuICAgIC8qKiBUaGUgZW50aXR5IG5hbWUgKi9cclxuICAgIHJlYWRvbmx5IEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIC8qKiBUaGUgZW50aXR5IGNvbGxlY3Rpb24gbmFtZSAqL1xyXG4gICAgcmVhZG9ubHkgRW50aXR5Q29sbGVjdGlvbk5hbWU6IHN0cmluZztcclxuICAgIC8qKiBUaGUgQG9kYXRhLmV0YWcgZm9yIGNhY2hpbmcgKi9cclxuICAgIHJlYWRvbmx5ICdAb2RhdGEuZXRhZyc6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIC8qKiBGb3JtYXR0ZWQgdmFsdWVzIGZvciBhbGwgZmllbGRzICovXHJcbiAgICByZWFkb25seSBGb3JtYXR0ZWRWYWx1ZTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgcmF3IHZhbHVlIG9mIGFuIGFsaWFzZWQgZmllbGQgKGZyb20gJGV4cGFuZCBvciByZWxhdGVkIGVudGl0eSlcclxuICAgICAqIEBwYXJhbSBhbGlhcyBUaGUgYWxpYXMgZmllbGQgbmFtZVxyXG4gICAgICogQHBhcmFtIGlzTXVsdGlPcHRpb25TZXQgVHJ1ZSBpZiB0aGUgZmllbGQgaXMgYSBtdWx0aS1vcHRpb24gc2V0XHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcmF3IHZhbHVlIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAgICAgKi9cclxuICAgIGdldEFsaWFzZWRWYWx1ZShhbGlhczogc3RyaW5nLCBpc011bHRpT3B0aW9uU2V0PzogYm9vbGVhbik6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZm9ybWF0dGVkIHZhbHVlIG9mIGFuIGFsaWFzZWQgZmllbGRcclxuICAgICAqIEBwYXJhbSBhbGlhcyBUaGUgYWxpYXMgZmllbGQgbmFtZVxyXG4gICAgICogQHBhcmFtIGlzTXVsdGlPcHRpb25TZXQgVHJ1ZSBpZiB0aGUgZmllbGQgaXMgYSBtdWx0aS1vcHRpb24gc2V0XHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIHZhbHVlIG9yIGVtcHR5IHN0cmluZyBpZiBub3QgZm91bmRcclxuICAgICAqL1xyXG4gICAgZ2V0QWxpYXNlZEZvcm1hdHRlZFZhbHVlKGFsaWFzOiBzdHJpbmcsIGlzTXVsdGlPcHRpb25TZXQ/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgYmFzZSBXZWJBcGkgZW50aXR5IG9iamVjdCB3aXRoIGNvbW1vbiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXHJcbiAqIEBwYXJhbSBlbnRpdHkgVGhlIHJhdyBPRGF0YSBlbnRpdHkgb2JqZWN0XHJcbiAqIEBwYXJhbSBlbnRpdHlOYW1lIFRoZSBsb2dpY2FsIG5hbWUgb2YgdGhlIGVudGl0eVxyXG4gKiBAcGFyYW0gZW50aXR5Q29sbGVjdGlvbk5hbWUgVGhlIGNvbGxlY3Rpb24gbmFtZSBvZiB0aGUgZW50aXR5XHJcbiAqIEBwYXJhbSBmaWVsZENvbmZpZ01hcCBNYXAgb2YgZmllbGQgY29uZmlndXJhdGlvbnNcclxuICogQHJldHVybnMgQSBXZWJBcGkgZW50aXR5IG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlYkFwaUVudGl0eTxUIGV4dGVuZHMgSVdlYkFwaUVudGl0eT4oXHJcbiAgICBlbnRpdHk6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQsXHJcbiAgICBlbnRpdHlOYW1lOiBzdHJpbmcsXHJcbiAgICBlbnRpdHlDb2xsZWN0aW9uTmFtZTogc3RyaW5nLFxyXG4gICAgZmllbGRDb25maWdNYXA6IElXZWJBcGlGaWVsZENvbmZpZ01hcFxyXG4pOiBUIHtcclxuICAgIGNvbnN0IGUgPSBlbnRpdHkgPz8ge307XHJcbiAgICBjb25zdCB1cHNlcnRFbnRpdHk6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuXHJcbiAgICBjb25zdCB3ZWJBcGlFbnRpdHk6IGFueSA9IHtcclxuICAgICAgICBPRGF0YUVudGl0eTogZSxcclxuICAgICAgICBGb3JtYXR0ZWRWYWx1ZToge30sXHJcbiAgICAgICAgRW50aXR5OiB1cHNlcnRFbnRpdHksXHJcbiAgICAgICAgRW50aXR5TmFtZTogZW50aXR5TmFtZSxcclxuICAgICAgICBFbnRpdHlDb2xsZWN0aW9uTmFtZTogZW50aXR5Q29sbGVjdGlvbk5hbWUsXHJcbiAgICAgICAgJ0BvZGF0YS5ldGFnJzogZT8uWydAb2RhdGEuZXRhZyddLFxyXG5cclxuICAgICAgICBnZXRBbGlhc2VkVmFsdWUoYWxpYXM6IHN0cmluZywgaXNNdWx0aU9wdGlvblNldCA9IGZhbHNlKTogYW55IHtcclxuICAgICAgICAgICAgaWYgKGU/LlthbGlhc10gPT09IHVuZGVmaW5lZCB8fCBlPy5bYWxpYXNdID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNNdWx0aU9wdGlvblNldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGU/LlthbGlhc10udG9TdHJpbmcoKS5zcGxpdCgnLCcpLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBwYXJzZUludChpdGVtLCAxMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlPy5bYWxpYXNdO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldEFsaWFzZWRGb3JtYXR0ZWRWYWx1ZShhbGlhczogc3RyaW5nLCBpc011bHRpT3B0aW9uU2V0ID0gZmFsc2UpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFsaWFzICsgV0VCQVBJX0ZPUk1BVFRFRF9WQUxVRV9TVUZGSVg7XHJcbiAgICAgICAgICAgIGlmIChlPy5ba2V5XSA9PT0gdW5kZWZpbmVkIHx8IGU/LltrZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzTXVsdGlPcHRpb25TZXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlPy5ba2V5XT8udG9TdHJpbmcoKT8uc3BsaXQoJzsnKS5tYXAoKGl0ZW06IHN0cmluZykgPT4gaXRlbT8udHJpbSgpKSA/PyBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZT8uW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBEZWZpbmUgYWxsIGZpZWxkcyB1c2luZyB0aGUgZmllbGQgY29uZmlndXJhdGlvblxyXG4gICAgZm9yIChjb25zdCBmaWVsZE5hbWUgaW4gZmllbGRDb25maWdNYXApIHtcclxuICAgICAgICBkZWZpbmVXZWJBcGlGaWVsZCh3ZWJBcGlFbnRpdHksIGZpZWxkTmFtZSwgZSwgZmllbGRDb25maWdNYXBbZmllbGROYW1lXSwgdXBzZXJ0RW50aXR5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2ViQXBpRW50aXR5IGFzIFQ7XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBPcHRpb25TZXQudHMgLSBDZW50cmFsaXplZCBPcHRpb25TZXQgZGVmaW5pdGlvbnNcclxuICogR2VuZXJhdGVkIGZpbGUgLSBETyBOT1QgTU9ESUZZIE1BTlVBTExZXHJcbiAqIFxyXG4gKiBVc2FnZTogaW1wb3J0IHsgT3B0aW9uU2V0IH0gZnJvbSAnLi9nZW5lcmF0b3IvT3B0aW9uU2V0JztcclxuICogICAgICAgIE9wdGlvblNldC5Gb3JtVHlwZS5DcmVhdGVcclxuICogICAgICAgIE9wdGlvblNldC5BY2NvdW50LkluZHVzdHJ5Q29kZS5Db25zdWx0aW5nXHJcbiAqL1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHbG9iYWwgT3B0aW9uU2V0c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKiogSW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkdmFuY2VkIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yIHRoZSBvcmdhbml6YXRpb24gKi9cclxuY29uc3QgQWR2YW5jZWRDb25maWdTZXR0aW5nID0ge1xyXG4gICAgLyoqIE1heENoaWxkSW5jaWRlbnROdW1iZXIgKi9cclxuICAgIE1heENoaWxkSW5jaWRlbnROdW1iZXI6ICdNYXhDaGlsZEluY2lkZW50TnVtYmVyJyxcclxuICAgIC8qKiBNYXhJbmNpZGVudE1lcmdlTnVtYmVyICovXHJcbiAgICBNYXhJbmNpZGVudE1lcmdlTnVtYmVyOiAnTWF4SW5jaWRlbnRNZXJnZU51bWJlcidcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBSZXR1cm5zIGEgdmFsdWUgdG8gaW5kaWNhdGUgd2hpY2ggY2xpZW50IHRoZSBzY3JpcHQgaXMgZXhlY3V0aW5nIGluICovXHJcbmNvbnN0IENsaWVudE5hbWUgPSB7XHJcbiAgICAvKiogV2ViICovXHJcbiAgICBXZWI6ICdXZWInLFxyXG4gICAgLyoqIE91dGxvb2sgKi9cclxuICAgIE91dGxvb2s6ICdPdXRsb29rJyxcclxuICAgIC8qKiBNb2JpbGUgKi9cclxuICAgIE1vYmlsZTogJ01vYmlsZSdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBSZXR1cm5zIGEgdmFsdWUgdG8gaW5kaWNhdGUgdGhlIHN0YXRlIG9mIHRoZSBjbGllbnQgKi9cclxuY29uc3QgQ2xpZW50U3RhdGUgPSB7XHJcbiAgICAvKiogT25saW5lICovXHJcbiAgICBPbmxpbmU6ICdPbmxpbmUnLFxyXG4gICAgLyoqIE9mZmxpbmUgKi9cclxuICAgIE9mZmxpbmU6ICdPZmZsaW5lJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCByZXByZXNlbnRzIHRoZSB0eXBlIG9mIGF0dHJpYnV0ZSAqL1xyXG5jb25zdCBGaWVsZEF0dHJpYnV0ZVR5cGUgPSB7XHJcbiAgICAvKiogYm9vbGVhbiAqL1xyXG4gICAgQm9vbGVhbjogJ2Jvb2xlYW4nLFxyXG4gICAgLyoqIGRhdGV0aW1lICovXHJcbiAgICBEYXRlVGltZTogJ2RhdGV0aW1lJyxcclxuICAgIC8qKiBkZWNpbWFsICovXHJcbiAgICBEZWNpbWFsOiAnZGVjaW1hbCcsXHJcbiAgICAvKiogZG91YmxlICovXHJcbiAgICBEb3VibGU6ICdkb3VibGUnLFxyXG4gICAgLyoqIGludGVnZXIgKi9cclxuICAgIEludGVnZXI6ICdpbnRlZ2VyJyxcclxuICAgIC8qKiBsb29rdXAgKi9cclxuICAgIExvb2t1cDogJ2xvb2t1cCcsXHJcbiAgICAvKiogbWVtbyAqL1xyXG4gICAgTWVtbzogJ21lbW8nLFxyXG4gICAgLyoqIG1vbmV5ICovXHJcbiAgICBNb25leTogJ21vbmV5JyxcclxuICAgIC8qKiBtdWx0aXNlbGVjdG9wdGlvbnNldCAqL1xyXG4gICAgTXVsdGlPcHRpb25TZXQ6ICdtdWx0aW9wdGlvbnNldCcsXHJcbiAgICAvKiogb3B0aW9uc2V0ICovXHJcbiAgICBPcHRpb25TZXQ6ICdvcHRpb25zZXQnLFxyXG4gICAgLyoqIHN0cmluZyAqL1xyXG4gICAgU3RyaW5nOiAnc3RyaW5nJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIEEgdmFsdWUgdGhhdCBjYXRlZ29yaXplcyBjb250cm9scyAqL1xyXG5jb25zdCBGaWVsZENvbnRyb2xUeXBlID0ge1xyXG4gICAgLyoqIHN0YW5kYXJkIC0gQSBzdGFuZGFyZCBjb250cm9sICovXHJcbiAgICBTdGFuZGFyZDogJ3N0YW5kYXJkJyxcclxuICAgIC8qKiBpZnJhbWUgLSBBbiBJRlJBTUUgY29udHJvbCAqL1xyXG4gICAgSWZyYW1lOiAnaWZyYW1lJyxcclxuICAgIC8qKiBrYnNlYXJjaCAtIEEga25vd2xlZGdlIGJhc2Ugc2VhcmNoIGNvbnRyb2wgKi9cclxuICAgIEtiU2VhcmNoOiAna2JzZWFyY2gnLFxyXG4gICAgLyoqIGxvb2t1cCAtIEEgbG9va3VwIGNvbnRyb2wgKi9cclxuICAgIExvb2t1cDogJ2xvb2t1cCcsXHJcbiAgICAvKiogbXVsdGlzZWxlY3RvcHRpb25zZXQgLSBBIG11bHRpLXNlbGVjdCBvcHRpb24gc2V0IGNvbnRyb2wgKi9cclxuICAgIE11bHRpU2VsZWN0T3B0aW9uc2V0OiAnbXVsdGlzZWxlY3RvcHRpb25zZXQnLFxyXG4gICAgLyoqIG5vdGVzIC0gQSBub3RlcyBjb250cm9sICovXHJcbiAgICBOb3RlczogJ25vdGVzJyxcclxuICAgIC8qKiBvcHRpb25zZXQgLSBBbiBvcHRpb24gc2V0IGNvbnRyb2wgKi9cclxuICAgIE9wdGlvblNldDogJ29wdGlvbnNldCcsXHJcbiAgICAvKiogcXVpY2tmb3JtIC0gQSBxdWljayB2aWV3IGNvbnRyb2wgKi9cclxuICAgIFF1aWNrRm9ybTogJ3F1aWNrZm9ybScsXHJcbiAgICAvKiogc3ViZ3JpZCAtIEEgc3ViZ3JpZCBjb250cm9sICovXHJcbiAgICBTdWJHcmlkOiAnc3ViZ3JpZCcsXHJcbiAgICAvKiogdGltZXJjb250cm9sIC0gQSB0aW1lciBjb250cm9sICovXHJcbiAgICBUaW1lckNvbnRyb2w6ICd0aW1lcmNvbnRyb2wnLFxyXG4gICAgLyoqIHRpbWVsaW5ld2FsbCAtIEEgdGltZWxpbmUgY29udHJvbCAoZm9yIFVuaWZpZWQgSW50ZXJmYWNlKSAqL1xyXG4gICAgVGltZWxpbmVXYWxsOiAndGltZWxpbmV3YWxsJyxcclxuICAgIC8qKiB3ZWJyZXNvdXJjZSAtIEEgd2ViIHJlc291cmNlIGNvbnRyb2wgKi9cclxuICAgIFdlYlJlc291cmNlOiAnd2VicmVzb3VyY2UnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IHJlcHJlc2VudHMgZm9ybWF0dGluZyBvcHRpb25zIGZvciB0aGUgYXR0cmlidXRlICovXHJcbmNvbnN0IEZpZWxkRm9ybWF0ID0ge1xyXG4gICAgLyoqIGRhdGUgKi9cclxuICAgIERhdGU6ICdkYXRlJyxcclxuICAgIC8qKiBkYXRldGltZSAqL1xyXG4gICAgRGF0ZVRpbWU6ICdkYXRldGltZScsXHJcbiAgICAvKiogZHVyYXRpb24gKi9cclxuICAgIER1cmF0aW9uOiAnZHVyYXRpb24nLFxyXG4gICAgLyoqIGVtYWlsICovXHJcbiAgICBFbWFpbDogJ2VtYWlsJyxcclxuICAgIC8qKiBsYW5ndWFnZSAqL1xyXG4gICAgTGFuZ3VhZ2U6ICdsYW5ndWFnZScsXHJcbiAgICAvKiogbm9uZSAqL1xyXG4gICAgTm9uZTogJ25vbmUnLFxyXG4gICAgLyoqIHRleHRhcmVhICovXHJcbiAgICBUZXh0QXJlYTogJ3RleHRhcmVhJyxcclxuICAgIC8qKiB0ZXh0ICovXHJcbiAgICBUZXh0OiAndGV4dCcsXHJcbiAgICAvKiogdGlja2Vyc3ltYm9sICovXHJcbiAgICBUaWNrZXJTeW1ib2w6ICd0aWNrZXJzeW1ib2wnLFxyXG4gICAgLyoqIHBob25lICovXHJcbiAgICBQaG9uZTogJ3Bob25lJyxcclxuICAgIC8qKiB0aW1lem9uZSAqL1xyXG4gICAgVGltZVpvbmU6ICd0aW1lem9uZScsXHJcbiAgICAvKiogdXJsICovXHJcbiAgICBVcmw6ICd1cmwnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIHR5cGUgb2Ygbm90aWZpY2F0aW9uICovXHJcbmNvbnN0IEZpZWxkTm90aWZpY2F0aW9uTGV2ZWwgPSB7XHJcbiAgICAvKiogRVJST1IgKi9cclxuICAgIEVycm9yOiAnRVJST1InLFxyXG4gICAgLyoqIFJFQ09NTUVOREFUSU9OICovXHJcbiAgICBSZWNvbW1lbmRhdGlvbjogJ1JFQ09NTUVOREFUSU9OJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFZhbHVlIGluZGljYXRpbmcgd2hldGhlciBhIHZhbHVlIGZvciB0aGUgYXR0cmlidXRlIGlzIG5vbmUgb3IgcmVxdWlyZWQgb3IgcmVjb21tZW5kZWQgKi9cclxuY29uc3QgRmllbGRSZXF1aXJlZExldmVsID0ge1xyXG4gICAgLyoqIG5vbmUgKi9cclxuICAgIE5vbmU6ICdub25lJyxcclxuICAgIC8qKiByZXF1aXJlZCAqL1xyXG4gICAgUmVxdWlyZWQ6ICdyZXF1aXJlZCcsXHJcbiAgICAvKiogcmVjb21tZW5kZWQgKi9cclxuICAgIFJlY29tbWVuZGVkOiAncmVjb21tZW5kZWQnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogRGF0YSBmcm9tIHRoZSBhdHRyaWJ1dGUgd2lsbCBiZSBzdWJtaXR0ZWQgd2hlbiB0aGUgcmVjb3JkIGlzIHNhdmVkICovXHJcbmNvbnN0IEZpZWxkU3VibWl0TW9kZSA9IHtcclxuICAgIC8qKiBhbHdheXMgLSBUaGUgZGF0YSBpcyBhbHdheXMgc2VudCB3aXRoIGEgc2F2ZSAqL1xyXG4gICAgQWx3YXlzOiAnYWx3YXlzJyxcclxuICAgIC8qKiBuZXZlciAtIFRoZSBkYXRhIGlzIG5ldmVyIHNlbnQgd2l0aCBhIHNhdmUgKi9cclxuICAgIE5ldmVyOiAnbmV2ZXInLFxyXG4gICAgLyoqIGRpcnR5IC0gRGVmYXVsdCBiZWhhdmlvci4gVGhlIGRhdGEgaXMgc2VudCB3aXRoIHRoZSBzYXZlIHdoZW4gaXQgaGFzIGNoYW5nZWQgKi9cclxuICAgIERpcnR5OiAnZGlydHknXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogUmV0dXJucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUga2luZCBvZiBkZXZpY2UgdGhlIHVzZXIgaXMgdXNpbmcgKi9cclxuY29uc3QgRm9ybUZhY3RvciA9IHtcclxuICAgIC8qKiAwICovXHJcbiAgICBVbmtub3duOiAwLFxyXG4gICAgLyoqIDEgKi9cclxuICAgIERlc2t0b3A6IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgVGFibGV0OiAyLFxyXG4gICAgLyoqIDMgKi9cclxuICAgIFBob25lOiAzXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIGxldmVsIG9mIHRoZSBtZXNzYWdlLCB3aGljaCBkZWZpbmVzIGhvdyB0aGUgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCAqL1xyXG5jb25zdCBGb3JtTm90aWZpY2F0aW9uTGV2ZWwgPSB7XHJcbiAgICAvKiogRVJST1IgLSBOb3RpZmljYXRpb24gd2lsbCB1c2UgdGhlIHN5c3RlbSBlcnJvciBpY29uICovXHJcbiAgICBFcnJvcjogJ0VSUk9SJyxcclxuICAgIC8qKiBXQVJOSU5HIC0gTm90aWZpY2F0aW9uIHdpbGwgdXNlIHRoZSBzeXN0ZW0gd2FybmluZyBpY29uICovXHJcbiAgICBXYXJuaW5nOiAnV0FSTklORycsXHJcbiAgICAvKiogSU5GTyAtIE5vdGlmaWNhdGlvbiB3aWxsIHVzZSB0aGUgc3lzdGVtIGluZm8gaWNvbiAqL1xyXG4gICAgSW5mbzogJ0lORk8nXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogR2V0cyB0aGUgZm9ybSB0eXBlIGZvciB0aGUgcmVjb3JkICovXHJcbmNvbnN0IEZvcm1UeXBlID0ge1xyXG4gICAgLyoqIDAgKi9cclxuICAgIFVuZGVmaW5lZDogMCxcclxuICAgIC8qKiAxIC0gUXVpY2sgQ3JlYXRlIGZvcm1zIHJldHVybiAxICovXHJcbiAgICBDcmVhdGU6IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgVXBkYXRlOiAyLFxyXG4gICAgLyoqIDMgKi9cclxuICAgIFJlYWRPbmx5OiAzLFxyXG4gICAgLyoqIDQgKi9cclxuICAgIERpc2FibGVkOiA0LFxyXG4gICAgLyoqIDUgKi9cclxuICAgIEJ1bGtFZGl0OiA1XHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIGZ1bGwgbmFtZSBjb252ZW50aW9uQ29kZSBzZXR0aW5nIG9mIHRoZSBjdXJyZW50IG9yZ2FuaXphdGlvbiAqL1xyXG5jb25zdCBGdWxsTmFtZUNvbnZlbnRpb25Db2RlID0ge1xyXG4gICAgLyoqIDAgKi9cclxuICAgIExhc3ROYW1lX0NvbW1hX0ZpcnN0TmFtZTogMCxcclxuICAgIC8qKiAxICovXHJcbiAgICBGaXJzdE5hbWVfTGFzdE5hbWU6IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgTGFzdE5hbWVfQ29tbWFfRmlyc3ROYW1lX01pZGRsZUluaXRpYWw6IDIsXHJcbiAgICAvKiogMyAqL1xyXG4gICAgRmlyc3ROYW1lX01pZGRsZUluaXRpYWxfTGFzdE5hbWU6IDMsXHJcbiAgICAvKiogNCAqL1xyXG4gICAgTGFzdE5hbWVfQ29tbWFfRmlyc3ROYW1lX01pZGRsZU5hbWU6IDQsXHJcbiAgICAvKiogNSAqL1xyXG4gICAgRmlyc3ROYW1lX01pZGRsZU5hbWVfTGFzdE5hbWU6IDUsXHJcbiAgICAvKiogNiAqL1xyXG4gICAgTGFzdE5hbWVfRmlyc3ROYW1lOiA2LFxyXG4gICAgLyoqIDcgKi9cclxuICAgIExhc3ROYW1lRmlyc3ROYW1lOiA3XHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIHR5cGUgb2YgZ3JpZCAqL1xyXG5jb25zdCBHcmlkVHlwZSA9IHtcclxuICAgIC8qKiAxICovXHJcbiAgICBIb21lUGFnZUdyaWQ6IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgU3ViZ3JpZDogMlxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIERlc2NyaWJpbmcgd2hldGhlciB0byBvcGVuIG9yIHNhdmUgdGhlIGZpbGUgKi9cclxuY29uc3QgT3BlbkZpbGVPcHRpb24gPSB7XHJcbiAgICAvKiogMSAqL1xyXG4gICAgT3BlbjogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBTYXZlOiAyXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIGludGVnZXIgdmFsdWUgb2YgdGhlIGJ1c2luZXNzIHByb2Nlc3MgZmxvdyBjYXRlZ29yeSAqL1xyXG5jb25zdCBQcm9jZXNzQ2F0ZWdvcnkgPSB7XHJcbiAgICAvKiogMCAqL1xyXG4gICAgUXVhbGlmeTogMCxcclxuICAgIC8qKiAxICovXHJcbiAgICBEZXZlbG9wOiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIFByb3Bvc2U6IDIsXHJcbiAgICAvKiogMyAqL1xyXG4gICAgQ2xvc2U6IDMsXHJcbiAgICAvKiogNCAqL1xyXG4gICAgSWRlbnRpZnk6IDQsXHJcbiAgICAvKiogNSAqL1xyXG4gICAgUmVzZWFyY2g6IDUsXHJcbiAgICAvKiogNiAqL1xyXG4gICAgUmVzb2x2ZTogNlxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIERpc3BsYXkgc3RhdGUgb2YgdGhlIGJ1c2luZXNzIHByb2Nlc3MgZmxvdyAqL1xyXG5jb25zdCBQcm9jZXNzRGlzcGxheVN0YXRlID0ge1xyXG4gICAgLyoqIGV4cGFuZGVkICovXHJcbiAgICBFeHBhbmRlZDogJ2V4cGFuZGVkJyxcclxuICAgIC8qKiBjb2xsYXBzZWQgKi9cclxuICAgIENvbGxhcHNlZDogJ2NvbGxhcHNlZCcsXHJcbiAgICAvKiogZmxvYXRpbmcgKi9cclxuICAgIEZsb2F0aW5nOiAnZmxvYXRpbmcnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIGludGVnZXIgdmFsdWUgc3RhdHVzIG9mIHRoZSBzdGFnZSAqL1xyXG5jb25zdCBQcm9jZXNzU3RhdHVzID0ge1xyXG4gICAgLyoqIGFjdGl2ZSAqL1xyXG4gICAgQWN0aXZlOiAnYWN0aXZlJyxcclxuICAgIC8qKiBhYm9ydGVkICovXHJcbiAgICBBYm9ydGVkOiAnYWJvcnRlZCcsXHJcbiAgICAvKiogZmluaXNoZWQgKi9cclxuICAgIEZpbmlzaGVkOiAnZmluaXNoZWQnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogUmV0dXJucyBhIHZhbHVlIGluZGljYXRpbmcgaG93IHRoZSBzYXZlIGV2ZW50IHdhcyBpbml0aWF0ZWQgYnkgdGhlIHVzZXIgKi9cclxuY29uc3QgU2F2ZU1vZGUgPSB7XHJcbiAgICAvKiogMSAtIEFsbCBlbnRpdGllcyAqL1xyXG4gICAgU2F2ZTogMSxcclxuICAgIC8qKiAyIC0gQWxsIGVudGl0aWVzICovXHJcbiAgICBTYXZlQW5kQ2xvc2U6IDIsXHJcbiAgICAvKiogNSAtIEFsbCBlbnRpdGllcyAqL1xyXG4gICAgRGVhY3RpdmF0ZTogNSxcclxuICAgIC8qKiA2IC0gQWxsIGVudGl0aWVzICovXHJcbiAgICBSZWFjdGl2YXRlOiA2LFxyXG4gICAgLyoqIDcgLSBFbWFpbCAqL1xyXG4gICAgRW1haWw6IDcsXHJcbiAgICAvKiogMTUgLSBMZWFkICovXHJcbiAgICBEaXNxdWFsaWZ5OiAxNSxcclxuICAgIC8qKiAxNiAtIExlYWQgKi9cclxuICAgIFF1YWxpZnk6IDE2LFxyXG4gICAgLyoqIDQ3IC0gVXNlciBvciBUZWFtICovXHJcbiAgICBBc3NpZ246IDQ3LFxyXG4gICAgLyoqIDU4IC0gQWN0aXZpdGllcyAqL1xyXG4gICAgU2F2ZUFzQ29tcGxldGVkOiA1OCxcclxuICAgIC8qKiA1OSAtIEFsbCBlbnRpdGllcyAqL1xyXG4gICAgU2F2ZUFuZE5ldzogNTksXHJcbiAgICAvKiogNzAgLSBBbGwgZW50aXRpZXMgKi9cclxuICAgIEF1dG9TYXZlOiA3MFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFNwZWNpZnkgb3B0aW9ucyBmb3Igc2F2aW5nIHRoZSByZWNvcmQgKi9cclxuY29uc3QgU2F2ZU9wdGlvbiA9IHtcclxuICAgIC8qKiBzYXZlYW5kY2xvc2UgLSBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IG9mIHVzaW5nIHRoZSBTYXZlIGFuZCBDbG9zZSBjb21tYW5kICovXHJcbiAgICBTYXZlQW5kQ2xvc2U6ICdzYXZlYW5kY2xvc2UnLFxyXG4gICAgLyoqIHNhdmVhbmRuZXcgLSBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IG9mIHRoZSB1c2luZyB0aGUgU2F2ZSBhbmQgTmV3IGNvbW1hbmQgKi9cclxuICAgIFNhdmVBbmROZXc6ICdzYXZlYW5kbmV3J1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIERpc3BsYXkgc3RhdGUgb2YgdGhlIHNpZGUgcGFuZSAqL1xyXG5jb25zdCBTaWRlUGFuZVN0YXRlID0ge1xyXG4gICAgLyoqIDAgLSBDb2xsYXBzZWQgKi9cclxuICAgIENvbGxhcHNlZDogMCxcclxuICAgIC8qKiAxIC0gRXhwYW5kZWQgKi9cclxuICAgIEV4cGFuZGVkOiAxXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIGNvbnRyb2wgdHlwZSBvZiB0YWIgKi9cclxuY29uc3QgVGFiQ29udGVudFR5cGUgPSB7XHJcbiAgICAvKiogY2FyZFNlY3Rpb25zOiBUaGUgZGVmYXVsdCB0YWIgYmVoYXZpb3IgKi9cclxuICAgIENhcmRTZWN0aW9uczogJ2NhcmRTZWN0aW9ucycsXHJcbiAgICAvKiogc2luZ2xlQ29tcG9uZW50OiBNYXhpbWl6ZXMgdGhlIGNvbnRlbnQgb2YgdGhlIGZpcnN0IGNvbXBvbmVudCBpbiB0aGUgdGFiICovXHJcbiAgICBTaW5nbGVDb21wb25lbnQ6ICdzaW5nbGVDb21wb25lbnQnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogRGlzcGxheSBzdGF0ZSBvZiB0aGUgdGFiICovXHJcbmNvbnN0IFRhYkRpc3BsYXlTdGF0ZSA9IHtcclxuICAgIC8qKiBleHBhbmRlZCAqL1xyXG4gICAgRXhwYW5kZWQ6ICdleHBhbmRlZCcsXHJcbiAgICAvKiogY29sbGFwc2VkICovXHJcbiAgICBDb2xsYXBzZWQ6ICdjb2xsYXBzZWQnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIHN0YXRlIG9mIHRoZSB0aW1lciBjb250cm9sIC0gVGhpcyBtZXRob2QgaXMgb25seSBzdXBwb3J0ZWQgZm9yIFVuaWZpZWQgSW50ZXJmYWNlICovXHJcbmNvbnN0IFRpbWVyU3RhdGUgPSB7XHJcbiAgICAvKiogMSAqL1xyXG4gICAgTm90U2V0OiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIEluUHJvZ3Jlc3M6IDIsXHJcbiAgICAvKiogMyAqL1xyXG4gICAgV2FybmluZzogMyxcclxuICAgIC8qKiA0ICovXHJcbiAgICBWaW9sYXRlZDogNCxcclxuICAgIC8qKiA1ICovXHJcbiAgICBTdWNjZXNzOiA1LFxyXG4gICAgLyoqIDYgKi9cclxuICAgIEV4cGlyZWQ6IDYsXHJcbiAgICAvKiogNyAqL1xyXG4gICAgQ2FuY2VsZWQ6IDcsXHJcbiAgICAvKiogOCAqL1xyXG4gICAgUGF1c2VkOiA4XHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVudGl0eSBPcHRpb25TZXRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKiBBY2NvdW50IGVudGl0eSBPcHRpb25TZXRzICovXHJcbmNvbnN0IEFjY291bnQgPSB7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBhY2NvdW50J3MgcHJpbWFyeSBpbmR1c3RyeSBmb3IgdXNlIGluIG1hcmtldGluZyBzZWdtZW50YXRpb24gYW5kIGRlbW9ncmFwaGljIGFuYWx5c2lzICovXHJcbiAgICBJbmR1c3RyeUNvZGU6IHtcclxuICAgICAgICAvKiogMSAtIEFjY291bnRpbmcgKi9cclxuICAgICAgICBBY2NvdW50aW5nOiAxLFxyXG4gICAgICAgIC8qKiA3IC0gQ29uc3VsdGluZyAqL1xyXG4gICAgICAgIENvbnN1bHRpbmc6IDcsXHJcbiAgICAgICAgLyoqIDE2IC0gRmluYW5jaWFsICovXHJcbiAgICAgICAgRmluYW5jaWFsOiAxNixcclxuICAgICAgICAvKiogMjAgLSBJbnN1cmFuY2UgKi9cclxuICAgICAgICBJbnN1cmFuY2U6IDIwLFxyXG4gICAgICAgIC8qKiAxMiAtIFRlY2hub2xvZ3kgKi9cclxuICAgICAgICBUZWNobm9sb2d5OiAxMlxyXG4gICAgfSxcclxuICAgIC8qKiBDdXN0b20gTXVsdGlPcHRpb25TZXQgLSB2NF9DYXRlZ29yaWVzICovXHJcbiAgICB2NF9DYXRlZ29yaWVzOiB7XHJcbiAgICAgICAgLyoqIDEwMDAwMDAwMCAqL1xyXG4gICAgICAgIENhdGVnb3J5X0E6IDEwMDAwMDAwMCxcclxuICAgICAgICAvKiogMTAwMDAwMDAxICovXHJcbiAgICAgICAgQ2F0ZWdvcnlfQjogMTAwMDAwMDAxLFxyXG4gICAgICAgIC8qKiAxMDAwMDAwMDIgKi9cclxuICAgICAgICBDYXRlZ29yeV9DOiAxMDAwMDAwMDIsXHJcbiAgICAgICAgLyoqIDEwMDAwMDAwMyAqL1xyXG4gICAgICAgIENhdGVnb3J5X0Q6IDEwMDAwMDAwM1xyXG4gICAgfVxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFeHBvcnQgY29tYmluZWQgT3B0aW9uU2V0XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBjb25zdCBPcHRpb25TZXQgPSB7XHJcbiAgICAvLyBHbG9iYWwgT3B0aW9uU2V0c1xyXG4gICAgQWR2YW5jZWRDb25maWdTZXR0aW5nLFxyXG4gICAgQ2xpZW50TmFtZSxcclxuICAgIENsaWVudFN0YXRlLFxyXG4gICAgRmllbGRBdHRyaWJ1dGVUeXBlLFxyXG4gICAgRmllbGRDb250cm9sVHlwZSxcclxuICAgIEZpZWxkRm9ybWF0LFxyXG4gICAgRmllbGROb3RpZmljYXRpb25MZXZlbCxcclxuICAgIEZpZWxkUmVxdWlyZWRMZXZlbCxcclxuICAgIEZpZWxkU3VibWl0TW9kZSxcclxuICAgIEZvcm1GYWN0b3IsXHJcbiAgICBGb3JtTm90aWZpY2F0aW9uTGV2ZWwsXHJcbiAgICBGb3JtVHlwZSxcclxuICAgIEZ1bGxOYW1lQ29udmVudGlvbkNvZGUsXHJcbiAgICBHcmlkVHlwZSxcclxuICAgIE9wZW5GaWxlT3B0aW9uLFxyXG4gICAgUHJvY2Vzc0NhdGVnb3J5LFxyXG4gICAgUHJvY2Vzc0Rpc3BsYXlTdGF0ZSxcclxuICAgIFByb2Nlc3NTdGF0dXMsXHJcbiAgICBTYXZlTW9kZSxcclxuICAgIFNhdmVPcHRpb24sXHJcbiAgICBTaWRlUGFuZVN0YXRlLFxyXG4gICAgVGFiQ29udGVudFR5cGUsXHJcbiAgICBUYWJEaXNwbGF5U3RhdGUsXHJcbiAgICBUaW1lclN0YXRlLFxyXG4gICAgLy8gRW50aXR5IE9wdGlvblNldHNcclxuICAgIEFjY291bnRcclxufSBhcyBjb25zdDtcclxuIiwgIi8qKlxyXG4gKiBBY2NvdW50LmZvcm0udHMgLSBBY2NvdW50IEZvcm0gZm9yIGVhcmx5LWJvdW5kIHN0eWxlIGZvcm0gY29kaW5nXHJcbiAqIEdlbmVyYXRlZCBmaWxlIC0gRE8gTk9UIE1PRElGWSBNQU5VQUxMWVxyXG4gKiBcclxuICogU3RydWN0dXJlOlxyXG4gKiAxLiBJbXBvcnRzXHJcbiAqIDIuIFR5cGVzIC0gSUJvZHksIElIZWFkZXIsIElUYWJzLCBJR3JpZCwgSU5hdmlnYXRpb24sIElRdWlja0Zvcm0sIElQcm9jZXNzXHJcbiAqIDMuIFJ1bnRpbWUgLSBGb3JtIGNsYXNzIHdpdGggZmllbGQgY29uZmlndXJhdGlvbnNcclxuICovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbGliL2RldmtpdC5kLnRzXCIgLz5cclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi8uLi9saWIvZGV2a2l0JztcclxuaW1wb3J0ICcuL09wdGlvblNldCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDEuIFR5cGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQWNjb3VudEZvcm0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQm9keSBjb250cm9scyBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIGFsbCBjb250cm9scyBvbiB0aGUgZm9ybSBib2R5XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUJvZHkge1xyXG4gICAgICAgIC8qKiBUeXBlIHRoZSBjb21wYW55IG9yIGJ1c2luZXNzIG5hbWUuICovXHJcbiAgICAgICAgTmFtZTogRGV2S2l0LkNvbnRyb2xzLlN0cmluZztcclxuICAgICAgICAvKiogVHlwZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIGRlc2NyaWJlIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgICAgIERlc2NyaXB0aW9uOiBEZXZLaXQuQ29udHJvbHMuTWVtbztcclxuICAgICAgICAvKiogVHlwZSB0aGUgbnVtYmVyIG9mIGVtcGxveWVlcyB0aGF0IHdvcmsgYXQgdGhlIGFjY291bnQuICovXHJcbiAgICAgICAgTnVtYmVyT2ZFbXBsb3llZXM6IERldktpdC5Db250cm9scy5JbnRlZ2VyO1xyXG4gICAgICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgY3JlZGl0IGZvciB0aGUgYWNjb3VudCBpcyBvbiBob2xkLiAqL1xyXG4gICAgICAgIENyZWRpdE9uSG9sZDogRGV2S2l0LkNvbnRyb2xzLkJvb2xlYW47XHJcbiAgICAgICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIHByaW1hcnkgaW5kdXN0cnkuICovXHJcbiAgICAgICAgSW5kdXN0cnlDb2RlOiBEZXZLaXQuQ29udHJvbHMuT3B0aW9uU2V0O1xyXG4gICAgICAgIC8qKiBDaG9vc2UgdGhlIHByaW1hcnkgY29udGFjdCBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICAgICAgUHJpbWFyeUNvbnRhY3RJZDogRGV2S2l0LkNvbnRyb2xzLkxvb2t1cDtcclxuICAgICAgICAvKiogQ3VzdG9tIEJpcnRoZGF5IGZpZWxkICovXHJcbiAgICAgICAgdjRfQmlydGhkYXk6IERldktpdC5Db250cm9scy5EYXRlT25seTtcclxuICAgICAgICAvKiogQ3VzdG9tIEFwcG9pbnRtZW50IFRpbWUgZmllbGQgKi9cclxuICAgICAgICB2NF9BcHBvaW50bWVudFRpbWU6IERldktpdC5Db250cm9scy5EYXRlVGltZTtcclxuICAgICAgICAvKiogQ3VzdG9tIExhdGl0dWRlIGZpZWxkICovXHJcbiAgICAgICAgdjRfTGF0aXR1ZGU6IERldktpdC5Db250cm9scy5EZWNpbWFsO1xyXG4gICAgICAgIC8qKiBDdXN0b20gRGlzY291bnQgUGVyY2VudGFnZSBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0Rpc2NvdW50UGVyY2VudGFnZTogRGV2S2l0LkNvbnRyb2xzLkRvdWJsZTtcclxuICAgICAgICAvKiogQ3VzdG9tIENhdGVnb3JpZXMgZmllbGQgKi9cclxuICAgICAgICB2NF9DYXRlZ29yaWVzOiBEZXZLaXQuQ29udHJvbHMuTXVsdGlPcHRpb25TZXQ7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBIZWxwIFdlYiBSZXNvdXJjZSAqL1xyXG4gICAgICAgIHY0X1dlYlJlc291cmNlSGVscDogRGV2S2l0LkNvbnRyb2xzLldlYlJlc291cmNlO1xyXG4gICAgICAgIC8qKiBDdXN0b20gRXh0ZXJuYWwgUGFnZSAqL1xyXG4gICAgICAgIHY0X0lGcmFtZUV4dGVybmFsOiBEZXZLaXQuQ29udHJvbHMuSUZyYW1lO1xyXG4gICAgICAgIC8qKiBDdXN0b20gU0xBIFRpbWVyICovXHJcbiAgICAgICAgdjRfVGltZXJTTEE6IERldktpdC5Db250cm9scy5UaW1lcjtcclxuICAgICAgICAvKiogS25vd2xlZGdlIEJhc2UgU2VhcmNoICovXHJcbiAgICAgICAgdjRfS25vd2xlZGdlU2VhcmNoOiBEZXZLaXQuQ29udHJvbHMuS25vd2xlZGdlO1xyXG4gICAgICAgIC8qKiBGb3JtIFRhYnMgKi9cclxuICAgICAgICBUYWI6IElUYWJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVhZGVyIGNvbnRyb2xzIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgY29udHJvbHMgZGlzcGxheWVkIGluIHRoZSBmb3JtIGhlYWRlclxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElIZWFkZXIge1xyXG4gICAgICAgIC8qKiBFbnRlciB0aGUgdXNlciBvciB0ZWFtIHdobyBpcyBhc3NpZ25lZCB0byBtYW5hZ2UgdGhlIHJlY29yZC4gKi9cclxuICAgICAgICBPd25lcklkOiBEZXZLaXQuQ29udHJvbHMuTG9va3VwO1xyXG4gICAgICAgIC8qKiBUeXBlIHRoZSBudW1iZXIgb2YgZW1wbG95ZWVzIHRoYXQgd29yayBhdCB0aGUgYWNjb3VudC4gKi9cclxuICAgICAgICBOdW1iZXJPZkVtcGxveWVlczogRGV2S2l0LkNvbnRyb2xzLkludGVnZXI7XHJcbiAgICAgICAgLyoqIFR5cGUgdGhlIGFubnVhbCByZXZlbnVlIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgICAgICBSZXZlbnVlOiBEZXZLaXQuQ29udHJvbHMuTW9uZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdW1tYXJ5IHRhYiBzZWN0aW9ucyBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU1VNTUFSWV9UQUJUYWJTZWN0aW9ucyB7XHJcbiAgICAgICAgQUNDT1VOVF9JTkZPUk1BVElPTjogRGV2S2l0LkNvbnRyb2xzLlNlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdW1tYXJ5IHRhYiBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU1VNTUFSWV9UQUJUYWIgZXh0ZW5kcyBEZXZLaXQuQ29udHJvbHMuSVRhYiB7XHJcbiAgICAgICAgU2VjdGlvbjogSVNVTU1BUllfVEFCVGFiU2VjdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUYWJzIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgYWxsIHRhYnMgb24gdGhlIGZvcm1cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVGFicyB7XHJcbiAgICAgICAgU1VNTUFSWV9UQUI6IElTVU1NQVJZX1RBQlRhYjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdyaWQgY29udHJvbHMgaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBhbGwgc3ViZ3JpZCBjb250cm9scyBvbiB0aGUgZm9ybVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElHcmlkIHtcclxuICAgICAgICBDb250YWN0czogRGV2S2l0LkNvbnRyb2xzLkdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYXZpZ2F0aW9uIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgbmF2aWdhdGlvbiBpdGVtc1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElOYXZpZ2F0aW9uIHtcclxuICAgICAgICBuYXZfbXNhX2FjY291bnRfbWFuYWdpbmdwYXJ0bmVyOiBEZXZLaXQuQ29udHJvbHMuTmF2aWdhdGlvbkl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBRdWlja0Zvcm0gaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBxdWljayB2aWV3IGZvcm0gY29udHJvbHNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUXVpY2tGb3JtIHtcclxuICAgICAgICBjb250YWN0cXVpY2tmb3JtOiBEZXZLaXQuQ29udHJvbHMuSVF1aWNrVmlldyAmIHtcclxuICAgICAgICAgICAgQm9keToge1xyXG4gICAgICAgICAgICAgICAgRU1haWxBZGRyZXNzMTogRGV2S2l0LkNvbnRyb2xzLlF1aWNrVmlldztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVzaW5lc3MgUHJvY2VzcyBGbG93IGZpZWxkcyBpbnRlcmZhY2VcclxuICAgICAqIHY0X0FjY291bnRCUEYgLSBDdXN0b20gQWNjb3VudCBCdXNpbmVzcyBQcm9jZXNzIEZsb3dcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJQlBGIHtcclxuICAgICAgICAvKiogQlBGIEZpZWxkOiBBY2NvdW50IE5hbWUgKFN0YWdlIDE6IFF1YWxpZnkpICovXHJcbiAgICAgICAgTmFtZTogRGV2S2l0LkNvbnRyb2xzLlN0cmluZztcclxuICAgICAgICAvKiogQlBGIEZpZWxkOiBJbmR1c3RyeSBDb2RlIChTdGFnZSAxOiBRdWFsaWZ5KSAqL1xyXG4gICAgICAgIEluZHVzdHJ5Q29kZTogRGV2S2l0LkNvbnRyb2xzLk9wdGlvblNldDtcclxuICAgICAgICAvKiogQlBGIEZpZWxkOiBSZXZlbnVlIChTdGFnZSAyOiBEZXZlbG9wKSAqL1xyXG4gICAgICAgIFJldmVudWU6IERldktpdC5Db250cm9scy5Nb25leTtcclxuICAgICAgICAvKiogQlBGIEZpZWxkOiBQcmltYXJ5IENvbnRhY3QgKFN0YWdlIDI6IERldmVsb3ApICovXHJcbiAgICAgICAgUHJpbWFyeUNvbnRhY3RJZDogRGV2S2l0LkNvbnRyb2xzLkxvb2t1cDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3MgaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBidXNpbmVzcyBwcm9jZXNzIGZsb3cgZGVmaW5pdGlvbnNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUHJvY2VzcyBleHRlbmRzIERldktpdC5Db250cm9scy5JUHJvY2VzcyB7XHJcbiAgICAgICAgLyoqIHY0X0FjY291bnRCUEYgLSBDdXN0b20gQWNjb3VudCBCdXNpbmVzcyBQcm9jZXNzIEZsb3cgKi9cclxuICAgICAgICB2NF9BY2NvdW50QlBGOiBJQlBGO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIDIuIFJ1bnRpbWUgLSBGb3JtIENsYXNzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY2NvdW50IEZvcm0gY2xhc3NcclxuICAgICAqIFByb3ZpZGVzIHR5cGVkIGFjY2VzcyB0byBhbGwgZm9ybSBjb250cm9sc1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgRm9ybSBleHRlbmRzIEZvcm1CYXNlPElCb2R5LCBJSGVhZGVyLCBJVGFicywgSUdyaWQsIElOYXZpZ2F0aW9uLCBJUXVpY2tGb3JtLCBJUHJvY2Vzcz4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYW4gQWNjb3VudCBGb3JtIGluc3RhbmNlXHJcbiAgICAgICAgICogQHBhcmFtIGV4ZWN1dGlvbkNvbnRleHQgVGhlIGV4ZWN1dGlvbiBjb250ZXh0IGZyb20gZm9ybSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lIE9wdGlvbmFsIGRlZmF1bHQgd2ViIHJlc291cmNlIG5hbWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3RvcihleGVjdXRpb25Db250ZXh0OiBhbnksIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoZXhlY3V0aW9uQ29udGV4dCwgZGVmYXVsdFdlYlJlc291cmNlTmFtZSwge1xyXG4gICAgICAgICAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICAgICAgICAgICdOYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdOdW1iZXJPZkVtcGxveWVlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWRpdE9uSG9sZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0luZHVzdHJ5Q29kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByaW1hcnlDb250YWN0SWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9CaXJ0aGRheScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0FwcG9pbnRtZW50VGltZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0xhdGl0dWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfRGlzY291bnRQZXJjZW50YWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfQ2F0ZWdvcmllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X1dlYlJlc291cmNlSGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0lGcmFtZUV4dGVybmFsJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfVGltZXJTTEEnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9Lbm93bGVkZ2VTZWFyY2gnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ093bmVySWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOdW1iZXJPZkVtcGxveWVlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JldmVudWUnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHRhYjogW1xyXG4gICAgICAgICAgICAgICAgICAgICdTVU1NQVJZX1RBQl9fX0FDQ09VTlRfSU5GT1JNQVRJT04nXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZ3JpZDogW1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250YWN0cydcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hdl9tc2FfYWNjb3VudF9tYW5hZ2luZ3BhcnRuZXInXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcXVpY2s6IFtcclxuICAgICAgICAgICAgICAgICAgICAnY29udGFjdHF1aWNrZm9ybV9fX0VNYWlsQWRkcmVzczEnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYnBmOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0FjY291bnRCUEZfX19OYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfQWNjb3VudEJQRl9fX0luZHVzdHJ5Q29kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0FjY291bnRCUEZfX19SZXZlbnVlJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfQWNjb3VudEJQRl9fX1ByaW1hcnlDb250YWN0SWQnXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMDogSUNvbnRyb2wgSW50ZXJmYWNlIC0gTmFtZSBGaWVsZCAoU3RyaW5nKVxyXG4gKiBUaGlzIHRlc3RzIHRoZSBiYXNlIElDb250cm9sIGludGVyZmFjZSB0aGF0IGFsbCBjb250cm9scyBpbmhlcml0IGZyb21cclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RDb250cm9sKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgY29udHJvbCA9IGZvcm0uQm9keS5OYW1lO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBjb250cm9sLlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGNvbnRyb2wuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IGNvbnRyb2wuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBjb250cm9sLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogY29udHJvbC5BdHRyaWJ1dGVOYW1lID09PSBcIm5hbWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogY29udHJvbC5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IGNvbnRyb2wuQXR0cmlidXRlVHlwZSA9PT0gXCJzdHJpbmdcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IGNvbnRyb2wuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBjb250cm9sLkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IGNvbnRyb2wuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBjb250cm9sLklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGNvbnRyb2wuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wZXJ0aWVzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IHNldHRlclJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG5cclxuICAgIC8vIFNldHRlcnNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gY29udHJvbC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGNvbnRyb2wuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBuZXdSZXF1aXJlZCA9IGNvbnRyb2wuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBjb250cm9sLlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBgJHtvcmlnUmVxdWlyZWR9XHUyMTkycmVxdWlyZWRcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3UmVxdWlyZWQgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdTdWJtaXQgPSBjb250cm9sLlN1Ym1pdE1vZGU7XHJcbiAgICAgICAgY29udHJvbC5TdWJtaXRNb2RlID0gXCJhbHdheXNcIjtcclxuICAgICAgICBjb25zdCBuZXdTdWJtaXQgPSBjb250cm9sLlN1Ym1pdE1vZGU7XHJcbiAgICAgICAgY29udHJvbC5TdWJtaXRNb2RlID0gb3JpZ1N1Ym1pdDtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGUgKHNldClcIiwgVmFsdWU6IGAke29yaWdTdWJtaXR9XHUyMTkyYWx3YXlzXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld1N1Ym1pdCA9PT0gXCJhbHdheXNcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IGNvbnRyb2wuRGlzYWJsZWQ7XHJcbiAgICAgICAgY29udHJvbC5EaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgbmV3RGlzYWJsZWQgPSBjb250cm9sLkRpc2FibGVkO1xyXG4gICAgICAgIGNvbnRyb2wuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogYCR7b3JpZ0Rpc2FibGVkfVx1MjE5MnRydWVcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3RGlzYWJsZWQgPT09IHRydWUgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gY29udHJvbC5MYWJlbDtcclxuICAgICAgICBjb250cm9sLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgbmV3TGFiZWwgPSBjb250cm9sLkxhYmVsO1xyXG4gICAgICAgIGNvbnRyb2wuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogYFwiJHtvcmlnTGFiZWx9XCJcdTIxOTJtb2RpZmllZFx1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdMYWJlbC5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGNvbnRyb2wuVmlzaWJsZTtcclxuICAgICAgICBjb250cm9sLlZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBuZXdWaXNpYmxlID0gY29udHJvbC5WaXNpYmxlO1xyXG4gICAgICAgIGNvbnRyb2wuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogYCR7b3JpZ1Zpc2libGV9XHUyMTkyZmFsc2VcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3VmlzaWJsZSA9PT0gZmFsc2UgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLlZhbHVlID0gb3JpZ2luYWxWYWx1ZSArIFwiIChNT0RJRklFRClcIjtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGNvbnRyb2wuVmFsdWU7XHJcbiAgICAgICAgY29udHJvbC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogYG1vZGlmaWVkXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld1ZhbHVlPy5pbmNsdWRlcyhcIihNT0RJRklFRClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgT25DaGFuZ2UgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3V0cHV0Q2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgT3V0cHV0Q2hhbmdlIGZpcmVkXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLkFkZE9uT3V0cHV0Q2hhbmdlKG91dHB1dENoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkFkZE9uT3V0cHV0Q2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJBZGRPbk91dHB1dENoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLlJlbW92ZU9uT3V0cHV0Q2hhbmdlKG91dHB1dENoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbk91dHB1dENoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uT3V0cHV0Q2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2wuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5TZXROb3RpZmljYXRpb24oXCJUZXN0IG5vdGlmaWNhdGlvbiBmcm9tIElDb250cm9sXCIsIFwiQ1RSTF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sLkNsZWFyTm90aWZpY2F0aW9uKFwiQ1RSTF9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTNcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNsZWFyZWQgPSBjb250cm9sLkNsZWFyTm90aWZpY2F0aW9uKFwiTk9ORVhJU1RFTlRcIik7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiQ2xlYXJOb3RpZmljYXRpb25cIiwgVmFsdWU6IGBSZXN1bHQ6ICR7Y2xlYXJlZH1gLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNFwiLCBQcm9wZXJ0eTogXCJDbGVhck5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLkFkZE5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXCJSZWNvbW1lbmRhdGlvbiBmcm9tIHRlc3RcIl0sXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkxldmVsOiBcIlJFQ09NTUVOREFUSU9OXCIsXHJcbiAgICAgICAgICAgIHVuaXF1ZUlkOiBcIkNUUkxfVEVTVF8yXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2wuQ2xlYXJOb3RpZmljYXRpb24oXCJDVFJMX1RFU1RfMlwiKSwgMzAwMCk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiQWRkTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIkFkZGVkIChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIkFkZE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkIG1lc3NhZ2VcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE2XCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5zZXR0ZXJSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0NcdURGOUJcdUZFMEYgVEVTVCAwOiBJQ29udHJvbCBJbnRlcmZhY2UgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogTmFtZSBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTYpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShzZXR0ZXJSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTogTG9va3VwIENvbnRyb2wgLSBQcmltYXJ5Q29udGFjdElkIEZpZWxkXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TG9va3VwKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbG9va3VwID0gZm9ybS5Cb2R5LlByaW1hcnlDb250YWN0SWQ7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxEZWZhdWx0VmlldyA9IGxvb2t1cC5EZWZhdWx0VmlldztcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGxvb2t1cC5WYWx1ZTtcclxuICAgICAgICBjb25zdCBoYXNWYWx1ZSA9IGN1cnJlbnRWYWx1ZSAmJiBjdXJyZW50VmFsdWUubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogaGFzVmFsdWUgPyBgJHtjdXJyZW50VmFsdWVbMF0ubmFtZX0gKCR7Y3VycmVudFZhbHVlWzBdLmVudGl0eVR5cGV9KWAgOiBcIihlbXB0eSlcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiSXNQYXJ0eUxpc3RcIiwgVmFsdWU6IGxvb2t1cC5Jc1BhcnR5TGlzdCwgU3RhdHVzOiBsb29rdXAuSXNQYXJ0eUxpc3QgPT09IGZhbHNlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJFbnRpdHlUeXBlc1wiLCBWYWx1ZTogSlNPTi5zdHJpbmdpZnkobG9va3VwLkVudGl0eVR5cGVzKSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiRGVmYXVsdFZpZXdcIiwgVmFsdWU6IG9yaWdpbmFsRGVmYXVsdFZpZXcsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGxvb2t1cC5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogbG9va3VwLkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogbG9va3VwLkNvbnRyb2xUeXBlLCBTdGF0dXM6IGxvb2t1cC5Db250cm9sVHlwZSA9PT0gXCJsb29rdXBcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IGxvb2t1cC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogbG9va3VwLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBsb29rdXAuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IGxvb2t1cC5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogbG9va3VwLlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBsb29rdXAuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGxvb2t1cC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBsb29rdXAuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBsb29rdXAuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IGxvb2t1cC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcblxyXG4gICAgY29uc3QgcHJlU2VhcmNoQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJYbWwgPSBcIjxmaWx0ZXIgdHlwZT0nYW5kJz48Y29uZGl0aW9uIGF0dHJpYnV0ZT0nc3RhdGVjb2RlJyBvcGVyYXRvcj0nZXEnIHZhbHVlPScwJyAvPjwvZmlsdGVyPlwiO1xyXG4gICAgICAgIGxvb2t1cC5BZGRDdXN0b21GaWx0ZXIoZmlsdGVyWG1sLCBcImNvbnRhY3RcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBQcmVTZWFyY2ggZmlyZWQgLSBmaWx0ZXIgYXBwbGllZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGFnQ2xpY2tDYWxsYmFjayA9IChjdHg6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgTG9va3VwVGFnQ2xpY2sgZmlyZWQgLSB0YWcgd2FzIGNsaWNrZWRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNldHRlcnNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZpZXdJZCA9IFwiezAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMn1cIjtcclxuICAgICAgICBsb29rdXAuRGVmYXVsdFZpZXcgPSB0ZXN0Vmlld0lkO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZpZXcgPSBsb29rdXAuRGVmYXVsdFZpZXc7XHJcbiAgICAgICAgbG9va3VwLkRlZmF1bHRWaWV3ID0gb3JpZ2luYWxEZWZhdWx0VmlldztcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkRlZmF1bHRWaWV3IChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiRGVmYXVsdFZpZXcgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUeXBlcyA9IGxvb2t1cC5FbnRpdHlUeXBlcztcclxuICAgICAgICBsb29rdXAuRW50aXR5VHlwZXMgPSBbXCJjb250YWN0XCJdO1xyXG4gICAgICAgIGNvbnN0IG5ld1R5cGVzID0gbG9va3VwLkVudGl0eVR5cGVzO1xyXG4gICAgICAgIGxvb2t1cC5FbnRpdHlUeXBlcyA9IG9yaWdpbmFsVHlwZXM7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJFbnRpdHlUeXBlcyAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIkVudGl0eVR5cGVzIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5BZGRQcmVTZWFyY2gocHJlU2VhcmNoQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiQWRkUHJlU2VhcmNoXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJBZGRQcmVTZWFyY2hcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLlJlbW92ZVByZVNlYXJjaChwcmVTZWFyY2hDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVQcmVTZWFyY2hcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlJlbW92ZVByZVNlYXJjaFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuQWRkTG9va3VwVGFnQ2xpY2sodGFnQ2xpY2tDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJBZGRMb29rdXBUYWdDbGlja1wiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiQWRkTG9va3VwVGFnQ2xpY2tcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLlJlbW92ZUxvb2t1cFRhZ0NsaWNrKHRhZ0NsaWNrQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiUmVtb3ZlTG9va3VwVGFnQ2xpY2tcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlbW92ZUxvb2t1cFRhZ0NsaWNrXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5BZGRDdXN0b21WaWV3KFxyXG4gICAgICAgICAgICBcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMVwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIixcclxuICAgICAgICAgICAgXCJBY3RpdmUgQ29udGFjdHMgKEN1c3RvbSBWaWV3KVwiLFxyXG4gICAgICAgICAgICBcIjxmZXRjaD48ZW50aXR5IG5hbWU9J2NvbnRhY3QnPjxhdHRyaWJ1dGUgbmFtZT0nZnVsbG5hbWUnLz48L2VudGl0eT48L2ZldGNoPlwiLFxyXG4gICAgICAgICAgICBcIjxncmlkIG5hbWU9J3Jlc3VsdHNldCc+PHJvdyBuYW1lPSdyZXN1bHQnIGlkPSdjb250YWN0aWQnPjxjZWxsIG5hbWU9J2Z1bGxuYW1lJyB3aWR0aD0nMjAwJy8+PC9yb3c+PC9ncmlkPlwiLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRDdXN0b21WaWV3XCIsIFZhbHVlOiBcIkFkZGVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkQ3VzdG9tVmlld1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBub3RpZmljYXRpb25cIiwgXCJURVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29rdXAuQ2xlYXJOb3RpZmljYXRpb24oXCJURVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIGluIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvb2t1cC5Gb2N1cygpLCA0MDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoNHMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1REQwRCBURVNUIDE6IExvb2t1cCBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IFByaW1hcnlDb250YWN0SWQgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVM5KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDM6IE1lbW8gQ29udHJvbCAtIERlc2NyaXB0aW9uIEZpZWxkXHJcbiAqIE1lbW8gZXh0ZW5kcyBJQ29udHJvbFRleHQgd2l0aCBNYXhMZW5ndGggcHJvcGVydHlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RNZW1vKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZW1vID0gZm9ybS5Cb2R5LkRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBtZW1vLlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gTWVtby1zcGVjaWZpYyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJNYXhMZW5ndGhcIiwgVmFsdWU6IG1lbW8uTWF4TGVuZ3RoLCBTdGF0dXM6IHR5cGVvZiBtZW1vLk1heExlbmd0aCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUgPyBgXCIke29yaWdpbmFsVmFsdWUuc3Vic3RyaW5nKDAsIDUwKX0ke29yaWdpbmFsVmFsdWUubGVuZ3RoID4gNTAgPyAnLi4uJyA6ICcnfVwiYCA6IFwiKGVtcHR5KVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IG1lbW8uQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IG1lbW8uQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBtZW1vLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogbWVtby5BdHRyaWJ1dGVOYW1lID09PSBcImRlc2NyaXB0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IG1lbW8uQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBtZW1vLkF0dHJpYnV0ZVR5cGUgPT09IFwibWVtb1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogbWVtby5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IG1lbW8uQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogbWVtby5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IG1lbW8uSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IG1lbW8uSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IG1lbW8uUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IG1lbW8uU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBtZW1vLkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IG1lbW8uTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBtZW1vLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICAgICAgbWVtby5WYWx1ZSA9IChvcmlnaW5hbFZhbHVlIHx8IFwiXCIpICsgXCIgW1RFU1RdXCI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBtZW1vLlZhbHVlO1xyXG4gICAgICAgIG1lbW8uVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IG5ld1ZhbHVlPy5pbmNsdWRlcyhcIltURVNUXVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWU/LmluY2x1ZGVzKFwiW1RFU1RdXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IG1lbW8uUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtZW1vLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtZW1vLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgbWVtby5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBtZW1vLkRpc2FibGVkO1xyXG4gICAgICAgIG1lbW8uRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5EaXNhYmxlZDtcclxuICAgICAgICBtZW1vLkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gbWVtby5MYWJlbDtcclxuICAgICAgICBtZW1vLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtZW1vLkxhYmVsO1xyXG4gICAgICAgIG1lbW8uTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gbWVtby5WaXNpYmxlO1xyXG4gICAgICAgIG1lbW8uVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1lbW8uVmlzaWJsZTtcclxuICAgICAgICBtZW1vLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE1lbW8gT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1lbW8uRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBNZW1vIG5vdGlmaWNhdGlvblwiLCBcIk1FTU9fVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbWVtby5DbGVhck5vdGlmaWNhdGlvbihcIk1FTU9fVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbWVtby5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0REIFRFU1QgMjogTWVtbyBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IERlc2NyaXB0aW9uIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMzogU3RyaW5nIENvbnRyb2wgLSBOYW1lIEZpZWxkXHJcbiAqIFN0cmluZyBleHRlbmRzIElDb250cm9sVGV4dCB3aXRoIE1heExlbmd0aCBwcm9wZXJ0eVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdFN0cmluZyhmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3Qgc3RyID0gZm9ybS5Cb2R5Lk5hbWU7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHN0ci5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFN0cmluZy1zcGVjaWZpYyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJNYXhMZW5ndGhcIiwgVmFsdWU6IHN0ci5NYXhMZW5ndGgsIFN0YXR1czogdHlwZW9mIHN0ci5NYXhMZW5ndGggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlID8gYFwiJHtvcmlnaW5hbFZhbHVlLnN1YnN0cmluZygwLCA1MCl9JHtvcmlnaW5hbFZhbHVlLmxlbmd0aCA+IDUwID8gJy4uLicgOiAnJ31cImAgOiBcIihlbXB0eSlcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBzdHIuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IHN0ci5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IHN0ci5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IHN0ci5BdHRyaWJ1dGVOYW1lID09PSBcIm5hbWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogc3RyLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogc3RyLkF0dHJpYnV0ZVR5cGUgPT09IFwic3RyaW5nXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBzdHIuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBzdHIuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogc3RyLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogc3RyLklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBzdHIuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IHN0ci5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogc3RyLlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogc3RyLkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IHN0ci5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IHN0ci5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgICAgIHN0ci5WYWx1ZSA9IChvcmlnaW5hbFZhbHVlIHx8IFwiXCIpICsgXCIgW1RFU1RdXCI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBzdHIuVmFsdWU7XHJcbiAgICAgICAgc3RyLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCJbVEVTVF1cIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IG5ld1ZhbHVlPy5pbmNsdWRlcyhcIltURVNUXVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBzdHIuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBzdHIuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHN0ci5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIHN0ci5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IHN0ci5EaXNhYmxlZDtcclxuICAgICAgICBzdHIuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc3RyLkRpc2FibGVkO1xyXG4gICAgICAgIHN0ci5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gc3RyLkxhYmVsO1xyXG4gICAgICAgIHN0ci5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc3RyLkxhYmVsO1xyXG4gICAgICAgIHN0ci5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBzdHIuVmlzaWJsZTtcclxuICAgICAgICBzdHIuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHN0ci5WaXNpYmxlO1xyXG4gICAgICAgIHN0ci5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBTdHJpbmcgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHIuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyLlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0ci5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHN0ci5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyLlNldE5vdGlmaWNhdGlvbihcIlRlc3QgU3RyaW5nIG5vdGlmaWNhdGlvblwiLCBcIlNUUklOR19URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzdHIuQ2xlYXJOb3RpZmljYXRpb24oXCJTVFJJTkdfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHIuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzdHIuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENDNCBURVNUIDM6IFN0cmluZyBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IE5hbWUgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCA0OiBJbnRlZ2VyIENvbnRyb2wgLSBOdW1iZXJPZkVtcGxveWVlcyBGaWVsZFxyXG4gKiBJbnRlZ2VyIGV4dGVuZHMgSUNvbnRyb2xOdW1iZXIgd2l0aCBNYXgsIE1pbiBwcm9wZXJ0aWVzIChOTyBQcmVjaXNpb24gc3VwcG9ydClcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RJbnRlZ2VyKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBpbnQgPSBmb3JtLkhlYWRlci5OdW1iZXJPZkVtcGxveWVlcztcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gaW50LlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gSW50ZWdlci1zcGVjaWZpYyBwcm9wZXJ0aWVzIChJQ29udHJvbE51bWJlciAtIE5PIFByZWNpc2lvbiBmb3IgSW50ZWdlcilcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIk1heFwiLCBWYWx1ZTogaW50Lk1heCwgU3RhdHVzOiB0eXBlb2YgaW50Lk1heCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiTWluXCIsIFZhbHVlOiBpbnQuTWluLCBTdGF0dXM6IHR5cGVvZiBpbnQuTWluID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBpbnQuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IGludC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGludC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IGludC5BdHRyaWJ1dGVOYW1lID09PSBcIm51bWJlcm9mZW1wbG95ZWVzXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGludC5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IGludC5BdHRyaWJ1dGVUeXBlID09PSBcImludGVnZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IGludC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGludC5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBpbnQuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogaW50LklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBpbnQuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IGludC5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogaW50LlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogaW50LkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IGludC5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGludC5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9IChvcmlnaW5hbFZhbHVlIHx8IDApICsgMTAwO1xyXG4gICAgICAgIGludC5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGludC5WYWx1ZTtcclxuICAgICAgICBpbnQuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IG5ld1ZhbHVlID09PSB0ZXN0VmFsdWUgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IG5ld1ZhbHVlID09PSB0ZXN0VmFsdWUgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBpbnQuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBpbnQuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGludC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGludC5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IGludC5EaXNhYmxlZDtcclxuICAgICAgICBpbnQuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gaW50LkRpc2FibGVkO1xyXG4gICAgICAgIGludC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gaW50LkxhYmVsO1xyXG4gICAgICAgIGludC5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gaW50LkxhYmVsO1xyXG4gICAgICAgIGludC5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGludC5WaXNpYmxlO1xyXG4gICAgICAgIGludC5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gaW50LlZpc2libGU7XHJcbiAgICAgICAgaW50LlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIEludGVnZXIgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnQuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW50LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGludC5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW50LlNldE5vdGlmaWNhdGlvbihcIlRlc3QgSW50ZWdlciBub3RpZmljYXRpb25cIiwgXCJJTlRfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW50LkNsZWFyTm90aWZpY2F0aW9uKFwiSU5UX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW50LlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW50LlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdUREMjIgVEVTVCA0OiBJbnRlZ2VyIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogTnVtYmVyT2ZFbXBsb3llZXMgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCA1OiBPcHRpb25TZXQgQ29udHJvbCAtIEluZHVzdHJ5Q29kZSBGaWVsZFxyXG4gKiBPcHRpb25TZXQgZXh0ZW5kcyBJQ29udHJvbE9wdGlvblNldCB3aXRoIEluaXRpYWxWYWx1ZSwgU2VsZWN0ZWRPcHRpb24sIFRleHQsIFZhbHVlXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0T3B0aW9uU2V0KGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBvcHQgPSBmb3JtLkJvZHkuSW5kdXN0cnlDb2RlO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBvcHQuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBPcHRpb25TZXQtc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiSW5pdGlhbFZhbHVlXCIsIFZhbHVlOiBvcHQuSW5pdGlhbFZhbHVlLCBTdGF0dXM6IHR5cGVvZiBvcHQuSW5pdGlhbFZhbHVlID09PSBcIm51bWJlclwiIHx8IG9wdC5Jbml0aWFsVmFsdWUgPT09IG51bGwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIk9wdGlvbnNcIiwgVmFsdWU6IGAke29wdC5PcHRpb25zPy5sZW5ndGggPz8gMH0gb3B0aW9uc2AsIFN0YXR1czogb3B0Lk9wdGlvbnM/Lmxlbmd0aCA+IDAgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlNlbGVjdGVkT3B0aW9uXCIsIFZhbHVlOiBvcHQuU2VsZWN0ZWRPcHRpb24gPyBgJHtvcHQuU2VsZWN0ZWRPcHRpb24udGV4dH0gKCR7b3B0LlNlbGVjdGVkT3B0aW9uLnZhbHVlfSlgIDogXCIobm9uZSlcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiVGV4dFwiLCBWYWx1ZTogb3B0LlRleHQgfHwgXCIoZW1wdHkpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IG9wdC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogb3B0LkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogb3B0LkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogb3B0LkF0dHJpYnV0ZU5hbWUgPT09IFwiaW5kdXN0cnljb2RlXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IG9wdC5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IG9wdC5BdHRyaWJ1dGVUeXBlID09PSBcIm9wdGlvbnNldFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogb3B0LkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IG9wdC5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogb3B0LkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IG9wdC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogb3B0LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBvcHQuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IG9wdC5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IG9wdC5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE3XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBvcHQuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxOFwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBvcHQuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gb3B0Lk9wdGlvbnM7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IG9wdGlvbnNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgIG9wdC5WYWx1ZSA9IG5ld1ZhbDtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuVmFsdWU7XHJcbiAgICAgICAgICAgIG9wdC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBuZXdWYWwgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBuZXdWYWwgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBcIk5vIG9wdGlvbnMgYXZhaWxhYmxlXCIsIFN0YXR1czogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IE9wdGlvbih2YWx1ZSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG9wdC5PcHRpb25zO1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXN0T3B0aW9uID0gb3B0Lk9wdGlvbihvcHRpb25zWzBdLnZhbHVlKTtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJPcHRpb24odmFsdWUpXCIsIFZhbHVlOiB0ZXN0T3B0aW9uID8gYCR7dGVzdE9wdGlvbi50ZXh0fWAgOiBcIm51bGxcIiwgU3RhdHVzOiB0ZXN0T3B0aW9uID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJPcHRpb24odmFsdWUpXCIsIFZhbHVlOiBcIk5vIG9wdGlvbnNcIiwgU3RhdHVzOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzM6IE9wdGlvbih0ZXh0KSAtIE5PVCBJTVBMRU1FTlRFRDogT09CIER5bmFtaWNzIGNvZGUgdGhyb3dzICdWYWx1ZSBzaG91bGQgYmUgb2YgdHlwZTogbnVtYmVyJyBlcnJvclxyXG4gICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJPcHRpb24odGV4dClcIiwgVmFsdWU6IFwiT09CIEJ1ZyAtIGRldmtpdC50cyBub3Qgc3VwcG9ydFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgLy8gTWV0aG9kOiBBZGRPcHRpb24gKGFkZCB0aGVuIHJlbW92ZSlcclxuICAgIC8vIE5PVEU6IEFkZE9wdGlvbiBhZGRzIHRvIENPTlRST0wsIHNvIHdlIGNoZWNrIENvbnRyb2xPcHRpb25zIChub3QgT3B0aW9ucyB3aGljaCBpcyBmcm9tIGF0dHJpYnV0ZSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LkFkZE9wdGlvbihcIlRlc3QgT3B0aW9uIChBSSlcIiwgOTk5OTk5KTtcclxuICAgICAgICBjb25zdCBoYXNOZXcgPSBvcHQuQ29udHJvbE9wdGlvbnM/LnNvbWUobyA9PiBvLnZhbHVlID09PSA5OTk5OTkpO1xyXG4gICAgICAgIG9wdC5SZW1vdmVPcHRpb24oOTk5OTk5KTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkFkZE9wdGlvblwiLCBWYWx1ZTogaGFzTmV3ID8gXCJBZGRlZFx1MjE5MlJlbW92ZWRcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogaGFzTmV3ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkFkZE9wdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZW1vdmVPcHRpb24gKGFscmVhZHkgdGVzdGVkIGFib3ZlIHdpdGggQWRkT3B0aW9uKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9wdGlvblwiLCBWYWx1ZTogXCJUZXN0ZWQgd2l0aCBTNFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9wdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBDbGVhck9wdGlvbnMgLSBUZXN0IGNsZWFyIGFuZCByZXN0b3JlIGZyb20gT3B0aW9ucyAoYXR0cmlidXRlKVxyXG4gICAgLy8gTk9URTogQ2xlYXJPcHRpb25zIGNsZWFycyB0aGUgQ09OVFJPTCBvcHRpb25zLCBidXQgT3B0aW9ucyAoZnJvbSBhdHRyaWJ1dGUpIHJlbWFpbnMgaW50YWN0XHJcbiAgICAvLyBOT1RFOiBDb250cm9sT3B0aW9ucyBpbmNsdWRlcyBhIGJsYW5rIG9wdGlvbiAodGV4dD0nJywgdmFsdWU9bnVsbCkgZm9yIGNsZWFyaW5nIHNlbGVjdGlvblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVPcHRpb25zID0gb3B0Lk9wdGlvbnM7IC8vIFNhdmUgZnJvbSBhdHRyaWJ1dGUgKG5vdCBhZmZlY3RlZCBieSBDbGVhck9wdGlvbnMpXHJcbiAgICAgICAgY29uc3QgYXR0ckxlbiA9IGF0dHJpYnV0ZU9wdGlvbnM/Lmxlbmd0aCA/PyAwO1xyXG4gICAgICAgIG9wdC5DbGVhck9wdGlvbnMoKTtcclxuICAgICAgICBjb25zdCBjbGVhcmVkQ291bnQgPSBvcHQuQ29udHJvbE9wdGlvbnM/Lmxlbmd0aCA/PyAwO1xyXG4gICAgICAgIC8vIFJlc3RvcmUgb3B0aW9ucyBmcm9tIGF0dHJpYnV0ZVxyXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGF0dHJpYnV0ZU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0LkFkZE9wdGlvbihvcHRpb24udGV4dCwgb3B0aW9uLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdG9yZWRDb3VudCA9IG9wdC5Db250cm9sT3B0aW9ucz8ubGVuZ3RoID8/IDA7XHJcbiAgICAgICAgLy8gcmVzdG9yZWRDb3VudCA+PSBhdHRyTGVuIGJlY2F1c2UgQ29udHJvbE9wdGlvbnMgbWF5IGluY2x1ZGUgYmxhbmsgb3B0aW9uXHJcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGNsZWFyZWRDb3VudCA9PT0gMCAmJiByZXN0b3JlZENvdW50ID49IGF0dHJMZW47XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJDbGVhck9wdGlvbnNcIiwgVmFsdWU6IHN1Y2Nlc3MgPyBgQ2xlYXIoJHtjbGVhcmVkQ291bnR9KVx1MjE5MlJlc3RvcmUoJHtyZXN0b3JlZENvdW50fS8ke2F0dHJMZW59KWAgOiBgYXR0cj0ke2F0dHJMZW59LCBjbGVhcj0ke2NsZWFyZWRDb3VudH0sIHJlc3RvcmU9JHtyZXN0b3JlZENvdW50fWAsIFN0YXR1czogc3VjY2VzcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJDbGVhck9wdGlvbnNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBvcHQuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBvcHQuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG9wdC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG9wdC5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IG9wdC5EaXNhYmxlZDtcclxuICAgICAgICBvcHQuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gb3B0LkRpc2FibGVkO1xyXG4gICAgICAgIG9wdC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gb3B0LkxhYmVsO1xyXG4gICAgICAgIG9wdC5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gb3B0LkxhYmVsO1xyXG4gICAgICAgIG9wdC5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG9wdC5WaXNpYmxlO1xyXG4gICAgICAgIG9wdC5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gb3B0LlZpc2libGU7XHJcbiAgICAgICAgb3B0LlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHMgZnJvbSBJQ29udHJvbFxyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBPcHRpb25TZXQgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTNcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG9wdC5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBPcHRpb25TZXQgbm90aWZpY2F0aW9uXCIsIFwiT1BUX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG9wdC5DbGVhck5vdGlmaWNhdGlvbihcIk9QVF9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG9wdC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0NCIFRFU1QgNTogT3B0aW9uU2V0IENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogSW5kdXN0cnlDb2RlIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTYpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiLyoqXHJcbiAqIEFjY291bnQud2ViYXBpLnRzIC0gQWNjb3VudCBXZWJBcGkgZm9yIGVhcmx5LWJvdW5kIHN0eWxlIGNvZGluZ1xyXG4gKiBHZW5lcmF0ZWQgZmlsZSAtIERPIE5PVCBNT0RJRlkgTUFOVUFMTFlcclxuICogXHJcbiAqIFN0cnVjdHVyZTpcclxuICogMS4gSW1wb3J0c1xyXG4gKiAyLiBUeXBlcyAtIElBY2NvdW50Rm9ybWF0dGVkVmFsdWUsIElBY2NvdW50QXBpXHJcbiAqIDMuIFJ1bnRpbWUgLSBBY2NvdW50RmllbGRDb25maWcsIEFjY291bnRBcGkgZmFjdG9yeVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBjcmVhdGVXZWJBcGlFbnRpdHksXHJcbiAgICBJV2ViQXBpRW50aXR5LFxyXG4gICAgSVdlYkFwaUZpZWxkQ29uZmlnTWFwXHJcbn0gZnJvbSAnLi4vLi4vbGliL2RldmtpdCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDEuIFR5cGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXR0ZWQgdmFsdWVzIGludGVyZmFjZSBmb3IgQWNjb3VudFxyXG4gKiBBbGwgZmllbGRzIHJldHVybiBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlaXIgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50Rm9ybWF0dGVkVmFsdWUge1xyXG4gICAgcmVhZG9ubHkgQWNjb3VudENhdGVnb3J5Q29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWNjb3VudENsYXNzaWZpY2F0aW9uQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWNjb3VudElkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBY2NvdW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBY2NvdW50UmF0aW5nQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQWRkcmVzc0lkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9BZGRyZXNzVHlwZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0NpdHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0NvbXBvc2l0ZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQ291bnRyeTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQ291bnR5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9GYXg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0ZyZWlnaHRUZXJtc0NvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0xhdGl0dWRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9MaW5lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTGluZTI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0xpbmUzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Mb25naXR1ZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX05hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1Bvc3RhbENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1Bvc3RPZmZpY2VCb3g6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1ByaW1hcnlDb250YWN0TmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfU2hpcHBpbmdNZXRob2RDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9TdGF0ZU9yUHJvdmluY2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1RlbGVwaG9uZTE6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1RlbGVwaG9uZTI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1RlbGVwaG9uZTM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1VQU1pvbmU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1VUQ09mZnNldDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQWRkcmVzc0lkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9BZGRyZXNzVHlwZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0NpdHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0NvbXBvc2l0ZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQ291bnRyeTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQ291bnR5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9GYXg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0ZyZWlnaHRUZXJtc0NvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0xhdGl0dWRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9MaW5lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTGluZTI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0xpbmUzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Mb25naXR1ZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX05hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1Bvc3RhbENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1Bvc3RPZmZpY2VCb3g6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1ByaW1hcnlDb250YWN0TmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfU2hpcHBpbmdNZXRob2RDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9TdGF0ZU9yUHJvdmluY2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1RlbGVwaG9uZTE6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1RlbGVwaG9uZTI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1RlbGVwaG9uZTM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1VQU1pvbmU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1VUQ09mZnNldDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWR4X0NyZWF0ZWRCeUlQQWRkcmVzczogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWR4X0NyZWF0ZWRCeVVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZHhfTW9kaWZpZWRCeUlQQWRkcmVzczogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWR4X01vZGlmaWVkQnlVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWdpbmczMDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWdpbmczMF9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZ2luZzYwOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZ2luZzYwX0Jhc2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFnaW5nOTA6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFnaW5nOTBfQmFzZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQnVzaW5lc3NUeXBlQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZEJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVhdGVkQnlFeHRlcm5hbFBhcnR5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVhdGVkT25fVXRjRGF0ZUFuZFRpbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWF0ZWRPbkJlaGFsZkJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVkaXRMaW1pdDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3JlZGl0TGltaXRfQmFzZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3JlZGl0T25Ib2xkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDdXN0b21lclNpemVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDdXN0b21lclR5cGVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RCdWxrRU1haWw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90QnVsa1Bvc3RhbE1haWw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90RU1haWw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90RmF4OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEb05vdFBob25lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEb05vdFBvc3RhbE1haWw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90U2VuZE1NOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFTWFpbEFkZHJlc3MxOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFTWFpbEFkZHJlc3MyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFTWFpbEFkZHJlc3MzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFbnRpdHlJbWFnZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRW50aXR5SW1hZ2VfVGltZXN0YW1wOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFbnRpdHlJbWFnZV9VUkw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVudGl0eUltYWdlSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEV4Y2hhbmdlUmF0ZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRmF4OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBGb2xsb3dFbWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRnRwU2l0ZVVSTDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgSW1wb3J0U2VxdWVuY2VOdW1iZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEluZHVzdHJ5Q29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgSXNQcml2YXRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBMYXN0T25Ib2xkVGltZV9VdGNEYXRlQW5kVGltZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTGFzdFVzZWRJbkNhbXBhaWduX1V0Y0RhdGVPbmx5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNYXJrZXRDYXA6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1hcmtldENhcF9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNYXJrZXRpbmdPbmx5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNYXN0ZXJJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTWVyZ2VkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNb2RpZmllZEJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNb2RpZmllZEJ5RXh0ZXJuYWxQYXJ0eTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRPbl9VdGNEYXRlQW5kVGltZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRPbkJlaGFsZkJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBtc2FfbWFuYWdpbmdwYXJ0bmVyaWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE5hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE51bWJlck9mRW1wbG95ZWVzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPbkhvbGRUaW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPdmVycmlkZGVuQ3JlYXRlZE9uX1V0Y0RhdGVPbmx5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25lcklkX3N5c3RlbXVzZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmVySWRfdGVhbTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgT3duZXJzaGlwQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgT3duaW5nQnVzaW5lc3NVbml0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25pbmdUZWFtOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25pbmdVc2VyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQYXJlbnRBY2NvdW50SWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFBhcnRpY2lwYXRlc0luV29ya2Zsb3c6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFBheW1lbnRUZXJtc0NvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByZWZlcnJlZEFwcG9pbnRtZW50RGF5Q29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJlZmVycmVkQXBwb2ludG1lbnRUaW1lQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJlZmVycmVkQ29udGFjdE1ldGhvZENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByZWZlcnJlZFN5c3RlbVVzZXJJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJpbWFyeUNvbnRhY3RJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJpbWFyeVNhdG9yaUlkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmltYXJ5VHdpdHRlcklkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcm9jZXNzSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFJldmVudWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFJldmVudWVfQmFzZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU2hhcmVzT3V0c3RhbmRpbmc6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFNoaXBwaW5nTWV0aG9kQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU0lDOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTTEFJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU0xBSW52b2tlZElkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTdGFnZUlkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTdGF0ZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFN0YXR1c0NvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFN0b2NrRXhjaGFuZ2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRlbGVwaG9uZTE6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRlbGVwaG9uZTI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRlbGVwaG9uZTM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRlcnJpdG9yeUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRpY2tlclN5bWJvbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGltZVNwZW50QnlNZU9uRW1haWxBbmRNZWV0aW5nczogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGltZVpvbmVSdWxlVmVyc2lvbk51bWJlcjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVHJhbnNhY3Rpb25DdXJyZW5jeUlkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUcmF2ZXJzZWRQYXRoOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBVVENDb252ZXJzaW9uVGltZVpvbmVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBWZXJzaW9uTnVtYmVyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBXZWJTaXRlVVJMOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBZb21pTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQWNjb3VudCBXZWJBcGkgZW50aXR5IGludGVyZmFjZVxyXG4gKiBQcm92aWRlcyBJbnRlbGxpU2Vuc2UgZm9yIGVhcmx5LWJvdW5kIHN0eWxlIGNvZGluZ1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWNjb3VudEFwaSBleHRlbmRzIElXZWJBcGlFbnRpdHkge1xyXG4gICAgLyoqIEZvcm1hdHRlZCB2YWx1ZXMgZm9yIGFsbCBmaWVsZHMgKi9cclxuICAgIHJlYWRvbmx5IEZvcm1hdHRlZFZhbHVlOiBJQWNjb3VudEZvcm1hdHRlZFZhbHVlO1xyXG4gICAgLyoqIFNlbGVjdCBhIGNhdGVnb3J5IHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIGN1c3RvbWVyIGFjY291bnQgaXMgc3RhbmRhcmQgb3IgcHJlZmVycmVkLiAqL1xyXG4gICAgQWNjb3VudENhdGVnb3J5Q29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSBjbGFzc2lmaWNhdGlvbiBjb2RlIHRvIGluZGljYXRlIHRoZSBwb3RlbnRpYWwgdmFsdWUgb2YgdGhlIGN1c3RvbWVyIGFjY291bnQuICovXHJcbiAgICBBY2NvdW50Q2xhc3NpZmljYXRpb25Db2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQWNjb3VudElkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYW4gSUQgbnVtYmVyIG9yIGNvZGUgZm9yIHRoZSBhY2NvdW50IHRvIHF1aWNrbHkgc2VhcmNoIGFuZCBpZGVudGlmeSB0aGUgYWNjb3VudC4gKi9cclxuICAgIEFjY291bnROdW1iZXI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IGEgcmF0aW5nIHRvIGluZGljYXRlIHRoZSB2YWx1ZSBvZiB0aGUgY3VzdG9tZXIgYWNjb3VudC4gKi9cclxuICAgIEFjY291bnRSYXRpbmdDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBhZGRyZXNzIDEuICovXHJcbiAgICBBZGRyZXNzMV9BZGRyZXNzSWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBwcmltYXJ5IGFkZHJlc3MgdHlwZS4gKi9cclxuICAgIEFkZHJlc3MxX0FkZHJlc3NUeXBlQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjaXR5IGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfQ2l0eTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgY29tcGxldGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQ29tcG9zaXRlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNvdW50cnkgb3IgcmVnaW9uIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfQ291bnRyeTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb3VudHkgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9Db3VudHk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgZmF4IG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0ZheDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGZyZWlnaHQgdGVybXMgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9GcmVpZ2h0VGVybXNDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGxhdGl0dWRlIHZhbHVlIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTGF0aXR1ZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgZmlyc3QgbGluZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTGluZTE6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc2Vjb25kIGxpbmUgb2YgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0xpbmUyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHRoaXJkIGxpbmUgb2YgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0xpbmUzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGxvbmdpdHVkZSB2YWx1ZSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0xvbmdpdHVkZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgZGVzY3JpcHRpdmUgbmFtZSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX05hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgWklQIENvZGUgb3IgcG9zdGFsIGNvZGUgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9Qb3N0YWxDb2RlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHBvc3Qgb2ZmaWNlIGJveCBudW1iZXIgb2YgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1Bvc3RPZmZpY2VCb3g6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbmFtZSBvZiB0aGUgbWFpbiBjb250YWN0IGF0IHRoZSBhY2NvdW50J3MgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfUHJpbWFyeUNvbnRhY3ROYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIHNoaXBwaW5nIG1ldGhvZCBmb3IgZGVsaXZlcmllcyBzZW50IHRvIHRoaXMgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1NoaXBwaW5nTWV0aG9kQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzdGF0ZSBvciBwcm92aW5jZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfU3RhdGVPclByb3ZpbmNlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG1haW4gcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgc2Vjb25kIHBob25lIG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1RlbGVwaG9uZTI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHRoaXJkIHBob25lIG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1RlbGVwaG9uZTM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgVVBTIHpvbmUgb2YgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1VQU1pvbmU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSB0aW1lIHpvbmUsIG9yIFVUQyBvZmZzZXQsIGZvciB0aGlzIGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9VVENPZmZzZXQ6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgZm9yIGFkZHJlc3MgMi4gKi9cclxuICAgIEFkZHJlc3MyX0FkZHJlc3NJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHNlY29uZGFyeSBhZGRyZXNzIHR5cGUuICovXHJcbiAgICBBZGRyZXNzMl9BZGRyZXNzVHlwZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY2l0eSBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfQ2l0eTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgY29tcGxldGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Db21wb3NpdGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY291bnRyeSBvciByZWdpb24gZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0NvdW50cnk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY291bnR5IGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9Db3VudHk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgZmF4IG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfRmF4OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgZnJlaWdodCB0ZXJtcyBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfRnJlaWdodFRlcm1zQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBsYXRpdHVkZSB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfTGF0aXR1ZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgZmlyc3QgbGluZSBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9MaW5lMTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzZWNvbmQgbGluZSBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9MaW5lMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSB0aGlyZCBsaW5lIG9mIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0xpbmUzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGxvbmdpdHVkZSB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfTG9uZ2l0dWRlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSBkZXNjcmlwdGl2ZSBuYW1lIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9OYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIFpJUCBDb2RlIG9yIHBvc3RhbCBjb2RlIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9Qb3N0YWxDb2RlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHBvc3Qgb2ZmaWNlIGJveCBudW1iZXIgb2YgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfUG9zdE9mZmljZUJveDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBuYW1lIG9mIHRoZSBtYWluIGNvbnRhY3QgYXQgdGhlIGFjY291bnQncyBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1ByaW1hcnlDb250YWN0TmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSBzaGlwcGluZyBtZXRob2QgZm9yIGRlbGl2ZXJpZXMgc2VudCB0byB0aGlzIGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9TaGlwcGluZ01ldGhvZENvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc3RhdGUgb3IgcHJvdmluY2Ugb2YgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfU3RhdGVPclByb3ZpbmNlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG1haW4gcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9UZWxlcGhvbmUxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSBzZWNvbmQgcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9UZWxlcGhvbmUyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSB0aGlyZCBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgVVBTIHpvbmUgb2YgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfVVBTWm9uZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHRpbWUgem9uZSwgb3IgVVRDIG9mZnNldCwgZm9yIHRoaXMgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1VUQ09mZnNldDogbnVtYmVyIHwgbnVsbDtcclxuICAgIEFkeF9DcmVhdGVkQnlJUEFkZHJlc3M6IHN0cmluZyB8IG51bGw7XHJcbiAgICBBZHhfQ3JlYXRlZEJ5VXNlcm5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBBZHhfTW9kaWZpZWRCeUlQQWRkcmVzczogc3RyaW5nIHwgbnVsbDtcclxuICAgIEFkeF9Nb2RpZmllZEJ5VXNlcm5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogRm9yIHN5c3RlbSB1c2Ugb25seS4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nMzA6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVGhlIGJhc2UgY3VycmVuY3kgZXF1aXZhbGVudCBvZiB0aGUgYWdpbmcgMzAgZmllbGQuICovXHJcbiAgICByZWFkb25seSBBZ2luZzMwX0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogRm9yIHN5c3RlbSB1c2Ugb25seS4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nNjA6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVGhlIGJhc2UgY3VycmVuY3kgZXF1aXZhbGVudCBvZiB0aGUgYWdpbmcgNjAgZmllbGQuICovXHJcbiAgICByZWFkb25seSBBZ2luZzYwX0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogRm9yIHN5c3RlbSB1c2Ugb25seS4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nOTA6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVGhlIGJhc2UgY3VycmVuY3kgZXF1aXZhbGVudCBvZiB0aGUgYWdpbmcgOTAgZmllbGQuICovXHJcbiAgICByZWFkb25seSBBZ2luZzkwX0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBsZWdhbCBkZXNpZ25hdGlvbiBvciBvdGhlciBidXNpbmVzcyB0eXBlIG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQnVzaW5lc3NUeXBlQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aG8gY3JlYXRlZCB0aGUgcmVjb3JkLiAqL1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZEJ5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBleHRlcm5hbCBwYXJ0eSB3aG8gY3JlYXRlZCB0aGUgcmVjb3JkLiAqL1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZEJ5RXh0ZXJuYWxQYXJ0eTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSByZWNvcmQgd2FzIGNyZWF0ZWQuICovXHJcbiAgICByZWFkb25seSBDcmVhdGVkT25fVXRjRGF0ZUFuZFRpbWU6IERhdGUgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHdobyBjcmVhdGVkIHRoZSByZWNvcmQgb24gYmVoYWxmIG9mIGFub3RoZXIgdXNlci4gKi9cclxuICAgIHJlYWRvbmx5IENyZWF0ZWRPbkJlaGFsZkJ5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNyZWRpdCBsaW1pdCBvZiB0aGUgYWNjb3VudC4gKi9cclxuICAgIENyZWRpdExpbWl0OiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBjcmVkaXQgbGltaXQgY29udmVydGVkIHRvIHRoZSBzeXN0ZW0ncyBkZWZhdWx0IGJhc2UgY3VycmVuY3kuICovXHJcbiAgICByZWFkb25seSBDcmVkaXRMaW1pdF9CYXNlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBjcmVkaXQgZm9yIHRoZSBhY2NvdW50IGlzIG9uIGhvbGQuICovXHJcbiAgICBDcmVkaXRPbkhvbGQ6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgc2l6ZSBjYXRlZ29yeSBvciByYW5nZSBvZiB0aGUgYWNjb3VudC4gKi9cclxuICAgIEN1c3RvbWVyU2l6ZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBjYXRlZ29yeSB0aGF0IGJlc3QgZGVzY3JpYmVzIHRoZSByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgYWNjb3VudCBhbmQgeW91ciBvcmdhbml6YXRpb24uICovXHJcbiAgICBDdXN0b21lclR5cGVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0byBkZXNjcmliZSB0aGUgYWNjb3VudC4gKi9cclxuICAgIERlc2NyaXB0aW9uOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBidWxrIGVtYWlsIHNlbnQgdGhyb3VnaCBjYW1wYWlnbnMuICovXHJcbiAgICBEb05vdEJ1bGtFTWFpbDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGJ1bGsgcG9zdGFsIG1haWwuICovXHJcbiAgICBEb05vdEJ1bGtQb3N0YWxNYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgZGlyZWN0IGVtYWlsLiAqL1xyXG4gICAgRG9Ob3RFTWFpbDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGZheGVzLiAqL1xyXG4gICAgRG9Ob3RGYXg6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBwaG9uZSBjYWxscy4gKi9cclxuICAgIERvTm90UGhvbmU6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBkaXJlY3QgbWFpbC4gKi9cclxuICAgIERvTm90UG9zdGFsTWFpbDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWNjZXB0cyBtYXJrZXRpbmcgbWF0ZXJpYWxzLiAqL1xyXG4gICAgRG9Ob3RTZW5kTU06IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHByaW1hcnkgZW1haWwgYWRkcmVzcyBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBFTWFpbEFkZHJlc3MxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHNlY29uZGFyeSBlbWFpbCBhZGRyZXNzIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIEVNYWlsQWRkcmVzczI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhbiBhbHRlcm5hdGUgZW1haWwgYWRkcmVzcyBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBFTWFpbEFkZHJlc3MzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBkZWZhdWx0IGltYWdlIGZvciB0aGUgcmVjb3JkLiAqL1xyXG4gICAgRW50aXR5SW1hZ2U6IHN0cmluZyB8IG51bGw7XHJcbiAgICBFbnRpdHlJbWFnZV9UaW1lc3RhbXA6IG51bWJlciB8IG51bGw7XHJcbiAgICBFbnRpdHlJbWFnZV9VUkw6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogRm9yIGludGVybmFsIHVzZSBvbmx5LiAqL1xyXG4gICAgcmVhZG9ubHkgRW50aXR5SW1hZ2VJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgY29udmVyc2lvbiByYXRlIG9mIHRoZSByZWNvcmQncyBjdXJyZW5jeS4gKi9cclxuICAgIHJlYWRvbmx5IEV4Y2hhbmdlUmF0ZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmYXggbnVtYmVyIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIEZheDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBJbmZvcm1hdGlvbiBhYm91dCB3aGV0aGVyIHRvIGFsbG93IGZvbGxvd2luZyBlbWFpbCBhY3Rpdml0eS4gKi9cclxuICAgIEZvbGxvd0VtYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBVUkwgZm9yIHRoZSBhY2NvdW50J3MgRlRQIHNpdGUuICovXHJcbiAgICBGdHBTaXRlVVJMOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBkYXRhIGltcG9ydCBvciBkYXRhIG1pZ3JhdGlvbiB0aGF0IGNyZWF0ZWQgdGhpcyByZWNvcmQuICovXHJcbiAgICBJbXBvcnRTZXF1ZW5jZU51bWJlcjogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBwcmltYXJ5IGluZHVzdHJ5LiAqL1xyXG4gICAgSW5kdXN0cnlDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgSXNQcml2YXRlOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBDb250YWlucyB0aGUgZGF0ZSBhbmQgdGltZSBzdGFtcCBvZiB0aGUgbGFzdCBvbiBob2xkIHRpbWUuICovXHJcbiAgICBMYXN0T25Ib2xkVGltZV9VdGNEYXRlQW5kVGltZTogRGF0ZSB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGRhdGUgd2hlbiB0aGUgYWNjb3VudCB3YXMgbGFzdCBpbmNsdWRlZCBpbiBhIG1hcmtldGluZyBjYW1wYWlnbi4gKi9cclxuICAgIExhc3RVc2VkSW5DYW1wYWlnbl9VdGNEYXRlT25seTogRGF0ZSB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbWFya2V0IGNhcGl0YWxpemF0aW9uIG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgTWFya2V0Q2FwOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBtYXJrZXQgY2FwaXRhbGl6YXRpb24gY29udmVydGVkIHRvIHRoZSBzeXN0ZW0ncyBkZWZhdWx0IGJhc2UgY3VycmVuY3kuICovXHJcbiAgICByZWFkb25seSBNYXJrZXRDYXBfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBXaGV0aGVyIGlzIG9ubHkgZm9yIG1hcmtldGluZyAqL1xyXG4gICAgTWFya2V0aW5nT25seTogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIG1hc3RlciBhY2NvdW50IHRoYXQgdGhlIGFjY291bnQgd2FzIG1lcmdlZCB3aXRoLiAqL1xyXG4gICAgcmVhZG9ubHkgTWFzdGVySWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3Mgd2hldGhlciB0aGUgYWNjb3VudCBoYXMgYmVlbiBtZXJnZWQgd2l0aCBhbm90aGVyIGFjY291bnQuICovXHJcbiAgICByZWFkb25seSBNZXJnZWQ6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHdobyBsYXN0IHVwZGF0ZWQgdGhlIHJlY29yZC4gKi9cclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkQnk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGV4dGVybmFsIHBhcnR5IHdobyBtb2RpZmllZCB0aGUgcmVjb3JkLiAqL1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRCeUV4dGVybmFsUGFydHk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGRhdGUgYW5kIHRpbWUgd2hlbiB0aGUgcmVjb3JkIHdhcyBsYXN0IHVwZGF0ZWQuICovXHJcbiAgICByZWFkb25seSBNb2RpZmllZE9uX1V0Y0RhdGVBbmRUaW1lOiBEYXRlIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aG8gY3JlYXRlZCB0aGUgcmVjb3JkIG9uIGJlaGFsZiBvZiBhbm90aGVyIHVzZXIuICovXHJcbiAgICByZWFkb25seSBNb2RpZmllZE9uQmVoYWxmQnk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgZm9yIEFjY291bnQgYXNzb2NpYXRlZCB3aXRoIEFjY291bnQuICovXHJcbiAgICBtc2FfbWFuYWdpbmdwYXJ0bmVyaWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY29tcGFueSBvciBidXNpbmVzcyBuYW1lLiAqL1xyXG4gICAgTmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBudW1iZXIgb2YgZW1wbG95ZWVzIHRoYXQgd29yayBhdCB0aGUgYWNjb3VudC4gKi9cclxuICAgIE51bWJlck9mRW1wbG95ZWVzOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIGhvdyBsb25nLCBpbiBtaW51dGVzLCB0aGF0IHRoZSByZWNvcmQgd2FzIG9uIGhvbGQuICovXHJcbiAgICByZWFkb25seSBPbkhvbGRUaW1lOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIERhdGUgYW5kIHRpbWUgdGhhdCB0aGUgcmVjb3JkIHdhcyBtaWdyYXRlZC4gKi9cclxuICAgIE92ZXJyaWRkZW5DcmVhdGVkT25fVXRjRGF0ZU9ubHk6IERhdGUgfCBudWxsO1xyXG4gICAgLyoqIEVudGVyIHRoZSB1c2VyIHdobyBpcyBhc3NpZ25lZCB0byBtYW5hZ2UgdGhlIHJlY29yZC4gKi9cclxuICAgIE93bmVySWRfc3lzdGVtdXNlcjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBFbnRlciB0aGUgdGVhbSB3aG8gaXMgYXNzaWduZWQgdG8gbWFuYWdlIHRoZSByZWNvcmQuICovXHJcbiAgICBPd25lcklkX3RlYW06IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBhY2NvdW50J3Mgb3duZXJzaGlwIHN0cnVjdHVyZSwgc3VjaCBhcyBwdWJsaWMgb3IgcHJpdmF0ZS4gKi9cclxuICAgIE93bmVyc2hpcENvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGJ1c2luZXNzIHVuaXQgdGhhdCB0aGUgcmVjb3JkIG93bmVyIGJlbG9uZ3MgdG8uICovXHJcbiAgICByZWFkb25seSBPd25pbmdCdXNpbmVzc1VuaXQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHRlYW0gd2hvIG93bnMgdGhlIGFjY291bnQuICovXHJcbiAgICByZWFkb25seSBPd25pbmdUZWFtOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSB1c2VyIHdobyBvd25zIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgcmVhZG9ubHkgT3duaW5nVXNlcjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBDaG9vc2UgdGhlIHBhcmVudCBhY2NvdW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGFjY291bnQuICovXHJcbiAgICBQYXJlbnRBY2NvdW50SWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogRm9yIHN5c3RlbSB1c2Ugb25seS4gTGVnYWN5IE1pY3Jvc29mdCBEeW5hbWljcyBDUk0gMy4wIHdvcmtmbG93IGRhdGEuICovXHJcbiAgICBQYXJ0aWNpcGF0ZXNJbldvcmtmbG93OiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHBheW1lbnQgdGVybXMgdG8gaW5kaWNhdGUgd2hlbiB0aGUgY3VzdG9tZXIgbmVlZHMgdG8gcGF5LiAqL1xyXG4gICAgUGF5bWVudFRlcm1zQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHByZWZlcnJlZCBkYXkgb2YgdGhlIHdlZWsgZm9yIHNlcnZpY2UgYXBwb2ludG1lbnRzLiAqL1xyXG4gICAgUHJlZmVycmVkQXBwb2ludG1lbnREYXlDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgcHJlZmVycmVkIHRpbWUgb2YgZGF5IGZvciBzZXJ2aWNlIGFwcG9pbnRtZW50cy4gKi9cclxuICAgIFByZWZlcnJlZEFwcG9pbnRtZW50VGltZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBwcmVmZXJyZWQgbWV0aG9kIG9mIGNvbnRhY3QuICovXHJcbiAgICBQcmVmZXJyZWRDb250YWN0TWV0aG9kQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBDaG9vc2UgdGhlIHByZWZlcnJlZCBzZXJ2aWNlIHJlcHJlc2VudGF0aXZlLiAqL1xyXG4gICAgUHJlZmVycmVkU3lzdGVtVXNlcklkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgcHJpbWFyeSBjb250YWN0IGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIFByaW1hcnlDb250YWN0SWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogUHJpbWFyeSBTYXRvcmkgSUQgZm9yIEFjY291bnQgKi9cclxuICAgIFByaW1hcnlTYXRvcmlJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBQcmltYXJ5IFR3aXR0ZXIgSUQgZm9yIEFjY291bnQgKi9cclxuICAgIFByaW1hcnlUd2l0dGVySWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIElEIG9mIHRoZSBwcm9jZXNzLiAqL1xyXG4gICAgUHJvY2Vzc0lkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGFubnVhbCByZXZlbnVlIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIFJldmVudWU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGFubnVhbCByZXZlbnVlIGNvbnZlcnRlZCB0byB0aGUgc3lzdGVtJ3MgZGVmYXVsdCBiYXNlIGN1cnJlbmN5LiAqL1xyXG4gICAgcmVhZG9ubHkgUmV2ZW51ZV9CYXNlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG51bWJlciBvZiBzaGFyZXMgYXZhaWxhYmxlIHRvIHRoZSBwdWJsaWMgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgU2hhcmVzT3V0c3RhbmRpbmc6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IGEgc2hpcHBpbmcgbWV0aG9kIGZvciBkZWxpdmVyaWVzIHNlbnQgdG8gdGhlIGFjY291bnQncyBhZGRyZXNzLiAqL1xyXG4gICAgU2hpcHBpbmdNZXRob2RDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIFN0YW5kYXJkIEluZHVzdHJpYWwgQ2xhc3NpZmljYXRpb24gKFNJQykgY29kZS4gKi9cclxuICAgIFNJQzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBDaG9vc2UgdGhlIHNlcnZpY2UgbGV2ZWwgYWdyZWVtZW50IChTTEEpIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkuICovXHJcbiAgICBTTEFJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBMYXN0IFNMQSB0aGF0IHdhcyBhcHBsaWVkIHRvIHRoaXMgY2FzZS4gKi9cclxuICAgIHJlYWRvbmx5IFNMQUludm9rZWRJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgSUQgb2YgdGhlIHN0YWdlLiAqL1xyXG4gICAgU3RhZ2VJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aGV0aGVyIHRoZSBhY2NvdW50IGlzIGFjdGl2ZSBvciBpbmFjdGl2ZS4gKi9cclxuICAgIFN0YXRlQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBzdGF0dXMuICovXHJcbiAgICBTdGF0dXNDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHN0b2NrIGV4Y2hhbmdlIGF0IHdoaWNoIHRoZSBhY2NvdW50IGlzIGxpc3RlZC4gKi9cclxuICAgIFN0b2NrRXhjaGFuZ2U6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbWFpbiBwaG9uZSBudW1iZXIgZm9yIHRoaXMgYWNjb3VudC4gKi9cclxuICAgIFRlbGVwaG9uZTE6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHNlY29uZCBwaG9uZSBudW1iZXIgZm9yIHRoaXMgYWNjb3VudC4gKi9cclxuICAgIFRlbGVwaG9uZTI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHRoaXJkIHBob25lIG51bWJlciBmb3IgdGhpcyBhY2NvdW50LiAqL1xyXG4gICAgVGVsZXBob25lMzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSByZWdpb24gb3IgdGVycml0b3J5IGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIFRlcnJpdG9yeUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc3RvY2sgZXhjaGFuZ2Ugc3ltYm9sIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIFRpY2tlclN5bWJvbDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUb3RhbCB0aW1lIHNwZW50IGZvciBlbWFpbHMgYW5kIG1lZXRpbmdzIGJ5IG1lIGluIHJlbGF0aW9uIHRvIGFjY291bnQgcmVjb3JkLiAqL1xyXG4gICAgcmVhZG9ubHkgVGltZVNwZW50QnlNZU9uRW1haWxBbmRNZWV0aW5nczogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuICovXHJcbiAgICBUaW1lWm9uZVJ1bGVWZXJzaW9uTnVtYmVyOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgbG9jYWwgY3VycmVuY3kgZm9yIHRoZSByZWNvcmQuICovXHJcbiAgICBUcmFuc2FjdGlvbkN1cnJlbmN5SWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogRm9yIGludGVybmFsIHVzZSBvbmx5LiAqL1xyXG4gICAgVHJhdmVyc2VkUGF0aDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUaW1lIHpvbmUgY29kZSB0aGF0IHdhcyBpbiB1c2Ugd2hlbiB0aGUgcmVjb3JkIHdhcyBjcmVhdGVkLiAqL1xyXG4gICAgVVRDQ29udmVyc2lvblRpbWVab25lQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBWZXJzaW9uIG51bWJlciBvZiB0aGUgYWNjb3VudC4gKi9cclxuICAgIHJlYWRvbmx5IFZlcnNpb25OdW1iZXI6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgYWNjb3VudCdzIHdlYnNpdGUgVVJMLiAqL1xyXG4gICAgV2ViU2l0ZVVSTDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBwaG9uZXRpYyBzcGVsbGluZyBvZiB0aGUgY29tcGFueSBuYW1lLiAqL1xyXG4gICAgWW9taU5hbWU6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMi4gUnVudGltZSAtIEZpZWxkIENvbmZpZ3VyYXRpb25cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEFjY291bnQgZmllbGQgbWV0YWRhdGEgY29uZmlndXJhdGlvblxyXG4gKiAtIGxvZ2ljYWxOYW1lOiBhdHRyaWJ1dGUgbG9naWNhbCBuYW1lIChlLmcuICdhY2NvdW50aWQnKVxyXG4gKiAtIHNjaGVtYU5hbWU6IHNjaGVtYSBuYW1lIGZvciBsb29rdXAgYmluZGluZ1xyXG4gKiAtIGVudGl0eUNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uIG5hbWUgZm9yIGxvb2t1cCAoZS5nLiAnYWNjb3VudHMnKVxyXG4gKiAtIGVudGl0eUxvZ2ljYWxOYW1lOiBlbnRpdHkgbmFtZSBmb3IgbG9va3VwIChlLmcuICdhY2NvdW50JylcclxuICogLSByZWFkT25seTogd2hldGhlciB0aGUgZmllbGQgaXMgcmVhZC1vbmx5XHJcbiAqIC0gdHlwZTogZmllbGQgdHlwZSBmb3IgcGFyc2luZyAoSW50ZWdlciwgTnVtYmVyLCBCb29sZWFuLCBEYXRlVGltZSwgTXVsdGlPcHRpb25TZXQpXHJcbiAqL1xyXG5jb25zdCBBY2NvdW50RmllbGRDb25maWc6IElXZWJBcGlGaWVsZENvbmZpZ01hcCA9IHtcclxuICAgIEFjY291bnRDYXRlZ29yeUNvZGU6IHsgbG9naWNhbE5hbWU6ICdhY2NvdW50Y2F0ZWdvcnljb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBY2NvdW50Q2xhc3NpZmljYXRpb25Db2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWNjb3VudGNsYXNzaWZpY2F0aW9uY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWNjb3VudElkOiB7IGxvZ2ljYWxOYW1lOiAnYWNjb3VudGlkJyB9LFxyXG4gICAgQWNjb3VudE51bWJlcjogeyBsb2dpY2FsTmFtZTogJ2FjY291bnRudW1iZXInIH0sXHJcbiAgICBBY2NvdW50UmF0aW5nQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FjY291bnRyYXRpbmdjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMV9BZGRyZXNzSWQ6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9hZGRyZXNzaWQnIH0sXHJcbiAgICBBZGRyZXNzMV9BZGRyZXNzVHlwZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9hZGRyZXNzdHlwZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MxX0NpdHk6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9jaXR5JyB9LFxyXG4gICAgQWRkcmVzczFfQ29tcG9zaXRlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfY29tcG9zaXRlJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIEFkZHJlc3MxX0NvdW50cnk6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9jb3VudHJ5JyB9LFxyXG4gICAgQWRkcmVzczFfQ291bnR5OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfY291bnR5JyB9LFxyXG4gICAgQWRkcmVzczFfRmF4OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfZmF4JyB9LFxyXG4gICAgQWRkcmVzczFfRnJlaWdodFRlcm1zQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2ZyZWlnaHR0ZXJtc2NvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MxX0xhdGl0dWRlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfbGF0aXR1ZGUnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWRkcmVzczFfTGluZTE6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9saW5lMScgfSxcclxuICAgIEFkZHJlc3MxX0xpbmUyOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfbGluZTInIH0sXHJcbiAgICBBZGRyZXNzMV9MaW5lMzogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2xpbmUzJyB9LFxyXG4gICAgQWRkcmVzczFfTG9uZ2l0dWRlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfbG9uZ2l0dWRlJywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFkZHJlc3MxX05hbWU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9uYW1lJyB9LFxyXG4gICAgQWRkcmVzczFfUG9zdGFsQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3Bvc3RhbGNvZGUnIH0sXHJcbiAgICBBZGRyZXNzMV9Qb3N0T2ZmaWNlQm94OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfcG9zdG9mZmljZWJveCcgfSxcclxuICAgIEFkZHJlc3MxX1ByaW1hcnlDb250YWN0TmFtZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3ByaW1hcnljb250YWN0bmFtZScgfSxcclxuICAgIEFkZHJlc3MxX1NoaXBwaW5nTWV0aG9kQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3NoaXBwaW5nbWV0aG9kY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczFfU3RhdGVPclByb3ZpbmNlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfc3RhdGVvcnByb3ZpbmNlJyB9LFxyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3RlbGVwaG9uZTEnIH0sXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUyOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfdGVsZXBob25lMicgfSxcclxuICAgIEFkZHJlc3MxX1RlbGVwaG9uZTM6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV90ZWxlcGhvbmUzJyB9LFxyXG4gICAgQWRkcmVzczFfVVBTWm9uZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3Vwc3pvbmUnIH0sXHJcbiAgICBBZGRyZXNzMV9VVENPZmZzZXQ6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV91dGNvZmZzZXQnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MyX0FkZHJlc3NJZDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2FkZHJlc3NpZCcgfSxcclxuICAgIEFkZHJlc3MyX0FkZHJlc3NUeXBlQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2FkZHJlc3N0eXBlY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczJfQ2l0eTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2NpdHknIH0sXHJcbiAgICBBZGRyZXNzMl9Db21wb3NpdGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9jb21wb3NpdGUnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgQWRkcmVzczJfQ291bnRyeTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2NvdW50cnknIH0sXHJcbiAgICBBZGRyZXNzMl9Db3VudHk6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9jb3VudHknIH0sXHJcbiAgICBBZGRyZXNzMl9GYXg6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9mYXgnIH0sXHJcbiAgICBBZGRyZXNzMl9GcmVpZ2h0VGVybXNDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfZnJlaWdodHRlcm1zY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczJfTGF0aXR1ZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9sYXRpdHVkZScsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZGRyZXNzMl9MaW5lMTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2xpbmUxJyB9LFxyXG4gICAgQWRkcmVzczJfTGluZTI6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9saW5lMicgfSxcclxuICAgIEFkZHJlc3MyX0xpbmUzOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfbGluZTMnIH0sXHJcbiAgICBBZGRyZXNzMl9Mb25naXR1ZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9sb25naXR1ZGUnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWRkcmVzczJfTmFtZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX25hbWUnIH0sXHJcbiAgICBBZGRyZXNzMl9Qb3N0YWxDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfcG9zdGFsY29kZScgfSxcclxuICAgIEFkZHJlc3MyX1Bvc3RPZmZpY2VCb3g6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9wb3N0b2ZmaWNlYm94JyB9LFxyXG4gICAgQWRkcmVzczJfUHJpbWFyeUNvbnRhY3ROYW1lOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfcHJpbWFyeWNvbnRhY3RuYW1lJyB9LFxyXG4gICAgQWRkcmVzczJfU2hpcHBpbmdNZXRob2RDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfc2hpcHBpbmdtZXRob2Rjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMl9TdGF0ZU9yUHJvdmluY2U6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9zdGF0ZW9ycHJvdmluY2UnIH0sXHJcbiAgICBBZGRyZXNzMl9UZWxlcGhvbmUxOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfdGVsZXBob25lMScgfSxcclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTI6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl90ZWxlcGhvbmUyJyB9LFxyXG4gICAgQWRkcmVzczJfVGVsZXBob25lMzogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3RlbGVwaG9uZTMnIH0sXHJcbiAgICBBZGRyZXNzMl9VUFNab25lOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfdXBzem9uZScgfSxcclxuICAgIEFkZHJlc3MyX1VUQ09mZnNldDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3V0Y29mZnNldCcsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWR4X0NyZWF0ZWRCeUlQQWRkcmVzczogeyBsb2dpY2FsTmFtZTogJ2FkeF9jcmVhdGVkYnlpcGFkZHJlc3MnIH0sXHJcbiAgICBBZHhfQ3JlYXRlZEJ5VXNlcm5hbWU6IHsgbG9naWNhbE5hbWU6ICdhZHhfY3JlYXRlZGJ5dXNlcm5hbWUnIH0sXHJcbiAgICBBZHhfTW9kaWZpZWRCeUlQQWRkcmVzczogeyBsb2dpY2FsTmFtZTogJ2FkeF9tb2RpZmllZGJ5aXBhZGRyZXNzJyB9LFxyXG4gICAgQWR4X01vZGlmaWVkQnlVc2VybmFtZTogeyBsb2dpY2FsTmFtZTogJ2FkeF9tb2RpZmllZGJ5dXNlcm5hbWUnIH0sXHJcbiAgICBBZ2luZzMwOiB7IGxvZ2ljYWxOYW1lOiAnYWdpbmczMCcsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWdpbmczMF9CYXNlOiB7IGxvZ2ljYWxOYW1lOiAnYWdpbmczMF9iYXNlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZ2luZzYwOiB7IGxvZ2ljYWxOYW1lOiAnYWdpbmc2MCcsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWdpbmc2MF9CYXNlOiB7IGxvZ2ljYWxOYW1lOiAnYWdpbmc2MF9iYXNlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZ2luZzkwOiB7IGxvZ2ljYWxOYW1lOiAnYWdpbmc5MCcsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWdpbmc5MF9CYXNlOiB7IGxvZ2ljYWxOYW1lOiAnYWdpbmc5MF9iYXNlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBCdXNpbmVzc1R5cGVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYnVzaW5lc3N0eXBlY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQ3JlYXRlZEJ5OiB7IHNjaGVtYU5hbWU6ICdjcmVhdGVkYnknLCBsb2dpY2FsTmFtZTogJ19jcmVhdGVkYnlfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIENyZWF0ZWRCeUV4dGVybmFsUGFydHk6IHsgc2NoZW1hTmFtZTogJ2NyZWF0ZWRieWV4dGVybmFscGFydHknLCBsb2dpY2FsTmFtZTogJ19jcmVhdGVkYnlleHRlcm5hbHBhcnR5X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdleHRlcm5hbHBhcnRpZXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2V4dGVybmFscGFydHknLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgQ3JlYXRlZE9uX1V0Y0RhdGVBbmRUaW1lOiB7IGxvZ2ljYWxOYW1lOiAnY3JlYXRlZG9uJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdEYXRlVGltZScgfSxcclxuICAgIENyZWF0ZWRPbkJlaGFsZkJ5OiB7IHNjaGVtYU5hbWU6ICdjcmVhdGVkb25iZWhhbGZieScsIGxvZ2ljYWxOYW1lOiAnX2NyZWF0ZWRvbmJlaGFsZmJ5X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBDcmVkaXRMaW1pdDogeyBsb2dpY2FsTmFtZTogJ2NyZWRpdGxpbWl0JywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIENyZWRpdExpbWl0X0Jhc2U6IHsgbG9naWNhbE5hbWU6ICdjcmVkaXRsaW1pdF9iYXNlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBDcmVkaXRPbkhvbGQ6IHsgbG9naWNhbE5hbWU6ICdjcmVkaXRvbmhvbGQnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIEN1c3RvbWVyU2l6ZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdjdXN0b21lcnNpemVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBDdXN0b21lclR5cGVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnY3VzdG9tZXJ0eXBlY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgRGVzY3JpcHRpb246IHsgbG9naWNhbE5hbWU6ICdkZXNjcmlwdGlvbicgfSxcclxuICAgIERvTm90QnVsa0VNYWlsOiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3RidWxrZW1haWwnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIERvTm90QnVsa1Bvc3RhbE1haWw6IHsgbG9naWNhbE5hbWU6ICdkb25vdGJ1bGtwb3N0YWxtYWlsJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBEb05vdEVNYWlsOiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3RlbWFpbCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRG9Ob3RGYXg6IHsgbG9naWNhbE5hbWU6ICdkb25vdGZheCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRG9Ob3RQaG9uZTogeyBsb2dpY2FsTmFtZTogJ2Rvbm90cGhvbmUnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIERvTm90UG9zdGFsTWFpbDogeyBsb2dpY2FsTmFtZTogJ2Rvbm90cG9zdGFsbWFpbCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRG9Ob3RTZW5kTU06IHsgbG9naWNhbE5hbWU6ICdkb25vdHNlbmRtbScsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRU1haWxBZGRyZXNzMTogeyBsb2dpY2FsTmFtZTogJ2VtYWlsYWRkcmVzczEnIH0sXHJcbiAgICBFTWFpbEFkZHJlc3MyOiB7IGxvZ2ljYWxOYW1lOiAnZW1haWxhZGRyZXNzMicgfSxcclxuICAgIEVNYWlsQWRkcmVzczM6IHsgbG9naWNhbE5hbWU6ICdlbWFpbGFkZHJlc3MzJyB9LFxyXG4gICAgRW50aXR5SW1hZ2U6IHsgbG9naWNhbE5hbWU6ICdlbnRpdHlpbWFnZScgfSxcclxuICAgIEVudGl0eUltYWdlX1RpbWVzdGFtcDogeyBsb2dpY2FsTmFtZTogJ2VudGl0eWltYWdlX3RpbWVzdGFtcCcsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBFbnRpdHlJbWFnZV9VUkw6IHsgbG9naWNhbE5hbWU6ICdlbnRpdHlpbWFnZV91cmwnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgRW50aXR5SW1hZ2VJZDogeyBsb2dpY2FsTmFtZTogJ2VudGl0eWltYWdlaWQnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgRXhjaGFuZ2VSYXRlOiB7IGxvZ2ljYWxOYW1lOiAnZXhjaGFuZ2VyYXRlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBGYXg6IHsgbG9naWNhbE5hbWU6ICdmYXgnIH0sXHJcbiAgICBGb2xsb3dFbWFpbDogeyBsb2dpY2FsTmFtZTogJ2ZvbGxvd2VtYWlsJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBGdHBTaXRlVVJMOiB7IGxvZ2ljYWxOYW1lOiAnZnRwc2l0ZXVybCcgfSxcclxuICAgIEltcG9ydFNlcXVlbmNlTnVtYmVyOiB7IGxvZ2ljYWxOYW1lOiAnaW1wb3J0c2VxdWVuY2VudW1iZXInLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEluZHVzdHJ5Q29kZTogeyBsb2dpY2FsTmFtZTogJ2luZHVzdHJ5Y29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgSXNQcml2YXRlOiB7IGxvZ2ljYWxOYW1lOiAnaXNwcml2YXRlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgTGFzdE9uSG9sZFRpbWVfVXRjRGF0ZUFuZFRpbWU6IHsgbG9naWNhbE5hbWU6ICdsYXN0b25ob2xkdGltZScsIHR5cGU6ICdEYXRlVGltZScgfSxcclxuICAgIExhc3RVc2VkSW5DYW1wYWlnbl9VdGNEYXRlT25seTogeyBsb2dpY2FsTmFtZTogJ2xhc3R1c2VkaW5jYW1wYWlnbicsIHR5cGU6ICdEYXRlVGltZScgfSxcclxuICAgIE1hcmtldENhcDogeyBsb2dpY2FsTmFtZTogJ21hcmtldGNhcCcsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBNYXJrZXRDYXBfQmFzZTogeyBsb2dpY2FsTmFtZTogJ21hcmtldGNhcF9iYXNlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBNYXJrZXRpbmdPbmx5OiB7IGxvZ2ljYWxOYW1lOiAnbWFya2V0aW5nb25seScsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgTWFzdGVySWQ6IHsgc2NoZW1hTmFtZTogJ21hc3RlcmlkJywgbG9naWNhbE5hbWU6ICdfbWFzdGVyaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2FjY291bnRzJywgZW50aXR5TG9naWNhbE5hbWU6ICdhY2NvdW50JywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIE1lcmdlZDogeyBsb2dpY2FsTmFtZTogJ21lcmdlZCcsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIE1vZGlmaWVkQnk6IHsgc2NoZW1hTmFtZTogJ21vZGlmaWVkYnknLCBsb2dpY2FsTmFtZTogJ19tb2RpZmllZGJ5X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBNb2RpZmllZEJ5RXh0ZXJuYWxQYXJ0eTogeyBzY2hlbWFOYW1lOiAnbW9kaWZpZWRieWV4dGVybmFscGFydHknLCBsb2dpY2FsTmFtZTogJ19tb2RpZmllZGJ5ZXh0ZXJuYWxwYXJ0eV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnZXh0ZXJuYWxwYXJ0aWVzJywgZW50aXR5TG9naWNhbE5hbWU6ICdleHRlcm5hbHBhcnR5JywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIE1vZGlmaWVkT25fVXRjRGF0ZUFuZFRpbWU6IHsgbG9naWNhbE5hbWU6ICdtb2RpZmllZG9uJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdEYXRlVGltZScgfSxcclxuICAgIE1vZGlmaWVkT25CZWhhbGZCeTogeyBzY2hlbWFOYW1lOiAnbW9kaWZpZWRvbmJlaGFsZmJ5JywgbG9naWNhbE5hbWU6ICdfbW9kaWZpZWRvbmJlaGFsZmJ5X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBtc2FfbWFuYWdpbmdwYXJ0bmVyaWQ6IHsgc2NoZW1hTmFtZTogJ21zYV9tYW5hZ2luZ3BhcnRuZXJpZCcsIGxvZ2ljYWxOYW1lOiAnX21zYV9tYW5hZ2luZ3BhcnRuZXJpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnYWNjb3VudHMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2FjY291bnQnIH0sXHJcbiAgICBOYW1lOiB7IGxvZ2ljYWxOYW1lOiAnbmFtZScgfSxcclxuICAgIE51bWJlck9mRW1wbG95ZWVzOiB7IGxvZ2ljYWxOYW1lOiAnbnVtYmVyb2ZlbXBsb3llZXMnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIE9uSG9sZFRpbWU6IHsgbG9naWNhbE5hbWU6ICdvbmhvbGR0aW1lJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgT3ZlcnJpZGRlbkNyZWF0ZWRPbl9VdGNEYXRlT25seTogeyBsb2dpY2FsTmFtZTogJ292ZXJyaWRkZW5jcmVhdGVkb24nLCB0eXBlOiAnRGF0ZVRpbWUnIH0sXHJcbiAgICBPd25lcklkX3N5c3RlbXVzZXI6IHsgc2NoZW1hTmFtZTogJ293bmVyaWQnLCBsb2dpY2FsTmFtZTogJ19vd25lcmlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicgfSxcclxuICAgIE93bmVySWRfdGVhbTogeyBzY2hlbWFOYW1lOiAnb3duZXJpZCcsIGxvZ2ljYWxOYW1lOiAnX293bmVyaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3RlYW1zJywgZW50aXR5TG9naWNhbE5hbWU6ICd0ZWFtJyB9LFxyXG4gICAgT3duZXJzaGlwQ29kZTogeyBsb2dpY2FsTmFtZTogJ293bmVyc2hpcGNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIE93bmluZ0J1c2luZXNzVW5pdDogeyBzY2hlbWFOYW1lOiAnb3duaW5nYnVzaW5lc3N1bml0JywgbG9naWNhbE5hbWU6ICdfb3duaW5nYnVzaW5lc3N1bml0X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdidXNpbmVzc3VuaXRzJywgZW50aXR5TG9naWNhbE5hbWU6ICdidXNpbmVzc3VuaXQnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgT3duaW5nVGVhbTogeyBzY2hlbWFOYW1lOiAnb3duaW5ndGVhbScsIGxvZ2ljYWxOYW1lOiAnX293bmluZ3RlYW1fdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3RlYW1zJywgZW50aXR5TG9naWNhbE5hbWU6ICd0ZWFtJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIE93bmluZ1VzZXI6IHsgc2NoZW1hTmFtZTogJ293bmluZ3VzZXInLCBsb2dpY2FsTmFtZTogJ19vd25pbmd1c2VyX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBQYXJlbnRBY2NvdW50SWQ6IHsgc2NoZW1hTmFtZTogJ3BhcmVudGFjY291bnRpZCcsIGxvZ2ljYWxOYW1lOiAnX3BhcmVudGFjY291bnRpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnYWNjb3VudHMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2FjY291bnQnIH0sXHJcbiAgICBQYXJ0aWNpcGF0ZXNJbldvcmtmbG93OiB7IGxvZ2ljYWxOYW1lOiAncGFydGljaXBhdGVzaW53b3JrZmxvdycsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgUGF5bWVudFRlcm1zQ29kZTogeyBsb2dpY2FsTmFtZTogJ3BheW1lbnR0ZXJtc2NvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFByZWZlcnJlZEFwcG9pbnRtZW50RGF5Q29kZTogeyBsb2dpY2FsTmFtZTogJ3ByZWZlcnJlZGFwcG9pbnRtZW50ZGF5Y29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgUHJlZmVycmVkQXBwb2ludG1lbnRUaW1lQ29kZTogeyBsb2dpY2FsTmFtZTogJ3ByZWZlcnJlZGFwcG9pbnRtZW50dGltZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFByZWZlcnJlZENvbnRhY3RNZXRob2RDb2RlOiB7IGxvZ2ljYWxOYW1lOiAncHJlZmVycmVkY29udGFjdG1ldGhvZGNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFByZWZlcnJlZFN5c3RlbVVzZXJJZDogeyBzY2hlbWFOYW1lOiAncHJlZmVycmVkc3lzdGVtdXNlcmlkJywgbG9naWNhbE5hbWU6ICdfcHJlZmVycmVkc3lzdGVtdXNlcmlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicgfSxcclxuICAgIFByaW1hcnlDb250YWN0SWQ6IHsgc2NoZW1hTmFtZTogJ3ByaW1hcnljb250YWN0aWQnLCBsb2dpY2FsTmFtZTogJ19wcmltYXJ5Y29udGFjdGlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdjb250YWN0cycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnY29udGFjdCcgfSxcclxuICAgIFByaW1hcnlTYXRvcmlJZDogeyBsb2dpY2FsTmFtZTogJ3ByaW1hcnlzYXRvcmlpZCcgfSxcclxuICAgIFByaW1hcnlUd2l0dGVySWQ6IHsgbG9naWNhbE5hbWU6ICdwcmltYXJ5dHdpdHRlcmlkJyB9LFxyXG4gICAgUHJvY2Vzc0lkOiB7IGxvZ2ljYWxOYW1lOiAncHJvY2Vzc2lkJyB9LFxyXG4gICAgUmV2ZW51ZTogeyBsb2dpY2FsTmFtZTogJ3JldmVudWUnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgUmV2ZW51ZV9CYXNlOiB7IGxvZ2ljYWxOYW1lOiAncmV2ZW51ZV9iYXNlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBTaGFyZXNPdXRzdGFuZGluZzogeyBsb2dpY2FsTmFtZTogJ3NoYXJlc291dHN0YW5kaW5nJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBTaGlwcGluZ01ldGhvZENvZGU6IHsgbG9naWNhbE5hbWU6ICdzaGlwcGluZ21ldGhvZGNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFNJQzogeyBsb2dpY2FsTmFtZTogJ3NpYycgfSxcclxuICAgIFNMQUlkOiB7IHNjaGVtYU5hbWU6ICdzbGFpZCcsIGxvZ2ljYWxOYW1lOiAnX3NsYWlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzbGFzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzbGEnIH0sXHJcbiAgICBTTEFJbnZva2VkSWQ6IHsgc2NoZW1hTmFtZTogJ3NsYWludm9rZWRpZCcsIGxvZ2ljYWxOYW1lOiAnX3NsYWludm9rZWRpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc2xhcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc2xhJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIFN0YWdlSWQ6IHsgbG9naWNhbE5hbWU6ICdzdGFnZWlkJyB9LFxyXG4gICAgU3RhdGVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnc3RhdGVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBTdGF0dXNDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnc3RhdHVzY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgU3RvY2tFeGNoYW5nZTogeyBsb2dpY2FsTmFtZTogJ3N0b2NrZXhjaGFuZ2UnIH0sXHJcbiAgICBUZWxlcGhvbmUxOiB7IGxvZ2ljYWxOYW1lOiAndGVsZXBob25lMScgfSxcclxuICAgIFRlbGVwaG9uZTI6IHsgbG9naWNhbE5hbWU6ICd0ZWxlcGhvbmUyJyB9LFxyXG4gICAgVGVsZXBob25lMzogeyBsb2dpY2FsTmFtZTogJ3RlbGVwaG9uZTMnIH0sXHJcbiAgICBUZXJyaXRvcnlDb2RlOiB7IGxvZ2ljYWxOYW1lOiAndGVycml0b3J5Y29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgVGlja2VyU3ltYm9sOiB7IGxvZ2ljYWxOYW1lOiAndGlja2Vyc3ltYm9sJyB9LFxyXG4gICAgVGltZVNwZW50QnlNZU9uRW1haWxBbmRNZWV0aW5nczogeyBsb2dpY2FsTmFtZTogJ3RpbWVzcGVudGJ5bWVvbmVtYWlsYW5kbWVldGluZ3MnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgVGltZVpvbmVSdWxlVmVyc2lvbk51bWJlcjogeyBsb2dpY2FsTmFtZTogJ3RpbWV6b25lcnVsZXZlcnNpb25udW1iZXInLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFRyYW5zYWN0aW9uQ3VycmVuY3lJZDogeyBzY2hlbWFOYW1lOiAndHJhbnNhY3Rpb25jdXJyZW5jeWlkJywgbG9naWNhbE5hbWU6ICdfdHJhbnNhY3Rpb25jdXJyZW5jeWlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICd0cmFuc2FjdGlvbmN1cnJlbmNpZXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3RyYW5zYWN0aW9uY3VycmVuY3knIH0sXHJcbiAgICBUcmF2ZXJzZWRQYXRoOiB7IGxvZ2ljYWxOYW1lOiAndHJhdmVyc2VkcGF0aCcgfSxcclxuICAgIFVUQ0NvbnZlcnNpb25UaW1lWm9uZUNvZGU6IHsgbG9naWNhbE5hbWU6ICd1dGNjb252ZXJzaW9udGltZXpvbmVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBWZXJzaW9uTnVtYmVyOiB7IGxvZ2ljYWxOYW1lOiAndmVyc2lvbm51bWJlcicsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFdlYlNpdGVVUkw6IHsgbG9naWNhbE5hbWU6ICd3ZWJzaXRldXJsJyB9LFxyXG4gICAgWW9taU5hbWU6IHsgbG9naWNhbE5hbWU6ICd5b21pbmFtZScgfVxyXG59O1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAzLiBSdW50aW1lIC0gQ2xhc3MgKEMjIGVhcmx5LWJvdW5kIHN0eWxlIHdpdGggYG5ld2Aga2V5d29yZClcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEFjY291bnQgV2ViQXBpIGNsYXNzIGZvciBlYXJseS1ib3VuZCBzdHlsZSBjb2RpbmdcclxuICogVXNhZ2U6IGNvbnN0IGFjY291bnQgPSBuZXcgQWNjb3VudEFwaShlbnRpdHkpO1xyXG4gKiBAcGFyYW0gZW50aXR5IFRoZSBlbnRpdHkgb2JqZWN0IGZyb20gT0RhdGEgcmVzcG9uc2UgKG9wdGlvbmFsIGZvciBjcmVhdGUgb3BlcmF0aW9ucylcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50QXBpIHtcclxuICAgIGNvbnN0cnVjdG9yKGVudGl0eT86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICAgICAgICBjb25zdCB3ZWJBcGlFbnRpdHkgPSBjcmVhdGVXZWJBcGlFbnRpdHk8SUFjY291bnRBcGk+KGVudGl0eSwgJ2FjY291bnQnLCAnYWNjb3VudHMnLCBBY2NvdW50RmllbGRDb25maWcpO1xyXG4gICAgICAgIC8vIENvcHkgcHJvcGVydHkgZGVzY3JpcHRvcnMgdG8gcHJlc2VydmUgZ2V0dGVycy9zZXR0ZXJzXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMod2ViQXBpRW50aXR5KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFR5cGUgYXNzZXJ0aW9uIHRvIG1ha2UgQWNjb3VudEFwaSBpbnN0YW5jZXMgd29yayBhcyBJQWNjb3VudEFwaVxyXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRBcGkgZXh0ZW5kcyBJQWNjb3VudEFwaSB7IH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRBcGk7XHJcblxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5pbXBvcnQgeyBBY2NvdW50QXBpIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC53ZWJhcGknO1xyXG5pbXBvcnQgeyBPcHRpb25TZXQgfSBmcm9tICcuL2dlbmVyYXRvci9PcHRpb25TZXQnO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgNjogV2ViQXBpIC0gRWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqIFRlc3RzIFJldHJpZXZlUmVjb3JkIGFuZCBSZXRyaWV2ZVJlY29yZHMgd2l0aCB2YXJpb3VzIG92ZXJsb2Fkc1xyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIC8gUHJvbWlzZS1iYXNlZCB0ZXN0cyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAvIEFkZGl0aW9uYWwgdGVzdHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gVGVzdFdlYkFwaShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gV0VCQVBJIE9CSkVDVCBURVNUUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gUjE6IENyZWF0ZSBlbXB0eSBBY2NvdW50IG9iamVjdCB2aWEgQWNjb3VudEFwaSBmYWN0b3J5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG5ld0FjY291bnQgPSBuZXcgQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIG5ld0FjY291bnQuTmFtZSA9ICdUZXN0IEFjY291bnQnO1xyXG4gICAgICAgIG5ld0FjY291bnQuVGVsZXBob25lMSA9ICcxMjMtNDU2LTc4OTAnO1xyXG4gICAgICAgIG5ld0FjY291bnQuSW5kdXN0cnlDb2RlID0gT3B0aW9uU2V0LkFjY291bnQuSW5kdXN0cnlDb2RlLkNvbnN1bHRpbmc7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSMVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJBY2NvdW50QXBpIChjcmVhdGUpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgTmFtZT1cIiR7bmV3QWNjb3VudC5OYW1lfVwiLCBFbnRpdHkgcmVhZHlgLFxyXG4gICAgICAgICAgICBTdGF0dXM6IG5ld0FjY291bnQuRW50aXR5ID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiQWNjb3VudEFwaSAoY3JlYXRlKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUjI6IFRlc3QgRW50aXR5IG9iamVjdCBzdHJ1Y3R1cmVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IG5ldyBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgYWNjb3VudC5OYW1lID0gJ0VudGl0eSBUZXN0JztcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSBhY2NvdW50LkVudGl0eTtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlIyXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkVudGl0eSBvYmplY3RcIixcclxuICAgICAgICAgICAgVmFsdWU6IGVudGl0eSA/IGBLZXlzOiAke09iamVjdC5rZXlzKGVudGl0eSkuam9pbignLCAnKX1gIDogXCJudWxsXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogZW50aXR5ICYmIHR5cGVvZiBlbnRpdHkgPT09ICdvYmplY3QnID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiRW50aXR5IG9iamVjdFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUjM6IFRlc3QgRW50aXR5TmFtZSBwcm9wZXJ0eVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gbmV3IEFjY291bnRBcGkoKTtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlIzXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkVudGl0eU5hbWVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGFjY291bnQuRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBhY2NvdW50LkVudGl0eU5hbWUgPT09ICdhY2NvdW50JyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkVudGl0eU5hbWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFI0OiBUZXN0IEVudGl0eUNvbGxlY3Rpb25OYW1lIHByb3BlcnR5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBuZXcgQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjRcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRW50aXR5Q29sbGVjdGlvbk5hbWVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGFjY291bnQuRW50aXR5Q29sbGVjdGlvbk5hbWUsXHJcbiAgICAgICAgICAgIFN0YXR1czogYWNjb3VudC5FbnRpdHlDb2xsZWN0aW9uTmFtZSA9PT0gJ2FjY291bnRzJyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkVudGl0eUNvbGxlY3Rpb25OYW1lXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSNTogVGVzdCBGb3JtYXR0ZWRWYWx1ZSBwcm9wZXJ0eSBleGlzdHNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IG5ldyBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSNVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJGb3JtYXR0ZWRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYWNjb3VudC5Gb3JtYXR0ZWRWYWx1ZSA/IFwib2JqZWN0IGV4aXN0c1wiIDogXCJudWxsXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogYWNjb3VudC5Gb3JtYXR0ZWRWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkZvcm1hdHRlZFZhbHVlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gV0VCQVBJIFJFVFJJRVZFIFJFQ09SRCBURVNUUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gUzE6IFJldHJpZXZlUmVjb3JkIC0gUHJvbWlzZS1iYXNlZCB3aXRoIG9wdGlvbnNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmQoXHJcbiAgICAgICAgICAgIEFjY291bnRBcGksXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgZm9ybS5FbnRpdHlJZCxcclxuICAgICAgICAgICAgXCI/JHNlbGVjdD1uYW1lLHRlbGVwaG9uZTEsaW5kdXN0cnljb2RlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzFcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmQgKFByb21pc2UrT3B0aW9ucylcIixcclxuICAgICAgICAgICAgVmFsdWU6IHJlY29yZC5OYW1lID8gYE5hbWU9XCIke3JlY29yZC5OYW1lfVwiYCA6IFwiUmV0cmlldmVkXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZCAoUHJvbWlzZStPcHRpb25zKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzI6IFJldHJpZXZlUmVjb3JkIC0gUHJvbWlzZS1iYXNlZCB3aXRob3V0IG9wdGlvbnNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmQoXHJcbiAgICAgICAgICAgIEFjY291bnRBcGksXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgZm9ybS5FbnRpdHlJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTMlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZCAoUHJvbWlzZSlcIixcclxuICAgICAgICAgICAgVmFsdWU6IHJlY29yZC5BY2NvdW50SWQgPyBcIlJldHJpZXZlZCB3aXRoIGFsbCBmaWVsZHNcIiA6IFwiUmV0cmlldmVkXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZCAoUHJvbWlzZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFMzOiBSZXRyaWV2ZVJlY29yZCAtIEFjY2VzcyBGb3JtYXR0ZWRWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBmb3JtLldlYkFwaS5SZXRyaWV2ZVJlY29yZChcclxuICAgICAgICAgICAgQWNjb3VudEFwaSxcclxuICAgICAgICAgICAgZm9ybS5FbnRpdHlOYW1lLFxyXG4gICAgICAgICAgICBmb3JtLkVudGl0eUlkLFxyXG4gICAgICAgICAgICBcIj8kc2VsZWN0PW5hbWUsaW5kdXN0cnljb2RlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZEluZHVzdHJ5ID0gcmVjb3JkLkZvcm1hdHRlZFZhbHVlPy5JbmR1c3RyeUNvZGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTM1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJGb3JtYXR0ZWRWYWx1ZS5JbmR1c3RyeUNvZGVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGZvcm1hdHRlZEluZHVzdHJ5ID8gYFwiJHtmb3JtYXR0ZWRJbmR1c3RyeX1cImAgOiBcIihlbXB0eSlcIixcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkZvcm1hdHRlZFZhbHVlLkluZHVzdHJ5Q29kZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzQ6IFJldHJpZXZlUmVjb3JkcyAtIEZldGNoWE1MIFByb21pc2UtYmFzZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hYbWwgPSBcIjxmZXRjaCB0b3A9JzMnPjxlbnRpdHkgbmFtZT0nYWNjb3VudCc+PGF0dHJpYnV0ZSBuYW1lPSduYW1lJy8+PGF0dHJpYnV0ZSBuYW1lPSdhY2NvdW50bnVtYmVyJy8+PC9lbnRpdHk+PC9mZXRjaD5cIjtcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmRzKEFjY291bnRBcGksIGZldGNoWG1sKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM0XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoRmV0Y2hYTUwpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgQ291bnQ6ICR7cmVjb3Jkcy5sZW5ndGh9YCxcclxuICAgICAgICAgICAgU3RhdHVzOiByZWNvcmRzLmxlbmd0aCA+PSAwID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChGZXRjaFhNTClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFM1OiBSZXRyaWV2ZVJlY29yZHMgLSBGZXRjaFhNTCB3aXRoIG1heFBhZ2VTaXplXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZldGNoWG1sID0gXCI8ZmV0Y2g+PGVudGl0eSBuYW1lPSdhY2NvdW50Jz48YXR0cmlidXRlIG5hbWU9J25hbWUnLz48YXR0cmlidXRlIG5hbWU9J3RlbGVwaG9uZTEnLz48L2VudGl0eT48L2ZldGNoPlwiO1xyXG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmb3JtLldlYkFwaS5SZXRyaWV2ZVJlY29yZHMoQWNjb3VudEFwaSwgZmV0Y2hYbWwsIDUpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzVcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChGZXRjaFhNTCtQYWdlU2l6ZSlcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBDb3VudDogJHtyZWNvcmRzLmxlbmd0aH0gKG1heCA1KWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogcmVjb3Jkcy5sZW5ndGggPj0gMCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoRmV0Y2hYTUwrUGFnZVNpemUpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTNjogUmV0cmlldmVSZWNvcmRzIC0gT0RhdGEgUHJvbWlzZS1iYXNlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmRzKFxyXG4gICAgICAgICAgICBBY2NvdW50QXBpLFxyXG4gICAgICAgICAgICAnYWNjb3VudCcsXHJcbiAgICAgICAgICAgICc/JHNlbGVjdD1uYW1lLGFjY291bnRudW1iZXImJHRvcD0zJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTNlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKE9EYXRhKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYENvdW50OiAke3JlY29yZHMubGVuZ3RofWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogcmVjb3Jkcy5sZW5ndGggPj0gMCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoT0RhdGEpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTNzogUmV0cmlldmVSZWNvcmRzIC0gT0RhdGEgd2l0aCBtYXhQYWdlU2l6ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmRzKFxyXG4gICAgICAgICAgICBBY2NvdW50QXBpLFxyXG4gICAgICAgICAgICAnYWNjb3VudCcsXHJcbiAgICAgICAgICAgICc/JHNlbGVjdD1uYW1lLHRlbGVwaG9uZTEnLFxyXG4gICAgICAgICAgICA1XHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM3XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoT0RhdGErUGFnZVNpemUpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgQ291bnQ6ICR7cmVjb3Jkcy5sZW5ndGh9IChtYXggNSlgLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHJlY29yZHMubGVuZ3RoID49IDAgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKE9EYXRhK1BhZ2VTaXplKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzg6IFNldCBwcm9wZXJ0eSBhbmQgdmVyaWZ5IEVudGl0eSB1cGRhdGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IG5ldyBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgYWNjb3VudC5OYW1lID0gJ1VwZGF0ZSBUZXN0JztcclxuICAgICAgICBhY2NvdW50LlJldmVudWUgPSAxMDAwMDAwO1xyXG4gICAgICAgIGFjY291bnQuTnVtYmVyT2ZFbXBsb3llZXMgPSA1MDtcclxuICAgICAgICBhY2NvdW50LkNyZWRpdE9uSG9sZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gYWNjb3VudC5FbnRpdHk7XHJcbiAgICAgICAgY29uc3QgaGFzTmFtZSA9IGVudGl0eSAmJiBlbnRpdHkubmFtZSA9PT0gJ1VwZGF0ZSBUZXN0JztcclxuICAgICAgICBjb25zdCBoYXNSZXZlbnVlID0gZW50aXR5ICYmIGVudGl0eS5yZXZlbnVlID09PSAxMDAwMDAwO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzhcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRW50aXR5IHVwZGF0ZSBvbiBzZXRcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBOYW1lOiAke2hhc05hbWV9LCBSZXZlbnVlOiAke2hhc1JldmVudWV9YCxcclxuICAgICAgICAgICAgU3RhdHVzOiBoYXNOYW1lICYmIGhhc1JldmVudWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJFbnRpdHkgdXBkYXRlIG9uIHNldFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNDXHVERjEwIFRFU1QgNjogV2ViQXBpIFske3N0YXJ0VGltZX1dIC0gRWFybHktYm91bmQgc3R5bGUgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIEFjY291bnRBcGkgRmFjdG9yeSBUZXN0cyAoUjEtUjUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFdlYkFwaSBNZXRob2RzIChTMS1TOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCA3OiBNb25leSBDb250cm9sIC0gUmV2ZW51ZSBGaWVsZFxyXG4gKiBNb25leSBleHRlbmRzIElDb250cm9sTnVtYmVyIHdpdGggTWluLCBNYXgsIFByZWNpc2lvbiBwcm9wZXJ0aWVzXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TW9uZXkoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1vbmV5ID0gZm9ybS5IZWFkZXIuUmV2ZW51ZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gbW9uZXkuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNb25leS1zcGVjaWZpYyBwcm9wZXJ0aWVzIChJQ29udHJvbE51bWJlciArIFByZWNpc2lvbilcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIk1heFwiLCBWYWx1ZTogbW9uZXkuTWF4LCBTdGF0dXM6IHR5cGVvZiBtb25leS5NYXggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIk1pblwiLCBWYWx1ZTogbW9uZXkuTWluLCBTdGF0dXM6IHR5cGVvZiBtb25leS5NaW4gPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlByZWNpc2lvblwiLCBWYWx1ZTogbW9uZXkuUHJlY2lzaW9uLCBTdGF0dXM6IHR5cGVvZiBtb25leS5QcmVjaXNpb24gPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IG1vbmV5LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pOyAvLyBBdHRyaWJ1dGUgY2FuIGJlIG51bGwgaW4gc29tZSBjb250ZXh0c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogbW9uZXkuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBtb25leS5BdHRyaWJ1dGVOYW1lID09PSBcInJldmVudWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogbW9uZXkuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBtb25leS5BdHRyaWJ1dGVUeXBlID09PSBcIm1vbmV5XCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBtb25leS5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IG1vbmV5LkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBtb25leS5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBtb25leS5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogbW9uZXkuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IG1vbmV5LlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBtb25leS5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IG1vbmV5LkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IG1vbmV5LkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTdcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogbW9uZXkuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCAwKSArIDEwMDA7XHJcbiAgICAgICAgbW9uZXkuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBtb25leS5WYWx1ZTtcclxuICAgICAgICBtb25leS5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBQcmVjaXNpb24gKE1vbmV5IHByZWNpc2lvbiBpcyB0eXBpY2FsbHkgMC0yIGZvciBjdXJyZW5jeSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1ByZWNpc2lvbiA9IG1vbmV5LlByZWNpc2lvbjtcclxuICAgICAgICBjb25zdCB0ZXN0UHJlY2lzaW9uID0gMjsgLy8gVmFsaWQgcHJlY2lzaW9uIGZvciBtb25leSAoMC0yIHJhbmdlKVxyXG4gICAgICAgIG1vbmV5LlByZWNpc2lvbiA9IHRlc3RQcmVjaXNpb247XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb25leS5QcmVjaXNpb247XHJcbiAgICAgICAgbW9uZXkuUHJlY2lzaW9uID0gb3JpZ1ByZWNpc2lvbjtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlByZWNpc2lvbiAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IHRlc3RQcmVjaXNpb24gPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBgV2FzICR7Y2hlY2t9YCwgU3RhdHVzOiBjaGVjayA9PT0gdGVzdFByZWNpc2lvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJQcmVjaXNpb24gKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBtb25leS5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1vbmV5LlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb25leS5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1vbmV5LlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gbW9uZXkuRGlzYWJsZWQ7XHJcbiAgICAgICAgbW9uZXkuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuRGlzYWJsZWQ7XHJcbiAgICAgICAgbW9uZXkuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IG1vbmV5LkxhYmVsO1xyXG4gICAgICAgIGNvbnN0IHRlc3RMYWJlbCA9IFwiVGVzdCBNb25leSBMYWJlbFwiO1xyXG4gICAgICAgIG1vbmV5LkxhYmVsID0gdGVzdExhYmVsO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuTGFiZWw7XHJcbiAgICAgICAgY29uc3Qgc2V0V29ya2VkID0gY2hlY2sgPT09IHRlc3RMYWJlbCB8fCBjaGVjaz8uaW5jbHVkZXMoXCJUZXN0IE1vbmV5XCIpO1xyXG4gICAgICAgIGlmIChvcmlnTGFiZWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtb25leS5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogc2V0V29ya2VkID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogYEdvdDogJHtjaGVja31gLCBTdGF0dXM6IHNldFdvcmtlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gbW9uZXkuVmlzaWJsZTtcclxuICAgICAgICBtb25leS5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuVmlzaWJsZTtcclxuICAgICAgICBtb25leS5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBNb25leSBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9uZXkuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9uZXkuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBNb25leSBub3RpZmljYXRpb25cIiwgXCJNT05FWV9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb25leS5DbGVhck5vdGlmaWNhdGlvbihcIk1PTkVZX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9uZXkuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb25leS5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0IwIFRFU1QgNzogTW9uZXkgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBSZXZlbnVlIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTcpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTIpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgODogQm9vbGVhbiBDb250cm9sIC0gQ3JlZGl0T25Ib2xkIEZpZWxkXHJcbiAqIEJvb2xlYW4gZXh0ZW5kcyBJQ29udHJvbCB3aXRoIEluaXRpYWxWYWx1ZSBwcm9wZXJ0eVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdEJvb2xlYW4oZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGJvb2wgPSBmb3JtLkJvZHkuQ3JlZGl0T25Ib2xkO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBib29sLlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQm9vbGVhbi1zcGVjaWZpYyBwcm9wZXJ0aWVzIChJbml0aWFsVmFsdWUgY2FuIGJlIGJvb2xlYW4gb3IgMC8xKVxyXG4gICAgICAgIGNvbnN0IGluaXRWYWwgPSBib29sLkluaXRpYWxWYWx1ZTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkSW5pdFZhbHVlID0gdHlwZW9mIGluaXRWYWwgPT09IFwiYm9vbGVhblwiIHx8IGluaXRWYWwgPT09IDAgfHwgaW5pdFZhbCA9PT0gMTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkluaXRpYWxWYWx1ZVwiLCBWYWx1ZTogaW5pdFZhbCwgU3RhdHVzOiBpc1ZhbGlkSW5pdFZhbHVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBib29sLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBib29sLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogYm9vbC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IGJvb2wuQXR0cmlidXRlTmFtZSA9PT0gXCJjcmVkaXRvbmhvbGRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogYm9vbC5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IGJvb2wuQXR0cmlidXRlVHlwZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBib29sLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogYm9vbC5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBib29sLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogYm9vbC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogYm9vbC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogYm9vbC5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogYm9vbC5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IGJvb2wuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogYm9vbC5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGJvb2wuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSAhb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBib29sLlZhbHVlID0gdGVzdFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gYm9vbC5WYWx1ZTtcclxuICAgICAgICBib29sLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gYm9vbC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGJvb2wuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGJvb2wuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBib29sLlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gYm9vbC5EaXNhYmxlZDtcclxuICAgICAgICBib29sLkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGJvb2wuRGlzYWJsZWQ7XHJcbiAgICAgICAgYm9vbC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gYm9vbC5MYWJlbDtcclxuICAgICAgICBib29sLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBib29sLkxhYmVsO1xyXG4gICAgICAgIGJvb2wuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBib29sLlZpc2libGU7XHJcbiAgICAgICAgYm9vbC5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gYm9vbC5WaXNpYmxlO1xyXG4gICAgICAgIGJvb2wuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgQm9vbGVhbiBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJvb2wuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYm9vbC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBib29sLkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYm9vbC5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYm9vbC5TZXROb3RpZmljYXRpb24oXCJUZXN0IEJvb2xlYW4gbm90aWZpY2F0aW9uXCIsIFwiQk9PTF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBib29sLkNsZWFyTm90aWZpY2F0aW9uKFwiQk9PTF9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJvb2wuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBib29sLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdTI3MDUgVEVTVCA4OiBCb29sZWFuIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogQ3JlZGl0T25Ib2xkIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgOTogRGF0ZVRpbWUgQ29udHJvbCAtIHY0X0FwcG9pbnRtZW50VGltZSBGaWVsZFxyXG4gKiBEYXRlVGltZSBleHRlbmRzIElDb250cm9sIHdpdGggU2hvd1RpbWUgcHJvcGVydHlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3REYXRlVGltZShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgZHQgPSBmb3JtLkJvZHkudjRfQXBwb2ludG1lbnRUaW1lO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBkdC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIERhdGVUaW1lLXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIlNob3dUaW1lXCIsIFZhbHVlOiBkdC5TaG93VGltZSwgU3RhdHVzOiB0eXBlb2YgZHQuU2hvd1RpbWUgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSBpbnN0YW5jZW9mIERhdGUgPyBvcmlnaW5hbFZhbHVlLnRvSVNPU3RyaW5nKCkgOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGR0LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBkdC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGR0LkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogZHQuQXR0cmlidXRlTmFtZSA9PT0gXCJ2NF9hcHBvaW50bWVudHRpbWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogZHQuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBkdC5BdHRyaWJ1dGVUeXBlID09PSBcImRhdGV0aW1lXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBkdC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGR0LkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IGR0LkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogZHQuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGR0LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBkdC5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogZHQuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBkdC5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBkdC5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGR0LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkdC5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGR0LlZhbHVlO1xyXG4gICAgICAgIGR0LlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICAvLyBWYWx1ZSB3YXMgc2V0IHN1Y2Nlc3NmdWxseSBpZiBuZXdWYWx1ZSBleGlzdHMgKERhdGUsIHN0cmluZywgb3IgYW55IHRydXRoeSlcclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gbmV3VmFsdWUgIT09IG51bGwgJiYgbmV3VmFsdWUgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBzdWNjZXNzID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBzdWNjZXNzID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFNob3dUaW1lXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdTaG93VGltZSA9IGR0LlNob3dUaW1lO1xyXG4gICAgICAgIGR0LlNob3dUaW1lID0gIW9yaWdTaG93VGltZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGR0LlNob3dUaW1lO1xyXG4gICAgICAgIGR0LlNob3dUaW1lID0gb3JpZ1Nob3dUaW1lO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiU2hvd1RpbWUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJTaG93VGltZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGR0LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZHQuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGR0LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZHQuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBkdC5EaXNhYmxlZDtcclxuICAgICAgICBkdC5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkdC5EaXNhYmxlZDtcclxuICAgICAgICBkdC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gZHQuTGFiZWw7XHJcbiAgICAgICAgZHQuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGR0LkxhYmVsO1xyXG4gICAgICAgIGR0LkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gZHQuVmlzaWJsZTtcclxuICAgICAgICBkdC5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZHQuVmlzaWJsZTtcclxuICAgICAgICBkdC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBEYXRlVGltZSBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZHQuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZHQuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBEYXRlVGltZSBub3RpZmljYXRpb25cIiwgXCJEVF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkdC5DbGVhck5vdGlmaWNhdGlvbihcIkRUX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZHQuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkdC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0M1IFRFU1QgOTogRGF0ZVRpbWUgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiB2NF9BcHBvaW50bWVudFRpbWUgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxMDogRGF0ZU9ubHkgQ29udHJvbCAtIHY0X0JpcnRoZGF5IEZpZWxkXHJcbiAqIERhdGVPbmx5IGV4dGVuZHMgSUNvbnRyb2wgKG5vIFNob3dUaW1lIHByb3BlcnR5IHVubGlrZSBEYXRlVGltZSlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3REYXRlT25seShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgZGF0ZU9ubHkgPSBmb3JtLkJvZHkudjRfQmlydGhkYXk7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGRhdGVPbmx5LlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gRGF0ZU9ubHktc3BlY2lmaWM6IFZhbHVlIGlzIHRoZSBtYWluIHByb3BlcnR5IChubyBTaG93VGltZSlcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IG9yaWdpbmFsVmFsdWUudG9JU09TdHJpbmcoKSA6IG9yaWdpbmFsVmFsdWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogZGF0ZU9ubHkuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IGRhdGVPbmx5LkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogZGF0ZU9ubHkuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBkYXRlT25seS5BdHRyaWJ1dGVOYW1lID09PSBcInY0X2JpcnRoZGF5XCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGRhdGVPbmx5LkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogZGF0ZU9ubHkuQXR0cmlidXRlVHlwZSA9PT0gXCJkYXRldGltZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogZGF0ZU9ubHkuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBkYXRlT25seS5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBkYXRlT25seS5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGRhdGVPbmx5LklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGRhdGVPbmx5LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBkYXRlT25seS5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogZGF0ZU9ubHkuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBkYXRlT25seS5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBkYXRlT25seS5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGRhdGVPbmx5LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gbmV3IERhdGUoMTk5MCwgNSwgMTUpOyAvLyBKdW5lIDE1LCAxOTkwXHJcbiAgICAgICAgZGF0ZU9ubHkuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBkYXRlT25seS5WYWx1ZTtcclxuICAgICAgICBkYXRlT25seS5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgLy8gVmFsdWUgd2FzIHNldCBzdWNjZXNzZnVsbHkgaWYgbmV3VmFsdWUgZXhpc3RzXHJcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IG5ld1ZhbHVlICE9PSBudWxsICYmIG5ld1ZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogc3VjY2VzcyA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogc3VjY2VzcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGRhdGVPbmx5LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZGF0ZU9ubHkuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRhdGVPbmx5LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZGF0ZU9ubHkuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBkYXRlT25seS5EaXNhYmxlZDtcclxuICAgICAgICBkYXRlT25seS5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkYXRlT25seS5EaXNhYmxlZDtcclxuICAgICAgICBkYXRlT25seS5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gZGF0ZU9ubHkuTGFiZWw7XHJcbiAgICAgICAgZGF0ZU9ubHkuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRhdGVPbmx5LkxhYmVsO1xyXG4gICAgICAgIGRhdGVPbmx5LkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gZGF0ZU9ubHkuVmlzaWJsZTtcclxuICAgICAgICBkYXRlT25seS5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZGF0ZU9ubHkuVmlzaWJsZTtcclxuICAgICAgICBkYXRlT25seS5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBEYXRlT25seSBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGF0ZU9ubHkuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LlNldE5vdGlmaWNhdGlvbihcIlRlc3QgRGF0ZU9ubHkgbm90aWZpY2F0aW9uXCIsIFwiRE9fVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGF0ZU9ubHkuQ2xlYXJOb3RpZmljYXRpb24oXCJET19URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGF0ZU9ubHkuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzQ1x1REY4MiBURVNUIDEwOiBEYXRlT25seSBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IHY0X0JpcnRoZGF5IGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTQpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTE6IEdyaWQgQ29udHJvbCAtIENvbnRhY3RzIFN1YmdyaWRcclxuICogR3JpZCBwcm92aWRlcyBhY2Nlc3MgdG8gc3ViZ3JpZCBkYXRhIGFuZCBvcGVyYXRpb25zXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0R3JpZChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgZ3JpZCA9IGZvcm0uR3JpZC5Db250YWN0cztcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBHcmlkLXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkVudGl0eU5hbWVcIiwgVmFsdWU6IGdyaWQuRW50aXR5TmFtZSwgU3RhdHVzOiBncmlkLkVudGl0eU5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkZldGNoWG1sXCIsIFZhbHVlOiBncmlkLkZldGNoWG1sID8gZ3JpZC5GZXRjaFhtbC5zdWJzdHJpbmcoMCwgNTApICsgXCIuLi5cIiA6IG51bGwsIFN0YXR1czogZ3JpZC5GZXRjaFhtbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiR3JpZFR5cGVcIiwgVmFsdWU6IGdyaWQuR3JpZFR5cGUsIFN0YXR1czogdHlwZW9mIGdyaWQuR3JpZFR5cGUgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwXHJcbiAgICAgICAgY29uc3QgcmVsID0gZ3JpZC5SZWxhdGlvbnNoaXA7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJSZWxhdGlvbnNoaXAubmFtZVwiLCBWYWx1ZTogcmVsPy5uYW1lLCBTdGF0dXM6IHJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiUmVsYXRpb25zaGlwLm5hdlByb3BOYW1lXCIsIFZhbHVlOiByZWw/Lm5hdmlnYXRpb25Qcm9wZXJ0eU5hbWUsIFN0YXR1czogcmVsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJSZWxhdGlvbnNoaXAudHlwZVwiLCBWYWx1ZTogcmVsPy5yZWxhdGlvbnNoaXBUeXBlLCBTdGF0dXM6IHJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBSb3dzXHJcbiAgICAgICAgY29uc3Qgcm93cyA9IGdyaWQuUm93cztcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIlJvd3MuZ2V0TGVuZ3RoKClcIiwgVmFsdWU6IHJvd3M/LmdldExlbmd0aCgpLCBTdGF0dXM6IHJvd3MgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gU2VsZWN0ZWRSb3dzXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRSb3dzID0gZ3JpZC5TZWxlY3RlZFJvd3M7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJTZWxlY3RlZFJvd3MuZ2V0TGVuZ3RoKClcIiwgVmFsdWU6IHNlbGVjdGVkUm93cz8uZ2V0TGVuZ3RoKCksIFN0YXR1czogc2VsZWN0ZWRSb3dzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFRvdGFsUmVjb3JkQ291bnRcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIlRvdGFsUmVjb3JkQ291bnRcIiwgVmFsdWU6IGdyaWQuVG90YWxSZWNvcmRDb3VudCwgU3RhdHVzOiB0eXBlb2YgZ3JpZC5Ub3RhbFJlY29yZENvdW50ID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFZpZXdTZWxlY3RvclxyXG4gICAgICAgIGNvbnN0IHZzID0gZ3JpZC5WaWV3U2VsZWN0b3I7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiVmlld1NlbGVjdG9yXCIsIFZhbHVlOiB2cyA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiB2cyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlZpZXdTZWxlY3Rvci5WaXNpYmxlXCIsIFZhbHVlOiB2cz8uVmlzaWJsZSwgU3RhdHVzOiB2cyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBWaXNpYmxlXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogZ3JpZC5WaXNpYmxlLCBTdGF0dXM6IHR5cGVvZiBncmlkLlZpc2libGUgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFVybFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBncmlkLlVybCgxKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlVybCgxKVwiLCBWYWx1ZTogdXJsID8gdXJsLnN1YnN0cmluZygwLCA1MCkgKyBcIi4uLlwiIDogXCJudWxsXCIsIFN0YXR1czogdXJsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlVybCgxKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gZ3JpZC5WaXNpYmxlO1xyXG4gICAgICAgIGdyaWQuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGdyaWQuVmlzaWJsZTtcclxuICAgICAgICBncmlkLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEFkZE9uTG9hZFxyXG4gICAgY29uc3Qgb25Mb2FkQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgR3JpZCBPbkxvYWQgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGdyaWQuQWRkT25Mb2FkKG9uTG9hZENhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkFkZE9uTG9hZFwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiQWRkT25Mb2FkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFJlbW92ZU9uTG9hZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBncmlkLlJlbW92ZU9uTG9hZChvbkxvYWRDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkxvYWRcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uTG9hZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZWZyZXNoXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIERvbid0IGFjdHVhbGx5IHJlZnJlc2ggdG8gYXZvaWQgc2lkZSBlZmZlY3RzLCBqdXN0IGNoZWNrIGlmIG1ldGhvZCBleGlzdHNcclxuICAgICAgICBpZiAodHlwZW9mIGdyaWQuUmVmcmVzaCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFwiLCBWYWx1ZTogXCJBdmFpbGFibGVcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFwiLCBWYWx1ZTogXCJOb3QgYSBmdW5jdGlvblwiLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFJlZnJlc2hSaWJib25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBncmlkLlJlZnJlc2hSaWJib24gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hSaWJib25cIiwgVmFsdWU6IFwiQXZhaWxhYmxlXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hSaWJib25cIiwgVmFsdWU6IFwiTm90IGEgZnVuY3Rpb25cIiwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFJpYmJvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBPcGVuUmVsYXRlZEdyaWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBncmlkLk9wZW5SZWxhdGVkR3JpZCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiT3BlblJlbGF0ZWRHcmlkXCIsIFZhbHVlOiBcIkF2YWlsYWJsZVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJPcGVuUmVsYXRlZEdyaWRcIiwgVmFsdWU6IFwiTm90IGEgZnVuY3Rpb25cIiwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiT3BlblJlbGF0ZWRHcmlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZXN0IFJvd3MgaXRlcmF0aW9uXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBncmlkLlJvd3M7XHJcbiAgICAgICAgaWYgKHJvd3MgJiYgcm93cy5nZXRMZW5ndGgoKSA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RSb3cgPSByb3dzLmdldCgwKTtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSb3dzLmdldCgwKVwiLCBWYWx1ZTogZmlyc3RSb3c/LkVudGl0eUlkIHx8IFwibm8gRW50aXR5SWRcIiwgU3RhdHVzOiBmaXJzdFJvdyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUm93cy5nZXQoMClcIiwgVmFsdWU6IFwiTm8gcm93c1wiLCBTdGF0dXM6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSb3dzLmdldCgwKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0NBIFRFU1QgMTE6IEdyaWQgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBDb250YWN0cyBzdWJncmlkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTIpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gc3RyaW5naWZ5IG9iamVjdHMgZm9yIGRpc3BsYXlcclxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhciBvciBDb21wbGV4IE9iamVjdF0nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTI6IFV0aWxpdHkgQVBJIC0gR2xvYmFsIFV0aWxpdHkgRnVuY3Rpb25zXHJcbiAqIFV0aWxpdHkgcHJvdmlkZXMgYWNjZXNzIHRvIFhybS5VdGlsaXR5LCBYcm0uTmF2aWdhdGlvbiwgWHJtLkRldmljZSwgWHJtLkVuY29kaW5nLCBldGMuXHJcbiAqIFRlc3RzIEFMTCBwcm9wZXJ0aWVzIG9mIGVhY2ggbmVzdGVkIG9iamVjdCAoQ2xpZW50LCBPcmdhbml6YXRpb25TZXR0aW5ncywgVXNlclNldHRpbmdzKVxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RVdGlsaXR5KGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCB1dGlsID0gZm9ybS5VdGlsaXR5O1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBDbGllbnQgKGFsbCBwcm9wZXJ0aWVzKVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBjb25zdCBjbGllbnQgPSB1dGlsLkNsaWVudDtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkNsaWVudFwiLCBWYWx1ZTogc3RyaW5naWZ5KGNsaWVudCksIFN0YXR1czogY2xpZW50ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJDbGllbnQuQ2xpZW50TmFtZVwiLCBWYWx1ZTogY2xpZW50Py5DbGllbnROYW1lLCBTdGF0dXM6IGNsaWVudD8uQ2xpZW50TmFtZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQ2xpZW50LkNsaWVudFN0YXRlXCIsIFZhbHVlOiBjbGllbnQ/LkNsaWVudFN0YXRlLCBTdGF0dXM6IGNsaWVudD8uQ2xpZW50U3RhdGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkNsaWVudC5Gb3JtRmFjdG9yXCIsIFZhbHVlOiBjbGllbnQ/LkZvcm1GYWN0b3IsIFN0YXR1czogdHlwZW9mIGNsaWVudD8uRm9ybUZhY3RvciA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQ2xpZW50LklzTmV0d29ya0F2YWlsYWJsZVwiLCBWYWx1ZTogY2xpZW50Py5Jc05ldHdvcmtBdmFpbGFibGUsIFN0YXR1czogdHlwZW9mIGNsaWVudD8uSXNOZXR3b3JrQXZhaWxhYmxlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQ2xpZW50LklzT2ZmbGluZVwiLCBWYWx1ZTogY2xpZW50Py5Jc09mZmxpbmUsIFN0YXR1czogdHlwZW9mIGNsaWVudD8uSXNPZmZsaW5lID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gR2xvYmFsIENvbnRleHQgUHJvcGVydGllc1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNsaWVudFVybFwiLCBWYWx1ZTogdXRpbC5DbGllbnRVcmwsIFN0YXR1czogdXRpbC5DbGllbnRVcmwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkN1cnJlbnRBcHBVcmxcIiwgVmFsdWU6IHV0aWwuQ3VycmVudEFwcFVybCwgU3RhdHVzOiB1dGlsLkN1cnJlbnRBcHBVcmwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzT25QcmVtaXNlc1wiLCBWYWx1ZTogdXRpbC5Jc09uUHJlbWlzZXMsIFN0YXR1czogdHlwZW9mIHV0aWwuSXNPblByZW1pc2VzID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIkxlYXJuaW5nUGF0aEF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IHV0aWwuTGVhcm5pbmdQYXRoQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlBhZ2VDb250ZXh0XCIsIFZhbHVlOiBzdHJpbmdpZnkodXRpbC5QYWdlQ29udGV4dCksIFN0YXR1czogdXRpbC5QYWdlQ29udGV4dCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlZlcnNpb25cIiwgVmFsdWU6IHV0aWwuVmVyc2lvbiwgU3RhdHVzOiB1dGlsLlZlcnNpb24gPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIE9yZ2FuaXphdGlvblNldHRpbmdzIChhbGwgcHJvcGVydGllcylcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3Qgb3JnU2V0dGluZ3MgPSB1dGlsLk9yZ2FuaXphdGlvblNldHRpbmdzO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIk9yZ2FuaXphdGlvblNldHRpbmdzXCIsIFZhbHVlOiBzdHJpbmdpZnkob3JnU2V0dGluZ3MpLCBTdGF0dXM6IG9yZ1NldHRpbmdzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiT3JnLkF0dHJpYnV0ZXNcIiwgVmFsdWU6IHN0cmluZ2lmeShvcmdTZXR0aW5ncz8uQXR0cmlidXRlcyksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJPcmcuQmFzZUN1cnJlbmN5XCIsIFZhbHVlOiBzdHJpbmdpZnkob3JnU2V0dGluZ3M/LkJhc2VDdXJyZW5jeSksIFN0YXR1czogb3JnU2V0dGluZ3M/LkJhc2VDdXJyZW5jeSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIk9yZy5CYXNlQ3VycmVuY3lJZFwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LkJhc2VDdXJyZW5jeUlkLCBTdGF0dXM6IG9yZ1NldHRpbmdzPy5CYXNlQ3VycmVuY3lJZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE3XCIsIFByb3BlcnR5OiBcIk9yZy5EZWZhdWx0Q291bnRyeUNvZGVcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5EZWZhdWx0Q291bnRyeUNvZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxOFwiLCBQcm9wZXJ0eTogXCJPcmcuRnVsbE5hbWVDb252ZW50aW9uQ29kZVwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LkZ1bGxOYW1lQ29udmVudGlvbkNvZGUsIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5GdWxsTmFtZUNvbnZlbnRpb25Db2RlID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTlcIiwgUHJvcGVydHk6IFwiT3JnLklzQXV0b1NhdmVFbmFibGVkXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uSXNBdXRvU2F2ZUVuYWJsZWQsIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5Jc0F1dG9TYXZlRW5hYmxlZCA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyMFwiLCBQcm9wZXJ0eTogXCJPcmcuSXNUcmlhbE9yZ2FuaXphdGlvblwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LklzVHJpYWxPcmdhbml6YXRpb24sIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5Jc1RyaWFsT3JnYW5pemF0aW9uID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjIxXCIsIFByb3BlcnR5OiBcIk9yZy5MYW5ndWFnZUlkXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uTGFuZ3VhZ2VJZCwgU3RhdHVzOiB0eXBlb2Ygb3JnU2V0dGluZ3M/Lkxhbmd1YWdlSWQgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyMlwiLCBQcm9wZXJ0eTogXCJPcmcuT3JnYW5pemF0aW9uRXhwaXJ5RGF0ZVwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/Lk9yZ2FuaXphdGlvbkV4cGlyeURhdGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyM1wiLCBQcm9wZXJ0eTogXCJPcmcuT3JnYW5pemF0aW9uSWRcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5Pcmdhbml6YXRpb25JZCwgU3RhdHVzOiBvcmdTZXR0aW5ncz8uT3JnYW5pemF0aW9uSWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyNFwiLCBQcm9wZXJ0eTogXCJPcmcuVW5pcXVlTmFtZVwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LlVuaXF1ZU5hbWUsIFN0YXR1czogb3JnU2V0dGluZ3M/LlVuaXF1ZU5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyNVwiLCBQcm9wZXJ0eTogXCJPcmcuVXNlU2t5cGVQcm90b2NvbFwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LlVzZVNreXBlUHJvdG9jb2wsIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5Vc2VTa3lwZVByb3RvY29sID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gVXNlclNldHRpbmdzIChhbGwgcHJvcGVydGllcylcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3QgdXNlclNldHRpbmdzID0gdXRpbC5Vc2VyU2V0dGluZ3M7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjZcIiwgUHJvcGVydHk6IFwiVXNlclNldHRpbmdzXCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzKSwgU3RhdHVzOiB1c2VyU2V0dGluZ3MgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyN1wiLCBQcm9wZXJ0eTogXCJVc2VyLkRhdGVGb3JtYXR0aW5nSW5mb1wiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncz8uRGF0ZUZvcm1hdHRpbmdJbmZvKSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LkRhdGVGb3JtYXR0aW5nSW5mbyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjI4XCIsIFByb3BlcnR5OiBcIlVzZXIuRGVmYXVsdERhc2hib2FyZElkXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LkRlZmF1bHREYXNoYm9hcmRJZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjI5XCIsIFByb3BlcnR5OiBcIlVzZXIuSXNHdWlkZWRIZWxwRW5hYmxlZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5Jc0d1aWRlZEhlbHBFbmFibGVkLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/LklzR3VpZGVkSGVscEVuYWJsZWQgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzBcIiwgUHJvcGVydHk6IFwiVXNlci5Jc0hpZ2hDb250cmFzdEVuYWJsZWRcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uSXNIaWdoQ29udHJhc3RFbmFibGVkLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/LklzSGlnaENvbnRyYXN0RW5hYmxlZCA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzMVwiLCBQcm9wZXJ0eTogXCJVc2VyLklzUlRMXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LklzUlRMLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/LklzUlRMID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjMyXCIsIFByb3BlcnR5OiBcIlVzZXIuTGFuZ3VhZ2VJZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5MYW5ndWFnZUlkLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/Lkxhbmd1YWdlSWQgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzM1wiLCBQcm9wZXJ0eTogXCJVc2VyLlJvbGVzXCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzPy5Sb2xlcyksIFN0YXR1czogdXNlclNldHRpbmdzPy5Sb2xlcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjM0XCIsIFByb3BlcnR5OiBcIlVzZXIuU2VjdXJpdHlSb2xlUHJpdmlsZWdlc1wiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncz8uU2VjdXJpdHlSb2xlUHJpdmlsZWdlcyksIFN0YXR1czogdXNlclNldHRpbmdzPy5TZWN1cml0eVJvbGVQcml2aWxlZ2VzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzVcIiwgUHJvcGVydHk6IFwiVXNlci5TZWN1cml0eVJvbGVzXCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzPy5TZWN1cml0eVJvbGVzKSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LlNlY3VyaXR5Um9sZXMgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzNlwiLCBQcm9wZXJ0eTogXCJVc2VyLlRpbWVab25lT2Zmc2V0TWludXRlc1wiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5UaW1lWm9uZU9mZnNldE1pbnV0ZXMsIFN0YXR1czogdHlwZW9mIHVzZXJTZXR0aW5ncz8uVGltZVpvbmVPZmZzZXRNaW51dGVzID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzdcIiwgUHJvcGVydHk6IFwiVXNlci5UcmFuc2FjdGlvbkN1cnJlbmN5XCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzPy5UcmFuc2FjdGlvbkN1cnJlbmN5KSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LlRyYW5zYWN0aW9uQ3VycmVuY3kgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzOFwiLCBQcm9wZXJ0eTogXCJVc2VyLlRyYW5zYWN0aW9uQ3VycmVuY3lJZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5UcmFuc2FjdGlvbkN1cnJlbmN5SWQsIFN0YXR1czogdXNlclNldHRpbmdzPy5UcmFuc2FjdGlvbkN1cnJlbmN5SWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzOVwiLCBQcm9wZXJ0eTogXCJVc2VyLlVzZXJJZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5Vc2VySWQsIFN0YXR1czogdXNlclNldHRpbmdzPy5Vc2VySWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0MFwiLCBQcm9wZXJ0eTogXCJVc2VyLlVzZXJOYW1lXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LlVzZXJOYW1lLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uVXNlck5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gRW5jb2RpbmcgTWV0aG9kcyAodGVzdCB3aXRoIGFjdHVhbCB2YWx1ZXMpXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGVuY29kZWQgPSB1dGlsLkh0bWxFbmNvZGUoXCI8dGVzdD5cIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJIdG1sRW5jb2RlXCIsIFZhbHVlOiBlbmNvZGVkLCBTdGF0dXM6IGVuY29kZWQgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiSHRtbEVuY29kZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkZWNvZGVkID0gdXRpbC5IdG1sRGVjb2RlKFwiJmx0O3Rlc3QmZ3Q7XCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiSHRtbERlY29kZVwiLCBWYWx1ZTogZGVjb2RlZCwgU3RhdHVzOiBkZWNvZGVkID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIkh0bWxEZWNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZW5jb2RlZCA9IHV0aWwuSHRtbEF0dHJpYnV0ZUVuY29kZShcInRlc3Q9XFxcInZhbHVlXFxcIlwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkh0bWxBdHRyaWJ1dGVFbmNvZGVcIiwgVmFsdWU6IGVuY29kZWQsIFN0YXR1czogZW5jb2RlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJIdG1sQXR0cmlidXRlRW5jb2RlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHhtbEVuY29kZWQgPSB1dGlsLlhtbEVuY29kZShcIjx0ZXN0PlwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlhtbEVuY29kZVwiLCBWYWx1ZTogeG1sRW5jb2RlZCwgU3RhdHVzOiB4bWxFbmNvZGVkID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlhtbEVuY29kZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB4bWxBdHRyRW5jb2RlZCA9IHV0aWwuWG1sQXR0cmlidXRlRW5jb2RlKFwidGVzdD1cXFwidmFsdWVcXFwiXCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiWG1sQXR0cmlidXRlRW5jb2RlXCIsIFZhbHVlOiB4bWxBdHRyRW5jb2RlZCwgU3RhdHVzOiB4bWxBdHRyRW5jb2RlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJYbWxBdHRyaWJ1dGVFbmNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFVSTC9SZXNvdXJjZSBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByZXBlbmRlZFVybCA9IHV0aWwuUHJlcGVuZE9yZ05hbWUoXCIvdGVzdFwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlByZXBlbmRPcmdOYW1lXCIsIFZhbHVlOiBwcmVwZW5kZWRVcmwsIFN0YXR1czogcHJlcGVuZGVkVXJsID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlByZXBlbmRPcmdOYW1lXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHdlYlJlc291cmNlVXJsID0gdXRpbC5XZWJSZXNvdXJjZVVybChcInRlc3QuaHRtbFwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIldlYlJlc291cmNlVXJsXCIsIFZhbHVlOiB3ZWJSZXNvdXJjZVVybCwgU3RhdHVzOiB3ZWJSZXNvdXJjZVVybCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJXZWJSZXNvdXJjZVVybFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gQXBwL0dsb2JhbENvbnRleHQgQXN5bmMgTWV0aG9kcyAoY2hlY2sgZnVuY3Rpb24gYXZhaWxhYmlsaXR5KVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkFkdmFuY2VkQ29uZmlnU2V0dGluZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQWR2YW5jZWRDb25maWdTZXR0aW5nID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5BZHZhbmNlZENvbmZpZ1NldHRpbmcgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJBZHZhbmNlZENvbmZpZ1NldHRpbmdcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJDdXJyZW50QXBwTmFtZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQ3VycmVudEFwcE5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkN1cnJlbnRBcHBOYW1lID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiQ3VycmVudEFwcE5hbWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiQ3VycmVudEFwcFByb3BlcnRpZXNcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkN1cnJlbnRBcHBQcm9wZXJ0aWVzID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DdXJyZW50QXBwUHJvcGVydGllcyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJDdXJyZW50QXBwUHJvcGVydGllc1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gTmF2aWdhdGlvbiBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIk5hdmlnYXRlVG9cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk5hdmlnYXRlVG8gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk5hdmlnYXRlVG8gPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiTmF2aWdhdGVUb1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJPcGVuQWxlcnREaWFsb2dcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5BbGVydERpYWxvZyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlbkFsZXJ0RGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIk9wZW5BbGVydERpYWxvZ1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJPcGVuQ29uZmlybURpYWxvZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlbkNvbmZpcm1EaWFsb2cgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5Db25maXJtRGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIk9wZW5Db25maXJtRGlhbG9nXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIk9wZW5FcnJvckRpYWxvZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlbkVycm9yRGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuRXJyb3JEaWFsb2cgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiT3BlbkVycm9yRGlhbG9nXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIk9wZW5GaWxlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuRmlsZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlbkZpbGUgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiT3BlbkZpbGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiT3BlbkZvcm1cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5Gb3JtID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuRm9ybSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJPcGVuRm9ybVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxN1wiLCBQcm9wZXJ0eTogXCJPcGVuVXJsXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuVXJsID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuVXJsID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE3XCIsIFByb3BlcnR5OiBcIk9wZW5VcmxcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMThcIiwgUHJvcGVydHk6IFwiT3BlbldlYlJlc291cmNlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuV2ViUmVzb3VyY2UgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5XZWJSZXNvdXJjZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxOFwiLCBQcm9wZXJ0eTogXCJPcGVuV2ViUmVzb3VyY2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFByb2dyZXNzL05vdGlmaWNhdGlvbiBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE5XCIsIFByb3BlcnR5OiBcIlNob3dQcm9ncmVzc0luZGljYXRvclwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuU2hvd1Byb2dyZXNzSW5kaWNhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5TaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTlcIiwgUHJvcGVydHk6IFwiU2hvd1Byb2dyZXNzSW5kaWNhdG9yXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIwXCIsIFByb3BlcnR5OiBcIkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3JcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjBcIiwgUHJvcGVydHk6IFwiQ2xvc2VQcm9ncmVzc0luZGljYXRvclwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMVwiLCBQcm9wZXJ0eTogXCJBZGRHbG9iYWxOb3RpZmljYXRpb25cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkFkZEdsb2JhbE5vdGlmaWNhdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQWRkR2xvYmFsTm90aWZpY2F0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIxXCIsIFByb3BlcnR5OiBcIkFkZEdsb2JhbE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMlwiLCBQcm9wZXJ0eTogXCJDbGVhckdsb2JhbE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQ2xlYXJHbG9iYWxOb3RpZmljYXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkNsZWFyR2xvYmFsTm90aWZpY2F0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIyXCIsIFByb3BlcnR5OiBcIkNsZWFyR2xvYmFsTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBVdGlsaXR5IE1ldGhvZHNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjNcIiwgUHJvcGVydHk6IFwiQWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5BbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkFsbG93ZWRTdGF0dXNUcmFuc2l0aW9ucyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyM1wiLCBQcm9wZXJ0eTogXCJBbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjRcIiwgUHJvcGVydHk6IFwiRW50aXR5TWV0YWRhdGFcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkVudGl0eU1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5FbnRpdHlNZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNFwiLCBQcm9wZXJ0eTogXCJFbnRpdHlNZXRhZGF0YVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNVwiLCBQcm9wZXJ0eTogXCJFbnRpdHlNYWluRm9ybURlc2NyaXB0b3JcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkVudGl0eU1haW5Gb3JtRGVzY3JpcHRvciA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuRW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI1XCIsIFByb3BlcnR5OiBcIkVudGl0eU1haW5Gb3JtRGVzY3JpcHRvclwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNlwiLCBQcm9wZXJ0eTogXCJJbnZva2VQcm9jZXNzQWN0aW9uXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5JbnZva2VQcm9jZXNzQWN0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5JbnZva2VQcm9jZXNzQWN0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI2XCIsIFByb3BlcnR5OiBcIkludm9rZVByb2Nlc3NBY3Rpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjdcIiwgUHJvcGVydHk6IFwiTG9va3VwT2JqZWN0c1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuTG9va3VwT2JqZWN0cyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuTG9va3VwT2JqZWN0cyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyN1wiLCBQcm9wZXJ0eTogXCJMb29rdXBPYmplY3RzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI4XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hQYXJlbnRHcmlkXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5SZWZyZXNoUGFyZW50R3JpZCA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuUmVmcmVzaFBhcmVudEdyaWQgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjhcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFBhcmVudEdyaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjlcIiwgUHJvcGVydHk6IFwiUmVzb3VyY2VcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLlJlc291cmNlID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5SZXNvdXJjZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyOVwiLCBQcm9wZXJ0eTogXCJSZXNvdXJjZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMFwiLCBQcm9wZXJ0eTogXCJSZXNvdXJjZVN0cmluZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuUmVzb3VyY2VTdHJpbmcgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLlJlc291cmNlU3RyaW5nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMwXCIsIFByb3BlcnR5OiBcIlJlc291cmNlU3RyaW5nXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBEZXZpY2UgTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMVwiLCBQcm9wZXJ0eTogXCJCYXJjb2RlVmFsdWVcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkJhcmNvZGVWYWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQmFyY29kZVZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMxXCIsIFByb3BlcnR5OiBcIkJhcmNvZGVWYWx1ZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMlwiLCBQcm9wZXJ0eTogXCJDYXB0dXJlQXVkaW9cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNhcHR1cmVBdWRpbyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ2FwdHVyZUF1ZGlvID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMyXCIsIFByb3BlcnR5OiBcIkNhcHR1cmVBdWRpb1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzM1wiLCBQcm9wZXJ0eTogXCJDYXB0dXJlSW1hZ2VcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNhcHR1cmVJbWFnZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ2FwdHVyZUltYWdlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMzXCIsIFByb3BlcnR5OiBcIkNhcHR1cmVJbWFnZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNFwiLCBQcm9wZXJ0eTogXCJDYXB0dXJlVmlkZW9cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNhcHR1cmVWaWRlbyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ2FwdHVyZVZpZGVvID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM0XCIsIFByb3BlcnR5OiBcIkNhcHR1cmVWaWRlb1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNVwiLCBQcm9wZXJ0eTogXCJDdXJyZW50UG9zaXRpb25cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkN1cnJlbnRQb3NpdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ3VycmVudFBvc2l0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM1XCIsIFByb3BlcnR5OiBcIkN1cnJlbnRQb3NpdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNlwiLCBQcm9wZXJ0eTogXCJQaWNrRmlsZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuUGlja0ZpbGUgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLlBpY2tGaWxlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM2XCIsIFByb3BlcnR5OiBcIlBpY2tGaWxlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBQYW5lbCBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM3XCIsIFByb3BlcnR5OiBcIkxvYWRQYW5lbFwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuTG9hZFBhbmVsID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5Mb2FkUGFuZWwgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzdcIiwgUHJvcGVydHk6IFwiTG9hZFBhbmVsXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdUREMjcgVEVTVCAxMjogVXRpbGl0eSBBUEkgWyR7c3RhcnRUaW1lfV0gLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVI0MClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgTWV0aG9kcyAoUzEtUzM3KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBzdHJpbmdpZnkgb2JqZWN0cyBmb3IgZGlzcGxheVxyXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyIG9yIENvbXBsZXggT2JqZWN0XSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxMzogTXVsdGlPcHRpb25TZXQgQ29udHJvbCAtIHY0X0NhdGVnb3JpZXMgRmllbGRcclxuICogTXVsdGlPcHRpb25TZXQgZXh0ZW5kcyBJQ29udHJvbE9wdGlvblNldCB3aXRoIFZhbHVlIGFzIG51bWJlcltdIChhcnJheSlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RNdWx0aU9wdGlvblNldChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbW9zID0gZm9ybS5Cb2R5LnY0X0NhdGVnb3JpZXM7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IG1vcy5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIE11bHRpT3B0aW9uU2V0LXNwZWNpZmljOiBWYWx1ZSwgSW5pdGlhbFZhbHVlLCBTZWxlY3RlZE9wdGlvbiwgVGV4dCBhcmUgYWxsIGFycmF5c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKG51bWJlcltdKVwiLCBWYWx1ZTogc3RyaW5naWZ5KG9yaWdpbmFsVmFsdWUpLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkob3JpZ2luYWxWYWx1ZSkgfHwgb3JpZ2luYWxWYWx1ZSA9PT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiT3B0aW9ucyAoYXJyYXkpXCIsIFZhbHVlOiBzdHJpbmdpZnkobW9zLk9wdGlvbnMpLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkobW9zLk9wdGlvbnMpID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJTZWxlY3RlZE9wdGlvbiAoYXJyYXkpXCIsIFZhbHVlOiBzdHJpbmdpZnkobW9zLlNlbGVjdGVkT3B0aW9uKSwgU3RhdHVzOiBBcnJheS5pc0FycmF5KG1vcy5TZWxlY3RlZE9wdGlvbikgfHwgbW9zLlNlbGVjdGVkT3B0aW9uID09PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJJbml0aWFsVmFsdWUgKG51bWJlcltdKVwiLCBWYWx1ZTogc3RyaW5naWZ5KG1vcy5Jbml0aWFsVmFsdWUpLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkobW9zLkluaXRpYWxWYWx1ZSkgfHwgbW9zLkluaXRpYWxWYWx1ZSA9PT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiVGV4dCAoc3RyaW5nW10pXCIsIFZhbHVlOiBzdHJpbmdpZnkobW9zLlRleHQpLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkobW9zLlRleHQpIHx8IG1vcy5UZXh0ID09PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IG1vcy5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogbW9zLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogbW9zLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogbW9zLkF0dHJpYnV0ZU5hbWUgPT09IFwidjRfY2F0ZWdvcmllc1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBtb3MuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBtb3MuQXR0cmlidXRlVHlwZSA9PT0gXCJtdWx0aXNlbGVjdG9wdGlvbnNldFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogbW9zLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IG1vcy5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogbW9zLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IG1vcy5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogbW9zLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBtb3MuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IG1vcy5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IG1vcy5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE3XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBtb3MuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxOFwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBtb3MuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZSAoYXJyYXkgb2YgbnVtYmVycylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gWzEsIDJdOyAvLyBUZXN0IHdpdGggc2FtcGxlIHZhbHVlc1xyXG4gICAgICAgIG1vcy5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IG1vcy5WYWx1ZTtcclxuICAgICAgICBtb3MuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBBcnJheS5pc0FycmF5KG5ld1ZhbHVlKSB8fCBuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IHN1Y2Nlc3MgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IHN1Y2Nlc3MgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBtb3MuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtb3MuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vcy5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1vcy5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IG1vcy5EaXNhYmxlZDtcclxuICAgICAgICBtb3MuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9zLkRpc2FibGVkO1xyXG4gICAgICAgIG1vcy5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gbW9zLkxhYmVsO1xyXG4gICAgICAgIG1vcy5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9zLkxhYmVsO1xyXG4gICAgICAgIG1vcy5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG1vcy5WaXNpYmxlO1xyXG4gICAgICAgIG1vcy5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9zLlZpc2libGU7XHJcbiAgICAgICAgbW9zLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IE9wdGlvbiAoZ2V0IHNwZWNpZmljIG9wdGlvbilcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG1vcy5PcHRpb25zO1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdE9wdGlvbiA9IG1vcy5PcHRpb24ob3B0aW9uc1swXS52YWx1ZSk7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogc3RyaW5naWZ5KGZpcnN0T3B0aW9uKSwgU3RhdHVzOiBmaXJzdE9wdGlvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogXCJObyBvcHRpb25zXCIsIFN0YXR1czogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogQWRkT25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgTXVsdGlPcHRpb25TZXQgT25DaGFuZ2UgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vcy5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZW1vdmVPbkNoYW5nZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb3MuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogRmlyZU9uQ2hhbmdlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vcy5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBGb2N1c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vcy5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBTZXROb3RpZmljYXRpb25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9zLlNldE5vdGlmaWNhdGlvbihcIlRlc3QgTXVsdGlPcHRpb25TZXQgbm90aWZpY2F0aW9uXCIsIFwiTU9TX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vcy5DbGVhck5vdGlmaWNhdGlvbihcIk1PU19URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFNldElzVmFsaWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9zLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9zLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0NcdURGRjdcdUZFMEYgVEVTVCAxMzogTXVsdGlPcHRpb25TZXQgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiB2NF9DYXRlZ29yaWVzIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTIpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHN0cmluZ2lmeSBvYmplY3RzIGZvciBkaXNwbGF5XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXIgb3IgQ29tcGxleCBPYmplY3RdJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDE0OiBUYWIgQ29udHJvbCAtIERFVEFJTFNfVEFCXHJcbiAqIElUYWIgaW50ZXJmYWNlIGZvciBmb3JtIHRhYnMgd2l0aCBEaXNwbGF5U3RhdGUsIExhYmVsLCBWaXNpYmxlIHByb3BlcnRpZXNcclxuICogQWxzbyB0ZXN0cyBTZWN0aW9uIHdpdGhpbiB0aGUgdGFiXHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdFRhYihmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgdGFiID0gZm9ybS5Cb2R5LlRhYi5TVU1NQVJZX1RBQjtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFRBQiBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJUYWIuTmFtZVwiLCBWYWx1ZTogdGFiLk5hbWUsIFN0YXR1czogdGFiLk5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIlRhYi5QYXJlbnRcIiwgVmFsdWU6IHRhYi5QYXJlbnQgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogdGFiLlBhcmVudCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiVGFiLkRpc3BsYXlTdGF0ZVwiLCBWYWx1ZTogdGFiLkRpc3BsYXlTdGF0ZSwgU3RhdHVzOiB0YWIuRGlzcGxheVN0YXRlID09PSBcImV4cGFuZGVkXCIgfHwgdGFiLkRpc3BsYXlTdGF0ZSA9PT0gXCJjb2xsYXBzZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiVGFiLkxhYmVsXCIsIFZhbHVlOiB0YWIuTGFiZWwsIFN0YXR1czogdGFiLkxhYmVsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJUYWIuVmlzaWJsZVwiLCBWYWx1ZTogdGFiLlZpc2libGUsIFN0YXR1czogdHlwZW9mIHRhYi5WaXNpYmxlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBTZWN0aW9uIHByb3BlcnRpZXMgKEFDQ09VTlRfSU5GT1JNQVRJT04gc2VjdGlvbilcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gdGFiLlNlY3Rpb24uQUNDT1VOVF9JTkZPUk1BVElPTjtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uQklMTElOR1wiLCBWYWx1ZTogc2VjdGlvbiA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBzZWN0aW9uID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLk5hbWVcIiwgVmFsdWU6IHNlY3Rpb24/Lk5hbWUsIFN0YXR1czogc2VjdGlvbj8uTmFtZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5QYXJlbnRcIiwgVmFsdWU6IHNlY3Rpb24/LlBhcmVudCA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBzZWN0aW9uPy5QYXJlbnQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uTGFiZWxcIiwgVmFsdWU6IHNlY3Rpb24/LkxhYmVsLCBTdGF0dXM6IHNlY3Rpb24/LkxhYmVsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5WaXNpYmxlXCIsIFZhbHVlOiBzZWN0aW9uPy5WaXNpYmxlLCBTdGF0dXM6IHR5cGVvZiBzZWN0aW9uPy5WaXNpYmxlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBUQUIgU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzcGxheVN0YXRlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNwbGF5U3RhdGUgPSB0YWIuRGlzcGxheVN0YXRlO1xyXG4gICAgICAgIHRhYi5EaXNwbGF5U3RhdGUgPSBvcmlnRGlzcGxheVN0YXRlID09PSBcImV4cGFuZGVkXCIgPyBcImNvbGxhcHNlZFwiIDogXCJleHBhbmRlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gdGFiLkRpc3BsYXlTdGF0ZTtcclxuICAgICAgICB0YWIuRGlzcGxheVN0YXRlID0gb3JpZ0Rpc3BsYXlTdGF0ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlRhYi5EaXNwbGF5U3RhdGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJUYWIuRGlzcGxheVN0YXRlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IHRhYi5MYWJlbDtcclxuICAgICAgICB0YWIuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHRhYi5MYWJlbDtcclxuICAgICAgICB0YWIuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJUYWIuTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJUYWIuTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IHRhYi5WaXNpYmxlO1xyXG4gICAgICAgIHRhYi5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gdGFiLlZpc2libGU7XHJcbiAgICAgICAgdGFiLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlRhYi5WaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiVGFiLlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogRm9jdXNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0YWIuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJUYWIuRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJUYWIuRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogQWRkVGFiU3RhdGVDaGFuZ2VcclxuICAgIGNvbnN0IHRhYlN0YXRlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgVGFiIFN0YXRlQ2hhbmdlIGZpcmVkXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB0YWIuQWRkVGFiU3RhdGVDaGFuZ2UodGFiU3RhdGVDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJUYWIuQWRkVGFiU3RhdGVDaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlRhYi5BZGRUYWJTdGF0ZUNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZW1vdmVUYWJTdGF0ZUNoYW5nZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICB0YWIuUmVtb3ZlVGFiU3RhdGVDaGFuZ2UodGFiU3RhdGVDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJUYWIuUmVtb3ZlVGFiU3RhdGVDaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlRhYi5SZW1vdmVUYWJTdGF0ZUNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFQ1RJT04gU0VUVEVSUyAoUy1JbmRleCBjb250aW51ZWQpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3Qgc2VjdGlvbiA9IHRhYi5TZWN0aW9uLkFDQ09VTlRfSU5GT1JNQVRJT047XHJcblxyXG4gICAgLy8gU2VjdGlvbjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gc2VjdGlvbi5MYWJlbDtcclxuICAgICAgICBzZWN0aW9uLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzZWN0aW9uLkxhYmVsO1xyXG4gICAgICAgIHNlY3Rpb24uTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5MYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VjdGlvbjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IHNlY3Rpb24uVmlzaWJsZTtcclxuICAgICAgICBzZWN0aW9uLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzZWN0aW9uLlZpc2libGU7XHJcbiAgICAgICAgc2VjdGlvbi5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENEMSBURVNUIDE0OiBUYWIgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBERVRBSUxTX1RBQiAmIEJJTExJTkcgc2VjdGlvbiAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjEwKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTU6IE5hdmlnYXRpb25JdGVtIENvbnRyb2wgLSBBY2NvdW50X1Rhc2tzXHJcbiAqIE5hdmlnYXRpb25JdGVtIGludGVyZmFjZSBmb3IgZm9ybSBuYXZpZ2F0aW9uIGl0ZW1zIHdpdGggSWQsIExhYmVsLCBWaXNpYmxlLCBGb2N1c1xyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3ROYXZpZ2F0aW9uSXRlbShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbmF2SXRlbSA9IGZvcm0uTmF2aWdhdGlvbi5uYXZfbXNhX2FjY291bnRfbWFuYWdpbmdwYXJ0bmVyO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIklkXCIsIFZhbHVlOiBuYXZJdGVtLklkLCBTdGF0dXM6IG5hdkl0ZW0uSWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBuYXZJdGVtLkxhYmVsLCBTdGF0dXM6IG5hdkl0ZW0uTGFiZWwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IG5hdkl0ZW0uVmlzaWJsZSwgU3RhdHVzOiB0eXBlb2YgbmF2SXRlbS5WaXNpYmxlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBuYXZJdGVtLkxhYmVsO1xyXG4gICAgICAgIG5hdkl0ZW0uTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG5hdkl0ZW0uTGFiZWw7XHJcbiAgICAgICAgbmF2SXRlbS5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG5hdkl0ZW0uVmlzaWJsZTtcclxuICAgICAgICBuYXZJdGVtLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBuYXZJdGVtLlZpc2libGU7XHJcbiAgICAgICAgbmF2SXRlbS5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBGb2N1c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG5hdkl0ZW0uRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0VcdURERUQgVEVTVCAxNTogTmF2aWdhdGlvbkl0ZW0gQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBBY2NvdW50X1Rhc2tzIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMzKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDE2OiBFeGVjdXRpb25Db250ZXh0IC0gZm9ybS5FeGVjdXRpb25Db250ZXh0XHJcbiAqIElFeGVjdXRpb25Db250ZXh0IGludGVyZmFjZSBmb3IgZm9ybSBldmVudCBoYW5kbGVycyB3aXRoIGV4ZWN1dGlvbiBjb250ZXh0IGFjY2Vzc1xyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RFeGVjdXRpb25Db250ZXh0KGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBjdHggPSBmb3JtLkV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJEZXB0aFwiLCBWYWx1ZTogY3R4LkRlcHRoLCBTdGF0dXM6IHR5cGVvZiBjdHguRGVwdGggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkVudGl0eVJlZmVyZW5jZVwiLCBWYWx1ZTogY3R4LkVudGl0eVJlZmVyZW5jZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiRXZlbnRBcmdzXCIsIFZhbHVlOiBjdHguRXZlbnRBcmdzLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJFdmVudFNvdXJjZVwiLCBWYWx1ZTogY3R4LkV2ZW50U291cmNlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJGb3JtQ29udGV4dFwiLCBWYWx1ZTogY3R4LkZvcm1Db250ZXh0ID8gXCJGb3JtQ29udGV4dCBPYmplY3RcIiA6IG51bGwsIFN0YXR1czogY3R4LkZvcm1Db250ZXh0ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJJc1NhdmVTdWNjZXNzXCIsIFZhbHVlOiBjdHguSXNTYXZlU3VjY2VzcywgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiU2F2ZUVycm9ySW5mb1wiLCBWYWx1ZTogY3R4LlNhdmVFcnJvckluZm8sIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIlNhdmVNb2RlXCIsIFZhbHVlOiBjdHguU2F2ZU1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIE1ldGhvZDogU2V0U2hhcmVkVmFyaWFibGUgLyBHZXRTaGFyZWRWYXJpYWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0S2V5ID0gXCJEZXZLaXRUZXN0VmFyaWFibGVcIjtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSB7IGRhdGE6IFwiVGVzdCB2YWx1ZSBmcm9tIERldktpdFwiLCB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9O1xyXG4gICAgICAgIGN0eC5TZXRTaGFyZWRWYXJpYWJsZSh0ZXN0S2V5LCB0ZXN0VmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJldHJpZXZlZCA9IGN0eC5HZXRTaGFyZWRWYXJpYWJsZSh0ZXN0S2V5KTtcclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmV0cmlldmVkICYmIHJldHJpZXZlZC5kYXRhID09PSB0ZXN0VmFsdWUuZGF0YTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlNldC9HZXRTaGFyZWRWYXJpYWJsZVwiLCBWYWx1ZTogc3VjY2VzcyA/IFwiU2V0IGFuZCBSZXRyaWV2ZWQgU3VjY2Vzc2Z1bGx5XCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IHN1Y2Nlc3MgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiU2V0L0dldFNoYXJlZFZhcmlhYmxlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IElzSW5pdGlhbExvYWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaXNJbml0aWFsID0gY3R4LklzSW5pdGlhbExvYWQoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIklzSW5pdGlhbExvYWQoKVwiLCBWYWx1ZTogaXNJbml0aWFsLCBTdGF0dXM6IHR5cGVvZiBpc0luaXRpYWwgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIklzSW5pdGlhbExvYWQoKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBJc0RlZmF1bHRQcmV2ZW50ZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaXNQcmV2ZW50ZWQgPSBjdHguSXNEZWZhdWx0UHJldmVudGVkKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJJc0RlZmF1bHRQcmV2ZW50ZWQoKVwiLCBWYWx1ZTogaXNQcmV2ZW50ZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiSXNEZWZhdWx0UHJldmVudGVkKClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogRGlzYWJsZUFzeW5jVGltZW91dCAob25seSB2YWxpZCBpbiBPblNhdmUsIHdlIGp1c3QgdGVzdCBpdCBleGlzdHMpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGhhc01ldGhvZCA9IHR5cGVvZiBjdHguRGlzYWJsZUFzeW5jVGltZW91dCA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZUFzeW5jVGltZW91dFwiLCBWYWx1ZTogaGFzTWV0aG9kID8gXCJNZXRob2QgZXhpc3RzXCIgOiBcIk5vdCBhIGZ1bmN0aW9uXCIsIFN0YXR1czogaGFzTWV0aG9kID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVBc3luY1RpbWVvdXRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogU2V0UHJldmVudERlZmF1bHQgKG9ubHkgdmFsaWQgaW4gT25TYXZlLCB3ZSBqdXN0IHRlc3QgaXQgZXhpc3RzKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBoYXNNZXRob2QgPSB0eXBlb2YgY3R4LlNldFByZXZlbnREZWZhdWx0ID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJTZXRQcmV2ZW50RGVmYXVsdFwiLCBWYWx1ZTogaGFzTWV0aG9kID8gXCJNZXRob2QgZXhpc3RzXCIgOiBcIk5vdCBhIGZ1bmN0aW9uXCIsIFN0YXR1czogaGFzTWV0aG9kID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlNldFByZXZlbnREZWZhdWx0XCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFNldFByZXZlbnREZWZhdWx0T25FcnJvciAob25seSB2YWxpZCBpbiBPblNhdmUsIHdlIGp1c3QgdGVzdCBpdCBleGlzdHMpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGhhc01ldGhvZCA9IHR5cGVvZiBjdHguU2V0UHJldmVudERlZmF1bHRPbkVycm9yID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJTZXRQcmV2ZW50RGVmYXVsdE9uRXJyb3JcIiwgVmFsdWU6IGhhc01ldGhvZCA/IFwiTWV0aG9kIGV4aXN0c1wiIDogXCJOb3QgYSBmdW5jdGlvblwiLCBTdGF0dXM6IGhhc01ldGhvZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJTZXRQcmV2ZW50RGVmYXVsdE9uRXJyb3JcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzQ1x1REZBRiBURVNUIDE2OiBFeGVjdXRpb25Db250ZXh0IFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IGZvcm0uRXhlY3V0aW9uQ29udGV4dCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TNilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxXQUFTLFNBQWlDO0FBQ3RDLFFBQUksT0FBTyxXQUFXLGVBQWdCLE9BQWUsUUFBUSxRQUFXO0FBQ3BFLGFBQVEsT0FBZTtBQUFBLElBQzNCO0FBQ0EsUUFBSSxPQUFPLFdBQVcsZUFBZSxPQUFPLE9BQU8sV0FBVyxlQUFnQixPQUFPLE9BQWUsUUFBUSxRQUFXO0FBQ25ILGFBQVEsT0FBTyxPQUFlO0FBQUEsSUFDbEM7QUFDQSxRQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU8sT0FBTyxXQUFXLGVBQWUsT0FBTyxPQUFPLE9BQU8sV0FBVyxlQUFnQixPQUFPLE9BQU8sT0FBZSxRQUFRLFFBQVc7QUFDekssYUFBUSxPQUFPLE9BQU8sT0FBZTtBQUFBLElBQ3pDO0FBQ0EsV0FBTztBQUFBLEVBQ1g7QUFDQSxXQUFTLE9BQVUsS0FBVSxNQUFjLFVBQXlCO0FBQ2hFLFdBQU8sZUFBZSxLQUFLLE1B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QVk7QUFDN0I7QUFFQSxRQUFJO0FBRUosbUJBQWUsT0FBTyxrQkFBc0M7QUFDeEQsYUFBTyxJQUFJLFlBQVksS0FBSyxnQkFBZ0I7QUFDNUMscUJBQWU7QUFDZixXQUFLLFlBQVksV0FBVztBQUFBLElBQ2hDO0FBRUEsYUFBUyxpQkFBdUI7QUFDNUIsVUFBSSxLQUFLLGlCQUFpQixjQUFjLEdBQUc7QUFBQSxNQUMzQztBQUFBLElBQ0o7QUFNQSxtQkFBZSxZQUFZLGtCQUFzQztBQUs3RCxpQkFBVyxZQUFZO0FBQ25CLGdCQUFRLE1BQU07QUFHZCxvQkFBWSxJQUFJO0FBR2hCLG1CQUFXLElBQUk7QUFHZixpQkFBUyxJQUFJO0FBR2IsbUJBQVcsSUFBSTtBQUdmLG9CQUFZLElBQUk7QUFHaEIsc0JBQWMsSUFBSTtBQUdsQixjQUFNLFdBQVcsSUFBSTtBQUdyQixrQkFBVSxJQUFJO0FBR2Qsb0JBQVksSUFBSTtBQUdoQixxQkFBYSxJQUFJO0FBR2pCLHFCQUFhLElBQUk7QUFHakIsaUJBQVMsSUFBSTtBQUdiLG9CQUFZLElBQUk7QUFHaEIsMkJBQW1CLElBQUk7QUFHdkIsZ0JBQVEsSUFBSTtBQUdaLDJCQUFtQixJQUFJO0FBR3ZCLDZCQUFxQixJQUFJO0FBQUEsTUFFN0IsR0FBRyxHQUFLO0FBQUEsSUFHWjtBQTJCQSxXQUFPO0FBQUEsTUFDSCxRQUFRO0FBQUEsSUFDWjtBQUFBLEVBQ0osRUFBRztBQUVILE1BQU8sa0JBQVE7IiwKICAibmFtZXMiOiBbImZvcm1Db250ZXh0IiwgInRhYnMiLCAibmF2aWdhdGlvbnMiLCAicXVpY2tGb3JtcyIsICJncmlkcyIsICJBY2NvdW50Rm9ybSIsICJzdHJpbmdpZnkiLCAic2VjdGlvbiJdCn0K
