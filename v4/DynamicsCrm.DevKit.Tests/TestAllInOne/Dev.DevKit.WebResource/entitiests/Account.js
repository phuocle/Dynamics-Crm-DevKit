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

  // entities/Account.TestLookup.ts
  function TestLookup(form) {
    console.clear();
    const results = [];
    const lookup = form.Body.PrimaryContactId;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    try {
      const currentValue = lookup.Value;
      const hasValue = currentValue && currentValue.length > 0;
      results.push({
        Test: "1",
        Property: "Value",
        Value: hasValue ? `${currentValue[0].name} (${currentValue[0].entityType})` : "(empty)",
        Status: "\u2713"
      });
      results.push({
        Test: "2",
        Property: "IsPartyList",
        Value: lookup.IsPartyList,
        Status: lookup.IsPartyList === false ? "\u2713" : "\u26A0"
      });
      results.push({
        Test: "3",
        Property: "EntityTypes",
        Value: JSON.stringify(lookup.EntityTypes),
        Status: "\u2713"
      });
      results.push({
        Test: "4",
        Property: "DefaultView",
        Value: lookup.DefaultView,
        Status: "\u2713"
      });
      results.push({
        Test: "5",
        Property: "Visible",
        Value: lookup.Visible,
        Status: "\u2713"
      });
      results.push({
        Test: "6",
        Property: "Disabled",
        Value: lookup.Disabled,
        Status: "\u2713"
      });
      results.push({
        Test: "7",
        Property: "ControlType",
        Value: lookup.ControlType,
        Status: lookup.ControlType === "lookup" ? "\u2713" : "\u26A0"
      });
      results.push({
        Test: "8a",
        Property: "ControlName",
        Value: lookup.ControlName,
        Status: "\u2713"
      });
      results.push({
        Test: "8b",
        Property: "AttributeName",
        Value: lookup.AttributeName,
        Status: "\u2713"
      });
      results.push({
        Test: "9a",
        Property: "AttributeType",
        Value: lookup.AttributeType,
        Status: "\u2713"
      });
      results.push({
        Test: "9b",
        Property: "RequiredLevel",
        Value: lookup.RequiredLevel,
        Status: "\u2713"
      });
      results.push({
        Test: "9c",
        Property: "SubmitMode",
        Value: lookup.SubmitMode,
        Status: "\u2713"
      });
      results.push({
        Test: "9d",
        Property: "IsValid",
        Value: lookup.IsValid,
        Status: "\u2713"
      });
      results.push({
        Test: "9e",
        Property: "IsDirty",
        Value: lookup.IsDirty,
        Status: "\u2713"
      });
      results.push({
        Test: "9f",
        Property: "Format",
        Value: lookup.Format,
        Status: "\u2713"
      });
      results.push({
        Test: "9g",
        Property: "Attribute",
        Value: lookup.Attribute ? "object" : "null",
        Status: lookup.Attribute ? "\u2713" : "\u26A0"
      });
    } catch (error) {
      results.push({
        Test: "ERR",
        Property: "Error",
        Value: error.message,
        Status: "\u2717"
      });
    }
    const methodResults = [];
    try {
      lookup.AddPreSearch((ctx) => {
        const filterXml = "<filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter>";
        lookup.AddCustomFilter(filterXml, "contact");
      });
      methodResults.push({ Test: "10", Property: "AddPreSearch", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "10", Property: "AddPreSearch", Value: e.message, Status: "\u2717" });
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
      methodResults.push({ Test: "11", Property: "AddCustomView", Value: "Added", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "11", Property: "AddCustomView", Value: e.message, Status: "\u2717" });
    }
    try {
      lookup.SetNotification("Test notification", "TEST_1");
      setTimeout(() => lookup.ClearNotification("TEST_1"), 3e3);
      methodResults.push({ Test: "12", Property: "SetNotification", Value: "Set (clears in 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "12", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => lookup.Focus(), 4e3);
      methodResults.push({ Test: "13", Property: "Focus", Value: "Scheduled (4s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "13", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    console.group(`\u{1F50D} LOOKUP TEST: PrimaryContactId [${startTime}]`);
    console.log("%c\u{1F4CB} Properties", "font-weight: bold; font-size: 14px;");
    console.table(results);
    console.log("%c\u26A1 Methods", "font-weight: bold; font-size: 14px;");
    console.table(methodResults);
    const passed = [...results, ...methodResults].filter((r) => r.Status === "\u2713").length;
    const total = results.length + methodResults.length;
    console.log(`%c\u2705 Summary: ${passed}/${total} passed`, "font-weight: bold; color: green; font-size: 14px;");
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
        debugger;
        TestLookup(form);
      }, 3e4);
    }
    return {
      OnLoad: onLoad
    };
  }();
  var Account_default = formAccount;
  return __toCommonJS(Account_exports);
})();
(function(){if(typeof IIFEAccount!=='undefined'&&IIFEAccount.default)window['formAccount']=IIFEAccount.default;})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZW50aXRpZXMvQWNjb3VudC50cyIsICIuLi9saWIvZGV2a2l0LnRzIiwgIi4uL2VudGl0aWVzL2dlbmVyYXRvci9BY2NvdW50LmZvcm0udHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0TG9va3VwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcbmltcG9ydCB7IFRlc3RMb29rdXAgfSBmcm9tICcuL0FjY291bnQuVGVzdExvb2t1cCc7XHJcblxyXG5jb25zdCBmb3JtQWNjb3VudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBsZXQgZm9ybTogQWNjb3VudEZvcm0uRm9ybTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvbkxvYWQoZXhlY3V0aW9uQ29udGV4dDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgZm9ybSA9IG5ldyBBY2NvdW50Rm9ybS5Gb3JtKGV4ZWN1dGlvbkNvbnRleHQpO1xyXG4gICAgICAgIHJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICAgICAgZm9ybS5VaUFkZExvYWRlZChVaUFkZExvYWRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGZvcm0uRXhlY3V0aW9uQ29udGV4dC5Jc0luaXRpYWxMb2FkKCkpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBPTiBMT0FEXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBVaUFkZExvYWRlZChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvLyBCRUdJTiBPTiBMT0FEIExPR0lDXHJcblxyXG4gICAgICAgIC8vIFdhaXQgMzAgc2Vjb25kcyBhZnRlciBPbkxvYWQgdG8gYWxsb3cgZm9ybSB0byBmdWxseSBsb2FkXHJcbiAgICAgICAgLy8gVGhlbiBjbGVhciBjb25zb2xlIGFuZCBydW4gcmVhbCB0ZXN0c1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgVGVzdExvb2t1cChmb3JtKTtcclxuICAgICAgICB9LCAzMDAwMCk7XHJcblxyXG4gICAgICAgIC8vIEVORCBPTiBMT0FEIExPR0lDXHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBFTkQgT04gTE9BRFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBPTiBDSEFOR0VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIEVORCBPTiBDSEFOR0VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gUFJFIFNFQVJDSFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gRU5EIFBSRSBTRUFSQ0hcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gT1RIRVJTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBFTkQgT1RIRVJTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIE9uTG9hZDogb25Mb2FkXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybUFjY291bnQ7XHJcbiIsICJmdW5jdGlvbiBnZXRYcm0oKTogdHlwZW9mIFhybSB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdyBhcyBhbnkpLlhybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KS5Ycm07XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHBhcmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBhcmVudC53aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIChwYXJlbnQud2luZG93IGFzIGFueSkuWHJtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gKHBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm07XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHBhcmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBhcmVudC5wYXJlbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXJlbnQucGFyZW50LndpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHBhcmVudC5wYXJlbnQud2luZG93IGFzIGFueSkuWHJtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gKHBhcmVudC5wYXJlbnQud2luZG93IGFzIGFueSkuWHJtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5mdW5jdGlvbiBnZXR0ZXI8VD4ob2JqOiBhbnksIHByb3A6IHN0cmluZywgZ2V0dGVyRm46ICgpID0+IFQpOiB2b2lkIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcclxuICAgICAgICBnZXQ6IGdldHRlckZuLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXR0ZXJTZXR0ZXI8VD4ob2JqOiBhbnksIHByb3A6IHN0cmluZywgZ2V0dGVyRm46ICgpID0+IFQsIHNldHRlckZuOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcclxuICAgICAgICBnZXQ6IGdldHRlckZuLFxyXG4gICAgICAgIHNldDogc2V0dGVyRm4sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRGaWVsZChmb3JtQ29udGV4dDogYW55LCBmaWVsZDogYW55LCBhdHRyaWJ1dGU6IGFueSwgY29udHJvbDogYW55KTogdm9pZCB7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGUnLCAoKSA9PiBjb250cm9sPy5nZXRBdHRyaWJ1dGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGVOYW1lJywgKCkgPT4gYXR0cmlidXRlPy5nZXROYW1lKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlUGFyZW50JywgKCkgPT4gYXR0cmlidXRlPy5nZXRQYXJlbnQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGVUeXBlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRBdHRyaWJ1dGVUeXBlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQ29udHJvbE5hbWUnLCAoKSA9PiBjb250cm9sPy5nZXROYW1lKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQ29udHJvbE9wdGlvbnMnLCAoKSA9PiBjb250cm9sPy5nZXRPcHRpb25zKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQ29udHJvbFBhcmVudCcsICgpID0+IGNvbnRyb2w/LmdldFBhcmVudCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xUeXBlJywgKCkgPT4gY29udHJvbD8uZ2V0Q29udHJvbFR5cGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdGb3JtYXQnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldEZvcm1hdCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0luaXRpYWxVcmwnLCAoKSA9PiBjb250cm9sPy5nZXRJbml0aWFsVXJsKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSW5pdGlhbFZhbHVlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRJbml0aWFsVmFsdWUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJc0RpcnR5JywgKCkgPT4gYXR0cmlidXRlPy5nZXRJc0RpcnR5KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSXNQYXJ0eUxpc3QnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldElzUGFydHlMaXN0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSXNWYWxpZCcsICgpID0+IGF0dHJpYnV0ZT8uaXNWYWxpZCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ01heCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TWF4KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnTWF4TGVuZ3RoJywgKCkgPT4gYXR0cmlidXRlPy5nZXRNYXhMZW5ndGgoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdNaW4nLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE1pbigpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ09iamVjdCcsICgpID0+IGNvbnRyb2w/LmdldE9iamVjdCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ09wdGlvbnMnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE9wdGlvbnMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdPdXRwdXRzJywgKCkgPT4gY29udHJvbD8uZ2V0T3V0cHV0cygpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1NlbGVjdGVkT3B0aW9uJywgKCkgPT4gYXR0cmlidXRlPy5nZXRTZWxlY3RlZE9wdGlvbigpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1NlbGVjdGVkUmVzdWx0cycsICgpID0+IGNvbnRyb2w/LmdldFNlbGVjdGVkUmVzdWx0cygpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1N0YXRlJywgKCkgPT4gY29udHJvbD8uZ2V0U3RhdGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdUZXh0JywgKCkgPT4gYXR0cmlidXRlPy5nZXRUZXh0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnVG90YWxSZXN1bHRDb3VudCcsICgpID0+IGNvbnRyb2w/LmdldFRvdGFsUmVzdWx0Q291bnQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdVc2VyUHJpdmlsZWdlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRVc2VyUHJpdmlsZWdlKCkpO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnRGF0YScsICgpID0+IGNvbnRyb2w/LmdldERhdGEoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29udHJvbD8uc2V0RGF0YSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnRGVmYXVsdFZpZXcnLCAoKSA9PiBjb250cm9sPy5nZXREZWZhdWx0VmlldygpLCAodmFsdWU6IGFueSkgPT4geyBjb250cm9sPy5zZXREZWZhdWx0Vmlldyh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnRGlzYWJsZWQnLCAoKSA9PiBjb250cm9sPy5nZXREaXNhYmxlZCgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAoZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSAzIHx8IGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gNCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnRyb2w/LnNldERpc2FibGVkKHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnRW50aXR5VHlwZXMnLCAoKSA9PiBjb250cm9sPy5nZXRFbnRpdHlUeXBlcygpLCAodmFsdWU6IGFueSkgPT4geyBjb250cm9sPy5zZXRFbnRpdHlUeXBlcyh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnTGFiZWwnLCAoKSA9PiBjb250cm9sPy5nZXRMYWJlbCgpLCAodmFsdWU6IHN0cmluZykgPT4geyBjb250cm9sPy5zZXRMYWJlbCh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnUHJlY2lzaW9uJywgKCkgPT4gYXR0cmlidXRlPy5nZXRQcmVjaXNpb24oKSwgKHZhbHVlOiBudW1iZXIpID0+IHsgYXR0cmlidXRlPy5zZXRQcmVjaXNpb24odmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1JlcXVpcmVkTGV2ZWwnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFJlcXVpcmVkTGV2ZWwoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgYXR0cmlidXRlPy5zZXRSZXF1aXJlZExldmVsKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTZWFyY2hRdWVyeScsICgpID0+IGNvbnRyb2w/LmdldFNlYXJjaFF1ZXJ5KCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGNvbnRyb2w/LnNldFNlYXJjaFF1ZXJ5KHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTaG93VGltZScsICgpID0+IGNvbnRyb2w/LmdldFNob3dUaW1lKCksICh2YWx1ZTogYm9vbGVhbikgPT4geyBjb250cm9sPy5zZXRTaG93VGltZSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnU3JjJywgKCkgPT4gY29udHJvbD8uZ2V0U3JjKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGNvbnRyb2w/LnNldFNyYyh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnU3VibWl0TW9kZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0U3VibWl0TW9kZSgpLCAodmFsdWU6IHN0cmluZykgPT4geyBhdHRyaWJ1dGU/LnNldFN1Ym1pdE1vZGUodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1ZhbHVlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRWYWx1ZSgpLCAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDMgfHwgZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSA0KSByZXR1cm47XHJcbiAgICAgICAgYXR0cmlidXRlPy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1Zpc2libGUnLCAoKSA9PiBjb250cm9sPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYm9vbGVhbikgPT4geyBjb250cm9sPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICBmaWVsZC5BZGRDdXN0b21GaWx0ZXIgPSAoZmlsdGVyOiBzdHJpbmcsIGVudGl0eUxvZ2ljYU5hbWU/OiBzdHJpbmcpID0+IGNvbnRyb2w/LmFkZEN1c3RvbUZpbHRlcihmaWx0ZXIsIGVudGl0eUxvZ2ljYU5hbWUpO1xyXG4gICAgZmllbGQuQWRkQ3VzdG9tVmlldyA9ICh2aWV3SWQ6IHN0cmluZywgZW50aXR5TmFtZTogc3RyaW5nLCB2aWV3RGlzcGxheU5hbWU6IHN0cmluZywgZmV0Y2hYbWw6IHN0cmluZywgbGF5b3V0WG1sOiBzdHJpbmcsIGlzRGVmYXVsdDogYm9vbGVhbikgPT4gY29udHJvbD8uYWRkQ3VzdG9tVmlldyh2aWV3SWQsIGVudGl0eU5hbWUsIHZpZXdEaXNwbGF5TmFtZSwgZmV0Y2hYbWwsIGxheW91dFhtbCwgaXNEZWZhdWx0KTtcclxuICAgIGZpZWxkLkFkZExvb2t1cFRhZ0NsaWNrID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uTG9va3VwVGFnQ2xpY2soY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkTm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZywgbm90aWZpY2F0aW9uTGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZywgY2FsbGJhY2s/OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBhY3Rpb25zID0geyBtZXNzYWdlOiBtZXNzYWdlLCBhY3Rpb25zOiBbY2FsbGJhY2tdIH07XHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0geyBtZXNzYWdlczogW21lc3NhZ2VdLCBub3RpZmljYXRpb25MZXZlbDogbm90aWZpY2F0aW9uTGV2ZWwsIHVuaXF1ZUlkOiB1bmlxdWVJZCwgYWN0aW9uczogW2FjdGlvbnNdIH07XHJcbiAgICAgICAgcmV0dXJuIGNvbnRyb2w/LmFkZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xyXG4gICAgfTtcclxuICAgIGZpZWxkLkFkZE9uQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGF0dHJpYnV0ZT8uYWRkT25DaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkT25PdXRwdXRDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25PdXRwdXRDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkT3B0aW9uID0gKHRleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlciwgaW5kZXg/OiBudW1iZXIpID0+IGNvbnRyb2w/LmFkZE9wdGlvbih7IHRleHQ6IHRleHQsIHZhbHVlOiB2YWx1ZSB9LCBpbmRleCk7XHJcbiAgICBmaWVsZC5BZGRQb3N0U2VhcmNoID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uUG9zdFNlYXJjaChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRQcmVTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkUHJlU2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZFJlc3VsdE9wZW5lZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPblJlc3VsdE9wZW5lZChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRTZWxlY3Rpb24gPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25TZWxlY3Rpb24oY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQ2xlYXJOb3RpZmljYXRpb24gPSAodW5pcXVlSWQ6IHN0cmluZykgPT4gY29udHJvbD8uY2xlYXJOb3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgZmllbGQuQ2xlYXJPcHRpb25zID0gKCkgPT4gY29udHJvbD8uY2xlYXJPcHRpb25zKCk7XHJcbiAgICBmaWVsZC5Db250ZW50V2luZG93ID0gKHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sPy5nZXRDb250ZW50V2luZG93KCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgZmllbGQuRmlyZU9uQ2hhbmdlID0gKCkgPT4gYXR0cmlidXRlPy5maXJlT25DaGFuZ2UoKTtcclxuICAgIGZpZWxkLkZvY3VzID0gKCkgPT4gY29udHJvbD8uc2V0Rm9jdXMoKTtcclxuICAgIGZpZWxkLk9wZW5TZWFyY2hSZXN1bHQgPSAocmVzdWx0TnVtYmVyOiBudW1iZXIsIG1vZGU/OiBzdHJpbmcpID0+IGNvbnRyb2w/Lm9wZW5TZWFyY2hSZXN1bHQocmVzdWx0TnVtYmVyLCBtb2RlKTtcclxuICAgIGZpZWxkLk9wdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiBhdHRyaWJ1dGU/LmdldE9wdGlvbih2YWx1ZSk7XHJcbiAgICBmaWVsZC5SZWZyZXNoID0gKCkgPT4gY29udHJvbD8ucmVmcmVzaCgpO1xyXG4gICAgZmllbGQuUmVtb3ZlTG9va3VwVGFnQ2xpY2sgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25Mb29rdXBUYWdDbGljayhjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVPbkNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBhdHRyaWJ1dGU/LnJlbW92ZU9uQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZU9uT3V0cHV0Q2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uT3V0cHV0Q2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZU9wdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiBjb250cm9sPy5yZW1vdmVPcHRpb24odmFsdWUpO1xyXG4gICAgZmllbGQuUmVtb3ZlUG9zdFNlYXJjaCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPblBvc3RTZWFyY2goY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlUHJlU2VhcmNoID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZVByZVNlYXJjaChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVSZXN1bHRPcGVuZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25SZXN1bHRPcGVuZWQoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlU2VsZWN0aW9uID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uU2VsZWN0aW9uKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlNldElzVmFsaWQgPSAodmFsaWQ6IGJvb2xlYW4sIG1lc3NhZ2U/OiBzdHJpbmcpID0+IGF0dHJpYnV0ZT8uc2V0SXNWYWxpZCh2YWxpZCwgbWVzc2FnZSk7XHJcbiAgICBmaWVsZC5TZXROb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250cm9sPy5zZXROb3RpZmljYXRpb24obWVzc2FnZSwgdW5pcXVlSWQpO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRGaWVsZHMoZm9ybUNvbnRleHQ6IGFueSwgYm9keTogYW55LCB0eXBlPzogc3RyaW5nKTogYW55IHtcclxuICAgIE9iamVjdC5rZXlzKGJvZHkpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvZ2ljYWxOYW1lID0gdHlwZSA9PT0gdW5kZWZpbmVkID8gZmllbGQ/LnRvTG93ZXJDYXNlKCkgOiAodHlwZSArIGZpZWxkKT8udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2wobG9naWNhbE5hbWUpID8/IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGZpZWxkKTtcclxuICAgICAgICBsZXQgYXR0cmlidXRlID0gZm9ybUNvbnRleHQ/LmdldEF0dHJpYnV0ZShsb2dpY2FsTmFtZSk7XHJcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUgJiYgY29udHJvbD8uZ2V0QXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSA9IGNvbnRyb2wuZ2V0QXR0cmlidXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRGaWVsZChmb3JtQ29udGV4dCwgYm9keVtmaWVsZF0sIGF0dHJpYnV0ZSwgY29udHJvbCk7XHJcbiAgICB9KTtcclxuICAgIGlmICh0eXBlID09PSBcImhlYWRlcl9cIikge1xyXG4gICAgICAgIGNvbnN0IGdldEhlYWRlclNlY3Rpb24gPSBmb3JtQ29udGV4dD8udWk/LmhlYWRlclNlY3Rpb247XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKGJvZHksICdCb2R5VmlzaWJsZScsICgpID0+IGdldEhlYWRlclNlY3Rpb24/LmdldEJvZHlWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IGdldEhlYWRlclNlY3Rpb24/LnNldEJvZHlWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKGJvZHksICdDb21tYW5kQmFyVmlzaWJsZScsICgpID0+IGdldEhlYWRlclNlY3Rpb24/LmdldENvbW1hbmRCYXJWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IGdldEhlYWRlclNlY3Rpb24/LnNldENvbW1hbmRCYXJWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKGJvZHksICdUYWJOYXZpZ2F0b3JWaXNpYmxlJywgKCkgPT4gZ2V0SGVhZGVyU2VjdGlvbj8uZ2V0VGFiTmF2aWdhdG9yVmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBnZXRIZWFkZXJTZWN0aW9uPy5zZXRUYWJOYXZpZ2F0b3JWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYm9keTtcclxufVxyXG5mdW5jdGlvbiBsb2FkVGFicyhmb3JtQ29udGV4dDogYW55LCB0YWJzOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGxvYWRTZWN0aW9uID0gKGZvcm1Db250ZXh0OiBhbnksIHRhYjogc3RyaW5nLCBzZWN0aW9uczogYW55LCBzZWN0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCB0YWJPYmplY3QgPSBmb3JtQ29udGV4dD8udWk/LnRhYnM/LmdldCh0YWIpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25PYmplY3QgPSB0YWJPYmplY3Q/LnNlY3Rpb25zPy5nZXQoc2VjdGlvbik7XHJcbiAgICAgICAgZ2V0dGVyKHNlY3Rpb25zW3NlY3Rpb25dLCAnTmFtZScsICgpID0+IHNlY3Rpb25PYmplY3Q/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHNlY3Rpb25zW3NlY3Rpb25dLCAnUGFyZW50JywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0UGFyZW50KCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihzZWN0aW9uc1tzZWN0aW9uXSwgJ0xhYmVsJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IHNlY3Rpb25PYmplY3Q/LnNldExhYmVsKHZhbHVlKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHNlY3Rpb25zW3NlY3Rpb25dLCAnVmlzaWJsZScsICgpID0+IHNlY3Rpb25PYmplY3Q/LmdldFZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHNlY3Rpb25PYmplY3Q/LnNldFZpc2libGUodmFsdWUpKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkVGFiID0gKGZvcm1Db250ZXh0OiBhbnksIHRhYnM6IGFueSwgdGFiOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCB0YWJPYmplY3QgPSBmb3JtQ29udGV4dD8udWk/LnRhYnM/LmdldCh0YWIpO1xyXG4gICAgICAgIGdldHRlcih0YWJzW3RhYl0sICdOYW1lJywgKCkgPT4gdGFiT2JqZWN0Py5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcih0YWJzW3RhYl0sICdQYXJlbnQnLCAoKSA9PiB0YWJPYmplY3Q/LmdldFBhcmVudCgpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIodGFic1t0YWJdLCAnQ29udGVudFR5cGUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldENvbnRlbnRUeXBlKCksICh2YWx1ZTogYW55KSA9PiB7IHRhYk9iamVjdD8uc2V0Q29udGVudFR5cGUodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIodGFic1t0YWJdLCAnRGlzcGxheVN0YXRlJywgKCkgPT4gdGFiT2JqZWN0Py5nZXREaXNwbGF5U3RhdGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXREaXNwbGF5U3RhdGUodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIodGFic1t0YWJdLCAnTGFiZWwnLCAoKSA9PiB0YWJPYmplY3Q/LmdldExhYmVsKCksICh2YWx1ZTogYW55KSA9PiB7IHRhYk9iamVjdD8uc2V0TGFiZWwodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIodGFic1t0YWJdLCAnVmlzaWJsZScsICgpID0+IHRhYk9iamVjdD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyB0YWJPYmplY3Q/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICB0YWJzW3RhYl0uQWRkVGFiU3RhdGVDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gdGFiT2JqZWN0Py5hZGRUYWJTdGF0ZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICAgICAgdGFic1t0YWJdLkZvY3VzID0gKCkgPT4gdGFiT2JqZWN0Py5zZXRGb2N1cygpO1xyXG4gICAgICAgIHRhYnNbdGFiXS5SZW1vdmVUYWJTdGF0ZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiB0YWJPYmplY3Q/LnJlbW92ZVRhYlN0YXRlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgICAgICBPYmplY3Qua2V5cyh0YWJzW3RhYl0uU2VjdGlvbikuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgICAgICAgICAgbG9hZFNlY3Rpb24oZm9ybUNvbnRleHQsIHRhYiwgdGFic1t0YWJdLlNlY3Rpb24sIHNlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKHRhYnMpLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICBsb2FkVGFiKGZvcm1Db250ZXh0LCB0YWJzLCB0YWIpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZE5hdmlnYXRpb25zKGZvcm1Db250ZXh0OiBhbnksIG5hdmlnYXRpb25zOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGdldE5hdmlnYXRpb25JdGVtID0gKG5hdmlnYXRpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdkl0ZW1zID0gZm9ybUNvbnRleHQ/LnVpPy5uYXZpZ2F0aW9uPy5pdGVtcztcclxuICAgICAgICBpZiAoIW5hdkl0ZW1zKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBuYXZJdGVtcy5nZXRMZW5ndGgoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuYXZJdGVtcy5nZXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtPy5nZXRJZCgpID09PSBuYXZpZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkTmF2aWdhdGlvbiA9IChmb3JtQ29udGV4dDogYW55LCBuYXZpZ2F0aW9uczogYW55LCBuYXZpZ2F0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbSA9IGdldE5hdmlnYXRpb25JdGVtKG5hdmlnYXRpb24pO1xyXG4gICAgICAgIGdldHRlcihuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXSwgJ0lkJywgKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LmdldElkKCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXSwgJ0xhYmVsJywgKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LmdldExhYmVsKCksICh2YWx1ZTogYW55KSA9PiBuYXZpZ2F0aW9uSXRlbT8uc2V0TGFiZWwodmFsdWUpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIobmF2aWdhdGlvbnNbbmF2aWdhdGlvbl0sICdWaXNpYmxlJywgKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LmdldFZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRWaXNpYmxlKHZhbHVlKSk7XHJcbiAgICAgICAgbmF2aWdhdGlvbnNbbmF2aWdhdGlvbl0uRm9jdXMgPSAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uc2V0Rm9jdXMoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhuYXZpZ2F0aW9ucykuZm9yRWFjaChuYXZpZ2F0aW9uID0+IHtcclxuICAgICAgICBsb2FkTmF2aWdhdGlvbihmb3JtQ29udGV4dCwgbmF2aWdhdGlvbnMsIG5hdmlnYXRpb24pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFF1aWNrRm9ybXMoZm9ybUNvbnRleHQ6IGFueSwgcXVpY2tGb3JtczogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBleGNsdWRlZEZpZWxkcyA9IG5ldyBTZXQoW1wiQm9keVwiLCBcIkNvbnRyb2xzXCIsIFwiSXNMb2FkZWRcIiwgXCJSZWZyZXNoXCIsIFwiRm9jdXNcIiwgXCJDb250cm9sVHlwZVwiLCBcIkRpc2FibGVkXCIsIFwiTGFiZWxcIiwgXCJDb250cm9sTmFtZVwiLCBcIkNvbnRyb2xQYXJlbnRcIiwgXCJWaXNpYmxlXCJdKTtcclxuICAgIGNvbnN0IGxvYWRRdWlja0Zvcm0gPSAoZm9ybUNvbnRleHQ6IGFueSwgcXVpY2tGb3JtczogYW55LCBxdWlja0Zvcm06IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IE9iamVjdC5rZXlzKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSkuZmlsdGVyKGZpZWxkID0+ICFleGNsdWRlZEZpZWxkcy5oYXMoZmllbGQpKTtcclxuICAgICAgICBjb25zdCBxdWljayA9IGZvcm1Db250ZXh0Py51aT8ucXVpY2tGb3Jtcz8uZ2V0KHF1aWNrRm9ybSk7XHJcbiAgICAgICAgZ2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0JvZHknLCAoKSA9PiBMb2FkRm9ybURpYWxvZyhxdWljaywgZmllbGRzKSk7XHJcbiAgICAgICAgZ2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0NvbnRyb2xOYW1lJywgKCkgPT4gcXVpY2s/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0NvbnRyb2xQYXJlbnQnLCAoKSA9PiBxdWljaz8uZ2V0UGFyZW50KCkpO1xyXG4gICAgICAgIGdldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdDb250cm9sVHlwZScsICgpID0+IHF1aWNrPy5nZXRDb250cm9sVHlwZSgpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnRGlzYWJsZWQnLCAoKSA9PiBxdWljaz8uZ2V0RGlzYWJsZWQoKSwgKHZhbHVlOiBhbnkpID0+IHsgcXVpY2s/LnNldERpc2FibGVkKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0xhYmVsJywgKCkgPT4gcXVpY2s/LmdldExhYmVsKCksICh2YWx1ZTogYW55KSA9PiB7IHF1aWNrPy5zZXRMYWJlbCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdWaXNpYmxlJywgKCkgPT4gcXVpY2s/LmdldFZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgcXVpY2s/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uQ29udHJvbHMgPSAoYXJnOiBhbnkpID0+IHF1aWNrPy5nZXRDb250cm9sKGFyZyk7XHJcbiAgICAgICAgcXVpY2tGb3Jtc1txdWlja0Zvcm1dLkZvY3VzID0gKCkgPT4gcXVpY2s/LnNldEZvY3VzKCk7XHJcbiAgICAgICAgcXVpY2tGb3Jtc1txdWlja0Zvcm1dLklzTG9hZGVkID0gKCkgPT4gcXVpY2s/LmlzTG9hZGVkKCk7XHJcbiAgICAgICAgcXVpY2tGb3Jtc1txdWlja0Zvcm1dLlJlZnJlc2ggPSAoKSA9PiBxdWljaz8ucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKHF1aWNrRm9ybXMpLmZvckVhY2gocXVpY2tGb3JtID0+IHtcclxuICAgICAgICBsb2FkUXVpY2tGb3JtKGZvcm1Db250ZXh0LCBxdWlja0Zvcm1zLCBxdWlja0Zvcm0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEdyaWRzKGZvcm1Db250ZXh0OiBhbnksIGdyaWRzOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGxvYWRHcmlkQ29sdW1uID0gKGNvbDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTGFiZWwnLCAoKSA9PiBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LmdldExhYmVsKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdOYW1lJywgKCkgPT4gY29sPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihvYmosICdEaXNhYmxlZCcsICgpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uZ2V0RGlzYWJsZWQoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29sPy5jb250cm9scz8uZ2V0KDApPy5zZXREaXNhYmxlZCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihvYmosICdSZXF1aXJlZExldmVsJywgKCkgPT4gY29sPy5nZXRSZXF1aXJlZExldmVsKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbD8uc2V0UmVxdWlyZWRMZXZlbCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihvYmosICdWYWx1ZScsICgpID0+IGNvbD8uZ2V0VmFsdWUoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29sPy5zZXRWYWx1ZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIG9iai5DbGVhck5vdGlmaWNhdGlvbiA9ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LmNsZWFyTm90aWZpY2F0aW9uKHVuaXF1ZUlkKTtcclxuICAgICAgICBvYmouU2V0Tm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gY29sPy5jb250cm9scz8uZ2V0KDApPy5zZXROb3RpZmljYXRpb24obWVzc2FnZSwgdW5pcXVlSWQpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZEdyaWRSb3cgPSAocm93OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdDb2x1bW5zJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2x1bW5zT2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgY29sdW1uc09iai5nZXRMZW5ndGggPSAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uYXR0cmlidXRlcz8uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgICAgIGNvbHVtbnNPYmouZ2V0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHJvdz8uZGF0YT8uZW50aXR5Py5hdHRyaWJ1dGVzPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRHcmlkQ29sdW1uKGNvbHVtbik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbHVtbnNPYmouZm9yRWFjaCA9IChjYWxsYmFjazogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zID0gcm93Py5kYXRhPy5lbnRpdHk/LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29sdW1ucz8uZ2V0TGVuZ3RoKCk7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvYWRHcmlkQ29sdW1uKGNvbHVtbiksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnNPYmo7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0VudGl0eUlkJywgKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmdldElkKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdFbnRpdHlOYW1lJywgKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0VudGl0eVJlZmVyZW5jZScsICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5nZXRFbnRpdHlSZWZlcmVuY2UoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1ByaW1hcnlBdHRyaWJ1dGVWYWx1ZScsICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5nZXRQcmltYXJ5QXR0cmlidXRlVmFsdWUoKSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkR3JpZCA9IChmb3JtQ29udGV4dDogYW55LCBncmlkczogYW55LCBncmlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBncmlkQ29udHJvbCA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGdyaWQpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNvbGxlY3Rpb25PYmplY3QgPSAoZ2V0SXRlbXNGbjogYW55LCBwcm9jZXNzSXRlbUZuOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgb2JqLmdldExlbmd0aCA9ICgpID0+IGdldEl0ZW1zRm4oKT8uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgICAgIG9iai5nZXQgPSAoaW5kZXg6IG51bWJlcikgPT4gcHJvY2Vzc0l0ZW1GbihnZXRJdGVtc0ZuKCk/LmdldChpbmRleCkpO1xyXG4gICAgICAgICAgICBvYmouZm9yRWFjaCA9IChjYWxsYmFjazogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IGdldEl0ZW1zRm4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGl0ZW1zPy5nZXRMZW5ndGgoKSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb2Nlc3NJdGVtRm4oaXRlbXMuZ2V0KGluZGV4KSksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ0VudGl0eU5hbWUnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0RW50aXR5TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdGZXRjaFhtbCcsICgpID0+IGdyaWRDb250cm9sPy5nZXRGZXRjaFhtbCgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdHcmlkVHlwZScsICgpID0+IGdyaWRDb250cm9sPy5nZXRHcmlkVHlwZSgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdSZWxhdGlvbnNoaXAnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0UmVsYXRpb25zaGlwKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1Jvd3MnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRJbnN0YW5jZSA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGdyaWQpPy5nZXRHcmlkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb2xsZWN0aW9uT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gZ3JpZEluc3RhbmNlPy5nZXRSb3dzKCksXHJcbiAgICAgICAgICAgICAgICAocm93OiBhbnkpID0+IGxvYWRHcmlkUm93KHJvdylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdTZWxlY3RlZFJvd3MnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRJbnN0YW5jZSA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGdyaWQpPy5nZXRHcmlkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb2xsZWN0aW9uT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gZ3JpZEluc3RhbmNlPy5nZXRTZWxlY3RlZFJvd3MoKSxcclxuICAgICAgICAgICAgICAgIChyb3c6IGFueSkgPT4gbG9hZEdyaWRSb3cocm93Py5nZXREYXRhKCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnVG90YWxSZWNvcmRDb3VudCcsICgpID0+IGdyaWRDb250cm9sPy5nZXRHcmlkKCk/LmdldFRvdGFsUmVjb3JkQ291bnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnVmlld1NlbGVjdG9yJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3U2VsZWN0b3IgPSBncmlkQ29udHJvbD8uZ2V0Vmlld1NlbGVjdG9yKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgICAgIGdldHRlcihvYmosICdWaXNpYmxlJywgKCkgPT4gdmlld1NlbGVjdG9yPy5pc1Zpc2libGUoKSk7XHJcbiAgICAgICAgICAgIGdldHRlclNldHRlcihvYmosICdDdXJyZW50VmlldycsICgpID0+IHZpZXdTZWxlY3Rvcj8uZ2V0Q3VycmVudFZpZXcoKSwgKHZhbHVlOiBhbnkpID0+IHZpZXdTZWxlY3Rvcj8uc2V0Q3VycmVudFZpZXcodmFsdWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoZ3JpZHNbZ3JpZF0sICdWaXNpYmxlJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldFZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ3JpZENvbnRyb2w/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICBncmlkc1tncmlkXS5BZGRPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ3JpZENvbnRyb2w/LmFkZE9uTG9hZChjYWxsYmFjayk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uT3BlblJlbGF0ZWRHcmlkID0gKCkgPT4gZ3JpZENvbnRyb2w/Lm9wZW5SZWxhdGVkR3JpZCgpO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLlJlZnJlc2ggPSAoKSA9PiBncmlkQ29udHJvbD8ucmVmcmVzaCgpO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLlJlZnJlc2hSaWJib24gPSAoKSA9PiBncmlkQ29udHJvbD8ucmVmcmVzaFJpYmJvbigpO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLlJlbW92ZU9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBncmlkQ29udHJvbD8ucmVtb3ZlT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgICAgICBncmlkc1tncmlkXS5VcmwgPSAoY2xpZW50OiBudW1iZXIpID0+IGdyaWRDb250cm9sPy5nZXRVcmwoY2xpZW50KTtcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhncmlkcykuZm9yRWFjaChncmlkID0+IHtcclxuICAgICAgICBsb2FkR3JpZChmb3JtQ29udGV4dCwgZ3JpZHMsIGdyaWQpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gTG9hZEZvcm0oZm9ybUNvbnRleHQ6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBmb3JtOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGNvbnRleHREYXRhID0gZm9ybUNvbnRleHQ/LmRhdGE7XHJcbiAgICBjb25zdCBjb250ZXh0RGF0YUVudGl0eSA9IGZvcm1Db250ZXh0Py5kYXRhPy5lbnRpdHk7XHJcbiAgICBjb25zdCBjb250ZXh0VWkgPSBmb3JtQ29udGV4dD8udWk7XHJcbiAgICBjb25zdCBjb250ZXh0VWlGb3JtU2VsZWN0b3IgPSBmb3JtQ29udGV4dD8udWk/LmZvcm1TZWxlY3RvcjtcclxuICAgIGNvbnN0IGZpbmRGb3JtSXRlbSA9IChjcml0ZXJpYTogYW55LCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gY29udGV4dFVpRm9ybVNlbGVjdG9yPy5pdGVtcz8uZ2V0TGVuZ3RoKCkgPz8gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjb250ZXh0VWlGb3JtU2VsZWN0b3I/Lml0ZW1zPy5nZXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGNyaXRlcmlhKGl0ZW0pID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgZ2V0dGVyKGZvcm0sICdBdHRyaWJ1dGVzJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmF0dHJpYnV0ZXMpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdDb250cm9scycsICgpID0+IGNvbnRleHRVaT8uY29udHJvbHMpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdEYXRhSXNEaXJ0eScsICgpID0+IGNvbnRleHREYXRhPy5nZXRJc0RpcnR5KCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdEYXRhSXNWYWxpZCcsICgpID0+IGNvbnRleHREYXRhPy5pc1ZhbGlkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdEYXRhWG1sJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldERhdGFYbWwoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eUlkJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldElkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlJc0RpcnR5JywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldElzRGlydHkoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eUlzVmFsaWQnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uaXNWYWxpZCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5TmFtZScsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlSZWZlcmVuY2UnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0RW50aXR5UmVmZXJlbmNlKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdGb3JtSWQnLCAoKSA9PiBjb250ZXh0VWlGb3JtU2VsZWN0b3I/LmdldEN1cnJlbnRJdGVtKCk/LmdldElkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdGb3JtTGFiZWwnLCAoKSA9PiBjb250ZXh0VWlGb3JtU2VsZWN0b3I/LmdldEN1cnJlbnRJdGVtKCk/LmdldExhYmVsKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdGb3JtVHlwZScsICgpID0+IGNvbnRleHRVaT8uZ2V0Rm9ybVR5cGUoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ1ByaW1hcnlBdHRyaWJ1dGVWYWx1ZScsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRQcmltYXJ5QXR0cmlidXRlVmFsdWUoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ1ZpZXdQb3J0SGVpZ2h0JywgKCkgPT4gY29udGV4dFVpPy5nZXRWaWV3UG9ydEhlaWdodCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnVmlld1BvcnRXaWR0aCcsICgpID0+IGNvbnRleHRVaT8uZ2V0Vmlld1BvcnRXaWR0aCgpKTtcclxuICAgIGZvcm0uQWRkT25Qb3N0U2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8uYWRkT25Qb3N0U2F2ZShjYWxsYmFjayk7XHJcbiAgICBmb3JtLkFkZE9uU2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8uYWRkT25TYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uQ2xlYXJGb3JtTm90aWZpY2F0aW9uID0gKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRleHRVaT8uY2xlYXJGb3JtTm90aWZpY2F0aW9uKHVuaXF1ZUlkKTtcclxuICAgIGZvcm0uQ2xvc2UgPSAoKSA9PiBjb250ZXh0VWk/LmNsb3NlKCk7XHJcbiAgICBmb3JtLkRhdGFBZGRPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGE/LmFkZE9uTG9hZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLkRhdGFSZW1vdmVPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGE/LnJlbW92ZU9uTG9hZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLkZvcm1Jc1Zpc2libGUgPSAoZm9ybUlkOiBzdHJpbmcpID0+IHsgcmV0dXJuIGZpbmRGb3JtSXRlbSgoaXRlbTogYW55KSA9PiBpdGVtLmdldElkKCksIGZvcm1JZCk/LmdldFZpc2libGUoKTsgfTtcclxuICAgIGZvcm0uRm9ybU5hdmlnYXRlVG9Gb3JtSWQgPSAoZm9ybUlkOiBzdHJpbmcpID0+IHsgZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0SWQoKSwgZm9ybUlkKT8ubmF2aWdhdGUoKTsgfTtcclxuICAgIGZvcm0uRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWwgPSAoZm9ybUxhYmVsOiBzdHJpbmcpID0+IHsgZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0TGFiZWwoKSwgZm9ybUxhYmVsKT8ubmF2aWdhdGUoKTsgfTtcclxuICAgIGZvcm0uRm9ybVNldFZpc2libGUgPSAoZm9ybUlkOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuKSA9PiB7IGZpbmRGb3JtSXRlbSgoaXRlbTogYW55KSA9PiBpdGVtLmdldElkKCksIGZvcm1JZCk/LnNldFZpc2libGUodmFsdWUpOyB9O1xyXG4gICAgZm9ybS5SZWZyZXNoID0gKHNhdmU/OiBib29sZWFuLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gY29udGV4dERhdGE/LnJlZnJlc2goc2F2ZSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgZm9ybS5SZWZyZXNoUmliYm9uID0gKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiBjb250ZXh0VWk/LnJlZnJlc2hSaWJib24ocmVmcmVzaEFsbCk7XHJcbiAgICBmb3JtLlJlbW92ZU9uUG9zdFNhdmUgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGFFbnRpdHk/LnJlbW92ZU9uUG9zdFNhdmUoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5SZW1vdmVPblNhdmUgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGFFbnRpdHk/LnJlbW92ZU9uU2F2ZShjYWxsYmFjayk7XHJcbiAgICBmb3JtLlNhdmUgPSAoc2F2ZU9wdGlvbnM/OiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250ZXh0RGF0YT8uc2F2ZShzYXZlT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgZm9ybS5TZXRGb3JtRW50aXR5TmFtZSA9IChhcmc6IHN0cmluZykgPT4gY29udGV4dFVpPy5zZXRGb3JtRW50aXR5TmFtZShhcmcpO1xyXG4gICAgZm9ybS5TZXRGb3JtTm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gY29udGV4dFVpPy5zZXRGb3JtTm90aWZpY2F0aW9uKG1lc3NhZ2UsIGxldmVsLCB1bmlxdWVJZCk7XHJcbiAgICBmb3JtLlVpQWRkTG9hZGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHRVaT8uYWRkTG9hZGVkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uVWlBZGRPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5hZGRPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5VaVJlbW92ZUxvYWRlZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0VWk/LnJlbW92ZUxvYWRlZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLlVpUmVtb3ZlT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHRVaT8ucmVtb3ZlT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcbmZ1bmN0aW9uIExvYWRFeGVjdXRpb25Db250ZXh0KGV4ZWN1dGlvbkNvbnRleHQ6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0RlcHRoJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RGVwdGgoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnRW50aXR5UmVmZXJlbmNlJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldEVudGl0eVJlZmVyZW5jZSgpKTtcclxuICAgIGdldHRlcihvYmosICdFdmVudEFyZ3MnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnRXZlbnRTb3VyY2UnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudFNvdXJjZSgpKTtcclxuICAgIGdldHRlcihvYmosICdGb3JtQ29udGV4dCcsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEZvcm1Db250ZXh0KCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0lzU2F2ZVN1Y2Nlc3MnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0SXNTYXZlU3VjY2VzcygpKTtcclxuICAgIGdldHRlcihvYmosICdTYXZlRXJyb3JJbmZvJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldFNhdmVFcnJvckluZm8oKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnU2F2ZU1vZGUnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0U2F2ZU1vZGUoKSk7XHJcbiAgICBvYmouRGlzYWJsZUFzeW5jVGltZW91dCA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5kaXNhYmxlQXN5bmNUaW1lb3V0KCk7XHJcbiAgICBvYmouR2V0U2hhcmVkVmFyaWFibGUgPSAoa2V5OiBzdHJpbmcpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldFNoYXJlZFZhcmlhYmxlKGtleSk7XHJcbiAgICBvYmouSXNEZWZhdWx0UHJldmVudGVkID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xyXG4gICAgb2JqLklzSW5pdGlhbExvYWQgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0RGF0YUxvYWRTdGF0ZSgpID09PSAxO1xyXG4gICAgb2JqLlNldFByZXZlbnREZWZhdWx0ID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBvYmouU2V0UHJldmVudERlZmF1bHRPbkVycm9yID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LnByZXZlbnREZWZhdWx0T25FcnJvcigpO1xyXG4gICAgb2JqLlNldFNoYXJlZFZhcmlhYmxlID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiBleGVjdXRpb25Db250ZXh0Py5zZXRTaGFyZWRWYXJpYWJsZShrZXksIHZhbHVlKTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuLyoqXHJcbiAqIExvYWRzIHRoZSBTaWRlUGFuZXMgQVBJIHdyYXBwZXIuXHJcbiAqIFByb3ZpZGVzIGFjY2VzcyB0byBzaWRlIHBhbmVzIGZ1bmN0aW9uYWxpdHkgaW4gbW9kZWwtZHJpdmVuIGFwcHMuXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIElTaWRlUGFuZXMgaW50ZXJmYWNlXHJcbiAqIEBsaW5rIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlci1hcHBzL2RldmVsb3Blci9tb2RlbC1kcml2ZW4tYXBwcy9jbGllbnRhcGkvcmVmZXJlbmNlL3hybS1hcHAtc2lkZXBhbmVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZFNpZGVQYW5lcygpOiBhbnkge1xyXG4gICAgY29uc3Qgc2lkZVBhbmVzOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgZ2V0dGVyU2V0dGVyKHNpZGVQYW5lcywgJ0Rpc3BsYXlTdGF0ZScsICgpID0+ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LnN0YXRlLCAodmFsdWU6IGFueSkgPT4geyBjb25zdCB4ID0gZ2V0WHJtKCk7IGlmICgoeCBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcykgKHggYXMgYW55KS5BcHAuc2lkZVBhbmVzLnN0YXRlID0gdmFsdWU7IH0pO1xyXG4gICAgc2lkZVBhbmVzLkNyZWF0ZSA9IGZ1bmN0aW9uIChwYW5lT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnkpIHsgKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uY3JlYXRlUGFuZShwYW5lT3B0aW9ucyk/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrKTsgfTtcclxuICAgIHNpZGVQYW5lcy5HZXQgPSAocGFuZUlkOiBzdHJpbmcpID0+ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LmdldFBhbmUocGFuZUlkKTtcclxuICAgIHNpZGVQYW5lcy5HZXRBbGwgPSAoKSA9PiAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5nZXRBbGxQYW5lcygpO1xyXG4gICAgc2lkZVBhbmVzLkdldFNlbGVjdGVkID0gKCkgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uZ2V0U2VsZWN0ZWRQYW5lKCk7XHJcbiAgICByZXR1cm4gc2lkZVBhbmVzO1xyXG59XHJcbi8qKlxyXG4gKiBMb2FkcyB0aGUgV2ViQXBpIHdyYXBwZXIuXHJcbiAqIFByb3ZpZGVzIG1ldGhvZHMgdG8gdXNlIFdlYiBBUEkgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgcmVjb3JkcyBhbmQgZXhlY3V0ZSBXZWIgQVBJIGFjdGlvbnMgYW5kIGZ1bmN0aW9ucy5cclxuICogQHJldHVybnMgQW4gb2JqZWN0IGltcGxlbWVudGluZyB0aGUgSVdlYkFwaSBpbnRlcmZhY2VcclxuICogQGxpbmsgaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL3Bvd2VyLWFwcHMvZGV2ZWxvcGVyL21vZGVsLWRyaXZlbi1hcHBzL2NsaWVudGFwaS9yZWZlcmVuY2UveHJtLXdlYmFwaVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRXZWJBcGkoKTogRGV2S2l0LklXZWJBcGkge1xyXG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fSBhcyBEZXZLaXQuSVdlYkFwaTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgY29uc3QgZ2V0V2ViQXBpID0geHJtPy5XZWJBcGk7XHJcbiAgICBjb25zdCBnZXRPbmxpbmUgPSB4cm0/LldlYkFwaT8ub25saW5lO1xyXG4gICAgY29uc3QgZ2V0T2ZmbGluZSA9IHhybT8uV2ViQXBpPy5vZmZsaW5lO1xyXG4gICAgY29uc3QgZXh0cmFjdEVudGl0eU5hbWUgPSBmdW5jdGlvbiAoZmV0Y2hYbWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGNsZWFuWG1sID0gZmV0Y2hYbWw7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hYbWxNYXRjaCA9IGZldGNoWG1sLm1hdGNoKC9mZXRjaHhtbD0vaSk7XHJcbiAgICAgICAgaWYgKGZldGNoWG1sTWF0Y2gpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXRJbmRleCA9IGZldGNoWG1sLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmV0Y2h4bWw9JykgKyAnZmV0Y2h4bWw9Jy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNsZWFuWG1sID0gZGVjb2RlVVJJQ29tcG9uZW50KGZldGNoWG1sLnN1YnN0cmluZyhzcGxpdEluZGV4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZldGNoWG1sLnRyaW0oKS5zdGFydHNXaXRoKCc8JykpIHtcclxuICAgICAgICAgICAgY2xlYW5YbWwgPSBmZXRjaFhtbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoY2xlYW5YbWwsIFwidGV4dC94bWxcIik7XHJcbiAgICAgICAgY29uc3QgZW50aXR5Tm9kZSA9IHhtbERvYy5xdWVyeVNlbGVjdG9yKFwiZW50aXR5XCIpO1xyXG4gICAgICAgIGlmIChlbnRpdHlOb2RlICYmIGVudGl0eU5vZGUuaGFzQXR0cmlidXRlKFwibmFtZVwiKSlcclxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eU5vZGUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSE7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW50aXR5IG5hbWUgbm90IGZvdW5kIGluIGZldGNoWG1sXCIpO1xyXG4gICAgfTtcclxuICAgIG9iai5DcmVhdGVSZWNvcmQgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgZGF0YTogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5jcmVhdGVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGRhdGEpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouRGVsZXRlUmVjb3JkID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LmRlbGV0ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgaWQpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouUmV0cmlldmVSZWNvcmQgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgb3B0aW9ucz86IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8ucmV0cmlldmVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkLCBvcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlJldHJpZXZlTXVsdGlwbGVSZWNvcmRzID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcsIG1heFBhZ2VTaXplPzogbnVtYmVyLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZU11bHRpcGxlUmVjb3JkcyhlbnRpdHlMb2dpY2FsTmFtZSwgb3B0aW9ucywgbWF4UGFnZVNpemUpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouVXBkYXRlUmVjb3JkID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGRhdGE6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8udXBkYXRlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBpZCwgZGF0YSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5FeGVjdXRlID0gZnVuY3Rpb24gKHJlcXVlc3Q6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IChnZXRXZWJBcGkgYXMgYW55KT8uZXhlY3V0ZShyZXF1ZXN0KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkV4ZWN1dGVNdWx0aXBsZSA9IGZ1bmN0aW9uIChyZXF1ZXN0czogYW55W10sIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAoZ2V0V2ViQXBpIGFzIGFueSk/LmV4ZWN1dGVNdWx0aXBsZShyZXF1ZXN0cyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5SZXRyaWV2ZVJlY29yZHMgPSBmdW5jdGlvbiAoYXBpQ29uc3RydWN0b3JPckZhY3Rvcnk6IGFueSwgZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnM6IHN0cmluZywgb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrPzogYW55LCBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrPzogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBsZXQgZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZztcclxuICAgICAgICBsZXQgb3B0aW9uczogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCBtYXhQYWdlU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IGhhc0ZldGNoWG1sID0gKHN0cjogc3RyaW5nKSA9PiAvZmV0Y2h4bWw9L2kudGVzdChzdHIpO1xyXG4gICAgICAgIGNvbnN0IGlzUGxhaW5GZXRjaFhtbCA9IChzdHI6IHN0cmluZykgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgc3RyLnRyaW0oKS5zdGFydHNXaXRoKCc8ZmV0Y2gnKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRQYXJhbUlzRmV0Y2hYbWxPck9EYXRhID0gdHlwZW9mIGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgICAgICAoaGFzRmV0Y2hYbWwoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMpIHx8XHJcbiAgICAgICAgICAgICAgICBpc1BsYWluRmV0Y2hYbWwoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMpIHx8XHJcbiAgICAgICAgICAgICAgICAoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMuc3RhcnRzV2l0aCgnPycpICYmICFoYXNGZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykpKTtcclxuICAgICAgICBpZiAoc2Vjb25kUGFyYW1Jc0ZldGNoWG1sT3JPRGF0YSkge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnM7XHJcbiAgICAgICAgICAgIGlmIChpc1BsYWluRmV0Y2hYbWwob3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAnP2ZldGNoWG1sPScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhhc0ZldGNoWG1sKG9wdGlvbnMpIHx8IGlzUGxhaW5GZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIGVudGl0eUxvZ2ljYWxOYW1lID0gZXh0cmFjdEVudGl0eU5hbWUob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VudGl0eSBuYW1lIGNhbm5vdCBiZSBkZXRlcm1pbmVkIGZyb20gT0RhdGEgcXVlcnkuIFBsZWFzZSBwcm92aWRlIGVudGl0eUxvZ2ljYWxOYW1lIGFzIHNlY29uZCBwYXJhbWV0ZXIuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayA9IG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIG1heFBhZ2VTaXplID0gb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW50aXR5TG9naWNhbE5hbWUgPSBlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucztcclxuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjaztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIG1heFBhZ2VTaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnJldHJpZXZlTXVsdGlwbGVSZWNvcmRzKGVudGl0eUxvZ2ljYWxOYW1lISwgb3B0aW9ucywgbWF4UGFnZVNpemUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW50aXRpZXMgJiYgcmVzdWx0LmVudGl0aWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZW50aXRpZXMubWFwKChlbnRpdHk6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkgPT09ICdmdW5jdGlvbicgJiYgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkucHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5KGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeShlbnRpdHkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlJldHJpZXZlUmVjb3JkID0gZnVuY3Rpb24gKGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5OiBhbnksIGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcgfCBGdW5jdGlvbiwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBzdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBcIj8kc2VsZWN0PSpcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBcIj8kc2VsZWN0PSpcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8ucmV0cmlldmVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkLCBvcHRpb25zIGFzIHN0cmluZykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeSA9PT0gJ2Z1bmN0aW9uJyAmJiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeS5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgID8gbmV3IGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5KHJlc3VsdClcclxuICAgICAgICAgICAgICAgIDogYXBpQ29uc3RydWN0b3JPckZhY3RvcnkocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZ2V0dGVyKG9iaiwgJ09ubGluZScsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvbmxpbmU6IGFueSA9IHt9O1xyXG4gICAgICAgIG9ubGluZS5FeGVjdXRlID0gZnVuY3Rpb24gKHJlcXVlc3Q6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRPbmxpbmU/LmV4ZWN1dGUocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvbmxpbmUuRXhlY3V0ZU11bHRpcGxlID0gZnVuY3Rpb24gKHJlcXVlc3RzOiBhbnlbXSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRPbmxpbmU/LmV4ZWN1dGVNdWx0aXBsZShyZXF1ZXN0cyk7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gb25saW5lO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnT2ZmbGluZScsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvZmZsaW5lOiBhbnkgPSB7fTtcclxuICAgICAgICBvZmZsaW5lLklzQXZhaWxhYmxlID0gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcpID0+IChnZXRPZmZsaW5lIGFzIGFueSk/LmlzQXZhaWxhYmxlKGVudGl0eUxvZ2ljYWxOYW1lKTtcclxuICAgICAgICByZXR1cm4gb2ZmbGluZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG4vKipcclxuICogTG9hZHMgdGhlIENvcGlsb3QgQVBJIHdyYXBwZXIuXHJcbiAqIFByb3ZpZGVzIGFjY2VzcyB0byBDb3BpbG90IGZ1bmN0aW9uYWxpdHkgZm9yIGV4ZWN1dGluZyBldmVudHMgYW5kIHByb21wdHMuXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIElDb3BpbG90IGludGVyZmFjZVxyXG4gKiBAbGluayBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXItYXBwcy9kZXZlbG9wZXIvbW9kZWwtZHJpdmVuLWFwcHMvY2xpZW50YXBpL3JlZmVyZW5jZS94cm0tY29waWxvdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRDb3BpbG90KCk6IERldktpdC5JQ29waWxvdCB7XHJcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBjb25zdCBnZXRDb3BpbG90ID0gKHhybSBhcyBhbnkpPy5Db3BpbG90O1xyXG4gICAgb2JqLkV4ZWN1dGVFdmVudCA9IGZ1bmN0aW9uIChldmVudE5hbWU6IHN0cmluZywgZXZlbnRQYXJhbWV0ZXJzOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRDb3BpbG90Py5leGVjdXRlRXZlbnQoZXZlbnROYW1lLCBldmVudFBhcmFtZXRlcnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouRXhlY3V0ZVByb21wdCA9IGZ1bmN0aW9uIChwcm9tcHRUZXh0OiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRDb3BpbG90Py5leGVjdXRlUHJvbXB0KHByb21wdFRleHQpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRPdGhlcnMoZm9ybUNvbnRleHQ6IGFueSwgZm9ybTogYW55LCBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGZvcm0uU2lkZVBhbmVzID0gTG9hZFNpZGVQYW5lcygpO1xyXG4gICAgZm9ybS5XZWJBcGkgPSBMb2FkV2ViQXBpKCk7XHJcbiAgICBmb3JtLkNvcGlsb3QgPSBMb2FkQ29waWxvdCgpO1xyXG59XHJcbi8qKlxyXG4gKiBMb2FkcyBhIGZvcm0gd2l0aCB0eXBlZCBCb2R5LCBIZWFkZXIsIFRhYiwgR3JpZCwgTmF2aWdhdGlvbiwgUXVpY2tGb3JtLCBhbmQgUHJvY2VzcyBzZWN0aW9ucy5cclxuICogVGhpcyBpcyB0aGUgbWFpbiBmdW5jdGlvbiBmb3IgaW5pdGlhbGl6aW5nIGEgZm9ybSBpbiBUeXBlU2NyaXB0LlxyXG4gKiBAcGFyYW0gZXhlY3V0aW9uQ29udGV4dCBUaGUgZXhlY3V0aW9uIGNvbnRleHQgcGFzc2VkIHRvIHRoZSBmb3JtIGV2ZW50IGhhbmRsZXJcclxuICogQHBhcmFtIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUgT3B0aW9uYWwgZGVmYXVsdCB3ZWIgcmVzb3VyY2UgbmFtZSBmb3IgdXRpbGl0eSBmdW5jdGlvbnNcclxuICogQHBhcmFtIGZvcm1Db25maWcgQ29uZmlndXJhdGlvbiBvYmplY3Qgc3BlY2lmeWluZyBmaWVsZHMsIHRhYnMsIGdyaWRzLCBldGMuXHJcbiAqIEByZXR1cm5zIEEgdHlwZWQgZm9ybSBvYmplY3Qgd2l0aCBhbGwgZm9ybSBmdW5jdGlvbmFsaXR5XHJcbiAqIEBsaW5rIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlci1hcHBzL2RldmVsb3Blci9tb2RlbC1kcml2ZW4tYXBwcy9jbGllbnRhcGkvcmVmZXJlbmNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZEZvcm1WMjxUQm9keSA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRIZWFkZXIgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUVGFiID0gUmVjb3JkPHN0cmluZywgYW55PiwgVEdyaWQgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUTmF2aWdhdGlvbiA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRRdWlja0Zvcm0gPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUUHJvY2VzcyA9IGFueT4oXHJcbiAgICBleGVjdXRpb25Db250ZXh0OiBhbnksXHJcbiAgICBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICBmb3JtQ29uZmlnOiB7XHJcbiAgICAgICAgYm9keT86IHN0cmluZ1tdO1xyXG4gICAgICAgIGhlYWRlcj86IHN0cmluZ1tdO1xyXG4gICAgICAgIHRhYj86IHN0cmluZ1tdO1xyXG4gICAgICAgIGdyaWQ/OiBzdHJpbmdbXTtcclxuICAgICAgICBuYXZpZ2F0aW9uPzogc3RyaW5nW107XHJcbiAgICAgICAgcXVpY2s/OiBzdHJpbmdbXTtcclxuICAgICAgICBicGY/OiBzdHJpbmdbXTtcclxuICAgIH1cclxuKToge1xyXG4gICAgRXhlY3V0aW9uQ29udGV4dDogRGV2S2l0LklFeGVjdXRpb25Db250ZXh0O1xyXG4gICAgQm9keTogVEJvZHk7XHJcbiAgICBIZWFkZXI6IFRIZWFkZXI7XHJcbiAgICBUYWI6IFRUYWI7XHJcbiAgICBHcmlkOiBUR3JpZDtcclxuICAgIE5hdmlnYXRpb246IFROYXZpZ2F0aW9uO1xyXG4gICAgUXVpY2tGb3JtOiBUUXVpY2tGb3JtO1xyXG4gICAgRm9ybUlkOiBzdHJpbmc7XHJcbiAgICBGb3JtTGFiZWw6IHN0cmluZztcclxuICAgIEZvcm1UeXBlOiBudW1iZXI7XHJcbiAgICBFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgRW50aXR5TmFtZTogc3RyaW5nO1xyXG4gICAgRGF0YUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBEYXRhSXNWYWxpZDogYm9vbGVhbjtcclxuICAgIEF0dHJpYnV0ZXM6IGFueTtcclxuICAgIENvbnRyb2xzOiBhbnk7XHJcbiAgICBEYXRhWG1sOiBzdHJpbmc7XHJcbiAgICBFbnRpdHlJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgRW50aXR5SXNWYWxpZDogYm9vbGVhbjtcclxuICAgIEVudGl0eVJlZmVyZW5jZTogYW55O1xyXG4gICAgUHJpbWFyeUF0dHJpYnV0ZVZhbHVlOiBzdHJpbmc7XHJcbiAgICBWaWV3UG9ydEhlaWdodDogbnVtYmVyO1xyXG4gICAgVmlld1BvcnRXaWR0aDogbnVtYmVyO1xyXG4gICAgU2F2ZTogKHNhdmVPcHRpb25zPzogYW55KSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgUmVmcmVzaDogKHNhdmU/OiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgICBTZXRGb3JtTm90aWZpY2F0aW9uOiAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgQ2xlYXJGb3JtTm90aWZpY2F0aW9uOiAodW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIFJlZnJlc2hSaWJib246IChyZWZyZXNoQWxsPzogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIFVpQWRkTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBVaVJlbW92ZUxvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgVWlBZGRPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFVpUmVtb3ZlT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBBZGRPblBvc3RTYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBBZGRPblNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFJlbW92ZU9uUG9zdFNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFJlbW92ZU9uU2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgRGF0YUFkZE9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgRGF0YVJlbW92ZU9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgRm9ybUlzVmlzaWJsZTogKGZvcm1JZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgRm9ybU5hdmlnYXRlVG9Gb3JtSWQ6IChmb3JtSWQ6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIEZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsOiAoZm9ybUxhYmVsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBGb3JtU2V0VmlzaWJsZTogKGZvcm1JZDogc3RyaW5nLCB2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgU2V0Rm9ybUVudGl0eU5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBQcm9jZXNzOiBUUHJvY2VzcztcclxuICAgIFV0aWxpdHk6IGFueTtcclxuICAgIFNpZGVQYW5lczogYW55O1xyXG4gICAgV2ViQXBpOiBhbnk7XHJcbiAgICBDb3BpbG90OiBhbnk7XHJcbn0ge1xyXG4gICAgY29uc3QgZm9ybUNvbnRleHQgPSBleGVjdXRpb25Db250ZXh0Py5nZXRGb3JtQ29udGV4dD8uKCkgPz8gZXhlY3V0aW9uQ29udGV4dCA/PyBudWxsO1xyXG4gICAgY29uc3QgZm9ybSA9IExvYWRGb3JtKGZvcm1Db250ZXh0KTtcclxuICAgIGNvbnN0IHsgYm9keSA9IFtdLCB0YWIgPSBbXSwgaGVhZGVyID0gW10sIGJwZiA9IFtdLCBxdWljayA9IFtdLCBncmlkID0gW10sIG5hdmlnYXRpb24gPSBbXSwgZGlhbG9nID0gW10gfSA9IGZvcm1Db25maWcgYXMgYW55O1xyXG4gICAgY29uc3QgYm9keU9iajogYW55ID0ge307XHJcbiAgICBib2R5LmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IGJvZHlPYmpbZmllbGRdID0ge30pO1xyXG4gICAgbG9hZEZpZWxkcyhmb3JtQ29udGV4dCwgYm9keU9iaik7XHJcbiAgICBjb25zdCB0YWJPYmo6IGFueSA9IHt9O1xyXG4gICAgdGFiLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFt0YWJOYW1lLCBzZWN0aW9uTmFtZV0gPSBpdGVtLnNwbGl0KCdfX18nKTtcclxuICAgICAgICBpZiAoIXRhYk9ialt0YWJOYW1lXSkge1xyXG4gICAgICAgICAgICB0YWJPYmpbdGFiTmFtZV0gPSB7IFNlY3Rpb246IHt9IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYk9ialt0YWJOYW1lXS5TZWN0aW9uW3NlY3Rpb25OYW1lXSA9IHt9O1xyXG4gICAgfSk7XHJcbiAgICBsb2FkVGFicyhmb3JtQ29udGV4dCwgdGFiT2JqKTtcclxuICAgIGJvZHlPYmouVGFiID0gdGFiT2JqO1xyXG4gICAgZm9ybS5Cb2R5ID0gYm9keU9iajtcclxuICAgIGNvbnN0IGhlYWRlck9iajogYW55ID0ge307XHJcbiAgICBoZWFkZXIuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4gaGVhZGVyT2JqW2ZpZWxkXSA9IHt9KTtcclxuICAgIGxvYWRGaWVsZHMoZm9ybUNvbnRleHQsIGhlYWRlck9iaiwgJ2hlYWRlcl8nKTtcclxuICAgIGZvcm0uSGVhZGVyID0gaGVhZGVyT2JqO1xyXG4gICAgY29uc3QgcHJvY2VzcyA9IExvYWRQcm9jZXNzKGZvcm1Db250ZXh0KTtcclxuICAgIGlmIChicGYubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGJwZk9iajogYW55ID0ge307XHJcbiAgICAgICAgbGV0IGJwZlByb2Nlc3NOYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBicGYuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtwcm9jZXNzTmFtZSwgZmllbGROYW1lXSA9IGl0ZW0uc3BsaXQoJ19fXycpO1xyXG4gICAgICAgICAgICBpZiAoIWJwZlByb2Nlc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBicGZQcm9jZXNzTmFtZSA9IHByb2Nlc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJwZk9ialtmaWVsZE5hbWVdID0ge307XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9hZEZpZWxkcyhmb3JtQ29udGV4dCwgYnBmT2JqLCAnaGVhZGVyX3Byb2Nlc3NfJyk7XHJcbiAgICAgICAgaWYgKGJwZlByb2Nlc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIHByb2Nlc3NbYnBmUHJvY2Vzc05hbWVdID0gYnBmT2JqO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcm0uUHJvY2VzcyA9IHByb2Nlc3M7XHJcbiAgICBjb25zdCBxdWlja0Zvcm1PYmo6IGFueSA9IHt9O1xyXG4gICAgcXVpY2suZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3F1aWNrRm9ybU5hbWUsIGZpZWxkTmFtZV0gPSBpdGVtLnNwbGl0KCdfX18nKTtcclxuICAgICAgICBpZiAoIXF1aWNrRm9ybU9ialtxdWlja0Zvcm1OYW1lXSkge1xyXG4gICAgICAgICAgICBxdWlja0Zvcm1PYmpbcXVpY2tGb3JtTmFtZV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICBxdWlja0Zvcm1PYmpbcXVpY2tGb3JtTmFtZV1bZmllbGROYW1lXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbG9hZFF1aWNrRm9ybXMoZm9ybUNvbnRleHQsIHF1aWNrRm9ybU9iaik7XHJcbiAgICBmb3JtLlF1aWNrRm9ybSA9IHF1aWNrRm9ybU9iajtcclxuICAgIGNvbnN0IGdyaWRPYmo6IGFueSA9IHt9O1xyXG4gICAgZ3JpZC5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IGdyaWRPYmpbaXRlbV0gPSB7fSk7XHJcbiAgICBsb2FkR3JpZHMoZm9ybUNvbnRleHQsIGdyaWRPYmopO1xyXG4gICAgZm9ybS5HcmlkID0gZ3JpZE9iajtcclxuICAgIGNvbnN0IG5hdmlnYXRpb25PYmo6IGFueSA9IHt9O1xyXG4gICAgbmF2aWdhdGlvbi5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IG5hdmlnYXRpb25PYmpbaXRlbV0gPSB7fSk7XHJcbiAgICBsb2FkTmF2aWdhdGlvbnMoZm9ybUNvbnRleHQsIG5hdmlnYXRpb25PYmopO1xyXG4gICAgZm9ybS5OYXZpZ2F0aW9uID0gbmF2aWdhdGlvbk9iajtcclxuICAgIGlmIChkaWFsb2cubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcm0uRGlhbG9nID0gTG9hZEZvcm1EaWFsb2coZm9ybUNvbnRleHQsIGRpYWxvZyk7XHJcbiAgICB9XHJcbiAgICBmb3JtLlV0aWxpdHkgPSBMb2FkVXRpbGl0eShkZWZhdWx0V2ViUmVzb3VyY2VOYW1lKTtcclxuICAgIGZvcm0uRXhlY3V0aW9uQ29udGV4dCA9IExvYWRFeGVjdXRpb25Db250ZXh0KGV4ZWN1dGlvbkNvbnRleHQpO1xyXG4gICAgbG9hZE90aGVycyhmb3JtQ29udGV4dCwgZm9ybSwgZGVmYXVsdFdlYlJlc291cmNlTmFtZSk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTG9hZFByb2Nlc3MoZm9ybUNvbnRleHQ6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBwcm9jZXNzOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGdldFByb2Nlc3MgPSBmb3JtQ29udGV4dD8uZGF0YT8ucHJvY2VzcztcclxuICAgIGNvbnN0IGdldFByb2Nlc3NVaSA9IGZvcm1Db250ZXh0Py51aT8ucHJvY2VzcztcclxuICAgIGNvbnN0IGxvYWRTdGVwID0gKHN0ZXA6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0F0dHJpYnV0ZScsICgpID0+IHN0ZXA/LmdldEF0dHJpYnV0ZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTmFtZScsICgpID0+IHN0ZXA/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1Byb2dyZXNzJywgKCkgPT4gc3RlcD8uZ2V0UHJvZ3Jlc3MoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1JlcXVpcmVkJywgKCkgPT4gc3RlcD8uaXNSZXF1aXJlZCgpKTtcclxuICAgICAgICBvYmouU2V0UHJvZ3Jlc3MgPSAoc3RlcFByb2dyZXNzOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZykgPT4gc3RlcD8uc2V0UHJvZ3Jlc3Moc3RlcFByb2dyZXNzLCBtZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRTdGFnZSA9IChzdGFnZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ2F0ZWdvcnknLCAoKSA9PiBzdGFnZT8uZ2V0Q2F0ZWdvcnkoKT8uZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0VudGl0eU5hbWUnLCAoKSA9PiBzdGFnZT8uZ2V0RW50aXR5TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSWQnLCAoKSA9PiBzdGFnZT8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBzdGFnZT8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU3RhdHVzJywgKCkgPT4gc3RhZ2U/LmdldFN0YXR1cygpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU3RlcHMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gc3RhZ2U/LmdldFN0ZXBzKCk7XHJcbiAgICAgICAgICAgIGlmICghc3RlcHMpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcHNBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gc3RlcHMubGVuZ3RoIHx8IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHN0ZXBzQXJyYXkucHVzaChsb2FkU3RlcChzdGVwc1tpbmRleF0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RlcHNBcnJheTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBvYmouQWxsb3dDcmVhdGVOZXcgPSAoY2FsbGJhY2s6IGFueSkgPT4geyBpZiAoc3RhZ2U/LmdldE5hdmlnYXRpb25CZWhhdmlvcigpKSBzdGFnZS5nZXROYXZpZ2F0aW9uQmVoYXZpb3IoKS5hbGxvd0NyZWF0ZU5ldyA9IGNhbGxiYWNrOyB9O1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZFByb2Nlc3NJbm5lciA9IChwcm9jZXNzT2JqOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdJZCcsICgpID0+IHByb2Nlc3NPYmo/LmdldElkKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc1JlbmRlcmVkJywgKCkgPT4gcHJvY2Vzc09iaj8uaXNSZW5kZXJlZCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTmFtZScsICgpID0+IHByb2Nlc3NPYmo/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1N0YWdlcycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc1N0YWdlcyA9IHByb2Nlc3NPYmo/LmdldFN0YWdlcygpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFnZXNPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBzdGFnZXNPYmouZ2V0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gcHJvY2Vzc1N0YWdlcz8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkU3RhZ2Uoc3RhZ2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdGFnZXNPYmouZ2V0TGVuZ3RoID0gKCkgPT4gcHJvY2Vzc1N0YWdlcz8uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgICAgIHN0YWdlc09iai5mb3JFYWNoID0gKGNhbGxiYWNrOiAoc3RhZ2U6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gcHJvY2Vzc1N0YWdlcz8uZ2V0TGVuZ3RoKCkgfHwgMDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFnZSA9IHByb2Nlc3NTdGFnZXMuZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhsb2FkU3RhZ2Uoc3RhZ2UpLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBzdGFnZXNPYmo7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0FjdGl2ZVBhdGgnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGF0aE9iajogYW55ID0ge307XHJcbiAgICAgICAgYWN0aXZlUGF0aE9iai5nZXQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFnZSA9IGdldFByb2Nlc3M/LmdldEFjdGl2ZVBhdGgoKT8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgcmV0dXJuIGxvYWRTdGFnZShzdGFnZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhY3RpdmVQYXRoT2JqLmdldExlbmd0aCA9ICgpID0+IGdldFByb2Nlc3M/LmdldEFjdGl2ZVBhdGgoKT8uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgYWN0aXZlUGF0aE9iai5mb3JFYWNoID0gKGNhbGxiYWNrOiAoc3RhZ2U6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFnZXMgPSBnZXRQcm9jZXNzPy5nZXRBY3RpdmVQYXRoKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdGFnZXM/LmdldExlbmd0aCgpOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFnZSA9IHN0YWdlcz8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvYWRTdGFnZShzdGFnZSksIGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZVBhdGhPYmo7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnQWN0aXZlUHJvY2VzcycsICgpID0+IGxvYWRQcm9jZXNzSW5uZXIoZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlUHJvY2VzcygpKSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0FjdGl2ZVN0YWdlJywgKCkgPT4gbG9hZFN0YWdlKGdldFByb2Nlc3M/LmdldEFjdGl2ZVN0YWdlKCkpKTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnSW5zdGFuY2VJZCcsICgpID0+IGdldFByb2Nlc3M/LmdldEluc3RhbmNlSWQoKSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0luc3RhbmNlTmFtZScsICgpID0+IGdldFByb2Nlc3M/LmdldEluc3RhbmNlTmFtZSgpKTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnU2VsZWN0ZWRTdGFnZScsICgpID0+IGxvYWRTdGFnZShnZXRQcm9jZXNzPy5nZXRTZWxlY3RlZFN0YWdlKCkpKTtcclxuICAgIGdldHRlclNldHRlcihwcm9jZXNzLCAnRGlzcGxheVN0YXRlJywgKCkgPT4gZ2V0UHJvY2Vzc1VpPy5nZXREaXNwbGF5U3RhdGUoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgZ2V0UHJvY2Vzc1VpPy5zZXREaXNwbGF5U3RhdGUodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihwcm9jZXNzLCAnU3RhdHVzJywgKCkgPT4gZ2V0UHJvY2Vzcz8uZ2V0U3RhdHVzKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGdldFByb2Nlc3M/LnNldFN0YXR1cyh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKHByb2Nlc3MsICdWaXNpYmxlJywgKCkgPT4gZ2V0UHJvY2Vzc1VpPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYm9vbGVhbikgPT4geyBnZXRQcm9jZXNzVWk/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgIHByb2Nlc3MuQWRkT25QcmVQcm9jZXNzU3RhdHVzQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uUHJlUHJvY2Vzc1N0YXR1c0NoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkFkZE9uUHJlU3RhZ2VDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25QcmVTdGFnZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkFkZE9uUHJvY2Vzc1N0YXR1c0NoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblByb2Nlc3NTdGF0dXNDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5BZGRPblN0YWdlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uU3RhZ2VDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5BZGRPblN0YWdlU2VsZWN0ZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25TdGFnZVNlbGVjdGVkKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuRW5hYmxlZFByb2Nlc3NlcyA9IChjYWxsYmFjazogKHByb2Nlc3NlczogYW55W10pID0+IHZvaWQpID0+IHtcclxuICAgICAgICBnZXRQcm9jZXNzPy5nZXRFbmFibGVkUHJvY2Vzc2VzKChlbmFibGVkUHJvY2Vzc2VzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VzID0gT2JqZWN0LmVudHJpZXMoZW5hYmxlZFByb2Nlc3NlcykubWFwKChbcHJvY2Vzc0lkLCBwcm9jZXNzTmFtZV0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICBQcm9jZXNzSWQ6IHByb2Nlc3NJZCxcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NOYW1lOiBwcm9jZXNzTmFtZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHByb2Nlc3Nlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcHJvY2Vzcy5Nb3ZlTmV4dCA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5tb3ZlTmV4dChjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLk1vdmVQcmV2aW91cyA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5tb3ZlUHJldmlvdXMoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5Qcm9jZXNzSW5zdGFuY2VzID0gKGNhbGxiYWNrOiAocHJvY2Vzc2VzOiBhbnlbXSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgIGdldFByb2Nlc3M/LmdldFByb2Nlc3NJbnN0YW5jZXMoKHByb2Nlc3NJbnN0YW5jZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZXMgPSBPYmplY3QudmFsdWVzKHByb2Nlc3NJbnN0YW5jZXMpLm1hcCgocHJvYzogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc0lkOiBwcm9jLlByb2Nlc3NEZWZpbml0aW9uSUQsXHJcbiAgICAgICAgICAgICAgICBQcm9jZXNzTmFtZTogcHJvYy5Qcm9jZXNzRGVmaW5pdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICBDcmVhdGVkT246IHByb2MuQ3JlYXRlZE9uLFxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlZE9uRGF0ZTogcHJvYy5DcmVhdGVkT25EYXRlLFxyXG4gICAgICAgICAgICAgICAgSW5zdGFuY2VJZDogcHJvYy5Qcm9jZXNzSW5zdGFuY2VJRCxcclxuICAgICAgICAgICAgICAgIEluc3RhbmNlTmFtZTogcHJvYy5Qcm9jZXNzSW5zdGFuY2VOYW1lLFxyXG4gICAgICAgICAgICAgICAgU3RhdHVzOiBwcm9jLlN0YXR1c0NvZGVOYW1lXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgY2FsbGJhY2socHJvY2Vzc2VzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBwcm9jZXNzLlJlZmxvdyA9ICh1cGRhdGVVaTogYm9vbGVhbiwgcGFyZW50U3RhZ2U6IHN0cmluZywgbmV4dFN0YWdlOiBzdHJpbmcpID0+IGdldFByb2Nlc3NVaT8ucmVmbG93KHVwZGF0ZVVpLCBwYXJlbnRTdGFnZSwgbmV4dFN0YWdlKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25QcmVQcm9jZXNzU3RhdHVzQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uUHJlUHJvY2Vzc1N0YXR1c0NoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uUHJlU3RhZ2VDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25QcmVTdGFnZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uUHJvY2Vzc1N0YXR1c0NoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblByb2Nlc3NTdGF0dXNDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblN0YWdlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uU3RhZ2VDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblN0YWdlU2VsZWN0ZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25TdGFnZVNlbGVjdGVkKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuU2V0QWN0aXZlUHJvY2VzcyA9IChwcm9jZXNzSWQ6IHN0cmluZywgY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uc2V0QWN0aXZlUHJvY2Vzcyhwcm9jZXNzSWQsIGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuU2V0QWN0aXZlUHJvY2Vzc0luc3RhbmNlID0gKHByb2Nlc3NJbnN0YW5jZUlkOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnNldEFjdGl2ZVByb2Nlc3NJbnN0YW5jZShwcm9jZXNzSW5zdGFuY2VJZCwgY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5TZXRBY3RpdmVTdGFnZSA9IChzdGFnZUlkOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnNldEFjdGl2ZVN0YWdlKHN0YWdlSWQsIGNhbGxiYWNrKTtcclxuICAgIHJldHVybiBwcm9jZXNzO1xyXG59XHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGludGVyZmFjZSBmb3IgZm9ybSBpbml0aWFsaXphdGlvbi5cclxuICogU3BlY2lmaWVzIHdoaWNoIGZpZWxkcywgdGFicywgZ3JpZHMsIGV0Yy4gdG8gbG9hZCBvbiBhIGZvcm0uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtQ29uZmlnIHtcclxuICAgIC8qKiBBcnJheSBvZiBib2R5IGZpZWxkIGxvZ2ljYWwgbmFtZXMgKi9cclxuICAgIGJvZHk/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBoZWFkZXIgZmllbGQgbG9naWNhbCBuYW1lcyAqL1xyXG4gICAgaGVhZGVyPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgdGFiIGFuZCBzZWN0aW9uIG5hbWVzIGluIGZvcm1hdCBcIlRhYk5hbWVfX19TZWN0aW9uTmFtZVwiICovXHJcbiAgICB0YWI/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBncmlkIGNvbnRyb2wgbmFtZXMgKi9cclxuICAgIGdyaWQ/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBuYXZpZ2F0aW9uIGl0ZW0gSURzICovXHJcbiAgICBuYXZpZ2F0aW9uPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgcXVpY2sgZm9ybSBuYW1lcyBpbiBmb3JtYXQgXCJRdWlja0Zvcm1OYW1lX19fRmllbGROYW1lXCIgKi9cclxuICAgIHF1aWNrPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgQlBGIGZpZWxkcyBpbiBmb3JtYXQgXCJQcm9jZXNzTmFtZV9fX0ZpZWxkTmFtZVwiICovXHJcbiAgICBicGY/OiBzdHJpbmdbXTtcclxufVxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgdHlwZWQgZW50aXR5IGZvcm1zLlxyXG4gKiBQcm92aWRlcyBzdHJvbmdseS10eXBlZCBhY2Nlc3MgdG8gZm9ybSBjb250cm9scywgZmllbGRzLCB0YWJzLCBncmlkcywgYW5kIG1vcmUuXHJcbiAqIEV4dGVuZCB0aGlzIGNsYXNzIGluIGdlbmVyYXRlZCBlbnRpdHkgZm9ybSBmaWxlcy5cclxuICogQHRlbXBsYXRlIFRCb2R5IFR5cGUgZGVmaW5pdGlvbiBmb3IgYm9keSBmaWVsZHNcclxuICogQHRlbXBsYXRlIFRIZWFkZXIgVHlwZSBkZWZpbml0aW9uIGZvciBoZWFkZXIgZmllbGRzXHJcbiAqIEB0ZW1wbGF0ZSBUVGFiIFR5cGUgZGVmaW5pdGlvbiBmb3IgdGFic1xyXG4gKiBAdGVtcGxhdGUgVEdyaWQgVHlwZSBkZWZpbml0aW9uIGZvciBncmlkc1xyXG4gKiBAdGVtcGxhdGUgVE5hdmlnYXRpb24gVHlwZSBkZWZpbml0aW9uIGZvciBuYXZpZ2F0aW9uIGl0ZW1zXHJcbiAqIEB0ZW1wbGF0ZSBUUXVpY2tGb3JtIFR5cGUgZGVmaW5pdGlvbiBmb3IgcXVpY2sgdmlldyBmb3Jtc1xyXG4gKiBAdGVtcGxhdGUgVFByb2Nlc3MgVHlwZSBkZWZpbml0aW9uIGZvciBidXNpbmVzcyBwcm9jZXNzIGZsb3dzXHJcbiAqIEBsaW5rIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlci1hcHBzL2RldmVsb3Blci9tb2RlbC1kcml2ZW4tYXBwcy9jbGllbnRhcGkvcmVmZXJlbmNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9ybUJhc2U8VEJvZHksIFRIZWFkZXIsIFRUYWIsIFRHcmlkLCBUTmF2aWdhdGlvbiwgVFF1aWNrRm9ybSwgVFByb2Nlc3MgPSBhbnk+IHtcclxuICAgIHB1YmxpYyBCb2R5OiBUQm9keTtcclxuICAgIHB1YmxpYyBIZWFkZXI6IFRIZWFkZXI7XHJcbiAgICBwdWJsaWMgVGFiOiBUVGFiO1xyXG4gICAgcHVibGljIEdyaWQ6IFRHcmlkO1xyXG4gICAgcHVibGljIE5hdmlnYXRpb246IFROYXZpZ2F0aW9uO1xyXG4gICAgcHVibGljIFF1aWNrRm9ybTogVFF1aWNrRm9ybTtcclxuICAgIHB1YmxpYyBQcm9jZXNzOiBUUHJvY2VzcztcclxuICAgIHB1YmxpYyBFeGVjdXRpb25Db250ZXh0OiBEZXZLaXQuSUV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICBwdWJsaWMgVXRpbGl0eTogYW55O1xyXG4gICAgcHVibGljIFNpZGVQYW5lczogRGV2S2l0LklTaWRlUGFuZXM7XHJcbiAgICBwdWJsaWMgV2ViQXBpOiBEZXZLaXQuSVdlYkFwaTtcclxuICAgIHB1YmxpYyBDb3BpbG90OiBEZXZLaXQuSUNvcGlsb3Q7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybUlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybUxhYmVsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybVR5cGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhSXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhSXNWYWxpZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBBdHRyaWJ1dGVzOiBhbnk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgQ29udHJvbHM6IGFueTtcclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhWG1sOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5SXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eVJlZmVyZW5jZTogYW55O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IFByaW1hcnlBdHRyaWJ1dGVWYWx1ZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IFZpZXdQb3J0SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgVmlld1BvcnRXaWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIFNhdmU6IChzYXZlT3B0aW9ucz86IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIHB1YmxpYyBSZWZyZXNoOiAoc2F2ZT86IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBwdWJsaWMgQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgU2V0Rm9ybU5vdGlmaWNhdGlvbjogKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIHB1YmxpYyBDbGVhckZvcm1Ob3RpZmljYXRpb246ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgcHVibGljIFJlZnJlc2hSaWJib246IChyZWZyZXNoQWxsPzogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBVaUFkZExvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpUmVtb3ZlTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlBZGRPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBVaVJlbW92ZU9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEFkZE9uUG9zdFNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBBZGRPblNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBSZW1vdmVPblBvc3RTYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgUmVtb3ZlT25TYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRGF0YUFkZE9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIERhdGFSZW1vdmVPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBGb3JtSXNWaXNpYmxlOiAoZm9ybUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgRm9ybU5hdmlnYXRlVG9Gb3JtSWQ6IChmb3JtSWQ6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBGb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbDogKGZvcm1MYWJlbDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEZvcm1TZXRWaXNpYmxlOiAoZm9ybUlkOiBzdHJpbmcsIHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgU2V0Rm9ybUVudGl0eU5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBleGVjdXRpb25Db250ZXh0OiBhbnksXHJcbiAgICAgICAgZGVmYXVsdFdlYlJlc291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIGZvcm1Db25maWc6IElGb3JtQ29uZmlnXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gTG9hZEZvcm1WMjxUQm9keSwgVEhlYWRlciwgVFRhYiwgVEdyaWQsIFROYXZpZ2F0aW9uLCBUUXVpY2tGb3JtLCBUUHJvY2Vzcz4oXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbkNvbnRleHQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUsXHJcbiAgICAgICAgICAgIGZvcm1Db25maWdcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuQm9keSA9IGZvcm0uQm9keTtcclxuICAgICAgICB0aGlzLkhlYWRlciA9IGZvcm0uSGVhZGVyO1xyXG4gICAgICAgIHRoaXMuVGFiID0gZm9ybS5UYWI7XHJcbiAgICAgICAgdGhpcy5HcmlkID0gZm9ybS5HcmlkO1xyXG4gICAgICAgIHRoaXMuTmF2aWdhdGlvbiA9IGZvcm0uTmF2aWdhdGlvbjtcclxuICAgICAgICB0aGlzLlF1aWNrRm9ybSA9IGZvcm0uUXVpY2tGb3JtO1xyXG4gICAgICAgIHRoaXMuUHJvY2VzcyA9IGZvcm0uUHJvY2VzcztcclxuICAgICAgICB0aGlzLkV4ZWN1dGlvbkNvbnRleHQgPSBmb3JtLkV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtSWQgPSBmb3JtLkZvcm1JZDtcclxuICAgICAgICB0aGlzLkZvcm1MYWJlbCA9IGZvcm0uRm9ybUxhYmVsO1xyXG4gICAgICAgIHRoaXMuRm9ybVR5cGUgPSBmb3JtLkZvcm1UeXBlO1xyXG4gICAgICAgIHRoaXMuRW50aXR5SWQgPSBmb3JtLkVudGl0eUlkO1xyXG4gICAgICAgIHRoaXMuRW50aXR5TmFtZSA9IGZvcm0uRW50aXR5TmFtZTtcclxuICAgICAgICB0aGlzLkRhdGFJc0RpcnR5ID0gZm9ybS5EYXRhSXNEaXJ0eTtcclxuICAgICAgICB0aGlzLkRhdGFJc1ZhbGlkID0gZm9ybS5EYXRhSXNWYWxpZDtcclxuICAgICAgICB0aGlzLkF0dHJpYnV0ZXMgPSBmb3JtLkF0dHJpYnV0ZXM7XHJcbiAgICAgICAgdGhpcy5Db250cm9scyA9IGZvcm0uQ29udHJvbHM7XHJcbiAgICAgICAgdGhpcy5EYXRhWG1sID0gZm9ybS5EYXRhWG1sO1xyXG4gICAgICAgIHRoaXMuRW50aXR5SXNEaXJ0eSA9IGZvcm0uRW50aXR5SXNEaXJ0eTtcclxuICAgICAgICB0aGlzLkVudGl0eUlzVmFsaWQgPSBmb3JtLkVudGl0eUlzVmFsaWQ7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlSZWZlcmVuY2UgPSBmb3JtLkVudGl0eVJlZmVyZW5jZTtcclxuICAgICAgICB0aGlzLlByaW1hcnlBdHRyaWJ1dGVWYWx1ZSA9IGZvcm0uUHJpbWFyeUF0dHJpYnV0ZVZhbHVlO1xyXG4gICAgICAgIHRoaXMuVmlld1BvcnRIZWlnaHQgPSBmb3JtLlZpZXdQb3J0SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuVmlld1BvcnRXaWR0aCA9IGZvcm0uVmlld1BvcnRXaWR0aDtcclxuICAgICAgICB0aGlzLlNhdmUgPSBmb3JtLlNhdmU7XHJcbiAgICAgICAgdGhpcy5SZWZyZXNoID0gZm9ybS5SZWZyZXNoO1xyXG4gICAgICAgIHRoaXMuQ2xvc2UgPSBmb3JtLkNsb3NlO1xyXG4gICAgICAgIHRoaXMuU2V0Rm9ybU5vdGlmaWNhdGlvbiA9IGZvcm0uU2V0Rm9ybU5vdGlmaWNhdGlvbjtcclxuICAgICAgICB0aGlzLkNsZWFyRm9ybU5vdGlmaWNhdGlvbiA9IGZvcm0uQ2xlYXJGb3JtTm90aWZpY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuUmVmcmVzaFJpYmJvbiA9IGZvcm0uUmVmcmVzaFJpYmJvbjtcclxuICAgICAgICB0aGlzLlVpQWRkTG9hZGVkID0gZm9ybS5VaUFkZExvYWRlZDtcclxuICAgICAgICB0aGlzLlVpUmVtb3ZlTG9hZGVkID0gZm9ybS5VaVJlbW92ZUxvYWRlZDtcclxuICAgICAgICB0aGlzLlVpQWRkT25Mb2FkID0gZm9ybS5VaUFkZE9uTG9hZDtcclxuICAgICAgICB0aGlzLlVpUmVtb3ZlT25Mb2FkID0gZm9ybS5VaVJlbW92ZU9uTG9hZDtcclxuICAgICAgICB0aGlzLkFkZE9uUG9zdFNhdmUgPSBmb3JtLkFkZE9uUG9zdFNhdmU7XHJcbiAgICAgICAgdGhpcy5BZGRPblNhdmUgPSBmb3JtLkFkZE9uU2F2ZTtcclxuICAgICAgICB0aGlzLlJlbW92ZU9uUG9zdFNhdmUgPSBmb3JtLlJlbW92ZU9uUG9zdFNhdmU7XHJcbiAgICAgICAgdGhpcy5SZW1vdmVPblNhdmUgPSBmb3JtLlJlbW92ZU9uU2F2ZTtcclxuICAgICAgICB0aGlzLkRhdGFBZGRPbkxvYWQgPSBmb3JtLkRhdGFBZGRPbkxvYWQ7XHJcbiAgICAgICAgdGhpcy5EYXRhUmVtb3ZlT25Mb2FkID0gZm9ybS5EYXRhUmVtb3ZlT25Mb2FkO1xyXG4gICAgICAgIHRoaXMuRm9ybUlzVmlzaWJsZSA9IGZvcm0uRm9ybUlzVmlzaWJsZTtcclxuICAgICAgICB0aGlzLkZvcm1OYXZpZ2F0ZVRvRm9ybUlkID0gZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1JZDtcclxuICAgICAgICB0aGlzLkZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsID0gZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbDtcclxuICAgICAgICB0aGlzLkZvcm1TZXRWaXNpYmxlID0gZm9ybS5Gb3JtU2V0VmlzaWJsZTtcclxuICAgICAgICB0aGlzLlNldEZvcm1FbnRpdHlOYW1lID0gZm9ybS5TZXRGb3JtRW50aXR5TmFtZTtcclxuICAgICAgICB0aGlzLlV0aWxpdHkgPSBmb3JtLlV0aWxpdHk7XHJcbiAgICAgICAgdGhpcy5TaWRlUGFuZXMgPSBmb3JtLlNpZGVQYW5lcztcclxuICAgICAgICB0aGlzLldlYkFwaSA9IGZvcm0uV2ViQXBpO1xyXG4gICAgICAgIHRoaXMuQ29waWxvdCA9IGZvcm0uQ29waWxvdDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTG9hZFV0aWxpdHkoZGVmYXVsdFdlYlJlc291cmNlTmFtZT86IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCB1dGlsaXR5OiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgY29uc3QgZ2V0QXBwID0geHJtPy5BcHA7XHJcbiAgICBjb25zdCBnZXREZXZpY2UgPSB4cm0/LkRldmljZTtcclxuICAgIGNvbnN0IGdldEVuY29kaW5nID0geHJtPy5FbmNvZGluZztcclxuICAgIGNvbnN0IGdldEdsb2JhbENvbnRleHQgPSB4cm0/LlV0aWxpdHk/LmdldEdsb2JhbENvbnRleHQoKTtcclxuICAgIGNvbnN0IGdldE5hdmlnYXRpb24gPSB4cm0/Lk5hdmlnYXRpb247XHJcbiAgICBjb25zdCBnZXRQYW5lbCA9IHhybT8uUGFuZWw7XHJcbiAgICBjb25zdCBnZXRVdGlsaXR5ID0geHJtPy5VdGlsaXR5O1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdDbGllbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBnZXRHbG9iYWxDb250ZXh0Py5jbGllbnQ7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NsaWVudE5hbWUnLCAoKSA9PiBjbGllbnQ/LmdldENsaWVudCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ2xpZW50U3RhdGUnLCAoKSA9PiBjbGllbnQ/LmdldENsaWVudFN0YXRlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdGb3JtRmFjdG9yJywgKCkgPT4gY2xpZW50Py5nZXRGb3JtRmFjdG9yKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc05ldHdvcmtBdmFpbGFibGUnLCAoKSA9PiBjbGllbnQ/LmlzTmV0d29ya0F2YWlsYWJsZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNPZmZsaW5lJywgKCkgPT4gY2xpZW50Py5pc09mZmxpbmUoKSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdDbGllbnRVcmwnLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRDbGllbnRVcmwoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0N1cnJlbnRBcHBVcmwnLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRDdXJyZW50QXBwVXJsKCkpO1xyXG4gICAgLy8gQHRzLWlnbm9yZSAtIGlzT25QcmVtaXNlcyBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdJc09uUHJlbWlzZXMnLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5pc09uUHJlbWlzZXMoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0xlYXJuaW5nUGF0aEF0dHJpYnV0ZU5hbWUnLCAoKSA9PiBnZXRVdGlsaXR5Py5nZXRMZWFybmluZ1BhdGhBdHRyaWJ1dGVOYW1lKCkpO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdPcmdhbml6YXRpb25TZXR0aW5ncycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IG9yZ2FuaXphdGlvblNldHRpbmdzID0gZ2V0R2xvYmFsQ29udGV4dD8ub3JnYW5pemF0aW9uU2V0dGluZ3M7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGF0dHJpYnV0ZXMgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnQXR0cmlidXRlcycsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5hdHRyaWJ1dGVzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQmFzZUN1cnJlbmN5JywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmJhc2VDdXJyZW5jeSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0Jhc2VDdXJyZW5jeUlkJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmJhc2VDdXJyZW5jeUlkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRGVmYXVsdENvdW50cnlDb2RlJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmRlZmF1bHRDb3VudHJ5Q29kZSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGZ1bGxOYW1lQ29udmVudGlvbkNvZGUgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnRnVsbE5hbWVDb252ZW50aW9uQ29kZScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5mdWxsTmFtZUNvbnZlbnRpb25Db2RlKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNBdXRvU2F2ZUVuYWJsZWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uaXNBdXRvU2F2ZUVuYWJsZWQpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBpc1RyaWFsT3JnYW5pemF0aW9uIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzVHJpYWxPcmdhbml6YXRpb24nLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uaXNUcmlhbE9yZ2FuaXphdGlvbik7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0xhbmd1YWdlSWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8ubGFuZ3VhZ2VJZCk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIG9yZ2FuaXphdGlvbkV4cGlyeURhdGUgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnT3JnYW5pemF0aW9uRXhwaXJ5RGF0ZScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5vcmdhbml6YXRpb25FeHBpcnlEYXRlKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnT3JnYW5pemF0aW9uSWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8ub3JnYW5pemF0aW9uSWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVbmlxdWVOYW1lJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LnVuaXF1ZU5hbWUpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVc2VTa3lwZVByb3RvY29sJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LnVzZVNreXBlUHJvdG9jb2wpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnUGFnZUNvbnRleHQnLCAoKSA9PiBnZXRVdGlsaXR5Py5nZXRQYWdlQ29udGV4dCgpKTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnVXNlclNldHRpbmdzJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgdXNlclNldHRpbmdzID0gZ2V0R2xvYmFsQ29udGV4dD8udXNlclNldHRpbmdzO1xyXG4gICAgICAgIGdldHRlcihvYmosICdEYXRlRm9ybWF0dGluZ0luZm8nLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmRhdGVGb3JtYXR0aW5nSW5mbyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0RlZmF1bHREYXNoYm9hcmRJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8uZGVmYXVsdERhc2hib2FyZElkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNHdWlkZWRIZWxwRW5hYmxlZCcsICgpID0+IHVzZXJTZXR0aW5ncz8uaXNHdWlkZWRIZWxwRW5hYmxlZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzSGlnaENvbnRyYXN0RW5hYmxlZCcsICgpID0+IHVzZXJTZXR0aW5ncz8uaXNIaWdoQ29udHJhc3RFbmFibGVkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNSVEwnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmlzUlRMKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTGFuZ3VhZ2VJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8ubGFuZ3VhZ2VJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1JvbGVzJywgKCkgPT4gdXNlclNldHRpbmdzPy5yb2xlcyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1NlY3VyaXR5Um9sZVByaXZpbGVnZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnNlY3VyaXR5Um9sZVByaXZpbGVnZXMpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTZWN1cml0eVJvbGVzJywgKCkgPT4gdXNlclNldHRpbmdzPy5zZWN1cml0eVJvbGVzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVGltZVpvbmVPZmZzZXRNaW51dGVzJywgKCkgPT4gdXNlclNldHRpbmdzPy5nZXRUaW1lWm9uZU9mZnNldE1pbnV0ZXMoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1RyYW5zYWN0aW9uQ3VycmVuY3knLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnRyYW5zYWN0aW9uQ3VycmVuY3kpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdUcmFuc2FjdGlvbkN1cnJlbmN5SWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnRyYW5zYWN0aW9uQ3VycmVuY3lJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1VzZXJJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8udXNlcklkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVXNlck5hbWUnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnVzZXJOYW1lKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ1ZlcnNpb24nLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRWZXJzaW9uKCkpO1xyXG4gICAgdXRpbGl0eS5BZGRHbG9iYWxOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldEFwcD8uYWRkR2xvYmFsTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5BZHZhbmNlZENvbmZpZ1NldHRpbmcgPSAoc2V0dGluZzogc3RyaW5nKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRBZHZhbmNlZENvbmZpZ1NldHRpbmcoc2V0dGluZyBhcyBcIk1heENoaWxkSW5jaWRlbnROdW1iZXJcIiB8IFwiTWF4SW5jaWRlbnRNZXJnZU51bWJlclwiKTtcclxuICAgIHV0aWxpdHkuQWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zID0gZnVuY3Rpb24gKGVudGl0eU5hbWU6IHN0cmluZywgc3RhdGVDb2RlOiBudW1iZXIsIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFV0aWxpdHk/LmdldEFsbG93ZWRTdGF0dXNUcmFuc2l0aW9ucyhlbnRpdHlOYW1lLCBzdGF0ZUNvZGUpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQmFyY29kZVZhbHVlID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uZ2V0QmFyY29kZVZhbHVlKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DYXB0dXJlQXVkaW8gPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5jYXB0dXJlQXVkaW8oKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNhcHR1cmVJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZU9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5jYXB0dXJlSW1hZ2UoaW1hZ2VPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNhcHR1cmVWaWRlbyA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmNhcHR1cmVWaWRlbygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2xlYXJHbG9iYWxOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAodW5pcXVlSWQ6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0QXBwPy5jbGVhckdsb2JhbE5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DbG9zZVByb2dyZXNzSW5kaWNhdG9yID0gKCkgPT4gZ2V0VXRpbGl0eT8uY2xvc2VQcm9ncmVzc0luZGljYXRvcigpO1xyXG4gICAgdXRpbGl0eS5DdXJyZW50QXBwTmFtZSA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRHbG9iYWxDb250ZXh0Py5nZXRDdXJyZW50QXBwTmFtZSgpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ3VycmVudEFwcFByb3BlcnRpZXMgPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0Q3VycmVudEFwcFByb3BlcnRpZXMoKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkN1cnJlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmdldEN1cnJlbnRQb3NpdGlvbigpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIC8vIEB0cy1pZ25vcmUgLSBnZXRFbnRpdHlNYWluRm9ybURlc2NyaXB0b3Igbm90IGluIEB0eXBlcy9Ycm1cclxuICAgIHV0aWxpdHkuRW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yID0gKGVudGl0eU5hbWU6IHN0cmluZywgZm9ybUlkOiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LmdldEVudGl0eU1haW5Gb3JtRGVzY3JpcHRvcihlbnRpdHlOYW1lLCBmb3JtSWQpO1xyXG4gICAgdXRpbGl0eS5FbnRpdHlNZXRhZGF0YSA9IGZ1bmN0aW9uIChlbnRpdHlOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBzdHJpbmdbXSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8uZ2V0RW50aXR5TWV0YWRhdGEoZW50aXR5TmFtZSwgYXR0cmlidXRlcyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5IdG1sQXR0cmlidXRlRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8uaHRtbEF0dHJpYnV0ZUVuY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5IdG1sRGVjb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8uaHRtbERlY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5IdG1sRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8uaHRtbEVuY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5JbnZva2VQcm9jZXNzQWN0aW9uID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRVdGlsaXR5Py5pbnZva2VQcm9jZXNzQWN0aW9uKG5hbWUsIHBhcmFtZXRlcnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuTG9hZFBhbmVsID0gKHVybDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKSA9PiBnZXRQYW5lbD8ubG9hZFBhbmVsKHVybCwgdGl0bGUpO1xyXG4gICAgdXRpbGl0eS5Mb29rdXBPYmplY3RzID0gZnVuY3Rpb24gKGxvb2t1cE9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8ubG9va3VwT2JqZWN0cyhsb29rdXBPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk5hdmlnYXRlVG8gPSBmdW5jdGlvbiAocGFnZUlucHV0OiBhbnksIG5hdmlnYXRpb25PcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm5hdmlnYXRlVG8ocGFnZUlucHV0LCBuYXZpZ2F0aW9uT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuQWxlcnREaWFsb2cgPSBmdW5jdGlvbiAoYWxlcnRTdHJpbmdzOiBhbnksIGFsZXJ0T3B0aW9uczogYW55LCBjbG9zZUNhbGxiYWNrPzogKCkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5BbGVydERpYWxvZyhhbGVydFN0cmluZ3MsIGFsZXJ0T3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKGNsb3NlQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oY2xvc2VDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5Db25maXJtRGlhbG9nID0gZnVuY3Rpb24gKGNvbmZpcm1TdHJpbmdzOiBhbnksIGNvbmZpcm1PcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5Db25maXJtRGlhbG9nKGNvbmZpcm1TdHJpbmdzLCBjb25maXJtT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuRXJyb3JEaWFsb2cgPSBmdW5jdGlvbiAoZXJyb3JPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5FcnJvckRpYWxvZyhlcnJvck9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlbkZpbGUgPSAoZmlsZTogYW55LCBvcGVuRmlsZU9wdGlvbnM/OiBhbnkpID0+IGdldE5hdmlnYXRpb24/Lm9wZW5GaWxlKGZpbGUsIG9wZW5GaWxlT3B0aW9ucyk7XHJcbiAgICB1dGlsaXR5Lk9wZW5Gb3JtID0gZnVuY3Rpb24gKGVudGl0eUZvcm1PcHRpb25zOiBhbnksIGZvcm1QYXJhbWV0ZXJzOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5Gb3JtKGVudGl0eUZvcm1PcHRpb25zLCBmb3JtUGFyYW1ldGVycyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuVXJsID0gKHVybDogc3RyaW5nLCBvcGVuVXJsT3B0aW9ucz86IGFueSkgPT4gZ2V0TmF2aWdhdGlvbj8ub3BlblVybCh1cmwsIG9wZW5VcmxPcHRpb25zKTtcclxuICAgIHV0aWxpdHkuT3BlbldlYlJlc291cmNlID0gKHdlYlJlc291cmNlTmFtZTogc3RyaW5nLCB3aW5kb3dPcHRpb25zPzogYW55LCBkYXRhPzogc3RyaW5nKSA9PiBnZXROYXZpZ2F0aW9uPy5vcGVuV2ViUmVzb3VyY2Uod2ViUmVzb3VyY2VOYW1lLCB3aW5kb3dPcHRpb25zLCBkYXRhKTtcclxuICAgIHV0aWxpdHkuUGlja0ZpbGUgPSBmdW5jdGlvbiAocGlja0ZpbGVPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8ucGlja0ZpbGUocGlja0ZpbGVPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LlByZXBlbmRPcmdOYW1lID0gKHNQYXRoOiBzdHJpbmcpID0+IGdldEdsb2JhbENvbnRleHQ/LnByZXBlbmRPcmdOYW1lKHNQYXRoKTtcclxuICAgIHV0aWxpdHkuUmVmcmVzaFBhcmVudEdyaWQgPSAobG9va3VwT3B0aW9uczogYW55KSA9PiBnZXRVdGlsaXR5Py5yZWZyZXNoUGFyZW50R3JpZChsb29rdXBPcHRpb25zKTtcclxuICAgIC8vIEB0cy1pZ25vcmUgLSBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lIG1heSBiZSB1bmRlZmluZWRcclxuICAgIHV0aWxpdHkuUmVzb3VyY2UgPSAoa2V5OiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LmdldFJlc291cmNlU3RyaW5nKGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUhLCBrZXkpO1xyXG4gICAgdXRpbGl0eS5SZXNvdXJjZVN0cmluZyA9ICh3ZWJSZXNvdXJjZU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LmdldFJlc291cmNlU3RyaW5nKHdlYlJlc291cmNlTmFtZSwga2V5KTtcclxuICAgIHV0aWxpdHkuU2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uc2hvd1Byb2dyZXNzSW5kaWNhdG9yKG1lc3NhZ2UpO1xyXG4gICAgdXRpbGl0eS5XZWJSZXNvdXJjZVVybCA9ICh3ZWJSZXNvdXJjZU5hbWU6IHN0cmluZykgPT4gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0V2ViUmVzb3VyY2VVcmwod2ViUmVzb3VyY2VOYW1lKTtcclxuICAgIHV0aWxpdHkuWG1sQXR0cmlidXRlRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8ueG1sQXR0cmlidXRlRW5jb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5LlhtbEVuY29kZSA9IChhcmc6IHN0cmluZykgPT4gZ2V0RW5jb2Rpbmc/LnhtbEVuY29kZShhcmcpO1xyXG4gICAgcmV0dXJuIHV0aWxpdHk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRGb3JtRGlhbG9nKGZvcm1Db250ZXh0OiBhbnksIGZpZWxkczogc3RyaW5nW10pOiBhbnkge1xyXG4gICAgY29uc3QgZm9ybTogYW55ID0ge307XHJcbiAgICBjb25zdCBmaWVsZHNMZW5ndGggPSBmaWVsZHM/Lmxlbmd0aCB8fCAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHNMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkc1tpXTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBmb3JtQ29udGV4dD8uZGF0YT8uZW50aXR5Py5hdHRyaWJ1dGVzPy5nZXQoZmllbGROYW1lKTtcclxuICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZmllbGROYW1lKTtcclxuICAgICAgICBmb3JtW2ZpZWxkTmFtZV0gPSB7fTtcclxuICAgICAgICBsb2FkRmllbGQoZm9ybUNvbnRleHQsIGZvcm1bZmllbGROYW1lXSwgYXR0cmlidXRlLCBjb250cm9sKTtcclxuICAgIH1cclxuICAgIGZvcm0uQ2xvc2UgPSAoKSA9PiBmb3JtQ29udGV4dD8udWk/LmNsb3NlKCk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5jb25zdCBHbG9iYWxPcHRpb25TZXRWYWx1ZXMgPSB7XHJcbiAgICBBZHZhbmNlZENvbmZpZ1NldHRpbmc6IE9iamVjdC5mcmVlemUoeyBNYXhDaGlsZEluY2lkZW50TnVtYmVyOiAnTWF4Q2hpbGRJbmNpZGVudE51bWJlcicsIE1heEluY2lkZW50TWVyZ2VOdW1iZXI6ICdNYXhJbmNpZGVudE1lcmdlTnVtYmVyJyB9KSxcclxuICAgIENsaWVudE5hbWU6IE9iamVjdC5mcmVlemUoeyBXZWI6ICdXZWInLCBPdXRsb29rOiAnT3V0bG9vaycsIE1vYmlsZTogJ01vYmlsZScgfSksXHJcbiAgICBDbGllbnRTdGF0ZTogT2JqZWN0LmZyZWV6ZSh7IE9ubGluZTogJ09ubGluZScsIE9mZmxpbmU6ICdPZmZsaW5lJyB9KSxcclxuICAgIEZpZWxkQXR0cmlidXRlVHlwZTogT2JqZWN0LmZyZWV6ZSh7IEJvb2xlYW46ICdib29sZWFuJywgRGF0ZVRpbWU6ICdkYXRldGltZScsIERlY2ltYWw6ICdkZWNpbWFsJywgRG91YmxlOiAnZG91YmxlJywgSW50ZWdlcjogJ2ludGVnZXInLCBMb29rdXA6ICdsb29rdXAnLCBNZW1vOiAnbWVtbycsIE1vbmV5OiAnbW9uZXknLCBNdWx0aU9wdGlvblNldDogJ211bHRpb3B0aW9uc2V0JywgT3B0aW9uU2V0OiAnb3B0aW9uc2V0JywgU3RyaW5nOiAnc3RyaW5nJyB9KSxcclxuICAgIEZpZWxkQ29udHJvbFR5cGU6IE9iamVjdC5mcmVlemUoeyBTdGFuZGFyZDogJ3N0YW5kYXJkJywgSWZyYW1lOiAnaWZyYW1lJywgS2JTZWFyY2g6ICdrYnNlYXJjaCcsIExvb2t1cDogJ2xvb2t1cCcsIE11bHRpU2VsZWN0T3B0aW9uc2V0OiAnbXVsdGlzZWxlY3RvcHRpb25zZXQnLCBOb3RlczogJ25vdGVzJywgT3B0aW9uU2V0OiAnb3B0aW9uc2V0JywgUXVpY2tGb3JtOiAncXVpY2tmb3JtJywgU3ViR3JpZDogJ3N1YmdyaWQnLCBUaW1lckNvbnRyb2w6ICd0aW1lcmNvbnRyb2wnLCBUaW1lbGluZVdhbGw6ICd0aW1lbGluZXdhbGwnLCBXZWJSZXNvdXJjZTogJ3dlYnJlc291cmNlJyB9KSxcclxuICAgIEZpZWxkRm9ybWF0OiBPYmplY3QuZnJlZXplKHsgRGF0ZTogJ2RhdGUnLCBEYXRlVGltZTogJ2RhdGV0aW1lJywgRHVyYXRpb246ICdkdXJhdGlvbicsIEVtYWlsOiAnZW1haWwnLCBMYW5ndWFnZTogJ2xhbmd1YWdlJywgTm9uZTogJ25vbmUnLCBUZXh0QXJlYTogJ3RleHRhcmVhJywgVGV4dDogJ3RleHQnLCBUaWNrZXJTeW1ib2w6ICd0aWNrZXJzeW1ib2wnLCBQaG9uZTogJ3Bob25lJywgVGltZVpvbmU6ICd0aW1lem9uZScsIFVybDogJ3VybCcgfSksXHJcbiAgICBGaWVsZE5vdGlmaWNhdGlvbkxldmVsOiBPYmplY3QuZnJlZXplKHsgRXJyb3I6ICdFUlJPUicsIFJlY29tbWVuZGF0aW9uOiAnUkVDT01NRU5EQVRJT04nIH0pLFxyXG4gICAgRmllbGRSZXF1aXJlZExldmVsOiBPYmplY3QuZnJlZXplKHsgTm9uZTogJ25vbmUnLCBSZXF1aXJlZDogJ3JlcXVpcmVkJywgUmVjb21tZW5kZWQ6ICdyZWNvbW1lbmRlZCcgfSksXHJcbiAgICBGaWVsZFN1Ym1pdE1vZGU6IE9iamVjdC5mcmVlemUoeyBBbHdheXM6ICdhbHdheXMnLCBOZXZlcjogJ25ldmVyJywgRGlydHk6ICdkaXJ0eScgfSksXHJcbiAgICBGb3JtRmFjdG9yOiBPYmplY3QuZnJlZXplKHsgVW5rbm93bjogMCwgRGVza3RvcDogMSwgVGFibGV0OiAyLCBQaG9uZTogMyB9KSxcclxuICAgIEZvcm1Ob3RpZmljYXRpb25MZXZlbDogT2JqZWN0LmZyZWV6ZSh7IEVycm9yOiAnRVJST1InLCBXYXJuaW5nOiAnV0FSTklORycsIEluZm86ICdJTkZPJyB9KSxcclxuICAgIEZvcm1UeXBlOiBPYmplY3QuZnJlZXplKHsgVW5kZWZpbmVkOiAwLCBDcmVhdGU6IDEsIFVwZGF0ZTogMiwgUmVhZE9ubHk6IDMsIERpc2FibGVkOiA0LCBCdWxrRWRpdDogNSB9KSxcclxuICAgIEZ1bGxOYW1lQ29udmVudGlvbkNvZGU6IE9iamVjdC5mcmVlemUoeyBMYXN0TmFtZV9Db21tYV9GaXJzdE5hbWU6IDAsIEZpcnN0TmFtZV9MYXN0TmFtZTogMSwgTGFzdE5hbWVfQ29tbWFfRmlyc3ROYW1lX01pZGRsZUluaXRpYWw6IDIsIEZpcnN0TmFtZV9NaWRkbGVJbml0aWFsX0xhc3ROYW1lOiAzLCBMYXN0TmFtZV9Db21tYV9GaXJzdE5hbWVfTWlkZGxlTmFtZTogNCwgRmlyc3ROYW1lX01pZGRsZU5hbWVfTGFzdE5hbWU6IDUsIExhc3ROYW1lX0ZpcnN0TmFtZTogNiwgTGFzdE5hbWVGaXJzdE5hbWU6IDcgfSksXHJcbiAgICBHcmlkVHlwZTogT2JqZWN0LmZyZWV6ZSh7IEhvbWVQYWdlR3JpZDogMSwgU3ViZ3JpZDogMiB9KSxcclxuICAgIE9wZW5GaWxlT3B0aW9uOiBPYmplY3QuZnJlZXplKHsgT3BlbjogMSwgU2F2ZTogMiB9KSxcclxuICAgIFByb2Nlc3NDYXRlZ29yeTogT2JqZWN0LmZyZWV6ZSh7IFF1YWxpZnk6IDAsIERldmVsb3A6IDEsIFByb3Bvc2U6IDIsIENsb3NlOiAzLCBJZGVudGlmeTogNCwgUmVzZWFyY2g6IDUsIFJlc29sdmU6IDYgfSksXHJcbiAgICBQcm9jZXNzRGlzcGxheVN0YXRlOiBPYmplY3QuZnJlZXplKHsgRXhwYW5kZWQ6ICdleHBhbmRlZCcsIENvbGxhcHNlZDogJ2NvbGxhcHNlZCcsIEZsb2F0aW5nOiAnZmxvYXRpbmcnIH0pLFxyXG4gICAgUHJvY2Vzc1N0YXR1czogT2JqZWN0LmZyZWV6ZSh7IEFjdGl2ZTogJ2FjdGl2ZScsIEFib3J0ZWQ6ICdhYm9ydGVkJywgRmluaXNoZWQ6ICdmaW5pc2hlZCcgfSksXHJcbiAgICBTYXZlTW9kZTogT2JqZWN0LmZyZWV6ZSh7IFNhdmU6IDEsIFNhdmVBbmRDbG9zZTogMiwgRGVhY3RpdmF0ZTogNSwgUmVhY3RpdmF0ZTogNiwgRW1haWw6IDcsIERpc3F1YWxpZnk6IDE1LCBRdWFsaWZ5OiAxNiwgQXNzaWduOiA0NywgU2F2ZUFzQ29tcGxldGVkOiA1OCwgU2F2ZUFuZE5ldzogNTksIEF1dG9TYXZlOiA3MCB9KSxcclxuICAgIFNhdmVPcHRpb246IE9iamVjdC5mcmVlemUoeyBTYXZlQW5kQ2xvc2U6ICdzYXZlYW5kY2xvc2UnLCBTYXZlQW5kTmV3OiAnc2F2ZWFuZG5ldycgfSksXHJcbiAgICBTaWRlUGFuZVN0YXRlOiBPYmplY3QuZnJlZXplKHsgQ29sbGFwc2VkOiAwLCBFeHBhbmRlZDogMSB9KSxcclxuICAgIFRhYkNvbnRlbnRUeXBlOiBPYmplY3QuZnJlZXplKHsgQ2FyZFNlY3Rpb25zOiAnY2FyZFNlY3Rpb25zJywgU2luZ2xlQ29tcG9uZW50OiAnc2luZ2xlQ29tcG9uZW50JyB9KSxcclxuICAgIFRhYkRpc3BsYXlTdGF0ZTogT2JqZWN0LmZyZWV6ZSh7IEV4cGFuZGVkOiAnZXhwYW5kZWQnLCBDb2xsYXBzZWQ6ICdjb2xsYXBzZWQnIH0pLFxyXG4gICAgVGltZXJTdGF0ZTogT2JqZWN0LmZyZWV6ZSh7IE5vdFNldDogMSwgSW5Qcm9ncmVzczogMiwgV2FybmluZzogMywgVmlvbGF0ZWQ6IDQsIFN1Y2Nlc3M6IDUsIEV4cGlyZWQ6IDYsIENhbmNlbGVkOiA3LCBQYXVzZWQ6IDggfSksXHJcbn0gYXMgY29uc3Q7XHJcbihnbG9iYWxUaGlzIGFzIGFueSkuT3B0aW9uU2V0ID0gKGdsb2JhbFRoaXMgYXMgYW55KS5PcHRpb25TZXQgfHwge307XHJcbk9iamVjdC5hc3NpZ24oKGdsb2JhbFRoaXMgYXMgYW55KS5PcHRpb25TZXQsIEdsb2JhbE9wdGlvblNldFZhbHVlcyk7XHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIG5hbWVzcGFjZSBPcHRpb25TZXQge1xyXG4gICAgICAgIGNvbnN0IEFkdmFuY2VkQ29uZmlnU2V0dGluZzogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5BZHZhbmNlZENvbmZpZ1NldHRpbmc7XHJcbiAgICAgICAgY29uc3QgQ2xpZW50TmFtZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5DbGllbnROYW1lO1xyXG4gICAgICAgIGNvbnN0IENsaWVudFN0YXRlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkNsaWVudFN0YXRlO1xyXG4gICAgICAgIGNvbnN0IEZpZWxkQXR0cmlidXRlVHlwZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5GaWVsZEF0dHJpYnV0ZVR5cGU7XHJcbiAgICAgICAgY29uc3QgRmllbGRDb250cm9sVHlwZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5GaWVsZENvbnRyb2xUeXBlO1xyXG4gICAgICAgIGNvbnN0IEZpZWxkRm9ybWF0OiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkZpZWxkRm9ybWF0O1xyXG4gICAgICAgIGNvbnN0IEZpZWxkTm90aWZpY2F0aW9uTGV2ZWw6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuRmllbGROb3RpZmljYXRpb25MZXZlbDtcclxuICAgICAgICBjb25zdCBGaWVsZFJlcXVpcmVkTGV2ZWw6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuRmllbGRSZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGNvbnN0IEZpZWxkU3VibWl0TW9kZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5GaWVsZFN1Ym1pdE1vZGU7XHJcbiAgICAgICAgY29uc3QgRm9ybUZhY3RvcjogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5Gb3JtRmFjdG9yO1xyXG4gICAgICAgIGNvbnN0IEZvcm1Ob3RpZmljYXRpb25MZXZlbDogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5Gb3JtTm90aWZpY2F0aW9uTGV2ZWw7XHJcbiAgICAgICAgY29uc3QgRm9ybVR5cGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuRm9ybVR5cGU7XHJcbiAgICAgICAgY29uc3QgRnVsbE5hbWVDb252ZW50aW9uQ29kZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5GdWxsTmFtZUNvbnZlbnRpb25Db2RlO1xyXG4gICAgICAgIGNvbnN0IEdyaWRUeXBlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkdyaWRUeXBlO1xyXG4gICAgICAgIGNvbnN0IE9wZW5GaWxlT3B0aW9uOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLk9wZW5GaWxlT3B0aW9uO1xyXG4gICAgICAgIGNvbnN0IFByb2Nlc3NDYXRlZ29yeTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5Qcm9jZXNzQ2F0ZWdvcnk7XHJcbiAgICAgICAgY29uc3QgUHJvY2Vzc0Rpc3BsYXlTdGF0ZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5Qcm9jZXNzRGlzcGxheVN0YXRlO1xyXG4gICAgICAgIGNvbnN0IFByb2Nlc3NTdGF0dXM6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuUHJvY2Vzc1N0YXR1cztcclxuICAgICAgICBjb25zdCBTYXZlTW9kZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5TYXZlTW9kZTtcclxuICAgICAgICBjb25zdCBTYXZlT3B0aW9uOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLlNhdmVPcHRpb247XHJcbiAgICAgICAgY29uc3QgU2lkZVBhbmVTdGF0ZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5TaWRlUGFuZVN0YXRlO1xyXG4gICAgICAgIGNvbnN0IFRhYkNvbnRlbnRUeXBlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLlRhYkNvbnRlbnRUeXBlO1xyXG4gICAgICAgIGNvbnN0IFRhYkRpc3BsYXlTdGF0ZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5UYWJEaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgY29uc3QgVGltZXJTdGF0ZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5UaW1lclN0YXRlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7IEdsb2JhbE9wdGlvblNldFZhbHVlcyBhcyBPcHRpb25TZXQgfTsiLCAiLyoqXHJcbiAqIEFjY291bnQgRm9ybSAtIFR5cGVTY3JpcHQgSW1wbGVtZW50YXRpb25cclxuICogQGRlc2NyaXB0aW9uIEFjY291bnRGb3JtIHdpdGggc2hhcmVkIE9wdGlvblNldHNcclxuICogVXNlcyBuYW1lc3BhY2UgcGF0dGVybiBmb3IgYmV0dGVyIG9yZ2FuaXphdGlvbiBhbmQgbWFpbnRhaW5hYmlsaXR5XHJcbiAqL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2xpYi9kZXZraXQuZC50c1wiIC8+XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vLi4vbGliL2RldmtpdCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE5BTUVTUEFDRTogQWNjb3VudEZvcm0gLSBNYWluIEFjY291bnQgRm9ybVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBuYW1lc3BhY2UgQWNjb3VudEZvcm0ge1xyXG4gICAgLy8gQm9keSBJbnRlcmZhY2UgLSBBTEwgRGV2S2l0IGNvbnRyb2wgdHlwZXNcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUJvZHkge1xyXG4gICAgICAgIC8vID09PT09PT09PT0gU3RhbmRhcmQgRmllbGQgQ29udHJvbHMgPT09PT09PT09PVxyXG4gICAgICAgIC8qKiBTdHJpbmc6IEFjY291bnQgTmFtZSAqL1xyXG4gICAgICAgIE5hbWU6IERldktpdC5Db250cm9scy5TdHJpbmc7XHJcbiAgICAgICAgLyoqIE1lbW86IERlc2NyaXB0aW9uICovXHJcbiAgICAgICAgRGVzY3JpcHRpb246IERldktpdC5Db250cm9scy5NZW1vO1xyXG4gICAgICAgIC8qKiBJbnRlZ2VyOiBOdW1iZXIgb2YgRW1wbG95ZWVzICovXHJcbiAgICAgICAgTnVtYmVyT2ZFbXBsb3llZXM6IERldktpdC5Db250cm9scy5JbnRlZ2VyO1xyXG4gICAgICAgIC8qKiBNb25leTogQW5udWFsIFJldmVudWUgKi9cclxuICAgICAgICBSZXZlbnVlOiBEZXZLaXQuQ29udHJvbHMuTW9uZXk7XHJcbiAgICAgICAgLyoqIEJvb2xlYW46IENyZWRpdCBPbiBIb2xkICovXHJcbiAgICAgICAgQ3JlZGl0T25Ib2xkOiBEZXZLaXQuQ29udHJvbHMuQm9vbGVhbjtcclxuICAgICAgICAvKiogT3B0aW9uU2V0OiBJbmR1c3RyeSBDb2RlICovXHJcbiAgICAgICAgSW5kdXN0cnlDb2RlOiBEZXZLaXQuQ29udHJvbHMuT3B0aW9uU2V0O1xyXG4gICAgICAgIC8qKiBMb29rdXA6IFByaW1hcnkgQ29udGFjdCAqL1xyXG4gICAgICAgIFByaW1hcnlDb250YWN0SWQ6IERldktpdC5Db250cm9scy5Mb29rdXA7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT0gQ3VzdG9tIHY0XyBGaWVsZCBDb250cm9scyA9PT09PT09PT09XHJcbiAgICAgICAgLyoqIERhdGUgKERhdGVPbmx5KTogQ3VzdG9tIEJpcnRoZGF5IGZpZWxkICovXHJcbiAgICAgICAgdjRfQmlydGhkYXk6IERldktpdC5Db250cm9scy5EYXRlT25seTtcclxuICAgICAgICAvKiogRGF0ZVRpbWU6IEN1c3RvbSBBcHBvaW50bWVudCBUaW1lIGZpZWxkICovXHJcbiAgICAgICAgdjRfQXBwb2ludG1lbnRUaW1lOiBEZXZLaXQuQ29udHJvbHMuRGF0ZVRpbWU7XHJcbiAgICAgICAgLyoqIERlY2ltYWw6IEN1c3RvbSBMYXRpdHVkZSBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0xhdGl0dWRlOiBEZXZLaXQuQ29udHJvbHMuRGVjaW1hbDtcclxuICAgICAgICAvKiogRG91YmxlOiBDdXN0b20gRGlzY291bnQgUGVyY2VudGFnZSBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0Rpc2NvdW50UGVyY2VudGFnZTogRGV2S2l0LkNvbnRyb2xzLkRvdWJsZTtcclxuICAgICAgICAvKiogTXVsdGlPcHRpb25TZXQ6IEN1c3RvbSBDYXRlZ29yaWVzIGZpZWxkICovXHJcbiAgICAgICAgdjRfQ2F0ZWdvcmllczogRGV2S2l0LkNvbnRyb2xzLk11bHRpT3B0aW9uU2V0O1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09IFNwZWNpYWx0eSBDb250cm9scyA9PT09PT09PT09XHJcbiAgICAgICAgLyoqIFdlYlJlc291cmNlOiBDdXN0b20gSGVscCBXZWIgUmVzb3VyY2UgKi9cclxuICAgICAgICB2NF9XZWJSZXNvdXJjZUhlbHA6IERldktpdC5Db250cm9scy5XZWJSZXNvdXJjZTtcclxuICAgICAgICAvKiogSUZyYW1lOiBDdXN0b20gRXh0ZXJuYWwgUGFnZSAqL1xyXG4gICAgICAgIHY0X0lGcmFtZUV4dGVybmFsOiBEZXZLaXQuQ29udHJvbHMuSUZyYW1lO1xyXG4gICAgICAgIC8qKiBUaW1lcjogQ3VzdG9tIFNMQSBUaW1lciAqL1xyXG4gICAgICAgIHY0X1RpbWVyU0xBOiBEZXZLaXQuQ29udHJvbHMuVGltZXI7XHJcbiAgICAgICAgLyoqIEtub3dsZWRnZTogS25vd2xlZGdlIEJhc2UgU2VhcmNoICovXHJcbiAgICAgICAgdjRfS25vd2xlZGdlU2VhcmNoOiBEZXZLaXQuQ29udHJvbHMuS25vd2xlZGdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlYWRlciBJbnRlcmZhY2VcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlciB7XHJcbiAgICAgICAgLyoqIExvb2t1cDogT3duZXIgKi9cclxuICAgICAgICBPd25lcklkOiBEZXZLaXQuQ29udHJvbHMuTG9va3VwO1xyXG4gICAgICAgIC8qKiBJbnRlZ2VyOiBOdW1iZXIgb2YgRW1wbG95ZWVzICovXHJcbiAgICAgICAgTnVtYmVyT2ZFbXBsb3llZXM6IERldktpdC5Db250cm9scy5JbnRlZ2VyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRhYiBhbmQgU2VjdGlvbiBJbnRlcmZhY2VzXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEZXRhaWxzVGFiU2VjdGlvbnMge1xyXG4gICAgICAgIEJJTExJTkc6IERldktpdC5Db250cm9scy5TZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSURldGFpbHNUYWIgZXh0ZW5kcyBEZXZLaXQuQ29udHJvbHMuSVRhYiB7XHJcbiAgICAgICAgU2VjdGlvbjogSURldGFpbHNUYWJTZWN0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElUYWJzIHtcclxuICAgICAgICBERVRBSUxTX1RBQjogSURldGFpbHNUYWI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JpZCBJbnRlcmZhY2VcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUdyaWQge1xyXG4gICAgICAgIENvbnRhY3RzOiBEZXZLaXQuQ29udHJvbHMuR3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOYXZpZ2F0aW9uIEludGVyZmFjZVxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgQWNjb3VudF9UYXNrczogRGV2S2l0LkNvbnRyb2xzLk5hdmlnYXRpb25JdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFF1aWNrRm9ybSBJbnRlcmZhY2VcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVF1aWNrRm9ybSB7XHJcbiAgICAgICAgY29udGFjdHF1aWNrZm9ybTogRGV2S2l0LkNvbnRyb2xzLklRdWlja1ZpZXcgJiB7XHJcbiAgICAgICAgICAgIEJvZHk6IHtcclxuICAgICAgICAgICAgICAgIEVNYWlsQWRkcmVzczE6IERldktpdC5Db250cm9scy5RdWlja1ZpZXc7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdXNpbmVzcyBQcm9jZXNzIEZsb3cgSW50ZXJmYWNlXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElCUEYge1xyXG4gICAgICAgIC8qKiBCUEYgRmllbGQ6IEFjY291bnQgTmFtZSAoU3RhZ2UgMTogUXVhbGlmeSkgKi9cclxuICAgICAgICBOYW1lOiBEZXZLaXQuQ29udHJvbHMuU3RyaW5nO1xyXG4gICAgICAgIC8qKiBCUEYgRmllbGQ6IEluZHVzdHJ5IENvZGUgKFN0YWdlIDE6IFF1YWxpZnkpICovXHJcbiAgICAgICAgSW5kdXN0cnlDb2RlOiBEZXZLaXQuQ29udHJvbHMuT3B0aW9uU2V0O1xyXG4gICAgICAgIC8qKiBCUEYgRmllbGQ6IFJldmVudWUgKFN0YWdlIDI6IERldmVsb3ApICovXHJcbiAgICAgICAgUmV2ZW51ZTogRGV2S2l0LkNvbnRyb2xzLk1vbmV5O1xyXG4gICAgICAgIC8qKiBCUEYgRmllbGQ6IFByaW1hcnkgQ29udGFjdCAoU3RhZ2UgMjogRGV2ZWxvcCkgKi9cclxuICAgICAgICBQcmltYXJ5Q29udGFjdElkOiBEZXZLaXQuQ29udHJvbHMuTG9va3VwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2Nlc3MgSW50ZXJmYWNlXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElQcm9jZXNzIGV4dGVuZHMgRGV2S2l0LkNvbnRyb2xzLklQcm9jZXNzIHtcclxuICAgICAgICAvKiogdjRfQWNjb3VudEJQRiAtIEN1c3RvbSBBY2NvdW50IEJ1c2luZXNzIFByb2Nlc3MgRmxvdyAqL1xyXG4gICAgICAgIHY0X0FjY291bnRCUEY6IElCUEY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9ybSBDbGFzc1xyXG4gICAgZXhwb3J0IGNsYXNzIEZvcm0gZXh0ZW5kcyBGb3JtQmFzZTxJQm9keSwgSUhlYWRlciwgSVRhYnMsIElHcmlkLCBJTmF2aWdhdGlvbiwgSVF1aWNrRm9ybSwgSVByb2Nlc3M+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihleGVjdXRpb25Db250ZXh0OiBhbnksIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoZXhlY3V0aW9uQ29udGV4dCwgZGVmYXVsdFdlYlJlc291cmNlTmFtZSwge1xyXG4gICAgICAgICAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiTmFtZVwiLCBcIkRlc2NyaXB0aW9uXCIsIFwiTnVtYmVyT2ZFbXBsb3llZXNcIiwgXCJSZXZlbnVlXCIsIFwiQ3JlZGl0T25Ib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJbmR1c3RyeUNvZGVcIiwgXCJQcmltYXJ5Q29udGFjdElkXCIsIFwidjRfQmlydGhkYXlcIiwgXCJ2NF9BcHBvaW50bWVudFRpbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInY0X0xhdGl0dWRlXCIsIFwidjRfRGlzY291bnRQZXJjZW50YWdlXCIsIFwidjRfQ2F0ZWdvcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidjRfV2ViUmVzb3VyY2VIZWxwXCIsIFwidjRfSUZyYW1lRXh0ZXJuYWxcIiwgXCJ2NF9UaW1lclNMQVwiLCBcInY0X0tub3dsZWRnZVNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBbXCJPd25lcklkXCIsIFwiTnVtYmVyT2ZFbXBsb3llZXNcIl0sXHJcbiAgICAgICAgICAgICAgICB0YWI6IFtcIkRFVEFJTFNfVEFCX19fQklMTElOR1wiXSxcclxuICAgICAgICAgICAgICAgIGdyaWQ6IFtcIkNvbnRhY3RzXCJdLFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjogW1wiQWNjb3VudF9UYXNrc1wiXSxcclxuICAgICAgICAgICAgICAgIHF1aWNrOiBbXCJjb250YWN0cXVpY2tmb3JtX19fRU1haWxBZGRyZXNzMVwiXSxcclxuICAgICAgICAgICAgICAgIGJwZjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwidjRfQWNjb3VudEJQRl9fX05hbWVcIiwgXCJ2NF9BY2NvdW50QlBGX19fSW5kdXN0cnlDb2RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2NF9BY2NvdW50QlBGX19fUmV2ZW51ZVwiLCBcInY0X0FjY291bnRCUEZfX19QcmltYXJ5Q29udGFjdElkXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE5BTUVTUEFDRTogQWNjb3VudC5PcHRpb25TZXQgLSBTaGFyZWQgT3B0aW9uU2V0cyBmb3IgQWNjb3VudCBGb3Jtc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBuYW1lc3BhY2UgQWNjb3VudCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE9wdGlvblNldCB7XHJcbiAgICAgICAgLyoqIEluZHVzdHJ5IENvZGUgT3B0aW9uU2V0ICovXHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEluZHVzdHJ5Q29kZSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgICAgICBBY2NvdW50aW5nOiAxLFxyXG4gICAgICAgICAgICBDb25zdWx0aW5nOiA3LFxyXG4gICAgICAgICAgICBGaW5hbmNpYWw6IDE2LFxyXG4gICAgICAgICAgICBJbnN1cmFuY2U6IDIwLFxyXG4gICAgICAgICAgICBUZWNobm9sb2d5OiAxMlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKiogQ3VzdG9tIE11bHRpT3B0aW9uU2V0IC0gdjRfQ2F0ZWdvcmllcyAqL1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB2NF9DYXRlZ29yaWVzID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIENhdGVnb3J5X0E6IDEwMDAwMDAwMCxcclxuICAgICAgICAgICAgQ2F0ZWdvcnlfQjogMTAwMDAwMDAxLFxyXG4gICAgICAgICAgICBDYXRlZ29yeV9DOiAxMDAwMDAwMDIsXHJcbiAgICAgICAgICAgIENhdGVnb3J5X0Q6IDEwMDAwMDAwM1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQb3B1bGF0ZSBnbG9iYWwgT3B0aW9uU2V0LkFjY291bnQgYXQgcnVudGltZSBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4oZ2xvYmFsVGhpcyBhcyBhbnkpLk9wdGlvblNldCA9IChnbG9iYWxUaGlzIGFzIGFueSkuT3B0aW9uU2V0IHx8IHt9O1xyXG4oZ2xvYmFsVGhpcyBhcyBhbnkpLk9wdGlvblNldC5BY2NvdW50ID0gQWNjb3VudC5PcHRpb25TZXQ7XHJcblxyXG4vLyBEZWNsYXJlIGdsb2JhbCBuYW1lc3BhY2UgZXh0ZW5zaW9uIGZvciBUeXBlU2NyaXB0IEludGVsbGlTZW5zZVxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBuYW1lc3BhY2UgT3B0aW9uU2V0IHtcclxuICAgICAgICBuYW1lc3BhY2UgQWNjb3VudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IEluZHVzdHJ5Q29kZToge1xyXG4gICAgICAgICAgICAgICAgcmVhZG9ubHkgQWNjb3VudGluZzogMTtcclxuICAgICAgICAgICAgICAgIHJlYWRvbmx5IENvbnN1bHRpbmc6IDc7XHJcbiAgICAgICAgICAgICAgICByZWFkb25seSBGaW5hbmNpYWw6IDE2O1xyXG4gICAgICAgICAgICAgICAgcmVhZG9ubHkgSW5zdXJhbmNlOiAyMDtcclxuICAgICAgICAgICAgICAgIHJlYWRvbmx5IFRlY2hub2xvZ3k6IDEyO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB2NF9DYXRlZ29yaWVzOiB7XHJcbiAgICAgICAgICAgICAgICByZWFkb25seSBDYXRlZ29yeV9BOiAxMDAwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICByZWFkb25seSBDYXRlZ29yeV9COiAxMDAwMDAwMDE7XHJcbiAgICAgICAgICAgICAgICByZWFkb25seSBDYXRlZ29yeV9DOiAxMDAwMDAwMDI7XHJcbiAgICAgICAgICAgICAgICByZWFkb25seSBDYXRlZ29yeV9EOiAxMDAwMDAwMDM7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1Q6IExvb2t1cCBDb250cm9sIC0gUHJpbWFyeUNvbnRhY3RJZCBGaWVsZFxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdExvb2t1cChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmNsZWFyKCk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBsb29rdXAgPSBmb3JtLkJvZHkuUHJpbWFyeUNvbnRhY3RJZDtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gQ29sbGVjdCBhbGwgdGVzdCByZXN1bHRzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFRlc3QgMTogVmFsdWVcclxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBsb29rdXAuVmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGFzVmFsdWUgPSBjdXJyZW50VmFsdWUgJiYgY3VycmVudFZhbHVlLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCIxXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlZhbHVlXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBoYXNWYWx1ZSA/IGAke2N1cnJlbnRWYWx1ZVswXS5uYW1lfSAoJHtjdXJyZW50VmFsdWVbMF0uZW50aXR5VHlwZX0pYCA6IFwiKGVtcHR5KVwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVGVzdCAyOiBJc1BhcnR5TGlzdFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiMlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJJc1BhcnR5TGlzdFwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLklzUGFydHlMaXN0LFxyXG4gICAgICAgICAgICBTdGF0dXM6IGxvb2t1cC5Jc1BhcnR5TGlzdCA9PT0gZmFsc2UgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUZXN0IDM6IEVudGl0eVR5cGVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCIzXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkVudGl0eVR5cGVzXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBKU09OLnN0cmluZ2lmeShsb29rdXAuRW50aXR5VHlwZXMpLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVGVzdCA0OiBEZWZhdWx0Vmlld1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiNFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJEZWZhdWx0Vmlld1wiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLkRlZmF1bHRWaWV3LFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVGVzdCA1OiBWaXNpYmxlXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCI1XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlZpc2libGVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGxvb2t1cC5WaXNpYmxlLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVGVzdCA2OiBEaXNhYmxlZFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiNlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLkRpc2FibGVkLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVGVzdCA3OiBDb250cm9sVHlwZVxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiN1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLkNvbnRyb2xUeXBlLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGxvb2t1cC5Db250cm9sVHlwZSA9PT0gXCJsb29rdXBcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRlc3QgODogQ29udHJvbE5hbWUgJiBBdHRyaWJ1dGVOYW1lXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCI4YVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLkNvbnRyb2xOYW1lLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIjhiXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGxvb2t1cC5BdHRyaWJ1dGVOYW1lLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVGVzdCA5OiBBdHRyaWJ1dGUgUHJvcGVydGllc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiOWFcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLkF0dHJpYnV0ZVR5cGUsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiOWJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLlJlcXVpcmVkTGV2ZWwsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiOWNcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLlN1Ym1pdE1vZGUsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiOWRcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiSXNWYWxpZFwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLklzVmFsaWQsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiOWVcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLklzRGlydHksXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiOWZcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRm9ybWF0XCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBsb29rdXAuRm9ybWF0LFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIjlnXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIixcclxuICAgICAgICAgICAgU3RhdHVzOiBsb29rdXAuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJFUlJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRXJyb3JcIixcclxuICAgICAgICAgICAgVmFsdWU6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRlc3QgMTAtMTM6IE1ldGhvZHMgKHRoZXNlIGhhdmUgc2lkZSBlZmZlY3RzLCBsb2cgc2VwYXJhdGVseSlcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLkFkZFByZVNlYXJjaCgoY3R4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyWG1sID0gXCI8ZmlsdGVyIHR5cGU9J2FuZCc+PGNvbmRpdGlvbiBhdHRyaWJ1dGU9J3N0YXRlY29kZScgb3BlcmF0b3I9J2VxJyB2YWx1ZT0nMCcgLz48L2ZpbHRlcj5cIjtcclxuICAgICAgICAgICAgbG9va3VwLkFkZEN1c3RvbUZpbHRlcihmaWx0ZXJYbWwsIFwiY29udGFjdFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjEwXCIsIFByb3BlcnR5OiBcIkFkZFByZVNlYXJjaFwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiMTBcIiwgUHJvcGVydHk6IFwiQWRkUHJlU2VhcmNoXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5BZGRDdXN0b21WaWV3KFxyXG4gICAgICAgICAgICBcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMVwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIixcclxuICAgICAgICAgICAgXCJBY3RpdmUgQ29udGFjdHMgKEN1c3RvbSBWaWV3KVwiLFxyXG4gICAgICAgICAgICBcIjxmZXRjaD48ZW50aXR5IG5hbWU9J2NvbnRhY3QnPjxhdHRyaWJ1dGUgbmFtZT0nZnVsbG5hbWUnLz48L2VudGl0eT48L2ZldGNoPlwiLFxyXG4gICAgICAgICAgICBcIjxncmlkIG5hbWU9J3Jlc3VsdHNldCc+PHJvdyBuYW1lPSdyZXN1bHQnIGlkPSdjb250YWN0aWQnPjxjZWxsIG5hbWU9J2Z1bGxuYW1lJyB3aWR0aD0nMjAwJy8+PC9yb3c+PC9ncmlkPlwiLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCIxMVwiLCBQcm9wZXJ0eTogXCJBZGRDdXN0b21WaWV3XCIsIFZhbHVlOiBcIkFkZGVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiMTFcIiwgUHJvcGVydHk6IFwiQWRkQ3VzdG9tVmlld1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBub3RpZmljYXRpb25cIiwgXCJURVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29rdXAuQ2xlYXJOb3RpZmljYXRpb24oXCJURVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiMTJcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIGluIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjEyXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvb2t1cC5Gb2N1cygpLCA0MDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjEzXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoNHMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiMTNcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PSBPVVRQVVQ6IFNpbmdsZSBncm91cGVkIGxvZyA9PT1cclxuICAgIGNvbnNvbGUuZ3JvdXAoYFx1RDgzRFx1REQwRCBMT09LVVAgVEVTVDogUHJpbWFyeUNvbnRhY3RJZCBbJHtzdGFydFRpbWV9XWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUHJvcGVydGllc1wiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIE1ldGhvZHNcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgLy8gU3VtbWFyeVxyXG4gICAgY29uc3QgcGFzc2VkID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IHJlc3VsdHMubGVuZ3RoICsgbWV0aG9kUmVzdWx0cy5sZW5ndGg7XHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiBncmVlbjsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLFdBQVMsU0FBaUM7QUFDdEMsUUFBSSxPQUFPLFdBQVcsZUFBZ0IsT0FBZSxRQUFRLFFBQVc7QUFDcEUsYUFBUSxPQUFlO0FBQUEsSUFDM0I7QUFDQSxRQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU8sT0FBTyxXQUFXLGVBQWdCLE9BQU8sT0FBZSxRQUFRLFFBQVc7QUFDbkgsYUFBUSxPQUFPLE9BQWU7QUFBQSxJQUNsQztBQUNBLFFBQUksT0FBTyxXQUFXLGVBQWUsT0FBTyxPQUFPLFdBQVcsZUFBZSxPQUFPLE9BQU8sT0FBTyxXQUFXLGVBQWdCLE9BQU8sT0FBTyxPQUFlLFFBQVEsUUFBVztBQUN6SyxhQUFRLE9BQU8sT0FB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LElBQUksMEJBQW1CLHFDQUFxQztBQUNwRSxZQUFRLE1BQU0sT0FBTztBQUVyQixZQUFRLElBQUksb0JBQWUscUNBQXFDO0FBQ2hFLFlBQVEsTUFBTSxhQUFhO0FBRzNCLFVBQU0sU0FBUyxDQUFDLEdBQUcsU0FBUyxHQUFHLGFBQWEsRUFBRSxPQUFPLE9BQUssRUFBRSxXQUFXLFFBQUcsRUFBRTtBQUM1RSxVQUFNLFFBQVEsUUFBUSxTQUFTLGNBQWM7QUFDN0MsWUFBUSxJQUFJLHFCQUFnQixNQUFNLElBQUksS0FBSyxXQUFXLG1EQUFtRDtBQUV6RyxZQUFRLFNBQVM7QUFBQSxFQUNyQjs7O0FIek1BLE1BQU0sY0FBZSxXQUFZO0FBQzdCO0FBRUEsUUFBSTtBQUVKLG1CQUFlLE9BQU8sa0JBQXNDO0FBQ3hELGFBQU8sSUFBSSxZQUFZLEtBQUssZ0JBQWdCO0FBQzVDLHFCQUFlO0FBQ2YsV0FBSyxZQUFZLFdBQVc7QUFBQSxJQUNoQztBQUVBLGFBQVMsaUJBQXVCO0FBQzVCLFVBQUksS0FBSyxpQkFBaUIsY0FBYyxHQUFHO0FBQUEsTUFDM0M7QUFBQSxJQUNKO0FBTUEsbUJBQWUsWUFBWSxrQkFBc0M7QUFLN0QsaUJBQVcsTUFBTTtBQUNiO0FBQ0EsbUJBQVcsSUFBSTtBQUFBLE1BQ25CLEdBQUcsR0FBSztBQUFBLElBR1o7QUEyQkEsV0FBTztBQUFBLE1BQ0gsUUFBUTtBQUFBLElBQ1o7QUFBQSxFQUNKLEVBQUc7QUFFSCxNQUFPLGtCQUFROyIsCiAgIm5hbWVzIjogWyJmb3JtQ29udGV4dCIsICJ0YWJzIiwgIm5hdmlnYXRpb25zIiwgInF1aWNrRm9ybXMiLCAiZ3JpZHMiLCAiQWNjb3VudEZvcm0iLCAiQWNjb3VudCIsICJPcHRpb25TZXQiXQp9Cg==
